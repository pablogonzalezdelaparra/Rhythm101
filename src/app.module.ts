import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//Connection to "Accounts" modules
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accounts } from './accounts/accounts.entity';
import { AccountsModule } from './accounts/accounts.module'

import { Users } from './users/users.entity';
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rhythm101-test',
      entities: [Accounts, Users],
      synchronize: true,
    }), AccountsModule, UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}