import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUiTitleTableComponent } from './goal-ui-title-table.component';

describe('GoalUiTitleTableComponent', () => {
  let component: GoalUiTitleTableComponent;
  let fixture: ComponentFixture<GoalUiTitleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalUiTitleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalUiTitleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
