import { Component, OnInit, Input, OnDestroy, ErrorHandler } from '@angular/core';

import { GoalSettingService } from '@allianzSND/goal';
import { ProfileCode, ProfileCodeService, TranslateService, Language, APPError, PERFORMANCETYPE } from '@allianzSND/core';
import { Subscription } from 'rxjs';
import { GoalStoreService, GOAL_LANDING_STATUS, SYNC_STATUS, GoalSettingStepData } from '@allianzSND/goal';


@Component({
  selector: 'snd-goal-setting-overview-year-tab',
  templateUrl: './goal-setting-overview-year-tab.component.html',
  styleUrls: ['./goal-setting-overview-year-tab.component.scss']
})
export class AgentGoalSettingOverviewYearTabComponent implements OnInit, OnDestroy {


  public yearConfigList: any = [];

  public thisYear: number = -1;
  public otherYear: number = -1;
  private _currentYear: number = -1;

  public allStepDataMap: Map<number, {}> = new Map();
  public isShowOtherYearTab: boolean;
  public tabTitle: Array<string> = [];
  public ThisYearTabTitle: string;
  //public NextYearTabIndex: number = 0;
  public isLoadDataFinish: boolean = false;
  public isPersonalTabActive: boolean = false;

  public tabIndex: number = 0; // init tab 
  public personalAllStepData: GoalSettingStepData = null;
  public teamAllStepData: any = null;

  // public personalAllStepData: any = null;
  // public teamAllStepData: any = null;



  //public dataMap: Map<string, {}> = new Map();
  public dataMap: Map<string, GoalSettingStepData> = new Map();


  private _annualConventionSelectOptionList: Array<ProfileCode> = [];
  private _MDRTSelectOptionList: Array<ProfileCode> = [];
  private _promotionPlanSelectOptionList: Array<ProfileCode> = [];


  public isRefreshFinishContent: boolean = true;
  public language = new Language();
  private _getGoalLandingStatusSubscription: Subscription = null;
  private _performanceType: PERFORMANCETYPE;


  public tabSwitchYear: Array<number> = [];


  @Input()
  set performanceType(performanceType: PERFORMANCETYPE) {

    this._performanceType = performanceType;
    this.isPersonalTabActive = performanceType == PERFORMANCETYPE.PERSONAL;

    this._initGoalSettingOverview(performanceType);
  }


  constructor(
    private goalSettingService: GoalSettingService,
    private profileCodeService: ProfileCodeService,
    private translateService: TranslateService,
    private goalStore: GoalStoreService,
    private errorHandler: ErrorHandler
  ) {
    this._annualConventionSelectOptionList = this.profileCodeService.getCodeArray('GoalSetting_AnnualConvention');
    this._MDRTSelectOptionList = this.profileCodeService.getCodeArray('GoalSetting_MDRT');
    this._promotionPlanSelectOptionList = this.profileCodeService.getCodeArray('Promotion_Plan');
  }


  ngOnInit() {


    this._getGoalLandingStatusSubscription = this.goalStore.getGoalLandingStatus().subscribe(status => {
      if (status == GOAL_LANDING_STATUS.SETTING_SUBMITTED) {
        console.warn('GOAL_LANDING_STATUS.SETTING_SUBMITTED');
        this.goalSettingService.syncGoalDatas();
      }
    });
  }

  ngOnDestroy() {
    this._getGoalLandingStatusSubscription.unsubscribe();
  }

  private async _refreshSqlite() {
    this.yearConfigList = [];
    this.dataMap = new Map();
    this._currentYear == -1;
    await this._initGoalSettingOverview(this._performanceType);
  }

  private async _initGoalSettingOverview(performanceType: PERFORMANCETYPE) {

    console.warn("_initGoalSettingOverview");

    if (this.yearConfigList.length == 0) {

      this.tabTitle = [];
      this.tabSwitchYear = [];
      console.warn("call goalSettingService.getSettingStatus");
      this.yearConfigList = await this.goalSettingService.getSettingStatus().toPromise();
      console.warn("yearConfigList data: ", this.yearConfigList);

      this.isShowOtherYearTab = this.yearConfigList.length > 1;

      this.yearConfigList.forEach(config => {
        let year = config.DataYear;
        if (config.IsCurrent === 'Y') {
          this.thisYear = year;
        }
        else this.otherYear = year

        this.tabTitle.push(this._translateWithVariable('Variable_Year_Title', year));
        this.tabSwitchYear.push(year);
      });
    }

    if (this._currentYear === -1 || this.tabSwitchYear.indexOf(this._currentYear) === -1) {
      this._currentYear = this.thisYear;
    }



    this.tabIndex = this.tabSwitchYear.indexOf(this._currentYear);
    await this._initOverviewData(this._currentYear, performanceType);

  }

  private _translateWithVariable(mappingID: string, dataYear: number) {
    return this.translateService.translateWithVariable(mappingID, {
      "dataYear": dataYear
    });
  }


  onTabChildClick(event) {
    this.tabIndex = Number(event);
    //this.NextYearTabIndex = +event;

    this._currentYear = this.tabSwitchYear[Number(event)];

    this._initOverviewData(this._currentYear, this._performanceType);
    // console.warn(event);
  }


  private async _initOverviewData(year: number, performanceType: PERFORMANCETYPE) {

    this.isLoadDataFinish = false;
    let result = this.dataMap.get(year.toString() + performanceType);
    console.warn("result: ", result);

    if (!result) {

      try {
        let resp: GoalSettingStepData = await this.goalSettingService.getOverviewData(performanceType, year).toPromise();
        if (resp == null) {
          throw new Error('getOverviewData from sqlite fail');
        }
        console.warn("service resp :", resp);


        this.dataMap.set((year.toString() + performanceType), resp);

      } catch (error) {
        this.errorHandler.handleError(new APPError('F00502', error.message + '(overview-year-tab)'));
      }
    }



    if (performanceType == PERFORMANCETYPE.PERSONAL) {
      this.personalAllStepData = this.dataMap.get((year.toString() + performanceType));
    }

    else if (performanceType == PERFORMANCETYPE.TEAM) {
      this.teamAllStepData = this.dataMap.get((year.toString() + performanceType));
    }


    this.isLoadDataFinish = true;
  }

  public async onRefreshOverviewData() {
    console.log("refresh overview year tab");
    await this._refreshSqlite();
    this.isRefreshFinishContent = true;
  }




}
