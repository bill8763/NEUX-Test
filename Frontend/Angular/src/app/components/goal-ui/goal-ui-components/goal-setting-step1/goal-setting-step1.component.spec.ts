import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSettingStep1Component } from './goal-setting-step1.component';

describe('GoalSettingStep1Component', () => {
  let component: GoalSettingStep1Component;
  let fixture: ComponentFixture<GoalSettingStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSettingStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSettingStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
