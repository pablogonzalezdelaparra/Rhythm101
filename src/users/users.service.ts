import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//Connection to database "Users"
import { Users } from './users.entity';
import { getRepository } from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) { }

    findAllUsers(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    findUser(name: string): Promise<Users> {
        return this.usersRepository.findOne({name});
    }

    async remove(name: string): Promise<void> {
        await this.usersRepository.delete(name);
    }

    insertUser(name: string, age: string): void {
        const answer = getRepository(Users)
            .createQueryBuilder()
            .insert()
            .into(Users)
            .values([
                { name: name, age: Number(age) }
            ])
            .execute();
    }
}