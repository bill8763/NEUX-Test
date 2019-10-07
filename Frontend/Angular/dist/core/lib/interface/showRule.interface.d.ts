export interface showRule {
    convertName(firstName: string, lastName: string): string;
    convertDate(date: Date): string;
    convertDateWithoutYear(date: Date): string;
    convertDateAndTime(date: Date): string;
    convertAddress(addressObj: any): string;
    isShowGoalSettingCompletionRate(): boolean;
}
