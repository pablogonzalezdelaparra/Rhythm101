import { Controller, Get, Param } from "@nestjs/common";
import { AttemptsService } from './attempts.service';

@Controller('attempts')
export class AttemptsController {
    constructor(private readonly Attemptservice: AttemptsService) { }

    @Get()
    sayHelloAttempts(): string {
        var answer = this.Attemptservice.helloAttempts();
        return answer;
    }
    
    @Get(':score/:level/:BeginTime/:player')
    AddAttempt(
        @Param('score') score,
        @Param('level') level,
        @Param('BeginTime') BeginTime,
        @Param('player') player) {
        this.Attemptservice.insertAttempt(score, level, BeginTime, player);
    }
}