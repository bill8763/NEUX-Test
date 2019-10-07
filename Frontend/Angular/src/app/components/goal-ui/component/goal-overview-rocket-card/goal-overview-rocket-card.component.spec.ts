import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalOverviewRocketCardComponent } from './goal-overview-rocket-card.component';

describe('GoalOverviewRocketCardComponent', () => {
  let component: GoalOverviewRocketCardComponent;
  let fixture: ComponentFixture<GoalOverviewRocketCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalOverviewRocketCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalOverviewRocketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
