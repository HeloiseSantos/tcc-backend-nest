/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const WineSchema = new mongoose.Schema({
    name: String,
    type: String,
    // ingredients: String[],
    manufacturingDate: String,
    unitPrice: Number,
    quantityProduced: Number
})