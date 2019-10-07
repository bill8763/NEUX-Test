import { MetaController, ValidationResult } from "@allianzSND/core";
export declare class DefaultCalendarDetailMetaController implements MetaController {
    onDataUpdated(data: any): void;
    onValidateAll(data: any): boolean;
    onValueChange(column: string, value: any, groupId: string, index: number, data: any, vaildResult: ValidationResult): void;
    btnClick(type: string, id: string, data: any): void;
}
