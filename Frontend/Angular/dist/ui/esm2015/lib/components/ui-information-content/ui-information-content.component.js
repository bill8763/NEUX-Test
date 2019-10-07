/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, HostListener, ChangeDetectorRef } from '@angular/core';
import { ActionService } from '@allianzSND/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class UiInformationContentComponent {
    /**
     * @param {?} changeDector
     * @param {?} _elementRef
     * @param {?} actionService
     */
    constructor(changeDector, _elementRef, actionService) {
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @param {?} el
     * @return {?}
     */
    getStyle(el) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el, null);
        }
        else {
            return el.currentStyle;
        }
    }
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    getWH(el, name) {
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
    }
    /**
     * @return {?}
     */
    controlContentPostion() {
        if (this.show) {
            // let body fixed
            document.body.classList.add("fixed-body-full-page");
            /** @type {?} */
            let stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
            /** @type {?} */
            let stopScrollBlock_calendar = document.body.getElementsByClassName('cal-month-view');
            // let month_ele = this._elementRef.nativeElement.querySelector('.cal-month-view');
            console.log('ModalOpenGlobalControl', stopScrollBlock);
            // let back area which can scroll not scroll
            setTimeout((/**
             * @return {?}
             */
            () => {
                if (stopScrollBlock.length != 0) {
                    // in every stop-scroll-block class add no-scroll
                    [].forEach.bind(stopScrollBlock, (/**
                     * @param {?} itm
                     * @return {?}
                     */
                    function (itm) {
                        itm.classList.add('no-scroll');
                    }))();
                }
                if (stopScrollBlock_calendar.length != 0) {
                    stopScrollBlock_calendar[0].classList.add('no-scroll');
                }
            }), 100); // end of settimeout
            // end of settimeout
            /** @type {?} */
            let pl = this.paddindData.left;
            /** @type {?} */
            let pr = this.paddindData.right;
            /** @type {?} */
            let pt = this.paddindData.top;
            /** @type {?} */
            let pb = this.paddindData.bottom;
            /** @type {?} */
            let btnDom = this.controlBtn.nativeElement;
            /** @type {?} */
            let infoDom = this.infoInfoContent.nativeElement;
            /** @type {?} */
            let infoInnerHeight = this.getWH(this.infoInfoContent.nativeElement, 'height');
            /** @type {?} */
            let infoDomP = (infoDom.clientHeight - infoInnerHeight);
            /** @type {?} */
            let maxH = this.defaultPos == "bottom" || this.defaultPos == "top" ? '100vh' : '100vh';
            infoDom.style.maxHeight = 'calc(' + maxH + ' - ' + (pt + pb) + 'px)';
            this.infoScrollContent.nativeElement.style.maxHeight = 'calc(' + maxH + ' - ' + (infoDomP + pt + pb) + 'px)';
            infoDom.style.marginLeft = '0px';
            infoDom.style.marginTop = '0px';
            // console.log(btnDom);
            /** @type {?} */
            let windowWidth = document.body.clientWidth;
            /** @type {?} */
            let windowHeight = window.innerHeight;
            /** @type {?} */
            let infoDomSize = infoDom.getBoundingClientRect();
            /** @type {?} */
            let btnSizeInfo = btnDom.getBoundingClientRect();
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
    }
    /**
     * @return {?}
     */
    btnClick() {
        this.show = false;
        this.btnOnClick.emit();
        this.unlockScroll();
    }
    /**
     * @private
     * @return {?}
     */
    unlockScroll() {
        /** @type {?} */
        let stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
        // let month_ele = this._elementRef.nativeElement.querySelector('.cal-month-view');
        /** @type {?} */
        let stopScrollBlock_calendar = document.body.getElementsByClassName('cal-month-view');
        // console.warn('ModalCloseGlobalControl', stopScrollBlock);
        //romove body fixed
        document.body.classList.remove("fixed-body-full-page");
        setTimeout((/**
         * @return {?}
         */
        () => {
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
    }
    /**
     * @return {?}
     */
    updateView() {
        this.changeDector.detectChanges();
    }
    // if you click anywhere, then close info
    /**
     * @param {?} event
     * @return {?}
     */
    documentClick(event) {
        // click event from action
        this.actionService.onActionClick()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        resp => {
            if (!this._elementRef.nativeElement.contains(resp.event.target)) {
                this.show = false;
                this.unlockScroll();
                this.changeDector.detectChanges();
            }
        }));
        // click event with no action
        if (!this._elementRef.nativeElement.contains(event.target)) {
            this.show = false;
            this.unlockScroll();
        }
    }
}
UiInformationContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-information-content',
                template: "<div class=\"info-info-content\" #infoInfoContent [hidden]=\"!show\" [style.max-width]=\"maxWidth+'px'\" \n[ngClass]=\"{'opacity0':!opacity,\n            'right':defaultPos=='right',\n            'left': defaultPos=='left'}\">\n  <div class=\"close-btn\" (click)=\"btnClick()\">\n      <nx-icon name=\"close\" fill=\"false\" outline=\"false\"></nx-icon>\n  </div>\n  <div class=\"info-scroll-content\" #infoScrollContent>\n    <ng-content></ng-content>\n  </div>\n  <div class=\"info-arrow\" *ngIf=\"showArrow\" [style.margin-left]=\"arrowML\"  [style.margin-top]=\"arrowMT\" #infoArrow ></div>\n</div>",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:block}.info-info-content{width:calc(100vw - 20px);max-width:360px;min-height:200px;background-color:#fff;padding:15px 25px;box-shadow:0 8px 24px 0 rgba(65,65,65,.35);position:absolute;top:0;left:0;z-index:12;border-radius:5px}.info-info-content.show{display:block}.info-info-content.opacity0{opacity:0}.info-info-content .close-btn{width:40px;height:40px;font-size:0;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h50v50H0z'/%3E%3Cg stroke='%239B9B9B' stroke-linecap='round' stroke-width='2'%3E%3Cpath d='M14.898 15.317L35.102 35.52M36.112 14.898L15.909 35.102'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\");background-size:cover;background-repeat:no-repeat;position:absolute;top:10px;right:10px;z-index:2}.info-info-content .info-scroll-content{overflow:auto}.info-info-content .info-arrow{content:'';width:13px;height:13px;background-color:#fff;position:absolute;top:0;left:50%;-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);z-index:2;box-shadow:-3px -3px 10px -1px rgba(65,65,65,.1)}.info-info-content.right .info-arrow{top:50%;-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);left:0;box-shadow:-3px 3px 10px -1px rgba(65,65,65,.1)}.info-info-content.left .info-arrow{top:50%;-webkit-transform:translate(50%,-50%) rotate(45deg);transform:translate(50%,-50%) rotate(45deg);left:auto;right:0;box-shadow:3px -3px 10px -1px rgba(65,65,65,.1)}"]
            }] }
];
UiInformationContentComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: ActionService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5mb3JtYXRpb24tY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWluZm9ybWF0aW9uLWNvbnRlbnQvdWktaW5mb3JtYXRpb24tY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQTJCLGlCQUFpQixFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzNLLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVEzQyxNQUFNOzs7Ozs7SUF5QkosWUFDVSxZQUErQixFQUMvQixXQUF1QixFQUN2QixhQUE0QjtRQUY1QixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDL0IsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUF2QjdCLGdCQUFXLEdBQUc7WUFDckIsR0FBRyxFQUFFLEVBQUU7WUFDUCxLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO1FBR1EsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN0QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBRTVCLFlBQU8sR0FBRyxFQUFFLENBQUE7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixTQUFJLEdBQVksS0FBSyxDQUFDO1FBRXJCLGlCQUFZLEdB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UyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLHNtQkFBc0Q7O2FBR3ZEOzs7WUFWc0gsaUJBQWlCO1lBQWpHLFVBQVU7WUFDeEMsYUFBYTs7OzhCQVluQixTQUFTLFNBQUMsaUJBQWlCO2dDQUMzQixTQUFTLFNBQUMsbUJBQW1COzJCQUM3QixTQUFTLFNBQUMsV0FBVzswQkFDckIsS0FBSzt1QkFNTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsTUFBTTt5QkFDTixLQUFLO3dCQUNMLEtBQUs7NEJBbUlMLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQWhKMUMsd0RBQTBEOztJQUMxRCwwREFBOEQ7O0lBQzlELHFEQUFpRDs7SUFDakQsb0RBS0U7O0lBQ0YsaURBQTBCOztJQUMxQixtREFBZ0M7O0lBQ2hDLG1EQUEwQzs7SUFDMUMsbURBQStCOztJQUMvQixrREFBbUM7O0lBRW5DLGdEQUFtQjs7SUFDbkIsZ0RBQW9COztJQUNwQixnREFBK0I7O0lBQy9CLDZDQUE2Qjs7Ozs7SUFFN0IscURBQW9EOzs7OztJQUlsRCxxREFBdUM7Ozs7O0lBQ3ZDLG9EQUErQjs7Ozs7SUFDL0Isc0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25TZXJ2aWNlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1pbmZvcm1hdGlvbi1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWluZm9ybWF0aW9uLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1pbmZvcm1hdGlvbi1jb250ZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpSW5mb3JtYXRpb25Db250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBWaWV3Q2hpbGQoJ2luZm9JbmZvQ29udGVudCcpIGluZm9JbmZvQ29udGVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaW5mb1Njcm9sbENvbnRlbnQnKSBpbmZvU2Nyb2xsQ29udGVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaW5mb0Fycm93JykgYXJyb3dDb250ZW50OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBwYWRkaW5kRGF0YSA9IHtcbiAgICB0b3A6IDEwLFxuICAgIHJpZ2h0OiAxMCxcbiAgICBib3R0b206IDEwLFxuICAgIGxlZnQ6IDEwXG4gIH07XG4gIEBJbnB1dCgpIG1heFdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGNvbnRyb2xCdG46IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBidG5PbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBkZWZhdWx0UG9zID0gXCJib3R0b21cIjtcbiAgQElucHV0KCkgc2hvd0Fycm93OiBib29sZWFuID0gdHJ1ZTtcblxuICBwdWJsaWMgYXJyb3dNTCA9ICcnXG4gIHB1YmxpYyBhcnJvd01UID0gJyc7XG4gIHB1YmxpYyBvcGFjaXR5OiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHNob3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIHVuc3Vic2NyaWJlJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYW5nZURlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGFjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2UpIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZ2V0U3R5bGUoZWwpIHtcbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGVsLmN1cnJlbnRTdHlsZTtcbiAgICB9XG4gIH1cbiAgZ2V0V0goZWwsIG5hbWUpIHtcbiAgICB2YXIgdmFsID0gbmFtZSA9PT0gXCJ3aWR0aFwiID8gZWwub2Zmc2V0V2lkdGggOiBlbC5vZmZzZXRIZWlnaHQsXG4gICAgICB3aGljaCA9IG5hbWUgPT09IFwid2lkdGhcIiA/IFsnTGVmdCcsICdSaWdodCddIDogWydUb3AnLCAnQm90dG9tJ107XG4gICAgaWYgKHZhbCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHZhciBzdHlsZSA9IHRoaXMuZ2V0U3R5bGUoZWwpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGE7IGEgPSB3aGljaFtpKytdOykge1xuICAgICAgdmFsIC09IHBhcnNlRmxvYXQoc3R5bGVbXCJib3JkZXJcIiArIGEgKyBcIldpZHRoXCJdKSB8fCAwO1xuICAgICAgdmFsIC09IHBhcnNlRmxvYXQoc3R5bGVbXCJwYWRkaW5nXCIgKyBhXSkgfHwgMDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuICBjb250cm9sQ29udGVudFBvc3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc2hvdykge1xuICAgICAgLy8gbGV0IGJvZHkgZml4ZWRcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZpeGVkLWJvZHktZnVsbC1wYWdlXCIpO1xuXG4gICAgICBsZXQgc3RvcFNjcm9sbEJsb2NrID0gZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9wLXNjcm9sbC1ibG9jaycpO1xuICAgICAgbGV0IHN0b3BTY3JvbGxCbG9ja19jYWxlbmRhciA9IGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FsLW1vbnRoLXZpZXcnKTtcbiAgICAgIC8vIGxldCBtb250aF9lbGUgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbC1tb250aC12aWV3Jyk7XG4gICAgICBjb25zb2xlLmxvZygnTW9kYWxPcGVuR2xvYmFsQ29udHJvbCcsIHN0b3BTY3JvbGxCbG9jayk7XG5cbiAgICAgIC8vIGxldCBiYWNrIGFyZWEgd2hpY2ggY2FuIHNjcm9sbCBub3Qgc2Nyb2xsXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHN0b3BTY3JvbGxCbG9jay5sZW5ndGggIT0gMCkge1xuICAgICAgICAgIC8vIGluIGV2ZXJ5IHN0b3Atc2Nyb2xsLWJsb2NrIGNsYXNzIGFkZCBuby1zY3JvbGxcbiAgICAgICAgICBbXS5mb3JFYWNoLmJpbmQoc3RvcFNjcm9sbEJsb2NrLCBmdW5jdGlvbiAoaXRtKSB7XG4gICAgICAgICAgICBpdG0uY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RvcFNjcm9sbEJsb2NrX2NhbGVuZGFyLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgc3RvcFNjcm9sbEJsb2NrX2NhbGVuZGFyWzBdLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDApICAvLyBlbmQgb2Ygc2V0dGltZW91dFxuXG4gICAgICBsZXQgcGwgPSB0aGlzLnBhZGRpbmREYXRhLmxlZnQsXG4gICAgICAgIHByID0gdGhpcy5wYWRkaW5kRGF0YS5yaWdodCxcbiAgICAgICAgcHQgPSB0aGlzLnBhZGRpbmREYXRhLnRvcCxcbiAgICAgICAgcGIgPSB0aGlzLnBhZGRpbmREYXRhLmJvdHRvbTtcbiAgICAgIGxldCBidG5Eb20gPSB0aGlzLmNvbnRyb2xCdG4ubmF0aXZlRWxlbWVudCxcbiAgICAgICAgaW5mb0RvbSA9IHRoaXMuaW5mb0luZm9Db250ZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIGluZm9Jbm5lckhlaWdodCA9IHRoaXMuZ2V0V0godGhpcy5pbmZvSW5mb0NvbnRlbnQubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpLFxuICAgICAgICBpbmZvRG9tUCA9IChpbmZvRG9tLmNsaWVudEhlaWdodCAtIGluZm9Jbm5lckhlaWdodCk7XG4gICAgICBsZXQgbWF4SCA9IHRoaXMuZGVmYXVsdFBvcyA9PSBcImJvdHRvbVwiIHx8IHRoaXMuZGVmYXVsdFBvcyA9PSBcInRvcFwiID8gJzEwMHZoJyA6ICcxMDB2aCc7XG4gICAgICBpbmZvRG9tLnN0eWxlLm1heEhlaWdodCA9ICdjYWxjKCcgKyBtYXhIICsgJyAtICcgKyAocHQgKyBwYikgKyAncHgpJztcbiAgICAgIHRoaXMuaW5mb1Njcm9sbENvbnRlbnQubmF0aXZlRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnY2FsYygnICsgbWF4SCArICcgLSAnICsgKGluZm9Eb21QICsgcHQgKyBwYikgKyAncHgpJztcblxuICAgICAgaW5mb0RvbS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzBweCc7XG4gICAgICBpbmZvRG9tLnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xuICAgICAgLy8gY29uc29sZS5sb2coYnRuRG9tKTtcbiAgICAgIGxldCB3aW5kb3dXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsXG4gICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgaW5mb0RvbVNpemUgPSBpbmZvRG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBidG5TaXplSW5mbyA9IGJ0bkRvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRvbTogaW5mb0RvbSxcbiAgICAgICAgdG9wR2FwOiBpbmZvRG9tU2l6ZS50b3AsXG4gICAgICAgIHJpZ2h0R2FwOiAod2luZG93V2lkdGggLSBpbmZvRG9tU2l6ZS5yaWdodCksXG4gICAgICAgIGJvdHRvbUdhcDogKHdpbmRvd0hlaWdodCAtIGluZm9Eb21TaXplLmJvdHRvbSksXG4gICAgICAgIGxlZnRHYXA6IGluZm9Eb21TaXplLmxlZnQsXG4gICAgICAgIGFycmF3UG9zOiAoYnRuU2l6ZUluZm8uaGVpZ2h0KSAvIDIgKyBidG5TaXplSW5mby50b3AsXG4gICAgICAgIHdpbmRvd0hlaWdodDogd2luZG93SGVpZ2h0LFxuICAgICAgICBpbmZvRG9tU2l6ZTogaW5mb0RvbVNpemUsXG4gICAgICAgIGNlbnRlclBvczogaW5mb0RvbVNpemUubGVmdCArIChpbmZvRG9tU2l6ZS53aWR0aCAvIDIpXG4gICAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgYnRuQ2xpY2soKSB7XG4gICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgdGhpcy5idG5PbkNsaWNrLmVtaXQoKTtcbiAgICB0aGlzLnVubG9ja1Njcm9sbCgpO1xuICB9XG4gIHByaXZhdGUgdW5sb2NrU2Nyb2xsKCkge1xuXG4gICAgbGV0IHN0b3BTY3JvbGxCbG9jayA9IGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RvcC1zY3JvbGwtYmxvY2snKTtcbiAgICAvLyBsZXQgbW9udGhfZWxlID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWwtbW9udGgtdmlldycpO1xuICAgIGxldCBzdG9wU2Nyb2xsQmxvY2tfY2FsZW5kYXIgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbC1tb250aC12aWV3Jyk7XG4gICAgLy8gY29uc29sZS53YXJuKCdNb2RhbENsb3NlR2xvYmFsQ29udHJvbCcsIHN0b3BTY3JvbGxCbG9jayk7XG4gICAgLy9yb21vdmUgYm9keSBmaXhlZFxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZpeGVkLWJvZHktZnVsbC1wYWdlXCIpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyByZW1vdmUgb3RoZXIgZml4XG4gICAgICBbXS5mb3JFYWNoLmJpbmQoc3RvcFNjcm9sbEJsb2NrLCBmdW5jdGlvbiAoaXRtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBlYWNoJyk7XG4gICAgICAgIGl0bS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcbiAgICAgIH0pKCk7XG4gICAgICAvLyByZW1vdmUgb3RoZXIgZml4XG4gICAgICBpZiAoc3RvcFNjcm9sbEJsb2NrX2NhbGVuZGFyLmxlbmd0aCA+IDApXG4gICAgICAgIHN0b3BTY3JvbGxCbG9ja19jYWxlbmRhclswXS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcbiAgICB9LDUwMCk7XG4gIH1cblxuICB1cGRhdGVWaWV3KCkge1xuICAgIHRoaXMuY2hhbmdlRGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICAvLyBpZiB5b3UgY2xpY2sgYW55d2hlcmUsIHRoZW4gY2xvc2UgaW5mb1xuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIGRvY3VtZW50Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAvLyBjbGljayBldmVudCBmcm9tIGFjdGlvblxuICAgIHRoaXMuYWN0aW9uU2VydmljZS5vbkFjdGlvbkNsaWNrKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKHJlc3AgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhyZXNwLmV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnVubG9ja1Njcm9sbCgpO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgLy8gY2xpY2sgZXZlbnQgd2l0aCBubyBhY3Rpb25cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMudW5sb2NrU2Nyb2xsKCk7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==