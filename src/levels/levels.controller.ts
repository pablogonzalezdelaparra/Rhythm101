import { Controller, Get, Param } from "@nestjs/common";
import { LevelsService } from './levels.service';

//"Levels" routing controller decorator responsible to receive and return HTTP requests
@Controller('levels')
export class LevelsController {
    constructor(private readonly Levelservice: LevelsService) { }

    //HTTP GET request in order to verify the status of the "levels" route
    @Get()
    sayHelloLevels(): string {
        var answer = this.Levelservice.helloLevels();
        return answer;
    }
}