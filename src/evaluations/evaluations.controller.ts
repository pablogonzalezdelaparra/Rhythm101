import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { EvaluationsService } from './evaluations.service';

//"Evaluations" routing controller decorator responsible to receive and return HTTP requests
@Controller('evaluations')
export class EvaluationsController {
    constructor(private readonly Evaluationservice: EvaluationsService) { }

    //HTTP GET request in order to verify the status of the "evaluations" route
    @Get()
    sayHelloEvaluations(): string {
        var answer = this.Evaluationservice.helloEvaluations();
        return answer;
    }

    //HTTP POST request that recieves the full evaluation information from a certain player
    @Post()
    async AddEvaluation(@Body() body) {
        console.log("The data is:", body.number, body.ability, body.opinion, body.player)
        const answer = this.Evaluationservice.insertEvaluation(body.number, body.ability, body.opinion, body.player);
        return "Evaluation was added succesfully";

    }
}