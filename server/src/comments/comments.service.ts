import { Injectable } from '@nestjs/common';
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



    // ****************************************** Edit Comment Section ***************************************************



    // ****************************************** Delete Comment Section ***************************************************

}
