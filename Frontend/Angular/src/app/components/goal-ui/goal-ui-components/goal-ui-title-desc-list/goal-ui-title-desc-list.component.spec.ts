import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUiTitleDescListComponent } from './goal-ui-title-desc-list.component';

describe('GoalUiTitleDescListComponent', () => {
  let component: GoalUiTitleDescListComponent;
  let fixture: ComponentFixture<GoalUiTitleDescListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalUiTitleDescListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalUiTitleDescListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
