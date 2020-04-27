import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { ChatSchema } from './chat.schema';
import { ChatRepo } from './chat.repo';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature([
      { name: 'chats', schema: ChatSchema }
    ]),
  ],
  controllers: [ChatController],
  providers: [ChatService, ChatRepo],
  exports: [ChatRepo]
})
export class ChatModule { }
