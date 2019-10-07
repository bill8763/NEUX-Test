/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, Optional, Inject, ViewChildren, QueryList } from '@angular/core';
import { DateUtils, StringUtils, Language, MetaService, ProfileCodeService, InputExecutor, DefaultMetaParser } from '@allianzSND/core';
import { showRuleToken, DisplayMetaComponent } from '@allianzSND/core';
import { CustomerUtils } from '../../utils/customer-utils';
import { customerDetailMetaControllerToken } from '../../injectionToken/injection-token';
export class CustomerDetailComponent extends DisplayMetaComponent {
    /**
     * @param {?} dateUtils
     * @param {?} profileCodeService
     * @param {?} changeDetctor
     * @param {?} metaService
     * @param {?} customerUtils
     * @param {?} inputExecutor
     * @param {?} metaParser
     * @param {?} showRule
     * @param {?} customMetaController
     */
    constructor(dateUtils, profileCodeService, changeDetctor, metaService, customerUtils, inputExecutor, metaParser, showRule, customMetaController) {
        super(metaService, profileCodeService, metaParser, inputExecutor);
        this.dateUtils = dateUtils;
        this.profileCodeService = profileCodeService;
        this.changeDetctor = changeDetctor;
        this.metaService = metaService;
        this.customerUtils = customerUtils;
        this.showRule = showRule;
        this.customMetaController = customMetaController;
        this.onEditDetail = new EventEmitter();
        this.onCallPhone = new EventEmitter();
        this.onDeleteDetail = new EventEmitter();
        this.onAddAppointment = new EventEmitter();
        this.followChange = new EventEmitter();
        this.DisplayData = null;
        this.dash = '- -';
        this.language = new Language();
        // empty status
        this.isEmptyAppointment = false;
        this.isEmptyEdit = false;
        this.isEmptyDel = false;
        this.isEmptyDetailInfo = false;
        this.isEmptyGroupDetailInfo = false;
        this.isEmptyContactNote = false;
        this.isCollapseBtnShow = true;
        // card2 extend template is null or not
        this.isCardExtendTemplateNull = true;
        //card2 collapse isOpen or not
        this.isCollapseOpen = false;
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this._data = value;
        console.log("detail Set Data:", value);
        if (value && value.ClientID) {
            this.waitUntilMetaLoaded().then((/**
             * @return {?}
             */
            () => {
                this.onDataUpdated();
            }));
        }
        else {
            this._data = null;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    getMetaID() {
        return 'customerDetail';
    }
    /**
     * @protected
     * @return {?}
     */
    getMetaParams() {
        return null;
    }
    /**
     * @return {?}
     */
    get rowMetaWithoutGroup() {
        return this.metaConfig.Rows.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.map((/**
         * @param {?} y
         * @return {?}
         */
        y => y.type !== 'Group')).reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        (acc, cur) => acc && cur), true)));
    }
    ;
    /**
     * @return {?}
     */
    get rowMetaGroup() {
        return this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === 'Group'));
    }
    /**
     * @return {?}
     */
    get followStatus() {
        return this._data["IsFollow"] === 'Y';
    }
    /**
     * @return {?}
     */
    get isHasAgeRange() {
        return this._data && !!this._data["AgeRange"];
    }
    /**
     * @return {?}
     */
    get isHasContactFrequancy() {
        return this._data && !!this._data["ContactFrequancy"];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log("customerDetail ngOninit!");
        super.ngOnInit();
    }
    /**
     * @return {?}
     */
    onDataUpdated() {
        console.log("customerDetail onDataUpdated!", this._data);
        super.onDataUpdated();
        //check datasource is from OPUS
        this.isEmptyDel = this._data.DataSource == 'OPUS';
        this.convertEmptyValToDisplayText(this._data);
        this.checkInfoIsEmpty();
        this.changeCollateButton();
        this.DisplayData = Object.assign({}, this._data);
        if (this.customMetaController)
            this.customMetaController.onDataUpdated(this._data);
        this.changeDetctor.detectChanges();
        console.log("after customerDetail onDataUpdated!", this.DisplayData);
    }
    /**
     * @private
     * @return {?}
     */
    changeCollateButton() {
        console.log("changeCollateButton Meta:", this.metaConfig);
        this.isCollapseBtnShow = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === "Group"))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        x => this._data[x.id].length > (12 / x.grid.pc)))
            .reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        (acc, cur) => acc || cur), false);
        console.debug('isCollapseBtnShow', this.isCollapseBtnShow);
    }
    /**
     * @private
     * @return {?}
     */
    checkInfoIsEmpty() {
        //if detail info is empty , display no data status    
        this.isEmptyDetailInfo =
            this.metaConfig.Columns.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.type !== "Group"))
                .map((/**
             * @param {?} x
             * @return {?}
             */
            x => this._data[x.id] === null || this._data[x.id] === undefined || StringUtils.isEmpty(this._data[x.id]) || this._data[x.id] === this.dash))
                .reduce((/**
             * @param {?} acc
             * @param {?} cur
             * @return {?}
             */
            (acc, cur) => acc && cur), true);
        this.isEmptyGroupDetailInfo = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === "Group"))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        x => this._data[x.id].length === 0))
            .reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        (acc, cur) => acc && cur), true);
        console.log("isEmptyDetailInfo:", this.isEmptyDetailInfo);
        console.log("isEmptyGroupDetailInfo:", this.isEmptyGroupDetailInfo);
    }
    /**
     * @private
     * @param {?} customerDetail
     * @return {?}
     */
    convertEmptyValToDisplayText(customerDetail) {
        //if not data set default value(?? or -- --)
        console.log("convertEmptyValToDisplayText: ", customerDetail);
        customerDetail.AgeRange = this.profileCodeService.convertCode2Text("Customer_Age", customerDetail.AgeRange);
        customerDetail.ContactFrequancy = this.profileCodeService.convertCode2Text("Customer_ContactFrequancy", customerDetail.ContactFrequancy);
        customerDetail.showName = this.convertNameToShow(customerDetail.FirstName, customerDetail.LastName);
        customerDetail.address.forEach((/**
         * @param {?} addr
         * @return {?}
         */
        addr => {
            addr["AddressDisplay"] = this.toFullAddress(Object.assign({}, addr));
        }));
        this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type !== "Group")).forEach((/**
         * @param {?} col
         * @return {?}
         */
        col => {
            if (col.id === 'BirthdayDisplay')
                customerDetail.BirthdayDisplay = StringUtils.isNotEmpty(customerDetail.Birthday) ? this.toBirthdayStr() : this.dash;
            else
                customerDetail[col.id] = StringUtils.isEmpty(customerDetail[col.id]) ? this.dash : customerDetail[col.id];
        }));
    }
    /**
     * @private
     * @return {?}
     */
    toBirthdayStr() {
        if (this._data.Birthday !== undefined) {
            if (this.showRule) {
                return this.showRule.convertDate(new Date(this._data.Birthday));
            }
            else {
                return this.dateUtils.toDateString(new Date(this._data.Birthday), 'yyyy-MM-dd');
            }
        }
    }
    /**
     * @private
     * @param {?} addressObj
     * @return {?}
     */
    toFullAddress(addressObj) {
        if (this.showRule)
            return this.showRule.convertAddress(addressObj);
        else {
            /** @type {?} */
            let array = [];
            if (StringUtils.isNotEmpty(addressObj.Country))
                array.push(addressObj.Country);
            if (StringUtils.isNotEmpty(addressObj.City))
                array.push(addressObj.City);
            if (StringUtils.isNotEmpty(addressObj.Area))
                array.push(addressObj.Area);
            if (StringUtils.isNotEmpty(addressObj.Zipcode))
                array.push(addressObj.Zipcode);
            if (StringUtils.isNotEmpty(addressObj.Address))
                array.push(addressObj.Address);
            return array.join(', ');
        }
    }
    /**
     * @return {?}
     */
    edit() {
        this.onEditDetail.emit(this._data.ClientID);
    }
    /**
     * @return {?}
     */
    delete() {
        this.onDeleteDetail.emit(this._data.ClientID);
    }
    /**
     * @return {?}
     */
    callPhone() {
        this.onCallPhone.emit(this._data.ClientID);
    }
    /**
     * @return {?}
     */
    addAppointment() {
        this.onAddAppointment.emit(this._data.ClientID);
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackByFn(index, item) {
        return item.name;
    }
    /**
     * @param {?} isFollow
     * @return {?}
     */
    isFollowChange(isFollow) {
        console.debug('isFollowChange', isFollow);
        // display new follow state first
        this._data["IsFollow"] = isFollow ? "Y" : "N";
        this.changeDetctor.detectChanges();
        //ouput follow detail change status
        this.followChange.emit({ 'isFollow': isFollow, "clientID": this._data.ClientID });
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
CustomerDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-detail',
                template: "<!-- has CustomerDetail data-->\n<ng-container\n  *ngIf=\"DisplayData && data  && DisplayData.ClientID && isMetaLoaded(); else noCustomerData\">\n  <div class=\"layout-detail-block style-has-top-space style-has-right-space\">\n    <!-- profile -->\n    <div class=\"space-ui-element profile-block\">\n      <div class=\"profile-img-block img-block\" [ngClass]=\"DisplayData.DataSource == 'OPUS' ? '': ' active'\">\n        <!-- if true show active img (green) or show normal img -->\n        <img class=\"normal-img\" src=\"assets/img/img-cust-profile.svg\">\n        <img class=\"active-img\" src=\"assets/img/img-cust-profile-active.svg\">\n      </div>\n      <div class=\"content-block\">\n        <ng-container *ngIf=\"DisplayData.Possibility\">\n          <app-ui-form-radio-tag class=\"wd-lg profile-tag\" [checked]=\"true\" [disabled]=\"true\"\n            [ngClass]=\"DisplayData.Possibility\">{{DisplayData.Possibility|translate}}</app-ui-form-radio-tag>\n        </ng-container>\n\n        <div class=\"name-block\" [ngClass]=\"{'noTagBlock': !DisplayData.Possibility}\">\n          {{DisplayData.showName}}\n        </div>\n        <div class=\"sm-text\">\n          <span class=\"age\" *ngIf=\"isHasAgeRange\">\n            ({{DisplayData.AgeRange}})\n          </span>\n          <span class=\"detail-text\" *ngIf=\"isHasContactFrequancy\">\n            {{language.contactFrequency|translate }}\n            <span class=\"text-focus\">{{DisplayData.ContactFrequancy}}</span>\n            {{language.timePerYear|translate }}\n          </span>\n        </div>\n      </div>\n      <div class=\"like-block\">\n        <app-ui-btn-like-add [isLike]=\"followStatus\" (onChange)=\"isFollowChange($event)\">\n        </app-ui-btn-like-add>\n      </div>\n\n    </div>\n    <!-- end of profile -->\n\n    <!-- link -->\n    <ul class=\"space-ui-element ui-list-block\">\n      <li class=\"list-item-block\" [ngClass]=\"isEmptyAppointment? ' disable': ''\">\n        <button [id]=\"'btn_customerAddAppointment'\" Action action='addAppointment' (actionClick)=\"addAppointment()\">\n          <div class=\"img-block\">\n            <img class=\"img-disable\" src=\"assets/img/icon-cust-appointment-disable.svg\">\n            <img class=\"img-normal\" src=\"assets/img/icon-cust-appointment.svg\">\n          </div>\n          <div class=\"text-block\">\n            <p>{{ language.customerAppointment | translate }}</p>\n          </div>\n        </button>\n      </li>\n      <li class=\"list-item-block\" [ngClass]=\"DisplayData.tel.length == 0? ' disable': ''\">\n        <button [id]=\"'btn_customerCallPhone'\" Action action=\"customerCallPhone\" (actionClick)=\"callPhone()\">\n          <div class=\"img-block\">\n            <img class=\"img-disable\" src=\"assets/img/icon-cust-contact-disable.svg\">\n            <img class=\"img-normal\" src=\"assets/img/icon-cust-contact.svg\">\n          </div>\n          <div class=\"text-block\">\n            <p>{{ language.customerContact | translate }}</p>\n          </div>\n        </button>\n      </li>\n      <li class=\"list-item-block\" [ngClass]=\"isEmptyEdit? ' disable': ''\">\n        <button [id]=\"'btn_customerEdit'\" Action action=\"customerEdit\" (actionClick)=\"edit()\">\n          <div class=\"img-block\">\n            <img class=\"img-disable\" src=\"assets/img/icon-cust-edit-disable.svg\">\n            <img class=\"img-normal\" src=\"assets/img/icon-cust-edit.svg\">\n          </div>\n          <div class=\"text-block\">\n            <p>{{ language.customerEdit | translate }}</p>\n          </div>\n        </button>\n      </li>\n      <li class=\"list-item-block\" [ngClass]=\"isEmptyDel? ' disable': ''\">\n        <button [id]=\"'btn_customerDelete'\" Action action=\"customerDelete\" (actionClick)=\"delete()\" [disabled]=\"DisplayData.DataSource == 'OPUS'\">\n          <div class=\"img-block\">\n            <img class=\"img-disable\" src='assets/img/icon-cust-del-disable.svg'>\n            <img class=\"img-normal\" src=\"assets/img/icon-cust-del.svg\">\n          </div>\n          <div class=\"text-block\">\n            <p>{{ language.customerDelete | translate }}</p>\n          </div>\n        </button>\n\n      </li>\n    </ul>\n    <!-- end of link block -->\n    <!-- first card -->\n\n\n\n    <!-- Meta Group Detail -->\n    <app-ui-collapse-text1 class=\"card1-all-block\" [(isOpen)]=\"isCollapseOpen\" [(isCollapseBtnShow)]=\"isCollapseBtnShow\"\n      [translateEmpty]=\"language.empty | translate\" [isDataEmpty]=\"isEmptyGroupDetailInfo\">\n      <ng-container TextType=cardContent>\n        <app-ui-form-layout-advanced [isOnlyText]=\"true\">\n          <ng-container *ngFor=\"let group of rowMetaGroup\">\n            <app-ui-form-layout-row>\n              <ng-container *ngFor=\"let groupData of DisplayData[group.id]; index as i; first as isFirst\">\n                <app-ui-form-layout-col *ngIf=\"(group.grid.pc*(i+1))<=12\" [colPC]=\"group.grid.pc\"\n                  [colNB]=\"group.grid.nb\" [colPad]=\"group.grid.pad\" [colMobile]=\"group.grid.mobile\">\n                  <snd-ui-collapse-content-show>\n                    <app-ui-info-text1 *ngIf=\"isFirst\" [imgSrc]=\"group.icon\">\n                      <ng-container textType=\"title\">\n                        {{DisplayData[group.id][i][group.groupColumns[0].id] | translate}}\n                      </ng-container>\n                      <ng-container textType=\"text\" *ngFor=\"let col of group.groupColumns.slice(1);\">\n                        {{DisplayData[group.id][i][col.id] | translate}}\n                      </ng-container>\n                    </app-ui-info-text1>\n                    <app-ui-info-text1 *ngIf=\"!isFirst\">\n                      <ng-container textType=\"title\">\n                        {{DisplayData[group.id][i][group.groupColumns[0].id] | translate}}\n                      </ng-container>\n                      <ng-container textType=\"text\" *ngFor=\"let col of group.groupColumns.slice(1);\">\n                        {{DisplayData[group.id][i][col.id] | translate}}\n                      </ng-container>\n                    </app-ui-info-text1>\n                  </snd-ui-collapse-content-show>\n                </app-ui-form-layout-col>\n              </ng-container>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <ng-container *ngFor=\"let groupData of DisplayData[group.id]; index as i; first as isFirst\">\n                <app-ui-form-layout-col *ngIf=\"(group.grid.pc*(i+1))>12\" [colPC]=\"group.grid.pc\" [colNB]=\"group.grid.nb\"\n                  [colPad]=\"group.grid.pad\" [colMobile]=\"group.grid.mobile\">\n                  <snd-ui-collapse-content-detail [(isOpen)]=\"isCollapseOpen\">\n                    <app-ui-info-text1 *ngIf=\"isFirst\" [imgSrc]=\"group.icon\">\n                      <ng-container textType=\"title\">\n                        {{DisplayData[group.id][i][group.groupColumns[0].id]}}\n                      </ng-container>\n                      <ng-container textType=\"text\" *ngFor=\"let col of group.groupColumns.slice(1);\">\n                        {{DisplayData[group.id][i][col.id]}}\n                      </ng-container>\n                    </app-ui-info-text1>\n                    <app-ui-info-text1 *ngIf=\"!isFirst\">\n                      <ng-container textType=\"title\">\n                        {{DisplayData[group.id][i][group.groupColumns[0].id]}}\n                      </ng-container>\n                      <ng-container textType=\"text\" *ngFor=\"let col of group.groupColumns.slice(1);\">\n                        {{DisplayData[group.id][i][col.id]}}\n                      </ng-container>\n                    </app-ui-info-text1>\n                  </snd-ui-collapse-content-detail>\n                </app-ui-form-layout-col>\n              </ng-container>\n            </app-ui-form-layout-row>\n          </ng-container>\n        </app-ui-form-layout-advanced>\n      </ng-container>\n    </app-ui-collapse-text1>\n    <!-- end of Meta Group Detail -->\n\n\n    <!-- Meta Detail -->\n    <app-ui-collapse-card1 [isHide]=\"isCardExtendTemplateNull\" [isDataEmpty]=\"isEmptyDetailInfo\"\n      [tagText]=\"[language.customerDetail | translate]\"\n      [emptyText]=\"[language.noClick | translate, language.noInformation | translate]\">\n      <ng-container textType=\"collapseContentOrigin\">\n        <app-ui-form-layout-row *ngFor=\"let row of rowMetaWithoutGroup\">\n          <app-ui-form-layout-col *ngFor=\"let col of row\" [colPC]=\"col.grid.pc\" [colNB]=\"col.grid.nb\"\n            [colPad]=\"col.grid.pad\" [colMobile]=\"col.grid.mobile\">\n            <app-ui-info-text2>\n              <ng-container textType=\"title\">{{col.name|translate }}</ng-container>\n              <ng-container textType=\"text\">{{DisplayData[col.id]?DisplayData[col.id]:dash}}</ng-container>\n            </app-ui-info-text2>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n      </ng-container>\n    </app-ui-collapse-card1>\n    <!-- end of Meta Detail -->\n  </div>\n</ng-container>\n\n<ng-template #noCustomerData>\n  <div class=\"layout-detail-block style-has-top-space skelton-layout\">\n    <div class=\"theme-loading\" style=\"background-image:url('assets/img/loading-customer-main.svg')\">\n      <!-- profile -->\n      <div class=\"space-ui-element profile-block\">\n        <div class=\"img-block\">\n          <div class=\"skeleton-round \"></div>\n        </div>\n        <div class=\"content-block\">\n          <div class=\"tag-block\">\n            <div class=\"skelton-text  \"></div>\n          </div>\n          <div class=\"name-block\">\n            <div class=\"skelton-text \"></div>\n          </div>\n          <div class=\"sm-text\">\n            <div class=\"skelton-text \"></div>\n          </div>\n        </div>\n      </div>\n      <!-- end of profile -->\n      <!-- link list -->\n      <ul class=\"ui-list-block\">\n        <li class=\"list-item-block\" *ngFor='let number of [0,1,2,3]'>\n          <div class=\"skelton-img-text\">\n            <div class=\"skelton-square\">\n              <div class=\"skeleton-round \"></div>\n            </div>\n            <div class=\"skelton-text \"></div>\n          </div>\n        </li>\n      </ul>\n      <!-- end of link list -->\n      <!-- line -->\n      <div class=\"skelton-line-block\">\n        <div class=\"skelton-line \"></div>\n      </div>\n      <!-- end of line -->\n\n      <!-- list data -->\n      <div class=\"card-text\">\n        <div class=\"left-part\">\n          <div class=\"data-group\">\n\n            <div class=\"skelton-text   wd-short\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n            <div class=\"skelton-text   wd-short\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n          </div>\n        </div>\n        <div class=\"right-part\">\n          <div class=\"data-group\">\n            <div class=\"skelton-text   wd-short\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n            <div class=\"skelton-text   wd-short\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n          </div>\n        </div>\n      </div>\n\n      <!-- end of list data -->\n\n      <!-- line -->\n      <!-- <div class=\"skelton-line-block\">\n        <div class=\"skelton-line \"></div>\n      </div> -->\n      <!-- end of line -->\n\n\n\n    </div>\n  </div>\n  <!-- Customer data is empty -->\n</ng-template>\n",
                styles: [".skelton-layout{margin:0}.skelton-row{display:flex}.skelton-row.align-side{justify-content:space-between}.align-right{margin:0 0 15px auto}.align-center{margin:15px auto}.skeleton-round{border-radius:50%;background-color:#ececec;max-width:100%;max-height:100%;width:100%;height:100%}.skelton-square{display:inline-block;width:30px;height:30px}.skelton-text{min-height:1rem;max-width:100%;width:100%;background-color:#ececec;display:block;margin-bottom:15px}.skelton-line{display:inline-block;max-width:100%;width:100%;background-color:#ececec;height:1px}.skelton-img-text .skelton-square{margin-bottom:10px}::ng-deep ion-skeleton-text{background-color:#ececec}::ng-deep ion-skeleton-text span{opacity:1;background-color:#ececec}.skelton-animate{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(194,194,194,.3);background:linear-gradient(to right,rgba(194,194,194,.3) 8%,rgba(194,194,194,.2) 18%,rgba(194,194,194,.3) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}@keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}.layout-detail-block.skelton-layout{margin:0 -40px 0 0}@media (max-width:767px){.layout-detail-block.skelton-layout{margin-right:-40px}.layout-detail-block.skelton-layout .profile-block .content-block{max-width:70%}.layout-detail-block.skelton-layout .theme-loading .ui-list-block .list-item-block{margin-right:0}}.layout-detail-block .skelton-line-block{padding-right:40px}.layout-detail-block .theme-loading{background-size:contain;background-position:bottom right;background-repeat:no-repeat;width:100%;min-height:100vh;padding-right:40px}.layout-detail-block .theme-loading .profile-block .img-block{display:inline-block;max-width:100%;width:63px;height:63px;padding-right:0;margin-right:20px}.layout-detail-block .theme-loading .profile-block .tag-block{max-width:15%}.layout-detail-block .theme-loading .profile-block .name-block{max-width:30%;padding-bottom:0}.layout-detail-block .theme-loading .profile-block .sm-text{max-width:55%}.layout-detail-block .theme-loading .profile-block ::ng-deep ion-skeleton-text{margin-bottom:10px}.layout-detail-block .theme-loading .ui-list-block{margin-bottom:20px}.layout-detail-block .theme-loading .ui-list-block .list-item-block{margin-right:5%}.layout-detail-block .theme-loading .ui-list-block .skelton-img-text .skelton-text{max-width:80%;margin:0 auto}.layout-detail-block .theme-loading .skelton-square{width:3rem;height:3rem}.layout-detail-block .theme-loading .card-text{display:flex}.layout-detail-block .theme-loading .card-text .left-part{width:40%;box-sizing:border-box;padding:2rem}.layout-detail-block .theme-loading .card-text .right-part{width:60%;box-sizing:border-box;padding:2rem}.layout-detail-block .theme-loading .card-text .wd-short{max-width:5rem}.layout-detail-block .theme-loading .card-text .wd-long{max-width:100%}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.space-detail{padding-right:40px;display:block}@media (max-width:1023px){.space-detail{padding-right:40px}}.layout-detail-block{background-color:#f5f5f5;padding-left:40px}.layout-detail-block .space-detail:not(.layout-nodata):last-child{padding-bottom:100px}.layout-detail-block .layout-nodata{padding-bottom:0}@media (min-width:768px){.layout-detail-block.style-has-right-space{padding-right:40px}.layout-detail-block.style-has-right-space.skelton-layout{padding-right:0}}.layout-detail-block.style-has-top-space{padding-top:40px}@media (max-width:767px){.space-detail{padding-right:5px}.layout-detail-block{padding-left:5px}.layout-detail-block.style-has-right-space{padding-right:5px}.layout-detail-block.style-has-top-space{padding-top:30px}}.layout-detail-block.style-has-btm-space{padding-bottom:100px}.space-inner-lg{padding-left:50px;padding-right:50px}@media (max-width:767px){.space-inner-lg{padding-left:5px;padding-right:5px}}.profile-img-block img{border-radius:50%;display:inline-block}.profile-img-block .active-img,.profile-img-block.active .normal-img{display:none}.profile-img-block.active .active-img{display:block}.profile-block{display:flex;justify-content:flex-start;flex-wrap:wrap;width:100%;position:relative}.profile-block .profile-img-block{padding-right:15px}.profile-block .profile-img-block img{width:60px;height:60px}.profile-block .content-block{max-width:calc(100% - 40px - 10px - 60px - 15px);width:100%}.profile-block .content-block ::ng-deep .tag-block{margin-bottom:5px}.profile-block .content-block .name-block{font-size:1.25rem;font-weight:700;padding-bottom:5px;line-height:28px;white-space:normal;word-wrap:break-word}.profile-block .content-block .name-block.noTagBlock{padding-top:15px}.profile-block .sm-text{font-size:.875rem;line-height:28px;width:100%}.profile-block .sm-text .text-focus{color:#003781;font-weight:700;font-size:1.125rem;display:inline-block;padding:0 5px;vertical-align:middle}.profile-block .sm-text .detail-text{display:inline-flex;align-items:center;flex-wrap:wrap}.profile-block .age{display:inline-block;line-height:28px;min-height:28px;margin-right:5px}.profile-block .like-block{position:absolute;top:0;right:0}.profile-block .like-block ::ng-deep img{max-width:40px;width:100%}@media (max-width:768px){.profile-block{padding-left:15px;padding-right:6px;position:static}.profile-block .like-block{right:10px;top:10px}.profile-block .profile-img-block{padding-right:10px}.profile-block .profile-img-block img{width:45px;height:45px}.profile-block .content-block{max-width:calc(100% - 45px - 10px)}.profile-block .content-block .name-block{padding-right:50px}.profile-block .content-block .name-block.noTagBlock{padding-top:10px}}@media screen and (min-width:1025px){.profile-block .profile-img-block{width:calc(caculate-vw($wd-profile-img) + 15px)}.profile-block .profile-img-block img{width:6vw;height:6vw}.profile-block .content-block{max-width:calc(100% - 4vw - 10px - 6vw - 15px)}.profile-block .like-block ::ng-deep img{max-width:4vw}}.ui-list-block{display:flex;list-style-type:none;margin-right:-30px;justify-content:center;align-items:baseline}.ui-list-block button{border:none;background-color:transparent;padding:0}.ui-list-block .list-item-block{width:25%;max-width:5.625rem;text-align:center;margin-right:30px}.ui-list-block .list-item-block .img-block{max-width:40px;width:100%;margin:0 auto}.ui-list-block .list-item-block .img-block img{max-width:100%;width:100%}.ui-list-block .list-item-block.disable{pointer-events:none}.ui-list-block .list-item-block.disable .text-block{color:#414141}.ui-list-block .list-item-block .img-disable,.ui-list-block .list-item-block.disable .img-normal{display:none}.ui-list-block .list-item-block.disable .img-disable{display:inline-block;pointer-events:none}.ui-list-block .list-item-block .text-block p{color:#414141;line-height:normal;font-size:.875rem;margin:4px 0 0;padding:0 4px}@media (max-width:767px){.ui-list-block{flex-wrap:wrap;margin-right:0}.ui-list-block .list-item-block{max-width:100px;margin-right:0}}@media (max-width:374px){.ui-list-block .list-item-block .text-block p{font-size:.75rem;padding-right:10px}}@media screen and (min-width:1025px){.ui-list-block .list-item-block{max-width:9vw}.ui-list-block .list-item-block .img-block{max-width:4vw;width:4vw}}.card1-all-block::ng-deep .card-content-block{padding-top:20px}.card1-all-block::ng-deep .gas-row-block{margin-top:0}.card1-all-block::ng-deep .gas-row-block+.gas-row-block{margin-top:4px}@media (min-width:769px){.card1-all-block::ng-deep .gas-layout-form{box-sizing:border-box;padding-left:51px;padding-right:64px}.card1-all-block::ng-deep .gas-row-block{margin-top:0}}@media (max-width:767px){.card1-all-block::ng-deep .gas-layout-form{padding-left:15px}.card1-all-block::ng-deep .card-content-block app-ui-info-text1 .info-unit-block .text-block p{padding-left:10px}}"]
            }] }
];
CustomerDetailComponent.ctorParameters = () => [
    { type: DateUtils },
    { type: ProfileCodeService },
    { type: ChangeDetectorRef },
    { type: MetaService },
    { type: CustomerUtils },
    { type: InputExecutor },
    { type: DefaultMetaParser },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerDetailMetaControllerToken,] }] }
];
CustomerDetailComponent.propDecorators = {
    onEditDetail: [{ type: Output }],
    onCallPhone: [{ type: Output }],
    onDeleteDetail: [{ type: Output }],
    onAddAppointment: [{ type: Output }],
    followChange: [{ type: Output }],
    data: [{ type: Input }],
    detailPostTemp: [{ type: ViewChildren, args: ['detailPostTemp',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerDetailComponent.prototype.onEditDetail;
    /**
     * @type {?}
     * @private
     */
    CustomerDetailComponent.prototype.onCallPhone;
    /**
     * @type {?}
     * @private
     */
    CustomerDetailComponent.prototype.onDeleteDetail;
    /**
     * @type {?}
     * @private
     */
    CustomerDetailComponent.prototype.onAddAppointment;
    /**
     * @type {?}
     * @private
     */
    CustomerDetailComponent.prototype.followChange;
    /** @type {?} */
    CustomerDetailComponent.prototype.DisplayData;
    /** @type {?} */
    CustomerDetailComponent.prototype.dash;
    /** @type {?} */
    CustomerDetailComponent.prototype.language;
    /** @type {?} */
    CustomerDetailComponent.prototype.isEmptyAppointment;
    /** @type {?} */
    CustomerDetailComponent.prototype.isEmptyEdit;
    /** @type {?} */
    CustomerDetailComponent.prototype.isEmptyDel;
    /** @type {?} */
    CustomerDetailComponent.prototype.isEmptyDetailInfo;
    /** @type {?} */
    CustomerDetailComponent.prototype.isEmptyGroupDetailInfo;
    /** @type {?} */
    CustomerDetailComponent.prototype.isEmptyContactNote;
    /** @type {?} */
    CustomerDetailComponent.prototype.isCollapseBtnShow;
    /** @type {?} */
    CustomerDetailComponent.prototype.isCardExtendTemplateNull;
    /** @type {?} */
    CustomerDetailComponent.prototype.detailPostTemp;
    /** @type {?} */
    CustomerDetailComponent.prototype.isCollapseOpen;
    /**
     * @type {?}
     * @private
     */
    CustomerDetailComponent.prototype.dateUtils;
    /**
     * @type {?}
     * @protected
     */
    CustomerDetailComponent.prototype.profileCodeService;
    /**
     * @type {?}
     * @private
     */
    CustomerDetailComponent.prototype.changeDetctor;
    /**
     * @type {?}
     * @protected
     */
    CustomerDetailComponent.prototype.metaService;
    /**
     * @type {?}
     * @private
     */
    CustomerDetailComponent.prototype.customerUtils;
    /**
     * @type {?}
     * @private
     */
    CustomerDetailComponent.prototype.showRule;
    /**
     * @type {?}
     * @private
     */
    CustomerDetailComponent.prototype.customMetaController;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItZGV0YWlsL2N1c3RvbWVyLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdJLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUE4QixNQUFNLGtCQUFrQixDQUFDO0FBQ25LLE9BQU8sRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPekYsTUFBTSw4QkFBK0IsU0FBUSxvQkFBb0I7Ozs7Ozs7Ozs7OztJQXNGL0QsWUFDVSxTQUFvQixFQUNsQixrQkFBc0MsRUFDeEMsYUFBZ0MsRUFDOUIsV0FBd0IsRUFDMUIsYUFBNEIsRUFDcEMsYUFBNEIsRUFDNUIsVUFBNkIsRUFDYyxRQUFrQixFQUNFLG9CQUFvQztRQUVuRyxLQUFLLENBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQVYxRCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ2xCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDeEMsa0JBQWEsR0FBYixhQUFhLENBQW1C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O1lBRGpCLGlCQUFpQjtZQUMvQixXQUFXO1lBRzdDLGFBQWE7WUFIc0QsYUFBYTtZQUFFLGlCQUFpQjs0Q0F5R3ZHLFFBQVEsWUFBSSxNQUFNLFNBQUMsYUFBYTs0Q0FDaEMsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQ0FBaUM7OzsyQkE3RnRELE1BQU07MEJBRU4sTUFBTTs2QkFFTixNQUFNOytCQUVOLE1BQU07MkJBRU4sTUFBTTttQkFTTixLQUFLOzZCQW1ETCxZQUFZLFNBQUMsZ0JBQWdCOzs7Ozs7O0lBcEU5QiwrQ0FDZ0U7Ozs7O0lBQ2hFLDhDQUMrRDs7Ozs7SUFDL0QsaURBQ2tFOzs7OztJQUNsRSxtREFDb0U7Ozs7O0lBQ3BFLCtDQUNxRzs7SUFLckcsOENBQTBCOztJQUMxQix1Q0FBcUM7O0lBd0NyQywyQ0FBMkM7O0lBRzNDLHFEQUEyQzs7SUFDM0MsOENBQW9DOztJQUNwQyw2Q0FBbUM7O0lBQ25DLG9EQUEwQzs7SUFDMUMseURBQStDOztJQUMvQyxxREFBMkM7O0lBQzNDLG9EQUF5Qzs7SUFHekMsMkRBQXVDOztJQUN2QyxpREFBK0Q7O0lBRS9ELGlEQUE4Qjs7Ozs7SUFlNUIsNENBQTRCOzs7OztJQUM1QixxREFBZ0Q7Ozs7O0lBQ2hELGdEQUF3Qzs7Ozs7SUFDeEMsOENBQWtDOzs7OztJQUNsQyxnREFBb0M7Ozs7O0lBR3BDLDJDQUE2RDs7Ozs7SUFDN0QsdURBQW1HIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9wdGlvbmFsLCBJbmplY3QsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlVXRpbHMsIFN0cmluZ1V0aWxzLCBMYW5ndWFnZSwgTWV0YVNlcnZpY2UsIFByb2ZpbGVDb2RlU2VydmljZSwgSW5wdXRFeGVjdXRvciwgRGVmYXVsdE1ldGFQYXJzZXIsIE1ldGFDb2x1bW4sIE1ldGFDb250cm9sbGVyIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBzaG93UnVsZVRva2VuLCBEaXNwbGF5TWV0YUNvbXBvbmVudCB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgc2hvd1J1bGUgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEN1c3RvbWVyVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jdXN0b21lci11dGlscyc7XG5pbXBvcnQgeyBjdXN0b21lckRldGFpbE1ldGFDb250cm9sbGVyVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbWVyLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRGV0YWlsQ29tcG9uZW50IGV4dGVuZHMgRGlzcGxheU1ldGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIG9uRWRpdERldGFpbDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIG9uQ2FsbFBob25lOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgb25EZWxldGVEZXRhaWw6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgcHJpdmF0ZSBvbkFkZEFwcG9pbnRtZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgZm9sbG93Q2hhbmdlOiBFdmVudEVtaXR0ZXI8eyAnaXNGb2xsb3cnOiBib29sZWFuLCAnY2xpZW50SUQnOiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuXG5cbiAgcHVibGljIERpc3BsYXlEYXRhID0gbnVsbDtcbiAgcHVibGljIHJlYWRvbmx5IGRhc2g6IHN0cmluZyA9ICctIC0nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIHNldCBkYXRhKHZhbHVlKSB7XG4gICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgIGNvbnNvbGUubG9nKFwiZGV0YWlsIFNldCBEYXRhOlwiLCB2YWx1ZSk7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLkNsaWVudElEKSB7XG4gICAgICB0aGlzLndhaXRVbnRpbE1ldGFMb2FkZWQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkRhdGFVcGRhdGVkKCk7XG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRNZXRhSUQoKSB7XG4gICAgcmV0dXJuICdjdXN0b21lckRldGFpbCc7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0TWV0YVBhcmFtcygpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCByb3dNZXRhV2l0aG91dEdyb3VwKCk6IEFycmF5PEFycmF5PE1ldGFDb2x1bW4+PiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YUNvbmZpZy5Sb3dzLmZpbHRlcih4ID0+IHgubWFwKHkgPT4geS50eXBlICE9PSAnR3JvdXAnKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgJiYgY3VyLCB0cnVlKSk7XG4gIH07XG5cbiAgZ2V0IHJvd01ldGFHcm91cCgpOiBBcnJheTxNZXRhQ29sdW1uPiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ0dyb3VwJyk7XG4gIH1cblxuICBnZXQgZm9sbG93U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhW1wiSXNGb2xsb3dcIl0gPT09ICdZJ1xuICB9XG5cblxuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG5cbiAgLy8gZW1wdHkgc3RhdHVzXG4gIHB1YmxpYyBpc0VtcHR5QXBwb2ludG1lbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzRW1wdHlFZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0VtcHR5RGVsOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0VtcHR5RGV0YWlsSW5mbzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNFbXB0eUdyb3VwRGV0YWlsSW5mbzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNFbXB0eUNvbnRhY3ROb3RlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0NvbGxhcHNlQnRuU2hvdzogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy8gY2FyZDIgZXh0ZW5kIHRlbXBsYXRlIGlzIG51bGwgb3Igbm90XG4gIHB1YmxpYyBpc0NhcmRFeHRlbmRUZW1wbGF0ZU51bGwgPSB0cnVlO1xuICBAVmlld0NoaWxkcmVuKCdkZXRhaWxQb3N0VGVtcCcpIGRldGFpbFBvc3RUZW1wOiBRdWVyeUxpc3Q8YW55PjtcbiAgLy9jYXJkMiBjb2xsYXBzZSBpc09wZW4gb3Igbm90XG4gIHB1YmxpYyBpc0NvbGxhcHNlT3BlbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBnZXQgaXNIYXNBZ2VSYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YSAmJiAhIXRoaXMuX2RhdGFbXCJBZ2VSYW5nZVwiXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNIYXNDb250YWN0RnJlcXVhbmN5KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhICYmICEhdGhpcy5fZGF0YVtcIkNvbnRhY3RGcmVxdWFuY3lcIl07XG4gIH1cblxuXG5cblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGF0ZVV0aWxzOiBEYXRlVXRpbHMsXG4gICAgcHJvdGVjdGVkIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0Y3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJvdGVjdGVkIG1ldGFTZXJ2aWNlOiBNZXRhU2VydmljZSxcbiAgICBwcml2YXRlIGN1c3RvbWVyVXRpbHM6IEN1c3RvbWVyVXRpbHMsXG4gICAgaW5wdXRFeGVjdXRvcjogSW5wdXRFeGVjdXRvcixcbiAgICBtZXRhUGFyc2VyOiBEZWZhdWx0TWV0YVBhcnNlcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KHNob3dSdWxlVG9rZW4pIHByaXZhdGUgc2hvd1J1bGU6IHNob3dSdWxlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoY3VzdG9tZXJEZXRhaWxNZXRhQ29udHJvbGxlclRva2VuKSBwcml2YXRlIGN1c3RvbU1ldGFDb250cm9sbGVyOiBNZXRhQ29udHJvbGxlclxuICApIHtcbiAgICBzdXBlcihtZXRhU2VydmljZSwgcHJvZmlsZUNvZGVTZXJ2aWNlLCBtZXRhUGFyc2VyLCBpbnB1dEV4ZWN1dG9yKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImN1c3RvbWVyRGV0YWlsIG5nT25pbml0IVwiKTtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cblxuICBvbkRhdGFVcGRhdGVkKCkge1xuICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tZXJEZXRhaWwgb25EYXRhVXBkYXRlZCFcIiwgdGhpcy5fZGF0YSk7XG4gICAgc3VwZXIub25EYXRhVXBkYXRlZCgpO1xuXG4gICAgLy9jaGVjayBkYXRhc291cmNlIGlzIGZyb20gT1BVU1xuICAgIHRoaXMuaXNFbXB0eURlbCA9IHRoaXMuX2RhdGEuRGF0YVNvdXJjZSA9PSAnT1BVUyc7XG5cbiAgICB0aGlzLmNvbnZlcnRFbXB0eVZhbFRvRGlzcGxheVRleHQodGhpcy5fZGF0YSk7XG4gICAgdGhpcy5jaGVja0luZm9Jc0VtcHR5KCk7XG4gICAgdGhpcy5jaGFuZ2VDb2xsYXRlQnV0dG9uKCk7XG5cbiAgICB0aGlzLkRpc3BsYXlEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGF0YSk7XG4gICAgaWYgKHRoaXMuY3VzdG9tTWV0YUNvbnRyb2xsZXIpXG4gICAgICB0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyLm9uRGF0YVVwZGF0ZWQodGhpcy5fZGF0YSk7XG4gICAgdGhpcy5jaGFuZ2VEZXRjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICBjb25zb2xlLmxvZyhcImFmdGVyIGN1c3RvbWVyRGV0YWlsIG9uRGF0YVVwZGF0ZWQhXCIsIHRoaXMuRGlzcGxheURhdGEpO1xuICB9XG5cblxuXG5cbiAgcHJpdmF0ZSBjaGFuZ2VDb2xsYXRlQnV0dG9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlQ29sbGF0ZUJ1dHRvbiBNZXRhOlwiLCB0aGlzLm1ldGFDb25maWcpO1xuICAgIHRoaXMuaXNDb2xsYXBzZUJ0blNob3cgPSB0aGlzLm1ldGFDb25maWcuQ29sdW1ucy5maWx0ZXIoeCA9PiB4LnR5cGUgPT09IFwiR3JvdXBcIilcbiAgICAgIC5tYXAoeCA9PiB0aGlzLl9kYXRhW3guaWRdLmxlbmd0aCA+ICgxMiAvIHguZ3JpZC5wYykpXG4gICAgICAucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjIHx8IGN1ciwgZmFsc2UpO1xuXG4gICAgY29uc29sZS5kZWJ1ZygnaXNDb2xsYXBzZUJ0blNob3cnLCB0aGlzLmlzQ29sbGFwc2VCdG5TaG93KTtcbiAgfVxuXG5cblxuICBwcml2YXRlIGNoZWNrSW5mb0lzRW1wdHkoKSB7XG4gICAgLy9pZiBkZXRhaWwgaW5mbyBpcyBlbXB0eSAsIGRpc3BsYXkgbm8gZGF0YSBzdGF0dXMgICAgXG4gICAgdGhpcy5pc0VtcHR5RGV0YWlsSW5mbyA9XG4gICAgICB0aGlzLm1ldGFDb25maWcuQ29sdW1ucy5maWx0ZXIoeCA9PiB4LnR5cGUgIT09IFwiR3JvdXBcIilcbiAgICAgICAgLm1hcCh4ID0+IHRoaXMuX2RhdGFbeC5pZF0gPT09IG51bGwgfHwgdGhpcy5fZGF0YVt4LmlkXSA9PT0gdW5kZWZpbmVkIHx8IFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fZGF0YVt4LmlkXSkgfHwgdGhpcy5fZGF0YVt4LmlkXSA9PT0gdGhpcy5kYXNoKVxuICAgICAgICAucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICYmIGN1ciwgdHJ1ZSk7XG5cbiAgICB0aGlzLmlzRW1wdHlHcm91cERldGFpbEluZm8gPSB0aGlzLm1ldGFDb25maWcuQ29sdW1ucy5maWx0ZXIoeCA9PiB4LnR5cGUgPT09IFwiR3JvdXBcIilcbiAgICAgIC5tYXAoeCA9PiB0aGlzLl9kYXRhW3guaWRdLmxlbmd0aCA9PT0gMClcbiAgICAgIC5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgJiYgY3VyLCB0cnVlKTtcblxuICAgIGNvbnNvbGUubG9nKFwiaXNFbXB0eURldGFpbEluZm86XCIsIHRoaXMuaXNFbXB0eURldGFpbEluZm8pO1xuICAgIGNvbnNvbGUubG9nKFwiaXNFbXB0eUdyb3VwRGV0YWlsSW5mbzpcIiwgdGhpcy5pc0VtcHR5R3JvdXBEZXRhaWxJbmZvKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydEVtcHR5VmFsVG9EaXNwbGF5VGV4dChjdXN0b21lckRldGFpbDogYW55KSB7XG4gICAgLy9pZiBub3QgZGF0YSBzZXQgZGVmYXVsdCB2YWx1ZSg/PyBvciAtLSAtLSlcbiAgICBjb25zb2xlLmxvZyhcImNvbnZlcnRFbXB0eVZhbFRvRGlzcGxheVRleHQ6IFwiLCBjdXN0b21lckRldGFpbCk7XG4gICAgY3VzdG9tZXJEZXRhaWwuQWdlUmFuZ2UgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KFwiQ3VzdG9tZXJfQWdlXCIsIGN1c3RvbWVyRGV0YWlsLkFnZVJhbmdlKTtcbiAgICBjdXN0b21lckRldGFpbC5Db250YWN0RnJlcXVhbmN5ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dChcIkN1c3RvbWVyX0NvbnRhY3RGcmVxdWFuY3lcIiwgY3VzdG9tZXJEZXRhaWwuQ29udGFjdEZyZXF1YW5jeSk7XG4gICAgY3VzdG9tZXJEZXRhaWwuc2hvd05hbWUgPSB0aGlzLmNvbnZlcnROYW1lVG9TaG93KGN1c3RvbWVyRGV0YWlsLkZpcnN0TmFtZSwgY3VzdG9tZXJEZXRhaWwuTGFzdE5hbWUpO1xuICAgIGN1c3RvbWVyRGV0YWlsLmFkZHJlc3MuZm9yRWFjaChhZGRyID0+IHtcbiAgICAgIGFkZHJbXCJBZGRyZXNzRGlzcGxheVwiXSA9IHRoaXMudG9GdWxsQWRkcmVzcyhPYmplY3QuYXNzaWduKHt9LCBhZGRyKSk7XG4gICAgfSk7XG4gICAgdGhpcy5tZXRhQ29uZmlnLkNvbHVtbnMuZmlsdGVyKHggPT4geC50eXBlICE9PSBcIkdyb3VwXCIpLmZvckVhY2goY29sID0+IHtcbiAgICAgIGlmIChjb2wuaWQgPT09ICdCaXJ0aGRheURpc3BsYXknKVxuICAgICAgICBjdXN0b21lckRldGFpbC5CaXJ0aGRheURpc3BsYXkgPSBTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyRGV0YWlsLkJpcnRoZGF5KSA/IHRoaXMudG9CaXJ0aGRheVN0cigpIDogdGhpcy5kYXNoO1xuICAgICAgZWxzZVxuICAgICAgICBjdXN0b21lckRldGFpbFtjb2wuaWRdID0gU3RyaW5nVXRpbHMuaXNFbXB0eShjdXN0b21lckRldGFpbFtjb2wuaWRdKSA/IHRoaXMuZGFzaCA6IGN1c3RvbWVyRGV0YWlsW2NvbC5pZF07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHRvQmlydGhkYXlTdHIoKSB7XG5cbiAgICBpZiAodGhpcy5fZGF0YS5CaXJ0aGRheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5zaG93UnVsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaG93UnVsZS5jb252ZXJ0RGF0ZShuZXcgRGF0ZSh0aGlzLl9kYXRhLkJpcnRoZGF5KSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVV0aWxzLnRvRGF0ZVN0cmluZyhuZXcgRGF0ZSh0aGlzLl9kYXRhLkJpcnRoZGF5KSwgJ3l5eXktTU0tZGQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvRnVsbEFkZHJlc3MoYWRkcmVzc09iajogYW55KTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zaG93UnVsZSlcbiAgICAgIHJldHVybiB0aGlzLnNob3dSdWxlLmNvbnZlcnRBZGRyZXNzKGFkZHJlc3NPYmopO1xuICAgIGVsc2Uge1xuICAgICAgbGV0IGFycmF5ID0gW107XG4gICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShhZGRyZXNzT2JqLkNvdW50cnkpKSBhcnJheS5wdXNoKGFkZHJlc3NPYmouQ291bnRyeSk7XG4gICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShhZGRyZXNzT2JqLkNpdHkpKSBhcnJheS5wdXNoKGFkZHJlc3NPYmouQ2l0eSk7XG4gICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShhZGRyZXNzT2JqLkFyZWEpKSBhcnJheS5wdXNoKGFkZHJlc3NPYmouQXJlYSk7XG4gICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShhZGRyZXNzT2JqLlppcGNvZGUpKSBhcnJheS5wdXNoKGFkZHJlc3NPYmouWmlwY29kZSk7XG4gICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShhZGRyZXNzT2JqLkFkZHJlc3MpKSBhcnJheS5wdXNoKGFkZHJlc3NPYmouQWRkcmVzcyk7XG4gICAgICByZXR1cm4gYXJyYXkuam9pbignLCAnKTtcbiAgICB9XG4gIH1cblxuICBlZGl0KCkge1xuICAgIHRoaXMub25FZGl0RGV0YWlsLmVtaXQodGhpcy5fZGF0YS5DbGllbnRJRCk7XG4gIH1cblxuICBkZWxldGUoKSB7XG4gICAgdGhpcy5vbkRlbGV0ZURldGFpbC5lbWl0KHRoaXMuX2RhdGEuQ2xpZW50SUQpO1xuICB9XG5cbiAgY2FsbFBob25lKCkge1xuICAgIHRoaXMub25DYWxsUGhvbmUuZW1pdCh0aGlzLl9kYXRhLkNsaWVudElEKTtcbiAgfVxuXG4gIGFkZEFwcG9pbnRtZW50KCkge1xuICAgIHRoaXMub25BZGRBcHBvaW50bWVudC5lbWl0KHRoaXMuX2RhdGEuQ2xpZW50SUQpO1xuICB9XG5cbiAgdHJhY2tCeUZuKGluZGV4LCBpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgfVxuXG5cbiAgaXNGb2xsb3dDaGFuZ2UoaXNGb2xsb3c6IGJvb2xlYW4pIHtcbiAgICBjb25zb2xlLmRlYnVnKCdpc0ZvbGxvd0NoYW5nZScsIGlzRm9sbG93KTtcbiAgICAvLyBkaXNwbGF5IG5ldyBmb2xsb3cgc3RhdGUgZmlyc3RcbiAgICB0aGlzLl9kYXRhW1wiSXNGb2xsb3dcIl0gPSBpc0ZvbGxvdyA/IFwiWVwiIDogXCJOXCI7XG4gICAgdGhpcy5jaGFuZ2VEZXRjdG9yLmRldGVjdENoYW5nZXMoKTtcblxuICAgIC8vb3VwdXQgZm9sbG93IGRldGFpbCBjaGFuZ2Ugc3RhdHVzXG4gICAgdGhpcy5mb2xsb3dDaGFuZ2UuZW1pdCh7ICdpc0ZvbGxvdyc6IGlzRm9sbG93LCBcImNsaWVudElEXCI6IHRoaXMuX2RhdGEuQ2xpZW50SUQgfSk7XG5cblxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0TmFtZVRvU2hvdyhmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tZXJVdGlscy5jb252ZXJ0TmFtZVRvU2hvdyhmaXJzdE5hbWUsIGxhc3ROYW1lKTtcbiAgfVxuXG59XG4iXX0=