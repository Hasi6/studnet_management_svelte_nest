import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMessage } from './message.model';
import { CreateMessageDto } from './dto/message.dto';
import { InternalServerErrorException, ConflictException } from '@nestjs/common';
export class MessagesRepo {

    constructor(
        @InjectModel('messages')
        private readonly message: Model<IMessage>,
    ) { }

    // ************************* Create Message ******************************************
    // Create Message
    public createMessage = async (user: string, createMessageDto: CreateMessageDto) => {
        try {
            const { fullChatId, chatId, } = createMessageDto
            const newMessages = {
                sender: user,
                fullChatId,
                chatId,
                message: createMessageDto.message || null,
                image: createMessageDto.image || null
            }

            const newMessage = new this.message(newMessages)
            await newMessage.save()
            return newMessage

        } catch (err) {
            throw new InternalServerErrorException()
        }
    }


    // ************************* Get Messages ******************************************
    // Get Messages By Chat Id
    public getMessagesByChatId = async (chatId: string) => {
        try {
            return await this.message.find({ chatId })
        } catch (err) {

            if (err.name === "CastError") {
                throw new ConflictException("Invalid Chat")
            }
            throw new InternalServerErrorException()
        }
    }

    // ************************* Edit Message ******************************************


    // ************************* Delete Message ******************************************



}