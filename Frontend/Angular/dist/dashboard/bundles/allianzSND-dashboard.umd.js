(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('rxjs'), require('date-fns'), require('@allianzSND/integration-calendar-customer'), require('@allianzSND/ui'), require('@allianzSND/progress'), require('@angular/core'), require('@allianzSND/core'), require('@allianzSND/goal'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@allianzSND/dashboard', ['exports', '@angular/common', 'rxjs', 'date-fns', '@allianzSND/integration-calendar-customer', '@allianzSND/ui', '@allianzSND/progress', '@angular/core', '@allianzSND/core', '@allianzSND/goal', 'rxjs/operators'], factory) :
    (factory((global.allianzSND = global.allianzSND || {}, global.allianzSND.dashboard = {}),global.ng.common,global.rxjs,global.dateFns,global.integrationCalendarCustomer,global.ui,global.progress,global.ng.core,global.i1,global.goal,global.rxjs.operators));
}(this, (function (exports,common,rxjs,dateFns,integrationCalendarCustomer,ui,progress,i0,i1,goal,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardListComponent = /** @class */ (function () {
        function DashboardListComponent(APP_CONFIG, showRule, translateService, elementRef) {
            this.APP_CONFIG = APP_CONFIG;
            this.showRule = showRule;
            this.translateService = translateService;
            this.elementRef = elementRef;
            // birthdat tab tag .. if the birthday date is today, show tag 
            this.isBirthdayToday = true;
            // tab schedule and birthay has data or not
            this.isHasScheduleData = true;
            this.isHasBirthdayData = true;
            this.translateMap = new Map();
            this._calendarEventList = [];
            this.isCalendarEventListBefore = [];
            this._birthdayItemList = [];
            this.searchBirthdayAddN = this.APP_CONFIG[this.APP_CONFIG.ENV].DASHBOARD.SearchBirthdayRange.addN;
            this.beforeTodayBirthdayItemList = [];
            this.afterTodayBirthdayItemList = [];
            //private calendarUtils = new CalendarUtils();
            this.eventListBGColor = '#fff';
            this.language = new i1.Language();
            //calendar-ui config setting
            this.viewTypeIndex = 2; // 'month'
            this.tabIndex = 0;
            this.tabHeight = 0;
            //public _viewDate = new Date(); //current date
            this._viewDate = new Date();
            this.weekStartsOn = 1; // Monday
            this.today = new Date();
            this.yearVal = this.viewDate.getFullYear();
            this.clickCalendarItem = new i0.EventEmitter();
            this.completeLoadEvent = new i0.EventEmitter();
            this.updateCalendarEventDetail = new i0.EventEmitter();
            this.clickDate = new i0.EventEmitter();
        }
        Object.defineProperty(DashboardListComponent.prototype, "calendarEventList", {
            get: /**
             * @return {?}
             */ function () {
                return this._calendarEventList;
            },
            set: /**
             * @param {?} calendarEventList
             * @return {?}
             */ function (calendarEventList) {
                this._calendarEventList = calendarEventList;
                this.isHasScheduleData = this.judgeIsScheduleHasData();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardListComponent.prototype, "birthdayItemList", {
            get: /**
             * @return {?}
             */ function () {
                return this._birthdayItemList;
            },
            set: /**
             * @param {?} birthdayItemList
             * @return {?}
             */ function (birthdayItemList) {
                var _this_1 = this;
                if (birthdayItemList.length == 0) {
                    this.isHasBirthdayData = false;
                }
                else {
                    this.isHasBirthdayData = true;
                }
                this._birthdayItemList = birthdayItemList;
                this.beforeTodayBirthdayItemList = [];
                this.afterTodayBirthdayItemList = [];
                //convert to before & after array
                this.beforeTodayBirthdayItemList = this._sortBirthDayListByName(this._birthdayItemList.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return _this_1.itemBirthdayIsBeforeToday(x); })));
                this.afterTodayBirthdayItemList = this._sortBirthDayListByName(this._birthdayItemList.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return !_this_1.itemBirthdayIsBeforeToday(x); })));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardListComponent.prototype, "viewDate", {
            get: /**
             * @return {?}
             */ function () {
                return this._viewDate;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this._viewDate.getTime() != val.getTime()) {
                    this.changeViewDate(new Date(val));
                    this.yearVal = this._viewDate.getFullYear();
                }
            } // end set viewDate
            ,
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        DashboardListComponent.prototype.tabChangeEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this_1 = this;
                /** @type {?} */
                var _this = this;
                /** @type {?} */
                var tabContentBlock = _this.elementRef.nativeElement.querySelector(".layut-home-list-block .tab-content-block");
                tabContentBlock.style.opacity = 0;
                this.tabHeight = this.tabContent.nativeElement.scrollHeight;
                this.tabIndex = event;
                this.todayDisplayStr = this.convertCalendarDateToShow(this.today);
                /** @type {?} */
                var endDate = dateFns.addDays(this.today, this.searchBirthdayAddN);
                this.endDateDisplayStr = this.convertCalendarDateToShow(endDate);
                console.log("this.tabIndex:", this.tabIndex);
                if (this.tabIndex === 0) {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this_1.scrollToContent(0);
                        tabContentBlock.style.opacity = 1;
                    }), 100);
                }
                else if (this.tabIndex === 1) {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this_1.scrollToContent(1);
                        tabContentBlock.style.opacity = 1;
                    }), 100);
                }
            };
        //tab content scroll to today top
        //tab content scroll to today top
        /**
         * @param {?} tabOpenIndex
         * @return {?}
         */
        DashboardListComponent.prototype.scrollToContent =
            //tab content scroll to today top
            /**
             * @param {?} tabOpenIndex
             * @return {?}
             */
            function (tabOpenIndex) {
                //tab content scroll to spcifict position ( location on today top half )
                /** @type {?} */
                var tabContentTarget = this.tabContent.nativeElement.querySelector('.tab-content_' + tabOpenIndex);
                /** @type {?} */
                var scrollEle = tabContentTarget.querySelector('.ts-today');
                /** @type {?} */
                var scrollContent = this.tabContent.nativeElement;
                if (scrollEle !== null) {
                    // let move =  this.tabHeight + scrollEle.offsetTop - 50;
                    /** @type {?} */
                    var move = scrollEle.offsetTop - 50;
                    console.log('this.tabHeigh', this.tabHeight);
                    console.log('scrollEle.offsetTop', scrollEle.offsetTop);
                    scrollContent.scrollTop = move;
                    //console.log('move',move);
                }
            };
        /**
         * @param {?} showDate
         * @param {?} calendarItem
         * @return {?}
         */
        DashboardListComponent.prototype.onClickEventItem = /**
         * @param {?} showDate
         * @param {?} calendarItem
         * @return {?}
         */
            function (showDate, calendarItem) {
                this.clickCalendarItem.emit({ showDate: showDate, eventList: calendarItem });
                //console.log("item: ", calendarItem);
            };
        // click month day
        // click month day
        /**
         * @param {?} date
         * @return {?}
         */
        DashboardListComponent.prototype.monthDayClicked =
            // click month day
            /**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                this.clickDate.emit(date);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DashboardListComponent.prototype.switchMonthClicked = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                //console.log("in switch");
                this.clickDate.emit(date);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        DashboardListComponent.prototype.itemBirthdayIsToday = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                return (this.today.getMonth() + 1) == parseInt(item.birthdayMonth) && this.today.getDate() == parseInt(item.birthdayDate);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        DashboardListComponent.prototype.itemBirthdayIsBeforeToday = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                /** @type {?} */
                var todayDate = Date.UTC(2000, this.today.getMonth() + 1, this.today.getDate());
                /** @type {?} */
                var itemDate = Date.UTC(2000, parseInt(item.birthdayMonth), parseInt(item.birthdayDate));
                console.debug('compare birthday', todayDate, itemDate);
                return todayDate > itemDate;
            };
        /**
         * @return {?}
         */
        DashboardListComponent.prototype.judgeIsScheduleHasData = /**
         * @return {?}
         */
            function () {
                return (this._calendarEventList.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.eventList.length > 0; })).length) > 0;
            };
        /**
         * @return {?}
         */
        DashboardListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.tabChangeEvent(0);
                this.windowWidth = window.innerWidth;
                console.log("this.windowWidth", this.windowWidth);
            };
        /**
         * @return {?}
         */
        DashboardListComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this_1 = this;
                this.calendarListContents.changes.subscribe(( /**
                 * @return {?}
                 */function () {
                    _this_1.scrollToContent(0);
                }));
            };
        /**
         * @param {?} firstName
         * @param {?} lastName
         * @return {?}
         */
        DashboardListComponent.prototype.convertNameToShow = /**
         * @param {?} firstName
         * @param {?} lastName
         * @return {?}
         */
            function (firstName, lastName) {
                if (this.showRule) {
                    return this.showRule.convertName(firstName, lastName);
                }
                else {
                    /** @type {?} */
                    var firstNameStr = i1.StringUtils.isNotEmpty(firstName) ? firstName : '';
                    /** @type {?} */
                    var lastNameStr = i1.StringUtils.isNotEmpty(lastName) ? (' ' + lastName) : '';
                    return firstNameStr + lastNameStr;
                }
            };
        /**
         * @param {?} month
         * @param {?} date
         * @return {?}
         */
        DashboardListComponent.prototype.convertBirthdayToShow = /**
         * @param {?} month
         * @param {?} date
         * @return {?}
         */
            function (month, date) {
                /** @type {?} */
                var combineDate = new Date(dateFns.getYear(new Date()) + '/' + month + '/' + date);
                return this._convertDateWithoutYear(combineDate);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DashboardListComponent.prototype.convertCalendarDateToShow = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._convertDateWithoutYear(date);
            };
        /**
         * @private
         * @param {?} date
         * @return {?}
         */
        DashboardListComponent.prototype._convertDateWithoutYear = /**
         * @private
         * @param {?} date
         * @return {?}
         */
            function (date) {
                if (this.showRule) {
                    return this.showRule.convertDateWithoutYear(date);
                }
                else {
                    return dateFns.format(date, 'MM/dd');
                }
            };
        /**
         * @private
         * @param {?} birthdayItemList
         * @return {?}
         */
        DashboardListComponent.prototype._sortBirthDayListByName = /**
         * @private
         * @param {?} birthdayItemList
         * @return {?}
         */
            function (birthdayItemList) {
                var _this_1 = this;
                /** @type {?} */
                var cloneList = birthdayItemList.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.clone(); }));
                cloneList.sort(( /**
                 * @param {?} item1
                 * @param {?} item2
                 * @return {?}
                 */function (item1, item2) {
                    /** @type {?} */
                    var comapareBirthdayMonth = _this_1._comapare(item1.birthdayMonth, item2.birthdayMonth);
                    if (comapareBirthdayMonth !== 0) {
                        return comapareBirthdayMonth;
                    }
                    /** @type {?} */
                    var comapareBirthdayDate = _this_1._comapare(item1.birthdayDate, item2.birthdayDate);
                    if (comapareBirthdayDate !== 0) {
                        return comapareBirthdayDate;
                    }
                    /** @type {?} */
                    var item1_name = i1.StringUtils.isNotEmpty(item1.lastName) ? item1.lastName : '';
                    /** @type {?} */
                    var item2_name = i1.StringUtils.isNotEmpty(item2.lastName) ? item2.lastName : '';
                    if (!i1.StringUtils.isHasChinese(item1_name) && i1.StringUtils.isHasChinese(item2_name)) {
                        return -1;
                    }
                    else if (i1.StringUtils.isHasChinese(item1_name) && !i1.StringUtils.isHasChinese(item2_name)) {
                        return 1;
                    }
                    else {
                        return item1_name.localeCompare(item2_name, "zh-Hant");
                    }
                }));
                return cloneList;
            };
        /**
         * @private
         * @param {?} n1
         * @param {?} n2
         * @return {?}
         */
        DashboardListComponent.prototype._comapare = /**
         * @private
         * @param {?} n1
         * @param {?} n2
         * @return {?}
         */
            function (n1, n2) {
                if (n1 < n2) {
                    return -1;
                }
                else if (n1 > n2) {
                    return 1;
                }
                else {
                    return 0;
                }
            };
        DashboardListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-dashboard-list',
                        template: "<div class=\"layut-home-list-block\">\n  <!-- top calendar -->\n\n  <app-ui-calendar-month-collapse class=\"calendar-block\" [displayMonthFormat]=\"'MM/dd EEE'\" [today]=\"today\"\n    [viewDate]=\"viewDate\" [weekStartsOn]=\"weekStartsOn\" [translateMap]=\"translateMap\"\n    (onClickDate)=\"monthDayClicked($event)\" [eventList]=\"eventMonthList\" (onSwitchMonth)=\"switchMonthClicked($event)\">\n  </app-ui-calendar-month-collapse>\n  <!-- end of tab calendar -->\n  <!-- tab detail block -->\n  <!-- tab -->\n  <div class=\"tab-btn-block\">\n    <app-ui-tab-style1 tabInfo [action]=\"'dashboardListTab'\" (onTabChildClick)=\"tabChangeEvent($event)\">\n      <app-ui-tab-child>{{language.homeSchedule | translate}}</app-ui-tab-child>\n      <app-ui-tab-child>{{language.homeBirthday | translate}}</app-ui-tab-child>\n    </app-ui-tab-style1>\n  </div>\n\n  <!-- end of tab -->\n\n  <!-- tab content -->\n  <div #tabContent class=\"tab-content-block\" [ngClass]=\"windowWidth >= 1024 ? 'stop-scroll-block' :''\">\n    <div class=\"tab-content_1 active\" *ngIf=\"tabIndex===1\" [ngClass]=\"{'fullHeight': !isHasBirthdayData}\">\n      <!-- birthday -->\n      <ng-container #birthdayList *ngIf=\"isHasBirthdayData; else noBirthdayData\">\n        <div class=\"tab-content-detail\">\n          <ul class=\"list-text-block\">\n            <li class=\"list-text-item style-grey\" *ngFor=\"let item of beforeTodayBirthdayItemList\">\n              <p class=\"list-text_title\"> {{convertNameToShow(item.firstName, item.lastName)}} </p>\n              <p class=\"list-text_date\"> {{convertBirthdayToShow(item.birthdayMonth,item.birthdayDate)}} </p>\n            </li>\n          </ul>\n          <div class=\"title-sm\"> {{ todayDisplayStr + ' - ' + endDateDisplayStr }} </div>\n          <ul class=\"list-text-block ts-today\">\n            <li class=\"list-text-item\" *ngFor=\"let item of afterTodayBirthdayItemList\">\n              <p class=\"list-text_title\"> {{convertNameToShow(item.firstName, item.lastName)}} </p>\n              <p class=\"list-text_date\"> {{convertBirthdayToShow(item.birthdayMonth,item.birthdayDate)}} </p>\n              <span *ngIf=\"itemBirthdayIsToday(item)\" class=\"tag\">{{language.today | translate}}</span>\n            </li>\n          </ul>\n        </div>\n        <!-- end of tab detail -->\n      </ng-container>\n      <!-- end of birthday -->\n      <!-- no data -->\n      <ng-template #noBirthdayData>\n        <div class=\"tab-content-detail skelton-layout nodata-layout\">\n          <div class=\"theme-loading\" style=\"background-image:url('assets/img/nodata-dashboard-birthday.svg')\">\n            <p class=\"nodata-text\">{{language.noBirthday | translate}}</p>\n          </div>\n        </div>\n      </ng-template>\n      <!-- end of no data -->\n\n    </div>\n    <div class=\"tab-content_0 active\" *ngIf=\"tabIndex===0\" [ngClass]=\"{'fullHeight': !isHasScheduleData}\">\n      <!-- event list -->\n      <ng-container *ngIf=\"isHasScheduleData; else noScheduleData\">\n        <ng-container #calendarList *ngFor=\"let calendar of _calendarEventList; let isCalendarListReady = last\">\n          <div *ngIf=\"calendar.eventList.length > 0\" class=\"schedule-list-block\"\n            [ngClass]=\"[calendar.isToday ? 'ts-today': '']\">\n            <div class=\"title-sm\"> {{convertCalendarDateToShow(calendar.showDate)}} </div>\n            <!-- <div *ngIf=\"calendar.eventList.length == 0\" class=\"tab-content-detail\">\n                <p class=\"text-no\">No appointment</p>\n              </div> -->\n            <app-ui-calendar-event-list class=\"tab-content-detail\" [translateMap]=\"translateMap\"\n              [colorCode]=\"eventListBGColor\" [eventList]=\"calendar.eventList\"\n              [textColorStyle]=\"calendar.isBeforeToday ? 'grey': ''\"\n              (clickEvent)=\"onClickEventItem(calendar.showDate, $event)\">\n            </app-ui-calendar-event-list>\n\n          </div>\n        </ng-container>\n      </ng-container>\n      <!-- end event list -->\n      <!-- no data -->\n      <ng-template #noScheduleData>\n        <div class=\"tab-content-detail skelton-layout nodata-layout\">\n          <div class=\"theme-loading\" style=\"background-image:url('assets/img/nodata-dashboard-schedule.svg')\">\n            <p class=\"nodata-text\">{{language.noSchedule | translate}}</p>\n          </div>\n        </div>\n      </ng-template>\n      <!-- end of no data -->\n\n    </div>\n  </div>\n\n  <!-- end of tab content -->\n\n  <!-- end of tab detail block -->\n</div>",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}[class*=tab-content_]{opacity:0;transition:none;position:absolute;z-index:-1;-webkit-transform-origin:top;transform-origin:top}[class*=tab-content_]:not(.active) *{display:none}[class*=tab-content_].active{position:relative;opacity:1;z-index:1;transition:.2s;display:flex;flex-wrap:wrap}.tab-content-block{height:100%;opacity:0}.tab-content-block [class*=tab-content_].fullHeight{height:100%}.tab-content-block .nodata-layout{height:100%;background-color:#f5f5f5}.tab-content-block .theme-loading{height:100%;background-repeat:no-repeat;background-position:right bottom;background-size:contain;display:flex;width:100%;padding:0 9%;text-align:center;justify-content:center}.tab-content-block .nodata-text{margin:130px 0 0;padding:0;font-size:.875rem;color:#414141;line-height:28px}@media (max-width:1023px){.tab-content-block .nodata-text{margin-top:20px}.tab-content-block .theme-loading{padding:0 22%}}.layut-home-list-block.active .theme-loading{background-position:0 500px!important}:host{display:block;height:100%;width:100%}.layut-home-list-block{display:flex;height:100%;flex-direction:column;width:100%}.layut-home-list-block .calendar-block{display:block;flex-shrink:0}.layut-home-list-block .tab-btn-block{display:block;padding-top:20px;flex-shrink:0}.layut-home-list-block .tab-content-block{display:block;overflow-y:auto;flex:1 1 auto;height:100%;margin-top:1px}.layut-home-list-block .tab-content-detail{padding-top:20px;width:100%}.layut-home-list-block .text-no{padding:0 20px 20px;margin:0;border-bottom:1px solid #ececec}.schedule-list-block{display:inline-block;width:100%}.title-sm{background-color:#ececec;color:#414141;font-size:.75rem;font-weight:700;padding:3px 20px}.list-text-block{padding:0;list-style-type:none}.list-text-block .list-text-item{border-bottom:1px solid #c2c2c2;padding:20px}.list-text-block .list-text-item.style-grey p{color:#c2c2c2}.list-text-block p{margin:0;padding:0}.list-text-block .list-text_title{font-size:.875rem;line-height:20px;margin-bottom:5px;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.list-text-block .list-text_date{font-size:.875rem;line-height:20px;display:inline-block;vertical-align:middle}.list-text-block .tag{display:inline-block;font-size:.75rem;min-height:18px;padding:3px 5px;margin-left:12px;background-color:#003781;letter-spacing:.5px;color:#fff}"]
                    }] }
        ];
        DashboardListComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.ConfigToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.showRuleToken,] }] },
                { type: i1.TranslateService },
                { type: i0.ElementRef }
            ];
        };
        DashboardListComponent.propDecorators = {
            calendarListContents: [{ type: i0.ViewChildren, args: ['calendarList',] }],
            calendarEventList: [{ type: i0.Input }],
            eventMonthList: [{ type: i0.Input }],
            birthdayItemList: [{ type: i0.Input }],
            viewDate: [{ type: i0.Input }],
            clickCalendarItem: [{ type: i0.Output }],
            tabContent: [{ type: i0.ViewChild, args: ['tabContent',] }],
            completeLoadEvent: [{ type: i0.Output }],
            updateCalendarEventDetail: [{ type: i0.Output }],
            clickDate: [{ type: i0.Output }]
        };
        return DashboardListComponent;
    }());

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
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
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
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardMessage = /** @class */ (function () {
        function DashboardMessage(clientID, messageID, messageCatogory, messageType, title, description, argument, status, messageDate, messageTime, isPopup, linkStatus, isClick) {
            this._clientID = clientID;
            this._messageID = messageID;
            this._messageCategory = messageCatogory;
            this._messageType = messageType;
            this._title = title;
            this._description = description;
            this._argument = argument;
            this._status = status;
            this._messageDate = messageDate;
            this._messageTime = messageTime;
            this._isPopup = isPopup;
            this._linkStatus = linkStatus;
            this._isClick = isClick;
        }
        Object.defineProperty(DashboardMessage.prototype, "clientID", {
            get: /**
             * @return {?}
             */ function () {
                return this._clientID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardMessage.prototype, "messageID", {
            get: /**
             * @return {?}
             */ function () {
                return this._messageID;
            },
            set: /**
             * @param {?} messageID
             * @return {?}
             */ function (messageID) {
                this._messageID = messageID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardMessage.prototype, "messageCategory", {
            get: /**
             * @return {?}
             */ function () {
                return this._messageCategory;
            },
            set: /**
             * @param {?} messageCatogory
             * @return {?}
             */ function (messageCatogory) {
                this._messageCategory = messageCatogory;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardMessage.prototype, "messageType", {
            get: /**
             * @return {?}
             */ function () {
                return this._messageType;
            },
            set: /**
             * @param {?} messageType
             * @return {?}
             */ function (messageType) {
                this._messageType = messageType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardMessage.prototype, "title", {
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
        Object.defineProperty(DashboardMessage.prototype, "description", {
            get: /**
             * @return {?}
             */ function () {
                return this._description;
            },
            set: /**
             * @param {?} description
             * @return {?}
             */ function (description) {
                this._description = description;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardMessage.prototype, "argument", {
            get: /**
             * @return {?}
             */ function () {
                return this._argument;
            },
            set: /**
             * @param {?} argument
             * @return {?}
             */ function (argument) {
                this._argument = argument;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardMessage.prototype, "status", {
            get: /**
             * @return {?}
             */ function () {
                return this._status;
            },
            set: /**
             * @param {?} status
             * @return {?}
             */ function (status) {
                this._status = status;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardMessage.prototype, "messageDate", {
            get: /**
             * @return {?}
             */ function () {
                return this._messageDate;
            },
            set: /**
             * @param {?} messageDate
             * @return {?}
             */ function (messageDate) {
                this._messageDate = messageDate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardMessage.prototype, "messageTime", {
            get: /**
             * @return {?}
             */ function () {
                return this._messageTime;
            },
            set: /**
             * @param {?} messageTime
             * @return {?}
             */ function (messageTime) {
                this._messageTime = messageTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardMessage.prototype, "isPopup", {
            get: /**
             * @return {?}
             */ function () {
                return this._isPopup;
            },
            set: /**
             * @param {?} isPopup
             * @return {?}
             */ function (isPopup) {
                this._isPopup = isPopup;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardMessage.prototype, "linkStatus", {
            get: /**
             * @return {?}
             */ function () {
                return this._linkStatus;
            },
            set: /**
             * @param {?} linkStatus
             * @return {?}
             */ function (linkStatus) {
                this._linkStatus = linkStatus;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardMessage.prototype, "isClick", {
            get: /**
             * @return {?}
             */ function () {
                return this._isClick;
            },
            set: /**
             * @param {?} isClick
             * @return {?}
             */ function (isClick) {
                this._isClick = isClick;
            },
            enumerable: true,
            configurable: true
        });
        return DashboardMessage;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var showDashboardRuleToken = new i0.InjectionToken('showDashboardRule');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardService = /** @class */ (function () {
        function DashboardService(dispatcher, APIFactory, dateUtils, errorHandler, showRule, showDashboardRule) {
            this.dispatcher = dispatcher;
            this.APIFactory = APIFactory;
            this.dateUtils = dateUtils;
            this.errorHandler = errorHandler;
            this.showRule = showRule;
            this.showDashboardRule = showDashboardRule;
            this.isFirstInDashboard = true;
            //register api
        }
        /**
         * @return {?}
         */
        DashboardService.prototype.isFirstTime = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var result;
                if (this.isFirstInDashboard) {
                    result = true;
                    this.isFirstInDashboard = false;
                }
                else {
                    result = false;
                }
                return result;
            };
        /**
         * @param {?} clientID
         * @param {?} status
         * @return {?}
         */
        DashboardService.prototype.updateMessageStatus = /**
         * @param {?} clientID
         * @param {?} status
         * @return {?}
         */
            function (clientID, status) {
                var _this = this;
                /** @type {?} */
                var dashboardUpdateMessageStatusAPI = ( /** @type {?} */(this.APIFactory.getAPI('updateDashboardMessageStatus')));
                dashboardUpdateMessageStatusAPI.setClientID(clientID);
                dashboardUpdateMessageStatusAPI.setStatus(status);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(dashboardUpdateMessageStatusAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('dashboard-service-updateDashboardMessageStatus', data);
                        observer.next(data['Header']);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} keyword
         * @param {?} pageInfo
         * @return {?}
         */
        DashboardService.prototype.getMessageByKeyword = /**
         * @param {?} keyword
         * @param {?} pageInfo
         * @return {?}
         */
            function (keyword, pageInfo) {
                var _this = this;
                /** @type {?} */
                var dashboardGetMessageListAPI = ( /** @type {?} */(this.APIFactory.getAPI('getDashboardMessageList')));
                dashboardGetMessageListAPI.setKeyword(keyword);
                dashboardGetMessageListAPI.setPageInfo(pageInfo);
                dashboardGetMessageListAPI.isShow = true;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(dashboardGetMessageListAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.log("getMessageByKeyword data:", data);
                        /** @type {?} */
                        var messageList = data['Body'];
                        if (messageList) {
                            /** @type {?} */
                            var DashboardMessageList_1 = [];
                            messageList.forEach(( /**
                             * @param {?} item
                             * @return {?}
                             */function (item) {
                                /** @type {?} */
                                var dashboardMessage = new DashboardMessage(item.ClientID, item.MessageID, item.MessageCategory, item.MessageType, item.Title, item.Description, item.Arguments, item.Status, _this.convertDate(new Date(item.MessageTime)), _this.convertTime(new Date(item.MessageTime)), item.IsPopup, item.LinkStatus, item.IsClick);
                                DashboardMessageList_1.push(dashboardMessage);
                            }));
                            observer.next(DashboardMessageList_1);
                            observer.complete();
                        }
                        else {
                            observer.next(false);
                            observer.complete();
                        }
                    }));
                }));
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DashboardService.prototype.convertDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                if (date) {
                    if (this.showRule) {
                        return this.showRule.convertDate(date);
                    }
                    else {
                        return this.dateUtils.toDateString(date, 'yyyy-MM-dd');
                    }
                }
                else {
                    return '- -';
                }
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DashboardService.prototype.convertTime = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                if (date) {
                    return this.dateUtils.toDateString(date, 'shortTime');
                }
                else {
                    return '- -';
                }
            };
        /**
         * @param {?} performanceType
         * @param {?=} appUseMode
         * @return {?}
         */
        DashboardService.prototype.getPerformanceData = /**
         * @param {?} performanceType
         * @param {?=} appUseMode
         * @return {?}
         */
            function (performanceType, appUseMode) {
                if (appUseMode === void 0) {
                    appUseMode = '';
                }
                if (performanceType == 'T') {
                    return rxjs.from(this._getPerformanceTeamData(appUseMode));
                }
                else {
                    return rxjs.from(this._getPerformancePersonalData());
                }
            };
        /**
         * @private
         * @param {?} appUseMode
         * @return {?}
         */
        DashboardService.prototype._getPerformanceTeamData = /**
         * @private
         * @param {?} appUseMode
         * @return {?}
         */
            function (appUseMode) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, returnData, Datas, teamProgressMainResp_1, yearConfigResp, teamProgressMain, yearConfig, DataYear_1, timeBaseTitle, timeBase_1, dataType, error_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                console.log('into _getPerformanceTeamData');
                                returnData = null;
                                Datas = [];
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 3, , 4]);
                                yearConfigResp = void 0;
                                teamProgressMain = this.APIFactory.getAPI("getTeamProgressMain");
                                yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
                                return [4 /*yield*/, Promise.all([
                                        this.dispatcher.dispatch(yearConfig).toPromise(),
                                        this.dispatcher.dispatch(teamProgressMain).toPromise(),
                                    ])];
                            case 2:
                                _a = __read.apply(void 0, [_b.sent(), 2]), yearConfigResp = _a[0], teamProgressMainResp_1 = _a[1];
                                console.log("TeamProgressMainResp", teamProgressMainResp_1);
                                console.log("yearConfigResp", yearConfigResp);
                                if (yearConfigResp.Header["status"]) {
                                    DataYear_1 = yearConfigResp.Body.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.IsCurrent == "Y"; }))[0].DataYear;
                                }
                                else {
                                    throw "get yearConfig fail. yearConfigResp:" + yearConfigResp;
                                }
                                timeBaseTitle = "monthly";
                                //timeBase title
                                if (this.showDashboardRule) {
                                    timeBaseTitle = this.showDashboardRule.showTimeBaseTitle(appUseMode);
                                }
                                if (teamProgressMainResp_1.Header["status"]) {
                                    timeBase_1 = "Month";
                                    if (appUseMode == "Manager" || appUseMode == "Supervisor") {
                                        timeBase_1 = "Year";
                                    }
                                    dataType = ["FYFC", "ANP"];
                                    dataType.forEach(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) {
                                        /** @type {?} */
                                        var dataobj = teamProgressMainResp_1.Body.filter(( /**
                                         * @param {?} xx
                                         * @return {?}
                                         */function (xx) { return xx.DataYear == DataYear_1 && xx.TimeBase == timeBase_1 && xx.DataType == x; }))[0];
                                        console.log('dataobj:', dataobj);
                                        Datas.push({
                                            title: "Home_" + x,
                                            MonthlyProgressTotal: dataobj.Forecast == -1 ? dataobj.Goal : dataobj.Forecast,
                                            MonthlyProgressCurrent: dataobj.Actual
                                        });
                                    }));
                                }
                                else {
                                    throw "get teamProgressMain fail. teamProgressMainResp:" + teamProgressMainResp_1;
                                }
                                returnData = {
                                    timeBaseTitle: timeBaseTitle,
                                    datas: Datas
                                };
                                return [3 /*break*/, 4];
                            case 3:
                                error_1 = _b.sent();
                                this.errorHandler.handleError(new i1.APPError('F00130', '_getPerformanceTeamData fail!' + error_1.message));
                                return [3 /*break*/, 4];
                            case 4:
                                //TODO ZH&CAO 開interface\
                                console.log("_getPerformanceTeamData returnData:", returnData);
                                return [2 /*return*/, returnData];
                        }
                    });
                });
            };
        /**
         * @private
         * @return {?}
         */
        DashboardService.prototype._getPerformancePersonalData = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, yearConfigResp, personalProgressResp, DataYear, ActivitiesPoints, ActivitiesPointsTotal, MonthlyProgressTotal, MonthlyProgressCurrent, InforceConvertPointBase, FindConvertPointBase, ScheduleConvertPointBase, MeetConvertPointBase, SubmitConvertPointBase, returnData, yearConfig, getPersonalProgress, currentObj, personalProgressObj, error_2;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                returnData = {};
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 3, , 4]);
                                yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
                                getPersonalProgress = this.APIFactory.getAPI("getPersonalProgress");
                                return [4 /*yield*/, Promise.all([
                                        this.dispatcher.dispatch(yearConfig).toPromise(),
                                        this.dispatcher.dispatch(getPersonalProgress).toPromise(),
                                    ])];
                            case 2:
                                _a = __read.apply(void 0, [_b.sent(), 2]), yearConfigResp = _a[0], personalProgressResp = _a[1];
                                console.log("yearConfigResp", yearConfigResp);
                                console.log("personalProgressResp", personalProgressResp);
                                if (yearConfigResp.Header["status"]) {
                                    currentObj = yearConfigResp.Body.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.IsCurrent == "Y"; }))[0];
                                    DataYear = currentObj.DataYear;
                                    ActivitiesPointsTotal = currentObj.ProgressDayPointsLimit;
                                    InforceConvertPointBase = currentObj.InforceConvertPointBase;
                                    FindConvertPointBase = currentObj.FindConvertPointBase;
                                    ScheduleConvertPointBase = currentObj.ScheduleConvertPointBase;
                                    MeetConvertPointBase = currentObj.MeetConvertPointBase;
                                    SubmitConvertPointBase = currentObj.SubmitConvertPointBase;
                                }
                                else {
                                    throw "get yearConfig fail. yearConfigResp:" + yearConfigResp;
                                }
                                if (personalProgressResp.Header["status"]) {
                                    //todo need to figure out ActivitiesPoints cant add -1 to sum   
                                    personalProgressObj = personalProgressResp.Body.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.DataYear == DataYear && x.TimeBase == "Day" && x.DataType == "Actual"; }))[0];
                                    //dirty way
                                    personalProgressObj.Find = (personalProgressObj.Find <= -1) ? 0 : personalProgressObj.Find;
                                    personalProgressObj.Schedule = (personalProgressObj.Schedule <= -1) ? 0 : personalProgressObj.Schedule;
                                    personalProgressObj.Meet = (personalProgressObj.Meet <= -1) ? 0 : personalProgressObj.Meet;
                                    personalProgressObj.Submit = (personalProgressObj.Submit <= -1) ? 0 : personalProgressObj.Submit;
                                    personalProgressObj.Inforce = (personalProgressObj.Inforce <= -1) ? 0 : personalProgressObj.Inforce;
                                    ActivitiesPoints = personalProgressObj.Find * FindConvertPointBase
                                        + personalProgressObj.Schedule * ScheduleConvertPointBase
                                        + personalProgressObj.Meet * MeetConvertPointBase
                                        + personalProgressObj.Submit * SubmitConvertPointBase
                                        + personalProgressObj.Inforce * InforceConvertPointBase;
                                    //ActivitiesPoints = (ActivitiesPoints>=ActivitiesPointsTotal)?ActivitiesPointsTotal:ActivitiesPoints;
                                    MonthlyProgressCurrent = personalProgressResp.Body.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.DataYear == DataYear && x.TimeBase == "Month" && x.DataType == "Actual"; }))[0].FYFC;
                                    MonthlyProgressTotal = personalProgressResp.Body.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.DataYear == DataYear && x.TimeBase == "Month" && x.DataType == "Goal"; }))[0].FYFC;
                                }
                                else {
                                    throw "get personalProgressResp fail. personalProgressResp:" + personalProgressResp;
                                }
                                returnData = {
                                    ActivitiesPoints: ActivitiesPoints,
                                    ActivitiesPointsTotal: ActivitiesPointsTotal,
                                    MonthlyProgressTotal: MonthlyProgressTotal,
                                    MonthlyProgressCurrent: MonthlyProgressCurrent
                                };
                                return [3 /*break*/, 4];
                            case 3:
                                error_2 = _b.sent();
                                this.errorHandler.handleError(new i1.APPError('F00131', '_getPerformancePersonalData fail!' + error_2.message));
                                return [3 /*break*/, 4];
                            case 4:
                                console.log("_getPerformancePersonalData returnData:", returnData, JSON.stringify(returnData));
                                return [2 /*return*/, returnData];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        DashboardService.prototype.getUserLevel = /**
         * @return {?}
         */
            function () {
                return 'diamond';
            };
        /**
         * @param {?} messageID
         * @param {?} col
         * @param {?} val
         * @return {?}
         */
        DashboardService.prototype.changeMessageStatus = /**
         * @param {?} messageID
         * @param {?} col
         * @param {?} val
         * @return {?}
         */
            function (messageID, col, val) {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    console.log("into changeMessageStatus :", messageID, col, val);
                    /** @type {?} */
                    var changeStatusObj = ( /** @type {?} */(_this.APIFactory.getAPI("ChangeMessageStatus")));
                    changeStatusObj.messageID = messageID;
                    changeStatusObj.col = col;
                    changeStatusObj.val = val;
                    _this.dispatcher.dispatch(changeStatusObj).toPromise().then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.log("changeMessageStatus resp", resp);
                        observer.next(resp['Header']);
                        observer.complete();
                    }));
                }));
            };
        DashboardService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        DashboardService.ctorParameters = function () {
            return [
                { type: i1.APIDispatch },
                { type: i1.APIFactory },
                { type: i1.DateUtils },
                { type: i0.ErrorHandler },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.showRuleToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [showDashboardRuleToken,] }] }
            ];
        };
        /** @nocollapse */ DashboardService.ngInjectableDef = i0.defineInjectable({ factory: function DashboardService_Factory() { return new DashboardService(i0.inject(i1.APIDispatch), i0.inject(i1.APIFactory), i0.inject(i1.DateUtils), i0.inject(i0.ErrorHandler), i0.inject(i1.showRuleToken, 8), i0.inject(showDashboardRuleToken, 8)); }, token: DashboardService, providedIn: "root" });
        return DashboardService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardDetailComponent = /** @class */ (function () {
        function DashboardDetailComponent(showDashboardRule, dashboardService) {
            this.showDashboardRule = showDashboardRule;
            this.dashboardService = dashboardService;
            this._messageList = [];
            this.language = new i1.Language();
            this.userImgUrl = '';
            this.userAgentName = '';
            this.tabIndex = 0;
            this.userLevel = null;
            this.onClickLink = new i0.EventEmitter();
            this.filterByKeyword = new i0.EventEmitter();
            this.clickMessage = new i0.EventEmitter();
            this.changeCommitmentStatus = new i0.EventEmitter();
            this.init();
        }
        Object.defineProperty(DashboardDetailComponent.prototype, "messageList", {
            get: /**
             * @return {?}
             */ function () {
                return this._messageList;
            },
            set: /**
             * @param {?} messageList
             * @return {?}
             */ function (messageList) {
                this._messageList = messageList;
                console.log("detail message: ", this._messageList);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardDetailComponent.prototype, "loginInfo", {
            get: /**
             * @return {?}
             */ function () {
                return this._loginInfo;
            },
            set: /**
             * @param {?} loginInfo
             * @return {?}
             */ function (loginInfo) {
                var _this = this;
                this._loginInfo = loginInfo;
                if (this.showDashboardRule) {
                    this.showDashboardRule.dashboardShowLoginInfo(loginInfo).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        _this.userImgUrl = data.imgUrl;
                        _this.userAgentName = data.showName;
                    }));
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        DashboardDetailComponent.prototype.tabChangeEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.tabIndex = event;
            };
        /**
         * @return {?}
         */
        DashboardDetailComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.windowWidth = window.innerWidth;
            };
        /**
         * @private
         * @return {?}
         */
        DashboardDetailComponent.prototype.init = /**
         * @private
         * @return {?}
         */
            function () {
                this.userLevel = this.dashboardService.getUserLevel();
            };
        /**
         * @return {?}
         */
        DashboardDetailComponent.prototype.ClickListShow = /**
         * @return {?}
         */
            function () {
                this.onClickLink.emit();
            };
        /**
         * @param {?} keyword
         * @return {?}
         */
        DashboardDetailComponent.prototype.doFilterByKeyword = /**
         * @param {?} keyword
         * @return {?}
         */
            function (keyword) {
                this.filterByKeyword.emit(keyword);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DashboardDetailComponent.prototype.onChangeCommitmentStatus = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.changeCommitmentStatus.emit(event);
            };
        /**
         * @param {?} message
         * @return {?}
         */
        DashboardDetailComponent.prototype.doMessageClick = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                this.clickMessage.emit(message);
            };
        DashboardDetailComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-dashboard-detail',
                        template: "<div class=\"layout-detail-block style-has-top-space\">\n    <div class=\"space-detail\">\n        <!-- profile card -->\n        <app-ui-card-content-btn [noPadding]=\"true\" class=\" msg-card-block msg-profile-block\">\n            <ng-container infoContent>\n                <div class=\"card-block\">\n                    <div class=\"profile-detail-block\">\n                        <span class=\"img-block\">\n                            <img class=\"img-female\" [src]=\"userImgUrl\">\n                            <!-- <img class=\"img-male\" src=\"assets/img/icon-msg-pesron-male.svg\"> -->\n                        </span>\n                        <span class=\"text-block\">\n                            {{language.homeHi | translate}}, {{ userAgentName }}\n                        </span>\n                    </div>\n                    <div *ngIf=\"windowWidth < 1024\" class=\"link-block\">\n                        <app-ui-link Action [action]=\"'showTodayScheduleBirthday'\" (onClick)=\"ClickListShow()\">\n                            <ng-container textType=\"linktext\">{{language.todayScheduleBirthday | translate}}</ng-container>\n                        </app-ui-link>\n                    </div>\n                </div>\n            </ng-container>\n        </app-ui-card-content-btn>\n        <!-- end of profile card -->\n        <!-- perfomance -->\n        <app-ui-title-style1 class=\"\">\n            <ng-container textType=\"titleText\"> {{language.performance | translate}}</ng-container>\n        </app-ui-title-style1>\n        <snd-dashboard-performance></snd-dashboard-performance>\n        <!-- end of perfomance -->\n    </div>\n    <snd-dashboard-message [messageList]=\"messageList\" (filterByKeyword)=\"doFilterByKeyword($event)\" (clickMessage)=\"doMessageClick($event)\" (changeCommitmentStatus)=\"onChangeCommitmentStatus($event)\"></snd-dashboard-message>\n</div>\n",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.space-detail{padding-right:40px;display:block}@media (max-width:1023px){.space-detail{padding-right:40px}}.layout-detail-block{background-color:#f5f5f5;padding-left:40px}.layout-detail-block .space-detail:not(.layout-nodata):last-child{padding-bottom:100px}.layout-detail-block .layout-nodata{padding-bottom:0}@media (min-width:768px){.layout-detail-block.style-has-right-space{padding-right:40px}.layout-detail-block.style-has-right-space.skelton-layout{padding-right:0}}.layout-detail-block.style-has-top-space{padding-top:40px}@media (max-width:767px){.space-detail{padding-right:5px}.layout-detail-block{padding-left:5px}.layout-detail-block.style-has-right-space{padding-right:5px}.layout-detail-block.style-has-top-space{padding-top:30px}}.layout-detail-block.style-has-btm-space{padding-bottom:100px}.space-inner-lg{padding-left:50px;padding-right:50px}@media (max-width:767px){.space-inner-lg{padding-left:5px;padding-right:5px}}.msg-profile-block{margin-bottom:20px;display:block}.msg-profile-block .card-block{display:block;padding-top:10px;padding-bottom:10px}.msg-profile-block .card-block .profile-detail-block{display:flex;align-items:center;padding:0 10px}.msg-profile-block .card-block .img-block{margin-right:20px;max-width:60px;width:100%}.msg-profile-block .card-block .img-block img{width:60px;height:60px}.msg-profile-block .card-block .img-block.img-female .img-female{display:inline-block}.msg-profile-block .card-block .img-block.img-female .img-male{display:none}.msg-profile-block .card-block .img-block.img-male .img-male{display:inline-block}.msg-profile-block .card-block .img-block.img-male .img-female{display:none}.msg-profile-block .card-block .text-block{width:calc(100% - 60px);font-weight:700;color:#414141;line-height:20px;font-size:1rem}.msg-profile-block .card-block .link-block{padding:15px 10px 5px;margin-top:15px;border-top:1px solid #c2c2c2;text-align:center}.msg-profile-block .card-block ::ng-deep .link{width:100%}"]
                    }] }
        ];
        DashboardDetailComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [showDashboardRuleToken,] }] },
                { type: DashboardService }
            ];
        };
        DashboardDetailComponent.propDecorators = {
            messageList: [{ type: i0.Input }],
            loginInfo: [{ type: i0.Input }],
            onClickLink: [{ type: i0.Output }],
            filterByKeyword: [{ type: i0.Output }],
            clickMessage: [{ type: i0.Output }],
            changeCommitmentStatus: [{ type: i0.Output }]
        };
        return DashboardDetailComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardUiCardMsgComponent = /** @class */ (function () {
        function DashboardUiCardMsgComponent() {
            this.isRead = true;
            this.isHasBtn = false; // has approve or cancel button
            this.isHasApproved = false; // false: show approve; true show cancel
            this.cardType = 'goal'; // 0 goal 1 cust 2 progress
            this.imgType = 'img-male'; // 0 img-goal 1 img-cust 2 img-progress
        }
        /**
         * @return {?}
         */
        DashboardUiCardMsgComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.imgType = 'img-' + this.cardType;
                this.linkBtnStatus();
            };
        /**
         * @private
         * @return {?}
         */
        DashboardUiCardMsgComponent.prototype.linkBtnStatus = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.linkStatus == 'Done') {
                    this.isHasBtn = true;
                    //this.isHasApproved = true;
                }
                else if (this.linkStatus == 'Approve') {
                    this.isHasBtn = true;
                }
                else if (this.linkStatus == 'null') ;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DashboardUiCardMsgComponent.prototype.approve = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
            };
        DashboardUiCardMsgComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-dashboard-ui-card-msg',
                        template: "<app-ui-card-content-btn [noPadding]=\"true\" class=\"msg-card-block msg-detail-block\">\n        <ng-container infoContent>\n            <div class=\"card-block\">\n              <div class=\"card-type\"><ng-content select=[cardType]></ng-content></div>\n              <div class=\"card-title-block\">\n                  <span class=\"img-block\" [ngClass]=\"imgType\">\n                      <img class=\"img-goal\" src=\"assets/img/icon-msg-goal.svg\">\n                      <img class=\"img-cust\" src=\"assets/img/icon-msg-cust.svg\">\n                      <img class=\"img-progress\" src=\"assets/img/icon-msg-progress.svg\">\n                  </span>\n                  <span class=\"text-block\">\n                      <div class=\"title-main\">\n                          <ng-content select=[cardTitle]></ng-content>\n                        \n                      </div>\n                      <div class=\"title-sub\">\n                        <span class=\"date\"><ng-content select=[cardDate]></ng-content></span>\n                        <span class=\"time\"><ng-content select=[cardTime]></ng-content></span>\n                        <span class=\"icon-block\" [ngClass]=\"isRead? 'active': ''\">\n                            <img class=\"normal-img\" src=\"assets/img/icon-msg-read-no.svg\">\n                            <img class=\"active-img\" src=\"assets/img/icon-msg-read.svg\">\n                        </span>\n                      </div>\n                      \n                  </span>\n                  \n              </div>\n              <div class=\"card-detail-text\">\n                <p><ng-content select=[cardDetail]></ng-content></p>\n              </div>\n              <!-- btn -->\n              <div class=\"card-btn-block\" *ngIf=\"isHasBtn\" [ngClass]=\"isHasApproved ? 'active': ''\">\n                <button class=\"card-btn\">\n                  <app-ui-link class=\"card-btn_link\" [isUnderLine]=\"false\" [imgSrc]=\"'assets/img/icon-arrow-long-blue.svg'\" (onClick)=\"approve($event)\">\n                    <ng-container textType=\"linktext\">\n                      <ng-content select=[linkStatus]></ng-content>\n                    </ng-container>\n                  </app-ui-link>\n                  <div class=\"card-btn_text\">DONE</div>\n                </button>\n              </div>\n              <!-- end of btn -->\n              \n            </div>\n        </ng-container>\n    </app-ui-card-content-btn>\n    ",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.msg-card-block{display:block;margin-bottom:20px}.msg-detail-block .img-block img{width:100%}.msg-detail-block .card-block{position:relative;padding:15px 20px}.msg-detail-block .card-block .card-type{position:absolute;top:15px;right:20px;font-size:.75rem;color:#414141;border:1px solid #414141;display:flex;width:90px;flex-shrink:0;justify-content:center;align-items:center;border-radius:3px}@media screen and (min-width:1025px){.msg-detail-block .card-block .card-type{width:9vw}}.msg-detail-block .card-block .card-title-block{display:flex;align-items:center}.msg-detail-block .card-block .card-title-block .img-block{width:40px;display:flex;flex-grow:0;flex-shrink:0}.msg-detail-block .card-block .card-title-block .img-block img{width:40px;height:40px;display:none}.msg-detail-block .card-block .card-title-block .img-block.img-cust img.img-cust,.msg-detail-block .card-block .card-title-block .img-block.img-female img.img-female,.msg-detail-block .card-block .card-title-block .img-block.img-goal img.img-goal,.msg-detail-block .card-block .card-title-block .img-block.img-male img.img-male,.msg-detail-block .card-block .card-title-block .img-block.img-progress img.img-progress{display:inline-block}.msg-detail-block .card-block .card-title-block .text-block{padding-left:10px;width:calc(100% - 40px - 90px);display:flex;flex-grow:0;flex-shrink:0;flex-wrap:wrap;font-size:.875rem}.msg-detail-block .card-block .card-title-block .text-block .title-main{display:block;width:100%;color:#414141;font-weight:700;line-height:20px}.msg-detail-block .card-block .card-title-block .text-block .title-sub{display:block;width:100%;color:#414141;font-weight:400}.msg-detail-block .card-block .card-title-block .text-block .time{padding-left:10px;padding-right:16px}.msg-detail-block .card-block .card-title-block .icon-block{width:14px;display:inline-block;vertical-align:middle}.msg-detail-block .card-block .card-title-block .icon-block img{width:14px;display:none}.msg-detail-block .card-block .card-title-block .icon-block .normal-img{display:inline-block}.msg-detail-block .card-block .card-title-block .icon-block .active-img,.msg-detail-block .card-block .card-title-block .icon-block.active .normal-img{display:none}.msg-detail-block .card-block .card-title-block .icon-block.active .active-img{display:inline-block}.msg-detail-block .card-block .card-title-block .icon-block.img-cust .img-cust,.msg-detail-block .card-block .card-title-block .icon-block.img-goal .img-goal,.msg-detail-block .card-block .card-title-block .icon-block.img-progress .img-progress{display:inline}.msg-detail-block .card-block .card-detail-text p{margin:5px 0 0;padding:0;font-size:.875rem;font-weight:400;/*! autoprefixer: off */-webkit-box-orient:vertical;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1}@media screen and (max-width:1023px){.msg-detail-block .card-block .card-title-block .text-block{width:calc(100% - 120px)}.msg-detail-block .card-block .card-detail-text p{-webkit-line-clamp:2}}.msg-detail-block .card-block .card-btn-block{display:block;width:100%;text-align:right;background-color:transparent;padding:0;margin-top:3px}.msg-detail-block .card-block .card-btn-block .card-btn_text{color:#c2c2c2;font-size:.875rem;font-weight:700;display:none}.msg-detail-block .card-block .card-btn-block .card-btn_link,.msg-detail-block .card-block .card-btn-block.active .card-btn_text{display:inline-block}.msg-detail-block .card-block .card-btn-block.active .card-btn_link{display:none}.msg-detail-block .card-block ::ng-deep .ui-link-block .link{font-size:.875rem}.msg-detail-block .card-block ::ng-deep .ui-link-block .img-block img{vertical-align:middle}.msg-detail-block ::ng-deep .card-btn-block .ui-link-block .img-block img{padding:4px}"]
                    }] }
        ];
        DashboardUiCardMsgComponent.ctorParameters = function () { return []; };
        DashboardUiCardMsgComponent.propDecorators = {
            isRead: [{ type: i0.Input }],
            isHasBtn: [{ type: i0.Input }],
            isHasApproved: [{ type: i0.Input }],
            cardType: [{ type: i0.Input }],
            linkStatus: [{ type: i0.Input }]
        };
        return DashboardUiCardMsgComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardComponent = /** @class */ (function () {
        function DashboardComponent(customerUtils, dashboardService, calendarService, customerService, changeDetector, translateService, profileCodeService, loginMgr, dataSyncService, notificationMgr, APP_CONFIG) {
            this.customerUtils = customerUtils;
            this.dashboardService = dashboardService;
            this.calendarService = calendarService;
            this.customerService = customerService;
            this.changeDetector = changeDetector;
            this.translateService = translateService;
            this.profileCodeService = profileCodeService;
            this.loginMgr = loginMgr;
            this.dataSyncService = dataSyncService;
            this.notificationMgr = notificationMgr;
            this.APP_CONFIG = APP_CONFIG;
            this.hello_str = '';
            this.isLoadingFinish = true;
            this.isRefreshFinish = true;
            this.isLazyLoading = true;
            this.isMobilePopupOpen = false;
            this.dashboardMessageList = [];
            this.calendarEventList = [];
            this.calendarEventMonthList = [];
            this.birthdayList = [];
            this.language = new i1.Language();
            this.todate = new Date();
            this.alertAutoDeleteCustomer = [];
            this.alertOverTimeList = [];
            this.isDisplayDeleteRemind = false;
            this.isDisplayUpdateRemind = false;
            this.showCalendarList = [];
            this.messagePageInfo = new i1.PageInfo();
            // calendar
            this.isExpandDetail = false;
            this.isCalendarDelete = false;
            this.isPopupDeleteSuccess = false;
            this.isExpandEdit = false;
            this.isDisplaySavePopup = false;
            this.translateMap = new Map();
            this.optionMap = new Map();
            this.isSaveClick = false;
            // translate
            this.activityTypeList = []; // DB中所有activityType
            this.alertTypeList = [];
            this.dayTypesList = ['Cross_Day', 'All_Day'];
            this.weekdaysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            this.monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            this.noSchedule = 'No_Schedule';
            //calendar end
            this.customerClientMap = new Map();
            this.customerItemList = [];
            this.customerClientName = '';
            this.searchBirthdaySubN = this.APP_CONFIG[this.APP_CONFIG.ENV].DASHBOARD.SearchBirthdayRange.subN;
            this.searchBirthdayAddN = this.APP_CONFIG[this.APP_CONFIG.ENV].DASHBOARD.SearchBirthdayRange.addN;
            this.searchCalendarSubN = this.APP_CONFIG[this.APP_CONFIG.ENV].DASHBOARD.SearchCalendarRange.subN;
            this.searchCalendarAddN = this.APP_CONFIG[this.APP_CONFIG.ENV].DASHBOARD.SearchCalendarRange.addN;
        }
        /**
         * @return {?}
         */
        DashboardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                //init calendar type
                var _this = this;
                this.messagePageInfo.pageSize = 5;
                this.activityTypeList = this.profileCodeService.getCodeArray('Calendar_Type');
                this.alertTypeList = this.profileCodeService.getCodeArray('Calendar_RemindTime');
                this.optionMap.set('Calendar_Type', this.activityTypeList);
                this.optionMap.set('Calendar_RemindTime', this.alertTypeList);
                this.dayTypesList.forEach(( /**
                 * @param {?} dayType
                 * @return {?}
                 */function (dayType) {
                    _this.translateMap.set(dayType, _this.translateService.translate(dayType));
                }));
                this.weekdaysList.forEach(( /**
                 * @param {?} weekday
                 * @return {?}
                 */function (weekday) {
                    _this.translateMap.set(weekday, _this.translateService.translate(weekday));
                }));
                this.monthsList.forEach(( /**
                 * @param {?} month
                 * @return {?}
                 */function (month) {
                    _this.translateMap.set(month, _this.translateService.translate(month));
                }));
                this.translateMap.set(this.noSchedule, this.translateService.translate(this.noSchedule));
                this.windowWidth = window.innerWidth;
                this.isMobilePopupOpen = (this.windowWidth < 1024 ? true : false) && (this.dashboardService.isFirstTime());
                this.viewDate = this.todate;
                this.getLoginInfo();
                this.getCalendarList();
                this.getCustomerBirthdayList(this.todate, this.searchBirthdaySubN, this.searchBirthdayAddN);
                //get UnRead message
                this.doFilterByKeyword("UnRead", false);
                //5/24
                //this.changeDetector.detectChanges();
                this.createCustomerList();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DashboardComponent.prototype.onResize = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.windowWidth = event.target.innerWidth;
                this.changeDetector.markForCheck();
                if (this.windowWidth < 1024) {
                    this.isMobilePopupOpen = true;
                }
                // console.warn('Width: ', this.windowWidth);
            };
        /**
         * @private
         * @return {?}
         */
        DashboardComponent.prototype.getCalendarList = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var searchCalendarStart, PromiseList, _loop_1, i;
                    var _this = this;
                    return __generator(this, function (_a) {
                        searchCalendarStart = dateFns.subDays(this.todate, this.searchCalendarSubN);
                        PromiseList = [];
                        _loop_1 = function () {
                            /** @type {?} */
                            var targetDate = dateFns.addDays(searchCalendarStart, i);
                            PromiseList.push(new Promise(( /**
                             * @param {?} res
                             * @param {?} rej
                             * @return {?}
                             */function (res, rej) {
                                _this.getCalendarBetweenDate(dateFns.startOfDay(targetDate), dateFns.endOfDay(targetDate)).then(( /**
                                 * @param {?} data
                                 * @return {?}
                                 */function (data) {
                                    /** @type {?} */
                                    var item = {
                                        showDate: targetDate,
                                        eventList: data,
                                        isBeforeToday: dateFns.startOfDay(_this.todate).getTime() > dateFns.startOfDay(targetDate).getTime(),
                                        isToday: dateFns.startOfDay(_this.todate).getTime() == dateFns.startOfDay(targetDate).getTime()
                                    };
                                    res(item);
                                }));
                            })));
                        };
                        for (i = 0; i < this.searchCalendarSubN + this.searchCalendarAddN + 1; i++) {
                            _loop_1();
                        }
                        Promise.all(PromiseList).then(( /**
                         * @param {?} list
                         * @return {?}
                         */function (list) {
                            _this.showCalendarList = list;
                            console.log("this.showCalendarList: ", _this.showCalendarList);
                            //5/24
                            //this.changeDetector.detectChanges();
                        }));
                        return [2 /*return*/];
                    });
                });
            };
        // scroll load content
        // scroll load content
        /**
         * @param {?} event
         * @return {?}
         */
        DashboardComponent.prototype.loadContent =
            // scroll load content
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.messagePageInfo.nextPage();
                                return [4 /*yield*/, this.doFilterByKeyword(this.currentMessageKeyword, true)];
                            case 1:
                                _a.sent();
                                setTimeout(( /**
                                 * @return {?}
                                 */function () {
                                    _this.isLoadingFinish = true;
                                    _this.changeDetector.detectChanges();
                                }));
                                return [2 /*return*/];
                        }
                    });
                });
            };
        //refreshContent
        //refreshContent
        /**
         * @param {?} event
         * @return {?}
         */
        DashboardComponent.prototype.refreshContent =
            //refreshContent
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.messagePageInfo.resetPage();
                                // this.getCalendarList();
                                // this.getCustomerBirthdayList(this.viewDate, this.searchBirthdaySubN, this.searchBirthdayAddN);
                                // await this.dataSyncService.syncFunc(["DASHBOARD"], true);
                                return [4 /*yield*/, this.notificationMgr.fetchMessageData()];
                            case 1:
                                // this.getCalendarList();
                                // this.getCustomerBirthdayList(this.viewDate, this.searchBirthdaySubN, this.searchBirthdayAddN);
                                // await this.dataSyncService.syncFunc(["DASHBOARD"], true);
                                _a.sent();
                                //get message
                                // await this.getDashboardMessageList();
                                return [4 /*yield*/, Promise.all([this.doFilterByKeyword(this.currentMessageKeyword, false), this.getCalendarList(), this.getCustomerBirthdayList(this.viewDate, this.searchBirthdaySubN, this.searchBirthdayAddN)])];
                            case 2:
                                //get message
                                // await this.getDashboardMessageList();
                                _a.sent();
                                console.log("PromiseAll finish");
                                setTimeout(( /**
                                 * @return {?}
                                 */function () {
                                    _this.isRefreshFinish = true;
                                    //5/24
                                    //this.changeDetector.detectChanges();
                                }), 500);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @return {?}
         */
        DashboardComponent.prototype.getLoginInfo = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        return [2 /*return*/, new Promise(( /**
                                 * @param {?} res
                                 * @param {?} rej
                                 * @return {?}
                                 */function (res, rej) {
                                _this.loginMgr.getLoginInfo().subscribe(( /**
                                 * @param {?} info
                                 * @return {?}
                                 */function (info) {
                                    _this.dashboardLoginInfo = info;
                                    console.warn('this.dashboardLoginInfo: ', _this.dashboardLoginInfo);
                                    res();
                                }));
                            }))];
                    });
                });
            };
        /**
         * @param {?} keyword
         * @param {?} isAppend
         * @return {?}
         */
        DashboardComponent.prototype.doFilterByKeyword = /**
         * @param {?} keyword
         * @param {?} isAppend
         * @return {?}
         */
            function (keyword, isAppend) {
                // console.log("keyword: " ,keyword);
                var _this = this;
                if (!isAppend) {
                    this.messagePageInfo.resetPage();
                }
                this.currentMessageKeyword = keyword;
                return this.dashboardService.getMessageByKeyword(keyword, this.messagePageInfo).toPromise().then(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    if (isAppend) {
                        if (data.length > 0) {
                            _this.dashboardMessageList = __spread(_this.dashboardMessageList, data);
                        }
                    }
                    else {
                        _this.dashboardMessageList = __spread(data);
                    }
                }));
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DashboardComponent.prototype.onChangeCommitmentStatus = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                console.log("into onChangeCommitmentStatus event:", event, "messageId:", event.messageId, "keyword:", event.keyword);
                this.dashboardService.changeMessageStatus(event.messageId, "LinkStatus", "Done").toPromise().then(( /**
                 * @param {?} resp
                 * @return {?}
                 */function (resp) {
                    console.log("onChangeCommitmentStatus resp", resp);
                    _this.doFilterByKeyword(event.keyword, false);
                }));
            };
        /**
         * @return {?}
         */
        DashboardComponent.prototype.afterDisplayDeleteRemind = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.doFilterByKeyword(this.currentMessageKeyword, false)];
                            case 1:
                                _a.sent();
                                this.isDisplayDeleteRemind = false;
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        DashboardComponent.prototype.afterDisplayUpdateRemind = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.doFilterByKeyword(this.currentMessageKeyword, false)];
                            case 1:
                                _a.sent();
                                this.isDisplayUpdateRemind = false;
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} cliendID
         * @return {?}
         */
        DashboardComponent.prototype.getCustomerAutoDelete = /**
         * @private
         * @param {?} cliendID
         * @return {?}
         */
            function (cliendID) {
                return this.customerService.getAutoDeleteCustomerList(cliendID);
            };
        /**
         * @private
         * @param {?} cliendID
         * @return {?}
         */
        DashboardComponent.prototype.getCustomerOverTime = /**
         * @private
         * @param {?} cliendID
         * @return {?}
         */
            function (cliendID) {
                return this.customerService.getOverTimeCustomerList(cliendID);
            };
        /**
         * @private
         * @param {?} targetDate
         * @param {?} subN
         * @param {?} addN
         * @return {?}
         */
        DashboardComponent.prototype.getCustomerBirthdayList = /**
         * @private
         * @param {?} targetDate
         * @param {?} subN
         * @param {?} addN
         * @return {?}
         */
            function (targetDate, subN, addN) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.customerService.getCustomerBirthdayList(targetDate, subN, addN).toPromise().then(( /**
                                 * @param {?} data
                                 * @return {?}
                                 */function (data) {
                                _this.birthdayList = data;
                            }))];
                    });
                });
            };
        /**
         * @private
         * @param {?} startDate
         * @param {?} endDate
         * @return {?}
         */
        DashboardComponent.prototype.getCalendarBetweenDate = /**
         * @private
         * @param {?} startDate
         * @param {?} endDate
         * @return {?}
         */
            function (startDate, endDate) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.calendarService.getCalendarEventList(startDate, endDate, '').toPromise()];
                    });
                });
            };
        /**
         * @return {?}
         */
        DashboardComponent.prototype.clickListShow = /**
         * @return {?}
         */
            function () {
                this.isMobilePopupOpen = true;
            };
        /**
         * @param {?} message
         * @return {?}
         */
        DashboardComponent.prototype.onClickMessage = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                var _this = this;
                console.log("click message: ", message);
                /** @type {?} */
                var cliendID = message.clientID;
                if (message.status == 'UnRead') {
                    this.dashboardService.updateMessageStatus(message.clientID, 'Reading').subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                    }));
                }
                if (message.messageType == "AutoDelete") {
                    this.getCustomerAutoDelete(cliendID).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        _this.alertAutoDeleteCustomer = data;
                        _this.isDisplayDeleteRemind = data.length > 0 ? true : false;
                    }));
                }
                else if (message.messageType == "Overtime") {
                    this.getCustomerOverTime(cliendID).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        _this.alertOverTimeList = data;
                        _this.isDisplayUpdateRemind = data.length > 0 ? true : false;
                    }));
                }
                this.changeDetector.detectChanges();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DashboardComponent.prototype.onClickCalendarItem = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                //event = {showDate: "04/24", eventList: CalendarEventDetail}
                console.log("click event: ", event);
                this.calendarItemClientID = event.eventList.clientID;
                this.viewDate = new Date(event.showDate);
                this.calendarEventList = this.showCalendarList.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.showDate == event.showDate; }))[0].eventList;
                //console.log("calendarEventList: ", this.calendarEventList);
                console.log("viewDate: ", this.viewDate);
                this.loadCalendarEventDetail(this.calendarItemClientID);
            };
        /**
         * @private
         * @param {?} clientID
         * @return {?}
         */
        DashboardComponent.prototype.loadCalendarEventDetail = /**
         * @private
         * @param {?} clientID
         * @return {?}
         */
            function (clientID) {
                var _this = this;
                this.calendarService.getCalendarEventDetail(clientID).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    console.log('getCalendarEventDetail', data);
                    _this.calendarEventDetail = data;
                    _this.customerClientName = _this.customerClientMap.get(_this.calendarEventDetail.customerClientID);
                    _this.calendarEventDetail.displayActivity = _this.profileCodeService.convertCode2Text('Calendar_Type', _this.calendarEventDetail.activity);
                    _this.calendarEventDetail.displayAlert1 = _this.profileCodeService.convertCode2Text('Calendar_RemindTime', _this.calendarEventDetail.alert1);
                    _this.calendarEventDetail.displayAlert2 = _this.profileCodeService.convertCode2Text('Calendar_RemindTime', _this.calendarEventDetail.alert2);
                    _this.isExpandDetail = true;
                    _this.changeDetector.detectChanges();
                }));
            };
        /**
         * @return {?}
         */
        DashboardComponent.prototype.editEvent = /**
         * @return {?}
         */
            function () {
                this.isExpandEdit = true;
            };
        /**
         * @return {?}
         */
        DashboardComponent.prototype.delete = /**
         * @return {?}
         */
            function () {
                this.isCalendarDelete = true;
            };
        /**
         * @return {?}
         */
        DashboardComponent.prototype.onClickDeleteConfirm = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.calendarService.deleteCalendarEvent(this.calendarItemClientID).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    if (data.status) {
                        _this.isExpandDetail = false;
                        _this.isPopupDeleteSuccess = true;
                        _this.showCalendarList.forEach(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) {
                            item.eventList = item.eventList.filter(( /**
                             * @param {?} x
                             * @return {?}
                             */function (x) { return x.clientID != _this.calendarItemClientID; }));
                        }));
                        _this.showCalendarList = __spread(_this.showCalendarList);
                    }
                }));
            };
        /**
         * @param {?} resp
         * @return {?}
         */
        DashboardComponent.prototype.onSaveCalendarEvent = /**
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                /** @type {?} */
                var type = resp.type;
                /** @type {?} */
                var data = resp.data;
                if (type !== 'fail') {
                    this.loadCalendarEventDetail(data.ClientID);
                    this.getCalendarList();
                    this.isDisplaySavePopup = true;
                    this.isExpandEdit = false;
                }
                this.isSaveClick = false;
            };
        /**
         * @return {?}
         */
        DashboardComponent.prototype.onClickAppointmentSave = /**
         * @return {?}
         */
            function () {
                this.isSaveClick = true;
            };
        /**
         * @private
         * @return {?}
         */
        DashboardComponent.prototype.createCustomerList = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var pageInfo = new i1.PageInfo();
                pageInfo.pageSize = -1;
                /** @type {?} */
                var filterCriteria = new integrationCalendarCustomer.CustomerFilterCriteria();
                this.customerService.getCustomerList(filterCriteria, pageInfo).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    var e_1, _a;
                    console.log('data', data);
                    /** @type {?} */
                    var temp_array = [];
                    try {
                        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                            var custItem = data_1_1.value;
                            _this.customerClientMap.set(custItem.clientID, _this.customerUtils.convertNameToShow(custItem.firstName, custItem.lastName));
                            temp_array.push(new i1.SelectOption(custItem.clientID, _this.customerUtils.convertNameToShow(custItem.firstName, custItem.lastName)));
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (data_1_1 && !data_1_1.done && (_a = data_1.return))
                                _a.call(data_1);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                    _this.customerItemList = temp_array;
                }));
            };
        DashboardComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-dashboard',
                        template: "<ng-container>\n    <ng-template #homeExtention>\n        <ng-content></ng-content>\n    </ng-template>\n    \n    <ng-template *ngIf=\"this.windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n    <!-- home side -->\n    <ng-template #homeSide>\n        <app-dashboard-list [eventMonthList]=\"calendarEventMonthList\" [calendarEventList]=\"showCalendarList\" [birthdayItemList]=\"birthdayList\" (clickCalendarItem)=\"onClickCalendarItem($event)\"></app-dashboard-list>\n    </ng-template>\n    <!-- end of home side -->\n    \n    <!-- home main -->\n    <ng-template #homeMain>\n        <ng-container *ngTemplateOutlet=\"homeExtention\"></ng-container>\n        <app-dashboard-detail [loginInfo]=\"dashboardLoginInfo\" [messageList]=\"dashboardMessageList\" (filterByKeyword)=\"doFilterByKeyword($event, false)\" (clickMessage)=\"onClickMessage($event)\" (onClickLink)=\"clickListShow()\" (changeCommitmentStatus)=\"onChangeCommitmentStatus($event)\"></app-dashboard-detail>\n    </ng-template>\n    <!-- end of home main -->\n    \n    \n    <!-- if: pcBlock -->\n    <ng-template #pcBlock>\n        <app-ui-main-side-menu class=\"dashboard-main-side-menu\">\n            <div class=\"home-list-side-menu\" side-menu>\n                <ng-container *ngTemplateOutlet=\"homeSide\"></ng-container>\n            </div>\n            <div main>\n                <app-ui-infinite-scroll [syncFunction]=\"['DASHBOARD']\" (loadingCallback)=\"loadContent($event)\"  (refreshCallback)=\"refreshContent($event)\" [(loadingFinish)]=\"isLoadingFinish\" [(refreshFinish)]=\"isRefreshFinish\" [lazyLoading]=\"isLazyLoading\" [translateText]=\"language.loading | translate\">\n                    <ng-container *ngTemplateOutlet=\"homeMain\"></ng-container>\n                </app-ui-infinite-scroll>\n            </div>\n        </app-ui-main-side-menu>\n        \n    \n        <!-- remind delete -->\n        <app-ui-modal-style-img-base [isContnetFull]=\"true\"  [isPopupOpen]=\"isDisplayDeleteRemind\" (close)=\"afterDisplayDeleteRemind()\">\n            <ng-container textType=\"modal-img-detail\">\n                <img src=\"assets/img/icon-cust-remind.svg\">\n            </ng-container>\n            <ng-container textType=\"modal-title-detail\">{{language.deleteProtectionTitle |translate }}</ng-container>\n            <ng-container textType=\"modal-content-detail\">\n                <!-- list -->\n                <app-ui-list-data2>\n                <!-- data -->\n                <ng-container textType=\"data\">\n                    <app-ui-form-checkbox3 [isDisable]=\"true\" [nxValue]=\"false\" *ngFor=\"let alertItem of alertAutoDeleteCustomer;\">\n                        <ng-container checkboxText=\"style3\">{{alertItem.name}}</ng-container>\n                    </app-ui-form-checkbox3>\n                </ng-container>\n                <!-- end of data -->\n                </app-ui-list-data2>\n                <!-- end of list -->\n            </ng-container>\n            <!-- end modal-content-detail -->\n            <ng-container textType=\"modal-btm-detail\">\n                <div class=\"btm-set-block\">\n                <span class=\"ps-text\">\n                    {{alertAutoDeleteCustomer.length}}  {{language.people |translate }}\n                </span>\n                <!-- btn -->\n                <app-ui-btn-layout>\n                    <app-ui-btn [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\" [id]=\"'btn_dashboardUpdateDelete'\" Action action=\"dashboardUpdateDelete\" (actionClick)=\"afterDisplayDeleteRemind()\">\n                    <ng-container TextType=\"cust\">{{language.homeConfirm |translate }}</ng-container>\n                    </app-ui-btn>\n                </app-ui-btn-layout>\n                <!-- end of btn -->\n                </div>\n        \n            </ng-container>\n            <!-- end modal-btm-detail -->\n        </app-ui-modal-style-img-base>\n        <!-- end of remind delete -->\n    \n        <!-- remind update -->\n        <app-ui-modal-style-img-base [isContnetFull]=\"true\"  [isPopupOpen]=\"isDisplayUpdateRemind\" (close)=\"afterDisplayUpdateRemind()\">\n                <ng-container textType=\"modal-img-detail\">\n                    <img src=\"assets/img/icon-cust-remind.svg\">\n                </ng-container>\n                <ng-container textType=\"modal-title-detail\">{{language.updateProtectionTitle |translate }}</ng-container>\n                <ng-container textType=\"modal-content-detail\">\n                    <!-- list -->\n                    <app-ui-list-data2>\n                    <!-- data -->\n                    <ng-container textType=\"data\">\n                        <app-ui-form-checkbox3 [isDisable]=\"true\" [nxValue]=\"false\" *ngFor=\"let alertItem of alertOverTimeList;\">\n                        <ng-container checkboxText=\"style3\">{{alertItem.name}}</ng-container>\n                        </app-ui-form-checkbox3>\n                    </ng-container>\n                    <!-- end of data -->\n                    </app-ui-list-data2>\n                    <!-- end of list -->\n                </ng-container>\n                <!-- end modal-content-detail -->\n                <ng-container textType=\"modal-btm-detail\">\n                    <div class=\"btm-set-block\">\n                    <span class=\"ps-text\">\n                        {{alertOverTimeList.length}} {{language.people |translate }}\n                    </span>\n                    <!-- btn -->\n                    <app-ui-btn-layout>\n                        <app-ui-btn [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\" [id]=\"'btn_dashboardUpdateConfirm'\" Action action=\"dashboardUpdateConfirm\" (actionClick)=\"afterDisplayUpdateRemind()\">\n                        <ng-container TextType=\"cust\">{{language.homeConfirm |translate }}</ng-container>\n                        </app-ui-btn>\n                    </app-ui-btn-layout>\n                    <!-- end of btn -->\n                    </div>\n        \n                </ng-container>\n                <!-- end modal-btm-detail -->\n        </app-ui-modal-style-img-base>\n        <!-- end of remind update -->\n        \n    </ng-template>\n    <!-- end of pcBlock -->\n    \n    <!-- if: mobile -->\n    <ng-template #mobileBlock>\n        <app-ui-modal-style-cust [isHeightFix]=\"true\"  [(isPopupOpen)]=\"isMobilePopupOpen\" *ngIf=\"isMobilePopupOpen\">\n            <div class=\"fix-close-block\">\n                <div class=\"close-button\" (click)=\"isMobilePopupOpen = false\">\n                    <img src=\"assets/img/icon-close-lg.svg\">\n                </div>\n            </div>\n            <ng-container *ngTemplateOutlet=\"homeSide\"></ng-container>  \n        </app-ui-modal-style-cust>\n        \n        <app-ui-infinite-scroll [syncFunction]=\"['DASHBOARD']\" class=\"dashboard-mobile-detail-block\" (loadingCallback)=\"loadContent($event)\"  (refreshCallback)=\"refreshContent($event)\" [(loadingFinish)]=\"isLoadingFinish\" [(refreshFinish)]=\"isRefreshFinish\" [lazyLoading]=\"isLazyLoading\" [translateText]=\"language.loading | translate\">\n            <ng-container *ngTemplateOutlet=\"homeMain\"></ng-container>\n        </app-ui-infinite-scroll>\n    \n    \n        <!-- remind delete -->\n        <app-ui-modal-style-img-base [isContnetFull]=\"true\"  [isPopupOpen]=\"isDisplayDeleteRemind\" (close)=\"afterDisplayDeleteRemind()\">\n            <ng-container textType=\"modal-img-detail\">\n                <img src=\"assets/img/icon-cust-remind.svg\">\n            </ng-container>\n            <ng-container textType=\"modal-title-detail\">{{language.deleteProtectionTitle |translate }}</ng-container>\n            <ng-container textType=\"modal-content-detail\">\n                <!-- list -->\n                <app-ui-list-data2>\n                <!-- data -->\n                <ng-container textType=\"data\">\n                    <app-ui-form-checkbox3 [isDisable]=\"true\" [nxValue]=\"false\" *ngFor=\"let alertItem of alertAutoDeleteCustomer;\">\n                        <ng-container checkboxText=\"style3\">{{alertItem.name}}</ng-container>\n                        </app-ui-form-checkbox3>\n        \n                </ng-container>\n                <!-- end of data -->\n                </app-ui-list-data2>\n                <!-- end of list -->\n            </ng-container>\n            <!-- end modal-content-detail -->\n            <ng-container textType=\"modal-btm-detail\">\n                <div class=\"btm-set-block\">\n                <span class=\"ps-text\">\n                    {{alertAutoDeleteCustomer.length}}  {{language.people |translate }}\n                </span>\n                <!-- btn -->\n                <app-ui-btn-layout>\n                    <app-ui-btn [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\" [id]=\"'btn_dashboardDeleteConfirm'\" Action action=\"dashboardDeleteConfirm\" (actionClick)=\"afterDisplayDeleteRemind()\">\n                    <ng-container TextType=\"cust\">{{language.homeConfirm |translate }}</ng-container>\n                    </app-ui-btn>\n                </app-ui-btn-layout>\n                <!-- end of btn -->\n                </div>\n        \n            </ng-container>\n            <!-- end modal-btm-detail -->\n        </app-ui-modal-style-img-base>\n        <!-- end of remind delete -->\n    \n        <!-- remind update -->\n        <app-ui-modal-style-img-base [isContnetFull]=\"true\"  [isPopupOpen]=\"isDisplayUpdateRemind\" (close)=\"afterDisplayUpdateRemind()\">\n                <ng-container textType=\"modal-img-detail\">\n                    <img src=\"assets/img/icon-cust-remind.svg\">\n                </ng-container>\n                <ng-container textType=\"modal-title-detail\">{{language.updateProtectionTitle |translate }}</ng-container>\n                <ng-container textType=\"modal-content-detail\">\n                    <!-- list -->\n                    <app-ui-list-data2>\n                    <!-- data -->\n                    <ng-container textType=\"data\">\n                        <app-ui-form-checkbox3 [isDisable]=\"true\" [nxValue]=\"false\" *ngFor=\"let alertItem of alertOverTimeList;\">\n                        <ng-container checkboxText=\"style3\">{{alertItem.name}}</ng-container>\n                        </app-ui-form-checkbox3>\n                    </ng-container>\n                    <!-- end of data -->\n                    </app-ui-list-data2>\n                    <!-- end of list -->\n                </ng-container>\n                <!-- end modal-content-detail -->\n                <ng-container textType=\"modal-btm-detail\">\n                    <div class=\"btm-set-block\">\n                    <span class=\"ps-text\">\n                        {{alertOverTimeList.length}} {{language.people |translate }}\n                    </span>\n                    <!-- btn -->\n                    <app-ui-btn-layout>\n                        <app-ui-btn [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\" [id]=\"'btn_dashboardUpdateConfirm'\" Action action=\"dashboardUpdateConfirm\" (actionClick)=\"afterDisplayUpdateRemind()\">\n                        <ng-container TextType=\"cust\">{{language.confirm |translate }}</ng-container>\n                        </app-ui-btn>\n                    </app-ui-btn-layout>\n                    <!-- end of btn -->\n                    </div>\n        \n                </ng-container>\n                <!-- end modal-btm-detail -->\n        </app-ui-modal-style-img-base>\n        <!-- end of remind update -->\n    \n    </ng-template>\n    <!-- end of mobile -->\n    \n    <!-- --- modal --- -->\n    <!--delete block -->\n    <app-ui-modal-confirm #calendarDelete [(isPopupOpen)]=\"isCalendarDelete\" (onConfirm)=\"onClickDeleteConfirm()\" [title]=\"language.delete | translate\"\n        [message]=\"language.deleteDataBody | translate\" [cancelBtnText]=\"language.no | translate\" [confirmBtnText]=\"language.yes | translate\">\n    </app-ui-modal-confirm>\n    <!-- end: Appointment delete -->\n    \n    <!-- Delete Success -->\n    <app-ui-modal-style-feedback [(isPopupOpen)]=\"isPopupDeleteSuccess\">\n        <ng-container textType=\"modal-img-detail\">\n            <nx-icon name='check' size='auto'></nx-icon>\n        </ng-container>\n        <ng-container textType=\"modal-content-detail\">{{language.notificationDeleteFeedback | translate}}</ng-container>\n    </app-ui-modal-style-feedback>\n    <!-- end of Delete Success -->\n    \n    <!-- detail block -->\n    <app-ui-modal-style-text1 class=\"wd-md\" [(isPopupOpen)]=\"isExpandDetail\">\n        <ng-container textType=\"modal-title-detail\">{{language.homeAppointmentDetails | translate}}</ng-container>\n        <ng-container textType=\"modal-content-detail\">\n            <snd-calendar-detail [calendarEventDetail]=\"calendarEventDetail\" [customerClientName]=\"customerClientName\"></snd-calendar-detail>\n        </ng-container>\n    <!-- end: popup-content -->\n        <ng-container textType=\"modal-btm-detail\">\n            <app-ui-btn-layout>\n                <app-ui-btn [btnHeight]=\"'sm'\" [btnStyle]=\"'border'\" [id]=\"'btn_dashboardAppointmentDelete'\" Action action='dashboardAppointmentDelete' (actionClick)=\"delete()\">\n                    <ng-container TextType=\"cust\">{{language.homeDelete | translate}}</ng-container>\n                </app-ui-btn>\n                <app-ui-btn [btnHeight]=\"'sm'\" [id]=\"'btn_dashboardAppointmentEdit'\" Action action='dashboardAppointmentEdit' (actionClick)=\"editEvent()\">\n                <!-- <ng-container TextType=\"cust\"><span [routerLink]=\"['editEvent']\">EDIT</span></ng-container> -->\n                <ng-container TextType=\"cust\">{{language.homeEdit | translate}}</ng-container>\n                </app-ui-btn>\n            </app-ui-btn-layout>\n        </ng-container>\n    <!-- end: modal-btm-detail -->\n    </app-ui-modal-style-text1>\n    <!-- end: Appointment Detail -->\n    \n    <!--add/edit calendar popup-->\n    <app-ui-modal-style-text1 class=\"wd-lg calendar-edit-content\"\n                            [(isPopupOpen)]=\"isExpandEdit\"\n                            [isScrollToTop]=\"true\"\n                            [isBackdropClose]=\"true\">\n        <ng-container textType=\"modal-title-detail\">{{language.homeAppointment | translate}}</ng-container>\n        <ng-container textType=\"modal-content-detail\">\n            <snd-calendar-edit [clientID]=\"calendarEventDetail?calendarEventDetail.clientID :'' \"\n                            [todayCalendarEvent]=\"calendarEventList\"\n                            [isSaveClick]=\"isSaveClick\"\n                            [viewDate]=\"viewDate\"\n                            [translateMap]=\"translateMap\"\n                            (saveEvent)=\"onSaveCalendarEvent($event)\"\n                            [customerItemList]=\"customerItemList\"></snd-calendar-edit>\n    \n        </ng-container>\n    <!-- end popup-content -->\n        <ng-container textType=\"modal-btm-detail\">\n            <app-ui-btn-layout>\n                <app-ui-btn [btnWd]=\"'md'\" [btnHeight]=\"'sm'\" [id]=\"'btn_dashboardAppointmentSave'\" Action action='dashboardAppointmentSave' (actionClick)=\"onClickAppointmentSave()\">\n                    <ng-container TextType=\"cust\">{{language.homeSave | translate}}</ng-container>\n                </app-ui-btn>\n            </app-ui-btn-layout>\n        </ng-container>\n    <!-- end modal-btm-detail -->\n    </app-ui-modal-style-text1>\n    <!-- end: add/edit calendar popup -->\n    \n    <!--  save feedback -->\n    <app-ui-modal-style-feedback [(isPopupOpen)]=\"isDisplaySavePopup\">\n        <ng-container textType=\"modal-img-detail\">\n            <nx-icon name='check' size='auto'></nx-icon>\n        </ng-container>\n        <ng-container textType=\"modal-content-detail\">{{language.notificationSaveFeedback |translate }}</ng-container>\n    </app-ui-modal-style-feedback>\n    <!-- end of save feedback -->\n\n    <!-- --- end of modal --- -->\n</ng-container>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@media (min-width:screen-nb){.fix-close-block{display:none}}.fix-close-block{position:absolute;width:100%;top:0;left:0;text-align:right;background-color:rgba(73,110,189,.05)}.fix-close-block img{width:44px;height:44px;padding:10px}@media (max-width:1023px){:host{display:block;overflow:hidden}}:host ::ng-deep .layout-content-main .refresh-content{background-color:inherit}:host ::ng-deep .layout-content-main .infiniti-scroll{height:100vh}:host ::ng-deep app-ui-infinite-scroll.dashboard-mobile-detail-block .infiniti-scroll{height:100%;max-height:calc(100vh - 55px - 55px);background-color:#f5f5f5}@supports (top:env(safe-area-inset-top)){:host ::ng-deep app-ui-infinite-scroll.dashboard-mobile-detail-block .infiniti-scroll{max-height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom) - 55px - 55px)}}@supports (top:constant(safe-area-inset-top)){:host ::ng-deep app-ui-infinite-scroll.dashboard-mobile-detail-block .infiniti-scroll{max-height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 55px - 55px)}}:host ::ng-deep app-ui-infinite-scroll.dashboard-mobile-detail-block .scroll-content{overflow:hidden}.home-list-side-menu{display:block;width:100%}"]
                    }] }
        ];
        DashboardComponent.ctorParameters = function () {
            return [
                { type: integrationCalendarCustomer.CustomerUtils },
                { type: DashboardService },
                { type: integrationCalendarCustomer.CalendarService },
                { type: integrationCalendarCustomer.CustomerService },
                { type: i0.ChangeDetectorRef },
                { type: i1.TranslateService },
                { type: i1.ProfileCodeService },
                { type: i1.DefaultLoginMgr },
                { type: i1.DataSyncService },
                { type: i1.NotificationMgr },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.ConfigToken,] }] }
            ];
        };
        DashboardComponent.propDecorators = {
            onResize: [{ type: i0.HostListener, args: ['window:resize', ['$event'],] }]
        };
        return DashboardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { CONTENTGAP } from 'projects/ui/src/lib/components/ui-content-b-gap/ui-content-b-gap-enum';
    // import { CONTENTGAP } from 'projects/ui/src/public_api';
    var DashboardPerformanceComponent = /** @class */ (function () {
        function DashboardPerformanceComponent(loginMgr) {
            this.loginMgr = loginMgr;
            this.GAP_SIZE_20 = ui.CONTENTGAP.GAP20;
            this.role = null;
            this.language = new i1.Language();
            this.tabIndex = 0;
            this.init();
            console.debug("check start ......");
        }
        /**
         * @return {?}
         */
        DashboardPerformanceComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        //LEADER  //AG   <--- page
        //LEADER  //AG   <--- page
        /**
         * @private
         * @return {?}
         */
        DashboardPerformanceComponent.prototype.init =
            //LEADER  //AG   <--- page
            /**
             * @private
             * @return {?}
             */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var loginInfo, identity, agentRole;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loginMgr.getLoginInfo().pipe(operators.take(1)).toPromise()];
                            case 1:
                                loginInfo = _a.sent();
                                console.debug("dashboard login info: ", loginInfo);
                                identity = loginInfo.AppUseMode[loginInfo.AppUseMode.length - 1];
                                console.debug("dashboard identity: ", identity);
                                agentRole = this._ConvertIdentityToRolesType(identity);
                                console.debug("dashboard agent rolepage: ", agentRole);
                                this._ShowRolePage(agentRole);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} index
         * @return {?}
         */
        DashboardPerformanceComponent.prototype.tabChangeEvent = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.tabIndex = index;
            };
        /**
         * @private
         * @param {?} role
         * @return {?}
         */
        DashboardPerformanceComponent.prototype._ShowRolePage = /**
         * @private
         * @param {?} role
         * @return {?}
         */
            function (role) {
                switch (role) {
                    case goal.ROLE.AGENT:
                        this.role = "AG";
                        break;
                    case goal.ROLE.AGENTLEADER:
                        this.role = "LEADER";
                        break;
                    case goal.ROLE.ZONEHEAD:
                    case goal.ROLE.CAO:
                        this.role = "CAO";
                        break;
                }
                //this.role = (role == ROLE.AGENT) ? "AG": "LEADER";
            };
        /**
         * @private
         * @param {?} identity
         * @return {?}
         */
        DashboardPerformanceComponent.prototype._ConvertIdentityToRolesType = /**
         * @private
         * @param {?} identity
         * @return {?}
         */
            function (identity) {
                //AG AL Manager Supervisor
                switch (identity) {
                    case "AG":
                        return goal.ROLE.AGENT;
                    case "AL":
                        return goal.ROLE.AGENTLEADER;
                    case "Manager":
                        return goal.ROLE.ZONEHEAD;
                    case "Supervisor":
                        return goal.ROLE.CAO;
                }
            };
        DashboardPerformanceComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snd-dashboard-performance',
                        template: "<ng-container *ngIf=\"role==='LEADER'\">\n  <!-- tab -->\n  <app-ui-content-b-gap [gapSize]=\"GAP_SIZE_20\">\n    <app-ui-tab-style1 tabInfo [action]=\"'dashboardPerformanceTab'\" (onTabChildClick)=\"tabChangeEvent($event)\">\n      <app-ui-tab-child>{{language.homePersonal | translate}}</app-ui-tab-child>\n      <app-ui-tab-child>{{language.homeTeam | translate}}</app-ui-tab-child>\n    </app-ui-tab-style1>\n  </app-ui-content-b-gap>\n  <!-- end of tab -->\n\n  <!-- tab content -->\n  <div #tabContent class=\"tab-content-block\">\n    <div class=\"tab-cotent-detail tab-content_0 \" [ngClass]=\"tabIndex == 0? ' active' : '' \">\n      <snd-dashboard-performance-personal></snd-dashboard-performance-personal>\n    </div>\n    <div class=\"tab-cotent-detail tab-content_1\" [ngClass]=\"tabIndex == 1? ' active' : '' \">\n      <snd-dashboard-performance-team></snd-dashboard-performance-team>\n    </div>\n  </div>\n  <!-- end of tab content -->\n</ng-container>\n\n<ng-container *ngIf=\"role==='AG'\">\n  <snd-dashboard-performance-personal></snd-dashboard-performance-personal>\n</ng-container>\n\n<ng-container *ngIf=\"role==='CAO'\">\n  <snd-dashboard-performance-team></snd-dashboard-performance-team>\n</ng-container>\n\n\n",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}[class*=tab-content_]{opacity:0;transition:none;position:absolute;z-index:-1;-webkit-transform-origin:top;transform-origin:top}[class*=tab-content_]:not(.active) *{display:none}[class*=tab-content_].active{position:relative;opacity:1;z-index:1;transition:.2s;display:flex;flex-wrap:wrap}.tab-content-block{padding-bottom:20px}"]
                    }] }
        ];
        DashboardPerformanceComponent.ctorParameters = function () {
            return [
                { type: i1.DefaultLoginMgr }
            ];
        };
        return DashboardPerformanceComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardPerformanceTeamComponent = /** @class */ (function () {
        function DashboardPerformanceTeamComponent(dashboardService, loginMgr, errorHandler, router, progressService) {
            this.dashboardService = dashboardService;
            this.loginMgr = loginMgr;
            this.errorHandler = errorHandler;
            this.router = router;
            this.progressService = progressService;
            this.dashboardPerformanceTeam = [];
            this.data = null;
            this.isLoadDataFinish = false;
            this.language = new i1.Language();
            this.windowWidth = null;
            this.init();
        }
        /**
         * @return {?}
         */
        DashboardPerformanceTeamComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.windowWidth = window.innerWidth;
            };
        /**
         * @private
         * @return {?}
         */
        DashboardPerformanceTeamComponent.prototype.init = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var loginInfo, _a, error_1;
                    var _this = this;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 3, , 4]);
                                return [4 /*yield*/, this.loginMgr.getLoginInfo().pipe(operators.take(1)).toPromise()];
                            case 1:
                                loginInfo = _b.sent();
                                this.loginMgr.getLoginInfo().subscribe(( /**
                                 * @param {?} info
                                 * @return {?}
                                 */function (info) {
                                    console.log('check permission subscribe:', info);
                                    if (info)
                                        _this.userRole = info.AppUseMode[0];
                                    console.log("get AppUseMode：", _this.userRole);
                                }));
                                _a = this;
                                return [4 /*yield*/, this.dashboardService.getPerformanceData("T", this.userRole).toPromise()];
                            case 2:
                                _a.data = _b.sent();
                                if (this.data != null) {
                                    // this.isLoadDataFinish = true;
                                    // this.timeBaseTitle = this.data.timeBaseTitle;
                                    // console.log(" this.timeBaseTitle", this.timeBaseTitle);
                                    // this.data.datas.forEach((val,key) => {
                                    //   let MonthlyProgressRate = val["MonthlyProgressCurrent"] / val["MonthlyProgressTotal"];
                                    //   val["MonthlyProgressRate"] = this.convertNumberDigital(MonthlyProgressRate, 2);
                                    // });
                                    this.isLoadDataFinish = true;
                                    this.timeBaseTitle = this.data.timeBaseTitle;
                                    this.ShowMonthlyProgressRateArr = new Array();
                                    this.ShowMonthlyProgressRateBarArr = new Array();
                                    console.log(" this.timeBaseTitle", this.timeBaseTitle);
                                    this.data.datas.forEach(( /**
                                     * @param {?} val
                                     * @param {?} key
                                     * @return {?}
                                     */function (val, key) {
                                        /** @type {?} */
                                        var MonthlyProgressRate = _this.getRate(val["MonthlyProgressCurrent"], val["MonthlyProgressTotal"]);
                                        val["MonthlyProgressRate"] = _this.convertNumberDigital(MonthlyProgressRate, 2);
                                        /** @type {?} */
                                        var pc = _this.getPercentage(val["MonthlyProgressRate"]);
                                        /** @type {?} */
                                        var monthlyNumerator = _this.convertToNumber(val["MonthlyProgressCurrent"]);
                                        /** @type {?} */
                                        var monthlyDenominator = _this.convertToNumber(val["MonthlyProgressTotal"]);
                                        //let pcb = this.getPercentageBar(MonthlyProgressRate);
                                        /** @type {?} */
                                        var pcb = _this.getMonthlyBarLength(monthlyNumerator, monthlyDenominator, 1.5, 150);
                                        _this.ShowMonthlyProgressRateArr.push(pc);
                                        _this.ShowMonthlyProgressRateBarArr.push(pcb);
                                    }));
                                }
                                return [3 /*break*/, 4];
                            case 3:
                                error_1 = _b.sent();
                                this.errorHandler.handleError(new i1.APPError('F00600', 'DashboardPerformanceTeam init fail!' + error_1.message));
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        DashboardPerformanceTeamComponent.prototype.getRate = /**
         * @private
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
            function (a, b) {
                if (a == -1 || !i1.NumberUtils.isNumber(a))
                    return -1;
                if (b == -1 || !i1.NumberUtils.isNumber(b))
                    return -1;
                return a / b;
            };
        /**
         * @private
         * @param {?} a
         * @return {?}
         */
        DashboardPerformanceTeamComponent.prototype.getPercentage = /**
         * @private
         * @param {?} a
         * @return {?}
         */
            function (a) {
                if (a == -1 || !i1.NumberUtils.isNumber(a))
                    return "--";
                return (a * 100).toString();
            };
        /**
         * @private
         * @param {?} a
         * @return {?}
         */
        DashboardPerformanceTeamComponent.prototype.getPercentageBar = /**
         * @private
         * @param {?} a
         * @return {?}
         */
            function (a) {
                if (a == -1 || !i1.NumberUtils.isNumber(a))
                    return "0";
                return (a).toString();
            };
        /**
         * @private
         * @param {?} str
         * @return {?}
         */
        DashboardPerformanceTeamComponent.prototype.convertToNumber = /**
         * @private
         * @param {?} str
         * @return {?}
         */
            function (str) {
                /** @type {?} */
                var convert = Number(str);
                if (convert == NaN) {
                    return 0;
                }
                else if (convert <= -1) {
                    return 0;
                }
                else if (convert == 0) {
                    return 0;
                }
                else {
                    return convert;
                }
            };
        /**
         * @private
         * @param {?} monthlyNumerator
         * @param {?} monthlyDenominator
         * @param {?} maxLength
         * @param {?} maxBase
         * @return {?}
         */
        DashboardPerformanceTeamComponent.prototype.getMonthlyBarLength = /**
         * @private
         * @param {?} monthlyNumerator
         * @param {?} monthlyDenominator
         * @param {?} maxLength
         * @param {?} maxBase
         * @return {?}
         */
            function (monthlyNumerator, monthlyDenominator, maxLength, maxBase) {
                if (monthlyNumerator == 0 || monthlyDenominator == 0) {
                    return "0";
                }
                /** @type {?} */
                var ans = Math.round((monthlyNumerator / monthlyDenominator) * 100) / maxBase;
                return (ans >= maxLength) ? maxLength.toString() : ans.toString();
            };
        //四捨五入
        //四捨五入
        /**
         * @private
         * @param {?} num
         * @param {?} digit
         * @return {?}
         */
        DashboardPerformanceTeamComponent.prototype.convertNumberDigital =
            //四捨五入
            /**
             * @private
             * @param {?} num
             * @param {?} digit
             * @return {?}
             */
            function (num, digit) {
                if (digit === 0)
                    return Math.round(num);
                else if (digit > 0) {
                    return Math.round(num * Math.pow(10, digit)) / (Math.pow(10, digit));
                }
                else {
                    return num;
                }
            };
        //轉換千位數表示法（000,000,000）
        //轉換千位數表示法（000,000,000）
        /**
         * @param {?} num
         * @return {?}
         */
        DashboardPerformanceTeamComponent.prototype.convertNumberThousand =
            //轉換千位數表示法（000,000,000）
            /**
             * @param {?} num
             * @return {?}
             */
            function (num) {
                if (num <= -1 || !i1.NumberUtils.isNumber(num))
                    return "--";
                /** @type {?} */
                var numString = num.toString();
                /** @type {?} */
                var pattern = /(-?\d+)(\d{3})/;
                while (pattern.test(numString)) {
                    numString = numString.replace(pattern, "$1,$2");
                }
                return numString;
            };
        /**
         * @return {?}
         */
        DashboardPerformanceTeamComponent.prototype.goToProgress = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var tag = progress.Tag.TeamTag;
                this.progressService.SetCurrentNavigationTag(tag);
                this.router.navigate("Progress");
            };
        DashboardPerformanceTeamComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snd-dashboard-performance-team',
                        template: "<div class=\"dashboard-performance-team\">\n  <app-ui-card-content-btn [noPadding]=\"true\" class=\"msg-card-block msg-progress-block\">\n    <ng-container infoContent>\n      <div class=\"card-block\">\n        <div class=\"card_title\" *ngIf=\"timeBaseTitle=='monthly'\">{{language.monthlyProgress | translate}}</div>\n        <div class=\"card_title\" *ngIf=\"timeBaseTitle=='yearly'\">{{language.yearlyProgress | translate}}</div>\n\n        <!-- progress bar -->\n        <ng-container *ngIf=\"isLoadDataFinish\">\n        <div class=\"progressbar-main-block\" *ngFor=\"let team of data.datas; let i = index\" >\n          <!-- top num -->\n          <div class=\"num-block\">\n            <div class=\"num-title\">{{team.title | translate}}</div>\n            <div class=\"font-size_h2 num-value\">{{ShowMonthlyProgressRateArr[i] | numberFormat:0 }}\n            <span class=\"num-unit\">%</span></div>\n            <!-- <div class=\"font-size_h2 num-value\">{{team.MonthlyProgressRate*100}}</div> -->\n          </div>\n          <!-- end of top num -->\n          <!-- progress group --> \n          <div class=\"pregress-group-block\">\n            <!-- progress -->\n            <div class=\"progressbar-block\"> <!-- team.MonthlyProgressRate -->\n              <app-ui-progress [isTextTop]=\"false\" [styleSize]=\"'lg'\" [value]=\"ShowMonthlyProgressRateBarArr[i]\" [flagValue]=\"0.6667\"\n                [flagText]=\"'100%'\"></app-ui-progress>\n            </div>\n            <!-- end of progreww -->\n            <!-- btm value -->\n            <div class=\"value-block\">\n              <div class=\"value-detail-block\">\n                <div class=\"side-value left-value\">\n                  <!-- <span class=\"value-unit\">$</span> -->\n                  <span class=\"value-num\">{{ team.MonthlyProgressCurrent | numberFormat }}</span>\n                </div>\n                <div class=\"mid-value\">/</div>\n                <div class=\"side-value right-value\">\n                  <!-- <span class=\"value-unit\">$</span> -->\n                  <span class=\"value-num\">{{ team.MonthlyProgressTotal | numberFormat }}</span>\n                </div>\n              </div>\n            </div>\n            <!-- end of btm value -->\n          </div>\n          <!-- end of progress group -->\n        </div>\n        </ng-container>\n        <!-- end of progress bar -->\n        <!-- <app-ui-btn-layout>\n          <app-ui-btn [btnHeight]=\"'sm'\" [btnHeight]=\"'md'\">\n            <ng-container TextType=\"cust\">{{language.detail | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout> -->\n        <div class=\"link-wrapper\">\n          <app-ui-link Action action=\"DashboardPerformanceGoToProgress\" (actionClick)=\"goToProgress()\">\n            <ng-container textType=\"linktext\">{{language.homeDetails | translate}}</ng-container>\n          </app-ui-link>\n        </div>\n\n      </div>\n    </ng-container>\n  </app-ui-card-content-btn>\n</div>\n",
                        styles: [":host{width:100%}.msg-progress-block{width:100%}.msg-progress-block .card-block{padding:20px}.msg-progress-block .card_title{font-size:1rem;font-weight:700;color:#414141;padding-bottom:20px}.msg-progress-block ::ng-deep .card-content-btn{width:100%}.msg-progress-block ::ng-deep .btn-block{margin-top:30px;margin-bottom:10px}.msg-progress-block .link-wrapper{margin-top:25px;text-align:center}.msg-progress-block.card-pos-center .card-block{text-align:center}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep .chart-block{color:#007ab3;text-align:center;padding:0 13px}:host ::ng-deep .chart-block .progress-total-value{font-weight:700;display:block;margin-bottom:8px;color:#003781}:host ::ng-deep .chart-block .progress-total-unit{font-size:.875rem;font-weight:700;color:#767676}.progressbar-main-block{display:flex;align-items:flex-end}.progressbar-main-block+.progressbar-main-block{margin-top:15px}.progressbar-main-block .num-block{color:#007ab3;display:flex;align-items:baseline;padding-bottom:10px;flex-wrap:wrap;width:120px;flex-grow:0}.progressbar-main-block .num-block .num-title{font-size:1.25rem;line-height:28px;font-weight:700;width:100%;display:block}.progressbar-main-block .num-block .num-unit{font-size:1.25rem;line-height:28px;font-weight:700}.progressbar-main-block .num-block .num-value{display:inline-block;padding:0 5px 0 0;text-align:center;font-weight:700}.progressbar-main-block .pregress-group-block{width:calc(100% - 120px);flex-grow:0;flex-shrink:0;display:inline-block;justify-content:flex-end}.progressbar-main-block .value-block{text-align:right;padding-top:10px}.progressbar-main-block .value-block .value-detail-block{display:flex;line-height:28px;justify-content:flex-end}.progressbar-main-block .value-block .value-detail-block .side-value{font-size:1.25rem;font-weight:700}.progressbar-main-block .value-block .value-detail-block .side-value.left-value{color:#007ab3}.progressbar-main-block .value-block .value-detail-block .mid-value{font-size:1.25rem;font-weight:700;margin:0 5px}@media (max-width:1023px){.progressbar-main-block{display:block}.progressbar-main-block .num-block{width:100%;align-items:center}.progressbar-main-block .num-block .num-title{max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.progressbar-main-block .num-block .num-value{margin-left:10px}.progressbar-main-block .pregress-group-block{width:100%}}"]
                    }] }
        ];
        DashboardPerformanceTeamComponent.ctorParameters = function () {
            return [
                { type: DashboardService },
                { type: i1.DefaultLoginMgr },
                { type: i0.ErrorHandler },
                { type: i1.AppRouter },
                { type: progress.ProgressService }
            ];
        };
        return DashboardPerformanceTeamComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardPerformancePersonalComponent = /** @class */ (function () {
        function DashboardPerformancePersonalComponent(dashboardService, errorHandler, router, progressService) {
            this.dashboardService = dashboardService;
            this.errorHandler = errorHandler;
            this.router = router;
            this.progressService = progressService;
            this.data = null;
            this.language = new i1.Language();
            this.windowWidth = null;
            //public ShowMonthlyProgressRate: string = "--";
            // public ShowMonthlyProgressRateBar: string = "0";
            //public ShowActivitiesPoints: string = "--";
            //activity 
            this.ShowCurrentActivityPoints = "--";
            this.ShowCurrentActivityPointsBar = "0";
            this.ShowCurrentMonthlyProgressRate = "--";
            this.ShowCurrentMonthlyProgressBar = "0";
            this.ShowCurrentMonthlyProgress = "--";
            this.ShowCurrentMonthlyTotal = "--";
            this.init();
        }
        /**
         * @return {?}
         */
        DashboardPerformancePersonalComponent.prototype.windowSize = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var width = window.innerWidth;
                return (width > 1023) ? true : false;
            };
        /**
         * @return {?}
         */
        DashboardPerformancePersonalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.windowWidth = window.innerWidth;
                this.windowSize();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DashboardPerformancePersonalComponent.prototype.onResize = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.windowSize();
            };
        /**
         * @private
         * @return {?}
         */
        DashboardPerformancePersonalComponent.prototype.init = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, totalPoints, limitPoints, monthlyNumerator, monthlyDenominator, error_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                _a = this;
                                return [4 /*yield*/, this.dashboardService.getPerformanceData("P").toPromise()];
                            case 1:
                                _a.data = _b.sent();
                                console.debug("test i got this shit: ", this.data);
                                totalPoints = this.convertToNumber(this.data["ActivitiesPoints"]);
                                limitPoints = this.convertToNumber(this.data["ActivitiesPointsTotal"]);
                                monthlyNumerator = this.convertToNumber(this.data["MonthlyProgressCurrent"]);
                                monthlyDenominator = this.convertToNumber(this.data["MonthlyProgressTotal"]);
                                //get activity points
                                this.ShowCurrentActivityPoints = (this.data["ActivitiesPoints"] <= -1) ? "--" : this.data["ActivitiesPoints"];
                                this.ShowCurrentActivityPointsBar = this.getActivityCircleBar(totalPoints, limitPoints, 1);
                                console.debug("ans111: ", this.ShowCurrentActivityPointsBar);
                                //get monthly points
                                this.ShowCurrentMonthlyProgress = (this.data["MonthlyProgressCurrent"] <= -1) ? "--" : this.data["MonthlyProgressCurrent"];
                                this.ShowCurrentMonthlyTotal = (this.data["MonthlyProgressTotal"] <= -1) ? "--" : this.data["MonthlyProgressTotal"];
                                //monthly percentage x%
                                this.ShowCurrentMonthlyProgressRate = this.getMonthlyPercentage(monthlyNumerator, monthlyDenominator);
                                console.debug("ans222: ", this.ShowCurrentMonthlyProgressRate);
                                //month bar length
                                this.ShowCurrentMonthlyProgressBar = this.getMonthlyBarLength(monthlyNumerator, monthlyDenominator, 1.5, 150);
                                console.debug("ans333: ", this.ShowCurrentMonthlyProgressBar);
                                return [3 /*break*/, 3];
                            case 2:
                                error_1 = _b.sent();
                                this.errorHandler.handleError(new i1.APPError('F00601', 'DashboardPerformancePersonal init fail!' + error_1.message));
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} str
         * @return {?}
         */
        DashboardPerformancePersonalComponent.prototype.convertToNumber = /**
         * @private
         * @param {?} str
         * @return {?}
         */
            function (str) {
                /** @type {?} */
                var convert = Number(str);
                if (convert == NaN) {
                    return 0;
                }
                else if (convert <= -1) {
                    return 0;
                }
                else if (convert == 0) {
                    return 0;
                }
                else {
                    return convert;
                }
            };
        /**
         * @private
         * @param {?} totalPoints
         * @param {?} limitPoints
         * @param {?} maxLength
         * @return {?}
         */
        DashboardPerformancePersonalComponent.prototype.getActivityCircleBar = /**
         * @private
         * @param {?} totalPoints
         * @param {?} limitPoints
         * @param {?} maxLength
         * @return {?}
         */
            function (totalPoints, limitPoints, maxLength) {
                if (totalPoints == 0 || limitPoints == 0) {
                    return "0";
                }
                /** @type {?} */
                var ans = (totalPoints / limitPoints);
                if (ans >= maxLength) {
                    return maxLength.toString();
                }
                else {
                    return ans.toString();
                }
            };
        /**
         * @private
         * @param {?} monthlyNumerator
         * @param {?} monthlyDenominator
         * @return {?}
         */
        DashboardPerformancePersonalComponent.prototype.getMonthlyPercentage = /**
         * @private
         * @param {?} monthlyNumerator
         * @param {?} monthlyDenominator
         * @return {?}
         */
            function (monthlyNumerator, monthlyDenominator) {
                if (monthlyNumerator == 0 || monthlyDenominator == 0) {
                    return "0";
                }
                /** @type {?} */
                var ans = (monthlyNumerator / monthlyDenominator) * 100;
                /** @type {?} */
                var percentage = Math.round(ans);
                return percentage.toString();
            };
        /**
         * @private
         * @param {?} monthlyNumerator
         * @param {?} monthlyDenominator
         * @param {?} maxLength
         * @param {?} maxBase
         * @return {?}
         */
        DashboardPerformancePersonalComponent.prototype.getMonthlyBarLength = /**
         * @private
         * @param {?} monthlyNumerator
         * @param {?} monthlyDenominator
         * @param {?} maxLength
         * @param {?} maxBase
         * @return {?}
         */
            function (monthlyNumerator, monthlyDenominator, maxLength, maxBase) {
                if (monthlyNumerator == 0 || monthlyDenominator == 0) {
                    return "0";
                }
                /** @type {?} */
                var ans = Math.round((monthlyNumerator / monthlyDenominator) * 100) / maxBase;
                return (ans >= maxLength) ? maxLength.toString() : ans.toString();
            };
        /**
         * @private
         * @param {?} sum
         * @param {?} max
         * @return {?}
         */
        DashboardPerformancePersonalComponent.prototype.getRate = /**
         * @private
         * @param {?} sum
         * @param {?} max
         * @return {?}
         */
            function (sum, max) {
                if (sum <= 0 || !i1.NumberUtils.isNumber(sum))
                    return 0;
                if (max <= 0 || !i1.NumberUtils.isNumber(max))
                    return 0;
                return (sum / max);
            };
        //四捨五入  
        //四捨五入  
        /**
         * @private
         * @param {?} num
         * @param {?} digit
         * @return {?}
         */
        DashboardPerformancePersonalComponent.prototype.convertNumberDigital =
            //四捨五入  
            /**
             * @private
             * @param {?} num
             * @param {?} digit
             * @return {?}
             */
            function (num, digit) {
                if (digit === 0)
                    return Math.round(num);
                else if (digit > 0) {
                    return Math.round(num * Math.pow(10, digit)) / (Math.pow(10, digit));
                }
                else {
                    return num;
                }
            };
        //轉換千位數表示法（000,000,000）
        //轉換千位數表示法（000,000,000）
        /**
         * @param {?} num
         * @return {?}
         */
        DashboardPerformancePersonalComponent.prototype.convertNumberThousand =
            //轉換千位數表示法（000,000,000）
            /**
             * @param {?} num
             * @return {?}
             */
            function (num) {
                if (num <= -1 || !i1.NumberUtils.isNumber(num))
                    return "--";
                /** @type {?} */
                var numString = num.toString();
                /** @type {?} */
                var pattern = /(-?\d+)(\d{3})/;
                while (pattern.test(numString)) {
                    numString = numString.replace(pattern, "$1,$2");
                }
                return numString;
            };
        /**
         * @return {?}
         */
        DashboardPerformancePersonalComponent.prototype.goToProgress = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var tag = progress.Tag.PersonalTag;
                this.progressService.SetCurrentNavigationTag(tag);
                this.router.navigate("Progress");
            };
        DashboardPerformancePersonalComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snd-dashboard-performance-personal',
                        template: "<div class=\"dashboard-performance-personsal\">\n  <app-ui-card-content-btn [noPadding]=\"true\" class=\"msg-card-block msg-progress-block card-pos-center msg-wd-sm\">\n    <ng-container infoContent>\n      <div class=\"card-block\">\n        <div class=\"card_title\">{{language.activitiesPoints | translate}}</div>\n        <!-- chart -->\n        <app-ui-progress-circle class=\"chart-block\" [value]=\"ShowCurrentActivityPointsBar\" [sizeR]=\"windowSize()? 51.5:65\"\n                                [sizeStroke]=\"5\" *ngIf= \"data\">\n          <div class=\"chart-content\">\n            <div class=\"progress-total-value font-size_h4\">{{ ShowCurrentActivityPoints | numberFormat }}</div><!-- {{data.ActivitiesPoints}} -->\n            <div class=\"progress-total-unit\">{{language.homeToday | translate}}</div>\n          </div>\n        </app-ui-progress-circle>\n        <!-- end of chart -->\n        <div class=\"link-wrapper\">\n          <app-ui-link Action action=\"DashboardPerformanceGoToProgress\" (actionClick)=\"goToProgress()\">\n            <ng-container textType=\"linktext\">{{language.homeDetails | translate}}</ng-container>\n          </app-ui-link>\n        </div>\n      </div>\n    </ng-container>\n  </app-ui-card-content-btn>\n\n  <app-ui-card-content-btn [noPadding]=\"true\" class=\"msg-card-block msg-progress-block msg-wd-md\">\n    <ng-container infoContent>\n      <div class=\"card-block\" *ngIf=\"data\">\n        <div class=\"card_title\">{{language.monthlyProgress | translate}}</div>\n\n        <!-- progress bar -->\n        <div class=\"progressbar-main-block\">\n          <!-- top num -->\n          <div class=\"num-block\">\n            <div class=\"num-title\">{{language.homeFYFC | translate}}</div>\n            <div class=\"num-value font-size_h2\">{{ ShowCurrentMonthlyProgressRate | numberFormat:0 }}\n            <span class=\"num-unit\">%</span></div>\n            <!-- <div class=\"num-value font-size_h2\">{{data.MonthlyProgressRate*100}}</div> -->\n          </div>\n          <!-- end of top num -->\n          <!-- progress group -->\n          <div class=\"pregress-group-block\">\n            <!-- progress -->\n            <div class=\"progressbar-block\"><!-- ShowCurrentMonthlyProgressBar -->\n              <app-ui-progress [isTextTop]=\"false\" [styleSize]=\"'lg'\" [value]=\"ShowCurrentMonthlyProgressBar\"\n                [flagValue]=\"0.6667\" [flagText]=\"'100%'\">\n              </app-ui-progress>\n            </div>\n            <!-- end of progreww -->\n            <!-- btm value -->\n            <div class=\"value-block\">\n              <div class=\"value-detail-block\">\n                <div class=\"side-value left-value\">\n                  <!-- <span class=\"value-unit\">$</span> -->\n                  <span class=\"value-num\">{{ ShowCurrentMonthlyProgress | numberFormat }}</span>\n                </div>\n                <div class=\"mid-value\">/</div>\n                <div class=\"side-value right-value\">\n                  <!-- <span class=\"value-unit\">$</span> -->\n                  <span class=\"value-num\">{{ ShowCurrentMonthlyTotal | numberFormat }}</span>\n                </div>\n              </div>\n            </div>\n            <!-- end of btm value -->\n          </div>\n          <!-- end of progress group -->\n        </div>\n        <!-- end of progress bar -->\n      </div>\n    </ng-container>\n  </app-ui-card-content-btn>\n</div>",
                        styles: [":host{width:100%}.msg-progress-block{width:100%}.msg-progress-block .card-block{padding:20px}.msg-progress-block .card_title{font-size:1rem;font-weight:700;color:#414141;padding-bottom:20px}.msg-progress-block ::ng-deep .card-content-btn{width:100%}.msg-progress-block ::ng-deep .btn-block{margin-top:30px;margin-bottom:10px}.msg-progress-block .link-wrapper{margin-top:25px;text-align:center}.msg-progress-block.card-pos-center .card-block{text-align:center}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep .chart-block{color:#007ab3;text-align:center;padding:0 13px}:host ::ng-deep .chart-block .progress-total-value{font-weight:700;display:block;margin-bottom:8px;color:#003781}:host ::ng-deep .chart-block .progress-total-unit{font-size:.875rem;font-weight:700;color:#767676}.progressbar-main-block{display:flex;align-items:flex-end}.progressbar-main-block+.progressbar-main-block{margin-top:15px}.progressbar-main-block .num-block{color:#007ab3;display:flex;align-items:baseline;padding-bottom:10px;flex-wrap:wrap;width:120px;flex-grow:0}.progressbar-main-block .num-block .num-title{font-size:1.25rem;line-height:28px;font-weight:700;width:100%;display:block}.progressbar-main-block .num-block .num-unit{font-size:1.25rem;line-height:28px;font-weight:700}.progressbar-main-block .num-block .num-value{display:inline-block;padding:0 5px 0 0;text-align:center;font-weight:700}.progressbar-main-block .pregress-group-block{width:calc(100% - 120px);flex-grow:0;flex-shrink:0;display:inline-block;justify-content:flex-end}.progressbar-main-block .value-block{text-align:right;padding-top:10px}.progressbar-main-block .value-block .value-detail-block{display:flex;line-height:28px;justify-content:flex-end}.progressbar-main-block .value-block .value-detail-block .side-value{font-size:1.25rem;font-weight:700}.progressbar-main-block .value-block .value-detail-block .side-value.left-value{color:#007ab3}.progressbar-main-block .value-block .value-detail-block .mid-value{font-size:1.25rem;font-weight:700;margin:0 5px}@media (max-width:1023px){.progressbar-main-block{display:block}.progressbar-main-block .num-block{width:100%;align-items:center}.progressbar-main-block .num-block .num-title{max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.progressbar-main-block .num-block .num-value{margin-left:10px}.progressbar-main-block .pregress-group-block{width:100%}}.dashboard-performance-personsal{display:flex;width:100%}.msg-card-block.msg-wd-sm{display:flex;width:33.62%;padding-right:15px}.msg-card-block.msg-wd-sm .card-content-btn{width:100%}.msg-card-block.msg-wd-md{display:flex;width:calc(100% - 33.62%)}.msg-card-block.msg-wd-md .card-content-btn{width:100%}@media (max-width:1023px){.dashboard-performance-personsal{display:block}.msg-card-block.msg-wd-sm{width:100%;padding-right:0;margin-bottom:20px}.msg-card-block.msg-wd-md{width:100%}}.dashboard-performance-personsal .progressbar-main-block{flex-wrap:wrap}.dashboard-performance-personsal .progressbar-main-block .num-block{width:100%;flex-wrap:nowrap;text-align:left;justify-content:flex-start}.dashboard-performance-personsal .progressbar-main-block .num-block .num-title{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.dashboard-performance-personsal .progressbar-main-block .num-block .num-value{margin-left:10px}.dashboard-performance-personsal .progressbar-main-block .pregress-group-block{width:100%}"]
                    }] }
        ];
        DashboardPerformancePersonalComponent.ctorParameters = function () {
            return [
                { type: DashboardService },
                { type: i0.ErrorHandler },
                { type: i1.AppRouter },
                { type: progress.ProgressService }
            ];
        };
        DashboardPerformancePersonalComponent.propDecorators = {
            onResize: [{ type: i0.HostListener, args: ['window:resize', ['$event'],] }]
        };
        return DashboardPerformancePersonalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DashboardMessageType = {
        Unread: 'UnRead',
        All: 'All',
        GoalSetting: 'GoalSetting',
        Progress: 'Progress',
        Customer: 'Customer',
        PendingApproval: 'PendingApproval',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardMessageComponent = /** @class */ (function () {
        function DashboardMessageComponent(translateService, loginMgr, errorHandler, agencyPlanStoreService, router, notificationMgr, syncService, showDashboardRule, showRule) {
            this.translateService = translateService;
            this.loginMgr = loginMgr;
            this.errorHandler = errorHandler;
            this.agencyPlanStoreService = agencyPlanStoreService;
            this.router = router;
            this.notificationMgr = notificationMgr;
            this.syncService = syncService;
            this.showDashboardRule = showDashboardRule;
            this.showRule = showRule;
            this.MsgType = 'UnRead';
            this.Language = new i1.Language();
            this.IsHasMsg = false;
            this.IsCAO = false;
            this._messageList = [];
            this.keyword = 'UnRead';
            this.msgType = [];
            this.defaultMsgType = [{
                    value: DashboardMessageType.Unread,
                    displayName: this.Language.unread
                }, {
                    value: DashboardMessageType.All,
                    displayName: this.Language.all
                }, {
                    value: DashboardMessageType.GoalSetting,
                    displayName: this.Language.goalSettingMsgType
                },
                // {
                //   value: DashboardMessageType.Progress,
                //   displayName: this.Language.progress
                // }, 
                {
                    value: DashboardMessageType.Customer,
                    displayName: this.Language.customer
                }, {
                    value: DashboardMessageType.PendingApproval,
                    displayName: this.Language.pendingApproval
                }];
            this.ConvertToImgUrl = {
                "GoalSetting": 'goal',
                "Customer": 'cust',
            };
            this.ConvertCategoryToLanguage = {
                "GoalSetting": 'goalSetting',
                "Customer": 'customer',
            };
            this.ConvertStatus = {
                "Reading": true,
                "UnRead": false
            };
            //#region  getter setter (input output)
            this.filterByKeyword = new i0.EventEmitter();
            this.clickMessage = new i0.EventEmitter();
            this.changeCommitmentStatus = new i0.EventEmitter();
            this.init();
        }
        /**
         * @return {?}
         */
        DashboardMessageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        Object.defineProperty(DashboardMessageComponent.prototype, "messageList", {
            get: /**
             * @return {?}
             */ function () {
                return this._messageList;
            },
            set: /**
             * @param {?} messageList
             * @return {?}
             */ function (messageList) {
                if (messageList.length > 0) {
                    this.IsHasMsg = true;
                    console.log('isHasMsg is true');
                }
                else {
                    this.IsHasMsg = false;
                }
                // if(this.showRule) {
                //   messageList.forEach(x => {
                //     x.messageDate = this.showRule.convertDate(new Date(x.messageDate));
                //   });
                // }
                // else {
                //   messageList.forEach(x => {
                //     x.messageDate = format(new Date(x.messageDate),'MM/dd/yyyy');
                //   });
                // }
                this._messageList = messageList;
                console.log("detail message: ", this._messageList);
            },
            enumerable: true,
            configurable: true
        });
        //#endregion
        //#region function
        //#endregion
        //#region function
        /**
         * @private
         * @return {?}
         */
        DashboardMessageComponent.prototype.init =
            //#endregion
            //#region function
            /**
             * @private
             * @return {?}
             */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var loginInfo, filtered_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("Dashboard init");
                                return [4 /*yield*/, this.loginMgr.getLoginInfo().pipe(operators.take(1)).toPromise()];
                            case 1:
                                loginInfo = _a.sent();
                                console.log("Dashboard init loginInfo:", loginInfo);
                                if (this.showDashboardRule) {
                                    filtered_1 = this.showDashboardRule.showMessageType(loginInfo);
                                    this.msgType = this.defaultMsgType.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return filtered_1.indexOf(x.value) > -1; }));
                                }
                                else
                                    this.msgType = this.defaultMsgType;
                                console.log("Dashboard init end:", this.msgType);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} keyword
         * @return {?}
         */
        DashboardMessageComponent.prototype.Filter = /**
         * @param {?} keyword
         * @return {?}
         */
            function (keyword) {
                this.keyword = keyword;
                this.filterByKeyword.emit(keyword);
            };
        /**
         * @param {?} message
         * @return {?}
         */
        DashboardMessageComponent.prototype.OnClickMessage = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                if (message.isClick === 'Y') {
                    console.log("message", message);
                    /** @type {?} */
                    var argument = JSON.parse(message.argument);
                    console.log("argument", argument, "typeof argument", typeof argument);
                    if (message.isPopup === 'Y') {
                        this.clickMessage.emit(message);
                        this.filterByKeyword.emit(this.keyword);
                        console.log('需要run push()');
                        this.notificationMgr.pushNotification(i1.NotificationType[message.messageType], argument);
                    }
                    else if (message.isPopup === 'N') {
                        console.log("跳轉到" + argument.agentID + "的commitment");
                        this.clickMessage.emit(message);
                        this.filterByKeyword.emit(this.keyword);
                        // get
                        /** @type {?} */
                        var agencyDetail = new goal.AgencyPlanAgentInfo(argument['agentID'], argument['agentName'], argument['DataYear'], argument['AppUseMode']);
                        // agencyDetail['agentID'] = argument['agentID'];
                        // agencyDetail['agentName'] = argument['agentName'];
                        // agencyDetail['dataYear'] = argument['DataYear'];
                        // agencyDetail['appUseMode'] = argument['AppUseMode'];
                        console.log("agencyDetail", agencyDetail);
                        this.agencyPlanStoreService.setCurrentAgencyDetail(agencyDetail);
                        this.router.navigate("commitment");
                        // this._location.go('')  //去commitment
                    }
                }
                else if (message.isClick === 'N') {
                    console.log('this is no action for click');
                }
            };
        DashboardMessageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snd-dashboard-message',
                        template: "<div class=\"space-detail\">\n  <!-- msg -->\n  <app-ui-title-style1>\n    <ng-container textType=\"titleText\">{{\n      Language.message | translate\n    }}</ng-container>\n  </app-ui-title-style1>\n  <!-- msg filter -->\n  <app-ui-form-radio-group class=\"type-block\" [nxValue]=\"MsgType\" (nxValueChange)=\"Filter($event)\">\n    <app-ui-form-radio2 *ngFor=\"let type of msgType\" [value]=\"type.value\">\n      {{ type.displayName | translate }}\n    </app-ui-form-radio2>\n  </app-ui-form-radio-group>\n  <!-- end of msg filter -->\n \n</div>\n<!-- msg card -->\n<!-- IsHasMsg -->\n<ng-container *ngIf=\"IsHasMsg; else noMsgData\">\n  <div class=\"msg-list-block space-detail\">\n    <app-dashboard-ui-card-msg *ngFor=\"let msg of messageList\" [linkStatus]=\"msg.linkStatus\"\n      [cardType]=\"ConvertToImgUrl[msg.messageCategory]\" [isRead]=\"ConvertStatus[msg.status]\" Action\n      action=\"'DashboardMessageClick'\" (actionClick)=\"OnClickMessage(msg)\">\n      <ng-container cardType> {{ msg.messageCategory | translate }} </ng-container>\n      <ng-container cardTitle> {{ msg.title | translate}} </ng-container>\n      <ng-container cardDate> {{ msg.messageDate }} </ng-container>\n      <ng-container cardTime> {{ msg.messageTime }} </ng-container>\n      <ng-container cardDetail> {{ msg.description |translate }} </ng-container>\n      <ng-container linkStatus> {{ msg.linkStatus |translate }} </ng-container>\n    </app-dashboard-ui-card-msg>\n  </div>\n</ng-container>\n<!-- end of msg card -->\n<!-- msg nodata  -->\n<ng-template #noMsgData>\n  <div class=\"layout-nodata layout-theme-skelton\">\n    <p class=\"nodata-text\">{{ Language.noMessage | translate }}</p>\n    <div class=\"nodata-img\">\n      <img src=\"assets/img/nodata-dashboard-list.svg\" />\n    </div>\n  </div>\n</ng-template>\n<!-- end of msg nodata -->\n",
                        styles: [".space-detail{padding-right:40px;display:block}@media (max-width:1023px){.space-detail{padding-right:40px}}.layout-detail-block{background-color:#f5f5f5;padding-left:40px}.layout-detail-block .space-detail:not(.layout-nodata):last-child{padding-bottom:100px}.layout-detail-block .layout-nodata{padding-bottom:0}@media (min-width:768px){.layout-detail-block.style-has-right-space{padding-right:40px}.layout-detail-block.style-has-right-space.skelton-layout{padding-right:0}}.layout-detail-block.style-has-top-space{padding-top:40px}@media (max-width:767px){.space-detail{padding-right:5px}.layout-detail-block{padding-left:5px}.layout-detail-block.style-has-right-space{padding-right:5px}.layout-detail-block.style-has-top-space{padding-top:30px}}.layout-detail-block.style-has-btm-space{padding-bottom:100px}.space-inner-lg{padding-left:50px;padding-right:50px}@media (max-width:767px){.space-inner-lg{padding-left:5px;padding-right:5px}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.layout-nodata .nodata-text{margin:0;padding:0 0 5px;font-size:.875rem;color:#414141;line-height:28px;text-align:center}.layout-nodata .nodata-img{max-width:100%;width:100%}.layout-nodata .nodata-img img{width:100%;max-width:100%}.type-block{padding-bottom:20px}"]
                    }] }
        ];
        DashboardMessageComponent.ctorParameters = function () {
            return [
                { type: i1.TranslateService },
                { type: i1.DefaultLoginMgr },
                { type: i0.ErrorHandler },
                { type: goal.AgencyPlanStoreService },
                { type: i1.AppRouter },
                { type: i1.NotificationMgr },
                { type: i1.DataSyncService },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [showDashboardRuleToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.showRuleToken,] }] }
            ];
        };
        DashboardMessageComponent.propDecorators = {
            filterByKeyword: [{ type: i0.Output }],
            clickMessage: [{ type: i0.Output }],
            changeCommitmentStatus: [{ type: i0.Output }],
            messageList: [{ type: i0.Input }]
        };
        return DashboardMessageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardModule = /** @class */ (function () {
        function DashboardModule() {
        }
        DashboardModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            ui.UIModule,
                            i1.CoreModule,
                            common.CommonModule,
                            integrationCalendarCustomer.IntegrationCalendarCustomerModule
                        ],
                        declarations: [DashboardComponent, DashboardListComponent, DashboardDetailComponent, DashboardUiCardMsgComponent, DashboardPerformanceComponent, DashboardPerformanceTeamComponent, DashboardPerformancePersonalComponent, DashboardMessageComponent],
                        exports: [DashboardComponent, DashboardListComponent, DashboardDetailComponent, DashboardUiCardMsgComponent]
                    },] }
        ];
        return DashboardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardShowLoginInfo = /** @class */ (function () {
        function DashboardShowLoginInfo(showName, imgUrl) {
            this._showName = showName;
            this._imgUrl = imgUrl;
        }
        Object.defineProperty(DashboardShowLoginInfo.prototype, "showName", {
            get: /**
             * @return {?}
             */ function () {
                return this._showName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DashboardShowLoginInfo.prototype, "imgUrl", {
            get: /**
             * @return {?}
             */ function () {
                return this._imgUrl;
            },
            enumerable: true,
            configurable: true
        });
        return DashboardShowLoginInfo;
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.DashboardModule = DashboardModule;
    exports.DashboardComponent = DashboardComponent;
    exports.DashboardDetailComponent = DashboardDetailComponent;
    exports.DashboardListComponent = DashboardListComponent;
    exports.DashboardUiCardMsgComponent = DashboardUiCardMsgComponent;
    exports.DashboardMessageType = DashboardMessageType;
    exports.DashboardService = DashboardService;
    exports.DashboardMessage = DashboardMessage;
    exports.DashboardShowLoginInfo = DashboardShowLoginInfo;
    exports.showDashboardRuleToken = showDashboardRuleToken;
    exports.ɵf = DashboardDetailComponent;
    exports.ɵe = DashboardListComponent;
    exports.ɵl = DashboardMessageComponent;
    exports.ɵk = DashboardPerformancePersonalComponent;
    exports.ɵj = DashboardPerformanceTeamComponent;
    exports.ɵi = DashboardPerformanceComponent;
    exports.ɵh = DashboardUiCardMsgComponent;
    exports.ɵa = DashboardComponent;
    exports.ɵc = showDashboardRuleToken;
    exports.ɵb = DashboardService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=allianzSND-dashboard.umd.js.map