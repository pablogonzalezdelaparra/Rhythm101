import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersService } from './players.service';
import { Players } from './players.entity';
import { PlayersController } from './players.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Players])],
    providers: [PlayersService],
    controllers: [PlayersController],
})

export class PlayersModule { }