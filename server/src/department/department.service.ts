import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateDepartmentDTO } from './dto/department.dto';
import { FacultiesService } from './../faculties/faculties.service';
import { DepartmentsRepo } from './department.repo';
import { IDepartment } from './department.model';
@Injectable()
export class DepartmentService {


    constructor(
        private readonly facultiesService: FacultiesService,
        private readonly departmentsRepo: DepartmentsRepo
    ) {

    }


    // *********************************** Create Department **********************************************
    // Create Department
    public createDepartments = async (createDepartmentDTO: CreateDepartmentDTO): Promise<IDepartment | null> => {
        const { facultyId } = createDepartmentDTO;

        const faculty = await this.facultiesService.getFacultyById(facultyId);
        if (!faculty) {
            throw new NotFoundException("Faculty name is Invalid")
        }
        return await this.departmentsRepo.createDepartments(createDepartmentDTO)

    }

    // *********************************** Find Department **********************************************


    // *********************************** Edit Department **********************************************


    // *********************************** Delete Department **********************************************
}
