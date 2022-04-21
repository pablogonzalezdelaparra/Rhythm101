import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluationsService } from './evaluations.service';
import { Evaluations } from './evaluations.entity';
import { EvaluationsController } from './evaluations.controller';
import { Players } from 'src/players/players.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Evaluations, Players])],
    providers: [EvaluationsService],
    controllers: [EvaluationsController],
})

export class EvaluationsModule { }