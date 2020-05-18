import { InternalServerErrorException, Logger, BadRequestException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';

import { IUser } from './user.model';


const logger: Logger = new Logger()

export class UserRepo {
    constructor(
        @InjectModel('users')
        private readonly user: Model<IUser>
    ) { }

    // ***************************** Create User *******************************************
    // Create User
    public createUser = async (nUser: IUser): Promise<string> => {
        try {
            const newUser = new this.user(nUser)
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
            return await this.user.findById(_id)
        } catch (err) {
            logger.verbose(`User Repo Get User By Id Error ${err.message}`)
            throw new InternalServerErrorException()
        }
    }

    // Get User By Email
    public getUserByEmail = async (email: string) => {
        try {
            return await this.user.findOne({ email });
        } catch (err) {
            logger.verbose(`User Repo Get User By Id Error ${err.message}`)
            throw new InternalServerErrorException()
        }
    }

    // Get User By Email Or Username
    public getUserByEmailOrUsername = async (email: string): Promise<IUser | null> => {
        try {
            return await this.user.findOne({ $or: [{ email }, { username: email }] })
        } catch (err) {

            logger.verbose(`User Repo Get User By Email Or Username Error ${err.message}`)
            throw new InternalServerErrorException();
        }
    }

    // Get User By Any Field
    public getUserByAnyField = async (searchKey: any): Promise<IUser[] | null> => {
        try {
            return await this.user.find({ $or: [{ email: searchKey }, { username: searchKey }] })
        } catch (err) {

            logger.verbose(`User Repo Get User By Email Or Username Error ${err.message}`)
            throw new InternalServerErrorException();
        }
    }

    // Get User By Token
    public getUserByToken = async (token: string): Promise<IUser | null> => {
        try {
            return await this.user.findOne({ token })
        } catch (err) {
            logger.verbose(`User Repo Get User By Token Error ${err.message}`)
            throw new InternalServerErrorException();
        }
    }


    // ***************************** Edit User *******************************************
    // Verify User Account
    public verifyUserAccount = async (token: string, newToken: string): Promise<boolean> => {
        try {
            await this.user.updateOne({ token }, { $set: { verifyAccount: true, token: newToken } });
            return true;
        } catch (err) {
            logger.verbose(`User RepoVerify User Error ${err.message}`)
            throw new InternalServerErrorException();
        }
    }

    // Reset Password
    public resetUserPassword = async (token: string, password: string, newToken): Promise<boolean> => {
        try {
            await this.user.updateOne({ token }, { $set: { verifyAccount: true, password, token: newToken } });
            return true;
        } catch (err) {
            logger.verbose(`User RepoVerify User Error ${err.message}`)
            throw new InternalServerErrorException();
        }
    }

    // Change User Data
    public changeUserData = async (_id: string, userData: any) => {

        try {
            await this.user.updateOne({ _id }, { $set: userData })
            return await this.getUserById(_id)
        } catch (err) {
            throw new InternalServerErrorException();
        }
    }


    // ***************************** Delete User *******************************************
}