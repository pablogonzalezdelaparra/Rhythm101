import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluationsService } from './evaluations.service';
import { Evaluations } from './evaluations.entity';
import { EvaluationsController } from './evaluations.controller';
import { Players } from 'src/players/players.entity';

//"Evaluations" module that organizes and encapsulates the set of capabilities from the "evaluations" entity, controllers and services
@Module({
    imports: [TypeOrmModule.forFeature([Evaluations, Players])],
    providers: [EvaluationsService],
    controllers: [EvaluationsController],
})

export class EvaluationsModule { }