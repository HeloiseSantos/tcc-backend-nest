/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export class Wine extends Document {
    // id: number;
    name: string;
    type: string;
    // ingredients: string[];
    manufacturingDate: string;
    unitPrice: number;
    quantityProduced: number;
}