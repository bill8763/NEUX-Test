export interface IProgressBarControl {
    getProgressBarColor(numerator: number, denominator: number, configMin: number, configMax: number): string;
    getProgressBarLength(numerator: number, denominator: number, fixedNum: number, max?: number): string;
}
