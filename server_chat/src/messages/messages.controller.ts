import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, UsePipes, ValidationPipe, Body, Req } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/message.dto';

@Controller('api/message')
export class MessagesController {

    constructor(
        private readonly messagesService: MessagesService
    ) { }


    @Post("/")
    @UseGuards(AuthGuard())
    @UsePipes(ValidationPipe)
    async createMessage(@Body() createMessageDto: CreateMessageDto, @Req() req: any) {
        const user = req.user._id
        return await this.messagesService.createMessages(user, createMessageDto)

    }

}
