import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Accounts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;
}