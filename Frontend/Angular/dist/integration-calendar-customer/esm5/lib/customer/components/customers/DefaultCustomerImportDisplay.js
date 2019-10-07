/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, Inject } from '@angular/core';
import { customerImportDisplayToken } from '../../injectionToken/injection-token';
import { StringUtils } from '@allianzSND/core';
import * as i0 from "@angular/core";
import * as i1 from "../../injectionToken/injection-token";
var DefaultCustomerImportDisplay = /** @class */ (function () {
    function DefaultCustomerImportDisplay(customImportDisplay) {
        this.customImportDisplay = customImportDisplay;
    }
    /**
     * @param {?} customer
     * @return {?}
     */
    DefaultCustomerImportDisplay.prototype.convert = /**
     * @param {?} customer
     * @return {?}
     */
    function (customer) {
        if (this.customImportDisplay)
            return this.customImportDisplay.convert(customer);
        else {
            if (StringUtils.isEmpty(customer.LastName)) {
                customer.LastName = customer.FirstName;
                customer.FirstName = '';
            }
            return customer;
        }
    };
    DefaultCustomerImportDisplay.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DefaultCustomerImportDisplay.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerImportDisplayToken,] }] }
    ]; };
    /** @nocollapse */ DefaultCustomerImportDisplay.ngInjectableDef = i0.defineInjectable({ factory: function DefaultCustomerImportDisplay_Factory() { return new DefaultCustomerImportDisplay(i0.inject(i1.customerImportDisplayToken, 8)); }, token: DefaultCustomerImportDisplay, providedIn: "root" });
    return DefaultCustomerImportDisplay;
}());
export { DefaultCustomerImportDisplay };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultCustomerImportDisplay.prototype.customImportDisplay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdEN1c3RvbWVySW1wb3J0RGlzcGxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXJzL0RlZmF1bHRDdXN0b21lckltcG9ydERpc3BsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUUvQztJQUtJLHNDQUM0RCxtQkFBMEM7UUFBMUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF1QjtJQUNsRyxDQUFDOzs7OztJQUVMLDhDQUFPOzs7O0lBQVAsVUFBUSxRQUFhO1FBQ2pCLElBQUksSUFBSSxDQUFDLG1CQUFtQjtZQUN4QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakQ7WUFDRCxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN4QyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7Z0JBQ3ZDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQzNCO1lBQ0QsT0FBTyxRQUFRLENBQUM7U0FDbkI7SUFDTCxDQUFDOztnQkFuQkosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7O2dEQUlRLFFBQVEsWUFBSSxNQUFNLFNBQUMsMEJBQTBCOzs7dUNBWHREO0NBeUJDLEFBcEJELElBb0JDO1NBakJZLDRCQUE0Qjs7Ozs7O0lBR2pDLDJEQUFrRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1c3RvbWVySW1wb3J0RGlzcGxheSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9DdXN0b21lckltcG9ydERpc3BsYXknO1xuaW1wb3J0IHsgY3VzdG9tZXJJbXBvcnREaXNwbGF5VG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q3VzdG9tZXJJbXBvcnREaXNwbGF5IGltcGxlbWVudHMgQ3VzdG9tZXJJbXBvcnREaXNwbGF5IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGN1c3RvbWVySW1wb3J0RGlzcGxheVRva2VuKSBwcml2YXRlIGN1c3RvbUltcG9ydERpc3BsYXk6IEN1c3RvbWVySW1wb3J0RGlzcGxheVxuICAgICkgeyB9XG5cbiAgICBjb252ZXJ0KGN1c3RvbWVyOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tSW1wb3J0RGlzcGxheSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUltcG9ydERpc3BsYXkuY29udmVydChjdXN0b21lcik7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoY3VzdG9tZXIuTGFzdE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXIuTGFzdE5hbWUgPSBjdXN0b21lci5GaXJzdE5hbWU7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXIuRmlyc3ROYW1lID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3VzdG9tZXI7XG4gICAgICAgIH1cbiAgICB9XG59Il19