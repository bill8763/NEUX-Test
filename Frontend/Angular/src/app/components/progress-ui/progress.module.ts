import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressComponent } from './components/progress/progress.component';
import { ProgressPersonalComponent } from './components/progress-personal/progress-personal.component';
import { ProgressUiDotListComponent } from './components/progress-ui-dot-list/progress-ui-dot-list.component';
import { ProgressInnerComponent } from './components/progress-inner/progress-inner.component';
import { ProgressTeamComponent } from './components/progress-team/progress-team.component';
import { ProgressListComponent } from './components/progress-list/progress-list.component';
import { ProgressInnerPersonalComponent } from './components/progress-inner-personal/progress-inner-personal.component';
import { ProgressUiDotMarkComponent } from './components/progress-ui-dot-mark/progress-ui-dot-mark.component';

import { CoreModule } from '@allianzSND/core';
import { UIModule } from '@allianzSND/ui';
import { ProgressPersonalMainProgressbarComponent } from './components/progress-personal-main-progressbar/progress-personal-main-progressbar.component';
import { ProgressPersonalProgressbarListComponent } from './components/progress-personal-progressbar-list/progress-personal-progressbar-list.component';
import { ProgressPersonalReviewComponent } from './components/progress-personal-review/progress-personal-review.component';
import { ProgressTeamTableCardComponent } from './components/progress-team-table-card/progress-team-table-card.component';
import { ProgressTeamDirectUnitComponent } from './components/progress-team-direct-unit/progress-team-direct-unit.component';
import { ProgressTeamIndirectUnitComponent } from './components/progress-team-indirect-unit/progress-team-indirect-unit.component';
import { ProgressHeadLeaderComponent } from './components/progress-head-leader/progress-head-leader.component';
import { ProgressHeadTableComponent } from './components/progress-head-table/progress-head-table.component';
import { ProgressInfoModalComponent } from './components/progress-info-modal/progress-info-modal.component';
@NgModule({
  imports: [
    CoreModule,
    UIModule,
    CommonModule
  ],
  declarations: [
    ProgressComponent, 
    ProgressPersonalComponent, 
    ProgressUiDotListComponent, 
    ProgressInnerComponent, 
    ProgressTeamComponent,
    ProgressListComponent,
    ProgressInnerPersonalComponent,
    ProgressUiDotMarkComponent,
    ProgressPersonalMainProgressbarComponent,
    ProgressPersonalProgressbarListComponent,
    ProgressPersonalReviewComponent,
    ProgressTeamTableCardComponent,
    ProgressTeamDirectUnitComponent,
    ProgressTeamIndirectUnitComponent,
    ProgressHeadLeaderComponent,
    ProgressHeadTableComponent,
    ProgressInfoModalComponent

   ],
  exports: [
    ProgressComponent, 
    ProgressPersonalComponent, 
    ProgressUiDotListComponent, 
    ProgressInnerComponent, 
    ProgressTeamComponent,
    ProgressListComponent,
    ProgressInnerPersonalComponent,
    ProgressUiDotMarkComponent
  ]
})
export class ProgressUiModule { }
