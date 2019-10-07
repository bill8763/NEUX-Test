/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
export class UiLoadingBoxComponent {
    /**
     * @param {?} _changeDector
     */
    constructor(_changeDector) {
        this._changeDector = _changeDector;
        this.styleIsOpen = 'style-close'; // style for isOpen close
        this._isOpen = false;
        this.isOpenChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isOpen(val) {
        this._isOpen = val;
        this.loadingStyleUpdate();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loadingStyleUpdate();
        console.log('in ngOnInit loadingStyleUpdate');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        console.log('destory');
        this.isOpen = false;
        this.isOpenChange.emit(false);
        this.loadingStyleUpdate();
    }
    // loading style show 
    /**
     * @return {?}
     */
    loadingStyleUpdate() {
        console.log('in loadingStyleUpdate', this.isOpen);
        this.isOpen ? this.openGlobalControl() : this.closeGlobalControl();
        this.styleIsOpen = this.isOpen ? 'style-open' : 'style-close';
        this._changeDector.markForCheck();
    }
    // control interface if loading open
    /**
     * @return {?}
     */
    openGlobalControl() {
        // let body fixed
        document.body.classList.add("fixed-body-full-page");
        /** @type {?} */
        let stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
        console.log('openGlobalControl', stopScrollBlock);
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
        }), 100); // end of settimeout
    } // end: openGlobalControl
    // end: openGlobalControl
    // control interface if loading close
    /**
     * @return {?}
     */
    closeGlobalControl() {
        /** @type {?} */
        let stopScrollBlock = document.body.getElementsByClassName('stop-scroll-block');
        console.warn('closeGlobalControl', stopScrollBlock);
        //romove body fixed
        document.body.classList.remove("fixed-body-full-page");
        // remove other fix
        setTimeout((/**
         * @return {?}
         */
        () => {
            [].forEach.bind(stopScrollBlock, (/**
             * @param {?} itm
             * @return {?}
             */
            function (itm) {
                console.log('in each');
                itm.classList.remove('no-scroll');
            }))();
        }), 500);
    } // end: closeGlobalControl 
}
UiLoadingBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-ui-loading-box',
                template: "<div class=\"whole-page-block\" [ngClass]=\"styleIsOpen\">\n  <div class=\"loading-block\">\n    <app-ui-refresh-icon></app-ui-refresh-icon>\n  </div>\n</div>\n",
                styles: [".whole-page-block{min-height:100vh;min-width:100vw;position:fixed;z-index:999;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.3);top:0;left:0}.whole-page-block.style-open{opacity:1;visibility:visible}.whole-page-block.style-close{transition:visibility 1s,opacity .5s linear;visibility:hidden;opacity:0}"]
            }] }
];
UiLoadingBoxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UiLoadingBoxComponent.propDecorators = {
    isOpen: [{ type: Input }],
    isOpenChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbG9hZGluZy1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1sb2FkaW5nLWJveC91aS1sb2FkaW5nLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQVksaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekcsTUFBTTs7OztJQUVKLFlBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUc1QyxnQkFBVyxHQUFHLGFBQWEsQ0FBQyxDQUFDLHlCQUF5QjtRQUNyRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBU2QsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBYlcsQ0FBQzs7OztJQUt4RCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDckIsQ0FBQzs7Ozs7SUFDRCxJQUFJLE1BQU0sQ0FBQyxHQUFHO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUdELFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNELFdBQVc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBRTVCLENBQUM7Ozs7O0lBR0Qsa0JBQWtCO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxHQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFHRCxpQkFBaUI7UUFDZixpQkFBaUI7UUFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7O1lBRWhELGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDO1FBQy9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsZUFBZSxDQUFDLENBQUM7UUFFakQsNENBQTRDO1FBQzVDLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksZUFBZSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQy9CLGlEQUFpRDtnQkFDakQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZTs7OztnQkFBRSxVQUFVLEdBQUc7b0JBQzVDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLEVBQUMsRUFBRSxDQUFDO2FBQ047UUFDSCxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUEsQ0FBRSxvQkFBb0I7SUFFL0IsQ0FBQyxDQUFFLHlCQUF5Qjs7Ozs7O0lBSTVCLGtCQUFrQjs7WUFFWixlQUFlLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUMvRSxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3BELG1CQUFtQjtRQUNuQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUV2RCxtQkFBbUI7UUFDbkIsVUFBVTs7O1FBQUMsR0FBRSxFQUFFO1lBQ2IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZTs7OztZQUFFLFVBQVUsR0FBRztnQkFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztRQUNQLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQTtJQUdSLENBQUMsQ0FBQywyQkFBMkI7OztZQWhGOUIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDRLQUE4Qzs7YUFFL0M7OztZQU4rRCxpQkFBaUI7OztxQkFjOUUsS0FBSzsyQkFRTCxNQUFNOzs7O0lBVlAsNENBQW1DOzs7OztJQUNuQyx3Q0FBd0I7O0lBU3hCLDZDQUE0Qzs7Ozs7SUFiaEMsOENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlciwgT25EZXN0cm95LENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuZC11aS1sb2FkaW5nLWJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1sb2FkaW5nLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWxvYWRpbmctYm94LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlMb2FkaW5nQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgXG4gIHB1YmxpYyBzdHlsZUlzT3BlbiA9ICdzdHlsZS1jbG9zZSc7IC8vIHN0eWxlIGZvciBpc09wZW4gY2xvc2VcbiAgcHJpdmF0ZSBfaXNPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCBpc09wZW4oKXtcbiAgICByZXR1cm4gdGhpcy5faXNPcGVuXG4gIH1cbiAgc2V0IGlzT3Blbih2YWwpe1xuICAgIHRoaXMuX2lzT3BlbiA9IHZhbDtcbiAgICB0aGlzLmxvYWRpbmdTdHlsZVVwZGF0ZSgpO1xuICB9XG4gIEBPdXRwdXQoKSBpc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nU3R5bGVVcGRhdGUoKTtcbiAgICBjb25zb2xlLmxvZygnaW4gbmdPbkluaXQgbG9hZGluZ1N0eWxlVXBkYXRlJyk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBjb25zb2xlLmxvZygnZGVzdG9yeScpO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgdGhpcy5sb2FkaW5nU3R5bGVVcGRhdGUoKTtcblxuICB9XG5cbiAgLy8gbG9hZGluZyBzdHlsZSBzaG93IFxuICBsb2FkaW5nU3R5bGVVcGRhdGUoKXtcbiAgICBjb25zb2xlLmxvZygnaW4gbG9hZGluZ1N0eWxlVXBkYXRlJywgdGhpcy5pc09wZW4gKTtcbiAgICB0aGlzLmlzT3BlbiA/IHRoaXMub3Blbkdsb2JhbENvbnRyb2woKSA6IHRoaXMuY2xvc2VHbG9iYWxDb250cm9sKCk7XG4gICAgdGhpcy5zdHlsZUlzT3BlbiAgPSB0aGlzLmlzT3BlbiA/ICdzdHlsZS1vcGVuJyA6ICdzdHlsZS1jbG9zZSc7XG4gICAgdGhpcy5fY2hhbmdlRGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLy8gY29udHJvbCBpbnRlcmZhY2UgaWYgbG9hZGluZyBvcGVuXG4gIG9wZW5HbG9iYWxDb250cm9sKCl7XG4gICAgLy8gbGV0IGJvZHkgZml4ZWRcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmaXhlZC1ib2R5LWZ1bGwtcGFnZVwiKTtcbiAgICBcbiAgICBsZXQgc3RvcFNjcm9sbEJsb2NrID0gZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9wLXNjcm9sbC1ibG9jaycpO1xuICAgIGNvbnNvbGUubG9nKCdvcGVuR2xvYmFsQ29udHJvbCcsc3RvcFNjcm9sbEJsb2NrKTtcblxuICAgIC8vIGxldCBiYWNrIGFyZWEgd2hpY2ggY2FuIHNjcm9sbCBub3Qgc2Nyb2xsXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoc3RvcFNjcm9sbEJsb2NrLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgIC8vIGluIGV2ZXJ5IHN0b3Atc2Nyb2xsLWJsb2NrIGNsYXNzIGFkZCBuby1zY3JvbGxcbiAgICAgICAgW10uZm9yRWFjaC5iaW5kKHN0b3BTY3JvbGxCbG9jaywgZnVuY3Rpb24gKGl0bSkge1xuICAgICAgICAgIGl0bS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH1cbiAgICB9LCAxMDApICAvLyBlbmQgb2Ygc2V0dGltZW91dFxuXG4gIH0gIC8vIGVuZDogb3Blbkdsb2JhbENvbnRyb2xcblxuXG4gIC8vIGNvbnRyb2wgaW50ZXJmYWNlIGlmIGxvYWRpbmcgY2xvc2VcbiAgY2xvc2VHbG9iYWxDb250cm9sKCl7XG4gICAgXG4gICAgbGV0IHN0b3BTY3JvbGxCbG9jayA9IGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RvcC1zY3JvbGwtYmxvY2snKTtcbiAgICBjb25zb2xlLndhcm4oJ2Nsb3NlR2xvYmFsQ29udHJvbCcsIHN0b3BTY3JvbGxCbG9jayk7XG4gICAgLy9yb21vdmUgYm9keSBmaXhlZFxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZpeGVkLWJvZHktZnVsbC1wYWdlXCIpO1xuXG4gICAgLy8gcmVtb3ZlIG90aGVyIGZpeFxuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIFtdLmZvckVhY2guYmluZChzdG9wU2Nyb2xsQmxvY2ssIGZ1bmN0aW9uIChpdG0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIGVhY2gnKTtcbiAgICAgICAgaXRtLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgICAgfSkoKTtcbiAgICB9LDUwMClcbiAgICBcblxuICB9IC8vIGVuZDogY2xvc2VHbG9iYWxDb250cm9sIFxuXG5cbn1cbiJdfQ==