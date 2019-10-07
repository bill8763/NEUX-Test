/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
var UiCollapseContentDetailComponent = /** @class */ (function () {
    function UiCollapseContentDetailComponent() {
        this._isOpen = false;
        this.isOpenCange = new EventEmitter();
    }
    Object.defineProperty(UiCollapseContentDetailComponent.prototype, "isOpen", {
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
            this.isOpenCange.emit(this._isOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiCollapseContentDetailComponent.prototype.isOpenStatus = /**
     * @return {?}
     */
    function () {
        return this._isOpen ? 'open' : 'closed';
    };
    /**
     * @return {?}
     */
    UiCollapseContentDetailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiCollapseContentDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-collapse-content-detail',
                    template: "<div class=\"collapse-content-detail\" [@openClose]=\"isOpenStatus()\">\n    <ng-content></ng-content>\n</div>\n",
                    animations: [
                        trigger('openClose', [
                            state('*', style({
                                height: '0',
                            })),
                            state('open', style({
                                height: '*',
                            })),
                            state('closed', style({
                                height: '0',
                            })),
                            transition('open <=> closed', animate('200ms ease-in-out'))
                        ]),
                    ],
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.collapse-content-detail{overflow-y:hidden}"]
                }] }
    ];
    UiCollapseContentDetailComponent.ctorParameters = function () { return []; };
    UiCollapseContentDetailComponent.propDecorators = {
        isOpen: [{ type: Input }],
        isOpenCange: [{ type: Output }]
    };
    return UiCollapseContentDetailComponent;
}());
export { UiCollapseContentDetailComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UiCollapseContentDetailComponent.prototype._isOpen;
    /** @type {?} */
    UiCollapseContentDetailComponent.prototype.isOpenCange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY29sbGFwc2UtY29udGVudC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1jb2xsYXBzZS1jb250ZW50LWRldGFpbC91aS1jb2xsYXBzZS1jb250ZW50LWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEdBQUcsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRjtJQW9DRTtRQWZRLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFTZCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNM0IsQ0FBQztJQWRqQixzQkFDSSxvREFBTTs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBQ0QsVUFBVyxHQUFHO1lBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUpBOzs7O0lBT0QsdURBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDOzs7O0lBSUQsbURBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO29CQUMxQyw0SEFBMEQ7b0JBRTFELFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsV0FBVyxFQUFFOzRCQUNuQixLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztnQ0FDZixNQUFNLEVBQUUsR0FBRzs2QkFDWixDQUFDLENBQUM7NEJBQ0gsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7Z0NBQ2xCLE1BQU0sRUFBRSxHQUFHOzZCQUNaLENBQUMsQ0FBQzs0QkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztnQ0FDcEIsTUFBTSxFQUFFLEdBQUc7NkJBQ1osQ0FBQyxDQUFDOzRCQUNILFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQzt5QkFDNUQsQ0FBQztxQkFDSDs7aUJBQ0Y7Ozs7eUJBSUUsS0FBSzs4QkFRTCxNQUFNOztJQVdULHVDQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0F0QlksZ0NBQWdDOzs7Ozs7SUFFM0MsbURBQXdCOztJQVN4Qix1REFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24sIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuZC11aS1jb2xsYXBzZS1jb250ZW50LWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1jb2xsYXBzZS1jb250ZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWNvbGxhcHNlLWNvbnRlbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdvcGVuQ2xvc2UnLCBbXG4gICAgICBzdGF0ZSgnKicsIHN0eWxlKHtcbiAgICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHtcbiAgICAgICAgaGVpZ2h0OiAnKicsXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnY2xvc2VkJywgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ29wZW4gPD0+IGNsb3NlZCcsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4tb3V0JykpXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFVpQ29sbGFwc2VDb250ZW50RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIF9pc09wZW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZ2V0IGlzT3Blbigpe1xuICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gIH1cbiAgc2V0IGlzT3Blbih2YWwpe1xuICAgIHRoaXMuX2lzT3BlbiA9IHZhbDtcbiAgICB0aGlzLmlzT3BlbkNhbmdlLmVtaXQodGhpcy5faXNPcGVuKTtcbiAgfVxuICBAT3V0cHV0KCkgaXNPcGVuQ2FuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaXNPcGVuU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLl9pc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19