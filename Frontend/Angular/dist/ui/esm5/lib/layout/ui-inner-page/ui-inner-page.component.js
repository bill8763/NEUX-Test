/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, Optional } from '@angular/core';
import { Location } from '@angular/common';
import { animationEnterLeavePage } from '../../model/Animation/AnimationEnterLeave';
// import * as fromStore from '@app/Store';
// import { Store } from '@ngrx/store';
var UIInnerPageComponent = /** @class */ (function () {
    function UIInnerPageComponent(_location) {
        this._location = _location;
        this.title = '';
        this._btmAddHeight = 120;
        this.pageStyle = ''; // setting style2
    }
    /**
     * @return {?}
     */
    UIInnerPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UIInnerPageComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    UIInnerPageComponent.prototype.closeMain = /**
     * @return {?}
     */
    function () {
        if (this._location)
            this._location.back();
        // this.store.select(fromStore.getHistory).subscribe(res=>{
        //   console.log(res);
        // })
    };
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
    UIInnerPageComponent.ctorParameters = function () { return [
        { type: Location, decorators: [{ type: Optional }] }
    ]; };
    UIInnerPageComponent.propDecorators = {
        title: [{ type: Input }],
        contentHeight: [{ type: Input }]
    };
    return UIInnerPageComponent;
}());
export { UIInnerPageComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5uZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvdWktaW5uZXItcGFnZS91aS1pbm5lci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQThFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4SyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFDLE1BQU0sMkNBQTJDLENBQUM7OztBQUluRjtJQW9CRSw4QkFDd0IsU0FBbUI7UUFBbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQVZsQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBS3BCLGtCQUFhLEdBQUcsR0FBRyxDQUFDO1FBQzVCLGNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxpQkFBaUI7SUFJYSxDQUFDOzs7O0lBRS9DLHVDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFDRCw4Q0FBZTs7O0lBQWY7UUFDRSxrREFBa0Q7UUFDbEQsc0ZBQXNGO1FBQ3RGLDJHQUEyRztRQUMzRyxrRUFBa0U7UUFDbEUsa0ZBQWtGO1FBQ2xGLGNBQWM7UUFJZCxvQkFBb0I7UUFDcEIsb0VBQW9FO1FBQ3BFLGtFQUFrRTtRQUNsRSw4RUFBOEU7UUFDOUUsb0NBQW9DO1FBQ3BDLHdJQUF3STtRQUN4SSw2RUFBNkU7UUFFN0UsVUFBVTtJQUNaLENBQUM7Ozs7SUFHRCx3Q0FBUzs7O0lBQVQ7UUFDRSxJQUFHLElBQUksQ0FBQyxTQUFTO1lBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QiwyREFBMkQ7UUFDM0Qsc0JBQXNCO1FBQ3RCLEtBQUs7SUFDUCxDQUFDOztnQkFyREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHkwQkFBNkM7b0JBRTdDLGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNO29CQUM5QyxVQUFVLEVBQUU7d0JBQ1YsdUJBQXVCO3FCQUN4Qjs7aUJBQ0Y7OztnQkFiTyxRQUFRLHVCQTBCWCxRQUFROzs7d0JBVlYsS0FBSztnQ0FJTCxLQUFLOztJQXlDUiwyQkFBQztDQUFBLEFBeERELElBd0RDO1NBL0NZLG9CQUFvQjs7O0lBRS9CLHFDQUE0Qjs7SUFJNUIsNkNBQXVCOzs7OztJQUN2Qiw2Q0FBNEI7O0lBQzVCLHlDQUFlOzs7OztJQUliLHlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgQ29udGVudENoaWxkLEFmdGVyVmlld0luaXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4sIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7TG9jYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBhbmltYXRpb25FbnRlckxlYXZlUGFnZX0gZnJvbSAnLi4vLi4vbW9kZWwvQW5pbWF0aW9uL0FuaW1hdGlvbkVudGVyTGVhdmUnO1xuLy8gaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJ0BhcHAvU3RvcmUnO1xuLy8gaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1pbm5lci1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWlubmVyLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1pbm5lci1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICBhbmltYXRpb25FbnRlckxlYXZlUGFnZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFVJSW5uZXJQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG4gIC8vIEBWaWV3Q2hpbGRyZW4oJ254LWljb24nKSBlbGVtZW50VmlldzogRWxlbWVudFJlZjtcbiAgLy9AVmlld0NoaWxkKCdpbnBhZ2VNYWluQ29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIC8vIEBWaWV3Q2hpbGQoJ2lucGFnZU1haW5Db250ZW50JykgY29udGVudDogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgY29udGVudEhlaWdodDtcbiAgcHJpdmF0ZSBfYnRtQWRkSGVpZ2h0ID0gMTIwO1xuICBwYWdlU3R5bGUgPSAnJzsgLy8gc2V0dGluZyBzdHlsZTJcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCBfbG9jYXRpb246IExvY2F0aW9uKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZWxlOicsdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCduYXRpdmVFbGVtZW50IGVsZTE6Jyx0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKSk7XG4gICAgLy8gY29uc29sZS5sb2coJ25hdGl2ZUVsZW1lbnQgZWxlMjonLHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpKTtcbiAgICAvLyBjb25zb2xlLmxvZygnSGVpZ2h0OicsdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnZWxlLWg6Jyx0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnRIZWlnaHQnKSk7XG4gICAgLy9vZmZzZXRIZWlnaHRcblxuXG5cbiAgICAvLyBzZXRUaW1lb3V0KCgpPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ2NvbnRlbnRIZWlnaHQgaW4gaW5uZXIgcGFnZScsIHRoaXMuY29udGVudEhlaWdodCk7XG4gICAgLy8gICB0aGlzLmNvbnRlbnRIZWlnaHQgPSB0aGlzLmNvbnRlbnRIZWlnaHQgKyB0aGlzLl9idG1BZGRIZWlnaHQ7XG4gICAgLy8gICBjb25zb2xlLmxvZygnY29udGVudEhlaWdodCBpbiBpbm5lciBwYWdlIGFmdGVyIGFkZCcsIHRoaXMuY29udGVudEhlaWdodCk7XG4gICAgLy8gICAvL+WmguaenOaykuacieioreWumumrmOW6pu+8jOWFiOiuk+S7lueahOmrmOW6pueUqDEwMHZo5omj5o6JaGVhZGVyXG4gICAgLy8gICB0aGlzLmNvbnRlbnRIZWlnaHQgPiB0aGlzLl9idG1BZGRIZWlnaHQgPyB0aGlzLmNvbnRlbnRIZWlnaHQgPSB0aGlzLmNvbnRlbnRIZWlnaHQrJ3B4JyA6IHRoaXMuY29udGVudEhlaWdodCA9ICdjYWxjKDEwMHZoIC0gODRweCknO1xuICAgIC8vICAgY29uc29sZS5sb2coJ2NvbnRlbnRIZWlnaHQgaW4gaW5uZXIgcGFnZSBhZnRlciBpZicsIHRoaXMuY29udGVudEhlaWdodCk7XG5cbiAgICAvLyB9LDgwMCk7XG4gIH1cblxuXG4gIGNsb3NlTWFpbigpIHtcbiAgICBpZih0aGlzLl9sb2NhdGlvbilcbiAgICAgIHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcbiAgICAvLyB0aGlzLnN0b3JlLnNlbGVjdChmcm9tU3RvcmUuZ2V0SGlzdG9yeSkuc3Vic2NyaWJlKHJlcz0+e1xuICAgIC8vICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAvLyB9KVxuICB9XG5cblxufVxuIl19