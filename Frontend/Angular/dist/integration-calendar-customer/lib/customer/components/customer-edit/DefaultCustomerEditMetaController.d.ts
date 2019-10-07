import { MetaController, ValidationResult } from "@allianzSND/core";
export declare class DefaultCustomerEditMetaController implements MetaController {
    onDataUpdated(data: any): void;
    onValueChange(column: string, value: any, groupId: string, index: number, data: any, validationResult: ValidationResult): void;
    onValidateAll(data: any, validationResult: ValidationResult): boolean;
    btnClick(type: string, id: string, data: any): void;
    private isEmailFormat;
}
