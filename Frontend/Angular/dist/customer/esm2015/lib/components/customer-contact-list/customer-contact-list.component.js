/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, Inject } from '@angular/core';
import { DateUtils, Language } from '@allianzSND/core';
export class CustomerContactListComponent {
    /**
     * @param {?} dateUtils
     * @param {?} elementRef
     */
    constructor(dateUtils, elementRef) {
        this.dateUtils = dateUtils;
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
        this._contactList = contactList;
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
        this.onDisplayNote.emit(note);
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
        return item.getClientID();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    toNoteTime(time) {
        return this.dateUtils.toDateString(time, 'yyyy-MM-dd HH:mm');
    }
}
CustomerContactListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-contact-list',
                template: "<ng-container *ngIf=\"contactList\">\n    <div #slidingListBlock class=\" contact-list-block\">\n        <!-- Contact Note -->\n        <app-ui-title-style1 [isShowOther]=\"true\">\n            <ng-container textType=\"titleText\">\n                {{language.contactNote |translate }}\n            </ng-container>\n            <ng-container textType=\"otherEle\">\n                <app-ui-link [isUnderLine]=\"false\" imgSrc=\"./assets/img/icon-add-blue-text.svg\" Action action=\"customerAddNote\" (actionClick)=\"addNote()\">\n                    <ng-container textType=\"linktext\">{{language.add |translate }}</ng-container>\n                </app-ui-link>\n            </ng-container>\n        </app-ui-title-style1>\n        <!-- end of Contact Note  -->\n\n        <!--contact note empty -->\n        <ng-container *ngIf=\"contactList && contactList.length != 0 ; else noContactData\">\n                <!-- <app-ui-infinite-scroll (loadingCallback)=\"loadContactList($event)\"> -->\n\n                        <app-ui-item-sliding>\n                                <app-ui-item *ngFor=\"let customerContactNote of contactList;trackBy:trackByClientID;\" (onItemClick)=\"displayNote(customerContactNote)\">\n                                \n                                <div ui-item-content class=\"item\" >\n                                    <p class=\"title\">{{ toNoteTime(customerContactNote.date)}}</p>\n                                    <p class=\"desc\">{{ customerContactNote.noteMessage}}</p>\n                                </div>\n                            \n                                <!-- \u53F3\u6ED1\u5448\u73FE\u9078\u9805\uFF0C\u653E\u5728\u5C6C\u6027 side=\"end\" \u4E2D -->\n                                <app-ui-item-options side=\"end\" class=\"option-block-end\">\n                                    <app-ui-item-option class=\"btn-option option-color-normal\"  (onItemOptionClick)=\"editNote(customerContactNote)\">\n                                        <img src=\"assets/img/icon-list-pen-full.svg\" alt=\"edit\">\n                                    </app-ui-item-option>\n                                    <app-ui-item-option class=\"btn-option option-color-focus\"  (onItemOptionClick)=\"deleteNote(customerContactNote)\">\n                                        <img src=\"assets/img/icon-trash-full.svg\" alt=\"delete\">\n                                    </app-ui-item-option>\n                                </app-ui-item-options>\n                                </app-ui-item>\n                        </app-ui-item-sliding>\n                <!-- </app-ui-infinite-scroll> -->\n        </ng-container>\n\n        <ng-template #noContactData>\n            <div class=\"empty-whole-block\">\n                <div class=\"status-empty contact-note-empty empty-block\" Action action=\"customerAddNote\" (actionClick)=\"addNote()\">\n                    <div class=\"empty-show-block\">\n                        <div class=\"empty-img\">\n                        <img src=\"assets/img/empty-img-customer-note.svg\">\n                        </div>\n                        <div class=\"text\">\n                                {{language.noRecord |translate }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n        <!-- end of contact note empty -->\n    </div>\n\n</ng-container>\n\n\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.empty-whole-block{padding-left:2px}.contact-note-empty{background-color:#fff;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:30px;border-radius:5px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);overflow:visible}.contact-note-empty .empty-show-block{background-color:#fff;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:30px;border-radius:5px}.contact-note-empty .empty-show-block .empty-img{display:inline-block;max-width:75px}.contact-note-empty .empty-show-block .empty-img img{max-width:100%}.contact-note-empty .empty-show-block .text{margin-left:50px;max-width:196px;width:100%;color:#414141;font-size:1.125rem;line-height:28px;font-weight:300}@media (max-width:1023px){.contact-note-empty{padding:0}}@media (max-width:374px){.contact-note-empty .empty-show-block{padding:30px 10px}.contact-note-empty .empty-show-block .text{margin-left:22px}}@media (min-width:767px){.contact-list-block{padding-right:40px}}.contact-list-block{padding-bottom:100px}:host app-ui-item-sliding{background-color:#f5f5f5}:host app-ui-item-sliding .ui-item{padding:20px}:host app-ui-item-sliding .item .title{font-size:.875rem;font-weight:700;color:#414141;position:relative;line-height:28px;margin-bottom:1px}:host app-ui-item-sliding .item .title:before{content:'';display:inline-block;width:15px;height:1px;background-color:#007ab3;position:absolute}:host app-ui-item-sliding .item .desc{/*! autoprefixer: off */-webkit-box-orient:vertical;font-size:1.125rem;color:#414141;font-weight:300;line-height:28px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2}:host app-ui-item-sliding .option-color-normal{background-color:#ececec}:host app-ui-item-sliding .option-color-normal ::ng-deep ion-item-option{background-color:#ececec}:host app-ui-item-sliding .option-color-focus{background-color:#dc3149}:host app-ui-item-sliding .option-color-focus ::ng-deep ion-item-option{background-color:#dc3149}:host app-ui-item-sliding .btn-option ::ng-deep ion-item-option{padding:0 27px}:host app-ui-item-sliding .option-block-end .btn-option{color:#fff;text-align:center}:host app-ui-item-sliding .option-block-end .btn-option img{margin:0 auto;max-width:24px;width:100%}:host app-ui-item-sliding ::ng-deep .list-block{background-color:#f5f5f5}:host app-ui-item-sliding ::ng-deep .list-block app-ui-item:first-of-type .item-native{border-radius:5px 5px 0 0}:host app-ui-item-sliding ::ng-deep .list-block app-ui-item:last-of-type .item-native{border-radius:0 0 5px 5px}:host app-ui-item-sliding ::ng-deep ion-item .ui-item{margin:0;padding:21px 30px 21px 2px}:host app-ui-item-sliding ::ng-deep ion-list{margin:0;padding-left:1px}:host app-ui-item-sliding ::ng-deep .item-native{padding-left:0;border-radius:5px}:host app-ui-item-sliding ::ng-deep .item-inner{padding-right:0}@media (max-width:767px){:host app-ui-item-sliding ::ng-deep :host app-ui-item-sliding .desc{-webkit-line-clamp:3}:host app-ui-item-sliding ::ng-deep ion-item .ui-item{padding:21px 15px 21px 2px}:host app-ui-item-sliding .item .desc{-webkit-line-clamp:3}}@media screen and (min-width:1025px){:host app-ui-item-sliding .option-block-end .btn-option img{max-width:2.4vw}}"]
            }] }
];
CustomerContactListComponent.ctorParameters = () => [
    { type: DateUtils },
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY29udGFjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY3VzdG9tZXItY29udGFjdC1saXN0L2N1c3RvbWVyLWNvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQVF0RCxNQUFNOzs7OztJQW9DSixZQUFvQixTQUFvQixFQUNsQixVQUFzQjtRQUR4QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBakNqQyxhQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUduQyxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbEQsa0JBQWEsR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RSxlQUFVLEdBQXNDLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbkUsaUJBQVksR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdyRSx1QkFBa0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQW9CakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQzs7OztJQWhCRCxJQUNJLFdBQVcsS0FBSyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7OztJQUMvQyxJQUFJLFdBQVcsQ0FBQyxXQUFXO1FBRXpCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBRWhDLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQTtJQUNULENBQUM7Ozs7SUFVRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUE7SUFFVCxDQUFDOzs7OztJQUdLLGlCQUFpQjs7WUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztrQkFHN0IsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztZQUM1RSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ2hCLDJDQUEyQztnQkFDM0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNuQixNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMxQjtRQUVILENBQUM7S0FBQTs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUE7UUFHNUIsc0ZBQXNGO1FBQ3hGLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQTtJQUVULENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxJQUEwQjtRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxJQUEwQjtRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUEwQjtRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFHRCxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDekIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsSUFBVTtRQUMxQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7OztZQTFHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsbTNHQUFxRDs7YUFFdEQ7OztZQVBRLFNBQVM7WUFEdUMsVUFBVSx1QkE4QzlELE1BQU0sU0FBQyxVQUFVOzs7d0JBaENuQixNQUFNOzRCQUdOLE1BQU07eUJBR04sTUFBTTsyQkFHTixNQUFNO2lDQUdOLE1BQU07MEJBTU4sS0FBSzs7OztJQXBCTixnREFBMkM7Ozs7O0lBRTNDLGlEQUMwRDs7Ozs7SUFFMUQscURBQzhFOzs7OztJQUU5RSxrREFDMkU7Ozs7O0lBRTNFLG9EQUM2RTs7Ozs7SUFFN0UsMERBQ21FOzs7OztJQWVuRSxvREFBaUQ7O0lBRWpELGtEQUF1Qjs7Ozs7SUFDWCxpREFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVVdGlscywgTGFuZ3VhZ2V9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb250YWN0Tm90ZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJDb250YWN0Tm90ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lci1jb250YWN0LWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItY29udGFjdC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXItY29udGFjdC1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJDb250YWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG5cbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgb25BZGROb3RlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgcHJpdmF0ZSBvbkRpc3BsYXlOb3RlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tZXJDb250YWN0Tm90ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgb25FZGl0Tm90ZTogRXZlbnRFbWl0dGVyPEN1c3RvbWVyQ29udGFjdE5vdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIG9uRGVsZXRlTm90ZTogRXZlbnRFbWl0dGVyPEN1c3RvbWVyQ29udGFjdE5vdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIGNvbnRhY3RMaXN0UmVmcmVzaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiBcblxuXG4gIEBJbnB1dCgpXG4gIGdldCBjb250YWN0TGlzdCgpIHsgcmV0dXJuIHRoaXMuX2NvbnRhY3RMaXN0OyB9XG4gIHNldCBjb250YWN0TGlzdChjb250YWN0TGlzdCkge1xuICAgIFxuICAgIHRoaXMuX2NvbnRhY3RMaXN0ID0gY29udGFjdExpc3Q7XG4gICBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VTbGlkaW5nSXRlbXMoKTtcbiAgICB9LCAyMDApXG4gIH1cbiAgcHJpdmF0ZSBfY29udGFjdExpc3Q6IEFycmF5PEN1c3RvbWVyQ29udGFjdE5vdGU+O1xuXG4gIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZVV0aWxzOiBEYXRlVXRpbHMsXG4gICAgQEluamVjdChFbGVtZW50UmVmKSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlU2xpZGluZ0l0ZW1zKCk7XG4gICAgfSwgMjAwKVxuXG4gIH1cblxuICAvLyBpb25pYyBzbGlkaW5nIG5lZWQgdG8gY2FsbCBjbG9zZSBldmVudCB3aGVuIGV2ZXJ5IHJlZnJlc2hcbiAgYXN5bmMgY2xvc2VTbGlkaW5nSXRlbXMoKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnY2xvc2VTbGlkaW5nSXRlbXMnKTtcbiAgXG5cbiAgICBjb25zdCBpdGVtID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLWl0ZW0tc2xpZGluZycpO1xuICAgIGlmIChpdGVtICE9IG51bGwpIHtcbiAgICAgIC8vLyBjb25zb2xlLmRlYnVnKCdpdGVtIHNpemUnLGl0ZW0ubGVuZ3RoKTtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ2l0ZW0nLCBpdGVtKTtcbiAgICAgIGF3YWl0IGl0ZW0uY2xvc2UoKTtcbiAgICAgIGF3YWl0IGl0ZW0uY2xvc2VPcGVuZWQoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJlZnJlc2hDb250YWN0Tm90ZSgpIHtcbiAgICB0aGlzLmNvbnRhY3RMaXN0UmVmcmVzaC5lbWl0KClcbiAgIFxuXG4gICAgICAvLyBuZWVkIHRvIHdhaXQgaW9uLWl0ZW0tc2xpZGluZyBjcmVhdGUgYXQgZmlyc3QgZnJvbSBubyBkYXRhICh3aGVuIHNrZWx0b24gaW50ZXJmYWNlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZVNsaWRpbmdJdGVtcygpO1xuICAgIH0sIDIwMClcblxuICB9XG5cbiAgYWRkTm90ZSgpIHtcbiAgICB0aGlzLm9uQWRkTm90ZS5lbWl0KCk7XG4gIH1cblxuICBkaXNwbGF5Tm90ZShub3RlIDogQ3VzdG9tZXJDb250YWN0Tm90ZSkge1xuICAgIHRoaXMub25EaXNwbGF5Tm90ZS5lbWl0KG5vdGUpO1xuICB9XG5cbiAgZWRpdE5vdGUobm90ZSA6IEN1c3RvbWVyQ29udGFjdE5vdGUpIHtcbiAgICB0aGlzLm9uRWRpdE5vdGUuZW1pdChub3RlKTtcbiAgfVxuXG4gIGRlbGV0ZU5vdGUobm90ZSA6IEN1c3RvbWVyQ29udGFjdE5vdGUpIHtcbiAgICB0aGlzLm9uRGVsZXRlTm90ZS5lbWl0KG5vdGUpO1xuICB9XG5cblxuICB0cmFja0J5Q2xpZW50SUQoaW5kZXgsIGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5nZXRDbGllbnRJRCgpO1xuICB9XG5cbiAgcHVibGljIHRvTm90ZVRpbWUodGltZTogRGF0ZSkge1xuICAgIHJldHVybiB0aGlzLmRhdGVVdGlscy50b0RhdGVTdHJpbmcodGltZSwgJ3l5eXktTU0tZGQgSEg6bW0nKTtcbiAgfVxufVxuIl19