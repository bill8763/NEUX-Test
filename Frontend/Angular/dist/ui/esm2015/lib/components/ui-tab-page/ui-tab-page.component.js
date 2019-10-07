/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
export class UiTabPageComponent {
    /**
     * @param {?} changeDector
     */
    constructor(changeDector) {
        this.changeDector = changeDector;
        this.tabSwitchFirst = '';
        this.tabSwitchSecond = '';
        this.openTab = 0;
        this.onTabChildClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    handleActive() {
        this.openTab = this.openTab ? 0 : 1;
        this.onTabChildClick.emit(this.openTab);
        this.changeDector.markForCheck();
    }
}
UiTabPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-tab-page',
                template: "<button class=\"ui-tab-page\" [ngClass]=\"{'active':openTab}\" (click)=\"handleActive()\">\n  <div class=\"switch-btn\">\n    <div id = 'btn_switchFirst'>{{tabSwitchFirst}}</div>\n    \n  </div>\n  <div class=\"switch-btn\">\n    <div id = 'btn_switchSecond'>{{tabSwitchSecond}}</div>\n    \n  </div>\n</button>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{height:40px}.ui-tab-page{display:inline-flex;background-color:#007ab3;border:none;outline:0;padding:0;position:relative}.ui-tab-page,.ui-tab-page .switch-btn{border-radius:20px}.ui-tab-page:before{display:block;content:'';width:50%;height:100%;border-radius:20px;background-color:#fff;border:2px solid #007ab3;position:absolute;top:0;left:0;-webkit-transform:translateX(0);transform:translateX(0);transition:.3s}.ui-tab-page .switch-btn{display:flex;flex:1;align-items:center;justify-content:center;height:40px;min-width:90px;opacity:.35;font-size:1rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:18px;letter-spacing:normal;text-align:center;color:#fff;position:relative;transition:.3s;padding:0 10px}.ui-tab-page .switch-btn:first-child{opacity:1;font-weight:700;color:#007ab3}.ui-tab-page.active:before{-webkit-transform:translateX(100%);transform:translateX(100%)}.ui-tab-page.active .switch-btn:first-child{opacity:.35;font-weight:400;color:#fff}.ui-tab-page.active .switch-btn:last-child{opacity:1;font-weight:700;color:#007ab3}"]
            }] }
];
UiTabPageComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UiTabPageComponent.propDecorators = {
    tabSwitchFirst: [{ type: Input }],
    tabSwitchSecond: [{ type: Input }],
    openTab: [{ type: Input }],
    onTabChildClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiTabPageComponent.prototype.tabSwitchFirst;
    /** @type {?} */
    UiTabPageComponent.prototype.tabSwitchSecond;
    /** @type {?} */
    UiTabPageComponent.prototype.openTab;
    /** @type {?} */
    UiTabPageComponent.prototype.onTabChildClick;
    /**
     * @type {?}
     * @private
     */
    UiTabPageComponent.prototype.changeDector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFiLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS10YWItcGFnZS91aS10YWItcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBUTNILE1BQU07Ozs7SUFLSixZQUFvQixZQUE4QjtRQUE5QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFKekMsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0Isb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUFVLENBQUMsQ0FBQztRQUNsQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDTyxDQUFDOzs7O0lBRXZELFFBQVE7SUFDUixDQUFDOzs7O0lBQ0QsWUFBWTtRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQSxDQUFDLENBQUEsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixxVUFBMkM7O2FBRzVDOzs7WUFQd0QsaUJBQWlCOzs7NkJBU3ZFLEtBQUs7OEJBQ0wsS0FBSztzQkFDTCxLQUFLOzhCQUNMLE1BQU07Ozs7SUFIUCw0Q0FBb0M7O0lBQ3BDLDZDQUFxQzs7SUFDckMscUNBQTRCOztJQUM1Qiw2Q0FBK0M7Ozs7O0lBQ25DLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktdGFiLXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktdGFiLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS10YWItcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICAvLyBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpVGFiUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRhYlN3aXRjaEZpcnN0OnN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0YWJTd2l0Y2hTZWNvbmQ6c3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG9wZW5UYWI6bnVtYmVyID0gMDtcbiAgQE91dHB1dCgpIG9uVGFiQ2hpbGRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGhhbmRsZUFjdGl2ZSgpe1xuICAgIHRoaXMub3BlblRhYiA9IHRoaXMub3BlblRhYj8wOjE7XG4gICAgdGhpcy5vblRhYkNoaWxkQ2xpY2suZW1pdCh0aGlzLm9wZW5UYWIpO1xuICAgIHRoaXMuY2hhbmdlRGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=