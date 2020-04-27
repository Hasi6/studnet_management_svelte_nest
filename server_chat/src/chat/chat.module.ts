import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { ChatSchema } from './chat.schema';
import { ChatRepo } from './chat.repo';
import { ChatResolver } from './chat.resolver';
import { UserService } from '../user/user.service';
import { UserRepo } from '../user/user.repo';
import { UsersSchema } from '../user/user.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature([
      { name: 'chats', schema: ChatSchema },
      { name: 'users', schema: UsersSchema }
    ]),
    JwtModule.register({
      secret: 'jwtSecret',
      signOptions: {
        expiresIn: 60 * 60 * 24 * 10
      }
    })
  ],
  controllers: [ChatController],
  providers: [ChatService, ChatRepo, ChatResolver, UserService, UserRepo,],
  exports: [ChatRepo, ChatResolver]
})
export class ChatModule { }
