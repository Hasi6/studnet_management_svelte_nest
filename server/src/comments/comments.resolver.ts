import { Resolver, Args, Query, Subscription, Mutation } from "@nestjs/graphql";
import { CommentsService } from './comments.service';
import { PubSub } from 'graphql-subscriptions';

@Resolver()
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
        this.pubSub.publish(name, { commentAdded: name });
        return name;
    }

    @Subscription()
    commentAdded(@Args('name') name: string) {
        return this.pubSub.asyncIterator(name)
    }

}