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
export class CustomerEditComponent {
    /**
     * @param {?} customerService
     * @param {?} profileCodeService
     * @param {?} customerUtils
     * @param {?} changeDetector
     * @param {?} customCustomerAction
     * @param {?} customerStore
     */
    constructor(customerService, profileCodeService, customerUtils, changeDetector, customCustomerAction, customerStore) {
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
        let telCodeArray = this.profileCodeService.getCodeArray('Customer_TelType');
        /** @type {?} */
        let emailCodeArray = this.profileCodeService.getCodeArray('Customer_EmailType');
        /** @type {?} */
        let addressCodeArray = this.profileCodeService.getCodeArray('Customer_AddressType');
        /** @type {?} */
        let ageCodeArray = this.profileCodeService.getCodeArray('Customer_Age');
        /** @type {?} */
        let genderCodeArray = this.profileCodeService.getCodeArray('Customer_Gender');
        /** @type {?} */
        let incomeCodeArray = this.profileCodeService.getCodeArray('Customer_Income');
        /** @type {?} */
        let sourceCodeArray = this.profileCodeService.getCodeArray('Customer_Source');
        /** @type {?} */
        let marriageCodeArray = this.profileCodeService.getCodeArray('Customer_Marriage');
        /** @type {?} */
        let childrenCodeArray = this.profileCodeService.getCodeArray('Customer_Children');
        /** @type {?} */
        let familiarityCodeArray = this.profileCodeService.getCodeArray('Customer_Familiarity');
        /** @type {?} */
        let recentStatusCodeArray = this.profileCodeService.getCodeArray('Customer_RecentStatus');
        /** @type {?} */
        let manpaCodeArray = this.profileCodeService.getCodeArray('Customer_Status');
        /** @type {?} */
        let contactFrequancyCodeArray = this.profileCodeService.getCodeArray('Customer_ContactFrequancy');
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
    ngOnInit() {
        if (this.customerStore) {
            this.customerStore.getCurrentCustomerDetail().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.customerDetail = data;
                if (StringUtils.isEmpty(this.customerDetail.clientID)) {
                    //ADD
                    console.log("add :", this.customerDetail);
                    this.pageTitle = "";
                    this.disableAge = false;
                    this.customerDetail = new CustomerDetail();
                    this.customerDetail.ageRange = '';
                    this.edit_type = "add";
                }
                else {
                    //Edit
                    console.log("edit :", this.customerDetail);
                    this.pageTitle = this.customerDetail.lastName + this.customerDetail.firstName;
                    if (StringUtils.isNotEmpty(this.customerDetail.birthday)) {
                        this.disableAge = true;
                    }
                    else {
                        this.customerDetail.ageRange = '';
                        this.disableAge = false;
                    }
                    this.edit_type = "edit";
                }
                this.editModel.emit(this.customerDetail);
                this.changeDetector.detectChanges();
                this.isShow = true;
            }));
        }
    }
    /**
     * @return {?}
     */
    validationForm() {
        console.log(this.customerDetail);
        //valid customer
        this.validationResult = this.customerService.validProfile(this.customerDetail);
        if (this.validationResult != null) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.scrollToError();
            }), 200);
        }
    }
    // Save btn click
    /**
     * @param {?} event
     * @return {?}
     */
    saveProfile(event) {
        //valid customer
        this.validationForm();
        console.log(this.validationResult.isTrue());
        if (this.validationResult.isTrue()) {
            this.btnSaveDisable = true;
            //if tel/email/address all empty data , skip it
            /** @type {?} */
            let tmpTelArray = [];
            /** @type {?} */
            let tmpEmailArray = [];
            /** @type {?} */
            let tmpAddressArray = [];
            this.customerDetail.tels.forEach((/**
             * @param {?} tel
             * @return {?}
             */
            (tel) => {
                if (!tel.isEmpty())
                    tmpTelArray.push(tel);
            }));
            this.customerDetail.emails.forEach((/**
             * @param {?} email
             * @return {?}
             */
            (email) => {
                if (!email.isEmpty())
                    tmpEmailArray.push(email);
            }));
            this.customerDetail.addresses.forEach((/**
             * @param {?} address
             * @return {?}
             */
            (address) => {
                if (!address.isEmpty())
                    tmpAddressArray.push(address);
            }));
            this.customerDetail.tels = tmpTelArray;
            this.customerDetail.emails = tmpEmailArray;
            this.customerDetail.addresses = tmpAddressArray;
            console.log("customer-edit-save: ", this.customerDetail);
            this.customerService.saveCustomerDetail(this.customerDetail).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('saveDetail', data);
                //this.isDisplaySavePopup = true;
                //set result
                /** @type {?} */
                let result = new CustomerDetailResult();
                result.detailSaveSuccess = data.status;
                result.editDetail = this.customerDetail;
                this.customerService.profileResult = result;
                if (this.customerStore) {
                    this.customerStore.setCurrentCustomerDetail(this.customerDetail);
                    /** @type {?} */
                    let state = this.edit_type == "add" ? CUSTOMER_STATE.ADD_SAVED : CUSTOMER_STATE.EDIT_SAVED;
                    this.customerStore.setState(state);
                }
                if (this.customCustomerAction) {
                    this.customCustomerAction.afterCustomerEditSave(this.customerDetail);
                }
                this.btnSaveDisable = false;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        //獲得內容高
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.contentHeight = this.content.nativeElement.offsetHeight;
            console.log('ele Height:', this.contentHeight);
        }), 600);
        this.sendContentHeight.emit(this.contentHeight);
    }
    /**
     * @param {?} birthday
     * @return {?}
     */
    countAgeRange(birthday) {
        console.debug('birthday', birthday);
        this.customerDetail.birthday = birthday;
        if (StringUtils.isEmpty(birthday)) {
            this.customerDetail.ageRange = '';
            this.disableAge = false;
        }
        else {
            /** @type {?} */
            let age = this.customerUtils.countAge(birthday);
            /** @type {?} */
            let ageRange = this.customerUtils.countAgeRange(age);
            console.debug('ageRange', ageRange);
            if (ageRange != undefined) {
                this.customerDetail.ageRange = ageRange;
                this.changeDetector.detectChanges();
                this.disableAge = true;
            }
        }
        this.changeDetector.detectChanges();
    }
    /**
     * @return {?}
     */
    getTelLimit() {
        return this._telLimit;
    }
    /**
     * @return {?}
     */
    getEmailLimit() {
        return this._emailLimit;
    }
    /**
     * @return {?}
     */
    getAddressLimit() {
        return this._addressLimit;
    }
    /**
     * @return {?}
     */
    onAddTelGroup() {
        console.debug('onAddTelGroup');
        this.customerDetail.tels.push(new CustomerTel('', 'TelHome', '', 'APP'));
    }
    /**
     * @return {?}
     */
    onAddMailGroup() {
        console.debug('onAddMailGroup');
        this.customerDetail.addEmail(new CustomerEmail('', 'MailHome', '', 'APP'));
    }
    /**
     * @return {?}
     */
    onAddAddressGroup() {
        console.debug('onAddAddressGroup');
        this.customerDetail.addAddress(new CustomerAddress('', 'AddressTypeHome', '', '', '', '', '', 'APP'));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onRemoveTelGroup(index) {
        console.debug('onRemoveTelGroup', index);
        this.customerDetail.tels.splice(index, 1);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onRemoveEmailGroup(index) {
        console.debug('onRemoveEmailGroup', index);
        this.customerDetail.emails.splice(index, 1);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onRemoveAddressGroup(index) {
        console.debug('onRemoveAddressGroup', index);
        this.customerDetail.addresses.splice(index, 1);
    }
    /**
     * @return {?}
     */
    scrollToError() {
        /** @type {?} */
        let errorBlock = document.body.getElementsByClassName('error-msg');
        if (errorBlock.item(0)) {
            errorBlock.item(0).parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // if (errorBlock[0]) errorBlock[0].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}
CustomerEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-edit',
                template: "<app-ui-inner-page *ngIf=\"isShow\" [title]=\"[pageTitle | translate ]\" [contentHeight]=\"this.contentHeight\" >\n  <div main>\n    <div #inpageMain class=\"layout-block\">\n      <div class=\"layout-style-single\">\n        <div class=\"form-all page-cust-info\" action=\"\">\n          <div class=\"profile-img-block img-block\" [ngClass]=\"customerDetail.dataSource == 'OPUS' ? '': ' active'\">\n              <img class=\"normal-img\" src=\"assets/img/img-customer-profile.svg\">\n              <img class=\"active-img\" src=\"assets/img/img-cust-profile-active.svg\">\n          </div>\n          <!-- {{customerProfile.lastName}} -->\n          <div *ngTemplateOutlet=\"editPreTemplate\"></div>\n          <app-ui-form-layout-advanced>\n            <!-- row1 -->\n            <app-ui-data-group *ngIf=\"customerDetail.dataSource != 'OPUS'\">\n              <ng-container textType=\"dataContent\">\n                <app-ui-form-layout-row>\n                    <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                      <app-ui-form-input [inputTitle]=\"[language.lastName | translate]\" [name]=\"'lastName'\" [(nxValue)]=\"customerDetail.lastName\" [placeholder]=\"[language.lastNamePlaceholder | translate]\" [isDisable]=\"false\" [isError]=\"validationResult.isError('lastName')\"></app-ui-form-input>\n                      <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('lastName') == 'required'\">{{language.wrongLastName |translate }}</app-ui-form-error-msg>\n                    </app-ui-form-layout-col>\n                    <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                      <app-ui-form-input [inputTitle]=\"[language.firstName | translate]\" [name]=\"'firstName'\" [(nxValue)]=\"customerDetail.firstName\" [placeholder]=\"[language.firstNamePlaceholder | translate]\" [isDisable]=\"false\"  [isError]=\"validationResult.isError('firstName')\" (nxValueChange)=\"validationForm()\"></app-ui-form-input>\n                      <app-ui-form-error-msg></app-ui-form-error-msg>\n                    </app-ui-form-layout-col>\n                </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row1 -->\n            <!-- row2 -->\n            <app-ui-data-group [groupName]=\"'tel'\" [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-phone.svg'\">\n              <ng-container textType=\"dataContent\">\n                <ng-container *ngIf=\"customerDetail.tels.length != 0 ; else noTelContent\">\n                    <app-ui-form-layout-row *ngFor=\"let tel of customerDetail.tels; index as i ; last as isLast\">\n                        <ng-container *ngIf=\"tel.dataSource != 'OPUS'\">\n                            <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"4\">\n                              <app-ui-form-select [isShowTitle]=\"false\" [selectTitle]=\"[language.phone | translate]\" [(nxValue)]=\"tel.telType\" [selectOption]='optionTel'></app-ui-form-select>\n                              <app-ui-form-error-msg></app-ui-form-error-msg>\n                            </app-ui-form-layout-col>\n                            <app-ui-form-layout-col [colPC]=\"9\" [colNB]=\"9\" [colPad]=\"9\" [colMobile]=\"8\" [hasRemove]=\"true\" (remove)=\"onRemoveTelGroup(i)\">\n                              <app-ui-form-input [type]=\"'tel'\" [maxLength]=\"50\" [inputTitle]=\"[language.phone | translate]\" [(nxValue)]=\"tel.tel\"  [isDisable]=\"false\"></app-ui-form-input>\n                              <app-ui-form-error-msg></app-ui-form-error-msg>\n                            </app-ui-form-layout-col>                            \n                        </ng-container>\n                        <ng-container *ngIf=\"isLast\">\n                            <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.notOPUSTelNumber() != getTelLimit()\" (add)=\"onAddTelGroup()\"></app-ui-form-layout-col>\n                        </ng-container>\n                      </app-ui-form-layout-row>\n                </ng-container>\n                \n                <ng-template #noTelContent>\n                    <app-ui-form-layout-row >\n                        <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.notOPUSTelNumber() != getTelLimit()\" (add)=\"onAddTelGroup()\"></app-ui-form-layout-col>\n                      </app-ui-form-layout-row>\n                </ng-template>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row2 -->\n            <!-- row3 -->\n\n            <app-ui-data-group [groupName]=\"'email'\" [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-mail.svg'\">\n              <ng-container textType=\"dataContent\">\n                \n                <ng-container *ngIf=\"customerDetail.emails.length != 0 ; else noMailContent\">\n                    <app-ui-form-layout-row *ngFor=\"let email of customerDetail.emails; index as i; last as isLast\">\n                        <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"4\">\n                            <app-ui-form-select [isShowTitle]=\"false\" [selectTitle]=\"[language.email | translate]\" [(nxValue)]=\"email.emailType\" [selectOption]='optionEmail'></app-ui-form-select>\n                            <app-ui-form-error-msg></app-ui-form-error-msg>\n                          </app-ui-form-layout-col>\n                          <app-ui-form-layout-col [colPC]=\"9\" [colNB]=\"9\" [colPad]=\"9\" [colMobile]=\"8\" [hasRemove]=\"true\" (remove)=\"onRemoveEmailGroup(i)\">\n                            <app-ui-form-input [inputTitle]=\"[language.email | translate]\"  [(nxValue)]=\"email.email\"  [isDisable]=\"false\"></app-ui-form-input>\n                            <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('email') == 'format'\">{{language.wrongEmail |translate }}</app-ui-form-error-msg>\n                          </app-ui-form-layout-col>\n                          <ng-container *ngIf=\"isLast\">\n                              <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.emails.length != getEmailLimit()\" (add)=\"onAddMailGroup()\"></app-ui-form-layout-col>\n                          </ng-container>\n                    </app-ui-form-layout-row>\n                </ng-container>\n                \n                <ng-template #noMailContent>\n                    <app-ui-form-layout-row>\n                        <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.emails.length != getEmailLimit()\" (add)=\"onAddMailGroup()\"></app-ui-form-layout-col>\n                    </app-ui-form-layout-row>\n                </ng-template>\n\n              </ng-container>\n            </app-ui-data-group>\n\n            <!-- end of row3 -->\n            <!-- row4 -->\n            <app-ui-data-group [groupName]=\"'addr'\" [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-addr.svg'\">\n              <ng-container textType=\"dataContent\" >\n\n                <ng-container *ngIf=\"customerDetail.addresses.length != 0 ; else noAddressContent\">\n                    <app-ui-form-layout-row *ngFor=\"let address of customerDetail.addresses; index as i; last as isLast\">\n\n                        <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"4\">\n                          <app-ui-form-select [isShowTitle]=\"false\" [selectTitle]=\"[language.address | translate]\" [(nxValue)]=\"address.addressType\" [selectOption]='optionAddress'  ></app-ui-form-select>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <div class=\"break-line\"></div>\n                        <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"4\" [colMobile]=\"6\">\n                          <app-ui-form-input [inputTitle]=\"[language.country | translate]\" [(nxValue)]=\"address.country\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"4\" [colMobile]=\"6\">\n                            <app-ui-form-input [inputTitle]=\"[language.city | translate]\" [(nxValue)]=\"address.city\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"4\" [colMobile]=\"6\">\n                            <app-ui-form-input [inputTitle]=\"[language.area | translate]\" [(nxValue)]=\"address.area\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"6\">\n                            <app-ui-form-input [inputTitle]=\"[language.code | translate]\" [(nxValue)]=\"address.zipcode\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"9\" [colNB]=\"9\" [colPad]=\"9\" [colMobile]=\"12\" [hasRemove]=\"true\" (remove)=\"onRemoveAddressGroup(i)\">\n                          <app-ui-form-input [inputTitle]=\"[language.address | translate]\" [(nxValue)]=\"address.address\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n\n                        <ng-container *ngIf=\"isLast\">\n                            <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.addresses.length != getAddressLimit()\" (add)=\"onAddAddressGroup()\"></app-ui-form-layout-col>\n                        </ng-container>\n                        \n      \n                      </app-ui-form-layout-row>\n                </ng-container>\n\n                <ng-template #noAddressContent>\n                    <app-ui-form-layout-row>\n                        <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.addresses.length != getAddressLimit()\" (add)=\"onAddAddressGroup()\"></app-ui-form-layout-col>\n                    </app-ui-form-layout-row>\n                </ng-template>\n\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row4 -->\n\n            <!-- row5 -->\n            <!-- TODO -->\n          <app-ui-data-group *ngIf=\"customerDetail.dataSource != 'OPUS'\">\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-form-date [title]=\"[language.birthday | translate ]\" [nxValue]=\"customerDetail.birthday\" (nxValueChange)=\"countAgeRange($event)\"></app-ui-form-date>\n                  <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('birthday') == 'date'\">{{language.wrongBirthday |translate }}</app-ui-form-error-msg>\n                </app-ui-form-layout-col>\n                <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-form-select [selectTitle]=\"[language.age | translate ]\" [(nxValue)]=\"customerDetail.ageRange\" [selectOption]='optionAge' [isDisable]=\"disableAge\" ></app-ui-form-select>\n                  <app-ui-form-error-msg></app-ui-form-error-msg>\n                </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n          </app-ui-data-group>\n            <!-- end of row5 -->\n\n\n          <ng-container *ngIf=\"customerDetail.dataSource != 'OPUS' ; else OPUSContent\">\n            <!-- row6 -->\n          <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.gender | translate ]\" [(nxValue)]=\"customerDetail.gender\" [selectOption]='optionGender' ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.occupation | translate ]\" [(nxValue)]=\"customerDetail.occupation\" [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n          </app-ui-data-group>\n            <!-- end of row6 -->\n\n            <!-- row7 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.company | translate ]\" [(nxValue)]=\"customerDetail.company\"  [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.annualIncome | translate ]\" [(nxValue)]=\"customerDetail.income\" [selectOption]='optionIncome' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row7 -->\n\n            <!-- row8 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.source | translate ]\" [selectOption]='optionSource' [(nxValue)]=\"customerDetail.source\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.marriage | translate ]\" [selectOption]='optionMarriage' [(nxValue)]=\"customerDetail.marriage\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row8 -->\n\n            <!-- row9 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.children | translate ]\" [selectOption]='optionChildren' [(nxValue)]=\"customerDetail.children\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.familiarity | translate ]\" [selectOption]='optionFamiliarity' [(nxValue)]=\"customerDetail.familiarity\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row9 -->\n          </ng-container>\n          \n          <ng-template #OPUSContent>\n             <!-- row6 -->\n          <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.occupation | translate ]\" [(nxValue)]=\"customerDetail.occupation\"  [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.company | translate ]\" [(nxValue)]=\"customerDetail.company\" [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n          </app-ui-data-group>\n            <!-- end of row6 -->\n\n            <!-- row7 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.annualIncome | translate ]\" [(nxValue)]=\"customerDetail.income\" [selectOption]='optionIncome' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.source | translate ]\" [selectOption]='optionSource' [(nxValue)]=\"customerDetail.source\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row7 -->\n\n            <!-- row8 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.marriage | translate ]\" [selectOption]='optionMarriage' [(nxValue)]=\"customerDetail.marriage\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.children | translate ]\" [selectOption]='optionChildren' [(nxValue)]=\"customerDetail.children\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row8 -->\n\n            <!-- row9 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.familiarity | translate ]\" [selectOption]='optionFamiliarity' [(nxValue)]=\"customerDetail.familiarity\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row9 -->\n        </ng-template>\n\n            <!-- row10 -->\n            <app-ui-data-group >\n              <ng-container textType=\"dataContent\">\n                  <app-ui-form-layout-row>\n                      <app-ui-form-layout-col>\n                        <app-ui-form-select [selectTitle]=\"[language.recentStatus | translate ]\" [(nxValue)]=\"customerDetail.recentStatus\" [selectOption]='optionRecentStatus' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                        <app-ui-form-error-msg></app-ui-form-error-msg>\n                      </app-ui-form-layout-col>\n\n                  </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row10 -->\n\n            <!-- row10 -->\n            <app-ui-data-group >\n                <ng-container textType=\"dataContent\">\n                    <app-ui-form-layout-row>\n                        <app-ui-form-layout-col>\n                            <app-ui-form-select [selectTitle]=\"[language.customerStatus | translate ]\" [(nxValue)]=\"customerDetail.manpa\" [selectOption]='optionManpa' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                    </app-ui-form-layout-row>\n                </ng-container>\n              </app-ui-data-group>\n              <!-- end of row10 -->\n\n            <!-- row11 -->\n            <app-ui-data-group >\n              <ng-container textType=\"dataContent\">\n                <app-ui-form-layout-row>\n                  <app-ui-form-layout-col >\n                    <app-ui-form-select [selectTitle]=\"[language.contactFrequencyYear | translate ]\"  [(nxValue)]=\"customerDetail.contactFrequancy\" [selectOption]='optionContactFrequancyPerYear' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row11 -->\n            <!-- row12 -->\n            <app-ui-data-group class=\"posibility-data-group\">\n              <ng-container textType=\"dataContent\">\n                <app-ui-form-layout-row>\n                    <app-ui-form-layout-col >\n                      <app-ui-form-title-sm>{{language.possibility |translate }}</app-ui-form-title-sm>\n                      <div class=\"tag-block\">\n                        <app-ui-form-radio-group [(nxValue)]=\"customerDetail.possibility\">\n                          <app-ui-form-radio-tag [checked]=\"customerDetail.possibility == 'HOT' ? true: false\" class=\"HOT wd-max\" [value]=\"'HOT'\">{{\"HOT\" | translate}}</app-ui-form-radio-tag>\n                          <app-ui-form-radio-tag [checked]=\"customerDetail.possibility == 'WARM' ? true: false\" class=\"WARM wd-max\" [value]=\"'WARM'\">{{\"WARM\" | translate}}</app-ui-form-radio-tag>\n                          <app-ui-form-radio-tag [checked]=\"customerDetail.possibility == 'COLD' ? true: false\" class=\"COLD wd-max\" [value]=\"'COLD'\">{{\"COLD\" | translate}}</app-ui-form-radio-tag>\n                        </app-ui-form-radio-group>\n                      </div>\n                    </app-ui-form-layout-col >\n                </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- row 12 -->\n          </app-ui-form-layout-advanced>\n          <div *ngTemplateOutlet=\"editPostTemplate\"></div>\n        </div>\n      </div>\n\n      <!-- btn -->\n      <app-ui-btn-layout>\n        <app-ui-btn [name]=\"'btn-save'\" (ClickBtn)=\"saveProfile($event)\" [isDisable]=\"btnSaveDisable\">\n          <ng-container TextType=\"cust\">{{language.save |translate }}</ng-container>\n        </app-ui-btn>\n      </app-ui-btn-layout>\n      <!-- end of btn -->\n\n\n\n    </div>\n\n  </div>\n</app-ui-inner-page>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.layout-block{padding-top:10px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);background-color:#fff}.profile-img-block{text-align:center;padding-bottom:10px;padding-top:20px}.profile-img-block img{text-align:center;margin:0 auto;width:60px}.profile-img-block.img-block .active-img,.profile-img-block.img-block.active .normal-img{display:none}.profile-img-block.img-block.active .active-img{display:block}@media screen and (min-width:1025px){.profile-img-block img{width:6vw}}.tag-block{display:flex}.break-line{display:block;width:100%}.page-cust-info ::ng-deep app-ui-form-radio-tag{width:30%}.page-cust-info ::ng-deep app-ui-form-radio-tag .tag-block .tag-content{font-weight:700}.page-cust-info ::ng-deep app-ui-form-radio-tag+app-ui-form-radio-tag{margin-left:5%}:host ::ng-deep app-ui-btn-layout{position:relative;bottom:-24px;margin-right:0}:host ::ng-deep app-ui-btn-layout .btn-block{margin:0}::ng-deep app-ui-form-layout-col:first-of-type .col-content.style-has-add{margin-top:8px!important}@media (max-width:767px){::ng-deep app-ui-form-layout-col:first-of-type .col-content.style-has-add{position:absolute;top:-18px;left:40px;max-width:150px}}::ng-deep .posibility-data-group{padding-bottom:0}::ng-deep .posibility-data-group ::ng-deep [class*=gas-col-]{margin-bottom:20px}::ng-deep .posibility-data-group .gas-row-block{margin-top:0}::ng-deep .btn-inner-page.style-out app-ui-btn-layout{position:relative;background-color:#f5f5f5;bottom:-20px;margin-top:40px}::ng-deep .btn-inner-page.style-out app-ui-btn-layout app-ui-btn{position:relative;top:-27px}"]
            }] }
];
CustomerEditComponent.ctorParameters = () => [
    { type: CustomerService },
    { type: ProfileCodeService },
    { type: CustomerUtils },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerActionToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [storeCustomerToken,] }] }
];
CustomerEditComponent.propDecorators = {
    sendContentHeight: [{ type: Output }],
    content: [{ type: ViewChild, args: ['inpageMain',] }],
    editPreTemplate: [{ type: Input }],
    editPostTemplate: [{ type: Input }],
    editModel: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2N1c3RvbWVyLWVkaXQvY3VzdG9tZXItZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sRUFBaUIsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkssT0FBTyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQWlCLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBUS9GLE1BQU07Ozs7Ozs7OztJQTRDSixZQUNVLGVBQWdDLEVBQ2hDLGtCQUFzQyxFQUN0QyxhQUE0QixFQUM1QixjQUFpQyxFQUNRLG9CQUFvQyxFQUNyQyxhQUE0QjtR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QTJDOztJQUUzQywyQ0FBbUM7O0lBQ25DLG1EQUEyQzs7SUFDM0MsK0NBQXVDOztJQUN2Qyx1Q0FBZ0M7Ozs7O0lBRWhDLDBDQUFzQjs7Ozs7SUFDdEIsNENBQXdCOzs7OztJQUN4Qiw4Q0FBMEI7Ozs7O0lBQzFCLDBDQUEwQjs7Ozs7SUFJeEIsZ0RBQXdDOzs7OztJQUN4QyxtREFBOEM7Ozs7O0lBQzlDLDhDQUFvQzs7Ozs7SUFDcEMsK0NBQXlDOzs7OztJQUN6QyxxREFBcUY7Ozs7O0lBQ3JGLDhDQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBPdXRwdXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBFdmVudEVtaXR0ZXIsIE9wdGlvbmFsLCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb24gfSBmcm9tICdAYWxsaWFuelNORC91aSc7XG5pbXBvcnQgeyBQcm9maWxlQ29kZVNlcnZpY2UsIFZhbGlkYXRpb25SZXN1bHQsIExhbmd1YWdlLCBTdHJpbmdVdGlscyB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9jdXN0b21lci1zZXJ2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tZXJEZXRhaWwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL21vZGVsL0N1c3RvbWVyRGV0YWlsJztcbmltcG9ydCB7IEN1c3RvbWVyVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jdXN0b21lci11dGlscyc7XG5pbXBvcnQgeyBDdXN0b21lclRlbCB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJUZWwnO1xuaW1wb3J0IHsgQ3VzdG9tZXJFbWFpbCB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJFbWFpbCc7XG5pbXBvcnQgeyBDdXN0b21lckFkZHJlc3MgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL21vZGVsL0N1c3RvbWVyQWRkcmVzcyc7XG5pbXBvcnQgeyBDdXN0b21lckRldGFpbFJlc3VsdCB9IGZyb20gJy4uL2JlYW4vY3VzdG9tZXItZGV0YWlsLXJlc3VsdCc7XG5pbXBvcnQgeyBzdG9yZUN1c3RvbWVyLCBDVVNUT01FUl9TVEFURSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9zdG9yZUN1c3RvbWVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBzdG9yZUN1c3RvbWVyVG9rZW4sIGN1c3RvbWVyQWN0aW9uVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgY3VzdG9tZXJBY3Rpb24gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvY3VzdG9tZXJBY3Rpb24uaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWN1c3RvbWVyLWVkaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItZWRpdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbWVyLWVkaXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lckVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIEBPdXRwdXQoKSBzZW5kQ29udGVudEhlaWdodCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGNvbnRlbnRIZWlnaHQ7XG5cbiAgQFZpZXdDaGlsZCgnaW5wYWdlTWFpbicpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgZWRpdFByZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBlZGl0UG9zdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAT3V0cHV0KCkgZWRpdE1vZGVsOiBFdmVudEVtaXR0ZXI8Q3VzdG9tZXJEZXRhaWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgcHVibGljIHZhbGlkYXRpb25SZXN1bHQgPSBuZXcgVmFsaWRhdGlvblJlc3VsdCgpO1xuICBwdWJsaWMgY3VzdG9tZXJEZXRhaWw6IEN1c3RvbWVyRGV0YWlsID0gbmV3IEN1c3RvbWVyRGV0YWlsKCk7XG4gIHB1YmxpYyBwYWdlVGl0bGUgPSAnRWRpdCBQcm9maWxlJzsgLy9kZWZhdWx0XG5cbiAgLy9zZWxlY3Qgb3B0aW9uc1xuICBwdWJsaWMgb3B0aW9uVGVsOiBBcnJheTxTZWxlY3RPcHRpb24+ID0gbmV3IEFycmF5KCk7XG4gIHB1YmxpYyBvcHRpb25BZGRyZXNzOiBBcnJheTxTZWxlY3RPcHRpb24+ID0gbmV3IEFycmF5KCk7XG4gIHB1YmxpYyBvcHRpb25FbWFpbDogQXJyYXk8U2VsZWN0T3B0aW9uPiA9IG5ldyBBcnJheSgpO1xuICBwdWJsaWMgb3B0aW9uQWdlOiBBcnJheTxTZWxlY3RPcHRpb24+ID0gbmV3IEFycmF5KCk7XG4gIHB1YmxpYyBvcHRpb25HZW5kZXI6IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBuZXcgQXJyYXkoKTtcbiAgcHVibGljIG9wdGlvbkluY29tZTogQXJyYXk8U2VsZWN0T3B0aW9uPiA9IG5ldyBBcnJheSgpO1xuICBwdWJsaWMgb3B0aW9uU291cmNlOiBBcnJheTxTZWxlY3RPcHRpb24+ID0gbmV3IEFycmF5KCk7XG4gIHB1YmxpYyBvcHRpb25NYXJyaWFnZTogQXJyYXk8U2VsZWN0T3B0aW9uPiA9IG5ldyBBcnJheSgpO1xuICBwdWJsaWMgb3B0aW9uQ2hpbGRyZW46IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBuZXcgQXJyYXkoKTtcbiAgcHVibGljIG9wdGlvbkZhbWlsaWFyaXR5OiBBcnJheTxTZWxlY3RPcHRpb24+ID0gbmV3IEFycmF5KCk7XG4gIHB1YmxpYyBvcHRpb25SZWNlbnRTdGF0dXM6IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBuZXcgQXJyYXkoKTtcbiAgcHVibGljIG9wdGlvbk1hbnBhOiBBcnJheTxTZWxlY3RPcHRpb24+ID0gbmV3IEFycmF5KCk7XG4gIHB1YmxpYyBvcHRpb25Db250YWN0RnJlcXVhbmN5UGVyWWVhcjogQXJyYXk8U2VsZWN0T3B0aW9uPiA9IG5ldyBBcnJheSgpO1xuXG4gIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcblxuICBwdWJsaWMgZGlzYWJsZUFnZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNEaXNwbGF5U2F2ZVBvcHVwOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBidG5TYXZlRGlzYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNTaG93IDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3RlbExpbWl0ID0gNjtcbiAgcHJpdmF0ZSBfZW1haWxMaW1pdCA9IDM7XG4gIHByaXZhdGUgX2FkZHJlc3NMaW1pdCA9IDM7XG4gIHByaXZhdGUgZWRpdF90eXBlID0gXCJhZGRcIjtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY3VzdG9tZXJTZXJ2aWNlOiBDdXN0b21lclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICBwcml2YXRlIGN1c3RvbWVyVXRpbHM6IEN1c3RvbWVyVXRpbHMsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChjdXN0b21lckFjdGlvblRva2VuKSBwcml2YXRlIGN1c3RvbUN1c3RvbWVyQWN0aW9uOiBjdXN0b21lckFjdGlvbixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KHN0b3JlQ3VzdG9tZXJUb2tlbikgcHJpdmF0ZSBjdXN0b21lclN0b3JlOiBzdG9yZUN1c3RvbWVyLFxuICApIHtcblxuICAgIGxldCB0ZWxDb2RlQXJyYXkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX1RlbFR5cGUnKTtcbiAgICBsZXQgZW1haWxDb2RlQXJyYXkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0VtYWlsVHlwZScpO1xuICAgIGxldCBhZGRyZXNzQ29kZUFycmF5ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9BZGRyZXNzVHlwZScpO1xuICAgIGxldCBhZ2VDb2RlQXJyYXkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0FnZScpO1xuICAgIGxldCBnZW5kZXJDb2RlQXJyYXkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0dlbmRlcicpO1xuICAgIGxldCBpbmNvbWVDb2RlQXJyYXkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0luY29tZScpO1xuICAgIGxldCBzb3VyY2VDb2RlQXJyYXkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX1NvdXJjZScpO1xuICAgIGxldCBtYXJyaWFnZUNvZGVBcnJheSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfTWFycmlhZ2UnKTtcbiAgICBsZXQgY2hpbGRyZW5Db2RlQXJyYXkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0NoaWxkcmVuJyk7XG4gICAgbGV0IGZhbWlsaWFyaXR5Q29kZUFycmF5ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9GYW1pbGlhcml0eScpO1xuICAgIGxldCByZWNlbnRTdGF0dXNDb2RlQXJyYXkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX1JlY2VudFN0YXR1cycpO1xuICAgIGxldCBtYW5wYUNvZGVBcnJheSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfU3RhdHVzJyk7XG4gICAgbGV0IGNvbnRhY3RGcmVxdWFuY3lDb2RlQXJyYXkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0NvbnRhY3RGcmVxdWFuY3knKTtcblxuICAgIHRoaXMub3B0aW9uVGVsID0gdGhpcy5jdXN0b21lclV0aWxzLnNldENvZGUyT3B0aW9uKHRlbENvZGVBcnJheSk7XG4gICAgdGhpcy5vcHRpb25FbWFpbCA9IHRoaXMuY3VzdG9tZXJVdGlscy5zZXRDb2RlMk9wdGlvbihlbWFpbENvZGVBcnJheSk7XG4gICAgdGhpcy5vcHRpb25BZGRyZXNzID0gdGhpcy5jdXN0b21lclV0aWxzLnNldENvZGUyT3B0aW9uKGFkZHJlc3NDb2RlQXJyYXkpO1xuICAgIHRoaXMub3B0aW9uQWdlID0gdGhpcy5jdXN0b21lclV0aWxzLnNldENvZGUyT3B0aW9uKGFnZUNvZGVBcnJheSk7XG4gICAgdGhpcy5vcHRpb25HZW5kZXIgPSB0aGlzLmN1c3RvbWVyVXRpbHMuc2V0Q29kZTJPcHRpb24oZ2VuZGVyQ29kZUFycmF5KTtcbiAgICB0aGlzLm9wdGlvbkluY29tZSA9IHRoaXMuY3VzdG9tZXJVdGlscy5zZXRDb2RlMk9wdGlvbihpbmNvbWVDb2RlQXJyYXkpO1xuICAgIHRoaXMub3B0aW9uU291cmNlID0gdGhpcy5jdXN0b21lclV0aWxzLnNldENvZGUyT3B0aW9uKHNvdXJjZUNvZGVBcnJheSk7XG4gICAgdGhpcy5vcHRpb25NYXJyaWFnZSA9IHRoaXMuY3VzdG9tZXJVdGlscy5zZXRDb2RlMk9wdGlvbihtYXJyaWFnZUNvZGVBcnJheSk7XG4gICAgdGhpcy5vcHRpb25DaGlsZHJlbiA9IHRoaXMuY3VzdG9tZXJVdGlscy5zZXRDb2RlMk9wdGlvbihjaGlsZHJlbkNvZGVBcnJheSk7XG4gICAgdGhpcy5vcHRpb25GYW1pbGlhcml0eSA9IHRoaXMuY3VzdG9tZXJVdGlscy5zZXRDb2RlMk9wdGlvbihmYW1pbGlhcml0eUNvZGVBcnJheSk7XG4gICAgdGhpcy5vcHRpb25SZWNlbnRTdGF0dXMgPSB0aGlzLmN1c3RvbWVyVXRpbHMuc2V0Q29kZTJPcHRpb24ocmVjZW50U3RhdHVzQ29kZUFycmF5KTtcbiAgICB0aGlzLm9wdGlvbk1hbnBhID0gdGhpcy5jdXN0b21lclV0aWxzLnNldENvZGUyT3B0aW9uKG1hbnBhQ29kZUFycmF5KTtcbiAgICB0aGlzLm9wdGlvbkNvbnRhY3RGcmVxdWFuY3lQZXJZZWFyID0gdGhpcy5jdXN0b21lclV0aWxzLnNldENvZGUyT3B0aW9uKGNvbnRhY3RGcmVxdWFuY3lDb2RlQXJyYXkpO1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGlmICh0aGlzLmN1c3RvbWVyU3RvcmUpIHtcbiAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZS5nZXRDdXJyZW50Q3VzdG9tZXJEZXRhaWwoKS5zdWJzY3JpYmUoKGRhdGE6IEN1c3RvbWVyRGV0YWlsKSA9PiB7XG5cbiAgICAgICAgdGhpcy5jdXN0b21lckRldGFpbCA9IGRhdGE7XG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuY3VzdG9tZXJEZXRhaWwuY2xpZW50SUQpKSB7XG4gICAgICAgICAgLy9BRERcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZCA6XCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwpO1xuICAgICAgICAgIHRoaXMucGFnZVRpdGxlID0gXCJcIjtcbiAgICAgICAgICB0aGlzLmRpc2FibGVBZ2UgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmN1c3RvbWVyRGV0YWlsID0gbmV3IEN1c3RvbWVyRGV0YWlsKCk7XG4gICAgICAgICAgdGhpcy5jdXN0b21lckRldGFpbC5hZ2VSYW5nZSA9ICcnO1xuICAgICAgICAgIHRoaXMuZWRpdF90eXBlID0gXCJhZGRcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL0VkaXRcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVkaXQgOlwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsKTtcbiAgICAgICAgICB0aGlzLnBhZ2VUaXRsZSA9IHRoaXMuY3VzdG9tZXJEZXRhaWwubGFzdE5hbWUgKyB0aGlzLmN1c3RvbWVyRGV0YWlsLmZpcnN0TmFtZTtcbiAgICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLmN1c3RvbWVyRGV0YWlsLmJpcnRoZGF5KSkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQWdlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1c3RvbWVyRGV0YWlsLmFnZVJhbmdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVBZ2UgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lZGl0X3R5cGUgPSBcImVkaXRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVkaXRNb2RlbC5lbWl0KHRoaXMuY3VzdG9tZXJEZXRhaWwpO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICB0aGlzLmlzU2hvdyA9IHRydWU7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRpb25Gb3JtKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY3VzdG9tZXJEZXRhaWwpO1xuXG4gICAgLy92YWxpZCBjdXN0b21lclxuICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdCA9IHRoaXMuY3VzdG9tZXJTZXJ2aWNlLnZhbGlkUHJvZmlsZSh0aGlzLmN1c3RvbWVyRGV0YWlsKTtcbiAgICBpZiAodGhpcy52YWxpZGF0aW9uUmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbFRvRXJyb3IoKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gIH1cblxuXG4gIC8vIFNhdmUgYnRuIGNsaWNrXG4gIHNhdmVQcm9maWxlKGV2ZW50KSB7XG5cbiAgICAvL3ZhbGlkIGN1c3RvbWVyXG4gICAgdGhpcy52YWxpZGF0aW9uRm9ybSgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudmFsaWRhdGlvblJlc3VsdC5pc1RydWUoKSk7XG5cbiAgICBpZiAodGhpcy52YWxpZGF0aW9uUmVzdWx0LmlzVHJ1ZSgpKSB7XG5cbiAgICAgIHRoaXMuYnRuU2F2ZURpc2FibGUgPSB0cnVlO1xuICAgICAgLy9pZiB0ZWwvZW1haWwvYWRkcmVzcyBhbGwgZW1wdHkgZGF0YSAsIHNraXAgaXRcbiAgICAgIGxldCB0bXBUZWxBcnJheSA9IFtdO1xuICAgICAgbGV0IHRtcEVtYWlsQXJyYXkgPSBbXTtcbiAgICAgIGxldCB0bXBBZGRyZXNzQXJyYXkgPSBbXTtcblxuICAgICAgdGhpcy5jdXN0b21lckRldGFpbC50ZWxzLmZvckVhY2goKHRlbCkgPT4ge1xuICAgICAgICBpZiAoIXRlbC5pc0VtcHR5KCkpIHRtcFRlbEFycmF5LnB1c2godGVsKTtcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwuZW1haWxzLmZvckVhY2goKGVtYWlsKSA9PiB7XG4gICAgICAgIGlmICghZW1haWwuaXNFbXB0eSgpKSB0bXBFbWFpbEFycmF5LnB1c2goZW1haWwpO1xuICAgICAgfSlcblxuICAgICAgdGhpcy5jdXN0b21lckRldGFpbC5hZGRyZXNzZXMuZm9yRWFjaCgoYWRkcmVzcykgPT4ge1xuICAgICAgICBpZiAoIWFkZHJlc3MuaXNFbXB0eSgpKSB0bXBBZGRyZXNzQXJyYXkucHVzaChhZGRyZXNzKTtcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwudGVscyA9IHRtcFRlbEFycmF5O1xuICAgICAgdGhpcy5jdXN0b21lckRldGFpbC5lbWFpbHMgPSB0bXBFbWFpbEFycmF5O1xuICAgICAgdGhpcy5jdXN0b21lckRldGFpbC5hZGRyZXNzZXMgPSB0bXBBZGRyZXNzQXJyYXk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tZXItZWRpdC1zYXZlOiBcIiwgdGhpcy5jdXN0b21lckRldGFpbCk7XG4gICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5zYXZlQ3VzdG9tZXJEZXRhaWwodGhpcy5jdXN0b21lckRldGFpbCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ3NhdmVEZXRhaWwnLCBkYXRhKTtcblxuICAgICAgICAvL3RoaXMuaXNEaXNwbGF5U2F2ZVBvcHVwID0gdHJ1ZTtcblxuICAgICAgICAvL3NldCByZXN1bHRcbiAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBDdXN0b21lckRldGFpbFJlc3VsdCgpO1xuXG5cbiAgICAgICAgcmVzdWx0LmRldGFpbFNhdmVTdWNjZXNzID0gZGF0YS5zdGF0dXM7XG4gICAgICAgIHJlc3VsdC5lZGl0RGV0YWlsID0gdGhpcy5jdXN0b21lckRldGFpbDtcbiAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UucHJvZmlsZVJlc3VsdCA9IHJlc3VsdDtcblxuICAgICAgICBpZiAodGhpcy5jdXN0b21lclN0b3JlKSB7XG4gICAgICAgICAgdGhpcy5jdXN0b21lclN0b3JlLnNldEN1cnJlbnRDdXN0b21lckRldGFpbCh0aGlzLmN1c3RvbWVyRGV0YWlsKTtcbiAgICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmVkaXRfdHlwZSA9PSBcImFkZFwiID8gQ1VTVE9NRVJfU1RBVEUuQUREX1NBVkVEIDogQ1VTVE9NRVJfU1RBVEUuRURJVF9TQVZFRDtcbiAgICAgICAgICB0aGlzLmN1c3RvbWVyU3RvcmUuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUN1c3RvbWVyQWN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5jdXN0b21DdXN0b21lckFjdGlvbi5hZnRlckN1c3RvbWVyRWRpdFNhdmUodGhpcy5jdXN0b21lckRldGFpbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idG5TYXZlRGlzYWJsZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy/njbLlvpflhaflrrnpq5hcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY29udGVudEhlaWdodCA9IHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnNvbGUubG9nKCdlbGUgSGVpZ2h0OicsIHRoaXMuY29udGVudEhlaWdodClcbiAgICB9LCA2MDApO1xuXG4gICAgdGhpcy5zZW5kQ29udGVudEhlaWdodC5lbWl0KHRoaXMuY29udGVudEhlaWdodCk7XG5cbiAgfVxuXG4gIGNvdW50QWdlUmFuZ2UoYmlydGhkYXkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdiaXJ0aGRheScsIGJpcnRoZGF5KTtcblxuICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwuYmlydGhkYXkgPSBiaXJ0aGRheTtcblxuICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGJpcnRoZGF5KSkge1xuICAgICAgdGhpcy5jdXN0b21lckRldGFpbC5hZ2VSYW5nZSA9ICcnO1xuICAgICAgdGhpcy5kaXNhYmxlQWdlID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGFnZSA9IHRoaXMuY3VzdG9tZXJVdGlscy5jb3VudEFnZShiaXJ0aGRheSk7XG4gICAgICBsZXQgYWdlUmFuZ2UgPSB0aGlzLmN1c3RvbWVyVXRpbHMuY291bnRBZ2VSYW5nZShhZ2UpO1xuICAgICAgY29uc29sZS5kZWJ1ZygnYWdlUmFuZ2UnLCBhZ2VSYW5nZSk7XG5cbiAgICAgIGlmIChhZ2VSYW5nZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jdXN0b21lckRldGFpbC5hZ2VSYW5nZSA9IGFnZVJhbmdlO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlQWdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG5cblxuICB9XG5cbiAgZ2V0VGVsTGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbExpbWl0O1xuICB9XG5cbiAgZ2V0RW1haWxMaW1pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWxMaW1pdDtcbiAgfVxuXG4gIGdldEFkZHJlc3NMaW1pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRkcmVzc0xpbWl0O1xuICB9XG5cbiAgb25BZGRUZWxHcm91cCgpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdvbkFkZFRlbEdyb3VwJyk7XG4gICAgdGhpcy5jdXN0b21lckRldGFpbC50ZWxzLnB1c2gobmV3IEN1c3RvbWVyVGVsKCcnLCAnVGVsSG9tZScsICcnLCAnQVBQJykpO1xuICB9XG5cbiAgb25BZGRNYWlsR3JvdXAoKSB7XG4gICAgY29uc29sZS5kZWJ1Zygnb25BZGRNYWlsR3JvdXAnKTtcbiAgICB0aGlzLmN1c3RvbWVyRGV0YWlsLmFkZEVtYWlsKG5ldyBDdXN0b21lckVtYWlsKCcnLCAnTWFpbEhvbWUnLCAnJywgJ0FQUCcpKTtcbiAgfVxuXG4gIG9uQWRkQWRkcmVzc0dyb3VwKCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ29uQWRkQWRkcmVzc0dyb3VwJyk7XG4gICAgdGhpcy5jdXN0b21lckRldGFpbC5hZGRBZGRyZXNzKG5ldyBDdXN0b21lckFkZHJlc3MoJycsICdBZGRyZXNzVHlwZUhvbWUnLCAnJywgJycsICcnLCAnJywgJycsICdBUFAnKSk7XG4gIH1cblxuICBvblJlbW92ZVRlbEdyb3VwKGluZGV4KSB7XG4gICAgY29uc29sZS5kZWJ1Zygnb25SZW1vdmVUZWxHcm91cCcsIGluZGV4KTtcbiAgICB0aGlzLmN1c3RvbWVyRGV0YWlsLnRlbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIG9uUmVtb3ZlRW1haWxHcm91cChpbmRleCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ29uUmVtb3ZlRW1haWxHcm91cCcsIGluZGV4KTtcbiAgICB0aGlzLmN1c3RvbWVyRGV0YWlsLmVtYWlscy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgb25SZW1vdmVBZGRyZXNzR3JvdXAoaW5kZXgpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdvblJlbW92ZUFkZHJlc3NHcm91cCcsIGluZGV4KTtcbiAgICB0aGlzLmN1c3RvbWVyRGV0YWlsLmFkZHJlc3Nlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cblxuICBzY3JvbGxUb0Vycm9yKCkge1xuICAgIGxldCBlcnJvckJsb2NrID0gZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlcnJvci1tc2cnKTtcbiAgICBpZiAoZXJyb3JCbG9jay5pdGVtKDApKSB7XG4gICAgICBlcnJvckJsb2NrLml0ZW0oMCkucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTtcbiAgICB9XG4gICAgLy8gaWYgKGVycm9yQmxvY2tbMF0pIGVycm9yQmxvY2tbMF0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnIH0pXG4gIH1cbn1cbiJdfQ==