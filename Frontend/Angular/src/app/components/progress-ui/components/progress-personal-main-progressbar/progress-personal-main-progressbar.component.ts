import { Component, OnInit, Input } from '@angular/core';
import { ProgressPersonalData } from '@allianzSND/progress';
import { ProgressService } from '@allianzSND/progress';
import { Language } from '@allianzSND/core';


@Component({
  selector: 'snd-progress-personal-main-progressbar',
  templateUrl: './progress-personal-main-progressbar.component.html',
  styleUrls: ['./progress-personal-main-progressbar.component.scss']
})


export class ProgressPersonalMainProgressbarComponent implements OnInit {

  private _totalActualValue: number = 0;

  public ShowTotalActualValue: string = "--";
  public ShowTotalPlan: string = "--";

  public Percentages: number = 0;
  public BarPercentagesLength: number = 0;
  private _maxLength: number = 1.5;
  private _maxBase: number = 150;
  public Language = new Language();


  constructor(
    private progressService: ProgressService
  ) { }

  ngOnInit() { }

  //#region getter setter (input output)

  //activity
  private _personalActivitiesData: ProgressPersonalData;
  @Input()
  set PersonalActivitiesData(value: ProgressPersonalData) {
    this._personalActivitiesData = value;
    let data = this._personalActivitiesData;
    if(data != undefined) {
      this._totalActualValue = data.FYFC;
      this.ShowTotalActualValue = this.progressService.ShowDesh(data.FYFC);
    }
  }

  get PersonalActivitiesData() {
    return this._personalActivitiesData;
  }


  //goal/plan activity
  private _personalActivitiesGoalPlanData: ProgressPersonalData;
  @Input()
  set PersonalActivitiesGoalPlanData(value: ProgressPersonalData) {
    this._personalActivitiesGoalPlanData = new ProgressPersonalData();
    this._personalActivitiesGoalPlanData = value;
    let data = this._personalActivitiesGoalPlanData;
    if(data != undefined) {
      let totalPlan = data.FYFC;
      let maxLength = this._maxLength;
      let maxBase = this._maxBase;
      let totalActual = this._totalActualValue;

      this.ShowTotalPlan = this.progressService.ShowDesh(totalPlan);
      this.Percentages = this.progressService.GetPercentage(this._totalActualValue, totalPlan);
      this.BarPercentagesLength = this.progressService.GetPercentageLength(totalActual, totalPlan, maxLength, maxBase);
    }
  }

  get PersonalActivitiesGoalPlanData() {
    return this._personalActivitiesGoalPlanData;
  }

  //#endregion getter setter (input output)

}
