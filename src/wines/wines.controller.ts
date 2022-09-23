import { Controller, Get } from '@nestjs/common';

@Controller()
export class WinesController {
  @Get('wines')
  listAllWines() {
    return 'Lista de vinhos';
  }
}
