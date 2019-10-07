import { Observable } from 'rxjs';
export interface GoalSettingInterface {
    countFYC(a: number, b: number): string;
    getFormData(): Observable<any>;
}
