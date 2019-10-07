/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input, ChangeDetectorRef, ElementRef, Inject, Optional } from '@angular/core';
import { StringUtils, Language } from '@allianzSND/core';
import { showCustomerRuleToken } from '../../injectionToken/injection-token';
export class CustomerListComponent {
    /**
     * @param {?} changeDetecor
     * @param {?} elementRef
     * @param {?} showCustomerRule
     */
    constructor(changeDetecor, elementRef, showCustomerRule) {
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
    /**
     * @return {?}
     */
    get customerList() { return this._customerList; }
    /**
     * @param {?} customerList
     * @return {?}
     */
    set customerList(customerList) {
        customerList.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item.showName = this.convertNameToShow(item.firstName, item.lastName);
        }));
        this._customerList = customerList;
        this.loadingFinish = true;
    }
    /**
     * @return {?}
     */
    get filterType() { return this._filterType; }
    /**
     * @param {?} filterType
     * @return {?}
     */
    set filterType(filterType) {
        this._filterType = filterType;
        if (this.customerList.length == 0 && StringUtils.isNotEmpty(this.filterType)) {
            this.isDefaultData = this.filterType == 'NONE';
            this.showSearchNoData = this.filterType == 'SEARCH';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackByClientID(index, item) {
        return item.clientID;
    }
    /**
     * @return {?}
     */
    closeSlidingItems() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.debug('list closeSlidingItems');
            /** @type {?} */
            const item = this.elementRef.nativeElement.querySelector('ion-item-sliding');
            if (item != null) {
                /// console.debug('item size',item.length);
                console.debug('item', item);
                yield item.close();
                yield item.closeOpened();
            }
        });
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    onClickCustomer(clientID) {
        this.onClickCustomerID = clientID;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.closeSlidingItems();
        }), 300);
        /** @type {?} */
        let item = this.customerList.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.clientID == clientID));
        this.customerClick.emit(item[0]);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    loadCustomer(e) {
        console.log('lazy load customer:', e);
        this.customerLoad.emit();
    }
    /**
     * @return {?}
     */
    refreshCustomer() {
        //set timeout for refresh animation
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.customerRefresh.emit();
        }), 800);
    }
    /**
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    convertNameToShow(firstName, lastName) {
        if (this.showCustomerRule) {
            return this.showCustomerRule.convertName(firstName, lastName);
        }
        else {
            return (firstName + lastName);
        }
    }
}
CustomerListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-list',
                template: "<div class=\"ui-list-data\">\n    <!-- CustomerList has data-->\n     <app-ui-infinite-scroll (loadingCallback)=\"loadCustomer($event)\" (refreshCallback)=\"refreshCustomer()\"\n        [(loadingFinish)]=\"loadingFinish\" [lazyLoading]=\"true\" [translateText]=\"language.loading | translate\">\n        \n        <ul class=\"list-data-block stop-scroll-block\">\n            <ng-container *ngIf=\"customerList && customerList.length != 0 ; else noCustomerData\">\n    \n            <li *ngFor=\" let customer of customerList;trackBy:trackByClientID; let i = index\" (click)=\"onClickCustomer(customer.clientID)\"  class=\"list-item-block\" [ngClass]= \"[(customer.clientID == onClickCustomerID ? ' active':''), (customer.isHighlight ? ' highlight':'')]\">\n                <div class=\"title-block\">\n                    <div class=\"like-block\">\n                        <app-ui-btn-like-add [isLike]=\"customer.isFollow\"></app-ui-btn-like-add>\n                    </div>\n                    <div class=\"title-text\">\n                        {{customer.showName}}\n                    </div>\n                    <app-ui-form-radio-tag class=\"tag-item\" [checked]=\"true\" [disabled]=\"true\" [ngClass]=\"customer.tag\">{{customer.tag | translate}}</app-ui-form-radio-tag>\n                </div>\n                <div class=\"profile-block\">\n                    <div class=\"img-profile-block\">\n                        <ng-container *ngIf=\"customer.isOtherSource; then otherSource else appSource\"></ng-container>\n\n                        <!-- datasource from Opus-->\n                        <ng-template #otherSource>\n                            <img src=\"assets/img/icon-customer-profile-sm.svg\">\n                        </ng-template>\n\n                        <!-- datasource from APP-->\n                        <ng-template #appSource>\n                            <img src=\"assets/img/icon-customer-profile-sm-active.svg\">\n                            \n                        </ng-template>\n                    </div>\n                </div>\n                <div class=\"content-block\">\n                  <app-ui-progress [value]=\"customer.complementPercent\" [theme]=\"'sub'\" [isShowValue]=\"true\">{{language.customerInformation |translate }}</app-ui-progress>\n                </div>\n            </li>\n        </ng-container>\n        </ul>\n      </app-ui-infinite-scroll>\n   \n\n    <ng-template #noCustomerData>\n        <!-- Customer no data without search-->\n        <ng-container *ngIf=\"isDefaultData ; else customerSearchNoData\">\n            <div class=\"skelton-layout stop-scroll-block\">\n                <div class=\"theme-loading\">\n                  <div class=\"text-desc\">\n                      <span class=\"text\">{{language.click |translate }}\n                        <span class=\"icon-img\"><img src=\"assets/img/icon-add-grey.svg\"></span>\n                        <span class=\"icon-img\"><img src=\"assets/img/icon-import-grey.svg\"></span>\n                        {{language.noEdit |translate }}</span>\n                  </div>\n\n                  <div class=\"loading-img\">\n                    <div class=\"skelton-data-block\">\n                        <div class=\"skelton-text wd-short align-right \"></div>\n                        <div class=\"skelton-text wd-long \"></div>\n                        <div class=\"skelton-row align-side\">\n                            <div class=\"skelton-text wd-md \"></div>\n                            <div class=\"skelton-text wd-short \"></div>\n                        </div>\n                        <div class=\"skelton-text wd-long \"></div>\n                    </div>\n                    <img src=\"assets/img/loading-customer-list.svg\">\n                  </div>\n\n                </div>\n              </div>\n        </ng-container>\n\n        <!-- Customer no data after searching-->\n        <ng-template #customerSearchNoData>\n            <ng-container *ngIf=\"showSearchNoData ;  else customerFilterNoData\">\n                    <div class=\"status-empty search-empty\">\n                            <div class=\"empty-block\">\n                                <div class=\"img-block\">\n                                    <img src=\"assets/img/empty-img-search.svg\">\n                                </div>\n                                <div class=\"text-block\">\n                                  <p>{{language.noSearch |translate }}</p>\n                                </div>\n                            </div>\n                          </div>\n            </ng-container>\n                \n        </ng-template>\n\n        <!-- Customer no data after filtering-->\n        <ng-template #customerFilterNoData>\n                <div class=\"status-empty search-empty\">\n                    <div class=\"empty-block\">\n                        <div class=\"img-block\">\n                            <img src=\"assets/img/icon-filter-no-data.svg\">\n                        </div>\n                        <div class=\"text-block\">\n                          <p>{{language.noFilter |translate }}</p>\n                        </div>\n                    </div>\n                  </div>\n        </ng-template>\n            \n    </ng-template>\n\n  </div>\n",
                styles: [".skelton-layout{margin:0}.skelton-row{display:flex}.skelton-row.align-side{justify-content:space-between}.align-right{margin:0 0 15px auto}.align-center{margin:15px auto}.skeleton-round{border-radius:50%;background-color:#ececec;max-width:100%;max-height:100%;width:100%;height:100%}.skelton-square{display:inline-block;width:30px;height:30px}.skelton-text{min-height:1rem;max-width:100%;width:100%;background-color:#ececec;display:block;margin-bottom:15px}.skelton-line{display:inline-block;max-width:100%;width:100%;background-color:#ececec;height:1px}.skelton-img-text .skelton-square{margin-bottom:10px}::ng-deep ion-skeleton-text{background-color:#ececec}::ng-deep ion-skeleton-text span{opacity:1;background-color:#ececec}.skelton-animate{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(194,194,194,.3);background:linear-gradient(to right,rgba(194,194,194,.3) 8%,rgba(194,194,194,.2) 18%,rgba(194,194,194,.3) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}@keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}.ui-list-data .skelton-layout{margin-top:30px}.ui-list-data .theme-loading{text-align:center}.ui-list-data .theme-loading .text-desc{padding-left:10%;padding-right:10%;text-align:center;display:inline-block;vertical-align:middle;margin-bottom:30px}.ui-list-data .theme-loading .text-desc .text{color:#414141;font-size:.875rem;line-height:28px;display:inline-block;vertical-align:middle}.ui-list-data .theme-loading .text-desc .text .icon-img{display:inline-block;vertical-align:middle;line-height:normal}.ui-list-data .theme-loading .loading-img{text-align:right;position:relative}.ui-list-data .theme-loading .loading-img .skelton-data-block{padding-left:10%;padding-right:10%;box-sizing:border-box;position:absolute;top:30px;width:100%}.ui-list-data .theme-loading .loading-img .skelton-text{margin-bottom:25px}.ui-list-data .theme-loading .loading-img .wd-short{max-width:30%}.ui-list-data .theme-loading .loading-img .wd-md{max-width:54%}.ui-list-data .theme-loading .loading-img .wd-long{max-width:70%}.ui-list-data .theme-loading .loading-img img{max-width:300px;width:100%}@media (max-width:1023px){.ui-list-data .theme-loading img{bottom:400px;top:auto}}@media (max-width:767px){.ui-list-data .theme-loading{height:100%;position:relative}.ui-list-data .theme-loading .text-desc{margin-bottom:30px}.ui-list-data .theme-loading .text-desc .text{max-width:185px}.ui-list-data .theme-loading .loading-img{margin-top:0;height:100%;position:absolute;right:0;bottom:0;max-width:153px;width:100%}.ui-list-data .theme-loading .loading-img .wd-short{max-width:22%}.ui-list-data .theme-loading .loading-img .skelton-data-block{width:100%;max-width:253px;right:10px;top:60px;position:absolute}.ui-list-data .theme-loading .loading-img img{max-width:153px;margin-top:0;bottom:0;top:auto;position:absolute;right:0}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.status-empty.search-empty{padding-left:13%;padding-right:13%;box-sizing:border-box;text-align:center;display:flex;height:100%;min-height:calc(90vh - 59px - 56px - 24px);justify-content:center;align-items:center}.status-empty.search-empty .empty-block{text-align:center;margin:0 auto}.status-empty.search-empty .img-block{max-width:50px;width:100%;margin:0 auto}.status-empty.search-empty .text-block p{padding:0;font-size:1.125rem;line-height:28px}@media (max-width:767px){.status-empty.search-empty.search-empty{max-width:182px;width:100%;margin:0 auto;padding-left:0;padding-right:0}}.ui-list-data{border-top:1px solid #c2c2c2}.ui-list-data .title-sm-block{background-color:#ececec;display:inline-block;width:100%;padding:5px 15px 5px 6px}.ui-list-data .title-sm-block p{padding:0;margin:0}.ui-list-data .list-data-block{list-style-type:none;padding:0;border-bottom:1px solid #c2c2c2}.ui-list-data .list-data-block .list-item-block{padding:12px 15px 12px 6px;box-sizing:border-box;position:relative}.ui-list-data .list-data-block .list-item-block.highlight{background-color:#f5f5f5}@media (min-width:1024px){.ui-list-data .list-data-block .list-item-block.active{background-color:#f1f9fa}}.ui-list-data .list-data-block .list-item-block+.list-item-block{border-top:1px solid #c2c2c2}.ui-list-data .list-data-block .list-item-block .title-block{display:flex;justify-content:flex-start;align-items:flex-start;padding-bottom:5px;min-height:40px}.ui-list-data .list-data-block .list-item-block .title-block .title-text{font-size:.875rem;padding:0 3px;font-weight:700;display:inline-block;width:100%;display:-webkit-box;-webkit-line-clamp:1;/*! autoprefixer: off */-webkit-box-orient:vertical;overflow:hidden}.ui-list-data .list-data-block .list-item-block .like-block{margin-top:2px}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-whole-block .progress-value-block .progress-block{max-width:100%}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add{pointer-events:none;display:inline-block;max-width:12px;max-height:12px;width:100%}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add{display:inline-block;width:12px}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add img{max-width:100%;width:12px}.ui-list-data .list-data-block .list-item-block .profile-block{display:flex;align-items:center;justify-content:flex-end;position:absolute;right:30px;top:36px}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{display:flex;max-width:10%;align-items:center}@media screen and (min-width:1025px){.ui-list-data .list-data-block .list-item-block .title-block .title-text{padding-right:0;margin-right:3px}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add{max-width:1.2vw;max-height:1.2vw}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add{width:1.2vw}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add img{width:1.2vw}.ui-list-data .list-data-block .list-item-block .profile-block{right:1.2vw}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{max-width:1.4vw;width:1.4vw}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block img{width:1.4vw}}.ui-list-data .list-data-block .list-item-block .content-block{padding-left:12px}.ui-list-data .list-data-block ::ng-deep .tag-item{min-width:40px}.ui-list-data .list-data-block ::ng-deep .tag-item .ul-tag-block{position:relative;top:2px}.ui-list-data .list-data-block ::ng-deep .tag-item ::ng-deep .tag-block{height:14px;padding-top:0;padding-bottom:0}.ui-list-data ::ng-deep .progress-whole-block{padding-bottom:0}.ui-list-data ::ng-deep .progress-text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}@media (min-width:769px){.ui-list-data ::ng-deep .scroll-content{height:calc(100vh - 80px - 140px)}}@media (max-width:768px){.ui-list-data ::ng-deep .list-data-block .tag-item{padding-right:0;margin-right:35px;width:40px}.ui-list-data .list-data-block .list-item-block .profile-block{top:12px}.ui-list-data .skelton-layout{height:calc(100vh - 60px - 55px - 134px);overflow-y:auto}::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - 60px - 55px - 134px);height:100%}@supports (top:constant(safe-area-inset-top)){::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom) - 60px - 55px - 134px)}}@supports (top:env(safe-area-inset-top)){::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 60px - 55px - 134px)}}}@media (max-width:767px){.ui-list-data ::ng-deep .tag-item{min-width:40px;margin-top:2px;padding-right:35px}.ui-list-data .list-data-block .list-item-block{display:flex;flex-wrap:wrap}.ui-list-data .list-data-block .list-item-block .title-block{justify-content:flex-start;align-items:flex-start;max-width:100%;width:100%;padding-right:0;box-sizing:border-box}.ui-list-data .list-data-block .list-item-block .profile-block{justify-content:center;align-items:flex-start;padding-top:2px;max-width:20px;width:100%;right:15px;top:12px}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{max-width:100%;align-items:center}.ui-list-data .list-data-block .list-item-block .content-block{width:100%}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-whole-block{display:flex;width:100%;justify-content:flex-end;padding-bottom:0!important}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-value-block{padding-left:10px}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-value-block .progress-block{display:none}}"]
            }] }
];
CustomerListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showCustomerRuleToken,] }] }
];
CustomerListComponent.propDecorators = {
    customerClick: [{ type: Output }],
    customerLoad: [{ type: Output }],
    customerRefresh: [{ type: Output }],
    customerList: [{ type: Input }],
    filterType: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQzVJLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFRN0UsTUFBTTs7Ozs7O0lBUUosWUFDVSxhQUFnQyxFQUNoQyxVQUFzQixFQUNxQixnQkFBa0M7UUFGN0Usa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ2hDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDcUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVR2RixtQ0FBbUM7UUFDNUIsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBRWxDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBUzlCLGtCQUFhLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0QsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdyRCxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBWXZELGtCQUFhLEdBQXdCLEVBQUUsQ0FBQztRQWN6QyxhQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQW5DdkMsQ0FBQzs7OztJQVdMLElBQ0ksWUFBWSxLQUFLLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ2pELElBQUksWUFBWSxDQUFDLFlBQWlDO1FBQ2hELFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEUsQ0FBQyxFQUFDLENBQUE7UUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUVsQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDOzs7O0lBR0QsSUFDSSxVQUFVLEtBQUssT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDN0MsSUFBSSxVQUFVLENBQUMsVUFBVTtRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUU5QixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUM1RSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDO1lBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7SUFPRCxRQUFRO0lBQ1IsQ0FBQzs7Ozs7O0lBR0QsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUssaUJBQWlCOztZQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7O2tCQUVsQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDO1lBQzVFLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDaEIsMkNBQTJDO2dCQUMzQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ25CLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzFCO1FBRUgsQ0FBQztLQUFBOzs7OztJQUVELGVBQWUsQ0FBQyxRQUFnQjtRQUU5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO1FBRWxDLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQzs7WUFFSixJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsRUFBQztRQUV0RSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUdELFlBQVksQ0FBQyxDQUFDO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRTNCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsbUNBQW1DO1FBQ25DLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsU0FBaUIsRUFBRSxRQUFnQjtRQUNuRCxJQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQy9EO2FBQ0k7WUFDSCxPQUFPLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7O1lBbEhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixpdEtBQTZDOzthQUU5Qzs7O1lBVndELGlCQUFpQjtZQUFFLFVBQVU7NENBc0JqRixRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs7OzRCQUcxQyxNQUFNOzJCQUdOLE1BQU07OEJBR04sTUFBTTsyQkFHTixLQUFLO3lCQVlMLEtBQUs7Ozs7SUFoQ04sOENBQXFDOztJQUNyQyxpREFBeUM7O0lBRXpDLDhDQUFxQzs7SUFRckMsOENBQ3NFOztJQUV0RSw2Q0FDNEQ7O0lBRTVELGdEQUMrRDs7Ozs7SUFZL0QsOENBQWdEOzs7OztJQVloRCw0Q0FBb0I7O0lBRXBCLHlDQUEyQzs7SUFDM0Msa0RBQXlCOzs7OztJQXZDdkIsOENBQXdDOzs7OztJQUN4QywyQ0FBOEI7Ozs7O0lBQzlCLGlEQUFxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBJbmplY3QsIE9wdGlvbmFsLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJpbmdVdGlscywgTGFuZ3VhZ2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEN1c3RvbWVySXRlbSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJJdGVtJztcbmltcG9ydCB7IHNob3dDdXN0b21lclJ1bGVUb2tlbiB9IGZyb20gJy4uLy4uL2luamVjdGlvblRva2VuL2luamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBzaG93Q3VzdG9tZXJSdWxlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3Nob3dDdXN0b21lclJ1bGUuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWN1c3RvbWVyLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbWVyLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vSXMgRGVmYXVsdCBEYXRhKE5vIFNlYXJjaCBTdGF0dXMpXG4gIHB1YmxpYyBpc0RlZmF1bHREYXRhOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHNob3dTZWFyY2hOb0RhdGE6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgbG9hZGluZ0ZpbmlzaDogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY29yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChzaG93Q3VzdG9tZXJSdWxlVG9rZW4pIHByaXZhdGUgc2hvd0N1c3RvbWVyUnVsZTogc2hvd0N1c3RvbWVyUnVsZSxcbiAgKSB7IH1cblxuICBAT3V0cHV0KClcbiAgcHVibGljIGN1c3RvbWVyQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21lckl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY3VzdG9tZXJMb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGN1c3RvbWVyUmVmcmVzaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgZ2V0IGN1c3RvbWVyTGlzdCgpIHsgcmV0dXJuIHRoaXMuX2N1c3RvbWVyTGlzdDsgfVxuICBzZXQgY3VzdG9tZXJMaXN0KGN1c3RvbWVyTGlzdDogQXJyYXk8Q3VzdG9tZXJJdGVtPikge1xuICAgIGN1c3RvbWVyTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zaG93TmFtZSA9IHRoaXMuY29udmVydE5hbWVUb1Nob3coaXRlbS5maXJzdE5hbWUsIGl0ZW0ubGFzdE5hbWUpO1xuICAgIH0pXG4gICAgdGhpcy5fY3VzdG9tZXJMaXN0ID0gY3VzdG9tZXJMaXN0O1xuXG4gICAgdGhpcy5sb2FkaW5nRmluaXNoID0gdHJ1ZTtcbiAgfVxuICBwcml2YXRlIF9jdXN0b21lckxpc3Q6IEFycmF5PEN1c3RvbWVySXRlbT4gPSBbXTtcblxuICBASW5wdXQoKVxuICBnZXQgZmlsdGVyVHlwZSgpIHsgcmV0dXJuIHRoaXMuX2ZpbHRlclR5cGU7IH1cbiAgc2V0IGZpbHRlclR5cGUoZmlsdGVyVHlwZSkge1xuICAgIHRoaXMuX2ZpbHRlclR5cGUgPSBmaWx0ZXJUeXBlO1xuXG4gICAgaWYgKHRoaXMuY3VzdG9tZXJMaXN0Lmxlbmd0aCA9PSAwICYmIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5maWx0ZXJUeXBlKSkge1xuICAgICAgdGhpcy5pc0RlZmF1bHREYXRhID0gdGhpcy5maWx0ZXJUeXBlID09ICdOT05FJztcbiAgICAgIHRoaXMuc2hvd1NlYXJjaE5vRGF0YSA9IHRoaXMuZmlsdGVyVHlwZSA9PSAnU0VBUkNIJztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZmlsdGVyVHlwZTtcblxuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHB1YmxpYyBvbkNsaWNrQ3VzdG9tZXJJRDtcblxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxuICB0cmFja0J5Q2xpZW50SUQoaW5kZXgsIGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5jbGllbnRJRDtcbiAgfVxuXG5cblxuICBhc3luYyBjbG9zZVNsaWRpbmdJdGVtcygpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdsaXN0IGNsb3NlU2xpZGluZ0l0ZW1zJyk7XG5cbiAgICBjb25zdCBpdGVtID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLWl0ZW0tc2xpZGluZycpO1xuICAgIGlmIChpdGVtICE9IG51bGwpIHtcbiAgICAgIC8vLyBjb25zb2xlLmRlYnVnKCdpdGVtIHNpemUnLGl0ZW0ubGVuZ3RoKTtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ2l0ZW0nLCBpdGVtKTtcbiAgICAgIGF3YWl0IGl0ZW0uY2xvc2UoKTtcbiAgICAgIGF3YWl0IGl0ZW0uY2xvc2VPcGVuZWQoKTtcbiAgICB9XG5cbiAgfVxuXG4gIG9uQ2xpY2tDdXN0b21lcihjbGllbnRJRDogc3RyaW5nKSB7XG5cbiAgICB0aGlzLm9uQ2xpY2tDdXN0b21lcklEID0gY2xpZW50SUQ7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VTbGlkaW5nSXRlbXMoKTtcbiAgICB9LCAzMDApO1xuXG4gICAgbGV0IGl0ZW0gPSB0aGlzLmN1c3RvbWVyTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNsaWVudElEID09IGNsaWVudElEKTtcblxuICAgIHRoaXMuY3VzdG9tZXJDbGljay5lbWl0KGl0ZW1bMF0pO1xuICB9XG5cblxuICBsb2FkQ3VzdG9tZXIoZSkge1xuICAgIGNvbnNvbGUubG9nKCdsYXp5IGxvYWQgY3VzdG9tZXI6JywgZSk7XG5cbiAgICB0aGlzLmN1c3RvbWVyTG9hZC5lbWl0KCk7XG5cbiAgfVxuXG4gIHJlZnJlc2hDdXN0b21lcigpIHtcbiAgICAvL3NldCB0aW1lb3V0IGZvciByZWZyZXNoIGFuaW1hdGlvblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmN1c3RvbWVyUmVmcmVzaC5lbWl0KCk7XG4gICAgfSwgODAwKTtcbiAgfVxuXG4gIGNvbnZlcnROYW1lVG9TaG93KGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZih0aGlzLnNob3dDdXN0b21lclJ1bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNob3dDdXN0b21lclJ1bGUuY29udmVydE5hbWUoZmlyc3ROYW1lLCBsYXN0TmFtZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIChmaXJzdE5hbWUgKyBsYXN0TmFtZSk7XG4gICAgfVxuICB9XG59XG4iXX0=