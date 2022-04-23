import { Controller, Get, Param, Body, Post } from "@nestjs/common";
import { AttemptsService } from './attempts.service';

@Controller('attempts')
export class AttemptsController {
    constructor(private readonly Attemptservice: AttemptsService) { }

    /*
    @Get()
    showMaxScore() {
        var answer = this.Attemptservice.getMaxScore();
        return answer;
    }
    */

    @Get("leaderboard")
    async showLeaderboard() {
        var answer = await this.Attemptservice.searchLeaderboard();
        return answer;
    }

    @Get()
    sayHelloAttempts(): string {
        var answer = this.Attemptservice.helloAttempts();
        return answer;
    }

    @Get(':idPlayer')
    async SearchLevelAttempt(@Param('idPlayer') idPlayer) {
        var answer = await this.Attemptservice.searchAttemptLevel(idPlayer);
        return answer;
    }

    @Post()
    async AddAttempt(@Body() body) {
        console.log("The data is:", body.score, body.level, body.BeginTime, body.EndTime, body.player)
        const answer = this.Attemptservice.insertAttempt(body.score, body.level, body.BeginTime, body.EndTime, body.player);
    }
}