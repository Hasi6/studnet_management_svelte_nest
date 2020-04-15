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
    public createUser = async (nUser: IUser): Promise<IUser> => {
        try {
            const newUser = new this.user(nUser)
            await newUser.save()
            return newUser
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
            return await this.user.findOne({ email })
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


    // ***************************** Edit User *******************************************


    // ***************************** Delete User *******************************************
}