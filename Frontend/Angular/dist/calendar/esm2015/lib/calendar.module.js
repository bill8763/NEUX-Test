/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { UIModule } from '@allianzSND/ui';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@allianzSND/core';
import { FormsModule } from '@angular/forms';
import { NxButtonModule } from '@allianz/ngx-ndbx';
import { NxIconModule } from '@allianz/ngx-ndbx/icon';
import { CalendarEditComponent } from './components/calendar-edit/calendar-edit.component';
import { CalendarDetailComponent } from './components/calendar-detail/calendar-detail.component';
import { CalendarFilterComponent } from './components/calendar-filter/calendar-filter.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { NxDatefieldModule, NxNativeDateModule } from '@allianz/ngx-ndbx/datefield';
export class CalendarModule {
}
CalendarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CalendarComponent, CalendarEditComponent, CalendarDetailComponent, CalendarFilterComponent],
                imports: [
                    NxIconModule,
                    NxButtonModule,
                    NxFormfieldModule,
                    NxDatefieldModule,
                    NxNativeDateModule,
                    UIModule,
                    CoreModule,
                    CommonModule,
                    FormsModule
                ],
                exports: [
                    CalendarEditComponent, CalendarComponent, CalendarDetailComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHdEQUF3RCxDQUFDO0FBQy9GLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFPLHdEQUF3RCxDQUFDO0FBQ2hHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBbUJwRixNQUFNOzs7WUFqQkwsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixDQUFDO2dCQUMxRyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLFFBQVE7b0JBQ1IsVUFBVTtvQkFDVixZQUFZO29CQUNaLFdBQVc7aUJBQ1o7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHFCQUFxQixFQUFDLGlCQUFpQixFQUFFLHVCQUF1QjtpQkFDakU7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVSU1vZHVsZSB9IGZyb20gJ0BhbGxpYW56U05EL3VpJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE54QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngnO1xuaW1wb3J0IHsgTnhJY29uTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngvaWNvbic7XG5pbXBvcnQgeyBDYWxlbmRhckVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXItZWRpdC9jYWxlbmRhci1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NhbGVuZGFyRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXItZGV0YWlsL2NhbGVuZGFyLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHtDYWxlbmRhckZpbHRlckNvbXBvbmVudH0gZnJvbSAgJy4vY29tcG9uZW50cy9jYWxlbmRhci1maWx0ZXIvY2FsZW5kYXItZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0NhbGVuZGFyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE54Rm9ybWZpZWxkTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngvZm9ybWZpZWxkJztcbmltcG9ydCB7IE54RGF0ZWZpZWxkTW9kdWxlLCBOeE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieC9kYXRlZmllbGQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDYWxlbmRhckNvbXBvbmVudCwgQ2FsZW5kYXJFZGl0Q29tcG9uZW50LCBDYWxlbmRhckRldGFpbENvbXBvbmVudCwgQ2FsZW5kYXJGaWx0ZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgTnhJY29uTW9kdWxlLFxuICAgIE54QnV0dG9uTW9kdWxlLFxuICAgIE54Rm9ybWZpZWxkTW9kdWxlLFxuICAgIE54RGF0ZWZpZWxkTW9kdWxlLFxuICAgIE54TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBVSU1vZHVsZSxcbiAgICBDb3JlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2FsZW5kYXJFZGl0Q29tcG9uZW50LENhbGVuZGFyQ29tcG9uZW50LCBDYWxlbmRhckRldGFpbENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9kdWxlIHsgfVxuIl19