import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressHeadTableComponent } from './progress-head-table.component';

describe('ProgressHeadTableComponent', () => {
  let component: ProgressHeadTableComponent;
  let fixture: ComponentFixture<ProgressHeadTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressHeadTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressHeadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
