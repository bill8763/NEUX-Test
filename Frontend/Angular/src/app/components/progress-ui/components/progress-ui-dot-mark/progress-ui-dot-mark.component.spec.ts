import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressUiDotMarkComponent } from './progress-ui-dot-mark.component';

describe('ProgressUiDotMarkComponent', () => {
  let component: ProgressUiDotMarkComponent;
  let fixture: ComponentFixture<ProgressUiDotMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressUiDotMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressUiDotMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
