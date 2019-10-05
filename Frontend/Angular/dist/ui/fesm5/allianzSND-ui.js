import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { CountoModule } from 'angular2-counto';
import { NxIconModule } from '@allianz/ngx-ndbx/icon';
import { NxPopoverModule, NxButtonModule, NxCheckboxModule, NxDropdownModule, NxRadioModule, NxMessageModule, NxModalModule, NxAccordionModule, NxSwitcherModule } from '@allianz/ngx-ndbx';
import { NxProgressStepperModule } from '@allianz/ngx-ndbx/progress-stepper';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { NxInputModule } from '@allianz/ngx-ndbx/input';
import { NxDatefieldModule, NxNativeDateModule } from '@allianz/ngx-ndbx/datefield';
import { NxProgressbarModule } from '@allianz/ngx-ndbx/progressbar';
import { NxGridModule } from '@allianz/ngx-ndbx/grid';
import * as Hammer from 'hammerjs';
import { DIRECTION_ALL } from 'hammerjs';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AlertController, IonicModule } from '@ionic/angular';
import { CalendarDateFormatter, CalendarEventTitleFormatter, CalendarModule, DateAdapter } from 'angular-calendar';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { OWL_DATE_TIME_FORMATS, OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { subDays, addDays, isSameDay, isPast, isToday, isFuture, isWeekend, startOfWeek, format, getMonth, addMinutes, getDate, getHours, getMinutes, getYear, isAfter } from 'date-fns';
import { v4 } from 'uuid';
import { BehaviorSubject, Subject, fromEvent, of } from 'rxjs';
import { takeUntil, mergeMap, map, tap, filter } from 'rxjs/operators';
import { Location, DatePipe, CommonModule } from '@angular/common';
import { __extends, __awaiter, __generator, __values } from 'tslib';
import { SelectOption, Language, AppRouter, ActionService, ViewDateChange, ChangeAction, showRuleToken, StringUtils, NumberFormatPipe, DateUtils, DataSyncService, CoreModule } from '@allianzSND/core';
import { Injectable, Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ElementRef, ViewChild, ChangeDetectorRef, Renderer, Optional, TemplateRef, ContentChildren, Renderer2, HostListener, HostBinding, Directive, forwardRef, Inject, ViewChildren, defineInjectable, NgZone, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var CONTENTGAP = {
    GAP20: 0,
    GAP40: 1,
};
CONTENTGAP[CONTENTGAP.GAP20] = 'GAP20';
CONTENTGAP[CONTENTGAP.GAP40] = 'GAP40';
/** @enum {number} */
var STEPSTYLETYPE = {
    STYLE_1: 0,
    STYLE_2: 1,
    STYLE_2_2: 2,
};
STEPSTYLETYPE[STEPSTYLETYPE.STYLE_1] = 'STYLE_1';
STEPSTYLETYPE[STEPSTYLETYPE.STYLE_2] = 'STYLE_2';
STEPSTYLETYPE[STEPSTYLETYPE.STYLE_2_2] = 'STYLE_2_2';
/** @enum {number} */
var TABLETIELESTYLETYPE = {
    STYLE_1: 0,
    STYLE_2: 1,
    STYLE_3: 2,
    STYLE_4: 3,
    STYLE_5: 4,
    STYLE_6: 5,
    STYLE_7: 6,
};
TABLETIELESTYLETYPE[TABLETIELESTYLETYPE.STYLE_1] = 'STYLE_1';
TABLETIELESTYLETYPE[TABLETIELESTYLETYPE.STYLE_2] = 'STYLE_2';
TABLETIELESTYLETYPE[TABLETIELESTYLETYPE.STYLE_3] = 'STYLE_3';
TABLETIELESTYLETYPE[TABLETIELESTYLETYPE.STYLE_4] = 'STYLE_4';
TABLETIELESTYLETYPE[TABLETIELESTYLETYPE.STYLE_5] = 'STYLE_5';
TABLETIELESTYLETYPE[TABLETIELESTYLETYPE.STYLE_6] = 'STYLE_6';
TABLETIELESTYLETYPE[TABLETIELESTYLETYPE.STYLE_7] = 'STYLE_7';
/** @enum {number} */
var TABLELISTSTYLETYPE = {
    STYLE_1: 0,
    STYLE_2: 1,
};
TABLELISTSTYLETYPE[TABLELISTSTYLETYPE.STYLE_1] = 'STYLE_1';
TABLELISTSTYLETYPE[TABLELISTSTYLETYPE.STYLE_2] = 'STYLE_2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalManager = /** @class */ (function () {
    function ModalManager() {
        this.modalList = [];
        this.isGlobalLoadingOpen = false;
        this.globalLoadingSubject = new BehaviorSubject(this.isGlobalLoadingOpen);
    }
    /**
     * @param {?} id
     * @param {?} instance
     * @return {?}
     */
    ModalManager.prototype.pushModal = /**
     * @param {?} id
     * @param {?} instance
     * @return {?}
     */
    function (id, instance) {
        if (this.modalList.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id === id; })).length == 0) {
            this.modalList.push({ id: id, instance: instance });
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ModalManager.prototype.dismissModal = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.modalList = this.modalList.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id != id; }));
        return this.modalList.length === 0;
    };
    /**
     * @return {?}
     */
    ModalManager.prototype.closeAll = /**
     * @return {?}
     */
    function () {
        console.log("ModalManager closeAll:", this.modalList);
        this.modalList.forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            x.instance.closeHandler();
            x.instance.ModalCloseGlobalControl();
        }));
        this.modalList = [];
    };
    /**
     * @param {?} open
     * @return {?}
     */
    ModalManager.prototype.toggleLoading = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.isGlobalLoadingOpen = open;
        this.globalLoadingSubject.next(this.isGlobalLoadingOpen);
    };
    /**
     * @return {?}
     */
    ModalManager.prototype.getLoadingStatus = /**
     * @return {?}
     */
    function () {
        return this.globalLoadingSubject.asObservable();
    };
    ModalManager.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ModalManager.ctorParameters = function () { return []; };
    /** @nocollapse */ ModalManager.ngInjectableDef = defineInjectable({ factory: function ModalManager_Factory() { return new ModalManager(); }, token: ModalManager, providedIn: "root" });
    return ModalManager;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiComponent = /** @class */ (function () {
    function UiComponent(modelManager) {
        var _this = this;
        this.modelManager = modelManager;
        // input test
        this.inputText1 = 'INPUT1';
        this.inputText2 = 'INPUT2';
        this.inputText3 = 'INPUT3';
        this.isInputError = false;
        this.testValue = "b1";
        this.testValue2 = "b3";
        this.testcb = false;
        this.testcb2 = true;
        this.testcb3 = false;
        this.testcb4 = true;
        this.testcb2_1 = false;
        this.colorCodeCB1 = false;
        this.colorCodeCB2 = true;
        this.colorCodeCB3 = false;
        this.colorCodeCB4 = true;
        this.testSearch = 'first';
        this.test_radio = 'R3';
        this.test_radio2 = 'hot3';
        this.test_radio3 = 'R2_2';
        this.testDatepick = '';
        this.test_select = '';
        this.test_switcher = true;
        this.test_datetimepicker = new Date();
        // checkbox group
        this.resultCheck1 = ["test"];
        //select error
        this.isSelectError = true;
        this.isModalAOpen = true;
        this.isModalBOpen = true;
        this.isModalImgOpen1 = true;
        this.isModalImgOpen2 = false;
        this.isModalCOpen = false;
        // loading page show
        this.isLoadingBoxOpen = true;
        // popup test 
        this.isPopupOpenModal = true;
        this.isCheck = true;
        //下拉選單1-選項
        this.options = [
            new SelectOption('b0', '哈囉1'),
            new SelectOption('b1', '哈囉2'),
            new SelectOption('b2', '哈囉3')
        ];
        //下拉選單2-選項
        this.options2 = [
            new SelectOption('b0', '哈囉'),
            new SelectOption('b1', '哈囉'),
            new SelectOption('b2', '哈囉'),
            new SelectOption('b3', '這個被選到吧')
        ];
        this.isPopupAOpen = false;
        this.isPopupImgOpen = false;
        this.isPopupFeedbackOpen = false;
        this.isPopupText1Open = false;
        this.isPopupList = false;
        this.isPopupMesg = false;
        this.isPopupFilter = false;
        this.isPopupText2Open = false;
        this.isPopupContactNoteOpen = false;
        this.isPopupCustInfoOpen = false; //客戶資料更新提醒
        this.isPopupCustUpdateRemindOpen = false; //popup更新提醒
        this.isPopupAlertOpen = false;
        this.isPopupMenuOpen = false;
        this.isAgreeBtnDisable = true;
        //控制間距
        this.GAP_SIZE_20 = CONTENTGAP.GAP20;
        this.GAP_SIZE_40 = CONTENTGAP.GAP40;
        //setpData
        this.testStepsData = ['Progressname Progressname', 'Stepname', 'Progressname'];
        //控制step樣式
        this.STEP_STYLE_1 = STEPSTYLETYPE.STYLE_1;
        this.STEP_STYLE_2 = STEPSTYLETYPE.STYLE_2;
        this.STEP_STYLE_2_2 = STEPSTYLETYPE.STYLE_2_2;
        //控制table title樣式
        this.TABLETIELE_STYLE_1 = TABLETIELESTYLETYPE.STYLE_1;
        this.TABLETIELE_STYLE_2 = TABLETIELESTYLETYPE.STYLE_2;
        this.TABLETIELE_STYLE_3 = TABLETIELESTYLETYPE.STYLE_3;
        this.TABLETIELE_STYLE_4 = TABLETIELESTYLETYPE.STYLE_4;
        this.TABLETIELE_STYLE_5 = TABLETIELESTYLETYPE.STYLE_5;
        //控制table list樣式
        this.TABLELIST_STYLE_1 = TABLELISTSTYLETYPE.STYLE_1;
        this.TABLELIST_STYLE_2 = TABLELISTSTYLETYPE.STYLE_2;
        setTimeout((/**
         * @return {?}
         */
        function () {
            console.log("Close all popup!");
            _this.modelManager.closeAll();
        }), 6000);
    }
    /**
     * @return {?}
     */
    UiComponent.prototype.selectErrorClick = /**
     * @return {?}
     */
    function () {
        this.isSelectError = !this.isSelectError;
        console.log('select error:', this.isSelectError);
    };
    //btn variable
    //btn variable
    /**
     * @return {?}
     */
    UiComponent.prototype.ngOnInit = 
    //btn variable
    /**
     * @return {?}
     */
    function () {
        this.laodinBoxStatus();
    };
    /**
     * @return {?}
     */
    UiComponent.prototype.laodinBoxStatus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isLoadingBoxOpen) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.isLoadingBoxOpen = false;
            }), 5000);
        }
        else {
            this.isLoadingBoxOpen = true;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.isLoadingBoxOpen = false;
            }), 5000);
        }
    };
    /**
     * @return {?}
     */
    UiComponent.prototype.onAlertCancel = /**
     * @return {?}
     */
    function () {
        console.log('click cancel');
    };
    /**
     * @return {?}
     */
    UiComponent.prototype.onAlertConfirm = /**
     * @return {?}
     */
    function () {
        console.log('click confirm');
    };
    /**
     * @return {?}
     */
    UiComponent.prototype.itemClick = /**
     * @return {?}
     */
    function () {
        alert('Item click!');
    };
    /**
     * @return {?}
     */
    UiComponent.prototype.itemOptionClick = /**
     * @return {?}
     */
    function () {
        alert('Item option click!');
    };
    //btn click
    //btn click
    /**
     * @param {?} name
     * @return {?}
     */
    UiComponent.prototype.onClickBtn = 
    //btn click
    /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        alert('this is btn click' + name);
    };
    /**
     * @return {?}
     */
    UiComponent.prototype.toggleErrorStatus = /**
     * @return {?}
     */
    function () {
        this.isInputError = !this.isInputError;
    };
    // link and img grouup click
    // link and img grouup click
    /**
     * @param {?} event
     * @return {?}
     */
    UiComponent.prototype.clickLinkImg = 
    // link and img grouup click
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        alert('click here');
    };
    //datagroup
    //datagroup
    /**
     * @param {?} groupName
     * @return {?}
     */
    UiComponent.prototype.onDataAddClick = 
    //datagroup
    /**
     * @param {?} groupName
     * @return {?}
     */
    function (groupName) {
        console.log('add');
        console.log(groupName);
        alert('data Add');
    };
    /**
     * @param {?} groupName
     * @return {?}
     */
    UiComponent.prototype.onDataRemoveClick = /**
     * @param {?} groupName
     * @return {?}
     */
    function (groupName) {
        console.log('del');
        console.log(groupName);
        alert('data Del');
    };
    /**
     * @return {?}
     */
    UiComponent.prototype.onRemove = /**
     * @return {?}
     */
    function () {
        alert('column remove click!');
    };
    /**
     * @return {?}
     */
    UiComponent.prototype.onAdd = /**
     * @return {?}
     */
    function () {
        alert('column add click!');
    };
    // link group click
    // link group click
    /**
     * @param {?} textInput
     * @return {?}
     */
    UiComponent.prototype.onBtnLinkClick = 
    // link group click
    /**
     * @param {?} textInput
     * @return {?}
     */
    function (textInput) {
        alert('this text get:' + textInput);
    };
    /**
     * @param {?} string
     * @param {?} number
     * @return {?}
     */
    UiComponent.prototype.consoleEvent = /**
     * @param {?} string
     * @param {?} number
     * @return {?}
     */
    function (string, number) {
        console.log(string, number);
    };
    //check3 click (資料表checkbox)
    //check3 click (資料表checkbox)
    /**
     * @return {?}
     */
    UiComponent.prototype.onClickCheck3 = 
    //check3 click (資料表checkbox)
    /**
     * @return {?}
     */
    function () {
        alert('ya checkbox3');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiComponent.prototype.tabStyle002Alert = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log('now', event);
    };
    /**
     * @param {?} dom
     * @return {?}
     */
    UiComponent.prototype.infoTabClick = /**
     * @param {?} dom
     * @return {?}
     */
    function (dom) {
        console.log('click');
        if (this.nowShowBtn != undefined) {
            console.log('if');
            if (dom != undefined) {
                if (dom.messageContent != this.nowShowBtn.messageContent) {
                    this.closeInfo();
                    this.nowShowBtn = dom;
                }
                else {
                    this.resetInfoPos();
                }
            }
        }
        else {
            console.log('else');
            this.nowShowBtn = dom;
        }
    };
    /**
     * @return {?}
     */
    UiComponent.prototype.resetInfoPos = /**
     * @return {?}
     */
    function () {
        if (this.nowShowBtn != undefined) {
            this.nowShowBtn.countPos();
        }
    };
    /**
     * @return {?}
     */
    UiComponent.prototype.closeInfo = /**
     * @return {?}
     */
    function () {
        if (this.nowShowBtn != undefined) {
            this.nowShowBtn.closeInfo();
            this.nowShowBtn = undefined;
            console.log('close');
        }
    };
    /**
     * @param {?} isBtm
     * @return {?}
     */
    UiComponent.prototype.detectScroll = /**
     * @param {?} isBtm
     * @return {?}
     */
    function (isBtm) {
        console.log('is Btm  to the modal', isBtm);
    };
    // 客戶同意POOPUP內容
    // 客戶同意POOPUP內容
    /**
     * @param {?} status
     * @return {?}
     */
    UiComponent.prototype.agreePopupContent = 
    // 客戶同意POOPUP內容
    /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        if (this.isPopupCustInfoOpen) {
            console.log('status', status, 'pos:', status.bottom, 'isAgreeBtnDisable', this.isAgreeBtnDisable);
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (status.bottom === true) {
                    console.log('bottom:', status.bottom);
                    this.isAgreeBtnDisable = false;
                    console.log('isAgreeBtnDisable:', this.isAgreeBtnDisable);
                }
            }), 800);
        }
    };
    UiComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui',
                    template: "<h2>Allianz S&D UI Library</h2>\n\n\n<!-- <app-ui-modal-style-img-base class=\"wd-sm\" [(isPopupOpen)]=\"isPopupOpenModal\" [isBackdropClose]=\"false\">\n  <ng-container textType=\"modal-img-detail\">\n    <nx-icon name='product-expensive-objects-jewelery' size='auto' [fill]=\"false\" [outline]='false'></nx-icon>\n  </ng-container>\n  <ng-container textType=\"modal-title-detail\">\u6A19\u984C\u6A19\u984C</ng-container>\n  <ng-container textType=\"modal-content-detail\">\n    <p class=\"txt\">\u5167\u5BB9\u5167\u5BB9\u5167\u5BB9\u5167\u5BB9</p>\n    <div class=\"checkbox-block\">\n      <app-ui-form-checkbox [(nxValue)]=\"\bisCheck\">\n        <ng-container checkboxText=\"style2\">\u9805\u76EE\u6558\u8FF0</ng-container>\n      </app-ui-form-checkbox>\n    </div>\n  </ng-container>\n  <ng-container textType=\"modal-btm-detail\">\n    <app-ui-btn-layout>\n      <app-ui-btn [btnColor]=\"'main2'\" [btnWd]=\"'md'\" [btnHeight]=\"'sm'\" >\n        <ng-container TextType=\"cust\">OK</ng-container>\n      </app-ui-btn>\n      <app-ui-btn [btnColor]=\"'grey'\" [btnStyle]=\"'text'\" [btnWd]=\"'lg'\" >\n        <ng-container TextType=\"cust\">NO</ng-container>\n      </app-ui-btn>\n    </app-ui-btn-layout>\n  </ng-container>\n</app-ui-modal-style-img-base> -->\n\n\n<!--  -->\n<div #scrollBox class=\"layout-cp-all\" style=\"overflow: hidden; overflow-y:auto; height:100vh;\">\n<div style=\"\">\n  <h3 class=\"title-in-cp\">Loading Whole Page</h3>\n  <p>{{isLoadingBoxOpen}}</p>\n  <app-ui-btn (ClickBtn)=\"laodinBoxStatus()\"><ng-container TextType=\"cust\">\u958B\u95DCloading</ng-container></app-ui-btn>\n  <snd-ui-loading-box [isOpen]=\"isLoadingBoxOpen\"></snd-ui-loading-box>\n  \n  <snd-ui-modal-msg>You are currently offline. Please connect the internet again.</snd-ui-modal-msg>\n\n  <h3 class=\"title-in-cp\">\u8868\u55AE-\u5C0F\u6A19\u984C</h3>\n  <app-ui-form-title-sm>\u8868\u55AE\u6A19\u984C\u6587\u5B57</app-ui-form-title-sm>\n  <app-ui-form-title-sm class=\"disable\">\u8868\u55AE\u4E0D\u80FD\u9EDE\u6587\u5B57</app-ui-form-title-sm>\n\n  <h3 class=\"title-in-cp\">\u8868\u55AE-\u55AE\u4E00\u500B-checkbox1</h3>\n  <app-ui-form-checkbox [(nxValue)]=\"testcb\" [isDisable]=\"false\">\n    <ng-container checkboxText=\"style2\">\u53EF\u4EE5\u9EDE\u9078\u7684\u7BC4\u4F8B</ng-container>\n  </app-ui-form-checkbox>\n  <app-ui-form-checkbox [(nxValue)]=\"testcb2\" [isDisable]=\"true\">\n    <ng-container checkboxText=\"style2\">\u4E0D\u80FD\u9EDE\u9078\u4F46\u5DF2\u9078\u8D77\u7684\u7BC4\u4F8B</ng-container>\n  </app-ui-form-checkbox>\n  <app-ui-form-checkbox [(nxValue)]=\"testcb3\" [isDisable]=\"true\">\n      <ng-container checkboxText=\"style2\">\u4E0D\u80FD\u9EDE\u9078\u7684\u7BC4\u4F8B</ng-container>\n    </app-ui-form-checkbox>\n  <app-ui-form-checkbox [(nxValue)]=\"testcb4\" [isDisable]=\"false\">\n    <ng-container checkboxText=\"style2\">\u9810\u8A2D\u52FE\u8D77\u4F86\u53EF\u9078</ng-container>\n  </app-ui-form-checkbox>\n\n  <h3 class=\"title-in-cp\">\u8868\u55AE-\u50B3\u4E0D\u540C\u8272\u78BC</h3>\n  <app-ui-form-checkbox [colorCode]=\"'#496ebd'\" [(nxValue)]=\"colorCodeCB1\" [isDisable]=\"false\">\n    <ng-container checkboxText=\"style2\">\u8272\u78BCCB\u793A\u7BC4</ng-container>\n  </app-ui-form-checkbox>\n  <app-ui-form-checkbox [colorCode]=\"'#ff934f'\" [(nxValue)]=\"colorCodeCB2\" [isDisable]=\"false\">\n    <ng-container checkboxText=\"style2\">\u8272\u78BCCB\u793A\u7BC42</ng-container>\n  </app-ui-form-checkbox>\n  <app-ui-form-checkbox [colorCode]=\"'#fdd25c'\" [(nxValue)]=\"colorCodeCB3\" [isDisable]=\"true\">\n    <ng-container checkboxText=\"style2\">\u8272\u78BCCB3-disable</ng-container>\n  </app-ui-form-checkbox>\n  <app-ui-form-checkbox [colorCode]=\"'#7fe4e0'\" [(nxValue)]=\"colorCodeCB4\" [isDisable]=\"true\">\n    <ng-container checkboxText=\"style2\">\u8272\u78BCCB4-disable</ng-container>\n  </app-ui-form-checkbox>\n\n  <h3 class=\"title-in-cp\">checkbox group</h3>\n  <app-ui-form-checkbox [nxValue]=\"true\" [isDisable]=\"false\">\n    <ng-container checkboxText=\"style2\">\u53EF\u4EE5\u9EDE\u9078\u7684\u7BC4\u4F8B</ng-container>\n  </app-ui-form-checkbox>\n  <app-ui-form-checkbox [nxValue]=\"false\" [isDisable]=\"false\">\n    <ng-container checkboxText=\"style2\">\u53EF\u4EE5\u9EDE\u9078\u7684\u7BC4\u4F8B</ng-container>\n  </app-ui-form-checkbox>\n\n  <h3 class=\"title-in-cp\">\u8868\u55AE-checkbox2-\u8D85\u904E\u4E94\u500B</h3>\n  <app-ui-collapse-group>\n    <ng-container textType=\"originContent\">\n      <!-- content -->\n      <app-ui-form-checkbox2 [nxValue]=\"false\">\n        <ng-container checkboxText=\"style1\">\u9810\u8A2D\u6C92\u9078</ng-container>\n      </app-ui-form-checkbox2>\n      <app-ui-form-checkbox2 [nxValue]=\"true\">\n        <ng-container checkboxText=\"style1\">\u9810\u8A2D\u6709\u9078</ng-container>\n      </app-ui-form-checkbox2>\n      <app-ui-form-checkbox2 [nxValue]=\"false\">\n        <ng-container checkboxText=\"style1\">\u4F46\u5BEC\u5EA6\u6703\u96A8\u5167\u5BB9\u9577\u5BEC</ng-container>\n      </app-ui-form-checkbox2>\n      <app-ui-form-checkbox2 [nxValue]=\"false\">\n        <ng-container checkboxText=\"style1\">\u4E0D\u80FD\u9EDE\u9078\u7684\u7BC4\u4F8B</ng-container>\n      </app-ui-form-checkbox2>\n      <app-ui-form-checkbox2 [nxValue]=\"false\">\n        <ng-container checkboxText=\"style1\">\u9577\u5BEC</ng-container>\n      </app-ui-form-checkbox2>\n\n      <!-- end of content -->\n\n    </ng-container>\n    <ng-container textType=\"hideContnet\">\n        <app-ui-form-checkbox2 [nxValue]=\"false\">\n          <ng-container checkboxText=\"style1\">\u9577\u5BEC</ng-container>\n        </app-ui-form-checkbox2>\n        <app-ui-form-checkbox2 [nxValue]=\"false\">\n          <ng-container checkboxText=\"style1\">\u9577\u5BEC</ng-container>\n        </app-ui-form-checkbox2>\n        <app-ui-form-checkbox2 [nxValue]=\"false\">\n            <ng-container checkboxText=\"style1\">\u9577\u5BEC</ng-container>\n          </app-ui-form-checkbox2>\n          <app-ui-form-checkbox2 [nxValue]=\"false\">\n              <ng-container checkboxText=\"style1\">\u9577\u5BEC</ng-container>\n            </app-ui-form-checkbox2> <app-ui-form-checkbox2 [nxValue]=\"false\">\n                <ng-container checkboxText=\"style1\">\u9577\u5BEC</ng-container>\n              </app-ui-form-checkbox2>\n\n    </ng-container>\n    \n  </app-ui-collapse-group>\n\n  <app-ui-collapse-group>\n      <ng-container textType=\"originContent\">\n        <!-- content -->\n        <app-ui-form-checkbox2 [nxValue]=\"false\">\n          <ng-container checkboxText=\"style1\">\u9810\u8A2D\u6C92\u9078</ng-container>\n        </app-ui-form-checkbox2>\n        <app-ui-form-checkbox2 [nxValue]=\"true\">\n          <ng-container checkboxText=\"style1\">\u9810\u8A2D\u6709\u9078</ng-container>\n        </app-ui-form-checkbox2>\n        <app-ui-form-checkbox2 [nxValue]=\"false\">\n          <ng-container checkboxText=\"style1\">\u4F46\u5BEC\u5EA6\u6703\u96A8\u5167\u5BB9\u9577\u5BEC</ng-container>\n        </app-ui-form-checkbox2>\n        <app-ui-form-checkbox2 [nxValue]=\"false\">\n          <ng-container checkboxText=\"style1\">\u4E0D\u80FD\u9EDE\u9078\u7684\u7BC4\u4F8B</ng-container>\n        </app-ui-form-checkbox2>\n        <app-ui-form-checkbox2 [nxValue]=\"false\">\n          <ng-container checkboxText=\"style1\">\u9577\u5BEC</ng-container>\n        </app-ui-form-checkbox2>\n  \n        <!-- end of content -->\n  \n      </ng-container>\n      <ng-container textType=\"hideContnet\">\n          <app-ui-form-checkbox2 [nxValue]=\"false\">\n              <ng-container checkboxText=\"style1\">\u9577\u5BEC</ng-container>\n            </app-ui-form-checkbox2>\n      </ng-container>\n      \n    </app-ui-collapse-group>\n\n\n  <h3 class=\"title-in-cp\">\u8868\u55AE-checkbox2</h3>\n  <app-ui-form-checkbox2 [isDisable]=\"false\" [(nxValue)]=\"testcb2_1\">\n    <ng-container checkboxText=\"style1\">\u9810\u8A2D\u6C92\u9078</ng-container>\n  </app-ui-form-checkbox2>\n  <app-ui-form-checkbox2 [isDisable]=\"false\" [nxValue]=\"true\">\n    <ng-container checkboxText=\"style1\">\u9810\u8A2D\u6709\u9078</ng-container>\n  </app-ui-form-checkbox2>\n  <app-ui-form-checkbox2 [isDisable]=\"false\" [nxValue]=\"false\">\n    <ng-container checkboxText=\"style1\">\u4F46\u5BEC\u5EA6\u6703\u96A8\u5167\u5BB9\u9577\u5BEC</ng-container>\n  </app-ui-form-checkbox2>\n  <app-ui-form-checkbox2 [isDisable]=\"true\" [nxValue]=\"false\">\n    <ng-container checkboxText=\"style1\">\u4E0D\u80FD\u9EDE\u9078\u7684\u7BC4\u4F8B</ng-container>\n  </app-ui-form-checkbox2>\n  <app-ui-form-checkbox2 [isDisable]=\"false\" [nxValue]=\"false\">\n    <ng-container checkboxText=\"style1\">\u9577\u5BEC</ng-container>\n  </app-ui-form-checkbox2>\n  <app-ui-form-checkbox2 [isDisable]=\"false\" [nxValue]=\"false\">\n    <ng-container checkboxText=\"style1\">\u9577\u5BEC</ng-container>\n  </app-ui-form-checkbox2>\n\n  <h3 class=\"title-in-cp\">\u8868\u55AE-checkbox3-\u8CC7\u6599\u689D\u5217\u7684checkbox</h3>\n  <app-ui-form-checkbox3 [isDisable]=\"false\" [nxValue]=\"false\">\n    <ng-container checkboxText=\"style3\">Ruby Sparks</ng-container>\n  </app-ui-form-checkbox3>\n  <app-ui-form-checkbox3 [isDisable]=\"false\" [nxValue]=\"false\">\n    <ng-container checkboxText=\"style3\">HEllO WORLD</ng-container>\n  </app-ui-form-checkbox3>\n  <app-ui-form-checkbox3 [isDisable]=\"false\" [nxValue]=\"false\">\n    <ng-container checkboxText=\"style3\">\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577</ng-container>\n  </app-ui-form-checkbox3>\n  <app-ui-form-checkbox3 [isDisable]=\"false\" [nxValue]=\"false\">\n    <ng-container checkboxText=\"style3\">HEllO YOYOYO</ng-container>\n  </app-ui-form-checkbox3>\n\n\n\n  <!-- ratio button -->\n  <h3 class=\"title-in-cp\">\u8868\u55AE-radioBtn</h3>\n  <app-ui-form-radio-group [(nxValue)]=\"test_radio\">\n    <app-ui-form-radio [disabled]=\"false\" [isCheck]=\"false\" [value]=\"'R1'\">\n      <ng-container radioText=\"style1\">\u4E00\u822C\u9805\u76EE</ng-container>\n    </app-ui-form-radio>\n    <app-ui-form-radio [disabled]=\"true\" [isCheck]=\"false\" [value]=\"'R2'\">\n      <ng-container radioText=\"style1\">\u793A\u7BC4\u4E0D\u80FD\u9EDE\u7684\u9078\u9805</ng-container>\n    </app-ui-form-radio>\n    <app-ui-form-radio [disabled]=\"true\" [isCheck]=\"true\" [value]=\"'R3'\">\n      <ng-container radioText=\"style1\">\u793A\u7BC4\u4E0D\u80FD\u9EDE\u7684\u9078\u9805</ng-container>\n    </app-ui-form-radio>\n    <app-ui-form-radio [disabled]=\"false\" [isCheck]=\"false\" [value]=\"'R4'\">\n      <ng-container radioText=\"style1\">\u4E00\u822C\u9805\u76EE</ng-container>\n    </app-ui-form-radio>\n  </app-ui-form-radio-group>\n\n\n  <!-- end of radio button -->\n  <h3 class=\"title-in-cp\">\u8868\u55AE-radioBtn 2</h3>\n  <app-ui-form-radio-group [(nxValue)]=\"test_radio3\">\n      <app-ui-form-radio2 [disabled]=\"true\" [value]=\"'R2_1'\">\n          \u4E00\u822C\u9805\u76EE {{test_radio3}}\n      </app-ui-form-radio2>\n      <app-ui-form-radio2 [value]=\"'R2_2'\">\n          \u4E00\u822C\u9805\u76EE\u4E00\u822C\u9805\u76EE\u4E00\u822C\u9805\u76EE  \n      </app-ui-form-radio2>\n      <app-ui-form-radio2 [value]=\"'R2_3'\">\n          \u4E00\u822C\u9805\u76EE\u4E00\u822C\u9805\u76EE\u4E00\u822C\u9805\u76EE  \n      </app-ui-form-radio2>\n  </app-ui-form-radio-group>\n  \n\n  <h3 class=\"title-in-cp\">\u8868\u55AE-input</h3>\n  <app-ui-form-input [(nxValue)]=\"inputText1\" [maxLength]=\"10\" [inputTitle]=\"'\u4E00\u822C\u8F38\u5165\u6846'\" [name]=\"'input1'\" [placeholder]=\"'\u8ACB\u8F38\u5165'\"\n    [isDisable]=\"false\"></app-ui-form-input>\n  <p>out Input: {{inputText1}}</p>\n  <app-ui-form-input [(nxValue)]=\"inputText1\" [maxLength]=\"\"  [inputTitle]=\"'\u6709\u55AE\u4F4D\u7684\u8F38\u5165\u6846'\" [name]=\"'input1'\" [placeholder]=\"'\u8ACB\u8F38\u5165'\"\n    [isDisable]=\"false\">/Case</app-ui-form-input>\n  <app-ui-form-input [(nxValue)]=\"inputText2\" [inputTitle]=\"'\u7F6E\u4E2D\u8F38\u5165\u6846'\" [name]=\"'input2'\" [placeholder]=\"'\u6578\u5B57\u7F6E\u4E2D'\"\n    [isDisable]=\"false\" [typeUi]=\"'style2'\"></app-ui-form-input>\n  <p>out Input: {{inputText2}}</p>\n  <app-ui-btn (ClickBtn)=\"toggleErrorStatus()\"><ng-container TextType=\"cust\">\u6539\u8B8AErrorStatus</ng-container></app-ui-btn>\n  <app-ui-form-input [(nxValue)]=\"inputText1\" [(isError)]=\"isInputError\" [inputTitle]=\"'ErrorStatus'\" [name]=\"'input1'\" [placeholder]=\"'\u8ACB\u8F38\u5165'\"\n    [isDisable]=\"false\"></app-ui-form-input>\n  <app-ui-form-input [inputTitle]=\"'\u6709\u8A0A\u606F\u7684\u8F38\u5165\u6846'\" [name]=\"'input3'\" [placeholder]=\"'\u8ACB\u8F38\u51652'\" [typeUi]=\"'style3'\"></app-ui-form-input>\n  <app-ui-form-input [inputTitle]=\"'disable\u7684\u8F38\u5165\u6846'\" [name]=\"'input4'\" [placeholder]=\"'\u8ACB\u8F38\u51653'\" [typeUi]=\"'style1'\"\n    [isDisable]=\"true\" class=\"disable\"></app-ui-form-input>\n\n  <h3 class=\"title-in-cp\">\u8868\u55AE-input-search</h3>\n  <app-ui-form-search [name]=\"'search'\" [placeholder]=\"'Search by Name'\" [(nxValue)]=\"testSearch\"></app-ui-form-search>\n\n\n  <h3 class=\"title-in-cp\">\u8868\u55AE-select</h3>\n  <app-ui-btn (click)=\"selectErrorClick()\"><ng-container TextType=\"cust\" >\u932F\u8AA4\u72C0\u614B\u6539\u8B8A</ng-container></app-ui-btn>\n  <div style=\"margin-bottom: 50px;\">\n    <app-ui-form-select [selectTitle]=\"'\u6E2C\u8A66\u6A19\u984C'\" [selectOption]='options' [(isError)]=\"isSelectError\" [(nxValue)]=\"testValue\"></app-ui-form-select>\n  </div>\n  <div style=\"color:green;margin: 20px 0 50px 0;\">{{testValue}}</div>\n  <div style=\"margin-bottom: 50px;\">\n    <app-ui-form-select [selectTitle]=\"'\u7B2C\u4E8C\u500B'\" [selectOption]='options2' [(nxValue)]=\"testValue2\"></app-ui-form-select>\n  </div>\n  <div style=\"margin-bottom: 50px;\">\n    <app-ui-form-select [selectTitle]=\"'\u6E2C\u8A66'\" [selectOption]='options2' ></app-ui-form-select>\n  </div>\n  <div style=\"margin-bottom: 50px;\">\n    <app-ui-form-select [selectTitle]=\"'\u4E0D\u80FD\u9EDE\u7684select'\" [selectOption]='options2'  [(nxValue)]=\"testValue2\" [isDisable]='true'></app-ui-form-select>\n  </div>\n\n  <h3 class=\"title-in-cp\">\u8868\u55AE-errorMsg</h3>\n  <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n\n  <h3 class=\"title-in-cp\">\u8868\u55AE-\u5C0F\u65E5\u66C6</h3>\n  <app-ui-btn (click)=\"selectErrorClick()\"><ng-container TextType=\"cust\" >\u932F\u8AA4\u72C0\u614B\u6539\u8B8A</ng-container></app-ui-btn>\n  <app-ui-form-date [(isError)]=\"isSelectError\"></app-ui-form-date>\n  <app-ui-form-date [title]=\"'Test'\"></app-ui-form-date>\n  <app-ui-form-date [title]=\"'\u4E0D\u80FD\u9EDE\u7684\u5C0F\u65E5\u66C6'\" [isDisable]='true'></app-ui-form-date>\n\n  <h3 class=\"title-in-cp\">\u8868\u55AE-\u6642\u9593\u9078\u64C7\u5668</h3>\n  <app-ui-btn (click)=\"selectErrorClick()\"><ng-container TextType=\"cust\" >\u932F\u8AA4\u72C0\u614B\u6539\u8B8A</ng-container></app-ui-btn>\n  <app-ui-form-timepicker [(isError)]=\"isSelectError\"></app-ui-form-timepicker>\n  <br />\n  <app-ui-form-timepicker [(nxValue)]=\"test_datetimepicker\"></app-ui-form-timepicker>\n  <p>{{test_datetimepicker}}</p>\n\n  <h3 class=\"title-in-cp\">\u8868\u55AE-Switcher</h3>\n  <app-ui-form-switcher [(nxValue)]=\"test_switcher\"></app-ui-form-switcher>\n  <br />\n  <app-ui-form-switcher [labelTxt]=\"'Label'\"></app-ui-form-switcher>\n\n  <h3 class=\"title-in-cp\">\u8868\u55AE-\u8868\u55AELayout/\u8868\u55AEGroup</h3>\n  <!-- <app-ui-form-layout> -->\n    <div nxLayout='grid'>\n      <div>\n        <div nxRow>\n\n          <!-- <div class=\"form-group-block\"> -->\n          <div nxCol='12,6,6,6'>\n            <app-ui-form-input [inputTitle]=\"'Name'\" [name]=\"'Name'\" [placeholder]=\"'ex.LuLu'\" [isDisable]=\"false\"></app-ui-form-input>\n            <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n          </div>\n          <div nxCol='12,6,6,6'>\n            <app-ui-form-input [inputTitle]=\"''\" [name]=\"'Name2'\" [placeholder]=\"'ex.Marshall'\" [isDisable]=\"false\"></app-ui-form-input>\n            <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n          </div>\n          <!-- </div> -->\n        </div>\n      </div>\n\n      <div nxRow>\n        <!-- <div class=\"form-group-block\"> -->\n        <div nxCol='12,4,4,4'>\n          <app-ui-form-select [selectTitle]=\"\" [selectOption]='options' [(nxValue)]=\"test_select\"></app-ui-form-select>\n          <app-ui-form-error-msg></app-ui-form-error-msg>\n        </div>\n        <div nxCol='12,8,8,8'>\n          <app-ui-form-input [inputTitle]=\"\" [name]=\"'phoneDetail'\" [placeholder]=\"'Please enter'\" [isDisable]=\"false\"></app-ui-form-input>\n          <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n        </div>\n        <!-- </div> -->\n      </div>\n      <div nxRow>\n        <!-- <div class=\"form-group-block\"> -->\n        <div nxCol='12,4,4,3'>\n          <app-ui-form-select [selectTitle]=\"'\u6E2C\u8A66\u6A19\u984C'\" [selectOption]='options'></app-ui-form-select>\n          <app-ui-form-error-msg></app-ui-form-error-msg>\n        </div>\n        <div nxCol='12,4,4,2'>\n          <app-ui-form-select [selectTitle]=\"'\u6E2C\u8A66\u6A19\u984C'\" [selectOption]='options'></app-ui-form-select>\n          <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n        </div>\n        <div nxCol='12,4,4,7'>\n          <app-ui-form-select [selectTitle]=\"'\u6E2C\u8A66\u6A19\u984C'\" [selectOption]='options'></app-ui-form-select>\n          <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n        </div>\n        <!-- </div> -->\n      </div>\n      <div nxRow>\n        <div nxCol='12,4,4,3'>\n          <app-ui-form-select [selectTitle]=\"'\u6E2C\u8A66\u6A19\u984C'\" [selectOption]='options'></app-ui-form-select>\n          <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n        </div>\n        <div nxCol='12,4,4,2'>\n          <app-ui-form-select [selectTitle]=\"'\u6E2C\u8A66\u6A19\u984C'\" [selectOption]='options'></app-ui-form-select>\n          <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n        </div>\n        <div nxCol='12,4,4,7'>\n          <app-ui-form-select [selectTitle]=\"'\u6E2C\u8A66\u6A19\u984C'\" [selectOption]='options'></app-ui-form-select>\n          <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n        </div>\n      </div>\n    </div>\n  <!-- </app-ui-form-layout> -->\n\n  <h3 class=\"title-in-cp\">\u5BA2\u5236Grid Layout-\u9032\u968E\u7248</h3>\n  <div class=\"form-demo\">\n    <!-- \u6B63\u5F0F\u5728\u7528\u7684\u6642\u5019\uFF0C\u4E0D\u9700\u8981\u9019\u500Bdiv -->\n    <app-ui-form-layout-advanced>\n      <app-ui-form-layout-row>\n        <app-ui-form-layout-col [colPC]=\"1\" [colNB]=\"1\" [colPad]=\"1\" [colMobile]=\"1\">\n          COL-1\n        </app-ui-form-layout-col>\n        <app-ui-form-layout-col [colPC]=\"11\" [colNB]=\"11\" [colPad]=\"11\" [colMobile]=\"11\">\n          COL-11\n        </app-ui-form-layout-col>\n      </app-ui-form-layout-row>\n      <app-ui-form-layout-row>\n        <app-ui-form-layout-col [colPC]=\"2\" [colNB]=\"2\" [colPad]=\"2\" [colMobile]=\"2\">\n          COL-2\n        </app-ui-form-layout-col>\n        <app-ui-form-layout-col [colPC]=\"10\" [colNB]=\"10\" [colPad]=\"10\" [colMobile]=\"10\">\n          COL-10\n        </app-ui-form-layout-col>\n      </app-ui-form-layout-row>\n      <app-ui-form-layout-row>\n        <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"3\">\n          COL-3\n        </app-ui-form-layout-col>\n        <app-ui-form-layout-col [colPC]=\"9\" [colNB]=\"9\" [colPad]=\"9\" [colMobile]=\"9\">\n          COL-9\n        </app-ui-form-layout-col>\n      </app-ui-form-layout-row>\n      <app-ui-form-layout-row>\n        <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"4\" [colMobile]=\"4\">\n          COL-4\n        </app-ui-form-layout-col>\n        <app-ui-form-layout-col [colPC]=\"8\" [colNB]=\"8\" [colPad]=\"8\" [colMobile]=\"8\">\n          COL-8\n        </app-ui-form-layout-col>\n      </app-ui-form-layout-row>\n      <app-ui-form-layout-row>\n        <app-ui-form-layout-col [colPC]=\"5\" [colNB]=\"5\" [colPad]=\"5\" [colMobile]=\"5\">\n          COL-5\n        </app-ui-form-layout-col>\n        <app-ui-form-layout-col [colPC]=\"7\" [colNB]=\"7\" [colPad]=\"7\" [colMobile]=\"7\">\n          COL-7\n        </app-ui-form-layout-col>\n      </app-ui-form-layout-row>\n      <app-ui-form-layout-row>\n        <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n          COL-6\n        </app-ui-form-layout-col>\n        <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n          COL-6\n        </app-ui-form-layout-col>\n      </app-ui-form-layout-row>\n      <app-ui-form-layout-row>\n        <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"6\" [colPad]=\"8\" [colMobile]=\"12\">\n          COL-4\n        </app-ui-form-layout-col>\n        <app-ui-form-layout-col [colPC]=\"8\" [colNB]=\"6\" [colPad]=\"4\" [colMobile]=\"12\">\n          COL-8\n        </app-ui-form-layout-col>\n      </app-ui-form-layout-row>\n    </app-ui-form-layout-advanced>\n  </div>\n\n  <h3 class=\"title-in-cp\">\u5BA2\u5236\u8868\u55AELayout-\u9032\u968E\u7248</h3>\n  <app-ui-form-layout-advanced>\n    <!-- row1 -->\n    <app-ui-data-group>\n      <ng-container textType=\"dataContent\">\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n            <app-ui-form-input [inputTitle]=\"'Name'\" [name]=\"'Name'\" [placeholder]=\"'ex.LuLu'\" [isDisable]=\"false\"></app-ui-form-input>\n            <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n          <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n            <app-ui-form-input [inputTitle]=\"''\" [name]=\"'Name2'\" [placeholder]=\"'ex.Marshall'\" [isDisable]=\"false\"></app-ui-form-input>\n            <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n      </ng-container>>\n    </app-ui-data-group>\n    <!-- end of row1 -->\n    <!-- row2 -->\n    <app-ui-data-group [groupName]=\"'test1'\" [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-phone.svg'\">\n      <ng-container textType=\"dataContent\">\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"4\" [colMobile]=\"4\">\n            <app-ui-form-select [selectTitle]=\"''\" [selectOption]='options' [placeholder]=\"'Select'\"></app-ui-form-select>\n            <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n          <app-ui-form-layout-col [colPC]=\"8\" [colNB]=\"8\" [colPad]=\"8\" [colMobile]=\"8\" [hasRemove]=\"true\" (remove)=\"onRemove()\">\n            <app-ui-form-input [inputTitle]=\"''\" [name]=\"'Name2'\" [placeholder]=\"'ex.Please enter'\" [isDisable]=\"false\"></app-ui-form-input>\n            <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n          <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"12\" [hasAdd]=\"true\" (add)=\"onAdd()\"></app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n      </ng-container>\n    </app-ui-data-group>\n    <!-- end of row2 -->\n    <!-- row3 -->\n\n    <app-ui-data-group [groupName]=\"'test2'\" [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-mail.svg'\">\n      <ng-container textType=\"dataContent\">\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-input [inputTitle]=\"''\" [name]=\"''\" [placeholder]=\"'ex.abc123@xxx.com'\" [isDisable]=\"false\"></app-ui-form-input>\n            <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n      </ng-container>\n    </app-ui-data-group>\n\n    <!-- end of row3 -->\n    <!-- row4 -->\n    <app-ui-data-group>\n      <ng-container textType=\"dataContent\">\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col [colPC]=\"2\" [colNB]=\"2\" [colPad]=\"2\" [colMobile]=\"4\">\n            <app-ui-form-select [selectTitle]=\"''\" [selectOption]='options' [placeholder]=\"'Select'\"></app-ui-form-select>\n            <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n          <app-ui-form-layout-col [colPC]=\"5\" [colNB]=\"5\" [colPad]=\"5\" [colMobile]=\"4\">\n            <app-ui-form-select [selectTitle]=\"''\" [selectOption]='options' [placeholder]=\"'City'\"></app-ui-form-select>\n            <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n          <app-ui-form-layout-col [colPC]=\"5\" [colNB]=\"5\" [colPad]=\"5\" [colMobile]=\"4\">\n            <app-ui-form-select [selectTitle]=\"''\" [selectOption]='options' [placeholder]=\"'Area'\"></app-ui-form-select>\n            <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n          <app-ui-form-layout-col [colPC]=\"2\" [colNB]=\"2\" [colPad]=\"2\" [colMobile]=\"4\">\n            <app-ui-form-input [inputTitle]=\"''\" [name]=\"'Name2'\" [placeholder]=\"'Code'\" [isDisable]=\"false\"></app-ui-form-input>\n            <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n          <app-ui-form-layout-col [colPC]=\"10\" [colNB]=\"10\" [colPad]=\"10\" [colMobile]=\"8\">\n            <app-ui-form-input [inputTitle]=\"''\" [name]=\"'Name2'\" [placeholder]=\"'Address'\" [isDisable]=\"false\"></app-ui-form-input>\n            <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n\n        </app-ui-form-layout-row>\n      </ng-container>\n    </app-ui-data-group>\n    <!-- end of row4 -->\n\n    <!-- row5 -->\n    <app-ui-data-group>\n      <app-ui-form-layout-row>\n        <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n          <app-ui-form-date [title]=\"'Birthday'\"></app-ui-form-date>\n          <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n        </app-ui-form-layout-col>\n        <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n          <app-ui-form-select [selectTitle]=\"'Age'\" [selectOption]='options' [placeholder]=\"'Select'\"></app-ui-form-select>\n          <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n        </app-ui-form-layout-col>\n      </app-ui-form-layout-row>\n    </app-ui-data-group>\n    <!-- end of row5 -->\n\n\n  </app-ui-form-layout-advanced>\n\n  <h3 class=\"title-in-cp\">\u8907\u88FD\u5143\u7D20-(Form\u6709\u7528\u5230)</h3>\n\n  <h3 class=\"title-in-cp\">\u8CC7\u6599\u5217\u8868</h3>\n  <app-ui-form-checkbox3 [styleWeight]=\"'normal'\" [styleAlign]=\"'end'\" [isDisable]=\"false\" [nxValue]=\"false\">\n    <ng-container checkboxText=\"style3\">Select All</ng-container>\n  </app-ui-form-checkbox3>\n  <!-- 1st -->\n  <app-ui-list-data2>\n    <ng-container textType=\"title\">a</ng-container>\n    <!-- data -->\n    <ng-container textType=\"data\">\n      <app-ui-form-checkbox3 [isDisable]=\"false\" [nxValue]=\"false\">\n        <ng-container checkboxText=\"style3\">Ruby Sparks</ng-container>\n      </app-ui-form-checkbox3>\n      <app-ui-form-checkbox3 [isDisable]=\"false\" [nxValue]=\"false\">\n        <ng-container checkboxText=\"style3\">HEllO WORLD</ng-container>\n      </app-ui-form-checkbox3>\n      <app-ui-form-checkbox3 [isDisable]=\"false\" [nxValue]=\"false\">\n        <ng-container checkboxText=\"style3\">\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577</ng-container>\n      </app-ui-form-checkbox3>\n      <app-ui-form-checkbox3 [isDisable]=\"false\" [nxValue]=\"false\">\n        <ng-container checkboxText=\"style3\">HEllO YOYOYO</ng-container>\n      </app-ui-form-checkbox3>\n\n    </ng-container>\n    <!-- end of data -->\n  </app-ui-list-data2>\n  <!-- end of 1st -->\n  <!-- 2nd -->\n  <app-ui-list-data2>\n    <ng-container textType=\"title\">b</ng-container>\n    <!-- data -->\n    <ng-container textType=\"data\">\n      <app-ui-form-checkbox3 [isDisable]=\"false\" [nxValue]=\"false\">\n        <ng-container checkboxText=\"style3\">Ruby Sparks</ng-container>\n      </app-ui-form-checkbox3>\n      <app-ui-form-checkbox3 [isDisable]=\"false\" [nxValue]=\"false\">\n        <ng-container checkboxText=\"style3\">HEllO WORLD</ng-container>\n      </app-ui-form-checkbox3>\n      <app-ui-form-checkbox3 [isDisable]=\"false\" [nxValue]=\"false\">\n        <ng-container checkboxText=\"style3\">\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577\u5B57\u5F88\u9577</ng-container>\n      </app-ui-form-checkbox3>\n      <app-ui-form-checkbox3 [isDisable]=\"false\" [nxValue]=\"false\">\n        <ng-container checkboxText=\"style3\">HEllO YOYOYO</ng-container>\n      </app-ui-form-checkbox3>\n    </ng-container>\n    <!-- end of data -->\n  </app-ui-list-data2>\n  <!-- end of 2nd -->\n\n\n\n\n\n  <p class=\"cp-desc\">\u53EF\u4EE5\u7528image</p>\n\n  <app-ui-data-group [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-mail.svg'\">\n    <!-- <ng-container textType=\"preContent\">\n\t\t\t<img src=\"assets/img/icon-form-addr.svg\">\n\t\t</ng-container>\t -->\n    <ng-container textType=\"dataContent\">\n      <app-ui-form-layout-row>\n        <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n          <app-ui-form-select [selectTitle]=\"''\" [selectOption]='options' [placeholder]=\"'Select'\"></app-ui-form-select>\n          <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n        </app-ui-form-layout-col>\n      </app-ui-form-layout-row>\n    </ng-container>\n  </app-ui-data-group>\n\n  <p class=\"cp-desc\">\u53EF\u4EE5\u653E\u5B89\u806Ficon</p>\n\n  <app-ui-data-group [isShowPreData]=\"true\" [iconType]=\"true\" [iconName]=\"'product-heart'\">\n    <!-- <ng-container textType=\"preContent\"> -->\n    <!-- <nx-icon name='product-heart' size='s'></nx-icon> -->\n    <!-- </ng-container>\t -->\n    <ng-container textType=\"dataContent\">\n      <app-ui-form-layout-row>\n        <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n          <app-ui-form-select [selectTitle]=\"''\" [selectOption]='options' [placeholder]=\"'Select'\"></app-ui-form-select>\n          <app-ui-form-error-msg>\u932F\u8AA4\u8A0A\u606F\u793A\u7BC4</app-ui-form-error-msg>\n        </app-ui-form-layout-col>\n      </app-ui-form-layout-row>\n    </ng-container>\n  </app-ui-data-group>\n\n\n\n\n\n\n  <h3 class=\"title-in-cp\">\u5171\u7528\u5143\u4EF6-\u9032\u5EA6\u689D</h3>\n  <app-ui-progress [value]=\"0.52\" [bgValue]=\"0.7\" [flagValue]=\"0.3\" [flagText]=\"'100%'\">Flag1</app-ui-progress>\n  <app-ui-progress [value]=\"0.5\" [isShowSideValue]=\"true\" [isShowValue]=\"true\">\u6709\u6578\u503C\u7684\u9032\u5EA6\u689D2</app-ui-progress>\n  <app-ui-progress [styleSize]=\"'lg'\" [value]=\"0.3\">\u8F03\u5927\u7684\u9032\u5EA6\u689D3</app-ui-progress>\n  <app-ui-progress [value]=\"0.5\" [isShowSideValue]=\"true\" [theme]=\"'pass'\"  [isShowValue]=\"true\">\u6709\u6578\u503C\u7684\u9032\u5EA6\u689D4</app-ui-progress>\n  <app-ui-progress [value]=\"0.9\" [isShowSideValue]=\"true\" [theme]=\"'error1'\" [isShowValue]=\"true\">\u6709\u6578\u503C\u7684\u9032\u5EA6\u689D5</app-ui-progress>\n  <app-ui-progress [value]=\"0.25\" [isShowSideValue]=\"true\"[theme]=\"'error2'\" [isShowValue]=\"true\">\u6709\u6578\u503C\u7684\u9032\u5EA6\u689D6</app-ui-progress>\n  <app-ui-progress [value]=\"0.25\" [isShowSideValue]=\"true\"[theme]=\"'main'\"  [isShowValue]=\"true\">\u6709\u6578\u503C\u7684\u9032\u5EA6\u689D7</app-ui-progress>\n  <app-ui-progress [value]=\"0.25\" [isShowSideValue]=\"true\"[theme]=\"'sub'\"   [isShowValue]=\"true\">\u6709\u6578\u503C\u7684\u9032\u5EA6\u689D8</app-ui-progress>\n  <app-ui-progress [textOnPercent]=\"'text'\" [isTextTop]=\"true\" [theme]=\"'error2'\" [styleSize]=\"'max'\" [value]=\"0.075\" [isShowValue]=\"true\" ></app-ui-progress>\n\n  <h3 class=\"title-in-cp\">\u5171\u7528\u5143\u4EF6-\u9032\u5EA6\u689D-\u5713\u5F62</h3>\n  <app-ui-progress-circle [value]=\"0.4\">\n    <div>test</div>\n  </app-ui-progress-circle>\n  <app-ui-progress-circle [value]=\"0.7\" [sizeR]=\"100\" [sizeStroke]=\"20\"></app-ui-progress-circle>\n  <app-ui-progress-circle [value]=\"1\" [sizeR]=\"15\" [sizeStroke]=\"2\"></app-ui-progress-circle>\n  <app-ui-progress-circle [value]=\"0\" [sizeR]=\"33\" [sizeStroke]=\"7\"></app-ui-progress-circle>\n  <!-- modal -->\n  <h3 class=\"title-in-cp\">ModalC-style3-\u5BA2\u88FD\u5316</h3>\n  <app-ui-btn-layout>\n    <app-ui-btn (ClickBtn)=\"isModalCOpen = !isModalCOpen\">\n      <ng-container TextType=\"cust\">ModalC</ng-container>\n    </app-ui-btn>\n  </app-ui-btn-layout>\n  <app-ui-modal-style-cust  [(isPopupOpen)]=\"isModalCOpen\">\n    HELLO\n  </app-ui-modal-style-cust>\n\n  \n  <!-- modal -->\n  \n  <h3 class=\"title-in-cp\">ModalA-style1-\u6587\u5B57\u7248</h3>\n  <!-- modal over 600px  -->\n  <app-ui-btn-layout>\n    <app-ui-btn (ClickBtn)=\"isModalAOpen = !isModalAOpen\">\n      <ng-container TextType=\"cust\">ModalA-\u6309\u9215Layout \u6E2C\u8A66\u5C0F\u7248\u4E0D\u84CB\u677F isMobileStyleFullPage \uFF1Dfalse</ng-container>\n    </app-ui-btn>\n  </app-ui-btn-layout>\n  \n  <app-ui-modal-style-text1 [isMobileStyleFullPage]=\"false\" [isHasBtmBlock]=\"false\" [(isPopupOpen)]=\"isModalAOpen\" [typeBtn]=\"'style1'\">\n      <ng-container textType=\"modal-title-detail\">Customer Filter</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n          <div style=\"height: 400px; background-color: burlywood; display: inline-block;\">\u6E2C\u8A66\u5F88\u9AD8</div>\n          \u5167\u5BB9\u6E2C\u8A66 <br/>  \u5167\u5BB9\u6E2C\u8A66 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>  \u5167\u5BB9\u6E2C\u8A66 <br/> \u5167\u5BB9\u6E2C\u8A66 <br/> \u5167\u5BB9\u6E2C\u8A66 <br/> \u5167\u5BB9\u6E2C\u8A66 <br/> \u5167\u5BB9\u6E2C\u8A66 <br/>\n      </ng-container>\n      <ng-container textType=\"modal-btm-detail\">\n        <app-ui-btn-layout>\n          <app-ui-btn [btnHeight]=\"'sm'\" [btnStyle]=\"'border'\">\n            <ng-container TextType=\"cust\">CLEAR</ng-container>\n          </app-ui-btn>\n          <app-ui-btn [btnHeight]=\"'sm'\">\n            <ng-container TextType=\"cust\">FILTER</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n      </ng-container>\n  </app-ui-modal-style-text1>\n  <!-- end of modal over 600px -->\n\n  <!-- modal over 600px  -->\n  <app-ui-btn-layout>\n      <app-ui-btn (ClickBtn)=\"isModalBOpen = !isModalBOpen\">\n        <ng-container TextType=\"cust\">ModalA-\u672A\u8D85\u904E600px</ng-container>\n      </app-ui-btn>\n  </app-ui-btn-layout>\n  <app-ui-modal-style-text1 class=\"wd-lg\" [isHasBtmBlock]=\"false\" [(isPopupOpen)]=\"isModalBOpen\" [typeBtn]=\"'style1'\">\n      <ng-container textType=\"modal-title-detail\">Customer Filter</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n          \u5167\u5BB9\u6E2C\u8A66 <br/> \u5167\u5BB9\u6E2C\u8A66 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>  \u5167\u5BB9\u6E2C\u8A66 <br/> \u5167\u5BB9\u6E2C\u8A66 <br/> \u5167\u5BB9\u6E2C\u8A66 <br/> \u5167\u5BB9\u6E2C\u8A66 <br/> \u5167\u5BB9\u6E2C\u8A66 <br/>\n      </ng-container>\n      <ng-container textType=\"modal-btm-detail\">\n        <app-ui-btn-layout>\n          <app-ui-btn [btnHeight]=\"'sm'\" [btnStyle]=\"'border'\">\n            <ng-container TextType=\"cust\">CLEAR</ng-container>\n          </app-ui-btn>\n          <app-ui-btn [btnHeight]=\"'sm'\">\n            <ng-container TextType=\"cust\">FILTER</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n      </ng-container>\n  </app-ui-modal-style-text1>\n  <!-- end of modal over 600px -->\n\n  <h3 class=\"title-in-cp\">ModalA-Img-\u5716\u6587\u7248</h3>\n\n  <app-ui-btn-layout>\n    <app-ui-btn (ClickBtn)=\"isModalImgOpen1 = !isModalImgOpen1\">\n      <ng-container TextType=\"cust\">ModalA-\u6309\u9215Layout</ng-container>\n    </app-ui-btn>\n  </app-ui-btn-layout>\n  <app-ui-modal-style-img-base [isHasBtmBlock]=\"false\" class=\"wd-sm\" [(isPopupOpen)]=\"this.isModalImgOpen1\" [typeBtn]=\"'style1=2'\">\n      <ng-container textType=\"modal-img-detail\">\n          <nx-icon name='phone-o' size='auto'></nx-icon>\n        </ng-container>\n        <ng-container textType=\"modal-title-detail\">\u5716\u6587\u7248POPUP0</ng-container>\n        <ng-container textType=\"modal-content-detail\">\n          <app-ui-link-bg [textTitle]=\"'Home'\" [text]=\"'0911-111-444'\" (linkBtnClick)=\"onBtnLinkClick($event)\"></app-ui-link-bg>\n          <app-ui-link-bg [text]=\"'0911-111-123'\" (linkBtnClick)=\"onBtnLinkClick($event)\"></app-ui-link-bg>\n        </ng-container>\n        <!-- end modal-content-detail -->\n        <ng-container textType=\"modal-btm-detail\">\n          <!-- btn -->\n          <app-ui-btn-layout>\n            <app-ui-btn [btnColor]=\"'grey'\" [btnStyle]=\"'text'\" [btnWd]=\"'sm'\" (ClickBtn)=\"isModalImgOpen1 = !isModalImgOpen1\">\n              <ng-container TextType=\"cust\">\u9EDE\u6211\u95DC\u9589 Popup</ng-container>\n            </app-ui-btn>\n          </app-ui-btn-layout>\n          <!-- end of btn -->\n        </ng-container>\n        <!-- end modal-btm-detail -->\n  </app-ui-modal-style-img-base>\n\n  <app-ui-btn-layout>\n      <app-ui-btn (ClickBtn)=\"isModalImgOpen2 = !isModalImgOpen2\">\n        <ng-container TextType=\"cust\">ModalB-t</ng-container>\n      </app-ui-btn>\n    </app-ui-btn-layout>\n    <app-ui-modal-style-img-base (onScrollContentBtm)=\"detectScroll($event)\" class=\"wd-sm\" [(isPopupOpen)]=\"this.isModalImgOpen2\" [typeBtn]=\"'style1=2'\">\n        <ng-container textType=\"modal-img-detail\">\n            <nx-icon name='phone-o' size='auto'></nx-icon>\n          </ng-container>\n          <ng-container textType=\"modal-title-detail\">\u5716\u6587\u7248POPUP0</ng-container>\n          <ng-container textType=\"modal-content-detail\">\n            <div style=\"height: 400px; background-color: pink\"></div>\n            <app-ui-link-bg [textTitle]=\"'Home'\" [text]=\"'0911-111-444'\" (linkBtnClick)=\"onBtnLinkClick($event)\"></app-ui-link-bg>\n            <app-ui-link-bg [text]=\"'0911-111-123'\" (linkBtnClick)=\"onBtnLinkClick($event)\"></app-ui-link-bg>\n          </ng-container>\n          <!-- end modal-content-detail -->\n          <ng-container textType=\"modal-btm-detail\">\n            <!-- btn -->\n            <app-ui-btn-layout>\n              <app-ui-btn [btnColor]=\"'grey'\" [btnStyle]=\"'text'\" [btnWd]=\"'sm'\" (ClickBtn)=\"isModalImgOpen2 = !isModalImgOpen2\">\n                <ng-container TextType=\"cust\">\u9EDE\u6211\u95DC\u9589 Popup</ng-container>\n              </app-ui-btn>\n            </app-ui-btn-layout>\n            <!-- end of btn -->\n          </ng-container>\n          <!-- end modal-btm-detail -->\n    </app-ui-modal-style-img-base>\n\n  <!-- <app-ui-modal-style-img-base></app-ui-modal-style-img-base> -->\n  <!-- end of modal -->\n\n\n\n\n\n  <!-- popup system -->\n  <h3 class=\"title-in-cp\">POPUP-system-\u539F\u751FPOPUP</h3>\n  <!-- end of popup system -->\n\n  <app-ui-btn [btnColor]=\"'light2'\" (ClickBtn)=\"isPopupAlertOpen = true\">\n    <ng-container TextType=\"cust\">Popup System \u9EDE\u62112</ng-container>\n  </app-ui-btn>\n\n  <app-ui-modal-confirm #uiAlert [(isPopupOpen)]=\"isPopupAlertOpen\" (onCancel)=\"onAlertCancel()\" (onConfirm)=\"onAlertConfirm()\" [title]=\"'Confirm'\"\n    [message]=\"'Look here!'\" [cancelBtnText]=\"'No'\" [confirmBtnText]=\"'Yes'\">\n  </app-ui-modal-confirm>\n\n  <app-ui-modal-confirm #uiAlert [hasCancelBtn]=\"false\" [isPopupOpen]=\"true\" (onConfirm)=\"onAlertConfirm()\" [title]=\"'Confirm'\"\n    [message]=\"'Test One button!'\"  [confirmBtnText]=\"'Yes'\">\n  </app-ui-modal-confirm>\n\n  <!-- <h3 class=\"title-in-cp\">\u5171\u7528\u5143\u4EF6-System alert</h3>\n\t<button (click)=\"uiAlert.onClick($event)\">Click</button>\n\n\t<app-ui-modal-confirm #uiAlert (onCancel)=\"onAlertCancel()\" (onConfirm)=\"onAlertConfirm()\" [title]=\"'Confirm'\" [message]=\"'Look here!'\" [cancelBtnText]=\"'No'\" [confirmBtnText]=\"'Yes'\">\n  </app-ui-modal-confirm> -->\n\n  <!-- popup feedback -->\n  <h3 class=\"title-in-cp\">POPUP-feedback-\u539F\u751Ffeedback</h3>\n  <h5>feedback: {{isPopupFeedbackOpen}}</h5>\n  <app-ui-btn [btnColor]=\"'light2'\" (ClickBtn)=\"isPopupFeedbackOpen = true\">\n    <ng-container TextType=\"cust\">Popup Feedback \u9EDE\u6211</ng-container>\n  </app-ui-btn>\n  <app-ui-modal-style-feedback [(isPopupOpen)]=\"isPopupFeedbackOpen\">\n    <ng-container textType=\"modal-img-detail\">\n      <nx-icon name='check' size='auto'></nx-icon>\n    </ng-container>\n    <ng-container textType=\"modal-content-detail\">\u904E\u5169\u79D2\u6D88\u5931</ng-container>\n  </app-ui-modal-style-feedback>\n  <!-- end of popup feedback -->\n\n  <!-- popup menu -->\n  <h3 class=\"title-in-cp\">POPUP-\u4E3B\u9078\u55AE</h3>\n  <app-ui-btn [btnColor]=\"'light2'\" (ClickBtn)=\"isPopupMenuOpen = true\">\n    <ng-container TextType=\"cust\">Popup Menu \u9EDE\u6211</ng-container>\n  </app-ui-btn>\n\n  <app-ui-modal-style-menu [(isPopupOpen)]=\"isPopupMenuOpen\">\n    <ng-container popupBlock=popup-title>MAIN MENU</ng-container>\n    <ng-container popupBlock=popup-content>Content</ng-container>\n  </app-ui-modal-style-menu>\n  <!-- end: popup menu -->\n\n  <h3 class=\"title-in-cp\">\u5171\u7528\u5143\u4EF6-\u52A0\u5165\u6536\u85CF</h3>\n  <app-ui-btn-like-add [isLike]=\"true\"></app-ui-btn-like-add>\n\n  <!-- button -->\n  <h3 class=\"title-in-cp\">\u5171\u7528\u5143\u4EF6-\u6309\u9215</h3>\n  <!-- \u5BA2\u88FD -->\n  <app-ui-btn-layout>\n    <app-ui-btn [name]=\"'btn-default'\" (ClickBtn)=\"onClickBtn($event)\">\n      <ng-container TextType=\"cust\">\u6709\u50B3\u51FA\u4E8B\u4EF6\u7684\u9810\u8A2D\u6309\u9215</ng-container>\n    </app-ui-btn>\n  </app-ui-btn-layout>\n\n  <app-ui-btn-layout>\n    <app-ui-btn [btnColor]=\"'main1'\" [btnWd]=\"'lg'\" [btnHeight]=\"'default'\">\n      <ng-container TextType=\"cust\">\u6B21\u8981\u6309\u9215</ng-container>\n    </app-ui-btn>\n    <app-ui-btn [btnColor]=\"'main1'\" [btnStyle]=\"'border'\" [btnWd]=\"'lg'\" [btnHeight]=\"'default'\">\n      <ng-container TextType=\"cust\">\u6B21\u8981\u6309\u9215\u6846\u6846</ng-container>\n    </app-ui-btn>\n    <app-ui-btn [btnColor]=\"'light2'\" [btnWd]=\"'md'\" [btnHeight]=\"'default'\">\n      <ng-container TextType=\"cust\">\u6B21\u8981\u5BECmd\u6EFF\u6309\u9215</ng-container>\n    </app-ui-btn>\n    <app-ui-btn [btnColor]=\"'main1'\" [btnWd]=\"'sm'\" [btnHeight]=\"'default'\">\n      <ng-container TextType=\"cust\">\u6B21\u8981\u5BECsm\u6309\u9215</ng-container>\n    </app-ui-btn>\n  </app-ui-btn-layout>\n\n  <app-ui-btn-layout>\n    <app-ui-btn [btnColor]=\"'light1'\" [btnStyle]=\"'border'\" [btnWd]=\"'lg'\" [btnHeight]=\"'sm'\">\n      <ng-container TextType=\"cust\">H\u5C0FW\u5927\u6309\u9215\u6846\u6846\u7248</ng-container>\n    </app-ui-btn>\n    <app-ui-btn [btnColor]=\"'light1'\" [btnWd]=\"'md'\" [btnHeight]=\"'sm'\">\n      <ng-container TextType=\"cust\">H\u5C0FW\u4E2D\u6309\u9215</ng-container>\n    </app-ui-btn>\n    <app-ui-btn [btnColor]=\"'light1'\" [btnWd]=\"'sm'\" [btnHeight]=\"'sm'\">\n      <ng-container TextType=\"cust\">H\u5C0FW\u5C0F\u6309\u9215</ng-container>\n    </app-ui-btn>\n\n  </app-ui-btn-layout>\n\n  <app-ui-btn-layout>\n    <app-ui-btn [isDisable]=\"false\" [btnColor]=\"'light1'\" [btnWd]=\"'md'\" [btnHeight]=\"'sm'\">\n      <ng-container TextType=\"cust\">\u4E0D\u80FD\u6309\u7684\u6309\u9215</ng-container>\n    </app-ui-btn>\n    <app-ui-btn [isDisable]=\"true\" [btnColor]=\"'light2'\" [btnWd]=\"'md'\" [btnHeight]=\"'sm'\">\n      <ng-container TextType=\"cust\">\u4E0D\u80FD\u6309\u7684\u6309\u9215</ng-container>\n    </app-ui-btn>\n    <app-ui-btn [isDisable]=\"true\" [btnColor]=\"'main2'\" [btnWd]=\"'md'\" [btnHeight]=\"'sm'\">\n      <ng-container TextType=\"cust\">\u4E0D\u80FD\u6309\u7684\u6309\u9215</ng-container>\n    </app-ui-btn>\n    <app-ui-btn [isDisable]=\"true\" [btnColor]=\"'main2'\" [btnStyle]=\"'border'\" [btnWd]=\"'md'\" [btnHeight]=\"'sm'\">\n      <ng-container TextType=\"cust\">\u4E0D\u80FD\u6309\u7684\u6309\u9215</ng-container>\n    </app-ui-btn>\n  </app-ui-btn-layout>\n\n  <app-ui-btn-layout>\n\n    <app-ui-btn [btnColor]=\"'grey'\" [btnStyle]=\"'text'\" [btnWd]=\"'sm'\">\n      <ng-container TextType=\"cust\">\u53EA\u6709\u6587\u5B57\u7684\u6309\u9215</ng-container>\n    </app-ui-btn>\n  </app-ui-btn-layout>\n\n  <app-ui-btn-layout>\n    <app-ui-btn [btnColor]=\"'main1'\" [btnWd]=\"'md'\" [btnHeight]=\"'sm'\">\n      <ng-container TextType=\"cust\">\u6B21\u8981\u6309\u9215</ng-container>\n    </app-ui-btn>\n    <app-ui-btn [btnColor]=\"'main1'\" [btnStyle]=\"'text'\" [btnWd]=\"'md'\" [btnHeight]=\"'sm'\">\n      <ng-container TextType=\"cust\">\u53EA\u6709\u6587\u5B57\u7684\u6309\u9215</ng-container>\n    </app-ui-btn>\n  </app-ui-btn-layout>\n\n  <app-ui-btn-layout>\n    <app-ui-btn [btnColor]=\"'main2'\" [btnStyle]=\"'text'\" [btnWd]=\"'sm'\">\n      <ng-container TextType=\"cust\">\u53EA\u6709\u6587\u5B57\u7684\u6309\u9215</ng-container>\n    </app-ui-btn>\n  </app-ui-btn-layout>\n\n  <app-ui-btn-layout>\n    <app-ui-btn [btnColor]=\"'light1'\" [btnStyle]=\"'text'\" [btnWd]=\"'sm'\">\n      <ng-container TextType=\"cust\">\u53EA\u6709\u6587\u5B57\u7684\u6309\u9215</ng-container>\n    </app-ui-btn>\n  </app-ui-btn-layout>\n\n  <app-ui-btn-layout>\n    <app-ui-btn [btnColor]=\"'light2'\" [btnStyle]=\"'text'\" [btnWd]=\"'sm'\">\n      <ng-container TextType=\"cust\">\u53EA\u6709\u6587\u5B57\u7684\u6309\u9215</ng-container>\n    </app-ui-btn>\n  </app-ui-btn-layout>\n\n\n\n\n  <h3 class=\"title-in-cp\">\u5171\u7528\u5143\u4EF6-Item Sliding</h3>\n  <app-ui-item-sliding>\n    <app-ui-item (onItemClick)=\"itemClick()\">\n      <!--  item \u5167\u5BB9\u8981\u653E\u5728\u542B\u6709 ui-item-content \u7684\u5C6C\u6027\u5167 -->\n      <div ui-item-content class=\"item\">\n        <p class=\"title\">\u6A19\u984C</p>\n        <p class=\"desc\">\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0</p>\n      </div>\n\n      <!-- \u5DE6\u6ED1\u5448\u73FE\u9078\u9805\uFF0C\u653E\u5728\u5C6C\u6027 side=\"start\" \u4E2D -->\n      <app-ui-item-options side=\"start\">\n        <!-- \u9078\u9805\u653E\u5728 app-ui-item-option \u4E2D\uFF0C\u53EF\u70BA HTML \u7D50\u69CB\u6216\u5B57\u4E32 -->\n        <app-ui-item-option (onItemOptionClick)=\"itemOptionClick()\">\n          <div class=\"icon\">\n            <img src=\"assets/img/icon-like-active.svg\" />\n          </div>\n        </app-ui-item-option>\n      </app-ui-item-options>\n\n      <!-- \u53F3\u6ED1\u5448\u73FE\u9078\u9805\uFF0C\u653E\u5728\u5C6C\u6027 side=\"end\" \u4E2D -->\n      <app-ui-item-options side=\"end\">\n        <app-ui-item-option (onItemOptionClick)=\"itemOptionClick()\">Edit</app-ui-item-option>\n        <app-ui-item-option (onItemOptionClick)=\"itemOptionClick()\">Delete</app-ui-item-option>\n      </app-ui-item-options>\n    </app-ui-item>\n\n\n    <app-ui-item (onItemClick)=\"itemClick()\">\n      <!--  item \u5167\u5BB9\u8981\u653E\u5728\u542B\u6709 ui-item-content \u7684\u5C6C\u6027\u5167 -->\n      <div ui-item-content class=\"item\">\n        <p class=\"title\">Title</p>\n        <p class=\"desc\">While there is life, there is hope. Keep your face to the sunshine and you cannot see a shadow.</p>\n      </div>\n\n      <!-- \u5DE6\u6ED1\u5448\u73FE\u9078\u9805\uFF0C\u653E\u5728\u5C6C\u6027 side=\"start\" \u4E2D -->\n      <app-ui-item-options side=\"start\">\n        <!-- \u9078\u9805\u653E\u5728 app-ui-item-option \u4E2D\uFF0C\u53EF\u70BA HTML \u7D50\u69CB\u6216\u5B57\u4E32 -->\n        <app-ui-item-option (onItemOptionClick)=\"itemOptionClick()\">\n          <div class=\"icon\">\n            <img src=\"assets/img/icon-like-active.svg\" />\n          </div>\n        </app-ui-item-option>\n      </app-ui-item-options>\n\n      <!-- \u53F3\u6ED1\u5448\u73FE\u9078\u9805\uFF0C\u653E\u5728\u5C6C\u6027 side=\"end\" \u4E2D -->\n      <app-ui-item-options side=\"end\">\n        <app-ui-item-option (onItemOptionClick)=\"itemOptionClick()\">Edit</app-ui-item-option>\n        <app-ui-item-option (onItemOptionClick)=\"itemOptionClick()\">Delete</app-ui-item-option>\n      </app-ui-item-options>\n    </app-ui-item>\n  </app-ui-item-sliding>\n\n\n\n\n  <h3 class=\"title-in-cp\">\u5BA2\u6236\u5143\u4EF6-\u8CC7\u8A0A\u6587\u5B571</h3>\n  <app-ui-info-text1 [imgSrc]=\"'../assets/img/icon-form-phone.svg'\">\n    <ng-container textType=\"text\">+65 98765432</ng-container>\n  </app-ui-info-text1>\n  <app-ui-info-text1>\n    <ng-container textType=\"text\">+65 98765432</ng-container>\n  </app-ui-info-text1>\n\n  <h3 class=\"title-in-cp\">\u5BA2\u6236\u5143\u4EF6-\u8CC7\u8A0A\u6587\u5B57Layout</h3>\n  <!-- <app-ui-form-layout> -->\n    <div nxLayout='grid'>\n      <div nxRow>\n        <div nxCol='12,5,5,5'>\n          <app-ui-info-text1 [imgSrc]=\"'../assets/img/icon-form-phone.svg'\">\n            <ng-container textType=\"title\">Home</ng-container>\n            <ng-container textType=\"text\">+65 98765432</ng-container>\n          </app-ui-info-text1>\n        </div>\n        <div nxCol='12,7,7,7'>\n          <app-ui-info-text1>\n            <ng-container textType=\"title\">Home</ng-container>\n            <ng-container textType=\"text\">+65 98765432</ng-container>\n          </app-ui-info-text1>\n        </div>\n      </div>\n      <div nxRow>\n        <div nxCol='12,12,12,12'>\n          <app-ui-info-text1 [imgSrc]=\"'../assets/img/icon-form-mail.svg'\">\n            <ng-container textType=\"title\">Email</ng-container>\n            <ng-container textType=\"text\">+65 98765432</ng-container>\n          </app-ui-info-text1>\n        </div>\n      </div>\n      <div nxRow>\n        <div nxCol='12,12,12,12'>\n          <app-ui-info-text1 [imgSrc]=\"'../assets/img/icon-form-addr.svg'\">\n            <ng-container textType=\"title\">Company</ng-container>\n            <ng-container textType=\"text\">suvimon.techavicharchote@allianz.com</ng-container>\n          </app-ui-info-text1>\n        </div>\n      </div>\n    </div>\n    <app-ui-info-text1>\n      <ng-container textType=\"title\">Home</ng-container>\n      <ng-container textType=\"text\">+65 98765432</ng-container>\n    </app-ui-info-text1>\n  <!-- </app-ui-form-layout> -->\n\n  <h3 class=\"title-in-cp\">\u5BA2\u6236\u5143\u4EF6-\u8CC7\u8A0A\u6587\u5B57\u6536\u5408\u7D44</h3>\n\n  <app-ui-collapse-text1>\n    <!-- \u7B2C\u4E00\u7D44\u8CC7\u6599 \u7B2C\u4E00\u6392\u5DE6\u908A-->\n    <ng-container TextType=\"collapseContentOrigin\">\n      <app-ui-info-text1 [imgSrc]=\"'../assets/img/icon-form-phone.svg'\">\n        <ng-container textType=\"title\">Home</ng-container>\n        <ng-container textType=\"text\">+65 98765432</ng-container>\n      </app-ui-info-text1>\n    </ng-container>\n    <ng-container TextType=\"collapseContent\">\n      <app-ui-info-text1 [imgSrc]=\"'../assets/img/icon-form-phone.svg'\">\n        <ng-container textType=\"title\">Home2</ng-container>\n        <ng-container textType=\"text\">+65 98765432</ng-container>\n      </app-ui-info-text1>\n      <app-ui-info-text1 [imgSrc]=\"'../assets/img/icon-form-phone.svg'\">\n        <ng-container textType=\"title\">Home2</ng-container>\n        <ng-container textType=\"text\">+65 98765432</ng-container>\n      </app-ui-info-text1>\n    </ng-container>\n    <!-- end of \u7B2C\u4E00\u7D44\u8CC7\u6599 \u7B2C\u4E00\u6392\u5DE6\u908A-->\n\n    <!-- \u7B2C\u4E8C\u7D44\u8CC7\u6599 \u7B2C\u4E00\u6392\u53F3\u908A-->\n    <ng-container TextType=\"collapseContentOrigin2\">\n      <app-ui-info-text1>\n        <ng-container textType=\"title\">Phone</ng-container>\n        <ng-container textType=\"text\">+65 98765432</ng-container>\n      </app-ui-info-text1>\n    </ng-container>\n    <ng-container TextType=\"collapseContent2\">\n      <app-ui-info-text1>\n        <ng-container textType=\"title\">Phone</ng-container>\n        <ng-container textType=\"text\">+65 98765432</ng-container>\n      </app-ui-info-text1>\n      <app-ui-info-text1>\n        <ng-container textType=\"title\">Phone</ng-container>\n        <ng-container textType=\"text\">+65 98765432</ng-container>\n      </app-ui-info-text1>\n    </ng-container>\n    <!-- end of \u7B2C\u4E8C\u7D44\u8CC7\u6599 \u7B2C\u4E00\u6392\u53F3\u908A-->\n\n    <!-- \u7B2C\u4E09\u7D44\u8CC7\u6599-->\n    <ng-container TextType=\"collapseContentOrigin3\">\n      <app-ui-info-text1 [imgSrc]=\"'../assets/img/icon-form-mail.svg'\">\n        <ng-container textType=\"title\">Email</ng-container>\n        <ng-container textType=\"text\">+65 98765432</ng-container>\n      </app-ui-info-text1>\n    </ng-container>\n    <ng-container TextType=\"collapseContent3\">\n      <app-ui-info-text1 [imgSrc]=\"'../assets/img/icon-form-mail.svg'\">\n        <ng-container textType=\"title\">Email</ng-container>\n        <ng-container textType=\"text\">+65 98765432</ng-container>\n      </app-ui-info-text1>\n      <app-ui-info-text1 [imgSrc]=\"'../assets/img/icon-form-mail.svg'\">\n        <ng-container textType=\"title\">Email</ng-container>\n        <ng-container textType=\"text\">+65 98765432</ng-container>\n      </app-ui-info-text1>\n    </ng-container>\n    <!-- end of \u7B2C\u4E09\u7D44\u8CC7\u6599-->\n\n    <!-- \u7B2C\u56DB\u7D44\u8CC7\u6599-->\n    <ng-container TextType=\"collapseContentOrigin4\">\n      <app-ui-info-text1 [imgSrc]=\"'../assets/img/icon-form-addr.svg'\">\n        <ng-container textType=\"title\">Company</ng-container>\n        <ng-container textType=\"text\">suvimon.techavicharchote@allianz.com</ng-container>\n      </app-ui-info-text1>\n    </ng-container>\n    <ng-container TextType=\"collapseContent4\">\n      <app-ui-info-text1 [imgSrc]=\"'../assets/img/icon-form-addr.svg'\">\n        <ng-container textType=\"title\">Company</ng-container>\n        <ng-container textType=\"text\">suvimon.techavicharchote@allianz.com</ng-container>\n      </app-ui-info-text1>\n      <app-ui-info-text1 [imgSrc]=\"'../assets/img/icon-form-addr.svg'\">\n        <ng-container textType=\"title\">Company</ng-container>\n        <ng-container textType=\"text\">suvimon.techavicharchote@allianz.com</ng-container>\n      </app-ui-info-text1>\n    </ng-container>\n    <!-- end of \u7B2C\u56DB\u7D44\u8CC7\u6599-->\n    <!-- <ng-container TextType=\"collapseBtn\">\u6536\u5408\u6309\u9215</ng-container> -->\n  </app-ui-collapse-text1>\n\n  <h3 class=\"title-in-cp\">\u5BA2\u6236\u5143\u4EF6-\u6709tag\u7684\u5361\u7247</h3>\n  <app-ui-card-style-tag1>\n    <ng-container textType=\"tag\">Detail</ng-container>\n    <ng-container textType=\"cardContent\">Detail</ng-container>\n  </app-ui-card-style-tag1>\n\n  <h3 class=\"title-in-cp\">\u5BA2\u6236\u5143\u4EF6-\u8CC7\u8A0A\u6587\u5B572(\u8F03\u5927)</h3>\n  <app-ui-info-text2>\n    <ng-container textType=\"title\">Company</ng-container>\n    <ng-container textType=\"text\">suvimon.techavicharchote@allianz.com</ng-container>\n  </app-ui-info-text2>\n\n  <h3 class=\"title-in-cp\">\u5BA2\u6236\u5143\u4EF6-\u6536\u5408\u5361\u7247\u8CC7\u8A0A</h3>\n  <!-- <app-ui-collapse-card1 [tagText]=\"'Detail'\">\n    <ng-container textType=\"collapseContentOrigin\">\n      <div nxRow>\n        <div nxCol='12,6,6,6'>\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">Birthday</ng-container>\n            <ng-container textType=\"text\">1987/02/21</ng-container>\n          </app-ui-info-text2>\n        </div>\n        <div nxCol='12,6,6,6'>\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">Sex</ng-container>\n            <ng-container textType=\"text\">Female</ng-container>\n          </app-ui-info-text2>\n        </div>\n      </div>\n      <div nxRow>\n        <div nxCol='12,6,6,6'>\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">Occupation</ng-container>\n            <ng-container textType=\"text\">Procurement Manager</ng-container>\n          </app-ui-info-text2>\n        </div>\n        <div nxCol='12,6,6,6'>\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">Company</ng-container>\n            <ng-container textType=\"text\">NEUX</ng-container>\n          </app-ui-info-text2>\n        </div>\n      </div>\n      <div nxRow>\n        <div nxCol='12,6,6,6'>\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">Annual Income</ng-container>\n            <ng-container textType=\"text\">$75k - $99k</ng-container>\n          </app-ui-info-text2>\n        </div>\n        <div nxCol='12,6,6,6'>\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">Source</ng-container>\n            <ng-container textType=\"text\">School Friends</ng-container>\n          </app-ui-info-text2>\n        </div>\n      </div>\n      <div nxRow>\n        <div nxCol='12,6,6,6'>\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">Marriage</ng-container>\n            <ng-container textType=\"text\">Married</ng-container>\n          </app-ui-info-text2>\n        </div>\n        <div nxCol='12,6,6,6'>\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">Children</ng-container>\n            <ng-container textType=\"text\">3</ng-container>\n          </app-ui-info-text2>\n        </div>\n      </div>\n      <div nxRow>\n        <div nxCol='12,6,6,6'>\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">Familiarity</ng-container>\n            <ng-container textType=\"text\">Known(acquaintance)</ng-container>\n          </app-ui-info-text2>\n        </div>\n        <div nxCol='12,6,6,6'>\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">Recent status</ng-container>\n            <ng-container textType=\"text\">Newly married</ng-container>\n          </app-ui-info-text2>\n        </div>\n      </div>\n      <div nxRow>\n        <div nxCol='12,6,6,6'>\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">MANPA</ng-container>\n            <ng-container textType=\"text\">M:Ability to pay</ng-container>\n          </app-ui-info-text2>\n        </div>\n        <div nxCol='12,6,6,6'>\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">New</ng-container>\n            <ng-container textType=\"text\">New</ng-container>\n          </app-ui-info-text2>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container textType=\"collapseContent\">\n      <div nxRow>\n        <div nxCol='12,6,6,6'>\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">New</ng-container>\n            <ng-container textType=\"text\">New</ng-container>\n          </app-ui-info-text2>\n        </div>\n        <div nxCol='12,6,6,6'>\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">New</ng-container>\n            <ng-container textType=\"text\">NewNewNew</ng-container>\n          </app-ui-info-text2>\n        </div>\n      </div>\n    </ng-container>\n  </app-ui-collapse-card1> -->\n\n  <h3 class=\"title-in-cp\">\u9023\u7D50</h3>\n  <app-ui-link [isUnderLine]=\"false\" [imgSrc]=\"'../assets/img/icon-add-blue.svg'\" (onClick)=\"clickLinkImg($event)\">\n    <ng-container textType=\"linktext\">\u9023\u7D50\u793A\u7BC4</ng-container>\n  </app-ui-link>\n  <app-ui-link [isUnderLine]=\"false\" [isImgFront]=\"true\" [imgSrc]=\"'../assets/img/icon-add-blue.svg'\" (onClick)=\"clickLinkImg($event)\">\n    <ng-container textType=\"linktext\">\u5716\u5728\u524D\u9762\u9023\u7D50\u793A\u7BC4</ng-container>\n  </app-ui-link>\n  <app-ui-link>\n    <ng-container textType=\"linktext\">Add</ng-container>\n  </app-ui-link>\n\n  <h3 class=\"title-in-cp\">\u6A19\u984C+\u9023\u7D50</h3>\n\n  <h3 class=\"title-in-cp\">Tag1</h3>\n  <app-ui-form-radio-group [(nxValue)]=\"test_radio2\">\n    <app-ui-form-radio-tag class=\"COLD\" [value]=\"'cold'\" [disabled]=\"true\">COLD</app-ui-form-radio-tag>\n    <app-ui-form-radio-tag class=\"HOT\" [value]=\"'hot'\" [isCheck]=\"false\">HOT</app-ui-form-radio-tag>\n    <app-ui-form-radio-tag class=\"WARM\" [value]=\"'hot2'\">WARM</app-ui-form-radio-tag>\n    <app-ui-form-radio-tag class=\"WARM wd-lg\" [value]=\"'hot3'\">WARM</app-ui-form-radio-tag>\n    <app-ui-form-radio-tag class=\"WARM wd-max\" [value]=\"'hot4'\">WARM</app-ui-form-radio-tag>\n  </app-ui-form-radio-group>\n\n  <h3 class=\"title-in-cp\">\u5BA2\u6236\u5143\u4EF6-\u8CC7\u6599\u6E05\u55AE</h3>\n  <!-- <app-ui-list-data1></app-ui-list-data1> -->\n\n  <h3 class=\"title-in-cp\">\u5143\u4EF6-Title</h3>\n  <app-ui-title-style1>\n    <ng-container textType=\"titleText\">Customer list</ng-container>\n  </app-ui-title-style1>\n  <app-ui-title-style1 [isShowOther]=\"true\">\n    <ng-container textType=\"titleText\">\n      Customer list\n    </ng-container>\n    <ng-container textType=\"otherEle\">\n      <app-ui-link imgSrc=\"../assets/img/icon-add-blue.svg\">\n        <ng-container textType=\"linktext\">Add</ng-container>\n      </app-ui-link>\n    </ng-container>\n  </app-ui-title-style1>\n  <!-- ui-title-tab -->\n  <h3 class=\"title-in-cp\">app-ui-content-b-gap</h3>\n  <app-ui-content-b-gap [gapSize]=\"GAP_SIZE_40\">\n    <!-- [gapSize] \u53EF\u586BGAP_SIZE_20\u6216GAP_SIZE_40 -->\n    <app-ui-title-tab>\n      <!-- title-style1 -->\n      <app-ui-title-style1 class=\"space-ui-clear\" titleInfo>\n        <ng-container textType=\"titleText\">Customer listCustomer listCustomer list</ng-container>\n      </app-ui-title-style1>\n      <!-- end title-style1 -->\n\n      <!-- tab style1 -->\n      <app-ui-tab-style1 tabInfo (onTabChildClick)=\"tabStyle002Alert($event)\">\n        <!--[maxShow] \u63A7\u5236\u4E00\u6B21\u6700\u591A\u986F\u793A\u5E7E\u500Btab \u9810\u8A2D4\u500B-->\n        <app-ui-tab-child>tab1</app-ui-tab-child>\n        <app-ui-tab-child>tab2</app-ui-tab-child>\n      </app-ui-tab-style1>\n      <!-- end tab style1 -->\n    </app-ui-title-tab>\n  </app-ui-content-b-gap>\n  <app-ui-title-tab>\n    <!-- title-style1 -->\n    <app-ui-title-style1 class=\"space-ui-clear\" titleInfo>\n      <ng-container textType=\"titleText\">Customer listCustomer listCustomer listlistCustomer listCustomer\n        listlistCustomer listCustomer listlistCustomer listCustomer list</ng-container>\n    </app-ui-title-style1>\n    <!-- end title-style1 -->\n\n    <!-- tab style1 -->\n    <app-ui-tab-style2 tabInfo (onTabChildClick)=\"tabStyle002Alert($event)\">\n      <!--[maxShow] \u63A7\u5236\u4E00\u6B21\u6700\u591A\u986F\u793A\u5E7E\u500Btab \u9810\u8A2D4\u500B-->\n      <app-ui-tab-child>tab1</app-ui-tab-child>\n      <app-ui-tab-child>tab2</app-ui-tab-child>\n      <app-ui-tab-child>tab3</app-ui-tab-child>\n      <app-ui-tab-child>tab4</app-ui-tab-child>\n      <app-ui-tab-child>tab5</app-ui-tab-child>\n    </app-ui-tab-style2>\n    <!-- end tab style1 -->\n  </app-ui-title-tab>\n  <!-- end ui-title-tab -->\n  <!-- \u63A7\u5236\u4E0B\u9593\u8DDD -->\n  <h3 class=\"title-in-cp\">app-ui-content-b-gap</h3>\n  <app-ui-content-b-gap [gapSize]=\"GAP_SIZE_40\">\n    <!-- [gapSize] \u53EF\u586BGAP_SIZE_20\u6216GAP_SIZE_40 -->\n    <!-- tab-page -->\n    <h3 class=\"title-in-cp\">tab-page</h3>\n    <app-ui-tab-page (onTabChildClick)=\"tabStyle002Alert($event)\" [tabSwitchFirst]=\"'first'\" [tabSwitchSecond]=\"'titletext'\"\n      [openTab]=\"0\"></app-ui-tab-page>\n    <!-- end tab-page -->\n  </app-ui-content-b-gap>\n  <!-- end \u63A7\u5236\u4E0B\u9593\u8DDD -->\n\n  <!-- tab style1 -->\n  <h3 class=\"title-in-cp\">tab-style1</h3>\n  <app-ui-tab-style1 (onTabChildClick)=\"tabStyle002Alert($event)\" [maxShow]=\"4\" [tabIndex]=\"1\">\n    <!--[maxShow] \u63A7\u5236\u4E00\u6B21\u6700\u591A\u986F\u793A\u5E7E\u500Btab \u9810\u8A2D4\u500B-->\n    <app-ui-tab-child>tab1</app-ui-tab-child>\n    <app-ui-tab-child>tab2</app-ui-tab-child>\n    <app-ui-tab-child>tab3</app-ui-tab-child>\n    <app-ui-tab-child>tab4</app-ui-tab-child>\n    <app-ui-tab-child>tab5</app-ui-tab-child>\n    <app-ui-tab-child>tab6</app-ui-tab-child>\n  </app-ui-tab-style1>\n  <!-- end tab style1 -->\n\n  <!-- tab style2 -->\n  <h3 class=\"title-in-cp\">tab-style2</h3>\n  <app-ui-tab-style2 (onTabChildClick)=\"tabStyle002Alert($event)\" [maxShow]=\"3\" [tabIndex]=\"1\">\n    <!--[maxShow] \u63A7\u5236\u4E00\u6B21\u6700\u591A\u986F\u793A\u5E7E\u500Btab \u9810\u8A2D4\u500B-->\n    <app-ui-tab-child>tab1</app-ui-tab-child>\n    <app-ui-tab-child>tab2</app-ui-tab-child>\n    <app-ui-tab-child>tab3</app-ui-tab-child>\n    <app-ui-tab-child>tab4</app-ui-tab-child>\n    <app-ui-tab-child>tab5</app-ui-tab-child>\n    <app-ui-tab-child>tab6</app-ui-tab-child>\n  </app-ui-tab-style2>\n  <!-- end tab style2 -->\n  <!-- \u6B65\u9A5F\u689D 001 -->\n  <h3 class=\"title-in-cp\">step-1</h3>\n  <app-ui-content-b-gap [gapSize]=\"GAP_SIZE_20\">\n    <app-ui-progress-stepper-style [stepContral]=\"2\" [stepData]=\"testStepsData\" [stepType]=\"STEP_STYLE_1\">\n      <!--[stepContral]     \u7576\u4E0B\u7B2C\u5E7E\u6B65\u9A5F                \u9810\u8A2D:0\n\t\t\t\t[activeStepCheck] \u7576\u4E0B\u4E0D\u9112\u9700\u4E0D\u9700\u8981\u5448\u73FE\u6253\u52FEicon  \u9810\u8A2D:false\n\t\t\t\t\t\t\t\t  (TEPSTYLETYPE.STYLE_1\u6642\u4E0D\u5F71\u97FF)\n\t\t\t\t[stepData]        \u6B65\u9A5F\u689Ddata string[]        \u7121\u9810\u8A2D\n\t\t\t\t[stepType]        \u6B65\u9A5F\u689D\u7684\u6A23\u5F0F                \u9810\u8A2DTEPSTYLETYPE-->\n    </app-ui-progress-stepper-style>\n  </app-ui-content-b-gap>\n  <app-ui-progress-stepper-style [colorCode]=\"'#ff2244'\" [stepContral]=\"2\" [stepData]=\"testStepsData\" [stepType]=\"STEP_STYLE_1\">\n  </app-ui-progress-stepper-style>\n  <!-- end \u6B65\u9A5F\u689D 001 -->\n  <!-- \u6B65\u9A5F\u689D 002 -->\n  <h3 class=\"title-in-cp\">step-2</h3>\n  <app-ui-content-b-gap [gapSize]=\"GAP_SIZE_20\">\n    <app-ui-progress-stepper-style [stepContral]=\"1\" [activeStepCheck]=\"true\" [stepData]=\"testStepsData\" [stepType]=\"STEP_STYLE_2\">\n      <!--[stepContral]     \u7576\u4E0B\u7B2C\u5E7E\u6B65\u9A5F                \u9810\u8A2D:0\n\t\t\t\t[activeStepCheck] \u7576\u4E0B\u4E0D\u9112\u9700\u4E0D\u9700\u8981\u5448\u73FE\u6253\u52FEicon  \u9810\u8A2D:false\n\t\t\t\t\t\t\t\t  (TEPSTYLETYPE.STYLE_1\u6642\u4E0D\u5F71\u97FF)\n\t\t\t\t[stepData]        \u6B65\u9A5F\u689Ddata string[]        \u7121\u9810\u8A2D\n\t\t\t\t[stepType]        \u6B65\u9A5F\u689D\u7684\u6A23\u5F0F                \u9810\u8A2DTEPSTYLETYPE-->\n    </app-ui-progress-stepper-style>\n  </app-ui-content-b-gap>\n  <!-- end \u6B65\u9A5F\u689D 002 -->\n  <!-- \u6B65\u9A5F\u689D 002 -->\n  <h3 class=\"title-in-cp\">step-2-2</h3>\n  <app-ui-content-b-gap [gapSize]=\"GAP_SIZE_20\">\n    <app-ui-progress-stepper-style [stepContral]=\"1\" [activeStepCheck]=\"true\" [stepData]=\"testStepsData\" [stepType]=\"STEP_STYLE_2_2\">\n    </app-ui-progress-stepper-style>\n  </app-ui-content-b-gap>\n  <!-- end \u6B65\u9A5F\u689D 002 -->\n</div>\n  <!-- tab message -->\n  <h3 class=\"title-in-cp\">icon \u5206\u96E2</h3>\n  <div style=\"display: flex; justify-content: space-between;\">\n    <app-ui-information-btn [messageContent]=\"information1\" (onClick)=\"infoTabClick($event)\"></app-ui-information-btn>\n    <app-ui-information-btn [messageContent]=\"information1\" (onClick)=\"infoTabClick($event)\"></app-ui-information-btn>\n    <app-ui-information-btn [messageContent]=\"information2\" (onClick)=\"infoTabClick($event)\"><div style=\"width: 50px;height:50px;background-color:#444;\"></div></app-ui-information-btn>\n  </div>\n  <div (scroll)=\"resetInfoPos()\" style=\"width: 100%; height: 400px; overflow: auto;\" #scrollcontent>\n    <div style=\"width: 300%; height: 200%; background-color: #eee; position: relative;\">\n      <app-ui-information-btn [inputScrollContent]=\"scrollcontent\"  style=\"position: absolute; top: 40%; left: 50%;\" \n                              [inputAutoScrollContent]=\"scrollcontent\"\n                              [messageContent]=\"information3\"\n                              (onClick)=\"infoTabClick($event)\" ></app-ui-information-btn>\n    </div>\n  </div>\n  <app-ui-information-content #information1 (btnOnClick)=\"closeInfo()\" [defaultPos]=\"'bottom'\">\n    333333333333333333\n  </app-ui-information-content>\n  <app-ui-information-content #information2 (btnOnClick)=\"closeInfo()\" [defaultPos]=\"'bottom'\">\n    33333ddsdsdsdfsdfsdfsdfsadfsd\n  </app-ui-information-content>\n  <app-ui-information-content #information3 (btnOnClick)=\"closeInfo()\" [defaultPos]=\"'bottom'\">\n    333333333333333333\n  </app-ui-information-content>\n\n\n\n  <!-- info -->\n  <h3 class=\"title-in-cp\">info</h3>\n\n  <!-- <div  class=\"scroll-block\" style=\"width: 100%; overflow: hidden;overflow-y: auto; height: 460px; background-color: grey;\"> -->\n      <snd-ui-information [isPopupStyle]=\"false\"  [scrollContentSelector]=\"scrollBox\">\n          <ng-container info-content>\n            <div style=\"height:300px; width: 400px;  \">\n              show show show <br/>\n              show show show<br/>\n              show show show<br/>\n              show show show <br/>\n            </div>\n          </ng-container>  \n        </snd-ui-information>\n        <!-- end of info -->\n      \n      \n        <!-- info -->\n        <div style=\"display: flex; position: relative; height: 30px;\">\n            <snd-ui-information [isPopupStyle]=\"false\" [scrollContentSelector]=\"scrollBox\" style=\"position: absolute; right: 0;\">\n                <ng-container info-content>\n                  <div style=\"height:300px; width: 400px;  \">\n                    show show show <br/>\n                    show show show<br/>\n                    show show show<br/>\n                    show show show <br/>\n                  </div>\n                </ng-container>  \n              </snd-ui-information>\n        </div>\n        \n          <!-- end of info -->\n      \n          <!-- info -->\n        <div style=\"display: flex; position: relative; height: 30px;\">\n            <snd-ui-information [isPopupStyle]=\"false\" [scrollContentSelector]=\"scrollBox\" style=\"display: inline-block; position: absolute; left: 200px;\">\n                <ng-container info-content>\n                  <div style=\"height:300px; width: 400px;  \">\n                    show show show <br/>\n                    show show show<br/>\n                    show show show<br/>\n                    show show show <br/>\n                  </div>\n                </ng-container>  \n              </snd-ui-information>\n        </div>\n        \n          <!-- end of info -->\n\n  <!-- </div> -->\n\n  <!-- end of testgin scroll -->\n\n\n\n\n  <h3 class=\"title-in-cp\">form message</h3>\n  <h3 class=\"title-in-cp\">\u932F\u8AA4\u8A0A\u606F</h3>\n  <app-ui-form-layout-advanced>\n    <!-- row4 -->\n    <app-ui-data-group>\n      <ng-container textType=\"dataContent\">\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n            <app-ui-form-input [errorMagInfo]=\"errorMsg001\" [inputTitle]=\"''\" [name]=\"'Name2'\" [placeholder]=\"'ex.Marshall'\"\n              [isDisable]=\"false\"></app-ui-form-input>\n            <app-ui-form-error-msg-info [styleType]=\"'info'\" #errorMsg001>\n              <app-ui-form-error-msg-title [styleType]=\"'info'\" [showIcon]=\"true\">\n                test message test message\n              </app-ui-form-error-msg-title>\n              <app-ui-form-error-msg-list [styleType]=\"'warning'\">At least 8 characters</app-ui-form-error-msg-list>\n              <app-ui-form-error-msg-list [styleType]=\"'warning'\">Upper- and lowercase letters</app-ui-form-error-msg-list>\n              <app-ui-form-error-msg-list [styleType]=\"'warning'\">At least 1 special character</app-ui-form-error-msg-list>\n              <app-ui-form-error-msg-list [styleType]=\"'warning'\">At least 1 number</app-ui-form-error-msg-list>\n            </app-ui-form-error-msg-info>\n          </app-ui-form-layout-col>\n          <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n            <app-ui-form-select [errorMagInfo]=\"errorMsg002\" [selectTitle]=\"''\" [selectOption]='options' [placeholder]=\"'Area'\"></app-ui-form-select>\n            <app-ui-form-error-msg-info [styleType]=\"'success'\" #errorMsg002>\n              <app-ui-form-error-msg-title [styleType]=\"'success'\" [showIcon]=\"true\">\n                test message test message\n              </app-ui-form-error-msg-title>\n              <app-ui-form-error-msg-list [styleType]=\"'success'\">At least 8 characters</app-ui-form-error-msg-list>\n              <app-ui-form-error-msg-list [styleType]=\"'success'\">Upper- and lowercase letters</app-ui-form-error-msg-list>\n              <app-ui-form-error-msg-list [styleType]=\"'success'\">At least 1 special character</app-ui-form-error-msg-list>\n              <app-ui-form-error-msg-list [styleType]=\"'success'\">At least 1 number</app-ui-form-error-msg-list>\n            </app-ui-form-error-msg-info>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n      </ng-container>\n    </app-ui-data-group>\n    <!-- end of row4 -->\n  </app-ui-form-layout-advanced>\n\n  <h3 class=\"title-in-cp\">\u9023\u7D50\u80CC\u666F\u6587\u5B57\uFF0C\u53D6\u5F97\u81EA\u5DF1</h3>\n  <!-- \u9023\u7D50\u80CC\u666F\u6587\u5B57 -->\n  <app-ui-link-bg [textTitle]=\"'HOME'\" [text]=\"'0911-111-1444'\" (linkBtnClick)=\"onBtnLinkClick($event)\">\n  </app-ui-link-bg>\n  <!-- end of \u9023\u7D50\u80CC\u666F\u6587\u5B57 -->\n\n  <h3 class=\"title-in-cp\">\u80CC\u666F\u8272\u6587\u5B57</h3>\n  <b>\u203B \u7528\u65BC\uFF1A\u884C\u4E8B\u66C6-More \u4E8B\u4EF6\u6E05\u55AE\u3001\u884C\u4E8B\u66C6-Edit \u4E8B\u4EF6\u6E05\u55AE\u3001Reminder(\u63D0\u9192)</b>\n  <!-- \u80CC\u666F\u8272\u6587\u5B57: \u7121\u6A19\u984C\u3001\u5E95\u8272 -->\n  <app-ui-text-type>\n    <app-ui-text-type-item [colorCode]=\"'#CCDD61'\">\n      <p>11:30-12:30</p>\n      <p>Anny Shen</p>\n      <p>No. 8 Haji Lane #02-01, Singapore 1234567</p>\n    </app-ui-text-type-item>\n    <app-ui-text-type-item [colorCode]=\"'#fdd25c'\">\n      <p>11:30-12:30</p>\n      <p>Anny Shen</p>\n      <p>No. 8 Haji Lane #02-01, Singapore 1234567</p>\n    </app-ui-text-type-item>\n  </app-ui-text-type>\n  <!-- end \u80CC\u666F\u8272\u6587\u5B57 -->\n\n  <!-- \u80CC\u666F\u8272\u6587\u5B57: \u6709\u6A19\u984C\u3001\u5E95\u8272 -->\n  <app-ui-text-type [title]=\"'Today\\'s schedule'\" [colorCode]=\"'#f9f9f9'\">\n    <app-ui-text-type-item [colorCode]=\"'#CCDD61'\">\n      <p>11:30-12:30</p>\n      <p>Anny Shen</p>\n      <p>No. 8 Haji Lane #02-01, Singapore 1234567</p>\n    </app-ui-text-type-item>\n    <app-ui-text-type-item [colorCode]=\"'#fdd25c'\">\n      <p>11:30-12:30</p>\n      <p>Anny Shen</p>\n      <p>No. 8 Haji Lane #02-01, Singapore 1234567</p>\n    </app-ui-text-type-item>\n  </app-ui-text-type>\n  <!-- end \u5206\u985E\u9EDE\u9EDE\u6587\u5B57 -->\n\n  <h6>\u641C\u5C0B</h6>\n  <app-ui-form-search></app-ui-form-search>\n\n\n  <!-- \u5206\u985E\u9EDE\u9EDE\u6587\u5B57: \u6709\u6A19\u984C\u3001\u5E95\u8272 -->\n  <app-ui-text-type [title]=\"'Today\\'s schedule'\" [colorCode]=\"'#f9f9f9'\">\n    <app-ui-text-type-item [colorCode]=\"'#CCDD61'\">\n      <p>11:30-12:30</p>\n      <p>Anny Shen</p>\n      <p>No. 8 Haji Lane #02-01, Singapore 1234567</p>\n    </app-ui-text-type-item>\n    <app-ui-text-type-item [colorCode]=\"'#fdd25c'\">\n      <p>11:30-12:30</p>\n      <p>Anny Shen</p>\n      <p>No. 8 Haji Lane #02-01, Singapore 1234567</p>\n    </app-ui-text-type-item>\n  </app-ui-text-type>\n  <!-- end \u5206\u985E\u9EDE\u9EDE\u6587\u5B57 -->\n\n  <h3 class=\"title-in-cp\">table</h3>\n\n  <!-- style=\"padding-right: 30px; display: block;\" \u4E0D\u7528\u52A0 -->\n  <!-- <app-ui-table-collapse-content style=\"padding-right: 30px; display: block;\" [titleText]=\"'Current Total'\">\n    <ng-container header>\n      <app-ui-table-list>\n        <list-item [titleText]=\"'GoalShortfallShortfall'\">$924,555,000</list-item>\n        <list-item [titleText]=\"'Actual'\">$92,000</list-item>\n        <list-item [titleText]=\"'Shortfall'\">-</list-item>\n      </app-ui-table-list>\n    </ng-container>\n    <ng-container body>\n      <app-ui-table-content (onTableScroll)=\"resetInfoPos()\" (onItemClick)=\"consoleEvent('index',$event)\" (onRowClick)=\"consoleEvent('row',$event)\" [thMinHeight]=\"50\" [fixed]=\"false\">\n        <app-ui-table-row-head>\n          <app-ui-table-item [itemMinSize]=\"'md'\">\n            \n          </app-ui-table-item>\n          <app-ui-table-item [itemMinSize]=\"'md'\" [sort]=\"true\">\n            Activities\n          </app-ui-table-item>\n          <app-ui-table-item [itemMinSize]=\"'md'\">\n          </app-ui-table-item>\n          <app-ui-table-item [itemMinSize]=\"'md'\">\n            00000000-4\n          </app-ui-table-item>\n        </app-ui-table-row-head>\n        <app-ui-table-row>\n          <app-ui-table-item [itemMinSize]=\"'md'\">\n            11111111 11111111 11111 111111111 11111111111 111111111 1111111 1111111111-1\n          </app-ui-table-item>\n          <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\">\n            $100,000,000\n          </app-ui-table-item>\n          <app-ui-table-item [itemMinSize]=\"'md'\">\n            $100,000,000\n          </app-ui-table-item>\n          <app-ui-table-item [itemMinSize]=\"'md'\">\n            $100,000,000\n          </app-ui-table-item>\n        </app-ui-table-row>\n        <app-ui-table-row>\n          <app-ui-table-item [itemMinSize]=\"'md'\">\n            22222222-1\n          </app-ui-table-item>\n          <app-ui-table-item [itemMinSize]=\"'md'\">\n            $200,000,000\n          </app-ui-table-item>\n          <app-ui-table-item [itemMinSize]=\"'md'\">\n            $200,000,000\n          </app-ui-table-item>\n          <app-ui-table-item [itemMinSize]=\"'md'\">\n            $200,000,000\n          </app-ui-table-item>\n        </app-ui-table-row>\n        <app-ui-table-row>\n          <app-ui-table-item [itemMinSize]=\"'md'\">\n            333333333-1\n          </app-ui-table-item>\n          <app-ui-table-item [itemMinSize]=\"'md'\">\n            $300,000,000\n          </app-ui-table-item>\n          <app-ui-table-item [itemMinSize]=\"'md'\">\n            $300,000,000\n          </app-ui-table-item>\n          <app-ui-table-item [itemMinSize]=\"'md'\">\n            $300,000,000\n          </app-ui-table-item>\n        </app-ui-table-row>\n      </app-ui-table-content>\n    </ng-container>\n  </app-ui-table-collapse-content> -->\n  <!-- style=\"padding-right: 30px; display: block;\" \u4E0D\u7528\u52A0 -->\n  <!-- <app-ui-table-collapse-content style=\"padding-right: 30px; display: block;\" [titleText]=\"'Current Total'\" (onCollapsing)=\"tabStyle002Alert($event)\">\n      <ng-container header>\n        <app-ui-table-list>\n          <list-item [titleText]=\"'GoalShortfallShortfall'\">$924,555,000</list-item>\n          <list-item [titleText]=\"'Actual'\">$92,000</list-item>\n          <list-item [titleText]=\"'Shortfall'\">-</list-item>\n        </app-ui-table-list>\n      </ng-container>\n      <ng-container body>\n        <app-ui-table-content (onItemClick)=\"consoleEvent('index',$event)\" (onRowClick)=\"consoleEvent('row',$event)\" [thMinHeight]=\"50\" [fixed]=\"true\">\n          <app-ui-table-row-head>\n            <app-ui-table-item [itemMinSize]=\"'md'\">\n              00000000-1\n            </app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [ sort]=\"true\">\n              Activities\n            </app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [ sort]=\"true\">\n              Shortfall\n            </app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\">\n              00000000-4\n            </app-ui-table-item>\n          </app-ui-table-row-head>\n          <app-ui-table-row>\n            <app-ui-table-item [itemMinSize]=\"'md'\">\n              11111111 11111111 11111 111111111 11111111111 111111111 1111111 1111111111-1\n            </app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\">\n              $100,000,000\n            </app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\">\n              $100,000,000\n            </app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\">\n              $100,000,000\n            </app-ui-table-item>\n          </app-ui-table-row>\n          <app-ui-table-row>\n            <app-ui-table-item [itemMinSize]=\"'md'\">\n              11111111 11111111 11111 111111111 11111111111 111111111 1111111 1111111111-1\n            </app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\">\n              $100,000,000\n            </app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\">\n              $100,000,000\n            </app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\">\n              $100,000,000\n            </app-ui-table-item>\n          </app-ui-table-row>\n        </app-ui-table-content>\n      </ng-container>\n  </app-ui-table-collapse-content>  -->\n  <!-- style=\"padding-right: 30px; display: block;\" \u4E0D\u7528\u52A0 -->\n  <!-- <app-ui-table-edit-content style=\"padding-right: 30px; display: block;\"  [titleText]=\"'Current Total'\" (onClick)=\"tabStyle002Alert('\u9EDE\u64CA')\" [styleType]=\"TABLETIELE_STYLE_2\">\n    <ng-container header>\n      <app-ui-table-list>\n        <list-item [titleText]=\"'Q1'\" [itemMinSize]=\"'sm'\">1</list-item>\n        <list-item [titleText]=\"'Q2'\" [itemMinSize]=\"'sm'\">2</list-item>\n        <list-item [titleText]=\"'Q3'\" [itemMinSize]=\"'sm'\">3</list-item>\n        <list-item [titleText]=\"'Q4'\" [itemMinSize]=\"'sm'\">4</list-item>\n        <list-item [titleText]=\"'GoalShortfallShortfall'\" [itemMinSize]=\"'la'\">$924,555,000</list-item>\n        <list-item [titleText]=\"'Actual'\" [itemMinSize]=\"'la'\">$92,000</list-item>\n        <list-item [titleText]=\"'Shortfall'\" [itemMinSize]=\"'la'\">-</list-item>\n      </app-ui-table-list>\n    </ng-container>\n  </app-ui-table-edit-content> -->\n  <br><br>\n  <!-- style=\"padding-right: 30px; display: block;\" \u4E0D\u7528\u52A0 -->\n  <!-- <app-ui-table-edit-content style=\"padding-right: 30px; display: block;\"  [titleText]=\"'Current Total'\" (onClick)=\"tabStyle002Alert('\u9EDE\u64CA')\" [styleType]=\"TABLETIELE_STYLE_3\">\n    <ng-container header>\n      <app-ui-table-list2>\n        <list-item [titleText]=\"'Commitment'\" [itemMinSize]=\"'sm'\" [heightLight]=\"'style2'\">$12,000</list-item>\n        <list-item [titleText]=\"'Actual Total'\" [itemMinSize]=\"'sm'\">$2,300</list-item>\n      </app-ui-table-list2>\n    </ng-container>\n    <ng-container body>\n        <app-ui-table-content2 (onItemClick)=\"consoleEvent('index',$event)\" (onRowClick)=\"consoleEvent('row',$event)\" [thMinHeight]=\"50\" [tdMinHeight]=\"50\" [fixed]=\"false\">\n          <app-ui-table-row-head>\n            <app-ui-table-item [itemMinSize]=\"'md'\">Month</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\" >1</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\" >2</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\" >3</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\" >4</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\" >5</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\" >6</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\" >7</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\" >8</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\" >9</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\" >10</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\" >11</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\" >12</app-ui-table-item>\n          </app-ui-table-row-head>\n          <app-ui-table-row>\n            <app-ui-table-item [itemMinSize]=\"'md'\">FYFC Commitment</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n          </app-ui-table-row>\n          <app-ui-table-row>\n            <app-ui-table-item [itemMinSize]=\"'md'\">FYFC Actual</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n            <app-ui-table-item [itemMinSize]=\"'md'\" >$1,000</app-ui-table-item>\n          </app-ui-table-row>\n        </app-ui-table-content2>\n      </ng-container>\n  </app-ui-table-edit-content> -->\n  <!-- end \u80CC\u666F\u8272\u6587\u5B57 -->\n\n  <app-ui-table-title [titleText]=\"'Agency Plan'\" [event]=\"false\" [styleType]=\"TABLETIELE_STYLE_4\">\n    <app-ui-table-list [styleType]=\"TABLELIST_STYLE_2\">\n      <list-item [titleText]=\"'FYFC'\">$100,000,000</list-item>\n      <list-item [titleText]=\"'ANP'\">$100,000,000</list-item>\n      <list-item [titleText]=\"'Manpower'\">100,000</list-item>\n      <list-item [titleText]=\"'Recruitment'\">100,000</list-item>\n    </app-ui-table-list>\n  </app-ui-table-title>\n  <h3 class=\"title-in-cp\">table-card</h3>\n  <app-ui-table-card [tdMinHeight]=\"40\" [thMinHeight]=\"50\">\n    <app-ui-table-row-head>\n        <app-ui-table-item [itemMinSize]=\"'md'\" [textAlign]=\"'left'\">\n          <!-- title-style1 -->\n          <app-ui-title-style1 class=\"space-ui-clear\" titleInfo>\n            <ng-container textType=\"titleText\">Agency</ng-container>\n          </app-ui-title-style1>\n          <!-- end title-style1 -->\n        </app-ui-table-item>\n        <app-ui-table-item [itemMinSize]=\"'md'\" >\n          FYFC\n        </app-ui-table-item>\n        <app-ui-table-item [itemMinSize]=\"'md'\" >\n          ANP\n        </app-ui-table-item>\n        <app-ui-table-item [itemMinSize]=\"'md'\">\n          Manpower\n        </app-ui-table-item>\n        <app-ui-table-item [itemMinSize]=\"'md'\">\n          Recruit\n        </app-ui-table-item>\n    </app-ui-table-row-head>\n    <app-ui-table-row>\n      <app-ui-table-item [itemMinSize]=\"'md'\" [textAlign]=\"'left'\">\n        \uFF27oal\n      </app-ui-table-item>\n      <app-ui-table-item [itemMinSize]=\"'md'\" [heightLight]=\"'style1'\">\n        $100,000,000\n      </app-ui-table-item>\n      <app-ui-table-item [itemMinSize]=\"'md'\">\n        $100,000,000\n      </app-ui-table-item>\n      <app-ui-table-item [itemMinSize]=\"'md'\">\n        $100,000,000\n      </app-ui-table-item>\n      <app-ui-table-item [itemMinSize]=\"'md'\">\n        $100,000,000\n      </app-ui-table-item>\n    </app-ui-table-row>\n    <app-ui-table-row>\n      <app-ui-table-item [itemMinSize]=\"'md'\"  [textAlign]=\"'left'\">\n        Actual\n      </app-ui-table-item>\n      <app-ui-table-item [itemMinSize]=\"'md'\">\n        $200,000,000\n      </app-ui-table-item>\n      <app-ui-table-item [itemMinSize]=\"'md'\">\n        $200,000,000\n      </app-ui-table-item>\n      <app-ui-table-item [itemMinSize]=\"'md'\">\n        $200,000,000\n      </app-ui-table-item>\n      <app-ui-table-item [itemMinSize]=\"'md'\">\n        $200,000,000\n      </app-ui-table-item>\n    </app-ui-table-row>\n    <app-ui-table-row>\n      <app-ui-table-item [itemMinSize]=\"'md'\"  [textAlign]=\"'left'\">\n        Actual\n      </app-ui-table-item>\n      <app-ui-table-item [itemMinSize]=\"'md'\">\n        $300,000,000\n      </app-ui-table-item>\n      <app-ui-table-item [itemMinSize]=\"'md'\">\n        $300,000,000\n      </app-ui-table-item>\n      <app-ui-table-item [itemMinSize]=\"'md'\">\n        $300,000,000\n      </app-ui-table-item>\n      <app-ui-table-item [itemMinSize]=\"'md'\">\n        $300,000,000\n      </app-ui-table-item>\n    </app-ui-table-row>\n  </app-ui-table-card>\n\n\n  <h3 class=\"title-in-cp\">card-content</h3>\n\n  <app-ui-card-content-btn [noPadding]=\"true\">\n    <ng-container infoContent>\n      \u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9\n    </ng-container>\n  </app-ui-card-content-btn>\n\n  <app-ui-card-content-btn>\n    <ng-container infoContent>\n      \u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9\n    </ng-container>\n  </app-ui-card-content-btn>\n\n  <h3 class=\"title-in-cp\">card-content-btn</h3>\n  <app-ui-card-content-btn [hasBtn]=\"true\">\n    <ng-container infoContent>\n      \u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9<br>\u5167\u5BB9\n    </ng-container>\n    <ng-container btnContent>\n      <app-ui-btn-layout>\n        <app-ui-btn>\n          <ng-container TextType=\"cust\">\u6587\u5B57\u6587\u5B57\u6587\u5B57</ng-container>\n        </app-ui-btn>\n      </app-ui-btn-layout>\n    </ng-container>\n  </app-ui-card-content-btn>\n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:block;background-color:#fff;overflow:hidden}h2{text-align:center;padding-top:15px;font-weight:700}.layout-cp-all{max-width:1200px;width:100%;margin:0 auto;padding:0 10px}.layout-cp-all .title-in-cp{font-size:24px;color:#e8837e;letter-spacing:2.2px;font-weight:700;text-align:left;padding:50px 0 30px;clear:both;overflow:hidden;line-height:normal}.layout-cp-all .form-demo::ng-deep [class*=gas-col-]{background-color:#c2c2c2;padding:5px}app-ui-item-sliding .item .title{font-size:12px;font-weight:700;color:#414141;position:relative}app-ui-item-sliding .item .title:before{content:'';display:inline-block;width:15px;height:1px;background-color:#007d8c;position:absolute}app-ui-item-sliding .item .desc{font-size:18px;color:#414141}"]
                }] }
    ];
    UiComponent.ctorParameters = function () { return [
        { type: ModalManager }
    ]; };
    return UiComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UIMainLeftComponent = /** @class */ (function () {
    function UIMainLeftComponent(changeDector, elementRef) {
        this.changeDector = changeDector;
        this.elementRef = elementRef;
        this.moreTitle = '';
        this.menuHeaderTitle = '';
        this.updateTimeTitle = '';
        this.updateTime = null;
        this._isMoreOpen = false;
        this.isMoreOpenChange = new EventEmitter();
        this._isMenuHeaderOpen = false;
        this.isMenuHeaderOpenChange = new EventEmitter();
        this._mobileContentHeight = 0;
        this.mobileContentHeightChange = new EventEmitter();
        this.menuFooterHeight = 0;
    }
    Object.defineProperty(UIMainLeftComponent.prototype, "isMoreOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isMoreOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isMoreOpen = val;
            this.isMoreOpenChange.emit(this._isMoreOpen);
            // calculate menu footer height;
            /** @type {?} */
            var _this = this;
            if (val) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var menuFooter_ele = _this.menuFooter.nativeElement;
                    /** @type {?} */
                    var menuFooter_size = menuFooter_ele.getBoundingClientRect();
                    _this.menuFooterHeight = menuFooter_size.height;
                    _this.calculateHeight();
                    // console.warn('menuFooterHeight', _this.menuFooterHeight);
                }), 100); // end setTimeout: calculate content height
            } // end if: more popup open
        } // end set isMoreOpen
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIMainLeftComponent.prototype, "isMenuHeaderOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isMenuHeaderOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isMenuHeaderOpen = val;
            this.isMenuHeaderOpenChange.emit(this._isMenuHeaderOpen);
        } // end set isMenuHeaderOpen
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIMainLeftComponent.prototype, "mobileContentHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mobileContentHeight;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._mobileContentHeight = val;
            this.mobileContentHeightChange.emit(this._mobileContentHeight);
        } // end set mobileContentHeight
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UIMainLeftComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
    }; // end ngOnInit
    // end ngOnInit
    /**
     * @param {?} event
     * @return {?}
     */
    UIMainLeftComponent.prototype.onResize = 
    // end ngOnInit
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = event.target.innerWidth;
        this.changeDector.markForCheck();
        this.calculateHeight();
        console.warn('resize Width: ', this.windowWidth);
    };
    /**
     * @param {?} isOpen
     * @return {?}
     */
    UIMainLeftComponent.prototype.closeMoreHandler = /**
     * @param {?} isOpen
     * @return {?}
     */
    function (isOpen) {
        // isOpen: false
        this.isMoreOpen = isOpen;
        this.changeDector.markForCheck();
        // this.closeMore.emit(isOpen);
    };
    /**
     * @param {?} isOpen
     * @return {?}
     */
    UIMainLeftComponent.prototype.closeMenuHeaderHandler = /**
     * @param {?} isOpen
     * @return {?}
     */
    function (isOpen) {
        // isOpen: false
        this.isMenuHeaderOpen = isOpen;
        this.changeDector.markForCheck();
        // this.closeMore.emit(isOpen);
    };
    /**
     * @return {?}
     */
    UIMainLeftComponent.prototype.calculateHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _this = this;
        if (this.windowWidth > 1023) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var pcMenuContainer_ele = _this.pcMenuContainer.nativeElement;
                /** @type {?} */
                var pcMenuContainer_size = pcMenuContainer_ele.getBoundingClientRect();
                /** @type {?} */
                var pcMenuContainer_h = pcMenuContainer_size.height;
                /** @type {?} */
                var menuLogo_ele = _this.menuLogo.nativeElement;
                /** @type {?} */
                var menuLogo_size = menuLogo_ele.getBoundingClientRect();
                /** @type {?} */
                var menuLogo_h = menuLogo_size.height;
                /** @type {?} */
                var pcMenuFooter_ele = _this.pcMenuFooter.nativeElement;
                /** @type {?} */
                var pcMenuFooter_size = pcMenuFooter_ele.getBoundingClientRect();
                /** @type {?} */
                var pcMenuFooter_h = pcMenuFooter_size.height;
                /** @type {?} */
                var pcMenuList_ele = _this.pcMenuList.nativeElement;
                pcMenuList_ele.style.height = (_this.windowHeight - menuLogo_h - pcMenuFooter_h - 20) + 'px';
                /** @type {?} */
                var pcLayout_ele = _this.pcLayout.nativeElement;
                pcLayout_ele.style.height = _this.windowHeight + 'px';
                pcLayout_ele.style.maxWidth = _this.windowWidth + 'px';
            }), 100);
        } // end if: >= 1024
        else {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var mobileHeader_ele = _this.mobileHeader.nativeElement;
                /** @type {?} */
                var mobileHeader_size = mobileHeader_ele.getBoundingClientRect();
                /** @type {?} */
                var mobileHeader_h = mobileHeader_size.height;
                console.log("_this.menuFooterHeight:", _this.menuFooterHeight);
                if (_this.menuFooterHeight == 0) {
                    /** @type {?} */
                    var menuFooter_ele = _this.menuFooter.nativeElement;
                    /** @type {?} */
                    var menuFooter_size = menuFooter_ele.getBoundingClientRect();
                    _this.menuFooterHeight = menuFooter_size.height;
                    console.log("menuFooter_size:", menuFooter_size);
                }
                /** @type {?} */
                var contentBlock_ele = _this.contentBlock.nativeElement;
                _this.mobileContentHeight = (window.innerHeight - mobileHeader_h - _this.menuFooterHeight);
                console.log("window.innerHeight:", window.innerHeight);
                console.log("mobileHeader_h:", mobileHeader_h);
                console.log("_this.menuFooterHeight:", _this.menuFooterHeight);
                contentBlock_ele.style.height = _this.mobileContentHeight + 'px';
                // console.warn('mobile', _this.menuFooterHeight);
            }), 500);
        }
        this.changeDector.markForCheck();
    }; // end calculateHeight
    // end calculateHeight
    /**
     * @return {?}
     */
    UIMainLeftComponent.prototype.ngAfterContentInit = 
    // end calculateHeight
    /**
     * @return {?}
     */
    function () {
        this.calculateHeight();
        console.log("calculateHeight");
    };
    UIMainLeftComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-main-left',
                    template: "<ng-template *ngIf=\"this.windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n\n<ng-template #lastUpdateTime>\n  <div *ngIf=\"updateTime\" class=\"last-update-time\">\n    <div class=\"icon-block\">\n      <img src=\"assets/img/last-update-time.svg\" alt=\"\">\n    </div>\n    <div class=\"descrp-block\">\n      <span>{{updateTimeTitle}} : </span>\n      <span>{{updateTime}}</span>\n      <!-- <span>24 Jun 2019 13:12</span> -->\n    </div>\n  </div>\n</ng-template>\n\n<!-- content template -->\n<ng-template #menuLogoContent>\n  <div #menuLogo class=\"ui-main-logo\">\n    <img [style.display]=\"this.windowWidth < 1024? 'none':'inline-block'\" src=\"assets/img/logo-w.svg\" />\n    <img [style.display]=\"this.windowWidth < 1024? 'inline-block':'none'\" src=\"assets/img/logo.svg\" />\n  </div>\n</ng-template>\n<!-- end template: menuLogoContent -->\n\n<ng-template #menuBtmContent>\n  <ng-content select=\"[menu-bottom]\"></ng-content>\n</ng-template>\n  <!-- end template: menuBtmContent -->\n\n<ng-template #mainContent>\n  <div #contentBlock class=\"ui-main-content\">\n      <ng-content select=\"[main]\"></ng-content>\n  </div>\n</ng-template>\n<!-- end template: mainContent -->\n\n<!-- if: mobile -->\n<ng-template #mobileBlock>\n  <div #mobileHeader class=\"ui-main-header\">\n    <ng-container *ngTemplateOutlet=\"menuLogoContent\"></ng-container>\n    <div class=\"ui-main-header-menu-btn\" (click)=\"isMenuHeaderOpen = true\">\n      <img src=\"./assets/img/nav-icon-btn.svg\" />\n    </div>\n  </div>\n  <!-- end: ui-main-header -->\n\n  <ng-container *ngTemplateOutlet=\"mainContent\"></ng-container>\n\n  <div #menuFooter class=\"ui-main-menu stop-scroll-block\" [ngClass]=\"_isMoreOpen ? 'menuMoreOpen':''\">\n    <ng-container *ngTemplateOutlet=\"lastUpdateTime\"></ng-container>\n    <ng-content select=\"[menu-footer]\"></ng-content>\n    <div class=\"safe-area-block\"></div>\n  </div>\n\n  <app-ui-modal-style-menu [(isPopupOpen)]=\"isMenuHeaderOpen\" (close)=\"closeMenuHeaderHandler($event)\"\n    [isFull]=\"true\" [fadePos]=\"'right'\">\n    <ng-container popupBlock=popup-title>{{menuHeaderTitle}}</ng-container>\n    <ng-container popupBlock=popup-content>\n      <div class=\"ui-main-header-nav\">\n        <ng-content select=\"[menu-header]\"></ng-content>\n      </div>\n    </ng-container>\n    <ng-container popupBlock=popup-btm>\n      <div class=\"ui-main-header-btm\">\n        <ng-container *ngTemplateOutlet=\"menuBtmContent\"></ng-container>\n      </div>\n    </ng-container>\n  </app-ui-modal-style-menu>\n  <!-- end: ui-main-header-nav -->\n\n  <app-ui-modal-style-menu [(isPopupOpen)]=\"isMoreOpen\" (close)=\"closeMoreHandler($event)\"\n    [outerMinusHeight]=\"menuFooterHeight\">\n    <ng-container popupBlock=popup-title>{{moreTitle}}</ng-container>\n    <ng-container popupBlock=popup-content>\n      <ng-content select=\"[menu-footer-more]\"></ng-content>\n    </ng-container>\n  </app-ui-modal-style-menu>\n  <!-- end: footer more -->\n</ng-template>\n<!-- end: mobile -->\n\n<!-- if: pc -->\n<ng-template #pcBlock>\n  <ng-container *ngTemplateOutlet=\"lastUpdateTime\"></ng-container>\n  <div #pcLayout class='ui-row' >\n    <div #pcMenuContainer class='ui-main-left'>\n      <ng-container *ngTemplateOutlet=\"menuLogoContent\"></ng-container>\n      <div #pcMenuList class=\"ui-main-menu stop-scroll-block\">\n        <ng-content select=\"[menu-list]\"></ng-content>\n      </div>\n      <div #pcMenuFooter class=\"ui-main-menu-footer\">\n        <ng-container *ngTemplateOutlet=\"menuBtmContent\"></ng-container>\n      </div>\n    </div>\n    <ng-container *ngTemplateOutlet=\"mainContent\"></ng-container>\n  </div>\n</ng-template>\n<!-- end: pc -->\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.safe-area-block{background-color:#000}@supports (top:constant(safe-area-inset-top)){.safe-area-block{height:constant(safe-area-inset-bottom)}}@supports (top:env(safe-area-inset-top)){.safe-area-block{height:env(safe-area-inset-bottom)}}.last-update-time{position:fixed;display:flex;align-items:center;justify-content:center;right:0;bottom:0;z-index:99;background-color:#c2c2c2;width:200px;height:24px}.last-update-time .icon-block{width:16px;margin-right:10px;font-size:0}.last-update-time .icon-block img{width:100%}.last-update-time .descrp-block span{color:#414141}.ui-row{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;overflow:hidden}.ui-main-left{width:10rem;min-width:160px;min-height:100%;padding:0;color:#fff;background:linear-gradient(to top,#0068b7,#003781)}.ui-main-logo{padding:15px 15px 0}.ui-main-logo img{max-width:90px;width:100%}@media screen and (min-width:1025px){.ui-main-logo img{max-width:9vw}}.ui-main-menu{max-height:100vh;margin-top:20px;overflow:hidden;overflow-y:auto;z-index:88}.ui-main-menu .last-update-time{position:relative;right:auto;bottom:0;padding-right:10px;justify-content:flex-end;width:100%}.ui-main-menu .last-update-time .icon-block{width:16px}.ui-main-menu .last-update-time .icon-block img{width:100%}.ui-main-menu .last-update-time .descrp-block span{color:#414141}.ui-main-content{flex:1;min-width:1px;overflow:visible;height:100%}.ui-main-header{display:flex;justify-content:space-between;align-items:center;padding:14px 15px;position:relative;border-bottom:1px solid #ececec}.ui-main-header .ui-main-logo{padding:0}.ui-main-header .ui-main-logo img{height:auto}.ui-main-menu-footer.ui-main-menu-overflow{background-color:rgba(255,255,255,.3)}@media screen and (max-width:1023px){.ui-main-content{overflow:hidden}.ui-main-menu{position:fixed;bottom:0;width:100%;margin:0}.ui-main-menu.menuMoreOpen{z-index:111}}"]
                }] }
    ];
    UIMainLeftComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    UIMainLeftComponent.propDecorators = {
        moreTitle: [{ type: Input }],
        menuHeaderTitle: [{ type: Input }],
        updateTimeTitle: [{ type: Input }],
        updateTime: [{ type: Input }],
        isMoreOpen: [{ type: Input }],
        isMoreOpenChange: [{ type: Output }],
        isMenuHeaderOpen: [{ type: Input }],
        isMenuHeaderOpenChange: [{ type: Output }],
        mobileContentHeight: [{ type: Input }],
        mobileContentHeightChange: [{ type: Output }],
        contentBlock: [{ type: ViewChild, args: ['contentBlock',] }],
        menuFooter: [{ type: ViewChild, args: ['menuFooter',] }],
        menuLogo: [{ type: ViewChild, args: ['menuLogo',] }],
        mobileHeader: [{ type: ViewChild, args: ['mobileHeader',] }],
        pcMenuContainer: [{ type: ViewChild, args: ['pcMenuContainer',] }],
        pcMenuList: [{ type: ViewChild, args: ['pcMenuList',] }],
        pcMenuFooter: [{ type: ViewChild, args: ['pcMenuFooter',] }],
        pcLayout: [{ type: ViewChild, args: ['pcLayout',] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UIMainLeftComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var animationEnterLeavePage = trigger('enterAnimation', [
    transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('300ms', style({ transform: 'translateX(100%)', opacity: 0 }))
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UIMainSideMenuComponent = /** @class */ (function () {
    function UIMainSideMenuComponent(changeDetector) {
        this.changeDetector = changeDetector;
        // @Input() isShow: boolean = false;
        this.title = '';
        this.isShowChange = new EventEmitter();
        this._isShow = false;
    }
    Object.defineProperty(UIMainSideMenuComponent.prototype, "isShow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShow;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isShow = val;
        } // end set isShow
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UIMainSideMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UIMainSideMenuComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = event.target.innerWidth;
        // console.warn('Width: ', this.windowWidth);
    };
    // 回上一頁
    // 回上一頁
    /**
     * @return {?}
     */
    UIMainSideMenuComponent.prototype.closeMain = 
    // 回上一頁
    /**
     * @return {?}
     */
    function () {
        this._isShow = false;
        this.isShowChange.emit(this._isShow);
        this.changeDetector.markForCheck();
    };
    UIMainSideMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-main-side-menu',
                    template: "<div class=\"ui-page-content\">\n  <ng-template *ngIf=\"windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n</div>\n\n<!-- content template -->\n<ng-template #sideMenuContent>\n  <ng-content select=\"[side-menu]\"></ng-content>\n</ng-template>\n<ng-template #mainContent>\n  <!-- <app-ui-infinite-scroll (loadingCallback)=\"loadContent($event)\" (refreshCallback)=\"refreshContent()\" [(loadingFinish)]=\"isLoadingFinishContent\" [lazyLoading]=\"false\"> -->\n    <ng-content select=\"[main]\"></ng-content>\n  <!-- </app-ui-infinite-scroll> -->\n</ng-template>\n<ng-template #mainGlobal>\n  <ng-content select=\"[global-main]\"></ng-content>\n</ng-template>\n\n<!-- if: mobile -->\n<ng-template #mobileBlock>\n   <!-- fixarea -->\n   <ng-container *ngTemplateOutlet=\"mainGlobal\"></ng-container>\n   <!-- end of fixarea -->\n    <ng-container *ngTemplateOutlet=\"sideMenuContent\"></ng-container>\n\n  <div class=\"ui-side-menu-lv2\" *ngIf=\"isShow\" [@enterAnimation] >\n    <div #sideMenuHeader class=\"ui-side-menu-header\">\n      <div class=\"ui-layout-back-block style-full-width-title\" (click)=\"closeMain()\">\n          <div class=\"header-back-btn\">\n              <img class=\"back-icon\" src=\"assets/img/icon-arrow-white.svg\">\n          </div>\n      </div>\n      <div class=ui-side-menu-title>\n        <p>{{title}}</p>\n      </div>\n    </div>\n    <!-- end: ui-side-menu-header -->\n\n\n      <!-- <div class=\"ui-side-main-content-mobile\"> -->\n          <ng-container *ngTemplateOutlet=\"mainContent\"></ng-container>\n      <!-- </div> -->\n  </div>\n</ng-template>\n\n<!-- if: pc -->\n<ng-template #pcBlock>\n  <div class='layout-sub-block-pc'>\n    <div class=\"ui-side-menu layout-submenu\">\n      <ng-container *ngTemplateOutlet=\"sideMenuContent\"></ng-container>\n    </div>\n    <div class=\"ui-side-menu-content layout-content-main\">\n        <!-- fixarea -->\n      <ng-container *ngTemplateOutlet=\"mainGlobal\"></ng-container>\n      <!-- end of fixarea -->\n        <ng-container *ngTemplateOutlet=\"mainContent\"></ng-container>\n    </div>\n  </div>\n</ng-template>\n",
                    animations: [
                        animationEnterLeavePage
                    ],
                    styles: [".ui-side-menu-header{display:flex;align-items:center;position:fixed;z-index:20;width:100%;height:44px;justify-content:center;background:linear-gradient(to bottom,#0068b7,#003781)}.ui-side-menu-header>*{display:inline-block}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-side-menu-header .ui-layout-back-block{cursor:pointer;color:#fff;line-height:normal;display:flex;align-items:center;min-height:44px}.ui-side-menu-header .ui-layout-back-block.style-full-width-title{width:44px;height:44px;position:absolute;left:0}.ui-side-menu-header .header-back-btn{padding-left:20px}.ui-side-menu-header .header-back-btn .back-icon{width:12px}.ui-side-menu-header .ui-side-menu-title{color:#fff;font-size:1.125rem;width:calc(100% - 4rem);text-align:center}.ui-side-menu-header .ui-side-menu-title p{font-weight:700;margin:0}.ui-side-menu-lv2{z-index:15;position:absolute;top:0;width:100%;background-color:#f5f5f5;display:block}@supports (top:constant(safe-area-inset-top)){.ui-side-menu-lv2{padding-top:constant(safe-area-inset-top)}}@supports (top:env(safe-area-inset-top)){.ui-side-menu-lv2{padding-top:env(safe-area-inset-top)}}.ui-page-content{height:100%}.ui-row{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start}.ui-side-menu-content{width:100vw}.layout-sub-block-pc{display:flex;background-color:#f5f5f5;min-height:100vh;height:100%}.layout-sub-block-pc .layout-submenu{display:inline-flex;margin-left:-40px;background-color:#fff;box-shadow:0 0 19px 0 rgba(0,41,95,.31);max-width:250px;min-width:250px;width:100%;margin-top:40px;z-index:80;height:calc(100% - (40px*2));position:relative}@media (min-width:1025px){.layout-sub-block-pc .layout-submenu{max-width:25vw}}.layout-sub-block-pc .layout-content-main{max-width:calc(100% - 250px - -40px);width:100%}.layout-sub-block-pc .ui-side-menu-content{height:100vh}"]
                }] }
    ];
    UIMainSideMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UIMainSideMenuComponent.propDecorators = {
        title: [{ type: Input }],
        isShow: [{ type: Input }],
        isShowChange: [{ type: Output }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UIMainSideMenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiMainCollapseComponent = /** @class */ (function (_super) {
    __extends(UiMainCollapseComponent, _super);
    function UiMainCollapseComponent(changeDector) {
        var _this = _super.call(this, changeDector) || this;
        _this.changeDector = changeDector;
        _this.isHideCollapseBlock = false;
        _this.language = new Language();
        _this.isCollapsing = false;
        _this.isCollapsed = false;
        return _this;
    }
    /**
     * @return {?}
     */
    UiMainCollapseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
        console.log(this.uiPageContent);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiMainCollapseComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = event.target.innerWidth;
        // console.warn('Width: ', this.windowWidth);
        this.changeDector.markForCheck();
    };
    /**
     * @return {?}
     */
    UiMainCollapseComponent.prototype.setTimeOutCollapse = /**
     * @return {?}
     */
    function () {
    };
    // 收合
    // 收合
    /**
     * @return {?}
     */
    UiMainCollapseComponent.prototype.collapseSideMenu = 
    // 收合
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isCollapsing = true;
        if (this.isCollapsed) {
            this.isCollapsed = false;
            this.isCollapsing = false;
            this.changeDector.markForCheck();
        }
        else {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.isCollapsed = true;
                _this.isCollapsing = false;
                _this.changeDector.markForCheck();
            }), 700);
        }
    };
    /**
     * @return {?}
     */
    UiMainCollapseComponent.prototype.isOpenSideMenu = /**
     * @return {?}
     */
    function () {
        return this.isCollapsed;
    };
    UiMainCollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-main-collapse',
                    template: "<div class=\"ui-page-content\" #uiPageContent>\n  <ng-template *ngIf=\"windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n</div>\n\n<!-- content template -->\n<ng-template #sideMenuContent>\n  <ng-content select=\"[side-menu]\"></ng-content>\n</ng-template>\n<ng-template #mainContent>\n  <ng-content select=\"[main]\"></ng-content>\n</ng-template>\n<ng-template #mainGlobal>\n  <ng-content select=\"[global-main]\"></ng-content>\n</ng-template>\n\n<!-- if: mobile -->\n<ng-template #mobileBlock>\n  <div class=\"ui-main-block-mobile\">\n\n    <!-- ui main detail -->\n    <div class=\"ui-main-detail-block\">\n      <ng-container *ngTemplateOutlet=\"sideMenuContent\"></ng-container>\n      <div class=\"btn-block\">\n        <app-ui-btn-layout>\n            <app-ui-btn Action action=\"btn_ProgressSeeDetails\" (actionClick)=\"isShow = true\">\n                <ng-container TextType=\"cust\">{{language.progressSeeDetails | translate}}</ng-container>\n            </app-ui-btn>\n        </app-ui-btn-layout>\n      </div>\n    </div>\n    <!-- end of ui main detail -->\n    \n\n    <div class=\"ui-side-menu-lv2\" *ngIf=\"isShow\" [@enterAnimation] >\n        <div #sideMenuHeader class=\"ui-side-menu-header\">\n          <div class=\"ui-layout-back-block style-full-width-title\" (click)=\"closeMain()\">\n              <!-- <nx-icon name='chevron-left'></nx-icon> -->\n              <div class=\"header-back-btn\">\n                  <img class=\"back-icon\" src=\"assets/img/icon-arrow-white.svg\">\n              </div>\n          </div>\n          <div class=ui-side-menu-title>\n            <p>{{title}}</p>\n          </div>\n        </div>\n        <!-- end: ui-side-menu-header -->\n    \n    \n          <!-- <div class=\"ui-side-main-content-mobile\"> -->\n              <ng-container *ngTemplateOutlet=\"mainContent\"></ng-container>\n          <!-- </div> -->\n    </div>\n      <!-- end of side menu -->\n  </div>\n  <!-- end: ui-main-block -->\n\n  <!-- fixarea -->\n  <ng-container *ngTemplateOutlet=\"mainGlobal\"></ng-container>\n  <!-- end of fixarea -->\n</ng-template>\n\n<!-- if: pc -->\n<ng-template #pcBlock>\n  <div class=\"ui-main-block\" [ngClass]=\"{'isHideCollapseBlock':isHideCollapseBlock,\n                                         'isCollapsing':isCollapsing,\n                                         'isCollapsed':isCollapsed}\">\n\n    <div class=\"ui-main-collapse-btn\" (click)=\"collapseSideMenu()\">\n      <nx-icon name='chevron-left'></nx-icon>\n    </div>\n    <!-- end: ui-main-collapse-btn -->\n\n    <div #pcMenuBlock class=\"ui-main-collapse-menu\">\n      <ng-container *ngTemplateOutlet=\"sideMenuContent\"></ng-container>\n    </div>\n    <!-- end: ui-main-collapse-menu -->\n\n    <div class=\"ui-main-collapse-content\">\n      <ng-container *ngTemplateOutlet=\"mainContent\"></ng-container>\n\n      <!-- fixarea -->\n      <ng-container *ngTemplateOutlet=\"mainGlobal\"></ng-container>\n      <!-- end of fixarea -->\n    </div>\n    <!-- end: ui-main-collapse-content -->\n  </div>\n  <!-- end: ui-main-block -->\n</ng-template>\n",
                    host: { '[class.shown]': 'isShow' },
                    animations: [
                        animationEnterLeavePage
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["[class^=ui-main-block]{display:flex;align-items:flex-start;min-height:100vh;padding-top:40px;background-color:#f5f5f5}[class^=ui-main-block]>.ui-main-collapse-block,[class^=ui-main-block]>.ui-main-collapse-menu{display:inline-flex;width:100%;max-width:250px;margin-left:-40px}[class^=ui-main-block]>.ui-main-collapse-content{flex:1;padding:0}@media (min-width:1025px){[class^=ui-main-block]>.ui-main-collapse-block,[class^=ui-main-block]>.ui-main-collapse-menu{max-width:25vw}}.ui-main-block{position:relative}.ui-main-block .ui-main-collapse-btn{position:absolute;top:50px;left:-30px;z-index:1}.ui-main-block .ui-main-collapse-menu{height:calc(100vh - 80px);overflow:hidden;box-shadow:0 0 19px 0 rgba(0,41,95,.31);opacity:1}.ui-main-block .ui-main-collapse-content{width:1px;padding-bottom:100px;padding-left:40px}@media (max-width:767px){.ui-main-block{padding-left:0}}.ui-main-block.isHideCollapseBlock .ui-main-collapse-btn,.ui-main-block.isHideCollapseBlock .ui-main-collapse-menu{visibility:hidden}.ui-main-block.isHideCollapseBlock .ui-main-collapse-menu{width:40px}.ui-main-block.isHideCollapseBlock .ui-main-collapse-content{padding-left:50px;padding-right:50px}.ui-main-block .ui-main-collapse-btn,.ui-main-block .ui-main-collapse-menu{transition:transform .5s ease-in-out,width .5s ease-in-out,max-width .5s ease-in-out,opacity .2s ease-in-out,-webkit-transform .5s ease-in-out;transition-delay:0s,0s,0s,.4s,0s}.ui-main-block.isCollapsed .ui-main-collapse-btn,.ui-main-block.isCollapsing .ui-main-collapse-btn{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.ui-main-block.isCollapsed .ui-main-collapse-menu,.ui-main-block.isCollapsing .ui-main-collapse-menu{max-width:40px;opacity:0;transition-delay:0s,0s,0s,0s,0s}.ui-main-block.isCollapsed .ui-main-collapse-content,.ui-main-block.isCollapsing .ui-main-collapse-content{padding-left:50px;padding-right:50px}.ui-main-block-mobile{display:inline-block;width:100vw;padding-top:30px;padding-bottom:55px}.ui-main-block-mobile .main-content{height:100vh;background-color:#fff;padding-left:5px;padding-right:5px;padding-bottom:155px}.ui-main-block-mobile .ui-side-menu-lv2 ::ng-deep.infiniti-scroll{margin-top:44px}.ui-main-block-mobile .ui-side-menu-lv2 ::ng-deep.infiniti-scroll .refresh-content>.scroll-content{padding:30px 5px 155px}.ui-main-block-mobile .ui-main-detail-block .btn-block{padding-top:20px;padding-bottom:10px;background-color:#fff}.ui-main-block-mobile .ui-main-collapse-tab{padding:0 5px;text-align:right}.ui-main-block-mobile .ui-main-collapse-menu{max-width:100%;margin:0}.ui-main-block-mobile.isHideCollapseBlock .ui-main-collapse-menu,.ui-main-block-mobile.isHideCollapseBlock .ui-main-collapse-tab{display:none}.ui-main-collapse-btn{display:inline-block;width:40px;height:40px;color:#007ab3;font-size:1.5rem;font-weight:100;box-shadow:0 0 19px 0 rgba(0,41,95,.31);background-color:#fff;text-align:center}.ui-main-collapse-btn nx-icon{line-height:40px}.ui-main-collapse-menu{width:100%;padding-top:20px;background-color:#fff}@media screen and (max-width:1023px){.ui-page-content{width:100%;height:100%}.ui-page-content .ui-main-collapse-content{padding-left:5px;padding-right:5px;padding-bottom:100px}}.ui-side-menu-header{display:flex;align-items:center;position:fixed;z-index:20;width:100%;height:44px;justify-content:center;background:linear-gradient(to bottom,#0068b7,#003781)}.ui-side-menu-header>*{display:inline-block}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-side-menu-header .ui-layout-back-block{cursor:pointer;color:#fff;line-height:normal;display:flex;align-items:center;min-height:44px}.ui-side-menu-header .ui-layout-back-block.style-full-width-title{width:44px;height:44px;position:absolute;left:0}.ui-side-menu-header .header-back-btn{padding-left:20px}.ui-side-menu-header .header-back-btn .back-icon{width:12px}.ui-side-menu-header .ui-side-menu-title{color:#fff;font-size:1.125rem;width:calc(100% - 4rem);text-align:center}.ui-side-menu-header .ui-side-menu-title p{font-weight:700;margin:0}.ui-side-menu-lv2{z-index:15;position:absolute;top:0;width:100%;background-color:#f5f5f5;display:block}@supports (top:constant(safe-area-inset-top)){.ui-side-menu-lv2{padding-top:constant(safe-area-inset-top)}}@supports (top:env(safe-area-inset-top)){.ui-side-menu-lv2{padding-top:env(safe-area-inset-top)}}"]
                }] }
    ];
    UiMainCollapseComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiMainCollapseComponent.propDecorators = {
        isHideCollapseBlock: [{ type: Input }],
        firstTitle: [{ type: Input }],
        secondTitle: [{ type: Input }],
        pcMenuBlock: [{ type: ViewChild, args: ['pcMenuBlock',] }],
        uiPageContent: [{ type: ViewChild, args: ['uiPageContent',] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UiMainCollapseComponent;
}(UIMainSideMenuComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiMainFullComponent = /** @class */ (function () {
    function UiMainFullComponent(changeDector) {
        this.changeDector = changeDector;
        this.isLoadingFinishChange = new EventEmitter();
        this.refreshCallback = new EventEmitter();
        this._isLoadingFinish = false;
    }
    Object.defineProperty(UiMainFullComponent.prototype, "isLoadingFinish", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isLoadingFinish;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isLoadingFinish = value;
            this.isLoadingFinishChange.emit(this._isLoadingFinish);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiMainFullComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    // loading content
    // loading content
    /**
     * @param {?} event
     * @return {?}
     */
    UiMainFullComponent.prototype.refreshContent = 
    // loading content
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.isLoadingFinish = false;
        this.refreshCallback.emit(event);
        this.changeDector.markForCheck();
    }; // end loadContent
    UiMainFullComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-main-full',
                    template: "<div class=\"ui-page-content\">\n    <div class=\"ui-main-full-content\">\n      <ng-content select=\"[main]\"></ng-content>\n    </div>\n  <ng-content select=\"[global-main]\"></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-layout-back-block{cursor:pointer;color:#fff;line-height:normal;display:flex;align-items:center;min-height:44px}.ui-layout-back-block.style-full-width-title{width:44px;height:44px;position:absolute;left:0}.header-back-btn{padding-left:20px}.header-back-btn .back-icon{width:12px}.ui-page-content{width:100%;height:100%;background-color:#f5f5f5}.ui-page-content .ui-main-full-content{min-height:100vh;padding:40px 0 0;background-color:#f5f5f5}.ui-page-content ::ng-deep .infiniti-scroll{max-height:100vh}@media screen and (max-width:1023px){.ui-page-content .ui-main-full-content{padding:30px 0 100px}}"]
                }] }
    ];
    UiMainFullComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiMainFullComponent.propDecorators = {
        isLoadingFinish: [{ type: Input }],
        isLoadingFinishChange: [{ type: Output }],
        refreshCallback: [{ type: Output }]
    };
    return UiMainFullComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import * as fromStore from '@app/Store';
// import { Store } from '@ngrx/store';
var UIInnerPageComponent = /** @class */ (function () {
    function UIInnerPageComponent(_location) {
        this._location = _location;
        this.title = '';
        this._btmAddHeight = 120;
        this.pageStyle = ''; // setting style2
    }
    /**
     * @return {?}
     */
    UIInnerPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UIInnerPageComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // console.log('ele:',this.content.nativeElement);
        // console.log('nativeElement ele1:',this.content.nativeElement.querySelector('div'));
        // console.log('nativeElement ele2:',this.content.nativeElement.querySelector('div').querySelector('div'));
        // console.log('Height:',this.content.nativeElement.offsetHeight);
        // console.log('ele-h:',this.content.nativeElement.getAttribute('contentHeight'));
        //offsetHeight
        // setTimeout(()=> {
        //   console.log('contentHeight in inner page', this.contentHeight);
        //   this.contentHeight = this.contentHeight + this._btmAddHeight;
        //   console.log('contentHeight in inner page after add', this.contentHeight);
        //   //如果沒有設定高度，先讓他的高度用100vh扣掉header
        //   this.contentHeight > this._btmAddHeight ? this.contentHeight = this.contentHeight+'px' : this.contentHeight = 'calc(100vh - 84px)';
        //   console.log('contentHeight in inner page after if', this.contentHeight);
        // },800);
    };
    /**
     * @return {?}
     */
    UIInnerPageComponent.prototype.closeMain = /**
     * @return {?}
     */
    function () {
        if (this._location)
            this._location.back();
        // this.store.select(fromStore.getHistory).subscribe(res=>{
        //   console.log(res);
        // })
    };
    UIInnerPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-inner-page',
                    template: "<div id=\"mainDIV\" class=\"ui-page-content form-stop-scroll form-scroll-content stop-scroll-block\">\n  <div class=\"ui-inner-page-header\">\n    <div class=\"ui-layout-back-block style-full-width-title\" (click)=\"closeMain()\">\n        <div class=\"header-back-btn \">\n            <img class=\"back-icon\" src=\"assets/img/icon-arrow-white.svg\">\n        </div>\n    </div>\n    <div class=ui-inner-page-nav>\n    </div>\n\n    <div class=\"ui-inner-layout-title\">\n      <p>{{title}}</p>\n    </div>\n  </div>\n  <!-- end: ui-inner-page-header -->\n\n  <div class=\"ui-inner-page-content \"  #inpageMainContent [ngStyle]=\"{'height': this.contentHeight}\">\n    <ng-content  select=\"[main]\"></ng-content>\n    <ng-content select=\"[global-main]\"></ng-content>\n  </div>\n  <!-- end: ui-inner-page-content -->\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        animationEnterLeavePage
                    ],
                    styles: [":host{display:inline-block;min-height:100vh;max-width:100%;width:100vw}.ui-page-content{overflow-y:auto;overflow-x:hidden;display:inline-block;min-height:100vh;height:100vh;padding-bottom:calc(100px + 24px);background-color:#f5f5f5;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);width:100%}.ui-inner-page-header{display:flex;align-items:center;justify-content:center;position:relative;padding-top:10px;width:100%;min-height:44px;padding-bottom:calc(220px - 44px);background:linear-gradient(to bottom,#0068b7,#003781)}.ui-inner-page-header>*{display:inline-block}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-inner-page-header .ui-layout-back-block{cursor:pointer;color:#fff;line-height:normal;display:flex;align-items:center;min-height:44px}.ui-inner-page-header .ui-layout-back-block.style-full-width-title{width:44px;height:44px;position:absolute;left:0}.ui-inner-page-header .header-back-btn{padding-left:20px}.ui-inner-page-header .header-back-btn .back-icon{width:12px}.ui-inner-page-header .ui-inner-layout-title{color:#fff;font-size:1.125rem;width:100%;text-align:center;max-width:300px;margin:0 auto}.ui-inner-page-header .ui-inner-layout-title p{margin:0;font-weight:700}.ui-inner-page-content{margin:-136px 130px 0;min-width:1px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border-radius:5px;background-color:transparent}.ui-inner-page-content ::ng-deep .layout-block{min-height:70vh;height:100%;border-radius:5px;position:relative;overflow:visible;overflow-y:visible!important}@media screen and (max-width:1023px){.ui-inner-page-header{padding-bottom:calc(275px - 44px)}.ui-inner-page-content{margin-top:-201px;margin-left:5px;margin-right:5px}}"]
                }] }
    ];
    UIInnerPageComponent.ctorParameters = function () { return [
        { type: Location, decorators: [{ type: Optional }] }
    ]; };
    UIInnerPageComponent.propDecorators = {
        title: [{ type: Input }],
        contentHeight: [{ type: Input }]
    };
    return UIInnerPageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiInnerStepComponent = /** @class */ (function () {
    function UiInnerStepComponent(_location, router) {
        this._location = _location;
        this.router = router;
        this.isBackShow = true; // is show back arrow
        this.backUrl = null; // back url
        this.stepHeadingH = '';
    }
    /**
     * @return {?}
     */
    UiInnerStepComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiInnerStepComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = event.target.innerWidth;
        this.calculateHeight();
        console.warn('resize Width: ', this.windowWidth);
    };
    /**
     * @return {?}
     */
    UiInnerStepComponent.prototype.closeMain = /**
     * @return {?}
     */
    function () {
        if (this.backUrl) {
            this.router.navigate(this.backUrl);
        }
        else {
            if (this._location)
                this._location.back();
        }
    };
    /**
     * @return {?}
     */
    UiInnerStepComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this_1.stepHeadingH = window.innerWidth < 1024 ? _this_1.stepHeading.nativeElement.offsetHeight + 'px' : '0px';
        }), 0);
    };
    /**
     * @return {?}
     */
    UiInnerStepComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.calculateHeight();
    };
    /**
     * @return {?}
     */
    UiInnerStepComponent.prototype.calculateHeight = /**
     * @return {?}
     */
    function () {
        if (this.windowWidth > 1023) {
            /** @type {?} */
            var _this_2 = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var stepPage_ele = _this_2.stepPage.nativeElement;
                stepPage_ele.style.height = _this_2.windowHeight + 'px';
                // pcLayout_ele.style.maxWidth = this.windowWidth + 'px';
            }), 100);
        }
    };
    UiInnerStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-inner-step',
                    template: "<div #stepPage class=\"ui-page-content  {{ theme }}\">\n    <div class=\"ui-inner-step-header\">\n      <div *ngIf=\"isBackShow\" class=\"ui-layout-back-block\" (click)=\"closeMain()\">\n          <!-- <nx-icon name='chevron-left'></nx-icon> -->\n          <div class=\"header-back-btn\">\n              <img class=\"back-icon\" src=\"assets/img/icon-arrow-white.svg\">\n          </div>\n      </div>\n      <div class=ui-inner-step-nav>\n      </div>\n    </div>\n    <!-- end: ui-inner-step-header -->\n\n    <div  class=\"ui-inner-step-content\">\n      <div class=\"ui-inner-step-main-container\">\n        <div class=\"ui-inner-step-heading stop-scroll-block\" #stepHeading>\n          <ng-content select=\"[heading]\"></ng-content>\n        </div>\n        <div class=\"ui-inner-step-main stop-scroll-block\" #stepMain>\n          <ng-content select=\"[main]\"></ng-content>\n        </div>\n      </div>\n\n      <div class=\"ui-inner-step-steps\">\n        <ng-content  select=\"[steps]\"></ng-content>\n      </div>\n\n      <div><ng-content select=\"[information]\"></ng-content></div>\n      \n      <ng-content select=\"[global-main]\"></ng-content>\n    </div>\n    <!-- end: ui-inner-step-content -->\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".ui-page-content{min-height:100vh;position:relative;overflow:hidden;background-color:#f5f5f5}.ui-page-content.dark .ui-inner-step-header{background:linear-gradient(to bottom,#0068b7,#003781)}.ui-page-content.light .ui-inner-step-header{background:linear-gradient(to bottom,#b1dadd,#007d8c)}.ui-inner-step-header{display:flex;align-items:flex-start;width:100%;min-height:220px}.ui-inner-step-header>*{display:inline-block}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-inner-step-header .ui-layout-back-block{cursor:pointer;color:#fff;line-height:normal;display:flex;align-items:center;min-height:44px}.ui-inner-step-header .ui-layout-back-block.style-full-width-title{width:44px;height:44px;position:absolute;left:0}.ui-inner-step-header .header-back-btn{padding-left:20px}.ui-inner-step-header .header-back-btn .back-icon{width:12px}.ui-inner-step-content{margin:-130px 0 0;height:100%}.ui-inner-step-content .ui-inner-step-main-container{display:flex;width:100%;height:calc(100% - 90px - 55px)}.ui-inner-step-content .ui-inner-step-main-container .ui-inner-step-heading{width:405px;height:100%;overflow:hidden;overflow-y:auto;margin-left:75px}.ui-inner-step-content .ui-inner-step-main-container .ui-inner-step-main{width:100%;max-width:calc(100% - 405px - 80px);height:100%;overflow:hidden;overflow-y:auto}.ui-inner-step-content .ui-inner-step-steps{margin-top:20px;margin-bottom:10px;padding:0 45px}@media (max-width:1023px){.ui-inner-step-content .ui-inner-step-main-container .ui-inner-step-heading{margin-left:0}.ui-inner-step-content .ui-inner-step-steps{padding:0}}@media screen and (max-width:1023px){.ui-inner-step-header{min-height:275px}.ui-inner-step-content{height:calc(100vh - 45px);margin-top:-231px;margin-left:5px;margin-right:5px}.ui-inner-step-content .ui-inner-step-main-container{display:inline-block;height:calc(100% - 55px - 1px)}.ui-inner-step-content .ui-inner-step-main-container .ui-inner-step-heading{width:100%;height:auto}.ui-inner-step-content .ui-inner-step-main-container .ui-inner-step-heading:not(:last-child){padding-bottom:20px}.ui-inner-step-content .ui-inner-step-main-container .ui-inner-step-main{max-width:100%;max-height:calc(100vh - 275px + 35px)}}"]
                }] }
    ];
    UiInnerStepComponent.ctorParameters = function () { return [
        { type: Location, decorators: [{ type: Optional }] },
        { type: AppRouter }
    ]; };
    UiInnerStepComponent.propDecorators = {
        stepHeading: [{ type: ViewChild, args: ['stepHeading',] }],
        stepMain: [{ type: ViewChild, args: ['stepMain',] }],
        stepPage: [{ type: ViewChild, args: ['stepPage',] }],
        theme: [{ type: Input }],
        isBackShow: [{ type: Input }],
        backUrl: [{ type: Input }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UiInnerStepComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import * as fromStore from '@app/Store';
// import { Store } from '@ngrx/store';
var UiInnerFullComponent = /** @class */ (function () {
    function UiInnerFullComponent(_location) {
        this._location = _location;
        this.title = '';
        this.prevText = [];
        this.agentBackEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    UiInnerFullComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    UiInnerFullComponent.prototype.closeMain = /**
     * @return {?}
     */
    function () {
        //console.debug("hey closeMain.....: ", this._location);
        // if (this._location) {
        this.agentBackEvent.emit("agentBack");
        //this._location.back();
        // }
        // this.store.select(fromStore.getHistory).subscribe(res => {
        //   console.log(res);
        // });
    };
    UiInnerFullComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-inner-full',
                    template: "<div class=\"ui-page-content stop-scroll-block\">\n  <div class=\"ui-inner-full-header\">\n    <!-- prev -->\n    <div class=\"ui-inner-prev-content-block\">\n        <div class=\"ui-layout-back-block \" (click)=\"closeMain()\">\n          <div class=\"header-back-btn\">\n              <img class=\"back-icon\" src=\"assets/img/icon-arrow-white.svg\">\n          </div>\n        </div>\n        <div class=ui-inner-full-nav>\n          <ng-container *ngFor=\"let item of prevText; let last = last\">\n            <span class=\"prev-text-item prev-text\" [ngClass]=\"last ? 'style-last-item': ''\">{{item}}</span>\n            <span class=\"prev-text-item prev-text-icon\" *ngIf=\"!last\">\n              <img src=\"assets/img/icon-arrow-white.svg\">\n            </span>\n          </ng-container>\n        </div>\n    </div>\n    <!-- end of prev -->\n    <div class=\"ui-inner-layout-title\">\n      <p>{{title}}</p>\n    </div>\n</div>\n<!-- end: ui-inner-full-header -->\n\n  <div  class=\"ui-inner-full-content\">\n    <ng-content  select=\"[main]\"></ng-content>\n    <ng-content select=\"[global-main]\"></ng-content>\n  </div>\n  <!-- end: ui-inner-full-content -->\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".ui-page-content{min-height:100vh;background-color:#f5f5f5;overflow-x:hidden}.ui-inner-full-header{display:flex;align-items:center;width:100%;min-height:44px;position:relative;background:linear-gradient(to bottom,#0068b7,#003781)}.ui-inner-full-header>*{display:inline-block}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-inner-full-header .ui-layout-back-block{cursor:pointer;color:#fff;line-height:normal;display:flex;align-items:center;min-height:44px}.ui-inner-full-header .ui-layout-back-block.style-full-width-title{width:44px;height:44px;position:absolute;left:0}.ui-inner-full-header .header-back-btn{padding-left:20px}.ui-inner-full-header .header-back-btn .back-icon{width:12px}.ui-inner-full-header .ui-inner-layout-title{color:#fff;font-size:1.125rem;width:100%;text-align:center;max-width:300px;margin:0 auto}.ui-inner-full-header .ui-inner-layout-title p{margin:0;font-weight:700}.ui-inner-full-header .ui-inner-prev-content-block{display:flex;align-items:center;max-width:300px;width:100%;overflow:hidden;position:absolute;left:0;z-index:9}@media (max-width:1023px){.ui-inner-full-header .ui-inner-prev-content-block{max-width:44px}.ui-inner-full-header .ui-inner-prev-content-block .ui-inner-full-nav{display:none}}.ui-inner-full-header .ui-inner-full-nav{font-size:.75rem;color:#fff;margin-left:15px}.ui-inner-full-header .ui-inner-full-nav .prev-text{font-size:.75rem;display:inline-block;max-width:85px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ui-inner-full-header .ui-inner-full-nav .prev-text.style-last-item{font-weight:700}.ui-inner-full-header .ui-inner-full-nav .prev-text-item{display:inline-block;vertical-align:middle}.ui-inner-full-header .ui-inner-full-nav .prev-text-icon{margin:0 5px}.ui-inner-full-header .ui-inner-full-nav .prev-text-icon img{width:12px;height:12px;-webkit-transform:rotate(180deg);transform:rotate(180deg);display:inline-block;vertical-align:middle}.ui-inner-full-content{padding-top:40px}@media (max-width:1023px){.ui-inner-full-content{padding-top:30px}}"]
                }] }
    ];
    UiInnerFullComponent.ctorParameters = function () { return [
        { type: Location, decorators: [{ type: Optional }] }
    ]; };
    UiInnerFullComponent.propDecorators = {
        title: [{ type: Input }],
        prevText: [{ type: Input }],
        agentBackEvent: [{ type: Output }]
    };
    return UiInnerFullComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiModalBaseComponent = /** @class */ (function () {
    function UiModalBaseComponent(modalManager, changeDector) {
        this.modalManager = modalManager;
        this.changeDector = changeDector;
        this.isScrollToTop = false;
        this.isContnetFull = false;
        this.isMobileBtmBtnFix = true; // if mobile btm btn fix, if true btn fix on mobile; else not fix on mobile
        this.isModalBtmHasSpace = true; // true-> 30px; false -> 0px
        this.classMobileBtnNoFix = '';
        this.windowWidth = window.innerWidth;
        this.styleModelBtm = '';
        this._modalID = v4();
    }
    /**
     * @return {?}
     */
    UiModalBaseComponent.prototype.renderBtmSpace = /**
     * @return {?}
     */
    function () {
        this.styleModelBtm = this.isModalBtmHasSpace ? '' : 'style-btm-no-space';
    };
    // check if modal open or not
    // check if modal open or not
    /**
     * @param {?} isPopupOpenStatus
     * @return {?}
     */
    UiModalBaseComponent.prototype.checkModalOpenStatus = 
    // check if modal open or not
    /**
     * @param {?} isPopupOpenStatus
     * @return {?}
     */
    function (isPopupOpenStatus) {
        console.log('checkModalOpenStatus', isPopupOpenStatus);
        if (isPopupOpenStatus) {
            console.log('in if isPopupOpenStatus');
            this.modalManager.pushModal(this._modalID, this);
            //call add class fuction
            this.ModalOpenGlobalControl();
        }
        else {
            /** @type {?} */
            var isLast = this.modalManager.dismissModal(this._modalID);
            if (isLast) {
                //call remove class function
                this.ModalCloseGlobalControl();
            }
            console.log('isLast', isLast);
        }
    }; // end: checkModalOpenStatus
    // control interface if modal open
    // end: checkModalOpenStatus
    // control interface if modal open
    /**
     * @return {?}
     */
    UiModalBaseComponent.prototype.ModalOpenGlobalControl = 
    // end: checkModalOpenStatus
    // control interface if modal open
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // let body fixed
        document.body.classList.add("fixed-body-full-page");
        /** @type {?} */
        var stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
        /** @type {?} */
        var stopScrollBlock_calendar = document.body.getElementsByClassName('cal-month-view');
        console.log('ModalOpenGlobalControl', stopScrollBlock);
        // let back area which can scroll not scroll
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (stopScrollBlock.length != 0) {
                // in every stop-scroll-block class add no-scroll
                [].forEach.bind(stopScrollBlock, (/**
                 * @param {?} itm
                 * @return {?}
                 */
                function (itm) {
                    itm.classList.add('no-scroll');
                }))();
            }
            if (stopScrollBlock_calendar.length != 0) {
                stopScrollBlock_calendar[0].classList.add('no-scroll');
            }
            // need to scroll to top
            /** @type {?} */
            var modalContentBlock_ele = _this.modalBlock ? _this.modalBlock.nativeElement.querySelector('div.modal-content-block') : null;
            console.warn('modalBlock_ele', modalContentBlock_ele);
            if (_this.isScrollToTop && modalContentBlock_ele !== null) {
                modalContentBlock_ele.scrollTop = 0;
            }
        }), 100); // end of settimeout
    }; // end: ModalOpenGlobalControl
    // control interface if modal close
    // end: ModalOpenGlobalControl
    // control interface if modal close
    /**
     * @return {?}
     */
    UiModalBaseComponent.prototype.ModalCloseGlobalControl = 
    // end: ModalOpenGlobalControl
    // control interface if modal close
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
        /** @type {?} */
        var stopScrollBlock_calendar = document.body.getElementsByClassName('cal-month-view');
        // console.warn('ModalCloseGlobalControl', stopScrollBlock);
        //romove body fixed
        document.body.classList.remove("fixed-body-full-page");
        setTimeout((/**
         * @return {?}
         */
        function () {
            // remove other fix
            [].forEach.bind(stopScrollBlock, (/**
             * @param {?} itm
             * @return {?}
             */
            function (itm) {
                console.log('in each');
                itm.classList.remove('no-scroll');
            }))();
            if (stopScrollBlock_calendar.length != 0) {
                stopScrollBlock_calendar[0].classList.remove('no-scroll');
            }
        }), 500);
    }; // end: ModalCloseGlobalControl 
    // end: ModalCloseGlobalControl 
    /**
     * @param {?} event
     * @return {?}
     */
    UiModalBaseComponent.prototype.onresize = 
    // end: ModalCloseGlobalControl 
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = event.target.innerWidth;
        this.classMobileBtnNoFix = this.isMobileBtmBtnFix ? '' : 'style-mobile-btn-no-fix';
        this.isShowFixBtmTemp = this.windowWidth >= 1024 || this.windowWidth < 1024 && this.isMobileBtmBtnFix;
    };
    /**
     * @return {?}
     */
    UiModalBaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
        this.classMobileBtnNoFix = this.isMobileBtmBtnFix ? '' : 'style-mobile-btn-no-fix';
        this.classContentFull = this.isContnetFull ? ' layout-full' : '';
        this.isShowFixBtmTemp = this.windowWidth >= 1024 || this.windowWidth < 1024 && this.isMobileBtmBtnFix;
        this.renderBtmSpace();
    };
    /**
     * @return {?}
     */
    UiModalBaseComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isLast = this.modalManager.dismissModal(this._modalID);
        if (isLast) {
            this.ModalCloseGlobalControl();
        }
    }; // end: ngOnDestroy 
    // end: ngOnDestroy 
    /**
     * @return {?}
     */
    UiModalBaseComponent.prototype.closeHandler = 
    // end: ngOnDestroy 
    /**
     * @return {?}
     */
    function () {
    };
    UiModalBaseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-modal-base',
                    template: "\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    UiModalBaseComponent.ctorParameters = function () { return [
        { type: ModalManager },
        { type: ChangeDetectorRef }
    ]; };
    UiModalBaseComponent.propDecorators = {
        modalBlock: [{ type: ViewChild, args: ['modalBlock',] }],
        isScrollToTop: [{ type: Input }],
        isContnetFull: [{ type: Input }],
        isMobileBtmBtnFix: [{ type: Input }],
        isModalBtmHasSpace: [{ type: Input }],
        onresize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UiModalBaseComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiModalConfirmComponent = /** @class */ (function (_super) {
    __extends(UiModalConfirmComponent, _super);
    function UiModalConfirmComponent(alertController, ModalManager$$1, changeDetector) {
        var _this = _super.call(this, ModalManager$$1, changeDetector) || this;
        _this.alertController = alertController;
        _this.ModalManager = ModalManager$$1;
        _this.changeDetector = changeDetector;
        _this.cancelBtnText = 'Cancel';
        _this.confirmBtnText = 'Confirm';
        _this.backdropDismiss = false;
        _this.hasCancelBtn = true;
        _this.hasConfirmBtn = true;
        _this._isPopupOpen = false;
        _this.isPopupOpenChange = new EventEmitter();
        _this.onCancel = new EventEmitter();
        _this.onConfirm = new EventEmitter();
        _this.buttons = [];
        _this.alert = null;
        return _this;
    }
    Object.defineProperty(UiModalConfirmComponent.prototype, "isPopupOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isPopupOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isPopupOpen = val;
            this.checkModalOpenStatus(this._isPopupOpen);
            if (val) {
                this.presentAlertConfirm();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiModalConfirmComponent.prototype.presentAlertConfirm = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: this.title,
                                message: this.message,
                                backdropDismiss: this.backdropDismiss,
                                buttons: this.buttons
                            })];
                    case 1:
                        _a.alert = _b.sent();
                        return [4 /*yield*/, this.alert.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    }; // end presentAlertConfirm function
    // @HostListener('click', ['$event'])
    // end presentAlertConfirm function
    // @HostListener('click', ['$event'])
    /**
     * @return {?}
     */
    UiModalConfirmComponent.prototype.ngOnInit = 
    // end presentAlertConfirm function
    // @HostListener('click', ['$event'])
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.hasCancelBtn) {
            this.buttons.push({
                text: this.cancelBtnText,
                role: 'cancel',
                cssClass: 'secondary',
                handler: (/**
                 * @return {?}
                 */
                function () {
                    _this.onCancel.emit();
                    _this.isPopupOpenChange.emit(false);
                })
            });
        } // end if: hasCancelBtn
        if (this.hasConfirmBtn) {
            this.buttons.push({
                text: this.confirmBtnText,
                handler: (/**
                 * @return {?}
                 */
                function () {
                    // console.log('Confirm:', this.confirmBtnText);
                    _this.onConfirm.emit();
                    _this.isPopupOpenChange.emit(false);
                })
            });
        } // end if: hasConfirmBtn
    }; // end ngOnInit
    // end ngOnInit
    /**
     * @return {?}
     */
    UiModalConfirmComponent.prototype.ngOnDestroy = 
    // end ngOnInit
    /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    UiModalConfirmComponent.prototype.closeHandler = /**
     * @return {?}
     */
    function () {
        this._isPopupOpen = false;
        this.isPopupOpenChange.emit(false);
        this.alert.dismiss();
    };
    UiModalConfirmComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-modal-confirm',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}::ng-deep .alert-head.sc-ion-alert-ios{padding-top:20px;padding-bottom:15px}::ng-deep .alert-title.sc-ion-alert-ios{margin-top:0;line-height:1.5rem}::ng-deep .alert-message.sc-ion-alert-ios{word-break:break-word;overflow-x:hidden}::ng-deep .alert-button.sc-ion-alert-ios:last-child{font-weight:400}"]
                }] }
    ];
    UiModalConfirmComponent.ctorParameters = function () { return [
        { type: AlertController },
        { type: ModalManager },
        { type: ChangeDetectorRef }
    ]; };
    UiModalConfirmComponent.propDecorators = {
        title: [{ type: Input }],
        message: [{ type: Input }],
        cancelBtnText: [{ type: Input }],
        confirmBtnText: [{ type: Input }],
        backdropDismiss: [{ type: Input }],
        hasCancelBtn: [{ type: Input }],
        hasConfirmBtn: [{ type: Input }],
        isPopupOpen: [{ type: Input }],
        isPopupOpenChange: [{ type: Output }],
        onCancel: [{ type: Output }],
        onConfirm: [{ type: Output }]
    };
    return UiModalConfirmComponent;
}(UiModalBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiModalMsgComponent = /** @class */ (function () {
    function UiModalMsgComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.alertInit = false;
        this._isPopupOpen = false;
        this.isPopupOpenChange = new EventEmitter();
    }
    Object.defineProperty(UiModalMsgComponent.prototype, "isPopupOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isPopupOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.isPopupOpen != val && val) {
                this.alertInit = true;
                this.autoDisappear();
                this._isPopupOpen = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiModalMsgComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiModalMsgComponent.prototype.autoDisappear = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._isPopupOpen = false;
            _this.isPopupOpenChange.emit(_this.isPopupOpen);
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.alertInit = false;
                _this.changeDetector.detectChanges();
            }), 2000);
        }), 1600);
    };
    UiModalMsgComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-modal-msg',
                    template: "<div class=\"alert-wrapper\" ng-init=\"alertInit\" [ngClass]=\"[(alertInit && isPopupOpen? 'getIn animating':'getOut animating'),(alertInit? '':'hide')]\">\n  <div class=\"alert-body\">\n    <span>\n      <ng-content></ng-content>\n    </span>\n  </div>\n</div>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.alert-wrapper{width:100%;position:fixed;z-index:9999;top:20px;left:0;right:0;margin:0 auto;padding:17px 33px;text-align:center;max-width:411px;background-color:rgba(0,0,0,.55);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:1s;animation-duration:1s}.alert-wrapper.hide{display:none}.alert-wrapper.getIn{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}.alert-wrapper.getOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-delay:1s;animation-delay:1s}@media screen and (max-width:1023px){.alert-wrapper{top:0}}.alert-wrapper .alert-body span{color:#fff;font-size:.875rem}@-webkit-keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}"]
                }] }
    ];
    UiModalMsgComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiModalMsgComponent.propDecorators = {
        isPopupOpen: [{ type: Input }],
        isPopupOpenChange: [{ type: Output }]
    };
    return UiModalMsgComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiBtnComponent = /** @class */ (function () {
    function UiBtnComponent(el, _renderer) {
        this.el = el;
        this._renderer = _renderer;
        this.btnWd = 'md'; //md, sm, lg
        this.btnHeight = 'default'; // default, sm
        this.btnStyle = 'full'; // full border
        this.btnColor = 'main2'; // main1, main2, light1, light2, grey
        this.id = '';
        this.name = '';
        this._isDisable = false;
        this.isDisableChange = new EventEmitter();
        this.ClickBtn = new EventEmitter();
        this._btnGroup = 'group1'; //  btn 所屬組別
    }
    Object.defineProperty(UiBtnComponent.prototype, "isDisable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisable;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            // console.log('in set isDisable', val);
            this._isDisable = val;
            if (this.isDisableChange) {
                this.isDisableChange.emit(this._isDisable);
                this.settingBtnStyle();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    UiBtnComponent.prototype.onClickBtn = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.ClickBtn.emit(e);
    };
    /**
     * @return {?}
     */
    UiBtnComponent.prototype.settingBtnStyle = /**
     * @return {?}
     */
    function () {
        // console.log('settingBtnStyle', this._isDisable);
        if (this.btnHeight == 'default') {
            this.classHeight = '';
            this._btnGroup = 'group1';
        }
        else {
            this.classHeight = ' btn-height-sm';
            this._btnGroup = 'group2';
        }
        this.classDisable = this.isDisable ? ' btn-disable' : '';
        this.isDisable ? this._renderer.addClass(this.el.nativeElement, 'btn-not-allow') : this._renderer.removeClass(this.el.nativeElement, 'btn-not-allow');
        this.classWd = ' btn-wd-' + this._btnGroup + '-' + this.btnWd;
        switch (this.btnStyle) {
            case 'full':
                this.classStyle = ' btn-color-full-';
                break;
            case 'border':
                this.classStyle = ' btn-color-border-';
                break;
            case 'text':
                this.classStyle = ' btn-color-text-';
                break;
        }
        this.btnRenderStyle = this.classWd + this.classHeight + this.classStyle + this.btnColor + this.classDisable;
    };
    /**
     * @return {?}
     */
    UiBtnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.settingBtnStyle();
    };
    UiBtnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-btn',
                    template: "\n<button (click)=\"onClickBtn($event)\" [name]=\"name\" class=\"btn-default-style btn-body\" [ngClass]='this.btnRenderStyle' [id]=\"id\">\n\t<ng-content select=\"[TextType=cust]\"></ng-content>\n</button>\n\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host-context(.btn-not-allow){pointer-events:none}button{box-shadow:none;outline:0;cursor:pointer;-webkit-tap-highlight-color:transparent}button:active,button:focus{outline:0}.btn-block{text-align:center;display:flex;flex-wrap:wrap}.btn-default-style{box-shadow:none;border:none;display:inline-block;height:48px;line-height:48px;text-decoration:none;font-size:1rem;font-weight:700;text-align:center;border-radius:4px;max-width:210px;width:100%;position:relative;background-color:transparent;vertical-align:top}[class*=btn-color-full-]{color:#fff}[class*=btn-color-border-]{border:2px solid #c2c2c2;background-color:#fff}.btn-height-sm{height:48px;line-height:48px;font-size:.875rem}.btn-height-sm.btn-wd-group2-lg{font-size:1rem}.btn-height-sm[class*=btn-color-border]{line-height:44px}.btn-color-full-main1{background-color:#007d8c}.btn-color-full-main2{background-color:#007ab3}.btn-color-full-light1{background-color:#3da556}.btn-color-full-light2{background-color:#f86200}.btn-wd-group1-lg{max-width:270px}.btn-wd-group1-md{max-width:210px}.btn-wd-group1-sm{max-width:130px}.btn-wd-group2-lg{max-width:210px}.btn-wd-group2-md{max-width:160px}.btn-wd-group2-sm{max-width:115px}.btn-color-border-main1{border-color:#007d8c;color:#007d8c}.btn-color-border-main2{border-color:#007ab3;color:#007ab3}.btn-color-border-light1{border-color:#3da556;color:#3da556}.btn-color-border-light2{border-color:#f86200;color:#f86200}.btn-color-border-white-main1{border-color:#fff;color:#007d8c}.btn-color-border-white-main2{border-color:#fff;color:#007ab3}.btn-color-text-grey{color:#c2c2c2;background-color:transparent}.btn-color-text-main1{color:#007d8c;background-color:transparent}.btn-color-text-main2{color:#007ab3;background-color:transparent}.btn-color-text-light1{color:#3da556;background-color:transparent}.btn-color-text-light2{color:#f86200;background-color:transparent}.btn-disable{pointer-events:none;cursor:default}.btn-disable.btn-color-full-light1{background-color:#b1dbbb}.btn-disable.btn-color-full-light2{background-color:#fcc099}.btn-disable.btn-color-full-main1{background-color:#93c5cb}.btn-disable.btn-color-full-main2{background-color:#99cae1}@media (max-width:374px){.btn-wd-group2-md{max-width:140px}}"]
                }] }
    ];
    UiBtnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    UiBtnComponent.propDecorators = {
        btnWd: [{ type: Input }],
        btnHeight: [{ type: Input }],
        btnStyle: [{ type: Input }],
        btnColor: [{ type: Input }],
        id: [{ type: Input }],
        name: [{ type: Input }],
        isDisableChange: [{ type: Output }],
        isDisable: [{ type: Input }],
        ClickBtn: [{ type: Output }]
    };
    return UiBtnComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiBtnLikeAddComponent = /** @class */ (function () {
    function UiBtnLikeAddComponent() {
        this.isDisable = false;
        this.onChange = new EventEmitter();
    }
    Object.defineProperty(UiBtnLikeAddComponent.prototype, "isLike", {
        get: /**
         * @return {?}
         */
        function () { return this._isLike; },
        set: /**
         * @param {?} isLike
         * @return {?}
         */
        function (isLike) {
            this._isLike = isLike;
            // console.debug('like-component',this._isLike);
            this.changeClass();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiBtnLikeAddComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.changeClass();
    };
    /**
     * @return {?}
     */
    UiBtnLikeAddComponent.prototype.changeClass = /**
     * @return {?}
     */
    function () {
        this.likeClasses = this._isLike ? ' active' : ' ';
        this.disableClasses = this.isDisable ? ' disabled' : ' ';
        this.totalClasses = this.likeClasses + this.disableClasses;
        // console.debug('totalClasses',this.totalClasses);
    };
    /**
     * @return {?}
     */
    UiBtnLikeAddComponent.prototype.toggleLike = /**
     * @return {?}
     */
    function () {
        this._isLike = !this._isLike;
        this.changeClass();
        this.onChange.emit(this._isLike);
        return false;
    };
    UiBtnLikeAddComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-btn-like-add',
                    template: "<a href=\"#\" (click)=\"toggleLike()\" class=\"btn-like-add status-toggle-block\"  [ngClass]=\"totalClasses\">\n    \n    <div class=\"btn-like status-normal \"><img src=\"./assets/img/icon-like.svg\" alt=\"nolike\"></div>\n    <div class=\"btn-like-active status-active\"><img src=\"./assets/img/icon-like-active.svg\" alt=\"like\"></div>\n</a>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.status-toggle-block .status-normal{display:inline-block}.status-toggle-block .status-active,.status-toggle-block.active .status-normal{display:none}.status-toggle-block.active .status-active{display:inline-block}:host{display:inline-block}@media screen and (min-width:1025px){:host .status-toggle-block .status-active,:host .status-toggle-block .status-normal{width:4vw}}"]
                }] }
    ];
    UiBtnLikeAddComponent.ctorParameters = function () { return []; };
    UiBtnLikeAddComponent.propDecorators = {
        isLike: [{ type: Input }],
        isDisable: [{ type: Input }],
        onChange: [{ type: Output }]
    };
    return UiBtnLikeAddComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiBtnLayoutComponent = /** @class */ (function () {
    function UiBtnLayoutComponent() {
        this.isBtnFlex = false;
    }
    /**
     * @return {?}
     */
    UiBtnLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiBtnLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-btn-layout',
                    template: "<div class=\"btn-block\" [ngClass]=\"{'isBtnFlex': isBtnFlex}\">\n  <ng-content></ng-content>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.btn-block{display:block;justify-content:center;align-items:center;text-align:center;width:100%;margin-bottom:20px}.btn-block.isBtnFlex{display:flex}.btn-block.isBtnFlex ::ng-deep app-ui-btn{width:100%}.btn-block.isBtnFlex ::ng-deep app-ui-btn button{width:100%}:host{display:block;margin-right:-15px}:host ::ng-deep app-ui-btn{margin-right:15px}"]
                }] }
    ];
    UiBtnLayoutComponent.ctorParameters = function () { return []; };
    UiBtnLayoutComponent.propDecorators = {
        isBtnFlex: [{ type: Input }]
    };
    return UiBtnLayoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomDateFormatter = /** @class */ (function (_super) {
    __extends(CustomDateFormatter, _super);
    function CustomDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // you can override any of the methods defined in the parent class
    // you can override any of the methods defined in the parent class
    /**
     * @param {?} __0
     * @return {?}
     */
    CustomDateFormatter.prototype.monthViewColumnHeader = 
    // you can override any of the methods defined in the parent class
    /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'EEE', locale);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CustomDateFormatter.prototype.monthViewTitle = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'MMM y', locale);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CustomDateFormatter.prototype.weekViewColumnHeader = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'EEE', locale);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CustomDateFormatter.prototype.weekViewColumnSubHeader = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'dd', locale);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CustomDateFormatter.prototype.weekViewHour = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'HH:mm', locale);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CustomDateFormatter.prototype.dayViewHour = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'HH:mm', locale);
    };
    return CustomDateFormatter;
}(CalendarDateFormatter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEventTitleFormatter = /** @class */ (function (_super) {
    __extends(CustomEventTitleFormatter, _super);
    function CustomEventTitleFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // you can override any of the methods defined in the parent class
    // you can override any of the methods defined in the parent class
    /**
     * @param {?} event
     * @return {?}
     */
    CustomEventTitleFormatter.prototype.monthTooltip = 
    // you can override any of the methods defined in the parent class
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CustomEventTitleFormatter.prototype.weekTooltip = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CustomEventTitleFormatter.prototype.dayTooltip = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return;
    };
    return CustomEventTitleFormatter;
}(CalendarEventTitleFormatter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiInformationService = /** @class */ (function () {
    function UiInformationService() {
        this._subject = new Subject();
    }
    // get this open info
    // get this open info
    /**
     * @return {?}
     */
    UiInformationService.prototype.getCloseAction = 
    // get this open info
    /**
     * @return {?}
     */
    function () {
        console.log('_subject', this._subject);
        return this._subject.asObservable();
    };
    // 
    // 
    /**
     * @param {?} id
     * @return {?}
     */
    UiInformationService.prototype.closeOthers = 
    // 
    /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        console.log('closeOthers _subject', this._subject, id);
        this._subject.next(id);
    };
    UiInformationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    UiInformationService.ctorParameters = function () { return []; };
    /** @nocollapse */ UiInformationService.ngInjectableDef = defineInjectable({ factory: function UiInformationService_Factory() { return new UiInformationService(); }, token: UiInformationService, providedIn: "root" });
    return UiInformationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiInformationContentComponent = /** @class */ (function () {
    function UiInformationContentComponent(changeDector, _elementRef, actionService) {
        this.changeDector = changeDector;
        this._elementRef = _elementRef;
        this.actionService = actionService;
        this.paddindData = {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10
        };
        this.btnOnClick = new EventEmitter();
        this.defaultPos = "bottom";
        this.showArrow = true;
        this.arrowML = '';
        this.arrowMT = '';
        this.opacity = true;
        this.show = false;
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    UiInformationContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiInformationContentComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} el
     * @return {?}
     */
    UiInformationContentComponent.prototype.getStyle = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el, null);
        }
        else {
            return el.currentStyle;
        }
    };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    UiInformationContentComponent.prototype.getWH = /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    function (el, name) {
        /** @type {?} */
        var val = name === "width" ? el.offsetWidth : el.offsetHeight;
        /** @type {?} */
        var which = name === "width" ? ['Left', 'Right'] : ['Top', 'Bottom'];
        if (val === 0) {
            return 0;
        }
        /** @type {?} */
        var style$$1 = this.getStyle(el);
        for (var i = 0, a; a = which[i++];) {
            val -= parseFloat(style$$1["border" + a + "Width"]) || 0;
            val -= parseFloat(style$$1["padding" + a]) || 0;
        }
        return val;
    };
    /**
     * @return {?}
     */
    UiInformationContentComponent.prototype.controlContentPostion = /**
     * @return {?}
     */
    function () {
        if (this.show) {
            // let body fixed
            document.body.classList.add("fixed-body-full-page");
            /** @type {?} */
            var stopScrollBlock_1 = document.body.getElementsByClassName('stop-scroll-block');
            /** @type {?} */
            var stopScrollBlock_calendar_1 = document.body.getElementsByClassName('cal-month-view');
            // let month_ele = this._elementRef.nativeElement.querySelector('.cal-month-view');
            console.log('ModalOpenGlobalControl', stopScrollBlock_1);
            // let back area which can scroll not scroll
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (stopScrollBlock_1.length != 0) {
                    // in every stop-scroll-block class add no-scroll
                    [].forEach.bind(stopScrollBlock_1, (/**
                     * @param {?} itm
                     * @return {?}
                     */
                    function (itm) {
                        itm.classList.add('no-scroll');
                    }))();
                }
                if (stopScrollBlock_calendar_1.length != 0) {
                    stopScrollBlock_calendar_1[0].classList.add('no-scroll');
                }
            }), 100); // end of settimeout
            // end of settimeout
            /** @type {?} */
            var pl = this.paddindData.left;
            /** @type {?} */
            var pr = this.paddindData.right;
            /** @type {?} */
            var pt = this.paddindData.top;
            /** @type {?} */
            var pb = this.paddindData.bottom;
            /** @type {?} */
            var btnDom = this.controlBtn.nativeElement;
            /** @type {?} */
            var infoDom = this.infoInfoContent.nativeElement;
            /** @type {?} */
            var infoInnerHeight = this.getWH(this.infoInfoContent.nativeElement, 'height');
            /** @type {?} */
            var infoDomP = (infoDom.clientHeight - infoInnerHeight);
            /** @type {?} */
            var maxH = this.defaultPos == "bottom" || this.defaultPos == "top" ? '100vh' : '100vh';
            infoDom.style.maxHeight = 'calc(' + maxH + ' - ' + (pt + pb) + 'px)';
            this.infoScrollContent.nativeElement.style.maxHeight = 'calc(' + maxH + ' - ' + (infoDomP + pt + pb) + 'px)';
            infoDom.style.marginLeft = '0px';
            infoDom.style.marginTop = '0px';
            // console.log(btnDom);
            /** @type {?} */
            var windowWidth = document.body.clientWidth;
            /** @type {?} */
            var windowHeight = window.innerHeight;
            /** @type {?} */
            var infoDomSize = infoDom.getBoundingClientRect();
            /** @type {?} */
            var btnSizeInfo = btnDom.getBoundingClientRect();
            return {
                dom: infoDom,
                topGap: infoDomSize.top,
                rightGap: (windowWidth - infoDomSize.right),
                bottomGap: (windowHeight - infoDomSize.bottom),
                leftGap: infoDomSize.left,
                arrawPos: (btnSizeInfo.height) / 2 + btnSizeInfo.top,
                windowHeight: windowHeight,
                infoDomSize: infoDomSize,
                centerPos: infoDomSize.left + (infoDomSize.width / 2)
            };
        }
        this.changeDector.markForCheck();
    };
    /**
     * @return {?}
     */
    UiInformationContentComponent.prototype.btnClick = /**
     * @return {?}
     */
    function () {
        this.show = false;
        this.btnOnClick.emit();
        this.unlockScroll();
    };
    /**
     * @private
     * @return {?}
     */
    UiInformationContentComponent.prototype.unlockScroll = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
        // let month_ele = this._elementRef.nativeElement.querySelector('.cal-month-view');
        /** @type {?} */
        var stopScrollBlock_calendar = document.body.getElementsByClassName('cal-month-view');
        // console.warn('ModalCloseGlobalControl', stopScrollBlock);
        //romove body fixed
        document.body.classList.remove("fixed-body-full-page");
        setTimeout((/**
         * @return {?}
         */
        function () {
            // remove other fix
            [].forEach.bind(stopScrollBlock, (/**
             * @param {?} itm
             * @return {?}
             */
            function (itm) {
                console.log('in each');
                itm.classList.remove('no-scroll');
            }))();
            // remove other fix
            if (stopScrollBlock_calendar.length > 0)
                stopScrollBlock_calendar[0].classList.remove('no-scroll');
        }), 500);
    };
    /**
     * @return {?}
     */
    UiInformationContentComponent.prototype.updateView = /**
     * @return {?}
     */
    function () {
        this.changeDector.detectChanges();
    };
    // if you click anywhere, then close info
    // if you click anywhere, then close info
    /**
     * @param {?} event
     * @return {?}
     */
    UiInformationContentComponent.prototype.documentClick = 
    // if you click anywhere, then close info
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // click event from action
        this.actionService.onActionClick()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) {
            if (!_this._elementRef.nativeElement.contains(resp.event.target)) {
                _this.show = false;
                _this.unlockScroll();
                _this.changeDector.detectChanges();
            }
        }));
        // click event with no action
        if (!this._elementRef.nativeElement.contains(event.target)) {
            this.show = false;
            this.unlockScroll();
        }
    };
    UiInformationContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-information-content',
                    template: "<div class=\"info-info-content\" #infoInfoContent [hidden]=\"!show\" [style.max-width]=\"maxWidth+'px'\" \n[ngClass]=\"{'opacity0':!opacity,\n            'right':defaultPos=='right',\n            'left': defaultPos=='left'}\">\n  <div class=\"close-btn\" (click)=\"btnClick()\">\n      <nx-icon name=\"close\" fill=\"false\" outline=\"false\"></nx-icon>\n  </div>\n  <div class=\"info-scroll-content\" #infoScrollContent>\n    <ng-content></ng-content>\n  </div>\n  <div class=\"info-arrow\" *ngIf=\"showArrow\" [style.margin-left]=\"arrowML\"  [style.margin-top]=\"arrowMT\" #infoArrow ></div>\n</div>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:block}.info-info-content{width:calc(100vw - 20px);max-width:360px;min-height:200px;background-color:#fff;padding:15px 25px;box-shadow:0 8px 24px 0 rgba(65,65,65,.35);position:absolute;top:0;left:0;z-index:12;border-radius:5px}.info-info-content.show{display:block}.info-info-content.opacity0{opacity:0}.info-info-content .close-btn{width:40px;height:40px;font-size:0;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h50v50H0z'/%3E%3Cg stroke='%239B9B9B' stroke-linecap='round' stroke-width='2'%3E%3Cpath d='M14.898 15.317L35.102 35.52M36.112 14.898L15.909 35.102'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\");background-size:cover;background-repeat:no-repeat;position:absolute;top:10px;right:10px;z-index:2}.info-info-content .info-scroll-content{overflow:auto}.info-info-content .info-arrow{content:'';width:13px;height:13px;background-color:#fff;position:absolute;top:0;left:50%;-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);z-index:2;box-shadow:-3px -3px 10px -1px rgba(65,65,65,.1)}.info-info-content.right .info-arrow{top:50%;-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);left:0;box-shadow:-3px 3px 10px -1px rgba(65,65,65,.1)}.info-info-content.left .info-arrow{top:50%;-webkit-transform:translate(50%,-50%) rotate(45deg);transform:translate(50%,-50%) rotate(45deg);left:auto;right:0;box-shadow:3px -3px 10px -1px rgba(65,65,65,.1)}"]
                }] }
    ];
    UiInformationContentComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: ActionService }
    ]; };
    UiInformationContentComponent.propDecorators = {
        infoInfoContent: [{ type: ViewChild, args: ['infoInfoContent',] }],
        infoScrollContent: [{ type: ViewChild, args: ['infoScrollContent',] }],
        arrowContent: [{ type: ViewChild, args: ['infoArrow',] }],
        paddindData: [{ type: Input }],
        maxWidth: [{ type: Input }],
        controlBtn: [{ type: Input }],
        btnOnClick: [{ type: Output }],
        defaultPos: [{ type: Input }],
        showArrow: [{ type: Input }],
        documentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return UiInformationContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiInformationBtnComponent = /** @class */ (function () {
    function UiInformationBtnComponent(informationService) {
        this.informationService = informationService;
        this.crollTopNum = 0;
        this.onClick = new EventEmitter();
        this.outsideSpace = { top: 0,
            left: 0 };
        this.onAutoScroll = false;
        this.autoScrollOver = false;
        this._id = v4();
    }
    /**
     * @return {?}
     */
    UiInformationBtnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiInformationBtnComponent.prototype.scrollFunction = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        /** @type {?} */
        var scrollTopOld = this.scrollData.STOld;
        /** @type {?} */
        var scrollTopAdd = this.scrollData.STAdd;
        /** @type {?} */
        var scrollContent = this.scrollData.SC;
        /** @type {?} */
        var scrollLeft = this.scrollData.scrollLeft;
        /** @type {?} */
        var num = scrollTopAdd / 56;
        /** @type {?} */
        var countNum = 1;
        /** @type {?} */
        var numSet = num;
        // console.log(scrollContent.scrollTo(0,0));
        /** @type {?} */
        var scrollEffect = setInterval((/**
         * @return {?}
         */
        function () {
            numSet = numSet + (num * countNum) >= scrollTopAdd ? scrollTopAdd : numSet + (num * countNum);
            countNum++;
            scrollContent.scrollTo(scrollLeft, scrollTopOld + numSet);
            // console.log(scrollTopOld,numSet);
            if (numSet >= (scrollTopAdd)) {
                clearInterval(scrollEffect);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this_1.onAutoScroll = false;
                    _this_1.autoScrollOver = true;
                    _this_1.reRendering(document.body);
                }), 0);
            }
        }), 5);
    };
    /**
     * @return {?}
     */
    UiInformationBtnComponent.prototype.getScrollTop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var bodyTop = 0;
        if (typeof window.pageYOffset != "undefined") {
            bodyTop = window.pageYOffset;
        }
        else if (typeof document.compatMode != "undefined"
            && document.compatMode != "BackCompat") {
            bodyTop = document.documentElement.scrollTop;
        }
        else if (typeof document.body != "undefined") {
            bodyTop = document.body.scrollTop;
            // console.log('wewewe');
        }
        return bodyTop;
    };
    /**
     * @return {?}
     */
    UiInformationBtnComponent.prototype.countPos = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        console.log(this.messageContent, this.messageContent.show);
        if (this.messageContent != undefined && this.messageContent.show) {
            // console.log('work');
            /** @type {?} */
            var scrollContent_1 = this.inputScrollContent != undefined ? this.inputScrollContent : document.body;
            /** @type {?} */
            var autoScrollContent_1 = this.inputAutoScrollContent != undefined ? this.inputAutoScrollContent : false;
            console.log('in information btn', scrollContent_1);
            /** @type {?} */
            var scrollContentSize = scrollContent_1.getBoundingClientRect();
            console.log('in information btn scrollContentSize', scrollContentSize);
            /** @type {?} */
            var pageSize = scrollContent_1.scrollHeight;
            /** @type {?} */
            var windowBody_1 = document.body;
            /** @type {?} */
            var windowW_1 = windowBody_1.offsetWidth;
            /** @type {?} */
            var windowInnerH_1 = window.innerHeight;
            this.messageContent.controlBtn = this.btnContent;
            /** @type {?} */
            var btnDom = this.btnContent.nativeElement;
            /** @type {?} */
            var btnSize_1 = btnDom.getBoundingClientRect();
            /** @type {?} */
            var pos_1 = this.messageContent.defaultPos;
            /** @type {?} */
            var padding_1 = this.messageContent.paddindData;
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var contentMsg = _this_1.messageContent.controlContentPostion();
                //避免遞迴出現錯誤
                /** @type {?} */
                var contentBlock = contentMsg != undefined ? contentMsg.dom : false;
                //======================
                if (contentBlock) {
                    /** @type {?} */
                    var infoSize = contentMsg.infoDomSize;
                    /** @type {?} */
                    var infoSizeW = infoSize.width;
                    /** @type {?} */
                    var infoSizeH = infoSize.height;
                    /** @type {?} */
                    var btnSizeR = btnSize_1.right;
                    /** @type {?} */
                    var btnSizeL = btnSize_1.left;
                    /** @type {?} */
                    var btnCenterPos = btnSize_1.left + (btnSize_1.width / 2);
                    /** @type {?} */
                    var btnCenterHPos = btnSize_1.top + (btnSize_1.height / 2);
                    /** @type {?} */
                    var scrollTopNum = _this_1.crollTopNum ? _this_1.crollTopNum : _this_1.getScrollTop();
                    console.log('scrollTopNum', scrollTopNum);
                    /** @type {?} */
                    var scrollTopOldNum = autoScrollContent_1 ? autoScrollContent_1.scrollTop : scrollTopNum;
                    console.log('scrollTopOldNum', scrollTopOldNum);
                    /** @type {?} */
                    var scrollLeft = autoScrollContent_1 ? autoScrollContent_1.scrollLeft : 0;
                    /** @type {?} */
                    var scrollContentSize_1 = scrollContent_1 != undefined ? scrollContent_1.getBoundingClientRect() : false;
                    if (pos_1 == 'bottom') { //避免遞迴出現錯誤
                        console.log(btnCenterPos, infoSizeW);
                        /** @type {?} */
                        var posLeft = (btnCenterPos - (infoSizeW / 2));
                        /** @type {?} */
                        var posTop = (scrollTopNum + btnSize_1.top + btnSize_1.height + 2) - _this_1.outsideSpace.top;
                        contentBlock.style.top = posTop + 'px';
                        _this_1.messageContent.arrowML = "0px";
                        console.log('info pos', scrollTopNum, btnSize_1.top, btnSize_1.height, _this_1.outsideSpace.top);
                        //判斷方向
                        /** @type {?} */
                        var arrowLeft = 0;
                        /** @type {?} */
                        var arrowLeftW = 14;
                        if ((posLeft + infoSizeW + padding_1.right) > windowW_1) {
                            /** @type {?} */
                            var newInfoLeft = (windowW_1 - infoSizeW - padding_1.right - _this_1.outsideSpace.left);
                            arrowLeft = btnCenterPos - (newInfoLeft + infoSizeW / 2) - _this_1.outsideSpace.left;
                            arrowLeft = arrowLeft <= ((infoSizeW / 2) - arrowLeftW) ? arrowLeft : ((infoSizeW / 2) - arrowLeftW); //避免箭頭破版
                            contentBlock.style.left = newInfoLeft + 'px';
                            _this_1.messageContent.arrowML = arrowLeft + "px";
                        }
                        else if (posLeft < padding_1.left) {
                            /** @type {?} */
                            var newInfoLeft = padding_1.left - _this_1.outsideSpace.left;
                            arrowLeft = btnCenterPos - (newInfoLeft + infoSizeW / 2) - _this_1.outsideSpace.left;
                            arrowLeft = arrowLeft <= (arrowLeftW - (infoSizeW / 2)) ? (arrowLeftW - (infoSizeW / 2)) : arrowLeft; //避免箭頭破版
                            contentBlock.style.left = newInfoLeft + 'px';
                            _this_1.messageContent.arrowML = arrowLeft + "px";
                        }
                        else {
                            contentBlock.style.left = posLeft - _this_1.outsideSpace.left + 'px';
                        }
                        /** @type {?} */
                        var topSpace = infoSizeH + (posTop - scrollTopNum);
                        //判斷info btn是否超過畫面
                        if (scrollContentSize_1 && btnCenterPos < scrollContentSize_1.left ||
                            scrollContentSize_1 && btnCenterPos > scrollContentSize_1.right ||
                            scrollContentSize_1 && (btnSize_1.top + btnSize_1.height / 2) < scrollContentSize_1.top) {
                            _this_1.closeInfo();
                            return;
                        }
                        //判斷info content是否超過畫面
                        if (topSpace > windowInnerH_1 && !_this_1.onAutoScroll) {
                            //判斷自動滑完，在滑時自動關閉
                            console.log(_this_1.autoScrollOver);
                            if (_this_1.autoScrollOver) {
                                // console.log('iii');
                                _this_1.closeInfo();
                                return;
                            }
                            else {
                                _this_1.onAutoScroll = true;
                                //送出滑動參數
                                // console.log('aaa');
                                _this_1.scrollData = {
                                    STOld: scrollTopOldNum,
                                    STAdd: topSpace - windowInnerH_1 + padding_1.bottom,
                                    scrollLeft: scrollLeft,
                                    SC: autoScrollContent_1 ? _this_1.inputAutoScrollContent : window
                                };
                                _this_1.scrollFunction();
                            }
                        }
                    }
                    else if (pos_1 == 'right' || pos_1 == 'left') {
                        /** @type {?} */
                        var posLeft = (btnSizeR + 5);
                        /** @type {?} */
                        var posLeftL = (btnSizeL - 5 - infoSizeW);
                        /** @type {?} */
                        var posTop = btnCenterHPos - infoSizeH / 2;
                        /** @type {?} */
                        var arrowTop = 0;
                        /** @type {?} */
                        var arrowTopH = 14;
                        if ((posTop + infoSizeH) > (windowInnerH_1 - padding_1.bottom)) {
                            /** @type {?} */
                            var posOTop = posTop;
                            posTop = posTop - (posTop + infoSizeH - (windowInnerH_1 - padding_1.bottom));
                            arrowTop = (posOTop - posTop) > (infoSizeH / 2 - arrowTopH) ? infoSizeH / 2 - arrowTopH : (posOTop - posTop);
                        }
                        if ((posTop) < padding_1.top) {
                            /** @type {?} */
                            var posOTop = posTop;
                            posTop = padding_1.top;
                            arrowTop = posOTop - posTop < arrowTopH - infoSizeH / 2 ? arrowTopH - infoSizeH / 2 : posOTop - posTop;
                        }
                        pos_1 = posLeft + infoSizeW > (windowW_1 - padding_1.right) ? 'left' : 'right';
                        _this_1.messageContent.defaultPos = pos_1;
                        contentBlock.style.top = posTop + scrollTopOldNum - _this_1.outsideSpace.top + 'px';
                        contentBlock.style.left = pos_1 == 'right' ? (posLeft - _this_1.outsideSpace.left) + 'px' : (posLeftL - _this_1.outsideSpace.left) + 'px';
                        _this_1.messageContent.arrowMT = arrowTop + "px";
                    }
                    else {
                        //todo throw error
                        console.warn('defaultPos type olny "right" or "bottom"');
                        return;
                    }
                    _this_1.reRendering(windowBody_1);
                    // this.reRendering(this._elementRef.nativeElement);
                }
                _this_1.messageContent.opacity = true;
                // console.log(this.messageContent.opacity );
            }), 0);
        }
        else {
            this.autoScrollOver = false;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    UiInformationBtnComponent.prototype.btnClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onClick.emit(e);
        // if(this.messageContent.show){
        this.informationService.closeOthers(this._id);
        // this.informationService.getCloseAction().subscribe((id) => {
        //   console.log('_id:',this._id, 'id', id);
        //   if(this._id !== id){
        //     this.closeInfo();
        //   }
        // });
        // alert("this._id:"+this._id);
        // }
    };
    /**
     * @param {?} dom
     * @return {?}
     */
    UiInformationBtnComponent.prototype.reRendering = /**
     * @param {?} dom
     * @return {?}
     */
    function (dom) {
        // dom.style.transform = "translate(-0.5px)"; // mark: solve mantis 0014345
        // dom.style.width  = "calc(100% + 1px)";
        setTimeout((/**
         * @return {?}
         */
        function () {
            // dom.style.transform = ""; // mark: solve mantis 0014345
            dom.style.width = "";
        }), 10);
    };
    /**
     * @return {?}
     */
    UiInformationBtnComponent.prototype.closeInfo = /**
     * @return {?}
     */
    function () {
        this.messageContent.show = false;
        this.messageContent.opacity = false;
        this.autoScrollOver = false;
        this.reRendering(document.body);
    };
    /**
     * @return {?}
     */
    UiInformationBtnComponent.prototype.setContentPos = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            console.warn('setContentPos', _this);
            if (_this.messageContent != undefined) {
                _this.messageContent.opacity = _this.messageContent.show ? true : false;
                _this.messageContent.show = true;
                _this.btnClick(_this);
                // console.log(this.messageContent.opacity );
                _this.countPos();
            }
        }), 0);
    };
    UiInformationBtnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-information-btn',
                    template: "<div class=\"control-btn\" (click)=\"setContentPos()\" #controlBtnContent >\n  <ng-content></ng-content>\n  <div class=\"info-icon-tab\"\n  [ngClass]=\"{'bottom': messageContent.defaultPos=='bottom',\n              'top'   : messageContent.defaultPos=='top',\n              'show'  : messageContent.show}\">\n    <nx-icon name=\"info-circle\" fill=\"false\" outline=\"false\" size=\"auto\"></nx-icon>\n  </div>\n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-block}:host .info-icon-tab{width:20px;height:20px}:host .info-icon-tab ::ng-deep nx-icon{width:20px;height:20px;border:none;font-size:20px;color:#007ab3;background-color:transparent;line-height:1em}:host .info-icon-tab.bottom{position:relative;display:inline-block}:host .info-icon-tab.show{z-index:11}:host .info-icon-tab:not(:first-child){display:none}"]
                }] }
    ];
    UiInformationBtnComponent.ctorParameters = function () { return [
        { type: UiInformationService }
    ]; };
    UiInformationBtnComponent.propDecorators = {
        messageContent: [{ type: Input }],
        inputScrollContent: [{ type: Input }],
        inputAutoScrollContent: [{ type: Input }],
        crollTopNum: [{ type: Input }],
        onClick: [{ type: Output }],
        outsideSpace: [{ type: Input }],
        btnContent: [{ type: ViewChild, args: ['controlBtnContent',] }]
    };
    return UiInformationBtnComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(element, changeDector, renderer) {
        this.element = element;
        this.changeDector = changeDector;
        this.renderer = renderer;
        this.weekStartsOn = 1;
        this.eventList = [];
        this.translateMap = new Map();
        this.viewDateChange = new EventEmitter();
        this.uiCalendarClickEventItem = new EventEmitter();
        this.uiCalendarMobileWeekDayClicked = new EventEmitter();
        this.uiCalendarMobileMonthDayClicked = new EventEmitter();
        this.uiCalendarYearMonthClicked = new EventEmitter();
        this.uiCalendarSwipe = new EventEmitter();
        this.uiCalendarMoreInfoClicked = new EventEmitter();
        this.onRenderWeek = new EventEmitter();
        this._viewDate = new Date();
        this.daySwipeEventArr = [];
        this.calEventArr = [];
        this._viewType = 'month';
        this.yearVal = this.viewDate.getFullYear();
        this.monthEventItemMax = 3;
        this.today = new Date();
        this.format = format;
        this.dayViewHeader = [];
        // constant for swipe action: left or right
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight', UP: 'swipeup', DOWN: 'swipedown' };
        // more info setting
        //避免父層其他 position relative 引響 info
        this.outsideSpace = {
            top: 0,
            left: 0
        };
        // left: window.innerWidth>1023?160:0
        //info content 左右最小padding
        this.paddindData = {
            top: window.innerWidth > 1023 ? 115 : 10,
            right: 10,
            bottom: 10,
            left: window.innerWidth > 1023 ? 170 : 10
        };
    }
    Object.defineProperty(CalendarComponent.prototype, "viewType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._viewType;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            this._viewType = val;
            console.log('set viewType:', val, this._viewType);
            if (val == 'week' || val == 'day' || val == 'month') {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.bindSwipeDayEvent();
                    _this.changeDector.markForCheck();
                }), 200);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "viewDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._viewDate;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this._viewDate.getTime() != val.getTime()) {
                this.changeViewDate(new Date(val));
            }
            this.yearVal = this._viewDate.getFullYear();
        } // end set viewDate
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.bindSwipeDayEvent();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = event.target.innerWidth;
    };
    // action triggered when user swipes
    // action triggered when user swipes
    /**
     * @param {?=} action
     * @param {?=} currentViewType
     * @return {?}
     */
    CalendarComponent.prototype.swipe = 
    // action triggered when user swipes
    /**
     * @param {?=} action
     * @param {?=} currentViewType
     * @return {?}
     */
    function (action, currentViewType) {
        if (action === void 0) { action = this.SWIPE_ACTION.LEFT; }
        console.log('action', action);
        if (!currentViewType) {
            currentViewType = this.viewType;
        }
        console.log('swipe:', action, currentViewType);
        this.changeDector.markForCheck();
        // swipe right or down, previous
        if (action === this.SWIPE_ACTION.RIGHT || action === this.SWIPE_ACTION.DOWN) {
            this.prevView(currentViewType);
            this.viewDateChange.emit(new ViewDateChange({ date: this._viewDate, action: ChangeAction.SWIPE }));
        }
        // swipe left or up, next
        if (action === this.SWIPE_ACTION.LEFT || action === this.SWIPE_ACTION.UP) {
            this.nextView(currentViewType);
            this.viewDateChange.emit(new ViewDateChange({ date: this._viewDate, action: ChangeAction.SWIPE }));
        }
        this.uiCalendarSwipe.emit(this._viewDate);
    }; // end swipe
    // let _this = this;
    // end swipe
    // let _this = this;
    /**
     * @param {?} date
     * @param {?} type
     * @return {?}
     */
    CalendarComponent.prototype.getDayViewHeader = 
    // end swipe
    // let _this = this;
    /**
     * @param {?} date
     * @param {?} type
     * @return {?}
     */
    function (date, type) {
        var e_1, _a;
        // if (type == 'day') {
        /** @type {?} */
        var weekHeader = [];
        /** @type {?} */
        var startDay = startOfWeek(date, { weekStartsOn: this.weekStartsOn });
        try {
            for (var _b = __values(Array(7).fill(1).map((/**
             * @param {?} _
             * @param {?} i
             * @return {?}
             */
            function (_, i) { return i; }))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var index = _c.value;
                weekHeader.push({
                    date: index == 0 ? startDay : addDays(startDay, index),
                    isPast: isPast(addDays(startDay, index)),
                    isToday: isToday(addDays(startDay, index)),
                    isFuture: isFuture(addDays(startDay, index)),
                    isWeekend: isWeekend(addDays(startDay, index))
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return weekHeader;
        // }
        // else {
        //   return days;
        // }
    }; // end getDayViewHeader
    // end getDayViewHeader
    /**
     * @param {?} day
     * @return {?}
     */
    CalendarComponent.prototype.dayClicked = 
    // end getDayViewHeader
    /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        console.warn('ui dayClicked', day);
        this.changeViewDate(new Date(day.date));
        this.viewDateChange.emit(new ViewDateChange({ date: this._viewDate, action: ChangeAction.CLICK }));
    }; // end dayClicked
    // end dayClicked
    /**
     * @param {?} clickedDate
     * @return {?}
     */
    CalendarComponent.prototype.monthDayClicked = 
    // end dayClicked
    /**
     * @param {?} clickedDate
     * @return {?}
     */
    function (clickedDate) {
        this.changeViewDate(new Date(clickedDate));
        this.viewDateChange.emit(new ViewDateChange({ date: this._viewDate, action: ChangeAction.CLICK }));
        this.uiCalendarMobileMonthDayClicked.emit();
    }; // end monthDayClicked
    // end monthDayClicked
    /**
     * @param {?} eventItem
     * @return {?}
     */
    CalendarComponent.prototype.clickEventItem = 
    // end monthDayClicked
    /**
     * @param {?} eventItem
     * @return {?}
     */
    function (eventItem) {
        console.debug('calendar.component clickEventItem');
        this.uiCalendarClickEventItem.emit(eventItem);
    }; // end clickEventItem
    // end clickEventItem
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.yearMonthClicked = 
    // end clickEventItem
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.changeViewDate(new Date(date));
        this.viewDateChange.emit(new ViewDateChange({ date: this._viewDate, action: ChangeAction.CLICK }));
        this.uiCalendarYearMonthClicked.emit();
    }; // end yearMonthClicked
    // end yearMonthClicked
    /**
     * @param {?} colorCode
     * @return {?}
     */
    CalendarComponent.prototype.convertOpacityToHex = 
    // end yearMonthClicked
    /**
     * @param {?} colorCode
     * @return {?}
     */
    function (colorCode) {
        /** @type {?} */
        var opacity = 0.5;
        /** @type {?} */
        var hexStr = '' + colorCode;
        /**
         * @param {?} RGB_background
         * @param {?} RGBA_color
         * @return {?}
         */
        function _rgba2rgb(RGB_background, RGBA_color) {
            /** @type {?} */
            var alpha = RGBA_color.a;
            return {
                r: Math.floor((1 - alpha) * RGB_background.r + alpha * RGBA_color.r),
                g: Math.floor((1 - alpha) * RGB_background.g + alpha * RGBA_color.g),
                b: Math.floor((1 - alpha) * RGB_background.b + alpha * RGBA_color.b)
            };
        } // end _rgba2rgb function
        if (hexStr.indexOf('#') === -1 || hexStr.length !== 7) {
            alert('色碼格式錯誤！範例：#ffffff');
            return '';
        }
        /** @type {?} */
        var color_r = parseInt(hexStr.substr(1, 2), 16);
        /** @type {?} */
        var color_g = parseInt(hexStr.substr(3, 2), 16);
        /** @type {?} */
        var color_b = parseInt(hexStr.substr(5, 2), 16);
        /** @type {?} */
        var newColor = _rgba2rgb({
            r: 255,
            g: 255,
            b: 255,
            a: 1
        }, {
            r: color_r,
            g: color_g,
            b: color_b,
            a: opacity
        });
        return '#' + newColor.r.toString(16) + '' + newColor.g.toString(16) + '' + newColor.b.toString(16);
    }; // end convertOpacityToHex
    // end convertOpacityToHex
    /**
     * @param {?=} currentViewType
     * @return {?}
     */
    CalendarComponent.prototype.prevView = 
    // end convertOpacityToHex
    /**
     * @param {?=} currentViewType
     * @return {?}
     */
    function (currentViewType) {
        /** @type {?} */
        var today_year = this.today.getFullYear();
        /** @type {?} */
        var today_month = this.today.getMonth();
        switch (currentViewType) {
            case 'year':
                /** @type {?} */
                var new_year = this.viewDate.getFullYear() - 1;
                this.changeViewDate((today_year !== new_year
                    ? new Date(this.viewDate.setFullYear(new_year, 0, 1))
                    : new Date(this.today)));
                this.yearVal = this.viewDate.getFullYear();
                break;
            case 'month':
                /** @type {?} */
                var view_year = this.viewDate.getFullYear();
                /** @type {?} */
                var new_month = this.viewDate.getMonth() - 1;
                this.changeViewDate((today_month !== new_month || today_year !== view_year
                    ? new Date(this.viewDate.setMonth(new_month, 1))
                    : new Date(this.today)));
                break;
            case 'week':
                this.changeViewDate(subDays(this.viewDate, 7));
                break;
            case 'day':
                this.changeViewDate(subDays(this.viewDate, 1));
                break;
        } // end switch: viewType
    }; // end prevView
    // end prevView
    /**
     * @param {?=} currentViewType
     * @return {?}
     */
    CalendarComponent.prototype.nextView = 
    // end prevView
    /**
     * @param {?=} currentViewType
     * @return {?}
     */
    function (currentViewType) {
        /** @type {?} */
        var today_year = this.today.getFullYear();
        /** @type {?} */
        var today_month = this.today.getMonth();
        switch (currentViewType) {
            case 'year':
                /** @type {?} */
                var new_year = this.viewDate.getFullYear() + 1;
                this.changeViewDate((today_year !== new_year
                    ? new Date(this.viewDate.setFullYear(new_year, 0, 1))
                    : new Date(this.today)));
                this.yearVal = this.viewDate.getFullYear();
                break;
            case 'month':
                /** @type {?} */
                var view_year = this.viewDate.getFullYear();
                /** @type {?} */
                var new_month = this.viewDate.getMonth() + 1;
                this.changeViewDate((today_month !== new_month || today_year !== view_year
                    ? new Date(this.viewDate.setMonth(new_month, 1))
                    : new Date(this.today)));
                break;
            case 'week':
                this.changeViewDate(addDays(this.viewDate, 7));
                break;
            case 'day':
                this.changeViewDate(addDays(this.viewDate, 1));
                break;
        } // end switch: viewType
    }; // end nextView
    // 設 info position
    // end nextView
    // 設 info position
    /**
     * @param {?} dom
     * @return {?}
     */
    CalendarComponent.prototype.infoTabClick = 
    // end nextView
    // 設 info position
    /**
     * @param {?} dom
     * @return {?}
     */
    function (dom) {
        this.nowShowBtn = dom;
        this.uiCalendarMoreInfoClicked.emit(this.nowShowBtn);
        console.warn('ui infoTabClick', this.nowShowBtn);
    }; // end infoTabClick
    // end infoTabClick
    /**
     * @return {?}
     */
    CalendarComponent.prototype.closeInfo = 
    // end infoTabClick
    /**
     * @return {?}
     */
    function () {
        // console.warn('ui closeInfo', this.nowShowBtn, this.nowShowBtn.btnContent.nativeElement);
        if (this.nowShowBtn !== undefined) {
            this.nowShowBtn.closeInfo();
            // this.nowShowBtn = undefined;
        }
    }; // end closeInfo
    // end closeInfo
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    CalendarComponent.prototype.isSameDay = 
    // end closeInfo
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        return isSameDay(start, end);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.changeViewDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        this._viewDate = date;
        this.refreshHeader(date);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.bindSwipeDayEvent();
            _this.changeDector.markForCheck();
        }), 200);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.refreshHeader = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.dayViewHeader = this.getDayViewHeader(date, this.viewType);
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.bindSwipeDayEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_2, _a, e_3, _b, e_4, _c, e_5, _d;
        console.log('bind Swipe day event.');
        try {
            for (var _e = __values(this.daySwipeEventArr), _f = _e.next(); !_f.done; _f = _e.next()) {
                var e = _f.value;
                e();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.daySwipeEventArr = [];
        //week all day event block
        console.log('cal-all-day-events:', this.element.nativeElement.querySelectorAll('.cal-all-day-events').length);
        try {
            for (var _g = __values(this.element.nativeElement.querySelectorAll('.cal-all-day-events')), _h = _g.next(); !_h.done; _h = _g.next()) {
                var ele = _h.value;
                this.daySwipeEventArr.push(this.renderer.listen(ele, 'swipeleft', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.swipe(event.type);
                })));
                this.daySwipeEventArr.push(this.renderer.listen(ele, 'swiperight', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.swipe(event.type);
                })));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
            }
            finally { if (e_3) throw e_3.error; }
        }
        //week / day event list block
        console.log('cal-time-events length:', this.element.nativeElement.querySelectorAll('.cal-time-events').length);
        try {
            for (var _j = __values(this.element.nativeElement.querySelectorAll('.cal-time-events')), _k = _j.next(); !_k.done; _k = _j.next()) {
                var ele = _k.value;
                this.daySwipeEventArr.push(this.renderer.listen(ele, 'swipeleft', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.swipe(event.type);
                })));
                this.daySwipeEventArr.push(this.renderer.listen(ele, 'swiperight', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.swipe(event.type);
                })));
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
            }
            finally { if (e_4) throw e_4.error; }
        }
        //month event block
        console.log('cal-month-view length:', this.element.nativeElement.querySelectorAll('.cal-month-view').length);
        try {
            for (var _l = __values(this.element.nativeElement.querySelectorAll('.cal-month-view')), _m = _l.next(); !_m.done; _m = _l.next()) {
                var ele = _m.value;
                this.daySwipeEventArr.push(this.renderer.listen(ele, 'swipeleft', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.swipe(event.type);
                })));
                this.daySwipeEventArr.push(this.renderer.listen(ele, 'swiperight', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.swipe(event.type);
                })));
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.renderWeek = /**
     * @return {?}
     */
    function () {
        this.onRenderWeek.emit();
        console.log('in ui calendar renderWeek');
    };
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'utils-calendar',
                    template: "<ng-template *ngIf=\"windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n\n<ng-template #mobileBlock>\n  <!-- mode switch -->\n  <div [ngSwitch]=\"viewType\">\n    <div class=\"ui-calendar-month-m\" *ngSwitchCase=\"'month'\">\n      <app-ui-calendar-month [today]=\"today\" [(viewDate)]=\"viewDate\" [displayMonthFormat]=\"'MMMM'\" [weekStartsOn]=\"weekStartsOn\" [translateMap]=\"translateMap\"\n        [eventList] =\"eventList\" (calendarMonthDateClicked)=\"monthDayClicked($event)\" (swipeleft)=\"swipe($event.type)\"\n        (swiperight)=\"swipe($event.type)\" data-mc-options='{\"touchAction\": \"pan-y\"}'></app-ui-calendar-month>\n    </div>\n\n    <mwl-calendar-week-view *ngSwitchCase=\"viewType =='week' || viewType=='day' ? viewType :''\" class=\"ui-calendar-week-day-m\"\n      [viewDate]=\"viewDate\" [weekStartsOn]=\"weekStartsOn\" [events]=\"eventList\" [hourSegments]='1' [daysInWeek]=\"1\"\n      [hourSegmentHeight]='80' [eventTitleTemplate]=\"customEventTitleTemplate\" [headerTemplate]=\"headerTemplate\"\n      [allDayEventsLabelTemplate]=\"custom\" (beforeViewRender)=\"renderWeek()\" data-mc-options='{\"touchAction\": \"pan-x\"}'>\n    </mwl-calendar-week-view>\n\n    <div class=\"ui-calendar-year stop-scroll-block\" *ngSwitchCase=\"'year'\">\n      <app-ui-calendar-year [today]=\"this.today\" [(viewDate)]=\"this.viewDate\" [(viewYear)]=\"this.yearVal\"\n        [displayMonthFormat]=\"'MMMM'\" [weekStartsOn]=\"weekStartsOn\" [translateMap]=\"translateMap\"\n        (calendarYearMonthClicked)=\"yearMonthClicked($event)\"\n        (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\" data-mc-options='{\"touchAction\": \"pan-y\"}' ></app-ui-calendar-year>\n    </div>\n  </div>\n</ng-template>\n<!-- end mobileBlock -->\n\n<ng-template #pcBlock>\n  <!-- mode switch -->\n  <div [ngSwitch]=\"viewType\">\n    <mwl-calendar-month-view *ngSwitchCase=\"'month'\" class=\"ui-calendar-month\" [viewDate]=\"viewDate\" [weekStartsOn]=\"weekStartsOn\"\n      [events]=\"eventList\" [cellTemplate]=\"customMonthCellTemplate\" [headerTemplate]=\"monthHeaderTemplate\">\n    </mwl-calendar-month-view>\n\n    <mwl-calendar-week-view *ngSwitchCase=\"'week'\" class=\"ui-calendar-week\" [viewDate]=\"viewDate\" [weekStartsOn]=\"weekStartsOn\"\n      [events]=\"eventList\" [hourSegments]='1' [hourSegmentHeight]='80' [eventTitleTemplate]=\"customEventTitleTemplate\"\n      [headerTemplate]=\"headerTemplate\" [allDayEventsLabelTemplate]=\"custom\">\n    </mwl-calendar-week-view>\n\n    <mwl-calendar-week-view *ngSwitchCase=\"'day'\" class=\"ui-calendar-day\" [viewDate]=\"viewDate\" [weekStartsOn]=\"weekStartsOn\"\n      [events]=\"eventList\" [hourSegments]='1' [daysInWeek]=\"1\" [hourSegmentHeight]='80' [eventTitleTemplate]=\"customEventTitleTemplate\"\n      [headerTemplate]=\"dayHeaderTemplate\" [allDayEventsLabelTemplate]=\"custom\">\n    </mwl-calendar-week-view>\n\n    <div class=\"ui-calendar-year stop-scroll-block\" *ngSwitchCase=\"'year'\">\n      <app-ui-calendar-year [today]=\"this.today\" [(viewDate)]=\"this.viewDate\" [viewYear]=\"yearVal\" [displayMonthFormat]=\"'MMMM'\" [translateMap]=\"translateMap\"\n        [weekStartsOn]=\"weekStartsOn\" (calendarYearMonthClicked)=\"yearMonthClicked($event)\" (swipeleft)=\"swipe($event.type)\"\n        (swiperight)=\"swipe($event.type)\"></app-ui-calendar-year>\n    </div>\n  </div>\n</ng-template>\n<!-- end pcBlock -->\n\n\n<!-- Month -->\n<ng-template #monthHeaderTemplate let-days=\"days\" let-locale=\"locale\">\n  <div class=\"cal-cell-row cal-header\">\n    <div\n      class=\"cal-cell\"\n      *ngFor=\"let day of days;\"\n      [class.cal-past]=\"day.isPast\"\n      [class.cal-today]=\"day.isToday\"\n      [class.cal-future]=\"day.isFuture\"\n      [class.cal-weekend]=\"day.isWeekend\"\n      [ngClass]=\"day.cssClass\"\n    >\n      {{ translateMap.get(day.date | calendarDate:'monthViewColumnHeader':locale)\n        ? translateMap.get(day.date | calendarDate:'monthViewColumnHeader':locale)\n        : day.date | calendarDate:'monthViewColumnHeader':locale}}\n    </div>\n  </div>\n</ng-template>\n<!-- end: monthHeaderTemplate -->\n\n\n<ng-template #customMonthCellTemplate let-day=\"day\" let-locale=\"locale\" let-highlightDay=\"highlightDay\"\n  let-unhighlightDay=\"unhighlightDay\">\n\n  <ng-template *ngIf=\"day.events.length > monthEventItemMax then monthMore else monthEventCell\"></ng-template>\n\n  <ng-template #monthEventCell>\n    <div class=\"cal-cell-top event-cell\" (click)=\"dayClicked(day);\">\n      <span class=\"cal-day-number event-date\"\n      [ngClass]=\"{'event-day-active': (day.date | date: 'yyyy/MM/dd') === (this.viewDate | date: 'yyyy/MM/dd')}\">\n      {{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n      <!-- <span>{{day?.rrr}}</span> -->\n      <div class=\"events\" *ngIf=\"day.events.length > 0\">\n        <div class=\"event-wrapper\" *ngFor=\"let event of day.events.slice(0,3);\">\n\n          <ng-template *ngIf=\"day.events.length > monthEventItemMax then monthMoreItem else monthClickItem\"></ng-template>\n\n          <ng-template #monthEventItem>\n            <span class=\"cal-event\" [style.backgroundColor]=\"event.color?.primary\" [ngClass]=\"event?.cssClass\">\n            </span>\n            <small class=\"event-title\">{{event?.title}}</small><br>\n            <!-- <small class=\"event-desc\" *ngIf=\"event?.address !== ''\">{{event?.address}}</small> -->\n          </ng-template>\n          <!-- end: monthEventItem -->\n\n          <ng-template #monthMoreItem>\n            <ng-container *ngTemplateOutlet=\"monthEventItem\"></ng-container>\n          </ng-template>\n          <!-- end: monthMoreItem -->\n\n          <ng-template #monthClickItem>\n            <div (click)=\"clickEventItem(event)\">\n              <ng-container *ngTemplateOutlet=\"monthEventItem\"></ng-container>\n            </div>\n          </ng-template>\n          <!-- end: monthClickItem -->\n        </div>\n      </div>\n      <small *ngIf=\"day.events.length > monthEventItemMax\" class=\"event-more\">\n        {{day.events.length - 3}} more...\n      </small>\n    </div>\n  </ng-template>\n  <!-- end: monthEventCell -->\n\n  <ng-template #monthMore>\n    <!-- info -->\n    <!-- <app-ui-information-tab [defaultPos]=\"'right'\">\n      <ng-container informationTab=\"controlBtn\"> -->\n    <!-- \u9EDE\u64CA\u5167\u5BB9\u5143\u7D20 -->\n    <!-- <ng-container *ngTemplateOutlet=\"monthEventCell\"></ng-container>\n      </ng-container> -->\n    <!-- end: controlBtn -->\n    <!-- <ng-container informationTab=\"infoContent\">\n        <app-ui-text-type>\n          <ng-container *ngFor=\" let event of day.events\">\n            <app-ui-text-type-item [colorCode]=\"event.color.primary\" (click)=\"clickEventItem(event)\">\n              <p>{{ event.start | date: 'HH:mm' }}-{{ event.end | date: 'HH:mm' }}</p>\n              <p>{{ event.title }}</p>\n              <p>{{ event.location }}</p>\n            </app-ui-text-type-item>\n          </ng-container>\n        </app-ui-text-type>\n      </ng-container> -->\n    <!-- end: infoContent -->\n    <!-- </app-ui-information-tab> -->\n    <!-- end info -->\n\n    <app-ui-information-btn [outsideSpace]=\"outsideSpace\" [messageContent]=\"moreInfo\" (onClick)=\"infoTabClick($event)\">\n\n      <ng-container *ngTemplateOutlet=\"monthEventCell\"></ng-container>\n    </app-ui-information-btn>\n\n    <!--info content-->\n    <app-ui-information-content #moreInfo class=\"ui-calendar-more\" (btnOnClick)=\"closeInfo()\" [defaultPos]=\"'right'\"\n      [paddindData]=\"paddindData\">\n      <ng-container *ngTemplateOutlet=\"eventItemList\"></ng-container>\n    </app-ui-information-content>\n    <!-- end: info -->\n  </ng-template>\n  <!-- end: monthMore -->\n\n  <ng-template #eventItemList>\n    <!--<app-ui-text-type>-->\n      <!--<ng-container *ngFor=\" let event of day.events\">-->\n        <!--<app-ui-text-type-item [colorCode]=\"event.color.primary\" (click)=\"clickEventItem(event)\">-->\n          <!--<p *ngIf=\"event.allDay && !isSameDay(event.start,event.end)\"> Cross days </p>-->\n          <!--<p *ngIf=\"event.allDay && isSameDay(event.start,event.end)\"> All day </p>-->\n          <!--<p *ngIf=\"!event.allDay\">{{ event.start | date: 'HH:mm' }}-{{ event.end | date: 'HH:mm' }}</p>-->\n          <!--<p>{{ event.title }}</p>-->\n          <!--<p>{{ event.location }}</p>-->\n        <!--</app-ui-text-type-item>-->\n      <!--</ng-container>-->\n    <!--</app-ui-text-type>-->\n\n    <app-ui-calendar-event-list\n      [translateMap]=\"translateMap\"\n      [eventList] = \"day.events\"\n      (clickEvent)=\"clickEventItem($event)\">\n    </app-ui-calendar-event-list>\n  </ng-template>\n  <!-- end: eventItemList -->\n</ng-template>\n<ng-template #customMonthMobileCellTemplate let-day=\"day\" let-locale=\"locale\" let-highlightDay=\"highlightDay\"\n  let-unhighlightDay=\"unhighlightDay\">\n  <div class=\"cal-cell-top event-date\" (click)=\"monthDayClicked(day.date)\" [ngClass]=\"{'event-day-active': (day.date | date: 'yyyy/MM/dd') === (this.viewDate | date: 'yyyy/MM/dd')}\">\n    <span>{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n  </div>\n  <small *ngIf=\"day.events.length > 0\" class=\"event-exist\"></small>\n</ng-template>\n\n<!-- Week and Day -->\n<ng-template #custom>\n  <div class=\"cal-week-allday-label\">{{translateMap.get('All_Day')? translateMap.get('All_Day') : 'All day'}}</div>\n</ng-template>\n\n<ng-template #headerTemplate let-days=\"days\" let-locale=\"locale\" let-eventDropped=\"eventDropped\">\n  <div class=\"cal-day-headers cursor-default\" (swipeleft)=\"swipe($event.type, 'week')\" (swiperight)=\"swipe($event.type, 'week')\">\n    <div class=\"cal-header\" *ngFor=\"let day of dayViewHeader\" [class.cal-past]=\"day.isPast\" [class.cal-future]=\"day.isFuture\"\n      [class.cal-drag-over]=\"day.dragOver\" (mwlClick)=\"uiCalendarMobileWeekDayClicked.emit(day.date)\" mwlDroppable\n      (dragEnter)=\"day.dragOver = true\" (dragLeave)=\"day.dragOver = false\" (drop)=\"day.dragOver = false; eventDropped.emit({event: $event.dropData.event, newStart: day.date, fromHeader: true})\">\n      <div class=\"top\" [class.today]=\"day.isToday\" (click)=\"dayClicked(day)\">\n        <div class=\"day-label text-uppercase\">\n          {{ translateMap.get(day.date | calendarDate:'weekViewColumnHeader':locale)\n            ? translateMap.get(day.date | calendarDate:'weekViewColumnHeader':locale)\n            : day.date | calendarDate:'weekViewColumnHeader':locale}}\n        </div>\n        <div class=\"day-number\" [ngClass]=\"{'event-day-active': (day.date | date: 'yyyy/MM/dd') === (this.viewDate | date: 'yyyy/MM/dd')}\">\n          {{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #dayHeaderTemplate let-days=\"days\" let-locale=\"locale\" let-eventDropped=\"eventDropped\">\n  <div class=\"cal-day-headers cursor-default\"\n  (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">\n    <div class=\"cal-header\" *ngFor=\"let day of days\" [class.cal-past]=\"day.isPast\" [class.cal-future]=\"day.isFuture\"\n      [class.cal-drag-over]=\"day.dragOver\" (mwlClick)=\"uiCalendarMobileWeekDayClicked.emit(day.date)\" mwlDroppable\n      (dragEnter)=\"day.dragOver = true\" (dragLeave)=\"day.dragOver = false\" (drop)=\"day.dragOver = false; eventDropped.emit({event: $event.dropData.event, newStart: day.date, fromHeader: true})\">\n      <div class=\"top\" [class.today]=\"day.isToday\" (click)=\"dayClicked(day)\">\n        <div class=\"day-label text-uppercase\">\n          {{ translateMap.get(day.date | calendarDate:'weekViewColumnHeader':locale)\n            ? translateMap.get(day.date | calendarDate:'weekViewColumnHeader':locale)\n            : day.date | calendarDate:'weekViewColumnHeader':locale}}\n        </div>\n        <div class=\"day-number\" [ngClass]=\"{'event-day-active': (day.date | date: 'yyyy/MM/dd') === (this.viewDate | date: 'yyyy/MM/dd')}\">\n          {{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n<!-- end: dayHeaderTemplate -->\n\n<ng-template #customEventTitleTemplate let-event=\"event\" let-view=\"view\">\n  <div class=\"event-item\" [style.backgroundColor]=\"event.color?.secondary\" (click)=\"clickEventItem(event)\">\n    <span class=\"event-dot\" [style.backgroundColor]=\"event.color?.primary\"></span>\n    <div class=\"cal-event-title\" [style.color]=\"'black'\">\n      <!-- {{format(event.start,'HH:mm')}} - {{format(event.end,'HH:mm')}} -->\n      <p class=\"cal-title-txt\">{{event.title}}</p>\n      <p class=\"cal-desc-txt\">{{event?.location}}</p>\n    </div>\n  </div>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: CalendarDateFormatter,
                            useClass: CustomDateFormatter
                        },
                        {
                            provide: CalendarEventTitleFormatter,
                            useClass: CustomEventTitleFormatter
                        }
                    ],
                    styles: ["@charset \"UTF-8\";@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host.no-scroll ::ng-deep .info-info-content{overflow:auto!important}:host.no-scroll ::ng-deep .info-info-content .info-scroll-content{overflow-y:auto!important}:host.no-scroll ::ng-deep .cal-event{overflow-y:visible!important}[class^=ui-calendar-month] ::ng-deep .cal-month-view{height:100%;overflow:hidden;overflow-y:auto}[class^=ui-calendar-month] ::ng-deep .cal-header .cal-cell{background-color:#fff;color:#767676;font-size:.75rem;font-weight:700;line-height:1.33;letter-spacing:.2px;text-align:center;border:1px solid #ececec;border-bottom:0}[class^=ui-calendar-month] ::ng-deep .cal-header .cal-cell:not(:last-child){border-right:0}[class^=ui-calendar-month] ::ng-deep .cal-days{border-color:#ececec;background-color:#fff}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-cell-row,[class^=ui-calendar-month] ::ng-deep .cal-days .cal-day-cell,[class^=ui-calendar-month] ::ng-deep .cal-days .cal-day-cell:not(:last-child){border-color:#ececec}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-cell-row:hover{background-color:transparent}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-day-cell{width:14.28571%;min-height:120px}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-day-cell:hover{background-color:transparent}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-day-cell .event-date.event-day-active{background-color:#414141;color:#fff;-webkit-animation:1s fadein;animation:1s fadein}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-day-cell.cal-today .event-date.event-day-active{background-color:#003781}[class^=ui-calendar-month] ::ng-deep .cal-days .event-date{display:block;width:1.67em;height:1.67em;margin:5px 5px 0;float:none;color:#414141;font-size:.75rem;font-weight:600;line-height:1.67em;letter-spacing:.2px;text-align:center;opacity:1;border-radius:50%}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-weekend .event-date{color:#414141}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-today{background-color:transparent}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-today .event-date{color:#003781}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-out-month{background-color:#ececec}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-out-month.cal-day-cell:hover{background-color:#ececec}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-out-month .event-date{color:#767676;opacity:.5}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-out-month .events{opacity:.3}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-out-month .events .event-wrapper>*{opacity:1}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-out-month .event-more{opacity:.3}[class^=ui-calendar-month] ::ng-deep .cal-days .event-cell{padding-bottom:10px}[class^=ui-calendar-month] ::ng-deep .cal-days ::ng-deep .info-content .info-info-content{padding-top:40px}[class^=ui-calendar-month] ::ng-deep .cal-days ::ng-deep .info-info-content{max-width:305px;padding:10px 15px;border-radius:5px}[class^=ui-calendar-month] ::ng-deep .cal-days .events{padding:0 10px}[class^=ui-calendar-month] ::ng-deep .cal-days .events .event-wrapper{font-size:.75rem}[class^=ui-calendar-month] ::ng-deep .cal-days .events .event-wrapper:not(:last-child){margin-bottom:10px}[class^=ui-calendar-month] ::ng-deep .cal-days .events .event-wrapper .cal-event{width:5px;height:5px;margin:calc((1.25em - 5px)/ 2) 5px;vertical-align:top;border-radius:50%}[class^=ui-calendar-month] ::ng-deep .cal-days .events .event-wrapper .event-desc,[class^=ui-calendar-month] ::ng-deep .cal-days .events .event-wrapper .event-title{font-size:1em;line-height:1.25em;letter-spacing:.2px;color:#414141;display:inline-block;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}[class^=ui-calendar-month] ::ng-deep .cal-days .events .event-wrapper .event-title{width:calc(100% - 15px)}[class^=ui-calendar-month] ::ng-deep .cal-days .event-more{display:inline-block;padding:5px 10px 0 15px;font-size:.75rem;line-height:1.25em;letter-spacing:.2px;color:#767676}[class^=ui-calendar-month] app-ui-text-type-item ::ng-deep .ui-text-type-content{flex:1;min-width:1px}[class^=ui-calendar-month] app-ui-text-type-item ::ng-deep .ui-text-type-content p{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui-calendar-month-m ::ng-deep .cal-header .cal-cell{border:0;border-bottom:1px solid #ececec;padding-top:0}.ui-calendar-month-m ::ng-deep .cal-days{border:0;padding:0 5px}.ui-calendar-month-m ::ng-deep .cal-days .cal-cell-row,.ui-calendar-month-m ::ng-deep .cal-days .cal-day-cell,.ui-calendar-month-m ::ng-deep .cal-days .cal-day-cell:not(:last-child){border:0}.ui-calendar-month-m ::ng-deep .cal-days .cal-day-cell{min-height:0;align-self:flex-start}.ui-calendar-month-m ::ng-deep .cal-days .cal-day-cell:first-child{padding-left:0}.ui-calendar-month-m ::ng-deep .cal-days .cal-day-cell:last-child{padding-right:0}.ui-calendar-month-m ::ng-deep .cal-days .event-date{height:1.67em;min-height:0;margin-top:35px;margin-left:auto;margin-right:auto;font-size:1.33em;font-weight:300;line-height:1.67em;letter-spacing:normal;border:0}.ui-calendar-month-m ::ng-deep .cal-days .cal-out-month{opacity:0}.ui-calendar-month-m ::ng-deep .cal-days .cal-today .event-date{font-weight:700}.ui-calendar-month-m ::ng-deep .cal-days .event-exist{width:5px;height:5px;margin:0 auto;background-color:#d9d4d4;border-radius:50%}[class^=ui-calendar-day] ::ng-deep .cal-day-headers,[class^=ui-calendar-week] ::ng-deep .cal-day-headers{border:0;padding-left:60px}[class^=ui-calendar-day] ::ng-deep .cal-header,[class^=ui-calendar-week] ::ng-deep .cal-header{padding:0;text-align:center;border:0}[class^=ui-calendar-day] ::ng-deep .cal-header:first-child,[class^=ui-calendar-day] ::ng-deep .cal-header:not(:last-child),[class^=ui-calendar-week] ::ng-deep .cal-header:first-child,[class^=ui-calendar-week] ::ng-deep .cal-header:not(:last-child){border:0}[class^=ui-calendar-day] ::ng-deep .cal-header:hover,[class^=ui-calendar-week] ::ng-deep .cal-header:hover{background-color:transparent}[class^=ui-calendar-day] ::ng-deep .cal-header .day-label,[class^=ui-calendar-day] ::ng-deep .cal-header .day-number,[class^=ui-calendar-week] ::ng-deep .cal-header .day-label,[class^=ui-calendar-week] ::ng-deep .cal-header .day-number{font-size:.75rem;font-weight:700;line-height:normal;letter-spacing:.2px;color:#767676}[class^=ui-calendar-day] ::ng-deep .cal-header .day-label,[class^=ui-calendar-week] ::ng-deep .cal-header .day-label{padding:5px 0;border-bottom:1px solid #ececec}[class^=ui-calendar-day] ::ng-deep .cal-header .day-number,[class^=ui-calendar-week] ::ng-deep .cal-header .day-number{width:2em;line-height:2em;margin:5px auto;border-radius:50%}[class^=ui-calendar-day] ::ng-deep .cal-header .day-number.event-day-active,[class^=ui-calendar-week] ::ng-deep .cal-header .day-number.event-day-active{background-color:#414141;color:#fff;-webkit-animation:1s fadein;animation:1s fadein}[class^=ui-calendar-day] ::ng-deep .cal-header br,[class^=ui-calendar-week] ::ng-deep .cal-header br{display:none}[class^=ui-calendar-day] ::ng-deep .cal-header>b,[class^=ui-calendar-day] ::ng-deep .cal-header>span,[class^=ui-calendar-week] ::ng-deep .cal-header>b,[class^=ui-calendar-week] ::ng-deep .cal-header>span{font-size:.75rem;font-weight:700;line-height:2em;letter-spacing:.2px;color:#767676;opacity:1;vertical-align:top}[class^=ui-calendar-day] ::ng-deep .cal-header>span,[class^=ui-calendar-week] ::ng-deep .cal-header>span{display:inline-block;width:2em;line-height:2em;border-radius:50%}[class^=ui-calendar-day] ::ng-deep .cal-header>span:not(:first-child),[class^=ui-calendar-week] ::ng-deep .cal-header>span:not(:first-child){margin-left:10px}[class^=ui-calendar-day] ::ng-deep .cal-header>span:hover,[class^=ui-calendar-week] ::ng-deep .cal-header>span:hover{background-color:#414141;color:#fff}[class^=ui-calendar-day] ::ng-deep .cal-header .today .day-number,[class^=ui-calendar-day] ::ng-deep .cal-header .today>span,[class^=ui-calendar-day] ::ng-deep .cal-header.cal-today .day-number,[class^=ui-calendar-day] ::ng-deep .cal-header.cal-today>span,[class^=ui-calendar-week] ::ng-deep .cal-header .today .day-number,[class^=ui-calendar-week] ::ng-deep .cal-header .today>span,[class^=ui-calendar-week] ::ng-deep .cal-header.cal-today .day-number,[class^=ui-calendar-week] ::ng-deep .cal-header.cal-today>span{color:#003781}[class^=ui-calendar-day] ::ng-deep .cal-header .today .day-number.event-day-active,[class^=ui-calendar-day] ::ng-deep .cal-header .today>span.event-day-active,[class^=ui-calendar-day] ::ng-deep .cal-header.cal-today .day-number.event-day-active,[class^=ui-calendar-day] ::ng-deep .cal-header.cal-today>span.event-day-active,[class^=ui-calendar-week] ::ng-deep .cal-header .today .day-number.event-day-active,[class^=ui-calendar-week] ::ng-deep .cal-header .today>span.event-day-active,[class^=ui-calendar-week] ::ng-deep .cal-header.cal-today .day-number.event-day-active,[class^=ui-calendar-week] ::ng-deep .cal-header.cal-today>span.event-day-active{background-color:#003781;color:#fff}[class^=ui-calendar-day] ::ng-deep .cal-header.cal-today,[class^=ui-calendar-week] ::ng-deep .cal-header.cal-today{background-color:transparent}[class^=ui-calendar-day] ::ng-deep .cal-all-day-events,[class^=ui-calendar-week] ::ng-deep .cal-all-day-events{padding:0;border:0;border-top:1px solid #ececec}[class^=ui-calendar-day] ::ng-deep .cal-all-day-events .cal-time-label-column,[class^=ui-calendar-week] ::ng-deep .cal-all-day-events .cal-time-label-column{display:none}[class^=ui-calendar-day] ::ng-deep .cal-all-day-events .cal-week-allday-label,[class^=ui-calendar-week] ::ng-deep .cal-all-day-events .cal-week-allday-label{width:60px;padding-top:5px;font-size:.75rem;line-height:normal;letter-spacing:.2px;color:#767676;text-align:center}[class^=ui-calendar-day] ::ng-deep .cal-all-day-events .cal-day-column,[class^=ui-calendar-week] ::ng-deep .cal-all-day-events .cal-day-column{border-color:#ececec}[class^=ui-calendar-day] ::ng-deep .cal-all-day-events .cal-events-row,[class^=ui-calendar-week] ::ng-deep .cal-all-day-events .cal-events-row{height:22.5px;margin-left:60px;padding-top:1.25px}[class^=ui-calendar-day] ::ng-deep .cal-all-day-events .cal-event,[class^=ui-calendar-week] ::ng-deep .cal-all-day-events .cal-event{height:20px}[class^=ui-calendar-day] ::ng-deep .cal-time-events,[class^=ui-calendar-week] ::ng-deep .cal-time-events{border:0;border-top:1px solid #ececec;overflow:hidden;overflow-y:auto;align-items:stretch}@supports (top:constant(safe-area-inset-top)){[class^=ui-calendar-day] ::ng-deep .cal-time-events,[class^=ui-calendar-week] ::ng-deep .cal-time-events{padding-bottom:calc(constant(safe-area-inset-top) + constant(safe-area-inset-bottom) - 33px)}}@supports (top:env(safe-area-inset-top)){[class^=ui-calendar-day] ::ng-deep .cal-time-events,[class^=ui-calendar-week] ::ng-deep .cal-time-events{padding-bottom:calc(env(safe-area-inset-top) + env(safe-area-inset-bottom) - 33px)}}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-event-container:first-child .cal-event,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-event-container:first-child .cal-event{margin-right:0;width:calc(100% - 1px)}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-time-label-column,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-time-label-column{width:60px;height:auto}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-hour.cal-hour-odd,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-hour.cal-hour-odd{background-color:transparent;outline:#ececec solid 1px}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-hour .cal-hour-segment,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-hour .cal-hour-segment{border:0}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-hour .cal-hour-segment:first-child,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-hour .cal-hour-segment:first-child{padding-top:5px}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-hour .cal-hour-segment:hover,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-hour .cal-hour-segment:hover{background-color:transparent}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-hour .cal-time,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-hour .cal-time{width:100%;padding-top:0;font-size:.75rem;font-weight:400;line-height:normal;letter-spacing:.2px;color:#767676;text-align:center;height:100%;display:flex;align-items:center;justify-content:center}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-day-columns,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-day-columns{height:100%}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-day-column,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-day-column{border-color:#ececec}[class^=ui-calendar-day] ::ng-deep .cal-event,[class^=ui-calendar-week] ::ng-deep .cal-event{min-height:20px;padding:0;border:0;line-height:20px;border-radius:5px;background-color:transparent!important;color:#414141!important}[class^=ui-calendar-day] ::ng-deep .cal-event .event-item,[class^=ui-calendar-week] ::ng-deep .cal-event .event-item{display:flex;width:100%;height:100%;padding-left:5px}[class^=ui-calendar-day] ::ng-deep .cal-event .event-dot,[class^=ui-calendar-week] ::ng-deep .cal-event .event-dot{display:inline-block;width:5px;height:5px;min-width:5px;margin-right:5px;margin-top:7.5px;border-radius:50%}[class^=ui-calendar-day] ::ng-deep .cal-event .cal-event-title,[class^=ui-calendar-week] ::ng-deep .cal-event .cal-event-title{max-width:calc(100% - 15px);font-size:.75rem;font-weight:400;line-height:20px;letter-spacing:.2px;color:#414141!important}[class^=ui-calendar-day] ::ng-deep .cal-event .cal-event-title p,[class^=ui-calendar-week] ::ng-deep .cal-event .cal-event-title p{margin:0;max-width:100%;overflow:hidden;text-overflow:ellipsis}[class^=ui-calendar-day] ::ng-deep .cal-event .cal-event-title .cal-title-txt,[class^=ui-calendar-week] ::ng-deep .cal-event .cal-event-title .cal-title-txt{font-weight:700}@media (max-width:1023px){[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-hour .cal-time{height:100%;display:flex;align-items:center;justify-content:center}}.ui-calendar-day ::ng-deep .cal-week-view,.ui-calendar-week ::ng-deep .cal-week-view{background-color:#fff}.ui-calendar-day ::ng-deep .cal-header,.ui-calendar-week ::ng-deep .cal-header{border-right:1px solid #ececec}.ui-calendar-day ::ng-deep .cal-header:first-child,.ui-calendar-week ::ng-deep .cal-header:first-child{border-left:1px solid #ececec}.ui-calendar-day ::ng-deep .cal-header:first-child,.ui-calendar-day ::ng-deep .cal-header:not(:last-child),.ui-calendar-week ::ng-deep .cal-header:first-child,.ui-calendar-week ::ng-deep .cal-header:not(:last-child){border-right:1px solid #ececec}.ui-calendar-week ::ng-deep .cal-header .day-label{display:inline-block;border:0;vertical-align:top;line-height:2em}.ui-calendar-week ::ng-deep .cal-header .day-number{display:inline-block;margin-left:10px}.ui-calendar-day ::ng-deep .cal-header .day-label{display:inline-block;border:0;vertical-align:top;line-height:2em}.ui-calendar-day ::ng-deep .cal-header .day-number{display:inline-block;margin-left:10px}.ui-calendar-day ::ng-deep .cal-header>span{background-color:#414141;color:#fff;-webkit-animation:1s fadein;animation:1s fadein}.ui-calendar-day ::ng-deep .cal-header.cal-today>span{background-color:#003781;color:#fff}.ui-calendar-week-day-m ::ng-deep .cal-week-view{background-color:#fff}.ui-calendar-week-day-m ::ng-deep .cal-day-headers{padding:0}.ui-calendar-year ::ng-deep app-ui-calendar-year{width:100%;padding:30px 20px 0;background-color:#fff;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap;overflow-y:auto;overflow-x:hidden}@media screen and (max-width:1023px){.ui-calendar-year ::ng-deep app-ui-calendar-year{height:-webkit-max-content;height:-moz-max-content;height:max-content;padding:0 0 20px;-webkit-transform:translateX(5px);transform:translateX(5px)}[class^=ui-calendar-day] ::ng-deep .cal-week-view .cal-time-events .cal-day-columns,[class^=ui-calendar-week] ::ng-deep .cal-week-view .cal-time-events .cal-day-columns{display:inline-block}}"]
                }] }
    ];
    CalendarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    CalendarComponent.propDecorators = {
        viewType: [{ type: Input }],
        weekStartsOn: [{ type: Input }],
        eventList: [{ type: Input }],
        translateMap: [{ type: Input }],
        viewDate: [{ type: Input }],
        viewDateChange: [{ type: Output }],
        uiCalendarClickEventItem: [{ type: Output }],
        uiCalendarMobileWeekDayClicked: [{ type: Output }],
        uiCalendarMobileMonthDayClicked: [{ type: Output }],
        uiCalendarYearMonthClicked: [{ type: Output }],
        uiCalendarSwipe: [{ type: Output }],
        uiCalendarMoreInfoClicked: [{ type: Output }],
        onRenderWeek: [{ type: Output }],
        nowShowBtn: [{ type: ViewChild, args: [UiInformationBtnComponent,] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return CalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiCalendarYearComponent = /** @class */ (function () {
    function UiCalendarYearComponent() {
        this.weekStartsOn = 0;
        this.translateMap = new Map();
        this.viewYearChange = new EventEmitter();
        this.viewDateChange = new EventEmitter();
        this.calendarYearMonthClicked = new EventEmitter();
        this.weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    }
    Object.defineProperty(UiCalendarYearComponent.prototype, "viewYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._viewYear;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._viewYear = val;
            this.viewYearChange.emit(this._viewYear);
            // console.warn('ui viewYear', this._viewYear);
            if (val) {
                this.reorderWeekDays();
                this.monthInYear = this.setMonthInYear();
                // console.warn('ui monthInYear', this.monthInYear);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiCalendarYearComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.reorderWeekDays();
        this.monthInYear = this.setMonthInYear();
    };
    /**
     * @return {?}
     */
    UiCalendarYearComponent.prototype.reorderWeekDays = /**
     * @return {?}
     */
    function () {
        this.viewWeekDays = this.weekDays.slice(this.weekStartsOn, this.weekDays.length);
        if (this.weekStartsOn === 0) {
            return false;
        }
        /** @type {?} */
        var tmp = this.weekDays.slice(0, this.weekStartsOn);
        this.viewWeekDays = this.viewWeekDays.concat(tmp);
    }; // end reorderWeekDays
    // end reorderWeekDays
    /**
     * @return {?}
     */
    UiCalendarYearComponent.prototype.setMonthInYear = 
    // end reorderWeekDays
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var monthArr = [];
        for (var monthVal = 0; monthVal < 12; ++monthVal) {
            monthArr.push(new Date(this.viewYear, monthVal, 1));
        } // end for: month
        return monthArr;
    }; // end setMonthInYear function
    // end setMonthInYear function
    /**
     * @param {?} date
     * @return {?}
     */
    UiCalendarYearComponent.prototype.monthClicked = 
    // end setMonthInYear function
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.viewDate = date;
        this.viewDateChange.emit(this.viewDate);
        this.calendarYearMonthClicked.emit(this.viewDate);
    }; // end monthClicked
    UiCalendarYearComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-calendar-year',
                    template: "<div class=\"ui-calendarY-month-item\" *ngFor=\"let monthFirstDate of this.monthInYear\" (click)=\"monthClicked(monthFirstDate)\">\n  <p class=\"ui-calendarY-title\">{{translateMap.get(monthFirstDate | date: displayMonthFormat) ? translateMap.get(monthFirstDate | date: displayMonthFormat) : monthFirstDate | date: displayMonthFormat}}</p>\n\n  <div class=\"ui-calendarY-weekDays\">\n    <ul>\n      <li *ngFor=\"let weekDay of viewWeekDays\"><p class=\"ui-calendarY-weekDay-txt\">{{translateMap.get(weekDay) ? translateMap.get(weekDay) : weekDay}}</p></li>\n    </ul>\n  </div>\n  <!-- end: ui-calendarY-weekDays -->\n\n  <app-ui-calendar-year-month [today]=\"this.today\" [monthFirstDate]=\"monthFirstDate\" [weekDayList] =\"weekDays\" [viewWeekDayList]=\"viewWeekDays\"></app-ui-calendar-year-month>\n\n</div>\n<!-- end: ui-calendar-month-item -->\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-calendarY-month-item{width:22%}.ui-calendarY-month-item:not(:nth-child(4n)){margin-right:3%}.ui-calendarY-month-item:nth-child(n+5){margin-top:20px}.ui-calendarY-title{margin:0;font-size:1.125rem;font-weight:700;line-height:normal;letter-spacing:.2px;color:#007ab3}.ui-calendarY-title:not(:last-child){margin-bottom:10px}.ui-calendarY-weekDays>ul{display:flex;justify-content:space-between;align-items:stretch;list-style-type:none}.ui-calendarY-weekDays .ui-calendarY-weekDay-txt{margin:0;min-width:25px;font-size:.75rem;font-weight:400;line-height:normal;letter-spacing:.2px;text-align:center;color:#767676}@media screen and (max-width:1023px){.ui-calendarY-title{font-size:1rem}.ui-calendarY-title:not(:last-child){margin-bottom:0}.ui-calendarY-month-item{width:33%}.ui-calendarY-month-item:not(:nth-child(4n)),.ui-calendarY-month-item:nth-child(n+5){margin:0}.ui-calendarY-weekDays{display:none}}"]
                }] }
    ];
    UiCalendarYearComponent.ctorParameters = function () { return []; };
    UiCalendarYearComponent.propDecorators = {
        today: [{ type: Input }],
        displayMonthFormat: [{ type: Input }],
        weekStartsOn: [{ type: Input }],
        translateMap: [{ type: Input }],
        viewYear: [{ type: Input }],
        viewYearChange: [{ type: Output }],
        viewDate: [{ type: Input }],
        viewDateChange: [{ type: Output }],
        calendarYearMonthClicked: [{ type: Output }]
    };
    return UiCalendarYearComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateObj = /** @class */ (function () {
    function DateObj(txt, isToday$$1) {
        this.txt = txt;
        this.isToday = isToday$$1;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} isToday
     * @return {THIS}
     */
    DateObj.prototype.setIsToday = /**
     * @template THIS
     * @this {THIS}
     * @param {?} isToday
     * @return {THIS}
     */
    function (isToday$$1) {
        (/** @type {?} */ (this)).isToday = isToday$$1;
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    DateObj.prototype.getIsToday = /**
     * @return {?}
     */
    function () {
        return this.isToday;
    };
    /**
     * @return {?}
     */
    DateObj.prototype.getTxt = /**
     * @return {?}
     */
    function () {
        return this.txt;
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} txt
     * @return {THIS}
     */
    DateObj.prototype.setTxt = /**
     * @template THIS
     * @this {THIS}
     * @param {?} txt
     * @return {THIS}
     */
    function (txt) {
        (/** @type {?} */ (this)).txt = txt;
        return (/** @type {?} */ (this));
    };
    return DateObj;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiCalendarYearMonthComponent = /** @class */ (function () {
    function UiCalendarYearMonthComponent() {
    }
    /**
     * @return {?}
     */
    UiCalendarYearMonthComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dateInMonth = this.setDateInMonth();
    };
    /**
     * @return {?}
     */
    UiCalendarYearMonthComponent.prototype.setDateInMonth = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var dateArr = [];
        /** @type {?} */
        var viewYear = this.monthFirstDate.getFullYear();
        /** @type {?} */
        var viewMonth = this.monthFirstDate.getMonth();
        /** @type {?} */
        var firstDay = this.monthFirstDate.getDay();
        /** @type {?} */
        var todayYear = this.today.getFullYear();
        /** @type {?} */
        var todayMonth = this.today.getMonth();
        /** @type {?} */
        var todayDate = this.today.getDate();
        try {
            for (var _b = __values(this.viewWeekDayList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var weekDay = _c.value;
                if (weekDay === this.weekDayList[firstDay]) {
                    break;
                }
                else {
                    dateArr.push(new DateObj('', false));
                }
            } // end for: check the first weekDay
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        for (var dateVal = 1; dateVal <= new Date(viewYear, (viewMonth + 1), 0).getDate(); ++dateVal) {
            dateArr.push(new DateObj(String(new Date(viewYear, viewMonth, dateVal).getDate()), (todayYear === viewYear && todayMonth === viewMonth && todayDate === dateVal)));
        } // end for: date in month
        return dateArr;
    }; // end setDateInMonth function
    UiCalendarYearMonthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-calendar-year-month',
                    template: "<div class=\"ui-calendarY-dates\">\n  <div class=\"ui-calendarY-date\" *ngFor=\"let dateObj of this.dateInMonth\" [ngClass]=\"{\n    'ui-today': dateObj.isToday\n  }\">\n    <p>{{ dateObj.getTxt() }}</p>\n  </div>\n</div>\n<!-- end: ui-calendarY-days -->\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-calendarY-dates{display:flex;justify-content:flex-start;align-items:stretch;flex-wrap:wrap;margin-bottom:5px}.ui-calendarY-dates .ui-calendarY-date{min-width:calc(100% / 7);height:1.5rem}.ui-calendarY-dates .ui-calendarY-date.ui-today{position:relative}.ui-calendarY-dates .ui-calendarY-date.ui-today:before{content:'';display:inline-block;width:20px;height:20px;position:absolute;top:calc(50% - 10px);left:calc(50% - 10px);background-color:#003781;border-radius:50%}.ui-calendarY-dates .ui-calendarY-date.ui-today>p{position:relative;color:#fff}.ui-calendarY-dates .ui-calendarY-date>p{margin:0;font-size:.75rem;font-weight:400;line-height:1.5rem;letter-spacing:normal;text-align:center;color:#414141}@media screen and (max-width:1023px){.ui-calendarY-dates .ui-calendarY-date{-webkit-transform:scale(.83);transform:scale(.83);min-width:calc(95% / 7);height:1.25rem;overflow:visible!important}.ui-calendarY-dates .ui-calendarY-date.ui-today::before{top:calc(50% - .5rem)}}"]
                }] }
    ];
    UiCalendarYearMonthComponent.ctorParameters = function () { return []; };
    UiCalendarYearMonthComponent.propDecorators = {
        monthFirstDate: [{ type: Input }],
        today: [{ type: Input }],
        weekDayList: [{ type: Input }],
        viewWeekDayList: [{ type: Input }]
    };
    return UiCalendarYearMonthComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiCalendarMonthComponent = /** @class */ (function () {
    function UiCalendarMonthComponent() {
        this.weekStartsOn = 0;
        this.translateMap = new Map();
        this.isDateShowFull = false;
        this.isShowTitle = true;
        this.isShowOtherMonthDay = false;
        this.lastMonthDate = [];
        this.nextMonthDate = [];
        // private _isShowOtherMonthDay = false;
        // @Input() 
        // get isShowOtherMonthDay () {
        //   return this._isShowOtherMonthDay;
        // }
        // set isShowOtherMonthDay(isShowOtherMonthDay) {
        //   this._isShowOtherMonthDay = isShowOtherMonthDay;
        // }
        this._events = [];
        this._viewDate = new Date();
        this.viewDateChange = new EventEmitter();
        this.calendarMonthDateClicked = new EventEmitter();
        this.calendarPrevClick = new EventEmitter();
        this.calendarNextClick = new EventEmitter();
        // days of week
        this.weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.hasEventDates = [];
    }
    Object.defineProperty(UiCalendarMonthComponent.prototype, "eventList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._events;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._events = val;
            // console.warn('ui viewDate', this._events);
            // console.warn('events', this.events);
            if (val) {
                this.hasEventDates = this.checkHasEventDates();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiCalendarMonthComponent.prototype, "viewDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._viewDate;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._viewDate = val;
            this.viewDateChange.emit(this._viewDate);
            console.warn('ui viewDate', this._viewDate);
            console.warn('events', this._events);
            if (val) {
                this.reorderWeekDays();
                this.dateInMonth = this.setDateInMonth();
                this.hasEventDates = this.checkHasEventDates();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiCalendarMonthComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.reorderWeekDays();
        this.dateInMonth = this.setDateInMonth();
    };
    /**
     * @return {?}
     */
    UiCalendarMonthComponent.prototype.reorderWeekDays = /**
     * @return {?}
     */
    function () {
        this.viewWeekDays = this.weekDays.slice(this.weekStartsOn, this.weekDays.length);
        if (this.weekStartsOn === 0) {
            return false;
        }
        /** @type {?} */
        var tmp = this.weekDays.slice(0, this.weekStartsOn);
        this.viewWeekDays = this.viewWeekDays.concat(tmp);
    }; // end reorderWeekDays
    // end reorderWeekDays
    /**
     * @return {?}
     */
    UiCalendarMonthComponent.prototype.setDateInMonth = 
    // end reorderWeekDays
    /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var dateArr = [];
        /** @type {?} */
        var firstDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);
        /** @type {?} */
        var viewYear = firstDate.getFullYear();
        /** @type {?} */
        var viewMonth = firstDate.getMonth();
        /** @type {?} */
        var firstDay = firstDate.getDay();
        // last month last day
        //alert(viewYear + '/' + viewMonth );
        /** @type {?} */
        var lastMonthHasDay = new Date(viewYear, viewMonth, 0).getDate();
        /** @type {?} */
        var thisMonthHasDay = new Date(viewYear, viewMonth + 1, 0).getDate();
        console.warn('setDateInMonth', this.viewDate);
        console.warn('setDateInMonth', viewYear, viewMonth, firstDay);
        /** @type {?} */
        var todayYear = this.today.getFullYear();
        /** @type {?} */
        var todayMonth = this.today.getMonth();
        /** @type {?} */
        var todayDate = this.today.getDate();
        /** @type {?} */
        var count = 0;
        /** @type {?} */
        var lastMonthDateReversed = [];
        /** @type {?} */
        var nextMonthDate = [];
        try {
            for (var _b = __values(this.viewWeekDays), _c = _b.next(); !_c.done; _c = _b.next()) {
                var weekDay = _c.value;
                if (weekDay === this.weekDays[firstDay]) {
                    break;
                }
                else {
                    //console.log('weekDay !== fistdaty', weekDay)
                    if (!this.isShowOtherMonthDay) {
                        dateArr.push(new DateObj('', false));
                    }
                    else {
                        lastMonthDateReversed.push(lastMonthHasDay - count);
                        count++;
                    }
                }
            } // end for: check the first weekDay
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        //caculate show lastMonth and nextMonth
        if (this.isShowOtherMonthDay) {
            this.lastMonthDate = this.reverseLastMonthDate(lastMonthDateReversed);
            /** @type {?} */
            var thisMonthlastdateWeekDay = new Date(viewYear, viewMonth, thisMonthHasDay).getDay();
            //0 SUN
            if (thisMonthlastdateWeekDay == 0) {
                this.nextMonthDate = nextMonthDate;
            }
            else {
                for (var i = 1; i <= 7 - thisMonthlastdateWeekDay; i++) {
                    nextMonthDate.push(i);
                }
                this.nextMonthDate = nextMonthDate;
            }
        }
        //this.changeDetector.detectChanges();
        //console.log("this.lastMonthDate: ", this.reverseLastMonthDate(lastMonthDateReversed));
        // }
        for (var dateVal = 1; dateVal <= new Date(viewYear, (viewMonth + 1), 0).getDate(); ++dateVal) {
            dateArr.push(new DateObj(String(new Date(viewYear, viewMonth, dateVal).getDate()), (todayYear === viewYear && todayMonth === viewMonth && todayDate === dateVal)));
        } // end for: date in month
        return dateArr;
    }; // end setDateInMonth function
    // end setDateInMonth function
    /**
     * @param {?} lastMonthDateReversed
     * @return {?}
     */
    UiCalendarMonthComponent.prototype.reverseLastMonthDate = 
    // end setDateInMonth function
    /**
     * @param {?} lastMonthDateReversed
     * @return {?}
     */
    function (lastMonthDateReversed) {
        /** @type {?} */
        var correctLastMonthDate = [];
        for (var i = (lastMonthDateReversed.length) - 1; i >= 0; i--) {
            correctLastMonthDate.push(lastMonthDateReversed[i]);
        }
        //this.lastMonthDate = correctLastMonthDate;
        return correctLastMonthDate;
    };
    /**
     * @param {?} dateObj
     * @return {?}
     */
    UiCalendarMonthComponent.prototype.changeViewDate = /**
     * @param {?} dateObj
     * @return {?}
     */
    function (dateObj) {
        /** @type {?} */
        var clickDate = dateObj.getTxt();
        this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), Number(clickDate));
        this.calendarMonthDateClicked.emit(this.viewDate);
    }; // end changeViewDate
    // end changeViewDate
    /**
     * @return {?}
     */
    UiCalendarMonthComponent.prototype.checkHasEventDates = 
    // end changeViewDate
    /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var arr = [];
        /** @type {?} */
        var tmp_viewYear = this.viewDate.getFullYear();
        /** @type {?} */
        var tmp_viewMonth = this.viewDate.getMonth();
        /** @type {?} */
        var tmp_viewDate = this.viewDate.getDate();
        /** @type {?} */
        var monthDays = new Date(tmp_viewYear, (tmp_viewMonth + 1), 0).getDate();
        for (var dateVal = 1; dateVal <= monthDays; ++dateVal) {
            /** @type {?} */
            var tmp_date = new Date(tmp_viewYear, tmp_viewMonth, dateVal);
            /** @type {?} */
            var tmp_dateTime = tmp_date.getTime();
            try {
                // console.warn('tmp_dateTime', tmp_dateTime, tmp_date);
                for (var _b = __values(this._events), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var event_1 = _c.value;
                    /** @type {?} */
                    var eventYear_start = event_1.start.getFullYear();
                    /** @type {?} */
                    var eventMonth_start = event_1.start.getMonth();
                    /** @type {?} */
                    var eventDate_start = event_1.start.getDate();
                    /** @type {?} */
                    var eventDateTime_start = event_1.start.getTime();
                    /** @type {?} */
                    var eventYear_end = event_1.end.getFullYear();
                    /** @type {?} */
                    var eventMonth_end = event_1.end.getMonth();
                    /** @type {?} */
                    var eventDate_end = event_1.end.getDate();
                    /** @type {?} */
                    var eventDateTime_end = event_1.end.getTime();
                    if ((tmp_viewYear === eventYear_start && tmp_viewMonth === eventMonth_start && dateVal === eventDate_start)
                        || (tmp_viewYear === eventYear_end && tmp_viewMonth === eventMonth_end && dateVal === eventDate_end)) {
                        arr.push(String(dateVal));
                        break;
                    }
                    else if (tmp_dateTime > eventDateTime_start
                        && tmp_dateTime < eventDateTime_end) {
                        arr.push(String(dateVal));
                        // console.log('eventDateTime_start', eventDateTime_start, event.start);
                        // console.log('eventDateTime_end', eventDateTime_end, event.end);
                        break;
                    }
                } // end for: check the date has event or not
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        } // end for: monthDays
        return arr;
    }; // end checkHasEventDates
    UiCalendarMonthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-calendar-month',
                    template: "\n<div class=\"ui-calendar-weekDays\">\n  <ul>\n    <li class=\"ui-calendar-weekDay-item\" *ngFor=\"let weekDay of viewWeekDays\">\n      <p class=\"ui-calendar-weekDay-txt\">{{translateMap.get(weekDay) ? translateMap.get(weekDay) : weekDay}}</p>\n    </li>\n  </ul>\n</div>\n<!-- end: ui-calendar-weekDays -->\n\n<p *ngIf=\"isShowTitle\" class=\"ui-calendar-title\">{{translateMap.get(viewDate | date: displayMonthFormat) ? translateMap.get(viewDate | date: displayMonthFormat) : viewDate | date: displayMonthFormat}}</p>\n\n<div class=\"ui-calendar-dates\">\n  <ng-container *ngIf=\"isShowOtherMonthDay\">\n    <div class=\"ui-calendar-date style-not-this-month\" *ngFor=\"let num of lastMonthDate\">\n        <p>{{num}}</p>\n        <small *ngIf=\"false\" class=\"event-exist\"></small>\n    </div>\n  </ng-container>\n  <div class=\"ui-calendar-date\" *ngFor=\"let dateObj of this.dateInMonth\"\n  [ngClass]=\"{\n    'ui-today': dateObj.isToday,\n    'ui-selected': dateObj.getTxt() === viewDate.getDate().toString()\n  }\"\n  (click)=\"changeViewDate(dateObj)\">\n    <p>{{ dateObj.getTxt() }}</p>\n    <small *ngIf=\"hasEventDates.includes( dateObj.getTxt() )\" class=\"event-exist\"></small>\n  </div>\n  <ng-container *ngIf=\"isShowOtherMonthDay\">\n    <div class=\"ui-calendar-date style-not-this-month\" *ngFor=\"let num of nextMonthDate\">\n        <p>{{num}}</p>\n        <small *ngIf=\"true\" class=\"event-exist\"></small>\n    </div>\n  </ng-container>\n</div>\n<!-- end: ui-calendar-days -->\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:block}.ui-calendar-title{margin:20px 5px 0;font-size:1.125rem;font-weight:700;line-height:normal;letter-spacing:.2px;color:#007ab3}.ui-calendar-weekDays .ui-calendar-weekDay-txt{margin:0;padding-bottom:5px;background-color:#fff;color:#767676;font-size:.75rem;font-weight:700;line-height:1.33;letter-spacing:.2px;text-align:center;border:1px solid #ececec;border-bottom:0}.ui-calendar-weekDays .ui-calendar-weekDay-txt:not(:last-child){border-right:0}.ui-calendar-dates{display:flex;justify-content:flex-start;align-items:stretch;flex-wrap:wrap;margin-top:-30px}.ui-calendar-dates .ui-calendar-date{width:14.28571%;align-self:flex-start}.ui-calendar-dates .ui-calendar-date p{width:1.67em;height:1.67em;min-height:0;margin:35px auto 5px;color:#414141;font-size:.75rem;font-weight:600;line-height:1.67em;letter-spacing:.2px;text-align:center;opacity:1;border-radius:50%}.ui-calendar-dates .ui-calendar-date.style-not-this-month p{color:#c2c2c2}.ui-calendar-dates .ui-calendar-date.ui-selected p{background-color:#414141;color:#fff}.ui-calendar-dates .ui-calendar-date.ui-today p{color:#003781;font-weight:700}.ui-calendar-dates .ui-calendar-date.ui-today.ui-selected p{background-color:#003781;color:#fff}.event-exist{display:block;width:5px;height:5px;margin:0 auto;background-color:#d9d4d4;border-radius:50%}@media screen and (max-width:1023px){.ui-calendar-weekDays>ul{display:flex}.ui-calendar-weekDays .ui-calendar-weekDay-item{display:inline-block;flex:1}.ui-calendar-weekDays .ui-calendar-weekDay-txt{border:0;border-bottom:1px solid #ececec;padding-top:0}.ui-calendar-title{margin-left:15px;margin-right:15px}.ui-calendar-dates{margin-top:-15px}.ui-calendar-dates .ui-calendar-date p{font-size:1.33em;font-weight:300;letter-spacing:normal;border:0}}:host-context(.calendar-style-collapse) .ui-calendar-weekDays .ui-calendar-weekDay-txt{margin:0;padding-bottom:20px;background-color:#fff;color:#767676;font-size:.75rem;font-weight:700;line-height:1.33;letter-spacing:.2px;text-align:center;border:none;border-bottom:0}:host-context(.calendar-style-collapse) .ui-calendar-weekDays .ui-calendar-weekDay-txt:not(:last-child){border-right:0}:host-context(.calendar-style-collapse) .ui-calendar-dates{display:flex;justify-content:flex-start;align-items:stretch;flex-wrap:wrap;margin-top:-30px}:host-context(.calendar-style-collapse) .ui-calendar-dates .ui-calendar-date{width:14.28571%;align-self:flex-start;position:relative}:host-context(.calendar-style-collapse) .ui-calendar-dates .ui-calendar-date p{width:1.3em;height:1.3em;line-height:1.3em;min-height:0;margin:20px auto 0;font-size:.75rem;font-weight:600;letter-spacing:.2px;text-align:center;opacity:1;border-radius:50%}:host-context(.calendar-style-collapse) .ui-calendar-dates .ui-calendar-date.ui-selected p{background-color:#414141;color:#fff}:host-context(.calendar-style-collapse) .ui-calendar-dates .ui-calendar-date.ui-today p{color:#003781;font-weight:700}:host-context(.calendar-style-collapse) .ui-calendar-dates .ui-calendar-date.ui-today.ui-selected p{background-color:#003781;color:#fff}:host-context(.calendar-style-collapse) .event-exist{position:absolute;left:0;right:0;margin:0 auto;bottom:-10px}"]
                }] }
    ];
    UiCalendarMonthComponent.ctorParameters = function () { return []; };
    UiCalendarMonthComponent.propDecorators = {
        today: [{ type: Input }],
        displayMonthFormat: [{ type: Input }],
        weekStartsOn: [{ type: Input }],
        translateMap: [{ type: Input }],
        isDateShowFull: [{ type: Input }],
        isShowTitle: [{ type: Input }],
        isShowOtherMonthDay: [{ type: Input }],
        eventList: [{ type: Input }],
        viewDate: [{ type: Input }],
        viewDateChange: [{ type: Output }],
        calendarMonthDateClicked: [{ type: Output }],
        calendarPrevClick: [{ type: Output }],
        calendarNextClick: [{ type: Output }]
    };
    return UiCalendarMonthComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiCalendarEventListComponent = /** @class */ (function () {
    function UiCalendarEventListComponent() {
        this.eventList = [];
        this.translateMap = new Map();
        this.textColorStyle = ''; //'', textColorStyle
        this.clickEvent = new EventEmitter();
        this.styleText = '';
    }
    /**
     * @return {?}
     */
    UiCalendarEventListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleText = this.textColorStyle == 'grey' ? ' style-grey' : '';
    };
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    UiCalendarEventListComponent.prototype.isSameDay = /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        return isSameDay(start, end);
    };
    /**
     * @param {?} eventItem
     * @return {?}
     */
    UiCalendarEventListComponent.prototype.clickEventItem = /**
     * @param {?} eventItem
     * @return {?}
     */
    function (eventItem) {
        console.warn('ui-calendar-eventList.component clickEventItem');
        this.clickEvent.emit(eventItem);
    }; // end clickEventItem
    UiCalendarEventListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-calendar-event-list',
                    template: "<app-ui-text-type [colorCode]=\"colorCode\" [ngClass]=\"styleText\" [title]=\"title\">\n  <ng-container *ngFor=\" let event of eventList\">\n    <app-ui-text-type-item [colorCode]=\"event.color&&event.color.primary?event.color.primary:''\" (click)=\"clickEventItem(event)\">\n      <p *ngIf=\"event.allDay && !isSameDay(event.start,event.end)\"> {{translateMap.get('Cross_Day') ? translateMap.get('Cross_Day') : 'Cross days'}}</p>\n      <p *ngIf=\"event.allDay && isSameDay(event.start,event.end)\"> {{translateMap.get('All_Day') ? translateMap.get('All_Day') : 'All day'}}</p>\n      <p *ngIf=\"!event.allDay\">{{ event.start | date: 'HH:mm' }}-{{ event.end | date: 'HH:mm' }}</p>\n      <p>{{ event.title }}</p>\n      <p>{{ event.location }}</p>\n    </app-ui-text-type-item>\n  </ng-container>\n  <ng-container *ngIf=\"eventList.length == 0\">\n    <ng-content select=\"[scheduleNoData]\"></ng-content>\n  </ng-container>\n</app-ui-text-type>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host .style-grey app-ui-text-type-item ::ng-deep .ui-text-type-content p{color:#c2c2c2}:host app-ui-text-type-item ::ng-deep .ui-text-type-content{flex:1;min-width:1px}:host app-ui-text-type-item ::ng-deep .ui-text-type-content p{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
                }] }
    ];
    UiCalendarEventListComponent.ctorParameters = function () { return []; };
    UiCalendarEventListComponent.propDecorators = {
        eventList: [{ type: Input }],
        title: [{ type: Input }],
        colorCode: [{ type: Input }],
        translateMap: [{ type: Input }],
        textColorStyle: [{ type: Input }],
        clickEvent: [{ type: Output }]
    };
    return UiCalendarEventListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var animationCollapse = trigger('openClose', [
    state('*', style({
        height: '0',
        opacity: 0
    })),
    state('open', style({
        height: '*',
        opacity: 1
    })),
    state('closed', style({
        height: '0',
        opacity: 0
    })),
    transition('open => closed', animate('200ms ease-in-out')),
    transition('closed => open', animate('200ms ease-in-out'))
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiCalendarMonthCollapseComponent = /** @class */ (function (_super) {
    __extends(UiCalendarMonthCollapseComponent, _super);
    function UiCalendarMonthCollapseComponent(_changeDetector, showRule) {
        var _this = _super.call(this) || this;
        _this._changeDetector = _changeDetector;
        _this.showRule = showRule;
        _this.statusOpenClose = 'closed';
        // fix date Format
        _this.yearFormat = 'yyyy';
        _this.monthFormat = 'MM';
        _this.dayFormat = 'dd';
        _this.weekFormat = 'EE';
        _this._isCollapse = false;
        _this.isCollapseStyle = false; //false: style no collapse; true: style show collpase 
        //TODO
        _this.isCollapseChange = new EventEmitter();
        _this.onClickDate = new EventEmitter();
        _this.onSwitchMonth = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype._markForCheck = /**
     * @return {?}
     */
    function () {
        this._changeDetector.markForCheck();
    };
    Object.defineProperty(UiCalendarMonthCollapseComponent.prototype, "isCollapse", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isCollapse;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isCollapse = val;
            this.isCollapseChange.emit(this._isCollapse);
            this.statusOpenClose = this._isCollapse ? 'open' : 'closed';
            this._markForCheck();
            console.log('set value', val);
        },
        enumerable: true,
        configurable: true
    });
    // click today button
    // click today button
    /**
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype.goToToday = 
    // click today button
    /**
     * @return {?}
     */
    function () {
        //this.changeViewDate(this.today);
        console.log('go today now', this.today);
        this.viewDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
        this.onClickDate.emit(this.viewDate);
        this.viewDateChange.emit(this.viewDate);
    };
    // click prev button
    // click prev button
    /**
     * @param {?} dateObj
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype.prevClick = 
    // click prev button
    /**
     * @param {?} dateObj
     * @return {?}
     */
    function (dateObj) {
        console.log('prev tody', this.today);
        /** @type {?} */
        var prevMonth = dateObj.getMonth() - 1 == -1 ? 11 : dateObj.getMonth() - 1;
        /** @type {?} */
        var getYear$$1 = dateObj.getMonth() - 1 == -1 ? dateObj.getFullYear() - 1 : dateObj.getFullYear();
        this.viewDate = new Date(getYear$$1, prevMonth, dateObj.getDate());
        this.onSwitchMonth.emit(this.viewDate);
        this.viewDateChange.emit(this.viewDate);
    };
    // click next month
    // click next month
    /**
     * @param {?} dateObj
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype.nextClick = 
    // click next month
    /**
     * @param {?} dateObj
     * @return {?}
     */
    function (dateObj) {
        // caculate next month and is need to change next year
        /** @type {?} */
        var nextMonth = dateObj.getMonth() + 1 == 12 ? 0 : dateObj.getMonth() + 1;
        /** @type {?} */
        var getYear$$1 = dateObj.getMonth() + 1 == 12 ? dateObj.getFullYear() + 1 : dateObj.getFullYear();
        this.viewDate = new Date(getYear$$1, nextMonth, dateObj.getDate());
        this.onSwitchMonth.emit(this.viewDate);
        this.viewDateChange.emit(this.viewDate);
    };
    // click collapse button
    // click collapse button
    /**
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype.toggleShowCalendar = 
    // click collapse button
    /**
     * @return {?}
     */
    function () {
        this._isCollapse = !this._isCollapse;
        this.isCollapseChange.emit(this._isCollapse);
        this.statusOpenClose = this._isCollapse ? 'open' : 'closed';
    };
    // click date
    // click date
    /**
     * @param {?} dateObj
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype.clickDate = 
    // click date
    /**
     * @param {?} dateObj
     * @return {?}
     */
    function (dateObj) {
        this.viewDate = dateObj;
        this.onClickDate.emit(dateObj);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype.getMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return getMonth(date) + 1;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype.convertDateWithoutYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (this.showRule) {
            return this.showRule.convertDateWithoutYear(date);
        }
        else {
            return format(date, "MM/dd");
        }
    };
    UiCalendarMonthCollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-calendar-month-collapse',
                    template: "<!-- lg title -->\n<div class=\"ui-calendar-title-lg-block\">\n    <div class=\"title-sm-block\">\n        <div class=\"sm-text\">{{ viewDate | date: yearFormat }}</div>\n        <!-- <div class=\"today\" (click)=\"goToToday()\">Today</div> -->\n    </div>\n    <div class=\"title-date-block\">\n    <div class=\"date-block font-size_h2\">\n        {{ convertDateWithoutYear(viewDate) }}\n    </div>\n    <div *ngIf=\"isCollapseStyle\" class=\"week-block\">\n        {{ viewDate | date: weekFormat }}\n    </div>\n    </div>\n    <button *ngIf=\"isCollapseStyle\" class=\"collapse-block\" (click)=\"toggleShowCalendar()\" [ngClass]=\"isCollapse ? ' active': ''\">\n        <img src=\"assets/img/icon-arrow-down.svg\">\n    </button>\n</div>\n<!-- end of lg title -->\n<!-- end of  lg title and collapse-->\n<ng-container *ngIf=\"isCollapseStyle\">\n    <div class=\"calendar-detail-block \" [@openClose]=\"statusOpenClose\" >\n        <div class=\"switch-block\">\n            <button class=\"arrow-block prev-block\" (click)=\"prevClick(viewDate)\">\n                <img src=\"assets/img/icon-arrow-down.svg\">\n            </button>\n            <div class=\"current-month-text\"> {{ viewDate | date: monthFormat }}</div>\n            <button class=\"arrow-block next-block\" (click)=\"nextClick(viewDate)\">\n                <img src=\"assets/img/icon-arrow-down.svg\">\n            </button>\n        </div>\n        <app-ui-calendar-month [isShowOtherMonthDay]=\"true\" class=\"calendar-style-collapse\" [isShowTitle]=\"false\" [displayMonthFormat]=\"displayMonthFormat\"  [today]=\"today\" [viewDate]=\"viewDate\"  [weekStartsOn]=\"weekStartsOn\" [translateMap]=\"translateMap\"\n        [eventList]=\"eventList\" (calendarMonthDateClicked)=\"clickDate($event)\"></app-ui-calendar-month>\n    </div>\n</ng-container>\n    \n",
                    animations: [
                        animationCollapse
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:block}.ui-calendar-title{margin:20px 5px 0;font-size:1.125rem;font-weight:700;line-height:normal;letter-spacing:.2px;color:#007ab3}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-weekDays .ui-calendar-weekDay-txt{margin:0;padding-bottom:20px;background-color:#fff;color:#767676;font-size:.75rem;font-weight:700;line-height:1.33;letter-spacing:.2px;text-align:center;border:1px solid #ececec;border-bottom:0}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-weekDays .ui-calendar-weekDay-txt:not(:last-child){border-right:0}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-dates::ng-deep{display:flex;justify-content:flex-start;align-items:stretch;flex-wrap:wrap;margin-top:-30px}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-dates::ng-deep .ui-calendar-date::ng-deep{width:14.28571%;align-self:flex-start}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-dates::ng-deep .ui-calendar-date::ng-deep p::ng-deep{width:1.67em;height:.9em;min-height:0;margin:20px auto 0;color:#414141;font-size:.75rem;font-weight:600;line-height:.9em;letter-spacing:.2px;text-align:center;opacity:1;border-radius:50%}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-dates::ng-deep .ui-calendar-date::ng-deep:last-of-type p::ng-deep{margin-bottom:20px}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-dates::ng-deep .ui-calendar-date::ng-deep.ui-selected p::ng-deep{background-color:#414141;color:#fff}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-dates::ng-deep .ui-calendar-date::ng-deep.ui-today::ng-deep p::ng-deep{color:#003781;font-weight:700}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-dates::ng-deep .ui-calendar-date::ng-deep.ui-today::ng-deep.ui-selected p::ng-deep{background-color:#003781;color:#fff}.event-exist{display:block;width:5px;height:5px;margin:0 auto;background-color:#d9d4d4;border-radius:50%}button{background-color:transparent;border:none;outline:0;padding:0;margin:0}button:focus{background-color:transparent}.ui-calendar-title-lg-block{background-color:rgba(73,110,189,.05);padding:20px 12px;position:relative}.ui-calendar-title-lg-block .title-sm-block{display:flex;justify-content:space-between;padding:0 8px 15px}.ui-calendar-title-lg-block .title-sm-block .sm-text{font-size:1rem;font-weight:700;color:#003781;position:relative}.ui-calendar-title-lg-block .title-sm-block .sm-text:after{content:' ';display:inline-block;max-width:18px;width:100%;height:2px;bottom:0;left:0;position:absolute;background-color:#003781}.ui-calendar-title-lg-block .title-sm-block .today{font-size:.875rem;line-height:20px;color:#007ab3;font-weight:700}.ui-calendar-title-lg-block .title-date-block{display:block;color:#003781;padding-right:8px}.ui-calendar-title-lg-block .title-date-block .date-block{font-weight:700;display:inline-block}.ui-calendar-title-lg-block .title-date-block .week-block{display:inline-block;padding-left:15px;font-weight:700;font-size:.875rem}.ui-calendar-title-lg-block .collapse-block{position:absolute;right:20px;bottom:20px}.ui-calendar-title-lg-block .collapse-block img{max-width:24px;width:100%;transition:.5s}.ui-calendar-title-lg-block .collapse-block.active img{-webkit-transform:rotate(180deg);transform:rotate(180deg)}@media screen and (min-width:1025px){.ui-calendar-title-lg-block .collapse-block img{max-width:2.4vw}}.switch-block{display:flex;justify-content:space-between;padding:20px 20px 13px}.switch-block .arrow-block{display:inline-block}.switch-block .arrow-block img{max-width:16px;width:100%}.switch-block .arrow-block.next-block img{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.switch-block .arrow-block.prev-block img{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.switch-block .current-month-text{font-size:1.125rem;color:#003781;font-weight:700}.calendar-detail-block{display:inline-block;-webkit-transform-origin:top;transform-origin:top;transition:transform .3s ease-in-out,max-height .3s ease-in-out,-webkit-transform .3s ease-in-out;overflow:hidden;max-width:250px}.calendar-detail-block.active{position:relative}@media screen and (min-width:1025px){.switch-block .arrow-block img{max-width:1.6vw}.calendar-detail-block{max-width:25vw}}@media screen and (max-width:1023px){:host ::ng-deep .ui-calendar-weekDays>ul{display:flex}:host ::ng-deep .ui-calendar-weekDays .ui-calendar-weekDay-item{display:inline-block;flex:1}:host ::ng-deep .ui-calendar-weekDays .ui-calendar-weekDay-txt{border:0;border-bottom:1px solid #ececec;padding-top:0}:host ::ng-deep .ui-calendar-dates .ui-calendar-date p{font-size:1.33em;font-weight:300;letter-spacing:normal;border:0}.calendar-detail-block{max-width:100%}}"]
                }] }
    ];
    UiCalendarMonthCollapseComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] }
    ]; };
    UiCalendarMonthCollapseComponent.propDecorators = {
        isCollapse: [{ type: Input }],
        isCollapseStyle: [{ type: Input }],
        isCollapseChange: [{ type: Output }],
        onClickDate: [{ type: Output }],
        onSwitchMonth: [{ type: Output }]
    };
    return UiCalendarMonthCollapseComponent;
}(UiCalendarMonthComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiCardStyleTag1Component = /** @class */ (function () {
    function UiCardStyleTag1Component() {
    }
    /**
     * @return {?}
     */
    UiCardStyleTag1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiCardStyleTag1Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-card-style-tag1',
                    template: "<div class=\"space-ui-version v-card-style-tag-1\">\n  <div class=\"card-block\">\n    <!-- tag -->\n    <div class=\"tag-block\">\n        <div class=\"tag-content\">\n          <ng-content select=\"[textType=tag]\"></ng-content>\n        </div>\n    </div>\n    <!-- end of tag -->\n    <!-- content -->\n    <div class=\"content-block\">\n      <ng-content select=\"[textType=cardContent]\"></ng-content>\n    </div>\n    <!-- end of content -->\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.v-card-style-tag-1 .card-block{box-shadow:0 2px 4px 0 rgba(0,0,0,.19);background-color:#fff;padding:20px;border-radius:5px}.v-card-style-tag-1 .tag-block{background-color:#003781;color:#fff;font-size:.75rem;line-height:normal;padding:3px 10px;position:relative;left:-25px;display:inline-block;border-radius:3px}.v-card-style-tag-1 .content-block{padding-top:15px}"]
                }] }
    ];
    UiCardStyleTag1Component.ctorParameters = function () { return []; };
    return UiCardStyleTag1Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiCardContentBtnComponent = /** @class */ (function () {
    function UiCardContentBtnComponent() {
        this.noPadding = false;
        this.hasBtn = false;
        this.outsideBtn = false;
    }
    /**
     * @return {?}
     */
    UiCardContentBtnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiCardContentBtnComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.btnContent.nativeElement.childNodes.length) {
            this.outsideBtn = true;
        }
    };
    UiCardContentBtnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-card-content-btn',
                    template: "<div class=\"card-content-btn\" [ngClass]=\"{'hasBtn':outsideBtn && hasBtn,\n                                          'noPadding':noPadding}\">\n  <div class=\"info-content\">\n    <ng-content select=\"[infoContent]\"></ng-content>\n  </div>\n  <div class=\"btn-content\" #btnContent>\n    <ng-content select=\"[btnContent]\"></ng-content>\n  </div>\n</div>\n  \n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.card-content-btn{background-color:#fff;padding:20px 35px;border-radius:5px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19)}.card-content-btn:not(.hasBtn) .btn-content{display:none}.card-content-btn.hasBtn{padding-bottom:0}.card-content-btn.hasBtn .btn-content{-webkit-transform:translateY(25px);transform:translateY(25px)}.card-content-btn.noPadding{padding:0}"]
                }] }
    ];
    UiCardContentBtnComponent.ctorParameters = function () { return []; };
    UiCardContentBtnComponent.propDecorators = {
        btnContent: [{ type: ViewChild, args: ['btnContent',] }],
        noPadding: [{ type: Input }],
        hasBtn: [{ type: Input }]
    };
    return UiCardContentBtnComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiCollapseText1Component = /** @class */ (function () {
    function UiCollapseText1Component(changeDetctor) {
        this.changeDetctor = changeDetctor;
        this.translateEmpty = "Empty";
        this._isCollapseBtnShow = true;
        this._isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.activeClasses = '';
    }
    Object.defineProperty(UiCollapseText1Component.prototype, "isCollapseBtnShow", {
        get: /**
         * @return {?}
         */
        function () { return this._isCollapseBtnShow; },
        set: /**
         * @param {?} isShow
         * @return {?}
         */
        function (isShow) {
            this._isCollapseBtnShow = isShow;
            console.debug('ui-collapse-text1', this._isCollapseBtnShow);
            this.changeDetctor.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiCollapseText1Component.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isOpen = val;
            this.activeClasses = this._isOpen ? 'active' : '';
            this.isOpenChange.emit(this._isOpen);
            this.changeDetctor.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiCollapseText1Component.prototype.toggleCollapse = /**
     * @return {?}
     */
    function () {
        this._isOpen = !this._isOpen;
        this.changeDetctor.detectChanges();
        return this._isOpen;
    };
    /**
     * @return {?}
     */
    UiCollapseText1Component.prototype.isOpenStatus = /**
     * @return {?}
     */
    function () {
        return this._isOpen ? 'open' : 'closed';
    };
    /**
     * @return {?}
     */
    UiCollapseText1Component.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiCollapseText1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiCollapseText1Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-collapse-text1',
                    animations: [
                        animationCollapse
                    ],
                    template: "<div class=\"space-ui-version collapse-group-block\" [ngClass]=\"activeClasses\">\n    <!-- empty status -->\n    <div [hidden]=\"!isDataEmpty\" class=\"empty-block\">\n        <app-ui-empty-default>\n            <ng-container textType=\"emptyText\">{{translateEmpty}}</ng-container>\n        </app-ui-empty-default>\n    </div>\n    <!-- end of empty status -->\n    <div class=\"card-content-block\" [hidden]=\"isDataEmpty\">\n        <ng-content select=\"[TextType=cardContent]\"></ng-content>\n        <div class=\"collpase-block collapse-more-block\" [@openClose]=\"isOpenStatus()\">\n            <ng-content select=\"[TextType=collapseContentMore]\"></ng-content>\n        </div>\n        <div class=\"collapse-btn-block\" (click)=\"isOpen = !isOpen\" [ngClass]=\"activeClasses\">\n            <ng-container *ngIf=\"isCollapseBtnShow\">\n                <ng-content select=\"[TextType=collapseBtn]\"></ng-content>\n                <span class=\"icon-arrow\"></span>\n            </ng-container>\n        </div>\n    </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host .collapse-group-block{border-top:1px solid #c2c2c2}:host .collapse-group-block .empty-block{border-bottom:1px solid #c2c2c2;padding:5px 0}:host .collapse-group-block .gas-layout-form{padding:0 20px}:host .collapse-group-block.active .collapse-block ::ng-deep .info-unit-block{padding-top:5px}:host .collapse-group-block ::ng-deep [class*=gas-col-]{margin-bottom:4px}:host .collapse-group-block .collapse-btn-block{display:inline-block;vertical-align:middle;padding-top:20px;line-height:normal;position:relative;z-index:9;cursor:pointer;text-align:center;width:100%;border-bottom:1px solid #c2c2c2;padding-bottom:5px}:host .collapse-group-block .collapse-btn-block .icon-arrow{padding-top:0;display:inline-block}"]
                }] }
    ];
    UiCollapseText1Component.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiCollapseText1Component.propDecorators = {
        TextType: [{ type: Input }],
        collapseBtn: [{ type: Input }],
        isDataEmpty: [{ type: Input }],
        translateEmpty: [{ type: Input }],
        isCollapseBtnShow: [{ type: Input }],
        isOpen: [{ type: Input }],
        isOpenChange: [{ type: Output }]
    };
    return UiCollapseText1Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiCollapseCard1Component = /** @class */ (function () {
    function UiCollapseCard1Component(changeDetector) {
        this.changeDetector = changeDetector;
        this.emptyText = ['You can click', ' to add your customer\'s information.'];
        this.isOpen = false;
        this.activeClasses = '';
    }
    /**
     * @return {?}
     */
    UiCollapseCard1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    //isOpen = true;
    //isOpen = true;
    /**
     * @return {?}
     */
    UiCollapseCard1Component.prototype.toggleCollapse = 
    //isOpen = true;
    /**
     * @return {?}
     */
    function () {
        this.isOpen = !this.isOpen;
        this.activeClasses = this.isOpen ? 'active' : '';
        this.changeDetector.markForCheck();
        this.changeDetector.detectChanges();
        return this.isOpen;
    };
    /**
     * @return {?}
     */
    UiCollapseCard1Component.prototype.isOpenStatus = /**
     * @return {?}
     */
    function () {
        return this.isOpen ? 'open' : 'closed';
    };
    /**
     * @return {?}
     */
    UiCollapseCard1Component.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        //console.log('content child:', this.collapseContentHeight.nativeElement.childNodes.length);
        // has one if hide html, so child > 1 show no other child
        // this.collapseContentHeight.nativeElement.childNodes.length > 1 ? this.isHide = false : this.isHide = true;
    };
    UiCollapseCard1Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-collapse-card1',
                    animations: [
                        trigger('openClose', [
                            state('open', style({
                                height: '*',
                                opacity: 1
                            })),
                            state('closed', style({
                                height: '0',
                                opacity: 0
                            })),
                            transition('open => closed', animate('200ms ease-in-out')),
                            transition('closed => open', animate('200ms ease-in-out'))
                        ]),
                    ],
                    template: "<!-- empty -->\n<div [hidden]=\"!isDataEmpty\" class=\"empty-block\">\n  <app-ui-card-style-tag1>\n    <ng-container textType=\"tag\">\n      {{tagText}}\n    </ng-container>\n    <ng-container textType=\"cardContent\">\n        <div class=\"empty-text\">\n            {{emptyText[0]}}\n            <span class=\"icon-img\"><img src=\"./assets/img/icon-edit-grey.svg\"></span>\n            {{emptyText[1]}}\n        </div>\n    </ng-container>\n  </app-ui-card-style-tag1>\n</div>\n<!-- end of empty -->\n<!-- content -->\n<div [hidden]=\"isDataEmpty\" class=\"detail-block\">\n  <app-ui-card-style-tag1>\n    <ng-container textType=\"tag\">\n      {{tagText}}\n    </ng-container>\n      <ng-container textType=\"cardContent\">\n        <!-- content -->\n        <div class=\"collapse-group-block\" [ngClass]=\"activeClasses\">\n          <app-ui-form-layout-advanced [isOnlyText]=\"true\"> \n                <div class=\"collapse-origin-block\">\n                    <ng-content select=\"[textType=collapseContentOrigin]\"></ng-content>\n                </div>\n                <div #collapseContentHeight class=\"collapse-block\" [@openClose]=\"isOpenStatus()\">\n                    <ng-content  select=\"[textType=collapseContent]\"></ng-content>\n                </div>\n          </app-ui-form-layout-advanced>\n          <div #collapseBtn class=\"collapse-btn-block\" [ngClass]=\"isHide ? 'hide' : ''\" (click)=\"toggleCollapse()\">\n              <ng-content select=\"[textType=collapseBtn]\"></ng-content>\n              <span class=\"icon-arrow\"></span>\n          </div>\n        </div>\n        <!-- end of content -->\n      </ng-container>\n    \n  </app-ui-card-style-tag1>\n</div>\n<!-- end of content -->\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep .v-card-style-tag-1 .card-block{position:relative}:host ::ng-deep .v-card-style-tag-1 .card-block .content-block{margin-left:-20px;margin-right:-20px}:host ::ng-deep .v-card-style-tag-1 .collapse-group-block .gas-layout-form{padding:0 20px}:host ::ng-deep .gas-layout-form .gas-row-block{margin-top:0}:host ::ng-deep .gas-layout-form [class*=gas-col-]{margin-bottom:15px}:host .detail-block{padding-left:5px}:host .empty-block{padding-left:5px}:host .empty-block .content-block{padding-top:15px;text-align:center;padding-left:25px;padding-right:30px}:host .empty-block .empty-text{font-size:.875rem;font-weight:300;line-height:28px;display:inline-block;vertical-align:middle;text-align:center;width:100%}:host .empty-block .icon-img{display:inline-block;vertical-align:middle}:host .collapse-group-block .gas-layout-form{padding:0 20px}:host .collapse-group-block.active .collapse-block ::ng-deep .info-unit-block{padding-top:5px}:host .collapse-group-block.active .collapse-btn-block .icon-arrow{padding-top:6px;padding-bottom:0;display:inline-block}:host .collapse-group-block .collapse-btn-block{display:inline-block;vertical-align:middle;margin-top:20px;line-height:normal;position:absolute;bottom:0;z-index:9;cursor:pointer;text-align:center;width:100%;border-top:1px solid #c2c2c2}:host .collapse-group-block .collapse-btn-block .icon-arrow{padding-top:3px;display:inline-block;padding-bottom:3px}:host .collapse-group-block .collapse-btn-block.hide{display:none}"]
                }] }
    ];
    UiCollapseCard1Component.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiCollapseCard1Component.propDecorators = {
        tagText: [{ type: Input }],
        TextType: [{ type: Input }],
        collapseBtn: [{ type: Input }],
        isDataEmpty: [{ type: Input }],
        isHide: [{ type: Input }],
        emptyText: [{ type: Input }],
        collapseContentHeight: [{ type: ViewChild, args: ['collapseContentHeight',] }]
    };
    return UiCollapseCard1Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormCheckbox2Component = /** @class */ (function () {
    function UiFormCheckbox2Component() {
        this.nxValueChange = new EventEmitter();
        this.onClick = new EventEmitter();
        this.isDisable = false;
        this._isCheckSingle = false; // if true: only one checkbox no padding; false : checkbox has padding-right
        this.classCheckboxSingle = '';
        this.id = this.generateId();
    }
    Object.defineProperty(UiFormCheckbox2Component.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this.checkedValue; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this.checkedValue = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormCheckbox2Component.prototype, "isCheckSingle", {
        get: 
        // if true: only one checkbox no padding; false : checkbox has padding-right
        /**
         * @return {?}
         */
        function () {
            return this._isCheckSingle;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isCheckSingle = val;
            this.classCheckboxSingle = this._isCheckSingle ? 'style-single' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormCheckbox2Component.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this.checkedValue;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            // console.log(val);
            // console.log(typeof (val));
            this.checkedValue = val;
            if (this.nxValueChange) {
                this.nxValueChange.emit(val);
            }
            this.onClick.emit();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    UiFormCheckbox2Component.prototype.generateId = /**
     * @private
     * @return {?}
     */
    function () {
        // console.debug('_' + Math.random().toString(36).substr(2, 12));
        return '_' + Math.random().toString(36).substr(2, 12);
    };
    /**
     * @return {?}
     */
    UiFormCheckbox2Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.checkedValue = this.nxValue ? true : false;
        this.classCheckboxSingle = this.isCheckSingle ? 'style-single' : '';
    };
    UiFormCheckbox2Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-checkbox2',
                    template: "<div class=\"checkbox-block type-filter\">\n  <label [for]='id'>\n    <input class=\"check-native\" type=\"checkbox\" [(ngModel)]=\"checked\" [disabled]=\"false\" [id]=\"id\">\n    <span class=\"checkbox-style\">\n      <span class=\"checked\">\n        <span class=\"choose-tag\">\n          <ng-content select=\"[checkboxText=style1]\"></ng-content>\n        </span>\n      </span>\n    </span>\n  </label>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.checkbox-block{display:inline-block;margin-right:10px;margin-bottom:10px}.checkbox-block.type-filter .checkbox-style{text-align:center;display:inline-block;min-width:70px;padding:8px 6px;border:1px solid #c2c2c2;border-radius:3px;color:#c2c2c2}.checkbox-block.type-filter .checkbox-style .choose-tag{font-size:.75rem}.checkbox-block.type-filter .check-native{display:none}.checkbox-block.type-filter .check-native:checked+.checkbox-style{border:1px solid #007ab3;color:#fff;background-color:#007ab3}.checkbox-block.type-blue .checkbox-style{border:1px solid #007ab3;color:#007ab3}.checkbox-block.type-blue .check-native:checked{border:1px solid #007ab3;color:#fff;background-color:#007ab3}"]
                }] }
    ];
    UiFormCheckbox2Component.ctorParameters = function () { return []; };
    UiFormCheckbox2Component.propDecorators = {
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }],
        onClick: [{ type: Output }],
        isDisable: [{ type: Input }],
        isCheckSingle: [{ type: Input }]
    };
    return UiFormCheckbox2Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiCollapseGroupComponent = /** @class */ (function () {
    function UiCollapseGroupComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.translateMore = 'more option';
        this.isOpen = false;
        this.activeClasses = '';
        this.btnDisplayClasses = '';
        this.displayHideBlock = '';
        this.openCloseStatus = 'closed';
    }
    Object.defineProperty(UiCollapseGroupComponent.prototype, "hasCollapse", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.childCmps)
                return this.childCmps.length >= 6;
            else
                return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiCollapseGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiCollapseGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // console.log('ngAfterContentInit childCmps content:', this.childCmps);
        // if (this.childCmps.length >= 6) {
        //   this.hasCollapse = true;
        // }
    };
    //isOpen = true;
    //isOpen = true;
    /**
     * @return {?}
     */
    UiCollapseGroupComponent.prototype.toggleCollapse = 
    //isOpen = true;
    /**
     * @return {?}
     */
    function () {
        this.isOpen = !this.isOpen;
        this.activeClasses = this.isOpen ? 'active' : '';
        this.btnDisplayClasses = ' hide';
        this.displayHideBlock = ' show-hide-content';
        this.openCloseStatus = this.isOpen ? 'open' : 'closed';
        this.changeDetector.markForCheck();
        this.changeDetector.detectChanges();
        return this.isOpen;
    };
    UiCollapseGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-collapse-group',
                    template: "<div class=\"collpase-group-block\" [ngClass]=\"hasCollapse? '': ' style-no-collapse'\">\n  <!-- \u8981show\u7684\u5340\u584A -->\n  <span class=\"collpase-origin-block\" [ngClass]=\"displayHideBlock\" >\n    <ng-content select=\"[textType=originContent]\"></ng-content>\n    <ng-content *ngIf=\"isOpen\"  select=\"[textType=hideContnet]\"></ng-content>\n    <!-- \u89F8\u767C\u6309\u9215 -->\n    <div class=\"btn-collapse-block\" (click)=\"toggleCollapse()\" [ngClass]=\"btnDisplayClasses\">\n      <button class=\"btn-collapse-text\" >\n          {{translateMore}}\n      </button>\n    </div>\n    <!-- end of \u89F8\u767C\u6309\u9215 -->\n    \n  </span>\n  <!-- \u8981\u96B1\u85CF\u7684\u5340\u584A -->\n  \n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep{transition:.8s}:host ::ng-deep app-ui-form-checkbox2{transition:.8s}:host ::ng-deep app-ui-form-checkbox2:nth-of-type(n+6){opacity:0;display:none}:host ::ng-deep .collpase-origin-block{transition:.8s}:host ::ng-deep .collpase-origin-block.show-hide-content app-ui-form-checkbox2:nth-of-type(n+6){opacity:1;display:inline}.collpase-group-block{display:flex;align-items:center;flex-wrap:wrap}.collpase-group-block.style-no-collapse .btn-collapse-block{display:none}.btn-collapse-block{display:inline-block;border:none;background-color:transparent}.btn-collapse-block.hide{display:none}.btn-collapse-text{color:#c2c2c2;font-size:.75rem;font-weight:700;line-height:normal;display:inline-block;position:relative;text-decoration:underline;background-color:transparent;border:none;padding:0}.btn-collapse-text:empty{display:none}.btn-collapse-text:after{content:' ';border:solid #c2c2c2;border-width:0 1px 1px 0;display:inline-block;padding:2px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);margin-left:3px;vertical-align:middle}.collapse-hide-block{display:inline}"]
                }] }
    ];
    UiCollapseGroupComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiCollapseGroupComponent.propDecorators = {
        childCmps: [{ type: ContentChildren, args: [UiFormCheckbox2Component,] }],
        translateMore: [{ type: Input }]
    };
    return UiCollapseGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiCollapseContentShowComponent = /** @class */ (function () {
    function UiCollapseContentShowComponent() {
    }
    /**
     * @return {?}
     */
    UiCollapseContentShowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiCollapseContentShowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-collapse-content-show',
                    template: "<div class=\"collapse-content-show\">\n    <ng-content></ng-content>\n</div>\n",
                    styles: [""]
                }] }
    ];
    UiCollapseContentShowComponent.ctorParameters = function () { return []; };
    return UiCollapseContentShowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiCollapseContentDetailComponent = /** @class */ (function () {
    function UiCollapseContentDetailComponent() {
        this._isOpen = false;
        this.isOpenCange = new EventEmitter();
    }
    Object.defineProperty(UiCollapseContentDetailComponent.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isOpen = val;
            this.isOpenCange.emit(this._isOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiCollapseContentDetailComponent.prototype.isOpenStatus = /**
     * @return {?}
     */
    function () {
        return this._isOpen ? 'open' : 'closed';
    };
    /**
     * @return {?}
     */
    UiCollapseContentDetailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiCollapseContentDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-collapse-content-detail',
                    template: "<div class=\"collapse-content-detail\" [@openClose]=\"isOpenStatus()\">\n    <ng-content></ng-content>\n</div>\n",
                    animations: [
                        trigger('openClose', [
                            state('*', style({
                                height: '0',
                            })),
                            state('open', style({
                                height: '*',
                            })),
                            state('closed', style({
                                height: '0',
                            })),
                            transition('open <=> closed', animate('200ms ease-in-out'))
                        ]),
                    ],
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.collapse-content-detail{overflow-y:hidden}"]
                }] }
    ];
    UiCollapseContentDetailComponent.ctorParameters = function () { return []; };
    UiCollapseContentDetailComponent.propDecorators = {
        isOpen: [{ type: Input }],
        isOpenCange: [{ type: Output }]
    };
    return UiCollapseContentDetailComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var animationModalOpen = trigger('openClose', [
    state('open', style({
        opacity: 1,
        transform: 'scale3d(1,1,1)'
    })),
    state('closed', style({
        opacity: 0,
        transform: 'scale3d(.0, .0, .0)'
    })),
    transition('open => closed', animate('200ms ease-in-out')),
    transition('closed => open', animate('200ms ease-in-out'))
]);
/** @type {?} */
var animationModalClose = trigger('bgOpenClose', [
    state('bgOpen', style({
        opacity: 1,
    })),
    state('bgClosed', style({
        opacity: 0
    })),
    transition('bgOpen => bgClosed', animate('300ms ease-out')),
    transition('bgClosed => bgOpen', animate('200ms ease-out'))
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiContentBGapComponent = /** @class */ (function () {
    function UiContentBGapComponent() {
        this.gapSize = CONTENTGAP.GAP20;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    UiContentBGapComponent.prototype.handleGap = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (type == CONTENTGAP.GAP20) {
            return 'contentGap20';
        }
        if (type == CONTENTGAP.GAP40) {
            return 'contentGap40';
        }
    };
    /**
     * @return {?}
     */
    UiContentBGapComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiContentBGapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-content-b-gap',
                    template: "<div class=\"content-b-gap {{handleGap(gapSize)}}\">\n  <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.content-b-gap.contentGap40{padding-bottom:40px}.content-b-gap.contentGap20{padding-bottom:20px}"]
                }] }
    ];
    UiContentBGapComponent.ctorParameters = function () { return []; };
    UiContentBGapComponent.propDecorators = {
        gapSize: [{ type: Input }]
    };
    return UiContentBGapComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiDataGroupComponent = /** @class */ (function () {
    function UiDataGroupComponent() {
        this.isShowPreData = false;
        this.imgIconSrc = '';
        this.imgType = false;
        this.iconType = false;
        this.iconName = '';
        this.groupName = '';
    }
    /**
     * @return {?}
     */
    UiDataGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiDataGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-data-group',
                    template: "<div class=\"ui-data-group space-ui-clear\">\n    <div class=\"pre-block\" *ngIf=\"isShowPreData\">\n        <div *ngIf=\"imgType\" class=\"img-block\">\n            <img  [src]=\"imgIconSrc\">\n        </div>\n        <i *ngIf=\"iconType\" class=\"icon-block\" >\n            <nx-icon [name]=\"iconName\" size='s'></nx-icon>\n        </i>\n    </div>\n    <div class=\"content-block\">\n        <ng-content select=\"[textType=dataContent]\"></ng-content>\n    </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-block;width:100%}:host ::ng-deep .form-row-block{margin-top:0}.ui-data-group{display:block;width:100%;position:relative}.ui-data-group ::ng-deep button{margin:0}.ui-data-group ::ng-deep .gas-row-block{margin-bottom:0}.ui-data-group ::ng-deep .gas-row-block+.gas-row-block{margin-top:0}.ui-data-group .pre-block{position:absolute;left:calc((1.25rem * -1) - 15px);display:flex;height:100%;top:0;align-items:top;padding-top:15px}.ui-data-group .pre-block .icon-block,.ui-data-group .pre-block .img-block{max-width:1.25rem;width:100%;display:flex;vertical-align:middle;position:relative;justify-content:center;align-items:center}.ui-data-group .pre-block .icon-block img,.ui-data-group .pre-block .img-block img{max-width:1.25rem;width:1.25rem}.ui-data-group .content-block{display:inline-block;max-width:100%;width:100%;position:relative}.ui-data-group .btn-style{padding:0;border:0;background-color:transparent;display:inline-block}.ui-data-group .icon-add{margin-bottom:15px}.ui-data-group .icon-del{position:absolute;right:0;bottom:38px}@media (min-width:768px){.ui-data-group .pre-block .icon-block,.ui-data-group .pre-block .img-block{height:30px}}@media (max-width:767px){.ui-data-group .pre-block .icon-block,.ui-data-group .pre-block .img-block{min-height:30px}.ui-data-group .pre-block{position:relative;left:0;top:0;margin-bottom:0;padding-top:0}}@media (min-width:1025px){.ui-data-group .pre-block .icon-block,.ui-data-group .pre-block .img-block{max-width:1.25rem}}"]
                }] }
    ];
    UiDataGroupComponent.ctorParameters = function () { return []; };
    UiDataGroupComponent.propDecorators = {
        isShowPreData: [{ type: Input }],
        imgIconSrc: [{ type: Input }],
        imgType: [{ type: Input }],
        iconType: [{ type: Input }],
        iconName: [{ type: Input }],
        groupName: [{ type: Input }]
    };
    return UiDataGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiDetectionScrollComponent = /** @class */ (function () {
    function UiDetectionScrollComponent() {
        this.scrollEventData = new EventEmitter();
        this.paddingGap = { top: 10,
            right: 10,
            bottom: 10,
            left: 10 };
        this.scrollMsg = { top: true,
            right: false,
            bottom: false,
            left: true };
    }
    /**
     * @return {?}
     */
    UiDetectionScrollComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiDetectionScrollComponent.prototype.detectionScroll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pt = this.paddingGap.top;
        /** @type {?} */
        var pr = this.paddingGap.right;
        /** @type {?} */
        var pb = this.paddingGap.bottom;
        /** @type {?} */
        var pl = this.paddingGap.left;
        /** @type {?} */
        var SCDom = this.scrollContent.nativeElement;
        /** @type {?} */
        var DCDom = this.detectionContent.nativeElement;
        /** @type {?} */
        var SCSize = SCDom.getBoundingClientRect();
        /** @type {?} */
        var DCSize = DCDom.getBoundingClientRect();
        /** @type {?} */
        var SCWidth = SCDom.scrollWidth;
        /** @type {?} */
        var SCHeight = SCDom.scrollHeight;
        /** @type {?} */
        var DCWidth = DCSize.width;
        /** @type {?} */
        var DCHeight = DCSize.height;
        this.scrollMsg.left = DCDom.scrollLeft < pl ? true : false;
        this.scrollMsg.right = (SCWidth - (DCDom.scrollLeft + DCWidth)) < pr ? true : false;
        this.scrollMsg.top = DCDom.scrollTop < pt ? true : false;
        this.scrollMsg.bottom = (SCHeight - (DCDom.scrollTop + DCHeight)) < pr ? true : false;
        this.scrollEventData.emit(this.scrollMsg);
    };
    /**
     * @return {?}
     */
    UiDetectionScrollComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.detectionScroll();
        }), 0);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiDetectionScrollComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.detectionScroll();
    };
    UiDetectionScrollComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-detection-scroll',
                    template: "<div (scroll)=\"detectionScroll()\" class=\"detection-scroll-content stop-scroll-block\" #detectionContent>\n  <div  class=\"scroll-content\" #scrollContent>\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.detection-scroll-content{overflow:auto}"]
                }] }
    ];
    UiDetectionScrollComponent.ctorParameters = function () { return []; };
    UiDetectionScrollComponent.propDecorators = {
        scrollContent: [{ type: ViewChild, args: ['scrollContent',] }],
        detectionContent: [{ type: ViewChild, args: ['detectionContent',] }],
        scrollEventData: [{ type: Output }],
        paddingGap: [{ type: Input }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UiDetectionScrollComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiEmptyDefaultComponent = /** @class */ (function () {
    function UiEmptyDefaultComponent() {
    }
    /**
     * @return {?}
     */
    UiEmptyDefaultComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiEmptyDefaultComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-empty-default',
                    template: "<p class=\"empty-desc\"><ng-content select=\"[textType=emptyText]\"></ng-content></p>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{text-align:center}.empty-desc{font-size:.875rem;color:#414141;line-height:28px;padding:20px 0;margin:0;font-weight:300}"]
                }] }
    ];
    UiEmptyDefaultComponent.ctorParameters = function () { return []; };
    return UiEmptyDefaultComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormTextareaComponent = /** @class */ (function () {
    function UiFormTextareaComponent() {
        this.placeholder = '';
        this.onKeypress = new EventEmitter();
        this.nxValueChange = new EventEmitter();
    }
    Object.defineProperty(UiFormTextareaComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this.value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormTextareaComponent.prototype, "result", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.value = value;
            console.debug('ui-form-input', value);
            if (this.nxValueChange) {
                this.nxValueChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiFormTextareaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    //keypress
    //keypress
    /**
     * @param {?} event
     * @return {?}
     */
    UiFormTextareaComponent.prototype.onKeyDown = 
    //keypress
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode != 37 && event.keyCode != 38 && event.keyCode != 39 && event.keyCode != 40 && event.keyCode != 8) {
            if (StringUtils.byteLength(event.target.value.toString()) > (this.maxLength - 1)) {
                return false;
            }
        }
        this.onKeypress.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiFormTextareaComponent.prototype.onKeyUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var returnString = this.value;
        if (event.keyCode == 13) {
            while (StringUtils.byteLength(returnString) > (this.maxLength)) {
                returnString = returnString.substr(0, returnString.length - 1);
            }
        }
        this.value = returnString;
        this.onKeypress.emit(event);
    };
    UiFormTextareaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-form-textarea',
                    template: "\n<textarea class=\"detail-text\" [placeholder]=\"placeholder\" (keydown)=\"onKeyDown($event)\" (keyup)=\"onKeyUp($event)\" [maxlength]=\"maxLength\" [(ngModel)]='result' [style.height]=\"height\" [id]=\"id\"></textarea>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{width:100%}:host .detail-text{width:100%}:host textarea{font-family:\"Allianz Neo\";width:100%;border-radius:5px;font-size:.875rem;background-color:#fcfcfc;border:1px solid #e5e5ee;padding:10px 20px;outline:0;box-shadow:none;-webkit-appearance:none}"]
                }] }
    ];
    UiFormTextareaComponent.ctorParameters = function () { return []; };
    UiFormTextareaComponent.propDecorators = {
        maxLength: [{ type: Input }],
        value: [{ type: Input }],
        placeholder: [{ type: Input }],
        onKeypress: [{ type: Output }],
        height: [{ type: Input }],
        id: [{ type: Input }],
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }]
    };
    return UiFormTextareaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormRadioGroup = /** @class */ (function () {
    function UiFormRadioGroup(_changeDetector) {
        this._changeDetector = _changeDetector;
        this._selected = null;
        this._isInitialized = false;
        this._disabled = false;
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.nxValueChange = new EventEmitter();
        this.change = new EventEmitter();
        this.name = this.generateId();
    }
    Object.defineProperty(UiFormRadioGroup.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this.value = newValue;
            this._changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormRadioGroup.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._value !== newValue) {
                this._value = newValue;
                this._updateSelectedRadioFromValue();
                this._checkSelectedRadioButton();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormRadioGroup.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            this._checkSelectedRadioButton();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormRadioGroup.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value;
            this._markRadiosForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormRadioGroup.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () { return this._name; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
            this._updateRadioButtonNames();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiFormRadioGroup.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    UiFormRadioGroup.prototype._checkSelectedRadioButton = /**
     * @return {?}
     */
    function () {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    };
    /**
     * @private
     * @return {?}
     */
    UiFormRadioGroup.prototype._updateSelectedRadioFromValue = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // If the value already matches the selected radio, do nothing.
        /** @type {?} */
        var isAlreadySelected = this._selected !== null && this._selected.value === this._value;
        if (this._radios && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) {
                radio.checked = _this.value === radio.value;
                if (radio.checked) {
                    _this._selected = radio;
                }
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    UiFormRadioGroup.prototype._updateRadioButtonNames = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('update radio names');
        console.log('this.name:', this.name);
        if (this._radios) {
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) {
                radio.name = _this.name;
            }));
        }
    };
    /**
     * @return {?}
     */
    UiFormRadioGroup.prototype._emitChangeEvent = /**
     * @return {?}
     */
    function () {
        if (this._isInitialized) {
            this.nxValueChange.emit(this._value);
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    UiFormRadioGroup.prototype.onChange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._value = val;
    };
    /**
     * @return {?}
     */
    UiFormRadioGroup.prototype._markRadiosForCheck = /**
     * @return {?}
     */
    function () {
        if (this._radios) {
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) { return radio._markForCheck(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    UiFormRadioGroup.prototype.generateId = /**
     * @private
     * @return {?}
     */
    function () {
        return '_' + Math.random().toString(36).substr(2, 12);
    };
    UiFormRadioGroup.decorators = [
        { type: Directive, args: [{
                    selector: 'app-ui-form-radio-group',
                    host: {
                        '[style.display]': '"inline-block"',
                        '[style.width]': '"100%"',
                    }
                },] }
    ];
    UiFormRadioGroup.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiFormRadioGroup.propDecorators = {
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }],
        _radios: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return UiFormRadioComponent; })), { descendants: true },] }],
        change: [{ type: Output }],
        value: [{ type: Input }],
        selected: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return UiFormRadioGroup;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormRadioComponent = /** @class */ (function () {
    function UiFormRadioComponent(radioGroup, _changeDetector, _renderer) {
        this._changeDetector = _changeDetector;
        this._renderer = _renderer;
        this._checked = false;
        this._value = null;
        this.name = '';
        this.isCheck = false;
        this.isDisable = false;
        this.colorCode = '';
        this.isAllowCancel = true; //for cancel check ( false: can't cancel check )
        this.change = new EventEmitter();
        this.radioGroup = radioGroup;
        this.id = this.generateId();
    }
    Object.defineProperty(UiFormRadioComponent.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () { return this._checked; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newCheckedState = value;
            if (this._checked !== newCheckedState) {
                this.isCheck = true;
                this._checked = newCheckedState;
                if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                    this.radioGroup.selected = this;
                }
                else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                    // When unchecking the selected radio button, update the selected radio
                    // property on the group.
                    this.radioGroup.selected = null;
                }
            }
            else {
                this.isCheck = false;
            }
            this.colorSetting();
            this._changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormRadioComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._value !== value) {
                this._value = value;
                if (this.radioGroup !== null) {
                    if (!this.checked) {
                        // Update checked when the value changed to match the radio group's value
                        this.checked = this.radioGroup.value === value;
                    }
                    if (this.checked) {
                        this.radioGroup.selected = this;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormRadioComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newDisabledState = value;
            if (this._disabled !== newDisabledState) {
                this._disabled = newDisabledState;
                this._changeDetector.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiFormRadioComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.radioGroup) {
            console.log('in radio group');
            // If the radio is inside a radio group, determine if it should be checked
            this.checked = this.radioGroup.value === this._value;
            this.name = this.radioGroup.name;
        }
    };
    // 從色碼設定radio的顏色
    // 從色碼設定radio的顏色
    /**
     * @return {?}
     */
    UiFormRadioComponent.prototype.colorSetting = 
    // 從色碼設定radio的顏色
    /**
     * @return {?}
     */
    function () {
        if (this.tagBlock) {
            /** @type {?} */
            var tagBlock_ele = this.tagBlock.nativeElement;
            this._renderer.setStyle(tagBlock_ele, 'borderColor', this.colorCode);
            if (this._checked) {
                this._renderer.setStyle(tagBlock_ele, 'backgroundColor', this.colorCode);
                this._renderer.removeStyle(this.tagBlock.nativeElement, 'color');
            }
            else {
                this._renderer.removeStyle(this.tagBlock.nativeElement, 'backgroundColor');
                this._renderer.setStyle(tagBlock_ele, 'color', this.colorCode);
            }
        } // end of tagBlock
    };
    /**
     * @return {?}
     */
    UiFormRadioComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        console.log('color code:', this.tagBlock, this.colorCode);
        this.colorSetting();
    };
    /**
     * @return {?}
     */
    UiFormRadioComponent.prototype._markForCheck = /**
     * @return {?}
     */
    function () {
        this._changeDetector.markForCheck();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiFormRadioComponent.prototype._onInputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        /** @type {?} */
        var groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();
        if (this.radioGroup) {
            this.radioGroup.onChange(this.value);
            if (groupValueChanged) {
                this.radioGroup._emitChangeEvent();
            }
            else { // click again to cancel checked
                if (this.isAllowCancel) {
                    this.checked = false;
                    this.radioGroup.value = null;
                    this.radioGroup._emitChangeEvent();
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    UiFormRadioComponent.prototype._emitChangeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        this.change.emit(this._value);
    };
    /**
     * @private
     * @return {?}
     */
    UiFormRadioComponent.prototype.generateId = /**
     * @private
     * @return {?}
     */
    function () {
        return '_' + Math.random().toString(36).substr(2, 12);
    };
    UiFormRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-radio',
                    template: "<div class=\"form-radio\" [ngClass]=\"disabled ? ' disable': ''\">\n    <label class=\"radio-content-block\" [attr.for]=\"id\">\n        <input class=\"check-input\" type=\"radio\" [id]=\"id\" [value]=\"value\" [name]=\"name\" [checked]=\"checked\" [disabled]=\"disabled\" (click)=\"_onInputChange($event)\">\n        <div class=\"check-block\">\n            <span class=\"check-block-inside\"></span>\n        </div>\n        <span class=\"check-text\">\n            <ng-content></ng-content>\n        </span>\n    </label>\n</div>\n\n",
                    styles: [".form-radio{display:inline-block;vertical-align:middle;margin-right:30px}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.form-radio ::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-radio input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}.form-radio textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}.form-radio ::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-radio :-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-radio ::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-radio ::ng-deep .nx-formfield__flexfield,.form-radio ::ng-deep .select-body-block{min-height:30px}.form-radio ::ng-deep .nx-formfield__label-holder{height:99%;top:-30px;padding-top:30px;font-size:1.25rem}.form-radio ::ng-deep .nx-formfield__label{background-color:#fff;width:100%;font-weight:400}.form-radio ::ng-deep .nx-formfield.is-floating .nx-formfield__label{-webkit-transform:translateY(30px) translateZ(.001px);transform:translateY(30px) translateZ(.001px);font-weight:700}.form-radio .radio-content-block{display:flex;align-items:center;justify-content:center}.form-radio .check-block{border-radius:50%;display:flex;align-items:center;justify-content:center;width:24px;height:24px;border:2px solid #007ab3}.form-radio .check-text{display:inline-block;padding-left:12px;font-size:1.25rem}.form-radio .check-input{display:none}.form-radio .check-input:checked+.check-block{background-image:url(assets/img/check-circle.svg);background-size:cover;-webkit-filter:grayscale(0);filter:grayscale(0);border:none}.form-radio .check-input:checked+.check-block .check-block-inside{display:inline-block;width:90%;height:90%;border-radius:50%}.form-radio.disable .check-block{border-color:#c2c2c2}.form-radio.disable .check-input .check-block,.form-radio.disable .check-input .check-block .check-block-inside,.form-radio.disable .check-input:checked+.check-block,.form-radio.disable .check-input:checked+.check-block .check-block-inside{background-color:#c2c2c2}.form-radio.disable .check-text{color:#c2c2c2}"]
                }] }
    ];
    UiFormRadioComponent.ctorParameters = function () { return [
        { type: UiFormRadioGroup, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    UiFormRadioComponent.propDecorators = {
        tagBlock: [{ type: ViewChild, args: ['tagBlock',] }],
        isCheck: [{ type: Input }],
        isDisable: [{ type: Input }],
        colorCode: [{ type: Input }],
        isAllowCancel: [{ type: Input }],
        change: [{ type: Output }],
        checked: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return UiFormRadioComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormRadio2Component = /** @class */ (function (_super) {
    __extends(UiFormRadio2Component, _super);
    function UiFormRadio2Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UiFormRadio2Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-radio2',
                    template: "<div class=\"checkbox-block type-filter type-blue\" [ngClass]=\"disabled ? ' disable': ''\">\n    <label [attr.for]=\"id\">\n      <input class=\"check-native\" type=\"radio\" [name]=\"name\" [id]=\"id\" [value]=\"value\"  [checked]=\"checked\" [disabled]=\"disabled\"  (click)=\"_onInputChange($event)\">\n      <span class=\"checkbox-style\">\n        <span class=\"checked\">\n          <span class=\"choose-tag\">\n            <ng-content></ng-content>\n          </span>\n        </span>\n      </span>\n    </label>\n</div>\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.checkbox-block{display:inline-block;margin-right:10px;margin-bottom:10px}.checkbox-block.type-filter .checkbox-style{text-align:center;display:inline-block;min-width:70px;padding:8px 6px;border:1px solid #c2c2c2;border-radius:3px;color:#c2c2c2}.checkbox-block.type-filter .checkbox-style .choose-tag{font-size:.75rem}.checkbox-block.type-filter .check-native{display:none}.checkbox-block.type-filter .check-native:checked+.checkbox-style{border:1px solid #007ab3;color:#fff;background-color:#007ab3}.checkbox-block.type-blue .checkbox-style{border:1px solid #007ab3;color:#007ab3}.checkbox-block.type-blue .check-native:checked{border:1px solid #007ab3;color:#fff;background-color:#007ab3}"]
                }] }
    ];
    return UiFormRadio2Component;
}(UiFormRadioComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormSwitcherComponent = /** @class */ (function () {
    function UiFormSwitcherComponent(changeDector) {
        this.changeDector = changeDector;
        this.nxValueChange = new EventEmitter();
        this.labelTxt = '';
        this._isChecked = false;
    }
    Object.defineProperty(UiFormSwitcherComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isChecked;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isChecked = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiFormSwitcherComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(UiFormSwitcherComponent.prototype, "isChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isChecked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isChecked = value;
            this.changeDector.markForCheck();
            if (this.nxValueChange)
                this.nxValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    UiFormSwitcherComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-switcher',
                    template: "<nx-switcher [nxBig]='true' [(ngModel)]=\"isChecked\" [attr.hasTitle]=\"labelTxt !== ''? '': null\">{{ labelTxt }}</nx-switcher>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host [hasTitle] ::ng-deep :not(.is-swapped) .nx-switcher__toggle{margin-right:12px!important}:host ::ng-deep :not(.is-swapped) .nx-switcher__toggle{margin-right:0!important}:host ::ng-deep .is-checked .nx-switcher__label .nx-switcher__toggle{background-color:#3da556!important}:host ::ng-deep .is-checked .nx-switcher__label .nx-switcher__toggle .nx-switcher__dot nx-icon{opacity:0}:host ::ng-deep .nx-switcher__label .nx-switcher__toggle{background-color:#c2c2c2!important}"]
                }] }
    ];
    UiFormSwitcherComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiFormSwitcherComponent.propDecorators = {
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }],
        labelTxt: [{ type: Input }]
    };
    return UiFormSwitcherComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MY_NATIVE_FORMATS = {
    fullPickerInput: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false },
    datePickerInput: { year: 'numeric', month: 'numeric', day: 'numeric', hour12: false },
    timePickerInput: { hour: 'numeric', minute: 'numeric', hour12: false },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
};
var UiFormTimepickerComponent = /** @class */ (function () {
    function UiFormTimepickerComponent(elementRef, changeDetecor) {
        this.elementRef = elementRef;
        this.changeDetecor = changeDetecor;
        this.nxValueChange = new EventEmitter();
        this.blur = new EventEmitter();
        // error status style
        this.classError = '';
        this.inputStatus = false;
        this.isErrorChange = new EventEmitter();
        this.afterTimepickerOpen = new EventEmitter();
        this.afterTimepickerClose = new EventEmitter();
    }
    Object.defineProperty(UiFormTimepickerComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.time;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.time = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormTimepickerComponent.prototype, "time", {
        get: /**
         * @return {?}
         */
        function () {
            return this._time;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value != null) {
                if (getHours(value) < 10)
                    this.showTime = '0' + getHours(value).toString() + ':';
                else
                    this.showTime = getHours(value).toString() + ':';
                if (getMinutes(value) < 10)
                    this.showTime = this.showTime + '0' + getMinutes(value).toString();
                else
                    this.showTime = this.showTime + getMinutes(value).toString();
                this._time = value;
            }
            this.changeDetecor.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormTimepickerComponent.prototype, "isError", {
        get: /**
         * @return {?}
         */
        function () { return this.inputStatus; },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this.inputStatus = status;
            this.classError = status ? ' style-error' : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiFormTimepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiFormTimepickerComponent.prototype.afterOpen = /**
     * @return {?}
     */
    function () {
        // cannot scroll out block
        /** @type {?} */
        var stopFormScrollBlock = document.body.getElementsByClassName('form-stop-scroll');
        if (stopFormScrollBlock !== null) {
            [].forEach.bind(stopFormScrollBlock, (/**
             * @param {?} itm
             * @return {?}
             */
            function (itm) {
                itm.classList.add('all-no-scroll');
            }))();
        }
        this.afterTimepickerOpen.emit();
    }; // end afterOpen
    // end afterOpen
    /**
     * @return {?}
     */
    UiFormTimepickerComponent.prototype.afterClose = 
    // end afterOpen
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stopFormScrollBlock = document.body.getElementsByClassName('form-stop-scroll');
        if (stopFormScrollBlock !== null) {
            [].forEach.bind(stopFormScrollBlock, (/**
             * @param {?} itm
             * @return {?}
             */
            function (itm) {
                itm.classList.remove('all-no-scroll');
            }))();
        }
        this.afterTimepickerClose.emit();
    }; // end afterClose
    // end afterClose
    /**
     * @return {?}
     */
    UiFormTimepickerComponent.prototype.onFocus = 
    // end afterClose
    /**
     * @return {?}
     */
    function () {
        // when user click input, scroll top the input, to prevent calendar be cutted because of softkeyboard slide up
        /** @type {?} */
        var inputEle = this.elementRef.nativeElement.querySelector('input');
        /** @type {?} */
        var scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
        /** @type {?} */
        var windowWidth = window.innerWidth;
        /** @type {?} */
        var moveDist = windowWidth < 1024 ? 100 : 250;
        if (scrollContent != null) {
            /** @type {?} */
            var move = scrollContent.scrollTop + inputEle.getBoundingClientRect().top - moveDist;
            //console.log('move', move);
            if (document.querySelector('.plt-android') != null) {
                scrollContent.classList.add('active');
                scrollContent.scrollTo({ top: move, behavior: "smooth" });
            }
        }
    };
    /**
     * @return {?}
     */
    UiFormTimepickerComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        console.warn('showTime', this.showTime);
        console.warn('showTime isEmpty:', StringUtils.isEmpty(this.showTime));
        if (StringUtils.isEmpty(this.showTime)) {
            this._time = null;
            this.nxValueChange.emit(null);
        }
        else {
            /** @type {?} */
            var time = this.showTime.split(':');
            /** @type {?} */
            var dateNow = new Date();
            this._time = new Date(getYear(dateNow), getMonth(dateNow), getDate(dateNow), parseInt(time[0]), parseInt(time[1]));
            if (this._time !== null) {
                if ((getMinutes(this._time) % 5) != 0) {
                    this.time = addMinutes(this._time, (5 - getMinutes(this._time) % 5));
                }
                this.time = this._time;
            }
            this.nxValueChange.emit(this.time);
        }
        // remove content class for android scroll
        /** @type {?} */
        var scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
        if (document.querySelector('.plt-android') != null) {
            scrollContent.classList.remove('active');
        }
        this.blur.emit();
    };
    UiFormTimepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-timepicker',
                    template: "<div #timepickerBlock class=\"ui-timepicker\" [ngClass]=\"classError\">\n  <!-- <input #inputEle placeholder=\"hh:mm\" \n        [(ngModel)]=\"time\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [owlDateTime]=\"timepicker\" (dateTimeChange)=\"onBlur()\"/> -->\n  <div class=\"time-show-block\">{{showTime}}</div>\n  <input #inputEle type=\"time\" step=300 [(ngModel)]=\"showTime\" (focus)=\"onFocus()\" (ngModelChange)=\"onBlur()\"/>\n  <nx-icon class=\"ui-timepicker-icon timepicker-icon\" name='clock-o'></nx-icon>\n</div>\n<owl-date-time [pickerMode]=\" 'dialog' \" [pickerType]=\"'timer'\" [stepMinute]=\"5\" [startAt]=\"dateTime\" #timepicker\n  (afterPickerOpen)=\"afterOpen()\" (afterPickerClosed)=\"afterClose()\"></owl-date-time>\n",
                    providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS }],
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep .ui-timepicker{position:relative}:host ::ng-deep .ui-timepicker .time-show-block{display:block;background-color:#fff;padding:0 1.5rem 0 0;max-height:30px;font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:.2px;color:#414141;border:0;border-bottom:1px solid #414141;border-radius:0;position:absolute;bottom:0;width:100%;pointer-events:none}:host ::ng-deep .ui-timepicker.style-error input{color:#dc3149;border-color:#dc3149}:host ::ng-deep .ui-timepicker.style-error ::ng-deep .ui-timepicker-icon{color:#dc3149}:host ::ng-deep .ui-timepicker.style-error ::ng-deep .ui-timepicker-icon.timepicker-icon{color:#dc3149}:host ::ng-deep .ui-timepicker input{-webkit-appearance:none;width:100%;margin:0;padding:0 1.5rem 0 0;height:30px;font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:.2px;color:#414141;border:0;border-bottom:1px solid #414141;border-radius:0;background-color:#fff}:host ::ng-deep .ui-timepicker .ui-timepicker-icon{display:inline-block;width:1.5rem;height:1.5rem;position:absolute;bottom:5px;right:0;font-size:1.5rem;color:#007ab3}@media (max-width:375px){:host ::ng-deep .ui-timepicker .ui-timepicker-icon{width:1.5rem;height:1.5rem;font-size:1.5rem;line-height:1.8rem}}@media screen and (min-width:1025px){:host ::ng-deep .ui-timepicker input{line-height:28px}}"]
                }] }
    ];
    UiFormTimepickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    UiFormTimepickerComponent.propDecorators = {
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }],
        blur: [{ type: Output }],
        isError: [{ type: Input }],
        isErrorChange: [{ type: Output }],
        afterTimepickerOpen: [{ type: Output }],
        afterTimepickerClose: [{ type: Output }]
    };
    return UiFormTimepickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormErrorMsgInfoComponent = /** @class */ (function () {
    function UiFormErrorMsgInfoComponent(changeDetecor) {
        this.changeDetecor = changeDetecor;
        this.styleType = "regular";
        this.messageShow = false;
    }
    /**
     * @return {?}
     */
    UiFormErrorMsgInfoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} boolean
     * @return {?}
     */
    UiFormErrorMsgInfoComponent.prototype.controlMsg = /**
     * @param {?} boolean
     * @return {?}
     */
    function (boolean) {
        this.messageShow = boolean;
        this.changeDetecor.markForCheck();
    };
    /**
     * @return {?}
     */
    UiFormErrorMsgInfoComponent.prototype.hideMsg = /**
     * @return {?}
     */
    function () {
        this.messageShow = false;
        this.changeDetecor.markForCheck();
    };
    UiFormErrorMsgInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-error-msg-info',
                    template: "<div class=\"form-error-msg-info-content\" >\n    <nx-message nxContext='{{styleType}}' [ngClass]=\"{'show':messageShow}\">\n      <ng-content></ng-content>\n    </nx-message>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.form-error-msg-info-content{height:5px;padding-top:5px}.form-error-msg-info-content ::ng-deep nx-message{margin:0;padding:24px 30px 23px}.form-error-msg-info-content ::ng-deep nx-message:not(.show){display:none}.form-error-msg-info-content ::ng-deep app-ui-form-error-msg-list,.form-error-msg-info-content ::ng-deep app-ui-form-error-msg-title{display:block}.form-error-msg-info-content ::ng-deep app-ui-form-error-msg-title+app-ui-form-error-msg-list{margin-top:18px}.form-error-msg-info-content ::ng-deep app-ui-form-error-msg-list+app-ui-form-error-msg-list{margin-top:16px}"]
                }] }
    ];
    UiFormErrorMsgInfoComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiFormErrorMsgInfoComponent.propDecorators = {
        styleType: [{ type: Input }]
    };
    return UiFormErrorMsgInfoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormErrorMsgTitleComponent = /** @class */ (function () {
    function UiFormErrorMsgTitleComponent() {
        this.styleType = "";
        this.showIcon = true;
    }
    /**
     * @return {?}
     */
    UiFormErrorMsgTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiFormErrorMsgTitleComponent.prototype.iconControl = /**
     * @return {?}
     */
    function () {
        if (this.styleType == "error") {
            return "exclamation-circle";
        }
        if (this.styleType == "info") {
            return "info-circle";
        }
        if (this.styleType == "success") {
            return "check-circle";
        }
        if (this.styleType == "warning") {
            return "exclamation-triangle";
        }
    };
    UiFormErrorMsgTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-error-msg-title',
                    template: "<div class=\"error-msg-title-content\">\n  <div class=\"error-msg-icon {{iconControl()}}\" *ngIf=\"showIcon\">\n      <nx-icon name=\"{{iconControl()}}\" fill=\"false\" outline=\"false\"></nx-icon>\n  </div>\n  <div class=\"error-msg-title\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.error-msg-title-content{font-size:0}.error-msg-title-content .error-msg-icon,.error-msg-title-content .error-msg-title{display:inline-block;vertical-align:top}.error-msg-title-content .error-msg-icon{margin-right:10px;-webkit-transform:translateY(1px);transform:translateY(1px)}.error-msg-title-content .error-msg-icon ::ng-deep nx-icon{width:24px;height:24px;font-size:24px;border:none;line-height:1em;background-color:transparent;vertical-align:top}.error-msg-title-content .error-msg-icon.exclamation-circle ::ng-deep nx-icon{color:#dc3149}.error-msg-title-content .error-msg-icon.info-circle ::ng-deep nx-icon{color:#0068b7}.error-msg-title-content .error-msg-icon.check-circle ::ng-deep nx-icon{color:#3da556}.error-msg-title-content .error-msg-icon.exclamation-triangle ::ng-deep nx-icon{color:#ccdd61}.error-msg-title-content .error-msg-icon+.error-msg-title{width:calc(100% - 30px);font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#414141}"]
                }] }
    ];
    UiFormErrorMsgTitleComponent.ctorParameters = function () { return []; };
    UiFormErrorMsgTitleComponent.propDecorators = {
        styleType: [{ type: Input }],
        showIcon: [{ type: Input }]
    };
    return UiFormErrorMsgTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormErrorMsgListComponent = /** @class */ (function () {
    function UiFormErrorMsgListComponent() {
        this.styleType = "";
        this.showIcon = true;
    }
    /**
     * @return {?}
     */
    UiFormErrorMsgListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiFormErrorMsgListComponent.prototype.iconControl = /**
     * @return {?}
     */
    function () {
        // if(this.styleType == "error"){
        //   return "exclamation-circle";
        // }
        // if(this.styleType == "info"){
        //   return "info-circle";
        // }
        if (this.styleType == "success") {
            return "check";
        }
        if (this.styleType == "warning") {
            return "close";
        }
    };
    UiFormErrorMsgListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-error-msg-list',
                    template: "<div class=\"error-msg-list-content\">\n  <div class=\"error-msg-icon {{iconControl()}}\" *ngIf=\"showIcon\">\n      <nx-icon name=\"{{iconControl()}}\" fill=\"false\" outline=\"false\"></nx-icon>\n  </div>\n  <div class=\"error-msg-title\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.error-msg-list-content{font-size:0}.error-msg-list-content .error-msg-icon,.error-msg-list-content .error-msg-title{display:inline-block;vertical-align:top}.error-msg-list-content .error-msg-icon{margin-right:10px;-webkit-transform:translateY(.5px);transform:translateY(.5px)}.error-msg-list-content .error-msg-icon ::ng-deep nx-icon{width:20px;height:20px;font-size:font-size-h9;border:none;line-height:20px;background-color:transparent;vertical-align:top}.error-msg-list-content .error-msg-icon.check ::ng-deep nx-icon{color:#3da556}.error-msg-list-content .error-msg-icon.close ::ng-deep nx-icon{color:#767676}.error-msg-list-content .error-msg-icon+.error-msg-title{width:calc(100% - 30px);font-size:font-size-h8;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#414141}"]
                }] }
    ];
    UiFormErrorMsgListComponent.ctorParameters = function () { return []; };
    UiFormErrorMsgListComponent.propDecorators = {
        styleType: [{ type: Input }],
        showIcon: [{ type: Input }]
    };
    return UiFormErrorMsgListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormCheckbox3Component = /** @class */ (function () {
    function UiFormCheckbox3Component() {
        this.nxValueChange = new EventEmitter();
        this.onClick = new EventEmitter();
        this.isDisable = false;
        // 第二種樣式
        this.styleWeight = '';
        this.styleAlign = '';
        this.classesStyle = '';
        this.id = this.generateId();
    }
    Object.defineProperty(UiFormCheckbox3Component.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this._checked; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._checked = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormCheckbox3Component.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._checked = val;
            if (this.nxValueChange)
                this.nxValueChange.emit(val);
            this.onClick.emit();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    UiFormCheckbox3Component.prototype.generateId = /**
     * @private
     * @return {?}
     */
    function () {
        return '_' + Math.random().toString(36).substr(2, 12);
    };
    /**
     * @return {?}
     */
    UiFormCheckbox3Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleWeight = this.styleWeight == 'normal' ? ' font-normal' : '';
        this.styleAlign = this.styleAlign == 'end' ? ' align-end' : '';
        this.classesStyle = this.styleWeight + this.styleAlign;
    };
    UiFormCheckbox3Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-checkbox3',
                    template: "<div class=\"checkbox-block type-list-data\" [ngClass]=\"classesStyle\">\n    <label [for]='id'>\n        <input class=\"check-native\" type=\"checkbox\" [(ngModel)]=\"checked\"  [id]='id' [disabled]=\"isDisable\">\n        <span class=\"checkbox-style\">\n            <span class=\"checked checked-block\">\n                <span class=\"choose-tag\">\n                    <ng-content select=\"[checkboxText=style3]\"></ng-content>\n                </span>\n                <span class=\"choose-check-block\">\n                    <div class=\"check-icon\">\n                        <nx-icon name='check' size='s'></nx-icon>\n                    </div>\n                </span>\n            </span>\n        </span>\n    </label>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{border-bottom:1px solid #ececec;display:inline-block;width:100%}.checkbox-block,.checkbox-block label{display:inline-block;width:100%}.checkbox-block.type-list-data.font-normal .checkbox-style .choose-tag{font-weight:400;white-space:normal;word-break:break-all}.checkbox-block.type-list-data.align-end .checkbox-style .checked-block,.checkbox-block.type-list-data.align-end .checkbox-style .choose-tag{justify-content:flex-end}.checkbox-block.type-list-data .checkbox-style{text-align:center;display:flex;width:100%;padding:10px 20px;color:#414141;align-items:center}.checkbox-block.type-list-data .checkbox-style .choose-tag{font-size:1rem;font-weight:700;display:flex;height:100%;vertical-align:middle;align-items:center;padding-right:10px;flex-grow:0;flex-shrink:0;flex-wrap:wrap;width:calc(100% - 28px);text-align:left;white-space:normal;word-break:break-all}.checkbox-block.type-list-data .checkbox-style .checked-block{display:flex;align-items:center;width:100%;justify-content:space-between}.checkbox-block.type-list-data .checkbox-style .choose-check-block{display:inline-block;border-radius:50%;border:1px solid #c2c2c2;width:24px;height:24px}.checkbox-block.type-list-data .check-native,.checkbox-block.type-list-data .checkbox-style .check-icon{display:none}.checkbox-block.type-list-data .check-native:checked+.checkbox-style .check-icon{display:flex;justify-content:center;align-content:center}.checkbox-block.type-list-data .check-native:checked+.checkbox-style .check-icon ::ng-deep.nx-icon--check{font-size:font-size-h8;font-weight:700;color:#fff;line-height:23px}.checkbox-block.type-list-data .check-native:checked+.checkbox-style .choose-check-block{border:1px solid #007ab3;color:#414141;background-color:#007ab3}.checkbox-block.type-list-data .check-native:disabled+.checkbox-style .choose-check-block{display:none}.checkbox-block.type-list-data .check-native:disabled+.checkbox-style .choose-tag{width:100%}"]
                }] }
    ];
    UiFormCheckbox3Component.ctorParameters = function () { return []; };
    UiFormCheckbox3Component.propDecorators = {
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }],
        onClick: [{ type: Output }],
        isDisable: [{ type: Input }],
        styleWeight: [{ type: Input }],
        styleAlign: [{ type: Input }]
    };
    return UiFormCheckbox3Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormSearchComponent = /** @class */ (function () {
    function UiFormSearchComponent(changeDetecor) {
        this.changeDetecor = changeDetecor;
        this.name = '';
        this.placeholder = '';
        this.isDisable = false;
        this.nxValueChange = new EventEmitter();
        this._value = '';
    }
    Object.defineProperty(UiFormSearchComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this.value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormSearchComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            this.changeDetecor.markForCheck();
            if (this.nxValueChange)
                this.nxValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiFormSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiFormSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-search',
                    template: "<div class=\"search-block\" >\n    <div class=\"icon-block\">\n        <nx-icon name=\"product-search\" size=\"s\"></nx-icon>\n    </div>\n    <div class=\"input-block\">\n        <app-ui-form-input [name]=\"name\" [placeholder]=\"placeholder\" [isDisable]=\"isDisable\" [(nxValue)]=\"value\"></app-ui-form-input>\n    </div>\n</div>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.search-block{display:flex;width:100%;max-width:100%;align-items:center;padding-bottom:20px}.search-block .icon-block{display:inline-block;width:30px;padding-right:5px}.search-block .icon-block ::ng-deep nx-icon{color:#767676;background-color:transparent;border:none;line-height:normal;font-size:24px;width:24px;height:24px;font-weight:700}.search-block ::ng-deep .nx-formfield__wrapper{padding-bottom:0}.search-block ::ng-deep app-ui-form-input{width:100%}.search-block ::ng-deep app-ui-form-input .nx-formfield__flexfield{width:100%}.search-block ::ng-deep app-ui-form-input .nx-formfield__input{width:100%;border:none}.search-block .input-block{width:calc(100% - 30px);display:flex;flex:1 0 0}"]
                }] }
    ];
    UiFormSearchComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiFormSearchComponent.propDecorators = {
        name: [{ type: Input }],
        placeholder: [{ type: Input }],
        isDisable: [{ type: Input }],
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }]
    };
    return UiFormSearchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormLayoutRowComponent = /** @class */ (function () {
    function UiFormLayoutRowComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    UiFormLayoutRowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementClass(this.el.nativeElement, 'gas-row-block', true);
    };
    UiFormLayoutRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-layout-row',
                    template: "<div class=\"gas-row\" >\n  <ng-content></ng-content>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{margin-top:calc(30px - 15px)}:host .gas-row{display:flex;margin-left:-6px;margin-right:-6px;flex-wrap:wrap}:host .gas-row ::ng-deep .nx-formfield__wrapper{padding-bottom:0}:host .gas-row ::ng-deep .nx-formfield__input{border-top:0;padding-top:0}:host(.gas-row-block){display:block;width:100%}"]
                }] }
    ];
    UiFormLayoutRowComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer }
    ]; };
    return UiFormLayoutRowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { UiDataGroupComponent } from './components/ui-data-group/ui-data-group.component';
var UiFormLayoutColComponent = /** @class */ (function () {
    function UiFormLayoutColComponent() {
        this.colPC = 12;
        this.colNB = 12;
        this.colPad = 12;
        this.colMobile = 12;
        this.hasAdd = false;
        this.hasRemove = false;
        this.translateText = 'Add';
        this.isGroupCol = false; // col include app-group
        this.add = new EventEmitter();
        this.remove = new EventEmitter();
    }
    // @ContentChildren(UiDataGroupComponent) btnDel: QueryList<TemplateRef<any>>;
    // @ContentChildren(UiDataGroupComponent) btnDel: QueryList<TemplateRef<any>>;
    /**
     * @return {?}
     */
    UiFormLayoutColComponent.prototype.ngOnInit = 
    // @ContentChildren(UiDataGroupComponent) btnDel: QueryList<TemplateRef<any>>;
    /**
     * @return {?}
     */
    function () {
        // console.log(this.btnDel);
        this.classColPc = ' gas-col-' + this.colPC;
        this.classColNb = ' gas-col-nb-' + this.colNB;
        this.classColPad = ' gas-col-pad-' + this.colPad;
        this.classColMobile = ' gas-col-mobile-' + this.colMobile;
        this.classColGroup = this.isGroupCol ? ' style-col-group' : '';
        this.classColRender = this.classColPc + this.classColNb + this.classColPad + this.classColMobile + this.classColGroup;
    };
    /**
     * @return {?}
     */
    UiFormLayoutColComponent.prototype.addHandler = /**
     * @return {?}
     */
    function () {
        this.add.emit();
    };
    /**
     * @return {?}
     */
    UiFormLayoutColComponent.prototype.removeHandler = /**
     * @return {?}
     */
    function () {
        this.remove.emit();
    };
    UiFormLayoutColComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-layout-col',
                    template: "<div class=\"col-content\" [ngClass]=\"[(hasAdd ? ' style-has-add': ''), (hasRemove ? ' style-has-remove': '')]\">\n  <ng-content></ng-content>\n  <button *ngIf=\"hasAdd\" class=\"btn-style icon-add\" (actionClick)=\"addHandler()\" [id]=\"'btn_'+id\" Action action=\"id+'Add'\">\n    <app-ui-link [isUnderLine]=\"false\" imgSrc=\"./assets/img/icon-add-blue.svg\">\n      <ng-container textType=\"linktext\">{{translateText}}</ng-container>\n    </app-ui-link>\n  </button>\n  <button class=\"btn-style icon-del\" *ngIf=\"hasRemove\" (click)=\"removeHandler()\">\n    <app-ui-link [isUnderLine]=\"false\" imgSrc=\"./assets/img/icon-minus-blue.svg\">\n    </app-ui-link>\n  </button>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host([class*=gas-col-]){display:inline-flex;vertical-align:top;box-sizing:border-box;text-align:left;padding-right:6px;padding-left:6px;margin-bottom:1.875rem}:host([class*=gas-col-]) .col-content{display:inline-block;max-width:100%;width:100%}:host([class*=gas-col-]).style-col-group{margin-bottom:0}:host(.gas-col-1){flex:0 0 8.33333%;max-width:8.33333%}:host(.gas-col-2){flex:0 0 16.66667%;max-width:16.66667%}:host(.gas-col-3){flex:0 0 25%;max-width:25%}:host(.gas-col-4){flex:0 0 33.33333%;max-width:33.33333%}:host(.gas-col-5){flex:0 0 41.66667%;max-width:41.66667%}:host(.gas-col-6){flex:0 0 50%;max-width:50%}:host(.gas-col-7){flex:0 0 58.33333%;max-width:58.33333%}:host(.gas-col-8){flex:0 0 66.66667%;max-width:66.66667%}:host(.gas-col-9){flex:0 0 75%;max-width:75%}:host(.gas-col-10){flex:0 0 83.33333%;max-width:83.33333%}:host(.gas-col-11){flex:0 0 91.66667%;max-width:91.66667%}:host(.gas-col-12){flex:0 0 100%;max-width:100%}@media (max-width:1199px){:host(.gas-col-nb-1){flex:0 0 8.33333%;max-width:8.33333%}:host(.gas-col-nb-2){flex:0 0 16.66667%;max-width:16.66667%}:host(.gas-col-nb-3){flex:0 0 25%;max-width:25%}:host(.gas-col-nb-4){flex:0 0 33.33333%;max-width:33.33333%}:host(.gas-col-nb-5){flex:0 0 41.66667%;max-width:41.66667%}:host(.gas-col-nb-6){flex:0 0 50%;max-width:50%}:host(.gas-col-nb-7){flex:0 0 58.33333%;max-width:58.33333%}:host(.gas-col-nb-8){flex:0 0 66.66667%;max-width:66.66667%}:host(.gas-col-nb-9){flex:0 0 75%;max-width:75%}:host(.gas-col-nb-10){flex:0 0 83.33333%;max-width:83.33333%}:host(.gas-col-nb-11){flex:0 0 91.66667%;max-width:91.66667%}:host(.gas-col-nb-12){flex:0 0 100%;max-width:100%}:host(.gas-col-nb-auto){max-width:auto;flex-basis:auto}}@media (max-width:1023px){:host(.gas-col-pad-1){flex:0 0 8.33333%;max-width:8.33333%}:host(.gas-col-pad-2){flex:0 0 16.66667%;max-width:16.66667%}:host(.gas-col-pad-3){flex:0 0 25%;max-width:25%}:host(.gas-col-pad-4){flex:0 0 33.33333%;max-width:33.33333%}:host(.gas-col-pad-5){flex:0 0 41.66667%;max-width:41.66667%}:host(.gas-col-pad-6){flex:0 0 50%;max-width:50%}:host(.gas-col-pad-7){flex:0 0 58.33333%;max-width:58.33333%}:host(.gas-col-pad-8){flex:0 0 66.66667%;max-width:66.66667%}:host(.gas-col-pad-9){flex:0 0 75%;max-width:75%}:host(.gas-col-pad-10){flex:0 0 83.33333%;max-width:83.33333%}:host(.gas-col-pad-11){flex:0 0 91.66667%;max-width:91.66667%}:host(.gas-col-pad-12){flex:0 0 100%;max-width:100%}:host(.gas-col-pad-auto){max-width:auto;flex-basis:auto}}@media (max-width:767px){:host(.gas-col-mobile-1){flex:0 0 8.33333%;max-width:8.33333%}:host(.gas-col-mobile-2){flex:0 0 16.66667%;max-width:16.66667%}:host(.gas-col-mobile-3){flex:0 0 25%;max-width:25%}:host(.gas-col-mobile-4){flex:0 0 33.33333%;max-width:33.33333%}:host(.gas-col-mobile-5){flex:0 0 41.66667%;max-width:41.66667%}:host(.gas-col-mobile-6){flex:0 0 50%;max-width:50%}:host(.gas-col-mobile-7){flex:0 0 58.33333%;max-width:58.33333%}:host(.gas-col-mobile-8){flex:0 0 66.66667%;max-width:66.66667%}:host(.gas-col-mobile-9){flex:0 0 75%;max-width:75%}:host(.gas-col-mobile-10){flex:0 0 83.33333%;max-width:83.33333%}:host(.gas-col-mobile-11){flex:0 0 91.66667%;max-width:91.66667%}:host(.gas-col-mobile-12){flex:0 0 100%;max-width:100%}:host(.gas-col-mobile-auto){max-width:auto;flex-basis:auto}}.col-content{position:relative}.col-content button{border:none;background-color:transparent}.col-content .icon-del{position:absolute;top:0;right:0;padding:0;border:none}.col-content .icon-add{padding:0}.col-content.style-has-remove ::ng-deep input{padding-right:23px}.col-content.style-has-remove ::ng-deep .nx-formfield__label{background-color:#fff;width:calc(100% - 20px)}@media screen and (min-width:1025px){.col-content.style-has-remove ::ng-deep .nx-formfield__label{width:calc(100% - 2vw)}}:host .col-content.style-has-add{margin-top:-20px}"]
                }] }
    ];
    UiFormLayoutColComponent.ctorParameters = function () { return []; };
    UiFormLayoutColComponent.propDecorators = {
        colPC: [{ type: Input }],
        colNB: [{ type: Input }],
        colPad: [{ type: Input }],
        colMobile: [{ type: Input }],
        hasAdd: [{ type: Input }],
        hasRemove: [{ type: Input }],
        translateText: [{ type: Input }],
        isGroupCol: [{ type: Input }],
        id: [{ type: Input }],
        add: [{ type: Output }],
        remove: [{ type: Output }],
        classColRender: [{ type: HostBinding, args: ['class',] }]
    };
    return UiFormLayoutColComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormLayoutAdvancedComponent = /** @class */ (function () {
    function UiFormLayoutAdvancedComponent() {
        this.isDel = false;
        this.isAdd = false;
        this.isIcon = false;
        this.limitAdd = 1;
        this.limitDel = 1;
        this.isOnlyText = false;
        // row 
        this.classRow = ' gas-row';
    }
    /**
     * @return {?}
     */
    UiFormLayoutAdvancedComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiFormLayoutAdvancedComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-layout-advanced',
                    template: "<div class=\"gas-layout-form\" [ngClass]=\"isOnlyText ? ' style-only-text': ''\">\n    <ng-content></ng-content>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.gas-layout-form{margin-top:30px}.gas-layout-form.style-only-text{margin-top:0}.gas-layout-form ::ng-deep .nx-formfield__wrapper{padding-bottom:0}.gas-layout-form ::ng-deep .nx-formfield__input{border-top:0;padding-top:0}.gas-layout-form ::ng-deep .icon-add{margin-top:-5px}.gas-layout-form ::ng-deep .first-add-block .icon-add{margin-top:0;min-height:30px}.gas-layout-form ::ng-deep .ui-data-group .pre-block{margin-bottom:-15px}"]
                }] }
    ];
    UiFormLayoutAdvancedComponent.ctorParameters = function () { return []; };
    UiFormLayoutAdvancedComponent.propDecorators = {
        isDel: [{ type: Input }],
        isAdd: [{ type: Input }],
        isIcon: [{ type: Input }],
        iconImg: [{ type: Input }],
        limitAdd: [{ type: Input }],
        limitDel: [{ type: Input }],
        isOnlyText: [{ type: Input }]
    };
    return UiFormLayoutAdvancedComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormRadioTagComponent = /** @class */ (function (_super) {
    __extends(UiFormRadioTagComponent, _super);
    function UiFormRadioTagComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UiFormRadioTagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-radio-tag',
                    template: " <div class=\"ui-tag-block\" >\n    <label [attr.for]=\"id\">\n      <input class=\"choose-item\" type=\"radio\" [name]=\"name\" [id]=\"id\" [value]=\"value\"  [checked]=\"checked\" [disabled]=\"disabled\"  (click)=\"_onInputChange($event)\" >\n      <div class=\"tag-block\" #tagBlock>\n        <div class=\"tag-content\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </label>\n</div>\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".ui-tag-block{display:inline-block;width:100%;min-width:52px}:host-context(.WARM) .choose-item:checked+.tag-block{background-color:#f86200}:host-context(.WARM) .tag-block{border:1px solid #f86200;color:#f86200}:host-context(.COLD) .choose-item:checked+.tag-block{background-color:#7fe4e0}:host-context(.COLD) .tag-block{border:1px solid #7fe4e0;color:#7fe4e0}:host-context(.HOT) .choose-item:checked+.tag-block{background-color:#dc3149}:host-context(.HOT) .tag-block{border:1px solid #dc3149;color:#dc3149}:host-context(.wd-lg) .tag-block{padding:5px 14px}@media screen and (min-width:1025px){:host-context(.wd-lg) .tag-block{padding:.5vw 1.4vw}}:host-context(.profile-tag) .tag-block{padding:1px 14px}@media screen and (min-width:1025px){:host-context(.profile-tag) .tag-block{padding:.1vw 1.4vw}}:host-context(.wd-max) .tag-block{padding:5px 14px;height:32px;box-sizing:border-box}@media screen and (min-width:1025px){:host-context(.wd-max) .tag-block{height:3.2vw;padding:.5vw 1.4vw}}.tag-block{text-align:center;color:#fff;border-radius:3px;display:flex;align-items:center;justify-content:center;min-width:40px;border:1px}.tag-block .tag-content{display:flex;justify-content:center;align-items:center;font-weight:400;font-size:.75rem}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-flex}.ui-tag-block .choose-item{display:none}.ui-tag-block .choose-item:checked+.tag-block{color:#fff}"]
                }] }
    ];
    return UiFormRadioTagComponent;
}(UiFormRadioComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormTitleSmComponent = /** @class */ (function () {
    function UiFormTitleSmComponent() {
    }
    /**
     * @return {?}
     */
    UiFormTitleSmComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiFormTitleSmComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-title-sm',
                    template: "<div class=\"form-title\"><ng-content></ng-content></div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.form-title{padding-bottom:5px;letter-spacing:.2px;line-height:normal;font-weight:700;font-size:1rem;color:#414141}:host-context(.disable) .form-title{color:#c2c2c2}"]
                }] }
    ];
    UiFormTitleSmComponent.ctorParameters = function () { return []; };
    return UiFormTitleSmComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormInputComponent = /** @class */ (function () {
    function UiFormInputComponent(elementRef, changeDector, numberFormat) {
        this.changeDector = changeDector;
        this.numberFormat = numberFormat;
        this.inputTitle = '';
        this.placeholder = '';
        this.typeUi = 'style1';
        this.isDisable = false;
        this.id = '';
        this._type = 'text'; // 預設是text 可以輸入其他種input type
        // 取得model的預設值
        this.ngModelChange = new EventEmitter();
        this.eventObj = new EventEmitter();
        this.nxValueChange = new EventEmitter();
        // error status style
        this.classError = '';
        this.inputStatus = false;
        this.isAndroid = false;
        this.inputType = '';
        this.isErrorChange = new EventEmitter();
        this.onKeypress = new EventEmitter();
        this.isFocus = false;
        this._disabled = false;
        this.elementRef = elementRef;
    }
    Object.defineProperty(UiFormInputComponent.prototype, "type", {
        get: 
        // 預設是text 可以輸入其他種input type
        /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.inputType = this._type === 'dollar' ? 'tel' : this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormInputComponent.prototype, "maxLength", {
        get: /**
         * @return {?}
         */
        function () {
            return this._maxLength;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value != 0 && this._type === 'dollar') {
                this._maxLength = value + Math.floor((value - 1) / 3);
            }
            else {
                this._maxLength = value;
            }
            console.log("this._maxLength:", this._maxLength);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormInputComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this.value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this.type == 'dollar') {
                this.value = this.convertNumberThousand(newValue); //千分位function待替換
            }
            else {
                this.value = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormInputComponent.prototype, "isError", {
        get: /**
         * @return {?}
         */
        function () { return this.inputStatus; },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this.inputStatus = status;
            this.classError = status ? ' style-error' : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} bool
     * @return {?}
     */
    UiFormInputComponent.prototype.focusBlurEvent = /**
     * @param {?} bool
     * @return {?}
     */
    function (bool) {
        this.eventObj.emit(this.isFocus);
        if (this.errorMagInfo != undefined) {
            this.errorMagInfo.controlMsg(this.isFocus);
        }
    };
    // when input focus input scroll to top
    //scrollContent = this.elementRef.nativeElement.querySelector('.form-scroll-content');
    // when input focus input scroll to top
    //scrollContent = this.elementRef.nativeElement.querySelector('.form-scroll-content');
    /**
     * @return {?}
     */
    UiFormInputComponent.prototype.focus = 
    // when input focus input scroll to top
    //scrollContent = this.elementRef.nativeElement.querySelector('.form-scroll-content');
    /**
     * @return {?}
     */
    function () {
        //this.scrollTop = 20;
        /** @type {?} */
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("ios-keyIn");
        this.isFocus = true;
        /** @type {?} */
        var inputEle = this.elementRef.nativeElement.querySelector('input');
        /** @type {?} */
        var scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
        /** @type {?} */
        var windowWidth = window.innerWidth;
        /** @type {?} */
        var moveDist = windowWidth < 1024 ? 100 : 250;
        // console.log('scrollContent', scrollContent);
        // console.log('focus windowWidth', windowWidth, ' ', moveDist);
        if (scrollContent != null) {
            /** @type {?} */
            var move = scrollContent.scrollTop + inputEle.getBoundingClientRect().top - moveDist;
            console.log('move', move);
            // if (document.querySelector('.plt-android') != null) {
            //   scrollContent.classList.add('active');
            //   scrollContent.scrollTo({ top: move, behavior: "smooth" });
            // }
        }
        this.focusBlurEvent(this.isFocus);
    };
    /**
     * @return {?}
     */
    UiFormInputComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("ios-keyIn");
        this.isFocus = false;
        /** @type {?} */
        var scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
        if (document.querySelector('.plt-android') != null && scrollContent != null) {
            scrollContent.classList.remove('active');
        }
        this.focusBlurEvent(this.isFocus);
    };
    Object.defineProperty(UiFormInputComponent.prototype, "result", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            console.log("ui-form-input set result value:", value);
            /** @type {?} */
            var tempValue = value.replace(/[^0-9]/ig, "");
            console.log("ui-form-input set result tempValue:", tempValue);
            if (this.type == 'dollar') {
                /** @type {?} */
                var valHasNoDot = void 0;
                /** @type {?} */
                var convertedVal_1 = '';
                if (Number(tempValue) == 0 && tempValue.length === 0) { //僅輸入符號
                    convertedVal_1 = '';
                }
                else if (Number(tempValue) == 0 && tempValue.length > 0) { //輸入N個0
                    convertedVal_1 = '0'; //0
                    valHasNoDot = '0';
                }
                else { //非0數字
                    valHasNoDot = Number(tempValue).toString();
                    convertedVal_1 = this.convertNumberThousand(Number(tempValue));
                    console.log("not zero value:", this.value);
                }
                console.debug('ui-form-input', valHasNoDot);
                if (this.nxValueChange) {
                    this.nxValueChange.emit(valHasNoDot);
                }
                //Fix中文字偵測問題
                console.log("Fix:", this.value);
                if (!this.value || this.value === convertedVal_1) {
                    this.value = this.value + " ";
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.value = convertedVal_1;
                        _this.changeDector.detectChanges();
                    }));
                }
                else {
                    this.value = convertedVal_1;
                }
                this.changeDector.detectChanges();
            }
            else {
                this.value = value;
                // console.debug('ui-form-input',this.value);
                if (this.nxValueChange) {
                    this.nxValueChange.emit(this.value);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    //keypress
    //keypress
    /**
     * @param {?} event
     * @return {?}
     */
    UiFormInputComponent.prototype.onKeyDown = 
    //keypress
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode != 37 && event.keyCode != 38 && event.keyCode != 39 && event.keyCode != 40 && event.keyCode != 8) {
            if (StringUtils.byteLength(event.target.value.toString()) > (this.maxLength - 1)) {
                console.log('太長了！maxLength:', this.maxLength);
                return false;
            }
            if (this.type == 'dollar') { // nonnumeric word not allow 
                // nonnumeric word not allow 
                /** @type {?} */
                var numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                if (numArr.indexOf(event.key) < 0) {
                    return false;
                }
            }
        }
        this.onKeypress.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiFormInputComponent.prototype.onKeyUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var returnString = this.value;
        if (event.keyCode == 13) {
            while (StringUtils.byteLength(returnString) > (this.maxLength)) {
                returnString = returnString.substr(0, returnString.length - 1);
            }
        }
        this.value = returnString;
        this.onKeypress.emit(event);
    };
    /**
     * @return {?}
     */
    UiFormInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.type == 'dollar') {
            this.value = this.convertNumberThousand(this.value);
        }
    };
    //轉換千位數表示法（000,000,000）
    //轉換千位數表示法（000,000,000）
    /**
     * @param {?} num
     * @return {?}
     */
    UiFormInputComponent.prototype.convertNumberThousand = 
    //轉換千位數表示法（000,000,000）
    /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        if (num && num.toString) {
            // var numString = num.toString();
            // var pattern = /(-?\d+)(\d{3})/;
            // console.log("convertNumberThousand:", num, pattern);
            // while (pattern.test(numString)) {
            //   numString = numString.replace(pattern, "$1,$2");
            // }
            // console.log("convertNumberThousand return:", numString);
            // return numString;
            return this.numberFormat.transform(num);
        }
        else
            return '';
    };
    UiFormInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-input',
                    template: "\n<!-- norml input -->\n\n<div class=\"input-block \" [ngClass]=\"typeUi\">\n    <nx-formfield  [nxLabel]=\"inputTitle\" nxFloatLabel=\"auto\" [ngClass]=\"classError\">\n        <input [type]=\"inputType\" (keydown)=\"onKeyDown($event)\" (keyup)=\"onKeyUp($event)\" [maxlength]=\"maxLength\" [(ngModel)]='result' (focus)=\"focus()\" (blur)=\"blur()\"  [placeholder]=\"placeholder\" nxInput  [name]='name' [disabled]=\"isDisable\" [id]=\"id\"/>\n    </nx-formfield>\n    <span class=\"form-unit\"><ng-content></ng-content></span>\n</div>\n\n<!-- end of normal input -->\n\n\n\n",
                    styles: [":host{position:relative}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host ::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host :-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield__flexfield,:host ::ng-deep .select-body-block{min-height:30px}:host ::ng-deep .nx-formfield__label-holder{height:99%;top:-30px;padding-top:30px;font-size:1.25rem}:host ::ng-deep .nx-formfield__label{background-color:#fff;width:100%;font-weight:400}:host ::ng-deep .nx-formfield.is-floating .nx-formfield__label{-webkit-transform:translateY(30px) translateZ(.001px);transform:translateY(30px) translateZ(.001px);font-weight:700;font-size:1rem;-webkit-transform:translateY(-26px);transform:translateY(-26px);color:#414141}:host .input-block{display:flex;width:100%;align-items:baseline;position:relative}:host .input-block .c-input{font-size:1.25rem}:host .input-block .c-input.is-filled{font-weight:400}:host .input-block .c-input.is-filled .nx-formfield__label{background-color:transparent}:host .input-block .c-input.is-disabled{color:#c2c2c2}:host .input-block .form-unit{display:flex;flex-grow:0;font-weight:700;font-size:.875rem}:host .input-block .form-unit:empty{display:none}:host .input-block.style2 ::ng-deep .nx-formfield .c-input{text-align:center}:host ::ng-deep .nx-formfield{display:flex;flex-grow:1;min-width:100%}:host ::ng-deep .nx-formfield .nx-formfield__wrapper{display:block;width:100%}:host ::ng-deep .nx-formfield.is-filled .nx-formfield__label{background-color:transparent}:host ::ng-deep .nx-formfield.style-error .nx-formfield__flexfield{border-color:#dc3149}:host ::ng-deep .nx-formfield.style-error .nx-formfield.is-floating .nx-formfield__label{color:#dc3149}:host ::ng-deep .nx-formfield.style-error input{color:#dc3149}:host ::ng-deep .nx-formfield ::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host ::ng-deep .nx-formfield textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host ::ng-deep .nx-formfield ::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield :-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield ::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}@media screen and (min-width:1025px){:host .input-block .c-input{font-size:1.25rem}}:host-context(.disable) ::ng-deep .nx-formfield.is-floating .nx-formfield__label{color:#c2c2c2}:host-context(.disable) ::ng-deep .nx-formfield .nx-formfield__flexfield{border-color:#c2c2c2}"]
                }] }
    ];
    UiFormInputComponent.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] },
        { type: ChangeDetectorRef },
        { type: NumberFormatPipe }
    ]; };
    UiFormInputComponent.propDecorators = {
        name: [{ type: Input }],
        inputTitle: [{ type: Input }],
        value: [{ type: Input }],
        placeholder: [{ type: Input }],
        typeUi: [{ type: Input }],
        isDisable: [{ type: Input }],
        id: [{ type: Input }],
        type: [{ type: Input }],
        maxLength: [{ type: Input }],
        ngModelChange: [{ type: Output }],
        eventObj: [{ type: Output }],
        errorMagInfo: [{ type: Input }],
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }],
        isError: [{ type: Input }],
        isErrorChange: [{ type: Output }],
        onKeypress: [{ type: Output }]
    };
    return UiFormInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormErrorMsgComponent = /** @class */ (function () {
    function UiFormErrorMsgComponent() {
    }
    /**
     * @return {?}
     */
    UiFormErrorMsgComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiFormErrorMsgComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-error-msg',
                    template: "<div class=\"error-msg\" ng-class=\"{addActive: errortext.length}\"  [hidden]=\"!errorContent.innerHTML.trim()\">\n  <p #errorContent class=\"errortext\"><ng-content ></ng-content></p>\n</div>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.error-msg p{color:#dc3149;font-size:.75rem;line-height:normal;padding:0;margin:0;text-align:left}"]
                }] }
    ];
    UiFormErrorMsgComponent.ctorParameters = function () { return []; };
    return UiFormErrorMsgComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormDateComponent = /** @class */ (function () {
    function UiFormDateComponent(changeDetecor, elementRef, dateUtils, showRule) {
        this.changeDetecor = changeDetecor;
        this.elementRef = elementRef;
        this.dateUtils = dateUtils;
        this.showRule = showRule;
        this.title = '';
        this._isDisable = false;
        this.nxValueChange = new EventEmitter();
        // error status style
        this.classError = '';
        this.classDisable = '';
        this.inputStatus = false;
        this.isFocus = false;
        this.maxDate = '';
        this.isErrorChange = new EventEmitter();
        this.afterDatepickerOpen = new EventEmitter();
        this.afterDatepickerClose = new EventEmitter();
    }
    Object.defineProperty(UiFormDateComponent.prototype, "isDisable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisable;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isDisable = val;
            this.classDisable = this._isDisable ? 'style-disable' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormDateComponent.prototype, "max", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.warn('max', value);
            if (StringUtils.isNotEmpty(value)) {
                this.maxDate = this.convertDateToString(value);
            }
            else {
                this.maxDate = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormDateComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this._nxValue; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log("value: ", value);
            if (StringUtils.isNotEmpty(value)) {
                this.isFocus = true;
                this._nxValue = value;
                this.showDate = this.convertDateToString(this._nxValue);
                this.displayDate = this.convertDateByFormat(this._nxValue);
            }
            else {
                this.isFocus = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormDateComponent.prototype, "isError", {
        get: /**
         * @return {?}
         */
        function () { return this.inputStatus; },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this.inputStatus = status;
            this.classError = status ? ' style-error' : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiFormDateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.classDisable = this._isDisable ? 'style-disable' : '';
    };
    /**
     * @param {?} changeDateStr
     * @return {?}
     */
    UiFormDateComponent.prototype.dateChange = /**
     * @param {?} changeDateStr
     * @return {?}
     */
    function (changeDateStr) {
        console.warn('changeDateStr', changeDateStr);
        console.warn("before this.nxValue ", this._nxValue);
        console.warn("this.showDate ", this.showDate);
        if (this.showDate != changeDateStr) {
            this.showDate = changeDateStr;
            if (StringUtils.isEmpty(this.showDate)) {
                this._nxValue = null;
                this.isFocus = false;
            }
            else {
                this.convertShowDateToDate();
            }
            this.changeDetecor.markForCheck();
            /** @type {?} */
            var scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
            if (document.querySelector('.plt-android') != null && scrollContent != null) {
                scrollContent.classList.remove('active');
            }
            this.nxValueChange.emit(this._nxValue);
            this.changeDetecor.detectChanges();
            //this.dateTimeChange();
        }
    };
    /**
     * @return {?}
     */
    UiFormDateComponent.prototype.convertShowDateToDate = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var time = this.showDate.split('-');
        /** @type {?} */
        var dateNow = new Date();
        this._nxValue = new Date(parseInt(time[0]), parseInt(time[1]) - 1, parseInt(time[2]), getHours(dateNow), getMinutes(dateNow));
        this.showDate = this.convertDateToString(this._nxValue);
        this.displayDate = this.convertDateByFormat(this._nxValue);
        console.warn('displayDate', this.displayDate);
    };
    // private convertDate2Str() {
    //   console.warn('ui-form-date nxValue', this.nxValue);
    //   let tmp;
    //   if (getMonth(this.nxValue) < 9) {
    //     tmp = getYear(this.nxValue).toString() + '-' + '0' + (getMonth(this.nxValue) + 1).toString();
    //   } else {
    //     tmp = getYear(this.nxValue).toString() + '-' + (getMonth(this.nxValue) + 1).toString();
    //   }
    //   if (getDate(this.nxValue) < 10) {
    //     tmp = this.showDate + '-0' + getDate(this.nxValue).toString();
    //   } else {
    //     tmp = this.showDate + '-' + getDate(this.nxValue).toString();
    //   }
    //   this.showDate = tmp;
    //   // if(!isSameDay(newValue, this._innerValue)) {
    //   //   if (StringUtils.isNotEmpty(newValue)) {
    //   //     this._innerValue = newValue;
    //   //     if (getMonth(newValue) < 9) {
    //   //       this.showDate = getYear(newValue).toString() + '-' + '0' + (getMonth(newValue) + 1).toString();
    //   //     } else {
    //   //       this.showDate = getYear(newValue).toString() + '-' + (getMonth(newValue) + 1).toString();
    //   //     }
    //   //     if (getDate(newValue) < 10) {
    //   //       this.showDate = this.showDate + '-0' + getDate(newValue).toString();
    //   //     } else {
    //   //       this.showDate = this.showDate + '-' + getDate(newValue).toString();
    //   //     }
    //   //     this.isFocus = true;
    //   //   } else {
    //   //     this.isFocus = false
    //   //   }
    //   // }
    // }
    // private convertDate2Str() {
    //   console.warn('ui-form-date nxValue', this.nxValue);
    //   let tmp;
    //   if (getMonth(this.nxValue) < 9) {
    //     tmp = getYear(this.nxValue).toString() + '-' + '0' + (getMonth(this.nxValue) + 1).toString();
    //   } else {
    //     tmp = getYear(this.nxValue).toString() + '-' + (getMonth(this.nxValue) + 1).toString();
    //   }
    //   if (getDate(this.nxValue) < 10) {
    //     tmp = this.showDate + '-0' + getDate(this.nxValue).toString();
    //   } else {
    //     tmp = this.showDate + '-' + getDate(this.nxValue).toString();
    //   }
    //   this.showDate = tmp;
    //   // if(!isSameDay(newValue, this._innerValue)) {
    //   //   if (StringUtils.isNotEmpty(newValue)) {
    //   //     this._innerValue = newValue;
    //   //     if (getMonth(newValue) < 9) {
    //   //       this.showDate = getYear(newValue).toString() + '-' + '0' + (getMonth(newValue) + 1).toString();
    //   //     } else {
    //   //       this.showDate = getYear(newValue).toString() + '-' + (getMonth(newValue) + 1).toString();
    //   //     }
    //   //     if (getDate(newValue) < 10) {
    //   //       this.showDate = this.showDate + '-0' + getDate(newValue).toString();
    //   //     } else {
    //   //       this.showDate = this.showDate + '-' + getDate(newValue).toString();
    //   //     }
    //   //     this.isFocus = true;
    //   //   } else {
    //   //     this.isFocus = false
    //   //   }
    //   // }
    // }
    /**
     * @return {?}
     */
    UiFormDateComponent.prototype.inputFocus = 
    // private convertDate2Str() {
    //   console.warn('ui-form-date nxValue', this.nxValue);
    //   let tmp;
    //   if (getMonth(this.nxValue) < 9) {
    //     tmp = getYear(this.nxValue).toString() + '-' + '0' + (getMonth(this.nxValue) + 1).toString();
    //   } else {
    //     tmp = getYear(this.nxValue).toString() + '-' + (getMonth(this.nxValue) + 1).toString();
    //   }
    //   if (getDate(this.nxValue) < 10) {
    //     tmp = this.showDate + '-0' + getDate(this.nxValue).toString();
    //   } else {
    //     tmp = this.showDate + '-' + getDate(this.nxValue).toString();
    //   }
    //   this.showDate = tmp;
    //   // if(!isSameDay(newValue, this._innerValue)) {
    //   //   if (StringUtils.isNotEmpty(newValue)) {
    //   //     this._innerValue = newValue;
    //   //     if (getMonth(newValue) < 9) {
    //   //       this.showDate = getYear(newValue).toString() + '-' + '0' + (getMonth(newValue) + 1).toString();
    //   //     } else {
    //   //       this.showDate = getYear(newValue).toString() + '-' + (getMonth(newValue) + 1).toString();
    //   //     }
    //   //     if (getDate(newValue) < 10) {
    //   //       this.showDate = this.showDate + '-0' + getDate(newValue).toString();
    //   //     } else {
    //   //       this.showDate = this.showDate + '-' + getDate(newValue).toString();
    //   //     }
    //   //     this.isFocus = true;
    //   //   } else {
    //   //     this.isFocus = false
    //   //   }
    //   // }
    // }
    /**
     * @return {?}
     */
    function () {
        console.log('inputFocus');
        // when user click input, scroll top the input, to prevent calendar be cutted because of softkeyboard slide up
        /** @type {?} */
        var inputEle = this.elementRef.nativeElement.querySelector('input');
        /** @type {?} */
        var scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
        console.log('inputEle', inputEle, 'scrollContent', scrollContent);
        /** @type {?} */
        var windowWidth = window.innerWidth;
        /** @type {?} */
        var moveDist = windowWidth < 1024 ? 100 : 250;
        if (scrollContent != null) {
            /** @type {?} */
            var move = scrollContent.scrollTop + inputEle.getBoundingClientRect().top - moveDist;
            console.log('move', move);
            if (document.querySelector('.plt-android') != null) {
                scrollContent.scrollTo({ top: move, behavior: "smooth" });
            }
        }
        this.isFocus = true;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UiFormDateComponent.prototype.convertDateToString = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var dateString = '';
        if (date != null) {
            if (getMonth(date) < 9) {
                dateString = getYear(date).toString() + '-' + '0' + (getMonth(date) + 1).toString();
            }
            else {
                dateString = getYear(date).toString() + '-' + (getMonth(date) + 1).toString();
            }
            if (getDate(date) < 10) {
                dateString = dateString + '-0' + getDate(date).toString();
            }
            else {
                dateString = dateString + '-' + getDate(date).toString();
            }
            return dateString;
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UiFormDateComponent.prototype.convertDateByFormat = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (this.showRule) {
            return this.showRule.convertDate(date);
        }
        else {
            return this.dateUtils.toDateString(date, 'MM/dd/yyyy');
        }
    };
    /**
     * @return {?}
     */
    UiFormDateComponent.prototype.checkMaxDate = /**
     * @return {?}
     */
    function () {
        if (StringUtils.isNotEmpty(this.maxDate)) {
            console.warn('maxDate', this.maxDate);
            console.warn(isAfter(new Date(this.showDate), new Date(this.maxDate)));
            if (isAfter(new Date(this.showDate), new Date(this.maxDate))) {
                alert('select date must before ' + this.maxDate);
                this.showDate = this.maxDate;
                this.convertShowDateToDate();
            }
        }
    };
    UiFormDateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-date',
                    template: "\n\n<div #containerBlock class=\"ui-datepicker\" [ngClass]=\"[classError, (isFocus? 'isFocus':''),classDisable]\"> <!--[ngClass]=\"[classError, (innerValue? 'isFocus':'')]\" -->\n  <div class=\"ui-input-field\">\n      <!-- <input #input placeholder=\"mm/dd/yyyy\" class=\"ui-input-show\" [(ngModel)]=\"inputDate\" (blur)=\"inputBlur()\" (focus)=\"inputFocus()\" />\n      <input #inputEle placeholder=\"mm/dd/yyyy\" class=\"ui-input-hidden\"\n        [(ngModel)]=\"innerValue\" [owlDateTime]=\"datepicker\"\n        (focus)=\"inputonFoucus($event)\"\n        (focusout)=\"inputoutFoucus($event)\" (dateTimeChange) =\"dateTimeChange()\"/> -->\n      <input #input type=\"date\"  placeholder=\"Date\" name=\"datepicker\"  [max]=\"maxDate\" class=\"ui-input-show\"  (focus)=\"inputFocus()\" (blur)=\"checkMaxDate()\" [ngModel]=\"showDate\" (ngModelChange)=\"dateChange($event)\" [disabled]=\"isDisable\">\n      <div class=\"ui-form-title\">\n        <label class=\"txt\">{{title}}</label>\n      </div>\n      <div class=\"displayDate-block\">{{displayDate}}</div>\n  </div>\n  <!-- end: ui-input-field -->\n  <nx-icon class=\"ui-datepicker-icon datepicker-icon\" name='calendar'></nx-icon>\n  <!-- <nx-icon class=\"ui-datepicker-icon datepicker-icon\" name='calendar'\n  [owlDateTimeTrigger]=\"datepicker\" (click)=\"inputonFoucus($event)\" ></nx-icon> -->\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}::ng-deep .nx-formfield__flexfield,::ng-deep .select-body-block{min-height:30px}::ng-deep .nx-formfield__label-holder{height:99%;top:-30px;padding-top:30px;font-size:1.25rem}::ng-deep .nx-formfield__label{background-color:#fff;width:100%;font-weight:400}::ng-deep .nx-formfield.is-floating .nx-formfield__label{-webkit-transform:translateY(30px) translateZ(.001px);transform:translateY(30px) translateZ(.001px);font-weight:700}.ui-datepicker{position:relative}.ui-datepicker.style-error .ui-input-field,.ui-datepicker.style-error input{color:#dc3149;border-color:#dc3149}.ui-datepicker.style-error .ui-datepicker-icon{color:#dc3149}.ui-datepicker.style-disable{pointer-events:none}.ui-datepicker.style-disable .ui-form-title .txt,.ui-datepicker.style-disable .ui-input-field,.ui-datepicker.style-disable input{color:#c2c2c2;border-color:#c2c2c2}.ui-datepicker.style-disable .displayDate-block,.ui-datepicker.style-disable .ui-datepicker-icon{color:#c2c2c2}.ui-datepicker.isFocus .ui-form-title{-webkit-transform:translateY(-25px) translateZ(.001px);transform:translateY(-25px) translateZ(.001px);font-size:1rem;font-weight:700;background-color:transparent}.ui-datepicker .ui-input-field{position:relative;padding:0;border-bottom:1px solid #414141}.ui-datepicker input{background-color:transparent;-webkit-appearance:none;position:relative;width:100%;margin:0;padding:0;font-size:1px;font-weight:400;line-height:1.25rem;letter-spacing:.2px;color:#414141;border:0;border-radius:0;min-height:29px}.ui-datepicker input:active,.ui-datepicker input:focus{background-color:transparent}.ui-datepicker input.ui-input-hidden{visibility:hidden;width:0;height:0;line-height:0}.ui-datepicker input::-webkit-inner-spin-button{display:none;-webkit-appearance:none}.ui-datepicker input::-webkit-clear-button{-webkit-appearance:none;display:none}.ui-datepicker input::-webkit-calendar-picker-indicator{background:0 0;bottom:0;color:transparent;cursor:pointer;height:auto;left:0;position:absolute;right:0;top:0;width:100%;z-index:1}.ui-datepicker .ui-form-title{width:100%;position:absolute;top:0;left:0;font-size:1.25rem;font-weight:400;letter-spacing:.2px;color:#414141;background-color:#fff;height:calc(100% - 1px);-webkit-transform-origin:0 0;transform-origin:0 0;transition:transform .15s ease-out,font-size .15s ease-out,-webkit-transform .15s ease-out;z-index:2;pointer-events:none;line-height:28px}.ui-datepicker .ui-datepicker-icon{display:inline-block;width:1.5rem;height:1.5rem;pointer-events:none;position:absolute;bottom:5px;right:0;font-size:1.5rem;color:#007ab3;z-index:2}@media (max-width:375px){.ui-datepicker .ui-datepicker-icon{width:1.5rem;height:1.5rem;font-size:1.5rem;line-height:1.8rem}}.displayDate-block{position:absolute;top:0;left:0;height:calc(100% - 1px);background-color:#fff;width:100%;font-size:1.25rem;font-weight:400;pointer-events:none}"]
                }] }
    ];
    UiFormDateComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: DateUtils },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] }
    ]; };
    UiFormDateComponent.propDecorators = {
        title: [{ type: Input }],
        isDisable: [{ type: Input }],
        nxValueChange: [{ type: Output }],
        max: [{ type: Input }],
        nxValue: [{ type: Input }],
        isError: [{ type: Input }],
        isErrorChange: [{ type: Output }],
        afterDatepickerOpen: [{ type: Output }],
        afterDatepickerClose: [{ type: Output }],
        input: [{ type: ViewChild, args: ['input',] }],
        inputEle: [{ type: ViewChild, args: ['inputEle',] }],
        containerBlock: [{ type: ViewChild, args: ['containerBlock',] }]
    };
    return UiFormDateComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormCheckboxComponent = /** @class */ (function (_super) {
    __extends(UiFormCheckboxComponent, _super);
    function UiFormCheckboxComponent(_renderer) {
        var _this = _super.call(this) || this;
        _this._renderer = _renderer;
        _this.colorCode = '';
        return _this;
    }
    // 從色碼設定checkbox的顏色
    // 從色碼設定checkbox的顏色
    /**
     * @return {?}
     */
    UiFormCheckboxComponent.prototype.colorSetting = 
    // 從色碼設定checkbox的顏色
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkblock_ele = this.checkBlock.nativeElement;
        this._renderer.setStyle(checkblock_ele, 'borderColor', this.colorCode);
        if (this.nxValue) {
            this._renderer.setStyle(checkblock_ele, 'backgroundColor', this.colorCode);
        }
        else {
            this._renderer.removeStyle(this.checkBlock.nativeElement, 'backgroundColor');
        }
    };
    /**
     * @return {?}
     */
    UiFormCheckboxComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        //console.log('color code:',this.checkBlock,this.colorCode);
        this.colorSetting();
    };
    Object.defineProperty(UiFormCheckboxComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this.checkedValue; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this.colorSetting();
            this.checkedValue = newValue;
        },
        enumerable: true,
        configurable: true
    });
    UiFormCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-checkbox',
                    template: "<div class=\"form-checkbox\" [ngClass]=\"[isDisable ? ' disable': '', classCheckboxSingle]\">\n  <label [for]='id' class=\"checkbox-content-block\">\n    <input class=\"check-input\" type=\"checkbox\" [(ngModel)]=\"checked\" [disabled]=\"isDisable\" [id]=\"id\">\n    <span #checkBlock class=\"check-block\">\n      <span class=\"check-block-inside\">\n        <img src=\"assets/img/icon-check-white.svg\" alt=\"\">\n      </span>\n    </span>\n    <span class=\"check-text\">\n        <ng-content select=\"[checkboxText=style2]\"></ng-content>\n      </span>\n  </label>\n</div>\n  \n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".form-checkbox{display:inline-block;vertical-align:middle;margin-right:30px}.form-checkbox.style-single{margin-right:0}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.form-checkbox ::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-checkbox input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}.form-checkbox textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}.form-checkbox ::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-checkbox :-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-checkbox ::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-checkbox ::ng-deep .nx-formfield__flexfield,.form-checkbox ::ng-deep .select-body-block{min-height:30px}.form-checkbox ::ng-deep .nx-formfield__label-holder{height:99%;top:-30px;padding-top:30px;font-size:1.25rem}.form-checkbox ::ng-deep .nx-formfield__label{background-color:#fff;width:100%;font-weight:400}.form-checkbox ::ng-deep .nx-formfield.is-floating .nx-formfield__label{-webkit-transform:translateY(30px) translateZ(.001px);transform:translateY(30px) translateZ(.001px);font-weight:700}.form-checkbox .checkbox-content-block{display:flex;justify-content:flex-start;align-items:flex-start}.form-checkbox .check-input{display:none}.form-checkbox .check-input+.check-block{border:2px solid #c2c2c2;display:inline-block;width:24px;height:24px;position:relative;border-radius:3px;flex:24px 0 0}.form-checkbox .check-input+.check-block .check-block-inside{position:absolute;left:0;top:0;width:40%;height:16px}.form-checkbox .check-input:checked+.check-block{border-color:#007ab3;background-color:#007ab3}.form-checkbox .check-input:checked+.check-block .check-block-inside{width:100%;height:100%}.form-checkbox .check-input:checked+.check-block .check-block-inside img{width:100%}.form-checkbox .check-text{display:inline-block;padding-left:12px;font-size:1.25rem;line-height:24px}.form-checkbox.disable .check-input+.check-block{border-color:#c2c2c2}.form-checkbox.disable .check-input:checked+.check-block{background-color:#c2c2c2}.form-checkbox.disable .check-text{color:#c2c2c2}"]
                }] }
    ];
    UiFormCheckboxComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    UiFormCheckboxComponent.propDecorators = {
        colorCode: [{ type: Input }],
        checkBlock: [{ type: ViewChild, args: ['checkBlock',] }]
    };
    return UiFormCheckboxComponent;
}(UiFormCheckbox2Component));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiFormSelectComponent = /** @class */ (function () {
    function UiFormSelectComponent() {
        this.nxValueChange = new EventEmitter();
        this.onChange = new EventEmitter();
        this.placeholder = 'Select';
        this.isShowTitle = true;
        this.isShowDefaultOption = true;
        this.isNoSpace = false;
        this.styleTitleFloatNow = ''; // title float or keep;
        this.styleNoSpace = '';
        this._value = '';
        // error status style
        this.classError = '';
        this.classDisable = '';
        this.inputStatus = false;
        this.isErrorChange = new EventEmitter();
        this._isDisable = false;
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.isFocus = false;
    }
    Object.defineProperty(UiFormSelectComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._value = newValue;
            this.titleFloat();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormSelectComponent.prototype, "isError", {
        get: /**
         * @return {?}
         */
        function () { return this.inputStatus; },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this.inputStatus = status;
            this.classError = status ? ' style-error' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormSelectComponent.prototype, "isDisable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisable;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isDisable = val;
            this.classDisable = this._isDisable ? 'style-disable' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormSelectComponent.prototype, "currentValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._value = val;
            if (this.nxValueChange)
                this.nxValueChange.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} boolean
     * @return {?}
     */
    UiFormSelectComponent.prototype.focusBlurEvent = /**
     * @param {?} boolean
     * @return {?}
     */
    function (boolean) {
        if (this.errorMagInfo != undefined) {
            this.errorMagInfo.controlMsg(this.isFocus);
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    UiFormSelectComponent.prototype.selectChange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        //console.log(val);
        this.titleFloat();
        this.onChange.emit(val);
        // this.nxValueChange.emit(val);
    };
    // when open the select
    // when open the select
    /**
     * @return {?}
     */
    UiFormSelectComponent.prototype.focus = 
    // when open the select
    /**
     * @return {?}
     */
    function () {
        this.isFocus = true;
        this.onFocus.emit();
        this.focusBlurEvent(this.isFocus);
        // when open the page stop page scroll 
        // console.log('select open');
        this.titleFloat();
        // // in every form-stop-scroll class add no-scroll
        // let stopFormScrollBlock = document.body.getElementsByClassName('form-stop-scroll');
        // [].forEach.bind(stopFormScrollBlock,function(itm){
        //   itm.classList.add('all-no-scroll');
        // })();
    };
    //when close the select
    //when close the select
    /**
     * @return {?}
     */
    UiFormSelectComponent.prototype.blur = 
    //when close the select
    /**
     * @return {?}
     */
    function () {
        this.isFocus = false;
        this.onBlur.emit();
        this.focusBlurEvent(this.isFocus);
        // in every form-stop-scroll class add no-scroll
        // let stopFormScrollBlock = document.body.getElementsByClassName('form-stop-scroll');
        // [].forEach.bind(stopFormScrollBlock,function(itm){
        //   itm.classList.remove('all-no-scroll');
        // })();
    };
    //control title float
    //control title float
    /**
     * @return {?}
     */
    UiFormSelectComponent.prototype.titleFloat = 
    //control title float
    /**
     * @return {?}
     */
    function () {
        // console.log('select nxValue',this.nxValue);
        if (this.nxValue === undefined || this.nxValue === null || this.nxValue === '') {
            this.styleTitleFloatNow = '';
        }
        else {
            this.styleTitleFloatNow = ' style-title-floating';
        }
    };
    /**
     * @return {?}
     */
    UiFormSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.titleFloat();
        // this.styleNoSpace = this.isNoSpace ? 'no-space': '';
        this.classDisable = this._isDisable ? 'style-disable' : '';
    };
    UiFormSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-select',
                    template: "<div class=\"select-block\">\n    <div class=\"select-body-block\" [ngClass]=\"[styleTitleFloatNow, classError, classDisable, isShowTitle ? '' : ' style-title-hide']\">\n        <div class=\"select-title nx-formfield__label\">\n          {{selectTitle}}\n        </div>\n        <select name=\"dropdownGroup\" (focus)=\"focus()\" (change)=\"selectChange($event.target.value)\" [(ngModel)]=\"currentValue\" [disabled]=\"isDisable\">\n          <option [value]=\"''\" *ngIf=\"isShowDefaultOption\">{{placeholder}}</option>\n          <option *ngFor=\"let option of selectOption\" [value]=\"option.getValue()\">{{option.getName()}}</option>\n        </select>\n    </div>\n    <span class=\"select-icon\">\n      <img class=\"icon-normal\" src=\"assets/img/icon-arrow-down.svg\">\n      <img class=\"icon-error\" src=\"assets/img/icon-arrow-down-red.svg\">\n      <img class=\"icon-disable\" src=\"assets/img/icon-arrow-down-disable.svg\">\n    </span>\n</div>\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host ::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host :-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield__flexfield,:host ::ng-deep .select-body-block{min-height:30px}:host ::ng-deep .nx-formfield__label-holder{height:99%;top:-30px;padding-top:30px;font-size:1.25rem}:host ::ng-deep .nx-formfield__label{background-color:#fff;width:100%;font-weight:400}:host ::ng-deep .nx-formfield.is-floating .nx-formfield__label{-webkit-transform:translateY(30px) translateZ(.001px);transform:translateY(30px) translateZ(.001px);font-weight:700}:host .select-block{position:relative}:host .select-icon{display:inline-block;position:absolute;bottom:0;right:0;pointer-events:none;z-index:2}:host .select-icon img{width:24px;background-color:#fff}:host .select-icon .icon-normal{display:inline-block}:host .select-icon .icon-error{display:none}:host .select-icon .icon-disable{display:none}:host .style-error .nx-formfield__label{color:#414141}:host .style-error+.select-icon .icon-normal{display:none}:host .style-error+.select-icon .icon-error{display:inline-block}:host .style-error+.select-icon .icon-disable{display:none}:host .style-disable+.select-icon .icon-normal{display:none}:host .style-disable+.select-icon .icon-error{display:none}:host .style-disable+.select-icon .icon-disable{display:inline-block}.select-body-block{position:relative}.select-body-block.style-error select{color:#dc3149;border-bottom-color:#dc3149}.select-body-block.style-disable .select-title{color:#c2c2c2}.select-body-block.style-disable select{color:#c2c2c2;border-bottom-color:#c2c2c2}.select-body-block.style-title-floating .select-title{-webkit-transform:translateY(-25px) translateZ(.001px);transform:translateY(-25px) translateZ(.001px);font-weight:700;font-size:1rem;background-color:transparent}.select-body-block.style-title-hide .select-title{display:none}.select-title{font-size:1.25rem;height:28px;line-height:28px;font-weight:400}select{border:none;background-color:transparent;display:block;outline:0;width:100%;border-bottom:1px solid #414141;border-radius:0;-webkit-appearance:none;-moz-appearance:none;color:#414141;font-size:1.25rem;height:30px;line-height:28px;font-weight:400;padding:0}select::-ms-expand{display:none}option{padding:0}"]
                }] }
    ];
    UiFormSelectComponent.ctorParameters = function () { return []; };
    UiFormSelectComponent.propDecorators = {
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }],
        onChange: [{ type: Output }],
        selectTitle: [{ type: Input }],
        selectOption: [{ type: Input }],
        placeholder: [{ type: Input }],
        isShowTitle: [{ type: Input }],
        isShowDefaultOption: [{ type: Input }],
        isNoSpace: [{ type: Input }],
        isError: [{ type: Input }],
        isErrorChange: [{ type: Output }],
        isDisable: [{ type: Input }],
        onFocus: [{ type: Output, args: ['focus',] }],
        onBlur: [{ type: Output, args: ['blur',] }],
        errorMagInfo: [{ type: Input }]
    };
    return UiFormSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiInformationComponent = /** @class */ (function () {
    function UiInformationComponent(informationService, elementRef, actionService) {
        this.informationService = informationService;
        this.elementRef = elementRef;
        this.actionService = actionService;
        this.isPopupStyle = true; // true: for i is a popup; false: i is a popover .. 
        this.infoBtnType = 'default'; // default => i icon , customize => ng-content let user input 
        this._isShowContent = false;
        this.styleHasArrow = ''; //style has arrow or not
        this._isHasArrow = true;
        this.minSpaceWindowAndContent = 5;
        this._isInfoContentOverlap = false;
        // popup style 
        this.onClick = new EventEmitter();
        // end of popup style
        this.styleShowContent = 'style-hide'; // style for content show or not
        // info pos style
        this.infoLeft = 'auto'; // ngstyle for info box positon left
        this.infoRight = 'auto'; // ngstyle for info box positon right
        // arrow pos style
        this.arrowLeft = 'auto';
        this.arrowRight = 'auto';
        this.arrowTop = '-3px';
        this.styleInfoZIndex = ''; // style for info content z-index : '' / 'style-show-up'
        this.unsubscribe$ = new Subject();
        this._id = v4();
    }
    Object.defineProperty(UiInformationComponent.prototype, "isHasArrow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isHasArrow;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isHasArrow = val;
            this.styleHasArrow = this._isHasArrow ? '' : 'style-hide';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiInformationComponent.prototype, "isShowContent", {
        // @Input() 
        get: 
        // @Input() 
        /**
         * @return {?}
         */
        function () {
            return this._isShowContent;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isShowContent = val;
            if (this._isShowContent) {
                this.informationService.closeOthers(this._id);
            }
            this.styleShowContent = this._isShowContent ? 'style-show' : 'style-hide';
            console.log('set isShowContent');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiInformationComponent.prototype, "containerSelector", {
        get: 
        // parent selector for check info left/right/center
        /**
         * @return {?}
         */
        function () {
            return this._containerSelector;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log('in containerSelector set', value);
            this._containerSelector = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiInformationComponent.prototype, "isInfoContentOverlap", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isInfoContentOverlap;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isInfoContentOverlap = val; // true
            this.styleInfoZIndex = this._isInfoContentOverlap ? 'style-show-up' : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiInformationComponent.prototype.clickPopupInfoBtn = /**
     * @return {?}
     */
    function () {
        this.onClick.emit();
    };
    /**
     * @return {?}
     */
    UiInformationComponent.prototype.clickBtn = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isShowContent = !this.isShowContent;
        //this.isShowContentChange.emit(this._isShowContent);
        if (this.isShowContent) {
            console.log('click btn');
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.caculateContentPos();
            }));
            this.informationService.closeOthers(this._id);
        }
    };
    // if you click anywhere, then close info
    // if you click anywhere, then close info
    /**
     * @param {?} event
     * @return {?}
     */
    UiInformationComponent.prototype.documentClick = 
    // if you click anywhere, then close info
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // click event from action
        this.actionService.onActionClick()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) {
            if (!_this.elementRef.nativeElement.contains(resp.event.target)) {
                _this.closeBtn();
                // this.changeDector.detectChanges();
            }
        }));
        // click event with no action
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.closeBtn();
        }
    };
    // renderContentShow(){
    //   setTimeout(()=>{
    //     this.caculateContentPos();
    //   })
    // }
    // decide the content show on center, left, or right 
    // if content need to show on based on window 
    // renderContentShow(){
    //   setTimeout(()=>{
    //     this.caculateContentPos();
    //   })
    // }
    // decide the content show on center, left, or right 
    // if content need to show on based on window 
    /**
     * @return {?}
     */
    UiInformationComponent.prototype._caculateContentFitwindow = 
    // renderContentShow(){
    //   setTimeout(()=>{
    //     this.caculateContentPos();
    //   })
    // }
    // decide the content show on center, left, or right 
    // if content need to show on based on window 
    /**
     * @return {?}
     */
    function () {
        this.infoLeft = -this._btnInfo.x + this.minSpaceWindowAndContent + 'px';
        this.infoRight = 'auto';
        this.arrowLeft = this._btnInfo.x - this.minSpaceWindowAndContent + 3 + 'px';
        this.arrowRight = 'auto';
        console.log('_caculateContentFitwindow', this.infoLeft, this.arrowLeft);
    };
    /**
     * @param {?} infoLeft
     * @param {?} infoRight
     * @param {?} arrowLeft
     * @param {?} arrowRight
     * @return {?}
     */
    UiInformationComponent.prototype._setInfoPosStyle = /**
     * @param {?} infoLeft
     * @param {?} infoRight
     * @param {?} arrowLeft
     * @param {?} arrowRight
     * @return {?}
     */
    function (infoLeft, infoRight, arrowLeft, arrowRight) {
        this.infoLeft = infoLeft;
        this.infoRight = infoRight;
        this.arrowLeft = arrowLeft;
        this.arrowRight = arrowRight;
    };
    // caculate content show pos (if bottom cannot show, then scroll the content)
    // caculate content show pos (if bottom cannot show, then scroll the content)
    /**
     * @return {?}
     */
    UiInformationComponent.prototype.caculateContentPos = 
    // caculate content show pos (if bottom cannot show, then scroll the content)
    /**
     * @return {?}
     */
    function () {
        console.log('containerSelector', this.containerSelector);
        /** @type {?} */
        var containerWidth = 0;
        /** @type {?} */
        var containerHeight = 0;
        // if conatiner is not window, then caculate the container dist between window and container
        /** @type {?} */
        var distWindowAndContainerTop = 0;
        /** @type {?} */
        var distWindowAndContainerLeft = 0;
        /** @type {?} */
        var distWindowAndContainerRight = 0;
        /** @type {?} */
        var distWindowAndContainerBottom = 0;
        if (this.containerSelector != undefined) {
            // if(this.containerSelector.getBoundingClientRect()==undefined){
            //   this.containerSelector = this.containerSelector.elementRef;
            //   console.log('in container undefined');
            // }
            /** @type {?} */
            var containerInfo = this.containerSelector.getBoundingClientRect();
            containerWidth = containerInfo.width; //offsetWidth
            containerHeight = containerInfo.height; //offsetHeight
            console.log('containerInfo', containerInfo);
            console.log('containerInfo containerWidth', containerWidth);
            // get dist window and container
            distWindowAndContainerTop = containerInfo.top;
            distWindowAndContainerLeft = containerInfo.left;
            distWindowAndContainerRight = window.innerWidth - distWindowAndContainerLeft - this.containerSelector.offsetWidth;
            distWindowAndContainerBottom = window.innerHeight - distWindowAndContainerTop - this.containerSelector.offsetHeight;
        }
        else {
            // get window width and height
            containerWidth = window.innerWidth;
            containerHeight = window.innerHeight;
            console.log('containerWidth', containerWidth);
            console.log('containerHeight', containerHeight);
        }
        // get btn pos
        //console.log('infoBtn', this.infoBtn);
        this._btnInfo = this.infoBtn.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var triangleSize = 5;
        // triangle size of content box;
        /** @type {?} */
        var arrowWidth = this.infoArrow.nativeElement.offsetWidth;
        // for arrow space because of rotate 
        //console.log('arrowWidth', arrowWidth);
        //console.log('this _btnInfo',this._btnInfo);
        // get btn distance with window
        /** @type {?} */
        var btnWidth = this._btnInfo.width;
        /** @type {?} */
        var btnHeight = this._btnInfo.height;
        /** @type {?} */
        var btnDistLeft = this._btnInfo.x - distWindowAndContainerLeft + btnWidth / 2;
        console.log('this._btnInfo.x', this._btnInfo.x, 'distWindowAndContainerLeft', distWindowAndContainerLeft, 'btnWidth', btnWidth);
        console.log('btnDistLeft', btnDistLeft);
        /** @type {?} */
        var btnDistTop = this._btnInfo.y - distWindowAndContainerTop;
        /** @type {?} */
        var btnDistRight = containerWidth - btnDistLeft;
        console.log('containerWidth', containerWidth, 'btnDistLeft', btnDistLeft);
        /** @type {?} */
        var btnDistBtm = containerHeight - btnDistTop - btnHeight - triangleSize;
        console.log('btnDistBtm', btnDistBtm, 'containerHeight', containerHeight, 'btnDistTop', btnDistTop, 'btnHeight', btnHeight, 'triangleSize', triangleSize, 'this._btnInfo.y', this._btnInfo.y, 'distWindowAndContainerTop', distWindowAndContainerTop);
        // get info box size
        console.log('infoContent', this.infoContent);
        this._contentInfo = this.infoContent.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var contentWidth = this.infoContent.nativeElement.offsetWidth;
        /** @type {?} */
        var contentHeight = this.infoContent.nativeElement.offsetHeight;
        console.log('this _contentInfo', this._contentInfo, 'contentWidth', contentWidth, 'contentHeight', contentHeight);
        // caculate if content show on the btm, if the space is not enough
        if (btnDistBtm < contentHeight) {
            // need to scroll
            /** @type {?} */
            var scrollContent = void 0;
            console.log('scrollContentSelector', this.scrollContentSelector);
            if (this.scrollContentSelector != undefined) {
                scrollContent = this.scrollContentSelector;
            }
            else {
                scrollContent = document.body;
            } // end: else
            console.log('scrollContent', scrollContent);
            //let move =  scrollContent.scrollTop + contentHeight +  triangleSize + btnHeight; 
            /** @type {?} */
            var move = scrollContent.scrollTop + btnDistTop;
            //let move =  btnDistTop; 
            scrollContent.scrollTo({ top: move, behavior: "smooth" });
            console.log('move', move);
        } // end of if
        console.log('btnDistLeft', btnDistLeft, 'contentWidth/2', contentWidth / 2, 'btnDistRight', btnDistRight);
        if (btnDistLeft >= (contentWidth / 2)) {
            if (btnDistRight >= (contentWidth / 2)) {
                // content on center of btn
                this._setInfoPosStyle(-(contentWidth / 2) + 'px', 'auto', (contentWidth / 2) + (arrowWidth / 2) - 3 + 'px' // 3 for little position move
                , 'auto');
                // this.infoLeft =  -(contentWidth/2) + 'px';
                // this.infoRight = 'auto';
                // this.arrowLeft = (contentWidth/2) + (arrowWidth/2) - 3 + 'px'; // 3 for little position move
                // this.arrowRight = 'auto';
                // console.log('on center;', 'infoLeft', this.infoLeft, 'infoRight', this.infoRight);
            }
            else {
                //console.log('1');
                if (contentWidth <= btnDistLeft && window.innerWidth > 480) {
                    // content on right of btn
                    this._setInfoPosStyle('auto', 0 + 'px', 'auto', -(arrowWidth / 2) + (btnWidth / 2) + 'px');
                    // this.infoLeft = 'auto';
                    // this.infoRight = 0 + 'px';
                    // this.arrowLeft = 'auto';
                    // this.arrowRight = -(arrowWidth/2) + (btnWidth/2) + 'px';  
                    // console.log('on right',btnDistRight, 'infoLeft', this.infoLeft, 'infoRight', this.infoRight);
                }
                else {
                    //console.log('1-1');
                    // content on window of center
                    this._caculateContentFitwindow();
                }
            }
        } // end of if
        else {
            console.log('2');
            if (contentWidth <= btnDistRight && window.innerWidth > 480) {
                // content on left of btn
                this.infoLeft = 0 + 'px';
                this.infoRight = 'auto';
                this.arrowLeft = ((btnWidth / 2) - (arrowWidth / 2)) + 'px';
                this.arrowRight = 'auto';
                console.log('on left', 'infoLeft', this.infoLeft, 'infoRight', this.infoRight);
            }
            else {
                console.log('2-1');
                //content on window of center
                this._caculateContentFitwindow();
            }
        } // end of else
    };
    // close the info
    // close the info
    /**
     * @return {?}
     */
    UiInformationComponent.prototype.closeBtn = 
    // close the info
    /**
     * @return {?}
     */
    function () {
        this._isShowContent = false;
        this.styleShowContent = 'style-hide';
    };
    /**
     * @return {?}
     */
    UiInformationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.informationService.getCloseAction()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            console.log('_id:', _this._id, 'id', id);
            if (_this._id !== id) {
                _this.closeBtn();
            }
        }));
        this.styleInfoZIndex = this._isInfoContentOverlap ? 'style-show-up' : '';
    };
    /**
     * @return {?}
     */
    UiInformationComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        console.log('ngAfterViewInit');
    };
    /**
     * @return {?}
     */
    UiInformationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    UiInformationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-information',
                    template: "<div class=\"info-block\" [ngClass]=\"styleInfoZIndex\">\n\n  <ng-container *ngIf=\"!isPopupStyle; else templatePopup\">\n    <!-- btn -->\n    <div #infoBtn [ngSwitch]=\"infoBtnType\" class=\"info-btn-block\" (click)=\"clickBtn()\">\n      <div *ngSwitchCase=\"'default'\">\n        <nx-icon class=\"icon-i\" name=\"info-circle\" fill=\"false\" outline=\"false\" size=\"auto\"></nx-icon>\n      </div>\n      <div *ngSwitchCase=\"'customize'\">\n        <ng-content select=\"[btn]\"></ng-content>\n      </div>\n    </div>\n    <!-- end of btn -->\n  \n    <div #infoContent class=\"info-content-block\" [ngClass]=\"styleShowContent\" [ngStyle]=\"{'left': infoLeft, 'right': infoRight}\" [style.max-width]=\"maxWidth+'px'\">\n      <div #infoArrow class=\"info-arrow\" [ngClass]=\"styleHasArrow\" [ngStyle]=\"{'left': arrowLeft, 'top': arrowTop, 'right': arrowRight}\"></div>\n      <div class=\"info-close-btn\" (click)=\"closeBtn()\"></div>\n      <div class=\"info-content-detail-block stop-scroll-block\">\n        <ng-content select=\"[info-content]\"></ng-content>\n      </div>\n    </div>\n    <!-- end of content -->\n  </ng-container>\n  <ng-template #templatePopup>\n    <div class=\"info-btn-block\" (click)=\"clickPopupInfoBtn()\">\n        <nx-icon class=\"icon-i\" name=\"info-circle\" fill=\"false\" outline=\"false\" size=\"auto\"></nx-icon>\n    </div>\n  </ng-template>\n  \n</div>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.info-block{position:relative;display:inline-block;min-width:20px}.info-block.style-show-up .info-content-block.style-show{z-index:99}:host ::ng-deep .info-btn-block{display:inline-block}:host ::ng-deep .info-btn-block .nx-icon--info-circle.icon-i{display:inline-block;width:20px;height:20px;border:none;font-size:20px;color:#007ab3;background-color:transparent;line-height:1em}.info-content-block{position:absolute;top:calc(20px + 5px);display:flex;background-color:#fff;padding:15px 25px;flex-wrap:wrap;box-shadow:0 8px 24px 0 rgba(65,65,65,.35);border-radius:5px;text-align:left;color:#414141}.info-content-block .info-content-detail-block{max-height:600px;overflow-y:auto;min-height:100px;display:inline-block;width:100%;overflow-x:hidden}.info-content-block.style-hide{opacity:0;visibility:hidden;z-index:-99;width:0;height:0;min-height:0;top:0;position:fixed}.info-content-block.style-show{opacity:1;z-index:80;visibility:visible}.info-content-block .info-arrow{width:13px;height:13px;background-color:#fff;position:absolute;top:-3px;left:50%;-webkit-transform:rotate(45deg);transform:rotate(45deg);z-index:10;box-shadow:-3px -3px 10px -1px rgba(65,65,65,.1)}.info-content-block .info-arrow.style-hide{opacity:0}.info-content-block .info-close-btn{width:40px;height:40px;font-size:0;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h50v50H0z'/%3E%3Cg stroke='%239B9B9B' stroke-linecap='round' stroke-width='2'%3E%3Cpath d='M14.898 15.317L35.102 35.52M36.112 14.898L15.909 35.102'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\");background-size:cover;background-repeat:no-repeat;position:absolute;top:10px;right:10px;z-index:2}"]
                }] }
    ];
    UiInformationComponent.ctorParameters = function () { return [
        { type: UiInformationService },
        { type: ElementRef },
        { type: ActionService }
    ]; };
    UiInformationComponent.propDecorators = {
        isPopupStyle: [{ type: Input }],
        infoBtnType: [{ type: Input }],
        isHasArrow: [{ type: Input }],
        scrollContentSelector: [{ type: Input }],
        containerSelector: [{ type: Input }],
        minSpaceWindowAndContent: [{ type: Input }],
        maxWidth: [{ type: Input }],
        isInfoContentOverlap: [{ type: Input }],
        onClick: [{ type: Output }],
        infoBtn: [{ type: ViewChild, args: ['infoBtn',] }],
        infoContent: [{ type: ViewChild, args: ['infoContent',] }],
        infoArrow: [{ type: ViewChild, args: ['infoArrow',] }],
        documentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return UiInformationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiInfoText1Component = /** @class */ (function () {
    function UiInfoText1Component() {
        this.isImgShow = true;
    }
    /**
     * @return {?}
     */
    UiInfoText1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiInfoText1Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-info-text1',
                    template: "<div class=\"info-unit-block\">\n  <div class=\"title-block\">\n      <i class=\"img-block\">\n          <img *ngIf=\"imgSrc\" [src]=\"imgSrc\">\n      </i>\n      <div class=\"title\">\n        <ng-content select=\"[textType=title]\"></ng-content>\n      </div>\n  </div>\n  <div class=\"text-block\">\n      <p>\n        <ng-content select=\"[textType=text]\"></ng-content>\n      </p>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.info-unit-block .title-block{display:flex;align-items:center;margin-bottom:0;line-height:28px}.info-unit-block .title-block .img-block{max-width:20px;max-height:20px;width:100%;margin-right:10px;display:flex;align-items:center}.info-unit-block .title-block .img-block img{width:100%;vertical-align:middle}.info-unit-block .title-block .title{font-size:.875rem;line-height:28px}.info-unit-block .text-block{display:block;line-height:28px}.info-unit-block .text-block p{padding:0 0 0 30px;margin:0;font-size:1rem;font-weight:700;box-sizing:border-box;line-height:28px;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;word-break:break-word}@media (max-width:767px){.info-unit-block{display:flex;align-items:flex-start}.info-unit-block .title-block{max-width:105px;width:100%;flex-grow:0;flex-shrink:0;align-items:center}.info-unit-block .title-block .title{max-width:75px;width:100%}.info-unit-block .title-block .text-block{max-width:calc(100% - 105px);width:100%}.info-unit-block .title-block .text-block p{padding-left:10px}}@media screen and (min-width:1025px){.info-unit-block .title-block .img-block{max-width:2vw;max-height:2vw}.info-unit-block .text-block p{padding-left:3vw}}"]
                }] }
    ];
    UiInfoText1Component.ctorParameters = function () { return []; };
    UiInfoText1Component.propDecorators = {
        imgSrc: [{ type: Input }],
        title: [{ type: Input }],
        text: [{ type: Input }],
        isImgShow: [{ type: Input }]
    };
    return UiInfoText1Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiInfoText2Component = /** @class */ (function () {
    function UiInfoText2Component() {
        this.isImgShow = true;
        this.textColor = '';
    }
    /**
     * @return {?}
     */
    UiInfoText2Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiInfoText2Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-info-text2',
                    template: "<div class=\"info-unit-block\">\n  <div class=\"title-block\">\n      <div class=\"title\">\n        <ng-content select=\"[textType=title]\"></ng-content>\n        <span class=\"tip-descrp\"><ng-content select=\"[textType=tip]\"></ng-content></span>\n      </div>\n  </div>\n  <div class=\"text-block\" [ngClass]=\" textColor == '#003781' ? 'textBlue' : '' \">\n      <p>\n        <ng-content select=\"[textType=text]\"></ng-content>\n      </p>\n  </div>\n</div>\n    ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.info-unit-block .title-block{display:flex;align-items:center;margin-bottom:5px}.info-unit-block .title-block .title{font-size:.875rem;font-weight:700;line-height:normal}.info-unit-block .title-block .title .tip-descrp{font-size:.875rem;color:#414141;margin-left:6px;font-weight:300;display:inline-block}.info-unit-block .text-block{display:block}.info-unit-block .text-block p{padding:0;margin:0;font-size:1.25rem;font-weight:300;line-height:normal;box-sizing:border-box;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;word-break:break-word}"]
                }] }
    ];
    UiInfoText2Component.ctorParameters = function () { return []; };
    UiInfoText2Component.propDecorators = {
        imgSrc: [{ type: Input }],
        title: [{ type: Input }],
        text: [{ type: Input }],
        isImgShow: [{ type: Input }],
        textColor: [{ type: Input }]
    };
    return UiInfoText2Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiInfiniteScrollComponent = /** @class */ (function () {
    function UiInfiniteScrollComponent(dataSyncService, element, zone) {
        this.dataSyncService = dataSyncService;
        this.element = element;
        this.zone = zone;
        this.loadingState = false;
        this.refreshingState = false;
        this.isTouchBind = true;
        this.panState = {
            enabled: false,
            distance: 0,
            startingPositionY: 0,
            currentPosition: 0
        };
        this.refresherClass = '';
        this._loadingFinish = true;
        this._refreshFinish = true;
        this.unsubscribe$ = new Subject();
        this.isRefreshing = false;
        this.refresherStyle = {};
        this.contentStyle = {};
        this.loadingStyle = {};
        this.touch_func = null;
        this._isScrollToPageTop = 0;
        this.isScrollToPageTopChange = new EventEmitter();
        this.syncFunction = [];
        this.distanceToRefresh = 55;
        this.resistance = 2;
        this.lazyLoading = false; // need lazy loading or not
        this.alwaysCallback = false;
        this.translateText = 'Loading....';
        this.loadingFinishChange = new EventEmitter();
        this.refreshFinishChange = new EventEmitter();
        this.loadingCallback = new EventEmitter();
        this.refreshCallback = new EventEmitter();
        this.infiniteScrollDistance = 2;
        this.infiniteScrollUpDistance = 1; // 1.5;
        this.scrolledUp = new EventEmitter();
        this.isScrolling = false;
        this._setContentPan = (/**
         * @return {?}
         */
        function () {
            this.contentStyle['transform'] = this.contentStyle['webkitTransform'] = "translate3d(0," + this.panState.distance + "px,0)";
            this.refresherStyle['transform'] = this.contentStyle['webkitTransform'] = "translate3d( 0," + (this.panState.distance - this.refresherEle.nativeElement.offsetHeight) + "px, 0 )";
            this.refresherStyle['opacity'] = '1';
            this.refresherStyle['z-index'] = '30';
        });
    }
    Object.defineProperty(UiInfiniteScrollComponent.prototype, "isScrollToPageTop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isScrollToPageTop;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isScrollToPageTop = val;
            this.scrollTopToPos(this._isScrollToPageTop);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} pos
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.scrollTopToPos = /**
     * @param {?} pos
     * @return {?}
     */
    function (pos) {
        this.scrollEle.nativeElement.scrollTop = pos;
        this.isScrollToPageTopChange.emit(pos);
    };
    Object.defineProperty(UiInfiniteScrollComponent.prototype, "loadingFinish", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loadingFinish;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log("infinite-scroll set loadingFinish:", value);
            if (this.loadingState && !this._loadingFinish && value) {
                this.loadingState = false;
                this.loadingStyle['opacity'] = '0';
            }
            this._loadingFinish = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiInfiniteScrollComponent.prototype, "refreshFinish", {
        get: /**
         * @return {?}
         */
        function () {
            return this._refreshFinish;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log("infinite-scroll set refreshFinish:", value);
            if (this.refreshingState && !this._refreshFinish && value) {
                this.doreset();
                this.refreshingState = false;
            }
            this._refreshFinish = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.lazyLoading)
            this.setup();
        this.touch_func = this.touch.bind(this);
        /** @type {?} */
        var touch_ele = this.contentEle.nativeElement;
        touch_ele.addEventListener('touchstart', this.touch_func, false);
        touch_ele.addEventListener('touchmove', this.touch_func, false);
        touch_ele.addEventListener('touchend', this.touch_func, false);
        // this.contentEle.nativeElement.addEventListener('touchstart', this.touch.bind(this), false);
        // this.contentEle.nativeElement.addEventListener('touchmove', this.touch.bind(this), false);
        // this.contentEle.nativeElement.addEventListener('touchend', this.touch.bind(this), false);
        this.scrollEle.nativeElement.addEventListener('scroll', this.scroll.bind(this), false);
    };
    /**
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.destroyScroller();
    };
    /**
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.resetScroller = /**
     * @return {?}
     */
    function () {
        this.destroyScroller();
        if (this.lazyLoading)
            this.setup();
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.scroll = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (this.isScrolling) {
            return;
        }
        this.isScrolling = true;
        // console.warn('scroll top = ', this.scrollEle.nativeElement.scrollTop);
        /** @type {?} */
        var touch_ele = this.contentEle.nativeElement;
        if (this.scrollEle.nativeElement.scrollTop <= 0 && !this.isTouchBind) {
            console.warn('scroll top = 0');
            touch_ele.addEventListener('touchstart', this.touch_func, false);
            touch_ele.addEventListener('touchmove', this.touch_func, false);
            touch_ele.addEventListener('touchend', this.touch_func, false);
            this.isTouchBind = true;
        }
        else if (this.scrollEle.nativeElement.scrollTop > 0 && this.isTouchBind) {
            console.warn('scroll else');
            // if (x.removeEventListener) {
            touch_ele.removeEventListener('touchstart', this.touch_func, false);
            touch_ele.removeEventListener('touchmove', this.touch_func, false);
            touch_ele.removeEventListener('touchend', this.touch_func, false);
            this.isTouchBind = false;
            // } else if (x.detachEvent) {
            //   x.detachEvent('touchmove', this.touch.bind(this), false);
            // }
        }
        this.isScrolling = false;
    }; // end scroll
    // end scroll
    /**
     * @param {?} e
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.touch = 
    // end scroll
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        switch (e.type) {
            case 'touchstart':
                if (e.changedTouches.length > 1) {
                    e.preventDefault();
                    return;
                }
                this.panState.currentPosition = e.changedTouches[0].clientY;
                this.panstart();
                break;
            case 'touchmove':
                console.warn('touchmove');
                /** @type {?} */
                var direction = this.panState.currentPosition < e.changedTouches[0].clientY ? 'down' : 'up';
                /** @type {?} */
                var distance = Math.abs(this.panState.currentPosition - e.changedTouches[0].clientY);
                if (direction == 'down')
                    this.pandown({ distance: distance });
                else
                    this.panup({ distance: distance });
                break;
            case 'touchend':
                if (e.changedTouches.length == 1)
                    this.panend();
                break;
        }
    };
    /**
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.panstart = /**
     * @return {?}
     */
    function () {
        this.panState.startingPositionY = this.scrollEle.nativeElement.scrollTop;
        if (this.panState.startingPositionY === 0) {
            this.panState.enabled = true;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.panup = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.panState.enabled || this.panState.distance === 0) {
            return;
        }
        if (this.panState.distance < e.distance / this.resistance) {
            this.panState.distance = 0;
        }
        else {
            this.panState.distance = e.distance / this.resistance;
        }
        this._setContentPan();
        // _setBodyClass();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.pandown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.panState.enabled) {
            return;
        }
        this.panState.distance = e.distance / this.resistance;
        if (this.panState.distance >= this.distanceToRefresh) {
            this.isRefreshing = true;
        }
        else {
            this.isRefreshing = false;
        }
        this._setContentPan();
    };
    /**
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.panend = /**
     * @return {?}
     */
    function () {
        if (!this.panState.enabled) {
            return;
        }
        this.contentStyle['transform'] = this.contentStyle['webkitTransform'] = '';
        this.refresherStyle['transform'] = this.contentStyle['webkitTransform'] = '';
        delete this.refresherStyle['opacity'];
        delete this.refresherStyle['z-index'];
        if (this.isRefreshing) {
            this._refreshFinish = false;
            this.refreshFinishChange.emit(false);
            this.refreshingState = true;
            this.dorefresh();
        }
        else
            this.doreset();
        this.panState.distance = 0;
        this.panState.enabled = false;
    };
    /**
     * @private
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.dorefresh = /**
     * @private
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.refresherClass = 'refreshing';
                        if (!(this.syncFunction.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dataSyncService.syncFunc(this.syncFunction, true)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.refreshCallback.emit();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.doreset = /**
     * @private
     * @return {?}
     */
    function () {
        console.log("do reset");
        /** @type {?} */
        var _this = this;
        _this.refresherClass = 'refresher-reset';
        /** @type {?} */
        var bodyClassRemove = (/**
         * @return {?}
         */
        function () {
            _this.refresherClass = '';
            _this.isRefreshing = false;
            _this.scrollEle.nativeElement.removeEventListener('transitionend', bodyClassRemove, false);
        });
        _this.scrollEle.nativeElement.addEventListener('transitionend', bodyClassRemove, false);
    };
    /**
     * @private
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.setup = /**
     * @private
     * @return {?}
     */
    function () {
        var _this_1 = this;
        if (this.hasWindowDefined()) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this_1._scroller = _this_1.createScroller({
                    upDistance: _this_1.infiniteScrollUpDistance,
                    downDistance: _this_1.infiniteScrollDistance,
                    alwaysCallback: _this_1.alwaysCallback,
                    element: _this_1.scrollEle
                })
                    .pipe(takeUntil(_this_1.unsubscribe$))
                    .subscribe((/**
                 * @param {?} payload
                 * @return {?}
                 */
                function (payload) { return _this_1.zone.run((/**
                 * @return {?}
                 */
                function () { return _this_1.handleOnScroll(payload); })); }));
            }));
        }
    };
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.handleOnScroll = /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var type = _a.type, payload = _a.payload;
        console.log('handle scroll:', type, payload);
        if (payload.currentScrollPosition < 0) {
            return;
        }
        switch (type) {
            case 'DOWN':
                this.loadingState = true;
                this._loadingFinish = false;
                this.loadingFinishChange.emit(false);
                this.loadingStyle['opacity'] = '1';
                return this.loadingCallback.emit(payload);
            case 'UP':
                return this.scrolledUp.emit(payload);
            default:
                return;
        }
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.createScroller = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this_1 = this;
        var startWithTotal = this.calculatePoints(config.element).totalToScroll;
        this.scrollState = {
            lastScrollPosition: 0,
            lastTotalToScroll: 0,
            totalToScroll: startWithTotal,
            triggered: {
                down: 0,
                up: 0
            }
        };
        /** @type {?} */
        var distance = {
            up: config.upDistance,
            down: config.downDistance
        };
        return this.attachScrollEvent(config.element).pipe(mergeMap((/**
         * @return {?}
         */
        function () { return of(_this_1.calculatePoints(config.element)); })), map((/**
         * @param {?} positionStats
         * @return {?}
         */
        function (positionStats) { return _this_1.toInfiniteScrollParams(_this_1.scrollState.lastScrollPosition, positionStats, distance); })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var stats = _a.stats, fire = _a.fire, scrollDown = _a.scrollDown;
            return _this_1.updateScrollState(_this_1.scrollState, stats.scrolled, stats.totalToScroll);
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var fire = _a.fire, scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
            return _this_1.shouldTriggerEvents(config.alwaysCallback, fire, _this_1.isTriggeredScroll(totalToScroll, _this_1.scrollState, scrollDown));
        })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
            _this_1.updateTriggeredFlag(totalToScroll, _this_1.scrollState, scrollDown);
        })), map(this.toInfiniteScrollAction));
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.attachScrollEvent = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var ele = element.nativeElement ? element.nativeElement : element;
        return fromEvent(ele, 'scroll');
    };
    /**
     * @private
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.hasWindowDefined = /**
     * @private
     * @return {?}
     */
    function () {
        return typeof window !== 'undefined';
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.calculatePoints = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element = element.nativeElement ? element.nativeElement : element;
        /** @type {?} */
        var height = this.getElementHeight(element);
        /** @type {?} */
        var scrolled = element.scrollTop;
        /** @type {?} */
        var totalToScroll = element.scrollHeight - this.getElementHeight(this.loaderEle);
        return { height: height, scrolled: scrolled, totalToScroll: totalToScroll };
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.getElementHeight = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element)
            return element.offsetHeight;
        else
            return 0;
    };
    /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} stats
     * @param {?} distance
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.toInfiniteScrollParams = /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} stats
     * @param {?} distance
     * @return {?}
     */
    function (lastScrollPosition, stats, distance) {
        var _a = this.getScrollStats(lastScrollPosition, stats, distance), scrollDown = _a.scrollDown, fire = _a.fire;
        return {
            scrollDown: scrollDown, fire: fire, stats: stats
        };
    };
    /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} stats
     * @param {?} distance
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.getScrollStats = /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} stats
     * @param {?} distance
     * @return {?}
     */
    function (lastScrollPosition, stats, distance) {
        /** @type {?} */
        var scrollDown = this.isScrollingDownwards(lastScrollPosition, stats);
        return {
            fire: this.shouldFireScrollEvent(stats, distance, scrollDown),
            scrollDown: scrollDown
        };
    };
    /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} container
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.isScrollingDownwards = /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} container
     * @return {?}
     */
    function (lastScrollPosition, container) {
        return lastScrollPosition < container.scrolled;
    };
    /**
     * @private
     * @param {?} container
     * @param {?} distance
     * @param {?} scrollingDown
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.shouldFireScrollEvent = /**
     * @private
     * @param {?} container
     * @param {?} distance
     * @param {?} scrollingDown
     * @return {?}
     */
    function (container, distance, scrollingDown) {
        /** @type {?} */
        var remaining;
        /** @type {?} */
        var containerBreakpoint;
        if (container.totalToScroll <= 0) {
            return false;
        }
        /** @type {?} */
        var scrolledUntilNow = container.height + container.scrolled;
        if (scrollingDown) {
            remaining =
                (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
            containerBreakpoint = distance.down / 10;
        }
        else {
            /** @type {?} */
            var totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
            remaining = container.scrolled / totalHiddenContentHeight;
            containerBreakpoint = distance.up / 10;
        }
        /** @type {?} */
        var shouldFireEvent = remaining <= containerBreakpoint;
        return shouldFireEvent;
    };
    /**
     * @private
     * @param {?} state
     * @param {?} scrolledUntilNow
     * @param {?} totalToScroll
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.updateScrollState = /**
     * @private
     * @param {?} state
     * @param {?} scrolledUntilNow
     * @param {?} totalToScroll
     * @return {?}
     */
    function (state$$1, scrolledUntilNow, totalToScroll) {
        state$$1.lastScrollPosition = scrolledUntilNow;
        if (state$$1.lastTotalToScroll !== totalToScroll) {
            state$$1.lastTotalToScroll = state$$1.totalToScroll;
            state$$1.totalToScroll = totalToScroll;
        }
    };
    /**
     * @private
     * @param {?} alwaysCallback
     * @param {?} shouldFireScrollEvent
     * @param {?} isTriggeredCurrentTotal
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.shouldTriggerEvents = /**
     * @private
     * @param {?} alwaysCallback
     * @param {?} shouldFireScrollEvent
     * @param {?} isTriggeredCurrentTotal
     * @return {?}
     */
    function (alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
        return (alwaysCallback || shouldFireScrollEvent) && !isTriggeredCurrentTotal;
    };
    /**
     * @private
     * @param {?} totalToScroll
     * @param {?} scrollState
     * @param {?} isScrollingDown
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.isTriggeredScroll = /**
     * @private
     * @param {?} totalToScroll
     * @param {?} scrollState
     * @param {?} isScrollingDown
     * @return {?}
     */
    function (totalToScroll, scrollState, isScrollingDown) {
        return isScrollingDown
            ? scrollState.triggered.down === totalToScroll
            : scrollState.triggered.up === totalToScroll;
    };
    /**
     * @private
     * @param {?} scroll
     * @param {?} state
     * @param {?} isScrollingDown
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.updateTriggeredFlag = /**
     * @private
     * @param {?} scroll
     * @param {?} state
     * @param {?} isScrollingDown
     * @return {?}
     */
    function (scroll, state$$1, isScrollingDown) {
        if (isScrollingDown) {
            state$$1.triggered.down = scroll;
        }
        else {
            state$$1.triggered.up = scroll;
        }
    };
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.toInfiniteScrollAction = /**
     * @private
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var scrollDown = response.scrollDown, currentScrollPosition = response.stats.scrolled;
        return {
            type: scrollDown ? 'DOWN' : 'UP',
            payload: {
                currentScrollPosition: currentScrollPosition
            }
        };
    };
    /**
     * @private
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.destroyScroller = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._scroller) {
            this._scroller.unsubscribe();
        }
    };
    UiInfiniteScrollComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-infinite-scroll',
                    template: "<div class=\"infiniti-scroll stop-scroll-block\" #infinitiScroll [ngClass]=\"refresherClass\">\n  <div class=\"refresher\" #refresher [ngStyle]=\"refresherStyle\">\n    <ng-container *ngIf=\"isRefreshing\">\n      <app-ui-refresh-icon></app-ui-refresh-icon>\n    </ng-container>\n  </div>\n  <div class=\"refresh-content\" #refreshContent [ngStyle]=\"contentStyle\">\n    <div class=\"scroll-content stop-scroll-block\" #content>\n      <ng-content></ng-content>\n\n      <div #loader *ngIf=\"lazyLoading &&loadingState && !loadingFinish\" class=\"loader\" [ngStyle]=\"loadingStyle\">\n        <app-ui-refresh-icon></app-ui-refresh-icon>\n        <p class=\"loading-txt\">{{translateText}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.infiniti-scroll{height:100%;overflow:hidden;overflow-y:auto;position:relative}.refresher{width:100%;height:110px;position:absolute;top:0;left:0;opacity:0;z-index:-1;text-align:center}.refresh-content{z-index:20;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:transparent;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.scroll-content{position:relative}.loader{width:100%;height:100px;padding-top:10px;text-align:center;transition:.25s;opacity:0}.loader app-ui-refresh-icon{display:block}.loader app-ui-refresh-icon ::ng-deep .ui-refresh-spinner{top:0}.loader .loading-txt{display:block;margin:10px 0 0;width:100%;font-size:.875rem}.refresher-reset .refersher{transition:.25s}.refresher-reset .refresh-content{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:.5s}.refreshing .refresher{transition:transform .25s;transition:transform .25s,-webkit-transform .25s;opacity:1;z-index:10}.refreshing .refresh-content{-webkit-transform:translate3d(0,110px,0);transform:translate3d(0,110px,0);transition:.25s}"]
                }] }
    ];
    UiInfiniteScrollComponent.ctorParameters = function () { return [
        { type: DataSyncService },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    UiInfiniteScrollComponent.propDecorators = {
        isScrollToPageTop: [{ type: Input }],
        isScrollToPageTopChange: [{ type: Output }],
        syncFunction: [{ type: Input }],
        distanceToRefresh: [{ type: Input }],
        resistance: [{ type: Input }],
        lazyLoading: [{ type: Input }],
        alwaysCallback: [{ type: Input }],
        translateText: [{ type: Input }],
        loadingFinish: [{ type: Input }],
        refreshFinish: [{ type: Input }],
        loadingFinishChange: [{ type: Output }],
        refreshFinishChange: [{ type: Output }],
        loadingCallback: [{ type: Output }],
        refreshCallback: [{ type: Output }],
        infiniteScrollDistance: [{ type: Input }],
        infiniteScrollUpDistance: [{ type: Input }],
        scrolledUp: [{ type: Output }],
        scrollEle: [{ type: ViewChild, args: ['infinitiScroll',] }],
        refresherEle: [{ type: ViewChild, args: ['refresher',] }],
        contentEle: [{ type: ViewChild, args: ['refreshContent',] }],
        loaderEle: [{ type: ViewChild, args: ['loader',] }]
    };
    return UiInfiniteScrollComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiItemSlidingComponent = /** @class */ (function () {
    function UiItemSlidingComponent(elementRef) {
        this.elementRef = elementRef;
        this.closeSlidingItems();
    }
    /**
     * @return {?}
     */
    UiItemSlidingComponent.prototype.closeSlidingItems = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                item = this.elementRef.nativeElement.querySelector('ion-item-sliding');
                if (item && item.closeOpened) {
                    return [2 /*return*/, item.closeOpened()];
                }
                return [2 /*return*/, false];
            });
        });
    };
    /**
     * @return {?}
     */
    UiItemSlidingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.closeSlidingItems();
    };
    UiItemSlidingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-item-sliding',
                    template: "<div class=\"space-ui-element list-block\">\n  <ion-list #slidingList>\n    <ng-content></ng-content>\n  </ion-list>\n</div>\n\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}ion-list{background-color:transparent;border-bottom:1px solid #c2c2c2;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);border-radius:5px}.list-block .list-md,.list-block ion-list{padding-top:0;padding-bottom:0}:host ::ng-deep app-ui-item ion-item-sliding{background-color:#fff}:host ::ng-deep app-ui-item:first-of-type ion-item-sliding{border-radius:5px 5px 0 0}:host ::ng-deep app-ui-item:last-of-type ion-item-sliding{border-radius:0 0 5px 5px}:host ::ng-deep app-ui-item:only-of-type ion-item-sliding{border-radius:5px}:host ::ng-deep ion-item-sliding:first-of-type .item-native{border-radius:5px 5px 0 0}:host ::ng-deep ion-item-sliding:last-of-type .item-native{border-radius:5px 5px 0 0}"]
                }] }
    ];
    UiItemSlidingComponent.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] }
    ]; };
    return UiItemSlidingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiItemOptionsComponent = /** @class */ (function () {
    function UiItemOptionsComponent() {
    }
    /**
     * @return {?}
     */
    UiItemOptionsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiItemOptionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-item-options',
                    template: "<ng-template *ngIf=\"this.side === 'start'; then startBlock else endBlock\"></ng-template>\n\n<ng-template #optionContent>\n    <ng-content></ng-content>\n</ng-template>\n\n<ng-template #startBlock>\n    <ion-item-options side=\"start\">\n      <ng-container *ngTemplateOutlet=\"optionContent\"></ng-container>\n    </ion-item-options>\n</ng-template>\n\n<ng-template #endBlock>\n    <ion-item-options side=\"end\">\n      <ng-container *ngTemplateOutlet=\"optionContent\"></ng-container>\n    </ion-item-options>\n</ng-template>\n",
                    styles: [""]
                }] }
    ];
    UiItemOptionsComponent.ctorParameters = function () { return []; };
    UiItemOptionsComponent.propDecorators = {
        side: [{ type: Input, args: ['side',] }]
    };
    return UiItemOptionsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiItemOptionComponent = /** @class */ (function () {
    function UiItemOptionComponent() {
        this.onItemOptionClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    UiItemOptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiItemOptionComponent.prototype.itemOptionClick = /**
     * @return {?}
     */
    function () {
        this.onItemOptionClick.emit();
    };
    UiItemOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-item-option',
                    template: "<ion-item-option (click)=\"itemOptionClick()\">\n  <ng-content></ng-content>\n</ion-item-option>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}ion-item-option{display:inline-block;height:100%;background-color:#fff;color:#414141}.item-native ion-item-option:hover{opacity:.7}"]
                }] }
    ];
    UiItemOptionComponent.ctorParameters = function () { return []; };
    UiItemOptionComponent.propDecorators = {
        onItemOptionClick: [{ type: Output }]
    };
    return UiItemOptionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiItemComponent = /** @class */ (function () {
    function UiItemComponent(elementRef) {
        this.onItemClick = new EventEmitter();
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    UiItemComponent.prototype.closeSlidingItems = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                item = this.elementRef.nativeElement.querySelector('ion-item-sliding');
                if (item && item.closeOpened) {
                    return [2 /*return*/, item.closeOpened()];
                }
                return [2 /*return*/, false];
            });
        });
    };
    /**
     * @return {?}
     */
    UiItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.closeSlidingItems();
    };
    /**
     * @return {?}
     */
    UiItemComponent.prototype.itemClick = /**
     * @return {?}
     */
    function () {
        this.onItemClick.emit();
        this.closeSlidingItems();
    };
    UiItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-item',
                    template: "<ion-item-sliding>\n  <ion-item lines=\"none\" (click)=\"itemClick()\">\n    <ion-label text-wrap class=\"ui-item\">\n      <ng-content select=\"[ui-item-content]\"></ng-content>\n    </ion-label>\n  </ion-item>\n  <ng-content></ng-content>\n</ion-item-sliding>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}ion-item-sliding{border-bottom:1px solid #c2c2c2}"]
                }] }
    ];
    UiItemComponent.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] }
    ]; };
    UiItemComponent.propDecorators = {
        slidingList: [{ type: ViewChild, args: ['slidingList',] }],
        onItemClick: [{ type: Output }]
    };
    return UiItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { EventEmitter } from 'protractor';
var UiLinkComponent = /** @class */ (function () {
    function UiLinkComponent() {
        this.isUnderLine = true;
        this.isHasImg = true;
        this.isImgFront = false;
        this.isReset = false;
        this.id = '';
        this.classImgFront = '';
        this.onClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    UiLinkComponent.prototype.onClickLink = /**
     * @return {?}
     */
    function () {
        this.onClick.emit();
    };
    /**
     * @return {?}
     */
    UiLinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.classImgFront = this.isImgFront ? ' type-img-front' : '';
        this.classLinkStyle = this.isUnderLine ? ' ' : ' type-no-underline';
    };
    UiLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-link',
                    template: "<div class=\"ui-link-block\" [ngClass]=\"[classLinkStyle, classImgFront, isReset ? 'resetLink' : '']\">\n  <button class=\"link\" (click)=\"onClickLink()\" [id]='id'>\n    <span class=\"link-text\">\n        <ng-content select=\"[textType=linktext]\"></ng-content>\n    </span>\n    <i *ngIf=\"isHasImg\" class=\"img-block\">\n        <img *ngIf=\"imgSrc\" [src]=\"imgSrc\">\n        <ng-content select=\"[textType=icon]\"></ng-content>\n    </i>\n  </button>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-link-block{display:inline-flex;justify-content:center}.ui-link-block.type-no-underline .link{text-decoration:none}.ui-link-block.type-img-front .link{flex-direction:row-reverse}.ui-link-block.type-img-front .img-block{padding-left:0;margin-right:5px}.ui-link-block .img-block{display:flex;justify-content:center;max-width:24px;max-height:24px;width:100%}.ui-link-block .img-block img{max-width:24px;max-height:24px;width:24px;height:24px;display:inline-block}.ui-link-block .link{color:#007ab3;font-size:1.125rem;line-height:normal;text-decoration:underline;display:flex;justify-content:center;align-items:center}.ui-link-block .link-text{display:flex;justify-content:center;font-weight:700;position:relative}.ui-link-block .img-block:empty{display:none}.ui-link-block.resetLink{justify-content:flex-end}.ui-link-block.resetLink .link .link-text{white-space:nowrap}.ui-link-block.resetLink .link .img-block{margin:5px}.ui-link-block.resetLink .link .img-block .ng-star-inserted{max-width:14px}@media screen and (min-width:1025px){.ui-link-block .img-block{max-width:2.4vw;max-height:2.4vw}.ui-link-block .img-block img{max-width:2.4vw;max-height:2.4vw;width:2.4vw;height:2.4vw}}"]
                }] }
    ];
    UiLinkComponent.ctorParameters = function () { return []; };
    UiLinkComponent.propDecorators = {
        imgSrc: [{ type: Input }],
        isUnderLine: [{ type: Input }],
        isHasImg: [{ type: Input }],
        isImgFront: [{ type: Input }],
        isReset: [{ type: Input }],
        id: [{ type: Input }],
        onClick: [{ type: Output }]
    };
    return UiLinkComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiLinkBgComponent = /** @class */ (function () {
    function UiLinkBgComponent() {
        this.text = '';
        this.textTitle = '';
        this.linkBtnClick = new EventEmitter();
    }
    /**
     * @param {?} textInput
     * @return {?}
     */
    UiLinkBgComponent.prototype.onBtnLinkClick = /**
     * @param {?} textInput
     * @return {?}
     */
    function (textInput) {
        this.linkBtnClick.emit(textInput);
    };
    /**
     * @return {?}
     */
    UiLinkBgComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiLinkBgComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-link-bg',
                    template: "<button class=\"link-block\" (click)=\"onBtnLinkClick(text)\">\n  <div class=\"link-title\">\n    {{textTitle}}\n  </div>\n  <div class=\"link-content\">\n    {{text}}\n  </div>\n</button>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.link-block{cursor:pointer;border:none;background-color:#ececec;border-radius:45px;text-align:center;padding:10px 10px 10px 15px;display:block;max-width:230px;width:100%;margin:0 auto;table-layout:fixed;font-size:0}.link-block .link-content,.link-block .link-title{display:inline-block;vertical-align:middle}.link-block .link-title{width:70px;color:#c2c2c2;font-size:.75rem}.link-block .link-content{padding-left:15px;padding-right:10px;font-weight:700;color:#414141;font-size:1rem;width:calc(100% - 70px);text-align:left;word-break:break-all;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.link-block:focus{outline:0}:host{display:inline-block;margin:0 auto}:host+app-ui-link-bg{margin-top:15px}"]
                }] }
    ];
    UiLinkBgComponent.ctorParameters = function () { return []; };
    UiLinkBgComponent.propDecorators = {
        text: [{ type: Input }],
        textTitle: [{ type: Input }],
        linkBtnClick: [{ type: Output }]
    };
    return UiLinkBgComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiListData2Component = /** @class */ (function () {
    function UiListData2Component() {
    }
    /**
     * @return {?}
     */
    UiListData2Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiListData2Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-list-data2',
                    template: "<div class=\"ui-list-data\">\n    <div class=\"title-sm-block\">\n      <p><ng-content select=\"[textType=title]\"></ng-content></p>\n    </div>\n    <div class=\"list-data-block\">\n      <ng-content select=\"[textType=data]\"></ng-content>\n    </div>\n</div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-list-data .title-sm-block>p:empty{display:none}.ui-list-data .title-sm-block{background-color:#ececec}.ui-list-data .title-sm-block p{padding:5px 20px;margin:0;font-weight:700;font-size:.75rem}.ui-list-data .list-data-block{border-top:1px solid #ececec}"]
                }] }
    ];
    UiListData2Component.ctorParameters = function () { return []; };
    return UiListData2Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiLoadingBoxComponent = /** @class */ (function () {
    function UiLoadingBoxComponent(_changeDector) {
        this._changeDector = _changeDector;
        this.styleIsOpen = 'style-close'; // style for isOpen close
        this._isOpen = false;
        this.isOpenChange = new EventEmitter();
    }
    Object.defineProperty(UiLoadingBoxComponent.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isOpen = val;
            this.loadingStyleUpdate();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiLoadingBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loadingStyleUpdate();
        console.log('in ngOnInit loadingStyleUpdate');
    };
    /**
     * @return {?}
     */
    UiLoadingBoxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        console.log('destory');
        this.isOpen = false;
        this.isOpenChange.emit(false);
        this.loadingStyleUpdate();
    };
    // loading style show 
    // loading style show 
    /**
     * @return {?}
     */
    UiLoadingBoxComponent.prototype.loadingStyleUpdate = 
    // loading style show 
    /**
     * @return {?}
     */
    function () {
        console.log('in loadingStyleUpdate', this.isOpen);
        this.isOpen ? this.openGlobalControl() : this.closeGlobalControl();
        this.styleIsOpen = this.isOpen ? 'style-open' : 'style-close';
        this._changeDector.markForCheck();
    };
    // control interface if loading open
    // control interface if loading open
    /**
     * @return {?}
     */
    UiLoadingBoxComponent.prototype.openGlobalControl = 
    // control interface if loading open
    /**
     * @return {?}
     */
    function () {
        // let body fixed
        document.body.classList.add("fixed-body-full-page");
        /** @type {?} */
        var stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
        console.log('openGlobalControl', stopScrollBlock);
        // let back area which can scroll not scroll
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (stopScrollBlock.length != 0) {
                // in every stop-scroll-block class add no-scroll
                [].forEach.bind(stopScrollBlock, (/**
                 * @param {?} itm
                 * @return {?}
                 */
                function (itm) {
                    itm.classList.add('no-scroll');
                }))();
            }
        }), 100); // end of settimeout
    }; // end: openGlobalControl
    // control interface if loading close
    // end: openGlobalControl
    // control interface if loading close
    /**
     * @return {?}
     */
    UiLoadingBoxComponent.prototype.closeGlobalControl = 
    // end: openGlobalControl
    // control interface if loading close
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
        console.warn('closeGlobalControl', stopScrollBlock);
        //romove body fixed
        document.body.classList.remove("fixed-body-full-page");
        // remove other fix
        setTimeout((/**
         * @return {?}
         */
        function () {
            [].forEach.bind(stopScrollBlock, (/**
             * @param {?} itm
             * @return {?}
             */
            function (itm) {
                console.log('in each');
                itm.classList.remove('no-scroll');
            }))();
        }), 500);
    }; // end: closeGlobalControl 
    UiLoadingBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-loading-box',
                    template: "<div class=\"whole-page-block\" [ngClass]=\"styleIsOpen\">\n  <div class=\"loading-block\">\n    <app-ui-refresh-icon></app-ui-refresh-icon>\n  </div>\n</div>\n",
                    styles: [".whole-page-block{min-height:100vh;min-width:100vw;position:fixed;z-index:999;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.3);top:0;left:0}.whole-page-block.style-open{opacity:1;visibility:visible}.whole-page-block.style-close{transition:visibility 1s,opacity .5s linear;visibility:hidden;opacity:0}"]
                }] }
    ];
    UiLoadingBoxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiLoadingBoxComponent.propDecorators = {
        isOpen: [{ type: Input }],
        isOpenChange: [{ type: Output }]
    };
    return UiLoadingBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiModalStyleImgBaseComponent = /** @class */ (function (_super) {
    __extends(UiModalStyleImgBaseComponent, _super);
    function UiModalStyleImgBaseComponent(changeDector, elementRef, modalManager) {
        var _this = _super.call(this, modalManager, changeDector) || this;
        _this.changeDector = changeDector;
        _this.elementRef = elementRef;
        _this.modalManager = modalManager;
        _this.isPopupOpenChange = new EventEmitter();
        _this.close = new EventEmitter();
        _this.typeBtn = 'style1'; // style1 == normal -- padding-bot tom: 30px , style2 == with grey btn - padding- btm 18px , style3 == no padding - customize
        _this.isHasBtmBlock = true;
        _this.isBackdropClose = true; // is background click can close the popup
        _this.classBtnFix = '';
        _this.classContentFixStyle = '';
        _this.isTooHeight = false;
        _this._isPopupOpen = false;
        //detect if content area scroll to bottom add a class in modalblock
        _this.onScrollContentBtm = new EventEmitter();
        return _this;
    }
    Object.defineProperty(UiModalStyleImgBaseComponent.prototype, "isPopupOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isPopupOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isPopupOpen = val;
            this.isPopupOpenChange.emit(this._isPopupOpen);
            // let body fixed and stop scroll if popup open
            this.renderBtmSpace();
            this.checkModalOpenStatus(this._isPopupOpen);
            this.detectScroll(this);
            this.scrollContentToTop();
            if (this._isPopupOpen) {
                this.changeDector.markForCheck();
            }
        } // end set isPopupOpen
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.renderModalFixedStyle();
        this.detectScroll(this);
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        this.renderModalFixedStyle();
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.scrollContentToTop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var textContentBlock = document.body.getElementsByClassName('modal-content-block');
        setTimeout((/**
         * @return {?}
         */
        function () {
            // let content area which has scroll back to the top 
            [].forEach.bind(textContentBlock, (/**
             * @param {?} textContent
             * @return {?}
             */
            function (textContent) {
                textContent.scrollTop = 0;
            }))();
        }), 500); // end of settimeout
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.renderModalFixedStyle = /**
     * @return {?}
     */
    function () {
        this.modalHeight = this.elementRef.nativeElement.querySelector('.modal-block').offsetHeight;
        this.classBtnFix = this.modalHeight >= 600 ? 'btn-style-fixed' : '';
        this.classContentFixStyle = this.modalHeight >= 600 ? 'style-fixed' : '';
        this.classModalFix = this.modalHeight >= 600 ? 'style-modal-fixed' : '';
        this.changeDector.markForCheck();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.contentToTop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var element = event.target;
        if (element != undefined)
            element.scrollTop = 0;
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.isHasBtmBlock ? this.classBtmBlock = '' : this.classBtmBlock = ' style-no-btm';
        this.classMobileBtnNoFix = this.isMobileBtmBtnFix ? '' : 'style-mobile-btn-no-fix';
        this.contentBlock.nativeElement.addEventListener('touchmove', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            //event.preventDefault();
            event.stopPropagation();
        }), { passive: false });
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.isOpenStatus = /**
     * @return {?}
     */
    function () {
        return this.isPopupOpen ? 'open' : 'closed';
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.isBgOpenStatus = /**
     * @return {?}
     */
    function () {
        return this.isPopupOpen ? 'bgOpen' : 'bgClosed';
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.closeHandler = /**
     * @return {?}
     */
    function () {
        this.isPopupOpen = false;
        this.close.emit(false);
    };
    /**
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.backdropClose = /**
     * @return {?}
     */
    function () {
        if (this.isBackdropClose) {
            this.closeHandler();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiModalStyleImgBaseComponent.prototype.detectScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('in modal detetect scroll event', event);
        /** @type {?} */
        var element = event.target;
        /** @type {?} */
        var atBottom = false;
        if (element != undefined) {
            atBottom = element.scrollHeight - element.scrollTop <= (element.clientHeight + 50);
            // console.log('if atBottom', atBottom);
        }
        else {
            atBottom = false;
        }
        console.log('detect scroll atBottom', atBottom);
        this.onScrollContentBtm.emit(atBottom);
        if (atBottom) {
            //console.log('if atBottom', atBottom);
            if (this.modalBlock != null) {
                this.modalBlock.nativeElement.classList.add('style-scroll-on-btm');
            }
        }
    };
    UiModalStyleImgBaseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-modal-style-img-base',
                    template: "<ng-template #btmTemplate>\n    <div class=\"modal-btm-block\" [ngClass]=\"[typeBtn, classBtnFix]\">\n        <ng-content select=\"[textType=modal-btm-detail]\"></ng-content>\n    </div>\n</ng-template>\n\n<div class=\"modal-component-block\"  [ngClass]=\"[(isPopupOpen ? ' modal-open': ' modal-close'), classContentFull, classBtmBlock, styleModelBtm, classModalFix]\">\n  <div *ngIf=\"isPopupOpen\" class=\"modal-backdrop\"  ></div>\n    <div class=\"modal-all-block\">\n        <div #modalBlock class=\"modal-block\">\n            <div class=\"modal-container-block\">\n                <!-- img -->\n                <div #imgBlock class=\"modal-img-block\">\n                <ng-content select=\"[textType=modal-img-detail]\"></ng-content>\n                </div>\n                <!-- end of img -->\n                <!-- title -->\n                <div #headerBlock class=\"modal-header-block\">\n                    <h2 class=\"modal-title\"><ng-content select=\"[textType=modal-title-detail]\"></ng-content></h2>\n                    <div *ngIf=\"isBackdropClose\" class=\"modal-btn-close\" (click)=\"closeHandler()\">\n                        <img src=\"./assets/img/icon-close-grey.svg\">\n                    </div>\n                </div>\n                <!-- end of title -->\n                <!-- content -->\n                <!-- (scroll)=\"detectScroll($event)\" -->\n                <div #contentBlock class=\"modal-content-block form-stop-scroll \" [ngClass]=\"[classContentFixStyle]\" (scroll)=\"detectScroll($event)\">\n                <ng-content select=\"[textType=modal-content-detail]\"></ng-content>\n                <ng-container *ngIf=\"!isShowFixBtmTemp\">\n                    <ng-container *ngTemplateOutlet=\"btmTemplate\"></ng-container>\n                </ng-container>\n                </div>\n                <!-- end of content -->\n                <!-- btm -->\n                <ng-container *ngIf=\"isShowFixBtmTemp\">\n                    <ng-container *ngTemplateOutlet=\"btmTemplate\"></ng-container>\n                </ng-container>\n                <!-- end of btm -->\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- modal -->\n\n",
                    animations: [
                        animationModalOpen, animationModalClose
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["::ng-deep .nx-modal{left:auto!important}:host-context(.wd-lg) ::ng-deep .modal-block{max-width:750px}:host-context(.wd-sm) ::ng-deep .modal-block{max-width:355px}:host ::ng-deep .modal-component-block.style-btm-no-space .modal-block{padding-bottom:0}@media (max-width:767px){:host-context(.wd-lg) ::ng-deep .modal-block{width:100%!important}:host ::ng-deep .modal-block{width:100%}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep app-ui-btn-layout .btn-block{margin-bottom:0}:host ::ng-deep .modal-component-block{position:fixed;height:100vh;width:100vw;overflow:hidden;z-index:99;display:flex;justify-content:center;align-items:center;top:0;left:0;opacity:0}:host ::ng-deep .modal-component-block.layout-full .modal-block{padding:30px 0 0;margin:0 auto}:host ::ng-deep .modal-component-block.layout-full .modal-block .modal-content-block.style-fixed{margin-bottom:68px}:host ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block{margin-bottom:0}:host ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block.style-fixed{margin-bottom:0}:host ::ng-deep .modal-component-block.style-no-btm .modal-btm-block{display:none!important}:host ::ng-deep .modal-component-block.style-btm-no-space .modal-block .modal-content-block.style-fixed{margin-bottom:68px}:host ::ng-deep .modal-component-block .modal-all-block{width:100%;padding-left:10px;padding-right:10px;box-sizing:border-box;text-align:center}:host ::ng-deep .modal-component-block .modal-block{transition:transform .2s ease-in-out,height .2s ease-in-out,-webkit-transform .2s ease-in-out;transition-delay:.2s}:host ::ng-deep .modal-component-block.style-modal-fixed.modal-open .modal-block{height:600px}:host ::ng-deep .modal-component-block.modal-open{opacity:1;height:100%}:host ::ng-deep .modal-component-block.modal-open .modal-backdrop{opacity:.8}:host ::ng-deep .modal-component-block.modal-open .modal-block{opacity:1;-webkit-transform:scale(1);transform:scale(1)}:host ::ng-deep .modal-component-block.modal-close{width:0;left:50%;top:50%;height:0}:host ::ng-deep .modal-component-block.modal-close .modal-backdrop{opacity:0}:host ::ng-deep .modal-component-block.modal-close .modal-block{opacity:0;-webkit-transform:scale(0);transform:scale(0)}:host ::ng-deep .modal-component-block.modal-close .modal-container-block{height:0}:host ::ng-deep .modal-component-block .modal-backdrop{transition:.1s ease-in-out;background-color:rgba(0,0,0,.4);position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}:host ::ng-deep .modal-block{max-width:500px;position:relative;z-index:100;max-width:500px;max-height:600px;width:100%;background-color:#fff;display:flex;padding:30px 20px;margin:0 auto;text-align:left;border-radius:5px}:host ::ng-deep .modal-block.style-fix-height{height:600px;overflow-x:hidden}:host ::ng-deep .modal-block.style-btn-fixed{padding-bottom:calc(48px + 20px)}:host ::ng-deep .modal-block.style-btn-fixed .modal-content-block{margin-bottom:calc(48px + 20px)}:host ::ng-deep .modal-block .nx-modal__container .nx-modal__content{position:relative}:host ::ng-deep .modal-block .modal-container-block{display:flex;flex-direction:column;width:100%}:host ::ng-deep .modal-block .modal-header-block{display:flex;width:100%;justify-content:center;align-items:center;flex-shrink:0;flex-wrap:wrap}:host ::ng-deep .modal-block .modal-content-block{display:flex;width:100%;overflow-y:auto;overflow-x:hidden;flex-wrap:wrap;align-content:start}:host ::ng-deep .modal-block .modal-content-block>*{width:100%}:host ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:48px}@media (max-width:767px){:host ::ng-deep .modal-component-block .modal-all-block.type-full-page{padding-left:0;padding-right:0}:host ::ng-deep .modal-component-block.style-modal-fixed.modal-open .type-full-page .modal-block{height:100%}:host ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:68px}}:host ::ng-deep .modal-block .modal-btm-block{display:flex;width:100%;flex-shrink:0;flex-wrap:wrap;border-radius:0 0 5px 5px}:host ::ng-deep .modal-header-block .modal-btn-close{position:absolute;top:10px;right:10px;font-size:40px;color:#c2c2c2}:host ::ng-deep .modal-header-block .modal-btn-close img{width:40px}:host ::ng-deep .modal-content-block .modal-content-detail{height:100%;overflow-x:hidden}:host ::ng-deep .modal-content-block.layout-full{margin-left:-20px;margin-right:-20px}:host ::ng-deep .modal-content-block.layout-full .space-normal{margin-left:20px;margin-right:20px}:host ::ng-deep .modal-content-block.layout-full.style-fixed{margin-bottom:78px}:host ::ng-deep .modal-content-block .text-detail-block{padding-top:20px}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon{display:flex;padding-bottom:30px}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block{max-width:40px;width:100%}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block img{max-width:100%}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .text-block{padding-left:10px;box-sizing:border-box;max-width:calc(100% - 50px);width:100%;flex-grow:0;flex-shrink:0;flex-basis:calc(100% - 50px)}:host ::ng-deep .modal-content-block app-ui-detection-scroll{display:inline-block;height:100%}:host ::ng-deep .modal-content-block app-ui-detection-scroll .detection-scroll-content{height:100%}@media (max-width:767px){:host ::ng-deep .modal-content-block .text-detail-block{padding-top:0}}:host ::ng-deep .modal-btm-block{display:block;bottom:0;text-align:center;left:0;right:0;background-color:#fff;z-index:101;width:100%;position:relative}:host ::ng-deep .modal-btm-block:empty{display:none}:host ::ng-deep .modal-btm-block app-ui-btn-layout{padding:0;width:100%}:host ::ng-deep .modal-btm-block app-ui-btn-layout app-ui-btn:last-of-type{margin-right:0}:host ::ng-deep .modal-btm-block.btn-style-fixed{display:block;position:fixed;bottom:0;text-align:center;z-index:2;width:100%;left:0;right:0;background-color:#fff;padding:10px;box-shadow:-1px -2px 6px 2px rgba(207,207,207,.2)}:host ::ng-deep .modal-btm-block.btn-style-fixed.style1 app-ui-btn-layout,:host ::ng-deep .modal-btm-block.btn-style-fixed.style2 app-ui-btn-layout,:host ::ng-deep .modal-btm-block.btn-style-fixed.style3 app-ui-btn-layout{padding-top:0;margin-top:0;margin-bottom:0}:host ::ng-deep .modal-btm-block .btm-set-block{display:block;justify-content:center;position:relative;width:100%}:host ::ng-deep .modal-btm-block .btm-set-block .ps-text{position:absolute;left:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host ::ng-deep .modal-btm-block.style1 app-ui-btn-layout{padding-top:30px;margin-bottom:30px}:host ::ng-deep .modal-btm-block.style2 app-ui-btn-layout{margin-bottom:18px}:host ::ng-deep .modal-btm-block.style3 app-ui-btn-layout{margin-bottom:0}:host ::ng-deep .ps-text{font-size:.75rem;color:#414141}:host ::ng-deep .text-block .text-detail{display:inline-block}:host ::ng-deep p{padding:0;margin:0}:host ::ng-deep .desc,:host ::ng-deep .desc-normal{font-size:1rem;color:#414141;padding-bottom:5px}:host ::ng-deep .desc{font-weight:700}:host ::ng-deep p.desc{padding-bottom:0}:host ::ng-deep .desc-normal{font-weight:400}:host ::ng-deep .desc-sm{font-size:.875rem;line-height:20px;text-align:left}:host ::ng-deep .desc-line-lg{line-height:28px}:host ::ng-deep .textarea-block{display:inline-block;width:100%}:host ::ng-deep .textarea-block textarea{display:inline-block;width:100%;background-color:#fcfcfc;border-radius:5px;padding:20px;border:1px solid #e5e5ee;font-size:1rem;resize:none;font-family:\"Allianz Neo\"}:host ::ng-deep .textarea-block textarea:focus{outline:0}:host ::ng-deep .textarea-block textarea ::-webkit-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea input::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}:host ::ng-deep .textarea-block textarea textarea::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}:host ::ng-deep .textarea-block textarea ::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea :-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea ::-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host .modal-container-block{position:static}:host .modal-header-block .modal-title{font-size:1.125rem;font-weight:700;line-height:normal;padding:10px 20px 20px}:host .modal-header-block .modal-title .txt{font-weight:400;font-size:.75rem;margin-top:15px}:host ::ng-deep .modal-img-block{text-align:center;color:#007ab3}:host ::ng-deep .modal-img-block img{display:inline-block;width:40px;height:40px}:host ::ng-deep .modal-img-block nx-icon{color:#007ab3;font-size:40px;font-size:normal}:host ::ng-deep .modal-img-block .nx-icon--info-circle.icon-i{display:inline-block;width:40px;height:40px;border:none;font-size:40px;color:#007ab3;background-color:transparent;line-height:1em}:host .modal-header-block{text-align:center}:host .modal-content-block{overflow-x:hidden;margin-bottom:30px;text-align:center}:host .modal-content-block ::ng-deep app-ui-link-bg+app-ui-link-bg{margin-top:15px;display:inline-block}:host .modal-btm-block{text-align:center}@media (max-width:1023px){:host .modal-btm-block.fixed{position:absolute;bottom:-30px;text-align:center;box-shadow:none}}"]
                }] }
    ];
    UiModalStyleImgBaseComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: ModalManager }
    ]; };
    UiModalStyleImgBaseComponent.propDecorators = {
        isPopupOpenChange: [{ type: Output }],
        close: [{ type: Output }],
        modalId: [{ type: Input }],
        typeBtn: [{ type: Input }],
        isHasBtmBlock: [{ type: Input }],
        isBackdropClose: [{ type: Input }],
        isPopupOpen: [{ type: Input }],
        modalBlock: [{ type: ViewChild, args: ['modalBlock',] }],
        contentBlock: [{ type: ViewChild, args: ['contentBlock',] }],
        onScrollContentBtm: [{ type: Output }]
    };
    return UiModalStyleImgBaseComponent;
}(UiModalBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiModalStyleText1Component = /** @class */ (function (_super) {
    __extends(UiModalStyleText1Component, _super);
    function UiModalStyleText1Component(changeDector, elementRef, modalManager) {
        var _this = _super.call(this, modalManager, changeDector) || this;
        _this.changeDector = changeDector;
        _this.elementRef = elementRef;
        _this.modalManager = modalManager;
        _this.isPopupOpenChange = new EventEmitter();
        _this.close = new EventEmitter();
        _this.typeBtn = 'style1'; // style1 == normal -- padding-bot tom: 30px , style2 == with grey btn - padding- btm 18px , style3 == no padding - customize
        _this.isHasBtmBlock = true;
        _this.isScrollToTop = false;
        _this.isBackdropClose = true; // is background click can close the popup
        _this.isMobileStyleFullPage = true; // true is mobile style is overlap; false is keep modal
        _this.isTooHeight = false;
        _this.classMobileStyleFull = 'type-full-page'; // style full page or not  in modal-all-block
        _this.classMobileStyleFullDetail = 'style-type-mobile-full'; // style full page or not in modal-block
        _this._isPopupOpen = false;
        _this.windowWidth = window.innerWidth;
        //detect if content area scroll to bottom add a class in modalblock
        _this.onScrollContentBtm = new EventEmitter();
        return _this;
    }
    Object.defineProperty(UiModalStyleText1Component.prototype, "isPopupOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isPopupOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            this._isPopupOpen = val;
            this.isPopupOpenChange.emit(this._isPopupOpen);
            this.renderBtmSpace();
            // let body fixed and stop scroll if popup open
            this.checkModalOpenStatus(this._isPopupOpen);
            if (this._isPopupOpen) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    // need to scroll to top
                    /** @type {?} */
                    var modalContentBlock_ele = _this.modalBlock.nativeElement.querySelector('div.modal-content-block');
                    if (_this.isScrollToTop && modalContentBlock_ele !== null) {
                        modalContentBlock_ele.scrollTop = 0;
                    }
                    _this.changeDector.markForCheck();
                }), 500); // end of settimeout
            } // end if: popup open
        } // end set isPopupOpen
        ,
        enumerable: true,
        configurable: true
    });
    // after get height render modal style
    // after get height render modal style
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.renderModalFixedStyle = 
    // after get height render modal style
    /**
     * @return {?}
     */
    function () {
        this.modalHeight = this.elementRef.nativeElement.querySelector('.modal-block').offsetHeight;
        this.classBtnFix = this.modalHeight >= 600 ? 'btn-style-fixed' : '';
        this.classContentFixStyle = this.modalHeight >= 600 ? 'style-fixed' : '';
        this.classModalFix = this.modalHeight >= 600 ? 'style-modal-fixed' : '';
        this.changeDector.markForCheck();
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.renderModalBasicStyle = /**
     * @return {?}
     */
    function () {
        // mobile style
        this.classMobileStyleFull = this.isMobileStyleFullPage ? 'type-full-page' : '';
        this.classMobileStyleFullDetail = this.isMobileStyleFullPage ? 'style-type-mobile-full' : '';
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.isHasBtmBlock ? this.classBtmBlock = '' : this.classBtmBlock = ' style-no-btm';
        this.classMobileBtnNoFix = this.isMobileBtmBtnFix ? '' : 'style-mobile-btn-no-fix';
        this.windowWidth = window.innerWidth;
        this.renderModalBasicStyle();
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.renderModalFixedStyle();
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        this.renderModalFixedStyle();
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.isOpenStatus = /**
     * @return {?}
     */
    function () {
        return this._isPopupOpen ? 'open' : 'closed';
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.isBgOpenStatus = /**
     * @return {?}
     */
    function () {
        return this._isPopupOpen ? 'bgOpen' : 'bgClosed';
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.closeHandler = /**
     * @return {?}
     */
    function () {
        this.isPopupOpenChange.emit(false);
        this.close.emit(false);
    };
    /**
     * @return {?}
     */
    UiModalStyleText1Component.prototype.backdropClose = /**
     * @return {?}
     */
    function () {
        if (this.isBackdropClose) {
            this.closeHandler();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiModalStyleText1Component.prototype.detectScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('event', event);
        /** @type {?} */
        var element = event.target;
        /** @type {?} */
        var atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (atBottom) {
            if (this.modalBlock != null) {
                this.modalBlock.nativeElement.classList.add('style-scroll-on-btm');
            }
        }
        this.onScrollContentBtm.emit(atBottom);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiModalStyleText1Component.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = window.innerWidth;
    };
    UiModalStyleText1Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-modal-style-text1',
                    template: "<ng-template #btmTemplate>\n    <div #modalBtm class=\"modal-btm-block\" [ngClass]=\"[typeBtn, classBtnFix]\">\n        <ng-content select=\"[textType=modal-btm-detail]\"></ng-content>\n    </div>\n</ng-template>\n\n\n\n<div class=\"modal-component-block\" [ngClass]=\"[(_isPopupOpen ? ' modal-open': ' modal-close'), classContentFull, classBtmBlock, classMobileBtnNoFix, styleModelBtm, classModalFix]\" >\n  <div *ngIf=\"_isPopupOpen\" class=\"modal-backdrop\"></div>\n  <div class=\"modal-all-block type-full-page\" [ngClass]=\"classMobileStyleFull\">\n    <div #modalBlock class=\"modal-block style-type-mobile-full\" [ngClass]=\"classMobileStyleFullDetail\" >\n        <div class=\"modal-container-block\">\n          <div class=\"safe-area-block\"></div>\n          \n          <!-- title -->\n          <div class=\"modal-header-block\">\n            <div class=\"modal-btn-back show-mobile\">\n                <div class=\"back-icon-block\" (click)=\"closeHandler()\">\n                  <img src=\"./assets/img/icon-arrow-white.svg\" alt=\"back\">\n                </div>\n            </div>\n            <h2 #modalHeader class=\"modal-title\"><ng-content select=\"[textType=modal-title-detail]\"></ng-content></h2>\n            <div *ngIf=\"isBackdropClose && windowWidth >=768\" class=\"modal-btn-close\" (click)=\"closeHandler()\">\n                <img src=\"./assets/img/icon-close-grey.svg\">\n            </div>\n          </div>\n          <!-- end of title -->\n          <!-- content -->\n          <div #modalContent class=\"modal-content-block form-stop-scroll form-scroll-content\" [ngClass]=\"classContentFixStyle\" (scroll)=\"detectScroll($event)\">\n                <ng-content select=\"[textType=modal-content-detail]\"></ng-content>\n                <ng-container *ngIf=\"!isShowFixBtmTemp\">\n                  <ng-container *ngTemplateOutlet=\"btmTemplate\"></ng-container>\n                </ng-container>\n          </div>\n          <!-- end of content -->\n          <!-- btm -->\n          <ng-container *ngIf=\"isShowFixBtmTemp\">\n              <ng-container *ngTemplateOutlet=\"btmTemplate\"></ng-container>\n          </ng-container>\n          \n          \n          <!-- end of btm -->\n          <div class=\"safe-area-block-bottom\"></div>\n        </div>\n    </div>\n  </div>\n</div>\n<!-- modal for normal btm-block -->\n\n\n",
                    animations: [
                        animationModalOpen, animationModalClose
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["::ng-deep .nx-modal{left:auto!important}:host-context(.wd-lg) ::ng-deep .modal-block{max-width:750px}:host-context(.wd-sm) ::ng-deep .modal-block{max-width:355px}:host ::ng-deep .modal-component-block.style-btm-no-space .modal-block{padding-bottom:0}@media (max-width:767px){:host-context(.wd-lg) ::ng-deep .modal-block{width:100%!important}:host ::ng-deep .modal-block{width:100%}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep app-ui-btn-layout .btn-block{margin-bottom:0}:host ::ng-deep .modal-component-block{position:fixed;height:100vh;width:100vw;overflow:hidden;z-index:99;display:flex;justify-content:center;align-items:center;top:0;left:0;opacity:0}:host ::ng-deep .modal-component-block.layout-full .modal-block{padding:30px 0 0;margin:0 auto}:host ::ng-deep .modal-component-block.layout-full .modal-block .modal-content-block.style-fixed{margin-bottom:68px}:host ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block{margin-bottom:0}:host ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block.style-fixed{margin-bottom:0}:host ::ng-deep .modal-component-block.style-no-btm .modal-btm-block{display:none!important}:host ::ng-deep .modal-component-block.style-btm-no-space .modal-block .modal-content-block.style-fixed{margin-bottom:68px}:host ::ng-deep .modal-component-block .modal-all-block{width:100%;padding-left:10px;padding-right:10px;box-sizing:border-box;text-align:center}:host ::ng-deep .modal-component-block .modal-block{transition:transform .2s ease-in-out,height .2s ease-in-out,-webkit-transform .2s ease-in-out;transition-delay:.2s}:host ::ng-deep .modal-component-block.style-modal-fixed.modal-open .modal-block{height:600px}:host ::ng-deep .modal-component-block.modal-open{opacity:1;height:100%}:host ::ng-deep .modal-component-block.modal-open .modal-backdrop{opacity:.8}:host ::ng-deep .modal-component-block.modal-open .modal-block{opacity:1;-webkit-transform:scale(1);transform:scale(1)}:host ::ng-deep .modal-component-block.modal-close{width:0;left:50%;top:50%;height:0}:host ::ng-deep .modal-component-block.modal-close .modal-backdrop{opacity:0}:host ::ng-deep .modal-component-block.modal-close .modal-block{opacity:0;-webkit-transform:scale(0);transform:scale(0)}:host ::ng-deep .modal-component-block.modal-close .modal-container-block{height:0}:host ::ng-deep .modal-component-block .modal-backdrop{transition:.1s ease-in-out;background-color:rgba(0,0,0,.4);position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}:host ::ng-deep .modal-block{max-width:500px;position:relative;z-index:100;max-width:500px;max-height:600px;width:100%;background-color:#fff;display:flex;padding:30px 20px;margin:0 auto;text-align:left;border-radius:5px}:host ::ng-deep .modal-block.style-fix-height{height:600px;overflow-x:hidden}:host ::ng-deep .modal-block.style-btn-fixed{padding-bottom:calc(48px + 20px)}:host ::ng-deep .modal-block.style-btn-fixed .modal-content-block{margin-bottom:calc(48px + 20px)}:host ::ng-deep .modal-block .nx-modal__container .nx-modal__content{position:relative}:host ::ng-deep .modal-block .modal-container-block{display:flex;flex-direction:column;width:100%}:host ::ng-deep .modal-block .modal-header-block{display:flex;width:100%;justify-content:center;align-items:center;flex-shrink:0;flex-wrap:wrap}:host ::ng-deep .modal-block .modal-content-block{display:flex;width:100%;overflow-y:auto;overflow-x:hidden;flex-wrap:wrap;align-content:start}:host ::ng-deep .modal-block .modal-content-block>*{width:100%}:host ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:48px}@media (max-width:767px){:host ::ng-deep .modal-component-block .modal-all-block.type-full-page{padding-left:0;padding-right:0}:host ::ng-deep .modal-component-block.style-modal-fixed.modal-open .type-full-page .modal-block{height:100%}:host ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:68px}}:host ::ng-deep .modal-block .modal-btm-block{display:flex;width:100%;flex-shrink:0;flex-wrap:wrap;border-radius:0 0 5px 5px}:host ::ng-deep .modal-header-block .modal-btn-close{position:absolute;top:10px;right:10px;font-size:40px;color:#c2c2c2}:host ::ng-deep .modal-header-block .modal-btn-close img{width:40px}:host ::ng-deep .modal-content-block .modal-content-detail{height:100%;overflow-x:hidden}:host ::ng-deep .modal-content-block.layout-full{margin-left:-20px;margin-right:-20px}:host ::ng-deep .modal-content-block.layout-full .space-normal{margin-left:20px;margin-right:20px}:host ::ng-deep .modal-content-block.layout-full.style-fixed{margin-bottom:78px}:host ::ng-deep .modal-content-block .text-detail-block{padding-top:20px}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon{display:flex;padding-bottom:30px}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block{max-width:40px;width:100%}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block img{max-width:100%}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .text-block{padding-left:10px;box-sizing:border-box;max-width:calc(100% - 50px);width:100%;flex-grow:0;flex-shrink:0;flex-basis:calc(100% - 50px)}:host ::ng-deep .modal-content-block app-ui-detection-scroll{display:inline-block;height:100%}:host ::ng-deep .modal-content-block app-ui-detection-scroll .detection-scroll-content{height:100%}@media (max-width:767px){:host ::ng-deep .modal-content-block .text-detail-block{padding-top:0}}:host ::ng-deep .modal-btm-block{display:block;bottom:0;text-align:center;left:0;right:0;background-color:#fff;z-index:101;width:100%;position:relative}:host ::ng-deep .modal-btm-block:empty{display:none}:host ::ng-deep .modal-btm-block app-ui-btn-layout{padding:0;width:100%}:host ::ng-deep .modal-btm-block app-ui-btn-layout app-ui-btn:last-of-type{margin-right:0}:host ::ng-deep .modal-btm-block.btn-style-fixed{display:block;position:fixed;bottom:0;text-align:center;z-index:2;width:100%;left:0;right:0;background-color:#fff;padding:10px;box-shadow:-1px -2px 6px 2px rgba(207,207,207,.2)}:host ::ng-deep .modal-btm-block.btn-style-fixed.style1 app-ui-btn-layout,:host ::ng-deep .modal-btm-block.btn-style-fixed.style2 app-ui-btn-layout,:host ::ng-deep .modal-btm-block.btn-style-fixed.style3 app-ui-btn-layout{padding-top:0;margin-top:0;margin-bottom:0}:host ::ng-deep .modal-btm-block .btm-set-block{display:block;justify-content:center;position:relative;width:100%}:host ::ng-deep .modal-btm-block .btm-set-block .ps-text{position:absolute;left:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host ::ng-deep .modal-btm-block.style1 app-ui-btn-layout{padding-top:30px;margin-bottom:30px}:host ::ng-deep .modal-btm-block.style2 app-ui-btn-layout{margin-bottom:18px}:host ::ng-deep .modal-btm-block.style3 app-ui-btn-layout{margin-bottom:0}:host ::ng-deep .ps-text{font-size:.75rem;color:#414141}:host ::ng-deep .text-block .text-detail{display:inline-block}:host ::ng-deep p{padding:0;margin:0}:host ::ng-deep .desc,:host ::ng-deep .desc-normal{font-size:1rem;color:#414141;padding-bottom:5px}:host ::ng-deep .desc{font-weight:700}:host ::ng-deep p.desc{padding-bottom:0}:host ::ng-deep .desc-normal{font-weight:400}:host ::ng-deep .desc-sm{font-size:.875rem;line-height:20px;text-align:left}:host ::ng-deep .desc-line-lg{line-height:28px}:host ::ng-deep .textarea-block{display:inline-block;width:100%}:host ::ng-deep .textarea-block textarea{display:inline-block;width:100%;background-color:#fcfcfc;border-radius:5px;padding:20px;border:1px solid #e5e5ee;font-size:1rem;resize:none;font-family:\"Allianz Neo\"}:host ::ng-deep .textarea-block textarea:focus{outline:0}:host ::ng-deep .textarea-block textarea ::-webkit-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea input::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}:host ::ng-deep .textarea-block textarea textarea::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}:host ::ng-deep .textarea-block textarea ::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea :-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea ::-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host .modal-container-block{position:static}:host .modal-header-block{text-align:center}:host .modal-header-block .modal-title{font-size:1.125rem;font-weight:700;line-height:normal}@media (min-width:769px){:host .modal-header-block{padding-bottom:30px}}@media (max-width:767px){@supports (top:constant(safe-area-inset-top)){.safe-area-block{height:constant(safe-area-inset-top)}}@supports (top:env(safe-area-inset-top)){.safe-area-block{height:env(safe-area-inset-top)}}:host ::ng-deep .modal-component-block{align-items:flex-start}:host ::ng-deep .modal-component-block.modal-open .modal-backdrop{left:0;opacity:0}:host ::ng-deep .modal-component-block.modal-open .modal-block{left:0;-webkit-transform:scale(1);transform:scale(1)}:host ::ng-deep .modal-component-block.modal-close{width:100vw;height:100vh;left:100vw;top:0}:host ::ng-deep .modal-component-block.modal-close .modal-block{left:100vw;-webkit-transform:scale(1);transform:scale(1)}:host ::ng-deep .modal-component-block.layout-full .modal-block.style-type-mobile-full{padding:0}:host ::ng-deep .modal-component-block.layout-full .modal-block.style-type-mobile-full .modal-content-block{padding:30px 0}@supports (top:constant(safe-area-inset-top)){.safe-area-block-bottom{height:constant(safe-area-inset-bottom)}:host ::ng-deep .modal-component-block.style-mobile-btn-no-fix .style-type-mobile-full.modal-block .modal-content-block{height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom) - 44px)}}@supports (top:env(safe-area-inset-top)){.safe-area-block-bottom{height:env(safe-area-inset-bottom)}:host ::ng-deep .modal-component-block.style-mobile-btn-no-fix .style-type-mobile-full.modal-block .modal-content-block{height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 44px)}}:host ::ng-deep .modal-component-block.style-mobile-btn-no-fix .style-type-mobile-full.modal-block .modal-btm-block{box-shadow:none}:host ::ng-deep .modal-component-block.style-mobile-btn-no-fix .style-type-mobile-full.modal-block .modal-btm-block.style1 app-ui-btn-layout{box-shadow:none;margin-top:30px}:host ::ng-deep .modal-component-block.style-no-btm .modal-block.style-type-mobile-full .modal-content-block{height:calc(100vh - 44px)}:host ::ng-deep .modal-block{padding:0;max-height:100vh;height:100%;border-radius:0}:host ::ng-deep .modal-block.style-type-mobile-full{max-width:100vw}:host ::ng-deep .modal-block.style-type-mobile-full .modal-container-block{position:relative;max-width:100%;max-height:100%;margin:0;min-height:100vh;padding:0;background:linear-gradient(180deg,#000 30%,#fff 70%,#000 100%)}:host ::ng-deep .modal-block.style-type-mobile-full .modal-header-block{background:linear-gradient(to bottom,#0068b7,#003781);display:flex;width:100%;padding:0;align-items:center;min-height:44px;position:relative;justify-content:center}:host ::ng-deep .modal-block.style-type-mobile-full .modal-header-block .modal-title{color:#fff;font-size:1.125rem;width:calc(100% - 62px)}:host ::ng-deep .modal-block.style-type-mobile-full .modal-header-block .modal-btn-back{color:#fff;line-height:normal;height:100%;display:inline-block;width:44px;position:absolute;left:0}:host ::ng-deep .modal-block.style-type-mobile-full .modal-header-block .modal-btn-back .back-icon-block{display:flex;height:100%;vertical-align:middle;width:100%;padding-left:20px;align-items:center}:host ::ng-deep .modal-block.style-type-mobile-full .modal-header-block .icon-back{display:inline-flex;justify-content:center;align-items:center;position:absolute;left:0;height:100%;top:0}:host ::ng-deep .modal-block.style-type-mobile-full .nx-modal__close{display:none}:host ::ng-deep .modal-block.style-type-mobile-full .modal-content-block{padding:30px 20px 0;height:calc(100vh - 44px - 52px);overflow:hidden;overflow-y:auto;background-color:#fff}:host ::ng-deep .modal-block.style-type-mobile-full .modal-btm-block{padding:0;box-shadow:-1px -2px 6px 2px rgba(207,207,207,.2);border-radius:0;z-index:10}@supports (top:constant(safe-area-inset-top)){:host ::ng-deep .modal-block.style-type-mobile-full .modal-content-block{height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom) - 44px - 52px)}:host ::ng-deep .modal-block.style-type-mobile-full .modal-btm-block{margin-bottom:constant(safe-area-inset-bottom)}}@supports (top:env(safe-area-inset-top)){:host ::ng-deep .modal-block.style-type-mobile-full .modal-content-block{height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 44px - 52px)}:host ::ng-deep .modal-block.style-type-mobile-full .modal-btm-block{margin-bottom:env(safe-area-inset-bottom)}}:host ::ng-deep .modal-block.style-type-mobile-full .modal-btm-block.style1 app-ui-btn-layout,:host ::ng-deep .modal-block.style-type-mobile-full .modal-btm-block.style2 app-ui-btn-layout,:host ::ng-deep .modal-block.style-type-mobile-full .modal-btm-block.style3 app-ui-btn-layout{margin-bottom:0;padding-top:10px;padding-bottom:10px;box-shadow:-1px -2px 6px 2px rgba(207,207,207,.2)}}"]
                }] }
    ];
    UiModalStyleText1Component.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: ModalManager }
    ]; };
    UiModalStyleText1Component.propDecorators = {
        isPopupOpenChange: [{ type: Output }],
        close: [{ type: Output }],
        modalId: [{ type: Input }],
        typeBtn: [{ type: Input }],
        isHasBtmBlock: [{ type: Input }],
        isScrollToTop: [{ type: Input }],
        isBackdropClose: [{ type: Input }],
        isMobileStyleFullPage: [{ type: Input }],
        isPopupOpen: [{ type: Input }],
        modalBlock: [{ type: ViewChild, args: ['modalBlock',] }],
        onScrollContentBtm: [{ type: Output }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UiModalStyleText1Component;
}(UiModalBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiModalStyleCustComponent = /** @class */ (function (_super) {
    __extends(UiModalStyleCustComponent, _super);
    function UiModalStyleCustComponent(changeDector, elementRef, modalManager) {
        var _this = _super.call(this, modalManager, changeDector) || this;
        _this.changeDector = changeDector;
        _this.elementRef = elementRef;
        _this.modalManager = modalManager;
        _this.isPopupOpenChange = new EventEmitter();
        _this.close = new EventEmitter();
        _this.isContnetFull = false;
        _this.typeBtn = 'style1'; // style1 == normal -- padding-bot tom: 30px , style2 == with grey btn - padding- btm 18px , style3 == no padding - customize
        _this.isHasBtmBlock = true;
        _this.isHeightFix = false; // if true, popup height fix 600px
        _this.isTooHeight = false;
        _this._isPopupOpen = false;
        return _this;
    }
    Object.defineProperty(UiModalStyleCustComponent.prototype, "isPopupOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isPopupOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isPopupOpen = val;
            this.isPopupOpenChange.emit(this._isPopupOpen);
            this.checkModalOpenStatus(this._isPopupOpen);
        } // end set isPopupOpen
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiModalStyleCustComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.classContentFull = this.isContnetFull ? ' layout-full' : '';
        this.styleHeightFix = this.isHeightFix ? 'style-fix-height' : '';
    };
    /**
     * @return {?}
     */
    UiModalStyleCustComponent.prototype.isOpenStatus = /**
     * @return {?}
     */
    function () {
        return this.isPopupOpen ? 'open' : 'closed';
    };
    /**
     * @return {?}
     */
    UiModalStyleCustComponent.prototype.isBgOpenStatus = /**
     * @return {?}
     */
    function () {
        return this.isPopupOpen ? 'bgOpen' : 'bgClosed';
    };
    /**
     * @return {?}
     */
    UiModalStyleCustComponent.prototype.closeHandler = /**
     * @return {?}
     */
    function () {
        this.isPopupOpen = false;
        this.close.emit(false);
    };
    UiModalStyleCustComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-modal-style-cust',
                    template: "<div class=\"modal-component-block\"  [ngClass]=\"[(isPopupOpen ? ' modal-open': ' modal-close')]\">\n    <div *ngIf=\"isPopupOpen\" class=\"modal-backdrop\" (click)=\"closeHandler()\" ></div>\n    <div class=\"modal-all-block\">\n      <div #modalBlock class=\"modal-block\" [ngClass]=\"styleHeightFix\">\n          \n          <ng-content></ng-content> \n      </div>\n    </div>\n</div>",
                    animations: [
                        animationModalOpen, animationModalClose
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["::ng-deep .nx-modal{left:auto!important}:host-context(.wd-lg) ::ng-deep .modal-block{max-width:750px}:host-context(.wd-sm) ::ng-deep .modal-block{max-width:355px}:host ::ng-deep .modal-component-block.style-btm-no-space .modal-block{padding-bottom:0}@media (max-width:767px){:host-context(.wd-lg) ::ng-deep .modal-block{width:100%!important}:host ::ng-deep .modal-block{width:100%}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep app-ui-btn-layout .btn-block{margin-bottom:0}:host ::ng-deep .modal-component-block{position:fixed;height:100vh;width:100vw;overflow:hidden;z-index:99;display:flex;justify-content:center;align-items:center;top:0;left:0;opacity:0}:host ::ng-deep .modal-component-block.layout-full .modal-block{padding:30px 0 0;margin:0 auto}:host ::ng-deep .modal-component-block.layout-full .modal-block .modal-content-block.style-fixed{margin-bottom:68px}:host ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block{margin-bottom:0}:host ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block.style-fixed{margin-bottom:0}:host ::ng-deep .modal-component-block.style-no-btm .modal-btm-block{display:none!important}:host ::ng-deep .modal-component-block.style-btm-no-space .modal-block .modal-content-block.style-fixed{margin-bottom:68px}:host ::ng-deep .modal-component-block .modal-all-block{width:100%;padding-left:10px;padding-right:10px;box-sizing:border-box;text-align:center}:host ::ng-deep .modal-component-block .modal-block{transition:transform .2s ease-in-out,height .2s ease-in-out,-webkit-transform .2s ease-in-out;transition-delay:.2s}:host ::ng-deep .modal-component-block.style-modal-fixed.modal-open .modal-block{height:600px}:host ::ng-deep .modal-component-block.modal-open{opacity:1;height:100%}:host ::ng-deep .modal-component-block.modal-open .modal-backdrop{opacity:.8}:host ::ng-deep .modal-component-block.modal-open .modal-block{opacity:1;-webkit-transform:scale(1);transform:scale(1)}:host ::ng-deep .modal-component-block.modal-close{width:0;left:50%;top:50%;height:0}:host ::ng-deep .modal-component-block.modal-close .modal-backdrop{opacity:0}:host ::ng-deep .modal-component-block.modal-close .modal-block{opacity:0;-webkit-transform:scale(0);transform:scale(0)}:host ::ng-deep .modal-component-block.modal-close .modal-container-block{height:0}:host ::ng-deep .modal-component-block .modal-backdrop{transition:.1s ease-in-out;background-color:rgba(0,0,0,.4);position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}:host ::ng-deep .modal-block{max-width:500px;position:relative;z-index:100;max-width:500px;max-height:600px;width:100%;background-color:#fff;display:flex;padding:30px 20px;margin:0 auto;text-align:left;border-radius:5px}:host ::ng-deep .modal-block.style-fix-height{height:600px;overflow-x:hidden}:host ::ng-deep .modal-block.style-btn-fixed{padding-bottom:calc(48px + 20px)}:host ::ng-deep .modal-block.style-btn-fixed .modal-content-block{margin-bottom:calc(48px + 20px)}:host ::ng-deep .modal-block .nx-modal__container .nx-modal__content{position:relative}:host ::ng-deep .modal-block .modal-container-block{display:flex;flex-direction:column;width:100%}:host ::ng-deep .modal-block .modal-header-block{display:flex;width:100%;justify-content:center;align-items:center;flex-shrink:0;flex-wrap:wrap}:host ::ng-deep .modal-block .modal-content-block{display:flex;width:100%;overflow-y:auto;overflow-x:hidden;flex-wrap:wrap;align-content:start}:host ::ng-deep .modal-block .modal-content-block>*{width:100%}:host ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:48px}@media (max-width:767px){:host ::ng-deep .modal-component-block .modal-all-block.type-full-page{padding-left:0;padding-right:0}:host ::ng-deep .modal-component-block.style-modal-fixed.modal-open .type-full-page .modal-block{height:100%}:host ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:68px}}:host ::ng-deep .modal-block .modal-btm-block{display:flex;width:100%;flex-shrink:0;flex-wrap:wrap;border-radius:0 0 5px 5px}:host ::ng-deep .modal-header-block .modal-btn-close{position:absolute;top:10px;right:10px;font-size:40px;color:#c2c2c2}:host ::ng-deep .modal-header-block .modal-btn-close img{width:40px}:host ::ng-deep .modal-content-block .modal-content-detail{height:100%;overflow-x:hidden}:host ::ng-deep .modal-content-block.layout-full{margin-left:-20px;margin-right:-20px}:host ::ng-deep .modal-content-block.layout-full .space-normal{margin-left:20px;margin-right:20px}:host ::ng-deep .modal-content-block.layout-full.style-fixed{margin-bottom:78px}:host ::ng-deep .modal-content-block .text-detail-block{padding-top:20px}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon{display:flex;padding-bottom:30px}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block{max-width:40px;width:100%}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block img{max-width:100%}:host ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .text-block{padding-left:10px;box-sizing:border-box;max-width:calc(100% - 50px);width:100%;flex-grow:0;flex-shrink:0;flex-basis:calc(100% - 50px)}:host ::ng-deep .modal-content-block app-ui-detection-scroll{display:inline-block;height:100%}:host ::ng-deep .modal-content-block app-ui-detection-scroll .detection-scroll-content{height:100%}@media (max-width:767px){:host ::ng-deep .modal-content-block .text-detail-block{padding-top:0}}:host ::ng-deep .modal-btm-block{display:block;bottom:0;text-align:center;left:0;right:0;background-color:#fff;z-index:101;width:100%;position:relative}:host ::ng-deep .modal-btm-block:empty{display:none}:host ::ng-deep .modal-btm-block app-ui-btn-layout{padding:0;width:100%}:host ::ng-deep .modal-btm-block app-ui-btn-layout app-ui-btn:last-of-type{margin-right:0}:host ::ng-deep .modal-btm-block.btn-style-fixed{display:block;position:fixed;bottom:0;text-align:center;z-index:2;width:100%;left:0;right:0;background-color:#fff;padding:10px;box-shadow:-1px -2px 6px 2px rgba(207,207,207,.2)}:host ::ng-deep .modal-btm-block.btn-style-fixed.style1 app-ui-btn-layout,:host ::ng-deep .modal-btm-block.btn-style-fixed.style2 app-ui-btn-layout,:host ::ng-deep .modal-btm-block.btn-style-fixed.style3 app-ui-btn-layout{padding-top:0;margin-top:0;margin-bottom:0}:host ::ng-deep .modal-btm-block .btm-set-block{display:block;justify-content:center;position:relative;width:100%}:host ::ng-deep .modal-btm-block .btm-set-block .ps-text{position:absolute;left:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host ::ng-deep .modal-btm-block.style1 app-ui-btn-layout{padding-top:30px;margin-bottom:30px}:host ::ng-deep .modal-btm-block.style2 app-ui-btn-layout{margin-bottom:18px}:host ::ng-deep .modal-btm-block.style3 app-ui-btn-layout{margin-bottom:0}:host ::ng-deep .ps-text{font-size:.75rem;color:#414141}:host ::ng-deep .text-block .text-detail{display:inline-block}:host ::ng-deep p{padding:0;margin:0}:host ::ng-deep .desc,:host ::ng-deep .desc-normal{font-size:1rem;color:#414141;padding-bottom:5px}:host ::ng-deep .desc{font-weight:700}:host ::ng-deep p.desc{padding-bottom:0}:host ::ng-deep .desc-normal{font-weight:400}:host ::ng-deep .desc-sm{font-size:.875rem;line-height:20px;text-align:left}:host ::ng-deep .desc-line-lg{line-height:28px}:host ::ng-deep .textarea-block{display:inline-block;width:100%}:host ::ng-deep .textarea-block textarea{display:inline-block;width:100%;background-color:#fcfcfc;border-radius:5px;padding:20px;border:1px solid #e5e5ee;font-size:1rem;resize:none;font-family:\"Allianz Neo\"}:host ::ng-deep .textarea-block textarea:focus{outline:0}:host ::ng-deep .textarea-block textarea ::-webkit-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea input::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}:host ::ng-deep .textarea-block textarea textarea::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}:host ::ng-deep .textarea-block textarea ::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea :-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host ::ng-deep .textarea-block textarea ::-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}:host .modal-all-block .modal-block{padding:48px 0 0;overflow-y:auto;overflow-x:hidden}:host .modal-all-block .modal-block.style-fix-height{overflow-y:hidden}"]
                }] }
    ];
    UiModalStyleCustComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: ModalManager }
    ]; };
    UiModalStyleCustComponent.propDecorators = {
        isPopupOpenChange: [{ type: Output }],
        close: [{ type: Output }],
        modalId: [{ type: Input }],
        isContnetFull: [{ type: Input }],
        typeBtn: [{ type: Input }],
        isHasBtmBlock: [{ type: Input }],
        isHeightFix: [{ type: Input }],
        styleHeightFix: [{ type: Input }],
        isPopupOpen: [{ type: Input }],
        modalBlock: [{ type: ViewChild, args: ['modalBlock',] }]
    };
    return UiModalStyleCustComponent;
}(UiModalBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiModalStyleFeedbackComponent = /** @class */ (function () {
    function UiModalStyleFeedbackComponent(changeDector) {
        this.changeDector = changeDector;
        this.hasAutoDisappear = true;
        this.isPopupOpenChange = new EventEmitter();
        this._isPopupOpen = false;
    }
    Object.defineProperty(UiModalStyleFeedbackComponent.prototype, "isPopupOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isPopupOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.isPopupOpen != value) {
                if (value) {
                    this.autoDisappear();
                    this._isPopupOpen = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiModalStyleFeedbackComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiModalStyleFeedbackComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // window.setTimeout(() => {
        //   this.modalBlockFeedback.nativeElement.style.visibility = 'visible';
        // }, 1100);
        var _this = this;
        setInterval((/**
         * @return {?}
         */
        function () {
            _this.changeDector.markForCheck();
        }), 200);
    };
    /**
     * @return {?}
     */
    UiModalStyleFeedbackComponent.prototype.autoDisappear = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            console.log(_this);
            console.log('auto disapper timeout 2');
            _this._isPopupOpen = false;
            _this.changeDector.detectChanges();
            _this.isPopupOpenChange.emit(_this.isPopupOpen);
        }), 2000);
    };
    UiModalStyleFeedbackComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-modal-style-feedback',
                    template: "<div #modalBlockFeedback class=\"modal-block\" [ngClass]=\"[isPopupOpen ? 'animate-fadeInOut' : '']\">\n    <div class=\"modal-style-feedback\">\n        <div class=\"modal-img-block\">\n          <ng-content select=\"[textType=modal-img-detail]\"></ng-content>\n        </div>\n        <div class=\"modal-content-block\">\n          <p class=\"modal-desc\">\n            <ng-content select=\"[textType=modal-content-detail]\"></ng-content>\n          </p>\n        </div>\n    </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".modal-block{text-align:center;opacity:0;position:fixed;width:100vw;height:100vh;top:0;bottom:0;left:0;right:0;align-items:center;justify-content:center;visibility:hidden;z-index:-999}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.modal-block ::ng-deep app-ui-btn-layout .btn-block{margin-bottom:0}.modal-block ::ng-deep .modal-component-block{position:fixed;height:100vh;width:100vw;overflow:hidden;z-index:99;display:flex;justify-content:center;align-items:center;top:0;left:0;opacity:0}.modal-block ::ng-deep .modal-component-block.layout-full .modal-block{padding:30px 0 0;margin:0 auto}.modal-block ::ng-deep .modal-component-block.layout-full .modal-block .modal-content-block.style-fixed{margin-bottom:68px}.modal-block ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block{margin-bottom:0}.modal-block ::ng-deep .modal-component-block.style-no-btm .modal-block .modal-content-block.style-fixed{margin-bottom:0}.modal-block ::ng-deep .modal-component-block.style-no-btm .modal-btm-block{display:none!important}.modal-block ::ng-deep .modal-component-block.style-btm-no-space .modal-block .modal-content-block.style-fixed{margin-bottom:68px}.modal-block ::ng-deep .modal-component-block .modal-all-block{width:100%;padding-left:10px;padding-right:10px;box-sizing:border-box;text-align:center}.modal-block ::ng-deep .modal-component-block .modal-block{transition:transform .2s ease-in-out,height .2s ease-in-out,-webkit-transform .2s ease-in-out;transition-delay:.2s}.modal-block ::ng-deep .modal-component-block.style-modal-fixed.modal-open .modal-block{height:600px}.modal-block ::ng-deep .modal-component-block.modal-open{opacity:1;height:100%}.modal-block ::ng-deep .modal-component-block.modal-open .modal-backdrop{opacity:.8}.modal-block ::ng-deep .modal-component-block.modal-open .modal-block{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.modal-block ::ng-deep .modal-component-block.modal-close{width:0;left:50%;top:50%;height:0}.modal-block ::ng-deep .modal-component-block.modal-close .modal-backdrop{opacity:0}.modal-block ::ng-deep .modal-component-block.modal-close .modal-block{opacity:0;-webkit-transform:scale(0);transform:scale(0)}.modal-block ::ng-deep .modal-component-block.modal-close .modal-container-block{height:0}.modal-block ::ng-deep .modal-component-block .modal-backdrop{transition:.1s ease-in-out;background-color:rgba(0,0,0,.4);position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.modal-block ::ng-deep .modal-block{position:relative;z-index:100;max-width:500px;max-height:600px;width:100%;background-color:#fff;display:flex;padding:30px 20px;margin:0 auto;text-align:left;border-radius:5px}.modal-block ::ng-deep .modal-block.style-fix-height{height:600px;overflow-x:hidden}.modal-block ::ng-deep .modal-block.style-btn-fixed{padding-bottom:calc(48px + 20px)}.modal-block ::ng-deep .modal-block.style-btn-fixed .modal-content-block{margin-bottom:calc(48px + 20px)}.modal-block ::ng-deep .modal-block .nx-modal__container .nx-modal__content{position:relative}.modal-block ::ng-deep .modal-block .modal-container-block{display:flex;flex-direction:column;width:100%}.modal-block ::ng-deep .modal-block .modal-header-block{display:flex;width:100%;justify-content:center;align-items:center;flex-shrink:0;flex-wrap:wrap}.modal-block ::ng-deep .modal-block .modal-content-block{display:flex;width:100%;overflow-y:auto;overflow-x:hidden;flex-wrap:wrap;align-content:start}.modal-block ::ng-deep .modal-block .modal-content-block>*{width:100%}.modal-block ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:48px}@media (max-width:767px){.modal-block ::ng-deep .modal-component-block .modal-all-block.type-full-page{padding-left:0;padding-right:0}.modal-block ::ng-deep .modal-component-block.style-modal-fixed.modal-open .type-full-page .modal-block{height:100%}.modal-block ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:68px}}.modal-block ::ng-deep .modal-block .modal-btm-block{display:flex;width:100%;flex-shrink:0;flex-wrap:wrap;border-radius:0 0 5px 5px}.modal-block ::ng-deep .modal-header-block .modal-btn-close{position:absolute;top:10px;right:10px;font-size:40px;color:#c2c2c2}.modal-block ::ng-deep .modal-header-block .modal-btn-close img{width:40px}.modal-block ::ng-deep .modal-content-block .modal-content-detail{height:100%;overflow-x:hidden}.modal-block ::ng-deep .modal-content-block.layout-full{margin-left:-20px;margin-right:-20px}.modal-block ::ng-deep .modal-content-block.layout-full .space-normal{margin-left:20px;margin-right:20px}.modal-block ::ng-deep .modal-content-block.layout-full.style-fixed{margin-bottom:78px}.modal-block ::ng-deep .modal-content-block .text-detail-block{padding-top:20px}.modal-block ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon{display:flex;padding-bottom:30px}.modal-block ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block{max-width:40px;width:100%}.modal-block ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .img-block img{max-width:100%}.modal-block ::ng-deep .modal-content-block .text-detail-block .img-text-block-horizon .text-block{padding-left:10px;box-sizing:border-box;max-width:calc(100% - 50px);width:100%;flex-grow:0;flex-shrink:0;flex-basis:calc(100% - 50px)}.modal-block ::ng-deep .modal-content-block app-ui-detection-scroll{display:inline-block;height:100%}.modal-block ::ng-deep .modal-content-block app-ui-detection-scroll .detection-scroll-content{height:100%}@media (max-width:767px){.modal-block ::ng-deep .modal-content-block .text-detail-block{padding-top:0}}.modal-block ::ng-deep .modal-btm-block{display:block;bottom:0;text-align:center;left:0;right:0;background-color:#fff;z-index:101;width:100%;position:relative}.modal-block ::ng-deep .modal-btm-block:empty{display:none}.modal-block ::ng-deep .modal-btm-block app-ui-btn-layout{padding:0;width:100%}.modal-block ::ng-deep .modal-btm-block app-ui-btn-layout app-ui-btn:last-of-type{margin-right:0}.modal-block ::ng-deep .modal-btm-block.btn-style-fixed{display:block;position:fixed;bottom:0;text-align:center;z-index:2;width:100%;left:0;right:0;background-color:#fff;padding:10px;box-shadow:-1px -2px 6px 2px rgba(207,207,207,.2)}.modal-block ::ng-deep .modal-btm-block.btn-style-fixed.style1 app-ui-btn-layout,.modal-block ::ng-deep .modal-btm-block.btn-style-fixed.style2 app-ui-btn-layout,.modal-block ::ng-deep .modal-btm-block.btn-style-fixed.style3 app-ui-btn-layout{padding-top:0;margin-top:0;margin-bottom:0}.modal-block ::ng-deep .modal-btm-block .btm-set-block{display:block;justify-content:center;position:relative;width:100%}.modal-block ::ng-deep .modal-btm-block .btm-set-block .ps-text{position:absolute;left:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.modal-block ::ng-deep .modal-btm-block.style1 app-ui-btn-layout{padding-top:30px;margin-bottom:30px}.modal-block ::ng-deep .modal-btm-block.style2 app-ui-btn-layout{margin-bottom:18px}.modal-block ::ng-deep .modal-btm-block.style3 app-ui-btn-layout{margin-bottom:0}.modal-block ::ng-deep .ps-text{font-size:.75rem;color:#414141}.modal-block ::ng-deep .text-block .text-detail{display:inline-block}.modal-block ::ng-deep p{padding:0;margin:0}.modal-block ::ng-deep .desc,.modal-block ::ng-deep .desc-normal{font-size:1rem;color:#414141;padding-bottom:5px}.modal-block ::ng-deep .desc{font-weight:700}.modal-block ::ng-deep p.desc{padding-bottom:0}.modal-block ::ng-deep .desc-normal{font-weight:400}.modal-block ::ng-deep .desc-sm{font-size:.875rem;line-height:20px;text-align:left}.modal-block ::ng-deep .desc-line-lg{line-height:28px}.modal-block ::ng-deep .textarea-block{display:inline-block;width:100%}.modal-block ::ng-deep .textarea-block textarea{display:inline-block;width:100%;background-color:#fcfcfc;border-radius:5px;padding:20px;border:1px solid #e5e5ee;font-size:1rem;resize:none;font-family:\"Allianz Neo\"}.modal-block ::ng-deep .textarea-block textarea:focus{outline:0}.modal-block ::ng-deep .textarea-block textarea ::-webkit-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}.modal-block ::ng-deep .textarea-block textarea input::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}.modal-block ::ng-deep .textarea-block textarea textarea::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px;opacity:1}.modal-block ::ng-deep .textarea-block textarea ::-moz-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}.modal-block ::ng-deep .textarea-block textarea :-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}.modal-block ::ng-deep .textarea-block textarea ::-ms-input-placeholder{color:#c2c2c2;font-size:.875rem;font-family:inherit;letter-spacing:.2px}.modal-block .modal-style-feedback{position:absolute;display:inline-block;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:rgba(0,0,0,.7);color:#fff;min-width:120px;max-width:120px;min-height:120px;border-radius:10px;padding:30px 17px 17px}.modal-block .modal-style-feedback .modal-img-block{text-align:center}.modal-block .modal-style-feedback .modal-img-block img{display:inline-block;max-width:40px;max-height:40px;width:auto;height:auto}.modal-block .modal-style-feedback .modal-img-block ::ng-deep nx-icon{color:#fff;font-size:32px;font-weight:700}.modal-block .modal-style-feedback .modal-img-block ::ng-deep app-ui-refresh-icon .ui-refresh-spinner{top:0}.modal-block .modal-style-feedback .modal-img-block ::ng-deep app-ui-refresh-icon .ui-refresh-spinner>div:after{background-color:#fff!important}.modal-block .modal-style-feedback .modal-content-block{text-align:center;padding-top:10px}.modal-block .modal-style-feedback .modal-content-block .modal-desc{font-size:1rem;color:#fff;font-weight:700;padding:0;margin:0}.animate-fadeInOut{display:flex;animation:2.5s ease-out forwards fadeInOut;-webkit-animation:2.5s forwards fadeInOut;-webkit-delay:0s;z-index:100}@-webkit-keyframes fadeInOut{0%{visibility:visible;opacity:0}10%{opacity:1}95%{opacity:0}}@keyframes fadeInOut{0%{visibility:visible;opacity:0}10%{opacity:1}95%{opacity:0}}"]
                }] }
    ];
    UiModalStyleFeedbackComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiModalStyleFeedbackComponent.propDecorators = {
        hasAutoDisappear: [{ type: Input }],
        isPopupOpen: [{ type: Input }],
        isPopupOpenChange: [{ type: Output }],
        modalBlockFeedback: [{ type: ViewChild, args: ['modalBlockFeedback',] }]
    };
    return UiModalStyleFeedbackComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiModalStyleMenuComponent = /** @class */ (function () {
    function UiModalStyleMenuComponent(changeDector) {
        this.changeDector = changeDector;
        this._isPopupOpen = false;
        this.isPopupOpenChange = new EventEmitter();
        this.isFull = false;
        this.fadePos = 'bottom';
        this.outerMinusHeight = 0;
        this.close = new EventEmitter();
    }
    Object.defineProperty(UiModalStyleMenuComponent.prototype, "isPopupOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isPopupOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isPopupOpen = val;
            this.isPopupOpenChange.emit(this._isPopupOpen);
            /** @type {?} */
            var _this = this;
            if (val) {
                // calculate menu height;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var containerBlock_ele = _this.containerBlock.nativeElement;
                    containerBlock_ele.classList.remove('hidden');
                    // containerBlock_ele.style.height = (_this.windowHeight - _this.outerMinusHeight) + 'px';
                    // let contentBlock_ele = _this.contentBlock.nativeElement;
                    // let contentBlock_h = (_this.windowHeight - _this.outerMinusHeight - 50);
                    // contentBlock_ele.style.height = contentBlock_h + 'px';
                    // let headerBlock_ele = _this.headerBlock.nativeElement;
                    // let headerBlock_size = headerBlock_ele.getBoundingClientRect();
                    // let headerBlock_h = headerBlock_size.height;
                    // let btmBlock_ele = _this.btmBlock.nativeElement;
                    // let btmBlock_size = btmBlock_ele.getBoundingClientRect();
                    // let btmBlock_h = btmBlock_size.height;
                    // let detailBlock_ele = _this.detailBlock.nativeElement;
                    // if (_this.isFull) {
                    //   detailBlock_ele.style.height = (_this.windowHeight - headerBlock_h - btmBlock_h - 45) + 'px';
                    // } else {
                    //   detailBlock_ele.style.height = (contentBlock_h - headerBlock_h - btmBlock_h - 32) + 'px';
                    // }
                }), 100); // end setTimeout: calculate content height
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var containerBlock_ele = _this.containerBlock.nativeElement;
                    // containerBlock_ele.style.display = 'none';
                    containerBlock_ele.classList.add('hidden');
                }), 100); // 修復mantis-->漢堡條關閉後馬上再打開，會自己彈回去
            }
        } // end set isPopupOpen
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiModalStyleMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        this.windowHeight = window.innerHeight;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this_1.containerBlock.nativeElement.style.visibility = 'visible';
        }), 1100);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiModalStyleMenuComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowHeight = event.target.innerHeight;
    };
    /**
     * @return {?}
     */
    UiModalStyleMenuComponent.prototype.closeHandler = /**
     * @return {?}
     */
    function () {
        this.isPopupOpen = false;
        this.changeDector.markForCheck();
        this.close.emit(false);
    }; // end closeHandler
    UiModalStyleMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-modal-style-menu',
                    template: "<div #containerBlock class=\"ui-modal-block\"\n  [ngClass]=\"[this.isPopupOpen ? 'animate-fadeIn' : 'animate-fadeOut'\n    , this.isFull ? 'full' : ''\n    , this.fadePos ]\">\n  <div class=\"ui-modal-mask\" (click)=\"closeHandler()\"></div>\n  <div class=\"ui-modal-position\">\n      <div #contentBlock class=\"ui-modal-content-block\">\n        <!-- title -->\n        <div #headerBlock class=\"ui-modal-header\">\n          <button (click)=\"closeHandler()\" class=\"ui-modal-close-btn\" type=\"button\">\n            <nx-icon name=\"close-circle\"></nx-icon>\n          </button>\n          <h2 class=\"ui-modal-title\">\n            <ng-content select=\"[popupBlock=popup-title]\"></ng-content>\n          </h2>\n        </div>\n        <!-- end of title -->\n        <!-- content -->\n        <div #detailBlock class=\"ui-modal-content\">\n          <ng-content select=\"[popupBlock=popup-content]\"></ng-content>\n        </div>\n        <!-- end of content -->\n        <!-- btm -->\n        <div #btmBlock class=\"ui-modal-btm\">\n          <ng-content select=\"[popupBlock=popup-btm]\"></ng-content>\n        </div>\n        <!-- end of btm -->\n        <!-- <div class=\"safe-area-block\"></div> -->\n      </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@supports (top:constant(safe-area-inset-top)){.safe-area-block{height:constant(safe-area-inset-bottom)}.ui-modal-block .ui-modal-position{margin-top:constant(safe-area-inset-top)}}@supports (top:env(safe-area-inset-top)){.safe-area-block{height:env(safe-area-inset-bottom)}}.ui-modal-block{display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;opacity:0;position:fixed;top:0;bottom:0;left:0;right:0;z-index:100;visibility:hidden}.ui-modal-block.hidden{display:none}.ui-modal-block .ui-modal-mask{width:100%;height:100%;position:absolute;left:0;top:0;z-index:-1;background-color:rgba(0,0,0,.35)}.ui-modal-block .ui-modal-position{display:inline-block;width:100%;position:absolute;top:18px;left:50%;z-index:20;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@supports (top:env(safe-area-inset-top)){.ui-modal-block .ui-modal-position{margin-top:env(safe-area-inset-top)}}.ui-modal-block .ui-modal-content-block{max-width:calc(100vw - 20px);max-height:calc(100vh - 50px);height:calc(100vh - 55px - 18px - 30px);margin:0 auto;padding:15px;overflow-x:hidden;overflow-y:auto;display:flex;flex-direction:column;justify-content:space-between;position:relative;border:1px solid rgba(0,0,0,.3);border-radius:5px;background:#fff;box-shadow:0 1px 16px 0 rgba(0,0,0,.2),0 2px 8px 0 rgba(0,0,0,.14),0 4px 8px -1px rgba(0,0,0,.12)}.ui-modal-block .ui-modal-header{padding-bottom:20px}.ui-modal-block .ui-modal-title{font-size:1rem;font-weight:700;line-height:1.75;letter-spacing:.2px;text-align:center;color:#414141}.ui-modal-block .ui-modal-close-btn{display:inline-block;margin:0;padding:0;border:0;position:absolute;top:5px;right:2px;font-size:24px;line-height:1rem;color:#007ab3;background:0 0}.ui-modal-block .ui-modal-content{overflow-y:auto;flex:2}.ui-modal-block.full .ui-modal-position{top:0;left:0;-webkit-transform:none;transform:none}.ui-modal-block.full .ui-modal-content-block{max-width:100vw;max-height:100vh;padding:25px 25px 20px;border:0;border-radius:0}@supports (top:constant(safe-area-inset-top)){.ui-modal-block.full .ui-modal-content-block{height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom))!important}}@supports (top:env(safe-area-inset-top)){.ui-modal-block.full .ui-modal-content-block{height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))!important}}.ui-modal-block.full .ui-modal-close-btn{top:20px;right:15px}.animate-fadeIn{display:flex;animation:.3s forwards fadeIn;-webkit-animation:.3s forwards fadeIn;-webkit-delay:0s}.animate-fadeIn.bottom{animation:.3s forwards bottomToTop;-webkit-animation:.3s forwards bottomToTop;-webkit-delay:0s}.animate-fadeIn.right{animation:.3s forwards rightToleft;-webkit-animation:.3s forwards rightToleft;-webkit-delay:0s}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes bottomToTop{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes bottomToTop{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes rightToleft{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes rightToleft{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.animate-fadeOut{animation:.3s forwards fadeOut;-webkit-animation:.3s forwards fadeOut;-webkit-delay:0s}.animate-fadeOut.bottom{animation:.3s forwards topToBottom;-webkit-animation:.3s forwards topToBottom;-webkit-delay:0s}.animate-fadeOut.right{animation:.3s forwards leftToRight;-webkit-animation:.3s forwards leftToRight;-webkit-delay:0s}@-webkit-keyframes fadeOut{0%,100%{opacity:0}}@keyframes fadeOut{0%,100%{opacity:0}}@-webkit-keyframes topToBottom{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes topToBottom{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}}@-webkit-keyframes leftToRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes leftToRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}}"]
                }] }
    ];
    UiModalStyleMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiModalStyleMenuComponent.propDecorators = {
        isPopupOpen: [{ type: Input }],
        isPopupOpenChange: [{ type: Output }],
        isFull: [{ type: Input }],
        fadePos: [{ type: Input }],
        outerMinusHeight: [{ type: Input }],
        close: [{ type: Output }],
        containerBlock: [{ type: ViewChild, args: ['containerBlock',] }],
        contentBlock: [{ type: ViewChild, args: ['contentBlock',] }],
        headerBlock: [{ type: ViewChild, args: ['headerBlock',] }],
        detailBlock: [{ type: ViewChild, args: ['detailBlock',] }],
        btmBlock: [{ type: ViewChild, args: ['btmBlock',] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UiModalStyleMenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiProgressComponent = /** @class */ (function () {
    function UiProgressComponent() {
        this._value = 0;
        this._valueFrom = 0.06;
        this._isFinishValueAni = false; // if progress animate finish then true
        this.counto = 0;
        this.duration = 2;
        this._theme = "main";
        this.valueFromChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.onCountoEnd = new EventEmitter();
        this.bgValue = 0;
        this.flagValue = -1;
        this.flagText = '';
        this.isShowValue = false;
        this.isShowSideValue = false;
        this.styleTag = '';
        this.styleSize = ''; // '' , lg, max
        //@Input() theme: string = 'main';
        this.isTextTop = false;
        this.isStartValueZero = true;
        this.styleSideValue = '';
        this.styleTheme = "color-main";
    }
    Object.defineProperty(UiProgressComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._valueFrom = this._value;
            this.valueFromChange.emit(this._valueFrom); // give 
            this._value = val;
            console.log("progress percent _value:", this._value);
            this.duration = this._value == 1 ? 0.4 : 2;
            console.log('duration,', this.duration);
            console.log('countto');
            this.valueChange.emit(this._value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiProgressComponent.prototype, "theme", {
        get: /**
         * @return {?}
         */
        function () {
            return this._theme;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log("setting color theme");
            this._theme = value;
            this.styleTheme = ' color-' + this._theme + ' ';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiProgressComponent.prototype, "valueFrom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._valueFrom;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._valueFrom = val;
            this.valueFromChange.emit(this._valueFrom);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleTag = this.isShowValue ? 'active ' : ' ';
        this.styleSideValue = this.isShowSideValue ? ' style-has-side-value ' : '';
        this.styleTextTop = this.isTextTop ? 'style-has-text-top' : '';
        console.log('===== ' + this.styleTheme);
    };
    /**
     * @return {?}
     */
    UiProgressComponent.prototype.whenCountoEnd = /**
     * @return {?}
     */
    function () {
        console.log('in  progress finish');
        this.onCountoEnd.emit();
    };
    UiProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-progress',
                    template: "<div class=\"progress-whole-block \" [ngClass]=\"[styleTag, styleSize, styleSideValue, styleTheme, styleTextTop]\">\n    <div class=\"progress-text\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"progress-value-block\">\n        <div *ngIf=\"isShowValue && isTextTop\" class=\"progress-value-top\">\n          <span class=\"text\" *ngIf=\"textOnPercent != ''\" >{{textOnPercent}}</span>\n          <span class=\"num font-size_h2\" counto [step]=\"1\" [countTo]=\"value*100 | number:'1.0-0' \" [countFrom]=\"valueFrom*100 | number:'1.0-0'\" [duration]=\"duration\" (countoChange)=\"counto = $event\" (countoEnd)=\"whenCountoEnd()\">{{counto | number:'1.0-0' }}</span>  \n          <span class=\"unit\">%</span>  \n        </div>\n        <div class=\"progress-block\">\n            <div class=\"ui-progress__track\">\n              <div class=\"ui-progress__bg-indicator\" [ngStyle]=\"{width: (bgValue*100)+'%'}\"></div>\n              <!-- text top number will run than progress use this -->\n              <div *ngIf=\"isShowValue && isTextTop\"  class=\"ui-progress__indicator\" [ngStyle]=\"{width: (counto | number:'1.0-0')+'%'}\"></div>\n              <!-- text on the bottom number is static, than progress color use this -->\n              <div *ngIf=\"!isTextTop\" class=\"ui-progress__indicator\" [ngStyle]=\"{width: (value*100)+'%'}\"></div>\n              <div *ngIf=\"flagValue>=0\" class=\"ui-progress__flag\" [ngStyle]=\"{left:'calc('+flagValue*100+'% - 2px)'}\">\n                <div *ngIf=\"flagValue>=0\" class=\"ui-progress__flag-text\">{{flagText}}</div>\n              </div>\n            </div>\n          </div>\n        <div *ngIf=\"isShowValue && !isTextTop\" class=\"progress-value\">\n          <span *ngIf=\"textOnPercent != ''\" class=\"text\">{{textOnPercent}}</span>\n          {{value*100 | number:'1.0-2'}}%\n        </div>\n    </div>\n</div>\n\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.progress-text{color:#414141;font-size:.75rem;margin-bottom:2px}:host .progress-whole-block.lg .progress-block{height:15px}:host .progress-whole-block.lg .progress-block .ui-progress__flag-text{bottom:23px}:host .progress-whole-block.max .progress-block{height:29px;border-radius:20px}:host .progress-whole-block.max .progress-block .ui-progress__flag-text{bottom:37px}:host .progress-whole-block.max .progress-block .ui-progress__track{border-radius:20px}:host .progress-whole-block.max .progress-block .ui-progress__indicator:after{border-radius:20px}:host .progress-whole-block.style-has-side-value .progress-text{font-size:.875rem;margin-bottom:0}:host .progress-whole-block.style-has-text-top.active .progress-value-block{flex-direction:column;align-items:flex-end}:host .progress-whole-block.style-has-text-top.active .progress-value-block .progress-block{max-width:100%;padding-right:0;overflow:hidden}:host .progress-whole-block.style-has-text-top.active .progress-value-top{font-size:1rem;color:#fff;padding-bottom:6px}:host .progress-whole-block.style-has-text-top.active .progress-value-top .num{font-weight:700;padding-left:56px;padding-right:15px}@media (max-width:1023px){:host .progress-whole-block.style-has-text-top.active .progress-value-block{flex-direction:column-reverse}}:host .progress-whole-block.color-sub .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#007d8c,#b1dadd)}:host .progress-whole-block.color-sub .progress-text,:host .progress-whole-block.color-sub .progress-value{color:#007d8c}:host .progress-whole-block.color-main .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#003781,#0068b7)}:host .progress-whole-block.color-error1 .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#dc3149,#f9a6a6)}:host .progress-whole-block.color-error1 .progress-text,:host .progress-whole-block.color-error1 .progress-value{color:#dc3149}:host .progress-whole-block.color-error2 .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#f86200,#fcaa76)}:host .progress-whole-block.color-error2 .progress-text,:host .progress-whole-block.color-error2 .progress-value{color:#f86200}:host .progress-whole-block.color-pass .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#3da556,#88fea4)}:host .progress-whole-block.color-pass .progress-text,:host .progress-whole-block.color-pass .progress-value{color:#3da556}:host .progress-block{display:block;position:relative;transition:opacity 250ms linear;width:100%;height:10px;border-radius:7px}:host .progress-block .ui-progress__indicator{-webkit-transform-origin:top left;transform-origin:top left;height:100%;position:absolute;width:100%;transition:.5s;max-width:100%}:host .progress-block .ui-progress__indicator:after{border-radius:7px;transition:.8s;background:linear-gradient(to right,#003781,#0068b7);height:100%;position:absolute;width:100%;-webkit-animation:none;animation:none;content:'';display:inline-block;left:0}:host .progress-block .ui-progress__bg-indicator{-webkit-transform-origin:top left;transform-origin:top left;height:100%;position:absolute;width:100%}:host .progress-block .ui-progress__bg-indicator:after{border-radius:7px;height:100%;position:absolute;width:100%;-webkit-animation:none;animation:none;content:'';display:inline-block;left:0;background-color:#c2c2c2}:host .progress-block .ui-progress__track{background-color:#ececec;border-radius:7px;height:100%}:host .progress-block .ui-progress__flag{position:absolute;width:2px;height:100%;background-color:#c2c2c2}:host .progress-block .ui-progress__flag:after{height:6px;position:absolute;width:15px;-webkit-animation:none;animation:none;content:'';display:inline-block;left:-7px;top:-6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:6px solid #c2c2c2}:host .progress-block .ui-progress__flag-text{position:absolute;bottom:18px;left:-18px;min-width:40px;display:inline-block;text-align:center;color:#c2c2c2;font-size:.75rem}:host .progress-value{color:#414141}:host .active .progress-value-block{display:flex;align-items:center;justify-content:center}:host .active .progress-value-block .progress-value{max-width:46px;min-width:35px;width:100%;font-size:.875rem;line-height:normal;text-align:right;overflow:hidden}:host .active .progress-value-block .progress-block{max-width:calc(100% - 46px);width:100%;padding-right:10px}"]
                }] }
    ];
    UiProgressComponent.ctorParameters = function () { return []; };
    UiProgressComponent.propDecorators = {
        value: [{ type: Input }],
        theme: [{ type: Input }],
        valueFrom: [{ type: Input }],
        valueFromChange: [{ type: Output }],
        valueChange: [{ type: Output }],
        onCountoEnd: [{ type: Output }],
        bgValue: [{ type: Input }],
        flagValue: [{ type: Input }],
        flagText: [{ type: Input }],
        isShowValue: [{ type: Input }],
        isShowSideValue: [{ type: Input }],
        styleTag: [{ type: Input }],
        styleSize: [{ type: Input }],
        isTextTop: [{ type: Input }],
        textOnPercent: [{ type: Input }],
        isStartValueZero: [{ type: Input }]
    };
    return UiProgressComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { STEPSTYLETYPE } from './ui-rpogress-stepper-style-type-enum';
var UiProgressStepperStyleComponent = /** @class */ (function () {
    function UiProgressStepperStyleComponent() {
        this.stepContral = 0;
        this.activeStepCheck = false;
        this.stepType = STEPSTYLETYPE.STYLE_1;
        this.hasIcon = false;
        this.colorCode = '';
    }
    /**
     * @return {?}
     */
    UiProgressStepperStyleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiProgressStepperStyleComponent.prototype.contralType = /**
     * @return {?}
     */
    function () {
        if (this.stepType == STEPSTYLETYPE.STYLE_1) {
            return 'step-style-1';
        }
        if (this.stepType == STEPSTYLETYPE.STYLE_2) {
            return 'step-style-2';
        }
        if (this.stepType == STEPSTYLETYPE.STYLE_2_2) {
            return 'step-style-2-2';
        }
    };
    UiProgressStepperStyleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-progress-stepper-style',
                    template: "<div class=\"stepper2-contnet {{contralType()}}\" [ngClass]=\"{'hasIcon':hasIcon}\">\n  <!-- <nx-multi-stepper currentStepLabel='Step' selectedIndex='{{stepContral}}'>\n    <ng-container *ngFor='let step of stepData'>\n      <nx-step [label]='step'>\n      </nx-step>\n    </ng-container>\n  </nx-multi-stepper> -->\n  <ng-container *ngFor='let step of stepData;index as i'>\n    <app-ui-progress-stepper-style-child \n      [stepIndex]='i' [colorCode]=\"colorCode\"\n      [ngClass]=\"{'actived':i < stepContral || (i == stepContral && activeStepCheck),\n                  'active' :i == stepContral}\">\n      <ng-container *ngIf=\"i == stepContral && hasIcon\" icon>\n        <ng-content select=\"[activeIcon]\"></ng-content>\n      </ng-container>\n      <ng-container text>\n        {{step}}\n      </ng-container>\n    </app-ui-progress-stepper-style-child>\n\n    <div class=\"stap-line\" ><div class=\"stap-line-color\" [style.background-color]=\"colorCode\"></div></div>\n  </ng-container>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.stepper2-contnet.step-style-1{display:flex;justify-content:space-between;align-items:center}.stepper2-contnet.step-style-1 .stap-line{display:none;width:100%;height:4px;background-color:#ececec;margin-right:10px}.stepper2-contnet.step-style-1 .stap-line .stap-line-color{display:block;content:'';width:50%;height:100%;background-color:#007ab3}.stepper2-contnet.step-style-1 .stap-line:last-child{display:none}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child .step-content{display:flex;align-items:center}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon{display:flex;align-items:center;justify-content:center;width:24px;min-width:24px;height:24px;border-radius:50%;font-style:normal;font-stretch:normal;letter-spacing:.2px;text-align:center;border:2px solid #c2c2c2;background-color:transparent;margin-right:8px}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon .num{font-weight:700;font-size:.75rem;color:#c2c2c2}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-title{display:flex;align-items:center;font-size:1rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.125rem;letter-spacing:normal;color:#c2c2c2;white-space:nowrap;margin-right:5px}@media screen and (max-width:767px){.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-title{display:none}}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.active .step-icon,.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.actived .step-icon{border:2px solid #007ab3;background-color:#007ab3}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.active .step-icon .num,.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.actived .step-icon .num{color:#fff}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.active .step-icon.nextYear,.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.actived .step-icon.nextYear{border:2px solid #007d8c;background-color:#007d8c}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.active .step-title,.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.actived .step-title{color:#007ab3}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.active .step-title.nextYear,.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.actived .step-title.nextYear{color:#007d8c}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.active+.stap-line,.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.active+.stap-line:last-child{display:block}.stepper2-contnet.step-style-2,.stepper2-contnet.step-style-2-2{padding-left:80px;padding-right:80px;display:flex;justify-content:space-between}.stepper2-contnet.step-style-2 .stap-line,.stepper2-contnet.step-style-2-2 .stap-line{width:100%;height:4px;background-color:transparent;margin-top:6px;line-height:77px;background-repeat:repeat-x;background-size:10px 10px;background-position-y:center;background-position-x:3px;background-image:url(assets/img/icon-stap-line-dot.svg)}.stepper2-contnet.step-style-2 .stap-line:last-child,.stepper2-contnet.step-style-2-2 .stap-line:last-child{display:none}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child .step-content,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child .step-content{width:16px}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon{width:16px;height:16px;border-radius:50%;font-style:normal;font-stretch:normal;letter-spacing:.2px;text-align:center;border:2px solid #007ab3;background-color:#fff;margin-bottom:8px}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon .num,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon .num{font-weight:700;font-size:0;color:#fff}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon img,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon img{width:100%;height:100%}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-title,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-title{width:180px;font-size:1rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;text-align:center;margin-left:8px;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .icon-content img,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .icon-content img{width:34px;height:25px;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%);margin-left:8px;margin-top:-10px;position:absolute}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child.actived .step-icon,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child.actived .step-icon{background-color:#007ab3;background-size:16px 16px;background-position:center center;background-repeat:no-repeat;background-image:url(assets/img/icon-check-white.svg)}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child.actived:not(.active)+.stap-line,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child.actived:not(.active)+.stap-line{background-image:none;background-color:#007ab3}.stepper2-contnet.step-style-2-2.hasIcon,.stepper2-contnet.step-style-2.hasIcon{padding-top:35px}@media screen and (max-width:767px){.stepper2-contnet.step-style-2:not(.step-style-2-2){padding-left:0;padding-right:0}.stepper2-contnet.step-style-2:not(.step-style-2-2) ::ng-deep app-ui-progress-stepper-style-child .step-content .step-title{width:130px}.stepper2-contnet.step-style-2:not(.step-style-2-2) ::ng-deep app-ui-progress-stepper-style-child:first-child .step-title{margin-left:0;-webkit-transform:translateX(0);transform:translateX(0);text-align-last:left}.stepper2-contnet.step-style-2:not(.step-style-2-2) ::ng-deep app-ui-progress-stepper-style-child:nth-last-child(2) .step-title{text-align:right;margin-left:16px;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.stepper2-contnet.step-style-2:not(.step-style-2-2) ::ng-deep app-ui-progress-stepper-style-child:not(.active) .step-content .step-title{display:none}.stepper2-contnet.step-style-2-2{padding-left:40px;padding-right:40px}.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-title{width:90px}}"]
                }] }
    ];
    UiProgressStepperStyleComponent.ctorParameters = function () { return []; };
    UiProgressStepperStyleComponent.propDecorators = {
        stepContral: [{ type: Input }],
        stepData: [{ type: Input }],
        activeStepCheck: [{ type: Input }],
        stepType: [{ type: Input }],
        hasIcon: [{ type: Input }],
        colorCode: [{ type: Input }]
    };
    return UiProgressStepperStyleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiProgressStepperStyleChildComponent = /** @class */ (function () {
    function UiProgressStepperStyleChildComponent() {
        this.stepIndex = 0;
        this.stepTitle = '';
        this.colorCode = '';
    }
    /**
     * @return {?}
     */
    UiProgressStepperStyleChildComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiProgressStepperStyleChildComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-progress-stepper-style-child',
                    template: "<div class=\"step-content\">\n  <div class=\"icon-content\">\n      <ng-content select=\"[icon]\"></ng-content>\n  </div>\n  <div class=\"step-icon\" [class.nextYear]=\"colorCode\"><span class=\"num\">{{stepIndex+1}}</span></div>\n  <div class=\"step-title\" [class.nextYear]=\"colorCode\">\n    <ng-content select=\"[text]\"></ng-content>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    UiProgressStepperStyleChildComponent.ctorParameters = function () { return []; };
    UiProgressStepperStyleChildComponent.propDecorators = {
        stepIndex: [{ type: Input }],
        stepTitle: [{ type: Input }],
        colorCode: [{ type: Input }]
    };
    return UiProgressStepperStyleChildComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiProgressCircleComponent = /** @class */ (function () {
    function UiProgressCircleComponent(_location) {
        this._location = _location;
        this.value = 0;
        this.sizeR = 60;
        this.sizeStroke = 5;
    }
    /**
     * @return {?}
     */
    UiProgressCircleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    UiProgressCircleComponent.prototype.contentSize = /**
     * @return {?}
     */
    function () {
        return (this.sizeR * 2) + this.sizeStroke + 1;
    };
    /**
     * @return {?}
     */
    UiProgressCircleComponent.prototype.countR = /**
     * @return {?}
     */
    function () {
        return (this.sizeR * 2) * Math.PI;
    };
    /**
     * @return {?}
     */
    UiProgressCircleComponent.prototype.setNumber = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var circleNum = this.countR();
        /** @type {?} */
        var percen = Math.round(this.value * 100) / 100;
        return circleNum - (percen * circleNum);
    };
    /**
     * @return {?}
     */
    UiProgressCircleComponent.prototype.getUrl = /**
     * @return {?}
     */
    function () {
        if (this._location) {
            /** @type {?} */
            var urlLink = this._location.path();
            // console.log(urlLink.replace(/\//,''));
            return urlLink.replace(/\//, '');
        }
        else
            return '';
    };
    UiProgressCircleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-progress-circle',
                    template: "<div class=\"progress-content\">\n  <div class=\"svg-content\">\n    <svg id=\"svg\" [attr.width]=\"contentSize()\" \n                  [attr.height]=\"contentSize()\" \n                  viewPort=\"0 0 100 100\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n                  style=\"enable-background:new 0 0 100 100;\">\n                  \n      <defs>\n        <linearGradient id=\"myGradient\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"100\" spreadMethod=\"pad\">\n          <stop offset=\"0\"   style=\"stop-color:#0068b7\" stop-opacity=\"1\"/>\n          <stop offset=\"100\" style=\"stop-color:#003781\" stop-opacity=\"1\"/>\n        </linearGradient>\n      </defs>\n      <circle class=\"background-line\" \n              stroke-linecap=\"round\" \n              [attr.stroke-width]=\"sizeStroke\"\n              [attr.r]=\"sizeR\" \n              [attr.cx]=\"contentSize()/2\" \n              [attr.cy]=\"contentSize()/2\" fill=\"transparent\" \n              [attr.stroke-dasharray]=\"countR()\"></circle>\n      <circle class=\"progress\" \n              [attr.stroke]=\"'url('+getUrl()+'#myGradient)'\" \n              stroke-linecap=\"round\" \n              [attr.stroke-width]=\"sizeStroke\"\n              [attr.r]=\"sizeR\" \n              [attr.cx]=\"contentSize()/2\" \n              [attr.cy]=\"contentSize()/2\" fill=\"transparent\" \n              [attr.stroke-dasharray]=\"countR()\"\n              [attr.stroke-dashoffset]=\"setNumber()\"></circle>\n    </svg>\n  </div>\n  <div class=\"info-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-block}.progress-content{position:relative}.progress-content .svg-content{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.progress-content .svg-content svg{display:inline-block;vertical-align:bottom}.progress-content .background-line{stroke:#ececec}.progress-content .info-content{display:flex;justify-content:center;align-items:center;width:100%;height:100%;position:absolute;top:0;left:0}"]
                }] }
    ];
    UiProgressCircleComponent.ctorParameters = function () { return [
        { type: Location, decorators: [{ type: Optional }] }
    ]; };
    UiProgressCircleComponent.propDecorators = {
        value: [{ type: Input }],
        sizeR: [{ type: Input }],
        sizeStroke: [{ type: Input }]
    };
    return UiProgressCircleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiRefreshIconComponent = /** @class */ (function () {
    function UiRefreshIconComponent() {
    }
    /**
     * @return {?}
     */
    UiRefreshIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiRefreshIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-refresh-icon',
                    template: "<div class=\"ui-refresh-spinner\">\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-refresh-spinner{display:inline-block;width:40px;height:40px;position:relative;top:35px}.ui-refresh-spinner div{-webkit-transform-origin:20px 20px;transform-origin:20px 20px;-webkit-animation:1.2s linear infinite refresh-spinner;animation:1.2s linear infinite refresh-spinner}.ui-refresh-spinner div:after{content:\" \";display:block;position:absolute;top:0;left:18px;width:3px;height:10px;border-radius:20%;background:#414141}.ui-refresh-spinner div:nth-child(1){-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.ui-refresh-spinner div:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg);-webkit-animation-delay:-1s;animation-delay:-1s}.ui-refresh-spinner div:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-animation-delay:-.9s;animation-delay:-.9s}.ui-refresh-spinner div:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-.8s;animation-delay:-.8s}.ui-refresh-spinner div:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg);-webkit-animation-delay:-.7s;animation-delay:-.7s}.ui-refresh-spinner div:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg);-webkit-animation-delay:-.6s;animation-delay:-.6s}.ui-refresh-spinner div:nth-child(7){-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.ui-refresh-spinner div:nth-child(8){-webkit-transform:rotate(210deg);transform:rotate(210deg);-webkit-animation-delay:-.4s;animation-delay:-.4s}.ui-refresh-spinner div:nth-child(9){-webkit-transform:rotate(240deg);transform:rotate(240deg);-webkit-animation-delay:-.3s;animation-delay:-.3s}.ui-refresh-spinner div:nth-child(10){-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-.2s;animation-delay:-.2s}.ui-refresh-spinner div:nth-child(11){-webkit-transform:rotate(300deg);transform:rotate(300deg);-webkit-animation-delay:-.1s;animation-delay:-.1s}.ui-refresh-spinner div:nth-child(12){-webkit-transform:rotate(330deg);transform:rotate(330deg);-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes refresh-spinner{0%{opacity:1}100%{opacity:0}}@keyframes refresh-spinner{0%{opacity:1}100%{opacity:0}}"]
                }] }
    ];
    UiRefreshIconComponent.ctorParameters = function () { return []; };
    return UiRefreshIconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiSwitchContentComponent = /** @class */ (function () {
    function UiSwitchContentComponent() {
        this.showContent = 0;
    }
    /**
     * @return {?}
     */
    UiSwitchContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiSwitchContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-switch-content',
                    template: "<div class=\"switch-content\" [ngClass]=\"{'show-right':showContent==1}\">\n  <div class=\"move-content\">\n    <div class=\"left-content\" ><ng-content select=\"[left-content]\" ></ng-content></div>\n    <div class=\"right-content\"><ng-content select=\"[right-content]\"></ng-content></div>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".switch-content{overflow:hidden}.switch-content .move-content{display:flex;width:200%;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;-webkit-transform:translateX(0);transform:translateX(0)}.switch-content .move-content .left-content,.switch-content .move-content .right-content{width:50%;min-width:50%;max-width:50%}.switch-content .move-content .right-content{-webkit-transform:translateX(100%);transform:translateX(100%)}.switch-content:not(.show-right) .right-content{position:absolute}.switch-content.show-right .move-content{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.switch-content.show-right .left-content{position:absolute}"]
                }] }
    ];
    UiSwitchContentComponent.ctorParameters = function () { return []; };
    UiSwitchContentComponent.propDecorators = {
        showContent: [{ type: Input }]
    };
    return UiSwitchContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTabChildComponent = /** @class */ (function () {
    // isActive:boolean =true;
    function UiTabChildComponent() {
        this.onTabChildClick = new EventEmitter();
        this.id = '';
    }
    /**
     * @return {?}
     */
    UiTabChildComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiTabChildComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-tab-child',
                    template: "<ng-template #tabContent>\n  <div class=\"tab-child\">\n    <button class=\"tab-child-btn-style\" [id]=\"id\">\n        <ng-content></ng-content>\n    </button>\n  </div>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.tab-child{vertical-align:middle;text-align:center;height:100%}.tab-child .tab-child-btn-style{display:inline-block;width:100%;height:100%;outline:0;word-break:break-all;background-color:transparent}"]
                }] }
    ];
    UiTabChildComponent.ctorParameters = function () { return []; };
    UiTabChildComponent.propDecorators = {
        onTabChildClick: [{ type: Output }],
        tab: [{ type: ViewChild, args: [TemplateRef,] }],
        active: [{ type: Input }],
        idName: [{ type: Input }],
        id: [{ type: Input }]
    };
    return UiTabChildComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTabMoreComponent = /** @class */ (function () {
    function UiTabMoreComponent(changeDector) {
        this.changeDector = changeDector;
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    UiTabMoreComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiTabMoreComponent.prototype.isOpenTabSelect = /**
     * @return {?}
     */
    function () {
        this.isOpen = !this.isOpen;
    };
    /**
     * @return {?}
     */
    UiTabMoreComponent.prototype.closeTabSelect = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
        this.changeDector.markForCheck();
    };
    UiTabMoreComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-tab-more',
                    template: "<div class=\"ui-tab-more\">\n  <button class=\"more-btn\" (click)=\"isOpenTabSelect()\">\n    <img src=\"assets/img/icon-elipsis-h.svg\" alt=\"\">\n  </button>\n  <div class=\"more-content\" [ngClass]=\"{'show':isOpen}\">\n      <ng-content></ng-content>\n  </div>\n  \n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{width:100%;height:100%}:host ::ng-deep button,:host button{border:none;outline:0}.ui-tab-more{width:100%;height:100%;position:relative}.ui-tab-more .more-btn{width:100%;height:100%;background-color:transparent;position:relative}.ui-tab-more .more-btn img{width:24px;height:24px;position:absolute;top:3px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ui-tab-more .more-content{position:absolute;top:30px;box-shadow:0 0 16px 0 rgba(0,0,0,.23);right:0;display:none}.ui-tab-more .more-content.show{display:block}.ui-tab-more .more-content:before{display:block;content:'';width:18px;height:18px;background-color:#fff;position:absolute;right:6px;top:-4px;-webkit-transform:rotate(45deg);transform:rotate(45deg);box-shadow:0 0 15px 0 rgba(0,0,0,.15)}.ui-tab-more .more-content ::ng-deep .tab-child{position:relative}.ui-tab-more .more-content ::ng-deep .tab-child .tab-child-btn-style{min-width:140px;padding:15px;background-color:#fff;font-size:.875rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:.2px;text-align:center;color:#414141}.ui-tab-more .more-content ::ng-deep .tab-child.active .tab-child-btn-style{background-color:#f1f9fa}.ui-tab-more .more-content ::ng-deep .tab-child+.tab-child{border-top:1px solid #ececec}"]
                }] }
    ];
    UiTabMoreComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    return UiTabMoreComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTabStyle1Component = /** @class */ (function () {
    function UiTabStyle1Component(changeDector) {
        this.changeDector = changeDector;
        this.idContentName = '';
        this.onTabChildClick = new EventEmitter();
        this.handleOpen = false;
        this.tabIndex = 0;
        this.maxShow = 4;
    }
    /**
     * @return {?}
     */
    UiTabStyle1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} i
     * @return {?}
     */
    UiTabStyle1Component.prototype.handleClick = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        /** @type {?} */
        var oldIndex = this.tabIndex;
        this.tabIndex = i;
        this.onTabChildClick.emit(i);
        this.more_component.closeTabSelect();
        this.changeDector.markForCheck();
    };
    /**
     * @return {?}
     */
    UiTabStyle1Component.prototype.closeSelect = /**
     * @return {?}
     */
    function () {
        this.more_component.closeTabSelect();
        this.changeDector.markForCheck();
        // console.log('asasas');
    };
    /**
     * @return {?}
     */
    UiTabStyle1Component.prototype.getTabsArray = /**
     * @return {?}
     */
    function () {
        return this.tabs.toArray();
    };
    UiTabStyle1Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-tab-style1',
                    template: "<div class=\"ui-tab-style-1\" (mouseleave)=\"closeSelect()\" [ngClass]=\"{'tabToMore':getTabsArray().length>maxShow}\">\n  <div class=\"ui-tab-style-contnet\">\n    <ng-container *ngFor=\"let tab of getTabsArray().slice(0,maxShow);index as i\">\n      <div class=\"tab-child\" (click)=\"handleClick(i)\" [ngClass]=\"{'active':tabIndex==i}\">\n        <div *ngTemplateOutlet=\"tab.tab\"></div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"ui-tab-style-1-more\">\n    <app-ui-tab-more>\n      <ng-container *ngFor=\"let tab of tabs;index as i\">\n        <!-- <div  *ngIf=\"i>3\"> -->\n        <div *ngIf=\"i>=maxShow \" class=\"tab-child\" (click)=\"handleClick(i)\" [ngClass]=\"{'active':tabIndex==i}\">\n          <div *ngTemplateOutlet=\"tab.tab\"></div>\n        </div>\n        <!-- </div> -->\n      </ng-container>\n    </app-ui-tab-more>\n  </div>\n</div>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-tab-style-1{display:flex}.ui-tab-style-1.tabToMore .ui-tab-style-contnet{max-width:calc(100% - 30px)}.ui-tab-style-1.tabToMore .ui-tab-style-1-more{display:block}.ui-tab-style-1 .ui-tab-style-contnet{display:table;table-layout:fixed;width:100%}.ui-tab-style-1 .ui-tab-style-contnet .tab-child{display:table-cell;height:32px;vertical-align:middle}.ui-tab-style-1 .ui-tab-style-contnet .tab-child ::ng-deep .tab-child-btn-style{padding:6px 8px 17px;font-size:1.125rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:.2px;text-align:center;color:#007ab3;border:none;border-bottom:1px solid #007ab3}.ui-tab-style-1 .ui-tab-style-contnet .tab-child.active ::ng-deep .tab-child-btn-style{position:relative;font-weight:600}.ui-tab-style-1 .ui-tab-style-contnet .tab-child.active ::ng-deep .tab-child-btn-style:after{display:block;content:'';width:100%;height:3px;background-color:#007ab3;position:absolute;bottom:-2px;left:0}.ui-tab-style-1 .ui-tab-style-1-more{display:none;-webkit-transform:translateY(1px);transform:translateY(1px);min-width:30px;max-width:30px;height:30px}"]
                }] }
    ];
    UiTabStyle1Component.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiTabStyle1Component.propDecorators = {
        tabs: [{ type: ContentChildren, args: [UiTabChildComponent,] }],
        more_component: [{ type: ViewChild, args: [UiTabMoreComponent,] }],
        idContentName: [{ type: Input }],
        onTabChildClick: [{ type: Output }],
        tabIndex: [{ type: Input }],
        maxShow: [{ type: Input }]
    };
    return UiTabStyle1Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTabStyle2Component = /** @class */ (function (_super) {
    __extends(UiTabStyle2Component, _super);
    function UiTabStyle2Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UiTabStyle2Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-tab-style2',
                    template: "<div class=\"ui-tab-style-2\" (mouseleave)=\"closeSelect()\" [ngClass]=\"{'tabToMore':getTabsArray().length>maxShow}\">\n  <div class=\"ui-tab-style-contnet\">\n    <ng-container *ngFor=\"let tab of getTabsArray().slice(0,maxShow);index as i\">\n      <div class=\"tab-child\" (click)=\"handleClick(i)\" [ngClass]=\"{'active':tabIndex==i}\">\n          <div *ngTemplateOutlet=\"tab.tab\" ></div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"ui-tab-style-2-more\">\n    <app-ui-tab-more>\n      <ng-container *ngFor=\"let tab of tabs;index as i\">\n        <!-- <div  *ngIf=\"i>3\"> -->\n          <div *ngIf=\"i>=maxShow \" class=\"tab-child\" (click)=\"handleClick(i)\" [ngClass]=\"{'active':tabIndex==i}\">\n              <div *ngTemplateOutlet=\"tab.tab\"></div>\n          </div>\n        <!-- </div> -->\n      </ng-container>\n    </app-ui-tab-more>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-tab-style-2{display:flex}.ui-tab-style-2.tabToMore .ui-tab-style-contnet{max-width:calc(100% - 30px)}.ui-tab-style-2.tabToMore .ui-tab-style-2-more{display:block}.ui-tab-style-2 .ui-tab-style-contnet{display:table;table-layout:fixed;width:100%}.ui-tab-style-2 .ui-tab-style-contnet .tab-child{display:table-cell;height:32px;vertical-align:middle}.ui-tab-style-2 .ui-tab-style-contnet .tab-child ::ng-deep .tab-child-btn-style{padding:7px 8px;font-size:.75rem;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.14;letter-spacing:1px;text-align:center;color:#007ab3;border:2px solid #007ab3;border-right-width:0;border-radius:5px 0 0 5px}.ui-tab-style-2 .ui-tab-style-contnet .tab-child+.tab-child:not(:last-child) ::ng-deep .tab-child-btn-style{border-radius:0}.ui-tab-style-2 .ui-tab-style-contnet .tab-child:last-child ::ng-deep .tab-child-btn-style{border-radius:0 4px 4px 0;border-right-width:2px}.ui-tab-style-2 .ui-tab-style-contnet .tab-child.active ::ng-deep .tab-child-btn-style{color:#fff;background-color:#007ab3}.ui-tab-style-2 .ui-tab-style-2-more{display:none;-webkit-transform:translateY(1px);transform:translateY(1px);min-width:30px;max-width:30px;height:30px}"]
                }] }
    ];
    return UiTabStyle2Component;
}(UiTabStyle1Component));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTabPageComponent = /** @class */ (function () {
    function UiTabPageComponent(changeDector) {
        this.changeDector = changeDector;
        this.tabSwitchFirst = '';
        this.tabSwitchSecond = '';
        this.openTab = 0;
        this.onTabChildClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    UiTabPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiTabPageComponent.prototype.handleActive = /**
     * @return {?}
     */
    function () {
        this.openTab = this.openTab ? 0 : 1;
        this.onTabChildClick.emit(this.openTab);
        this.changeDector.markForCheck();
    };
    UiTabPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-tab-page',
                    template: "<button class=\"ui-tab-page\" [ngClass]=\"{'active':openTab}\" (click)=\"handleActive()\">\n  <div class=\"switch-btn\">\n    <div id = 'btn_switchFirst'>{{tabSwitchFirst}}</div>\n    \n  </div>\n  <div class=\"switch-btn\">\n    <div id = 'btn_switchSecond'>{{tabSwitchSecond}}</div>\n    \n  </div>\n</button>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{height:40px}.ui-tab-page{display:inline-flex;background-color:#007ab3;border:none;outline:0;padding:0;position:relative}.ui-tab-page,.ui-tab-page .switch-btn{border-radius:20px}.ui-tab-page:before{display:block;content:'';width:50%;height:100%;border-radius:20px;background-color:#fff;border:2px solid #007ab3;position:absolute;top:0;left:0;-webkit-transform:translateX(0);transform:translateX(0);transition:.3s}.ui-tab-page .switch-btn{display:flex;flex:1;align-items:center;justify-content:center;height:40px;min-width:90px;opacity:.35;font-size:1rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:18px;letter-spacing:normal;text-align:center;color:#fff;position:relative;transition:.3s;padding:0 10px}.ui-tab-page .switch-btn:first-child{opacity:1;font-weight:700;color:#007ab3}.ui-tab-page.active:before{-webkit-transform:translateX(100%);transform:translateX(100%)}.ui-tab-page.active .switch-btn:first-child{opacity:.35;font-weight:400;color:#fff}.ui-tab-page.active .switch-btn:last-child{opacity:1;font-weight:700;color:#007ab3}"]
                }] }
    ];
    UiTabPageComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiTabPageComponent.propDecorators = {
        tabSwitchFirst: [{ type: Input }],
        tabSwitchSecond: [{ type: Input }],
        openTab: [{ type: Input }],
        onTabChildClick: [{ type: Output }]
    };
    return UiTabPageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTableItemComponent = /** @class */ (function () {
    function UiTableItemComponent() {
        this.itemMinSize = 'md';
        this.heightLight = 'none'; // style1: blue, style2: red, style3: grey, style4: normal black
        this.wrap = true;
        this.textAlign = '';
        this.sort = false;
        this.eventIndex = 0;
        this.itemVal = '';
        this.id = '';
        this.textValue = '';
    }
    /**
     * @return {?}
     */
    UiTableItemComponent.prototype.setIndex = /**
     * @return {?}
     */
    function () {
        this.eventIndex++;
        return this.eventIndex;
    };
    /**
     * @return {?}
     */
    UiTableItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiTableItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // console.log('in afterviewinit');
        if (this.tableItem != undefined) {
            this.textValue = this.tableItem.nativeElement.textContent;
        }
        // this.tableItem.forEach(element => {
        //   this.textValue = element.nativeElement.innerHTML
        // });
        // console.log('tableItem', this.tableItem);
        // console.log('this.textValue',this.textValue);
    };
    UiTableItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-item',
                    template: "<ng-template let-item>\n  <div #tableItem class=\"table-item {{itemMinSize}} {{'heightLight'+'-'+heightLight}}\" [ngClass]=\"{'wrap-true'      :wrap}\" [id]=\"id\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-item{display:inline-block;font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:.2px;text-align:center;white-space:nowrap;word-break:break-word;text-align:inherit;color:inherit;-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual}.table-item.md{width:105px;min-width:105px}.table-item.sm{width:50px}.table-item.wrap-true{white-space:normal}.table-item.heightLight-style1{color:#007ab3}.table-item.heightLight-style2{color:#dc3149}.table-item.heightLight-style3{color:#767676}.table-item.heightLight-style4{color:#414141}.table-item.text-align-left{text-align:left}.table-item.text-align-right{text-align:right}"]
                }] }
    ];
    UiTableItemComponent.ctorParameters = function () { return []; };
    UiTableItemComponent.propDecorators = {
        itemMinSize: [{ type: Input }],
        heightLight: [{ type: Input }],
        wrap: [{ type: Input }],
        textAlign: [{ type: Input }],
        item: [{ type: ViewChild, args: [TemplateRef,] }],
        sort: [{ type: Input }],
        eventIndex: [{ type: Input }],
        itemVal: [{ type: Input }],
        id: [{ type: Input }],
        tableItem: [{ type: ViewChild, args: ['tableItem',] }]
    };
    return UiTableItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTableRowHeadComponent = /** @class */ (function () {
    function UiTableRowHeadComponent() {
    }
    /**
     * @return {?}
     */
    UiTableRowHeadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiTableRowHeadComponent.prototype.itemToArray = /**
     * @return {?}
     */
    function () {
        if (this.items != undefined) {
            // this.test();
            return this.items.toArray();
        }
    };
    /**
     * @return {?}
     */
    UiTableRowHeadComponent.prototype.test = /**
     * @return {?}
     */
    function () {
        console.log('table row item:', this.items);
        console.log('table row item array:', this.items.toArray());
    };
    UiTableRowHeadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-row-head',
                    template: "\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    UiTableRowHeadComponent.ctorParameters = function () { return []; };
    UiTableRowHeadComponent.propDecorators = {
        items: [{ type: ContentChildren, args: [UiTableItemComponent,] }]
    };
    return UiTableRowHeadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTableRowComponent = /** @class */ (function (_super) {
    __extends(UiTableRowComponent, _super);
    function UiTableRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UiTableRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-row',
                    template: "\n\n",
                    styles: [""]
                }] }
    ];
    return UiTableRowComponent;
}(UiTableRowHeadComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTableContentComponent = /** @class */ (function () {
    function UiTableContentComponent(_elementRef) {
        this._elementRef = _elementRef;
        this.onItemClick = new EventEmitter();
        this.onRowClick = new EventEmitter();
        this.onTableScroll = new EventEmitter();
        this.bodyClassName = "bodyClassName";
        this.thMinHeight = 30;
        this.tdMinHeight = 70;
        this.eventLength = 3;
        this.fixed = true;
        this.titleOnlyMobile = false;
        this.showControlbar = true;
        this.showTitle = true;
        this.eventNum = 0;
        this.eventData = { index: 0,
            event: 0 };
        this.rightMore = false;
        this.rightMoreClass = '';
        this.headtext = [];
        this.headItemData = [];
        this.dataHeadArray = [];
        this.dataRowArray = [];
        this._isShowTableVerticalView = false;
        this.isShowTableVerticalViewChange = new EventEmitter();
    }
    Object.defineProperty(UiTableContentComponent.prototype, "isShowTableVerticalView", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShowTableVerticalView;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isShowTableVerticalView = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.headArray = /**
     * @return {?}
     */
    function () {
        if (this.tableHead != undefined) {
            /** @type {?} */
            var headData = this.tableHead.toArray();
            // console.log('tableHead',this.tableHead);
            // console.log('tableHead leng', this.tableHead.length);
            // console.log('headData',headData);
            // console.log('headData[0]',headData[0]);
            // console.log('data item2array',headData[0].itemToArray());
            if (headData[0].itemToArray() != undefined) {
                return headData[0].itemToArray();
            }
        }
    };
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.bodyArray = /**
     * @return {?}
     */
    function () {
        if (this.tableData != undefined) {
            /** @type {?} */
            var bodyData = this.tableData.toArray();
            this.bodyArrayLength = bodyData.length;
            return bodyData;
        }
    };
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.setHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var td = this.body.toArray();
        /** @type {?} */
        var tdLength = td.length;
        /** @type {?} */
        var th = this.head.toArray();
        /** @type {?} */
        var thLength = th.length;
        /** @type {?} */
        var rowLength = this.tableData.toArray().length;
        for (var i = 0; i < tdLength; i++) {
            td[i].nativeElement.style.height = i % rowLength ? this.tdMinHeight + 'px' : 'auto';
        }
        for (var i = 0; i < thLength; i++) {
            th[i].nativeElement.style.height = i ? this.thMinHeight + 'px' : 'auto';
        }
    };
    // chagne table view
    // chagne table view
    /**
     * @param {?} isVerticalView
     * @return {?}
     */
    UiTableContentComponent.prototype.changeTableView = 
    // chagne table view
    /**
     * @param {?} isVerticalView
     * @return {?}
     */
    function (isVerticalView) {
        //console.log('click', isVerticalView);
        this.isShowTableVerticalView = isVerticalView;
        this.isShowTableVerticalViewChange.emit(this.isShowTableVerticalView);
    };
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.windowWidth = window.innerWidth; };
    /**
     * @param {?} array
     * @param {?} length
     * @param {?} height
     * @return {?}
     */
    UiTableContentComponent.prototype.setFinalHeight = /**
     * @param {?} array
     * @param {?} length
     * @param {?} height
     * @return {?}
     */
    function (array, length, height) {
        for (var i = 0; i < length; i++) {
            array[i].style.height = height + "px";
            // console.log(array[i],height);
        }
    };
    /**
     * @param {?} idName
     * @param {?} rowLength
     * @return {?}
     */
    UiTableContentComponent.prototype.getRowHeight = /**
     * @param {?} idName
     * @param {?} rowLength
     * @return {?}
     */
    function (idName, rowLength) {
        for (var i = 0; i < rowLength; i++) {
            /** @type {?} */
            var domElement = this._elementRef.nativeElement.querySelectorAll(idName + "" + i);
            /** @type {?} */
            var domLength = domElement.length;
            /** @type {?} */
            var domHArray = [];
            for (var j = 0; j < domLength; j++) {
                domHArray.push(domElement[j].offsetHeight);
            }
            /** @type {?} */
            var tdHeight = Math.max.apply(null, domHArray);
            // console.log(domElement,tdHeight);
            this.setFinalHeight(domElement, domLength, tdHeight);
        }
    };
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.ModifyDOMElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rowLength = this.bodyArrayLength;
        /** @type {?} */
        var headLength = this.headArray().length;
        // console.log(rowLength,headLength);
        this.getRowHeight('.headClassName', headLength);
        this.getRowHeight('.bodyClassName', rowLength);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    UiTableContentComponent.prototype.conrtolMoreShow = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var _this = this;
        console.log("obj.right", obj.right);
        // this.rightMore = !obj.right;
        setTimeout((/**
         * @return {?}
         */
        function () { _this.rightMore = !obj.right; }), 0);
        // this.rightMoreClass = obj.right?'': 'rightMoreTrue';
        this.onTableScroll.emit();
    };
    /**
     * @param {?} n
     * @return {?}
     */
    UiTableContentComponent.prototype.setEventIndex = /**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        return n % this.eventLength;
    };
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    UiTableContentComponent.prototype.itemClick = /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    function (index, event) {
        this.eventNum++;
        this.eventData.index = index;
        this.eventData.event = event % this.eventLength;
        this.onItemClick.emit(this.eventData);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    UiTableContentComponent.prototype.rowClick = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.onRowClick.emit(index);
    };
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.checkTitleShow = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.titleOnlyMobile) {
            setTimeout((/**
             * @return {?}
             */
            function () { _this.showTitle = _this.windowWidth < 1024 ? true : false; }), 0);
        }
    };
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.setTableHeight = /**
     * @return {?}
     */
    function () {
        if (this.fixed) {
            this.setHeight();
            this.ModifyDOMElement();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiTableContentComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.checkTitleShow();
        this.setTableHeight();
        this.windowWidth = event.target.innerWidth;
    };
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.checkTitleShow();
        this.setHeight();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.setTableHeight();
        }), 0);
    };
    UiTableContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-content',
                    template: "<!-- controalbar -->\n<snd-ui-table-control-bar (onClick)=\"changeTableView($event)\" *ngIf=\"showControlbar\" [isVertical]=\"isShowTableVerticalView\">\n  <ng-content select=\"[controlBarContent]\"></ng-content>\n</snd-ui-table-control-bar>\n<!-- end of control bar -->\n\n<ng-container *ngIf=\"!isShowTableVerticalView || windowWidth >= 1024; else verticalTable\">\n  <div class=\"table-content\" [ngClass]=\"{'fixed-table':fixed}\">\n    <div class=\"table-info-content\">\n      <app-ui-detection-scroll (scrollEventData)=\"conrtolMoreShow($event)\">\n          <table class=\"table\">\n            <thead>\n              <tr class=\"head-tr\" *ngIf=\"showTitle\">\n                <ng-container *ngFor=\"let item of headArray();index as i\">\n                  <th class=\"th  headClassName0\" #head [ngClass]=\"{'first':i==0,\n                                                                  'text-align-left':item.textAlign=='left',\n                                                                  'text-align-right':item.textAlign=='right',\n                                                                  'text-align-center':item.textAlign=='center'}\">\n                    <div class=\"\" [ngClass]=\"{'sort':item.sort,\n                                              'sort-content':i}\">\n                      <ng-container *ngIf=\"item.sort\">\n                        <div class=\"sort-btn\" (click)=\"itemClick(i,item.setIndex())\" \n                        [ngClass]=\"{  'up'   : setEventIndex(item.eventIndex)==1,\n                                      'down' : setEventIndex(item.eventIndex)==2}\">\n                        </div>\n                      </ng-container>\n                      <div *ngTemplateOutlet=\"item.item\"></div>\n                    </div>\n                  </th>\n                </ng-container>\n              </tr>\n            </thead>\n            <tbody>\n              <ng-container *ngFor=\"let row of bodyArray();index as i\">\n                <tr class=\"body-tr\" [attr.body]=\"i\" (click)=\"rowClick(i)\" *ngIf=\"row != undefined\">\n                  <ng-container *ngFor=\"let item of row.itemToArray();index as j\">\n                    <td class=\"td  {{bodyClassName+i}}\" #body  [ngClass]=\"{'first':j==0,\n                                                                    'text-align-left':item.textAlign=='left',\n                                                                    'text-align-right':item.textAlign=='right',\n                                                                    'text-align-center':item.textAlign=='center'}\">\n                      <div *ngTemplateOutlet=\"item.item\"></div>\n                    </td>\n                  </ng-container>\n                </tr>\n              </ng-container>\n            </tbody>\n          </table>\n      </app-ui-detection-scroll>\n      <div class=\"rightMore\" [ngClass]=\"{'rightMoreTrue':rightMore}\"></div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #verticalTable>\n    <div *ngIf=\"windowWidth < 1024\" class=\"table-style-v table-content\" [ngClass]=\"{'fixed-table':fixed}\">\n        <div class=\"table-info-content\">\n            <!-- main content -->\n            <ng-container *ngFor=\"let item of bodyArray();index as i; let last = last\">\n              <!-- single item -->\n              <div class=\"vertical-item-block\" (click)=\"rowClick(i)\">\n                <div class=\"title-block\"  [ngClass]=\"{'first':1,\n                                                                  'text-align-left':item.textAlign=='left',\n                                                                  'text-align-right':item.textAlign=='right',\n                                                                  'text-align-center':item.textAlign=='center'}\">\n                  <div *ngTemplateOutlet=\"item.itemToArray()[0].item\"></div>\n                </div>\n                <div class=\"detail-block\">\n                  <!-- detail data -->\n                    <ng-container *ngFor=\"let itemDetail of item.itemToArray().slice(1);index as j\">\n                        <div class=\"row-block\">\n                          <!-- title of detail data-->\n                          <ng-container *ngFor=\"let headItem of dataHeadArray.slice(j+0,j+1);index as j\">\n                              <span class=\"detail-title  {{bodyClassName+j}}\" >\n                                {{headItem}}\n                              </span>\n                          </ng-container>\n                          <!-- end of title of detail data -->\n                          <!-- detal -->\n                          <span class=\"detail-value  {{bodyClassName+i}}\" >\n                                <div *ngTemplateOutlet=\"itemDetail.item\" \n                                [ngClass]=\"{'text-align-left':itemDetail.textAlign=='left',\n                                            'text-align-right':itemDetail.textAlign=='right',\n                                            'text-align-center':itemDetail.textAlign=='center'}\"></div>\n                          </span>\n                          <!-- end of detail -->\n                        </div>\n                    </ng-container>\n                    <!-- end of detail data -->\n                </div>\n              </div>\n              <!-- end of single item -->\n            </ng-container>\n            <!-- end of main content -->\n        </div>\n    </div>\n</ng-template>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-style-v{padding-bottom:20px}.table-style-v ::ng-deep ::ng-deep.group-title-text-content .text-block{padding-left:5px}.table-style-v ::ng-deep ::ng-deep.group-title-text-content.style-has-dot{left:-5px}.table-style-v .title-block{text-align:left;border-bottom:1px solid #ececec;padding:15px}.table-style-v .title-block ::ng-deep .table-item.md{width:100%}.table-style-v .detail-block{width:100%;display:block;padding:15px 20px;border-bottom:1px solid #ececec}.table-style-v .row-block{display:flex;width:100%;align-items:center;justify-content:space-between}.table-style-v .row-block+.row-block{margin-top:12px}.table-style-v .row-block .detail-title{width:60%;flex-shrink:0;flex-grow:0;font-size:.875rem;text-align:left}.table-style-v .row-block .detail-value{width:40%;flex-shrink:0;flex-grow:0;font-size:1rem;font-weight:700;text-align:right}.table-style-v .row-block .detail-value ::ng-deep.table-item.md{min-width:100%;width:100%}.table-style-v .row-block .detail-value ::ng-deep.table-item{min-width:100%;width:100%}.table-content{position:relative;background-color:#fff}.table-content .table-first-fixed{width:190px;position:absolute;left:0;top:0}.table-content .table-info-content{width:100%;overflow:hidden}.table-content .table-info-content .body-tr:active .td{background-color:#f1f9fa}.table-content .table-info-content .td,.table-content .table-info-content .th{text-align:center}.table-content .table-info-content .td.first,.table-content .table-info-content .th.first{text-align:left}.table-content .table-info-content .td.first ::ng-deep .table-item,.table-content .table-info-content .th.first ::ng-deep .table-item{min-width:160px;font-size:.875rem}.table-content .table-info-content .td.text-align-center,.table-content .table-info-content .th.text-align-center{text-align:center}.table-content .table-info-content .td.text-align-center ::ng-deep .table-item,.table-content .table-info-content .th.text-align-center ::ng-deep .table-item{text-align:center}.table-content .table-info-content .td.text-align-left,.table-content .table-info-content .th.text-align-left{text-align:left}.table-content .table-info-content .td.text-align-left ::ng-deep .table-item,.table-content .table-info-content .th.text-align-left ::ng-deep .table-item{text-align:left}.table-content .table-info-content .td.text-align-right,.table-content .table-info-content .th.text-align-right{text-align:right}.table-content .table-info-content .td.text-align-right ::ng-deep .table-item,.table-content .table-info-content .th.text-align-right ::ng-deep .table-item{text-align:right}.table-content .table-info-content .th{color:#007ab3;text-align:center}.table-content .table-info-content .th ::ng-deep .table-item{font-size:.875rem}.table-content .rightMore{width:0;height:100%;position:absolute;top:0;right:0;transition:.3s;opacity:0;z-index:99;background-color:#fff;box-shadow:-5px 0 6px 0 rgba(0,0,0,.06);will-change:width,opacity}.table-content .rightMore.rightMoreTrue{width:30px;opacity:1}.table-content.fixed-table{padding-left:190px}.table-content.fixed-table .td.first,.table-content.fixed-table .th.first{display:flex;align-items:center;width:190px;position:absolute;left:0;top:auto}.table-content .table-first-fixed .table,.table-content ::ng-deep app-ui-detection-scroll .table{width:100%;border-collapse:collapse}.table-content .table-first-fixed .th,.table-content ::ng-deep app-ui-detection-scroll .th{padding:10px 15px}.table-content .table-first-fixed .td,.table-content ::ng-deep app-ui-detection-scroll .td{padding:15px;border-top:1px solid #ececec}.table-content .table-first-fixed .td .table-item,.table-content .table-first-fixed .th .table-item{font-size:.875rem}.table-content .sort-content{display:inline-block;white-space:nowrap;max-width:105px}.table-content .sort-content .sort-btn{display:inline-block;vertical-align:middle;width:24px;height:24px;background-image:url(\"data:image/svg+xml,%3Csvg id='sort-none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' enable-background='new 0 0 24 24'%3E%3Cstyle%3E.st1%7Bfill:%23fff%7D%3C/style%3E%3Cg transform='translate(8 5)'%3E%3Cdefs%3E%3Cfilter id='Adobe_OpacityMaskFilter' filterUnits='userSpaceOnUse' x='0' y='0' width='8' height='5'%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3C/defs%3E%3Cmask maskUnits='userSpaceOnUse' x='0' y='0' width='8' height='5' id='b_2_'%3E%3Cg filter='url(%23Adobe_OpacityMaskFilter)'%3E%3Cpath id='a_2_' class='st1' d='M0 0h8v5H0V0z'/%3E%3C/g%3E%3C/mask%3E%3Cpath d='M1 5c-.6 0-1-.4-1-1 0-.3.1-.5.3-.7l3-3c.4-.4 1-.4 1.4 0l3 3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L4 2.4 1.7 4.7c-.2.2-.4.3-.7.3' mask='url(%23b_2_)' fill='%23006192'/%3E%3C/g%3E%3Cg transform='translate(8 14)'%3E%3Cdefs%3E%3Cfilter id='Adobe_OpacityMaskFilter_1_' filterUnits='userSpaceOnUse' x='0' y='0' width='8' height='5'%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3C/defs%3E%3Cmask maskUnits='userSpaceOnUse' x='0' y='0' width='8' height='5' id='d_2_'%3E%3Cg filter='url(%23Adobe_OpacityMaskFilter_1_)'%3E%3Cpath id='c_2_' class='st1' d='M0 0h8v5H0V0z'/%3E%3C/g%3E%3C/mask%3E%3Cpath d='M6.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3 3c-.4.4-1 .4-1.4 0l-3-3C-.1 1.3-.1.7.3.3s1-.4 1.4 0L4 2.6 6.3.3z' mask='url(%23d_2_)' fill='%23006192'/%3E%3C/g%3E%3C/svg%3E\");background-size:24px 24px;background-repeat:no-repeat;background-position:center center}.table-content .sort-content .sort-btn.up{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h8v5H0z'/%3E%3Cpath id='c' d='M0 0h8v5H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(8 5)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath fill='%23006192' d='M1 5a.999.999 0 0 1-.707-1.707l3-3a.999.999 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.413 1.414L4 2.414 1.706 4.707A.997.997 0 0 1 1 5' mask='url(%23b)'/%3E%3C/g%3E%3Cg transform='translate(8 14)'%3E%3Cmask id='d' fill='%23fff'%3E%3Cuse xlink:href='%23c'/%3E%3C/mask%3E%3Cpath fill='%23C2C2C2' d='M6.293.293a.999.999 0 1 1 1.414 1.414l-3 3a.997.997 0 0 1-1.413 0l-3-3A.999.999 0 1 1 1.706.293L4 2.586 6.293.293z' mask='url(%23d)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.table-content .sort-content .sort-btn.down{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h8v5H0z'/%3E%3Cpath id='c' d='M0 0h8v5H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(8 5)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath fill='%23C2C2C2' d='M1 5a.999.999 0 0 1-.707-1.707l3-3a.999.999 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.413 1.414L4 2.414 1.706 4.707A.997.997 0 0 1 1 5' mask='url(%23b)'/%3E%3C/g%3E%3Cg transform='translate(8 14)'%3E%3Cmask id='d' fill='%23fff'%3E%3Cuse xlink:href='%23c'/%3E%3C/mask%3E%3Cpath fill='%23006192' d='M6.293.293a.999.999 0 1 1 1.414 1.414l-3 3a.997.997 0 0 1-1.413 0l-3-3A.999.999 0 1 1 1.706.293L4 2.586 6.293.293z' mask='url(%23d)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.table-content .sort-content ::ng-deep .table-item{width:auto;display:inline-block;white-space:normal;vertical-align:middle}.table-content .sort-content.sort ::ng-deep .table-item{min-width:0;max-width:81px}@media screen and (max-width:767px){.table-content.fixed-table{padding-left:160px}.table-content.fixed-table .table-first-fixed,.table-content.fixed-table .td.first,.table-content.fixed-table .th.first{width:160px}.table-content .table-info-content .td.first ::ng-deep .table-item,.table-content .table-info-content .th.first ::ng-deep .table-item{min-width:130px}}"]
                }] }
    ];
    UiTableContentComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    UiTableContentComponent.propDecorators = {
        tableHead: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return UiTableRowHeadComponent; })),] }],
        tableData: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return UiTableRowComponent; })),] }],
        head: [{ type: ViewChildren, args: ["head",] }],
        body: [{ type: ViewChildren, args: ["body",] }],
        onItemClick: [{ type: Output }],
        onRowClick: [{ type: Output }],
        onTableScroll: [{ type: Output }],
        thMinHeight: [{ type: Input }],
        tdMinHeight: [{ type: Input }],
        eventLength: [{ type: Input }],
        fixed: [{ type: Input }],
        titleOnlyMobile: [{ type: Input }],
        showControlbar: [{ type: Input }],
        headItem: [{ type: ViewChild, args: ['headItem',] }],
        dataHeadArray: [{ type: Input }],
        dataRowArray: [{ type: Input }],
        isShowTableVerticalView: [{ type: Input }],
        isShowTableVerticalViewChange: [{ type: Output }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UiTableContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTableCardComponent = /** @class */ (function (_super) {
    __extends(UiTableCardComponent, _super);
    function UiTableCardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UiTableCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-card',
                    template: "<div class=\"table-content\" (click)=\"ModifyDOMElement()\">\n  <div class=\"table-first-fixed\">\n      <table class=\"table\">\n          <thead>\n            <tr class=\"head-tr headClassName0\" #head>\n              <th class=\"th\" [ngClass]=\"{'text-align-left':headArray()[0].item.textAlign=='left',\n                                         'text-align-right':headArray()[0].item.textAlign=='right'}\">\n                <div *ngTemplateOutlet=\"headArray()[0].item\"></div>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngFor=\"let row of bodyArray();index as i\">\n              <tr *ngIf=\"row != undefined\" class=\"body-tr {{bodyClassName+i}}\" #body [ngClass]=\"{'text-align-left':row.itemToArray()[0].item.textAlign=='left',\n                                                                        'text-align-right':row.itemToArray()[0].item.textAlign=='right'}\">\n                <td class=\"td\"><div *ngTemplateOutlet=\"row.itemToArray()[0].item\"></div></td>\n              </tr>\n            </ng-container>\n          </tbody>\n      </table>\n  </div>\n  <div class=\"table-info-content\">\n    <app-ui-detection-scroll>\n      <ul class=\"table-card-content\" *ngIf=\"bodyArray().length != 0 && bodyArray()[0] != undefined\">\n          <ng-container *ngFor=\"let col of bodyArray()[0].itemToArray().slice(1);index as i\">\n            <li class=\"table-card\">\n              <table class=\"table\">\n                <thead>\n                  <tr class=\"head-tr headClassName0\" #head>\n                    <th class=\"th\" [ngClass]=\"{'text-align-left':headArray().slice(1)[i].item.textAlign=='left',\n                                               'text-align-right':headArray().slice(1)[i].item.textAlign=='right',\n                                               'text-align-center':headArray().slice(1)[i].item.textAlign=='center'}\">\n                      <div *ngTemplateOutlet=\"headArray().slice(1)[i].item\"></div>\n                    </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <ng-container *ngFor=\"let row of bodyArray();index as j\">\n                    <tr class=\"body-tr {{bodyClassName+j}}\" #body>\n                      <td class=\"td\" [ngClass]=\"{'text-align-left':row.itemToArray()[i+1].item.textAlign=='left',\n                                                 'text-align-right':row.itemToArray()[i+1].item.textAlign=='right',\n                                                 'text-align-center':row.itemToArray()[i+1].item.textAlign=='center'}\">\n                        <div *ngTemplateOutlet=\"row.itemToArray()[i+1].item\"></div>\n                      </td>\n                    </tr>\n                  </ng-container>\n                </tbody>\n              </table>\n            </li>\n          </ng-container>\n      </ul>\n    </app-ui-detection-scroll>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-content{position:relative;padding-left:180px}.table-content ::ng-deep .table-item{font-size:.875rem}.table-content .td,.table-content .td.text-align-center,.table-content .th,.table-content .th.text-align-center{text-align:center}.table-content .td.text-align-left,.table-content .th.text-align-left{text-align:left}.table-content .td.text-align-right,.table-content .th.text-align-right{text-align:right}.table-content .table-first-fixed{width:190px;position:absolute;left:0;top:0;padding-bottom:15px;padding-top:10px}.table-content .table-first-fixed ::ng-deep .table-item{font-weight:400}.table-content .table-first-fixed .td.text-align-center,.table-content .table-first-fixed .th.text-align-center{text-align:center}.table-content .table-first-fixed .td.text-align-left,.table-content .table-first-fixed .th.text-align-left{text-align:left}.table-content .table-first-fixed .td.text-align-right,.table-content .table-first-fixed .th.text-align-right{text-align:right}.table-content .table-info-content{width:100%;overflow:hidden}.table-content .table-info-content .rightMore:not(.rightMoreTrue){width:0;box-shadow:none;background-color:transparent}.table-content .table-info-content .rightMore{width:30px;height:100%;position:absolute;top:0;right:0;background-color:#fff;transition:.3s;box-shadow:-5px 0 6px 0 rgba(0,0,0,.06)}.table-content .table-info-content .table-card-content{display:flex;font-size:0;padding:10px}.table-content .table-info-content .table-card-content .table-card{display:inline-block;flex:0 0 calc((100% - 30px)/ 4);vertical-align:top;background-color:#fff;box-shadow:0 0 16px 0 rgba(0,0,0,.08);padding-bottom:5px}.table-content .table-info-content .table-card-content .table-card+.table-card{margin-left:10px}.table-content .table-info-content ::ng-deep .th{color:#007ab3}.table-content .table-first-fixed .table,.table-content ::ng-deep app-ui-detection-scroll .table{width:100%;border-collapse:collapse}.table-content .table-first-fixed .td,.table-content .table-first-fixed .th,.table-content ::ng-deep app-ui-detection-scroll .td,.table-content ::ng-deep app-ui-detection-scroll .th{max-width:135px}.table-content .table-first-fixed .th,.table-content ::ng-deep app-ui-detection-scroll .th{padding:15px 15px 5px}.table-content .table-first-fixed .th ::ng-deep .table-item,.table-content ::ng-deep app-ui-detection-scroll .th ::ng-deep .table-item{display:inline-block}.table-content .table-first-fixed .td,.table-content ::ng-deep app-ui-detection-scroll .td{padding:10px 15px}.table-content .table-first-fixed .td,.table-content .table-first-fixed .th{text-align:left;padding-left:0}.table-content .table-first-fixed .th{padding-top:0;vertical-align:top}@media screen and (max-width:767px){.table-content{padding-left:150px}.table-content .table-first-fixed{width:160px}}"]
                }] }
    ];
    return UiTableCardComponent;
}(UiTableContentComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListItemComponent = /** @class */ (function () {
    function ListItemComponent() {
        this.titleText = '';
        this.itemMinSize = 'md';
        this.id = '';
    }
    /**
     * @return {?}
     */
    ListItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'list-item',
                    template: "<ng-template><ng-content></ng-content></ng-template>",
                    styles: [""]
                }] }
    ];
    ListItemComponent.ctorParameters = function () { return []; };
    ListItemComponent.propDecorators = {
        content: [{ type: ViewChild, args: [TemplateRef,] }],
        titleText: [{ type: Input }],
        itemMinSize: [{ type: Input }],
        heightLight: [{ type: Input }],
        id: [{ type: Input }]
    };
    return ListItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTableListComponent = /** @class */ (function () {
    function UiTableListComponent() {
        this.styleType = TABLELISTSTYLETYPE.STYLE_1;
    }
    /**
     * @return {?}
     */
    UiTableListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
    };
    /**
     * @return {?}
     */
    UiTableListComponent.prototype.infoListArray = /**
     * @return {?}
     */
    function () {
        return this.items.toArray();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiTableListComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = event.target.innerWidth;
    };
    /**
     * @return {?}
     */
    UiTableListComponent.prototype.controlStyle = /**
     * @return {?}
     */
    function () {
        if (this.styleType == TABLELISTSTYLETYPE.STYLE_1) {
            return '';
        }
        if (this.styleType == TABLELISTSTYLETYPE.STYLE_2) {
            return "style-2";
        }
    };
    UiTableListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-list',
                    template: "<div class=\"table-list {{controlStyle()}}\" >\n  <ng-template *ngIf=\"windowWidth > 1023; then tableContent else listContent\"></ng-template>\n  <ng-template #tableContent>\n    <div class=\"table-content\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <ng-container *ngFor=\"let item of infoListArray();index as i\">\n              <th class=\"th\">\n                <div class=\"list-item {{item.itemMinSize}}\">{{item.titleText}}</div>\n              </th>\n            </ng-container>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <ng-container *ngFor=\"let item of infoListArray();index as i\">\n              <td class=\"td\">\n                <div class=\"list-item {{item.itemMinSize}}\" >\n                  <div *ngTemplateOutlet=\"item.content\"></div>\n                </div>\n              </td>\n            </ng-container>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </ng-template> \n  <ng-template #listContent>\n    <div class=\"list-content\">\n      <ul class=\"list-ul\">\n        <ng-container *ngFor=\"let item of infoListArray();index as i\">\n          <li class=\"list-li\">\n            <div class=\"list-title\">\n              {{item.titleText}}\n            </div>\n            <div class=\"list-content\">\n              <div *ngTemplateOutlet=\"item.content\"></div>\n            </div>\n          </li>\n        </ng-container>\n      </ul>\n    </div>\n  </ng-template>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-list .table-content .table{border-collapse:collapse}.table-list .table-content .td,.table-list .table-content .th{text-align:center;vertical-align:middle;padding:0 15px;height:30px}.table-list .table-content .list-item{text-align:center;color:#414141}.table-list .table-content .list-item.la{width:130px}.table-list .table-content .list-item.md{width:105px}.table-list .table-content .list-item.sm{width:50px}.table-list .table-content .th .list-item{font-size:.875rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:1.2px}.table-list .table-content .td .list-item{font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.2px}.table-list .list-content{width:100%}.table-list .list-content .list-ul{width:100%;padding:0;margin:0}.table-list .list-content .list-li{padding:0;margin:0;font-size:0;list-style-type:none}.table-list .list-content .list-li .list-content,.table-list .list-content .list-li .list-title{display:inline-block;letter-spacing:.2px;color:#414141;vertical-align:middle;word-break:break-word}.table-list .list-content .list-li .list-title{width:calc(100% - 105px);font-size:.875rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:2;text-align:left}.table-list .list-content .list-li .list-content{width:105px;font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:.2px;text-align:right}.table-list .list-content .list-li+.list-li{margin-top:10px}.table-list.style-2 .table-content .table{border-collapse:collapse}.table-list.style-2 .table-content .td,.table-list.style-2 .table-content .th{text-align:center;vertical-align:middle;padding:0 17px;height:28px}.table-list.style-2 .table-content .list-item{word-break:break-all;text-align:center;color:#414141}.table-list.style-2 .table-content .list-item.md{width:130px}.table-list.style-2 .table-content .th .list-item{font-size:1rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.75em;letter-spacing:.2px}.table-list.style-2 .table-content .td .list-item{font-size:1.25rem;font-style:normal;font-stretch:normal;line-height:normal;font-weight:700;letter-spacing:.2px;color:#007ab3}.table-list.style-2 .list-content{width:100%}.table-list.style-2 .list-content .list-ul{width:100%;padding:0;margin:0}.table-list.style-2 .list-content .list-li{display:flex;padding:0;margin:0;font-size:0;list-style-type:none;text-align:left}.table-list.style-2 .list-content .list-li .list-content,.table-list.style-2 .list-content .list-li .list-title{display:inline-block;letter-spacing:.2px;color:#414141;vertical-align:top;word-break:break-word;text-align:left}.table-list.style-2 .list-content .list-li .list-title{width:195px;font-size:1rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.75em}.table-list.style-2 .list-content .list-li .list-content{width:130px;min-width:130px;font-size:1.25rem;font-style:normal;font-stretch:normal;line-height:normal;font-weight:700;color:#007ab3}.table-list.style-2 .list-content .list-li+.list-li{margin-top:15px}"]
                }] }
    ];
    UiTableListComponent.ctorParameters = function () { return []; };
    UiTableListComponent.propDecorators = {
        items: [{ type: ContentChildren, args: [ListItemComponent,] }],
        styleType: [{ type: Input }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UiTableListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTableTitleComponent = /** @class */ (function () {
    function UiTableTitleComponent() {
        this.titleText = '';
        this.subTitleText = '';
        this.event = true;
        this.eventIcon = '';
        this.onClick = new EventEmitter();
        this.styleType = TABLETIELESTYLETYPE.STYLE_1;
        this.isShowTitle = true;
    }
    /**
     * @return {?}
     */
    UiTableTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiTableTitleComponent.prototype.click = /**
     * @return {?}
     */
    function () {
        this.onClick.emit();
    };
    /**
     * @return {?}
     */
    UiTableTitleComponent.prototype.controlStyle = /**
     * @return {?}
     */
    function () {
        if (this.styleType == TABLETIELESTYLETYPE.STYLE_1) {
            return 'style-1';
        }
        if (this.styleType == TABLETIELESTYLETYPE.STYLE_2) {
            return "style-2";
        }
        if (this.styleType == TABLETIELESTYLETYPE.STYLE_3) {
            return "style-3";
        }
        if (this.styleType == TABLETIELESTYLETYPE.STYLE_4) {
            return "style-4";
        }
        if (this.styleType == TABLETIELESTYLETYPE.STYLE_5) {
            return "style-5";
        }
        if (this.styleType == TABLETIELESTYLETYPE.STYLE_6) {
            return "style-6";
        }
        if (this.styleType == TABLETIELESTYLETYPE.STYLE_7) {
            return "style-7";
        }
    };
    UiTableTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-title',
                    template: "<div class=\"table-title {{controlStyle()}}\" [ngClass]=\"isShowTitle ? '': 'style-no-title'\">\n  <div class=\"title-content\">\n    <div class=\"first-title-content\">{{titleText}}</div>\n    <div class=\"subtitle-content\" *ngIf=\"subTitleText.length\">{{subTitleText}}</div>\n  </div>\n  <div class=\"info-content\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"event-btn\" *ngIf=\"event\" (actionClick)=\"click()\" id=\"btn_goalsettingPen\" Action action=\"goalsettingPen\">\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-title{padding:15px;background-color:#cad4de;position:relative;font-size:0}.table-title .info-content,.table-title .title-content{display:inline-block;vertical-align:top}.table-title .title-content{width:174px}.table-title .title-content .first-title-content{font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.2px;color:#414141;padding-right:5px;text-align:left}.table-title .title-content .first-title-content:before{display:inline-block;vertical-align:middle;width:0;height:28px;content:''}.table-title .title-content .subtitle-content{font-size:.75rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:2.33;letter-spacing:.2px;color:#767676;margin-top:4px}.table-title .info-content{width:100%;max-width:calc(100% - 174px);text-align:right}.table-title .info-content ::ng-deep app-ui-table-list{display:inline-block}.table-title .event-btn{width:40px;height:40px;border-radius:50%;right:-20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);position:absolute}@media screen and (max-width:1023px){.table-title .info-content,.table-title .title-content{width:100%;max-width:305px;display:block}.table-title .title-content{max-width:calc(100% - 50px);margin-bottom:20px}.table-title .title-content .first-title-content:before{height:30px}.table-title ::ng-deep app-ui-table-list{width:100%}.table-title .event-btn{-webkit-transform:translateY(0);transform:translateY(0);right:15px;top:15px}}.table-title.style-1{min-height:70px;display:flex;width:100%;align-items:center}@media (max-width:1023px){.table-title.style-1 .title-content{margin-bottom:0}}.table-title.style-2 .title-content{margin-bottom:5px;width:100%}.table-title.style-2 .info-content,.table-title.style-2 .title-content{display:block}.table-title.style-2 .info-content{max-width:100%}.table-title.style-2 .info-content ::ng-deep app-ui-table-list .td,.table-title.style-2 .info-content ::ng-deep app-ui-table-list .th{padding:0 8px}.table-title.style-3{display:flex;background-color:#fff;padding:10px 15px;z-index:1}.table-title.style-3 .title-content .first-title-content{color:#007ab3;padding:10px 15px 10px 0}.table-title.style-3 .title-content .first-title-content:before{height:30px}.table-title.style-3 .info-content{flex:1;width:auto;min-width:540px}.table-title.style-3 .event-btn{right:10px;top:auto;bottom:0;-webkit-transform:translateY(50%);transform:translateY(50%);z-index:10}@media screen and (max-width:1023px){.table-title.style-2 .title-content{max-width:calc(100% - 50px);margin-bottom:20px}.table-title.style-2 .info-content{max-width:305px}.table-title.style-3{display:block;padding-bottom:15px}.table-title.style-3 .title-content{margin-bottom:0;max-width:100%}.table-title.style-3 .title-content .first-title-content{padding:0}.table-title.style-3 .info-content{max-width:305px;min-width:0}.table-title.style-3 .event-btn{right:15px}}.table-title.style-4{padding:20px;background-color:#ddeaf1}.table-title.style-4 .title-content{margin-bottom:15px;width:100%}.table-title.style-4 .info-content,.table-title.style-4 .title-content{display:block}.table-title.style-4 .info-content{max-width:100%;text-align:center}.table-title.style-4 .info-content ::ng-deep app-ui-table-list .td,.table-title.style-4 .info-content ::ng-deep app-ui-table-list .th{padding:0 8px}@media screen and (max-width:1023px){.table-title.style-4 .title-content{max-width:calc(100% - 50px);margin-bottom:15px}}.table-title.style-5{background-color:#fff;border-top-right-radius:5px;border-top-left-radius:5px}.table-title.style-5 .title-content .first-title-content{text-align:left}.table-title.style-6 .title-content{width:100%}.table-title.style-6 .info-content{max-width:100%}.table-title.style-6::ng-deep app-ui-table-list{width:100%}.table-title.style-6::ng-deep app-ui-table-list table{width:100%}.table-title.style-7{background-color:#fff;border-top-right-radius:5px;border-top-left-radius:5px}.table-title.style-7 .title-content{display:none}.table-title.style-7 .info-content{max-width:100%}.table-title.style-7::ng-deep app-ui-table-list2{width:100%}.table-title.style-7::ng-deep app-ui-table-list2 .table-list{width:100%}.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content{width:100%}.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul{width:100%;display:flex}.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul .list-li{flex:1;display:flex;justify-content:space-between}@media screen and (max-width:500px){.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul{display:block}.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul .list-li{justify-content:flex-start}}.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul .list-li .list-title{color:#414141;font-weight:700;text-align:right;flex:0 0 58%}@media screen and (max-width:500px){.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul .list-li .list-title{text-align:left;flex:0 0 46%}}.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul .list-li .list-content{font-weight:700;flex:0 0 39%}@media screen and (max-width:500px){.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul .list-li .list-content{text-align:center;flex:0 0 105px}}.table-title.style-no-title>.title-content{display:none}"]
                }] }
    ];
    UiTableTitleComponent.ctorParameters = function () { return []; };
    UiTableTitleComponent.propDecorators = {
        titleText: [{ type: Input }],
        subTitleText: [{ type: Input }],
        event: [{ type: Input }],
        eventIcon: [{ type: Input }],
        onClick: [{ type: Output }],
        styleType: [{ type: Input }],
        isShowTitle: [{ type: Input }]
    };
    return UiTableTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiCollapseContentComponent = /** @class */ (function () {
    function UiCollapseContentComponent(changeDector) {
        this.changeDector = changeDector;
        this.isShow = true;
        this.isOpen = true;
        this.isHasCollapse = true;
        this.titleText = '';
        this.onCollapsing = new EventEmitter();
    }
    /**
     * @return {?}
     */
    UiCollapseContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleNoCollapse = this.isHasCollapse ? '' : 'style-no-collapse';
    };
    /**
     * @return {?}
     */
    UiCollapseContentComponent.prototype.toggleCollapse = /**
     * @return {?}
     */
    function () {
        this.isOpen = !this.isOpen;
        this.onCollapsing.emit(this.isOpen);
        this.changeDector.markForCheck();
        this.changeDector.detectChanges();
        return this.isOpen;
    };
    /**
     * @return {?}
     */
    UiCollapseContentComponent.prototype.isOpenStatus = /**
     * @return {?}
     */
    function () {
        return this.isOpen ? 'open' : 'closed';
    };
    UiCollapseContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-collapse-content',
                    animations: [
                        animationCollapse
                    ],
                    template: "<div class=\"table-collapse\" [ngClass]=\"{'show':!isOpen}\">\n  <app-ui-table-title [titleText]=\"titleText\" (onClick)=\"toggleCollapse()\" [ngClass]=\"styleNoCollapse\">\n    <ng-content select=\"[header]\"></ng-content>\n  </app-ui-table-title>\n  <div class=\"collapse-content \" [@openClose]=\"isOpenStatus()\" [ngClass]=\"{'showActive':isOpen}\">\n    <ng-content select=\"[body]\"></ng-content>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-collapse .collapse-content{border-left:1px solid #ececec;border-right:1px solid #ececec;border-bottom:1px solid #ececec;overflow-y:hidden}.table-collapse ::ng-deep app-ui-table-title.style-no-collapse{display:none}.table-collapse ::ng-deep app-ui-table-title .event-btn{background-color:#007ab3;display:flex;align-items:center;justify-content:center}.table-collapse ::ng-deep app-ui-table-title .event-btn:before{content:'';transition:.5s;display:inline-block;background-size:contain;background-image:url(assets/img/icon-arrow-white.svg);width:20px;height:20px;background-repeat:no-repeat;vertical-align:middle;position:relative;top:3px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.table-collapse.show ::ng-deep app-ui-table-title .event-btn:before{top:-3px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}"]
                }] }
    ];
    UiCollapseContentComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiCollapseContentComponent.propDecorators = {
        isShow: [{ type: Input }],
        isOpen: [{ type: Input }],
        isHasCollapse: [{ type: Input }],
        titleText: [{ type: Input }],
        onCollapsing: [{ type: Output }]
    };
    return UiCollapseContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTableEditContentComponent = /** @class */ (function () {
    function UiTableEditContentComponent() {
        this.onClick = new EventEmitter();
        this.titleText = '';
        this.styleType = TABLETIELESTYLETYPE.STYLE_1;
        this.event = true;
        this._isEdit = true;
        this.styleTableNoEdit = '';
    }
    Object.defineProperty(UiTableEditContentComponent.prototype, "isEdit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isEdit;
        },
        set: /**
         * @param {?} isEdit
         * @return {?}
         */
        function (isEdit) {
            this._isEdit = isEdit;
            this._updateStyleTableNoEdit();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiTableEditContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._updateStyleTableNoEdit();
    };
    /**
     * @return {?}
     */
    UiTableEditContentComponent.prototype.btnOnClick = /**
     * @return {?}
     */
    function () {
        this.onClick.emit();
    };
    /**
     * @private
     * @return {?}
     */
    UiTableEditContentComponent.prototype._updateStyleTableNoEdit = /**
     * @private
     * @return {?}
     */
    function () {
        this.styleTableNoEdit = this.isEdit ? '' : 'style-table-no-edit';
    };
    UiTableEditContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-edit-content',
                    template: "<div class=\"table-edit\" [ngClass]=\"styleTableNoEdit\">\n  <app-ui-table-title [titleText]=\"titleText\" (onClick)=\"btnOnClick()\" [styleType]=\"styleType\" [event]=\"event\">\n    <ng-content select=\"[header]\"></ng-content>\n  </app-ui-table-title>\n  <div class=\"collapse-content\">\n    <ng-content select=\"[body]\"></ng-content>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-edit ::ng-deep app-ui-table-title{display:block;z-index:1}.table-edit ::ng-deep .table-title{border-bottom:1px solid #ececec}.table-edit ::ng-deep .event-btn{background-color:#fff;background-repeat:no-repeat;background-position:center center;background-size:24px 24px;background-image:url(assets/img/icon-list-pen-full.svg);box-shadow:0 0 7px 0 rgba(0,0,0,.23)}.table-edit.style-table-no-edit ::ng-deep .event-btn{display:none}.table-edit.style-table-no-edit ::ng-deep .style-5.table-title .title-content{max-width:100%;width:100%}"]
                }] }
    ];
    UiTableEditContentComponent.ctorParameters = function () { return []; };
    UiTableEditContentComponent.propDecorators = {
        onClick: [{ type: Output }],
        titleText: [{ type: Input }],
        styleType: [{ type: Input }],
        event: [{ type: Input }],
        isEdit: [{ type: Input }]
    };
    return UiTableEditContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTableList2Component = /** @class */ (function (_super) {
    __extends(UiTableList2Component, _super);
    function UiTableList2Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UiTableList2Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-list2',
                    template: "<div class=\"table-list\" >\n    <div class=\"list-content\">\n      <ul class=\"list-ul\">\n        <ng-container *ngFor=\"let item of infoListArray();index as i\">\n          <li class=\"list-li\">\n            <div class=\"list-title\">{{item.titleText}}</div>\n            <div class=\"list-content {{'heightLight'+'-'+item.heightLight}}\" [id]='item.id'><div *ngTemplateOutlet=\"item.content\"></div></div>\n          </li>\n        </ng-container>\n      </ul>\n    </div>\n  </div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-list .list-content{width:100%}.table-list .list-content .list-ul{width:100%;padding:0;margin:0;text-align:right}.table-list .list-content .list-li{display:inline-block;padding:0;margin:0;font-size:0;list-style-type:none}.table-list .list-content .list-li .list-content,.table-list .list-content .list-li .list-title{display:inline-block;font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:.2px;color:#414141;vertical-align:middle;word-break:break-all;padding:10px 15px}.table-list .list-content .list-li .list-content:before,.table-list .list-content .list-li .list-title:before{display:inline-block;content:'';height:30px;width:0;vertical-align:middle}.table-list .list-content .list-li .list-title{width:135px;text-align:right;color:#007ab3}.table-list .list-content .list-li .list-content{width:135px;letter-spacing:.2px;text-align:center}.table-list .list-content .list-li .list-content.heightLight-style2{color:#dc3149}.table-list .list-content .list-li .list-content.heightLight-style1{color:#007ab3}@media screen and (max-width:1023px){.table-list .list-content{width:100%}.table-list .list-content .list-ul{text-align:left}.table-list .list-content .list-li .list-content,.table-list .list-content .list-li .list-title{padding:0}.table-list .list-content .list-li .list-title{width:150px;text-align:left}.table-list .list-content .list-li .list-content{width:105px;text-align:center}}"]
                }] }
    ];
    return UiTableList2Component;
}(UiTableListComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTableContent2Component = /** @class */ (function (_super) {
    __extends(UiTableContent2Component, _super);
    function UiTableContent2Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UiTableContent2Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-content2',
                    template: "<div class=\"table-content\" [ngClass]=\"{'fixed-table':fixed}\">\n    <div class=\"table-info-content\">\n      <app-ui-detection-scroll (scrollEventData)=\"conrtolMoreShow($event)\">\n        <ng-template *ngIf=\"windowWidth > 1023; then pc else moblie\"></ng-template>\n        <ng-template #pc>\n          <table class=\"table\">\n            <thead>\n              <tr class=\"head-tr\" >\n                <ng-container *ngFor=\"let item of headArray();index as i\">\n                  <th class=\"th  headClassName0\" #head [ngClass]=\"{'first':i==0,\n                                                                    'text-align-left' :item.textAlign=='left',\n                                                                    'text-align-right':item.textAlign=='right'}\">\n                    <div class=\"sort-content\" [ngClass]=\"{'sort':item.sort}\">\n                      <ng-container *ngIf=\"item.sort\">\n                        <div class=\"sort-btn\" (click)=\"itemClick(i,item.setIndex())\" \n                        [ngClass]=\"{  'up'   : setEventIndex(item.eventIndex)==1,\n                                      'down' : setEventIndex(item.eventIndex)==2}\">\n                        </div>\n                      </ng-container>\n                      <div *ngTemplateOutlet=\"item.item\"></div>\n                    </div>\n                  </th>\n                </ng-container>\n              </tr>\n            </thead>\n            <tbody>\n              <ng-container *ngFor=\"let row of bodyArray();index as i\">\n                <tr class=\"body-tr\" [attr.body]=\"i\" (click)=\"rowClick(i)\">\n                  <ng-container *ngFor=\"let item of row.itemToArray();index as j\">\n                    <td class=\"td  {{bodyClassName+i}}\" #body  [ngClass]=\"{'first':j==0,\n                                                                    'text-align-left':item.textAlign=='left',\n                                                                    'text-align-right':item.textAlign=='right'}\">\n                      <div *ngTemplateOutlet=\"item.item\"></div>\n                    </td>\n                  </ng-container>\n                </tr>\n              </ng-container>\n            </tbody>\n          </table>\n        </ng-template>\n        <ng-template #moblie>\n          <table class=\"table\">\n            <thead>\n              <tr class=\"head-tr\" >\n                <ng-container *ngFor=\"let item of headArray().slice(0,1);index as i\">\n                  <th class=\"th  headClassName0\" #head [ngClass]=\"{'first':1}\">\n                    <div class=\"sort-content\" [ngClass]=\"{'sort':item.sort,\n                                                          'text-align-left':item.textAlign=='left',\n                                                          'text-align-right':item.textAlign=='right',\n                                                          'text-align-center':item.textAlign=='center'}\">\n                      <ng-container *ngIf=\"item.sort\">\n                        <div class=\"sort-btn\" (click)=\"itemClick(i,item.setIndex())\" \n                        [ngClass]=\"{  'up'   : setEventIndex(item.eventIndex)==1,\n                                      'down' : setEventIndex(item.eventIndex)==2}\">\n                        </div>\n                      </ng-container>\n                      <div *ngTemplateOutlet=\"item.item\"></div>\n                    </div>\n                  </th>\n                </ng-container>\n                <ng-container *ngFor=\"let item of bodyArray();index as i\">\n                  <th class=\"td headClassName0\" #head  [ngClass]=\"{'first':1,\n                                                                    'text-align-left':item.textAlign=='left',\n                                                                    'text-align-right':item.textAlign=='right',\n                                                                    'text-align-center':item.textAlign=='center'}\">\n                    <div *ngTemplateOutlet=\"item.itemToArray()[0].item\"></div>\n                  </th>\n                </ng-container>\n              </tr>\n            </thead>\n            <tbody>\n              <ng-container *ngFor=\"let row of bodyArray()[0].itemToArray().slice(1);index as i\">\n                <tr class=\"body-tr\" [attr.body]=\"i\" (click)=\"rowClick(i)\" *ngIf=\"row != undefined\">\n                  <ng-container *ngFor=\"let item of headArray().slice(i+1,i+2);index as j\">\n                    <td class=\"td  {{bodyClassName+i}}\" #body>\n                      <div class=\"sort-content\" [ngClass]=\"{'sort':item.sort}\">\n                        <ng-container *ngIf=\"item. sort\">\n                          <div class=\"sort-btn\" (click)=\"itemClick(i,item.setIndex())\" \n                          [ngClass]=\"{  'up'   : setEventIndex(item.eventIndex)==1,\n                                        'down' : setEventIndex(item.eventIndex)==2}\">\n                          </div>\n                        </ng-container>\n                        <div *ngTemplateOutlet=\"item.item\"\n                        [ngClass]=\"{'text-align-left':item.textAlign=='left',\n                                    'text-align-right':item.textAlign=='right',\n                                    'text-align-center':item.textAlign=='center'}\"></div>\n                      </div>\n                    </td>\n                  </ng-container>\n                  <ng-container *ngFor=\"let item of bodyArray();index as j\">\n                    <td class=\"td  {{bodyClassName+i}}\" #body>\n                      <div *ngTemplateOutlet=\"item.itemToArray().slice(1)[i]&&item.itemToArray().slice(1)[i].item\" \n                      [ngClass]=\"{'text-align-left':item.textAlign=='left',\n                                  'text-align-right':item.textAlign=='right',\n                                  'text-align-center':item.textAlign=='center'}\"></div>\n                    </td>\n                  </ng-container>\n                </tr>\n              </ng-container>\n            </tbody>\n          </table>\n        </ng-template>\n      </app-ui-detection-scroll>\n      \n    </div>\n    <div class=\"rightMore\" [ngClass]=\"{'rightMoreTrue':rightMore}\"></div>\n  </div>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-content{position:relative}.table-content .table-info-content{width:100%;overflow:hidden}.table-content .table-info-content .body-tr:active .td{background-color:#f1f9fa}.table-content .table-info-content .td,.table-content .table-info-content .th{text-align:center}.table-content .table-info-content .td.first,.table-content .table-info-content .th.first{text-align:left}.table-content .table-info-content .td.first ::ng-deep .table-item,.table-content .table-info-content .th.first ::ng-deep .table-item{font-size:.75rem}@media screen and (min-width:1024px){.table-content .table-info-content .td.first ::ng-deep .table-item,.table-content .table-info-content .th.first ::ng-deep .table-item{min-width:130px}}.table-content .table-info-content .td.text-align-left,.table-content .table-info-content .th.text-align-left{text-align:left}.table-content .table-info-content .td.text-align-right,.table-content .table-info-content .th.text-align-right{text-align:right}.table-content .rightMore{width:0;height:100%;position:absolute;top:0;right:0;transition:.3s;opacity:0;background-color:#fff;box-shadow:-5px 0 6px 0 rgba(0,0,0,.06);will-change:width,opacity}.table-content .rightMore.rightMoreTrue{width:30px;opacity:1}.table-content.fixed-table{padding-left:160px}.table-content.fixed-table .td.first,.table-content.fixed-table .th.first{display:flex;align-items:center;width:160px;position:absolute;left:0;top:auto}.table-content ::ng-deep app-ui-detection-scroll .table{width:100%;border-collapse:collapse}.table-content ::ng-deep app-ui-detection-scroll .th{padding:10px 15px}.table-content ::ng-deep app-ui-detection-scroll .td{padding:15px}.table-content .sort-content{display:inline-block;white-space:nowrap;max-width:105px}.table-content .sort-content .sort-btn{display:inline-block;vertical-align:middle;width:24px;height:24px;background-size:24px 24px;background-repeat:no-repeat;background-position:center center}.table-content .sort-content ::ng-deep .table-item{display:inline-block;white-space:normal;vertical-align:middle}.table-content .sort-content.sort ::ng-deep .table-item{min-width:0;max-width:81px}@media screen and (max-width:1023px){.table-content.fixed-table{padding-left:160px}.table-content.fixed-table .table-first-fixed,.table-content.fixed-table .td.first,.table-content.fixed-table .th.first{width:160px}.table-content .table-info-content .td.first,.table-content .table-info-content .th.first{text-align:center}.table-content .table-info-content .td:first-child ::ng-deep .table-item,.table-content .table-info-content .th:first-child ::ng-deep .table-item{width:65px;min-width:65px}}"]
                }] }
    ];
    return UiTableContent2Component;
}(UiTableContentComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTableTextGroupComponent = /** @class */ (function () {
    function UiTableTextGroupComponent() {
        this.titleText = "";
        this.subTitleText = "";
        this.titleColor = 'default'; // default is color text normal, 'blue'
        this.isHasDot = false; // default is no dot; true is has yellow dot
        this.id = '';
    }
    /**
     * @return {?}
     */
    UiTableTextGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleTitleColor = 'style-title-color-' + this.titleColor;
        this.styleHasDot = this.isHasDot ? 'style-has-dot' : '';
    };
    UiTableTextGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-table-text-group',
                    template: "<div class=\"group-title-text-content\" [ngClass]=\"[styleTitleColor, styleHasDot]\">\n    <!-- text -->\n    <div class=\"text-block\">\n        <div class=\"title-text\" [id]='id'>{{titleText}}</div>\n        <div class=\"subtitle-text\">{{subTitleText}}</div>\n    </div>\n    <!-- end of text -->\n  </div>\n  ",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.group-title-text-content{position:relative}.group-title-text-content.style-title-color-blue .title-text{color:#007ab3}.group-title-text-content.style-has-dot:before{content:' ';display:inline-block;width:6px;height:6px;border-radius:50%;background-color:#fdd25c;position:absolute;top:calc(50% - 6px)}.group-title-text-content.style-has-dot .text-block{padding-left:15px}.group-title-text-content .title-text{color:#414141;font-weight:700;font-size:.875rem}.group-title-text-content .subtitle-text{color:#c2c2c2;font-size:.75rem}"]
                }] }
    ];
    UiTableTextGroupComponent.ctorParameters = function () { return []; };
    UiTableTextGroupComponent.propDecorators = {
        titleText: [{ type: Input }],
        subTitleText: [{ type: Input }],
        titleColor: [{ type: Input }],
        isHasDot: [{ type: Input }],
        id: [{ type: Input }]
    };
    return UiTableTextGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTableControlBarComponent = /** @class */ (function () {
    function UiTableControlBarComponent() {
        this.language = new Language();
        this._isVertical = false;
        this.onClick = new EventEmitter();
    }
    Object.defineProperty(UiTableControlBarComponent.prototype, "isVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isVertical;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isVertical = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiTableControlBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiTableControlBarComponent.prototype.clickBtn = /**
     * @return {?}
     */
    function () {
        this.isVertical = !this.isVertical;
        this.onClick.emit(this.isVertical);
    };
    UiTableControlBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-table-control-bar',
                    template: "\n<div class=\"table-control-block\">\n  <!-- contro detail -->\n  <div class=\"table-control-detail\" (click)=\"clickBtn()\">\n      <div class=\"control-button-block\">\n        <div class=\"btn-icon\">\n          <img src=\"assets/img/icon-change.svg\">\n        </div>\n      </div>\n      <div class=\"control-text\">\n        <div *ngIf=\"isVertical\" class=\"text-option text-option-01\">{{language.vertical | translate}}</div>\n        <div *ngIf=\"!isVertical\" class=\"text-option text-option-02\">{{language.horizonal | translate}}</div>\n      </div>\n  </div>\n  <!-- end of control detail -->\n  <div class=\"table-extra-block\">\n    <ng-content></ng-content>\n  </div>\n  \n</div>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-control-block{display:flex;justify-content:space-between;width:100%;background-color:#fff;padding:12px 15px;border-bottom:1px solid #ececec}@media (min-width:1023px){.table-control-block{display:none}}.table-control-block .control-button-block,.table-control-block .table-control-detail{display:flex}.table-control-block .btn-icon{display:inline-block;margin-right:12px}.table-control-block .btn-icon img{max-width:24px;width:100%}.table-control-block .control-text{color:#414141;font-size:.875rem;line-height:28px}"]
                }] }
    ];
    UiTableControlBarComponent.ctorParameters = function () { return []; };
    UiTableControlBarComponent.propDecorators = {
        isVertical: [{ type: Input }],
        onClick: [{ type: Output }]
    };
    return UiTableControlBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTeamTitleTextComponent = /** @class */ (function () {
    function UiTeamTitleTextComponent() {
        this.teamText = "";
        this.titleText = "";
        this.textText = "";
    }
    /**
     * @return {?}
     */
    UiTeamTitleTextComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiTeamTitleTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-team-title-text',
                    template: "<div class=\"team-title-text-content\">\n    <div class=\"team-text\">{{teamText}}</div>\n    <div class=\"title-text\">{{titleText}}</div>\n    <div class=\"text-text\">{{textText}}</div>\n  </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.team-title-text-content .team-text{font-size:.75rem;font-weight:400;font-style:normal;line-height:1.67;letter-spacing:.2px;color:#007ab3}.team-title-text-content .title-text{font-size:.875rem;font-style:normal;line-height:1.43;letter-spacing:.2px;font-weight:700;color:#007ab3}.team-title-text-content .text-text{font-size:.75rem;font-weight:400;font-style:normal;line-height:1.67;letter-spacing:.2px;color:#c2c2c2}"]
                }] }
    ];
    UiTeamTitleTextComponent.ctorParameters = function () { return []; };
    UiTeamTitleTextComponent.propDecorators = {
        teamText: [{ type: Input }],
        titleText: [{ type: Input }],
        textText: [{ type: Input }]
    };
    return UiTeamTitleTextComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTextTypeComponent = /** @class */ (function () {
    function UiTextTypeComponent() {
        this.colorCode = 'transparent';
    }
    /**
     * @return {?}
     */
    UiTextTypeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiTextTypeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-text-type',
                    template: "<div class=\"ui-text-type-container\" [style.background-color]=\"colorCode\" [ngClass]=\"{'hasBgColor' : (colorCode != 'transparent')}\">\n  <p *ngIf=\"title\" class=\"ui-text-type-title\">{{ title }}</p>\n  <ng-content></ng-content>\n</div>\n<!-- end ui-text-type-container -->\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-text-type-container{padding:20px 0}.ui-text-type-container .ui-text-type-title{margin:0;font-size:1rem;font-weight:700;line-height:1.75;letter-spacing:.2px;color:#414141}.ui-text-type-container .ui-text-type-title:not(:last-child){padding-bottom:20px}.ui-text-type-container ::ng-deep app-ui-text-type-item{display:block;margin-bottom:20px;padding:0 20px}.ui-text-type-container ::ng-deep app-ui-text-type-item:last-child{margin-bottom:0}.ui-text-type-container ::ng-deep app-ui-text-type-item+app-ui-text-type-item{padding-top:20px;border-top:1px solid #ececec}"]
                }] }
    ];
    UiTextTypeComponent.ctorParameters = function () { return []; };
    UiTextTypeComponent.propDecorators = {
        title: [{ type: Input }],
        colorCode: [{ type: Input }]
    };
    return UiTextTypeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTextTypeItemComponent = /** @class */ (function () {
    function UiTextTypeItemComponent() {
    }
    /**
     * @return {?}
     */
    UiTextTypeItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiTextTypeItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-text-type-item',
                    template: "<div class=\"ui-text-type-item\">\n  <span class=\"ui-text-type-color\" [style.background-color]=\"colorCode\"></span>\n  <div class=ui-text-type-content>\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-text-type-item{display:flex;margin-bottom:-5px}.ui-text-type-item .ui-text-type-color{display:inline-block;width:5px;min-width:5px;height:5px;margin-top:7px;border-radius:50%}.ui-text-type-item .ui-text-type-color:not(:last-child){margin-right:10px}.ui-text-type-item ::ng-deep .ui-text-type-content p{margin:0 0 5px;font-size:.75rem;font-weight:400;line-height:1.67;letter-spacing:.2px;color:#414141;text-align:left}"]
                }] }
    ];
    UiTextTypeItemComponent.ctorParameters = function () { return []; };
    UiTextTypeItemComponent.propDecorators = {
        colorCode: [{ type: Input }]
    };
    return UiTextTypeItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTitleStyle1Component = /** @class */ (function () {
    function UiTitleStyle1Component() {
        this.isShowOther = false;
        this.otherEleStatus = '';
        this.isFullCol = true; // true: title nowrap; false: title wrap
    }
    /**
     * @return {?}
     */
    UiTitleStyle1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.otherEleStatus = this.isShowOther ? ' active' : '';
    };
    UiTitleStyle1Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-title-style1',
                    template: "<div class=\"title-ele-block\" [ngClass]=\"otherEleStatus\" >\n    <h2 class=\"space-ui-title title-style1\" [ngClass]=\"{'notFullCol': !isFullCol}\">\n        <ng-content select=\"[textType=titleText]\"></ng-content>\n    </h2>\n    <div class=\"title-other-element\" >\n        <ng-content select=\"[textType=otherEle]\"></ng-content>\n    </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.title-style1{text-align:left;font-size:1.25rem;font-weight:700;line-height:normal;color:#414141;display:inline-flex;align-items:center;white-space:nowrap}.title-style1.notFullCol{white-space:normal}.title-style1:before{content:' ';width:4px;height:1.5rem;background-image:linear-gradient(to bottom,#003781 60%,#007d8c 40%);margin-right:10px;display:inline-block;vertical-align:top;position:relative;top:0}@media screen and (min-width:1025px){.title-style1:before{height:2.4vw}}.title-ele-block{text-align:left}.title-ele-block.active{display:flex;justify-content:space-between;align-items:center}.title-ele-block.active .title-other-element ::ng-deep .ui-link-block{margin-top:10px}"]
                }] }
    ];
    UiTitleStyle1Component.ctorParameters = function () { return []; };
    UiTitleStyle1Component.propDecorators = {
        isShowOther: [{ type: Input }],
        otherEleStatus: [{ type: Input }],
        isFullCol: [{ type: Input }]
    };
    return UiTitleStyle1Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiTitleTabComponent = /** @class */ (function () {
    function UiTitleTabComponent() {
    }
    /**
     * @return {?}
     */
    UiTitleTabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiTitleTabComponent.prototype.tabLength = /**
     * @return {?}
     */
    function () {
        // console.log(this.tabs1,this.tabs2);
        if (this.tabs1.length != 0 || this.tabs2.length != 0) {
            if (this.tabs1.length != 0) {
                return this.tabs1.first.tabs.length;
            }
            else {
                // console.log(this.tabs2);
                return this.tabs2.first.tabs.length;
            }
        }
        else {
            //todo throw error
            console.warn('You can only put <app-ui-tab-style1 tabInfo> or <app-ui-tab-style2 tabInfo> in it.');
        }
    };
    UiTitleTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-title-tab',
                    template: "<div class=\"ui-title-tab\" [ngClass]=\"{'tab-length-2':tabLength()==2,\n                                      'tab-length-3':tabLength()==3,\n                                      'tab-length-4':tabLength()==4,\n                                      'tab-length-5':tabLength()>5}\">\n  <div class=\"title-content\">\n    <ng-content select=\"[titleInfo]\"></ng-content>\n  </div>\n  <div class=\"tab-content\">\n    <ng-content select=\"[tabInfo]\"></ng-content>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-title-tab{font-size:0;display:flex}@media only screen and (min-width:768px){.ui-title-tab .title-content:before{display:inline-block;content:'';width:0;height:100%;vertical-align:middle}.ui-title-tab .title-content ::ng-deep app-ui-title-style1{display:inline-block;vertical-align:middle;max-width:calc(100% - 1px)}.ui-title-tab .title-content{width:calc(100% - 375px)}.ui-title-tab .tab-content{max-width:375px}.ui-title-tab.tab-length-2 .title-content{width:calc(100% - 188px)}.ui-title-tab.tab-length-2 .tab-content{width:188px}.ui-title-tab.tab-length-3 .title-content{width:calc(100% - 281px)}.ui-title-tab.tab-length-3 .tab-content{width:281px}.ui-title-tab.tab-length-4 .title-content{width:calc(100% - 375px)}.ui-title-tab.tab-length-4 .tab-content{width:375px}.ui-title-tab.tab-length-5 .title-content{width:calc(100% - 375px)}.ui-title-tab.tab-length-5 .tab-content{width:375px}}@media only screen and (max-width:767px){.ui-title-tab{display:block}.ui-title-tab .title-content{margin-bottom:0}}"]
                }] }
    ];
    UiTitleTabComponent.ctorParameters = function () { return []; };
    UiTitleTabComponent.propDecorators = {
        tabs1: [{ type: ContentChildren, args: [UiTabStyle1Component,] }],
        tabs2: [{ type: ContentChildren, args: [UiTabStyle2Component,] }]
    };
    return UiTitleTabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiHammerConfig = /** @class */ (function (_super) {
    __extends(UiHammerConfig, _super);
    function UiHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = (/** @type {?} */ ({
            'swipe': { velocity: 0.4, threshold: 20, direction: DIRECTION_ALL } // override default settings
        }));
        return _this;
    }
    // buildHammer(element: HTMLElement) {
    //   let mc = new Hammer(element, {
    //     touchAction: 'pan-y',
    //   });
    //   return mc;
    // }
    // buildHammer(element: HTMLElement) {
    //   let mc = new Hammer(element, {
    //     touchAction: 'pan-y',
    //   });
    //   return mc;
    // }
    /**
     * @param {?} element
     * @return {?}
     */
    UiHammerConfig.prototype.buildHammer = 
    // buildHammer(element: HTMLElement) {
    //   let mc = new Hammer(element, {
    //     touchAction: 'pan-y',
    //   });
    //   return mc;
    // }
    /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var options = {
            touchAction: 'pan-y'
        };
        // console.warn('element.attributes[\'data-mc-options\']', element.attributes['data-mc-options']);
        if (element.attributes['data-mc-options']) {
            try {
                /** @type {?} */
                var parseOptions = JSON.parse(element.attributes['data-mc-options'].nodeValue);
                options = parseOptions;
            }
            catch (err) {
                //todo throw error
                console.warn('An error occurred when attempting to parse Hammer.js options: ', err);
            }
        }
        // console.warn('options', options);
        /** @type {?} */
        var mc = new Hammer(element, options);
        // keep default angular config
        // mc.get('pinch').set({enable: true});
        // mc.get('rotate').set({enable: true});
        // console.warn('this.overrides', this.overrides);
        // // retain support for angular overrides object
        // for (const eventName in this.overrides) {
        //   mc.get(eventName).set(this.overrides[eventName]);
        // }
        // console.warn('yo', options.hasOwnProperty('touchAction'), options.touchAction === 'pan-x');
        if (options.hasOwnProperty('touchAction')
            && options.touchAction === 'pan-x') {
            mc.get('swipe').set({ velocity: 0.4, threshold: 20, direction: DIRECTION_ALL });
        }
        return mc;
    }; // end buildHammer
    return UiHammerConfig;
}(HammerGestureConfig));
var ɵ0 = adapterFactory;
var UIModule = /** @class */ (function () {
    function UIModule() {
    }
    UIModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CoreModule,
                        CommonModule,
                        BrowserModule,
                        CountoModule,
                        NxIconModule,
                        NxPopoverModule,
                        NxButtonModule,
                        NxCheckboxModule,
                        NxProgressStepperModule,
                        NxRadioModule,
                        NxFormfieldModule,
                        NxDropdownModule,
                        NxDatefieldModule,
                        NxNativeDateModule,
                        NxProgressbarModule,
                        NxInputModule,
                        NxMessageModule,
                        NxGridModule,
                        NxModalModule.forRoot(),
                        NxAccordionModule,
                        NxSwitcherModule,
                        CalendarModule.forRoot({
                            provide: DateAdapter,
                            useFactory: ɵ0
                        }),
                        IonicModule.forRoot({ mode: 'ios' }),
                        OwlDateTimeModule,
                        OwlNativeDateTimeModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    declarations: [
                        UiComponent,
                        UiBtnComponent,
                        UiProgressComponent,
                        CalendarComponent,
                        UiCalendarYearComponent,
                        UiCalendarYearMonthComponent,
                        UiFormCheckboxComponent,
                        UiFormSelectComponent,
                        UiBtnLikeAddComponent,
                        UiFormTitleSmComponent,
                        UiFormRadioComponent,
                        UiFormInputComponent,
                        UiFormErrorMsgComponent,
                        UiFormDateComponent,
                        UiTitleStyle1Component,
                        UiModalStyleFeedbackComponent,
                        UIMainLeftComponent,
                        UIMainSideMenuComponent,
                        UiMainCollapseComponent,
                        UiMainFullComponent,
                        UIInnerPageComponent,
                        UiInnerStepComponent,
                        UiInnerFullComponent,
                        UiItemSlidingComponent,
                        UiItemOptionsComponent,
                        UiItemOptionComponent,
                        UiItemComponent,
                        UiModalConfirmComponent,
                        UiFormCheckbox2Component,
                        UiInfoText1Component,
                        UiCollapseText1Component,
                        UiCardStyleTag1Component,
                        UiCollapseCard1Component,
                        UiInfoText2Component,
                        UiLinkComponent,
                        UiFormRadioTagComponent,
                        UiBtnLayoutComponent,
                        UiCollapseGroupComponent,
                        UiFormLayoutAdvancedComponent,
                        UiTabPageComponent,
                        UiContentBGapComponent,
                        UiTabStyle1Component,
                        UiTabStyle2Component,
                        UiTitleTabComponent,
                        UiTabChildComponent,
                        UiTabMoreComponent,
                        UiFormLayoutRowComponent,
                        UiFormLayoutColComponent,
                        UiDataGroupComponent,
                        UiLinkBgComponent,
                        UiFormCheckbox3Component,
                        UiFormSearchComponent,
                        UiProgressStepperStyleComponent,
                        UiProgressStepperStyleChildComponent,
                        UiInformationBtnComponent,
                        UiInformationContentComponent,
                        UiListData2Component,
                        UiFormErrorMsgInfoComponent,
                        UiFormErrorMsgTitleComponent,
                        UiFormErrorMsgListComponent,
                        UiTextTypeComponent,
                        UiTextTypeItemComponent,
                        UiDetectionScrollComponent,
                        UiProgressCircleComponent,
                        UiFormTimepickerComponent,
                        UiFormSwitcherComponent,
                        UiTableContentComponent,
                        UiTableRowComponent,
                        UiTableRowHeadComponent,
                        UiTableItemComponent,
                        UiTableCardComponent,
                        UiTableListComponent,
                        ListItemComponent,
                        UiTableTitleComponent,
                        UiCollapseContentComponent,
                        UiEmptyDefaultComponent,
                        UiFormRadioGroup,
                        UiCardContentBtnComponent,
                        UiTableEditContentComponent,
                        UiInfiniteScrollComponent,
                        UiModalStyleMenuComponent,
                        UiTableList2Component,
                        UiTableContent2Component,
                        UiTeamTitleTextComponent,
                        UiModalStyleImgBaseComponent,
                        UiModalStyleText1Component,
                        UiSwitchContentComponent,
                        UiCalendarMonthComponent,
                        UiRefreshIconComponent,
                        UiFormRadio2Component,
                        UiCalendarEventListComponent,
                        UiCalendarMonthCollapseComponent,
                        UiModalStyleCustComponent,
                        UiModalBaseComponent,
                        UiTableTextGroupComponent,
                        UiTableControlBarComponent,
                        UiCollapseContentShowComponent,
                        UiCollapseContentDetailComponent,
                        UiFormTextareaComponent,
                        UiModalMsgComponent,
                        UiFormTextareaComponent,
                        UiLoadingBoxComponent,
                        UiInformationComponent
                    ],
                    exports: [
                        CalendarComponent,
                        UIMainLeftComponent,
                        UIMainSideMenuComponent,
                        UiMainCollapseComponent,
                        UiMainFullComponent,
                        UIInnerPageComponent,
                        UiInnerStepComponent,
                        UiInnerFullComponent,
                        UiComponent,
                        UiItemSlidingComponent,
                        UiCollapseText1Component,
                        UiCardStyleTag1Component,
                        UiCollapseCard1Component,
                        UiInfoText2Component,
                        UiLinkComponent,
                        UiFormRadioTagComponent,
                        UiBtnComponent,
                        UiProgressComponent,
                        CalendarComponent,
                        UiFormCheckboxComponent,
                        UiFormSelectComponent,
                        UiBtnLikeAddComponent,
                        UiFormTitleSmComponent,
                        UiFormInputComponent,
                        UiFormErrorMsgComponent,
                        UiFormDateComponent,
                        UiTitleStyle1Component,
                        UiModalStyleFeedbackComponent,
                        UiItemOptionsComponent,
                        UiItemOptionComponent,
                        UiItemComponent,
                        UiModalConfirmComponent,
                        UiFormCheckbox2Component,
                        UiInfoText1Component,
                        UiBtnLayoutComponent,
                        UiCollapseGroupComponent,
                        UiFormLayoutAdvancedComponent,
                        UiFormLayoutRowComponent,
                        UiFormLayoutColComponent,
                        UiDataGroupComponent,
                        UiTabStyle2Component,
                        UiTabChildComponent,
                        NxIconModule,
                        UiLinkBgComponent,
                        UiListData2Component,
                        UiFormCheckbox3Component,
                        UiFormSearchComponent,
                        UiFormSelectComponent,
                        UiTextTypeComponent,
                        UiTextTypeItemComponent,
                        UiFormTimepickerComponent,
                        UiFormSwitcherComponent,
                        UiProgressCircleComponent,
                        UiFormRadioGroup,
                        UiInfiniteScrollComponent,
                        UiProgressStepperStyleComponent,
                        UiCardContentBtnComponent,
                        UiTabPageComponent,
                        UiContentBGapComponent,
                        UiTabStyle1Component,
                        UiTitleTabComponent,
                        UiInformationBtnComponent,
                        UiInformationContentComponent,
                        UiTableListComponent,
                        UiTableList2Component,
                        UiTableContentComponent,
                        UiTableContent2Component,
                        UiTableEditContentComponent,
                        UiTableCardComponent,
                        UiTableRowComponent,
                        UiTableRowHeadComponent,
                        UiTableItemComponent,
                        UiTableTitleComponent,
                        UiCollapseContentComponent,
                        ListItemComponent,
                        UiTeamTitleTextComponent,
                        UiModalStyleImgBaseComponent,
                        UiModalStyleText1Component,
                        UiDetectionScrollComponent,
                        UiSwitchContentComponent,
                        UiRefreshIconComponent,
                        UiFormRadio2Component,
                        UiCalendarEventListComponent,
                        UiCalendarMonthCollapseComponent,
                        UiModalStyleCustComponent,
                        UiTableTextGroupComponent,
                        UiTableControlBarComponent,
                        UiCollapseContentShowComponent,
                        UiCollapseContentDetailComponent,
                        UiFormTextareaComponent,
                        UiModalMsgComponent,
                        UiLoadingBoxComponent,
                        UiInformationComponent,
                        UiFormRadioComponent,
                        UiEmptyDefaultComponent,
                        UiTabMoreComponent,
                        UiProgressStepperStyleChildComponent,
                        UiFormErrorMsgInfoComponent
                    ],
                    providers: [{
                            provide: HAMMER_GESTURE_CONFIG,
                            useClass: UiHammerConfig
                        }, NumberFormatPipe]
                },] }
    ];
    return UIModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MainMenuOption = /** @class */ (function () {
    function MainMenuOption(link, name, code, imgSrc) {
        this.link = link;
        this.name = name;
        this.code = code;
        this.imgSrc = imgSrc;
    }
    /**
     * @return {?}
     */
    MainMenuOption.prototype.getCode = /**
     * @return {?}
     */
    function () {
        return this.code;
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} link
     * @return {THIS}
     */
    MainMenuOption.prototype.setLink = /**
     * @template THIS
     * @this {THIS}
     * @param {?} link
     * @return {THIS}
     */
    function (link) {
        (/** @type {?} */ (this)).link = link;
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    MainMenuOption.prototype.getLink = /**
     * @return {?}
     */
    function () {
        return this.link;
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} name
     * @return {THIS}
     */
    MainMenuOption.prototype.setName = /**
     * @template THIS
     * @this {THIS}
     * @param {?} name
     * @return {THIS}
     */
    function (name) {
        (/** @type {?} */ (this)).name = name;
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    MainMenuOption.prototype.getName = /**
     * @return {?}
     */
    function () {
        return this.name;
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} imgSrc
     * @return {THIS}
     */
    MainMenuOption.prototype.setImgSrc = /**
     * @template THIS
     * @this {THIS}
     * @param {?} imgSrc
     * @return {THIS}
     */
    function (imgSrc) {
        (/** @type {?} */ (this)).imgSrc = imgSrc;
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    MainMenuOption.prototype.getImgSrc = /**
     * @return {?}
     */
    function () {
        return this.imgSrc;
    };
    return MainMenuOption;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectOption$1 = /** @class */ (function () {
    function SelectOption$$1(value, name) {
        this.value = value;
        this.name = name;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} isDefault
     * @return {THIS}
     */
    SelectOption$$1.prototype.setIsDefault = /**
     * @template THIS
     * @this {THIS}
     * @param {?} isDefault
     * @return {THIS}
     */
    function (isDefault) {
        (/** @type {?} */ (this)).isDefault = isDefault;
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    SelectOption$$1.prototype.getName = /**
     * @return {?}
     */
    function () {
        return this.name;
    };
    /**
     * @return {?}
     */
    SelectOption$$1.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this.value;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    SelectOption$$1.prototype.setName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.name = name;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectOption$$1.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    return SelectOption$$1;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { UiComponent, UiHammerConfig, UIModule, CalendarComponent, UiInfiniteScrollComponent, UiFormRadioComponent, UiInfoText2Component, UiFormSearchComponent, UiFormLayoutAdvancedComponent, UIMainLeftComponent, MainMenuOption, UIInnerPageComponent, CONTENTGAP, STEPSTYLETYPE, TABLETIELESTYLETYPE, TABLELISTSTYLETYPE, animationCollapse, animationEnterLeavePage, animationModalOpen, animationModalClose, UiFormInputComponent, UiInformationBtnComponent, UiInformationContentComponent, UiFormSelectComponent, SelectOption$1 as SelectOption, UiContentBGapComponent, UiTableListComponent, UiProgressComponent, ModalManager, UiMainCollapseComponent, CalendarComponent as ɵb, CustomDateFormatter as ɵc, UiCalendarMonthCollapseComponent as ɵdn, UiCalendarMonthComponent as ɵdj, CustomEventTitleFormatter as ɵd, UiCalendarYearMonthComponent as ɵg, UiCalendarYearComponent as ɵf, UiBtnLayoutComponent as ɵbm, UiBtnLikeAddComponent as ɵj, UiBtnComponent as ɵa, UiCalendarEventListComponent as ɵdm, UiCardContentBtnComponent as ɵcx, UiCardStyleTag1Component as ɵbh, UiCollapseCard1Component as ɵbi, UiCollapseContentDetailComponent as ɵds, UiCollapseContentShowComponent as ɵdr, UiCollapseGroupComponent as ɵbn, UiCollapseText1Component as ɵbf, UiDataGroupComponent as ɵbx, UiDetectionScrollComponent as ɵcj, UiEmptyDefaultComponent as ɵcw, UiFormCheckboxComponent as ɵh, UiFormCheckbox2Component as ɵi, UiFormCheckbox3Component as ɵbz, UiFormDateComponent as ɵo, UiFormErrorMsgInfoComponent as ɵce, UiFormErrorMsgListComponent as ɵcg, UiFormErrorMsgTitleComponent as ɵcf, UiFormErrorMsgComponent as ɵn, UiFormLayoutAdvancedComponent as ɵbo, UiFormLayoutColComponent as ɵbw, UiFormLayoutRowComponent as ɵbv, UiFormRadioGroup as ɵm, UiFormRadioTagComponent as ɵbl, UiFormRadioComponent as ɵl, UiFormRadio2Component as ɵdl, UiFormSearchComponent as ɵca, UiFormSwitcherComponent as ɵcn, UiFormTextareaComponent as ɵdt, MY_NATIVE_FORMATS as ɵcl, UiFormTimepickerComponent as ɵcm, UiFormTitleSmComponent as ɵk, UiInfiniteScrollComponent as ɵcz, UiInfoText1Component as ɵbe, UiInfoText2Component as ɵbj, UiInformationComponent as ɵdw, UiInformationService as ɵe, UiItemOptionComponent as ɵba, UiItemOptionsComponent as ɵz, UiItemSlidingComponent as ɵy, UiItemComponent as ɵbb, UiLinkBgComponent as ɵby, UiLinkComponent as ɵbk, UiListData2Component as ɵcd, UiLoadingBoxComponent as ɵdv, UiModalBaseComponent as ɵbd, UiModalConfirmComponent as ɵbc, UiModalMsgComponent as ɵdu, UiModalStyleCustComponent as ɵdo, UiModalStyleFeedbackComponent as ɵq, UiModalStyleImgBaseComponent as ɵde, UiModalStyleMenuComponent as ɵda, UiModalStyleText1Component as ɵdh, UiProgressCircleComponent as ɵck, UiProgressStepperStyleChildComponent as ɵcc, UiProgressStepperStyleComponent as ɵcb, UiRefreshIconComponent as ɵdk, UiSwitchContentComponent as ɵdi, UiTabChildComponent as ɵbr, UiTabMoreComponent as ɵbs, UiTabPageComponent as ɵbp, UiTabStyle1Component as ɵbq, UiTabStyle2Component as ɵbt, UiTableCardComponent as ɵcs, UiCollapseContentComponent as ɵcv, UiTableContentComponent as ɵco, UiTableContent2Component as ɵdc, UiTableControlBarComponent as ɵdq, UiTableEditContentComponent as ɵcy, UiTableItemComponent as ɵcq, ListItemComponent as ɵct, UiTableList2Component as ɵdb, UiTableRowHeadComponent as ɵcp, UiTableRowComponent as ɵcr, UiTableTextGroupComponent as ɵdp, UiTableTitleComponent as ɵcu, UiTeamTitleTextComponent as ɵdd, UiTextTypeItemComponent as ɵci, UiTextTypeComponent as ɵch, UiTitleStyle1Component as ɵp, UiTitleTabComponent as ɵbu, UiInnerFullComponent as ɵx, UIInnerPageComponent as ɵv, UiInnerStepComponent as ɵw, UiMainFullComponent as ɵu, UIMainLeftComponent as ɵr, UIMainSideMenuComponent as ɵs, animationCollapse as ɵbg, animationEnterLeavePage as ɵt, animationModalClose as ɵdg, animationModalOpen as ɵdf };

//# sourceMappingURL=allianzSND-ui.js.map