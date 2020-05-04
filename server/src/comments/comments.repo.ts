import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InternalServerErrorException } from '@nestjs/common';
import { IComments } from './comments.model';

export class CommentsRepo {

    constructor(
        @InjectModel('comments')
        private readonly comments: Model<IComments>,
    ) { }


    // ****************************************** Create Comment Section ***************************************************
    // Create Comments
    public addComment = async (comment: any) => {
        try {
            const newComment = this.comments(comment);
            return await newComment.save();
        } catch (err) {
            throw new InternalServerErrorException()
        }
    }


    // ****************************************** Get Comment Section ***************************************************



    // ****************************************** Edit Comment Section ***************************************************



    // ****************************************** Delete Comment Section ***************************************************


}