import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressPersonalReviewComponent } from './progress-personal-review.component';

describe('ProgressPersonalReviewComponent', () => {
  let component: ProgressPersonalReviewComponent;
  let fixture: ComponentFixture<ProgressPersonalReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressPersonalReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressPersonalReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
