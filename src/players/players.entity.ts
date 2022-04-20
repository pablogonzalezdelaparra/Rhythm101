import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Attempts } from 'src/attempts/attempts.entity';

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
}