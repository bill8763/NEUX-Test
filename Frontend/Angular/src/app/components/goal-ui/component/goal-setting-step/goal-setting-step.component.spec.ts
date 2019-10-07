import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSettingStepComponent } from './goal-setting-step.component';

describe('GoalSettingSetpComponent', () => {
  let component: GoalSettingStepComponent;
  let fixture: ComponentFixture<GoalSettingStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSettingStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSettingStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
