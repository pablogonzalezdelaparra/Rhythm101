import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttemptsService } from './attempts.service';
import { Attempts } from './attempts.entity';
import { AttemptsController } from './attempts.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Attempts])],
    providers: [AttemptsService],
    controllers: [AttemptsController],
})

export class AttemptsModule { }