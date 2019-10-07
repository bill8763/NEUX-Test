import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalAgencyPlanPersonalMonthlyComponent } from './goal-agency-plan-personal-monthly.component';

describe('GoalAgencyPlanPersonalMonthlyComponent', () => {
  let component: GoalAgencyPlanPersonalMonthlyComponent;
  let fixture: ComponentFixture<GoalAgencyPlanPersonalMonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalAgencyPlanPersonalMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalAgencyPlanPersonalMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
