import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { DepartmentService } from './department.service';

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
    departments(@Args("facultyId") facultyId: string) {
        return this.departmentService.findDepartmentsByFacultyId(facultyId)
    }


}