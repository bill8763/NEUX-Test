import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalAgencyPlanComponent } from './goal-agency-plan.component';

describe('GoalAgencyPlanComponent', () => {
  let component: GoalAgencyPlanComponent;
  let fixture: ComponentFixture<GoalAgencyPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalAgencyPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalAgencyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
