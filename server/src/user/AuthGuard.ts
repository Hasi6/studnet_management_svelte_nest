import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly userService: UserService
    ) { }


    canActivate(context: ExecutionContext): boolean {
        const ctx: any = GqlExecutionContext.create(context).getContext();
        console.log(ctx?.headers?.authorization)
        return true;
    }
}