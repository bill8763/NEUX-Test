import { Component, OnInit, ErrorHandler } from '@angular/core';
import { TranslateService, APPError, Language, AppRouter } from '@allianzSND/core';
import { CONTENTGAP } from '@allianzSND/ui';
import { ProgressService, ProgressYearObj, PersonalObj, TeamObj, ProgressPersonalData, Tag } from '@allianzSND/progress';
import { PersonalDataTimeBase, PersonalDataType, PerformanceType, PersonalDataState, TeamDataState, ProgressDataTeamValueType } from '@allianzSND/progress';
import { ProgressYearConfig, ProgressTeamData, ProgressDirectIndirectData } from '@allianzSND/progress';

import { GoalSettingService } from '@allianzSND/goal';
import { ROLE, GoalSettingStep4 } from '@allianzSND/goal';
import { PERFORMANCETYPE } from 'projects/core/src/lib/bean';


@Component({
  selector: 'app-progress-inner',
  templateUrl: './progress-inner.component.html',
  styleUrls: ['./progress-inner.component.scss']
})

export class ProgressInnerComponent implements OnInit {

  //#region ui
  // info click and show popup
  public isPopupOpenProgressBarListInfo = false; // info popup for personal progressbar list
  public isPopupOpenTableCardInfo = false;
  public isPopupOpenInderectInfo = false;
  public isPopupOpenDerectInfo = false;
  public isPopupOpenHeadTablerInfo = false;

  clickInfoPersonal(){
    console.log('clickInfoPersonal');
    this.isPopupOpenProgressBarListInfo = true;
  }
  clickInfoHead(){
    this.isPopupOpenHeadTablerInfo = true;
  }
  clickInfoTableCard(){
    console.log('clickInfoTableCard');
    this.isPopupOpenTableCardInfo = true;
  }
  clickInfoIndirect(){
    console.log('clickInfoIndirect');
    this.isPopupOpenInderectInfo = true;
  }

  clickInfoDirect(){
    console.log('clickInfoDirect');
    this.isPopupOpenDerectInfo = true;
  }

    
  public prevText = [];
  public AgentName = "";
  //public prevText = ['...', 'Marti Valencia', 'Ham Chuwon'];

  //control tab space
  GAP_SIZE_40 = CONTENTGAP.GAP40;

  //tab change, then show peronal view or team view
  public IsShowTabTeam = false;
  public IsShowSwitchTab = true;//isagent

  //#endregion

  //#region ui function

  // change tab view for personal or team
  tabChangeView(currentTab) {
    console.warn('currentTab', currentTab);
    this.IsShowTabTeam = currentTab == 0 ? false : true;
  }

  //function for test
  consoleEvent(str: string, str2: string) {
    console.log(str, str2);
  }

  //#endregion ui function

  private _searchAgentId: string = "";
  public IsSupervisor: boolean = false;
  public IsAgent: boolean = false;

  //state
  private _currentPersonalState: PersonalDataState;
  private _currentActivityState: PersonalDataState;
  private _currentTeamState: TeamDataState;
  private _currentHeadState: TeamDataState;

  //here is data center 
  public InnerPersonalDataYesterdayPointsList: Array<number> = new Array<number>();
  public InnerProgressDataList: Array<ProgressYearObj> = new Array<ProgressYearObj>();
  public InnerPersonalDataList: Array<PersonalObj> = new Array<PersonalObj>();
  public InnerTeamDataList: Array<TeamObj> = new Array<TeamObj>();

  //year configuration
  public InnerProgressYearConfigList: Array<ProgressYearConfig> = new Array<ProgressYearConfig>();
  private _yearList: Array<number> = new Array<number>();
  private _defaultYear: number = 0;
  private _monthCount: number = 0;
  private _currentWorkingMonth: number = 0;
  private _currentWorkingMonthMap: Map<number, number>;

  //personal list 
  public InnerPersonalData: ProgressPersonalData;
  public InnerPersonalDataYesterdayPoints: number = 0;

  //personal activity and main bar 
  public InnerPersonalActivitiesData: ProgressPersonalData;
  public InnerPersonalActivitiesGoalPlanData: ProgressPersonalData;

  // monthly
  public InnerMonthlyPlanFYFCData: GoalSettingStep4;

