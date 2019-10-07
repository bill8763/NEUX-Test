import { Component, OnInit, Input, Output, EventEmitter, ErrorHandler,ElementRef,AfterViewInit } from '@angular/core';
import { UiInformationBtnComponent } from '@allianzSND/ui'
import { PersonalDataTimeBase, ProgressTeamMainContentClass, InfoContentClass, ProgressService } from '@allianzSND/progress';
import { ProgressDataTeamValueType } from "@allianzSND/progress";
import { TeamDataState } from "@allianzSND/progress";
import { ProgressTeamData } from '@allianzSND/progress';
import { TranslateService, Language, DefaultLoginMgr, LoginInfo, APPError } from '@allianzSND/core';
import { ROLE } from '@allianzSND/goal';

@Component({
  selector: 'snd-progress-team-table-card',
  templateUrl: './progress-team-table-card.component.html',
  styleUrls: ['./progress-team-table-card.component.scss']
})

export class ProgressTeamTableCardComponent implements OnInit, AfterViewInit {

  // ui region

  // info click
  @Output() onClick = new EventEmitter();
  clickInfo(){
    this.onClick.emit();
  }

  // end of ui region
  
  public ListItemName = new Array<any>();
  public StyleObj = new Array<any>();

  public IsCAOOrZoneHead: boolean = false;
  public Title: string = "";
  private _currentRole: ROLE = ROLE.AGENT;

  //public ContentObj: ProgressTeamMainContentClass;
  ///public ContentInfoObj: InfoContentClass;
  public Language: Language;

  constructor(
    private translateService: TranslateService,
    private progressService: ProgressService,
    private loginMgr: DefaultLoginMgr,
    private errorHandler: ErrorHandler,
    protected elementRef: ElementRef) {
    //this.ContentObj = new ProgressTeamMainContentClass(this.translateService);
    //this.ContentInfoObj = new InfoContentClass(this.translateService);

    this.Language = new Language();
    this._setTranslateVariable();

    this.ListItemName = [
      {
        Name: this._translateWithVariable(this.Language.goal),
        FYFC: "--",
        ANP: "--",
        Manpower: "--",
        Recruitment: "--",
      },
      {
        Name: this._translateWithVariable(this.Language.forecast),
        FYFC: "--",
        ANP: "--",
        Manpower: "--",
        Recruitment: "--",
      },
      {
        Name: this._translateWithVariable(this.Language.actual),
        FYFC: "--",
        ANP: "--",
        Manpower: "--",
        Recruitment: "--",
      },
      {
        Name: this._translateWithVariable(this.Language.shortfall),
        FYFC: "--",
        ANP: "--",
        Manpower: "--",
        Recruitment: "--",
      },
    ];

    this.StyleObj = [
      { style: "style4" },
      { style: "style4" },
      { style: "style4" },
      { style: "style4" },
    ]

    this._CheckIsCAOOrNot();
    this._ShowTitleByIdentity(this._currentRole);

    console.debug("test this is will be trigger one? ");

  }

  ngOnInit() { }

  ngAfterViewInit(){
    // this.scrollContent = document.querySelector('.progress-team-view-block .infiniti-scroll');
    // console.log('scrollContent team table',this.scrollContent);
  }

  //#region getter setter (input output)

