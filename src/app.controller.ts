import { Body, Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

//Main routing controller decorator responsible to receive and return HTTP requests
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //HTTP GET request in order to verify the status of the app
  @Get()
  getHelloWorld(): string {
    return this.appService.getHelloWorld();
  }
}