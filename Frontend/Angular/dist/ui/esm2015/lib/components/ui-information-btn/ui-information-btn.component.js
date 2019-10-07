/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { UiInformationService } from '../ui-information/ui-information.service';
import { UiInformationContentComponent } from '../ui-information-content/ui-information-content.component';
import { v4 as uuid } from 'uuid';
export class UiInformationBtnComponent {
    /**
     * @param {?} informationService
     */
    constructor(informationService) {
        this.informationService = informationService;
        this.crollTopNum = 0;
        this.onClick = new EventEmitter();
        this.outsideSpace = { top: 0,
            left: 0 };
        this.onAutoScroll = false;
        this.autoScrollOver = false;
        this._id = uuid();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    scrollFunction() {
        /** @type {?} */
        let scrollTopOld = this.scrollData.STOld;
        /** @type {?} */
        let scrollTopAdd = this.scrollData.STAdd;
        /** @type {?} */
        let scrollContent = this.scrollData.SC;
        /** @type {?} */
        let scrollLeft = this.scrollData.scrollLeft;
        /** @type {?} */
        let num = scrollTopAdd / 56;
        /** @type {?} */
        let countNum = 1;
        /** @type {?} */
        let numSet = num;
        // console.log(scrollContent.scrollTo(0,0));
        /** @type {?} */
        var scrollEffect = setInterval((/**
         * @return {?}
         */
        () => {
            numSet = numSet + (num * countNum) >= scrollTopAdd ? scrollTopAdd : numSet + (num * countNum);
            countNum++;
            scrollContent.scrollTo(scrollLeft, scrollTopOld + numSet);
            // console.log(scrollTopOld,numSet);
            if (numSet >= (scrollTopAdd)) {
                clearInterval(scrollEffect);
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.onAutoScroll = false;
                    this.autoScrollOver = true;
                    this.reRendering(document.body);
                }), 0);
            }
        }), 5);
    }
    /**
     * @return {?}
     */
    getScrollTop() {
        /** @type {?} */
        var bodyTop = 0;
        if (typeof window.pageYOffset != "undefined") {
            bodyTop = window.pageYOffset;
        }
        else if (typeof document.compatMode != "undefined"
            && document.compatMode != "BackCompat") {
            bodyTop = document.documentElement.scrollTop;
        }
        else if (typeof document.body != "undefined") {
            bodyTop = document.body.scrollTop;
            // console.log('wewewe');
        }
        return bodyTop;
    }
    /**
     * @return {?}
     */
    countPos() {
        console.log(this.messageContent, this.messageContent.show);
        if (this.messageContent != undefined && this.messageContent.show) {
            // console.log('work');
            /** @type {?} */
            let scrollContent = this.inputScrollContent != undefined ? this.inputScrollContent : document.body;
            /** @type {?} */
            let autoScrollContent = this.inputAutoScrollContent != undefined ? this.inputAutoScrollContent : false;
            console.log('in information btn', scrollContent);
            /** @type {?} */
            let scrollContentSize = scrollContent.getBoundingClientRect();
            console.log('in information btn scrollContentSize', scrollContentSize);
            /** @type {?} */
            let pageSize = scrollContent.scrollHeight;
            /** @type {?} */
            let windowBody = document.body;
            /** @type {?} */
            let windowW = windowBody.offsetWidth;
            /** @type {?} */
            let windowInnerH = window.innerHeight;
            this.messageContent.controlBtn = this.btnContent;
            /** @type {?} */
            let btnDom = this.btnContent.nativeElement;
            /** @type {?} */
            let btnSize = btnDom.getBoundingClientRect();
            /** @type {?} */
            let pos = this.messageContent.defaultPos;
            /** @type {?} */
            let padding = this.messageContent.paddindData;
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let contentMsg = this.messageContent.controlContentPostion();
                //避免遞迴出現錯誤
                /** @type {?} */
                let contentBlock = contentMsg != undefined ? contentMsg.dom : false;
                //======================
                if (contentBlock) {
                    /** @type {?} */
                    let infoSize = contentMsg.infoDomSize;
                    /** @type {?} */
                    let infoSizeW = infoSize.width;
                    /** @type {?} */
                    let infoSizeH = infoSize.height;
                    /** @type {?} */
                    let btnSizeR = btnSize.right;
                    /** @type {?} */
                    let btnSizeL = btnSize.left;
                    /** @type {?} */
                    let btnCenterPos = btnSize.left + (btnSize.width / 2);
                    /** @type {?} */
                    let btnCenterHPos = btnSize.top + (btnSize.height / 2);
                    /** @type {?} */
                    let scrollTopNum = this.crollTopNum ? this.crollTopNum : this.getScrollTop();
                    console.log('scrollTopNum', scrollTopNum);
                    /** @type {?} */
                    let scrollTopOldNum = autoScrollContent ? autoScrollContent.scrollTop : scrollTopNum;
                    console.log('scrollTopOldNum', scrollTopOldNum);
                    /** @type {?} */
                    let scrollLeft = autoScrollContent ? autoScrollContent.scrollLeft : 0;
                    /** @type {?} */
                    let scrollContentSize = scrollContent != undefined ? scrollContent.getBoundingClientRect() : false;
                    if (pos == 'bottom') { //避免遞迴出現錯誤
                        console.log(btnCenterPos, infoSizeW);
                        /** @type {?} */
                        let posLeft = (btnCenterPos - (infoSizeW / 2));
                        /** @type {?} */
                        let posTop = (scrollTopNum + btnSize.top + btnSize.height + 2) - this.outsideSpace.top;
                        contentBlock.style.top = posTop + 'px';
                        this.messageContent.arrowML = "0px";
                        console.log('info pos', scrollTopNum, btnSize.top, btnSize.height, this.outsideSpace.top);
                        //判斷方向
                        /** @type {?} */
                        let arrowLeft = 0;
                        /** @type {?} */
                        let arrowLeftW = 14;
                        if ((posLeft + infoSizeW + padding.right) > windowW) {
                            /** @type {?} */
                            let newInfoLeft = (windowW - infoSizeW - padding.right - this.outsideSpace.left);
                            arrowLeft = btnCenterPos - (newInfoLeft + infoSizeW / 2) - this.outsideSpace.left;
                            arrowLeft = arrowLeft <= ((infoSizeW / 2) - arrowLeftW) ? arrowLeft : ((infoSizeW / 2) - arrowLeftW); //避免箭頭破版
                            contentBlock.style.left = newInfoLeft + 'px';
                            this.messageContent.arrowML = arrowLeft + "px";
                        }
                        else if (posLeft < padding.left) {
                            /** @type {?} */
                            let newInfoLeft = padding.left - this.outsideSpace.left;
                            arrowLeft = btnCenterPos - (newInfoLeft + infoSizeW / 2) - this.outsideSpace.left;
                            arrowLeft = arrowLeft <= (arrowLeftW - (infoSizeW / 2)) ? (arrowLeftW - (infoSizeW / 2)) : arrowLeft; //避免箭頭破版
                            contentBlock.style.left = newInfoLeft + 'px';
                            this.messageContent.arrowML = arrowLeft + "px";
                        }
                        else {
                            contentBlock.style.left = posLeft - this.outsideSpace.left + 'px';
                        }
                        /** @type {?} */
                        let topSpace = infoSizeH + (posTop - scrollTopNum);
                        //判斷info btn是否超過畫面
                        if (scrollContentSize && btnCenterPos < scrollContentSize.left ||
                            scrollContentSize && btnCenterPos > scrollContentSize.right ||
                            scrollContentSize && (btnSize.top + btnSize.height / 2) < scrollContentSize.top) {
                            this.closeInfo();
                            return;
                        }
                        //判斷info content是否超過畫面
                        if (topSpace > windowInnerH && !this.onAutoScroll) {
                            //判斷自動滑完，在滑時自動關閉
                            console.log(this.autoScrollOver);
                            if (this.autoScrollOver) {
                                // console.log('iii');
                                this.closeInfo();
                                return;
                            }
                            else {
                                this.onAutoScroll = true;
                                //送出滑動參數
                                // console.log('aaa');
                                this.scrollData = {
                                    STOld: scrollTopOldNum,
                                    STAdd: topSpace - windowInnerH + padding.bottom,
                                    scrollLeft: scrollLeft,
                                    SC: autoScrollContent ? this.inputAutoScrollContent : window
                                };
                                this.scrollFunction();
                            }
                        }
                    }
                    else if (pos == 'right' || pos == 'left') {
                        /** @type {?} */
                        let posLeft = (btnSizeR + 5);
                        /** @type {?} */
                        let posLeftL = (btnSizeL - 5 - infoSizeW);
                        /** @type {?} */
                        let posTop = btnCenterHPos - infoSizeH / 2;
                        /** @type {?} */
                        let arrowTop = 0;
                        /** @type {?} */
                        let arrowTopH = 14;
                        if ((posTop + infoSizeH) > (windowInnerH - padding.bottom)) {
                            /** @type {?} */
                            let posOTop = posTop;
                            posTop = posTop - (posTop + infoSizeH - (windowInnerH - padding.bottom));
                            arrowTop = (posOTop - posTop) > (infoSizeH / 2 - arrowTopH) ? infoSizeH / 2 - arrowTopH : (posOTop - posTop);
                        }
                        if ((posTop) < padding.top) {
                            /** @type {?} */
                            let posOTop = posTop;
                            posTop = padding.top;
                            arrowTop = posOTop - posTop < arrowTopH - infoSizeH / 2 ? arrowTopH - infoSizeH / 2 : posOTop - posTop;
                        }
                        pos = posLeft + infoSizeW > (windowW - padding.right) ? 'left' : 'right';
                        this.messageContent.defaultPos = pos;
                        contentBlock.style.top = posTop + scrollTopOldNum - this.outsideSpace.top + 'px';
                        contentBlock.style.left = pos == 'right' ? (posLeft - this.outsideSpace.left) + 'px' : (posLeftL - this.outsideSpace.left) + 'px';
                        this.messageContent.arrowMT = arrowTop + "px";
                    }
                    else {
                        //todo throw error
                        console.warn('defaultPos type olny "right" or "bottom"');
                        return;
                    }
                    this.reRendering(windowBody);
                    // this.reRendering(this._elementRef.nativeElement);
                }
                this.messageContent.opacity = true;
                // console.log(this.messageContent.opacity );
            }), 0);
        }
        else {
            this.autoScrollOver = false;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    btnClick(e) {
        this.onClick.emit(e);
        // if(this.messageContent.show){
        this.informationService.closeOthers(this._id);
        // this.informationService.getCloseAction().subscribe((id) => {
        //   console.log('_id:',this._id, 'id', id);
        //   if(this._id !== id){
        //     this.closeInfo();
        //   }
        // });
        // alert("this._id:"+this._id);
        // }
    }
    /**
     * @param {?} dom
     * @return {?}
     */
    reRendering(dom) {
        // dom.style.transform = "translate(-0.5px)"; // mark: solve mantis 0014345
        // dom.style.width  = "calc(100% + 1px)";
        setTimeout((/**
         * @return {?}
         */
        () => {
            // dom.style.transform = ""; // mark: solve mantis 0014345
            dom.style.width = "";
        }), 10);
    }
    /**
     * @return {?}
     */
    closeInfo() {
        this.messageContent.show = false;
        this.messageContent.opacity = false;
        this.autoScrollOver = false;
        this.reRendering(document.body);
    }
    /**
     * @return {?}
     */
    setContentPos() {
        /** @type {?} */
        let _this = this;
        setTimeout((/**
         * @return {?}
         */
        () => {
            console.warn('setContentPos', _this);
            if (_this.messageContent != undefined) {
                _this.messageContent.opacity = _this.messageContent.show ? true : false;
                _this.messageContent.show = true;
                _this.btnClick(_this);
                // console.log(this.messageContent.opacity );
                _this.countPos();
            }
        }), 0);
    }
}
UiInformationBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-information-btn',
                template: "<div class=\"control-btn\" (click)=\"setContentPos()\" #controlBtnContent >\n  <ng-content></ng-content>\n  <div class=\"info-icon-tab\"\n  [ngClass]=\"{'bottom': messageContent.defaultPos=='bottom',\n              'top'   : messageContent.defaultPos=='top',\n              'show'  : messageContent.show}\">\n    <nx-icon name=\"info-circle\" fill=\"false\" outline=\"false\" size=\"auto\"></nx-icon>\n  </div>\n</div>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-block}:host .info-icon-tab{width:20px;height:20px}:host .info-icon-tab ::ng-deep nx-icon{width:20px;height:20px;border:none;font-size:20px;color:#007ab3;background-color:transparent;line-height:1em}:host .info-icon-tab.bottom{position:relative;display:inline-block}:host .info-icon-tab.show{z-index:11}:host .info-icon-tab:not(:first-child){display:none}"]
            }] }
];
UiInformationBtnComponent.ctorParameters = () => [
    { type: UiInformationService }
];
UiInformationBtnComponent.propDecorators = {
    messageContent: [{ type: Input }],
    inputScrollContent: [{ type: Input }],
    inputAutoScrollContent: [{ type: Input }],
    crollTopNum: [{ type: Input }],
    onClick: [{ type: Output }],
    outsideSpace: [{ type: Input }],
    btnContent: [{ type: ViewChild, args: ['controlBtnContent',] }]
};
if (false) {
    /** @type {?} */
    UiInformationBtnComponent.prototype.messageContent;
    /** @type {?} */
    UiInformationBtnComponent.prototype.inputScrollContent;
    /** @type {?} */
    UiInformationBtnComponent.prototype.inputAutoScrollContent;
    /** @type {?} */
    UiInformationBtnComponent.prototype.crollTopNum;
    /** @type {?} */
    UiInformationBtnComponent.prototype.onClick;
    /** @type {?} */
    UiInformationBtnComponent.prototype.outsideSpace;
    /** @type {?} */
    UiInformationBtnComponent.prototype.onAutoScroll;
    /** @type {?} */
    UiInformationBtnComponent.prototype.scrollData;
    /** @type {?} */
    UiInformationBtnComponent.prototype.autoScrollOver;
    /**
     * @type {?}
     * @private
     */
    UiInformationBtnComponent.prototype._id;
    /** @type {?} */
    UiInformationBtnComponent.prototype.btnContent;
    /**
     * @type {?}
     * @protected
     */
    UiInformationBtnComponent.prototype.informationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5mb3JtYXRpb24tYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktaW5mb3JtYXRpb24tYnRuL3VpLWluZm9ybWF0aW9uLWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUFFLG9CQUFvQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDM0csT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNbEMsTUFBTTs7OztJQWNKLFlBQXNCLGtCQUF1QztRQUF2Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXFCO1FBVnBELGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsWUFBTyxHQUFDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsaUJBQVksR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDO1lBQ0wsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXJCLG1CQUFjLEdBQVcsS0FBSyxDQUFDO1FBSzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELFFBQVE7SUFFUixDQUFDOzs7O0lBQ0QsY0FBYzs7WUFDUixZQUFZLEdBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLOztZQUNyQyxZQUFZLEdBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLOztZQUNyQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztZQUNsQyxVQUFV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QUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0Qiw2Q0FBNkM7Z0JBQzdDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNsQjtRQUNILENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7OztZQXpQRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZ2JBQWtEOzthQUVuRDs7O1lBUFEsb0JBQW9COzs7NkJBUzFCLEtBQUs7aUNBQ0wsS0FBSztxQ0FDTCxLQUFLOzBCQUNMLEtBQUs7c0JBQ0wsTUFBTTsyQkFDTixLQUFLO3lCQU9MLFNBQVMsU0FBQyxtQkFBbUI7Ozs7SUFaOUIsbURBQXNEOztJQUN0RCx1REFBNEI7O0lBQzVCLDJEQUFnQzs7SUFDaEMsZ0RBQXlCOztJQUN6Qiw0Q0FBcUM7O0lBQ3JDLGlEQUNpQzs7SUFDakMsaURBQXFCOztJQUNyQiwrQ0FBVzs7SUFDWCxtREFBK0I7Ozs7O0lBQy9CLHdDQUFZOztJQUVaLCtDQUF1RDs7Ozs7SUFDM0MsdURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVWlJbmZvcm1hdGlvblNlcnZpY2V9IGZyb20gJy4uL3VpLWluZm9ybWF0aW9uL3VpLWluZm9ybWF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVWlJbmZvcm1hdGlvbkNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi91aS1pbmZvcm1hdGlvbi1jb250ZW50L3VpLWluZm9ybWF0aW9uLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1pbmZvcm1hdGlvbi1idG4nLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktaW5mb3JtYXRpb24tYnRuLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktaW5mb3JtYXRpb24tYnRuLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlJbmZvcm1hdGlvbkJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG1lc3NhZ2VDb250ZW50OlVpSW5mb3JtYXRpb25Db250ZW50Q29tcG9uZW50O1xuICBASW5wdXQoKSBpbnB1dFNjcm9sbENvbnRlbnQ7XG4gIEBJbnB1dCgpIGlucHV0QXV0b1Njcm9sbENvbnRlbnQ7XG4gIEBJbnB1dCgpIGNyb2xsVG9wTnVtID0gMDtcbiAgQE91dHB1dCgpIG9uQ2xpY2s9bmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBvdXRzaWRlU3BhY2UgPSB7dG9wOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjB9O1xuICBvbkF1dG9TY3JvbGwgPSBmYWxzZTtcbiAgc2Nyb2xsRGF0YTtcbiAgYXV0b1Njcm9sbE92ZXI6Ym9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pZDsgLy8gaWQgZm9yIGluZm9cblxuICBAVmlld0NoaWxkKCdjb250cm9sQnRuQ29udGVudCcpIGJ0bkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpbmZvcm1hdGlvblNlcnZpY2U6VWlJbmZvcm1hdGlvblNlcnZpY2UpIHsgXG4gICAgdGhpcy5faWQgPSB1dWlkKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgICAgXG4gICAgXG4gIH1cbiAgc2Nyb2xsRnVuY3Rpb24oKXtcbiAgICBsZXQgc2Nyb2xsVG9wT2xkICA9IHRoaXMuc2Nyb2xsRGF0YS5TVE9sZCxcbiAgICAgICAgc2Nyb2xsVG9wQWRkICA9IHRoaXMuc2Nyb2xsRGF0YS5TVEFkZCxcbiAgICAgICAgc2Nyb2xsQ29udGVudCA9IHRoaXMuc2Nyb2xsRGF0YS5TQyxcbiAgICAgICAgc2Nyb2xsTGVmdCAgICA9IHRoaXMuc2Nyb2xsRGF0YS5zY3JvbGxMZWZ0LFxuICAgICAgICBudW0gPSBzY3JvbGxUb3BBZGQvNTY7XG4gICAgbGV0IGNvdW50TnVtID0gMTtcbiAgICBsZXQgbnVtU2V0ID0gbnVtO1xuICAgIC8vIGNvbnNvbGUubG9nKHNjcm9sbENvbnRlbnQuc2Nyb2xsVG8oMCwwKSk7XG4gICAgdmFyIHNjcm9sbEVmZmVjdCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICBudW1TZXQgPSBudW1TZXQrKG51bSpjb3VudE51bSk+PXNjcm9sbFRvcEFkZD9zY3JvbGxUb3BBZGQ6bnVtU2V0KyhudW0qY291bnROdW0pO1xuICAgICAgY291bnROdW0rKztcbiAgICAgIHNjcm9sbENvbnRlbnQuc2Nyb2xsVG8oc2Nyb2xsTGVmdCxzY3JvbGxUb3BPbGQrbnVtU2V0KTtcblxuICAgICAgLy8gY29uc29sZS5sb2coc2Nyb2xsVG9wT2xkLG51bVNldCk7XG4gICAgICBpZihudW1TZXQ+PShzY3JvbGxUb3BBZGQpKXtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzY3JvbGxFZmZlY3QpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgdGhpcy5vbkF1dG9TY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmF1dG9TY3JvbGxPdmVyID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnJlUmVuZGVyaW5nKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICB9LDApO1xuICAgICAgfVxuICAgIH0sNSk7XG4gIH1cbiAgZ2V0U2Nyb2xsVG9wKCl7XG4gICAgdmFyIGJvZHlUb3AgPSAwO1xuICAgIGlmICh0eXBlb2Ygd2luZG93LnBhZ2VZT2Zmc2V0ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGJvZHlUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQuY29tcGF0TW9kZSAhPSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAmJiBkb2N1bWVudC5jb21wYXRNb2RlICE9IFwiQmFja0NvbXBhdFwiKSB7XG4gICAgICBib2R5VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGJvZHlUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd3ZXdld2UnKTtcbiAgICB9XG4gICAgcmV0dXJuIGJvZHlUb3A7XG4gIH1cbiAgY291bnRQb3MoKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VDb250ZW50LHRoaXMubWVzc2FnZUNvbnRlbnQuc2hvdyk7XG5cbiAgICBpZih0aGlzLm1lc3NhZ2VDb250ZW50ICE9IHVuZGVmaW5lZCAmJiB0aGlzLm1lc3NhZ2VDb250ZW50LnNob3cpe1xuICAgICAgLy8gY29uc29sZS5sb2coJ3dvcmsnKTtcbiAgICAgIGxldCBzY3JvbGxDb250ZW50ID0gdGhpcy5pbnB1dFNjcm9sbENvbnRlbnQhPXVuZGVmaW5lZD90aGlzLmlucHV0U2Nyb2xsQ29udGVudDpkb2N1bWVudC5ib2R5O1xuICAgICAgbGV0IGF1dG9TY3JvbGxDb250ZW50ID0gdGhpcy5pbnB1dEF1dG9TY3JvbGxDb250ZW50IT11bmRlZmluZWQ/dGhpcy5pbnB1dEF1dG9TY3JvbGxDb250ZW50OmZhbHNlO1xuICAgICAgY29uc29sZS5sb2coJ2luIGluZm9ybWF0aW9uIGJ0bicsIHNjcm9sbENvbnRlbnQpO1xuICAgICAgbGV0IHNjcm9sbENvbnRlbnRTaXplID0gc2Nyb2xsQ29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdpbiBpbmZvcm1hdGlvbiBidG4gc2Nyb2xsQ29udGVudFNpemUnLCBzY3JvbGxDb250ZW50U2l6ZSk7XG4gICAgICBsZXQgcGFnZVNpemUgPSBzY3JvbGxDb250ZW50LnNjcm9sbEhlaWdodCxcbiAgICAgICAgICB3aW5kb3dCb2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgICAgICB3aW5kb3dXID0gd2luZG93Qm9keS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICB3aW5kb3dJbm5lckggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB0aGlzLm1lc3NhZ2VDb250ZW50LmNvbnRyb2xCdG4gPSB0aGlzLmJ0bkNvbnRlbnQ7XG4gICAgICBsZXQgYnRuRG9tID0gdGhpcy5idG5Db250ZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgYnRuU2l6ZSA9IGJ0bkRvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGxldCBwb3M6c3RyaW5nID0gdGhpcy5tZXNzYWdlQ29udGVudC5kZWZhdWx0UG9zO1xuICAgICAgbGV0IHBhZGRpbmcgPSB0aGlzLm1lc3NhZ2VDb250ZW50LnBhZGRpbmREYXRhO1xuICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICBsZXQgY29udGVudE1zZyA9IHRoaXMubWVzc2FnZUNvbnRlbnQuY29udHJvbENvbnRlbnRQb3N0aW9uKCk7Ly/pgb/lhY3pgZ7ov7Tlh7rnj77pjK/oqqRcbiAgICAgICAgbGV0IGNvbnRlbnRCbG9jayA9IGNvbnRlbnRNc2chPXVuZGVmaW5lZD8gY29udGVudE1zZy5kb206ZmFsc2U7Ly/pgb/lhY3pgZ7ov7Tlh7rnj77pjK/oqqRcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgaWYoY29udGVudEJsb2NrKXtcbiAgICAgICAgICBsZXQgaW5mb1NpemUgPSBjb250ZW50TXNnLmluZm9Eb21TaXplLFxuICAgICAgICAgICAgICBpbmZvU2l6ZVcgPSBpbmZvU2l6ZS53aWR0aCxcbiAgICAgICAgICAgICAgaW5mb1NpemVIID0gaW5mb1NpemUuaGVpZ2h0O1xuICAgICAgICAgIGxldCBidG5TaXplUiA9IGJ0blNpemUucmlnaHQsXG4gICAgICAgICAgICAgIGJ0blNpemVMID0gYnRuU2l6ZS5sZWZ0O1xuICAgICAgICAgIGxldCBidG5DZW50ZXJQb3MgPSBidG5TaXplLmxlZnQgKyAoYnRuU2l6ZS53aWR0aC8yKTtcbiAgICAgICAgICBsZXQgYnRuQ2VudGVySFBvcyA9IGJ0blNpemUudG9wICsgKGJ0blNpemUuaGVpZ2h0LzIpO1xuICAgICAgICAgIGxldCBzY3JvbGxUb3BOdW0gPSB0aGlzLmNyb2xsVG9wTnVtPyB0aGlzLmNyb2xsVG9wTnVtOnRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3Njcm9sbFRvcE51bScsIHNjcm9sbFRvcE51bSk7XG4gICAgICAgICAgbGV0IHNjcm9sbFRvcE9sZE51bSA9IGF1dG9TY3JvbGxDb250ZW50P2F1dG9TY3JvbGxDb250ZW50LnNjcm9sbFRvcDpzY3JvbGxUb3BOdW07XG4gICAgICAgICAgY29uc29sZS5sb2coJ3Njcm9sbFRvcE9sZE51bScsIHNjcm9sbFRvcE9sZE51bSk7XG4gICAgICAgICAgbGV0IHNjcm9sbExlZnQgPSBhdXRvU2Nyb2xsQ29udGVudD9hdXRvU2Nyb2xsQ29udGVudC5zY3JvbGxMZWZ0OjA7XG4gICAgICAgICAgbGV0IHNjcm9sbENvbnRlbnRTaXplID0gc2Nyb2xsQ29udGVudCE9dW5kZWZpbmVkP3Njcm9sbENvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6ZmFsc2U7XG4gICAgICAgICAgaWYocG9zID09ICdib3R0b20nKXsgLy/pgb/lhY3pgZ7ov7Tlh7rnj77pjK/oqqRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ0bkNlbnRlclBvcyxpbmZvU2l6ZVcpO1xuICAgICAgICAgICAgbGV0IHBvc0xlZnQgPSAoYnRuQ2VudGVyUG9zIC0gKGluZm9TaXplVy8yKSkgLFxuICAgICAgICAgICAgICAgIHBvc1RvcCAgPSAoc2Nyb2xsVG9wTnVtK2J0blNpemUudG9wK2J0blNpemUuaGVpZ2h0KzIpLXRoaXMub3V0c2lkZVNwYWNlLnRvcDtcblxuICAgICAgICAgICAgY29udGVudEJsb2NrLnN0eWxlLnRvcCAgPSBwb3NUb3ArJ3B4JztcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUNvbnRlbnQuYXJyb3dNTCA9IFwiMHB4XCI7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmZvIHBvcycsc2Nyb2xsVG9wTnVtLGJ0blNpemUudG9wLGJ0blNpemUuaGVpZ2h0LHRoaXMub3V0c2lkZVNwYWNlLnRvcCk7XG4gICAgICAgICAgICAvL+WIpOaWt+aWueWQkVxuICAgICAgICAgICAgbGV0IGFycm93TGVmdCA9IDAsXG4gICAgICAgICAgICAgICAgYXJyb3dMZWZ0VyA9IDE0O1xuICAgICAgICAgICAgaWYoKHBvc0xlZnQraW5mb1NpemVXK3BhZGRpbmcucmlnaHQpPndpbmRvd1cgKXtcbiAgICAgICAgICAgICAgbGV0IG5ld0luZm9MZWZ0ID0gKHdpbmRvd1ctaW5mb1NpemVXLXBhZGRpbmcucmlnaHQtIHRoaXMub3V0c2lkZVNwYWNlLmxlZnQpO1xuICAgICAgICAgICAgICBhcnJvd0xlZnQgPSBidG5DZW50ZXJQb3MtKG5ld0luZm9MZWZ0K2luZm9TaXplVy8yKS10aGlzLm91dHNpZGVTcGFjZS5sZWZ0O1xuICAgICAgICAgICAgICBhcnJvd0xlZnQgPSBhcnJvd0xlZnQgPD0gKChpbmZvU2l6ZVcvMikgLSBhcnJvd0xlZnRXKT8gYXJyb3dMZWZ0OigoaW5mb1NpemVXLzIpIC0gYXJyb3dMZWZ0Vyk7Ly/pgb/lhY3nrq3poK3noLTniYhcbiAgICAgICAgICAgICAgY29udGVudEJsb2NrLnN0eWxlLmxlZnQgPSBuZXdJbmZvTGVmdCArJ3B4JztcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ29udGVudC5hcnJvd01MID0gYXJyb3dMZWZ0K1wicHhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYocG9zTGVmdDxwYWRkaW5nLmxlZnQpe1xuICAgICAgICAgICAgICBsZXQgbmV3SW5mb0xlZnQgPSBwYWRkaW5nLmxlZnQtIHRoaXMub3V0c2lkZVNwYWNlLmxlZnQ7XG4gICAgICAgICAgICAgIGFycm93TGVmdCA9IGJ0bkNlbnRlclBvcy0obmV3SW5mb0xlZnQraW5mb1NpemVXLzIpLXRoaXMub3V0c2lkZVNwYWNlLmxlZnQ7XG4gICAgICAgICAgICAgIGFycm93TGVmdCA9IGFycm93TGVmdCA8PSAoYXJyb3dMZWZ0VyAtIChpbmZvU2l6ZVcvMikpPyAoYXJyb3dMZWZ0VyAtIChpbmZvU2l6ZVcvMikpOmFycm93TGVmdDsvL+mBv+WFjeeuremgreegtOeJiFxuICAgICAgICAgICAgICBjb250ZW50QmxvY2suc3R5bGUubGVmdCA9IG5ld0luZm9MZWZ0KydweCc7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZUNvbnRlbnQuYXJyb3dNTCA9IGFycm93TGVmdCtcInB4XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBjb250ZW50QmxvY2suc3R5bGUubGVmdCA9IHBvc0xlZnQgLSB0aGlzLm91dHNpZGVTcGFjZS5sZWZ0KydweCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB0b3BTcGFjZSA9IGluZm9TaXplSCsocG9zVG9wLXNjcm9sbFRvcE51bSk7XG4gICAgICAgICAgICAvL+WIpOaWt2luZm8gYnRu5piv5ZCm6LaF6YGO55Wr6Z2iXG4gICAgICAgICAgICBpZihzY3JvbGxDb250ZW50U2l6ZSAmJiBidG5DZW50ZXJQb3M8c2Nyb2xsQ29udGVudFNpemUubGVmdCB8fFxuICAgICAgICAgICAgICBzY3JvbGxDb250ZW50U2l6ZSAmJiBidG5DZW50ZXJQb3M+c2Nyb2xsQ29udGVudFNpemUucmlnaHR8fFxuICAgICAgICAgICAgICBzY3JvbGxDb250ZW50U2l6ZSAmJiAoYnRuU2l6ZS50b3ArYnRuU2l6ZS5oZWlnaHQvMikgPCBzY3JvbGxDb250ZW50U2l6ZS50b3Ape1xuICAgICAgICAgICAgICB0aGlzLmNsb3NlSW5mbygpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+WIpOaWt2luZm8gY29udGVudOaYr+WQpui2hemBjueVq+mdolxuICAgICAgICAgICAgaWYodG9wU3BhY2U+d2luZG93SW5uZXJIICYmICF0aGlzLm9uQXV0b1Njcm9sbCl7XG4gICAgICAgICAgICAgIC8v5Yik5pa36Ieq5YuV5ruR5a6M77yM5Zyo5ruR5pmC6Ieq5YuV6Zec6ZaJXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXV0b1Njcm9sbE92ZXIpO1xuICAgICAgICAgICAgICBpZih0aGlzLmF1dG9TY3JvbGxPdmVyKXtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaWlpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUluZm8oKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXV0b1Njcm9sbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy/pgIHlh7rmu5Hli5Xlj4PmlbhcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWFhJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgU1RPbGQ6c2Nyb2xsVG9wT2xkTnVtLFxuICAgICAgICAgICAgICAgICAgU1RBZGQ6dG9wU3BhY2UgLSB3aW5kb3dJbm5lckggKyBwYWRkaW5nLmJvdHRvbSxcbiAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQ6c2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICAgIFNDOmF1dG9TY3JvbGxDb250ZW50P3RoaXMuaW5wdXRBdXRvU2Nyb2xsQ29udGVudDp3aW5kb3dcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxGdW5jdGlvbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYocG9zID09ICdyaWdodCd8fHBvcyA9PSAnbGVmdCcpe1xuICAgICAgICAgICAgbGV0IHBvc0xlZnQgPSAoYnRuU2l6ZVIrNSkgLFxuICAgICAgICAgICAgICAgIHBvc0xlZnRMID0gKGJ0blNpemVMLTUtaW5mb1NpemVXKSxcbiAgICAgICAgICAgICAgICBwb3NUb3AgID0gYnRuQ2VudGVySFBvcy1pbmZvU2l6ZUgvMjtcbiAgICAgICAgICAgIGxldCBhcnJvd1RvcCA9IDAsXG4gICAgICAgICAgICAgICAgYXJyb3dUb3BIID0gMTQ7XG5cbiAgICAgICAgICAgIGlmKChwb3NUb3AraW5mb1NpemVIKSA+ICh3aW5kb3dJbm5lckgtcGFkZGluZy5ib3R0b20pKXtcbiAgICAgICAgICAgICAgbGV0IHBvc09Ub3AgPSBwb3NUb3A7XG4gICAgICAgICAgICAgIHBvc1RvcCA9IHBvc1RvcCAtIChwb3NUb3AraW5mb1NpemVILSh3aW5kb3dJbm5lckgtcGFkZGluZy5ib3R0b20pKTtcbiAgICAgICAgICAgICAgYXJyb3dUb3AgPSAocG9zT1RvcC1wb3NUb3ApPihpbmZvU2l6ZUgvMi1hcnJvd1RvcEgpP2luZm9TaXplSC8yLWFycm93VG9wSDoocG9zT1RvcC1wb3NUb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoKHBvc1RvcCk8cGFkZGluZy50b3Ape1xuICAgICAgICAgICAgICBsZXQgcG9zT1RvcCA9IHBvc1RvcDtcbiAgICAgICAgICAgICAgcG9zVG9wID0gcGFkZGluZy50b3A7XG4gICAgICAgICAgICAgIGFycm93VG9wID0gcG9zT1RvcC1wb3NUb3A8YXJyb3dUb3BILWluZm9TaXplSC8yP2Fycm93VG9wSC1pbmZvU2l6ZUgvMjpwb3NPVG9wLXBvc1RvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcyA9IHBvc0xlZnQraW5mb1NpemVXID4gKHdpbmRvd1cgLSBwYWRkaW5nLnJpZ2h0KT8nbGVmdCc6J3JpZ2h0JztcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUNvbnRlbnQuZGVmYXVsdFBvcyA9IHBvcztcbiAgICAgICAgICAgIGNvbnRlbnRCbG9jay5zdHlsZS50b3AgPSBwb3NUb3Arc2Nyb2xsVG9wT2xkTnVtLXRoaXMub3V0c2lkZVNwYWNlLnRvcCsncHgnO1xuICAgICAgICAgICAgY29udGVudEJsb2NrLnN0eWxlLmxlZnQgPSBwb3MgPT0gJ3JpZ2h0Jz8gKHBvc0xlZnQtIHRoaXMub3V0c2lkZVNwYWNlLmxlZnQpKydweCc6IChwb3NMZWZ0TC0gdGhpcy5vdXRzaWRlU3BhY2UubGVmdCkrJ3B4JztcblxuXG5cblxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ29udGVudC5hcnJvd01UID0gYXJyb3dUb3ArXCJweFwiO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvL3RvZG8gdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignZGVmYXVsdFBvcyB0eXBlIG9sbnkgXCJyaWdodFwiIG9yIFwiYm90dG9tXCInKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZVJlbmRlcmluZyh3aW5kb3dCb2R5KTtcbiAgICAgICAgICAvLyB0aGlzLnJlUmVuZGVyaW5nKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZXNzYWdlQ29udGVudC5vcGFjaXR5ID0gdHJ1ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tZXNzYWdlQ29udGVudC5vcGFjaXR5ICk7XG4gICAgICB9LDApO1xuICAgIH1cbiAgICBlbHNle1xuXG4gICAgICB0aGlzLmF1dG9TY3JvbGxPdmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGJ0bkNsaWNrKGUpe1xuICAgIHRoaXMub25DbGljay5lbWl0KGUpOyAgICBcbiAgICAvLyBpZih0aGlzLm1lc3NhZ2VDb250ZW50LnNob3cpe1xuICAgICAgICB0aGlzLmluZm9ybWF0aW9uU2VydmljZS5jbG9zZU90aGVycyh0aGlzLl9pZCk7XG4gICAgICAgIC8vIHRoaXMuaW5mb3JtYXRpb25TZXJ2aWNlLmdldENsb3NlQWN0aW9uKCkuc3Vic2NyaWJlKChpZCkgPT4ge1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdfaWQ6Jyx0aGlzLl9pZCwgJ2lkJywgaWQpO1xuICAgICAgICAvLyAgIGlmKHRoaXMuX2lkICE9PSBpZCl7XG4gICAgICAgIC8vICAgICB0aGlzLmNsb3NlSW5mbygpO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIGFsZXJ0KFwidGhpcy5faWQ6XCIrdGhpcy5faWQpO1xuICAgIC8vIH1cbiAgfVxuICByZVJlbmRlcmluZyhkb20pe1xuICAgIC8vIGRvbS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtMC41cHgpXCI7IC8vIG1hcms6IHNvbHZlIG1hbnRpcyAwMDE0MzQ1XG4gICAvLyBkb20uc3R5bGUud2lkdGggID0gXCJjYWxjKDEwMCUgKyAxcHgpXCI7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgLy8gZG9tLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7IC8vIG1hcms6IHNvbHZlIG1hbnRpcyAwMDE0MzQ1XG4gICAgICBkb20uc3R5bGUud2lkdGggID0gXCJcIjtcbiAgICB9LDEwKTtcbiAgfVxuICBjbG9zZUluZm8oKXtcbiAgICB0aGlzLm1lc3NhZ2VDb250ZW50LnNob3cgPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VDb250ZW50Lm9wYWNpdHkgPSBmYWxzZTtcbiAgICB0aGlzLmF1dG9TY3JvbGxPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5yZVJlbmRlcmluZyhkb2N1bWVudC5ib2R5KTtcbiAgfVxuICBzZXRDb250ZW50UG9zKCl7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICBjb25zb2xlLndhcm4oJ3NldENvbnRlbnRQb3MnLCBfdGhpcyk7XG5cbiAgICAgIGlmKF90aGlzLm1lc3NhZ2VDb250ZW50ICE9IHVuZGVmaW5lZCl7XG4gICAgICAgIF90aGlzLm1lc3NhZ2VDb250ZW50Lm9wYWNpdHkgPSBfdGhpcy5tZXNzYWdlQ29udGVudC5zaG93PyB0cnVlOmZhbHNlO1xuICAgICAgICBfdGhpcy5tZXNzYWdlQ29udGVudC5zaG93ID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuYnRuQ2xpY2soX3RoaXMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VDb250ZW50Lm9wYWNpdHkgKTtcbiAgICAgICAgX3RoaXMuY291bnRQb3MoKTtcbiAgICAgIH1cbiAgICB9LDApO1xuICB9XG59XG4iXX0=