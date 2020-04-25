import { Controller, Post, UsePipes, ValidationPipe, Body, UseGuards } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { CreateFacultyDto } from './Dto/faculty.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/faculties')
export class FacultiesController {

    constructor(
        private readonly facultiesService: FacultiesService
    ) { }


    @Post("/")
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard())
    addPost(@Body() createFacultyDto: CreateFacultyDto) {
        return this.facultiesService.addFaculties(createFacultyDto)
    }


}
