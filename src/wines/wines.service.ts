/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
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

    listAll() {
        return this.wines;
    }

    listOne(id: string) {
        return this.wines.find((Wine) => Wine.id === Number(id));
    }

    create(createWineDto: any) {
        return this.wines.push(createWineDto);
    }

    update(id: string, updateWineDto: any) {
        const indexWine = this.wines.findIndex((Wine) => Wine.id === Number(id));

        this.wines[indexWine] = updateWineDto;
    }

    remove(id: string) {
        const indexWine = this.wines.findIndex((Wine) => Wine.id === Number(id));

        if(indexWine >= 0) {
            this.wines.splice(indexWine, 1);
        }
    }
}
