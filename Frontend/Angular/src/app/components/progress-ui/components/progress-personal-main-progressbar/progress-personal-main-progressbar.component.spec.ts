import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressPersonalMainProgressbarComponent } from './progress-personal-main-progressbar.component';

describe('ProgressPersonalMainProgressbarComponent', () => {
  let component: ProgressPersonalMainProgressbarComponent;
  let fixture: ComponentFixture<ProgressPersonalMainProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressPersonalMainProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressPersonalMainProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
