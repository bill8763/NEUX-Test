/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class DateUtils {
    /**
     * @param {?} datePipe
     */
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    toDateString(date, format) {
        if (date != undefined) {
            return this.datePipe.transform(date, format);
        }
    }
}
DateUtils.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DateUtils.ctorParameters = () => [
    { type: DatePipe }
];
/** @nocollapse */ DateUtils.ngInjectableDef = i0.defineInjectable({ factory: function DateUtils_Factory() { return new DateUtils(i0.inject(i1.DatePipe)); }, token: DateUtils, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateUtils.prototype.datePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9EYXRlVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLM0MsTUFBTTs7OztJQUVGLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7SUFBRyxDQUFDOzs7Ozs7SUFFM0MsWUFBWSxDQUFDLElBQVcsRUFBRSxNQUFlO1FBQ3JDLElBQUcsSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxNQUFNLENBQUMsQ0FBQztTQUM3QztJQUNMLENBQUM7OztZQVhKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTE0sUUFBUTs7Ozs7Ozs7SUFRRCw2QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG4gIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVV0aWxze1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlUGlwZSA6IERhdGVQaXBlKSB7fVxuXG4gICAgdG9EYXRlU3RyaW5nKGRhdGUgOiBEYXRlLCBmb3JtYXQgOiBzdHJpbmcpIHtcbiAgICAgICAgaWYoZGF0ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oZGF0ZSxmb3JtYXQpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==