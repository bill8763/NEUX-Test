/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var UiTitleStyle1Component = /** @class */ (function () {
    function UiTitleStyle1Component() {
        this.isShowOther = false;
        this.otherEleStatus = '';
        this.isFullCol = true; // true: title nowrap; false: title wrap
    }
    /**
     * @return {?}
     */
    UiTitleStyle1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.otherEleStatus = this.isShowOther ? ' active' : '';
    };
    UiTitleStyle1Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-title-style1',
                    template: "<div class=\"title-ele-block\" [ngClass]=\"otherEleStatus\" >\n    <h2 class=\"space-ui-title title-style1\" [ngClass]=\"{'notFullCol': !isFullCol}\">\n        <ng-content select=\"[textType=titleText]\"></ng-content>\n    </h2>\n    <div class=\"title-other-element\" >\n        <ng-content select=\"[textType=otherEle]\"></ng-content>\n    </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.title-style1{text-align:left;font-size:1.25rem;font-weight:700;line-height:normal;color:#414141;display:inline-flex;align-items:center;white-space:nowrap}.title-style1.notFullCol{white-space:normal}.title-style1:before{content:' ';width:4px;height:1.5rem;background-image:linear-gradient(to bottom,#003781 60%,#007d8c 40%);margin-right:10px;display:inline-block;vertical-align:top;position:relative;top:0}@media screen and (min-width:1025px){.title-style1:before{height:2.4vw}}.title-ele-block{text-align:left}.title-ele-block.active{display:flex;justify-content:space-between;align-items:center}.title-ele-block.active .title-other-element ::ng-deep .ui-link-block{margin-top:10px}"]
                }] }
    ];
    UiTitleStyle1Component.ctorParameters = function () { return []; };
    UiTitleStyle1Component.propDecorators = {
        isShowOther: [{ type: Input }],
        otherEleStatus: [{ type: Input }],
        isFullCol: [{ type: Input }]
    };
    return UiTitleStyle1Component;
}());
export { UiTitleStyle1Component };
if (false) {
    /** @type {?} */
    UiTitleStyle1Component.prototype.isShowOther;
    /** @type {?} */
    UiTitleStyle1Component.prototype.otherEleStatus;
    /** @type {?} */
    UiTitleStyle1Component.prototype.isFullCol;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGl0bGUtc3R5bGUxLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktdGl0bGUtc3R5bGUxL3VpLXRpdGxlLXN0eWxlMS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxGO0lBVUU7UUFIUyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1QixjQUFTLEdBQVksSUFBSSxDQUFDLENBQUMsd0NBQXdDO0lBQzVELENBQUM7Ozs7SUFFakIseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6RCxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsZ1hBQStDO29CQUUvQyxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7aUJBQy9DOzs7OzhCQUVFLEtBQUs7aUNBQ0wsS0FBSzs0QkFDTCxLQUFLOztJQU9SLDZCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FWWSxzQkFBc0I7OztJQUNqQyw2Q0FBc0M7O0lBQ3RDLGdEQUFxQzs7SUFDckMsMkNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktdGl0bGUtc3R5bGUxJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXRpdGxlLXN0eWxlMS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLXRpdGxlLXN0eWxlMS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpVGl0bGVTdHlsZTFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpc1Nob3dPdGhlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBvdGhlckVsZVN0YXR1czogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGlzRnVsbENvbDogYm9vbGVhbiA9IHRydWU7IC8vIHRydWU6IHRpdGxlIG5vd3JhcDsgZmFsc2U6IHRpdGxlIHdyYXBcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm90aGVyRWxlU3RhdHVzID0gdGhpcy5pc1Nob3dPdGhlciA/ICcgYWN0aXZlJzogJyc7XG4gIH1cblxufVxuIl19