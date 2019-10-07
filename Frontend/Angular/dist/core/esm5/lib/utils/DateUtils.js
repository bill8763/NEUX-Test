/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var DateUtils = /** @class */ (function () {
    function DateUtils(datePipe) {
        this.datePipe = datePipe;
    }
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    DateUtils.prototype.toDateString = /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    function (date, format) {
        if (date != undefined) {
            return this.datePipe.transform(date, format);
        }
    };
    DateUtils.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DateUtils.ctorParameters = function () { return [
        { type: DatePipe }
    ]; };
    /** @nocollapse */ DateUtils.ngInjectableDef = i0.defineInjectable({ factory: function DateUtils_Factory() { return new DateUtils(i0.inject(i1.DatePipe)); }, token: DateUtils, providedIn: "root" });
    return DateUtils;
}());
export { DateUtils };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateUtils.prototype.datePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9EYXRlVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFFM0M7SUFLSSxtQkFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUFHLENBQUM7Ozs7OztJQUUzQyxnQ0FBWTs7Ozs7SUFBWixVQUFhLElBQVcsRUFBRSxNQUFlO1FBQ3JDLElBQUcsSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxNQUFNLENBQUMsQ0FBQztTQUM3QztJQUNMLENBQUM7O2dCQVhKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztnQkFMTSxRQUFROzs7b0JBQWpCO0NBZUMsQUFaRCxJQVlDO1NBVFksU0FBUzs7Ozs7O0lBRU4sNkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xuICB9KVxuZXhwb3J0IGNsYXNzIERhdGVVdGlsc3tcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZVBpcGUgOiBEYXRlUGlwZSkge31cblxuICAgIHRvRGF0ZVN0cmluZyhkYXRlIDogRGF0ZSwgZm9ybWF0IDogc3RyaW5nKSB7XG4gICAgICAgIGlmKGRhdGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGRhdGUsZm9ybWF0KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=