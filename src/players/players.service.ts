import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Players } from './players.entity';

//Service injectable controller for the "players" module
@Injectable()
export class PlayersService {
    constructor(
        @InjectRepository(Players)
        private playersRepository: Repository<Players>,
    ) { }

    //Function that returns a string in order to check the functionality of the app
    helloPlayers(): string{
        return "Hello Players";
    }

    //Function that returns a players full information based on their username
    getPlayerByUsername(username: string): Promise<Players> {
        const answer = getRepository(Players)
        .createQueryBuilder("player")
        .select()
        .where("player.username = :username", {username: username})
        .getOneOrFail();
        return answer;
    }

    //Function that returns a players full information if the username and password are correct
    searchExistingPlayer(username: string, password: string): Promise<Players> {
        const answer = getRepository(Players)
            .createQueryBuilder("player")
            .select()
            .where("player.username = :username AND player.password = :password", { username: username, password: password })
            .getOneOrFail();
        return answer;
    }

    //Function that inserts a new player to the database in table "players" 
    insertPlayer(
        name: string,
        birthday: Date,
        country: string,
        city: string,
        username: string,
        password: string) {
        const answer = getRepository(Players)
            .createQueryBuilder()
            .insert()
            .into(Players)
            .values([
                {name: name, 
                birthday: birthday,
                country: country,
                city: city,
                username: username,
                password: password}
            ])
            .execute();
    }
}