import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Levels } from './levels.entity';

//Service injectable controller for the "levels" module
@Injectable()
export class LevelsService {
    constructor(
        @InjectRepository(Levels)
        private levelsRepository: Repository<Levels>,
    ) { }

    //Function that returns a string in order to check the functionality of the app
    helloLevels(): string {
        return "Hello Levels";
    }
}