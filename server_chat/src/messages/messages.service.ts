import { Injectable } from '@nestjs/common';
import { MessagesRepo } from './message.repo';
import { CreateMessageDto } from './dto/message.dto';

@Injectable()
export class MessagesService {

    constructor(
        private readonly messageRepo: MessagesRepo
    ) { }


    // ******************************** Create Messages Section ******************************************
    public createMessages = async (user: string, createMessageDto: CreateMessageDto) => {
        return this.messageRepo.createMessage(user, createMessageDto)
    }


    // ******************************** Get Messages Section ******************************************
    public getMessagesByChatId = async (chatId: string) => {
        return this.messageRepo.getMessagesByChatId(chatId);
    }

    // ******************************** Edit Messages Section ******************************************


    // ******************************** Delete Messages Section ******************************************



}
