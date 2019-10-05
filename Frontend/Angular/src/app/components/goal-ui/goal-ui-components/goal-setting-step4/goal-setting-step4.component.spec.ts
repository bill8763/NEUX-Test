import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSettingStep4Component } from './goal-setting-step4.component';

describe('GoalSettingStep4Component', () => {
  let component: GoalSettingStep4Component;
  let fixture: ComponentFixture<GoalSettingStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSettingStep4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSettingStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
