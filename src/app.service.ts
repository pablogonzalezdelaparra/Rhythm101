import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  //Function that returns a string in order to test the app is running correctly on the browser
  getHelloWorld(): string {
    return 'Hello World!';
  }
}
