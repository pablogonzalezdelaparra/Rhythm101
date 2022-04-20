import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayersController } from 'src/players/players.controller';
import { Players } from 'src/players/players.entity';
import { PlayersService } from 'src/players/players.service';
import { getRepository, Repository } from 'typeorm';
import { Attempts } from './attempts.entity';

@Injectable()
export class AttemptsService {
    constructor(
        @InjectRepository(Attempts)
        private attemptsRepository: Repository<Attempts>,
    ) { }

    helloAttempts(): string {
        return "Hello Attempts";
    }

    insertAttempt(
        score: number,
        level: number,
        BeginTime: Date,
        EndTime: Date,
        date: Date,
        player: Players): void {
        const answer = getRepository(Attempts)
            .createQueryBuilder()
            .insert()
            .into(Attempts)
            .values([
                {
                    score: score,
                    level: level,
                    BeginTime: BeginTime,
                    EndTime: EndTime,
                    date: date,
                    player: player,
                }
            ])
            .execute();
    }
}