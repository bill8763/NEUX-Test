/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, Inject } from '@angular/core';
import { DateUtils, Language } from '@allianzSND/core';
var CustomerContactListComponent = /** @class */ (function () {
    function CustomerContactListComponent(dateUtils, elementRef) {
        this.dateUtils = dateUtils;
        this.language = new Language();
        this.onAddNote = new EventEmitter();
        this.onDisplayNote = new EventEmitter();
        this.onEditNote = new EventEmitter();
        this.onDeleteNote = new EventEmitter();
        this.contactListRefresh = new EventEmitter();
        this.elementRef = elementRef;
    }
    Object.defineProperty(CustomerContactListComponent.prototype, "contactList", {
        get: /**
         * @return {?}
         */
        function () { return this._contactList; },
        set: /**
         * @param {?} contactList
         * @return {?}
         */
        function (contactList) {
            var _this = this;
            this._contactList = contactList;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.closeSlidingItems();
            }), 200);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerContactListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CustomerContactListComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.closeSlidingItems();
        }), 200);
    };
    // ionic sliding need to call close event when every refresh
    // ionic sliding need to call close event when every refresh
    /**
     * @return {?}
     */
    CustomerContactListComponent.prototype.closeSlidingItems = 
    // ionic sliding need to call close event when every refresh
    /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var item;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.debug('closeSlidingItems');
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
     * @return {?}
     */
    CustomerContactListComponent.prototype.refreshContactNote = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.contactListRefresh.emit();
        // need to wait ion-item-sliding create at first from no data (when skelton interface)
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.closeSlidingItems();
        }), 200);
    };
    /**
     * @return {?}
     */
    CustomerContactListComponent.prototype.addNote = /**
     * @return {?}
     */
    function () {
        this.onAddNote.emit();
    };
    /**
     * @param {?} note
     * @return {?}
     */
    CustomerContactListComponent.prototype.displayNote = /**
     * @param {?} note
     * @return {?}
     */
    function (note) {
        this.onDisplayNote.emit(note);
    };
    /**
     * @param {?} note
     * @return {?}
     */
    CustomerContactListComponent.prototype.editNote = /**
     * @param {?} note
     * @return {?}
     */
    function (note) {
        this.onEditNote.emit(note);
    };
    /**
     * @param {?} note
     * @return {?}
     */
    CustomerContactListComponent.prototype.deleteNote = /**
     * @param {?} note
     * @return {?}
     */
    function (note) {
        this.onDeleteNote.emit(note);
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    CustomerContactListComponent.prototype.trackByClientID = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.getClientID();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    CustomerContactListComponent.prototype.toNoteTime = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        return this.dateUtils.toDateString(time, 'yyyy-MM-dd HH:mm');
    };
    CustomerContactListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-customer-contact-list',
                    template: "<ng-container *ngIf=\"contactList\">\n    <div #slidingListBlock class=\" contact-list-block\">\n        <!-- Contact Note -->\n        <app-ui-title-style1 [isShowOther]=\"true\">\n            <ng-container textType=\"titleText\">\n                {{language.contactNote |translate }}\n            </ng-container>\n            <ng-container textType=\"otherEle\">\n                <app-ui-link [isUnderLine]=\"false\" imgSrc=\"./assets/img/icon-add-blue-text.svg\" Action action=\"customerAddNote\" (actionClick)=\"addNote()\">\n                    <ng-container textType=\"linktext\">{{language.add |translate }}</ng-container>\n                </app-ui-link>\n            </ng-container>\n        </app-ui-title-style1>\n        <!-- end of Contact Note  -->\n\n        <!--contact note empty -->\n        <ng-container *ngIf=\"contactList && contactList.length != 0 ; else noContactData\">\n                <!-- <app-ui-infinite-scroll (loadingCallback)=\"loadContactList($event)\"> -->\n\n                        <app-ui-item-sliding>\n                                <app-ui-item *ngFor=\"let customerContactNote of contactList;trackBy:trackByClientID;\" (onItemClick)=\"displayNote(customerContactNote)\">\n                                \n                                <div ui-item-content class=\"item\" >\n                                    <p class=\"title\">{{ toNoteTime(customerContactNote.date)}}</p>\n                                    <p class=\"desc\">{{ customerContactNote.noteMessage}}</p>\n                                </div>\n                            \n                                <!-- \u53F3\u6ED1\u5448\u73FE\u9078\u9805\uFF0C\u653E\u5728\u5C6C\u6027 side=\"end\" \u4E2D -->\n                                <app-ui-item-options side=\"end\" class=\"option-block-end\">\n                                    <app-ui-item-option class=\"btn-option option-color-normal\"  (onItemOptionClick)=\"editNote(customerContactNote)\">\n                                        <img src=\"assets/img/icon-list-pen-full.svg\" alt=\"edit\">\n                                    </app-ui-item-option>\n                                    <app-ui-item-option class=\"btn-option option-color-focus\"  (onItemOptionClick)=\"deleteNote(customerContactNote)\">\n                                        <img src=\"assets/img/icon-trash-full.svg\" alt=\"delete\">\n                                    </app-ui-item-option>\n                                </app-ui-item-options>\n                                </app-ui-item>\n                        </app-ui-item-sliding>\n                <!-- </app-ui-infinite-scroll> -->\n        </ng-container>\n\n        <ng-template #noContactData>\n            <div class=\"empty-whole-block\">\n                <div class=\"status-empty contact-note-empty empty-block\" Action action=\"customerAddNote\" (actionClick)=\"addNote()\">\n                    <div class=\"empty-show-block\">\n                        <div class=\"empty-img\">\n                        <img src=\"assets/img/empty-img-customer-note.svg\">\n                        </div>\n                        <div class=\"text\">\n                                {{language.noRecord |translate }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n        <!-- end of contact note empty -->\n    </div>\n\n</ng-container>\n\n\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.empty-whole-block{padding-left:2px}.contact-note-empty{background-color:#fff;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:30px;border-radius:5px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);overflow:visible}.contact-note-empty .empty-show-block{background-color:#fff;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:30px;border-radius:5px}.contact-note-empty .empty-show-block .empty-img{display:inline-block;max-width:75px}.contact-note-empty .empty-show-block .empty-img img{max-width:100%}.contact-note-empty .empty-show-block .text{margin-left:50px;max-width:196px;width:100%;color:#414141;font-size:1.125rem;line-height:28px;font-weight:300}@media (max-width:1023px){.contact-note-empty{padding:0}}@media (max-width:374px){.contact-note-empty .empty-show-block{padding:30px 10px}.contact-note-empty .empty-show-block .text{margin-left:22px}}@media (min-width:767px){.contact-list-block{padding-right:40px}}.contact-list-block{padding-bottom:100px}:host app-ui-item-sliding{background-color:#f5f5f5}:host app-ui-item-sliding .ui-item{padding:20px}:host app-ui-item-sliding .item .title{font-size:.875rem;font-weight:700;color:#414141;position:relative;line-height:28px;margin-bottom:1px}:host app-ui-item-sliding .item .title:before{content:'';display:inline-block;width:15px;height:1px;background-color:#007ab3;position:absolute}:host app-ui-item-sliding .item .desc{/*! autoprefixer: off */-webkit-box-orient:vertical;font-size:1.125rem;color:#414141;font-weight:300;line-height:28px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2}:host app-ui-item-sliding .option-color-normal{background-color:#ececec}:host app-ui-item-sliding .option-color-normal ::ng-deep ion-item-option{background-color:#ececec}:host app-ui-item-sliding .option-color-focus{background-color:#dc3149}:host app-ui-item-sliding .option-color-focus ::ng-deep ion-item-option{background-color:#dc3149}:host app-ui-item-sliding .btn-option ::ng-deep ion-item-option{padding:0 27px}:host app-ui-item-sliding .option-block-end .btn-option{color:#fff;text-align:center}:host app-ui-item-sliding .option-block-end .btn-option img{margin:0 auto;max-width:24px;width:100%}:host app-ui-item-sliding ::ng-deep .list-block{background-color:#f5f5f5}:host app-ui-item-sliding ::ng-deep .list-block app-ui-item:first-of-type .item-native{border-radius:5px 5px 0 0}:host app-ui-item-sliding ::ng-deep .list-block app-ui-item:last-of-type .item-native{border-radius:0 0 5px 5px}:host app-ui-item-sliding ::ng-deep ion-item .ui-item{margin:0;padding:21px 30px 21px 2px}:host app-ui-item-sliding ::ng-deep ion-list{margin:0;padding-left:1px}:host app-ui-item-sliding ::ng-deep .item-native{padding-left:0;border-radius:5px}:host app-ui-item-sliding ::ng-deep .item-inner{padding-right:0}@media (max-width:767px){:host app-ui-item-sliding ::ng-deep :host app-ui-item-sliding .desc{-webkit-line-clamp:3}:host app-ui-item-sliding ::ng-deep ion-item .ui-item{padding:21px 15px 21px 2px}:host app-ui-item-sliding .item .desc{-webkit-line-clamp:3}}@media screen and (min-width:1025px){:host app-ui-item-sliding .option-block-end .btn-option img{max-width:2.4vw}}"]
                }] }
    ];
    CustomerContactListComponent.ctorParameters = function () { return [
        { type: DateUtils },
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] }
    ]; };
    CustomerContactListComponent.propDecorators = {
        onAddNote: [{ type: Output }],
        onDisplayNote: [{ type: Output }],
        onEditNote: [{ type: Output }],
        onDeleteNote: [{ type: Output }],
        contactListRefresh: [{ type: Output }],
        contactList: [{ type: Input }]
    };
    return CustomerContactListComponent;
}());
export { CustomerContactListComponent };
if (false) {
    /** @type {?} */
    CustomerContactListComponent.prototype.language;
    /**
     * @type {?}
     * @private
     */
    CustomerContactListComponent.prototype.onAddNote;
    /**
     * @type {?}
     * @private
     */
    CustomerContactListComponent.prototype.onDisplayNote;
    /**
     * @type {?}
     * @private
     */
    CustomerContactListComponent.prototype.onEditNote;
    /**
     * @type {?}
     * @private
     */
    CustomerContactListComponent.prototype.onDeleteNote;
    /**
     * @type {?}
     * @private
     */
    CustomerContactListComponent.prototype.contactListRefresh;
    /**
     * @type {?}
     * @private
     */
    CustomerContactListComponent.prototype._contactList;
    /** @type {?} */
    CustomerContactListComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CustomerContactListComponent.prototype.dateUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY29udGFjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY3VzdG9tZXItY29udGFjdC1saXN0L2N1c3RvbWVyLWNvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUd0RDtJQXlDRSxzQ0FBb0IsU0FBb0IsRUFDbEIsVUFBc0I7UUFEeEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQWpDakMsYUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7UUFHbkMsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2xELGtCQUFhLEdBQXNDLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEUsZUFBVSxHQUFzQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR25FLGlCQUFZLEdBQXNDLElBQUksWUFBWSxFQUFFLENBQUM7UUFHckUsdUJBQWtCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFvQmpFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFoQkQsc0JBQ0kscURBQVc7Ozs7UUFEZixjQUNvQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7OztRQUMvQyxVQUFnQixXQUFXO1lBQTNCLGlCQU9DO1lBTEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7WUFFaEMsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDM0IsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1QsQ0FBQzs7O09BUjhDOzs7O0lBa0IvQywrQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsc0RBQWU7OztJQUFmO1FBQUEsaUJBS0M7UUFKQyxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQTtJQUVULENBQUM7SUFFRCw0REFBNEQ7Ozs7O0lBQ3RELHdEQUFpQjs7Ozs7SUFBdkI7Ozs7Ozt3QkFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7d0JBRzdCLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7NkJBQ3hFLENBQUEsSUFBSSxJQUFJLElBQUksQ0FBQSxFQUFaLHdCQUFZO3dCQUNkLDJDQUEyQzt3QkFDM0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzVCLHFCQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQWxCLFNBQWtCLENBQUM7d0JBQ25CLHFCQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQXhCLFNBQXdCLENBQUM7Ozs7OztLQUc1Qjs7OztJQUVELHlEQUFrQjs7O0lBQWxCO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUE7UUFHNUIsc0ZBQXNGO1FBQ3hGLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0IsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFBO0lBRVQsQ0FBQzs7OztJQUVELDhDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxrREFBVzs7OztJQUFYLFVBQVksSUFBMEI7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCwrQ0FBUTs7OztJQUFSLFVBQVMsSUFBMEI7UUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxpREFBVTs7OztJQUFWLFVBQVcsSUFBMEI7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBR0Qsc0RBQWU7Ozs7O0lBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFDekIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTSxpREFBVTs7OztJQUFqQixVQUFrQixJQUFVO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBMUdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxtM0dBQXFEOztpQkFFdEQ7OztnQkFQUSxTQUFTO2dCQUR1QyxVQUFVLHVCQThDOUQsTUFBTSxTQUFDLFVBQVU7Ozs0QkFoQ25CLE1BQU07Z0NBR04sTUFBTTs2QkFHTixNQUFNOytCQUdOLE1BQU07cUNBR04sTUFBTTs4QkFNTixLQUFLOztJQStFUixtQ0FBQztDQUFBLEFBM0dELElBMkdDO1NBdEdZLDRCQUE0Qjs7O0lBR3ZDLGdEQUEyQzs7Ozs7SUFFM0MsaURBQzBEOzs7OztJQUUxRCxxREFDOEU7Ozs7O0lBRTlFLGtEQUMyRTs7Ozs7SUFFM0Usb0RBQzZFOzs7OztJQUU3RSwwREFDbUU7Ozs7O0lBZW5FLG9EQUFpRDs7SUFFakQsa0RBQXVCOzs7OztJQUNYLGlEQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVV0aWxzLCBMYW5ndWFnZX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21lckNvbnRhY3ROb3RlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbC9DdXN0b21lckNvbnRhY3ROb3RlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWN1c3RvbWVyLWNvbnRhY3QtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1jb250YWN0LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1jb250YWN0LWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lckNvbnRhY3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcblxuICBAT3V0cHV0KClcbiAgcHJpdmF0ZSBvbkFkZE5vdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIG9uRGlzcGxheU5vdGU6IEV2ZW50RW1pdHRlcjxDdXN0b21lckNvbnRhY3ROb3RlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgcHJpdmF0ZSBvbkVkaXROb3RlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tZXJDb250YWN0Tm90ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgb25EZWxldGVOb3RlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tZXJDb250YWN0Tm90ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgY29udGFjdExpc3RSZWZyZXNoOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuIFxuXG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbnRhY3RMaXN0KCkgeyByZXR1cm4gdGhpcy5fY29udGFjdExpc3Q7IH1cbiAgc2V0IGNvbnRhY3RMaXN0KGNvbnRhY3RMaXN0KSB7XG4gICAgXG4gICAgdGhpcy5fY29udGFjdExpc3QgPSBjb250YWN0TGlzdDtcbiAgIFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZVNsaWRpbmdJdGVtcygpO1xuICAgIH0sIDIwMClcbiAgfVxuICBwcml2YXRlIF9jb250YWN0TGlzdDogQXJyYXk8Q3VzdG9tZXJDb250YWN0Tm90ZT47XG5cbiAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlVXRpbHM6IERhdGVVdGlscyxcbiAgICBASW5qZWN0KEVsZW1lbnRSZWYpIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VTbGlkaW5nSXRlbXMoKTtcbiAgICB9LCAyMDApXG5cbiAgfVxuXG4gIC8vIGlvbmljIHNsaWRpbmcgbmVlZCB0byBjYWxsIGNsb3NlIGV2ZW50IHdoZW4gZXZlcnkgcmVmcmVzaFxuICBhc3luYyBjbG9zZVNsaWRpbmdJdGVtcygpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdjbG9zZVNsaWRpbmdJdGVtcycpO1xuICBcblxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24taXRlbS1zbGlkaW5nJyk7XG4gICAgaWYgKGl0ZW0gIT0gbnVsbCkge1xuICAgICAgLy8vIGNvbnNvbGUuZGVidWcoJ2l0ZW0gc2l6ZScsaXRlbS5sZW5ndGgpO1xuICAgICAgY29uc29sZS5kZWJ1ZygnaXRlbScsIGl0ZW0pO1xuICAgICAgYXdhaXQgaXRlbS5jbG9zZSgpO1xuICAgICAgYXdhaXQgaXRlbS5jbG9zZU9wZW5lZCgpO1xuICAgIH1cblxuICB9XG5cbiAgcmVmcmVzaENvbnRhY3ROb3RlKCkge1xuICAgIHRoaXMuY29udGFjdExpc3RSZWZyZXNoLmVtaXQoKVxuICAgXG5cbiAgICAgIC8vIG5lZWQgdG8gd2FpdCBpb24taXRlbS1zbGlkaW5nIGNyZWF0ZSBhdCBmaXJzdCBmcm9tIG5vIGRhdGEgKHdoZW4gc2tlbHRvbiBpbnRlcmZhY2UpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlU2xpZGluZ0l0ZW1zKCk7XG4gICAgfSwgMjAwKVxuXG4gIH1cblxuICBhZGROb3RlKCkge1xuICAgIHRoaXMub25BZGROb3RlLmVtaXQoKTtcbiAgfVxuXG4gIGRpc3BsYXlOb3RlKG5vdGUgOiBDdXN0b21lckNvbnRhY3ROb3RlKSB7XG4gICAgdGhpcy5vbkRpc3BsYXlOb3RlLmVtaXQobm90ZSk7XG4gIH1cblxuICBlZGl0Tm90ZShub3RlIDogQ3VzdG9tZXJDb250YWN0Tm90ZSkge1xuICAgIHRoaXMub25FZGl0Tm90ZS5lbWl0KG5vdGUpO1xuICB9XG5cbiAgZGVsZXRlTm90ZShub3RlIDogQ3VzdG9tZXJDb250YWN0Tm90ZSkge1xuICAgIHRoaXMub25EZWxldGVOb3RlLmVtaXQobm90ZSk7XG4gIH1cblxuXG4gIHRyYWNrQnlDbGllbnRJRChpbmRleCwgaXRlbSkge1xuICAgIHJldHVybiBpdGVtLmdldENsaWVudElEKCk7XG4gIH1cblxuICBwdWJsaWMgdG9Ob3RlVGltZSh0aW1lOiBEYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVV0aWxzLnRvRGF0ZVN0cmluZyh0aW1lLCAneXl5eS1NTS1kZCBISDptbScpO1xuICB9XG59XG4iXX0=