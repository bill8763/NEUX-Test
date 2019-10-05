import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSettingOverviewPersonalTeamComponent } from './goal-setting-overview-personal-team.component';

describe('AgentGoalSettingOverviewPersonalTeamComponent', () => {
  let component: GoalSettingOverviewPersonalTeamComponent;
  let fixture: ComponentFixture<GoalSettingOverviewPersonalTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSettingOverviewPersonalTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSettingOverviewPersonalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
