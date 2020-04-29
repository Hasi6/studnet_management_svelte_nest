import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { TypeOrmModule } from "@nestjs/typeorm"


import { FacultiesModule } from './faculties/faculties.module';
import { UserModule } from './user/user.module';
import { DepartmentModule } from './department/department.module';
import { CoursesModule } from './courses/courses.module';
import { ProfileModule } from './profile/profile.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.NODE_ENV === 'production' ? "mongodb://localhost:27017/studentManagement-svelte-nest" : "mongodb://localhost:27017/studentManagement-svelte-nest", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/studentManagement-svelte-nest',
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [User]
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      typePaths: ['./**/*.graphql']
    }),
    FacultiesModule,
    UserModule,
    DepartmentModule,
    CoursesModule,
    ProfileModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
