/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { isSameDay } from 'date-fns';
export class UiCalendarEventListComponent {
    constructor() {
        this.eventList = [];
        this.translateMap = new Map();
        this.textColorStyle = ''; //'', textColorStyle
        this.clickEvent = new EventEmitter();
        this.styleText = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styleText = this.textColorStyle == 'grey' ? ' style-grey' : '';
    }
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    isSameDay(start, end) {
        return isSameDay(start, end);
    }
    /**
     * @param {?} eventItem
     * @return {?}
     */
    clickEventItem(eventItem) {
        console.warn('ui-calendar-eventList.component clickEventItem');
        this.clickEvent.emit(eventItem);
    } // end clickEventItem
}
UiCalendarEventListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-calendar-event-list',
                template: "<app-ui-text-type [colorCode]=\"colorCode\" [ngClass]=\"styleText\" [title]=\"title\">\n  <ng-container *ngFor=\" let event of eventList\">\n    <app-ui-text-type-item [colorCode]=\"event.color&&event.color.primary?event.color.primary:''\" (click)=\"clickEventItem(event)\">\n      <p *ngIf=\"event.allDay && !isSameDay(event.start,event.end)\"> {{translateMap.get('Cross_Day') ? translateMap.get('Cross_Day') : 'Cross days'}}</p>\n      <p *ngIf=\"event.allDay && isSameDay(event.start,event.end)\"> {{translateMap.get('All_Day') ? translateMap.get('All_Day') : 'All day'}}</p>\n      <p *ngIf=\"!event.allDay\">{{ event.start | date: 'HH:mm' }}-{{ event.end | date: 'HH:mm' }}</p>\n      <p>{{ event.title }}</p>\n      <p>{{ event.location }}</p>\n    </app-ui-text-type-item>\n  </ng-container>\n  <ng-container *ngIf=\"eventList.length == 0\">\n    <ng-content select=\"[scheduleNoData]\"></ng-content>\n  </ng-container>\n</app-ui-text-type>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host .style-grey app-ui-text-type-item ::ng-deep .ui-text-type-content p{color:#c2c2c2}:host app-ui-text-type-item ::ng-deep .ui-text-type-content{flex:1;min-width:1px}:host app-ui-text-type-item ::ng-deep .ui-text-type-content p{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
            }] }
];
UiCalendarEventListComponent.ctorParameters = () => [];
UiCalendarEventListComponent.propDecorators = {
    eventList: [{ type: Input }],
    title: [{ type: Input }],
    colorCode: [{ type: Input }],
    translateMap: [{ type: Input }],
    textColorStyle: [{ type: Input }],
    clickEvent: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY2FsZW5kYXItZXZlbnQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWNhbGVuZGFyLWV2ZW50LWxpc3QvdWktY2FsZW5kYXItZXZlbnQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUNMLFNBQVMsRUFDVixNQUFNLFVBQVUsQ0FBQztBQU9sQixNQUFNO0lBV0o7UUFUUyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBR2YsaUJBQVksR0FBdUIsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDN0QsbUJBQWMsR0FBVyxFQUFFLENBQUMsQ0FBQyxvQkFBb0I7UUFFaEQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUVDLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RFLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFXLEVBQUUsR0FBUztRQUM5QixPQUFPLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsU0FBUztRQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLHFCQUFxQjs7O1lBN0J4QixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsaThCQUFzRDs7YUFFdkQ7Ozs7d0JBR0UsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUVMLE1BQU07Ozs7SUFOUCxpREFBd0I7O0lBQ3hCLDZDQUF1Qjs7SUFDdkIsaURBQTJCOztJQUMzQixvREFBc0U7O0lBQ3RFLHNEQUFxQzs7SUFFckMsa0RBQTBDOztJQUMxQyxpREFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGlzU2FtZURheVxufSBmcm9tICdkYXRlLWZucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1jYWxlbmRhci1ldmVudC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWNhbGVuZGFyLWV2ZW50LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1jYWxlbmRhci1ldmVudC1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlDYWxlbmRhckV2ZW50TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZXZlbnRMaXN0ID0gW107XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yQ29kZTogc3RyaW5nO1xuICBASW5wdXQoKSB0cmFuc2xhdGVNYXA6IE1hcDxzdHJpbmcsc3RyaW5nPiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIEBJbnB1dCgpIHRleHRDb2xvclN0eWxlOiBzdHJpbmcgPSAnJzsgLy8nJywgdGV4dENvbG9yU3R5bGVcblxuICBAT3V0cHV0KCkgY2xpY2tFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgc3R5bGVUZXh0ID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlVGV4dCA9IHRoaXMudGV4dENvbG9yU3R5bGUgPT0gJ2dyZXknID8gJyBzdHlsZS1ncmV5JyA6ICcnO1xuICB9XG5cbiAgaXNTYW1lRGF5KHN0YXJ0OiBEYXRlLCBlbmQ6IERhdGUpIHsgLy8gY2hlY2sgaXMgc2FtZSBkYXlcbiAgICByZXR1cm4gaXNTYW1lRGF5KHN0YXJ0LCBlbmQpO1xuICB9XG5cbiAgY2xpY2tFdmVudEl0ZW0oZXZlbnRJdGVtKSB7XG4gICAgY29uc29sZS53YXJuKCd1aS1jYWxlbmRhci1ldmVudExpc3QuY29tcG9uZW50IGNsaWNrRXZlbnRJdGVtJyk7XG4gICAgdGhpcy5jbGlja0V2ZW50LmVtaXQoZXZlbnRJdGVtKTtcbiAgfSAvLyBlbmQgY2xpY2tFdmVudEl0ZW1cblxufVxuIl19