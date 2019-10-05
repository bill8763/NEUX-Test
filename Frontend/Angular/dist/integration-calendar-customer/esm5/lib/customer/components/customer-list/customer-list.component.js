/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { StringUtils, Language } from '@allianzSND/core';
import { CustomerUtils } from '../../utils/customer-utils';
var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(elementRef, customerUtils) {
        this.elementRef = elementRef;
        this.customerUtils = customerUtils;
        this.loadingFinish = true;
        this.refreshFinish = true;
        this.customerClick = new EventEmitter();
        this.customerLoad = new EventEmitter();
        this.customerRefresh = new EventEmitter();
        this._customerList = [];
        this.language = new Language();
    }
    Object.defineProperty(CustomerListComponent.prototype, "customerList", {
        get: /**
         * @return {?}
         */
        function () { return this._customerList; },
        set: /**
         * @param {?} customerList
         * @return {?}
         */
        function (customerList) {
            this._customerList = customerList;
            this.loadingFinish = true;
            this.refreshFinish = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerListComponent.prototype, "filterType", {
        get: /**
         * @return {?}
         */
        function () { return this._filterType; },
        set: /**
         * @param {?} filterType
         * @return {?}
         */
        function (filterType) {
            this._filterType = filterType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerListComponent.prototype, "onClickCustomerID", {
        get: /**
         * @return {?}
         */
        function () {
            return this._onClickCustomerID;
        },
        set: /**
         * @param {?} onClickCustomerID
         * @return {?}
         */
        function (onClickCustomerID) {
            this._onClickCustomerID = onClickCustomerID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerListComponent.prototype, "isDefaultData", {
        //Is Default Data(No Search Status)
        get: 
        //Is Default Data(No Search Status)
        /**
         * @return {?}
         */
        function () {
            return this.customerList.length == 0 && StringUtils.isNotEmpty(this.filterType) && this.filterType == 'NONE';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerListComponent.prototype, "showSearchNoData", {
        get: /**
         * @return {?}
         */
        function () {
            return this.customerList.length == 0 && StringUtils.isNotEmpty(this.filterType) && this.filterType == 'SEARCH';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CustomerListComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    CustomerListComponent.prototype.trackByClientID = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.clientID;
    };
    /**
     * @return {?}
     */
    CustomerListComponent.prototype.closeSlidingItems = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var item;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.debug('list closeSlidingItems');
                        item = this.elementRef.nativeElement.querySelector('ion-item-sliding');
                        if (!(item != null)) return [3 /*break*/, 3];
                        /// console.debug('item size',item.length);
                        console.debug('item', item);
                        return [4 /*yield*/, item.close()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, item.closeOpened()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} clientID
     * @return {?}
     */
    CustomerListComponent.prototype.onClickCustomer = /**
     * @param {?} clientID
     * @return {?}
     */
    function (clientID) {
        var _this = this;
        this._onClickCustomerID = clientID;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.closeSlidingItems();
        }), 300);
        /** @type {?} */
        var item = this.customerList.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.clientID == clientID; }));
        this.customerClick.emit(item[0]);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CustomerListComponent.prototype.loadCustomer = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        console.log('lazy load customer:', e);
        //Settimeout to animate loader
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.customerLoad.emit();
        }), 800);
    };
    /**
     * @return {?}
     */
    CustomerListComponent.prototype.refreshCustomer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //set timeout for refresh animation
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.customerRefresh.emit();
        }), 800);
    };
    /**
     * @param {?} customerItem
     * @return {?}
     */
    CustomerListComponent.prototype.convertNameToShow = /**
     * @param {?} customerItem
     * @return {?}
     */
    function (customerItem) {
        return this.customerUtils.convertNameToShow(customerItem.firstName, customerItem.lastName);
    };
    CustomerListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-customer-list',
                    template: "<div class=\"customer-list-block ui-list-data\">\n    <!-- CustomerList has data-->\n    <app-ui-infinite-scroll [syncFunction]=\"['CUSTOMER']\" (loadingCallback)=\"loadCustomer($event)\" (refreshCallback)=\"refreshCustomer()\"\n        [(loadingFinish)]=\"loadingFinish\" [(refreshFinish)]=\"refreshFinish\" [lazyLoading]=\"true\" [translateText]=\"language.loading | translate\">\n        \n        <ul class=\"list-data-block stop-scroll-block\">\n            <ng-container *ngIf=\"customerList && customerList.length != 0 ; else noCustomerData\">\n    \n            <li *ngFor=\" let customer of customerList; let i = index\" Action [action]=\"'customerListClickCustomer_'+customer.clientID\" (actionClick)=\"onClickCustomer(customer.clientID)\"  class=\"list-item-block\" [ngClass]= \"[(customer.clientID == onClickCustomerID ? ' active':''), (customer.isHighlight ? ' highlight':'')]\">\n                <div class=\"title-profile-block\">\n                    <div class=\"title-block\">\n                        <div class=\"like-block\">\n                            <app-ui-btn-like-add [isLike]=\"customer.isFollow\"></app-ui-btn-like-add>\n                        </div>\n                        <div class=\"title-text\">\n                            {{convertNameToShow(customer)}}\n                        </div>\n                        <app-ui-form-radio-tag [hidden]=\"!customer.tag\" class=\"tag-item\" [checked]=\"true\" [disabled]=\"true\" [ngClass]=\"customer.tag\">{{customer.tag | translate}}</app-ui-form-radio-tag>\n                    </div>\n                    <div class=\"profile-block\">\n                        <div class=\"img-profile-block\">\n                            <ng-container *ngIf=\"customer.isOtherSource; then otherSource else appSource\"></ng-container>\n\n                            <!-- datasource from Opus-->\n                            <ng-template #otherSource>\n                                <img src=\"assets/img/icon-customer-profile-sm.svg\">\n                            </ng-template>\n\n                            <!-- datasource from APP-->\n                            <ng-template #appSource>\n                                <img src=\"assets/img/icon-customer-profile-sm-active.svg\">\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"content-block\">\n                    <app-ui-progress [value]=\"customer.complementPercent\" [theme]=\"'sub'\" [isShowValue]=\"true\">{{language.customerInformation |translate }}</app-ui-progress>\n                </div>\n            </li>\n        </ng-container>\n        </ul>\n    </app-ui-infinite-scroll>\n\n    <ng-template #noCustomerData>\n        <!-- Customer no data without search-->\n        <ng-container *ngIf=\"isDefaultData ; else customerSearchNoData\">\n            <div class=\"skelton-layout stop-scroll-block\">\n                <div class=\"theme-loading\">\n                    <div class=\"text-desc\">\n                        <span class=\"text\">{{language.click |translate }}\n                        <span class=\"icon-img\"><img src=\"assets/img/icon-add-grey.svg\"></span>\n                        <span class=\"icon-img\"><img src=\"assets/img/icon-import-grey.svg\"></span>\n                        {{language.noEdit |translate }}</span>\n                    </div>\n                    <div class=\"loading-img\">\n                        <div class=\"skelton-data-block\">\n                            <div class=\"skelton-text wd-short align-right \"></div>\n                            <div class=\"skelton-text wd-long \"></div>\n                            <div class=\"skelton-row align-side\">\n                                <div class=\"skelton-text wd-md \"></div>\n                                <div class=\"skelton-text wd-short \"></div>\n                            </div>\n                            <div class=\"skelton-text wd-long \"></div>\n                        </div>\n                        <img src=\"assets/img/loading-customer-list.svg\">\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n\n        <!-- Customer no data after searching-->\n        <ng-template #customerSearchNoData>\n            <ng-container *ngIf=\"showSearchNoData ;  else customerFilterNoData\">\n                <div class=\"status-empty search-empty\">\n                    <div class=\"empty-block\">\n                        <div class=\"img-block\">\n                            <img src=\"assets/img/empty-img-search.svg\">\n                        </div>\n                        <div class=\"text-block\">\n                            <p>{{language.noSearch |translate }}</p>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </ng-template>\n\n        <!-- Customer no data after filtering-->\n        <ng-template #customerFilterNoData>\n                <div class=\"status-empty search-empty\">\n                    <div class=\"empty-block\">\n                        <div class=\"img-block\">\n                            <img src=\"assets/img/icon-filter-no-data.svg\">\n                        </div>\n                        <div class=\"text-block\">\n                          <p>{{language.noFilter |translate }}</p>\n                        </div>\n                    </div>\n                  </div>\n        </ng-template>\n            \n    </ng-template>\n\n  </div>\n",
                    styles: [".skelton-layout{margin:0}.skelton-row{display:flex}.skelton-row.align-side{justify-content:space-between}.align-right{margin:0 0 15px auto}.align-center{margin:15px auto}.skeleton-round{border-radius:50%;background-color:#ececec;max-width:100%;max-height:100%;width:100%;height:100%}.skelton-square{display:inline-block;width:30px;height:30px}.skelton-text{min-height:1rem;max-width:100%;width:100%;background-color:#ececec;display:block;margin-bottom:15px}.skelton-line{display:inline-block;max-width:100%;width:100%;background-color:#ececec;height:1px}.skelton-img-text .skelton-square{margin-bottom:10px}::ng-deep ion-skeleton-text{background-color:#ececec}::ng-deep ion-skeleton-text span{opacity:1;background-color:#ececec}.skelton-animate{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(194,194,194,.3);background:linear-gradient(to right,rgba(194,194,194,.3) 8%,rgba(194,194,194,.2) 18%,rgba(194,194,194,.3) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}@keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}.ui-list-data .skelton-layout{margin-top:30px}.ui-list-data .theme-loading{text-align:center}.ui-list-data .theme-loading .text-desc{padding-left:10%;padding-right:10%;text-align:center;display:inline-block;vertical-align:middle;margin-bottom:30px}.ui-list-data .theme-loading .text-desc .text{color:#414141;font-size:.875rem;line-height:28px;display:inline-block;vertical-align:middle}.ui-list-data .theme-loading .text-desc .text .icon-img{display:inline-block;vertical-align:middle;line-height:normal}.ui-list-data .theme-loading .loading-img{text-align:right;position:relative}.ui-list-data .theme-loading .loading-img .skelton-data-block{padding-left:10%;padding-right:10%;box-sizing:border-box;position:absolute;top:30px;width:100%}.ui-list-data .theme-loading .loading-img .skelton-text{margin-bottom:25px}.ui-list-data .theme-loading .loading-img .wd-short{max-width:30%}.ui-list-data .theme-loading .loading-img .wd-md{max-width:54%}.ui-list-data .theme-loading .loading-img .wd-long{max-width:70%}.ui-list-data .theme-loading .loading-img img{max-width:300px;width:100%}@media (max-width:1023px){.ui-list-data .theme-loading img{bottom:400px;top:auto}}@media (max-width:767px){.ui-list-data .theme-loading{height:100%;position:relative}.ui-list-data .theme-loading .text-desc{margin-bottom:30px}.ui-list-data .theme-loading .text-desc .text{max-width:185px;width:100%}.ui-list-data .theme-loading .loading-img{margin-top:0;height:100%;position:absolute;right:0;bottom:0;max-width:153px;width:100%}.ui-list-data .theme-loading .loading-img .wd-short{max-width:22%}.ui-list-data .theme-loading .loading-img .skelton-data-block{width:100%;max-width:253px;right:10px;top:60px;position:absolute}.ui-list-data .theme-loading .loading-img img{max-width:153px;margin-top:0;bottom:0;top:auto;position:absolute;right:0}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.status-empty.search-empty{padding-left:13%;padding-right:13%;box-sizing:border-box;text-align:center;display:flex;height:100%;min-height:calc(90vh - 59px - 56px - 24px);justify-content:center;align-items:center}.status-empty.search-empty .empty-block{text-align:center;margin:0 auto}.status-empty.search-empty .img-block{max-width:50px;width:100%;margin:0 auto}.status-empty.search-empty .text-block p{padding:0;font-size:1.125rem;line-height:28px}@media (max-width:767px){.status-empty.search-empty.search-empty{max-width:182px;width:100%;margin:0 auto;padding-left:0;padding-right:0}}.customer-list-block.ui-list-data{border-top:1px solid #c2c2c2;background-color:#fff}.customer-list-block.ui-list-data .title-sm-block{background-color:#ececec;display:inline-block;width:100%;padding:5px 15px 5px 6px}.customer-list-block.ui-list-data .title-sm-block p{padding:0;margin:0}.customer-list-block.ui-list-data .list-data-block{list-style-type:none;padding:0;border-bottom:1px solid #c2c2c2}.customer-list-block.ui-list-data .list-data-block .list-item-block{padding:12px 15px 12px 6px;box-sizing:border-box;position:relative}.customer-list-block.ui-list-data .list-data-block .list-item-block.highlight{background-color:#f5f5f5}@media (min-width:1024px){.customer-list-block.ui-list-data .list-data-block .list-item-block.active{background-color:#f1f9fa}}.customer-list-block.ui-list-data .list-data-block .list-item-block+.list-item-block{border-top:1px solid #c2c2c2}@media screen and (max-width:767px){.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block{display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center;width:100%;margin-bottom:5px}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .title-block .title-text{max-width:calc(100% - 27px)}}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .title-block{display:flex;justify-content:flex-start;align-items:center;margin-bottom:10px}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .title-block .title-text{font-size:.875rem;padding:0 3px;font-weight:700;display:inline-block;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .profile-block{text-align:right}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .profile-block .img-profile-block img{vertical-align:middle}@media screen and (max-width:767px){.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .title-block{margin-bottom:0;max-width:calc(100% - 14px)}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .profile-block{flex:0 0 14px}}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-whole-block .progress-value-block .progress-block{max-width:100%}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add{pointer-events:none;display:inline-block;max-width:12px;max-height:12px;width:100%;vertical-align:middle}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add{display:inline-block;width:12px}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add img{max-width:100%;width:12px}@media screen and (min-width:1025px){.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .profile-block .img-profile-block img{width:1.4vw}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add{max-width:1.2vw;max-height:1.2vw}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add{width:1.2vw}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add img{width:1.2vw}}.customer-list-block.ui-list-data .list-data-block .list-item-block .content-block{padding-left:12px}.customer-list-block.ui-list-data .list-data-block ::ng-deep .tag-item .ul-tag-block{position:relative;top:2px}.customer-list-block.ui-list-data .list-data-block ::ng-deep .tag-item ::ng-deep .tag-block{height:14px;padding-top:0;padding-bottom:0}.customer-list-block.ui-list-data ::ng-deep .progress-whole-block{padding-bottom:0}.customer-list-block.ui-list-data ::ng-deep .progress-text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}@media (min-width:769px){.customer-list-block.ui-list-data ::ng-deep .scroll-content{height:calc(100vh - (40px*2) - 140px)}}@media (max-width:767px){.customer-list-block.ui-list-data .tag-item{min-width:40px;padding-right:35px}.customer-list-block.ui-list-data .list-data-block .list-item-block{display:flex;flex-wrap:wrap}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-block{justify-content:flex-start;max-width:100%;width:100%;padding-right:0;box-sizing:border-box}.customer-list-block.ui-list-data .list-data-block .list-item-block .profile-block{max-width:20px;width:100%}.customer-list-block.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{max-width:100%;align-items:center}.customer-list-block.ui-list-data .list-data-block .list-item-block .content-block{width:100%}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-whole-block{display:flex;width:100%;justify-content:flex-end;padding-bottom:0!important}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-value-block{padding-left:10px}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-value-block .progress-block{display:none}}:host ::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - 80px - 63px - 56px - 10px)}::ng-deep html:not(.font-size_sm) .customer-list-block.ui-list-data .list-data-block .tag-item .tag-block{height:15px}@media (max-width:768px){.customer-list-block.ui-list-data .list-data-block .tag-item{padding-right:0;margin-right:25px;width:52px}.customer-list-block.ui-list-data .skelton-layout{height:calc(100vh - 55px - 55px - 134px);overflow-y:auto}:host ::ng-deep app-ui-infinite-scroll{background-color:#fff}:host ::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - 55px - 55px - 134px);height:100%}@supports (top:constant(safe-area-inset-top)){:host ::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom) - 55px - 55px - 134px)}}@supports (top:env(safe-area-inset-top)){:host ::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 55px - 55px - 134px)}}}"]
                }] }
    ];
    CustomerListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: CustomerUtils }
    ]; };
    CustomerListComponent.propDecorators = {
        customerClick: [{ type: Output }],
        customerLoad: [{ type: Output }],
        customerRefresh: [{ type: Output }],
        customerList: [{ type: Input }],
        filterType: [{ type: Input }],
        onClickCustomerID: [{ type: Input }]
    };
    return CustomerListComponent;
}());
export { CustomerListComponent };
if (false) {
    /** @type {?} */
    CustomerListComponent.prototype.loadingFinish;
    /** @type {?} */
    CustomerListComponent.prototype.refreshFinish;
    /** @type {?} */
    CustomerListComponent.prototype.customerClick;
    /** @type {?} */
    CustomerListComponent.prototype.customerLoad;
    /** @type {?} */
    CustomerListComponent.prototype.customerRefresh;
    /**
     * @type {?}
     * @private
     */
    CustomerListComponent.prototype._customerList;
    /**
     * @type {?}
     * @private
     */
    CustomerListComponent.prototype._filterType;
    /** @type {?} */
    CustomerListComponent.prototype.language;
    /**
     * @type {?}
     * @private
     */
    CustomerListComponent.prototype._onClickCustomerID;
    /**
     * @type {?}
     * @private
     */
    CustomerListComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CustomerListComponent.prototype.customerUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21lci9jb21wb25lbnRzL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixVQUFVLEVBQTBELE1BQU0sZUFBZSxDQUFDO0FBQ3RLLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNEO0lBWUUsK0JBQ1UsVUFBc0IsRUFDdEIsYUFBNEI7UUFENUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU4vQixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixrQkFBYSxHQUFZLElBQUksQ0FBQztRQVM5QixrQkFBYSxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRy9ELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHckQsb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVV2RCxrQkFBYSxHQUF3QixFQUFFLENBQUM7UUFTekMsYUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7SUE1QnZDLENBQUM7SUFXTCxzQkFDSSwrQ0FBWTs7OztRQURoQixjQUNxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOzs7OztRQUNqRCxVQUFpQixZQUFpQztZQUVoRCxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJ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QSxpQkFLQztRQUpDLG1DQUFtQztRQUNuQyxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7Ozs7SUFFRCxpREFBaUI7Ozs7SUFBakIsVUFBa0IsWUFBMEI7UUFDMUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdGLENBQUM7O2dCQTFIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsODhLQUE2Qzs7aUJBRTlDOzs7Z0JBUjJFLFVBQVU7Z0JBRzdFLGFBQWE7OztnQ0FrQm5CLE1BQU07K0JBR04sTUFBTTtrQ0FHTixNQUFNOytCQUdOLEtBQUs7NkJBVUwsS0FBSztvQ0FVTCxLQUFLOztJQTZFUiw0QkFBQztDQUFBLEFBM0hELElBMkhDO1NBdEhZLHFCQUFxQjs7O0lBR2hDLDhDQUFxQzs7SUFDckMsOENBQXFDOztJQVFyQyw4Q0FDc0U7O0lBRXRFLDZDQUM0RDs7SUFFNUQsZ0RBQytEOzs7OztJQVUvRCw4Q0FBZ0Q7Ozs7O0lBT2hELDRDQUFvQjs7SUFFcEIseUNBQTJDOzs7OztJQUUzQyxtREFBMkI7Ozs7O0lBaEN6QiwyQ0FBOEI7Ozs7O0lBQzlCLDhDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBJbmplY3QsIE9wdGlvbmFsLCBJbmplY3RhYmxlLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cmluZ1V0aWxzLCBMYW5ndWFnZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJJdGVtIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbC9DdXN0b21lckl0ZW0nO1xuaW1wb3J0IHsgQ3VzdG9tZXJVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2N1c3RvbWVyLXV0aWxzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lci1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuXG4gIHB1YmxpYyBsb2FkaW5nRmluaXNoOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHJlZnJlc2hGaW5pc2g6IGJvb2xlYW4gPSB0cnVlO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY3VzdG9tZXJVdGlsczogQ3VzdG9tZXJVdGlsc1xuICApIHsgfVxuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY3VzdG9tZXJDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbWVySXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjdXN0b21lckxvYWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY3VzdG9tZXJSZWZyZXNoOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBnZXQgY3VzdG9tZXJMaXN0KCkgeyByZXR1cm4gdGhpcy5fY3VzdG9tZXJMaXN0OyB9XG4gIHNldCBjdXN0b21lckxpc3QoY3VzdG9tZXJMaXN0OiBBcnJheTxDdXN0b21lckl0ZW0+KSB7XG5cbiAgICB0aGlzLl9jdXN0b21lckxpc3QgPSBjdXN0b21lckxpc3Q7XG4gICAgdGhpcy5sb2FkaW5nRmluaXNoID0gdHJ1ZTtcbiAgICB0aGlzLnJlZnJlc2hGaW5pc2ggPSB0cnVlO1xuICB9XG4gIHByaXZhdGUgX2N1c3RvbWVyTGlzdDogQXJyYXk8Q3VzdG9tZXJJdGVtPiA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBmaWx0ZXJUeXBlKCkgeyByZXR1cm4gdGhpcy5fZmlsdGVyVHlwZTsgfVxuICBzZXQgZmlsdGVyVHlwZShmaWx0ZXJUeXBlKSB7XG4gICAgdGhpcy5fZmlsdGVyVHlwZSA9IGZpbHRlclR5cGU7XG4gIH1cbiAgcHJpdmF0ZSBfZmlsdGVyVHlwZTtcblxuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG5cbiAgcHJpdmF0ZSBfb25DbGlja0N1c3RvbWVySUQ7XG4gIEBJbnB1dCgpXG4gIGdldCBvbkNsaWNrQ3VzdG9tZXJJRCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25DbGlja0N1c3RvbWVySUQ7XG4gIH1cbiAgc2V0IG9uQ2xpY2tDdXN0b21lcklEKG9uQ2xpY2tDdXN0b21lcklEKSB7XG4gICAgdGhpcy5fb25DbGlja0N1c3RvbWVySUQgPSBvbkNsaWNrQ3VzdG9tZXJJRDtcbiAgfVxuXG4gIC8vSXMgRGVmYXVsdCBEYXRhKE5vIFNlYXJjaCBTdGF0dXMpXG4gIHB1YmxpYyBnZXQgaXNEZWZhdWx0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21lckxpc3QubGVuZ3RoID09IDAgJiYgU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLmZpbHRlclR5cGUpICYmIHRoaXMuZmlsdGVyVHlwZSA9PSAnTk9ORSc7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNob3dTZWFyY2hOb0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tZXJMaXN0Lmxlbmd0aCA9PSAwICYmIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5maWx0ZXJUeXBlKSAmJiB0aGlzLmZpbHRlclR5cGUgPT0gJ1NFQVJDSCc7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICB9XG5cblxuICB0cmFja0J5Q2xpZW50SUQoaW5kZXgsIGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5jbGllbnRJRDtcbiAgfVxuXG5cblxuICBhc3luYyBjbG9zZVNsaWRpbmdJdGVtcygpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdsaXN0IGNsb3NlU2xpZGluZ0l0ZW1zJyk7XG5cbiAgICBjb25zdCBpdGVtID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLWl0ZW0tc2xpZGluZycpO1xuICAgIGlmIChpdGVtICE9IG51bGwpIHtcbiAgICAgIC8vLyBjb25zb2xlLmRlYnVnKCdpdGVtIHNpemUnLGl0ZW0ubGVuZ3RoKTtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ2l0ZW0nLCBpdGVtKTtcbiAgICAgIGF3YWl0IGl0ZW0uY2xvc2UoKTtcbiAgICAgIGF3YWl0IGl0ZW0uY2xvc2VPcGVuZWQoKTtcbiAgICB9XG5cbiAgfVxuXG4gIG9uQ2xpY2tDdXN0b21lcihjbGllbnRJRDogc3RyaW5nKSB7XG5cbiAgICB0aGlzLl9vbkNsaWNrQ3VzdG9tZXJJRCA9IGNsaWVudElEO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlU2xpZGluZ0l0ZW1zKCk7XG4gICAgfSwgMzAwKTtcblxuICAgIGxldCBpdGVtID0gdGhpcy5jdXN0b21lckxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jbGllbnRJRCA9PSBjbGllbnRJRCk7XG5cbiAgICB0aGlzLmN1c3RvbWVyQ2xpY2suZW1pdChpdGVtWzBdKTtcbiAgfVxuXG5cbiAgbG9hZEN1c3RvbWVyKGUpIHtcbiAgICBjb25zb2xlLmxvZygnbGF6eSBsb2FkIGN1c3RvbWVyOicsIGUpO1xuICAgIC8vU2V0dGltZW91dCB0byBhbmltYXRlIGxvYWRlclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jdXN0b21lckxvYWQuZW1pdCgpO1xuICAgIH0sIDgwMCk7XG5cbiAgfVxuXG4gIHJlZnJlc2hDdXN0b21lcigpIHtcbiAgICAvL3NldCB0aW1lb3V0IGZvciByZWZyZXNoIGFuaW1hdGlvblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jdXN0b21lclJlZnJlc2guZW1pdCgpO1xuICAgIH0sIDgwMCk7XG4gIH1cblxuICBjb252ZXJ0TmFtZVRvU2hvdyhjdXN0b21lckl0ZW06IEN1c3RvbWVySXRlbSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tZXJVdGlscy5jb252ZXJ0TmFtZVRvU2hvdyhjdXN0b21lckl0ZW0uZmlyc3ROYW1lLCBjdXN0b21lckl0ZW0ubGFzdE5hbWUpO1xuICB9XG59XG4iXX0=