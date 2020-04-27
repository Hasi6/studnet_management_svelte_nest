import { Resolver, Query, Args, } from "@nestjs/graphql";
import { UserService } from './user.service';


@Resolver('User')
export class UserResolver {
    constructor(
        private readonly userService: UserService
    ) { }

    @Query()
    async searchUser(@Args("searchKey") searchKey: string) {
        console.log(await this.userService.getUserByAnyFields(searchKey))
        return this.userService.getUserByAnyFields(searchKey)
    }



}