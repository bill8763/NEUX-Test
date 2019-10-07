/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Output, ViewChild, EventEmitter, Optional, Inject, ChangeDetectorRef } from '@angular/core';
import { MetaService, AppRouter, FormMetaComponent, ProfileCodeService, DefaultMetaParser, APIExecutor, TranslateService } from '@allianzSND/core';
import { Language, StringUtils } from '@allianzSND/core';
import { CustomerUtils } from '../../utils/customer-utils';
import { CUSTOMER_STATE, CustomerStoreService } from '../../service/customerStore/customerStore-service';
import { customerEditMetaControllerToken, addProgressPointToken } from '../../injectionToken/injection-token';
import { DefaultCustomerEditMetaController } from './DefaultCustomerEditMetaController';
export class CustomerEditComponent extends FormMetaComponent {
    /**
     * @param {?} customerUtils
     * @param {?} changeDetector
     * @param {?} elementRef
     * @param {?} router
     * @param {?} translateService
     * @param {?} defaultMetaController
     * @param {?} profileCodeService
     * @param {?} metaParser
     * @param {?} metaExecutor
     * @param {?} customMetaController
     * @param {?} customerStoreService
     * @param {?} metaService
     * @param {?} addProgressPoint
     */
    constructor(customerUtils, changeDetector, elementRef, router, translateService, defaultMetaController, profileCodeService, metaParser, metaExecutor, customMetaController, customerStoreService, metaService, addProgressPoint) {
        super(metaService, profileCodeService, metaParser, metaExecutor);
        this.customerUtils = customerUtils;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.router = router;
        this.translateService = translateService;
        this.customerStoreService = customerStoreService;
        this.metaService = metaService;
        this.addProgressPoint = addProgressPoint;
        this.sendContentHeight = new EventEmitter();
        this.customerDetailSubscribe = null;
        this.pageTitle = 'Add_Profile';
        this.today = new Date();
        this.language = new Language();
        this.disableAge = false;
        this.isDisplaySavePopup = false;
        this.isShow = false;
        this.edit_type = "add";
        this.customerID = '';
        this._metaController = customMetaController ? customMetaController : defaultMetaController;
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
    get rowConfig() {
        return this.metaConfig.Rows;
    }
    /**
     * @return {?}
     */
    get columnConfig() {
        return this.metaConfig.Columns;
    }
    /**
     * @return {?}
     */
    get footerConfig() {
        return this.metaConfig.Footer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.customerDetailSubscribe = this.customerStoreService.getCustomerDetailID().subscribe((/**
         * @param {?} customerID
         * @return {?}
         */
        (customerID) => {
            console.log("customerID:", customerID);
            this.customerID = customerID;
            super.ngOnInit();
            if (StringUtils.isEmpty(customerID)) {
                //ADD
                this.edit_type = "add";
            }
            else {
                //Edit
                this.edit_type = "edit";
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.customerDetailSubscribe)
            this.customerDetailSubscribe.unsubscribe();
    }
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    btnClick(type, id) {
        console.log("BTN CLICK!", type, id);
        if (type === 'submit') {
            if (this.validationResult.isTrue()) {
                this.customerStoreService.setCurrentCustomerDetail(this._data);
                /** @type {?} */
                let state = this.edit_type == "add" ? CUSTOMER_STATE.ADD_SAVED : CUSTOMER_STATE.EDIT_SAVED;
                this.customerStoreService.setState(state);
                //offline add progress point
                console.log("customer addProgressPoint", this.addProgressPoint);
                if (this.addProgressPoint && this.edit_type == "add") {
                    this.addProgressPoint.addCustomerPoint(1);
                }
                this.router.navigate("Customers");
            }
        }
        this._metaController.btnClick(type, id, this._data);
    }
    /**
     * @return {?}
     */
    getMetaID() {
        return 'customerEdit';
    }
    /**
     * @return {?}
     */
    getMetaParams() {
        return {
            id: this.customerID
        };
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @return {?}
     */
    onValueChange(column, value, groupId, index) {
        //Trigger other column values
        if (column === 'Birthday') {
            this.countAgeRange(value);
        }
        this._metaController.onValueChange(column, value, groupId, index, this._data, this.validationResult);
    }
    /**
     * @return {?}
     */
    onDataUpdated() {
        super.onDataUpdated();
        console.log("onDataUpdated!");
        console.log("data:", this._data);
        console.log("stringify:", JSON.stringify(this._data));
        if (this.edit_type === 'add') {
            this.pageTitle = this.translateService.translate(this.language.addProfile);
            this.disableAge = false;
        }
        else if (this.edit_type === 'edit') {
            this.pageTitle = this.convertNameToShow(this._data.FirstName, this._data.LastName);
            this.disableAge = StringUtils.isNotEmpty(this._data.Birthday);
            // this.Data.AgeRange = this.disableAge ? this.Data.AgeRange : undefined;
        }
        this.isShow = true;
        this._metaController.onDataUpdated(this._data);
    }
    /**
     * @return {?}
     */
    onValidateAll() {
        /** @type {?} */
        let completeness = this.customerUtils.countCompleteness(this._data);
        this._data.Completeness = Math.round(completeness * 100) / 100;
        console.log("Calculate Completeness:", this._data.Completeness);
        // if (!this.validationResult.isTrue()) {
        //   //If basic validation has error.
        //   setTimeout(() => {
        //     this.scrollToError();
        //   }, 200);
        //   return false;
        // }
        // else {
        //   //Do custom validation.
        //   let result = true;
        //   result = result && this._metaController.onValidateAll(this._data, this.validationResult);
        //   return result;
        // }
        /** @type {?} */
        let result = this._metaController.onValidateAll(this._data, this.validationResult) && this.validationResult.isTrue();
        if (!result) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.scrollToError();
            }), 200);
        }
        return result;
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
     * @private
     * @param {?} birthday
     * @return {?}
     */
    countAgeRange(birthday) {
        if (StringUtils.isEmpty(birthday)) {
            this._data.AgeRange = undefined;
            this.disableAge = false;
        }
        else {
            /** @type {?} */
            let age = this.customerUtils.countAge(birthday);
            /** @type {?} */
            let ageRange = this.customerUtils.countAgeRange(age);
            console.debug('ageRange', ageRange);
            if (ageRange != undefined) {
                this._data.AgeRange = ageRange;
                this.disableAge = true;
            }
        }
        console.log("this.data in countAgeRange:", this._data);
        this.changeDetector.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    scrollToError() {
        console.log('scrollToError');
        /** @type {?} */
        let errorBlock = this.elementRef.nativeElement.querySelector('.error-msg');
        /** @type {?} */
        let scrollContent = this.elementRef.nativeElement.querySelector('.form-scroll-content');
        console.log('scroll error:', scrollContent, 'errorBlock', errorBlock);
        if (errorBlock && scrollContent) {
            /** @type {?} */
            let move = errorBlock.offsetTop;
            // let move = 50;
            console.log('scrollToError errorBlock.offsetTop', errorBlock.offsetTop, 'move', move);
            scrollContent.scrollTo({ top: move, behavior: "smooth" });
        }
    }
    /**
     * @private
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    convertNameToShow(firstName, lastName) {
        return this.customerUtils.convertNameToShow(firstName, lastName);
    }
}
CustomerEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-edit',
                template: "<app-ui-inner-page *ngIf=\"isShow\" [title]=\"[pageTitle]\" [contentHeight]=\"this.contentHeight\">\n  <div main>\n    <div #inpageMain class=\"layout-block\">\n      <div class=\"layout-style-single\">\n        <div class=\"form-all page-cust-info\" action=\"\">\n          <div class=\"profile-img-block img-block\" [ngClass]=\"data.DataSource == 'OPUS' ? '': ' active'\">\n            <img class=\"normal-img\" src=\"assets/img/img-customer-profile.svg\">\n            <img class=\"active-img\" src=\"assets/img/img-cust-profile-active.svg\">\n          </div>\n          <app-ui-form-layout-advanced class=\"customer-edit-block\">\n            <ng-container *ngFor=\"let rowList of rowConfig\">\n              <app-ui-data-group>\n                <ng-container textType=\"dataContent\">\n                  <app-ui-form-layout-row>\n                    <app-ui-form-layout-col *ngFor=\"let col of rowList\" [colPC]=\"col.grid.pc\" [colNB]=\"col.grid.nb\"\n                      [colPad]=\"col.grid.pad\" [colMobile]=\"col.grid.mobile\"\n                      [isGroupCol]=\"col.type=='Group' ? true : false\">\n                      <ng-container *ngIf=\"col.type=='Input'\">\n                        <app-ui-form-input [inputTitle]=\"col.name |translate\" [name]=\"col.name |translate\"\n                          [isError]=\"validationResult.isError(col.id)\" [(nxValue)]=\"data[col.id]\" [isDisable]=\"col.id=='LastName' && data.DataSource=='OPUS'\"\n                          (nxValueChange)=\"onChange(col.id,$event)\">\n                        </app-ui-form-input>\n                        <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg(col.id)\">\n                          {{validationResult.getErrorMsg(col.id) |translate }}</app-ui-form-error-msg>\n                      </ng-container>\n                      <ng-container *ngIf=\"col.type=='Select'\">\n                        <app-ui-form-select [selectTitle]=\"col.name |translate\" [selectOption]=\"data[col.id+'Option']\"\n                          [isDisable]=\"(col.id==='AgeRange'&&disableAge) || col.readonly || (col.id=='Gender' && data.DataSource=='OPUS' )\" [(nxValue)]=\"data[col.id]\"\n                          (nxValueChange)=\"onChange(col.id,$event)\" [placeholder]=\"col.placeholder | translate\"\n                          [isShowTitle]=\"col.showTitle\" [isShowDefaultOption]=\"col.showDefaultOption\">\n                        </app-ui-form-select>\n                        \n                        <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg(col.id)\">\n                          {{validationResult.getErrorMsg(col.id) |translate }}</app-ui-form-error-msg>\n                      </ng-container>\n                      <ng-container *ngIf=\"col.type=='Radio'\">\n                        <app-ui-form-title-sm>{{col.name |translate}}</app-ui-form-title-sm>\n                        <div class=\"tag-block\">\n                          <app-ui-form-radio-group [(nxValue)]=\"data[col.id]\" (nxValueChange)=\"onChange(col.id,$event)\">\n                            <app-ui-form-radio-tag *ngFor=\"let option of data[col.id+'Option']\"\n                              [colorCode]=\"option.arguments.color\" [checked]=\"data[col.id] === option.id \"\n                              class=\"{{option.name}} wd-max\" [value]=\"option.id\">\n                              {{option.name}}</app-ui-form-radio-tag>\n                          </app-ui-form-radio-group>\n                        </div>\n                      </ng-container>\n                      <ng-container *ngIf=\"col.type=='Date'\">\n                        <app-ui-form-date [title]=\"col.name |translate\" [(nxValue)]=\"data[col.id]\" [max]=\"col.name==='Birthday'? today :null\" [isDisable]=\"col.name=='Birthday' && data.DataSource == 'OPUS'\"\n                          (nxValueChange)=\"onChange(col.id,$event)\"></app-ui-form-date>\n                        <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg(col.id) == 'date'\">\n                          {{validationResult.getErrorMsg(col.id) |translate }}</app-ui-form-error-msg>\n                      </ng-container>\n                      <ng-container *ngIf=\"col.type=='Group'\">\n                        <app-ui-data-group class=\"form-group-block\" [groupName]=\"col.name |translate\" [isShowPreData]=\"true\"\n                          [imgType]=\"col.icon && col.icon.length>0\" [imgIconSrc]=\"col.icon\">\n                          <ng-container textType=\"dataContent\">\n                            <ng-container *ngIf=\"data[col.id].length != 0\">\n                              <app-ui-form-layout-row *ngFor=\"let item of data[col.id]; index as i ; last as isLast\">\n                                <ng-container *ngFor=\"let groupCol of col.groupColumns; last as groupLast\">\n                                  <app-ui-form-layout-col [colPC]=\"groupCol.grid.pc\" [colNB]=\"groupCol.grid.nb\"\n                                    [colPad]=\"groupCol.grid.pad\" [colMobile]=\"groupCol.grid.mobile\"\n                                    [hasRemove]=\"col.canAdd && groupLast\" (remove)=\"onGroupRemove(col.id,i)\">\n                                    <ng-container *ngIf=\"groupCol.type=='Select'\">\n                                      <app-ui-form-select [selectTitle]=\"groupCol.name |translate\"\n                                        [selectOption]=\"data[groupCol.id+'Option']\"\n                                        [(nxValue)]=\"data[col.id][i][groupCol.id]\"\n                                        (nxValueChange)=\"onChange(groupCol.id,$event,col.id,i)\" [placeholder]=\"groupCol.placeholder | translate\"\n                                        [isShowTitle]=\"groupCol.showTitle\"\n                                        [isShowDefaultOption]=\"groupCol.showDefaultOption\">\n                                      </app-ui-form-select>\n                                      <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg(groupCol.id+i)\">\n                                        {{validationResult.getErrorMsg(groupCol.id+i) |translate }}\n                                      </app-ui-form-error-msg>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"groupCol.type=='Input'\">\n                                      <app-ui-form-input [inputTitle]=\"groupCol.name |translate\"\n                                        [type]=\"groupCol.id==='Tel'?'tel':'text'\" [name]=\"groupCol.name |translate\"\n                                        [isError]=\"validationResult.isError(groupCol.id+i)\" [maxLength]=\"groupCol.maxLength\"\n                                        [(nxValue)]=\"data[col.id][i][groupCol.id]\"\n                                        (nxValueChange)=\"onChange(groupCol.id,$event,col.id,i)\">\n                                      </app-ui-form-input>\n                                      <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg(groupCol.id+i)\">\n                                        {{validationResult.getErrorMsg(groupCol.id+i) |translate }}\n                                      </app-ui-form-error-msg>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"groupCol.type=='Date'\">\n                                      <app-ui-form-date [title]=\"groupCol.name |translate\"\n                                        [(nxValue)]=\"data[col.id][i][groupCol.id]\"\n                                        (nxValueChange)=\"onChange(groupCol.id,$event,col.id,i)\"></app-ui-form-date>\n                                      <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg(groupCol.id+i)\">\n                                        {{validationResult.getErrorMsg(groupCol.id+i) |translate }}\n                                      </app-ui-form-error-msg>\n                                    </ng-container>\n                                  </app-ui-form-layout-col>\n                                  <div *ngIf=\"!groupCol.inline\" class=\"break-line\"></div>\n                                </ng-container>\n                                <ng-container *ngIf=\"data[col.id].length<col.maxNumber && col.canAdd && isLast\">\n                                  <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\"\n                                    [translateText]=\"language.customerAdd | translate\" [hasAdd]=\"true\"\n                                    (add)=\"onGroupAdd(col.id)\" [id]=\"col.id\">\n                                  </app-ui-form-layout-col>\n                                </ng-container>\n                              </app-ui-form-layout-row>\n                            </ng-container>\n                            <app-ui-form-layout-row class=\"first-add-block\"\n                              *ngIf=\"data[col.id].length === 0 && col.canAdd\">\n                              <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\"\n                                [translateText]=\"language.customerAdd | translate\" [hasAdd]=\"true\" (add)=\"onGroupAdd(col.id)\" [id]=\"col.id\">\n                              </app-ui-form-layout-col>\n                            </app-ui-form-layout-row>\n                          </ng-container>\n                        </app-ui-data-group>\n                      </ng-container>\n                    </app-ui-form-layout-col>\n                  </app-ui-form-layout-row>\n                </ng-container>\n              </app-ui-data-group>\n            </ng-container>\n          </app-ui-form-layout-advanced>\n        </div>\n      </div>\n\n      <!-- btn -->\n      <app-ui-btn-layout>\n        <ng-container *ngFor=\"let button of footerConfig\">\n          <app-ui-btn *ngIf=\"button.type==='submit'||button.type==='button'\" [name]=\"button.id\"\n            [id]=\"button.id\" Action [action]=\"'customerEdit_'+button.id\" (actionClick)=\"onBtnClick(button.type,button.id)\" [isDisable]=\"data[button.id+'Btn'].disable\">\n            <ng-container TextType=\"cust\">{{button.name |translate }}</ng-container>\n          </app-ui-btn>\n        </ng-container>\n      </app-ui-btn-layout>\n      <!-- end of btn -->\n\n\n\n    </div>\n\n  </div>\n</app-ui-inner-page>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.profile-img-block img{border-radius:50%;display:inline-block;text-align:center;margin:0 auto;width:60px}.profile-img-block .active-img,.profile-img-block.active .normal-img{display:none}.profile-img-block.active .active-img{display:block}.layout-block{padding-top:10px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);background-color:#fff}.layout-block .layout-style-single{width:100%;margin:0 auto;text-align:left;max-width:418px}@media (min-width:1200px){.layout-block .layout-style-single{max-width:60%}}@media (max-width:767px){.layout-block .layout-style-single{box-sizing:border-box;padding-left:20px;padding-right:20px}.customer-edit-block ::ng-deep .first-add-block [class*=gas-col-]{margin-bottom:0}.customer-edit-block ::ng-deep .first-add-block.gas-row-block{top:-40px;margin-top:0;margin-bottom:15px;position:relative}.customer-edit-block ::ng-deep .first-add-block.gas-row-block .col-content.style-has-add{position:absolute;top:0;left:calc(1.25rem + 10px);max-width:150px}}@media (max-width:374px){.layout-block .layout-style-single{padding-left:10px;padding-right:10px}}.profile-img-block{text-align:center;padding-bottom:10px;padding-top:20px}@media screen and (min-width:1025px){.profile-img-block img{width:6vw}}.tag-block{display:flex}.break-line{display:block;width:100%}.page-cust-info ::ng-deep app-ui-form-radio-tag{width:30%}.page-cust-info ::ng-deep app-ui-form-radio-tag .tag-block .tag-content{font-weight:700}.page-cust-info ::ng-deep app-ui-form-radio-tag+app-ui-form-radio-tag{margin-left:5%}:host ::ng-deep app-ui-btn-layout{position:relative;bottom:-24px}:host ::ng-deep app-ui-btn-layout .btn-block{margin:0}.customer-edit-block ::ng-deep .form-group-block{margin-top:-15px}.customer-edit-block ::ng-deep .first-add-block .col-content.style-has-add{margin-top:0}.customer-edit-block ::ng-deep [class*=gas-col-].style-col-group{margin-bottom:0}"]
            }] }
];
CustomerEditComponent.ctorParameters = () => [
    { type: CustomerUtils },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: AppRouter },
    { type: TranslateService },
    { type: DefaultCustomerEditMetaController },
    { type: ProfileCodeService },
    { type: DefaultMetaParser },
    { type: APIExecutor },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerEditMetaControllerToken,] }] },
    { type: CustomerStoreService },
    { type: MetaService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [addProgressPointToken,] }] }
];
CustomerEditComponent.propDecorators = {
    sendContentHeight: [{ type: Output }],
    content: [{ type: ViewChild, args: ['inpageMain',] }]
};
if (false) {
    /** @type {?} */
    CustomerEditComponent.prototype.sendContentHeight;
    /** @type {?} */
    CustomerEditComponent.prototype.contentHeight;
    /** @type {?} */
    CustomerEditComponent.prototype.content;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype.customerDetailSubscribe;
    /** @type {?} */
    CustomerEditComponent.prototype.customerDetail;
    /** @type {?} */
    CustomerEditComponent.prototype.pageTitle;
    /** @type {?} */
    CustomerEditComponent.prototype.today;
    /** @type {?} */
    CustomerEditComponent.prototype.language;
    /** @type {?} */
    CustomerEditComponent.prototype.disableAge;
    /** @type {?} */
    CustomerEditComponent.prototype.isDisplaySavePopup;
    /** @type {?} */
    CustomerEditComponent.prototype.isShow;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype.edit_type;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype.customerID;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype._metaController;
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
    CustomerEditComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype.customerStoreService;
    /**
     * @type {?}
     * @protected
     */
    CustomerEditComponent.prototype.metaService;
    /**
     * @type {?}
     * @private
     */
    CustomerEditComponent.prototype.addProgressPoint;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21lci9jb21wb25lbnRzL2N1c3RvbWVyLWVkaXQvY3VzdG9tZXItZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlKLE9BQU8sRUFBRSxXQUFXLEVBQTJDLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQWMsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4TSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekcsT0FBTyxFQUFFLCtCQUErQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFReEYsTUFBTSw0QkFBNkIsU0FBUSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7SUF5QzFELFlBQ1UsYUFBNEIsRUFDNUIsY0FBaUMsRUFDakMsVUFBc0IsRUFDdEIsTUFBaUIsRUFDakIsZ0JBQWtDLEVBQzFDLHFCQUF3RCxFQUN4RCxrQkFBc0MsRUFDdEMsVUFBNkIsRUFDN0IsWUFBeUIsRUFDNEIsb0JBQW9DLEVBQ2pGLG9CQUEwQyxFQUN4QyxXQUF3QixFQUNp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LFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7OztZQXhORixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsZ3JVQUE2Qzs7YUFFOUM7OztZQVZRLGFBQWE7WUFIb0YsaUJBQWlCO1lBQS9GLFVBQVU7WUFDeUIsU0FBUztZQUFxRixnQkFBZ0I7WUFLcEssaUNBQWlDO1lBTG1ELGtCQUFrQjtZQUFFLGlCQUFpQjtZQUFFLFdBQVc7NENBZ0UxSSxRQUFRLFlBQUksTUFBTSxTQUFDLCtCQUErQjtZQTdEOUIsb0JBQW9CO1lBSHBDLFdBQVc7NENBbUVmLFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCOzs7Z0NBcEQxQyxNQUFNO3NCQUdOLFNBQVMsU0FBQyxZQUFZOzs7O0lBSHZCLGtEQUFpRDs7SUFDakQsOENBQXFCOztJQUVyQix3Q0FBNkM7Ozs7O0lBRzdDLHdEQUF1Qzs7SUFDdkMsK0NBQXNCOztJQUN0QiwwQ0FBaUM7O0lBQ2pDLHNDQUEwQjs7SUFFMUIseUNBQTJDOztJQUUzQywyQ0FBbUM7O0lBQ25DLG1EQUEyQzs7SUFDM0MsdUNBQStCOzs7OztJQWtCL0IsMENBQTBCOzs7OztJQUMxQiwyQ0FBd0I7Ozs7O0lBQ3hCLGdEQUF3Qzs7Ozs7SUFLdEMsOENBQW9DOzs7OztJQUNwQywrQ0FBeUM7Ozs7O0lBQ3pDLDJDQUE4Qjs7Ozs7SUFDOUIsdUNBQXlCOzs7OztJQUN6QixpREFBMEM7Ozs7O0lBTTFDLHFEQUFrRDs7Ozs7SUFDbEQsNENBQWtDOzs7OztJQUNsQyxpREFBcUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgT3V0cHV0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEV2ZW50RW1pdHRlciwgT3B0aW9uYWwsIEluamVjdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWV0YVNlcnZpY2UsIHNob3dSdWxlVG9rZW4sIHNob3dSdWxlLCBNZXRhQ29udHJvbGxlciwgQXBwUm91dGVyLCBGb3JtTWV0YUNvbXBvbmVudCwgUHJvZmlsZUNvZGVTZXJ2aWNlLCBEZWZhdWx0TWV0YVBhcnNlciwgQVBJRXhlY3V0b3IsIE1ldGFDb2x1bW4sIFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlLCBTdHJpbmdVdGlscyB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2N1c3RvbWVyLXV0aWxzJztcbmltcG9ydCB7IENVU1RPTUVSX1NUQVRFLCBDdXN0b21lclN0b3JlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvY3VzdG9tZXJTdG9yZS9jdXN0b21lclN0b3JlLXNlcnZpY2UnO1xuaW1wb3J0IHsgY3VzdG9tZXJFZGl0TWV0YUNvbnRyb2xsZXJUb2tlbiwgYWRkUHJvZ3Jlc3NQb2ludFRva2VuIH0gZnJvbSAnLi4vLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IERlZmF1bHRDdXN0b21lckVkaXRNZXRhQ29udHJvbGxlciB9IGZyb20gJy4vRGVmYXVsdEN1c3RvbWVyRWRpdE1ldGFDb250cm9sbGVyJztcbmltcG9ydCB7IEFkZFByb2dyZXNzUG9pbnQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvQWRkUHJvZ3Jlc3NQb2ludCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lci1lZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLWVkaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1lZGl0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJFZGl0Q29tcG9uZW50IGV4dGVuZHMgRm9ybU1ldGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgQE91dHB1dCgpIHNlbmRDb250ZW50SGVpZ2h0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgY29udGVudEhlaWdodDtcblxuICBAVmlld0NoaWxkKCdpbnBhZ2VNYWluJykgY29udGVudDogRWxlbWVudFJlZjtcblxuXG4gIHByaXZhdGUgY3VzdG9tZXJEZXRhaWxTdWJzY3JpYmUgPSBudWxsO1xuICBwdWJsaWMgY3VzdG9tZXJEZXRhaWw7XG4gIHB1YmxpYyBwYWdlVGl0bGUgPSAnQWRkX1Byb2ZpbGUnO1xuICBwdWJsaWMgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcblxuICBwdWJsaWMgZGlzYWJsZUFnZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNEaXNwbGF5U2F2ZVBvcHVwOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc1Nob3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCByb3dDb25maWcoKTogQXJyYXk8QXJyYXk8TWV0YUNvbHVtbj4+IHtcbiAgICByZXR1cm4gdGhpcy5tZXRhQ29uZmlnLlJvd3M7XG4gIH1cbiAgZ2V0IGNvbHVtbkNvbmZpZygpOiBBcnJheTxNZXRhQ29sdW1uPiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zO1xuICB9XG5cbiAgZ2V0IGZvb3RlckNvbmZpZygpOiBBcnJheTxNZXRhQ29sdW1uPiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YUNvbmZpZy5Gb290ZXI7XG4gIH1cblxuXG4gIHByaXZhdGUgZWRpdF90eXBlID0gXCJhZGRcIjtcbiAgcHJpdmF0ZSBjdXN0b21lcklEID0gJyc7XG4gIHByaXZhdGUgX21ldGFDb250cm9sbGVyOiBNZXRhQ29udHJvbGxlcjtcblxuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjdXN0b21lclV0aWxzOiBDdXN0b21lclV0aWxzLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogQXBwUm91dGVyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBkZWZhdWx0TWV0YUNvbnRyb2xsZXI6IERlZmF1bHRDdXN0b21lckVkaXRNZXRhQ29udHJvbGxlcixcbiAgICBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICBtZXRhUGFyc2VyOiBEZWZhdWx0TWV0YVBhcnNlcixcbiAgICBtZXRhRXhlY3V0b3I6IEFQSUV4ZWN1dG9yLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoY3VzdG9tZXJFZGl0TWV0YUNvbnRyb2xsZXJUb2tlbikgY3VzdG9tTWV0YUNvbnRyb2xsZXI6IE1ldGFDb250cm9sbGVyLFxuICAgIHByaXZhdGUgY3VzdG9tZXJTdG9yZVNlcnZpY2U6IEN1c3RvbWVyU3RvcmVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBtZXRhU2VydmljZTogTWV0YVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChhZGRQcm9ncmVzc1BvaW50VG9rZW4pIHByaXZhdGUgYWRkUHJvZ3Jlc3NQb2ludDogQWRkUHJvZ3Jlc3NQb2ludFxuICApIHtcbiAgICBzdXBlcihtZXRhU2VydmljZSwgcHJvZmlsZUNvZGVTZXJ2aWNlLCBtZXRhUGFyc2VyLCBtZXRhRXhlY3V0b3IpO1xuICAgIHRoaXMuX21ldGFDb250cm9sbGVyID0gY3VzdG9tTWV0YUNvbnRyb2xsZXIgPyBjdXN0b21NZXRhQ29udHJvbGxlciA6IGRlZmF1bHRNZXRhQ29udHJvbGxlcjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3VzdG9tZXJEZXRhaWxTdWJzY3JpYmUgPSB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLmdldEN1c3RvbWVyRGV0YWlsSUQoKS5zdWJzY3JpYmUoKGN1c3RvbWVySUQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJjdXN0b21lcklEOlwiLCBjdXN0b21lcklEKTtcbiAgICAgIHRoaXMuY3VzdG9tZXJJRCA9IGN1c3RvbWVySUQ7XG4gICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoY3VzdG9tZXJJRCkpIHtcbiAgICAgICAgLy9BRERcbiAgICAgICAgdGhpcy5lZGl0X3R5cGUgPSBcImFkZFwiO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vRWRpdFxuICAgICAgICB0aGlzLmVkaXRfdHlwZSA9IFwiZWRpdFwiO1xuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmN1c3RvbWVyRGV0YWlsU3Vic2NyaWJlKVxuICAgICAgdGhpcy5jdXN0b21lckRldGFpbFN1YnNjcmliZS51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGJ0bkNsaWNrKHR5cGU6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKFwiQlROIENMSUNLIVwiLCB0eXBlLCBpZCk7XG4gICAgaWYgKHR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICBpZiAodGhpcy52YWxpZGF0aW9uUmVzdWx0LmlzVHJ1ZSgpKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2Uuc2V0Q3VycmVudEN1c3RvbWVyRGV0YWlsKHRoaXMuX2RhdGEpO1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmVkaXRfdHlwZSA9PSBcImFkZFwiID8gQ1VTVE9NRVJfU1RBVEUuQUREX1NBVkVEIDogQ1VTVE9NRVJfU1RBVEUuRURJVF9TQVZFRDtcbiAgICAgICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIC8vb2ZmbGluZSBhZGQgcHJvZ3Jlc3MgcG9pbnRcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXN0b21lciBhZGRQcm9ncmVzc1BvaW50XCIsIHRoaXMuYWRkUHJvZ3Jlc3NQb2ludCk7XG4gICAgICAgIGlmICh0aGlzLmFkZFByb2dyZXNzUG9pbnQgJiYgdGhpcy5lZGl0X3R5cGUgPT0gXCJhZGRcIikge1xuICAgICAgICAgIHRoaXMuYWRkUHJvZ3Jlc3NQb2ludC5hZGRDdXN0b21lclBvaW50KDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiQ3VzdG9tZXJzXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9tZXRhQ29udHJvbGxlci5idG5DbGljayh0eXBlLCBpZCwgdGhpcy5fZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWV0YUlEKCkge1xuICAgIHJldHVybiAnY3VzdG9tZXJFZGl0JztcbiAgfVxuXG4gIHB1YmxpYyBnZXRNZXRhUGFyYW1zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5jdXN0b21lcklEXG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uVmFsdWVDaGFuZ2UoY29sdW1uOiBzdHJpbmcsIHZhbHVlOiBhbnksIGdyb3VwSWQ6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgIC8vVHJpZ2dlciBvdGhlciBjb2x1bW4gdmFsdWVzXG4gICAgaWYgKGNvbHVtbiA9PT0gJ0JpcnRoZGF5Jykge1xuICAgICAgdGhpcy5jb3VudEFnZVJhbmdlKHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5fbWV0YUNvbnRyb2xsZXIub25WYWx1ZUNoYW5nZShjb2x1bW4sIHZhbHVlLCBncm91cElkLCBpbmRleCwgdGhpcy5fZGF0YSwgdGhpcy52YWxpZGF0aW9uUmVzdWx0KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRhdGFVcGRhdGVkKCkge1xuICAgIHN1cGVyLm9uRGF0YVVwZGF0ZWQoKTtcbiAgICBjb25zb2xlLmxvZyhcIm9uRGF0YVVwZGF0ZWQhXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YTpcIiwgdGhpcy5fZGF0YSk7XG4gICAgY29uc29sZS5sb2coXCJzdHJpbmdpZnk6XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuX2RhdGEpKTtcbiAgICBpZiAodGhpcy5lZGl0X3R5cGUgPT09ICdhZGQnKSB7XG4gICAgICB0aGlzLnBhZ2VUaXRsZSA9IHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGUodGhpcy5sYW5ndWFnZS5hZGRQcm9maWxlKTtcbiAgICAgIHRoaXMuZGlzYWJsZUFnZSA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmVkaXRfdHlwZSA9PT0gJ2VkaXQnKSB7XG4gICAgICB0aGlzLnBhZ2VUaXRsZSA9IHRoaXMuY29udmVydE5hbWVUb1Nob3codGhpcy5fZGF0YS5GaXJzdE5hbWUsIHRoaXMuX2RhdGEuTGFzdE5hbWUpO1xuICAgICAgdGhpcy5kaXNhYmxlQWdlID0gU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLl9kYXRhLkJpcnRoZGF5KTtcbiAgICAgIC8vIHRoaXMuRGF0YS5BZ2VSYW5nZSA9IHRoaXMuZGlzYWJsZUFnZSA/IHRoaXMuRGF0YS5BZ2VSYW5nZSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5pc1Nob3cgPSB0cnVlO1xuICAgIHRoaXMuX21ldGFDb250cm9sbGVyLm9uRGF0YVVwZGF0ZWQodGhpcy5fZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgb25WYWxpZGF0ZUFsbCgpOiBib29sZWFuIHtcbiAgICBsZXQgY29tcGxldGVuZXNzID0gdGhpcy5jdXN0b21lclV0aWxzLmNvdW50Q29tcGxldGVuZXNzKHRoaXMuX2RhdGEpO1xuICAgIHRoaXMuX2RhdGEuQ29tcGxldGVuZXNzID0gTWF0aC5yb3VuZChjb21wbGV0ZW5lc3MgKiAxMDApIC8gMTAwO1xuICAgIGNvbnNvbGUubG9nKFwiQ2FsY3VsYXRlIENvbXBsZXRlbmVzczpcIiwgdGhpcy5fZGF0YS5Db21wbGV0ZW5lc3MpO1xuICAgIC8vIGlmICghdGhpcy52YWxpZGF0aW9uUmVzdWx0LmlzVHJ1ZSgpKSB7XG4gICAgLy8gICAvL0lmIGJhc2ljIHZhbGlkYXRpb24gaGFzIGVycm9yLlxuICAgIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsVG9FcnJvcigpO1xuICAgIC8vICAgfSwgMjAwKTtcbiAgICAvLyAgIHJldHVybiBmYWxzZTtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICAvL0RvIGN1c3RvbSB2YWxpZGF0aW9uLlxuICAgIC8vICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgLy8gICByZXN1bHQgPSByZXN1bHQgJiYgdGhpcy5fbWV0YUNvbnRyb2xsZXIub25WYWxpZGF0ZUFsbCh0aGlzLl9kYXRhLCB0aGlzLnZhbGlkYXRpb25SZXN1bHQpO1xuICAgIC8vICAgcmV0dXJuIHJlc3VsdDtcbiAgICAvLyB9XG5cbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5fbWV0YUNvbnRyb2xsZXIub25WYWxpZGF0ZUFsbCh0aGlzLl9kYXRhLCB0aGlzLnZhbGlkYXRpb25SZXN1bHQpICYmIHRoaXMudmFsaWRhdGlvblJlc3VsdC5pc1RydWUoKTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9FcnJvcigpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8v542y5b6X5YWn5a656auYXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvbnRlbnRIZWlnaHQgPSB0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICBjb25zb2xlLmxvZygnZWxlIEhlaWdodDonLCB0aGlzLmNvbnRlbnRIZWlnaHQpXG4gICAgfSwgNjAwKTtcblxuICAgIHRoaXMuc2VuZENvbnRlbnRIZWlnaHQuZW1pdCh0aGlzLmNvbnRlbnRIZWlnaHQpO1xuXG4gIH1cblxuICBwcml2YXRlIGNvdW50QWdlUmFuZ2UoYmlydGhkYXkpIHtcblxuICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGJpcnRoZGF5KSkge1xuICAgICAgdGhpcy5fZGF0YS5BZ2VSYW5nZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZGlzYWJsZUFnZSA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBhZ2UgPSB0aGlzLmN1c3RvbWVyVXRpbHMuY291bnRBZ2UoYmlydGhkYXkpO1xuICAgICAgbGV0IGFnZVJhbmdlID0gdGhpcy5jdXN0b21lclV0aWxzLmNvdW50QWdlUmFuZ2UoYWdlKTtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ2FnZVJhbmdlJywgYWdlUmFuZ2UpO1xuXG4gICAgICBpZiAoYWdlUmFuZ2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2RhdGEuQWdlUmFuZ2UgPSBhZ2VSYW5nZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlQWdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmRhdGEgaW4gY291bnRBZ2VSYW5nZTpcIiwgdGhpcy5fZGF0YSk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbFRvRXJyb3IoKSB7XG4gICAgY29uc29sZS5sb2coJ3Njcm9sbFRvRXJyb3InKTtcbiAgICBsZXQgZXJyb3JCbG9jayA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tc2cnKTtcbiAgICBsZXQgc2Nyb2xsQ29udGVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXNjcm9sbC1jb250ZW50Jyk7XG4gICAgY29uc29sZS5sb2coJ3Njcm9sbCBlcnJvcjonLCBzY3JvbGxDb250ZW50LCAnZXJyb3JCbG9jaycsIGVycm9yQmxvY2spO1xuICAgIGlmIChlcnJvckJsb2NrICYmIHNjcm9sbENvbnRlbnQpIHtcblxuICAgICAgbGV0IG1vdmUgPSBlcnJvckJsb2NrLm9mZnNldFRvcDtcbiAgICAgIC8vIGxldCBtb3ZlID0gNTA7XG4gICAgICBjb25zb2xlLmxvZygnc2Nyb2xsVG9FcnJvciBlcnJvckJsb2NrLm9mZnNldFRvcCcsIGVycm9yQmxvY2sub2Zmc2V0VG9wLCAnbW92ZScsIG1vdmUpXG4gICAgICBzY3JvbGxDb250ZW50LnNjcm9sbFRvKHsgdG9wOiBtb3ZlLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnROYW1lVG9TaG93KGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21lclV0aWxzLmNvbnZlcnROYW1lVG9TaG93KGZpcnN0TmFtZSwgbGFzdE5hbWUpO1xuICB9XG5cbn1cbiJdfQ==