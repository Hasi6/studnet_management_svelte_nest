import { Resolver, Args, Query } from "@nestjs/graphql";
import { CommentsService } from './comments.service';

@Resolver()
export class CommentsResolver {


    constructor(
        private readonly commentsService: CommentsService
    ) { }


    @Query()
    getComments(@Args('event') event: string) {
        console.log(event)
    }

}