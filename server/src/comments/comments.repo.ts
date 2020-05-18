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
            console.log(err.message)
            throw new InternalServerErrorException()
        }
    }


    // ****************************************** Get Comment Section ***************************************************
    // Get Comments By Event
    public getCommentsByEvent = async (event: string) => {
        try {
            return await this.comments.find({ event }).populate('user', ['image', '_id', 'email', 'username'])
        } catch (err) {
            throw new InternalServerErrorException()
        }
    }

    // Get Comments By Id
    public getCommentsById = async (_id: string) => {
        try {
            return await this.comments.findById(_id).populate('user', ['image', '_id', 'email', 'username'])
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
    // Edit Comment
    public editComment = async (_id: string, body: string) => {
        try {
            await this.comments.updateOne({ _id }, { $set: body })
            return this.comments.findById(_id)
        } catch (err) {
            throw new InternalServerErrorException()
        }
    }


    // ****************************************** Delete Comment Section ***************************************************
    // Delete Comments By Id
    public deleteCommentById = async (_id: string) => {
        try {
            await this.comments.findByIdAndDelete(_id)
            return "Deleted"
        } catch (err) {
            throw new InternalServerErrorException()
        }
    }

    // Delete Comments By Event
    public deleteCommentsByEvent = async (event: string) => {
        try {
            await this.comments.deleteMany({ event })
            return "Deleted"
        } catch (err) {
            throw new InternalServerErrorException();
        }
    }

}