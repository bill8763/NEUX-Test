/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input, ChangeDetectionStrategy, ChangeDetectorRef, HostListener } from '@angular/core';
import { ModalManager } from '../ui-modal-control/modal-manager.service';
import { v4 as uuid } from 'uuid';
var UiModalBaseComponent = /** @class */ (function () {
    function UiModalBaseComponent(modalManager, changeDector) {
        this.modalManager = modalManager;
        this.changeDector = changeDector;
        this.isScrollToTop = false;
        this.isContnetFull = false;
        this.isMobileBtmBtnFix = true; // if mobile btm btn fix, if true btn fix on mobile; else not fix on mobile
        this.isModalBtmHasSpace = true; // true-> 30px; false -> 0px
        this.classMobileBtnNoFix = '';
        this.windowWidth = window.innerWidth;
        this.styleModelBtm = '';
        this._modalID = uuid();
    }
    /**
     * @return {?}
     */
    UiModalBaseComponent.prototype.renderBtmSpace = /**
     * @return {?}
     */
    function () {
        this.styleModelBtm = this.isModalBtmHasSpace ? '' : 'style-btm-no-space';
    };
    // check if modal open or not
    // check if modal open or not
    /**
     * @param {?} isPopupOpenStatus
     * @return {?}
     */
    UiModalBaseComponent.prototype.checkModalOpenStatus = 
    // check if modal open or not
    /**
     * @param {?} isPopupOpenStatus
     * @return {?}
     */
    function (isPopupOpenStatus) {
        console.log('checkModalOpenStatus', isPopupOpenStatus);
        if (isPopupOpenStatus) {
            console.log('in if isPopupOpenStatus');
            this.modalManager.pushModal(this._modalID, this);
            //call add class fuction
            this.ModalOpenGlobalControl();
        }
        else {
            /** @type {?} */
            var isLast = this.modalManager.dismissModal(this._modalID);
            if (isLast) {
                //call remove class function
                this.ModalCloseGlobalControl();
            }
            console.log('isLast', isLast);
        }
    }; // end: checkModalOpenStatus
    // control interface if modal open
    // end: checkModalOpenStatus
    // control interface if modal open
    /**
     * @return {?}
     */
    UiModalBaseComponent.prototype.ModalOpenGlobalControl = 
    // end: checkModalOpenStatus
    // control interface if modal open
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // let body fixed
        document.body.classList.add("fixed-body-full-page");
        /** @type {?} */
        var stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
        /** @type {?} */
        var stopScrollBlock_calendar = document.body.getElementsByClassName('cal-month-view');
        console.log('ModalOpenGlobalControl', stopScrollBlock);
        // let back area which can scroll not scroll
        setTimeout((/**
         * @return {?}
         */
        function () {
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
            // need to scroll to top
            /** @type {?} */
            var modalContentBlock_ele = _this.modalBlock ? _this.modalBlock.nativeElement.querySelector('div.modal-content-block') : null;
            console.warn('modalBlock_ele', modalContentBlock_ele);
            if (_this.isScrollToTop && modalContentBlock_ele !== null) {
                modalContentBlock_ele.scrollTop = 0;
            }
        }), 100); // end of settimeout
    }; // end: ModalOpenGlobalControl
    // control interface if modal close
    // end: ModalOpenGlobalControl
    // control interface if modal close
    /**
     * @return {?}
     */
    UiModalBaseComponent.prototype.ModalCloseGlobalControl = 
    // end: ModalOpenGlobalControl
    // control interface if modal close
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
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
            if (stopScrollBlock_calendar.length != 0) {
                stopScrollBlock_calendar[0].classList.remove('no-scroll');
            }
        }), 500);
    }; // end: ModalCloseGlobalControl 
    // end: ModalCloseGlobalControl 
    /**
     * @param {?} event
     * @return {?}
     */
    UiModalBaseComponent.prototype.onresize = 
    // end: ModalCloseGlobalControl 
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = event.target.innerWidth;
        this.classMobileBtnNoFix = this.isMobileBtmBtnFix ? '' : 'style-mobile-btn-no-fix';
        this.isShowFixBtmTemp = this.windowWidth >= 1024 || this.windowWidth < 1024 && this.isMobileBtmBtnFix;
    };
    /**
     * @return {?}
     */
    UiModalBaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
        this.classMobileBtnNoFix = this.isMobileBtmBtnFix ? '' : 'style-mobile-btn-no-fix';
        this.classContentFull = this.isContnetFull ? ' layout-full' : '';
        this.isShowFixBtmTemp = this.windowWidth >= 1024 || this.windowWidth < 1024 && this.isMobileBtmBtnFix;
        this.renderBtmSpace();
    };
    /**
     * @return {?}
     */
    UiModalBaseComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isLast = this.modalManager.dismissModal(this._modalID);
        if (isLast) {
            this.ModalCloseGlobalControl();
        }
    }; // end: ngOnDestroy 
    // end: ngOnDestroy 
    /**
     * @return {?}
     */
    UiModalBaseComponent.prototype.closeHandler = 
    // end: ngOnDestroy 
    /**
     * @return {?}
     */
    function () {
    };
    UiModalBaseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-modal-base',
                    template: "\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    UiModalBaseComponent.ctorParameters = function () { return [
        { type: ModalManager },
        { type: ChangeDetectorRef }
    ]; };
    UiModalBaseComponent.propDecorators = {
        modalBlock: [{ type: ViewChild, args: ['modalBlock',] }],
        isScrollToTop: [{ type: Input }],
        isContnetFull: [{ type: Input }],
        isMobileBtmBtnFix: [{ type: Input }],
        isModalBtmHasSpace: [{ type: Input }],
        onresize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UiModalBaseComponent;
}());
export { UiModalBaseComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UiModalBaseComponent.prototype._modalID;
    /** @type {?} */
    UiModalBaseComponent.prototype.modalBlock;
    /** @type {?} */
    UiModalBaseComponent.prototype.isScrollToTop;
    /** @type {?} */
    UiModalBaseComponent.prototype.isContnetFull;
    /** @type {?} */
    UiModalBaseComponent.prototype.isMobileBtmBtnFix;
    /** @type {?} */
    UiModalBaseComponent.prototype.isModalBtmHasSpace;
    /** @type {?} */
    UiModalBaseComponent.prototype.classMobileBtnNoFix;
    /** @type {?} */
    UiModalBaseComponent.prototype.windowWidth;
    /** @type {?} */
    UiModalBaseComponent.prototype.isShowFixBtmTemp;
    /** @type {?} */
    UiModalBaseComponent.prototype.styleModelBtm;
    /** @type {?} */
    UiModalBaseComponent.prototype.classContentFull;
    /** @type {?} */
    UiModalBaseComponent.prototype.classModalFix;
    /**
     * @type {?}
     * @protected
     */
    UiModalBaseComponent.prototype.modalManager;
    /**
     * @type {?}
     * @protected
     */
    UiModalBaseComponent.prototype.changeDector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbW9kYWwtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLW1vZGFsLWJhc2UvdWktbW9kYWwtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQWEsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JKLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQztJQXNCRSw4QkFDWSxZQUEwQixFQUMxQixZQUErQjtRQUQvQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFkbEMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0Isc0JBQWlCLEdBQUcsSUFBSSxDQUFDLENBQUUsMkVBQTJFO1FBQ3RHLHVCQUFrQixHQUFHLElBQUksQ0FBQyxDQUFDLDRCQUE0QjtRQUN6RCx3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRWhDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBU3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDZDQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO0lBQzNFLENBQUM7SUFHRCw2QkFBNkI7Ozs7OztJQUM3QixtREFBb0I7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SSxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3RHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBQ0QsMENBQVc7OztJQUFYOztZQUNNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzFELElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDLEVBQUMsb0JBQW9COzs7OztJQUd0QiwyQ0FBWTs7Ozs7SUFBWjtJQUVBLENBQUM7O2dCQTNJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsY0FBNkM7b0JBRTdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7OztnQkFSUSxZQUFZO2dCQUQ4RCxpQkFBaUI7Ozs2QkFhakcsU0FBUyxTQUFDLFlBQVk7Z0NBQ3RCLEtBQUs7Z0NBQ0wsS0FBSztvQ0FDTCxLQUFLO3FDQUNMLEtBQUs7MkJBdUdMLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBMEIzQywyQkFBQztDQUFBLEFBOUlELElBOElDO1NBeElZLG9CQUFvQjs7Ozs7O0lBRS9CLHdDQUFpQjs7SUFDakIsMENBQWdEOztJQUNoRCw2Q0FBd0M7O0lBQ3hDLDZDQUF3Qzs7SUFDeEMsaURBQWtDOztJQUNsQyxrREFBbUM7O0lBQ25DLG1EQUFnQzs7SUFDaEMsMkNBQXVDOztJQUN2QyxnREFBaUM7O0lBQ2pDLDZDQUEwQjs7SUFDMUIsZ0RBQWdDOztJQUNoQyw2Q0FBNkI7Ozs7O0lBSTNCLDRDQUFvQzs7Ozs7SUFDcEMsNENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsTWFuYWdlciB9IGZyb20gJy4uL3VpLW1vZGFsLWNvbnRyb2wvbW9kYWwtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25kLXVpLW1vZGFsLWJhc2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktbW9kYWwtYmFzZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLW1vZGFsLWJhc2UuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlNb2RhbEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfbW9kYWxJRDtcbiAgQFZpZXdDaGlsZCgnbW9kYWxCbG9jaycpIG1vZGFsQmxvY2s6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIGlzU2Nyb2xsVG9Ub3A6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNDb250bmV0RnVsbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc01vYmlsZUJ0bUJ0bkZpeCA9IHRydWU7ICAvLyBpZiBtb2JpbGUgYnRtIGJ0biBmaXgsIGlmIHRydWUgYnRuIGZpeCBvbiBtb2JpbGU7IGVsc2Ugbm90IGZpeCBvbiBtb2JpbGVcbiAgQElucHV0KCkgaXNNb2RhbEJ0bUhhc1NwYWNlID0gdHJ1ZTsgLy8gdHJ1ZS0+IDMwcHg7IGZhbHNlIC0+IDBweFxuICBwdWJsaWMgY2xhc3NNb2JpbGVCdG5Ob0ZpeCA9ICcnO1xuICBwdWJsaWMgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgcHVibGljIGlzU2hvd0ZpeEJ0bVRlbXA6IGJvb2xlYW47XG4gIHB1YmxpYyBzdHlsZU1vZGVsQnRtID0gJyc7XG4gIHB1YmxpYyBjbGFzc0NvbnRlbnRGdWxsOiBzdHJpbmc7IC8vIHN0eWxlIGNvbnRlbnQgZnVsbFxuICBwdWJsaWMgY2xhc3NNb2RhbEZpeDogc3RyaW5nOyAvLyB0cnVlOiBzdHlsZS1tb2RhbC1maXhlZCA9PT4gb3ZlciBoZWlnaHQgNjAwIGZpeGVkLCAgIGZhbHNlIDogJyAnO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyLFxuICAgIHByb3RlY3RlZCBjaGFuZ2VEZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICB0aGlzLl9tb2RhbElEID0gdXVpZCgpO1xuICB9XG5cbiAgcmVuZGVyQnRtU3BhY2UoKXtcbiAgICB0aGlzLnN0eWxlTW9kZWxCdG0gPSB0aGlzLmlzTW9kYWxCdG1IYXNTcGFjZSA/ICcnIDogJ3N0eWxlLWJ0bS1uby1zcGFjZSc7XG4gIH1cblxuXG4gIC8vIGNoZWNrIGlmIG1vZGFsIG9wZW4gb3Igbm90XG4gIGNoZWNrTW9kYWxPcGVuU3RhdHVzKGlzUG9wdXBPcGVuU3RhdHVzKSB7XG4gICAgY29uc29sZS5sb2coJ2NoZWNrTW9kYWxPcGVuU3RhdHVzJywgaXNQb3B1cE9wZW5TdGF0dXMpO1xuICAgIGlmIChpc1BvcHVwT3BlblN0YXR1cykge1xuICAgICAgY29uc29sZS5sb2coJ2luIGlmIGlzUG9wdXBPcGVuU3RhdHVzJyk7XG4gICAgICB0aGlzLm1vZGFsTWFuYWdlci5wdXNoTW9kYWwodGhpcy5fbW9kYWxJRCwgdGhpcyk7XG4gICAgICAvL2NhbGwgYWRkIGNsYXNzIGZ1Y3Rpb25cbiAgICAgIHRoaXMuTW9kYWxPcGVuR2xvYmFsQ29udHJvbCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBpc0xhc3QgPSB0aGlzLm1vZGFsTWFuYWdlci5kaXNtaXNzTW9kYWwodGhpcy5fbW9kYWxJRCk7XG4gICAgICBpZiAoaXNMYXN0KSB7XG4gICAgICAgIC8vY2FsbCByZW1vdmUgY2xhc3MgZnVuY3Rpb25cbiAgICAgICAgdGhpcy5Nb2RhbENsb3NlR2xvYmFsQ29udHJvbCgpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ2lzTGFzdCcsIGlzTGFzdCk7XG4gICAgfVxuXG4gIH0gIC8vIGVuZDogY2hlY2tNb2RhbE9wZW5TdGF0dXNcblxuXG4gIC8vIGNvbnRyb2wgaW50ZXJmYWNlIGlmIG1vZGFsIG9wZW5cbiAgTW9kYWxPcGVuR2xvYmFsQ29udHJvbCgpIHtcblxuICAgIC8vIGxldCBib2R5IGZpeGVkXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZml4ZWQtYm9keS1mdWxsLXBhZ2VcIik7XG5cbiAgICBsZXQgc3RvcFNjcm9sbEJsb2NrID0gZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9wLXNjcm9sbC1ibG9jaycpO1xuICAgIGxldCBzdG9wU2Nyb2xsQmxvY2tfY2FsZW5kYXIgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbC1tb250aC12aWV3Jyk7XG4gICAgY29uc29sZS5sb2coJ01vZGFsT3Blbkdsb2JhbENvbnRyb2wnLCBzdG9wU2Nyb2xsQmxvY2spO1xuXG4gICAgLy8gbGV0IGJhY2sgYXJlYSB3aGljaCBjYW4gc2Nyb2xsIG5vdCBzY3JvbGxcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChzdG9wU2Nyb2xsQmxvY2subGVuZ3RoICE9IDApIHtcbiAgICAgICAgLy8gaW4gZXZlcnkgc3RvcC1zY3JvbGwtYmxvY2sgY2xhc3MgYWRkIG5vLXNjcm9sbFxuICAgICAgICBbXS5mb3JFYWNoLmJpbmQoc3RvcFNjcm9sbEJsb2NrLCBmdW5jdGlvbiAoaXRtKSB7XG4gICAgICAgICAgaXRtLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xuICAgICAgICB9KSgpO1xuICAgICAgfVxuICAgICAgaWYgKHN0b3BTY3JvbGxCbG9ja19jYWxlbmRhci5sZW5ndGggIT0gMCl7XG4gICAgICAgIHN0b3BTY3JvbGxCbG9ja19jYWxlbmRhclswXS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcbiAgICAgIH1cblxuICAgICAgLy8gbmVlZCB0byBzY3JvbGwgdG8gdG9wXG4gICAgICBsZXQgbW9kYWxDb250ZW50QmxvY2tfZWxlID0gdGhpcy5tb2RhbEJsb2NrID8gdGhpcy5tb2RhbEJsb2NrLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2Lm1vZGFsLWNvbnRlbnQtYmxvY2snKSA6IG51bGw7XG4gICAgICBjb25zb2xlLndhcm4oJ21vZGFsQmxvY2tfZWxlJywgbW9kYWxDb250ZW50QmxvY2tfZWxlKTtcbiAgICAgIGlmICh0aGlzLmlzU2Nyb2xsVG9Ub3AgJiYgbW9kYWxDb250ZW50QmxvY2tfZWxlICE9PSBudWxsKSB7XG4gICAgICAgIG1vZGFsQ29udGVudEJsb2NrX2VsZS5zY3JvbGxUb3AgPSAwO1xuICAgICAgfVxuICAgICAgXG4gICAgfSwgMTAwKSAgLy8gZW5kIG9mIHNldHRpbWVvdXRcblxuICB9ICAvLyBlbmQ6IE1vZGFsT3Blbkdsb2JhbENvbnRyb2xcblxuXG4gIC8vIGNvbnRyb2wgaW50ZXJmYWNlIGlmIG1vZGFsIGNsb3NlXG4gIE1vZGFsQ2xvc2VHbG9iYWxDb250cm9sKCkge1xuXG4gICAgbGV0IHN0b3BTY3JvbGxCbG9jayA9IGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RvcC1zY3JvbGwtYmxvY2snKTtcbiAgICBsZXQgc3RvcFNjcm9sbEJsb2NrX2NhbGVuZGFyID0gZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYWwtbW9udGgtdmlldycpO1xuICAgIC8vIGNvbnNvbGUud2FybignTW9kYWxDbG9zZUdsb2JhbENvbnRyb2wnLCBzdG9wU2Nyb2xsQmxvY2spO1xuICAgIC8vcm9tb3ZlIGJvZHkgZml4ZWRcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmaXhlZC1ib2R5LWZ1bGwtcGFnZVwiKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gcmVtb3ZlIG90aGVyIGZpeFxuICAgICAgW10uZm9yRWFjaC5iaW5kKHN0b3BTY3JvbGxCbG9jaywgZnVuY3Rpb24gKGl0bSkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gZWFjaCcpO1xuICAgICAgICBpdG0uY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgICB9KSgpO1xuICAgICAgaWYoc3RvcFNjcm9sbEJsb2NrX2NhbGVuZGFyLmxlbmd0aCE9MCl7XG4gICAgICAgIHN0b3BTY3JvbGxCbG9ja19jYWxlbmRhclswXS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcbiAgICAgIH1cblxuICAgIH0sNTAwKTtcblxuXG4gIH0gLy8gZW5kOiBNb2RhbENsb3NlR2xvYmFsQ29udHJvbCBcblxuXG4gIFxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvbnJlc2l6ZShldmVudCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNsYXNzTW9iaWxlQnRuTm9GaXggPSB0aGlzLmlzTW9iaWxlQnRtQnRuRml4ID8gJycgOiAnc3R5bGUtbW9iaWxlLWJ0bi1uby1maXgnO1xuICAgIHRoaXMuaXNTaG93Rml4QnRtVGVtcCA9IHRoaXMud2luZG93V2lkdGggPj0gMTAyNCB8fCB0aGlzLndpbmRvd1dpZHRoIDwgMTAyNCAmJiB0aGlzLmlzTW9iaWxlQnRtQnRuRml4O1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNsYXNzTW9iaWxlQnRuTm9GaXggPSB0aGlzLmlzTW9iaWxlQnRtQnRuRml4ID8gJycgOiAnc3R5bGUtbW9iaWxlLWJ0bi1uby1maXgnO1xuICAgIHRoaXMuY2xhc3NDb250ZW50RnVsbCA9IHRoaXMuaXNDb250bmV0RnVsbCA/ICcgbGF5b3V0LWZ1bGwnIDogJyc7XG4gICAgdGhpcy5pc1Nob3dGaXhCdG1UZW1wID0gdGhpcy53aW5kb3dXaWR0aCA+PSAxMDI0IHx8IHRoaXMud2luZG93V2lkdGggPCAxMDI0ICYmIHRoaXMuaXNNb2JpbGVCdG1CdG5GaXg7XG4gICAgdGhpcy5yZW5kZXJCdG1TcGFjZSgpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGxldCBpc0xhc3QgPSB0aGlzLm1vZGFsTWFuYWdlci5kaXNtaXNzTW9kYWwodGhpcy5fbW9kYWxJRCk7XG4gICAgaWYgKGlzTGFzdCkge1xuICAgICAgdGhpcy5Nb2RhbENsb3NlR2xvYmFsQ29udHJvbCgpO1xuICAgIH1cbiAgfSAvLyBlbmQ6IG5nT25EZXN0cm95IFxuXG5cbiAgY2xvc2VIYW5kbGVyKCkge1xuXG4gIH1cblxuXG59XG4iXX0=