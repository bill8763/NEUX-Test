/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, Inject } from '@angular/core';
import { customerImportDisplayToken } from '../../injectionToken/injection-token';
import { StringUtils } from '@allianzSND/core';
import * as i0 from "@angular/core";
import * as i1 from "../../injectionToken/injection-token";
export class DefaultCustomerImportDisplay {
    /**
     * @param {?} customImportDisplay
     */
    constructor(customImportDisplay) {
        this.customImportDisplay = customImportDisplay;
    }
    /**
     * @param {?} customer
     * @return {?}
     */
    convert(customer) {
        if (this.customImportDisplay)
            return this.customImportDisplay.convert(customer);
        else {
            if (StringUtils.isEmpty(customer.LastName)) {
                customer.LastName = customer.FirstName;
                customer.FirstName = '';
            }
            return customer;
        }
    }
}
DefaultCustomerImportDisplay.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DefaultCustomerImportDisplay.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerImportDisplayToken,] }] }
];
/** @nocollapse */ DefaultCustomerImportDisplay.ngInjectableDef = i0.defineInjectable({ factory: function DefaultCustomerImportDisplay_Factory() { return new DefaultCustomerImportDisplay(i0.inject(i1.customerImportDisplayToken, 8)); }, token: DefaultCustomerImportDisplay, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultCustomerImportDisplay.prototype.customImportDisplay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdEN1c3RvbWVySW1wb3J0RGlzcGxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXJzL0RlZmF1bHRDdXN0b21lckltcG9ydERpc3BsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUsvQyxNQUFNOzs7O0lBRUYsWUFDNEQsbUJBQTBDO1FBQTFDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBdUI7SUFDbEcsQ0FBQzs7Ozs7SUFFTCxPQUFPLENBQUMsUUFBYTtRQUNqQixJQUFJLElBQUksQ0FBQyxtQkFBbUI7WUFDeEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2pEO1lBQ0QsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDeEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO2dCQUN2QyxRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzthQUMzQjtZQUNELE9BQU8sUUFBUSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQzs7O1lBbkJKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7OzRDQUlRLFFBQVEsWUFBSSxNQUFNLFNBQUMsMEJBQTBCOzs7Ozs7OztJQUE5QywyREFBa0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21lckltcG9ydERpc3BsYXkgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvQ3VzdG9tZXJJbXBvcnREaXNwbGF5JztcbmltcG9ydCB7IGN1c3RvbWVySW1wb3J0RGlzcGxheVRva2VuIH0gZnJvbSAnLi4vLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEN1c3RvbWVySW1wb3J0RGlzcGxheSBpbXBsZW1lbnRzIEN1c3RvbWVySW1wb3J0RGlzcGxheSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChjdXN0b21lckltcG9ydERpc3BsYXlUb2tlbikgcHJpdmF0ZSBjdXN0b21JbXBvcnREaXNwbGF5OiBDdXN0b21lckltcG9ydERpc3BsYXlcbiAgICApIHsgfVxuXG4gICAgY29udmVydChjdXN0b21lcjogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUltcG9ydERpc3BsYXkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21JbXBvcnREaXNwbGF5LmNvbnZlcnQoY3VzdG9tZXIpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGN1c3RvbWVyLkxhc3ROYW1lKSkge1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyLkxhc3ROYW1lID0gY3VzdG9tZXIuRmlyc3ROYW1lO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyLkZpcnN0TmFtZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==