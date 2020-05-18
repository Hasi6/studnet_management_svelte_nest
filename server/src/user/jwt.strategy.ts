import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IJwtToken, IUser } from './user.model';
import { UserRepo } from './user.repo';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        private userRepo: UserRepo
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'jwtSecret'
        });
    }

    public validate = async (payload: IJwtToken): Promise<IUser> => {
        const { email } = payload
        const user = await this.userRepo.getUserByEmail(email)

        if (!user) {
            throw new UnauthorizedException()
        }
        return user;
    }

}