import { PipeTransform } from '@angular/core';
export declare class NumberFormatPipe implements PipeTransform {
    constructor();
    transform(value: any, decimalPlaces?: number): string;
}
