/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef, Optional, Inject, ChangeDetectionStrategy } from '@angular/core';
import { changeFontSizeToken, FontSizeAccessToken, ProfileCodeService, Language, DeviceService, TranslateService, SelectOption, MetaService, SettingService, FormMetaComponent, DefaultMetaParser, APIExecutor, ConfigToken, DaoFactory, SQLCommand, APPError } from '@allianzSND/core';
import { SettingComponentService } from '../../service/setting-service.service';
import { animationCollapse } from '@allianzSND/ui';
import { settingMetaControllerToken } from '../../injection-token';
import { NotificationUtils } from '@allianzSND/notification';
var SettingComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SettingComponent, _super);
    function SettingComponent(translateService, deviceService, settingService, settingComponentService, changeDetector, profileCodeService, metaParser, metaExecutor, metaService, daoFactory, notificationUtils, metaController, fontSizeAccess, changeFontSize, APP_CONFIG) {
        var _this = _super.call(this, metaService, profileCodeService, metaParser, metaExecutor) || this;
        _this.translateService = translateService;
        _this.deviceService = deviceService;
        _this.settingService = settingService;
        _this.settingComponentService = settingComponentService;
        _this.changeDetector = changeDetector;
        _this.profileCodeService = profileCodeService;
        _this.metaService = metaService;
        _this.daoFactory = daoFactory;
        _this.notificationUtils = notificationUtils;
        _this.metaController = metaController;
        _this.fontSizeAccess = fontSizeAccess;
        _this.changeFontSize = changeFontSize;
        _this.APP_CONFIG = APP_CONFIG;
        //popup show 
        _this.isPopupSeeDetailOpen = false;
        _this.isPopupOpenChangeLang = false;
        _this.isPopupOpenChangeFontSize = false;
        //collapse open or not
        _this.isCollapseShow = false;
        // lang default option
        _this.optionLangDefault = 'English';
        _this.language = new Language();
        _this.updateTimeList = [];
        _this.languageAlert = '';
        _this.fontSizeAlert = '';
        _this.isDebug = false;
        _this.optionFontSizeDefault = '1';
        _this.fontSizeSetting = 'sm';
        return _this;
    }
    Object.defineProperty(SettingComponent.prototype, "rowConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.metaConfig.Rows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SettingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.settingService.getDebugMode().subscribe((/**
         * @param {?} debug
         * @return {?}
         */
        function (debug) {
            _this.isDebug = debug;
        }));
        this.styleCollapse = this.isCollapseShow ? 'open' : 'closed';
        this.deviceService.getAppVersion().then((/**
         * @param {?} version
         * @return {?}
         */
        function (version) {
            _this.appVersion = version;
        }));
        this.translateService.getUpdateSubject().subscribe((/**
         * @return {?}
         */
        function () {
            //update translate
            _this.getUpdateTimeList();
            _this.changeDetector.detectChanges();
        }));
    };
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    SettingComponent.prototype.btnClick = /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    function (type, id) {
        if (id === 'LastUpdatedTime')
            this.onclickUpdateTime();
        if (this.metaController)
            this.metaController.btnClick(type, id, this._data);
    };
    /**
     * @return {?}
     */
    SettingComponent.prototype.onDataUpdated = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.onDataUpdated.call(this);
        this._data["LanguageOption"] = this.getLanguageList();
        this.fontSizeAccess.getFontSizeCode().toPromise().then((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) {
            _this._data["FontSize"] = resp;
            _this.optionFontSizeDefault = resp;
            _this.changeDetector.detectChanges();
        }));
        console.log("setting Data updated:", this._data);
        this.optionLangDefault = this._data["Language"];
        if (this.metaController)
            this.metaController.onDataUpdated(this._data);
        this.changeDetector.detectChanges();
    };
    /**
     * @return {?}
     */
    SettingComponent.prototype.getMetaID = /**
     * @return {?}
     */
    function () {
        return "setting";
    };
    /**
     * @return {?}
     */
    SettingComponent.prototype.getMetaParams = /**
     * @return {?}
     */
    function () {
        return null;
    };
    /**
     * @return {?}
     */
    SettingComponent.prototype.onValidateAll = /**
     * @return {?}
     */
    function () {
        return true;
    };
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @return {?}
     */
    SettingComponent.prototype.onValueChange = /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @return {?}
     */
    function (column, value, groupId, index) {
        console.log("Setting ValueChange:", column, value, this._data);
        if (column === 'Language') {
            this.onChangeLang(value);
        }
        else if (column === 'FontSize') {
            this.onChangeFontSize(value);
        }
        if (this.metaController)
            this.metaController.onValueChange(column, value, groupId, index, this._data, this.validationResult);
    };
    /**
     * @return {?}
     */
    SettingComponent.prototype.getLanguageList = /**
     * @return {?}
     */
    function () {
        // get languageType in SQLite and set default language
        return this.translateService.getCodeArray().map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return new SelectOption(x.getLanguageID, x.getName); }));
    };
    /**
     * @return {?}
     */
    SettingComponent.prototype.onclickUpdateTime = /**
     * @return {?}
     */
    function () {
        console.log('in on click update time');
        this.isPopupSeeDetailOpen = !this.isPopupSeeDetailOpen;
    };
    //click collpase card
    //click collpase card
    /**
     * @return {?}
     */
    SettingComponent.prototype.toggleCollapse = 
    //click collpase card
    /**
     * @return {?}
     */
    function () {
        this.isCollapseShow = !this.isCollapseShow;
        this.styleCollapse = this.isCollapseShow ? 'open' : 'closed';
    };
    //click to send email
    //click to send email
    /**
     * @param {?} emailAddress
     * @return {?}
     */
    SettingComponent.prototype.onMailToClick = 
    //click to send email
    /**
     * @param {?} emailAddress
     * @return {?}
     */
    function (emailAddress) {
        window.open('mailto:' + emailAddress + '?subject=安聯測試', '_system');
    };
    //click to open pdf
    //click to open pdf
    /**
     * @param {?} pdfUrl
     * @return {?}
     */
    SettingComponent.prototype.onPdfClick = 
    //click to open pdf
    /**
     * @param {?} pdfUrl
     * @return {?}
     */
    function (pdfUrl) {
        // cordova.plugins.SitewaertsDocumentViewer.viewDocument(cordova.file.applicationDirectory + pdfUrl, 'application/pdf', {})
        if (this.deviceService.getDevicePlatform() == 'iOS') {
            cordova.plugins.fileOpener2.open((cordova.file.applicationDirectory + pdfUrl), 'application/pdf', {
                error: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
                }),
                success: (/**
                 * @return {?}
                 */
                function () {
                    console.log('file opened successfully');
                })
            });
        }
        else {
            ((/** @type {?} */ (window))).resolveLocalFileSystemURL(cordova.file.applicationDirectory + pdfUrl, (/**
             * @param {?} fileEntry
             * @return {?}
             */
            function (fileEntry) {
                ((/** @type {?} */ (window))).resolveLocalFileSystemURL(cordova.file.externalDataDirectory, (/**
                 * @param {?} dirEntry
                 * @return {?}
                 */
                function (dirEntry) {
                    fileEntry.copyTo(dirEntry, 'date.pdf', (/**
                     * @param {?} newFileEntry
                     * @return {?}
                     */
                    function (newFileEntry) {
                        cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf', {
                            error: (/**
                             * @param {?} e
                             * @return {?}
                             */
                            function (e) {
                                console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
                            }),
                            success: (/**
                             * @return {?}
                             */
                            function () {
                                console.log('file opened successfully');
                            })
                        });
                    }));
                }));
            }));
        }
    };
    //check if select language which different from default language
    //check if select language which different from default language
    /**
     * @param {?} option
     * @return {?}
     */
    SettingComponent.prototype.onChangeLang = 
    //check if select language which different from default language
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option != this.optionLangDefault) {
            this.languageAlert = this.translateService.translate('Language_Alert');
            // if (option == 'en')
            //   this.languageAlert = this.translateService.translate('English_Alert');
            // if (option == 'zh_TW')
            //   this.languageAlert = this.translateService.translate('Mandarin_Alert');
            this.isPopupOpenChangeLang = true;
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SettingComponent.prototype.onChangeFontSize = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option != this.optionFontSizeDefault) {
            switch (option) {
                case '1':
                    // this.fontSizeAlert = this.translateService.translate('Small_Alert');
                    this.fontSizeSetting = 'sm';
                    break;
                case '2':
                    // this.fontSizeAlert = this.translateService.translate('Medium_Alert');
                    this.fontSizeSetting = 'md';
                    break;
                case '3':
                    // this.fontSizeAlert = this.translateService.translate('Large_Alert');
                    this.fontSizeSetting = 'lg';
                    break;
            }
            this.fontSizeAlert = this.translateService.translate('Font_Size_Alert');
            this.isPopupOpenChangeFontSize = true;
        }
    };
    // lang change popup
    // lang change popup
    /**
     * @return {?}
     */
    SettingComponent.prototype.onLanguageAlertCancel = 
    // lang change popup
    /**
     * @return {?}
     */
    function () {
        this._data["Language"] = this.optionLangDefault;
    };
    // confirm to change language
    // confirm to change language
    /**
     * @return {?}
     */
    SettingComponent.prototype.onLanguageAlertConfirm = 
    // confirm to change language
    /**
     * @return {?}
     */
    function () {
        this.updateLanguage(this._data["Language"]);
        this.optionLangDefault = this._data["Language"];
    };
    // lang change popup
    // lang change popup
    /**
     * @return {?}
     */
    SettingComponent.prototype.onFontSizeAlertCancel = 
    // lang change popup
    /**
     * @return {?}
     */
    function () {
        this._data["FontSize"] = this.optionFontSizeDefault;
    };
    // confirm to change language
    // confirm to change language
    /**
     * @return {?}
     */
    SettingComponent.prototype.onFontSizeAlertConfirm = 
    // confirm to change language
    /**
     * @return {?}
     */
    function () {
        this.updateFontSize();
        this.optionFontSizeDefault = this._data["FontSize"];
    };
    // update language
    // update language
    /**
     * @param {?} option
     * @return {?}
     */
    SettingComponent.prototype.updateLanguage = 
    // update language
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        this.translateService.updateLanguage(option).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data['Header'].status) {
                _this.profileCodeService._fetchCodeData().subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.updateFontSizeOption();
                }));
                // this.deviceService.restartApp();
            }
        }));
    };
    /**
     * @return {?}
     */
    SettingComponent.prototype.updateFontSize = /**
     * @return {?}
     */
    function () {
        if (this.changeFontSize) {
            return this.changeFontSize.updateFontSize(this.fontSizeSetting);
        }
    };
    // load updateTime
    // load updateTime
    /**
     * @return {?}
     */
    SettingComponent.prototype.getUpdateTimeList = 
    // load updateTime
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.settingComponentService.getUpdateTimeList().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            console.warn('getUpdateTimeList', data);
            _this.updateTimeList = data.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                return {
                    FuncID: _this.translateService.translate(x.MainFunc),
                    BackendTime: new Date(x.BackendTime)
                };
            }));
        }));
    };
    /**
     * @return {?}
     */
    SettingComponent.prototype.updateFontSizeOption = /**
     * @return {?}
     */
    function () {
        this._data["FontSizeOption"] = this.profileCodeService.getCodeArray("Font_Size")
            .map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return new SelectOption(x.getCode(), x.displayText); }));
        this.changeDetector.detectChanges();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SettingComponent.prototype.changeDebugMode = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        console.log("changeDebugMode:", val);
        this.settingService.setDebugMode(val);
    };
    /**
     * @return {?}
     */
    SettingComponent.prototype.onClickCleanDeviceBtn = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var confirmResult, resp, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confirmResult = confirm("Are you sure you want to unbind device (can NOT undo) ? ");
                        if (!confirmResult) return [3 /*break*/, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        if (!this.notificationUtils.checkNetworkBeforeAction()) return [3 /*break*/, 4];
                        // online 
                        console.warn("do deviceService.unbindDevice");
                        return [4 /*yield*/, this.settingComponentService.unbindDevice()];
                    case 2:
                        resp = _a.sent();
                        console.warn("unbindDevice resp: ", resp);
                        if (!resp.success) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._clearDeviceData()];
                    case 3:
                        _a.sent();
                        this.deviceService.restartApp();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        throw new APPError("F00901", "unbindDeviceAPI fail: " + error_1);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    SettingComponent.prototype._clearDeviceData = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var env, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this._initLocalStorage();
                        env = this.APP_CONFIG.ENV;
                        if (!(env !== 'DEV')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._clearDatabase()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        ;
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        throw new APPError('F00902', 'clearSqliteDB fail: ' + error_2);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    SettingComponent.prototype._clearDatabase = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, env, db_config, db_names, _loop_1, this_1, db_names_1, db_names_1_1, name, e_1_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        env = this.APP_CONFIG.ENV;
                        db_config = this.APP_CONFIG[env].DATABASE;
                        db_names = Object.keys(db_config);
                        _loop_1 = function () {
                            var dao, returnMap, SqlCommandArray;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        // console.log('db_names be delete:', name);
                                        dao = this_1.daoFactory.getDao(name);
                                        return [4 /*yield*/, dao.getSchema().toPromise()];
                                    case 1:
                                        returnMap = _a.sent();
                                        SqlCommandArray = [];
                                        returnMap.forEach((/**
                                         * @param {?} value
                                         * @return {?}
                                         */
                                        function (value) {
                                            /** @type {?} */
                                            var command = value.tableName.includes('TW_LH_SD_VW_') ? 'DROP VIEW IF EXISTS ' : 'DROP TABLE IF EXISTS ';
                                            SqlCommandArray.push(new SQLCommand(command + value.tableName, []));
                                        }));
                                        return [4 /*yield*/, dao.excuteSqlCommand(SqlCommandArray).toPromise()];
                                    case 2:
                                        _a.sent();
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
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    SettingComponent.prototype._initLocalStorage = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var MainDBKey = window.localStorage.getItem('Main');
        /** @type {?} */
        var ProfileDBKey = window.localStorage.getItem('Profile');
        window.localStorage.clear();
        window.localStorage.setItem('Main', MainDBKey);
        window.localStorage.setItem('Profile', ProfileDBKey);
    };
    SettingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-setting',
                    template: "<!-- popup -->\n<!-- popup - last update -->\n<app-ui-modal-style-text1 class=\"modal-textlist-block\" [isContnetFull]=\"true\" [isHasBtmBlock]=\"false\"\n  [(isPopupOpen)]=\"isPopupSeeDetailOpen\" [typeBtn]=\"'style1'\">\n  <ng-container textType=\"modal-title-detail\">{{language.updateTime | translate}}</ng-container>\n  <ng-container textType=\"modal-content-detail\">\n    <ul class=\"text-list\" *ngFor=\"let updateTime of updateTimeList\">\n      <li class=\"text-list-item\">\n        <div class=\"text-left\">{{ updateTime.FuncID }}</div>\n        <div class=\"text-right\">{{ updateTime.BackendTime | date: 'MM/dd/y HH:mm' }}</div>\n      </li>\n    </ul>\n  </ng-container>\n</app-ui-modal-style-text1>\n<!-- end of popup - last update -->\n<!-- popup - change lang -->\n<app-ui-modal-confirm #uiAlert *ngIf=\"isPopupOpenChangeLang\" [(isPopupOpen)]=\"isPopupOpenChangeLang\" (onCancel)=\"onLanguageAlertCancel()\"\n  (onConfirm)=\"onLanguageAlertConfirm()\" [title]=\"language.languageConversionTitle | translate\"\n  [message]=\"languageAlert\" [cancelBtnText]=\"language.settingNo | translate\" [confirmBtnText]=\"language.settingYes | translate\">\n</app-ui-modal-confirm>\n<!-- end of popup -change lang-->\n<!-- popup - change lang -->\n<app-ui-modal-confirm *ngIf=\"isPopupOpenChangeFontSize\" [(isPopupOpen)]=\"isPopupOpenChangeFontSize\" (onCancel)=\"onFontSizeAlertCancel()\"\n  (onConfirm)=\"onFontSizeAlertConfirm()\" [title]=\"language.changeFontSize | translate\" [message]=\"fontSizeAlert\"\n  [cancelBtnText]=\"language.settingNo | translate\" [confirmBtnText]=\"language.settingYes | translate\">\n</app-ui-modal-confirm>\n<!-- end of popup -change lang-->\n\n<div class=\"layout-setting layout-full-page stop-scroll-block\">\n  <!-- setting block -->\n  <app-ui-card-content-btn [noPadding]=\"true\" class=\"card-info-block\" [hasBtn]=\"false\">\n    <ng-container infoContent>\n      <div *ngIf=\"data && isMetaLoaded()\" class=\"layout-info-left-right\">\n        <div class=\"layout-info-row\" *ngFor=\"let row of rowConfig\">\n          <ng-container *ngFor=\"let col of row\">\n            <div class=\"layout-info-left-part\">\n              <p class=\"info-text\">{{col.name | translate}}</p>\n            </div>\n            <div class=\"layout-info-right-part\">\n              <ng-container *ngIf=\"col.type==='Select'\">\n                <app-ui-form-select class=\"select-item-block\" [isShowDefaultOption]=\"col.showDefaultOption\"\n                  [isNoSpace]=\"true\" [selectTitle]=\"''\" [selectOption]=\"data[col.id+'Option']\"\n                  [(nxValue)]=\"data[col.id]\" (nxValueChange)=\"onChange(col.id,$event)\"></app-ui-form-select>\n              </ng-container>\n              <ng-container *ngIf=\"col.type==='Input'\"></ng-container>\n              <ng-container *ngIf=\"col.type==='Link'\">\n                <app-ui-link class=\"link-detail\" [isUnderLine]=\"false\" [imgSrc]=\"col.icon\"\n                  Action [action]=\"'SettingClick_' + col.id\" (actionClick)=\"onBtnClick('link',col.id)\">\n                  <ng-container textType=\"linktext\">{{data[col.id] | translate}}</ng-container>\n                </app-ui-link>\n              </ng-container>\n              <ng-container *ngIf=\"col.type==='Label'\">\n                <div class=\"text-detail\">\n                  <p class=\"text\">{{data[col.id]}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"layout-info-row\">\n          <ng-container>\n            <div class=\"layout-info-left-part\">\n              <p class=\"info-text\">Debug Mode</p>\n            </div>\n            <div class=\"layout-info-right-part\">\n              <app-ui-form-switcher [(nxValue)]=\"isDebug\" (nxValueChange)=\"changeDebugMode($event)\">\n              </app-ui-form-switcher>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"layout-info-row\">\n          <ng-container>\n            <div class=\"layout-info-left-part\">\n              <p class=\"info-text\">{{language.unbindDevice | translate}}</p>\n            </div>\n            <div class=\"layout-info-right-part\">\n              <app-ui-btn-layout>\n                <app-ui-btn [btnWd]=\"'lg'\" [btnHeight]=\"'sm'\" [name]=\"'btn-default'\"\n                Action action=\"SettingUnbindDevice\" (actionClick)=\"onClickCleanDeviceBtn()\">\n                  <ng-container TextType=\"cust\">{{language.unbind | translate}}</ng-container>\n                </app-ui-btn>\n              </app-ui-btn-layout>\n            </div>\n          </ng-container>\n        </div>\n        <!-- start of upload language -->\n        <!-- <div class=\"layout-info-row\">\n          <ng-container>\n            <div class=\"layout-info-left-part\">\n              <p class=\"info-text\">Upload</p>\n            </div>\n            <div class=\"layout-info-right-part\">\n              <app-ui-btn-layout style=\"display: inline-block;\">\n                <div>\n                  <input type=\"file\" style=\"display: inline-block;\" (change)=\"incomingfile($event)\"\n                    placeholder=\"Upload file\" accept=\".xlsx, .xls\">\n                </div>\n                <input type=\"button\" (click)=\"uploadLanguage()\" value=\"Upload\"/>\n                <input type=\"button\" (click)=\"resetLanguage()\" value=\"Reset\"/>\n              </app-ui-btn-layout>\n            </div>\n          </ng-container>\n        </div> -->\n        <!-- end of upload language -->\n      </div>\n    </ng-container>\n\n  </app-ui-card-content-btn>\n  <!-- end of setting block -->\n  <!-- contact block -->\n  <div class=\"contact-block\">\n    <!-- img -->\n    <div class=\"img-text-block\">\n      <div class=\"img-block\">\n        <img src=\"assets/img/img-setting.svg\">\n      </div>\n    </div>\n    <!-- end of img -->\n    <!-- contact text -->\n    <div class=\"contact-text-block\">\n      <h3 class=\"title font-size_h4\">{{language.contactMessage | translate}}</h3>\n      <div class=\"text-block\">\n        <app-ui-link class=\"link-text-block\" [isUnderLine]=\"false\" [isImgFront]=\"true\"\n          [imgSrc]=\"'assets/img/icon-mail-blue.svg'\" Action action=\"SettingClickEmail\" (actionClick)=\"onMailToClick('perform@allianz.com.tw')\">\n          <ng-container textType=\"linktext\">perform@allianz.com.tw</ng-container>\n        </app-ui-link>\n      </div>\n    </div>\n    <!-- end of contact text -->\n\n  </div>\n  <!-- end of contact block -->\n\n  <!-- file download -->\n  <app-ui-card-content-btn [noPadding]=\"true\" class=\"card-collapse-block\" [hasBtn]=\"false\" [ngClass]=\"styleCollapse\">\n    <ng-container infoContent>\n      <div class=\"title-block\">\n        <h3 class=\"title\">{{language.fileDownload | translate}}</h3>\n      </div>\n      <div class=\"collapse-block\">\n        <div class=\"text-block\" [@openClose]=\"styleCollapse\">\n          <app-ui-link class=\"link-text-block\" [isUnderLine]=\"false\" [isImgFront]=\"true\"\n            [imgSrc]=\"'assets/img/icon-pdf-blue.svg'\" (onClick)=\"onPdfClick('www/assets/file/date.pdf')\">\n            <ng-container textType=\"linktext\">Privacy disclosure</ng-container>\n          </app-ui-link>\n          <app-ui-link class=\"link-text-block\" [isUnderLine]=\"false\" [isImgFront]=\"true\"\n            [imgSrc]=\"'assets/img/icon-pdf-blue.svg'\" (onClick)=\"onPdfClick('www/assets/file/date.pdf')\">\n            <ng-container textType=\"linktext\">S&D applicatopn User manual</ng-container>\n          </app-ui-link>\n          <app-ui-link class=\"link-text-block\" [isUnderLine]=\"false\" [isImgFront]=\"true\"\n            [imgSrc]=\"'assets/img/icon-pdf-blue.svg'\" (onClick)=\"onPdfClick('www/assets/file/date.pdf')\">\n            <ng-container textType=\"linktext\">Information Security Policy</ng-container>\n          </app-ui-link>\n          <app-ui-link class=\"link-text-block\" [isUnderLine]=\"false\" [isImgFront]=\"true\"\n            [imgSrc]=\"'assets/img/icon-pdf-blue.svg'\" (onClick)=\"onPdfClick('www/assets/file/date.pdf')\">\n            <ng-container textType=\"linktext\">Taiwan Personal Information Protection and 2019_Taiwan</ng-container>\n          </app-ui-link>\n        </div>\n\n      </div>\n      <div class=\"collapse-btn\" (click)=\"toggleCollapse()\" [ngClass]=\"styleCollapse\">\n        <img src=\"assets/img/icon-arrow-grey-dark.svg\" alt=\"\">\n      </div>\n    </ng-container>\n  </app-ui-card-content-btn>\n  <!-- end of file download -->\n</div>",
                    animations: [
                        animationCollapse
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.layout-info-left-right,.layout-info-left-right .layout-info-row{display:flex;width:100%;flex-wrap:wrap}.layout-info-left-right .layout-info-row+.layout-info-row{margin-top:30px}.layout-info-left-right .layout-info-left-part{width:70%;flex:1 1 70%;display:inline-flex;align-items:center}.layout-info-left-right .layout-info-right-part{width:calc(100% - 70%);flex:1 1 calc(100% - 70%);display:inline-flex;align-items:center;justify-content:flex-start}@media (max-width:767px){.layout-info-left-right .layout-info-row+.layout-info-row{margin-top:20px}.layout-info-left-right .layout-info-left-part{width:45%;flex:1 1 45%}.layout-info-left-right .layout-info-right-part{width:calc(100% - 45%);flex:1 1 calc(100% - 45%);padding-left:10%}}@media (max-width:374px){.layout-info-left-right .layout-info-left-part{width:50%;flex:1 1 50%}.layout-info-left-right .layout-info-right-part{width:calc(100% - 50%);flex:1 1 calc(100% - 50%)}}.layout-info-left-right .info-text{font-size:1.25rem;font-weight:400;margin:0;padding:0}.layout-info-left-right .text-detail .text{padding:0;margin:0;font-size:1.25rem}.layout-info-left-right{max-width:24.625rem;width:100%;margin:0 auto}.layout-info-left-part,.layout-info-right-part{margin-top:30px}.layout-info-left-part:first-child,.layout-info-right-part:nth-child(2){margin-top:0}.text-list .text-list-item{display:flex;justify-content:space-between;align-items:center;font-size:1rem;padding:10px 10px 10px 20px;border-bottom:1px solid #ececec}.text-list .text-list-item .text-left{font-weight:700;color:#414141;display:flex;flex-grow:0;flex-shrink:0}.text-list .text-list-item .text-right{display:flex;flex-grow:0;flex-shrink:0;color:#767676}@media screen and (min-width:1024px){:host ::ng-deep app-ui-modal-style-text1 .modal-component-block .modal-all-block .modal-block{padding-bottom:30px}}.layout-full-page{background-color:#f5f5f5;box-sizing:border-box;padding:40px 50px calc(100px + 55px);overflow-x:hidden;overflow-y:auto;height:100vh}@media (max-width:767px){.layout-full-page{padding-top:30px;padding-left:5px;padding-right:5px}}.layout-setting .select-item-block{max-width:8.875rem;width:100%;display:inline-block}.layout-setting .card-info-block{box-sizing:border-box;margin-bottom:50px;display:block}.layout-setting .card-info-block .form-layout-block{display:inline-block;max-width:100%;width:100%}.layout-setting ::ng-deep .card-info-block .card-content-btn.noPadding{padding:30px 10px}.layout-setting ::ng-deep .card-info-block .ui-link-block .link-text{white-space:nowrap}.layout-setting ::ng-deep .card-collapse-block .text-block{overflow:hidden}.layout-setting ::ng-deep .card-collapse-block .card-content-btn.noPadding{padding:30px 0 0}.layout-setting ::ng-deep .card-collapse-block.closed .text-block *{pointer-events:none}.layout-setting ::ng-deep .link-detail .img-block{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.layout-setting ::ng-deep .ui-link-block .img-block img{padding:0}.layout-setting .collapse-btn{border-top:1px solid #c2c2c2;text-align:center;transition:.8s;position:relative;z-index:2;padding:0 10px}.layout-setting .collapse-btn img{width:24px;margin:0 auto}.layout-setting .collapse-btn.open img{margin-top:2px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.layout-setting .card-collapse-block{margin-top:40px;display:block}.layout-setting .card-collapse-block .title-block{display:block;text-align:center;padding:0 10px 15px}.layout-setting .card-collapse-block .title-block .title{font-size:1.25rem;font-weight:700;color:#414141;margin:0;padding:0}.layout-setting .card-collapse-block .text-block{max-width:550px;width:100%;margin:0 auto;padding:0 10px}.layout-setting .card-collapse-block ::ng-deep .link-text-block{display:block;margin-bottom:20px}.layout-setting .card-collapse-block ::ng-deep .link-text-block+.link-text-block{padding-top:5px}.layout-setting .card-collapse-block ::ng-deep .link-text-block .ui-link-block{justify-content:flex-start}.layout-setting .card-collapse-block ::ng-deep .link-text-block .ui-link-block .img-block img{padding:0}.layout-setting .card-collapse-block ::ng-deep .link-text-block .ui-link-block .link-text{text-overflow:ellipsis;max-width:490px;overflow:hidden;white-space:nowrap;width:100%;display:block;text-align:left}.layout-setting .contact-block{position:relative;padding-top:88px;text-align:center}.layout-setting .contact-block .img-text-block{position:absolute;top:0;margin:0 auto;left:0;right:0}.layout-setting .contact-block .img-text-block .img-block{max-width:162px;width:100%;display:inline-block}.layout-setting .contact-block .img-text-block .img-block img{max-width:100%;width:100%}.layout-setting .contact-block .img-text-block .text-block{display:inline-block;padding-left:10px;position:relative;bottom:70px}.layout-setting .contact-block .img-text-block .text-block .text{font-size:.75rem;color:#414141}.layout-setting .contact-block .img-text-block .text-block .text+.text{margin-left:10px}.layout-setting .contact-block .contact-text-block{background-color:#ececec;display:flex;align-content:center;justify-content:center;flex-wrap:wrap;padding:70px 30px 40px}.layout-setting .contact-block .contact-text-block .title{margin:0 0 30px;color:#003781;font-weight:700;width:100%;text-align:center}.layout-setting .contact-block .contact-text-block .text-block{max-width:300px;margin:0 auto;width:100%;text-align:center}.layout-setting .contact-block .contact-text-block .link-text-block{display:block}.layout-setting .contact-block .contact-text-block .link-text-block+.link-text-block{margin-top:20px}.layout-setting .contact-block .contact-text-block ::ng-deep .link-text-block .ui-link-block{justify-content:left}.layout-setting .contact-block .contact-text-block ::ng-deep .link-text-block .ui-link-block.type-img-front .img-block{margin-right:12px}@media screen and (min-width:1025px){.layout-info-left-right{max-width:39.4vw}.layout-setting .card-collapse-block .text-block{max-width:55vw}.layout-setting .card-collapse-block ::ng-deep .link-text-block .ui-link-block .link-text{max-width:49vw}.layout-setting .contact-block{padding-top:9vw}.layout-setting .contact-block .img-text-block .img-block{max-width:16.2vw}.layout-setting .contact-block .contact-text-block{padding-top:7.8vw}}@media (max-width:1023px){.layout-full-page{height:100%}.layout-setting .card-collapse-block ::ng-deep .link-text-block .ui-link-block .link-text{max-width:300px}.layout-setting .contact-block .contact-text-block{padding:40px 20px}.layout-setting .contact-block .contact-text-block .title{padding-top:30px}}@media (max-width:374px){.layout-setting .card-collapse-block ::ng-deep .link-text-block .ui-link-block .link-text{max-width:270px}.layout-setting .contact-block .contact-text-block{padding:40px 16px}}@media (max-width:320px){.layout-setting .contact-block .contact-text-block .title{font-size:1.25rem}}"]
                }] }
    ];
    SettingComponent.ctorParameters = function () { return [
        { type: TranslateService },
        { type: DeviceService },
        { type: SettingService },
        { type: SettingComponentService },
        { type: ChangeDetectorRef },
        { type: ProfileCodeService },
        { type: DefaultMetaParser },
        { type: APIExecutor },
        { type: MetaService },
        { type: DaoFactory },
        { type: NotificationUtils },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [settingMetaControllerToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FontSizeAccessToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [changeFontSizeToken,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
    ]; };
    return SettingComponent;
}(FormMetaComponent));
export { SettingComponent };
if (false) {
    /** @type {?} */
    SettingComponent.prototype.isPopupSeeDetailOpen;
    /** @type {?} */
    SettingComponent.prototype.isPopupOpenChangeLang;
    /** @type {?} */
    SettingComponent.prototype.isPopupOpenChangeFontSize;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.isCollapseShow;
    /** @type {?} */
    SettingComponent.prototype.styleCollapse;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.optionLangDefault;
    /** @type {?} */
    SettingComponent.prototype.language;
    /** @type {?} */
    SettingComponent.prototype.appVersion;
    /** @type {?} */
    SettingComponent.prototype.updateTimeList;
    /** @type {?} */
    SettingComponent.prototype.languageAlert;
    /** @type {?} */
    SettingComponent.prototype.fontSizeAlert;
    /** @type {?} */
    SettingComponent.prototype.isDebug;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.optionFontSizeDefault;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.fontSizeSetting;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.settingService;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.settingComponentService;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.changeDetector;
    /**
     * @type {?}
     * @protected
     */
    SettingComponent.prototype.profileCodeService;
    /**
     * @type {?}
     * @protected
     */
    SettingComponent.prototype.metaService;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.daoFactory;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.notificationUtils;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.metaController;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.fontSizeAccess;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.changeFontSize;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9zZXR0aW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQW1DLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFlLFFBQVEsRUFBZ0IsYUFBYSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBOEIsV0FBVyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaFgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJN0Q7SUFTc0MsNENBQWlCO0lBRXJELDBCQUNVLGdCQUFrQyxFQUNsQyxhQUE0QixFQUM1QixjQUE4QixFQUM5Qix1QkFBZ0QsRUFDaEQsY0FBaUMsRUFDL0Isa0JBQXNDLEVBQ2hELFVBQTZCLEVBQzdCLFlBQXlCLEVBQ2YsV0FBd0IsRUFDMUIsVUFBc0IsRUFDdEIsaUJBQW9DLEVBQ1ksY0FBOEIsRUFDckMsY0FBK0IsRUFDL0IsY0FBOEIsRUFDbEQsVUFBZTtRQWY5QyxZQWtCRSxrQkFBTSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFlB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OztJQUNoQyxpREFBNEM7Ozs7O0lBQzVDLDJDQUF1Qzs7Ozs7SUFyQ3JDLDRDQUEwQzs7Ozs7SUFDMUMseUNBQW9DOzs7OztJQUNwQywwQ0FBc0M7Ozs7O0lBQ3RDLG1EQUF3RDs7Ozs7SUFDeEQsMENBQXlDOzs7OztJQUN6Qyw4Q0FBZ0Q7Ozs7O0lBR2hELHVDQUFrQzs7Ozs7SUFDbEMsc0NBQThCOzs7OztJQUM5Qiw2Q0FBNEM7Ozs7O0lBQzVDLDBDQUFzRjs7Ozs7SUFDdEYsMENBQWdGOzs7OztJQUNoRiwwQ0FBK0U7Ozs7O0lBQy9FLHNDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgT3B0aW9uYWwsIEluamVjdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNoYW5nZUZvbnRTaXplLCBJRm9udFNpemVBY2Nlc3MsIGNoYW5nZUZvbnRTaXplVG9rZW4sIEZvbnRTaXplQWNjZXNzVG9rZW4sIFByb2ZpbGVDb2RlU2VydmljZSwgUHJvZmlsZUNvZGUsIExhbmd1YWdlLCBMYW5ndWFnZUNvZGUsIERldmljZVNlcnZpY2UsIFRyYW5zbGF0ZVNlcnZpY2UsIFNlbGVjdE9wdGlvbiwgTWV0YVNlcnZpY2UsIFNldHRpbmdTZXJ2aWNlLCBGb3JtTWV0YUNvbXBvbmVudCwgRGVmYXVsdE1ldGFQYXJzZXIsIEFQSUV4ZWN1dG9yLCBNZXRhQ29udHJvbGxlciwgTWV0YUNvbHVtbiwgQ29uZmlnVG9rZW4sIERhb0ZhY3RvcnksIFNRTENvbW1hbmQsIEFQUEVycm9yIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBTZXR0aW5nQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2Uvc2V0dGluZy1zZXJ2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgYW5pbWF0aW9uQ29sbGFwc2UgfSBmcm9tICdAYWxsaWFuelNORC91aSc7XG5pbXBvcnQgeyBzZXR0aW5nTWV0YUNvbnRyb2xsZXJUb2tlbiB9IGZyb20gJy4uLy4uL2luamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25VdGlscyB9IGZyb20gJ0BhbGxpYW56U05EL25vdGlmaWNhdGlvbic7XG4vLyBpbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xuZGVjbGFyZSB2YXIgY29yZG92YTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNldHRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NldHRpbmcuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIGFuaW1hdGlvbkNvbGxhcHNlXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdDb21wb25lbnQgZXh0ZW5kcyBGb3JtTWV0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdTZXJ2aWNlOiBTZXR0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdDb21wb25lbnRTZXJ2aWNlOiBTZXR0aW5nQ29tcG9uZW50U2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcm90ZWN0ZWQgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2UsXG4gICAgbWV0YVBhcnNlcjogRGVmYXVsdE1ldGFQYXJzZXIsXG4gICAgbWV0YUV4ZWN1dG9yOiBBUElFeGVjdXRvcixcbiAgICBwcm90ZWN0ZWQgbWV0YVNlcnZpY2U6IE1ldGFTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSxcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvblV0aWxzOiBOb3RpZmljYXRpb25VdGlscyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KHNldHRpbmdNZXRhQ29udHJvbGxlclRva2VuKSBwcml2YXRlIG1ldGFDb250cm9sbGVyOiBNZXRhQ29udHJvbGxlcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEZvbnRTaXplQWNjZXNzVG9rZW4pIHByaXZhdGUgZm9udFNpemVBY2Nlc3M6IElGb250U2l6ZUFjY2VzcyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGNoYW5nZUZvbnRTaXplVG9rZW4pIHByaXZhdGUgY2hhbmdlRm9udFNpemU6IGNoYW5nZUZvbnRTaXplLFxuICAgIEBJbmplY3QoQ29uZmlnVG9rZW4pIHByaXZhdGUgQVBQX0NPTkZJRzogYW55LFxuICApIHtcblxuICAgIHN1cGVyKG1ldGFTZXJ2aWNlLCBwcm9maWxlQ29kZVNlcnZpY2UsIG1ldGFQYXJzZXIsIG1ldGFFeGVjdXRvcik7XG4gIH1cblxuICAvL3BvcHVwIHNob3cgXG4gIHB1YmxpYyBpc1BvcHVwU2VlRGV0YWlsT3BlbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNQb3B1cE9wZW5DaGFuZ2VMYW5nID0gZmFsc2U7XG4gIHB1YmxpYyBpc1BvcHVwT3BlbkNoYW5nZUZvbnRTaXplID0gZmFsc2U7XG4gIC8vY29sbGFwc2Ugb3BlbiBvciBub3RcbiAgcHJpdmF0ZSBpc0NvbGxhcHNlU2hvdyA9IGZhbHNlO1xuICAvL3N0eWxlIG9mIGNvbGxhcHNlIGFyZWFcbiAgcHVibGljIHN0eWxlQ29sbGFwc2U6IHN0cmluZztcbiAgLy8gbGFuZyBkZWZhdWx0IG9wdGlvblxuICBwcml2YXRlIG9wdGlvbkxhbmdEZWZhdWx0ID0gJ0VuZ2xpc2gnO1xuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHB1YmxpYyBhcHBWZXJzaW9uOiBzdHJpbmc7XG4gIHB1YmxpYyB1cGRhdGVUaW1lTGlzdCA9IFtdO1xuICBwdWJsaWMgbGFuZ3VhZ2VBbGVydDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBmb250U2l6ZUFsZXJ0OiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBvcHRpb25Gb250U2l6ZURlZmF1bHQ6IHN0cmluZyA9ICcxJztcbiAgcHJpdmF0ZSBmb250U2l6ZVNldHRpbmc6IHN0cmluZyA9ICdzbSc7XG5cbiAgZ2V0IHJvd0NvbmZpZygpOiBNZXRhQ29sdW1uW11bXSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YUNvbmZpZy5Sb3dzO1xuICB9XG5cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXREZWJ1Z01vZGUoKS5zdWJzY3JpYmUoZGVidWcgPT4ge1xuICAgICAgdGhpcy5pc0RlYnVnID0gZGVidWc7XG4gICAgfSlcblxuICAgIHRoaXMuc3R5bGVDb2xsYXBzZSA9IHRoaXMuaXNDb2xsYXBzZVNob3cgPyAnb3BlbicgOiAnY2xvc2VkJztcblxuICAgIHRoaXMuZGV2aWNlU2VydmljZS5nZXRBcHBWZXJzaW9uKCkudGhlbigodmVyc2lvbikgPT4ge1xuICAgICAgdGhpcy5hcHBWZXJzaW9uID0gdmVyc2lvbjtcbiAgICB9KTtcblxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRVcGRhdGVTdWJqZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIC8vdXBkYXRlIHRyYW5zbGF0ZVxuICAgICAgdGhpcy5nZXRVcGRhdGVUaW1lTGlzdCgpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGJ0bkNsaWNrKHR5cGU6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgIGlmIChpZCA9PT0gJ0xhc3RVcGRhdGVkVGltZScpXG4gICAgICB0aGlzLm9uY2xpY2tVcGRhdGVUaW1lKCk7XG5cbiAgICBpZiAodGhpcy5tZXRhQ29udHJvbGxlcilcbiAgICAgIHRoaXMubWV0YUNvbnRyb2xsZXIuYnRuQ2xpY2sodHlwZSwgaWQsIHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgb25EYXRhVXBkYXRlZCgpIHtcbiAgICBzdXBlci5vbkRhdGFVcGRhdGVkKCk7XG4gICAgdGhpcy5fZGF0YVtcIkxhbmd1YWdlT3B0aW9uXCJdID0gdGhpcy5nZXRMYW5ndWFnZUxpc3QoKTtcbiAgICB0aGlzLmZvbnRTaXplQWNjZXNzLmdldEZvbnRTaXplQ29kZSgpLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIHRoaXMuX2RhdGFbXCJGb250U2l6ZVwiXSA9IHJlc3A7XG4gICAgICB0aGlzLm9wdGlvbkZvbnRTaXplRGVmYXVsdCA9IHJlc3A7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyBEYXRhIHVwZGF0ZWQ6XCIsIHRoaXMuX2RhdGEpO1xuICAgIHRoaXMub3B0aW9uTGFuZ0RlZmF1bHQgPSB0aGlzLl9kYXRhW1wiTGFuZ3VhZ2VcIl07XG4gICAgaWYgKHRoaXMubWV0YUNvbnRyb2xsZXIpXG4gICAgICB0aGlzLm1ldGFDb250cm9sbGVyLm9uRGF0YVVwZGF0ZWQodGhpcy5fZGF0YSk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBnZXRNZXRhSUQoKSB7XG4gICAgcmV0dXJuIFwic2V0dGluZ1wiO1xuICB9XG5cbiAgZ2V0TWV0YVBhcmFtcygpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG9uVmFsaWRhdGVBbGwoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBvblZhbHVlQ2hhbmdlKGNvbHVtbjogc3RyaW5nLCB2YWx1ZTogYW55LCBncm91cElkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgVmFsdWVDaGFuZ2U6XCIsIGNvbHVtbiwgdmFsdWUsIHRoaXMuX2RhdGEpO1xuICAgIGlmIChjb2x1bW4gPT09ICdMYW5ndWFnZScpIHtcbiAgICAgIHRoaXMub25DaGFuZ2VMYW5nKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29sdW1uID09PSAnRm9udFNpemUnKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlRm9udFNpemUodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tZXRhQ29udHJvbGxlcilcbiAgICAgIHRoaXMubWV0YUNvbnRyb2xsZXIub25WYWx1ZUNoYW5nZShjb2x1bW4sIHZhbHVlLCBncm91cElkLCBpbmRleCwgdGhpcy5fZGF0YSwgdGhpcy52YWxpZGF0aW9uUmVzdWx0KTtcbiAgfVxuXG5cbiAgZ2V0TGFuZ3VhZ2VMaXN0KCkge1xuICAgIC8vIGdldCBsYW5ndWFnZVR5cGUgaW4gU1FMaXRlIGFuZCBzZXQgZGVmYXVsdCBsYW5ndWFnZVxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCkubWFwKHggPT4gbmV3IFNlbGVjdE9wdGlvbih4LmdldExhbmd1YWdlSUQsIHguZ2V0TmFtZSkpO1xuICB9XG5cbiAgb25jbGlja1VwZGF0ZVRpbWUoKSB7XG4gICAgY29uc29sZS5sb2coJ2luIG9uIGNsaWNrIHVwZGF0ZSB0aW1lJyk7XG4gICAgdGhpcy5pc1BvcHVwU2VlRGV0YWlsT3BlbiA9ICF0aGlzLmlzUG9wdXBTZWVEZXRhaWxPcGVuO1xuICB9XG5cbiAgLy9jbGljayBjb2xscGFzZSBjYXJkXG4gIHRvZ2dsZUNvbGxhcHNlKCkge1xuICAgIHRoaXMuaXNDb2xsYXBzZVNob3cgPSAhdGhpcy5pc0NvbGxhcHNlU2hvdztcbiAgICB0aGlzLnN0eWxlQ29sbGFwc2UgPSB0aGlzLmlzQ29sbGFwc2VTaG93ID8gJ29wZW4nIDogJ2Nsb3NlZCc7XG4gIH1cblxuICAvL2NsaWNrIHRvIHNlbmQgZW1haWxcbiAgb25NYWlsVG9DbGljayhlbWFpbEFkZHJlc3M6IHN0cmluZykge1xuICAgIHdpbmRvdy5vcGVuKCdtYWlsdG86JyArIGVtYWlsQWRkcmVzcyArICc/c3ViamVjdD3lronoga/muKzoqaYnLCAnX3N5c3RlbScpO1xuICB9XG5cbiAgLy9jbGljayB0byBvcGVuIHBkZlxuICBvblBkZkNsaWNrKHBkZlVybDogc3RyaW5nKSB7XG4gICAgLy8gY29yZG92YS5wbHVnaW5zLlNpdGV3YWVydHNEb2N1bWVudFZpZXdlci52aWV3RG9jdW1lbnQoY29yZG92YS5maWxlLmFwcGxpY2F0aW9uRGlyZWN0b3J5ICsgcGRmVXJsLCAnYXBwbGljYXRpb24vcGRmJywge30pXG4gICAgaWYgKHRoaXMuZGV2aWNlU2VydmljZS5nZXREZXZpY2VQbGF0Zm9ybSgpID09ICdpT1MnKSB7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuZmlsZU9wZW5lcjIub3BlbihcbiAgICAgICAgKGNvcmRvdmEuZmlsZS5hcHBsaWNhdGlvbkRpcmVjdG9yeSArIHBkZlVybCksXG4gICAgICAgICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgICAgICB7XG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igc3RhdHVzOiAnICsgZS5zdGF0dXMgKyAnIC0gRXJyb3IgbWVzc2FnZTogJyArIGUubWVzc2FnZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAoPGFueT53aW5kb3cpLnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwoY29yZG92YS5maWxlLmFwcGxpY2F0aW9uRGlyZWN0b3J5ICsgcGRmVXJsLCBmdW5jdGlvbiAoZmlsZUVudHJ5KSB7XG5cbiAgICAgICAgKDxhbnk+d2luZG93KS5yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKGNvcmRvdmEuZmlsZS5leHRlcm5hbERhdGFEaXJlY3RvcnksIGZ1bmN0aW9uIChkaXJFbnRyeSkge1xuXG4gICAgICAgICAgZmlsZUVudHJ5LmNvcHlUbyhkaXJFbnRyeSwgJ2RhdGUucGRmJywgZnVuY3Rpb24gKG5ld0ZpbGVFbnRyeSkge1xuXG4gICAgICAgICAgICBjb3Jkb3ZhLnBsdWdpbnMuZmlsZU9wZW5lcjIub3BlbihuZXdGaWxlRW50cnkubmF0aXZlVVJMLCAnYXBwbGljYXRpb24vcGRmJywge1xuICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igc3RhdHVzOiAnICsgZS5zdGF0dXMgKyAnIC0gRXJyb3IgbWVzc2FnZTogJyArIGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vY2hlY2sgaWYgc2VsZWN0IGxhbmd1YWdlIHdoaWNoIGRpZmZlcmVudCBmcm9tIGRlZmF1bHQgbGFuZ3VhZ2VcbiAgb25DaGFuZ2VMYW5nKG9wdGlvbikge1xuICAgIGlmIChvcHRpb24gIT0gdGhpcy5vcHRpb25MYW5nRGVmYXVsdCkge1xuICAgICAgdGhpcy5sYW5ndWFnZUFsZXJ0ID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSgnTGFuZ3VhZ2VfQWxlcnQnKTtcbiAgICAgIC8vIGlmIChvcHRpb24gPT0gJ2VuJylcbiAgICAgIC8vICAgdGhpcy5sYW5ndWFnZUFsZXJ0ID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSgnRW5nbGlzaF9BbGVydCcpO1xuICAgICAgLy8gaWYgKG9wdGlvbiA9PSAnemhfVFcnKVxuICAgICAgLy8gICB0aGlzLmxhbmd1YWdlQWxlcnQgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKCdNYW5kYXJpbl9BbGVydCcpO1xuICAgICAgdGhpcy5pc1BvcHVwT3BlbkNoYW5nZUxhbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlRm9udFNpemUob3B0aW9uKSB7XG4gICAgaWYgKG9wdGlvbiAhPSB0aGlzLm9wdGlvbkZvbnRTaXplRGVmYXVsdCkge1xuICAgICAgc3dpdGNoIChvcHRpb24pIHtcbiAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgLy8gdGhpcy5mb250U2l6ZUFsZXJ0ID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSgnU21hbGxfQWxlcnQnKTtcbiAgICAgICAgICB0aGlzLmZvbnRTaXplU2V0dGluZyA9ICdzbSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgIC8vIHRoaXMuZm9udFNpemVBbGVydCA9IHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGUoJ01lZGl1bV9BbGVydCcpO1xuICAgICAgICAgIHRoaXMuZm9udFNpemVTZXR0aW5nID0gJ21kJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgLy8gdGhpcy5mb250U2l6ZUFsZXJ0ID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSgnTGFyZ2VfQWxlcnQnKTtcbiAgICAgICAgICB0aGlzLmZvbnRTaXplU2V0dGluZyA9ICdsZyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLmZvbnRTaXplQWxlcnQgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKCdGb250X1NpemVfQWxlcnQnKTtcbiAgICAgIHRoaXMuaXNQb3B1cE9wZW5DaGFuZ2VGb250U2l6ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gbGFuZyBjaGFuZ2UgcG9wdXBcbiAgb25MYW5ndWFnZUFsZXJ0Q2FuY2VsKCkge1xuICAgIHRoaXMuX2RhdGFbXCJMYW5ndWFnZVwiXSA9IHRoaXMub3B0aW9uTGFuZ0RlZmF1bHQ7XG4gIH1cblxuXG4gIC8vIGNvbmZpcm0gdG8gY2hhbmdlIGxhbmd1YWdlXG4gIG9uTGFuZ3VhZ2VBbGVydENvbmZpcm0oKSB7XG4gICAgdGhpcy51cGRhdGVMYW5ndWFnZSh0aGlzLl9kYXRhW1wiTGFuZ3VhZ2VcIl0pO1xuICAgIHRoaXMub3B0aW9uTGFuZ0RlZmF1bHQgPSB0aGlzLl9kYXRhW1wiTGFuZ3VhZ2VcIl07XG4gIH1cblxuICAvLyBsYW5nIGNoYW5nZSBwb3B1cFxuICBvbkZvbnRTaXplQWxlcnRDYW5jZWwoKSB7XG4gICAgdGhpcy5fZGF0YVtcIkZvbnRTaXplXCJdID0gdGhpcy5vcHRpb25Gb250U2l6ZURlZmF1bHQ7XG4gIH1cblxuICAvLyBjb25maXJtIHRvIGNoYW5nZSBsYW5ndWFnZVxuICBvbkZvbnRTaXplQWxlcnRDb25maXJtKCkge1xuICAgIHRoaXMudXBkYXRlRm9udFNpemUoKTtcbiAgICB0aGlzLm9wdGlvbkZvbnRTaXplRGVmYXVsdCA9IHRoaXMuX2RhdGFbXCJGb250U2l6ZVwiXTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSBsYW5ndWFnZVxuICB1cGRhdGVMYW5ndWFnZShvcHRpb24pIHtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXBkYXRlTGFuZ3VhZ2Uob3B0aW9uKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG5cbiAgICAgIGlmIChkYXRhWydIZWFkZXInXS5zdGF0dXMpIHtcbiAgICAgICAgdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuX2ZldGNoQ29kZURhdGEoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVGb250U2l6ZU9wdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy5kZXZpY2VTZXJ2aWNlLnJlc3RhcnRBcHAoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUZvbnRTaXplKCkge1xuICAgIGlmICh0aGlzLmNoYW5nZUZvbnRTaXplKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFuZ2VGb250U2l6ZS51cGRhdGVGb250U2l6ZSh0aGlzLmZvbnRTaXplU2V0dGluZyk7XG4gICAgfVxuICB9XG5cbiAgLy8gbG9hZCB1cGRhdGVUaW1lXG4gIGdldFVwZGF0ZVRpbWVMaXN0KCkge1xuICAgIHRoaXMuc2V0dGluZ0NvbXBvbmVudFNlcnZpY2UuZ2V0VXBkYXRlVGltZUxpc3QoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oJ2dldFVwZGF0ZVRpbWVMaXN0JywgZGF0YSk7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWVMaXN0ID0gZGF0YS5tYXAoeCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgRnVuY0lEOiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKHguTWFpbkZ1bmMpLFxuICAgICAgICAgIEJhY2tlbmRUaW1lOiBuZXcgRGF0ZSh4LkJhY2tlbmRUaW1lKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUZvbnRTaXplT3B0aW9uKCkge1xuICAgIHRoaXMuX2RhdGFbXCJGb250U2l6ZU9wdGlvblwiXSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheShcIkZvbnRfU2l6ZVwiKVxuICAgICAgLm1hcCh4ID0+IG5ldyBTZWxlY3RPcHRpb24oeC5nZXRDb2RlKCksIHguZGlzcGxheVRleHQpKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNoYW5nZURlYnVnTW9kZSh2YWwpIHtcbiAgICBjb25zb2xlLmxvZyhcImNoYW5nZURlYnVnTW9kZTpcIiwgdmFsKTtcbiAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLnNldERlYnVnTW9kZSh2YWwpO1xuICB9XG5cbiAgYXN5bmMgb25DbGlja0NsZWFuRGV2aWNlQnRuKCkge1xuICAgIGxldCBjb25maXJtUmVzdWx0ID0gY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byB1bmJpbmQgZGV2aWNlIChjYW4gTk9UIHVuZG8pID8gXCIpO1xuICAgIGlmIChjb25maXJtUmVzdWx0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5ub3RpZmljYXRpb25VdGlscy5jaGVja05ldHdvcmtCZWZvcmVBY3Rpb24oKSkge1xuICAgICAgICAgIC8vIG9ubGluZSBcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJkbyBkZXZpY2VTZXJ2aWNlLnVuYmluZERldmljZVwiKTtcbiAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IHRoaXMuc2V0dGluZ0NvbXBvbmVudFNlcnZpY2UudW5iaW5kRGV2aWNlKCk7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwidW5iaW5kRGV2aWNlIHJlc3A6IFwiLCByZXNwKTtcbiAgICAgICAgICBpZiAocmVzcC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9jbGVhckRldmljZURhdGEoKTtcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlU2VydmljZS5yZXN0YXJ0QXBwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgQVBQRXJyb3IoXCJGMDA5MDFcIiwgXCJ1bmJpbmREZXZpY2VBUEkgZmFpbDogXCIgKyBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfY2xlYXJEZXZpY2VEYXRhKCk6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2luaXRMb2NhbFN0b3JhZ2UoKTtcbiAgICAgIGxldCBlbnYgPSB0aGlzLkFQUF9DT05GSUcuRU5WO1xuICAgICAgaWYgKGVudiAhPT0gJ0RFVicpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5fY2xlYXJEYXRhYmFzZSgpO1xuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEFQUEVycm9yKCdGMDA5MDInLCAnY2xlYXJTcWxpdGVEQiBmYWlsOiAnICsgZXJyb3IpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfY2xlYXJEYXRhYmFzZSgpOiBQcm9taXNlPGFueT4ge1xuXG4gICAgbGV0IGVudiA9IHRoaXMuQVBQX0NPTkZJRy5FTlY7XG4gICAgbGV0IGRiX2NvbmZpZyA9IHRoaXMuQVBQX0NPTkZJR1tlbnZdLkRBVEFCQVNFO1xuICAgIGxldCBkYl9uYW1lcyA9IE9iamVjdC5rZXlzKGRiX2NvbmZpZyk7XG4gICAgZm9yICh2YXIgbmFtZSBvZiBkYl9uYW1lcykge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2RiX25hbWVzIGJlIGRlbGV0ZTonLCBuYW1lKTtcbiAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGFvKG5hbWUpO1xuXG4gICAgICBsZXQgcmV0dXJuTWFwID0gYXdhaXQgZGFvLmdldFNjaGVtYSgpLnRvUHJvbWlzZSgpO1xuXG4gICAgICBsZXQgU3FsQ29tbWFuZEFycmF5ID0gW107XG5cbiAgICAgIHJldHVybk1hcC5mb3JFYWNoKHZhbHVlID0+IHtcblxuICAgICAgICBsZXQgY29tbWFuZDogc3RyaW5nID0gdmFsdWUudGFibGVOYW1lLmluY2x1ZGVzKCdUV19MSF9TRF9WV18nKSA/ICdEUk9QIFZJRVcgSUYgRVhJU1RTICcgOiAnRFJPUCBUQUJMRSBJRiBFWElTVFMgJztcbiAgICAgICAgU3FsQ29tbWFuZEFycmF5LnB1c2gobmV3IFNRTENvbW1hbmQoY29tbWFuZCArIHZhbHVlLnRhYmxlTmFtZSwgW10pKTtcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCBkYW8uZXhjdXRlU3FsQ29tbWFuZChTcWxDb21tYW5kQXJyYXkpLnRvUHJvbWlzZSgpO1xuXG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIF9pbml0TG9jYWxTdG9yYWdlKCkge1xuICAgIGxldCBNYWluREJLZXkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01haW4nKTtcbiAgICBsZXQgUHJvZmlsZURCS2V5ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9maWxlJyk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTWFpbicsIE1haW5EQktleSk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdQcm9maWxlJywgUHJvZmlsZURCS2V5KTtcbiAgfVxuXG5cbiAgLy8gc3RhcnQgb2YgdXBsb2FkIGxhbmd1YWdlXG4gIC8vIHByaXZhdGUgcmVhZG9ubHkgc3RvcmFnZUtleU5hbWU6IHN0cmluZyA9ICdMYW5ndWFnZUpTT04nO1xuICAvLyBwcml2YXRlIGpzb25UZXh0OiBzdHJpbmcgPSAnJztcbiAgLy8gcHVibGljIGZpbGU6IEZpbGUgPSBudWxsOztcbiAgLy8gcHVibGljIGluY29taW5nZmlsZShldmVudCkge1xuICAvLyAgIHRoaXMuZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgLy8gfVxuICAvLyBwdWJsaWMgdXBsb2FkTGFuZ3VhZ2UoKSB7XG4gIC8vICAgaWYgKHRoaXMuZmlsZSkge1xuICAvLyAgICAgdGhpcy51cGxvYWRGaWxlKCk7XG4gIC8vICAgfVxuICAvLyAgIGVsc2Uge1xuICAvLyAgICAgYWxlcnQoJ0VtcHR5IEZpbGUuJyk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIHB1YmxpYyByZXNldExhbmd1YWdlKCkge1xuICAvLyAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLnN0b3JhZ2VLZXlOYW1lKTtcbiAgLy8gICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UubG9hZEpzb24oKS50aGVuKCgpID0+IHtcbiAgLy8gICAgIHRoaXMub25MYW5ndWFnZUFsZXJ0Q29uZmlybSgpO1xuICAvLyAgICAgYWxlcnQoJ3Jlc2V0IHN1Y2Nlc3MnKTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIHVwbG9hZEZpbGUoKTogUHJvbWlzZTxhbnk+IHtcblxuICAvLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgLy8gICAgIGxldCB3b3JrQm9vayA9IG51bGw7XG4gIC8vICAgICBsZXQganNvbkRhdGE6IEFycmF5PGFueT4gPSBbXTtcbiAgLy8gICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIC8vICAgICAvLyBjb25zdCBmaWxlID0gZXYudGFyZ2V0LmZpbGVzWzBdO1xuICAvLyAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCkgPT4ge1xuICAvLyAgICAgICBjb25zdCBkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgLy8gICAgICAgdHJ5IHtcbiAgLy8gICAgICAgICB3b3JrQm9vayA9IFhMU1gucmVhZChkYXRhLCB7IHR5cGU6ICdiaW5hcnknIH0pO1xuICAvLyAgICAgICAgIC8vIGNvbnNvbGUud2Fybignd29ya0Jvb2suU2hlZXROYW1lczogJyx3b3JrQm9vay5TaGVldE5hbWVzKTtcblxuICAvLyAgICAgICAgICg8QXJyYXk8c3RyaW5nPj53b3JrQm9vay5TaGVldE5hbWVzKS5mb3JFYWNoKHNoZWV0TmFtZSA9PiB7XG4gIC8vICAgICAgICAgICBsZXQgdGFyZ2V0U2hlZXQgPSB3b3JrQm9vay5TaGVldHNbc2hlZXROYW1lXTtcbiAgLy8gICAgICAgICAgIC8vIGNvbnNvbGUud2FybihzaGVldE5hbWUsICcgJywgWExTWC51dGlscy5zaGVldF90b19qc29uKHRhcmdldFNoZWV0LCB7IGhlYWRlcjogMSB9KSlcbiAgLy8gICAgICAgICAgIGpzb25EYXRhID0gWy4uLmpzb25EYXRhLCBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24odGFyZ2V0U2hlZXQsIHsgaGVhZGVyOiAxIH0pXTtcbiAgLy8gICAgICAgICB9KVxuICAvLyAgICAgICAgIC8vIGxldCB0YXJnZXRTaGVldCA9IHdvcmtCb29rLlNoZWV0c1t3b3JrQm9vay5TaGVldE5hbWVzWzBdXTtcblxuICAvLyAgICAgICAgIC8vIGpzb25EYXRhID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHRhcmdldFNoZWV0LCB7IGhlYWRlcjogMSB9KTtcbiAgLy8gICAgICAgICBqc29uRGF0YSA9IFtdLmNvbmNhdC5hcHBseShbXSwganNvbkRhdGEpXG4gIC8vICAgICAgICAgY29uc29sZS53YXJuKFwianNvbiBkYXRhOiBcIiwganNvbkRhdGEpO1xuICAvLyAgICAgICAgIHRoaXMuanNvblRleHQgPSB0aGlzLl9wYXJzZVNoZWV0SnNvblRvTGFuZ3VhZ2UoanNvbkRhdGEpO1xuICAvLyAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXlOYW1lLCB0aGlzLmpzb25UZXh0KTtcbiAgLy8gICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UubG9hZEpzb24oKS50aGVuKCgpID0+IHtcbiAgLy8gICAgICAgICAgIC8vIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAvLyAgICAgICAgICAgdGhpcy5vbkxhbmd1YWdlQWxlcnRDb25maXJtKCk7XG4gIC8vICAgICAgICAgICBhbGVydCgnVXBsb2FkIFN1Y2Nlc3MuJyk7XG4gIC8vICAgICAgICAgICByZXMoKTtcbiAgLy8gICAgICAgICB9KTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgLy8gICAgICAgICBhbGVydCgnVXBsb2FkIEZhaWwuJyk7XG4gIC8vICAgICAgICAgcmVqKCk7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgfVxuICAvLyAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyh0aGlzLmZpbGUpO1xuICAvLyAgIH0pXG5cbiAgLy8gfVxuXG5cbiAgLy8gcHJpdmF0ZSBfcGFyc2VTaGVldEpzb25Ub0xhbmd1YWdlKGpzb246IEFycmF5PGFueT4pOiBzdHJpbmcge1xuICAvLyAgIGxldCB0YXJnZXRMYW5ndWFnZTogQXJyYXk8c3RyaW5nPiA9IFsnemhfVFcnLCAnVEgnLCAnZW4nXTtcbiAgLy8gICBsZXQgbGFuZ3VhZ2VPYmogPSB7fTtcblxuICAvLyAgICg8QXJyYXk8YW55Pj5qc29uKS5mb3JFYWNoKGNvbCA9PiB7XG4gIC8vICAgICBsZXQgbGFuZ3VhZ2VUeXBlOiBzdHJpbmcgPSBjb2xbMF07XG4gIC8vICAgICBpZiAobGFuZ3VhZ2VUeXBlICYmIHRhcmdldExhbmd1YWdlLnJlZHVjZSgodG90YWwsIGVhY2gpID0+IHRvdGFsIHx8IGVhY2ggPT09IGxhbmd1YWdlVHlwZSwgZmFsc2UpKSB7XG4gIC8vICAgICAgIGxldCBtYXBwaW5nSUQ6IHN0cmluZyA9IGNvbFsxXTtcbiAgLy8gICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBjb2xbMl0gPyBjb2xbMl0gOiAnJztcbiAgLy8gICAgICAgaWYgKCFsYW5ndWFnZU9ialtsYW5ndWFnZVR5cGVdKSB7XG4gIC8vICAgICAgICAgbGFuZ3VhZ2VPYmpbbGFuZ3VhZ2VUeXBlXSA9IHt9O1xuICAvLyAgICAgICB9XG4gIC8vICAgICAgIGxhbmd1YWdlT2JqW2xhbmd1YWdlVHlwZV1bbWFwcGluZ0lEXSA9IHZhbHVlO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuXG4gIC8vICAgLy8gY29uc29sZS53YXJuKGxhbmd1YWdlT2JqKVxuICAvLyAgIHJldHVybiBKU09OLnN0cmluZ2lmeShsYW5ndWFnZU9iaiwgbnVsbCwgXCJcXHRcIik7XG5cbiAgLy8gfVxuICAvLyBlbmQgb2YgdXBsb2FkIGxhbmd1YWdlXG5cbn1cbiJdfQ==