import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressPersonalProgressbarListComponent } from './progress-personal-progressbar-list.component';

describe('ProgressPersonalProgressbarListComponent', () => {
  let component: ProgressPersonalProgressbarListComponent;
  let fixture: ComponentFixture<ProgressPersonalProgressbarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressPersonalProgressbarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressPersonalProgressbarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
