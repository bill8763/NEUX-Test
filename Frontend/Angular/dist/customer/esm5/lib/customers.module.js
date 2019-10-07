/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CalendarModule } from '@allianzSND/calendar';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerContactListComponent } from './components/customer-contact-list/customer-contact-list.component';
import { CustomerFilterComponent } from './components/customer-filter/customer-filter.component';
import { CustomerImportComponent } from './components/customer-import/customer-import.component';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield'; // allianz select
// allianz select
import { NxDropdownModule } from '@allianz/ngx-ndbx'; // allianz select
// allianz select
import { NxRadioModule } from '@allianz/ngx-ndbx'; // allianz radio btn
// allianz radio btn
import { NxInputModule } from '@allianz/ngx-ndbx/input'; // 輸入框
// 輸入框
import { NxMessageModule } from '@allianz/ngx-ndbx'; // allianz message
// allianz message
import { NxDatefieldModule } from '@allianz/ngx-ndbx/datefield'; // allianz date
// allianz date
import { NxNativeDateModule } from '@allianz/ngx-ndbx/datefield'; //allianz datetime
//allianz datetime
import { NxProgressbarModule } from '@allianz/ngx-ndbx/progressbar'; // allianz progress
// allianz progress
import { NxModalModule } from '@allianz/ngx-ndbx'; // allianz popup modal
// allianz popup modal
import { NxAccordionModule } from '@allianz/ngx-ndbx'; //allianz accordion
//allianz accordion
import { NxGridModule } from '@allianz/ngx-ndbx/grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModule } from '@allianzSND/ui';
import { CommonModule, DatePipe } from '@angular/common';
import { CoreModule } from '@allianzSND/core';
var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NxFormfieldModule,
                        NxDropdownModule,
                        NxRadioModule,
                        NxInputModule,
                        NxMessageModule,
                        NxDatefieldModule,
                        NxNativeDateModule,
                        NxProgressbarModule,
                        NxModalModule,
                        NxAccordionModule,
                        NxGridModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CoreModule,
                        CalendarModule,
                        UIModule,
                    ],
                    declarations: [CustomersComponent, CustomerEditComponent, CustomerListComponent,
                        CustomerDetailComponent, CustomerContactListComponent, CustomerFilterComponent, CustomerImportComponent
                    ],
                    providers: [DatePipe],
                    exports: [CustomersComponent, CustomerEditComponent]
                },] }
    ];
    return CustomersModule;
}());
export { CustomersModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDLENBQUMsaUJBQWlCOztBQUNsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQyxDQUFDLGlCQUFpQjs7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDLENBQUUsb0JBQW9COztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUMsQ0FBQyxNQUFNOztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUMsQ0FBQyxrQkFBa0I7O0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDLENBQUMsZUFBZTs7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUMsQ0FBQyxrQkFBa0I7O0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDLENBQUMsbUJBQW1COztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUMsQ0FBQyxzQkFBc0I7O0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDLENBQUMsbUJBQW1COztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QztJQUFBO0lBMEIrQixDQUFDOztnQkExQi9CLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFVBQVU7d0JBQ1YsY0FBYzt3QkFDZCxRQUFRO3FCQUNUO29CQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQjt3QkFDN0UsdUJBQXVCLEVBQUUsNEJBQTRCLEVBQUcsdUJBQXVCLEVBQUUsdUJBQXVCO3FCQUN6RztvQkFDRCxTQUFTLEVBQUMsQ0FBQyxRQUFRLENBQUM7b0JBQ3BCLE9BQU8sRUFBQyxDQUFDLGtCQUFrQixFQUFDLHFCQUFxQixDQUFDO2lCQUNuRDs7SUFDOEIsc0JBQUM7Q0FBQSxBQTFCaEMsSUEwQmdDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdAYWxsaWFuelNORC9jYWxlbmRhcic7XG5pbXBvcnQgeyBDdXN0b21lcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVyLWVkaXQvY3VzdG9tZXItZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY3VzdG9tZXItZGV0YWlsL2N1c3RvbWVyLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb250YWN0TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21lci1jb250YWN0LWxpc3QvY3VzdG9tZXItY29udGFjdC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lckZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21lci1maWx0ZXIvY3VzdG9tZXItZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lckltcG9ydENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21lci1pbXBvcnQvY3VzdG9tZXItaW1wb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOeEZvcm1maWVsZE1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L2Zvcm1maWVsZCc7IC8vIGFsbGlhbnogc2VsZWN0XG5pbXBvcnQgeyBOeERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngnOyAvLyBhbGxpYW56IHNlbGVjdFxuaW1wb3J0IHsgTnhSYWRpb01vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4JzsgIC8vIGFsbGlhbnogcmFkaW8gYnRuXG5pbXBvcnQgeyBOeElucHV0TW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngvaW5wdXQnOyAvLyDovLjlhaXmoYZcbmltcG9ydCB7IE54TWVzc2FnZU1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4JzsgLy8gYWxsaWFueiBtZXNzYWdlXG5pbXBvcnQgeyBOeERhdGVmaWVsZE1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L2RhdGVmaWVsZCc7IC8vIGFsbGlhbnogZGF0ZVxuaW1wb3J0IHsgTnhOYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngvZGF0ZWZpZWxkJzsgLy9hbGxpYW56IGRhdGV0aW1lXG5pbXBvcnQgeyBOeFByb2dyZXNzYmFyTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngvcHJvZ3Jlc3NiYXInOyAvLyBhbGxpYW56IHByb2dyZXNzXG5pbXBvcnQgeyBOeE1vZGFsTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngnOyAvLyBhbGxpYW56IHBvcHVwIG1vZGFsXG5pbXBvcnQgeyBOeEFjY29yZGlvbk1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4JzsgLy9hbGxpYW56IGFjY29yZGlvblxuaW1wb3J0IHsgTnhHcmlkTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngvZ3JpZCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFVJTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnpTTkQvdWknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTnhGb3JtZmllbGRNb2R1bGUsXG4gICAgTnhEcm9wZG93bk1vZHVsZSxcbiAgICBOeFJhZGlvTW9kdWxlLFxuICAgIE54SW5wdXRNb2R1bGUsXG4gICAgTnhNZXNzYWdlTW9kdWxlLFxuICAgIE54RGF0ZWZpZWxkTW9kdWxlLFxuICAgIE54TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBOeFByb2dyZXNzYmFyTW9kdWxlLFxuICAgIE54TW9kYWxNb2R1bGUsXG4gICAgTnhBY2NvcmRpb25Nb2R1bGUsXG4gICAgTnhHcmlkTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ29yZU1vZHVsZSxcbiAgICBDYWxlbmRhck1vZHVsZSxcbiAgICBVSU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ3VzdG9tZXJzQ29tcG9uZW50LCBDdXN0b21lckVkaXRDb21wb25lbnQsIEN1c3RvbWVyTGlzdENvbXBvbmVudCAsXG4gICAgQ3VzdG9tZXJEZXRhaWxDb21wb25lbnQsIEN1c3RvbWVyQ29udGFjdExpc3RDb21wb25lbnQgLCBDdXN0b21lckZpbHRlckNvbXBvbmVudCwgQ3VzdG9tZXJJbXBvcnRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOltEYXRlUGlwZV0sXG4gIGV4cG9ydHM6W0N1c3RvbWVyc0NvbXBvbmVudCxDdXN0b21lckVkaXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyc01vZHVsZSB7IH1cbiJdfQ==