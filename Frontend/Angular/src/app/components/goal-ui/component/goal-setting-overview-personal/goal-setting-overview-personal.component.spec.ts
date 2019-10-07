import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSettingOverviewPersonalComponent } from './goal-setting-overview-personal.component';

describe('GoalSettingOverviewPersonalComponent', () => {
  let component: GoalSettingOverviewPersonalComponent;
  let fixture: ComponentFixture<GoalSettingOverviewPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSettingOverviewPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSettingOverviewPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
