import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUiTitleSubtitleNumUnitComponent } from './goal-ui-title-subtitle-num-unit.component';

describe('GoalUiTitleSubtitleNumUnitComponent', () => {
  let component: GoalUiTitleSubtitleNumUnitComponent;
  let fixture: ComponentFixture<GoalUiTitleSubtitleNumUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalUiTitleSubtitleNumUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalUiTitleSubtitleNumUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
