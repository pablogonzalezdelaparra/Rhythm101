import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res } from "@nestjs/common";
import { EMPTY, isEmpty } from "rxjs";

//Connection to database "Users"
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly Usersservice: UsersService) { }

    @Get()
    async fetchUsers(@Res() response) {
        const users = await this.Usersservice.findAllUsers();
        return response.status(HttpStatus.OK).json({
            users
        })
    }

    @Get(':name/:age')
    async inputUser(@Param('name') name, @Param('age') age) {
        var answer = this.Usersservice.insertUser(name, age);
        return "Value was inserted correctly"
    }
}