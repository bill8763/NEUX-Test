/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { LanguageCode } from '../bean/LanguageCode';
import { APIFactory } from '../api/APIFactory';
import { APIDispatch } from '../api/APIDispatch';
import { LanguageAccessToken, LanguageUpdateToken } from '../injectionToken';
import { DeviceService } from '../device/device.service';
import { SQLiteResponse } from '../device/sqlite/SQLiteResponse';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../api/APIDispatch";
import * as i3 from "../api/APIFactory";
import * as i4 from "../device/device.service";
import * as i5 from "../injectionToken/injection-token";
var TranslateService = /** @class */ (function () {
    function TranslateService(httpService, dispatcher, APIFactory, deviceService, LanguageAccess, LanguageUpdate) {
        this.httpService = httpService;
        this.dispatcher = dispatcher;
        this.APIFactory = APIFactory;
        this.deviceService = deviceService;
        this.LanguageAccess = LanguageAccess;
        this.LanguageUpdate = LanguageUpdate;
        this.language_map = {};
        this.languageMap = new Map();
        this.current_language = "";
        this.updateLanguageSubject = new BehaviorSubject(0);
    }
    /**
     * @return {?}
     */
    TranslateService.prototype.init = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadJson()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._fetchCurrentLanguage().toPromise()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    TranslateService.prototype.loadJson = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _this = this;
        console.debug('translate.service.loadjson');
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        function (res, rej) {
            //start of for mappingID
            // let languageJSON = window.localStorage.getItem('LanguageJSON');
            // if (languageJSON) {
            //   _this.language_map = JSON.parse(languageJSON);
            //   res();
            // }
            // else {
            //   _this.httpService.get("./assets/config/language.json").subscribe((json) => {
            //     console.debug('translate.service.loadjson success', json);
            //     _this.language_map = json;
            //     res();
            //   });
            // }
            // end of for mappingID
            _this.httpService.get("./assets/config/language.json").subscribe((/**
             * @param {?} json
             * @return {?}
             */
            function (json) {
                console.debug('translate.service.loadjson success', json);
                _this.language_map = json;
                res();
            }));
        }));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TranslateService.prototype.translate = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        //for test language
        if (this.current_language === 'MappingID') {
            return '${' + key + '}';
        }
        // console.log("==============translate start==============");
        // console.log("Current Language :  " + this.current_language);
        // console.log("Translate Key (Mapping ID) : " + key);
        // console.log("Translate (Text) " + this.language_map[this.current_language][key]);
        // console.log("==============translate end==============");
        /** @type {?} */
        var translateResult = this.language_map[this.current_language][key];
        if (translateResult === null || translateResult === undefined) {
            return key;
        }
        else {
            return translateResult;
        }
    };
    /**
     * @param {?} mappingID
     * @param {?} map
     * @return {?}
     */
    TranslateService.prototype.translateWithVariable = /**
     * @param {?} mappingID
     * @param {?} map
     * @return {?}
     */
    function (mappingID, map) {
        /** @type {?} */
        var displayText = this.translate(mappingID);
        Object.keys(map).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (map[key] == null || map[key] == undefined) {
                map[key] = '';
            }
            displayText = displayText.replace(new RegExp("\\$\\{" + key + "\\}", 'g'), map[key].toString());
        }));
        return displayText;
    };
    /**
     * @return {?}
     */
    TranslateService.prototype._fetchCurrentLanguage = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            if (_this_1.LanguageAccess) {
                _this_1.LanguageAccess.getCurrentLanguage().subscribe((/**
                 * @param {?} language
                 * @return {?}
                 */
                function (language) {
                    _this_1.current_language = language;
                    observer.next(language);
                    observer.complete();
                }));
            }
            else {
                console.log("Default _fetchCurrentLanguage");
                /** @type {?} */
                var currentLanguage = _this_1.deviceService.getLocalStorage("SNDLanguage") || 'en';
                _this_1.current_language = currentLanguage;
                _this_1.deviceService.setLocalStorage("SNDLanguage", currentLanguage);
                observer.next(_this_1.current_language);
                observer.complete();
            }
        }));
    };
    /**
     * @return {?}
     */
    TranslateService.prototype._fetchCodeData = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        /** @type {?} */
        var currentLanguageListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCurrentLanguageList')));
        /** @type {?} */
        var codeArray = [];
        console.debug('setting.service fetchCodeData', currentLanguageListAPI);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this_1.dispatcher.dispatch(currentLanguageListAPI).subscribe((/**
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
                    var language = new LanguageCode(json.LanguageID, json.Name, json.IsDefault);
                    codeArray.push(language);
                    _this_1.languageMap.set('TW_LH_SD_Language', codeArray);
                }
                console.debug('languageMap', _this_1.languageMap);
                observer.next(true);
                observer.complete();
            }));
        }));
    };
    /**
     * @return {?}
     */
    TranslateService.prototype.getCodeArray = /**
     * @return {?}
     */
    function () {
        if (this.languageMap.size != 0) {
            /** @type {?} */
            var codeArray = this.languageMap.get('TW_LH_SD_Language');
            if (codeArray == undefined)
                codeArray = new Array();
            return codeArray;
        }
        return new Array();
    };
    /**
     * @param {?} newLanguage
     * @return {?}
     */
    TranslateService.prototype.updateLanguage = /**
     * @param {?} newLanguage
     * @return {?}
     */
    function (newLanguage) {
        var _this_1 = this;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            if (_this_1.LanguageUpdate) {
                _this_1.LanguageUpdate.UpdateLanguage(newLanguage).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                _this_1.deviceService.setLocalStorage("SNDLanguage", newLanguage);
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }
            _this_1._fetchCurrentLanguage().subscribe((/**
             * @param {?} language
             * @return {?}
             */
            function (language) {
                _this_1.current_language = language;
                _this_1.updateLanguageSubject.next();
            }));
        }));
    };
    /**
     * @return {?}
     */
    TranslateService.prototype.getCurrentLanguage = /**
     * @return {?}
     */
    function () {
        return this.current_language;
    };
    /**
     * @return {?}
     */
    TranslateService.prototype.getUpdateSubject = /**
     * @return {?}
     */
    function () {
        return this.updateLanguageSubject;
    };
    TranslateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    TranslateService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: APIDispatch },
        { type: APIFactory },
        { type: DeviceService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LanguageAccessToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LanguageUpdateToken,] }] }
    ]; };
    /** @nocollapse */ TranslateService.ngInjectableDef = i0.defineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(i0.inject(i1.HttpClient), i0.inject(i2.APIDispatch), i0.inject(i3.APIFactory), i0.inject(i4.DeviceService), i0.inject(i5.LanguageAccessToken, 8), i0.inject(i5.LanguageUpdateToken, 8)); }, token: TranslateService, providedIn: "root" });
    return TranslateService;
}());
export { TranslateService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.language_map;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.languageMap;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.current_language;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.updateLanguageSubject;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.LanguageAccess;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.LanguageUpdate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2xhbmd1YWdlL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVksUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsVUFBVSxFQUFXLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUc3RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7O0FBRWpFO0lBUUUsMEJBQW9CLFdBQXVCLEVBQ2pDLFVBQXVCLEVBQ3ZCLFVBQXNCLEVBQ3RCLGFBQTRCLEVBQ2EsY0FBK0IsRUFDL0IsY0FBK0I7UUFMOUQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDakMsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ2EsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQVQxRSxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixnQkFBVyxHQUFHLElBQUksR0FBRyxFQUErQixDQUFDO1FB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LHVDQUE2RDs7Ozs7SUFDN0QsNENBQThCOzs7OztJQUM5QixpREFBMEU7Ozs7O0lBQzlELHVDQUErQjs7Ozs7SUFDekMsc0NBQStCOzs7OztJQUMvQixzQ0FBOEI7Ozs7O0lBQzlCLHlDQUFvQzs7Ozs7SUFDcEMsMENBQWdGOzs7OztJQUNoRiwwQ0FBZ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEN1cnJlbnRMYW5ndWFnZUxpc3RBUEkgfSBmcm9tICcuLi9hcGkvcmVnaXN0ZXIvQ3VycmVudExhbmd1YWdlTGlzdEFQSSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExhbmd1YWdlQ29kZSB9IGZyb20gJy4uL2JlYW4vTGFuZ3VhZ2VDb2RlJztcbmltcG9ydCB7IEFQSUZhY3RvcnkgfSBmcm9tICcuLi9hcGkvQVBJRmFjdG9yeSc7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCB9IGZyb20gJy4uL2FwaS9BUElEaXNwYXRjaCdcbmltcG9ydCB7IExhbmd1YWdlQWNjZXNzVG9rZW4sIExhbmd1YWdlVXBkYXRlVG9rZW4gfSBmcm9tICcuLi9pbmplY3Rpb25Ub2tlbic7XG5pbXBvcnQgeyBJTGFuZ3VhZ2VBY2Nlc3MgfSBmcm9tICcuL0lMYW5ndWFnZUFjY2Vzcyc7XG5pbXBvcnQgeyBJTGFuZ3VhZ2VVcGRhdGUgfSBmcm9tICcuL0lMYW5ndWFnZVVwZGF0ZSc7XG5pbXBvcnQgeyBEZXZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vZGV2aWNlL2RldmljZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSAnLi4vZGV2aWNlL3NxbGl0ZS9TUUxpdGVSZXNwb25zZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XG4gIHByaXZhdGUgbGFuZ3VhZ2VfbWFwID0ge307XG4gIHByaXZhdGUgbGFuZ3VhZ2VNYXAgPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8TGFuZ3VhZ2VDb2RlPj4oKTtcbiAgcHJpdmF0ZSBjdXJyZW50X2xhbmd1YWdlID0gXCJcIjtcbiAgcHJpdmF0ZSB1cGRhdGVMYW5ndWFnZVN1YmplY3Q6IFN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PigwKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLFxuICAgIHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSxcbiAgICBwcml2YXRlIGRldmljZVNlcnZpY2U6IERldmljZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMYW5ndWFnZUFjY2Vzc1Rva2VuKSBwcml2YXRlIExhbmd1YWdlQWNjZXNzOiBJTGFuZ3VhZ2VBY2Nlc3MsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMYW5ndWFnZVVwZGF0ZVRva2VuKSBwcml2YXRlIExhbmd1YWdlVXBkYXRlOiBJTGFuZ3VhZ2VVcGRhdGUpIHtcbiAgfVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkSnNvbigpO1xuICAgIGF3YWl0IHRoaXMuX2ZldGNoQ3VycmVudExhbmd1YWdlKCkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBsb2FkSnNvbigpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnNvbGUuZGVidWcoJ3RyYW5zbGF0ZS5zZXJ2aWNlLmxvYWRqc29uJyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAvL3N0YXJ0IG9mIGZvciBtYXBwaW5nSURcbiAgICAgIC8vIGxldCBsYW5ndWFnZUpTT04gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0xhbmd1YWdlSlNPTicpO1xuICAgICAgLy8gaWYgKGxhbmd1YWdlSlNPTikge1xuICAgICAgLy8gICBfdGhpcy5sYW5ndWFnZV9tYXAgPSBKU09OLnBhcnNlKGxhbmd1YWdlSlNPTik7XG4gICAgICAvLyAgIHJlcygpO1xuICAgICAgLy8gfVxuICAgICAgLy8gZWxzZSB7XG4gICAgICAvLyAgIF90aGlzLmh0dHBTZXJ2aWNlLmdldChcIi4vYXNzZXRzL2NvbmZpZy9sYW5ndWFnZS5qc29uXCIpLnN1YnNjcmliZSgoanNvbikgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUuZGVidWcoJ3RyYW5zbGF0ZS5zZXJ2aWNlLmxvYWRqc29uIHN1Y2Nlc3MnLCBqc29uKTtcbiAgICAgIC8vICAgICBfdGhpcy5sYW5ndWFnZV9tYXAgPSBqc29uO1xuICAgICAgLy8gICAgIHJlcygpO1xuICAgICAgLy8gICB9KTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGVuZCBvZiBmb3IgbWFwcGluZ0lEXG4gICAgICBfdGhpcy5odHRwU2VydmljZS5nZXQoXCIuL2Fzc2V0cy9jb25maWcvbGFuZ3VhZ2UuanNvblwiKS5zdWJzY3JpYmUoKGpzb24pID0+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygndHJhbnNsYXRlLnNlcnZpY2UubG9hZGpzb24gc3VjY2VzcycsIGpzb24pO1xuICAgICAgICBfdGhpcy5sYW5ndWFnZV9tYXAgPSBqc29uO1xuICAgICAgICByZXMoKTtcbiAgICAgIH0pO1xuICAgIH0pXG5cbiAgfVxuXG4gIHRyYW5zbGF0ZShrZXkpIHtcbiAgICAvL2ZvciB0ZXN0IGxhbmd1YWdlXG4gICAgaWYgKHRoaXMuY3VycmVudF9sYW5ndWFnZSA9PT0gJ01hcHBpbmdJRCcpIHtcbiAgICAgIHJldHVybiAnJHsnICsga2V5ICsgJ30nO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09dHJhbnNsYXRlIHN0YXJ0PT09PT09PT09PT09PT1cIik7XG4gICAgLy8gY29uc29sZS5sb2coXCJDdXJyZW50IExhbmd1YWdlIDogIFwiICsgdGhpcy5jdXJyZW50X2xhbmd1YWdlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIlRyYW5zbGF0ZSBLZXkgKE1hcHBpbmcgSUQpIDogXCIgKyBrZXkpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiVHJhbnNsYXRlIChUZXh0KSBcIiArIHRoaXMubGFuZ3VhZ2VfbWFwW3RoaXMuY3VycmVudF9sYW5ndWFnZV1ba2V5XSk7XG4gICAgLy8gY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PXRyYW5zbGF0ZSBlbmQ9PT09PT09PT09PT09PVwiKTtcbiAgICBsZXQgdHJhbnNsYXRlUmVzdWx0ID0gdGhpcy5sYW5ndWFnZV9tYXBbdGhpcy5jdXJyZW50X2xhbmd1YWdlXVtrZXldO1xuICAgIGlmICh0cmFuc2xhdGVSZXN1bHQgPT09IG51bGwgfHwgdHJhbnNsYXRlUmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZVJlc3VsdDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdHJhbnNsYXRlV2l0aFZhcmlhYmxlKG1hcHBpbmdJRDogc3RyaW5nLCBtYXA6IGFueSkge1xuICAgIGxldCBkaXNwbGF5VGV4dCA9IHRoaXMudHJhbnNsYXRlKG1hcHBpbmdJRCk7XG5cbiAgICBPYmplY3Qua2V5cyhtYXApLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKG1hcFtrZXldID09IG51bGwgfHwgbWFwW2tleV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1hcFtrZXldID0gJyc7XG4gICAgICB9XG4gICAgICBkaXNwbGF5VGV4dCA9IGRpc3BsYXlUZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXCRcXFxceyR7a2V5fVxcXFx9YCwgJ2cnKSwgbWFwW2tleV0udG9TdHJpbmcoKSk7XG4gICAgfSlcblxuICAgIHJldHVybiBkaXNwbGF5VGV4dDtcblxuICB9XG5cbiAgcHVibGljIF9mZXRjaEN1cnJlbnRMYW5ndWFnZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLkxhbmd1YWdlQWNjZXNzKSB7XG4gICAgICAgIHRoaXMuTGFuZ3VhZ2VBY2Nlc3MuZ2V0Q3VycmVudExhbmd1YWdlKCkuc3Vic2NyaWJlKChsYW5ndWFnZSkgPT4ge1xuICAgICAgICAgIHRoaXMuY3VycmVudF9sYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgICAgICAgIG9ic2VydmVyLm5leHQobGFuZ3VhZ2UpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEZWZhdWx0IF9mZXRjaEN1cnJlbnRMYW5ndWFnZVwiKTtcbiAgICAgICAgbGV0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMuZGV2aWNlU2VydmljZS5nZXRMb2NhbFN0b3JhZ2UoXCJTTkRMYW5ndWFnZVwiKSB8fCAnZW4nO1xuICAgICAgICB0aGlzLmN1cnJlbnRfbGFuZ3VhZ2UgPSBjdXJyZW50TGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMuZGV2aWNlU2VydmljZS5zZXRMb2NhbFN0b3JhZ2UoXCJTTkRMYW5ndWFnZVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xuICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMuY3VycmVudF9sYW5ndWFnZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgX2ZldGNoQ29kZURhdGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgY3VycmVudExhbmd1YWdlTGlzdEFQSTogYW55ID0gPEN1cnJlbnRMYW5ndWFnZUxpc3RBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q3VycmVudExhbmd1YWdlTGlzdCcpO1xuICAgIGxldCBjb2RlQXJyYXk6IEFycmF5PExhbmd1YWdlQ29kZT4gPSBbXTtcblxuICAgIGNvbnNvbGUuZGVidWcoJ3NldHRpbmcuc2VydmljZSBmZXRjaENvZGVEYXRhJywgY3VycmVudExhbmd1YWdlTGlzdEFQSSk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGN1cnJlbnRMYW5ndWFnZUxpc3RBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuXG4gICAgICAgIGxldCBib2R5RGF0YXMgPSBkYXRhWydCb2R5J107XG4gICAgICAgIGNvbnNvbGUubG9nKCc8LS0tIERhdGFzIC0tLT4nKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9keURhdGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGpzb24gPSBib2R5RGF0YXNbaV07XG4gICAgICAgICAgbGV0IGxhbmd1YWdlID0gbmV3IExhbmd1YWdlQ29kZShqc29uLkxhbmd1YWdlSUQsIGpzb24uTmFtZSwganNvbi5Jc0RlZmF1bHQpO1xuICAgICAgICAgIGNvZGVBcnJheS5wdXNoKGxhbmd1YWdlKTtcblxuICAgICAgICAgIHRoaXMubGFuZ3VhZ2VNYXAuc2V0KCdUV19MSF9TRF9MYW5ndWFnZScsIGNvZGVBcnJheSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdsYW5ndWFnZU1hcCcsIHRoaXMubGFuZ3VhZ2VNYXApO1xuICAgICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZ2V0Q29kZUFycmF5KCkge1xuICAgIGlmICh0aGlzLmxhbmd1YWdlTWFwLnNpemUgIT0gMCkge1xuICAgICAgbGV0IGNvZGVBcnJheTogQXJyYXk8TGFuZ3VhZ2VDb2RlPiA9IHRoaXMubGFuZ3VhZ2VNYXAuZ2V0KCdUV19MSF9TRF9MYW5ndWFnZScpO1xuICAgICAgaWYgKGNvZGVBcnJheSA9PSB1bmRlZmluZWQpIGNvZGVBcnJheSA9IG5ldyBBcnJheTxMYW5ndWFnZUNvZGU+KCk7XG4gICAgICByZXR1cm4gY29kZUFycmF5O1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEFycmF5PExhbmd1YWdlQ29kZT4oKTtcbiAgfVxuXG5cblxuICBwdWJsaWMgdXBkYXRlTGFuZ3VhZ2UobmV3TGFuZ3VhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuXG4gICAgICBpZiAodGhpcy5MYW5ndWFnZVVwZGF0ZSkge1xuICAgICAgICB0aGlzLkxhbmd1YWdlVXBkYXRlLlVwZGF0ZUxhbmd1YWdlKG5ld0xhbmd1YWdlKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZGV2aWNlU2VydmljZS5zZXRMb2NhbFN0b3JhZ2UoXCJTTkRMYW5ndWFnZVwiLCBuZXdMYW5ndWFnZSk7XG4gICAgICAgIG9ic2VydmVyLm5leHQobmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiB0cnVlIH0sIFtdKSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cbiAgICAgIH1cbiAgICAgIHRoaXMuX2ZldGNoQ3VycmVudExhbmd1YWdlKCkuc3Vic2NyaWJlKChsYW5ndWFnZSkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRfbGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICAgICAgdGhpcy51cGRhdGVMYW5ndWFnZVN1YmplY3QubmV4dCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q3VycmVudExhbmd1YWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudF9sYW5ndWFnZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVcGRhdGVTdWJqZWN0KCk6IFN1YmplY3Q8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlTGFuZ3VhZ2VTdWJqZWN0O1xuICB9XG59XG5cbiJdfQ==