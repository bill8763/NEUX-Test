import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalAgencyLeftCardComponent } from './goal-agency-left-card.component';

describe('GoalAgencyLeftCardComponent', () => {
  let component: GoalAgencyLeftCardComponent;
  let fixture: ComponentFixture<GoalAgencyLeftCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalAgencyLeftCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalAgencyLeftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
