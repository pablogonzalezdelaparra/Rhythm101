import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
    constructor(private readonly Playerservice: PlayersService) { }

    @Get()
    sayHelloPlayers(): string {
        var answer = this.Playerservice.helloPlayers();
        return answer;
    }

    @Get(':username')
    showPlayerByUsername(@Param('username') username) {
        var answer = this.Playerservice.getPlayerByUsername(username);
        return answer;
    }

    @Get(':username/:password')
    async validateExistingPlayerShowId(@Param('username') username, @Param('password') password) {
        var answer = this.Playerservice.searchExistingPlayer(username, password);
        return (await answer).id;
    }

    @Get(':username/:password')
    validateExistingPlayer(@Param('username') username, @Param('password') password) {
        var answer = this.Playerservice.searchExistingPlayer(username, password);
        return answer;
    }

    @Post()
    async AddPlayer(@Body() body) {
        console.log("The data is:", body.name, body.birthday, body.country, body.city, body.username, body.password)
        const answer = this.Playerservice.insertPlayer(body.name, body.birthday, body.country, body.city, body.username, body.password);
        return "Player was added succesfully";
    }
}
