import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { IChat } from './chat.model';
import { CreateChatDto } from './Dto/chat.dto';
import { ChatService } from './chat.service';
import { ChatsGateway } from '../chats.gateway';

@Controller('api/chat')
export class ChatController {

    constructor(
        private readonly chatService: ChatService,
        private readonly chatsGateway: ChatsGateway
    ) { }

    @Post("/")
    @UseGuards(AuthGuard())
    @UsePipes(ValidationPipe)
    async createChat(@Body() createChatDto: CreateChatDto): Promise<IChat> {

        const newChat = await this.chatService.createChat(createChatDto)
        this.chatsGateway.addNewChat(newChat)
        return newChat;
    }


}
