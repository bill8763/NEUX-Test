import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';
import {  Language } from '@allianzSND/core';

@Component({
  selector: 'snd-goal-setting-step-modal',
  templateUrl: './goal-setting-step-modal.component.html',
  styleUrls: ['./goal-setting-step-modal.component.scss']
})
export class GoalSettingStepModalComponent implements OnInit {

  public language: Language;
  constructor() {
    this.language = new Language();
  }

  private _isPopOpenInfoStep3 = false;
  @Input() 
  get isPopOpenInfoStep3(){
    return this._isPopOpenInfoStep3;
  }
  set isPopOpenInfoStep3(val){
    this._isPopOpenInfoStep3 = val;
    this.isPopOpenInfoStep3Change.emit(val);
  }
  @Output() isPopOpenInfoStep3Change = new EventEmitter();

  ngOnInit() {
  }

}
