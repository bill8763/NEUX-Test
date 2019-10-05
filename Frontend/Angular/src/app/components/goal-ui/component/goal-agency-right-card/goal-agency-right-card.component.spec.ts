import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalAgencyRightCardComponent } from './goal-agency-right-card.component';

describe('GoalAgencyRightCardComponent', () => {
  let component: GoalAgencyRightCardComponent;
  let fixture: ComponentFixture<GoalAgencyRightCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalAgencyRightCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalAgencyRightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
