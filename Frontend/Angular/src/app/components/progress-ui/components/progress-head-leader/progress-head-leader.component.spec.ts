import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressHeadLeaderComponent } from './progress-head-leader.component';

describe('ProgressHeadLeaderComponent', () => {
  let component: ProgressHeadLeaderComponent;
  let fixture: ComponentFixture<ProgressHeadLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressHeadLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressHeadLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
