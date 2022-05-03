import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Players } from './players.entity';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';

//"Players" module that organizes and encapsulates the set of capabilities from the "players" entity, controllers and services
@Module({
    imports: [TypeOrmModule.forFeature([Players])],
    providers: [PlayersService],
    controllers: [PlayersController],
})

export class PlayersModule { }