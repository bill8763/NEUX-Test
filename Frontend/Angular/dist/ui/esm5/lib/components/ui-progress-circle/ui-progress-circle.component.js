/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional } from '@angular/core';
import { Location } from '@angular/common';
var UiProgressCircleComponent = /** @class */ (function () {
    function UiProgressCircleComponent(_location) {
        this._location = _location;
        this.value = 0;
        this.sizeR = 60;
        this.sizeStroke = 5;
    }
    /**
     * @return {?}
     */
    UiProgressCircleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    UiProgressCircleComponent.prototype.contentSize = /**
     * @return {?}
     */
    function () {
        return (this.sizeR * 2) + this.sizeStroke + 1;
    };
    /**
     * @return {?}
     */
    UiProgressCircleComponent.prototype.countR = /**
     * @return {?}
     */
    function () {
        return (this.sizeR * 2) * Math.PI;
    };
    /**
     * @return {?}
     */
    UiProgressCircleComponent.prototype.setNumber = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var circleNum = this.countR();
        /** @type {?} */
        var percen = Math.round(this.value * 100) / 100;
        return circleNum - (percen * circleNum);
    };
    /**
     * @return {?}
     */
    UiProgressCircleComponent.prototype.getUrl = /**
     * @return {?}
     */
    function () {
        if (this._location) {
            /** @type {?} */
            var urlLink = this._location.path();
            // console.log(urlLink.replace(/\//,''));
            return urlLink.replace(/\//, '');
        }
        else
            return '';
    };
    UiProgressCircleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-progress-circle',
                    template: "<div class=\"progress-content\">\n  <div class=\"svg-content\">\n    <svg id=\"svg\" [attr.width]=\"contentSize()\" \n                  [attr.height]=\"contentSize()\" \n                  viewPort=\"0 0 100 100\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n                  style=\"enable-background:new 0 0 100 100;\">\n                  \n      <defs>\n        <linearGradient id=\"myGradient\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"100\" spreadMethod=\"pad\">\n          <stop offset=\"0\"   style=\"stop-color:#0068b7\" stop-opacity=\"1\"/>\n          <stop offset=\"100\" style=\"stop-color:#003781\" stop-opacity=\"1\"/>\n        </linearGradient>\n      </defs>\n      <circle class=\"background-line\" \n              stroke-linecap=\"round\" \n              [attr.stroke-width]=\"sizeStroke\"\n              [attr.r]=\"sizeR\" \n              [attr.cx]=\"contentSize()/2\" \n              [attr.cy]=\"contentSize()/2\" fill=\"transparent\" \n              [attr.stroke-dasharray]=\"countR()\"></circle>\n      <circle class=\"progress\" \n              [attr.stroke]=\"'url('+getUrl()+'#myGradient)'\" \n              stroke-linecap=\"round\" \n              [attr.stroke-width]=\"sizeStroke\"\n              [attr.r]=\"sizeR\" \n              [attr.cx]=\"contentSize()/2\" \n              [attr.cy]=\"contentSize()/2\" fill=\"transparent\" \n              [attr.stroke-dasharray]=\"countR()\"\n              [attr.stroke-dashoffset]=\"setNumber()\"></circle>\n    </svg>\n  </div>\n  <div class=\"info-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-block}.progress-content{position:relative}.progress-content .svg-content{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.progress-content .svg-content svg{display:inline-block;vertical-align:bottom}.progress-content .background-line{stroke:#ececec}.progress-content .info-content{display:flex;justify-content:center;align-items:center;width:100%;height:100%;position:absolute;top:0;left:0}"]
                }] }
    ];
    UiProgressCircleComponent.ctorParameters = function () { return [
        { type: Location, decorators: [{ type: Optional }] }
    ]; };
    UiProgressCircleComponent.propDecorators = {
        value: [{ type: Input }],
        sizeR: [{ type: Input }],
        sizeStroke: [{ type: Input }]
    };
    return UiProgressCircleComponent;
}());
export { UiProgressCircleComponent };
if (false) {
    /** @type {?} */
    UiProgressCircleComponent.prototype.value;
    /** @type {?} */
    UiProgressCircleComponent.prototype.sizeR;
    /** @type {?} */
    UiProgressCircleComponent.prototype.sizeStroke;
    /**
     * @type {?}
     * @private
     */
    UiProgressCircleComponent.prototype._location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktcHJvZ3Jlc3MtY2lyY2xlL3VpLXByb2dyZXNzLWNpcmNsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUEyQixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDO0lBVUUsbUNBQWdDLFNBQW1CO1FBQW5CLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFIMUMsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsZUFBVSxHQUFHLENBQUMsQ0FBQztJQUMrQixDQUFDOzs7O0lBRXhELDRDQUFROzs7SUFBUixjQUFhLENBQUM7Ozs7SUFDZCwrQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBQ0QsMENBQU07OztJQUFOO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7O0lBQ0QsNkNBQVM7OztJQUFUOztZQUNNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFOztZQUN6QixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUc7UUFDL0MsT0FBTyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUNELDBDQUFNOzs7SUFBTjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7Z0JBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ25DLHlDQUF5QztZQUN6QyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2xDOztZQUVDLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyx1bERBQWtEOztpQkFHbkQ7OztnQkFQUSxRQUFRLHVCQVlGLFFBQVE7Ozt3QkFIcEIsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7O0lBd0JSLGdDQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0EzQlkseUJBQXlCOzs7SUFDcEMsMENBQTJCOztJQUMzQiwwQ0FBb0I7O0lBQ3BCLCtDQUF3Qjs7Ozs7SUFDWiw4Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktcHJvZ3Jlc3MtY2lyY2xlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXByb2dyZXNzLWNpcmNsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLXByb2dyZXNzLWNpcmNsZS5jb21wb25lbnQuc2NzcyddLFxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaVByb2dyZXNzQ2lyY2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdmFsdWU6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIHNpemVSID0gNjA7XG4gIEBJbnB1dCgpIHNpemVTdHJva2UgPSA1O1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24pIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG4gIGNvbnRlbnRTaXplKCkge1xuICAgIHJldHVybiAodGhpcy5zaXplUiAqIDIpICsgdGhpcy5zaXplU3Ryb2tlICsgMTtcbiAgfVxuICBjb3VudFIoKSB7XG4gICAgcmV0dXJuICh0aGlzLnNpemVSICogMikgKiBNYXRoLlBJO1xuICB9XG4gIHNldE51bWJlcigpIHtcbiAgICBsZXQgY2lyY2xlTnVtID0gdGhpcy5jb3VudFIoKTtcbiAgICBsZXQgcGVyY2VuID0gTWF0aC5yb3VuZCh0aGlzLnZhbHVlICogMTAwKSAvIDEwMDtcbiAgICByZXR1cm4gY2lyY2xlTnVtIC0gKHBlcmNlbiAqIGNpcmNsZU51bSk7XG4gIH1cbiAgZ2V0VXJsKCkge1xuICAgIGlmICh0aGlzLl9sb2NhdGlvbikge1xuICAgICAgbGV0IHVybExpbmsgPSB0aGlzLl9sb2NhdGlvbi5wYXRoKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh1cmxMaW5rLnJlcGxhY2UoL1xcLy8sJycpKTtcbiAgICAgIHJldHVybiB1cmxMaW5rLnJlcGxhY2UoL1xcLy8sICcnKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgcmV0dXJuICcnO1xuICB9XG59XG4iXX0=