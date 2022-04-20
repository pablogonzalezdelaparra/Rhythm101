import { Entity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Players } from 'src/players/players.entity';
import { Levels } from 'src/levels/levels.entity';

@Entity()
export class Attempts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    score: number;

    @ManyToOne(() => Levels, (level) => level.attempts)
    level: Levels

    @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    date: Date;

    @Column('time')
    BeginTime: Date;

    @Column({ type: 'time', default: () => 'CURRENT_TIMESTAMP' })
    EndTime: Date;

    @ManyToOne(() => Players, (player) => player.attempts)
    player: Players

}