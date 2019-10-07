/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { UIModule } from '@allianzSND/ui';
import { CommonModule, DatePipe } from '@angular/common';
import { CoreModule } from '@allianzSND/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NxAccordionModule, NxButtonModule, NxDropdownModule, NxMessageModule, NxModalModule, NxRadioModule } from '@allianz/ngx-ndbx';
import { NxIconModule } from '@allianz/ngx-ndbx/icon';
import { CalendarEditComponent } from './calendar/components/calendar-edit/calendar-edit.component';
import { CalendarDetailComponent } from './calendar/components/calendar-detail/calendar-detail.component';
import { CalendarFilterComponent } from './calendar/components/calendar-filter/calendar-filter.component';
import { CalendarComponent } from './calendar/components/calendar/calendar.component';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { NxDatefieldModule, NxNativeDateModule } from '@allianz/ngx-ndbx/datefield';
import { CustomerContactListComponent } from './customer/components/customer-contact-list/customer-contact-list.component';
import { CustomerDetailComponent } from './customer/components/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer/components/customer-edit/customer-edit.component';
import { CustomerFilterComponent } from './customer/components/customer-filter/customer-filter.component';
import { CustomerImportComponent } from './customer/components/customer-import/customer-import.component';
import { CustomerListComponent } from './customer/components/customer-list/customer-list.component';
import { CustomersComponent } from './customer/components/customers/customers.component';
import { NxInputModule } from '@allianz/ngx-ndbx/input';
import { NxProgressbarModule } from '@allianz/ngx-ndbx/progressbar';
import { NxGridModule } from '@allianz/ngx-ndbx/grid';
import { CustomerContactDetailComponent } from './customer/components/customer-contact-detail/customer-contact-detail.component';
import { CustomerContactEditComponent } from './customer/components/customer-contact-edit/customer-contact-edit.component';
export class IntegrationCalendarCustomerModule {
}
IntegrationCalendarCustomerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CalendarComponent, CalendarEditComponent, CalendarDetailComponent, CalendarFilterComponent,
                    CustomersComponent, CustomerEditComponent, CustomerListComponent,
                    CustomerDetailComponent, CustomerContactListComponent, CustomerFilterComponent, CustomerImportComponent, CustomerContactDetailComponent, CustomerContactEditComponent],
                imports: [
                    NxIconModule,
                    NxButtonModule,
                    NxFormfieldModule,
                    NxDatefieldModule,
                    NxNativeDateModule,
                    UIModule,
                    CoreModule,
                    CommonModule,
                    FormsModule,
                    NxDropdownModule,
                    NxRadioModule,
                    NxInputModule,
                    NxMessageModule,
                    NxProgressbarModule,
                    NxModalModule,
                    NxAccordionModule,
                    NxGridModule,
                    ReactiveFormsModule,
                ],
                providers: [DatePipe],
                exports: [
                    CalendarEditComponent, CalendarComponent, CalendarDetailComponent,
                    CustomersComponent, CustomerEditComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUMsWUFBWSxFQUFFLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3JJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNwRyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpRUFBaUUsQ0FBQztBQUN4RyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTyxpRUFBaUUsQ0FBQztBQUN6RyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMxRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMxRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQTtBQUN4RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ2pJLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBZ0MzSCxNQUFNOzs7WUE5QkwsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLHVCQUF1QjtvQkFDdkcsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCO29CQUNoRSx1QkFBdUIsRUFBRSw0QkFBNEIsRUFBRyx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsQ0FBQztnQkFDekssT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixRQUFRO29CQUNSLFVBQVU7b0JBQ1YsWUFBWTtvQkFDWixXQUFXO29CQUNYLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsWUFBWTtvQkFDWixtQkFBbUI7aUJBQ3BCO2dCQUNELFNBQVMsRUFBQyxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsT0FBTyxFQUFFO29CQUNQLHFCQUFxQixFQUFDLGlCQUFpQixFQUFFLHVCQUF1QjtvQkFDaEUsa0JBQWtCLEVBQUMscUJBQXFCO2lCQUN6QzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVJTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnpTTkQvdWknO1xuaW1wb3J0IHtDb21tb25Nb2R1bGUsIERhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtOeEFjY29yZGlvbk1vZHVsZSwgTnhCdXR0b25Nb2R1bGUsIE54RHJvcGRvd25Nb2R1bGUsIE54TWVzc2FnZU1vZHVsZSwgTnhNb2RhbE1vZHVsZSwgTnhSYWRpb01vZHVsZX0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngnO1xuaW1wb3J0IHsgTnhJY29uTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngvaWNvbic7XG5pbXBvcnQgeyBDYWxlbmRhckVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2NvbXBvbmVudHMvY2FsZW5kYXItZWRpdC9jYWxlbmRhci1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NhbGVuZGFyRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuL2NhbGVuZGFyL2NvbXBvbmVudHMvY2FsZW5kYXItZGV0YWlsL2NhbGVuZGFyLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHtDYWxlbmRhckZpbHRlckNvbXBvbmVudH0gZnJvbSAgJy4vY2FsZW5kYXIvY29tcG9uZW50cy9jYWxlbmRhci1maWx0ZXIvY2FsZW5kYXItZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0NhbGVuZGFyQ29tcG9uZW50fSBmcm9tICcuL2NhbGVuZGFyL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE54Rm9ybWZpZWxkTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngvZm9ybWZpZWxkJztcbmltcG9ydCB7IE54RGF0ZWZpZWxkTW9kdWxlLCBOeE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieC9kYXRlZmllbGQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb250YWN0TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXIvY29tcG9uZW50cy9jdXN0b21lci1jb250YWN0LWxpc3QvY3VzdG9tZXItY29udGFjdC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lckRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXIvY29tcG9uZW50cy9jdXN0b21lci1kZXRhaWwvY3VzdG9tZXItZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lckVkaXRDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItZWRpdC9jdXN0b21lci1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lckZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXIvY29tcG9uZW50cy9jdXN0b21lci1maWx0ZXIvY3VzdG9tZXItZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lckltcG9ydENvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXIvY29tcG9uZW50cy9jdXN0b21lci1pbXBvcnQvY3VzdG9tZXItaW1wb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lckxpc3RDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItbGlzdC9jdXN0b21lci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lcnNDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQnXG5pbXBvcnQge054SW5wdXRNb2R1bGV9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L2lucHV0JztcbmltcG9ydCB7TnhQcm9ncmVzc2Jhck1vZHVsZX0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngvcHJvZ3Jlc3NiYXInO1xuaW1wb3J0IHtOeEdyaWRNb2R1bGV9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L2dyaWQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb250YWN0RGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21lci9jb21wb25lbnRzL2N1c3RvbWVyLWNvbnRhY3QtZGV0YWlsL2N1c3RvbWVyLWNvbnRhY3QtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lckNvbnRhY3RFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21lci9jb21wb25lbnRzL2N1c3RvbWVyLWNvbnRhY3QtZWRpdC9jdXN0b21lci1jb250YWN0LWVkaXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ2FsZW5kYXJDb21wb25lbnQsIENhbGVuZGFyRWRpdENvbXBvbmVudCwgQ2FsZW5kYXJEZXRhaWxDb21wb25lbnQsIENhbGVuZGFyRmlsdGVyQ29tcG9uZW50LFxuICAgIEN1c3RvbWVyc0NvbXBvbmVudCwgQ3VzdG9tZXJFZGl0Q29tcG9uZW50LCBDdXN0b21lckxpc3RDb21wb25lbnQgLFxuICAgIEN1c3RvbWVyRGV0YWlsQ29tcG9uZW50LCBDdXN0b21lckNvbnRhY3RMaXN0Q29tcG9uZW50ICwgQ3VzdG9tZXJGaWx0ZXJDb21wb25lbnQsIEN1c3RvbWVySW1wb3J0Q29tcG9uZW50LCBDdXN0b21lckNvbnRhY3REZXRhaWxDb21wb25lbnQsIEN1c3RvbWVyQ29udGFjdEVkaXRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgTnhJY29uTW9kdWxlLFxuICAgIE54QnV0dG9uTW9kdWxlLFxuICAgIE54Rm9ybWZpZWxkTW9kdWxlLFxuICAgIE54RGF0ZWZpZWxkTW9kdWxlLFxuICAgIE54TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBVSU1vZHVsZSxcbiAgICBDb3JlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOeERyb3Bkb3duTW9kdWxlLFxuICAgIE54UmFkaW9Nb2R1bGUsXG4gICAgTnhJbnB1dE1vZHVsZSxcbiAgICBOeE1lc3NhZ2VNb2R1bGUsXG4gICAgTnhQcm9ncmVzc2Jhck1vZHVsZSxcbiAgICBOeE1vZGFsTW9kdWxlLFxuICAgIE54QWNjb3JkaW9uTW9kdWxlLFxuICAgIE54R3JpZE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6W0RhdGVQaXBlXSxcbiAgZXhwb3J0czogW1xuICAgIENhbGVuZGFyRWRpdENvbXBvbmVudCxDYWxlbmRhckNvbXBvbmVudCwgQ2FsZW5kYXJEZXRhaWxDb21wb25lbnQsXG4gICAgQ3VzdG9tZXJzQ29tcG9uZW50LEN1c3RvbWVyRWRpdENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEludGVncmF0aW9uQ2FsZW5kYXJDdXN0b21lck1vZHVsZSB7IH1cbiJdfQ==