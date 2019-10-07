/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Inject, ViewChildren, QueryList, Optional } from '@angular/core';
import { TranslateService, Language, ConfigToken, showRuleToken, StringUtils } from '@allianzSND/core';
import { getYear, addDays, format } from 'date-fns';
export class DashboardListComponent {
    /**
     * @param {?} APP_CONFIG
     * @param {?} showRule
     * @param {?} translateService
     * @param {?} elementRef
     */
    constructor(APP_CONFIG, showRule, translateService, elementRef) {
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
    /**
     * @return {?}
     */
    get calendarEventList() {
        return this._calendarEventList;
    }
    ;
    /**
     * @param {?} calendarEventList
     * @return {?}
     */
    set calendarEventList(calendarEventList) {
        this._calendarEventList = calendarEventList;
        this.isHasScheduleData = this.judgeIsScheduleHasData();
    }
    /**
     * @return {?}
     */
    get birthdayItemList() {
        return this._birthdayItemList;
    }
    ;
    /**
     * @param {?} birthdayItemList
     * @return {?}
     */
    set birthdayItemList(birthdayItemList) {
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
        x => this.itemBirthdayIsBeforeToday(x))));
        this.afterTodayBirthdayItemList = this._sortBirthDayListByName(this._birthdayItemList.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !this.itemBirthdayIsBeforeToday(x))));
    }
    /**
     * @return {?}
     */
    get viewDate() {
        return this._viewDate;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set viewDate(val) {
        if (this._viewDate.getTime() != val.getTime()) {
            this.changeViewDate(new Date(val));
            this.yearVal = this._viewDate.getFullYear();
        }
    } // end set viewDate
    /**
     * @param {?} event
     * @return {?}
     */
    tabChangeEvent(event) {
        /** @type {?} */
        let _this = this;
        /** @type {?} */
        let tabContentBlock = _this.elementRef.nativeElement.querySelector(".layut-home-list-block .tab-content-block");
        tabContentBlock.style.opacity = 0;
        this.tabHeight = this.tabContent.nativeElement.scrollHeight;
        this.tabIndex = event;
        this.todayDisplayStr = this.convertCalendarDateToShow(this.today);
        /** @type {?} */
        let endDate = addDays(this.today, this.searchBirthdayAddN);
        this.endDateDisplayStr = this.convertCalendarDateToShow(endDate);
        console.log("this.tabIndex:", this.tabIndex);
        if (this.tabIndex === 0) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.scrollToContent(0);
                tabContentBlock.style.opacity = 1;
            }), 100);
        }
        else if (this.tabIndex === 1) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.scrollToContent(1);
                tabContentBlock.style.opacity = 1;
            }), 100);
        }
    }
    //tab content scroll to today top
    /**
     * @param {?} tabOpenIndex
     * @return {?}
     */
    scrollToContent(tabOpenIndex) {
        //tab content scroll to spcifict position ( location on today top half )
        /** @type {?} */
        let tabContentTarget = this.tabContent.nativeElement.querySelector('.tab-content_' + tabOpenIndex);
        /** @type {?} */
        let scrollEle = tabContentTarget.querySelector('.ts-today');
        /** @type {?} */
        let scrollContent = this.tabContent.nativeElement;
        if (scrollEle !== null) {
            // let move =  this.tabHeight + scrollEle.offsetTop - 50;
            /** @type {?} */
            let move = scrollEle.offsetTop - 50;
            console.log('this.tabHeigh', this.tabHeight);
            console.log('scrollEle.offsetTop', scrollEle.offsetTop);
            scrollContent.scrollTop = move;
            //console.log('move',move);
        }
    }
    /**
     * @param {?} showDate
     * @param {?} calendarItem
     * @return {?}
     */
    onClickEventItem(showDate, calendarItem) {
        this.clickCalendarItem.emit({ showDate: showDate, eventList: calendarItem });
        //console.log("item: ", calendarItem);
    }
    // click month day
    /**
     * @param {?} date
     * @return {?}
     */
    monthDayClicked(date) {
        this.clickDate.emit(date);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    switchMonthClicked(date) {
        //console.log("in switch");
        this.clickDate.emit(date);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    itemBirthdayIsToday(item) {
        return (this.today.getMonth() + 1) == parseInt(item.birthdayMonth) && this.today.getDate() == parseInt(item.birthdayDate);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    itemBirthdayIsBeforeToday(item) {
        /** @type {?} */
        let todayDate = Date.UTC(2000, this.today.getMonth() + 1, this.today.getDate());
        /** @type {?} */
        let itemDate = Date.UTC(2000, parseInt(item.birthdayMonth), parseInt(item.birthdayDate));
        console.debug('compare birthday', todayDate, itemDate);
        return todayDate > itemDate;
    }
    /**
     * @return {?}
     */
    judgeIsScheduleHasData() {
        return (this._calendarEventList.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.eventList.length > 0)).length) > 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tabChangeEvent(0);
        this.windowWidth = window.innerWidth;
        console.log("this.windowWidth", this.windowWidth);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.calendarListContents.changes.subscribe((/**
         * @return {?}
         */
        () => {
            this.scrollToContent(0);
        }));
    }
    /**
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    convertNameToShow(firstName, lastName) {
        if (this.showRule) {
            return this.showRule.convertName(firstName, lastName);
        }
        else {
            /** @type {?} */
            let firstNameStr = StringUtils.isNotEmpty(firstName) ? firstName : '';
            /** @type {?} */
            let lastNameStr = StringUtils.isNotEmpty(lastName) ? (' ' + lastName) : '';
            return firstNameStr + lastNameStr;
        }
    }
    /**
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    convertBirthdayToShow(month, date) {
        /** @type {?} */
        let combineDate = new Date(getYear(new Date()) + '/' + month + '/' + date);
        return this._convertDateWithoutYear(combineDate);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    convertCalendarDateToShow(date) {
        return this._convertDateWithoutYear(date);
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    _convertDateWithoutYear(date) {
        if (this.showRule) {
            return this.showRule.convertDateWithoutYear(date);
        }
        else {
            return format(date, 'MM/dd');
        }
    }
    /**
     * @private
     * @param {?} birthdayItemList
     * @return {?}
     */
    _sortBirthDayListByName(birthdayItemList) {
        /** @type {?} */
        let cloneList = birthdayItemList.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.clone()));
        cloneList.sort((/**
         * @param {?} item1
         * @param {?} item2
         * @return {?}
         */
        (item1, item2) => {
            /** @type {?} */
            let comapareBirthdayMonth = this._comapare(item1.birthdayMonth, item2.birthdayMonth);
            if (comapareBirthdayMonth !== 0) {
                return comapareBirthdayMonth;
            }
            /** @type {?} */
            let comapareBirthdayDate = this._comapare(item1.birthdayDate, item2.birthdayDate);
            if (comapareBirthdayDate !== 0) {
                return comapareBirthdayDate;
            }
            /** @type {?} */
            let item1_name = StringUtils.isNotEmpty(item1.lastName) ? item1.lastName : '';
            /** @type {?} */
            let item2_name = StringUtils.isNotEmpty(item2.lastName) ? item2.lastName : '';
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
    }
    /**
     * @private
     * @param {?} n1
     * @param {?} n2
     * @return {?}
     */
    _comapare(n1, n2) {
        if (n1 < n2) {
            return -1;
        }
        else if (n1 > n2) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
DashboardListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dashboard-list',
                template: "<div class=\"layut-home-list-block\">\n  <!-- top calendar -->\n\n  <app-ui-calendar-month-collapse class=\"calendar-block\" [displayMonthFormat]=\"'MM/dd EEE'\" [today]=\"today\"\n    [viewDate]=\"viewDate\" [weekStartsOn]=\"weekStartsOn\" [translateMap]=\"translateMap\"\n    (onClickDate)=\"monthDayClicked($event)\" [eventList]=\"eventMonthList\" (onSwitchMonth)=\"switchMonthClicked($event)\">\n  </app-ui-calendar-month-collapse>\n  <!-- end of tab calendar -->\n  <!-- tab detail block -->\n  <!-- tab -->\n  <div class=\"tab-btn-block\">\n    <app-ui-tab-style1 tabInfo [action]=\"'dashboardListTab'\" (onTabChildClick)=\"tabChangeEvent($event)\">\n      <app-ui-tab-child>{{language.homeSchedule | translate}}</app-ui-tab-child>\n      <app-ui-tab-child>{{language.homeBirthday | translate}}</app-ui-tab-child>\n    </app-ui-tab-style1>\n  </div>\n\n  <!-- end of tab -->\n\n  <!-- tab content -->\n  <div #tabContent class=\"tab-content-block\" [ngClass]=\"windowWidth >= 1024 ? 'stop-scroll-block' :''\">\n    <div class=\"tab-content_1 active\" *ngIf=\"tabIndex===1\" [ngClass]=\"{'fullHeight': !isHasBirthdayData}\">\n      <!-- birthday -->\n      <ng-container #birthdayList *ngIf=\"isHasBirthdayData; else noBirthdayData\">\n        <div class=\"tab-content-detail\">\n          <ul class=\"list-text-block\">\n            <li class=\"list-text-item style-grey\" *ngFor=\"let item of beforeTodayBirthdayItemList\">\n              <p class=\"list-text_title\"> {{convertNameToShow(item.firstName, item.lastName)}} </p>\n              <p class=\"list-text_date\"> {{convertBirthdayToShow(item.birthdayMonth,item.birthdayDate)}} </p>\n            </li>\n          </ul>\n          <div class=\"title-sm\"> {{ todayDisplayStr + ' - ' + endDateDisplayStr }} </div>\n          <ul class=\"list-text-block ts-today\">\n            <li class=\"list-text-item\" *ngFor=\"let item of afterTodayBirthdayItemList\">\n              <p class=\"list-text_title\"> {{convertNameToShow(item.firstName, item.lastName)}} </p>\n              <p class=\"list-text_date\"> {{convertBirthdayToShow(item.birthdayMonth,item.birthdayDate)}} </p>\n              <span *ngIf=\"itemBirthdayIsToday(item)\" class=\"tag\">{{language.today | translate}}</span>\n            </li>\n          </ul>\n        </div>\n        <!-- end of tab detail -->\n      </ng-container>\n      <!-- end of birthday -->\n      <!-- no data -->\n      <ng-template #noBirthdayData>\n        <div class=\"tab-content-detail skelton-layout nodata-layout\">\n          <div class=\"theme-loading\" style=\"background-image:url('assets/img/nodata-dashboard-birthday.svg')\">\n            <p class=\"nodata-text\">{{language.noBirthday | translate}}</p>\n          </div>\n        </div>\n      </ng-template>\n      <!-- end of no data -->\n\n    </div>\n    <div class=\"tab-content_0 active\" *ngIf=\"tabIndex===0\" [ngClass]=\"{'fullHeight': !isHasScheduleData}\">\n      <!-- event list -->\n      <ng-container *ngIf=\"isHasScheduleData; else noScheduleData\">\n        <ng-container #calendarList *ngFor=\"let calendar of _calendarEventList; let isCalendarListReady = last\">\n          <div *ngIf=\"calendar.eventList.length > 0\" class=\"schedule-list-block\"\n            [ngClass]=\"[calendar.isToday ? 'ts-today': '']\">\n            <div class=\"title-sm\"> {{convertCalendarDateToShow(calendar.showDate)}} </div>\n            <!-- <div *ngIf=\"calendar.eventList.length == 0\" class=\"tab-content-detail\">\n                <p class=\"text-no\">No appointment</p>\n              </div> -->\n            <app-ui-calendar-event-list class=\"tab-content-detail\" [translateMap]=\"translateMap\"\n              [colorCode]=\"eventListBGColor\" [eventList]=\"calendar.eventList\"\n              [textColorStyle]=\"calendar.isBeforeToday ? 'grey': ''\"\n              (clickEvent)=\"onClickEventItem(calendar.showDate, $event)\">\n            </app-ui-calendar-event-list>\n\n          </div>\n        </ng-container>\n      </ng-container>\n      <!-- end event list -->\n      <!-- no data -->\n      <ng-template #noScheduleData>\n        <div class=\"tab-content-detail skelton-layout nodata-layout\">\n          <div class=\"theme-loading\" style=\"background-image:url('assets/img/nodata-dashboard-schedule.svg')\">\n            <p class=\"nodata-text\">{{language.noSchedule | translate}}</p>\n          </div>\n        </div>\n      </ng-template>\n      <!-- end of no data -->\n\n    </div>\n  </div>\n\n  <!-- end of tab content -->\n\n  <!-- end of tab detail block -->\n</div>",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}[class*=tab-content_]{opacity:0;transition:none;position:absolute;z-index:-1;-webkit-transform-origin:top;transform-origin:top}[class*=tab-content_]:not(.active) *{display:none}[class*=tab-content_].active{position:relative;opacity:1;z-index:1;transition:.2s;display:flex;flex-wrap:wrap}.tab-content-block{height:100%;opacity:0}.tab-content-block [class*=tab-content_].fullHeight{height:100%}.tab-content-block .nodata-layout{height:100%;background-color:#f5f5f5}.tab-content-block .theme-loading{height:100%;background-repeat:no-repeat;background-position:right bottom;background-size:contain;display:flex;width:100%;padding:0 9%;text-align:center;justify-content:center}.tab-content-block .nodata-text{margin:130px 0 0;padding:0;font-size:.875rem;color:#414141;line-height:28px}@media (max-width:1023px){.tab-content-block .nodata-text{margin-top:20px}.tab-content-block .theme-loading{padding:0 22%}}.layut-home-list-block.active .theme-loading{background-position:0 500px!important}:host{display:block;height:100%;width:100%}.layut-home-list-block{display:flex;height:100%;flex-direction:column;width:100%}.layut-home-list-block .calendar-block{display:block;flex-shrink:0}.layut-home-list-block .tab-btn-block{display:block;padding-top:20px;flex-shrink:0}.layut-home-list-block .tab-content-block{display:block;overflow-y:auto;flex:1 1 auto;height:100%;margin-top:1px}.layut-home-list-block .tab-content-detail{padding-top:20px;width:100%}.layut-home-list-block .text-no{padding:0 20px 20px;margin:0;border-bottom:1px solid #ececec}.schedule-list-block{display:inline-block;width:100%}.title-sm{background-color:#ececec;color:#414141;font-size:.75rem;font-weight:700;padding:3px 20px}.list-text-block{padding:0;list-style-type:none}.list-text-block .list-text-item{border-bottom:1px solid #c2c2c2;padding:20px}.list-text-block .list-text-item.style-grey p{color:#c2c2c2}.list-text-block p{margin:0;padding:0}.list-text-block .list-text_title{font-size:.875rem;line-height:20px;margin-bottom:5px;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.list-text-block .list-text_date{font-size:.875rem;line-height:20px;display:inline-block;vertical-align:middle}.list-text-block .tag{display:inline-block;font-size:.75rem;min-height:18px;padding:3px 5px;margin-left:12px;background-color:#003781;letter-spacing:.5px;color:#fff}"]
            }] }
];
DashboardListComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] },
    { type: TranslateService },
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZGFzaGJvYXJkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGFzaGJvYXJkLWxpc3QvZGFzaGJvYXJkLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFxQixZQUFZLEVBQUUsU0FBUyxFQUFpQixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkwsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFZLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQU9wRCxNQUFNOzs7Ozs7O0lBc0dKLFlBQytCLFVBQWUsRUFDRCxRQUFrQixFQUNyRCxnQkFBa0MsRUFDbEMsVUFBc0I7UUFIRCxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ0QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNyRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGVBQVUsR0FBVixVQUFVLENBQVk7UUF2R2hDLCtEQUErRDtRQUN4RCxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUU5QiwyQ0FBMkM7UUFDcEMsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUl6QixpQkFBWSxHQUF3QixJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUU5RCx1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDeEIsOEJBQXlCLEdBQUcsRUFBRSxDQUFDO1FBQzlCLHNCQUFpQixHQUE0QixFQUFFLENBQUM7UUFFakQsdUJBQWtCLEdBQUcs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akUsNERBQWdFOztJQUdoRSxrREFBaUM7O0lBQ2pDLDBDQUF3Qjs7SUFDeEIsMENBQWlDOztJQUdqQywrQ0FBeUI7O0lBQ3pCLDBDQUFvQjs7Ozs7SUFDcEIsMkNBQXNCOzs7OztJQUV0QiwyQ0FBcUM7Ozs7O0lBQ3JDLDRDQUFtQjs7SUFDbkIsOENBQXdCOztJQUN4QiwyQ0FBaUI7O0lBQ2pCLHlDQUFlOztJQUNmLHVDQUFtQjs7SUFDbkIseUNBQXNDOztJQUN0QyxpREFBK0I7O0lBQy9CLG1EQUFpQzs7SUFDakMsNkNBQW1COztJQUVuQixzREFBbUU7O0lBV25FLGdEQUEyRDs7SUF5QzNELG1EQUFzRDs7SUFHdEQsNENBQWdEOztJQUNoRCxnREFBb0I7O0lBd0RwQixtREFDZ0Q7O0lBRWhELDJEQUNvRTs7SUFFcEUsMkNBQ3FDOzs7OztJQTNEbkMsNENBQTRDOzs7OztJQUM1QywwQ0FBNkQ7Ozs7O0lBQzdELGtEQUEwQzs7Ozs7SUFDMUMsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJWaWV3SW5pdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudERldGFpbCwgQ3VzdG9tZXJCaXJ0aGRheSB9IGZyb20gJ0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIExhbmd1YWdlLCBDb25maWdUb2tlbiwgc2hvd1J1bGVUb2tlbiwgc2hvd1J1bGUsIFN0cmluZ1V0aWxzIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBnZXRZZWFyLCBhZGREYXlzLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kYXNoYm9hcmQtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblxuICAvLyBiaXJ0aGRhdCB0YWIgdGFnIC4uIGlmIHRoZSBiaXJ0aGRheSBkYXRlIGlzIHRvZGF5LCBzaG93IHRhZyBcbiAgcHVibGljIGlzQmlydGhkYXlUb2RheSA9IHRydWU7XG5cbiAgLy8gdGFiIHNjaGVkdWxlIGFuZCBiaXJ0aGF5IGhhcyBkYXRhIG9yIG5vdFxuICBwdWJsaWMgaXNIYXNTY2hlZHVsZURhdGEgPSB0cnVlO1xuICBwdWJsaWMgaXNIYXNCaXJ0aGRheURhdGEgPSB0cnVlO1xuICAvLyBpZiBjdXJyZW50IHRhYiBubyBkYXRhIGhlaWdodCBuZWVkIGZ1bGxcbiAgcHVibGljIGlzVGFiQ29udGVudE5vRGF0YTogc3RyaW5nO1xuXG4gIHB1YmxpYyB0cmFuc2xhdGVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICBwdWJsaWMgY2FsZW5kYXJFdmVudERldGFpbDogQ2FsZW5kYXJFdmVudERldGFpbDsgLy9EZXRhaWxcbiAgcHVibGljIF9jYWxlbmRhckV2ZW50TGlzdCA9IFtdO1xuICBwdWJsaWMgaXNDYWxlbmRhckV2ZW50TGlzdEJlZm9yZSA9IFtdO1xuICBwcml2YXRlIF9iaXJ0aGRheUl0ZW1MaXN0OiBBcnJheTxDdXN0b21lckJpcnRoZGF5PiA9IFtdO1xuXG4gIHB1YmxpYyBzZWFyY2hCaXJ0aGRheUFkZE4gPSB0aGlzLkFQUF9DT05GSUdbdGhpcy5BUFBfQ09ORklHLkVOVl0uREFTSEJPQVJELlNlYXJjaEJpcnRoZGF5UmFuZ2UuYWRkTjtcbiAgcHVibGljIGJlZm9yZVRvZGF5QmlydGhkYXlJdGVtTGlzdDogQXJyYXk8Q3VzdG9tZXJCaXJ0aGRheT4gPSBbXTtcbiAgcHVibGljIGFmdGVyVG9kYXlCaXJ0aGRheUl0ZW1MaXN0OiBBcnJheTxDdXN0b21lckJpcnRoZGF5PiA9IFtdO1xuXG4gIC8vcHJpdmF0ZSBjYWxlbmRhclV0aWxzID0gbmV3IENhbGVuZGFyVXRpbHMoKTtcbiAgcHVibGljIGV2ZW50TGlzdEJHQ29sb3IgPSAnI2ZmZic7XG4gIHB1YmxpYyBzaG93RGF0ZTogc3RyaW5nO1xuICBwdWJsaWMgbGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcblxuICAvL2NhbGVuZGFyLXVpIGNvbmZpZyBzZXR0aW5nXG4gIHB1YmxpYyB2aWV3VHlwZUluZGV4ID0gMjsgLy8gJ21vbnRoJ1xuICBwdWJsaWMgdGFiSW5kZXggPSAwO1xuICBwcml2YXRlIHRhYkhlaWdodCA9IDA7XG4gIC8vcHVibGljIF92aWV3RGF0ZSA9IG5ldyBEYXRlKCk7IC8vY3VycmVudCBkYXRlXG4gIHByaXZhdGUgX3ZpZXdEYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgcHJpdmF0ZSBfZXZlbnRMaXN0O1xuICBwdWJsaWMgd2Vla1N0YXJ0c09uID0gMTsgLy8gTW9uZGF5XG4gIHB1YmxpYyBzdGFydERhdGU7XG4gIHB1YmxpYyBlbmREYXRlO1xuICB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHllYXJWYWwgPSB0aGlzLnZpZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG4gIHB1YmxpYyB0b2RheURpc3BsYXlTdHI6IHN0cmluZztcbiAgcHVibGljIGVuZERhdGVEaXNwbGF5U3RyOiBzdHJpbmc7XG4gIHB1YmxpYyB3aW5kb3dXaWR0aDtcblxuICBAVmlld0NoaWxkcmVuKCdjYWxlbmRhckxpc3QnKSBjYWxlbmRhckxpc3RDb250ZW50czogUXVlcnlMaXN0PGFueT47XG5cbiAgQElucHV0KClcbiAgZ2V0IGNhbGVuZGFyRXZlbnRMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYWxlbmRhckV2ZW50TGlzdDtcbiAgfTtcbiAgc2V0IGNhbGVuZGFyRXZlbnRMaXN0KGNhbGVuZGFyRXZlbnRMaXN0KSB7XG5cbiAgICB0aGlzLl9jYWxlbmRhckV2ZW50TGlzdCA9IGNhbGVuZGFyRXZlbnRMaXN0O1xuICAgIHRoaXMuaXNIYXNTY2hlZHVsZURhdGEgPSB0aGlzLmp1ZGdlSXNTY2hlZHVsZUhhc0RhdGEoKTtcbiAgfVxuICBASW5wdXQoKSBwdWJsaWMgZXZlbnRNb250aExpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+O1xuXG5cbiAgQElucHV0KClcbiAgZ2V0IGJpcnRoZGF5SXRlbUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JpcnRoZGF5SXRlbUxpc3Q7XG4gIH07XG4gIHNldCBiaXJ0aGRheUl0ZW1MaXN0KGJpcnRoZGF5SXRlbUxpc3QpIHtcblxuICAgIGlmIChiaXJ0aGRheUl0ZW1MaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmlzSGFzQmlydGhkYXlEYXRhID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0hhc0JpcnRoZGF5RGF0YSA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5fYmlydGhkYXlJdGVtTGlzdCA9IGJpcnRoZGF5SXRlbUxpc3Q7XG4gICAgdGhpcy5iZWZvcmVUb2RheUJpcnRoZGF5SXRlbUxpc3QgPSBbXTtcbiAgICB0aGlzLmFmdGVyVG9kYXlCaXJ0aGRheUl0ZW1MaXN0ID0gW107XG5cblxuICAgIC8vY29udmVydCB0byBiZWZvcmUgJiBhZnRlciBhcnJheVxuICAgIHRoaXMuYmVmb3JlVG9kYXlCaXJ0aGRheUl0ZW1MaXN0ID0gdGhpcy5fc29ydEJpcnRoRGF5TGlzdEJ5TmFtZSh0aGlzLl9iaXJ0aGRheUl0ZW1MaXN0LmZpbHRlcih4ID0+IHRoaXMuaXRlbUJpcnRoZGF5SXNCZWZvcmVUb2RheSh4KSkpO1xuICAgIHRoaXMuYWZ0ZXJUb2RheUJpcnRoZGF5SXRlbUxpc3QgPSB0aGlzLl9zb3J0QmlydGhEYXlMaXN0QnlOYW1lKHRoaXMuX2JpcnRoZGF5SXRlbUxpc3QuZmlsdGVyKHggPT4gIXRoaXMuaXRlbUJpcnRoZGF5SXNCZWZvcmVUb2RheSh4KSkpO1xuICAgXG5cbiAgfVxuXG5cbiAgQElucHV0KClcbiAgZ2V0IHZpZXdEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl92aWV3RGF0ZTtcbiAgfVxuICBzZXQgdmlld0RhdGUodmFsKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdEYXRlLmdldFRpbWUoKSAhPSB2YWwuZ2V0VGltZSgpKSB7XG4gICAgICB0aGlzLmNoYW5nZVZpZXdEYXRlKG5ldyBEYXRlKHZhbCkpO1xuICAgICAgdGhpcy55ZWFyVmFsID0gdGhpcy5fdmlld0RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB9XG4gIH0gLy8gZW5kIHNldCB2aWV3RGF0ZVxuXG5cbiAgQE91dHB1dCgpIGNsaWNrQ2FsZW5kYXJJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLy8gZ2V0IHRhYiBjb250ZW50XG4gIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnQnKSB0YWJDb250ZW50OiBFbGVtZW50UmVmO1xuICBjaGFuZ2VWaWV3RGF0ZTogYW55O1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDb25maWdUb2tlbikgcHJpdmF0ZSBBUFBfQ09ORklHOiBhbnksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChzaG93UnVsZVRva2VuKSBwcml2YXRlIHNob3dSdWxlOiBzaG93UnVsZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICApIHt9XG4gIHRhYkNoYW5nZUV2ZW50KGV2ZW50KSB7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCB0YWJDb250ZW50QmxvY2sgPSBfdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXl1dC1ob21lLWxpc3QtYmxvY2sgLnRhYi1jb250ZW50LWJsb2NrXCIpO1xuICAgIHRhYkNvbnRlbnRCbG9jay5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICAgIHRoaXMudGFiSGVpZ2h0ID0gdGhpcy50YWJDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIHRoaXMudGFiSW5kZXggPSBldmVudDtcbiAgICB0aGlzLnRvZGF5RGlzcGxheVN0ciA9IHRoaXMuY29udmVydENhbGVuZGFyRGF0ZVRvU2hvdyh0aGlzLnRvZGF5KTtcblxuICAgIGxldCBlbmREYXRlID0gYWRkRGF5cyh0aGlzLnRvZGF5LCB0aGlzLnNlYXJjaEJpcnRoZGF5QWRkTik7XG4gICAgdGhpcy5lbmREYXRlRGlzcGxheVN0ciA9IHRoaXMuY29udmVydENhbGVuZGFyRGF0ZVRvU2hvdyhlbmREYXRlKTsgIFxuICAgIFxuICAgIGNvbnNvbGUubG9nKFwidGhpcy50YWJJbmRleDpcIix0aGlzLnRhYkluZGV4KTtcbiAgICBpZih0aGlzLnRhYkluZGV4PT09MCl7XG4gICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Db250ZW50KDApO1xuICAgICAgICB0YWJDb250ZW50QmxvY2suc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICB9LDEwMCk7XG5cbiAgICB9ZWxzZSBpZih0aGlzLnRhYkluZGV4PT09MSl7XG4gICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Db250ZW50KDEpO1xuICAgICAgICB0YWJDb250ZW50QmxvY2suc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICB9LDEwMCk7XG4gICAgfVxuXG5cbiAgfVxuICAvL3RhYiBjb250ZW50IHNjcm9sbCB0byB0b2RheSB0b3BcblxuICBzY3JvbGxUb0NvbnRlbnQodGFiT3BlbkluZGV4KSB7XG4gICAgLy90YWIgY29udGVudCBzY3JvbGwgdG8gc3BjaWZpY3QgcG9zaXRpb24gKCBsb2NhdGlvbiBvbiB0b2RheSB0b3AgaGFsZiApXG4gICAgbGV0IHRhYkNvbnRlbnRUYXJnZXQgPSB0aGlzLnRhYkNvbnRlbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRlbnRfJyArIHRhYk9wZW5JbmRleCk7XG4gICAgbGV0IHNjcm9sbEVsZSA9IHRhYkNvbnRlbnRUYXJnZXQucXVlcnlTZWxlY3RvcignLnRzLXRvZGF5Jyk7XG4gICAgbGV0IHNjcm9sbENvbnRlbnQgPSB0aGlzLnRhYkNvbnRlbnQubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoc2Nyb2xsRWxlICE9PSBudWxsKSB7XG4gICAgICAvLyBsZXQgbW92ZSA9ICB0aGlzLnRhYkhlaWdodCArIHNjcm9sbEVsZS5vZmZzZXRUb3AgLSA1MDtcbiAgICAgIGxldCBtb3ZlID0gc2Nyb2xsRWxlLm9mZnNldFRvcCAtIDUwO1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMudGFiSGVpZ2gnLHRoaXMudGFiSGVpZ2h0KTtcbiAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGxFbGUub2Zmc2V0VG9wJyxzY3JvbGxFbGUub2Zmc2V0VG9wKTtcbiAgICAgIHNjcm9sbENvbnRlbnQuc2Nyb2xsVG9wID0gbW92ZTtcbiAgICAgIC8vY29uc29sZS5sb2coJ21vdmUnLG1vdmUpO1xuICAgIH1cbiAgfVxuXG5cbiAgQE91dHB1dCgpXG4gIGNvbXBsZXRlTG9hZEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBPdXRwdXQoKVxuICB1cGRhdGVDYWxlbmRhckV2ZW50RGV0YWlsID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhckV2ZW50RGV0YWlsPigpO1xuXG4gIEBPdXRwdXQoKVxuICBjbGlja0RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgb25DbGlja0V2ZW50SXRlbShzaG93RGF0ZSwgY2FsZW5kYXJJdGVtKSB7XG4gICAgdGhpcy5jbGlja0NhbGVuZGFySXRlbS5lbWl0KHsgc2hvd0RhdGU6IHNob3dEYXRlLCBldmVudExpc3Q6IGNhbGVuZGFySXRlbSB9KTtcblxuXG5cblxuICAgIC8vY29uc29sZS5sb2coXCJpdGVtOiBcIiwgY2FsZW5kYXJJdGVtKTtcbiAgfVxuXG4gIC8vIGNsaWNrIG1vbnRoIGRheVxuICBtb250aERheUNsaWNrZWQoZGF0ZSkge1xuICAgIHRoaXMuY2xpY2tEYXRlLmVtaXQoZGF0ZSk7XG5cbiAgfVxuXG4gIHN3aXRjaE1vbnRoQ2xpY2tlZChkYXRlKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcImluIHN3aXRjaFwiKTtcbiAgICB0aGlzLmNsaWNrRGF0ZS5lbWl0KGRhdGUpO1xuICB9XG5cblxuXG4gIGl0ZW1CaXJ0aGRheUlzVG9kYXkoaXRlbTogQ3VzdG9tZXJCaXJ0aGRheSk6IGJvb2xlYW4ge1xuXG4gICAgcmV0dXJuICh0aGlzLnRvZGF5LmdldE1vbnRoKCkgKyAxKSA9PSBwYXJzZUludChpdGVtLmJpcnRoZGF5TW9udGgpICYmIHRoaXMudG9kYXkuZ2V0RGF0ZSgpID09IHBhcnNlSW50KGl0ZW0uYmlydGhkYXlEYXRlKTtcbiAgfVxuXG5cblxuICBpdGVtQmlydGhkYXlJc0JlZm9yZVRvZGF5KGl0ZW06IEN1c3RvbWVyQmlydGhkYXkpOiBib29sZWFuIHtcblxuICAgIGxldCB0b2RheURhdGUgPSBEYXRlLlVUQygyMDAwLCB0aGlzLnRvZGF5LmdldE1vbnRoKCkgKyAxLCB0aGlzLnRvZGF5LmdldERhdGUoKSk7XG4gICAgbGV0IGl0ZW1EYXRlID0gRGF0ZS5VVEMoMjAwMCwgcGFyc2VJbnQoaXRlbS5iaXJ0aGRheU1vbnRoKSwgcGFyc2VJbnQoaXRlbS5iaXJ0aGRheURhdGUpKTtcblxuICAgIGNvbnNvbGUuZGVidWcoJ2NvbXBhcmUgYmlydGhkYXknLCB0b2RheURhdGUsIGl0ZW1EYXRlKTtcblxuICAgIHJldHVybiB0b2RheURhdGUgPiBpdGVtRGF0ZTtcbiAgfVxuXG5cblxuXG5cbiAganVkZ2VJc1NjaGVkdWxlSGFzRGF0YSgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NhbGVuZGFyRXZlbnRMaXN0LmZpbHRlcih4ID0+IHguZXZlbnRMaXN0Lmxlbmd0aCA+IDApLmxlbmd0aCkgPiAwO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50YWJDaGFuZ2VFdmVudCgwKTtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzLndpbmRvd1dpZHRoXCIsdGhpcy53aW5kb3dXaWR0aCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jYWxlbmRhckxpc3RDb250ZW50cy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Db250ZW50KDApO1xuICAgIH0pXG4gIH0gXG5cbiAgY29udmVydE5hbWVUb1Nob3coZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNob3dSdWxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG93UnVsZS5jb252ZXJ0TmFtZShmaXJzdE5hbWUsIGxhc3ROYW1lKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgZmlyc3ROYW1lU3RyOiBzdHJpbmcgPSBTdHJpbmdVdGlscy5pc05vdEVtcHR5KGZpcnN0TmFtZSkgPyBmaXJzdE5hbWUgOiAnJztcbiAgICAgIGxldCBsYXN0TmFtZVN0cjogc3RyaW5nID0gU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShsYXN0TmFtZSkgPyAoJyAnICsgbGFzdE5hbWUpIDogJyc7XG4gICAgICByZXR1cm4gZmlyc3ROYW1lU3RyICsgbGFzdE5hbWVTdHI7XG4gICAgfVxuICB9XG5cbiAgY29udmVydEJpcnRoZGF5VG9TaG93KG1vbnRoOiBzdHJpbmcsIGRhdGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IGNvbWJpbmVEYXRlID0gbmV3IERhdGUoZ2V0WWVhcihuZXcgRGF0ZSgpKSArICcvJyArIG1vbnRoICsgJy8nICsgZGF0ZSk7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnZlcnREYXRlV2l0aG91dFllYXIoY29tYmluZURhdGUpO1xuICB9XG5cblxuICBjb252ZXJ0Q2FsZW5kYXJEYXRlVG9TaG93KGRhdGU6IERhdGUpOiBzdHJpbmcgeyBcbiAgICByZXR1cm4gdGhpcy5fY29udmVydERhdGVXaXRob3V0WWVhcihkYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnZlcnREYXRlV2l0aG91dFllYXIoZGF0ZTogRGF0ZSkge1xuICAgIGlmKHRoaXMuc2hvd1J1bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNob3dSdWxlLmNvbnZlcnREYXRlV2l0aG91dFllYXIoZGF0ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZvcm1hdChkYXRlLCdNTS9kZCcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NvcnRCaXJ0aERheUxpc3RCeU5hbWUoYmlydGhkYXlJdGVtTGlzdDogQXJyYXk8Q3VzdG9tZXJCaXJ0aGRheT4pIHtcblxuICAgIGxldCBjbG9uZUxpc3QgPSBiaXJ0aGRheUl0ZW1MaXN0Lm1hcCh4ID0+IHguY2xvbmUoKSk7XG4gICAgY2xvbmVMaXN0LnNvcnQoKGl0ZW0xLCBpdGVtMikgPT4ge1xuXG4gICAgICBsZXQgY29tYXBhcmVCaXJ0aGRheU1vbnRoID0gdGhpcy5fY29tYXBhcmUoaXRlbTEuYmlydGhkYXlNb250aCwgaXRlbTIuYmlydGhkYXlNb250aCk7XG4gICAgICBpZihjb21hcGFyZUJpcnRoZGF5TW9udGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGNvbWFwYXJlQmlydGhkYXlNb250aDtcbiAgICAgIH1cblxuICAgICAgbGV0IGNvbWFwYXJlQmlydGhkYXlEYXRlID0gdGhpcy5fY29tYXBhcmUoaXRlbTEuYmlydGhkYXlEYXRlLCBpdGVtMi5iaXJ0aGRheURhdGUpO1xuICAgICAgaWYoY29tYXBhcmVCaXJ0aGRheURhdGUgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGNvbWFwYXJlQmlydGhkYXlEYXRlO1xuICAgICAgfVxuXG4gICAgICBsZXQgaXRlbTFfbmFtZSA9IFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoaXRlbTEubGFzdE5hbWUpID8gaXRlbTEubGFzdE5hbWUgOiAnJztcbiAgICAgIGxldCBpdGVtMl9uYW1lID0gU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShpdGVtMi5sYXN0TmFtZSkgPyBpdGVtMi5sYXN0TmFtZSA6ICcnO1xuXG4gICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzSGFzQ2hpbmVzZShpdGVtMV9uYW1lKSAmJiBTdHJpbmdVdGlscy5pc0hhc0NoaW5lc2UoaXRlbTJfbmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoU3RyaW5nVXRpbHMuaXNIYXNDaGluZXNlKGl0ZW0xX25hbWUpICYmICFTdHJpbmdVdGlscy5pc0hhc0NoaW5lc2UoaXRlbTJfbmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0xX25hbWUubG9jYWxlQ29tcGFyZShpdGVtMl9uYW1lLCBcInpoLUhhbnRcIik7XG4gICAgICB9XG5cbiAgICB9KTtcblxuICAgIHJldHVybiBjbG9uZUxpc3Q7XG4gIH1cblxuICBwcml2YXRlIF9jb21hcGFyZShuMSwgbjIpIHtcbiAgICBpZihuMSA8IG4yKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYobjEgPiBuMikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG5cblxuXG59XG4iXX0=