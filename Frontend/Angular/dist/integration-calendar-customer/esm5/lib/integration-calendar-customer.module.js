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
var IntegrationCalendarCustomerModule = /** @class */ (function () {
    function IntegrationCalendarCustomerModule() {
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
    return IntegrationCalendarCustomerModule;
}());
export { IntegrationCalendarCustomerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUMsWUFBWSxFQUFFLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3JJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNwRyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpRUFBaUUsQ0FBQztBQUN4RyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTyxpRUFBaUUsQ0FBQztBQUN6RyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMxRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMxRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQTtBQUN4RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ2pJLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBRTNIO0lBQUE7SUE4QmlELENBQUM7O2dCQTlCakQsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLHVCQUF1Qjt3QkFDdkcsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCO3dCQUNoRSx1QkFBdUIsRUFBRSw0QkFBNEIsRUFBRyx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsQ0FBQztvQkFDekssT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixRQUFRO3dCQUNSLFVBQVU7d0JBQ1YsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsWUFBWTt3QkFDWixtQkFBbUI7cUJBQ3BCO29CQUNELFNBQVMsRUFBQyxDQUFDLFFBQVEsQ0FBQztvQkFDcEIsT0FBTyxFQUFFO3dCQUNQLHFCQUFxQixFQUFDLGlCQUFpQixFQUFFLHVCQUF1Qjt3QkFDaEUsa0JBQWtCLEVBQUMscUJBQXFCO3FCQUN6QztpQkFDRjs7SUFDZ0Qsd0NBQUM7Q0FBQSxBQTlCbEQsSUE4QmtEO1NBQXJDLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVSU1vZHVsZSB9IGZyb20gJ0BhbGxpYW56U05EL3VpJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlLCBEYXRlUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TnhBY2NvcmRpb25Nb2R1bGUsIE54QnV0dG9uTW9kdWxlLCBOeERyb3Bkb3duTW9kdWxlLCBOeE1lc3NhZ2VNb2R1bGUsIE54TW9kYWxNb2R1bGUsIE54UmFkaW9Nb2R1bGV9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4JztcbmltcG9ydCB7IE54SWNvbk1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L2ljb24nO1xuaW1wb3J0IHsgQ2FsZW5kYXJFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci9jb21wb25lbnRzL2NhbGVuZGFyLWVkaXQvY2FsZW5kYXItZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHtDYWxlbmRhckRldGFpbENvbXBvbmVudH0gZnJvbSAnLi9jYWxlbmRhci9jb21wb25lbnRzL2NhbGVuZGFyLWRldGFpbC9jYWxlbmRhci1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7Q2FsZW5kYXJGaWx0ZXJDb21wb25lbnR9IGZyb20gICcuL2NhbGVuZGFyL2NvbXBvbmVudHMvY2FsZW5kYXItZmlsdGVyL2NhbGVuZGFyLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtDYWxlbmRhckNvbXBvbmVudH0gZnJvbSAnLi9jYWxlbmRhci9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOeEZvcm1maWVsZE1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L2Zvcm1maWVsZCc7XG5pbXBvcnQgeyBOeERhdGVmaWVsZE1vZHVsZSwgTnhOYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngvZGF0ZWZpZWxkJztcbmltcG9ydCB7IEN1c3RvbWVyQ29udGFjdExpc3RDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItY29udGFjdC1saXN0L2N1c3RvbWVyLWNvbnRhY3QtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItZGV0YWlsL2N1c3RvbWVyLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21lci9jb21wb25lbnRzL2N1c3RvbWVyLWVkaXQvY3VzdG9tZXItZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItZmlsdGVyL2N1c3RvbWVyLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJJbXBvcnRDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItaW1wb3J0L2N1c3RvbWVyLWltcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21lci9jb21wb25lbnRzL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21lci9jb21wb25lbnRzL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50J1xuaW1wb3J0IHtOeElucHV0TW9kdWxlfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieC9pbnB1dCc7XG5pbXBvcnQge054UHJvZ3Jlc3NiYXJNb2R1bGV9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L3Byb2dyZXNzYmFyJztcbmltcG9ydCB7TnhHcmlkTW9kdWxlfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieC9ncmlkJztcbmltcG9ydCB7IEN1c3RvbWVyQ29udGFjdERldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXIvY29tcG9uZW50cy9jdXN0b21lci1jb250YWN0LWRldGFpbC9jdXN0b21lci1jb250YWN0LWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb250YWN0RWRpdENvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXIvY29tcG9uZW50cy9jdXN0b21lci1jb250YWN0LWVkaXQvY3VzdG9tZXItY29udGFjdC1lZGl0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NhbGVuZGFyQ29tcG9uZW50LCBDYWxlbmRhckVkaXRDb21wb25lbnQsIENhbGVuZGFyRGV0YWlsQ29tcG9uZW50LCBDYWxlbmRhckZpbHRlckNvbXBvbmVudCxcbiAgICBDdXN0b21lcnNDb21wb25lbnQsIEN1c3RvbWVyRWRpdENvbXBvbmVudCwgQ3VzdG9tZXJMaXN0Q29tcG9uZW50ICxcbiAgICBDdXN0b21lckRldGFpbENvbXBvbmVudCwgQ3VzdG9tZXJDb250YWN0TGlzdENvbXBvbmVudCAsIEN1c3RvbWVyRmlsdGVyQ29tcG9uZW50LCBDdXN0b21lckltcG9ydENvbXBvbmVudCwgQ3VzdG9tZXJDb250YWN0RGV0YWlsQ29tcG9uZW50LCBDdXN0b21lckNvbnRhY3RFZGl0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE54SWNvbk1vZHVsZSxcbiAgICBOeEJ1dHRvbk1vZHVsZSxcbiAgICBOeEZvcm1maWVsZE1vZHVsZSxcbiAgICBOeERhdGVmaWVsZE1vZHVsZSxcbiAgICBOeE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgVUlNb2R1bGUsXG4gICAgQ29yZU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTnhEcm9wZG93bk1vZHVsZSxcbiAgICBOeFJhZGlvTW9kdWxlLFxuICAgIE54SW5wdXRNb2R1bGUsXG4gICAgTnhNZXNzYWdlTW9kdWxlLFxuICAgIE54UHJvZ3Jlc3NiYXJNb2R1bGUsXG4gICAgTnhNb2RhbE1vZHVsZSxcbiAgICBOeEFjY29yZGlvbk1vZHVsZSxcbiAgICBOeEdyaWRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOltEYXRlUGlwZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYWxlbmRhckVkaXRDb21wb25lbnQsQ2FsZW5kYXJDb21wb25lbnQsIENhbGVuZGFyRGV0YWlsQ29tcG9uZW50LFxuICAgIEN1c3RvbWVyc0NvbXBvbmVudCxDdXN0b21lckVkaXRDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbnRlZ3JhdGlvbkNhbGVuZGFyQ3VzdG9tZXJNb2R1bGUgeyB9XG4iXX0=