import { Component, OnInit, Input, ErrorHandler,Output,EventEmitter } from '@angular/core';
import { TranslateService, Language, LoginInfo, DefaultLoginMgr, APPError, AppRouter } from '@allianzSND/core';
import { UiInformationBtnComponent } from '@allianzSND/ui'
import { ProgressDirectIndirectData } from '@allianzSND/progress';
import { ProgressService } from '@allianzSND/progress';
import { ROLE } from '@allianzSND/goal';
import { NotificationUtils } from '@allianzSND/notification';


@Component({
  selector: 'snd-progress-head-table',
  templateUrl: './progress-head-table.component.html',
  styleUrls: ['./progress-head-table.component.scss']
})

export class ProgressHeadTableComponent implements OnInit {

  //tableHeadData = ['Goal', 'Forecast','Actual', 'Shortfall'];
  public TableHeadData = [];
  public StyleObj = new Array<string>();
  public Language: Language;
  public IsCAO = false;
  private _currentRole: ROLE = ROLE.ZONEHEAD;
  //public contentObj: ProgressHeadContentClass;
  //public contentInfoObj: InfoContentClass;

  constructor(private router: AppRouter,
    private progressService: ProgressService,
    private notificationUtils: NotificationUtils,
    private translateService: TranslateService,
    private loginMgr: DefaultLoginMgr,
    private errorHandler: ErrorHandler) {
    //this.contentObj = new ProgressHeadContentClass(this.translateService);
    //this.contentInfoObj = new InfoContentClass(this.translateService);

    this.Language = new Language();
    this._setTranslateVariable();

    //check identity
    this._CheckIsCAOOrNot();
    this._InitTableHeadDataByIdentity(this._currentRole);
  }

  ngOnInit() { }

  //#region  setter getter (input output)

  //team indirect (zone head)
  private _teamIndirectDataList: Array<ProgressDirectIndirectData> = new Array<ProgressDirectIndirectData>();
  @Input()
  set TeamIndirectDataList(value: Array<ProgressDirectIndirectData>) {
    this.StyleObj = new Array<string>();

    this._teamIndirectDataList = value;
    let data = this._teamIndirectDataList;
    console.debug("hey we need check this: ", this._teamIndirectDataList);

    if (data.length != 0) {
      for (let i = 0; i < data.length; i++) {
        let style = this._GetForecastStyle(data[i].Forecast, data[i].Goal);
        this.StyleObj.push(style);
      }
    }
  }

  get TeamIndirectDataList() {
    return this._teamIndirectDataList;
  }

  //#endregion setter getter (input output)

  //#region ui function

  //info click
  @Output() onClick = new EventEmitter();
  clickInfo(){
    this.onClick.emit()
  }



  //scroll page to top 
  private _PageScrollToTop() {
    setTimeout(() => {
      let scrollPage = document.querySelector('.progress-inner-layout-block .ui-page-content');
      if (scrollPage != null) {
        scrollPage.scrollTop = 0;
      }
    }, 500);
  }

  //#endregion ui function

  //#region function

  public routeToInnerPage(num: number) {

    //scroll top
    this._PageScrollToTop();

    if (this.notificationUtils.checkNetworkBeforeAction()) {
      let agentIdObj = this.TeamIndirectDataList[num];
      console.debug("hey now number is : ", agentIdObj);

      this.progressService.AddDrillDownAgentIdObj(agentIdObj);
      this.router.navigate("ProgressInner");
    }
  }

  public OrderEvent(eventObj: any) {

    //click goal
    if (eventObj.index == 1) {
      if (eventObj.event == 0) {
        //do nothing
      }
      else if (eventObj.event == 1) {
        //descending
        this._orderItBy("descending", "Goal");
        console.debug("goal 1");
      }
      else if (eventObj.event == 2) {
        //ascending
        this._orderItBy("ascending", "Goal");
        console.debug("goal 2");
      }
    }

    //click forecast
    if (eventObj.index == 2) {
      if (eventObj.event == 0) {
        //do nothing
      }
      else if (eventObj.event == 1) {
        //descending
        this._orderItBy("descending", "Forecast");
        console.debug("forecast 1");
      }
      else if (eventObj.event == 2) {
        //ascending
        this._orderItBy("ascending", "Forecast");
        console.debug("forecast 2");
      }
    }

    //click actual
    if (eventObj.index == 3) {
      if (eventObj.event == 0) {
        //do nothing
      }
      else if (eventObj.event == 1) {
        //descending
        this._orderItBy("descending", "Actual");
        console.debug("actual 1");
      }
      else if (eventObj.event == 2) {
        //ascending
        this._orderItBy("ascending", "Actual");
        console.debug("actual 2");
      }
    }

    //click shortfall
    if (eventObj.index == 4) {
      if (eventObj.event == 0) {
        //do nothing
      }
      else if (eventObj.event == 1) {
        //descending
        this._orderItBy("descending", "Shortfall");
        console.debug("sortfall 1");
      }
      else if (eventObj.event == 2) {
        //ascending
        this._orderItBy("ascending", "Shortfall");
        console.debug("sortfall 2");
      }
    }
  }


