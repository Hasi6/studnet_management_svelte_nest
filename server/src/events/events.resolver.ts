import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class EventsResolver {


    // constructor(

    // ) { }


    @Query()
    getEvents(@Args('page') page: number) {
        console.log(page)
        return [{ _id: "1", location: { location: "test", lat: 34.45, lng: 5456.7 }, title: "test", description: "Test", createdAt: "45", updatedAt: "45" }]
    }

}