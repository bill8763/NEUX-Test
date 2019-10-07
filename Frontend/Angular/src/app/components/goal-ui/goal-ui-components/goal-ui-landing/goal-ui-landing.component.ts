import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, style, animate, transition, query, stagger, keyframes } from '@angular/animations';
import { GoalSettingService } from '@allianzSND/goal';
import { Language } from '@allianzSND/core';
@Component({
  selector: 'app-goal-ui-landing',
  templateUrl: './goal-ui-landing.component.html',
  animations: [
    trigger('animateIn', [
      transition('* => *', [
        query('.detail-block', style({ opacity: 0 }), { optional: true }),
        query('.img-block', style({ opacity: 0 }), { optional: true }),


        query('.detail-block', stagger('200ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),

        query('.img-block', stagger('100ms', [
          animate('1.3s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(175%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(35px)', offset: 0.6 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
          ]))]), { optional: true })


      ])
    ])

  ],
  styleUrls: ['./goal-ui-landing.component.scss']
})
export class GoalUILandingComponent implements OnInit {

  public thisYear: number;
  public nextYear: number;
  public isPopupGSReminder: boolean = false;
  public language: Language = new Language();
  constructor(
    public _location: Location,
    private router: Router,
    private goalSettingService: GoalSettingService) {

  }
  public isFadeIn: string = 'in';


  // @Input() name: string = '';
  @Output() goClick: EventEmitter<any> = new EventEmitter();


  ngOnInit() {
  }

  btnGo() {
    this.goClick.emit();
  }
  getUrl() {
    let urlLink = this._location.path();
    return urlLink.replace(/\//, '');
  }

  setGoal() {

  }

  goalSettingSkip() {

  }

}
