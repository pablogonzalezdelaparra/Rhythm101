import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Attempts } from '../attempts/attempts.entity';
import { Evaluations } from '../evaluations/evaluations.entity';

//Defines the structure, constraints and definition of the "Players" table in the respective MySql database using TypeORM classes
@Entity()
export class Players {
    //Primary key, auto generated
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('date')
    birthday: Date;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    username: string;

    @Column()
    password: string;

    //Creates a one-many relationship with the attempt table
    @OneToMany(() => Attempts, (attempt) => attempt.player)
    attempts: Attempts[]

    //Creates a one-many relationship with the evaluation table
    @OneToMany(() => Evaluations, (evaluation) => evaluation.player)
    evaluations: Evaluations[]
}