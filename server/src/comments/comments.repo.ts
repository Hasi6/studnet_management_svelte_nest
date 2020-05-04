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
    // Get Comments By Post
    public getCommentsByPost = async (post: string) => {
        try {
            return this.comments.find({ post })
        } catch (err) {
            throw new InternalServerErrorException()
        }
    }

    // Get Comments By Id
    public getCommentsById = async (_id: string) => {
        try {
            return this.comments.findOne(_id)
        } catch (err) {
            throw new InternalServerErrorException()
        }
    }

    // Get Comments By User
    public getCommentsByUser = async (user: string) => {
        try {
            return this.comments.find({ user })
        } catch (err) {
            throw new InternalServerErrorException()
        }
    }


    // ****************************************** Edit Comment Section ***************************************************



    // ****************************************** Delete Comment Section ***************************************************


}