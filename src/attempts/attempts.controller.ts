import { Controller, Get, Param, Body, Post } from "@nestjs/common";
import { AttemptsService } from './attempts.service';

//"Attempts" routing controller decorator responsible to receive and return HTTP requests
@Controller('attempts')
export class AttemptsController {
    constructor(private readonly Attemptservice: AttemptsService) { }

    //HTTP GET request that recieves the player's id and the level register
    @Get(":idPlayer/:level")
    async showLeaderboard(@Param('idPlayer') idPlayer, @Param('level') level) {
        var answer = await this.Attemptservice.searchLeaderboard(idPlayer, level);
        return answer;
    }

    //HTTP GET request in order to verify the status of the "attempts" route
    @Get()
    sayHelloAttempts(): string {
        var answer = this.Attemptservice.helloAttempts();
        return answer;
    }

    //HTTP GET request that recieves id from player
    @Get(':idPlayer')
    async SearchLevelAttempt(@Param('idPlayer') idPlayer) {
        var answer = await this.Attemptservice.searchAttemptLevel(idPlayer);
        return answer;
    }

    //HTTP POST request that recieves the full attempt information from a certain player
    @Post()
    async AddAttempt(@Body() body) {
        console.log("The data is:", body.score, body.level, body.BeginTime, body.EndTime, body.player)
        const answer = this.Attemptservice.insertAttempt(body.score, body.level, body.BeginTime, body.EndTime, body.player);
        return "Attempt was added succesfully";
    }
}