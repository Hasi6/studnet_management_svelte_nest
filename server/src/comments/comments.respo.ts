import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IComments } from '../../dist/comments/comments.model';

export class CommentsRepo {

    constructor(
        @InjectModel('comments')
        private readonly comments: Model<IComments>,
    ) { }

}