import { MetaController, ValidationResult, ProfileCodeService } from "@allianzSND/core";
export declare class DefaultCalendarEditMetaController implements MetaController {
    private profileCodeService;
    constructor(profileCodeService: ProfileCodeService);
    private alertOpt;
    onDataUpdated(data: any): void;
    onValueChange(column: string, value: any, groupId: string, index: number, data: any, validationResult: ValidationResult): void;
    onValidateAll(data: any, validationResult: ValidationResult): boolean;
    btnClick(type: string, id: string, data: any): void;
    private toFiveUnit;
    private getToDate;
    private checkEndBeforeStartError;
    private combineDateTime;
    private getAlertOption;
}
