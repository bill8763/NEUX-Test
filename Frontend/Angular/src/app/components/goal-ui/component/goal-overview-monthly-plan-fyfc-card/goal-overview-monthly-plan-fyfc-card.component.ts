import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TABLETIELESTYLETYPE } from '@allianzSND/ui';
import { Language } from '@allianzSND/core';
import { GoalSettingStepData, MonthlyPlanFYFCData } from '@allianzSND/goal';

@Component({
  selector: 'snd-goal-overview-monthly-plan-fyfc-card',
  templateUrl: './goal-overview-monthly-plan-fyfc-card.component.html',
  styleUrls: ['./goal-overview-monthly-plan-fyfc-card.component.scss']
})
export class GoalOverviewMonthlyPlanFyfcCardComponent implements OnInit {

  TABLETIELE_STYLE_5 = TABLETIELESTYLETYPE.STYLE_5;

  @Input() title: string = '';
  @Input() canEdit: boolean = false;
  @Input()
  public get allStepData() {
    return this._allStepData;
  }
  public set allStepData(value) {
    if (value) {
      this._allStepData = value;
      this.monthPlanActualList = this._allStepData.Step4.MonthList;
    }
  }
  @Output() editPlanFYFC: EventEmitter<any> = new EventEmitter();
  public monthPlanActualList: Array<MonthlyPlanFYFCData> = [];
  public language = new Language();
  private _allStepData: GoalSettingStepData;


  constructor() { }

  ngOnInit() {
  }

  onEditPlanFYFC() {
    this.editPlanFYFC.emit();
  }

}