  //team 
  public InnerTeamMainDataList: Array<ProgressTeamData> = new Array<ProgressTeamData>();
  public InnerTeamDirectDataList: Array<ProgressDirectIndirectData> = new Array<ProgressDirectIndirectData>();
  public InnerTeamIndirectDataList: Array<ProgressDirectIndirectData> = new Array<ProgressDirectIndirectData>();


  //public ContentObj: ProgressContentClass;
  public Language: Language;

  constructor(
    private progressService: ProgressService,
    private router: AppRouter,
    private goalService: GoalSettingService,
    private translateService: TranslateService,
    private errorHandler: ErrorHandler) {

    //this.ContentObj = new ProgressContentClass(this.translateService);
    this.Language = new Language();
    this._setTranslateVariable();

    //set default state data
    this._InitState();

    //start here..
    this._LoadNewAgent();
    this._LoadAgentRouteNameObj();

    console.debug("every inner one ti,es i will see this one times");
  }

  ngOnInit() { }

  //#region loader functon

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

  private _LoadNewAgent() {
    let mainDIV = document.getElementsByClassName('ui-page-content')[0];
        console.log("eeee",mainDIV.scrollHeight);
        mainDIV.scrollTo({ top: 0, behavior: "smooth" });
        //alert(mainDIV.scrollTop);
    try {
      this.progressService.GetDrillDwonAgentIdObj().subscribe(res => {
        if (res) {
          this._searchAgentId = res.AgentID;
          this.AgentName = res.AgentName;

          console.debug("i will catch the app use mode here: ", res.AppUseMode);

          let identity = res.AppUseMode;
          let role = this._ConvertIdentityToRolesType(identity);

          //test progress current role
          this.progressService.SetCurrentRole(role);

          // this.IsAgent = (role == ROLE.AGENT || role == ROLE.AGENTLEADER) ? true : false;
          
          // this.IsShowTabTeam = (this.IsAgent) ? false : true;
          this.IsSupervisor = (role == ROLE.CAO || role == ROLE.ZONEHEAD) ? true : false;
          this.IsShowSwitchTab = this.progressService.GetIsShowSwitchTab();
          this.IsShowTabTeam = this.progressService.GetIsAgentLeader();

          //this.IsAgent = (role == ROLE.AGENT ) ? true : false;
          //this.IsSupervisor = (role == ROLE.CAO) ? true : false;

          console.debug("IsAgent: ", this.IsAgent);
          console.debug("isShowTabTeam: ", this.IsShowTabTeam);
          console.debug("check: ", this.IsSupervisor);
          console.debug("loadNewAgent res: ", res);
          console.debug("loadNewAgent AgentName: ", this.AgentName);


          this._InitState();
          //this._LoadLeaderData(this._searchAgentId);

          switch (role) {
            case ROLE.AGENT:
            case ROLE.AGENTLEADER:
              console.debug("inner load leader");
              this._LoadLeaderData(this._searchAgentId);
              break;
            case ROLE.ZONEHEAD:
            case ROLE.CAO:
              console.debug("inner load header");
              this._LoadHeaderData(this._searchAgentId);
              break;
          }
        }
      });
    }
    catch (error) {
      this.errorHandler.handleError(new APPError('F00204', 'load new agent fail!' + error.message));
    }
  }

  // private async _LoadNewAgent1() {
  //   try {
  //     let res = await this.progressService.GetDrillDwonAgentIdObj().toPromise();
  //     this._searchAgentId = res.AgentID;
  //     this.AgentName = res.AgentName;

  //     console.debug("i will catch the app use mode here: ", res.AppUseMode);

  //     let identity = res.AppUseMode;
  //     let role = this._ConvertIdentityToRolesType(identity);

  //     this.IsAgent = (role == ROLE.AGENT) ? true : false;
  //     this.IsShowTabTeam = (this.IsAgent) ? false : true;
  //     this.IsSupervisor = (role == ROLE.CAO) ? true : false;

  //     console.debug("IsAgent: ", this.IsAgent);
  //     console.debug("isShowTabTeam: ", this.IsShowTabTeam);
  //     console.debug("check: ", this.IsSupervisor);
  //     console.debug("loadNewAgent res: ", res);
  //     console.debug("loadNewAgent AgentName: ", this.AgentName);


  //     this._InitState();

