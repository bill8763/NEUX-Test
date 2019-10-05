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
     * @param {?} customerClientID
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
    constructor(clientID, calendarID, customerClientID, title, location, calendarType, isAllDay, start, end, isAlert, alert1, alert2, alert3, remark, color) {
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
     * @param {?} customerClientID
     * @return {?}
     */
    set customerClientID(customerClientID) {
        this._customerClientID = customerClientID;
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
    get customerClientID() {
        return this._customerClientID;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudERldGFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL3NlcnZpY2UvbW9kZWwvQ2FsZW5kYXJFdmVudERldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9CSixZQUFZLFFBQWdCLEVBQUMsVUFBa0IsRUFBRSxnQkFBd0IsRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxZQUFvQixFQUFDLFFBQWdCLEVBQUUsS0FBVyxFQUFFLEdBQVMsRUFBRSxPQUFlLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLEtBQWE7UUFDdlEsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxPQUFP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SUFDN0IsQ0FBQztDQUNGOzs7Ozs7SUFuTUMsd0NBQTBCOzs7OztJQUMxQiwwQ0FBNEI7Ozs7O0lBQzVCLGdEQUFrQzs7Ozs7SUFDbEMscUNBQXVCOzs7OztJQUN2Qix3Q0FBMEI7Ozs7O0lBQzFCLHdDQUEwQjs7Ozs7SUFDMUIsd0NBQTJCOzs7OztJQUMzQixxQ0FBcUI7Ozs7O0lBQ3JCLG1DQUFtQjs7Ozs7SUFDbkIsdUNBQTBCOzs7OztJQUMxQixzQ0FBd0I7Ozs7O0lBQ3hCLHNDQUF3Qjs7Ozs7SUFDeEIsc0NBQXdCOzs7OztJQUN4QixzQ0FBd0I7Ozs7O0lBQ3hCLHFDQUFlOzs7OztJQUNmLCtDQUFpQzs7Ozs7SUFDakMsNkNBQStCOzs7OztJQUMvQiw2Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhbGVuZGFyRXZlbnRDb2xvcn0gZnJvbSAnLi9DYWxlbmRhckV2ZW50Q29sb3InO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXZlbnREZXRhaWwge1xuICBwcml2YXRlIF9jbGllbnRJRDogc3RyaW5nO1xuICBwcml2YXRlIF9jYWxlbmRhcklEOiBzdHJpbmc7XG4gIHByaXZhdGUgX2N1c3RvbWVyQ2xpZW50SUQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfbG9jYXRpb246IHN0cmluZztcbiAgcHJpdmF0ZSBfYWN0aXZpdHkgOnN0cmluZztcbiAgcHJpdmF0ZSBfaXNBbGxEYXk6IGJvb2xlYW47XG4gIHByaXZhdGUgX3N0YXJ0OiBEYXRlO1xuICBwcml2YXRlIF9lbmQ6IERhdGU7XG4gIHByaXZhdGUgX2lzQWxlcnQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2FsZXJ0MTogc3RyaW5nO1xuICBwcml2YXRlIF9hbGVydDI6IHN0cmluZztcbiAgcHJpdmF0ZSBfYWxlcnQzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JlbWFyazogc3RyaW5nO1xuICBwcml2YXRlIF9jb2xvcjtcbiAgcHJpdmF0ZSBfZGlzcGxheUFjdGl2aXR5OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc3BsYXlBbGVydDE6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzcGxheUFsZXJ0Mjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNsaWVudElEOiBzdHJpbmcsY2FsZW5kYXJJRDogc3RyaW5nLCBjdXN0b21lckNsaWVudElEOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGxvY2F0aW9uOiBzdHJpbmcsIGNhbGVuZGFyVHlwZTogc3RyaW5nLGlzQWxsRGF5OiBzdHJpbmcsIHN0YXJ0OiBEYXRlLCBlbmQ6IERhdGUsIGlzQWxlcnQ6IHN0cmluZywgYWxlcnQxOiBzdHJpbmcsIGFsZXJ0Mjogc3RyaW5nLCBhbGVydDM6IHN0cmluZywgcmVtYXJrOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGllbnRJRCA9IGNsaWVudElEO1xuICAgIHRoaXMuX2NhbGVuZGFySUQgPSBjYWxlbmRhcklEO1xuICAgIHRoaXMuX2N1c3RvbWVyQ2xpZW50SUQgPSBjdXN0b21lckNsaWVudElEO1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5fbG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLl9hY3Rpdml0eSA9IGNhbGVuZGFyVHlwZTtcbiAgICB0aGlzLl9pc0FsbERheSA9IChpc0FsbERheSA9PSAnWScpO1xuICAgIHRoaXMuX3N0YXJ0ID0gbmV3IERhdGUoc3RhcnQpO1xuICAgIHRoaXMuX2VuZCA9IG5ldyBEYXRlKGVuZCk7XG4gICAgdGhpcy5faXNBbGVydCA9IChpc0FsZXJ0ID09ICdZJyk7XG4gICAgdGhpcy5fYWxlcnQxID0gYWxlcnQxO1xuICAgIHRoaXMuX2FsZXJ0MiA9IGFsZXJ0MjtcbiAgICB0aGlzLl9hbGVydDMgPSBhbGVydDM7XG4gICAgdGhpcy5fcmVtYXJrID0gcmVtYXJrO1xuXG5cbiAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuX2N1c3RvbWVyQ2xpZW50SUQpKSB0aGlzLl9jdXN0b21lckNsaWVudElEID0gbnVsbDtcbiAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuX2FjdGl2aXR5KSkgdGhpcy5fYWN0aXZpdHkgPSBudWxsO1xuICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fdGl0bGUpKSB0aGlzLl90aXRsZSA9ICcnO1xuICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fbG9jYXRpb24pKSB0aGlzLl9sb2NhdGlvbiA9ICcnO1xuICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fYWxlcnQxKSkgdGhpcy5fYWxlcnQxID0gJyc7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl9hbGVydDIpKSB0aGlzLl9hbGVydDIgPSBudWxsO1xuICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fYWxlcnQzKSkgdGhpcy5fYWxlcnQzID0gJyc7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl9yZW1hcmspKSB0aGlzLl9yZW1hcmsgPSAnJztcblxuICAgIGxldCBldmVudENvbG9yID0gSlNPTi5wYXJzZShjb2xvcik7XG4gICAgaWYoZXZlbnRDb2xvciAhPSBudWxsKVxuICAgICAgdGhpcy5fY29sb3IgPSBuZXcgQ2FsZW5kYXJFdmVudENvbG9yKGV2ZW50Q29sb3IuY29sb3IsIGV2ZW50Q29sb3IuYmFja2dyb3VuZENvbG9yKTtcbiAgfVxuXG4gIHNldCBjbGllbnRJRChjbGllbnRJRDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgfVxuXG4gIHNldCBjYWxlbmRhcklEKGNhbGVuZGFySUQ6IHN0cmluZykge1xuICAgIHRoaXMuX2NhbGVuZGFySUQgPSBjYWxlbmRhcklEXG4gIH1cblxuICBzZXQgY3VzdG9tZXJDbGllbnRJRChjdXN0b21lckNsaWVudElEOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXN0b21lckNsaWVudElEID0gY3VzdG9tZXJDbGllbnRJRDtcbiAgfVxuICBcbiAgc2V0IHRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgc2V0IGxvY2F0aW9uKGxvY2F0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICB9XG5cbiAgc2V0IGFjdGl2aXR5KGNhbGVuZGFyVHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWN0aXZpdHkgPSBjYWxlbmRhclR5cGU7XG4gIH1cblxuICBzZXQgYWxsRGF5KGlzQWxsRGF5IDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzQWxsRGF5ID0gaXNBbGxEYXk7XG4gIH1cblxuICBzZXQgc3RhcnQoZGF0ZTogRGF0ZSkge1xuICAgIHRoaXMuX3N0YXJ0ID0gZGF0ZTtcbiAgfVxuXG4gIHNldCBlbmQoZGF0ZTogRGF0ZSkge1xuICAgIHRoaXMuX2VuZCA9IGRhdGU7XG4gIH1cblxuICBzZXQgaXNBbGVydChpc0FsZXJ0OiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNBbGVydCA9IGlzQWxlcnQ7XG4gIH1cblxuICBzZXQgYWxlcnQxKGFsZXJ0MTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWxlcnQxID0gYWxlcnQxO1xuICB9XG5cbiAgc2V0IGFsZXJ0MihhbGVydDI6IHN0cmluZykge1xuICAgIHRoaXMuX2FsZXJ0MiA9IGFsZXJ0MjtcbiAgfVxuXG4gIHNldCBhbGVydDMoYWxlcnQzOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbGVydDMgPSBhbGVydDM7XG4gIH1cblxuICBzZXQgcmVtYXJrKHJlbWFyazogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVtYXJrID0gIHJlbWFyaztcbiAgfVxuXG4gIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgbGV0IGV2ZW50Q29sb3IgPSBKU09OLnBhcnNlKGNvbG9yKTtcbiAgICBpZihldmVudENvbG9yICE9IG51bGwpXG4gICAgICB0aGlzLl9jb2xvciA9IG5ldyBDYWxlbmRhckV2ZW50Q29sb3IoZXZlbnRDb2xvci5jb2xvciwgZXZlbnRDb2xvci5iYWNrZ3JvdW5kQ29sb3IpO1xuICB9XG5cbiAgc2V0IGRpc3BsYXlBY3Rpdml0eShkaXNwbGF5QWN0aXZpdHkgOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5QWN0aXZpdHkgPSBkaXNwbGF5QWN0aXZpdHk7XG4gIH1cblxuICBzZXQgZGlzcGxheUFsZXJ0MShkaXNwbGF5QWxlcnQxIDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlzcGxheUFsZXJ0MSA9IGRpc3BsYXlBbGVydDE7XG4gIH1cblxuICBzZXQgZGlzcGxheUFsZXJ0MihkaXNwbGF5QWxlcnQyIDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlzcGxheUFsZXJ0MiA9IGRpc3BsYXlBbGVydDI7XG4gIH1cblxuICBnZXQgY2xpZW50SUQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudElEO1xuICB9XG5cbiAgZ2V0IGNhbGVuZGFySUQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGVuZGFySUQ7XG4gIH1cblxuICBnZXQgY3VzdG9tZXJDbGllbnRJRCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tZXJDbGllbnRJRDtcbiAgfVxuICBcbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIGdldCBsb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb247XG4gIH1cblxuICBnZXQgYWN0aXZpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2aXR5O1xuICB9XG5cbiAgZ2V0IGFsbERheSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBbGxEYXk7XG4gIH1cblxuICBnZXQgc3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0O1xuICB9XG5cbiAgZ2V0IGVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kO1xuICB9XG5cbiAgZ2V0IGlzQWxlcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWxlcnQ7XG4gIH1cblxuICBnZXQgYWxlcnQxKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGVydDE7XG4gIH1cblxuICBnZXQgYWxlcnQyKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGVydDI7XG4gIH1cblxuICBnZXQgYWxlcnQzKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGVydDM7XG4gIH1cblxuICBnZXQgcmVtYXJrKCkge1xuICAgIHJldHVybiB0aGlzLl9yZW1hcms7XG4gIH1cblxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlBY3Rpdml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheUFjdGl2aXR5O1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlBbGVydDEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlBbGVydDE7XG4gIH1cblxuICBnZXQgZGlzcGxheUFsZXJ0MigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheUFsZXJ0MjtcbiAgfVxufVxuIl19