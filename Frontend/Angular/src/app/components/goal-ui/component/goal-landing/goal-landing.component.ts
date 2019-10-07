import { Component, OnInit } from '@angular/core';
import { DefaultLoginMgr, LoginInfo, Language, NotificationMgr, CheckPermissionService, NotificationType, DeviceService, AppRouter } from '@allianzSND/core';
import { Router } from '@angular/router';
import { GoalSettingService, GoalSettingGoalStatus } from '@allianzSND/goal';
import { take, first } from 'rxjs/operators';
import { GoalStoreService, GOAL_LANDING_STATUS, ROLE } from '@allianzSND/goal';

@Component({
  selector: 'snd-goal-landing',
  templateUrl: './goal-landing.component.html',
  styleUrls: ['./goal-landing.component.scss']
})
export class GoalLandingComponent implements OnInit {

  public info: LoginInfo;
  public language = new Language();


  get agentName() {
    if (this.info) {
      return this.info.AgentName;
    }
    else
      return '';
  }

  constructor(
    private router: AppRouter,
    private goalStoreService: GoalStoreService,
    private goalSettingService: GoalSettingService,
    private loginMgr: DefaultLoginMgr,
    private notificationMgr: NotificationMgr,
    private deviceService: DeviceService,
    private permissionService: CheckPermissionService
  ) {
    this.loginMgr.getLoginInfo().subscribe((info) => {
      this.info = info;
      console.log("Goal-landing info:", info);
    })
  }

  ngOnInit() {
    if (!this.hasGoalSetting() || !this.permissionService.checkPagePermission("Goal")) {
      this.routeTo("Dashboard");
    }
    else
      this.init().then(() => {
        if (!this.isFirstUse)
          this.dispatchAction();
      })
  }

  //Pupup control
  public isPopupGoalSettingReminder: boolean = false;
  public isPopupNoFunctionAvailableReminder: boolean = false;
  public PopupGoalSettingTitle = '';
  public isPopupCanSkip: boolean = true;

  //year
  private currentYear: number = null;
  private nextYear: number = null;

  // config Data
  private status: GOAL_LANDING_STATUS = GOAL_LANDING_STATUS.FIRST_INIT;
  private settedYear: number = null;
  private settingStatusList: Array<GoalSettingGoalStatus> = null;
  private isSubmitted: boolean = false;
  public isFirstUse: boolean = false;
  public remainingDays: number;



  public btnGo() {
    this.dispatchAction();
  }

  public onModalSkip() {
    this.routeTo("Dashboard");
  }

  public onModalConfirm() {
    this.router.navigate("GoalSetting");
  }

  private async init() {
    await this.fetchStatusAndYear();
    await this.fetchGoalConfig();
  }

  private async fetchStatusAndYear() {
    this.status = await this.goalStoreService.getGoalLandingStatus().pipe(take(1)).toPromise();
    this.settedYear = await this.goalStoreService.getSettingYear().pipe(take(1)).toPromise();
    this.isSubmitted = this.status === GOAL_LANDING_STATUS.SETTING_SUBMITTED;
  }

  private async fetchGoalConfig(): Promise<any> {
    let syncResp = await this.goalSettingService.syncYearConfig();
    let settingStatusList = await this.goalSettingService.getSettingStatus().toPromise();
    this.isFirstUse = await this.goalSettingService.getIsFirstUse().toPromise();
    this.settingStatusList = settingStatusList;
    let currentYearConfig = settingStatusList.filter(x => x.IsCurrent === 'Y');
    if (currentYearConfig.length > 0) {
      this.currentYear = currentYearConfig[0].DataYear;
      this.nextYear = this.currentYear + 1;
    }
    console.log("fetchGoalConfig:", this.settingStatusList);
    console.log("isFirstUse:", this.isFirstUse);
  }

  private getSettingStatus(year: number): GoalSettingGoalStatus {
    let filtered = this.settingStatusList.filter(x => x.DataYear === year);
    console.log("getSettingStatus:", year, filtered);
    return filtered.length > 0 ? filtered[0] : null;
  }


