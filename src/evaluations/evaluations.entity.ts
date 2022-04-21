import { Entity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Players } from 'src/players/players.entity';

@Entity()
export class Evaluations {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @Column()
    ability: number

    @Column()
    opinion: string

    @Column({ type: 'date', default: () => '(CURRENT_DATE)' })
    fecha: Date

    @ManyToOne(() => Players, (player) => player.evaluations)
    player: Players
    
}