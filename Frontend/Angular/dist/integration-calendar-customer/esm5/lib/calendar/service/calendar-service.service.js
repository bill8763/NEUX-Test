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
                        var event_1 = new CalendarEventDetail(json.ClientID, json.CalendarID, json.CustomerClientID, json.Title, json.Location, json.CalendarType, json.IsAllDay, new Date(json.StartTime), new Date(json.EndTime), json.Remark, json.IsAlert, json.Alert1, json.Alert2, json.Alert3, _this.profileCodeService.getArgumentsByCode('Calendar_Type', json.CalendarType));
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
                detail = new CalendarEventDetail(eventDetail.ClientID, eventDetail.CalendarID, eventDetail.CustomerClientID, eventDetail.Title, eventDetail.Location, eventDetail.CalendarType, eventDetail.IsAllDay, new Date(eventDetail.StartTime), new Date(eventDetail.EndTime), eventDetail.IsAlert, eventDetail.Alert1, eventDetail.Alert2, eventDetail.Alert3, eventDetail.Remark, _this.profileCodeService.getArgumentsByCode('Calendar_Type', eventDetail.CalendarType));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvc2VydmljZS9jYWxlbmRhci1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUtoRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsU0FBUyxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBRS9DO0lBSUUseUJBQW9CLFFBQXFCLEVBQ3JCLGtCQUFzQyxFQUN0QyxVQUFzQjtRQUZ0QixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUV4QyxjQUFjO0lBQ2hCLENBQUM7Ozs7Ozs7SUFFRCw4Q0FBb0I7Ozs7OztJQUFwQixVQUFxQixLQUFXLEVBQUUsR0FBUyxFQUFFLEdBQVU7UUFBdkQsaUJBMkNDO1FBekNDLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUNBQXVDLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMs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RjtRQUNELE9BQU8saUJBQWlCLENBQUE7SUFDMUIsQ0FBQzs7Z0JBdk1GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztnQkFoQlEsV0FBVztnQkFTWixrQkFBa0I7Z0JBUmpCLFVBQVU7OzswQkFGbkI7Q0F1TkMsQUF4TUQsSUF3TUM7U0FyTVksZUFBZTs7Ozs7O0lBQ2QsbUNBQTZCOzs7OztJQUM3Qiw2Q0FBOEM7Ozs7O0lBQzlDLHFDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudExpc3RBUEkgfSBmcm9tICcuLi9hcGkvQ2FsZW5kYXJFdmVudExpc3RBUEknO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtDYWxlbmRhckV2ZW50RGV0YWlsfSBmcm9tICcuL21vZGVsL0NhbGVuZGFyRXZlbnREZXRhaWwnO1xuaW1wb3J0IHtDYWxlbmRhckV2ZW50RGV0YWlsQVBJfSBmcm9tICcuLi9hcGkvQ2FsZW5kYXJFdmVudERldGFpbEFQSSc7XG5pbXBvcnQge0NhbGVuZGFyRXZlbnREZWxldGVBUEl9IGZyb20gJy4uL2FwaS9DYWxlbmRhckV2ZW50RGVsZXRlQVBJJztcbmltcG9ydCB7Q2FsZW5kYXJFdmVudEFkZEFQSX0gZnJvbSAnLi4vYXBpL0NhbGVuZGFyRXZlbnRBZGRBUEknO1xuaW1wb3J0IHtDYWxlbmRhckV2ZW50VXBkYXRlQVBJfSBmcm9tICcuLi9hcGkvQ2FsZW5kYXJFdmVudFVwZGF0ZUFQSSc7XG5pbXBvcnQge1Byb2ZpbGVDb2RlU2VydmljZX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge1ZhbGlkYXRpb25SZXN1bHR9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtkaWZmZXJlbmNlSW5NaW51dGVzLCBpc1NhbWVEYXl9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzcGF0Y2g6IEFQSURpc3BhdGNoLFxuICAgICAgICAgICAgICBwcml2YXRlIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIEFQSUZhY3Rvcnk6IEFQSUZhY3RvcnksXG4pIHtcbiAgICAvL3JlZ2lzdGVyIGFwaVxuICB9XG5cbiAgZ2V0Q2FsZW5kYXJFdmVudExpc3Qoc3RhcnQ6IERhdGUsIGVuZDogRGF0ZSwga2V5OnN0cmluZyk6IE9ic2VydmFibGU8QXJyYXk8Q2FsZW5kYXJFdmVudERldGFpbD4+IHtcblxuICAgIGNvbnNvbGUuZGVidWcoJ2NhbGVuZGFyLXNlcnZpY2UtZ2V0Q2FsZW5kYXJFdmVudExpc3QnLHN0YXJ0LGVuZCxrZXkpO1xuXG4gICAgbGV0IGNhbGVuZGFyRXZlbnRMaXN0QVBJOiBDYWxlbmRhckV2ZW50TGlzdEFQSSA9IDxDYWxlbmRhckV2ZW50TGlzdEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDYWxlbmRhckV2ZW50TGlzdCcpO1xuICAgIGNhbGVuZGFyRXZlbnRMaXN0QVBJLnN0YXJ0VGltZSA9IHN0YXJ0O1xuICAgIGNhbGVuZGFyRXZlbnRMaXN0QVBJLmVuZFRpbWUgPSBlbmQ7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoLmRpc3BhdGNoKGNhbGVuZGFyRXZlbnRMaXN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY2FsZW5kYXItc2VydmljZS1nZXRDQWxlbmRhckV2ZW50TGlzdCByZXNwb25zZScsZGF0YSk7XG5cbiAgICAgICAgbGV0IHJldHVybkxpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+ID0gW107XG4gICAgICAgIGxldCBjYWxlbmRhckV2ZW50TGlzdCA9IGRhdGFbJ0JvZHknXTtcbiAgICAgICAgaWYoY2FsZW5kYXJFdmVudExpc3QpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGVuZGFyRXZlbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQganNvbiA9IGNhbGVuZGFyRXZlbnRMaXN0W2ldO1xuICAgICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IENhbGVuZGFyRXZlbnREZXRhaWwoanNvbi5DbGllbnRJRCxcbiAgICAgICAgICAgICAganNvbi5DYWxlbmRhcklELFxuICAgICAgICAgICAgICBqc29uLkN1c3RvbWVyQ2xpZW50SUQsXG4gICAgICAgICAgICAgIGpzb24uVGl0bGUsXG4gICAgICAgICAgICAgIGpzb24uTG9jYXRpb24sXG4gICAgICAgICAgICAgIGpzb24uQ2FsZW5kYXJUeXBlLFxuICAgICAgICAgICAgICBqc29uLklzQWxsRGF5LFxuICAgICAgICAgICAgICBuZXcgRGF0ZShqc29uLlN0YXJ0VGltZSksXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGpzb24uRW5kVGltZSksXG4gICAgICAgICAgICAgIGpzb24uUmVtYXJrLFxuICAgICAgICAgICAgICBqc29uLklzQWxlcnQsXG4gICAgICAgICAgICAgIGpzb24uQWxlcnQxLFxuICAgICAgICAgICAgICBqc29uLkFsZXJ0MixcbiAgICAgICAgICAgICAganNvbi5BbGVydDMsXG4gICAgICAgICAgICAgIHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldEFyZ3VtZW50c0J5Q29kZSgnQ2FsZW5kYXJfVHlwZScsanNvbi5DYWxlbmRhclR5cGUpKTtcbiAgICAgICAgICAgIHJldHVybkxpc3QucHVzaChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybkxpc3QgPSB0aGlzLnNvcnRDYWxlbmRhckV2ZW50TGlzdChyZXR1cm5MaXN0KTtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJldHVybkxpc3QpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChbXSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDYWxlbmRhckV2ZW50RGV0YWlsKGNsaWVudElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhbGVuZGFyRXZlbnREZXRhaWw+IHtcbiAgICBsZXQgY2FsZW5kYXJFdmVudERldGFpbEFQSTogQ2FsZW5kYXJFdmVudERldGFpbEFQSSA9IDxDYWxlbmRhckV2ZW50RGV0YWlsQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldENhbGVuZGFyRXZlbnREZXRhaWwnKTtcbiAgICBjYWxlbmRhckV2ZW50RGV0YWlsQVBJLkNsaWVudElEID0gY2xpZW50SUQ7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcik9PntcbiAgICAgIHRoaXMuZGlzcGF0Y2guZGlzcGF0Y2goY2FsZW5kYXJFdmVudERldGFpbEFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGxldCBkZXRhaWw7XG4gICAgICAgIGxldCBldmVudERldGFpbCAgPSBkYXRhWydCb2R5J107XG4gICAgICAgIGV2ZW50RGV0YWlsID0gZXZlbnREZXRhaWxbMF07XG4gICAgICAgIGRldGFpbCA9IG5ldyBDYWxlbmRhckV2ZW50RGV0YWlsKGV2ZW50RGV0YWlsLkNsaWVudElELGV2ZW50RGV0YWlsLkNhbGVuZGFySUQsZXZlbnREZXRhaWwuQ3VzdG9tZXJDbGllbnRJRCxldmVudERldGFpbC5UaXRsZSxldmVudERldGFpbC5Mb2NhdGlvbixldmVudERldGFpbC5DYWxlbmRhclR5cGUsZXZlbnREZXRhaWwuSXNBbGxEYXksbmV3IERhdGUoZXZlbnREZXRhaWwuU3RhcnRUaW1lKSxuZXcgRGF0ZShldmVudERldGFpbC5FbmRUaW1lKSxldmVudERldGFpbC5Jc0FsZXJ0LGV2ZW50RGV0YWlsLkFsZXJ0MSwgZXZlbnREZXRhaWwuQWxlcnQyLCBldmVudERldGFpbC5BbGVydDMsZXZlbnREZXRhaWwuUmVtYXJrLHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldEFyZ3VtZW50c0J5Q29kZSgnQ2FsZW5kYXJfVHlwZScsZXZlbnREZXRhaWwuQ2FsZW5kYXJUeXBlKSk7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZGV0YWlsKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlQ2FsZW5kYXJFdmVudChjbGllbnRJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+ICB7XG4gICAgbGV0IGNhbGVuZGFyRXZlbnREZWxldGVBUEk6ICBDYWxlbmRhckV2ZW50RGVsZXRlQVBJID0gPENhbGVuZGFyRXZlbnREZWxldGVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZGVsZXRlQ2FsZW5kYXJFdmVudCcpO1xuICAgIGNhbGVuZGFyRXZlbnREZWxldGVBUEkuY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoLmRpc3BhdGNoKGNhbGVuZGFyRXZlbnREZWxldGVBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0hlYWRlciddKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2FsZW5kYXJFdmVudChldmVudDogQ2FsZW5kYXJFdmVudERldGFpbCk6IE9ic2VydmFibGU8YW55PiAge1xuICAgIGV2ZW50ID0gdGhpcy5hZGp1c3RBbGVydChldmVudCk7XG4gICAgbGV0IGNhbGVuZGFyRXZlbnRBZGRBUEk6ICBDYWxlbmRhckV2ZW50QWRkQVBJID0gPENhbGVuZGFyRXZlbnRBZGRBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnYWRkQ2FsZW5kYXJFdmVudCcpO1xuICAgIGNhbGVuZGFyRXZlbnRBZGRBUEkuc2V0Q2FsZW5kYXJFdmVudChldmVudCk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaC5kaXNwYXRjaChjYWxlbmRhckV2ZW50QWRkQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydIZWFkZXInXSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNhbGVuZGFyRXZlbnQoY2xpZW50SUQ6IHN0cmluZyxldmVudDogQ2FsZW5kYXJFdmVudERldGFpbCk6IE9ic2VydmFibGU8YW55PiAge1xuICAgIGV2ZW50ID0gdGhpcy5hZGp1c3RBbGVydChldmVudCk7XG4gICAgbGV0IGNhbGVuZGFyRXZlbnRVcGRhdGVBUEk6ICBDYWxlbmRhckV2ZW50VXBkYXRlQVBJID0gPENhbGVuZGFyRXZlbnRVcGRhdGVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgndXBkYXRlQ2FsZW5kYXJFdmVudCcpO1xuICAgIGNhbGVuZGFyRXZlbnRVcGRhdGVBUEkuQ2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICBjYWxlbmRhckV2ZW50VXBkYXRlQVBJLnNldENhbGVuZGFyRXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2guZGlzcGF0Y2goY2FsZW5kYXJFdmVudFVwZGF0ZUFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVsnSGVhZGVyJ10pO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRqdXN0QWxlcnQoZXZlbnQ6IENhbGVuZGFyRXZlbnREZXRhaWwpOiBDYWxlbmRhckV2ZW50RGV0YWlsIHtcblxuICAgIGlmKGV2ZW50LmFsZXJ0MSA9PSAnRGVmYXVsdCcpIGV2ZW50LmFsZXJ0MSA9ICcnO1xuICAgIGlmKGV2ZW50LmFsZXJ0MiA9PSAnRGVmYXVsdCcpIGV2ZW50LmFsZXJ0MiA9ICcnO1xuXG4gICAgLy93aGVuIGFsZXJ0MSAmIGFsZXJ0MiBoYXZlIGRhdGEgYW5kIG5vdCBlbXB0eVxuICAgIGlmKGV2ZW50LmlzQWxlcnQgJiYgU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShldmVudC5hbGVydDEpICYmIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoZXZlbnQuYWxlcnQyKSkge1xuICAgICAgaWYoZXZlbnQuYWxsRGF5KSB7IC8vIHNvcnQgYWxlcnQgaWYgYWxsRGF5XG4gICAgICAgIGlmKEpTT04ucGFyc2UodGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0QXJndW1lbnRzQnlDb2RlKCdDYWxlbmRhcl9SZW1pbmRUaW1lJyxldmVudC5hbGVydDEpKS5kYXkgPiBKU09OLnBhcnNlKHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldEFyZ3VtZW50c0J5Q29kZSgnQ2FsZW5kYXJfUmVtaW5kVGltZScsZXZlbnQuYWxlcnQyKSkuZGF5KSB7XG4gICAgICAgICAgbGV0IHRlbXAgPSBldmVudC5hbGVydDEgO1xuICAgICAgICAgIGV2ZW50LmFsZXJ0MSA9IGV2ZW50LmFsZXJ0MjtcbiAgICAgICAgICBldmVudC5hbGVydDIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAvLyBzb3J0IGlmIG5vdCBhbGxEYXlcbiAgICAgICAgaWYoSlNPTi5wYXJzZSh0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRBcmd1bWVudHNCeUNvZGUoJ0NhbGVuZGFyX1JlbWluZFRpbWUnLGV2ZW50LmFsZXJ0MSkpLm1pbiA+IEpTT04ucGFyc2UodGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0QXJndW1lbnRzQnlDb2RlKCdDYWxlbmRhcl9SZW1pbmRUaW1lJyxldmVudC5hbGVydDIpKS5taW4pIHtcbiAgICAgICAgICBsZXQgdGVtcCA9IGV2ZW50LmFsZXJ0MSA7XG4gICAgICAgICAgZXZlbnQuYWxlcnQxID0gZXZlbnQuYWxlcnQyO1xuICAgICAgICAgIGV2ZW50LmFsZXJ0MiA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZighZXZlbnQuaXNBbGVydCkge1xuICAgICAgZXZlbnQuYWxlcnQxID0gJyc7XG4gICAgICBldmVudC5hbGVydDIgPSAnJztcbiAgICAgIGV2ZW50LmFsZXJ0MyA9ICcnO1xuICAgIH1cbiAgICBldmVudC5jb2xvciA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldEFyZ3VtZW50c0J5Q29kZSgnQ2FsZW5kYXJfVHlwZScsZXZlbnQuYWN0aXZpdHkpOyAvLyBnZXQgYWN0aXZpdHkgY29sb3JcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICBjYWxlbmRhclZhbGlkYXRpb24oZGF0YSk6IFZhbGlkYXRpb25SZXN1bHQge1xuICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0ID0gbmV3IFZhbGlkYXRpb25SZXN1bHQoKTtcbiAgICBpZiAoZGF0YS50aXRsZSA9PSAnJylcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ3RpdGxlJywgJ3JlcXVpcmVkJyk7XG4gICAgaWYgKGRhdGEudGl0bGUubGVuZ3RoID4gNjApIC8vdGl0bGUgbGVuZ3RoXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCd0aXRsZScsICdtYXhMZW5ndGgnKTtcbiAgICBpZiAoZGF0YS5sb2NhdGlvbiA9PSAnJylcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2xvY2F0aW9uJywgJ3JlcXVpcmVkJyk7XG4gICAgaWYgKGRhdGEubG9jYXRpb24ubGVuZ3RoID4gMTAwKSAvL3RpdGxlIGxlbmd0aFxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnbG9jYXRpb24nLCAnbWF4TGVuZ3RoJyk7XG4gICAgaWYgKGRhdGEuYWN0aXZpdHkgPT0gJ0RlZmF1bHQnIHx8IGRhdGEuYWN0aXZpdHkgPT0gJycpIC8vIGFjdGl2aXR5IHZhbGlkYXRlXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdhY3Rpdml0eScsICdyZXF1aXJlZCcpO1xuICAgIGlmIChkYXRhLmlzQWxlcnQgPT0gdHJ1ZSAmJiAoZGF0YS5hbGVydDEgPT0gJ0RlZmF1bHQnKSAmJiAoZGF0YS5hbGVydDIgPT0gJ0RlZmF1bHQnKSlcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2FsZXJ0MScsICdyZXF1aXJlZCcpO1xuICAgIGlmIChkYXRhLmlzQWxlcnQgPT0gdHJ1ZSAmJiAoZGF0YS5hbGVydDEgPT0gZGF0YS5hbGVydDIpICYmIGRhdGEuYWxlcnQxICE9ICdEZWZhdWx0JylcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2FsZXJ0MicsICdzYW1lQWxlcnQnKTtcbiAgICBpZiAoZGlmZmVyZW5jZUluTWludXRlcyhkYXRhLmVuZCxkYXRhLnN0YXJ0KSA8IDE1ICYmIGRpZmZlcmVuY2VJbk1pbnV0ZXMoZGF0YS5lbmQsZGF0YS5zdGFydCkgPj0gMCAmJiBkYXRhLmFsbERheSAhPSB0cnVlKSB7XG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCd0aW1lJywgJ21pblRpbWUnKTtcbiAgICB9IGVsc2UgaWYoZGlmZmVyZW5jZUluTWludXRlcyhkYXRhLmVuZCxkYXRhLnN0YXJ0KSA8IDApIHtcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ3RpbWUnLCAnZXJyb3JUaW1lJyk7XG4gICAgfVxuICAgIGlmIChkYXRhLnJlbWFyay5sZW5ndGggPiA1MDApXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdyZW1hcmsnLCAnbWF4TGVuZ3RoJyk7XG4gICAgcmV0dXJuIHZhbGlkYXRpb25SZXN1bHQ7XG4gIH1cblxuICBzb3J0Q2FsZW5kYXJFdmVudExpc3QoY2FsZW5kYXJFdmVudExpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+KTogQXJyYXk8Q2FsZW5kYXJFdmVudERldGFpbD4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsZW5kYXJFdmVudExpc3QubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBjYWxlbmRhckV2ZW50TGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICBpZihjYWxlbmRhckV2ZW50TGlzdFtqXS5hbGxEYXkgJiYgIWNhbGVuZGFyRXZlbnRMaXN0W2ldLmFsbERheSkge1xuICAgICAgICAgIGxldCB0ZW1wID0gY2FsZW5kYXJFdmVudExpc3RbaV07XG4gICAgICAgICAgY2FsZW5kYXJFdmVudExpc3RbaV0gPSBjYWxlbmRhckV2ZW50TGlzdFtqXTtcbiAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtqXSA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxlbmRhckV2ZW50TGlzdC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGNhbGVuZGFyRXZlbnRMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmKGNhbGVuZGFyRXZlbnRMaXN0W2pdLmFsbERheSA9PSBjYWxlbmRhckV2ZW50TGlzdFtpXS5hbGxEYXkpIHtcbiAgICAgICAgICBpZihjYWxlbmRhckV2ZW50TGlzdFtpXS5hbGxEYXkpIHtcbiAgICAgICAgICAgIGlmKGNhbGVuZGFyRXZlbnRMaXN0W2pdLnN0YXJ0IDwgY2FsZW5kYXJFdmVudExpc3RbaV0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgbGV0IHRlbXAgPSBjYWxlbmRhckV2ZW50TGlzdFtpXTtcbiAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudExpc3RbaV0gPSBjYWxlbmRhckV2ZW50TGlzdFtqXTtcbiAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudExpc3Rbal0gPSB0ZW1wO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGlzU2FtZURheShjYWxlbmRhckV2ZW50TGlzdFtqXS5zdGFydCwgY2FsZW5kYXJFdmVudExpc3RbaV0uc3RhcnQpKSB7XG4gICAgICAgICAgICAgIGlmIChjYWxlbmRhckV2ZW50TGlzdFtqXS5lbmQgPiBjYWxlbmRhckV2ZW50TGlzdFtpXS5lbmQpe1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gY2FsZW5kYXJFdmVudExpc3RbaV07XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudExpc3RbaV0gPSBjYWxlbmRhckV2ZW50TGlzdFtqXTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtqXSA9IHRlbXA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoY2FsZW5kYXJFdmVudExpc3Rbal0uc3RhcnQgPCBjYWxlbmRhckV2ZW50TGlzdFtpXS5zdGFydCkge1xuICAgICAgICAgICAgICBsZXQgdGVtcCA9IGNhbGVuZGFyRXZlbnRMaXN0W2ldO1xuICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtpXSA9IGNhbGVuZGFyRXZlbnRMaXN0W2pdO1xuICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtqXSA9IHRlbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYWxlbmRhckV2ZW50TGlzdFxuICB9XG59XG4iXX0=