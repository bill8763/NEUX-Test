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
var SettingService = /** @class */ (function () {
    function SettingService(injector) {
        this.injector = injector;
        this._debugMode = false;
        this._debugSubject = new BehaviorSubject(this._debugMode);
    }
    /**
     * @return {?}
     */
    SettingService.prototype._fetchCodeData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = this.getAPIFactory();
        /** @type {?} */
        var dispatcher = this.getAPIDispatch();
        /** @type {?} */
        var settingAPI = (/** @type {?} */ (factory.getAPI('getSetting')));
        console.debug('setting.service fetchCodeData', settingAPI);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            dispatcher.dispatch(settingAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                /** @type {?} */
                var bodyDatas = data['Body'];
                console.log('<--- Datas --->');
                console.log(data);
                for (var i = 0; i < bodyDatas.length; i++) {
                    /** @type {?} */
                    var json = bodyDatas[i];
                    /** @type {?} */
                    var setting = new Setting(json.SettingID, json.SettingName, json.SettingVal);
                    SettingService.settingMap.set(setting.SettingID, setting);
                }
                console.debug('profileCodeMap', SettingService.settingMap);
                observer.next(true);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} settingID
     * @return {?}
     */
    SettingService.prototype.getSetting = /**
     * @param {?} settingID
     * @return {?}
     */
    function (settingID) {
        return SettingService.settingMap.get(settingID);
    };
    /**
     * @param {?} setting
     * @return {?}
     */
    SettingService.prototype.updateSetting = /**
     * @param {?} setting
     * @return {?}
     */
    function (setting) {
        var _this = this;
        /** @type {?} */
        var settingUpdateAPI = (/** @type {?} */ (this.getAPIFactory().getAPI('updateSetting')));
        settingUpdateAPI.setSettingObject(setting);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.getAPIDispatch().dispatch(settingUpdateAPI).subscribe((/**
             * @param {?} settingData
             * @return {?}
             */
            function (settingData) {
                _this._fetchCodeData().subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    console.warn('_fetchCodeData', data);
                    observer.next(settingData['Header']);
                    observer.complete();
                }));
            }));
        }));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SettingService.prototype.setDebugMode = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._debugMode = val;
        this._debugSubject.next(val);
    };
    /**
     * @return {?}
     */
    SettingService.prototype.getDebugMode = /**
     * @return {?}
     */
    function () {
        return this._debugSubject.asObservable();
    };
    /**
     * @return {?}
     */
    SettingService.prototype.getAPIFactory = /**
     * @return {?}
     */
    function () {
        return this.injector.get(APIFactory);
    };
    /**
     * @return {?}
     */
    SettingService.prototype.getAPIDispatch = /**
     * @return {?}
     */
    function () {
        return this.injector.get(APIDispatch);
    };
    /**
     * @return {?}
     */
    SettingService.prototype.getDeviceService = /**
     * @return {?}
     */
    function () {
        return this.injector.get(DeviceService);
    };
    /**
     * @param {?} token
     * @return {?}
     */
    SettingService.prototype.deviceChange = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var updatePushIDAPI, deviceService, _body, resp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("device change firebase token:", token);
                        updatePushIDAPI = this.getAPIFactory().getAPI("UpdatePushID");
                        deviceService = this.getDeviceService();
                        if (!updatePushIDAPI) return [3 /*break*/, 2];
                        _body = {
                            PushId: token,
                            DeviceSystem: deviceService.getDevicePlatform(),
                            DeviceId: deviceService.getDeviceUUID(),
                            DeviceModel: deviceService.getDeviceManufacturer(),
                            DeviceType: deviceService.isPad() ? "Pad" : "Phone"
                        };
                        updatePushIDAPI["body"] = _body;
                        return [4 /*yield*/, this.getAPIDispatch().dispatch(updatePushIDAPI).toPromise()];
                    case 1:
                        resp = _a.sent();
                        console.log("Update PushID resp:", resp);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SettingService.settingMap = new Map();
    SettingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SettingService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ SettingService.ngInjectableDef = i0.defineInjectable({ factory: function SettingService_Factory() { return new SettingService(i0.inject(i0.INJECTOR)); }, token: SettingService, providedIn: "root" });
    return SettingService;
}());
export { SettingService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL3NldHRpbmcvc2V0dGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFXLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFN0M7SUFTRSx3QkFDVSxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSnBCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsa0JBQWEsR0FBcUIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBSTNFLENBQUM7Ozs7SUFFRSx1Q0FBYzs7O0lBQXJCOztZQUNNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFOztZQUM5QixVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTs7WUFDbEMsVUFBVSxHQUFlLG1CQUFZLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUE7UUFFckUsT0FBTyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMzRCxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFRO1lBQ2hDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsSUFBSTs7b0JBRXpDLFNB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Q0FBQywrQkFBK0IsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFFaEQsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO3dCQUM3RCxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFOzZCQUN2QyxlQUFlLEVBQWYsd0JBQWU7d0JBQ2IsS0FBSyxHQUFHOzRCQUNWLE1BQU0sRUFBRSxLQUFLOzRCQUNiLFlBQVksRUFBRSxhQUFhLENBQUMsaUJBQWlCLEVBQUU7NEJBQy9DLFFBQVEsRUFBRSxhQUFhLENBQUMsYUFBYSxFQUFFOzRCQUN2QyxXQUFXLEVBQUUsYUFBYSxDQUFDLHFCQUFxQixFQUFFOzRCQUNsRCxVQUFVLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU87eUJBQ3BEO3dCQUNELGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7d0JBQ3JCLHFCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUF4RSxJQUFJLEdBQUcsU0FBaUU7d0JBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7OztLQUc1QztJQTFGYyx5QkFBVSxHQUFHLElBQUksR0FBRyxFQUFtQixDQUFDOztnQkFMeEQsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O2dCQVhvQixRQUFROzs7eUJBQTdCO0NBeUdDLEFBaEdELElBZ0dDO1NBN0ZZLGNBQWM7Ozs7OztJQUV6QiwwQkFBdUQ7Ozs7O0lBQ3ZELG9DQUFvQzs7Ozs7SUFDcEMsdUNBQStFOzs7OztJQUc3RSxrQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9hcGkvQVBJRGlzcGF0Y2gnO1xuaW1wb3J0IHsgU2V0dGluZ0FQSSB9IGZyb20gJy4uLy4uL2FwaS9yZWdpc3Rlci9TZXR0aW5nQVBJJztcbmltcG9ydCB7IEFQSUZhY3RvcnkgfSBmcm9tICcuLi8uLi9hcGkvQVBJRmFjdG9yeSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNldHRpbmcgfSBmcm9tICcuLi8uLi9iZWFuL1NldHRpbmcnO1xuaW1wb3J0IHsgU2V0dGluZ1VwZGF0ZUFQSSB9IGZyb20gJy4uLy4uL2FwaS9yZWdpc3Rlci9TZXR0aW5nVXBkYXRlQVBJJztcbmltcG9ydCB7IERldmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9kZXZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2V0dGluZ01hcCA9IG5ldyBNYXA8c3RyaW5nLCBTZXR0aW5nPigpO1xuICBwcml2YXRlIF9kZWJ1Z01vZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGVidWdTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLl9kZWJ1Z01vZGUpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkgeyB9XG5cbiAgcHVibGljIF9mZXRjaENvZGVEYXRhKCkge1xuICAgIGxldCBmYWN0b3J5ID0gdGhpcy5nZXRBUElGYWN0b3J5KCk7XG4gICAgbGV0IGRpc3BhdGNoZXIgPSB0aGlzLmdldEFQSURpc3BhdGNoKCk7XG4gICAgbGV0IHNldHRpbmdBUEk6IFNldHRpbmdBUEkgPSA8U2V0dGluZ0FQST5mYWN0b3J5LmdldEFQSSgnZ2V0U2V0dGluZycpO1xuXG4gICAgY29uc29sZS5kZWJ1Zygnc2V0dGluZy5zZXJ2aWNlIGZldGNoQ29kZURhdGEnLCBzZXR0aW5nQVBJKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKHNldHRpbmdBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuXG4gICAgICAgIGxldCBib2R5RGF0YXMgPSBkYXRhWydCb2R5J107XG4gICAgICAgIGNvbnNvbGUubG9nKCc8LS0tIERhdGFzIC0tLT4nKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9keURhdGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGpzb24gPSBib2R5RGF0YXNbaV07XG4gICAgICAgICAgbGV0IHNldHRpbmcgPSBuZXcgU2V0dGluZyhqc29uLlNldHRpbmdJRCwganNvbi5TZXR0aW5nTmFtZSwganNvbi5TZXR0aW5nVmFsKTtcblxuICAgICAgICAgIFNldHRpbmdTZXJ2aWNlLnNldHRpbmdNYXAuc2V0KHNldHRpbmcuU2V0dGluZ0lELCBzZXR0aW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ3Byb2ZpbGVDb2RlTWFwJywgU2V0dGluZ1NlcnZpY2Uuc2V0dGluZ01hcCk7XG4gICAgICAgIG9ic2VydmVyLm5leHQodHJ1ZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZXR0aW5nKHNldHRpbmdJRDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIFNldHRpbmdTZXJ2aWNlLnNldHRpbmdNYXAuZ2V0KHNldHRpbmdJRCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlU2V0dGluZyhzZXR0aW5nOiBTZXR0aW5nKSB7XG4gICAgbGV0IHNldHRpbmdVcGRhdGVBUEk6IFNldHRpbmdVcGRhdGVBUEkgPSA8U2V0dGluZ1VwZGF0ZUFQST50aGlzLmdldEFQSUZhY3RvcnkoKS5nZXRBUEkoJ3VwZGF0ZVNldHRpbmcnKTtcbiAgICBzZXR0aW5nVXBkYXRlQVBJLnNldFNldHRpbmdPYmplY3Qoc2V0dGluZyk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5nZXRBUElEaXNwYXRjaCgpLmRpc3BhdGNoKHNldHRpbmdVcGRhdGVBUEkpLnN1YnNjcmliZSgoc2V0dGluZ0RhdGEpID0+IHtcbiAgICAgICAgdGhpcy5fZmV0Y2hDb2RlRGF0YSgpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ19mZXRjaENvZGVEYXRhJywgZGF0YSk7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChzZXR0aW5nRGF0YVsnSGVhZGVyJ10pO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIHNldERlYnVnTW9kZSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kZWJ1Z01vZGUgPSB2YWw7XG4gICAgdGhpcy5fZGVidWdTdWJqZWN0Lm5leHQodmFsKTtcbiAgfVxuICBwdWJsaWMgZ2V0RGVidWdNb2RlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9kZWJ1Z1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QVBJRmFjdG9yeSgpOiBBUElGYWN0b3J5IHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoQVBJRmFjdG9yeSk7XG4gIH1cbiAgcHVibGljIGdldEFQSURpc3BhdGNoKCk6IEFQSURpc3BhdGNoIHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoQVBJRGlzcGF0Y2gpO1xuICB9XG5cbiAgcHVibGljIGdldERldmljZVNlcnZpY2UoKTogRGV2aWNlU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KERldmljZVNlcnZpY2UpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGRldmljZUNoYW5nZSh0b2tlbjogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coXCJkZXZpY2UgY2hhbmdlIGZpcmViYXNlIHRva2VuOlwiLCB0b2tlbik7XG5cbiAgICBsZXQgdXBkYXRlUHVzaElEQVBJID0gdGhpcy5nZXRBUElGYWN0b3J5KCkuZ2V0QVBJKFwiVXBkYXRlUHVzaElEXCIpO1xuICAgIGxldCBkZXZpY2VTZXJ2aWNlID0gdGhpcy5nZXREZXZpY2VTZXJ2aWNlKCk7XG4gICAgaWYgKHVwZGF0ZVB1c2hJREFQSSkge1xuICAgICAgbGV0IF9ib2R5ID0ge1xuICAgICAgICBQdXNoSWQ6IHRva2VuLFxuICAgICAgICBEZXZpY2VTeXN0ZW06IGRldmljZVNlcnZpY2UuZ2V0RGV2aWNlUGxhdGZvcm0oKSxcbiAgICAgICAgRGV2aWNlSWQ6IGRldmljZVNlcnZpY2UuZ2V0RGV2aWNlVVVJRCgpLFxuICAgICAgICBEZXZpY2VNb2RlbDogZGV2aWNlU2VydmljZS5nZXREZXZpY2VNYW51ZmFjdHVyZXIoKSxcbiAgICAgICAgRGV2aWNlVHlwZTogZGV2aWNlU2VydmljZS5pc1BhZCgpID8gXCJQYWRcIiA6IFwiUGhvbmVcIlxuICAgICAgfVxuICAgICAgdXBkYXRlUHVzaElEQVBJW1wiYm9keVwiXSA9IF9ib2R5O1xuICAgICAgbGV0IHJlc3AgPSBhd2FpdCB0aGlzLmdldEFQSURpc3BhdGNoKCkuZGlzcGF0Y2godXBkYXRlUHVzaElEQVBJKS50b1Byb21pc2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlIFB1c2hJRCByZXNwOlwiLCByZXNwKTtcbiAgICB9XG5cbiAgfVxufVxuIl19