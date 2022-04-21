import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Players } from './players/players.entity';
import { PlayersModule } from './players/players.module'
import { Attempts } from './attempts/attempts.entity';
import { AttemptsModule } from './attempts/attempts.module'
import { Levels } from './levels/levels.entity';
import { LevelsModule } from './levels/levels.module'
import { Evaluations } from './evaluations/evaluations.entity';
import { EvaluationsModule } from './evaluations/evaluations.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '164.92.118.205', //DigitalOcean
      port: 3306,
      username: 'team4',
      password: 'admin',
      database: 'rhythm101',
      entities: [Players, Attempts, Levels, Evaluations],
      autoLoadEntities: true,
      synchronize: true,
    }), PlayersModule, AttemptsModule, LevelsModule, EvaluationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}