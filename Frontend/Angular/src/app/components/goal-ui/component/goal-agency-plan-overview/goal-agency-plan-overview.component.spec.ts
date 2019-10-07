import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalAgencyPlanOverviewComponent } from './goal-agency-plan-overview.component';

describe('GoalAgencyPlanOverviewComponent', () => {
  let component: GoalAgencyPlanOverviewComponent;
  let fixture: ComponentFixture<GoalAgencyPlanOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalAgencyPlanOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalAgencyPlanOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
