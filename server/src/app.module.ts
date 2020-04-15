import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'


import { FacultiesModule } from './faculties/faculties.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.NODE_ENV === 'production' ? "mongodb://localhost:27017/studentManagement-svelte-nest" : "mongodb://localhost:27017/studentManagement-svelte-nest", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql']
    }),
    FacultiesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
