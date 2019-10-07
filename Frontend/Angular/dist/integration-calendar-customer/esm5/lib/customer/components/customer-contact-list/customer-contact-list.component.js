/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, Inject, Optional } from '@angular/core';
import { DateUtils, Language, showRuleToken } from '@allianzSND/core';
var CustomerContactListComponent = /** @class */ (function () {
    function CustomerContactListComponent(dateUtils, elementRef, showRule) {
        this.dateUtils = dateUtils;
        this.showRule = showRule;
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
            console.log("customer-contact-list set contactList:", contactList);
            this._contactList = contactList.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return Object.assign({}, x, { NoteTimeDisplay: _this.toNoteTime(new Date(x.NoteTime)) }); }));
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
        this.onDisplayNote.emit(Object.assign({
            Date: this.toNoteTime(new Date(note.NoteTime))
        }, note));
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
        return item.ClientID;
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
        console.log("toNoteTime:", time);
        /** @type {?} */
        var defaultStr = this.dateUtils.toDateString(time, 'yyyy-MM-dd HH:mm');
        if (this.showRule)
            return this.showRule.convertDate(time) + defaultStr.slice(10);
        else
            return defaultStr;
    };
    CustomerContactListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-customer-contact-list',
                    template: "<ng-container *ngIf=\"contactList\">\n    <div #slidingListBlock class=\"contact-list-block layout-detail-block style-has-right-space style-has-btm-space\">\n        <!-- Contact Note -->\n        <app-ui-title-style1 [isShowOther]=\"true\">\n            <ng-container textType=\"titleText\">\n                {{language.contactNote |translate }}\n            </ng-container>\n            <ng-container textType=\"otherEle\">\n                <app-ui-link [isUnderLine]=\"false\" imgSrc=\"./assets/img/icon-add-blue-text.svg\" [id]=\"'customerAddNote'\" Action action=\"customerAddNote\" (actionClick)=\"addNote()\">\n                    <ng-container textType=\"linktext\">{{language.customerAdd |translate }}</ng-container>\n                </app-ui-link>\n            </ng-container>\n        </app-ui-title-style1>\n        <!-- end of Contact Note  -->\n        <!--contact note empty -->\n        <ng-container *ngIf=\"contactList && contactList.length != 0 ; else noContactData\">\n            <app-ui-item-sliding class=\"contact-list-item-block\">\n                    <app-ui-item *ngFor=\"let customerContactNote of contactList;trackBy:trackByClientID;\" (onItemClick)=\"displayNote(customerContactNote)\">\n                    \n                    <div ui-item-content class=\"item\" >\n                        <p class=\"title\">{{customerContactNote.NoteTimeDisplay}}</p>\n                        <p class=\"desc\">{{ customerContactNote.Note}}</p>\n                    </div>\n                \n                    <!-- swipe right and show the btn -->\n                    <app-ui-item-options side=\"end\" class=\"option-block-end\">\n                        <app-ui-item-option class=\"btn-option option-color-normal\"  (onItemOptionClick)=\"editNote(customerContactNote)\">\n                            <img src=\"assets/img/icon-list-pen-full.svg\" alt=\"edit\">\n                        </app-ui-item-option>\n                        <app-ui-item-option class=\"btn-option option-color-focus\"  (onItemOptionClick)=\"deleteNote(customerContactNote)\">\n                            <img src=\"assets/img/icon-trash-full.svg\" alt=\"delete\">\n                        </app-ui-item-option>\n                    </app-ui-item-options>\n                    </app-ui-item>\n            </app-ui-item-sliding>\n        </ng-container>\n        <ng-template #noContactData>\n            <div class=\"empty-whole-block\">\n                <div class=\"status-empty contact-note-empty empty-block\" Action action=\"customerAddNote\" (actionClick)=\"addNote()\">\n                    <div class=\"empty-show-block\">\n                        <div class=\"empty-img\">\n                        <img src=\"assets/img/empty-img-customer-note.svg\">\n                        </div>\n                        <div class=\"text\">\n                                {{language.noRecord |translate }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n        <!-- end of contact note empty -->\n    </div>\n</ng-container>\n\n\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.space-detail{padding-right:40px;display:block}@media (max-width:1023px){.space-detail{padding-right:40px}}.layout-detail-block{background-color:#f5f5f5;padding-left:40px}.layout-detail-block .space-detail:not(.layout-nodata):last-child{padding-bottom:100px}.layout-detail-block .layout-nodata{padding-bottom:0}@media (min-width:768px){.layout-detail-block.style-has-right-space{padding-right:40px}.layout-detail-block.style-has-right-space.skelton-layout{padding-right:0}}.layout-detail-block.style-has-top-space{padding-top:40px}@media (max-width:767px){.space-detail{padding-right:5px}.layout-detail-block{padding-left:5px}.layout-detail-block.style-has-right-space{padding-right:5px}.layout-detail-block.style-has-top-space{padding-top:30px}}.layout-detail-block.style-has-btm-space{padding-bottom:100px}.space-inner-lg{padding-left:50px;padding-right:50px}@media (max-width:767px){.space-inner-lg{padding-left:5px;padding-right:5px}}.empty-whole-block{padding-left:2px}.contact-note-empty{background-color:#fff;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:30px;border-radius:5px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);overflow:visible}.contact-note-empty .empty-show-block{background-color:#fff;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:30px;border-radius:5px}.contact-note-empty .empty-show-block .empty-img{display:inline-block;max-width:75px}.contact-note-empty .empty-show-block .empty-img img{max-width:100%}.contact-note-empty .empty-show-block .text{margin-left:50px;max-width:196px;width:100%;color:#414141;font-size:1.125rem;line-height:28px;font-weight:300;word-break:break-word;-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual}@media (max-width:1023px){.contact-note-empty{padding:0}}@media (max-width:374px){.contact-note-empty .empty-show-block{padding:30px 10px}.contact-note-empty .empty-show-block .text{margin-left:22px}}@media (min-width:767px){.contact-list-block{padding-right:40px}}.contact-list-item-block{background-color:#f5f5f5}.contact-list-item-block .ui-item{padding:20px}.contact-list-item-block .item .title{font-size:.875rem;font-weight:700;color:#414141;position:relative;line-height:28px;margin-bottom:1px}.contact-list-item-block .item .title:before{content:'';display:inline-block;width:15px;height:1px;background-color:#007ab3;position:absolute}.contact-list-item-block .item .desc{/*! autoprefixer: off */-webkit-box-orient:vertical;font-size:1.125rem;color:#414141;font-weight:300;line-height:28px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2}.contact-list-item-block .option-color-normal{background-color:#ececec}.contact-list-item-block .option-color-normal ::ng-deep ion-item-option{background-color:#ececec}.contact-list-item-block .option-color-focus{background-color:#dc3149}.contact-list-item-block .option-color-focus ::ng-deep ion-item-option{background-color:#dc3149}.contact-list-item-block .btn-option ::ng-deep ion-item-option{padding:0 27px}.contact-list-item-block .option-block-end .btn-option{color:#fff;text-align:center}.contact-list-item-block .option-block-end .btn-option img{margin:0 auto;max-width:24px;width:100%}@media (min-width:1025px){.contact-list-item-block .option-block-end .btn-option img{max-width:2.4vw}}.contact-list-item-block ::ng-deep .list-block{background-color:#f5f5f5}.contact-list-item-block ::ng-deep .list-block app-ui-item:last-of-type .item-native{border-radius:0 0 5px 5px}.contact-list-item-block ::ng-deep ion-item .ui-item{margin:0;padding:21px 30px 21px 2px}.contact-list-item-block ::ng-deep ion-list{margin:0;padding-left:1px}.contact-list-item-block ::ng-deep .item-native{padding-left:0;border-radius:5px}.contact-list-item-block ::ng-deep .item-inner{padding-right:0}@media (max-width:767px){.contact-list-item-block .item .desc{-webkit-line-clamp:3}.contact-list-item-block ::ng-deep ion-item .ui-item{padding:21px 15px 21px 2px}}"]
                }] }
    ];
    CustomerContactListComponent.ctorParameters = function () { return [
        { type: DateUtils },
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] }
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
    /**
     * @type {?}
     * @private
     */
    CustomerContactListComponent.prototype.showRule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY29udGFjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItY29udGFjdC1saXN0L2N1c3RvbWVyLWNvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBWSxNQUFNLGtCQUFrQixDQUFDO0FBRWhGO0lBMENFLHNDQUFvQixTQUFvQixFQUNsQixVQUFzQixFQUNDLFFBQWlCO1FBRjFDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFFSyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBcEN2RCxhQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUduQyxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbEQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbkQsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdyRCx1QkFBa0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXVCakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQW5CRCxzQkFDSSxxREFBVzs7OztRQURmLGNBQ29CLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQy9DLFVBQWdCLFdBQVc7WUFBM0IsaUJBUUM7WUFQQyxPQUFPLENBQUMsR0FBRyxD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QUMsUUFBUTtZQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzs7WUFFOUQsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQzs7Z0JBcEhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxpakdBQXFEOztpQkFFdEQ7OztnQkFOUSxTQUFTO2dCQUR1QyxVQUFVLHVCQThDOUQsTUFBTSxTQUFDLFVBQVU7Z0RBQ2pCLFFBQVEsWUFBSSxNQUFNLFNBQUMsYUFBYTs7OzRCQWxDbEMsTUFBTTtnQ0FHTixNQUFNOzZCQUdOLE1BQU07K0JBR04sTUFBTTtxQ0FHTixNQUFNOzhCQU1OLEtBQUs7O0lBeUZSLG1DQUFDO0NBQUEsQUFySEQsSUFxSEM7U0FoSFksNEJBQTRCOzs7SUFHdkMsZ0RBQTJDOzs7OztJQUUzQyxpREFDMEQ7Ozs7O0lBRTFELHFEQUM4RDs7Ozs7SUFFOUQsa0RBQzJEOzs7OztJQUUzRCxvREFDNkQ7Ozs7O0lBRTdELDBEQUNtRTs7Ozs7SUFnQm5FLG9EQUFpQzs7SUFFakMsa0RBQXVCOzs7OztJQUNYLGlEQUE0Qjs7Ozs7SUFFdEMsZ0RBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVV0aWxzLCBMYW5ndWFnZSwgc2hvd1J1bGVUb2tlbiwgc2hvd1J1bGUgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWN1c3RvbWVyLWNvbnRhY3QtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1jb250YWN0LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1jb250YWN0LWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lckNvbnRhY3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcblxuICBAT3V0cHV0KClcbiAgcHJpdmF0ZSBvbkFkZE5vdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIG9uRGlzcGxheU5vdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIG9uRWRpdE5vdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIG9uRGVsZXRlTm90ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgY29udGFjdExpc3RSZWZyZXNoOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG5cblxuICBASW5wdXQoKVxuICBnZXQgY29udGFjdExpc3QoKSB7IHJldHVybiB0aGlzLl9jb250YWN0TGlzdDsgfVxuICBzZXQgY29udGFjdExpc3QoY29udGFjdExpc3QpIHtcbiAgICBjb25zb2xlLmxvZyhcImN1c3RvbWVyLWNvbnRhY3QtbGlzdCBzZXQgY29udGFjdExpc3Q6XCIsIGNvbnRhY3RMaXN0KTtcblxuICAgIHRoaXMuX2NvbnRhY3RMaXN0ID0gY29udGFjdExpc3QubWFwKHggPT4gT2JqZWN0LmFzc2lnbih7fSwgeCwgeyBOb3RlVGltZURpc3BsYXk6IHRoaXMudG9Ob3RlVGltZShuZXcgRGF0ZSh4Lk5vdGVUaW1lKSkgfSkpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlU2xpZGluZ0l0ZW1zKCk7XG4gICAgfSwgMjAwKVxuICB9XG4gIHByaXZhdGUgX2NvbnRhY3RMaXN0OiBBcnJheTxhbnk+O1xuXG4gIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZVV0aWxzOiBEYXRlVXRpbHMsXG4gICAgQEluamVjdChFbGVtZW50UmVmKSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3Qoc2hvd1J1bGVUb2tlbikgcHJpdmF0ZSBzaG93UnVsZTpzaG93UnVsZVxuICAgICkge1xuICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZVNsaWRpbmdJdGVtcygpO1xuICAgIH0sIDIwMClcblxuICB9XG5cbiAgLy8gaW9uaWMgc2xpZGluZyBuZWVkIHRvIGNhbGwgY2xvc2UgZXZlbnQgd2hlbiBldmVyeSByZWZyZXNoXG4gIGFzeW5jIGNsb3NlU2xpZGluZ0l0ZW1zKCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2Nsb3NlU2xpZGluZ0l0ZW1zJyk7XG5cblxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24taXRlbS1zbGlkaW5nJyk7XG4gICAgaWYgKGl0ZW0gIT0gbnVsbCkge1xuICAgICAgLy8vIGNvbnNvbGUuZGVidWcoJ2l0ZW0gc2l6ZScsaXRlbS5sZW5ndGgpO1xuICAgICAgY29uc29sZS5kZWJ1ZygnaXRlbScsIGl0ZW0pO1xuICAgICAgYXdhaXQgaXRlbS5jbG9zZSgpO1xuICAgICAgYXdhaXQgaXRlbS5jbG9zZU9wZW5lZCgpO1xuICAgIH1cblxuICB9XG5cbiAgcmVmcmVzaENvbnRhY3ROb3RlKCkge1xuICAgIHRoaXMuY29udGFjdExpc3RSZWZyZXNoLmVtaXQoKVxuXG5cbiAgICAvLyBuZWVkIHRvIHdhaXQgaW9uLWl0ZW0tc2xpZGluZyBjcmVhdGUgYXQgZmlyc3QgZnJvbSBubyBkYXRhICh3aGVuIHNrZWx0b24gaW50ZXJmYWNlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZVNsaWRpbmdJdGVtcygpO1xuICAgIH0sIDIwMClcblxuICB9XG5cbiAgYWRkTm90ZSgpIHtcbiAgICB0aGlzLm9uQWRkTm90ZS5lbWl0KCk7XG4gIH1cblxuICBkaXNwbGF5Tm90ZShub3RlOiBhbnkpIHtcbiAgICB0aGlzLm9uRGlzcGxheU5vdGUuZW1pdChPYmplY3QuYXNzaWduKHtcbiAgICAgIERhdGU6IHRoaXMudG9Ob3RlVGltZShuZXcgRGF0ZShub3RlLk5vdGVUaW1lKSlcbiAgICB9LCBub3RlKSk7XG4gIH1cblxuICBlZGl0Tm90ZShub3RlOiBhbnkpIHtcbiAgICB0aGlzLm9uRWRpdE5vdGUuZW1pdChub3RlKTtcbiAgfVxuXG4gIGRlbGV0ZU5vdGUobm90ZTogYW55KSB7XG4gICAgdGhpcy5vbkRlbGV0ZU5vdGUuZW1pdChub3RlKTtcbiAgfVxuXG5cbiAgdHJhY2tCeUNsaWVudElEKGluZGV4LCBpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0uQ2xpZW50SUQ7XG4gIH1cblxuICBwdWJsaWMgdG9Ob3RlVGltZSh0aW1lOiBEYXRlKSB7XG4gICAgY29uc29sZS5sb2coXCJ0b05vdGVUaW1lOlwiLCB0aW1lKTtcbiAgICBsZXQgZGVmYXVsdFN0ciA9IHRoaXMuZGF0ZVV0aWxzLnRvRGF0ZVN0cmluZyh0aW1lLCAneXl5eS1NTS1kZCBISDptbScpO1xuICAgIGlmICh0aGlzLnNob3dSdWxlKVxuICAgICAgcmV0dXJuIHRoaXMuc2hvd1J1bGUuY29udmVydERhdGUodGltZSkgKyBkZWZhdWx0U3RyLnNsaWNlKDEwKTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gZGVmYXVsdFN0cjtcbiAgfVxufVxuIl19