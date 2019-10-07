/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { APIExecutor } from "./APIExecutor";
import * as i0 from "@angular/core";
import * as i1 from "../../../api/APIFactory";
import * as i2 from "../../../api/APIDispatch";
var InputExecutor = /** @class */ (function (_super) {
    tslib_1.__extends(InputExecutor, _super);
    function InputExecutor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} config
     * @param {?} params
     * @return {?}
     */
    InputExecutor.prototype.getData = /**
     * @param {?} config
     * @param {?} params
     * @return {?}
     */
    function (config, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    /**
     * @param {?} config
     * @param {?} data
     * @param {?} params
     * @return {?}
     */
    InputExecutor.prototype.saveData = /**
     * @param {?} config
     * @param {?} data
     * @param {?} params
     * @return {?}
     */
    function (config, data, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (config.source.write)
                    return [2 /*return*/, _super.prototype.saveData.call(this, config, data, params)];
                else
                    return [2 /*return*/, null];
                return [2 /*return*/];
            });
        });
    };
    InputExecutor.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ InputExecutor.ngInjectableDef = i0.defineInjectable({ factory: function InputExecutor_Factory() { return new InputExecutor(i0.inject(i0.ErrorHandler), i0.inject(i1.APIFactory), i0.inject(i2.APIDispatch)); }, token: InputExecutor, providedIn: "root" });
    return InputExecutor;
}(APIExecutor));
export { InputExecutor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXRFeGVjdXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbWV0YS9leGVjdXRvci9pbXBsZW1lbnRzL0lucHV0RXhlY3V0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFNUM7SUFHbUMseUNBQVc7SUFIOUM7O0tBY0M7Ozs7OztJQVRnQiwrQkFBTzs7Ozs7SUFBcEIsVUFBcUIsTUFBa0IsRUFBRSxNQUFXOzs7Z0JBQ2hELHNCQUFPLElBQUksRUFBQzs7O0tBQ2Y7Ozs7Ozs7SUFDWSxnQ0FBUTs7Ozs7O0lBQXJCLFVBQXNCLE1BQWtCLEVBQUUsSUFBUyxFQUFFLE1BQVc7OztnQkFDNUQsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ25CLHNCQUFPLGlCQUFNLFFBQVEsWUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFDOztvQkFFNUMsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ25COztnQkFiSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7d0JBUEQ7Q0FtQkMsQUFkRCxDQUdtQyxXQUFXLEdBVzdDO1NBWFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNZXRhRXhlY3V0b3IgfSBmcm9tIFwiLi4vTWV0YUV4ZWN1dG9yLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgTWV0YUNvbmZpZyB9IGZyb20gXCIuLi8uLi9wYXJzZXIvYmVhbi9NZXRhQ29uZmlnXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFQSUV4ZWN1dG9yIH0gZnJvbSBcIi4vQVBJRXhlY3V0b3JcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEV4ZWN1dG9yIGV4dGVuZHMgQVBJRXhlY3V0b3IgaW1wbGVtZW50cyBJTWV0YUV4ZWN1dG9yIHtcblxuICAgIHB1YmxpYyBhc3luYyBnZXREYXRhKGNvbmZpZzogTWV0YUNvbmZpZywgcGFyYW1zOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBhc3luYyBzYXZlRGF0YShjb25maWc6IE1ldGFDb25maWcsIGRhdGE6IGFueSwgcGFyYW1zOiBhbnkpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zb3VyY2Uud3JpdGUpXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuc2F2ZURhdGEoY29uZmlnLCBkYXRhLCBwYXJhbXMpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il19