/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('wines')
export class WinesController {
  @Get()
  listAll() {
    return 'Lista de vinhos';
  }

  @Get(':id')
  listOne(
    @Param('id') id: string
  ) {
    return `Vinho #${id}`;
  }

  @Post()
  create(
    @Body() body // parâmetro do que será enviado na requisição
  ) {
    return body;
  }
}
