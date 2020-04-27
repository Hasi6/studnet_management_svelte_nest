import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, UsePipes, ValidationPipe, Body, Req } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/message.dto';

@Controller('messages')
export class MessagesController {

    constructor(
        private readonly messagesService: MessagesService
    ) { }


    @Post("/")
    @UseGuards(AuthGuard())
    // @UsePipes(ValidationPipe)
    async createMessage(@Body() createMessageDto: CreateMessageDto, @Req() req: any) {
        // return await this.messagesService.createMessages()
        console.log(req.user)
    }

}
