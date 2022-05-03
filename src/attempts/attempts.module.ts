import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttemptsService } from './attempts.service';
import { Attempts } from './attempts.entity';
import { AttemptsController } from './attempts.controller';
import { Players } from 'src/players/players.entity';
import { Levels } from 'src/levels/levels.entity';

//"Attempts" module that organizes and encapsulates the set of capabilities from the "attempts" entity, controllers and services
@Module({
    imports: [TypeOrmModule.forFeature([Attempts, Players, Levels])],
    providers: [AttemptsService],
    controllers: [AttemptsController],
})

export class AttemptsModule { }