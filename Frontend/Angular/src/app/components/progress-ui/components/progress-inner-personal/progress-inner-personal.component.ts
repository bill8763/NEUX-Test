import { Component, OnInit, Input, HostListener, EventEmitter, Output } from '@angular/core';
import { CONTENTGAP } from '@allianzSND/ui';
import { ProgressPersonalData, ProgressYearConfig, PersonalDataState } from '@allianzSND/progress';
import { GoalSettingStep4 } from '@allianzSND/goal';


@Component({
  selector: 'app-progress-inner-personal',
  templateUrl: './progress-inner-personal.component.html',
  styleUrls: ['./progress-inner-personal.component.scss']
})
export class ProgressInnerPersonalComponent implements OnInit {
  
  //#region ui

  @Input() showRightOrLeft: number = 0;
  @Output() onClick = new EventEmitter();

  public TabIndex = 0;                        
  public WindowWidth: number;

  clickInfoPersonal(){
    console.log('in inner progress personal');
    this.onClick.emit();
  }

  //#endregion ui

  //#region  ui function

  consoleEvent(string,number){
    console.log(string,number);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.WindowWidth = event.target.innerWidth;
    console.log(this.WindowWidth);
  }

  //#endregion ui function

  constructor() { }

  ngOnInit() {
    this.WindowWidth = window.innerWidth;
  }

  //#region setter getter (input output)

  @Output() private innerPersonalDataStateEvent = new EventEmitter<PersonalDataState>();
  @Output() private innerPersonalDataStateActivitiesEvent = new EventEmitter<PersonalDataState>();

  //inner year config
  private _innerProgressYearConfigList: Array<ProgressYearConfig>;
  @Input()
  set InnerProgressYearConfigList(value: Array<ProgressYearConfig>) {
    //this._innerProgressYearConfigList = new Array<ProgressYearConfig>();
    if(value != undefined && value.length != 0) {
      this._innerProgressYearConfigList = value;
      console.debug("inner config here: ", this._innerProgressYearConfigList);
    }
  }

  get InnerProgressYearConfigList() {
    return this._innerProgressYearConfigList;
  }


  //inner yesterday points
  private _innerPersonalDataYesterdayPoints: number;
  @Input()
  set InnerPersonalDataYesterdayPoints(value: number) {
    this._innerPersonalDataYesterdayPoints = value;
    console.debug("inner yesterday points: ", this._innerPersonalDataYesterdayPoints);
  }

  get InnerPersonalDataYesterdayPoints() {
    return this._innerPersonalDataYesterdayPoints;
  }


  //inner personal data
  private _innerPersonalData: ProgressPersonalData;
  @Input()
  set InnerPersonalData(value: ProgressPersonalData) {

    if(value != undefined) {
      this._innerPersonalData = value;
      console.debug("inner personal data here: ", this._innerPersonalData);
    } 
  }

  get InnerPersonalData() {
    return this._innerPersonalData;
  }


  //activity
  private _innerPersonalActivitiesData: ProgressPersonalData;
  @Input()
  set InnerPersonalActivitiesData(value: ProgressPersonalData) {
    this._innerPersonalActivitiesData = new ProgressPersonalData();
    this._innerPersonalActivitiesData = value;
  }
  get InnerPersonalActivitiesData() {
    return this._innerPersonalActivitiesData;
  }


  //goal/plan  main bar
  private _innerPersonalActivitiesGoalPlanData: ProgressPersonalData;
  @Input()
  set InnerPersonalActivitiesGoalPlanData(value: ProgressPersonalData) {
    this._innerPersonalActivitiesGoalPlanData = new ProgressPersonalData();
    this._innerPersonalActivitiesGoalPlanData = value;
  }
  get InnerPersonalActivitiesGoalPlanData() {
    return this._innerPersonalActivitiesGoalPlanData;
  }


  private _innerMonthlyPlanFYFCData:GoalSettingStep4;
  @Input()
  set InnerMonthlyPlanFYFCData(value: GoalSettingStep4) {
    if(value != null && value != undefined)
      this._innerMonthlyPlanFYFCData = value;
  }
  get InnerMonthlyPlanFYFCData():GoalSettingStep4 {
    return this._innerMonthlyPlanFYFCData;
  }


  //#endregion setter getter (input output)

  //#region state event

  public onInnerPersonalDataStateEventTrigger(state: PersonalDataState) {
    this.innerPersonalDataStateEvent.emit(state);
  }

  public onInnerPersonalDataStateActivitiesEventTrigger(state: PersonalDataState) {

    console.debug("i got state: ", state);
    this.innerPersonalDataStateActivitiesEvent.emit(state);
  }

  //#endregion

}
