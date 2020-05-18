import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateCommentInput {

    @IsNotEmpty()
    @Field()
    event: string;


    @IsNotEmpty()
    @Field()
    comment: string;

}