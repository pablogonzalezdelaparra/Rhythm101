import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { EvaluationsService } from './evaluations.service';

@Controller('evaluations')
export class EvaluationsController {
    constructor(private readonly Evaluationservice: EvaluationsService) { }

    @Get()
    sayHelloEvaluations(): string {
        var answer = this.Evaluationservice.helloEvaluations();
        return answer;
    }

    @Post()
    async AddEvaluation(@Body() body) {
        console.log("The data is:", body.number, body.ability, body.opinion, body.player)
        const answer = this.Evaluationservice.insertEvaluation(body.number, body.ability, body.opinion, body.player);
        return "Evaluation added succesfully";
    }
}