import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSettingStep3Component } from './goal-setting-step3.component';

describe('GoalSettingStep3Component', () => {
  let component: GoalSettingStep3Component;
  let fixture: ComponentFixture<GoalSettingStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSettingStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSettingStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
