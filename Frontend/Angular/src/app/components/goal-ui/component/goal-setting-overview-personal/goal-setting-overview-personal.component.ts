import { Component, OnInit, Input, OnDestroy, Optional, Inject, Output, EventEmitter } from '@angular/core';
import { Language, TranslateService, NotificationObject, NotificationMgr, SUBMITGOALTYPE, AppRouter, NotificationType } from '@allianzSND/core';
import { GoalSettingService } from '@allianzSND/goal';
import { Subscription } from 'rxjs';
import { GoalStoreService, PLAN_FYFC_POPUP_STATE, GoalSettingStep4, GOAL_LANDING_STATUS, PlanFYFCPopupInfo, goalSettingShowRuleToken, goalSettingShowRule, GoalSettingPlanPopup, MonthlyPlanFYFCData, GoalSettingStepData, GoalSettingGoalStatus, GoalSettingYearConfig } from '@allianzSND/goal';
import { NotificationUtils } from '@allianzSND/notification';


@Component({
  selector: 'snd-goal-setting-overview-personal',
  templateUrl: './goal-setting-overview-personal.component.html',
  styleUrls: ['./goal-setting-overview-personal.component.scss']
})
export class GoalSettingOverviewPersonalComponent implements OnInit, OnDestroy {


  constructor(
    private router: AppRouter,
    private goalStore: GoalStoreService,
    private goalSettingService: GoalSettingService,
    private notifcationUtils: NotificationUtils,
    private notificationMgr: NotificationMgr,
    @Optional() @Inject(goalSettingShowRuleToken) private goalSettingShowRule: goalSettingShowRule
  ) {
    this._planFYFCInfoSubscription = this.goalStore.getPlanFYFCPopupInfo().subscribe(info => {
      if (info.state == PLAN_FYFC_POPUP_STATE.NEEDAPPROVESUBMIT || info.state == PLAN_FYFC_POPUP_STATE.NOTNEEDAPPROVESUBMIT) {

        console.log("data in sub: ", info.data);

        this._submitGoal(info.state == PLAN_FYFC_POPUP_STATE.NEEDAPPROVESUBMIT, info.data);
      }
    });
  }

  ngOnDestroy(): void {
    this._planFYFCInfoSubscription.unsubscribe();
  }

  //for subscription
  private _planFYFCInfoSubscription: Subscription = null;
  //end of subscription

  //refresh use
  public isLoadingFinish: boolean = true;


  public isMonthlyPlanFYFCCardCanEdit: boolean = false;


  public language: Language = new Language();
  private performanceMonthStart: number = -1;
  private performanceMonthEnd: number = -1;

  private _yearConfig: GoalSettingYearConfig;
  private _yearStatus: GoalSettingGoalStatus;

  private _allStepData: GoalSettingStepData;
  @Input()
  set allStepData(allStepData: GoalSettingStepData) {
    if (allStepData && Object.keys(allStepData).length) {
      this._allStepData = allStepData;
      console.warn("this._allStepData: ", this._allStepData);

      this._yearConfig = this._allStepData.YearConfig;
      // this._isNextYear = this._allStepData['IsNextYear'];

      this._yearStatus = this._allStepData.GoalStatus;

      let approveStatus = this._yearStatus.ApproveStatus;
      this.isMonthlyPlanFYFCCardCanEdit = this._judgeIsMonthlyPlanFYFCCanEdit(approveStatus);

      this.performanceMonthStart = this._yearStatus.PersonnelGoalApplicableYM;
      this.performanceMonthEnd = this._yearConfig.PerformanceSettlementMonth;

      console.warn("go to init Step1");

    }
  }
  get allStepData() {
    return this._allStepData;
  }

  @Output() afterSubmit: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  goToAgencyPlan() {
    this.router.navigate('AgencyPlan');
  } // end goalAgencyPlan


  private async _submitGoal(isNeedApprove: boolean, stepDate: GoalSettingStepData) {

    console.warn("_submitGoal data: ", isNeedApprove, " ", stepDate);


    let resp = await this.goalSettingService.submitGoal(SUBMITGOALTYPE.PLAN, isNeedApprove, stepDate).toPromise();
    if (resp.isSuccess) {
      this.goalStore.setPlanFYFCPopupInfo(new PlanFYFCPopupInfo(PLAN_FYFC_POPUP_STATE.CLOSE, null));
      this.afterSubmit.emit();
    } else {
      this.notificationMgr.pushNotification(NotificationType.SubmitFail, null);
    }
    // console.warn("resp in sync: ",resp);



  }


  onEditPlanFYFC() {
    if (this.notifcationUtils.checkNetworkBeforeAction()) {
      console.warn("editPersonalPlanFYFC in personal");
      this.goalStore.setPlanFYFCPopupInfo(new PlanFYFCPopupInfo(PLAN_FYFC_POPUP_STATE.DISPLAY, this.allStepData));
    }
  }

  private _judgeIsMonthlyPlanFYFCCanEdit(approveStatus: string) {
    let goalSettingShowRuleImplIsMonthlyPlanFYFCCanEdit: boolean = true;
    if (this.goalSettingShowRule) {
      goalSettingShowRuleImplIsMonthlyPlanFYFCCanEdit = this.goalSettingShowRule.isMonthPlanFYFCCardCanEdit();
    }
    return (approveStatus == 'A' || approveStatus == 'R') && goalSettingShowRuleImplIsMonthlyPlanFYFCCanEdit;
  }


}