  //     switch (role) {
  //       case ROLE.AGENT:
  //       case ROLE.AGENTLEADER:
  //         console.debug("inner load leader");
  //         break;
  //       case ROLE.ZONEHEAD:
  //       case ROLE.CAO:
  //         console.debug("inner load header");
  //         break;
  //     }

  //     this._LoadLeaderData(this._searchAgentId);
  //   }
  //   catch (error) {
  //     this.errorHandler.handleError(new APPError('F00204', 'load new agent fail!' + error.message));
  //   }
  // }

  private async _LoadAgentRouteNameObj() {
    try {
      let data = await this.progressService.GetDrillDownAgentIdObjRouterNameObj().toPromise();
      let max = data.length;
      if (max >= 2) {
        let dataName1 = data[0].AgentName;
        let dataName2 = data[1].AgentName;
        this.prevText = ['...', dataName1, dataName2];
        console.debug("------res[0]: ", data[0]);
        console.debug("------res[1]: ", data[1]);
      }
      else if (max <= 1) {
        let dataName1 = data[0].AgentName;
        this.prevText = ['...', dataName1];
        console.debug("------res[0]: ", data[0]);
      }
    }
    catch (error) {
      this.errorHandler.handleError(new APPError('F00205', 'load agent route name object fail!' + error.message));
    }
  }


  private async _LoadLeaderData(agentId: string) {

    await this._LoadYearConfig(agentId);
    await this._LoadAgentIdProgress(agentId);

    this._LoadAgentRouteNameObj();

    this._ShowPersonalDataDayWeek(this._defaultYear, PersonalDataTimeBase.Day);
    this._ShowYesterdayaPoints(this._defaultYear);

    //personal activities main bar actual goal/plan 
    this._ShowPersonalActivitiesData(this._defaultYear, PersonalDataTimeBase.Month, PersonalDataType.Actual);
    this._ShowPersonalActivitiesGoalPlanData(this._defaultYear, PersonalDataTimeBase.Month, PersonalDataType.Goal);

    //monthly
    this._currentWorkingMonth = this._currentWorkingMonthMap.get(this._defaultYear);
    await this._LoadProgressMonthAcualPlan(PERFORMANCETYPE.PERSONAL, this._defaultYear, this._monthCount, this._currentWorkingMonth, this._searchAgentId);

    //team
    this._ShowTeamMainData(this._defaultYear, PersonalDataTimeBase.Month);
    this._ShowTeamDirectData(this._defaultYear, PersonalDataTimeBase.Month, ProgressDataTeamValueType.FYFC);
    this._ShowTeamIndirectData(this._defaultYear, PersonalDataTimeBase.Month, ProgressDataTeamValueType.FYFC);
  }

  private async _LoadHeaderData(agentId: string) {

    await this._LoadYearConfig(agentId);
    await this._LoadAgentIdProgress(agentId);

    this._LoadAgentRouteNameObj();

    //team
    this._ShowTeamMainData(this._defaultYear, PersonalDataTimeBase.Month);
    this._ShowTeamIndirectData(this._defaultYear, PersonalDataTimeBase.Month, ProgressDataTeamValueType.FYFC);
  }


