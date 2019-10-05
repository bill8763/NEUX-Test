/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
var UiCollapseCard1Component = /** @class */ (function () {
    function UiCollapseCard1Component(changeDetector) {
        this.changeDetector = changeDetector;
        this.emptyText = ['You can click', ' to add your customer\'s information.'];
        this.isOpen = false;
        this.activeClasses = '';
    }
    /**
     * @return {?}
     */
    UiCollapseCard1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    //isOpen = true;
    //isOpen = true;
    /**
     * @return {?}
     */
    UiCollapseCard1Component.prototype.toggleCollapse = 
    //isOpen = true;
    /**
     * @return {?}
     */
    function () {
        this.isOpen = !this.isOpen;
        this.activeClasses = this.isOpen ? 'active' : '';
        this.changeDetector.markForCheck();
        this.changeDetector.detectChanges();
        return this.isOpen;
    };
    /**
     * @return {?}
     */
    UiCollapseCard1Component.prototype.isOpenStatus = /**
     * @return {?}
     */
    function () {
        return this.isOpen ? 'open' : 'closed';
    };
    /**
     * @return {?}
     */
    UiCollapseCard1Component.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        //console.log('content child:', this.collapseContentHeight.nativeElement.childNodes.length);
        // has one if hide html, so child > 1 show no other child
        // this.collapseContentHeight.nativeElement.childNodes.length > 1 ? this.isHide = false : this.isHide = true;
    };
    UiCollapseCard1Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-collapse-card1',
                    animations: [
                        trigger('openClose', [
                            state('open', style({
                                height: '*',
                                opacity: 1
                            })),
                            state('closed', style({
                                height: '0',
                                opacity: 0
                            })),
                            transition('open => closed', animate('200ms ease-in-out')),
                            transition('closed => open', animate('200ms ease-in-out'))
                        ]),
                    ],
                    template: "<!-- empty -->\n<div [hidden]=\"!isDataEmpty\" class=\"empty-block\">\n  <app-ui-card-style-tag1>\n    <ng-container textType=\"tag\">\n      {{tagText}}\n    </ng-container>\n    <ng-container textType=\"cardContent\">\n        <div class=\"empty-text\">\n            {{emptyText[0]}}\n            <span class=\"icon-img\"><img src=\"./assets/img/icon-edit-grey.svg\"></span>\n            {{emptyText[1]}}\n        </div>\n    </ng-container>\n  </app-ui-card-style-tag1>\n</div>\n<!-- end of empty -->\n<!-- content -->\n<div [hidden]=\"isDataEmpty\" class=\"detail-block\">\n  <app-ui-card-style-tag1>\n    <ng-container textType=\"tag\">\n      {{tagText}}\n    </ng-container>\n      <ng-container textType=\"cardContent\">\n        <!-- content -->\n        <div class=\"collapse-group-block\" [ngClass]=\"activeClasses\">\n          <app-ui-form-layout-advanced [isOnlyText]=\"true\"> \n                <div class=\"collapse-origin-block\">\n                    <ng-content select=\"[textType=collapseContentOrigin]\"></ng-content>\n                </div>\n                <div #collapseContentHeight class=\"collapse-block\" [@openClose]=\"isOpenStatus()\">\n                    <ng-content  select=\"[textType=collapseContent]\"></ng-content>\n                </div>\n          </app-ui-form-layout-advanced>\n          <div #collapseBtn class=\"collapse-btn-block\" [ngClass]=\"isHide ? 'hide' : ''\" (click)=\"toggleCollapse()\">\n              <ng-content select=\"[textType=collapseBtn]\"></ng-content>\n              <span class=\"icon-arrow\"></span>\n          </div>\n        </div>\n        <!-- end of content -->\n      </ng-container>\n    \n  </app-ui-card-style-tag1>\n</div>\n<!-- end of content -->\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep .v-card-style-tag-1 .card-block{position:relative}:host ::ng-deep .v-card-style-tag-1 .card-block .content-block{margin-left:-20px;margin-right:-20px}:host ::ng-deep .v-card-style-tag-1 .collapse-group-block .gas-layout-form{padding:0 20px}:host ::ng-deep .gas-layout-form .gas-row-block{margin-top:0}:host ::ng-deep .gas-layout-form [class*=gas-col-]{margin-bottom:15px}:host .detail-block{padding-left:5px}:host .empty-block{padding-left:5px}:host .empty-block .content-block{padding-top:15px;text-align:center;padding-left:25px;padding-right:30px}:host .empty-block .empty-text{font-size:.875rem;font-weight:300;line-height:28px;display:inline-block;vertical-align:middle;text-align:center;width:100%}:host .empty-block .icon-img{display:inline-block;vertical-align:middle}:host .collapse-group-block .gas-layout-form{padding:0 20px}:host .collapse-group-block.active .collapse-block ::ng-deep .info-unit-block{padding-top:5px}:host .collapse-group-block.active .collapse-btn-block .icon-arrow{padding-top:6px;padding-bottom:0;display:inline-block}:host .collapse-group-block .collapse-btn-block{display:inline-block;vertical-align:middle;margin-top:20px;line-height:normal;position:absolute;bottom:0;z-index:9;cursor:pointer;text-align:center;width:100%;border-top:1px solid #c2c2c2}:host .collapse-group-block .collapse-btn-block .icon-arrow{padding-top:3px;display:inline-block;padding-bottom:3px}:host .collapse-group-block .collapse-btn-block.hide{display:none}"]
                }] }
    ];
    UiCollapseCard1Component.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiCollapseCard1Component.propDecorators = {
        tagText: [{ type: Input }],
        TextType: [{ type: Input }],
        collapseBtn: [{ type: Input }],
        isDataEmpty: [{ type: Input }],
        isHide: [{ type: Input }],
        emptyText: [{ type: Input }],
        collapseContentHeight: [{ type: ViewChild, args: ['collapseContentHeight',] }]
    };
    return UiCollapseCard1Component;
}());
export { UiCollapseCard1Component };
if (false) {
    /** @type {?} */
    UiCollapseCard1Component.prototype.tagText;
    /** @type {?} */
    UiCollapseCard1Component.prototype.TextType;
    /** @type {?} */
    UiCollapseCard1Component.prototype.collapseBtn;
    /** @type {?} */
    UiCollapseCard1Component.prototype.isDataEmpty;
    /** @type {?} */
    UiCollapseCard1Component.prototype.isHide;
    /** @type {?} */
    UiCollapseCard1Component.prototype.emptyText;
    /** @type {?} */
    UiCollapseCard1Component.prototype.isOpen;
    /** @type {?} */
    UiCollapseCard1Component.prototype.activeClasses;
    /** @type {?} */
    UiCollapseCard1Component.prototype.collapseContentHeight;
    /**
     * @type {?}
     * @private
     */
    UiCollapseCard1Component.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY29sbGFwc2UtY2FyZDEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1jb2xsYXBzZS1jYXJkMS91aS1jb2xsYXBzZS1jYXJkMS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxVQUFVLEdBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU1RTtJQTJCRSxrQ0FBb0IsY0FBZ0M7UUFBaEMsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBRDNDLGNBQVMsR0FBaUIsQ0FBQyxlQUFlLEVBQUUsdUNBQXVDLENBQUMsQ0FBQztRQUt2RixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO0lBTHVCLENBQUM7Ozs7SUFFekQsMkNBQVE7OztJQUFSO0lBQ0EsQ0FBQztJQUlELGdCQUFnQjs7Ozs7SUFFaEIsaURBQWM7Ozs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUNELCtDQUFZOzs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDekMsQ0FBQzs7OztJQUdELHFEQUFrQjs7O0lBQWxCO1FBQ0UsNEZBQTRGO1FBQzVGLHlEQUF5RDtRQUMxRCw2R0FBNkc7SUFDOUcsQ0FBQzs7Z0JBcERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLFdBQVcsRUFBRTs0QkFDbkIsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7Z0NBQ2xCLE1BQU0sRUFBRSxHQUFHO2dDQUNYLE9BQU8sRUFBRSxDQUFDOzZCQUNYLENBQUMsQ0FBQzs0QkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztnQ0FDcEIsTUFBTSxFQUFFLEdBQUc7Z0NBQ1gsT0FBTyxFQUFFLENBQUM7NkJBQ1gsQ0FBQyxDQUFDOzRCQUNILFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs0QkFDMUQsVUFBVSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3lCQUMzRCxDQUFDO3FCQUNIO29CQUNELHlzREFBaUQ7b0JBRWpELGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDL0M7OztnQkF0QmtGLGlCQUFpQjs7OzBCQXdCakcsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7d0NBb0JMLFNBQVMsU0FBQyx1QkFBdUI7O0lBVXBDLCtCQUFDO0NBQUEsQUF4REQsSUF3REM7U0FwQ1ksd0JBQXdCOzs7SUFDbkMsMkNBQXlCOztJQUN6Qiw0Q0FBMEI7O0lBQzFCLCtDQUE2Qjs7SUFDN0IsK0NBQThCOztJQUM5QiwwQ0FBMEI7O0lBQzFCLDZDQUE4Rjs7SUFLOUYsMENBQStCOztJQUMvQixpREFBaUM7O0lBY2pDLHlEQUFxRTs7Ozs7SUFuQnpELGtEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHJpZ2dlcixzdGF0ZSxzdHlsZSxhbmltYXRlLHRyYW5zaXRpb24sfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWNvbGxhcHNlLWNhcmQxJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ29wZW5DbG9zZScsIFtcbiAgICAgIHN0YXRlKCdvcGVuJywgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6ICcqJyxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHtcbiAgICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ29wZW4gPT4gY2xvc2VkJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbi1vdXQnKSksXG4gICAgICB0cmFuc2l0aW9uKCdjbG9zZWQgPT4gb3BlbicsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4tb3V0JykpXG4gICAgXSksXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1jb2xsYXBzZS1jYXJkMS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWNvbGxhcHNlLWNhcmQxLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlDb2xsYXBzZUNhcmQxQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGFnVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBUZXh0VHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xsYXBzZUJ0bjogc3RyaW5nO1xuICBASW5wdXQoKSBpc0RhdGFFbXB0eTogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNIaWRlIDogYm9vbGVhbjtcbiAgQElucHV0KCkgZW1wdHlUZXh0OiBBcnJheTxzdHJpbmc+PSBbJ1lvdSBjYW4gY2xpY2snLCAnIHRvIGFkZCB5b3VyIGN1c3RvbWVyXFwncyBpbmZvcm1hdGlvbi4nXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgcHVibGljIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgYWN0aXZlQ2xhc3Nlczogc3RyaW5nPSAnJztcblxuICAvL2lzT3BlbiA9IHRydWU7XG5cbiAgdG9nZ2xlQ29sbGFwc2UoKSB7XG4gICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgdGhpcy5hY3RpdmVDbGFzc2VzID0gdGhpcy5pc09wZW4gPyAnYWN0aXZlJyA6ICcnO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuO1xuICB9XG4gIGlzT3BlblN0YXR1cygpe1xuICAgIHJldHVybiB0aGlzLmlzT3BlbiA/ICdvcGVuJyA6ICdjbG9zZWQnO1xuICB9XG4gIEBWaWV3Q2hpbGQoJ2NvbGxhcHNlQ29udGVudEhlaWdodCcpIGNvbGxhcHNlQ29udGVudEhlaWdodDpFbGVtZW50UmVmO1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpe1xuICAgIC8vY29uc29sZS5sb2coJ2NvbnRlbnQgY2hpbGQ6JywgdGhpcy5jb2xsYXBzZUNvbnRlbnRIZWlnaHQubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCk7XG4gICAgLy8gaGFzIG9uZSBpZiBoaWRlIGh0bWwsIHNvIGNoaWxkID4gMSBzaG93IG5vIG90aGVyIGNoaWxkXG4gICAvLyB0aGlzLmNvbGxhcHNlQ29udGVudEhlaWdodC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMSA/IHRoaXMuaXNIaWRlID0gZmFsc2UgOiB0aGlzLmlzSGlkZSA9IHRydWU7XG4gIH1cblxuICBcblxufVxuIl19