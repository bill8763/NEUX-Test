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
export class SettingComponentService {
    /**
     * @param {?} dispatcher
     * @param {?} APIFactory
     * @param {?} deviceService
     */
    constructor(dispatcher, APIFactory, deviceService) {
        this.dispatcher = dispatcher;
        this.APIFactory = APIFactory;
        this.deviceService = deviceService;
    }
    /**
     * @return {?}
     */
    getUpdateTimeList() {
        console.debug('getUpdateTimeList');
        /** @type {?} */
        let updateTimeListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getUpdateTimeList')));
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(updateTimeListAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                if (data['Header'].status) {
                    /** @type {?} */
                    let returnData = [];
                    /** @type {?} */
                    let orders = ["Homepage", "Goal_Setting", "Customer", "Calendar", "Progress"];
                    orders.forEach((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => {
                        returnData.push({
                            MainFunc: data['Body'].filter((/**
                             * @param {?} y
                             * @return {?}
                             */
                            y => y.MainFunc == x))[0].MainFunc,
                            BackendTime: data['Body'].filter((/**
                             * @param {?} y
                             * @return {?}
                             */
                            y => y.MainFunc == x))[0].BackendTime
                        });
                    }));
                    observer.next(returnData);
                    observer.complete();
                }
                else {
                    observer.next([]);
                    observer.complete();
                }
            }));
        }));
    }
    /**
     * @return {?}
     */
    unbindDevice() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let unbindDeviceAPI = (/** @type {?} */ (this.APIFactory.getAPI('unbindDevice')));
            unbindDeviceAPI.setDeviceID(this.deviceService.getDeviceUUID());
            console.warn("this._getDeviceUUID(): ", this.deviceService.getDeviceUUID());
            return this.dispatcher.dispatch(unbindDeviceAPI).toPromise();
        });
    }
}
SettingComponentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SettingComponentService.ctorParameters = () => [
    { type: APIDispatch },
    { type: APIFactory },
    { type: DeviceService }
];
/** @nocollapse */ SettingComponentService.ngInjectableDef = i0.defineInjectable({ factory: function SettingComponentService_Factory() { return new SettingComponentService(i0.inject(i1.APIDispatch), i0.inject(i1.APIFactory), i0.inject(i1.DeviceService)); }, token: SettingComponentService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1zZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9zZXR0aW5nLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2Uvc2V0dGluZy1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFzQyxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFLbEMsTUFBTTs7Ozs7O0lBRUosWUFBb0IsVUFBdUIsRUFDakMsVUFBc0IsRUFDdEIsYUFBNEI7UUFGbEIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUNqQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ2xDLENBQUM7Ozs7SUFFTCxpQkFBaUI7UUFFZixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O1lBRS9CLGlCQUFpQixHQUFzQixtQkFBbUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBQTtRQUN6RyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUU7O3dCQUVyQixVQUFVLEdBQWUsRUFBRTs7d0JBQzNCLE1BQU0sR0FBRyxDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7b0JBQzdFLE1BQU0sQ0FBQyxPQUFPOzs7O29CQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNqQixVQUFVLENBQUMsSUFBSSxDQUFDOzRCQUNkLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTTs7Ozs0QkFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTs0QkFDL0QsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNOzs7OzRCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO3lCQUN0RSxDQUFDLENBQUE7b0JBQ0osQ0FBQyxFQUFDLENBQUM7b0JBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDMUIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNyQjtxQkFBTTtvQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNsQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3JCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFWSxZQUFZOzs7Z0JBQ25CLGVBQWUsR0FBRyxtQkFBaUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUE7WUFDN0UsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDaEUsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDNUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvRCxDQUFDO0tBQUE7OztZQTFDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUxRLFdBQVc7WUFBRSxVQUFVO1lBQXNDLGFBQWE7Ozs7Ozs7O0lBUXJFLDZDQUErQjs7Ozs7SUFDekMsNkNBQThCOzs7OztJQUM5QixnREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCwgQVBJRmFjdG9yeSwgVXBkYXRlVGltZUxpc3RBUEksIFVuYmluZERldmljZUFQSSwgRGV2aWNlU2VydmljZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nQ29tcG9uZW50U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaCxcbiAgICBwcml2YXRlIEFQSUZhY3Rvcnk6IEFQSUZhY3RvcnksXG4gICAgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlXG4gICkgeyB9XG5cbiAgZ2V0VXBkYXRlVGltZUxpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIGNvbnNvbGUuZGVidWcoJ2dldFVwZGF0ZVRpbWVMaXN0Jyk7XG5cbiAgICBsZXQgdXBkYXRlVGltZUxpc3RBUEk6IFVwZGF0ZVRpbWVMaXN0QVBJID0gPFVwZGF0ZVRpbWVMaXN0QVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldFVwZGF0ZVRpbWVMaXN0Jyk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHVwZGF0ZVRpbWVMaXN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGFbJ0hlYWRlciddLnN0YXR1cykge1xuXG4gICAgICAgICAgbGV0IHJldHVybkRhdGE6IEFycmF5PGFueT4gPSBbXTtcbiAgICAgICAgICBsZXQgb3JkZXJzID0gW1wiSG9tZXBhZ2VcIiwgXCJHb2FsX1NldHRpbmdcIiwgXCJDdXN0b21lclwiLCBcIkNhbGVuZGFyXCIsIFwiUHJvZ3Jlc3NcIl07XG4gICAgICAgICAgb3JkZXJzLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICByZXR1cm5EYXRhLnB1c2goe1xuICAgICAgICAgICAgICBNYWluRnVuYzogZGF0YVsnQm9keSddLmZpbHRlcih5ID0+IHkuTWFpbkZ1bmMgPT0geClbMF0uTWFpbkZ1bmMsXG4gICAgICAgICAgICAgIEJhY2tlbmRUaW1lOiBkYXRhWydCb2R5J10uZmlsdGVyKHkgPT4geS5NYWluRnVuYyA9PSB4KVswXS5CYWNrZW5kVGltZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJldHVybkRhdGEpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChbXSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdW5iaW5kRGV2aWNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgbGV0IHVuYmluZERldmljZUFQSSA9IDxVbmJpbmREZXZpY2VBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgndW5iaW5kRGV2aWNlJyk7XG4gICAgdW5iaW5kRGV2aWNlQVBJLnNldERldmljZUlEKHRoaXMuZGV2aWNlU2VydmljZS5nZXREZXZpY2VVVUlEKCkpO1xuICAgIGNvbnNvbGUud2FybihcInRoaXMuX2dldERldmljZVVVSUQoKTogXCIsIHRoaXMuZGV2aWNlU2VydmljZS5nZXREZXZpY2VVVUlEKCkpO1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2godW5iaW5kRGV2aWNlQVBJKS50b1Byb21pc2UoKTtcbiAgfVxufVxuIl19