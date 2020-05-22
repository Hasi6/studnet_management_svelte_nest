import {
  Resolver,
  Args,
  Query,
  Subscription,
  Mutation,
  Context,
} from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { PubSub } from 'graphql-subscriptions';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../user/AuthGuard';
import { CreateCommentInput } from './Dto/comments.input';

@Resolver('Comment')
export class CommentsResolver {
  private pubSub: PubSub;

  constructor(private readonly commentsService: CommentsService) {
    this.pubSub = new PubSub();
  }

  @Query()
  getComments(@Args('event') event: string) {
    return this.commentsService.getCommentsByEvent(event);
  }

  // @Args('name') name: string,
  @Mutation()
  @UseGuards(AuthGuard)
  async addComment(
    @Args('input') input: CreateCommentInput,
    @Context() ctx: any,
  ) {
    const user = ctx.user._id;
    const id = input.event;
    const comment = await this.commentsService.addComment(user, input);
    this.pubSub.publish(id, { newCommentAdded: comment });
    return comment;
  }

  @Mutation()
  @UseGuards(AuthGuard)
  async deleteComment(
    @Args('id') id: string,
    @Args('event') event: string,
    @Context() ctx: any,
  ) {
    const response = await this.commentsService.deleteCommentById(
      id,
      ctx.user._id,
    );
    this.pubSub.publish(`delete${event}`, {
      deleteCommentSubscription: response,
    });
    return response;
  }

  @Subscription()
  commentAdded(@Args('name') name: string) {
    return this.pubSub.asyncIterator(name);
  }

  @Subscription()
  commentAddeds(@Args('name') name: string) {
    return this.pubSub.asyncIterator(name);
  }

  @Subscription()
  newCommentAdded(@Args('id') id: string) {
    return this.pubSub.asyncIterator(id);
  }

  @Subscription()
  deleteCommentSubscription(@Args('id') id: string) {
    return this.pubSub.asyncIterator(`delete${id}`);
  }
}
