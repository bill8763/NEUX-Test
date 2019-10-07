import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalAgencyPlanRecruitmentPopupComponent } from './goal-agency-plan-recruitment-popup.component';

describe('GoalAgencyPlanRecruitmentPopupComponent', () => {
  let component: GoalAgencyPlanRecruitmentPopupComponent;
  let fixture: ComponentFixture<GoalAgencyPlanRecruitmentPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalAgencyPlanRecruitmentPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalAgencyPlanRecruitmentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
