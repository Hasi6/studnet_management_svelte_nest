import { BadRequestException, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IChat } from './chat.model';
import { CreateChatDto } from './Dto/chat.dto';


const logger: Logger = new Logger();




export class ChatRepo {

    constructor(
        @InjectModel('chats')
        private readonly chat: Model<IChat>,
    ) { }


    // ************************************* Create Chat ******************************************
    // Create Chat
    public createChat = async (createChatDto: CreateChatDto): Promise<IChat> => {
        try {
            const { fullChatId, groupName, userIds } = createChatDto;
            const newChat = new this.chat({ fullChatId, groupName, userIds })
            await newChat.save()
            return newChat;

        } catch (err) {
            logger.verbose(`User Repo Create User Error ${err.message}`)
            if (err.code === 11000) {
                throw new BadRequestException(`Chat Already Created`)
            }
            else {
                throw new InternalServerErrorException()
            }
        }
    }


    // ************************************* Get Chat ******************************************


    // ************************************* Edi Chat ******************************************


    // ************************************* Delete Chat ******************************************



}