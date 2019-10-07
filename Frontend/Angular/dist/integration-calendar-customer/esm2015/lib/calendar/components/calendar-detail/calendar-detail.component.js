/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional, Inject, Output, EventEmitter } from '@angular/core';
import { isSameDay } from 'date-fns';
import { Language, MetaService, DisplayMetaComponent, ProfileCodeService, DefaultMetaParser, APIExecutor } from '@allianzSND/core';
import { StringUtils } from '@allianzSND/core';
import { calendarDetailMetaControllerToken } from '../../injection-token';
import { DefaultCalendarDetailMetaController } from './DefaultCalendarDetailMetaController';
import { DatePipe } from '@angular/common';
export class CalendarDetailComponent extends DisplayMetaComponent {
    /**
     * @param {?} DatePipe
     * @param {?} metaService
     * @param {?} profileCodeService
     * @param {?} metaParser
     * @param {?} metaExecutor
     * @param {?} defaulterMetaController
     * @param {?} customMetaController
     */
    constructor(DatePipe, metaService, profileCodeService, metaParser, metaExecutor, defaulterMetaController, customMetaController) {
        super(metaService, profileCodeService, metaParser, metaExecutor);
        this.DatePipe = DatePipe;
        this.isMetaDataDone = new EventEmitter();
        this._customerClientName = '';
        this.language = new Language();
        this.isSameDay = true;
        this.isAllDay = false;
        this._metaController = null;
        this._clientID = '';
        if (customMetaController) {
            this._metaController = customMetaController;
        }
        else
            this._metaController = defaulterMetaController;
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
            this.isAllDay = calendarEventDetail.allDay;
            this._clientID = calendarEventDetail.clientID;
            if (this.isMetaLoaded())
                this.loadData();
        }
    }
    /**
     * @return {?}
     */
    get customerClientName() {
        return this._customerClientName;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set customerClientName(val) {
        this._customerClientName = val;
        this.waitUntilMetaLoaded().then((/**
         * @return {?}
         */
        () => {
            this.onDataUpdated();
        }));
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get rowConfig() {
        return this.metaConfig.Rows;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
    }
    /**
     * @return {?}
     */
    getMetaID() {
        return 'calendarDetail';
    }
    /**
     * @return {?}
     */
    getMetaParams() {
        return {
            _clientID: this._clientID
        };
    }
    /**
     * @return {?}
     */
    onDataUpdated() {
        super.onDataUpdated();
        console.log("calendar-detail onDataUpdated:", this._data);
        this._data["CustomerClientName"] = this._customerClientName;
        this._data["DisplayDate"] = this.getDisplayDateHTML();
        this.isMetaDataDone.emit(true);
    }
    /**
     * @private
     * @return {?}
     */
    getDisplayDateHTML() {
        /** @type {?} */
        let _HTML = '';
        /** @type {?} */
        let start = new Date(this._data["StartTime"]);
        /** @type {?} */
        let end = new Date(this._data["EndTime"]);
        if (this.isAllDay) {
            _HTML = `${this.DatePipe.transform(start, 'MM/dd/y')}-${this.DatePipe.transform(end, 'MM/dd/y')}`;
        }
        else {
            if (this.isSameDay)
                _HTML = `${this.DatePipe.transform(start, 'MM/dd/y HH:mm')}-${this.DatePipe.transform(end, 'HH:mm')}`;
            else
                _HTML = `${this.DatePipe.transform(start, 'MM/dd/y HH:mm')}-<br />${this.DatePipe.transform(end, 'MM/dd/y HH:mm')}`;
        }
        return _HTML;
    }
}
CalendarDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-calendar-detail',
                template: "<div class=\"calendar-detail-content\">\n  <ng-container *ngIf=\"data && isMetaLoaded()\">\n    <ng-container *ngFor=\"let row of rowConfig\">\n      <app-ui-info-text2 *ngIf=\"data[row[0].id]\">\n        <ng-container textType=\"title\">{{row[0].name | translate}}</ng-container>\n        <ng-container *ngFor=\"let col of row; last as isLast\" textType=\"text\">\n          <span [innerHtml]=\"data[col.id]\"></span>\n          <br *ngIf=\"!isLast\" />\n        </ng-container>\n      </app-ui-info-text2>\n    </ng-container>\n  </ng-container>\n</div>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.calendar-detail-content{padding-top:30px}.calendar-detail-content ::ng-deep .gas-layout-form .gas-row-block:first-child{margin-top:0}.calendar-detail-content ::ng-deep app-ui-info-text2:not(:last-child){display:block;margin-bottom:30px}.calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .title-block{margin-bottom:0}.calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .text-block>p{color:#414141;font-weight:300}@media screen and (max-width:1023px){.calendar-detail-content{padding-top:0}}"]
            }] }
];
CalendarDetailComponent.ctorParameters = () => [
    { type: DatePipe },
    { type: MetaService },
    { type: ProfileCodeService },
    { type: DefaultMetaParser },
    { type: APIExecutor },
    { type: DefaultCalendarDetailMetaController },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [calendarDetailMetaControllerToken,] }] }
];
CalendarDetailComponent.propDecorators = {
    isMetaDataDone: [{ type: Output }],
    calendarEventDetail: [{ type: Input }],
    customerClientName: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CalendarDetailComponent.prototype.isMetaDataDone;
    /**
     * @type {?}
     * @private
     */
    CalendarDetailComponent.prototype._customerClientName;
    /** @type {?} */
    CalendarDetailComponent.prototype.language;
    /** @type {?} */
    CalendarDetailComponent.prototype._calendarEventDetail;
    /** @type {?} */
    CalendarDetailComponent.prototype.isSameDay;
    /** @type {?} */
    CalendarDetailComponent.prototype.isAllDay;
    /**
     * @type {?}
     * @private
     */
    CalendarDetailComponent.prototype._metaController;
    /**
     * @type {?}
     * @private
     */
    CalendarDetailComponent.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    CalendarDetailComponent.prototype.DatePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2NvbXBvbmVudHMvY2FsZW5kYXItZGV0YWlsL2NhbGVuZGFyLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFrQixvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQWMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvSixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTzNDLE1BQU0sOEJBQStCLFNBQVEsb0JBQW9COzs7Ozs7Ozs7O0lBaUQvRCxZQUNVLFFBQWtCLEVBQzFCLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxVQUE2QixFQUM3QixZQUF5QixFQUN6Qix1QkFBNEQsRUFDTCxvQkFBb0M7UUFFM0YsS0FBSyxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFSekQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWhEbEIsbUJBQWMsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWU3RCx3QkFB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akIsS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDO1NBQ25HO2FBQ0k7WUFDSCxJQUFJLElBQUksQ0FBQyxTQUFTO2dCQUNoQixLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUM7O2dCQUV0RyxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLFVBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUM7U0FDdkg7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQTVHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IseWpCQUErQzs7YUFFaEQ7OztZQU5RLFFBQVE7WUFKRSxXQUFXO1lBQXdDLGtCQUFrQjtZQUFFLGlCQUFpQjtZQUFFLFdBQVc7WUFHL0csbUNBQW1DOzRDQWdFdkMsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQ0FBaUM7Ozs2QkF0RHRELE1BQU07a0NBRU4sS0FBSztpQ0FlTCxLQUFLOzs7O0lBakJOLGlEQUFxRTs7Ozs7SUFlckUsc0RBQWlDOztJQXVCakMsMkNBQTJDOztJQUMzQyx1REFBaUQ7O0lBQ2pELDRDQUFpQzs7SUFDakMsMkNBQWlDOzs7OztJQUVqQyxrREFBK0I7Ozs7O0lBQy9CLDRDQUErQjs7Ozs7SUFJN0IsMkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPcHRpb25hbCwgSW5qZWN0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudERldGFpbCB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvQ2FsZW5kYXJFdmVudERldGFpbCc7XG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBMYW5ndWFnZSwgTWV0YVNlcnZpY2UsIE1ldGFDb250cm9sbGVyLCBEaXNwbGF5TWV0YUNvbXBvbmVudCwgUHJvZmlsZUNvZGVTZXJ2aWNlLCBEZWZhdWx0TWV0YVBhcnNlciwgQVBJRXhlY3V0b3IsIE1ldGFDb2x1bW4gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBjYWxlbmRhckRldGFpbE1ldGFDb250cm9sbGVyVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgRGVmYXVsdENhbGVuZGFyRGV0YWlsTWV0YUNvbnRyb2xsZXIgfSBmcm9tICcuL0RlZmF1bHRDYWxlbmRhckRldGFpbE1ldGFDb250cm9sbGVyJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25kLWNhbGVuZGFyLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRldGFpbENvbXBvbmVudCBleHRlbmRzIERpc3BsYXlNZXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAT3V0cHV0KCkgaXNNZXRhRGF0YURvbmU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgXG4gIEBJbnB1dCgpXG4gIGdldCBjYWxlbmRhckV2ZW50RGV0YWlsKCkgeyByZXR1cm4gdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbCB9XG4gIHNldCBjYWxlbmRhckV2ZW50RGV0YWlsKGNhbGVuZGFyRXZlbnREZXRhaWwpIHtcbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjYWxlbmRhckV2ZW50RGV0YWlsKSkge1xuICAgICAgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbCA9IGNhbGVuZGFyRXZlbnREZXRhaWw7XG4gICAgICB0aGlzLmlzU2FtZURheSA9IGlzU2FtZURheSh0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmVuZCwgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5zdGFydCk7XG4gICAgICB0aGlzLmlzQWxsRGF5ID0gY2FsZW5kYXJFdmVudERldGFpbC5hbGxEYXk7XG4gICAgICB0aGlzLl9jbGllbnRJRCA9IGNhbGVuZGFyRXZlbnREZXRhaWwuY2xpZW50SUQ7XG4gICAgICBpZiAodGhpcy5pc01ldGFMb2FkZWQoKSlcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2N1c3RvbWVyQ2xpZW50TmFtZSA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjdXN0b21lckNsaWVudE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbWVyQ2xpZW50TmFtZTtcbiAgfVxuXG4gIHNldCBjdXN0b21lckNsaWVudE5hbWUodmFsKSB7XG4gICAgdGhpcy5fY3VzdG9tZXJDbGllbnROYW1lID0gdmFsO1xuICAgIHRoaXMud2FpdFVudGlsTWV0YUxvYWRlZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5vbkRhdGFVcGRhdGVkKCk7XG4gICAgfSlcbiAgfVxuXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IHJvd0NvbmZpZygpOiBBcnJheTxBcnJheTxNZXRhQ29sdW1uPj4ge1xuICAgIHJldHVybiB0aGlzLm1ldGFDb25maWcuUm93cztcbiAgfVxuXG5cbiAgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuICBwdWJsaWMgX2NhbGVuZGFyRXZlbnREZXRhaWw6IENhbGVuZGFyRXZlbnREZXRhaWw7IC8vRGV0YWlsXG4gIHB1YmxpYyBpc1NhbWVEYXk6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgaXNBbGxEYXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9tZXRhQ29udHJvbGxlciA9IG51bGw7XG4gIHByaXZhdGUgX2NsaWVudElEOiBzdHJpbmcgPSAnJztcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgRGF0ZVBpcGU6IERhdGVQaXBlLFxuICAgIG1ldGFTZXJ2aWNlOiBNZXRhU2VydmljZSxcbiAgICBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICBtZXRhUGFyc2VyOiBEZWZhdWx0TWV0YVBhcnNlcixcbiAgICBtZXRhRXhlY3V0b3I6IEFQSUV4ZWN1dG9yLFxuICAgIGRlZmF1bHRlck1ldGFDb250cm9sbGVyOiBEZWZhdWx0Q2FsZW5kYXJEZXRhaWxNZXRhQ29udHJvbGxlcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGNhbGVuZGFyRGV0YWlsTWV0YUNvbnRyb2xsZXJUb2tlbikgY3VzdG9tTWV0YUNvbnRyb2xsZXI6IE1ldGFDb250cm9sbGVyXG4gICkge1xuICAgIHN1cGVyKG1ldGFTZXJ2aWNlLCBwcm9maWxlQ29kZVNlcnZpY2UsIG1ldGFQYXJzZXIsIG1ldGFFeGVjdXRvcik7XG4gICAgaWYgKGN1c3RvbU1ldGFDb250cm9sbGVyKSB7XG4gICAgICB0aGlzLl9tZXRhQ29udHJvbGxlciA9IGN1c3RvbU1ldGFDb250cm9sbGVyO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICB0aGlzLl9tZXRhQ29udHJvbGxlciA9IGRlZmF1bHRlck1ldGFDb250cm9sbGVyO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG5cbiAgZ2V0TWV0YUlEKCkge1xuICAgIHJldHVybiAnY2FsZW5kYXJEZXRhaWwnO1xuICB9XG5cbiAgZ2V0TWV0YVBhcmFtcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX2NsaWVudElEOiB0aGlzLl9jbGllbnRJRFxuICAgIH07XG4gIH1cblxuICBvbkRhdGFVcGRhdGVkKCkge1xuICAgIHN1cGVyLm9uRGF0YVVwZGF0ZWQoKTtcbiAgICBjb25zb2xlLmxvZyhcImNhbGVuZGFyLWRldGFpbCBvbkRhdGFVcGRhdGVkOlwiLCB0aGlzLl9kYXRhKTtcbiAgICB0aGlzLl9kYXRhW1wiQ3VzdG9tZXJDbGllbnROYW1lXCJdID0gdGhpcy5fY3VzdG9tZXJDbGllbnROYW1lO1xuICAgIHRoaXMuX2RhdGFbXCJEaXNwbGF5RGF0ZVwiXSA9IHRoaXMuZ2V0RGlzcGxheURhdGVIVE1MKCk7XG4gICAgdGhpcy5pc01ldGFEYXRhRG9uZS5lbWl0KHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREaXNwbGF5RGF0ZUhUTUwoKTogc3RyaW5nIHtcbiAgICBsZXQgX0hUTUwgPSAnJztcbiAgICBsZXQgc3RhcnQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRhW1wiU3RhcnRUaW1lXCJdKTtcbiAgICBsZXQgZW5kID0gbmV3IERhdGUodGhpcy5fZGF0YVtcIkVuZFRpbWVcIl0pO1xuICAgIGlmICh0aGlzLmlzQWxsRGF5KSB7XG4gICAgICBfSFRNTCA9IGAke3RoaXMuRGF0ZVBpcGUudHJhbnNmb3JtKHN0YXJ0LCAnTU0vZGQveScpfS0ke3RoaXMuRGF0ZVBpcGUudHJhbnNmb3JtKGVuZCwgJ01NL2RkL3knKX1gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmlzU2FtZURheSlcbiAgICAgICAgX0hUTUwgPSBgJHt0aGlzLkRhdGVQaXBlLnRyYW5zZm9ybShzdGFydCwgJ01NL2RkL3kgSEg6bW0nKX0tJHt0aGlzLkRhdGVQaXBlLnRyYW5zZm9ybShlbmQsICdISDptbScpfWA7XG4gICAgICBlbHNlXG4gICAgICAgIF9IVE1MID0gYCR7dGhpcy5EYXRlUGlwZS50cmFuc2Zvcm0oc3RhcnQsICdNTS9kZC95IEhIOm1tJyl9LTxiciAvPiR7dGhpcy5EYXRlUGlwZS50cmFuc2Zvcm0oZW5kLCAnTU0vZGQveSBISDptbScpfWA7XG4gICAgfVxuICAgIHJldHVybiBfSFRNTDtcbiAgfVxufVxuIl19