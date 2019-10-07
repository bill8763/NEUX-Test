import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'snd-goal-ui-data-card1',
  templateUrl: './goal-ui-data-card1.component.html',
  styleUrls: ['./goal-ui-data-card1.component.scss']
})
export class GoalUiDataCard1Component implements OnInit {

  // left area
  @Input() imgUrl: string = ''; // icon img src
  @Input() titleMain: string = '' // left title main
  @Input() numUnitLeft1: string = '' // num left 1
  @Input() textUnitLeft1: string = '' // text left 1
  @Input() numUnitLeft2: string = '' // num left2 
  @Input() textUniLeft2: string = '' // text left 2
  @Input() subTitle: string= '' // subtitle right
  //right area
  @Input() titleText1: string = '' //right title row1
  @Input() descText1: string= ''//right desc row1
  @Input() descColor1: string =''; // right desc color row1
  @Input() titleText2: string = '' //right title row2
  @Input() descText2: string= "" //right desc row2
  @Input() descColor2: string =''; // right desc color row2
  //btm area left
  @Input() titleTable1: string = ''//btm title 1
  @Input() descTable1: string = ''//btm desc 1
  @Input() titleTable2: string = ''//btm title 2
  @Input() descTable2: string = ''//btm desc 2
  @Input() titleTable3: string = ''//btm title 3
  @Input() descTable3: string = ''//btm desc 3

  public windowWidth;


  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    // console.warn('Width: ', this.windowWidth);
  }

  ngOnInit() {
    this.windowWidth = window.innerWidth;

  }

}
