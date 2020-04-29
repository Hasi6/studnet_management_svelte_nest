import { Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class User {

    @ObjectIdColumn()
    _id: string;

    @PrimaryGeneratedColumn()
    id: string;

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

    @Column({ default: [] })
    chatIdList: string[]

    @Column({ default: false })
    verifyAccount: boolean;

    @Column({ default: false })
    onlineStatus: boolean;

    @Column({ default: Date.now() })
    createdAt: Date;

    @Column({ default: Date.now() })
    updatedAt: Date;
}