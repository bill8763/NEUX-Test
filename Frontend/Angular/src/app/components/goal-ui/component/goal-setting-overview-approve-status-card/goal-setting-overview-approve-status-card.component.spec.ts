import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSettingOverviewApproveStatusCardComponent } from './goal-setting-overview-approve-status-card.component';

describe('GoalSettingOverviewApproveStatusCardComponent', () => {
  let component: GoalSettingOverviewApproveStatusCardComponent;
  let fixture: ComponentFixture<GoalSettingOverviewApproveStatusCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSettingOverviewApproveStatusCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSettingOverviewApproveStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
