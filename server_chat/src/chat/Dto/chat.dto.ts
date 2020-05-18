import { IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class CreateChatDto {
    @IsNotEmpty()
    fullChatId: string;
    @IsArray()
    userIds: string[];
    @IsOptional()
    groupName: string;
}