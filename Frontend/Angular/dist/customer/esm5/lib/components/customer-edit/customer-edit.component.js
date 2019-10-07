/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Output, ViewChild, Input, TemplateRef, EventEmitter, Optional, Inject, ChangeDetectorRef } from '@angular/core';
import { ProfileCodeService, ValidationResult, Language, StringUtils } from '@allianzSND/core';
import { CustomerService } from '../../service/customer-service.service';
import { CustomerDetail } from '../../service/model/CustomerDetail';
import { CustomerUtils } from '../../utils/customer-utils';
import { CustomerTel } from '../../service/model/CustomerTel';
import { CustomerEmail } from '../../service/model/CustomerEmail';
import { CustomerAddress } from '../../service/model/CustomerAddress';
import { CustomerDetailResult } from '../bean/customer-detail-result';
import { CUSTOMER_STATE } from '../../interface/storeCustomer.interface';
import { storeCustomerToken, customerActionToken } from '../../injectionToken/injection-token';
var CustomerEditComponent = /** @class */ (function () {
    function CustomerEditComponent(customerService, profileCodeService, customerUtils, changeDetector, customCustomerAction, customerStore) {
        this.customerService = customerService;
        this.profileCodeService = profileCodeService;
        this.customerUtils = customerUtils;
        this.changeDetector = changeDetector;
        this.customCustomerAction = customCustomerAction;
        this.customerStore = customerStore;
        this.sendContentHeight = new EventEmitter();
        this.editModel = new EventEmitter();
        this.validationResult = new ValidationResult();
        this.customerDetail = new CustomerDetail();
        this.pageTitle = 'Edit Profile'; //default
        //select options
        this.optionTel = new Array();
        this.optionAddress = new Array();
        this.optionEmail = new Array();
        this.optionAge = new Array();
        this.optionGender = new Array();
        this.optionIncome = new Array();
        this.optionSource = new Array();
        this.optionMarriage = new Array();
        this.optionChildren = new Array();
        this.optionFamiliarity = new Array();
        this.optionRecentStatus = new Array();
        this.optionManpa = new Array();
        this.optionContactFrequancyPerYear = new Array();
        this.language = new Language();
        this.disableAge = false;
        this.isDisplaySavePopup = false;
        this.btnSaveDisable = false;
        this.isShow = false;
        this._telLimit = 6;
        this._emailLimit = 3;
        this._addressLimit = 3;
        this.edit_type = "add";
        /** @type {?} */
        var telCodeArray = this.profileCodeService.getCodeArray('Customer_TelType');
        /** @type {?} */
        var emailCodeArray = this.profileCodeService.getCodeArray('Customer_EmailType');
        /** @type {?} */
        var addressCodeArray = this.profileCodeService.getCodeArray('Customer_AddressType');
        /** @type {?} */
        var ageCodeArray = this.profileCodeService.getCodeArray('Customer_Age');
        /** @type {?} */
        var genderCodeArray = this.profileCodeService.getCodeArray('Customer_Gender');
        /** @type {?} */
        var incomeCodeArray = this.profileCodeService.getCodeArray('Customer_Income');
        /** @type {?} */
        var sourceCodeArray = this.profileCodeService.getCodeArray('Customer_Source');
        /** @type {?} */
        var marriageCodeArray = this.profileCodeService.getCodeArray('Customer_Marriage');
        /** @type {?} */
        var childrenCodeArray = this.profileCodeService.getCodeArray('Customer_Children');
        /** @type {?} */
        var familiarityCodeArray = this.profileCodeService.getCodeArray('Customer_Familiarity');
        /** @type {?} */
        var recentStatusCodeArray = this.profileCodeService.getCodeArray('Customer_RecentStatus');
        /** @type {?} */
        var manpaCodeArray = this.profileCodeService.getCodeArray('Customer_Status');
        /** @type {?} */
        var contactFrequancyCodeArray = this.profileCodeService.getCodeArray('Customer_ContactFrequancy');
        this.optionTel = this.customerUtils.setCode2Option(telCodeArray);
        this.optionEmail = this.customerUtils.setCode2Option(emailCodeArray);
        this.optionAddress = this.customerUtils.setCode2Option(addressCodeArray);
        this.optionAge = this.customerUtils.setCode2Option(ageCodeArray);
        this.optionGender = this.customerUtils.setCode2Option(genderCodeArray);
        this.optionIncome = this.customerUtils.setCode2Option(incomeCodeArray);
        this.optionSource = this.customerUtils.setCode2Option(sourceCodeArray);
        this.optionMarriage = this.customerUtils.setCode2Option(marriageCodeArray);
        this.optionChildren = this.customerUtils.setCode2Option(childrenCodeArray);
        this.optionFamiliarity = this.customerUtils.setCode2Option(familiarityCodeArray);
        this.optionRecentStatus = this.customerUtils.setCode2Option(recentStatusCodeArray);
        this.optionManpa = this.customerUtils.setCode2Option(manpaCodeArray);
        this.optionContactFrequancyPerYear = this.customerUtils.setCode2Option(contactFrequancyCodeArray);
    }
    /**
     * @return {?}
     */
    CustomerEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.customerStore) {
            this.customerStore.getCurrentCustomerDetail().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.customerDetail = data;
                if (StringUtils.isEmpty(_this.customerDetail.clientID)) {
                    //ADD
                    console.log("add :", _this.customerDetail);
                    _this.pageTitle = "";
                    _this.disableAge = false;
                    _this.customerDetail = new CustomerDetail();
                    _this.customerDetail.ageRange = '';
                    _this.edit_type = "add";
                }
                else {
                    //Edit
                    console.log("edit :", _this.customerDetail);
                    _this.pageTitle = _this.customerDetail.lastName + _this.customerDetail.firstName;
                    if (StringUtils.isNotEmpty(_this.customerDetail.birthday)) {
                        _this.disableAge = true;
                    }
                    else {
                        _this.customerDetail.ageRange = '';
                        _this.disableAge = false;
                    }
                    _this.edit_type = "edit";
                }
                _this.editModel.emit(_this.customerDetail);
                _this.changeDetector.detectChanges();
                _this.isShow = true;
            }));
        }
    };
    /**
     * @return {?}
     */
    CustomerEditComponent.prototype.validationForm = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log(this.customerDetail);
        //valid customer
        this.validationResult = this.customerService.validProfile(this.customerDetail);
        if (this.validationResult != null) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.scrollToError();
            }), 200);
        }
    };
    // Save btn click
    // Save btn click
    /**
     * @param {?} event
     * @return {?}
     */
    CustomerEditComponent.prototype.saveProfile = 
    // Save btn click
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        //valid customer
        this.validationForm();
        console.log(this.validationResult.isTrue());
        if (this.validationResult.isTrue()) {
            this.btnSaveDisable = true;
            //if tel/email/address all empty data , skip it
            /** @type {?} */
            var tmpTelArray_1 = [];
            /** @type {?} */
            var tmpEmailArray_1 = [];
            /** @type {?} */
            var tmpAddressArray_1 = [];
            this.customerDetail.tels.forEach((/**
             * @param {?} tel
             * @return {?}
             */
            function (tel) {
                if (!tel.isEmpty())
                    tmpTelArray_1.push(tel);
            }));
            this.customerDetail.emails.forEach((/**
             * @param {?} email
             * @return {?}
             */
            function (email) {
                if (!email.isEmpty())
                    tmpEmailArray_1.push(email);
            }));
            this.customerDetail.addresses.forEach((/**
             * @param {?} address
             * @return {?}
             */
            function (address) {
                if (!address.isEmpty())
                    tmpAddressArray_1.push(address);
            }));
            this.customerDetail.tels = tmpTelArray_1;
            this.customerDetail.emails = tmpEmailArray_1;
            this.customerDetail.addresses = tmpAddressArray_1;
            console.log("customer-edit-save: ", this.customerDetail);
            this.customerService.saveCustomerDetail(this.customerDetail).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('saveDetail', data);
                //this.isDisplaySavePopup = true;
                //set result
                /** @type {?} */
                var result = new CustomerDetailResult();
                result.detailSaveSuccess = data.status;
                result.editDetail = _this.customerDetail;
                _this.customerService.profileResult = result;
                if (_this.customerStore) {
                    _this.customerStore.setCurrentCustomerDetail(_this.customerDetail);
                    /** @type {?} */
                    var state = _this.edit_type == "add" ? CUSTOMER_STATE.ADD_SAVED : CUSTOMER_STATE.EDIT_SAVED;
                    _this.customerStore.setState(state);
                }
                if (_this.customCustomerAction) {
                    _this.customCustomerAction.afterCustomerEditSave(_this.customerDetail);
                }
                _this.btnSaveDisable = false;
            }));
        }
    };
    /**
     * @return {?}
     */
    CustomerEditComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //獲得內容高
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.contentHeight = _this.content.nativeElement.offsetHeight;
            console.log('ele Height:', _this.contentHeight);
        }), 600);
        this.sendContentHeight.emit(this.contentHeight);
    };
    /**
     * @param {?} birthday
     * @return {?}
     */
    CustomerEditComponent.prototype.countAgeRange = /**
     * @param {?} birthday
     * @return {?}
     */
    function (birthday) {
        console.debug('birthday', birthday);
        this.customerDetail.birthday = birthday;
        if (StringUtils.isEmpty(birthday)) {
            this.customerDetail.ageRange = '';
            this.disableAge = false;
        }
        else {
            /** @type {?} */
            var age = this.customerUtils.countAge(birthday);
            /** @type {?} */
            var ageRange = this.customerUtils.countAgeRange(age);
            console.debug('ageRange', ageRange);
            if (ageRange != undefined) {
                this.customerDetail.ageRange = ageRange;
                this.changeDetector.detectChanges();
                this.disableAge = true;
            }
        }
        this.changeDetector.detectChanges();
    };
    /**
     * @return {?}
     */
    CustomerEditComponent.prototype.getTelLimit = /**
     * @return {?}
     */
    function () {
        return this._telLimit;
    };
    /**
     * @return {?}
     */
    CustomerEditComponent.prototype.getEmailLimit = /**
     * @return {?}
     */
    function () {
        return this._emailLimit;
    };
    /**
     * @return {?}
     */
    CustomerEditComponent.prototype.getAddressLimit = /**
     * @return {?}
     */
    function () {
        return this._addressLimit;
    };
    /**
     * @return {?}
     */
    CustomerEditComponent.prototype.onAddTelGroup = /**
     * @return {?}
     */
    function () {
        console.debug('onAddTelGroup');
        this.customerDetail.tels.push(new CustomerTel('', 'TelHome', '', 'APP'));
    };
    /**
     * @return {?}
     */
    CustomerEditComponent.prototype.onAddMailGroup = /**
     * @return {?}
     */
    function () {
        console.debug('onAddMailGroup');
        this.customerDetail.addEmail(new CustomerEmail('', 'MailHome', '', 'APP'));
    };
    /**
     * @return {?}
     */
    CustomerEditComponent.prototype.onAddAddressGroup = /**
     * @return {?}
     */
    function () {
        console.debug('onAddAddressGroup');
        this.customerDetail.addAddress(new CustomerAddress('', 'AddressTypeHome', '', '', '', '', '', 'APP'));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CustomerEditComponent.prototype.onRemoveTelGroup = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        console.debug('onRemoveTelGroup', index);
        this.customerDetail.tels.splice(index, 1);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CustomerEditComponent.prototype.onRemoveEmailGroup = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        console.debug('onRemoveEmailGroup', index);
        this.customerDetail.emails.splice(index, 1);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CustomerEditComponent.prototype.onRemoveAddressGroup = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        console.debug('onRemoveAddressGroup', index);
        this.customerDetail.addresses.splice(index, 1);
    };
    /**
     * @return {?}
     */
    CustomerEditComponent.prototype.scrollToError = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var errorBlock = document.body.getElementsByClassName('error-msg');
        if (errorBlock.item(0)) {
            errorBlock.item(0).parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // if (errorBlock[0]) errorBlock[0].scrollIntoView({ behavior: 'smooth', block: 'start' })
    };
    CustomerEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-customer-edit',
                    template: "<app-ui-inner-page *ngIf=\"isShow\" [title]=\"[pageTitle | translate ]\" [contentHeight]=\"this.contentHeight\" >\n  <div main>\n    <div #inpageMain class=\"layout-block\">\n      <div class=\"layout-style-single\">\n        <div class=\"form-all page-cust-info\" action=\"\">\n          <div class=\"profile-img-block img-block\" [ngClass]=\"customerDetail.dataSource == 'OPUS' ? '': ' active'\">\n              <img class=\"normal-img\" src=\"assets/img/img-customer-profile.svg\">\n              <img class=\"active-img\" src=\"assets/img/img-cust-profile-active.svg\">\n          </div>\n          <!-- {{customerProfile.lastName}} -->\n          <div *ngTemplateOutlet=\"editPreTemplate\"></div>\n          <app-ui-form-layout-advanced>\n            <!-- row1 -->\n            <app-ui-data-group *ngIf=\"customerDetail.dataSource != 'OPUS'\">\n              <ng-container textType=\"dataContent\">\n                <app-ui-form-layout-row>\n                    <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                      <app-ui-form-input [inputTitle]=\"[language.lastName | translate]\" [name]=\"'lastName'\" [(nxValue)]=\"customerDetail.lastName\" [placeholder]=\"[language.lastNamePlaceholder | translate]\" [isDisable]=\"false\" [isError]=\"validationResult.isError('lastName')\"></app-ui-form-input>\n                      <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('lastName') == 'required'\">{{language.wrongLastName |translate }}</app-ui-form-error-msg>\n                    </app-ui-form-layout-col>\n                    <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                      <app-ui-form-input [inputTitle]=\"[language.firstName | translate]\" [name]=\"'firstName'\" [(nxValue)]=\"customerDetail.firstName\" [placeholder]=\"[language.firstNamePlaceholder | translate]\" [isDisable]=\"false\"  [isError]=\"validationResult.isError('firstName')\" (nxValueChange)=\"validationForm()\"></app-ui-form-input>\n                      <app-ui-form-error-msg></app-ui-form-error-msg>\n                    </app-ui-form-layout-col>\n                </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row1 -->\n            <!-- row2 -->\n            <app-ui-data-group [groupName]=\"'tel'\" [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-phone.svg'\">\n              <ng-container textType=\"dataContent\">\n                <ng-container *ngIf=\"customerDetail.tels.length != 0 ; else noTelContent\">\n                    <app-ui-form-layout-row *ngFor=\"let tel of customerDetail.tels; index as i ; last as isLast\">\n                        <ng-container *ngIf=\"tel.dataSource != 'OPUS'\">\n                            <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"4\">\n                              <app-ui-form-select [isShowTitle]=\"false\" [selectTitle]=\"[language.phone | translate]\" [(nxValue)]=\"tel.telType\" [selectOption]='optionTel'></app-ui-form-select>\n                              <app-ui-form-error-msg></app-ui-form-error-msg>\n                            </app-ui-form-layout-col>\n                            <app-ui-form-layout-col [colPC]=\"9\" [colNB]=\"9\" [colPad]=\"9\" [colMobile]=\"8\" [hasRemove]=\"true\" (remove)=\"onRemoveTelGroup(i)\">\n                              <app-ui-form-input [type]=\"'tel'\" [maxLength]=\"50\" [inputTitle]=\"[language.phone | translate]\" [(nxValue)]=\"tel.tel\"  [isDisable]=\"false\"></app-ui-form-input>\n                              <app-ui-form-error-msg></app-ui-form-error-msg>\n                            </app-ui-form-layout-col>                            \n                        </ng-container>\n                        <ng-container *ngIf=\"isLast\">\n                            <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.notOPUSTelNumber() != getTelLimit()\" (add)=\"onAddTelGroup()\"></app-ui-form-layout-col>\n                        </ng-container>\n                      </app-ui-form-layout-row>\n                </ng-container>\n                \n                <ng-template #noTelContent>\n                    <app-ui-form-layout-row >\n                        <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.notOPUSTelNumber() != getTelLimit()\" (add)=\"onAddTelGroup()\"></app-ui-form-layout-col>\n                      </app-ui-form-layout-row>\n                </ng-template>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row2 -->\n            <!-- row3 -->\n\n            <app-ui-data-group [groupName]=\"'email'\" [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-mail.svg'\">\n              <ng-container textType=\"dataContent\">\n                \n                <ng-container *ngIf=\"customerDetail.emails.length != 0 ; else noMailContent\">\n                    <app-ui-form-layout-row *ngFor=\"let email of customerDetail.emails; index as i; last as isLast\">\n                        <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"4\">\n                            <app-ui-form-select [isShowTitle]=\"false\" [selectTitle]=\"[language.email | translate]\" [(nxValue)]=\"email.emailType\" [selectOption]='optionEmail'></app-ui-form-select>\n                            <app-ui-form-error-msg></app-ui-form-error-msg>\n                          </app-ui-form-layout-col>\n                          <app-ui-form-layout-col [colPC]=\"9\" [colNB]=\"9\" [colPad]=\"9\" [colMobile]=\"8\" [hasRemove]=\"true\" (remove)=\"onRemoveEmailGroup(i)\">\n                            <app-ui-form-input [inputTitle]=\"[language.email | translate]\"  [(nxValue)]=\"email.email\"  [isDisable]=\"false\"></app-ui-form-input>\n                            <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('email') == 'format'\">{{language.wrongEmail |translate }}</app-ui-form-error-msg>\n                          </app-ui-form-layout-col>\n                          <ng-container *ngIf=\"isLast\">\n                              <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.emails.length != getEmailLimit()\" (add)=\"onAddMailGroup()\"></app-ui-form-layout-col>\n                          </ng-container>\n                    </app-ui-form-layout-row>\n                </ng-container>\n                \n                <ng-template #noMailContent>\n                    <app-ui-form-layout-row>\n                        <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.emails.length != getEmailLimit()\" (add)=\"onAddMailGroup()\"></app-ui-form-layout-col>\n                    </app-ui-form-layout-row>\n                </ng-template>\n\n              </ng-container>\n            </app-ui-data-group>\n\n            <!-- end of row3 -->\n            <!-- row4 -->\n            <app-ui-data-group [groupName]=\"'addr'\" [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-addr.svg'\">\n              <ng-container textType=\"dataContent\" >\n\n                <ng-container *ngIf=\"customerDetail.addresses.length != 0 ; else noAddressContent\">\n                    <app-ui-form-layout-row *ngFor=\"let address of customerDetail.addresses; index as i; last as isLast\">\n\n                        <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"4\">\n                          <app-ui-form-select [isShowTitle]=\"false\" [selectTitle]=\"[language.address | translate]\" [(nxValue)]=\"address.addressType\" [selectOption]='optionAddress'  ></app-ui-form-select>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <div class=\"break-line\"></div>\n                        <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"4\" [colMobile]=\"6\">\n                          <app-ui-form-input [inputTitle]=\"[language.country | translate]\" [(nxValue)]=\"address.country\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"4\" [colMobile]=\"6\">\n                            <app-ui-form-input [inputTitle]=\"[language.city | translate]\" [(nxValue)]=\"address.city\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"4\" [colMobile]=\"6\">\n                            <app-ui-form-input [inputTitle]=\"[language.area | translate]\" [(nxValue)]=\"address.area\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"6\">\n                            <app-ui-form-input [inputTitle]=\"[language.code | translate]\" [(nxValue)]=\"address.zipcode\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"9\" [colNB]=\"9\" [colPad]=\"9\" [colMobile]=\"12\" [hasRemove]=\"true\" (remove)=\"onRemoveAddressGroup(i)\">\n                          <app-ui-form-input [inputTitle]=\"[language.address | translate]\" [(nxValue)]=\"address.address\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n\n                        <ng-container *ngIf=\"isLast\">\n                            <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.addresses.length != getAddressLimit()\" (add)=\"onAddAddressGroup()\"></app-ui-form-layout-col>\n                        </ng-container>\n                        \n      \n                      </app-ui-form-layout-row>\n                </ng-container>\n\n                <ng-template #noAddressContent>\n                    <app-ui-form-layout-row>\n                        <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.addresses.length != getAddressLimit()\" (add)=\"onAddAddressGroup()\"></app-ui-form-layout-col>\n                    </app-ui-form-layout-row>\n                </ng-template>\n\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row4 -->\n\n            <!-- row5 -->\n            <!-- TODO -->\n          <app-ui-data-group *ngIf=\"customerDetail.dataSource != 'OPUS'\">\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-form-date [title]=\"[language.birthday | translate ]\" [nxValue]=\"customerDetail.birthday\" (nxValueChange)=\"countAgeRange($event)\"></app-ui-form-date>\n                  <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('birthday') == 'date'\">{{language.wrongBirthday |translate }}</app-ui-form-error-msg>\n                </app-ui-form-layout-col>\n                <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-form-select [selectTitle]=\"[language.age | translate ]\" [(nxValue)]=\"customerDetail.ageRange\" [selectOption]='optionAge' [isDisable]=\"disableAge\" ></app-ui-form-select>\n                  <app-ui-form-error-msg></app-ui-form-error-msg>\n                </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n          </app-ui-data-group>\n            <!-- end of row5 -->\n\n\n          <ng-container *ngIf=\"customerDetail.dataSource != 'OPUS' ; else OPUSContent\">\n            <!-- row6 -->\n          <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.gender | translate ]\" [(nxValue)]=\"customerDetail.gender\" [selectOption]='optionGender' ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.occupation | translate ]\" [(nxValue)]=\"customerDetail.occupation\" [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n          </app-ui-data-group>\n            <!-- end of row6 -->\n\n            <!-- row7 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.company | translate ]\" [(nxValue)]=\"customerDetail.company\"  [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.annualIncome | translate ]\" [(nxValue)]=\"customerDetail.income\" [selectOption]='optionIncome' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row7 -->\n\n            <!-- row8 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.source | translate ]\" [selectOption]='optionSource' [(nxValue)]=\"customerDetail.source\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.marriage | translate ]\" [selectOption]='optionMarriage' [(nxValue)]=\"customerDetail.marriage\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row8 -->\n\n            <!-- row9 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.children | translate ]\" [selectOption]='optionChildren' [(nxValue)]=\"customerDetail.children\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.familiarity | translate ]\" [selectOption]='optionFamiliarity' [(nxValue)]=\"customerDetail.familiarity\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row9 -->\n          </ng-container>\n          \n          <ng-template #OPUSContent>\n             <!-- row6 -->\n          <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.occupation | translate ]\" [(nxValue)]=\"customerDetail.occupation\"  [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.company | translate ]\" [(nxValue)]=\"customerDetail.company\" [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n          </app-ui-data-group>\n            <!-- end of row6 -->\n\n            <!-- row7 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.annualIncome | translate ]\" [(nxValue)]=\"customerDetail.income\" [selectOption]='optionIncome' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.source | translate ]\" [selectOption]='optionSource' [(nxValue)]=\"customerDetail.source\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row7 -->\n\n            <!-- row8 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.marriage | translate ]\" [selectOption]='optionMarriage' [(nxValue)]=\"customerDetail.marriage\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.children | translate ]\" [selectOption]='optionChildren' [(nxValue)]=\"customerDetail.children\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row8 -->\n\n            <!-- row9 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.familiarity | translate ]\" [selectOption]='optionFamiliarity' [(nxValue)]=\"customerDetail.familiarity\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row9 -->\n        </ng-template>\n\n            <!-- row10 -->\n            <app-ui-data-group >\n              <ng-container textType=\"dataContent\">\n                  <app-ui-form-layout-row>\n                      <app-ui-form-layout-col>\n                        <app-ui-form-select [selectTitle]=\"[language.recentStatus | translate ]\" [(nxValue)]=\"customerDetail.recentStatus\" [selectOption]='optionRecentStatus' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                        <app-ui-form-error-msg></app-ui-form-error-msg>\n                      </app-ui-form-layout-col>\n\n                  </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row10 -->\n\n            <!-- row10 -->\n            <app-ui-data-group >\n                <ng-container textType=\"dataContent\">\n                    <app-ui-form-layout-row>\n                        <app-ui-form-layout-col>\n                            <app-ui-form-select [selectTitle]=\"[language.customerStatus | translate ]\" [(nxValue)]=\"customerDetail.manpa\" [selectOption]='optionManpa' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                    </app-ui-form-layout-row>\n                </ng-container>\n              </app-ui-data-group>\n              <!-- end of row10 -->\n\n            <!-- row11 -->\n            <app-ui-data-group >\n              <ng-container textType=\"dataContent\">\n                <app-ui-form-layout-row>\n                  <app-ui-form-layout-col >\n                    <app-ui-form-select [selectTitle]=\"[language.contactFrequencyYear | translate ]\"  [(nxValue)]=\"customerDetail.contactFrequancy\" [selectOption]='optionContactFrequancyPerYear' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row11 -->\n            <!-- row12 -->\n            <app-ui-data-group class=\"posibility-data-group\">\n              <ng-container textType=\"dataContent\">\n                <app-ui-form-layout-row>\n                    <app-ui-form-layout-col >\n                      <app-ui-form-title-sm>{{language.possibility |translate }}</app-ui-form-title-sm>\n                      <div class=\"tag-block\">\n                        <app-ui-form-radio-group [(nxValue)]=\"customerDetail.possibility\">\n                          <app-ui-form-radio-tag [checked]=\"customerDetail.possibility == 'HOT' ? true: false\" class=\"HOT wd-max\" [value]=\"'HOT'\">{{\"HOT\" | translate}}</app-ui-form-radio-tag>\n                          <app-ui-form-radio-tag [checked]=\"customerDetail.possibility == 'WARM' ? true: false\" class=\"WARM wd-max\" [value]=\"'WARM'\">{{\"WARM\" | translate}}</app-ui-form-radio-tag>\n                          <app-ui-form-radio-tag [checked]=\"customerDetail.possibility == 'COLD' ? true: false\" class=\"COLD wd-max\" [value]=\"'COLD'\">{{\"COLD\" | translate}}</app-ui-form-radio-tag>\n                        </app-ui-form-radio-group>\n                      </div>\n                    </app-ui-form-layout-col >\n                </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- row 12 -->\n          </app-ui-form-layout-advanced>\n          <div *ngTemplateOutlet=\"editPostTemplate\"></div>\n        </div>\n      </div>\n\n      <!-- btn -->\n      <app-ui-btn-layout>\n        <app-ui-btn [name]=\"'btn-save'\" (ClickBtn)=\"saveProfile($event)\" [isDisable]=\"btnSaveDisable\">\n          <ng-container TextType=\"cust\">{{language.save |translate }}</ng-container>\n        </app-ui-btn>\n      </app-ui-btn-layout>\n      <!-- end of btn -->\n\n\n\n    </div>\n\n  </div>\n</app-ui-inner-page>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.layout-block{padding-top:10px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);background-color:#fff}.profile-img-block{text-align:center;padding-bottom:10px;padding-top:20px}.profile-img-block img{text-align:center;margin:0 auto;width:60px}.profile-img-block.img-block .active-img,.profile-img-block.img-block.active .normal-img{display:none}.profile-img-block.img-block.active .active-img{display:block}@media screen and (min-width:1025px){.profile-img-block img{width:6vw}}.tag-block{display:flex}.break-line{display:block;width:100%}.page-cust-info ::ng-deep app-ui-form-radio-tag{width:30%}.page-cust-info ::ng-deep app-ui-form-radio-tag .tag-block .tag-content{font-weight:700}.page-cust-info ::ng-deep app-ui-form-radio-tag+app-ui-form-radio-tag{margin-left:5%}:host ::ng-deep app-ui-btn-layout{position:relative;bottom:-24px;margin-right:0}:host ::ng-deep app-ui-btn-layout .btn-block{margin:0}::ng-deep app-ui-form-layout-col:first-of-type .col-content.style-has-add{margin-top:8px!important}@media (max-width:767px){::ng-deep app-ui-form-layout-col:first-of-type .col-content.style-has-add{position:absolute;top:-18px;left:40px;max-width:150px}}::ng-deep .posibility-data-group{padding-bottom:0}::ng-deep .posibility-data-group ::ng-deep [class*=gas-col-]{margin-bottom:20px}::ng-deep .posibility-data-group .gas-row-block{margin-top:0}::ng-deep .btn-inner-page.style-out app-ui-btn-layout{position:relative;background-color:#f5f5f5;bottom:-20px;margin-top:40px}::ng-deep .btn-inner-page.style-out app-ui-btn-layout app-ui-btn{position:relative;top:-27px}"]
                }] }
    ];
    CustomerEditComponent.ctorParameters = function () { return [
        { type: CustomerService },
        { type: ProfileCodeService },
        { type: CustomerUtils },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerActionToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [storeCustomerToken,] }] }
    ]; };
    CustomerEditComponent.propDecorators = {
        sendContentHeight: [{ type: Output }],
        content: [{ type: ViewChild, args: ['inpageMain',] }],
        editPreTemplate: [{ type: Input }],
        editPostTemplate: [{ type: Input }],
        editModel: [{ type: Output }]
    };
    return CustomerEditComponent;
}());
export { CustomerEditComponent };
if (false) {
    /** @type {?} */
    CustomerEditComponent.prototype.sendContentHeight;
    /** @type {?} */
    CustomerEditComponent.prototype.contentHeight;
    /** @type {?} */
    CustomerEditComponent.prototype.content;
    /** @type {?} */
    CustomerEditComponent.prototype.editPreTemplate;
    /** @type {?} */
    CustomerEditComponent.prototype.editPostTemplate;
    /** @type {?} */
    CustomerEditComponent.prototype.editModel;
    /** @type {?} */
    CustomerEditComponent.prototype.validationResult;
    /** @type {?} */
    CustomerEditComponent.prototype.customerDetail;
    /** @type {?} */
    CustomerEditComponent.prototype.pageTitle;
    /** @type {?} */
    CustomerEditComponent.prototype.optionTel;
    /** @type {?} */
    CustomerEditComponent.prototype.optionAddress;
    /** @type {?} */
    CustomerEditComponent.prototype.optionEmail;
    /** @type {?} */
    CustomerEditComponent.prototype.optionAge;
    /** @type {?} */
    CustomerEditComponent.prototype.optionGender;
    /** @type {?} */
    CustomerEditComponent.prototype.optionIncome;
    /** @type {?} */
    CustomerEditComponent.prototype.optionSource;
    /** @type {?} */
    CustomerEditComponent.prototype.optionMarriage;
    /** @type {?} */
    CustomerEditComponent.prototype.optionChildren;
    /** @type {?} */
    CustomerEditComponent.prototype.optionFamiliarity;
    /** @type {?} */
    CustomerEditComponent.prototype.optionRecentStatus;
    /** @type {?} */
    CustomerEditComponent.prototype.optionManpa;
    /** @type {?} */
    CustomerEditComponent.prototype.optionContactFrequancyPerYear;
    /** @type {?} */
    CustomerEditComponent.prototype.language;
    /** @type {?} */
    CustomerEditComponent.prototype.disableAge;
    /** @type {?} */
    CustomerEditComponent.prototype.isDisplaySavePopup;
    /** @type {?} */
    CustomerEditComponent.prototype.btnSaveDisable;
    /** @type {?} */
    CustomerEditComponent.prototype.isShow;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype._telLimit;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype._emailLimit;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype._addressLimit;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype.edit_type;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype.customerService;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype.profileCodeService;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype.customerUtils;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype.customCustomerAction;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype.customerStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2N1c3RvbWVyLWVkaXQvY3VzdG9tZXItZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sRUFBaUIsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkssT0FBTyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQWlCLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRy9GO0lBaURFLCtCQUNVLGVBQWdDLEVBQ2hDLGtCQUFzQyxFQUN0QyxhQUE0QixFQUM1QixjQUFpQyxFQUNRLG9CQUFvQyxFQUNyQyxhQUE0QjtRQUxwRSxvQkFBZSxH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Q3hELDRDQUFzRDs7SUFDdEQsMENBQW9EOztJQUNwRCw2Q0FBdUQ7O0lBQ3ZELDZDQUF1RDs7SUFDdkQsNkNBQXVEOztJQUN2RCwrQ0FBeUQ7O0lBQ3pELCtDQUF5RDs7SUFDekQsa0RBQTREOztJQUM1RCxtREFBNkQ7O0lBQzdELDRDQUFzRDs7SUFDdEQsOERBQXdFOztJQUV4RSx5Q0FBMkM7O0lBRTNDLDJDQUFtQzs7SUFDbkMsbURBQTJDOztJQUMzQywrQ0FBdUM7O0lBQ3ZDLHVDQUFnQzs7Ozs7SUFFaEMsMENBQXNCOzs7OztJQUN0Qiw0Q0FBd0I7Ozs7O0lBQ3hCLDhDQUEwQjs7Ozs7SUFDMUIsMENBQTBCOzs7OztJQUl4QixnREFBd0M7Ozs7O0lBQ3hDLG1EQUE4Qzs7Ozs7SUFDOUMsOENBQW9DOzs7OztJQUNwQywrQ0FBeUM7Ozs7O0lBQ3pDLHFEQUFxRjs7Ozs7SUFDckYsOENBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIE91dHB1dCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgVGVtcGxhdGVSZWYsIEV2ZW50RW1pdHRlciwgT3B0aW9uYWwsIEluamVjdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbiB9IGZyb20gJ0BhbGxpYW56U05EL3VpJztcbmltcG9ydCB7IFByb2ZpbGVDb2RlU2VydmljZSwgVmFsaWRhdGlvblJlc3VsdCwgTGFuZ3VhZ2UsIFN0cmluZ1V0aWxzIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21lclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2N1c3RvbWVyLXNlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDdXN0b21lckRldGFpbCB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJEZXRhaWwnO1xuaW1wb3J0IHsgQ3VzdG9tZXJVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2N1c3RvbWVyLXV0aWxzJztcbmltcG9ydCB7IEN1c3RvbWVyVGVsIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbC9DdXN0b21lclRlbCc7XG5pbXBvcnQgeyBDdXN0b21lckVtYWlsIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbC9DdXN0b21lckVtYWlsJztcbmltcG9ydCB7IEN1c3RvbWVyQWRkcmVzcyB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJBZGRyZXNzJztcbmltcG9ydCB7IEN1c3RvbWVyRGV0YWlsUmVzdWx0IH0gZnJvbSAnLi4vYmVhbi9jdXN0b21lci1kZXRhaWwtcmVzdWx0JztcbmltcG9ydCB7IHN0b3JlQ3VzdG9tZXIsIENVU1RPTUVSX1NUQVRFIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3N0b3JlQ3VzdG9tZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IHN0b3JlQ3VzdG9tZXJUb2tlbiwgY3VzdG9tZXJBY3Rpb25Ub2tlbiB9IGZyb20gJy4uLy4uL2luamVjdGlvblRva2VuL2luamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBjdXN0b21lckFjdGlvbiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9jdXN0b21lckFjdGlvbi5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItZWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXItZWRpdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQE91dHB1dCgpIHNlbmRDb250ZW50SGVpZ2h0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgY29udGVudEhlaWdodDtcblxuICBAVmlld0NoaWxkKCdpbnBhZ2VNYWluJykgY29udGVudDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBlZGl0UHJlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGVkaXRQb3N0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBPdXRwdXQoKSBlZGl0TW9kZWw6IEV2ZW50RW1pdHRlcjxDdXN0b21lckRldGFpbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICBwdWJsaWMgdmFsaWRhdGlvblJlc3VsdCA9IG5ldyBWYWxpZGF0aW9uUmVzdWx0KCk7XG4gIHB1YmxpYyBjdXN0b21lckRldGFpbDogQ3VzdG9tZXJEZXRhaWwgPSBuZXcgQ3VzdG9tZXJEZXRhaWwoKTtcbiAgcHVibGljIHBhZ2VUaXRsZSA9ICdFZGl0IFByb2ZpbGUnOyAvL2RlZmF1bHRcblxuICAvL3NlbGVjdCBvcHRpb25zXG4gIHB1YmxpYyBvcHRpb25UZWw6IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBuZXcgQXJyYXkoKTtcbiAgcHVibGljIG9wdGlvbkFkZHJlc3M6IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBuZXcgQXJyYXkoKTtcbiAgcHVibGljIG9wdGlvbkVtYWlsOiBBcnJheTxTZWxlY3RPcHRpb24+ID0gbmV3IEFycmF5KCk7XG4gIHB1YmxpYyBvcHRpb25BZ2U6IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBuZXcgQXJyYXkoKTtcbiAgcHVibGljIG9wdGlvbkdlbmRlcjogQXJyYXk8U2VsZWN0T3B0aW9uPiA9IG5ldyBBcnJheSgpO1xuICBwdWJsaWMgb3B0aW9uSW5jb21lOiBBcnJheTxTZWxlY3RPcHRpb24+ID0gbmV3IEFycmF5KCk7XG4gIHB1YmxpYyBvcHRpb25Tb3VyY2U6IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBuZXcgQXJyYXkoKTtcbiAgcHVibGljIG9wdGlvbk1hcnJpYWdlOiBBcnJheTxTZWxlY3RPcHRpb24+ID0gbmV3IEFycmF5KCk7XG4gIHB1YmxpYyBvcHRpb25DaGlsZHJlbjogQXJyYXk8U2VsZWN0T3B0aW9uPiA9IG5ldyBBcnJheSgpO1xuICBwdWJsaWMgb3B0aW9uRmFtaWxpYXJpdHk6IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBuZXcgQXJyYXkoKTtcbiAgcHVibGljIG9wdGlvblJlY2VudFN0YXR1czogQXJyYXk8U2VsZWN0T3B0aW9uPiA9IG5ldyBBcnJheSgpO1xuICBwdWJsaWMgb3B0aW9uTWFucGE6IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBuZXcgQXJyYXkoKTtcbiAgcHVibGljIG9wdGlvbkNvbnRhY3RGcmVxdWFuY3lQZXJZZWFyOiBBcnJheTxTZWxlY3RPcHRpb24+ID0gbmV3IEFycmF5KCk7XG5cbiAgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuXG4gIHB1YmxpYyBkaXNhYmxlQWdlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0Rpc3BsYXlTYXZlUG9wdXA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGJ0blNhdmVEaXNhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc1Nob3cgOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfdGVsTGltaXQgPSA2O1xuICBwcml2YXRlIF9lbWFpbExpbWl0ID0gMztcbiAgcHJpdmF0ZSBfYWRkcmVzc0xpbWl0ID0gMztcbiAgcHJpdmF0ZSBlZGl0X3R5cGUgPSBcImFkZFwiO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjdXN0b21lclNlcnZpY2U6IEN1c3RvbWVyU2VydmljZSxcbiAgICBwcml2YXRlIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY3VzdG9tZXJVdGlsczogQ3VzdG9tZXJVdGlscyxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGN1c3RvbWVyQWN0aW9uVG9rZW4pIHByaXZhdGUgY3VzdG9tQ3VzdG9tZXJBY3Rpb246IGN1c3RvbWVyQWN0aW9uLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3Qoc3RvcmVDdXN0b21lclRva2VuKSBwcml2YXRlIGN1c3RvbWVyU3RvcmU6IHN0b3JlQ3VzdG9tZXIsXG4gICkge1xuXG4gICAgbGV0IHRlbENvZGVBcnJheSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfVGVsVHlwZScpO1xuICAgIGxldCBlbWFpbENvZGVBcnJheSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfRW1haWxUeXBlJyk7XG4gICAgbGV0IGFkZHJlc3NDb2RlQXJyYXkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0FkZHJlc3NUeXBlJyk7XG4gICAgbGV0IGFnZUNvZGVBcnJheSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfQWdlJyk7XG4gICAgbGV0IGdlbmRlckNvZGVBcnJheSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfR2VuZGVyJyk7XG4gICAgbGV0IGluY29tZUNvZGVBcnJheSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfSW5jb21lJyk7XG4gICAgbGV0IHNvdXJjZUNvZGVBcnJheSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfU291cmNlJyk7XG4gICAgbGV0IG1hcnJpYWdlQ29kZUFycmF5ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9NYXJyaWFnZScpO1xuICAgIGxldCBjaGlsZHJlbkNvZGVBcnJheSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfQ2hpbGRyZW4nKTtcbiAgICBsZXQgZmFtaWxpYXJpdHlDb2RlQXJyYXkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0ZhbWlsaWFyaXR5Jyk7XG4gICAgbGV0IHJlY2VudFN0YXR1c0NvZGVBcnJheSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfUmVjZW50U3RhdHVzJyk7XG4gICAgbGV0IG1hbnBhQ29kZUFycmF5ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9TdGF0dXMnKTtcbiAgICBsZXQgY29udGFjdEZyZXF1YW5jeUNvZGVBcnJheSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfQ29udGFjdEZyZXF1YW5jeScpO1xuXG4gICAgdGhpcy5vcHRpb25UZWwgPSB0aGlzLmN1c3RvbWVyVXRpbHMuc2V0Q29kZTJPcHRpb24odGVsQ29kZUFycmF5KTtcbiAgICB0aGlzLm9wdGlvbkVtYWlsID0gdGhpcy5jdXN0b21lclV0aWxzLnNldENvZGUyT3B0aW9uKGVtYWlsQ29kZUFycmF5KTtcbiAgICB0aGlzLm9wdGlvbkFkZHJlc3MgPSB0aGlzLmN1c3RvbWVyVXRpbHMuc2V0Q29kZTJPcHRpb24oYWRkcmVzc0NvZGVBcnJheSk7XG4gICAgdGhpcy5vcHRpb25BZ2UgPSB0aGlzLmN1c3RvbWVyVXRpbHMuc2V0Q29kZTJPcHRpb24oYWdlQ29kZUFycmF5KTtcbiAgICB0aGlzLm9wdGlvbkdlbmRlciA9IHRoaXMuY3VzdG9tZXJVdGlscy5zZXRDb2RlMk9wdGlvbihnZW5kZXJDb2RlQXJyYXkpO1xuICAgIHRoaXMub3B0aW9uSW5jb21lID0gdGhpcy5jdXN0b21lclV0aWxzLnNldENvZGUyT3B0aW9uKGluY29tZUNvZGVBcnJheSk7XG4gICAgdGhpcy5vcHRpb25Tb3VyY2UgPSB0aGlzLmN1c3RvbWVyVXRpbHMuc2V0Q29kZTJPcHRpb24oc291cmNlQ29kZUFycmF5KTtcbiAgICB0aGlzLm9wdGlvbk1hcnJpYWdlID0gdGhpcy5jdXN0b21lclV0aWxzLnNldENvZGUyT3B0aW9uKG1hcnJpYWdlQ29kZUFycmF5KTtcbiAgICB0aGlzLm9wdGlvbkNoaWxkcmVuID0gdGhpcy5jdXN0b21lclV0aWxzLnNldENvZGUyT3B0aW9uKGNoaWxkcmVuQ29kZUFycmF5KTtcbiAgICB0aGlzLm9wdGlvbkZhbWlsaWFyaXR5ID0gdGhpcy5jdXN0b21lclV0aWxzLnNldENvZGUyT3B0aW9uKGZhbWlsaWFyaXR5Q29kZUFycmF5KTtcbiAgICB0aGlzLm9wdGlvblJlY2VudFN0YXR1cyA9IHRoaXMuY3VzdG9tZXJVdGlscy5zZXRDb2RlMk9wdGlvbihyZWNlbnRTdGF0dXNDb2RlQXJyYXkpO1xuICAgIHRoaXMub3B0aW9uTWFucGEgPSB0aGlzLmN1c3RvbWVyVXRpbHMuc2V0Q29kZTJPcHRpb24obWFucGFDb2RlQXJyYXkpO1xuICAgIHRoaXMub3B0aW9uQ29udGFjdEZyZXF1YW5jeVBlclllYXIgPSB0aGlzLmN1c3RvbWVyVXRpbHMuc2V0Q29kZTJPcHRpb24oY29udGFjdEZyZXF1YW5jeUNvZGVBcnJheSk7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKHRoaXMuY3VzdG9tZXJTdG9yZSkge1xuICAgICAgdGhpcy5jdXN0b21lclN0b3JlLmdldEN1cnJlbnRDdXN0b21lckRldGFpbCgpLnN1YnNjcmliZSgoZGF0YTogQ3VzdG9tZXJEZXRhaWwpID0+IHtcblxuICAgICAgICB0aGlzLmN1c3RvbWVyRGV0YWlsID0gZGF0YTtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jdXN0b21lckRldGFpbC5jbGllbnRJRCkpIHtcbiAgICAgICAgICAvL0FERFxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkIDpcIiwgdGhpcy5jdXN0b21lckRldGFpbCk7XG4gICAgICAgICAgdGhpcy5wYWdlVGl0bGUgPSBcIlwiO1xuICAgICAgICAgIHRoaXMuZGlzYWJsZUFnZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwgPSBuZXcgQ3VzdG9tZXJEZXRhaWwoKTtcbiAgICAgICAgICB0aGlzLmN1c3RvbWVyRGV0YWlsLmFnZVJhbmdlID0gJyc7XG4gICAgICAgICAgdGhpcy5lZGl0X3R5cGUgPSBcImFkZFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vRWRpdFxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWRpdCA6XCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwpO1xuICAgICAgICAgIHRoaXMucGFnZVRpdGxlID0gdGhpcy5jdXN0b21lckRldGFpbC5sYXN0TmFtZSArIHRoaXMuY3VzdG9tZXJEZXRhaWwuZmlyc3ROYW1lO1xuICAgICAgICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuY3VzdG9tZXJEZXRhaWwuYmlydGhkYXkpKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVBZ2UgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwuYWdlUmFuZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUFnZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmVkaXRfdHlwZSA9IFwiZWRpdFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWRpdE1vZGVsLmVtaXQodGhpcy5jdXN0b21lckRldGFpbCk7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGlvbkZvcm0oKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jdXN0b21lckRldGFpbCk7XG5cbiAgICAvL3ZhbGlkIGN1c3RvbWVyXG4gICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0ID0gdGhpcy5jdXN0b21lclNlcnZpY2UudmFsaWRQcm9maWxlKHRoaXMuY3VzdG9tZXJEZXRhaWwpO1xuICAgIGlmICh0aGlzLnZhbGlkYXRpb25SZXN1bHQgIT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9FcnJvcigpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgLy8gU2F2ZSBidG4gY2xpY2tcbiAgc2F2ZVByb2ZpbGUoZXZlbnQpIHtcblxuICAgIC8vdmFsaWQgY3VzdG9tZXJcbiAgICB0aGlzLnZhbGlkYXRpb25Gb3JtKCk7XG4gICAgY29uc29sZS5sb2codGhpcy52YWxpZGF0aW9uUmVzdWx0LmlzVHJ1ZSgpKTtcblxuICAgIGlmICh0aGlzLnZhbGlkYXRpb25SZXN1bHQuaXNUcnVlKCkpIHtcblxuICAgICAgdGhpcy5idG5TYXZlRGlzYWJsZSA9IHRydWU7XG4gICAgICAvL2lmIHRlbC9lbWFpbC9hZGRyZXNzIGFsbCBlbXB0eSBkYXRhICwgc2tpcCBpdFxuICAgICAgbGV0IHRtcFRlbEFycmF5ID0gW107XG4gICAgICBsZXQgdG1wRW1haWxBcnJheSA9IFtdO1xuICAgICAgbGV0IHRtcEFkZHJlc3NBcnJheSA9IFtdO1xuXG4gICAgICB0aGlzLmN1c3RvbWVyRGV0YWlsLnRlbHMuZm9yRWFjaCgodGVsKSA9PiB7XG4gICAgICAgIGlmICghdGVsLmlzRW1wdHkoKSkgdG1wVGVsQXJyYXkucHVzaCh0ZWwpO1xuICAgICAgfSlcblxuICAgICAgdGhpcy5jdXN0b21lckRldGFpbC5lbWFpbHMuZm9yRWFjaCgoZW1haWwpID0+IHtcbiAgICAgICAgaWYgKCFlbWFpbC5pc0VtcHR5KCkpIHRtcEVtYWlsQXJyYXkucHVzaChlbWFpbCk7XG4gICAgICB9KVxuXG4gICAgICB0aGlzLmN1c3RvbWVyRGV0YWlsLmFkZHJlc3Nlcy5mb3JFYWNoKChhZGRyZXNzKSA9PiB7XG4gICAgICAgIGlmICghYWRkcmVzcy5pc0VtcHR5KCkpIHRtcEFkZHJlc3NBcnJheS5wdXNoKGFkZHJlc3MpO1xuICAgICAgfSlcblxuICAgICAgdGhpcy5jdXN0b21lckRldGFpbC50ZWxzID0gdG1wVGVsQXJyYXk7XG4gICAgICB0aGlzLmN1c3RvbWVyRGV0YWlsLmVtYWlscyA9IHRtcEVtYWlsQXJyYXk7XG4gICAgICB0aGlzLmN1c3RvbWVyRGV0YWlsLmFkZHJlc3NlcyA9IHRtcEFkZHJlc3NBcnJheTtcblxuICAgICAgY29uc29sZS5sb2coXCJjdXN0b21lci1lZGl0LXNhdmU6IFwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsKTtcbiAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLnNhdmVDdXN0b21lckRldGFpbCh0aGlzLmN1c3RvbWVyRGV0YWlsKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1Zygnc2F2ZURldGFpbCcsIGRhdGEpO1xuXG4gICAgICAgIC8vdGhpcy5pc0Rpc3BsYXlTYXZlUG9wdXAgPSB0cnVlO1xuXG4gICAgICAgIC8vc2V0IHJlc3VsdFxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEN1c3RvbWVyRGV0YWlsUmVzdWx0KCk7XG5cblxuICAgICAgICByZXN1bHQuZGV0YWlsU2F2ZVN1Y2Nlc3MgPSBkYXRhLnN0YXR1cztcbiAgICAgICAgcmVzdWx0LmVkaXREZXRhaWwgPSB0aGlzLmN1c3RvbWVyRGV0YWlsO1xuICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5wcm9maWxlUmVzdWx0ID0gcmVzdWx0O1xuXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbWVyU3RvcmUpIHtcbiAgICAgICAgICB0aGlzLmN1c3RvbWVyU3RvcmUuc2V0Q3VycmVudEN1c3RvbWVyRGV0YWlsKHRoaXMuY3VzdG9tZXJEZXRhaWwpO1xuICAgICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuZWRpdF90eXBlID09IFwiYWRkXCIgPyBDVVNUT01FUl9TVEFURS5BRERfU0FWRUQgOiBDVVNUT01FUl9TVEFURS5FRElUX1NBVkVEO1xuICAgICAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZS5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tQ3VzdG9tZXJBY3Rpb24pIHtcbiAgICAgICAgICB0aGlzLmN1c3RvbUN1c3RvbWVyQWN0aW9uLmFmdGVyQ3VzdG9tZXJFZGl0U2F2ZSh0aGlzLmN1c3RvbWVyRGV0YWlsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ0blNhdmVEaXNhYmxlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvL+eNsuW+l+WFp+WuuemrmFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jb250ZW50SGVpZ2h0ID0gdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29uc29sZS5sb2coJ2VsZSBIZWlnaHQ6JywgdGhpcy5jb250ZW50SGVpZ2h0KVxuICAgIH0sIDYwMCk7XG5cbiAgICB0aGlzLnNlbmRDb250ZW50SGVpZ2h0LmVtaXQodGhpcy5jb250ZW50SGVpZ2h0KTtcblxuICB9XG5cbiAgY291bnRBZ2VSYW5nZShiaXJ0aGRheSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2JpcnRoZGF5JywgYmlydGhkYXkpO1xuXG4gICAgdGhpcy5jdXN0b21lckRldGFpbC5iaXJ0aGRheSA9IGJpcnRoZGF5O1xuXG4gICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoYmlydGhkYXkpKSB7XG4gICAgICB0aGlzLmN1c3RvbWVyRGV0YWlsLmFnZVJhbmdlID0gJyc7XG4gICAgICB0aGlzLmRpc2FibGVBZ2UgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgYWdlID0gdGhpcy5jdXN0b21lclV0aWxzLmNvdW50QWdlKGJpcnRoZGF5KTtcbiAgICAgIGxldCBhZ2VSYW5nZSA9IHRoaXMuY3VzdG9tZXJVdGlscy5jb3VudEFnZVJhbmdlKGFnZSk7XG4gICAgICBjb25zb2xlLmRlYnVnKCdhZ2VSYW5nZScsIGFnZVJhbmdlKTtcblxuICAgICAgaWYgKGFnZVJhbmdlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmN1c3RvbWVyRGV0YWlsLmFnZVJhbmdlID0gYWdlUmFuZ2U7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLmRpc2FibGVBZ2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcblxuXG4gIH1cblxuICBnZXRUZWxMaW1pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVsTGltaXQ7XG4gIH1cblxuICBnZXRFbWFpbExpbWl0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbExpbWl0O1xuICB9XG5cbiAgZ2V0QWRkcmVzc0xpbWl0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZGRyZXNzTGltaXQ7XG4gIH1cblxuICBvbkFkZFRlbEdyb3VwKCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ29uQWRkVGVsR3JvdXAnKTtcbiAgICB0aGlzLmN1c3RvbWVyRGV0YWlsLnRlbHMucHVzaChuZXcgQ3VzdG9tZXJUZWwoJycsICdUZWxIb21lJywgJycsICdBUFAnKSk7XG4gIH1cblxuICBvbkFkZE1haWxHcm91cCgpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdvbkFkZE1haWxHcm91cCcpO1xuICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwuYWRkRW1haWwobmV3IEN1c3RvbWVyRW1haWwoJycsICdNYWlsSG9tZScsICcnLCAnQVBQJykpO1xuICB9XG5cbiAgb25BZGRBZGRyZXNzR3JvdXAoKSB7XG4gICAgY29uc29sZS5kZWJ1Zygnb25BZGRBZGRyZXNzR3JvdXAnKTtcbiAgICB0aGlzLmN1c3RvbWVyRGV0YWlsLmFkZEFkZHJlc3MobmV3IEN1c3RvbWVyQWRkcmVzcygnJywgJ0FkZHJlc3NUeXBlSG9tZScsICcnLCAnJywgJycsICcnLCAnJywgJ0FQUCcpKTtcbiAgfVxuXG4gIG9uUmVtb3ZlVGVsR3JvdXAoaW5kZXgpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdvblJlbW92ZVRlbEdyb3VwJywgaW5kZXgpO1xuICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwudGVscy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgb25SZW1vdmVFbWFpbEdyb3VwKGluZGV4KSB7XG4gICAgY29uc29sZS5kZWJ1Zygnb25SZW1vdmVFbWFpbEdyb3VwJywgaW5kZXgpO1xuICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwuZW1haWxzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBvblJlbW92ZUFkZHJlc3NHcm91cChpbmRleCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ29uUmVtb3ZlQWRkcmVzc0dyb3VwJywgaW5kZXgpO1xuICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwuYWRkcmVzc2VzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuXG4gIHNjcm9sbFRvRXJyb3IoKSB7XG4gICAgbGV0IGVycm9yQmxvY2sgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Vycm9yLW1zZycpO1xuICAgIGlmIChlcnJvckJsb2NrLml0ZW0oMCkpIHtcbiAgICAgIGVycm9yQmxvY2suaXRlbSgwKS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnIH0pO1xuICAgIH1cbiAgICAvLyBpZiAoZXJyb3JCbG9ja1swXSkgZXJyb3JCbG9ja1swXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCcgfSlcbiAgfVxufVxuIl19