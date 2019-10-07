/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CalendarEventColor } from './CalendarEventColor';
import { StringUtils } from '@allianzSND/core';
var CalendarEventDetail = /** @class */ (function () {
    function CalendarEventDetail(clientID, calendarID, customerClientID, title, location, calendarType, isAllDay, start, end, isAlert, alert1, alert2, alert3, remark, color) {
        this._clientID = clientID;
        this._calendarID = calendarID;
        this._customerClientID = customerClientID;
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
        if (StringUtils.isEmpty(this._customerClientID))
            this._customerClientID = null;
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
    Object.defineProperty(CalendarEventDetail.prototype, "customerClientID", {
        get: /**
         * @return {?}
         */
        function () {
            return this._customerClientID;
        },
        set: /**
         * @param {?} customerClientID
         * @return {?}
         */
        function (customerClientID) {
            this._customerClientID = customerClientID;
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
    CalendarEventDetail.prototype._customerClientID;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudERldGFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL3NlcnZpY2UvbW9kZWwvQ2FsZW5kYXJFdmVudERldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DO0lBb0JFLDZCQUFZLFFBQWdCLEVBQUMsVUFBa0IsRUFBRSxnQkFBd0IsRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxZQUFvQixFQUFDLFFBQWdCLEVBQUUsS0FBVyxFQUFFLEdBQVMsRUFBRSxPQUFlLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLEtBQWE7UUFDdlEsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7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LENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7Ozs7O1FBMUVELFVBQWtCLGFBQXNCO1lBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBeUVILDBCQUFDO0FBQUQsQ0FBQyxBQXBNRCxJQW9NQzs7Ozs7OztJQW5NQyx3Q0FBMEI7Ozs7O0lBQzFCLDBDQUE0Qjs7Ozs7SUFDNUIsZ0RBQWtDOzs7OztJQUNsQyxxQ0FBdUI7Ozs7O0lBQ3ZCLHdDQUEwQjs7Ozs7SUFDMUIsd0NBQTBCOzs7OztJQUMxQix3Q0FBMkI7Ozs7O0lBQzNCLHFDQUFxQjs7Ozs7SUFDckIsbUNBQW1COzs7OztJQUNuQix1Q0FBMEI7Ozs7O0lBQzFCLHNDQUF3Qjs7Ozs7SUFDeEIsc0NBQXdCOzs7OztJQUN4QixzQ0FBd0I7Ozs7O0lBQ3hCLHNDQUF3Qjs7Ozs7SUFDeEIscUNBQWU7Ozs7O0lBQ2YsK0NBQWlDOzs7OztJQUNqQyw2Q0FBK0I7Ozs7O0lBQy9CLDZDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FsZW5kYXJFdmVudENvbG9yfSBmcm9tICcuL0NhbGVuZGFyRXZlbnRDb2xvcic7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFdmVudERldGFpbCB7XG4gIHByaXZhdGUgX2NsaWVudElEOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NhbGVuZGFySUQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfY3VzdG9tZXJDbGllbnRJRDogc3RyaW5nO1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nO1xuICBwcml2YXRlIF9sb2NhdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIF9hY3Rpdml0eSA6c3RyaW5nO1xuICBwcml2YXRlIF9pc0FsbERheTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfc3RhcnQ6IERhdGU7XG4gIHByaXZhdGUgX2VuZDogRGF0ZTtcbiAgcHJpdmF0ZSBfaXNBbGVydDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfYWxlcnQxOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FsZXJ0Mjogc3RyaW5nO1xuICBwcml2YXRlIF9hbGVydDM6IHN0cmluZztcbiAgcHJpdmF0ZSBfcmVtYXJrOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbG9yO1xuICBwcml2YXRlIF9kaXNwbGF5QWN0aXZpdHk6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzcGxheUFsZXJ0MTogc3RyaW5nO1xuICBwcml2YXRlIF9kaXNwbGF5QWxlcnQyOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY2xpZW50SUQ6IHN0cmluZyxjYWxlbmRhcklEOiBzdHJpbmcsIGN1c3RvbWVyQ2xpZW50SUQ6IHN0cmluZywgdGl0bGU6IHN0cmluZywgbG9jYXRpb246IHN0cmluZywgY2FsZW5kYXJUeXBlOiBzdHJpbmcsaXNBbGxEYXk6IHN0cmluZywgc3RhcnQ6IERhdGUsIGVuZDogRGF0ZSwgaXNBbGVydDogc3RyaW5nLCBhbGVydDE6IHN0cmluZywgYWxlcnQyOiBzdHJpbmcsIGFsZXJ0Mzogc3RyaW5nLCByZW1hcms6IHN0cmluZywgY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuX2NsaWVudElEID0gY2xpZW50SUQ7XG4gICAgdGhpcy5fY2FsZW5kYXJJRCA9IGNhbGVuZGFySUQ7XG4gICAgdGhpcy5fY3VzdG9tZXJDbGllbnRJRCA9IGN1c3RvbWVyQ2xpZW50SUQ7XG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLl9sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHRoaXMuX2FjdGl2aXR5ID0gY2FsZW5kYXJUeXBlO1xuICAgIHRoaXMuX2lzQWxsRGF5ID0gKGlzQWxsRGF5ID09ICdZJyk7XG4gICAgdGhpcy5fc3RhcnQgPSBuZXcgRGF0ZShzdGFydCk7XG4gICAgdGhpcy5fZW5kID0gbmV3IERhdGUoZW5kKTtcbiAgICB0aGlzLl9pc0FsZXJ0ID0gKGlzQWxlcnQgPT0gJ1knKTtcbiAgICB0aGlzLl9hbGVydDEgPSBhbGVydDE7XG4gICAgdGhpcy5fYWxlcnQyID0gYWxlcnQyO1xuICAgIHRoaXMuX2FsZXJ0MyA9IGFsZXJ0MztcbiAgICB0aGlzLl9yZW1hcmsgPSByZW1hcms7XG5cblxuICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fY3VzdG9tZXJDbGllbnRJRCkpIHRoaXMuX2N1c3RvbWVyQ2xpZW50SUQgPSBudWxsO1xuICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fYWN0aXZpdHkpKSB0aGlzLl9hY3Rpdml0eSA9IG51bGw7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl90aXRsZSkpIHRoaXMuX3RpdGxlID0gJyc7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl9sb2NhdGlvbikpIHRoaXMuX2xvY2F0aW9uID0gJyc7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl9hbGVydDEpKSB0aGlzLl9hbGVydDEgPSAnJztcbiAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuX2FsZXJ0MikpIHRoaXMuX2FsZXJ0MiA9IG51bGw7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl9hbGVydDMpKSB0aGlzLl9hbGVydDMgPSAnJztcbiAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuX3JlbWFyaykpIHRoaXMuX3JlbWFyayA9ICcnO1xuXG4gICAgbGV0IGV2ZW50Q29sb3IgPSBKU09OLnBhcnNlKGNvbG9yKTtcbiAgICBpZihldmVudENvbG9yICE9IG51bGwpXG4gICAgICB0aGlzLl9jb2xvciA9IG5ldyBDYWxlbmRhckV2ZW50Q29sb3IoZXZlbnRDb2xvci5jb2xvciwgZXZlbnRDb2xvci5iYWNrZ3JvdW5kQ29sb3IpO1xuICB9XG5cbiAgc2V0IGNsaWVudElEKGNsaWVudElEOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGllbnRJRCA9IGNsaWVudElEO1xuICB9XG5cbiAgc2V0IGNhbGVuZGFySUQoY2FsZW5kYXJJRDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2FsZW5kYXJJRCA9IGNhbGVuZGFySURcbiAgfVxuXG4gIHNldCBjdXN0b21lckNsaWVudElEKGN1c3RvbWVyQ2xpZW50SUQ6IHN0cmluZykge1xuICAgIHRoaXMuX2N1c3RvbWVyQ2xpZW50SUQgPSBjdXN0b21lckNsaWVudElEO1xuICB9XG4gIFxuICBzZXQgdGl0bGUodGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gIH1cblxuICBzZXQgbG9jYXRpb24obG9jYXRpb246IHN0cmluZykge1xuICAgIHRoaXMuX2xvY2F0aW9uID0gbG9jYXRpb247XG4gIH1cblxuICBzZXQgYWN0aXZpdHkoY2FsZW5kYXJUeXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3Rpdml0eSA9IGNhbGVuZGFyVHlwZTtcbiAgfVxuXG4gIHNldCBhbGxEYXkoaXNBbGxEYXkgOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNBbGxEYXkgPSBpc0FsbERheTtcbiAgfVxuXG4gIHNldCBzdGFydChkYXRlOiBEYXRlKSB7XG4gICAgdGhpcy5fc3RhcnQgPSBkYXRlO1xuICB9XG5cbiAgc2V0IGVuZChkYXRlOiBEYXRlKSB7XG4gICAgdGhpcy5fZW5kID0gZGF0ZTtcbiAgfVxuXG4gIHNldCBpc0FsZXJ0KGlzQWxlcnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0FsZXJ0ID0gaXNBbGVydDtcbiAgfVxuXG4gIHNldCBhbGVydDEoYWxlcnQxOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbGVydDEgPSBhbGVydDE7XG4gIH1cblxuICBzZXQgYWxlcnQyKGFsZXJ0Mjogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWxlcnQyID0gYWxlcnQyO1xuICB9XG5cbiAgc2V0IGFsZXJ0MyhhbGVydDM6IHN0cmluZykge1xuICAgIHRoaXMuX2FsZXJ0MyA9IGFsZXJ0MztcbiAgfVxuXG4gIHNldCByZW1hcmsocmVtYXJrOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW1hcmsgPSAgcmVtYXJrO1xuICB9XG5cbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICBsZXQgZXZlbnRDb2xvciA9IEpTT04ucGFyc2UoY29sb3IpO1xuICAgIGlmKGV2ZW50Q29sb3IgIT0gbnVsbClcbiAgICAgIHRoaXMuX2NvbG9yID0gbmV3IENhbGVuZGFyRXZlbnRDb2xvcihldmVudENvbG9yLmNvbG9yLCBldmVudENvbG9yLmJhY2tncm91bmRDb2xvcik7XG4gIH1cblxuICBzZXQgZGlzcGxheUFjdGl2aXR5KGRpc3BsYXlBY3Rpdml0eSA6IHN0cmluZykge1xuICAgIHRoaXMuX2Rpc3BsYXlBY3Rpdml0eSA9IGRpc3BsYXlBY3Rpdml0eTtcbiAgfVxuXG4gIHNldCBkaXNwbGF5QWxlcnQxKGRpc3BsYXlBbGVydDEgOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5QWxlcnQxID0gZGlzcGxheUFsZXJ0MTtcbiAgfVxuXG4gIHNldCBkaXNwbGF5QWxlcnQyKGRpc3BsYXlBbGVydDIgOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5QWxlcnQyID0gZGlzcGxheUFsZXJ0MjtcbiAgfVxuXG4gIGdldCBjbGllbnRJRCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50SUQ7XG4gIH1cblxuICBnZXQgY2FsZW5kYXJJRCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsZW5kYXJJRDtcbiAgfVxuXG4gIGdldCBjdXN0b21lckNsaWVudElEKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21lckNsaWVudElEO1xuICB9XG4gIFxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgZ2V0IGxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbjtcbiAgfVxuXG4gIGdldCBhY3Rpdml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZpdHk7XG4gIH1cblxuICBnZXQgYWxsRGF5KCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FsbERheTtcbiAgfVxuXG4gIGdldCBzdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnQ7XG4gIH1cblxuICBnZXQgZW5kKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmQ7XG4gIH1cblxuICBnZXQgaXNBbGVydCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBbGVydDtcbiAgfVxuXG4gIGdldCBhbGVydDEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsZXJ0MTtcbiAgfVxuXG4gIGdldCBhbGVydDIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsZXJ0MjtcbiAgfVxuXG4gIGdldCBhbGVydDMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsZXJ0MztcbiAgfVxuXG4gIGdldCByZW1hcmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbWFyaztcbiAgfVxuXG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICBnZXQgZGlzcGxheUFjdGl2aXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5QWN0aXZpdHk7XG4gIH1cblxuICBnZXQgZGlzcGxheUFsZXJ0MSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheUFsZXJ0MTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5QWxlcnQyKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5QWxlcnQyO1xuICB9XG59XG4iXX0=