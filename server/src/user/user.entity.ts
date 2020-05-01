/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, ObjectIdColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Events } from '../events/events.entity';

@Entity()
export class User {

    @ObjectIdColumn()
    @PrimaryColumn()
    _id: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    username: string;

    @Column()
    image: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    token: string;

    @Column({ default: false })
    verifyAccount: boolean;

    @Column({ default: false })
    onlineStatus: boolean;

    @Column({ default: Date.now() })
    createdAt: Date;

    @Column({ default: Date.now() })
    updatedAt: Date;

    @OneToMany(type => Events, events => events.user)
    events: Events[]
}