import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { ChatService } from './chat.service';
import { UserService } from '../user/user.service';

@Resolver('Chats')
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
    chats(@Args("userId") userId: string) {
        return "Hasi"
    }


}