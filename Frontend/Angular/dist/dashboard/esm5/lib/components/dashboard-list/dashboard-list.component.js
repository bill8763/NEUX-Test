/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Inject, ViewChildren, QueryList, Optional } from '@angular/core';
import { TranslateService, Language, ConfigToken, showRuleToken, StringUtils } from '@allianzSND/core';
import { getYear, addDays, format } from 'date-fns';
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
        this.language = new Language();
        //calendar-ui config setting
        this.viewTypeIndex = 2; // 'month'
        this.tabIndex = 0;
        this.tabHeight = 0;
        //public _viewDate = new Date(); //current date
        this._viewDate = new Date();
        this.weekStartsOn = 1; // Monday
        this.today = new Date();
        this.yearVal = this.viewDate.getFullYear();
        this.clickCalendarItem = new EventEmitter();
        this.completeLoadEvent = new EventEmitter();
        this.updateCalendarEventDetail = new EventEmitter();
        this.clickDate = new EventEmitter();
    }
    Object.defineProperty(DashboardListComponent.prototype, "calendarEventList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._calendarEventList;
        },
        set: /**
         * @param {?} calendarEventList
         * @return {?}
         */
        function (calendarEventList) {
            this._calendarEventList = calendarEventList;
            this.isHasScheduleData = this.judgeIsScheduleHasData();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DashboardListComponent.prototype, "birthdayItemList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._birthdayItemList;
        },
        set: /**
         * @param {?} birthdayItemList
         * @return {?}
         */
        function (birthdayItemList) {
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
            this.beforeTodayBirthdayItemList = this._sortBirthDayListByName(this._birthdayItemList.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return _this_1.itemBirthdayIsBeforeToday(x); })));
            this.afterTodayBirthdayItemList = this._sortBirthDayListByName(this._birthdayItemList.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return !_this_1.itemBirthdayIsBeforeToday(x); })));
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DashboardListComponent.prototype, "viewDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._viewDate;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
        var endDate = addDays(this.today, this.searchBirthdayAddN);
        this.endDateDisplayStr = this.convertCalendarDateToShow(endDate);
        console.log("this.tabIndex:", this.tabIndex);
        if (this.tabIndex === 0) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this_1.scrollToContent(0);
                tabContentBlock.style.opacity = 1;
            }), 100);
        }
        else if (this.tabIndex === 1) {
            setTimeout((/**
             * @return {?}
             */
            function () {
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
        return (this._calendarEventList.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.eventList.length > 0; })).length) > 0;
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
        this.calendarListContents.changes.subscribe((/**
         * @return {?}
         */
        function () {
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
            var firstNameStr = StringUtils.isNotEmpty(firstName) ? firstName : '';
            /** @type {?} */
            var lastNameStr = StringUtils.isNotEmpty(lastName) ? (' ' + lastName) : '';
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
        var combineDate = new Date(getYear(new Date()) + '/' + month + '/' + date);
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
            return format(date, 'MM/dd');
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
        var cloneList = birthdayItemList.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.clone(); }));
        cloneList.sort((/**
         * @param {?} item1
         * @param {?} item2
         * @return {?}
         */
        function (item1, item2) {
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
            var item1_name = StringUtils.isNotEmpty(item1.lastName) ? item1.lastName : '';
            /** @type {?} */
            var item2_name = StringUtils.isNotEmpty(item2.lastName) ? item2.lastName : '';
            if (!StringUtils.isHasChinese(item1_name) && StringUtils.isHasChinese(item2_name)) {
                return -1;
            }
            else if (StringUtils.isHasChinese(item1_name) && !StringUtils.isHasChinese(item2_name)) {
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
        { type: Component, args: [{
                    selector: 'app-dashboard-list',
                    template: "<div class=\"layut-home-list-block\">\n  <!-- top calendar -->\n\n  <app-ui-calendar-month-collapse class=\"calendar-block\" [displayMonthFormat]=\"'MM/dd EEE'\" [today]=\"today\"\n    [viewDate]=\"viewDate\" [weekStartsOn]=\"weekStartsOn\" [translateMap]=\"translateMap\"\n    (onClickDate)=\"monthDayClicked($event)\" [eventList]=\"eventMonthList\" (onSwitchMonth)=\"switchMonthClicked($event)\">\n  </app-ui-calendar-month-collapse>\n  <!-- end of tab calendar -->\n  <!-- tab detail block -->\n  <!-- tab -->\n  <div class=\"tab-btn-block\">\n    <app-ui-tab-style1 tabInfo [action]=\"'dashboardListTab'\" (onTabChildClick)=\"tabChangeEvent($event)\">\n      <app-ui-tab-child>{{language.homeSchedule | translate}}</app-ui-tab-child>\n      <app-ui-tab-child>{{language.homeBirthday | translate}}</app-ui-tab-child>\n    </app-ui-tab-style1>\n  </div>\n\n  <!-- end of tab -->\n\n  <!-- tab content -->\n  <div #tabContent class=\"tab-content-block\" [ngClass]=\"windowWidth >= 1024 ? 'stop-scroll-block' :''\">\n    <div class=\"tab-content_1 active\" *ngIf=\"tabIndex===1\" [ngClass]=\"{'fullHeight': !isHasBirthdayData}\">\n      <!-- birthday -->\n      <ng-container #birthdayList *ngIf=\"isHasBirthdayData; else noBirthdayData\">\n        <div class=\"tab-content-detail\">\n          <ul class=\"list-text-block\">\n            <li class=\"list-text-item style-grey\" *ngFor=\"let item of beforeTodayBirthdayItemList\">\n              <p class=\"list-text_title\"> {{convertNameToShow(item.firstName, item.lastName)}} </p>\n              <p class=\"list-text_date\"> {{convertBirthdayToShow(item.birthdayMonth,item.birthdayDate)}} </p>\n            </li>\n          </ul>\n          <div class=\"title-sm\"> {{ todayDisplayStr + ' - ' + endDateDisplayStr }} </div>\n          <ul class=\"list-text-block ts-today\">\n            <li class=\"list-text-item\" *ngFor=\"let item of afterTodayBirthdayItemList\">\n              <p class=\"list-text_title\"> {{convertNameToShow(item.firstName, item.lastName)}} </p>\n              <p class=\"list-text_date\"> {{convertBirthdayToShow(item.birthdayMonth,item.birthdayDate)}} </p>\n              <span *ngIf=\"itemBirthdayIsToday(item)\" class=\"tag\">{{language.today | translate}}</span>\n            </li>\n          </ul>\n        </div>\n        <!-- end of tab detail -->\n      </ng-container>\n      <!-- end of birthday -->\n      <!-- no data -->\n      <ng-template #noBirthdayData>\n        <div class=\"tab-content-detail skelton-layout nodata-layout\">\n          <div class=\"theme-loading\" style=\"background-image:url('assets/img/nodata-dashboard-birthday.svg')\">\n            <p class=\"nodata-text\">{{language.noBirthday | translate}}</p>\n          </div>\n        </div>\n      </ng-template>\n      <!-- end of no data -->\n\n    </div>\n    <div class=\"tab-content_0 active\" *ngIf=\"tabIndex===0\" [ngClass]=\"{'fullHeight': !isHasScheduleData}\">\n      <!-- event list -->\n      <ng-container *ngIf=\"isHasScheduleData; else noScheduleData\">\n        <ng-container #calendarList *ngFor=\"let calendar of _calendarEventList; let isCalendarListReady = last\">\n          <div *ngIf=\"calendar.eventList.length > 0\" class=\"schedule-list-block\"\n            [ngClass]=\"[calendar.isToday ? 'ts-today': '']\">\n            <div class=\"title-sm\"> {{convertCalendarDateToShow(calendar.showDate)}} </div>\n            <!-- <div *ngIf=\"calendar.eventList.length == 0\" class=\"tab-content-detail\">\n                <p class=\"text-no\">No appointment</p>\n              </div> -->\n            <app-ui-calendar-event-list class=\"tab-content-detail\" [translateMap]=\"translateMap\"\n              [colorCode]=\"eventListBGColor\" [eventList]=\"calendar.eventList\"\n              [textColorStyle]=\"calendar.isBeforeToday ? 'grey': ''\"\n              (clickEvent)=\"onClickEventItem(calendar.showDate, $event)\">\n            </app-ui-calendar-event-list>\n\n          </div>\n        </ng-container>\n      </ng-container>\n      <!-- end event list -->\n      <!-- no data -->\n      <ng-template #noScheduleData>\n        <div class=\"tab-content-detail skelton-layout nodata-layout\">\n          <div class=\"theme-loading\" style=\"background-image:url('assets/img/nodata-dashboard-schedule.svg')\">\n            <p class=\"nodata-text\">{{language.noSchedule | translate}}</p>\n          </div>\n        </div>\n      </ng-template>\n      <!-- end of no data -->\n\n    </div>\n  </div>\n\n  <!-- end of tab content -->\n\n  <!-- end of tab detail block -->\n</div>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}[class*=tab-content_]{opacity:0;transition:none;position:absolute;z-index:-1;-webkit-transform-origin:top;transform-origin:top}[class*=tab-content_]:not(.active) *{display:none}[class*=tab-content_].active{position:relative;opacity:1;z-index:1;transition:.2s;display:flex;flex-wrap:wrap}.tab-content-block{height:100%;opacity:0}.tab-content-block [class*=tab-content_].fullHeight{height:100%}.tab-content-block .nodata-layout{height:100%;background-color:#f5f5f5}.tab-content-block .theme-loading{height:100%;background-repeat:no-repeat;background-position:right bottom;background-size:contain;display:flex;width:100%;padding:0 9%;text-align:center;justify-content:center}.tab-content-block .nodata-text{margin:130px 0 0;padding:0;font-size:.875rem;color:#414141;line-height:28px}@media (max-width:1023px){.tab-content-block .nodata-text{margin-top:20px}.tab-content-block .theme-loading{padding:0 22%}}.layut-home-list-block.active .theme-loading{background-position:0 500px!important}:host{display:block;height:100%;width:100%}.layut-home-list-block{display:flex;height:100%;flex-direction:column;width:100%}.layut-home-list-block .calendar-block{display:block;flex-shrink:0}.layut-home-list-block .tab-btn-block{display:block;padding-top:20px;flex-shrink:0}.layut-home-list-block .tab-content-block{display:block;overflow-y:auto;flex:1 1 auto;height:100%;margin-top:1px}.layut-home-list-block .tab-content-detail{padding-top:20px;width:100%}.layut-home-list-block .text-no{padding:0 20px 20px;margin:0;border-bottom:1px solid #ececec}.schedule-list-block{display:inline-block;width:100%}.title-sm{background-color:#ececec;color:#414141;font-size:.75rem;font-weight:700;padding:3px 20px}.list-text-block{padding:0;list-style-type:none}.list-text-block .list-text-item{border-bottom:1px solid #c2c2c2;padding:20px}.list-text-block .list-text-item.style-grey p{color:#c2c2c2}.list-text-block p{margin:0;padding:0}.list-text-block .list-text_title{font-size:.875rem;line-height:20px;margin-bottom:5px;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.list-text-block .list-text_date{font-size:.875rem;line-height:20px;display:inline-block;vertical-align:middle}.list-text-block .tag{display:inline-block;font-size:.75rem;min-height:18px;padding:3px 5px;margin-left:12px;background-color:#003781;letter-spacing:.5px;color:#fff}"]
                }] }
    ];
    DashboardListComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] },
        { type: TranslateService },
        { type: ElementRef }
    ]; };
    DashboardListComponent.propDecorators = {
        calendarListContents: [{ type: ViewChildren, args: ['calendarList',] }],
        calendarEventList: [{ type: Input }],
        eventMonthList: [{ type: Input }],
        birthdayItemList: [{ type: Input }],
        viewDate: [{ type: Input }],
        clickCalendarItem: [{ type: Output }],
        tabContent: [{ type: ViewChild, args: ['tabContent',] }],
        completeLoadEvent: [{ type: Output }],
        updateCalendarEventDetail: [{ type: Output }],
        clickDate: [{ type: Output }]
    };
    return DashboardListComponent;
}());
export { DashboardListComponent };
if (false) {
    /** @type {?} */
    DashboardListComponent.prototype.isBirthdayToday;
    /** @type {?} */
    DashboardListComponent.prototype.isHasScheduleData;
    /** @type {?} */
    DashboardListComponent.prototype.isHasBirthdayData;
    /** @type {?} */
    DashboardListComponent.prototype.isTabContentNoData;
    /** @type {?} */
    DashboardListComponent.prototype.translateMap;
    /** @type {?} */
    DashboardListComponent.prototype.calendarEventDetail;
    /** @type {?} */
    DashboardListComponent.prototype._calendarEventList;
    /** @type {?} */
    DashboardListComponent.prototype.isCalendarEventListBefore;
    /**
     * @type {?}
     * @private
     */
    DashboardListComponent.prototype._birthdayItemList;
    /** @type {?} */
    DashboardListComponent.prototype.searchBirthdayAddN;
    /** @type {?} */
    DashboardListComponent.prototype.beforeTodayBirthdayItemList;
    /** @type {?} */
    DashboardListComponent.prototype.afterTodayBirthdayItemList;
    /** @type {?} */
    DashboardListComponent.prototype.eventListBGColor;
    /** @type {?} */
    DashboardListComponent.prototype.showDate;
    /** @type {?} */
    DashboardListComponent.prototype.language;
    /** @type {?} */
    DashboardListComponent.prototype.viewTypeIndex;
    /** @type {?} */
    DashboardListComponent.prototype.tabIndex;
    /**
     * @type {?}
     * @private
     */
    DashboardListComponent.prototype.tabHeight;
    /**
     * @type {?}
     * @private
     */
    DashboardListComponent.prototype._viewDate;
    /**
     * @type {?}
     * @private
     */
    DashboardListComponent.prototype._eventList;
    /** @type {?} */
    DashboardListComponent.prototype.weekStartsOn;
    /** @type {?} */
    DashboardListComponent.prototype.startDate;
    /** @type {?} */
    DashboardListComponent.prototype.endDate;
    /** @type {?} */
    DashboardListComponent.prototype.today;
    /** @type {?} */
    DashboardListComponent.prototype.yearVal;
    /** @type {?} */
    DashboardListComponent.prototype.todayDisplayStr;
    /** @type {?} */
    DashboardListComponent.prototype.endDateDisplayStr;
    /** @type {?} */
    DashboardListComponent.prototype.windowWidth;
    /** @type {?} */
    DashboardListComponent.prototype.calendarListContents;
    /** @type {?} */
    DashboardListComponent.prototype.eventMonthList;
    /** @type {?} */
    DashboardListComponent.prototype.clickCalendarItem;
    /** @type {?} */
    DashboardListComponent.prototype.tabContent;
    /** @type {?} */
    DashboardListComponent.prototype.changeViewDate;
    /** @type {?} */
    DashboardListComponent.prototype.completeLoadEvent;
    /** @type {?} */
    DashboardListComponent.prototype.updateCalendarEventDetail;
    /** @type {?} */
    DashboardListComponent.prototype.clickDate;
    /**
     * @type {?}
     * @private
     */
    DashboardListComponent.prototype.APP_CONFIG;
    /**
     * @type {?}
     * @private
     */
    DashboardListComponent.prototype.showRule;
    /**
     * @type {?}
     * @private
     */
    DashboardListComponent.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    DashboardListComponent.prototype.elementRef;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZGFzaGJvYXJkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGFzaGJvYXJkLWxpc3QvZGFzaGJvYXJkLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFxQixZQUFZLEVBQUUsU0FBUyxFQUFpQixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkwsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFZLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVwRDtJQTJHRSxnQ0FDK0IsVUFBZSxFQUNELFFBQWtCLEVBQ3JELGdCQUFrQyxFQUNsQyxVQUFzQjtRQUhELGVBQVUsR0FBVixVQUFVLENBQUs7UUFDRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ3JELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXZHaEMsK0RBQStEO1FBQ3hELG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBRTlCLDJDQUEyQztRQUNwQyxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBSXpCLGlCQUFZLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBRTlELHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4Qiw4QkFBeUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsc0JBQWlCLEdBQTRCLEVBQUUsQ0FBQztRQUVqRCx1QkFBa0IsR0FBRyxJQUFJLENBQUMs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QUs7bUNBR0wsS0FBSzsyQkEwQkwsS0FBSztvQ0FZTCxNQUFNOzZCQUdOLFNBQVMsU0FBQyxZQUFZO29DQXlEdEIsTUFBTTs0Q0FHTixNQUFNOzRCQUdOLE1BQU07O0lBMklULDZCQUFDO0NBQUEsQUFqVEQsSUFpVEM7U0E1U1ksc0JBQXNCOzs7SUFJakMsaURBQThCOztJQUc5QixtREFBZ0M7O0lBQ2hDLG1EQUFnQzs7SUFFaEMsb0RBQWtDOztJQUVsQyw4Q0FBcUU7O0lBQ3JFLHFEQUFnRDs7SUFDaEQsb0RBQStCOztJQUMvQiwyREFBc0M7Ozs7O0lBQ3RDLG1EQUF3RDs7SUFFeEQsb0RBQW9HOztJQUNwRyw2REFBaUU7O0lBQ2pFLDREQUFnRTs7SUFHaEUsa0RBQWlDOztJQUNqQywwQ0FBd0I7O0lBQ3hCLDBDQUFpQzs7SUFHakMsK0NBQXlCOztJQUN6QiwwQ0FBb0I7Ozs7O0lBQ3BCLDJDQUFzQjs7Ozs7SUFFdEIsMkNBQXFDOzs7OztJQUNyQyw0Q0FBbUI7O0lBQ25CLDhDQUF3Qjs7SUFDeEIsMkNBQWlCOztJQUNqQix5Q0FBZTs7SUFDZix1Q0FBbUI7O0lBQ25CLHlDQUFzQzs7SUFDdEMsaURBQStCOztJQUMvQixtREFBaUM7O0lBQ2pDLDZDQUFtQjs7SUFFbkIsc0RBQW1FOztJQVduRSxnREFBMkQ7O0lBeUMzRCxtREFBc0Q7O0lBR3RELDRDQUFnRDs7SUFDaEQsZ0RBQW9COztJQXdEcEIsbURBQ2dEOztJQUVoRCwyREFDb0U7O0lBRXBFLDJDQUNxQzs7Ozs7SUEzRG5DLDRDQUE0Qzs7Ozs7SUFDNUMsMENBQTZEOzs7OztJQUM3RCxrREFBMEM7Ozs7O0lBQzFDLDRDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5qZWN0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyVmlld0luaXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhbGVuZGFyRXZlbnREZXRhaWwsIEN1c3RvbWVyQmlydGhkYXkgfSBmcm9tICdAYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lcic7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBMYW5ndWFnZSwgQ29uZmlnVG9rZW4sIHNob3dSdWxlVG9rZW4sIHNob3dSdWxlLCBTdHJpbmdVdGlscyB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgZ2V0WWVhciwgYWRkRGF5cywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGFzaGJvYXJkLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG5cbiAgLy8gYmlydGhkYXQgdGFiIHRhZyAuLiBpZiB0aGUgYmlydGhkYXkgZGF0ZSBpcyB0b2RheSwgc2hvdyB0YWcgXG4gIHB1YmxpYyBpc0JpcnRoZGF5VG9kYXkgPSB0cnVlO1xuXG4gIC8vIHRhYiBzY2hlZHVsZSBhbmQgYmlydGhheSBoYXMgZGF0YSBvciBub3RcbiAgcHVibGljIGlzSGFzU2NoZWR1bGVEYXRhID0gdHJ1ZTtcbiAgcHVibGljIGlzSGFzQmlydGhkYXlEYXRhID0gdHJ1ZTtcbiAgLy8gaWYgY3VycmVudCB0YWIgbm8gZGF0YSBoZWlnaHQgbmVlZCBmdWxsXG4gIHB1YmxpYyBpc1RhYkNvbnRlbnROb0RhdGE6IHN0cmluZztcblxuICBwdWJsaWMgdHJhbnNsYXRlTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgcHVibGljIGNhbGVuZGFyRXZlbnREZXRhaWw6IENhbGVuZGFyRXZlbnREZXRhaWw7IC8vRGV0YWlsXG4gIHB1YmxpYyBfY2FsZW5kYXJFdmVudExpc3QgPSBbXTtcbiAgcHVibGljIGlzQ2FsZW5kYXJFdmVudExpc3RCZWZvcmUgPSBbXTtcbiAgcHJpdmF0ZSBfYmlydGhkYXlJdGVtTGlzdDogQXJyYXk8Q3VzdG9tZXJCaXJ0aGRheT4gPSBbXTtcblxuICBwdWJsaWMgc2VhcmNoQmlydGhkYXlBZGROID0gdGhpcy5BUFBfQ09ORklHW3RoaXMuQVBQX0NPTkZJRy5FTlZdLkRBU0hCT0FSRC5TZWFyY2hCaXJ0aGRheVJhbmdlLmFkZE47XG4gIHB1YmxpYyBiZWZvcmVUb2RheUJpcnRoZGF5SXRlbUxpc3Q6IEFycmF5PEN1c3RvbWVyQmlydGhkYXk+ID0gW107XG4gIHB1YmxpYyBhZnRlclRvZGF5QmlydGhkYXlJdGVtTGlzdDogQXJyYXk8Q3VzdG9tZXJCaXJ0aGRheT4gPSBbXTtcblxuICAvL3ByaXZhdGUgY2FsZW5kYXJVdGlscyA9IG5ldyBDYWxlbmRhclV0aWxzKCk7XG4gIHB1YmxpYyBldmVudExpc3RCR0NvbG9yID0gJyNmZmYnO1xuICBwdWJsaWMgc2hvd0RhdGU6IHN0cmluZztcbiAgcHVibGljIGxhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG5cbiAgLy9jYWxlbmRhci11aSBjb25maWcgc2V0dGluZ1xuICBwdWJsaWMgdmlld1R5cGVJbmRleCA9IDI7IC8vICdtb250aCdcbiAgcHVibGljIHRhYkluZGV4ID0gMDtcbiAgcHJpdmF0ZSB0YWJIZWlnaHQgPSAwO1xuICAvL3B1YmxpYyBfdmlld0RhdGUgPSBuZXcgRGF0ZSgpOyAvL2N1cnJlbnQgZGF0ZVxuICBwcml2YXRlIF92aWV3RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHByaXZhdGUgX2V2ZW50TGlzdDtcbiAgcHVibGljIHdlZWtTdGFydHNPbiA9IDE7IC8vIE1vbmRheVxuICBwdWJsaWMgc3RhcnREYXRlO1xuICBwdWJsaWMgZW5kRGF0ZTtcbiAgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICB5ZWFyVmFsID0gdGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuICBwdWJsaWMgdG9kYXlEaXNwbGF5U3RyOiBzdHJpbmc7XG4gIHB1YmxpYyBlbmREYXRlRGlzcGxheVN0cjogc3RyaW5nO1xuICBwdWJsaWMgd2luZG93V2lkdGg7XG5cbiAgQFZpZXdDaGlsZHJlbignY2FsZW5kYXJMaXN0JykgY2FsZW5kYXJMaXN0Q29udGVudHM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjYWxlbmRhckV2ZW50TGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsZW5kYXJFdmVudExpc3Q7XG4gIH07XG4gIHNldCBjYWxlbmRhckV2ZW50TGlzdChjYWxlbmRhckV2ZW50TGlzdCkge1xuXG4gICAgdGhpcy5fY2FsZW5kYXJFdmVudExpc3QgPSBjYWxlbmRhckV2ZW50TGlzdDtcbiAgICB0aGlzLmlzSGFzU2NoZWR1bGVEYXRhID0gdGhpcy5qdWRnZUlzU2NoZWR1bGVIYXNEYXRhKCk7XG4gIH1cbiAgQElucHV0KCkgcHVibGljIGV2ZW50TW9udGhMaXN0OiBBcnJheTxDYWxlbmRhckV2ZW50RGV0YWlsPjtcblxuXG4gIEBJbnB1dCgpXG4gIGdldCBiaXJ0aGRheUl0ZW1MaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9iaXJ0aGRheUl0ZW1MaXN0O1xuICB9O1xuICBzZXQgYmlydGhkYXlJdGVtTGlzdChiaXJ0aGRheUl0ZW1MaXN0KSB7XG5cbiAgICBpZiAoYmlydGhkYXlJdGVtTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5pc0hhc0JpcnRoZGF5RGF0YSA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNIYXNCaXJ0aGRheURhdGEgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuX2JpcnRoZGF5SXRlbUxpc3QgPSBiaXJ0aGRheUl0ZW1MaXN0O1xuICAgIHRoaXMuYmVmb3JlVG9kYXlCaXJ0aGRheUl0ZW1MaXN0ID0gW107XG4gICAgdGhpcy5hZnRlclRvZGF5QmlydGhkYXlJdGVtTGlzdCA9IFtdO1xuXG5cbiAgICAvL2NvbnZlcnQgdG8gYmVmb3JlICYgYWZ0ZXIgYXJyYXlcbiAgICB0aGlzLmJlZm9yZVRvZGF5QmlydGhkYXlJdGVtTGlzdCA9IHRoaXMuX3NvcnRCaXJ0aERheUxpc3RCeU5hbWUodGhpcy5fYmlydGhkYXlJdGVtTGlzdC5maWx0ZXIoeCA9PiB0aGlzLml0ZW1CaXJ0aGRheUlzQmVmb3JlVG9kYXkoeCkpKTtcbiAgICB0aGlzLmFmdGVyVG9kYXlCaXJ0aGRheUl0ZW1MaXN0ID0gdGhpcy5fc29ydEJpcnRoRGF5TGlzdEJ5TmFtZSh0aGlzLl9iaXJ0aGRheUl0ZW1MaXN0LmZpbHRlcih4ID0+ICF0aGlzLml0ZW1CaXJ0aGRheUlzQmVmb3JlVG9kYXkoeCkpKTtcbiAgIFxuXG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIGdldCB2aWV3RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlld0RhdGU7XG4gIH1cbiAgc2V0IHZpZXdEYXRlKHZhbCkge1xuICAgIGlmICh0aGlzLl92aWV3RGF0ZS5nZXRUaW1lKCkgIT0gdmFsLmdldFRpbWUoKSkge1xuICAgICAgdGhpcy5jaGFuZ2VWaWV3RGF0ZShuZXcgRGF0ZSh2YWwpKTtcbiAgICAgIHRoaXMueWVhclZhbCA9IHRoaXMuX3ZpZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxuICB9IC8vIGVuZCBzZXQgdmlld0RhdGVcblxuXG4gIEBPdXRwdXQoKSBjbGlja0NhbGVuZGFySXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8vIGdldCB0YWIgY29udGVudFxuICBAVmlld0NoaWxkKCd0YWJDb250ZW50JykgdGFiQ29udGVudDogRWxlbWVudFJlZjtcbiAgY2hhbmdlVmlld0RhdGU6IGFueTtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQ29uZmlnVG9rZW4pIHByaXZhdGUgQVBQX0NPTkZJRzogYW55LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3Qoc2hvd1J1bGVUb2tlbikgcHJpdmF0ZSBzaG93UnVsZTogc2hvd1J1bGUsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7fVxuICB0YWJDaGFuZ2VFdmVudChldmVudCkge1xuXG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgdGFiQ29udGVudEJsb2NrID0gX3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGF5dXQtaG9tZS1saXN0LWJsb2NrIC50YWItY29udGVudC1ibG9ja1wiKTtcbiAgICB0YWJDb250ZW50QmxvY2suc3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgICB0aGlzLnRhYkhlaWdodCA9IHRoaXMudGFiQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICB0aGlzLnRhYkluZGV4ID0gZXZlbnQ7XG4gICAgdGhpcy50b2RheURpc3BsYXlTdHIgPSB0aGlzLmNvbnZlcnRDYWxlbmRhckRhdGVUb1Nob3codGhpcy50b2RheSk7XG5cbiAgICBsZXQgZW5kRGF0ZSA9IGFkZERheXModGhpcy50b2RheSwgdGhpcy5zZWFyY2hCaXJ0aGRheUFkZE4pO1xuICAgIHRoaXMuZW5kRGF0ZURpc3BsYXlTdHIgPSB0aGlzLmNvbnZlcnRDYWxlbmRhckRhdGVUb1Nob3coZW5kRGF0ZSk7ICBcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcInRoaXMudGFiSW5kZXg6XCIsdGhpcy50YWJJbmRleCk7XG4gICAgaWYodGhpcy50YWJJbmRleD09PTApe1xuICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICB0aGlzLnNjcm9sbFRvQ29udGVudCgwKTtcbiAgICAgICAgdGFiQ29udGVudEJsb2NrLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgfSwxMDApO1xuXG4gICAgfWVsc2UgaWYodGhpcy50YWJJbmRleD09PTEpe1xuICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICB0aGlzLnNjcm9sbFRvQ29udGVudCgxKTtcbiAgICAgICAgdGFiQ29udGVudEJsb2NrLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgfSwxMDApO1xuICAgIH1cblxuXG4gIH1cbiAgLy90YWIgY29udGVudCBzY3JvbGwgdG8gdG9kYXkgdG9wXG5cbiAgc2Nyb2xsVG9Db250ZW50KHRhYk9wZW5JbmRleCkge1xuICAgIC8vdGFiIGNvbnRlbnQgc2Nyb2xsIHRvIHNwY2lmaWN0IHBvc2l0aW9uICggbG9jYXRpb24gb24gdG9kYXkgdG9wIGhhbGYgKVxuICAgIGxldCB0YWJDb250ZW50VGFyZ2V0ID0gdGhpcy50YWJDb250ZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1jb250ZW50XycgKyB0YWJPcGVuSW5kZXgpO1xuICAgIGxldCBzY3JvbGxFbGUgPSB0YWJDb250ZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50cy10b2RheScpO1xuICAgIGxldCBzY3JvbGxDb250ZW50ID0gdGhpcy50YWJDb250ZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHNjcm9sbEVsZSAhPT0gbnVsbCkge1xuICAgICAgLy8gbGV0IG1vdmUgPSAgdGhpcy50YWJIZWlnaHQgKyBzY3JvbGxFbGUub2Zmc2V0VG9wIC0gNTA7XG4gICAgICBsZXQgbW92ZSA9IHNjcm9sbEVsZS5vZmZzZXRUb3AgLSA1MDtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnRhYkhlaWdoJyx0aGlzLnRhYkhlaWdodCk7XG4gICAgICBjb25zb2xlLmxvZygnc2Nyb2xsRWxlLm9mZnNldFRvcCcsc2Nyb2xsRWxlLm9mZnNldFRvcCk7XG4gICAgICBzY3JvbGxDb250ZW50LnNjcm9sbFRvcCA9IG1vdmU7XG4gICAgICAvL2NvbnNvbGUubG9nKCdtb3ZlJyxtb3ZlKTtcbiAgICB9XG4gIH1cblxuXG4gIEBPdXRwdXQoKVxuICBjb21wbGV0ZUxvYWRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAT3V0cHV0KClcbiAgdXBkYXRlQ2FsZW5kYXJFdmVudERldGFpbCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJFdmVudERldGFpbD4oKTtcblxuICBAT3V0cHV0KClcbiAgY2xpY2tEYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXG4gIG9uQ2xpY2tFdmVudEl0ZW0oc2hvd0RhdGUsIGNhbGVuZGFySXRlbSkge1xuICAgIHRoaXMuY2xpY2tDYWxlbmRhckl0ZW0uZW1pdCh7IHNob3dEYXRlOiBzaG93RGF0ZSwgZXZlbnRMaXN0OiBjYWxlbmRhckl0ZW0gfSk7XG5cblxuXG5cbiAgICAvL2NvbnNvbGUubG9nKFwiaXRlbTogXCIsIGNhbGVuZGFySXRlbSk7XG4gIH1cblxuICAvLyBjbGljayBtb250aCBkYXlcbiAgbW9udGhEYXlDbGlja2VkKGRhdGUpIHtcbiAgICB0aGlzLmNsaWNrRGF0ZS5lbWl0KGRhdGUpO1xuXG4gIH1cblxuICBzd2l0Y2hNb250aENsaWNrZWQoZGF0ZSkge1xuICAgIC8vY29uc29sZS5sb2coXCJpbiBzd2l0Y2hcIik7XG4gICAgdGhpcy5jbGlja0RhdGUuZW1pdChkYXRlKTtcbiAgfVxuXG5cblxuICBpdGVtQmlydGhkYXlJc1RvZGF5KGl0ZW06IEN1c3RvbWVyQmlydGhkYXkpOiBib29sZWFuIHtcblxuICAgIHJldHVybiAodGhpcy50b2RheS5nZXRNb250aCgpICsgMSkgPT0gcGFyc2VJbnQoaXRlbS5iaXJ0aGRheU1vbnRoKSAmJiB0aGlzLnRvZGF5LmdldERhdGUoKSA9PSBwYXJzZUludChpdGVtLmJpcnRoZGF5RGF0ZSk7XG4gIH1cblxuXG5cbiAgaXRlbUJpcnRoZGF5SXNCZWZvcmVUb2RheShpdGVtOiBDdXN0b21lckJpcnRoZGF5KTogYm9vbGVhbiB7XG5cbiAgICBsZXQgdG9kYXlEYXRlID0gRGF0ZS5VVEMoMjAwMCwgdGhpcy50b2RheS5nZXRNb250aCgpICsgMSwgdGhpcy50b2RheS5nZXREYXRlKCkpO1xuICAgIGxldCBpdGVtRGF0ZSA9IERhdGUuVVRDKDIwMDAsIHBhcnNlSW50KGl0ZW0uYmlydGhkYXlNb250aCksIHBhcnNlSW50KGl0ZW0uYmlydGhkYXlEYXRlKSk7XG5cbiAgICBjb25zb2xlLmRlYnVnKCdjb21wYXJlIGJpcnRoZGF5JywgdG9kYXlEYXRlLCBpdGVtRGF0ZSk7XG5cbiAgICByZXR1cm4gdG9kYXlEYXRlID4gaXRlbURhdGU7XG4gIH1cblxuXG5cblxuXG4gIGp1ZGdlSXNTY2hlZHVsZUhhc0RhdGEoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jYWxlbmRhckV2ZW50TGlzdC5maWx0ZXIoeCA9PiB4LmV2ZW50TGlzdC5sZW5ndGggPiAwKS5sZW5ndGgpID4gMDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGFiQ2hhbmdlRXZlbnQoMCk7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnNvbGUubG9nKFwidGhpcy53aW5kb3dXaWR0aFwiLHRoaXMud2luZG93V2lkdGgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY2FsZW5kYXJMaXN0Q29udGVudHMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbFRvQ29udGVudCgwKTtcbiAgICB9KVxuICB9IFxuXG4gIGNvbnZlcnROYW1lVG9TaG93KGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zaG93UnVsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvd1J1bGUuY29udmVydE5hbWUoZmlyc3ROYW1lLCBsYXN0TmFtZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGZpcnN0TmFtZVN0cjogc3RyaW5nID0gU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShmaXJzdE5hbWUpID8gZmlyc3ROYW1lIDogJyc7XG4gICAgICBsZXQgbGFzdE5hbWVTdHI6IHN0cmluZyA9IFN0cmluZ1V0aWxzLmlzTm90RW1wdHkobGFzdE5hbWUpID8gKCcgJyArIGxhc3ROYW1lKSA6ICcnO1xuICAgICAgcmV0dXJuIGZpcnN0TmFtZVN0ciArIGxhc3ROYW1lU3RyO1xuICAgIH1cbiAgfVxuXG4gIGNvbnZlcnRCaXJ0aGRheVRvU2hvdyhtb250aDogc3RyaW5nLCBkYXRlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBjb21iaW5lRGF0ZSA9IG5ldyBEYXRlKGdldFllYXIobmV3IERhdGUoKSkgKyAnLycgKyBtb250aCArICcvJyArIGRhdGUpO1xuICAgIHJldHVybiB0aGlzLl9jb252ZXJ0RGF0ZVdpdGhvdXRZZWFyKGNvbWJpbmVEYXRlKTtcbiAgfVxuXG5cbiAgY29udmVydENhbGVuZGFyRGF0ZVRvU2hvdyhkYXRlOiBEYXRlKTogc3RyaW5nIHsgXG4gICAgcmV0dXJuIHRoaXMuX2NvbnZlcnREYXRlV2l0aG91dFllYXIoZGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIF9jb252ZXJ0RGF0ZVdpdGhvdXRZZWFyKGRhdGU6IERhdGUpIHtcbiAgICBpZih0aGlzLnNob3dSdWxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG93UnVsZS5jb252ZXJ0RGF0ZVdpdGhvdXRZZWFyKGRhdGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBmb3JtYXQoZGF0ZSwnTU0vZGQnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zb3J0QmlydGhEYXlMaXN0QnlOYW1lKGJpcnRoZGF5SXRlbUxpc3Q6IEFycmF5PEN1c3RvbWVyQmlydGhkYXk+KSB7XG5cbiAgICBsZXQgY2xvbmVMaXN0ID0gYmlydGhkYXlJdGVtTGlzdC5tYXAoeCA9PiB4LmNsb25lKCkpO1xuICAgIGNsb25lTGlzdC5zb3J0KChpdGVtMSwgaXRlbTIpID0+IHtcblxuICAgICAgbGV0IGNvbWFwYXJlQmlydGhkYXlNb250aCA9IHRoaXMuX2NvbWFwYXJlKGl0ZW0xLmJpcnRoZGF5TW9udGgsIGl0ZW0yLmJpcnRoZGF5TW9udGgpO1xuICAgICAgaWYoY29tYXBhcmVCaXJ0aGRheU1vbnRoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBjb21hcGFyZUJpcnRoZGF5TW9udGg7XG4gICAgICB9XG5cbiAgICAgIGxldCBjb21hcGFyZUJpcnRoZGF5RGF0ZSA9IHRoaXMuX2NvbWFwYXJlKGl0ZW0xLmJpcnRoZGF5RGF0ZSwgaXRlbTIuYmlydGhkYXlEYXRlKTtcbiAgICAgIGlmKGNvbWFwYXJlQmlydGhkYXlEYXRlICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBjb21hcGFyZUJpcnRoZGF5RGF0ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IGl0ZW0xX25hbWUgPSBTdHJpbmdVdGlscy5pc05vdEVtcHR5KGl0ZW0xLmxhc3ROYW1lKSA/IGl0ZW0xLmxhc3ROYW1lIDogJyc7XG4gICAgICBsZXQgaXRlbTJfbmFtZSA9IFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoaXRlbTIubGFzdE5hbWUpID8gaXRlbTIubGFzdE5hbWUgOiAnJztcblxuICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0hhc0NoaW5lc2UoaXRlbTFfbmFtZSkgJiYgU3RyaW5nVXRpbHMuaXNIYXNDaGluZXNlKGl0ZW0yX25hbWUpKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKFN0cmluZ1V0aWxzLmlzSGFzQ2hpbmVzZShpdGVtMV9uYW1lKSAmJiAhU3RyaW5nVXRpbHMuaXNIYXNDaGluZXNlKGl0ZW0yX25hbWUpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBpdGVtMV9uYW1lLmxvY2FsZUNvbXBhcmUoaXRlbTJfbmFtZSwgXCJ6aC1IYW50XCIpO1xuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xvbmVMaXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tYXBhcmUobjEsIG4yKSB7XG4gICAgaWYobjEgPCBuMikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBlbHNlIGlmKG4xID4gbjIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG5cblxufVxuIl19