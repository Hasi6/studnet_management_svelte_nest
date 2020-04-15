import { Resolver, Query } from "@nestjs/graphql";
import { FacultiesService } from './faculties.service';

@Resolver('Faculties')
export class FacultiesResolver {
    constructor(
        private readonly facultiesService: FacultiesService
    ) { }


    @Query()
    async faculties() {
        console.log(await this.facultiesService.getAllFaculties())
        return this.facultiesService.getAllFaculties()
    }

}