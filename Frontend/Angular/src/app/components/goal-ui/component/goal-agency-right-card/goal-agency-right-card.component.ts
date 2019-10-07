import { Component, OnInit, Input, EventEmitter, Output, Optional, Inject } from '@angular/core';
import { GoalTitleListItem, GoalSettingStepData, GoalSettingStep5, AgencyPlanDataForOverview, GoalSettingUtilService, CombineStep5AndAgecyPlanData } from '@allianzSND/goal';
import { Language, showRuleToken, showRule } from '@allianzSND/core';

@Component({
  selector: 'snd-goal-agency-right-card',
  templateUrl: './goal-agency-right-card.component.html',
  styleUrls: ['./goal-agency-right-card.component.scss']
})
export class GoalAgencyRightCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() isShowBtnArea: boolean = false;

  private _allStepData: GoalSettingStepData;
  @Input()
  public get allStepData() {
    return this._allStepData;
  }
  public set allStepData(value) {
    if (value) {
      this._allStepData = value;
      let goalSettingStep5: GoalSettingStep5 = this._allStepData.Step5
      let agencyPlanData: AgencyPlanDataForOverview = this._allStepData.AgencyPlan;

      let step5Data: CombineStep5AndAgecyPlanData = this.goalSettingUtilService.transformTeamStep5Data(goalSettingStep5, agencyPlanData);
      this.titleListItems = step5Data.AgencyPlanItemList;
      this.listItemTextIsRed = step5Data.ItemTextIsRedList;
    }
  }
  @Output() clickBtn: EventEmitter<string> = new EventEmitter();
  public language = new Language();
  public isShowCompletionRate: boolean = false;
  public titleListItems: Array<GoalTitleListItem> = [];
  public listItemTextIsRed = [];


  constructor(
    private goalSettingUtilService: GoalSettingUtilService,
    @Optional() @Inject(showRuleToken) private showRule: showRule,
  ) { }

  ngOnInit() {
    if (this.showRule) {
      this.isShowCompletionRate = this.showRule.isShowGoalSettingCompletionRate();
    }
  }

  onClickBtn(funcName: string) {
    this.clickBtn.emit(funcName);
  }



}
