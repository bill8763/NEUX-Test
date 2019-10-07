import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTeamDirectUnitComponent } from './progress-team-direct-unit.component';

describe('ProgressTeamDirectUnitComponent', () => {
  let component: ProgressTeamDirectUnitComponent;
  let fixture: ComponentFixture<ProgressTeamDirectUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressTeamDirectUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTeamDirectUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
