import { Entity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Players } from 'src/players/players.entity';

@Entity()
export class Attempts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    score: number;

    @Column()
    level: number;

    @Column('date')
    date: Date;

    @Column('time')
    BeginTime: Date;

    @Column('time')
    EndTime: Date;

    @ManyToOne(() => Players, (player) => player.attempts)
    player: Players
}