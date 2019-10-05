/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CalendarEventColor } from './CalendarEventColor';
import { StringUtils } from '@allianzSND/core';
export class CalendarEventDetail {
    /**
     * @param {?} clientID
     * @param {?} calendarID
     * @param {?} title
     * @param {?} location
     * @param {?} calendarType
     * @param {?} isAllDay
     * @param {?} start
     * @param {?} end
     * @param {?} isAlert
     * @param {?} alert1
     * @param {?} alert2
     * @param {?} alert3
     * @param {?} remark
     * @param {?} color
     */
    constructor(clientID, calendarID, title, location, calendarType, isAllDay, start, end, isAlert, alert1, alert2, alert3, remark, color) {
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
        let eventColor = JSON.parse(color);
        if (eventColor != null)
            this._color = new CalendarEventColor(eventColor.color, eventColor.backgroundColor);
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    set clientID(clientID) {
        this._clientID = clientID;
    }
    /**
     * @param {?} calendarID
     * @return {?}
     */
    set calendarID(calendarID) {
        this._calendarID = calendarID;
    }
    /**
     * @param {?} title
     * @return {?}
     */
    set title(title) {
        this._title = title;
    }
    /**
     * @param {?} location
     * @return {?}
     */
    set location(location) {
        this._location = location;
    }
    /**
     * @param {?} calendarType
     * @return {?}
     */
    set activity(calendarType) {
        this._activity = calendarType;
    }
    /**
     * @param {?} isAllDay
     * @return {?}
     */
    set allDay(isAllDay) {
        this._isAllDay = isAllDay;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    set start(date) {
        this._start = date;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    set end(date) {
        this._end = date;
    }
    /**
     * @param {?} isAlert
     * @return {?}
     */
    set isAlert(isAlert) {
        this._isAlert = isAlert;
    }
    /**
     * @param {?} alert1
     * @return {?}
     */
    set alert1(alert1) {
        this._alert1 = alert1;
    }
    /**
     * @param {?} alert2
     * @return {?}
     */
    set alert2(alert2) {
        this._alert2 = alert2;
    }
    /**
     * @param {?} alert3
     * @return {?}
     */
    set alert3(alert3) {
        this._alert3 = alert3;
    }
    /**
     * @param {?} remark
     * @return {?}
     */
    set remark(remark) {
        this._remark = remark;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    set color(color) {
        /** @type {?} */
        let eventColor = JSON.parse(color);
        if (eventColor != null)
            this._color = new CalendarEventColor(eventColor.color, eventColor.backgroundColor);
    }
    /**
     * @param {?} displayActivity
     * @return {?}
     */
    set displayActivity(displayActivity) {
        this._displayActivity = displayActivity;
    }
    /**
     * @param {?} displayAlert1
     * @return {?}
     */
    set displayAlert1(displayAlert1) {
        this._displayAlert1 = displayAlert1;
    }
    /**
     * @param {?} displayAlert2
     * @return {?}
     */
    set displayAlert2(displayAlert2) {
        this._displayAlert2 = displayAlert2;
    }
    /**
     * @return {?}
     */
    get clientID() {
        return this._clientID;
    }
    /**
     * @return {?}
     */
    get calendarID() {
        return this._calendarID;
    }
    /**
     * @return {?}
     */
    get title() {
        return this._title;
    }
    /**
     * @return {?}
     */
    get location() {
        return this._location;
    }
    /**
     * @return {?}
     */
    get activity() {
        return this._activity;
    }
    /**
     * @return {?}
     */
    get allDay() {
        return this._isAllDay;
    }
    /**
     * @return {?}
     */
    get start() {
        return this._start;
    }
    /**
     * @return {?}
     */
    get end() {
        return this._end;
    }
    /**
     * @return {?}
     */
    get isAlert() {
        return this._isAlert;
    }
    /**
     * @return {?}
     */
    get alert1() {
        return this._alert1;
    }
    /**
     * @return {?}
     */
    get alert2() {
        return this._alert2;
    }
    /**
     * @return {?}
     */
    get alert3() {
        return this._alert3;
    }
    /**
     * @return {?}
     */
    get remark() {
        return this._remark;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @return {?}
     */
    get displayActivity() {
        return this._displayActivity;
    }
    /**
     * @return {?}
     */
    get displayAlert1() {
        return this._displayAlert1;
    }
    /**
     * @return {?}
     */
    get displayAlert2() {
        return this._displayAlert2;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudERldGFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvY2FsZW5kYXIvbW9kZWwvQ2FsZW5kYXJFdmVudERldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJKLFlBQVksUUFBZ0IsRUFBQyxVQUFrQixFQUFFLEtBQWEsRUFBRSxRQUFnQixFQUFFLFlBQW9CLEVBQUMsUUFBZ0IsRUFBRSxLQUFXLEVBQUUsR0FBUyxFQUFFLE9BQWUsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBYTtRQUM3TyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxP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c0NvbnRlbnQiOlsiaW1wb3J0IHtDYWxlbmRhckV2ZW50Q29sb3J9IGZyb20gJy4vQ2FsZW5kYXJFdmVudENvbG9yJztcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckV2ZW50RGV0YWlsIHtcbiAgcHJpdmF0ZSBfY2xpZW50SUQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfY2FsZW5kYXJJRDogc3RyaW5nO1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nO1xuICBwcml2YXRlIF9sb2NhdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIF9hY3Rpdml0eSA6c3RyaW5nO1xuICBwcml2YXRlIF9pc0FsbERheTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfc3RhcnQ6IERhdGU7XG4gIHByaXZhdGUgX2VuZDogRGF0ZTtcbiAgcHJpdmF0ZSBfaXNBbGVydDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfYWxlcnQxOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FsZXJ0Mjogc3RyaW5nO1xuICBwcml2YXRlIF9hbGVydDM6IHN0cmluZztcbiAgcHJpdmF0ZSBfcmVtYXJrOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbG9yO1xuICBwcml2YXRlIF9kaXNwbGF5QWN0aXZpdHk6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzcGxheUFsZXJ0MTogc3RyaW5nO1xuICBwcml2YXRlIF9kaXNwbGF5QWxlcnQyOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY2xpZW50SUQ6IHN0cmluZyxjYWxlbmRhcklEOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGxvY2F0aW9uOiBzdHJpbmcsIGNhbGVuZGFyVHlwZTogc3RyaW5nLGlzQWxsRGF5OiBzdHJpbmcsIHN0YXJ0OiBEYXRlLCBlbmQ6IERhdGUsIGlzQWxlcnQ6IHN0cmluZywgYWxlcnQxOiBzdHJpbmcsIGFsZXJ0Mjogc3RyaW5nLCBhbGVydDM6IHN0cmluZywgcmVtYXJrOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGllbnRJRCA9IGNsaWVudElEO1xuICAgIHRoaXMuX2NhbGVuZGFySUQgPSBjYWxlbmRhcklEO1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5fbG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLl9hY3Rpdml0eSA9IGNhbGVuZGFyVHlwZTtcbiAgICB0aGlzLl9pc0FsbERheSA9IChpc0FsbERheSA9PSAnWScpO1xuICAgIHRoaXMuX3N0YXJ0ID0gbmV3IERhdGUoc3RhcnQpO1xuICAgIHRoaXMuX2VuZCA9IG5ldyBEYXRlKGVuZCk7XG4gICAgdGhpcy5faXNBbGVydCA9IChpc0FsZXJ0ID09ICdZJyk7XG4gICAgdGhpcy5fYWxlcnQxID0gYWxlcnQxO1xuICAgIHRoaXMuX2FsZXJ0MiA9IGFsZXJ0MjtcbiAgICB0aGlzLl9hbGVydDMgPSBhbGVydDM7XG4gICAgdGhpcy5fcmVtYXJrID0gcmVtYXJrO1xuXG5cbiAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuX2FjdGl2aXR5KSkgdGhpcy5fYWN0aXZpdHkgPSBudWxsO1xuICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fdGl0bGUpKSB0aGlzLl90aXRsZSA9ICcnO1xuICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fbG9jYXRpb24pKSB0aGlzLl9sb2NhdGlvbiA9ICcnO1xuICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fYWxlcnQxKSkgdGhpcy5fYWxlcnQxID0gJyc7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl9hbGVydDIpKSB0aGlzLl9hbGVydDIgPSBudWxsO1xuICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fYWxlcnQzKSkgdGhpcy5fYWxlcnQzID0gJyc7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl9yZW1hcmspKSB0aGlzLl9yZW1hcmsgPSAnJztcblxuICAgIGxldCBldmVudENvbG9yID0gSlNPTi5wYXJzZShjb2xvcik7XG4gICAgaWYoZXZlbnRDb2xvciAhPSBudWxsKVxuICAgICAgdGhpcy5fY29sb3IgPSBuZXcgQ2FsZW5kYXJFdmVudENvbG9yKGV2ZW50Q29sb3IuY29sb3IsIGV2ZW50Q29sb3IuYmFja2dyb3VuZENvbG9yKTtcbiAgfVxuXG4gIHNldCBjbGllbnRJRChjbGllbnRJRDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgfVxuXG4gIHNldCBjYWxlbmRhcklEKGNhbGVuZGFySUQ6IHN0cmluZykge1xuICAgIHRoaXMuX2NhbGVuZGFySUQgPSBjYWxlbmRhcklEXG4gIH1cblxuICBzZXQgdGl0bGUodGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gIH1cblxuICBzZXQgbG9jYXRpb24obG9jYXRpb246IHN0cmluZykge1xuICAgIHRoaXMuX2xvY2F0aW9uID0gbG9jYXRpb247XG4gIH1cblxuICBzZXQgYWN0aXZpdHkoY2FsZW5kYXJUeXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3Rpdml0eSA9IGNhbGVuZGFyVHlwZTtcbiAgfVxuXG4gIHNldCBhbGxEYXkoaXNBbGxEYXkgOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNBbGxEYXkgPSBpc0FsbERheTtcbiAgfVxuXG4gIHNldCBzdGFydChkYXRlOiBEYXRlKSB7XG4gICAgdGhpcy5fc3RhcnQgPSBkYXRlO1xuICB9XG5cbiAgc2V0IGVuZChkYXRlOiBEYXRlKSB7XG4gICAgdGhpcy5fZW5kID0gZGF0ZTtcbiAgfVxuXG4gIHNldCBpc0FsZXJ0KGlzQWxlcnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0FsZXJ0ID0gaXNBbGVydDtcbiAgfVxuXG4gIHNldCBhbGVydDEoYWxlcnQxOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbGVydDEgPSBhbGVydDE7XG4gIH1cblxuICBzZXQgYWxlcnQyKGFsZXJ0Mjogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWxlcnQyID0gYWxlcnQyO1xuICB9XG5cbiAgc2V0IGFsZXJ0MyhhbGVydDM6IHN0cmluZykge1xuICAgIHRoaXMuX2FsZXJ0MyA9IGFsZXJ0MztcbiAgfVxuXG4gIHNldCByZW1hcmsocmVtYXJrOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW1hcmsgPSAgcmVtYXJrO1xuICB9XG5cbiAgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICBsZXQgZXZlbnRDb2xvciA9IEpTT04ucGFyc2UoY29sb3IpO1xuICAgIGlmKGV2ZW50Q29sb3IgIT0gbnVsbClcbiAgICAgIHRoaXMuX2NvbG9yID0gbmV3IENhbGVuZGFyRXZlbnRDb2xvcihldmVudENvbG9yLmNvbG9yLCBldmVudENvbG9yLmJhY2tncm91bmRDb2xvcik7XG4gIH1cblxuICBzZXQgZGlzcGxheUFjdGl2aXR5KGRpc3BsYXlBY3Rpdml0eSA6IHN0cmluZykge1xuICAgIHRoaXMuX2Rpc3BsYXlBY3Rpdml0eSA9IGRpc3BsYXlBY3Rpdml0eTtcbiAgfVxuXG4gIHNldCBkaXNwbGF5QWxlcnQxKGRpc3BsYXlBbGVydDEgOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5QWxlcnQxID0gZGlzcGxheUFsZXJ0MTtcbiAgfVxuXG4gIHNldCBkaXNwbGF5QWxlcnQyKGRpc3BsYXlBbGVydDIgOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5QWxlcnQyID0gZGlzcGxheUFsZXJ0MjtcbiAgfVxuXG4gIGdldCBjbGllbnRJRCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50SUQ7XG4gIH1cblxuICBnZXQgY2FsZW5kYXJJRCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsZW5kYXJJRDtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBnZXQgbG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICB9XG5cbiAgZ2V0IGFjdGl2aXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpdml0eTtcbiAgfVxuXG4gIGdldCBhbGxEYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWxsRGF5O1xuICB9XG5cbiAgZ2V0IHN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgfVxuXG4gIGdldCBlbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZDtcbiAgfVxuXG4gIGdldCBpc0FsZXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FsZXJ0O1xuICB9XG5cbiAgZ2V0IGFsZXJ0MSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxlcnQxO1xuICB9XG5cbiAgZ2V0IGFsZXJ0MigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxlcnQyO1xuICB9XG5cbiAgZ2V0IGFsZXJ0MygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxlcnQzO1xuICB9XG5cbiAgZ2V0IHJlbWFyaygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVtYXJrO1xuICB9XG5cbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIGdldCBkaXNwbGF5QWN0aXZpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlBY3Rpdml0eTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5QWxlcnQxKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5QWxlcnQxO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlBbGVydDIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlBbGVydDI7XG4gIH1cbn1cbiJdfQ==