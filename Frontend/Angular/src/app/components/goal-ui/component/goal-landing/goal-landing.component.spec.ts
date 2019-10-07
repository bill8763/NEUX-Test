import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalLandingComponent } from './goal-landing.component';

describe('GoalLandingComponent', () => {
  let component: GoalLandingComponent;
  let fixture: ComponentFixture<GoalLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
