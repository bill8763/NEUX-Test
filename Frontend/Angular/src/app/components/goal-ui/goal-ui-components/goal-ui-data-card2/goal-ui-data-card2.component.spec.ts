import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUiDataCard2Component } from './goal-ui-data-card2.component';

describe('GoalUiDataCard2Component', () => {
  let component: GoalUiDataCard2Component;
  let fixture: ComponentFixture<GoalUiDataCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalUiDataCard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalUiDataCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
