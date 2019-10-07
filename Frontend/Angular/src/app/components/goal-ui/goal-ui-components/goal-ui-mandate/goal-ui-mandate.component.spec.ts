import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUiMandateComponent } from './goal-ui-mandate.component';

describe('GoalUiMandateComponent', () => {
  let component: GoalUiMandateComponent;
  let fixture: ComponentFixture<GoalUiMandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalUiMandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalUiMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
