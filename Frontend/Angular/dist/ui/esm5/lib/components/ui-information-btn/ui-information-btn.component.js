/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { UiInformationService } from '../ui-information/ui-information.service';
import { UiInformationContentComponent } from '../ui-information-content/ui-information-content.component';
import { v4 as uuid } from 'uuid';
var UiInformationBtnComponent = /** @class */ (function () {
    function UiInformationBtnComponent(informationService) {
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
    UiInformationBtnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiInformationBtnComponent.prototype.scrollFunction = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        /** @type {?} */
        var scrollTopOld = this.scrollData.STOld;
        /** @type {?} */
        var scrollTopAdd = this.scrollData.STAdd;
        /** @type {?} */
        var scrollContent = this.scrollData.SC;
        /** @type {?} */
        var scrollLeft = this.scrollData.scrollLeft;
        /** @type {?} */
        var num = scrollTopAdd / 56;
        /** @type {?} */
        var countNum = 1;
        /** @type {?} */
        var numSet = num;
        // console.log(scrollContent.scrollTo(0,0));
        /** @type {?} */
        var scrollEffect = setInterval((/**
         * @return {?}
         */
        function () {
            numSet = numSet + (num * countNum) >= scrollTopAdd ? scrollTopAdd : numSet + (num * countNum);
            countNum++;
            scrollContent.scrollTo(scrollLeft, scrollTopOld + numSet);
            // console.log(scrollTopOld,numSet);
            if (numSet >= (scrollTopAdd)) {
                clearInterval(scrollEffect);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this_1.onAutoScroll = false;
                    _this_1.autoScrollOver = true;
                    _this_1.reRendering(document.body);
                }), 0);
            }
        }), 5);
    };
    /**
     * @return {?}
     */
    UiInformationBtnComponent.prototype.getScrollTop = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    UiInformationBtnComponent.prototype.countPos = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        console.log(this.messageContent, this.messageContent.show);
        if (this.messageContent != undefined && this.messageContent.show) {
            // console.log('work');
            /** @type {?} */
            var scrollContent_1 = this.inputScrollContent != undefined ? this.inputScrollContent : document.body;
            /** @type {?} */
            var autoScrollContent_1 = this.inputAutoScrollContent != undefined ? this.inputAutoScrollContent : false;
            console.log('in information btn', scrollContent_1);
            /** @type {?} */
            var scrollContentSize = scrollContent_1.getBoundingClientRect();
            console.log('in information btn scrollContentSize', scrollContentSize);
            /** @type {?} */
            var pageSize = scrollContent_1.scrollHeight;
            /** @type {?} */
            var windowBody_1 = document.body;
            /** @type {?} */
            var windowW_1 = windowBody_1.offsetWidth;
            /** @type {?} */
            var windowInnerH_1 = window.innerHeight;
            this.messageContent.controlBtn = this.btnContent;
            /** @type {?} */
            var btnDom = this.btnContent.nativeElement;
            /** @type {?} */
            var btnSize_1 = btnDom.getBoundingClientRect();
            /** @type {?} */
            var pos_1 = this.messageContent.defaultPos;
            /** @type {?} */
            var padding_1 = this.messageContent.paddindData;
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var contentMsg = _this_1.messageContent.controlContentPostion();
                //避免遞迴出現錯誤
                /** @type {?} */
                var contentBlock = contentMsg != undefined ? contentMsg.dom : false;
                //======================
                if (contentBlock) {
                    /** @type {?} */
                    var infoSize = contentMsg.infoDomSize;
                    /** @type {?} */
                    var infoSizeW = infoSize.width;
                    /** @type {?} */
                    var infoSizeH = infoSize.height;
                    /** @type {?} */
                    var btnSizeR = btnSize_1.right;
                    /** @type {?} */
                    var btnSizeL = btnSize_1.left;
                    /** @type {?} */
                    var btnCenterPos = btnSize_1.left + (btnSize_1.width / 2);
                    /** @type {?} */
                    var btnCenterHPos = btnSize_1.top + (btnSize_1.height / 2);
                    /** @type {?} */
                    var scrollTopNum = _this_1.crollTopNum ? _this_1.crollTopNum : _this_1.getScrollTop();
                    console.log('scrollTopNum', scrollTopNum);
                    /** @type {?} */
                    var scrollTopOldNum = autoScrollContent_1 ? autoScrollContent_1.scrollTop : scrollTopNum;
                    console.log('scrollTopOldNum', scrollTopOldNum);
                    /** @type {?} */
                    var scrollLeft = autoScrollContent_1 ? autoScrollContent_1.scrollLeft : 0;
                    /** @type {?} */
                    var scrollContentSize_1 = scrollContent_1 != undefined ? scrollContent_1.getBoundingClientRect() : false;
                    if (pos_1 == 'bottom') { //避免遞迴出現錯誤
                        console.log(btnCenterPos, infoSizeW);
                        /** @type {?} */
                        var posLeft = (btnCenterPos - (infoSizeW / 2));
                        /** @type {?} */
                        var posTop = (scrollTopNum + btnSize_1.top + btnSize_1.height + 2) - _this_1.outsideSpace.top;
                        contentBlock.style.top = posTop + 'px';
                        _this_1.messageContent.arrowML = "0px";
                        console.log('info pos', scrollTopNum, btnSize_1.top, btnSize_1.height, _this_1.outsideSpace.top);
                        //判斷方向
                        /** @type {?} */
                        var arrowLeft = 0;
                        /** @type {?} */
                        var arrowLeftW = 14;
                        if ((posLeft + infoSizeW + padding_1.right) > windowW_1) {
                            /** @type {?} */
                            var newInfoLeft = (windowW_1 - infoSizeW - padding_1.right - _this_1.outsideSpace.left);
                            arrowLeft = btnCenterPos - (newInfoLeft + infoSizeW / 2) - _this_1.outsideSpace.left;
                            arrowLeft = arrowLeft <= ((infoSizeW / 2) - arrowLeftW) ? arrowLeft : ((infoSizeW / 2) - arrowLeftW); //避免箭頭破版
                            contentBlock.style.left = newInfoLeft + 'px';
                            _this_1.messageContent.arrowML = arrowLeft + "px";
                        }
                        else if (posLeft < padding_1.left) {
                            /** @type {?} */
                            var newInfoLeft = padding_1.left - _this_1.outsideSpace.left;
                            arrowLeft = btnCenterPos - (newInfoLeft + infoSizeW / 2) - _this_1.outsideSpace.left;
                            arrowLeft = arrowLeft <= (arrowLeftW - (infoSizeW / 2)) ? (arrowLeftW - (infoSizeW / 2)) : arrowLeft; //避免箭頭破版
                            contentBlock.style.left = newInfoLeft + 'px';
                            _this_1.messageContent.arrowML = arrowLeft + "px";
                        }
                        else {
                            contentBlock.style.left = posLeft - _this_1.outsideSpace.left + 'px';
                        }
                        /** @type {?} */
                        var topSpace = infoSizeH + (posTop - scrollTopNum);
                        //判斷info btn是否超過畫面
                        if (scrollContentSize_1 && btnCenterPos < scrollContentSize_1.left ||
                            scrollContentSize_1 && btnCenterPos > scrollContentSize_1.right ||
                            scrollContentSize_1 && (btnSize_1.top + btnSize_1.height / 2) < scrollContentSize_1.top) {
                            _this_1.closeInfo();
                            return;
                        }
                        //判斷info content是否超過畫面
                        if (topSpace > windowInnerH_1 && !_this_1.onAutoScroll) {
                            //判斷自動滑完，在滑時自動關閉
                            console.log(_this_1.autoScrollOver);
                            if (_this_1.autoScrollOver) {
                                // console.log('iii');
                                _this_1.closeInfo();
                                return;
                            }
                            else {
                                _this_1.onAutoScroll = true;
                                //送出滑動參數
                                // console.log('aaa');
                                _this_1.scrollData = {
                                    STOld: scrollTopOldNum,
                                    STAdd: topSpace - windowInnerH_1 + padding_1.bottom,
                                    scrollLeft: scrollLeft,
                                    SC: autoScrollContent_1 ? _this_1.inputAutoScrollContent : window
                                };
                                _this_1.scrollFunction();
                            }
                        }
                    }
                    else if (pos_1 == 'right' || pos_1 == 'left') {
                        /** @type {?} */
                        var posLeft = (btnSizeR + 5);
                        /** @type {?} */
                        var posLeftL = (btnSizeL - 5 - infoSizeW);
                        /** @type {?} */
                        var posTop = btnCenterHPos - infoSizeH / 2;
                        /** @type {?} */
                        var arrowTop = 0;
                        /** @type {?} */
                        var arrowTopH = 14;
                        if ((posTop + infoSizeH) > (windowInnerH_1 - padding_1.bottom)) {
                            /** @type {?} */
                            var posOTop = posTop;
                            posTop = posTop - (posTop + infoSizeH - (windowInnerH_1 - padding_1.bottom));
                            arrowTop = (posOTop - posTop) > (infoSizeH / 2 - arrowTopH) ? infoSizeH / 2 - arrowTopH : (posOTop - posTop);
                        }
                        if ((posTop) < padding_1.top) {
                            /** @type {?} */
                            var posOTop = posTop;
                            posTop = padding_1.top;
                            arrowTop = posOTop - posTop < arrowTopH - infoSizeH / 2 ? arrowTopH - infoSizeH / 2 : posOTop - posTop;
                        }
                        pos_1 = posLeft + infoSizeW > (windowW_1 - padding_1.right) ? 'left' : 'right';
                        _this_1.messageContent.defaultPos = pos_1;
                        contentBlock.style.top = posTop + scrollTopOldNum - _this_1.outsideSpace.top + 'px';
                        contentBlock.style.left = pos_1 == 'right' ? (posLeft - _this_1.outsideSpace.left) + 'px' : (posLeftL - _this_1.outsideSpace.left) + 'px';
                        _this_1.messageContent.arrowMT = arrowTop + "px";
                    }
                    else {
                        //todo throw error
                        console.warn('defaultPos type olny "right" or "bottom"');
                        return;
                    }
                    _this_1.reRendering(windowBody_1);
                    // this.reRendering(this._elementRef.nativeElement);
                }
                _this_1.messageContent.opacity = true;
                // console.log(this.messageContent.opacity );
            }), 0);
        }
        else {
            this.autoScrollOver = false;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    UiInformationBtnComponent.prototype.btnClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
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
    };
    /**
     * @param {?} dom
     * @return {?}
     */
    UiInformationBtnComponent.prototype.reRendering = /**
     * @param {?} dom
     * @return {?}
     */
    function (dom) {
        // dom.style.transform = "translate(-0.5px)"; // mark: solve mantis 0014345
        // dom.style.width  = "calc(100% + 1px)";
        setTimeout((/**
         * @return {?}
         */
        function () {
            // dom.style.transform = ""; // mark: solve mantis 0014345
            dom.style.width = "";
        }), 10);
    };
    /**
     * @return {?}
     */
    UiInformationBtnComponent.prototype.closeInfo = /**
     * @return {?}
     */
    function () {
        this.messageContent.show = false;
        this.messageContent.opacity = false;
        this.autoScrollOver = false;
        this.reRendering(document.body);
    };
    /**
     * @return {?}
     */
    UiInformationBtnComponent.prototype.setContentPos = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            console.warn('setContentPos', _this);
            if (_this.messageContent != undefined) {
                _this.messageContent.opacity = _this.messageContent.show ? true : false;
                _this.messageContent.show = true;
                _this.btnClick(_this);
                // console.log(this.messageContent.opacity );
                _this.countPos();
            }
        }), 0);
    };
    UiInformationBtnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-information-btn',
                    template: "<div class=\"control-btn\" (click)=\"setContentPos()\" #controlBtnContent >\n  <ng-content></ng-content>\n  <div class=\"info-icon-tab\"\n  [ngClass]=\"{'bottom': messageContent.defaultPos=='bottom',\n              'top'   : messageContent.defaultPos=='top',\n              'show'  : messageContent.show}\">\n    <nx-icon name=\"info-circle\" fill=\"false\" outline=\"false\" size=\"auto\"></nx-icon>\n  </div>\n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-block}:host .info-icon-tab{width:20px;height:20px}:host .info-icon-tab ::ng-deep nx-icon{width:20px;height:20px;border:none;font-size:20px;color:#007ab3;background-color:transparent;line-height:1em}:host .info-icon-tab.bottom{position:relative;display:inline-block}:host .info-icon-tab.show{z-index:11}:host .info-icon-tab:not(:first-child){display:none}"]
                }] }
    ];
    UiInformationBtnComponent.ctorParameters = function () { return [
        { type: UiInformationService }
    ]; };
    UiInformationBtnComponent.propDecorators = {
        messageContent: [{ type: Input }],
        inputScrollContent: [{ type: Input }],
        inputAutoScrollContent: [{ type: Input }],
        crollTopNum: [{ type: Input }],
        onClick: [{ type: Output }],
        outsideSpace: [{ type: Input }],
        btnContent: [{ type: ViewChild, args: ['controlBtnContent',] }]
    };
    return UiInformationBtnComponent;
}());
export { UiInformationBtnComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5mb3JtYXRpb24tYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktaW5mb3JtYXRpb24tYnRuL3VpLWluZm9ybWF0aW9uLWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUFFLG9CQUFvQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDM0csT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEM7SUFtQkUsbUNBQXNCLGtCQUF1QztRQUF2Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXFCO1FBVnBELGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsWUFBTyxHQUFDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsaUJBQVksR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDO1lBQ0wsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXJCLG1CQUFjLEdBQVcsS0FBSyxDQUFDO1FBSzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELDRDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7SUFDRCxrREFBYzs7O0lBQWQ7UUFBQSxtQkF3QkM7O1lBdkJLLFlBQVksR0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUs7O1lBQ3JDLFlBQVksR0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUs7O1lBQ3JDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFB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QUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzs0QkFDM0UsU0FBUyxHQUFHLFlBQVksR0FBQyxDQUFDLFdBQVcsR0FBQyxTQUFTLEdBQUMsQ0FBQyxDQUFDLEdBQUMsT0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7NEJBQzFFLFNBQVMsR0FBRyxTQUFTLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUEsUUFBUTs0QkFDdEcsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsV0FBVyxHQUFFLElBQUksQ0FBQzs0QkFDNUMsT0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxHQUFDLElBQUksQ0FBQzt5QkFDOUM7NkJBQ0ksSUFBRyxPQUFPLEdBQUMsU0FBTyxDQUFDLElBQUksRUFBQzs7Z0NBQ3ZCLFdBQVcsR0FBRyxTQUFPLENBQUMsSUFBSSxHQUFFLE9BQUksQ0FBQyxZQUFZLENBQUMsSUFBSTs0QkFDdEQsU0FBUyxHQUFHLFlBQVksR0FBQyxDQUFDLFdBQVcsR0FBQyxTQUFTLEdBQUMsQ0FBQyxDQUFDLEdBQUMsT0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7NEJBQzFFLFNBQVMsR0FBRyxTQUFTLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxTQUFTLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxTQUFTLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUEsU0FBUyxDQUFDLENBQUEsUUFBUTs0QkFDdEcsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsV0FBVyxHQUFDLElBQUksQ0FBQzs0QkFDM0MsT0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxHQUFDLElBQUksQ0FBQzt5QkFD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QUcsSUFBSSxDQUFDO2dCQUNqQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0Qiw2Q0FBNkM7Z0JBQzdDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNsQjtRQUNILENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQXpQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsZ2JBQWtEOztpQkFFbkQ7OztnQkFQUSxvQkFBb0I7OztpQ0FTMUIsS0FBSztxQ0FDTCxLQUFLO3lDQUNMLEtBQUs7OEJBQ0wsS0FBSzswQkFDTCxNQUFNOytCQUNOLEtBQUs7NkJBT0wsU0FBUyxTQUFDLG1CQUFtQjs7SUF3T2hDLGdDQUFDO0NBQUEsQUExUEQsSUEwUEM7U0FyUFkseUJBQXlCOzs7SUFDcEMsbURBQXNEOztJQUN0RCx1REFBNEI7O0lBQzVCLDJEQUFnQzs7SUFDaEMsZ0RBQXlCOztJQUN6Qiw0Q0FBcUM7O0lBQ3JDLGlEQUNpQzs7SUFDakMsaURBQXFCOztJQUNyQiwrQ0FBVzs7SUFDWCxtREFBK0I7Ozs7O0lBQy9CLHdDQUFZOztJQUVaLCtDQUF1RDs7Ozs7SUFDM0MsdURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVWlJbmZvcm1hdGlvblNlcnZpY2V9IGZyb20gJy4uL3VpLWluZm9ybWF0aW9uL3VpLWluZm9ybWF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVWlJbmZvcm1hdGlvbkNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi91aS1pbmZvcm1hdGlvbi1jb250ZW50L3VpLWluZm9ybWF0aW9uLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1pbmZvcm1hdGlvbi1idG4nLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktaW5mb3JtYXRpb24tYnRuLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktaW5mb3JtYXRpb24tYnRuLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlJbmZvcm1hdGlvbkJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG1lc3NhZ2VDb250ZW50OlVpSW5mb3JtYXRpb25Db250ZW50Q29tcG9uZW50O1xuICBASW5wdXQoKSBpbnB1dFNjcm9sbENvbnRlbnQ7XG4gIEBJbnB1dCgpIGlucHV0QXV0b1Njcm9sbENvbnRlbnQ7XG4gIEBJbnB1dCgpIGNyb2xsVG9wTnVtID0gMDtcbiAgQE91dHB1dCgpIG9uQ2xpY2s9bmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBvdXRzaWRlU3BhY2UgPSB7dG9wOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjB9O1xuICBvbkF1dG9TY3JvbGwgPSBmYWxzZTtcbiAgc2Nyb2xsRGF0YTtcbiAgYXV0b1Njcm9sbE92ZXI6Ym9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pZDsgLy8gaWQgZm9yIGluZm9cblxuICBAVmlld0NoaWxkKCdjb250cm9sQnRuQ29udGVudCcpIGJ0bkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpbmZvcm1hdGlvblNlcnZpY2U6VWlJbmZvcm1hdGlvblNlcnZpY2UpIHsgXG4gICAgdGhpcy5faWQgPSB1dWlkKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgICAgXG4gICAgXG4gIH1cbiAgc2Nyb2xsRnVuY3Rpb24oKXtcbiAgICBsZXQgc2Nyb2xsVG9wT2xkICA9IHRoaXMuc2Nyb2xsRGF0YS5TVE9sZCxcbiAgICAgICAgc2Nyb2xsVG9wQWRkICA9IHRoaXMuc2Nyb2xsRGF0YS5TVEFkZCxcbiAgICAgICAgc2Nyb2xsQ29udGVudCA9IHRoaXMuc2Nyb2xsRGF0YS5TQyxcbiAgICAgICAgc2Nyb2xsTGVmdCAgICA9IHRoaXMuc2Nyb2xsRGF0YS5zY3JvbGxMZWZ0LFxuICAgICAgICBudW0gPSBzY3JvbGxUb3BBZGQvNTY7XG4gICAgbGV0IGNvdW50TnVtID0gMTtcbiAgICBsZXQgbnVtU2V0ID0gbnVtO1xuICAgIC8vIGNvbnNvbGUubG9nKHNjcm9sbENvbnRlbnQuc2Nyb2xsVG8oMCwwKSk7XG4gICAgdmFyIHNjcm9sbEVmZmVjdCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICBudW1TZXQgPSBudW1TZXQrKG51bSpjb3VudE51bSk+PXNjcm9sbFRvcEFkZD9zY3JvbGxUb3BBZGQ6bnVtU2V0KyhudW0qY291bnROdW0pO1xuICAgICAgY291bnROdW0rKztcbiAgICAgIHNjcm9sbENvbnRlbnQuc2Nyb2xsVG8oc2Nyb2xsTGVmdCxzY3JvbGxUb3BPbGQrbnVtU2V0KTtcblxuICAgICAgLy8gY29uc29sZS5sb2coc2Nyb2xsVG9wT2xkLG51bVNldCk7XG4gICAgICBpZihudW1TZXQ+PShzY3JvbGxUb3BBZGQpKXtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzY3JvbGxFZmZlY3QpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgdGhpcy5vbkF1dG9TY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmF1dG9TY3JvbGxPdmVyID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnJlUmVuZGVyaW5nKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICB9LDApO1xuICAgICAgfVxuICAgIH0sNSk7XG4gIH1cbiAgZ2V0U2Nyb2xsVG9wKCl7XG4gICAgdmFyIGJvZHlUb3AgPSAwO1xuICAgIGlmICh0eXBlb2Ygd2luZG93LnBhZ2VZT2Zmc2V0ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGJvZHlUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQuY29tcGF0TW9kZSAhPSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAmJiBkb2N1bWVudC5jb21wYXRNb2RlICE9IFwiQmFja0NvbXBhdFwiKSB7XG4gICAgICBib2R5VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGJvZHlUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd3ZXdld2UnKTtcbiAgICB9XG4gICAgcmV0dXJuIGJvZHlUb3A7XG4gIH1cbiAgY291bnRQb3MoKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VDb250ZW50LHRoaXMubWVzc2FnZUNvbnRlbnQuc2hvdyk7XG5cbiAgICBpZih0aGlzLm1lc3NhZ2VDb250ZW50ICE9IHVuZGVmaW5lZCAmJiB0aGlzLm1lc3NhZ2VDb250ZW50LnNob3cpe1xuICAgICAgLy8gY29uc29sZS5sb2coJ3dvcmsnKTtcbiAgICAgIGxldCBzY3JvbGxDb250ZW50ID0gdGhpcy5pbnB1dFNjcm9sbENvbnRlbnQhPXVuZGVmaW5lZD90aGlzLmlucHV0U2Nyb2xsQ29udGVudDpkb2N1bWVudC5ib2R5O1xuICAgICAgbGV0IGF1dG9TY3JvbGxDb250ZW50ID0gdGhpcy5pbnB1dEF1dG9TY3JvbGxDb250ZW50IT11bmRlZmluZWQ/dGhpcy5pbnB1dEF1dG9TY3JvbGxDb250ZW50OmZhbHNlO1xuICAgICAgY29uc29sZS5sb2coJ2luIGluZm9ybWF0aW9uIGJ0bicsIHNjcm9sbENvbnRlbnQpO1xuICAgICAgbGV0IHNjcm9sbENvbnRlbnRTaXplID0gc2Nyb2xsQ29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdpbiBpbmZvcm1hdGlvbiBidG4gc2Nyb2xsQ29udGVudFNpemUnLCBzY3JvbGxDb250ZW50U2l6ZSk7XG4gICAgICBsZXQgcGFnZVNpemUgPSBzY3JvbGxDb250ZW50LnNjcm9sbEhlaWdodCxcbiAgICAgICAgICB3aW5kb3dCb2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgICAgICB3aW5kb3dXID0gd2luZG93Qm9keS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICB3aW5kb3dJbm5lckggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB0aGlzLm1lc3NhZ2VDb250ZW50LmNvbnRyb2xCdG4gPSB0aGlzLmJ0bkNvbnRlbnQ7XG4gICAgICBsZXQgYnRuRG9tID0gdGhpcy5idG5Db250ZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgYnRuU2l6ZSA9IGJ0bkRvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGxldCBwb3M6c3RyaW5nID0gdGhpcy5tZXNzYWdlQ29udGVudC5kZWZhdWx0UG9zO1xuICAgICAgbGV0IHBhZGRpbmcgPSB0aGlzLm1lc3NhZ2VDb250ZW50LnBhZGRpbmREYXRhO1xuICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICBsZXQgY29udGVudE1zZyA9IHRoaXMubWVzc2FnZUNvbnRlbnQuY29udHJvbENvbnRlbnRQb3N0aW9uKCk7Ly/pgb/lhY3pgZ7ov7Tlh7rnj77pjK/oqqRcbiAgICAgICAgbGV0IGNvbnRlbnRCbG9jayA9IGNvbnRlbnRNc2chPXVuZGVmaW5lZD8gY29udGVudE1zZy5kb206ZmFsc2U7Ly/pgb/lhY3pgZ7ov7Tlh7rnj77pjK/oqqRcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgaWYoY29udGVudEJsb2NrKXtcbiAgICAgICAgICBsZXQgaW5mb1NpemUgPSBjb250ZW50TXNnLmluZm9Eb21TaXplLFxuICAgICAgICAgICAgICBpbmZvU2l6ZVcgPSBpbmZvU2l6ZS53aWR0aCxcbiAgICAgICAgICAgICAgaW5mb1NpemVIID0gaW5mb1NpemUuaGVpZ2h0O1xuICAgICAgICAgIGxldCBidG5TaXplUiA9IGJ0blNpemUucmlnaHQsXG4gICAgICAgICAgICAgIGJ0blNpemVMID0gYnRuU2l6ZS5sZWZ0O1xuICAgICAgICAgIGxldCBidG5DZW50ZXJQb3MgPSBidG5TaXplLmxlZnQgKyAoYnRuU2l6ZS53aWR0aC8yKTtcbiAgICAgICAgICBsZXQgYnRuQ2VudGVySFBvcyA9IGJ0blNpemUudG9wICsgKGJ0blNpemUuaGVpZ2h0LzIpO1xuICAgICAgICAgIGxldCBzY3JvbGxUb3BOdW0gPSB0aGlzLmNyb2xsVG9wTnVtPyB0aGlzLmNyb2xsVG9wTnVtOnRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3Njcm9sbFRvcE51bScsIHNjcm9sbFRvcE51bSk7XG4gICAgICAgICAgbGV0IHNjcm9sbFRvcE9sZE51bSA9IGF1dG9TY3JvbGxDb250ZW50P2F1dG9TY3JvbGxDb250ZW50LnNjcm9sbFRvcDpzY3JvbGxUb3BOdW07XG4gICAgICAgICAgY29uc29sZS5sb2coJ3Njcm9sbFRvcE9sZE51bScsIHNjcm9sbFRvcE9sZE51bSk7XG4gICAgICAgICAgbGV0IHNjcm9sbExlZnQgPSBhdXRvU2Nyb2xsQ29udGVudD9hdXRvU2Nyb2xsQ29udGVudC5zY3JvbGxMZWZ0OjA7XG4gICAgICAgICAgbGV0IHNjcm9sbENvbnRlbnRTaXplID0gc2Nyb2xsQ29udGVudCE9dW5kZWZpbmVkP3Njcm9sbENvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6ZmFsc2U7XG4gICAgICAgICAgaWYocG9zID09ICdib3R0b20nKXsgLy/pgb/lhY3pgZ7ov7Tlh7rnj77pjK/oqqRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ0bkNlbnRlclBvcyxpbmZvU2l6ZVcpO1xuICAgICAgICAgICAgbGV0IHBvc0xlZnQgPSAoYnRuQ2VudGVyUG9zIC0gKGluZm9TaXplVy8yKSkgLFxuICAgICAgICAgICAgICAgIHBvc1RvcCAgPSAoc2Nyb2xsVG9wTnVtK2J0blNpemUudG9wK2J0blNpemUuaGVpZ2h0KzIpLXRoaXMub3V0c2lkZVNwYWNlLnRvcDtcblxuICAgICAgICAgICAgY29udGVudEJsb2NrLnN0eWxlLnRvcCAgPSBwb3NUb3ArJ3B4JztcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUNvbnRlbnQuYXJyb3dNTCA9IFwiMHB4XCI7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmZvIHBvcycsc2Nyb2xsVG9wTnVtLGJ0blNpemUudG9wLGJ0blNpemUuaGVpZ2h0LHRoaXMub3V0c2lkZVNwYWNlLnRvcCk7XG4gICAgICAgICAgICAvL+WIpOaWt+aWueWQkVxuICAgICAgICAgICAgbGV0IGFycm93TGVmdCA9IDAsXG4gICAgICAgICAgICAgICAgYXJyb3dMZWZ0VyA9IDE0O1xuICAgICAgICAgICAgaWYoKHBvc0xlZnQraW5mb1NpemVXK3BhZGRpbmcucmlnaHQpPndpbmRvd1cgKXtcbiAgICAgICAgICAgICAgbGV0IG5ld0luZm9MZWZ0ID0gKHdpbmRvd1ctaW5mb1NpemVXLXBhZGRpbmcucmlnaHQtIHRoaXMub3V0c2lkZVNwYWNlLmxlZnQpO1xuICAgICAgICAgICAgICBhcnJvd0xlZnQgPSBidG5DZW50ZXJQb3MtKG5ld0luZm9MZWZ0K2luZm9TaXplVy8yKS10aGlzLm91dHNpZGVTcGFjZS5sZWZ0O1xuICAgICAgICAgICAgICBhcnJvd0xlZnQgPSBhcnJvd0xlZnQgPD0gKChpbmZvU2l6ZVcvMikgLSBhcnJvd0xlZnRXKT8gYXJyb3dMZWZ0OigoaW5mb1NpemVXLzIpIC0gYXJyb3dMZWZ0Vyk7Ly/pgb/lhY3nrq3poK3noLTniYhcbiAgICAgICAgICAgICAgY29udGVudEJsb2NrLnN0eWxlLmxlZnQgPSBuZXdJbmZvTGVmdCArJ3B4JztcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ29udGVudC5hcnJvd01MID0gYXJyb3dMZWZ0K1wicHhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYocG9zTGVmdDxwYWRkaW5nLmxlZnQpe1xuICAgICAgICAgICAgICBsZXQgbmV3SW5mb0xlZnQgPSBwYWRkaW5nLmxlZnQtIHRoaXMub3V0c2lkZVNwYWNlLmxlZnQ7XG4gICAgICAgICAgICAgIGFycm93TGVmdCA9IGJ0bkNlbnRlclBvcy0obmV3SW5mb0xlZnQraW5mb1NpemVXLzIpLXRoaXMub3V0c2lkZVNwYWNlLmxlZnQ7XG4gICAgICAgICAgICAgIGFycm93TGVmdCA9IGFycm93TGVmdCA8PSAoYXJyb3dMZWZ0VyAtIChpbmZvU2l6ZVcvMikpPyAoYXJyb3dMZWZ0VyAtIChpbmZvU2l6ZVcvMikpOmFycm93TGVmdDsvL+mBv+WFjeeuremgreegtOeJiFxuICAgICAgICAgICAgICBjb250ZW50QmxvY2suc3R5bGUubGVmdCA9IG5ld0luZm9MZWZ0KydweCc7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZUNvbnRlbnQuYXJyb3dNTCA9IGFycm93TGVmdCtcInB4XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBjb250ZW50QmxvY2suc3R5bGUubGVmdCA9IHBvc0xlZnQgLSB0aGlzLm91dHNpZGVTcGFjZS5sZWZ0KydweCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB0b3BTcGFjZSA9IGluZm9TaXplSCsocG9zVG9wLXNjcm9sbFRvcE51bSk7XG4gICAgICAgICAgICAvL+WIpOaWt2luZm8gYnRu5piv5ZCm6LaF6YGO55Wr6Z2iXG4gICAgICAgICAgICBpZihzY3JvbGxDb250ZW50U2l6ZSAmJiBidG5DZW50ZXJQb3M8c2Nyb2xsQ29udGVudFNpemUubGVmdCB8fFxuICAgICAgICAgICAgICBzY3JvbGxDb250ZW50U2l6ZSAmJiBidG5DZW50ZXJQb3M+c2Nyb2xsQ29udGVudFNpemUucmlnaHR8fFxuICAgICAgICAgICAgICBzY3JvbGxDb250ZW50U2l6ZSAmJiAoYnRuU2l6ZS50b3ArYnRuU2l6ZS5oZWlnaHQvMikgPCBzY3JvbGxDb250ZW50U2l6ZS50b3Ape1xuICAgICAgICAgICAgICB0aGlzLmNsb3NlSW5mbygpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+WIpOaWt2luZm8gY29udGVudOaYr+WQpui2hemBjueVq+mdolxuICAgICAgICAgICAgaWYodG9wU3BhY2U+d2luZG93SW5uZXJIICYmICF0aGlzLm9uQXV0b1Njcm9sbCl7XG4gICAgICAgICAgICAgIC8v5Yik5pa36Ieq5YuV5ruR5a6M77yM5Zyo5ruR5pmC6Ieq5YuV6Zec6ZaJXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXV0b1Njcm9sbE92ZXIpO1xuICAgICAgICAgICAgICBpZih0aGlzLmF1dG9TY3JvbGxPdmVyKXtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaWlpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUluZm8oKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXV0b1Njcm9sbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy/pgIHlh7rmu5Hli5Xlj4PmlbhcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWFhJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgU1RPbGQ6c2Nyb2xsVG9wT2xkTnVtLFxuICAgICAgICAgICAgICAgICAgU1RBZGQ6dG9wU3BhY2UgLSB3aW5kb3dJbm5lckggKyBwYWRkaW5nLmJvdHRvbSxcbiAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQ6c2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICAgIFNDOmF1dG9TY3JvbGxDb250ZW50P3RoaXMuaW5wdXRBdXRvU2Nyb2xsQ29udGVudDp3aW5kb3dcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxGdW5jdGlvbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYocG9zID09ICdyaWdodCd8fHBvcyA9PSAnbGVmdCcpe1xuICAgICAgICAgICAgbGV0IHBvc0xlZnQgPSAoYnRuU2l6ZVIrNSkgLFxuICAgICAgICAgICAgICAgIHBvc0xlZnRMID0gKGJ0blNpemVMLTUtaW5mb1NpemVXKSxcbiAgICAgICAgICAgICAgICBwb3NUb3AgID0gYnRuQ2VudGVySFBvcy1pbmZvU2l6ZUgvMjtcbiAgICAgICAgICAgIGxldCBhcnJvd1RvcCA9IDAsXG4gICAgICAgICAgICAgICAgYXJyb3dUb3BIID0gMTQ7XG5cbiAgICAgICAgICAgIGlmKChwb3NUb3AraW5mb1NpemVIKSA+ICh3aW5kb3dJbm5lckgtcGFkZGluZy5ib3R0b20pKXtcbiAgICAgICAgICAgICAgbGV0IHBvc09Ub3AgPSBwb3NUb3A7XG4gICAgICAgICAgICAgIHBvc1RvcCA9IHBvc1RvcCAtIChwb3NUb3AraW5mb1NpemVILSh3aW5kb3dJbm5lckgtcGFkZGluZy5ib3R0b20pKTtcbiAgICAgICAgICAgICAgYXJyb3dUb3AgPSAocG9zT1RvcC1wb3NUb3ApPihpbmZvU2l6ZUgvMi1hcnJvd1RvcEgpP2luZm9TaXplSC8yLWFycm93VG9wSDoocG9zT1RvcC1wb3NUb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoKHBvc1RvcCk8cGFkZGluZy50b3Ape1xuICAgICAgICAgICAgICBsZXQgcG9zT1RvcCA9IHBvc1RvcDtcbiAgICAgICAgICAgICAgcG9zVG9wID0gcGFkZGluZy50b3A7XG4gICAgICAgICAgICAgIGFycm93VG9wID0gcG9zT1RvcC1wb3NUb3A8YXJyb3dUb3BILWluZm9TaXplSC8yP2Fycm93VG9wSC1pbmZvU2l6ZUgvMjpwb3NPVG9wLXBvc1RvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcyA9IHBvc0xlZnQraW5mb1NpemVXID4gKHdpbmRvd1cgLSBwYWRkaW5nLnJpZ2h0KT8nbGVmdCc6J3JpZ2h0JztcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUNvbnRlbnQuZGVmYXVsdFBvcyA9IHBvcztcbiAgICAgICAgICAgIGNvbnRlbnRCbG9jay5zdHlsZS50b3AgPSBwb3NUb3Arc2Nyb2xsVG9wT2xkTnVtLXRoaXMub3V0c2lkZVNwYWNlLnRvcCsncHgnO1xuICAgICAgICAgICAgY29udGVudEJsb2NrLnN0eWxlLmxlZnQgPSBwb3MgPT0gJ3JpZ2h0Jz8gKHBvc0xlZnQtIHRoaXMub3V0c2lkZVNwYWNlLmxlZnQpKydweCc6IChwb3NMZWZ0TC0gdGhpcy5vdXRzaWRlU3BhY2UubGVmdCkrJ3B4JztcblxuXG5cblxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ29udGVudC5hcnJvd01UID0gYXJyb3dUb3ArXCJweFwiO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvL3RvZG8gdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignZGVmYXVsdFBvcyB0eXBlIG9sbnkgXCJyaWdodFwiIG9yIFwiYm90dG9tXCInKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZVJlbmRlcmluZyh3aW5kb3dCb2R5KTtcbiAgICAgICAgICAvLyB0aGlzLnJlUmVuZGVyaW5nKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZXNzYWdlQ29udGVudC5vcGFjaXR5ID0gdHJ1ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tZXNzYWdlQ29udGVudC5vcGFjaXR5ICk7XG4gICAgICB9LDApO1xuICAgIH1cbiAgICBlbHNle1xuXG4gICAgICB0aGlzLmF1dG9TY3JvbGxPdmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGJ0bkNsaWNrKGUpe1xuICAgIHRoaXMub25DbGljay5lbWl0KGUpOyAgICBcbiAgICAvLyBpZih0aGlzLm1lc3NhZ2VDb250ZW50LnNob3cpe1xuICAgICAgICB0aGlzLmluZm9ybWF0aW9uU2VydmljZS5jbG9zZU90aGVycyh0aGlzLl9pZCk7XG4gICAgICAgIC8vIHRoaXMuaW5mb3JtYXRpb25TZXJ2aWNlLmdldENsb3NlQWN0aW9uKCkuc3Vic2NyaWJlKChpZCkgPT4ge1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdfaWQ6Jyx0aGlzLl9pZCwgJ2lkJywgaWQpO1xuICAgICAgICAvLyAgIGlmKHRoaXMuX2lkICE9PSBpZCl7XG4gICAgICAgIC8vICAgICB0aGlzLmNsb3NlSW5mbygpO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIGFsZXJ0KFwidGhpcy5faWQ6XCIrdGhpcy5faWQpO1xuICAgIC8vIH1cbiAgfVxuICByZVJlbmRlcmluZyhkb20pe1xuICAgIC8vIGRvbS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtMC41cHgpXCI7IC8vIG1hcms6IHNvbHZlIG1hbnRpcyAwMDE0MzQ1XG4gICAvLyBkb20uc3R5bGUud2lkdGggID0gXCJjYWxjKDEwMCUgKyAxcHgpXCI7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgLy8gZG9tLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7IC8vIG1hcms6IHNvbHZlIG1hbnRpcyAwMDE0MzQ1XG4gICAgICBkb20uc3R5bGUud2lkdGggID0gXCJcIjtcbiAgICB9LDEwKTtcbiAgfVxuICBjbG9zZUluZm8oKXtcbiAgICB0aGlzLm1lc3NhZ2VDb250ZW50LnNob3cgPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VDb250ZW50Lm9wYWNpdHkgPSBmYWxzZTtcbiAgICB0aGlzLmF1dG9TY3JvbGxPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5yZVJlbmRlcmluZyhkb2N1bWVudC5ib2R5KTtcbiAgfVxuICBzZXRDb250ZW50UG9zKCl7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICBjb25zb2xlLndhcm4oJ3NldENvbnRlbnRQb3MnLCBfdGhpcyk7XG5cbiAgICAgIGlmKF90aGlzLm1lc3NhZ2VDb250ZW50ICE9IHVuZGVmaW5lZCl7XG4gICAgICAgIF90aGlzLm1lc3NhZ2VDb250ZW50Lm9wYWNpdHkgPSBfdGhpcy5tZXNzYWdlQ29udGVudC5zaG93PyB0cnVlOmZhbHNlO1xuICAgICAgICBfdGhpcy5tZXNzYWdlQ29udGVudC5zaG93ID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuYnRuQ2xpY2soX3RoaXMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VDb250ZW50Lm9wYWNpdHkgKTtcbiAgICAgICAgX3RoaXMuY291bnRQb3MoKTtcbiAgICAgIH1cbiAgICB9LDApO1xuICB9XG59XG4iXX0=