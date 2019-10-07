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
var DeviceService = /** @class */ (function () {
    function DeviceService(injector, deviceFactory, APP_CONFIG) {
        var _this_1 = this;
        this.injector = injector;
        this.deviceFactory = deviceFactory;
        this.APP_CONFIG = APP_CONFIG;
        this.SSL_fingerprints = [];
        this.deviceID = null;
        this.mock_deviceID = uuid();
        /** @type {?} */
        var env = this.APP_CONFIG.ENV;
        this.SSL_fingerprints = this.APP_CONFIG[env].SSL_FINGERPRINTS;
        if (env === 'DEV_WebSQL')
            this.initDeviceID().then((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                _this_1.deviceID = id;
            }));
    }
    ;
    /**
     * @return {?}
     */
    DeviceService.prototype.initDeviceAPI = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        window.open = cordova.InAppBrowser.open;
                        this._isPad = this.judgePad();
                        this.lockScreenOrient();
                        this.disableBackBtn();
                        _a = this;
                        return [4 /*yield*/, this.initDeviceID()];
                    case 1:
                        _a.deviceID = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.getDevicePlatform = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var platform = null;
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
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.getDeviceUUID = /**
     * @return {?}
     */
    function () {
        if (this.deviceID)
            return this.deviceID;
    };
    /**
     * @private
     * @return {?}
     */
    DeviceService.prototype._getDeviceUUID = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var uuid = null;
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
    };
    /**
     * @private
     * @return {?}
     */
    DeviceService.prototype.initDeviceID = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var deviceID, resp, setKeyResp, key, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deviceID = this._getDeviceUUID();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        return [4 /*yield*/, this.getSecureStorage("deviceID").toPromise()];
                    case 2:
                        resp = _a.sent();
                        console.log("getDeviceID from KeyStore resp:", resp);
                        if (!resp.includes("Device is not secure")) return [3 /*break*/, 3];
                        throw new Error(resp);
                    case 3:
                        if (!resp) return [3 /*break*/, 4];
                        return [2 /*return*/, resp];
                    case 4: return [4 /*yield*/, this.setSecureStorage("deviceID", deviceID).toPromise()];
                    case 5:
                        setKeyResp = _a.sent();
                        if (!setKeyResp) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getSecureStorage("deviceID").toPromise()];
                    case 6:
                        key = _a.sent();
                        return [2 /*return*/, key];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_1 = _a.sent();
                        console.log("getDeviceID error, use localStorage");
                        if (this.getLocalStorage("deviceID")) {
                            return [2 /*return*/, this.getLocalStorage("deviceID")];
                        }
                        else {
                            this.setLocalStorage("deviceID", deviceID);
                            return [2 /*return*/, deviceID];
                        }
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.getDeviceManufacturer = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var manufacturer = null;
        try {
            manufacturer = device.manufacturer + " " + device.model;
        }
        catch (error) {
            console.log('cannot get Manufacturer, beacause maynot on device.');
            manufacturer = "PC Browser";
            // this.errorHandler.handleError(error);
        }
        finally {
            return manufacturer;
        }
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.restartApp = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.getNetworkState = /**
     * @return {?}
     */
    function () {
        if (navigator && navigator.connection) {
            /** @type {?} */
            var networkState = navigator.connection.type;
            console.log('networkState:', networkState);
            return networkState != 'none';
        }
        else
            return true;
    };
    /**
     * @param {?} word
     * @return {?}
     */
    DeviceService.prototype.searchContactsByName = /**
     * @param {?} word
     * @return {?}
     */
    function (word) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, dao, resp, contacts, contacts_1, contacts_1_1, item, error_2;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        dao = this.deviceFactory.getDefaultDao();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, dao.searchcontactsByName('').toPromise()];
                    case 2:
                        resp = _b.sent();
                        console.log('search Contact result:', resp);
                        contacts = resp['Body'];
                        try {
                            for (contacts_1 = tslib_1.__values(contacts), contacts_1_1 = contacts_1.next(); !contacts_1_1.done; contacts_1_1 = contacts_1.next()) {
                                item = contacts_1_1.value;
                                if (StringUtils.isEmpty(item.l))
                                    item.isCheck = false;
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (contacts_1_1 && !contacts_1_1.done && (_a = contacts_1.return)) _a.call(contacts_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/, contacts];
                    case 3:
                        error_2 = _b.sent();
                        console.log('error:', error_2);
                        return [2 /*return*/, error_2];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} num
     * @return {?}
     */
    DeviceService.prototype.dialNumber = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        window.open('tel:' + num.replace(/\s/g, ''), '_system');
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.checkIfRoot = /**
     * @return {?}
     */
    function () {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        function (res, rej) {
            try {
                console.log("iroot:", IRoot);
                if (IRoot !== undefined) {
                    IRoot.isRooted((/**
                     * @param {?} result
                     * @return {?}
                     */
                    function (result) {
                        res(result);
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
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
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.exitApp = /**
     * @return {?}
     */
    function () {
        cordova.plugins.exit();
        // navigator.app.exitApp();
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.getAppVersion = /**
     * @return {?}
     */
    function () {
        try {
            return cordova.getAppVersion.getVersionNumber();
        }
        catch (error) {
            //this.errorHandler.handleError(error);
            return Promise.resolve("1.0.3"); //1.0.0
        }
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.getIsFirstLaunch = /**
     * @return {?}
     */
    function () {
        return this.getLocalStorage("AppFirstLaunch") === 'N' ? false : true;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    DeviceService.prototype.setLocalStorage = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        window.localStorage.setItem(key, value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    DeviceService.prototype.getLocalStorage = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return window.localStorage.getItem(key);
    };
    /**
     * @private
     * @return {?}
     */
    DeviceService.prototype.lockScreenOrient = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var orientation = this.isPad() ? 'landscape' : 'portrait-primary';
        ((/** @type {?} */ (window))).screen.orientation.lock(orientation);
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.judgePad = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = window.innerWidth;
        /** @type {?} */
        var height = window.innerHeight;
        console.log('width:', width);
        console.log('height:', height);
        if (width < 700 || height < 700) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.isPad = /**
     * @return {?}
     */
    function () {
        return this._isPad;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    DeviceService.prototype.setSecureStorage = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var ss = new cordova.plugins.SecureStorage((/**
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
    };
    /**
     * @param {?} key
     * @return {?}
     */
    DeviceService.prototype.getSecureStorage = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var ss = new cordova.plugins.SecureStorage((/**
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
    };
    /**
     * @param {?} url
     * @return {?}
     */
    DeviceService.prototype.checkSSL = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this_1 = this;
        if (this.SSL_fingerprints.length == 0)
            return Promise.resolve(true);
        else
            return new Promise((/**
             * @param {?} res
             * @param {?} rej
             * @return {?}
             */
            function (res, rej) {
                ((/** @type {?} */ (window))).plugins.sslCertificateChecker.check((/**
                 * @param {?} message
                 * @return {?}
                 */
                function (message) {
                    if (message === 'CONNECTION_SECURE')
                        res(true);
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    rej(error);
                }), url, _this_1.SSL_fingerprints);
            }));
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.takeScreenShot = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _this = this;
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
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.disableBackBtn = /**
     * @return {?}
     */
    function () {
        document.addEventListener("backbutton", (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault();
        }), false);
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.checkContactPermission = /**
     * @return {?}
     */
    function () {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
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
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.grantContactPermission = /**
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (cordova))).plugins.CheckPermission.grantContactPermission();
    };
    DeviceService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DeviceService.ctorParameters = function () { return [
        { type: Injector },
        { type: DeviceFactory },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ConfigToken,] }] }
    ]; };
    /** @nocollapse */ DeviceService.ngInjectableDef = i0.defineInjectable({ factory: function DeviceService_Factory() { return new DeviceService(i0.inject(i0.INJECTOR), i0.inject(i1.DeviceFactory), i0.inject(i2.ConfigToken, 8)); }, token: DeviceService, providedIn: "root" });
    return DeviceService;
}());
export { DeviceService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RldmljZS9kZXZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBVWxDO0lBS0UsdUJBQ1UsUUFBa0IsRUFDbEIsYUFBNEIsRUFDSyxVQUFlO1FBSDFELG1CQVVDO1FBVFMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNLLGVBQVUsR0FBVixVQUFVLENBQUs7UUFTbEQscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBRXRCLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsa0JBQWEsR0FBVyxJQUFJLEVBQUUsQ0FBQzs7WUFYakMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM5RCxJQUFJLEdBQUcsS0FBSyxZQUFZO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxFQUFFO2dCQUMxQixPQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNy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QUM7Ozs7SUFFTSw4Q0FBc0I7OztJQUE3QjtRQUNFLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsQ0FBQyxtQkFBSyxPQUFPLEVBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsU0FBUzs7OztZQUNyRSxVQUFVLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2QsQ0FBQzs7OztZQUNELFVBQVUsS0FBSztnQkFDYixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxFQUFDLENBQUE7UUFDTixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFTSw4Q0FBc0I7OztJQUE3QjtRQUNFLENBQUMsbUJBQUssT0FBTyxFQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLHNCQUFzQixFQUFFLENBQUE7SUFDakUsQ0FBQzs7Z0JBelVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztnQkFqQm9CLFFBQVE7Z0JBSXBCLGFBQWE7Z0RBbUJqQixRQUFRLFlBQUksTUFBTSxTQUFDLFdBQVc7Ozt3QkF2Qm5DO0NBMFZDLEFBM1VELElBMlVDO1NBeFVZLGFBQWE7Ozs7OztJQWN4Qix5Q0FBOEI7Ozs7O0lBQzlCLCtCQUF3Qjs7Ozs7SUFDeEIsaUNBQWdDOzs7OztJQUNoQyxzQ0FBdUM7Ozs7O0lBZHJDLGlDQUEwQjs7Ozs7SUFDMUIsc0NBQW9DOzs7OztJQUNwQyxtQ0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwsIEluamVjdCwgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgQ29uZmlnVG9rZW4gfSBmcm9tICcuLi9pbmplY3Rpb25Ub2tlbic7XG5pbXBvcnQgeyBEZXZpY2VGYWN0b3J5IH0gZnJvbSAnLi9EZXZpY2VGYWN0b3J5JztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IFVuYmluZERldmljZUFQSSB9IGZyb20gJy4uL2FwaS9yZWdpc3Rlci9VbmJpbmREZXZpY2VBUEknO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gJy4uL2FwaS9BUElGYWN0b3J5JztcbmltcG9ydCB7IEFQSURpc3BhdGNoIH0gZnJvbSAnLi4vYXBpL0FQSURpc3BhdGNoJztcblxuZGVjbGFyZSB2YXIgZGV2aWNlO1xuZGVjbGFyZSB2YXIgbmF2aWdhdG9yO1xuZGVjbGFyZSB2YXIgY29yZG92YTtcbmRlY2xhcmUgdmFyIElSb290O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEZXZpY2VTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGRldmljZUZhY3Rvcnk6IERldmljZUZhY3RvcnksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChDb25maWdUb2tlbikgcHJpdmF0ZSBBUFBfQ09ORklHOiBhbnkpIHtcbiAgICBsZXQgZW52ID0gdGhpcy5BUFBfQ09ORklHLkVOVjtcbiAgICB0aGlzLlNTTF9maW5nZXJwcmludHMgPSB0aGlzLkFQUF9DT05GSUdbZW52XS5TU0xfRklOR0VSUFJJTlRTO1xuICAgIGlmIChlbnYgPT09ICdERVZfV2ViU1FMJylcbiAgICAgIHRoaXMuaW5pdERldmljZUlEKCkudGhlbigoaWQpID0+IHtcbiAgICAgICAgdGhpcy5kZXZpY2VJRCA9IGlkO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBTU0xfZmluZ2VycHJpbnRzID0gW107XG4gIHByaXZhdGUgX2lzUGFkOiBib29sZWFuO1xuICBwcml2YXRlIGRldmljZUlEOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIG1vY2tfZGV2aWNlSUQ6IHN0cmluZyA9IHV1aWQoKTtcblxuICBwdWJsaWMgYXN5bmMgaW5pdERldmljZUFQSSgpIHtcbiAgICB3aW5kb3cub3BlbiA9IGNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW47XG4gICAgdGhpcy5faXNQYWQgPSB0aGlzLmp1ZGdlUGFkKCk7XG4gICAgdGhpcy5sb2NrU2NyZWVuT3JpZW50KCk7XG4gICAgdGhpcy5kaXNhYmxlQmFja0J0bigpO1xuICAgIHRoaXMuZGV2aWNlSUQgPSBhd2FpdCB0aGlzLmluaXREZXZpY2VJRCgpO1xuICB9XG4gIHB1YmxpYyBnZXREZXZpY2VQbGF0Zm9ybSgpOiBzdHJpbmcge1xuICAgIGxldCBwbGF0Zm9ybSA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIHBsYXRmb3JtID0gZGV2aWNlLnBsYXRmb3JtO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjYW5ub3QgZ2V0IHBsYXRmb3JtLCBiZWFjYXVzZSBtYXlub3Qgb24gZGV2aWNlLicpO1xuICAgICAgcGxhdGZvcm0gPSAnUEMnO1xuICAgICAgLy90aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgcmV0dXJuIHBsYXRmb3JtO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXREZXZpY2VVVUlEKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZGV2aWNlSUQpXG4gICAgICByZXR1cm4gdGhpcy5kZXZpY2VJRDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldERldmljZVVVSUQoKTogc3RyaW5nIHtcbiAgICBsZXQgdXVpZCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIHV1aWQgPSBkZXZpY2UudXVpZDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnY2Fubm90IGdldCBVVUlELCBiZWFjYXVzZSBtYXlub3Qgb24gZGV2aWNlLicpO1xuICAgICAgdXVpZCA9IHRoaXMubW9ja19kZXZpY2VJRDtcbiAgICAgIC8vdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgIHJldHVybiB1dWlkO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbml0RGV2aWNlSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBsZXQgZGV2aWNlSUQgPSB0aGlzLl9nZXREZXZpY2VVVUlEKCk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwID0gYXdhaXQgdGhpcy5nZXRTZWN1cmVTdG9yYWdlKFwiZGV2aWNlSURcIikudG9Qcm9taXNlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImdldERldmljZUlEIGZyb20gS2V5U3RvcmUgcmVzcDpcIiwgcmVzcCk7XG4gICAgICBpZiAocmVzcC5pbmNsdWRlcyhcIkRldmljZSBpcyBub3Qgc2VjdXJlXCIpKSB7IC8vd2hpY2ggRGV2aWNlIGlzIG5vdCBzZWN1cmVcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3ApO1xuICAgICAgfSBlbHNlIGlmIChyZXNwKSB7IC8vIGlmIGhhdmUga2V5IGluIGtleVN0b3JlL2tleUNoYWluXG4gICAgICAgIHJldHVybiByZXNwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHNldEtleVJlc3AgPSBhd2FpdCB0aGlzLnNldFNlY3VyZVN0b3JhZ2UoXCJkZXZpY2VJRFwiLCBkZXZpY2VJRCkudG9Qcm9taXNlKCk7XG4gICAgICAgIGlmIChzZXRLZXlSZXNwKSB7XG4gICAgICAgICAgbGV0IGtleSA9IGF3YWl0IHRoaXMuZ2V0U2VjdXJlU3RvcmFnZShcImRldmljZUlEXCIpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJnZXREZXZpY2VJRCBlcnJvciwgdXNlIGxvY2FsU3RvcmFnZVwiKTtcbiAgICAgIGlmICh0aGlzLmdldExvY2FsU3RvcmFnZShcImRldmljZUlEXCIpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldExvY2FsU3RvcmFnZShcImRldmljZUlEXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoXCJkZXZpY2VJRFwiLCBkZXZpY2VJRCk7XG4gICAgICAgIHJldHVybiBkZXZpY2VJRDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0RGV2aWNlTWFudWZhY3R1cmVyKCk6IHN0cmluZyB7XG4gICAgbGV0IG1hbnVmYWN0dXJlciA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIG1hbnVmYWN0dXJlciA9IGAke2RldmljZS5tYW51ZmFjdHVyZXJ9ICR7ZGV2aWNlLm1vZGVsfWA7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ2Nhbm5vdCBnZXQgTWFudWZhY3R1cmVyLCBiZWFjYXVzZSBtYXlub3Qgb24gZGV2aWNlLicpO1xuICAgICAgbWFudWZhY3R1cmVyID0gXCJQQyBCcm93c2VyXCI7XG4gICAgICAvLyB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgcmV0dXJuIG1hbnVmYWN0dXJlcjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVzdGFydEFwcCgpIHtcbiAgICB0cnkge1xuICAgICAgLy8gbmF2aWdhdG9yLnNwbGFzaHNjcmVlbi5zaG93KCk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbignaW5kZXguaHRtbCcpO1xuICAgICAgLy8gbmF2aWdhdG9yLnNwbGFzaHNjcmVlbi5oaWRlKCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ3Jlc3RhcnQgZXJyb3InKTtcbiAgICAgIC8vdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXROZXR3b3JrU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgbGV0IG5ldHdvcmtTdGF0ZSA9IG5hdmlnYXRvci5jb25uZWN0aW9uLnR5cGU7XG4gICAgICBjb25zb2xlLmxvZygnbmV0d29ya1N0YXRlOicsIG5ldHdvcmtTdGF0ZSk7XG4gICAgICByZXR1cm4gbmV0d29ya1N0YXRlICE9ICdub25lJztcbiAgICB9XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2VhcmNoQ29udGFjdHNCeU5hbWUod29yZDogc3RyaW5nKSB7XG4gICAgbGV0IGRhbyA9IHRoaXMuZGV2aWNlRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwID0gYXdhaXQgZGFvLnNlYXJjaGNvbnRhY3RzQnlOYW1lKCcnKS50b1Byb21pc2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdzZWFyY2ggQ29udGFjdCByZXN1bHQ6JywgcmVzcCk7XG4gICAgICBsZXQgY29udGFjdHMgPSByZXNwWydCb2R5J107XG5cbiAgICAgIGZvciAobGV0IGl0ZW0gb2YgY29udGFjdHMpIHtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoaXRlbS5sKSlcbiAgICAgICAgICBpdGVtLmlzQ2hlY2sgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250YWN0cztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yOicsIGVycm9yKTtcbiAgICAgIHJldHVybiBlcnJvclxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaWFsTnVtYmVyKG51bTogc3RyaW5nKTogdm9pZCB7XG4gICAgd2luZG93Lm9wZW4oJ3RlbDonICsgbnVtLnJlcGxhY2UoL1xccy9nLCAnJyksICdfc3lzdGVtJyk7XG4gIH1cblxuICBwdWJsaWMgY2hlY2tJZlJvb3QoKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImlyb290OlwiLCBJUm9vdCk7XG4gICAgICAgIGlmIChJUm9vdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgSVJvb3QuaXNSb290ZWQoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzKHJlc3VsdCk7XG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZWooZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImlSb290IHBsdWdpbiBlcnJvci5cIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcyhmYWxzZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBleGl0QXBwKCk6IHZvaWQge1xuICAgIGNvcmRvdmEucGx1Z2lucy5leGl0KCk7XG4gICAgLy8gbmF2aWdhdG9yLmFwcC5leGl0QXBwKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXBwVmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gY29yZG92YS5nZXRBcHBWZXJzaW9uLmdldFZlcnNpb25OdW1iZXIoKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvL3RoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXCIxLjAuM1wiKTsvLzEuMC4wXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldElzRmlyc3RMYXVuY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TG9jYWxTdG9yYWdlKFwiQXBwRmlyc3RMYXVuY2hcIikgPT09ICdOJyA/IGZhbHNlIDogdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRMb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TG9jYWxTdG9yYWdlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBsb2NrU2NyZWVuT3JpZW50KCk6IHZvaWQge1xuICAgIGxldCBvcmllbnRhdGlvbiA9IHRoaXMuaXNQYWQoKSA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0LXByaW1hcnknO1xuICAgICg8YW55PndpbmRvdykuc2NyZWVuLm9yaWVudGF0aW9uLmxvY2sob3JpZW50YXRpb24pO1xuICB9XG5cbiAgcHVibGljIGp1ZGdlUGFkKCk6IGJvb2xlYW4ge1xuICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc29sZS5sb2coJ3dpZHRoOicsIHdpZHRoKTtcbiAgICBjb25zb2xlLmxvZygnaGVpZ2h0OicsIGhlaWdodCk7XG4gICAgaWYgKHdpZHRoIDwgNzAwIHx8IGhlaWdodCA8IDcwMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc1BhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNQYWQ7XG4gIH1cblxuXG4gIHB1YmxpYyBzZXRTZWN1cmVTdG9yYWdlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IHNzID0gbmV3IGNvcmRvdmEucGx1Z2lucy5TZWN1cmVTdG9yYWdlKFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3Muc2V0KFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xuICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsaWFuel9TTkRcIlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWN1cmVTdG9yYWdlKGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBsZXQgc3MgPSBuZXcgY29yZG92YS5wbHVnaW5zLlNlY3VyZVN0b3JhZ2UoXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzcy5nZXQoXG4gICAgICAgICAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoa2V5KTtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobnVsbCk7XG4gICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5XG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsaWFuel9TTkRcIlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgY2hlY2tTU0wodXJsKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAodGhpcy5TU0xfZmluZ2VycHJpbnRzLmxlbmd0aCA9PSAwKVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICg8YW55PndpbmRvdykucGx1Z2lucy5zc2xDZXJ0aWZpY2F0ZUNoZWNrZXIuY2hlY2soXG4gICAgICAgICAgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlID09PSAnQ09OTkVDVElPTl9TRUNVUkUnKVxuICAgICAgICAgICAgICByZXModHJ1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlaihlcnJvcik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgdGhpcy5TU0xfZmluZ2VycHJpbnRzKTtcbiAgICAgIH0pXG4gIH1cblxuICBwdWJsaWMgdGFrZVNjcmVlblNob3QoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICAoPGFueT5uYXZpZ2F0b3IpLnNjcmVlbnNob3Quc2F2ZShmdW5jdGlvbiAoZXJyb3IsIHJlcykge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIC8vdG9kbyB0aHJvdyBlcnJvclxuICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3RTY3JlZW5TaG90IHN1Y2Nlc3MnLCByZXMuZmlsZVBhdGgpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ2dldERldmljZVBsYXRmb3JtJywgX3RoaXMuZ2V0RGV2aWNlUGxhdGZvcm0oKSk7XG4gICAgICAgIGlmIChfdGhpcy5nZXREZXZpY2VQbGF0Zm9ybSgpID09IFwiaU9TXCIpXG4gICAgICAgICAgKDxhbnk+Y29yZG92YSkucGx1Z2lucy5pbWFnZXNhdmVyLnNhdmVJbWFnZVRvR2FsbGVyeShyZXMuZmlsZVBhdGgsIGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJzdWNjZXNzXCIpIH0sIGZ1bmN0aW9uIChlcnIpIHsgY29uc29sZS5sb2coZXJyKSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlQmFja0J0bigpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmFja2J1dHRvblwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja0NvbnRhY3RQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICg8YW55PmNvcmRvdmEpLnBsdWdpbnMuQ2hlY2tQZXJtaXNzaW9uLmNoZWNrQ29udGFjdFBlcm1pc3Npb24oJ2NvbnRhY3QnLFxuICAgICAgICBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgcmVzb2x2ZShtc2cpXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ3JhbnRDb250YWN0UGVybWlzc2lvbigpIHtcbiAgICAoPGFueT5jb3Jkb3ZhKS5wbHVnaW5zLkNoZWNrUGVybWlzc2lvbi5ncmFudENvbnRhY3RQZXJtaXNzaW9uKClcbiAgfVxuXG59XG4iXX0=