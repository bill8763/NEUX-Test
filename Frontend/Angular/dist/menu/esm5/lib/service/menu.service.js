/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, ErrorHandler } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APIFactory, APIDispatch, APPError } from '@allianzSND/core';
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
var MenuService = /** @class */ (function () {
    function MenuService(APIFactory, dispatcher, errorHandler) {
        this.APIFactory = APIFactory;
        this.dispatcher = dispatcher;
        this.errorHandler = errorHandler;
        this._lastUpdateTime = null;
        this._lastUpdateTimeSubject = new BehaviorSubject(this._lastUpdateTime);
    }
    /**
     * @param {?} func
     * @return {?}
     */
    MenuService.prototype.refreshUpdateTime = /**
     * @param {?} func
     * @return {?}
     */
    function (func) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var time;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getLastUpdateTimeFromDB(func)];
                    case 1:
                        time = _a.sent();
                        this._lastUpdateTime = time;
                        this._lastUpdateTimeSubject.next(this._lastUpdateTime);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    MenuService.prototype.getLastUpdateTime = /**
     * @return {?}
     */
    function () {
        return this._lastUpdateTimeSubject.asObservable();
    };
    /**
     * @private
     * @param {?} func
     * @return {?}
     */
    MenuService.prototype._getLastUpdateTimeFromDB = /**
     * @private
     * @param {?} func
     * @return {?}
     */
    function (func) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var updateTimeAPI, resp, filtered, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        func = this.convertPageIDtoFunc(func);
                        updateTimeAPI = this.APIFactory.getAPI("getUpdateTimeList");
                        return [4 /*yield*/, this.dispatcher.dispatch(updateTimeAPI).toPromise()];
                    case 1:
                        resp = _a.sent();
                        console.log("getUpdateTimeList resp:", resp);
                        filtered = resp.Body.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.MainFunc === func; }));
                        return [2 /*return*/, filtered.length > 0 ? new Date(filtered[0].BackendTime) : null];
                    case 2:
                        error_1 = _a.sent();
                        this.errorHandler.handleError(new APPError("F00900", error_1.message));
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} pageID
     * @return {?}
     */
    MenuService.prototype.convertPageIDtoFunc = /**
     * @private
     * @param {?} pageID
     * @return {?}
     */
    function (pageID) {
        ["Dashboard", "Customers", "Calendar", "Goal", "Progress"];
        /** @type {?} */
        var map = {
            "Dashboard": "Homepage",
            "Customers": "Customer",
            "Goal": "Goal_Setting",
            "Calendar": "Calendar",
            "Progress": "Progress"
        };
        return map[pageID] || '';
    };
    MenuService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    MenuService.ctorParameters = function () { return [
        { type: APIFactory },
        { type: APIDispatch },
        { type: ErrorHandler }
    ]; };
    /** @nocollapse */ MenuService.ngInjectableDef = i0.defineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.inject(i1.APIFactory), i0.inject(i1.APIDispatch), i0.inject(i0.ErrorHandler)); }, token: MenuService, providedIn: "root" });
    return MenuService;
}());
export { MenuService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype._lastUpdateTime;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype._lastUpdateTimeSubject;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.errorHandler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvbWVudS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBNkIsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFHckU7SUFRRSxxQkFDVSxVQUFzQixFQUN0QixVQUF1QixFQUN2QixZQUEwQjtRQUYxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGVBQVUsR0FBVixVQUFVLENBQWE7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFONUIsb0JBQWUsR0FBUyxJQUFJLENBQUM7UUFDN0IsMkJBQXNCLEdBQWtCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQU10RixDQUFDOzs7OztJQUVRLHVDQUFpQjs7OztJQUE5QixVQUErQixJQUFZOzs7Ozs0QkFDOUIscUJBQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBaEQsSUFBSSxHQUFHLFNBQXlDO3dCQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7O0tBQ3hEOzs7O0lBRU0sdUNBQWlCOzs7SUFBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7SUFFYSw4Q0FBd0I7Ozs7O0lBQXRDLFVBQXVDLElBQVk7Ozs7Ozs7d0JBRS9DLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDcEQscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFoRSxJQUFJLEdBQUcsU0FBeUQ7d0JBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3pDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7d0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksRUFBbkIsQ0FBbUIsRUFBQzt3QkFDekQsc0JBQU8sUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDOzs7d0JBRXRFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxPQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDckUsc0JBQU8sSUFBSSxFQUFDOzs7OztLQUVmOzs7Ozs7SUFFTyx5Q0FBbUI7Ozs7O0lBQTNCLFVBQTRCLE1BQWM7UUFDeEMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7O1lBQ3ZELEdBQUcsR0FBRztZQUNSLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCO1FBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQWhERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0JBTFEsVUFBVTtnQkFBRSxXQUFXO2dCQUZYLFlBQVk7OztzQkFBakM7Q0F3REMsQUFuREQsSUFtREM7U0FoRFksV0FBVzs7Ozs7O0lBRXRCLHNDQUFxQzs7Ozs7SUFDckMsNkNBQTBGOzs7OztJQUd4RixpQ0FBOEI7Ozs7O0lBQzlCLGlDQUErQjs7Ozs7SUFDL0IsbUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tLCBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFQSUZhY3RvcnksIEFQSURpc3BhdGNoLCBBUFBFcnJvciB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNZW51U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfbGFzdFVwZGF0ZVRpbWU6IERhdGUgPSBudWxsO1xuICBwcml2YXRlIF9sYXN0VXBkYXRlVGltZVN1YmplY3Q6IFN1YmplY3Q8RGF0ZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2xhc3RVcGRhdGVUaW1lKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIEFQSUZhY3Rvcnk6IEFQSUZhY3RvcnksXG4gICAgcHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaCxcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyXG4gICkgeyB9XG5cbiAgcHVibGljIGFzeW5jIHJlZnJlc2hVcGRhdGVUaW1lKGZ1bmM6IHN0cmluZykge1xuICAgIGxldCB0aW1lID0gYXdhaXQgdGhpcy5fZ2V0TGFzdFVwZGF0ZVRpbWVGcm9tREIoZnVuYyk7XG4gICAgdGhpcy5fbGFzdFVwZGF0ZVRpbWUgPSB0aW1lO1xuICAgIHRoaXMuX2xhc3RVcGRhdGVUaW1lU3ViamVjdC5uZXh0KHRoaXMuX2xhc3RVcGRhdGVUaW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMYXN0VXBkYXRlVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFVwZGF0ZVRpbWVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0TGFzdFVwZGF0ZVRpbWVGcm9tREIoZnVuYzogc3RyaW5nKTogUHJvbWlzZTxEYXRlPiB7XG4gICAgdHJ5IHtcbiAgICAgIGZ1bmMgPSB0aGlzLmNvbnZlcnRQYWdlSUR0b0Z1bmMoZnVuYyk7XG4gICAgICBsZXQgdXBkYXRlVGltZUFQSSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRVcGRhdGVUaW1lTGlzdFwiKTtcbiAgICAgIGxldCByZXNwID0gYXdhaXQgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHVwZGF0ZVRpbWVBUEkpLnRvUHJvbWlzZSgpO1xuICAgICAgY29uc29sZS5sb2coXCJnZXRVcGRhdGVUaW1lTGlzdCByZXNwOlwiLCByZXNwKTtcbiAgICAgIGxldCBmaWx0ZXJlZCA9IHJlc3AuQm9keS5maWx0ZXIoeCA9PiB4Lk1haW5GdW5jID09PSBmdW5jKTtcbiAgICAgIHJldHVybiBmaWx0ZXJlZC5sZW5ndGggPiAwID8gbmV3IERhdGUoZmlsdGVyZWRbMF0uQmFja2VuZFRpbWUpIDogbnVsbDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwOTAwXCIsIGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFBhZ2VJRHRvRnVuYyhwYWdlSUQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgW1wiRGFzaGJvYXJkXCIsIFwiQ3VzdG9tZXJzXCIsIFwiQ2FsZW5kYXJcIiwgXCJHb2FsXCIsIFwiUHJvZ3Jlc3NcIl07XG4gICAgbGV0IG1hcCA9IHtcbiAgICAgIFwiRGFzaGJvYXJkXCI6IFwiSG9tZXBhZ2VcIixcbiAgICAgIFwiQ3VzdG9tZXJzXCI6IFwiQ3VzdG9tZXJcIixcbiAgICAgIFwiR29hbFwiOiBcIkdvYWxfU2V0dGluZ1wiLFxuICAgICAgXCJDYWxlbmRhclwiOiBcIkNhbGVuZGFyXCIsXG4gICAgICBcIlByb2dyZXNzXCI6IFwiUHJvZ3Jlc3NcIlxuICAgIH1cbiAgICByZXR1cm4gbWFwW3BhZ2VJRF0gfHwgJyc7XG4gIH1cblxuXG59XG4iXX0=