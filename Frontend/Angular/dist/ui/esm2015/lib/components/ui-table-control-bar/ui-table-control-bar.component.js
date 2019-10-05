/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Language } from '@allianzSND/core';
export class UiTableControlBarComponent {
    constructor() {
        this.language = new Language();
        this._isVertical = false;
        this.onClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get isVertical() {
        return this._isVertical;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isVertical(val) {
        this._isVertical = val;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    clickBtn() {
        this.isVertical = !this.isVertical;
        this.onClick.emit(this.isVertical);
    }
}
UiTableControlBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-ui-table-control-bar',
                template: "\n<div class=\"table-control-block\">\n  <!-- contro detail -->\n  <div class=\"table-control-detail\" (click)=\"clickBtn()\">\n      <div class=\"control-button-block\">\n        <div class=\"btn-icon\">\n          <img src=\"assets/img/icon-change.svg\">\n        </div>\n      </div>\n      <div class=\"control-text\">\n        <div *ngIf=\"isVertical\" class=\"text-option text-option-01\">{{language.vertical | translate}}</div>\n        <div *ngIf=\"!isVertical\" class=\"text-option text-option-02\">{{language.horizonal | translate}}</div>\n      </div>\n  </div>\n  <!-- end of control detail -->\n  <div class=\"table-extra-block\">\n    <ng-content></ng-content>\n  </div>\n  \n</div>",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-control-block{display:flex;justify-content:space-between;width:100%;background-color:#fff;padding:12px 15px;border-bottom:1px solid #ececec}@media (min-width:1023px){.table-control-block{display:none}}.table-control-block .control-button-block,.table-control-block .table-control-detail{display:flex}.table-control-block .btn-icon{display:inline-block;margin-right:12px}.table-control-block .btn-icon img{max-width:24px;width:100%}.table-control-block .control-text{color:#414141;font-size:.875rem;line-height:28px}"]
            }] }
];
UiTableControlBarComponent.ctorParameters = () => [];
UiTableControlBarComponent.propDecorators = {
    isVertical: [{ type: Input }],
    onClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiTableControlBarComponent.prototype.language;
    /**
     * @type {?}
     * @private
     */
    UiTableControlBarComponent.prototype._isVertical;
    /** @type {?} */
    UiTableControlBarComponent.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtY29udHJvbC1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS10YWJsZS1jb250cm9sLWJhci91aS10YWJsZS1jb250cm9sLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTzVDLE1BQU07SUFnQko7UUFkTyxhQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUN6QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQVVsQixZQUFPLEdBQUssSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUd6QixDQUFDOzs7O0lBWmpCLElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7OztJQUNELElBQUksVUFBVSxDQUFDLEdBQUc7UUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFFekIsQ0FBQzs7OztJQVFELFFBQVE7SUFDUixDQUFDOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLG9zQkFBb0Q7O2FBRXJEOzs7O3lCQUtFLEtBQUs7c0JBU0wsTUFBTTs7OztJQVhQLDhDQUFpQzs7Ozs7SUFDakMsaURBQTRCOztJQVU1Qiw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtdWktdGFibGUtY29udHJvbC1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktdGFibGUtY29udHJvbC1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS10YWJsZS1jb250cm9sLWJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpVGFibGVDb250cm9sQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgbGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcbiAgcHJpdmF0ZSBfaXNWZXJ0aWNhbCA9IGZhbHNlO1xuICBASW5wdXQoKSBcbiAgZ2V0IGlzVmVydGljYWwoKXtcbiAgICByZXR1cm4gdGhpcy5faXNWZXJ0aWNhbDtcbiAgfVxuICBzZXQgaXNWZXJ0aWNhbCh2YWwpe1xuICAgIHRoaXMuX2lzVmVydGljYWwgPSB2YWw7XG5cbiAgfVxuICBcbiAgQE91dHB1dCgpIG9uQ2xpY2sgID0gIG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGNsaWNrQnRuKCl7XG4gICAgdGhpcy5pc1ZlcnRpY2FsID0gIXRoaXMuaXNWZXJ0aWNhbDtcbiAgICB0aGlzLm9uQ2xpY2suZW1pdCh0aGlzLmlzVmVydGljYWwpO1xuICB9XG5cbn1cbiJdfQ==