  private _orderItBy(orderByState: string, orderTarget: string) {
    this._teamIndirectDataList.sort((a, b) => {

      if (orderByState == "descending") {
        if (orderTarget == "Goal") {
          if (a.Goal > b.Goal) return -1;
          if (a.Goal < b.Goal) return 1;
        }
        else if (orderTarget = "Forecast") {
          if (a.Forecast > b.Forecast) return -1;
          if (a.Forecast < b.Forecast) return 1;
        }
        else if (orderTarget = "Actual") {
          if (a.Actual > b.Actual) return -1;
          if (a.Actual < b.Actual) return 1;
        }
        else if (orderTarget = "Shortfall") {
          if (a.Shortfall > b.Shortfall) return -1;
          if (a.Shortfall < b.Shortfall) return 1;
        }
      }
      else if (orderByState == "ascending") {
        if (orderTarget == "Goal") {
          if (a.Goal > b.Goal) return 1;
          if (a.Goal < b.Goal) return -1;
        }
        else if (orderTarget == "Forecast") {
          if (a.Forecast > b.Forecast) return 1;
          if (a.Forecast < b.Forecast) return -1;
        }
        else if (orderTarget == "Actual") {
          if (a.Actual > b.Actual) return 1;
          if (a.Actual < b.Actual) return -1;
        }
        else if (orderTarget == "Shortfall") {
          if (a.Shortfall > b.Shortfall) return 1;
          if (a.Shortfall < b.Shortfall) return -1;
        }
      }
      return 0;
    });
  }

  private _CheckIsCAOOrNot() {

    try {
      this.loginMgr.getLoginInfo().subscribe((info: LoginInfo) => {
        console.log('check permission subscribe:', info);
        if (info) {
          let identity = info.AppUseMode[0];
          console.log("get AppUseMode：", identity);
          let role = this._ConvertIdentityToRolesType(identity);
          this.IsCAO = (role == ROLE.CAO) ? true : false;
          this._currentRole = role;
        }
        else {
          throw "info is null or undefined ";
        }
      });
    }
    catch (error) {
      this.errorHandler.handleError(new APPError('F00217', 'check head loginMgr CAO(Supervisor) or ZONEHEAD(Manager) fail!' + error.message));
    }
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

  private _InitTableHeadDataByIdentity(role: ROLE) {
    if (role == ROLE.ZONEHEAD) {
      this.TableHeadData = [
        this._translateWithVariable(this.Language.goal),
        this._translateWithVariable(this.Language.forecast),
        this._translateWithVariable(this.Language.actual),
        this._translateWithVariable(this.Language.shortfall)
      ];
    }
    else if (role == ROLE.CAO) {
      this.TableHeadData = [
        this._translateWithVariable(this.Language.goal),
        this._translateWithVariable(this.Language.actual),
        this._translateWithVariable(this.Language.shortfall)
      ];
    }
  }

  //style1: blue, style2: red, style3: grey, style4: normal black
  private _GetForecastStyle(forecastNum: number, Goal: number): string {
    if (forecastNum == -1 || Goal == -1) return "style4";
    return (forecastNum < Goal) ? "style2" : "style4";
  }

  public ShowDesh(num: number): string {
    if(num) {
      return (num <= -1) ? "--" : num.toString();
    }
    return "--";
  }


  //#endregion function

  //#region translate

  private _translateVariable = null;
  private _setTranslateVariable() {

    this._translateVariable = {
      // "gratsPoints": 20,
    }
  }

  private _translateWithVariable(mappingID: string) {
    return this.translateService.translateWithVariable(mappingID, this._translateVariable);
  }

  //#endregion

}
