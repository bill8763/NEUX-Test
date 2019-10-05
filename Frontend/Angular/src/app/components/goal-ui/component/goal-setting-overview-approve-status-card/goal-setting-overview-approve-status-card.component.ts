import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Language, TranslateService, AppRouter } from '@allianzSND/core';
import { STEPSTYLETYPE } from '@allianzSND/ui';
import { GoalSettingStepData, GoalStoreService, GOAL_LANDING_STATUS } from '@allianzSND/goal';
import { NotificationUtils } from '@allianzSND/notification';

@Component({
  selector: 'snd-goal-setting-overview-approve-status-card',
  templateUrl: './goal-setting-overview-approve-status-card.component.html',
  styleUrls: ['./goal-setting-overview-approve-status-card.component.scss']
})
export class GoalSettingOverviewApproveStatusCardComponent implements OnInit {

  public approveStatus: string = '';
  private _allStepData: GoalSettingStepData;
  @Input()
  public get allStepData() {
    return this._allStepData;
  }
  public set allStepData(value) {
    if (value) {
      this._allStepData = value;
      this.approveStatus = this._allStepData.GoalStatus.ApproveStatus;

    }
  }
  

  public approveStatusStepData = ['Submit', 'Waiting_Approval', 'Complete'];
  public STEP_STYLE_2_2 = STEPSTYLETYPE.STYLE_2_2;
  public language = new Language();
  constructor(
    private translateService: TranslateService,
    private router: AppRouter,
    private goalStore: GoalStoreService,
    private notifcationUtils: NotificationUtils,
  ) { }

  ngOnInit() {
    this.approveStatusStepData = this.approveStatusStepData.map(step => this.translateService.translate(step));
  }

  adjustGoal() {
    if (this.notifcationUtils.checkNetworkBeforeAction()) {

      let isFirstTime = this.allStepData.GoalStatus.IsFirstTime;
      let status = isFirstTime ? GOAL_LANDING_STATUS.FIRST_SET : GOAL_LANDING_STATUS.ADJUST_GOAL;
      this.goalStore.setGoalLandingStatus(status);
      this.goalStore.setCanSkip(true);
      this.goalStore.setSettingYear(this.allStepData.DataYear);

      console.warn("this._yearConfig['DataYear' in approve status", this.allStepData.DataYear);
      this.router.navigate("GoalSetting");
    }
  }



}
