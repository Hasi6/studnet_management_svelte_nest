import { IsNotEmpty, IsEmail, MinLength, MaxLength } from 'class-validator'

export class CreateUserDto {
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    username: string;
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;
}

export class LoginUserDto {
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    password: string;
}

export class RequestResetPasswordLink {
    @IsEmail()
    email: string;
}

export class ResetPassword {
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(20)
    password: string;
}