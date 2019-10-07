import { Component, OnInit, Input } from '@angular/core';
import { GoalTitleListItem, GoalSettingStep5, GoalSettingStepData, CombineStep5AndAgecyPlanData } from '@allianzSND/goal';
import { GoalSettingUtilService } from '@allianzSND/goal';

@Component({
  selector: 'snd-goal-agency-left-card',
  templateUrl: './goal-agency-left-card.component.html',
  styleUrls: ['./goal-agency-left-card.component.scss']
})
export class GoalAgencyLeftCardComponent implements OnInit {

  constructor(
    private goalSettingUtilService: GoalSettingUtilService
  ) { }
  public effectiveMonthTitle: string = '';

  @Input() title: string = '';



  public titleListItems: Array<GoalTitleListItem> = [];
  private _allStepData: GoalSettingStepData;
  @Input() 
  set allStepData(allStepData) {
    if(allStepData) {
      this._allStepData = allStepData;
      let goalSettingStep5: GoalSettingStep5 = this._allStepData.Step5;
      let agencyPlanData = this._allStepData.AgencyPlan;
  
      let step5Data: CombineStep5AndAgecyPlanData = this.goalSettingUtilService.transformTeamStep5Data(goalSettingStep5, agencyPlanData);
      this.titleListItems = step5Data.Step5ItemList;

      this.effectiveMonthTitle = this.goalSettingUtilService.translateByStepData(this._allStepData).TeamGoalEffectiveMonthTitle;

    }
  }

  get allStepData() {
    return this._allStepData;
  }
  
  ngOnInit() {
  }

  

}
