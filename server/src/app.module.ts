import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { TypeOrmModule } from "@nestjs/typeorm"


import { FacultiesModule } from './faculties/faculties.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { EventsModule } from './events/events.module';
import { Events } from './events/events.entity';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.NODE_ENV === 'production' ? "mongodb://localhost:27017/uni_event_creator" : "mongodb://localhost:27017/uni_event_creator", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/uni_event_creator',
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [User, Events]
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ headers: req.headers }),
      typePaths: ['./**/*.graphql']
    }),
    FacultiesModule,
    UserModule,
    EventsModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
