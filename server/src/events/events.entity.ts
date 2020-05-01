/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, PrimaryColumn, ObjectIdColumn, Column, ManyToOne } from "typeorm";
import { ILocation } from './events.model';
import { User } from '../user/user.entity';

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

    @ManyToOne(type => User, user => user.events)
    user: User

}