import { Component, HostListener, Input, OnInit, Optional, Inject, OnDestroy } from '@angular/core';
import { TABLETIELESTYLETYPE, UiInformationBtnComponent, ModalManager } from '@allianzSND/ui';
import { GoalSettingService } from '@allianzSND/goal';
import { ROLE, AgencyPlanStoreService, AGENCY_STATE, AgencyPlanAgentInfo, GoalSettingStepData, GoalSettingGoalStatus, GoalSettingYearConfig, ApproveInfo, AgencyPlanStatus } from '@allianzSND/goal';
import { Language, TranslateService, PERFORMANCETYPE, SuccessStatus, AppRouter } from '@allianzSND/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'snd-goal-agency-drill-down',
  templateUrl: './goal-agency-drill-down.component.html',
  styleUrls: ['./goal-agency-drill-down.component.scss']
})
export class GoalAgencyDrillDownComponent implements OnInit, OnDestroy {

  constructor(
    private goalSettingService: GoalSettingService,
    private agencyPlanStoreService: AgencyPlanStoreService,
    private translateService: TranslateService,
    private appRouter: AppRouter,
    private modalManager: ModalManager
  ) { }

  ngOnDestroy(): void {
    if (this._getCurrentAgencyDetailSubscribe) {
      this._getCurrentAgencyDetailSubscribe.unsubscribe();
    }
  }

  /* for ui */

  public windowWidth = window.innerWidth;
  // table headData


  //title 
  public drillDownTitle: string;

  //team
  public teamTranslateVariable = null;
  public isTeamDataDone: boolean = false;
  public teamAllStepData: GoalSettingStepData = null;
  private _teamYearStatus: GoalSettingGoalStatus = null;
  //end of team

  public personalAllStepData: GoalSettingStepData = null;
  private _personalYearConfig: GoalSettingYearConfig = null;
  private _personalYearStatus: GoalSettingGoalStatus = null;
  public personalApproveStauts: string;
  public isAllDataDone: boolean = false;


  //personal
  public personalTranslateVariable = null;
  public isPersonalDataDone: boolean = false;
  //end of personal


  //comment area
  public commentTextArea: string = '';
  public isDisabledButton: boolean = false;
  //end of text area


  private _agencyDetail: AgencyPlanAgentInfo = null;
  private _getCurrentAgencyDetailSubscribe: Subscription = null;

  public language = new Language();


  ngOnInit() {


    this.windowWidth = window.innerWidth;

    this._getCurrentAgencyDetailSubscribe = this.agencyPlanStoreService.getCurrentAgencyDetail().subscribe((resp) => {

      console.warn("this._agencyDetail: ", resp);

      this._agencyDetail = resp;

      this.isTeamDataDone = false;
      this.isPersonalDataDone = false;
      setTimeout(() => {
        this.modalManager.toggleLoading(true);
      });


      //personal
      this.goalSettingService.getOverviewData(PERFORMANCETYPE.PERSONAL, this._agencyDetail.DataYear, this._agencyDetail.AgentID).subscribe(personAllStepData => {

        console.warn("personAllStepData: ", JSON.parse(JSON.stringify(personAllStepData)));

        this.personalAllStepData = personAllStepData;
        /*  start init yearConfig && yearStatus */
        this._personalYearConfig = this.personalAllStepData.YearConfig;
        this._personalYearStatus = this.personalAllStepData.GoalStatus;
        /*  end of init yearConfig && yearStatus */

        this.personalApproveStauts = this._personalYearStatus.ApproveStatus;
        if (this.personalApproveStauts == 'P') {
          this.drillDownTitle = this.translateService.translate('Comment');
        }
        else {
          this.drillDownTitle = this._agencyDetail.AgentName;
        }

        this._setTranslateVariable(PERFORMANCETYPE.PERSONAL);

        this.isPersonalDataDone = true;

        this._judgeIsAllDataDone();
      });
      //end of personal



      //team

      if (this._agencyDetail.AppUseMode == ROLE.AGENTLEADER) {
        this.goalSettingService.getOverviewData(PERFORMANCETYPE.TEAM, this._agencyDetail.DataYear, this._agencyDetail.AgentID).subscribe(teamAllStepData => {

          console.warn("teamAllStepData: ", JSON.parse(JSON.stringify(teamAllStepData)));

          this.teamAllStepData = teamAllStepData;
          /*  start init yearConfig && yearStatus */
          this._teamYearStatus = this.teamAllStepData.GoalStatus;
          /*  end of init yearConfig && yearStatus */

          this._setTranslateVariable(PERFORMANCETYPE.TEAM);

          this.isTeamDataDone = true;

          this._judgeIsAllDataDone();
        });
      }
      //end of team

    });

  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  //控制table title樣式

  TABLETIELE_STYLE_4 = TABLETIELESTYLETYPE.STYLE_4;


  /* end of for ui */

  submit(isApprove: boolean) {
    this._sendRequest(new ApproveInfo(this._agencyDetail.DataYear, this._agencyDetail.AgentID, isApprove, this.commentTextArea));
  }

  private async _sendRequest(approveInfo: ApproveInfo) {

    this.isDisabledButton = true;
    this.modalManager.toggleLoading(true);
    // this.isLoadingBoxOpen = true;
    console.warn("approveInfo: ", approveInfo);
    let resp: SuccessStatus = await this.goalSettingService.pushApproveGoal(approveInfo);
    console.warn("pushApproveGoal resp: ", resp);

    this.isDisabledButton = false;
    this.modalManager.toggleLoading(false);

    if (resp && resp.isSuccess) {
      this.goalSettingService.saveFeedbackState = true;
      this._goToLastPage();
      if (approveInfo.IsApprove) {
        this.agencyPlanStoreService.setState(new AgencyPlanStatus(AGENCY_STATE.ACCEPT, approveInfo.AgentID));
      } else {
        this.agencyPlanStoreService.setState(new AgencyPlanStatus(AGENCY_STATE.REJECT, approveInfo.AgentID));
      }
    }

    else {
      throw new Error("pushApproveGoal fail in drillDown page");
    }
  }

  private _goToLastPage() {
    this.appRouter.back();
  }

  private _setTranslateVariable(performanceType: PERFORMANCETYPE) {
    let variable = {
      "performanceType": performanceType,
      "name": this._agencyDetail.AgentName,
      "dataYear": this._agencyDetail.DataYear,
    }
    if (performanceType == PERFORMANCETYPE.TEAM) {
      this.teamTranslateVariable = variable;
    }

    else if (performanceType == PERFORMANCETYPE.PERSONAL) {
      this.personalTranslateVariable = variable;
    }

  }


  private _judgeIsAllDataDone() {
    if (this._agencyDetail.AppUseMode === ROLE.AGENT) {
      this.isAllDataDone = this.isPersonalDataDone;
    }
    else {
      this.isAllDataDone = this.isPersonalDataDone && this.isTeamDataDone;
    }
    this.modalManager.toggleLoading(!this.isAllDataDone);
  }



}
