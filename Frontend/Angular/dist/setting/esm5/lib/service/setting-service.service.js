/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { APIDispatch, APIFactory, DeviceService } from '@allianzSND/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
var SettingComponentService = /** @class */ (function () {
    function SettingComponentService(dispatcher, APIFactory, deviceService) {
        this.dispatcher = dispatcher;
        this.APIFactory = APIFactory;
        this.deviceService = deviceService;
    }
    /**
     * @return {?}
     */
    SettingComponentService.prototype.getUpdateTimeList = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.debug('getUpdateTimeList');
        /** @type {?} */
        var updateTimeListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getUpdateTimeList')));
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(updateTimeListAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data['Header'].status) {
                    /** @type {?} */
                    var returnData_1 = [];
                    /** @type {?} */
                    var orders = ["Homepage", "Goal_Setting", "Customer", "Calendar", "Progress"];
                    orders.forEach((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) {
                        returnData_1.push({
                            MainFunc: data['Body'].filter((/**
                             * @param {?} y
                             * @return {?}
                             */
                            function (y) { return y.MainFunc == x; }))[0].MainFunc,
                            BackendTime: data['Body'].filter((/**
                             * @param {?} y
                             * @return {?}
                             */
                            function (y) { return y.MainFunc == x; }))[0].BackendTime
                        });
                    }));
                    observer.next(returnData_1);
                    observer.complete();
                }
                else {
                    observer.next([]);
                    observer.complete();
                }
            }));
        }));
    };
    /**
     * @return {?}
     */
    SettingComponentService.prototype.unbindDevice = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var unbindDeviceAPI;
            return tslib_1.__generator(this, function (_a) {
                unbindDeviceAPI = (/** @type {?} */ (this.APIFactory.getAPI('unbindDevice')));
                unbindDeviceAPI.setDeviceID(this.deviceService.getDeviceUUID());
                console.warn("this._getDeviceUUID(): ", this.deviceService.getDeviceUUID());
                return [2 /*return*/, this.dispatcher.dispatch(unbindDeviceAPI).toPromise()];
            });
        });
    };
    SettingComponentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SettingComponentService.ctorParameters = function () { return [
        { type: APIDispatch },
        { type: APIFactory },
        { type: DeviceService }
    ]; };
    /** @nocollapse */ SettingComponentService.ngInjectableDef = i0.defineInjectable({ factory: function SettingComponentService_Factory() { return new SettingComponentService(i0.inject(i1.APIDispatch), i0.inject(i1.APIFactory), i0.inject(i1.DeviceService)); }, token: SettingComponentService, providedIn: "root" });
    return SettingComponentService;
}());
export { SettingComponentService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingComponentService.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    SettingComponentService.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    SettingComponentService.prototype.deviceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1zZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9zZXR0aW5nLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2Uvc2V0dGluZy1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFzQyxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFFbEM7SUFLRSxpQ0FBb0IsVUFBdUIsRUFDakMsVUFBc0IsRUFDdEIsYUFBNEI7UUFGbEIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUNqQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ2xDLENBQUM7Ozs7SUFFTCxtREFBaUI7OztJQUFqQjtRQUFBLGlCQXlCQztRQXZCQyxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O1lBRS9CLGlCQUFpQixHQUFzQixtQkFBbUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBQTtRQUN6RyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFRO1lBQ2hDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsSUFBSTtnQkFDekQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFOzt3QkFFckIsWUFBVSxHQUFlLEVBQUU7O3dCQUMzQixNQUFNLEdBQUcsQ0FBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO29CQUM3RSxNQUFNLENBQUMsT0FBTzs7OztvQkFBQyxVQUFBLENBQUM7d0JBQ2QsWUFBVSxDQUFDLElBQUksQ0FBQzs0QkFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU07Ozs7NEJBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBZixDQUFlLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFROzRCQUMvRCxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU07Ozs7NEJBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBZixDQUFlLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO3lCQUN0RSxDQUFDLENBQUE7b0JBQ0osQ0FBQyxFQUFDLENBQUM7b0JBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFVLENBQUMsQ0FBQztvQkFDMUIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNyQjtxQkFBTTtvQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNsQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3JCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFWSw4Q0FBWTs7O0lBQXpCOzs7O2dCQUNNLGVBQWUsR0FBRyxtQkFBaUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUE7Z0JBQzdFLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztnQkFDNUUsc0JBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUM7OztLQUM5RDs7Z0JBMUNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztnQkFMUSxXQUFXO2dCQUFFLFVBQVU7Z0JBQXNDLGFBQWE7OztrQ0FEbkY7Q0ErQ0MsQUEzQ0QsSUEyQ0M7U0F4Q1ksdUJBQXVCOzs7Ozs7SUFFdEIsNkNBQStCOzs7OztJQUN6Qyw2Q0FBOEI7Ozs7O0lBQzlCLGdEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFQSURpc3BhdGNoLCBBUElGYWN0b3J5LCBVcGRhdGVUaW1lTGlzdEFQSSwgVW5iaW5kRGV2aWNlQVBJLCBEZXZpY2VTZXJ2aWNlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdDb21wb25lbnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLFxuICAgIHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSxcbiAgICBwcml2YXRlIGRldmljZVNlcnZpY2U6IERldmljZVNlcnZpY2VcbiAgKSB7IH1cblxuICBnZXRVcGRhdGVUaW1lTGlzdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgY29uc29sZS5kZWJ1ZygnZ2V0VXBkYXRlVGltZUxpc3QnKTtcblxuICAgIGxldCB1cGRhdGVUaW1lTGlzdEFQSTogVXBkYXRlVGltZUxpc3RBUEkgPSA8VXBkYXRlVGltZUxpc3RBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0VXBkYXRlVGltZUxpc3QnKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2godXBkYXRlVGltZUxpc3RBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YVsnSGVhZGVyJ10uc3RhdHVzKSB7XG5cbiAgICAgICAgICBsZXQgcmV0dXJuRGF0YTogQXJyYXk8YW55PiA9IFtdO1xuICAgICAgICAgIGxldCBvcmRlcnMgPSBbXCJIb21lcGFnZVwiLCBcIkdvYWxfU2V0dGluZ1wiLCBcIkN1c3RvbWVyXCIsIFwiQ2FsZW5kYXJcIiwgXCJQcm9ncmVzc1wiXTtcbiAgICAgICAgICBvcmRlcnMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIHJldHVybkRhdGEucHVzaCh7XG4gICAgICAgICAgICAgIE1haW5GdW5jOiBkYXRhWydCb2R5J10uZmlsdGVyKHkgPT4geS5NYWluRnVuYyA9PSB4KVswXS5NYWluRnVuYyxcbiAgICAgICAgICAgICAgQmFja2VuZFRpbWU6IGRhdGFbJ0JvZHknXS5maWx0ZXIoeSA9PiB5Lk1haW5GdW5jID09IHgpWzBdLkJhY2tlbmRUaW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmV0dXJuRGF0YSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KFtdKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyB1bmJpbmREZXZpY2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBsZXQgdW5iaW5kRGV2aWNlQVBJID0gPFVuYmluZERldmljZUFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCd1bmJpbmREZXZpY2UnKTtcbiAgICB1bmJpbmREZXZpY2VBUEkuc2V0RGV2aWNlSUQodGhpcy5kZXZpY2VTZXJ2aWNlLmdldERldmljZVVVSUQoKSk7XG4gICAgY29uc29sZS53YXJuKFwidGhpcy5fZ2V0RGV2aWNlVVVJRCgpOiBcIiwgdGhpcy5kZXZpY2VTZXJ2aWNlLmdldERldmljZVVVSUQoKSk7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaCh1bmJpbmREZXZpY2VBUEkpLnRvUHJvbWlzZSgpO1xuICB9XG59XG4iXX0=