import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {

    constructor(
        private readonly userService: UserService
    ) { }


    @Mutation()
    register(@Args('input') input: any) {
        return this.userService.register(input);
    }

    @Mutation()
    login(@Args('input') input: any) {
        return this.userService.login(input);
    }

}
