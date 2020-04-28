import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { IChat } from './chat.model';
import { CreateChatDto } from './Dto/chat.dto';
import { ChatService } from './chat.service';
import { ChatsGateway } from '../chats.gateway';
import { UserService } from '../user/user.service';

@Controller('api/chat')
export class ChatController {

    constructor(
        private readonly chatService: ChatService,
        private readonly chatsGateway: ChatsGateway,
        private readonly userService: UserService
    ) { }

    @Post("/")
    @UseGuards(AuthGuard())
    @UsePipes(ValidationPipe)
    async createChat(@Body() createChatDto: CreateChatDto): Promise<IChat> {
        const newChat: any = await this.chatService.createChat(createChatDto)
        const users = await newChat.userIds.map(async (user: string) => {
            console.log(await this.userService.getUserById(user))
            return await this.userService.getUserById(user);
        });
        await Promise.all(users)
        console.log(users)
        newChat.users = users
        this.chatsGateway.addNewChat(newChat)
        return newChat;
    }


}
