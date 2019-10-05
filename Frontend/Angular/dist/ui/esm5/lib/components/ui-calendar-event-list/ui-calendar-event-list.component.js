/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { isSameDay } from 'date-fns';
var UiCalendarEventListComponent = /** @class */ (function () {
    function UiCalendarEventListComponent() {
        this.eventList = [];
        this.translateMap = new Map();
        this.textColorStyle = ''; //'', textColorStyle
        this.clickEvent = new EventEmitter();
        this.styleText = '';
    }
    /**
     * @return {?}
     */
    UiCalendarEventListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleText = this.textColorStyle == 'grey' ? ' style-grey' : '';
    };
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    UiCalendarEventListComponent.prototype.isSameDay = /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        return isSameDay(start, end);
    };
    /**
     * @param {?} eventItem
     * @return {?}
     */
    UiCalendarEventListComponent.prototype.clickEventItem = /**
     * @param {?} eventItem
     * @return {?}
     */
    function (eventItem) {
        console.warn('ui-calendar-eventList.component clickEventItem');
        this.clickEvent.emit(eventItem);
    }; // end clickEventItem
    UiCalendarEventListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-calendar-event-list',
                    template: "<app-ui-text-type [colorCode]=\"colorCode\" [ngClass]=\"styleText\" [title]=\"title\">\n  <ng-container *ngFor=\" let event of eventList\">\n    <app-ui-text-type-item [colorCode]=\"event.color&&event.color.primary?event.color.primary:''\" (click)=\"clickEventItem(event)\">\n      <p *ngIf=\"event.allDay && !isSameDay(event.start,event.end)\"> {{translateMap.get('Cross_Day') ? translateMap.get('Cross_Day') : 'Cross days'}}</p>\n      <p *ngIf=\"event.allDay && isSameDay(event.start,event.end)\"> {{translateMap.get('All_Day') ? translateMap.get('All_Day') : 'All day'}}</p>\n      <p *ngIf=\"!event.allDay\">{{ event.start | date: 'HH:mm' }}-{{ event.end | date: 'HH:mm' }}</p>\n      <p>{{ event.title }}</p>\n      <p>{{ event.location }}</p>\n    </app-ui-text-type-item>\n  </ng-container>\n  <ng-container *ngIf=\"eventList.length == 0\">\n    <ng-content select=\"[scheduleNoData]\"></ng-content>\n  </ng-container>\n</app-ui-text-type>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host .style-grey app-ui-text-type-item ::ng-deep .ui-text-type-content p{color:#c2c2c2}:host app-ui-text-type-item ::ng-deep .ui-text-type-content{flex:1;min-width:1px}:host app-ui-text-type-item ::ng-deep .ui-text-type-content p{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
                }] }
    ];
    UiCalendarEventListComponent.ctorParameters = function () { return []; };
    UiCalendarEventListComponent.propDecorators = {
        eventList: [{ type: Input }],
        title: [{ type: Input }],
        colorCode: [{ type: Input }],
        translateMap: [{ type: Input }],
        textColorStyle: [{ type: Input }],
        clickEvent: [{ type: Output }]
    };
    return UiCalendarEventListComponent;
}());
export { UiCalendarEventListComponent };
if (false) {
    /** @type {?} */
    UiCalendarEventListComponent.prototype.eventList;
    /** @type {?} */
    UiCalendarEventListComponent.prototype.title;
    /** @type {?} */
    UiCalendarEventListComponent.prototype.colorCode;
    /** @type {?} */
    UiCalendarEventListComponent.prototype.translateMap;
    /** @type {?} */
    UiCalendarEventListComponent.prototype.textColorStyle;
    /** @type {?} */
    UiCalendarEventListComponent.prototype.clickEvent;
    /** @type {?} */
    UiCalendarEventListComponent.prototype.styleText;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY2FsZW5kYXItZXZlbnQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWNhbGVuZGFyLWV2ZW50LWxpc3QvdWktY2FsZW5kYXItZXZlbnQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUNMLFNBQVMsRUFDVixNQUFNLFVBQVUsQ0FBQztBQUVsQjtJQWdCRTtRQVRTLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFHZixpQkFBWSxHQUF1QixJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUM3RCxtQkFBYyxHQUFXLEVBQUUsQ0FBQyxDQUFDLG9CQUFvQjtRQUVoRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyxjQUFTLEdBQUcsRUFBRSxDQUFDO0lBRUMsQ0FBQzs7OztJQUVqQiwrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFFRCxnREFBUzs7Ozs7SUFBVCxVQUFVLEtBQVcsRUFBRSxHQUFTO1FBQzlCLE9BQU8sU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELHFEQUFjOzs7O0lBQWQsVUFBZSxTQUFTO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDLEVBQUMscUJBQXFCOztnQkE3QnhCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxpOEJBQXNEOztpQkFFdkQ7Ozs7NEJBR0UsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLOzZCQUVMLE1BQU07O0lBa0JULG1DQUFDO0NBQUEsQUEvQkQsSUErQkM7U0ExQlksNEJBQTRCOzs7SUFFdkMsaURBQXdCOztJQUN4Qiw2Q0FBdUI7O0lBQ3ZCLGlEQUEyQjs7SUFDM0Isb0RBQXNFOztJQUN0RSxzREFBcUM7O0lBRXJDLGtEQUEwQzs7SUFDMUMsaURBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBpc1NhbWVEYXlcbn0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktY2FsZW5kYXItZXZlbnQtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1jYWxlbmRhci1ldmVudC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktY2FsZW5kYXItZXZlbnQtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpQ2FsZW5kYXJFdmVudExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGV2ZW50TGlzdCA9IFtdO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvckNvZGU6IHN0cmluZztcbiAgQElucHV0KCkgdHJhbnNsYXRlTWFwOiBNYXA8c3RyaW5nLHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICBASW5wdXQoKSB0ZXh0Q29sb3JTdHlsZTogc3RyaW5nID0gJyc7IC8vJycsIHRleHRDb2xvclN0eWxlXG5cbiAgQE91dHB1dCgpIGNsaWNrRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHN0eWxlVGV4dCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZVRleHQgPSB0aGlzLnRleHRDb2xvclN0eWxlID09ICdncmV5JyA/ICcgc3R5bGUtZ3JleScgOiAnJztcbiAgfVxuXG4gIGlzU2FtZURheShzdGFydDogRGF0ZSwgZW5kOiBEYXRlKSB7IC8vIGNoZWNrIGlzIHNhbWUgZGF5XG4gICAgcmV0dXJuIGlzU2FtZURheShzdGFydCwgZW5kKTtcbiAgfVxuXG4gIGNsaWNrRXZlbnRJdGVtKGV2ZW50SXRlbSkge1xuICAgIGNvbnNvbGUud2FybigndWktY2FsZW5kYXItZXZlbnRMaXN0LmNvbXBvbmVudCBjbGlja0V2ZW50SXRlbScpO1xuICAgIHRoaXMuY2xpY2tFdmVudC5lbWl0KGV2ZW50SXRlbSk7XG4gIH0gLy8gZW5kIGNsaWNrRXZlbnRJdGVtXG5cbn1cbiJdfQ==