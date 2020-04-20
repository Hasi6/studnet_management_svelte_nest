import { IsNotEmpty } from 'class-validator';

export class CreateDepartmentDTO {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    facultyId: string;

}

export class EditDepartmentDto {
    @IsNotEmpty()
    name: string;
}