import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { IChat } from './chat.model';
import { CreateChatDto } from './Dto/chat.dto';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {

    constructor(
        private readonly chatService: ChatService
    ) { }

    @Post("/")
    @UseGuards(AuthGuard())
    @UsePipes(ValidationPipe)
    async createChat(@Body() createChatDto: CreateChatDto): Promise<IChat> {
        return await this.chatService.createChat(createChatDto)
    }


}
