import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { ILocation } from './events.model';

@InputType()
export class CreateEventInput {
    @IsNotEmpty()
    @Field()
    title: string;

    @IsNotEmpty()
    @Field()
    image: string;

    @IsNotEmpty()
    @Field()
    location: ILocation;

    @IsNotEmpty()
    @Field()
    description: string;

    @IsNotEmpty()
    @Field()
    dateTime: string;

}