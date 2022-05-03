import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Function that defines the entry point for the application on port 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
