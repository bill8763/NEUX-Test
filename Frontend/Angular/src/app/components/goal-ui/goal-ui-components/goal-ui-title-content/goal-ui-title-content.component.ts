import { Component, OnInit, Input } from '@angular/core';
import { TranslateService, StringUtils, PERFORMANCETYPE } from '@allianzSND/core';

@Component({
  selector: 'app-goal-ui-title-content',
  templateUrl: './goal-ui-title-content.component.html',
  styleUrls: ['./goal-ui-title-content.component.scss']
})
export class GoalUiTitleContentComponent implements OnInit {

  constructor(
    private translateService: TranslateService
  ) { }

  private _translateVariable = null;
  private _performanceType: string = ''
  @Input() titleText: string;
  @Input() showImg: string;
  @Input() hasBtn = false;


  @Input()
  set translateVariable(translateVariable) {
    if (translateVariable) {
      console.warn("input translateVariable: ", translateVariable);
      this._translateVariable = Object.assign({}, translateVariable);
      this._translateByPerformanceType();
    }
  }
  get translateVariable() {
    return this._translateVariable;
  }


  ngOnInit() {
  }

  private _translateByPerformanceType() {

    let performanceType = this._translateVariable.performanceType;
    if (performanceType === PERFORMANCETYPE.TEAM) {
      this.titleText = this._translateWithVariable('Commitment_Team_Goal_Title');
    }
    else if (performanceType === PERFORMANCETYPE.PERSONAL) {
      this.titleText = this._translateWithVariable('Commitment_Personal_Goal_Title');
    }

  }

  private _translateWithVariable(mappingID: string) {
    return this.translateService.translateWithVariable(mappingID, this._translateVariable);
  }

}
