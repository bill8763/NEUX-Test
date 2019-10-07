import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
export declare class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
    monthTooltip(event: CalendarEvent): string;
    weekTooltip(event: CalendarEvent): string;
    dayTooltip(event: CalendarEvent): string;
}
