import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { UsersSchema } from './../user/user.schema';
import { UserService } from './../user/user.service';
import { UserRepo } from '../user/user.repo';
import { MessageSchema } from './message.schema';
import { MessagesRepo } from './message.repo';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature([
      { name: 'messages', schema: MessageSchema },
      { name: 'users', schema: UsersSchema }
    ]),
    JwtModule.register({
      secret: 'jwtSecret',
      signOptions: {
        expiresIn: 60 * 60 * 24 * 10
      }
    })
  ],
  controllers: [MessagesController],
  providers: [MessagesService, UserService, UserRepo, MessagesRepo]
})
export class MessagesModule { }
