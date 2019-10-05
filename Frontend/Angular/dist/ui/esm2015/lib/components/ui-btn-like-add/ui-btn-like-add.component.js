/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
export class UiBtnLikeAddComponent {
    constructor() {
        this.isDisable = false;
        this.onChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get isLike() { return this._isLike; }
    /**
     * @param {?} isLike
     * @return {?}
     */
    set isLike(isLike) {
        this._isLike = isLike;
        // console.debug('like-component',this._isLike);
        this.changeClass();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.changeClass();
    }
    /**
     * @return {?}
     */
    changeClass() {
        this.likeClasses = this._isLike ? ' active' : ' ';
        this.disableClasses = this.isDisable ? ' disabled' : ' ';
        this.totalClasses = this.likeClasses + this.disableClasses;
        // console.debug('totalClasses',this.totalClasses);
    }
    /**
     * @return {?}
     */
    toggleLike() {
        this._isLike = !this._isLike;
        this.changeClass();
        this.onChange.emit(this._isLike);
        return false;
    }
}
UiBtnLikeAddComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-btn-like-add',
                template: "<a href=\"#\" (click)=\"toggleLike()\" class=\"btn-like-add status-toggle-block\"  [ngClass]=\"totalClasses\">\n    \n    <div class=\"btn-like status-normal \"><img src=\"./assets/img/icon-like.svg\" alt=\"nolike\"></div>\n    <div class=\"btn-like-active status-active\"><img src=\"./assets/img/icon-like-active.svg\" alt=\"like\"></div>\n</a>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.status-toggle-block .status-normal{display:inline-block}.status-toggle-block .status-active,.status-toggle-block.active .status-normal{display:none}.status-toggle-block.active .status-active{display:inline-block}:host{display:inline-block}@media screen and (min-width:1025px){:host .status-toggle-block .status-active,:host .status-toggle-block .status-normal{width:4vw}}"]
            }] }
];
UiBtnLikeAddComponent.ctorParameters = () => [];
UiBtnLikeAddComponent.propDecorators = {
    isLike: [{ type: Input }],
    isDisable: [{ type: Input }],
    onChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    UiBtnLikeAddComponent.prototype._isLike;
    /** @type {?} */
    UiBtnLikeAddComponent.prototype.isDisable;
    /** @type {?} */
    UiBtnLikeAddComponent.prototype.onChange;
    /** @type {?} */
    UiBtnLikeAddComponent.prototype.likeClasses;
    /** @type {?} */
    UiBtnLikeAddComponent.prototype.disableClasses;
    /** @type {?} */
    UiBtnLikeAddComponent.prototype.totalClasses;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktYnRuLWxpa2UtYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktYnRuLWxpa2UtYWRkL3VpLWJ0bi1saWtlLWFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFHLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRekcsTUFBTTtJQW1CSjtRQU5TLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSy9DLENBQUM7Ozs7SUFqQmpCLElBQ0ksTUFBTSxLQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7Ozs7O0lBQ25DLElBQUksTUFBTSxDQUFDLE1BQWdCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRXRCLGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFckIsQ0FBQzs7OztJQVdELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFFVCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFM0QsbURBQW1EO0lBQ3JELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IscVdBQStDO2dCQUUvQyxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7YUFDL0M7Ozs7cUJBR0UsS0FBSzt3QkFXTCxLQUFLO3VCQUNMLE1BQU07Ozs7Ozs7SUFIUCx3Q0FBeUI7O0lBRXpCLDBDQUFvQzs7SUFDcEMseUNBQStEOztJQUMvRCw0Q0FBMkI7O0lBQzNCLCtDQUE4Qjs7SUFDOUIsNkNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0ICwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1idG4tbGlrZS1hZGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktYnRuLWxpa2UtYWRkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktYnRuLWxpa2UtYWRkLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlCdG5MaWtlQWRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBcbiAgZ2V0IGlzTGlrZSgpIHtyZXR1cm4gdGhpcy5faXNMaWtlO31cbiAgc2V0IGlzTGlrZShpc0xpa2UgOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNMaWtlID0gaXNMaWtlO1xuXG4gICAgLy8gY29uc29sZS5kZWJ1ZygnbGlrZS1jb21wb25lbnQnLHRoaXMuX2lzTGlrZSk7XG4gICAgdGhpcy5jaGFuZ2VDbGFzcygpO1xuICAgIFxuICB9ICBcbiAgcHJpdmF0ZSBfaXNMaWtlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGlzRGlzYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGxpa2VDbGFzc2VzOiBzdHJpbmc7XG4gIHB1YmxpYyBkaXNhYmxlQ2xhc3Nlczogc3RyaW5nO1xuICBwdWJsaWMgdG90YWxDbGFzc2VzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoYW5nZUNsYXNzKCk7XG4gIH1cblxuICBjaGFuZ2VDbGFzcygpIHtcbiAgICBcbiAgICB0aGlzLmxpa2VDbGFzc2VzID0gdGhpcy5faXNMaWtlID8gJyBhY3RpdmUnIDogJyAnO1xuICAgIHRoaXMuZGlzYWJsZUNsYXNzZXMgPSB0aGlzLmlzRGlzYWJsZSA/ICcgZGlzYWJsZWQnIDogJyAnO1xuICAgIHRoaXMudG90YWxDbGFzc2VzID0gdGhpcy5saWtlQ2xhc3NlcyArIHRoaXMuZGlzYWJsZUNsYXNzZXM7XG5cbiAgICAvLyBjb25zb2xlLmRlYnVnKCd0b3RhbENsYXNzZXMnLHRoaXMudG90YWxDbGFzc2VzKTtcbiAgfVxuXG4gIHRvZ2dsZUxpa2UoKXtcbiAgICB0aGlzLl9pc0xpa2UgPSAhIHRoaXMuX2lzTGlrZTtcbiAgICB0aGlzLmNoYW5nZUNsYXNzKCk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRoaXMuX2lzTGlrZSk7XG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuXG5cblxufVxuIl19