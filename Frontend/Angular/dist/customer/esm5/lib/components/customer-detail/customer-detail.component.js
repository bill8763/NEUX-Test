/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { DateUtils, StringUtils, Language } from '@allianzSND/core';
import { CustomerDetail } from '../../service/model/CustomerDetail';
var CustomerDetailComponent = /** @class */ (function () {
    function CustomerDetailComponent(dateUtils, changeDetctor) {
        this.dateUtils = dateUtils;
        this.changeDetctor = changeDetctor;
        this.onEditDetail = new EventEmitter();
        this.onCallPhone = new EventEmitter();
        this.onDeleteDetail = new EventEmitter();
        this.onAddAppointment = new EventEmitter();
        this.followChange = new EventEmitter();
        this._customerDetail = new CustomerDetail();
        this.language = new Language();
        // empty status
        this.isEmptyAppointment = false;
        this.isEmptyEdit = false;
        this.isEmptyDel = false;
        this.isEmptyDetailInfo = false;
        this.isEmptyContactNote = false;
        this.isCollapseBtnShow = true;
        this.isHasAgeRange = false;
        this.isHasContactFrequancy = false;
    }
    Object.defineProperty(CustomerDetailComponent.prototype, "customerDetail", {
        get: /**
         * @return {?}
         */
        function () { return this._customerDetail; },
        set: /**
         * @param {?} inputCustomerDetail
         * @return {?}
         */
        function (inputCustomerDetail) {
            //check datasource is from OPUS
            this._customerDetail = inputCustomerDetail;
            console.log('inputCustomerDetail: ', inputCustomerDetail);
            if (this._customerDetail.dataSource == 'OPUS') {
                this.isEmptyDel = true;
            }
            else {
                this.isEmptyDel = false;
            }
            this._customerDetail.updateEmptyStatus();
            this.convertEmptyValToDisplayText(this._customerDetail);
            this.checkInfoIsEmpty();
            this.changeCollateButton();
            this.changeDetctor.detectChanges();
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
        console.debug('changeCollateButton', this.customerDetail.tels.length, this.customerDetail.emails.length, this.customerDetail.addresses.length);
        if (this.customerDetail.tels.length <= 2 && this.customerDetail.emails.length <= 1 && this.customerDetail.addresses.length <= 1) {
            this.isCollapseBtnShow = false;
        }
        else {
            this.isCollapseBtnShow = true;
        }
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
        //if detail info is empty , display no data status      
        if (this.customerDetail.isEmptyInfo) {
            this.isEmptyDetailInfo = true;
        }
        else {
            this.isEmptyDetailInfo = false;
        }
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
        //if not data set default value(?? or -- --)
        console.log("convertEmptyValToDisplayText: ", customerDetail);
        if (StringUtils.isEmpty(customerDetail.ageRange)) {
            this.isHasAgeRange = false;
        }
        else {
            this.isHasAgeRange = true;
        }
        if (StringUtils.isEmpty(customerDetail.contactFrequancy)) {
            this.isHasContactFrequancy = false;
        }
        else {
            this.isHasContactFrequancy = true;
        }
        if (StringUtils.isEmpty(customerDetail.gender))
            customerDetail.gender = '- -';
        if (StringUtils.isEmpty(customerDetail.occupation))
            customerDetail.occupation = '- -';
        if (StringUtils.isEmpty(customerDetail.company))
            customerDetail.company = '- -';
        if (StringUtils.isEmpty(customerDetail.income))
            customerDetail.income = '- -';
        if (StringUtils.isEmpty(customerDetail.source))
            customerDetail.source = '- -';
        if (StringUtils.isEmpty(customerDetail.marriage))
            customerDetail.marriage = '- -';
        if (StringUtils.isEmpty(customerDetail.children))
            customerDetail.children = '- -';
        if (StringUtils.isEmpty(customerDetail.familiarity))
            customerDetail.familiarity = '- -';
        if (StringUtils.isEmpty(customerDetail.recentStatus))
            customerDetail.recentStatus = '- -';
        if (StringUtils.isEmpty(customerDetail.manpa))
            customerDetail.manpa = '- -';
        if (StringUtils.isEmpty(customerDetail.children))
            customerDetail.children = '- -';
    };
    /**
     * @return {?}
     */
    CustomerDetailComponent.prototype.toBirthday = /**
     * @return {?}
     */
    function () {
        if (this.customerDetail.birthday != undefined) {
            return this.dateUtils.toDateString(this.customerDetail.birthday, 'yyyy-MM-dd');
        }
        else {
            return '- -';
        }
    };
    /**
     * @return {?}
     */
    CustomerDetailComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
        this.onEditDetail.emit(this.customerDetail.clientID);
    };
    /**
     * @return {?}
     */
    CustomerDetailComponent.prototype.delete = /**
     * @return {?}
     */
    function () {
        this.onDeleteDetail.emit(this.customerDetail.clientID);
    };
    /**
     * @return {?}
     */
    CustomerDetailComponent.prototype.callPhone = /**
     * @return {?}
     */
    function () {
        this.onCallPhone.emit(this.customerDetail.clientID);
    };
    /**
     * @return {?}
     */
    CustomerDetailComponent.prototype.addAppointment = /**
     * @return {?}
     */
    function () {
        this.onAddAppointment.emit(this.customerDetail.clientID);
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
        this.customerDetail.updateFollowStatus(isFollow);
        this.changeDetctor.detectChanges();
        //ouput follow detail change status
        this.followChange.emit({ 'isFollow': isFollow, "clientID": this.customerDetail.clientID });
    };
    CustomerDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-customer-detail',
                    template: "<!-- has CustomerDetail data-->\n<ng-container *ngIf=\"customerDetail != undefined && customerDetail.clientID != ''; else noCustomerData\">\n  <div class=\"main-detail-content\">\n    <!-- profile -->\n    <div class=\"space-ui-element profile-block\">\n        <div class=\"img-block\" [ngClass]=\"customerDetail.dataSource == 'OPUS' ? '': ' active'\">\n          <!-- if true show active img (green) or show normal img -->\n          <img class=\"normal-img\" src=\"assets/img/img-cust-profile.svg\">\n          <img class=\"active-img\" src=\"assets/img/img-cust-profile-active.svg\">\n        </div>\n        <div class=\"content-block\">\n          <ng-container *ngIf=\"customerDetail.possibility != ''\">\n              <app-ui-form-radio-tag class=\"wd-lg profile-tag\" [checked]=\"true\" [disabled]=\"true\" [ngClass]=\"customerDetail.possibility\">{{customerDetail.possibility|translate}}</app-ui-form-radio-tag>\n          </ng-container>\n          \n          <div class=\"name-block\">\n              {{customerDetail.lastName  + customerDetail.firstName}}\n          </div>\n          <div class=\"sm-text\">\n              <span class=\"age\" *ngIf=\"isHasAgeRange\">\n                ({{customerDetail.ageRange}})\n              </span>\n              <span class=\"detail-text\" *ngIf=\"isHasContactFrequancy\">\n                  {{language.contactFrequency|translate }}\n                  <span class=\"text-focus\">{{customerDetail.contactFrequancy}}</span>\n                  {{language.timePerYear|translate }}\n              </span>\n            </div>\n        </div>\n        <div class=\"like-block\">\n          <app-ui-btn-like-add [isLike]=\"customerDetail.isFollow\" (onChange)=\"isFollowChange($event)\"></app-ui-btn-like-add>\n        </div>\n        \n    </div>\n    <!-- end of profile -->\n\n    <!-- link -->\n    <ul class=\"space-ui-element ui-list-block\">\n        <li class=\"list-item-block\" [ngClass]=\"isEmptyAppointment? ' disable': ''\">\n            <button Action action='addAppointment' (actionClick)=\"addAppointment()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src=\"assets/img/icon-cust-appointment-disable.svg\">\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-appointment.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.appointment|translate }}</p>\n                </div>\n            </button>\n        </li>\n        <li class=\"list-item-block\" [ngClass]=\"customerDetail.tels.length == 0? ' disable': ''\">\n            <button Action action=\"customerCallPhone\" (actionClick)=\"callPhone()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src=\"assets/img/icon-cust-contact-disable.svg\">\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-contact.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.contact|translate }}</p>\n                </div>\n            </button>\n        </li>\n        <li class=\"list-item-block\" [ngClass]=\"isEmptyEdit? ' disable': ''\">\n            <button Action action=\"customerEdit\" (actionClick)=\"edit()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src=\"assets/img/icon-cust-edit-disable.svg\">\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-edit.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.edit|translate }}</p>\n                </div>\n            </button>\n        </li>\n        <li class=\"list-item-block\" [ngClass]=\"isEmptyDel? ' disable': ''\">\n            <button Action action=\"customerDelete\" (actionClick)=\"delete()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src='assets/img/icon-cust-del-disable.svg'>\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-del.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.delete|translate }}</p>\n                </div>\n            </button>\n            \n        </li>\n    </ul>\n    <!-- end of link block -->\n    <div *ngTemplateOutlet=\"detailPreTemplate\"></div>\n    <!-- first card -->\n    <app-ui-collapse-text1 class=\"card1-all-block\" [(isCollapseBtnShow)]=\"isCollapseBtnShow\" [translateEmpty]=\"language.empty | translate\" [isDataEmpty]=\"customerDetail.tels.length == 0 && customerDetail.emails.length == 0 && customerDetail.addresses.length == 0\">\n          <!-- \u96FB\u8A71-->\n          <ng-container TextType=\"collapseContentOrigin\">\n              <ng-container *ngIf=\"customerDetail.tels.length != 0\">\n                  <app-ui-info-text1 [imgSrc]=\"'assets/img/icon-form-phone.svg'\">\n                    <ng-container textType=\"title\">{{customerDetail.tels[0].telType|translate }}</ng-container>\n                    <ng-container textType=\"text\">{{customerDetail.tels[0].tel }}</ng-container>\n                </app-ui-info-text1>\n              </ng-container>\n          </ng-container>\n\n          <ng-container TextType=\"collapseContentOrigin2\">\n              <ng-container *ngIf=\"customerDetail.tels.length > 1\">\n                  <app-ui-info-text1 >\n                    <ng-container textType=\"title\">{{customerDetail.tels[1].telType|translate}}</ng-container>\n                    <ng-container textType=\"text\">{{customerDetail.tels[1].tel}}</ng-container>\n                </app-ui-info-text1>\n              </ng-container>\n          </ng-container>\n\n          <ng-container TextType=\"collapseContent\">\n              <ng-container *ngIf=\"customerDetail.tels.length > 2\">\n                <ng-container *ngFor=\"let customerTel of customerDetail.tels; let i = index;\">\n                  <ng-container *ngIf=\"i > 1 && (i + 1) % 2 != 0\">\n                      <app-ui-info-text1>\n                        <ng-container textType=\"title\">{{customerTel.telType|translate}}</ng-container>\n                        <ng-container textType=\"text\">{{customerTel.tel}}</ng-container>\n                      </app-ui-info-text1>\n                </ng-container>\n                  </ng-container>\n                </ng-container>\n            </ng-container>\n\n            <ng-container TextType=\"collapseContent2\">\n                <ng-container *ngIf=\"customerDetail.tels.length > 2\">\n                  <ng-container *ngFor=\"let customerTel of customerDetail.tels; let i = index;\">\n                    <ng-container *ngIf=\"i > 1 && (i + 1) % 2 == 0\">\n                        <app-ui-info-text1>\n                          <ng-container textType=\"title\">{{customerTel.telType|translate}}</ng-container>\n                          <ng-container textType=\"text\">{{customerTel.tel}}</ng-container>\n                        </app-ui-info-text1>\n                  </ng-container>\n                    </ng-container>\n                  </ng-container>\n              </ng-container>\n          <!-- end of \u96FB\u8A71-->\n\n          <!-- Email-->        \n          <ng-container TextType=\"collapseContentOrigin3\">\n              <ng-container *ngIf=\"customerDetail.emails.length != 0\">\n              <app-ui-info-text1  [imgSrc]=\"'assets/img/icon-form-mail.svg'\">\n                <ng-container textType=\"title\">{{customerDetail.emails[0].emailType|translate}}</ng-container>\n                <ng-container textType=\"text\">{{customerDetail.emails[0].email}}</ng-container>\n              </app-ui-info-text1>\n             </ng-container>     \n          </ng-container>\n\n          <ng-container TextType=\"collapseContent3\">\n              <ng-container *ngIf=\"customerDetail.emails.length > 1\">\n                <ng-container *ngFor=\"let email of customerDetail.emails ; let i = index\">\n                  <ng-container *ngIf=\"i >= 1\">\n                      <app-ui-info-text1>\n                        <ng-container textType=\"title\">{{email.emailType|translate}}</ng-container>\n                        <ng-container textType=\"text\">{{email.email}}</ng-container>\n                      </app-ui-info-text1>\n                  </ng-container>                     \n              </ng-container>\n              </ng-container>            \n          </ng-container>\n          <!-- end of Email-->\n\n          <!-- Address-->\n          \n          <ng-container TextType=\"collapseContentOrigin4\">\n              <ng-container *ngIf=\"customerDetail.addresses.length != 0\">\n                  <app-ui-info-text1 [imgSrc]=\"'assets/img/icon-form-addr.svg'\">\n                    <ng-container textType=\"title\">{{customerDetail.addresses[0].addressType|translate}}</ng-container>\n                    <ng-container textType=\"text\">{{customerDetail.addresses[0].toFullAddress()}}</ng-container>\n                  </app-ui-info-text1>\n              </ng-container>\n          </ng-container>\n\n          <ng-container TextType=\"collapseContent4\">\n              <ng-container *ngIf=\"customerDetail.addresses.length > 1\">\n                  <ng-container *ngFor=\"let address of customerDetail.addresses ; let i = index\">\n                      <ng-container *ngIf=\"i >= 1\">\n                          <app-ui-info-text1 [imgSrc]=\"''\">\n                              <ng-container textType=\"title\">{{address.addressType|translate}}</ng-container>\n                              <ng-container textType=\"text\">{{address.toFullAddress()}}</ng-container>\n                            </app-ui-info-text1>\n                      </ng-container>                    \n                  </ng-container>  \n              </ng-container>\n            \n          </ng-container>\n\n          \n                \n          <!-- end of Address-->\n      \n    </app-ui-collapse-text1>\n\n    <!-- end of first card -->\n\n\n    <!-- 2nd card -->\n    <app-ui-collapse-card1 [isDataEmpty]=\"isEmptyDetailInfo\" [tagText]=\"[language.detail | translate]\" [emptyText]=\"[language.noClick | translate, language.noInformation | translate]\" >\n        <ng-container textType=\"collapseContentOrigin\">\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.birthday|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{toBirthday()}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.gender|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.gender}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.occupation|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.occupation}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.company|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.company}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.annualIncome|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.income}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.source|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.source}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.marriage|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.marriage}} </ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.children|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.children}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.familiarity|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.familiarity}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.recentStatus|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.recentStatus}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.customerStatus|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.manpa}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>        \n\n              <!-- <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-info-text2>\n                    <ng-container textType=\"title\">{{language.extraItem|translate }}</ng-container>\n                    <ng-container textType=\"text\">ExtraItem</ng-container>\n                  </app-ui-info-text2>\n                </app-ui-form-layout-col>      -->\n            </app-ui-form-layout-row>\n        </ng-container>\n        <ng-container textType=\"collapseContent\">\n            <!-- <app-ui-form-layout-row>\n                \n              </app-ui-form-layout-row>\n\n              <app-ui-form-layout-row>\n                <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-info-text2>\n                    <ng-container textType=\"title\">ExtraItem3</ng-container>\n                    <ng-container textType=\"text\">ExtraItem3</ng-container>\n                  </app-ui-info-text2>\n                </app-ui-form-layout-col>\n              </app-ui-form-layout-row> -->\n        </ng-container>\n    </app-ui-collapse-card1>\n    <!-- end of 2nd card -->\n    <div *ngTemplateOutlet=\"detailPostTemplate\"></div>\n  </div>\n</ng-container>\n\n<ng-template #noCustomerData>\n  <div class=\"main-detail-content skelton-layout\">\n    <div class=\"theme-loading\" style=\"background-image:url('assets/img/loading-customer-main.svg')\">\n      <!-- profile -->\n      <div class=\"space-ui-element profile-block\">\n          <div class=\"img-block\">\n            <div class=\"skeleton-round \"></div>\n          </div>\n          <div class=\"content-block\">\n            <div class=\"tag-block\">\n                <div class=\"skelton-text  \" ></div>\n            </div>\n            <div class=\"name-block\">\n                <div class=\"skelton-text \" ></div>\n            </div>\n            <div class=\"sm-text\">\n                <div class=\"skelton-text \" ></div>\n            </div>\n          </div>\n      </div>\n      <!-- end of profile -->\n      <!-- link list -->\n      <ul class=\"ui-list-block\">\n          <li class=\"list-item-block\" *ngFor='let number of [0,1,2,3]' >\n              <div class=\"skelton-img-text\">\n                  <div class=\"skelton-square\">\n                      <div class=\"skeleton-round \"></div>\n                  </div>\n                  <div class=\"skelton-text \" ></div>\n              </div>\n          </li>\n      </ul>\n      <!-- end of link list -->\n      <!-- line -->\n      <div class=\"skelton-line-block\">\n          <div class=\"skelton-line \"></div>\n      </div>\n      <!-- end of line -->\n  \n      <!-- list data -->\n      <div class=\"card-text\">\n        <div class=\"left-part\">\n          <div class=\"data-group\">\n              \n              <div class=\"skelton-text   wd-short\"></div>\n              <div class=\"skelton-text   wd-long\"></div>\n              <div class=\"skelton-text   wd-short\"></div>\n              <div class=\"skelton-text   wd-long\"></div>\n              <div class=\"skelton-text   wd-long\"></div>\n          </div>\n        </div>\n        <div class=\"right-part\">\n            <div class=\"data-group\">\n                <div class=\"skelton-text   wd-short\"></div>\n                <div class=\"skelton-text   wd-long\"></div>\n                <div class=\"skelton-text   wd-short\"></div>\n                <div class=\"skelton-text   wd-long\"></div>\n            </div>\n        </div>\n      </div>\n  \n      <!-- end of list data -->\n  \n       <!-- line -->\n       <div class=\"skelton-line-block\">\n          <div class=\"skelton-line \"></div>\n      </div>\n       <!-- end of line -->\n  \n  \n      \n    </div>\n  </div>\n    <!-- Customer data is empty -->\n</ng-template>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.skelton-layout{margin:0}.skelton-row{display:flex}.skelton-row.align-side{justify-content:space-between}.align-right{margin:0 0 15px auto}.align-center{margin:15px auto}.skeleton-round{border-radius:50%;background-color:#ececec;max-width:100%;max-height:100%;width:100%;height:100%}.skelton-square{display:inline-block;width:30px;height:30px}.skelton-text{min-height:1rem;max-width:100%;width:100%;background-color:#ececec;display:block;margin-bottom:15px}.skelton-line{display:inline-block;max-width:100%;width:100%;background-color:#ececec;height:1px}.skelton-img-text .skelton-square{margin-bottom:10px}::ng-deep ion-skeleton-text{background-color:#ececec}::ng-deep ion-skeleton-text span{opacity:1;background-color:#ececec}.skelton-animate{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(194,194,194,.3);background:linear-gradient(to right,rgba(194,194,194,.3) 8%,rgba(194,194,194,.2) 18%,rgba(194,194,194,.3) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}@keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}.main-detail-content.skelton-layout{margin:0 -40px 0 0}@media (max-width:767px){.main-detail-content.skelton-layout{margin-right:-40px}.main-detail-content.skelton-layout .profile-block .content-block{max-width:70%}.main-detail-content.skelton-layout .theme-loading .ui-list-block .list-item-block{margin-right:0}}.main-detail-content .skelton-line-block{padding-right:40px}.main-detail-content .theme-loading{background-size:contain;background-position:bottom right;background-repeat:no-repeat;width:100%;min-height:100vh;padding-right:40px}.main-detail-content .theme-loading .profile-block .img-block{display:inline-block;max-width:100%;width:63px;height:63px;padding-right:0;margin-right:20px}.main-detail-content .theme-loading .profile-block .tag-block{max-width:15%}.main-detail-content .theme-loading .profile-block .name-block{max-width:30%;padding-bottom:0}.main-detail-content .theme-loading .profile-block .sm-text{max-width:55%}.main-detail-content .theme-loading .profile-block ::ng-deep ion-skeleton-text{margin-bottom:10px}.main-detail-content .theme-loading .ui-list-block{margin-bottom:20px}.main-detail-content .theme-loading .ui-list-block .list-item-block{margin-right:5%}.main-detail-content .theme-loading .ui-list-block .skelton-img-text .skelton-text{max-width:80%;margin:0 auto}.main-detail-content .theme-loading .skelton-square{width:3rem;height:3rem}.main-detail-content .theme-loading .card-text{display:flex}.main-detail-content .theme-loading .card-text .left-part{width:40%;box-sizing:border-box;padding:2rem}.main-detail-content .theme-loading .card-text .right-part{width:60%;box-sizing:border-box;padding:2rem}.main-detail-content .theme-loading .card-text .wd-short{max-width:5rem}.main-detail-content .theme-loading .card-text .wd-long{max-width:100%}@media (min-width:768px){.main-detail-content{padding-right:40px}.main-detail-content.skelton-layout{padding-right:0}}@media (min-width:769px){.main-detail-content{padding-top:40px}}.profile-block{display:flex;justify-content:flex-start;flex-wrap:wrap;width:100%;position:relative}.profile-block .img-block{padding-right:15px}.profile-block .img-block img{border-radius:50%;display:inline-block;width:60px;height:60px}.profile-block .img-block .active-img,.profile-block .img-block.active .normal-img{display:none}.profile-block .img-block.active .active-img{display:block}.profile-block .content-block{max-width:calc(100% - 40px - 10px - 60px - 15px);width:100%}.profile-block .content-block ::ng-deep .tag-block{margin-bottom:5px}.profile-block .content-block .name-block{font-size:1.25rem;font-weight:700;padding-bottom:5px;line-height:28px;white-space:normal;word-wrap:break-word}.profile-block .sm-text{font-size:.875rem;line-height:28px;width:100%}.profile-block .sm-text .text-focus{color:#003781;font-weight:700;font-size:1.125rem;display:inline-block;padding:0 5px;vertical-align:middle}.profile-block .age{display:inline-block;line-height:28px;min-height:28px;margin-right:5px}.profile-block .like-block{position:absolute;top:0;right:0}.profile-block .like-block ::ng-deep img{max-width:40px;width:100%}@media (max-width:768px){.main-detail-content{padding-top:30px}.profile-block{padding-left:15px;padding-right:6px;position:static}.profile-block .like-block{right:10px;top:10px}.profile-block .img-block{padding-right:10px}.profile-block .img-block img{width:45px;height:45px}.profile-block .content-block{max-width:calc(100% - 45px - 10px)}.profile-block .content-block .name-block{padding-right:50px}}@media screen and (min-width:1025px){.profile-block .img-block{width:calc(caculate-vw($wd-profile-img) + 15px)}.profile-block .img-block img{width:6vw;height:6vw}.profile-block .content-block{max-width:calc(100% - 4vw - 10px - 6vw - 15px)}.profile-block .like-block ::ng-deep img{max-width:4vw}}.ui-list-block{display:flex;list-style-type:none;margin-right:-30px;justify-content:center;align-items:baseline}.ui-list-block button{border:none;background-color:transparent;padding:0}.ui-list-block .list-item-block{width:25%;max-width:5.625rem;text-align:center;margin-right:30px}.ui-list-block .list-item-block .img-block{max-width:40px;width:100%;margin:0 auto}.ui-list-block .list-item-block .img-block img{max-width:100%;width:100%}.ui-list-block .list-item-block.disable{pointer-events:none}.ui-list-block .list-item-block.disable .text-block{color:#414141}.ui-list-block .list-item-block .img-disable,.ui-list-block .list-item-block.disable .img-normal{display:none}.ui-list-block .list-item-block.disable .img-disable{display:inline-block;pointer-events:none}.ui-list-block .list-item-block .text-block p{color:#414141;line-height:normal;font-size:.875rem;margin:4px 0 0}@media (min-width:1023px){.ui-list-block .ui-list-block{padding-left:13%;padding-right:13%;box-sizing:border-box}}@media (max-width:767px){.ui-list-block{flex-wrap:wrap;margin-right:-10px}.ui-list-block .list-item-block{margin-right:0;max-width:100px}}@media (max-width:374px){.ui-list-block{flex-wrap:wrap;margin-right:0}.ui-list-block .list-item-block{margin-right:0}.ui-list-block .list-item-block .text-block p{font-size:.75rem}}@media screen and (min-width:1025px){.ui-list-block .list-item-block{max-width:9vw}.ui-list-block .list-item-block .img-block{max-width:4vw;width:4vw}}::ng-deep .card1-all-block .card-content-block{padding-top:20px}::ng-deep .card1-all-block .gas-row-block{margin-top:0}::ng-deep .card1-all-block .gas-row-block+.gas-row-block{margin-top:4px}@media (min-width:769px){::ng-deep .card1-all-block .gas-layout-form{box-sizing:border-box;padding-left:51px;padding-right:64px}::ng-deep .card1-all-block .gas-row-block{margin-top:0}}@media (max-width:767px){::ng-deep .card1-all-block .gas-layout-form{padding-left:15px}}"]
                }] }
    ];
    CustomerDetailComponent.ctorParameters = function () { return [
        { type: DateUtils },
        { type: ChangeDetectorRef }
    ]; };
    CustomerDetailComponent.propDecorators = {
        onEditDetail: [{ type: Output }],
        onCallPhone: [{ type: Output }],
        onDeleteDetail: [{ type: Output }],
        onAddAppointment: [{ type: Output }],
        followChange: [{ type: Output }],
        detailPreTemplate: [{ type: Input }],
        detailPostTemplate: [{ type: Input }],
        customerDetail: [{ type: Input }]
    };
    return CustomerDetailComponent;
}());
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
    CustomerDetailComponent.prototype.detailPreTemplate;
    /** @type {?} */
    CustomerDetailComponent.prototype.detailPostTemplate;
    /**
     * @type {?}
     * @private
     */
    CustomerDetailComponent.prototype._customerDetail;
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
    CustomerDetailComponent.prototype.isEmptyContactNote;
    /** @type {?} */
    CustomerDetailComponent.prototype.isCollapseBtnShow;
    /** @type {?} */
    CustomerDetailComponent.prototype.isHasAgeRange;
    /** @type {?} */
    CustomerDetailComponent.prototype.isHasContactFrequancy;
    /**
     * @type {?}
     * @private
     */
    CustomerDetailComponent.prototype.dateUtils;
    /**
     * @type {?}
     * @private
     */
    CustomerDetailComponent.prototype.changeDetctor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY3VzdG9tZXItZGV0YWlsL2N1c3RvbWVyLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVwRTtJQWdFRSxpQ0FBb0IsU0FBcUIsRUFBVSxhQUErQjtRQUE5RCxjQUFTLEdBQVQsU0FBUyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBeEQxRSxpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhELGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkQsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRCxxQkFBZ0IsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1RCxpQkFBWSxHQUE2RCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBVTVGLG9CQUFlLEdBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7UUF1QnhELGFBQVEsR0FBYyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBRTVDLGVBQWU7UUFDUix1QkFBa0IsR0FBWSxLQUFLLENBQUM7UUFDcEMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BD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QyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFbkMsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO0lBRzNGLENBQUM7O2dCQXhLRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsOHRsQkFBK0M7O2lCQUVoRDs7O2dCQVBRLFNBQVM7Z0JBRHNDLGlCQUFpQjs7OytCQVd0RSxNQUFNOzhCQUVOLE1BQU07aUNBRU4sTUFBTTttQ0FFTixNQUFNOytCQUVOLE1BQU07b0NBSU4sS0FBSztxQ0FHTCxLQUFLO2lDQUtMLEtBQUs7O0lBK0lSLDhCQUFDO0NBQUEsQUExS0QsSUEwS0M7U0FyS1ksdUJBQXVCOzs7Ozs7SUFFbEMsK0NBQ2dFOzs7OztJQUNoRSw4Q0FDK0Q7Ozs7O0lBQy9ELGlEQUNrRTs7Ozs7SUFDbEUsbURBQ29FOzs7OztJQUNwRSwrQ0FDb0c7O0lBR3BHLG9EQUNtQzs7SUFFbkMscURBQ29DOzs7OztJQUdwQyxrREFBK0Q7O0lBdUIvRCwyQ0FBNEM7O0lBRzVDLHFEQUEyQzs7SUFDM0MsOENBQW9DOztJQUNwQyw2Q0FBbUM7O0lBQ25DLG9EQUEwQzs7SUFDMUMscURBQTJDOztJQUMzQyxvREFBMkM7O0lBQzNDLGdEQUFzQzs7SUFDdEMsd0RBQThDOzs7OztJQUtsQyw0Q0FBNkI7Ozs7O0lBQUUsZ0RBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsSW5wdXQsIE91dHB1dCAsRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVVdGlscywgU3RyaW5nVXRpbHMsIExhbmd1YWdlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSdcbmltcG9ydCB7IEN1c3RvbWVyRGV0YWlsIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbC9DdXN0b21lckRldGFpbCc7IFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbWVyLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAT3V0cHV0KClcbiAgcHJpdmF0ZSBvbkVkaXREZXRhaWw6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgcHJpdmF0ZSBvbkNhbGxQaG9uZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIG9uRGVsZXRlRGV0YWlsOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgb25BZGRBcHBvaW50bWVudDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIGZvbGxvd0NoYW5nZSA6IEV2ZW50RW1pdHRlcjx7J2lzRm9sbG93JzogYm9vbGVhbiwgJ2NsaWVudElEJzogc3RyaW5nfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gXG4gIC8vZm9yIGV4dGVuc2lvbiBwbGFjZWhvbGRlclxuICBASW5wdXQoKVxuICBkZXRhaWxQcmVUZW1wbGF0ZTpUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGRldGFpbFBvc3RUZW1wbGF0ZTpUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cbiAgcHJpdmF0ZSBfY3VzdG9tZXJEZXRhaWw6IEN1c3RvbWVyRGV0YWlsID0gbmV3IEN1c3RvbWVyRGV0YWlsKCk7XG4gIEBJbnB1dCgpIFxuICBnZXQgY3VzdG9tZXJEZXRhaWwoKSB7IHJldHVybiB0aGlzLl9jdXN0b21lckRldGFpbDt9XG4gIHNldCBjdXN0b21lckRldGFpbChpbnB1dEN1c3RvbWVyRGV0YWlsKSB7XG4gICAgICAvL2NoZWNrIGRhdGFzb3VyY2UgaXMgZnJvbSBPUFVTXG4gICAgICB0aGlzLl9jdXN0b21lckRldGFpbCA9IGlucHV0Q3VzdG9tZXJEZXRhaWw7XG4gICAgICBjb25zb2xlLmxvZygnaW5wdXRDdXN0b21lckRldGFpbDogJywgaW5wdXRDdXN0b21lckRldGFpbCk7XG4gICAgICBpZih0aGlzLl9jdXN0b21lckRldGFpbC5kYXRhU291cmNlID09ICdPUFVTJykge1xuICAgICAgICB0aGlzLmlzRW1wdHlEZWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaXNFbXB0eURlbCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jdXN0b21lckRldGFpbC51cGRhdGVFbXB0eVN0YXR1cygpO1xuICAgICAgdGhpcy5jb252ZXJ0RW1wdHlWYWxUb0Rpc3BsYXlUZXh0KHRoaXMuX2N1c3RvbWVyRGV0YWlsKTtcbiAgICAgIHRoaXMuY2hlY2tJbmZvSXNFbXB0eSgpO1xuICAgICAgdGhpcy5jaGFuZ2VDb2xsYXRlQnV0dG9uKCk7XG4gICAgICBcbiAgICAgIHRoaXMuY2hhbmdlRGV0Y3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuXG4gIHB1YmxpYyBsYW5ndWFnZSA6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG5cbiAgLy8gZW1wdHkgc3RhdHVzXG4gIHB1YmxpYyBpc0VtcHR5QXBwb2ludG1lbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzRW1wdHlFZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0VtcHR5RGVsOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0VtcHR5RGV0YWlsSW5mbzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNFbXB0eUNvbnRhY3ROb3RlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0NvbGxhcHNlQnRuU2hvdyAgOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGlzSGFzQWdlUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzSGFzQ29udGFjdEZyZXF1YW5jeTogYm9vbGVhbiA9IGZhbHNlO1xuICBcblxuICBcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVVdGlscyA6IERhdGVVdGlscywgcHJpdmF0ZSBjaGFuZ2VEZXRjdG9yOkNoYW5nZURldGVjdG9yUmVmLCBcbiAgICkge1xuICAgXG4gICB9XG4gICBcblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlQ29sbGF0ZUJ1dHRvbigpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdjaGFuZ2VDb2xsYXRlQnV0dG9uJyx0aGlzLmN1c3RvbWVyRGV0YWlsLnRlbHMubGVuZ3RoLHRoaXMuY3VzdG9tZXJEZXRhaWwuZW1haWxzLmxlbmd0aCx0aGlzLmN1c3RvbWVyRGV0YWlsLmFkZHJlc3Nlcy5sZW5ndGgpO1xuICAgIGlmKHRoaXMuY3VzdG9tZXJEZXRhaWwudGVscy5sZW5ndGggPD0gMiAmJiB0aGlzLmN1c3RvbWVyRGV0YWlsLmVtYWlscy5sZW5ndGggPD0gMSAmJiB0aGlzLmN1c3RvbWVyRGV0YWlsLmFkZHJlc3Nlcy5sZW5ndGggPD0gMSkge1xuICAgICAgdGhpcy5pc0NvbGxhcHNlQnRuU2hvdyA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNDb2xsYXBzZUJ0blNob3cgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnNvbGUuZGVidWcoJ2lzQ29sbGFwc2VCdG5TaG93Jyx0aGlzLmlzQ29sbGFwc2VCdG5TaG93KTtcbiAgfVxuXG5cblxuICBwcml2YXRlIGNoZWNrSW5mb0lzRW1wdHkoKSB7XG4gICAgLy9pZiBkZXRhaWwgaW5mbyBpcyBlbXB0eSAsIGRpc3BsYXkgbm8gZGF0YSBzdGF0dXMgICAgICBcbiAgICBpZih0aGlzLmN1c3RvbWVyRGV0YWlsLmlzRW1wdHlJbmZvKSB7XG4gICAgICB0aGlzLmlzRW1wdHlEZXRhaWxJbmZvID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlEZXRhaWxJbmZvID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0RW1wdHlWYWxUb0Rpc3BsYXlUZXh0KGN1c3RvbWVyRGV0YWlsIDogQ3VzdG9tZXJEZXRhaWwpIHtcbiAgICAgLy9pZiBub3QgZGF0YSBzZXQgZGVmYXVsdCB2YWx1ZSg/PyBvciAtLSAtLSlcbiAgICAgY29uc29sZS5sb2coXCJjb252ZXJ0RW1wdHlWYWxUb0Rpc3BsYXlUZXh0OiBcIiwgY3VzdG9tZXJEZXRhaWwpO1xuICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KGN1c3RvbWVyRGV0YWlsLmFnZVJhbmdlKSkge1xuICAgICAgIHRoaXMuaXNIYXNBZ2VSYW5nZSA9IGZhbHNlO1xuICAgICB9XG4gICAgIGVsc2Uge1xuICAgICAgIHRoaXMuaXNIYXNBZ2VSYW5nZSA9IHRydWU7XG4gICAgIH1cbiAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eShjdXN0b21lckRldGFpbC5jb250YWN0RnJlcXVhbmN5KSkge1xuICAgICAgIHRoaXMuaXNIYXNDb250YWN0RnJlcXVhbmN5ID0gZmFsc2U7XG4gICAgIH1cbiAgICAgZWxzZSB7XG4gICAgICAgdGhpcy5pc0hhc0NvbnRhY3RGcmVxdWFuY3kgPSB0cnVlO1xuICAgICB9XG4gICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkoY3VzdG9tZXJEZXRhaWwuZ2VuZGVyKSkgY3VzdG9tZXJEZXRhaWwuZ2VuZGVyID0gJy0gLSc7XG4gICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkoY3VzdG9tZXJEZXRhaWwub2NjdXBhdGlvbikpIGN1c3RvbWVyRGV0YWlsLm9jY3VwYXRpb24gPSAnLSAtJztcbiAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eShjdXN0b21lckRldGFpbC5jb21wYW55KSkgY3VzdG9tZXJEZXRhaWwuY29tcGFueSA9ICctIC0nO1xuICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KGN1c3RvbWVyRGV0YWlsLmluY29tZSkpIGN1c3RvbWVyRGV0YWlsLmluY29tZSA9ICctIC0nO1xuICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KGN1c3RvbWVyRGV0YWlsLnNvdXJjZSkpIGN1c3RvbWVyRGV0YWlsLnNvdXJjZSA9ICctIC0nO1xuICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KGN1c3RvbWVyRGV0YWlsLm1hcnJpYWdlKSkgY3VzdG9tZXJEZXRhaWwubWFycmlhZ2UgPSAnLSAtJztcbiAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eShjdXN0b21lckRldGFpbC5jaGlsZHJlbikpIGN1c3RvbWVyRGV0YWlsLmNoaWxkcmVuID0gJy0gLSc7XG4gICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkoY3VzdG9tZXJEZXRhaWwuZmFtaWxpYXJpdHkpKSBjdXN0b21lckRldGFpbC5mYW1pbGlhcml0eSA9ICctIC0nO1xuICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KGN1c3RvbWVyRGV0YWlsLnJlY2VudFN0YXR1cykpIGN1c3RvbWVyRGV0YWlsLnJlY2VudFN0YXR1cyA9ICctIC0nO1xuICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KGN1c3RvbWVyRGV0YWlsLm1hbnBhKSkgY3VzdG9tZXJEZXRhaWwubWFucGEgPSAnLSAtJztcbiAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eShjdXN0b21lckRldGFpbC5jaGlsZHJlbikpIGN1c3RvbWVyRGV0YWlsLmNoaWxkcmVuID0gJy0gLSc7XG4gIH1cblxuICBwdWJsaWMgdG9CaXJ0aGRheSgpIHtcbiAgIFxuICAgIGlmKHRoaXMuY3VzdG9tZXJEZXRhaWwuYmlydGhkYXkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRlVXRpbHMudG9EYXRlU3RyaW5nKHRoaXMuY3VzdG9tZXJEZXRhaWwuYmlydGhkYXksJ3l5eXktTU0tZGQnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gJy0gLSc7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZWRpdCgpIHtcbiAgICB0aGlzLm9uRWRpdERldGFpbC5lbWl0KHRoaXMuY3VzdG9tZXJEZXRhaWwuY2xpZW50SUQpO1xuICB9XG5cbiAgZGVsZXRlKCkge1xuICAgIHRoaXMub25EZWxldGVEZXRhaWwuZW1pdCh0aGlzLmN1c3RvbWVyRGV0YWlsLmNsaWVudElEKTtcbiAgfSAgXG5cbiAgY2FsbFBob25lKCkge1xuICAgIHRoaXMub25DYWxsUGhvbmUuZW1pdCh0aGlzLmN1c3RvbWVyRGV0YWlsLmNsaWVudElEKTtcbiAgfVxuXG4gIGFkZEFwcG9pbnRtZW50KCkge1xuICAgIHRoaXMub25BZGRBcHBvaW50bWVudC5lbWl0KHRoaXMuY3VzdG9tZXJEZXRhaWwuY2xpZW50SUQpO1xuICB9XG5cbiAgdHJhY2tCeUZuKGluZGV4LCBpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgfVxuXG4gIFxuICBpc0ZvbGxvd0NoYW5nZShpc0ZvbGxvdyA6IGJvb2xlYW4pIHtcbiAgICBjb25zb2xlLmRlYnVnKCdpc0ZvbGxvd0NoYW5nZScsaXNGb2xsb3cpO1xuICAgIC8vIGRpc3BsYXkgbmV3IGZvbGxvdyBzdGF0ZSBmaXJzdFxuICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwudXBkYXRlRm9sbG93U3RhdHVzKGlzRm9sbG93KTtcbiAgICB0aGlzLmNoYW5nZURldGN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgXG4gICAgLy9vdXB1dCBmb2xsb3cgZGV0YWlsIGNoYW5nZSBzdGF0dXNcbiAgICB0aGlzLmZvbGxvd0NoYW5nZS5lbWl0KHsnaXNGb2xsb3cnOiBpc0ZvbGxvdywgXCJjbGllbnRJRFwiOiB0aGlzLmN1c3RvbWVyRGV0YWlsLmNsaWVudElEfSk7XG4gICAgXG5cbiAgfVxuXG59XG4iXX0=