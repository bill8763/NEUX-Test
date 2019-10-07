/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector, Optional, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { StringUtils } from '../utils';
import { ConfigToken } from '../injectionToken';
import { DeviceFactory } from './DeviceFactory';
import { v4 as uuid } from 'uuid';
import * as i0 from "@angular/core";
import * as i1 from "./DeviceFactory";
import * as i2 from "../injectionToken/injection-token";
export class DeviceService {
    /**
     * @param {?} injector
     * @param {?} deviceFactory
     * @param {?} APP_CONFIG
     */
    constructor(injector, deviceFactory, APP_CONFIG) {
        this.injector = injector;
        this.deviceFactory = deviceFactory;
        this.APP_CONFIG = APP_CONFIG;
        this.SSL_fingerprints = [];
        this.deviceID = null;
        this.mock_deviceID = uuid();
        /** @type {?} */
        let env = this.APP_CONFIG.ENV;
        this.SSL_fingerprints = this.APP_CONFIG[env].SSL_FINGERPRINTS;
        if (env === 'DEV_WebSQL')
            this.initDeviceID().then((/**
             * @param {?} id
             * @return {?}
             */
            (id) => {
                this.deviceID = id;
            }));
    }
    ;
    /**
     * @return {?}
     */
    initDeviceAPI() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            window.open = cordova.InAppBrowser.open;
            this._isPad = this.judgePad();
            this.lockScreenOrient();
            this.disableBackBtn();
            this.deviceID = yield this.initDeviceID();
        });
    }
    /**
     * @return {?}
     */
    getDevicePlatform() {
        /** @type {?} */
        let platform = null;
        try {
            platform = device.platform;
        }
        catch (error) {
            console.log('cannot get platform, beacause maynot on device.');
            platform = 'PC';
            //this.errorHandler.handleError(error);
        }
        finally {
            return platform;
        }
    }
    /**
     * @return {?}
     */
    getDeviceUUID() {
        if (this.deviceID)
            return this.deviceID;
    }
    /**
     * @private
     * @return {?}
     */
    _getDeviceUUID() {
        /** @type {?} */
        let uuid = null;
        try {
            uuid = device.uuid;
        }
        catch (error) {
            console.log('cannot get UUID, beacause maynot on device.');
            uuid = this.mock_deviceID;
            //this.errorHandler.handleError(error);
        }
        finally {
            return uuid;
        }
    }
    /**
     * @private
     * @return {?}
     */
    initDeviceID() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let deviceID = this._getDeviceUUID();
            try {
                /** @type {?} */
                let resp = yield this.getSecureStorage("deviceID").toPromise();
                console.log("getDeviceID from KeyStore resp:", resp);
                if (resp.includes("Device is not secure")) { //which Device is not secure
                    throw new Error(resp);
                }
                else if (resp) { // if have key in keyStore/keyChain
                    return resp;
                }
                else {
                    /** @type {?} */
                    let setKeyResp = yield this.setSecureStorage("deviceID", deviceID).toPromise();
                    if (setKeyResp) {
                        /** @type {?} */
                        let key = yield this.getSecureStorage("deviceID").toPromise();
                        return key;
                    }
                }
            }
            catch (error) {
                console.log("getDeviceID error, use localStorage");
                if (this.getLocalStorage("deviceID")) {
                    return this.getLocalStorage("deviceID");
                }
                else {
                    this.setLocalStorage("deviceID", deviceID);
                    return deviceID;
                }
            }
        });
    }
    /**
     * @return {?}
     */
    getDeviceManufacturer() {
        /** @type {?} */
        let manufacturer = null;
        try {
            manufacturer = `${device.manufacturer} ${device.model}`;
        }
        catch (error) {
            console.log('cannot get Manufacturer, beacause maynot on device.');
            manufacturer = "PC Browser";
            // this.errorHandler.handleError(error);
        }
        finally {
            return manufacturer;
        }
    }
    /**
     * @return {?}
     */
    restartApp() {
        try {
            // navigator.splashscreen.show();
            window.location.reload(true);
            window.location.assign('index.html');
            // navigator.splashscreen.hide();
        }
        catch (error) {
            console.log('restart error');
            //this.errorHandler.handleError(error);
        }
    }
    /**
     * @return {?}
     */
    getNetworkState() {
        if (navigator && navigator.connection) {
            /** @type {?} */
            let networkState = navigator.connection.type;
            console.log('networkState:', networkState);
            return networkState != 'none';
        }
        else
            return true;
    }
    /**
     * @param {?} word
     * @return {?}
     */
    searchContactsByName(word) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let dao = this.deviceFactory.getDefaultDao();
            try {
                /** @type {?} */
                let resp = yield dao.searchcontactsByName('').toPromise();
                console.log('search Contact result:', resp);
                /** @type {?} */
                let contacts = resp['Body'];
                for (let item of contacts) {
                    if (StringUtils.isEmpty(item.l))
                        item.isCheck = false;
                }
                return contacts;
            }
            catch (error) {
                console.log('error:', error);
                return error;
            }
        });
    }
    /**
     * @param {?} num
     * @return {?}
     */
    dialNumber(num) {
        window.open('tel:' + num.replace(/\s/g, ''), '_system');
    }
    /**
     * @return {?}
     */
    checkIfRoot() {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            try {
                console.log("iroot:", IRoot);
                if (IRoot !== undefined) {
                    IRoot.isRooted((/**
                     * @param {?} result
                     * @return {?}
                     */
                    (result) => {
                        res(result);
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    (error) => {
                        rej(error);
                    }));
                }
                else {
                    throw new Error("iRoot plugin error.");
                }
            }
            catch (error) {
                res(false);
            }
        }));
    }
    /**
     * @return {?}
     */
    exitApp() {
        cordova.plugins.exit();
        // navigator.app.exitApp();
    }
    /**
     * @return {?}
     */
    getAppVersion() {
        try {
            return cordova.getAppVersion.getVersionNumber();
        }
        catch (error) {
            //this.errorHandler.handleError(error);
            return Promise.resolve("1.0.3"); //1.0.0
        }
    }
    /**
     * @return {?}
     */
    getIsFirstLaunch() {
        return this.getLocalStorage("AppFirstLaunch") === 'N' ? false : true;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setLocalStorage(key, value) {
        window.localStorage.setItem(key, value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getLocalStorage(key) {
        return window.localStorage.getItem(key);
    }
    /**
     * @private
     * @return {?}
     */
    lockScreenOrient() {
        /** @type {?} */
        let orientation = this.isPad() ? 'landscape' : 'portrait-primary';
        ((/** @type {?} */ (window))).screen.orientation.lock(orientation);
    }
    /**
     * @return {?}
     */
    judgePad() {
        /** @type {?} */
        let width = window.innerWidth;
        /** @type {?} */
        let height = window.innerHeight;
        console.log('width:', width);
        console.log('height:', height);
        if (width < 700 || height < 700) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @return {?}
     */
    isPad() {
        return this._isPad;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setSecureStorage(key, value) {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let ss = new cordova.plugins.SecureStorage((/**
             * @return {?}
             */
            function () {
                ss.set((/**
                 * @return {?}
                 */
                function () {
                    observer.next(true);
                    observer.complete();
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    observer.next(false);
                    observer.complete();
                }), key, value);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                observer.next(false);
                observer.complete();
            }), "Allianz_SND");
        }));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getSecureStorage(key) {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let ss = new cordova.plugins.SecureStorage((/**
             * @return {?}
             */
            function () {
                ss.get((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    observer.next(key);
                    observer.complete();
                }), (/**
                 * @return {?}
                 */
                function () {
                    observer.next(null);
                    observer.complete();
                }), key);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                observer.next(error.message);
                observer.complete();
            }), "Allianz_SND");
        }));
    }
    /**
     * @param {?} url
     * @return {?}
     */
    checkSSL(url) {
        if (this.SSL_fingerprints.length == 0)
            return Promise.resolve(true);
        else
            return new Promise((/**
             * @param {?} res
             * @param {?} rej
             * @return {?}
             */
            (res, rej) => {
                ((/** @type {?} */ (window))).plugins.sslCertificateChecker.check((/**
                 * @param {?} message
                 * @return {?}
                 */
                (message) => {
                    if (message === 'CONNECTION_SECURE')
                        res(true);
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => {
                    rej(error);
                }), url, this.SSL_fingerprints);
            }));
    }
    /**
     * @return {?}
     */
    takeScreenShot() {
        /** @type {?} */
        let _this = this;
        ((/** @type {?} */ (navigator))).screenshot.save((/**
         * @param {?} error
         * @param {?} res
         * @return {?}
         */
        function (error, res) {
            if (error) {
                //todo throw error
                console.warn(error);
            }
            else {
                console.log('testScreenShot success', res.filePath);
                console.warn('getDevicePlatform', _this.getDevicePlatform());
                if (_this.getDevicePlatform() == "iOS")
                    ((/** @type {?} */ (cordova))).plugins.imagesaver.saveImageToGallery(res.filePath, (/**
                     * @return {?}
                     */
                    function () { console.log("success"); }), (/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) { console.log(err); }));
            }
        }));
    }
    /**
     * @return {?}
     */
    disableBackBtn() {
        document.addEventListener("backbutton", (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault();
        }), false);
    }
    /**
     * @return {?}
     */
    checkContactPermission() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            ((/** @type {?} */ (cordova))).plugins.CheckPermission.checkContactPermission('contact', (/**
             * @param {?} msg
             * @return {?}
             */
            function (msg) {
                resolve(msg);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                reject(error);
            }));
        }));
    }
    /**
     * @return {?}
     */
    grantContactPermission() {
        ((/** @type {?} */ (cordova))).plugins.CheckPermission.grantContactPermission();
    }
}
DeviceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DeviceService.ctorParameters = () => [
    { type: Injector },
    { type: DeviceFactory },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ConfigToken,] }] }
];
/** @nocollapse */ DeviceService.ngInjectableDef = i0.defineInjectable({ factory: function DeviceService_Factory() { return new DeviceService(i0.inject(i0.INJECTOR), i0.inject(i1.DeviceFactory), i0.inject(i2.ConfigToken, 8)); }, token: DeviceService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeviceService.prototype.SSL_fingerprints;
    /**
     * @type {?}
     * @private
     */
    DeviceService.prototype._isPad;
    /**
     * @type {?}
     * @private
     */
    DeviceService.prototype.deviceID;
    /**
     * @type {?}
     * @private
     */
    DeviceService.prototype.mock_deviceID;
    /**
     * @type {?}
     * @private
     */
    DeviceService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    DeviceService.prototype.deviceFactory;
    /**
     * @type {?}
     * @private
     */
    DeviceService.prototype.APP_CONFIG;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RldmljZS9kZXZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBYWxDLE1BQU07Ozs7OztJQUVKLFlBQ1UsUUFBa0IsRUFDbEIsYUFBNEIsRUFDSyxVQUFlO1FBRmhELGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDSyxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBU2xELHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUV0QixhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ3hCLGtCQUFhLEdBQVcsSUFBSSxFQUFFLENBQUM7O1lBWGpDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUc7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7UUFDOUQsSUFBSSxHQUFHLEtBQUssWUFBWTtZQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSTs7OztZQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxD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QyxTQUFTOzs7O1lBQ3JFLFVBQVUsR0FBRztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDZCxDQUFDOzs7O1lBQ0QsVUFBVSxLQUFLO2dCQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQUMsQ0FBQTtRQUNOLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVNLHNCQUFzQjtRQUMzQixDQUFDLG1CQUFLLE9BQU8sRUFBQSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO0lBQ2pFLENBQUM7OztZQXpVRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQWpCb0IsUUFBUTtZQUlwQixhQUFhOzRDQW1CakIsUUFBUSxZQUFJLE1BQU0sU0FBQyxXQUFXOzs7Ozs7OztJQVNqQyx5Q0FBOEI7Ozs7O0lBQzlCLCtCQUF3Qjs7Ozs7SUFDeEIsaUNBQWdDOzs7OztJQUNoQyxzQ0FBdUM7Ozs7O0lBZHJDLGlDQUEwQjs7Ozs7SUFDMUIsc0NBQW9DOzs7OztJQUNwQyxtQ0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwsIEluamVjdCwgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgQ29uZmlnVG9rZW4gfSBmcm9tICcuLi9pbmplY3Rpb25Ub2tlbic7XG5pbXBvcnQgeyBEZXZpY2VGYWN0b3J5IH0gZnJvbSAnLi9EZXZpY2VGYWN0b3J5JztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IFVuYmluZERldmljZUFQSSB9IGZyb20gJy4uL2FwaS9yZWdpc3Rlci9VbmJpbmREZXZpY2VBUEknO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gJy4uL2FwaS9BUElGYWN0b3J5JztcbmltcG9ydCB7IEFQSURpc3BhdGNoIH0gZnJvbSAnLi4vYXBpL0FQSURpc3BhdGNoJztcblxuZGVjbGFyZSB2YXIgZGV2aWNlO1xuZGVjbGFyZSB2YXIgbmF2aWdhdG9yO1xuZGVjbGFyZSB2YXIgY29yZG92YTtcbmRlY2xhcmUgdmFyIElSb290O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEZXZpY2VTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGRldmljZUZhY3Rvcnk6IERldmljZUZhY3RvcnksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChDb25maWdUb2tlbikgcHJpdmF0ZSBBUFBfQ09ORklHOiBhbnkpIHtcbiAgICBsZXQgZW52ID0gdGhpcy5BUFBfQ09ORklHLkVOVjtcbiAgICB0aGlzLlNTTF9maW5nZXJwcmludHMgPSB0aGlzLkFQUF9DT05GSUdbZW52XS5TU0xfRklOR0VSUFJJTlRTO1xuICAgIGlmIChlbnYgPT09ICdERVZfV2ViU1FMJylcbiAgICAgIHRoaXMuaW5pdERldmljZUlEKCkudGhlbigoaWQpID0+IHtcbiAgICAgICAgdGhpcy5kZXZpY2VJRCA9IGlkO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBTU0xfZmluZ2VycHJpbnRzID0gW107XG4gIHByaXZhdGUgX2lzUGFkOiBib29sZWFuO1xuICBwcml2YXRlIGRldmljZUlEOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIG1vY2tfZGV2aWNlSUQ6IHN0cmluZyA9IHV1aWQoKTtcblxuICBwdWJsaWMgYXN5bmMgaW5pdERldmljZUFQSSgpIHtcbiAgICB3aW5kb3cub3BlbiA9IGNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW47XG4gICAgdGhpcy5faXNQYWQgPSB0aGlzLmp1ZGdlUGFkKCk7XG4gICAgdGhpcy5sb2NrU2NyZWVuT3JpZW50KCk7XG4gICAgdGhpcy5kaXNhYmxlQmFja0J0bigpO1xuICAgIHRoaXMuZGV2aWNlSUQgPSBhd2FpdCB0aGlzLmluaXREZXZpY2VJRCgpO1xuICB9XG4gIHB1YmxpYyBnZXREZXZpY2VQbGF0Zm9ybSgpOiBzdHJpbmcge1xuICAgIGxldCBwbGF0Zm9ybSA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIHBsYXRmb3JtID0gZGV2aWNlLnBsYXRmb3JtO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjYW5ub3QgZ2V0IHBsYXRmb3JtLCBiZWFjYXVzZSBtYXlub3Qgb24gZGV2aWNlLicpO1xuICAgICAgcGxhdGZvcm0gPSAnUEMnO1xuICAgICAgLy90aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgcmV0dXJuIHBsYXRmb3JtO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXREZXZpY2VVVUlEKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZGV2aWNlSUQpXG4gICAgICByZXR1cm4gdGhpcy5kZXZpY2VJRDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldERldmljZVVVSUQoKTogc3RyaW5nIHtcbiAgICBsZXQgdXVpZCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIHV1aWQgPSBkZXZpY2UudXVpZDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnY2Fubm90IGdldCBVVUlELCBiZWFjYXVzZSBtYXlub3Qgb24gZGV2aWNlLicpO1xuICAgICAgdXVpZCA9IHRoaXMubW9ja19kZXZpY2VJRDtcbiAgICAgIC8vdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgIHJldHVybiB1dWlkO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbml0RGV2aWNlSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBsZXQgZGV2aWNlSUQgPSB0aGlzLl9nZXREZXZpY2VVVUlEKCk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwID0gYXdhaXQgdGhpcy5nZXRTZWN1cmVTdG9yYWdlKFwiZGV2aWNlSURcIikudG9Qcm9taXNlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImdldERldmljZUlEIGZyb20gS2V5U3RvcmUgcmVzcDpcIiwgcmVzcCk7XG4gICAgICBpZiAocmVzcC5pbmNsdWRlcyhcIkRldmljZSBpcyBub3Qgc2VjdXJlXCIpKSB7IC8vd2hpY2ggRGV2aWNlIGlzIG5vdCBzZWN1cmVcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3ApO1xuICAgICAgfSBlbHNlIGlmIChyZXNwKSB7IC8vIGlmIGhhdmUga2V5IGluIGtleVN0b3JlL2tleUNoYWluXG4gICAgICAgIHJldHVybiByZXNwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHNldEtleVJlc3AgPSBhd2FpdCB0aGlzLnNldFNlY3VyZVN0b3JhZ2UoXCJkZXZpY2VJRFwiLCBkZXZpY2VJRCkudG9Qcm9taXNlKCk7XG4gICAgICAgIGlmIChzZXRLZXlSZXNwKSB7XG4gICAgICAgICAgbGV0IGtleSA9IGF3YWl0IHRoaXMuZ2V0U2VjdXJlU3RvcmFnZShcImRldmljZUlEXCIpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJnZXREZXZpY2VJRCBlcnJvciwgdXNlIGxvY2FsU3RvcmFnZVwiKTtcbiAgICAgIGlmICh0aGlzLmdldExvY2FsU3RvcmFnZShcImRldmljZUlEXCIpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldExvY2FsU3RvcmFnZShcImRldmljZUlEXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoXCJkZXZpY2VJRFwiLCBkZXZpY2VJRCk7XG4gICAgICAgIHJldHVybiBkZXZpY2VJRDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0RGV2aWNlTWFudWZhY3R1cmVyKCk6IHN0cmluZyB7XG4gICAgbGV0IG1hbnVmYWN0dXJlciA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIG1hbnVmYWN0dXJlciA9IGAke2RldmljZS5tYW51ZmFjdHVyZXJ9ICR7ZGV2aWNlLm1vZGVsfWA7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ2Nhbm5vdCBnZXQgTWFudWZhY3R1cmVyLCBiZWFjYXVzZSBtYXlub3Qgb24gZGV2aWNlLicpO1xuICAgICAgbWFudWZhY3R1cmVyID0gXCJQQyBCcm93c2VyXCI7XG4gICAgICAvLyB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgcmV0dXJuIG1hbnVmYWN0dXJlcjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVzdGFydEFwcCgpIHtcbiAgICB0cnkge1xuICAgICAgLy8gbmF2aWdhdG9yLnNwbGFzaHNjcmVlbi5zaG93KCk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbignaW5kZXguaHRtbCcpO1xuICAgICAgLy8gbmF2aWdhdG9yLnNwbGFzaHNjcmVlbi5oaWRlKCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ3Jlc3RhcnQgZXJyb3InKTtcbiAgICAgIC8vdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXROZXR3b3JrU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgbGV0IG5ldHdvcmtTdGF0ZSA9IG5hdmlnYXRvci5jb25uZWN0aW9uLnR5cGU7XG4gICAgICBjb25zb2xlLmxvZygnbmV0d29ya1N0YXRlOicsIG5ldHdvcmtTdGF0ZSk7XG4gICAgICByZXR1cm4gbmV0d29ya1N0YXRlICE9ICdub25lJztcbiAgICB9XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2VhcmNoQ29udGFjdHNCeU5hbWUod29yZDogc3RyaW5nKSB7XG4gICAgbGV0IGRhbyA9IHRoaXMuZGV2aWNlRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwID0gYXdhaXQgZGFvLnNlYXJjaGNvbnRhY3RzQnlOYW1lKCcnKS50b1Byb21pc2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdzZWFyY2ggQ29udGFjdCByZXN1bHQ6JywgcmVzcCk7XG4gICAgICBsZXQgY29udGFjdHMgPSByZXNwWydCb2R5J107XG5cbiAgICAgIGZvciAobGV0IGl0ZW0gb2YgY29udGFjdHMpIHtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoaXRlbS5sKSlcbiAgICAgICAgICBpdGVtLmlzQ2hlY2sgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250YWN0cztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yOicsIGVycm9yKTtcbiAgICAgIHJldHVybiBlcnJvclxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaWFsTnVtYmVyKG51bTogc3RyaW5nKTogdm9pZCB7XG4gICAgd2luZG93Lm9wZW4oJ3RlbDonICsgbnVtLnJlcGxhY2UoL1xccy9nLCAnJyksICdfc3lzdGVtJyk7XG4gIH1cblxuICBwdWJsaWMgY2hlY2tJZlJvb3QoKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImlyb290OlwiLCBJUm9vdCk7XG4gICAgICAgIGlmIChJUm9vdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgSVJvb3QuaXNSb290ZWQoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzKHJlc3VsdCk7XG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZWooZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImlSb290IHBsdWdpbiBlcnJvci5cIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcyhmYWxzZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBleGl0QXBwKCk6IHZvaWQge1xuICAgIGNvcmRvdmEucGx1Z2lucy5leGl0KCk7XG4gICAgLy8gbmF2aWdhdG9yLmFwcC5leGl0QXBwKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXBwVmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gY29yZG92YS5nZXRBcHBWZXJzaW9uLmdldFZlcnNpb25OdW1iZXIoKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvL3RoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXCIxLjAuM1wiKTsvLzEuMC4wXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldElzRmlyc3RMYXVuY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TG9jYWxTdG9yYWdlKFwiQXBwRmlyc3RMYXVuY2hcIikgPT09ICdOJyA/IGZhbHNlIDogdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRMb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TG9jYWxTdG9yYWdlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBsb2NrU2NyZWVuT3JpZW50KCk6IHZvaWQge1xuICAgIGxldCBvcmllbnRhdGlvbiA9IHRoaXMuaXNQYWQoKSA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0LXByaW1hcnknO1xuICAgICg8YW55PndpbmRvdykuc2NyZWVuLm9yaWVudGF0aW9uLmxvY2sob3JpZW50YXRpb24pO1xuICB9XG5cbiAgcHVibGljIGp1ZGdlUGFkKCk6IGJvb2xlYW4ge1xuICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc29sZS5sb2coJ3dpZHRoOicsIHdpZHRoKTtcbiAgICBjb25zb2xlLmxvZygnaGVpZ2h0OicsIGhlaWdodCk7XG4gICAgaWYgKHdpZHRoIDwgNzAwIHx8IGhlaWdodCA8IDcwMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc1BhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNQYWQ7XG4gIH1cblxuXG4gIHB1YmxpYyBzZXRTZWN1cmVTdG9yYWdlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IHNzID0gbmV3IGNvcmRvdmEucGx1Z2lucy5TZWN1cmVTdG9yYWdlKFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3Muc2V0KFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xuICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsaWFuel9TTkRcIlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWN1cmVTdG9yYWdlKGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBsZXQgc3MgPSBuZXcgY29yZG92YS5wbHVnaW5zLlNlY3VyZVN0b3JhZ2UoXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzcy5nZXQoXG4gICAgICAgICAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoa2V5KTtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobnVsbCk7XG4gICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5XG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsaWFuel9TTkRcIlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgY2hlY2tTU0wodXJsKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAodGhpcy5TU0xfZmluZ2VycHJpbnRzLmxlbmd0aCA9PSAwKVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICg8YW55PndpbmRvdykucGx1Z2lucy5zc2xDZXJ0aWZpY2F0ZUNoZWNrZXIuY2hlY2soXG4gICAgICAgICAgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlID09PSAnQ09OTkVDVElPTl9TRUNVUkUnKVxuICAgICAgICAgICAgICByZXModHJ1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlaihlcnJvcik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgdGhpcy5TU0xfZmluZ2VycHJpbnRzKTtcbiAgICAgIH0pXG4gIH1cblxuICBwdWJsaWMgdGFrZVNjcmVlblNob3QoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICAoPGFueT5uYXZpZ2F0b3IpLnNjcmVlbnNob3Quc2F2ZShmdW5jdGlvbiAoZXJyb3IsIHJlcykge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIC8vdG9kbyB0aHJvdyBlcnJvclxuICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3RTY3JlZW5TaG90IHN1Y2Nlc3MnLCByZXMuZmlsZVBhdGgpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ2dldERldmljZVBsYXRmb3JtJywgX3RoaXMuZ2V0RGV2aWNlUGxhdGZvcm0oKSk7XG4gICAgICAgIGlmIChfdGhpcy5nZXREZXZpY2VQbGF0Zm9ybSgpID09IFwiaU9TXCIpXG4gICAgICAgICAgKDxhbnk+Y29yZG92YSkucGx1Z2lucy5pbWFnZXNhdmVyLnNhdmVJbWFnZVRvR2FsbGVyeShyZXMuZmlsZVBhdGgsIGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJzdWNjZXNzXCIpIH0sIGZ1bmN0aW9uIChlcnIpIHsgY29uc29sZS5sb2coZXJyKSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlQmFja0J0bigpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmFja2J1dHRvblwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja0NvbnRhY3RQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICg8YW55PmNvcmRvdmEpLnBsdWdpbnMuQ2hlY2tQZXJtaXNzaW9uLmNoZWNrQ29udGFjdFBlcm1pc3Npb24oJ2NvbnRhY3QnLFxuICAgICAgICBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgcmVzb2x2ZShtc2cpXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ3JhbnRDb250YWN0UGVybWlzc2lvbigpIHtcbiAgICAoPGFueT5jb3Jkb3ZhKS5wbHVnaW5zLkNoZWNrUGVybWlzc2lvbi5ncmFudENvbnRhY3RQZXJtaXNzaW9uKClcbiAgfVxuXG59XG4iXX0=