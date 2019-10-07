import { Component, OnInit, ViewChild, HostListener, ErrorHandler } from '@angular/core';
import { DefaultLoginMgr, Language, APPError, DataSyncService, PERFORMANCETYPE } from '@allianzSND/core';
import { UiMainCollapseComponent, UiInfiniteScrollComponent, UiInformationBtnComponent, CONTENTGAP } from '@allianzSND/ui';
import { GoalSettingService } from "@allianzSND/goal";
import { ProgressService } from '@allianzSND/progress';
import { PersonalDataType, PersonalDataTimeBase, PerformanceType, ProgressDataTeamValueType, Tag } from '@allianzSND/progress';
import { PersonalDataState, TeamDataState } from '@allianzSND/progress';
import { ProgressYearConfig, ProgressYearObj, PersonalObj, TeamObj } from '@allianzSND/progress';
import { ProgressPersonalData, ProgressTeamData, ProgressDirectIndirectData } from '@allianzSND/progress';
import { ProgressContentClass } from '@allianzSND/progress';
import { ROLE, MonthlyPlanFYFCData, GoalSettingStep4 } from '@allianzSND/goal';
import { take } from 'rxjs/operators';

@Component({
  selector: 'snd-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})

export class ProgressComponent implements OnInit {

  //#region  UI

  @ViewChild('mainCollapse') mainCollapse: UiMainCollapseComponent;
  @ViewChild('personalInfinitiScroll') personalInfinitiScroll: UiInfiniteScrollComponent;
  @ViewChild('teamInfinitiScroll') teamInfinitiScroll: UiInfiniteScrollComponent;

  public WindowWidth = window.innerWidth;
  isHideCollapseBlock: boolean = false;

  //control tab space
  GAP_SIZE_40 = CONTENTGAP.GAP40;

  
  // info click and show popup
  public isPopupOpenProgressBarListInfo = false; // info popup for personal progressbar list
  public isPopupOpenTableCardInfo = false;
  public isPopupOpenInderectInfo = false;
  public isPopupOpenDerectInfo = false;
  public isPopupOpenHeadTablerInfo = false;
  
  clickInfoPersonal(){
    this.isPopupOpenProgressBarListInfo = true;
  }
  clickInfoHead(){
    this.isPopupOpenHeadTablerInfo = true;
  }
  clickInfoTableCard(){
    this.isPopupOpenTableCardInfo = true;
  }
  clickInfoIndirect(){
    this.isPopupOpenInderectInfo = true;
  }
  clickInfoDirect(){
    this.isPopupOpenDerectInfo = true;
  }

  //#endregion UI

  


  // role : head, leader  headPage leaderPage
  public RolesOfPage: string = 'leaderPage';//leader
  public IsAgent: boolean = true;
  private _agentRole: ROLE;


  // here is data center store service data
  private PersonalDataYesterdayPointsList: Array<number> = new Array<number>();
  private ProgressDataList: Array<ProgressYearObj> = new Array<ProgressYearObj>();
  private PersonalDataList: Array<PersonalObj> = new Array<PersonalObj>();
  private TeamDataList: Array<TeamObj> = new Array<TeamObj>();


  //year configuration
  public ProgressYearConfigList: Array<ProgressYearConfig>;
  private _yearList: Array<number> = new Array<number>();
  private _defaultYear: number = 0;
  private _monthCount: number = 0;
  private _currentWorkingMonth: number = 0;
  private _currentWorkingMonthMap: Map<number, number>;


  //personal list 
  public PersonalData: ProgressPersonalData;
  public PersonalDataYesterdayPoints: number = 0;


  //personal activity and (main bar) 
  public PersonalActivitiesData: ProgressPersonalData;
  public PersonalActivitiesGoalPlanData: ProgressPersonalData;


  //monthly plan
  public MonthlyPlanFYFCData: GoalSettingStep4;

  //team 
  public TeamMainDataList: Array<ProgressTeamData> = new Array<ProgressTeamData>();
  public TeamDirectDataList: Array<ProgressDirectIndirectData> = new Array<ProgressDirectIndirectData>();
  public TeamIndirectDataList: Array<ProgressDirectIndirectData> = new Array<ProgressDirectIndirectData>();


  //translate object
  //public ContentObj: ProgressContentClass;
  public Language: Language;

  public IsHeadRefreshFinished: boolean = true;
  public IsPersonalRefreshFinished: boolean = true;
  public IsTeamRefreshFinished: boolean = true;

  //show team or personal index false => index 0
  public IsShowTabTeam: boolean = false;
  private _currentPersonalState: PersonalDataState;
  private _currentActivityState: PersonalDataState;
  private _currentTeamState: TeamDataState;
  private _currentHeadState: TeamDataState;

  constructor(
    private progressService: ProgressService,
    private goalService: GoalSettingService,
    private syncService: DataSyncService,
    private loginMgr: DefaultLoginMgr,
    private errorHandler: ErrorHandler
  ) {

    //this.ContentObj = new ProgressContentClass(this.translateService);
    //get login information and translate object :P

    this.Language = new Language();

    //set default state data
    this._InitState();

    //first you need to check identity :P
    this._CheckIdentityAndLoadData();

    //first you need to check identity :P
    //this._CheckIdentityThenLoadData();

    //here is start point :)
    //this._InitLeaderData();

    //check navigation route 
    this._CheckNavigation();
  }

  ngOnInit() {
    this.WindowWidth = window.innerWidth;
  }


  //#region  UI function

  @HostListener('window: resize', ['$event'])
  onresize(event) {
    this.WindowWidth = event.target.innerWidth;
  }

  //#endregion

  //#region progress loader funcion

  private _InitState() {
    //set default state data
    this._currentPersonalState = new PersonalDataState();
    this._currentPersonalState.TimeBase = PersonalDataTimeBase.Day;
    this._currentPersonalState.DataType = PersonalDataType.Unknow;
    this._currentPersonalState.DataYear = 0;

    this._currentActivityState = new PersonalDataState();
    this._currentActivityState.TimeBase = PersonalDataTimeBase.Month;
    this._currentActivityState.DataType = PersonalDataType.Unknow
    this._currentActivityState.DataYear = 0;

    this._currentTeamState = new TeamDataState();
    this._currentTeamState.TimeBase = PersonalDataTimeBase.Month;
    this._currentTeamState.TeamValueType = ProgressDataTeamValueType.FYFC;
    this._currentTeamState.DataYear = 0;

    this._currentHeadState = new TeamDataState();
    this._currentHeadState.TimeBase = PersonalDataTimeBase.Month;
    this._currentHeadState.TeamValueType = ProgressDataTeamValueType.FYFC;
    this._currentHeadState.DataYear = 0;
  }

  // Init load progress data (header)
  private async _InitHeaderData() {
    //init year config
    await this._LoadYearConfig();

    //personal
    await this._LoadProgress(this._yearList);

    //team
    this._ShowTeamMainData(this._defaultYear, PersonalDataTimeBase.Month);
    this._ShowTeamIndirectData(this._defaultYear, PersonalDataTimeBase.Month, ProgressDataTeamValueType.FYFC);
  }

  // Init load progress data (leader)
  private async _InitLeaderData() {
    //init year config
    await this._LoadYearConfig();

    //personal
    await this._LoadProgress(this._yearList);
    this._ShowPersonalDataDayWeek(this._defaultYear, PersonalDataTimeBase.Day);
    this._ShowYesterdayaPoints(this._defaultYear);

    //personal activities main bar actual goal/plan 
    this._ShowPersonalActivitiesData(this._defaultYear, PersonalDataTimeBase.Month, PersonalDataType.Actual);
    this._ShowPersonalActivitiesGoalPlanData(this._defaultYear, PersonalDataTimeBase.Month, PersonalDataType.Goal);

    //monthly
    this._currentWorkingMonth = this._currentWorkingMonthMap.get(this._defaultYear);
    await this._LoadMonthlyActualPlan(PERFORMANCETYPE.PERSONAL, this._defaultYear, this._monthCount, this._currentWorkingMonth);

    //team
    this._ShowTeamMainData(this._defaultYear, PersonalDataTimeBase.Month);
    this._ShowTeamDirectData(this._defaultYear, PersonalDataTimeBase.Month, ProgressDataTeamValueType.FYFC);
    this._ShowTeamIndirectData(this._defaultYear, PersonalDataTimeBase.Month, ProgressDataTeamValueType.FYFC);
  }


  private async _LoadYearConfig() {
    try {
      let data = await this.progressService.GetYearConfigDataBySQLite().toPromise();
      let configs = data["Configurations"];

      console.debug("loadYearConfig data: ", data);
      console.debug("loadYearConfig configs: ", configs);

      this.ProgressYearConfigList = new Array<ProgressYearConfig>();
      this._yearList = new Array<number>();
      this._currentWorkingMonthMap = new Map<number, number>();

      for (let i = 0; i < configs.length; i++) {
        if (configs[i].IsCurrent) {
          this._defaultYear = configs[i].DataYear;
          this._monthCount = configs[i].MonthQuantityOfYear;
        }

        let yearConfig: ProgressYearConfig = new ProgressYearConfig();
        let tmp = configs[i];
        yearConfig.DataYear = tmp.DataYear;
        yearConfig.IsCurrent = tmp.IsCurrent;
        yearConfig.WorkingMonth = tmp.WorkingMonth;
        yearConfig.QuarterStartMonth = tmp.QuarterStartMonth;
        yearConfig.QuarterEndMonth = tmp.QuarterEndMonth;
        yearConfig.ProgressDayPointsLimit = tmp.ProgressDayPointsLimit;
        yearConfig.ProgressBarControlMode = tmp.ProgressBarControlMode;
        yearConfig.MonthQuantityOfYear = tmp.MonthQuantityOfYear;

        yearConfig.FindConvertPointBase = tmp.FindConvertPointBase;
        yearConfig.ScheduleConvertPointBase = tmp.ScheduleConvertPointBase;
        yearConfig.MeetConvertPointBase = tmp.MeetConvertPointBase;
        yearConfig.SubmitConvertPointBase = tmp.SubmitConvertPointBase;
        yearConfig.InforceConvertPointBase = tmp.InforceConvertPointBase;

        this.ProgressYearConfigList.push(yearConfig);
        this._yearList.push(tmp.DataYear);
        this._currentWorkingMonthMap.set(tmp.DataYear, tmp.WorkingMonth);
      }
      console.debug("loadYearConfig ProgressYearConfigList: ", this.ProgressYearConfigList);
      console.debug("loadYearConfig  yearList: ", this._yearList);
    }
    catch (error) {
      this.errorHandler.handleError(new APPError('F00200', 'loadYearConfig fail!' + error.message));
    }
  }


  private async _LoadProgress(years: Array<number>) {
    console.debug("loadProgress years: ", years);
    try {
      let data = await this.progressService.GetProgressDataBySQLite(years).toPromise();
      this.ProgressDataList = new Array<ProgressYearObj>();
      this.PersonalDataList = new Array<PersonalObj>();
      this.TeamDataList = new Array<TeamObj>();
      this.PersonalDataYesterdayPointsList = new Array<number>();

      this.ProgressDataList = data["Progress"];

      console.debug("loadProgress data: ", data);
      console.debug("loadProgress ProgressDataList: ", this.ProgressDataList);

      for (let i = 0; i < this.ProgressDataList.length; i++) {
        let dataPersonal: PersonalObj = new PersonalObj();
        let dataTeam: TeamObj = new TeamObj();
        let points: number = 0;

        dataPersonal = this.ProgressDataList[i].Personal;
        dataTeam = this.ProgressDataList[i].Team;
        points = this.ProgressDataList[i].YesterdayPoint;

        this.PersonalDataList.push(dataPersonal);
        this.TeamDataList.push(dataTeam);
        this.PersonalDataYesterdayPointsList.push(points);
      }
      console.debug("loadProgress PersonalDataList: ", this.PersonalDataList);
      console.debug("loadProgress TeamDataList: ", this.TeamDataList);
      console.debug("loadProgress PersonalDataYesterdayPointsList: ", this.PersonalDataYesterdayPointsList);
    }
    catch (error) {
      this.errorHandler.handleError(new APPError('F00201', 'loadProgress fail!' + error.message));
    }
  }


  //getMonthActualPlan no yaml get raw data
  private async _LoadMonthlyActualPlan(type: PERFORMANCETYPE, year: number, monthCount: number, WorkingMonth: number, AgentID: string = "") {

    console.debug("_LoadMonthlyActualPlan type: ", type);
    console.debug("_LoadMonthlyActualPlan year: ", year);
    console.debug("_LoadMonthlyActualPlan monthCount: ", monthCount);
    console.debug("_LoadMonthlyActualPlan PerformanceSettlementMonth: ", WorkingMonth);

    try {

      if (year <= 0) { year = this._defaultYear; }

      let data = await this.goalService.getMonthActualPlan(type, year, monthCount, WorkingMonth).toPromise();
      console.debug("_LoadMonthlyActualPlan datas: ", data);

      this.MonthlyPlanFYFCData = data.clone();

      console.debug("_LoadMonthlyActualPlan MonthlyPlanFYFCData: ", this.MonthlyPlanFYFCData);
    }
    catch (error) {
      this.errorHandler.handleError(new APPError('F00202', 'loadProgressMonthAcualPlan fail!' + error.message));
    }
  }


  private _ShowPersonalDataDayWeek(year: number, time: PersonalDataTimeBase) {

    console.debug("showPersonalDataDayWeek year: ", year);
    console.debug("showPersonalDataDayWeek time: ", time);

    if (year <= 0) { year = this._defaultYear; }

    let yearData = this.ProgressDataList.filter(x => x.DataYear == year);
    let data = yearData[0].Personal.Values.filter(x => x.TimeBase == time)[0];

    console.debug("showPersonalDataDayWeek res: ", yearData);
    console.debug("showPersonalDataDayWeek data: ", data);

    this.PersonalData = new ProgressPersonalData();
    this.PersonalData.DataType = data.DataType;
    this.PersonalData.TimeBase = data.TimeBase;
    this.PersonalData.Find = data.Find;
    this.PersonalData.Schedule = data.Schedule;
    this.PersonalData.Meet = data.Meet;
    this.PersonalData.Submit = data.Submit;
    this.PersonalData.Inforce = data.Inforce;
    this.PersonalData.FYFC = data.FYFC;

    let cf = this.ProgressYearConfigList;
    for (let i = 0; i < cf.length; i++) {
      if (cf[i].IsCurrent) {
        this.PersonalData.FindConvertPointBase = cf[i].FindConvertPointBase;
        this.PersonalData.ScheduleConvertPointBase = cf[i].ScheduleConvertPointBase;
        this.PersonalData.MeetConvertPointBase = cf[i].MeetConvertPointBase;
        this.PersonalData.SubmitConvertPointBase = cf[i].SubmitConvertPointBase;
        this.PersonalData.InforceConvertPointBase = cf[i].InforceConvertPointBase;
      }
    }
    console.debug("showPersonalDataDayWeek PersonalData: ", this.PersonalData);
  }


  private _ShowYesterdayaPoints(year: number) {
    console.debug("showYesterdayaPoints year: ", year);

    if (year <= 0) { year = this._defaultYear; }

    for (let i = 0; i < this._yearList.length; i++) {
      if (year == this._yearList[i])
        this.PersonalDataYesterdayPoints = this.PersonalDataYesterdayPointsList[i];
    }
    console.debug("showYesterdayaPoints PersonalDataYesterdayPoints: ", this.PersonalDataYesterdayPoints);
  }


  private _ShowPersonalActivitiesData(year: number, time: PersonalDataTimeBase, type: PersonalDataType) {

    console.debug("showPersonalActivitiesData year: ", year);
    console.debug("showPersonalActivitiesData time: ", time);
    console.debug("showPersonalActivitiesData type: ", type);

    if (year <= 0) { year = this._defaultYear; }

    let yearData = this.ProgressDataList.filter(x => x.DataYear == year);
    let data = yearData[0].Personal.Values.filter(x => x.TimeBase == time && x.DataType == type)[0];

    console.debug("showPersonalActivitiesData yearData: ", yearData);
    console.debug("showPersonalActivitiesData data: ", data);

    this.PersonalActivitiesData = new ProgressPersonalData();
    this.PersonalActivitiesData.DataType = data.DataType;
    this.PersonalActivitiesData.TimeBase = data.TimeBase;
    this.PersonalActivitiesData.Find = data.Find;
    this.PersonalActivitiesData.Schedule = data.Schedule;
    this.PersonalActivitiesData.Meet = data.Meet;
    this.PersonalActivitiesData.Submit = data.Submit;
    this.PersonalActivitiesData.Inforce = data.Inforce;
    this.PersonalActivitiesData.FYFC = data.FYFC;

    console.debug("showPersonalActivitiesData PersonalActivitiesData: ", this.PersonalActivitiesData);
  }


  private _ShowPersonalActivitiesGoalPlanData(year: number, time: PersonalDataTimeBase, type: PersonalDataType) {

    console.debug("showPersonalActivitiesGoalPlanData year: ", year);
    console.debug("showPersonalActivitiesGoalPlanData time: ", time);
    console.debug("showPersonalActivitiesGoalPlanData type: ", type);

    if (year <= 0) { year = this._defaultYear; }

    let yearData = this.ProgressDataList.filter(x => x.DataYear == year);
    let data = yearData[0].Personal.Values.filter(x => x.TimeBase == time && x.DataType == type)[0];

    console.debug("showPersonalActivitiesGoalPlanData yearData: ", yearData);
    console.debug("showPersonalActivitiesGoalPlanData data: ", data);

    this.PersonalActivitiesGoalPlanData = new ProgressPersonalData();
    this.PersonalActivitiesGoalPlanData.DataType = data.DataType;
    this.PersonalActivitiesGoalPlanData.TimeBase = data.TimeBase;
    this.PersonalActivitiesGoalPlanData.Find = data.Find;
    this.PersonalActivitiesGoalPlanData.Schedule = data.Schedule;
    this.PersonalActivitiesGoalPlanData.Meet = data.Meet;
    this.PersonalActivitiesGoalPlanData.Submit = data.Submit;
    this.PersonalActivitiesGoalPlanData.Inforce = data.Inforce;
    this.PersonalActivitiesGoalPlanData.FYFC = data.FYFC;

    console.debug("showPersonalActivitiesGoalPlanData PersonalActivitiesGoalPlanData: ", this.PersonalActivitiesGoalPlanData);
  }


  private _ShowTeamMainData(year: number, time: PersonalDataTimeBase) {

    console.debug("showTeamMainData year: ", year);
    console.debug("showTeamMainData time: ", time);

    if (year <= 0) { year = this._defaultYear; }

    this.TeamMainDataList = new Array<ProgressTeamData>();

    for (let i = 0; i < this._yearList.length; i++) {
      if (year == this._yearList[i]) {
        let data = this.TeamDataList[i].Values.filter(x => x.TimeBase == time);
        this.TeamMainDataList = data;
      }
    }
    console.debug("showTeamMainData TeamMainDataList: ", this.TeamMainDataList);
  }


  private _ShowTeamDirectData(year: number, time: PersonalDataTimeBase, teamType: ProgressDataTeamValueType) {

    console.debug("showTeamDirectData year: ", year);
    console.debug("showTeamDirectData time: ", time);
    console.debug("showTeamDirectData teamType: ", teamType);

    if (year <= 0) { year = this._defaultYear; }

    this.TeamDirectDataList = new Array<ProgressDirectIndirectData>();

    for (let i = 0; i < this._yearList.length; i++) {
      if (year == this._yearList[i]) {
        let data = this.TeamDataList[i].DirectUnit.filter(x => x.TimeBase == time && x.DataType == teamType);
        this.TeamDirectDataList = data;
      }
    }
    console.debug("showTeamDirectData TeamDirectDataList: ", this.TeamDirectDataList);
  }


  private _ShowTeamIndirectData(year: number, time: PersonalDataTimeBase, teamType: ProgressDataTeamValueType) {

    console.debug("showTeamIndirectData year: ", year);
    console.debug("showTeamIndirectData time: ", time);
    console.debug("showTeamIndirectData teamType: ", teamType);

    if (year <= 0) { year = this._defaultYear; }

    this.TeamIndirectDataList = new Array<ProgressDirectIndirectData>();

    for (let i = 0; i < this._yearList.length; i++) {
      if (year == this._yearList[i]) {
        let data = this.TeamDataList[i].InDirectUnit.filter(x => x.TimeBase == time && x.DataType == teamType);
        this.TeamIndirectDataList = data;
      }
    }
    console.debug("showTeamIndirectData TeamIndirectDataList: ", this.TeamIndirectDataList);
  }

  //#endregion progress load function

  //#region state event 

  public OnPersonalDataStateEvent(state: PersonalDataState) {
    if (state) {
      this._currentPersonalState.DataType = state.DataType;
      this._currentPersonalState.DataYear = state.DataYear;
      this._currentPersonalState.TimeBase = state.TimeBase;

      if (this._currentPersonalState.DataYear <= 0) {
        this._currentPersonalState.DataYear = this._defaultYear;
      }

      console.debug("personal state event: ", this._currentPersonalState);
      let currentState = this._currentPersonalState;

      if (currentState.TimeBase !== PersonalDataTimeBase.Unknow && currentState.DataType !== PersonalDataType.Unknow) {
        this._ShowPersonalDataDayWeek(currentState.DataYear, currentState.TimeBase);
        this._ShowYesterdayaPoints(currentState.DataYear);
      }
    }
    else {
      console.debug("we dont have this type here sorry for that maybe you need to add some :P");
    }
  }


  public OnPersonalDataStateActivitiesEvent(state: PersonalDataState) {
    if (state) {
      this._currentActivityState.DataType = state.DataType;
      this._currentActivityState.DataYear = state.DataYear;
      this._currentActivityState.TimeBase = state.TimeBase;

      if (this._currentActivityState.DataYear <= 0) {
        this._currentActivityState.DataYear = this._defaultYear;
      }

      console.debug("personal activity state event: ", this._currentActivityState);
      let currentState = this._currentActivityState;

      if (currentState.TimeBase !== PersonalDataTimeBase.Unknow && currentState.DataType !== PersonalDataType.Unknow) {

        //show personal activities main bar
        this._ShowPersonalActivitiesData(currentState.DataYear, currentState.TimeBase, PersonalDataType.Actual);
        this._ShowPersonalActivitiesGoalPlanData(currentState.DataYear, currentState.TimeBase, PersonalDataType.Goal);

        //show personal monthly

        this._currentWorkingMonth = this._currentWorkingMonthMap.get(currentState.DataYear);
        this._LoadMonthlyActualPlan(PERFORMANCETYPE.PERSONAL, currentState.DataYear, this._monthCount, this._currentWorkingMonth);
      }
      else {
        console.debug("we dont have this type here sorry for that maybe you need to add some :P");
      }
    }
  }


  public OnTeamDataStateEvent(state: TeamDataState) {
    if (state) {
      this._currentTeamState.DataYear = state.DataYear;
      this._currentTeamState.TeamValueType = state.TeamValueType;
      this._currentTeamState.TimeBase = state.TimeBase;

      if (this._currentTeamState.DataYear <= 0) {
        this._currentTeamState.DataYear = this._defaultYear;
      }

      console.debug("team state event: ", this._currentTeamState);
      let currentState = this._currentTeamState;

      //team card value (top)
      this._ShowTeamMainData(currentState.DataYear, currentState.TimeBase);

      //direct and indirect
      this._ShowTeamDirectData(currentState.DataYear, currentState.TimeBase, currentState.TeamValueType);
      this._ShowTeamIndirectData(currentState.DataYear, currentState.TimeBase, currentState.TeamValueType);
    }
    else {
      console.debug("we dont have this type here sorry for that maybe you need to add some :P");
    }
  }


  public OnZoneHeadStateEvent(state: TeamDataState) {
    if (state) {
      this._currentHeadState.DataYear = state.DataYear;
      this._currentHeadState.TeamValueType = state.TeamValueType;
      this._currentHeadState.TimeBase = state.TimeBase;

      if (this._currentHeadState.DataYear <= 0) {
        this._currentHeadState.DataYear = this._defaultYear;
      }

      console.debug("zone head state event: ", this._currentHeadState);
      let currentState = this._currentHeadState;

      //zone head value by year and time base
      this._ShowTeamMainData(currentState.DataYear, currentState.TimeBase);

      //indirect for zone head ...
      this._ShowTeamIndirectData(currentState.DataYear, currentState.TimeBase, currentState.TeamValueType);
    }
    else {
      console.debug("we dont have this type here sorry for that maybe you need to add some :P");
    }
  }

  //#endregion state event 

  //#region reflash content 

  public async RefreshHeadContent(event: any) {
    console.debug("async RefreshHeadContent.....: ", event);
    await this._HeadDataSync();
    await this._LoadHeadRefreshData();
    this.IsHeadRefreshFinished = true;
  }


  public async RefreshPersonalContent(event: any) {
    console.debug("async RefreshPersonalContent.....: ", event);
    await this._PersonalDataSync();
    await this._LoadPersonalRefreshData();
    this.IsPersonalRefreshFinished = true;
  }


  public async RefreshTeamContent(event: any) {
    console.debug("async RefreshTeamContent.....: ", event);
    // await this._TeamDataSync();
    await this._LoadTeamRefreshData();
    this.IsTeamRefreshFinished = true;
  }


  private async _HeadDataSync() {
    // await this.syncService.syncFunc(["PROGRESS"]);
  }


  private async _PersonalDataSync() {
    // await this.syncService.syncFunc(["PROGRESS"]);
  }


  private async _TeamDataSync() {
    // await this.syncService.syncFunc(["PROGRESS"]);
  }


  private async _LoadHeadRefreshData() {
    //year config
    await this._LoadYearConfig();

    if (this._currentHeadState.DataYear <= 0) {
      this._currentHeadState.DataYear = this._defaultYear;
    }

    console.debug("refresh head: ", this._currentHeadState);

    let hState = this._currentHeadState;

    //personal
    await this._LoadProgress(this._yearList);

    //team
    this._ShowTeamMainData(hState.DataYear, hState.TimeBase);
    this._ShowTeamIndirectData(hState.DataYear, hState.TimeBase, hState.TeamValueType);
  }


  private async _LoadPersonalRefreshData() {
    //year config
    await this._LoadYearConfig();

    if (this._currentActivityState.DataYear <= 0) {
      this._currentActivityState.DataYear = this._defaultYear;
    }

    if (this._currentPersonalState.DataYear <= 0) {
      this._currentPersonalState.DataYear = this._defaultYear;
    }

    console.debug("refresh personal: ", this._currentPersonalState);
    console.debug("refresh personal activity: ", this._currentActivityState);

    let pState = this._currentPersonalState;
    let activityState = this._currentActivityState;



    //personal
    await this._LoadProgress(this._yearList);
    this._ShowPersonalDataDayWeek(pState.DataYear, pState.TimeBase);
    this._ShowYesterdayaPoints(pState.DataYear);

    // //personal activities main bar actual goal/plan 
    this._ShowPersonalActivitiesData(activityState.DataYear, activityState.TimeBase, PersonalDataType.Actual);
    this._ShowPersonalActivitiesGoalPlanData(activityState.DataYear, activityState.TimeBase, PersonalDataType.Goal);

    //monthly
    this._currentWorkingMonth = this._currentWorkingMonthMap.get(activityState.DataYear);
    await this._LoadMonthlyActualPlan(PERFORMANCETYPE.PERSONAL, activityState.DataYear, this._monthCount, this._currentWorkingMonth);
  }


  private async _LoadTeamRefreshData() {
    //year config
    await this._LoadYearConfig();

    if (this._currentTeamState.DataYear <= 0) {
      this._currentTeamState.DataYear = this._defaultYear;
    }

    console.debug("refresh team: ", this._currentTeamState);

    let tState = this._currentTeamState;

    //personal
    await this._LoadProgress(this._yearList);

    //team
    this._ShowTeamMainData(tState.DataYear, tState.TimeBase);
    this._ShowTeamDirectData(tState.DataYear, tState.TimeBase, tState.TeamValueType);
    this._ShowTeamIndirectData(tState.DataYear, tState.TimeBase, tState.TeamValueType);
  }

  //#endregion

  //#region progress function

  private _CheckNavigation() {
    let tag = this.progressService.GetCurrentNavigationTag();

    switch (tag) {
      case Tag.PersonalTag: this.IsShowTabTeam = false; break;
      case Tag.TeamTag: this.IsShowTabTeam = true; break;
      case Tag.UnknowTag: this.IsShowTabTeam = false; break;
    }

    console.debug("current tag is : ", tag);

    //turn to default tag (personal tag)
    this.progressService.SetCurrentNavigationTag(Tag.PersonalTag);
  }

  private async _CheckIdentityAndLoadData() {

    try {
      let loginInfo = await this.loginMgr.getLoginInfo().pipe(take(1)).toPromise();
      console.debug("test login info: ", loginInfo);

      let identity = loginInfo.AppUseMode[loginInfo.AppUseMode.length - 1];
      this._agentRole = this._ConvertIdentityToRolesType(identity);

      //test progress current role
      this.progressService.SetCurrentRole(this._agentRole);
      
      this.RolesOfPage = this._SwitchRolesToPage(this._agentRole);
      this._ShowPersonalOrTeam(this._agentRole);

      console.debug("test AgentRole: ", this._agentRole);
      console.debug("test roles RolesOfPage: ", this.RolesOfPage);


      switch (this._agentRole) {
        case ROLE.AGENT:
        case ROLE.AGENTLEADER:
          console.debug("load leader");
          this._InitLeaderData();
          break;
        case ROLE.ZONEHEAD:
        case ROLE.CAO:
          console.debug("load header");
          this._InitHeaderData();
          break;
      }
    }
    catch (error) {
      this.errorHandler.handleError(new APPError('F00203', 'check Identity fail!' + error.message));
    }
  }

  // private _CheckIdentityThenLoadData() {
  //   try {
  //     this.loginMgr.getLoginInfo().subscribe(res => {
  //       console.debug("identity: ", res);

  //       let identity = res.AppUseMode[res.AppUseMode.length - 1];
  //       this._agentRole = this._ConvertIdentityToRolesType(identity);
  //       this.RolesOfPage = this._SwitchRolesToPage(this._agentRole);
  //       this._ShowPersonalOrTeam(this._agentRole);

  //       console.debug("AgentRole: ", this._agentRole);
  //       console.debug("roles RolesOfPage: ", this.RolesOfPage);


  //       switch (this._agentRole) {
  //         case ROLE.AGENT:
  //         case ROLE.AGENTLEADER:
  //           console.debug("load leader");
  //           this._InitLeaderData();
  //           break;
  //         case ROLE.ZONEHEAD:
  //         case ROLE.CAO:
  //           console.debug("load header");
  //           this._InitHeaderData();
  //           break;
  //       }

  //     });
  //   }
  //   catch (error) {
  //     this.errorHandler.handleError(new APPError('F00203', 'check Identity fail!' + error.message));
  //   }
  // }


  private _ConvertIdentityToRolesType(identity: string): ROLE {
    //AG AL Manager Supervisor
    switch (identity) {
      case "AG": return ROLE.AGENT;
      case "AL": return ROLE.AGENTLEADER;
      case "Manager": return ROLE.ZONEHEAD;
      case "Supervisor": return ROLE.CAO;
    }
  }


  private _SwitchRolesToPage(role: ROLE): string {
    switch (role) {
      case ROLE.AGENT:
      case ROLE.AGENTLEADER:
        return "leaderPage";
      case ROLE.CAO:
      case ROLE.ZONEHEAD:
        return "headPage";
    }
  }


  private _ShowPersonalOrTeam(role: ROLE) {
    this.IsAgent = (role == ROLE.AGENT) ? true : false;
  }


  // when click change tab view for personal or team //0 personal 1 team
  public TabChangeView(currentTab: any) {

    this.IsShowTabTeam = (currentTab == 0) ? false : true;

    if (currentTab == 0) {
      //day week
      this._currentPersonalState.TimeBase = PersonalDataTimeBase.Day;
      this._currentPersonalState.DataType = PersonalDataType.Actual;
      this._currentPersonalState.DataYear = this._defaultYear;

      //activity month quarter year
      this._currentActivityState.TimeBase = PersonalDataTimeBase.Month;
      this._currentActivityState.DataType = PersonalDataType.Actual;
      this._currentActivityState.DataYear = this._defaultYear;

      console.debug("current tab 0 team: ", this._currentActivityState);

      this.OnPersonalDataStateEvent(this._currentPersonalState);
      this.OnPersonalDataStateActivitiesEvent(this._currentActivityState);
    }

    if (currentTab == 1) {
      this._currentTeamState.TimeBase = PersonalDataTimeBase.Month;
      this._currentTeamState.TeamValueType = ProgressDataTeamValueType.FYFC;
      this._currentTeamState.DataYear = this._defaultYear;

      console.debug("current tab 1 team: ", this._currentTeamState);

      this.OnTeamDataStateEvent(this._currentTeamState);
    }
  }

  //#endregion progress function

}
