/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class CreateWineDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly type: string;

    @IsString({ each: true })
    readonly ingredients: string[];

    @IsString()
    readonly manufacturingDate: string;

    @IsNumber()
    readonly unitPrice: string;

    @IsNumber()
    readonly quantityProduced: string;
}
