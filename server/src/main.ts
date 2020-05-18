import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';


const PORT = process.env.PORT || 5000;
const logger: Logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT);
  logger.log(`Server Started at port ${PORT}`);
}
bootstrap();
