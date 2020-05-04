import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from '../user/user.schema';
import { CommentsSchema } from './comments.schema';
import { CommentsRepo } from './comments.repo';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: 'users', schema: UsersSchema },
        { name: 'comments', schema: CommentsSchema },
      ]
    )
  ],
  providers: [CommentsService, CommentsRepo],
  exports: [CommentsService, CommentsRepo],
})
export class CommentsModule { }
