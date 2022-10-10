/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wine } from './entities/wine.entity';

@Injectable()
export class WinesService {

    constructor(
        @InjectModel('Wine') private readonly wineModel: Model<Wine>
    ) {

    }

    async findAll() {
        const allWines = await this.wineModel.find().exec();

        if(allWines.length == 0) {
            throw new HttpException(`Nenhum vinho encontrado!`, HttpStatus.NOT_FOUND);
        }

        return allWines;
    }

    async findOne(id: string) {
        const wine = await this.wineModel.findById(id).exec();

        if(!wine) {
            throw new HttpException(`Vinho ID #${id} não encontrado!`, HttpStatus.NOT_FOUND);
        }

        return wine;
    }

    async create(createWineDto: any) {
        const createdWine = new this.wineModel(createWineDto);

        return await createdWine.save();
    }

    async update(id: string, updateWineDto: any) {
        await this.wineModel.updateOne({ _id: id }, updateWineDto).exec();

        return this.findOne(id);
    }

    async delete(id: string) {
        return await this.wineModel.deleteOne({ _id: id }).exec();
    }
}
