/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CalendarEventColor } from './CalendarEventColor';
import { StringUtils } from '@allianzSND/core';
var CalendarEventDetail = /** @class */ (function () {
    function CalendarEventDetail(clientID, calendarID, title, location, calendarType, isAllDay, start, end, isAlert, alert1, alert2, alert3, remark, color) {
        this._clientID = clientID;
        this._calendarID = calendarID;
        this._title = title;
        this._location = location;
        this._activity = calendarType;
        this._isAllDay = (isAllDay == 'Y');
        this._start = new Date(start);
        this._end = new Date(end);
        this._isAlert = (isAlert == 'Y');
        this._alert1 = alert1;
        this._alert2 = alert2;
        this._alert3 = alert3;
        this._remark = remark;
        if (StringUtils.isEmpty(this._activity))
            this._activity = null;
        if (StringUtils.isEmpty(this._title))
            this._title = '';
        if (StringUtils.isEmpty(this._location))
            this._location = '';
        if (StringUtils.isEmpty(this._alert1))
            this._alert1 = '';
        if (StringUtils.isEmpty(this._alert2))
            this._alert2 = null;
        if (StringUtils.isEmpty(this._alert3))
            this._alert3 = '';
        if (StringUtils.isEmpty(this._remark))
            this._remark = '';
        /** @type {?} */
        var eventColor = JSON.parse(color);
        if (eventColor != null)
            this._color = new CalendarEventColor(eventColor.color, eventColor.backgroundColor);
    }
    Object.defineProperty(CalendarEventDetail.prototype, "clientID", {
        get: /**
         * @return {?}
         */
        function () {
            return this._clientID;
        },
        set: /**
         * @param {?} clientID
         * @return {?}
         */
        function (clientID) {
            this._clientID = clientID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "calendarID", {
        get: /**
         * @return {?}
         */
        function () {
            return this._calendarID;
        },
        set: /**
         * @param {?} calendarID
         * @return {?}
         */
        function (calendarID) {
            this._calendarID = calendarID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "title", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "location", {
        get: /**
         * @return {?}
         */
        function () {
            return this._location;
        },
        set: /**
         * @param {?} location
         * @return {?}
         */
        function (location) {
            this._location = location;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "activity", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activity;
        },
        set: /**
         * @param {?} calendarType
         * @return {?}
         */
        function (calendarType) {
            this._activity = calendarType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "allDay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isAllDay;
        },
        set: /**
         * @param {?} isAllDay
         * @return {?}
         */
        function (isAllDay) {
            this._isAllDay = isAllDay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "start", {
        get: /**
         * @return {?}
         */
        function () {
            return this._start;
        },
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            this._start = date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "end", {
        get: /**
         * @return {?}
         */
        function () {
            return this._end;
        },
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            this._end = date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "isAlert", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isAlert;
        },
        set: /**
         * @param {?} isAlert
         * @return {?}
         */
        function (isAlert) {
            this._isAlert = isAlert;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "alert1", {
        get: /**
         * @return {?}
         */
        function () {
            return this._alert1;
        },
        set: /**
         * @param {?} alert1
         * @return {?}
         */
        function (alert1) {
            this._alert1 = alert1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "alert2", {
        get: /**
         * @return {?}
         */
        function () {
            return this._alert2;
        },
        set: /**
         * @param {?} alert2
         * @return {?}
         */
        function (alert2) {
            this._alert2 = alert2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "alert3", {
        get: /**
         * @return {?}
         */
        function () {
            return this._alert3;
        },
        set: /**
         * @param {?} alert3
         * @return {?}
         */
        function (alert3) {
            this._alert3 = alert3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "remark", {
        get: /**
         * @return {?}
         */
        function () {
            return this._remark;
        },
        set: /**
         * @param {?} remark
         * @return {?}
         */
        function (remark) {
            this._remark = remark;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            /** @type {?} */
            var eventColor = JSON.parse(color);
            if (eventColor != null)
                this._color = new CalendarEventColor(eventColor.color, eventColor.backgroundColor);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "displayActivity", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayActivity;
        },
        set: /**
         * @param {?} displayActivity
         * @return {?}
         */
        function (displayActivity) {
            this._displayActivity = displayActivity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "displayAlert1", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayAlert1;
        },
        set: /**
         * @param {?} displayAlert1
         * @return {?}
         */
        function (displayAlert1) {
            this._displayAlert1 = displayAlert1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventDetail.prototype, "displayAlert2", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayAlert2;
        },
        set: /**
         * @param {?} displayAlert2
         * @return {?}
         */
        function (displayAlert2) {
            this._displayAlert2 = displayAlert2;
        },
        enumerable: true,
        configurable: true
    });
    return CalendarEventDetail;
}());
export { CalendarEventDetail };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._calendarID;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._title;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._location;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._activity;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._isAllDay;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._start;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._end;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._isAlert;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._alert1;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._alert2;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._alert3;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._remark;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._color;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._displayActivity;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._displayAlert1;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetail.prototype._displayAlert2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudERldGFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvY2FsZW5kYXIvbW9kZWwvQ2FsZW5kYXJFdmVudERldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DO0lBbUJFLDZCQUFZLFFBQWdCLEVBQUMsVUFBa0IsRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxZQUFvQixFQUFDLFFBQWdCLEVBQUUsS0FBVyxFQUFFLEdBQVMsRUFBRSxPQUFlLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLEtBQWE7UUFDN08sSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztR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Q3hCLHNDQUF3Qjs7Ozs7SUFDeEIsc0NBQXdCOzs7OztJQUN4QixzQ0FBd0I7Ozs7O0lBQ3hCLHFDQUFlOzs7OztJQUNmLCtDQUFpQzs7Ozs7SUFDakMsNkNBQStCOzs7OztJQUMvQiw2Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhbGVuZGFyRXZlbnRDb2xvcn0gZnJvbSAnLi9DYWxlbmRhckV2ZW50Q29sb3InO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXZlbnREZXRhaWwge1xuICBwcml2YXRlIF9jbGllbnRJRDogc3RyaW5nO1xuICBwcml2YXRlIF9jYWxlbmRhcklEOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xvY2F0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FjdGl2aXR5IDpzdHJpbmc7XG4gIHByaXZhdGUgX2lzQWxsRGF5OiBib29sZWFuO1xuICBwcml2YXRlIF9zdGFydDogRGF0ZTtcbiAgcHJpdmF0ZSBfZW5kOiBEYXRlO1xuICBwcml2YXRlIF9pc0FsZXJ0OiBib29sZWFuO1xuICBwcml2YXRlIF9hbGVydDE6IHN0cmluZztcbiAgcHJpdmF0ZSBfYWxlcnQyOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FsZXJ0Mzogc3RyaW5nO1xuICBwcml2YXRlIF9yZW1hcms6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3I7XG4gIHByaXZhdGUgX2Rpc3BsYXlBY3Rpdml0eTogc3RyaW5nO1xuICBwcml2YXRlIF9kaXNwbGF5QWxlcnQxOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc3BsYXlBbGVydDI6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihjbGllbnRJRDogc3RyaW5nLGNhbGVuZGFySUQ6IHN0cmluZywgdGl0bGU6IHN0cmluZywgbG9jYXRpb246IHN0cmluZywgY2FsZW5kYXJUeXBlOiBzdHJpbmcsaXNBbGxEYXk6IHN0cmluZywgc3RhcnQ6IERhdGUsIGVuZDogRGF0ZSwgaXNBbGVydDogc3RyaW5nLCBhbGVydDE6IHN0cmluZywgYWxlcnQyOiBzdHJpbmcsIGFsZXJ0Mzogc3RyaW5nLCByZW1hcms6IHN0cmluZywgY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuX2NsaWVudElEID0gY2xpZW50SUQ7XG4gICAgdGhpcy5fY2FsZW5kYXJJRCA9IGNhbGVuZGFySUQ7XG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLl9sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHRoaXMuX2FjdGl2aXR5ID0gY2FsZW5kYXJUeXBlO1xuICAgIHRoaXMuX2lzQWxsRGF5ID0gKGlzQWxsRGF5ID09ICdZJyk7XG4gICAgdGhpcy5fc3RhcnQgPSBuZXcgRGF0ZShzdGFydCk7XG4gICAgdGhpcy5fZW5kID0gbmV3IERhdGUoZW5kKTtcbiAgICB0aGlzLl9pc0FsZXJ0ID0gKGlzQWxlcnQgPT0gJ1knKTtcbiAgICB0aGlzLl9hbGVydDEgPSBhbGVydDE7XG4gICAgdGhpcy5fYWxlcnQyID0gYWxlcnQyO1xuICAgIHRoaXMuX2FsZXJ0MyA9IGFsZXJ0MztcbiAgICB0aGlzLl9yZW1hcmsgPSByZW1hcms7XG5cblxuICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fYWN0aXZpdHkpKSB0aGlzLl9hY3Rpdml0eSA9IG51bGw7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl90aXRsZSkpIHRoaXMuX3RpdGxlID0gJyc7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl9sb2NhdGlvbikpIHRoaXMuX2xvY2F0aW9uID0gJyc7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl9hbGVydDEpKSB0aGlzLl9hbGVydDEgPSAnJztcbiAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuX2FsZXJ0MikpIHRoaXMuX2FsZXJ0MiA9IG51bGw7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl9hbGVydDMpKSB0aGlzLl9hbGVydDMgPSAnJztcbiAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuX3JlbWFyaykpIHRoaXMuX3JlbWFyayA9ICcnO1xuXG4gICAgbGV0IGV2ZW50Q29sb3IgPSBKU09OLnBhcnNlKGNvbG9yKTtcbiAgICBpZihldmVudENvbG9yICE9IG51bGwpXG4gICAgICB0aGlzLl9jb2xvciA9IG5ldyBDYWxlbmRhckV2ZW50Q29sb3IoZXZlbnRDb2xvci5jb2xvciwgZXZlbnRDb2xvci5iYWNrZ3JvdW5kQ29sb3IpO1xuICB9XG5cbiAgc2V0IGNsaWVudElEKGNsaWVudElEOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGllbnRJRCA9IGNsaWVudElEO1xuICB9XG5cbiAgc2V0IGNhbGVuZGFySUQoY2FsZW5kYXJJRDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2FsZW5kYXJJRCA9IGNhbGVuZGFySURcbiAgfVxuXG4gIHNldCB0aXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIHNldCBsb2NhdGlvbihsb2NhdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgfVxuXG4gIHNldCBhY3Rpdml0eShjYWxlbmRhclR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjdGl2aXR5ID0gY2FsZW5kYXJUeXBlO1xuICB9XG5cbiAgc2V0IGFsbERheShpc0FsbERheSA6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0FsbERheSA9IGlzQWxsRGF5O1xuICB9XG5cbiAgc2V0IHN0YXJ0KGRhdGU6IERhdGUpIHtcbiAgICB0aGlzLl9zdGFydCA9IGRhdGU7XG4gIH1cblxuICBzZXQgZW5kKGRhdGU6IERhdGUpIHtcbiAgICB0aGlzLl9lbmQgPSBkYXRlO1xuICB9XG5cbiAgc2V0IGlzQWxlcnQoaXNBbGVydDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzQWxlcnQgPSBpc0FsZXJ0O1xuICB9XG5cbiAgc2V0IGFsZXJ0MShhbGVydDE6IHN0cmluZykge1xuICAgIHRoaXMuX2FsZXJ0MSA9IGFsZXJ0MTtcbiAgfVxuXG4gIHNldCBhbGVydDIoYWxlcnQyOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbGVydDIgPSBhbGVydDI7XG4gIH1cblxuICBzZXQgYWxlcnQzKGFsZXJ0Mzogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWxlcnQzID0gYWxlcnQzO1xuICB9XG5cbiAgc2V0IHJlbWFyayhyZW1hcms6IHN0cmluZykge1xuICAgIHRoaXMuX3JlbWFyayA9ICByZW1hcms7XG4gIH1cblxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIGxldCBldmVudENvbG9yID0gSlNPTi5wYXJzZShjb2xvcik7XG4gICAgaWYoZXZlbnRDb2xvciAhPSBudWxsKVxuICAgICAgdGhpcy5fY29sb3IgPSBuZXcgQ2FsZW5kYXJFdmVudENvbG9yKGV2ZW50Q29sb3IuY29sb3IsIGV2ZW50Q29sb3IuYmFja2dyb3VuZENvbG9yKTtcbiAgfVxuXG4gIHNldCBkaXNwbGF5QWN0aXZpdHkoZGlzcGxheUFjdGl2aXR5IDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlzcGxheUFjdGl2aXR5ID0gZGlzcGxheUFjdGl2aXR5O1xuICB9XG5cbiAgc2V0IGRpc3BsYXlBbGVydDEoZGlzcGxheUFsZXJ0MSA6IHN0cmluZykge1xuICAgIHRoaXMuX2Rpc3BsYXlBbGVydDEgPSBkaXNwbGF5QWxlcnQxO1xuICB9XG5cbiAgc2V0IGRpc3BsYXlBbGVydDIoZGlzcGxheUFsZXJ0MiA6IHN0cmluZykge1xuICAgIHRoaXMuX2Rpc3BsYXlBbGVydDIgPSBkaXNwbGF5QWxlcnQyO1xuICB9XG5cbiAgZ2V0IGNsaWVudElEKCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJRDtcbiAgfVxuXG4gIGdldCBjYWxlbmRhcklEKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWxlbmRhcklEO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIGdldCBsb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb247XG4gIH1cblxuICBnZXQgYWN0aXZpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2aXR5O1xuICB9XG5cbiAgZ2V0IGFsbERheSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBbGxEYXk7XG4gIH1cblxuICBnZXQgc3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0O1xuICB9XG5cbiAgZ2V0IGVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kO1xuICB9XG5cbiAgZ2V0IGlzQWxlcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWxlcnQ7XG4gIH1cblxuICBnZXQgYWxlcnQxKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGVydDE7XG4gIH1cblxuICBnZXQgYWxlcnQyKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGVydDI7XG4gIH1cblxuICBnZXQgYWxlcnQzKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGVydDM7XG4gIH1cblxuICBnZXQgcmVtYXJrKCkge1xuICAgIHJldHVybiB0aGlzLl9yZW1hcms7XG4gIH1cblxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlBY3Rpdml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheUFjdGl2aXR5O1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlBbGVydDEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlBbGVydDE7XG4gIH1cblxuICBnZXQgZGlzcGxheUFsZXJ0MigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheUFsZXJ0MjtcbiAgfVxufVxuIl19