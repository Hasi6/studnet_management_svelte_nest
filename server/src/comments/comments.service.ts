import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { CommentsRepo } from './comments.repo';

@Injectable()
export class CommentsService {
  constructor(private readonly commentsRepo: CommentsRepo) {}

  // ****************************************** Create Comment Section ***************************************************
  // Create Comments
  public addComment = async (user: string, comment: any) => {
    const newComment = { ...comment, user };
    const newlyAddedComment = await this.commentsRepo.addComment(newComment);
    return await this.getCommentsById(newlyAddedComment._id);
  };

  // ****************************************** Get Comment Section ***************************************************
  // Get Comments By Event
  public getCommentsByEvent = async (event: string) => {
    return await this.commentsRepo.getCommentsByEvent(event);
  };

  // Get Comments By Id
  public getCommentsById = async (_id: string) => {
    const comment = await this.commentsRepo.getCommentsById(_id);
    if (!comment) {
      throw new BadRequestException('No Post Found');
    }
    return comment;
  };

  // Get Comments By User
  public getCommentsByUser = async (user: string) => {
    return await this.commentsRepo.getCommentsByUser(user);
  };

  // ****************************************** Edit Comment Section ***************************************************
  // Edit Comment
  public editComment = async (_id: string, body: any) => {
    await this.getCommentsById(_id);
    return await this.commentsRepo.editComment(_id, body);
  };

  // ****************************************** Delete Comment Section ***************************************************
  // Delete Comments By Id
  public deleteCommentById = async (_id: string, userId: string) => {
    const comment = await this.commentsRepo.getCommentsById(_id);
    if (`${comment.user}` !== `${userId}`) {
      throw new UnauthorizedException();
    }
    return this.commentsRepo.deleteCommentById(_id);
  };

  // Delete Comment By Event
  public deleteCommentsByEvent = async (event: string) => {
    return await this.commentsRepo.deleteCommentsByEvent(event);
  };
}
