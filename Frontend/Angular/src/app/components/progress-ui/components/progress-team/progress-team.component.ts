import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CONTENTGAP } from '@allianzSND/ui';
import { UiInformationBtnComponent } from '@allianzSND/ui'

import { TeamDataState } from '@allianzSND/progress';
import { PersonalDataTimeBase } from '@allianzSND/progress';
import { ProgressDataTeamValueType } from '@allianzSND/progress';
import { ProgressTeamData } from '@allianzSND/progress';
import { ProgressYearConfig } from '@allianzSND/progress';
import { ProgressDirectIndirectData } from '@allianzSND/progress';
import { TranslateService, Language } from '@allianzSND/core';
import { ProgressTeamContentClass } from '@allianzSND/progress';

@Component({
  selector: 'app-progress-team',
  templateUrl: './progress-team.component.html',
  styleUrls: ['./progress-team.component.scss']
})
export class ProgressTeamComponent implements OnInit {

  //#region ui

  @Input() inputScrollContent;

  @Output() onClickInfoDirect = new EventEmitter();
  @Output() onClickInfoIndirect = new EventEmitter();
  infoClickDirect(){
    this.onClickInfoDirect.emit();
  }
  infoClickIndirect(){
    this.onClickInfoIndirect.emit();
  }

  //控制間距
  GAP_SIZE_20 = CONTENTGAP.GAP20;
  GAP_SIZE_40 = CONTENTGAP.GAP40;

  @Output() onClickTableCard = new EventEmitter();
  clickTableCardInfo(){
    this.onClickTableCard.emit();
  }

  //#endregion ui
  
  


  public TabStringList: Array<string> = new Array<string>();
  public IsShowYearTab: boolean = false;

  private _currentTeamValueState = new TeamDataState();


  //public ContentObj: ProgressTeamContentClass;
  public Language: Language;

  constructor(private translateService: TranslateService) {
    //this.ContentObj = new ProgressTeamContentClass(this.translateService);
    this.Language = new Language();

    this._currentTeamValueState.DataYear = 0;
    this._currentTeamValueState.TimeBase = PersonalDataTimeBase.Month;
    this._currentTeamValueState.TeamValueType = ProgressDataTeamValueType.FYFC;

    console.debug("this is current state: ", this._currentTeamValueState);
  }

  ngOnInit() { }

  //#region  getter setter (input output)

  @Output() private progressDataTeamValueEvent = new EventEmitter<TeamDataState>();

  private _progressYearConfigList: Array<ProgressYearConfig>;
  @Input()
  set ProgressYearConfigList(value: Array<ProgressYearConfig>) {
    this._progressYearConfigList = new Array<ProgressYearConfig>();
    this._progressYearConfigList = value;

    console.debug("team _progressYearConfigList: ", this._progressYearConfigList);

    let configs = this._progressYearConfigList;

    if(configs != undefined && configs.length != 0 ) {
      this.TabStringList = new Array<string>();
      for (let i = 0; i < configs.length; i++) {
        this.TabStringList.push(configs[i].DataYear.toString());
      }
  
      this.IsShowYearTab = this._showYearTab();
  
      // this._currentTeamValueState.DataYear = configs[0].DataYear;
      // this._currentTeamValueState.TimeBase = PersonalDataTimeBase.Month;
      // this._currentTeamValueState.TeamValueType = ProgressDataTeamValueType.FYFC;

    }
  }
  get ProgressYearConfigList() {
    return this._progressYearConfigList;
  }


  private _teamMainDataList: Array<ProgressTeamData> = new Array<ProgressTeamData>();
  @Input()
  set TeamMainDataList(value: Array<ProgressTeamData>) {
    this._teamMainDataList = value;
    console.debug("team _teamMainDataList: ", this._teamMainDataList);
  }
  get TeamMainDataList() {
    return this._teamMainDataList;
  }


  private _teamDirectDataList: Array<ProgressDirectIndirectData> = new Array<ProgressDirectIndirectData>();
  @Input()
  set TeamDirectDataList(value: Array<ProgressDirectIndirectData>) {
    this._teamDirectDataList = value;
    console.debug("team _teamDirectDataList: ", this._teamDirectDataList);
  }
  get TeamDirectDataList() {
    return this._teamDirectDataList;
  }


  private _teamIndirectDataList: Array<ProgressDirectIndirectData> = new Array<ProgressDirectIndirectData>();
  @Input()
  set TeamIndirectDataList(value: Array<ProgressDirectIndirectData>) {
    this._teamIndirectDataList = value;
    console.debug("team _teamIndirectDataList: ", this._teamIndirectDataList);
  }
  get TeamIndirectDataList() {
    return this._teamIndirectDataList;
  }

  //#endregion getter setter (input output)

  //#region  function

  private _showYearTab(): boolean {
    return (this.TabStringList.length > 1) ? true : false;
  }

  //#endregion funcion

  //#region event trigger


  public onTeamYearEventTrigger(num: number) {
    this._currentTeamValueState.DataYear = this.ProgressYearConfigList[num].DataYear;
    this.progressDataTeamValueEvent.emit(this._currentTeamValueState);
    //console.debug("updata state year: ", this._currentTeamValueState.DataYear);
  }

  public onTeamTimeEventTrigger(num: number) {
    if (num == 0) {
      this._currentTeamValueState.TimeBase = PersonalDataTimeBase.Month;
      this.progressDataTeamValueEvent.emit(this._currentTeamValueState);
      //console.debug("updata state time base: ", this._currentTeamValueState.TimeBase);
    }
    else if (num == 1) {
      this._currentTeamValueState.TimeBase = PersonalDataTimeBase.Quarter;
      this.progressDataTeamValueEvent.emit(this._currentTeamValueState);
      //console.debug("updata state time base: ", this._currentTeamValueState.TimeBase);
    }
    else if (num == 2) {
      this._currentTeamValueState.TimeBase = PersonalDataTimeBase.Year;
      this.progressDataTeamValueEvent.emit(this._currentTeamValueState);
      //console.debug("updata state time base: ", this._currentTeamValueState.TimeBase);
    }
    else {
      console.debug("button error");
    }
  }

  public onTeamValueTypeEventTrigger(num: number) {
    if (num == 0) {
      this._currentTeamValueState.TeamValueType = ProgressDataTeamValueType.FYFC
      this.progressDataTeamValueEvent.emit(this._currentTeamValueState);
      console.debug("updata state value: ", this._currentTeamValueState.TeamValueType);
    }
    else if (num == 1) {
      this._currentTeamValueState.TeamValueType = ProgressDataTeamValueType.ANP
      this.progressDataTeamValueEvent.emit(this._currentTeamValueState);
      console.debug("updata state value: ", this._currentTeamValueState.TeamValueType);
    }
    else if (num == 2) {
      this._currentTeamValueState.TeamValueType = ProgressDataTeamValueType.Manpower
      this.progressDataTeamValueEvent.emit(this._currentTeamValueState);
      console.debug("updata state value: ", this._currentTeamValueState.TeamValueType);
    }
    else if (num == 3) {
      this._currentTeamValueState.TeamValueType = ProgressDataTeamValueType.Recruitment
      this.progressDataTeamValueEvent.emit(this._currentTeamValueState);
      console.debug("updata state value ", this._currentTeamValueState.TeamValueType);
    }
    else {
      console.debug("button error");
    }
  }

  //#endregion event trigger


}
