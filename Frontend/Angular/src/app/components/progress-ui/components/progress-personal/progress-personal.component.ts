import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CONTENTGAP } from '@allianzSND/ui';

import { PersonalDataState, PersonalDataType, PersonalDataTimeBase} from '@allianzSND/progress';
import { ProgressPersonalData, ProgressYearConfig, ProgressContentClass } from '@allianzSND/progress';
import { TranslateService , Language} from '@allianzSND/core';
import { MonthlyPlanFYFCData, GoalSettingStep4 } from '@allianzSND/goal';

@Component({
  selector: 'app-progress-personal',
  templateUrl: './progress-personal.component.html',
  styleUrls: ['./progress-personal.component.scss']
})

export class ProgressPersonalComponent implements OnInit {

  //#region ui

  @Input() inputScrollContent;
  @Output() onClick = new EventEmitter();
  clickInfo(){
    console.log('in progress personal');
    this.onClick.emit();
    
  }


  //控制間距
  public GapControl = CONTENTGAP.GAP20

  //#endregion 

  public TabStringList: Array<string>  = new Array<string>();
  public CurrentWorkingMonth:number = 0;
  public IsShowYearTab: boolean = false;

  private _currentPersonalDataActivitiesState = new PersonalDataState();

  //public ContentObj: ProgressContentClass;
  public Language: Language;

  constructor(private translateService: TranslateService) { 
    //this.ContentObj = new ProgressContentClass(this.translateService);
    this.Language = new Language();

    this._currentPersonalDataActivitiesState.DataType = PersonalDataType.Actual;
    this._currentPersonalDataActivitiesState.DataYear = 0;
    this._currentPersonalDataActivitiesState.TimeBase = PersonalDataTimeBase.Month;
  }

  ngOnInit() {}

  //#region getter setter (input output)

  @Output() private personalDataStateActivitiesEvent = new EventEmitter<PersonalDataState>();

  //year config
  private _progressYearConfigList: Array<ProgressYearConfig>;
  @Input()
  set ProgressYearConfigList(value:Array<ProgressYearConfig>) {
    if(value != undefined && value.length != 0) {
      this._progressYearConfigList = value;
      let configs = this._progressYearConfigList;
      console.debug("test inner configs: ", configs);

      if(configs != undefined || configs.length != 0) {
          
        this.TabStringList = new Array<string>();
        for(let i = 0; i < configs.length; i++) {       
          configs[i].DataYear = this._progressYearConfigList[i].DataYear;
          this.TabStringList.push(configs[i].DataYear.toString());
        }

        //get CurrentWorkingMonth to default (iscCurrent Y)
        if (configs != undefined && configs.length != 0) {
          for (let i = 0; i < configs.length; i++) {
            if (configs[i].IsCurrent) {
              this.CurrentWorkingMonth = configs[i].WorkingMonth;
              console.debug('-------test config: ', configs);
              console.debug('------- test inner: ', this.CurrentWorkingMonth);
            }  
          }
        }
  
        this.IsShowYearTab = this._ShowYearTab();
      }
    }
  }
  get ProgressYearConfigList() {
    return this._progressYearConfigList;
  }


  //activity
  private _personalActivitiesData: ProgressPersonalData;
  @Input()
  set PersonalActivitiesData(value: ProgressPersonalData) {
    this._personalActivitiesData = new ProgressPersonalData();
    this._personalActivitiesData = value;
  }
  get PersonalActivitiesData() {
    return this._personalActivitiesData;
  }


  //goal/plan activity
  private _personalActivitiesGoalPlanData: ProgressPersonalData;
  @Input()
  set PersonalActivitiesGoalPlanData(value: ProgressPersonalData) {
    this._personalActivitiesGoalPlanData = new ProgressPersonalData();
    this._personalActivitiesGoalPlanData = value;
  }
  get PersonalActivitiesGoalPlanData() {
    return this._personalActivitiesGoalPlanData;
  }


  private _monthlyPlanFYFCData: GoalSettingStep4;
  @Input()
  set MonthlyPlanFYFCData(value:GoalSettingStep4) {
    if(value != null && value != undefined)  
      this._monthlyPlanFYFCData = value;
  }
  get MonthlyPlanFYFCData():GoalSettingStep4 {
    return this._monthlyPlanFYFCData;
  }


  //#endregion getter setter (input output)

  //#region function

  private _ShowYearTab():boolean {
    return (this.TabStringList.length > 1) ? true : false;
  }

  //#endregion

  //#region state event

  public OnPersonalDataStateActivitiesByYearEventTrigger(num: number) {

    //index for TabStringList[]
    if(num >= 0) {
      let year = this._progressYearConfigList[num].DataYear;
      this._currentPersonalDataActivitiesState.DataYear = year;
      this.personalDataStateActivitiesEvent.emit(this._currentPersonalDataActivitiesState);
      this.CurrentWorkingMonth = this._progressYearConfigList[num].WorkingMonth;

      console.debug('click working month: ', this.CurrentWorkingMonth);
      console.debug("updata activity year: ",this._currentPersonalDataActivitiesState.DataYear);
    }
    else {
      console.debug("button error");
    }
  }


  public OnPersonalDataStateActivitiesEventTrigger(num: number) {

    if(num == 0) {
      this._currentPersonalDataActivitiesState.TimeBase = PersonalDataTimeBase.Month;
      this._currentPersonalDataActivitiesState.DataType = PersonalDataType.Goal;
      console.debug("updata activity timebase: ", this._currentPersonalDataActivitiesState.TimeBase);
    }
    else if(num == 1) {
      this._currentPersonalDataActivitiesState.TimeBase = PersonalDataTimeBase.Quarter;
      this._currentPersonalDataActivitiesState.DataType = PersonalDataType.Goal;
      console.debug("updata activity timebase: ", this._currentPersonalDataActivitiesState.TimeBase);
    }
    else if(num == 2) {
      this._currentPersonalDataActivitiesState.TimeBase = PersonalDataTimeBase.Year;
      this._currentPersonalDataActivitiesState.DataType = PersonalDataType.Goal;
      console.debug("updata activity timebase: ", this._currentPersonalDataActivitiesState.TimeBase);
    } 
    else {
      console.debug("error");
    } 

    this.personalDataStateActivitiesEvent.emit(this._currentPersonalDataActivitiesState);
  }

  //#endregion state event

}
