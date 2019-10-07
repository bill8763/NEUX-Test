/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { DateUtils, StringUtils, Language } from '@allianzSND/core';
import { CustomerDetail } from '../../service/model/CustomerDetail';
export class CustomerDetailComponent {
    /**
     * @param {?} dateUtils
     * @param {?} changeDetctor
     */
    constructor(dateUtils, changeDetctor) {
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
    /**
     * @return {?}
     */
    get customerDetail() { return this._customerDetail; }
    /**
     * @param {?} inputCustomerDetail
     * @return {?}
     */
    set customerDetail(inputCustomerDetail) {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @private
     * @return {?}
     */
    changeCollateButton() {
        console.debug('changeCollateButton', this.customerDetail.tels.length, this.customerDetail.emails.length, this.customerDetail.addresses.length);
        if (this.customerDetail.tels.length <= 2 && this.customerDetail.emails.length <= 1 && this.customerDetail.addresses.length <= 1) {
            this.isCollapseBtnShow = false;
        }
        else {
            this.isCollapseBtnShow = true;
        }
        console.debug('isCollapseBtnShow', this.isCollapseBtnShow);
    }
    /**
     * @private
     * @return {?}
     */
    checkInfoIsEmpty() {
        //if detail info is empty , display no data status      
        if (this.customerDetail.isEmptyInfo) {
            this.isEmptyDetailInfo = true;
        }
        else {
            this.isEmptyDetailInfo = false;
        }
    }
    /**
     * @private
     * @param {?} customerDetail
     * @return {?}
     */
    convertEmptyValToDisplayText(customerDetail) {
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
    }
    /**
     * @return {?}
     */
    toBirthday() {
        if (this.customerDetail.birthday != undefined) {
            return this.dateUtils.toDateString(this.customerDetail.birthday, 'yyyy-MM-dd');
        }
        else {
            return '- -';
        }
    }
    /**
     * @return {?}
     */
    edit() {
        this.onEditDetail.emit(this.customerDetail.clientID);
    }
    /**
     * @return {?}
     */
    delete() {
        this.onDeleteDetail.emit(this.customerDetail.clientID);
    }
    /**
     * @return {?}
     */
    callPhone() {
        this.onCallPhone.emit(this.customerDetail.clientID);
    }
    /**
     * @return {?}
     */
    addAppointment() {
        this.onAddAppointment.emit(this.customerDetail.clientID);
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
        this.customerDetail.updateFollowStatus(isFollow);
        this.changeDetctor.detectChanges();
        //ouput follow detail change status
        this.followChange.emit({ 'isFollow': isFollow, "clientID": this.customerDetail.clientID });
    }
}
CustomerDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-detail',
                template: "<!-- has CustomerDetail data-->\n<ng-container *ngIf=\"customerDetail != undefined && customerDetail.clientID != ''; else noCustomerData\">\n  <div class=\"main-detail-content\">\n    <!-- profile -->\n    <div class=\"space-ui-element profile-block\">\n        <div class=\"img-block\" [ngClass]=\"customerDetail.dataSource == 'OPUS' ? '': ' active'\">\n          <!-- if true show active img (green) or show normal img -->\n          <img class=\"normal-img\" src=\"assets/img/img-cust-profile.svg\">\n          <img class=\"active-img\" src=\"assets/img/img-cust-profile-active.svg\">\n        </div>\n        <div class=\"content-block\">\n          <ng-container *ngIf=\"customerDetail.possibility != ''\">\n              <app-ui-form-radio-tag class=\"wd-lg profile-tag\" [checked]=\"true\" [disabled]=\"true\" [ngClass]=\"customerDetail.possibility\">{{customerDetail.possibility|translate}}</app-ui-form-radio-tag>\n          </ng-container>\n          \n          <div class=\"name-block\">\n              {{customerDetail.lastName  + customerDetail.firstName}}\n          </div>\n          <div class=\"sm-text\">\n              <span class=\"age\" *ngIf=\"isHasAgeRange\">\n                ({{customerDetail.ageRange}})\n              </span>\n              <span class=\"detail-text\" *ngIf=\"isHasContactFrequancy\">\n                  {{language.contactFrequency|translate }}\n                  <span class=\"text-focus\">{{customerDetail.contactFrequancy}}</span>\n                  {{language.timePerYear|translate }}\n              </span>\n            </div>\n        </div>\n        <div class=\"like-block\">\n          <app-ui-btn-like-add [isLike]=\"customerDetail.isFollow\" (onChange)=\"isFollowChange($event)\"></app-ui-btn-like-add>\n        </div>\n        \n    </div>\n    <!-- end of profile -->\n\n    <!-- link -->\n    <ul class=\"space-ui-element ui-list-block\">\n        <li class=\"list-item-block\" [ngClass]=\"isEmptyAppointment? ' disable': ''\">\n            <button Action action='addAppointment' (actionClick)=\"addAppointment()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src=\"assets/img/icon-cust-appointment-disable.svg\">\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-appointment.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.appointment|translate }}</p>\n                </div>\n            </button>\n        </li>\n        <li class=\"list-item-block\" [ngClass]=\"customerDetail.tels.length == 0? ' disable': ''\">\n            <button Action action=\"customerCallPhone\" (actionClick)=\"callPhone()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src=\"assets/img/icon-cust-contact-disable.svg\">\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-contact.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.contact|translate }}</p>\n                </div>\n            </button>\n        </li>\n        <li class=\"list-item-block\" [ngClass]=\"isEmptyEdit? ' disable': ''\">\n            <button Action action=\"customerEdit\" (actionClick)=\"edit()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src=\"assets/img/icon-cust-edit-disable.svg\">\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-edit.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.edit|translate }}</p>\n                </div>\n            </button>\n        </li>\n        <li class=\"list-item-block\" [ngClass]=\"isEmptyDel? ' disable': ''\">\n            <button Action action=\"customerDelete\" (actionClick)=\"delete()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src='assets/img/icon-cust-del-disable.svg'>\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-del.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.delete|translate }}</p>\n                </div>\n            </button>\n            \n        </li>\n    </ul>\n    <!-- end of link block -->\n    <div *ngTemplateOutlet=\"detailPreTemplate\"></div>\n    <!-- first card -->\n    <app-ui-collapse-text1 class=\"card1-all-block\" [(isCollapseBtnShow)]=\"isCollapseBtnShow\" [translateEmpty]=\"language.empty | translate\" [isDataEmpty]=\"customerDetail.tels.length == 0 && customerDetail.emails.length == 0 && customerDetail.addresses.length == 0\">\n          <!-- \u96FB\u8A71-->\n          <ng-container TextType=\"collapseContentOrigin\">\n              <ng-container *ngIf=\"customerDetail.tels.length != 0\">\n                  <app-ui-info-text1 [imgSrc]=\"'assets/img/icon-form-phone.svg'\">\n                    <ng-container textType=\"title\">{{customerDetail.tels[0].telType|translate }}</ng-container>\n                    <ng-container textType=\"text\">{{customerDetail.tels[0].tel }}</ng-container>\n                </app-ui-info-text1>\n              </ng-container>\n          </ng-container>\n\n          <ng-container TextType=\"collapseContentOrigin2\">\n              <ng-container *ngIf=\"customerDetail.tels.length > 1\">\n                  <app-ui-info-text1 >\n                    <ng-container textType=\"title\">{{customerDetail.tels[1].telType|translate}}</ng-container>\n                    <ng-container textType=\"text\">{{customerDetail.tels[1].tel}}</ng-container>\n                </app-ui-info-text1>\n              </ng-container>\n          </ng-container>\n\n          <ng-container TextType=\"collapseContent\">\n              <ng-container *ngIf=\"customerDetail.tels.length > 2\">\n                <ng-container *ngFor=\"let customerTel of customerDetail.tels; let i = index;\">\n                  <ng-container *ngIf=\"i > 1 && (i + 1) % 2 != 0\">\n                      <app-ui-info-text1>\n                        <ng-container textType=\"title\">{{customerTel.telType|translate}}</ng-container>\n                        <ng-container textType=\"text\">{{customerTel.tel}}</ng-container>\n                      </app-ui-info-text1>\n                </ng-container>\n                  </ng-container>\n                </ng-container>\n            </ng-container>\n\n            <ng-container TextType=\"collapseContent2\">\n                <ng-container *ngIf=\"customerDetail.tels.length > 2\">\n                  <ng-container *ngFor=\"let customerTel of customerDetail.tels; let i = index;\">\n                    <ng-container *ngIf=\"i > 1 && (i + 1) % 2 == 0\">\n                        <app-ui-info-text1>\n                          <ng-container textType=\"title\">{{customerTel.telType|translate}}</ng-container>\n                          <ng-container textType=\"text\">{{customerTel.tel}}</ng-container>\n                        </app-ui-info-text1>\n                  </ng-container>\n                    </ng-container>\n                  </ng-container>\n              </ng-container>\n          <!-- end of \u96FB\u8A71-->\n\n          <!-- Email-->        \n          <ng-container TextType=\"collapseContentOrigin3\">\n              <ng-container *ngIf=\"customerDetail.emails.length != 0\">\n              <app-ui-info-text1  [imgSrc]=\"'assets/img/icon-form-mail.svg'\">\n                <ng-container textType=\"title\">{{customerDetail.emails[0].emailType|translate}}</ng-container>\n                <ng-container textType=\"text\">{{customerDetail.emails[0].email}}</ng-container>\n              </app-ui-info-text1>\n             </ng-container>     \n          </ng-container>\n\n          <ng-container TextType=\"collapseContent3\">\n              <ng-container *ngIf=\"customerDetail.emails.length > 1\">\n                <ng-container *ngFor=\"let email of customerDetail.emails ; let i = index\">\n                  <ng-container *ngIf=\"i >= 1\">\n                      <app-ui-info-text1>\n                        <ng-container textType=\"title\">{{email.emailType|translate}}</ng-container>\n                        <ng-container textType=\"text\">{{email.email}}</ng-container>\n                      </app-ui-info-text1>\n                  </ng-container>                     \n              </ng-container>\n              </ng-container>            \n          </ng-container>\n          <!-- end of Email-->\n\n          <!-- Address-->\n          \n          <ng-container TextType=\"collapseContentOrigin4\">\n              <ng-container *ngIf=\"customerDetail.addresses.length != 0\">\n                  <app-ui-info-text1 [imgSrc]=\"'assets/img/icon-form-addr.svg'\">\n                    <ng-container textType=\"title\">{{customerDetail.addresses[0].addressType|translate}}</ng-container>\n                    <ng-container textType=\"text\">{{customerDetail.addresses[0].toFullAddress()}}</ng-container>\n                  </app-ui-info-text1>\n              </ng-container>\n          </ng-container>\n\n          <ng-container TextType=\"collapseContent4\">\n              <ng-container *ngIf=\"customerDetail.addresses.length > 1\">\n                  <ng-container *ngFor=\"let address of customerDetail.addresses ; let i = index\">\n                      <ng-container *ngIf=\"i >= 1\">\n                          <app-ui-info-text1 [imgSrc]=\"''\">\n                              <ng-container textType=\"title\">{{address.addressType|translate}}</ng-container>\n                              <ng-container textType=\"text\">{{address.toFullAddress()}}</ng-container>\n                            </app-ui-info-text1>\n                      </ng-container>                    \n                  </ng-container>  \n              </ng-container>\n            \n          </ng-container>\n\n          \n                \n          <!-- end of Address-->\n      \n    </app-ui-collapse-text1>\n\n    <!-- end of first card -->\n\n\n    <!-- 2nd card -->\n    <app-ui-collapse-card1 [isDataEmpty]=\"isEmptyDetailInfo\" [tagText]=\"[language.detail | translate]\" [emptyText]=\"[language.noClick | translate, language.noInformation | translate]\" >\n        <ng-container textType=\"collapseContentOrigin\">\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.birthday|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{toBirthday()}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.gender|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.gender}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.occupation|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.occupation}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.company|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.company}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.annualIncome|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.income}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.source|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.source}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.marriage|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.marriage}} </ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.children|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.children}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.familiarity|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.familiarity}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.recentStatus|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.recentStatus}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.customerStatus|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.manpa}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>        \n\n              <!-- <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-info-text2>\n                    <ng-container textType=\"title\">{{language.extraItem|translate }}</ng-container>\n                    <ng-container textType=\"text\">ExtraItem</ng-container>\n                  </app-ui-info-text2>\n                </app-ui-form-layout-col>      -->\n            </app-ui-form-layout-row>\n        </ng-container>\n        <ng-container textType=\"collapseContent\">\n            <!-- <app-ui-form-layout-row>\n                \n              </app-ui-form-layout-row>\n\n              <app-ui-form-layout-row>\n                <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-info-text2>\n                    <ng-container textType=\"title\">ExtraItem3</ng-container>\n                    <ng-container textType=\"text\">ExtraItem3</ng-container>\n                  </app-ui-info-text2>\n                </app-ui-form-layout-col>\n              </app-ui-form-layout-row> -->\n        </ng-container>\n    </app-ui-collapse-card1>\n    <!-- end of 2nd card -->\n    <div *ngTemplateOutlet=\"detailPostTemplate\"></div>\n  </div>\n</ng-container>\n\n<ng-template #noCustomerData>\n  <div class=\"main-detail-content skelton-layout\">\n    <div class=\"theme-loading\" style=\"background-image:url('assets/img/loading-customer-main.svg')\">\n      <!-- profile -->\n      <div class=\"space-ui-element profile-block\">\n          <div class=\"img-block\">\n            <div class=\"skeleton-round \"></div>\n          </div>\n          <div class=\"content-block\">\n            <div class=\"tag-block\">\n                <div class=\"skelton-text  \" ></div>\n            </div>\n            <div class=\"name-block\">\n                <div class=\"skelton-text \" ></div>\n            </div>\n            <div class=\"sm-text\">\n                <div class=\"skelton-text \" ></div>\n            </div>\n          </div>\n      </div>\n      <!-- end of profile -->\n      <!-- link list -->\n      <ul class=\"ui-list-block\">\n          <li class=\"list-item-block\" *ngFor='let number of [0,1,2,3]' >\n              <div class=\"skelton-img-text\">\n                  <div class=\"skelton-square\">\n                      <div class=\"skeleton-round \"></div>\n                  </div>\n                  <div class=\"skelton-text \" ></div>\n              </div>\n          </li>\n      </ul>\n      <!-- end of link list -->\n      <!-- line -->\n      <div class=\"skelton-line-block\">\n          <div class=\"skelton-line \"></div>\n      </div>\n      <!-- end of line -->\n  \n      <!-- list data -->\n      <div class=\"card-text\">\n        <div class=\"left-part\">\n          <div class=\"data-group\">\n              \n              <div class=\"skelton-text   wd-short\"></div>\n              <div class=\"skelton-text   wd-long\"></div>\n              <div class=\"skelton-text   wd-short\"></div>\n              <div class=\"skelton-text   wd-long\"></div>\n              <div class=\"skelton-text   wd-long\"></div>\n          </div>\n        </div>\n        <div class=\"right-part\">\n            <div class=\"data-group\">\n                <div class=\"skelton-text   wd-short\"></div>\n                <div class=\"skelton-text   wd-long\"></div>\n                <div class=\"skelton-text   wd-short\"></div>\n                <div class=\"skelton-text   wd-long\"></div>\n            </div>\n        </div>\n      </div>\n  \n      <!-- end of list data -->\n  \n       <!-- line -->\n       <div class=\"skelton-line-block\">\n          <div class=\"skelton-line \"></div>\n      </div>\n       <!-- end of line -->\n  \n  \n      \n    </div>\n  </div>\n    <!-- Customer data is empty -->\n</ng-template>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.skelton-layout{margin:0}.skelton-row{display:flex}.skelton-row.align-side{justify-content:space-between}.align-right{margin:0 0 15px auto}.align-center{margin:15px auto}.skeleton-round{border-radius:50%;background-color:#ececec;max-width:100%;max-height:100%;width:100%;height:100%}.skelton-square{display:inline-block;width:30px;height:30px}.skelton-text{min-height:1rem;max-width:100%;width:100%;background-color:#ececec;display:block;margin-bottom:15px}.skelton-line{display:inline-block;max-width:100%;width:100%;background-color:#ececec;height:1px}.skelton-img-text .skelton-square{margin-bottom:10px}::ng-deep ion-skeleton-text{background-color:#ececec}::ng-deep ion-skeleton-text span{opacity:1;background-color:#ececec}.skelton-animate{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(194,194,194,.3);background:linear-gradient(to right,rgba(194,194,194,.3) 8%,rgba(194,194,194,.2) 18%,rgba(194,194,194,.3) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}@keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}.main-detail-content.skelton-layout{margin:0 -40px 0 0}@media (max-width:767px){.main-detail-content.skelton-layout{margin-right:-40px}.main-detail-content.skelton-layout .profile-block .content-block{max-width:70%}.main-detail-content.skelton-layout .theme-loading .ui-list-block .list-item-block{margin-right:0}}.main-detail-content .skelton-line-block{padding-right:40px}.main-detail-content .theme-loading{background-size:contain;background-position:bottom right;background-repeat:no-repeat;width:100%;min-height:100vh;padding-right:40px}.main-detail-content .theme-loading .profile-block .img-block{display:inline-block;max-width:100%;width:63px;height:63px;padding-right:0;margin-right:20px}.main-detail-content .theme-loading .profile-block .tag-block{max-width:15%}.main-detail-content .theme-loading .profile-block .name-block{max-width:30%;padding-bottom:0}.main-detail-content .theme-loading .profile-block .sm-text{max-width:55%}.main-detail-content .theme-loading .profile-block ::ng-deep ion-skeleton-text{margin-bottom:10px}.main-detail-content .theme-loading .ui-list-block{margin-bottom:20px}.main-detail-content .theme-loading .ui-list-block .list-item-block{margin-right:5%}.main-detail-content .theme-loading .ui-list-block .skelton-img-text .skelton-text{max-width:80%;margin:0 auto}.main-detail-content .theme-loading .skelton-square{width:3rem;height:3rem}.main-detail-content .theme-loading .card-text{display:flex}.main-detail-content .theme-loading .card-text .left-part{width:40%;box-sizing:border-box;padding:2rem}.main-detail-content .theme-loading .card-text .right-part{width:60%;box-sizing:border-box;padding:2rem}.main-detail-content .theme-loading .card-text .wd-short{max-width:5rem}.main-detail-content .theme-loading .card-text .wd-long{max-width:100%}@media (min-width:768px){.main-detail-content{padding-right:40px}.main-detail-content.skelton-layout{padding-right:0}}@media (min-width:769px){.main-detail-content{padding-top:40px}}.profile-block{display:flex;justify-content:flex-start;flex-wrap:wrap;width:100%;position:relative}.profile-block .img-block{padding-right:15px}.profile-block .img-block img{border-radius:50%;display:inline-block;width:60px;height:60px}.profile-block .img-block .active-img,.profile-block .img-block.active .normal-img{display:none}.profile-block .img-block.active .active-img{display:block}.profile-block .content-block{max-width:calc(100% - 40px - 10px - 60px - 15px);width:100%}.profile-block .content-block ::ng-deep .tag-block{margin-bottom:5px}.profile-block .content-block .name-block{font-size:1.25rem;font-weight:700;padding-bottom:5px;line-height:28px;white-space:normal;word-wrap:break-word}.profile-block .sm-text{font-size:.875rem;line-height:28px;width:100%}.profile-block .sm-text .text-focus{color:#003781;font-weight:700;font-size:1.125rem;display:inline-block;padding:0 5px;vertical-align:middle}.profile-block .age{display:inline-block;line-height:28px;min-height:28px;margin-right:5px}.profile-block .like-block{position:absolute;top:0;right:0}.profile-block .like-block ::ng-deep img{max-width:40px;width:100%}@media (max-width:768px){.main-detail-content{padding-top:30px}.profile-block{padding-left:15px;padding-right:6px;position:static}.profile-block .like-block{right:10px;top:10px}.profile-block .img-block{padding-right:10px}.profile-block .img-block img{width:45px;height:45px}.profile-block .content-block{max-width:calc(100% - 45px - 10px)}.profile-block .content-block .name-block{padding-right:50px}}@media screen and (min-width:1025px){.profile-block .img-block{width:calc(caculate-vw($wd-profile-img) + 15px)}.profile-block .img-block img{width:6vw;height:6vw}.profile-block .content-block{max-width:calc(100% - 4vw - 10px - 6vw - 15px)}.profile-block .like-block ::ng-deep img{max-width:4vw}}.ui-list-block{display:flex;list-style-type:none;margin-right:-30px;justify-content:center;align-items:baseline}.ui-list-block button{border:none;background-color:transparent;padding:0}.ui-list-block .list-item-block{width:25%;max-width:5.625rem;text-align:center;margin-right:30px}.ui-list-block .list-item-block .img-block{max-width:40px;width:100%;margin:0 auto}.ui-list-block .list-item-block .img-block img{max-width:100%;width:100%}.ui-list-block .list-item-block.disable{pointer-events:none}.ui-list-block .list-item-block.disable .text-block{color:#414141}.ui-list-block .list-item-block .img-disable,.ui-list-block .list-item-block.disable .img-normal{display:none}.ui-list-block .list-item-block.disable .img-disable{display:inline-block;pointer-events:none}.ui-list-block .list-item-block .text-block p{color:#414141;line-height:normal;font-size:.875rem;margin:4px 0 0}@media (min-width:1023px){.ui-list-block .ui-list-block{padding-left:13%;padding-right:13%;box-sizing:border-box}}@media (max-width:767px){.ui-list-block{flex-wrap:wrap;margin-right:-10px}.ui-list-block .list-item-block{margin-right:0;max-width:100px}}@media (max-width:374px){.ui-list-block{flex-wrap:wrap;margin-right:0}.ui-list-block .list-item-block{margin-right:0}.ui-list-block .list-item-block .text-block p{font-size:.75rem}}@media screen and (min-width:1025px){.ui-list-block .list-item-block{max-width:9vw}.ui-list-block .list-item-block .img-block{max-width:4vw;width:4vw}}::ng-deep .card1-all-block .card-content-block{padding-top:20px}::ng-deep .card1-all-block .gas-row-block{margin-top:0}::ng-deep .card1-all-block .gas-row-block+.gas-row-block{margin-top:4px}@media (min-width:769px){::ng-deep .card1-all-block .gas-layout-form{box-sizing:border-box;padding-left:51px;padding-right:64px}::ng-deep .card1-all-block .gas-row-block{margin-top:0}}@media (max-width:767px){::ng-deep .card1-all-block .gas-layout-form{padding-left:15px}}"]
            }] }
];
CustomerDetailComponent.ctorParameters = () => [
    { type: DateUtils },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY3VzdG9tZXItZGV0YWlsL2N1c3RvbWVyLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQU9wRSxNQUFNOzs7OztJQTJESixZQUFvQixTQUFxQixFQUFVLGFBQStCO1FBQTlELGNBQVMsR0FBVCxTQUFTLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUF4RDFFLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2RCxtQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFELHFCQUFnQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVELGlCQUFZLEdBQTZELElBQUksWUFBWSxFQUFFLENBQUM7UUFVNUYsb0JBQWUsR0FBbUIsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQXVCeEQsYUFBUSxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7UUFFNUMsZUFBZTtRQUNSLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUNuQyx1QkFBa0IsR0FBWSxLQUFLLENB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LFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFHM0YsQ0FBQzs7O1lBeEtGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw4dGxCQUErQzs7YUFFaEQ7OztZQVBRLFNBQVM7WUFEc0MsaUJBQWlCOzs7MkJBV3RFLE1BQU07MEJBRU4sTUFBTTs2QkFFTixNQUFNOytCQUVOLE1BQU07MkJBRU4sTUFBTTtnQ0FJTixLQUFLO2lDQUdMLEtBQUs7NkJBS0wsS0FBSzs7Ozs7OztJQXBCTiwrQ0FDZ0U7Ozs7O0lBQ2hFLDhDQUMrRDs7Ozs7SUFDL0QsaURBQ2tFOzs7OztJQUNsRSxtREFDb0U7Ozs7O0lBQ3BFLCtDQUNvRzs7SUFHcEcsb0RBQ21DOztJQUVuQyxxREFDb0M7Ozs7O0lBR3BDLGtEQUErRDs7SUF1Qi9ELDJDQUE0Qzs7SUFHNUMscURBQTJDOztJQUMzQyw4Q0FBb0M7O0lBQ3BDLDZDQUFtQzs7SUFDbkMsb0RBQTBDOztJQUMxQyxxREFBMkM7O0lBQzNDLG9EQUEyQzs7SUFDM0MsZ0RBQXNDOztJQUN0Qyx3REFBOEM7Ozs7O0lBS2xDLDRDQUE2Qjs7Ozs7SUFBRSxnREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxJbnB1dCwgT3V0cHV0ICxFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVV0aWxzLCBTdHJpbmdVdGlscywgTGFuZ3VhZ2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJ1xuaW1wb3J0IHsgQ3VzdG9tZXJEZXRhaWwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL21vZGVsL0N1c3RvbWVyRGV0YWlsJzsgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lci1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIG9uRWRpdERldGFpbDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIG9uQ2FsbFBob25lOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgb25EZWxldGVEZXRhaWw6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgcHJpdmF0ZSBvbkFkZEFwcG9pbnRtZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgZm9sbG93Q2hhbmdlIDogRXZlbnRFbWl0dGVyPHsnaXNGb2xsb3cnOiBib29sZWFuLCAnY2xpZW50SUQnOiBzdHJpbmd9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiBcbiAgLy9mb3IgZXh0ZW5zaW9uIHBsYWNlaG9sZGVyXG4gIEBJbnB1dCgpXG4gIGRldGFpbFByZVRlbXBsYXRlOlRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgZGV0YWlsUG9zdFRlbXBsYXRlOlRlbXBsYXRlUmVmPGFueT47XG5cblxuICBwcml2YXRlIF9jdXN0b21lckRldGFpbDogQ3VzdG9tZXJEZXRhaWwgPSBuZXcgQ3VzdG9tZXJEZXRhaWwoKTtcbiAgQElucHV0KCkgXG4gIGdldCBjdXN0b21lckRldGFpbCgpIHsgcmV0dXJuIHRoaXMuX2N1c3RvbWVyRGV0YWlsO31cbiAgc2V0IGN1c3RvbWVyRGV0YWlsKGlucHV0Q3VzdG9tZXJEZXRhaWwpIHtcbiAgICAgIC8vY2hlY2sgZGF0YXNvdXJjZSBpcyBmcm9tIE9QVVNcbiAgICAgIHRoaXMuX2N1c3RvbWVyRGV0YWlsID0gaW5wdXRDdXN0b21lckRldGFpbDtcbiAgICAgIGNvbnNvbGUubG9nKCdpbnB1dEN1c3RvbWVyRGV0YWlsOiAnLCBpbnB1dEN1c3RvbWVyRGV0YWlsKTtcbiAgICAgIGlmKHRoaXMuX2N1c3RvbWVyRGV0YWlsLmRhdGFTb3VyY2UgPT0gJ09QVVMnKSB7XG4gICAgICAgIHRoaXMuaXNFbXB0eURlbCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0VtcHR5RGVsID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2N1c3RvbWVyRGV0YWlsLnVwZGF0ZUVtcHR5U3RhdHVzKCk7XG4gICAgICB0aGlzLmNvbnZlcnRFbXB0eVZhbFRvRGlzcGxheVRleHQodGhpcy5fY3VzdG9tZXJEZXRhaWwpO1xuICAgICAgdGhpcy5jaGVja0luZm9Jc0VtcHR5KCk7XG4gICAgICB0aGlzLmNoYW5nZUNvbGxhdGVCdXR0b24oKTtcbiAgICAgIFxuICAgICAgdGhpcy5jaGFuZ2VEZXRjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG5cbiAgcHVibGljIGxhbmd1YWdlIDogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcblxuICAvLyBlbXB0eSBzdGF0dXNcbiAgcHVibGljIGlzRW1wdHlBcHBvaW50bWVudDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNFbXB0eUVkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzRW1wdHlEZWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzRW1wdHlEZXRhaWxJbmZvOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0VtcHR5Q29udGFjdE5vdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzQ29sbGFwc2VCdG5TaG93ICA6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgaXNIYXNBZ2VSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNIYXNDb250YWN0RnJlcXVhbmN5OiBib29sZWFuID0gZmFsc2U7XG4gIFxuXG4gIFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZVV0aWxzIDogRGF0ZVV0aWxzLCBwcml2YXRlIGNoYW5nZURldGN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYsIFxuICAgKSB7XG4gICBcbiAgIH1cbiAgIFxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VDb2xsYXRlQnV0dG9uKCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2NoYW5nZUNvbGxhdGVCdXR0b24nLHRoaXMuY3VzdG9tZXJEZXRhaWwudGVscy5sZW5ndGgsdGhpcy5jdXN0b21lckRldGFpbC5lbWFpbHMubGVuZ3RoLHRoaXMuY3VzdG9tZXJEZXRhaWwuYWRkcmVzc2VzLmxlbmd0aCk7XG4gICAgaWYodGhpcy5jdXN0b21lckRldGFpbC50ZWxzLmxlbmd0aCA8PSAyICYmIHRoaXMuY3VzdG9tZXJEZXRhaWwuZW1haWxzLmxlbmd0aCA8PSAxICYmIHRoaXMuY3VzdG9tZXJEZXRhaWwuYWRkcmVzc2VzLmxlbmd0aCA8PSAxKSB7XG4gICAgICB0aGlzLmlzQ29sbGFwc2VCdG5TaG93ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0NvbGxhcHNlQnRuU2hvdyA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc29sZS5kZWJ1ZygnaXNDb2xsYXBzZUJ0blNob3cnLHRoaXMuaXNDb2xsYXBzZUJ0blNob3cpO1xuICB9XG5cblxuXG4gIHByaXZhdGUgY2hlY2tJbmZvSXNFbXB0eSgpIHtcbiAgICAvL2lmIGRldGFpbCBpbmZvIGlzIGVtcHR5ICwgZGlzcGxheSBubyBkYXRhIHN0YXR1cyAgICAgIFxuICAgIGlmKHRoaXMuY3VzdG9tZXJEZXRhaWwuaXNFbXB0eUluZm8pIHtcbiAgICAgIHRoaXMuaXNFbXB0eURldGFpbEluZm8gPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eURldGFpbEluZm8gPSBmYWxzZTtcbiAgICB9XG4gICAgXG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRFbXB0eVZhbFRvRGlzcGxheVRleHQoY3VzdG9tZXJEZXRhaWwgOiBDdXN0b21lckRldGFpbCkge1xuICAgICAvL2lmIG5vdCBkYXRhIHNldCBkZWZhdWx0IHZhbHVlKD8/IG9yIC0tIC0tKVxuICAgICBjb25zb2xlLmxvZyhcImNvbnZlcnRFbXB0eVZhbFRvRGlzcGxheVRleHQ6IFwiLCBjdXN0b21lckRldGFpbCk7XG4gICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkoY3VzdG9tZXJEZXRhaWwuYWdlUmFuZ2UpKSB7XG4gICAgICAgdGhpcy5pc0hhc0FnZVJhbmdlID0gZmFsc2U7XG4gICAgIH1cbiAgICAgZWxzZSB7XG4gICAgICAgdGhpcy5pc0hhc0FnZVJhbmdlID0gdHJ1ZTtcbiAgICAgfVxuICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KGN1c3RvbWVyRGV0YWlsLmNvbnRhY3RGcmVxdWFuY3kpKSB7XG4gICAgICAgdGhpcy5pc0hhc0NvbnRhY3RGcmVxdWFuY3kgPSBmYWxzZTtcbiAgICAgfVxuICAgICBlbHNlIHtcbiAgICAgICB0aGlzLmlzSGFzQ29udGFjdEZyZXF1YW5jeSA9IHRydWU7XG4gICAgIH1cbiAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eShjdXN0b21lckRldGFpbC5nZW5kZXIpKSBjdXN0b21lckRldGFpbC5nZW5kZXIgPSAnLSAtJztcbiAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eShjdXN0b21lckRldGFpbC5vY2N1cGF0aW9uKSkgY3VzdG9tZXJEZXRhaWwub2NjdXBhdGlvbiA9ICctIC0nO1xuICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KGN1c3RvbWVyRGV0YWlsLmNvbXBhbnkpKSBjdXN0b21lckRldGFpbC5jb21wYW55ID0gJy0gLSc7XG4gICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkoY3VzdG9tZXJEZXRhaWwuaW5jb21lKSkgY3VzdG9tZXJEZXRhaWwuaW5jb21lID0gJy0gLSc7XG4gICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkoY3VzdG9tZXJEZXRhaWwuc291cmNlKSkgY3VzdG9tZXJEZXRhaWwuc291cmNlID0gJy0gLSc7XG4gICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkoY3VzdG9tZXJEZXRhaWwubWFycmlhZ2UpKSBjdXN0b21lckRldGFpbC5tYXJyaWFnZSA9ICctIC0nO1xuICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KGN1c3RvbWVyRGV0YWlsLmNoaWxkcmVuKSkgY3VzdG9tZXJEZXRhaWwuY2hpbGRyZW4gPSAnLSAtJztcbiAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eShjdXN0b21lckRldGFpbC5mYW1pbGlhcml0eSkpIGN1c3RvbWVyRGV0YWlsLmZhbWlsaWFyaXR5ID0gJy0gLSc7XG4gICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkoY3VzdG9tZXJEZXRhaWwucmVjZW50U3RhdHVzKSkgY3VzdG9tZXJEZXRhaWwucmVjZW50U3RhdHVzID0gJy0gLSc7XG4gICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkoY3VzdG9tZXJEZXRhaWwubWFucGEpKSBjdXN0b21lckRldGFpbC5tYW5wYSA9ICctIC0nO1xuICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KGN1c3RvbWVyRGV0YWlsLmNoaWxkcmVuKSkgY3VzdG9tZXJEZXRhaWwuY2hpbGRyZW4gPSAnLSAtJztcbiAgfVxuXG4gIHB1YmxpYyB0b0JpcnRoZGF5KCkge1xuICAgXG4gICAgaWYodGhpcy5jdXN0b21lckRldGFpbC5iaXJ0aGRheSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGVVdGlscy50b0RhdGVTdHJpbmcodGhpcy5jdXN0b21lckRldGFpbC5iaXJ0aGRheSwneXl5eS1NTS1kZCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAnLSAtJztcbiAgICB9XG4gICAgXG4gIH1cblxuICBlZGl0KCkge1xuICAgIHRoaXMub25FZGl0RGV0YWlsLmVtaXQodGhpcy5jdXN0b21lckRldGFpbC5jbGllbnRJRCk7XG4gIH1cblxuICBkZWxldGUoKSB7XG4gICAgdGhpcy5vbkRlbGV0ZURldGFpbC5lbWl0KHRoaXMuY3VzdG9tZXJEZXRhaWwuY2xpZW50SUQpO1xuICB9ICBcblxuICBjYWxsUGhvbmUoKSB7XG4gICAgdGhpcy5vbkNhbGxQaG9uZS5lbWl0KHRoaXMuY3VzdG9tZXJEZXRhaWwuY2xpZW50SUQpO1xuICB9XG5cbiAgYWRkQXBwb2ludG1lbnQoKSB7XG4gICAgdGhpcy5vbkFkZEFwcG9pbnRtZW50LmVtaXQodGhpcy5jdXN0b21lckRldGFpbC5jbGllbnRJRCk7XG4gIH1cblxuICB0cmFja0J5Rm4oaW5kZXgsIGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5uYW1lO1xuICB9XG5cbiAgXG4gIGlzRm9sbG93Q2hhbmdlKGlzRm9sbG93IDogYm9vbGVhbikge1xuICAgIGNvbnNvbGUuZGVidWcoJ2lzRm9sbG93Q2hhbmdlJyxpc0ZvbGxvdyk7XG4gICAgLy8gZGlzcGxheSBuZXcgZm9sbG93IHN0YXRlIGZpcnN0XG4gICAgdGhpcy5jdXN0b21lckRldGFpbC51cGRhdGVGb2xsb3dTdGF0dXMoaXNGb2xsb3cpO1xuICAgIHRoaXMuY2hhbmdlRGV0Y3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICBcbiAgICAvL291cHV0IGZvbGxvdyBkZXRhaWwgY2hhbmdlIHN0YXR1c1xuICAgIHRoaXMuZm9sbG93Q2hhbmdlLmVtaXQoeydpc0ZvbGxvdyc6IGlzRm9sbG93LCBcImNsaWVudElEXCI6IHRoaXMuY3VzdG9tZXJEZXRhaWwuY2xpZW50SUR9KTtcbiAgICBcblxuICB9XG5cbn1cbiJdfQ==