/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input, ChangeDetectorRef, ElementRef, Inject, Optional } from '@angular/core';
import { StringUtils, Language } from '@allianzSND/core';
import { showCustomerRuleToken } from '../../injectionToken/injection-token';
var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(changeDetecor, elementRef, showCustomerRule) {
        this.changeDetecor = changeDetecor;
        this.elementRef = elementRef;
        this.showCustomerRule = showCustomerRule;
        //Is Default Data(No Search Status)
        this.isDefaultData = true;
        this.showSearchNoData = false;
        this.loadingFinish = true;
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
            var _this = this;
            customerList.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.showName = _this.convertNameToShow(item.firstName, item.lastName);
            }));
            this._customerList = customerList;
            this.loadingFinish = true;
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
            if (this.customerList.length == 0 && StringUtils.isNotEmpty(this.filterType)) {
                this.isDefaultData = this.filterType == 'NONE';
                this.showSearchNoData = this.filterType == 'SEARCH';
            }
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
        this.onClickCustomerID = clientID;
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
        console.log('lazy load customer:', e);
        this.customerLoad.emit();
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
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    CustomerListComponent.prototype.convertNameToShow = /**
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    function (firstName, lastName) {
        if (this.showCustomerRule) {
            return this.showCustomerRule.convertName(firstName, lastName);
        }
        else {
            return (firstName + lastName);
        }
    };
    CustomerListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-customer-list',
                    template: "<div class=\"ui-list-data\">\n    <!-- CustomerList has data-->\n     <app-ui-infinite-scroll (loadingCallback)=\"loadCustomer($event)\" (refreshCallback)=\"refreshCustomer()\"\n        [(loadingFinish)]=\"loadingFinish\" [lazyLoading]=\"true\" [translateText]=\"language.loading | translate\">\n        \n        <ul class=\"list-data-block stop-scroll-block\">\n            <ng-container *ngIf=\"customerList && customerList.length != 0 ; else noCustomerData\">\n    \n            <li *ngFor=\" let customer of customerList;trackBy:trackByClientID; let i = index\" (click)=\"onClickCustomer(customer.clientID)\"  class=\"list-item-block\" [ngClass]= \"[(customer.clientID == onClickCustomerID ? ' active':''), (customer.isHighlight ? ' highlight':'')]\">\n                <div class=\"title-block\">\n                    <div class=\"like-block\">\n                        <app-ui-btn-like-add [isLike]=\"customer.isFollow\"></app-ui-btn-like-add>\n                    </div>\n                    <div class=\"title-text\">\n                        {{customer.showName}}\n                    </div>\n                    <app-ui-form-radio-tag class=\"tag-item\" [checked]=\"true\" [disabled]=\"true\" [ngClass]=\"customer.tag\">{{customer.tag | translate}}</app-ui-form-radio-tag>\n                </div>\n                <div class=\"profile-block\">\n                    <div class=\"img-profile-block\">\n                        <ng-container *ngIf=\"customer.isOtherSource; then otherSource else appSource\"></ng-container>\n\n                        <!-- datasource from Opus-->\n                        <ng-template #otherSource>\n                            <img src=\"assets/img/icon-customer-profile-sm.svg\">\n                        </ng-template>\n\n                        <!-- datasource from APP-->\n                        <ng-template #appSource>\n                            <img src=\"assets/img/icon-customer-profile-sm-active.svg\">\n                            \n                        </ng-template>\n                    </div>\n                </div>\n                <div class=\"content-block\">\n                  <app-ui-progress [value]=\"customer.complementPercent\" [theme]=\"'sub'\" [isShowValue]=\"true\">{{language.customerInformation |translate }}</app-ui-progress>\n                </div>\n            </li>\n        </ng-container>\n        </ul>\n      </app-ui-infinite-scroll>\n   \n\n    <ng-template #noCustomerData>\n        <!-- Customer no data without search-->\n        <ng-container *ngIf=\"isDefaultData ; else customerSearchNoData\">\n            <div class=\"skelton-layout stop-scroll-block\">\n                <div class=\"theme-loading\">\n                  <div class=\"text-desc\">\n                      <span class=\"text\">{{language.click |translate }}\n                        <span class=\"icon-img\"><img src=\"assets/img/icon-add-grey.svg\"></span>\n                        <span class=\"icon-img\"><img src=\"assets/img/icon-import-grey.svg\"></span>\n                        {{language.noEdit |translate }}</span>\n                  </div>\n\n                  <div class=\"loading-img\">\n                    <div class=\"skelton-data-block\">\n                        <div class=\"skelton-text wd-short align-right \"></div>\n                        <div class=\"skelton-text wd-long \"></div>\n                        <div class=\"skelton-row align-side\">\n                            <div class=\"skelton-text wd-md \"></div>\n                            <div class=\"skelton-text wd-short \"></div>\n                        </div>\n                        <div class=\"skelton-text wd-long \"></div>\n                    </div>\n                    <img src=\"assets/img/loading-customer-list.svg\">\n                  </div>\n\n                </div>\n              </div>\n        </ng-container>\n\n        <!-- Customer no data after searching-->\n        <ng-template #customerSearchNoData>\n            <ng-container *ngIf=\"showSearchNoData ;  else customerFilterNoData\">\n                    <div class=\"status-empty search-empty\">\n                            <div class=\"empty-block\">\n                                <div class=\"img-block\">\n                                    <img src=\"assets/img/empty-img-search.svg\">\n                                </div>\n                                <div class=\"text-block\">\n                                  <p>{{language.noSearch |translate }}</p>\n                                </div>\n                            </div>\n                          </div>\n            </ng-container>\n                \n        </ng-template>\n\n        <!-- Customer no data after filtering-->\n        <ng-template #customerFilterNoData>\n                <div class=\"status-empty search-empty\">\n                    <div class=\"empty-block\">\n                        <div class=\"img-block\">\n                            <img src=\"assets/img/icon-filter-no-data.svg\">\n                        </div>\n                        <div class=\"text-block\">\n                          <p>{{language.noFilter |translate }}</p>\n                        </div>\n                    </div>\n                  </div>\n        </ng-template>\n            \n    </ng-template>\n\n  </div>\n",
                    styles: [".skelton-layout{margin:0}.skelton-row{display:flex}.skelton-row.align-side{justify-content:space-between}.align-right{margin:0 0 15px auto}.align-center{margin:15px auto}.skeleton-round{border-radius:50%;background-color:#ececec;max-width:100%;max-height:100%;width:100%;height:100%}.skelton-square{display:inline-block;width:30px;height:30px}.skelton-text{min-height:1rem;max-width:100%;width:100%;background-color:#ececec;display:block;margin-bottom:15px}.skelton-line{display:inline-block;max-width:100%;width:100%;background-color:#ececec;height:1px}.skelton-img-text .skelton-square{margin-bottom:10px}::ng-deep ion-skeleton-text{background-color:#ececec}::ng-deep ion-skeleton-text span{opacity:1;background-color:#ececec}.skelton-animate{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(194,194,194,.3);background:linear-gradient(to right,rgba(194,194,194,.3) 8%,rgba(194,194,194,.2) 18%,rgba(194,194,194,.3) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}@keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}.ui-list-data .skelton-layout{margin-top:30px}.ui-list-data .theme-loading{text-align:center}.ui-list-data .theme-loading .text-desc{padding-left:10%;padding-right:10%;text-align:center;display:inline-block;vertical-align:middle;margin-bottom:30px}.ui-list-data .theme-loading .text-desc .text{color:#414141;font-size:.875rem;line-height:28px;display:inline-block;vertical-align:middle}.ui-list-data .theme-loading .text-desc .text .icon-img{display:inline-block;vertical-align:middle;line-height:normal}.ui-list-data .theme-loading .loading-img{text-align:right;position:relative}.ui-list-data .theme-loading .loading-img .skelton-data-block{padding-left:10%;padding-right:10%;box-sizing:border-box;position:absolute;top:30px;width:100%}.ui-list-data .theme-loading .loading-img .skelton-text{margin-bottom:25px}.ui-list-data .theme-loading .loading-img .wd-short{max-width:30%}.ui-list-data .theme-loading .loading-img .wd-md{max-width:54%}.ui-list-data .theme-loading .loading-img .wd-long{max-width:70%}.ui-list-data .theme-loading .loading-img img{max-width:300px;width:100%}@media (max-width:1023px){.ui-list-data .theme-loading img{bottom:400px;top:auto}}@media (max-width:767px){.ui-list-data .theme-loading{height:100%;position:relative}.ui-list-data .theme-loading .text-desc{margin-bottom:30px}.ui-list-data .theme-loading .text-desc .text{max-width:185px}.ui-list-data .theme-loading .loading-img{margin-top:0;height:100%;position:absolute;right:0;bottom:0;max-width:153px;width:100%}.ui-list-data .theme-loading .loading-img .wd-short{max-width:22%}.ui-list-data .theme-loading .loading-img .skelton-data-block{width:100%;max-width:253px;right:10px;top:60px;position:absolute}.ui-list-data .theme-loading .loading-img img{max-width:153px;margin-top:0;bottom:0;top:auto;position:absolute;right:0}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.status-empty.search-empty{padding-left:13%;padding-right:13%;box-sizing:border-box;text-align:center;display:flex;height:100%;min-height:calc(90vh - 59px - 56px - 24px);justify-content:center;align-items:center}.status-empty.search-empty .empty-block{text-align:center;margin:0 auto}.status-empty.search-empty .img-block{max-width:50px;width:100%;margin:0 auto}.status-empty.search-empty .text-block p{padding:0;font-size:1.125rem;line-height:28px}@media (max-width:767px){.status-empty.search-empty.search-empty{max-width:182px;width:100%;margin:0 auto;padding-left:0;padding-right:0}}.ui-list-data{border-top:1px solid #c2c2c2}.ui-list-data .title-sm-block{background-color:#ececec;display:inline-block;width:100%;padding:5px 15px 5px 6px}.ui-list-data .title-sm-block p{padding:0;margin:0}.ui-list-data .list-data-block{list-style-type:none;padding:0;border-bottom:1px solid #c2c2c2}.ui-list-data .list-data-block .list-item-block{padding:12px 15px 12px 6px;box-sizing:border-box;position:relative}.ui-list-data .list-data-block .list-item-block.highlight{background-color:#f5f5f5}@media (min-width:1024px){.ui-list-data .list-data-block .list-item-block.active{background-color:#f1f9fa}}.ui-list-data .list-data-block .list-item-block+.list-item-block{border-top:1px solid #c2c2c2}.ui-list-data .list-data-block .list-item-block .title-block{display:flex;justify-content:flex-start;align-items:flex-start;padding-bottom:5px;min-height:40px}.ui-list-data .list-data-block .list-item-block .title-block .title-text{font-size:.875rem;padding:0 3px;font-weight:700;display:inline-block;width:100%;display:-webkit-box;-webkit-line-clamp:1;/*! autoprefixer: off */-webkit-box-orient:vertical;overflow:hidden}.ui-list-data .list-data-block .list-item-block .like-block{margin-top:2px}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-whole-block .progress-value-block .progress-block{max-width:100%}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add{pointer-events:none;display:inline-block;max-width:12px;max-height:12px;width:100%}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add{display:inline-block;width:12px}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add img{max-width:100%;width:12px}.ui-list-data .list-data-block .list-item-block .profile-block{display:flex;align-items:center;justify-content:flex-end;position:absolute;right:30px;top:36px}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{display:flex;max-width:10%;align-items:center}@media screen and (min-width:1025px){.ui-list-data .list-data-block .list-item-block .title-block .title-text{padding-right:0;margin-right:3px}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add{max-width:1.2vw;max-height:1.2vw}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add{width:1.2vw}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add img{width:1.2vw}.ui-list-data .list-data-block .list-item-block .profile-block{right:1.2vw}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{max-width:1.4vw;width:1.4vw}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block img{width:1.4vw}}.ui-list-data .list-data-block .list-item-block .content-block{padding-left:12px}.ui-list-data .list-data-block ::ng-deep .tag-item{min-width:40px}.ui-list-data .list-data-block ::ng-deep .tag-item .ul-tag-block{position:relative;top:2px}.ui-list-data .list-data-block ::ng-deep .tag-item ::ng-deep .tag-block{height:14px;padding-top:0;padding-bottom:0}.ui-list-data ::ng-deep .progress-whole-block{padding-bottom:0}.ui-list-data ::ng-deep .progress-text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}@media (min-width:769px){.ui-list-data ::ng-deep .scroll-content{height:calc(100vh - 80px - 140px)}}@media (max-width:768px){.ui-list-data ::ng-deep .list-data-block .tag-item{padding-right:0;margin-right:35px;width:40px}.ui-list-data .list-data-block .list-item-block .profile-block{top:12px}.ui-list-data .skelton-layout{height:calc(100vh - 60px - 55px - 134px);overflow-y:auto}::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - 60px - 55px - 134px);height:100%}@supports (top:constant(safe-area-inset-top)){::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom) - 60px - 55px - 134px)}}@supports (top:env(safe-area-inset-top)){::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 60px - 55px - 134px)}}}@media (max-width:767px){.ui-list-data ::ng-deep .tag-item{min-width:40px;margin-top:2px;padding-right:35px}.ui-list-data .list-data-block .list-item-block{display:flex;flex-wrap:wrap}.ui-list-data .list-data-block .list-item-block .title-block{justify-content:flex-start;align-items:flex-start;max-width:100%;width:100%;padding-right:0;box-sizing:border-box}.ui-list-data .list-data-block .list-item-block .profile-block{justify-content:center;align-items:flex-start;padding-top:2px;max-width:20px;width:100%;right:15px;top:12px}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{max-width:100%;align-items:center}.ui-list-data .list-data-block .list-item-block .content-block{width:100%}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-whole-block{display:flex;width:100%;justify-content:flex-end;padding-bottom:0!important}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-value-block{padding-left:10px}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-value-block .progress-block{display:none}}"]
                }] }
    ];
    CustomerListComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showCustomerRuleToken,] }] }
    ]; };
    CustomerListComponent.propDecorators = {
        customerClick: [{ type: Output }],
        customerLoad: [{ type: Output }],
        customerRefresh: [{ type: Output }],
        customerList: [{ type: Input }],
        filterType: [{ type: Input }]
    };
    return CustomerListComponent;
}());
export { CustomerListComponent };
if (false) {
    /** @type {?} */
    CustomerListComponent.prototype.isDefaultData;
    /** @type {?} */
    CustomerListComponent.prototype.showSearchNoData;
    /** @type {?} */
    CustomerListComponent.prototype.loadingFinish;
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
    /** @type {?} */
    CustomerListComponent.prototype.onClickCustomerID;
    /**
     * @type {?}
     * @private
     */
    CustomerListComponent.prototype.changeDetecor;
    /**
     * @type {?}
     * @private
     */
    CustomerListComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CustomerListComponent.prototype.showCustomerRule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQzVJLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHN0U7SUFhRSwrQkFDVSxhQUFnQyxFQUNoQyxVQUFzQixFQUNxQixnQkFBa0M7UUFGN0Usa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ2hDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDcUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVR2RixtQ0FBbUM7UUFDNUIsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBRWxDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBUzlCLGtCQUFhLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0QsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdyRCxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBWXZELGtCQUFhLEdBQXdCLEVBQUUsQ0FBQztRQWN6QyxhQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQW5DdkMsQ0FBQztJQVdMLHNCQUNJLCtDQUFZOzs7O1FBRGhCLGNBQ3FCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQ2pELFVBQWlC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bkQsSUFBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMvRDthQUNJO1lBQ0gsT0FBTyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7O2dCQWxIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsaXRLQUE2Qzs7aUJBRTlDOzs7Z0JBVndELGlCQUFpQjtnQkFBRSxVQUFVO2dEQXNCakYsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7OztnQ0FHMUMsTUFBTTsrQkFHTixNQUFNO2tDQUdOLE1BQU07K0JBR04sS0FBSzs2QkFZTCxLQUFLOztJQTJFUiw0QkFBQztDQUFBLEFBbkhELElBbUhDO1NBOUdZLHFCQUFxQjs7O0lBR2hDLDhDQUFxQzs7SUFDckMsaURBQXlDOztJQUV6Qyw4Q0FBcUM7O0lBUXJDLDhDQUNzRTs7SUFFdEUsNkNBQzREOztJQUU1RCxnREFDK0Q7Ozs7O0lBWS9ELDhDQUFnRDs7Ozs7SUFZaEQsNENBQW9COztJQUVwQix5Q0FBMkM7O0lBQzNDLGtEQUF5Qjs7Ozs7SUF2Q3ZCLDhDQUF3Qzs7Ozs7SUFDeEMsMkNBQThCOzs7OztJQUM5QixpREFBcUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgSW5qZWN0LCBPcHRpb25hbCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMsIExhbmd1YWdlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21lckl0ZW0gfSBmcm9tICcuLi8uLi9zZXJ2aWNlL21vZGVsL0N1c3RvbWVySXRlbSc7XG5pbXBvcnQgeyBzaG93Q3VzdG9tZXJSdWxlVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgc2hvd0N1c3RvbWVyUnVsZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9zaG93Q3VzdG9tZXJSdWxlLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lci1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvL0lzIERlZmF1bHQgRGF0YShObyBTZWFyY2ggU3RhdHVzKVxuICBwdWJsaWMgaXNEZWZhdWx0RGF0YTogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBzaG93U2VhcmNoTm9EYXRhOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGxvYWRpbmdGaW5pc2g6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWNvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3Qoc2hvd0N1c3RvbWVyUnVsZVRva2VuKSBwcml2YXRlIHNob3dDdXN0b21lclJ1bGU6IHNob3dDdXN0b21lclJ1bGUsXG4gICkgeyB9XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjdXN0b21lckNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tZXJJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGN1c3RvbWVyTG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjdXN0b21lclJlZnJlc2g6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjdXN0b21lckxpc3QoKSB7IHJldHVybiB0aGlzLl9jdXN0b21lckxpc3Q7IH1cbiAgc2V0IGN1c3RvbWVyTGlzdChjdXN0b21lckxpc3Q6IEFycmF5PEN1c3RvbWVySXRlbT4pIHtcbiAgICBjdXN0b21lckxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0uc2hvd05hbWUgPSB0aGlzLmNvbnZlcnROYW1lVG9TaG93KGl0ZW0uZmlyc3ROYW1lLCBpdGVtLmxhc3ROYW1lKTtcbiAgICB9KVxuICAgIHRoaXMuX2N1c3RvbWVyTGlzdCA9IGN1c3RvbWVyTGlzdDtcblxuICAgIHRoaXMubG9hZGluZ0ZpbmlzaCA9IHRydWU7XG4gIH1cbiAgcHJpdmF0ZSBfY3VzdG9tZXJMaXN0OiBBcnJheTxDdXN0b21lckl0ZW0+ID0gW107XG5cbiAgQElucHV0KClcbiAgZ2V0IGZpbHRlclR5cGUoKSB7IHJldHVybiB0aGlzLl9maWx0ZXJUeXBlOyB9XG4gIHNldCBmaWx0ZXJUeXBlKGZpbHRlclR5cGUpIHtcbiAgICB0aGlzLl9maWx0ZXJUeXBlID0gZmlsdGVyVHlwZTtcblxuICAgIGlmICh0aGlzLmN1c3RvbWVyTGlzdC5sZW5ndGggPT0gMCAmJiBTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuZmlsdGVyVHlwZSkpIHtcbiAgICAgIHRoaXMuaXNEZWZhdWx0RGF0YSA9IHRoaXMuZmlsdGVyVHlwZSA9PSAnTk9ORSc7XG4gICAgICB0aGlzLnNob3dTZWFyY2hOb0RhdGEgPSB0aGlzLmZpbHRlclR5cGUgPT0gJ1NFQVJDSCc7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2ZpbHRlclR5cGU7XG5cbiAgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuICBwdWJsaWMgb25DbGlja0N1c3RvbWVySUQ7XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG5cbiAgdHJhY2tCeUNsaWVudElEKGluZGV4LCBpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0uY2xpZW50SUQ7XG4gIH1cblxuXG5cbiAgYXN5bmMgY2xvc2VTbGlkaW5nSXRlbXMoKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnbGlzdCBjbG9zZVNsaWRpbmdJdGVtcycpO1xuXG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pdGVtLXNsaWRpbmcnKTtcbiAgICBpZiAoaXRlbSAhPSBudWxsKSB7XG4gICAgICAvLy8gY29uc29sZS5kZWJ1ZygnaXRlbSBzaXplJyxpdGVtLmxlbmd0aCk7XG4gICAgICBjb25zb2xlLmRlYnVnKCdpdGVtJywgaXRlbSk7XG4gICAgICBhd2FpdCBpdGVtLmNsb3NlKCk7XG4gICAgICBhd2FpdCBpdGVtLmNsb3NlT3BlbmVkKCk7XG4gICAgfVxuXG4gIH1cblxuICBvbkNsaWNrQ3VzdG9tZXIoY2xpZW50SUQ6IHN0cmluZykge1xuXG4gICAgdGhpcy5vbkNsaWNrQ3VzdG9tZXJJRCA9IGNsaWVudElEO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlU2xpZGluZ0l0ZW1zKCk7XG4gICAgfSwgMzAwKTtcblxuICAgIGxldCBpdGVtID0gdGhpcy5jdXN0b21lckxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jbGllbnRJRCA9PSBjbGllbnRJRCk7XG5cbiAgICB0aGlzLmN1c3RvbWVyQ2xpY2suZW1pdChpdGVtWzBdKTtcbiAgfVxuXG5cbiAgbG9hZEN1c3RvbWVyKGUpIHtcbiAgICBjb25zb2xlLmxvZygnbGF6eSBsb2FkIGN1c3RvbWVyOicsIGUpO1xuXG4gICAgdGhpcy5jdXN0b21lckxvYWQuZW1pdCgpO1xuXG4gIH1cblxuICByZWZyZXNoQ3VzdG9tZXIoKSB7XG4gICAgLy9zZXQgdGltZW91dCBmb3IgcmVmcmVzaCBhbmltYXRpb25cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jdXN0b21lclJlZnJlc2guZW1pdCgpO1xuICAgIH0sIDgwMCk7XG4gIH1cblxuICBjb252ZXJ0TmFtZVRvU2hvdyhmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYodGhpcy5zaG93Q3VzdG9tZXJSdWxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG93Q3VzdG9tZXJSdWxlLmNvbnZlcnROYW1lKGZpcnN0TmFtZSwgbGFzdE5hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAoZmlyc3ROYW1lICsgbGFzdE5hbWUpO1xuICAgIH1cbiAgfVxufVxuIl19