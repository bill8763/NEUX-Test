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
export class MockAPIAccess {
    /**
     * @param {?} httpService
     * @param {?} errorHandler
     */
    constructor(httpService, errorHandler) {
        this.httpService = httpService;
        this.errorHandler = errorHandler;
    }
    /**
     * @param {?} api
     * @return {?}
     */
    access(api) {
        return this.httpService.get(((/** @type {?} */ (api))).getMockPath()).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => { this.errorHandler.handleError(new APPError("F00016", error.message)); return throwError(error); })));
    }
}
MockAPIAccess.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
MockAPIAccess.ctorParameters = () => [
    { type: HttpClient },
    { type: ErrorHandler }
];
/** @nocollapse */ MockAPIAccess.ngInjectableDef = i0.defineInjectable({ factory: function MockAPIAccess_Factory() { return new MockAPIAccess(i0.inject(i1.HttpClient), i0.inject(i0.ErrorHandler)); }, token: MockAPIAccess, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja0FQSUFjY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL2ltcGwvTW9ja0FQSUFjY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBd0IsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUs1QyxNQUFNOzs7OztJQUVGLFlBQ1ksV0FBdUIsRUFDdkIsWUFBMEI7UUFEMUIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDbEMsQ0FBQzs7Ozs7SUFFTCxNQUFNLENBQUMsR0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBVSxHQUFHLEVBQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMxRCxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBQyxDQUN2SCxDQUFBO0lBQ1QsQ0FBQzs7O1lBZEosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7WUFQUSxVQUFVO1lBTkUsWUFBWTs7Ozs7Ozs7SUFpQnpCLG9DQUErQjs7Ozs7SUFDL0IscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElBUElBY2Nlc3MgfSBmcm9tICcuLi9BUElBY2Nlc3MuaW50ZXJmYWNlJztcbmltcG9ydCB7IElBUEkgfSBmcm9tICcuLi9BUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSAnLi4vTW9ja0FQSS5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFQUEVycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3JIYW5kbGVyL0FQUEVycm9yJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9ja0FQSUFjY2VzcyBpbXBsZW1lbnRzIElBUElBY2Nlc3Mge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBDbGllbnQsXG4gICAgICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXJcbiAgICApIHsgfVxuXG4gICAgYWNjZXNzKGFwaTogSUFQSSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCgoPElNb2NrQVBJPmFwaSkuZ2V0TW9ja1BhdGgoKSkucGlwZVxuICAgICAgICAgICAgKGNhdGNoRXJyb3IoZXJyb3IgPT4geyB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJGMDAwMTZcIiwgZXJyb3IubWVzc2FnZSkpOyByZXR1cm4gdGhyb3dFcnJvcihlcnJvcikgfSlcbiAgICAgICAgICAgIClcbiAgICB9XG59Il19