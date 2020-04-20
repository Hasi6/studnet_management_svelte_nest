import { InternalServerErrorException, Logger, BadRequestException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { IDepartment } from './department.model';
import { CreateDepartmentDTO, EditDepartmentDto } from './dto/department.dto';



const logger: Logger = new Logger()

export class DepartmentsRepo {
    constructor(
        @InjectModel('departments')
        private readonly department: Model<IDepartment>,
    ) { }


    // *********************************** Create Department **********************************************
    // Create Department
    public createDepartments = async (createDepartmentDTO: CreateDepartmentDTO): Promise<IDepartment | null> => {
        try {

            const newDepartment = new this.department(createDepartmentDTO)
            await newDepartment.save();
            return newDepartment;

        } catch (err) {
            if (err.code === 11000) {
                throw new BadRequestException(`${createDepartmentDTO.name} is Already a Added`)
            }
            else {
                logger.verbose(`Faculties Repo Add Faculty Function Error ${err.message}`)
                throw new InternalServerErrorException()
            }
        }
    }

    // *********************************** Find Department **********************************************

    // Find Department By Id


    // Find Departments By Faculty id
    public findDepartmentsByFacultyId = async (facultyId: string): Promise<IDepartment[]> => {
        try {
            return await this.department.find({ facultyId })
        } catch (err) {
            throw new InternalServerErrorException()
        }
    }

    // *********************************** Edit Department **********************************************
    // Edit Department Name
    public editDepartment = async (_id: string, editDepartmentDto: EditDepartmentDto): Promise<IDepartment> => {
        try {
            await this.department.updateOne({ _id }, { $set: editDepartmentDto })
            return await this.d
        } catch (err) {
            throw new InternalServerErrorException()
        }
    }


    // *********************************** Delete Department **********************************************

}