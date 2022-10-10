/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinesModule } from './wines/wines.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://adminmabruhe:5HyVXMNRmYlVVrEL@cluster0.gbppzag.mongodb.net/?retryWrites=true&w=majority'),
    WinesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
