/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
var UiLoadingBoxComponent = /** @class */ (function () {
    function UiLoadingBoxComponent(_changeDector) {
        this._changeDector = _changeDector;
        this.styleIsOpen = 'style-close'; // style for isOpen close
        this._isOpen = false;
        this.isOpenChange = new EventEmitter();
    }
    Object.defineProperty(UiLoadingBoxComponent.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isOpen = val;
            this.loadingStyleUpdate();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiLoadingBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loadingStyleUpdate();
        console.log('in ngOnInit loadingStyleUpdate');
    };
    /**
     * @return {?}
     */
    UiLoadingBoxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        console.log('destory');
        this.isOpen = false;
        this.isOpenChange.emit(false);
        this.loadingStyleUpdate();
    };
    // loading style show 
    // loading style show 
    /**
     * @return {?}
     */
    UiLoadingBoxComponent.prototype.loadingStyleUpdate = 
    // loading style show 
    /**
     * @return {?}
     */
    function () {
        console.log('in loadingStyleUpdate', this.isOpen);
        this.isOpen ? this.openGlobalControl() : this.closeGlobalControl();
        this.styleIsOpen = this.isOpen ? 'style-open' : 'style-close';
        this._changeDector.markForCheck();
    };
    // control interface if loading open
    // control interface if loading open
    /**
     * @return {?}
     */
    UiLoadingBoxComponent.prototype.openGlobalControl = 
    // control interface if loading open
    /**
     * @return {?}
     */
    function () {
        // let body fixed
        document.body.classList.add("fixed-body-full-page");
        /** @type {?} */
        var stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
        console.log('openGlobalControl', stopScrollBlock);
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
        }), 100); // end of settimeout
    }; // end: openGlobalControl
    // control interface if loading close
    // end: openGlobalControl
    // control interface if loading close
    /**
     * @return {?}
     */
    UiLoadingBoxComponent.prototype.closeGlobalControl = 
    // end: openGlobalControl
    // control interface if loading close
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
        console.warn('closeGlobalControl', stopScrollBlock);
        //romove body fixed
        document.body.classList.remove("fixed-body-full-page");
        // remove other fix
        setTimeout((/**
         * @return {?}
         */
        function () {
            [].forEach.bind(stopScrollBlock, (/**
             * @param {?} itm
             * @return {?}
             */
            function (itm) {
                console.log('in each');
                itm.classList.remove('no-scroll');
            }))();
        }), 500);
    }; // end: closeGlobalControl 
    UiLoadingBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-loading-box',
                    template: "<div class=\"whole-page-block\" [ngClass]=\"styleIsOpen\">\n  <div class=\"loading-block\">\n    <app-ui-refresh-icon></app-ui-refresh-icon>\n  </div>\n</div>\n",
                    styles: [".whole-page-block{min-height:100vh;min-width:100vw;position:fixed;z-index:999;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.3);top:0;left:0}.whole-page-block.style-open{opacity:1;visibility:visible}.whole-page-block.style-close{transition:visibility 1s,opacity .5s linear;visibility:hidden;opacity:0}"]
                }] }
    ];
    UiLoadingBoxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiLoadingBoxComponent.propDecorators = {
        isOpen: [{ type: Input }],
        isOpenChange: [{ type: Output }]
    };
    return UiLoadingBoxComponent;
}());
export { UiLoadingBoxComponent };
if (false) {
    /** @type {?} */
    UiLoadingBoxComponent.prototype.styleIsOpen;
    /**
     * @type {?}
     * @private
     */
    UiLoadingBoxComponent.prototype._isOpen;
    /** @type {?} */
    UiLoadingBoxComponent.prototype.isOpenChange;
    /**
     * @type {?}
     * @private
     */
    UiLoadingBoxComponent.prototype._changeDector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbG9hZGluZy1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1sb2FkaW5nLWJveC91aS1sb2FkaW5nLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQVksaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekc7SUFPRSwrQkFBb0IsYUFBK0I7UUFBL0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBRzVDLGdCQUFXLEdBQUcsYUFBYSxDQUFDLENBQUMseUJBQXlCO1FBQ3JELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFTZCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFiVyxDQUFDO0lBS3hELHNCQUNJLHlDQUFNOzs7O1FBRFY7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDckIsQ0FBQzs7Ozs7UUFDRCxVQUFXLEdBQUc7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7T0FKQTs7OztJQU9ELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBQ0QsMkNBQVc7OztJQUFYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUU1QixDQUFDO0lBRUQsc0JBQXNCOzs7OztJQUN0QixrREFBa0I7Ozs7O0lBQWxCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25FLElBQUksQ0FBQyxXQUFXLEdBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDL0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQW9DOzs7OztJQUNwQyxpREFBaUI7Ozs7O0lBQWpCO1FBQ0UsaUJBQWlCO1FBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztZQUVoRCxlQUFlLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWpELDRDQUE0QztRQUM1QyxVQUFVOzs7UUFBQztZQUNULElBQUksZUFBZSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQy9CLGlEQUFpRDtnQkFDakQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZTs7OztnQkFBRSxVQUFVLEdBQUc7b0JBQzVDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLEVBQUMsRUFBRSxDQUFDO2FBQ047UUFDSCxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUEsQ0FBRSxvQkFBb0I7SUFFL0IsQ0FBQyxFQUFFLHlCQUF5QjtJQUc1QixxQ0FBcUM7Ozs7OztJQUNyQyxrREFBa0I7Ozs7OztJQUFsQjs7WUFFTSxlQUFlLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUMvRSxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3BELG1CQUFtQjtRQUNuQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUV2RCxtQkFBbUI7UUFDbkIsVUFBVTs7O1FBQUM7WUFDVCxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlOzs7O1lBQUUsVUFBVSxHQUFHO2dCQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNwQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1FBQ1AsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFBO0lBR1IsQ0FBQyxFQUFDLDJCQUEyQjs7Z0JBaEY5QixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsNEtBQThDOztpQkFFL0M7OztnQkFOK0QsaUJBQWlCOzs7eUJBYzlFLEtBQUs7K0JBUUwsTUFBTTs7SUErRFQsNEJBQUM7Q0FBQSxBQW5GRCxJQW1GQztTQTlFWSxxQkFBcUI7OztJQUtoQyw0Q0FBbUM7Ozs7O0lBQ25DLHdDQUF3Qjs7SUFTeEIsNkNBQTRDOzs7OztJQWJoQyw4Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25kLXVpLWxvYWRpbmctYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWxvYWRpbmctYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktbG9hZGluZy1ib3guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVaUxvYWRpbmdCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBcbiAgcHVibGljIHN0eWxlSXNPcGVuID0gJ3N0eWxlLWNsb3NlJzsgLy8gc3R5bGUgZm9yIGlzT3BlbiBjbG9zZVxuICBwcml2YXRlIF9pc09wZW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZ2V0IGlzT3Blbigpe1xuICAgIHJldHVybiB0aGlzLl9pc09wZW5cbiAgfVxuICBzZXQgaXNPcGVuKHZhbCl7XG4gICAgdGhpcy5faXNPcGVuID0gdmFsO1xuICAgIHRoaXMubG9hZGluZ1N0eWxlVXBkYXRlKCk7XG4gIH1cbiAgQE91dHB1dCgpIGlzT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRpbmdTdHlsZVVwZGF0ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdpbiBuZ09uSW5pdCBsb2FkaW5nU3R5bGVVcGRhdGUnKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpe1xuICAgIGNvbnNvbGUubG9nKCdkZXN0b3J5Jyk7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICB0aGlzLmxvYWRpbmdTdHlsZVVwZGF0ZSgpO1xuXG4gIH1cblxuICAvLyBsb2FkaW5nIHN0eWxlIHNob3cgXG4gIGxvYWRpbmdTdHlsZVVwZGF0ZSgpe1xuICAgIGNvbnNvbGUubG9nKCdpbiBsb2FkaW5nU3R5bGVVcGRhdGUnLCB0aGlzLmlzT3BlbiApO1xuICAgIHRoaXMuaXNPcGVuID8gdGhpcy5vcGVuR2xvYmFsQ29udHJvbCgpIDogdGhpcy5jbG9zZUdsb2JhbENvbnRyb2woKTtcbiAgICB0aGlzLnN0eWxlSXNPcGVuICA9IHRoaXMuaXNPcGVuID8gJ3N0eWxlLW9wZW4nIDogJ3N0eWxlLWNsb3NlJztcbiAgICB0aGlzLl9jaGFuZ2VEZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyBjb250cm9sIGludGVyZmFjZSBpZiBsb2FkaW5nIG9wZW5cbiAgb3Blbkdsb2JhbENvbnRyb2woKXtcbiAgICAvLyBsZXQgYm9keSBmaXhlZFxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZpeGVkLWJvZHktZnVsbC1wYWdlXCIpO1xuICAgIFxuICAgIGxldCBzdG9wU2Nyb2xsQmxvY2sgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0b3Atc2Nyb2xsLWJsb2NrJyk7XG4gICAgY29uc29sZS5sb2coJ29wZW5HbG9iYWxDb250cm9sJyxzdG9wU2Nyb2xsQmxvY2spO1xuXG4gICAgLy8gbGV0IGJhY2sgYXJlYSB3aGljaCBjYW4gc2Nyb2xsIG5vdCBzY3JvbGxcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChzdG9wU2Nyb2xsQmxvY2subGVuZ3RoICE9IDApIHtcbiAgICAgICAgLy8gaW4gZXZlcnkgc3RvcC1zY3JvbGwtYmxvY2sgY2xhc3MgYWRkIG5vLXNjcm9sbFxuICAgICAgICBbXS5mb3JFYWNoLmJpbmQoc3RvcFNjcm9sbEJsb2NrLCBmdW5jdGlvbiAoaXRtKSB7XG4gICAgICAgICAgaXRtLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xuICAgICAgICB9KSgpO1xuICAgICAgfVxuICAgIH0sIDEwMCkgIC8vIGVuZCBvZiBzZXR0aW1lb3V0XG5cbiAgfSAgLy8gZW5kOiBvcGVuR2xvYmFsQ29udHJvbFxuXG5cbiAgLy8gY29udHJvbCBpbnRlcmZhY2UgaWYgbG9hZGluZyBjbG9zZVxuICBjbG9zZUdsb2JhbENvbnRyb2woKXtcbiAgICBcbiAgICBsZXQgc3RvcFNjcm9sbEJsb2NrID0gZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9wLXNjcm9sbC1ibG9jaycpO1xuICAgIGNvbnNvbGUud2FybignY2xvc2VHbG9iYWxDb250cm9sJywgc3RvcFNjcm9sbEJsb2NrKTtcbiAgICAvL3JvbW92ZSBib2R5IGZpeGVkXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWQtYm9keS1mdWxsLXBhZ2VcIik7XG5cbiAgICAvLyByZW1vdmUgb3RoZXIgZml4XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgW10uZm9yRWFjaC5iaW5kKHN0b3BTY3JvbGxCbG9jaywgZnVuY3Rpb24gKGl0bSkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gZWFjaCcpO1xuICAgICAgICBpdG0uY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgICB9KSgpO1xuICAgIH0sNTAwKVxuICAgIFxuXG4gIH0gLy8gZW5kOiBjbG9zZUdsb2JhbENvbnRyb2wgXG5cblxufVxuIl19