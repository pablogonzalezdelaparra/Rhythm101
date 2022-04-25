import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayersController } from 'src/players/players.controller';
import { Players } from 'src/players/players.entity';
import { Levels } from 'src/levels/levels.entity';

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

    searchAttemptLevel(idPlayer: string) {
        const answer = getRepository(Attempts)
            .createQueryBuilder("attempt")
            .select("MAX(attempt.level)", "MaxLevel")
            .where("attempt.player = :idPlayer", {idPlayer: idPlayer})
            .getRawOne();
        return answer;
    }

    searchLeaderboard(idPlayer: number, level: number) {
        const answer = getRepository(Attempts)
            .createQueryBuilder("attempt")
            .select("attempt.score")
            .orderBy("attempt.score", "DESC")
            .where("attempt.player = :idPlayer AND attempt.level = :level", { idPlayer: idPlayer, level: level })
            .getOneOrFail();
        return answer;
    }

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

    /*
    getMaxScore() {
        const answer = getRepository(Attempts)
        .createQueryBuilder("attempt")
        .select("MAX(attempt.score)", "MaxScore")
        .addSelect("attempt.playerId")
        return answer.getRawOne();
    }
    */
}