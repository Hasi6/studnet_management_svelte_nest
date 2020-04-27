import { IUser, IJwtToken } from './user.model';
import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as gravatar from 'gravatar';
import * as bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';



import { UserRepo } from './user.repo';
import { CreateUserDto, LoginUserDto, ResetPassword } from './Dto/user.dto';
import Email from '../services/email/sendEmail';
import databaseData from '../config/default';

const { endPoint } = databaseData



@Injectable()
export class UserService {

    constructor(
        private readonly userRepo: UserRepo,
        private readonly jwt: JwtService
    ) { }


    private email: Email = new Email();


    // ************************************ Create User *****************************************
    // Create User
    public register = async (createUserDto: CreateUserDto): Promise<string> => {
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

        const res = await this.userRepo.createUser(user);
        if (res === "User Created") {
            const output = `<a href="${endPoint}/verifyAccount${token}">Click Here to Verify Your Account</a>`;
            this.email.sendEmail(email, output, "Active Your Account")
        }
        return res;
    }


    // Login User
    public login = async (loginUserDto: LoginUserDto): Promise<{ token: string }> => {
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
    }

    // ********************************************** Edit User *************************************************
    //  Verify Account
    public verifyAccounts = async (token: string): Promise<boolean> => {
        const user: IUser = await this.userRepo.getUserByToken(token);
        if (!user) {
            throw new BadRequestException("Invalid or Expired Token")
        }
        const newToken = `${user.email}-${uuid()}-${Date.now()}`
        return await this.userRepo.verifyUserAccount(token, newToken);
    }

    // Send Reset Password Link
    public sendResetPasswordLink = async (email: string) => {
        const user: IUser | null = await this.userRepo.getUserByEmail(email);
        if (!user) {
            throw new BadRequestException("No User Found on that Email");
        }
        const { token } = user;
        const output = `<a href="${endPoint}/resetPassword/${token}">Click Here to Reset Your Password</a>`
        this.email.sendEmail(email, output, "Reset User Password");
        return true;
    }

    // Reset Password
    public resetPassword = async (token: string, resetPasswordDto: ResetPassword) => {
        let { password } = resetPasswordDto
        const user = await this.userRepo.getUserByToken(token);
        if (!user) {
            throw new BadRequestException("Invalid or Expired Token")
        }
        const newToken = `${user.email}-${uuid()}-${Date.now()}`
        // encrypt the password
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        return await this.userRepo.resetUserPassword(token, password, newToken)
    }


    // ********************************* Get User Section ******************************************
    // Get User By Any Field
    public getUserByAnyFields = async (searchKey: string): Promise<IUser[]> => {
        const regex = new RegExp(searchKey, "gi")
        return await this.userRepo.getUserByAnyField(regex)
    }
}
