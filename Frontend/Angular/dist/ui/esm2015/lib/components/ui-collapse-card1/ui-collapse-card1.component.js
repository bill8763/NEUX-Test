/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
export class UiCollapseCard1Component {
    /**
     * @param {?} changeDetector
     */
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.emptyText = ['You can click', ' to add your customer\'s information.'];
        this.isOpen = false;
        this.activeClasses = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    //isOpen = true;
    /**
     * @return {?}
     */
    toggleCollapse() {
        this.isOpen = !this.isOpen;
        this.activeClasses = this.isOpen ? 'active' : '';
        this.changeDetector.markForCheck();
        this.changeDetector.detectChanges();
        return this.isOpen;
    }
    /**
     * @return {?}
     */
    isOpenStatus() {
        return this.isOpen ? 'open' : 'closed';
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        //console.log('content child:', this.collapseContentHeight.nativeElement.childNodes.length);
        // has one if hide html, so child > 1 show no other child
        // this.collapseContentHeight.nativeElement.childNodes.length > 1 ? this.isHide = false : this.isHide = true;
    }
}
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
UiCollapseCard1Component.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UiCollapseCard1Component.propDecorators = {
    tagText: [{ type: Input }],
    TextType: [{ type: Input }],
    collapseBtn: [{ type: Input }],
    isDataEmpty: [{ type: Input }],
    isHide: [{ type: Input }],
    emptyText: [{ type: Input }],
    collapseContentHeight: [{ type: ViewChild, args: ['collapseContentHeight',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY29sbGFwc2UtY2FyZDEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1jb2xsYXBzZS1jYXJkMS91aS1jb2xsYXBzZS1jYXJkMS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxVQUFVLEdBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQXNCNUUsTUFBTTs7OztJQU9KLFlBQW9CLGNBQWdDO1FBQWhDLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUQzQyxjQUFTLEdBQWlCLENBQUMsZUFBZSxFQUFFLHVDQUF1QyxDQUFDLENBQUM7UUFLdkYsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixrQkFBYSxHQUFVLEVBQUUsQ0FBQztJQUx1QixDQUFDOzs7O0lBRXpELFFBQVE7SUFDUixDQUFDOzs7OztJQU1ELGNBQWM7UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUNELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFHRCxrQkFBa0I7UUFDaEIsNEZBQTRGO1FBQzVGLHlEQUF5RDtRQUMxRCw2R0FBNkc7SUFDOUcsQ0FBQzs7O1lBcERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLFdBQVcsRUFBRTt3QkFDbkIsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7NEJBQ2xCLE1BQU0sRUFBRSxHQUFHOzRCQUNYLE9BQU8sRUFBRSxDQUFDO3lCQUNYLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQzs0QkFDcEIsTUFBTSxFQUFFLEdBQUc7NEJBQ1gsT0FBTyxFQUFFLENBQUM7eUJBQ1gsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQzt3QkFDMUQsVUFBVSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3FCQUMzRCxDQUFDO2lCQUNIO2dCQUNELHlzREFBaUQ7Z0JBRWpELGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOzthQUMvQzs7O1lBdEJrRixpQkFBaUI7OztzQkF3QmpHLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLO29DQW9CTCxTQUFTLFNBQUMsdUJBQXVCOzs7O0lBekJsQywyQ0FBeUI7O0lBQ3pCLDRDQUEwQjs7SUFDMUIsK0NBQTZCOztJQUM3QiwrQ0FBOEI7O0lBQzlCLDBDQUEwQjs7SUFDMUIsNkNBQThGOztJQUs5RiwwQ0FBK0I7O0lBQy9CLGlEQUFpQzs7SUFjakMseURBQXFFOzs7OztJQW5CekQsa0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0cmlnZ2VyLHN0YXRlLHN0eWxlLGFuaW1hdGUsdHJhbnNpdGlvbix9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktY29sbGFwc2UtY2FyZDEnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignb3BlbkNsb3NlJywgW1xuICAgICAgc3RhdGUoJ29wZW4nLCBzdHlsZSh7XG4gICAgICAgIGhlaWdodDogJyonLFxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnY2xvc2VkJywgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluLW91dCcpKSxcbiAgICAgIHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbi1vdXQnKSlcbiAgICBdKSxcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWNvbGxhcHNlLWNhcmQxLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktY29sbGFwc2UtY2FyZDEuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaUNvbGxhcHNlQ2FyZDFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0YWdUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIFRleHRUeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbGxhcHNlQnRuOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzRGF0YUVtcHR5OiBib29sZWFuO1xuICBASW5wdXQoKSBpc0hpZGUgOiBib29sZWFuO1xuICBASW5wdXQoKSBlbXB0eVRleHQ6IEFycmF5PHN0cmluZz49IFsnWW91IGNhbiBjbGljaycsICcgdG8gYWRkIHlvdXIgY3VzdG9tZXJcXCdzIGluZm9ybWF0aW9uLiddO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBwdWJsaWMgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBhY3RpdmVDbGFzc2VzOiBzdHJpbmc9ICcnO1xuXG4gIC8vaXNPcGVuID0gdHJ1ZTtcblxuICB0b2dnbGVDb2xsYXBzZSgpIHtcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICB0aGlzLmFjdGl2ZUNsYXNzZXMgPSB0aGlzLmlzT3BlbiA/ICdhY3RpdmUnIDogJyc7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcy5pc09wZW47XG4gIH1cbiAgaXNPcGVuU3RhdHVzKCl7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuID8gJ29wZW4nIDogJ2Nsb3NlZCc7XG4gIH1cbiAgQFZpZXdDaGlsZCgnY29sbGFwc2VDb250ZW50SGVpZ2h0JykgY29sbGFwc2VDb250ZW50SGVpZ2h0OkVsZW1lbnRSZWY7XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCl7XG4gICAgLy9jb25zb2xlLmxvZygnY29udGVudCBjaGlsZDonLCB0aGlzLmNvbGxhcHNlQ29udGVudEhlaWdodC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKTtcbiAgICAvLyBoYXMgb25lIGlmIGhpZGUgaHRtbCwgc28gY2hpbGQgPiAxIHNob3cgbm8gb3RoZXIgY2hpbGRcbiAgIC8vIHRoaXMuY29sbGFwc2VDb250ZW50SGVpZ2h0Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAxID8gdGhpcy5pc0hpZGUgPSBmYWxzZSA6IHRoaXMuaXNIaWRlID0gdHJ1ZTtcbiAgfVxuXG4gIFxuXG59XG4iXX0=