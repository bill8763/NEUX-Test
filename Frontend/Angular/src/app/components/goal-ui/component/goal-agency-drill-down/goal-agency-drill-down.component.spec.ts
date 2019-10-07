import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalAgencyDrillDownComponent } from './goal-agency-drill-down.component';

describe('GoalAgencyDrillDownComponent', () => {
  let component: GoalAgencyDrillDownComponent;
  let fixture: ComponentFixture<GoalAgencyDrillDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalAgencyDrillDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalAgencyDrillDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
