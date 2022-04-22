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

    @Get()
    sayHelloAttempts(): string {
        var answer = this.Attemptservice.helloAttempts();
        return answer;
    }
    
    @Get(':score/:level/:BeginTime/:EndTime/:player')
    AddAttempt(
        @Param('score') score,
        @Param('level') level,
        @Param('BeginTime') BeginTime,
        @Param('EndTime') EndTime,
        @Param('player') player) {
        this.Attemptservice.insertAttempt(score, level, BeginTime, EndTime, player);
    }

    @Post()
    async AddEvaluation(@Body() body) {
        console.log("The data is:", body.score, body.level, body.BeginTime, body.EndTime, body.player)
        const answer = this.Attemptservice.insertAttempt(body.score, body.level, body.BeginTime, body.EndTime, body.player);
    }
}