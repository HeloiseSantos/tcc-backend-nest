/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Wine } from './entities/wine.entity';

@Injectable()
export class WinesService {
    private wines: Wine[] = [
        {
            id: 1,
            name: "Vinho tinto",
            description: "Vinho tinto",
            tags: ["Vinho tinto", "Uva Merlot", "Cabernet"]
        }
    ];

    findAll() {
        const allWines = this.wines;

        if(allWines.length == 0) {
            throw new HttpException(`Nenhum vinho encontrado!`, HttpStatus.NOT_FOUND);
        }

        return allWines;
    }

    findOne(id: string) {
        const wine = this.wines.find((Wine) => Wine.id === Number(id));

        if(!wine) {
            throw new HttpException(`Vinho ID #${id} não encontrado!`, HttpStatus.NOT_FOUND);
        }

        return wine;
    }

    create(createWineDto: any) {
        this.wines.push(createWineDto);
        return createWineDto;
    }

    update(id: string, updateWineDto: any) {
        const indexWine = this.wines.findIndex((Wine) => Wine.id === Number(id));

        this.wines[indexWine] = updateWineDto;
    }

    delete(id: string) {
        const indexWine = this.wines.findIndex((Wine) => Wine.id === Number(id));

        if(indexWine >= 0) {
            this.wines.splice(indexWine, 1);
        }
    }
}
