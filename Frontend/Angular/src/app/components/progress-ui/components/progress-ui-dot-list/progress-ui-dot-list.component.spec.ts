import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressUiDotListComponent } from './progress-ui-dot-list.component';

describe('ProgressUiDotListComponent', () => {
  let component: ProgressUiDotListComponent;
  let fixture: ComponentFixture<ProgressUiDotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressUiDotListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressUiDotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
