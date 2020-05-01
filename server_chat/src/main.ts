import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';


const PORT = process.env.PORT || 5100;
const logger: Logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT);
  logger.log(`Server Started at port ${PORT}`);
}
bootstrap();
