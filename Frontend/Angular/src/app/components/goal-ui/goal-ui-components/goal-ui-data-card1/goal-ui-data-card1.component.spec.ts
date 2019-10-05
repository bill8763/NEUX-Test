import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUiDataCard1Component } from './goal-ui-data-card1.component';

describe('GoalUiDataCard1Component', () => {
  let component: GoalUiDataCard1Component;
  let fixture: ComponentFixture<GoalUiDataCard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalUiDataCard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalUiDataCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
