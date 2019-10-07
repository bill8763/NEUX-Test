import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUILandingComponent } from './goal-ui-landing.component';

describe('GoalLandingComponent', () => {
  let component: GoalUILandingComponent;
  let fixture: ComponentFixture<GoalUILandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalUILandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalUILandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
