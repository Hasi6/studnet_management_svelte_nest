import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateMessageDto {
    @IsNotEmpty()
    chatId: string;
    @IsNotEmpty()
    fullChatId: string;
    @IsNotEmpty()
    sender: string;
    @IsOptional()
    message: string;
    @IsOptional()
    image: string;
}