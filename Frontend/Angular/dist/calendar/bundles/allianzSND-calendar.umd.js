(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('date-fns'), require('@angular/core'), require('@allianzSND/ui'), require('@angular/common'), require('@angular/forms'), require('@allianz/ngx-ndbx'), require('@allianz/ngx-ndbx/icon'), require('@allianz/ngx-ndbx/formfield'), require('@allianz/ngx-ndbx/datefield'), require('rxjs'), require('@allianzSND/core')) :
    typeof define === 'function' && define.amd ? define('@allianzSND/calendar', ['exports', 'date-fns', '@angular/core', '@allianzSND/ui', '@angular/common', '@angular/forms', '@allianz/ngx-ndbx', '@allianz/ngx-ndbx/icon', '@allianz/ngx-ndbx/formfield', '@allianz/ngx-ndbx/datefield', 'rxjs', '@allianzSND/core'], factory) :
    (factory((global.allianzSND = global.allianzSND || {}, global.allianzSND.calendar = {}),global.dateFns,global.ng.core,global.ui,global.ng.common,global.ng.forms,global.ngxNdbx,global.icon,global.formfield,global.datefield,global.rxjs,global.i1));
}(this, (function (exports,dateFns,i0,ui,common,forms,ngxNdbx,icon,formfield,datefield,rxjs,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarEventColor = /** @class */ (function () {
        function CalendarEventColor(primary, secondary) {
            this._primary = primary;
            this._secondary = secondary;
        }
        /**
         * @param {?} primary
         * @param {?} secondary
         * @return {?}
         */
        CalendarEventColor.prototype.setCalendarEventColor = /**
         * @param {?} primary
         * @param {?} secondary
         * @return {?}
         */
            function (primary, secondary) {
                this._primary = primary;
                this._secondary = secondary;
            };
        Object.defineProperty(CalendarEventColor.prototype, "primary", {
            get: /**
             * @return {?}
             */ function () {
                return this._primary;
            },
            set: /**
             * @param {?} primary
             * @return {?}
             */ function (primary) {
                this._primary = primary;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventColor.prototype, "secondary", {
            get: /**
             * @return {?}
             */ function () {
                return this._secondary;
            },
            set: /**
             * @param {?} secondary
             * @return {?}
             */ function (secondary) {
                this._secondary = secondary;
            },
            enumerable: true,
            configurable: true
        });
        return CalendarEventColor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            if (i1.StringUtils.isEmpty(this._activity))
                this._activity = null;
            if (i1.StringUtils.isEmpty(this._title))
                this._title = '';
            if (i1.StringUtils.isEmpty(this._location))
                this._location = '';
            if (i1.StringUtils.isEmpty(this._alert1))
                this._alert1 = '';
            if (i1.StringUtils.isEmpty(this._alert2))
                this._alert2 = null;
            if (i1.StringUtils.isEmpty(this._alert3))
                this._alert3 = '';
            if (i1.StringUtils.isEmpty(this._remark))
                this._remark = '';
            /** @type {?} */
            var eventColor = JSON.parse(color);
            if (eventColor != null)
                this._color = new CalendarEventColor(eventColor.color, eventColor.backgroundColor);
        }
        Object.defineProperty(CalendarEventDetail.prototype, "clientID", {
            get: /**
             * @return {?}
             */ function () {
                return this._clientID;
            },
            set: /**
             * @param {?} clientID
             * @return {?}
             */ function (clientID) {
                this._clientID = clientID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "calendarID", {
            get: /**
             * @return {?}
             */ function () {
                return this._calendarID;
            },
            set: /**
             * @param {?} calendarID
             * @return {?}
             */ function (calendarID) {
                this._calendarID = calendarID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "title", {
            get: /**
             * @return {?}
             */ function () {
                return this._title;
            },
            set: /**
             * @param {?} title
             * @return {?}
             */ function (title) {
                this._title = title;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "location", {
            get: /**
             * @return {?}
             */ function () {
                return this._location;
            },
            set: /**
             * @param {?} location
             * @return {?}
             */ function (location) {
                this._location = location;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "activity", {
            get: /**
             * @return {?}
             */ function () {
                return this._activity;
            },
            set: /**
             * @param {?} calendarType
             * @return {?}
             */ function (calendarType) {
                this._activity = calendarType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "allDay", {
            get: /**
             * @return {?}
             */ function () {
                return this._isAllDay;
            },
            set: /**
             * @param {?} isAllDay
             * @return {?}
             */ function (isAllDay) {
                this._isAllDay = isAllDay;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "start", {
            get: /**
             * @return {?}
             */ function () {
                return this._start;
            },
            set: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                this._start = date;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "end", {
            get: /**
             * @return {?}
             */ function () {
                return this._end;
            },
            set: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                this._end = date;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "isAlert", {
            get: /**
             * @return {?}
             */ function () {
                return this._isAlert;
            },
            set: /**
             * @param {?} isAlert
             * @return {?}
             */ function (isAlert) {
                this._isAlert = isAlert;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "alert1", {
            get: /**
             * @return {?}
             */ function () {
                return this._alert1;
            },
            set: /**
             * @param {?} alert1
             * @return {?}
             */ function (alert1) {
                this._alert1 = alert1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "alert2", {
            get: /**
             * @return {?}
             */ function () {
                return this._alert2;
            },
            set: /**
             * @param {?} alert2
             * @return {?}
             */ function (alert2) {
                this._alert2 = alert2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "alert3", {
            get: /**
             * @return {?}
             */ function () {
                return this._alert3;
            },
            set: /**
             * @param {?} alert3
             * @return {?}
             */ function (alert3) {
                this._alert3 = alert3;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "remark", {
            get: /**
             * @return {?}
             */ function () {
                return this._remark;
            },
            set: /**
             * @param {?} remark
             * @return {?}
             */ function (remark) {
                this._remark = remark;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "color", {
            get: /**
             * @return {?}
             */ function () {
                return this._color;
            },
            set: /**
             * @param {?} color
             * @return {?}
             */ function (color) {
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
             */ function () {
                return this._displayActivity;
            },
            set: /**
             * @param {?} displayActivity
             * @return {?}
             */ function (displayActivity) {
                this._displayActivity = displayActivity;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "displayAlert1", {
            get: /**
             * @return {?}
             */ function () {
                return this._displayAlert1;
            },
            set: /**
             * @param {?} displayAlert1
             * @return {?}
             */ function (displayAlert1) {
                this._displayAlert1 = displayAlert1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventDetail.prototype, "displayAlert2", {
            get: /**
             * @return {?}
             */ function () {
                return this._displayAlert2;
            },
            set: /**
             * @param {?} displayAlert2
             * @return {?}
             */ function (displayAlert2) {
                this._displayAlert2 = displayAlert2;
            },
            enumerable: true,
            configurable: true
        });
        return CalendarEventDetail;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                var calendarEventListAPI = ( /** @type {?} */(this.APIFactory.getAPI('getCalendarEventList')));
                calendarEventListAPI.startTime = start;
                calendarEventListAPI.endTime = end;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatch.dispatch(calendarEventListAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
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
                var calendarEventDetailAPI = ( /** @type {?} */(this.APIFactory.getAPI('getCalendarEventDetail')));
                calendarEventDetailAPI.ClientID = clientID;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatch.dispatch(calendarEventDetailAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
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
                var calendarEventDeleteAPI = ( /** @type {?} */(this.APIFactory.getAPI('deleteCalendarEvent')));
                calendarEventDeleteAPI.clientID = clientID;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatch.dispatch(calendarEventDeleteAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
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
                var calendarEventAddAPI = ( /** @type {?} */(this.APIFactory.getAPI('addCalendarEvent')));
                calendarEventAddAPI.setCalendarEvent(event);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatch.dispatch(calendarEventAddAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
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
                var calendarEventUpdateAPI = ( /** @type {?} */(this.APIFactory.getAPI('updateCalendarEvent')));
                calendarEventUpdateAPI.ClientID = clientID;
                calendarEventUpdateAPI.setCalendarEvent(event);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatch.dispatch(calendarEventUpdateAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
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
                if (event.isAlert && i1.StringUtils.isNotEmpty(event.alert1) && i1.StringUtils.isNotEmpty(event.alert2)) {
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
                var validationResult = new i1.ValidationResult();
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
                if (dateFns.differenceInMinutes(data.end, data.start) < 15 && dateFns.differenceInMinutes(data.end, data.start) >= 0 && data.allDay != true) {
                    validationResult.setErrorMap('time', 'minTime');
                }
                else if (dateFns.differenceInMinutes(data.end, data.start) < 0) {
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
                                else if (dateFns.isSameDay(calendarEventList[j].start, calendarEventList[i].start)) {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        CalendarService.ctorParameters = function () {
            return [
                { type: i1.APIDispatch },
                { type: i1.ProfileCodeService },
                { type: i1.APIFactory }
            ];
        };
        /** @nocollapse */ CalendarService.ngInjectableDef = i0.defineInjectable({ factory: function CalendarService_Factory() { return new CalendarService(i0.inject(i1.APIDispatch), i0.inject(i1.ProfileCodeService), i0.inject(i1.APIFactory)); }, token: CalendarService, providedIn: "root" });
        return CalendarService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarComponent = /** @class */ (function () {
        function CalendarComponent(changeDetector, elementRef, settingService, translateService, calendarService, profileCodeService) {
            this.changeDetector = changeDetector;
            this.elementRef = elementRef;
            this.settingService = settingService;
            this.translateService = translateService;
            this.calendarService = calendarService;
            this.profileCodeService = profileCodeService;
            //two-way binding
            this._parentHeight = 0;
            this.parentHeightChange = new i0.EventEmitter();
            this.YEAR = 'year';
            this.MONTH = 'month';
            this.WEEK = 'week';
            this.DAY = 'day';
            //calendar-ui config setting
            this.viewTypeIndex = 2; // 'month'
            this.viewType = this.MONTH; //
            this.viewDate = new Date(); //current date
            this.weekStartsOn = 1; // Monday
            //count content height
            this.calendarHeight = 0;
            //click calendar id
            this.clientID = '';
            this.translateMap = new Map();
            this.optionMap = new Map();
            this.storeStartDate = new Date();
            this.storeEndDate = new Date();
            this.calendarEventList = []; // eventList
            this.calendarEventListAfterFilter = []; // filter後 event
            this.viewDateCalendarEventList = [];
            // private calendarEventMap = new CalendarEventMap();
            this.activityTypeList = []; // DB中所有activityType
            this.alertTypeList = [];
            this.language = new i1.Language();
            this.currentFilterOptionList = [];
            // popup
            this.isExpandFilter = false;
            this.isExpandDetail = false;
            this.isExpandEdit = false;
            this.isDelete = false;
            this.isSave = false;
            this.isSaveClick = false;
            this.isCalendarDelete = false;
            this.isLoading = false;
            // translate
            this.dayTypesList = ['Cross_Day', 'All_Day'];
            this.weekdaysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            this.monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            this.noSchedule = 'No_Schedule';
            // info config
            //避免父層其他 position relative 引響 info
            this.outsideSpace = {
                top: 0,
                left: 0
            };
            //info content 左右最小padding
            this.paddindData = {
                top: 10,
                right: 10,
                bottom: 10,
                left: window.innerWidth > 1023 ? 170 : 10
            };
        }
        Object.defineProperty(CalendarComponent.prototype, "parentHeight", {
            get: /**
             * @return {?}
             */ function () {
                return this._parentHeight;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._parentHeight = val;
                if (this._parentHeight == 0) {
                    this._parentHeight = window.innerHeight;
                }
                this.parentHeightChange.emit(this._parentHeight);
                /** @type {?} */
                var _this = this;
                /** @type {?} */
                var titleBtnsBlock_ele = _this.titleBtnsBlock.nativeElement;
                /** @type {?} */
                var titleBtnsBlock_size = titleBtnsBlock_ele.getBoundingClientRect();
                _this.calendarHeight = _this._parentHeight
                    - titleBtnsBlock_size.height
                    - parseInt(window.getComputedStyle(titleBtnsBlock_ele).marginBottom);
                this.changeDetector.markForCheck();
                // console.warn('parentHeight', this._parentHeight);
                // console.warn('titleBtnsBlock_ele', titleBtnsBlock_size.height, parseInt(window.getComputedStyle(titleBtnsBlock_ele).marginBottom));
                // console.warn('calendarHeight', _this.calendarHeight);
            } // end set parentHeight
            ,
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        CalendarComponent.prototype.onResize = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.windowWidth = event.target.innerWidth;
                this.changeDetector.markForCheck();
            };
        /**
         * @return {?}
         */
        CalendarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this_1 = this;
                //init calendar type
                this.activityTypeList = this.profileCodeService.getCodeArray('Calendar_Type');
                this.alertTypeList = this.profileCodeService.getCodeArray('Calendar_RemindTime');
                this.optionMap.set('Calendar_Type', this.activityTypeList);
                this.optionMap.set('Calendar_RemindTime', this.alertTypeList);
                this.dayTypesList.forEach(( /**
                 * @param {?} dayType
                 * @return {?}
                 */function (dayType) {
                    _this_1.translateMap.set(dayType, _this_1.translateService.translate(dayType));
                }));
                this.weekdaysList.forEach(( /**
                 * @param {?} weekday
                 * @return {?}
                 */function (weekday) {
                    _this_1.translateMap.set(weekday, _this_1.translateService.translate(weekday));
                }));
                this.monthsList.forEach(( /**
                 * @param {?} month
                 * @return {?}
                 */function (month) {
                    _this_1.translateMap.set(month, _this_1.translateService.translate(month));
                }));
                this.translateMap.set(this.noSchedule, this.translateService.translate(this.noSchedule));
                this.windowWidth = window.innerWidth;
                //set component is detach
                // this.changeDetector.detach();
                //phone default view is day view
                if (this.windowWidth < 1024) {
                    this.viewTypeIndex = 0;
                    this.changeDetector.markForCheck();
                }
                //load default filter setting
                /** @type {?} */
                var defaultSettingVal = this.settingService.getSetting('CalendarFilterSetting').SettingVal;
                if (i1.StringUtils.isNotEmpty(defaultSettingVal)) {
                    /** @type {?} */
                    var calendarSetting_1 = JSON.parse(defaultSettingVal);
                    //default all checked
                    if (Object.keys(calendarSetting_1).length == 0) {
                        this.activityTypeList.forEach(( /**
                         * @param {?} codeItem
                         * @return {?}
                         */function (codeItem) {
                            codeItem.isCheck = true;
                        }));
                    }
                    else {
                        this.activityTypeList.forEach(( /**
                         * @param {?} codeItem
                         * @return {?}
                         */function (codeItem) {
                            /** @type {?} */
                            var code = codeItem.getCode();
                            /** @type {?} */
                            var isCheck = calendarSetting_1[code] == undefined ? false : calendarSetting_1[code];
                            codeItem.isCheck = isCheck;
                        }));
                    }
                }
                this.setCurrentFilterOption(undefined);
                // this.changeDetector.detectChanges();
                this.typeChange(this.viewTypeIndex);
                this.loadCalendarData();
            }; // end ngOnInit
        // end ngOnInit
        /**
         * @return {?}
         */
        CalendarComponent.prototype.ngAfterViewInit =
            // end ngOnInit
            /**
             * @return {?}
             */
            function () {
                this.typeChange(this.viewTypeIndex);
            };
        /**
         * @param {?} activeTabIndex
         * @return {?}
         */
        CalendarComponent.prototype.switchPadViewMode = /**
         * @param {?} activeTabIndex
         * @return {?}
         */
            function (activeTabIndex) {
                console.debug('switchPadViewMode');
                if (activeTabIndex != this.viewTypeIndex) {
                    //count start & end
                    this.typeChange(activeTabIndex);
                    this.changeDetector.detectChanges();
                    //load data & refresh
                    this.loadCalendarData();
                }
            };
        /**
         * @param {?} activeTabIndex
         * @return {?}
         */
        CalendarComponent.prototype.typeChange = /**
         * @param {?} activeTabIndex
         * @return {?}
         */
            function (activeTabIndex) {
                console.debug('calendar-component-typeChange', activeTabIndex, this.viewType);
                /** @type {?} */
                var start;
                /** @type {?} */
                var end;
                this.viewTypeIndex = activeTabIndex;
                switch (activeTabIndex) {
                    case 3:
                        this.viewType = this.YEAR;
                        this.calcuContentHeight();
                        break;
                    case 2:
                        this.viewType = this.MONTH;
                        this.calcuContentHeight();
                        start = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1, 0, 0, 0);
                        end = new Date(dateFns.getYear(dateFns.addMonths(this.viewDate, 1)), dateFns.getMonth(dateFns.addMonths(this.viewDate, 1)), 1, 0, 0, 0);
                        //count current time is have data
                        break;
                    case 1:
                        this.viewType = this.WEEK;
                        start = new Date(dateFns.getYear(dateFns.addDays(this.viewDate, (1 - dateFns.getDay(this.viewDate)))), dateFns.getMonth(dateFns.addDays(this.viewDate, (1 - dateFns.getDay(this.viewDate)))), dateFns.getDate(dateFns.addDays(this.viewDate, (1 - dateFns.getDay(this.viewDate)))), 0, 0, 0);
                        end = new Date(dateFns.getYear(dateFns.addDays(this.viewDate, (7 - dateFns.getDay(this.viewDate)))), dateFns.getMonth(dateFns.addDays(this.viewDate, (7 - dateFns.getDay(this.viewDate)))), dateFns.getDate(dateFns.addDays(this.viewDate, (7 - dateFns.getDay(this.viewDate)))), 0, 0, 0);
                        //count current time is have data
                        this.scrollToCurrentTime();
                        break;
                    case 0:
                        this.viewType = this.DAY;
                        start = new Date(dateFns.getYear(this.viewDate), dateFns.getMonth(this.viewDate), dateFns.getDate(this.viewDate), 0, 0, 0);
                        end = new Date(dateFns.getYear(dateFns.addDays(this.viewDate, 1)), dateFns.getMonth(dateFns.addDays(this.viewDate, 1)), dateFns.getDate(dateFns.addDays(this.viewDate, 1)), 0, 0, 0);
                        //count current time is have data
                        this.scrollToCurrentTime();
                        // console.warn('view type change: day');
                        break;
                } // end switch
                if (this.viewType != this.YEAR) {
                    if (i1.StringUtils.isNotEmpty(start) && i1.StringUtils.isNotEmpty(end)) {
                        this.storeStartDate = start;
                        this.storeEndDate = end;
                    }
                }
                console.debug('calendar-component-typeChange done');
            }; // end typeChange
        //phone header change mode
        // end typeChange
        //phone header change mode
        /**
         * @return {?}
         */
        CalendarComponent.prototype.mobileBackViewType =
            // end typeChange
            //phone header change mode
            /**
             * @return {?}
             */
            function () {
                console.debug('mobileBackViewType', this.viewType);
                switch (this.viewType) {
                    case this.MONTH:
                        this.typeChange(3); // back to year
                        break;
                    case this.WEEK:
                        this.typeChange(2); // back to month
                        break;
                    case this.DAY:
                        this.typeChange(2); // back to month
                        break;
                } // end switch
                //because change view type , so date range is change
                this.loadCalendarData();
            }; // end mobileChangeViewType
        // end mobileChangeViewType
        /**
         * @return {?}
         */
        CalendarComponent.prototype.clickToday =
            // end mobileChangeViewType
            /**
             * @return {?}
             */
            function () {
                this.viewDate = new Date();
                console.warn('clickToday', this.viewDate);
                this.changeDetector.detectChanges();
                //load data & refresh
                this.loadCalendarData();
                this.loadViewDateCalendarEventList();
            };
        //when calendar component any click change viewDate , will check pad/phone current viewType to change mode
        //when calendar component any click change viewDate , will check pad/phone current viewType to change mode
        /**
         * @param {?} viewDateChange
         * @return {?}
         */
        CalendarComponent.prototype.onViewDateChange =
            //when calendar component any click change viewDate , will check pad/phone current viewType to change mode
            /**
             * @param {?} viewDateChange
             * @return {?}
             */
            function (viewDateChange) {
                /** @type {?} */
                var val = new Date(viewDateChange.viewDate);
                /** @type {?} */
                var action = viewDateChange.action;
                console.debug('calendar-component update viewDate');
                if (dateFns.isSameMonth(this.viewDate, val) && this.isPad()) {
                    this.viewDate = val;
                }
                else {
                    this.viewDate = val;
                    //if year change date , alwasy switch month
                    if (this.viewType == this.YEAR && action == i1.ChangeAction.CLICK) {
                        this.typeChange(2);
                    }
                    else if (this.viewType == this.MONTH && !this.isPad() && action == i1.ChangeAction.CLICK) {
                        //if device is phone , click day switch to week when view type is month
                        this.typeChange(0);
                    }
                    else {
                        //else calculate new start & end
                        this.typeChange(this.viewTypeIndex);
                    }
                    //load data & refresh
                    this.loadViewDateCalendarEventList();
                    this.loadCalendarData();
                }
            };
        //fetch calendar between start & end range
        //fetch calendar between start & end range
        /**
         * @return {?}
         */
        CalendarComponent.prototype.loadCalendarData =
            //fetch calendar between start & end range
            /**
             * @return {?}
             */
            function () {
                var _this_1 = this;
                console.debug('loadCalendar data');
                if (this.viewType !== this.YEAR) { // year no need query data , only view
                    if (this.calendarEventListAfterFilter.length > 20)
                        this.calendarEventListAfterFilter = [];
                    if (i1.StringUtils.isNotEmpty(this.storeStartDate) && i1.StringUtils.isNotEmpty(this.storeEndDate)) {
                        this.calendarService.getCalendarEventList(this.storeStartDate, this.storeEndDate, '').subscribe(( /**
                         * @param {?} data
                         * @return {?}
                         */function (data) {
                            _this_1.calendarEventList = data;
                            _this_1.refreshCalendarEventList();
                        }));
                    }
                }
                console.debug('loadCalendar data done');
            };
        /**
         * @param {?} clientID
         * @return {?}
         */
        CalendarComponent.prototype.loadCalendarEventDetail = /**
         * @param {?} clientID
         * @return {?}
         */
            function (clientID) {
                var _this_1 = this;
                this.calendarService.getCalendarEventDetail(clientID).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    console.warn('getCalendarEventDetail', data);
                    _this_1.isLoading = false;
                    _this_1.calendarEventDetail = data;
                    _this_1.calendarEventDetail.displayActivity = _this_1.profileCodeService.convertCode2Text('Calendar_Type', _this_1.calendarEventDetail.activity);
                    _this_1.calendarEventDetail.displayAlert1 = _this_1.profileCodeService.convertCode2Text('Calendar_RemindTime', _this_1.calendarEventDetail.alert1);
                    _this_1.calendarEventDetail.displayAlert2 = _this_1.profileCodeService.convertCode2Text('Calendar_RemindTime', _this_1.calendarEventDetail.alert2);
                    _this_1.onToggleDetailModal(true);
                }));
            };
        /**
         * @private
         * @return {?}
         */
        CalendarComponent.prototype.loadViewDateCalendarEventList = /**
         * @private
         * @return {?}
         */
            function () {
                var _this_1 = this;
                /** @type {?} */
                var queryDate = new Date(dateFns.getYear(this.viewDate), dateFns.getMonth(this.viewDate), dateFns.getDate(this.viewDate), 0, 0, 0);
                this.calendarService.getCalendarEventList(queryDate, dateFns.subMinutes(dateFns.addDays(this.viewDate, 1), 1), '').subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    console.warn('loadViewDateCalendarEventList', data);
                    _this_1.viewDateCalendarEventList = data;
                }));
            };
        /**
         * @param {?} eventItem
         * @return {?}
         */
        CalendarComponent.prototype.onClickDetail = /**
         * @param {?} eventItem
         * @return {?}
         */
            function (eventItem) {
                this.clientID = eventItem.clientID;
                this.loadCalendarEventDetail(this.clientID);
                this.loadViewDateCalendarEventList();
                console.warn('clickDetail', this.clientID);
            }; // end clickDetail
        // end clickDetail
        /**
         * @return {?}
         */
        CalendarComponent.prototype.onClickDeleteCancel =
            // end clickDetail
            /**
             * @return {?}
             */
            function () {
            }; // end clickDeleteCancel
        // end clickDeleteCancel
        /**
         * @return {?}
         */
        CalendarComponent.prototype.onClickDeleteConfirm =
            // end clickDeleteCancel
            /**
             * @return {?}
             */
            function () {
                var _this_1 = this;
                this.calendarService.deleteCalendarEvent(this.clientID).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    if (data.status) {
                        _this_1.isDelete = data.status;
                    }
                }));
                this.loadCalendarData();
                if (this.isExpandDetail) { // close pop up
                    this.onToggleDetailModal(false);
                }
            }; // end clickDeleteConfirm
        // end clickDeleteConfirm
        /**
         * @return {?}
         */
        CalendarComponent.prototype.onClickAppointmentSave =
            // end clickDeleteConfirm
            /**
             * @return {?}
             */
            function () {
                this.isSaveClick = true;
            };
        /**
         * @param {?} calendarEventDetail
         * @return {?}
         */
        CalendarComponent.prototype.onSaveCalendarEvent = /**
         * @param {?} calendarEventDetail
         * @return {?}
         */
            function (calendarEventDetail) {
                var _this_1 = this;
                console.warn('saveCalendarEvent');
                if (calendarEventDetail) {
                    if (i1.StringUtils.isNotEmpty(this.clientID)) {
                        console.warn('updateCalendarEvent', calendarEventDetail);
                        this.calendarService.updateCalendarEvent(calendarEventDetail.clientID, calendarEventDetail).subscribe(( /**
                         * @param {?} data
                         * @return {?}
                         */function (data) {
                            if (data.status) {
                                _this_1.calendarEventDetail = calendarEventDetail;
                                _this_1.loadCalendarEventDetail(_this_1.clientID);
                                _this_1.isLoading = true;
                                _this_1.onToggleAppointmentModal(false);
                                _this_1.loadCalendarData();
                                _this_1.loadViewDateCalendarEventList();
                            }
                        }));
                    }
                    else {
                        this.calendarService.addCalendarEvent(calendarEventDetail).subscribe(( /**
                         * @param {?} data
                         * @return {?}
                         */function (data) {
                            if (data.status) {
                                _this_1.isSave = true;
                                console.warn('addCalendarEvent');
                                calendarEventDetail.clientID = data.clientID;
                                _this_1.calendarEventDetail = calendarEventDetail;
                                _this_1.onToggleAppointmentModal(false);
                                _this_1.loadCalendarData();
                            }
                        }));
                    }
                }
                this.isSaveClick = false;
            };
        /**
         * @private
         * @return {?}
         */
        CalendarComponent.prototype.isPad = /**
         * @private
         * @return {?}
         */
            function () {
                return this.windowWidth >= 1024;
            };
        /**
         * @return {?}
         */
        CalendarComponent.prototype.editEvent = /**
         * @return {?}
         */
            function () {
                this.onToggleAppointmentModal(true);
            };
        /**
         * @return {?}
         */
        CalendarComponent.prototype.addEvent = /**
         * @return {?}
         */
            function () {
                this.clientID = '';
                /** @type {?} */
                var currentTime;
                currentTime = new Date(dateFns.getYear(this.viewDate), dateFns.getMonth(this.viewDate), dateFns.getDate(this.viewDate), dateFns.getHours(new Date()), dateFns.getMinutes(new Date()));
                currentTime = dateFns.addMinutes(currentTime, (5 - dateFns.getMinutes(currentTime) % 5)); // adjust minutes to next 5 minutes
                currentTime = dateFns.addHours(currentTime, 1);
                this.calendarEventDetail = new CalendarEventDetail('', '', '', '', null, 'N', currentTime, dateFns.addHours(currentTime, 1), 'Y', '8', '', '', '', null);
                this.loadViewDateCalendarEventList();
                this.onToggleAppointmentModal(true);
            };
        // block which control filter
        // block which control filter
        /**
         * @param {?} alertTypeList
         * @return {?}
         */
        CalendarComponent.prototype.onActivityTypeListChange =
            // block which control filter
            /**
             * @param {?} alertTypeList
             * @return {?}
             */
            function (alertTypeList) {
                var _this_1 = this;
                this.alertTypeList = alertTypeList;
                this.currentFilterOptionList = [];
                /** @type {?} */
                var settingVal = {};
                this.activityTypeList.forEach(( /**
                 * @param {?} codeItem
                 * @return {?}
                 */function (codeItem) {
                    console.debug('activityType codeItem', codeItem);
                    if (settingVal != undefined)
                        settingVal[codeItem.getCode()] = codeItem.isCheck;
                    if (codeItem.isCheck) {
                        _this_1.currentFilterOptionList.push(codeItem.getCode());
                    }
                }));
                this.filterOptionChange(this.currentFilterOptionList);
                this.settingValueChange(settingVal);
            };
        /**
         * @param {?} settingValue
         * @return {?}
         */
        CalendarComponent.prototype.settingValueChange = /**
         * @param {?} settingValue
         * @return {?}
         */
            function (settingValue) {
                //update filter setting
                /** @type {?} */
                var settingObj = new i1.Setting(this.settingService.getSetting('CalendarFilterSetting').SettingID, this.settingService.getSetting('CalendarFilterSetting').SettingName, JSON.stringify(settingValue));
                this.settingService.updateSetting(settingObj).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    console.debug('calendar.component-update setting', data);
                }));
            };
        /**
         * @param {?} currentFilterOption
         * @return {?}
         */
        CalendarComponent.prototype.filterOptionChange = /**
         * @param {?} currentFilterOption
         * @return {?}
         */
            function (currentFilterOption) {
                console.warn('currentFilterOption', currentFilterOption);
                this.currentFilterOptionList = currentFilterOption;
                this.refreshCalendarEventList();
            };
        /**
         * @private
         * @param {?} settingVal
         * @return {?}
         */
        CalendarComponent.prototype.setCurrentFilterOption = /**
         * @private
         * @param {?} settingVal
         * @return {?}
         */
            function (settingVal) {
                var _this_1 = this;
                this.currentFilterOptionList = [];
                //find checked filter
                this.activityTypeList.forEach(( /**
                 * @param {?} codeItem
                 * @return {?}
                 */function (codeItem) {
                    console.debug('activityType codeItem', codeItem);
                    if (settingVal != undefined)
                        settingVal[codeItem.getCode()] = codeItem.isCheck;
                    if (codeItem.isCheck) {
                        _this_1.currentFilterOptionList.push(codeItem.getCode());
                    }
                }));
            };
        /**
         * @private
         * @return {?}
         */
        CalendarComponent.prototype.refreshCalendarEventList = /**
         * @private
         * @return {?}
         */
            function () {
                var _this_1 = this;
                this.calendarEventListAfterFilter = [];
                //filter event calendar type
                console.debug('start refreshCalendarEventList', this.calendarEventList.length);
                this.calendarEventListAfterFilter = this.calendarEventList.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return _this_1.currentFilterOptionList.indexOf(x.activity) > -1; }));
                console.debug('start refreshCalendarEventList done', this.calendarEventListAfterFilter.length);
                // this.changeDetector.detectChanges();
                //count height
                if (this.viewType == this.DAY || this.viewType == this.WEEK) {
                    this.scrollToCurrentTime();
                }
            };
        // end block
        // end block
        /**
         * @return {?}
         */
        CalendarComponent.prototype.scrollToCurrentTime =
            // end block
            /**
             * @return {?}
             */
            function () {
                var _this_1 = this;
                /** @type {?} */
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    var e_1, _a;
                    /** @type {?} */
                    var timeEventAll_ele = _this.elementRef.nativeElement.querySelectorAll('div.cal-time-events');
                    try {
                        // console.warn('_this.timeEventAll_ele', timeEventAll_ele.length, timeEventAll_ele);
                        for (var timeEventAll_ele_1 = __values(timeEventAll_ele), timeEventAll_ele_1_1 = timeEventAll_ele_1.next(); !timeEventAll_ele_1_1.done; timeEventAll_ele_1_1 = timeEventAll_ele_1.next()) {
                            var timeEvent_ele = timeEventAll_ele_1_1.value;
                            /** @type {?} */
                            var mobileDayHeader_ele = _this.elementRef.nativeElement.querySelector('div.cal-day-headers');
                            /** @type {?} */
                            var allDayEvent_ele = _this.elementRef.nativeElement.querySelector('div.cal-all-day-events');
                            /** @type {?} */
                            var allDayEvent_h = (allDayEvent_ele != null
                                ? allDayEvent_ele.getBoundingClientRect().height
                                : 0);
                            // console.warn('mobileDayHeader_ele', mobileDayHeader_ele);
                            if (mobileDayHeader_ele != null) {
                                // console.warn('if _this.calendarHeight', timeEvent_ele, _this.calendarHeight);
                                // console.warn('if mobileDayHeader_ele', mobileDayHeader_ele);
                                timeEvent_ele.style.maxHeight = (_this.calendarHeight
                                    - mobileDayHeader_ele.getBoundingClientRect().height
                                    - allDayEvent_h
                                    - parseInt(window.getComputedStyle(mobileDayHeader_ele).marginBottom)) + 'px';
                                // scroll to time
                                /** @type {?} */
                                var currentHour = dateFns.getHours(new Date());
                                console.log('current Hour:', dateFns.getHours(new Date()));
                                if (currentHour > 3)
                                    timeEvent_ele.scrollTop = Math.floor((currentHour - 3) / 2) * 80
                                        + (Math.floor((currentHour - 3) / 2)
                                            + (currentHour - 3) % 2) * 82;
                            }
                        } // end for: timeEventAll_ele
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (timeEventAll_ele_1_1 && !timeEventAll_ele_1_1.done && (_a = timeEventAll_ele_1.return))
                                _a.call(timeEventAll_ele_1);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                    _this_1.changeDetector.markForCheck();
                }), 200); // 會有ExpressionChangedAfterItHasBeenCheckedError 先 setTimeOut 解
            }; // end scrollToCurrentTime
        // end scrollToCurrentTime
        /**
         * @return {?}
         */
        CalendarComponent.prototype.calcuContentHeight =
            // end scrollToCurrentTime
            /**
             * @return {?}
             */
            function () {
                var _this_1 = this;
                console.debug('calcuContentHeight');
                /** @type {?} */
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    console.warn('calcuContentHeight', _this_1.calendarHeight);
                    // calculate year view height
                    /** @type {?} */
                    var year_ele = _this.elementRef.nativeElement.querySelector('.ui-calendar-year');
                    /** @type {?} */
                    var yearTag_ele = _this.elementRef.nativeElement.querySelector('app-ui-calendar-year');
                    if (year_ele != null && yearTag_ele != null) {
                        if (_this.windowWidth > 1023) {
                            yearTag_ele.style.minHeight = (_this.calendarHeight
                                - parseInt(window.getComputedStyle(year_ele).marginTop)) + 'px';
                            yearTag_ele.style.height = (_this.calendarHeight
                                - parseInt(window.getComputedStyle(year_ele).marginTop)) + 'px';
                        }
                        else {
                            year_ele.style.height = (_this.calendarHeight
                                - parseInt(window.getComputedStyle(year_ele).marginTop)) + 'px';
                        }
                    }
                    // calculate month view height
                    /** @type {?} */
                    var month_ele = _this.elementRef.nativeElement.querySelector('.cal-month-view');
                    if (month_ele != null && _this.windowWidth > 1023) {
                        month_ele.style.maxHeight = _this.calendarHeight + 'px';
                        month_ele.style.minHeight = _this.calendarHeight + 'px';
                    }
                    if (month_ele.style.maxHeight == '0px') {
                        console.warn('Here');
                        month_ele.style.maxHeight = 100 - 3 + 'vh';
                        month_ele.style.minHeight = 100 - 3 + 'vh';
                    }
                    _this_1.changeDetector.markForCheck();
                }), 100); // 會有ExpressionChangedAfterItHasBeenCheckedError 先 setTimeOut 解
            }; // end calcuContentHeight
        // function which control popup
        // end calcuContentHeight
        // function which control popup
        /**
         * @param {?} val
         * @return {?}
         */
        CalendarComponent.prototype.onToggleAppointmentModal =
            // end calcuContentHeight
            // function which control popup
            /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                var _this_1 = this;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this_1.isExpandEdit = val;
                    if (_this_1.isExpandFilter) {
                        _this_1.onCloseInfo();
                    }
                    _this_1.changeDetector.markForCheck();
                }), 0); // 會有ExpressionChangedAfterItHasBeenCheckedError 先 setTimeOut 解
            }; // end toggleAppointmentModal
        // end toggleAppointmentModal
        /**
         * @param {?} val
         * @return {?}
         */
        CalendarComponent.prototype.onToggleDetailModal =
            // end toggleAppointmentModal
            /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.isExpandDetail = val;
                if (this.isExpandFilter) {
                    this.onCloseInfo();
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        CalendarComponent.prototype.onToggleFilterModal = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                if (!this.isExpandFilter) {
                    this.onCloseInfo();
                }
            };
        /**
         * @param {?} dom
         * @return {?}
         */
        CalendarComponent.prototype.onInfoTabClick = /**
         * @param {?} dom
         * @return {?}
         */
            function (dom) {
                console.warn('infoTabClick');
                console.warn('nowShowBtn', this.nowShowBtn);
                if (this.nowShowBtn !== undefined) {
                    // console.log('nowShowBtn click', this.nowShowBtn.btnContent.nativeElement);
                    if (dom !== undefined) {
                        console.warn('messageContent', dom.messageContent, this.nowShowBtn.messageContent);
                        if (dom.messageContent !== this.nowShowBtn.messageContent) {
                            // this.closeInfo();
                            this.nowShowBtn.closeInfo();
                            this.nowShowBtn = dom;
                        }
                        else {
                            this.resetInfoPos();
                        }
                    } // end if: dom !== undefined
                }
                else {
                    this.nowShowBtn = dom;
                }
                // console.warn('messageContent filter', this.nowShowBtn.messageContent === this.filterInfo, this.filterInfo);
                if (this.nowShowBtn.messageContent === this.filterInfo) {
                    this.isExpandFilter = true;
                }
            }; // end infoTabClick
        // end infoTabClick
        /**
         * @return {?}
         */
        CalendarComponent.prototype.resetInfoPos =
            // end infoTabClick
            /**
             * @return {?}
             */
            function () {
                // this.isExpandFilter = true;
                if (this.nowShowBtn !== undefined) {
                    this.nowShowBtn.countPos();
                }
            }; // end resetInfoPos
        // end resetInfoPos
        /**
         * @return {?}
         */
        CalendarComponent.prototype.onCloseInfo =
            // end resetInfoPos
            /**
             * @return {?}
             */
            function () {
                this.isExpandFilter = false;
                if (this.nowShowBtn !== undefined) {
                    this.nowShowBtn.closeInfo();
                    // this.nowShowBtn = undefined;
                    // console.warn('closeInfo', this.nowShowBtn, this.nowShowBtn.btnContent.nativeElement);
                }
            }; // end closeInfo
        CalendarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snd-calendar',
                        template: "<app-ui-main-full>\n  <div main class=\"main-calendar\">\n\n    <div #titleBtnsBlock class=\"calendar-title-actionBtns\">\n\n      <div class=\"calendar-title-block\">\n        <ng-template *ngIf=\"windowWidth < 1024; then title_mobileBlock else title_pcBlock\"></ng-template>\n\n        <ng-template #title_pcBlock>\n          <p class=\"calendar-title-year font-size_h5\">{{ this.viewDate | date: 'yyyy' }}</p>\n          <p class=\"calendar-title-month font-size_h5\" [hidden]=\"this.viewType === 'year'\">{{ this.translateMap.get(this.viewDate | date: 'MMMM') ? this.translateMap.get(this.viewDate | date: 'MMMM') :  this.viewDate | date: 'MMMM'}}</p>\n        </ng-template>\n        <!-- end: title_pcBlock -->\n\n        <ng-template #title_mobileBlock>\n          <div (click)=\"mobileBackViewType()\">\n            <!-- <nx-icon name=\"chevron-left\" [hidden]=\"(this.viewType === 'year')\"></nx-icon> -->\n            <div class=\"img-block\" [hidden]=\"(this.viewType === 'year')\">\n              <img src=\"assets/img/icon-cal-back.svg\" />\n            </div>\n            <p class=\"calendar-title-year\" [hidden]=\"this.viewType === 'day'\">{{ this.viewDate | date: 'yyyy' }}</p>\n            <p class=\"calendar-title-month\" [hidden]=\"(this.viewType === 'month' || this.viewType === 'year')\">{{ this.translateMap.get(this.viewDate | date: 'MMMM') ? this.translateMap.get(this.viewDate | date: 'MMMM') :  this.viewDate | date: 'MMMM'}}</p>\n          </div>\n        </ng-template>\n        <!-- end: title_mobileBlock -->\n\n      </div>\n      <!-- end calendar-title-block -->\n\n      <div class=\"calendar-switch-btn\">\n        <app-ui-tab-style2 (onTabChildClick)=\"switchPadViewMode($event)\" [tabIndex]=\"this.viewTypeIndex\">\n          <app-ui-tab-child>{{language.day |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.week |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.month |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.year |translate }}</app-ui-tab-child>\n        </app-ui-tab-style2>\n        <!-- end tab style2 -->\n      </div>\n      <!-- end calendar-switch-btn -->\n\n      <div class=\"calendar-action-btn\">\n        <ul class=\"ui-list-block\">\n          <li class=\"list-item-block\">\n            <div class=\"calendar-btn\" (click)=\"clickToday()\">\n              <div class=\"text-block\">\n                <p>{{language.today |translate }}</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"list-item-block\">\n            <div class=\"calendar-btn\" Action action=\"calendarAddEvent\" (actionClick)=\"addEvent()\">\n              <div class=\"img-block\">\n                <img [src]=\"'assets/img/icon-cal-new.svg'\" />\n              </div>\n            </div>\n          </li>\n          <li class=\"list-item-block calendar-filter-btn\">\n            <app-ui-information-btn [outsideSpace]=\"outsideSpace\"\n                                    [messageContent]=\"filterInfo\"\n                                    (onClick)=\"onInfoTabClick($event)\" >\n\n              <div class=\"calendar-btn\">\n                <div class=\"img-block\">\n                  <img [src]=\"'assets/img/icon-cal-filter.svg'\" />\n                </div>\n              </div>\n            </app-ui-information-btn>\n          </li>\n        </ul>\n      </div>\n      <!-- end calendar-action-btn -->\n    </div>\n    <!-- end calendar-title-actionBtns -->\n    <!-- </app-ui-infinite-scroll> -->\n\n    <!-- Filter content -->\n    <ng-template #filterContent>\n      <snd-calendar-filter [optionMap]=\"optionMap\" (activityTypeListChange)=\"onActivityTypeListChange($event)\"></snd-calendar-filter>\n    </ng-template>\n\n    <!--info content-->\n    <app-ui-information-content #filterInfo class=\"filter-pc\"\n                                (btnOnClick)=\"onCloseInfo()\"\n                                [defaultPos]=\"'bottom'\"\n                                [paddindData]=\"paddindData\"\n                                [showArrow]=\"false\">\n      <ng-container *ngTemplateOutlet=\"filterContent\"></ng-container>\n    </app-ui-information-content>\n    <!-- end: Filter content -->\n\n    <!--\n      [(isSwitchView)]=\"isLoading\"\n    -->\n    <utils-calendar class=\"calendar-container\"\n                    [ngClass]=\"(isExpandDetail || isExpandEdit ? 'no-scroll':'')\"\n                    [viewType]=\"viewType\"\n                    [weekStartsOn]=\"weekStartsOn\"\n                    [viewDate]=\"viewDate\"\n                    [translateMap]=\"translateMap\"\n                    [eventList]=\"calendarEventListAfterFilter\"\n                    (viewDateChange)=\"onViewDateChange($event)\"\n                    (uiCalendarClickEventItem)=\"onClickDetail($event)\"\n                    (uiCalendarMoreInfoClicked)=\"onInfoTabClick($event)\"></utils-calendar>\n  </div>\n  <!-- end: main -->\n\n  <div global-main>\n    <!--delete block -->\n    <app-ui-alert-confirm #calendarDelete [(isPopupOpen)]=\"isCalendarDelete\" (onCancel)=\"onClickDeleteCancel()\" (onConfirm)=\"onClickDeleteConfirm()\" [title]=\"language.delete | translate\"\n                          [message]=\"language.deleteMessage | translate\" [cancelBtnText]=\"language.no | translate\" [confirmBtnText]=\"language.yes | translate\">\n    </app-ui-alert-confirm>\n    <!-- end: Appointment delete -->\n\n    <!-- detail block -->\n    <app-ui-modal-style-text1 class=\"wd-md\"\n                              [(isPopupOpen)]=\"isExpandDetail\"\n                              (close)=\"onToggleDetailModal($event)\"\n                              [ngClass]=\"{'no-scroll': isExpandEdit}\">\n      <ng-container textType=\"modal-title-detail\">{{language.appointmentDetail | translate}}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <snd-calendar-detail [calendarEventDetail]=\"calendarEventDetail\"></snd-calendar-detail>\n      </ng-container>\n      <!-- end: popup-content -->\n      <ng-container textType=\"modal-btm-detail\">\n        <app-ui-btn-layout>\n          <app-ui-btn [btnHeight]=\"'sm'\" [btnStyle]=\"'border'\" (ClickBtn)=\"isCalendarDelete = true\">\n            <ng-container TextType=\"cust\">{{language.delete | translate}}</ng-container>\n          </app-ui-btn>\n          <app-ui-btn [btnHeight]=\"'sm'\" (ClickBtn)=\"editEvent()\">\n            <!-- <ng-container TextType=\"cust\"><span [routerLink]=\"['editEvent']\">EDIT</span></ng-container> -->\n            <ng-container TextType=\"cust\">{{language.edit | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n      </ng-container>\n      <!-- end: modal-btm-detail -->\n    </app-ui-modal-style-text1>\n    <!-- end: Appointment Detail -->\n\n    <!--add/edit calendar popup-->\n    <app-ui-modal-style-text1 class=\"wd-lg calendar-edit-content\"\n                              [(isPopupOpen)]=\"isExpandEdit\"\n                              [isScrollToTop]=\"true\"\n                              (close)=\"onToggleAppointmentModal(false)\"\n                              [isBackdropClose]=\"false\">\n      <ng-container textType=\"modal-title-detail\">{{language.appointment | translate}}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <snd-calendar-edit [calendarEventDetail]=\"calendarEventDetail\"\n                           [todayCalendarEvent]=\"viewDateCalendarEventList\"\n                           [isSaveClick]=\"isSaveClick\"\n                           [viewDate]=\"viewDate\"\n                           [translateMap]=\"translateMap\"\n                           [optionMap]=\"optionMap\"\n                           (saveEvent)=\"onSaveCalendarEvent($event)\"></snd-calendar-edit>\n\n      </ng-container>\n      <!-- end popup-content -->\n      <ng-container textType=\"modal-btm-detail\">\n        <app-ui-btn-layout>\n          <app-ui-btn [btnWd]=\"'md'\" [btnHeight]=\"'sm'\" (ClickBtn)=\"onClickAppointmentSave()\">\n            <ng-container TextType=\"cust\">{{language.save | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n      </ng-container>\n      <!-- end modal-btm-detail -->\n    </app-ui-modal-style-text1>\n    <!-- end: add/edit calendar -->\n\n    <app-ui-popup-style-feedback [(isPopupOpen)]=\"isSave\">\n      <ng-container textType=\"modal-img-detail\">\n        <nx-icon name='check' size='auto'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.saved | translate}}</ng-container>\n    </app-ui-popup-style-feedback>\n    <!-- end: Appointment save -->\n\n    <!-- Delete Success -->\n    <app-ui-popup-style-feedback [(isPopupOpen)]=\"isDelete\">\n      <ng-container textType=\"modal-img-detail\">\n        <nx-icon name='check' size='auto'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.delete | translate}}</ng-container>\n    </app-ui-popup-style-feedback>\n    <!-- end of Delete Success -->\n\n    <app-ui-popup-style-feedback [(isPopupOpen)]=\"isLoading\" [hasAutoDisappear]=\"false\">\n      <ng-container textType=\"modal-img-detail\">\n        <app-ui-refresh-icon></app-ui-refresh-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">Loading</ng-container>\n    </app-ui-popup-style-feedback>\n\n    <!-- filter block -->\n    <app-ui-modal-style-text1 class=\"wd-sm\" [(isPopupOpen)]=\"isExpandFilter\" [isHasBtmBlock]=\"false\" (close)=\"onToggleFilterModal($event)\" class=\"filter-mobile\">\n      <ng-container textType=\"modal-title-detail\">{{language.filter |translate }}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <ng-container *ngTemplateOutlet=\"filterContent\"></ng-container>\n      </ng-container>\n      <!-- end: popup-content -->\n    </app-ui-modal-style-text1>\n    <!-- end: Filter -->\n  </div>\n  <!-- end: global-main -->\n</app-ui-main-full>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{background-color:transparent}:host *{-webkit-tap-highlight-color:transparent}:host ::ng-deep .ui-refresher-content{background-color:#f5f5f5}:host ::ng-deep .ui-page-content .ui-main-full-content{padding:0!important}:host .link-btn{cursor:pointer}:host .main-calendar{display:inline-block;width:100%;height:100%}:host .calendar-title-actionBtns{display:flex;justify-content:space-between;align-items:center;padding:25px 30px 0}:host .calendar-title-actionBtns:not(:last-child){margin-bottom:35px}:host .calendar-title-block{min-width:195px}:host .calendar-title-block .link-btn{display:flex}:host .calendar-title-block p{display:inline-block;margin:0;font-weight:700;line-height:1.33;letter-spacing:.2px;color:#414141}:host .calendar-title-block p:not(:last-child){margin-right:20px}:host .calendar-title-block p[hidden]{display:none}:host .calendar-switch-btn{max-width:280px;margin-right:40px}:host .calendar-action-btn .ui-list-block{display:flex;justify-content:flex-start;align-items:stretch;list-style-type:none}:host .calendar-action-btn .ui-list-block .list-item-block:not(:last-child){margin-right:20px}:host .calendar-action-btn .ui-list-block .calendar-btn{display:flex;min-width:40px;height:100%;cursor:pointer}:host .calendar-action-btn .ui-list-block .calendar-btn .img-block,:host .calendar-action-btn .ui-list-block .calendar-btn .text-block{flex:1;margin:auto 0}:host .calendar-action-btn .ui-list-block .img-block{display:inline-block;width:40px;height:40px}:host .calendar-action-btn .ui-list-block .img-block img{display:inline-block;width:100%}:host .calendar-action-btn .ui-list-block .text-block{display:flex}:host .calendar-action-btn .ui-list-block .text-block>p{margin:auto 0;flex:1;font-size:.875rem;font-weight:700;line-height:1.43;letter-spacing:.2px;color:#007ab3}:host .calendar-action-btn .ui-list-block .calendar-filter-btn ::ng-deep .info-content .info-info-content{padding:20px}:host .calendar-action-btn .ui-list-block .calendar-filter-btn ::ng-deep .info-content .control-btn:after{display:none}:host ::ng-deep .cal-month-view{background-color:#f5f5f5}:host .filter-pc ::ng-deep .info-info-content{padding:25px 20px;border-radius:5px}:host .filter-mobile::ng-deep{display:none}:host .calendar-filter-item:not(:last-child){margin-bottom:25px}:host .calendar-filter-item ::ng-deep .nx-checkbox .nx-checkbox__control{margin-top:0}:host .calendar-filter-item ::ng-deep .form-checkbox .check-text{line-height:1.4;letter-spacing:.2px}:host .no-scroll *,:host .no-scroll ::ng-deep *{overflow-y:hidden!important}:host .calendar-detail-content ::ng-deep .gas-layout-form .gas-row-block:first-child{margin-top:0}:host .calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .title-block{margin-bottom:0}:host .calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .text-block>p{color:#414141;font-weight:300}:host .calendar-edit-content ::ng-deep .modal-block{padding-left:0;padding-right:0}:host .calendar-edit-content ::ng-deep .modal-block .nx-modal__container .nx-modal__content{padding-right:0}:host .calendar-edit-content ::ng-deep .modal-block app-calendar-edit>[class*=gas-col-]:last-child{padding-right:0;padding-left:20px}@media screen and (max-width:1023px){:host ::ng-deep .ui-page-content{background-color:#fff!important}:host ::ng-deep .ui-page-content .ui-main-full-content{min-height:auto!important;background-color:transparent!important}:host ::ng-deep .ui-calendar-year{overflow:hidden;overflow-y:auto;margin-top:-5px}:host ::ng-deep .ui-calendar-month-m .cal-days .cal-day-cell:not(.cal-today) .event-date.event-day-active{background-color:transparent!important;color:#414141!important}:host ::ng-deep .ui-calendar-month-m .cal-days .cal-today .event-date{background-color:#003781!important;color:#fff!important}:host .calendar-title-block{position:relative;padding-left:10px}:host .calendar-title-block nx-icon::ng-deep{font-size:1.25rem;font-weight:700;color:#003781}:host .calendar-title-block nx-icon[hidden]::ng-deep{display:none}:host .calendar-title-block .img-block{display:inline-block;vertical-align:middle;width:16px}:host .calendar-title-block .img-block[hidden]{display:none}:host .calendar-title-block .img-block img{display:inline-block;width:6px;height:10px;position:absolute;top:calc(50% - 5px)}:host .calendar-title-block p{font-size:1.25rem}:host .calendar-title-block p:not(:last-child){margin-right:10px}:host .calendar-title-actionBtns{padding:5px 5px 0}:host .calendar-title-actionBtns:not(:last-child){margin-bottom:15px}:host .calendar-switch-btn{display:none}:host .calendar-action-btn .ui-list-block .list-item-block:not(:last-child){margin-right:10px}:host .filter-mobile::ng-deep{display:block}:host .filter-pc::ng-deep .info-info-content{display:none}:host .calendar-filter-item:not(:last-child){margin-bottom:35px}}@media screen and (max-width:374px){:host .calendar-title-block{min-width:auto}}"]
                    }] }
        ];
        CalendarComponent.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: i0.ElementRef },
                { type: i1.SettingService },
                { type: i1.TranslateService },
                { type: CalendarService },
                { type: i1.ProfileCodeService }
            ];
        };
        CalendarComponent.propDecorators = {
            parentHeight: [{ type: i0.Input }],
            parentHeightChange: [{ type: i0.Output }],
            titleBtnsBlock: [{ type: i0.ViewChild, args: ['titleBtnsBlock',] }],
            onResize: [{ type: i0.HostListener, args: ['window:resize', ['$event'],] }],
            nowShowBtn: [{ type: i0.ViewChild, args: [ui.UiInformationBtnComponent,] }],
            infoContent: [{ type: i0.ViewChild, args: [ui.UiInformationContentComponent,] }],
            filterInfo: [{ type: i0.ViewChild, args: ['filterInfo',] }]
        };
        return CalendarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarDetailComponent = /** @class */ (function () {
        function CalendarDetailComponent() {
            this.language = new i1.Language();
            this.isSameDay = true;
        }
        Object.defineProperty(CalendarDetailComponent.prototype, "calendarEventDetail", {
            get: /**
             * @return {?}
             */ function () { return this._calendarEventDetail; },
            set: /**
             * @param {?} calendarEventDetail
             * @return {?}
             */ function (calendarEventDetail) {
                if (i1.StringUtils.isNotEmpty(calendarEventDetail)) {
                    this._calendarEventDetail = calendarEventDetail;
                    this.isSameDay = dateFns.isSameDay(this._calendarEventDetail.end, this._calendarEventDetail.start);
                }
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
            };
        CalendarDetailComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snd-calendar-detail',
                        template: "<div class=\"calendar-detail-content\">\n  <ng-container *ngIf=\"calendarEventDetail\">\n\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.title | translate}}</ng-container>\n            <ng-container textType=\"text\">{{calendarEventDetail.title}}</ng-container>\n          </app-ui-info-text2>\n\n        <ng-container *ngIf=\"calendarEventDetail.location != ''\">\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.location | translate}}</ng-container>\n            <ng-container textType=\"text\">{{calendarEventDetail.location}}</ng-container>\n          </app-ui-info-text2>\n        </ng-container>\n\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.activity | translate}}</ng-container>\n            <ng-container textType=\"text\">{{calendarEventDetail.displayActivity}}</ng-container>\n          </app-ui-info-text2>\n\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.date | translate}}</ng-container>\n            <ng-container textType=\"text\" *ngIf=\"calendarEventDetail.allDay == true\">\n              {{ calendarEventDetail.start | date: 'MM/dd/y' }}-{{\n              calendarEventDetail.end | date: 'MM/dd/y' }}</ng-container>\n            <ng-container textType=\"text\" *ngIf=\"calendarEventDetail.allDay == false && isSameDay\">\n              {{ calendarEventDetail.start | date: 'MM/dd/y HH:mm' }}-{{\n              calendarEventDetail.end | date: 'HH:mm' }}</ng-container>\n            <ng-container textType=\"text\" *ngIf=\"calendarEventDetail.allDay == false && !isSameDay\">\n              {{ calendarEventDetail.start | date: 'MM/dd/y HH:mm' }}-<br />\n              {{ calendarEventDetail.end | date: 'MM/dd/y HH:mm' }}</ng-container>\n          </app-ui-info-text2>\n\n        <ng-container *ngIf=\"calendarEventDetail.isAlert != false\">\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.alert | translate}}</ng-container>\n            <ng-container textType=\"text\">\n              {{calendarEventDetail.displayAlert1}}\n              <br />\n              {{calendarEventDetail.displayAlert2}}\n            </ng-container>\n          </app-ui-info-text2>\n        </ng-container>\n\n        <ng-container *ngIf=\"calendarEventDetail.remark != '' && calendarEventDetail.remark != null\">\n          <app-ui-info-text2>\n            <ng-container textType=\"title\">{{language.remark | translate}}</ng-container>\n            <ng-container textType=\"text\">{{calendarEventDetail.remark}}</ng-container>\n          </app-ui-info-text2>\n        </ng-container>\n  </ng-container>\n</div>\n",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.calendar-detail-content{padding-top:30px}.calendar-detail-content ::ng-deep .gas-layout-form .gas-row-block:first-child{margin-top:0}.calendar-detail-content ::ng-deep app-ui-info-text2:not(:last-child){display:block;margin-bottom:30px}.calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .title-block{margin-bottom:0}.calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .text-block>p{color:#414141;font-weight:300}@media screen and (max-width:1023px){.calendar-detail-content{padding-top:0}}"]
                    }] }
        ];
        CalendarDetailComponent.ctorParameters = function () { return []; };
        CalendarDetailComponent.propDecorators = {
            calendarEventDetail: [{ type: i0.Input }]
        };
        return CalendarDetailComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarEditComponent = /** @class */ (function () {
        function CalendarEditComponent(elementRef) {
            this.elementRef = elementRef;
            this.saveEvent = new i0.EventEmitter();
            this.startDateChange = new i0.EventEmitter();
            this._viewDate = new Date();
            this._isSaveClick = false;
            this._optionMap = new Map();
            this.language = new i1.Language();
            this._translateMap = new Map();
            this.calendarEventList = [];
            this.activityOptionList = [];
            this.alertOptionList = [];
            this.validationResult = new i1.ValidationResult();
            this.eventListBGColor = '#f9f9f9';
            this.isInit = true;
        }
        Object.defineProperty(CalendarEditComponent.prototype, "isSaveClick", {
            get: /**
             * @return {?}
             */ function () { return this._isSaveClick; },
            set: /**
             * @param {?} isSaveClick
             * @return {?}
             */ function (isSaveClick) {
                this._isSaveClick = isSaveClick;
                if (this._isSaveClick == true) {
                    this.saveEventClick();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEditComponent.prototype, "calendarEventDetail", {
            get: /**
             * @return {?}
             */ function () { return this._calendarEventDetail; },
            set: /**
             * @param {?} calendarEventDetail
             * @return {?}
             */ function (calendarEventDetail) {
                if (calendarEventDetail) {
                    this._calendarEventDetail = calendarEventDetail;
                    console.warn("this.calendarEventDetail", this._calendarEventDetail);
                    this.editEvent();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEditComponent.prototype, "optionMap", {
            get: /**
             * @return {?}
             */ function () { return this._optionMap; },
            set: /**
             * @param {?} optionMap
             * @return {?}
             */ function (optionMap) {
                this._optionMap = optionMap;
                this.activityOptionList = [];
                for (var i = 0; i < this._optionMap.get('Calendar_Type').length; i++) {
                    this.activityOptionList.push(new ui.SelectOption(this._optionMap.get('Calendar_Type')[i].getCode(), this._optionMap.get('Calendar_Type')[i].displayText));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEditComponent.prototype, "translateMap", {
            get: /**
             * @return {?}
             */ function () { return this._translateMap; },
            set: /**
             * @param {?} translateMap
             * @return {?}
             */ function (translateMap) {
                this._translateMap = translateMap;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEditComponent.prototype, "viewDate", {
            get: /**
             * @return {?}
             */ function () { return this._viewDate; },
            set: /**
             * @param {?} viewDate
             * @return {?}
             */ function (viewDate) {
                console.warn('viewDateChange');
                this._viewDate = viewDate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEditComponent.prototype, "todayCalendarEvent", {
            get: /**
             * @return {?}
             */ function () { return this.calendarEventList; },
            set: /**
             * @param {?} calendarEventList
             * @return {?}
             */ function (calendarEventList) {
                this.calendarEventList = calendarEventList;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CalendarEditComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.windowWidth = window.innerWidth;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        CalendarEditComponent.prototype.onResize = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.windowWidth = event.target.innerWidth;
                // wle.warn('Width: ', this.windowWidth);
            };
        /**
         * @return {?}
         */
        CalendarEditComponent.prototype.editEvent = /**
         * @return {?}
         */
            function () {
                this.isInit = true;
                if (i1.StringUtils.isEmpty(this._calendarEventDetail.alert1)) { // modify alert1 if null
                    this._calendarEventDetail.alert1 = '';
                }
                if (i1.StringUtils.isEmpty(this._calendarEventDetail.alert2)) { // modify alert2 if null
                    this._calendarEventDetail.alert2 = '';
                }
                this.startDate = this._calendarEventDetail.start;
                this.startTime = this._calendarEventDetail.start;
                this.endDate = this._calendarEventDetail.end;
                this.endTime = this._calendarEventDetail.end;
                this.getAlertOptions(); // change alertOption
                this.showDate = (dateFns.getMonth(this._viewDate) + 1).toString() + '/' + dateFns.getDate(this._viewDate).toString() + '/' + dateFns.getYear(this._viewDate).toString();
            };
        /**
         * @return {?}
         */
        CalendarEditComponent.prototype.saveEventClick = /**
         * @return {?}
         */
            function () {
                console.warn('saveEvent');
                this.validationForm();
                if (this.validationResult.isTrue()) {
                    this.saveEvent.emit(this._calendarEventDetail);
                }
                else {
                    this.saveEvent.emit(null);
                    // this.completeSave.emit(false);
                }
            };
        /**
         * @return {?}
         */
        CalendarEditComponent.prototype.validationForm = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // check form before submit
                /** @type {?} */
                var inputList = [{ 'maxLength': 60, 'field': 'title', 'isRequired': true },
                    { 'maxLength': 100, 'field': 'location', 'isRequired': false },
                    { 'maxLength': 500, 'field': 'remark', 'isRequired': false }];
                /** @type {?} */
                var selectList = ['activity', 'alert1', 'alert2'];
                inputList.forEach(( /**
                 * @param {?} inputFiled
                 * @return {?}
                 */function (inputFiled) {
                    _this.onValidationInput(inputFiled.maxLength, inputFiled.field, inputFiled.isRequired);
                }));
                selectList.forEach(( /**
                 * @param {?} selectField
                 * @return {?}
                 */function (selectField) {
                    _this.onValidationSelect(selectField);
                }));
                this.onValidationTimeFormat();
                this.onValidationTime();
                if (this.validationResult != null) {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.scrollToError();
                    }), 200);
                }
            };
        /**
         * @param {?} maxLength
         * @param {?} field
         * @param {?=} isRequired
         * @return {?}
         */
        CalendarEditComponent.prototype.onValidationInput = /**
         * @param {?} maxLength
         * @param {?} field
         * @param {?=} isRequired
         * @return {?}
         */
            function (maxLength, field, isRequired) {
                if (isRequired === void 0) {
                    isRequired = false;
                }
                this.validationResult.deleteError(field);
                console.debug('isRequired', isRequired, 'length', this._calendarEventDetail[field].length, 'val', '[' + this._calendarEventDetail[field] + ']');
                if (isRequired) {
                    if (this._calendarEventDetail[field] != undefined && i1.StringUtils.isEmpty(i1.StringUtils.trim(this._calendarEventDetail[field])))
                        this.validationResult.setErrorMap(field, 'required');
                }
                if (i1.StringUtils.isNotEmpty(this._calendarEventDetail[field])) {
                    if (this._calendarEventDetail[field].length > maxLength && maxLength != 0)
                        this.validationResult.setErrorMap(field, 'maxLength');
                }
            };
        /**
         * @param {?} field
         * @return {?}
         */
        CalendarEditComponent.prototype.onValidationSelect = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                this.validationResult.deleteError(field);
                console.warn('field', field);
                if (field == 'activity') {
                    if (this._calendarEventDetail.activity == null || this._calendarEventDetail.activity == '')
                        this.validationResult.setErrorMap(field, 'required');
                }
                if (field == 'alert1' || field == 'alert2') {
                    this.validationResult.deleteError('alert1');
                    this.validationResult.deleteError('alert2');
                    if (this._calendarEventDetail.isAlert && this._calendarEventDetail.alert1 == '' && this._calendarEventDetail.alert2 == '') // if didn't select any alert
                        this.validationResult.setErrorMap('alert1', 'required');
                    if (this._calendarEventDetail.isAlert && (this._calendarEventDetail.alert1 == this._calendarEventDetail.alert2) && this._calendarEventDetail.alert1 != '') // if select same alert
                        this.validationResult.setErrorMap('alert2', 'sameAlert');
                }
            };
        /**
         * @return {?}
         */
        CalendarEditComponent.prototype.onValidationTimeFormat = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var timeList = ['startDate', 'startTime', 'endDate', 'endTime', 'time'];
                timeList.forEach(( /**
                 * @param {?} timeField
                 * @return {?}
                 */function (timeField) {
                    _this.validationResult.deleteError(timeField); //clear timeError
                    if (timeField != 'time' && _this[timeField] === null) {
                        _this.validationResult.setErrorMap(timeField, 'formatError'); // check formatError
                    }
                }));
            };
        /**
         * @return {?}
         */
        CalendarEditComponent.prototype.onValidationTime = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // validation Date or Time
                // let isError: boolean = false;
                /** @type {?} */
                var timeList = ['startDate', 'startTime', 'endDate', 'endTime'];
                timeList.forEach(( /**
                 * @param {?} timeField
                 * @return {?}
                 */function (timeField) {
                    _this.validationResult.deleteError(timeField);
                    // if(this.validationResult.isError(timeField))
                    // isError = true;
                }));
                // if(!isError) {
                this.combineTime();
                if (dateFns.differenceInMinutes(this._calendarEventDetail.end, this._calendarEventDetail.start) < 15 && dateFns.differenceInMinutes(this._calendarEventDetail.end, this._calendarEventDetail.start) >= 0 && this._calendarEventDetail.allDay != true) {
                    this.validationResult.setErrorMap('time', 'minTime');
                }
                else if (dateFns.differenceInMinutes(this._calendarEventDetail.end, this._calendarEventDetail.start) < 0) {
                    this.validationResult.setErrorMap('time', 'errorTime');
                }
                // }
            };
        /**
         * @return {?}
         */
        CalendarEditComponent.prototype.combineTime = /**
         * @return {?}
         */
            function () {
                if (this._calendarEventDetail.allDay == true) {
                    this._calendarEventDetail.start = new Date(dateFns.getYear(this.startDate), dateFns.getMonth(this.startDate), dateFns.getDate(this.startDate), 0, 0);
                    this._calendarEventDetail.end = new Date(dateFns.getYear(this.endDate), dateFns.getMonth(this.endDate), dateFns.getDate(this.endDate), 0, 0);
                }
                else {
                    this._calendarEventDetail.start = new Date(dateFns.getYear(this.startDate), dateFns.getMonth(this.startDate), dateFns.getDate(this.startDate), dateFns.getHours(this.startTime), dateFns.getMinutes(this.startTime));
                    this._calendarEventDetail.end = new Date(dateFns.getYear(this.endDate), dateFns.getMonth(this.endDate), dateFns.getDate(this.endDate), dateFns.getHours(this.endTime), dateFns.getMinutes(this.endTime));
                }
            };
        /**
         * @param {?} changeDate
         * @param {?} field
         * @return {?}
         */
        CalendarEditComponent.prototype.onTimeChange = /**
         * @param {?} changeDate
         * @param {?} field
         * @return {?}
         */
            function (changeDate, field) {
                //convert to date param
                if (field == 'startDate')
                    this.startDate = changeDate;
                else if (field == 'startTime')
                    this.startTime = changeDate;
                else if (field == 'endDate')
                    this.endDate = changeDate;
                else if (field == 'endTime')
                    this.endTime = changeDate;
                this.onValidationTimeFormat();
                if (!this.isInit) { // to avoid change startDate in the first Time
                    if (field == 'startDate') {
                        this.onStartDateChange();
                    }
                    else if (field == 'startTime') {
                        this.onStartTimeChange();
                    }
                }
                this.onValidationTime();
                this.isInit = false;
            };
        /**
         * @return {?}
         */
        CalendarEditComponent.prototype.onStartDateChange = /**
         * @return {?}
         */
            function () {
                this.startTime = dateFns.setDate(this.startTime, dateFns.getDate(this.startDate));
                this.endDate = dateFns.addHours(this.startDate, 1);
                this.endTime = dateFns.addHours(this.startTime, 1);
                this.startDateChange.emit(this.startDate);
            };
        /**
         * @return {?}
         */
        CalendarEditComponent.prototype.onStartTimeChange = /**
         * @return {?}
         */
            function () {
                this.endDate = dateFns.addHours(this.startTime, 1);
                this.endTime = dateFns.addHours(this.startTime, 1);
            };
        /**
         * @return {?}
         */
        CalendarEditComponent.prototype.onIsAllDayChange = /**
         * @return {?}
         */
            function () {
                this.onIsAlertChange();
                if (!this._calendarEventDetail.allDay) {
                    /** @type {?} */
                    var currentTime = new Date();
                    currentTime = dateFns.addMinutes(currentTime, (5 - dateFns.getMinutes(currentTime) % 5));
                    currentTime = dateFns.addHours(currentTime, 1);
                    // this._calendarEventDetail.start = new Date(getYear(this.startTime), getMonth(this.startTime), getDate(this.startTime),getHours(currentTime), getMinutes(currentTime));
                    this.startDate = currentTime;
                    this.startTime = currentTime;
                    // this.endDate = addHours(this.startTime, 1);
                    // this.endTime = addHours(this.startTime, 1);
                }
            };
        /**
         * @return {?}
         */
        CalendarEditComponent.prototype.onIsAlertChange = /**
         * @return {?}
         */
            function () {
                this.getAlertOptions(); //reset optionList
                if (this._calendarEventDetail.isAlert == true && this._calendarEventDetail.allDay == true) { // reset Default selection
                    this._calendarEventDetail.alert1 = '2';
                    this._calendarEventDetail.alert2 = '';
                }
                else if (this._calendarEventDetail.isAlert == true && this._calendarEventDetail.allDay == false) {
                    this._calendarEventDetail.alert1 = '8';
                    this._calendarEventDetail.alert2 = '';
                }
            };
        /**
         * @return {?}
         */
        CalendarEditComponent.prototype.getAlertOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.alertOptionList = [];
                if (this._optionMap.get('Calendar_RemindTime')) {
                    this._optionMap.get('Calendar_RemindTime').forEach(( /**
                     * @param {?} option
                     * @return {?}
                     */function (option) {
                        if (_this._calendarEventDetail.allDay == JSON.parse(option.getArguments()).isAllDay) {
                            _this.alertOptionList.push(new ui.SelectOption(option.getCode(), option.displayText));
                        }
                    }));
                }
            };
        /**
         * @return {?}
         */
        CalendarEditComponent.prototype.scrollToError = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var errorBlock = document.body.getElementsByClassName('error-msg');
                if (errorBlock.item(0)) {
                    errorBlock.item(0).parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        CalendarEditComponent.prototype.onTitleChange = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this._calendarEventDetail.title = val;
                this.onValidationInput(60, 'title', true);
            };
        CalendarEditComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snd-calendar-edit',
                        template: "<ng-template *ngIf=\"windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n\n<ng-template #mobileBlock>\n  <ng-container *ngTemplateOutlet=\"formContent\"></ng-container>\n</ng-template>\n<!-- end: mobileBlock -->\n\n<ng-template #pcBlock>\n  <ng-container *ngTemplateOutlet=\"formContent\"></ng-container>\n  <ng-container *ngTemplateOutlet=\"eventListContent\"></ng-container>\n</ng-template>\n<!-- end: pcBlock -->\n\n<ng-template #formContent>\n  <ng-container *ngIf=\"_calendarEventDetail\">\n    <app-ui-form-layout-col [colPC]=\"8\" [colNB]=\"8\" [colPad]=\"12\" [colMobile]=\"12\">\n      <app-ui-form-layout-advanced>\n        <!-- title -->\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-input [(nxValue)]=\"_calendarEventDetail.title\" (nxValueChange)=\"onValidationInput(60,'title',true)\" [inputTitle]=\"language.title | translate\" [name]=\"'input1'\" [isDisable]=\"false\" [isError]=\"validationResult.isError('title')\" [maxLength]=\"60\"></app-ui-form-input>\n            <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('title') == 'required'\">{{language.wrongTitleRequired | translate}}</app-ui-form-error-msg>\n            <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('title') == 'maxLength'\">{{language.wrongTitleMaximum | translate}}</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row1 -->\n\n        <!-- location -->\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-input [(nxValue)]=\"_calendarEventDetail.location\" (nxValueChange)=\"onValidationInput(100,'location',false)\" [inputTitle]=\"language.location | translate\" [name]=\"'input1'\" [isDisable]=\"false\" [isError]=\"validationResult.isError('location')\" [maxLength]=\"100\"></app-ui-form-input>\n            <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('location') == 'maxLength'\">{{language.wrongLocationMaximum | translate}}</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row2 -->\n\n        <!-- Activity -->\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-select [(nxValue)]=\"_calendarEventDetail.activity\"  (nxValueChange)=\"onValidationSelect('activity')\" [selectTitle]=\"language.activity | translate\" [selectOption]='activityOptionList'[isError]=\"validationResult.isError('activity')\" ></app-ui-form-select>\n            <app-ui-form-error-msg *ngIf=\"validationResult.isError('activity')\">{{language.wrongActivityRequired | translate}}</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row3 -->\n\n        <!-- AllDay -->\n        <app-ui-form-title-sm>{{language.date | translate}}</app-ui-form-title-sm>\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-switcher [(nxValue)]=\"_calendarEventDetail.allDay\" [labelTxt]=\"language.allDay | translate\" (nxValueChange)=\"onIsAllDayChange()\"></app-ui-form-switcher>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row4 -->\n\n        <!-- Datetime picker -->\n        <ng-container *ngIf= '_calendarEventDetail.allDay == true'>\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\" >\n              <app-ui-form-date [title]=\"language.from | translate\" [nxValue]=\"startDate\"  (nxValueChange)=\"onTimeChange($event,'startDate')\" [isError]=\"validationResult.isError('startDate')\"></app-ui-form-date>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('startDate') == 'formatError'\">{{language.wrongDate | translate}}</app-ui-form-error-msg>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('time') == 'errorTime'\">{{language.wrongStartTime | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-date class=\"calendar-edit-allDay-date\" [title]=\"language.to | translate\" [nxValue]=\"endDate\" (nxValueChange)=\"onTimeChange($event,'endDate')\" [isError]=\"validationResult.isError('endDate') || validationResult.isError('time')\"></app-ui-form-date>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('endDate') == 'formatError'\">{{language.wrongDate | translate}}</app-ui-form-error-msg>\n\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n        </ng-container>\n\n        <ng-container *ngIf= '_calendarEventDetail.allDay == false'>\n          <!-- Start Date -->\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-date [title]=\"language.from | translate\" [nxValue]=\"startDate\" (nxValueChange)=\"onTimeChange($event,'startDate')\" [isError]=\"validationResult.isError('startDate')\"></app-ui-form-date>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('startDate') == 'formatError'\">{{language.wrongDate | translate}}</app-ui-form-error-msg>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('time') == 'errorTime'\">{{language.wrongStartTime | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-timepicker [nxValue]=\"startTime\" (nxValueChange)=\"onTimeChange($event,'startTime')\"\n                                      [isError]=\"validationResult.isError('startTime')\"></app-ui-form-timepicker>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('startTime') == 'formatError'\">{{language.wrongTime | translate}}</app-ui-form-error-msg>\n\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n          <!-- end: Start Date -->\n\n          <!-- End Date -->\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-date [title]=\"language.to | translate\" [nxValue]=\"endDate\" (nxValueChange)=\"onTimeChange($event,'endDate')\" [isError]=\"validationResult.isError('endDate') || validationResult.isError('time')\"></app-ui-form-date>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('endDate') == 'formatError'\">{{language.wrongStartTime | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-timepicker [nxValue]=\"endTime\" (nxValueChange)=\"onTimeChange($event,'endTime')\"\n                                      [isError]=\"validationResult.isError('time') || validationResult.isError('endTime')\"></app-ui-form-timepicker>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('endTime') == 'formatError'\">{{language.wrongTime | translate}}</app-ui-form-error-msg>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('time') == 'minTime'\">{{language.wrongEndTime | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n          <!-- end: End Date -->\n        </ng-container>\n        <!-- end of row5 -->\n\n        <!-- Alert -->\n        <app-ui-form-title-sm>{{language.alert | translate}}</app-ui-form-title-sm>\n        <app-ui-form-layout-row calendarEditAlertRow=\"\">\n          <app-ui-form-layout-col [colPC]=\"'auto'\" [colNB]=\"'auto'\" [colPad]=\"'auto'\" [colMobile]=\"'auto'\">\n            <app-ui-form-switcher class=\"calendar-edit-alert-switcher\"\n              [(nxValue)]=\"_calendarEventDetail.isAlert\" (nxValueChange)=\"onIsAlertChange()\"></app-ui-form-switcher>\n          </app-ui-form-layout-col>\n          <ng-container *ngIf= '_calendarEventDetail.isAlert == true'>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"9\">\n              <app-ui-form-select [(nxValue)]=\"_calendarEventDetail.alert1\"\n                                  (nxValueChange)=\"onValidationSelect('alert1')\"\n                                  [isShowTitle]=\"false\"\n                                  [selectTitle]=\"'Alert1'\"\n                                  [selectOption]='alertOptionList'\n                                  [isError]=\"validationResult.isError('alert1')\"\n                                  [placeholder]=\"language.alertPlaceholder | translate\" ></app-ui-form-select>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('alert1') == 'required'\">{{language.wrongAlertRequired | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </ng-container>\n        </app-ui-form-layout-row>\n        <!-- end of row6 -->\n\n        <!-- Second Alert -->\n        <ng-container *ngIf= '_calendarEventDetail.isAlert == true'>\n          <app-ui-form-layout-row calendarEditAlertRow=\"\">\n            <app-ui-form-layout-col [colPC]=\"'auto'\" [colNB]=\"'auto'\" [colPad]=\"'auto'\" [colMobile]=\"'auto'\">\n              <div class=\"calendar-edit-alert-switcher\"></div>\n            </app-ui-form-layout-col>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"9\">\n              <app-ui-form-select [(nxValue)]=\"_calendarEventDetail.alert2\"\n                                  (nxValueChange)=\"onValidationSelect('alert2')\"\n                                  [isShowTitle]=\"false\"\n                                  [selectTitle]=\"'Alert2'\"\n                                  [selectOption]='alertOptionList'\n                                  [isError]=\"validationResult.isError('alert2')\"\n                                  [placeholder]=\"language.alertPlaceholder | translate\"></app-ui-form-select>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('alert2') == 'sameAlert'\">{{language.wrongAlert | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n        </ng-container>\n        <!-- end of row7 -->\n\n        <!-- Remark -->\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-input [(nxValue)]=\"_calendarEventDetail.remark\" (nxValueChange)=\"onValidationInput(500,'remark')\" [inputTitle]=\"language.remark | translate\" [name]=\"'input1'\"  [isDisable]=\"false\" [isError]=\"validationResult.isError('remark')\" [maxLength]=\"500\"></app-ui-form-input>\n            <app-ui-form-error-msg *ngIf=\"validationResult.isError('remark')\">{{language.wrongRemarkMaximum | translate}}</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row8 -->\n      </app-ui-form-layout-advanced>\n    </app-ui-form-layout-col>\n  </ng-container>\n</ng-template>\n<!-- end: formContent -->\n\n<ng-template #eventListContent>\n  <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"0\" [colMobile]=\"0\" [ngStyle]=\"{ 'background-color': eventListBGColor }\">\n    <ng-container *ngIf=\"calendarEventList\" >\n\n      <app-ui-calendar-event-list\n        [ngClass]=\"calendarEventList.length == 0? 'calendar-event-list-no-data':''\"\n        [translateMap]=\"_translateMap\"\n        [title]=\"calendarEventList.length>0 ? showDate:''\"\n        [colorCode]=\"eventListBGColor\"\n        [eventList]=\"calendarEventList\">\n        <div scheduleNoData class=\"calendar-edit-schedule\">\n          <p>{{this.translateMap.get('No_Schedule') ? this.translateMap.get('No_Schedule') : 'You have no schedule for today'}}</p>\n        </div>\n      </app-ui-calendar-event-list>\n    </ng-container>\n  </app-ui-form-layout-col>\n</ng-template>\n<!-- end: evenListContent -->\n",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:flex;height:100%}:host>app-ui-form-layout-col{padding-left:0!important;margin-bottom:0!important}:host>app-ui-form-layout-col:first-child{min-width:calc(100% - 200px);padding-left:20px!important;padding-right:20px}:host>app-ui-form-layout-col:last-child{max-width:200px}:host .calendar-edit-alert-switcher{display:inline-block;width:56px}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-container{padding-top:30px}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-container app-ui-text-type-item:last-child{padding-bottom:20px;border-bottom:1px solid #ececec}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-content{width:100%;min-width:1px}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-content>p{display:block;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host ::ng-deep .calendar-event-list-no-data{display:inline-block;width:calc(100% + 6px);height:100%}:host ::ng-deep .calendar-event-list-no-data ::ng-deep app-ui-text-type .ui-text-type-container{width:100%;height:100%;padding:0}:host ::ng-deep .calendar-edit-schedule{width:100%;height:100%;margin:0;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTk4IiBoZWlnaHQ9IjY3NCIgdmlld0JveD0iMCAwIDE5OCA2NzQiPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMTk4djY3NUgweiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xKSI+CiAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDxnIGZpbGw9IiNFQ0VDRUMiIG1hc2s9InVybCgjYikiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTQ4LjI0NSAxMC44NWMzLjAwNCAwIDUuMjg5IDMuNTc4IDguMDA0IDIuOTQzIDUuOTMyLTEuMzg5IDguMzctOS4wMjkgMTQuODc5LTkuMDI5IDUuMDI1IDAgNy45MzQgNi4yMzYgMTIuNTcgNS44MTRDMTkxLjA0MiA5LjkwOCAxOTQuMzUyIDAgMjAyLjI2IDBjNy4zMSAwIDEwLjkwMyA4LjQ4MiAxNy42NTcgOS4yMyAzLjk3OS40NDIgNi44ODktNC4zMzYgMTEuMjEtNC4zMzYgOC4xNTUgMCA4Ljg3MiAzLjI0MiAxNi4zOCA1LjU4MiAyLjE1NC42NzIgMy44MDMgNC44NzIgNi4yMzggNC44NzIgMi44NjMgMCA1LjQwMy44OTggNy4wMzMgMi44OThIMTM2LjAwM2MyLjA5Mi00IDYuNzgtNy4zOTYgMTIuMjQyLTcuMzk2Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNFQ0VDRUMiIGQ9Ik0yMzEuODYyIDE3NC4zNTJjLTEuNTE3IDAtMi42NyAxLjc2NS00LjA0MSAxLjQ1Mi0yLjk5NS0uNjg2LTQuMjI2LTQuNDU0LTcuNTEzLTQuNDU0LTIuNTM2IDAtNC4wMDUgMy4wNzYtNi4zNDYgMi44NjgtMy43MDktLjMzLTUuMzc5LTUuMjE4LTkuMzcyLTUuMjE4LTMuNjkyIDAtNS41MDUgNC4xODQtOC45MTUgNC41NTMtMi4wMS4yMTgtMy40NzktMi4xMzktNS42NjEtMi4xMzktNC4xMTYgMC00LjQ3OCAxLjYtOC4yNyAyLjc1My0xLjA4OC4zMzItMS45MiAyLjQwNC0zLjE1IDIuNDA0LTEuNDQ0IDAtMi43MjcuNDQyLTMuNTUgMS40MjloNjNjLTEuMDU3LTEuOTczLTMuNDI1LTMuNjQ4LTYuMTgyLTMuNjQ4TTU5Ljc4NCAzMTQuNzA0Yy0zLjAxIDAtNS4yOTggMy41My04LjAxOCAyLjkwMy01Ljk0Mi0xLjM3LTguMzg0LTguOTA3LTE0LjkwNi04LjkwNy01LjAzMiAwLTcuOTQ3IDYuMTUyLTEyLjU5MyA1LjczNUMxNi45MSAzMTMuNzc1IDEzLjU5NiAzMDQgNS42NzQgMzA0Yy03LjMyNiAwLTEwLjkyMyA4LjM2OC0xNy42OSA5LjEwNi0zLjk4Ni40MzYtNi45MDItNC4yNzgtMTEuMjMyLTQuMjc4LTguMTY3IDAtOC44ODUgMy4xOTgtMTYuNDA3IDUuNTA3LTIuMTYuNjYzLTMuODEgNC44MDYtNi4yNTEgNC44MDYtMi44NjYgMC01LjQxMi44ODYtNy4wNDYgMi44NTloMTI1Yy0yLjA5NS0zLjk0Ni02Ljc5My03LjI5Ni0xMi4yNjQtNy4yOTZNMTYuMDU5IDY2My4wMTNjNC4yMDYtNi43NTMgNy41ODItMTQuODc0IDE1LjMyMy0xNy44MzYgNy4yNDQtMi43NyAxNS42NTYgNy44NTMgMjMuMjY4IDYuMTUgMTUuNTcyLTMuNDg4IDE3LjM3Mi01NS4wNjQgMzcuMDc3LTU1LjA2NCAxOC43MDkgMCA1MS4yNzcgNDEuMTkgNzcuMjIyIDI2LjEgMjQuOTAyLTE0LjQ4MyAzOS41ODYtNTguOTcgNjAuMTItNjUuMjUxIDM5LjYtMTIuMTEzIDQ3Ljg3IDc4LjcyNiA3Ni4zMjcgNzguNzI2IDguMDUgMCAxMy45MDQtMjEuNzMgMjAuMDIxLTI0LjQzNiAxOS42OTItOC43MTMgMTAuNDIgNDcuMjYgMzguNDIgNjMuNTk4SC0zLjAxNGM2LjAyLS40NDIgMTQuODY3LTUuMjM0IDE5LjA3NC0xMS45ODd6IiBtYXNrPSJ1cmwoI2IpIi8+CiAgICAgICAgPGcgbWFzaz0idXJsKCNiKSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM3MEIxQjQiIGQ9Ik0xMDQuNDY4IDU2NWwtNyAyLjg2MWMuODI1IDcuNTg2LTE0LjA0NyAyMy4wNzQtMTQuMDQ3IDIzLjA3NGwzLjkzNy4yOXMyNS40MzQtMTYuMDk3IDE3LjExLTI2LjIyNSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjQTdBN0E3IiBkPSJNMTEwLjU4NiA1MTguNDdjMCAzLjU3NC0yLjQ4MSA2LjQ3MS01LjU0MSA2LjQ3MS0zLjA2IDAtNS41NDItMi44OTctNS41NDItNi40NzEgMC0zLjU3MyAyLjQ4MS02LjQ3IDUuNTQyLTYuNDcgMy4wNiAwIDUuNTQgMi44OTcgNS41NCA2LjQ3Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGMkEwOEEiIGQ9Ik0xMDQuODY4IDUyMS4yNjVjMi4yMjIuNzU2IDMuNSAyLjg5NiAyLjg1MSA0Ljc4LS42NDcgMS44ODUtMi45NzQgMi44LTUuMTk2IDIuMDQzLTIuMjIzLS43NTctMy40OTktMi44OTYtMi44NTMtNC43OC42NDktMS44ODUgMi45NzYtMi43OTkgNS4xOTgtMi4wNDMiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzc5QkVDMSIgZD0iTTEyMS44IDYwMS41MDRsLTMzLjM1My01LjEyNmM0LjUwOC05Ljk5NiAxMy4wNjYtOS45OTYgOC41NjktMzAuNDc0LTMuNDE3LTE1LjQ5MyAxMC41MjItMTkuOTggMTYuMjUyLTE0LjkxOGExNS4wNDIgMTUuMDQyIDAgMCAxIDIuMDMgMi4yMTFsLjA2NS4wNzdjMy42NjEgNC44MiA2LjkyNSAxMy43MDMgNi41IDI1Ljg2LS4xMjggMy43NDYtLjA2MyA2LjQ0Mi4wNjUgOC43MDUuMjMxIDQuNjc4LjY1NSA3LjQ1My0uMTI4IDEzLjY2NSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjQkFFMEU3IiBkPSJNMTIwLjYgNjA2Ljg5M2MuNTEzLTEuMzAxIDEuNDAyLTMuODk4IDEuMTM3LTguMzIyTDg4LjExNCA1OTZhMjcuNDE1IDI3LjQxNSAwIDAgMC0uNTc3IDIuMDA0Yy00LjU0My4wNjgtOC44NDguMzk3LTExLjg2MyAxLjMxNS0xNi42MiA1LjA1NC0xOS4zOSAzMy4zNDMtMTkuMzkgMzMuMzQzbDMuMDUgMS4xMzlzNC43NC0xMy45NDggMTIuNTQ2LTIwLjExN2MtLjA2IDExLjA5IDEzLjUwMiAyOC44MzkgMTMuNTAyIDI4LjgzOWwzLjY3LS44ODRzLTEyLjgxNS0yMi44OTItMi4xMDMtMjUuNjAxYzcuNTgzLTEuOTE4IDExLjAyNC0yLjE0IDE3LjczNC0yLjExNiAzLjA5NC4zMyA2LjI3MS40MjUgOS41Mi4wNTQgMy41NDYtLjY1MyA1LjQ0LTQuNjQ1IDYuMzk3LTcuMDgzIi8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM3MEIxQjQiIGQ9Ik0xMjEuNDYyIDU4Ny44MmMtNi4wNTEgNS44NjYtMTUuNjIyIDkuODkzLTE1LjYyMiA5Ljg5M2wtNS4zMzItMi42MnMyMS4yMzctNS43NzggMTcuNjUyLTE0LjU0OGMtMi45OC03LjMxLTcuNDEzLTE4LjQ3LTguNDQtMjEuNTI2LS44MjItMi4zOS0uNjA1LTExLjkzOSA0Ljc2Ni02LjIyNS4xMTYuMTE2LjIzMS4yNTYuMzQ3LjM4M2wuMDY0LjA3N2MzLjY2MiA0LjgyIDYuOTI1IDEzLjcwMyA2LjUwMSAyNS44Ni0uMTI5IDMuNzQ2LS4wNjMgNi40NDIuMDY0IDguNzA1Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM3OUJFQzEiIGQ9Ik0xMTQuNDkgNTUyLjY5YzMuODcgMy42MTQgOC4xMjYgMTYuMTMgMTEuMDQ5IDIyLjQ0MSA1LjUwNCAxMS44ODItMjEuMjk0IDIxLjEyMy0yMS4yOTQgMjEuMTIzbC0zLjczNy0xLjI2NXMyMS45Mi0xMC40NCAxNy41MzQtMTguODM3Yy0zLjUzOC02Ljc3Ni01LjkyLTEwLjM2LTEwLjA2Ny0xOC40MjktMi41Ny00Ljk5Ny0uMzY5LTExLjQ1NyA2LjUxNC01LjAzMyIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRTlENkI4IiBkPSJNMTAyLjEzIDU5NC4zOTNjLTIuMzMtMS4wMS01LjEyMi4wODUtNS41NjkgMS41MTgtLjQ0NiAxLjQzMyAxLjEwOCAyLjE0OCA1LjE2IDIuNTI4IDQuMDUuMzc5IDQuNTYtMi4yMiA0LjU2LTIuMjJsLTQuMTUyLTEuODI2TTg1LjY4MSA2MzkuNDcybC01LjA4OCA1Ljk2N2MtLjU1LjY0OC4yMSAxLjUzNyAxLjAzOCAxLjIxbDcuNjEtMy4wMDJjLjY4Ni0uMjcuOTI5LTEuMDQyLjUwNi0xLjZsLTEuOTA4LTIuNTIxYy0uNTEzLS42NzgtMS42MDMtLjcwNS0yLjE1OC0uMDU0TTU4LjU1OCA2MzEuNTU0bC05LjI4LTQuNWMtLjc5OC0uMy0xLjM4My43MTQtLjc5NSAxLjM4bDcuMzI1IDcuODYyYy40ODYuNTUxIDEuMjk4LjUyIDEuNjg1LS4wNjVsMS43NDEtMi42MzdjLjQ2OC0uNzA5LjEyNy0xLjczOS0uNjc2LTIuMDRNMTA2LjUxIDUzNS43NDNjLjk3IDUuMDggMS40NTIgMTAuNjM3IDMuNTE1IDE0LjU4OS41MjQgMS4wMDEuMzk2IDIuMTEyLS40MiAyLjY2Ni0xLjI3Ny44NjQtMy40OCAxLjYxMi02LjU3Mi4wMTctMS4wNzQtLjU1NS0xLjY5LTEuNzMzLTEuNDgtMi43NDkuNDY1LTIuMjM5IDEuMTItNi40NTQuNDA5LTkuOTE2LTEuMDI0LTQuOTcyIDMuNzctOC42ODUgNC41NDgtNC42MDciLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0U5RDZCOCIgZD0iTTk0LjQ0NCA1NDEuODE0YzQuODAxIDkuMTggOS42NTQgMTAuMDc0IDEyLjg4LTMuOTc2IDMuMjI2LTE0LjA1MS0yMS45MzMtMTMuMzMzLTEyLjg4IDMuOTc2Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNBN0E3QTciIGQ9Ik0xMDIuOTE4IDUyM2MtMi4yNSAwLTQuMjYzIDEuMTg2LTUuNjEgMy4wNS0xLjUuNTQ1LTMuMDg0IDEuMzgtNC42ODMgMi41MzctMy42MjcgMi42MjQtOS4yMjUgMTIuMTM2LTguMDM2IDEyLjQyNiA0LjEyOCAxLjAwOCAxMC4yOTQuNDA4IDE1LjA3MS0xLjc3Ni45ODMuNTcgMi4wODYuODk5IDMuMjU4Ljg5OSA0LjA1MyAwIDcuMzM4LTMuODM2IDcuMzM4LTguNTY4IDAtNC43MzItMy4yODUtOC41NjgtNy4zMzgtOC41NjgiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0U5RDZCOCIgZD0iTTEwNC43NDUgNTM4LjQxOWMtLjY5OSAyLjUxNC4yMjggMy4zNTcgMy42OTQuOTQ4IDMuNDY2LTIuNDA4LTIuMzc2LTUuNjktMy42OTQtLjk0OCIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRDNDNkNDIiBkPSJNMTA4LjkwOCA2MDAuMTU0SDgzLjQ3YTEuMDU0IDEuMDU0IDAgMCAxLTEuMDU0LTEuMDQ4di0uMDU4YzAtLjU3Ni40NzUtMS4wNDggMS4wNTQtMS4wNDhoMjUuNDM4Yy41NzkgMCAxLjA1My40NzIgMS4wNTMgMS4wNDh2LjA1OGMwIC41NzctLjQ3NCAxLjA0OC0xLjA1MyAxLjA0OCIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRTRFNERGIiBkPSJNOTcuODM4IDYwMC41NzZoLTIzLjExYy0xLjIxOSAwLTIuNDI4LS45OTItMi42ODYtMi4yMDZsLTMuNjQ4LTE3LjE2M2MtLjI1OC0xLjIxNC41MjktMi4yMDcgMS43NS0yLjIwN2gyMy4xMDljMS4yMTkgMCAyLjQyOC45OTMgMi42ODYgMi4yMDdsMy42NDkgMTcuMTYzYy4yNTggMS4yMTQtLjUzIDIuMjA2LTEuNzUgMi4yMDYiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=);background-repeat:no-repeat;background-size:cover;background-position:center bottom}:host ::ng-deep .calendar-edit-schedule p{padding:0 25px;font-size:.875rem;font-weight:300;line-height:2;letter-spacing:.2px;text-align:center;color:#414141}:host ::ng-deep .calendar-edit-schedule p:first-child{padding-top:200px}@media screen and (max-width:1023px){:host>app-ui-form-layout-col:first-child{padding-left:0!important}:host>app-ui-form-layout-col:first-child,:host>app-ui-form-layout-col:last-child{max-width:100%}:host .calendar-edit-allDay-date ::ng-deep .ui-datepicker{margin-top:15px}:host [calendarEditAlertRow] app-ui-form-layout-col:last-child{flex:1!important;max-width:100%!important}}"]
                    }] }
        ];
        CalendarEditComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        CalendarEditComponent.propDecorators = {
            isSaveClick: [{ type: i0.Input }],
            calendarEventDetail: [{ type: i0.Input }],
            optionMap: [{ type: i0.Input }],
            translateMap: [{ type: i0.Input }],
            viewDate: [{ type: i0.Input }],
            todayCalendarEvent: [{ type: i0.Input }],
            saveEvent: [{ type: i0.Output }],
            startDateChange: [{ type: i0.Output }],
            onResize: [{ type: i0.HostListener, args: ['window:resize', ['$event'],] }]
        };
        return CalendarEditComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarFilterComponent = /** @class */ (function () {
        function CalendarFilterComponent() {
            this._optionMap = new Map();
            this.activityTypeList = []; // DB中所有activityType
            this.currentFilterOptionList = [];
            this.activityTypeListChange = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        CalendarFilterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        Object.defineProperty(CalendarFilterComponent.prototype, "optionMap", {
            get: /**
             * @return {?}
             */ function () { return this._optionMap; },
            set: /**
             * @param {?} optionMap
             * @return {?}
             */ function (optionMap) {
                var _this = this;
                this._optionMap = optionMap;
                this.activityTypeList = this._optionMap.get('Calendar_Type');
                this.activityTypeList.forEach(( /**
                 * @param {?} codeItem
                 * @return {?}
                 */function (codeItem) {
                    if (codeItem.isCheck) {
                        _this.currentFilterOptionList.push(codeItem.getCode());
                    }
                }));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CalendarFilterComponent.prototype.onActivityFilter = /**
         * @return {?}
         */
            function () {
                this.activityTypeListChange.emit(this.activityTypeList);
            }; // filter event
        // filter event
        /**
         * @param {?} item
         * @return {?}
         */
        CalendarFilterComponent.prototype.toActivityColor =
            // filter event
            /**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return JSON.parse(item.getArguments()).color;
            };
        CalendarFilterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snd-calendar-filter',
                        template: "<ng-container *ngIf=\"activityTypeList\">\n  <div class=\"calendar-filter-item\" *ngFor=\" let codeItem of activityTypeList\">\n    <app-ui-form-checkbox [(nxValue)]=\"codeItem.isCheck\" [isDisable]=\"false\" (nxValueChange)=\"onActivityFilter()\" [colorCode]=\"toActivityColor(codeItem)\" >\n      <ng-container checkboxText=\"style2\">{{codeItem.displayText}}</ng-container>\n    </app-ui-form-checkbox>\n  </div>\n</ng-container>\n",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.calendar-filter-item:not(:last-child){margin-bottom:25px}.calendar-filter-item ::ng-deep .nx-checkbox .nx-checkbox__control{margin-top:0}.calendar-filter-item ::ng-deep .form-checkbox .check-text{line-height:1.4;letter-spacing:.2px}"]
                    }] }
        ];
        CalendarFilterComponent.ctorParameters = function () { return []; };
        CalendarFilterComponent.propDecorators = {
            optionMap: [{ type: i0.Input }],
            activityTypeListChange: [{ type: i0.Output }]
        };
        return CalendarFilterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarModule = /** @class */ (function () {
        function CalendarModule() {
        }
        CalendarModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [CalendarComponent, CalendarEditComponent, CalendarDetailComponent, CalendarFilterComponent],
                        imports: [
                            icon.NxIconModule,
                            ngxNdbx.NxButtonModule,
                            formfield.NxFormfieldModule,
                            datefield.NxDatefieldModule,
                            datefield.NxNativeDateModule,
                            ui.UIModule,
                            i1.CoreModule,
                            common.CommonModule,
                            forms.FormsModule
                        ],
                        exports: [
                            CalendarEditComponent, CalendarComponent, CalendarDetailComponent
                        ]
                    },] }
        ];
        return CalendarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarEventAddAPI = /** @class */ (function () {
        function CalendarEventAddAPI(DaoFactory) {
            this._DaoFactory = DaoFactory;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        CalendarEventAddAPI.prototype.setCalendarEvent = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._calendarEvent = value;
            };
        /**
         * @return {?}
         */
        CalendarEventAddAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'addCalendarEvent';
            };
        /**
         * @return {?}
         */
        CalendarEventAddAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/addCalendarEvent.json';
            };
        /**
         * @return {?}
         */
        CalendarEventAddAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var calendarObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar");
                    /** @type {?} */
                    var dao = _this._DaoFactory.getDefaultDao();
                    if (calendarObj != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        calendarObj.setValue('Title', _this._calendarEvent.title);
                        calendarObj.setValue('Location', _this._calendarEvent.location);
                        calendarObj.setValue('CalendarType', _this._calendarEvent.activity);
                        if (_this._calendarEvent.allDay == true) {
                            calendarObj.setValue('IsAllDay', 'Y');
                        }
                        else {
                            calendarObj.setValue('IsAllDay', 'N');
                        }
                        calendarObj.setValue('StartTime', _this._calendarEvent.start.getTime());
                        calendarObj.setValue('EndTime', _this._calendarEvent.end.getTime());
                        if (_this._calendarEvent.isAlert == true) {
                            calendarObj.setValue('IsAlert', 'Y');
                        }
                        else {
                            calendarObj.setValue('IsAlert', 'N');
                        }
                        calendarObj.setValue('Alert1', _this._calendarEvent.alert1);
                        calendarObj.setValue('Alert2', _this._calendarEvent.alert2);
                        calendarObj.setValue('Alert3', null);
                        calendarObj.setValue('Remark', _this._calendarEvent.remark);
                        dao.insertByTable(calendarObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CalendarEventAddAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarEventDeleteAPI = /** @class */ (function () {
        function CalendarEventDeleteAPI(DaoFactory) {
            this._DaoFactory = DaoFactory;
        }
        Object.defineProperty(CalendarEventDeleteAPI.prototype, "clientID", {
            set: /**
             * @param {?} clientID
             * @return {?}
             */ function (clientID) {
                this._clientID = clientID;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CalendarEventDeleteAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'deleteCalendarEvent';
            };
        /**
         * @return {?}
         */
        CalendarEventDeleteAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/deleteCalendarEvent.json';
            };
        /**
         * @return {?}
         */
        CalendarEventDeleteAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var calendarObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar");
                    /** @type {?} */
                    var dao = _this._DaoFactory.getDefaultDao();
                    if (calendarObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        calendarObj.addRestriction(new i1.EqualRestriction('ClientID', [_this._clientID]));
                        dao.deleteByTable(calendarObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CalendarEventDeleteAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarEventDetailAPI = /** @class */ (function () {
        function CalendarEventDetailAPI(DaoFactory) {
            this._DaoFactory = DaoFactory;
        }
        Object.defineProperty(CalendarEventDetailAPI.prototype, "ClientID", {
            set: /**
             * @param {?} clientID
             * @return {?}
             */ function (clientID) {
                this._clientID = clientID;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CalendarEventDetailAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getCalendarEventDetail';
            };
        /**
         * @return {?}
         */
        CalendarEventDetailAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getCalendarEventDetail.json';
            };
        /**
         * @return {?}
         */
        CalendarEventDetailAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var calendarObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar");
                    /** @type {?} */
                    var dao = _this._DaoFactory.getDefaultDao();
                    if (calendarObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        calendarObj.addRestriction(new i1.EqualRestriction('ClientID', [_this._clientID]));
                        dao.queryByTable(calendarObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CalendarEventDetailAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarEventListAPI = /** @class */ (function () {
        function CalendarEventListAPI(DaoFactory) {
            this._DaoFactory = DaoFactory;
        }
        Object.defineProperty(CalendarEventListAPI.prototype, "startTime", {
            set: /**
             * @param {?} startTime
             * @return {?}
             */ function (startTime) {
                this._startTime = startTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarEventListAPI.prototype, "endTime", {
            set: /**
             * @param {?} endTime
             * @return {?}
             */ function (endTime) {
                this._endTime = endTime;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CalendarEventListAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getCalendarEventList';
            };
        /**
         * @return {?}
         */
        CalendarEventListAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getCalendarEventList.json';
            };
        /**
         * @return {?}
         */
        CalendarEventListAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var calendarObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar");
                    /** @type {?} */
                    var dao = _this._DaoFactory.getDefaultDao();
                    if (calendarObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        calendarObj.addRestriction(new i1.GreaterOrEqualRestriction('EndTime', [_this._startTime.getTime()]));
                        calendarObj.addRestriction(new i1.LessOrEqualRestriction('StartTime', [_this._endTime.getTime()]));
                        calendarObj.addRestriction(new i1.OrderByRestriction([{ column: 'StartTime', order: 'ASC' }]));
                        // calendarObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' },{ column: 'EndTime', order: 'DESC' }]));
                        dao.queryByTable(calendarObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            console.log(resp);
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CalendarEventListAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarEventUpdateAPI = /** @class */ (function () {
        function CalendarEventUpdateAPI(DaoFactory) {
            this._DaoFactory = DaoFactory;
        }
        Object.defineProperty(CalendarEventUpdateAPI.prototype, "ClientID", {
            set: /**
             * @param {?} clientID
             * @return {?}
             */ function (clientID) {
                this._clientID = clientID;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        CalendarEventUpdateAPI.prototype.setCalendarEvent = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._calendarEvent = value;
            };
        /**
         * @return {?}
         */
        CalendarEventUpdateAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'updateCalendarEvent';
            };
        /**
         * @return {?}
         */
        CalendarEventUpdateAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/updateCalendarEvent.json';
            };
        /**
         * @return {?}
         */
        CalendarEventUpdateAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var calendarObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar");
                    /** @type {?} */
                    var dao = _this._DaoFactory.getDefaultDao();
                    if (calendarObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        calendarObj.addRestriction(new i1.EqualRestriction('ClientID', [_this._clientID]));
                        calendarObj.setValue('CalendarID', _this._calendarEvent.calendarID);
                        calendarObj.setValue('Title', _this._calendarEvent.title);
                        calendarObj.setValue('Location', _this._calendarEvent.location);
                        calendarObj.setValue('CalendarType', _this._calendarEvent.activity);
                        if (_this._calendarEvent.allDay == true) {
                            calendarObj.setValue('IsAllDay', 'Y');
                        }
                        else {
                            calendarObj.setValue('IsAllDay', 'N');
                        }
                        calendarObj.setValue('StartTime', _this._calendarEvent.start.getTime());
                        calendarObj.setValue('EndTime', _this._calendarEvent.end.getTime());
                        if (_this._calendarEvent.isAlert == true) {
                            calendarObj.setValue('IsAlert', 'Y');
                        }
                        else {
                            calendarObj.setValue('IsAlert', 'N');
                        }
                        calendarObj.setValue('Alert1', _this._calendarEvent.alert1);
                        calendarObj.setValue('Alert2', _this._calendarEvent.alert2);
                        calendarObj.setValue('Alert3', _this._calendarEvent.alert3);
                        calendarObj.setValue('Remark', _this._calendarEvent.remark);
                        dao.updateByTable(calendarObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CalendarEventUpdateAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CalendarService = CalendarService;
    exports.CalendarEventDetail = CalendarEventDetail;
    exports.CalendarComponent = CalendarComponent;
    exports.CalendarDetailComponent = CalendarDetailComponent;
    exports.CalendarEditComponent = CalendarEditComponent;
    exports.CalendarFilterComponent = CalendarFilterComponent;
    exports.CalendarModule = CalendarModule;
    exports.CalendarEventAddAPI = CalendarEventAddAPI;
    exports.CalendarEventDeleteAPI = CalendarEventDeleteAPI;
    exports.CalendarEventDetailAPI = CalendarEventDetailAPI;
    exports.CalendarEventListAPI = CalendarEventListAPI;
    exports.CalendarEventUpdateAPI = CalendarEventUpdateAPI;
    exports.ɵd = CalendarDetailComponent;
    exports.ɵc = CalendarEditComponent;
    exports.ɵe = CalendarFilterComponent;
    exports.ɵa = CalendarComponent;
    exports.ɵb = CalendarService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=allianzSND-calendar.umd.js.map