import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    // MongooseModule.forFeature([
    //   { name: 'users', schema: UsersSchema }
    // ]),
  ],
  controllers: [ChatController],
  providers: [ChatService]
})
export class ChatModule { }
