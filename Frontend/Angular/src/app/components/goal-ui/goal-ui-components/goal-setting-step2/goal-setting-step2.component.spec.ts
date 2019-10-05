import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSettingStep2Component } from './goal-setting-step2.component';

describe('GoalSettingStep2Component', () => {
  let component: GoalSettingStep2Component;
  let fixture: ComponentFixture<GoalSettingStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSettingStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSettingStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
