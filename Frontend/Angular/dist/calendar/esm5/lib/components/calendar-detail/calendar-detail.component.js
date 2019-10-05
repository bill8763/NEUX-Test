/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isSameDay } from 'date-fns';
import { Language } from '@allianzSND/core';
import { StringUtils } from '@allianzSND/core';
var CalendarDetailComponent = /** @class */ (function () {
    function CalendarDetailComponent() {
        this.language = new Language();
        this.isSameDay = true;
    }
    Object.defineProperty(CalendarDetailComponent.prototype, "calendarEventDetail", {
        get: /**
         * @return {?}
         */
        function () { return this._calendarEventDetail; },
        set: /**
         * @param {?} calendarEventDetail
         * @return {?}
         */
        function (calendarEventDetail) {
            if (StringUtils.isNotEmpty(calendarEventDetail)) {
                this._calendarEventDetail = calendarEventDetail;
                this.isSameDay = isSameDay(this._calendarEventDetail.end, this._calendarEventDetail.start);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarDetailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CalendarDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-calendar-detail',
                    template: "<div class=\"calendar-detail-content\">\n  <ng-container *ngIf=\"calendarEventDetail\">\n\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.title | translate}}</ng-container>\n            <ng-container textType=\"text\">{{calendarEventDetail.title}}</ng-container>\n          </app-ui-info-text2>\n\n        <ng-container *ngIf=\"calendarEventDetail.location != ''\">\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.location | translate}}</ng-container>\n            <ng-container textType=\"text\">{{calendarEventDetail.location}}</ng-container>\n          </app-ui-info-text2>\n        </ng-container>\n\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.activity | translate}}</ng-container>\n            <ng-container textType=\"text\">{{calendarEventDetail.displayActivity}}</ng-container>\n          </app-ui-info-text2>\n\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.date | translate}}</ng-container>\n            <ng-container textType=\"text\" *ngIf=\"calendarEventDetail.allDay == true\">\n              {{ calendarEventDetail.start | date: 'MM/dd/y' }}-{{\n              calendarEventDetail.end | date: 'MM/dd/y' }}</ng-container>\n            <ng-container textType=\"text\" *ngIf=\"calendarEventDetail.allDay == false && isSameDay\">\n              {{ calendarEventDetail.start | date: 'MM/dd/y HH:mm' }}-{{\n              calendarEventDetail.end | date: 'HH:mm' }}</ng-container>\n            <ng-container textType=\"text\" *ngIf=\"calendarEventDetail.allDay == false && !isSameDay\">\n              {{ calendarEventDetail.start | date: 'MM/dd/y HH:mm' }}-<br />\n              {{ calendarEventDetail.end | date: 'MM/dd/y HH:mm' }}</ng-container>\n          </app-ui-info-text2>\n\n        <ng-container *ngIf=\"calendarEventDetail.isAlert != false\">\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.alert | translate}}</ng-container>\n            <ng-container textType=\"text\">\n              {{calendarEventDetail.displayAlert1}}\n              <br />\n              {{calendarEventDetail.displayAlert2}}\n            </ng-container>\n          </app-ui-info-text2>\n        </ng-container>\n\n        <ng-container *ngIf=\"calendarEventDetail.remark != '' && calendarEventDetail.remark != null\">\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.remark | translate}}</ng-container>\n            <ng-container textType=\"text\">{{calendarEventDetail.remark}}</ng-container>\n          </app-ui-info-text2>\n        </ng-container>\n  </ng-container>\n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.calendar-detail-content{padding-top:30px}.calendar-detail-content ::ng-deep .gas-layout-form .gas-row-block:first-child{margin-top:0}.calendar-detail-content ::ng-deep app-ui-info-text2:not(:last-child){display:block;margin-bottom:30px}.calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .title-block{margin-bottom:0}.calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .text-block>p{color:#414141;font-weight:300}@media screen and (max-width:1023px){.calendar-detail-content{padding-top:0}}"]
                }] }
    ];
    CalendarDetailComponent.ctorParameters = function () { return []; };
    CalendarDetailComponent.propDecorators = {
        calendarEventDetail: [{ type: Input }]
    };
    return CalendarDetailComponent;
}());
export { CalendarDetailComponent };
if (false) {
    /** @type {?} */
    CalendarDetailComponent.prototype.language;
    /** @type {?} */
    CalendarDetailComponent.prototype._calendarEventDetail;
    /** @type {?} */
    CalendarDetailComponent.prototype.isSameDay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FsZW5kYXItZGV0YWlsL2NhbGVuZGFyLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWdCLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFN0UsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNuQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRTdDO0lBb0JFO1FBTE8sYUFBUSxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7UUFFckMsY0FBUyxHQUFZLElBQUksQ0FBQztJQUdqQixDQUFDO0lBZGpCLHNCQUNJLHdEQUFtQjs7OztRQUR2QixjQUMyQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQSxDQUFBLENBQUM7Ozs7O1FBQzVELFVBQXdCLG1CQUFtQjtZQUN6QyxJQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDO2dCQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1RjtRQUNILENBQUM7OztPQU4yRDs7OztJQWU1RCwwQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHVxRkFBK0M7O2lCQUVoRDs7OztzQ0FFRSxLQUFLOztJQWtCUiw4QkFBQztDQUFBLEFBeEJELElBd0JDO1NBbkJZLHVCQUF1Qjs7O0lBVWxDLDJDQUE0Qzs7SUFDNUMsdURBQWlEOztJQUNqRCw0Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYWxlbmRhckV2ZW50RGV0YWlsfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2NhbGVuZGFyL21vZGVsL0NhbGVuZGFyRXZlbnREZXRhaWwnO1xuaW1wb3J0IHtpc1NhbWVEYXl9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7TGFuZ3VhZ2V9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtTdHJpbmdVdGlsc30gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuZC1jYWxlbmRhci1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXItZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXItZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBnZXQgY2FsZW5kYXJFdmVudERldGFpbCgpIHtyZXR1cm4gdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbH1cbiAgc2V0IGNhbGVuZGFyRXZlbnREZXRhaWwoY2FsZW5kYXJFdmVudERldGFpbCkge1xuICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY2FsZW5kYXJFdmVudERldGFpbCkpIHtcbiAgICAgIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwgPSBjYWxlbmRhckV2ZW50RGV0YWlsO1xuICAgICAgdGhpcy5pc1NhbWVEYXkgPSBpc1NhbWVEYXkodGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5lbmQsIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuc3RhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBsYW5ndWFnZSA6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHB1YmxpYyBfY2FsZW5kYXJFdmVudERldGFpbDogQ2FsZW5kYXJFdmVudERldGFpbDsgLy9EZXRhaWxcbiAgcHVibGljIGlzU2FtZURheTogYm9vbGVhbiA9IHRydWU7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iXX0=