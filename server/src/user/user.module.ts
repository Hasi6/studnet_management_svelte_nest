import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt'

import { UsersSchema } from './user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepo } from './user.repo';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';



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
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepo, JwtStrategy, UserResolver],
  exports: [UserService, UserRepo, JwtStrategy]
})
export class UserModule { }
