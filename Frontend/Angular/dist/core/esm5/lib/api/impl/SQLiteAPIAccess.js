/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var SQLiteAPIAccess = /** @class */ (function () {
    function SQLiteAPIAccess() {
    }
    /**
     * @param {?} api
     * @return {?}
     */
    SQLiteAPIAccess.prototype.access = /**
     * @param {?} api
     * @return {?}
     */
    function (api) {
        console.log('sqlite access');
        return ((/** @type {?} */ (api))).executeSQL();
    };
    SQLiteAPIAccess.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ SQLiteAPIAccess.ngInjectableDef = i0.defineInjectable({ factory: function SQLiteAPIAccess_Factory() { return new SQLiteAPIAccess(); }, token: SQLiteAPIAccess, providedIn: "root" });
    return SQLiteAPIAccess;
}());
export { SQLiteAPIAccess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1FMaXRlQVBJQWNjZXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvaW1wbC9TUUxpdGVBUElBY2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzNDO0lBQUE7S0FRQzs7Ozs7SUFKRyxnQ0FBTTs7OztJQUFOLFVBQU8sR0FBUztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLG1CQUFZLEdBQUcsRUFBQSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Z0JBUEosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OzBCQVREO0NBZUMsQUFSRCxJQVFDO1NBTFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElBUElBY2Nlc3MgfSBmcm9tICcuLi9BUElBY2Nlc3MuaW50ZXJmYWNlJztcbmltcG9ydCB7IElBUEkgfSBmcm9tICcuLi9BUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFQSVJlc3BvbnNlIH0gZnJvbSAnLi4vQVBJUmVzcG9uc2UnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICcuLi9TUUxpdGVBUEkuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTUUxpdGVBUElBY2Nlc3MgaW1wbGVtZW50cyBJQVBJQWNjZXNzIHtcbiAgICBhY2Nlc3MoYXBpOiBJQVBJKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NxbGl0ZSBhY2Nlc3MnKTtcbiAgICAgICAgcmV0dXJuICg8SVNRTGl0ZUFQST5hcGkpLmV4ZWN1dGVTUUwoKTtcbiAgICB9XG59Il19