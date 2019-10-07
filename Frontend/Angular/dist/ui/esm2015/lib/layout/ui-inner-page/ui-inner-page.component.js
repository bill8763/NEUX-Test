/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, Optional } from '@angular/core';
import { Location } from '@angular/common';
import { animationEnterLeavePage } from '../../model/Animation/AnimationEnterLeave';
// import * as fromStore from '@app/Store';
// import { Store } from '@ngrx/store';
export class UIInnerPageComponent {
    // setting style2
    /**
     * @param {?} _location
     */
    constructor(_location) {
        this._location = _location;
        this.title = '';
        this._btmAddHeight = 120;
        this.pageStyle = ''; // setting style2
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
        // console.log('ele:',this.content.nativeElement);
        // console.log('nativeElement ele1:',this.content.nativeElement.querySelector('div'));
        // console.log('nativeElement ele2:',this.content.nativeElement.querySelector('div').querySelector('div'));
        // console.log('Height:',this.content.nativeElement.offsetHeight);
        // console.log('ele-h:',this.content.nativeElement.getAttribute('contentHeight'));
        //offsetHeight
        // setTimeout(()=> {
        //   console.log('contentHeight in inner page', this.contentHeight);
        //   this.contentHeight = this.contentHeight + this._btmAddHeight;
        //   console.log('contentHeight in inner page after add', this.contentHeight);
        //   //如果沒有設定高度，先讓他的高度用100vh扣掉header
        //   this.contentHeight > this._btmAddHeight ? this.contentHeight = this.contentHeight+'px' : this.contentHeight = 'calc(100vh - 84px)';
        //   console.log('contentHeight in inner page after if', this.contentHeight);
        // },800);
    }
    /**
     * @return {?}
     */
    closeMain() {
        if (this._location)
            this._location.back();
        // this.store.select(fromStore.getHistory).subscribe(res=>{
        //   console.log(res);
        // })
    }
}
UIInnerPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-inner-page',
                template: "<div id=\"mainDIV\" class=\"ui-page-content form-stop-scroll form-scroll-content stop-scroll-block\">\n  <div class=\"ui-inner-page-header\">\n    <div class=\"ui-layout-back-block style-full-width-title\" (click)=\"closeMain()\">\n        <div class=\"header-back-btn \">\n            <img class=\"back-icon\" src=\"assets/img/icon-arrow-white.svg\">\n        </div>\n    </div>\n    <div class=ui-inner-page-nav>\n    </div>\n\n    <div class=\"ui-inner-layout-title\">\n      <p>{{title}}</p>\n    </div>\n  </div>\n  <!-- end: ui-inner-page-header -->\n\n  <div class=\"ui-inner-page-content \"  #inpageMainContent [ngStyle]=\"{'height': this.contentHeight}\">\n    <ng-content  select=\"[main]\"></ng-content>\n    <ng-content select=\"[global-main]\"></ng-content>\n  </div>\n  <!-- end: ui-inner-page-content -->\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    animationEnterLeavePage
                ],
                styles: [":host{display:inline-block;min-height:100vh;max-width:100%;width:100vw}.ui-page-content{overflow-y:auto;overflow-x:hidden;display:inline-block;min-height:100vh;height:100vh;padding-bottom:calc(100px + 24px);background-color:#f5f5f5;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);width:100%}.ui-inner-page-header{display:flex;align-items:center;justify-content:center;position:relative;padding-top:10px;width:100%;min-height:44px;padding-bottom:calc(220px - 44px);background:linear-gradient(to bottom,#0068b7,#003781)}.ui-inner-page-header>*{display:inline-block}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-inner-page-header .ui-layout-back-block{cursor:pointer;color:#fff;line-height:normal;display:flex;align-items:center;min-height:44px}.ui-inner-page-header .ui-layout-back-block.style-full-width-title{width:44px;height:44px;position:absolute;left:0}.ui-inner-page-header .header-back-btn{padding-left:20px}.ui-inner-page-header .header-back-btn .back-icon{width:12px}.ui-inner-page-header .ui-inner-layout-title{color:#fff;font-size:1.125rem;width:100%;text-align:center;max-width:300px;margin:0 auto}.ui-inner-page-header .ui-inner-layout-title p{margin:0;font-weight:700}.ui-inner-page-content{margin:-136px 130px 0;min-width:1px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border-radius:5px;background-color:transparent}.ui-inner-page-content ::ng-deep .layout-block{min-height:70vh;height:100%;border-radius:5px;position:relative;overflow:visible;overflow-y:visible!important}@media screen and (max-width:1023px){.ui-inner-page-header{padding-bottom:calc(275px - 44px)}.ui-inner-page-content{margin-top:-201px;margin-left:5px;margin-right:5px}}"]
            }] }
];
UIInnerPageComponent.ctorParameters = () => [
    { type: Location, decorators: [{ type: Optional }] }
];
UIInnerPageComponent.propDecorators = {
    title: [{ type: Input }],
    contentHeight: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UIInnerPageComponent.prototype.title;
    /** @type {?} */
    UIInnerPageComponent.prototype.contentHeight;
    /**
     * @type {?}
     * @private
     */
    UIInnerPageComponent.prototype._btmAddHeight;
    /** @type {?} */
    UIInnerPageComponent.prototype.pageStyle;
    /**
     * @type {?}
     * @protected
     */
    UIInnerPageComponent.prototype._location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5uZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvdWktaW5uZXItcGFnZS91aS1pbm5lci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQThFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4SyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFDLE1BQU0sMkNBQTJDLENBQUM7OztBQWFuRixNQUFNOzs7OztJQVdKLFlBQ3dCLFNBQW1CO1FBQW5CLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFWbEMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUtwQixrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUM1QixjQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsaUJBQWlCO0lBSWEsQ0FBQzs7OztJQUUvQyxRQUFRO0lBQ1IsQ0FBQzs7OztJQUNELGVBQWU7UUFDYixrREFBa0Q7UUFDbEQsc0ZBQXNGO1FBQ3RGLDJHQUEyRztRQUMzRyxrRUFBa0U7UUFDbEUsa0ZBQWtGO1FBQ2xGLGNBQWM7UUFJZCxvQkFBb0I7UUFDcEIsb0VBQW9FO1FBQ3BFLGtFQUFrRTtRQUNsRSw4RUFBOEU7UUFDOUUsb0NBQW9DO1FBQ3BDLHdJQUF3STtRQUN4SSw2RUFBNkU7UUFFN0UsVUFBVTtJQUNaLENBQUM7Ozs7SUFHRCxTQUFTO1FBQ1AsSUFBRyxJQUFJLENBQUMsU0FBUztZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsMkRBQTJEO1FBQzNELHNCQUFzQjtRQUN0QixLQUFLO0lBQ1AsQ0FBQzs7O1lBckRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qix5MEJBQTZDO2dCQUU3QyxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTtnQkFDOUMsVUFBVSxFQUFFO29CQUNWLHVCQUF1QjtpQkFDeEI7O2FBQ0Y7OztZQWJPLFFBQVEsdUJBMEJYLFFBQVE7OztvQkFWVixLQUFLOzRCQUlMLEtBQUs7Ozs7SUFKTixxQ0FBNEI7O0lBSTVCLDZDQUF1Qjs7Ozs7SUFDdkIsNkNBQTRCOztJQUM1Qix5Q0FBZTs7Ozs7SUFJYix5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIENvbnRlbnRDaGlsZCxBZnRlclZpZXdJbml0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgYW5pbWF0aW9uRW50ZXJMZWF2ZVBhZ2V9IGZyb20gJy4uLy4uL21vZGVsL0FuaW1hdGlvbi9BbmltYXRpb25FbnRlckxlYXZlJztcbi8vIGltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICdAYXBwL1N0b3JlJztcbi8vIGltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktaW5uZXItcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1pbm5lci1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktaW5uZXItcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgYW5pbWF0aW9uRW50ZXJMZWF2ZVBhZ2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBVSUlubmVyUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xuICAvLyBAVmlld0NoaWxkcmVuKCdueC1pY29uJykgZWxlbWVudFZpZXc6IEVsZW1lbnRSZWY7XG4gIC8vQFZpZXdDaGlsZCgnaW5wYWdlTWFpbkNvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xuICAvLyBAVmlld0NoaWxkKCdpbnBhZ2VNYWluQ29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIGNvbnRlbnRIZWlnaHQ7XG4gIHByaXZhdGUgX2J0bUFkZEhlaWdodCA9IDEyMDtcbiAgcGFnZVN0eWxlID0gJyc7IC8vIHNldHRpbmcgc3R5bGUyXG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgX2xvY2F0aW9uOiBMb2NhdGlvbikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2VsZTonLHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAvLyBjb25zb2xlLmxvZygnbmF0aXZlRWxlbWVudCBlbGUxOicsdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2JykpO1xuICAgIC8vIGNvbnNvbGUubG9nKCduYXRpdmVFbGVtZW50IGVsZTI6Jyx0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKS5xdWVyeVNlbGVjdG9yKCdkaXYnKSk7XG4gICAgLy8gY29uc29sZS5sb2coJ0hlaWdodDonLHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2VsZS1oOicsdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50SGVpZ2h0JykpO1xuICAgIC8vb2Zmc2V0SGVpZ2h0XG5cblxuXG4gICAgLy8gc2V0VGltZW91dCgoKT0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdjb250ZW50SGVpZ2h0IGluIGlubmVyIHBhZ2UnLCB0aGlzLmNvbnRlbnRIZWlnaHQpO1xuICAgIC8vICAgdGhpcy5jb250ZW50SGVpZ2h0ID0gdGhpcy5jb250ZW50SGVpZ2h0ICsgdGhpcy5fYnRtQWRkSGVpZ2h0O1xuICAgIC8vICAgY29uc29sZS5sb2coJ2NvbnRlbnRIZWlnaHQgaW4gaW5uZXIgcGFnZSBhZnRlciBhZGQnLCB0aGlzLmNvbnRlbnRIZWlnaHQpO1xuICAgIC8vICAgLy/lpoLmnpzmspLmnInoqK3lrprpq5jluqbvvIzlhYjorpPku5bnmoTpq5jluqbnlKgxMDB2aOaJo+aOiWhlYWRlclxuICAgIC8vICAgdGhpcy5jb250ZW50SGVpZ2h0ID4gdGhpcy5fYnRtQWRkSGVpZ2h0ID8gdGhpcy5jb250ZW50SGVpZ2h0ID0gdGhpcy5jb250ZW50SGVpZ2h0KydweCcgOiB0aGlzLmNvbnRlbnRIZWlnaHQgPSAnY2FsYygxMDB2aCAtIDg0cHgpJztcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdjb250ZW50SGVpZ2h0IGluIGlubmVyIHBhZ2UgYWZ0ZXIgaWYnLCB0aGlzLmNvbnRlbnRIZWlnaHQpO1xuXG4gICAgLy8gfSw4MDApO1xuICB9XG5cblxuICBjbG9zZU1haW4oKSB7XG4gICAgaWYodGhpcy5fbG9jYXRpb24pXG4gICAgICB0aGlzLl9sb2NhdGlvbi5iYWNrKCk7XG4gICAgLy8gdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVN0b3JlLmdldEhpc3RvcnkpLnN1YnNjcmliZShyZXM9PntcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgLy8gfSlcbiAgfVxuXG5cbn1cbiJdfQ==