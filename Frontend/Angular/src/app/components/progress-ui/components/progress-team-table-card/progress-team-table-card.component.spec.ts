import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTeamTableCardComponent } from './progress-team-table-card.component';

describe('ProgressTeamTableCardComponent', () => {
  let component: ProgressTeamTableCardComponent;
  let fixture: ComponentFixture<ProgressTeamTableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressTeamTableCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTeamTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
