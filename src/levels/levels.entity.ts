import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Attempts } from 'src/attempts/attempts.entity';

@Entity()
export class Levels {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToMany(() => Attempts, (attempt) => attempt.level)
    attempts: Attempts[]
}