import { IUser } from './../user/user.model';
import { Resolver, Mutation, Args, Parent, ResolveField, Query } from '@nestjs/graphql';
import { UserService } from '../user/user.service';
import { MessagesService } from './messages.service';


@Resolver('Message')
export class MessageResolver {

    constructor(
        private readonly messagesService: MessagesService,
        private readonly userService: UserService
    ) { }

    // @Query()
    // faculties() {
    //     return this.departmentService.d
    // }

    // @Query()
    // messages(@Args("chatId") chatId: string) {
    //     return this.messagesService.getMessagesByChatId(chatId)
    // }

    @Mutation()
    messages(@Args("chatId") chatId: string) {
        return this.messagesService.getMessagesByChatId(chatId)
    }

    // @ResolveField()
    // async users(@Parent() chat) {
    //     let users: IUser[] = []
    //     const res = await chat.userIds.map(async (userId: string) => {
    //         const user = await this.userService.getUserById(userId)
    //         users = [...users, user]
    //     })
    //     await Promise.all(res)

    //     return users
    // }


}