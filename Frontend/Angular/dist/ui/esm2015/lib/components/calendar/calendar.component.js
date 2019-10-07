/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostListener, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectorRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { subDays, addDays, isSameDay, isPast, isToday, isFuture, isWeekend, startOfWeek, format } from 'date-fns';
import { CalendarDateFormatter, CalendarEventTitleFormatter } from 'angular-calendar';
import { CustomDateFormatter } from './ui-calendar-dateformat';
import { CustomEventTitleFormatter } from './ui-calendar-tooltip';
import { UiInformationBtnComponent } from '../ui-information-btn/ui-information-btn.component';
import { ViewDateChange } from '@allianzSND/core';
import { ChangeAction } from '@allianzSND/core';
export class CalendarComponent {
    /**
     * @param {?} element
     * @param {?} changeDector
     * @param {?} renderer
     */
    constructor(element, changeDector, renderer) {
        this.element = element;
        this.changeDector = changeDector;
        this.renderer = renderer;
        this.weekStartsOn = 1;
        this.eventList = [];
        this.translateMap = new Map();
        this.viewDateChange = new EventEmitter();
        this.uiCalendarClickEventItem = new EventEmitter();
        this.uiCalendarMobileWeekDayClicked = new EventEmitter();
        this.uiCalendarMobileMonthDayClicked = new EventEmitter();
        this.uiCalendarYearMonthClicked = new EventEmitter();
        this.uiCalendarSwipe = new EventEmitter();
        this.uiCalendarMoreInfoClicked = new EventEmitter();
        this.onRenderWeek = new EventEmitter();
        this._viewDate = new Date();
        this.daySwipeEventArr = [];
        this.calEventArr = [];
        this._viewType = 'month';
        this.yearVal = this.viewDate.getFullYear();
        this.monthEventItemMax = 3;
        this.today = new Date();
        this.format = format;
        this.dayViewHeader = [];
        // constant for swipe action: left or right
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight', UP: 'swipeup', DOWN: 'swipedown' };
        // more info setting
        //避免父層其他 position relative 引響 info
        this.outsideSpace = {
            top: 0,
            left: 0
        };
        // left: window.innerWidth>1023?160:0
        //info content 左右最小padding
        this.paddindData = {
            top: window.innerWidth > 1023 ? 115 : 10,
            right: 10,
            bottom: 10,
            left: window.innerWidth > 1023 ? 170 : 10
        };
    }
    /**
     * @return {?}
     */
    get viewType() {
        return this._viewType;
    }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set viewType(val) {
        this._viewType = val;
        console.log('set viewType:', val, this._viewType);
        if (val == 'week' || val == 'day' || val == 'month') {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.bindSwipeDayEvent();
                this.changeDector.markForCheck();
            }), 200);
        }
    }
    ;
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
        }
        this.yearVal = this._viewDate.getFullYear();
    } // end set viewDate
    /**
     * @return {?}
     */
    ngOnInit() {
        this.windowWidth = window.innerWidth;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.bindSwipeDayEvent();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
    }
    // action triggered when user swipes
    /**
     * @param {?=} action
     * @param {?=} currentViewType
     * @return {?}
     */
    swipe(action = this.SWIPE_ACTION.LEFT, currentViewType) {
        console.log('action', action);
        if (!currentViewType) {
            currentViewType = this.viewType;
        }
        console.log('swipe:', action, currentViewType);
        this.changeDector.markForCheck();
        // swipe right or down, previous
        if (action === this.SWIPE_ACTION.RIGHT || action === this.SWIPE_ACTION.DOWN) {
            this.prevView(currentViewType);
            this.viewDateChange.emit(new ViewDateChange({ date: this._viewDate, action: ChangeAction.SWIPE }));
        }
        // swipe left or up, next
        if (action === this.SWIPE_ACTION.LEFT || action === this.SWIPE_ACTION.UP) {
            this.nextView(currentViewType);
            this.viewDateChange.emit(new ViewDateChange({ date: this._viewDate, action: ChangeAction.SWIPE }));
        }
        this.uiCalendarSwipe.emit(this._viewDate);
    } // end swipe
    // end swipe
    // let _this = this;
    /**
     * @param {?} date
     * @param {?} type
     * @return {?}
     */
    getDayViewHeader(date, type) {
        // if (type == 'day') {
        /** @type {?} */
        var weekHeader = [];
        /** @type {?} */
        var startDay = startOfWeek(date, { weekStartsOn: this.weekStartsOn });
        for (var index of Array(7).fill(1).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => i))) {
            weekHeader.push({
                date: index == 0 ? startDay : addDays(startDay, index),
                isPast: isPast(addDays(startDay, index)),
                isToday: isToday(addDays(startDay, index)),
                isFuture: isFuture(addDays(startDay, index)),
                isWeekend: isWeekend(addDays(startDay, index))
            });
        }
        return weekHeader;
        // }
        // else {
        //   return days;
        // }
    } // end getDayViewHeader
    // end getDayViewHeader
    /**
     * @param {?} day
     * @return {?}
     */
    dayClicked(day) {
        console.warn('ui dayClicked', day);
        this.changeViewDate(new Date(day.date));
        this.viewDateChange.emit(new ViewDateChange({ date: this._viewDate, action: ChangeAction.CLICK }));
    } // end dayClicked
    // end dayClicked
    /**
     * @param {?} clickedDate
     * @return {?}
     */
    monthDayClicked(clickedDate) {
        this.changeViewDate(new Date(clickedDate));
        this.viewDateChange.emit(new ViewDateChange({ date: this._viewDate, action: ChangeAction.CLICK }));
        this.uiCalendarMobileMonthDayClicked.emit();
    } // end monthDayClicked
    // end monthDayClicked
    /**
     * @param {?} eventItem
     * @return {?}
     */
    clickEventItem(eventItem) {
        console.debug('calendar.component clickEventItem');
        this.uiCalendarClickEventItem.emit(eventItem);
    } // end clickEventItem
    // end clickEventItem
    /**
     * @param {?} date
     * @return {?}
     */
    yearMonthClicked(date) {
        this.changeViewDate(new Date(date));
        this.viewDateChange.emit(new ViewDateChange({ date: this._viewDate, action: ChangeAction.CLICK }));
        this.uiCalendarYearMonthClicked.emit();
    } // end yearMonthClicked
    // end yearMonthClicked
    /**
     * @param {?} colorCode
     * @return {?}
     */
    convertOpacityToHex(colorCode) {
        /** @type {?} */
        var opacity = 0.5;
        /** @type {?} */
        var hexStr = '' + colorCode;
        /**
         * @param {?} RGB_background
         * @param {?} RGBA_color
         * @return {?}
         */
        function _rgba2rgb(RGB_background, RGBA_color) {
            /** @type {?} */
            var alpha = RGBA_color.a;
            return {
                r: Math.floor((1 - alpha) * RGB_background.r + alpha * RGBA_color.r),
                g: Math.floor((1 - alpha) * RGB_background.g + alpha * RGBA_color.g),
                b: Math.floor((1 - alpha) * RGB_background.b + alpha * RGBA_color.b)
            };
        } // end _rgba2rgb function
        if (hexStr.indexOf('#') === -1 || hexStr.length !== 7) {
            alert('色碼格式錯誤！範例：#ffffff');
            return '';
        }
        /** @type {?} */
        var color_r = parseInt(hexStr.substr(1, 2), 16);
        /** @type {?} */
        var color_g = parseInt(hexStr.substr(3, 2), 16);
        /** @type {?} */
        var color_b = parseInt(hexStr.substr(5, 2), 16);
        /** @type {?} */
        var newColor = _rgba2rgb({
            r: 255,
            g: 255,
            b: 255,
            a: 1
        }, {
            r: color_r,
            g: color_g,
            b: color_b,
            a: opacity
        });
        return '#' + newColor.r.toString(16) + '' + newColor.g.toString(16) + '' + newColor.b.toString(16);
    } // end convertOpacityToHex
    // end convertOpacityToHex
    /**
     * @param {?=} currentViewType
     * @return {?}
     */
    prevView(currentViewType) {
        /** @type {?} */
        let today_year = this.today.getFullYear();
        /** @type {?} */
        let today_month = this.today.getMonth();
        switch (currentViewType) {
            case 'year':
                /** @type {?} */
                let new_year = this.viewDate.getFullYear() - 1;
                this.changeViewDate((today_year !== new_year
                    ? new Date(this.viewDate.setFullYear(new_year, 0, 1))
                    : new Date(this.today)));
                this.yearVal = this.viewDate.getFullYear();
                break;
            case 'month':
                /** @type {?} */
                let view_year = this.viewDate.getFullYear();
                /** @type {?} */
                let new_month = this.viewDate.getMonth() - 1;
                this.changeViewDate((today_month !== new_month || today_year !== view_year
                    ? new Date(this.viewDate.setMonth(new_month, 1))
                    : new Date(this.today)));
                break;
            case 'week':
                this.changeViewDate(subDays(this.viewDate, 7));
                break;
            case 'day':
                this.changeViewDate(subDays(this.viewDate, 1));
                break;
        } // end switch: viewType
    } // end prevView
    // end prevView
    /**
     * @param {?=} currentViewType
     * @return {?}
     */
    nextView(currentViewType) {
        /** @type {?} */
        let today_year = this.today.getFullYear();
        /** @type {?} */
        let today_month = this.today.getMonth();
        switch (currentViewType) {
            case 'year':
                /** @type {?} */
                let new_year = this.viewDate.getFullYear() + 1;
                this.changeViewDate((today_year !== new_year
                    ? new Date(this.viewDate.setFullYear(new_year, 0, 1))
                    : new Date(this.today)));
                this.yearVal = this.viewDate.getFullYear();
                break;
            case 'month':
                /** @type {?} */
                let view_year = this.viewDate.getFullYear();
                /** @type {?} */
                let new_month = this.viewDate.getMonth() + 1;
                this.changeViewDate((today_month !== new_month || today_year !== view_year
                    ? new Date(this.viewDate.setMonth(new_month, 1))
                    : new Date(this.today)));
                break;
            case 'week':
                this.changeViewDate(addDays(this.viewDate, 7));
                break;
            case 'day':
                this.changeViewDate(addDays(this.viewDate, 1));
                break;
        } // end switch: viewType
    } // end nextView
    // end nextView
    // 設 info position
    /**
     * @param {?} dom
     * @return {?}
     */
    infoTabClick(dom) {
        this.nowShowBtn = dom;
        this.uiCalendarMoreInfoClicked.emit(this.nowShowBtn);
        console.warn('ui infoTabClick', this.nowShowBtn);
    } // end infoTabClick
    // end infoTabClick
    /**
     * @return {?}
     */
    closeInfo() {
        // console.warn('ui closeInfo', this.nowShowBtn, this.nowShowBtn.btnContent.nativeElement);
        if (this.nowShowBtn !== undefined) {
            this.nowShowBtn.closeInfo();
            // this.nowShowBtn = undefined;
        }
    } // end closeInfo
    // end closeInfo
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    isSameDay(start, end) {
        return isSameDay(start, end);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    changeViewDate(date) {
        this._viewDate = date;
        this.refreshHeader(date);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.bindSwipeDayEvent();
            this.changeDector.markForCheck();
        }), 200);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    refreshHeader(date) {
        this.dayViewHeader = this.getDayViewHeader(date, this.viewType);
    }
    /**
     * @return {?}
     */
    bindSwipeDayEvent() {
        console.log('bind Swipe day event.');
        for (let e of this.daySwipeEventArr) {
            e();
        }
        this.daySwipeEventArr = [];
        //week all day event block
        console.log('cal-all-day-events:', this.element.nativeElement.querySelectorAll('.cal-all-day-events').length);
        for (let ele of this.element.nativeElement.querySelectorAll('.cal-all-day-events')) {
            this.daySwipeEventArr.push(this.renderer.listen(ele, 'swipeleft', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.swipe(event.type);
            })));
            this.daySwipeEventArr.push(this.renderer.listen(ele, 'swiperight', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.swipe(event.type);
            })));
        }
        //week / day event list block
        console.log('cal-time-events length:', this.element.nativeElement.querySelectorAll('.cal-time-events').length);
        for (let ele of this.element.nativeElement.querySelectorAll('.cal-time-events')) {
            this.daySwipeEventArr.push(this.renderer.listen(ele, 'swipeleft', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.swipe(event.type);
            })));
            this.daySwipeEventArr.push(this.renderer.listen(ele, 'swiperight', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.swipe(event.type);
            })));
        }
        //month event block
        console.log('cal-month-view length:', this.element.nativeElement.querySelectorAll('.cal-month-view').length);
        for (let ele of this.element.nativeElement.querySelectorAll('.cal-month-view')) {
            this.daySwipeEventArr.push(this.renderer.listen(ele, 'swipeleft', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.swipe(event.type);
            })));
            this.daySwipeEventArr.push(this.renderer.listen(ele, 'swiperight', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.swipe(event.type);
            })));
        }
    }
    /**
     * @return {?}
     */
    renderWeek() {
        this.onRenderWeek.emit();
        console.log('in ui calendar renderWeek');
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'utils-calendar',
                template: "<ng-template *ngIf=\"windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n\n<ng-template #mobileBlock>\n  <!-- mode switch -->\n  <div [ngSwitch]=\"viewType\">\n    <div class=\"ui-calendar-month-m\" *ngSwitchCase=\"'month'\">\n      <app-ui-calendar-month [today]=\"today\" [(viewDate)]=\"viewDate\" [displayMonthFormat]=\"'MMMM'\" [weekStartsOn]=\"weekStartsOn\" [translateMap]=\"translateMap\"\n        [eventList] =\"eventList\" (calendarMonthDateClicked)=\"monthDayClicked($event)\" (swipeleft)=\"swipe($event.type)\"\n        (swiperight)=\"swipe($event.type)\" data-mc-options='{\"touchAction\": \"pan-y\"}'></app-ui-calendar-month>\n    </div>\n\n    <mwl-calendar-week-view *ngSwitchCase=\"viewType =='week' || viewType=='day' ? viewType :''\" class=\"ui-calendar-week-day-m\"\n      [viewDate]=\"viewDate\" [weekStartsOn]=\"weekStartsOn\" [events]=\"eventList\" [hourSegments]='1' [daysInWeek]=\"1\"\n      [hourSegmentHeight]='80' [eventTitleTemplate]=\"customEventTitleTemplate\" [headerTemplate]=\"headerTemplate\"\n      [allDayEventsLabelTemplate]=\"custom\" (beforeViewRender)=\"renderWeek()\" data-mc-options='{\"touchAction\": \"pan-x\"}'>\n    </mwl-calendar-week-view>\n\n    <div class=\"ui-calendar-year stop-scroll-block\" *ngSwitchCase=\"'year'\">\n      <app-ui-calendar-year [today]=\"this.today\" [(viewDate)]=\"this.viewDate\" [(viewYear)]=\"this.yearVal\"\n        [displayMonthFormat]=\"'MMMM'\" [weekStartsOn]=\"weekStartsOn\" [translateMap]=\"translateMap\"\n        (calendarYearMonthClicked)=\"yearMonthClicked($event)\"\n        (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\" data-mc-options='{\"touchAction\": \"pan-y\"}' ></app-ui-calendar-year>\n    </div>\n  </div>\n</ng-template>\n<!-- end mobileBlock -->\n\n<ng-template #pcBlock>\n  <!-- mode switch -->\n  <div [ngSwitch]=\"viewType\">\n    <mwl-calendar-month-view *ngSwitchCase=\"'month'\" class=\"ui-calendar-month\" [viewDate]=\"viewDate\" [weekStartsOn]=\"weekStartsOn\"\n      [events]=\"eventList\" [cellTemplate]=\"customMonthCellTemplate\" [headerTemplate]=\"monthHeaderTemplate\">\n    </mwl-calendar-month-view>\n\n    <mwl-calendar-week-view *ngSwitchCase=\"'week'\" class=\"ui-calendar-week\" [viewDate]=\"viewDate\" [weekStartsOn]=\"weekStartsOn\"\n      [events]=\"eventList\" [hourSegments]='1' [hourSegmentHeight]='80' [eventTitleTemplate]=\"customEventTitleTemplate\"\n      [headerTemplate]=\"headerTemplate\" [allDayEventsLabelTemplate]=\"custom\">\n    </mwl-calendar-week-view>\n\n    <mwl-calendar-week-view *ngSwitchCase=\"'day'\" class=\"ui-calendar-day\" [viewDate]=\"viewDate\" [weekStartsOn]=\"weekStartsOn\"\n      [events]=\"eventList\" [hourSegments]='1' [daysInWeek]=\"1\" [hourSegmentHeight]='80' [eventTitleTemplate]=\"customEventTitleTemplate\"\n      [headerTemplate]=\"dayHeaderTemplate\" [allDayEventsLabelTemplate]=\"custom\">\n    </mwl-calendar-week-view>\n\n    <div class=\"ui-calendar-year stop-scroll-block\" *ngSwitchCase=\"'year'\">\n      <app-ui-calendar-year [today]=\"this.today\" [(viewDate)]=\"this.viewDate\" [viewYear]=\"yearVal\" [displayMonthFormat]=\"'MMMM'\" [translateMap]=\"translateMap\"\n        [weekStartsOn]=\"weekStartsOn\" (calendarYearMonthClicked)=\"yearMonthClicked($event)\" (swipeleft)=\"swipe($event.type)\"\n        (swiperight)=\"swipe($event.type)\"></app-ui-calendar-year>\n    </div>\n  </div>\n</ng-template>\n<!-- end pcBlock -->\n\n\n<!-- Month -->\n<ng-template #monthHeaderTemplate let-days=\"days\" let-locale=\"locale\">\n  <div class=\"cal-cell-row cal-header\">\n    <div\n      class=\"cal-cell\"\n      *ngFor=\"let day of days;\"\n      [class.cal-past]=\"day.isPast\"\n      [class.cal-today]=\"day.isToday\"\n      [class.cal-future]=\"day.isFuture\"\n      [class.cal-weekend]=\"day.isWeekend\"\n      [ngClass]=\"day.cssClass\"\n    >\n      {{ translateMap.get(day.date | calendarDate:'monthViewColumnHeader':locale)\n        ? translateMap.get(day.date | calendarDate:'monthViewColumnHeader':locale)\n        : day.date | calendarDate:'monthViewColumnHeader':locale}}\n    </div>\n  </div>\n</ng-template>\n<!-- end: monthHeaderTemplate -->\n\n\n<ng-template #customMonthCellTemplate let-day=\"day\" let-locale=\"locale\" let-highlightDay=\"highlightDay\"\n  let-unhighlightDay=\"unhighlightDay\">\n\n  <ng-template *ngIf=\"day.events.length > monthEventItemMax then monthMore else monthEventCell\"></ng-template>\n\n  <ng-template #monthEventCell>\n    <div class=\"cal-cell-top event-cell\" (click)=\"dayClicked(day);\">\n      <span class=\"cal-day-number event-date\"\n      [ngClass]=\"{'event-day-active': (day.date | date: 'yyyy/MM/dd') === (this.viewDate | date: 'yyyy/MM/dd')}\">\n      {{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n      <!-- <span>{{day?.rrr}}</span> -->\n      <div class=\"events\" *ngIf=\"day.events.length > 0\">\n        <div class=\"event-wrapper\" *ngFor=\"let event of day.events.slice(0,3);\">\n\n          <ng-template *ngIf=\"day.events.length > monthEventItemMax then monthMoreItem else monthClickItem\"></ng-template>\n\n          <ng-template #monthEventItem>\n            <span class=\"cal-event\" [style.backgroundColor]=\"event.color?.primary\" [ngClass]=\"event?.cssClass\">\n            </span>\n            <small class=\"event-title\">{{event?.title}}</small><br>\n            <!-- <small class=\"event-desc\" *ngIf=\"event?.address !== ''\">{{event?.address}}</small> -->\n          </ng-template>\n          <!-- end: monthEventItem -->\n\n          <ng-template #monthMoreItem>\n            <ng-container *ngTemplateOutlet=\"monthEventItem\"></ng-container>\n          </ng-template>\n          <!-- end: monthMoreItem -->\n\n          <ng-template #monthClickItem>\n            <div (click)=\"clickEventItem(event)\">\n              <ng-container *ngTemplateOutlet=\"monthEventItem\"></ng-container>\n            </div>\n          </ng-template>\n          <!-- end: monthClickItem -->\n        </div>\n      </div>\n      <small *ngIf=\"day.events.length > monthEventItemMax\" class=\"event-more\">\n        {{day.events.length - 3}} more...\n      </small>\n    </div>\n  </ng-template>\n  <!-- end: monthEventCell -->\n\n  <ng-template #monthMore>\n    <!-- info -->\n    <!-- <app-ui-information-tab [defaultPos]=\"'right'\">\n      <ng-container informationTab=\"controlBtn\"> -->\n    <!-- \u9EDE\u64CA\u5167\u5BB9\u5143\u7D20 -->\n    <!-- <ng-container *ngTemplateOutlet=\"monthEventCell\"></ng-container>\n      </ng-container> -->\n    <!-- end: controlBtn -->\n    <!-- <ng-container informationTab=\"infoContent\">\n        <app-ui-text-type>\n          <ng-container *ngFor=\" let event of day.events\">\n            <app-ui-text-type-item [colorCode]=\"event.color.primary\" (click)=\"clickEventItem(event)\">\n              <p>{{ event.start | date: 'HH:mm' }}-{{ event.end | date: 'HH:mm' }}</p>\n              <p>{{ event.title }}</p>\n              <p>{{ event.location }}</p>\n            </app-ui-text-type-item>\n          </ng-container>\n        </app-ui-text-type>\n      </ng-container> -->\n    <!-- end: infoContent -->\n    <!-- </app-ui-information-tab> -->\n    <!-- end info -->\n\n    <app-ui-information-btn [outsideSpace]=\"outsideSpace\" [messageContent]=\"moreInfo\" (onClick)=\"infoTabClick($event)\">\n\n      <ng-container *ngTemplateOutlet=\"monthEventCell\"></ng-container>\n    </app-ui-information-btn>\n\n    <!--info content-->\n    <app-ui-information-content #moreInfo class=\"ui-calendar-more\" (btnOnClick)=\"closeInfo()\" [defaultPos]=\"'right'\"\n      [paddindData]=\"paddindData\">\n      <ng-container *ngTemplateOutlet=\"eventItemList\"></ng-container>\n    </app-ui-information-content>\n    <!-- end: info -->\n  </ng-template>\n  <!-- end: monthMore -->\n\n  <ng-template #eventItemList>\n    <!--<app-ui-text-type>-->\n      <!--<ng-container *ngFor=\" let event of day.events\">-->\n        <!--<app-ui-text-type-item [colorCode]=\"event.color.primary\" (click)=\"clickEventItem(event)\">-->\n          <!--<p *ngIf=\"event.allDay && !isSameDay(event.start,event.end)\"> Cross days </p>-->\n          <!--<p *ngIf=\"event.allDay && isSameDay(event.start,event.end)\"> All day </p>-->\n          <!--<p *ngIf=\"!event.allDay\">{{ event.start | date: 'HH:mm' }}-{{ event.end | date: 'HH:mm' }}</p>-->\n          <!--<p>{{ event.title }}</p>-->\n          <!--<p>{{ event.location }}</p>-->\n        <!--</app-ui-text-type-item>-->\n      <!--</ng-container>-->\n    <!--</app-ui-text-type>-->\n\n    <app-ui-calendar-event-list\n      [translateMap]=\"translateMap\"\n      [eventList] = \"day.events\"\n      (clickEvent)=\"clickEventItem($event)\">\n    </app-ui-calendar-event-list>\n  </ng-template>\n  <!-- end: eventItemList -->\n</ng-template>\n<ng-template #customMonthMobileCellTemplate let-day=\"day\" let-locale=\"locale\" let-highlightDay=\"highlightDay\"\n  let-unhighlightDay=\"unhighlightDay\">\n  <div class=\"cal-cell-top event-date\" (click)=\"monthDayClicked(day.date)\" [ngClass]=\"{'event-day-active': (day.date | date: 'yyyy/MM/dd') === (this.viewDate | date: 'yyyy/MM/dd')}\">\n    <span>{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n  </div>\n  <small *ngIf=\"day.events.length > 0\" class=\"event-exist\"></small>\n</ng-template>\n\n<!-- Week and Day -->\n<ng-template #custom>\n  <div class=\"cal-week-allday-label\">{{translateMap.get('All_Day')? translateMap.get('All_Day') : 'All day'}}</div>\n</ng-template>\n\n<ng-template #headerTemplate let-days=\"days\" let-locale=\"locale\" let-eventDropped=\"eventDropped\">\n  <div class=\"cal-day-headers cursor-default\" (swipeleft)=\"swipe($event.type, 'week')\" (swiperight)=\"swipe($event.type, 'week')\">\n    <div class=\"cal-header\" *ngFor=\"let day of dayViewHeader\" [class.cal-past]=\"day.isPast\" [class.cal-future]=\"day.isFuture\"\n      [class.cal-drag-over]=\"day.dragOver\" (mwlClick)=\"uiCalendarMobileWeekDayClicked.emit(day.date)\" mwlDroppable\n      (dragEnter)=\"day.dragOver = true\" (dragLeave)=\"day.dragOver = false\" (drop)=\"day.dragOver = false; eventDropped.emit({event: $event.dropData.event, newStart: day.date, fromHeader: true})\">\n      <div class=\"top\" [class.today]=\"day.isToday\" (click)=\"dayClicked(day)\">\n        <div class=\"day-label text-uppercase\">\n          {{ translateMap.get(day.date | calendarDate:'weekViewColumnHeader':locale)\n            ? translateMap.get(day.date | calendarDate:'weekViewColumnHeader':locale)\n            : day.date | calendarDate:'weekViewColumnHeader':locale}}\n        </div>\n        <div class=\"day-number\" [ngClass]=\"{'event-day-active': (day.date | date: 'yyyy/MM/dd') === (this.viewDate | date: 'yyyy/MM/dd')}\">\n          {{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #dayHeaderTemplate let-days=\"days\" let-locale=\"locale\" let-eventDropped=\"eventDropped\">\n  <div class=\"cal-day-headers cursor-default\"\n  (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">\n    <div class=\"cal-header\" *ngFor=\"let day of days\" [class.cal-past]=\"day.isPast\" [class.cal-future]=\"day.isFuture\"\n      [class.cal-drag-over]=\"day.dragOver\" (mwlClick)=\"uiCalendarMobileWeekDayClicked.emit(day.date)\" mwlDroppable\n      (dragEnter)=\"day.dragOver = true\" (dragLeave)=\"day.dragOver = false\" (drop)=\"day.dragOver = false; eventDropped.emit({event: $event.dropData.event, newStart: day.date, fromHeader: true})\">\n      <div class=\"top\" [class.today]=\"day.isToday\" (click)=\"dayClicked(day)\">\n        <div class=\"day-label text-uppercase\">\n          {{ translateMap.get(day.date | calendarDate:'weekViewColumnHeader':locale)\n            ? translateMap.get(day.date | calendarDate:'weekViewColumnHeader':locale)\n            : day.date | calendarDate:'weekViewColumnHeader':locale}}\n        </div>\n        <div class=\"day-number\" [ngClass]=\"{'event-day-active': (day.date | date: 'yyyy/MM/dd') === (this.viewDate | date: 'yyyy/MM/dd')}\">\n          {{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n<!-- end: dayHeaderTemplate -->\n\n<ng-template #customEventTitleTemplate let-event=\"event\" let-view=\"view\">\n  <div class=\"event-item\" [style.backgroundColor]=\"event.color?.secondary\" (click)=\"clickEventItem(event)\">\n    <span class=\"event-dot\" [style.backgroundColor]=\"event.color?.primary\"></span>\n    <div class=\"cal-event-title\" [style.color]=\"'black'\">\n      <!-- {{format(event.start,'HH:mm')}} - {{format(event.end,'HH:mm')}} -->\n      <p class=\"cal-title-txt\">{{event.title}}</p>\n      <p class=\"cal-desc-txt\">{{event?.location}}</p>\n    </div>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: CalendarDateFormatter,
                        useClass: CustomDateFormatter
                    },
                    {
                        provide: CalendarEventTitleFormatter,
                        useClass: CustomEventTitleFormatter
                    }
                ],
                styles: ["@charset \"UTF-8\";@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host.no-scroll ::ng-deep .info-info-content{overflow:auto!important}:host.no-scroll ::ng-deep .info-info-content .info-scroll-content{overflow-y:auto!important}:host.no-scroll ::ng-deep .cal-event{overflow-y:visible!important}[class^=ui-calendar-month] ::ng-deep .cal-month-view{height:100%;overflow:hidden;overflow-y:auto}[class^=ui-calendar-month] ::ng-deep .cal-header .cal-cell{background-color:#fff;color:#767676;font-size:.75rem;font-weight:700;line-height:1.33;letter-spacing:.2px;text-align:center;border:1px solid #ececec;border-bottom:0}[class^=ui-calendar-month] ::ng-deep .cal-header .cal-cell:not(:last-child){border-right:0}[class^=ui-calendar-month] ::ng-deep .cal-days{border-color:#ececec;background-color:#fff}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-cell-row,[class^=ui-calendar-month] ::ng-deep .cal-days .cal-day-cell,[class^=ui-calendar-month] ::ng-deep .cal-days .cal-day-cell:not(:last-child){border-color:#ececec}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-cell-row:hover{background-color:transparent}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-day-cell{width:14.28571%;min-height:120px}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-day-cell:hover{background-color:transparent}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-day-cell .event-date.event-day-active{background-color:#414141;color:#fff;-webkit-animation:1s fadein;animation:1s fadein}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-day-cell.cal-today .event-date.event-day-active{background-color:#003781}[class^=ui-calendar-month] ::ng-deep .cal-days .event-date{display:block;width:1.67em;height:1.67em;margin:5px 5px 0;float:none;color:#414141;font-size:.75rem;font-weight:600;line-height:1.67em;letter-spacing:.2px;text-align:center;opacity:1;border-radius:50%}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-weekend .event-date{color:#414141}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-today{background-color:transparent}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-today .event-date{color:#003781}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-out-month{background-color:#ececec}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-out-month.cal-day-cell:hover{background-color:#ececec}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-out-month .event-date{color:#767676;opacity:.5}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-out-month .events{opacity:.3}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-out-month .events .event-wrapper>*{opacity:1}[class^=ui-calendar-month] ::ng-deep .cal-days .cal-out-month .event-more{opacity:.3}[class^=ui-calendar-month] ::ng-deep .cal-days .event-cell{padding-bottom:10px}[class^=ui-calendar-month] ::ng-deep .cal-days ::ng-deep .info-content .info-info-content{padding-top:40px}[class^=ui-calendar-month] ::ng-deep .cal-days ::ng-deep .info-info-content{max-width:305px;padding:10px 15px;border-radius:5px}[class^=ui-calendar-month] ::ng-deep .cal-days .events{padding:0 10px}[class^=ui-calendar-month] ::ng-deep .cal-days .events .event-wrapper{font-size:.75rem}[class^=ui-calendar-month] ::ng-deep .cal-days .events .event-wrapper:not(:last-child){margin-bottom:10px}[class^=ui-calendar-month] ::ng-deep .cal-days .events .event-wrapper .cal-event{width:5px;height:5px;margin:calc((1.25em - 5px)/ 2) 5px;vertical-align:top;border-radius:50%}[class^=ui-calendar-month] ::ng-deep .cal-days .events .event-wrapper .event-desc,[class^=ui-calendar-month] ::ng-deep .cal-days .events .event-wrapper .event-title{font-size:1em;line-height:1.25em;letter-spacing:.2px;color:#414141;display:inline-block;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}[class^=ui-calendar-month] ::ng-deep .cal-days .events .event-wrapper .event-title{width:calc(100% - 15px)}[class^=ui-calendar-month] ::ng-deep .cal-days .event-more{display:inline-block;padding:5px 10px 0 15px;font-size:.75rem;line-height:1.25em;letter-spacing:.2px;color:#767676}[class^=ui-calendar-month] app-ui-text-type-item ::ng-deep .ui-text-type-content{flex:1;min-width:1px}[class^=ui-calendar-month] app-ui-text-type-item ::ng-deep .ui-text-type-content p{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui-calendar-month-m ::ng-deep .cal-header .cal-cell{border:0;border-bottom:1px solid #ececec;padding-top:0}.ui-calendar-month-m ::ng-deep .cal-days{border:0;padding:0 5px}.ui-calendar-month-m ::ng-deep .cal-days .cal-cell-row,.ui-calendar-month-m ::ng-deep .cal-days .cal-day-cell,.ui-calendar-month-m ::ng-deep .cal-days .cal-day-cell:not(:last-child){border:0}.ui-calendar-month-m ::ng-deep .cal-days .cal-day-cell{min-height:0;align-self:flex-start}.ui-calendar-month-m ::ng-deep .cal-days .cal-day-cell:first-child{padding-left:0}.ui-calendar-month-m ::ng-deep .cal-days .cal-day-cell:last-child{padding-right:0}.ui-calendar-month-m ::ng-deep .cal-days .event-date{height:1.67em;min-height:0;margin-top:35px;margin-left:auto;margin-right:auto;font-size:1.33em;font-weight:300;line-height:1.67em;letter-spacing:normal;border:0}.ui-calendar-month-m ::ng-deep .cal-days .cal-out-month{opacity:0}.ui-calendar-month-m ::ng-deep .cal-days .cal-today .event-date{font-weight:700}.ui-calendar-month-m ::ng-deep .cal-days .event-exist{width:5px;height:5px;margin:0 auto;background-color:#d9d4d4;border-radius:50%}[class^=ui-calendar-day] ::ng-deep .cal-day-headers,[class^=ui-calendar-week] ::ng-deep .cal-day-headers{border:0;padding-left:60px}[class^=ui-calendar-day] ::ng-deep .cal-header,[class^=ui-calendar-week] ::ng-deep .cal-header{padding:0;text-align:center;border:0}[class^=ui-calendar-day] ::ng-deep .cal-header:first-child,[class^=ui-calendar-day] ::ng-deep .cal-header:not(:last-child),[class^=ui-calendar-week] ::ng-deep .cal-header:first-child,[class^=ui-calendar-week] ::ng-deep .cal-header:not(:last-child){border:0}[class^=ui-calendar-day] ::ng-deep .cal-header:hover,[class^=ui-calendar-week] ::ng-deep .cal-header:hover{background-color:transparent}[class^=ui-calendar-day] ::ng-deep .cal-header .day-label,[class^=ui-calendar-day] ::ng-deep .cal-header .day-number,[class^=ui-calendar-week] ::ng-deep .cal-header .day-label,[class^=ui-calendar-week] ::ng-deep .cal-header .day-number{font-size:.75rem;font-weight:700;line-height:normal;letter-spacing:.2px;color:#767676}[class^=ui-calendar-day] ::ng-deep .cal-header .day-label,[class^=ui-calendar-week] ::ng-deep .cal-header .day-label{padding:5px 0;border-bottom:1px solid #ececec}[class^=ui-calendar-day] ::ng-deep .cal-header .day-number,[class^=ui-calendar-week] ::ng-deep .cal-header .day-number{width:2em;line-height:2em;margin:5px auto;border-radius:50%}[class^=ui-calendar-day] ::ng-deep .cal-header .day-number.event-day-active,[class^=ui-calendar-week] ::ng-deep .cal-header .day-number.event-day-active{background-color:#414141;color:#fff;-webkit-animation:1s fadein;animation:1s fadein}[class^=ui-calendar-day] ::ng-deep .cal-header br,[class^=ui-calendar-week] ::ng-deep .cal-header br{display:none}[class^=ui-calendar-day] ::ng-deep .cal-header>b,[class^=ui-calendar-day] ::ng-deep .cal-header>span,[class^=ui-calendar-week] ::ng-deep .cal-header>b,[class^=ui-calendar-week] ::ng-deep .cal-header>span{font-size:.75rem;font-weight:700;line-height:2em;letter-spacing:.2px;color:#767676;opacity:1;vertical-align:top}[class^=ui-calendar-day] ::ng-deep .cal-header>span,[class^=ui-calendar-week] ::ng-deep .cal-header>span{display:inline-block;width:2em;line-height:2em;border-radius:50%}[class^=ui-calendar-day] ::ng-deep .cal-header>span:not(:first-child),[class^=ui-calendar-week] ::ng-deep .cal-header>span:not(:first-child){margin-left:10px}[class^=ui-calendar-day] ::ng-deep .cal-header>span:hover,[class^=ui-calendar-week] ::ng-deep .cal-header>span:hover{background-color:#414141;color:#fff}[class^=ui-calendar-day] ::ng-deep .cal-header .today .day-number,[class^=ui-calendar-day] ::ng-deep .cal-header .today>span,[class^=ui-calendar-day] ::ng-deep .cal-header.cal-today .day-number,[class^=ui-calendar-day] ::ng-deep .cal-header.cal-today>span,[class^=ui-calendar-week] ::ng-deep .cal-header .today .day-number,[class^=ui-calendar-week] ::ng-deep .cal-header .today>span,[class^=ui-calendar-week] ::ng-deep .cal-header.cal-today .day-number,[class^=ui-calendar-week] ::ng-deep .cal-header.cal-today>span{color:#003781}[class^=ui-calendar-day] ::ng-deep .cal-header .today .day-number.event-day-active,[class^=ui-calendar-day] ::ng-deep .cal-header .today>span.event-day-active,[class^=ui-calendar-day] ::ng-deep .cal-header.cal-today .day-number.event-day-active,[class^=ui-calendar-day] ::ng-deep .cal-header.cal-today>span.event-day-active,[class^=ui-calendar-week] ::ng-deep .cal-header .today .day-number.event-day-active,[class^=ui-calendar-week] ::ng-deep .cal-header .today>span.event-day-active,[class^=ui-calendar-week] ::ng-deep .cal-header.cal-today .day-number.event-day-active,[class^=ui-calendar-week] ::ng-deep .cal-header.cal-today>span.event-day-active{background-color:#003781;color:#fff}[class^=ui-calendar-day] ::ng-deep .cal-header.cal-today,[class^=ui-calendar-week] ::ng-deep .cal-header.cal-today{background-color:transparent}[class^=ui-calendar-day] ::ng-deep .cal-all-day-events,[class^=ui-calendar-week] ::ng-deep .cal-all-day-events{padding:0;border:0;border-top:1px solid #ececec}[class^=ui-calendar-day] ::ng-deep .cal-all-day-events .cal-time-label-column,[class^=ui-calendar-week] ::ng-deep .cal-all-day-events .cal-time-label-column{display:none}[class^=ui-calendar-day] ::ng-deep .cal-all-day-events .cal-week-allday-label,[class^=ui-calendar-week] ::ng-deep .cal-all-day-events .cal-week-allday-label{width:60px;padding-top:5px;font-size:.75rem;line-height:normal;letter-spacing:.2px;color:#767676;text-align:center}[class^=ui-calendar-day] ::ng-deep .cal-all-day-events .cal-day-column,[class^=ui-calendar-week] ::ng-deep .cal-all-day-events .cal-day-column{border-color:#ececec}[class^=ui-calendar-day] ::ng-deep .cal-all-day-events .cal-events-row,[class^=ui-calendar-week] ::ng-deep .cal-all-day-events .cal-events-row{height:22.5px;margin-left:60px;padding-top:1.25px}[class^=ui-calendar-day] ::ng-deep .cal-all-day-events .cal-event,[class^=ui-calendar-week] ::ng-deep .cal-all-day-events .cal-event{height:20px}[class^=ui-calendar-day] ::ng-deep .cal-time-events,[class^=ui-calendar-week] ::ng-deep .cal-time-events{border:0;border-top:1px solid #ececec;overflow:hidden;overflow-y:auto;align-items:stretch}@supports (top:constant(safe-area-inset-top)){[class^=ui-calendar-day] ::ng-deep .cal-time-events,[class^=ui-calendar-week] ::ng-deep .cal-time-events{padding-bottom:calc(constant(safe-area-inset-top) + constant(safe-area-inset-bottom) - 33px)}}@supports (top:env(safe-area-inset-top)){[class^=ui-calendar-day] ::ng-deep .cal-time-events,[class^=ui-calendar-week] ::ng-deep .cal-time-events{padding-bottom:calc(env(safe-area-inset-top) + env(safe-area-inset-bottom) - 33px)}}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-event-container:first-child .cal-event,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-event-container:first-child .cal-event{margin-right:0;width:calc(100% - 1px)}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-time-label-column,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-time-label-column{width:60px;height:auto}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-hour.cal-hour-odd,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-hour.cal-hour-odd{background-color:transparent;outline:#ececec solid 1px}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-hour .cal-hour-segment,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-hour .cal-hour-segment{border:0}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-hour .cal-hour-segment:first-child,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-hour .cal-hour-segment:first-child{padding-top:5px}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-hour .cal-hour-segment:hover,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-hour .cal-hour-segment:hover{background-color:transparent}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-hour .cal-time,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-hour .cal-time{width:100%;padding-top:0;font-size:.75rem;font-weight:400;line-height:normal;letter-spacing:.2px;color:#767676;text-align:center;height:100%;display:flex;align-items:center;justify-content:center}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-day-columns,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-day-columns{height:100%}[class^=ui-calendar-day] ::ng-deep .cal-time-events .cal-day-column,[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-day-column{border-color:#ececec}[class^=ui-calendar-day] ::ng-deep .cal-event,[class^=ui-calendar-week] ::ng-deep .cal-event{min-height:20px;padding:0;border:0;line-height:20px;border-radius:5px;background-color:transparent!important;color:#414141!important}[class^=ui-calendar-day] ::ng-deep .cal-event .event-item,[class^=ui-calendar-week] ::ng-deep .cal-event .event-item{display:flex;width:100%;height:100%;padding-left:5px}[class^=ui-calendar-day] ::ng-deep .cal-event .event-dot,[class^=ui-calendar-week] ::ng-deep .cal-event .event-dot{display:inline-block;width:5px;height:5px;min-width:5px;margin-right:5px;margin-top:7.5px;border-radius:50%}[class^=ui-calendar-day] ::ng-deep .cal-event .cal-event-title,[class^=ui-calendar-week] ::ng-deep .cal-event .cal-event-title{max-width:calc(100% - 15px);font-size:.75rem;font-weight:400;line-height:20px;letter-spacing:.2px;color:#414141!important}[class^=ui-calendar-day] ::ng-deep .cal-event .cal-event-title p,[class^=ui-calendar-week] ::ng-deep .cal-event .cal-event-title p{margin:0;max-width:100%;overflow:hidden;text-overflow:ellipsis}[class^=ui-calendar-day] ::ng-deep .cal-event .cal-event-title .cal-title-txt,[class^=ui-calendar-week] ::ng-deep .cal-event .cal-event-title .cal-title-txt{font-weight:700}@media (max-width:1023px){[class^=ui-calendar-week] ::ng-deep .cal-time-events .cal-hour .cal-time{height:100%;display:flex;align-items:center;justify-content:center}}.ui-calendar-day ::ng-deep .cal-week-view,.ui-calendar-week ::ng-deep .cal-week-view{background-color:#fff}.ui-calendar-day ::ng-deep .cal-header,.ui-calendar-week ::ng-deep .cal-header{border-right:1px solid #ececec}.ui-calendar-day ::ng-deep .cal-header:first-child,.ui-calendar-week ::ng-deep .cal-header:first-child{border-left:1px solid #ececec}.ui-calendar-day ::ng-deep .cal-header:first-child,.ui-calendar-day ::ng-deep .cal-header:not(:last-child),.ui-calendar-week ::ng-deep .cal-header:first-child,.ui-calendar-week ::ng-deep .cal-header:not(:last-child){border-right:1px solid #ececec}.ui-calendar-week ::ng-deep .cal-header .day-label{display:inline-block;border:0;vertical-align:top;line-height:2em}.ui-calendar-week ::ng-deep .cal-header .day-number{display:inline-block;margin-left:10px}.ui-calendar-day ::ng-deep .cal-header .day-label{display:inline-block;border:0;vertical-align:top;line-height:2em}.ui-calendar-day ::ng-deep .cal-header .day-number{display:inline-block;margin-left:10px}.ui-calendar-day ::ng-deep .cal-header>span{background-color:#414141;color:#fff;-webkit-animation:1s fadein;animation:1s fadein}.ui-calendar-day ::ng-deep .cal-header.cal-today>span{background-color:#003781;color:#fff}.ui-calendar-week-day-m ::ng-deep .cal-week-view{background-color:#fff}.ui-calendar-week-day-m ::ng-deep .cal-day-headers{padding:0}.ui-calendar-year ::ng-deep app-ui-calendar-year{width:100%;padding:30px 20px 0;background-color:#fff;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap;overflow-y:auto;overflow-x:hidden}@media screen and (max-width:1023px){.ui-calendar-year ::ng-deep app-ui-calendar-year{height:-webkit-max-content;height:-moz-max-content;height:max-content;padding:0 0 20px;-webkit-transform:translateX(5px);transform:translateX(5px)}[class^=ui-calendar-day] ::ng-deep .cal-week-view .cal-time-events .cal-day-columns,[class^=ui-calendar-week] ::ng-deep .cal-week-view .cal-time-events .cal-day-columns{display:inline-block}}"]
            }] }
];
CalendarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
CalendarComponent.propDecorators = {
    viewType: [{ type: Input }],
    weekStartsOn: [{ type: Input }],
    eventList: [{ type: Input }],
    translateMap: [{ type: Input }],
    viewDate: [{ type: Input }],
    viewDateChange: [{ type: Output }],
    uiCalendarClickEventItem: [{ type: Output }],
    uiCalendarMobileWeekDayClicked: [{ type: Output }],
    uiCalendarMobileMonthDayClicked: [{ type: Output }],
    uiCalendarYearMonthClicked: [{ type: Output }],
    uiCalendarSwipe: [{ type: Output }],
    uiCalendarMoreInfoClicked: [{ type: Output }],
    onRenderWeek: [{ type: Output }],
    nowShowBtn: [{ type: ViewChild, args: [UiInformationBtnComponent,] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    CalendarComponent.prototype.weekStartsOn;
    /** @type {?} */
    CalendarComponent.prototype.eventList;
    /** @type {?} */
    CalendarComponent.prototype.translateMap;
    /** @type {?} */
    CalendarComponent.prototype.viewDateChange;
    /** @type {?} */
    CalendarComponent.prototype.uiCalendarClickEventItem;
    /** @type {?} */
    CalendarComponent.prototype.uiCalendarMobileWeekDayClicked;
    /** @type {?} */
    CalendarComponent.prototype.uiCalendarMobileMonthDayClicked;
    /** @type {?} */
    CalendarComponent.prototype.uiCalendarYearMonthClicked;
    /** @type {?} */
    CalendarComponent.prototype.uiCalendarSwipe;
    /** @type {?} */
    CalendarComponent.prototype.uiCalendarMoreInfoClicked;
    /** @type {?} */
    CalendarComponent.prototype.onRenderWeek;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype._viewDate;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.daySwipeEventArr;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.calEventArr;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype._viewType;
    /** @type {?} */
    CalendarComponent.prototype.windowWidth;
    /** @type {?} */
    CalendarComponent.prototype.yearVal;
    /** @type {?} */
    CalendarComponent.prototype.monthEventItemMax;
    /** @type {?} */
    CalendarComponent.prototype.today;
    /** @type {?} */
    CalendarComponent.prototype.format;
    /** @type {?} */
    CalendarComponent.prototype.dayViewHeader;
    /** @type {?} */
    CalendarComponent.prototype.nowShowBtn;
    /** @type {?} */
    CalendarComponent.prototype.SWIPE_ACTION;
    /** @type {?} */
    CalendarComponent.prototype.outsideSpace;
    /** @type {?} */
    CalendarComponent.prototype.paddindData;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.changeDector;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.renderer;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQTRCLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyTSxPQUFPLEVBR0wsT0FBTyxFQUNQLE9BQU8sRUFFUCxTQUFTLEVBRVQsTUFBTSxFQUNOLE9BQU8sRUFDUCxRQUFRLEVBQ1IsU0FBUyxFQUNULFdBQVcsRUFLWCxNQUFNLEVBQ1AsTUFBTSxVQUFVLENBQUM7QUFDbEIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDL0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQW9CaEQsTUFBTTs7Ozs7O0lBdUVKLFlBQW9CLE9BQW1CLEVBQVUsWUFBK0IsRUFBVSxRQUFtQjtRQUF6RixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXZEcEcsaUJBQVksR0FBOEIsQ0FBQyxDQUFDO1FBQzVDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFB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O0lBV3ZFLDJDQUE4RDs7SUFHOUQscURBQXdEOztJQUN4RCwyREFBOEQ7O0lBQzlELDREQUErRDs7SUFDL0QsdURBQTBEOztJQUMxRCw0Q0FBK0M7O0lBQy9DLHNEQUF5RDs7SUFDekQseUNBQTRDOzs7OztJQUU1QyxzQ0FBcUM7Ozs7O0lBQ3JDLDZDQUE4Qjs7Ozs7SUFDOUIsd0NBQXlCOzs7OztJQUN6QixzQ0FBb0M7O0lBQ3BDLHdDQUFvQjs7SUFDcEIsb0NBQXNDOztJQUN0Qyw4Q0FBc0I7O0lBQ3RCLGtDQUFtQjs7SUFDbkIsbUNBQWdCOztJQUNoQiwwQ0FBK0I7O0lBRS9CLHVDQUE0RTs7SUFHNUUseUNBQTRGOztJQUk1Rix5Q0FHRTs7SUFHRix3Q0FLRTs7Ozs7SUFFVSxvQ0FBMkI7Ozs7O0lBQUUseUNBQXVDOzs7OztJQUFFLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBSZW5kZXJlcjIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBzdGFydE9mRGF5LFxuICBlbmRPZkRheSxcbiAgc3ViRGF5cyxcbiAgYWRkRGF5cyxcbiAgZW5kT2ZNb250aCxcbiAgaXNTYW1lRGF5LFxuICBpc1NhbWVNb250aCxcbiAgaXNQYXN0LFxuICBpc1RvZGF5LFxuICBpc0Z1dHVyZSxcbiAgaXNXZWVrZW5kLFxuICBzdGFydE9mV2VlayxcbiAgYWRkSG91cnMsXG4gIGFkZE1pbnV0ZXMsXG4gIHNldERhdGUsXG4gIHNldE1vbnRoLFxuICBmb3JtYXRcbn0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLCBDYWxlbmRhckV2ZW50VGl0bGVGb3JtYXR0ZXIgfSBmcm9tICdhbmd1bGFyLWNhbGVuZGFyJztcbmltcG9ydCB7IEN1c3RvbURhdGVGb3JtYXR0ZXIgfSBmcm9tICcuL3VpLWNhbGVuZGFyLWRhdGVmb3JtYXQnO1xuaW1wb3J0IHsgQ3VzdG9tRXZlbnRUaXRsZUZvcm1hdHRlciB9IGZyb20gJy4vdWktY2FsZW5kYXItdG9vbHRpcCc7XG5pbXBvcnQgeyBVaUluZm9ybWF0aW9uQnRuQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktaW5mb3JtYXRpb24tYnRuL3VpLWluZm9ybWF0aW9uLWJ0bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlld0RhdGVDaGFuZ2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IENoYW5nZUFjdGlvbiB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXRpbHMtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLFxuICAgICAgdXNlQ2xhc3M6IEN1c3RvbURhdGVGb3JtYXR0ZXJcbiAgICB9XG4gICAgLCB7XG4gICAgICBwcm92aWRlOiBDYWxlbmRhckV2ZW50VGl0bGVGb3JtYXR0ZXIsXG4gICAgICB1c2VDbGFzczogQ3VzdG9tRXZlbnRUaXRsZUZvcm1hdHRlclxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpXG4gIGdldCB2aWV3VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92aWV3VHlwZTtcbiAgfTtcbiAgc2V0IHZpZXdUeXBlKHZhbCkge1xuICAgIHRoaXMuX3ZpZXdUeXBlID0gdmFsO1xuICAgIGNvbnNvbGUubG9nKCdzZXQgdmlld1R5cGU6JywgdmFsLCB0aGlzLl92aWV3VHlwZSk7XG4gICAgaWYgKHZhbCA9PSAnd2VlaycgfHwgdmFsID09ICdkYXknIHx8IHZhbCA9PSAnbW9udGgnKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5iaW5kU3dpcGVEYXlFdmVudCgpO1xuICAgICAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfVxuICB9O1xuXG4gIEBJbnB1dCgpIHdlZWtTdGFydHNPbjogMCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiA9IDE7XG4gIEBJbnB1dCgpIGV2ZW50TGlzdCA9IFtdO1xuICBASW5wdXQoKSB0cmFuc2xhdGVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICBASW5wdXQoKVxuICBnZXQgdmlld0RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdEYXRlO1xuICB9XG4gIHNldCB2aWV3RGF0ZSh2YWwpIHtcbiAgICBpZiAodGhpcy5fdmlld0RhdGUuZ2V0VGltZSgpICE9IHZhbC5nZXRUaW1lKCkpIHtcbiAgICAgIHRoaXMuY2hhbmdlVmlld0RhdGUobmV3IERhdGUodmFsKSk7XG4gICAgfVxuICAgIHRoaXMueWVhclZhbCA9IHRoaXMuX3ZpZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG4gIH0gLy8gZW5kIHNldCB2aWV3RGF0ZVxuICBAT3V0cHV0KCkgdmlld0RhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFZpZXdEYXRlQ2hhbmdlPigpO1xuXG5cbiAgQE91dHB1dCgpIHVpQ2FsZW5kYXJDbGlja0V2ZW50SXRlbSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHVpQ2FsZW5kYXJNb2JpbGVXZWVrRGF5Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHVpQ2FsZW5kYXJNb2JpbGVNb250aERheUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSB1aUNhbGVuZGFyWWVhck1vbnRoQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHVpQ2FsZW5kYXJTd2lwZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHVpQ2FsZW5kYXJNb3JlSW5mb0NsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblJlbmRlcldlZWsgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfdmlld0RhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBwcml2YXRlIGRheVN3aXBlRXZlbnRBcnIgPSBbXTtcbiAgcHJpdmF0ZSBjYWxFdmVudEFyciA9IFtdO1xuICBwcml2YXRlIF92aWV3VHlwZTogc3RyaW5nID0gJ21vbnRoJztcbiAgd2luZG93V2lkdGg6IG51bWJlcjtcbiAgeWVhclZhbCA9IHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgbW9udGhFdmVudEl0ZW1NYXggPSAzO1xuICB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGZvcm1hdCA9IGZvcm1hdDtcbiAgZGF5Vmlld0hlYWRlcjogQXJyYXk8YW55PiA9IFtdO1xuXG4gIEBWaWV3Q2hpbGQoVWlJbmZvcm1hdGlvbkJ0bkNvbXBvbmVudCkgbm93U2hvd0J0bjogVWlJbmZvcm1hdGlvbkJ0bkNvbXBvbmVudDtcblxuICAvLyBjb25zdGFudCBmb3Igc3dpcGUgYWN0aW9uOiBsZWZ0IG9yIHJpZ2h0XG4gIFNXSVBFX0FDVElPTiA9IHsgTEVGVDogJ3N3aXBlbGVmdCcsIFJJR0hUOiAnc3dpcGVyaWdodCcsIFVQOiAnc3dpcGV1cCcsIERPV046ICdzd2lwZWRvd24nIH07XG5cbiAgLy8gbW9yZSBpbmZvIHNldHRpbmdcbiAgLy/pgb/lhY3niLblsaTlhbbku5YgcG9zaXRpb24gcmVsYXRpdmUg5byV6Z+/IGluZm9cbiAgb3V0c2lkZVNwYWNlID0ge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG4gIC8vIGxlZnQ6IHdpbmRvdy5pbm5lcldpZHRoPjEwMjM/MTYwOjBcbiAgLy9pbmZvIGNvbnRlbnQg5bem5Y+z5pyA5bCPcGFkZGluZ1xuICBwYWRkaW5kRGF0YSA9IHtcbiAgICB0b3A6IHdpbmRvdy5pbm5lcldpZHRoID4gMTAyMyA/IDExNSA6IDEwLFxuICAgIHJpZ2h0OiAxMCxcbiAgICBib3R0b206IDEwLFxuICAgIGxlZnQ6IHdpbmRvdy5pbm5lcldpZHRoID4gMTAyMyA/IDE3MCA6IDEwXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNoYW5nZURlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYmluZFN3aXBlRGF5RXZlbnQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aDtcbiAgfVxuXG4gIC8vIGFjdGlvbiB0cmlnZ2VyZWQgd2hlbiB1c2VyIHN3aXBlc1xuICBzd2lwZShhY3Rpb24gPSB0aGlzLlNXSVBFX0FDVElPTi5MRUZULCBjdXJyZW50Vmlld1R5cGU/OiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZygnYWN0aW9uJywgYWN0aW9uKTtcbiAgICBpZiAoIWN1cnJlbnRWaWV3VHlwZSkge1xuICAgICAgY3VycmVudFZpZXdUeXBlID0gdGhpcy52aWV3VHlwZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3N3aXBlOicsIGFjdGlvbiwgY3VycmVudFZpZXdUeXBlKTtcbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcblxuICAgIC8vIHN3aXBlIHJpZ2h0IG9yIGRvd24sIHByZXZpb3VzXG4gICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQgfHwgYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5ET1dOKSB7XG4gICAgICB0aGlzLnByZXZWaWV3KGN1cnJlbnRWaWV3VHlwZSk7XG4gICAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQobmV3IFZpZXdEYXRlQ2hhbmdlKHsgZGF0ZTogdGhpcy5fdmlld0RhdGUsIGFjdGlvbjogQ2hhbmdlQWN0aW9uLlNXSVBFIH0pKTtcbiAgICB9XG5cbiAgICAvLyBzd2lwZSBsZWZ0IG9yIHVwLCBuZXh0XG4gICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uTEVGVCB8fCBhY3Rpb24gPT09IHRoaXMuU1dJUEVfQUNUSU9OLlVQKSB7XG4gICAgICB0aGlzLm5leHRWaWV3KGN1cnJlbnRWaWV3VHlwZSk7XG4gICAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQobmV3IFZpZXdEYXRlQ2hhbmdlKHsgZGF0ZTogdGhpcy5fdmlld0RhdGUsIGFjdGlvbjogQ2hhbmdlQWN0aW9uLlNXSVBFIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLnVpQ2FsZW5kYXJTd2lwZS5lbWl0KHRoaXMuX3ZpZXdEYXRlKTtcbiAgfSAvLyBlbmQgc3dpcGVcblxuICAvLyBsZXQgX3RoaXMgPSB0aGlzO1xuICBnZXREYXlWaWV3SGVhZGVyKGRhdGUsIHR5cGUpIHtcbiAgICAvLyBpZiAodHlwZSA9PSAnZGF5Jykge1xuICAgIHZhciB3ZWVrSGVhZGVyID0gW107XG4gICAgdmFyIHN0YXJ0RGF5ID0gc3RhcnRPZldlZWsoZGF0ZSwgeyB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0c09uIH0pO1xuICAgIGZvciAodmFyIGluZGV4IG9mIEFycmF5KDcpLmZpbGwoMSkubWFwKChfLCBpKSA9PiBpKSkge1xuICAgICAgd2Vla0hlYWRlci5wdXNoKHtcbiAgICAgICAgZGF0ZTogaW5kZXggPT0gMCA/IHN0YXJ0RGF5IDogYWRkRGF5cyhzdGFydERheSwgaW5kZXgpLFxuICAgICAgICBpc1Bhc3Q6IGlzUGFzdChhZGREYXlzKHN0YXJ0RGF5LCBpbmRleCkpLFxuICAgICAgICBpc1RvZGF5OiBpc1RvZGF5KGFkZERheXMoc3RhcnREYXksIGluZGV4KSksXG4gICAgICAgIGlzRnV0dXJlOiBpc0Z1dHVyZShhZGREYXlzKHN0YXJ0RGF5LCBpbmRleCkpLFxuICAgICAgICBpc1dlZWtlbmQ6IGlzV2Vla2VuZChhZGREYXlzKHN0YXJ0RGF5LCBpbmRleCkpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2Vla0hlYWRlcjtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICByZXR1cm4gZGF5cztcbiAgICAvLyB9XG4gIH0gLy8gZW5kIGdldERheVZpZXdIZWFkZXJcblxuICBkYXlDbGlja2VkKGRheSkge1xuICAgIGNvbnNvbGUud2FybigndWkgZGF5Q2xpY2tlZCcsIGRheSk7XG4gICAgdGhpcy5jaGFuZ2VWaWV3RGF0ZShuZXcgRGF0ZShkYXkuZGF0ZSkpO1xuICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdChuZXcgVmlld0RhdGVDaGFuZ2UoeyBkYXRlOiB0aGlzLl92aWV3RGF0ZSwgYWN0aW9uOiBDaGFuZ2VBY3Rpb24uQ0xJQ0sgfSkpO1xuICB9IC8vIGVuZCBkYXlDbGlja2VkXG5cbiAgbW9udGhEYXlDbGlja2VkKGNsaWNrZWREYXRlKSB7XG4gICAgdGhpcy5jaGFuZ2VWaWV3RGF0ZShuZXcgRGF0ZShjbGlja2VkRGF0ZSkpO1xuICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdChuZXcgVmlld0RhdGVDaGFuZ2UoeyBkYXRlOiB0aGlzLl92aWV3RGF0ZSwgYWN0aW9uOiBDaGFuZ2VBY3Rpb24uQ0xJQ0sgfSkpO1xuICAgIHRoaXMudWlDYWxlbmRhck1vYmlsZU1vbnRoRGF5Q2xpY2tlZC5lbWl0KCk7XG4gIH0gLy8gZW5kIG1vbnRoRGF5Q2xpY2tlZFxuXG4gIGNsaWNrRXZlbnRJdGVtKGV2ZW50SXRlbSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2NhbGVuZGFyLmNvbXBvbmVudCBjbGlja0V2ZW50SXRlbScpO1xuICAgIHRoaXMudWlDYWxlbmRhckNsaWNrRXZlbnRJdGVtLmVtaXQoZXZlbnRJdGVtKTtcbiAgfSAvLyBlbmQgY2xpY2tFdmVudEl0ZW1cblxuICB5ZWFyTW9udGhDbGlja2VkKGRhdGUpIHtcbiAgICB0aGlzLmNoYW5nZVZpZXdEYXRlKG5ldyBEYXRlKGRhdGUpKTtcbiAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQobmV3IFZpZXdEYXRlQ2hhbmdlKHsgZGF0ZTogdGhpcy5fdmlld0RhdGUsIGFjdGlvbjogQ2hhbmdlQWN0aW9uLkNMSUNLIH0pKTtcbiAgICB0aGlzLnVpQ2FsZW5kYXJZZWFyTW9udGhDbGlja2VkLmVtaXQoKTtcbiAgfSAvLyBlbmQgeWVhck1vbnRoQ2xpY2tlZFxuXG4gIGNvbnZlcnRPcGFjaXR5VG9IZXgoY29sb3JDb2RlKSB7XG4gICAgdmFyIG9wYWNpdHkgPSAwLjUsXG4gICAgICBoZXhTdHIgPSAnJyArIGNvbG9yQ29kZTtcblxuICAgIGZ1bmN0aW9uIF9yZ2JhMnJnYihSR0JfYmFja2dyb3VuZCwgUkdCQV9jb2xvcikge1xuICAgICAgdmFyIGFscGhhID0gUkdCQV9jb2xvci5hO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiBNYXRoLmZsb29yKCgxIC0gYWxwaGEpICogUkdCX2JhY2tncm91bmQuciArIGFscGhhICogUkdCQV9jb2xvci5yKSxcbiAgICAgICAgZzogTWF0aC5mbG9vcigoMSAtIGFscGhhKSAqIFJHQl9iYWNrZ3JvdW5kLmcgKyBhbHBoYSAqIFJHQkFfY29sb3IuZyksXG4gICAgICAgIGI6IE1hdGguZmxvb3IoKDEgLSBhbHBoYSkgKiBSR0JfYmFja2dyb3VuZC5iICsgYWxwaGEgKiBSR0JBX2NvbG9yLmIpXG4gICAgICB9O1xuICAgIH0gLy8gZW5kIF9yZ2JhMnJnYiBmdW5jdGlvblxuXG4gICAgaWYgKGhleFN0ci5pbmRleE9mKCcjJykgPT09IC0xIHx8IGhleFN0ci5sZW5ndGggIT09IDcpIHtcbiAgICAgIGFsZXJ0KCfoibLnorzmoLzlvI/pjK/oqqTvvIHnr4TkvovvvJojZmZmZmZmJyk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGNvbG9yX3IgPSBwYXJzZUludChoZXhTdHIuc3Vic3RyKDEsIDIpLCAxNiksXG4gICAgICBjb2xvcl9nID0gcGFyc2VJbnQoaGV4U3RyLnN1YnN0cigzLCAyKSwgMTYpLFxuICAgICAgY29sb3JfYiA9IHBhcnNlSW50KGhleFN0ci5zdWJzdHIoNSwgMiksIDE2KTtcblxuICAgIHZhciBuZXdDb2xvciA9IF9yZ2JhMnJnYih7XG4gICAgICByOiAyNTUsXG4gICAgICBnOiAyNTUsXG4gICAgICBiOiAyNTUsXG4gICAgICBhOiAxXG4gICAgfSwge1xuICAgICAgcjogY29sb3JfcixcbiAgICAgIGc6IGNvbG9yX2csXG4gICAgICBiOiBjb2xvcl9iLFxuICAgICAgYTogb3BhY2l0eVxuICAgIH0pO1xuICAgIHJldHVybiAnIycgKyBuZXdDb2xvci5yLnRvU3RyaW5nKDE2KSArICcnICsgbmV3Q29sb3IuZy50b1N0cmluZygxNikgKyAnJyArIG5ld0NvbG9yLmIudG9TdHJpbmcoMTYpO1xuICB9IC8vIGVuZCBjb252ZXJ0T3BhY2l0eVRvSGV4XG5cbiAgcHJldlZpZXcoY3VycmVudFZpZXdUeXBlPzogc3RyaW5nKSB7XG4gICAgbGV0IHRvZGF5X3llYXIgPSB0aGlzLnRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IHRvZGF5X21vbnRoID0gdGhpcy50b2RheS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAoY3VycmVudFZpZXdUeXBlKSB7XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgbGV0IG5ld195ZWFyID0gdGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpIC0gMTtcbiAgICAgICAgdGhpcy5jaGFuZ2VWaWV3RGF0ZSgodG9kYXlfeWVhciAhPT0gbmV3X3llYXJcbiAgICAgICAgICA/IG5ldyBEYXRlKHRoaXMudmlld0RhdGUuc2V0RnVsbFllYXIobmV3X3llYXIsIDAsIDEpKVxuICAgICAgICAgIDogbmV3IERhdGUodGhpcy50b2RheSkpKTtcbiAgICAgICAgdGhpcy55ZWFyVmFsID0gdGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgbGV0IHZpZXdfeWVhciA9IHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgbGV0IG5ld19tb250aCA9IHRoaXMudmlld0RhdGUuZ2V0TW9udGgoKSAtIDE7XG4gICAgICAgIHRoaXMuY2hhbmdlVmlld0RhdGUoKHRvZGF5X21vbnRoICE9PSBuZXdfbW9udGggfHwgdG9kYXlfeWVhciAhPT0gdmlld195ZWFyXG4gICAgICAgICAgPyBuZXcgRGF0ZSh0aGlzLnZpZXdEYXRlLnNldE1vbnRoKG5ld19tb250aCwgMSkpXG4gICAgICAgICAgOiBuZXcgRGF0ZSh0aGlzLnRvZGF5KSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICB0aGlzLmNoYW5nZVZpZXdEYXRlKHN1YkRheXModGhpcy52aWV3RGF0ZSwgNykpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgIHRoaXMuY2hhbmdlVmlld0RhdGUoc3ViRGF5cyh0aGlzLnZpZXdEYXRlLCAxKSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH0gLy8gZW5kIHN3aXRjaDogdmlld1R5cGVcbiAgfSAvLyBlbmQgcHJldlZpZXdcblxuICBuZXh0VmlldyhjdXJyZW50Vmlld1R5cGU/OiBzdHJpbmcpIHtcbiAgICBsZXQgdG9kYXlfeWVhciA9IHRoaXMudG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgdG9kYXlfbW9udGggPSB0aGlzLnRvZGF5LmdldE1vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKGN1cnJlbnRWaWV3VHlwZSkge1xuICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIGxldCBuZXdfeWVhciA9IHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKSArIDE7XG5cblxuICAgICAgICB0aGlzLmNoYW5nZVZpZXdEYXRlKCh0b2RheV95ZWFyICE9PSBuZXdfeWVhclxuICAgICAgICAgID8gbmV3IERhdGUodGhpcy52aWV3RGF0ZS5zZXRGdWxsWWVhcihuZXdfeWVhciwgMCwgMSkpXG4gICAgICAgICAgOiBuZXcgRGF0ZSh0aGlzLnRvZGF5KSkpO1xuICAgICAgICB0aGlzLnllYXJWYWwgPSB0aGlzLnZpZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICBsZXQgdmlld195ZWFyID0gdGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBsZXQgbmV3X21vbnRoID0gdGhpcy52aWV3RGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgdGhpcy5jaGFuZ2VWaWV3RGF0ZSgodG9kYXlfbW9udGggIT09IG5ld19tb250aCB8fCB0b2RheV95ZWFyICE9PSB2aWV3X3llYXJcbiAgICAgICAgICA/IG5ldyBEYXRlKHRoaXMudmlld0RhdGUuc2V0TW9udGgobmV3X21vbnRoLCAxKSlcbiAgICAgICAgICA6IG5ldyBEYXRlKHRoaXMudG9kYXkpKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgIHRoaXMuY2hhbmdlVmlld0RhdGUoYWRkRGF5cyh0aGlzLnZpZXdEYXRlLCA3KSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgdGhpcy5jaGFuZ2VWaWV3RGF0ZShhZGREYXlzKHRoaXMudmlld0RhdGUsIDEpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfSAvLyBlbmQgc3dpdGNoOiB2aWV3VHlwZVxuICB9IC8vIGVuZCBuZXh0Vmlld1xuXG4gIC8vIOiorSBpbmZvIHBvc2l0aW9uXG4gIGluZm9UYWJDbGljayhkb20pIHtcbiAgICB0aGlzLm5vd1Nob3dCdG4gPSBkb207XG4gICAgdGhpcy51aUNhbGVuZGFyTW9yZUluZm9DbGlja2VkLmVtaXQodGhpcy5ub3dTaG93QnRuKTtcblxuICAgIGNvbnNvbGUud2FybigndWkgaW5mb1RhYkNsaWNrJywgdGhpcy5ub3dTaG93QnRuKTtcbiAgfSAvLyBlbmQgaW5mb1RhYkNsaWNrXG4gIGNsb3NlSW5mbygpIHtcblxuICAgIC8vIGNvbnNvbGUud2FybigndWkgY2xvc2VJbmZvJywgdGhpcy5ub3dTaG93QnRuLCB0aGlzLm5vd1Nob3dCdG4uYnRuQ29udGVudC5uYXRpdmVFbGVtZW50KTtcblxuICAgIGlmICh0aGlzLm5vd1Nob3dCdG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ub3dTaG93QnRuLmNsb3NlSW5mbygpO1xuICAgICAgLy8gdGhpcy5ub3dTaG93QnRuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSAvLyBlbmQgY2xvc2VJbmZvXG5cbiAgaXNTYW1lRGF5KHN0YXJ0OiBEYXRlLCBlbmQ6IERhdGUpIHsgLy8gY2hlY2sgaXMgc2FtZSBkYXlcbiAgICByZXR1cm4gaXNTYW1lRGF5KHN0YXJ0LCBlbmQpO1xuICB9XG5cbiAgY2hhbmdlVmlld0RhdGUoZGF0ZTogRGF0ZSkge1xuICAgIHRoaXMuX3ZpZXdEYXRlID0gZGF0ZTtcbiAgICB0aGlzLnJlZnJlc2hIZWFkZXIoZGF0ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmJpbmRTd2lwZURheUV2ZW50KCk7XG4gICAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgcmVmcmVzaEhlYWRlcihkYXRlOiBEYXRlKSB7XG4gICAgdGhpcy5kYXlWaWV3SGVhZGVyID0gdGhpcy5nZXREYXlWaWV3SGVhZGVyKGRhdGUsIHRoaXMudmlld1R5cGUpO1xuICB9XG5cbiAgYmluZFN3aXBlRGF5RXZlbnQoKSB7XG4gICAgY29uc29sZS5sb2coJ2JpbmQgU3dpcGUgZGF5IGV2ZW50LicpO1xuICAgIGZvciAobGV0IGUgb2YgdGhpcy5kYXlTd2lwZUV2ZW50QXJyKSB7XG4gICAgICBlKCk7XG4gICAgfVxuICAgIHRoaXMuZGF5U3dpcGVFdmVudEFyciA9IFtdO1xuXG4gICAgLy93ZWVrIGFsbCBkYXkgZXZlbnQgYmxvY2tcbiAgICBjb25zb2xlLmxvZygnY2FsLWFsbC1kYXktZXZlbnRzOicsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWwtYWxsLWRheS1ldmVudHMnKS5sZW5ndGgpO1xuICAgIGZvciAobGV0IGVsZSBvZiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsLWFsbC1kYXktZXZlbnRzJykpIHtcbiAgICAgIHRoaXMuZGF5U3dpcGVFdmVudEFyci5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsZSwgJ3N3aXBlbGVmdCcsIChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXBlKGV2ZW50LnR5cGUpO1xuICAgICAgfSkpO1xuICAgICAgdGhpcy5kYXlTd2lwZUV2ZW50QXJyLnB1c2godGhpcy5yZW5kZXJlci5saXN0ZW4oZWxlLCAnc3dpcGVyaWdodCcsIChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXBlKGV2ZW50LnR5cGUpO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8vd2VlayAvIGRheSBldmVudCBsaXN0IGJsb2NrXG4gICAgY29uc29sZS5sb2coJ2NhbC10aW1lLWV2ZW50cyBsZW5ndGg6JywgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbC10aW1lLWV2ZW50cycpLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgZWxlIG9mIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWwtdGltZS1ldmVudHMnKSkge1xuICAgICAgdGhpcy5kYXlTd2lwZUV2ZW50QXJyLnB1c2godGhpcy5yZW5kZXJlci5saXN0ZW4oZWxlLCAnc3dpcGVsZWZ0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpcGUoZXZlbnQudHlwZSk7XG4gICAgICB9KSk7XG4gICAgICB0aGlzLmRheVN3aXBlRXZlbnRBcnIucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3RlbihlbGUsICdzd2lwZXJpZ2h0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpcGUoZXZlbnQudHlwZSk7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgLy9tb250aCBldmVudCBibG9ja1xuICAgIGNvbnNvbGUubG9nKCdjYWwtbW9udGgtdmlldyBsZW5ndGg6JywgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbC1tb250aC12aWV3JykubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBlbGUgb2YgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbC1tb250aC12aWV3JykpIHtcbiAgICAgIHRoaXMuZGF5U3dpcGVFdmVudEFyci5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsZSwgJ3N3aXBlbGVmdCcsIChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXBlKGV2ZW50LnR5cGUpO1xuICAgICAgfSkpO1xuICAgICAgdGhpcy5kYXlTd2lwZUV2ZW50QXJyLnB1c2godGhpcy5yZW5kZXJlci5saXN0ZW4oZWxlLCAnc3dpcGVyaWdodCcsIChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXBlKGV2ZW50LnR5cGUpO1xuICAgICAgfSkpO1xuICAgIH1cblxuICB9XG5cblxuICByZW5kZXJXZWVrKCkge1xuICAgIHRoaXMub25SZW5kZXJXZWVrLmVtaXQoKTtcbiAgICBjb25zb2xlLmxvZygnaW4gdWkgY2FsZW5kYXIgcmVuZGVyV2VlaycpO1xuICB9XG59XG4iXX0=