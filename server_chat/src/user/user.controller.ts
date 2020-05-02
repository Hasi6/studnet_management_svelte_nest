import { Controller, Post, UsePipes, ValidationPipe, Body, Put, Param } from '@nestjs/common';
import { CreateUserDto, LoginUserDto, RequestResetPasswordLink, ResetPassword } from './Dto/user.dto';
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

    @Put("/verifyAccount/:token")
    verifyUserAccount(@Param('token') token: string) {
        return this.userService.verifyAccounts(token)
    }

    @Post("/resetPasswordLink")
    @UsePipes(ValidationPipe)
    resetPasswordLink(@Body() requestResetPasswordLink: RequestResetPasswordLink) {
        const { email } = requestResetPasswordLink
        return this.userService.sendResetPasswordLink(email)
    }

    @Post("/resetPassword/:token")
    @UsePipes(ValidationPipe)
    resetPassword(@Param() token: string, @Body() resetPassword: ResetPassword) {
        return this.userService.resetPassword(token, resetPassword);
    }

    @Put("/editUser/:id")
    changeUserDetails(@Param('id') id: string, @Body() userData: any) {
        console.log(id, userData)
        this.userService.changeUserData(id, userData)
    }


}
