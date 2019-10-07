import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSettingStepModalComponent } from './goal-setting-step-modal.component';

describe('GoalSettingStepModalComponent', () => {
  let component: GoalSettingStepModalComponent;
  let fixture: ComponentFixture<GoalSettingStepModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSettingStepModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSettingStepModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
