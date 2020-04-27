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
    // Get Chat By Id
    public getChatById = async (chatId: string) => {
        try {
            return this.chat.findById(chatId)
        } catch (err) {
            logger.error(`Chat Repo Get Chat By Id Error ${err.message}`)
            return null;
        }
    }

    // Get Chat By Full Chat Id
    public getChatByFullChatId = async (fullChatId: string) => {
        try {
            return this.chat.findOne({ fullChatId })
        } catch (err) {
            logger.error(`Chat Repo Get Chat By Full Chat Id Error ${err.message}`)
            return null;
        }
    }

    // Get Chat By User Id
    public getChatByUserId = async (userId: string) => {
        try {
            return this.chat.find({ userIds: userId })
        } catch (err) {
            logger.error(`Chat Repo Get Chat By User Id Error ${err.message}`)
            return null;
        }
    }


    // ************************************* Edi Chat ******************************************


    // ************************************* Delete Chat ******************************************



}