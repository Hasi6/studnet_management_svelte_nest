import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { FacultiesResolver } from './faculties.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { FacultiesRepo } from './faculties.repo';


import { FacultiesService } from './faculties.service';
import { FacultiesController } from './faculties.controller';
import { FacultySchema } from './faculties.schema';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature(
      [
        { name: 'faculties', schema: FacultySchema }
      ]
    ),
    JwtModule.register({
      secret: 'jwtSecret',
      signOptions: {
        expiresIn: 60 * 60 * 24 * 10
      }
    }),
  ],
  controllers: [FacultiesController],
  providers: [FacultiesService, FacultiesRepo, FacultiesResolver],
  exports: [FacultiesService, FacultiesRepo, FacultiesResolver],
})
export class FacultiesModule { }