  private _teamMainDataList: Array<ProgressTeamData> = new Array<ProgressTeamData>();
  @Input()
  set TeamMainDataList(value: Array<ProgressTeamData>) {

    this._teamMainDataList = new Array<ProgressTeamData>();
    this._teamMainDataList = value;

    console.debug("team card value: ", value);
    console.debug(" input team card TeamMainDataList: ", this._teamMainDataList);

    if (this._teamMainDataList.length != 0) {

      //new
      let target = ["FYFC","ANP","Manpower","Recruitment"];
      let newDataArr:Array<ProgressTeamData> = new Array<ProgressTeamData>(); 

      for(let i = 0 ; i < this._teamMainDataList.length; i++) {
        let tmp: ProgressTeamData = new ProgressTeamData();
        tmp = this._teamMainDataList.filter(x => x.DataType == target[i])[0];
        newDataArr.push(tmp);
      }

      console.debug("newDataArr: ", newDataArr);

      // let s1 = this._GetForecastStyle(9999, 0);
      // let s2 = this._GetForecastStyle(0, 9999);
      // let s3 = this._GetForecastStyle(-1, 9999);
      // let s4 = this._GetForecastStyle(9999, -1);
      // let s5 = this._GetForecastStyle(-1, -1);
      // let s6 = this._GetForecastStyle(9999, 9999);

      // console.debug("s1: ", s1);
      // console.debug("s2: ", s2);
      // console.debug("s3: ", s3);
      // console.debug("s4: ", s4);
      // console.debug("s5: ", s5);
      // console.debug("s6: ", s6);

      // let t1 = this._ShowDesh(0);
      // let t2 = this._ShowDesh(-1);
      // console.debug("t1: ", t1);
      // console.debug("t2: ", t2);

      this.StyleObj = [
        { style: this._GetForecastStyle(newDataArr[0].Forecast, newDataArr[0].Goal) },
        { style: this._GetForecastStyle(newDataArr[1].Forecast, newDataArr[1].Goal) },
        { style: this._GetForecastStyle(newDataArr[2].Forecast, newDataArr[2].Goal) },
        { style: this._GetForecastStyle(newDataArr[3].Forecast, newDataArr[3].Goal) }
      ]

      this.ListItemName =
        [
          {
            Name: this._translateWithVariable(this.Language.goal),
            FYFC: this._ShowDesh(newDataArr[0].Goal),
            ANP: this._ShowDesh(newDataArr[1].Goal),
            Manpower: this._ShowDesh(newDataArr[2].Goal),
            Recruitment: this._ShowDesh(newDataArr[3].Goal),
          },
          {
            Name: this._translateWithVariable(this.Language.forecast),
            FYFC: this._ShowDesh(newDataArr[0].Forecast),
            ANP: this._ShowDesh(newDataArr[1].Forecast),
            Manpower: this._ShowDesh(newDataArr[2].Forecast),
            Recruitment: this._ShowDesh(newDataArr[3].Forecast)
          },
          {
            Name: this._translateWithVariable(this.Language.actual),
            FYFC: this._ShowDesh(newDataArr[0].Actual),
            ANP: this._ShowDesh(newDataArr[1].Actual),
            Manpower: this._ShowDesh(newDataArr[2].Actual),
            Recruitment: this._ShowDesh(newDataArr[3].Actual),
          },
          {
            Name: this._translateWithVariable(this.Language.shortfall),
            FYFC: this._ShowDesh(newDataArr[0].Shortfall),
            ANP: this._ShowDesh(newDataArr[1].Shortfall),
            Manpower: this._ShowDesh(newDataArr[2].Shortfall),
            Recruitment: this._ShowDesh(newDataArr[3].Shortfall),
          },
        ];
    }
  }

  get TeamMainDataList() {
    return this._teamMainDataList;
  }

  //#endregion getter setter (input output)

  //#region function

  //style1: blue, style2: red, style3: grey, style4: normal black
  private _GetForecastStyle(forecastNum: number, Goal: number): string {

    if(forecastNum == -1 || Goal == -1) return "style4";
    return (forecastNum < Goal) ? "style2" : "style4";
  }

  //old
  // private _ShowDesh(num: number): string {
  //   if(num) {
  //     return (num <= -1) ? "--" : num.toString();
  //   }
  //   return "--";
  // }

  private _ShowDesh(num: number): string {
    if(num != NaN) {
      return( num == -1) ? "--" : num.toString();
    }
  }

  private _CheckIsCAOOrNot() {

    console.debug("test this table func is will be trigger one? ");

    this.progressService.GetCurrentRole().subscribe(resp => {
      console.debug("hey i got this resp: ", resp);
      let role = resp;
      this.IsCAOOrZoneHead = (role == ROLE.CAO || role == ROLE.ZONEHEAD) ? true : false;
      this._currentRole = role;
    });


    // try {
    //   this.loginMgr.getLoginInfo().subscribe((info: LoginInfo) => {
    //     console.log('check permission subscribe:', info);
    //     if (info) {
    //       let identity = info.AppUseMode[0];
    //       console.log("get AppUseMode：", identity);
    //       let role = this._ConvertIdentityToRolesType(identity);
    //       this.IsCAOOrZoneHead = (role == ROLE.CAO || role == ROLE.ZONEHEAD) ? true : false;
    //       this._currentRole = role;
    //     }
    //     else {
    //       throw "info is null or undefined ";
    //     }
    //   });
    // }
    // catch (error) {
    //   this.errorHandler.handleError(new APPError('F00216', 'check team card loginMgr CAO(Supervisor) or ZONEHEAD(Manager) fail!' + error.message));
    // }
  }

  private _ConvertIdentityToRolesType(identity: string): ROLE {
    //AG AL Manager Supervisor
    switch (identity) {
      case "AG":
        return ROLE.AGENT;
      case "AL":
        return ROLE.AGENTLEADER;
      case "Manager":
        return ROLE.ZONEHEAD;
      case "Supervisor":
        return ROLE.CAO;
    }
  }

  private _ShowTitleByIdentity(role: ROLE) {
    let translate = (role == ROLE.CAO || role == ROLE.ZONEHEAD) ? this.Language.allZoneTitle : this.Language.agencyTitle;
    this.Title = this._translateWithVariable(translate);
  }

  //#endregion function

  //#region translate

  private _translateVariable = null;
  private _setTranslateVariable() {
    this._translateVariable = {}
  }

  private _translateWithVariable(mappingID: string) {
    return this.translateService.translateWithVariable(mappingID, this._translateVariable);
  }

  //#endregion

}
