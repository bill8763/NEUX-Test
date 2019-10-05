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
export class CustomersModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDLENBQUMsaUJBQWlCOztBQUNsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQyxDQUFDLGlCQUFpQjs7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDLENBQUUsb0JBQW9COztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUMsQ0FBQyxNQUFNOztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUMsQ0FBQyxrQkFBa0I7O0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDLENBQUMsZUFBZTs7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUMsQ0FBQyxrQkFBa0I7O0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDLENBQUMsbUJBQW1COztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUMsQ0FBQyxzQkFBc0I7O0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDLENBQUMsbUJBQW1COztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQTRCOUMsTUFBTTs7O1lBMUJMLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFVBQVU7b0JBQ1YsY0FBYztvQkFDZCxRQUFRO2lCQUNUO2dCQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQjtvQkFDN0UsdUJBQXVCLEVBQUUsNEJBQTRCLEVBQUcsdUJBQXVCLEVBQUUsdUJBQXVCO2lCQUN6RztnQkFDRCxTQUFTLEVBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLE9BQU8sRUFBQyxDQUFDLGtCQUFrQixFQUFDLHFCQUFxQixDQUFDO2FBQ25EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY2FsZW5kYXInO1xuaW1wb3J0IHsgQ3VzdG9tZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbWVyRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21lci1lZGl0L2N1c3RvbWVyLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbWVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21lci1saXN0L2N1c3RvbWVyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbWVyRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVyLWRldGFpbC9jdXN0b21lci1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbWVyQ29udGFjdExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY3VzdG9tZXItY29udGFjdC1saXN0L2N1c3RvbWVyLWNvbnRhY3QtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY3VzdG9tZXItZmlsdGVyL2N1c3RvbWVyLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJJbXBvcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY3VzdG9tZXItaW1wb3J0L2N1c3RvbWVyLWltcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnhGb3JtZmllbGRNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieC9mb3JtZmllbGQnOyAvLyBhbGxpYW56IHNlbGVjdFxuaW1wb3J0IHsgTnhEcm9wZG93bk1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4JzsgLy8gYWxsaWFueiBzZWxlY3RcbmltcG9ydCB7IE54UmFkaW9Nb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieCc7ICAvLyBhbGxpYW56IHJhZGlvIGJ0blxuaW1wb3J0IHsgTnhJbnB1dE1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L2lucHV0JzsgLy8g6Ly45YWl5qGGXG5pbXBvcnQgeyBOeE1lc3NhZ2VNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieCc7IC8vIGFsbGlhbnogbWVzc2FnZVxuaW1wb3J0IHsgTnhEYXRlZmllbGRNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieC9kYXRlZmllbGQnOyAvLyBhbGxpYW56IGRhdGVcbmltcG9ydCB7IE54TmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L2RhdGVmaWVsZCc7IC8vYWxsaWFueiBkYXRldGltZVxuaW1wb3J0IHsgTnhQcm9ncmVzc2Jhck1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L3Byb2dyZXNzYmFyJzsgLy8gYWxsaWFueiBwcm9ncmVzc1xuaW1wb3J0IHsgTnhNb2RhbE1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4JzsgLy8gYWxsaWFueiBwb3B1cCBtb2RhbFxuaW1wb3J0IHsgTnhBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieCc7IC8vYWxsaWFueiBhY2NvcmRpb25cbmltcG9ydCB7IE54R3JpZE1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L2dyaWQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBVSU1vZHVsZSB9IGZyb20gJ0BhbGxpYW56U05EL3VpJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE54Rm9ybWZpZWxkTW9kdWxlLFxuICAgIE54RHJvcGRvd25Nb2R1bGUsXG4gICAgTnhSYWRpb01vZHVsZSxcbiAgICBOeElucHV0TW9kdWxlLFxuICAgIE54TWVzc2FnZU1vZHVsZSxcbiAgICBOeERhdGVmaWVsZE1vZHVsZSxcbiAgICBOeE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTnhQcm9ncmVzc2Jhck1vZHVsZSxcbiAgICBOeE1vZGFsTW9kdWxlLFxuICAgIE54QWNjb3JkaW9uTW9kdWxlLFxuICAgIE54R3JpZE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvcmVNb2R1bGUsXG4gICAgQ2FsZW5kYXJNb2R1bGUsXG4gICAgVUlNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0N1c3RvbWVyc0NvbXBvbmVudCwgQ3VzdG9tZXJFZGl0Q29tcG9uZW50LCBDdXN0b21lckxpc3RDb21wb25lbnQgLFxuICAgIEN1c3RvbWVyRGV0YWlsQ29tcG9uZW50LCBDdXN0b21lckNvbnRhY3RMaXN0Q29tcG9uZW50ICwgQ3VzdG9tZXJGaWx0ZXJDb21wb25lbnQsIEN1c3RvbWVySW1wb3J0Q29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczpbRGF0ZVBpcGVdLFxuICBleHBvcnRzOltDdXN0b21lcnNDb21wb25lbnQsQ3VzdG9tZXJFZGl0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lcnNNb2R1bGUgeyB9XG4iXX0=