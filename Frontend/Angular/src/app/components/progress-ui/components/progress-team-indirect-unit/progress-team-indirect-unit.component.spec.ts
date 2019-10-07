import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTeamIndirectUnitComponent } from './progress-team-indirect-unit.component';

describe('ProgressTeamIndirectUnitComponent', () => {
  let component: ProgressTeamIndirectUnitComponent;
  let fixture: ComponentFixture<ProgressTeamIndirectUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressTeamIndirectUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTeamIndirectUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
