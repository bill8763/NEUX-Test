/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input, ChangeDetectionStrategy, ChangeDetectorRef, HostListener } from '@angular/core';
import { ModalManager } from '../ui-modal-control/modal-manager.service';
import { v4 as uuid } from 'uuid';
export class UiModalBaseComponent {
    // true: style-modal-fixed ==> over height 600 fixed,   false : ' ';
    /**
     * @param {?} modalManager
     * @param {?} changeDector
     */
    constructor(modalManager, changeDector) {
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
    renderBtmSpace() {
        this.styleModelBtm = this.isModalBtmHasSpace ? '' : 'style-btm-no-space';
    }
    // check if modal open or not
    /**
     * @param {?} isPopupOpenStatus
     * @return {?}
     */
    checkModalOpenStatus(isPopupOpenStatus) {
        console.log('checkModalOpenStatus', isPopupOpenStatus);
        if (isPopupOpenStatus) {
            console.log('in if isPopupOpenStatus');
            this.modalManager.pushModal(this._modalID, this);
            //call add class fuction
            this.ModalOpenGlobalControl();
        }
        else {
            /** @type {?} */
            let isLast = this.modalManager.dismissModal(this._modalID);
            if (isLast) {
                //call remove class function
                this.ModalCloseGlobalControl();
            }
            console.log('isLast', isLast);
        }
    } // end: checkModalOpenStatus
    // end: checkModalOpenStatus
    // control interface if modal open
    /**
     * @return {?}
     */
    ModalOpenGlobalControl() {
        // let body fixed
        document.body.classList.add("fixed-body-full-page");
        /** @type {?} */
        let stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
        /** @type {?} */
        let stopScrollBlock_calendar = document.body.getElementsByClassName('cal-month-view');
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
            // need to scroll to top
            /** @type {?} */
            let modalContentBlock_ele = this.modalBlock ? this.modalBlock.nativeElement.querySelector('div.modal-content-block') : null;
            console.warn('modalBlock_ele', modalContentBlock_ele);
            if (this.isScrollToTop && modalContentBlock_ele !== null) {
                modalContentBlock_ele.scrollTop = 0;
            }
        }), 100); // end of settimeout
    } // end: ModalOpenGlobalControl
    // end: ModalOpenGlobalControl
    // control interface if modal close
    /**
     * @return {?}
     */
    ModalCloseGlobalControl() {
        /** @type {?} */
        let stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
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
            if (stopScrollBlock_calendar.length != 0) {
                stopScrollBlock_calendar[0].classList.remove('no-scroll');
            }
        }), 500);
    } // end: ModalCloseGlobalControl 
    // end: ModalCloseGlobalControl 
    /**
     * @param {?} event
     * @return {?}
     */
    onresize(event) {
        this.windowWidth = event.target.innerWidth;
        this.classMobileBtnNoFix = this.isMobileBtmBtnFix ? '' : 'style-mobile-btn-no-fix';
        this.isShowFixBtmTemp = this.windowWidth >= 1024 || this.windowWidth < 1024 && this.isMobileBtmBtnFix;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.windowWidth = window.innerWidth;
        this.classMobileBtnNoFix = this.isMobileBtmBtnFix ? '' : 'style-mobile-btn-no-fix';
        this.classContentFull = this.isContnetFull ? ' layout-full' : '';
        this.isShowFixBtmTemp = this.windowWidth >= 1024 || this.windowWidth < 1024 && this.isMobileBtmBtnFix;
        this.renderBtmSpace();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        let isLast = this.modalManager.dismissModal(this._modalID);
        if (isLast) {
            this.ModalCloseGlobalControl();
        }
    } // end: ngOnDestroy 
    // end: ngOnDestroy 
    /**
     * @return {?}
     */
    closeHandler() {
    }
}
UiModalBaseComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-ui-modal-base',
                template: "\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
