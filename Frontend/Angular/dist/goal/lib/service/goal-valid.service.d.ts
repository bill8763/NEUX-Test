import { ErrorHandler } from "@angular/core";
import { GoalSettingStepData, ValidError } from "./model";
import { GoalSettingService } from "./goal-setting.service";
import { goalSettingStep, GoalValidExtension } from "../interface";
export declare class GoalValidService {
    private errorHandler;
    private goalSettingService;
    private goalSettingStep;
    private goalValid;
    private numberValid;
    private requiredValid;
    constructor(errorHandler: ErrorHandler, goalSettingService: GoalSettingService, goalSettingStep: goalSettingStep, goalValid: GoalValidExtension);
    onChangeValid(step: number, colId: string, val: string, validDatas: GoalSettingStepData, isAdjust: boolean, errorResult: Array<ValidError>, isPageValid?: boolean): Array<ValidError>;
    pageValid(step: number, validDatas: GoalSettingStepData, isAdjust: boolean): Array<ValidError>;
    unitPageValid(step: number, validDatas: GoalSettingStepData, isAdjust: boolean, errorResult: ValidError[]): ValidError[];
    private _setError;
    private _validShortfall;
}
