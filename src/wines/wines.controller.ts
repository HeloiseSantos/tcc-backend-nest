/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';

@Controller('wines')
export class WinesController {
  @Get()
  listAllWines() {
    return 'Lista de vinhos';
  }

  @Get(':id')
  listOneWine(
    @Param('id') id: string
  ) {
    return `Vinho #${id}`;
  }
}
