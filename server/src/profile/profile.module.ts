import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { UsersSchema } from './../user/user.schema';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature([
      { name: 'users', schema: UsersSchema }
    ]),
    JwtModule.register({
      secret: 'jwtSecret',
      signOptions: {
        expiresIn: 60 * 60 * 24 * 10
      }
    })
  ],

  providers: [ProfileService],
  controllers: [ProfileController]
})
export class ProfileModule { }
