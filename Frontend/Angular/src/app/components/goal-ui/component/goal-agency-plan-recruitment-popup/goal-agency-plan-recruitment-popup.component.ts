import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ValidationResult, Language, NumberUtils, TranslateService, StringUtils } from '@allianzSND/core';
import { AgencyPlanGoalExpected, GoalSettingService } from '@allianzSND/goal';

@Component({
  selector: 'snd-goal-agency-plan-recruitment-popup',
  templateUrl: './goal-agency-plan-recruitment-popup.component.html',
  styleUrls: ['./goal-agency-plan-recruitment-popup.component.scss']
})
export class GoalAgencyPlanRecruitmentPopupComponent implements OnInit {
  @Input()
  get recruitmentObject() {
    return this._recruitmentObject;
  }
  set recruitmentObject(recruitment) {
    if (recruitment) {
      this._recruitmentObject = recruitment.clone();
      console.log('set _recruitmentObject ', this._recruitmentObject);
      this.editRecruitment = this._recruitmentObject.clone();
    }
  }
  @Input()
  set isPopupOpen(isOpen: boolean) {
    if (isOpen) {
      this.resetRecruitment();
    }
  }
  @Output() saveEvent = new EventEmitter();

  private _recruitmentObject: AgencyPlanGoalExpected;
  public editRecruitment: AgencyPlanGoalExpected;
  public language: Language = new Language();
  public isShowResetButton: boolean = false;
  public readonly QLengthRestriction: number = 4;
  public readonly FYFCLengthRestriction: number = 9;
  public readonly ANPLengthRestriction: number = this.FYFCLengthRestriction + 1;
  private readonly _seasonList = ['Q1', 'Q2', 'Q3', 'Q4'];

  constructor(
    private goalSettingService: GoalSettingService
  ) { }

  ngOnInit() {
  }

  public saveRecruitment() {
    // console.warn("saveRecruitment in popup: ", this.editRecruitment);
    this.saveEvent.emit(this._transEmptyValueToZero(this.editRecruitment));
  }

  public valueChange(key: string) {
    console.warn("valueChange in recruitment key: ",key + ' value: ',this.editRecruitment[key]);
  
    this._showResetButton();

    if (this._seasonList.indexOf(key) !== -1) {
      this.editRecruitment.RecruitmentTotal = this.goalSettingService.calculaRecruitmentSum(this.editRecruitment);
    }
    else if(key === 'FYFC') {
      let calANP: string = this.goalSettingService.calculateANPFromFYFC(this.editRecruitment.FYFC, this.editRecruitment.FYFCConvertANPRate).toString();
      this.editRecruitment.ANP = (calANP === 'NaN') ? undefined : calANP;
    }
    else if(key === 'ANP') {
      let calFYFC: string = this.goalSettingService.calculateFYFCFromANP(this.editRecruitment.ANP, this.editRecruitment.FYFCConvertANPRate).toString();
      this.editRecruitment.FYFC = (calFYFC === 'NaN') ? undefined : calFYFC;
    }
  }

  // click reset on recruitment
  public resetRecruitment() {
    this.editRecruitment = this._recruitmentObject.clone();
    console.log('resetRecruitment editRecruitment', this.editRecruitment);
  }

  private _showResetButton() {
    if (!this.isShowResetButton) {
      this.isShowResetButton = true;
    }
  }

  private _transEmptyValueToZero(goalExpected: AgencyPlanGoalExpected): AgencyPlanGoalExpected {
    let returnGoalExpected: AgencyPlanGoalExpected = new AgencyPlanGoalExpected(goalExpected.DataYear);
    returnGoalExpected.FYFC = this.editRecruitment.FYFC || '0';
    returnGoalExpected.ANP = this.editRecruitment.ANP || '0';
    returnGoalExpected.Q1 = this.editRecruitment.Q1 || '0';
    returnGoalExpected.Q2 = this.editRecruitment.Q2 || '0';
    returnGoalExpected.Q3 = this.editRecruitment.Q3 || '0';
    returnGoalExpected.Q4 = this.editRecruitment.Q4 || '0';
    returnGoalExpected.RecruitmentTotal = this.editRecruitment.RecruitmentTotal || 0;
    returnGoalExpected.FYFCConvertANPRate = this.editRecruitment.FYFCConvertANPRate;

    return returnGoalExpected;

  }

}
