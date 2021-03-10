import { Controller, Get, Res } from "@nestjs/common";
import * as path from "path";
import { Response } from "express";
import { join } from "path";
@Controller("")
export class AppController {
  @Get("/main")
  sendClient(@Res() res: Response) {
    return res.sendFile(join(process.cwd(), "./client/index.html"));
  }
}
