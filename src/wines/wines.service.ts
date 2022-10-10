/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
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
        // const allWines = this.wines;

        // if(allWines.length == 0) {
        //     throw new HttpException(`Nenhum vinho encontrado!`, HttpStatus.NOT_FOUND);
        // }

        // return allWines;

        // indo no BD  e buscando todos os dados que estão na coleção de tarefas
        return await this.wineModel.find().exec();
    }

    async findOne(id: string) {
        // const wine = this.wines.find((Wine) => Wine.id === Number(id));

        // if(!wine) {
        //     throw new HttpException(`Vinho ID #${id} não encontrado!`, HttpStatus.NOT_FOUND);
        // }

        // return wine;

        return await this.wineModel.findById(id).exec();
    }

    async create(createWineDto: any) {
        // this.wines.push(createWineDto);
        // return createWineDto;

        const createdWine = new this.wineModel(createWineDto);
        return await createdWine.save();
    }

    async update(id: string, updateWineDto: any) {
        // const indexWine = this.wines.findIndex((Wine) => Wine.id === Number(id));

        // this.wines[indexWine] = updateWineDto;
        
        await this.wineModel.updateOne({ _id: id }, updateWineDto).exec();
        return this.findOne(id);
    }

    async delete(id: string) {
        // const indexWine = this.wines.findIndex((Wine) => Wine.id === Number(id));

        // if(indexWine >= 0) {
        //     this.wines.splice(indexWine, 1);
        // }

        return await this.wineModel.deleteOne({ _id: id }).exec();
    }
}
