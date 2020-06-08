import { GraphQLModule } from "@nestjs/graphql";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { FacultiesModule } from "./faculties/faculties.module";
import { UserModule } from "./user/user.module";
import { DepartmentModule } from "./department/department.module";
import { CoursesModule } from "./courses/courses.module";
import { ProfileModule } from "./profile/profile.module";
import { ChatModule } from "./chat/chat.module";
import { MessagesModule } from "./messages/messages.module";

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.NODE_ENV === "production"
        ? "mongodb://localhost:27017/studentManagement-svelte-nest"
        : "mongodb://localhost:27017/studentManagement-svelte-nest",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      },
    ),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ headers: req.headers }),
      typePaths: ["./**/*.graphql"],
    }),
    FacultiesModule,
    UserModule,
    DepartmentModule,
    CoursesModule,
    ProfileModule,
    ChatModule,
    MessagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
