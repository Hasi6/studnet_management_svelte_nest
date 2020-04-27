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


    // ***************************** Edit Chat Section **********************************************


    // ***************************** Delete Chat Section **********************************************


}
