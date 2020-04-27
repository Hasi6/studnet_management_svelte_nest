import { IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class CreateChat {
    @IsNotEmpty()
    fullChatId: string;
    @IsArray()
    userIds: string[];
    @IsOptional()
    groupName: string;
}