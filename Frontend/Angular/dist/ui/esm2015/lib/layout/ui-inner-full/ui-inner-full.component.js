/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, Optional, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';
// import * as fromStore from '@app/Store';
// import { Store } from '@ngrx/store';
export class UiInnerFullComponent {
    /**
     * @param {?} _location
     */
    constructor(_location) {
        this._location = _location;
        this.title = '';
        this.prevText = [];
        this.agentBackEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    closeMain() {
        //console.debug("hey closeMain.....: ", this._location);
        // if (this._location) {
        this.agentBackEvent.emit("agentBack");
        //this._location.back();
        // }
        // this.store.select(fromStore.getHistory).subscribe(res => {
        //   console.log(res);
        // });
    }
}
UiInnerFullComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-inner-full',
                template: "<div class=\"ui-page-content stop-scroll-block\">\n  <div class=\"ui-inner-full-header\">\n    <!-- prev -->\n    <div class=\"ui-inner-prev-content-block\">\n        <div class=\"ui-layout-back-block \" (click)=\"closeMain()\">\n          <div class=\"header-back-btn\">\n              <img class=\"back-icon\" src=\"assets/img/icon-arrow-white.svg\">\n          </div>\n        </div>\n        <div class=ui-inner-full-nav>\n          <ng-container *ngFor=\"let item of prevText; let last = last\">\n            <span class=\"prev-text-item prev-text\" [ngClass]=\"last ? 'style-last-item': ''\">{{item}}</span>\n            <span class=\"prev-text-item prev-text-icon\" *ngIf=\"!last\">\n              <img src=\"assets/img/icon-arrow-white.svg\">\n            </span>\n          </ng-container>\n        </div>\n    </div>\n    <!-- end of prev -->\n    <div class=\"ui-inner-layout-title\">\n      <p>{{title}}</p>\n    </div>\n</div>\n<!-- end: ui-inner-full-header -->\n\n  <div  class=\"ui-inner-full-content\">\n    <ng-content  select=\"[main]\"></ng-content>\n    <ng-content select=\"[global-main]\"></ng-content>\n  </div>\n  <!-- end: ui-inner-full-content -->\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ui-page-content{min-height:100vh;background-color:#f5f5f5;overflow-x:hidden}.ui-inner-full-header{display:flex;align-items:center;width:100%;min-height:44px;position:relative;background:linear-gradient(to bottom,#0068b7,#003781)}.ui-inner-full-header>*{display:inline-block}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-inner-full-header .ui-layout-back-block{cursor:pointer;color:#fff;line-height:normal;display:flex;align-items:center;min-height:44px}.ui-inner-full-header .ui-layout-back-block.style-full-width-title{width:44px;height:44px;position:absolute;left:0}.ui-inner-full-header .header-back-btn{padding-left:20px}.ui-inner-full-header .header-back-btn .back-icon{width:12px}.ui-inner-full-header .ui-inner-layout-title{color:#fff;font-size:1.125rem;width:100%;text-align:center;max-width:300px;margin:0 auto}.ui-inner-full-header .ui-inner-layout-title p{margin:0;font-weight:700}.ui-inner-full-header .ui-inner-prev-content-block{display:flex;align-items:center;max-width:300px;width:100%;overflow:hidden;position:absolute;left:0;z-index:9}@media (max-width:1023px){.ui-inner-full-header .ui-inner-prev-content-block{max-width:44px}.ui-inner-full-header .ui-inner-prev-content-block .ui-inner-full-nav{display:none}}.ui-inner-full-header .ui-inner-full-nav{font-size:.75rem;color:#fff;margin-left:15px}.ui-inner-full-header .ui-inner-full-nav .prev-text{font-size:.75rem;display:inline-block;max-width:85px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ui-inner-full-header .ui-inner-full-nav .prev-text.style-last-item{font-weight:700}.ui-inner-full-header .ui-inner-full-nav .prev-text-item{display:inline-block;vertical-align:middle}.ui-inner-full-header .ui-inner-full-nav .prev-text-icon{margin:0 5px}.ui-inner-full-header .ui-inner-full-nav .prev-text-icon img{width:12px;height:12px;-webkit-transform:rotate(180deg);transform:rotate(180deg);display:inline-block;vertical-align:middle}.ui-inner-full-content{padding-top:40px}@media (max-width:1023px){.ui-inner-full-content{padding-top:30px}}"]
            }] }
];
UiInnerFullComponent.ctorParameters = () => [
    { type: Location, decorators: [{ type: Optional }] }
];
UiInnerFullComponent.propDecorators = {
    title: [{ type: Input }],
    prevText: [{ type: Input }],
    agentBackEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiInnerFullComponent.prototype.title;
    /** @type {?} */
    UiInnerFullComponent.prototype.prevText;
    /** @type {?} */
    UiInnerFullComponent.prototype.agentBackEvent;
    /**
     * @type {?}
     * @private
     */
    UiInnerFullComponent.prototype._location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5uZXItZnVsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvdWktaW5uZXItZnVsbC91aS1pbm5lci1mdWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsdUJBQXVCLEVBQXFCLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JJLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBVTNDLE1BQU07Ozs7SUFPSixZQUNzQixTQUFtQjtRQUFuQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBTmhDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUViLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUdULENBQUM7Ozs7SUFFOUMsUUFBUSxLQUFJLENBQUM7Ozs7SUFFYixTQUFTO1FBRVAsd0RBQXdEO1FBRXhELHdCQUF3QjtRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0Qyx3QkFBd0I7UUFDMUIsSUFBSTtRQUVKLDZEQUE2RDtRQUM3RCxzQkFBc0I7UUFDdEIsTUFBTTtJQUNSLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsNHFDQUE2QztnQkFFN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7WUFUUSxRQUFRLHVCQWtCWixRQUFROzs7b0JBTlYsS0FBSzt1QkFDTCxLQUFLOzZCQUVMLE1BQU07Ozs7SUFIUCxxQ0FBNEI7O0lBQzVCLHdDQUF1Qjs7SUFFdkIsOENBQXNEOzs7OztJQUdwRCx5Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgT3B0aW9uYWwsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBpbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnQGFwcC9TdG9yZSc7XG4vLyBpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWlubmVyLWZ1bGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktaW5uZXItZnVsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWlubmVyLWZ1bGwuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlJbm5lckZ1bGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgcHJldlRleHQgPSBbXTtcblxuICBAT3V0cHV0KCkgYWdlbnRCYWNrRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24pIHsgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICBjbG9zZU1haW4oKSB7XG5cbiAgICAvL2NvbnNvbGUuZGVidWcoXCJoZXkgY2xvc2VNYWluLi4uLi46IFwiLCB0aGlzLl9sb2NhdGlvbik7XG5cbiAgICAvLyBpZiAodGhpcy5fbG9jYXRpb24pIHtcbiAgICAgIHRoaXMuYWdlbnRCYWNrRXZlbnQuZW1pdChcImFnZW50QmFja1wiKTtcbiAgICAgIC8vdGhpcy5fbG9jYXRpb24uYmFjaygpO1xuICAgIC8vIH1cbiAgICAgIFxuICAgIC8vIHRoaXMuc3RvcmUuc2VsZWN0KGZyb21TdG9yZS5nZXRIaXN0b3J5KS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgLy8gfSk7XG4gIH1cblxufVxuIl19