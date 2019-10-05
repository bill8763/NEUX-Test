/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslatePriceService } from './translate-price.service';
export class TranslatePricePipe {
    /**
     * @param {?} translatePriceService
     */
    constructor(translatePriceService) {
        this.translatePriceService = translatePriceService;
        this.role = '';
        this.million = 1000000;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        return this.translatePriceService.translatePrice(value);
    }
}
TranslatePricePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translatePrice',
                pure: false
            },] }
];
TranslatePricePipe.ctorParameters = () => [
    { type: TranslatePriceService }
];
if (false) {
    /** @type {?} */
    TranslatePricePipe.prototype.role;
    /** @type {?} */
    TranslatePricePipe.prototype.million;
    /**
     * @type {?}
     * @private
     */
    TranslatePricePipe.prototype.translatePriceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlUHJpY2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcHJpY2UvdHJhbnNsYXRlUHJpY2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPbEUsTUFBTTs7OztJQUlKLFlBQ1UscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFIL0MsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixZQUFPLEdBQVcsT0FBTyxDQUFDO0lBSWpDLENBQUM7Ozs7OztJQUlELFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBVTtRQUM5QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7O1lBakJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixJQUFJLEVBQUUsS0FBSzthQUNaOzs7WUFOUSxxQkFBcUI7Ozs7SUFTNUIsa0NBQXlCOztJQUN6QixxQ0FBaUM7Ozs7O0lBRS9CLG1EQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUHJpY2VTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUtcHJpY2Uuc2VydmljZSc7XG5cblxuQFBpcGUoe1xuICBuYW1lOiAndHJhbnNsYXRlUHJpY2UnLFxuICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQcmljZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBwdWJsaWMgcm9sZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBtaWxsaW9uOiBudW1iZXIgPSAxMDAwMDAwO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVByaWNlU2VydmljZTogVHJhbnNsYXRlUHJpY2VTZXJ2aWNlLFxuICApIHtcbiAgfVxuXG5cblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlUHJpY2VTZXJ2aWNlLnRyYW5zbGF0ZVByaWNlKHZhbHVlKTtcbiAgfVxuXG4gIFxufVxuIl19