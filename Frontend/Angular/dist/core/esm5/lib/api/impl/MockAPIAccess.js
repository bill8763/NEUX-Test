/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { APPError } from '../../errorHandler/APPError';
import { catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var MockAPIAccess = /** @class */ (function () {
    function MockAPIAccess(httpService, errorHandler) {
        this.httpService = httpService;
        this.errorHandler = errorHandler;
    }
    /**
     * @param {?} api
     * @return {?}
     */
    MockAPIAccess.prototype.access = /**
     * @param {?} api
     * @return {?}
     */
    function (api) {
        var _this = this;
        return this.httpService.get(((/** @type {?} */ (api))).getMockPath()).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { _this.errorHandler.handleError(new APPError("F00016", error.message)); return throwError(error); })));
    };
    MockAPIAccess.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    MockAPIAccess.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ErrorHandler }
    ]; };
    /** @nocollapse */ MockAPIAccess.ngInjectableDef = i0.defineInjectable({ factory: function MockAPIAccess_Factory() { return new MockAPIAccess(i0.inject(i1.HttpClient), i0.inject(i0.ErrorHandler)); }, token: MockAPIAccess, providedIn: "root" });
    return MockAPIAccess;
}());
export { MockAPIAccess };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MockAPIAccess.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    MockAPIAccess.prototype.errorHandler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja0FQSUFjY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL2ltcGwvTW9ja0FQSUFjY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBd0IsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUU1QztJQUtJLHVCQUNZLFdBQXVCLEVBQ3ZCLFlBQTBCO1FBRDFCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ2xDLENBQUM7Ozs7O0lBRUwsOEJBQU07Ozs7SUFBTixVQUFPLEdBQVM7UUFBaEIsaUJBSUM7UUFIRyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsbUJBQVUsR0FBRyxFQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDMUQsVUFBVTs7OztRQUFDLFVBQUEsS0FBSyxJQUFNLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFDLENBQ3ZILENBQUE7SUFDVCxDQUFDOztnQkFkSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7Z0JBUFEsVUFBVTtnQkFORSxZQUFZOzs7d0JBQWpDO0NBMEJDLEFBZkQsSUFlQztTQVpZLGFBQWE7Ozs7OztJQUdsQixvQ0FBK0I7Ozs7O0lBQy9CLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVycm9ySGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJQVBJQWNjZXNzIH0gZnJvbSAnLi4vQVBJQWNjZXNzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi4vQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gJy4uL01vY2tBUEkuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBUFBFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9ySGFuZGxlci9BUFBFcnJvcic7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1vY2tBUElBY2Nlc3MgaW1wbGVtZW50cyBJQVBJQWNjZXNzIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwQ2xpZW50LFxuICAgICAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyXG4gICAgKSB7IH1cblxuICAgIGFjY2VzcyhhcGk6IElBUEkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoKDxJTW9ja0FQST5hcGkpLmdldE1vY2tQYXRoKCkpLnBpcGVcbiAgICAgICAgICAgIChjYXRjaEVycm9yKGVycm9yID0+IHsgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwMDE2XCIsIGVycm9yLm1lc3NhZ2UpKTsgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpIH0pXG4gICAgICAgICAgICApXG4gICAgfVxufSJdfQ==