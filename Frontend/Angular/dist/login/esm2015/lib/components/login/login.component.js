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
export class LoginComponent {
    /**
     * @param {?} loginMgr
     * @param {?} deviceService
     * @param {?} daoFactory
     * @param {?} timeoutService
     * @param {?} router
     * @param {?} loginService
     * @param {?} createDBTask
     * @param {?} notificationMgr
     * @param {?} translateService
     * @param {?} routeReuseStrategy
     * @param {?} APP_CONFIG
     * @param {?} afterLogin
     */
    constructor(loginMgr, deviceService, daoFactory, timeoutService, router, loginService, createDBTask, notificationMgr, translateService, routeReuseStrategy, APP_CONFIG, afterLogin) {
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
        let env = this.APP_CONFIG.ENV;
        this.failMax = this.APP_CONFIG[env].OFFLINE_LOGIN_MAX_TIMES;
        this.loginMgr.getToken().subscribe((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            this.token = token;
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.windowWidth = window.innerWidth;
        this.timeoutService.clear();
        this.getDeviceAccount();
        if (this.loginMgr.checkLogin()) {
            /** @type {?} */
            let loginResp = new LoginResponse({
                isSuccess: true,
                type: this.deviceService.getNetworkState() ? LOGIN_TYPE.ONLINE : LOGIN_TYPE.OFFLINE,
                errorMsg: '',
                token: this.token
            });
            this._afterLogin(loginResp, null);
        }
        this.bodyHeight = document.body.clientHeight;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.windowWidth = window.innerWidth;
        this._mobileCalcRightHeight();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._mobileCalcRightHeight();
    }
    /**
     * @private
     * @return {?}
     */
    _mobileCalcRightHeight() {
        this.layoutLeftHeight = this.layoutLeft.nativeElement.clientHeight;
        this.layoutRightHeight = this.layoutRight.nativeElement.clientHeight;
        this.notOverHeight = (this.layoutLeftHeight + this.layoutRightHeight + 15 - 43) < this.bodyHeight;
        console.log("layoutLeftHeight", this.layoutLeftHeight, "layoutRightHeight", this.layoutRightHeight, "overHeight", this.notOverHeight);
        if (this.windowWidth < 1024 && this.notOverHeight) {
            console.log("layoutLeftHeight", this.layoutLeftHeight);
            /** @type {?} */
            let layoutRightHeightCalc = this.bodyHeight - this.layoutLeftHeight + 20 - 43;
            this.layoutRight.nativeElement.style.height = layoutRightHeightCalc + "px";
        }
    }
    /**
     * @return {?}
     */
    ForgetPassword() {
        this.forgotPasswordRegion = this.APP_CONFIG.ForgotPasswordRegion;
        /** @type {?} */
        let region = this.convertToRegion(this.forgotPasswordRegion);
        /** @type {?} */
        let webUrl = "";
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
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    convertToRegion(str) {
        switch (str) {
            case "TW": return Region.Taiwan;
            case "TH": return Region.Thailand;
            case "PH": return Region.Philippines;
            case "ID": return Region.Indonesia;
            case "MY": return Region.Malaysia;
            case "Lk": return Region.Srilanka;
        }
    }
    /**
     * @private
     * @return {?}
     */
    getDeviceAccount() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.deviceAccount = yield this.loginService.getDeviceAccount();
        });
    }
    /**
     * @private
     * @param {?} account
     * @return {?}
     */
    saveDeviceAccount(account) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.loginService.saveDeviceAccount(account);
        });
    }
    /**
     * @return {?}
     */
    login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //Reset error message
            /** @type {?} */
            let isValid = this.validInfo();
            //if input not valid
            if (!isValid)
                return;
            //end validation
            /** @type {?} */
            let shaObj = new jssha("SHA-256", "TEXT");
            shaObj.update(`${this.loginForm.username}||${this.loginForm.password}`);
            /** @type {?} */
            let encrypted_str = shaObj.getHash("HEX");
            console.log('network state:', this.deviceService.getNetworkState());
            console.log("encrypted token:", encrypted_str);
            /** @type {?} */
            let loginResp;
            if (this.deviceService.getNetworkState()) {
                // online login
                loginResp = yield this.onlineLogin(this.loginForm);
            }
            else {
                //offline login
                loginResp = yield this.offlineLogin(encrypted_str);
            }
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
        });
    }
    /**
     * @private
     * @param {?} loginForm
     * @return {?}
     */
    onlineLogin(loginForm) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //online login
            /** @type {?} */
            let loginResp = yield this.loginMgr.login(loginForm).toPromise();
            return loginResp;
        });
    }
    /**
     * @private
     * @param {?} token
     * @return {?}
     */
    offlineLogin(token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let resp = yield this.loginService.offlineLogin(token);
            if (resp.isSuccess) {
                this.loginMgr.updateToken(resp.token);
            }
            return resp;
        });
    }
    /**
     * @private
     * @param {?} loginResp
     * @param {?} encrypted_string
     * @return {?}
     */
    _afterLogin(loginResp, encrypted_string) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.timeoutService.init();
            /** @type {?} */
            let accountHasChanged = this.deviceAccount !== this.loginForm.username;
            //if first time , bind account
            if (accountHasChanged) {
                this.saveDeviceAccount(this.loginForm.username);
                if (this.deviceAccount !== null)
                    yield this.clearUserData();
            }
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
        });
    }
    /**
     * @private
     * @return {?}
     */
    validInfo() {
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
    }
    /**
     * @private
     * @return {?}
     */
    clearUserData() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.daoFactory.clearDatabaseData("Main");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            /** @type {?} */
            let commands = this.createDBTask.createMainTableCommand().map((/**
             * @param {?} x
             * @return {?}
             */
            x => new SQLCommand(x, [])));
            /** @type {?} */
            let resp = yield dao.excuteSqlCommand(commands).toPromise();
            console.log("clearUserData Main resp:", resp);
            // Clear Sync table and insert again.
            dao = this.daoFactory.getDao("Profile");
            /** @type {?} */
            let syncTable = this.daoFactory.getTable("Profile", "TW_LH_SD_DataSync_Time");
            yield dao.deleteByTable(syncTable).toPromise();
            commands = this.createDBTask.createProfileTableCommand().map((/**
             * @param {?} x
             * @return {?}
             */
            x => new SQLCommand(x, [])));
            resp = yield dao.excuteSqlCommand(commands).toPromise();
            console.log("clearUserData Profile resp:", resp);
        });
    }
    // By PongPong
    /**
     * @return {?}
     */
    clearDatabase() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let db_config = this.APP_CONFIG[this.APP_CONFIG.ENV].DATABASE;
            /** @type {?} */
            let db_names = Object.keys(db_config);
            for (var name of db_names) {
                console.log('db_names be delete:', name);
                /** @type {?} */
                let dao = this.daoFactory.getDao(name);
                /** @type {?} */
                let returnMap = yield dao.getSchema().toPromise();
                console.warn("returnMap: ", returnMap);
                /** @type {?} */
                let SqlCommandArray = [];
                returnMap.forEach((/**
                 * @param {?} value
                 * @return {?}
                 */
                value => {
                    console.warn("value: ", value);
                    /** @type {?} */
                    let command = value.tableName.includes('TW_LH_SD_VW_') ? 'DROP VIEW IF EXISTS ' : 'DROP TABLE IF EXISTS ';
                    SqlCommandArray.push(new SQLCommand(command + value.tableName, []));
                }));
                console.log('SqlCommandArray: ', SqlCommandArray);
                /** @type {?} */
                let resp = yield dao.excuteSqlCommand(SqlCommandArray).toPromise();
                console.log('excuteSqlCommand resp: ', resp);
            }
            this.deviceService.restartApp();
        });
    }
    /**
     * @return {?}
     */
    showAllPopup() {
        /** @type {?} */
        let data = [{
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
                    message: `url:http://xxx.com\ninternal error.`
                }
            }];
        data.forEach((/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.notificationMgr.pushNotification(x.type, x.data);
        }));
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-login',
                template: "<div class=\"layout-login layout-block form-scroll-content stop-scroll-block\">\n  <div #layoutLeft class=\"layout-left layout-sub-part\">\n    <div class=\"logo-block\">\n      <img src=\"assets/img/logo-w.svg\">\n    </div>\n    <div class=\"text-block\">\n      <p class=\"text-lg font-size_h2\">{{language.welcome | translate}}</p>\n      <p class=\"text-sm font-size_h5\">{{language.accountPassword | translate}}</p>\n    </div>\n    <div class=\"img-block\">\n      <img src=\"assets/img/img-login.svg\">\n    </div>\n  </div>\n  <div #layoutRight class=\"layout-right layout-main-part\">\n    <!-- login control -->\n    <div class=\"login-control-block \">\n      <!-- top -->\n      <div class=\"top-block\">\n        <!-- title -->\n        <div class=\"title-block\">\n          <h2 class=\"font-size_h5\">{{language.signIn | translate}}</h2>\n        </div>\n        <!-- end of title -->\n        <!-- error status -->\n        <div class=\"error-status\" *ngIf=\"validationResult.isError('login')\">\n          <i class=\"icon-block\"><img src=\"assets/img/icon-info.svg\"></i>\n          <span class=\"text\">{{validationResult.getErrorMsg('login') | translate}}</span>\n        </div>\n        <!-- end of error status -->\n      </div>\n      <!-- end of top -->\n      <!-- form -->\n      <div class=\"login-form-block \">\n        <app-ui-form-layout-advanced>\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col>\n              <app-ui-form-input [inputTitle]=\"language.nationalID | translate\" [name]=\"'NationalID'\"\n                [id]=\"'input_login_nationID'\" [(nxValue)]=\"loginForm.username\"></app-ui-form-input>\n              <app-ui-form-error-msg *ngIf=\"validationResult.isError('username')\">\n                {{validationResult.getErrorMsg('username') | translate}}\n              </app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col>\n              <app-ui-form-input [type]=\"'password'\" [inputTitle]=\"language.password | translate\" [name]=\"'Password'\"\n                [id]=\"'input_login_password'\" [(nxValue)]=\"loginForm.password\"></app-ui-form-input>\n              <app-ui-form-error-msg *ngIf=\"validationResult.isError('password')\">\n                {{validationResult.getErrorMsg('password') | translate}}\n              </app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n        </app-ui-form-layout-advanced>\n        <app-ui-btn-layout>\n          <app-ui-btn [id]=\"'login'\" Action action=\"btn_login\" (ClickBtn)=\"login()\">\n            <ng-container TextType=\"cust\">{{language.login | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n        <app-ui-link [id]=\"'forgotPassword'\" Action action=\"btn_forgotPassword\" (onClick)=\"ForgetPassword()\" [isHasImg]=\"false\">\n          <ng-container textType=\"linktext\">{{language.forgotPassword | translate}}</ng-container>\n        </app-ui-link>\n        <p *ngIf=\"version\">Dev version: {{version}}</p>\n        <button style=\"height: 30px; width: 140px; margin-top: 10px\" (click)=\"clearDatabase()\">clear database</button>\n        <!-- <button style=\"height: 30px; width: 140px; margin-top: 10px\" (click)=\"showAllPopup()\">show all popup</button> -->\n      </div>\n      <!-- end of form -->\n\n    </div>\n    <!-- end of login control -->\n\n\n\n  </div>\n\n</div>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.layout-login.layout-block{display:flex;width:100vw;height:100vh;overflow-x:hidden;overflow-y:auto;flex-wrap:nowrap}.layout-login.layout-block .layout-left{background:linear-gradient(to top,#0068b7,#003781);display:inline-flex;max-width:490px;width:100%;flex:1 1 490px;flex-wrap:wrap;overflow:visible;padding-left:75px;padding-top:75px;box-sizing:border-box}.layout-login.layout-block .layout-right{display:inline-flex;max-width:calc(100% - 490px);width:100%;flex:1 1 calc(100% - 490px);background-color:#fff;align-items:center;box-sizing:border-box;justify-content:center}.layout-login{position:relative}.layout-login.form-scroll-content{transition:.2s}.layout-login.form-scroll-content.active{padding-bottom:0}@media (max-width:1023px){.layout-login.layout-block{flex-wrap:wrap;display:block}.layout-login.layout-block .layout-left{max-width:100%;padding-left:30px;padding-right:30px;padding-top:26px}.layout-login.layout-block .layout-right{max-width:100%;padding-left:5px;padding-right:5px}.layout-login.form-scroll-content.active{padding-bottom:35vh}}.layout-login .top-block{position:relative}.layout-login .top-block .title-block{padding:30px 50px}.layout-login .top-block .title-block h2{line-height:normal;font-weight:700}.layout-login .top-block .icon-block{display:inline-block;vertical-align:middle;flex-shrink:0;width:24px;margin-right:9px}.layout-login .top-block .icon-block img{width:100%;display:inline-block;vertical-align:middle}.layout-login .top-block .error-status{padding:30px 50px;background-color:#f5f5f5;font-size:1rem;font-weight:400;color:#414141;line-height:normal;display:flex;width:100%;position:absolute;top:0;left:0;right:0;border-radius:5px}.layout-login .top-block .error-status .text{text-align:left;display:flex;align-items:center}@media (max-width:374px){.layout-login .top-block .error-status,.layout-login .top-block .title-block{padding:30px}}.layout-login .logo-block{max-width:100%;width:100%;text-align:left}.layout-login .logo-block img{max-width:150px;width:100%}.layout-login .text-block{color:#fff;text-align:left;max-width:74%}.layout-login .text-block .text-lg{font-weight:700;line-height:1.2;margin:0;padding-bottom:20px}.layout-login .text-block .text-sm{font-weight:400;margin:0;line-height:1.33}.layout-login .img-block{position:relative;padding-left:20px}.layout-login .login-control-block{background-color:#f5f5f5;max-width:73.2%;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);padding-bottom:36px;border-radius:5px;width:100%}.layout-login .login-control-block ::ng-deep .btn-block{margin-bottom:15px}@media screen and (min-width:1025px){.layout-login .login-control-block{max-width:60%}}.layout-login .login-form-block{width:100%;padding:0 50px;box-sizing:border-box}.layout-login .login-form-block ::ng-deep .nx-formfield__label{background-color:#f5f5f5}.layout-login .login-form-block ::ng-deep .ui-link-block .link,.layout-login .login-form-block ::ng-deep .ui-link-block .link-text{width:100%}@media (max-width:1023px){.layout-login .login-control-block{margin-top:-43px;max-width:100%;box-sizing:border-box;height:calc(100% + 43px)}.layout-login .logo-block{padding-bottom:95px}.layout-login .logo-block img{max-width:100px}.layout-login .text-block{max-width:300px;position:relative;z-index:2;padding-bottom:calc(15px + 43px)}.layout-login .img-block{position:absolute;top:75px;right:-16px}.layout-login .img-block img{max-width:200px;width:100%}}@media (max-width:374px){.layout-login .logo-block{padding-bottom:35px}.layout-login .logo-block img{max-width:100px}.layout-login .text-block .text-lg{padding-bottom:5px}.layout-login .img-block{position:absolute;top:55px;right:-16px}.layout-login .img-block img{max-width:150px}.layout-login .login-form-block{padding:30px}}"]
            }] }
];
LoginComponent.ctorParameters = () => [
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
];
LoginComponent.propDecorators = {
    layoutLeft: [{ type: ViewChild, args: ['layoutLeft',] }],
    layoutRight: [{ type: ViewChild, args: ['layoutRight',] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvbG9naW4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFjLFVBQVUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUE2QixTQUFTLEVBQVksZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BULE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU9sRCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7SUFzQkosWUFDVSxRQUF5QixFQUN6QixhQUE0QixFQUM1QixVQUFzQixFQUN0QixjQUE4QixFQUM5QixNQUFpQixFQUNqQixZQUEwQixFQUMxQixZQUEwQixFQUMxQixlQUFnQyxFQUNoQyxnQkFBa0MsRUFDdEIsa0JBQXNDLEVBQ2pCLFVBQWUsRUFDWCxVQUFzQjtRQVgzRCxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6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WUFBb0IsZUFBZTtZQUFFLGdCQUFnQjtZQUloUixrQkFBa0IsdUJBeUN0QixRQUFROzRDQUNSLFFBQVEsWUFBSSxNQUFNLFNBQUMsV0FBVzs0Q0FDOUIsUUFBUSxZQUFJLE1BQU0sU0FBQyxlQUFlOzs7eUJBVXBDLFNBQVMsU0FBQyxZQUFZOzBCQUN0QixTQUFTLFNBQUMsYUFBYTt1QkFrQnZCLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUE1RHpDLG1DQUFtQzs7SUFDbkMsa0NBQTJDOztJQUMzQyxpQ0FBb0I7O0lBQ3BCLDJDQUFpQzs7SUFDakMsMENBQW1FOzs7OztJQUVuRSx1Q0FBcUM7Ozs7O0lBQ3JDLCtCQUE2Qjs7Ozs7SUFFN0IsOENBQTBDOztJQUMxQyxxQ0FBMkI7Ozs7O0lBQzNCLG9DQUEyQjs7Ozs7SUFFM0IsMENBQWlDOzs7OztJQUNqQywyQ0FBa0M7Ozs7O0lBQ2xDLHVDQUErQjs7Ozs7SUFFL0IsaUNBQXdCOztJQXdCeEIsb0NBQWdEOztJQUNoRCxxQ0FBa0Q7Ozs7O0lBdEJoRCxrQ0FBaUM7Ozs7O0lBQ2pDLHVDQUFvQzs7Ozs7SUFDcEMsb0NBQThCOzs7OztJQUM5Qix3Q0FBc0M7Ozs7O0lBQ3RDLGdDQUF5Qjs7Ozs7SUFDekIsc0NBQWtDOzs7OztJQUNsQyxzQ0FBa0M7Ozs7O0lBQ2xDLHlDQUF3Qzs7Ozs7SUFDeEMsMENBQTBDOzs7OztJQUMxQyw0Q0FBMEQ7Ozs7O0lBQzFELG9DQUF3RDs7Ozs7SUFDeEQsb0NBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgT3B0aW9uYWwsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZXZpY2VTZXJ2aWNlLCBMb2dpblJlc3BvbnNlLCBBZnRlckxvZ2luVG9rZW4sIEFmdGVyTG9naW4sIExPR0lOX1RZUEUsIFRpbWVvdXRTZXJ2aWNlLCBEZWZhdWx0TG9naW5NZ3IsIENvbmZpZ1Rva2VuLCBTUUxDb21tYW5kLCBEYW9GYWN0b3J5LCBDdXN0b21Sb3V0ZXJSZXVzZVN0cmF0ZWd5LCBBcHBSb3V0ZXIsIEFQUEVycm9yLCBWYWxpZGF0aW9uUmVzdWx0LCBEYXRhU3luY1Rhc2ssIE5vdGlmaWNhdGlvblR5cGUsIE5vdGlmaWNhdGlvbk1nciwgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0ICogYXMganNzaGEgZnJvbSBcImpzc2hhXCI7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgUmVnaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvRW51bS9SZWdpb24nO1xuaW1wb3J0IHsgUm91dGVSZXVzZVN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tICcuLi8uLi9tb2RlbC9Mb2dpbkZvcm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIHB1YmxpYyBsb2dpbkZvcm0gPSBuZXcgTG9naW5Gb3JtKCk7XG4gIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcbiAgcHVibGljIHZlcnNpb24gPSAnJztcbiAgcHVibGljIGlzRXJyb3JTdGF0dXNTaG93ID0gZmFsc2U7XG4gIHB1YmxpYyB2YWxpZGF0aW9uUmVzdWx0OiBWYWxpZGF0aW9uUmVzdWx0ID0gbmV3IFZhbGlkYXRpb25SZXN1bHQoKTtcblxuICBwcml2YXRlIGRldmljZUFjY291bnQ6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgdG9rZW46IHN0cmluZyA9IG51bGw7XG5cbiAgcHJpdmF0ZSBmb3Jnb3RQYXNzd29yZFJlZ2lvbjogc3RyaW5nID0gXCJcIjtcbiAgcHVibGljIHdpbmRvd1dpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgYm9keUhlaWdodDogbnVtYmVyO1xuXG4gIHByaXZhdGUgbGF5b3V0TGVmdEhlaWdodDogbnVtYmVyO1xuICBwcml2YXRlIGxheW91dFJpZ2h0SGVpZ2h0OiBudW1iZXI7XG4gIHByaXZhdGUgbm90T3ZlckhlaWdodDogYm9vbGVhbjtcblxuICBwcml2YXRlIGZhaWxNYXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxvZ2luTWdyOiBEZWZhdWx0TG9naW5NZ3IsXG4gICAgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSxcbiAgICBwcml2YXRlIHRpbWVvdXRTZXJ2aWNlOiBUaW1lb3V0U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogQXBwUm91dGVyLFxuICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjcmVhdGVEQlRhc2s6IERhdGFTeW5jVGFzayxcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbk1ncjogTm90aWZpY2F0aW9uTWdyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlUmV1c2VTdHJhdGVneTogUm91dGVSZXVzZVN0cmF0ZWd5LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQ29uZmlnVG9rZW4pIHByaXZhdGUgQVBQX0NPTkZJRzogYW55LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQWZ0ZXJMb2dpblRva2VuKSBwcml2YXRlIGFmdGVyTG9naW46IEFmdGVyTG9naW5cbiAgKSB7XG4gICAgdGhpcy52ZXJzaW9uID0gdGhpcy5BUFBfQ09ORklHLkRFVl9WRVJTSU9OO1xuICAgIGxldCBlbnYgPSB0aGlzLkFQUF9DT05GSUcuRU5WO1xuICAgIHRoaXMuZmFpbE1heCA9IHRoaXMuQVBQX0NPTkZJR1tlbnZdLk9GRkxJTkVfTE9HSU5fTUFYX1RJTUVTO1xuICAgIHRoaXMubG9naW5NZ3IuZ2V0VG9rZW4oKS5zdWJzY3JpYmUoKHRva2VuKSA9PiB7XG4gICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgfSlcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2xheW91dExlZnQnKSBsYXlvdXRMZWZ0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdsYXlvdXRSaWdodCcpIGxheW91dFJpZ2h0OiBFbGVtZW50UmVmO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnRpbWVvdXRTZXJ2aWNlLmNsZWFyKCk7XG4gICAgdGhpcy5nZXREZXZpY2VBY2NvdW50KCk7XG4gICAgaWYgKHRoaXMubG9naW5NZ3IuY2hlY2tMb2dpbigpKSB7XG4gICAgICBsZXQgbG9naW5SZXNwOiBMb2dpblJlc3BvbnNlID0gbmV3IExvZ2luUmVzcG9uc2Uoe1xuICAgICAgICBpc1N1Y2Nlc3M6IHRydWUsXG4gICAgICAgIHR5cGU6IHRoaXMuZGV2aWNlU2VydmljZS5nZXROZXR3b3JrU3RhdGUoKSA/IExPR0lOX1RZUEUuT05MSU5FIDogTE9HSU5fVFlQRS5PRkZMSU5FLFxuICAgICAgICBlcnJvck1zZzogJycsXG4gICAgICAgIHRva2VuOiB0aGlzLnRva2VuXG4gICAgICB9KVxuICAgICAgdGhpcy5fYWZ0ZXJMb2dpbihsb2dpblJlc3AsIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMuYm9keUhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLl9tb2JpbGVDYWxjUmlnaHRIZWlnaHQoKTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fbW9iaWxlQ2FsY1JpZ2h0SGVpZ2h0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfbW9iaWxlQ2FsY1JpZ2h0SGVpZ2h0KCkge1xuICAgIHRoaXMubGF5b3V0TGVmdEhlaWdodCA9IHRoaXMubGF5b3V0TGVmdC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLmxheW91dFJpZ2h0SGVpZ2h0ID0gdGhpcy5sYXlvdXRSaWdodC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLm5vdE92ZXJIZWlnaHQgPSAodGhpcy5sYXlvdXRMZWZ0SGVpZ2h0ICsgdGhpcy5sYXlvdXRSaWdodEhlaWdodCArIDE1IC0gNDMpIDwgdGhpcy5ib2R5SGVpZ2h0O1xuICAgIGNvbnNvbGUubG9nKFwibGF5b3V0TGVmdEhlaWdodFwiLCB0aGlzLmxheW91dExlZnRIZWlnaHQsIFwibGF5b3V0UmlnaHRIZWlnaHRcIiwgdGhpcy5sYXlvdXRSaWdodEhlaWdodCwgXCJvdmVySGVpZ2h0XCIsIHRoaXMubm90T3ZlckhlaWdodCk7XG4gICAgaWYgKHRoaXMud2luZG93V2lkdGggPCAxMDI0ICYmIHRoaXMubm90T3ZlckhlaWdodCkge1xuICAgICAgY29uc29sZS5sb2coXCJsYXlvdXRMZWZ0SGVpZ2h0XCIsIHRoaXMubGF5b3V0TGVmdEhlaWdodCk7XG4gICAgICBsZXQgbGF5b3V0UmlnaHRIZWlnaHRDYWxjID0gdGhpcy5ib2R5SGVpZ2h0IC0gdGhpcy5sYXlvdXRMZWZ0SGVpZ2h0ICsgMjAgLSA0MztcbiAgICAgIHRoaXMubGF5b3V0UmlnaHQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBsYXlvdXRSaWdodEhlaWdodENhbGMgKyBcInB4XCI7XG4gICAgfVxuXG4gIH1cblxuXG4gIHB1YmxpYyBGb3JnZXRQYXNzd29yZCgpIHtcblxuICAgIHRoaXMuZm9yZ290UGFzc3dvcmRSZWdpb24gPSB0aGlzLkFQUF9DT05GSUcuRm9yZ290UGFzc3dvcmRSZWdpb247XG4gICAgbGV0IHJlZ2lvbiA9IHRoaXMuY29udmVydFRvUmVnaW9uKHRoaXMuZm9yZ290UGFzc3dvcmRSZWdpb24pO1xuXG4gICAgbGV0IHdlYlVybCA9IFwiXCI7XG4gICAgc3dpdGNoIChyZWdpb24pIHtcbiAgICAgIGNhc2UgUmVnaW9uLlRhaXdhbjogd2ViVXJsID0gXCJodHRwczovL2ZpcnN0Mi5hbGxpYW56LmNvbS50dy9lcHJvYWdlbnQvRm9yZ2V0LmFzcHhcIjsgYnJlYWs7XG4gICAgICBjYXNlIFJlZ2lvbi5UaGFpbGFuZDogd2ViVXJsID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiOyBicmVhaztcbiAgICAgIGNhc2UgUmVnaW9uLlBoaWxpcHBpbmVzOiB3ZWJVcmwgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCI7IGJyZWFrO1xuICAgICAgY2FzZSBSZWdpb24uSW5kb25lc2lhOiB3ZWJVcmwgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCI7IGJyZWFrO1xuICAgICAgY2FzZSBSZWdpb24uTWFsYXlzaWE6IHdlYlVybCA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIjsgYnJlYWs7XG4gICAgICBjYXNlIFJlZ2lvbi5TcmlsYW5rYTogd2ViVXJsID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiOyBicmVhaztcbiAgICAgIGNhc2UgUmVnaW9uLlVua25vdzogd2ViVXJsID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiOyBicmVhaztcbiAgICB9XG5cbiAgICB3aW5kb3cub3Blbih3ZWJVcmwsICdfc3lzdGVtJyk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRUb1JlZ2lvbihzdHI6IHN0cmluZyk6IFJlZ2lvbiB7XG4gICAgc3dpdGNoIChzdHIpIHtcbiAgICAgIGNhc2UgXCJUV1wiOiByZXR1cm4gUmVnaW9uLlRhaXdhbjtcbiAgICAgIGNhc2UgXCJUSFwiOiByZXR1cm4gUmVnaW9uLlRoYWlsYW5kO1xuICAgICAgY2FzZSBcIlBIXCI6IHJldHVybiBSZWdpb24uUGhpbGlwcGluZXM7XG4gICAgICBjYXNlIFwiSURcIjogcmV0dXJuIFJlZ2lvbi5JbmRvbmVzaWE7XG4gICAgICBjYXNlIFwiTVlcIjogcmV0dXJuIFJlZ2lvbi5NYWxheXNpYTtcbiAgICAgIGNhc2UgXCJMa1wiOiByZXR1cm4gUmVnaW9uLlNyaWxhbmthO1xuICAgIH1cbiAgfVxuXG5cbiAgcHJpdmF0ZSBhc3luYyBnZXREZXZpY2VBY2NvdW50KCkge1xuICAgIHRoaXMuZGV2aWNlQWNjb3VudCA9IGF3YWl0IHRoaXMubG9naW5TZXJ2aWNlLmdldERldmljZUFjY291bnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2F2ZURldmljZUFjY291bnQoYWNjb3VudDogc3RyaW5nKSB7XG4gICAgYXdhaXQgdGhpcy5sb2dpblNlcnZpY2Uuc2F2ZURldmljZUFjY291bnQoYWNjb3VudCk7XG4gIH1cblxuXG5cblxuXG5cbiAgcHVibGljIGFzeW5jIGxvZ2luKCkge1xuICAgIC8vUmVzZXQgZXJyb3IgbWVzc2FnZVxuICAgIGxldCBpc1ZhbGlkID0gdGhpcy52YWxpZEluZm8oKTtcbiAgICAvL2lmIGlucHV0IG5vdCB2YWxpZFxuICAgIGlmICghaXNWYWxpZCkgcmV0dXJuO1xuXG4gICAgLy9lbmQgdmFsaWRhdGlvblxuXG4gICAgbGV0IHNoYU9iaiA9IG5ldyBqc3NoYShcIlNIQS0yNTZcIiwgXCJURVhUXCIpO1xuICAgIHNoYU9iai51cGRhdGUoYCR7dGhpcy5sb2dpbkZvcm0udXNlcm5hbWV9fHwke3RoaXMubG9naW5Gb3JtLnBhc3N3b3JkfWApO1xuICAgIGxldCBlbmNyeXB0ZWRfc3RyID0gc2hhT2JqLmdldEhhc2goXCJIRVhcIik7XG4gICAgY29uc29sZS5sb2coJ25ldHdvcmsgc3RhdGU6JywgdGhpcy5kZXZpY2VTZXJ2aWNlLmdldE5ldHdvcmtTdGF0ZSgpKTtcbiAgICBjb25zb2xlLmxvZyhcImVuY3J5cHRlZCB0b2tlbjpcIiwgZW5jcnlwdGVkX3N0cik7XG4gICAgbGV0IGxvZ2luUmVzcDogTG9naW5SZXNwb25zZTtcbiAgICBpZiAodGhpcy5kZXZpY2VTZXJ2aWNlLmdldE5ldHdvcmtTdGF0ZSgpKSB7XG4gICAgICAvLyBvbmxpbmUgbG9naW5cbiAgICAgIGxvZ2luUmVzcCA9IGF3YWl0IHRoaXMub25saW5lTG9naW4odGhpcy5sb2dpbkZvcm0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vb2ZmbGluZSBsb2dpblxuICAgICAgbG9naW5SZXNwID0gYXdhaXQgdGhpcy5vZmZsaW5lTG9naW4oZW5jcnlwdGVkX3N0cik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWZ0ZXJMb2dpbilcbiAgICAgIHRoaXMuYWZ0ZXJMb2dpbi5hZnRlckxvZ2luKGxvZ2luUmVzcCk7XG5cbiAgICAvLyBhZnRlciBsb2dpbiBhY3Rpb25cbiAgICBpZiAobG9naW5SZXNwLmlzU3VjY2Vzcykge1xuICAgICAgdGhpcy5fYWZ0ZXJMb2dpbihsb2dpblJlc3AsIGVuY3J5cHRlZF9zdHIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKGxvZ2luUmVzcC5mYWlsQ291bnQgPiAwKSB7XG4gICAgICAgIGxvZ2luUmVzcC5lcnJvck1zZyA9IHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGVXaXRoVmFyaWFibGUoJ09mZmxpbmVfTG9naW5fTG9ja2VkJywgeyBmYWlsQ291bnQ6IGxvZ2luUmVzcC5mYWlsQ291bnQsIGZhaWxNYXg6IHRoaXMuZmFpbE1heCB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcChcImxvZ2luXCIsIGxvZ2luUmVzcC5lcnJvck1zZyk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9ubGluZUxvZ2luKGxvZ2luRm9ybTogTG9naW5Gb3JtKSB7XG4gICAgLy9vbmxpbmUgbG9naW5cbiAgICBsZXQgbG9naW5SZXNwOiBMb2dpblJlc3BvbnNlID0gYXdhaXQgdGhpcy5sb2dpbk1nci5sb2dpbihsb2dpbkZvcm0pLnRvUHJvbWlzZSgpO1xuICAgIHJldHVybiBsb2dpblJlc3A7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9mZmxpbmVMb2dpbih0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxMb2dpblJlc3BvbnNlPiB7XG4gICAgbGV0IHJlc3A6IExvZ2luUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmxvZ2luU2VydmljZS5vZmZsaW5lTG9naW4odG9rZW4pO1xuICAgIGlmIChyZXNwLmlzU3VjY2Vzcykge1xuICAgICAgdGhpcy5sb2dpbk1nci51cGRhdGVUb2tlbihyZXNwLnRva2VuKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3A7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9hZnRlckxvZ2luKGxvZ2luUmVzcDogTG9naW5SZXNwb25zZSwgZW5jcnlwdGVkX3N0cmluZzogc3RyaW5nKSB7XG4gICAgdGhpcy50aW1lb3V0U2VydmljZS5pbml0KCk7XG5cbiAgICBsZXQgYWNjb3VudEhhc0NoYW5nZWQ6IGJvb2xlYW4gPSB0aGlzLmRldmljZUFjY291bnQgIT09IHRoaXMubG9naW5Gb3JtLnVzZXJuYW1lO1xuXG4gICAgLy9pZiBmaXJzdCB0aW1lICwgYmluZCBhY2NvdW50XG4gICAgaWYgKGFjY291bnRIYXNDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnNhdmVEZXZpY2VBY2NvdW50KHRoaXMubG9naW5Gb3JtLnVzZXJuYW1lKTtcbiAgICAgIGlmICh0aGlzLmRldmljZUFjY291bnQgIT09IG51bGwpXG4gICAgICAgIGF3YWl0IHRoaXMuY2xlYXJVc2VyRGF0YSgpO1xuICAgIH1cblxuICAgIGlmIChlbmNyeXB0ZWRfc3RyaW5nKVxuICAgICAgdGhpcy5sb2dpblNlcnZpY2Uuc2F2ZVRva2VuKGxvZ2luUmVzcC50b2tlbiwgZW5jcnlwdGVkX3N0cmluZyk7XG5cbiAgICAvL0NsZWFuIHRoZSByb3V0ZSBjYWNoZVxuICAgIGlmICh0aGlzLnJvdXRlUmV1c2VTdHJhdGVneVtcImRlbGV0ZVJvdXRlU25hcHNob3RcIl0pIHtcbiAgICAgICg8Q3VzdG9tUm91dGVyUmV1c2VTdHJhdGVneT50aGlzLnJvdXRlUmV1c2VTdHJhdGVneSkuZGVsZXRlUm91dGVTbmFwc2hvdCgpO1xuICAgIH1cbiAgICBpZiAobG9naW5SZXNwLnR5cGUgPT0gTE9HSU5fVFlQRS5PTkxJTkUpXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcIkxvYWRpbmdcIik7XG4gICAgZWxzZVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXCJHb2FsTGFuZGluZ1wiKTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRJbmZvKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5jbGVhckVycm9yTWFwKCk7XG4gICAgaWYgKHRoaXMubG9naW5Gb3JtLnVzZXJuYW1lLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKFwidXNlcm5hbWVcIiwgXCJVc2VybmFtZV9SZXF1aXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubG9naW5Gb3JtLnBhc3N3b3JkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKFwicGFzc3dvcmRcIiwgXCJQYXNzd29yZF9SZXF1aXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKCEvXltBLVphLXowLTldKiQvLnRlc3QodGhpcy5sb2dpbkZvcm0udXNlcm5hbWUpKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoXCJ1c2VybmFtZVwiLCBcInZhbHVlXCIpO1xuICAgIH1cbiAgICBpZiAoIS9eW0EtWmEtejAtOV0qJC8udGVzdCh0aGlzLmxvZ2luRm9ybS5wYXNzd29yZCkpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcChcInBhc3N3b3JkXCIsIFwidmFsdWVcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblJlc3VsdC5pc1RydWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2xlYXJVc2VyRGF0YSgpIHtcbiAgICBhd2FpdCB0aGlzLmRhb0ZhY3RvcnkuY2xlYXJEYXRhYmFzZURhdGEoXCJNYWluXCIpO1xuICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgIGxldCBjb21tYW5kcyA9IHRoaXMuY3JlYXRlREJUYXNrLmNyZWF0ZU1haW5UYWJsZUNvbW1hbmQoKS5tYXAoeCA9PiBuZXcgU1FMQ29tbWFuZCh4LCBbXSkpO1xuICAgIGxldCByZXNwID0gYXdhaXQgZGFvLmV4Y3V0ZVNxbENvbW1hbmQoY29tbWFuZHMpLnRvUHJvbWlzZSgpO1xuICAgIGNvbnNvbGUubG9nKFwiY2xlYXJVc2VyRGF0YSBNYWluIHJlc3A6XCIsIHJlc3ApO1xuXG4gICAgLy8gQ2xlYXIgU3luYyB0YWJsZSBhbmQgaW5zZXJ0IGFnYWluLlxuICAgIGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREYW8oXCJQcm9maWxlXCIpO1xuICAgIGxldCBzeW5jVGFibGUgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0VGFibGUoXCJQcm9maWxlXCIsIFwiVFdfTEhfU0RfRGF0YVN5bmNfVGltZVwiKTtcbiAgICBhd2FpdCBkYW8uZGVsZXRlQnlUYWJsZShzeW5jVGFibGUpLnRvUHJvbWlzZSgpO1xuICAgIGNvbW1hbmRzID0gdGhpcy5jcmVhdGVEQlRhc2suY3JlYXRlUHJvZmlsZVRhYmxlQ29tbWFuZCgpLm1hcCh4ID0+IG5ldyBTUUxDb21tYW5kKHgsIFtdKSk7XG4gICAgcmVzcCA9IGF3YWl0IGRhby5leGN1dGVTcWxDb21tYW5kKGNvbW1hbmRzKS50b1Byb21pc2UoKTtcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyVXNlckRhdGEgUHJvZmlsZSByZXNwOlwiLCByZXNwKTtcblxuICB9XG5cblxuICAvLyBCeSBQb25nUG9uZ1xuICBhc3luYyBjbGVhckRhdGFiYXNlKCkge1xuXG4gICAgbGV0IGRiX2NvbmZpZyA9IHRoaXMuQVBQX0NPTkZJR1t0aGlzLkFQUF9DT05GSUcuRU5WXS5EQVRBQkFTRTtcbiAgICBsZXQgZGJfbmFtZXMgPSBPYmplY3Qua2V5cyhkYl9jb25maWcpO1xuICAgIGZvciAodmFyIG5hbWUgb2YgZGJfbmFtZXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkYl9uYW1lcyBiZSBkZWxldGU6JywgbmFtZSk7XG4gICAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERhbyhuYW1lKTtcblxuICAgICAgbGV0IHJldHVybk1hcCA9IGF3YWl0IGRhby5nZXRTY2hlbWEoKS50b1Byb21pc2UoKTtcbiAgICAgIGNvbnNvbGUud2FybihcInJldHVybk1hcDogXCIsIHJldHVybk1hcCk7XG5cbiAgICAgIGxldCBTcWxDb21tYW5kQXJyYXkgPSBbXTtcblxuICAgICAgcmV0dXJuTWFwLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJ2YWx1ZTogXCIsIHZhbHVlKTtcbiAgICAgICAgbGV0IGNvbW1hbmQ6IHN0cmluZyA9IHZhbHVlLnRhYmxlTmFtZS5pbmNsdWRlcygnVFdfTEhfU0RfVldfJykgPyAnRFJPUCBWSUVXIElGIEVYSVNUUyAnIDogJ0RST1AgVEFCTEUgSUYgRVhJU1RTICc7XG4gICAgICAgIFNxbENvbW1hbmRBcnJheS5wdXNoKG5ldyBTUUxDb21tYW5kKGNvbW1hbmQgKyB2YWx1ZS50YWJsZU5hbWUsIFtdKSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coJ1NxbENvbW1hbmRBcnJheTogJywgU3FsQ29tbWFuZEFycmF5KTtcbiAgICAgIGxldCByZXNwID0gYXdhaXQgZGFvLmV4Y3V0ZVNxbENvbW1hbmQoU3FsQ29tbWFuZEFycmF5KS50b1Byb21pc2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdleGN1dGVTcWxDb21tYW5kIHJlc3A6ICcsIHJlc3ApO1xuICAgIH1cblxuICAgIHRoaXMuZGV2aWNlU2VydmljZS5yZXN0YXJ0QXBwKCk7XG4gIH1cblxuICBzaG93QWxsUG9wdXAoKSB7XG4gICAgbGV0IGRhdGEgPSBbe1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5Hb2FsU2V0dGluZ05vdFN0YXJ0Rmlyc3QsXG4gICAgICBkYXRhOiB7IHllYXI6IDIwMTksIG5vdFNob3c6IGZhbHNlIH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkdvYWxTZXR0aW5nTm90U3RhcnQsXG4gICAgICBkYXRhOiB7IHllYXI6IDIwMTksIG5vdFNob3c6IGZhbHNlIH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLk5lZWRHb2FsU2V0dGluZyxcbiAgICAgIGRhdGE6IHsgZGF5czogMTAsIHllYXI6IDIwMTkgfVxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuR29hbFByb21vU2V0dGluZyxcbiAgICAgIGRhdGE6IHsgZGF5czogMTAsIHllYXI6IDIwMTksIGlzUHJvbW86IHRydWUgfVxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuR29hbEF1dG9BcHByb3ZlLFxuICAgICAgZGF0YTogbnVsbFxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuR29hbEF1dG9BcHByb3ZlTGVhZGVyLFxuICAgICAgZGF0YTogeyBcImFnZW50TGlzdFwiOiBbeyBcImFnZW50SURcIjogXCJBRzIxXCIsIFwiYWdlbnROYW1lXCI6IFwiSEFIQVwiIH1dIH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkFwcHJvdmVHb2FsSXNSZWplY3QsXG4gICAgICBkYXRhOiB7IHllYXI6IDIwMTkgfVxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuQXBwcm92ZUdvYWxJc0FwcHJvdmUsXG4gICAgICBkYXRhOiBudWxsXG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5QZW5kaW5nUmV2aWV3LFxuICAgICAgZGF0YTogeyBcInllYXJcIjogMjAxOSwgXCJhZ2VudExpc3RcIjogW3sgXCJhZ2VudElEXCI6IFwiQUcyMVwiLCBcImFnZW50TmFtZVwiOiBcIkhBSEFcIiB9XSB9XG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5TdXBlcnZpc29ySGF2ZUNoYW5nZUFnZW50LFxuICAgICAgZGF0YTogbnVsbFxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuU3VwZXJ2aXNvckhhdmVDaGFuZ2VPbGQsXG4gICAgICBkYXRhOiB7IFwiYWdlbnRMaXN0XCI6IFt7IFwiYWdlbnRJRFwiOiBcIkFHMjFcIiwgXCJhZ2VudE5hbWVcIjogXCJIQUhBXCIgfV0gfVxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuU3VwZXJ2aXNvckhhdmVDaGFuZ2VOZXcsXG4gICAgICBkYXRhOiB7IFwieWVhclwiOiAyMDE5LCBcImFnZW50TGlzdFwiOiBbeyBcImFnZW50SURcIjogXCJBRzIxXCIsIFwiYWdlbnROYW1lXCI6IFwiSEFIQVwiIH1dIH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkdvYWxBdXRvUmVqZWN0LFxuICAgICAgZGF0YTogeyB5ZWFyOiAyMDE5IH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkdvYWxBdXRvUmVqZWN0TGVhZGVyLFxuICAgICAgZGF0YTogeyBcImFnZW50TGlzdFwiOiBbeyBcImFnZW50SURcIjogXCJBRzIxXCIsIFwiYWdlbnROYW1lXCI6IFwiSEFIQVwiIH1dIH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkFjdGl2aXR5QXJyaXZlVGVuUG9pbnQsXG4gICAgICBkYXRhOiBudWxsXG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5BY3Rpdml0eUFycml2ZVR3ZW50eVBvaW50LFxuICAgICAgZGF0YTogbnVsbFxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuQWN0aXZpdHlMZXNzVGhhblR3ZW50eVBvaW50LFxuICAgICAgZGF0YTogbnVsbFxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuUmVtaW5kZXJFdmVudCxcbiAgICAgIGRhdGE6IHsgXCJjYWxlbmRhcnNcIjogW3sgXCJjb2xvclwiOiB7IFwicHJpbWFyeVwiOiBcIiMyMzQyMVwiIH0sIFwidGl0bGVcIjogXCJ0aXRsZVwiLCBcImxvY2F0aW9uXCI6IFwibG9jYXRpb25cIiwgXCJzdGFydFwiOiAxMjM0NTIzNDIxMjMxLCBcImVuZFwiOiAxMjM0NTIzNDIxMjMxIH1dIH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkRhdGFQcml2YWN5UHJvdGVjdGlvbixcbiAgICAgIGRhdGE6IG51bGxcbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLk92ZXJ0aW1lLFxuICAgICAgZGF0YTogeyBjdXN0b21lcnM6IFt7IGN1c3RvbWVyTmFtZTogJ1Rlc3QgQ3VzdG9tZXInIH1dIH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkF1dG9EZWxldGUsXG4gICAgICBkYXRhOiB7IGN1c3RvbWVyczogW3sgY3VzdG9tZXJOYW1lOiAnVGVzdCBDdXN0b21lcicgfV0gfVxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuT2ZmbGluZSxcbiAgICAgIGRhdGE6IG51bGxcbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLk9ubGluZUNoZWNrLFxuICAgICAgZGF0YTogbnVsbFxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuTmV3VmVyc2lvbixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjNcIixcbiAgICAgICAgXCJ1cGRhdGVUeXBlXCI6IFwiQVBQXCIsXG4gICAgICAgIFwiYXBwUGF0aFwiOiBcImh0dHBzOi8veHh4eC54eHh4Lnh4eC8xLjAvc25kLmFwa1wiLFxuICAgICAgICBcInNxbHNcIjogW11cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLlRpbWVvdXQsXG4gICAgICBkYXRhOiBudWxsXG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5EYXRhQ29sbGVjdGlvbixcbiAgICAgIGRhdGE6IG51bGxcbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLk5ld1ZlcnNpb25Mb2dpbixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjNcIixcbiAgICAgICAgXCJ1cGRhdGVUeXBlXCI6IFwiQVBQXCIsXG4gICAgICAgIFwiYXBwUGF0aFwiOiBcImh0dHBzOi8veHh4eC54eHh4Lnh4eC8xLjAvc25kLmFwa1wiLFxuICAgICAgICBcInNxbHNcIjogW11cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkNvbnRhY3RQZXJtaXNzaW9uRXJyb3IsXG4gICAgICBkYXRhOiBudWxsXG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5TY3JlZW5TaG90QWxlcnQsXG4gICAgICBkYXRhOiBudWxsXG4gICAgfSwge1xuICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5TdWJtaXRGYWlsLFxuICAgICAgZGF0YTogbnVsbFxuICAgIH0sIHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuSFRUUEVycm9yLFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiA1MDAsXG4gICAgICAgIG1lc3NhZ2U6IGB1cmw6aHR0cDovL3h4eC5jb21cXG5pbnRlcm5hbCBlcnJvci5gXG4gICAgICB9XG4gICAgfV07XG4gICAgZGF0YS5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbk1nci5wdXNoTm90aWZpY2F0aW9uKHgudHlwZSwgeC5kYXRhKTtcbiAgICB9KVxuXG4gIH1cbn1cbiJdfQ==