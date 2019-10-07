import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalOverviewMonthlyPlanFyfcCardComponent } from './goal-overview-monthly-plan-fyfc-card.component';

describe('GoalOverviewMonthlyPlanFyfcCardComponent', () => {
  let component: GoalOverviewMonthlyPlanFyfcCardComponent;
  let fixture: ComponentFixture<GoalOverviewMonthlyPlanFyfcCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalOverviewMonthlyPlanFyfcCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalOverviewMonthlyPlanFyfcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
