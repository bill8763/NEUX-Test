import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CONTENTGAP } from '@allianzSND/ui';
import { TeamDataState, ProgressYearConfig, ProgressTeamData, ProgressDirectIndirectData } from '@allianzSND/progress';
import { PersonalDataTimeBase, ProgressDataTeamValueType, ProgressHeadContentClass } from '@allianzSND/progress';
import { TranslateService, Language } from '@allianzSND/core';

@Component({
  selector: 'snd-progress-head-leader',
  templateUrl: './progress-head-leader.component.html',
  styleUrls: ['./progress-head-leader.component.scss']
})
export class ProgressHeadLeaderComponent implements OnInit {
  // change tab view for personal or team
  tabChangeView(currentTab) {
    console.warn('currentTab', currentTab);
  }


  //control tab space
  GAP_SIZE_20 = CONTENTGAP.GAP20;
  GAP_SIZE_40 = CONTENTGAP.GAP40;

  // info click
  @Output() onClick = new EventEmitter();
  clickTableInfo(){
    this.onClick.emit();
  }

  @Output() onClickTableCard = new EventEmitter();
  clickTableCardInfo(){
    this.onClickTableCard.emit();
  }

  //#endregion

  public TabStringList: Array<number> = new Array<number>();
  public IsShowYearTab: boolean = false;
  private _currentZoneHeadState = new TeamDataState();

  //public ContentObj: ProgressHeadContentClass;
  public Language: Language;

  constructor(private translateService: TranslateService) {
    //this.ContentObj = new ProgressHeadContentClass(this.translateService);
    this.Language = new Language();

    this._currentZoneHeadState.DataYear = 0;
    this._currentZoneHeadState.TimeBase = PersonalDataTimeBase.Month;
    this._currentZoneHeadState.TeamValueType = ProgressDataTeamValueType.FYFC;
  }

  ngOnInit() { }

  //#region  getter setter (input output)

  @Output() private zoneHeadStateEvent = new EventEmitter<TeamDataState>();

  //year config
  private _progressYearConfigList: Array<ProgressYearConfig> = new Array<ProgressYearConfig>();
  @Input()
  set ProgressYearConfigList(value: Array<ProgressYearConfig>) {

    if (value != undefined && value.length != 0) {
      this._progressYearConfigList = value;
      let configs = this._progressYearConfigList;

      if (configs != undefined || configs.length != 0) {
        this.TabStringList = new Array<number>();
        for (let i = 0; i < configs.length; i++) {
          this.TabStringList.push(configs[i].DataYear);
        }

        this.IsShowYearTab = this._showYearTab();
      }
    }
  }

  get ProgressYearConfigList() {
    return this._progressYearConfigList;
  }


  //team main (zone head)
  private _teamMainDataList: Array<ProgressTeamData> = new Array<ProgressTeamData>();
  @Input()
  set TeamMainDataList(value: Array<ProgressTeamData>) {
    this._teamMainDataList = value;
  }

  get TeamMainDataList() {
    return this._teamMainDataList;
  }


  //team indirect (zone head)
  private _teamIndirectDataList: Array<ProgressDirectIndirectData> = new Array<ProgressDirectIndirectData>();
  @Input()
  set TeamIndirectDataList(value: Array<ProgressDirectIndirectData>) {
    this._teamIndirectDataList = value;
    console.debug("i got _teamIndirectDataList: ", this._teamIndirectDataList);
  }

  get TeamIndirectDataList() {
    return this._teamIndirectDataList;
  }

  //#endregion

  //#region  function

  private _showYearTab(): boolean {
    return (this.TabStringList.length > 1) ? true : false;
  }

  //#endregion

  //#region state event

  public onZoneHeadYearEventTrigger(num: number) {
    if (num >= 0) {
      this._currentZoneHeadState.DataYear = this.TabStringList[num];
      this.zoneHeadStateEvent.emit(this._currentZoneHeadState);
      //console.debug("updata state value: ", this._currentZoneHeadState.DataYear);
    }
    else {
      console.debug("button error");
    }
  }


  public onZoneHeadTimeEventTrigger(num: number) {
    if (num == 0) {
      this._currentZoneHeadState.TimeBase = PersonalDataTimeBase.Month;
      this.zoneHeadStateEvent.emit(this._currentZoneHeadState);
      //console.debug("updata state value: ", this._currentZoneHeadState.TimeBase);
    }
    else if (num == 1) {
      this._currentZoneHeadState.TimeBase = PersonalDataTimeBase.Quarter;
      this.zoneHeadStateEvent.emit(this._currentZoneHeadState);
      //console.debug("updata state value: ", this._currentZoneHeadState.TimeBase);
    }
    else if (num == 2) {
      this._currentZoneHeadState.TimeBase = PersonalDataTimeBase.Year;
      this.zoneHeadStateEvent.emit(this._currentZoneHeadState);
      //console.debug("updata state value: ", this._currentZoneHeadState.TimeBase);
    }
    else {
      console.debug("button error");
    }
  }

  public onZoneHeadValueTypeEventTrigger(num: number) {
    if (num == 0) {
      this._currentZoneHeadState.TeamValueType = ProgressDataTeamValueType.FYFC
      this.zoneHeadStateEvent.emit(this._currentZoneHeadState);
      //console.debug("updata state value: ", this._currentZoneHeadState.TeamValueType);
    }
    else if (num == 1) {
      this._currentZoneHeadState.TeamValueType = ProgressDataTeamValueType.ANP
      this.zoneHeadStateEvent.emit(this._currentZoneHeadState);
      //console.debug("updata state value: ", this._currentZoneHeadState.TeamValueType);
    }
    else if (num == 2) {
      this._currentZoneHeadState.TeamValueType = ProgressDataTeamValueType.Manpower
      this.zoneHeadStateEvent.emit(this._currentZoneHeadState);
      //console.debug("updata state value: ", this._currentZoneHeadState.TeamValueType);
    }
    else if (num == 3) {
      this._currentZoneHeadState.TeamValueType = ProgressDataTeamValueType.Recruitment
      this.zoneHeadStateEvent.emit(this._currentZoneHeadState);
      //console.debug("updata state value: ", this._currentZoneHeadState.TeamValueType);
    }
    else {
      console.debug("button error");
    }
  }

  //#endregion state event


}
