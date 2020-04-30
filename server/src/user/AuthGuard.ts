import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const ctx: any = GqlExecutionContext.create(context).getContext();
        console.log(ctx?.headers?.authorization)
        return true;
    }
}