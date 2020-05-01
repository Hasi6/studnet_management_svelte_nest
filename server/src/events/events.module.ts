import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Events } from './events.entity';
import { EventsResolver } from './events.resolver';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { UserRepo } from '../user/user.repo';
import { JwtModule } from '@nestjs/jwt';
import { EventsRepo } from './events.repo';

@Module({
  imports: [
    JwtModule.register({
      secret: 'jwtSecret',
      signOptions: {
        expiresIn: 60 * 60 * 24 * 10
      }
    }),
    TypeOrmModule.forFeature([Events, User])
  ],
  providers: [EventsService, EventsResolver, UserService, UserRepo, EventsRepo],
  exports: [EventsService, EventsResolver, UserService, UserRepo, EventsRepo],
})
export class EventsModule { }
