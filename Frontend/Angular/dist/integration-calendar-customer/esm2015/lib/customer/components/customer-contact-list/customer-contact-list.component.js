/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, Inject, Optional } from '@angular/core';
import { DateUtils, Language, showRuleToken } from '@allianzSND/core';
export class CustomerContactListComponent {
    /**
     * @param {?} dateUtils
     * @param {?} elementRef
     * @param {?} showRule
     */
    constructor(dateUtils, elementRef, showRule) {
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
    /**
     * @return {?}
     */
    get contactList() { return this._contactList; }
    /**
     * @param {?} contactList
     * @return {?}
     */
    set contactList(contactList) {
        console.log("customer-contact-list set contactList:", contactList);
        this._contactList = contactList.map((/**
         * @param {?} x
         * @return {?}
         */
        x => Object.assign({}, x, { NoteTimeDisplay: this.toNoteTime(new Date(x.NoteTime)) })));
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.closeSlidingItems();
        }), 200);
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
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.closeSlidingItems();
        }), 200);
    }
    // ionic sliding need to call close event when every refresh
    /**
     * @return {?}
     */
    closeSlidingItems() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.debug('closeSlidingItems');
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
     * @return {?}
     */
    refreshContactNote() {
        this.contactListRefresh.emit();
        // need to wait ion-item-sliding create at first from no data (when skelton interface)
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.closeSlidingItems();
        }), 200);
    }
    /**
     * @return {?}
     */
    addNote() {
        this.onAddNote.emit();
    }
    /**
     * @param {?} note
     * @return {?}
     */
    displayNote(note) {
        this.onDisplayNote.emit(Object.assign({
            Date: this.toNoteTime(new Date(note.NoteTime))
        }, note));
    }
    /**
     * @param {?} note
     * @return {?}
     */
    editNote(note) {
        this.onEditNote.emit(note);
    }
    /**
     * @param {?} note
     * @return {?}
     */
    deleteNote(note) {
        this.onDeleteNote.emit(note);
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackByClientID(index, item) {
        return item.ClientID;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    toNoteTime(time) {
        console.log("toNoteTime:", time);
        /** @type {?} */
        let defaultStr = this.dateUtils.toDateString(time, 'yyyy-MM-dd HH:mm');
        if (this.showRule)
            return this.showRule.convertDate(time) + defaultStr.slice(10);
        else
            return defaultStr;
    }
}
CustomerContactListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-contact-list',
                template: "<ng-container *ngIf=\"contactList\">\n    <div #slidingListBlock class=\"contact-list-block layout-detail-block style-has-right-space style-has-btm-space\">\n        <!-- Contact Note -->\n        <app-ui-title-style1 [isShowOther]=\"true\">\n            <ng-container textType=\"titleText\">\n                {{language.contactNote |translate }}\n            </ng-container>\n            <ng-container textType=\"otherEle\">\n                <app-ui-link [isUnderLine]=\"false\" imgSrc=\"./assets/img/icon-add-blue-text.svg\" [id]=\"'customerAddNote'\" Action action=\"customerAddNote\" (actionClick)=\"addNote()\">\n                    <ng-container textType=\"linktext\">{{language.customerAdd |translate }}</ng-container>\n                </app-ui-link>\n            </ng-container>\n        </app-ui-title-style1>\n        <!-- end of Contact Note  -->\n        <!--contact note empty -->\n        <ng-container *ngIf=\"contactList && contactList.length != 0 ; else noContactData\">\n            <app-ui-item-sliding class=\"contact-list-item-block\">\n                    <app-ui-item *ngFor=\"let customerContactNote of contactList;trackBy:trackByClientID;\" (onItemClick)=\"displayNote(customerContactNote)\">\n                    \n                    <div ui-item-content class=\"item\" >\n                        <p class=\"title\">{{customerContactNote.NoteTimeDisplay}}</p>\n                        <p class=\"desc\">{{ customerContactNote.Note}}</p>\n                    </div>\n                \n                    <!-- swipe right and show the btn -->\n                    <app-ui-item-options side=\"end\" class=\"option-block-end\">\n                        <app-ui-item-option class=\"btn-option option-color-normal\"  (onItemOptionClick)=\"editNote(customerContactNote)\">\n                            <img src=\"assets/img/icon-list-pen-full.svg\" alt=\"edit\">\n                        </app-ui-item-option>\n                        <app-ui-item-option class=\"btn-option option-color-focus\"  (onItemOptionClick)=\"deleteNote(customerContactNote)\">\n                            <img src=\"assets/img/icon-trash-full.svg\" alt=\"delete\">\n                        </app-ui-item-option>\n                    </app-ui-item-options>\n                    </app-ui-item>\n            </app-ui-item-sliding>\n        </ng-container>\n        <ng-template #noContactData>\n            <div class=\"empty-whole-block\">\n                <div class=\"status-empty contact-note-empty empty-block\" Action action=\"customerAddNote\" (actionClick)=\"addNote()\">\n                    <div class=\"empty-show-block\">\n                        <div class=\"empty-img\">\n                        <img src=\"assets/img/empty-img-customer-note.svg\">\n                        </div>\n                        <div class=\"text\">\n                                {{language.noRecord |translate }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n        <!-- end of contact note empty -->\n    </div>\n</ng-container>\n\n\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.space-detail{padding-right:40px;display:block}@media (max-width:1023px){.space-detail{padding-right:40px}}.layout-detail-block{background-color:#f5f5f5;padding-left:40px}.layout-detail-block .space-detail:not(.layout-nodata):last-child{padding-bottom:100px}.layout-detail-block .layout-nodata{padding-bottom:0}@media (min-width:768px){.layout-detail-block.style-has-right-space{padding-right:40px}.layout-detail-block.style-has-right-space.skelton-layout{padding-right:0}}.layout-detail-block.style-has-top-space{padding-top:40px}@media (max-width:767px){.space-detail{padding-right:5px}.layout-detail-block{padding-left:5px}.layout-detail-block.style-has-right-space{padding-right:5px}.layout-detail-block.style-has-top-space{padding-top:30px}}.layout-detail-block.style-has-btm-space{padding-bottom:100px}.space-inner-lg{padding-left:50px;padding-right:50px}@media (max-width:767px){.space-inner-lg{padding-left:5px;padding-right:5px}}.empty-whole-block{padding-left:2px}.contact-note-empty{background-color:#fff;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:30px;border-radius:5px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);overflow:visible}.contact-note-empty .empty-show-block{background-color:#fff;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:30px;border-radius:5px}.contact-note-empty .empty-show-block .empty-img{display:inline-block;max-width:75px}.contact-note-empty .empty-show-block .empty-img img{max-width:100%}.contact-note-empty .empty-show-block .text{margin-left:50px;max-width:196px;width:100%;color:#414141;font-size:1.125rem;line-height:28px;font-weight:300;word-break:break-word;-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual}@media (max-width:1023px){.contact-note-empty{padding:0}}@media (max-width:374px){.contact-note-empty .empty-show-block{padding:30px 10px}.contact-note-empty .empty-show-block .text{margin-left:22px}}@media (min-width:767px){.contact-list-block{padding-right:40px}}.contact-list-item-block{background-color:#f5f5f5}.contact-list-item-block .ui-item{padding:20px}.contact-list-item-block .item .title{font-size:.875rem;font-weight:700;color:#414141;position:relative;line-height:28px;margin-bottom:1px}.contact-list-item-block .item .title:before{content:'';display:inline-block;width:15px;height:1px;background-color:#007ab3;position:absolute}.contact-list-item-block .item .desc{/*! autoprefixer: off */-webkit-box-orient:vertical;font-size:1.125rem;color:#414141;font-weight:300;line-height:28px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2}.contact-list-item-block .option-color-normal{background-color:#ececec}.contact-list-item-block .option-color-normal ::ng-deep ion-item-option{background-color:#ececec}.contact-list-item-block .option-color-focus{background-color:#dc3149}.contact-list-item-block .option-color-focus ::ng-deep ion-item-option{background-color:#dc3149}.contact-list-item-block .btn-option ::ng-deep ion-item-option{padding:0 27px}.contact-list-item-block .option-block-end .btn-option{color:#fff;text-align:center}.contact-list-item-block .option-block-end .btn-option img{margin:0 auto;max-width:24px;width:100%}@media (min-width:1025px){.contact-list-item-block .option-block-end .btn-option img{max-width:2.4vw}}.contact-list-item-block ::ng-deep .list-block{background-color:#f5f5f5}.contact-list-item-block ::ng-deep .list-block app-ui-item:last-of-type .item-native{border-radius:0 0 5px 5px}.contact-list-item-block ::ng-deep ion-item .ui-item{margin:0;padding:21px 30px 21px 2px}.contact-list-item-block ::ng-deep ion-list{margin:0;padding-left:1px}.contact-list-item-block ::ng-deep .item-native{padding-left:0;border-radius:5px}.contact-list-item-block ::ng-deep .item-inner{padding-right:0}@media (max-width:767px){.contact-list-item-block .item .desc{-webkit-line-clamp:3}.contact-list-item-block ::ng-deep ion-item .ui-item{padding:21px 15px 21px 2px}}"]
            }] }
];
CustomerContactListComponent.ctorParameters = () => [
    { type: DateUtils },
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] }
];
CustomerContactListComponent.propDecorators = {
    onAddNote: [{ type: Output }],
    onDisplayNote: [{ type: Output }],
    onEditNote: [{ type: Output }],
    onDeleteNote: [{ type: Output }],
    contactListRefresh: [{ type: Output }],
    contactList: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY29udGFjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItY29udGFjdC1saXN0L2N1c3RvbWVyLWNvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBWSxNQUFNLGtCQUFrQixDQUFDO0FBT2hGLE1BQU07Ozs7OztJQXFDSixZQUFvQixTQUFvQixFQUNsQixVQUFzQixFQUNDLFFBQWlCO1FBRjFDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFFSyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBcEN2RCxhQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUduQyxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbEQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbkQsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdyRCx1QkFBa0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXVCakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQzs7OztJQW5CRCxJQUNJLFdBQVcsS0FBSyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7OztJQUMvQyxJQUFJLFdBQVcsQ0FBQyxXQUFXO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENB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RSwyQkFBMkI7Z0JBQ3JDLGlqR0FBcUQ7O2FBRXREOzs7WUFOUSxTQUFTO1lBRHVDLFVBQVUsdUJBOEM5RCxNQUFNLFNBQUMsVUFBVTs0Q0FDakIsUUFBUSxZQUFJLE1BQU0sU0FBQyxhQUFhOzs7d0JBbENsQyxNQUFNOzRCQUdOLE1BQU07eUJBR04sTUFBTTsyQkFHTixNQUFNO2lDQUdOLE1BQU07MEJBTU4sS0FBSzs7OztJQXBCTixnREFBMkM7Ozs7O0lBRTNDLGlEQUMwRDs7Ozs7SUFFMUQscURBQzhEOzs7OztJQUU5RCxrREFDMkQ7Ozs7O0lBRTNELG9EQUM2RDs7Ozs7SUFFN0QsMERBQ21FOzs7OztJQWdCbkUsb0RBQWlDOztJQUVqQyxrREFBdUI7Ozs7O0lBQ1gsaURBQTRCOzs7OztJQUV0QyxnREFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlVXRpbHMsIExhbmd1YWdlLCBzaG93UnVsZVRva2VuLCBzaG93UnVsZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItY29udGFjdC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLWNvbnRhY3QtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbWVyLWNvbnRhY3QtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyQ29udGFjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuXG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIG9uQWRkTm90ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgb25EaXNwbGF5Tm90ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgb25FZGl0Tm90ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgb25EZWxldGVOb3RlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgcHJpdmF0ZSBjb250YWN0TGlzdFJlZnJlc2g6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cblxuXG4gIEBJbnB1dCgpXG4gIGdldCBjb250YWN0TGlzdCgpIHsgcmV0dXJuIHRoaXMuX2NvbnRhY3RMaXN0OyB9XG4gIHNldCBjb250YWN0TGlzdChjb250YWN0TGlzdCkge1xuICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tZXItY29udGFjdC1saXN0IHNldCBjb250YWN0TGlzdDpcIiwgY29udGFjdExpc3QpO1xuXG4gICAgdGhpcy5fY29udGFjdExpc3QgPSBjb250YWN0TGlzdC5tYXAoeCA9PiBPYmplY3QuYXNzaWduKHt9LCB4LCB7IE5vdGVUaW1lRGlzcGxheTogdGhpcy50b05vdGVUaW1lKG5ldyBEYXRlKHguTm90ZVRpbWUpKSB9KSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VTbGlkaW5nSXRlbXMoKTtcbiAgICB9LCAyMDApXG4gIH1cbiAgcHJpdmF0ZSBfY29udGFjdExpc3Q6IEFycmF5PGFueT47XG5cbiAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlVXRpbHM6IERhdGVVdGlscyxcbiAgICBASW5qZWN0KEVsZW1lbnRSZWYpIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChzaG93UnVsZVRva2VuKSBwcml2YXRlIHNob3dSdWxlOnNob3dSdWxlXG4gICAgKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlU2xpZGluZ0l0ZW1zKCk7XG4gICAgfSwgMjAwKVxuXG4gIH1cblxuICAvLyBpb25pYyBzbGlkaW5nIG5lZWQgdG8gY2FsbCBjbG9zZSBldmVudCB3aGVuIGV2ZXJ5IHJlZnJlc2hcbiAgYXN5bmMgY2xvc2VTbGlkaW5nSXRlbXMoKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnY2xvc2VTbGlkaW5nSXRlbXMnKTtcblxuXG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pdGVtLXNsaWRpbmcnKTtcbiAgICBpZiAoaXRlbSAhPSBudWxsKSB7XG4gICAgICAvLy8gY29uc29sZS5kZWJ1ZygnaXRlbSBzaXplJyxpdGVtLmxlbmd0aCk7XG4gICAgICBjb25zb2xlLmRlYnVnKCdpdGVtJywgaXRlbSk7XG4gICAgICBhd2FpdCBpdGVtLmNsb3NlKCk7XG4gICAgICBhd2FpdCBpdGVtLmNsb3NlT3BlbmVkKCk7XG4gICAgfVxuXG4gIH1cblxuICByZWZyZXNoQ29udGFjdE5vdGUoKSB7XG4gICAgdGhpcy5jb250YWN0TGlzdFJlZnJlc2guZW1pdCgpXG5cblxuICAgIC8vIG5lZWQgdG8gd2FpdCBpb24taXRlbS1zbGlkaW5nIGNyZWF0ZSBhdCBmaXJzdCBmcm9tIG5vIGRhdGEgKHdoZW4gc2tlbHRvbiBpbnRlcmZhY2UpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlU2xpZGluZ0l0ZW1zKCk7XG4gICAgfSwgMjAwKVxuXG4gIH1cblxuICBhZGROb3RlKCkge1xuICAgIHRoaXMub25BZGROb3RlLmVtaXQoKTtcbiAgfVxuXG4gIGRpc3BsYXlOb3RlKG5vdGU6IGFueSkge1xuICAgIHRoaXMub25EaXNwbGF5Tm90ZS5lbWl0KE9iamVjdC5hc3NpZ24oe1xuICAgICAgRGF0ZTogdGhpcy50b05vdGVUaW1lKG5ldyBEYXRlKG5vdGUuTm90ZVRpbWUpKVxuICAgIH0sIG5vdGUpKTtcbiAgfVxuXG4gIGVkaXROb3RlKG5vdGU6IGFueSkge1xuICAgIHRoaXMub25FZGl0Tm90ZS5lbWl0KG5vdGUpO1xuICB9XG5cbiAgZGVsZXRlTm90ZShub3RlOiBhbnkpIHtcbiAgICB0aGlzLm9uRGVsZXRlTm90ZS5lbWl0KG5vdGUpO1xuICB9XG5cblxuICB0cmFja0J5Q2xpZW50SUQoaW5kZXgsIGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5DbGllbnRJRDtcbiAgfVxuXG4gIHB1YmxpYyB0b05vdGVUaW1lKHRpbWU6IERhdGUpIHtcbiAgICBjb25zb2xlLmxvZyhcInRvTm90ZVRpbWU6XCIsIHRpbWUpO1xuICAgIGxldCBkZWZhdWx0U3RyID0gdGhpcy5kYXRlVXRpbHMudG9EYXRlU3RyaW5nKHRpbWUsICd5eXl5LU1NLWRkIEhIOm1tJyk7XG4gICAgaWYgKHRoaXMuc2hvd1J1bGUpXG4gICAgICByZXR1cm4gdGhpcy5zaG93UnVsZS5jb252ZXJ0RGF0ZSh0aW1lKSArIGRlZmF1bHRTdHIuc2xpY2UoMTApO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBkZWZhdWx0U3RyO1xuICB9XG59XG4iXX0=