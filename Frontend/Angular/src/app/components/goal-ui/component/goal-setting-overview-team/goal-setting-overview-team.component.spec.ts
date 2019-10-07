import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSettingOverviewTeamComponent } from './goal-setting-overview-team.component';

describe('GoalSettingOverviewTeamComponent', () => {
  let component: GoalSettingOverviewTeamComponent;
  let fixture: ComponentFixture<GoalSettingOverviewTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSettingOverviewTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSettingOverviewTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
