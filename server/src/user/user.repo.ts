import { InternalServerErrorException, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';

import { IUser } from './user.model';


const logger: Logger = new Logger()

export class UserRepo {
    constructor(
        @InjectModel('users')
        private readonly faculty: Model<IUser>
    ) { }
}