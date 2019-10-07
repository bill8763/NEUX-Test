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
export class TranslateService {
    /**
     * @param {?} httpService
     * @param {?} dispatcher
     * @param {?} APIFactory
     * @param {?} deviceService
     * @param {?} LanguageAccess
     * @param {?} LanguageUpdate
     */
    constructor(httpService, dispatcher, APIFactory, deviceService, LanguageAccess, LanguageUpdate) {
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
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.loadJson();
            yield this._fetchCurrentLanguage().toPromise();
        });
    }
    /**
     * @return {?}
     */
    loadJson() {
        /** @type {?} */
        let _this = this;
        console.debug('translate.service.loadjson');
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
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
            (json) => {
                console.debug('translate.service.loadjson success', json);
                _this.language_map = json;
                res();
            }));
        }));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    translate(key) {
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
        let translateResult = this.language_map[this.current_language][key];
        if (translateResult === null || translateResult === undefined) {
            return key;
        }
        else {
            return translateResult;
        }
    }
    /**
     * @param {?} mappingID
     * @param {?} map
     * @return {?}
     */
    translateWithVariable(mappingID, map) {
        /** @type {?} */
        let displayText = this.translate(mappingID);
        Object.keys(map).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            if (map[key] == null || map[key] == undefined) {
                map[key] = '';
            }
            displayText = displayText.replace(new RegExp(`\\$\\{${key}\\}`, 'g'), map[key].toString());
        }));
        return displayText;
    }
    /**
     * @return {?}
     */
    _fetchCurrentLanguage() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            if (this.LanguageAccess) {
                this.LanguageAccess.getCurrentLanguage().subscribe((/**
                 * @param {?} language
                 * @return {?}
                 */
                (language) => {
                    this.current_language = language;
                    observer.next(language);
                    observer.complete();
                }));
            }
            else {
                console.log("Default _fetchCurrentLanguage");
                /** @type {?} */
                let currentLanguage = this.deviceService.getLocalStorage("SNDLanguage") || 'en';
                this.current_language = currentLanguage;
                this.deviceService.setLocalStorage("SNDLanguage", currentLanguage);
                observer.next(this.current_language);
                observer.complete();
            }
        }));
    }
    /**
     * @return {?}
     */
    _fetchCodeData() {
        /** @type {?} */
        let currentLanguageListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCurrentLanguageList')));
        /** @type {?} */
        let codeArray = [];
        console.debug('setting.service fetchCodeData', currentLanguageListAPI);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(currentLanguageListAPI).subscribe((/**
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
                    let language = new LanguageCode(json.LanguageID, json.Name, json.IsDefault);
                    codeArray.push(language);
                    this.languageMap.set('TW_LH_SD_Language', codeArray);
                }
                console.debug('languageMap', this.languageMap);
                observer.next(true);
                observer.complete();
            }));
        }));
    }
    /**
     * @return {?}
     */
    getCodeArray() {
        if (this.languageMap.size != 0) {
            /** @type {?} */
            let codeArray = this.languageMap.get('TW_LH_SD_Language');
            if (codeArray == undefined)
                codeArray = new Array();
            return codeArray;
        }
        return new Array();
    }
    /**
     * @param {?} newLanguage
     * @return {?}
     */
    updateLanguage(newLanguage) {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            if (this.LanguageUpdate) {
                this.LanguageUpdate.UpdateLanguage(newLanguage).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                this.deviceService.setLocalStorage("SNDLanguage", newLanguage);
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }
            this._fetchCurrentLanguage().subscribe((/**
             * @param {?} language
             * @return {?}
             */
            (language) => {
                this.current_language = language;
                this.updateLanguageSubject.next();
            }));
        }));
    }
    /**
     * @return {?}
     */
    getCurrentLanguage() {
        return this.current_language;
    }
    /**
     * @return {?}
     */
    getUpdateSubject() {
        return this.updateLanguageSubject;
    }
}
TranslateService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
TranslateService.ctorParameters = () => [
    { type: HttpClient },
    { type: APIDispatch },
    { type: APIFactory },
    { type: DeviceService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LanguageAccessToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LanguageUpdateToken,] }] }
];
/** @nocollapse */ TranslateService.ngInjectableDef = i0.defineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(i0.inject(i1.HttpClient), i0.inject(i2.APIDispatch), i0.inject(i3.APIFactory), i0.inject(i4.DeviceService), i0.inject(i5.LanguageAccessToken, 8), i0.inject(i5.LanguageUpdateToken, 8)); }, token: TranslateService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2xhbmd1YWdlL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVksUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsVUFBVSxFQUFXLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUc3RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7O0FBS2pFLE1BQU07Ozs7Ozs7OztJQUtKLFlBQW9CLFdBQXVCLEVBQ2pDLFVBQXVCLEVBQ3ZCLFVBQXNCLEVBQ3RCLGFBQTRCLEVBQ2EsY0FBK0IsRUFDL0IsY0FBK0I7UUFMOUQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDakMsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ2EsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQVQxRSxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixnQkFBVyxHQUFHLElBQUksR0FBRyxF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Ozs7SUFDOUIseUNBQW9DOzs7OztJQUNwQywwQ0FBZ0Y7Ozs7O0lBQ2hGLDBDQUFnRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ3VycmVudExhbmd1YWdlTGlzdEFQSSB9IGZyb20gJy4uL2FwaS9yZWdpc3Rlci9DdXJyZW50TGFuZ3VhZ2VMaXN0QVBJJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb2RlIH0gZnJvbSAnLi4vYmVhbi9MYW5ndWFnZUNvZGUnO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gJy4uL2FwaS9BUElGYWN0b3J5JztcbmltcG9ydCB7IEFQSURpc3BhdGNoIH0gZnJvbSAnLi4vYXBpL0FQSURpc3BhdGNoJ1xuaW1wb3J0IHsgTGFuZ3VhZ2VBY2Nlc3NUb2tlbiwgTGFuZ3VhZ2VVcGRhdGVUb2tlbiB9IGZyb20gJy4uL2luamVjdGlvblRva2VuJztcbmltcG9ydCB7IElMYW5ndWFnZUFjY2VzcyB9IGZyb20gJy4vSUxhbmd1YWdlQWNjZXNzJztcbmltcG9ydCB7IElMYW5ndWFnZVVwZGF0ZSB9IGZyb20gJy4vSUxhbmd1YWdlVXBkYXRlJztcbmltcG9ydCB7IERldmljZVNlcnZpY2UgfSBmcm9tICcuLi9kZXZpY2UvZGV2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU1FMaXRlUmVzcG9uc2UgfSBmcm9tICcuLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVJlc3BvbnNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsYW5ndWFnZV9tYXAgPSB7fTtcbiAgcHJpdmF0ZSBsYW5ndWFnZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxMYW5ndWFnZUNvZGU+PigpO1xuICBwcml2YXRlIGN1cnJlbnRfbGFuZ3VhZ2UgPSBcIlwiO1xuICBwcml2YXRlIHVwZGF0ZUxhbmd1YWdlU3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KDApO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgZGlzcGF0Y2hlcjogQVBJRGlzcGF0Y2gsXG4gICAgcHJpdmF0ZSBBUElGYWN0b3J5OiBBUElGYWN0b3J5LFxuICAgIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExhbmd1YWdlQWNjZXNzVG9rZW4pIHByaXZhdGUgTGFuZ3VhZ2VBY2Nlc3M6IElMYW5ndWFnZUFjY2VzcyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExhbmd1YWdlVXBkYXRlVG9rZW4pIHByaXZhdGUgTGFuZ3VhZ2VVcGRhdGU6IElMYW5ndWFnZVVwZGF0ZSkge1xuICB9XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWRKc29uKCk7XG4gICAgYXdhaXQgdGhpcy5fZmV0Y2hDdXJyZW50TGFuZ3VhZ2UoKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGxvYWRKc29uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc29sZS5kZWJ1ZygndHJhbnNsYXRlLnNlcnZpY2UubG9hZGpzb24nKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIC8vc3RhcnQgb2YgZm9yIG1hcHBpbmdJRFxuICAgICAgLy8gbGV0IGxhbmd1YWdlSlNPTiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTGFuZ3VhZ2VKU09OJyk7XG4gICAgICAvLyBpZiAobGFuZ3VhZ2VKU09OKSB7XG4gICAgICAvLyAgIF90aGlzLmxhbmd1YWdlX21hcCA9IEpTT04ucGFyc2UobGFuZ3VhZ2VKU09OKTtcbiAgICAgIC8vICAgcmVzKCk7XG4gICAgICAvLyB9XG4gICAgICAvLyBlbHNlIHtcbiAgICAgIC8vICAgX3RoaXMuaHR0cFNlcnZpY2UuZ2V0KFwiLi9hc3NldHMvY29uZmlnL2xhbmd1YWdlLmpzb25cIikuc3Vic2NyaWJlKChqc29uKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5kZWJ1ZygndHJhbnNsYXRlLnNlcnZpY2UubG9hZGpzb24gc3VjY2VzcycsIGpzb24pO1xuICAgICAgLy8gICAgIF90aGlzLmxhbmd1YWdlX21hcCA9IGpzb247XG4gICAgICAvLyAgICAgcmVzKCk7XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gfVxuICAgICAgLy8gZW5kIG9mIGZvciBtYXBwaW5nSURcbiAgICAgIF90aGlzLmh0dHBTZXJ2aWNlLmdldChcIi4vYXNzZXRzL2NvbmZpZy9sYW5ndWFnZS5qc29uXCIpLnN1YnNjcmliZSgoanNvbikgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCd0cmFuc2xhdGUuc2VydmljZS5sb2FkanNvbiBzdWNjZXNzJywganNvbik7XG4gICAgICAgIF90aGlzLmxhbmd1YWdlX21hcCA9IGpzb247XG4gICAgICAgIHJlcygpO1xuICAgICAgfSk7XG4gICAgfSlcblxuICB9XG5cbiAgdHJhbnNsYXRlKGtleSkge1xuICAgIC8vZm9yIHRlc3QgbGFuZ3VhZ2VcbiAgICBpZiAodGhpcy5jdXJyZW50X2xhbmd1YWdlID09PSAnTWFwcGluZ0lEJykge1xuICAgICAgcmV0dXJuICckeycgKyBrZXkgKyAnfSc7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT10cmFuc2xhdGUgc3RhcnQ9PT09PT09PT09PT09PVwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkN1cnJlbnQgTGFuZ3VhZ2UgOiAgXCIgKyB0aGlzLmN1cnJlbnRfbGFuZ3VhZ2UpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiVHJhbnNsYXRlIEtleSAoTWFwcGluZyBJRCkgOiBcIiArIGtleSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJUcmFuc2xhdGUgKFRleHQpIFwiICsgdGhpcy5sYW5ndWFnZV9tYXBbdGhpcy5jdXJyZW50X2xhbmd1YWdlXVtrZXldKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09dHJhbnNsYXRlIGVuZD09PT09PT09PT09PT09XCIpO1xuICAgIGxldCB0cmFuc2xhdGVSZXN1bHQgPSB0aGlzLmxhbmd1YWdlX21hcFt0aGlzLmN1cnJlbnRfbGFuZ3VhZ2VdW2tleV07XG4gICAgaWYgKHRyYW5zbGF0ZVJlc3VsdCA9PT0gbnVsbCB8fCB0cmFuc2xhdGVSZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdHJhbnNsYXRlUmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0cmFuc2xhdGVXaXRoVmFyaWFibGUobWFwcGluZ0lEOiBzdHJpbmcsIG1hcDogYW55KSB7XG4gICAgbGV0IGRpc3BsYXlUZXh0ID0gdGhpcy50cmFuc2xhdGUobWFwcGluZ0lEKTtcblxuICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAobWFwW2tleV0gPT0gbnVsbCB8fCBtYXBba2V5XSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWFwW2tleV0gPSAnJztcbiAgICAgIH1cbiAgICAgIGRpc3BsYXlUZXh0ID0gZGlzcGxheVRleHQucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxcJFxcXFx7JHtrZXl9XFxcXH1gLCAnZycpLCBtYXBba2V5XS50b1N0cmluZygpKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGRpc3BsYXlUZXh0O1xuXG4gIH1cblxuICBwdWJsaWMgX2ZldGNoQ3VycmVudExhbmd1YWdlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuTGFuZ3VhZ2VBY2Nlc3MpIHtcbiAgICAgICAgdGhpcy5MYW5ndWFnZUFjY2Vzcy5nZXRDdXJyZW50TGFuZ3VhZ2UoKS5zdWJzY3JpYmUoKGxhbmd1YWdlKSA9PiB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50X2xhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChsYW5ndWFnZSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRlZmF1bHQgX2ZldGNoQ3VycmVudExhbmd1YWdlXCIpO1xuICAgICAgICBsZXQgY3VycmVudExhbmd1YWdlID0gdGhpcy5kZXZpY2VTZXJ2aWNlLmdldExvY2FsU3RvcmFnZShcIlNORExhbmd1YWdlXCIpIHx8ICdlbic7XG4gICAgICAgIHRoaXMuY3VycmVudF9sYW5ndWFnZSA9IGN1cnJlbnRMYW5ndWFnZTtcbiAgICAgICAgdGhpcy5kZXZpY2VTZXJ2aWNlLnNldExvY2FsU3RvcmFnZShcIlNORExhbmd1YWdlXCIsIGN1cnJlbnRMYW5ndWFnZSk7XG4gICAgICAgIG9ic2VydmVyLm5leHQodGhpcy5jdXJyZW50X2xhbmd1YWdlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBfZmV0Y2hDb2RlRGF0YSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBjdXJyZW50TGFuZ3VhZ2VMaXN0QVBJOiBhbnkgPSA8Q3VycmVudExhbmd1YWdlTGlzdEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDdXJyZW50TGFuZ3VhZ2VMaXN0Jyk7XG4gICAgbGV0IGNvZGVBcnJheTogQXJyYXk8TGFuZ3VhZ2VDb2RlPiA9IFtdO1xuXG4gICAgY29uc29sZS5kZWJ1Zygnc2V0dGluZy5zZXJ2aWNlIGZldGNoQ29kZURhdGEnLCBjdXJyZW50TGFuZ3VhZ2VMaXN0QVBJKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VycmVudExhbmd1YWdlTGlzdEFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG5cbiAgICAgICAgbGV0IGJvZHlEYXRhcyA9IGRhdGFbJ0JvZHknXTtcbiAgICAgICAgY29uc29sZS5sb2coJzwtLS0gRGF0YXMgLS0tPicpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2R5RGF0YXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQganNvbiA9IGJvZHlEYXRhc1tpXTtcbiAgICAgICAgICBsZXQgbGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2VDb2RlKGpzb24uTGFuZ3VhZ2VJRCwganNvbi5OYW1lLCBqc29uLklzRGVmYXVsdCk7XG4gICAgICAgICAgY29kZUFycmF5LnB1c2gobGFuZ3VhZ2UpO1xuXG4gICAgICAgICAgdGhpcy5sYW5ndWFnZU1hcC5zZXQoJ1RXX0xIX1NEX0xhbmd1YWdlJywgY29kZUFycmF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2xhbmd1YWdlTWFwJywgdGhpcy5sYW5ndWFnZU1hcCk7XG4gICAgICAgIG9ic2VydmVyLm5leHQodHJ1ZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb2RlQXJyYXkoKSB7XG4gICAgaWYgKHRoaXMubGFuZ3VhZ2VNYXAuc2l6ZSAhPSAwKSB7XG4gICAgICBsZXQgY29kZUFycmF5OiBBcnJheTxMYW5ndWFnZUNvZGU+ID0gdGhpcy5sYW5ndWFnZU1hcC5nZXQoJ1RXX0xIX1NEX0xhbmd1YWdlJyk7XG4gICAgICBpZiAoY29kZUFycmF5ID09IHVuZGVmaW5lZCkgY29kZUFycmF5ID0gbmV3IEFycmF5PExhbmd1YWdlQ29kZT4oKTtcbiAgICAgIHJldHVybiBjb2RlQXJyYXk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQXJyYXk8TGFuZ3VhZ2VDb2RlPigpO1xuICB9XG5cblxuXG4gIHB1YmxpYyB1cGRhdGVMYW5ndWFnZShuZXdMYW5ndWFnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG5cbiAgICAgIGlmICh0aGlzLkxhbmd1YWdlVXBkYXRlKSB7XG4gICAgICAgIHRoaXMuTGFuZ3VhZ2VVcGRhdGUuVXBkYXRlTGFuZ3VhZ2UobmV3TGFuZ3VhZ2UpLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5kZXZpY2VTZXJ2aWNlLnNldExvY2FsU3RvcmFnZShcIlNORExhbmd1YWdlXCIsIG5ld0xhbmd1YWdlKTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChuZXcgU1FMaXRlUmVzcG9uc2UoeyBzdGF0dXM6IHRydWUgfSwgW10pKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcblxuICAgICAgfVxuICAgICAgdGhpcy5fZmV0Y2hDdXJyZW50TGFuZ3VhZ2UoKS5zdWJzY3JpYmUoKGxhbmd1YWdlKSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudF9sYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhbmd1YWdlU3ViamVjdC5uZXh0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50TGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50X2xhbmd1YWdlO1xuICB9XG5cbiAgcHVibGljIGdldFVwZGF0ZVN1YmplY3QoKTogU3ViamVjdDxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVMYW5ndWFnZVN1YmplY3Q7XG4gIH1cbn1cblxuIl19