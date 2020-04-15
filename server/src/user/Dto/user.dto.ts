import { IsNotEmpty, IsEmail, Min, Max } from 'class-validator'

export class CreateUserDto {
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @Min(4)
    @Max(20)
    username: string;
    @IsNotEmpty()
    faculty: string;
    @IsNotEmpty()
    @Min(6)
    @Max(20)
    password: string;
}

export class LoginUserDto {
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    password: string;
}