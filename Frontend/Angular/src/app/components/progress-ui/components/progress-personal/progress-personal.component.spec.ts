import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressPersonalComponent } from './progress-personal.component';

describe('ProgressPersonalComponent', () => {
  let component: ProgressPersonalComponent;
  let fixture: ComponentFixture<ProgressPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
