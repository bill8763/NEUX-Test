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
export class SettingComponent extends FormMetaComponent {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this._initLocalStorage();
                /** @type {?} */
                let env = this.APP_CONFIG.ENV;
                if (env !== 'DEV') {
                    yield this._clearDatabase();
                }
                ;
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9zZXR0aW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQW1DLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFlLFFBQVEsRUFBZ0IsYUFBYSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBOEIsV0FBVyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaFgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFhN0QsTUFBTSx1QkFBd0IsU0FBUSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVyRCxZQUNVLGdCQUFrQyxFQUNsQyxhQUE0QixFQUM1QixjQUE4QixFQUM5Qix1QkFBZ0QsRUFDaEQsY0FBaUMsRUFDL0Isa0JBQXNDLEVBQ2hELFVBQTZCLEVBQzdCLFlBQXlCLEVBQ2YsV0FBd0IsRUFDMUIsVUFBc0IsRUFDdEIsaUJBQW9DLEVBQ1ksY0FBOEIsRUFDckMsY0FBK0IsRUFDL0IsY0FBOEIsRUFDbEQsVUFBZTtRQUc1QyxLQUFLLENBQUMsV0FBVyxFQUFF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QUFhO1lBQStDLGNBQWM7WUFDOU0sdUJBQXVCO1lBRkosaUJBQWlCO1lBQ3VDLGtCQUFrQjtZQUFzSSxpQkFBaUI7WUFBRSxXQUFXO1lBQTlFLFdBQVc7WUFBOEcsVUFBVTtZQUl0VCxpQkFBaUI7NENBMkJyQixRQUFRLFlBQUksTUFBTSxTQUFDLDBCQUEwQjs0Q0FDN0MsUUFBUSxZQUFJLE1BQU0sU0FBQyxtQkFBbUI7NENBQ3RDLFFBQVEsWUFBSSxNQUFNLFNBQUMsbUJBQW1COzRDQUN0QyxNQUFNLFNBQUMsV0FBVzs7OztJQU9yQixnREFBb0M7O0lBQ3BDLGlEQUFxQzs7SUFDckMscURBQXlDOzs7OztJQUV6QywwQ0FBK0I7O0lBRS9CLHlDQUE2Qjs7Ozs7SUFFN0IsNkNBQXNDOztJQUN0QyxvQ0FBMkM7O0lBQzNDLHNDQUEwQjs7SUFDMUIsMENBQTJCOztJQUMzQix5Q0FBa0M7O0lBQ2xDLHlDQUFrQzs7SUFDbEMsbUNBQWdDOzs7OztJQUNoQyxpREFBNEM7Ozs7O0lBQzVDLDJDQUF1Qzs7Ozs7SUFyQ3JDLDRDQUEwQzs7Ozs7SUFDMUMseUNBQW9DOzs7OztJQUNwQywwQ0FBc0M7Ozs7O0lBQ3RDLG1EQUF3RDs7Ozs7SUFDeEQsMENBQXlDOzs7OztJQUN6Qyw4Q0FBZ0Q7Ozs7O0lBR2hELHVDQUFrQzs7Ozs7SUFDbEMsc0NBQThCOzs7OztJQUM5Qiw2Q0FBNEM7Ozs7O0lBQzVDLDBDQUFzRjs7Ozs7SUFDdEYsMENBQWdGOzs7OztJQUNoRiwwQ0FBK0U7Ozs7O0lBQy9FLHNDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgT3B0aW9uYWwsIEluamVjdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNoYW5nZUZvbnRTaXplLCBJRm9udFNpemVBY2Nlc3MsIGNoYW5nZUZvbnRTaXplVG9rZW4sIEZvbnRTaXplQWNjZXNzVG9rZW4sIFByb2ZpbGVDb2RlU2VydmljZSwgUHJvZmlsZUNvZGUsIExhbmd1YWdlLCBMYW5ndWFnZUNvZGUsIERldmljZVNlcnZpY2UsIFRyYW5zbGF0ZVNlcnZpY2UsIFNlbGVjdE9wdGlvbiwgTWV0YVNlcnZpY2UsIFNldHRpbmdTZXJ2aWNlLCBGb3JtTWV0YUNvbXBvbmVudCwgRGVmYXVsdE1ldGFQYXJzZXIsIEFQSUV4ZWN1dG9yLCBNZXRhQ29udHJvbGxlciwgTWV0YUNvbHVtbiwgQ29uZmlnVG9rZW4sIERhb0ZhY3RvcnksIFNRTENvbW1hbmQsIEFQUEVycm9yIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBTZXR0aW5nQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2Uvc2V0dGluZy1zZXJ2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgYW5pbWF0aW9uQ29sbGFwc2UgfSBmcm9tICdAYWxsaWFuelNORC91aSc7XG5pbXBvcnQgeyBzZXR0aW5nTWV0YUNvbnRyb2xsZXJUb2tlbiB9IGZyb20gJy4uLy4uL2luamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25VdGlscyB9IGZyb20gJ0BhbGxpYW56U05EL25vdGlmaWNhdGlvbic7XG4vLyBpbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xuZGVjbGFyZSB2YXIgY29yZG92YTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNldHRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NldHRpbmcuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIGFuaW1hdGlvbkNvbGxhcHNlXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdDb21wb25lbnQgZXh0ZW5kcyBGb3JtTWV0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdTZXJ2aWNlOiBTZXR0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdDb21wb25lbnRTZXJ2aWNlOiBTZXR0aW5nQ29tcG9uZW50U2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcm90ZWN0ZWQgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2UsXG4gICAgbWV0YVBhcnNlcjogRGVmYXVsdE1ldGFQYXJzZXIsXG4gICAgbWV0YUV4ZWN1dG9yOiBBUElFeGVjdXRvcixcbiAgICBwcm90ZWN0ZWQgbWV0YVNlcnZpY2U6IE1ldGFTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSxcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvblV0aWxzOiBOb3RpZmljYXRpb25VdGlscyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KHNldHRpbmdNZXRhQ29udHJvbGxlclRva2VuKSBwcml2YXRlIG1ldGFDb250cm9sbGVyOiBNZXRhQ29udHJvbGxlcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEZvbnRTaXplQWNjZXNzVG9rZW4pIHByaXZhdGUgZm9udFNpemVBY2Nlc3M6IElGb250U2l6ZUFjY2VzcyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGNoYW5nZUZvbnRTaXplVG9rZW4pIHByaXZhdGUgY2hhbmdlRm9udFNpemU6IGNoYW5nZUZvbnRTaXplLFxuICAgIEBJbmplY3QoQ29uZmlnVG9rZW4pIHByaXZhdGUgQVBQX0NPTkZJRzogYW55LFxuICApIHtcblxuICAgIHN1cGVyKG1ldGFTZXJ2aWNlLCBwcm9maWxlQ29kZVNlcnZpY2UsIG1ldGFQYXJzZXIsIG1ldGFFeGVjdXRvcik7XG4gIH1cblxuICAvL3BvcHVwIHNob3cgXG4gIHB1YmxpYyBpc1BvcHVwU2VlRGV0YWlsT3BlbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNQb3B1cE9wZW5DaGFuZ2VMYW5nID0gZmFsc2U7XG4gIHB1YmxpYyBpc1BvcHVwT3BlbkNoYW5nZUZvbnRTaXplID0gZmFsc2U7XG4gIC8vY29sbGFwc2Ugb3BlbiBvciBub3RcbiAgcHJpdmF0ZSBpc0NvbGxhcHNlU2hvdyA9IGZhbHNlO1xuICAvL3N0eWxlIG9mIGNvbGxhcHNlIGFyZWFcbiAgcHVibGljIHN0eWxlQ29sbGFwc2U6IHN0cmluZztcbiAgLy8gbGFuZyBkZWZhdWx0IG9wdGlvblxuICBwcml2YXRlIG9wdGlvbkxhbmdEZWZhdWx0ID0gJ0VuZ2xpc2gnO1xuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHB1YmxpYyBhcHBWZXJzaW9uOiBzdHJpbmc7XG4gIHB1YmxpYyB1cGRhdGVUaW1lTGlzdCA9IFtdO1xuICBwdWJsaWMgbGFuZ3VhZ2VBbGVydDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBmb250U2l6ZUFsZXJ0OiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBvcHRpb25Gb250U2l6ZURlZmF1bHQ6IHN0cmluZyA9ICcxJztcbiAgcHJpdmF0ZSBmb250U2l6ZVNldHRpbmc6IHN0cmluZyA9ICdzbSc7XG5cbiAgZ2V0IHJvd0NvbmZpZygpOiBNZXRhQ29sdW1uW11bXSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YUNvbmZpZy5Sb3dzO1xuICB9XG5cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXREZWJ1Z01vZGUoKS5zdWJzY3JpYmUoZGVidWcgPT4ge1xuICAgICAgdGhpcy5pc0RlYnVnID0gZGVidWc7XG4gICAgfSlcblxuICAgIHRoaXMuc3R5bGVDb2xsYXBzZSA9IHRoaXMuaXNDb2xsYXBzZVNob3cgPyAnb3BlbicgOiAnY2xvc2VkJztcblxuICAgIHRoaXMuZGV2aWNlU2VydmljZS5nZXRBcHBWZXJzaW9uKCkudGhlbigodmVyc2lvbikgPT4ge1xuICAgICAgdGhpcy5hcHBWZXJzaW9uID0gdmVyc2lvbjtcbiAgICB9KTtcblxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRVcGRhdGVTdWJqZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIC8vdXBkYXRlIHRyYW5zbGF0ZVxuICAgICAgdGhpcy5nZXRVcGRhdGVUaW1lTGlzdCgpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGJ0bkNsaWNrKHR5cGU6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgIGlmIChpZCA9PT0gJ0xhc3RVcGRhdGVkVGltZScpXG4gICAgICB0aGlzLm9uY2xpY2tVcGRhdGVUaW1lKCk7XG5cbiAgICBpZiAodGhpcy5tZXRhQ29udHJvbGxlcilcbiAgICAgIHRoaXMubWV0YUNvbnRyb2xsZXIuYnRuQ2xpY2sodHlwZSwgaWQsIHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgb25EYXRhVXBkYXRlZCgpIHtcbiAgICBzdXBlci5vbkRhdGFVcGRhdGVkKCk7XG4gICAgdGhpcy5fZGF0YVtcIkxhbmd1YWdlT3B0aW9uXCJdID0gdGhpcy5nZXRMYW5ndWFnZUxpc3QoKTtcbiAgICB0aGlzLmZvbnRTaXplQWNjZXNzLmdldEZvbnRTaXplQ29kZSgpLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIHRoaXMuX2RhdGFbXCJGb250U2l6ZVwiXSA9IHJlc3A7XG4gICAgICB0aGlzLm9wdGlvbkZvbnRTaXplRGVmYXVsdCA9IHJlc3A7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyBEYXRhIHVwZGF0ZWQ6XCIsIHRoaXMuX2RhdGEpO1xuICAgIHRoaXMub3B0aW9uTGFuZ0RlZmF1bHQgPSB0aGlzLl9kYXRhW1wiTGFuZ3VhZ2VcIl07XG4gICAgaWYgKHRoaXMubWV0YUNvbnRyb2xsZXIpXG4gICAgICB0aGlzLm1ldGFDb250cm9sbGVyLm9uRGF0YVVwZGF0ZWQodGhpcy5fZGF0YSk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBnZXRNZXRhSUQoKSB7XG4gICAgcmV0dXJuIFwic2V0dGluZ1wiO1xuICB9XG5cbiAgZ2V0TWV0YVBhcmFtcygpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG9uVmFsaWRhdGVBbGwoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBvblZhbHVlQ2hhbmdlKGNvbHVtbjogc3RyaW5nLCB2YWx1ZTogYW55LCBncm91cElkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgVmFsdWVDaGFuZ2U6XCIsIGNvbHVtbiwgdmFsdWUsIHRoaXMuX2RhdGEpO1xuICAgIGlmIChjb2x1bW4gPT09ICdMYW5ndWFnZScpIHtcbiAgICAgIHRoaXMub25DaGFuZ2VMYW5nKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29sdW1uID09PSAnRm9udFNpemUnKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlRm9udFNpemUodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tZXRhQ29udHJvbGxlcilcbiAgICAgIHRoaXMubWV0YUNvbnRyb2xsZXIub25WYWx1ZUNoYW5nZShjb2x1bW4sIHZhbHVlLCBncm91cElkLCBpbmRleCwgdGhpcy5fZGF0YSwgdGhpcy52YWxpZGF0aW9uUmVzdWx0KTtcbiAgfVxuXG5cbiAgZ2V0TGFuZ3VhZ2VMaXN0KCkge1xuICAgIC8vIGdldCBsYW5ndWFnZVR5cGUgaW4gU1FMaXRlIGFuZCBzZXQgZGVmYXVsdCBsYW5ndWFnZVxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCkubWFwKHggPT4gbmV3IFNlbGVjdE9wdGlvbih4LmdldExhbmd1YWdlSUQsIHguZ2V0TmFtZSkpO1xuICB9XG5cbiAgb25jbGlja1VwZGF0ZVRpbWUoKSB7XG4gICAgY29uc29sZS5sb2coJ2luIG9uIGNsaWNrIHVwZGF0ZSB0aW1lJyk7XG4gICAgdGhpcy5pc1BvcHVwU2VlRGV0YWlsT3BlbiA9ICF0aGlzLmlzUG9wdXBTZWVEZXRhaWxPcGVuO1xuICB9XG5cbiAgLy9jbGljayBjb2xscGFzZSBjYXJkXG4gIHRvZ2dsZUNvbGxhcHNlKCkge1xuICAgIHRoaXMuaXNDb2xsYXBzZVNob3cgPSAhdGhpcy5pc0NvbGxhcHNlU2hvdztcbiAgICB0aGlzLnN0eWxlQ29sbGFwc2UgPSB0aGlzLmlzQ29sbGFwc2VTaG93ID8gJ29wZW4nIDogJ2Nsb3NlZCc7XG4gIH1cblxuICAvL2NsaWNrIHRvIHNlbmQgZW1haWxcbiAgb25NYWlsVG9DbGljayhlbWFpbEFkZHJlc3M6IHN0cmluZykge1xuICAgIHdpbmRvdy5vcGVuKCdtYWlsdG86JyArIGVtYWlsQWRkcmVzcyArICc/c3ViamVjdD3lronoga/muKzoqaYnLCAnX3N5c3RlbScpO1xuICB9XG5cbiAgLy9jbGljayB0byBvcGVuIHBkZlxuICBvblBkZkNsaWNrKHBkZlVybDogc3RyaW5nKSB7XG4gICAgLy8gY29yZG92YS5wbHVnaW5zLlNpdGV3YWVydHNEb2N1bWVudFZpZXdlci52aWV3RG9jdW1lbnQoY29yZG92YS5maWxlLmFwcGxpY2F0aW9uRGlyZWN0b3J5ICsgcGRmVXJsLCAnYXBwbGljYXRpb24vcGRmJywge30pXG4gICAgaWYgKHRoaXMuZGV2aWNlU2VydmljZS5nZXREZXZpY2VQbGF0Zm9ybSgpID09ICdpT1MnKSB7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuZmlsZU9wZW5lcjIub3BlbihcbiAgICAgICAgKGNvcmRvdmEuZmlsZS5hcHBsaWNhdGlvbkRpcmVjdG9yeSArIHBkZlVybCksXG4gICAgICAgICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgICAgICB7XG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igc3RhdHVzOiAnICsgZS5zdGF0dXMgKyAnIC0gRXJyb3IgbWVzc2FnZTogJyArIGUubWVzc2FnZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAoPGFueT53aW5kb3cpLnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwoY29yZG92YS5maWxlLmFwcGxpY2F0aW9uRGlyZWN0b3J5ICsgcGRmVXJsLCBmdW5jdGlvbiAoZmlsZUVudHJ5KSB7XG5cbiAgICAgICAgKDxhbnk+d2luZG93KS5yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKGNvcmRvdmEuZmlsZS5leHRlcm5hbERhdGFEaXJlY3RvcnksIGZ1bmN0aW9uIChkaXJFbnRyeSkge1xuXG4gICAgICAgICAgZmlsZUVudHJ5LmNvcHlUbyhkaXJFbnRyeSwgJ2RhdGUucGRmJywgZnVuY3Rpb24gKG5ld0ZpbGVFbnRyeSkge1xuXG4gICAgICAgICAgICBjb3Jkb3ZhLnBsdWdpbnMuZmlsZU9wZW5lcjIub3BlbihuZXdGaWxlRW50cnkubmF0aXZlVVJMLCAnYXBwbGljYXRpb24vcGRmJywge1xuICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igc3RhdHVzOiAnICsgZS5zdGF0dXMgKyAnIC0gRXJyb3IgbWVzc2FnZTogJyArIGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vY2hlY2sgaWYgc2VsZWN0IGxhbmd1YWdlIHdoaWNoIGRpZmZlcmVudCBmcm9tIGRlZmF1bHQgbGFuZ3VhZ2VcbiAgb25DaGFuZ2VMYW5nKG9wdGlvbikge1xuICAgIGlmIChvcHRpb24gIT0gdGhpcy5vcHRpb25MYW5nRGVmYXVsdCkge1xuICAgICAgdGhpcy5sYW5ndWFnZUFsZXJ0ID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSgnTGFuZ3VhZ2VfQWxlcnQnKTtcbiAgICAgIC8vIGlmIChvcHRpb24gPT0gJ2VuJylcbiAgICAgIC8vICAgdGhpcy5sYW5ndWFnZUFsZXJ0ID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSgnRW5nbGlzaF9BbGVydCcpO1xuICAgICAgLy8gaWYgKG9wdGlvbiA9PSAnemhfVFcnKVxuICAgICAgLy8gICB0aGlzLmxhbmd1YWdlQWxlcnQgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKCdNYW5kYXJpbl9BbGVydCcpO1xuICAgICAgdGhpcy5pc1BvcHVwT3BlbkNoYW5nZUxhbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlRm9udFNpemUob3B0aW9uKSB7XG4gICAgaWYgKG9wdGlvbiAhPSB0aGlzLm9wdGlvbkZvbnRTaXplRGVmYXVsdCkge1xuICAgICAgc3dpdGNoIChvcHRpb24pIHtcbiAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgLy8gdGhpcy5mb250U2l6ZUFsZXJ0ID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSgnU21hbGxfQWxlcnQnKTtcbiAgICAgICAgICB0aGlzLmZvbnRTaXplU2V0dGluZyA9ICdzbSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgIC8vIHRoaXMuZm9udFNpemVBbGVydCA9IHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGUoJ01lZGl1bV9BbGVydCcpO1xuICAgICAgICAgIHRoaXMuZm9udFNpemVTZXR0aW5nID0gJ21kJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgLy8gdGhpcy5mb250U2l6ZUFsZXJ0ID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSgnTGFyZ2VfQWxlcnQnKTtcbiAgICAgICAgICB0aGlzLmZvbnRTaXplU2V0dGluZyA9ICdsZyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLmZvbnRTaXplQWxlcnQgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKCdGb250X1NpemVfQWxlcnQnKTtcbiAgICAgIHRoaXMuaXNQb3B1cE9wZW5DaGFuZ2VGb250U2l6ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gbGFuZyBjaGFuZ2UgcG9wdXBcbiAgb25MYW5ndWFnZUFsZXJ0Q2FuY2VsKCkge1xuICAgIHRoaXMuX2RhdGFbXCJMYW5ndWFnZVwiXSA9IHRoaXMub3B0aW9uTGFuZ0RlZmF1bHQ7XG4gIH1cblxuXG4gIC8vIGNvbmZpcm0gdG8gY2hhbmdlIGxhbmd1YWdlXG4gIG9uTGFuZ3VhZ2VBbGVydENvbmZpcm0oKSB7XG4gICAgdGhpcy51cGRhdGVMYW5ndWFnZSh0aGlzLl9kYXRhW1wiTGFuZ3VhZ2VcIl0pO1xuICAgIHRoaXMub3B0aW9uTGFuZ0RlZmF1bHQgPSB0aGlzLl9kYXRhW1wiTGFuZ3VhZ2VcIl07XG4gIH1cblxuICAvLyBsYW5nIGNoYW5nZSBwb3B1cFxuICBvbkZvbnRTaXplQWxlcnRDYW5jZWwoKSB7XG4gICAgdGhpcy5fZGF0YVtcIkZvbnRTaXplXCJdID0gdGhpcy5vcHRpb25Gb250U2l6ZURlZmF1bHQ7XG4gIH1cblxuICAvLyBjb25maXJtIHRvIGNoYW5nZSBsYW5ndWFnZVxuICBvbkZvbnRTaXplQWxlcnRDb25maXJtKCkge1xuICAgIHRoaXMudXBkYXRlRm9udFNpemUoKTtcbiAgICB0aGlzLm9wdGlvbkZvbnRTaXplRGVmYXVsdCA9IHRoaXMuX2RhdGFbXCJGb250U2l6ZVwiXTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSBsYW5ndWFnZVxuICB1cGRhdGVMYW5ndWFnZShvcHRpb24pIHtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXBkYXRlTGFuZ3VhZ2Uob3B0aW9uKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG5cbiAgICAgIGlmIChkYXRhWydIZWFkZXInXS5zdGF0dXMpIHtcbiAgICAgICAgdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuX2ZldGNoQ29kZURhdGEoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVGb250U2l6ZU9wdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy5kZXZpY2VTZXJ2aWNlLnJlc3RhcnRBcHAoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUZvbnRTaXplKCkge1xuICAgIGlmICh0aGlzLmNoYW5nZUZvbnRTaXplKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFuZ2VGb250U2l6ZS51cGRhdGVGb250U2l6ZSh0aGlzLmZvbnRTaXplU2V0dGluZyk7XG4gICAgfVxuICB9XG5cbiAgLy8gbG9hZCB1cGRhdGVUaW1lXG4gIGdldFVwZGF0ZVRpbWVMaXN0KCkge1xuICAgIHRoaXMuc2V0dGluZ0NvbXBvbmVudFNlcnZpY2UuZ2V0VXBkYXRlVGltZUxpc3QoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oJ2dldFVwZGF0ZVRpbWVMaXN0JywgZGF0YSk7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWVMaXN0ID0gZGF0YS5tYXAoeCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgRnVuY0lEOiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKHguTWFpbkZ1bmMpLFxuICAgICAgICAgIEJhY2tlbmRUaW1lOiBuZXcgRGF0ZSh4LkJhY2tlbmRUaW1lKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUZvbnRTaXplT3B0aW9uKCkge1xuICAgIHRoaXMuX2RhdGFbXCJGb250U2l6ZU9wdGlvblwiXSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheShcIkZvbnRfU2l6ZVwiKVxuICAgICAgLm1hcCh4ID0+IG5ldyBTZWxlY3RPcHRpb24oeC5nZXRDb2RlKCksIHguZGlzcGxheVRleHQpKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNoYW5nZURlYnVnTW9kZSh2YWwpIHtcbiAgICBjb25zb2xlLmxvZyhcImNoYW5nZURlYnVnTW9kZTpcIiwgdmFsKTtcbiAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLnNldERlYnVnTW9kZSh2YWwpO1xuICB9XG5cbiAgYXN5bmMgb25DbGlja0NsZWFuRGV2aWNlQnRuKCkge1xuICAgIGxldCBjb25maXJtUmVzdWx0ID0gY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byB1bmJpbmQgZGV2aWNlIChjYW4gTk9UIHVuZG8pID8gXCIpO1xuICAgIGlmIChjb25maXJtUmVzdWx0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5ub3RpZmljYXRpb25VdGlscy5jaGVja05ldHdvcmtCZWZvcmVBY3Rpb24oKSkge1xuICAgICAgICAgIC8vIG9ubGluZSBcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJkbyBkZXZpY2VTZXJ2aWNlLnVuYmluZERldmljZVwiKTtcbiAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IHRoaXMuc2V0dGluZ0NvbXBvbmVudFNlcnZpY2UudW5iaW5kRGV2aWNlKCk7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwidW5iaW5kRGV2aWNlIHJlc3A6IFwiLCByZXNwKTtcbiAgICAgICAgICBpZiAocmVzcC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9jbGVhckRldmljZURhdGEoKTtcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlU2VydmljZS5yZXN0YXJ0QXBwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgQVBQRXJyb3IoXCJGMDA5MDFcIiwgXCJ1bmJpbmREZXZpY2VBUEkgZmFpbDogXCIgKyBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfY2xlYXJEZXZpY2VEYXRhKCk6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2luaXRMb2NhbFN0b3JhZ2UoKTtcbiAgICAgIGxldCBlbnYgPSB0aGlzLkFQUF9DT05GSUcuRU5WO1xuICAgICAgaWYgKGVudiAhPT0gJ0RFVicpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5fY2xlYXJEYXRhYmFzZSgpO1xuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEFQUEVycm9yKCdGMDA5MDInLCAnY2xlYXJTcWxpdGVEQiBmYWlsOiAnICsgZXJyb3IpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfY2xlYXJEYXRhYmFzZSgpOiBQcm9taXNlPGFueT4ge1xuXG4gICAgbGV0IGVudiA9IHRoaXMuQVBQX0NPTkZJRy5FTlY7XG4gICAgbGV0IGRiX2NvbmZpZyA9IHRoaXMuQVBQX0NPTkZJR1tlbnZdLkRBVEFCQVNFO1xuICAgIGxldCBkYl9uYW1lcyA9IE9iamVjdC5rZXlzKGRiX2NvbmZpZyk7XG4gICAgZm9yICh2YXIgbmFtZSBvZiBkYl9uYW1lcykge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2RiX25hbWVzIGJlIGRlbGV0ZTonLCBuYW1lKTtcbiAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGFvKG5hbWUpO1xuXG4gICAgICBsZXQgcmV0dXJuTWFwID0gYXdhaXQgZGFvLmdldFNjaGVtYSgpLnRvUHJvbWlzZSgpO1xuXG4gICAgICBsZXQgU3FsQ29tbWFuZEFycmF5ID0gW107XG5cbiAgICAgIHJldHVybk1hcC5mb3JFYWNoKHZhbHVlID0+IHtcblxuICAgICAgICBsZXQgY29tbWFuZDogc3RyaW5nID0gdmFsdWUudGFibGVOYW1lLmluY2x1ZGVzKCdUV19MSF9TRF9WV18nKSA/ICdEUk9QIFZJRVcgSUYgRVhJU1RTICcgOiAnRFJPUCBUQUJMRSBJRiBFWElTVFMgJztcbiAgICAgICAgU3FsQ29tbWFuZEFycmF5LnB1c2gobmV3IFNRTENvbW1hbmQoY29tbWFuZCArIHZhbHVlLnRhYmxlTmFtZSwgW10pKTtcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCBkYW8uZXhjdXRlU3FsQ29tbWFuZChTcWxDb21tYW5kQXJyYXkpLnRvUHJvbWlzZSgpO1xuXG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIF9pbml0TG9jYWxTdG9yYWdlKCkge1xuICAgIGxldCBNYWluREJLZXkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01haW4nKTtcbiAgICBsZXQgUHJvZmlsZURCS2V5ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9maWxlJyk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTWFpbicsIE1haW5EQktleSk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdQcm9maWxlJywgUHJvZmlsZURCS2V5KTtcbiAgfVxuXG5cbiAgLy8gc3RhcnQgb2YgdXBsb2FkIGxhbmd1YWdlXG4gIC8vIHByaXZhdGUgcmVhZG9ubHkgc3RvcmFnZUtleU5hbWU6IHN0cmluZyA9ICdMYW5ndWFnZUpTT04nO1xuICAvLyBwcml2YXRlIGpzb25UZXh0OiBzdHJpbmcgPSAnJztcbiAgLy8gcHVibGljIGZpbGU6IEZpbGUgPSBudWxsOztcbiAgLy8gcHVibGljIGluY29taW5nZmlsZShldmVudCkge1xuICAvLyAgIHRoaXMuZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgLy8gfVxuICAvLyBwdWJsaWMgdXBsb2FkTGFuZ3VhZ2UoKSB7XG4gIC8vICAgaWYgKHRoaXMuZmlsZSkge1xuICAvLyAgICAgdGhpcy51cGxvYWRGaWxlKCk7XG4gIC8vICAgfVxuICAvLyAgIGVsc2Uge1xuICAvLyAgICAgYWxlcnQoJ0VtcHR5IEZpbGUuJyk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIHB1YmxpYyByZXNldExhbmd1YWdlKCkge1xuICAvLyAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLnN0b3JhZ2VLZXlOYW1lKTtcbiAgLy8gICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UubG9hZEpzb24oKS50aGVuKCgpID0+IHtcbiAgLy8gICAgIHRoaXMub25MYW5ndWFnZUFsZXJ0Q29uZmlybSgpO1xuICAvLyAgICAgYWxlcnQoJ3Jlc2V0IHN1Y2Nlc3MnKTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIHVwbG9hZEZpbGUoKTogUHJvbWlzZTxhbnk+IHtcblxuICAvLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgLy8gICAgIGxldCB3b3JrQm9vayA9IG51bGw7XG4gIC8vICAgICBsZXQganNvbkRhdGE6IEFycmF5PGFueT4gPSBbXTtcbiAgLy8gICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIC8vICAgICAvLyBjb25zdCBmaWxlID0gZXYudGFyZ2V0LmZpbGVzWzBdO1xuICAvLyAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCkgPT4ge1xuICAvLyAgICAgICBjb25zdCBkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgLy8gICAgICAgdHJ5IHtcbiAgLy8gICAgICAgICB3b3JrQm9vayA9IFhMU1gucmVhZChkYXRhLCB7IHR5cGU6ICdiaW5hcnknIH0pO1xuICAvLyAgICAgICAgIC8vIGNvbnNvbGUud2Fybignd29ya0Jvb2suU2hlZXROYW1lczogJyx3b3JrQm9vay5TaGVldE5hbWVzKTtcblxuICAvLyAgICAgICAgICg8QXJyYXk8c3RyaW5nPj53b3JrQm9vay5TaGVldE5hbWVzKS5mb3JFYWNoKHNoZWV0TmFtZSA9PiB7XG4gIC8vICAgICAgICAgICBsZXQgdGFyZ2V0U2hlZXQgPSB3b3JrQm9vay5TaGVldHNbc2hlZXROYW1lXTtcbiAgLy8gICAgICAgICAgIC8vIGNvbnNvbGUud2FybihzaGVldE5hbWUsICcgJywgWExTWC51dGlscy5zaGVldF90b19qc29uKHRhcmdldFNoZWV0LCB7IGhlYWRlcjogMSB9KSlcbiAgLy8gICAgICAgICAgIGpzb25EYXRhID0gWy4uLmpzb25EYXRhLCBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24odGFyZ2V0U2hlZXQsIHsgaGVhZGVyOiAxIH0pXTtcbiAgLy8gICAgICAgICB9KVxuICAvLyAgICAgICAgIC8vIGxldCB0YXJnZXRTaGVldCA9IHdvcmtCb29rLlNoZWV0c1t3b3JrQm9vay5TaGVldE5hbWVzWzBdXTtcblxuICAvLyAgICAgICAgIC8vIGpzb25EYXRhID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHRhcmdldFNoZWV0LCB7IGhlYWRlcjogMSB9KTtcbiAgLy8gICAgICAgICBqc29uRGF0YSA9IFtdLmNvbmNhdC5hcHBseShbXSwganNvbkRhdGEpXG4gIC8vICAgICAgICAgY29uc29sZS53YXJuKFwianNvbiBkYXRhOiBcIiwganNvbkRhdGEpO1xuICAvLyAgICAgICAgIHRoaXMuanNvblRleHQgPSB0aGlzLl9wYXJzZVNoZWV0SnNvblRvTGFuZ3VhZ2UoanNvbkRhdGEpO1xuICAvLyAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXlOYW1lLCB0aGlzLmpzb25UZXh0KTtcbiAgLy8gICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UubG9hZEpzb24oKS50aGVuKCgpID0+IHtcbiAgLy8gICAgICAgICAgIC8vIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAvLyAgICAgICAgICAgdGhpcy5vbkxhbmd1YWdlQWxlcnRDb25maXJtKCk7XG4gIC8vICAgICAgICAgICBhbGVydCgnVXBsb2FkIFN1Y2Nlc3MuJyk7XG4gIC8vICAgICAgICAgICByZXMoKTtcbiAgLy8gICAgICAgICB9KTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgLy8gICAgICAgICBhbGVydCgnVXBsb2FkIEZhaWwuJyk7XG4gIC8vICAgICAgICAgcmVqKCk7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgfVxuICAvLyAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyh0aGlzLmZpbGUpO1xuICAvLyAgIH0pXG5cbiAgLy8gfVxuXG5cbiAgLy8gcHJpdmF0ZSBfcGFyc2VTaGVldEpzb25Ub0xhbmd1YWdlKGpzb246IEFycmF5PGFueT4pOiBzdHJpbmcge1xuICAvLyAgIGxldCB0YXJnZXRMYW5ndWFnZTogQXJyYXk8c3RyaW5nPiA9IFsnemhfVFcnLCAnVEgnLCAnZW4nXTtcbiAgLy8gICBsZXQgbGFuZ3VhZ2VPYmogPSB7fTtcblxuICAvLyAgICg8QXJyYXk8YW55Pj5qc29uKS5mb3JFYWNoKGNvbCA9PiB7XG4gIC8vICAgICBsZXQgbGFuZ3VhZ2VUeXBlOiBzdHJpbmcgPSBjb2xbMF07XG4gIC8vICAgICBpZiAobGFuZ3VhZ2VUeXBlICYmIHRhcmdldExhbmd1YWdlLnJlZHVjZSgodG90YWwsIGVhY2gpID0+IHRvdGFsIHx8IGVhY2ggPT09IGxhbmd1YWdlVHlwZSwgZmFsc2UpKSB7XG4gIC8vICAgICAgIGxldCBtYXBwaW5nSUQ6IHN0cmluZyA9IGNvbFsxXTtcbiAgLy8gICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBjb2xbMl0gPyBjb2xbMl0gOiAnJztcbiAgLy8gICAgICAgaWYgKCFsYW5ndWFnZU9ialtsYW5ndWFnZVR5cGVdKSB7XG4gIC8vICAgICAgICAgbGFuZ3VhZ2VPYmpbbGFuZ3VhZ2VUeXBlXSA9IHt9O1xuICAvLyAgICAgICB9XG4gIC8vICAgICAgIGxhbmd1YWdlT2JqW2xhbmd1YWdlVHlwZV1bbWFwcGluZ0lEXSA9IHZhbHVlO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuXG4gIC8vICAgLy8gY29uc29sZS53YXJuKGxhbmd1YWdlT2JqKVxuICAvLyAgIHJldHVybiBKU09OLnN0cmluZ2lmeShsYW5ndWFnZU9iaiwgbnVsbCwgXCJcXHRcIik7XG5cbiAgLy8gfVxuICAvLyBlbmQgb2YgdXBsb2FkIGxhbmd1YWdlXG5cbn1cbiJdfQ==