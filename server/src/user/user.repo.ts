import { InternalServerErrorException, Logger, BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';

import { IUser } from './user.model';


const logger: Logger = new Logger()

@Injectable()
export class UserRepo {
    constructor(
        @InjectModel('users')
        private readonly userRepository: Model<IUser>,
        // @InjectRepository(User)
        // private readonly userRepository: Repository<User>
    ) {
    }

    // ***************************** Create User *******************************************
    // Create User
    public createUser = async (nUser: IUser): Promise<string> => {
        try {
            const newUser = new this.userRepository(nUser)
            await newUser.save()
            return "User Created";
        } catch (err) {
            logger.verbose(`User Repo Create User Error ${err.message}`)
            if (err.code === 11000) {
                throw new BadRequestException(`Username Or Email Already Taken`)
            }
            else {
                throw new InternalServerErrorException()
            }
        }
    }

    // ***************************** Get Users *******************************************

    // Get User By Id
    public getUserById = async (_id: string) => {
        try {
            return await this.userRepository.findById(_id)
        } catch (err) {
            logger.verbose(`User Repo Get User By Id Error ${err.message}`)
            throw new InternalServerErrorException()
        }
    }

    // Get User By Email
    public getUserByEmail = async (email: string) => {
        try {
            // return await this.user.findOne({ email });
            return await this.userRepository.findOne({ email })
        } catch (err) {
            logger.verbose(`User Repo Get User By Id Error ${err.message}`)
            throw new InternalServerErrorException()
        }
    }

    // Get User By Email Or Username
    public getUserByEmailOrUsername = async (email: string): Promise<IUser | null> => {
        console.log(email)
        try {
            return await this.userRepository.findOne({ $or: [{ email }, { username: email }] })
        } catch (err) {

            logger.verbose(`User Repo Get User By Email Or Username Error ${err.message}`)
            throw new InternalServerErrorException();
        }
    }

    // Get User By Token
    public getUserByToken = async (token: string): Promise<IUser | null> => {
        try {
            console.log(await this.userRepository.findOne({ token }))
            return await this.userRepository.findOne({ token })
        } catch (err) {
            logger.verbose(`User Repo Get User By Token Error ${err.message}`)
            throw new InternalServerErrorException();
        }
    }


    // ***************************** Edit User *******************************************
    // Verify User Account
    public verifyUserAccount = async (token: string, newToken: string): Promise<boolean> => {
        try {
            await this.userRepository.update({ token }, { verifyAccount: false, token: newToken });
            return true;
        } catch (err) {
            logger.verbose(`User RepoVerify User Error ${err.message}`)
            throw new InternalServerErrorException();
        }
    }

    // Reset Password
    public resetUserPassword = async (token: string, password: string, newToken): Promise<boolean> => {
        try {
            await this.userRepository.update({ token }, { verifyAccount: true, password, token: newToken });
            return true;
        } catch (err) {
            logger.verbose(`User RepoVerify User Error ${err.message}`)
            throw new InternalServerErrorException();
        }
    }


    // ***************************** Delete User *******************************************
}