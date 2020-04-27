import { IChat } from './chat.model';
import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './Dto/chat.dto';

@Injectable()
export class ChatService {


    // ***************************** Create Chat Section **********************************************
    // Create Chat
    public createChat = async (createChatDto: CreateChatDto): Promise<IChat | null> => {
        return null;
    }

    // ***************************** Get Chat Section **********************************************


    // ***************************** Edit Chat Section **********************************************


    // ***************************** Delete Chat Section **********************************************


}
