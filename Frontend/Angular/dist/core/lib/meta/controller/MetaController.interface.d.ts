import { ValidationResult } from "../../utils/ValidationResult";
export interface MetaController {
    onValueChange(column: string, value: any, groupId: string, index: number, data: any, vaildResult: ValidationResult): void;
    onValidateAll(data: any, vaildResult: ValidationResult): boolean;
    btnClick(type: string, id: string, data: any): void;
    onDataUpdated(data: any): void;
}
