import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Players } from './players.entity';

@Injectable()
export class PlayersService {
    constructor(
        @InjectRepository(Players)
        private playersRepository: Repository<Players>,
    ) { }

    helloPlayers(): string{
        return "Hello Players";
    }

    getPlayerByUsername(username: string): Promise<Players> {
        const answer = getRepository(Players)
        .createQueryBuilder("player")
        .select()
        .where("player.username = :username", {username: username})
        .getOneOrFail();
        return answer;
    }

    searchExistingPlayer(username: string, password: string): Promise<Players> {
        const answer = getRepository(Players)
            .createQueryBuilder("player")
            .select()
            .where("player.username = :username AND player.password = :password", { username: username, password: password })
            .getOneOrFail();
        return answer;
    }

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
            return answer;
    }
}