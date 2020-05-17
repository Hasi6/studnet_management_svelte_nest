import { Resolver, Args, Query, Subscription, Mutation } from "@nestjs/graphql";
import { CommentsService } from './comments.service';
import { PubSub } from 'graphql-subscriptions';

@Resolver('Comment')
export class CommentsResolver {

    private pubSub: PubSub

    constructor(
        private readonly commentsService: CommentsService
    ) {
        this.pubSub = new PubSub();
    }


    @Query()
    getComments(@Args('event') event: string) {
        console.log(event)
    }


    @Mutation()
    addComment(@Args('name') name: string) {
        this.pubSub.publish(name, { commentAddeds: { user: 'user', comment: 'comment', event: 'Event' } });
        return name;
    }

    @Subscription()
    commentAdded(@Args('name') name: string) {
        console.log(name)
        return this.pubSub.asyncIterator(name)
    }


    @Subscription()
    commentAddeds(@Args('name') name: string) {
        console.log(name)
        return this.pubSub.asyncIterator(name)
    }

}