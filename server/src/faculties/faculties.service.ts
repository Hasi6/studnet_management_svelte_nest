import { Injectable } from '@nestjs/common';
import { FacultiesRepo } from './faculties.repo';
import { IFaculty } from './faculty.model';
import { CreateFacultyDto } from './Dto/faculty.dto';

@Injectable()
export class FacultiesService {

    constructor(
        private readonly facultiesRepo: FacultiesRepo
    ) { }

    // *************************** Add Faculties *******************************
    // Add Faculty
    public addFaculties = async (createFacultyDto: CreateFacultyDto): Promise<IFaculty> => {
        return await this.facultiesRepo.addFaculty(createFacultyDto)
    }


    // *************************** Get Faculties *******************************
    // Get All Faculties
    public getAllFaculties = async (): Promise<IFaculty[]> => {
        return await this.facultiesRepo.getAllFaculties();
    }

    // Get Faculty By Id
    public getFacultyById = async (_id: string): Promise<IFaculty | null> => {
        return await this.facultiesRepo.getFacultyById(_id);
    }


    // *************************** Edit Faculties *******************************
    // Edit Faculty
    public editFaculty = async (_id: string, createFacultyDto: CreateFacultyDto) => {
        return await this.facultiesRepo.editFaculty(_id, createFacultyDto)
    }


    // *************************** Delete Faculties *******************************
    public deleteFaculty = async (_id: string): Promise<boolean> => {
        return await this.facultiesRepo.deleteFaculty(_id)
    }




}
