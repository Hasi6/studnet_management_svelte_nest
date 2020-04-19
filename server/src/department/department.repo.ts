import { InternalServerErrorException, Logger, BadRequestException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { IDepartment } from './department.model';
import { CreateDepartmentDTO } from './dto/department.dto';



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


    // *********************************** Edit Department **********************************************


    // *********************************** Delete Department **********************************************

}