import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalOverviewGoalFyfcCardComponent } from './goal-overview-goal-fyfc-card.component';

describe('GoalOverviewGoalFyfcCardComponent', () => {
  let component: GoalOverviewGoalFyfcCardComponent;
  let fixture: ComponentFixture<GoalOverviewGoalFyfcCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalOverviewGoalFyfcCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalOverviewGoalFyfcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
