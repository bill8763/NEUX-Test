import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentLeaderGoalSettingStepComponent } from './agent-leader-goal-setting-step.component';

describe('AgentLeaderGoalSettingStepComponent', () => {
  let component: AgentLeaderGoalSettingStepComponent;
  let fixture: ComponentFixture<AgentLeaderGoalSettingStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentLeaderGoalSettingStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentLeaderGoalSettingStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
