/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateWineDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly description: string;

    @IsString({ each: true })
    readonly tags: string[];
}
