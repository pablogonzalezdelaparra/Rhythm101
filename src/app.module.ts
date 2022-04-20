import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Players } from './players/players.entity';
import { PlayersModule } from './players/players.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attempts } from './attempts/attempts.entity';
import { AttemptsModule } from './attempts/attempts.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rhythm101-test',
      entities: [Players, Attempts],
      synchronize: true,
    }), PlayersModule, AttemptsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}