import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'snd-goal-ui-mandate',
  templateUrl: './goal-ui-mandate.component.html',
  styleUrls: ['./goal-ui-mandate.component.scss']
})
export class GoalUiMandateComponent implements OnInit {

  @Input() isHasCardStyle: boolean = false;//control layout style
  @Input() isJustMobileStyle: boolean = false; //true:大小版都是垂直條列樣式
  constructor() { }

  ngOnInit() {
  }

}
