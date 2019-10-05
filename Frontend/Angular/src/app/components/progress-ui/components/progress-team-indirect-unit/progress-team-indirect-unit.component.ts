import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ProgressDirectIndirectData } from '@allianzSND/progress';
import { ProgressService } from '@allianzSND/progress';
import { TranslateService, Language, AppRouter } from '@allianzSND/core';
import { NotificationUtils } from '@allianzSND/notification';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'snd-progress-team-indirect-unit',
  templateUrl: './progress-team-indirect-unit.component.html',
  styleUrls: ['./progress-team-indirect-unit.component.scss']
})
export class ProgressTeamIndirectUnitComponent implements OnInit {

  //#region ui
  @Input() inputScrollContent;
  @Output() onClick = new EventEmitter();
  infoClick(){
    this.onClick.emit();
  } 


  //#endregion ui


  //function for test
  consoleEvent(string, number) {
    console.log(string, number);
  }


  //scroll page to top 
  private _PageScrollToTop() {
    console.log('in indirect unit scroll');
    setTimeout(() => {
      let scrollPage = document.querySelector('.progress-inner-layout-block .ui-page-content');
      if (scrollPage != null) {
        scrollPage.scrollTop = 0;
      }
    }, 500);
  }


  //#endregion

  // table heade data
  public TableHeadData = [];//'Goal','Forecast','Actual','Shortfall'
  public IsShowIndirect = true;

  //public ContentObj: ProgressTeamIndirectContentClass;
  //public ContentInfoObj: InfoContentClass;

  public Language: Language;

  constructor(
    private router: AppRouter,
    private progressService: ProgressService,
    private notificationUtils: NotificationUtils,
    private translateService: TranslateService,
    private Router: Router) {
    //this.ContentObj = new ProgressTeamIndirectContentClass(this.translateService);
    //this.ContentInfoObj = new InfoContentClass(this.translateService);

    this.Language = new Language();
    this._setTranslateVariable();

    this.TableHeadData = [
      this._translateWithVariable(this.Language.goal),
      this._translateWithVariable(this.Language.forecast),
      this._translateWithVariable(this.Language.actual),
      this._translateWithVariable(this.Language.shortfall)
    ];
  }

  ngOnInit() { }


  //#region getter setter (input output)

  private _teamIndirectDataList: Array<ProgressDirectIndirectData> = new Array<ProgressDirectIndirectData>();
  @Input()
  set TeamIndirectDataList(value: Array<ProgressDirectIndirectData>) {
    this._teamIndirectDataList = new Array<ProgressDirectIndirectData>();
    this._teamIndirectDataList = value;
    console.debug("i got _teamIndirectDataList: ", this._teamIndirectDataList);

    if (this._teamIndirectDataList != undefined)
      this.IsShowIndirect = (this._teamIndirectDataList.length == 0) ? false : true;

  }

  get TeamIndirectDataList() {
    return this._teamIndirectDataList;
  }

  //#endregion getter setter (input output)

  //#region function

  public OrderEvent(eventObj: any) {
    //click goal
    if (eventObj.index == 1) {
      if (eventObj.event == 0) {
        //do nothing
      }
      else if (eventObj.event == 1) {
        //descending
        this._OrderItBy("descending", "Goal");
        console.debug("goal 1");
      }
      else if (eventObj.event == 2) {
        //ascending
        this._OrderItBy("ascending", "Goal");
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
        this._OrderItBy("descending", "Forecast");
        console.debug("forecast 1");
      }
      else if (eventObj.event == 2) {
        //ascending
        this._OrderItBy("ascending", "Forecast");
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
        this._OrderItBy("descending", "Actual");
        console.debug("actual 1");
      }
      else if (eventObj.event == 2) {
        //ascending
        this._OrderItBy("ascending", "Actual");
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
        this._OrderItBy("descending", "Shortfall");
        console.debug("sortfall 1");
      }
      else if (eventObj.event == 2) {
        //ascending
        this._OrderItBy("ascending", "Shortfall");
        console.debug("sortfall 2");
      }
    }
  }


  private _OrderItBy(orderByState: string, orderTarget: string) {
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

  // //style1: blue, style2: red, style3: grey, style4: normal black
  // public GetForecastStyle(forecastNum: number, Goal: number): string {
  //   return (forecastNum < Goal) ? "style2" : "style4";
  // }

  // public ShowDesh(num: number): string {
  //   if (num) {
  //     return (num <= -1) ? "--" : num.toString();
  //   }
  //   return "--";
  // }


  public ShowDesh(num: number): string {
    if(num != NaN) {
      return( num == -1) ? "--" : num.toString();
    }
  }

  //style1: blue, style2: red, style3: grey, style4: normal black
  public GetForecastStyle(forecastNum: number, Goal: number): string {
    if(forecastNum == -1 || Goal == -1) return "style4";
    return (forecastNum < Goal) ? "style2" : "style4";
  }

  public RouteToInnerPage(num: number) {

    if (this.notificationUtils.checkNetworkBeforeAction()) {
      let agentIdObj = this.TeamIndirectDataList[num];
      console.debug("hey now number is : ", agentIdObj);

      //check can drill down?
      if (agentIdObj.Drilldown == true) {
        this._PageScrollToTop();
        this.progressService.AddDrillDownAgentIdObj(agentIdObj);
        this.router.navigate("ProgressInner");
        
      }
    }
  }

  //#endregion function

  //#region  translate


  private _translateVariable = null;
  private _setTranslateVariable() {
    this._translateVariable = {};
  }

  private _translateWithVariable(mappingID: string) {
    return this.translateService.translateWithVariable(mappingID, this._translateVariable);
  }

  //#endregion

}
