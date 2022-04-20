import { Controller, Get, Param } from "@nestjs/common";
import { LevelsService } from './levels.service';

@Controller('levels')
export class LevelsController {
    constructor(private readonly Levelservice: LevelsService) { }

    @Get()
    sayHelloLevels(): string {
        var answer = this.Levelservice.helloLevels();
        return answer;
    }
}