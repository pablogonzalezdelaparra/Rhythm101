import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";

//Connection to database "Accounts"
import { Accounts } from './accounts.entity';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly Accountservice: AccountsService) { }

    @Get()
    async fetchAll(@Res() response) {
        const accounts = await this.Accountservice.findAll();
        return response.status(HttpStatus.OK).json({
            accounts
        })
    }
}