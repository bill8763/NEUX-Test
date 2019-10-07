/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { StringUtils, Language } from '@allianzSND/core';
import { CustomerUtils } from '../../utils/customer-utils';
export class CustomerListComponent {
    /**
     * @param {?} elementRef
     * @param {?} customerUtils
     */
    constructor(elementRef, customerUtils) {
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
    /**
     * @return {?}
     */
    get customerList() { return this._customerList; }
    /**
     * @param {?} customerList
     * @return {?}
     */
    set customerList(customerList) {
        this._customerList = customerList;
        this.loadingFinish = true;
        this.refreshFinish = true;
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
    }
    /**
     * @return {?}
     */
    get onClickCustomerID() {
        return this._onClickCustomerID;
    }
    /**
     * @param {?} onClickCustomerID
     * @return {?}
     */
    set onClickCustomerID(onClickCustomerID) {
        this._onClickCustomerID = onClickCustomerID;
    }
    //Is Default Data(No Search Status)
    /**
     * @return {?}
     */
    get isDefaultData() {
        return this.customerList.length == 0 && StringUtils.isNotEmpty(this.filterType) && this.filterType == 'NONE';
    }
    /**
     * @return {?}
     */
    get showSearchNoData() {
        return this.customerList.length == 0 && StringUtils.isNotEmpty(this.filterType) && this.filterType == 'SEARCH';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
        this._onClickCustomerID = clientID;
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
        //Settimeout to animate loader
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.customerLoad.emit();
        }), 800);
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
     * @param {?} customerItem
     * @return {?}
     */
    convertNameToShow(customerItem) {
        return this.customerUtils.convertNameToShow(customerItem.firstName, customerItem.lastName);
    }
}
CustomerListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-list',
                template: "<div class=\"customer-list-block ui-list-data\">\n    <!-- CustomerList has data-->\n    <app-ui-infinite-scroll [syncFunction]=\"['CUSTOMER']\" (loadingCallback)=\"loadCustomer($event)\" (refreshCallback)=\"refreshCustomer()\"\n        [(loadingFinish)]=\"loadingFinish\" [(refreshFinish)]=\"refreshFinish\" [lazyLoading]=\"true\" [translateText]=\"language.loading | translate\">\n        \n        <ul class=\"list-data-block stop-scroll-block\">\n            <ng-container *ngIf=\"customerList && customerList.length != 0 ; else noCustomerData\">\n    \n            <li *ngFor=\" let customer of customerList; let i = index\" Action [action]=\"'customerListClickCustomer_'+customer.clientID\" (actionClick)=\"onClickCustomer(customer.clientID)\"  class=\"list-item-block\" [ngClass]= \"[(customer.clientID == onClickCustomerID ? ' active':''), (customer.isHighlight ? ' highlight':'')]\">\n                <div class=\"title-profile-block\">\n                    <div class=\"title-block\">\n                        <div class=\"like-block\">\n                            <app-ui-btn-like-add [isLike]=\"customer.isFollow\"></app-ui-btn-like-add>\n                        </div>\n                        <div class=\"title-text\">\n                            {{convertNameToShow(customer)}}\n                        </div>\n                        <app-ui-form-radio-tag [hidden]=\"!customer.tag\" class=\"tag-item\" [checked]=\"true\" [disabled]=\"true\" [ngClass]=\"customer.tag\">{{customer.tag | translate}}</app-ui-form-radio-tag>\n                    </div>\n                    <div class=\"profile-block\">\n                        <div class=\"img-profile-block\">\n                            <ng-container *ngIf=\"customer.isOtherSource; then otherSource else appSource\"></ng-container>\n\n                            <!-- datasource from Opus-->\n                            <ng-template #otherSource>\n                                <img src=\"assets/img/icon-customer-profile-sm.svg\">\n                            </ng-template>\n\n                            <!-- datasource from APP-->\n                            <ng-template #appSource>\n                                <img src=\"assets/img/icon-customer-profile-sm-active.svg\">\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"content-block\">\n                    <app-ui-progress [value]=\"customer.complementPercent\" [theme]=\"'sub'\" [isShowValue]=\"true\">{{language.customerInformation |translate }}</app-ui-progress>\n                </div>\n            </li>\n        </ng-container>\n        </ul>\n    </app-ui-infinite-scroll>\n\n    <ng-template #noCustomerData>\n        <!-- Customer no data without search-->\n        <ng-container *ngIf=\"isDefaultData ; else customerSearchNoData\">\n            <div class=\"skelton-layout stop-scroll-block\">\n                <div class=\"theme-loading\">\n                    <div class=\"text-desc\">\n                        <span class=\"text\">{{language.click |translate }}\n                        <span class=\"icon-img\"><img src=\"assets/img/icon-add-grey.svg\"></span>\n                        <span class=\"icon-img\"><img src=\"assets/img/icon-import-grey.svg\"></span>\n                        {{language.noEdit |translate }}</span>\n                    </div>\n                    <div class=\"loading-img\">\n                        <div class=\"skelton-data-block\">\n                            <div class=\"skelton-text wd-short align-right \"></div>\n                            <div class=\"skelton-text wd-long \"></div>\n                            <div class=\"skelton-row align-side\">\n                                <div class=\"skelton-text wd-md \"></div>\n                                <div class=\"skelton-text wd-short \"></div>\n                            </div>\n                            <div class=\"skelton-text wd-long \"></div>\n                        </div>\n                        <img src=\"assets/img/loading-customer-list.svg\">\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n\n        <!-- Customer no data after searching-->\n        <ng-template #customerSearchNoData>\n            <ng-container *ngIf=\"showSearchNoData ;  else customerFilterNoData\">\n                <div class=\"status-empty search-empty\">\n                    <div class=\"empty-block\">\n                        <div class=\"img-block\">\n                            <img src=\"assets/img/empty-img-search.svg\">\n                        </div>\n                        <div class=\"text-block\">\n                            <p>{{language.noSearch |translate }}</p>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </ng-template>\n\n        <!-- Customer no data after filtering-->\n        <ng-template #customerFilterNoData>\n                <div class=\"status-empty search-empty\">\n                    <div class=\"empty-block\">\n                        <div class=\"img-block\">\n                            <img src=\"assets/img/icon-filter-no-data.svg\">\n                        </div>\n                        <div class=\"text-block\">\n                          <p>{{language.noFilter |translate }}</p>\n                        </div>\n                    </div>\n                  </div>\n        </ng-template>\n            \n    </ng-template>\n\n  </div>\n",
                styles: [".skelton-layout{margin:0}.skelton-row{display:flex}.skelton-row.align-side{justify-content:space-between}.align-right{margin:0 0 15px auto}.align-center{margin:15px auto}.skeleton-round{border-radius:50%;background-color:#ececec;max-width:100%;max-height:100%;width:100%;height:100%}.skelton-square{display:inline-block;width:30px;height:30px}.skelton-text{min-height:1rem;max-width:100%;width:100%;background-color:#ececec;display:block;margin-bottom:15px}.skelton-line{display:inline-block;max-width:100%;width:100%;background-color:#ececec;height:1px}.skelton-img-text .skelton-square{margin-bottom:10px}::ng-deep ion-skeleton-text{background-color:#ececec}::ng-deep ion-skeleton-text span{opacity:1;background-color:#ececec}.skelton-animate{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(194,194,194,.3);background:linear-gradient(to right,rgba(194,194,194,.3) 8%,rgba(194,194,194,.2) 18%,rgba(194,194,194,.3) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}@keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}.ui-list-data .skelton-layout{margin-top:30px}.ui-list-data .theme-loading{text-align:center}.ui-list-data .theme-loading .text-desc{padding-left:10%;padding-right:10%;text-align:center;display:inline-block;vertical-align:middle;margin-bottom:30px}.ui-list-data .theme-loading .text-desc .text{color:#414141;font-size:.875rem;line-height:28px;display:inline-block;vertical-align:middle}.ui-list-data .theme-loading .text-desc .text .icon-img{display:inline-block;vertical-align:middle;line-height:normal}.ui-list-data .theme-loading .loading-img{text-align:right;position:relative}.ui-list-data .theme-loading .loading-img .skelton-data-block{padding-left:10%;padding-right:10%;box-sizing:border-box;position:absolute;top:30px;width:100%}.ui-list-data .theme-loading .loading-img .skelton-text{margin-bottom:25px}.ui-list-data .theme-loading .loading-img .wd-short{max-width:30%}.ui-list-data .theme-loading .loading-img .wd-md{max-width:54%}.ui-list-data .theme-loading .loading-img .wd-long{max-width:70%}.ui-list-data .theme-loading .loading-img img{max-width:300px;width:100%}@media (max-width:1023px){.ui-list-data .theme-loading img{bottom:400px;top:auto}}@media (max-width:767px){.ui-list-data .theme-loading{height:100%;position:relative}.ui-list-data .theme-loading .text-desc{margin-bottom:30px}.ui-list-data .theme-loading .text-desc .text{max-width:185px;width:100%}.ui-list-data .theme-loading .loading-img{margin-top:0;height:100%;position:absolute;right:0;bottom:0;max-width:153px;width:100%}.ui-list-data .theme-loading .loading-img .wd-short{max-width:22%}.ui-list-data .theme-loading .loading-img .skelton-data-block{width:100%;max-width:253px;right:10px;top:60px;position:absolute}.ui-list-data .theme-loading .loading-img img{max-width:153px;margin-top:0;bottom:0;top:auto;position:absolute;right:0}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.status-empty.search-empty{padding-left:13%;padding-right:13%;box-sizing:border-box;text-align:center;display:flex;height:100%;min-height:calc(90vh - 59px - 56px - 24px);justify-content:center;align-items:center}.status-empty.search-empty .empty-block{text-align:center;margin:0 auto}.status-empty.search-empty .img-block{max-width:50px;width:100%;margin:0 auto}.status-empty.search-empty .text-block p{padding:0;font-size:1.125rem;line-height:28px}@media (max-width:767px){.status-empty.search-empty.search-empty{max-width:182px;width:100%;margin:0 auto;padding-left:0;padding-right:0}}.customer-list-block.ui-list-data{border-top:1px solid #c2c2c2;background-color:#fff}.customer-list-block.ui-list-data .title-sm-block{background-color:#ececec;display:inline-block;width:100%;padding:5px 15px 5px 6px}.customer-list-block.ui-list-data .title-sm-block p{padding:0;margin:0}.customer-list-block.ui-list-data .list-data-block{list-style-type:none;padding:0;border-bottom:1px solid #c2c2c2}.customer-list-block.ui-list-data .list-data-block .list-item-block{padding:12px 15px 12px 6px;box-sizing:border-box;position:relative}.customer-list-block.ui-list-data .list-data-block .list-item-block.highlight{background-color:#f5f5f5}@media (min-width:1024px){.customer-list-block.ui-list-data .list-data-block .list-item-block.active{background-color:#f1f9fa}}.customer-list-block.ui-list-data .list-data-block .list-item-block+.list-item-block{border-top:1px solid #c2c2c2}@media screen and (max-width:767px){.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block{display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center;width:100%;margin-bottom:5px}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .title-block .title-text{max-width:calc(100% - 27px)}}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .title-block{display:flex;justify-content:flex-start;align-items:center;margin-bottom:10px}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .title-block .title-text{font-size:.875rem;padding:0 3px;font-weight:700;display:inline-block;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .profile-block{text-align:right}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .profile-block .img-profile-block img{vertical-align:middle}@media screen and (max-width:767px){.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .title-block{margin-bottom:0;max-width:calc(100% - 14px)}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .profile-block{flex:0 0 14px}}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-whole-block .progress-value-block .progress-block{max-width:100%}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add{pointer-events:none;display:inline-block;max-width:12px;max-height:12px;width:100%;vertical-align:middle}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add{display:inline-block;width:12px}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add img{max-width:100%;width:12px}@media screen and (min-width:1025px){.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .profile-block .img-profile-block img{width:1.4vw}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add{max-width:1.2vw;max-height:1.2vw}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add{width:1.2vw}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add img{width:1.2vw}}.customer-list-block.ui-list-data .list-data-block .list-item-block .content-block{padding-left:12px}.customer-list-block.ui-list-data .list-data-block ::ng-deep .tag-item .ul-tag-block{position:relative;top:2px}.customer-list-block.ui-list-data .list-data-block ::ng-deep .tag-item ::ng-deep .tag-block{height:14px;padding-top:0;padding-bottom:0}.customer-list-block.ui-list-data ::ng-deep .progress-whole-block{padding-bottom:0}.customer-list-block.ui-list-data ::ng-deep .progress-text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}@media (min-width:769px){.customer-list-block.ui-list-data ::ng-deep .scroll-content{height:calc(100vh - (40px*2) - 140px)}}@media (max-width:767px){.customer-list-block.ui-list-data .tag-item{min-width:40px;padding-right:35px}.customer-list-block.ui-list-data .list-data-block .list-item-block{display:flex;flex-wrap:wrap}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-block{justify-content:flex-start;max-width:100%;width:100%;padding-right:0;box-sizing:border-box}.customer-list-block.ui-list-data .list-data-block .list-item-block .profile-block{max-width:20px;width:100%}.customer-list-block.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{max-width:100%;align-items:center}.customer-list-block.ui-list-data .list-data-block .list-item-block .content-block{width:100%}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-whole-block{display:flex;width:100%;justify-content:flex-end;padding-bottom:0!important}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-value-block{padding-left:10px}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-value-block .progress-block{display:none}}:host ::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - 80px - 63px - 56px - 10px)}::ng-deep html:not(.font-size_sm) .customer-list-block.ui-list-data .list-data-block .tag-item .tag-block{height:15px}@media (max-width:768px){.customer-list-block.ui-list-data .list-data-block .tag-item{padding-right:0;margin-right:25px;width:52px}.customer-list-block.ui-list-data .skelton-layout{height:calc(100vh - 55px - 55px - 134px);overflow-y:auto}:host ::ng-deep app-ui-infinite-scroll{background-color:#fff}:host ::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - 55px - 55px - 134px);height:100%}@supports (top:constant(safe-area-inset-top)){:host ::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom) - 55px - 55px - 134px)}}@supports (top:env(safe-area-inset-top)){:host ::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 55px - 55px - 134px)}}}"]
            }] }
];
CustomerListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: CustomerUtils }
];
CustomerListComponent.propDecorators = {
    customerClick: [{ type: Output }],
    customerLoad: [{ type: Output }],
    customerRefresh: [{ type: Output }],
    customerList: [{ type: Input }],
    filterType: [{ type: Input }],
    onClickCustomerID: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21lci9jb21wb25lbnRzL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixVQUFVLEVBQTBELE1BQU0sZUFBZSxDQUFDO0FBQ3RLLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBTTNELE1BQU07Ozs7O0lBT0osWUFDVSxVQUFzQixFQUN0QixhQUE0QjtRQUQ1QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTi9CLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBUzlCLGtCQUFhLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0QsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdyRCxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBVXZELGtCQUFhLEdBQXdCLEVBQUUsQ0FBQztRQVN6QyxhQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQTVCdkMsQ0FBQzs7OztJQVdMLElBQ0ksWUFBWSxLQUFLLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ2pELElBQUksWUFBWSxDQUFDLFlBQWlDO1FBRWhELElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FB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Q0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RixDQUFDOzs7WUExSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDg4S0FBNkM7O2FBRTlDOzs7WUFSMkUsVUFBVTtZQUc3RSxhQUFhOzs7NEJBa0JuQixNQUFNOzJCQUdOLE1BQU07OEJBR04sTUFBTTsyQkFHTixLQUFLO3lCQVVMLEtBQUs7Z0NBVUwsS0FBSzs7OztJQXRDTiw4Q0FBcUM7O0lBQ3JDLDhDQUFxQzs7SUFRckMsOENBQ3NFOztJQUV0RSw2Q0FDNEQ7O0lBRTVELGdEQUMrRDs7Ozs7SUFVL0QsOENBQWdEOzs7OztJQU9oRCw0Q0FBb0I7O0lBRXBCLHlDQUEyQzs7Ozs7SUFFM0MsbURBQTJCOzs7OztJQWhDekIsMkNBQThCOzs7OztJQUM5Qiw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgSW5qZWN0LCBPcHRpb25hbCwgSW5qZWN0YWJsZSwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJpbmdVdGlscywgTGFuZ3VhZ2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEN1c3RvbWVySXRlbSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJJdGVtJztcbmltcG9ydCB7IEN1c3RvbWVyVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jdXN0b21lci11dGlscyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXItbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblxuICBwdWJsaWMgbG9hZGluZ0ZpbmlzaDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyByZWZyZXNoRmluaXNoOiBib29sZWFuID0gdHJ1ZTtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGN1c3RvbWVyVXRpbHM6IEN1c3RvbWVyVXRpbHNcbiAgKSB7IH1cblxuICBAT3V0cHV0KClcbiAgcHVibGljIGN1c3RvbWVyQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21lckl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY3VzdG9tZXJMb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGN1c3RvbWVyUmVmcmVzaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgZ2V0IGN1c3RvbWVyTGlzdCgpIHsgcmV0dXJuIHRoaXMuX2N1c3RvbWVyTGlzdDsgfVxuICBzZXQgY3VzdG9tZXJMaXN0KGN1c3RvbWVyTGlzdDogQXJyYXk8Q3VzdG9tZXJJdGVtPikge1xuXG4gICAgdGhpcy5fY3VzdG9tZXJMaXN0ID0gY3VzdG9tZXJMaXN0O1xuICAgIHRoaXMubG9hZGluZ0ZpbmlzaCA9IHRydWU7XG4gICAgdGhpcy5yZWZyZXNoRmluaXNoID0gdHJ1ZTtcbiAgfVxuICBwcml2YXRlIF9jdXN0b21lckxpc3Q6IEFycmF5PEN1c3RvbWVySXRlbT4gPSBbXTtcblxuICBASW5wdXQoKVxuICBnZXQgZmlsdGVyVHlwZSgpIHsgcmV0dXJuIHRoaXMuX2ZpbHRlclR5cGU7IH1cbiAgc2V0IGZpbHRlclR5cGUoZmlsdGVyVHlwZSkge1xuICAgIHRoaXMuX2ZpbHRlclR5cGUgPSBmaWx0ZXJUeXBlO1xuICB9XG4gIHByaXZhdGUgX2ZpbHRlclR5cGU7XG5cbiAgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuXG4gIHByaXZhdGUgX29uQ2xpY2tDdXN0b21lcklEO1xuICBASW5wdXQoKVxuICBnZXQgb25DbGlja0N1c3RvbWVySUQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uQ2xpY2tDdXN0b21lcklEO1xuICB9XG4gIHNldCBvbkNsaWNrQ3VzdG9tZXJJRChvbkNsaWNrQ3VzdG9tZXJJRCkge1xuICAgIHRoaXMuX29uQ2xpY2tDdXN0b21lcklEID0gb25DbGlja0N1c3RvbWVySUQ7XG4gIH1cblxuICAvL0lzIERlZmF1bHQgRGF0YShObyBTZWFyY2ggU3RhdHVzKVxuICBwdWJsaWMgZ2V0IGlzRGVmYXVsdERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tZXJMaXN0Lmxlbmd0aCA9PSAwICYmIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5maWx0ZXJUeXBlKSAmJiB0aGlzLmZpbHRlclR5cGUgPT0gJ05PTkUnO1xuICB9XG5cbiAgcHVibGljIGdldCBzaG93U2VhcmNoTm9EYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbWVyTGlzdC5sZW5ndGggPT0gMCAmJiBTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuZmlsdGVyVHlwZSkgJiYgdGhpcy5maWx0ZXJUeXBlID09ICdTRUFSQ0gnO1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgfVxuXG5cbiAgdHJhY2tCeUNsaWVudElEKGluZGV4LCBpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0uY2xpZW50SUQ7XG4gIH1cblxuXG5cbiAgYXN5bmMgY2xvc2VTbGlkaW5nSXRlbXMoKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnbGlzdCBjbG9zZVNsaWRpbmdJdGVtcycpO1xuXG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pdGVtLXNsaWRpbmcnKTtcbiAgICBpZiAoaXRlbSAhPSBudWxsKSB7XG4gICAgICAvLy8gY29uc29sZS5kZWJ1ZygnaXRlbSBzaXplJyxpdGVtLmxlbmd0aCk7XG4gICAgICBjb25zb2xlLmRlYnVnKCdpdGVtJywgaXRlbSk7XG4gICAgICBhd2FpdCBpdGVtLmNsb3NlKCk7XG4gICAgICBhd2FpdCBpdGVtLmNsb3NlT3BlbmVkKCk7XG4gICAgfVxuXG4gIH1cblxuICBvbkNsaWNrQ3VzdG9tZXIoY2xpZW50SUQ6IHN0cmluZykge1xuXG4gICAgdGhpcy5fb25DbGlja0N1c3RvbWVySUQgPSBjbGllbnRJRDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZVNsaWRpbmdJdGVtcygpO1xuICAgIH0sIDMwMCk7XG5cbiAgICBsZXQgaXRlbSA9IHRoaXMuY3VzdG9tZXJMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uY2xpZW50SUQgPT0gY2xpZW50SUQpO1xuXG4gICAgdGhpcy5jdXN0b21lckNsaWNrLmVtaXQoaXRlbVswXSk7XG4gIH1cblxuXG4gIGxvYWRDdXN0b21lcihlKSB7XG4gICAgY29uc29sZS5sb2coJ2xhenkgbG9hZCBjdXN0b21lcjonLCBlKTtcbiAgICAvL1NldHRpbWVvdXQgdG8gYW5pbWF0ZSBsb2FkZXJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY3VzdG9tZXJMb2FkLmVtaXQoKTtcbiAgICB9LCA4MDApO1xuXG4gIH1cblxuICByZWZyZXNoQ3VzdG9tZXIoKSB7XG4gICAgLy9zZXQgdGltZW91dCBmb3IgcmVmcmVzaCBhbmltYXRpb25cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY3VzdG9tZXJSZWZyZXNoLmVtaXQoKTtcbiAgICB9LCA4MDApO1xuICB9XG5cbiAgY29udmVydE5hbWVUb1Nob3coY3VzdG9tZXJJdGVtOiBDdXN0b21lckl0ZW0pOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbWVyVXRpbHMuY29udmVydE5hbWVUb1Nob3coY3VzdG9tZXJJdGVtLmZpcnN0TmFtZSwgY3VzdG9tZXJJdGVtLmxhc3ROYW1lKTtcbiAgfVxufVxuIl19