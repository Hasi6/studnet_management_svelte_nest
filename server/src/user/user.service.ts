import { IUser, IJwtToken } from './user.model';
import { Injectable, Logger, InternalServerErrorException, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as gravatar from 'gravatar';
import * as bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';


import { UserRepo } from './user.repo';
import { CreateUserDto, LoginUserDto } from './Dto/user.dto';

const logger: Logger = new Logger()

@Injectable()
export class UserService {

    constructor(
        private readonly userRepo: UserRepo,
        private readonly jwt: JwtService

    ) { }

    // ************************************ Create User *****************************************
    // Create User
    public register = async (createUserDto: CreateUserDto): Promise<IUser> => {
        try {
            const { email, password, username } = createUserDto;

            const image = gravatar.url(email, {
                s: "200",
                r: "pg",
                d: "mm"
            })
            const token = `${email}-${uuid()}-${Date.now()}`
            const user: IUser = {
                email, password, image, username, token
            }
            // encrypt the password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            return await this.userRepo.createUser(user);

        } catch (err) {
            logger.error(`Register Service Error ${err.message}`)
            throw new InternalServerErrorException()
        }
    }

    // Login User
    public login = async (loginUserDto: LoginUserDto): Promise<{ token: string }> => {
        try {
            const { email, password } = loginUserDto;
            const user: IUser = await this.userRepo.getUserByEmailOrUsername(email);
            if (!user) {
                throw new BadRequestException("Invalid Credentials")
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                throw new UnauthorizedException()
            }
            const payload: IJwtToken = {
                _id: user._id,
                email: user.email,
                image: user.image,
                username: user.username,
                onLineStatus: user.onlineStatus
            }
            const token = this.jwt.sign(payload)
            return { token }
        } catch (err) {
            logger.error(`Login Service Error ${err.message}`)
            if (err.status === 400) {
                throw new BadRequestException()
            } else if (err.status === 401) {
                throw new UnauthorizedException("Invalid Credentials")
            } else {
                throw new InternalServerErrorException()
            }
        }
    }



}
