import { Injectable } from "@angular/core";
import { goalSettingShowRule } from '@allianzSND/goal';

@Injectable({
    providedIn: 'root',
})
export class GoalSettingShowRule implements goalSettingShowRule{
  public isMonthPlanFYFCCardCanEdit(): boolean {
    return true;
  }
}