import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentGoalSettingOverviewYearTabComponent } from './goal-setting-overview-year-tab.component';

describe('AgentGoalSettingOverviewYearTabComponent', () => {
  let component: AgentGoalSettingOverviewYearTabComponent;
  let fixture: ComponentFixture<AgentGoalSettingOverviewYearTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentGoalSettingOverviewYearTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentGoalSettingOverviewYearTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
