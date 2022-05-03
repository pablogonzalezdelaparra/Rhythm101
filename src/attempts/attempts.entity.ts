import { Entity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Players } from 'src/players/players.entity';
import { Levels } from 'src/levels/levels.entity';

//Defines the structure, constraints and definition of the "Attempts" table in the respective MySql database using TypeORM classes
@Entity()
export class Attempts {
    //Primary key, auto generated
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    score: number;

    //Defining a default value
    @Column({ type: 'date', default: () => '(CURRENT_DATE)' })
    date: Date;

    @Column('time')
    BeginTime: Date;

    @Column('time')
    EndTime: Date;

    //Creates a one-many relationship with the player table
    @ManyToOne(() => Players, (player) => player.attempts)
    player: Players

    //Creates a one-many relationship with the level table
    @ManyToOne(() => Levels, (level) => level.attempts)
    level: Levels

}