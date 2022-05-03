import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelsService } from './levels.service';
import { Levels } from './levels.entity';
import { LevelsController } from './levels.controller';
import { Attempts } from 'src/attempts/attempts.entity';

//"Levels" module that organizes and encapsulates the set of capabilities from the "levels" entity, controllers and services
@Module({
    imports: [TypeOrmModule.forFeature([Levels, Attempts])],
    providers: [LevelsService],
    controllers: [LevelsController],
})

export class LevelsModule { }