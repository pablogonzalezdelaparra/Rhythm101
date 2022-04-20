import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayersController } from 'src/players/players.controller';
import { Players } from 'src/players/players.entity';
import { Levels } from 'src/levels/levels.entity';

import { PlayersService } from 'src/players/players.service';
import { getRepository, Repository } from 'typeorm';
import { Evaluations } from './evaluations.entity';

@Injectable()
export class EvaluationsService {
    constructor(
        @InjectRepository(Evaluations)
        private evaluationsRepository: Repository<Evaluations>,
    ) { }

    helloEvaluations(): string {
        return "Hello Evaluations";
    }

    insertEvaluation(
        number: number,
        ability: number,
        opinion: string,
        player: Players): void {
        const answer = getRepository(Evaluations)
            .createQueryBuilder()
            .insert()
            .into(Evaluations)
            .values([
                {
                    number: number,
                    ability: ability,
                    opinion: opinion,
                    player: player,
                }
            ])
            .execute();
    }
}