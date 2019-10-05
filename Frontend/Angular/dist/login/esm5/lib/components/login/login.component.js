/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, Optional, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DeviceService, LoginResponse, AfterLoginToken, LOGIN_TYPE, TimeoutService, DefaultLoginMgr, ConfigToken, SQLCommand, DaoFactory, AppRouter, ValidationResult, DataSyncTask, NotificationType, NotificationMgr, TranslateService } from '@allianzSND/core';
import * as jssha from "jssha";
import { Language } from '@allianzSND/core';
import { Region } from '../../model/Enum/Region';
import { RouteReuseStrategy } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { LoginForm } from '../../model/LoginForm';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginMgr, deviceService, daoFactory, timeoutService, router, loginService, createDBTask, notificationMgr, translateService, routeReuseStrategy, APP_CONFIG, afterLogin) {
        var _this = this;
        this.loginMgr = loginMgr;
        this.deviceService = deviceService;
        this.daoFactory = daoFactory;
        this.timeoutService = timeoutService;
        this.router = router;
        this.loginService = loginService;
        this.createDBTask = createDBTask;
        this.notificationMgr = notificationMgr;
        this.translateService = translateService;
        this.routeReuseStrategy = routeReuseStrategy;
        this.APP_CONFIG = APP_CONFIG;
        this.afterLogin = afterLogin;
        this.loginForm = new LoginForm();
        this.language = new Language();
        this.version = '';
        this.isErrorStatusShow = false;
        this.validationResult = new ValidationResult();
        this.deviceAccount = null;
        this.token = null;
        this.forgotPasswordRegion = "";
        this.version = this.APP_CONFIG.DEV_VERSION;
        /** @type {?} */
        var env = this.APP_CONFIG.ENV;
        this.failMax = this.APP_CONFIG[env].OFFLINE_LOGIN_MAX_TIMES;
        this.loginMgr.getToken().subscribe((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            _this.token = token;
        }));
    }
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
        this.timeoutService.clear();
        this.getDeviceAccount();
        if (this.loginMgr.checkLogin()) {
            /** @type {?} */
            var loginResp = new LoginResponse({
                isSuccess: true,
                type: this.deviceService.getNetworkState() ? LOGIN_TYPE.ONLINE : LOGIN_TYPE.OFFLINE,
                errorMsg: '',
                token: this.token
            });
            this._afterLogin(loginResp, null);
        }
        this.bodyHeight = document.body.clientHeight;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LoginComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = window.innerWidth;
        this._mobileCalcRightHeight();
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._mobileCalcRightHeight();
    };
    /**
     * @private
     * @return {?}
     */
    LoginComponent.prototype._mobileCalcRightHeight = /**
     * @private
     * @return {?}
     */
    function () {
        this.layoutLeftHeight = this.layoutLeft.nativeElement.clientHeight;
        this.layoutRightHeight = this.layoutRight.nativeElement.clientHeight;
        this.notOverHeight = (this.layoutLeftHeight + this.layoutRightHeight + 15 - 43) < this.bodyHeight;
        console.log("layoutLeftHeight", this.layoutLeftHeight, "layoutRightHeight", this.layoutRightHeight, "overHeight", this.notOverHeight);
        if (this.windowWidth < 1024 && this.notOverHeight) {
            console.log("layoutLeftHeight", this.layoutLeftHeight);
            /** @type {?} */
            var layoutRightHeightCalc = this.bodyHeight - this.layoutLeftHeight + 20 - 43;
            this.layoutRight.nativeElement.style.height = layoutRightHeightCalc + "px";
        }
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.ForgetPassword = /**
     * @return {?}
     */
    function () {
        this.forgotPasswordRegion = this.APP_CONFIG.ForgotPasswordRegion;
        /** @type {?} */
        var region = this.convertToRegion(this.forgotPasswordRegion);
        /** @type {?} */
        var webUrl = "";
        switch (region) {
            case Region.Taiwan:
                webUrl = "https://first2.allianz.com.tw/eproagent/Forget.aspx";
                break;
            case Region.Thailand:
                webUrl = "https://www.google.com/";
                break;
            case Region.Philippines:
                webUrl = "https://www.google.com/";
                break;
            case Region.Indonesia:
                webUrl = "https://www.google.com/";
                break;
            case Region.Malaysia:
                webUrl = "https://www.google.com/";
                break;
            case Region.Srilanka:
                webUrl = "https://www.google.com/";
                break;
            case Region.Unknow:
                webUrl = "https://www.google.com/";
                break;
        }
        window.open(webUrl, '_system');
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    LoginComponent.prototype.convertToRegion = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        switch (str) {
            case "TW": return Region.Taiwan;
            case "TH": return Region.Thailand;
            case "PH": return Region.Philippines;
            case "ID": return Region.Indonesia;
            case "MY": return Region.Malaysia;
            case "Lk": return Region.Srilanka;
        }
    };
    /**
     * @private
     * @return {?}
     */
    LoginComponent.prototype.getDeviceAccount = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loginService.getDeviceAccount()];
                    case 1:
                        _a.deviceAccount = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} account
     * @return {?}
     */
    LoginComponent.prototype.saveDeviceAccount = /**
     * @private
     * @param {?} account
     * @return {?}
     */
    function (account) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loginService.saveDeviceAccount(account)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.login = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isValid, shaObj, encrypted_str, loginResp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //Reset error message
                        isValid = this.validInfo();
                        //if input not valid
                        if (!isValid)
                            return [2 /*return*/];
                        //end validation
                        shaObj = new jssha("SHA-256", "TEXT");
                        shaObj.update(this.loginForm.username + "||" + this.loginForm.password);
                        encrypted_str = shaObj.getHash("HEX");
                        console.log('network state:', this.deviceService.getNetworkState());
                        console.log("encrypted token:", encrypted_str);
                        if (!this.deviceService.getNetworkState()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onlineLogin(this.loginForm)];
                    case 1:
                        // online login
                        loginResp = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.offlineLogin(encrypted_str)];
                    case 3:
                        //offline login
                        loginResp = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (this.afterLogin)
                            this.afterLogin.afterLogin(loginResp);
                        // after login action
                        if (loginResp.isSuccess) {
                            this._afterLogin(loginResp, encrypted_str);
                        }
                        else {
                            if (loginResp.failCount > 0) {
                                loginResp.errorMsg = this.translateService.translateWithVariable('Offline_Login_Locked', { failCount: loginResp.failCount, failMax: this.failMax });
                            }
                            this.validationResult.setErrorMap("login", loginResp.errorMsg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} loginForm
     * @return {?}
     */
    LoginComponent.prototype.onlineLogin = /**
     * @private
     * @param {?} loginForm
     * @return {?}
     */
    function (loginForm) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loginResp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //online login
                        return [4 /*yield*/, this.loginMgr.login(loginForm).toPromise()];
                    case 1:
                        loginResp = _a.sent();
                        return [2 /*return*/, loginResp];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} token
     * @return {?}
     */
    LoginComponent.prototype.offlineLogin = /**
     * @private
     * @param {?} token
     * @return {?}
     */
    function (token) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var resp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loginService.offlineLogin(token)];
                    case 1:
                        resp = _a.sent();
                        if (resp.isSuccess) {
                            this.loginMgr.updateToken(resp.token);
                        }
                        return [2 /*return*/, resp];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} loginResp
     * @param {?} encrypted_string
     * @return {?}
     */
    LoginComponent.prototype._afterLogin = /**
     * @private
     * @param {?} loginResp
     * @param {?} encrypted_string
     * @return {?}
     */
    function (loginResp, encrypted_string) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var accountHasChanged;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeoutService.init();
                        accountHasChanged = this.deviceAccount !== this.loginForm.username;
                        if (!accountHasChanged) return [3 /*break*/, 2];
                        this.saveDeviceAccount(this.loginForm.username);
                        if (!(this.deviceAccount !== null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.clearUserData()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (encrypted_string)
                            this.loginService.saveToken(loginResp.token, encrypted_string);
                        //Clean the route cache
                        if (this.routeReuseStrategy["deleteRouteSnapshot"]) {
                            ((/** @type {?} */ (this.routeReuseStrategy))).deleteRouteSnapshot();
                        }
                        if (loginResp.type == LOGIN_TYPE.ONLINE)
                            this.router.navigate("Loading");
                        else
                            this.router.navigate("GoalLanding");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    LoginComponent.prototype.validInfo = /**
     * @private
     * @return {?}
     */
    function () {
        this.validationResult.clearErrorMap();
        if (this.loginForm.username.length === 0) {
            this.validationResult.setErrorMap("username", "Username_Required");
        }
        if (this.loginForm.password.length === 0) {
            this.validationResult.setErrorMap("password", "Password_Required");
        }
        if (!/^[A-Za-z0-9]*$/.test(this.loginForm.username)) {
            this.validationResult.setErrorMap("username", "value");
        }
        if (!/^[A-Za-z0-9]*$/.test(this.loginForm.password)) {
            this.validationResult.setErrorMap("password", "value");
        }
        return this.validationResult.isTrue();
    };
    /**
     * @private
     * @return {?}
     */
    LoginComponent.prototype.clearUserData = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dao, commands, resp, syncTable;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.daoFactory.clearDatabaseData("Main")];
                    case 1:
                        _a.sent();
                        dao = this.daoFactory.getDefaultDao();
                        commands = this.createDBTask.createMainTableCommand().map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return new SQLCommand(x, []); }));
                        return [4 /*yield*/, dao.excuteSqlCommand(commands).toPromise()];
                    case 2:
                        resp = _a.sent();
                        console.log("clearUserData Main resp:", resp);
                        // Clear Sync table and insert again.
                        dao = this.daoFactory.getDao("Profile");
                        syncTable = this.daoFactory.getTable("Profile", "TW_LH_SD_DataSync_Time");
                        return [4 /*yield*/, dao.deleteByTable(syncTable).toPromise()];
                    case 3:
                        _a.sent();
                        commands = this.createDBTask.createProfileTableCommand().map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return new SQLCommand(x, []); }));
                        return [4 /*yield*/, dao.excuteSqlCommand(commands).toPromise()];
                    case 4:
                        resp = _a.sent();
                        console.log("clearUserData Profile resp:", resp);
                        return [2 /*return*/];
                }
            });
        });
    };
    // By PongPong
    // By PongPong
    /**
     * @return {?}
     */
    LoginComponent.prototype.clearDatabase = 
    // By PongPong
    /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, db_config, db_names, _loop_1, this_1, db_names_1, db_names_1_1, name, e_1_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        db_config = this.APP_CONFIG[this.APP_CONFIG.ENV].DATABASE;
                        db_names = Object.keys(db_config);
                        _loop_1 = function () {
                            var dao, returnMap, SqlCommandArray, resp;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('db_names be delete:', name);
                                        dao = this_1.daoFactory.getDao(name);
                                        return [4 /*yield*/, dao.getSchema().toPromise()];
                                    case 1:
                                        returnMap = _a.sent();
                                        console.warn("returnMap: ", returnMap);
                                        SqlCommandArray = [];
                                        returnMap.forEach((/**
                                         * @param {?} value
                                         * @return {?}
                                         */
                                        function (value) {
                                            console.warn("value: ", value);
                                            /** @type {?} */
                                            var command = value.tableName.includes('TW_LH_SD_VW_') ? 'DROP VIEW IF EXISTS ' : 'DROP TABLE IF EXISTS ';
                                            SqlCommandArray.push(new SQLCommand(command + value.tableName, []));
                                        }));
                                        console.log('SqlCommandArray: ', SqlCommandArray);
                                        return [4 /*yield*/, dao.excuteSqlCommand(SqlCommandArray).toPromise()];
                                    case 2:
                                        resp = _a.sent();
                                        console.log('excuteSqlCommand resp: ', resp);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        db_names_1 = tslib_1.__values(db_names), db_names_1_1 = db_names_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!db_names_1_1.done) return [3 /*break*/, 5];
                        name = db_names_1_1.value;
                        return [5 /*yield**/, _loop_1()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        db_names_1_1 = db_names_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (db_names_1_1 && !db_names_1_1.done && (_a = db_names_1.return)) _a.call(db_names_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        this.deviceService.restartApp();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.showAllPopup = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = [{
                type: NotificationType.GoalSettingNotStartFirst,
                data: { year: 2019, notShow: false }
            }, {
                type: NotificationType.GoalSettingNotStart,
                data: { year: 2019, notShow: false }
            }, {
                type: NotificationType.NeedGoalSetting,
                data: { days: 10, year: 2019 }
            }, {
                type: NotificationType.GoalPromoSetting,
                data: { days: 10, year: 2019, isPromo: true }
            }, {
                type: NotificationType.GoalAutoApprove,
                data: null
            }, {
                type: NotificationType.GoalAutoApproveLeader,
                data: { "agentList": [{ "agentID": "AG21", "agentName": "HAHA" }] }
            }, {
                type: NotificationType.ApproveGoalIsReject,
                data: { year: 2019 }
            }, {
                type: NotificationType.ApproveGoalIsApprove,
                data: null
            }, {
                type: NotificationType.PendingReview,
                data: { "year": 2019, "agentList": [{ "agentID": "AG21", "agentName": "HAHA" }] }
            }, {
                type: NotificationType.SupervisorHaveChangeAgent,
                data: null
            }, {
                type: NotificationType.SupervisorHaveChangeOld,
                data: { "agentList": [{ "agentID": "AG21", "agentName": "HAHA" }] }
            }, {
                type: NotificationType.SupervisorHaveChangeNew,
                data: { "year": 2019, "agentList": [{ "agentID": "AG21", "agentName": "HAHA" }] }
            }, {
                type: NotificationType.GoalAutoReject,
                data: { year: 2019 }
            }, {
                type: NotificationType.GoalAutoRejectLeader,
                data: { "agentList": [{ "agentID": "AG21", "agentName": "HAHA" }] }
            }, {
                type: NotificationType.ActivityArriveTenPoint,
                data: null
            }, {
                type: NotificationType.ActivityArriveTwentyPoint,
                data: null
            }, {
                type: NotificationType.ActivityLessThanTwentyPoint,
                data: null
            }, {
                type: NotificationType.ReminderEvent,
                data: { "calendars": [{ "color": { "primary": "#23421" }, "title": "title", "location": "location", "start": 1234523421231, "end": 1234523421231 }] }
            }, {
                type: NotificationType.DataPrivacyProtection,
                data: null
            }, {
                type: NotificationType.Overtime,
                data: { customers: [{ customerName: 'Test Customer' }] }
            }, {
                type: NotificationType.AutoDelete,
                data: { customers: [{ customerName: 'Test Customer' }] }
            }, {
                type: NotificationType.Offline,
                data: null
            }, {
                type: NotificationType.OnlineCheck,
                data: null
            }, {
                type: NotificationType.NewVersion,
                data: {
                    "version": "1.0.3",
                    "updateType": "APP",
                    "appPath": "https://xxxx.xxxx.xxx/1.0/snd.apk",
                    "sqls": []
                }
            }, {
                type: NotificationType.Timeout,
                data: null
            }, {
                type: NotificationType.DataCollection,
                data: null
            }, {
                type: NotificationType.NewVersionLogin,
                data: {
                    "version": "1.0.3",
                    "updateType": "APP",
                    "appPath": "https://xxxx.xxxx.xxx/1.0/snd.apk",
                    "sqls": []
                }
            }, {
                type: NotificationType.ContactPermissionError,
                data: null
            }, {
                type: NotificationType.ScreenShotAlert,
                data: null
            }, {
                type: NotificationType.SubmitFail,
                data: null
            }, {
                type: NotificationType.HTTPError,
                data: {
                    code: 500,
                    message: "url:http://xxx.com\ninternal error."
                }
            }];
        data.forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.notificationMgr.pushNotification(x.type, x.data);
        }));
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-login',
                    template: "<div class=\"layout-login layout-block form-scroll-content stop-scroll-block\">\n  <div #layoutLeft class=\"layout-left layout-sub-part\">\n    <div class=\"logo-block\">\n      <img src=\"assets/img/logo-w.svg\">\n    </div>\n    <div class=\"text-block\">\n      <p class=\"text-lg font-size_h2\">{{language.welcome | translate}}</p>\n      <p class=\"text-sm font-size_h5\">{{language.accountPassword | translate}}</p>\n    </div>\n    <div class=\"img-block\">\n      <img src=\"assets/img/img-login.svg\">\n    </div>\n  </div>\n  <div #layoutRight class=\"layout-right layout-main-part\">\n    <!-- login control -->\n    <div class=\"login-control-block \">\n      <!-- top -->\n      <div class=\"top-block\">\n        <!-- title -->\n        <div class=\"title-block\">\n          <h2 class=\"font-size_h5\">{{language.signIn | translate}}</h2>\n        </div>\n        <!-- end of title -->\n        <!-- error status -->\n        <div class=\"error-status\" *ngIf=\"validationResult.isError('login')\">\n          <i class=\"icon-block\"><img src=\"assets/img/icon-info.svg\"></i>\n          <span class=\"text\">{{validationResult.getErrorMsg('login') | translate}}</span>\n        </div>\n        <!-- end of error status -->\n      </div>\n      <!-- end of top -->\n      <!-- form -->\n      <div class=\"login-form-block \">\n        <app-ui-form-layout-advanced>\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col>\n              <app-ui-form-input [inputTitle]=\"language.nationalID | translate\" [name]=\"'NationalID'\"\n                [id]=\"'input_login_nationID'\" [(nxValue)]=\"loginForm.username\"></app-ui-form-input>\n              <app-ui-form-error-msg *ngIf=\"validationResult.isError('username')\">\n                {{validationResult.getErrorMsg('username') | translate}}\n              </app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col>\n              <app-ui-form-input [type]=\"'password'\" [inputTitle]=\"language.password | translate\" [name]=\"'Password'\"\n                [id]=\"'input_login_password'\" [(nxValue)]=\"loginForm.password\"></app-ui-form-input>\n              <app-ui-form-error-msg *ngIf=\"validationResult.isError('password')\">\n                {{validationResult.getErrorMsg('password') | translate}}\n              </app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n        </app-ui-form-layout-advanced>\n        <app-ui-btn-layout>\n          <app-ui-btn [id]=\"'login'\" Action action=\"btn_login\" (ClickBtn)=\"login()\">\n            <ng-container TextType=\"cust\">{{language.login | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n        <app-ui-link [id]=\"'forgotPassword'\" Action action=\"btn_forgotPassword\" (onClick)=\"ForgetPassword()\" [isHasImg]=\"false\">\n          <ng-container textType=\"linktext\">{{language.forgotPassword | translate}}</ng-container>\n        </app-ui-link>\n        <p *ngIf=\"version\">Dev version: {{version}}</p>\n        <button style=\"height: 30px; width: 140px; margin-top: 10px\" (click)=\"clearDatabase()\">clear database</button>\n        <!-- <button style=\"height: 30px; width: 140px; margin-top: 10px\" (click)=\"showAllPopup()\">show all popup</button> -->\n      </div>\n      <!-- end of form -->\n\n    </div>\n    <!-- end of login control -->\n\n\n\n  </div>\n\n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.layout-login.layout-block{display:flex;width:100vw;height:100vh;overflow-x:hidden;overflow-y:auto;flex-wrap:nowrap}.layout-login.layout-block .layout-left{background:linear-gradient(to top,#0068b7,#003781);display:inline-flex;max-width:490px;width:100%;flex:1 1 490px;flex-wrap:wrap;overflow:visible;padding-left:75px;padding-top:75px;box-sizing:border-box}.layout-login.layout-block .layout-right{display:inline-flex;max-width:calc(100% - 490px);width:100%;flex:1 1 calc(100% - 490px);background-color:#fff;align-items:center;box-sizing:border-box;justify-content:center}.layout-login{position:relative}.layout-login.form-scroll-content{transition:.2s}.layout-login.form-scroll-content.active{padding-bottom:0}@media (max-width:1023px){.layout-login.layout-block{flex-wrap:wrap;display:block}.layout-login.layout-block .layout-left{max-width:100%;padding-left:30px;padding-right:30px;padding-top:26px}.layout-login.layout-block .layout-right{max-width:100%;padding-left:5px;padding-right:5px}.layout-login.form-scroll-content.active{padding-bottom:35vh}}.layout-login .top-block{position:relative}.layout-login .top-block .title-block{padding:30px 50px}.layout-login .top-block .title-block h2{line-height:normal;font-weight:700}.layout-login .top-block .icon-block{display:inline-block;vertical-align:middle;flex-shrink:0;width:24px;margin-right:9px}.layout-login .top-block .icon-block img{width:100%;display:inline-block;vertical-align:middle}.layout-login .top-block .error-status{padding:30px 50px;background-color:#f5f5f5;font-size:1rem;font-weight:400;color:#414141;line-height:normal;display:flex;width:100%;position:absolute;top:0;left:0;right:0;border-radius:5px}.layout-login .top-block .error-status .text{text-align:left;display:flex;align-items:center}@media (max-width:374px){.layout-login .top-block .error-status,.layout-login .top-block .title-block{padding:30px}}.layout-login .logo-block{max-width:100%;width:100%;text-align:left}.layout-login .logo-block img{max-width:150px;width:100%}.layout-login .text-block{color:#fff;text-align:left;max-width:74%}.layout-login .text-block .text-lg{font-weight:700;line-height:1.2;margin:0;padding-bottom:20px}.layout-login .text-block .text-sm{font-weight:400;margin:0;line-height:1.33}.layout-login .img-block{position:relative;padding-left:20px}.layout-login .login-control-block{background-color:#f5f5f5;max-width:73.2%;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);padding-bottom:36px;border-radius:5px;width:100%}.layout-login .login-control-block ::ng-deep .btn-block{margin-bottom:15px}@media screen and (min-width:1025px){.layout-login .login-control-block{max-width:60%}}.layout-login .login-form-block{width:100%;padding:0 50px;box-sizing:border-box}.layout-login .login-form-block ::ng-deep .nx-formfield__label{background-color:#f5f5f5}.layout-login .login-form-block ::ng-deep .ui-link-block .link,.layout-login .login-form-block ::ng-deep .ui-link-block .link-text{width:100%}@media (max-width:1023px){.layout-login .login-control-block{margin-top:-43px;max-width:100%;box-sizing:border-box;height:calc(100% + 43px)}.layout-login .logo-block{padding-bottom:95px}.layout-login .logo-block img{max-width:100px}.layout-login .text-block{max-width:300px;position:relative;z-index:2;padding-bottom:calc(15px + 43px)}.layout-login .img-block{position:absolute;top:75px;right:-16px}.layout-login .img-block img{max-width:200px;width:100%}}@media (max-width:374px){.layout-login .logo-block{padding-bottom:35px}.layout-login .logo-block img{max-width:100px}.layout-login .text-block .text-lg{padding-bottom:5px}.layout-login .img-block{position:absolute;top:55px;right:-16px}.layout-login .img-block img{max-width:150px}.layout-login .login-form-block{padding:30px}}"]
                }] }
    ];
    LoginComponent.ctorParameters = function () { return [
        { type: DefaultLoginMgr },
        { type: DeviceService },
        { type: DaoFactory },
        { type: TimeoutService },
        { type: AppRouter },
        { type: LoginService },
        { type: DataSyncTask },
        { type: NotificationMgr },
        { type: TranslateService },
        { type: RouteReuseStrategy, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ConfigToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [AfterLoginToken,] }] }
    ]; };
    LoginComponent.propDecorators = {
        layoutLeft: [{ type: ViewChild, args: ['layoutLeft',] }],
        layoutRight: [{ type: ViewChild, args: ['layoutRight',] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return LoginComponent;
}());
export { LoginComponent };
if (false) {
    /** @type {?} */
    LoginComponent.prototype.loginForm;
    /** @type {?} */
    LoginComponent.prototype.language;
    /** @type {?} */
    LoginComponent.prototype.version;
    /** @type {?} */
    LoginComponent.prototype.isErrorStatusShow;
    /** @type {?} */
    LoginComponent.prototype.validationResult;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.deviceAccount;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.token;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.forgotPasswordRegion;
    /** @type {?} */
    LoginComponent.prototype.windowWidth;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.bodyHeight;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.layoutLeftHeight;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.layoutRightHeight;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.notOverHeight;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.failMax;
    /** @type {?} */
    LoginComponent.prototype.layoutLeft;
    /** @type {?} */
    LoginComponent.prototype.layoutRight;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.loginMgr;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.daoFactory;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.timeoutService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.loginService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.createDBTask;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.notificationMgr;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.routeReuseStrategy;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.APP_CONFIG;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.afterLogin;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvbG9naW4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFjLFVBQVUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUE2QixTQUFTLEVBQVksZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BULE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVsRDtJQTJCRSx3QkFDVSxRQUF5QixFQUN6QixhQUE0QixFQUM1QixVQUFzQixFQUN0QixjQUE4QixFQUM5QixNQUFpQixFQUNqQixZQUEwQixFQUMxQixZQUEwQixFQUMxQixlQUFnQyxFQUNoQyxnQkFBa0MsRUFDdEIsa0JBQXNDLEVBQ2pCLFVBQWUsRUFDWCxVQUFzQjtRQVpyRSxpQkFvQkM7UUFuQlMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsa0JB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Q0FBK0I7Ozs7O0lBRS9CLGlDQUF3Qjs7SUF3QnhCLG9DQUFnRDs7SUFDaEQscUNBQWtEOzs7OztJQXRCaEQsa0NBQWlDOzs7OztJQUNqQyx1Q0FBb0M7Ozs7O0lBQ3BDLG9DQUE4Qjs7Ozs7SUFDOUIsd0NBQXNDOzs7OztJQUN0QyxnQ0FBeUI7Ozs7O0lBQ3pCLHNDQUFrQzs7Ozs7SUFDbEMsc0NBQWtDOzs7OztJQUNsQyx5Q0FBd0M7Ozs7O0lBQ3hDLDBDQUEwQzs7Ozs7SUFDMUMsNENBQTBEOzs7OztJQUMxRCxvQ0FBd0Q7Ozs7O0lBQ3hELG9DQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIE9wdGlvbmFsLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGV2aWNlU2VydmljZSwgTG9naW5SZXNwb25zZSwgQWZ0ZXJMb2dpblRva2VuLCBBZnRlckxvZ2luLCBMT0dJTl9UWVBFLCBUaW1lb3V0U2VydmljZSwgRGVmYXVsdExvZ2luTWdyLCBDb25maWdUb2tlbiwgU1FMQ29tbWFuZCwgRGFvRmFjdG9yeSwgQ3VzdG9tUm91dGVyUmV1c2VTdHJhdGVneSwgQXBwUm91dGVyLCBBUFBFcnJvciwgVmFsaWRhdGlvblJlc3VsdCwgRGF0YVN5bmNUYXNrLCBOb3RpZmljYXRpb25UeXBlLCBOb3RpZmljYXRpb25NZ3IsIFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCAqIGFzIGpzc2hhIGZyb20gXCJqc3NoYVwiO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IFJlZ2lvbiB9IGZyb20gJy4uLy4uL21vZGVsL0VudW0vUmVnaW9uJztcbmltcG9ydCB7IFJvdXRlUmV1c2VTdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2xvZ2luLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5Gb3JtIH0gZnJvbSAnLi4vLi4vbW9kZWwvTG9naW5Gb3JtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25kLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBwdWJsaWMgbG9naW5Gb3JtID0gbmV3IExvZ2luRm9ybSgpO1xuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHB1YmxpYyB2ZXJzaW9uID0gJyc7XG4gIHB1YmxpYyBpc0Vycm9yU3RhdHVzU2hvdyA9IGZhbHNlO1xuICBwdWJsaWMgdmFsaWRhdGlvblJlc3VsdDogVmFsaWRhdGlvblJlc3VsdCA9IG5ldyBWYWxpZGF0aW9uUmVzdWx0KCk7XG5cbiAgcHJpdmF0ZSBkZXZpY2VBY2NvdW50OiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIHRva2VuOiBzdHJpbmcgPSBudWxsO1xuXG4gIHByaXZhdGUgZm9yZ290UGFzc3dvcmRSZWdpb246IHN0cmluZyA9IFwiXCI7XG4gIHB1YmxpYyB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICBwcml2YXRlIGJvZHlIZWlnaHQ6IG51bWJlcjtcblxuICBwcml2YXRlIGxheW91dExlZnRIZWlnaHQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBsYXlvdXRSaWdodEhlaWdodDogbnVtYmVyO1xuICBwcml2YXRlIG5vdE92ZXJIZWlnaHQ6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBmYWlsTWF4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dpbk1ncjogRGVmYXVsdExvZ2luTWdyLFxuICAgIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICBwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnksXG4gICAgcHJpdmF0ZSB0aW1lb3V0U2VydmljZTogVGltZW91dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IEFwcFJvdXRlcixcbiAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY3JlYXRlREJUYXNrOiBEYXRhU3luY1Rhc2ssXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25NZ3I6IE5vdGlmaWNhdGlvbk1ncixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZVJldXNlU3RyYXRlZ3k6IFJvdXRlUmV1c2VTdHJhdGVneSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KENvbmZpZ1Rva2VuKSBwcml2YXRlIEFQUF9DT05GSUc6IGFueSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFmdGVyTG9naW5Ub2tlbikgcHJpdmF0ZSBhZnRlckxvZ2luOiBBZnRlckxvZ2luXG4gICkge1xuICAgIHRoaXMudmVyc2lvbiA9IHRoaXMuQVBQX0NPTkZJRy5ERVZfVkVSU0lPTjtcbiAgICBsZXQgZW52ID0gdGhpcy5BUFBfQ09ORklHLkVOVjtcbiAgICB0aGlzLmZhaWxNYXggPSB0aGlzLkFQUF9DT05GSUdbZW52XS5PRkZMSU5FX0xPR0lOX01BWF9USU1FUztcbiAgICB0aGlzLmxvZ2luTWdyLmdldFRva2VuKCkuc3Vic2NyaWJlKCh0b2tlbikgPT4ge1xuICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgIH0pXG4gIH1cblxuICBAVmlld0NoaWxkKCdsYXlvdXRMZWZ0JykgbGF5b3V0TGVmdDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbGF5b3V0UmlnaHQnKSBsYXlvdXRSaWdodDogRWxlbWVudFJlZjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy50aW1lb3V0U2VydmljZS5jbGVhcigpO1xuICAgIHRoaXMuZ2V0RGV2aWNlQWNjb3VudCgpO1xuICAgIGlmICh0aGlzLmxvZ2luTWdyLmNoZWNrTG9naW4oKSkge1xuICAgICAgbGV0IGxvZ2luUmVzcDogTG9naW5SZXNwb25zZSA9IG5ldyBMb2dpblJlc3BvbnNlKHtcbiAgICAgICAgaXNTdWNjZXNzOiB0cnVlLFxuICAgICAgICB0eXBlOiB0aGlzLmRldmljZVNlcnZpY2UuZ2V0TmV0d29ya1N0YXRlKCkgPyBMT0dJTl9UWVBFLk9OTElORSA6IExPR0lOX1RZUEUuT0ZGTElORSxcbiAgICAgICAgZXJyb3JNc2c6ICcnLFxuICAgICAgICB0b2tlbjogdGhpcy50b2tlblxuICAgICAgfSlcbiAgICAgIHRoaXMuX2FmdGVyTG9naW4obG9naW5SZXNwLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLmJvZHlIZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgfVxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5fbW9iaWxlQ2FsY1JpZ2h0SGVpZ2h0KCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX21vYmlsZUNhbGNSaWdodEhlaWdodCgpO1xuICB9XG4gIHByaXZhdGUgX21vYmlsZUNhbGNSaWdodEhlaWdodCgpIHtcbiAgICB0aGlzLmxheW91dExlZnRIZWlnaHQgPSB0aGlzLmxheW91dExlZnQubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgdGhpcy5sYXlvdXRSaWdodEhlaWdodCA9IHRoaXMubGF5b3V0UmlnaHQubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgdGhpcy5ub3RPdmVySGVpZ2h0ID0gKHRoaXMubGF5b3V0TGVmdEhlaWdodCArIHRoaXMubGF5b3V0UmlnaHRIZWlnaHQgKyAxNSAtIDQzKSA8IHRoaXMuYm9keUhlaWdodDtcbiAgICBjb25zb2xlLmxvZyhcImxheW91dExlZnRIZWlnaHRcIiwgdGhpcy5sYXlvdXRMZWZ0SGVpZ2h0LCBcImxheW91dFJpZ2h0SGVpZ2h0XCIsIHRoaXMubGF5b3V0UmlnaHRIZWlnaHQsIFwib3ZlckhlaWdodFwiLCB0aGlzLm5vdE92ZXJIZWlnaHQpO1xuICAgIGlmICh0aGlzLndpbmRvd1dpZHRoIDwgMTAyNCAmJiB0aGlzLm5vdE92ZXJIZWlnaHQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibGF5b3V0TGVmdEhlaWdodFwiLCB0aGlzLmxheW91dExlZnRIZWlnaHQpO1xuICAgICAgbGV0IGxheW91dFJpZ2h0SGVpZ2h0Q2FsYyA9IHRoaXMuYm9keUhlaWdodCAtIHRoaXMubGF5b3V0TGVmdEhlaWdodCArIDIwIC0gNDM7XG4gICAgICB0aGlzLmxheW91dFJpZ2h0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbGF5b3V0UmlnaHRIZWlnaHRDYWxjICsgXCJweFwiO1xuICAgIH1cblxuICB9XG5cblxuICBwdWJsaWMgRm9yZ2V0UGFzc3dvcmQoKSB7XG5cbiAgICB0aGlzLmZvcmdvdFBhc3N3b3JkUmVnaW9uID0gdGhpcy5BUFBfQ09ORklHLkZvcmdvdFBhc3N3b3JkUmVnaW9uO1xuICAgIGxldCByZWdpb24gPSB0aGlzLmNvbnZlcnRUb1JlZ2lvbih0aGlzLmZvcmdvdFBhc3N3b3JkUmVnaW9uKTtcblxuICAgIGxldCB3ZWJVcmwgPSBcIlwiO1xuICAgIHN3aXRjaCAocmVnaW9uKSB7XG4gICAgICBjYXNlIFJlZ2lvbi5UYWl3YW46IHdlYlVybCA9IFwiaHR0cHM6Ly9maXJzdDIuYWxsaWFuei5jb20udHcvZXByb2FnZW50L0ZvcmdldC5hc3B4XCI7IGJyZWFrO1xuICAgICAgY2FzZSBSZWdpb24uVGhhaWxhbmQ6IHdlYlVybCA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIjsgYnJlYWs7XG4gICAgICBjYXNlIFJlZ2lvbi5QaGlsaXBwaW5lczogd2ViVXJsID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiOyBicmVhaztcbiAgICAgIGNhc2UgUmVnaW9uLkluZG9uZXNpYTogd2ViVXJsID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiOyBicmVhaztcbiAgICAgIGNhc2UgUmVnaW9uLk1hbGF5c2lhOiB3ZWJVcmwgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCI7IGJyZWFrO1xuICAgICAgY2FzZSBSZWdpb24uU3JpbGFua2E6IHdlYlVybCA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIjsgYnJlYWs7XG4gICAgICBjYXNlIFJlZ2lvbi5Vbmtub3c6IHdlYlVybCA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIjsgYnJlYWs7XG4gICAgfVxuXG4gICAgd2luZG93Lm9wZW4od2ViVXJsLCAnX3N5c3RlbScpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9SZWdpb24oc3RyOiBzdHJpbmcpOiBSZWdpb24ge1xuICAgIHN3aXRjaCAoc3RyKSB7XG4gICAgICBjYXNlIFwiVFdcIjogcmV0dXJuIFJlZ2lvbi5UYWl3YW47XG4gICAgICBjYXNlIFwiVEhcIjogcmV0dXJuIFJlZ2lvbi5UaGFpbGFuZDtcbiAgICAgIGNhc2UgXCJQSFwiOiByZXR1cm4gUmVnaW9uLlBoaWxpcHBpbmVzO1xuICAgICAgY2FzZSBcIklEXCI6IHJldHVybiBSZWdpb24uSW5kb25lc2lhO1xuICAgICAgY2FzZSBcIk1ZXCI6IHJldHVybiBSZWdpb24uTWFsYXlzaWE7XG4gICAgICBjYXNlIFwiTGtcIjogcmV0dXJuIFJlZ2lvbi5TcmlsYW5rYTtcbiAgICB9XG4gIH1cblxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0RGV2aWNlQWNjb3VudCgpIHtcbiAgICB0aGlzLmRldmljZUFjY291bnQgPSBhd2FpdCB0aGlzLmxvZ2luU2VydmljZS5nZXREZXZpY2VBY2NvdW50KCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNhdmVEZXZpY2VBY2NvdW50KGFjY291bnQ6IHN0cmluZykge1xuICAgIGF3YWl0IHRoaXMubG9naW5TZXJ2aWNlLnNhdmVEZXZpY2VBY2NvdW50KGFjY291bnQpO1xuICB9XG5cblxuXG5cblxuXG4gIHB1YmxpYyBhc3luYyBsb2dpbigpIHtcbiAgICAvL1Jlc2V0IGVycm9yIG1lc3NhZ2VcbiAgICBsZXQgaXNWYWxpZCA9IHRoaXMudmFsaWRJbmZvKCk7XG4gICAgLy9pZiBpbnB1dCBub3QgdmFsaWRcbiAgICBpZiAoIWlzVmFsaWQpIHJldHVybjtcblxuICAgIC8vZW5kIHZhbGlkYXRpb25cblxuICAgIGxldCBzaGFPYmogPSBuZXcganNzaGEoXCJTSEEtMjU2XCIsIFwiVEVYVFwiKTtcbiAgICBzaGFPYmoudXBkYXRlKGAke3RoaXMubG9naW5Gb3JtLnVzZXJuYW1lfXx8JHt0aGlzLmxvZ2luRm9ybS5wYXNzd29yZH1gKTtcbiAgICBsZXQgZW5jcnlwdGVkX3N0ciA9IHNoYU9iai5nZXRIYXNoKFwiSEVYXCIpO1xuICAgIGNvbnNvbGUubG9nKCduZXR3b3JrIHN0YXRlOicsIHRoaXMuZGV2aWNlU2VydmljZS5nZXROZXR3b3JrU3RhdGUoKSk7XG4gICAgY29uc29sZS5sb2coXCJlbmNyeXB0ZWQgdG9rZW46XCIsIGVuY3J5cHRlZF9zdHIpO1xuICAgIGxldCBsb2dpblJlc3A6IExvZ2luUmVzcG9uc2U7XG4gICAgaWYgKHRoaXMuZGV2aWNlU2VydmljZS5nZXROZXR3b3JrU3RhdGUoKSkge1xuICAgICAgLy8gb25saW5lIGxvZ2luXG4gICAgICBsb2dpblJlc3AgPSBhd2FpdCB0aGlzLm9ubGluZUxvZ2luKHRoaXMubG9naW5Gb3JtKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL29mZmxpbmUgbG9naW5cbiAgICAgIGxvZ2luUmVzcCA9IGF3YWl0IHRoaXMub2ZmbGluZUxvZ2luKGVuY3J5cHRlZF9zdHIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFmdGVyTG9naW4pXG4gICAgICB0aGlzLmFmdGVyTG9naW4uYWZ0ZXJMb2dpbihsb2dpblJlc3ApO1xuXG4gICAgLy8gYWZ0ZXIgbG9naW4gYWN0aW9uXG4gICAgaWYgKGxvZ2luUmVzcC5pc1N1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuX2FmdGVyTG9naW4obG9naW5SZXNwLCBlbmNyeXB0ZWRfc3RyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZihsb2dpblJlc3AuZmFpbENvdW50ID4gMCkge1xuICAgICAgICBsb2dpblJlc3AuZXJyb3JNc2cgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdPZmZsaW5lX0xvZ2luX0xvY2tlZCcsIHsgZmFpbENvdW50OiBsb2dpblJlc3AuZmFpbENvdW50LCBmYWlsTWF4OiB0aGlzLmZhaWxNYXggfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoXCJsb2dpblwiLCBsb2dpblJlc3AuZXJyb3JNc2cpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBvbmxpbmVMb2dpbihsb2dpbkZvcm06IExvZ2luRm9ybSkge1xuICAgIC8vb25saW5lIGxvZ2luXG4gICAgbGV0IGxvZ2luUmVzcDogTG9naW5SZXNwb25zZSA9IGF3YWl0IHRoaXMubG9naW5NZ3IubG9naW4obG9naW5Gb3JtKS50b1Byb21pc2UoKTtcbiAgICByZXR1cm4gbG9naW5SZXNwO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBvZmZsaW5lTG9naW4odG9rZW46IHN0cmluZyk6IFByb21pc2U8TG9naW5SZXNwb25zZT4ge1xuICAgIGxldCByZXNwOiBMb2dpblJlc3BvbnNlID0gYXdhaXQgdGhpcy5sb2dpblNlcnZpY2Uub2ZmbGluZUxvZ2luKHRva2VuKTtcbiAgICBpZiAocmVzcC5pc1N1Y2Nlc3MpIHtcbiAgICAgIHRoaXMubG9naW5NZ3IudXBkYXRlVG9rZW4ocmVzcC50b2tlbik7XG4gICAgfVxuICAgIHJldHVybiByZXNwO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYWZ0ZXJMb2dpbihsb2dpblJlc3A6IExvZ2luUmVzcG9uc2UsIGVuY3J5cHRlZF9zdHJpbmc6IHN0cmluZykge1xuICAgIHRoaXMudGltZW91dFNlcnZpY2UuaW5pdCgpO1xuXG4gICAgbGV0IGFjY291bnRIYXNDaGFuZ2VkOiBib29sZWFuID0gdGhpcy5kZXZpY2VBY2NvdW50ICE9PSB0aGlzLmxvZ2luRm9ybS51c2VybmFtZTtcblxuICAgIC8vaWYgZmlyc3QgdGltZSAsIGJpbmQgYWNjb3VudFxuICAgIGlmIChhY2NvdW50SGFzQ2hhbmdlZCkge1xuICAgICAgdGhpcy5zYXZlRGV2aWNlQWNjb3VudCh0aGlzLmxvZ2luRm9ybS51c2VybmFtZSk7XG4gICAgICBpZiAodGhpcy5kZXZpY2VBY2NvdW50ICE9PSBudWxsKVxuICAgICAgICBhd2FpdCB0aGlzLmNsZWFyVXNlckRhdGEoKTtcbiAgICB9XG5cbiAgICBpZiAoZW5jcnlwdGVkX3N0cmluZylcbiAgICAgIHRoaXMubG9naW5TZXJ2aWNlLnNhdmVUb2tlbihsb2dpblJlc3AudG9rZW4sIGVuY3J5cHRlZF9zdHJpbmcpO1xuXG4gICAgLy9DbGVhbiB0aGUgcm91dGUgY2FjaGVcbiAgICBpZiAodGhpcy5yb3V0ZVJldXNlU3RyYXRlZ3lbXCJkZWxldGVSb3V0ZVNuYXBzaG90XCJdKSB7XG4gICAgICAoPEN1c3RvbVJvdXRlclJldXNlU3RyYXRlZ3k+dGhpcy5yb3V0ZVJldXNlU3RyYXRlZ3kpLmRlbGV0ZVJvdXRlU25hcHNob3QoKTtcbiAgICB9XG4gICAgaWYgKGxvZ2luUmVzcC50eXBlID09IExPR0lOX1RZUEUuT05MSU5FKVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXCJMb2FkaW5nXCIpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiR29hbExhbmRpbmdcIik7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkSW5mbygpOiBib29sZWFuIHtcbiAgICB0aGlzLnZhbGlkYXRpb25SZXN1bHQuY2xlYXJFcnJvck1hcCgpO1xuICAgIGlmICh0aGlzLmxvZ2luRm9ybS51c2VybmFtZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcChcInVzZXJuYW1lXCIsIFwiVXNlcm5hbWVfUmVxdWlyZWRcIik7XG4gICAgfVxuICAgIGlmICh0aGlzLmxvZ2luRm9ybS5wYXNzd29yZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcChcInBhc3N3b3JkXCIsIFwiUGFzc3dvcmRfUmVxdWlyZWRcIik7XG4gICAgfVxuICAgIGlmICghL15bQS1aYS16MC05XSokLy50ZXN0KHRoaXMubG9naW5Gb3JtLnVzZXJuYW1lKSkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKFwidXNlcm5hbWVcIiwgXCJ2YWx1ZVwiKTtcbiAgICB9XG4gICAgaWYgKCEvXltBLVphLXowLTldKiQvLnRlc3QodGhpcy5sb2dpbkZvcm0ucGFzc3dvcmQpKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoXCJwYXNzd29yZFwiLCBcInZhbHVlXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25SZXN1bHQuaXNUcnVlKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNsZWFyVXNlckRhdGEoKSB7XG4gICAgYXdhaXQgdGhpcy5kYW9GYWN0b3J5LmNsZWFyRGF0YWJhc2VEYXRhKFwiTWFpblwiKTtcbiAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICBsZXQgY29tbWFuZHMgPSB0aGlzLmNyZWF0ZURCVGFzay5jcmVhdGVNYWluVGFibGVDb21tYW5kKCkubWFwKHggPT4gbmV3IFNRTENvbW1hbmQoeCwgW10pKTtcbiAgICBsZXQgcmVzcCA9IGF3YWl0IGRhby5leGN1dGVTcWxDb21tYW5kKGNvbW1hbmRzKS50b1Byb21pc2UoKTtcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyVXNlckRhdGEgTWFpbiByZXNwOlwiLCByZXNwKTtcblxuICAgIC8vIENsZWFyIFN5bmMgdGFibGUgYW5kIGluc2VydCBhZ2Fpbi5cbiAgICBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGFvKFwiUHJvZmlsZVwiKTtcbiAgICBsZXQgc3luY1RhYmxlID0gdGhpcy5kYW9GYWN0b3J5LmdldFRhYmxlKFwiUHJvZmlsZVwiLCBcIlRXX0xIX1NEX0RhdGFTeW5jX1RpbWVcIik7XG4gICAgYXdhaXQgZGFvLmRlbGV0ZUJ5VGFibGUoc3luY1RhYmxlKS50b1Byb21pc2UoKTtcbiAgICBjb21tYW5kcyA9IHRoaXMuY3JlYXRlREJUYXNrLmNyZWF0ZVByb2ZpbGVUYWJsZUNvbW1hbmQoKS5tYXAoeCA9PiBuZXcgU1FMQ29tbWFuZCh4LCBbXSkpO1xuICAgIHJlc3AgPSBhd2FpdCBkYW8uZXhjdXRlU3FsQ29tbWFuZChjb21tYW5kcykudG9Qcm9taXNlKCk7XG4gICAgY29uc29sZS5sb2coXCJjbGVhclVzZXJEYXRhIFByb2ZpbGUgcmVzcDpcIiwgcmVzcCk7XG5cbiAgfVxuXG5cbiAgLy8gQnkgUG9uZ1BvbmdcbiAgYXN5bmMgY2xlYXJEYXRhYmFzZSgpIHtcblxuICAgIGxldCBkYl9jb25maWcgPSB0aGlzLkFQUF9DT05GSUdbdGhpcy5BUFBfQ09ORklHLkVOVl0uREFUQUJBU0U7XG4gICAgbGV0IGRiX25hbWVzID0gT2JqZWN0LmtleXMoZGJfY29uZmlnKTtcbiAgICBmb3IgKHZhciBuYW1lIG9mIGRiX25hbWVzKSB7XG4gICAgICBjb25zb2xlLmxvZygnZGJfbmFtZXMgYmUgZGVsZXRlOicsIG5hbWUpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREYW8obmFtZSk7XG5cbiAgICAgIGxldCByZXR1cm5NYXAgPSBhd2FpdCBkYW8uZ2V0U2NoZW1hKCkudG9Qcm9taXNlKCk7XG4gICAgICBjb25zb2xlLndhcm4oXCJyZXR1cm5NYXA6IFwiLCByZXR1cm5NYXApO1xuXG4gICAgICBsZXQgU3FsQ29tbWFuZEFycmF5ID0gW107XG5cbiAgICAgIHJldHVybk1hcC5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKFwidmFsdWU6IFwiLCB2YWx1ZSk7XG4gICAgICAgIGxldCBjb21tYW5kOiBzdHJpbmcgPSB2YWx1ZS50YWJsZU5hbWUuaW5jbHVkZXMoJ1RXX0xIX1NEX1ZXXycpID8gJ0RST1AgVklFVyBJRiBFWElTVFMgJyA6ICdEUk9QIFRBQkxFIElGIEVYSVNUUyAnO1xuICAgICAgICBTcWxDb21tYW5kQXJyYXkucHVzaChuZXcgU1FMQ29tbWFuZChjb21tYW5kICsgdmFsdWUudGFibGVOYW1lLCBbXSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdTcWxDb21tYW5kQXJyYXk6ICcsIFNxbENvbW1hbmRBcnJheSk7XG4gICAgICBsZXQgcmVzcCA9IGF3YWl0IGRhby5leGN1dGVTcWxDb21tYW5kKFNxbENvbW1hbmRBcnJheSkudG9Qcm9taXNlKCk7XG4gICAgICBjb25zb2xlLmxvZygnZXhjdXRlU3FsQ29tbWFuZCByZXNwOiAnLCByZXNwKTtcbiAgICB9XG5cbiAgICB0aGlzLmRldmljZVNlcnZpY2UucmVzdGFydEFwcCgpO1xuICB9XG5cbiAgc2hvd0FsbFBvcHVwKCkge1xuICAgIGxldCBkYXRhID0gW3tcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuR29hbFNldHRpbmdOb3RTdGFydEZpcnN0LFxuICAgICAgZGF0YTogeyB5ZWFyOiAyMDE5LCBub3RTaG93OiBmYWxzZSB9XG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5Hb2FsU2V0dGluZ05vdFN0YXJ0LFxuICAgICAgZGF0YTogeyB5ZWFyOiAyMDE5LCBub3RTaG93OiBmYWxzZSB9XG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5OZWVkR29hbFNldHRpbmcsXG4gICAgICBkYXRhOiB7IGRheXM6IDEwLCB5ZWFyOiAyMDE5IH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkdvYWxQcm9tb1NldHRpbmcsXG4gICAgICBkYXRhOiB7IGRheXM6IDEwLCB5ZWFyOiAyMDE5LCBpc1Byb21vOiB0cnVlIH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkdvYWxBdXRvQXBwcm92ZSxcbiAgICAgIGRhdGE6IG51bGxcbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkdvYWxBdXRvQXBwcm92ZUxlYWRlcixcbiAgICAgIGRhdGE6IHsgXCJhZ2VudExpc3RcIjogW3sgXCJhZ2VudElEXCI6IFwiQUcyMVwiLCBcImFnZW50TmFtZVwiOiBcIkhBSEFcIiB9XSB9XG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5BcHByb3ZlR29hbElzUmVqZWN0LFxuICAgICAgZGF0YTogeyB5ZWFyOiAyMDE5IH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkFwcHJvdmVHb2FsSXNBcHByb3ZlLFxuICAgICAgZGF0YTogbnVsbFxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuUGVuZGluZ1JldmlldyxcbiAgICAgIGRhdGE6IHsgXCJ5ZWFyXCI6IDIwMTksIFwiYWdlbnRMaXN0XCI6IFt7IFwiYWdlbnRJRFwiOiBcIkFHMjFcIiwgXCJhZ2VudE5hbWVcIjogXCJIQUhBXCIgfV0gfVxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuU3VwZXJ2aXNvckhhdmVDaGFuZ2VBZ2VudCxcbiAgICAgIGRhdGE6IG51bGxcbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLlN1cGVydmlzb3JIYXZlQ2hhbmdlT2xkLFxuICAgICAgZGF0YTogeyBcImFnZW50TGlzdFwiOiBbeyBcImFnZW50SURcIjogXCJBRzIxXCIsIFwiYWdlbnROYW1lXCI6IFwiSEFIQVwiIH1dIH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLlN1cGVydmlzb3JIYXZlQ2hhbmdlTmV3LFxuICAgICAgZGF0YTogeyBcInllYXJcIjogMjAxOSwgXCJhZ2VudExpc3RcIjogW3sgXCJhZ2VudElEXCI6IFwiQUcyMVwiLCBcImFnZW50TmFtZVwiOiBcIkhBSEFcIiB9XSB9XG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5Hb2FsQXV0b1JlamVjdCxcbiAgICAgIGRhdGE6IHsgeWVhcjogMjAxOSB9XG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5Hb2FsQXV0b1JlamVjdExlYWRlcixcbiAgICAgIGRhdGE6IHsgXCJhZ2VudExpc3RcIjogW3sgXCJhZ2VudElEXCI6IFwiQUcyMVwiLCBcImFnZW50TmFtZVwiOiBcIkhBSEFcIiB9XSB9XG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5BY3Rpdml0eUFycml2ZVRlblBvaW50LFxuICAgICAgZGF0YTogbnVsbFxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuQWN0aXZpdHlBcnJpdmVUd2VudHlQb2ludCxcbiAgICAgIGRhdGE6IG51bGxcbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkFjdGl2aXR5TGVzc1RoYW5Ud2VudHlQb2ludCxcbiAgICAgIGRhdGE6IG51bGxcbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLlJlbWluZGVyRXZlbnQsXG4gICAgICBkYXRhOiB7IFwiY2FsZW5kYXJzXCI6IFt7IFwiY29sb3JcIjogeyBcInByaW1hcnlcIjogXCIjMjM0MjFcIiB9LCBcInRpdGxlXCI6IFwidGl0bGVcIiwgXCJsb2NhdGlvblwiOiBcImxvY2F0aW9uXCIsIFwic3RhcnRcIjogMTIzNDUyMzQyMTIzMSwgXCJlbmRcIjogMTIzNDUyMzQyMTIzMSB9XSB9XG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5EYXRhUHJpdmFjeVByb3RlY3Rpb24sXG4gICAgICBkYXRhOiBudWxsXG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5PdmVydGltZSxcbiAgICAgIGRhdGE6IHsgY3VzdG9tZXJzOiBbeyBjdXN0b21lck5hbWU6ICdUZXN0IEN1c3RvbWVyJyB9XSB9XG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5BdXRvRGVsZXRlLFxuICAgICAgZGF0YTogeyBjdXN0b21lcnM6IFt7IGN1c3RvbWVyTmFtZTogJ1Rlc3QgQ3VzdG9tZXInIH1dIH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLk9mZmxpbmUsXG4gICAgICBkYXRhOiBudWxsXG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5PbmxpbmVDaGVjayxcbiAgICAgIGRhdGE6IG51bGxcbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLk5ld1ZlcnNpb24sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIFwidmVyc2lvblwiOiBcIjEuMC4zXCIsXG4gICAgICAgIFwidXBkYXRlVHlwZVwiOiBcIkFQUFwiLFxuICAgICAgICBcImFwcFBhdGhcIjogXCJodHRwczovL3h4eHgueHh4eC54eHgvMS4wL3NuZC5hcGtcIixcbiAgICAgICAgXCJzcWxzXCI6IFtdXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5UaW1lb3V0LFxuICAgICAgZGF0YTogbnVsbFxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuRGF0YUNvbGxlY3Rpb24sXG4gICAgICBkYXRhOiBudWxsXG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5OZXdWZXJzaW9uTG9naW4sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIFwidmVyc2lvblwiOiBcIjEuMC4zXCIsXG4gICAgICAgIFwidXBkYXRlVHlwZVwiOiBcIkFQUFwiLFxuICAgICAgICBcImFwcFBhdGhcIjogXCJodHRwczovL3h4eHgueHh4eC54eHgvMS4wL3NuZC5hcGtcIixcbiAgICAgICAgXCJzcWxzXCI6IFtdXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5Db250YWN0UGVybWlzc2lvbkVycm9yLFxuICAgICAgZGF0YTogbnVsbFxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuU2NyZWVuU2hvdEFsZXJ0LFxuICAgICAgZGF0YTogbnVsbFxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuU3VibWl0RmFpbCxcbiAgICAgIGRhdGE6IG51bGxcbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkhUVFBFcnJvcixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogNTAwLFxuICAgICAgICBtZXNzYWdlOiBgdXJsOmh0dHA6Ly94eHguY29tXFxuaW50ZXJuYWwgZXJyb3IuYFxuICAgICAgfVxuICAgIH1dO1xuICAgIGRhdGEuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgdGhpcy5ub3RpZmljYXRpb25NZ3IucHVzaE5vdGlmaWNhdGlvbih4LnR5cGUsIHguZGF0YSk7XG4gICAgfSlcblxuICB9XG59XG4iXX0=