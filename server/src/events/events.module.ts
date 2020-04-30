import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Events } from './events.entity';
import { EventsResolver } from './events.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Events])
  ],
  providers: [EventsService, EventsResolver]
})
export class EventsModule { }
