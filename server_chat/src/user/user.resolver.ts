import { Resolver, Query, Args, Mutation, } from "@nestjs/graphql";
import { UserService } from './user.service';
// import { ChatService } from '../chat/chat.service';


@Resolver('User')
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        // private readonly chatService: ChatService
    ) { }

    @Query()
    searchUser(@Args("searchKey") searchKey: string) {
        return this.userService.getUserByAnyFields(searchKey)
    }


    @Mutation()
    getChatList(@Args("userId") userId: string) {
        // return this.chatService()
        return "Hasi"
    }




}