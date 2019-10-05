import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'snd-goal-ui-title-desc-list',
  templateUrl: './goal-ui-title-desc-list.component.html',
  styleUrls: ['./goal-ui-title-desc-list.component.scss']
})
export class GoalUiTitleDescListComponent implements OnInit {

  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() imgUrl: string = '';
  // desc attribute
  private _descColor: string = '';
  @Input() 
  set descColor(descColor) {
    this._descColor = descColor;
    this._updateDescColor();
  }
  get descColor() {
    return this._descColor;
  }

  @Input() isDescBold: boolean = true; // if true, desc will become bold
  @Input() descSize: string= 'sm'; // default is 14, 'md' = 20px, 'lg' = 26px
  // title attribute
  @Input() titleColor: string= '';
  @Input() titleSize: string= 'sm'; // default is 14, 'md' = 16px, 'lg' = 20px
  @Input() isTitleBold: boolean = false; 
  @Input() isImgListChild: boolean = false // if true, text will padding left img size
  @Input() isHasDesc: boolean = true;
  @Input() isHasCustContent: boolean = false;

  public styleDescColor: string; 
  public styleDescWeight: string;
  public styleDescSize: string;
  public styleTitleColor: string;
  public styleTitleWeight: string;
  public styleTitleSize: string;
  public styleHasImg: string;
  public styleImgChild: string;


  constructor() { }

  ngOnInit() {
    this.styleHasImg = this.imgUrl ? 'style-has-img': '';
    this.styleImgChild = this.isImgListChild ? 'style-img-child' : '';
    
    // desc style
    this._updateDescColor();
    this.styleDescWeight = this.isDescBold ? 'style-desc-weight-bold' : '';
    this.styleDescSize = 'style-desc-size-'+ this.descSize;
  
     // title style
    this.styleTitleColor = 'style-title-color-'+ this.titleColor; 
    this.styleTitleWeight = this.isTitleBold ? 'style-title-weight-bold' : '';
    this.styleTitleSize = 'style-title-size-'+ this.titleSize;
  }


  private _updateDescColor() {
    this.styleDescColor = 'style-desc-color-'+ this._descColor;
  }

}
