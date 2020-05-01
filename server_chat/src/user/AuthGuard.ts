import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from './user.service';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly userService: UserService
    ) {
    }
    // jwtSecret
    public validate = async (token: string) => {
        try {
            const decode: any = await jwt.verify(token, "jwtSecret")

            const { _id } = decode;

            const user = await this.userService.getUserById(_id);
            return user
        } catch (err) {
            throw new UnauthorizedException()
        }
    }


    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx: any = GqlExecutionContext.create(context).getContext();

        if (!ctx?.headers?.authorization) {
            throw new UnauthorizedException()
        }

        const token = ctx.headers.authorization.split(" ")

        if (token?.length > 0 && token[0] !== "Bearer") {
            throw new UnauthorizedException("")
        }

        const user = await this.validate(token[1])
        ctx.user = user;
        return true

    }
}