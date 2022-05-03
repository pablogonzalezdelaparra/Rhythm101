import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayersController } from 'src/players/players.controller';
import { Players } from 'src/players/players.entity';
import { Levels } from 'src/levels/levels.entity';

import { PlayersService } from 'src/players/players.service';
import { getRepository, Repository } from 'typeorm';
import { Attempts } from './attempts.entity';

//Service injectable controller for the "attempts" module
@Injectable()
export class AttemptsService {
    constructor(
        @InjectRepository(Attempts)
        private attemptsRepository: Repository<Attempts>,
    ) { }

    //Function that returns a string in order to check the functionality of the app
    helloAttempts(): string {
        return "Hello Attempts";
    }

    //Function that returns the max level reached by a player in the table "attempts"
    searchAttemptLevel(idPlayer: string) {
        const answer = getRepository(Attempts)
            .createQueryBuilder("attempt")
            .select("MAX(attempt.level)", "MaxLevel")
            .where("attempt.player = :idPlayer", {idPlayer: idPlayer})
            .getRawOne();
        return answer;
    }

    //Function that returns the maximum score that a player has reached in a specific level
    searchLeaderboard(idPlayer: number, level: number) {
        const answer = getRepository(Attempts)
            .createQueryBuilder("attempt")
            .select("attempt.score")
            .orderBy("attempt.score", "DESC")
            .where("attempt.player = :idPlayer AND attempt.level = :level", { idPlayer: idPlayer, level: level })
            .getOneOrFail();
        return answer;
    }

    //Function that inserts a new attempt from a pleyar to the database in table "attempts" 
    insertAttempt(
        score: number,
        level: Levels,
        BeginTime: Date,
        EndTime: Date,
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
                    player: player,
                }
            ])
            .execute();
    }
}