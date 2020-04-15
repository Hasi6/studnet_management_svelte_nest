import { FacultiesResolver } from './faculties.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { FacultiesRepo } from './faculties.repo';


import { FacultiesService } from './faculties.service';
import { FacultiesController } from './faculties.controller';
import { FacultySchema } from './faculties.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: 'faculties', schema: FacultySchema }
      ]
    )
  ],
  controllers: [FacultiesController],
  providers: [FacultiesService, FacultiesRepo, FacultiesResolver],
  exports: [FacultiesService, FacultiesRepo, FacultiesResolver],
})
export class FacultiesModule { }