UiModalBaseComponent.ctorParameters = () => [
    { type: ModalManager },
    { type: ChangeDetectorRef }
];
UiModalBaseComponent.propDecorators = {
    modalBlock: [{ type: ViewChild, args: ['modalBlock',] }],
    isScrollToTop: [{ type: Input }],
    isContnetFull: [{ type: Input }],
    isMobileBtmBtnFix: [{ type: Input }],
    isModalBtmHasSpace: [{ type: Input }],
    onresize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbW9kYWwtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLW1vZGFsLWJhc2UvdWktbW9kYWwtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQWEsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JKLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVFsQyxNQUFNOzs7Ozs7SUFnQkosWUFDWSxZQUEwQixFQUMxQixZQUErQjtRQUQvQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFkbEMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0Isc0JBQWlCLEdBQUcsSUFBSSxDQUFDLENBQUUsMkVBQTJFO1FBQ3RHLHVCQUFrQixHQUFHLElBQUksQ0FBQyxDQUFDLDRCQUE0QjtRQUN6RCx3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRWhDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBU3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUMzRSxDQUFDOzs7Ozs7SUFJRCxvQkFBb0IsQ0FBQyxpQkFBaUI7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dEcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDRCxXQUFXOztZQUNMLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzFELElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDLENBQUMsb0JBQW9COzs7OztJQUd0QixZQUFZO0lBRVosQ0FBQzs7O1lBM0lGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixjQUE2QztnQkFFN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7WUFSUSxZQUFZO1lBRDhELGlCQUFpQjs7O3lCQWFqRyxTQUFTLFNBQUMsWUFBWTs0QkFDdEIsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7aUNBQ0wsS0FBSzt1QkF1R0wsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQTVHekMsd0NBQWlCOztJQUNqQiwwQ0FBZ0Q7O0lBQ2hELDZDQUF3Qzs7SUFDeEMsNkNBQXdDOztJQUN4QyxpREFBa0M7O0lBQ2xDLGtEQUFtQzs7SUFDbkMsbURBQWdDOztJQUNoQywyQ0FBdUM7O0lBQ3ZDLGdEQUFpQzs7SUFDakMsNkNBQTBCOztJQUMxQixnREFBZ0M7O0lBQ2hDLDZDQUE2Qjs7Ozs7SUFJM0IsNENBQW9DOzs7OztJQUNwQyw0Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxNYW5hZ2VyIH0gZnJvbSAnLi4vdWktbW9kYWwtY29udHJvbC9tb2RhbC1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtdWktbW9kYWwtYmFzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1tb2RhbC1iYXNlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktbW9kYWwtYmFzZS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaU1vZGFsQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9tb2RhbElEO1xuICBAVmlld0NoaWxkKCdtb2RhbEJsb2NrJykgbW9kYWxCbG9jazogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgaXNTY3JvbGxUb1RvcDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0NvbnRuZXRGdWxsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzTW9iaWxlQnRtQnRuRml4ID0gdHJ1ZTsgIC8vIGlmIG1vYmlsZSBidG0gYnRuIGZpeCwgaWYgdHJ1ZSBidG4gZml4IG9uIG1vYmlsZTsgZWxzZSBub3QgZml4IG9uIG1vYmlsZVxuICBASW5wdXQoKSBpc01vZGFsQnRtSGFzU3BhY2UgPSB0cnVlOyAvLyB0cnVlLT4gMzBweDsgZmFsc2UgLT4gMHB4XG4gIHB1YmxpYyBjbGFzc01vYmlsZUJ0bk5vRml4ID0gJyc7XG4gIHB1YmxpYyB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBwdWJsaWMgaXNTaG93Rml4QnRtVGVtcDogYm9vbGVhbjtcbiAgcHVibGljIHN0eWxlTW9kZWxCdG0gPSAnJztcbiAgcHVibGljIGNsYXNzQ29udGVudEZ1bGw6IHN0cmluZzsgLy8gc3R5bGUgY29udGVudCBmdWxsXG4gIHB1YmxpYyBjbGFzc01vZGFsRml4OiBzdHJpbmc7IC8vIHRydWU6IHN0eWxlLW1vZGFsLWZpeGVkID09PiBvdmVyIGhlaWdodCA2MDAgZml4ZWQsICAgZmFsc2UgOiAnICc7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXIsXG4gICAgcHJvdGVjdGVkIGNoYW5nZURlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHRoaXMuX21vZGFsSUQgPSB1dWlkKCk7XG4gIH1cblxuICByZW5kZXJCdG1TcGFjZSgpe1xuICAgIHRoaXMuc3R5bGVNb2RlbEJ0bSA9IHRoaXMuaXNNb2RhbEJ0bUhhc1NwYWNlID8gJycgOiAnc3R5bGUtYnRtLW5vLXNwYWNlJztcbiAgfVxuXG5cbiAgLy8gY2hlY2sgaWYgbW9kYWwgb3BlbiBvciBub3RcbiAgY2hlY2tNb2RhbE9wZW5TdGF0dXMoaXNQb3B1cE9wZW5TdGF0dXMpIHtcbiAgICBjb25zb2xlLmxvZygnY2hlY2tNb2RhbE9wZW5TdGF0dXMnLCBpc1BvcHVwT3BlblN0YXR1cyk7XG4gICAgaWYgKGlzUG9wdXBPcGVuU3RhdHVzKSB7XG4gICAgICBjb25zb2xlLmxvZygnaW4gaWYgaXNQb3B1cE9wZW5TdGF0dXMnKTtcbiAgICAgIHRoaXMubW9kYWxNYW5hZ2VyLnB1c2hNb2RhbCh0aGlzLl9tb2RhbElELCB0aGlzKTtcbiAgICAgIC8vY2FsbCBhZGQgY2xhc3MgZnVjdGlvblxuICAgICAgdGhpcy5Nb2RhbE9wZW5HbG9iYWxDb250cm9sKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGlzTGFzdCA9IHRoaXMubW9kYWxNYW5hZ2VyLmRpc21pc3NNb2RhbCh0aGlzLl9tb2RhbElEKTtcbiAgICAgIGlmIChpc0xhc3QpIHtcbiAgICAgICAgLy9jYWxsIHJlbW92ZSBjbGFzcyBmdW5jdGlvblxuICAgICAgICB0aGlzLk1vZGFsQ2xvc2VHbG9iYWxDb250cm9sKCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnaXNMYXN0JywgaXNMYXN0KTtcbiAgICB9XG5cbiAgfSAgLy8gZW5kOiBjaGVja01vZGFsT3BlblN0YXR1c1xuXG5cbiAgLy8gY29udHJvbCBpbnRlcmZhY2UgaWYgbW9kYWwgb3BlblxuICBNb2RhbE9wZW5HbG9iYWxDb250cm9sKCkge1xuXG4gICAgLy8gbGV0IGJvZHkgZml4ZWRcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmaXhlZC1ib2R5LWZ1bGwtcGFnZVwiKTtcblxuICAgIGxldCBzdG9wU2Nyb2xsQmxvY2sgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0b3Atc2Nyb2xsLWJsb2NrJyk7XG4gICAgbGV0IHN0b3BTY3JvbGxCbG9ja19jYWxlbmRhciA9IGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FsLW1vbnRoLXZpZXcnKTtcbiAgICBjb25zb2xlLmxvZygnTW9kYWxPcGVuR2xvYmFsQ29udHJvbCcsIHN0b3BTY3JvbGxCbG9jayk7XG5cbiAgICAvLyBsZXQgYmFjayBhcmVhIHdoaWNoIGNhbiBzY3JvbGwgbm90IHNjcm9sbFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHN0b3BTY3JvbGxCbG9jay5sZW5ndGggIT0gMCkge1xuICAgICAgICAvLyBpbiBldmVyeSBzdG9wLXNjcm9sbC1ibG9jayBjbGFzcyBhZGQgbm8tc2Nyb2xsXG4gICAgICAgIFtdLmZvckVhY2guYmluZChzdG9wU2Nyb2xsQmxvY2ssIGZ1bmN0aW9uIChpdG0pIHtcbiAgICAgICAgICBpdG0uY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG4gICAgICBpZiAoc3RvcFNjcm9sbEJsb2NrX2NhbGVuZGFyLmxlbmd0aCAhPSAwKXtcbiAgICAgICAgc3RvcFNjcm9sbEJsb2NrX2NhbGVuZGFyWzBdLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBuZWVkIHRvIHNjcm9sbCB0byB0b3BcbiAgICAgIGxldCBtb2RhbENvbnRlbnRCbG9ja19lbGUgPSB0aGlzLm1vZGFsQmxvY2sgPyB0aGlzLm1vZGFsQmxvY2submF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYubW9kYWwtY29udGVudC1ibG9jaycpIDogbnVsbDtcbiAgICAgIGNvbnNvbGUud2FybignbW9kYWxCbG9ja19lbGUnLCBtb2RhbENvbnRlbnRCbG9ja19lbGUpO1xuICAgICAgaWYgKHRoaXMuaXNTY3JvbGxUb1RvcCAmJiBtb2RhbENvbnRlbnRCbG9ja19lbGUgIT09IG51bGwpIHtcbiAgICAgICAgbW9kYWxDb250ZW50QmxvY2tfZWxlLnNjcm9sbFRvcCA9IDA7XG4gICAgICB9XG4gICAgICBcbiAgICB9LCAxMDApICAvLyBlbmQgb2Ygc2V0dGltZW91dFxuXG4gIH0gIC8vIGVuZDogTW9kYWxPcGVuR2xvYmFsQ29udHJvbFxuXG5cbiAgLy8gY29udHJvbCBpbnRlcmZhY2UgaWYgbW9kYWwgY2xvc2VcbiAgTW9kYWxDbG9zZUdsb2JhbENvbnRyb2woKSB7XG5cbiAgICBsZXQgc3RvcFNjcm9sbEJsb2NrID0gZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9wLXNjcm9sbC1ibG9jaycpO1xuICAgIGxldCBzdG9wU2Nyb2xsQmxvY2tfY2FsZW5kYXIgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbC1tb250aC12aWV3Jyk7XG4gICAgLy8gY29uc29sZS53YXJuKCdNb2RhbENsb3NlR2xvYmFsQ29udHJvbCcsIHN0b3BTY3JvbGxCbG9jayk7XG4gICAgLy9yb21vdmUgYm9keSBmaXhlZFxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZpeGVkLWJvZHktZnVsbC1wYWdlXCIpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyByZW1vdmUgb3RoZXIgZml4XG4gICAgICBbXS5mb3JFYWNoLmJpbmQoc3RvcFNjcm9sbEJsb2NrLCBmdW5jdGlvbiAoaXRtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBlYWNoJyk7XG4gICAgICAgIGl0bS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcbiAgICAgIH0pKCk7XG4gICAgICBpZihzdG9wU2Nyb2xsQmxvY2tfY2FsZW5kYXIubGVuZ3RoIT0wKXtcbiAgICAgICAgc3RvcFNjcm9sbEJsb2NrX2NhbGVuZGFyWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgICAgfVxuXG4gICAgfSw1MDApO1xuXG5cbiAgfSAvLyBlbmQ6IE1vZGFsQ2xvc2VHbG9iYWxDb250cm9sIFxuXG5cbiAgXG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9ucmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IGV2ZW50LnRhcmdldC5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2xhc3NNb2JpbGVCdG5Ob0ZpeCA9IHRoaXMuaXNNb2JpbGVCdG1CdG5GaXggPyAnJyA6ICdzdHlsZS1tb2JpbGUtYnRuLW5vLWZpeCc7XG4gICAgdGhpcy5pc1Nob3dGaXhCdG1UZW1wID0gdGhpcy53aW5kb3dXaWR0aCA+PSAxMDI0IHx8IHRoaXMud2luZG93V2lkdGggPCAxMDI0ICYmIHRoaXMuaXNNb2JpbGVCdG1CdG5GaXg7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2xhc3NNb2JpbGVCdG5Ob0ZpeCA9IHRoaXMuaXNNb2JpbGVCdG1CdG5GaXggPyAnJyA6ICdzdHlsZS1tb2JpbGUtYnRuLW5vLWZpeCc7XG4gICAgdGhpcy5jbGFzc0NvbnRlbnRGdWxsID0gdGhpcy5pc0NvbnRuZXRGdWxsID8gJyBsYXlvdXQtZnVsbCcgOiAnJztcbiAgICB0aGlzLmlzU2hvd0ZpeEJ0bVRlbXAgPSB0aGlzLndpbmRvd1dpZHRoID49IDEwMjQgfHwgdGhpcy53aW5kb3dXaWR0aCA8IDEwMjQgJiYgdGhpcy5pc01vYmlsZUJ0bUJ0bkZpeDtcbiAgICB0aGlzLnJlbmRlckJ0bVNwYWNlKCk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgbGV0IGlzTGFzdCA9IHRoaXMubW9kYWxNYW5hZ2VyLmRpc21pc3NNb2RhbCh0aGlzLl9tb2RhbElEKTtcbiAgICBpZiAoaXNMYXN0KSB7XG4gICAgICB0aGlzLk1vZGFsQ2xvc2VHbG9iYWxDb250cm9sKCk7XG4gICAgfVxuICB9IC8vIGVuZDogbmdPbkRlc3Ryb3kgXG5cblxuICBjbG9zZUhhbmRsZXIoKSB7XG5cbiAgfVxuXG5cbn1cbiJdfQ==