  private async _LoadYearConfig(agentId: string) {

    try {
      let data = await this.progressService.GetYearConfigDataByRestful(agentId).toPromise();
      let configs = data["Configurations"];

      console.debug("load inner year config: ", data);
      console.debug("load inner year config ans: ", configs);

      this.InnerProgressYearConfigList = new Array<ProgressYearConfig>();
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

        this.InnerProgressYearConfigList.push(yearConfig);
        this._yearList.push(tmp.DataYear);
        this._currentWorkingMonthMap.set(tmp.DataYear, tmp.WorkingMonth);
      }

      console.debug("inner yearconfig year: ", this._defaultYear);
      console.debug("inner InnerProgressYearCongifList: ", this.InnerProgressYearConfigList);
      console.debug("inner yearList: ", this._yearList);
    }
    catch (error) {
      this.errorHandler.handleError(new APPError('F00206', 'load inner year config fail!' + error.message));
    }
  }


  private async _LoadAgentIdProgress(agentId: string) {

    console.debug("Inner loadAgentIdProgress agentId: ", agentId);
    try {
      let data = await this.progressService.GetProgressDataByRestful(agentId).toPromise();
      this.InnerProgressDataList = new Array<ProgressYearObj>();
      this.InnerPersonalDataYesterdayPointsList = new Array<number>();
      this.InnerPersonalDataList = new Array<PersonalObj>();
      this.InnerTeamDataList = new Array<TeamObj>();
      
      this.InnerProgressDataList = data["Progress"];
      console.debug("Inner loadAgentIdProgress data:", data);
      console.debug("Inner loadProgress ProgressDataList: ", this.InnerProgressDataList);

      for (let i = 0; i < this.InnerProgressDataList.length; i++) {

        let dataPersonal: PersonalObj = new PersonalObj();
        let dataTeam: TeamObj = new TeamObj();
        let points: number = 0;
        
        dataPersonal = this.InnerProgressDataList[i].Personal;
        dataTeam = this.InnerProgressDataList[i].Team;
        points = this.InnerProgressDataList[i].YesterdayPoint;

        this.InnerPersonalDataList.push(dataPersonal);
        this.InnerTeamDataList.push(dataTeam);
        this.InnerPersonalDataYesterdayPointsList.push(points);
      }

      console.debug("InnerProgressDataList: ", this.InnerProgressDataList);
      console.debug("InnerPersonalDataList: ", this.InnerPersonalDataList);
      console.debug("InnerTeamDataList: ", this.InnerTeamDataList);
      console.debug("InnerPersonalDataYesterdayPointsList: ", this.InnerPersonalDataYesterdayPointsList);
    }
    catch (error) {
      this.errorHandler.handleError(new APPError('F00207', 'load agent id progress fail!' + error.message));
    }
  }


  //getMonthActualPlan no yaml get raw data   //todo add max month
  private async _LoadProgressMonthAcualPlan(type: PERFORMANCETYPE, year: number, monthCount?: number, PerformanceSettlementMonth?: number, AgentID: string = "") {

    console.debug("Inner LoadProgressMonthAcualPlan type: ", type);
    console.debug("Inner LoadProgressMonthAcualPlan year: ", year);
    console.debug("Inner LoadProgressMonthAcualPlan monthCount: ", monthCount);
    console.debug("Inner LoadProgressMonthAcualPlan PerformanceSettlementMonth: ", PerformanceSettlementMonth);
    console.debug("Inner LoadProgressMonthAcualPlan AgentID: ", AgentID);

    if(year <= 0) { year = this._defaultYear;}

    try {
      let data = await this.goalService.getMonthActualPlan(type, year, monthCount, PerformanceSettlementMonth, AgentID).toPromise();
      console.debug("Inner LoadProgressMonthAcualPlan data: ", data);

      this.InnerMonthlyPlanFYFCData = data.clone();
      console.debug("_LoadProgressMonthAcualPlan InnerMonthlyPlanFYFCData: ", this.InnerMonthlyPlanFYFCData);
    }
    catch (error) {
      this.errorHandler.handleError(new APPError('F00208', 'load inner progress month acual plan fail!' + error.message));
    }
  }

  private _ShowPersonalDataDayWeek(year: number, time: PersonalDataTimeBase) {



    if (year <= 0) { year = this._defaultYear;}

    console.debug("test inner week year: ", year);
    console.debug("test inner week time: ", time);

    this.InnerPersonalData = new ProgressPersonalData();

    if (this.InnerProgressDataList.length != 0 && this.InnerProgressDataList != undefined) {
      let yearData = this.InnerProgressDataList.filter(x => x.DataYear == year);

      console.debug("showPersonalDataDayWeek yearData: ", yearData);

      let data = yearData[0].Personal.Values.filter(x => x.TimeBase == time)[0];


 
      console.debug("showPersonalDataDayWeek data: ", data);

      this.InnerPersonalData = new ProgressPersonalData();
      this.InnerPersonalData.DataType = data.DataType;
      this.InnerPersonalData.TimeBase = data.TimeBase;
      this.InnerPersonalData.FYFC = data.FYFC;
      this.InnerPersonalData.Find = data.Find;
      this.InnerPersonalData.Schedule = data.Schedule;
      this.InnerPersonalData.Meet = data.Meet;
      this.InnerPersonalData.Submit = data.Submit;
      this.InnerPersonalData.Inforce = data.Inforce;
      //this.InnerPersonalData = data;

      let cf = this.InnerProgressYearConfigList;
      for (let i = 0; i < cf.length; i++) {
        if (cf[i].IsCurrent) {
          this.InnerPersonalData.FindConvertPointBase = cf[i].FindConvertPointBase;
          this.InnerPersonalData.ScheduleConvertPointBase = cf[i].ScheduleConvertPointBase;
          this.InnerPersonalData.MeetConvertPointBase = cf[i].MeetConvertPointBase;
          this.InnerPersonalData.SubmitConvertPointBase = cf[i].SubmitConvertPointBase;
          this.InnerPersonalData.InforceConvertPointBase = cf[i].InforceConvertPointBase;
        }
      }
      console.debug("showPersonalDataDayWeek InnerPersonalData: ", this.InnerPersonalData);
    }
  }

  private _ShowYesterdayaPoints(year: number) {
    console.debug("showYesterdayaPoints year: ", year);

    this.InnerPersonalDataYesterdayPoints = 0;
    if (year <= 0) { year = this._defaultYear;}

    if (this._yearList != null) {
      for (let i = 0; i < this._yearList.length; i++) {
        if (year == this._yearList[i])
          this.InnerPersonalDataYesterdayPoints = this.InnerPersonalDataYesterdayPointsList[i];
      }
      console.debug("showYesterdayaPoints InnerPersonalDataYesterdayPoints: ", this.InnerPersonalDataYesterdayPoints);
    }
  }


  private _ShowPersonalActivitiesData(year: number, time: PersonalDataTimeBase, type: PersonalDataType) {

    console.debug("test inner activity year: ", year);
    console.debug("test inner activity time: ", time);
    console.debug("test inner activity typr: ", type);

    if (year <= 0) {year = this._defaultYear;}

    if (this.InnerProgressDataList.length != 0 && this.InnerProgressDataList != undefined) {
      let yearData = this.InnerProgressDataList.filter(x => x.DataYear == year);
      let data = yearData[0].Personal.Values.filter(x => x.TimeBase == time && x.DataType == type)[0];

      console.debug("test inner activity yearData: ", yearData);
      console.debug("test inner activity data: ", data);

      this.InnerPersonalActivitiesData = new ProgressPersonalData();
      this.InnerPersonalActivitiesData.DataType = data.DataType;
      this.InnerPersonalActivitiesData.TimeBase = data.TimeBase;
      this.InnerPersonalActivitiesData.Find = data.Find;
      this.InnerPersonalActivitiesData.Schedule = data.Schedule;
      this.InnerPersonalActivitiesData.Meet = data.Meet;
      this.InnerPersonalActivitiesData.Submit = data.Submit;
      this.InnerPersonalActivitiesData.Inforce = data.Inforce;
      this.InnerPersonalActivitiesData.FYFC = data.FYFC;
      //this.InnerPersonalActivitiesData = data;

      console.debug("showPersonalActivitiesData InnerPersonalActivitiesData: ", this.InnerPersonalActivitiesData);
    }
  }


  private _ShowPersonalActivitiesGoalPlanData(year: number, time: PersonalDataTimeBase, type: PersonalDataType) {

    console.debug("showPersonalActivitiesGoalPlanData year: ", year);
    console.debug("showPersonalActivitiesGoalPlanData time: ", time);
    console.debug("showPersonalActivitiesGoalPlanData typr: ", type);

    if (year <= 0) {year = this._defaultYear;}

    if (this.InnerProgressDataList.length != 0 && this.InnerProgressDataList != undefined) {
      let yearData = this.InnerProgressDataList.filter(x => x.DataYear == year);
      let data = yearData[0].Personal.Values.filter(x => x.TimeBase == time && x.DataType == type)[0];
      
      console.debug("test inner activity goal yearData: ", yearData);
      console.debug("test inner activity gaol data: ", data);

      this.InnerPersonalActivitiesGoalPlanData = new ProgressPersonalData();
      this.InnerPersonalActivitiesGoalPlanData.DataType = data.DataType;
      this.InnerPersonalActivitiesGoalPlanData.TimeBase = data.TimeBase;
      this.InnerPersonalActivitiesGoalPlanData.Find = data.Find;
      this.InnerPersonalActivitiesGoalPlanData.Schedule = data.Schedule;
      this.InnerPersonalActivitiesGoalPlanData.Meet = data.Meet;
      this.InnerPersonalActivitiesGoalPlanData.Submit = data.Submit;
      this.InnerPersonalActivitiesGoalPlanData.Inforce = data.Inforce;
      this.InnerPersonalActivitiesGoalPlanData.FYFC = data.FYFC;
      //this.InnerPersonalActivitiesGoalPlanData = data;
      console.debug("showPersonalActivitiesGoalPlanData InnerPersonalActivitiesGoalPlanData: ", this.InnerPersonalActivitiesGoalPlanData);
    }
  }

  private _ShowTeamMainData(year: number, time: PersonalDataTimeBase) {

    console.debug("showTeamMainData year: ", year);
    console.debug("showTeamMainData time: ", time);

    if(year <= 0){ year = this._defaultYear;}

    this.InnerTeamMainDataList = new Array<ProgressTeamData>();

    if (this.InnerTeamDataList.length != 0 && this.InnerTeamDataList != undefined) {
      for (let i = 0; i < this._yearList.length; i++) {
        if (year == this._yearList[i] && this.InnerTeamDataList[i].Values != null) {
          let data = this.InnerTeamDataList[i].Values.filter(x => x.TimeBase == time);
          this.InnerTeamMainDataList = data;
        }
      }
      console.debug("showTeamMainData InnerTeamMainDataList: ", this.InnerTeamMainDataList);
    }
  }


  private _ShowTeamDirectData(year: number, time: PersonalDataTimeBase, teamType: ProgressDataTeamValueType) {

    console.debug("showTeamDirectData year: ", year);
    console.debug("showTeamDirectData time: ", time);
    console.debug("showTeamDirectData teamType: ", teamType);

    if(year <= 0){ year = this._defaultYear;}

    this.InnerTeamDirectDataList = new Array<ProgressDirectIndirectData>();

    if (this.InnerTeamDataList.length != 0 && this.InnerTeamDataList != undefined) {
      for (let i = 0; i < this._yearList.length; i++) {
        if (year == this._yearList[i] && this.InnerTeamDataList[i].DirectUnit != null) {
          let data = this.InnerTeamDataList[i].DirectUnit.filter(x => x.TimeBase == time && x.DataType == teamType);
          this.InnerTeamDirectDataList = data;
        }
      }
      console.debug("showTeamDirectData InnerTeamDirectDataList: ", this.InnerTeamDirectDataList);
    }
  }


  private _ShowTeamIndirectData(year: number, time: PersonalDataTimeBase, teamType: ProgressDataTeamValueType) {

    console.debug("showTeamIndirectData year: ", year);
    console.debug("showTeamIndirectData time: ", time);
    console.debug("showTeamIndirectData teamType: ", teamType);

    if(year <= 0){ year = this._defaultYear;}

    this.InnerTeamIndirectDataList = new Array<ProgressDirectIndirectData>();

    if (this.InnerTeamDataList.length != 0 && this.InnerTeamDataList != undefined) {
      for (let i = 0; i < this._yearList.length; i++) {
        if (year == this._yearList[i] && this.InnerTeamDataList[i].InDirectUnit != null) {
          let data = this.InnerTeamDataList[i].InDirectUnit.filter(x => x.TimeBase == time && x.DataType == teamType);
          this.InnerTeamIndirectDataList = data;
        }
      }
      console.debug("showTeamIndirectData: InnerTeamIndirectDataList: ", this.InnerTeamIndirectDataList);
    }
  }

  //#endregion loader functon

  //#region state event

  public onInnerPersonalDataStateEvent(state: PersonalDataState) {
    if (state) {
      this._currentPersonalState.DataType = state.DataType;
      this._currentPersonalState.DataYear = state.DataYear;
      this._currentPersonalState.TimeBase = state.TimeBase;

      console.debug("personal state event: ", this._currentPersonalState);
      let currentState = this._currentPersonalState;

      if (currentState.TimeBase !== PersonalDataTimeBase.Unknow && currentState.DataType !== PersonalDataType.Unknow) {
        this._ShowPersonalDataDayWeek(currentState.DataYear, currentState.TimeBase);
        this._ShowYesterdayaPoints(currentState.DataYear);
      }
    }
    else {
      console.debug("inner we dont have this type here sorry for that maybe you need to add some :P");
    }
  }


  public onInnerPersonalDataStateActivitiesEvent(state: PersonalDataState) {
    if (state) {

      this._currentActivityState.DataType = state.DataType;
      this._currentActivityState.DataYear = state.DataYear;
      this._currentActivityState.TimeBase = state.TimeBase;

      console.debug("personal inner activity state event: ", this._currentActivityState);
      let currentState =  this._currentActivityState;

      if (currentState.TimeBase !== PersonalDataTimeBase.Unknow && currentState.DataType !== PersonalDataType.Unknow) {

        //show personal activities main bar
        this._ShowPersonalActivitiesData(currentState.DataYear, currentState.TimeBase, PersonalDataType.Actual);
        this._ShowPersonalActivitiesGoalPlanData(currentState.DataYear, currentState.TimeBase, PersonalDataType.Goal);

        //show personal monthly
        this._currentWorkingMonth = this._currentWorkingMonthMap.get(currentState.DataYear);
        this._LoadProgressMonthAcualPlan(PERFORMANCETYPE.PERSONAL, currentState.DataYear, this._monthCount, this._currentWorkingMonth, this._searchAgentId);
      }
      else {
        console.debug("inner we dont have this type here sorry for that maybe you need to add some :P");
      }
    }
  }


  public onInnerTeamDataStateEvent(state: TeamDataState) {
    if (state) {
      this._currentTeamState.DataYear = state.DataYear;
      this._currentTeamState.TeamValueType = state.TeamValueType;
      this._currentTeamState.TimeBase = state.TimeBase;

      console.debug("team state event: ", this._currentTeamState);
      let currentState = this._currentTeamState;

      //reflash team value by year and time base
      this._ShowTeamMainData(currentState.DataYear, currentState.TimeBase);

      //reflash direct and indirect by time base , year and team value type
      this._ShowTeamDirectData(currentState.DataYear, currentState.TimeBase, currentState.TeamValueType);
      this._ShowTeamIndirectData(currentState.DataYear, currentState.TimeBase, currentState.TeamValueType);
    }
    else {
      console.debug("inner we dont have this type here sorry for that maybe you need to add some :P");
    }
  }


  //not sure need zone head in inner page  its makes no sense
  public onInnerZoneHeadStateEvent(state: TeamDataState) {
    if (state) {
      this._currentHeadState.DataYear = state.DataYear;
      this._currentHeadState.TeamValueType = state.TeamValueType;
      this._currentHeadState.TimeBase = state.TimeBase;

      console.debug("zone head state event: ", this._currentHeadState);
      let currentState = this._currentHeadState;

      //reflash zone head value by year and time base
      this._ShowTeamMainData(currentState.DataYear, currentState.TimeBase);

      //reflash indirect for zone head ...
      this._ShowTeamIndirectData(currentState.DataYear, currentState.TimeBase, currentState.TeamValueType);
    }
    else {
      console.debug("inner we dont have this type here sorry for that maybe you need to add some :P");
    }
  }


  public onInnerAgentBackEvent(value: string) {
    if (value == "agentBack") {

      //remove one agent by id
      this.progressService.PopDrillDownAgentIdObj();

      //get agent list length
      let listLength = this.progressService.AgentIdObjListLength;
      
      //get "back to progress" display tag 
      let tag = (listLength == 0) ? Tag.TeamTag : Tag.PersonalTag;
      this.progressService.SetCurrentNavigationTag(tag);

      //get navigation to "progress or progress inner "route
      let target = (listLength == 0) ? "Progress" : "ProgressInner"
      this.router.navigate(target);

      console.debug("array length: ", length);
    }
  }

  //#endregion state event

  //#region function

  public BackToProgress() {
    let tag = Tag.TeamTag;
    this.progressService.SetCurrentNavigationTag(tag);
    this.progressService.InitDrillDownAgentIdObj();
    this.router.navigate("Progress");
    //maybe need use router
  }

  private _ConvertIdentityToRolesType(identity: string): ROLE {
    switch (identity) {
      case "AG": return ROLE.AGENT;
      case "AL": return ROLE.AGENTLEADER;
      case "Manager": return ROLE.ZONEHEAD;
      case "Supervisor": return ROLE.CAO;
    }
  }

  

  //#endregion function

  //#region  translate

  private _translateVariable = null;
  private _setTranslateVariable() {
    this._translateVariable = {}
  }

  private _translateWithVariable(mappingID: string) {
    return this.translateService.translateWithVariable(mappingID, this._translateVariable);
  }

  //#endregion

}
