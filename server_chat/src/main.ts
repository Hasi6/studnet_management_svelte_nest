import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";
import { join } from "path";
const express = require("express");

const PORT = process.env.PORT || 5000;
const logger: Logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(express.static(join(process.cwd(), "./client/")));
  await app.listen(PORT);
  logger.log(`Server Started at port ${PORT}`);
}
bootstrap();
