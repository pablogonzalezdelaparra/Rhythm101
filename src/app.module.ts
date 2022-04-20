import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Players } from './players/players.entity';
import { PlayersModule } from './players/players.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attempts } from './attempts/attempts.entity';
import { AttemptsModule } from './attempts/attempts.module'
import { Levels } from './levels/levels.entity';
import { LevelsModule } from './levels/levels.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rhythm101-test',
      entities: [Players, Attempts, Levels],
      synchronize: true,
    }), PlayersModule, AttemptsModule, LevelsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}