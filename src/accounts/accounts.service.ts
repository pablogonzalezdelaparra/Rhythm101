import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getRepository } from "typeorm";

//Connection to database "Accounts"
import { Accounts } from './accounts.entity';

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Accounts)
        private accountsRepository: Repository<Accounts>,
    ) { }

    findAccount(username: string, password: string): Promise<Accounts> {
        const answer = getRepository(Accounts)
            .createQueryBuilder("account")
            .select("account")
            .leftJoinAndSelect("account.user", "user")
            .where("account.username = :username AND account.password = :password", { username: username, password: password })
            .getOne();
        return answer;
    }   
}