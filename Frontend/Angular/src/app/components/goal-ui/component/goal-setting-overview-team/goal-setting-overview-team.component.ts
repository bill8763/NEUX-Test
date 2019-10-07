import { Component, OnInit, Input, Output, EventEmitter, ErrorHandler } from '@angular/core';
import { Language, TranslateService, AppRouter } from '@allianzSND/core';
import { GoalStoreService, ValidationState, GOAL_LANDING_STATUS, GoalSettingStepData, GoalSettingGoalStatus, GoalSettingYearConfig } from '@allianzSND/goal';
import { NotificationUtils } from '@allianzSND/notification';



@Component({
  selector: 'snd-goal-setting-overview-team',
  templateUrl: './goal-setting-overview-team.component.html',
  styleUrls: ['./goal-setting-overview-team.component.scss']
})
export class GoalSettingOverviewTeamComponent implements OnInit {

  constructor(
    private router: AppRouter,
    private goalStore: GoalStoreService,
    private notifcationUtils: NotificationUtils
  ) { }

  public isFirstTime: boolean;
  public isNeedSetting: boolean;

  public language: Language = new Language();

  private _yearConfig: GoalSettingYearConfig;
  private _yearStatus: GoalSettingGoalStatus;

  @Output() validationState: EventEmitter<ValidationState> = new EventEmitter<ValidationState>();


  private teamAllStepData: GoalSettingStepData;
  @Input()
  set allStepData(allStepData) {
    if (allStepData != undefined && Object.keys(allStepData).length) {
      this.teamAllStepData = allStepData;
      console.warn("this._allStepData: ", this.teamAllStepData);

      /*  start init yearConfig && yearStatus */
      this._yearConfig = this.teamAllStepData.YearConfig;
      this._yearStatus = this.teamAllStepData.GoalStatus;
      /*  end of init yearConfig && yearStatus */

      this.isFirstTime = this._yearStatus.IsFirstTime;
      this.isNeedSetting = this._yearStatus.IsNeedSetting;

    }
  }
  get allStepData() {
    return this.teamAllStepData;
  }

  ngOnInit() {
  }


  rightCardOnClickBtn(functionName: string) {
    if (functionName == 'agencyPlan') {
      this._goToAgencyPlan();
    }
    else if (functionName == 'progress') {
      this._goToProgress();
    }
  }

  private _goToAgencyPlan() {
    this.router.navigate("AgencyPlan", this._yearConfig.DataYear.toString());
  }

  private _goToProgress() {
    this.router.navigate("Progress");
  }

}
