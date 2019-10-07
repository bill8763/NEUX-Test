import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSettingStep5Component } from './goal-setting-step5.component';

describe('GoalSettingStep5Component', () => {
  let component: GoalSettingStep5Component;
  let fixture: ComponentFixture<GoalSettingStep5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSettingStep5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSettingStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
