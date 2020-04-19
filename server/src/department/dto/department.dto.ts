import { IsNotEmpty } from 'class-validator';

export class CreateDepartment {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    facultyId: string;

}