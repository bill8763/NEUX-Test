import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUiTitleNumUnitComponent } from './goal-ui-title-num-unit.component';

describe('GoalUiTitleNumUnitComponent', () => {
  let component: GoalUiTitleNumUnitComponent;
  let fixture: ComponentFixture<GoalUiTitleNumUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalUiTitleNumUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalUiTitleNumUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
