import { FacultiesRepo } from './../faculties/faculties.repo';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';


import { DepartmentService } from './department.service';
import { DepartmentSchema } from './department.schema';
import { DepartmentController } from './department.controller';
import { FacultySchema } from './../faculties/faculties.schema';
import { FacultiesService } from '../faculties/faculties.service';
import { DepartmentsRepo } from './department.repo';
import { DepartmentResolver } from './department.resolver';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature(
      [
        { name: 'departments', schema: DepartmentSchema },
        { name: 'faculties', schema: FacultySchema }
      ]
    ),
  ],
  controllers: [DepartmentController],
  providers: [DepartmentService, FacultiesService, FacultiesRepo, DepartmentsRepo, DepartmentResolver],
  exports: [DepartmentService, FacultiesService, FacultiesRepo],
})
export class DepartmentModule { }
