import { Module } from '@nestjs/common';

//Importing TypeOrm as a module in order to establish the database connection
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//Importing all modules and entities to establish connection to database
import { Players } from './players/players.entity';
import { PlayersModule } from './players/players.module'
import { Attempts } from './attempts/attempts.entity';
import { AttemptsModule } from './attempts/attempts.module'
import { Levels } from './levels/levels.entity';
import { LevelsModule } from './levels/levels.module'
import { Evaluations } from './evaluations/evaluations.entity';
import { EvaluationsModule } from './evaluations/evaluations.module'

//Connection to DigitalOcean MySQL database, using a dedicated user 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //Defining the type of database
      host: '164.92.118.205', //DigitalOcean Public IP
      port: 3306, //phpMyAdmin's listening port
      username: 'team4',
      password: 'admin',
      database: 'rhythm101',
      entities: [Players, Attempts, Levels, Evaluations], //Importing all entities
      autoLoadEntities: true,
      synchronize: true,
    }), PlayersModule, AttemptsModule, LevelsModule, EvaluationsModule //Importing all Modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}