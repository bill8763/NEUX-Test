/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ProfileCodeService, Language } from '@allianzSND/core';
import { CustomerFilterCriteria } from '../bean/customer-filter-criteria';
import { CustomerService } from '../../service/customer-service.service';
import { Subject } from 'rxjs';
export class CustomerFilterComponent {
    /**
     * @param {?} customerService
     * @param {?} profileCodeService
     */
    constructor(customerService, profileCodeService) {
        this.customerService = customerService;
        this.profileCodeService = profileCodeService;
        this.isAsPresent = false; //選單是否將此次項目變成預設
        //control filter column mapping to profilecode array
        this.filterColumnMap = new Map();
        //Input criteria
        this._criteria = new CustomerFilterCriteria();
        this.doneCriteria = new EventEmitter();
        this.language = new Language();
    }
    /**
     * @return {?}
     */
    get criteria() {
        return this._criteria;
    }
    /**
     * @param {?} criteria
     * @return {?}
     */
    set criteria(criteria) {
        console.log("set criteria:", criteria);
        this._criteria = criteria;
        this.isAsPresent = criteria.savePreset;
        this.refreshFilterMap();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.customerType = this.profileCodeService.getCodeArray('Customer_Type');
        this.customerDataSource = this.profileCodeService.getCodeArray('Customer_DataSource');
        this.possibility = this.profileCodeService.getCodeArray('Customer_Possibility');
        this.children = this.profileCodeService.getCodeArray('Customer_Children');
        this.source = this.profileCodeService.getCodeArray('Customer_Source');
        this.familiarity = this.profileCodeService.getCodeArray('Customer_Familiarity');
        this.recentStatus = this.profileCodeService.getCodeArray('Customer_RecentStatus');
        this.age = this.profileCodeService.getCodeArray('Customer_Age');
        this.gender = this.profileCodeService.getCodeArray('Customer_Gender');
        this.income = this.profileCodeService.getCodeArray('Customer_Income');
        this.marriage = this.profileCodeService.getCodeArray('Customer_Marriage');
        this.manpa = this.profileCodeService.getCodeArray('Customer_Status');
        this.contactFrequency = this.profileCodeService.getCodeArray('Customer_ContactFrequancy');
        this.birthday = this.profileCodeService.getCodeArray('Customer_Birthday');
        this.completeness = this.profileCodeService.getCodeArray('Customer_Completeness');
        this.filterColumnMap.set('IsFollow', this.customerType);
        this.filterColumnMap.set('DataSource', this.customerDataSource);
        this.filterColumnMap.set('Possibility', this.possibility);
        this.filterColumnMap.set('Source', this.source);
        this.filterColumnMap.set('Familiarity', this.familiarity);
        this.filterColumnMap.set('RecentStatus', this.recentStatus);
        this.filterColumnMap.set('MANPA', this.manpa);
        this.filterColumnMap.set('Gender', this.gender);
        this.filterColumnMap.set('Marriage', this.marriage);
        this.filterColumnMap.set('Children', this.children);
        this.filterColumnMap.set('Income', this.income);
        this.filterColumnMap.set('AgeRange', this.age);
        this.filterColumnMap.set('Birthday', this.birthday);
        this.filterColumnMap.set('ContactFrequancy', this.contactFrequency);
        this.filterColumnMap.set('Completeness', this.completeness);
        if (this.criteria.getFilterMap().size == 0)
            this.clearCriteria();
        if (this.clear) {
            this.clear.subscribe((/**
             * @return {?}
             */
            () => {
                this.clearCriteria();
            }));
        }
        if (this.save) {
            this.save.subscribe((/**
             * @return {?}
             */
            () => {
                this.saveCriteria();
            }));
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        // console.debug(this.isAsPresent);
        this.isAsPresent = false;
    }
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    _resetFilter(array) {
        for (let profileCode of array) {
            profileCode.isCheck = false;
        }
    }
    /**
     * @private
     * @param {?} defaultArray
     * @param {?} array
     * @return {?}
     */
    _addDefaultChecked(defaultArray, array) {
        for (let profileCode of array) {
            if (defaultArray.includes(profileCode.getCode())) {
                profileCode.isCheck = true;
            }
        }
    }
    /**
     * @private
     * @param {?} criteriaColumn
     * @param {?} array
     * @param {?} criteria
     * @return {?}
     */
    _addCriteria(criteriaColumn, array, criteria) {
        for (let profileCode of array) {
            if (profileCode.isCheck) {
                criteria.addCriteria(criteriaColumn, profileCode.getCode());
            }
        }
    }
    /**
     * @private
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    _addFilterMap(column, value) {
        if (this.filterColumnMap.has(column)) {
            this.filterColumnMap.get(column).forEach((/**
             * @param {?} code
             * @return {?}
             */
            (code) => {
                if (value.includes(code.getCode())) {
                    code.isCheck = true;
                }
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearCriteria() {
        this._resetFilter(this.customerType);
        this._resetFilter(this.customerDataSource);
        this._resetFilter(this.birthday);
        this._resetFilter(this.age);
        this._resetFilter(this.gender);
        this._resetFilter(this.income);
        this._resetFilter(this.source);
        this._resetFilter(this.marriage);
        this._resetFilter(this.children);
        this._resetFilter(this.familiarity);
        this._resetFilter(this.recentStatus);
        this._resetFilter(this.manpa);
        this._resetFilter(this.contactFrequency);
        this._resetFilter(this.possibility);
        this._resetFilter(this.completeness);
    }
    /**
     * @private
     * @return {?}
     */
    refreshFilterMap() {
        // this.clearCriteria();
        if (this.criteria.hasCriteria() && this.criteria.getFilterMap().size > 0) {
            this.criteria.getFilterMap().forEach((/**
             * @param {?} value
             * @param {?} column
             * @return {?}
             */
            (value, column) => {
                this._addFilterMap(column, value);
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    saveCriteria() {
        /** @type {?} */
        let criteria = new CustomerFilterCriteria();
        console.debug('filterColumnMap', this.filterColumnMap);
        this.filterColumnMap.forEach((/**
         * @param {?} value
         * @param {?} column
         * @return {?}
         */
        (value, column) => {
            this._addCriteria(column, value, criteria);
        }));
        criteria.savePreset = this.isAsPresent;
        this.doneCriteria.emit(criteria);
    }
}
CustomerFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-filter',
                template: "\n\n    <!-- popu customer filter content -->\n    <div class=\"layout-cp-all ui-filter-block\">\n        <!-- chekboxes -->\n        <div class=\"data-filter-item\">\n                <!-- title -->\n                <div class=\"filter-title-block\">\n                    <h3>{{language.customerType |translate }}</h3>\n                </div>\n                <!-- end of title -->\n                <!-- checkbox -->\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of customerType; index as j\">\n                            <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                            </app-ui-form-checkbox2>          \n                        </ng-container>\n                    </ng-container>            \n                </app-ui-collapse-group>\n                <!-- end of checkbox -->\n            </div>\n\n            <div class=\"data-filter-item\">\n                    <!-- title -->\n                    <div class=\"filter-title-block\">\n                        <h3>{{language.customerSource |translate }}</h3>\n                    </div>\n                    <!-- end of title -->\n                    <!-- checkbox -->\n                    <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of customerDataSource; index as j\">\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>          \n                            </ng-container>\n                        </ng-container>            \n                    </app-ui-collapse-group> \n                    <!-- end of checkbox -->\n                </div>\n        \n        \n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.birthday |translate }}</h3>\n            </div>\n            <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of birthday; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container> \n                    </ng-container>\n\n                    \n                    <!-- <ng-container *ngIf=\"birthday.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of birthday; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2  (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>            \n        </div>\n\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.ageRange |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of age; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container>\n                        </ng-container>\n    \n                        <!-- <ng-container *ngIf=\"age.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of age; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n                 \n    \n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.gender |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of gender; index as j\">\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            </ng-container>  \n                        </ng-container>\n                </app-ui-collapse-group>\n    \n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.annualIncomeYearNTD |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of income; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container> \n                        </ng-container>\n    \n                        <!-- <ng-container *ngIf=\"income.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of income; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.source |translate }}</h3>\n                </div>\n                <app-ui-collapse-group [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of source; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container>\n                    </ng-container>\n                    \n                    <!-- <ng-container *ngIf=\"source.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of source; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n    \n                </app-ui-collapse-group>\n       \n            </div>\n\n\n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.marriage |translate }}</h3>\n            </div>\n            <app-ui-collapse-group [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of marriage; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            </ng-container>                \n                        <!-- </ng-container>  -->\n                    </ng-container>\n                  <!-- <ng-container *ngIf=\"marriage.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                             <ng-container *ngFor=\"let profileCode of marriage; index as j\">\n                               <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                            \n                                </ng-container> \n                            </ng-container>   \n                        </ng-container>\n             \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>\n        </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.children |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of children; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container> \n                        </ng-container>\n    \n                        <!-- <ng-container *ngIf=\"children.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of children; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2  (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.familiarity |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of familiarity; index as j\">\n                            <!-- <ng-container *ngIf=\"familiarity.length < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container>\n                    </ng-container>\n                    <!-- <ng-container *ngIf=\"familiarity.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of familiarity; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                    </ng-container> -->\n                   \n                </app-ui-collapse-group>\n                \n                \n            </div>\n            \n            \n            \n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.recentStatus |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of recentStatus; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container> -->\n                            </ng-container>\n                        </ng-container>\n                        \n                        <!-- <ng-container *ngIf=\"recentStatus.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of recentStatus; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.customerStatus |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of manpa; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container>\n                        </ng-container>\n                        <!-- <ng-container *ngIf=\"manpa.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of manpa; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.contactFrequencyMonth |translate }}</h3>\n            </div>\n            <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of contactFrequency; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container> \n                    </ng-container>\n\n                    <!-- <ng-container *ngIf=\"contactFrequency.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of contactFrequency; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>\n            \n            \n        </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.possibility |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of possibility; index as j\">\n                            <app-ui-form-checkbox2  (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                            </app-ui-form-checkbox2>          \n                        </ng-container>    \n                    </ng-container>    \n                </app-ui-collapse-group>\n      \n            </div>\n\n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.completeness |translate }}</h3>\n            </div>\n            <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of completeness; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container> \n                    </ng-container>\n\n                    <!-- <ng-container *ngIf=\"completeness.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of completeness; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2  (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>\n \n        </div>\n        <!-- end of chekboxes -->\n        <!-- settin block -->\n        <div class=\"setting-block\">\n            <app-ui-form-checkbox [(nxValue)]=\"isAsPresent\" [isDisable]=\"false\" >\n                <ng-container checkboxText=\"style2\">{{language.preset |translate }}</ng-container>\n            </app-ui-form-checkbox>\n        </div>\n        <!-- end of setting block -->\n    </div>\n    <!-- end of popup customer filter content -->\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-block;width:100%;height:100%}.ui-filter-block{display:inline-block;width:100%;height:100%}.ui-filter-block .filter-title-block h3{font-size:1rem;font-weight:700;line-height:28px;padding-bottom:5px}.ui-filter-block .data-filter-item{margin-bottom:30px}.setting-block{display:block;width:100%;padding-bottom:30px}"]
            }] }
];
CustomerFilterComponent.ctorParameters = () => [
    { type: CustomerService },
    { type: ProfileCodeService }
];
CustomerFilterComponent.propDecorators = {
    clear: [{ type: Input }],
    save: [{ type: Input }],
    open: [{ type: Input }],
    criteria: [{ type: Input }],
    doneCriteria: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CustomerFilterComponent.prototype.customerType;
    /** @type {?} */
    CustomerFilterComponent.prototype.customerDataSource;
    /** @type {?} */
    CustomerFilterComponent.prototype.possibility;
    /** @type {?} */
    CustomerFilterComponent.prototype.source;
    /** @type {?} */
    CustomerFilterComponent.prototype.familiarity;
    /** @type {?} */
    CustomerFilterComponent.prototype.recentStatus;
    /** @type {?} */
    CustomerFilterComponent.prototype.manpa;
    /** @type {?} */
    CustomerFilterComponent.prototype.gender;
    /** @type {?} */
    CustomerFilterComponent.prototype.marriage;
    /** @type {?} */
    CustomerFilterComponent.prototype.children;
    /** @type {?} */
    CustomerFilterComponent.prototype.income;
    /** @type {?} */
    CustomerFilterComponent.prototype.age;
    /** @type {?} */
    CustomerFilterComponent.prototype.contactFrequency;
    /** @type {?} */
    CustomerFilterComponent.prototype.completeness;
    /** @type {?} */
    CustomerFilterComponent.prototype.birthday;
    /** @type {?} */
    CustomerFilterComponent.prototype.isAsPresent;
    /**
     * @type {?}
     * @private
     */
    CustomerFilterComponent.prototype.filterColumnMap;
    /** @type {?} */
    CustomerFilterComponent.prototype.clear;
    /** @type {?} */
    CustomerFilterComponent.prototype.save;
    /** @type {?} */
    CustomerFilterComponent.prototype.open;
    /**
     * @type {?}
     * @private
     */
    CustomerFilterComponent.prototype._criteria;
    /**
     * @type {?}
     * @private
     */
    CustomerFilterComponent.prototype.doneCriteria;
    /** @type {?} */
    CustomerFilterComponent.prototype.language;
    /**
     * @type {?}
     * @private
     */
    CustomerFilterComponent.prototype.customerService;
    /**
     * @type {?}
     * @private
     */
    CustomerFilterComponent.prototype.profileCodeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY3VzdG9tZXItZmlsdGVyL2N1c3RvbWVyLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFlLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTy9CLE1BQU07Ozs7O0lBdURKLFlBQW9CLGVBQWdDLEVBQVUsa0JBQXNDO1FBQWhGLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUF0QzdGLGdCQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsZUFBZTtRQUUzQyxvREFBb0Q7UUFDNUMsb0JBQWUsR0FBb0MsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQWNyRSxnQkFBZ0I7UUFDUixjQUFTLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1FBZXpDLGlCQUFZLEdBQXlDLElBQUksWUFBWSxFQUFFLENBQUM7UUFTekUsYUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7SUFGM0MsQ0FBQzs7OztJQXJCRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFnQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFB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O0lBQ2xDLHNDQUErQjs7SUFDL0IsbURBQTRDOztJQUM1QywrQ0FBd0M7O0lBQ3hDLDJDQUFvQzs7SUFDcEMsOENBQTJCOzs7OztJQUczQixrREFBcUU7O0lBR3JFLHdDQUMyQjs7SUFFM0IsdUNBQzBCOztJQUUxQix1Q0FDMEI7Ozs7O0lBSzFCLDRDQUFpRDs7Ozs7SUFjakQsK0NBQ2dGOztJQVNoRiwyQ0FBMkM7Ozs7O0lBSi9CLGtEQUF3Qzs7Ozs7SUFBRSxxREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9maWxlQ29kZSwgUHJvZmlsZUNvZGVTZXJ2aWNlLCBMYW5ndWFnZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSB9IGZyb20gJy4uL2JlYW4vY3VzdG9tZXItZmlsdGVyLWNyaXRlcmlhJztcbmltcG9ydCB7IEN1c3RvbWVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvY3VzdG9tZXItc2VydmljZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWN1c3RvbWVyLWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1maWx0ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lckZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGN1c3RvbWVyVHlwZTogQXJyYXk8UHJvZmlsZUNvZGU+O1xuICBwdWJsaWMgY3VzdG9tZXJEYXRhU291cmNlOiBBcnJheTxQcm9maWxlQ29kZT47XG4gIHB1YmxpYyBwb3NzaWJpbGl0eTogQXJyYXk8UHJvZmlsZUNvZGU+O1xuICBwdWJsaWMgc291cmNlOiBBcnJheTxQcm9maWxlQ29kZT47XG4gIHB1YmxpYyBmYW1pbGlhcml0eTogQXJyYXk8UHJvZmlsZUNvZGU+O1xuICBwdWJsaWMgcmVjZW50U3RhdHVzOiBBcnJheTxQcm9maWxlQ29kZT47XG4gIHB1YmxpYyBtYW5wYTogQXJyYXk8UHJvZmlsZUNvZGU+O1xuICBwdWJsaWMgZ2VuZGVyOiBBcnJheTxQcm9maWxlQ29kZT47XG4gIHB1YmxpYyBtYXJyaWFnZTogQXJyYXk8UHJvZmlsZUNvZGU+O1xuICBwdWJsaWMgY2hpbGRyZW46IEFycmF5PFByb2ZpbGVDb2RlPjtcbiAgcHVibGljIGluY29tZTogQXJyYXk8UHJvZmlsZUNvZGU+O1xuICBwdWJsaWMgYWdlOiBBcnJheTxQcm9maWxlQ29kZT47XG4gIHB1YmxpYyBjb250YWN0RnJlcXVlbmN5OiBBcnJheTxQcm9maWxlQ29kZT47XG4gIHB1YmxpYyBjb21wbGV0ZW5lc3M6IEFycmF5PFByb2ZpbGVDb2RlPjtcbiAgcHVibGljIGJpcnRoZGF5OiBBcnJheTxQcm9maWxlQ29kZT47XG4gIHB1YmxpYyBpc0FzUHJlc2VudCA9IGZhbHNlOyAvL+mBuOWWruaYr+WQpuWwh+atpOasoemgheebruiuiuaIkOmgkOiorVxuXG4gIC8vY29udHJvbCBmaWx0ZXIgY29sdW1uIG1hcHBpbmcgdG8gcHJvZmlsZWNvZGUgYXJyYXlcbiAgcHJpdmF0ZSBmaWx0ZXJDb2x1bW5NYXA6IE1hcDxzdHJpbmcsIEFycmF5PFByb2ZpbGVDb2RlPj4gPSBuZXcgTWFwKCk7XG5cbiAgLy9zdWJqZWN0IHRvIHN1YnNjcmliZSBmb3Igb3BlbiAmIHNhdmUgJiBjbGVhclxuICBASW5wdXQoKVxuICBwdWJsaWMgY2xlYXI6IFN1YmplY3Q8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2F2ZTogU3ViamVjdDxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBvcGVuOiBTdWJqZWN0PGFueT47XG5cblxuXG4gIC8vSW5wdXQgY3JpdGVyaWFcbiAgcHJpdmF0ZSBfY3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuICBASW5wdXQoKVxuICBnZXQgY3JpdGVyaWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyaXRlcmlhO1xuICB9XG5cbiAgc2V0IGNyaXRlcmlhKGNyaXRlcmlhOiBDdXN0b21lckZpbHRlckNyaXRlcmlhKSB7XG4gICAgY29uc29sZS5sb2coXCJzZXQgY3JpdGVyaWE6XCIsIGNyaXRlcmlhKTtcbiAgICB0aGlzLl9jcml0ZXJpYSA9IGNyaXRlcmlhO1xuICAgIHRoaXMuaXNBc1ByZXNlbnQgPSBjcml0ZXJpYS5zYXZlUHJlc2V0O1xuICAgIHRoaXMucmVmcmVzaEZpbHRlck1hcCgpO1xuICB9XG5cblxuICBAT3V0cHV0KClcbiAgcHJpdmF0ZSBkb25lQ3JpdGVyaWE6IEV2ZW50RW1pdHRlcjxDdXN0b21lckZpbHRlckNyaXRlcmlhPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1c3RvbWVyU2VydmljZTogQ3VzdG9tZXJTZXJ2aWNlLCBwcml2YXRlIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmN1c3RvbWVyVHlwZSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfVHlwZScpO1xuICAgIHRoaXMuY3VzdG9tZXJEYXRhU291cmNlID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9EYXRhU291cmNlJyk7XG4gICAgdGhpcy5wb3NzaWJpbGl0eSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfUG9zc2liaWxpdHknKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9DaGlsZHJlbicpO1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9Tb3VyY2UnKTtcbiAgICB0aGlzLmZhbWlsaWFyaXR5ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9GYW1pbGlhcml0eScpO1xuICAgIHRoaXMucmVjZW50U3RhdHVzID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9SZWNlbnRTdGF0dXMnKTtcbiAgICB0aGlzLmFnZSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfQWdlJyk7XG4gICAgdGhpcy5nZW5kZXIgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0dlbmRlcicpO1xuICAgIHRoaXMuaW5jb21lID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9JbmNvbWUnKTtcbiAgICB0aGlzLm1hcnJpYWdlID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9NYXJyaWFnZScpO1xuICAgIHRoaXMubWFucGEgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX1N0YXR1cycpO1xuICAgIHRoaXMuY29udGFjdEZyZXF1ZW5jeSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfQ29udGFjdEZyZXF1YW5jeScpO1xuICAgIHRoaXMuYmlydGhkYXkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0JpcnRoZGF5Jyk7XG4gICAgdGhpcy5jb21wbGV0ZW5lc3MgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0NvbXBsZXRlbmVzcycpO1xuXG4gICAgdGhpcy5maWx0ZXJDb2x1bW5NYXAuc2V0KCdJc0ZvbGxvdycsIHRoaXMuY3VzdG9tZXJUeXBlKTtcbiAgICB0aGlzLmZpbHRlckNvbHVtbk1hcC5zZXQoJ0RhdGFTb3VyY2UnLCB0aGlzLmN1c3RvbWVyRGF0YVNvdXJjZSk7XG4gICAgdGhpcy5maWx0ZXJDb2x1bW5NYXAuc2V0KCdQb3NzaWJpbGl0eScsIHRoaXMucG9zc2liaWxpdHkpO1xuICAgIHRoaXMuZmlsdGVyQ29sdW1uTWFwLnNldCgnU291cmNlJywgdGhpcy5zb3VyY2UpO1xuICAgIHRoaXMuZmlsdGVyQ29sdW1uTWFwLnNldCgnRmFtaWxpYXJpdHknLCB0aGlzLmZhbWlsaWFyaXR5KTtcbiAgICB0aGlzLmZpbHRlckNvbHVtbk1hcC5zZXQoJ1JlY2VudFN0YXR1cycsIHRoaXMucmVjZW50U3RhdHVzKTtcbiAgICB0aGlzLmZpbHRlckNvbHVtbk1hcC5zZXQoJ01BTlBBJywgdGhpcy5tYW5wYSk7XG4gICAgdGhpcy5maWx0ZXJDb2x1bW5NYXAuc2V0KCdHZW5kZXInLCB0aGlzLmdlbmRlcik7XG4gICAgdGhpcy5maWx0ZXJDb2x1bW5NYXAuc2V0KCdNYXJyaWFnZScsIHRoaXMubWFycmlhZ2UpO1xuICAgIHRoaXMuZmlsdGVyQ29sdW1uTWFwLnNldCgnQ2hpbGRyZW4nLCB0aGlzLmNoaWxkcmVuKTtcbiAgICB0aGlzLmZpbHRlckNvbHVtbk1hcC5zZXQoJ0luY29tZScsIHRoaXMuaW5jb21lKTtcbiAgICB0aGlzLmZpbHRlckNvbHVtbk1hcC5zZXQoJ0FnZVJhbmdlJywgdGhpcy5hZ2UpO1xuICAgIHRoaXMuZmlsdGVyQ29sdW1uTWFwLnNldCgnQmlydGhkYXknLCB0aGlzLmJpcnRoZGF5KTtcbiAgICB0aGlzLmZpbHRlckNvbHVtbk1hcC5zZXQoJ0NvbnRhY3RGcmVxdWFuY3knLCB0aGlzLmNvbnRhY3RGcmVxdWVuY3kpO1xuICAgIHRoaXMuZmlsdGVyQ29sdW1uTWFwLnNldCgnQ29tcGxldGVuZXNzJywgdGhpcy5jb21wbGV0ZW5lc3MpO1xuICAgIGlmICh0aGlzLmNyaXRlcmlhLmdldEZpbHRlck1hcCgpLnNpemUgPT0gMClcbiAgICAgIHRoaXMuY2xlYXJDcml0ZXJpYSgpO1xuXG4gICAgaWYgKHRoaXMuY2xlYXIpIHtcbiAgICAgIHRoaXMuY2xlYXIuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbGVhckNyaXRlcmlhKCk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNhdmUpIHtcbiAgICAgIHRoaXMuc2F2ZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNhdmVDcml0ZXJpYSgpO1xuICAgICAgfSlcbiAgICB9XG5cblxuXG4gIH1cblxuXG4gIG9uQ2xpY2soKSB7XG4gICAgLy8gY29uc29sZS5kZWJ1Zyh0aGlzLmlzQXNQcmVzZW50KTtcbiAgICB0aGlzLmlzQXNQcmVzZW50ID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9yZXNldEZpbHRlcihhcnJheTogQXJyYXk8UHJvZmlsZUNvZGU+KSB7XG4gICAgZm9yIChsZXQgcHJvZmlsZUNvZGUgb2YgYXJyYXkpIHtcbiAgICAgIHByb2ZpbGVDb2RlLmlzQ2hlY2sgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZGREZWZhdWx0Q2hlY2tlZChkZWZhdWx0QXJyYXk6IEFycmF5PHN0cmluZz4sIGFycmF5OiBBcnJheTxQcm9maWxlQ29kZT4pIHtcbiAgICBmb3IgKGxldCBwcm9maWxlQ29kZSBvZiBhcnJheSkge1xuICAgICAgaWYgKGRlZmF1bHRBcnJheS5pbmNsdWRlcyhwcm9maWxlQ29kZS5nZXRDb2RlKCkpKSB7XG4gICAgICAgIHByb2ZpbGVDb2RlLmlzQ2hlY2sgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWRkQ3JpdGVyaWEoY3JpdGVyaWFDb2x1bW46IHN0cmluZywgYXJyYXk6IEFycmF5PFByb2ZpbGVDb2RlPiwgY3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEpIHtcbiAgICBmb3IgKGxldCBwcm9maWxlQ29kZSBvZiBhcnJheSkge1xuICAgICAgaWYgKHByb2ZpbGVDb2RlLmlzQ2hlY2spIHtcbiAgICAgICAgY3JpdGVyaWEuYWRkQ3JpdGVyaWEoY3JpdGVyaWFDb2x1bW4sIHByb2ZpbGVDb2RlLmdldENvZGUoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRmlsdGVyTWFwKGNvbHVtbjogc3RyaW5nLCB2YWx1ZTogQXJyYXk8c3RyaW5nPikge1xuICAgIGlmICh0aGlzLmZpbHRlckNvbHVtbk1hcC5oYXMoY29sdW1uKSkge1xuICAgICAgdGhpcy5maWx0ZXJDb2x1bW5NYXAuZ2V0KGNvbHVtbikuZm9yRWFjaCgoY29kZTogUHJvZmlsZUNvZGUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKGNvZGUuZ2V0Q29kZSgpKSkge1xuICAgICAgICAgIGNvZGUuaXNDaGVjayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckNyaXRlcmlhKCkge1xuICAgIHRoaXMuX3Jlc2V0RmlsdGVyKHRoaXMuY3VzdG9tZXJUeXBlKTtcbiAgICB0aGlzLl9yZXNldEZpbHRlcih0aGlzLmN1c3RvbWVyRGF0YVNvdXJjZSk7XG4gICAgdGhpcy5fcmVzZXRGaWx0ZXIodGhpcy5iaXJ0aGRheSk7XG4gICAgdGhpcy5fcmVzZXRGaWx0ZXIodGhpcy5hZ2UpO1xuICAgIHRoaXMuX3Jlc2V0RmlsdGVyKHRoaXMuZ2VuZGVyKTtcbiAgICB0aGlzLl9yZXNldEZpbHRlcih0aGlzLmluY29tZSk7XG4gICAgdGhpcy5fcmVzZXRGaWx0ZXIodGhpcy5zb3VyY2UpO1xuICAgIHRoaXMuX3Jlc2V0RmlsdGVyKHRoaXMubWFycmlhZ2UpO1xuICAgIHRoaXMuX3Jlc2V0RmlsdGVyKHRoaXMuY2hpbGRyZW4pO1xuICAgIHRoaXMuX3Jlc2V0RmlsdGVyKHRoaXMuZmFtaWxpYXJpdHkpO1xuICAgIHRoaXMuX3Jlc2V0RmlsdGVyKHRoaXMucmVjZW50U3RhdHVzKTtcbiAgICB0aGlzLl9yZXNldEZpbHRlcih0aGlzLm1hbnBhKTtcbiAgICB0aGlzLl9yZXNldEZpbHRlcih0aGlzLmNvbnRhY3RGcmVxdWVuY3kpO1xuICAgIHRoaXMuX3Jlc2V0RmlsdGVyKHRoaXMucG9zc2liaWxpdHkpO1xuICAgIHRoaXMuX3Jlc2V0RmlsdGVyKHRoaXMuY29tcGxldGVuZXNzKTtcblxuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoRmlsdGVyTWFwKCkge1xuICAgIC8vIHRoaXMuY2xlYXJDcml0ZXJpYSgpO1xuICAgIGlmICh0aGlzLmNyaXRlcmlhLmhhc0NyaXRlcmlhKCkgJiYgdGhpcy5jcml0ZXJpYS5nZXRGaWx0ZXJNYXAoKS5zaXplID4gMCkge1xuICAgICAgdGhpcy5jcml0ZXJpYS5nZXRGaWx0ZXJNYXAoKS5mb3JFYWNoKCh2YWx1ZTogQXJyYXk8c3RyaW5nPiwgY29sdW1uOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5fYWRkRmlsdGVyTWFwKGNvbHVtbiwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlQ3JpdGVyaWEoKSB7XG4gICAgbGV0IGNyaXRlcmlhID0gbmV3IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEoKTtcblxuICAgIGNvbnNvbGUuZGVidWcoJ2ZpbHRlckNvbHVtbk1hcCcsIHRoaXMuZmlsdGVyQ29sdW1uTWFwKTtcbiAgICB0aGlzLmZpbHRlckNvbHVtbk1hcC5mb3JFYWNoKCh2YWx1ZTogQXJyYXk8UHJvZmlsZUNvZGU+LCBjb2x1bW46IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5fYWRkQ3JpdGVyaWEoY29sdW1uLCB2YWx1ZSwgY3JpdGVyaWEpO1xuICAgIH0pO1xuXG4gICAgY3JpdGVyaWEuc2F2ZVByZXNldCA9IHRoaXMuaXNBc1ByZXNlbnQ7XG5cbiAgICB0aGlzLmRvbmVDcml0ZXJpYS5lbWl0KGNyaXRlcmlhKTtcbiAgfVxufVxuIl19