/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('wines')
export class WinesController {
  @Get()
  listAll(
    @Res() response
  ) {
    return response.status(200).send('Lista de vinhos');
  }

  @Get(':id')
  listOne(
    @Param('id') id: string
  ) {
    return `Vinho #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(
    @Body() body // parâmetro do que será enviado na requisição
  ) {
    return body;
  }
}
