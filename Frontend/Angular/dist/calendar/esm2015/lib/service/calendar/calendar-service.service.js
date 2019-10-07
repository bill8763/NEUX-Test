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
                        let event = new CalendarEventDetail(json.ClientID, json.CalendarID, json.Title, json.Location, json.CalendarType, json.IsAllDay, new Date(json.StartTime), new Date(json.EndTime), json.Remark, json.IsAlert, json.Alert1, json.Alert2, json.Alert3, this.profileCodeService.getArgumentsByCode('Calendar_Type', json.CalendarType));
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
                detail = new CalendarEventDetail(eventDetail.ClientID, eventDetail.CalendarID, eventDetail.Title, eventDetail.Location, eventDetail.CalendarType, eventDetail.IsAllDay, new Date(eventDetail.StartTime), new Date(eventDetail.EndTime), eventDetail.IsAlert, eventDetail.Alert1, eventDetail.Alert2, eventDetail.Alert3, eventDetail.Remark, this.profileCodeService.getArgumentsByCode('Calendar_Type', eventDetail.CalendarType));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9jYWxlbmRhci9jYWxlbmRhci1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBS2hFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFLL0MsTUFBTTs7Ozs7O0lBQ0osWUFBb0IsUUFBcUIsRUFDckIsa0JBQXNDLEVBQ3RDLFVBQXNCO1FBRnRCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hDLGNBQWM7SUFDaEIsQ0FBQzs7Ozs7OztJQUVELG9CQUFvQixDQUFDLEtBQVcsRUFBRSxHQUFTLEVBQUUsR0FBVTtRQUVyRCxPQUFPLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7O1lBRWpFLG9CQUFvQixHQUF5QixtQkFBc0IsSUFBSSxD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LGtCQUFrQjtZQVJqQixVQUFVOzs7Ozs7OztJQWlCTCxtQ0FBNkI7Ozs7O0lBQzdCLDZDQUE4Qzs7Ozs7SUFDOUMscUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEFQSUZhY3RvcnkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnRMaXN0QVBJIH0gZnJvbSAnLi4vLi4vYXBpL0NhbGVuZGFyRXZlbnRMaXN0QVBJJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Q2FsZW5kYXJFdmVudERldGFpbH0gZnJvbSAnLi9tb2RlbC9DYWxlbmRhckV2ZW50RGV0YWlsJztcbmltcG9ydCB7Q2FsZW5kYXJFdmVudERldGFpbEFQSX0gZnJvbSAnLi4vLi4vYXBpL0NhbGVuZGFyRXZlbnREZXRhaWxBUEknO1xuaW1wb3J0IHtDYWxlbmRhckV2ZW50RGVsZXRlQVBJfSBmcm9tICcuLi8uLi9hcGkvQ2FsZW5kYXJFdmVudERlbGV0ZUFQSSc7XG5pbXBvcnQge0NhbGVuZGFyRXZlbnRBZGRBUEl9IGZyb20gJy4uLy4uL2FwaS9DYWxlbmRhckV2ZW50QWRkQVBJJztcbmltcG9ydCB7Q2FsZW5kYXJFdmVudFVwZGF0ZUFQSX0gZnJvbSAnLi4vLi4vYXBpL0NhbGVuZGFyRXZlbnRVcGRhdGVBUEknO1xuaW1wb3J0IHtQcm9maWxlQ29kZVNlcnZpY2V9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtWYWxpZGF0aW9uUmVzdWx0fSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7ZGlmZmVyZW5jZUluTWludXRlcywgaXNTYW1lRGF5fSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc3BhdGNoOiBBUElEaXNwYXRjaCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBBUElGYWN0b3J5OiBBUElGYWN0b3J5KSB7XG4gICAgLy9yZWdpc3RlciBhcGlcbiAgfVxuXG4gIGdldENhbGVuZGFyRXZlbnRMaXN0KHN0YXJ0OiBEYXRlLCBlbmQ6IERhdGUsIGtleTpzdHJpbmcpOiBPYnNlcnZhYmxlPEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+PiB7XG5cbiAgICBjb25zb2xlLmRlYnVnKCdjYWxlbmRhci1zZXJ2aWNlLWdldENhbGVuZGFyRXZlbnRMaXN0JyxzdGFydCxlbmQsa2V5KTtcblxuICAgIGxldCBjYWxlbmRhckV2ZW50TGlzdEFQSTogQ2FsZW5kYXJFdmVudExpc3RBUEkgPSA8Q2FsZW5kYXJFdmVudExpc3RBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q2FsZW5kYXJFdmVudExpc3QnKTtcbiAgICBjYWxlbmRhckV2ZW50TGlzdEFQSS5zdGFydFRpbWUgPSBzdGFydDtcbiAgICBjYWxlbmRhckV2ZW50TGlzdEFQSS5lbmRUaW1lID0gZW5kO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaC5kaXNwYXRjaChjYWxlbmRhckV2ZW50TGlzdEFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2NhbGVuZGFyLXNlcnZpY2UtZ2V0Q0FsZW5kYXJFdmVudExpc3QgcmVzcG9uc2UnLGRhdGEpO1xuXG4gICAgICAgIGxldCByZXR1cm5MaXN0OiBBcnJheTxDYWxlbmRhckV2ZW50RGV0YWlsPiA9IFtdO1xuICAgICAgICBsZXQgY2FsZW5kYXJFdmVudExpc3QgPSBkYXRhWydCb2R5J107XG4gICAgICAgIGlmKGNhbGVuZGFyRXZlbnRMaXN0KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxlbmRhckV2ZW50TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGpzb24gPSBjYWxlbmRhckV2ZW50TGlzdFtpXTtcbiAgICAgICAgICAgIGxldCBldmVudCA9IG5ldyBDYWxlbmRhckV2ZW50RGV0YWlsKGpzb24uQ2xpZW50SUQsXG4gICAgICAgICAgICAgIGpzb24uQ2FsZW5kYXJJRCxcbiAgICAgICAgICAgICAganNvbi5UaXRsZSxcbiAgICAgICAgICAgICAganNvbi5Mb2NhdGlvbixcbiAgICAgICAgICAgICAganNvbi5DYWxlbmRhclR5cGUsXG4gICAgICAgICAgICAgIGpzb24uSXNBbGxEYXksXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGpzb24uU3RhcnRUaW1lKSxcbiAgICAgICAgICAgICAgbmV3IERhdGUoanNvbi5FbmRUaW1lKSxcbiAgICAgICAgICAgICAganNvbi5SZW1hcmssXG4gICAgICAgICAgICAgIGpzb24uSXNBbGVydCxcbiAgICAgICAgICAgICAganNvbi5BbGVydDEsXG4gICAgICAgICAgICAgIGpzb24uQWxlcnQyLFxuICAgICAgICAgICAgICBqc29uLkFsZXJ0MyxcbiAgICAgICAgICAgICAgdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0QXJndW1lbnRzQnlDb2RlKCdDYWxlbmRhcl9UeXBlJyxqc29uLkNhbGVuZGFyVHlwZSkpO1xuICAgICAgICAgICAgcmV0dXJuTGlzdC5wdXNoKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuTGlzdCA9IHRoaXMuc29ydENhbGVuZGFyRXZlbnRMaXN0KHJldHVybkxpc3QpO1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmV0dXJuTGlzdCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KFtdKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENhbGVuZGFyRXZlbnREZXRhaWwoY2xpZW50SUQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FsZW5kYXJFdmVudERldGFpbD4ge1xuICAgIGxldCBjYWxlbmRhckV2ZW50RGV0YWlsQVBJOiBDYWxlbmRhckV2ZW50RGV0YWlsQVBJID0gPENhbGVuZGFyRXZlbnREZXRhaWxBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q2FsZW5kYXJFdmVudERldGFpbCcpO1xuICAgIGNhbGVuZGFyRXZlbnREZXRhaWxBUEkuQ2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKT0+e1xuICAgICAgdGhpcy5kaXNwYXRjaC5kaXNwYXRjaChjYWxlbmRhckV2ZW50RGV0YWlsQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IGRldGFpbDtcbiAgICAgICAgbGV0IGV2ZW50RGV0YWlsICA9IGRhdGFbJ0JvZHknXTtcbiAgICAgICAgZXZlbnREZXRhaWwgPSBldmVudERldGFpbFswXTtcbiAgICAgICAgZGV0YWlsID0gbmV3IENhbGVuZGFyRXZlbnREZXRhaWwoZXZlbnREZXRhaWwuQ2xpZW50SUQsZXZlbnREZXRhaWwuQ2FsZW5kYXJJRCxldmVudERldGFpbC5UaXRsZSxldmVudERldGFpbC5Mb2NhdGlvbixldmVudERldGFpbC5DYWxlbmRhclR5cGUsZXZlbnREZXRhaWwuSXNBbGxEYXksbmV3IERhdGUoZXZlbnREZXRhaWwuU3RhcnRUaW1lKSxuZXcgRGF0ZShldmVudERldGFpbC5FbmRUaW1lKSxldmVudERldGFpbC5Jc0FsZXJ0LGV2ZW50RGV0YWlsLkFsZXJ0MSwgZXZlbnREZXRhaWwuQWxlcnQyLCBldmVudERldGFpbC5BbGVydDMsZXZlbnREZXRhaWwuUmVtYXJrLHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldEFyZ3VtZW50c0J5Q29kZSgnQ2FsZW5kYXJfVHlwZScsZXZlbnREZXRhaWwuQ2FsZW5kYXJUeXBlKSk7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZGV0YWlsKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlQ2FsZW5kYXJFdmVudChjbGllbnRJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+ICB7XG4gICAgbGV0IGNhbGVuZGFyRXZlbnREZWxldGVBUEk6ICBDYWxlbmRhckV2ZW50RGVsZXRlQVBJID0gPENhbGVuZGFyRXZlbnREZWxldGVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZGVsZXRlQ2FsZW5kYXJFdmVudCcpO1xuICAgIGNhbGVuZGFyRXZlbnREZWxldGVBUEkuY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoLmRpc3BhdGNoKGNhbGVuZGFyRXZlbnREZWxldGVBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0hlYWRlciddKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2FsZW5kYXJFdmVudChldmVudDogQ2FsZW5kYXJFdmVudERldGFpbCk6IE9ic2VydmFibGU8YW55PiAge1xuICAgIGV2ZW50ID0gdGhpcy5hZGp1c3RBbGVydChldmVudCk7XG4gICAgbGV0IGNhbGVuZGFyRXZlbnRBZGRBUEk6ICBDYWxlbmRhckV2ZW50QWRkQVBJID0gPENhbGVuZGFyRXZlbnRBZGRBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnYWRkQ2FsZW5kYXJFdmVudCcpO1xuICAgIGNhbGVuZGFyRXZlbnRBZGRBUEkuc2V0Q2FsZW5kYXJFdmVudChldmVudCk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaC5kaXNwYXRjaChjYWxlbmRhckV2ZW50QWRkQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydIZWFkZXInXSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNhbGVuZGFyRXZlbnQoY2xpZW50SUQ6IHN0cmluZyxldmVudDogQ2FsZW5kYXJFdmVudERldGFpbCk6IE9ic2VydmFibGU8YW55PiAge1xuICAgIGV2ZW50ID0gdGhpcy5hZGp1c3RBbGVydChldmVudCk7XG4gICAgbGV0IGNhbGVuZGFyRXZlbnRVcGRhdGVBUEk6ICBDYWxlbmRhckV2ZW50VXBkYXRlQVBJID0gPENhbGVuZGFyRXZlbnRVcGRhdGVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgndXBkYXRlQ2FsZW5kYXJFdmVudCcpO1xuICAgIGNhbGVuZGFyRXZlbnRVcGRhdGVBUEkuQ2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICBjYWxlbmRhckV2ZW50VXBkYXRlQVBJLnNldENhbGVuZGFyRXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2guZGlzcGF0Y2goY2FsZW5kYXJFdmVudFVwZGF0ZUFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVsnSGVhZGVyJ10pO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRqdXN0QWxlcnQoZXZlbnQ6IENhbGVuZGFyRXZlbnREZXRhaWwpOiBDYWxlbmRhckV2ZW50RGV0YWlsIHtcblxuICAgIGlmKGV2ZW50LmFsZXJ0MSA9PSAnRGVmYXVsdCcpIGV2ZW50LmFsZXJ0MSA9ICcnO1xuICAgIGlmKGV2ZW50LmFsZXJ0MiA9PSAnRGVmYXVsdCcpIGV2ZW50LmFsZXJ0MiA9ICcnO1xuXG4gICAgLy93aGVuIGFsZXJ0MSAmIGFsZXJ0MiBoYXZlIGRhdGEgYW5kIG5vdCBlbXB0eVxuICAgIGlmKGV2ZW50LmlzQWxlcnQgJiYgU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShldmVudC5hbGVydDEpICYmIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoZXZlbnQuYWxlcnQyKSkge1xuICAgICAgaWYoZXZlbnQuYWxsRGF5KSB7IC8vIHNvcnQgYWxlcnQgaWYgYWxsRGF5XG4gICAgICAgIGlmKEpTT04ucGFyc2UodGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0QXJndW1lbnRzQnlDb2RlKCdDYWxlbmRhcl9SZW1pbmRUaW1lJyxldmVudC5hbGVydDEpKS5kYXkgPiBKU09OLnBhcnNlKHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldEFyZ3VtZW50c0J5Q29kZSgnQ2FsZW5kYXJfUmVtaW5kVGltZScsZXZlbnQuYWxlcnQyKSkuZGF5KSB7XG4gICAgICAgICAgbGV0IHRlbXAgPSBldmVudC5hbGVydDEgO1xuICAgICAgICAgIGV2ZW50LmFsZXJ0MSA9IGV2ZW50LmFsZXJ0MjtcbiAgICAgICAgICBldmVudC5hbGVydDIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAvLyBzb3J0IGlmIG5vdCBhbGxEYXlcbiAgICAgICAgaWYoSlNPTi5wYXJzZSh0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRBcmd1bWVudHNCeUNvZGUoJ0NhbGVuZGFyX1JlbWluZFRpbWUnLGV2ZW50LmFsZXJ0MSkpLm1pbiA+IEpTT04ucGFyc2UodGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0QXJndW1lbnRzQnlDb2RlKCdDYWxlbmRhcl9SZW1pbmRUaW1lJyxldmVudC5hbGVydDIpKS5taW4pIHtcbiAgICAgICAgICBsZXQgdGVtcCA9IGV2ZW50LmFsZXJ0MSA7XG4gICAgICAgICAgZXZlbnQuYWxlcnQxID0gZXZlbnQuYWxlcnQyO1xuICAgICAgICAgIGV2ZW50LmFsZXJ0MiA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZighZXZlbnQuaXNBbGVydCkge1xuICAgICAgZXZlbnQuYWxlcnQxID0gJyc7XG4gICAgICBldmVudC5hbGVydDIgPSAnJztcbiAgICAgIGV2ZW50LmFsZXJ0MyA9ICcnO1xuICAgIH1cbiAgICBldmVudC5jb2xvciA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldEFyZ3VtZW50c0J5Q29kZSgnQ2FsZW5kYXJfVHlwZScsZXZlbnQuYWN0aXZpdHkpOyAvLyBnZXQgYWN0aXZpdHkgY29sb3JcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICBjYWxlbmRhclZhbGlkYXRpb24oZGF0YSk6IFZhbGlkYXRpb25SZXN1bHQge1xuICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0ID0gbmV3IFZhbGlkYXRpb25SZXN1bHQoKTtcbiAgICBpZiAoZGF0YS50aXRsZSA9PSAnJylcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ3RpdGxlJywgJ3JlcXVpcmVkJyk7XG4gICAgaWYgKGRhdGEudGl0bGUubGVuZ3RoID4gNjApIC8vdGl0bGUgbGVuZ3RoXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCd0aXRsZScsICdtYXhMZW5ndGgnKTtcbiAgICBpZiAoZGF0YS5sb2NhdGlvbiA9PSAnJylcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2xvY2F0aW9uJywgJ3JlcXVpcmVkJyk7XG4gICAgaWYgKGRhdGEubG9jYXRpb24ubGVuZ3RoID4gMTAwKSAvL3RpdGxlIGxlbmd0aFxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnbG9jYXRpb24nLCAnbWF4TGVuZ3RoJyk7XG4gICAgaWYgKGRhdGEuYWN0aXZpdHkgPT0gJ0RlZmF1bHQnIHx8IGRhdGEuYWN0aXZpdHkgPT0gJycpIC8vIGFjdGl2aXR5IHZhbGlkYXRlXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdhY3Rpdml0eScsICdyZXF1aXJlZCcpO1xuICAgIGlmIChkYXRhLmlzQWxlcnQgPT0gdHJ1ZSAmJiAoZGF0YS5hbGVydDEgPT0gJ0RlZmF1bHQnKSAmJiAoZGF0YS5hbGVydDIgPT0gJ0RlZmF1bHQnKSlcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2FsZXJ0MScsICdyZXF1aXJlZCcpO1xuICAgIGlmIChkYXRhLmlzQWxlcnQgPT0gdHJ1ZSAmJiAoZGF0YS5hbGVydDEgPT0gZGF0YS5hbGVydDIpICYmIGRhdGEuYWxlcnQxICE9ICdEZWZhdWx0JylcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2FsZXJ0MicsICdzYW1lQWxlcnQnKTtcbiAgICBpZiAoZGlmZmVyZW5jZUluTWludXRlcyhkYXRhLmVuZCxkYXRhLnN0YXJ0KSA8IDE1ICYmIGRpZmZlcmVuY2VJbk1pbnV0ZXMoZGF0YS5lbmQsZGF0YS5zdGFydCkgPj0gMCAmJiBkYXRhLmFsbERheSAhPSB0cnVlKSB7XG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCd0aW1lJywgJ21pblRpbWUnKTtcbiAgICB9IGVsc2UgaWYoZGlmZmVyZW5jZUluTWludXRlcyhkYXRhLmVuZCxkYXRhLnN0YXJ0KSA8IDApIHtcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ3RpbWUnLCAnZXJyb3JUaW1lJyk7XG4gICAgfVxuICAgIGlmIChkYXRhLnJlbWFyay5sZW5ndGggPiA1MDApXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdyZW1hcmsnLCAnbWF4TGVuZ3RoJyk7XG4gICAgcmV0dXJuIHZhbGlkYXRpb25SZXN1bHQ7XG4gIH1cblxuICBzb3J0Q2FsZW5kYXJFdmVudExpc3QoY2FsZW5kYXJFdmVudExpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+KTogQXJyYXk8Q2FsZW5kYXJFdmVudERldGFpbD4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsZW5kYXJFdmVudExpc3QubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBjYWxlbmRhckV2ZW50TGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICBpZihjYWxlbmRhckV2ZW50TGlzdFtqXS5hbGxEYXkgJiYgIWNhbGVuZGFyRXZlbnRMaXN0W2ldLmFsbERheSkge1xuICAgICAgICAgIGxldCB0ZW1wID0gY2FsZW5kYXJFdmVudExpc3RbaV07XG4gICAgICAgICAgY2FsZW5kYXJFdmVudExpc3RbaV0gPSBjYWxlbmRhckV2ZW50TGlzdFtqXTtcbiAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtqXSA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxlbmRhckV2ZW50TGlzdC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGNhbGVuZGFyRXZlbnRMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmKGNhbGVuZGFyRXZlbnRMaXN0W2pdLmFsbERheSA9PSBjYWxlbmRhckV2ZW50TGlzdFtpXS5hbGxEYXkpIHtcbiAgICAgICAgICBpZihjYWxlbmRhckV2ZW50TGlzdFtpXS5hbGxEYXkpIHtcbiAgICAgICAgICAgIGlmKGNhbGVuZGFyRXZlbnRMaXN0W2pdLnN0YXJ0IDwgY2FsZW5kYXJFdmVudExpc3RbaV0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgbGV0IHRlbXAgPSBjYWxlbmRhckV2ZW50TGlzdFtpXTtcbiAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudExpc3RbaV0gPSBjYWxlbmRhckV2ZW50TGlzdFtqXTtcbiAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudExpc3Rbal0gPSB0ZW1wO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGlzU2FtZURheShjYWxlbmRhckV2ZW50TGlzdFtqXS5zdGFydCwgY2FsZW5kYXJFdmVudExpc3RbaV0uc3RhcnQpKSB7XG4gICAgICAgICAgICAgIGlmIChjYWxlbmRhckV2ZW50TGlzdFtqXS5lbmQgPiBjYWxlbmRhckV2ZW50TGlzdFtpXS5lbmQpe1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gY2FsZW5kYXJFdmVudExpc3RbaV07XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudExpc3RbaV0gPSBjYWxlbmRhckV2ZW50TGlzdFtqXTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtqXSA9IHRlbXA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoY2FsZW5kYXJFdmVudExpc3Rbal0uc3RhcnQgPCBjYWxlbmRhckV2ZW50TGlzdFtpXS5zdGFydCkge1xuICAgICAgICAgICAgICBsZXQgdGVtcCA9IGNhbGVuZGFyRXZlbnRMaXN0W2ldO1xuICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtpXSA9IGNhbGVuZGFyRXZlbnRMaXN0W2pdO1xuICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50TGlzdFtqXSA9IHRlbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYWxlbmRhckV2ZW50TGlzdFxuICB9XG59XG4iXX0=