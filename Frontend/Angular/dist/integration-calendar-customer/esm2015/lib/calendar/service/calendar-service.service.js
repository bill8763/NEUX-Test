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
export class CalendarService {
    /**
     * @param {?} dispatch
     * @param {?} profileCodeService
     * @param {?} APIFactory
     */
    constructor(dispatch, profileCodeService, APIFactory) {
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
    getCalendarEventList(start, end, key) {
        console.debug('calendar-service-getCalendarEventList', start, end, key);
        /** @type {?} */
        let calendarEventListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCalendarEventList')));
        calendarEventListAPI.startTime = start;
        calendarEventListAPI.endTime = end;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatch.dispatch(calendarEventListAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('calendar-service-getCAlendarEventList response', data);
                /** @type {?} */
                let returnList = [];
                /** @type {?} */
                let calendarEventList = data['Body'];
                if (calendarEventList) {
                    for (let i = 0; i < calendarEventList.length; i++) {
                        /** @type {?} */
                        let json = calendarEventList[i];
                        /** @type {?} */
                        let event = new CalendarEventDetail(json.ClientID, json.CalendarID, json.CustomerClientID, json.Title, json.Location, json.CalendarType, json.IsAllDay, new Date(json.StartTime), new Date(json.EndTime), json.Remark, json.IsAlert, json.Alert1, json.Alert2, json.Alert3, this.profileCodeService.getArgumentsByCode('Calendar_Type', json.CalendarType));
                        returnList.push(event);
                    }
                    returnList = this.sortCalendarEventList(returnList);
                    observer.next(returnList);
                    observer.complete();
                }
                else {
                    observer.next([]);
                    observer.complete();
                }
            }));
        }));
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    getCalendarEventDetail(clientID) {
        /** @type {?} */
        let calendarEventDetailAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCalendarEventDetail')));
        calendarEventDetailAPI.ClientID = clientID;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatch.dispatch(calendarEventDetailAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                /** @type {?} */
                let detail;
                /** @type {?} */
                let eventDetail = data['Body'];
                eventDetail = eventDetail[0];
                detail = new CalendarEventDetail(eventDetail.ClientID, eventDetail.CalendarID, eventDetail.CustomerClientID, eventDetail.Title, eventDetail.Location, eventDetail.CalendarType, eventDetail.IsAllDay, new Date(eventDetail.StartTime), new Date(eventDetail.EndTime), eventDetail.IsAlert, eventDetail.Alert1, eventDetail.Alert2, eventDetail.Alert3, eventDetail.Remark, this.profileCodeService.getArgumentsByCode('Calendar_Type', eventDetail.CalendarType));
                observer.next(detail);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    deleteCalendarEvent(clientID) {
        /** @type {?} */
        let calendarEventDeleteAPI = (/** @type {?} */ (this.APIFactory.getAPI('deleteCalendarEvent')));
        calendarEventDeleteAPI.clientID = clientID;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatch.dispatch(calendarEventDeleteAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    addCalendarEvent(event) {
        event = this.adjustAlert(event);
        /** @type {?} */
        let calendarEventAddAPI = (/** @type {?} */ (this.APIFactory.getAPI('addCalendarEvent')));
        calendarEventAddAPI.setCalendarEvent(event);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatch.dispatch(calendarEventAddAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} clientID
     * @param {?} event
     * @return {?}
     */
    updateCalendarEvent(clientID, event) {
        event = this.adjustAlert(event);
        /** @type {?} */
        let calendarEventUpdateAPI = (/** @type {?} */ (this.APIFactory.getAPI('updateCalendarEvent')));
        calendarEventUpdateAPI.ClientID = clientID;
        calendarEventUpdateAPI.setCalendarEvent(event);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatch.dispatch(calendarEventUpdateAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    adjustAlert(event) {
        if (event.alert1 == 'Default')
            event.alert1 = '';
        if (event.alert2 == 'Default')
            event.alert2 = '';
        //when alert1 & alert2 have data and not empty
        if (event.isAlert && StringUtils.isNotEmpty(event.alert1) && StringUtils.isNotEmpty(event.alert2)) {
            if (event.allDay) { // sort alert if allDay
                if (JSON.parse(this.profileCodeService.getArgumentsByCode('Calendar_RemindTime', event.alert1)).day > JSON.parse(this.profileCodeService.getArgumentsByCode('Calendar_RemindTime', event.alert2)).day) {
                    /** @type {?} */
                    let temp = event.alert1;
                    event.alert1 = event.alert2;
                    event.alert2 = temp;
                }
            }
            else { // sort if not allDay
                if (JSON.parse(this.profileCodeService.getArgumentsByCode('Calendar_RemindTime', event.alert1)).min > JSON.parse(this.profileCodeService.getArgumentsByCode('Calendar_RemindTime', event.alert2)).min) {
                    /** @type {?} */
                    let temp = event.alert1;
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
    }
    /**
     * @param {?} data
     * @return {?}
     */
    calendarValidation(data) {
        /** @type {?} */
        let validationResult = new ValidationResult();
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
    }
    /**
     * @param {?} calendarEventList
     * @return {?}
     */
    sortCalendarEventList(calendarEventList) {
        for (let i = 0; i < calendarEventList.length - 1; i++) {
            for (let j = i + 1; j < calendarEventList.length; j++) {
                if (calendarEventList[j].allDay && !calendarEventList[i].allDay) {
                    /** @type {?} */
                    let temp = calendarEventList[i];
                    calendarEventList[i] = calendarEventList[j];
                    calendarEventList[j] = temp;
                }
            }
        }
        for (let i = 0; i < calendarEventList.length - 1; i++) {
            for (let j = i + 1; j < calendarEventList.length; j++) {
                if (calendarEventList[j].allDay == calendarEventList[i].allDay) {
                    if (calendarEventList[i].allDay) {
                        if (calendarEventList[j].start < calendarEventList[i].start) {
                            /** @type {?} */
                            let temp = calendarEventList[i];
                            calendarEventList[i] = calendarEventList[j];
                            calendarEventList[j] = temp;
                        }
                        else if (isSameDay(calendarEventList[j].start, calendarEventList[i].start)) {
                            if (calendarEventList[j].end > calendarEventList[i].end) {
                                /** @type {?} */
                                let temp = calendarEventList[i];
                                calendarEventList[i] = calendarEventList[j];
                                calendarEventList[j] = temp;
                            }
                        }
                    }
                    else {
                        if (calendarEventList[j].start < calendarEventList[i].start) {
                            /** @type {?} */
                            let temp = calendarEventList[i];
                            calendarEventList[i] = calendarEventList[j];
                            calendarEventList[j] = temp;
                        }
                    }
                }
            }
        }
        return calendarEventList;
    }
}
CalendarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CalendarService.ctorParameters = () => [
    { type: APIDispatch },
    { type: ProfileCodeService },
    { type: APIFactory }
];
/** @nocollapse */ CalendarService.ngInjectableDef = i0.defineInjectable({ factory: function CalendarService_Factory() { return new CalendarService(i0.inject(i1.APIDispatch), i0.inject(i1.ProfileCodeService), i0.inject(i1.APIFactory)); }, token: CalendarService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvc2VydmljZS9jYWxlbmRhci1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUtoRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsU0FBUyxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBSy9DLE1BQU07Ozs7OztJQUNKLFlBQW9CLFFBQXFCLEVBQ3JCLGtCQUFzQyxFQUN0QyxVQUFzQjtRQUZ0QixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUV4QyxjQUFjO0lBQ2hCLENBQUM7Ozs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxLQUFXLEVBQUUsR0FBUyxFQUFFLEdBQVU7UUFFckQsT0FBTyxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUVqRSxvQkFB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Q0FBQzs7O1lBdk1GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBaEJRLFdBQVc7WUFTWixrQkFBa0I7WUFSakIsVUFBVTs7Ozs7Ozs7SUFpQkwsbUNBQTZCOzs7OztJQUM3Qiw2Q0FBOEM7Ozs7O0lBQzlDLHFDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudExpc3RBUEkgfSBmcm9tICcuLi9hcGkvQ2FsZW5kYXJFdmVudExpc3RBUEknO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtDYWxlbmRhckV2ZW50RGV0YWlsfSBmcm9tICcuL21vZGVsL0NhbGVuZGFyRXZlbnREZXRhaWwnO1xuaW1wb3J0IHtDYWxlbmRhckV2ZW50RGV0YWlsQVBJfSBmcm9tICcuLi9hcGkvQ2FsZW5kYXJFdmVudERldGFpbEFQSSc7XG5pbXBvcnQge0NhbGVuZGFyRXZlbnREZWxldGVBUEl9IGZyb20gJy4uL2FwaS9DYWxlbmRhckV2ZW50RGVsZXRlQVBJJztcbmltcG9ydCB7Q2FsZW5kYXJFdmVudEFkZEFQSX0gZnJvbSAnLi4vYXBpL0NhbGVuZGFyRXZlbnRBZGRBUEknO1xuaW1wb3J0IHtDYWxlbmRhckV2ZW50VXBkYXRlQVBJfSBmcm9tICcuLi9hcGkvQ2FsZW5kYXJFdmVudFVwZGF0ZUFQSSc7XG5pbXBvcnQge1Byb2ZpbGVDb2RlU2VydmljZX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge1ZhbGlkYXRpb25SZXN1bHR9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtkaWZmZXJlbmNlSW5NaW51dGVzLCBpc1NhbWVEYXl9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzcGF0Y2g6IEFQSURpc3BhdGNoLFxuICAgICAgICAgICAgICBwcml2YXRlIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIEFQSUZhY3Rvcnk6IEFQSUZhY3RvcnksXG4pIHtcbiAgICAvL3JlZ2lzdGVyIGFwaVxuICB9XG5cbiAgZ2V0Q2FsZW5kYXJFdmVudExpc3Qoc3RhcnQ6IERhdGUsIGVuZDogRGF0ZSwga2V5OnN0cmluZyk6IE9ic2VydmFibGU8QXJyYXk8Q2FsZW5kYXJFdmVudERldGFpbD4+IHtcblxuICAgIGNvbnNvbGUuZGVidWcoJ2NhbGVuZGFyLXNlcnZpY2UtZ2V0Q2FsZW5kYXJFdmVudExpc3QnLHN0YXJ0LGVuZCxrZXkpO1xuXG4gICAgbGV0IGNhbGVuZGFyRXZlbnRMaXN0QVBJOiBDYWxlbmRhckV2ZW50TGlzdEFQSSA9IDxDYWxlbmRhckV2ZW50TGlzdEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDYWxlbmRhckV2ZW50TGlzdCcpO1xuICAgIGNhbGVuZGFyRXZlbnRMaXN0QVBJLnN0YXJ0VGltZSA9IHN0YXJ0O1xuICAgIGNhbGVuZGFyRXZlbnRMaXN0QVBJLmVuZFRpbWUgPSBlbmQ7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoLmRpc3BhdGNoKGNhbGVuZGFyRXZlbnRMaXN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY2FsZW5kYXItc2VydmljZS1nZXRDQWxlbmRhckV2ZW50TGlzdCByZXNwb25zZScsZGF0YSk7XG5cbiAgICAgICAgbGV0IHJldHVybkxpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+ID0gW107XG4gICAgICAgIGxldCBjYWxlbmRhckV2ZW50TGlzdCA9IGRhdGFbJ0JvZHknXTtcbiAgICAgICAgaWYoY2FsZW5kYXJFdmVudExpc3QpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGVuZGFyRXZlbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQganNvbiA9IGNhbGVuZGFyRXZlbnRMaXN0W2ldO1xuICAgICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IENhbGVuZGFyRXZlbnREZXRhaWwoanNvbi5DbGllbnRJRCxcbiAgICAgICAgICAgICAganNvbi5DYWxlbmRhcklELFxuICAgICAgICAgICAgICBqc29uLkN1c3RvbWVyQ2xpZW50SUQsXG4gICAgICAgICAgICAgIGpzb24uVGl0bGUsXG4gICAgICAgICAgICAgIGpzb24uTG9jYXRpb24sXG4gICAgICAgICAgICAgIGpzb24uQ2FsZW5kYXJUeXBlLFxuICAgICAgICAgICAgICBqc29uLklzQWxsRGF5LFxuICAgICAgICAgICAgICBuZXcgRGF0ZShqc29uLlN0YXJ0VGltZSksXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGpzb24uRW5kVGltZSksXG4gICAgICAgICAgICAgIGpzb24uUmVtYXJrLFxuICAgICAgICAgICAgICBqc29uLklzQWxlcnQsXG4gICAgICAgICAgICAgIGpzb24uQWxlcnQxLFxuICAgICAgICAgICAgICBqc29uLkFsZXJ0MixcbiAgICAgICAgICAgICAganNvbi5BbGVydDMsXG4gICAgICAgICAgICAgIHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldEFyZ3VtZW50c0J5Q29kZSgnQ2FsZW5kYXJfVHlwZScsanNvbi5DYWxlbmRhclR5cGUpKTtcbiAgICAgICAgICAgIHJldHVybkxpc3QucHVzaChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybkxpc3QgPSB0aGlzLnNvcnRDYWxlbmRhckV2ZW50TGlzdChyZXR1cm5MaXN0KTtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJldHVybkxpc3QpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChbXSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDYWxlbmRhckV2ZW50RGV0YWlsKGNsaWVudElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhbGVuZGFyRXZlbnREZXRhaWw+IHtcbiAgICBsZXQgY2FsZW5kYXJFdmVudERldGFpbEFQSTogQ2FsZW5kYXJFdmVudERldGFpbEFQSSA9IDxDYWxlbmRhckV2ZW50RGV0YWlsQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldENhbGVuZGFyRXZlbnREZXRhaWwnKTtcbiAgICBjYWxlbmRhckV2ZW50RGV0YWlsQVBJLkNsaWVudElEID0gY2xpZW50SUQ7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcik9PntcbiAgICAgIHRoaXMuZGlzcGF0Y2guZGlzcGF0Y2goY2FsZW5kYXJFdmVudERldGFpbEFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGxldCBkZXRhaWw7XG4gICAgICAgIGxldCBldmVudERldGFpbCAgPSBkYXRhWydCb2R5J107XG4gICAgICAgIGV2ZW50RGV0YWlsID0gZXZlbnREZXRhaWxbMF07XG4gICAgICAgIGRldGFpbCA9IG5ldyBDYWxlbmRhckV2ZW50RGV0YWlsKGV2ZW50RGV0YWlsLkNsaWVudElELGV2ZW50RGV0YWlsLkNhbGVuZGFySUQsZXZlbnREZXRhaWwuQ3VzdG9tZXJDbGllbnRJRCxldmVudERldGFpbC5UaXRsZSxldmVudERldGFpbC5Mb2NhdGlvbixldmVudERldGFpbC5DYWxlbmRhclR5cGUsZXZlbnREZXRhaWwuSXNBbGxEYXksbmV3IERhdGUoZXZlbnREZXRhaWwuU3RhcnRUaW1lKSxuZXcgRGF0ZShldmVudERldGFpbC5FbmRUaW1lKSxldmVudERldGFpbC5Jc0FsZXJ0LGV2ZW50RGV0YWlsLkFsZXJ0MSwgZXZlbnREZXRhaWwuQWxlcnQyLCBldmVudERldGFpbC5BbGVydDMsZXZlbnREZXRhaWwuUmVtYXJrLHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldEFyZ3VtZW50c0J5Q29kZSgnQ2FsZW5kYXJfVHlwZScsZXZlbnREZXRhaWwuQ2FsZW5kYXJUeXBlKSk7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZGV0YWlsKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlQ2FsZW5kYXJFdmVudChjbGllbnRJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+ICB7XG4gICAgbGV0IGNhbGVuZGFyRXZlbnREZWxldGVBUEk6ICBDYWxlbmRhckV2ZW50RGVsZXRlQVBJID0gPENhbGVuZGFyRXZlbnREZWxldGVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZGVsZXRlQ2FsZW5kYXJFdmVudCcpO1xuICAgIGNhbGVuZGFyRXZlbnREZWxldGVBUEkuY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoLmRpc3BhdGNoKGNhbGVuZGFyRXZlbnREZWxldGVBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0hlYWRlciddKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2FsZW5kYXJFdmVudChldmVudDogQ2FsZW5kYXJFdmVudERldGFpbCk6IE9ic2VydmFibGU8YW55PiAge1xuICAgIGV2ZW50ID0gdGhpcy5hZGp1c3RBbGVydChldmVudCk7XG4gICAgbGV0IGNhbGVuZGFyRXZlbnRBZGRBUEk6ICBDYWxlbmRhckV2ZW50QWRkQVBJID0gPENhbGVuZGFyRXZlbnRBZGRBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnYWRkQ2FsZW5kYXJFdmVudCcpO1xuICAgIGNhbGVuZGFyRXZlbnRBZGRBUEkuc2V0Q2FsZW5kYXJFdmVudChldmVudCk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaC5kaXNwYXRjaChjYWxlbmRhckV2ZW50QWRkQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydIZWFkZXInXSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNhbGVuZGFyRXZlbnQoY2xpZW50SUQ6IHN0cmluZyxldmVudDogQ2FsZW5kYXJFdmVudERldGFpbCk6IE9ic2VydmFibGU8YW55PiAge1xuICAgIGV2ZW50ID0gdGhpcy5hZGp1c3RBbGVydChldmVudCk7XG4gICAgbGV0IGNhbGVuZGFyRXZlbnRVcGRhdGVBUEk6ICBDYWxlbmRhckV2ZW50VXBkYXRlQVBJID0gPENhbGVuZGFyRXZlbnRVcGRhdGVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgndXBkYXRlQ2FsZW5kYXJFdmVudCcpO1xuICAgIGNhbGVuZGFyRXZlbnRVcGRhdGVBUEkuQ2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICBjYWxlbmRhckV2ZW50VXBkYXRlQVBJLnNldENhbGVuZGFyRXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2guZGlzcGF0Y2goY2FsZW5kYXJFdmVudFVwZGF0ZUFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVsnSGVhZGVyJ10pO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRqdXN0QWxlcnQoZXZlbnQ6IENhbGVuZGFyRXZlbnREZXRhaWwpOiBDYWxlbmRhckV2ZW50RGV0YWlsIHtcblxuICAgIGlmKGV2ZW50LmFsZXJ0MSA9PSAnRGVmYXVsdCcpIGV2ZW50LmFsZXJ0MSA9ICcnO1xuICAgIGlmKGV2ZW50LmFsZXJ0MiA9PSAnRGVmYXVsdCcpIGV2ZW50LmFsZXJ0MiA9ICcnO1xuXG4gICAgLy93aGVuIGFsZXJ0MSAmIGFsZXJ0MiBoYXZlIGRhdGEgYW5kIG5vdCBlbXB0eVxuICAgIGlmKGV2ZW50LmlzQWxlcnQgJiYgU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShldmVudC5hbGVydDEpICYmIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoZXZlbnQuYWxlcnQyKSkge1xuICAgICAgaWYoZXZlbnQuYWxsRGF5KSB7IC8vIHNvcnQgYWxlcnQgaWYgYWxsRGF5XG4gICAgICAgIGlmKEpTT04ucGFyc2UodGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0QXJndW1lbnRzQnlDb2RlKCdDYWxlbmRhcl9SZW1pbmRUaW1lJyxldmVudC5hbGVydDEpKS5kYXkgPiBKU09OLnBhcnNlKHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldEFyZ3VtZW50c0J5Q29kZSgnQ2FsZW5kYXJfUmVtaW5kVGltZScsZXZlbnQuYWxlcnQyKSkuZGF5KSB7XG4gICAgICAgICAgbGV0IHRlbXAgPSBldmVudC5hbGVydDEgO1xuICAgICAgICAgIGV2ZW50LmFsZXJ0MSA9IGV2ZW50LmFsZXJ0MjtcbiAgICAgICAgICBldmVudC5hbGVydDIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAvLyBzb3J0IGlmIG5vdCBhbGxEYXlcbiAgICAgICAgaWYoSlNPTi5wYXJzZSh0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRBcmd1bWVudHNCeUNvZGUoJ0NhbGVuZGFyX1JlbWluZFRpbWUnLGV2ZW50LmFsZXJ0MSkpLm1pbiA+IEpTT04ucGFyc2UodGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0QXJndW1lbnRzQnlDb2RlKCdDYWxlbmRhcl9SZW1pbmRUaW1lJyxldmVudC5hbGVydDIpKS5taW4pIHtcbiAgICAgICAgICBsZXQgdGVtcCA9IGV2ZW50LmFsZXJ0MSA7XG4gICAgICAgICAgZXZlbnQuYWxlcnQxID0gZXZlbnQuYWxlcnQyO1xuICAgICAgICAgIGV2ZW50LmFsZXJ0MiA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZighZXZlbnQuaXNBbGVydCkge1xuICAgICAgZXZlbnQuYWxlcnQxID0gJyc7XG4gICAgICBldmVudC5hbGVydDIgPSAnJztcbiAgICAgIGV2ZW50LmFsZXJ0MyA9ICcnO1xuICAgIH1cbiAgICBldmVudC5jb2xvciA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldEFyZ3VtZW50c0J5Q29kZSgnQ2FsZW5kYXJfVHlwZScsZXZlbnQuYWN0aXZpdHkpOyAvLyBnZXQgYWN0aXZpdHkgY29sb3JcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICBjYWxlbmRhclZhbGlkYXRpb24oZGF0YSk6IFZhbGlkYXRpb25SZXN1bHQge1xuICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0ID0gbmV3IFZhbGlkYXRpb25SZXN1bHQoKTtcbiAgICBpZiAoZGF0YS50aXRsZSA9PSAnJylcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ3RpdGxlJywgJ3JlcXVpcmVkJyk7XG4gICAgaWYgKGRhdGEudGl0bGUubGVuZ3RoID4gNjApIC8vdGl0bGUgbGVuZ3RoXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCd0aXRsZScsICdtYXhMZW5ndGgnKTtcbiAgICBpZiAoZGF0YS5sb2NhdGlvbiA9PSAnJylcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2xvY2F0aW9uJywgJ3JlcXVpcmVkJyk7XG4gICAgaWYgKGRhdGEubG9jYXRpb24ubGVuZ3RoID4gMTAwKSAvL3RpdGxlIGxlbmd0aFxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnbG9jYXRpb24nLCAnbWF4TGVuZ3RoJyk7XG4gICAgaWYgKGRhdGEuYWN0aXZpdHkgPT0gJ0RlZmF1bHQnIHx8IGRhdGEuYWN0aXZpdHkgPT0gJycpIC8vIGFjdGl2aXR5IHZhbGlkYXRlXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdhY3Rpdml0eScsICdyZXF1aXJlZCcpO1xuICAgIGlmIChkYXRhLmlzQWxlcnQgPT0gdHJ1ZSAmJiAoZGF0YS5hbGVydDEgPT0gJ0RlZmF1bHQnKSAmJiAoZGF0YS5hbGVydDIgPT0gJ0RlZmF1bHQnKSlcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2FsZXJ0MScsICdyZXF1aXJlZCcpO1xuICAgIGlmIChkYXRhLmlzQWxlcnQgPT0gdHJ1ZSAmJiAoZGF0YS5hbGVydDEgPT0gZGF0YS5hbGVydDIpICYmIGRhdGEuYWxlcnQxICE9ICdEZWZhdWx0JylcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2FsZXJ0MicsICdzYW1lQWxlcnQnKTtcbiAgICBpZiAoZGlmZmVyZW5jZUluTWludXRlcyhkYXRhLmVuZCxkYXRhLnN0YXJ0KSA8IDE1ICYmIGRpZmZlcmVuY2VJbk1pbnV0ZXMoZGF0YS5lbmQsZGF0YS5zdGFydCkgPj0gMCAmJiBkYXRhLmFsbERheSAhPSB0cnVlKSB7XG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCd0aW1lJywgJ21pblRpbWUnKTtcbiAgICB9IGVsc2UgaWYoZGlmZmVyZW5jZUluTWludXRlcyhkYXRhLmVuZCxkYXRhLnN0YXJ0KSA8IDApIHtcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ3RpbWUnLCAnZXJyb3JUaW1lJyk7XG4gICAgfVxuICAgIGlmIChkYXRhLnJlbWFyay5sZW5ndGggPiA1MDApXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdyZW1hcmsnLCAnbWF4TGVuZ3RoJyk7XG4gICAgcmV0dXJuIHZhbGlkYXRpb25SZXN1bHQ7XG4gIH1cblxuICBzb3J0Q2FsZW5kYXJFdmVudExpc3QoY2FsZW5kYXJFdmVudExpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+KTogQXJyYXk8Q2FsZW5kYXJFdmVudERldGFpbD4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsZW5kYXJFdmVudExpc3QubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBjYWxlbmRhckV2ZW50TGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICBpZihjYWxlbmRhckV2ZW50TGlzdFtqXS5hbGxEYXkgJiYgIWNhbGVuZGFyRXZlbnRMaXN0W2ldLmFsbERheSkge1xuICAgICAgICAgIGxldCB0ZW1wID0gY2FsZW5kYXJFdmVudExpc3RbaV07XG4gICAgICAgICAgY2FsZW5kYXJFdmVudExpc3RbaV0gPSBjYWxlbmRhckV2ZW50TGlzdFtqXTtcbiAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtqXSA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxlbmRhckV2ZW50TGlzdC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGNhbGVuZGFyRXZlbnRMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmKGNhbGVuZGFyRXZlbnRMaXN0W2pdLmFsbERheSA9PSBjYWxlbmRhckV2ZW50TGlzdFtpXS5hbGxEYXkpIHtcbiAgICAgICAgICBpZihjYWxlbmRhckV2ZW50TGlzdFtpXS5hbGxEYXkpIHtcbiAgICAgICAgICAgIGlmKGNhbGVuZGFyRXZlbnRMaXN0W2pdLnN0YXJ0IDwgY2FsZW5kYXJFdmVudExpc3RbaV0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgbGV0IHRlbXAgPSBjYWxlbmRhckV2ZW50TGlzdFtpXTtcbiAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudExpc3RbaV0gPSBjYWxlbmRhckV2ZW50TGlzdFtqXTtcbiAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudExpc3Rbal0gPSB0ZW1wO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGlzU2FtZURheShjYWxlbmRhckV2ZW50TGlzdFtqXS5zdGFydCwgY2FsZW5kYXJFdmVudExpc3RbaV0uc3RhcnQpKSB7XG4gICAgICAgICAgICAgIGlmIChjYWxlbmRhckV2ZW50TGlzdFtqXS5lbmQgPiBjYWxlbmRhckV2ZW50TGlzdFtpXS5lbmQpe1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gY2FsZW5kYXJFdmVudExpc3RbaV07XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudExpc3RbaV0gPSBjYWxlbmRhckV2ZW50TGlzdFtqXTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtqXSA9IHRlbXA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoY2FsZW5kYXJFdmVudExpc3Rbal0uc3RhcnQgPCBjYWxlbmRhckV2ZW50TGlzdFtpXS5zdGFydCkge1xuICAgICAgICAgICAgICBsZXQgdGVtcCA9IGNhbGVuZGFyRXZlbnRMaXN0W2ldO1xuICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtpXSA9IGNhbGVuZGFyRXZlbnRMaXN0W2pdO1xuICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtqXSA9IHRlbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYWxlbmRhckV2ZW50TGlzdFxuICB9XG59XG4iXX0=