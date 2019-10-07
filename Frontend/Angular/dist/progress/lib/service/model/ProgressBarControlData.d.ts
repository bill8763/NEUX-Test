import { ProgressBarControlModeType } from "./Enum/ProgressBarControlModeType";
export declare class ProgressBarControlData {
    private _barLengthMaxValue;
    barLengthMaxValue: number;
    GetConfigMin(type: ProgressBarControlModeType): number;
    GetConfigMax(type: ProgressBarControlModeType): number;
}
