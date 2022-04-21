import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelsService } from './levels.service';
import { Levels } from './levels.entity';
import { LevelsController } from './levels.controller';
import { Attempts } from 'src/attempts/attempts.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Levels, Attempts])],
    providers: [LevelsService],
    controllers: [LevelsController],
})

export class LevelsModule { }