/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
export class UiTabMoreComponent {
    /**
     * @param {?} changeDector
     */
    constructor(changeDector) {
        this.changeDector = changeDector;
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    isOpenTabSelect() {
        this.isOpen = !this.isOpen;
    }
    /**
     * @return {?}
     */
    closeTabSelect() {
        this.isOpen = false;
        this.changeDector.markForCheck();
    }
}
UiTabMoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-tab-more',
                template: "<div class=\"ui-tab-more\">\n  <button class=\"more-btn\" (click)=\"isOpenTabSelect()\">\n    <img src=\"assets/img/icon-elipsis-h.svg\" alt=\"\">\n  </button>\n  <div class=\"more-content\" [ngClass]=\"{'show':isOpen}\">\n      <ng-content></ng-content>\n  </div>\n  \n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{width:100%;height:100%}:host ::ng-deep button,:host button{border:none;outline:0}.ui-tab-more{width:100%;height:100%;position:relative}.ui-tab-more .more-btn{width:100%;height:100%;background-color:transparent;position:relative}.ui-tab-more .more-btn img{width:24px;height:24px;position:absolute;top:3px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ui-tab-more .more-content{position:absolute;top:30px;box-shadow:0 0 16px 0 rgba(0,0,0,.23);right:0;display:none}.ui-tab-more .more-content.show{display:block}.ui-tab-more .more-content:before{display:block;content:'';width:18px;height:18px;background-color:#fff;position:absolute;right:6px;top:-4px;-webkit-transform:rotate(45deg);transform:rotate(45deg);box-shadow:0 0 15px 0 rgba(0,0,0,.15)}.ui-tab-more .more-content ::ng-deep .tab-child{position:relative}.ui-tab-more .more-content ::ng-deep .tab-child .tab-child-btn-style{min-width:140px;padding:15px;background-color:#fff;font-size:.875rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:.2px;text-align:center;color:#414141}.ui-tab-more .more-content ::ng-deep .tab-child.active .tab-child-btn-style{background-color:#f1f9fa}.ui-tab-more .more-content ::ng-deep .tab-child+.tab-child{border-top:1px solid #ececec}"]
            }] }
];
UiTabMoreComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    UiTabMoreComponent.prototype.isOpen;
    /**
     * @type {?}
     * @private
     */
    UiTabMoreComponent.prototype.changeDector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFiLW1vcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS10YWItbW9yZS91aS10YWItbW9yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXJHLE1BQU07Ozs7SUFFSixZQUFvQixZQUE4QjtRQUE5QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFEbEQsV0FBTSxHQUFXLEtBQUssQ0FBQztJQUMrQixDQUFDOzs7O0lBRXZELFFBQVE7SUFDUixDQUFDOzs7O0lBQ0QsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCxjQUFjO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGdTQUEyQztnQkFFM0MsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7WUFQMkQsaUJBQWlCOzs7O0lBUzNFLG9DQUF1Qjs7Ozs7SUFDWCwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktdGFiLW1vcmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktdGFiLW1vcmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS10YWItbW9yZS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpVGFiTW9yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzT3Blbjpib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBpc09wZW5UYWJTZWxlY3QoKXtcbiAgICB0aGlzLmlzT3Blbj0hdGhpcy5pc09wZW47XG4gIH1cbiAgY2xvc2VUYWJTZWxlY3QoKXtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbmdlRGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=