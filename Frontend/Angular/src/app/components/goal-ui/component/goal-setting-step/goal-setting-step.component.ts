import { Component, OnInit, OnDestroy, } from '@angular/core';
import { LoginInfo, DefaultLoginMgr, AppRouter } from '@allianzSND/core';
import { take } from 'rxjs/operators';
import { GOAL_LANDING_STATUS, ROLE, GoalStoreService, GoalSettingStepDataParams } from '@allianzSND/goal';

@Component({
  selector: 'snd-goal-setting-step',
  templateUrl: './goal-setting-step.component.html',
  styleUrls: ['./goal-setting-step.component.scss']
})
export class GoalSettingStepComponent implements OnInit, OnDestroy {


  // store subscribe
  public canSkip: boolean;
  private settingStatus: GOAL_LANDING_STATUS = null;
  public goalSettingStepDataParams: GoalSettingStepDataParams = null;
  public isPromo = false;
  public role: ROLE = null;
  public ROLEENUM = ROLE;
  public backUrl = null;

  public isPopOpenInfoStep3 = false;
  clickInfoStep3(){
    this.isPopOpenInfoStep3 = true;
  }


  constructor(
    private router: AppRouter,
    private goalStore: GoalStoreService,
    private loginMgr: DefaultLoginMgr,
  ) {

    this.init();
  }


  ngOnInit() {

  }

  private async init() {
    console.log("goal-setting-step component init");
    let settingYear = await this.goalStore.getSettingYear().pipe(take(1)).toPromise();
    this.settingStatus = await this.goalStore.getGoalLandingStatus().pipe(take(1)).toPromise();
    this.isPromo = await this.goalStore.getIsPromo().pipe(take(1)).toPromise();
    let isAdjust = (this.settingStatus === GOAL_LANDING_STATUS.ADJUST_GOAL || this.isPromo);
    this.backUrl = this.settingStatus === GOAL_LANDING_STATUS.FIRST_INIT ? "Dashboard" : '';
    this.canSkip = await this.goalStore.getCanSkip().pipe(take(1)).toPromise();
    const loginInfo: LoginInfo = await this.loginMgr.getLoginInfo().pipe(take(1)).toPromise();
    this.role = loginInfo.AppUseMode[0];
    this.goalSettingStepDataParams = new GoalSettingStepDataParams(settingYear,isAdjust);
    console.log("init goal-setting-step component:", this.role, this.goalSettingStepDataParams, this.canSkip);
  }

  ngOnDestroy() {
  }

  onSubmit() {
    this.goalStore.setGoalLandingStatus(GOAL_LANDING_STATUS.SETTING_SUBMITTED);
    if (this.settingStatus === GOAL_LANDING_STATUS.ADJUST_GOAL || this.settingStatus === GOAL_LANDING_STATUS.FIRST_SET)
      this.router.navigate("Goal");
    else if (this.settingStatus === GOAL_LANDING_STATUS.FIRST_INIT)
      this.router.navigate("GoalLanding");
  }
}


