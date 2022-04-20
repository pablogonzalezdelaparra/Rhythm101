import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Levels } from './levels.entity';

@Injectable()
export class LevelsService {
    constructor(
        @InjectRepository(Levels)
        private levelsRepository: Repository<Levels>,
    ) { }

    helloLevels(): string {
        return "Hello Levels";
    }
}