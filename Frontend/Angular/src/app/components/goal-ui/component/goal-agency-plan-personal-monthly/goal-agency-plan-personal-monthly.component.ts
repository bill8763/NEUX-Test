import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Language } from '@allianzSND/core';
import { AgencyPlanGoalExpected } from '@allianzSND/goal';

@Component({
  selector: 'snd-goal-agency-plan-personal-monthly',
  templateUrl: './goal-agency-plan-personal-monthly.component.html',
  styleUrls: ['./goal-agency-plan-personal-monthly.component.scss']
})
export class GoalAgencyPlanPersonalMonthlyComponent implements OnInit {
  @Input() styleType: string;
  @Input()
  get recruitmentData() {
    return this._recruitmentData;
  }
  set recruitmentData(recruitmentData) {
    this._recruitmentData = recruitmentData;
    console.warn('recruitmentData', this._recruitmentData);
  }
  @Output() onClickEdit = new EventEmitter();

  private _recruitmentData : AgencyPlanGoalExpected;
  public language: Language = new Language();

  constructor() { }

  ngOnInit() {
  }

  onEditClick() {
    console.warn('edit click');
    this.onClickEdit.emit(this.recruitmentData);
  }

}
