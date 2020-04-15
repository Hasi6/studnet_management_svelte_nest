import { Module } from '@nestjs/common';
import { FacultiesModule } from './faculties/faculties.module';

@Module({
  imports: [FacultiesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
