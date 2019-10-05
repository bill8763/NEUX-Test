import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressInnerPersonalComponent } from './progress-inner-personal.component';

describe('ProgressInnerPersonalComponent', () => {
  let component: ProgressInnerPersonalComponent;
  let fixture: ComponentFixture<ProgressInnerPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressInnerPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressInnerPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
