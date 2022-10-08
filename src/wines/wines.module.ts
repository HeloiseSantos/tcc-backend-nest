/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WineSchema } from './schemas/wine.schema';
import { WinesController } from './wines.controller';
import { WinesService } from './wines.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'Wine',
        schema: WineSchema
    }])],
    controllers: [WinesController],
    providers: [WinesService],
})
export class WinesModule {}
