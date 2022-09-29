/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinesController } from './wines/wines.controller';
import { WinesService } from './wines/wines.service';

@Module({
  imports: [],
  controllers: [AppController, WinesController],
  providers: [AppService, WinesService],
})
export class AppModule {}
