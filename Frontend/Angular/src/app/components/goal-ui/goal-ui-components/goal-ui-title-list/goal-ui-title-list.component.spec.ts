import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUiTitleListComponent } from './goal-ui-title-list.component';

describe('GoalUiTitleListComponent', () => {
  let component: GoalUiTitleListComponent;
  let fixture: ComponentFixture<GoalUiTitleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalUiTitleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalUiTitleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
