import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { DepartmentService } from './department.service';
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from '../user/AuthGuard';

@Resolver('Departments')
export class DepartmentResolver {
    constructor(
        private readonly departmentService: DepartmentService
    ) { }


    // @Query()
    // faculties() {
    //     return this.departmentService.d
    // }

    @Mutation()
    @UseGuards(AuthGuard)
    departments(@Args("facultyId") facultyId: string) {
        return this.departmentService.findDepartmentsByFacultyId(facultyId)
    }


}