import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from './user.service';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class AuthGuard extends PassportStrategy(Strategy) implements CanActivate {

    constructor(
        private readonly userService: UserService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'jwtSecret'
        });
    }


    canActivate(context: ExecutionContext): boolean {
        const ctx: any = GqlExecutionContext.create(context).getContext();
        console.log(ctx?.headers?.authorization)

        if (!ctx?.headers?.authorization) {
            throw new UnauthorizedException()
        }

        return true;
    }
}