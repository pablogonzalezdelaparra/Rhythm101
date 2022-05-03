import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Attempts } from 'src/attempts/attempts.entity';

//Defines the structure, constraints and definition of the "Levels" table in the respective MySql database using TypeORM classes
@Entity()
export class Levels {
    //Primary key, auto generated
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    //Creates a one-many relationship with the attempt table
    @OneToMany(() => Attempts, (attempt) => attempt.level)
    attempts: Attempts[]
}