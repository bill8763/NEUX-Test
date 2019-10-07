/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { APIDispatch } from '@allianzSND/core';
import { APIFactory } from '@allianzSND/core';
import { Observable } from 'rxjs';
import { CalendarEventDetail } from './model/CalendarEventDetail';
import { ProfileCodeService } from '@allianzSND/core';
import { ValidationResult } from '@allianzSND/core';
import { differenceInMinutes, isSameDay } from 'date-fns';
import { StringUtils } from '@allianzSND/core';
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
var CalendarService = /** @class */ (function () {
    function CalendarService(dispatch, profileCodeService, APIFactory) {
        this.dispatch = dispatch;
        this.profileCodeService = profileCodeService;
        this.APIFactory = APIFactory;
        //register api
    }
    /**
     * @param {?} start
     * @param {?} end
     * @param {?} key
     * @return {?}
     */
    CalendarService.prototype.getCalendarEventList = /**
     * @param {?} start
     * @param {?} end
     * @param {?} key
     * @return {?}
     */
    function (start, end, key) {
        var _this = this;
        console.debug('calendar-service-getCalendarEventList', start, end, key);
        /** @type {?} */
        var calendarEventListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCalendarEventList')));
        calendarEventListAPI.startTime = start;
        calendarEventListAPI.endTime = end;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatch.dispatch(calendarEventListAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('calendar-service-getCAlendarEventList response', data);
                /** @type {?} */
                var returnList = [];
                /** @type {?} */
                var calendarEventList = data['Body'];
                if (calendarEventList) {
                    for (var i = 0; i < calendarEventList.length; i++) {
                        /** @type {?} */
                        var json = calendarEventList[i];
                        /** @type {?} */
                        var event_1 = new CalendarEventDetail(json.ClientID, json.CalendarID, json.Title, json.Location, json.CalendarType, json.IsAllDay, new Date(json.StartTime), new Date(json.EndTime), json.Remark, json.IsAlert, json.Alert1, json.Alert2, json.Alert3, _this.profileCodeService.getArgumentsByCode('Calendar_Type', json.CalendarType));
                        returnList.push(event_1);
                    }
                    returnList = _this.sortCalendarEventList(returnList);
                    observer.next(returnList);
                    observer.complete();
                }
                else {
                    observer.next([]);
                    observer.complete();
                }
            }));
        }));
    };
    /**
     * @param {?} clientID
     * @return {?}
     */
    CalendarService.prototype.getCalendarEventDetail = /**
     * @param {?} clientID
     * @return {?}
     */
    function (clientID) {
        var _this = this;
        /** @type {?} */
        var calendarEventDetailAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCalendarEventDetail')));
        calendarEventDetailAPI.ClientID = clientID;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatch.dispatch(calendarEventDetailAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                /** @type {?} */
                var detail;
                /** @type {?} */
                var eventDetail = data['Body'];
                eventDetail = eventDetail[0];
                detail = new CalendarEventDetail(eventDetail.ClientID, eventDetail.CalendarID, eventDetail.Title, eventDetail.Location, eventDetail.CalendarType, eventDetail.IsAllDay, new Date(eventDetail.StartTime), new Date(eventDetail.EndTime), eventDetail.IsAlert, eventDetail.Alert1, eventDetail.Alert2, eventDetail.Alert3, eventDetail.Remark, _this.profileCodeService.getArgumentsByCode('Calendar_Type', eventDetail.CalendarType));
                observer.next(detail);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} clientID
     * @return {?}
     */
    CalendarService.prototype.deleteCalendarEvent = /**
     * @param {?} clientID
     * @return {?}
     */
    function (clientID) {
        var _this = this;
        /** @type {?} */
        var calendarEventDeleteAPI = (/** @type {?} */ (this.APIFactory.getAPI('deleteCalendarEvent')));
        calendarEventDeleteAPI.clientID = clientID;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatch.dispatch(calendarEventDeleteAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarService.prototype.addCalendarEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        event = this.adjustAlert(event);
        /** @type {?} */
        var calendarEventAddAPI = (/** @type {?} */ (this.APIFactory.getAPI('addCalendarEvent')));
        calendarEventAddAPI.setCalendarEvent(event);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatch.dispatch(calendarEventAddAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} clientID
     * @param {?} event
     * @return {?}
     */
    CalendarService.prototype.updateCalendarEvent = /**
     * @param {?} clientID
     * @param {?} event
     * @return {?}
     */
    function (clientID, event) {
        var _this = this;
        event = this.adjustAlert(event);
        /** @type {?} */
        var calendarEventUpdateAPI = (/** @type {?} */ (this.APIFactory.getAPI('updateCalendarEvent')));
        calendarEventUpdateAPI.ClientID = clientID;
        calendarEventUpdateAPI.setCalendarEvent(event);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatch.dispatch(calendarEventUpdateAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarService.prototype.adjustAlert = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.alert1 == 'Default')
            event.alert1 = '';
        if (event.alert2 == 'Default')
            event.alert2 = '';
        //when alert1 & alert2 have data and not empty
        if (event.isAlert && StringUtils.isNotEmpty(event.alert1) && StringUtils.isNotEmpty(event.alert2)) {
            if (event.allDay) { // sort alert if allDay
                if (JSON.parse(this.profileCodeService.getArgumentsByCode('Calendar_RemindTime', event.alert1)).day > JSON.parse(this.profileCodeService.getArgumentsByCode('Calendar_RemindTime', event.alert2)).day) {
                    /** @type {?} */
                    var temp = event.alert1;
                    event.alert1 = event.alert2;
                    event.alert2 = temp;
                }
            }
            else { // sort if not allDay
                if (JSON.parse(this.profileCodeService.getArgumentsByCode('Calendar_RemindTime', event.alert1)).min > JSON.parse(this.profileCodeService.getArgumentsByCode('Calendar_RemindTime', event.alert2)).min) {
                    /** @type {?} */
                    var temp = event.alert1;
                    event.alert1 = event.alert2;
                    event.alert2 = temp;
                }
            }
        }
        else if (!event.isAlert) {
            event.alert1 = '';
            event.alert2 = '';
            event.alert3 = '';
        }
        event.color = this.profileCodeService.getArgumentsByCode('Calendar_Type', event.activity); // get activity color
        return event;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CalendarService.prototype.calendarValidation = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var validationResult = new ValidationResult();
        if (data.title == '')
            validationResult.setErrorMap('title', 'required');
        if (data.title.length > 60) //title length
            validationResult.setErrorMap('title', 'maxLength');
        if (data.location == '')
            validationResult.setErrorMap('location', 'required');
        if (data.location.length > 100) //title length
            validationResult.setErrorMap('location', 'maxLength');
        if (data.activity == 'Default' || data.activity == '') // activity validate
            validationResult.setErrorMap('activity', 'required');
        if (data.isAlert == true && (data.alert1 == 'Default') && (data.alert2 == 'Default'))
            validationResult.setErrorMap('alert1', 'required');
        if (data.isAlert == true && (data.alert1 == data.alert2) && data.alert1 != 'Default')
            validationResult.setErrorMap('alert2', 'sameAlert');
        if (differenceInMinutes(data.end, data.start) < 15 && differenceInMinutes(data.end, data.start) >= 0 && data.allDay != true) {
            validationResult.setErrorMap('time', 'minTime');
        }
        else if (differenceInMinutes(data.end, data.start) < 0) {
            validationResult.setErrorMap('time', 'errorTime');
        }
        if (data.remark.length > 500)
            validationResult.setErrorMap('remark', 'maxLength');
        return validationResult;
    };
    /**
     * @param {?} calendarEventList
     * @return {?}
     */
    CalendarService.prototype.sortCalendarEventList = /**
     * @param {?} calendarEventList
     * @return {?}
     */
    function (calendarEventList) {
        for (var i = 0; i < calendarEventList.length - 1; i++) {
            for (var j = i + 1; j < calendarEventList.length; j++) {
                if (calendarEventList[j].allDay && !calendarEventList[i].allDay) {
                    /** @type {?} */
                    var temp = calendarEventList[i];
                    calendarEventList[i] = calendarEventList[j];
                    calendarEventList[j] = temp;
                }
            }
        }
        for (var i = 0; i < calendarEventList.length - 1; i++) {
            for (var j = i + 1; j < calendarEventList.length; j++) {
                if (calendarEventList[j].allDay == calendarEventList[i].allDay) {
                    if (calendarEventList[i].allDay) {
                        if (calendarEventList[j].start < calendarEventList[i].start) {
                            /** @type {?} */
                            var temp = calendarEventList[i];
                            calendarEventList[i] = calendarEventList[j];
                            calendarEventList[j] = temp;
                        }
                        else if (isSameDay(calendarEventList[j].start, calendarEventList[i].start)) {
                            if (calendarEventList[j].end > calendarEventList[i].end) {
                                /** @type {?} */
                                var temp = calendarEventList[i];
                                calendarEventList[i] = calendarEventList[j];
                                calendarEventList[j] = temp;
                            }
                        }
                    }
                    else {
                        if (calendarEventList[j].start < calendarEventList[i].start) {
                            /** @type {?} */
                            var temp = calendarEventList[i];
                            calendarEventList[i] = calendarEventList[j];
                            calendarEventList[j] = temp;
                        }
                    }
                }
            }
        }
        return calendarEventList;
    };
    CalendarService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    CalendarService.ctorParameters = function () { return [
        { type: APIDispatch },
        { type: ProfileCodeService },
        { type: APIFactory }
    ]; };
    /** @nocollapse */ CalendarService.ngInjectableDef = i0.defineInjectable({ factory: function CalendarService_Factory() { return new CalendarService(i0.inject(i1.APIDispatch), i0.inject(i1.ProfileCodeService), i0.inject(i1.APIFactory)); }, token: CalendarService, providedIn: "root" });
    return CalendarService;
}());
export { CalendarService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalendarService.prototype.dispatch;
    /**
     * @type {?}
     * @private
     */
    CalendarService.prototype.profileCodeService;
    /**
     * @type {?}
     * @private
     */
    CalendarService.prototype.APIFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9jYWxlbmRhci9jYWxlbmRhci1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBS2hFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFFL0M7SUFJRSx5QkFBb0IsUUFBcUIsRUFDckIsa0JBQXNDLEVBQ3RDLFVBQXNCO1FBRnRCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hDLGNBQWM7SUFDaEIsQ0FBQzs7Ozs7OztJQUVELDhDQUFvQjs7Ozs7O0lBQXBCLFVBQXFCLEtBQVcsRUFBRSxHQUFTLEVBQUUsR0FBVTtRQUF2RCxpQkEwQ0M7UUF4Q0MsT0FBTyxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUVqRSxvQkFBb0IsR0FB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RSxNQUFNO2lCQUNuQjs7O2dCQWhCUSxXQUFXO2dCQVNaLGtCQUFrQjtnQkFSakIsVUFBVTs7OzBCQUZuQjtDQXFOQyxBQXRNRCxJQXNNQztTQW5NWSxlQUFlOzs7Ozs7SUFDZCxtQ0FBNkI7Ozs7O0lBQzdCLDZDQUE4Qzs7Ozs7SUFDOUMscUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEFQSUZhY3RvcnkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnRMaXN0QVBJIH0gZnJvbSAnLi4vLi4vYXBpL0NhbGVuZGFyRXZlbnRMaXN0QVBJJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Q2FsZW5kYXJFdmVudERldGFpbH0gZnJvbSAnLi9tb2RlbC9DYWxlbmRhckV2ZW50RGV0YWlsJztcbmltcG9ydCB7Q2FsZW5kYXJFdmVudERldGFpbEFQSX0gZnJvbSAnLi4vLi4vYXBpL0NhbGVuZGFyRXZlbnREZXRhaWxBUEknO1xuaW1wb3J0IHtDYWxlbmRhckV2ZW50RGVsZXRlQVBJfSBmcm9tICcuLi8uLi9hcGkvQ2FsZW5kYXJFdmVudERlbGV0ZUFQSSc7XG5pbXBvcnQge0NhbGVuZGFyRXZlbnRBZGRBUEl9IGZyb20gJy4uLy4uL2FwaS9DYWxlbmRhckV2ZW50QWRkQVBJJztcbmltcG9ydCB7Q2FsZW5kYXJFdmVudFVwZGF0ZUFQSX0gZnJvbSAnLi4vLi4vYXBpL0NhbGVuZGFyRXZlbnRVcGRhdGVBUEknO1xuaW1wb3J0IHtQcm9maWxlQ29kZVNlcnZpY2V9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtWYWxpZGF0aW9uUmVzdWx0fSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7ZGlmZmVyZW5jZUluTWludXRlcywgaXNTYW1lRGF5fSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc3BhdGNoOiBBUElEaXNwYXRjaCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBBUElGYWN0b3J5OiBBUElGYWN0b3J5KSB7XG4gICAgLy9yZWdpc3RlciBhcGlcbiAgfVxuXG4gIGdldENhbGVuZGFyRXZlbnRMaXN0KHN0YXJ0OiBEYXRlLCBlbmQ6IERhdGUsIGtleTpzdHJpbmcpOiBPYnNlcnZhYmxlPEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+PiB7XG5cbiAgICBjb25zb2xlLmRlYnVnKCdjYWxlbmRhci1zZXJ2aWNlLWdldENhbGVuZGFyRXZlbnRMaXN0JyxzdGFydCxlbmQsa2V5KTtcblxuICAgIGxldCBjYWxlbmRhckV2ZW50TGlzdEFQSTogQ2FsZW5kYXJFdmVudExpc3RBUEkgPSA8Q2FsZW5kYXJFdmVudExpc3RBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q2FsZW5kYXJFdmVudExpc3QnKTtcbiAgICBjYWxlbmRhckV2ZW50TGlzdEFQSS5zdGFydFRpbWUgPSBzdGFydDtcbiAgICBjYWxlbmRhckV2ZW50TGlzdEFQSS5lbmRUaW1lID0gZW5kO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaC5kaXNwYXRjaChjYWxlbmRhckV2ZW50TGlzdEFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2NhbGVuZGFyLXNlcnZpY2UtZ2V0Q0FsZW5kYXJFdmVudExpc3QgcmVzcG9uc2UnLGRhdGEpO1xuXG4gICAgICAgIGxldCByZXR1cm5MaXN0OiBBcnJheTxDYWxlbmRhckV2ZW50RGV0YWlsPiA9IFtdO1xuICAgICAgICBsZXQgY2FsZW5kYXJFdmVudExpc3QgPSBkYXRhWydCb2R5J107XG4gICAgICAgIGlmKGNhbGVuZGFyRXZlbnRMaXN0KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxlbmRhckV2ZW50TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGpzb24gPSBjYWxlbmRhckV2ZW50TGlzdFtpXTtcbiAgICAgICAgICAgIGxldCBldmVudCA9IG5ldyBDYWxlbmRhckV2ZW50RGV0YWlsKGpzb24uQ2xpZW50SUQsXG4gICAgICAgICAgICAgIGpzb24uQ2FsZW5kYXJJRCxcbiAgICAgICAgICAgICAganNvbi5UaXRsZSxcbiAgICAgICAgICAgICAganNvbi5Mb2NhdGlvbixcbiAgICAgICAgICAgICAganNvbi5DYWxlbmRhclR5cGUsXG4gICAgICAgICAgICAgIGpzb24uSXNBbGxEYXksXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGpzb24uU3RhcnRUaW1lKSxcbiAgICAgICAgICAgICAgbmV3IERhdGUoanNvbi5FbmRUaW1lKSxcbiAgICAgICAgICAgICAganNvbi5SZW1hcmssXG4gICAgICAgICAgICAgIGpzb24uSXNBbGVydCxcbiAgICAgICAgICAgICAganNvbi5BbGVydDEsXG4gICAgICAgICAgICAgIGpzb24uQWxlcnQyLFxuICAgICAgICAgICAgICBqc29uLkFsZXJ0MyxcbiAgICAgICAgICAgICAgdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0QXJndW1lbnRzQnlDb2RlKCdDYWxlbmRhcl9UeXBlJyxqc29uLkNhbGVuZGFyVHlwZSkpO1xuICAgICAgICAgICAgcmV0dXJuTGlzdC5wdXNoKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuTGlzdCA9IHRoaXMuc29ydENhbGVuZGFyRXZlbnRMaXN0KHJldHVybkxpc3QpO1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmV0dXJuTGlzdCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KFtdKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENhbGVuZGFyRXZlbnREZXRhaWwoY2xpZW50SUQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FsZW5kYXJFdmVudERldGFpbD4ge1xuICAgIGxldCBjYWxlbmRhckV2ZW50RGV0YWlsQVBJOiBDYWxlbmRhckV2ZW50RGV0YWlsQVBJID0gPENhbGVuZGFyRXZlbnREZXRhaWxBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q2FsZW5kYXJFdmVudERldGFpbCcpO1xuICAgIGNhbGVuZGFyRXZlbnREZXRhaWxBUEkuQ2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKT0+e1xuICAgICAgdGhpcy5kaXNwYXRjaC5kaXNwYXRjaChjYWxlbmRhckV2ZW50RGV0YWlsQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IGRldGFpbDtcbiAgICAgICAgbGV0IGV2ZW50RGV0YWlsICA9IGRhdGFbJ0JvZHknXTtcbiAgICAgICAgZXZlbnREZXRhaWwgPSBldmVudERldGFpbFswXTtcbiAgICAgICAgZGV0YWlsID0gbmV3IENhbGVuZGFyRXZlbnREZXRhaWwoZXZlbnREZXRhaWwuQ2xpZW50SUQsZXZlbnREZXRhaWwuQ2FsZW5kYXJJRCxldmVudERldGFpbC5UaXRsZSxldmVudERldGFpbC5Mb2NhdGlvbixldmVudERldGFpbC5DYWxlbmRhclR5cGUsZXZlbnREZXRhaWwuSXNBbGxEYXksbmV3IERhdGUoZXZlbnREZXRhaWwuU3RhcnRUaW1lKSxuZXcgRGF0ZShldmVudERldGFpbC5FbmRUaW1lKSxldmVudERldGFpbC5Jc0FsZXJ0LGV2ZW50RGV0YWlsLkFsZXJ0MSwgZXZlbnREZXRhaWwuQWxlcnQyLCBldmVudERldGFpbC5BbGVydDMsZXZlbnREZXRhaWwuUmVtYXJrLHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldEFyZ3VtZW50c0J5Q29kZSgnQ2FsZW5kYXJfVHlwZScsZXZlbnREZXRhaWwuQ2FsZW5kYXJUeXBlKSk7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZGV0YWlsKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlQ2FsZW5kYXJFdmVudChjbGllbnRJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+ICB7XG4gICAgbGV0IGNhbGVuZGFyRXZlbnREZWxldGVBUEk6ICBDYWxlbmRhckV2ZW50RGVsZXRlQVBJID0gPENhbGVuZGFyRXZlbnREZWxldGVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZGVsZXRlQ2FsZW5kYXJFdmVudCcpO1xuICAgIGNhbGVuZGFyRXZlbnREZWxldGVBUEkuY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoLmRpc3BhdGNoKGNhbGVuZGFyRXZlbnREZWxldGVBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0hlYWRlciddKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2FsZW5kYXJFdmVudChldmVudDogQ2FsZW5kYXJFdmVudERldGFpbCk6IE9ic2VydmFibGU8YW55PiAge1xuICAgIGV2ZW50ID0gdGhpcy5hZGp1c3RBbGVydChldmVudCk7XG4gICAgbGV0IGNhbGVuZGFyRXZlbnRBZGRBUEk6ICBDYWxlbmRhckV2ZW50QWRkQVBJID0gPENhbGVuZGFyRXZlbnRBZGRBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnYWRkQ2FsZW5kYXJFdmVudCcpO1xuICAgIGNhbGVuZGFyRXZlbnRBZGRBUEkuc2V0Q2FsZW5kYXJFdmVudChldmVudCk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaC5kaXNwYXRjaChjYWxlbmRhckV2ZW50QWRkQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydIZWFkZXInXSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNhbGVuZGFyRXZlbnQoY2xpZW50SUQ6IHN0cmluZyxldmVudDogQ2FsZW5kYXJFdmVudERldGFpbCk6IE9ic2VydmFibGU8YW55PiAge1xuICAgIGV2ZW50ID0gdGhpcy5hZGp1c3RBbGVydChldmVudCk7XG4gICAgbGV0IGNhbGVuZGFyRXZlbnRVcGRhdGVBUEk6ICBDYWxlbmRhckV2ZW50VXBkYXRlQVBJID0gPENhbGVuZGFyRXZlbnRVcGRhdGVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgndXBkYXRlQ2FsZW5kYXJFdmVudCcpO1xuICAgIGNhbGVuZGFyRXZlbnRVcGRhdGVBUEkuQ2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICBjYWxlbmRhckV2ZW50VXBkYXRlQVBJLnNldENhbGVuZGFyRXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2guZGlzcGF0Y2goY2FsZW5kYXJFdmVudFVwZGF0ZUFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVsnSGVhZGVyJ10pO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRqdXN0QWxlcnQoZXZlbnQ6IENhbGVuZGFyRXZlbnREZXRhaWwpOiBDYWxlbmRhckV2ZW50RGV0YWlsIHtcblxuICAgIGlmKGV2ZW50LmFsZXJ0MSA9PSAnRGVmYXVsdCcpIGV2ZW50LmFsZXJ0MSA9ICcnO1xuICAgIGlmKGV2ZW50LmFsZXJ0MiA9PSAnRGVmYXVsdCcpIGV2ZW50LmFsZXJ0MiA9ICcnO1xuXG4gICAgLy93aGVuIGFsZXJ0MSAmIGFsZXJ0MiBoYXZlIGRhdGEgYW5kIG5vdCBlbXB0eVxuICAgIGlmKGV2ZW50LmlzQWxlcnQgJiYgU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShldmVudC5hbGVydDEpICYmIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoZXZlbnQuYWxlcnQyKSkge1xuICAgICAgaWYoZXZlbnQuYWxsRGF5KSB7IC8vIHNvcnQgYWxlcnQgaWYgYWxsRGF5XG4gICAgICAgIGlmKEpTT04ucGFyc2UodGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0QXJndW1lbnRzQnlDb2RlKCdDYWxlbmRhcl9SZW1pbmRUaW1lJyxldmVudC5hbGVydDEpKS5kYXkgPiBKU09OLnBhcnNlKHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldEFyZ3VtZW50c0J5Q29kZSgnQ2FsZW5kYXJfUmVtaW5kVGltZScsZXZlbnQuYWxlcnQyKSkuZGF5KSB7XG4gICAgICAgICAgbGV0IHRlbXAgPSBldmVudC5hbGVydDEgO1xuICAgICAgICAgIGV2ZW50LmFsZXJ0MSA9IGV2ZW50LmFsZXJ0MjtcbiAgICAgICAgICBldmVudC5hbGVydDIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAvLyBzb3J0IGlmIG5vdCBhbGxEYXlcbiAgICAgICAgaWYoSlNPTi5wYXJzZSh0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRBcmd1bWVudHNCeUNvZGUoJ0NhbGVuZGFyX1JlbWluZFRpbWUnLGV2ZW50LmFsZXJ0MSkpLm1pbiA+IEpTT04ucGFyc2UodGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0QXJndW1lbnRzQnlDb2RlKCdDYWxlbmRhcl9SZW1pbmRUaW1lJyxldmVudC5hbGVydDIpKS5taW4pIHtcbiAgICAgICAgICBsZXQgdGVtcCA9IGV2ZW50LmFsZXJ0MSA7XG4gICAgICAgICAgZXZlbnQuYWxlcnQxID0gZXZlbnQuYWxlcnQyO1xuICAgICAgICAgIGV2ZW50LmFsZXJ0MiA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZighZXZlbnQuaXNBbGVydCkge1xuICAgICAgZXZlbnQuYWxlcnQxID0gJyc7XG4gICAgICBldmVudC5hbGVydDIgPSAnJztcbiAgICAgIGV2ZW50LmFsZXJ0MyA9ICcnO1xuICAgIH1cbiAgICBldmVudC5jb2xvciA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldEFyZ3VtZW50c0J5Q29kZSgnQ2FsZW5kYXJfVHlwZScsZXZlbnQuYWN0aXZpdHkpOyAvLyBnZXQgYWN0aXZpdHkgY29sb3JcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICBjYWxlbmRhclZhbGlkYXRpb24oZGF0YSk6IFZhbGlkYXRpb25SZXN1bHQge1xuICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0ID0gbmV3IFZhbGlkYXRpb25SZXN1bHQoKTtcbiAgICBpZiAoZGF0YS50aXRsZSA9PSAnJylcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ3RpdGxlJywgJ3JlcXVpcmVkJyk7XG4gICAgaWYgKGRhdGEudGl0bGUubGVuZ3RoID4gNjApIC8vdGl0bGUgbGVuZ3RoXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCd0aXRsZScsICdtYXhMZW5ndGgnKTtcbiAgICBpZiAoZGF0YS5sb2NhdGlvbiA9PSAnJylcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2xvY2F0aW9uJywgJ3JlcXVpcmVkJyk7XG4gICAgaWYgKGRhdGEubG9jYXRpb24ubGVuZ3RoID4gMTAwKSAvL3RpdGxlIGxlbmd0aFxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnbG9jYXRpb24nLCAnbWF4TGVuZ3RoJyk7XG4gICAgaWYgKGRhdGEuYWN0aXZpdHkgPT0gJ0RlZmF1bHQnIHx8IGRhdGEuYWN0aXZpdHkgPT0gJycpIC8vIGFjdGl2aXR5IHZhbGlkYXRlXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdhY3Rpdml0eScsICdyZXF1aXJlZCcpO1xuICAgIGlmIChkYXRhLmlzQWxlcnQgPT0gdHJ1ZSAmJiAoZGF0YS5hbGVydDEgPT0gJ0RlZmF1bHQnKSAmJiAoZGF0YS5hbGVydDIgPT0gJ0RlZmF1bHQnKSlcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2FsZXJ0MScsICdyZXF1aXJlZCcpO1xuICAgIGlmIChkYXRhLmlzQWxlcnQgPT0gdHJ1ZSAmJiAoZGF0YS5hbGVydDEgPT0gZGF0YS5hbGVydDIpICYmIGRhdGEuYWxlcnQxICE9ICdEZWZhdWx0JylcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2FsZXJ0MicsICdzYW1lQWxlcnQnKTtcbiAgICBpZiAoZGlmZmVyZW5jZUluTWludXRlcyhkYXRhLmVuZCxkYXRhLnN0YXJ0KSA8IDE1ICYmIGRpZmZlcmVuY2VJbk1pbnV0ZXMoZGF0YS5lbmQsZGF0YS5zdGFydCkgPj0gMCAmJiBkYXRhLmFsbERheSAhPSB0cnVlKSB7XG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCd0aW1lJywgJ21pblRpbWUnKTtcbiAgICB9IGVsc2UgaWYoZGlmZmVyZW5jZUluTWludXRlcyhkYXRhLmVuZCxkYXRhLnN0YXJ0KSA8IDApIHtcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ3RpbWUnLCAnZXJyb3JUaW1lJyk7XG4gICAgfVxuICAgIGlmIChkYXRhLnJlbWFyay5sZW5ndGggPiA1MDApXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdyZW1hcmsnLCAnbWF4TGVuZ3RoJyk7XG4gICAgcmV0dXJuIHZhbGlkYXRpb25SZXN1bHQ7XG4gIH1cblxuICBzb3J0Q2FsZW5kYXJFdmVudExpc3QoY2FsZW5kYXJFdmVudExpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+KTogQXJyYXk8Q2FsZW5kYXJFdmVudERldGFpbD4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsZW5kYXJFdmVudExpc3QubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBjYWxlbmRhckV2ZW50TGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICBpZihjYWxlbmRhckV2ZW50TGlzdFtqXS5hbGxEYXkgJiYgIWNhbGVuZGFyRXZlbnRMaXN0W2ldLmFsbERheSkge1xuICAgICAgICAgIGxldCB0ZW1wID0gY2FsZW5kYXJFdmVudExpc3RbaV07XG4gICAgICAgICAgY2FsZW5kYXJFdmVudExpc3RbaV0gPSBjYWxlbmRhckV2ZW50TGlzdFtqXTtcbiAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtqXSA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxlbmRhckV2ZW50TGlzdC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGNhbGVuZGFyRXZlbnRMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmKGNhbGVuZGFyRXZlbnRMaXN0W2pdLmFsbERheSA9PSBjYWxlbmRhckV2ZW50TGlzdFtpXS5hbGxEYXkpIHtcbiAgICAgICAgICBpZihjYWxlbmRhckV2ZW50TGlzdFtpXS5hbGxEYXkpIHtcbiAgICAgICAgICAgIGlmKGNhbGVuZGFyRXZlbnRMaXN0W2pdLnN0YXJ0IDwgY2FsZW5kYXJFdmVudExpc3RbaV0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgbGV0IHRlbXAgPSBjYWxlbmRhckV2ZW50TGlzdFtpXTtcbiAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudExpc3RbaV0gPSBjYWxlbmRhckV2ZW50TGlzdFtqXTtcbiAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudExpc3Rbal0gPSB0ZW1wO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGlzU2FtZURheShjYWxlbmRhckV2ZW50TGlzdFtqXS5zdGFydCwgY2FsZW5kYXJFdmVudExpc3RbaV0uc3RhcnQpKSB7XG4gICAgICAgICAgICAgIGlmIChjYWxlbmRhckV2ZW50TGlzdFtqXS5lbmQgPiBjYWxlbmRhckV2ZW50TGlzdFtpXS5lbmQpe1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gY2FsZW5kYXJFdmVudExpc3RbaV07XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudExpc3RbaV0gPSBjYWxlbmRhckV2ZW50TGlzdFtqXTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtqXSA9IHRlbXA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoY2FsZW5kYXJFdmVudExpc3Rbal0uc3RhcnQgPCBjYWxlbmRhckV2ZW50TGlzdFtpXS5zdGFydCkge1xuICAgICAgICAgICAgICBsZXQgdGVtcCA9IGNhbGVuZGFyRXZlbnRMaXN0W2ldO1xuICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtpXSA9IGNhbGVuZGFyRXZlbnRMaXN0W2pdO1xuICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtqXSA9IHRlbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYWxlbmRhckV2ZW50TGlzdFxuICB9XG59XG4iXX0=