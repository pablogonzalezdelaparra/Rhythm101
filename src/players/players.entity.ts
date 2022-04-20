import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Attempts } from 'src/attempts/attempts.entity';
import { Evaluations } from 'src/evaluations/evaluations.entity';

@Entity()
export class Players {
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

    @OneToMany(() => Attempts, (attempt) => attempt.player)
    attempts: Attempts[]

    @OneToMany(() => Evaluations, (evaluation) => evaluation.player)
    evaluations: Evaluations[]
}