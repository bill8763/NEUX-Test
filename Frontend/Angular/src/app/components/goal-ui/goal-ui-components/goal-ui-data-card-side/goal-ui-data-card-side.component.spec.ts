import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUiDataCardSideComponent } from './goal-ui-data-card-side.component';

describe('GoalUiDataCardSideComponent', () => {
  let component: GoalUiDataCardSideComponent;
  let fixture: ComponentFixture<GoalUiDataCardSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalUiDataCardSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalUiDataCardSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
