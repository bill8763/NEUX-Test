import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUiTextComponent } from './goal-ui-text.component';

describe('GoalUiTextComponent', () => {
  let component: GoalUiTextComponent;
  let fixture: ComponentFixture<GoalUiTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalUiTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalUiTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
