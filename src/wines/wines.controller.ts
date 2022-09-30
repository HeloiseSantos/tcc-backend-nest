/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateWineDto } from './dto/create-wine.dto';
import { UpdateWineDto } from './dto/update-wine.dto';
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
    @Body() createWineDto: CreateWineDto
  ) {
    return this.winesService.create(createWineDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWineDto: UpdateWineDto
  ) {
    return this.winesService.update(id, updateWineDto);
  }

  @Delete(':id')
  delete(
    @Param('id') id: string
  ) {
    return this.winesService.delete(id);
  }
}
