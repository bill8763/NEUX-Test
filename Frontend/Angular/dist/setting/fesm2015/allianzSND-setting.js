import { Observable } from 'rxjs';
import { __awaiter } from 'tslib';
import { NotificationUtils } from '@allianzSND/notification';
import { Injectable, NgModule, InjectionToken, defineInjectable, inject, Component, ChangeDetectionStrategy, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIDispatch, APIFactory, DeviceService, CoreModule, FormMetaComponent, Language, SelectOption, APPError, SQLCommand, TranslateService, SettingService, ProfileCodeService, DefaultMetaParser, APIExecutor, MetaService, DaoFactory, FontSizeAccessToken, changeFontSizeToken, ConfigToken } from '@allianzSND/core';
import { animationCollapse, UIModule } from '@allianzSND/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingComponentService {
    /**
     * @param {?} dispatcher
     * @param {?} APIFactory
     * @param {?} deviceService
     */
    constructor(dispatcher, APIFactory$$1, deviceService) {
        this.dispatcher = dispatcher;
        this.APIFactory = APIFactory$$1;
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
        return __awaiter(this, void 0, void 0, function* () {
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
/** @nocollapse */ SettingComponentService.ngInjectableDef = defineInjectable({ factory: function SettingComponentService_Factory() { return new SettingComponentService(inject(APIDispatch), inject(APIFactory), inject(DeviceService)); }, token: SettingComponentService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const settingMetaControllerToken = new InjectionToken("customerContactDetailMetaController");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingComponent extends FormMetaComponent {
    /**
     * @param {?} translateService
     * @param {?} deviceService
     * @param {?} settingService
     * @param {?} settingComponentService
     * @param {?} changeDetector
     * @param {?} profileCodeService
     * @param {?} metaParser
     * @param {?} metaExecutor
     * @param {?} metaService
     * @param {?} daoFactory
     * @param {?} notificationUtils
     * @param {?} metaController
     * @param {?} fontSizeAccess
     * @param {?} changeFontSize
     * @param {?} APP_CONFIG
     */
    constructor(translateService, deviceService, settingService, settingComponentService, changeDetector, profileCodeService, metaParser, metaExecutor, metaService, daoFactory, notificationUtils, metaController, fontSizeAccess, changeFontSize, APP_CONFIG) {
        super(metaService, profileCodeService, metaParser, metaExecutor);
        this.translateService = translateService;
        this.deviceService = deviceService;
        this.settingService = settingService;
        this.settingComponentService = settingComponentService;
        this.changeDetector = changeDetector;
        this.profileCodeService = profileCodeService;
        this.metaService = metaService;
        this.daoFactory = daoFactory;
        this.notificationUtils = notificationUtils;
        this.metaController = metaController;
        this.fontSizeAccess = fontSizeAccess;
        this.changeFontSize = changeFontSize;
        this.APP_CONFIG = APP_CONFIG;
        //popup show 
        this.isPopupSeeDetailOpen = false;
        this.isPopupOpenChangeLang = false;
        this.isPopupOpenChangeFontSize = false;
        //collapse open or not
        this.isCollapseShow = false;
        // lang default option
        this.optionLangDefault = 'English';
        this.language = new Language();
        this.updateTimeList = [];
        this.languageAlert = '';
        this.fontSizeAlert = '';
        this.isDebug = false;
        this.optionFontSizeDefault = '1';
        this.fontSizeSetting = 'sm';
    }
    /**
     * @return {?}
     */
    get rowConfig() {
        return this.metaConfig.Rows;
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.settingService.getDebugMode().subscribe((/**
         * @param {?} debug
         * @return {?}
         */
        debug => {
            this.isDebug = debug;
        }));
        this.styleCollapse = this.isCollapseShow ? 'open' : 'closed';
        this.deviceService.getAppVersion().then((/**
         * @param {?} version
         * @return {?}
         */
        (version) => {
            this.appVersion = version;
        }));
        this.translateService.getUpdateSubject().subscribe((/**
         * @return {?}
         */
        () => {
            //update translate
            this.getUpdateTimeList();
            this.changeDetector.detectChanges();
        }));
    }
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    btnClick(type, id) {
        if (id === 'LastUpdatedTime')
            this.onclickUpdateTime();
        if (this.metaController)
            this.metaController.btnClick(type, id, this._data);
    }
    /**
     * @return {?}
     */
    onDataUpdated() {
        super.onDataUpdated();
        this._data["LanguageOption"] = this.getLanguageList();
        this.fontSizeAccess.getFontSizeCode().toPromise().then((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => {
            this._data["FontSize"] = resp;
            this.optionFontSizeDefault = resp;
            this.changeDetector.detectChanges();
        }));
        console.log("setting Data updated:", this._data);
        this.optionLangDefault = this._data["Language"];
        if (this.metaController)
            this.metaController.onDataUpdated(this._data);
        this.changeDetector.detectChanges();
    }
    /**
     * @return {?}
     */
    getMetaID() {
        return "setting";
    }
    /**
     * @return {?}
     */
    getMetaParams() {
        return null;
    }
    /**
     * @return {?}
     */
    onValidateAll() {
        return true;
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @return {?}
     */
    onValueChange(column, value, groupId, index) {
        console.log("Setting ValueChange:", column, value, this._data);
        if (column === 'Language') {
            this.onChangeLang(value);
        }
        else if (column === 'FontSize') {
            this.onChangeFontSize(value);
        }
        if (this.metaController)
            this.metaController.onValueChange(column, value, groupId, index, this._data, this.validationResult);
    }
    /**
     * @return {?}
     */
    getLanguageList() {
        // get languageType in SQLite and set default language
        return this.translateService.getCodeArray().map((/**
         * @param {?} x
         * @return {?}
         */
        x => new SelectOption(x.getLanguageID, x.getName)));
    }
    /**
     * @return {?}
     */
    onclickUpdateTime() {
        console.log('in on click update time');
        this.isPopupSeeDetailOpen = !this.isPopupSeeDetailOpen;
    }
    //click collpase card
    /**
     * @return {?}
     */
    toggleCollapse() {
        this.isCollapseShow = !this.isCollapseShow;
        this.styleCollapse = this.isCollapseShow ? 'open' : 'closed';
    }
    //click to send email
    /**
     * @param {?} emailAddress
     * @return {?}
     */
    onMailToClick(emailAddress) {
        window.open('mailto:' + emailAddress + '?subject=安聯測試', '_system');
    }
    //click to open pdf
    /**
     * @param {?} pdfUrl
     * @return {?}
     */
    onPdfClick(pdfUrl) {
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
    }
    //check if select language which different from default language
    /**
     * @param {?} option
     * @return {?}
     */
    onChangeLang(option) {
        if (option != this.optionLangDefault) {
            this.languageAlert = this.translateService.translate('Language_Alert');
            // if (option == 'en')
            //   this.languageAlert = this.translateService.translate('English_Alert');
            // if (option == 'zh_TW')
            //   this.languageAlert = this.translateService.translate('Mandarin_Alert');
            this.isPopupOpenChangeLang = true;
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    onChangeFontSize(option) {
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
    }
    // lang change popup
    /**
     * @return {?}
     */
    onLanguageAlertCancel() {
        this._data["Language"] = this.optionLangDefault;
    }
    // confirm to change language
    /**
     * @return {?}
     */
    onLanguageAlertConfirm() {
        this.updateLanguage(this._data["Language"]);
        this.optionLangDefault = this._data["Language"];
    }
    // lang change popup
    /**
     * @return {?}
     */
    onFontSizeAlertCancel() {
        this._data["FontSize"] = this.optionFontSizeDefault;
    }
    // confirm to change language
    /**
     * @return {?}
     */
    onFontSizeAlertConfirm() {
        this.updateFontSize();
        this.optionFontSizeDefault = this._data["FontSize"];
    }
    // update language
    /**
     * @param {?} option
     * @return {?}
     */
    updateLanguage(option) {
        this.translateService.updateLanguage(option).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data['Header'].status) {
                this.profileCodeService._fetchCodeData().subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
                    this.updateFontSizeOption();
                }));
                // this.deviceService.restartApp();
            }
        }));
    }
    /**
     * @return {?}
     */
    updateFontSize() {
        if (this.changeFontSize) {
            return this.changeFontSize.updateFontSize(this.fontSizeSetting);
        }
    }
    // load updateTime
    /**
     * @return {?}
     */
    getUpdateTimeList() {
        this.settingComponentService.getUpdateTimeList().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            console.warn('getUpdateTimeList', data);
            this.updateTimeList = data.map((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                return {
                    FuncID: this.translateService.translate(x.MainFunc),
                    BackendTime: new Date(x.BackendTime)
                };
            }));
        }));
    }
    /**
     * @return {?}
     */
    updateFontSizeOption() {
        this._data["FontSizeOption"] = this.profileCodeService.getCodeArray("Font_Size")
            .map((/**
         * @param {?} x
         * @return {?}
         */
        x => new SelectOption(x.getCode(), x.displayText)));
        this.changeDetector.detectChanges();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    changeDebugMode(val) {
        console.log("changeDebugMode:", val);
        this.settingService.setDebugMode(val);
    }
    /**
     * @return {?}
     */
    onClickCleanDeviceBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let confirmResult = confirm("Are you sure you want to unbind device (can NOT undo) ? ");
            if (confirmResult) {
                try {
                    if (this.notificationUtils.checkNetworkBeforeAction()) {
                        // online 
                        console.warn("do deviceService.unbindDevice");
                        /** @type {?} */
                        let resp = yield this.settingComponentService.unbindDevice();
                        console.warn("unbindDevice resp: ", resp);
                        if (resp.success) {
                            yield this._clearDeviceData();
                            this.deviceService.restartApp();
                        }
                    }
                }
                catch (error) {
                    throw new APPError("F00901", "unbindDeviceAPI fail: " + error);
                }
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    _clearDeviceData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this._initLocalStorage();
                /** @type {?} */
                let env = this.APP_CONFIG.ENV;
                if (env !== 'DEV') {
                    yield this._clearDatabase();
                }
            }
            catch (error) {
                throw new APPError('F00902', 'clearSqliteDB fail: ' + error);
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    _clearDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let env = this.APP_CONFIG.ENV;
            /** @type {?} */
            let db_config = this.APP_CONFIG[env].DATABASE;
            /** @type {?} */
            let db_names = Object.keys(db_config);
            for (var name of db_names) {
                // console.log('db_names be delete:', name);
                /** @type {?} */
                let dao = this.daoFactory.getDao(name);
                /** @type {?} */
                let returnMap = yield dao.getSchema().toPromise();
                /** @type {?} */
                let SqlCommandArray = [];
                returnMap.forEach((/**
                 * @param {?} value
                 * @return {?}
                 */
                value => {
                    /** @type {?} */
                    let command = value.tableName.includes('TW_LH_SD_VW_') ? 'DROP VIEW IF EXISTS ' : 'DROP TABLE IF EXISTS ';
                    SqlCommandArray.push(new SQLCommand(command + value.tableName, []));
                }));
                yield dao.excuteSqlCommand(SqlCommandArray).toPromise();
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    _initLocalStorage() {
        /** @type {?} */
        let MainDBKey = window.localStorage.getItem('Main');
        /** @type {?} */
        let ProfileDBKey = window.localStorage.getItem('Profile');
        window.localStorage.clear();
        window.localStorage.setItem('Main', MainDBKey);
        window.localStorage.setItem('Profile', ProfileDBKey);
    }
}
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
SettingComponent.ctorParameters = () => [
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
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingModule {
}
SettingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                    UIModule
                ],
                declarations: [SettingComponent],
                exports: [SettingComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SettingComponentService, SettingComponent, SettingModule, settingMetaControllerToken, SettingComponent as ɵa, SettingComponentService as ɵb };

//# sourceMappingURL=allianzSND-setting.js.map