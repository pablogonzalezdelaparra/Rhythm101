import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res } from "@nestjs/common";

//Connection to database "Accounts"
import { Accounts } from './accounts.entity';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly Accountservice: AccountsService) { }

    @Get(':username/:password')
    async validateAccountReturnUser(@Param('username') username, @Param('password') password) {
        var answer = this.Accountservice.findAccount(username, password);
        return (await answer).user;
    }
}