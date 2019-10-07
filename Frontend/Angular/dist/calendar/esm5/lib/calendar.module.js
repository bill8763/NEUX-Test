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
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
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
    return CalendarModule;
}());
export { CalendarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHdEQUF3RCxDQUFDO0FBQy9GLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFPLHdEQUF3RCxDQUFDO0FBQ2hHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXBGO0lBQUE7SUFpQjhCLENBQUM7O2dCQWpCOUIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixDQUFDO29CQUMxRyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLFFBQVE7d0JBQ1IsVUFBVTt3QkFDVixZQUFZO3dCQUNaLFdBQVc7cUJBQ1o7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHFCQUFxQixFQUFDLGlCQUFpQixFQUFFLHVCQUF1QjtxQkFDakU7aUJBQ0Y7O0lBQzZCLHFCQUFDO0NBQUEsQUFqQi9CLElBaUIrQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVJTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnpTTkQvdWknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnhCdXR0b25Nb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieCc7XG5pbXBvcnQgeyBOeEljb25Nb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieC9pY29uJztcbmltcG9ydCB7IENhbGVuZGFyRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxlbmRhci1lZGl0L2NhbGVuZGFyLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7Q2FsZW5kYXJEZXRhaWxDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9jYWxlbmRhci1kZXRhaWwvY2FsZW5kYXItZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQge0NhbGVuZGFyRmlsdGVyQ29tcG9uZW50fSBmcm9tICAnLi9jb21wb25lbnRzL2NhbGVuZGFyLWZpbHRlci9jYWxlbmRhci1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7Q2FsZW5kYXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnhGb3JtZmllbGRNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieC9mb3JtZmllbGQnO1xuaW1wb3J0IHsgTnhEYXRlZmllbGRNb2R1bGUsIE54TmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L2RhdGVmaWVsZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NhbGVuZGFyQ29tcG9uZW50LCBDYWxlbmRhckVkaXRDb21wb25lbnQsIENhbGVuZGFyRGV0YWlsQ29tcG9uZW50LCBDYWxlbmRhckZpbHRlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBOeEljb25Nb2R1bGUsXG4gICAgTnhCdXR0b25Nb2R1bGUsXG4gICAgTnhGb3JtZmllbGRNb2R1bGUsXG4gICAgTnhEYXRlZmllbGRNb2R1bGUsXG4gICAgTnhOYXRpdmVEYXRlTW9kdWxlLFxuICAgIFVJTW9kdWxlLFxuICAgIENvcmVNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYWxlbmRhckVkaXRDb21wb25lbnQsQ2FsZW5kYXJDb21wb25lbnQsIENhbGVuZGFyRGV0YWlsQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb2R1bGUgeyB9XG4iXX0=