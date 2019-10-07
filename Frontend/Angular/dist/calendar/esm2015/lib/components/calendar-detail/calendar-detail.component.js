/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isSameDay } from 'date-fns';
import { Language } from '@allianzSND/core';
import { StringUtils } from '@allianzSND/core';
export class CalendarDetailComponent {
    constructor() {
        this.language = new Language();
        this.isSameDay = true;
    }
    /**
     * @return {?}
     */
    get calendarEventDetail() { return this._calendarEventDetail; }
    /**
     * @param {?} calendarEventDetail
     * @return {?}
     */
    set calendarEventDetail(calendarEventDetail) {
        if (StringUtils.isNotEmpty(calendarEventDetail)) {
            this._calendarEventDetail = calendarEventDetail;
            this.isSameDay = isSameDay(this._calendarEventDetail.end, this._calendarEventDetail.start);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CalendarDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-calendar-detail',
                template: "<div class=\"calendar-detail-content\">\n  <ng-container *ngIf=\"calendarEventDetail\">\n\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.title | translate}}</ng-container>\n            <ng-container textType=\"text\">{{calendarEventDetail.title}}</ng-container>\n          </app-ui-info-text2>\n\n        <ng-container *ngIf=\"calendarEventDetail.location != ''\">\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.location | translate}}</ng-container>\n            <ng-container textType=\"text\">{{calendarEventDetail.location}}</ng-container>\n          </app-ui-info-text2>\n        </ng-container>\n\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.activity | translate}}</ng-container>\n            <ng-container textType=\"text\">{{calendarEventDetail.displayActivity}}</ng-container>\n          </app-ui-info-text2>\n\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.date | translate}}</ng-container>\n            <ng-container textType=\"text\" *ngIf=\"calendarEventDetail.allDay == true\">\n              {{ calendarEventDetail.start | date: 'MM/dd/y' }}-{{\n              calendarEventDetail.end | date: 'MM/dd/y' }}</ng-container>\n            <ng-container textType=\"text\" *ngIf=\"calendarEventDetail.allDay == false && isSameDay\">\n              {{ calendarEventDetail.start | date: 'MM/dd/y HH:mm' }}-{{\n              calendarEventDetail.end | date: 'HH:mm' }}</ng-container>\n            <ng-container textType=\"text\" *ngIf=\"calendarEventDetail.allDay == false && !isSameDay\">\n              {{ calendarEventDetail.start | date: 'MM/dd/y HH:mm' }}-<br />\n              {{ calendarEventDetail.end | date: 'MM/dd/y HH:mm' }}</ng-container>\n          </app-ui-info-text2>\n\n        <ng-container *ngIf=\"calendarEventDetail.isAlert != false\">\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.alert | translate}}</ng-container>\n            <ng-container textType=\"text\">\n              {{calendarEventDetail.displayAlert1}}\n              <br />\n              {{calendarEventDetail.displayAlert2}}\n            </ng-container>\n          </app-ui-info-text2>\n        </ng-container>\n\n        <ng-container *ngIf=\"calendarEventDetail.remark != '' && calendarEventDetail.remark != null\">\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.remark | translate}}</ng-container>\n            <ng-container textType=\"text\">{{calendarEventDetail.remark}}</ng-container>\n          </app-ui-info-text2>\n        </ng-container>\n  </ng-container>\n</div>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.calendar-detail-content{padding-top:30px}.calendar-detail-content ::ng-deep .gas-layout-form .gas-row-block:first-child{margin-top:0}.calendar-detail-content ::ng-deep app-ui-info-text2:not(:last-child){display:block;margin-bottom:30px}.calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .title-block{margin-bottom:0}.calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .text-block>p{color:#414141;font-weight:300}@media screen and (max-width:1023px){.calendar-detail-content{padding-top:0}}"]
            }] }
];
CalendarDetailComponent.ctorParameters = () => [];
CalendarDetailComponent.propDecorators = {
    calendarEventDetail: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CalendarDetailComponent.prototype.language;
    /** @type {?} */
    CalendarDetailComponent.prototype._calendarEventDetail;
    /** @type {?} */
    CalendarDetailComponent.prototype.isSameDay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FsZW5kYXItZGV0YWlsL2NhbGVuZGFyLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWdCLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFN0UsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNuQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBTzdDLE1BQU07SUFlSjtRQUxPLGFBQVEsR0FBYyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBRXJDLGNBQVMsR0FBWSxJQUFJLENBQUM7SUFHakIsQ0FBQzs7OztJQWRqQixJQUNJLG1CQUFtQixLQUFJLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFBLENBQUEsQ0FBQzs7Ozs7SUFDNUQsSUFBSSxtQkFBbUIsQ0FBQyxtQkFBbUI7UUFDekMsSUFBRyxXQUFXLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDO1lBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVGO0lBQ0gsQ0FBQzs7OztJQVNELFFBQVE7SUFDUixDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHVxRkFBK0M7O2FBRWhEOzs7O2tDQUVFLEtBQUs7Ozs7SUFTTiwyQ0FBNEM7O0lBQzVDLHVEQUFpRDs7SUFDakQsNENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2FsZW5kYXJFdmVudERldGFpbH0gZnJvbSAnLi4vLi4vc2VydmljZS9jYWxlbmRhci9tb2RlbC9DYWxlbmRhckV2ZW50RGV0YWlsJztcbmltcG9ydCB7aXNTYW1lRGF5fSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQge0xhbmd1YWdlfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7U3RyaW5nVXRpbHN9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtY2FsZW5kYXItZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZ2V0IGNhbGVuZGFyRXZlbnREZXRhaWwoKSB7cmV0dXJuIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWx9XG4gIHNldCBjYWxlbmRhckV2ZW50RGV0YWlsKGNhbGVuZGFyRXZlbnREZXRhaWwpIHtcbiAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KGNhbGVuZGFyRXZlbnREZXRhaWwpKSB7XG4gICAgICB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsID0gY2FsZW5kYXJFdmVudERldGFpbDtcbiAgICAgIHRoaXMuaXNTYW1lRGF5ID0gaXNTYW1lRGF5KHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuZW5kLCB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLnN0YXJ0KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbGFuZ3VhZ2UgOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuICBwdWJsaWMgX2NhbGVuZGFyRXZlbnREZXRhaWw6IENhbGVuZGFyRXZlbnREZXRhaWw7IC8vRGV0YWlsXG4gIHB1YmxpYyBpc1NhbWVEYXk6IGJvb2xlYW4gPSB0cnVlO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIl19