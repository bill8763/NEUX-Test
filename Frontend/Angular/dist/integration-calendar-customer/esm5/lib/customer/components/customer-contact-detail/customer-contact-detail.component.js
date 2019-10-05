/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Optional, Inject } from '@angular/core';
import { MetaService, DisplayMetaComponent, ProfileCodeService, DefaultMetaParser, InputExecutor } from '@allianzSND/core';
import { customerContactDetailMetaControllerToken } from '../../injectionToken/injection-token';
var CustomerContactDetailComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerContactDetailComponent, _super);
    function CustomerContactDetailComponent(metaService, profileCodeService, metaParser, metaExecutor, customMetaController) {
        var _this = _super.call(this, metaService, profileCodeService, metaParser, metaExecutor) || this;
        _this.customMetaController = customMetaController;
        return _this;
    }
    Object.defineProperty(CustomerContactDetailComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._data = value;
            console.log("set contact detail data:", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerContactDetailComponent.prototype, "columnConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.metaConfig.Columns;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerContactDetailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * @return {?}
     */
    CustomerContactDetailComponent.prototype.getMetaID = /**
     * @return {?}
     */
    function () {
        return 'customerContactDetail';
    };
    /**
     * @return {?}
     */
    CustomerContactDetailComponent.prototype.getMetaParams = /**
     * @return {?}
     */
    function () {
        return null;
    };
    /**
     * @return {?}
     */
    CustomerContactDetailComponent.prototype.onDataUpdated = /**
     * @return {?}
     */
    function () {
        _super.prototype.onDataUpdated.call(this);
        if (this.customMetaController)
            this.customMetaController.onDataUpdated(this._data);
    };
    CustomerContactDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-customer-contact-detail',
                    template: "<ng-container *ngIf=\"isMetaLoaded()\">\n  <ng-container *ngFor=\"let col of columnConfig\">\n    <p *ngIf=\"col.id!='Name'\" class=\"desc-normal desc-line-lg\">{{data[col.id]}}</p>\n    <p *ngIf=\"col.id=='Name'\" class=\"desc\">{{data[col.id]}}</p>\n  </ng-container>\n</ng-container>\n",
                    styles: [""]
                }] }
    ];
    CustomerContactDetailComponent.ctorParameters = function () { return [
        { type: MetaService },
        { type: ProfileCodeService },
        { type: DefaultMetaParser },
        { type: InputExecutor },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerContactDetailMetaControllerToken,] }] }
    ]; };
    CustomerContactDetailComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return CustomerContactDetailComponent;
}(DisplayMetaComponent));
export { CustomerContactDetailComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerContactDetailComponent.prototype.customMetaController;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY29udGFjdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvY29tcG9uZW50cy9jdXN0b21lci1jb250YWN0LWRldGFpbC9jdXN0b21lci1jb250YWN0LWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUE4QixNQUFNLGtCQUFrQixDQUFDO0FBQ3ZKLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhHO0lBS29ELDBEQUFvQjtJQWV0RSx3Q0FDRSxXQUF3QixFQUN4QixrQkFBc0MsRUFDdEMsVUFBNkIsRUFDN0IsWUFBMkIsRUFDMkMsb0JBQW9DO1FBTDVHLFlBT0Usa0JBQU0sV0FBVyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsU0FDakU7UUFIdUUsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFnQjs7SUFHNUcsQ0FBQztJQXRCRCxzQkFDVyxnREFBSTs7OztRQUtmO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBUkQsVUFDZ0IsS0FBSztZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBTUQsc0JBQUksd0RBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ2pDLENBQUM7OztPQUFBOzs7O0lBWUQsaURBQVE7OztJQUFSO1FBQ0UsaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELGtEQUFTOzs7SUFBVDtRQUNFLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELHNEQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUNELHNEQUFhOzs7SUFBYjtRQUNFLGlCQUFNLGFBQWEsV0FBRSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLG9CQUFvQjtZQUMzQixJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLDRTQUF1RDs7aUJBRXhEOzs7Z0JBUFEsV0FBVztnQkFBd0Isa0JBQWtCO2dCQUFFLGlCQUFpQjtnQkFBRSxhQUFhO2dEQTRCM0YsUUFBUSxZQUFJLE1BQU0sU0FBQyx3Q0FBd0M7Ozt1QkFuQjdELEtBQUs7O0lBd0NSLHFDQUFDO0NBQUEsQUE5Q0QsQ0FLb0Qsb0JBQW9CLEdBeUN2RTtTQXpDWSw4QkFBOEI7Ozs7OztJQW9CdkMsOERBQTBHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXRhU2VydmljZSwgRGlzcGxheU1ldGFDb21wb25lbnQsIFByb2ZpbGVDb2RlU2VydmljZSwgRGVmYXVsdE1ldGFQYXJzZXIsIElucHV0RXhlY3V0b3IsIE1ldGFDb2x1bW4sIE1ldGFDb250cm9sbGVyIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBjdXN0b21lckNvbnRhY3REZXRhaWxNZXRhQ29udHJvbGxlclRva2VuIH0gZnJvbSAnLi4vLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWN1c3RvbWVyLWNvbnRhY3QtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLWNvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXItY29udGFjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lckNvbnRhY3REZXRhaWxDb21wb25lbnQgZXh0ZW5kcyBEaXNwbGF5TWV0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGF0YSh2YWx1ZSkge1xuICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhcInNldCBjb250YWN0IGRldGFpbCBkYXRhOlwiLCB2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBnZXQgY29sdW1uQ29uZmlnKCk6IEFycmF5PE1ldGFDb2x1bW4+IHtcbiAgICByZXR1cm4gdGhpcy5tZXRhQ29uZmlnLkNvbHVtbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBtZXRhU2VydmljZTogTWV0YVNlcnZpY2UsXG4gICAgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2UsXG4gICAgbWV0YVBhcnNlcjogRGVmYXVsdE1ldGFQYXJzZXIsXG4gICAgbWV0YUV4ZWN1dG9yOiBJbnB1dEV4ZWN1dG9yLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoY3VzdG9tZXJDb250YWN0RGV0YWlsTWV0YUNvbnRyb2xsZXJUb2tlbikgcHJpdmF0ZSBjdXN0b21NZXRhQ29udHJvbGxlcjogTWV0YUNvbnRyb2xsZXJcbiAgKSB7XG4gICAgc3VwZXIobWV0YVNlcnZpY2UsIHByb2ZpbGVDb2RlU2VydmljZSwgbWV0YVBhcnNlciwgbWV0YUV4ZWN1dG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cblxuICBnZXRNZXRhSUQoKSB7XG4gICAgcmV0dXJuICdjdXN0b21lckNvbnRhY3REZXRhaWwnO1xuICB9XG5cbiAgZ2V0TWV0YVBhcmFtcygpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBvbkRhdGFVcGRhdGVkKCkge1xuICAgIHN1cGVyLm9uRGF0YVVwZGF0ZWQoKTtcbiAgICBpZiAodGhpcy5jdXN0b21NZXRhQ29udHJvbGxlcilcbiAgICAgIHRoaXMuY3VzdG9tTWV0YUNvbnRyb2xsZXIub25EYXRhVXBkYXRlZCh0aGlzLl9kYXRhKTtcbiAgfVxufVxuIl19