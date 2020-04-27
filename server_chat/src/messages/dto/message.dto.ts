import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateMessageDto {
    @IsNotEmpty()
    chatId: string;
    @IsNotEmpty()
    fullChatId: string;
    @IsNotEmpty()
    message: string;
    @IsOptional()
    image: string;
}