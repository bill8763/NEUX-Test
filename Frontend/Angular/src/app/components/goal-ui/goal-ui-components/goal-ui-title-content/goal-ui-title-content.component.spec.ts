import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUiTitleContentComponent } from './goal-ui-title-content.component';

describe('GoalUiTitleContentComponent', () => {
  let component: GoalUiTitleContentComponent;
  let fixture: ComponentFixture<GoalUiTitleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalUiTitleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalUiTitleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
