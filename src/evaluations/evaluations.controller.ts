import { Controller, Get, Param } from "@nestjs/common";
import { EvaluationsService } from './evaluations.service';

@Controller('evaluations')
export class EvaluationsController {
    constructor(private readonly Evaluationservice: EvaluationsService) { }

    @Get()
    sayHelloEvaluations(): string {
        var answer = this.Evaluationservice.helloEvaluations();
        return answer;
    }

    @Get(':number/:ability/:opinion/:player')
    AddAttempt(
        @Param('number') number,
        @Param('ability') ability,
        @Param('opinion') opinion,
        @Param('player') player) {
        this.Evaluationservice.insertEvaluation(number, ability, opinion, player);
    }
}