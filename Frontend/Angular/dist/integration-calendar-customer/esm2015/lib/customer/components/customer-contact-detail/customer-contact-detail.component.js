/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional, Inject } from '@angular/core';
import { MetaService, DisplayMetaComponent, ProfileCodeService, DefaultMetaParser, InputExecutor } from '@allianzSND/core';
import { customerContactDetailMetaControllerToken } from '../../injectionToken/injection-token';
export class CustomerContactDetailComponent extends DisplayMetaComponent {
    /**
     * @param {?} metaService
     * @param {?} profileCodeService
     * @param {?} metaParser
     * @param {?} metaExecutor
     * @param {?} customMetaController
     */
    constructor(metaService, profileCodeService, metaParser, metaExecutor, customMetaController) {
        super(metaService, profileCodeService, metaParser, metaExecutor);
        this.customMetaController = customMetaController;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this._data = value;
        console.log("set contact detail data:", value);
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get columnConfig() {
        return this.metaConfig.Columns;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
    }
    /**
     * @return {?}
     */
    getMetaID() {
        return 'customerContactDetail';
    }
    /**
     * @return {?}
     */
    getMetaParams() {
        return null;
    }
    /**
     * @return {?}
     */
    onDataUpdated() {
        super.onDataUpdated();
        if (this.customMetaController)
            this.customMetaController.onDataUpdated(this._data);
    }
}
CustomerContactDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-contact-detail',
                template: "<ng-container *ngIf=\"isMetaLoaded()\">\n  <ng-container *ngFor=\"let col of columnConfig\">\n    <p *ngIf=\"col.id!='Name'\" class=\"desc-normal desc-line-lg\">{{data[col.id]}}</p>\n    <p *ngIf=\"col.id=='Name'\" class=\"desc\">{{data[col.id]}}</p>\n  </ng-container>\n</ng-container>\n",
                styles: [""]
            }] }
];
CustomerContactDetailComponent.ctorParameters = () => [
    { type: MetaService },
    { type: ProfileCodeService },
    { type: DefaultMetaParser },
    { type: InputExecutor },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerContactDetailMetaControllerToken,] }] }
];
CustomerContactDetailComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerContactDetailComponent.prototype.customMetaController;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY29udGFjdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvY29tcG9uZW50cy9jdXN0b21lci1jb250YWN0LWRldGFpbC9jdXN0b21lci1jb250YWN0LWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQThCLE1BQU0sa0JBQWtCLENBQUM7QUFDdkosT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPaEcsTUFBTSxxQ0FBc0MsU0FBUSxvQkFBb0I7Ozs7Ozs7O0lBZXRFLFlBQ0UsV0FBd0IsRUFDeEIsa0JBQXNDLEVBQ3RDLFVBQTZCLEVBQzdCLFlBQTJCLEVBQzJDLG9CQUFvQztRQUUxRyxLQUFLLENBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUZLLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBZ0I7SUFHNUcsQ0FBQzs7Ozs7SUF0QkQsSUFDVyxJQUFJLENBQUMsS0FBSztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDakMsQ0FBQzs7OztJQVlELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBQ0QsYUFBYTtRQUNYLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxvQkFBb0I7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2Qyw0U0FBdUQ7O2FBRXhEOzs7WUFQUSxXQUFXO1lBQXdCLGtCQUFrQjtZQUFFLGlCQUFpQjtZQUFFLGFBQWE7NENBNEIzRixRQUFRLFlBQUksTUFBTSxTQUFDLHdDQUF3Qzs7O21CQW5CN0QsS0FBSzs7Ozs7OztJQW1CSiw4REFBMEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1ldGFTZXJ2aWNlLCBEaXNwbGF5TWV0YUNvbXBvbmVudCwgUHJvZmlsZUNvZGVTZXJ2aWNlLCBEZWZhdWx0TWV0YVBhcnNlciwgSW5wdXRFeGVjdXRvciwgTWV0YUNvbHVtbiwgTWV0YUNvbnRyb2xsZXIgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IGN1c3RvbWVyQ29udGFjdERldGFpbE1ldGFDb250cm9sbGVyVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItY29udGFjdC1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItY29udGFjdC1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1jb250YWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyQ29udGFjdERldGFpbENvbXBvbmVudCBleHRlbmRzIERpc3BsYXlNZXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgcHVibGljIHNldCBkYXRhKHZhbHVlKSB7XG4gICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgIGNvbnNvbGUubG9nKFwic2V0IGNvbnRhY3QgZGV0YWlsIGRhdGE6XCIsIHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCBjb2x1bW5Db25maWcoKTogQXJyYXk8TWV0YUNvbHVtbj4ge1xuICAgIHJldHVybiB0aGlzLm1ldGFDb25maWcuQ29sdW1ucztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1ldGFTZXJ2aWNlOiBNZXRhU2VydmljZSxcbiAgICBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICBtZXRhUGFyc2VyOiBEZWZhdWx0TWV0YVBhcnNlcixcbiAgICBtZXRhRXhlY3V0b3I6IElucHV0RXhlY3V0b3IsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChjdXN0b21lckNvbnRhY3REZXRhaWxNZXRhQ29udHJvbGxlclRva2VuKSBwcml2YXRlIGN1c3RvbU1ldGFDb250cm9sbGVyOiBNZXRhQ29udHJvbGxlclxuICApIHtcbiAgICBzdXBlcihtZXRhU2VydmljZSwgcHJvZmlsZUNvZGVTZXJ2aWNlLCBtZXRhUGFyc2VyLCBtZXRhRXhlY3V0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG4gIGdldE1ldGFJRCgpIHtcbiAgICByZXR1cm4gJ2N1c3RvbWVyQ29udGFjdERldGFpbCc7XG4gIH1cblxuICBnZXRNZXRhUGFyYW1zKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIG9uRGF0YVVwZGF0ZWQoKSB7XG4gICAgc3VwZXIub25EYXRhVXBkYXRlZCgpO1xuICAgIGlmICh0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyKVxuICAgICAgdGhpcy5jdXN0b21NZXRhQ29udHJvbGxlci5vbkRhdGFVcGRhdGVkKHRoaXMuX2RhdGEpO1xuICB9XG59XG4iXX0=