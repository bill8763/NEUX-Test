import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressInfoModalComponent } from './progress-info-modal.component';

describe('ProgressInfoModalComponent', () => {
  let component: ProgressInfoModalComponent;
  let fixture: ComponentFixture<ProgressInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressInfoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
