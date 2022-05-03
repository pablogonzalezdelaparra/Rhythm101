import { Entity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Players } from 'src/players/players.entity';

//Defines the structure, constraints and definition of the "Evaluations" table in the respective MySql database using TypeORM classes
@Entity()
export class Evaluations {
    //Primary key, auto generated
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @Column({ type: 'float'})
    ability: number

    @Column({ type: 'float' })
    opinion: string

    //Defining a default value
    @Column({ type: 'date', default: () => '(CURRENT_DATE)' })
    fecha: Date

    //Creates a one-many relationship with the player table
    @ManyToOne(() => Players, (player) => player.evaluations)
    player: Players
    
}