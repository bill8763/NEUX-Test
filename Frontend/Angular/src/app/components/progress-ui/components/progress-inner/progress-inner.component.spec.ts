import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressInnerComponent } from './progress-inner.component';

describe('ProgressInnerComponent', () => {
  let component: ProgressInnerComponent;
  let fixture: ComponentFixture<ProgressInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
