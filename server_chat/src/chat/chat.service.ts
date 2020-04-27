import { IChat } from './chat.model';
import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './Dto/chat.dto';
import { ChatRepo } from './chat.repo';

@Injectable()
export class ChatService {


    constructor(
        private readonly chatRepo: ChatRepo
    ) { }

    // ***************************** Create Chat Section **********************************************
    // Create Chat
    public createChat = async (createChatDto: CreateChatDto): Promise<IChat | null> => {
        return this.chatRepo.createChat(createChatDto)
    }

    // ***************************** Get Chat Section **********************************************
    // Get Chat By Id
    public getChatById = async (chatId: string) => {
        return this.chatRepo.getChatById(chatId)
    }

    // Get Chat By Full Chat Id
    public getChatByFullChatId = async (fullChatId: string) => {
        return this.chatRepo.getChatByFullChatId(fullChatId)
    }

    // Get Chat By User Id
    public getChatByUserId = async (userId: string) => {
        return this.chatRepo.getChatByUserId(userId)
    }

    // ***************************** Edit Chat Section **********************************************


    // ***************************** Delete Chat Section **********************************************


}
