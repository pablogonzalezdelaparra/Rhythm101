import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//Connection to database "Accounts"
import { Accounts } from './accounts.entity';

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Accounts)
        private accountsRepository: Repository<Accounts>,
    ) { }

    findAll(): Promise<Accounts[]> {
        return this.accountsRepository.find();
    }

    findOne(id: string): Promise<Accounts> {
        return this.accountsRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.accountsRepository.delete(id);
    }
}