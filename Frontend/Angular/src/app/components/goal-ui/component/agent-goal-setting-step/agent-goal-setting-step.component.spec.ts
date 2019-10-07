import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentGoalSettingStepComponent } from './agent-goal-setting-step.component';

describe('AgentGoalSettingStepComponent', () => {
  let component: AgentGoalSettingStepComponent;
  let fixture: ComponentFixture<AgentGoalSettingStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentGoalSettingStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentGoalSettingStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
