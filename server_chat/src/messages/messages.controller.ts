import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, UsePipes, ValidationPipe, Body, Req } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/message.dto';
import { MessagesGateway } from '../messages.gateway';

@Controller('api/message')
export class MessagesController {

    constructor(
        private readonly messagesService: MessagesService,
        private readonly messagesGateway: MessagesGateway
    ) { }


    @Post("/")
    @UseGuards(AuthGuard())
    @UsePipes(ValidationPipe)
    async createMessage(@Body() createMessageDto: CreateMessageDto, @Req() req: any) {
        const user = req.user._id
        const msg = await this.messagesService.createMessages(user, createMessageDto)
        this.messagesGateway.sendMessage(msg)
        return msg

    }

}
