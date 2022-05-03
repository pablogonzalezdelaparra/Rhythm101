import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PlayersService } from './players.service';

//"Players" routing controller decorator responsible to receive and return HTTP requests
@Controller('players')
export class PlayersController {
    constructor(private readonly Playerservice: PlayersService) { }

    //HTTP GET request in order to verify the status of the "players" route
    @Get()
    sayHelloPlayers(): string {
        var answer = this.Playerservice.helloPlayers();
        return answer;
    }

    //HTTP GET request that recieves username from player
    @Get(':username')
    showPlayerByUsername(@Param('username') username) {
        var answer = this.Playerservice.getPlayerByUsername(username);
        return answer;
    }

    //HTTP GET request that recieves username and password from player
    @Get(':username/:password')
    async validateExistingPlayerShowId(@Param('username') username, @Param('password') password) {
        var answer = this.Playerservice.searchExistingPlayer(username, password);
        return (await answer).id;
    }

    //HTTP GET request that recieves username and password from player
    /*@Get(':username/:password')
    validateExistingPlayer(@Param('username') username, @Param('password') password) {
        var answer = this.Playerservice.searchExistingPlayer(username, password);
        return answer;
    }*/

    //HTTP POST request that recieves the full players information
    @Post()
    async AddPlayer(@Body() body) {
        console.log("The data is:", body.name, body.birthday, body.country, body.city, body.username, body.password)
        const answer = this.Playerservice.insertPlayer(body.name, body.birthday, body.country, body.city, body.username, body.password);
        return "Player was added succesfully";
    }
}
