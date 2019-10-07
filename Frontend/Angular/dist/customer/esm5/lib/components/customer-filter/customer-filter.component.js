/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ProfileCodeService, Language } from '@allianzSND/core';
import { CustomerFilterCriteria } from '../bean/customer-filter-criteria';
import { CustomerService } from '../../service/customer-service.service';
import { Subject } from 'rxjs';
var CustomerFilterComponent = /** @class */ (function () {
    function CustomerFilterComponent(customerService, profileCodeService) {
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
    Object.defineProperty(CustomerFilterComponent.prototype, "criteria", {
        get: /**
         * @return {?}
         */
        function () {
            return this._criteria;
        },
        set: /**
         * @param {?} criteria
         * @return {?}
         */
        function (criteria) {
            console.log("set criteria:", criteria);
            this._criteria = criteria;
            this.isAsPresent = criteria.savePreset;
            this.refreshFilterMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
            function () {
                _this.clearCriteria();
            }));
        }
        if (this.save) {
            this.save.subscribe((/**
             * @return {?}
             */
            function () {
                _this.saveCriteria();
            }));
        }
    };
    /**
     * @return {?}
     */
    CustomerFilterComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        // console.debug(this.isAsPresent);
        this.isAsPresent = false;
    };
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    CustomerFilterComponent.prototype._resetFilter = /**
     * @private
     * @param {?} array
     * @return {?}
     */
    function (array) {
        var e_1, _a;
        try {
            for (var array_1 = tslib_1.__values(array), array_1_1 = array_1.next(); !array_1_1.done; array_1_1 = array_1.next()) {
                var profileCode = array_1_1.value;
                profileCode.isCheck = false;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (array_1_1 && !array_1_1.done && (_a = array_1.return)) _a.call(array_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @param {?} defaultArray
     * @param {?} array
     * @return {?}
     */
    CustomerFilterComponent.prototype._addDefaultChecked = /**
     * @private
     * @param {?} defaultArray
     * @param {?} array
     * @return {?}
     */
    function (defaultArray, array) {
        var e_2, _a;
        try {
            for (var array_2 = tslib_1.__values(array), array_2_1 = array_2.next(); !array_2_1.done; array_2_1 = array_2.next()) {
                var profileCode = array_2_1.value;
                if (defaultArray.includes(profileCode.getCode())) {
                    profileCode.isCheck = true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (array_2_1 && !array_2_1.done && (_a = array_2.return)) _a.call(array_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @private
     * @param {?} criteriaColumn
     * @param {?} array
     * @param {?} criteria
     * @return {?}
     */
    CustomerFilterComponent.prototype._addCriteria = /**
     * @private
     * @param {?} criteriaColumn
     * @param {?} array
     * @param {?} criteria
     * @return {?}
     */
    function (criteriaColumn, array, criteria) {
        var e_3, _a;
        try {
            for (var array_3 = tslib_1.__values(array), array_3_1 = array_3.next(); !array_3_1.done; array_3_1 = array_3.next()) {
                var profileCode = array_3_1.value;
                if (profileCode.isCheck) {
                    criteria.addCriteria(criteriaColumn, profileCode.getCode());
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (array_3_1 && !array_3_1.done && (_a = array_3.return)) _a.call(array_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    /**
     * @private
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    CustomerFilterComponent.prototype._addFilterMap = /**
     * @private
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    function (column, value) {
        if (this.filterColumnMap.has(column)) {
            this.filterColumnMap.get(column).forEach((/**
             * @param {?} code
             * @return {?}
             */
            function (code) {
                if (value.includes(code.getCode())) {
                    code.isCheck = true;
                }
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    CustomerFilterComponent.prototype.clearCriteria = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @return {?}
     */
    CustomerFilterComponent.prototype.refreshFilterMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // this.clearCriteria();
        if (this.criteria.hasCriteria() && this.criteria.getFilterMap().size > 0) {
            this.criteria.getFilterMap().forEach((/**
             * @param {?} value
             * @param {?} column
             * @return {?}
             */
            function (value, column) {
                _this._addFilterMap(column, value);
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    CustomerFilterComponent.prototype.saveCriteria = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var criteria = new CustomerFilterCriteria();
        console.debug('filterColumnMap', this.filterColumnMap);
        this.filterColumnMap.forEach((/**
         * @param {?} value
         * @param {?} column
         * @return {?}
         */
        function (value, column) {
            _this._addCriteria(column, value, criteria);
        }));
        criteria.savePreset = this.isAsPresent;
        this.doneCriteria.emit(criteria);
    };
    CustomerFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-customer-filter',
                    template: "\n\n    <!-- popu customer filter content -->\n    <div class=\"layout-cp-all ui-filter-block\">\n        <!-- chekboxes -->\n        <div class=\"data-filter-item\">\n                <!-- title -->\n                <div class=\"filter-title-block\">\n                    <h3>{{language.customerType |translate }}</h3>\n                </div>\n                <!-- end of title -->\n                <!-- checkbox -->\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of customerType; index as j\">\n                            <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                            </app-ui-form-checkbox2>          \n                        </ng-container>\n                    </ng-container>            \n                </app-ui-collapse-group>\n                <!-- end of checkbox -->\n            </div>\n\n            <div class=\"data-filter-item\">\n                    <!-- title -->\n                    <div class=\"filter-title-block\">\n                        <h3>{{language.customerSource |translate }}</h3>\n                    </div>\n                    <!-- end of title -->\n                    <!-- checkbox -->\n                    <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of customerDataSource; index as j\">\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>          \n                            </ng-container>\n                        </ng-container>            \n                    </app-ui-collapse-group> \n                    <!-- end of checkbox -->\n                </div>\n        \n        \n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.birthday |translate }}</h3>\n            </div>\n            <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of birthday; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container> \n                    </ng-container>\n\n                    \n                    <!-- <ng-container *ngIf=\"birthday.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of birthday; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2  (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>            \n        </div>\n\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.ageRange |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of age; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container>\n                        </ng-container>\n    \n                        <!-- <ng-container *ngIf=\"age.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of age; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n                 \n    \n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.gender |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of gender; index as j\">\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            </ng-container>  \n                        </ng-container>\n                </app-ui-collapse-group>\n    \n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.annualIncomeYearNTD |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of income; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container> \n                        </ng-container>\n    \n                        <!-- <ng-container *ngIf=\"income.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of income; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.source |translate }}</h3>\n                </div>\n                <app-ui-collapse-group [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of source; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container>\n                    </ng-container>\n                    \n                    <!-- <ng-container *ngIf=\"source.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of source; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n    \n                </app-ui-collapse-group>\n       \n            </div>\n\n\n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.marriage |translate }}</h3>\n            </div>\n            <app-ui-collapse-group [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of marriage; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            </ng-container>                \n                        <!-- </ng-container>  -->\n                    </ng-container>\n                  <!-- <ng-container *ngIf=\"marriage.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                             <ng-container *ngFor=\"let profileCode of marriage; index as j\">\n                               <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                            \n                                </ng-container> \n                            </ng-container>   \n                        </ng-container>\n             \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>\n        </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.children |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of children; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container> \n                        </ng-container>\n    \n                        <!-- <ng-container *ngIf=\"children.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of children; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2  (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.familiarity |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of familiarity; index as j\">\n                            <!-- <ng-container *ngIf=\"familiarity.length < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container>\n                    </ng-container>\n                    <!-- <ng-container *ngIf=\"familiarity.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of familiarity; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                    </ng-container> -->\n                   \n                </app-ui-collapse-group>\n                \n                \n            </div>\n            \n            \n            \n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.recentStatus |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of recentStatus; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container> -->\n                            </ng-container>\n                        </ng-container>\n                        \n                        <!-- <ng-container *ngIf=\"recentStatus.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of recentStatus; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.customerStatus |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of manpa; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container>\n                        </ng-container>\n                        <!-- <ng-container *ngIf=\"manpa.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of manpa; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.contactFrequencyMonth |translate }}</h3>\n            </div>\n            <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of contactFrequency; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container> \n                    </ng-container>\n\n                    <!-- <ng-container *ngIf=\"contactFrequency.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of contactFrequency; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>\n            \n            \n        </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.possibility |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of possibility; index as j\">\n                            <app-ui-form-checkbox2  (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                            </app-ui-form-checkbox2>          \n                        </ng-container>    \n                    </ng-container>    \n                </app-ui-collapse-group>\n      \n            </div>\n\n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.completeness |translate }}</h3>\n            </div>\n            <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of completeness; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container> \n                    </ng-container>\n\n                    <!-- <ng-container *ngIf=\"completeness.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of completeness; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2  (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>\n \n        </div>\n        <!-- end of chekboxes -->\n        <!-- settin block -->\n        <div class=\"setting-block\">\n            <app-ui-form-checkbox [(nxValue)]=\"isAsPresent\" [isDisable]=\"false\" >\n                <ng-container checkboxText=\"style2\">{{language.preset |translate }}</ng-container>\n            </app-ui-form-checkbox>\n        </div>\n        <!-- end of setting block -->\n    </div>\n    <!-- end of popup customer filter content -->\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-block;width:100%;height:100%}.ui-filter-block{display:inline-block;width:100%;height:100%}.ui-filter-block .filter-title-block h3{font-size:1rem;font-weight:700;line-height:28px;padding-bottom:5px}.ui-filter-block .data-filter-item{margin-bottom:30px}.setting-block{display:block;width:100%;padding-bottom:30px}"]
                }] }
    ];
    CustomerFilterComponent.ctorParameters = function () { return [
        { type: CustomerService },
        { type: ProfileCodeService }
    ]; };
    CustomerFilterComponent.propDecorators = {
        clear: [{ type: Input }],
        save: [{ type: Input }],
        open: [{ type: Input }],
        criteria: [{ type: Input }],
        doneCriteria: [{ type: Output }]
    };
    return CustomerFilterComponent;
}());
export { CustomerFilterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY3VzdG9tZXItZmlsdGVyL2N1c3RvbWVyLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBZSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQTRERSxpQ0FBb0IsZUFBZ0MsRUFBVSxrQkFBc0M7UUFBaEYsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQXRDN0YsZ0JBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxlQUFlO1FBRTNDLG9EQUFvRDtRQUM1QyxvQkFBZSxHQUFvQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBY3JFLGdCQUFnQjtRQUNSLGNBQVMsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFlekMsaUJBQVksR0FBeUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVN6RSxhQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUYzQyxDQUFDO0lBckJELHNCQUNJLDZDQUFROzs7O1FBRFo7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFRCxVQUFhLFFBQWdDO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FB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QUZGLGtCQUFrQjs7O3dCQWlDckMsS0FBSzt1QkFHTCxLQUFLO3VCQUdMLEtBQUs7MkJBT0wsS0FBSzsrQkFhTCxNQUFNOztJQStJVCw4QkFBQztDQUFBLEFBck1ELElBcU1DO1NBaE1ZLHVCQUF1Qjs7O0lBRWxDLCtDQUF3Qzs7SUFDeEMscURBQThDOztJQUM5Qyw4Q0FBdUM7O0lBQ3ZDLHlDQUFrQzs7SUFDbEMsOENBQXVDOztJQUN2QywrQ0FBd0M7O0lBQ3hDLHdDQUFpQzs7SUFDakMseUNBQWtDOztJQUNsQywyQ0FBb0M7O0lBQ3BDLDJDQUFvQzs7SUFDcEMseUNBQWtDOztJQUNsQyxzQ0FBK0I7O0lBQy9CLG1EQUE0Qzs7SUFDNUMsK0NBQXdDOztJQUN4QywyQ0FBb0M7O0lBQ3BDLDhDQUEyQjs7Ozs7SUFHM0Isa0RBQXFFOztJQUdyRSx3Q0FDMkI7O0lBRTNCLHVDQUMwQjs7SUFFMUIsdUNBQzBCOzs7OztJQUsxQiw0Q0FBaUQ7Ozs7O0lBY2pELCtDQUNnRjs7SUFTaEYsMkNBQTJDOzs7OztJQUovQixrREFBd0M7Ozs7O0lBQUUscURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZmlsZUNvZGUsIFByb2ZpbGVDb2RlU2VydmljZSwgTGFuZ3VhZ2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgfSBmcm9tICcuLi9iZWFuL2N1c3RvbWVyLWZpbHRlci1jcml0ZXJpYSc7XG5pbXBvcnQgeyBDdXN0b21lclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2N1c3RvbWVyLXNlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lci1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXItZmlsdGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBjdXN0b21lclR5cGU6IEFycmF5PFByb2ZpbGVDb2RlPjtcbiAgcHVibGljIGN1c3RvbWVyRGF0YVNvdXJjZTogQXJyYXk8UHJvZmlsZUNvZGU+O1xuICBwdWJsaWMgcG9zc2liaWxpdHk6IEFycmF5PFByb2ZpbGVDb2RlPjtcbiAgcHVibGljIHNvdXJjZTogQXJyYXk8UHJvZmlsZUNvZGU+O1xuICBwdWJsaWMgZmFtaWxpYXJpdHk6IEFycmF5PFByb2ZpbGVDb2RlPjtcbiAgcHVibGljIHJlY2VudFN0YXR1czogQXJyYXk8UHJvZmlsZUNvZGU+O1xuICBwdWJsaWMgbWFucGE6IEFycmF5PFByb2ZpbGVDb2RlPjtcbiAgcHVibGljIGdlbmRlcjogQXJyYXk8UHJvZmlsZUNvZGU+O1xuICBwdWJsaWMgbWFycmlhZ2U6IEFycmF5PFByb2ZpbGVDb2RlPjtcbiAgcHVibGljIGNoaWxkcmVuOiBBcnJheTxQcm9maWxlQ29kZT47XG4gIHB1YmxpYyBpbmNvbWU6IEFycmF5PFByb2ZpbGVDb2RlPjtcbiAgcHVibGljIGFnZTogQXJyYXk8UHJvZmlsZUNvZGU+O1xuICBwdWJsaWMgY29udGFjdEZyZXF1ZW5jeTogQXJyYXk8UHJvZmlsZUNvZGU+O1xuICBwdWJsaWMgY29tcGxldGVuZXNzOiBBcnJheTxQcm9maWxlQ29kZT47XG4gIHB1YmxpYyBiaXJ0aGRheTogQXJyYXk8UHJvZmlsZUNvZGU+O1xuICBwdWJsaWMgaXNBc1ByZXNlbnQgPSBmYWxzZTsgLy/pgbjllq7mmK/lkKblsIfmraTmrKHpoIXnm67orormiJDpoJDoqK1cblxuICAvL2NvbnRyb2wgZmlsdGVyIGNvbHVtbiBtYXBwaW5nIHRvIHByb2ZpbGVjb2RlIGFycmF5XG4gIHByaXZhdGUgZmlsdGVyQ29sdW1uTWFwOiBNYXA8c3RyaW5nLCBBcnJheTxQcm9maWxlQ29kZT4+ID0gbmV3IE1hcCgpO1xuXG4gIC8vc3ViamVjdCB0byBzdWJzY3JpYmUgZm9yIG9wZW4gJiBzYXZlICYgY2xlYXJcbiAgQElucHV0KClcbiAgcHVibGljIGNsZWFyOiBTdWJqZWN0PGFueT47XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNhdmU6IFN1YmplY3Q8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgb3BlbjogU3ViamVjdDxhbnk+O1xuXG5cblxuICAvL0lucHV0IGNyaXRlcmlhXG4gIHByaXZhdGUgX2NyaXRlcmlhID0gbmV3IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEoKTtcbiAgQElucHV0KClcbiAgZ2V0IGNyaXRlcmlhKCkge1xuICAgIHJldHVybiB0aGlzLl9jcml0ZXJpYTtcbiAgfVxuXG4gIHNldCBjcml0ZXJpYShjcml0ZXJpYTogQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSkge1xuICAgIGNvbnNvbGUubG9nKFwic2V0IGNyaXRlcmlhOlwiLCBjcml0ZXJpYSk7XG4gICAgdGhpcy5fY3JpdGVyaWEgPSBjcml0ZXJpYTtcbiAgICB0aGlzLmlzQXNQcmVzZW50ID0gY3JpdGVyaWEuc2F2ZVByZXNldDtcbiAgICB0aGlzLnJlZnJlc2hGaWx0ZXJNYXAoKTtcbiAgfVxuXG5cbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgZG9uZUNyaXRlcmlhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tZXJGaWx0ZXJDcml0ZXJpYT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXN0b21lclNlcnZpY2U6IEN1c3RvbWVyU2VydmljZSwgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSkge1xuXG4gIH1cblxuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jdXN0b21lclR5cGUgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX1R5cGUnKTtcbiAgICB0aGlzLmN1c3RvbWVyRGF0YVNvdXJjZSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfRGF0YVNvdXJjZScpO1xuICAgIHRoaXMucG9zc2liaWxpdHkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX1Bvc3NpYmlsaXR5Jyk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfQ2hpbGRyZW4nKTtcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfU291cmNlJyk7XG4gICAgdGhpcy5mYW1pbGlhcml0eSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfRmFtaWxpYXJpdHknKTtcbiAgICB0aGlzLnJlY2VudFN0YXR1cyA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfUmVjZW50U3RhdHVzJyk7XG4gICAgdGhpcy5hZ2UgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0FnZScpO1xuICAgIHRoaXMuZ2VuZGVyID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9HZW5kZXInKTtcbiAgICB0aGlzLmluY29tZSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfSW5jb21lJyk7XG4gICAgdGhpcy5tYXJyaWFnZSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfTWFycmlhZ2UnKTtcbiAgICB0aGlzLm1hbnBhID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9TdGF0dXMnKTtcbiAgICB0aGlzLmNvbnRhY3RGcmVxdWVuY3kgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0NvbnRhY3RGcmVxdWFuY3knKTtcbiAgICB0aGlzLmJpcnRoZGF5ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9CaXJ0aGRheScpO1xuICAgIHRoaXMuY29tcGxldGVuZXNzID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9Db21wbGV0ZW5lc3MnKTtcblxuICAgIHRoaXMuZmlsdGVyQ29sdW1uTWFwLnNldCgnSXNGb2xsb3cnLCB0aGlzLmN1c3RvbWVyVHlwZSk7XG4gICAgdGhpcy5maWx0ZXJDb2x1bW5NYXAuc2V0KCdEYXRhU291cmNlJywgdGhpcy5jdXN0b21lckRhdGFTb3VyY2UpO1xuICAgIHRoaXMuZmlsdGVyQ29sdW1uTWFwLnNldCgnUG9zc2liaWxpdHknLCB0aGlzLnBvc3NpYmlsaXR5KTtcbiAgICB0aGlzLmZpbHRlckNvbHVtbk1hcC5zZXQoJ1NvdXJjZScsIHRoaXMuc291cmNlKTtcbiAgICB0aGlzLmZpbHRlckNvbHVtbk1hcC5zZXQoJ0ZhbWlsaWFyaXR5JywgdGhpcy5mYW1pbGlhcml0eSk7XG4gICAgdGhpcy5maWx0ZXJDb2x1bW5NYXAuc2V0KCdSZWNlbnRTdGF0dXMnLCB0aGlzLnJlY2VudFN0YXR1cyk7XG4gICAgdGhpcy5maWx0ZXJDb2x1bW5NYXAuc2V0KCdNQU5QQScsIHRoaXMubWFucGEpO1xuICAgIHRoaXMuZmlsdGVyQ29sdW1uTWFwLnNldCgnR2VuZGVyJywgdGhpcy5nZW5kZXIpO1xuICAgIHRoaXMuZmlsdGVyQ29sdW1uTWFwLnNldCgnTWFycmlhZ2UnLCB0aGlzLm1hcnJpYWdlKTtcbiAgICB0aGlzLmZpbHRlckNvbHVtbk1hcC5zZXQoJ0NoaWxkcmVuJywgdGhpcy5jaGlsZHJlbik7XG4gICAgdGhpcy5maWx0ZXJDb2x1bW5NYXAuc2V0KCdJbmNvbWUnLCB0aGlzLmluY29tZSk7XG4gICAgdGhpcy5maWx0ZXJDb2x1bW5NYXAuc2V0KCdBZ2VSYW5nZScsIHRoaXMuYWdlKTtcbiAgICB0aGlzLmZpbHRlckNvbHVtbk1hcC5zZXQoJ0JpcnRoZGF5JywgdGhpcy5iaXJ0aGRheSk7XG4gICAgdGhpcy5maWx0ZXJDb2x1bW5NYXAuc2V0KCdDb250YWN0RnJlcXVhbmN5JywgdGhpcy5jb250YWN0RnJlcXVlbmN5KTtcbiAgICB0aGlzLmZpbHRlckNvbHVtbk1hcC5zZXQoJ0NvbXBsZXRlbmVzcycsIHRoaXMuY29tcGxldGVuZXNzKTtcbiAgICBpZiAodGhpcy5jcml0ZXJpYS5nZXRGaWx0ZXJNYXAoKS5zaXplID09IDApXG4gICAgICB0aGlzLmNsZWFyQ3JpdGVyaWEoKTtcblxuICAgIGlmICh0aGlzLmNsZWFyKSB7XG4gICAgICB0aGlzLmNsZWFyLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xlYXJDcml0ZXJpYSgpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zYXZlKSB7XG4gICAgICB0aGlzLnNhdmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zYXZlQ3JpdGVyaWEoKTtcbiAgICAgIH0pXG4gICAgfVxuXG5cblxuICB9XG5cblxuICBvbkNsaWNrKCkge1xuICAgIC8vIGNvbnNvbGUuZGVidWcodGhpcy5pc0FzUHJlc2VudCk7XG4gICAgdGhpcy5pc0FzUHJlc2VudCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZXRGaWx0ZXIoYXJyYXk6IEFycmF5PFByb2ZpbGVDb2RlPikge1xuICAgIGZvciAobGV0IHByb2ZpbGVDb2RlIG9mIGFycmF5KSB7XG4gICAgICBwcm9maWxlQ29kZS5pc0NoZWNrID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRGVmYXVsdENoZWNrZWQoZGVmYXVsdEFycmF5OiBBcnJheTxzdHJpbmc+LCBhcnJheTogQXJyYXk8UHJvZmlsZUNvZGU+KSB7XG4gICAgZm9yIChsZXQgcHJvZmlsZUNvZGUgb2YgYXJyYXkpIHtcbiAgICAgIGlmIChkZWZhdWx0QXJyYXkuaW5jbHVkZXMocHJvZmlsZUNvZGUuZ2V0Q29kZSgpKSkge1xuICAgICAgICBwcm9maWxlQ29kZS5pc0NoZWNrID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FkZENyaXRlcmlhKGNyaXRlcmlhQ29sdW1uOiBzdHJpbmcsIGFycmF5OiBBcnJheTxQcm9maWxlQ29kZT4sIGNyaXRlcmlhOiBDdXN0b21lckZpbHRlckNyaXRlcmlhKSB7XG4gICAgZm9yIChsZXQgcHJvZmlsZUNvZGUgb2YgYXJyYXkpIHtcbiAgICAgIGlmIChwcm9maWxlQ29kZS5pc0NoZWNrKSB7XG4gICAgICAgIGNyaXRlcmlhLmFkZENyaXRlcmlhKGNyaXRlcmlhQ29sdW1uLCBwcm9maWxlQ29kZS5nZXRDb2RlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FkZEZpbHRlck1hcChjb2x1bW46IHN0cmluZywgdmFsdWU6IEFycmF5PHN0cmluZz4pIHtcbiAgICBpZiAodGhpcy5maWx0ZXJDb2x1bW5NYXAuaGFzKGNvbHVtbikpIHtcbiAgICAgIHRoaXMuZmlsdGVyQ29sdW1uTWFwLmdldChjb2x1bW4pLmZvckVhY2goKGNvZGU6IFByb2ZpbGVDb2RlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhjb2RlLmdldENvZGUoKSkpIHtcbiAgICAgICAgICBjb2RlLmlzQ2hlY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJDcml0ZXJpYSgpIHtcbiAgICB0aGlzLl9yZXNldEZpbHRlcih0aGlzLmN1c3RvbWVyVHlwZSk7XG4gICAgdGhpcy5fcmVzZXRGaWx0ZXIodGhpcy5jdXN0b21lckRhdGFTb3VyY2UpO1xuICAgIHRoaXMuX3Jlc2V0RmlsdGVyKHRoaXMuYmlydGhkYXkpO1xuICAgIHRoaXMuX3Jlc2V0RmlsdGVyKHRoaXMuYWdlKTtcbiAgICB0aGlzLl9yZXNldEZpbHRlcih0aGlzLmdlbmRlcik7XG4gICAgdGhpcy5fcmVzZXRGaWx0ZXIodGhpcy5pbmNvbWUpO1xuICAgIHRoaXMuX3Jlc2V0RmlsdGVyKHRoaXMuc291cmNlKTtcbiAgICB0aGlzLl9yZXNldEZpbHRlcih0aGlzLm1hcnJpYWdlKTtcbiAgICB0aGlzLl9yZXNldEZpbHRlcih0aGlzLmNoaWxkcmVuKTtcbiAgICB0aGlzLl9yZXNldEZpbHRlcih0aGlzLmZhbWlsaWFyaXR5KTtcbiAgICB0aGlzLl9yZXNldEZpbHRlcih0aGlzLnJlY2VudFN0YXR1cyk7XG4gICAgdGhpcy5fcmVzZXRGaWx0ZXIodGhpcy5tYW5wYSk7XG4gICAgdGhpcy5fcmVzZXRGaWx0ZXIodGhpcy5jb250YWN0RnJlcXVlbmN5KTtcbiAgICB0aGlzLl9yZXNldEZpbHRlcih0aGlzLnBvc3NpYmlsaXR5KTtcbiAgICB0aGlzLl9yZXNldEZpbHRlcih0aGlzLmNvbXBsZXRlbmVzcyk7XG5cbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEZpbHRlck1hcCgpIHtcbiAgICAvLyB0aGlzLmNsZWFyQ3JpdGVyaWEoKTtcbiAgICBpZiAodGhpcy5jcml0ZXJpYS5oYXNDcml0ZXJpYSgpICYmIHRoaXMuY3JpdGVyaWEuZ2V0RmlsdGVyTWFwKCkuc2l6ZSA+IDApIHtcbiAgICAgIHRoaXMuY3JpdGVyaWEuZ2V0RmlsdGVyTWFwKCkuZm9yRWFjaCgodmFsdWU6IEFycmF5PHN0cmluZz4sIGNvbHVtbjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuX2FkZEZpbHRlck1hcChjb2x1bW4sIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2F2ZUNyaXRlcmlhKCkge1xuICAgIGxldCBjcml0ZXJpYSA9IG5ldyBDdXN0b21lckZpbHRlckNyaXRlcmlhKCk7XG5cbiAgICBjb25zb2xlLmRlYnVnKCdmaWx0ZXJDb2x1bW5NYXAnLCB0aGlzLmZpbHRlckNvbHVtbk1hcCk7XG4gICAgdGhpcy5maWx0ZXJDb2x1bW5NYXAuZm9yRWFjaCgodmFsdWU6IEFycmF5PFByb2ZpbGVDb2RlPiwgY29sdW1uOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuX2FkZENyaXRlcmlhKGNvbHVtbiwgdmFsdWUsIGNyaXRlcmlhKTtcbiAgICB9KTtcblxuICAgIGNyaXRlcmlhLnNhdmVQcmVzZXQgPSB0aGlzLmlzQXNQcmVzZW50O1xuXG4gICAgdGhpcy5kb25lQ3JpdGVyaWEuZW1pdChjcml0ZXJpYSk7XG4gIH1cbn1cbiJdfQ==