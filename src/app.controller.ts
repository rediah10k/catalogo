import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get()
  root(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  }

  @Get('api/precio-aleatorio')
  generarPrecioAleatorio() {
    const min = 100;
    const max = Math.pow(100, 3); // 1,000,000
    const precio = Math.floor(Math.random() * (max - min + 1)) + min;
    return { precio };
  }
}
