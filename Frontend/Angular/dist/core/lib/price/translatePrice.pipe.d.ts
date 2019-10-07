import { PipeTransform } from '@angular/core';
import { TranslatePriceService } from './translate-price.service';
export declare class TranslatePricePipe implements PipeTransform {
    private translatePriceService;
    role: string;
    million: number;
    constructor(translatePriceService: TranslatePriceService);
    transform(value: any, args?: any): string;
}
