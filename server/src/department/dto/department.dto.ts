import { IsNotEmpty } from 'class-validator';

export class CreateDepartmentDTO {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    facultyId: string;

}