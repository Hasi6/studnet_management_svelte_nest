import { IUser } from './../user/user.model';
import { Resolver, Mutation, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { ChatService } from './chat.service';
import { UserService } from '../user/user.service';

@Resolver('Chat')
export class ChatResolver {

    constructor(
        private readonly chatService: ChatService,
        private readonly userService: UserService
    ) { }

    // @Query()
    // faculties() {
    //     return this.departmentService.d
    // }

    @Mutation()
    async chats(@Args("userId") userId: string) {
        return this.chatService.getChatByUserId(userId)
    }

    @ResolveProperty()
    async users(@Parent() chat) {
        let users: IUser[] = []
        const res = await chat.userIds.map(async (userId: string) => {
            const user = await this.userService.getUserById(userId)
            users = [...users, user]
        })
        await Promise.all(res)

        return users
    }


}