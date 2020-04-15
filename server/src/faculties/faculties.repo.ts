import { InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';

import { IFaculty } from './faculty.model';
import { CreateFacultyDto } from './Dto/faculty.dto';


const logger: Logger = new Logger()

export class FacultiesRepo {
    constructor(
        @InjectModel('faculties')
        private readonly faculty: Model<IFaculty>
    ) { }

    // ************************************** Add Faculty **************************************
    public addFaculty = async (createFacultyDto: CreateFacultyDto): Promise<IFaculty> => {
        try {
            const newFaculty = new this.faculty(createFacultyDto)
            await newFaculty.save()
            return newFaculty;
        } catch (err) {
            logger.verbose(`Faculties Repo Add Faculty Function Error ${err.message}`)
            throw new InternalServerErrorException()
        }
    }

    // ************************************** Get Faculty **************************************
    // Get All Faculties
    public getAllFaculties = async (): Promise<IFaculty[]> => {
        try {
            return await this.faculty.find();
        } catch (err) {
            logger.verbose(`Faculties Get Add Faculty Function Error ${err.message}`)
            throw new InternalServerErrorException()
        }
    }

    // Get Faculty By Id
    public getFacultyById = async (_id: string): Promise<IFaculty | null> => {
        try {
            return await this.faculty.findById({ _id })
        } catch (err) {
            logger.verbose(`Faculties Get Get Faculty By Id Function Error ${err.message}`)
            throw new InternalServerErrorException()
        }
    }



    // ************************************** Edit Faculty ****************************************
    public editFaculty = async (_id: string, createFacultyDto: CreateFacultyDto): Promise<IFaculty | null> => {
        try {
            const faculty = await this.getFacultyById(_id)
            if (!faculty) {
                throw new NotFoundException()
            }

            await this.faculty.updateOne({ _id }, createFacultyDto)
            return await this.getFacultyById(_id)

        } catch (err) {
            if (err.status === 404) {
                throw new NotFoundException();
            }
            logger.verbose(`Faculties Get Add Faculty Function Error ${err.message}`)
            throw new InternalServerErrorException()
        }
    }

    // ************************************** Delete Faculty **************************************
    // Delete Faculty
    public deleteFaculty = async (_id: string): Promise<boolean> => {
        try {
            const faculty = await this.getFacultyById(_id)
            if (!faculty) {
                throw new NotFoundException()
            }

            await this.faculty.deleteOne({ _id })
            return true

        } catch (err) {
            if (err.status === 404) {
                throw new NotFoundException();
            }
            logger.verbose(`Faculties Get Add Faculty Function Error ${err.message}`)
            throw new InternalServerErrorException()
        }
    }
}