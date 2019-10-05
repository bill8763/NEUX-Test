/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, HostListener, ChangeDetectorRef } from '@angular/core';
import { ActionService } from '@allianzSND/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var UiInformationContentComponent = /** @class */ (function () {
    function UiInformationContentComponent(changeDector, _elementRef, actionService) {
        this.changeDector = changeDector;
        this._elementRef = _elementRef;
        this.actionService = actionService;
        this.paddindData = {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10
        };
        this.btnOnClick = new EventEmitter();
        this.defaultPos = "bottom";
        this.showArrow = true;
        this.arrowML = '';
        this.arrowMT = '';
        this.opacity = true;
        this.show = false;
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    UiInformationContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiInformationContentComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} el
     * @return {?}
     */
    UiInformationContentComponent.prototype.getStyle = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el, null);
        }
        else {
            return el.currentStyle;
        }
    };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    UiInformationContentComponent.prototype.getWH = /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    function (el, name) {
        /** @type {?} */
        var val = name === "width" ? el.offsetWidth : el.offsetHeight;
        /** @type {?} */
        var which = name === "width" ? ['Left', 'Right'] : ['Top', 'Bottom'];
        if (val === 0) {
            return 0;
        }
        /** @type {?} */
        var style = this.getStyle(el);
        for (var i = 0, a; a = which[i++];) {
            val -= parseFloat(style["border" + a + "Width"]) || 0;
            val -= parseFloat(style["padding" + a]) || 0;
        }
        return val;
    };
    /**
     * @return {?}
     */
    UiInformationContentComponent.prototype.controlContentPostion = /**
     * @return {?}
     */
    function () {
        if (this.show) {
            // let body fixed
            document.body.classList.add("fixed-body-full-page");
            /** @type {?} */
            var stopScrollBlock_1 = document.body.getElementsByClassName('stop-scroll-block');
            /** @type {?} */
            var stopScrollBlock_calendar_1 = document.body.getElementsByClassName('cal-month-view');
            // let month_ele = this._elementRef.nativeElement.querySelector('.cal-month-view');
            console.log('ModalOpenGlobalControl', stopScrollBlock_1);
            // let back area which can scroll not scroll
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (stopScrollBlock_1.length != 0) {
                    // in every stop-scroll-block class add no-scroll
                    [].forEach.bind(stopScrollBlock_1, (/**
                     * @param {?} itm
                     * @return {?}
                     */
                    function (itm) {
                        itm.classList.add('no-scroll');
                    }))();
                }
                if (stopScrollBlock_calendar_1.length != 0) {
                    stopScrollBlock_calendar_1[0].classList.add('no-scroll');
                }
            }), 100); // end of settimeout
            // end of settimeout
            /** @type {?} */
            var pl = this.paddindData.left;
            /** @type {?} */
            var pr = this.paddindData.right;
            /** @type {?} */
            var pt = this.paddindData.top;
            /** @type {?} */
            var pb = this.paddindData.bottom;
            /** @type {?} */
            var btnDom = this.controlBtn.nativeElement;
            /** @type {?} */
            var infoDom = this.infoInfoContent.nativeElement;
            /** @type {?} */
            var infoInnerHeight = this.getWH(this.infoInfoContent.nativeElement, 'height');
            /** @type {?} */
            var infoDomP = (infoDom.clientHeight - infoInnerHeight);
            /** @type {?} */
            var maxH = this.defaultPos == "bottom" || this.defaultPos == "top" ? '100vh' : '100vh';
            infoDom.style.maxHeight = 'calc(' + maxH + ' - ' + (pt + pb) + 'px)';
            this.infoScrollContent.nativeElement.style.maxHeight = 'calc(' + maxH + ' - ' + (infoDomP + pt + pb) + 'px)';
            infoDom.style.marginLeft = '0px';
            infoDom.style.marginTop = '0px';
            // console.log(btnDom);
            /** @type {?} */
            var windowWidth = document.body.clientWidth;
            /** @type {?} */
            var windowHeight = window.innerHeight;
            /** @type {?} */
            var infoDomSize = infoDom.getBoundingClientRect();
            /** @type {?} */
            var btnSizeInfo = btnDom.getBoundingClientRect();
            return {
                dom: infoDom,
                topGap: infoDomSize.top,
                rightGap: (windowWidth - infoDomSize.right),
                bottomGap: (windowHeight - infoDomSize.bottom),
                leftGap: infoDomSize.left,
                arrawPos: (btnSizeInfo.height) / 2 + btnSizeInfo.top,
                windowHeight: windowHeight,
                infoDomSize: infoDomSize,
                centerPos: infoDomSize.left + (infoDomSize.width / 2)
            };
        }
        this.changeDector.markForCheck();
    };
    /**
     * @return {?}
     */
    UiInformationContentComponent.prototype.btnClick = /**
     * @return {?}
     */
    function () {
        this.show = false;
        this.btnOnClick.emit();
        this.unlockScroll();
    };
    /**
     * @private
     * @return {?}
     */
    UiInformationContentComponent.prototype.unlockScroll = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
        // let month_ele = this._elementRef.nativeElement.querySelector('.cal-month-view');
        /** @type {?} */
        var stopScrollBlock_calendar = document.body.getElementsByClassName('cal-month-view');
        // console.warn('ModalCloseGlobalControl', stopScrollBlock);
        //romove body fixed
        document.body.classList.remove("fixed-body-full-page");
        setTimeout((/**
         * @return {?}
         */
        function () {
            // remove other fix
            [].forEach.bind(stopScrollBlock, (/**
             * @param {?} itm
             * @return {?}
             */
            function (itm) {
                console.log('in each');
                itm.classList.remove('no-scroll');
            }))();
            // remove other fix
            if (stopScrollBlock_calendar.length > 0)
                stopScrollBlock_calendar[0].classList.remove('no-scroll');
        }), 500);
    };
    /**
     * @return {?}
     */
    UiInformationContentComponent.prototype.updateView = /**
     * @return {?}
     */
    function () {
        this.changeDector.detectChanges();
    };
    // if you click anywhere, then close info
    // if you click anywhere, then close info
    /**
     * @param {?} event
     * @return {?}
     */
    UiInformationContentComponent.prototype.documentClick = 
    // if you click anywhere, then close info
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // click event from action
        this.actionService.onActionClick()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) {
            if (!_this._elementRef.nativeElement.contains(resp.event.target)) {
                _this.show = false;
                _this.unlockScroll();
                _this.changeDector.detectChanges();
            }
        }));
        // click event with no action
        if (!this._elementRef.nativeElement.contains(event.target)) {
            this.show = false;
            this.unlockScroll();
        }
    };
    UiInformationContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-information-content',
                    template: "<div class=\"info-info-content\" #infoInfoContent [hidden]=\"!show\" [style.max-width]=\"maxWidth+'px'\" \n[ngClass]=\"{'opacity0':!opacity,\n            'right':defaultPos=='right',\n            'left': defaultPos=='left'}\">\n  <div class=\"close-btn\" (click)=\"btnClick()\">\n      <nx-icon name=\"close\" fill=\"false\" outline=\"false\"></nx-icon>\n  </div>\n  <div class=\"info-scroll-content\" #infoScrollContent>\n    <ng-content></ng-content>\n  </div>\n  <div class=\"info-arrow\" *ngIf=\"showArrow\" [style.margin-left]=\"arrowML\"  [style.margin-top]=\"arrowMT\" #infoArrow ></div>\n</div>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:block}.info-info-content{width:calc(100vw - 20px);max-width:360px;min-height:200px;background-color:#fff;padding:15px 25px;box-shadow:0 8px 24px 0 rgba(65,65,65,.35);position:absolute;top:0;left:0;z-index:12;border-radius:5px}.info-info-content.show{display:block}.info-info-content.opacity0{opacity:0}.info-info-content .close-btn{width:40px;height:40px;font-size:0;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h50v50H0z'/%3E%3Cg stroke='%239B9B9B' stroke-linecap='round' stroke-width='2'%3E%3Cpath d='M14.898 15.317L35.102 35.52M36.112 14.898L15.909 35.102'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\");background-size:cover;background-repeat:no-repeat;position:absolute;top:10px;right:10px;z-index:2}.info-info-content .info-scroll-content{overflow:auto}.info-info-content .info-arrow{content:'';width:13px;height:13px;background-color:#fff;position:absolute;top:0;left:50%;-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);z-index:2;box-shadow:-3px -3px 10px -1px rgba(65,65,65,.1)}.info-info-content.right .info-arrow{top:50%;-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);left:0;box-shadow:-3px 3px 10px -1px rgba(65,65,65,.1)}.info-info-content.left .info-arrow{top:50%;-webkit-transform:translate(50%,-50%) rotate(45deg);transform:translate(50%,-50%) rotate(45deg);left:auto;right:0;box-shadow:3px -3px 10px -1px rgba(65,65,65,.1)}"]
                }] }
    ];
    UiInformationContentComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: ActionService }
    ]; };
    UiInformationContentComponent.propDecorators = {
        infoInfoContent: [{ type: ViewChild, args: ['infoInfoContent',] }],
        infoScrollContent: [{ type: ViewChild, args: ['infoScrollContent',] }],
        arrowContent: [{ type: ViewChild, args: ['infoArrow',] }],
        paddindData: [{ type: Input }],
        maxWidth: [{ type: Input }],
        controlBtn: [{ type: Input }],
        btnOnClick: [{ type: Output }],
        defaultPos: [{ type: Input }],
        showArrow: [{ type: Input }],
        documentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return UiInformationContentComponent;
}());
export { UiInformationContentComponent };
if (false) {
    /** @type {?} */
    UiInformationContentComponent.prototype.infoInfoContent;
    /** @type {?} */
    UiInformationContentComponent.prototype.infoScrollContent;
    /** @type {?} */
    UiInformationContentComponent.prototype.arrowContent;
    /** @type {?} */
    UiInformationContentComponent.prototype.paddindData;
    /** @type {?} */
    UiInformationContentComponent.prototype.maxWidth;
    /** @type {?} */
    UiInformationContentComponent.prototype.controlBtn;
    /** @type {?} */
    UiInformationContentComponent.prototype.btnOnClick;
    /** @type {?} */
    UiInformationContentComponent.prototype.defaultPos;
    /** @type {?} */
    UiInformationContentComponent.prototype.showArrow;
    /** @type {?} */
    UiInformationContentComponent.prototype.arrowML;
    /** @type {?} */
    UiInformationContentComponent.prototype.arrowMT;
    /** @type {?} */
    UiInformationContentComponent.prototype.opacity;
    /** @type {?} */
    UiInformationContentComponent.prototype.show;
    /**
     * @type {?}
     * @private
     */
    UiInformationContentComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    UiInformationContentComponent.prototype.changeDector;
    /**
     * @type {?}
     * @private
     */
    UiInformationContentComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    UiInformationContentComponent.prototype.actionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5mb3JtYXRpb24tY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWluZm9ybWF0aW9uLWNvbnRlbnQvdWktaW5mb3JtYXRpb24tY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQTJCLGlCQUFpQixFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzNLLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQStCRSx1Q0FDVSxZQUErQixFQUMvQixXQUF1QixFQUN2QixhQUE0QjtRQUY1QixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDL0IsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUF2QjdCLGdCQUFXLEdBQUc7WUFDckIsR0FBRyxFQUFFLEVBQUU7WUFDUCxLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO1FBR1EsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN0QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBRTVCLFlBQU8sR0FBRyxFQUFFLENBQUE7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixTQUFJLEdBQVksS0FBSyxDQUFDO1FBRXJCLGlCQUFZLEdBQWtCLElBQUks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R0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Z0JBektGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxzbUJBQXNEOztpQkFHdkQ7OztnQkFWc0gsaUJBQWlCO2dCQUFqRyxVQUFVO2dCQUN4QyxhQUFhOzs7a0NBWW5CLFNBQVMsU0FBQyxpQkFBaUI7b0NBQzNCLFNBQVMsU0FBQyxtQkFBbUI7K0JBQzdCLFNBQVMsU0FBQyxXQUFXOzhCQUNyQixLQUFLOzJCQU1MLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxNQUFNOzZCQUNOLEtBQUs7NEJBQ0wsS0FBSztnQ0FtSUwsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOztJQWtCNUMsb0NBQUM7Q0FBQSxBQTFLRCxJQTBLQztTQXBLWSw2QkFBNkI7OztJQUV4Qyx3REFBMEQ7O0lBQzFELDBEQUE4RDs7SUFDOUQscURBQWlEOztJQUNqRCxvREFLRTs7SUFDRixpREFBMEI7O0lBQzFCLG1EQUFnQzs7SUFDaEMsbURBQTBDOztJQUMxQyxtREFBK0I7O0lBQy9CLGtEQUFtQzs7SUFFbkMsZ0RBQW1COztJQUNuQixnREFBb0I7O0lBQ3BCLGdEQUErQjs7SUFDL0IsNkNBQTZCOzs7OztJQUU3QixxREFBb0Q7Ozs7O0lBSWxELHFEQUF1Qzs7Ozs7SUFDdkMsb0RBQStCOzs7OztJQUMvQixzREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvblNlcnZpY2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWluZm9ybWF0aW9uLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktaW5mb3JtYXRpb24tY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWluZm9ybWF0aW9uLWNvbnRlbnQuY29tcG9uZW50LnNjc3MnXSxcbiAgLy8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlJbmZvcm1hdGlvbkNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQFZpZXdDaGlsZCgnaW5mb0luZm9Db250ZW50JykgaW5mb0luZm9Db250ZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdpbmZvU2Nyb2xsQ29udGVudCcpIGluZm9TY3JvbGxDb250ZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdpbmZvQXJyb3cnKSBhcnJvd0NvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIHBhZGRpbmREYXRhID0ge1xuICAgIHRvcDogMTAsXG4gICAgcmlnaHQ6IDEwLFxuICAgIGJvdHRvbTogMTAsXG4gICAgbGVmdDogMTBcbiAgfTtcbiAgQElucHV0KCkgbWF4V2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgY29udHJvbEJ0bjogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIGJ0bk9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGRlZmF1bHRQb3MgPSBcImJvdHRvbVwiO1xuICBASW5wdXQoKSBzaG93QXJyb3c6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHB1YmxpYyBhcnJvd01MID0gJydcbiAgcHVibGljIGFycm93TVQgPSAnJztcbiAgcHVibGljIG9wYWNpdHk6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc2hvdzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZSkgeyB9XG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBnZXRTdHlsZShlbCkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZWwuY3VycmVudFN0eWxlO1xuICAgIH1cbiAgfVxuICBnZXRXSChlbCwgbmFtZSkge1xuICAgIHZhciB2YWwgPSBuYW1lID09PSBcIndpZHRoXCIgPyBlbC5vZmZzZXRXaWR0aCA6IGVsLm9mZnNldEhlaWdodCxcbiAgICAgIHdoaWNoID0gbmFtZSA9PT0gXCJ3aWR0aFwiID8gWydMZWZ0JywgJ1JpZ2h0J10gOiBbJ1RvcCcsICdCb3R0b20nXTtcbiAgICBpZiAodmFsID09PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgdmFyIHN0eWxlID0gdGhpcy5nZXRTdHlsZShlbCk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgYTsgYSA9IHdoaWNoW2krK107KSB7XG4gICAgICB2YWwgLT0gcGFyc2VGbG9hdChzdHlsZVtcImJvcmRlclwiICsgYSArIFwiV2lkdGhcIl0pIHx8IDA7XG4gICAgICB2YWwgLT0gcGFyc2VGbG9hdChzdHlsZVtcInBhZGRpbmdcIiArIGFdKSB8fCAwO1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9XG4gIGNvbnRyb2xDb250ZW50UG9zdGlvbigpIHtcbiAgICBpZiAodGhpcy5zaG93KSB7XG4gICAgICAvLyBsZXQgYm9keSBmaXhlZFxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZml4ZWQtYm9keS1mdWxsLXBhZ2VcIik7XG5cbiAgICAgIGxldCBzdG9wU2Nyb2xsQmxvY2sgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0b3Atc2Nyb2xsLWJsb2NrJyk7XG4gICAgICBsZXQgc3RvcFNjcm9sbEJsb2NrX2NhbGVuZGFyID0gZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYWwtbW9udGgtdmlldycpO1xuICAgICAgLy8gbGV0IG1vbnRoX2VsZSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsLW1vbnRoLXZpZXcnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdNb2RhbE9wZW5HbG9iYWxDb250cm9sJywgc3RvcFNjcm9sbEJsb2NrKTtcblxuICAgICAgLy8gbGV0IGJhY2sgYXJlYSB3aGljaCBjYW4gc2Nyb2xsIG5vdCBzY3JvbGxcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoc3RvcFNjcm9sbEJsb2NrLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgLy8gaW4gZXZlcnkgc3RvcC1zY3JvbGwtYmxvY2sgY2xhc3MgYWRkIG5vLXNjcm9sbFxuICAgICAgICAgIFtdLmZvckVhY2guYmluZChzdG9wU2Nyb2xsQmxvY2ssIGZ1bmN0aW9uIChpdG0pIHtcbiAgICAgICAgICAgIGl0bS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcbiAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdG9wU2Nyb2xsQmxvY2tfY2FsZW5kYXIubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICBzdG9wU2Nyb2xsQmxvY2tfY2FsZW5kYXJbMF0uY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCkgIC8vIGVuZCBvZiBzZXR0aW1lb3V0XG5cbiAgICAgIGxldCBwbCA9IHRoaXMucGFkZGluZERhdGEubGVmdCxcbiAgICAgICAgcHIgPSB0aGlzLnBhZGRpbmREYXRhLnJpZ2h0LFxuICAgICAgICBwdCA9IHRoaXMucGFkZGluZERhdGEudG9wLFxuICAgICAgICBwYiA9IHRoaXMucGFkZGluZERhdGEuYm90dG9tO1xuICAgICAgbGV0IGJ0bkRvbSA9IHRoaXMuY29udHJvbEJ0bi5uYXRpdmVFbGVtZW50LFxuICAgICAgICBpbmZvRG9tID0gdGhpcy5pbmZvSW5mb0NvbnRlbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgaW5mb0lubmVySGVpZ2h0ID0gdGhpcy5nZXRXSCh0aGlzLmluZm9JbmZvQ29udGVudC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JyksXG4gICAgICAgIGluZm9Eb21QID0gKGluZm9Eb20uY2xpZW50SGVpZ2h0IC0gaW5mb0lubmVySGVpZ2h0KTtcbiAgICAgIGxldCBtYXhIID0gdGhpcy5kZWZhdWx0UG9zID09IFwiYm90dG9tXCIgfHwgdGhpcy5kZWZhdWx0UG9zID09IFwidG9wXCIgPyAnMTAwdmgnIDogJzEwMHZoJztcbiAgICAgIGluZm9Eb20uc3R5bGUubWF4SGVpZ2h0ID0gJ2NhbGMoJyArIG1heEggKyAnIC0gJyArIChwdCArIHBiKSArICdweCknO1xuICAgICAgdGhpcy5pbmZvU2Nyb2xsQ29udGVudC5uYXRpdmVFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICdjYWxjKCcgKyBtYXhIICsgJyAtICcgKyAoaW5mb0RvbVAgKyBwdCArIHBiKSArICdweCknO1xuXG4gICAgICBpbmZvRG9tLnN0eWxlLm1hcmdpbkxlZnQgPSAnMHB4JztcbiAgICAgIGluZm9Eb20uc3R5bGUubWFyZ2luVG9wID0gJzBweCc7XG4gICAgICAvLyBjb25zb2xlLmxvZyhidG5Eb20pO1xuICAgICAgbGV0IHdpbmRvd1dpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcbiAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICBpbmZvRG9tU2l6ZSA9IGluZm9Eb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIGJ0blNpemVJbmZvID0gYnRuRG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9tOiBpbmZvRG9tLFxuICAgICAgICB0b3BHYXA6IGluZm9Eb21TaXplLnRvcCxcbiAgICAgICAgcmlnaHRHYXA6ICh3aW5kb3dXaWR0aCAtIGluZm9Eb21TaXplLnJpZ2h0KSxcbiAgICAgICAgYm90dG9tR2FwOiAod2luZG93SGVpZ2h0IC0gaW5mb0RvbVNpemUuYm90dG9tKSxcbiAgICAgICAgbGVmdEdhcDogaW5mb0RvbVNpemUubGVmdCxcbiAgICAgICAgYXJyYXdQb3M6IChidG5TaXplSW5mby5oZWlnaHQpIC8gMiArIGJ0blNpemVJbmZvLnRvcCxcbiAgICAgICAgd2luZG93SGVpZ2h0OiB3aW5kb3dIZWlnaHQsXG4gICAgICAgIGluZm9Eb21TaXplOiBpbmZvRG9tU2l6ZSxcbiAgICAgICAgY2VudGVyUG9zOiBpbmZvRG9tU2l6ZS5sZWZ0ICsgKGluZm9Eb21TaXplLndpZHRoIC8gMilcbiAgICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBidG5DbGljaygpIHtcbiAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICB0aGlzLmJ0bk9uQ2xpY2suZW1pdCgpO1xuICAgIHRoaXMudW5sb2NrU2Nyb2xsKCk7XG4gIH1cbiAgcHJpdmF0ZSB1bmxvY2tTY3JvbGwoKSB7XG5cbiAgICBsZXQgc3RvcFNjcm9sbEJsb2NrID0gZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9wLXNjcm9sbC1ibG9jaycpO1xuICAgIC8vIGxldCBtb250aF9lbGUgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbC1tb250aC12aWV3Jyk7XG4gICAgbGV0IHN0b3BTY3JvbGxCbG9ja19jYWxlbmRhciA9IGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FsLW1vbnRoLXZpZXcnKTtcbiAgICAvLyBjb25zb2xlLndhcm4oJ01vZGFsQ2xvc2VHbG9iYWxDb250cm9sJywgc3RvcFNjcm9sbEJsb2NrKTtcbiAgICAvL3JvbW92ZSBib2R5IGZpeGVkXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWQtYm9keS1mdWxsLXBhZ2VcIik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIHJlbW92ZSBvdGhlciBmaXhcbiAgICAgIFtdLmZvckVhY2guYmluZChzdG9wU2Nyb2xsQmxvY2ssIGZ1bmN0aW9uIChpdG0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIGVhY2gnKTtcbiAgICAgICAgaXRtLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgICAgfSkoKTtcbiAgICAgIC8vIHJlbW92ZSBvdGhlciBmaXhcbiAgICAgIGlmIChzdG9wU2Nyb2xsQmxvY2tfY2FsZW5kYXIubGVuZ3RoID4gMClcbiAgICAgICAgc3RvcFNjcm9sbEJsb2NrX2NhbGVuZGFyWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgIH0sNTAwKTtcbiAgfVxuXG4gIHVwZGF0ZVZpZXcoKSB7XG4gICAgdGhpcy5jaGFuZ2VEZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIC8vIGlmIHlvdSBjbGljayBhbnl3aGVyZSwgdGhlbiBjbG9zZSBpbmZvXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgZG9jdW1lbnRDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIC8vIGNsaWNrIGV2ZW50IGZyb20gYWN0aW9uXG4gICAgdGhpcy5hY3Rpb25TZXJ2aWNlLm9uQWN0aW9uQ2xpY2soKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHJlc3AuZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMudW5sb2NrU2Nyb2xsKCk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAvLyBjbGljayBldmVudCB3aXRoIG5vIGFjdGlvblxuICAgIGlmICghdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgdGhpcy51bmxvY2tTY3JvbGwoKTtcbiAgICB9XG4gIH1cbn1cblxuIl19