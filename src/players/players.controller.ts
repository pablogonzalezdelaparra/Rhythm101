import { Controller, Get, Param } from "@nestjs/common";
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

    /*
    @Get(':username/:password')
    validateExistingPlayer(@Param('username') username, @Param('password') password) {
        var answer = this.Playerservice.searchExistingPlayer(username, password);
        return answer;
    }
    */

    @Get(':name/:birthday/:country/:city/:username/:password')
    AddPlayer(
        @Param('name') name,
        @Param('birthday') birthday,
        @Param('country') country,
        @Param('city') city,
        @Param('username') username,
        @Param('password') password) {
        this.Playerservice.insertPlayer(name, birthday, country, city, username, password);
    }
}