  private async dispatchAction() {
    console.log("dispatch action:", this.status, this.settedYear);
    let currentYearStatus = this.getSettingStatus(this.currentYear);
    let nextYearStatus = this.getSettingStatus(this.nextYear);
    let currentYearNeedSetting: boolean = false;
    let nextYearNeedSetting: boolean = false;
    // Online
    if (this.deviceService.getNetworkState()) {
      // Check current year
      currentYearNeedSetting = await this.isYearNeedSetting(currentYearStatus);
      if (nextYearStatus && !currentYearNeedSetting) {
        nextYearNeedSetting = await this.isYearNeedSetting(nextYearStatus);
      }
      if (!currentYearNeedSetting && !nextYearNeedSetting)
        this.onlineDispatch(currentYearStatus, nextYearStatus);


    }
    // Offline
    else {
      let currentYearStatus = this.getSettingStatus(this.currentYear);
      // 非初次設定
      if (currentYearStatus && !currentYearStatus.IsFirstTime) {
        this.routeTo("Dashboard");
      }
      // 初次設定
      else {
        this.showNoGoalSettingPopup(this.currentYear, true);
      }

    }
  }

  private async isYearNeedSetting(goalStatus: GoalSettingGoalStatus): Promise<boolean> {
    let previousYearStatus = this.getSettingStatus(goalStatus.DataYear - 1);
    let canSkip = goalStatus.IsCurrent === 'Y' ? (!goalStatus.IsFirstTime) : (!goalStatus.IsFirstTime || (previousYearStatus && !previousYearStatus.IsFirstTime));
    canSkip = canSkip && goalStatus.RemainingDays >= 0;
    let isNeedSetting: boolean = goalStatus.IsNeedSetting && goalStatus.ApproveStatus !== 'N';
    if (isNeedSetting) {
      let resp = await this.showSettingPopup(goalStatus.DataYear, goalStatus.RemainingDays, canSkip, !goalStatus.IsFirstTime);
      // Go to Goal Setting
      if (resp) {
        this.goalStoreService.setSettingYear(goalStatus.DataYear);
        this.goalStoreService.setIsPromo(!goalStatus.IsFirstTime);
        this.goalStoreService.setCanSkip(canSkip);
        this.goalStoreService.setGoalLandingStatus(GOAL_LANDING_STATUS.FIRST_INIT);
        this.router.navigate("GoalSetting");
      }
      return resp;
    }
    else
      return false;
  }

  private onlineDispatch(currentYearStatus: GoalSettingGoalStatus, nextYearStatus: GoalSettingGoalStatus) {
    let periodCannotSetting: boolean =
      (!currentYearStatus || currentYearStatus.ApproveStatus === 'N') && (!nextYearStatus || nextYearStatus.ApproveStatus === 'N');
    if (periodCannotSetting) {
      this.showNoGoalSettingPopup(currentYearStatus.DataYear, this.isFirstUse);
    }
    else if (this.isSubmitted) {
      this.routeTo("Goal");
    }
    else {
      this.routeTo("Dashboard");
    }
  }


  private async showSettingPopup(year: number, remainingDays: number, canSkip: boolean, isPromo = false) {
    let type: NotificationType;
    if (isPromo)
      type = NotificationType.GoalPromoSetting;
    else
      type = NotificationType.NeedGoalSetting;
    let data = {
      canSkip: canSkip,
      days: remainingDays,
      year: year,
      isPromo: isPromo,
      isNextYear: year !== this.currentYear
    };
    this.notificationMgr.pushNotification(type, data);
    let resp = await this.goalStoreService.getPopupResp().pipe(
      first(x => (x.type === NotificationType.GoalPromoSetting) || (x.type === NotificationType.NeedGoalSetting))
    ).toPromise();
    return resp.response;
  }



  private showNoGoalSettingPopup(year: number, first: boolean = false) {
    if (first)
      this.notificationMgr.pushNotification(NotificationType.GoalSettingNotStartFirst, { year: year });
    else {
      let config = JSON.parse(this.deviceService.getLocalStorage("GoalNotStartPopupConfig"));
      if (config && config[year])
        this.routeTo("Dashboard");
      else
        this.notificationMgr.pushNotification(NotificationType.GoalSettingNotStart, { year: year, notShow: false });
    }
  }

  private routeTo(path: string) {
    this.showMessage();
    this.router.navigate(path);
  }

  private showMessage() {
    this.notificationMgr.showCategoryMessage("GoalSetting");
    this.notificationMgr.showCategoryMessage("Progress");
  }

  private hasGoalSetting(): boolean {
    let needGoalSettingRole = [ROLE.AGENT, ROLE.AGENTLEADER];
    return this.info.AppUseMode.map(x => needGoalSettingRole.includes(x)).reduce((prev, cur) => prev || cur, false);
  }
}




