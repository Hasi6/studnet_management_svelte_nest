import { Controller, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { CreateFacultyDto } from './Dto/faculty.dto';

@Controller('faculties')
export class FacultiesController {

    constructor(
        private readonly facultiesService: FacultiesService
    ) { }


    @Post("/")
    @UsePipes(ValidationPipe)
    addPost(@Body() createFacultyDto: CreateFacultyDto) {
        return "Hasi"
    }


}
