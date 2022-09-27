/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body
  ) {
    return `Atualização do vinho #${id}`;
  }

  @Delete(':id')
  delete(
    @Param('id') id: string
  ) {
    return `Remoção do vinho #${id}`;
  }
}
