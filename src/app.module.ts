import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinesController } from './wines/wines.controller';

@Module({
  imports: [],
  controllers: [AppController, WinesController],
  providers: [AppService],
})
export class AppModule {}
