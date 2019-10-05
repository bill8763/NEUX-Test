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
export class MenuService {
    /**
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} errorHandler
     */
    constructor(APIFactory, dispatcher, errorHandler) {
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
    refreshUpdateTime(func) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let time = yield this._getLastUpdateTimeFromDB(func);
            this._lastUpdateTime = time;
            this._lastUpdateTimeSubject.next(this._lastUpdateTime);
        });
    }
    /**
     * @return {?}
     */
    getLastUpdateTime() {
        return this._lastUpdateTimeSubject.asObservable();
    }
    /**
     * @private
     * @param {?} func
     * @return {?}
     */
    _getLastUpdateTimeFromDB(func) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                func = this.convertPageIDtoFunc(func);
                /** @type {?} */
                let updateTimeAPI = this.APIFactory.getAPI("getUpdateTimeList");
                /** @type {?} */
                let resp = yield this.dispatcher.dispatch(updateTimeAPI).toPromise();
                console.log("getUpdateTimeList resp:", resp);
                /** @type {?} */
                let filtered = resp.Body.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.MainFunc === func));
                return filtered.length > 0 ? new Date(filtered[0].BackendTime) : null;
            }
            catch (error) {
                this.errorHandler.handleError(new APPError("F00900", error.message));
                return null;
            }
        });
    }
    /**
     * @private
     * @param {?} pageID
     * @return {?}
     */
    convertPageIDtoFunc(pageID) {
        ["Dashboard", "Customers", "Calendar", "Goal", "Progress"];
        /** @type {?} */
        let map = {
            "Dashboard": "Homepage",
            "Customers": "Customer",
            "Goal": "Goal_Setting",
            "Calendar": "Calendar",
            "Progress": "Progress"
        };
        return map[pageID] || '';
    }
}
MenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
MenuService.ctorParameters = () => [
    { type: APIFactory },
    { type: APIDispatch },
    { type: ErrorHandler }
];
/** @nocollapse */ MenuService.ngInjectableDef = i0.defineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.inject(i1.APIFactory), i0.inject(i1.APIDispatch), i0.inject(i0.ErrorHandler)); }, token: MenuService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvbWVudS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBNkIsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFNckUsTUFBTTs7Ozs7O0lBS0osWUFDVSxVQUFzQixFQUN0QixVQUF1QixFQUN2QixZQUEwQjtRQUYxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGVBQVUsR0FBVixVQUFVLENBQWE7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFONUIsb0JBQWUsR0FBUyxJQUFJLENBQUM7UUFDN0IsMkJBQXNCLEdBQWtCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQU10RixDQUFDOzs7OztJQUVRLGlCQUFpQixDQUFDLElBQVk7OztnQkFDckMsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztZQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6RCxDQUFDO0tBQUE7Ozs7SUFFTSxpQkFBaUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRWEsd0JBQXdCLENBQUMsSUFBWTs7WUFDakQsSUFBSTtnQkFDRixJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDOztvQkFDbEMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDOztvQkFDM0QsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxFQUFFO2dCQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxDQUFDOztvQkFDekMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztnQkFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFDO2dCQUN6RCxPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUN2RTtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDckUsT0FBTyxJQUFJLENBQUM7YUFDYjtRQUNILENBQUM7S0FBQTs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsTUFBYztRQUN4QyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQzs7WUFDdkQsR0FBRyxHQUFHO1lBQ1IsV0FBVyxFQUFFLFVBQVU7WUFDdkIsV0FBVyxFQUFFLFVBQVU7WUFDdkIsTUFBTSxFQUFFLGNBQWM7WUFDdEIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsVUFBVSxFQUFFLFVBQVU7U0FDdkI7UUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBaERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTFEsVUFBVTtZQUFFLFdBQVc7WUFGWCxZQUFZOzs7Ozs7OztJQVUvQixzQ0FBcUM7Ozs7O0lBQ3JDLDZDQUEwRjs7Ozs7SUFHeEYsaUNBQThCOzs7OztJQUM5QixpQ0FBK0I7Ozs7O0lBQy9CLG1DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVycm9ySGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbSwgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBUElGYWN0b3J5LCBBUElEaXNwYXRjaCwgQVBQRXJyb3IgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2xhc3RVcGRhdGVUaW1lOiBEYXRlID0gbnVsbDtcbiAgcHJpdmF0ZSBfbGFzdFVwZGF0ZVRpbWVTdWJqZWN0OiBTdWJqZWN0PERhdGU+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLl9sYXN0VXBkYXRlVGltZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBBUElGYWN0b3J5OiBBUElGYWN0b3J5LFxuICAgIHByaXZhdGUgZGlzcGF0Y2hlcjogQVBJRGlzcGF0Y2gsXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlclxuICApIHsgfVxuXG4gIHB1YmxpYyBhc3luYyByZWZyZXNoVXBkYXRlVGltZShmdW5jOiBzdHJpbmcpIHtcbiAgICBsZXQgdGltZSA9IGF3YWl0IHRoaXMuX2dldExhc3RVcGRhdGVUaW1lRnJvbURCKGZ1bmMpO1xuICAgIHRoaXMuX2xhc3RVcGRhdGVUaW1lID0gdGltZTtcbiAgICB0aGlzLl9sYXN0VXBkYXRlVGltZVN1YmplY3QubmV4dCh0aGlzLl9sYXN0VXBkYXRlVGltZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGFzdFVwZGF0ZVRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RVcGRhdGVUaW1lU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldExhc3RVcGRhdGVUaW1lRnJvbURCKGZ1bmM6IHN0cmluZyk6IFByb21pc2U8RGF0ZT4ge1xuICAgIHRyeSB7XG4gICAgICBmdW5jID0gdGhpcy5jb252ZXJ0UGFnZUlEdG9GdW5jKGZ1bmMpO1xuICAgICAgbGV0IHVwZGF0ZVRpbWVBUEkgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0VXBkYXRlVGltZUxpc3RcIik7XG4gICAgICBsZXQgcmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaCh1cGRhdGVUaW1lQVBJKS50b1Byb21pc2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0VXBkYXRlVGltZUxpc3QgcmVzcDpcIiwgcmVzcCk7XG4gICAgICBsZXQgZmlsdGVyZWQgPSByZXNwLkJvZHkuZmlsdGVyKHggPT4geC5NYWluRnVuYyA9PT0gZnVuYyk7XG4gICAgICByZXR1cm4gZmlsdGVyZWQubGVuZ3RoID4gMCA/IG5ldyBEYXRlKGZpbHRlcmVkWzBdLkJhY2tlbmRUaW1lKSA6IG51bGw7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcihcIkYwMDkwMFwiLCBlcnJvci5tZXNzYWdlKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRQYWdlSUR0b0Z1bmMocGFnZUlEOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIFtcIkRhc2hib2FyZFwiLCBcIkN1c3RvbWVyc1wiLCBcIkNhbGVuZGFyXCIsIFwiR29hbFwiLCBcIlByb2dyZXNzXCJdO1xuICAgIGxldCBtYXAgPSB7XG4gICAgICBcIkRhc2hib2FyZFwiOiBcIkhvbWVwYWdlXCIsXG4gICAgICBcIkN1c3RvbWVyc1wiOiBcIkN1c3RvbWVyXCIsXG4gICAgICBcIkdvYWxcIjogXCJHb2FsX1NldHRpbmdcIixcbiAgICAgIFwiQ2FsZW5kYXJcIjogXCJDYWxlbmRhclwiLFxuICAgICAgXCJQcm9ncmVzc1wiOiBcIlByb2dyZXNzXCJcbiAgICB9XG4gICAgcmV0dXJuIG1hcFtwYWdlSURdIHx8ICcnO1xuICB9XG5cblxufVxuIl19