import { Controller, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './Dto/user.dto';
import { UserService } from './user.service';

@Controller('api/auth')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }


    @Post("/register")
    @UsePipes(ValidationPipe)
    registerUser(@Body() createUserDto: CreateUserDto): Promise<string> {
        return this.userService.register(createUserDto)
    }

    @Post("/login")

    @UsePipes(ValidationPipe)
    login(@Body() loginUserDto: LoginUserDto): Promise<{ token: string }> {
        return this.userService.login(loginUserDto)
    }


}
