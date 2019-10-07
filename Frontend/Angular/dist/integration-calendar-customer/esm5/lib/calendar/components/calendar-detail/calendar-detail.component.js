/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Optional, Inject, Output, EventEmitter } from '@angular/core';
import { isSameDay } from 'date-fns';
import { Language, MetaService, DisplayMetaComponent, ProfileCodeService, DefaultMetaParser, APIExecutor } from '@allianzSND/core';
import { StringUtils } from '@allianzSND/core';
import { calendarDetailMetaControllerToken } from '../../injection-token';
import { DefaultCalendarDetailMetaController } from './DefaultCalendarDetailMetaController';
import { DatePipe } from '@angular/common';
var CalendarDetailComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarDetailComponent, _super);
    function CalendarDetailComponent(DatePipe, metaService, profileCodeService, metaParser, metaExecutor, defaulterMetaController, customMetaController) {
        var _this = _super.call(this, metaService, profileCodeService, metaParser, metaExecutor) || this;
        _this.DatePipe = DatePipe;
        _this.isMetaDataDone = new EventEmitter();
        _this._customerClientName = '';
        _this.language = new Language();
        _this.isSameDay = true;
        _this.isAllDay = false;
        _this._metaController = null;
        _this._clientID = '';
        if (customMetaController) {
            _this._metaController = customMetaController;
        }
        else
            _this._metaController = defaulterMetaController;
        return _this;
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
                this.isAllDay = calendarEventDetail.allDay;
                this._clientID = calendarEventDetail.clientID;
                if (this.isMetaLoaded())
                    this.loadData();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarDetailComponent.prototype, "customerClientName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._customerClientName;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            this._customerClientName = val;
            this.waitUntilMetaLoaded().then((/**
             * @return {?}
             */
            function () {
                _this.onDataUpdated();
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarDetailComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarDetailComponent.prototype, "rowConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.metaConfig.Rows;
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
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * @return {?}
     */
    CalendarDetailComponent.prototype.getMetaID = /**
     * @return {?}
     */
    function () {
        return 'calendarDetail';
    };
    /**
     * @return {?}
     */
    CalendarDetailComponent.prototype.getMetaParams = /**
     * @return {?}
     */
    function () {
        return {
            _clientID: this._clientID
        };
    };
    /**
     * @return {?}
     */
    CalendarDetailComponent.prototype.onDataUpdated = /**
     * @return {?}
     */
    function () {
        _super.prototype.onDataUpdated.call(this);
        console.log("calendar-detail onDataUpdated:", this._data);
        this._data["CustomerClientName"] = this._customerClientName;
        this._data["DisplayDate"] = this.getDisplayDateHTML();
        this.isMetaDataDone.emit(true);
    };
    /**
     * @private
     * @return {?}
     */
    CalendarDetailComponent.prototype.getDisplayDateHTML = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _HTML = '';
        /** @type {?} */
        var start = new Date(this._data["StartTime"]);
        /** @type {?} */
        var end = new Date(this._data["EndTime"]);
        if (this.isAllDay) {
            _HTML = this.DatePipe.transform(start, 'MM/dd/y') + "-" + this.DatePipe.transform(end, 'MM/dd/y');
        }
        else {
            if (this.isSameDay)
                _HTML = this.DatePipe.transform(start, 'MM/dd/y HH:mm') + "-" + this.DatePipe.transform(end, 'HH:mm');
            else
                _HTML = this.DatePipe.transform(start, 'MM/dd/y HH:mm') + "-<br />" + this.DatePipe.transform(end, 'MM/dd/y HH:mm');
        }
        return _HTML;
    };
    CalendarDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-calendar-detail',
                    template: "<div class=\"calendar-detail-content\">\n  <ng-container *ngIf=\"data && isMetaLoaded()\">\n    <ng-container *ngFor=\"let row of rowConfig\">\n      <app-ui-info-text2 *ngIf=\"data[row[0].id]\">\n        <ng-container textType=\"title\">{{row[0].name | translate}}</ng-container>\n        <ng-container *ngFor=\"let col of row; last as isLast\" textType=\"text\">\n          <span [innerHtml]=\"data[col.id]\"></span>\n          <br *ngIf=\"!isLast\" />\n        </ng-container>\n      </app-ui-info-text2>\n    </ng-container>\n  </ng-container>\n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.calendar-detail-content{padding-top:30px}.calendar-detail-content ::ng-deep .gas-layout-form .gas-row-block:first-child{margin-top:0}.calendar-detail-content ::ng-deep app-ui-info-text2:not(:last-child){display:block;margin-bottom:30px}.calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .title-block{margin-bottom:0}.calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .text-block>p{color:#414141;font-weight:300}@media screen and (max-width:1023px){.calendar-detail-content{padding-top:0}}"]
                }] }
    ];
    CalendarDetailComponent.ctorParameters = function () { return [
        { type: DatePipe },
        { type: MetaService },
        { type: ProfileCodeService },
        { type: DefaultMetaParser },
        { type: APIExecutor },
        { type: DefaultCalendarDetailMetaController },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [calendarDetailMetaControllerToken,] }] }
    ]; };
    CalendarDetailComponent.propDecorators = {
        isMetaDataDone: [{ type: Output }],
        calendarEventDetail: [{ type: Input }],
        customerClientName: [{ type: Input }]
    };
    return CalendarDetailComponent;
}(DisplayMetaComponent));
export { CalendarDetailComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2NvbXBvbmVudHMvY2FsZW5kYXItZGV0YWlsL2NhbGVuZGFyLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBa0Isb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFjLE1BQU0sa0JBQWtCLENBQUM7QUFDL0osT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQztJQUs2QyxtREFBb0I7SUFpRC9ELGlDQUNVLFFBQWtCLEVBQzFCLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxVQUE2QixFQUM3QixZQUF5QixFQUN6Qix1QkFBNEQsRUFDTCxvQkFBb0M7UUFQN0YsWUFTRSxrQkFBTSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQyxTQU1qRTtRQWRTLGNBQVEsR0FBUixRQUFRLENBQVU7UUFoRGxCLG9CQUFjLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFlN0QseUJBQW1CLEdBQUcsRUFBRSxDQUFD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Ozs7OztJQUk3QiwyQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9wdGlvbmFsLCBJbmplY3QsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50RGV0YWlsIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbC9DYWxlbmRhckV2ZW50RGV0YWlsJztcbmltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IExhbmd1YWdlLCBNZXRhU2VydmljZSwgTWV0YUNvbnRyb2xsZXIsIERpc3BsYXlNZXRhQ29tcG9uZW50LCBQcm9maWxlQ29kZVNlcnZpY2UsIERlZmF1bHRNZXRhUGFyc2VyLCBBUElFeGVjdXRvciwgTWV0YUNvbHVtbiB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IGNhbGVuZGFyRGV0YWlsTWV0YUNvbnRyb2xsZXJUb2tlbiB9IGZyb20gJy4uLy4uL2luamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBEZWZhdWx0Q2FsZW5kYXJEZXRhaWxNZXRhQ29udHJvbGxlciB9IGZyb20gJy4vRGVmYXVsdENhbGVuZGFyRGV0YWlsTWV0YUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtY2FsZW5kYXItZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRGV0YWlsQ29tcG9uZW50IGV4dGVuZHMgRGlzcGxheU1ldGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBPdXRwdXQoKSBpc01ldGFEYXRhRG9uZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBcbiAgQElucHV0KClcbiAgZ2V0IGNhbGVuZGFyRXZlbnREZXRhaWwoKSB7IHJldHVybiB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsIH1cbiAgc2V0IGNhbGVuZGFyRXZlbnREZXRhaWwoY2FsZW5kYXJFdmVudERldGFpbCkge1xuICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KGNhbGVuZGFyRXZlbnREZXRhaWwpKSB7XG4gICAgICB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsID0gY2FsZW5kYXJFdmVudERldGFpbDtcbiAgICAgIHRoaXMuaXNTYW1lRGF5ID0gaXNTYW1lRGF5KHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuZW5kLCB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLnN0YXJ0KTtcbiAgICAgIHRoaXMuaXNBbGxEYXkgPSBjYWxlbmRhckV2ZW50RGV0YWlsLmFsbERheTtcbiAgICAgIHRoaXMuX2NsaWVudElEID0gY2FsZW5kYXJFdmVudERldGFpbC5jbGllbnRJRDtcbiAgICAgIGlmICh0aGlzLmlzTWV0YUxvYWRlZCgpKVxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3VzdG9tZXJDbGllbnROYW1lID0gJyc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGN1c3RvbWVyQ2xpZW50TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tZXJDbGllbnROYW1lO1xuICB9XG5cbiAgc2V0IGN1c3RvbWVyQ2xpZW50TmFtZSh2YWwpIHtcbiAgICB0aGlzLl9jdXN0b21lckNsaWVudE5hbWUgPSB2YWw7XG4gICAgdGhpcy53YWl0VW50aWxNZXRhTG9hZGVkKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm9uRGF0YVVwZGF0ZWQoKTtcbiAgICB9KVxuICB9XG5cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBnZXQgcm93Q29uZmlnKCk6IEFycmF5PEFycmF5PE1ldGFDb2x1bW4+PiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YUNvbmZpZy5Sb3dzO1xuICB9XG5cblxuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHB1YmxpYyBfY2FsZW5kYXJFdmVudERldGFpbDogQ2FsZW5kYXJFdmVudERldGFpbDsgLy9EZXRhaWxcbiAgcHVibGljIGlzU2FtZURheTogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBpc0FsbERheTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX21ldGFDb250cm9sbGVyID0gbnVsbDtcbiAgcHJpdmF0ZSBfY2xpZW50SUQ6IHN0cmluZyA9ICcnO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBEYXRlUGlwZTogRGF0ZVBpcGUsXG4gICAgbWV0YVNlcnZpY2U6IE1ldGFTZXJ2aWNlLFxuICAgIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlLFxuICAgIG1ldGFQYXJzZXI6IERlZmF1bHRNZXRhUGFyc2VyLFxuICAgIG1ldGFFeGVjdXRvcjogQVBJRXhlY3V0b3IsXG4gICAgZGVmYXVsdGVyTWV0YUNvbnRyb2xsZXI6IERlZmF1bHRDYWxlbmRhckRldGFpbE1ldGFDb250cm9sbGVyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoY2FsZW5kYXJEZXRhaWxNZXRhQ29udHJvbGxlclRva2VuKSBjdXN0b21NZXRhQ29udHJvbGxlcjogTWV0YUNvbnRyb2xsZXJcbiAgKSB7XG4gICAgc3VwZXIobWV0YVNlcnZpY2UsIHByb2ZpbGVDb2RlU2VydmljZSwgbWV0YVBhcnNlciwgbWV0YUV4ZWN1dG9yKTtcbiAgICBpZiAoY3VzdG9tTWV0YUNvbnRyb2xsZXIpIHtcbiAgICAgIHRoaXMuX21ldGFDb250cm9sbGVyID0gY3VzdG9tTWV0YUNvbnRyb2xsZXI7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgIHRoaXMuX21ldGFDb250cm9sbGVyID0gZGVmYXVsdGVyTWV0YUNvbnRyb2xsZXI7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cblxuICBnZXRNZXRhSUQoKSB7XG4gICAgcmV0dXJuICdjYWxlbmRhckRldGFpbCc7XG4gIH1cblxuICBnZXRNZXRhUGFyYW1zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBfY2xpZW50SUQ6IHRoaXMuX2NsaWVudElEXG4gICAgfTtcbiAgfVxuXG4gIG9uRGF0YVVwZGF0ZWQoKSB7XG4gICAgc3VwZXIub25EYXRhVXBkYXRlZCgpO1xuICAgIGNvbnNvbGUubG9nKFwiY2FsZW5kYXItZGV0YWlsIG9uRGF0YVVwZGF0ZWQ6XCIsIHRoaXMuX2RhdGEpO1xuICAgIHRoaXMuX2RhdGFbXCJDdXN0b21lckNsaWVudE5hbWVcIl0gPSB0aGlzLl9jdXN0b21lckNsaWVudE5hbWU7XG4gICAgdGhpcy5fZGF0YVtcIkRpc3BsYXlEYXRlXCJdID0gdGhpcy5nZXREaXNwbGF5RGF0ZUhUTUwoKTtcbiAgICB0aGlzLmlzTWV0YURhdGFEb25lLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldERpc3BsYXlEYXRlSFRNTCgpOiBzdHJpbmcge1xuICAgIGxldCBfSFRNTCA9ICcnO1xuICAgIGxldCBzdGFydCA9IG5ldyBEYXRlKHRoaXMuX2RhdGFbXCJTdGFydFRpbWVcIl0pO1xuICAgIGxldCBlbmQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRhW1wiRW5kVGltZVwiXSk7XG4gICAgaWYgKHRoaXMuaXNBbGxEYXkpIHtcbiAgICAgIF9IVE1MID0gYCR7dGhpcy5EYXRlUGlwZS50cmFuc2Zvcm0oc3RhcnQsICdNTS9kZC95Jyl9LSR7dGhpcy5EYXRlUGlwZS50cmFuc2Zvcm0oZW5kLCAnTU0vZGQveScpfWA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaXNTYW1lRGF5KVxuICAgICAgICBfSFRNTCA9IGAke3RoaXMuRGF0ZVBpcGUudHJhbnNmb3JtKHN0YXJ0LCAnTU0vZGQveSBISDptbScpfS0ke3RoaXMuRGF0ZVBpcGUudHJhbnNmb3JtKGVuZCwgJ0hIOm1tJyl9YDtcbiAgICAgIGVsc2VcbiAgICAgICAgX0hUTUwgPSBgJHt0aGlzLkRhdGVQaXBlLnRyYW5zZm9ybShzdGFydCwgJ01NL2RkL3kgSEg6bW0nKX0tPGJyIC8+JHt0aGlzLkRhdGVQaXBlLnRyYW5zZm9ybShlbmQsICdNTS9kZC95IEhIOm1tJyl9YDtcbiAgICB9XG4gICAgcmV0dXJuIF9IVE1MO1xuICB9XG59XG4iXX0=