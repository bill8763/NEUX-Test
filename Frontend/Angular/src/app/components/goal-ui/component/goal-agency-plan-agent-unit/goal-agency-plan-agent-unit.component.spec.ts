import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalAgencyPlanAgentUnitComponent } from './goal-agency-plan-agent-unit.component';

describe('GoalAgencyPlanAgentUnitComponent', () => {
  let component: GoalAgencyPlanAgentUnitComponent;
  let fixture: ComponentFixture<GoalAgencyPlanAgentUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalAgencyPlanAgentUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalAgencyPlanAgentUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
