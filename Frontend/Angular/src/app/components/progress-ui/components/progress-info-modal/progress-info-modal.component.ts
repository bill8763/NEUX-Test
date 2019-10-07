import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Language } from '@allianzSND/core';
@Component({
  selector: 'snd-progress-info-modal',
  templateUrl: './progress-info-modal.component.html',
  styleUrls: ['./progress-info-modal.component.scss']
})
export class ProgressInfoModalComponent implements OnInit {

  public Language: Language;
  constructor() {
    this.Language = new Language();
  }


// personal 

private _isPopupOpenProgressBarListInfo = false;
@Input()
get isPopupOpenProgressBarListInfo(){
  return this._isPopupOpenProgressBarListInfo;
}
set isPopupOpenProgressBarListInfo(val){
  this._isPopupOpenProgressBarListInfo = val;
  this.isPopupOpenProgressBarListInfoChange.emit(val);
}
@Output() isPopupOpenProgressBarListInfoChange = new EventEmitter();


// lead (head)
private _isPopupOpenHeadTablerInfo = false;
@Input()
get isPopupOpenHeadTablerInfo(){
  return this._isPopupOpenHeadTablerInfo;
}
set isPopupOpenHeadTablerInfo(val){
  this._isPopupOpenHeadTablerInfo = val;
  this.isPopupOpenHeadTablerInfoChange.emit(val);
}
@Output() isPopupOpenHeadTablerInfoChange = new EventEmitter();

// team and lead(head) info 
private _isPopupOpenTableCardInfo = false;
@Input()
get isPopupOpenTableCardInfo(){
  return this._isPopupOpenTableCardInfo;
}
set isPopupOpenTableCardInfo(val){
  this._isPopupOpenTableCardInfo = val;
  this.isPopupOpenTableCardInfoChange.emit(val);
}
@Output() isPopupOpenTableCardInfoChange = new EventEmitter();


// team
private _isPopupOpenInderectInfo = false;
@Input()
get isPopupOpenInderectInfo(){
  return this._isPopupOpenInderectInfo;
}
set isPopupOpenInderectInfo(val){
  this._isPopupOpenInderectInfo = val;
  this.isPopupOpenInderectInfoChange.emit(val);
}
@Output() isPopupOpenInderectInfoChange = new EventEmitter();

private _isPopupOpenDerectInfo = false;
@Input()
get isPopupOpenDerectInfo(){
  return this._isPopupOpenDerectInfo;
}
set isPopupOpenDerectInfo(val){
  this._isPopupOpenDerectInfo = val;
  this.isPopupOpenDerectInfoChange.emit(val);
}
@Output() isPopupOpenDerectInfoChange = new EventEmitter();







ngOnInit() {
}

}
