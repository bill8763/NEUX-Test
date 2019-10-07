import { DatePipe } from "@angular/common";
export declare class DateUtils {
    private datePipe;
    constructor(datePipe: DatePipe);
    toDateString(date: Date, format: string): string;
}
