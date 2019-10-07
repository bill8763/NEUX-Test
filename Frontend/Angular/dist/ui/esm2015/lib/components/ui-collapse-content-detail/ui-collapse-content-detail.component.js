/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
export class UiCollapseContentDetailComponent {
    constructor() {
        this._isOpen = false;
        this.isOpenCange = new EventEmitter();
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
        this.isOpenCange.emit(this._isOpen);
    }
    /**
     * @return {?}
     */
    isOpenStatus() {
        return this._isOpen ? 'open' : 'closed';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
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
UiCollapseContentDetailComponent.ctorParameters = () => [];
UiCollapseContentDetailComponent.propDecorators = {
    isOpen: [{ type: Input }],
    isOpenCange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    UiCollapseContentDetailComponent.prototype._isOpen;
    /** @type {?} */
    UiCollapseContentDetailComponent.prototype.isOpenCange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY29sbGFwc2UtY29udGVudC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1jb2xsYXBzZS1jb250ZW50LWRldGFpbC91aS1jb2xsYXBzZS1jb250ZW50LWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEdBQUcsTUFBTSxxQkFBcUIsQ0FBQztBQXFCbEYsTUFBTTtJQWlCSjtRQWZRLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFTZCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNM0IsQ0FBQzs7OztJQWRqQixJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFDRCxJQUFJLE1BQU0sQ0FBQyxHQUFHO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFHRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDOzs7O0lBSUQsUUFBUTtJQUNSLENBQUM7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsNEhBQTBEO2dCQUUxRCxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLFdBQVcsRUFBRTt3QkFDbkIsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7NEJBQ2YsTUFBTSxFQUFFLEdBQUc7eUJBQ1osQ0FBQyxDQUFDO3dCQUNILEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDOzRCQUNsQixNQUFNLEVBQUUsR0FBRzt5QkFDWixDQUFDLENBQUM7d0JBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7NEJBQ3BCLE1BQU0sRUFBRSxHQUFHO3lCQUNaLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7cUJBQzVELENBQUM7aUJBQ0g7O2FBQ0Y7Ozs7cUJBSUUsS0FBSzswQkFRTCxNQUFNOzs7Ozs7O0lBVFAsbURBQXdCOztJQVN4Qix1REFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24sIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuZC11aS1jb2xsYXBzZS1jb250ZW50LWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1jb2xsYXBzZS1jb250ZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWNvbGxhcHNlLWNvbnRlbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdvcGVuQ2xvc2UnLCBbXG4gICAgICBzdGF0ZSgnKicsIHN0eWxlKHtcbiAgICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHtcbiAgICAgICAgaGVpZ2h0OiAnKicsXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnY2xvc2VkJywgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ29wZW4gPD0+IGNsb3NlZCcsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4tb3V0JykpXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFVpQ29sbGFwc2VDb250ZW50RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIF9pc09wZW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZ2V0IGlzT3Blbigpe1xuICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gIH1cbiAgc2V0IGlzT3Blbih2YWwpe1xuICAgIHRoaXMuX2lzT3BlbiA9IHZhbDtcbiAgICB0aGlzLmlzT3BlbkNhbmdlLmVtaXQodGhpcy5faXNPcGVuKTtcbiAgfVxuICBAT3V0cHV0KCkgaXNPcGVuQ2FuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaXNPcGVuU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLl9pc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19