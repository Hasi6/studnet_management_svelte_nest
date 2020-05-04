import { Injectable, BadRequestException } from '@nestjs/common';
import { CommentsRepo } from './comments.repo';

@Injectable()
export class CommentsService {

    constructor(
        private readonly commentsRepo: CommentsRepo
    ) { }

    // ****************************************** Create Comment Section ***************************************************
    // Create Comments
    public addComment = async (user: string, comment: any) => {
        const newComment = { ...comment, user }
        return await this.commentsRepo.addComment(newComment)
    }


    // ****************************************** Get Comment Section ***************************************************
    // Get Comments By Post
    public getCommentsByPost = async (post: string) => {
        return await this.commentsRepo.getCommentsByPost(post)
    }

    // Get Comments By Id
    public getCommentsById = async (_id: string) => {
        const comment = await this.commentsRepo.getCommentsById(_id);
        if (!comment) {
            throw new BadRequestException("No Post Found")
        }
        return comment;
    }

    // Get Comments By User
    public getCommentsByUser = async (user: string) => {
        return await this.commentsRepo.getCommentsByUser(user)
    }


    // ****************************************** Edit Comment Section ***************************************************
    // Edit Comment
    public editComment = async (_id: string, body: any) => {
        await this.getCommentsById(_id);
        return await this.commentsRepo.editComment(_id, body);
    }


    // ****************************************** Delete Comment Section ***************************************************

}