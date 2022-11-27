/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export class Wine extends Document {
    name: string;
    type: string;
    manufacturingDate: string;
    unitPrice: number;
    quantityProduced: number;
}