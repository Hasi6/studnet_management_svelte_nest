import { Controller, Post, UseGuards, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateDepartmentDTO } from './dto/department.dto';

@Controller('department')
export class DepartmentController {


    constructor(
        private readonly departmentService: DepartmentService
    ) { }

    @Post()
    @UseGuards(AuthGuard())
    @UsePipes(ValidationPipe)
    createDepartment(@Body() createDepartmentDTO: CreateDepartmentDTO) {
        return this.departmentService.createDepartments(createDepartmentDTO)
    }


}
