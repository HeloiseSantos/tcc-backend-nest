/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { WinesService } from './wines.service';

@Controller('wines')
export class WinesController {

  constructor(
    private readonly winesService: WinesService,
  ) {}

  @Get()
  listAll() {
    return this.winesService.listAll();
  }

  @Get(':id')
  listOne(
    @Param('id') id: string
  ) {
    return this.winesService.listOne(id);
  }

  @Post()
  create(
    @Body() body
  ) {
    return this.winesService.create(body);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body
  ) {
    return this.winesService.update(id, body);
  }

  @Delete(':id')
  delete(
    @Param('id') id: string
  ) {
    return this.winesService.delete(id);
  }
}
