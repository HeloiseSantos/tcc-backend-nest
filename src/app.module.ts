/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinesModule } from './wines/wines.module';

@Module({
  imports: [WinesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
