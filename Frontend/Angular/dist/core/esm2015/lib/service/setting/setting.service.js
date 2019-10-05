/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { APIDispatch } from '../../api/APIDispatch';
import { APIFactory } from '../../api/APIFactory';
import { Observable, BehaviorSubject } from 'rxjs';
import { Setting } from '../../bean/Setting';
import { DeviceService } from '../../device';
import * as i0 from "@angular/core";
export class SettingService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this._debugMode = false;
        this._debugSubject = new BehaviorSubject(this._debugMode);
    }
    /**
     * @return {?}
     */
    _fetchCodeData() {
        /** @type {?} */
        let factory = this.getAPIFactory();
        /** @type {?} */
        let dispatcher = this.getAPIDispatch();
        /** @type {?} */
        let settingAPI = (/** @type {?} */ (factory.getAPI('getSetting')));
        console.debug('setting.service fetchCodeData', settingAPI);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            dispatcher.dispatch(settingAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                /** @type {?} */
                let bodyDatas = data['Body'];
                console.log('<--- Datas --->');
                console.log(data);
                for (let i = 0; i < bodyDatas.length; i++) {
                    /** @type {?} */
                    let json = bodyDatas[i];
                    /** @type {?} */
                    let setting = new Setting(json.SettingID, json.SettingName, json.SettingVal);
                    SettingService.settingMap.set(setting.SettingID, setting);
                }
                console.debug('profileCodeMap', SettingService.settingMap);
                observer.next(true);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} settingID
     * @return {?}
     */
    getSetting(settingID) {
        return SettingService.settingMap.get(settingID);
    }
    /**
     * @param {?} setting
     * @return {?}
     */
    updateSetting(setting) {
        /** @type {?} */
        let settingUpdateAPI = (/** @type {?} */ (this.getAPIFactory().getAPI('updateSetting')));
        settingUpdateAPI.setSettingObject(setting);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.getAPIDispatch().dispatch(settingUpdateAPI).subscribe((/**
             * @param {?} settingData
             * @return {?}
             */
            (settingData) => {
                this._fetchCodeData().subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
                    console.warn('_fetchCodeData', data);
                    observer.next(settingData['Header']);
                    observer.complete();
                }));
            }));
        }));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setDebugMode(val) {
        this._debugMode = val;
        this._debugSubject.next(val);
    }
    /**
     * @return {?}
     */
    getDebugMode() {
        return this._debugSubject.asObservable();
    }
    /**
     * @return {?}
     */
    getAPIFactory() {
        return this.injector.get(APIFactory);
    }
    /**
     * @return {?}
     */
    getAPIDispatch() {
        return this.injector.get(APIDispatch);
    }
    /**
     * @return {?}
     */
    getDeviceService() {
        return this.injector.get(DeviceService);
    }
    /**
     * @param {?} token
     * @return {?}
     */
    deviceChange(token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("device change firebase token:", token);
            /** @type {?} */
            let updatePushIDAPI = this.getAPIFactory().getAPI("UpdatePushID");
            /** @type {?} */
            let deviceService = this.getDeviceService();
            if (updatePushIDAPI) {
                /** @type {?} */
                let _body = {
                    PushId: token,
                    DeviceSystem: deviceService.getDevicePlatform(),
                    DeviceId: deviceService.getDeviceUUID(),
                    DeviceModel: deviceService.getDeviceManufacturer(),
                    DeviceType: deviceService.isPad() ? "Pad" : "Phone"
                };
                updatePushIDAPI["body"] = _body;
                /** @type {?} */
                let resp = yield this.getAPIDispatch().dispatch(updatePushIDAPI).toPromise();
                console.log("Update PushID resp:", resp);
            }
        });
    }
}
SettingService.settingMap = new Map();
SettingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SettingService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ SettingService.ngInjectableDef = i0.defineInjectable({ factory: function SettingService_Factory() { return new SettingService(i0.inject(i0.INJECTOR)); }, token: SettingService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingService.settingMap;
    /**
     * @type {?}
     * @private
     */
    SettingService.prototype._debugMode;
    /**
     * @type {?}
     * @private
     */
    SettingService.prototype._debugSubject;
    /**
     * @type {?}
     * @private
     */
    SettingService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL3NldHRpbmcvc2V0dGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFXLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFLN0MsTUFBTTs7OztJQU1KLFlBQ1UsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUpwQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGtCQUFhLEdBQXFCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUkzRSxDQUFDOzs7O0lBRUUsY0FBYzs7WUFDZixPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTs7WUFDOUIsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7O1lBQ2xDLFVBQVUsR0FBZSxtQkFBWSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFBO1FBRXJFLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDM0QsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDcEMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7b0JBRTdDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzt3QkFDckMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7O3dCQUNuQixPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBRTVFLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQzNEO2dCQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFdEIsQ0FBQyxFQUFDLENBQUE7UUFDSixDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLFNBQWlCO1FBQ2pDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsT0FBZ0I7O1lBQy9CLGdCQUFnQixHQUFxQixtQkFBa0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBQTtRQUN2RyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3pFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTOzs7O2dCQUFDLElBQUksQ0FBQyxFQUFFO29CQUNyQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUE7UUFDSixDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLEdBQVk7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLFlBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFTSxhQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRU0sZ0JBQWdCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFWSxZQUFZLENBQUMsS0FBYTs7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxLQUFLLENBQUMsQ0FBQzs7Z0JBRWhELGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQzs7Z0JBQzdELGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0MsSUFBSSxlQUFlLEVBQUU7O29CQUNmLEtBQUssR0FBRztvQkFDVixNQUFNLEVBQUUsS0FBSztvQkFDYixZQUFZLEVBQUUsYUFBYSxDQUFDLGlCQUFpQixFQUFFO29CQUMvQyxRQUFRLEVBQUUsYUFBYSxDQUFDLGFBQWEsRUFBRTtvQkFDdkMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTtvQkFDbEQsVUFBVSxFQUFFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPO2lCQUNwRDtnQkFDRCxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDOztvQkFDNUIsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0JBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDMUM7UUFFSCxDQUFDO0tBQUE7O0FBMUZjLHlCQUFVLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7O1lBTHhELFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBWG9CLFFBQVE7Ozs7Ozs7O0lBYzNCLDBCQUF1RDs7Ozs7SUFDdkQsb0NBQW9DOzs7OztJQUNwQyx1Q0FBK0U7Ozs7O0lBRzdFLGtDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2FwaS9BUElEaXNwYXRjaCc7XG5pbXBvcnQgeyBTZXR0aW5nQVBJIH0gZnJvbSAnLi4vLi4vYXBpL3JlZ2lzdGVyL1NldHRpbmdBUEknO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gJy4uLy4uL2FwaS9BUElGYWN0b3J5JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2V0dGluZyB9IGZyb20gJy4uLy4uL2JlYW4vU2V0dGluZyc7XG5pbXBvcnQgeyBTZXR0aW5nVXBkYXRlQVBJIH0gZnJvbSAnLi4vLi4vYXBpL3JlZ2lzdGVyL1NldHRpbmdVcGRhdGVBUEknO1xuaW1wb3J0IHsgRGV2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL2RldmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdTZXJ2aWNlIHtcblxuICBwcml2YXRlIHN0YXRpYyBzZXR0aW5nTWFwID0gbmV3IE1hcDxzdHJpbmcsIFNldHRpbmc+KCk7XG4gIHByaXZhdGUgX2RlYnVnTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9kZWJ1Z1N1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2RlYnVnTW9kZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7IH1cblxuICBwdWJsaWMgX2ZldGNoQ29kZURhdGEoKSB7XG4gICAgbGV0IGZhY3RvcnkgPSB0aGlzLmdldEFQSUZhY3RvcnkoKTtcbiAgICBsZXQgZGlzcGF0Y2hlciA9IHRoaXMuZ2V0QVBJRGlzcGF0Y2goKTtcbiAgICBsZXQgc2V0dGluZ0FQSTogU2V0dGluZ0FQSSA9IDxTZXR0aW5nQVBJPmZhY3RvcnkuZ2V0QVBJKCdnZXRTZXR0aW5nJyk7XG5cbiAgICBjb25zb2xlLmRlYnVnKCdzZXR0aW5nLnNlcnZpY2UgZmV0Y2hDb2RlRGF0YScsIHNldHRpbmdBUEkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goc2V0dGluZ0FQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG5cbiAgICAgICAgbGV0IGJvZHlEYXRhcyA9IGRhdGFbJ0JvZHknXTtcbiAgICAgICAgY29uc29sZS5sb2coJzwtLS0gRGF0YXMgLS0tPicpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2R5RGF0YXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQganNvbiA9IGJvZHlEYXRhc1tpXTtcbiAgICAgICAgICBsZXQgc2V0dGluZyA9IG5ldyBTZXR0aW5nKGpzb24uU2V0dGluZ0lELCBqc29uLlNldHRpbmdOYW1lLCBqc29uLlNldHRpbmdWYWwpO1xuXG4gICAgICAgICAgU2V0dGluZ1NlcnZpY2Uuc2V0dGluZ01hcC5zZXQoc2V0dGluZy5TZXR0aW5nSUQsIHNldHRpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygncHJvZmlsZUNvZGVNYXAnLCBTZXR0aW5nU2VydmljZS5zZXR0aW5nTWFwKTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dCh0cnVlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcblxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGdldFNldHRpbmcoc2V0dGluZ0lEOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gU2V0dGluZ1NlcnZpY2Uuc2V0dGluZ01hcC5nZXQoc2V0dGluZ0lEKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVTZXR0aW5nKHNldHRpbmc6IFNldHRpbmcpIHtcbiAgICBsZXQgc2V0dGluZ1VwZGF0ZUFQSTogU2V0dGluZ1VwZGF0ZUFQSSA9IDxTZXR0aW5nVXBkYXRlQVBJPnRoaXMuZ2V0QVBJRmFjdG9yeSgpLmdldEFQSSgndXBkYXRlU2V0dGluZycpO1xuICAgIHNldHRpbmdVcGRhdGVBUEkuc2V0U2V0dGluZ09iamVjdChzZXR0aW5nKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmdldEFQSURpc3BhdGNoKCkuZGlzcGF0Y2goc2V0dGluZ1VwZGF0ZUFQSSkuc3Vic2NyaWJlKChzZXR0aW5nRGF0YSkgPT4ge1xuICAgICAgICB0aGlzLl9mZXRjaENvZGVEYXRhKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgIGNvbnNvbGUud2FybignX2ZldGNoQ29kZURhdGEnLCBkYXRhKTtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHNldHRpbmdEYXRhWydIZWFkZXInXSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgc2V0RGVidWdNb2RlKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2RlYnVnTW9kZSA9IHZhbDtcbiAgICB0aGlzLl9kZWJ1Z1N1YmplY3QubmV4dCh2YWwpO1xuICB9XG4gIHB1YmxpYyBnZXREZWJ1Z01vZGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlYnVnU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBUElGYWN0b3J5KCk6IEFQSUZhY3Rvcnkge1xuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldChBUElGYWN0b3J5KTtcbiAgfVxuICBwdWJsaWMgZ2V0QVBJRGlzcGF0Y2goKTogQVBJRGlzcGF0Y2gge1xuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldChBUElEaXNwYXRjaCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGV2aWNlU2VydmljZSgpOiBEZXZpY2VTZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoRGV2aWNlU2VydmljZSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZGV2aWNlQ2hhbmdlKHRva2VuOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhcImRldmljZSBjaGFuZ2UgZmlyZWJhc2UgdG9rZW46XCIsIHRva2VuKTtcblxuICAgIGxldCB1cGRhdGVQdXNoSURBUEkgPSB0aGlzLmdldEFQSUZhY3RvcnkoKS5nZXRBUEkoXCJVcGRhdGVQdXNoSURcIik7XG4gICAgbGV0IGRldmljZVNlcnZpY2UgPSB0aGlzLmdldERldmljZVNlcnZpY2UoKTtcbiAgICBpZiAodXBkYXRlUHVzaElEQVBJKSB7XG4gICAgICBsZXQgX2JvZHkgPSB7XG4gICAgICAgIFB1c2hJZDogdG9rZW4sXG4gICAgICAgIERldmljZVN5c3RlbTogZGV2aWNlU2VydmljZS5nZXREZXZpY2VQbGF0Zm9ybSgpLFxuICAgICAgICBEZXZpY2VJZDogZGV2aWNlU2VydmljZS5nZXREZXZpY2VVVUlEKCksXG4gICAgICAgIERldmljZU1vZGVsOiBkZXZpY2VTZXJ2aWNlLmdldERldmljZU1hbnVmYWN0dXJlcigpLFxuICAgICAgICBEZXZpY2VUeXBlOiBkZXZpY2VTZXJ2aWNlLmlzUGFkKCkgPyBcIlBhZFwiIDogXCJQaG9uZVwiXG4gICAgICB9XG4gICAgICB1cGRhdGVQdXNoSURBUElbXCJib2R5XCJdID0gX2JvZHk7XG4gICAgICBsZXQgcmVzcCA9IGF3YWl0IHRoaXMuZ2V0QVBJRGlzcGF0Y2goKS5kaXNwYXRjaCh1cGRhdGVQdXNoSURBUEkpLnRvUHJvbWlzZSgpO1xuICAgICAgY29uc29sZS5sb2coXCJVcGRhdGUgUHVzaElEIHJlc3A6XCIsIHJlc3ApO1xuICAgIH1cblxuICB9XG59XG4iXX0=