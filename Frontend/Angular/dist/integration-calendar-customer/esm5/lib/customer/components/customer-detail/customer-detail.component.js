/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, Optional, Inject, ViewChildren, QueryList } from '@angular/core';
import { DateUtils, StringUtils, Language, MetaService, ProfileCodeService, InputExecutor, DefaultMetaParser } from '@allianzSND/core';
import { showRuleToken, DisplayMetaComponent } from '@allianzSND/core';
import { CustomerUtils } from '../../utils/customer-utils';
import { customerDetailMetaControllerToken } from '../../injectionToken/injection-token';
var CustomerDetailComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerDetailComponent, _super);
    function CustomerDetailComponent(dateUtils, profileCodeService, changeDetctor, metaService, customerUtils, inputExecutor, metaParser, showRule, customMetaController) {
        var _this = _super.call(this, metaService, profileCodeService, metaParser, inputExecutor) || this;
        _this.dateUtils = dateUtils;
        _this.profileCodeService = profileCodeService;
        _this.changeDetctor = changeDetctor;
        _this.metaService = metaService;
        _this.customerUtils = customerUtils;
        _this.showRule = showRule;
        _this.customMetaController = customMetaController;
        _this.onEditDetail = new EventEmitter();
        _this.onCallPhone = new EventEmitter();
        _this.onDeleteDetail = new EventEmitter();
        _this.onAddAppointment = new EventEmitter();
        _this.followChange = new EventEmitter();
        _this.DisplayData = null;
        _this.dash = '- -';
        _this.language = new Language();
        // empty status
        _this.isEmptyAppointment = false;
        _this.isEmptyEdit = false;
        _this.isEmptyDel = false;
        _this.isEmptyDetailInfo = false;
        _this.isEmptyGroupDetailInfo = false;
        _this.isEmptyContactNote = false;
        _this.isCollapseBtnShow = true;
        // card2 extend template is null or not
        _this.isCardExtendTemplateNull = true;
        //card2 collapse isOpen or not
        _this.isCollapseOpen = false;
        return _this;
    }
    Object.defineProperty(CustomerDetailComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._data = value;
            console.log("detail Set Data:", value);
            if (value && value.ClientID) {
                this.waitUntilMetaLoaded().then((/**
                 * @return {?}
                 */
                function () {
                    _this.onDataUpdated();
                }));
            }
            else {
                this._data = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @return {?}
     */
    CustomerDetailComponent.prototype.getMetaID = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'customerDetail';
    };
    /**
     * @protected
     * @return {?}
     */
    CustomerDetailComponent.prototype.getMetaParams = /**
     * @protected
     * @return {?}
     */
    function () {
        return null;
    };
    Object.defineProperty(CustomerDetailComponent.prototype, "rowMetaWithoutGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this.metaConfig.Rows.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.map((/**
             * @param {?} y
             * @return {?}
             */
            function (y) { return y.type !== 'Group'; })).reduce((/**
             * @param {?} acc
             * @param {?} cur
             * @return {?}
             */
            function (acc, cur) { return acc && cur; }), true); }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CustomerDetailComponent.prototype, "rowMetaGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this.metaConfig.Columns.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.type === 'Group'; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetailComponent.prototype, "followStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data["IsFollow"] === 'Y';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetailComponent.prototype, "isHasAgeRange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data && !!this._data["AgeRange"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetailComponent.prototype, "isHasContactFrequancy", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data && !!this._data["ContactFrequancy"];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerDetailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log("customerDetail ngOninit!");
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * @return {?}
     */
    CustomerDetailComponent.prototype.onDataUpdated = /**
     * @return {?}
     */
    function () {
        console.log("customerDetail onDataUpdated!", this._data);
        _super.prototype.onDataUpdated.call(this);
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
    };
    /**
     * @private
     * @return {?}
     */
    CustomerDetailComponent.prototype.changeCollateButton = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        console.log("changeCollateButton Meta:", this.metaConfig);
        this.isCollapseBtnShow = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.type === "Group"; }))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this._data[x.id].length > (12 / x.grid.pc); }))
            .reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        function (acc, cur) { return acc || cur; }), false);
        console.debug('isCollapseBtnShow', this.isCollapseBtnShow);
    };
    /**
     * @private
     * @return {?}
     */
    CustomerDetailComponent.prototype.checkInfoIsEmpty = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        //if detail info is empty , display no data status    
        this.isEmptyDetailInfo =
            this.metaConfig.Columns.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.type !== "Group"; }))
                .map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return _this._data[x.id] === null || _this._data[x.id] === undefined || StringUtils.isEmpty(_this._data[x.id]) || _this._data[x.id] === _this.dash; }))
                .reduce((/**
             * @param {?} acc
             * @param {?} cur
             * @return {?}
             */
            function (acc, cur) { return acc && cur; }), true);
        this.isEmptyGroupDetailInfo = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.type === "Group"; }))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this._data[x.id].length === 0; }))
            .reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        function (acc, cur) { return acc && cur; }), true);
        console.log("isEmptyDetailInfo:", this.isEmptyDetailInfo);
        console.log("isEmptyGroupDetailInfo:", this.isEmptyGroupDetailInfo);
    };
    /**
     * @private
     * @param {?} customerDetail
     * @return {?}
     */
    CustomerDetailComponent.prototype.convertEmptyValToDisplayText = /**
     * @private
     * @param {?} customerDetail
     * @return {?}
     */
    function (customerDetail) {
        var _this = this;
        //if not data set default value(?? or -- --)
        console.log("convertEmptyValToDisplayText: ", customerDetail);
        customerDetail.AgeRange = this.profileCodeService.convertCode2Text("Customer_Age", customerDetail.AgeRange);
        customerDetail.ContactFrequancy = this.profileCodeService.convertCode2Text("Customer_ContactFrequancy", customerDetail.ContactFrequancy);
        customerDetail.showName = this.convertNameToShow(customerDetail.FirstName, customerDetail.LastName);
        customerDetail.address.forEach((/**
         * @param {?} addr
         * @return {?}
         */
        function (addr) {
            addr["AddressDisplay"] = _this.toFullAddress(Object.assign({}, addr));
        }));
        this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.type !== "Group"; })).forEach((/**
         * @param {?} col
         * @return {?}
         */
        function (col) {
            if (col.id === 'BirthdayDisplay')
                customerDetail.BirthdayDisplay = StringUtils.isNotEmpty(customerDetail.Birthday) ? _this.toBirthdayStr() : _this.dash;
            else
                customerDetail[col.id] = StringUtils.isEmpty(customerDetail[col.id]) ? _this.dash : customerDetail[col.id];
        }));
    };
    /**
     * @private
     * @return {?}
     */
    CustomerDetailComponent.prototype.toBirthdayStr = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._data.Birthday !== undefined) {
            if (this.showRule) {
                return this.showRule.convertDate(new Date(this._data.Birthday));
            }
            else {
                return this.dateUtils.toDateString(new Date(this._data.Birthday), 'yyyy-MM-dd');
            }
        }
    };
    /**
     * @private
     * @param {?} addressObj
     * @return {?}
     */
    CustomerDetailComponent.prototype.toFullAddress = /**
     * @private
     * @param {?} addressObj
     * @return {?}
     */
    function (addressObj) {
        if (this.showRule)
            return this.showRule.convertAddress(addressObj);
        else {
            /** @type {?} */
            var array = [];
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
    };
    /**
     * @return {?}
     */
    CustomerDetailComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
        this.onEditDetail.emit(this._data.ClientID);
    };
    /**
     * @return {?}
     */
    CustomerDetailComponent.prototype.delete = /**
     * @return {?}
     */
    function () {
        this.onDeleteDetail.emit(this._data.ClientID);
    };
    /**
     * @return {?}
     */
    CustomerDetailComponent.prototype.callPhone = /**
     * @return {?}
     */
    function () {
        this.onCallPhone.emit(this._data.ClientID);
    };
    /**
     * @return {?}
     */
    CustomerDetailComponent.prototype.addAppointment = /**
     * @return {?}
     */
    function () {
        this.onAddAppointment.emit(this._data.ClientID);
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    CustomerDetailComponent.prototype.trackByFn = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.name;
    };
    /**
     * @param {?} isFollow
     * @return {?}
     */
    CustomerDetailComponent.prototype.isFollowChange = /**
     * @param {?} isFollow
     * @return {?}
     */
    function (isFollow) {
        console.debug('isFollowChange', isFollow);
        // display new follow state first
        this._data["IsFollow"] = isFollow ? "Y" : "N";
        this.changeDetctor.detectChanges();
        //ouput follow detail change status
        this.followChange.emit({ 'isFollow': isFollow, "clientID": this._data.ClientID });
    };
    /**
     * @private
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    CustomerDetailComponent.prototype.convertNameToShow = /**
     * @private
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    function (firstName, lastName) {
        return this.customerUtils.convertNameToShow(firstName, lastName);
    };
    CustomerDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-customer-detail',
                    template: "<!-- has CustomerDetail data-->\n<ng-container\n  *ngIf=\"DisplayData && data  && DisplayData.ClientID && isMetaLoaded(); else noCustomerData\">\n  <div class=\"layout-detail-block style-has-top-space style-has-right-space\">\n    <!-- profile -->\n    <div class=\"space-ui-element profile-block\">\n      <div class=\"profile-img-block img-block\" [ngClass]=\"DisplayData.DataSource == 'OPUS' ? '': ' active'\">\n        <!-- if true show active img (green) or show normal img -->\n        <img class=\"normal-img\" src=\"assets/img/img-cust-profile.svg\">\n        <img class=\"active-img\" src=\"assets/img/img-cust-profile-active.svg\">\n      </div>\n      <div class=\"content-block\">\n        <ng-container *ngIf=\"DisplayData.Possibility\">\n          <app-ui-form-radio-tag class=\"wd-lg profile-tag\" [checked]=\"true\" [disabled]=\"true\"\n            [ngClass]=\"DisplayData.Possibility\">{{DisplayData.Possibility|translate}}</app-ui-form-radio-tag>\n        </ng-container>\n\n        <div class=\"name-block\" [ngClass]=\"{'noTagBlock': !DisplayData.Possibility}\">\n          {{DisplayData.showName}}\n        </div>\n        <div class=\"sm-text\">\n          <span class=\"age\" *ngIf=\"isHasAgeRange\">\n            ({{DisplayData.AgeRange}})\n          </span>\n          <span class=\"detail-text\" *ngIf=\"isHasContactFrequancy\">\n            {{language.contactFrequency|translate }}\n            <span class=\"text-focus\">{{DisplayData.ContactFrequancy}}</span>\n            {{language.timePerYear|translate }}\n          </span>\n        </div>\n      </div>\n      <div class=\"like-block\">\n        <app-ui-btn-like-add [isLike]=\"followStatus\" (onChange)=\"isFollowChange($event)\">\n        </app-ui-btn-like-add>\n      </div>\n\n    </div>\n    <!-- end of profile -->\n\n    <!-- link -->\n    <ul class=\"space-ui-element ui-list-block\">\n      <li class=\"list-item-block\" [ngClass]=\"isEmptyAppointment? ' disable': ''\">\n        <button [id]=\"'btn_customerAddAppointment'\" Action action='addAppointment' (actionClick)=\"addAppointment()\">\n          <div class=\"img-block\">\n            <img class=\"img-disable\" src=\"assets/img/icon-cust-appointment-disable.svg\">\n            <img class=\"img-normal\" src=\"assets/img/icon-cust-appointment.svg\">\n          </div>\n          <div class=\"text-block\">\n            <p>{{ language.customerAppointment | translate }}</p>\n          </div>\n        </button>\n      </li>\n      <li class=\"list-item-block\" [ngClass]=\"DisplayData.tel.length == 0? ' disable': ''\">\n        <button [id]=\"'btn_customerCallPhone'\" Action action=\"customerCallPhone\" (actionClick)=\"callPhone()\">\n          <div class=\"img-block\">\n            <img class=\"img-disable\" src=\"assets/img/icon-cust-contact-disable.svg\">\n            <img class=\"img-normal\" src=\"assets/img/icon-cust-contact.svg\">\n          </div>\n          <div class=\"text-block\">\n            <p>{{ language.customerContact | translate }}</p>\n          </div>\n        </button>\n      </li>\n      <li class=\"list-item-block\" [ngClass]=\"isEmptyEdit? ' disable': ''\">\n        <button [id]=\"'btn_customerEdit'\" Action action=\"customerEdit\" (actionClick)=\"edit()\">\n          <div class=\"img-block\">\n            <img class=\"img-disable\" src=\"assets/img/icon-cust-edit-disable.svg\">\n            <img class=\"img-normal\" src=\"assets/img/icon-cust-edit.svg\">\n          </div>\n          <div class=\"text-block\">\n            <p>{{ language.customerEdit | translate }}</p>\n          </div>\n        </button>\n      </li>\n      <li class=\"list-item-block\" [ngClass]=\"isEmptyDel? ' disable': ''\">\n        <button [id]=\"'btn_customerDelete'\" Action action=\"customerDelete\" (actionClick)=\"delete()\" [disabled]=\"DisplayData.DataSource == 'OPUS'\">\n          <div class=\"img-block\">\n            <img class=\"img-disable\" src='assets/img/icon-cust-del-disable.svg'>\n            <img class=\"img-normal\" src=\"assets/img/icon-cust-del.svg\">\n          </div>\n          <div class=\"text-block\">\n            <p>{{ language.customerDelete | translate }}</p>\n          </div>\n        </button>\n\n      </li>\n    </ul>\n    <!-- end of link block -->\n    <!-- first card -->\n\n\n\n    <!-- Meta Group Detail -->\n    <app-ui-collapse-text1 class=\"card1-all-block\" [(isOpen)]=\"isCollapseOpen\" [(isCollapseBtnShow)]=\"isCollapseBtnShow\"\n      [translateEmpty]=\"language.empty | translate\" [isDataEmpty]=\"isEmptyGroupDetailInfo\">\n      <ng-container TextType=cardContent>\n        <app-ui-form-layout-advanced [isOnlyText]=\"true\">\n          <ng-container *ngFor=\"let group of rowMetaGroup\">\n            <app-ui-form-layout-row>\n              <ng-container *ngFor=\"let groupData of DisplayData[group.id]; index as i; first as isFirst\">\n                <app-ui-form-layout-col *ngIf=\"(group.grid.pc*(i+1))<=12\" [colPC]=\"group.grid.pc\"\n                  [colNB]=\"group.grid.nb\" [colPad]=\"group.grid.pad\" [colMobile]=\"group.grid.mobile\">\n                  <snd-ui-collapse-content-show>\n                    <app-ui-info-text1 *ngIf=\"isFirst\" [imgSrc]=\"group.icon\">\n                      <ng-container textType=\"title\">\n                        {{DisplayData[group.id][i][group.groupColumns[0].id] | translate}}\n                      </ng-container>\n                      <ng-container textType=\"text\" *ngFor=\"let col of group.groupColumns.slice(1);\">\n                        {{DisplayData[group.id][i][col.id] | translate}}\n                      </ng-container>\n                    </app-ui-info-text1>\n                    <app-ui-info-text1 *ngIf=\"!isFirst\">\n                      <ng-container textType=\"title\">\n                        {{DisplayData[group.id][i][group.groupColumns[0].id] | translate}}\n                      </ng-container>\n                      <ng-container textType=\"text\" *ngFor=\"let col of group.groupColumns.slice(1);\">\n                        {{DisplayData[group.id][i][col.id] | translate}}\n                      </ng-container>\n                    </app-ui-info-text1>\n                  </snd-ui-collapse-content-show>\n                </app-ui-form-layout-col>\n              </ng-container>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <ng-container *ngFor=\"let groupData of DisplayData[group.id]; index as i; first as isFirst\">\n                <app-ui-form-layout-col *ngIf=\"(group.grid.pc*(i+1))>12\" [colPC]=\"group.grid.pc\" [colNB]=\"group.grid.nb\"\n                  [colPad]=\"group.grid.pad\" [colMobile]=\"group.grid.mobile\">\n                  <snd-ui-collapse-content-detail [(isOpen)]=\"isCollapseOpen\">\n                    <app-ui-info-text1 *ngIf=\"isFirst\" [imgSrc]=\"group.icon\">\n                      <ng-container textType=\"title\">\n                        {{DisplayData[group.id][i][group.groupColumns[0].id]}}\n                      </ng-container>\n                      <ng-container textType=\"text\" *ngFor=\"let col of group.groupColumns.slice(1);\">\n                        {{DisplayData[group.id][i][col.id]}}\n                      </ng-container>\n                    </app-ui-info-text1>\n                    <app-ui-info-text1 *ngIf=\"!isFirst\">\n                      <ng-container textType=\"title\">\n                        {{DisplayData[group.id][i][group.groupColumns[0].id]}}\n                      </ng-container>\n                      <ng-container textType=\"text\" *ngFor=\"let col of group.groupColumns.slice(1);\">\n                        {{DisplayData[group.id][i][col.id]}}\n                      </ng-container>\n                    </app-ui-info-text1>\n                  </snd-ui-collapse-content-detail>\n                </app-ui-form-layout-col>\n              </ng-container>\n            </app-ui-form-layout-row>\n          </ng-container>\n        </app-ui-form-layout-advanced>\n      </ng-container>\n    </app-ui-collapse-text1>\n    <!-- end of Meta Group Detail -->\n\n\n    <!-- Meta Detail -->\n    <app-ui-collapse-card1 [isHide]=\"isCardExtendTemplateNull\" [isDataEmpty]=\"isEmptyDetailInfo\"\n      [tagText]=\"[language.customerDetail | translate]\"\n      [emptyText]=\"[language.noClick | translate, language.noInformation | translate]\">\n      <ng-container textType=\"collapseContentOrigin\">\n        <app-ui-form-layout-row *ngFor=\"let row of rowMetaWithoutGroup\">\n          <app-ui-form-layout-col *ngFor=\"let col of row\" [colPC]=\"col.grid.pc\" [colNB]=\"col.grid.nb\"\n            [colPad]=\"col.grid.pad\" [colMobile]=\"col.grid.mobile\">\n            <app-ui-info-text2>\n              <ng-container textType=\"title\">{{col.name|translate }}</ng-container>\n              <ng-container textType=\"text\">{{DisplayData[col.id]?DisplayData[col.id]:dash}}</ng-container>\n            </app-ui-info-text2>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n      </ng-container>\n    </app-ui-collapse-card1>\n    <!-- end of Meta Detail -->\n  </div>\n</ng-container>\n\n<ng-template #noCustomerData>\n  <div class=\"layout-detail-block style-has-top-space skelton-layout\">\n    <div class=\"theme-loading\" style=\"background-image:url('assets/img/loading-customer-main.svg')\">\n      <!-- profile -->\n      <div class=\"space-ui-element profile-block\">\n        <div class=\"img-block\">\n          <div class=\"skeleton-round \"></div>\n        </div>\n        <div class=\"content-block\">\n          <div class=\"tag-block\">\n            <div class=\"skelton-text  \"></div>\n          </div>\n          <div class=\"name-block\">\n            <div class=\"skelton-text \"></div>\n          </div>\n          <div class=\"sm-text\">\n            <div class=\"skelton-text \"></div>\n          </div>\n        </div>\n      </div>\n      <!-- end of profile -->\n      <!-- link list -->\n      <ul class=\"ui-list-block\">\n        <li class=\"list-item-block\" *ngFor='let number of [0,1,2,3]'>\n          <div class=\"skelton-img-text\">\n            <div class=\"skelton-square\">\n              <div class=\"skeleton-round \"></div>\n            </div>\n            <div class=\"skelton-text \"></div>\n          </div>\n        </li>\n      </ul>\n      <!-- end of link list -->\n      <!-- line -->\n      <div class=\"skelton-line-block\">\n        <div class=\"skelton-line \"></div>\n      </div>\n      <!-- end of line -->\n\n      <!-- list data -->\n      <div class=\"card-text\">\n        <div class=\"left-part\">\n          <div class=\"data-group\">\n\n            <div class=\"skelton-text   wd-short\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n            <div class=\"skelton-text   wd-short\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n          </div>\n        </div>\n        <div class=\"right-part\">\n          <div class=\"data-group\">\n            <div class=\"skelton-text   wd-short\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n            <div class=\"skelton-text   wd-short\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n          </div>\n        </div>\n      </div>\n\n      <!-- end of list data -->\n\n      <!-- line -->\n      <!-- <div class=\"skelton-line-block\">\n        <div class=\"skelton-line \"></div>\n      </div> -->\n      <!-- end of line -->\n\n\n\n    </div>\n  </div>\n  <!-- Customer data is empty -->\n</ng-template>\n",
                    styles: [".skelton-layout{margin:0}.skelton-row{display:flex}.skelton-row.align-side{justify-content:space-between}.align-right{margin:0 0 15px auto}.align-center{margin:15px auto}.skeleton-round{border-radius:50%;background-color:#ececec;max-width:100%;max-height:100%;width:100%;height:100%}.skelton-square{display:inline-block;width:30px;height:30px}.skelton-text{min-height:1rem;max-width:100%;width:100%;background-color:#ececec;display:block;margin-bottom:15px}.skelton-line{display:inline-block;max-width:100%;width:100%;background-color:#ececec;height:1px}.skelton-img-text .skelton-square{margin-bottom:10px}::ng-deep ion-skeleton-text{background-color:#ececec}::ng-deep ion-skeleton-text span{opacity:1;background-color:#ececec}.skelton-animate{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(194,194,194,.3);background:linear-gradient(to right,rgba(194,194,194,.3) 8%,rgba(194,194,194,.2) 18%,rgba(194,194,194,.3) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}@keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}.layout-detail-block.skelton-layout{margin:0 -40px 0 0}@media (max-width:767px){.layout-detail-block.skelton-layout{margin-right:-40px}.layout-detail-block.skelton-layout .profile-block .content-block{max-width:70%}.layout-detail-block.skelton-layout .theme-loading .ui-list-block .list-item-block{margin-right:0}}.layout-detail-block .skelton-line-block{padding-right:40px}.layout-detail-block .theme-loading{background-size:contain;background-position:bottom right;background-repeat:no-repeat;width:100%;min-height:100vh;padding-right:40px}.layout-detail-block .theme-loading .profile-block .img-block{display:inline-block;max-width:100%;width:63px;height:63px;padding-right:0;margin-right:20px}.layout-detail-block .theme-loading .profile-block .tag-block{max-width:15%}.layout-detail-block .theme-loading .profile-block .name-block{max-width:30%;padding-bottom:0}.layout-detail-block .theme-loading .profile-block .sm-text{max-width:55%}.layout-detail-block .theme-loading .profile-block ::ng-deep ion-skeleton-text{margin-bottom:10px}.layout-detail-block .theme-loading .ui-list-block{margin-bottom:20px}.layout-detail-block .theme-loading .ui-list-block .list-item-block{margin-right:5%}.layout-detail-block .theme-loading .ui-list-block .skelton-img-text .skelton-text{max-width:80%;margin:0 auto}.layout-detail-block .theme-loading .skelton-square{width:3rem;height:3rem}.layout-detail-block .theme-loading .card-text{display:flex}.layout-detail-block .theme-loading .card-text .left-part{width:40%;box-sizing:border-box;padding:2rem}.layout-detail-block .theme-loading .card-text .right-part{width:60%;box-sizing:border-box;padding:2rem}.layout-detail-block .theme-loading .card-text .wd-short{max-width:5rem}.layout-detail-block .theme-loading .card-text .wd-long{max-width:100%}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.space-detail{padding-right:40px;display:block}@media (max-width:1023px){.space-detail{padding-right:40px}}.layout-detail-block{background-color:#f5f5f5;padding-left:40px}.layout-detail-block .space-detail:not(.layout-nodata):last-child{padding-bottom:100px}.layout-detail-block .layout-nodata{padding-bottom:0}@media (min-width:768px){.layout-detail-block.style-has-right-space{padding-right:40px}.layout-detail-block.style-has-right-space.skelton-layout{padding-right:0}}.layout-detail-block.style-has-top-space{padding-top:40px}@media (max-width:767px){.space-detail{padding-right:5px}.layout-detail-block{padding-left:5px}.layout-detail-block.style-has-right-space{padding-right:5px}.layout-detail-block.style-has-top-space{padding-top:30px}}.layout-detail-block.style-has-btm-space{padding-bottom:100px}.space-inner-lg{padding-left:50px;padding-right:50px}@media (max-width:767px){.space-inner-lg{padding-left:5px;padding-right:5px}}.profile-img-block img{border-radius:50%;display:inline-block}.profile-img-block .active-img,.profile-img-block.active .normal-img{display:none}.profile-img-block.active .active-img{display:block}.profile-block{display:flex;justify-content:flex-start;flex-wrap:wrap;width:100%;position:relative}.profile-block .profile-img-block{padding-right:15px}.profile-block .profile-img-block img{width:60px;height:60px}.profile-block .content-block{max-width:calc(100% - 40px - 10px - 60px - 15px);width:100%}.profile-block .content-block ::ng-deep .tag-block{margin-bottom:5px}.profile-block .content-block .name-block{font-size:1.25rem;font-weight:700;padding-bottom:5px;line-height:28px;white-space:normal;word-wrap:break-word}.profile-block .content-block .name-block.noTagBlock{padding-top:15px}.profile-block .sm-text{font-size:.875rem;line-height:28px;width:100%}.profile-block .sm-text .text-focus{color:#003781;font-weight:700;font-size:1.125rem;display:inline-block;padding:0 5px;vertical-align:middle}.profile-block .sm-text .detail-text{display:inline-flex;align-items:center;flex-wrap:wrap}.profile-block .age{display:inline-block;line-height:28px;min-height:28px;margin-right:5px}.profile-block .like-block{position:absolute;top:0;right:0}.profile-block .like-block ::ng-deep img{max-width:40px;width:100%}@media (max-width:768px){.profile-block{padding-left:15px;padding-right:6px;position:static}.profile-block .like-block{right:10px;top:10px}.profile-block .profile-img-block{padding-right:10px}.profile-block .profile-img-block img{width:45px;height:45px}.profile-block .content-block{max-width:calc(100% - 45px - 10px)}.profile-block .content-block .name-block{padding-right:50px}.profile-block .content-block .name-block.noTagBlock{padding-top:10px}}@media screen and (min-width:1025px){.profile-block .profile-img-block{width:calc(caculate-vw($wd-profile-img) + 15px)}.profile-block .profile-img-block img{width:6vw;height:6vw}.profile-block .content-block{max-width:calc(100% - 4vw - 10px - 6vw - 15px)}.profile-block .like-block ::ng-deep img{max-width:4vw}}.ui-list-block{display:flex;list-style-type:none;margin-right:-30px;justify-content:center;align-items:baseline}.ui-list-block button{border:none;background-color:transparent;padding:0}.ui-list-block .list-item-block{width:25%;max-width:5.625rem;text-align:center;margin-right:30px}.ui-list-block .list-item-block .img-block{max-width:40px;width:100%;margin:0 auto}.ui-list-block .list-item-block .img-block img{max-width:100%;width:100%}.ui-list-block .list-item-block.disable{pointer-events:none}.ui-list-block .list-item-block.disable .text-block{color:#414141}.ui-list-block .list-item-block .img-disable,.ui-list-block .list-item-block.disable .img-normal{display:none}.ui-list-block .list-item-block.disable .img-disable{display:inline-block;pointer-events:none}.ui-list-block .list-item-block .text-block p{color:#414141;line-height:normal;font-size:.875rem;margin:4px 0 0;padding:0 4px}@media (max-width:767px){.ui-list-block{flex-wrap:wrap;margin-right:0}.ui-list-block .list-item-block{max-width:100px;margin-right:0}}@media (max-width:374px){.ui-list-block .list-item-block .text-block p{font-size:.75rem;padding-right:10px}}@media screen and (min-width:1025px){.ui-list-block .list-item-block{max-width:9vw}.ui-list-block .list-item-block .img-block{max-width:4vw;width:4vw}}.card1-all-block::ng-deep .card-content-block{padding-top:20px}.card1-all-block::ng-deep .gas-row-block{margin-top:0}.card1-all-block::ng-deep .gas-row-block+.gas-row-block{margin-top:4px}@media (min-width:769px){.card1-all-block::ng-deep .gas-layout-form{box-sizing:border-box;padding-left:51px;padding-right:64px}.card1-all-block::ng-deep .gas-row-block{margin-top:0}}@media (max-width:767px){.card1-all-block::ng-deep .gas-layout-form{padding-left:15px}.card1-all-block::ng-deep .card-content-block app-ui-info-text1 .info-unit-block .text-block p{padding-left:10px}}"]
                }] }
    ];
    CustomerDetailComponent.ctorParameters = function () { return [
        { type: DateUtils },
        { type: ProfileCodeService },
        { type: ChangeDetectorRef },
        { type: MetaService },
        { type: CustomerUtils },
        { type: InputExecutor },
        { type: DefaultMetaParser },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerDetailMetaControllerToken,] }] }
    ]; };
    CustomerDetailComponent.propDecorators = {
        onEditDetail: [{ type: Output }],
        onCallPhone: [{ type: Output }],
        onDeleteDetail: [{ type: Output }],
        onAddAppointment: [{ type: Output }],
        followChange: [{ type: Output }],
        data: [{ type: Input }],
        detailPostTemp: [{ type: ViewChildren, args: ['detailPostTemp',] }]
    };
    return CustomerDetailComponent;
}(DisplayMetaComponent));
export { CustomerDetailComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItZGV0YWlsL2N1c3RvbWVyLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3SSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBOEIsTUFBTSxrQkFBa0IsQ0FBQztBQUNuSyxPQUFPLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXpGO0lBSzZDLG1EQUFvQjtJQXNGL0QsaUNBQ1UsU0FBb0IsRUFDbEIsa0JBQXNDLEVBQ3hDLGFBQWdDLEVBQzlCLFdBQXdCLEVBQzFCLGFBQTRCLEVBQ3BDLGFBQTRCLEVBQzVCLFVBQTZCLEVBQ2MsUUFBa0IsRUFDRSxvQkFBb0M7UUFUckcsWUFXRSxrQkFBTSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQyxTQUNsRTtRQVhTLGVBQVMsR0FBVCxTQUFTLENBQVc7UUFDbEIsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN4QyxtQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDOUIsaUJBQVcsR0FBWCxX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QStEOztJQUUvRCxpREFBOEI7Ozs7O0lBZTVCLDRDQUE0Qjs7Ozs7SUFDNUIscURBQWdEOzs7OztJQUNoRCxnREFBd0M7Ozs7O0lBQ3hDLDhDQUFrQzs7Ozs7SUFDbEMsZ0RBQW9DOzs7OztJQUdwQywyQ0FBNkQ7Ozs7O0lBQzdELHVEQUFtRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmLCBPcHRpb25hbCwgSW5qZWN0LCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVV0aWxzLCBTdHJpbmdVdGlscywgTGFuZ3VhZ2UsIE1ldGFTZXJ2aWNlLCBQcm9maWxlQ29kZVNlcnZpY2UsIElucHV0RXhlY3V0b3IsIERlZmF1bHRNZXRhUGFyc2VyLCBNZXRhQ29sdW1uLCBNZXRhQ29udHJvbGxlciB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgc2hvd1J1bGVUb2tlbiwgRGlzcGxheU1ldGFDb21wb25lbnQgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IHNob3dSdWxlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21lclV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY3VzdG9tZXItdXRpbHMnO1xuaW1wb3J0IHsgY3VzdG9tZXJEZXRhaWxNZXRhQ29udHJvbGxlclRva2VuIH0gZnJvbSAnLi4vLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWN1c3RvbWVyLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lckRldGFpbENvbXBvbmVudCBleHRlbmRzIERpc3BsYXlNZXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAT3V0cHV0KClcbiAgcHJpdmF0ZSBvbkVkaXREZXRhaWw6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgcHJpdmF0ZSBvbkNhbGxQaG9uZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIG9uRGVsZXRlRGV0YWlsOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgb25BZGRBcHBvaW50bWVudDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIGZvbGxvd0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgJ2lzRm9sbG93JzogYm9vbGVhbiwgJ2NsaWVudElEJzogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cblxuXG4gIHB1YmxpYyBEaXNwbGF5RGF0YSA9IG51bGw7XG4gIHB1YmxpYyByZWFkb25seSBkYXNoOiBzdHJpbmcgPSAnLSAtJztcblxuICBASW5wdXQoKVxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuICBzZXQgZGF0YSh2YWx1ZSkge1xuICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhcImRldGFpbCBTZXQgRGF0YTpcIiwgdmFsdWUpO1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5DbGllbnRJRCkge1xuICAgICAgdGhpcy53YWl0VW50aWxNZXRhTG9hZGVkKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMub25EYXRhVXBkYXRlZCgpO1xuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0TWV0YUlEKCkge1xuICAgIHJldHVybiAnY3VzdG9tZXJEZXRhaWwnO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldE1ldGFQYXJhbXMoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgcm93TWV0YVdpdGhvdXRHcm91cCgpOiBBcnJheTxBcnJheTxNZXRhQ29sdW1uPj4ge1xuICAgIHJldHVybiB0aGlzLm1ldGFDb25maWcuUm93cy5maWx0ZXIoeCA9PiB4Lm1hcCh5ID0+IHkudHlwZSAhPT0gJ0dyb3VwJykucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICYmIGN1ciwgdHJ1ZSkpO1xuICB9O1xuXG4gIGdldCByb3dNZXRhR3JvdXAoKTogQXJyYXk8TWV0YUNvbHVtbj4ge1xuICAgIHJldHVybiB0aGlzLm1ldGFDb25maWcuQ29sdW1ucy5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdHcm91cCcpO1xuICB9XG5cbiAgZ2V0IGZvbGxvd1N0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVtcIklzRm9sbG93XCJdID09PSAnWSdcbiAgfVxuXG5cbiAgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuXG4gIC8vIGVtcHR5IHN0YXR1c1xuICBwdWJsaWMgaXNFbXB0eUFwcG9pbnRtZW50OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0VtcHR5RWRpdDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNFbXB0eURlbDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNFbXB0eURldGFpbEluZm86IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzRW1wdHlHcm91cERldGFpbEluZm86IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzRW1wdHlDb250YWN0Tm90ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNDb2xsYXBzZUJ0blNob3c6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8vIGNhcmQyIGV4dGVuZCB0ZW1wbGF0ZSBpcyBudWxsIG9yIG5vdFxuICBwdWJsaWMgaXNDYXJkRXh0ZW5kVGVtcGxhdGVOdWxsID0gdHJ1ZTtcbiAgQFZpZXdDaGlsZHJlbignZGV0YWlsUG9zdFRlbXAnKSBkZXRhaWxQb3N0VGVtcDogUXVlcnlMaXN0PGFueT47XG4gIC8vY2FyZDIgY29sbGFwc2UgaXNPcGVuIG9yIG5vdFxuICBwdWJsaWMgaXNDb2xsYXBzZU9wZW4gPSBmYWxzZTtcblxuICBwdWJsaWMgZ2V0IGlzSGFzQWdlUmFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGEgJiYgISF0aGlzLl9kYXRhW1wiQWdlUmFuZ2VcIl07XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzSGFzQ29udGFjdEZyZXF1YW5jeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YSAmJiAhIXRoaXMuX2RhdGFbXCJDb250YWN0RnJlcXVhbmN5XCJdO1xuICB9XG5cblxuXG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRhdGVVdGlsczogRGF0ZVV0aWxzLFxuICAgIHByb3RlY3RlZCBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByb3RlY3RlZCBtZXRhU2VydmljZTogTWV0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjdXN0b21lclV0aWxzOiBDdXN0b21lclV0aWxzLFxuICAgIGlucHV0RXhlY3V0b3I6IElucHV0RXhlY3V0b3IsXG4gICAgbWV0YVBhcnNlcjogRGVmYXVsdE1ldGFQYXJzZXIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChzaG93UnVsZVRva2VuKSBwcml2YXRlIHNob3dSdWxlOiBzaG93UnVsZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGN1c3RvbWVyRGV0YWlsTWV0YUNvbnRyb2xsZXJUb2tlbikgcHJpdmF0ZSBjdXN0b21NZXRhQ29udHJvbGxlcjogTWV0YUNvbnRyb2xsZXJcbiAgKSB7XG4gICAgc3VwZXIobWV0YVNlcnZpY2UsIHByb2ZpbGVDb2RlU2VydmljZSwgbWV0YVBhcnNlciwgaW5wdXRFeGVjdXRvcik7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJjdXN0b21lckRldGFpbCBuZ09uaW5pdCFcIik7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG5cbiAgb25EYXRhVXBkYXRlZCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImN1c3RvbWVyRGV0YWlsIG9uRGF0YVVwZGF0ZWQhXCIsIHRoaXMuX2RhdGEpO1xuICAgIHN1cGVyLm9uRGF0YVVwZGF0ZWQoKTtcblxuICAgIC8vY2hlY2sgZGF0YXNvdXJjZSBpcyBmcm9tIE9QVVNcbiAgICB0aGlzLmlzRW1wdHlEZWwgPSB0aGlzLl9kYXRhLkRhdGFTb3VyY2UgPT0gJ09QVVMnO1xuXG4gICAgdGhpcy5jb252ZXJ0RW1wdHlWYWxUb0Rpc3BsYXlUZXh0KHRoaXMuX2RhdGEpO1xuICAgIHRoaXMuY2hlY2tJbmZvSXNFbXB0eSgpO1xuICAgIHRoaXMuY2hhbmdlQ29sbGF0ZUJ1dHRvbigpO1xuXG4gICAgdGhpcy5EaXNwbGF5RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RhdGEpO1xuICAgIGlmICh0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyKVxuICAgICAgdGhpcy5jdXN0b21NZXRhQ29udHJvbGxlci5vbkRhdGFVcGRhdGVkKHRoaXMuX2RhdGEpO1xuICAgIHRoaXMuY2hhbmdlRGV0Y3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgY29uc29sZS5sb2coXCJhZnRlciBjdXN0b21lckRldGFpbCBvbkRhdGFVcGRhdGVkIVwiLCB0aGlzLkRpc3BsYXlEYXRhKTtcbiAgfVxuXG5cblxuXG4gIHByaXZhdGUgY2hhbmdlQ29sbGF0ZUJ1dHRvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcImNoYW5nZUNvbGxhdGVCdXR0b24gTWV0YTpcIiwgdGhpcy5tZXRhQ29uZmlnKTtcbiAgICB0aGlzLmlzQ29sbGFwc2VCdG5TaG93ID0gdGhpcy5tZXRhQ29uZmlnLkNvbHVtbnMuZmlsdGVyKHggPT4geC50eXBlID09PSBcIkdyb3VwXCIpXG4gICAgICAubWFwKHggPT4gdGhpcy5fZGF0YVt4LmlkXS5sZW5ndGggPiAoMTIgLyB4LmdyaWQucGMpKVxuICAgICAgLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyB8fCBjdXIsIGZhbHNlKTtcblxuICAgIGNvbnNvbGUuZGVidWcoJ2lzQ29sbGFwc2VCdG5TaG93JywgdGhpcy5pc0NvbGxhcHNlQnRuU2hvdyk7XG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBjaGVja0luZm9Jc0VtcHR5KCkge1xuICAgIC8vaWYgZGV0YWlsIGluZm8gaXMgZW1wdHkgLCBkaXNwbGF5IG5vIGRhdGEgc3RhdHVzICAgIFxuICAgIHRoaXMuaXNFbXB0eURldGFpbEluZm8gPVxuICAgICAgdGhpcy5tZXRhQ29uZmlnLkNvbHVtbnMuZmlsdGVyKHggPT4geC50eXBlICE9PSBcIkdyb3VwXCIpXG4gICAgICAgIC5tYXAoeCA9PiB0aGlzLl9kYXRhW3guaWRdID09PSBudWxsIHx8IHRoaXMuX2RhdGFbeC5pZF0gPT09IHVuZGVmaW5lZCB8fCBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuX2RhdGFbeC5pZF0pIHx8IHRoaXMuX2RhdGFbeC5pZF0gPT09IHRoaXMuZGFzaClcbiAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyAmJiBjdXIsIHRydWUpO1xuXG4gICAgdGhpcy5pc0VtcHR5R3JvdXBEZXRhaWxJbmZvID0gdGhpcy5tZXRhQ29uZmlnLkNvbHVtbnMuZmlsdGVyKHggPT4geC50eXBlID09PSBcIkdyb3VwXCIpXG4gICAgICAubWFwKHggPT4gdGhpcy5fZGF0YVt4LmlkXS5sZW5ndGggPT09IDApXG4gICAgICAucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICYmIGN1ciwgdHJ1ZSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImlzRW1wdHlEZXRhaWxJbmZvOlwiLCB0aGlzLmlzRW1wdHlEZXRhaWxJbmZvKTtcbiAgICBjb25zb2xlLmxvZyhcImlzRW1wdHlHcm91cERldGFpbEluZm86XCIsIHRoaXMuaXNFbXB0eUdyb3VwRGV0YWlsSW5mbyk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRFbXB0eVZhbFRvRGlzcGxheVRleHQoY3VzdG9tZXJEZXRhaWw6IGFueSkge1xuICAgIC8vaWYgbm90IGRhdGEgc2V0IGRlZmF1bHQgdmFsdWUoPz8gb3IgLS0gLS0pXG4gICAgY29uc29sZS5sb2coXCJjb252ZXJ0RW1wdHlWYWxUb0Rpc3BsYXlUZXh0OiBcIiwgY3VzdG9tZXJEZXRhaWwpO1xuICAgIGN1c3RvbWVyRGV0YWlsLkFnZVJhbmdlID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dChcIkN1c3RvbWVyX0FnZVwiLCBjdXN0b21lckRldGFpbC5BZ2VSYW5nZSk7XG4gICAgY3VzdG9tZXJEZXRhaWwuQ29udGFjdEZyZXF1YW5jeSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoXCJDdXN0b21lcl9Db250YWN0RnJlcXVhbmN5XCIsIGN1c3RvbWVyRGV0YWlsLkNvbnRhY3RGcmVxdWFuY3kpO1xuICAgIGN1c3RvbWVyRGV0YWlsLnNob3dOYW1lID0gdGhpcy5jb252ZXJ0TmFtZVRvU2hvdyhjdXN0b21lckRldGFpbC5GaXJzdE5hbWUsIGN1c3RvbWVyRGV0YWlsLkxhc3ROYW1lKTtcbiAgICBjdXN0b21lckRldGFpbC5hZGRyZXNzLmZvckVhY2goYWRkciA9PiB7XG4gICAgICBhZGRyW1wiQWRkcmVzc0Rpc3BsYXlcIl0gPSB0aGlzLnRvRnVsbEFkZHJlc3MoT2JqZWN0LmFzc2lnbih7fSwgYWRkcikpO1xuICAgIH0pO1xuICAgIHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zLmZpbHRlcih4ID0+IHgudHlwZSAhPT0gXCJHcm91cFwiKS5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICBpZiAoY29sLmlkID09PSAnQmlydGhkYXlEaXNwbGF5JylcbiAgICAgICAgY3VzdG9tZXJEZXRhaWwuQmlydGhkYXlEaXNwbGF5ID0gU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lckRldGFpbC5CaXJ0aGRheSkgPyB0aGlzLnRvQmlydGhkYXlTdHIoKSA6IHRoaXMuZGFzaDtcbiAgICAgIGVsc2VcbiAgICAgICAgY3VzdG9tZXJEZXRhaWxbY29sLmlkXSA9IFN0cmluZ1V0aWxzLmlzRW1wdHkoY3VzdG9tZXJEZXRhaWxbY29sLmlkXSkgPyB0aGlzLmRhc2ggOiBjdXN0b21lckRldGFpbFtjb2wuaWRdO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0JpcnRoZGF5U3RyKCkge1xuXG4gICAgaWYgKHRoaXMuX2RhdGEuQmlydGhkYXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuc2hvd1J1bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1J1bGUuY29udmVydERhdGUobmV3IERhdGUodGhpcy5fZGF0YS5CaXJ0aGRheSkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVVdGlscy50b0RhdGVTdHJpbmcobmV3IERhdGUodGhpcy5fZGF0YS5CaXJ0aGRheSksICd5eXl5LU1NLWRkJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b0Z1bGxBZGRyZXNzKGFkZHJlc3NPYmo6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2hvd1J1bGUpXG4gICAgICByZXR1cm4gdGhpcy5zaG93UnVsZS5jb252ZXJ0QWRkcmVzcyhhZGRyZXNzT2JqKTtcbiAgICBlbHNlIHtcbiAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoYWRkcmVzc09iai5Db3VudHJ5KSkgYXJyYXkucHVzaChhZGRyZXNzT2JqLkNvdW50cnkpO1xuICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoYWRkcmVzc09iai5DaXR5KSkgYXJyYXkucHVzaChhZGRyZXNzT2JqLkNpdHkpO1xuICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoYWRkcmVzc09iai5BcmVhKSkgYXJyYXkucHVzaChhZGRyZXNzT2JqLkFyZWEpO1xuICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoYWRkcmVzc09iai5aaXBjb2RlKSkgYXJyYXkucHVzaChhZGRyZXNzT2JqLlppcGNvZGUpO1xuICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoYWRkcmVzc09iai5BZGRyZXNzKSkgYXJyYXkucHVzaChhZGRyZXNzT2JqLkFkZHJlc3MpO1xuICAgICAgcmV0dXJuIGFycmF5LmpvaW4oJywgJyk7XG4gICAgfVxuICB9XG5cbiAgZWRpdCgpIHtcbiAgICB0aGlzLm9uRWRpdERldGFpbC5lbWl0KHRoaXMuX2RhdGEuQ2xpZW50SUQpO1xuICB9XG5cbiAgZGVsZXRlKCkge1xuICAgIHRoaXMub25EZWxldGVEZXRhaWwuZW1pdCh0aGlzLl9kYXRhLkNsaWVudElEKTtcbiAgfVxuXG4gIGNhbGxQaG9uZSgpIHtcbiAgICB0aGlzLm9uQ2FsbFBob25lLmVtaXQodGhpcy5fZGF0YS5DbGllbnRJRCk7XG4gIH1cblxuICBhZGRBcHBvaW50bWVudCgpIHtcbiAgICB0aGlzLm9uQWRkQXBwb2ludG1lbnQuZW1pdCh0aGlzLl9kYXRhLkNsaWVudElEKTtcbiAgfVxuXG4gIHRyYWNrQnlGbihpbmRleCwgaXRlbSkge1xuICAgIHJldHVybiBpdGVtLm5hbWU7XG4gIH1cblxuXG4gIGlzRm9sbG93Q2hhbmdlKGlzRm9sbG93OiBib29sZWFuKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnaXNGb2xsb3dDaGFuZ2UnLCBpc0ZvbGxvdyk7XG4gICAgLy8gZGlzcGxheSBuZXcgZm9sbG93IHN0YXRlIGZpcnN0XG4gICAgdGhpcy5fZGF0YVtcIklzRm9sbG93XCJdID0gaXNGb2xsb3cgPyBcIllcIiA6IFwiTlwiO1xuICAgIHRoaXMuY2hhbmdlRGV0Y3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAvL291cHV0IGZvbGxvdyBkZXRhaWwgY2hhbmdlIHN0YXR1c1xuICAgIHRoaXMuZm9sbG93Q2hhbmdlLmVtaXQoeyAnaXNGb2xsb3cnOiBpc0ZvbGxvdywgXCJjbGllbnRJRFwiOiB0aGlzLl9kYXRhLkNsaWVudElEIH0pO1xuXG5cbiAgfVxuXG4gIHByaXZhdGUgY29udmVydE5hbWVUb1Nob3coZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbWVyVXRpbHMuY29udmVydE5hbWVUb1Nob3coZmlyc3ROYW1lLCBsYXN0TmFtZSk7XG4gIH1cblxufVxuIl19