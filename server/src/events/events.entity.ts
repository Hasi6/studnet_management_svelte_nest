import { Entity, PrimaryColumn, ObjectIdColumn, Column } from "typeorm";
import { ILocation } from './events.model';

@Entity()
export class Events {

    @PrimaryColumn()
    @ObjectIdColumn()
    _id: string;

    @Column()
    title: string;

    @Column()
    location: ILocation;

    @Column()
    description: string;

    @Column({ default: Date.now() })
    createdAt: Date;

    @Column({ default: Date.now() })
    updatedAt: Date;

}