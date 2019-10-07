/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, NgZone, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { fromEvent, of, Subject } from 'rxjs';
import { mergeMap, map, tap, filter, takeUntil } from 'rxjs/operators';
import { DataSyncService } from '@allianzSND/core';
export class UiInfiniteScrollComponent {
    /**
     * @param {?} dataSyncService
     * @param {?} element
     * @param {?} zone
     */
    constructor(dataSyncService, element, zone) {
        this.dataSyncService = dataSyncService;
        this.element = element;
        this.zone = zone;
        this.loadingState = false;
        this.refreshingState = false;
        this.isTouchBind = true;
        this.panState = {
            enabled: false,
            distance: 0,
            startingPositionY: 0,
            currentPosition: 0
        };
        this.refresherClass = '';
        this._loadingFinish = true;
        this._refreshFinish = true;
        this.unsubscribe$ = new Subject();
        this.isRefreshing = false;
        this.refresherStyle = {};
        this.contentStyle = {};
        this.loadingStyle = {};
        this.touch_func = null;
        this._isScrollToPageTop = 0;
        this.isScrollToPageTopChange = new EventEmitter();
        this.syncFunction = [];
        this.distanceToRefresh = 55;
        this.resistance = 2;
        this.lazyLoading = false; // need lazy loading or not
        this.alwaysCallback = false;
        this.translateText = 'Loading....';
        this.loadingFinishChange = new EventEmitter();
        this.refreshFinishChange = new EventEmitter();
        this.loadingCallback = new EventEmitter();
        this.refreshCallback = new EventEmitter();
        this.infiniteScrollDistance = 2;
        this.infiniteScrollUpDistance = 1; // 1.5;
        this.scrolledUp = new EventEmitter();
        this.isScrolling = false;
        this._setContentPan = (/**
         * @return {?}
         */
        function () {
            this.contentStyle['transform'] = this.contentStyle['webkitTransform'] = `translate3d(0,${this.panState.distance}px,0)`;
            this.refresherStyle['transform'] = this.contentStyle['webkitTransform'] = `translate3d( 0,${this.panState.distance - this.refresherEle.nativeElement.offsetHeight}px, 0 )`;
            this.refresherStyle['opacity'] = '1';
            this.refresherStyle['z-index'] = '30';
        });
    }
    /**
     * @return {?}
     */
    get isScrollToPageTop() {
        return this._isScrollToPageTop;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isScrollToPageTop(val) {
        this._isScrollToPageTop = val;
        this.scrollTopToPos(this._isScrollToPageTop);
    }
    /**
     * @param {?} pos
     * @return {?}
     */
    scrollTopToPos(pos) {
        this.scrollEle.nativeElement.scrollTop = pos;
        this.isScrollToPageTopChange.emit(pos);
    }
    /**
     * @return {?}
     */
    get loadingFinish() {
        return this._loadingFinish;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set loadingFinish(value) {
        console.log("infinite-scroll set loadingFinish:", value);
        if (this.loadingState && !this._loadingFinish && value) {
            this.loadingState = false;
            this.loadingStyle['opacity'] = '0';
        }
        this._loadingFinish = value;
    }
    /**
     * @return {?}
     */
    get refreshFinish() {
        return this._refreshFinish;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set refreshFinish(value) {
        console.log("infinite-scroll set refreshFinish:", value);
        if (this.refreshingState && !this._refreshFinish && value) {
            this.doreset();
            this.refreshingState = false;
        }
        this._refreshFinish = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.lazyLoading)
            this.setup();
        this.touch_func = this.touch.bind(this);
        /** @type {?} */
        let touch_ele = this.contentEle.nativeElement;
        touch_ele.addEventListener('touchstart', this.touch_func, false);
        touch_ele.addEventListener('touchmove', this.touch_func, false);
        touch_ele.addEventListener('touchend', this.touch_func, false);
        // this.contentEle.nativeElement.addEventListener('touchstart', this.touch.bind(this), false);
        // this.contentEle.nativeElement.addEventListener('touchmove', this.touch.bind(this), false);
        // this.contentEle.nativeElement.addEventListener('touchend', this.touch.bind(this), false);
        this.scrollEle.nativeElement.addEventListener('scroll', this.scroll.bind(this), false);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.destroyScroller();
    }
    /**
     * @return {?}
     */
    resetScroller() {
        this.destroyScroller();
        if (this.lazyLoading)
            this.setup();
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    scroll(ev) {
        if (this.isScrolling) {
            return;
        }
        this.isScrolling = true;
        // console.warn('scroll top = ', this.scrollEle.nativeElement.scrollTop);
        /** @type {?} */
        let touch_ele = this.contentEle.nativeElement;
        if (this.scrollEle.nativeElement.scrollTop <= 0 && !this.isTouchBind) {
            console.warn('scroll top = 0');
            touch_ele.addEventListener('touchstart', this.touch_func, false);
            touch_ele.addEventListener('touchmove', this.touch_func, false);
            touch_ele.addEventListener('touchend', this.touch_func, false);
            this.isTouchBind = true;
        }
        else if (this.scrollEle.nativeElement.scrollTop > 0 && this.isTouchBind) {
            console.warn('scroll else');
            // if (x.removeEventListener) {
            touch_ele.removeEventListener('touchstart', this.touch_func, false);
            touch_ele.removeEventListener('touchmove', this.touch_func, false);
            touch_ele.removeEventListener('touchend', this.touch_func, false);
            this.isTouchBind = false;
            // } else if (x.detachEvent) {
            //   x.detachEvent('touchmove', this.touch.bind(this), false);
            // }
        }
        this.isScrolling = false;
    } // end scroll
    // end scroll
    /**
     * @param {?} e
     * @return {?}
     */
    touch(e) {
        switch (e.type) {
            case 'touchstart':
                if (e.changedTouches.length > 1) {
                    e.preventDefault();
                    return;
                }
                this.panState.currentPosition = e.changedTouches[0].clientY;
                this.panstart();
                break;
            case 'touchmove':
                console.warn('touchmove');
                /** @type {?} */
                let direction = this.panState.currentPosition < e.changedTouches[0].clientY ? 'down' : 'up';
                /** @type {?} */
                let distance = Math.abs(this.panState.currentPosition - e.changedTouches[0].clientY);
                if (direction == 'down')
                    this.pandown({ distance });
                else
                    this.panup({ distance });
                break;
            case 'touchend':
                if (e.changedTouches.length == 1)
                    this.panend();
                break;
        }
    }
    /**
     * @return {?}
     */
    panstart() {
        this.panState.startingPositionY = this.scrollEle.nativeElement.scrollTop;
        if (this.panState.startingPositionY === 0) {
            this.panState.enabled = true;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    panup(e) {
        if (!this.panState.enabled || this.panState.distance === 0) {
            return;
        }
        if (this.panState.distance < e.distance / this.resistance) {
            this.panState.distance = 0;
        }
        else {
            this.panState.distance = e.distance / this.resistance;
        }
        this._setContentPan();
        // _setBodyClass();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    pandown(e) {
        if (!this.panState.enabled) {
            return;
        }
        this.panState.distance = e.distance / this.resistance;
        if (this.panState.distance >= this.distanceToRefresh) {
            this.isRefreshing = true;
        }
        else {
            this.isRefreshing = false;
        }
        this._setContentPan();
    }
    /**
     * @return {?}
     */
    panend() {
        if (!this.panState.enabled) {
            return;
        }
        this.contentStyle['transform'] = this.contentStyle['webkitTransform'] = '';
        this.refresherStyle['transform'] = this.contentStyle['webkitTransform'] = '';
        delete this.refresherStyle['opacity'];
        delete this.refresherStyle['z-index'];
        if (this.isRefreshing) {
            this._refreshFinish = false;
            this.refreshFinishChange.emit(false);
            this.refreshingState = true;
            this.dorefresh();
        }
        else
            this.doreset();
        this.panState.distance = 0;
        this.panState.enabled = false;
    }
    /**
     * @private
     * @return {?}
     */
    dorefresh() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.refresherClass = 'refreshing';
            if (this.syncFunction.length > 0)
                yield this.dataSyncService.syncFunc(this.syncFunction, true);
            this.refreshCallback.emit();
        });
    }
    /**
     * @private
     * @return {?}
     */
    doreset() {
        console.log("do reset");
        /** @type {?} */
        var _this = this;
        _this.refresherClass = 'refresher-reset';
        /** @type {?} */
        var bodyClassRemove = (/**
         * @return {?}
         */
        function () {
            _this.refresherClass = '';
            _this.isRefreshing = false;
            _this.scrollEle.nativeElement.removeEventListener('transitionend', bodyClassRemove, false);
        });
        _this.scrollEle.nativeElement.addEventListener('transitionend', bodyClassRemove, false);
    }
    /**
     * @private
     * @return {?}
     */
    setup() {
        if (this.hasWindowDefined()) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this._scroller = this.createScroller({
                    upDistance: this.infiniteScrollUpDistance,
                    downDistance: this.infiniteScrollDistance,
                    alwaysCallback: this.alwaysCallback,
                    element: this.scrollEle
                })
                    .pipe(takeUntil(this.unsubscribe$))
                    .subscribe((/**
                 * @param {?} payload
                 * @return {?}
                 */
                (payload) => this.zone.run((/**
                 * @return {?}
                 */
                () => this.handleOnScroll(payload)))));
            }));
        }
    }
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    handleOnScroll({ type, payload }) {
        console.log('handle scroll:', type, payload);
        if (payload.currentScrollPosition < 0) {
            return;
        }
        switch (type) {
            case 'DOWN':
                this.loadingState = true;
                this._loadingFinish = false;
                this.loadingFinishChange.emit(false);
                this.loadingStyle['opacity'] = '1';
                return this.loadingCallback.emit(payload);
            case 'UP':
                return this.scrolledUp.emit(payload);
            default:
                return;
        }
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    createScroller(config) {
        const { totalToScroll: startWithTotal } = this.calculatePoints(config.element);
        this.scrollState = {
            lastScrollPosition: 0,
            lastTotalToScroll: 0,
            totalToScroll: startWithTotal,
            triggered: {
                down: 0,
                up: 0
            }
        };
        /** @type {?} */
        const distance = {
            up: config.upDistance,
            down: config.downDistance
        };
        return this.attachScrollEvent(config.element).pipe(mergeMap((/**
         * @return {?}
         */
        () => of(this.calculatePoints(config.element)))), map((/**
         * @param {?} positionStats
         * @return {?}
         */
        (positionStats) => this.toInfiniteScrollParams(this.scrollState.lastScrollPosition, positionStats, distance))), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ stats, fire, scrollDown }) => this.updateScrollState(this.scrollState, stats.scrolled, stats.totalToScroll))), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ fire, scrollDown, stats: { totalToScroll } }) => this.shouldTriggerEvents(config.alwaysCallback, fire, this.isTriggeredScroll(totalToScroll, this.scrollState, scrollDown)))), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ scrollDown, stats: { totalToScroll } }) => {
            this.updateTriggeredFlag(totalToScroll, this.scrollState, scrollDown);
        })), map(this.toInfiniteScrollAction));
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    attachScrollEvent(element) {
        /** @type {?} */
        let ele = element.nativeElement ? element.nativeElement : element;
        return fromEvent(ele, 'scroll');
    }
    /**
     * @private
     * @return {?}
     */
    hasWindowDefined() {
        return typeof window !== 'undefined';
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    calculatePoints(element) {
        element = element.nativeElement ? element.nativeElement : element;
        /** @type {?} */
        const height = this.getElementHeight(element);
        /** @type {?} */
        const scrolled = element.scrollTop;
        /** @type {?} */
        const totalToScroll = element.scrollHeight - this.getElementHeight(this.loaderEle);
        return { height, scrolled, totalToScroll };
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    getElementHeight(element) {
        if (element)
            return element.offsetHeight;
        else
            return 0;
    }
    /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} stats
     * @param {?} distance
     * @return {?}
     */
    toInfiniteScrollParams(lastScrollPosition, stats, distance) {
        const { scrollDown, fire } = this.getScrollStats(lastScrollPosition, stats, distance);
        return {
            scrollDown, fire, stats
        };
    }
    /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} stats
     * @param {?} distance
     * @return {?}
     */
    getScrollStats(lastScrollPosition, stats, distance) {
        /** @type {?} */
        const scrollDown = this.isScrollingDownwards(lastScrollPosition, stats);
        return {
            fire: this.shouldFireScrollEvent(stats, distance, scrollDown),
            scrollDown
        };
    }
    /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} container
     * @return {?}
     */
    isScrollingDownwards(lastScrollPosition, container) {
        return lastScrollPosition < container.scrolled;
    }
    /**
     * @private
     * @param {?} container
     * @param {?} distance
     * @param {?} scrollingDown
     * @return {?}
     */
    shouldFireScrollEvent(container, distance, scrollingDown) {
        /** @type {?} */
        let remaining;
        /** @type {?} */
        let containerBreakpoint;
        if (container.totalToScroll <= 0) {
            return false;
        }
        /** @type {?} */
        const scrolledUntilNow = container.height + container.scrolled;
        if (scrollingDown) {
            remaining =
                (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
            containerBreakpoint = distance.down / 10;
        }
        else {
            /** @type {?} */
            const totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
            remaining = container.scrolled / totalHiddenContentHeight;
            containerBreakpoint = distance.up / 10;
        }
        /** @type {?} */
        const shouldFireEvent = remaining <= containerBreakpoint;
        return shouldFireEvent;
    }
    /**
     * @private
     * @param {?} state
     * @param {?} scrolledUntilNow
     * @param {?} totalToScroll
     * @return {?}
     */
    updateScrollState(state, scrolledUntilNow, totalToScroll) {
        state.lastScrollPosition = scrolledUntilNow;
        if (state.lastTotalToScroll !== totalToScroll) {
            state.lastTotalToScroll = state.totalToScroll;
            state.totalToScroll = totalToScroll;
        }
    }
    /**
     * @private
     * @param {?} alwaysCallback
     * @param {?} shouldFireScrollEvent
     * @param {?} isTriggeredCurrentTotal
     * @return {?}
     */
    shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
        return (alwaysCallback || shouldFireScrollEvent) && !isTriggeredCurrentTotal;
    }
    /**
     * @private
     * @param {?} totalToScroll
     * @param {?} scrollState
     * @param {?} isScrollingDown
     * @return {?}
     */
    isTriggeredScroll(totalToScroll, scrollState, isScrollingDown) {
        return isScrollingDown
            ? scrollState.triggered.down === totalToScroll
            : scrollState.triggered.up === totalToScroll;
    }
    /**
     * @private
     * @param {?} scroll
     * @param {?} state
     * @param {?} isScrollingDown
     * @return {?}
     */
    updateTriggeredFlag(scroll, state, isScrollingDown) {
        if (isScrollingDown) {
            state.triggered.down = scroll;
        }
        else {
            state.triggered.up = scroll;
        }
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    toInfiniteScrollAction(response) {
        const { scrollDown, stats: { scrolled: currentScrollPosition } } = response;
        return {
            type: scrollDown ? 'DOWN' : 'UP',
            payload: {
                currentScrollPosition
            }
        };
    }
    /**
     * @private
     * @return {?}
     */
    destroyScroller() {
        if (this._scroller) {
            this._scroller.unsubscribe();
        }
    }
}
UiInfiniteScrollComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-infinite-scroll',
                template: "<div class=\"infiniti-scroll stop-scroll-block\" #infinitiScroll [ngClass]=\"refresherClass\">\n  <div class=\"refresher\" #refresher [ngStyle]=\"refresherStyle\">\n    <ng-container *ngIf=\"isRefreshing\">\n      <app-ui-refresh-icon></app-ui-refresh-icon>\n    </ng-container>\n  </div>\n  <div class=\"refresh-content\" #refreshContent [ngStyle]=\"contentStyle\">\n    <div class=\"scroll-content stop-scroll-block\" #content>\n      <ng-content></ng-content>\n\n      <div #loader *ngIf=\"lazyLoading &&loadingState && !loadingFinish\" class=\"loader\" [ngStyle]=\"loadingStyle\">\n        <app-ui-refresh-icon></app-ui-refresh-icon>\n        <p class=\"loading-txt\">{{translateText}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.infiniti-scroll{height:100%;overflow:hidden;overflow-y:auto;position:relative}.refresher{width:100%;height:110px;position:absolute;top:0;left:0;opacity:0;z-index:-1;text-align:center}.refresh-content{z-index:20;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:transparent;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.scroll-content{position:relative}.loader{width:100%;height:100px;padding-top:10px;text-align:center;transition:.25s;opacity:0}.loader app-ui-refresh-icon{display:block}.loader app-ui-refresh-icon ::ng-deep .ui-refresh-spinner{top:0}.loader .loading-txt{display:block;margin:10px 0 0;width:100%;font-size:.875rem}.refresher-reset .refersher{transition:.25s}.refresher-reset .refresh-content{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:.5s}.refreshing .refresher{transition:transform .25s;transition:transform .25s,-webkit-transform .25s;opacity:1;z-index:10}.refreshing .refresh-content{-webkit-transform:translate3d(0,110px,0);transform:translate3d(0,110px,0);transition:.25s}"]
            }] }
];
UiInfiniteScrollComponent.ctorParameters = () => [
    { type: DataSyncService },
    { type: ElementRef },
    { type: NgZone }
];
UiInfiniteScrollComponent.propDecorators = {
    isScrollToPageTop: [{ type: Input }],
    isScrollToPageTopChange: [{ type: Output }],
    syncFunction: [{ type: Input }],
    distanceToRefresh: [{ type: Input }],
    resistance: [{ type: Input }],
    lazyLoading: [{ type: Input }],
    alwaysCallback: [{ type: Input }],
    translateText: [{ type: Input }],
    loadingFinish: [{ type: Input }],
    refreshFinish: [{ type: Input }],
    loadingFinishChange: [{ type: Output }],
    refreshFinishChange: [{ type: Output }],
    loadingCallback: [{ type: Output }],
    refreshCallback: [{ type: Output }],
    infiniteScrollDistance: [{ type: Input }],
    infiniteScrollUpDistance: [{ type: Input }],
    scrolledUp: [{ type: Output }],
    scrollEle: [{ type: ViewChild, args: ['infinitiScroll',] }],
    refresherEle: [{ type: ViewChild, args: ['refresher',] }],
    contentEle: [{ type: ViewChild, args: ['refreshContent',] }],
    loaderEle: [{ type: ViewChild, args: ['loader',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    UiInfiniteScrollComponent.prototype._scroller;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.loadingState;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.refreshingState;
    /**
     * @type {?}
     * @private
     */
    UiInfiniteScrollComponent.prototype.scrollState;
    /**
     * @type {?}
     * @private
     */
    UiInfiniteScrollComponent.prototype.isTouchBind;
    /**
     * @type {?}
     * @private
     */
    UiInfiniteScrollComponent.prototype.panState;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.refresherClass;
    /**
     * @type {?}
     * @private
     */
    UiInfiniteScrollComponent.prototype._loadingFinish;
    /**
     * @type {?}
     * @private
     */
    UiInfiniteScrollComponent.prototype._refreshFinish;
    /**
     * @type {?}
     * @private
     */
    UiInfiniteScrollComponent.prototype.unsubscribe$;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.isRefreshing;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.refresherStyle;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.contentStyle;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.loadingStyle;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.touch_func;
    /**
     * @type {?}
     * @private
     */
    UiInfiniteScrollComponent.prototype._isScrollToPageTop;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.isScrollToPageTopChange;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.syncFunction;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.distanceToRefresh;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.resistance;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.lazyLoading;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.alwaysCallback;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.translateText;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.loadingFinishChange;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.refreshFinishChange;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.loadingCallback;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.refreshCallback;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.infiniteScrollDistance;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.infiniteScrollUpDistance;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.scrolledUp;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.scrollEle;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.refresherEle;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.contentEle;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.loaderEle;
    /** @type {?} */
    UiInfiniteScrollComponent.prototype.isScrolling;
    /**
     * @type {?}
     * @private
     */
    UiInfiniteScrollComponent.prototype._setContentPan;
    /**
     * @type {?}
     * @private
     */
    UiInfiniteScrollComponent.prototype.dataSyncService;
    /**
     * @type {?}
     * @private
     */
    UiInfiniteScrollComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    UiInfiniteScrollComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5maW5pdGUtc2Nyb2xsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktaW5maW5pdGUtc2Nyb2xsL3VpLWluZmluaXRlLXNjcm9sbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBaUIsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4SSxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBZ0IsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBT25ELE1BQU07Ozs7OztJQW1GSixZQUNVLGVBQWdDLEVBQ2hDLE9BQW1CLEVBQ25CLElBQVk7UUFGWixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBcEZmLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWhDLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGFBQVEsR0FBRztZQUNqQixPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxDQUFDO1lBQ1gsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixlQUFlLEVBQUUsQ0FBQztTQUNuQixDQUFDO1FBQ0YsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDWixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUV0Qixp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LFNBQUMsUUFBUTs7Ozs7OztJQTNGbkIsOENBQWdDOztJQUNoQyxpREFBcUM7O0lBQ3JDLG9EQUF3Qzs7Ozs7SUFDeEMsZ0RBQW9COzs7OztJQUNwQixnREFBb0M7Ozs7O0lBQ3BDLDZDQUtFOztJQUNGLG1EQUFvQjs7Ozs7SUFDcEIsbURBQThCOzs7OztJQUM5QixtREFBOEI7Ozs7O0lBRTlCLGlEQUFvRDs7SUFHcEQsaURBQThCOztJQUU5QixtREFBb0I7O0lBQ3BCLGlEQUFrQjs7SUFDbEIsaURBQWtCOztJQUVsQiwrQ0FBa0I7Ozs7O0lBQ2xCLHVEQUErQjs7SUFhL0IsNERBQXVEOztJQUV2RCxpREFBMEM7O0lBQzFDLHNEQUFnQzs7SUFDaEMsK0NBQXdCOztJQUN4QixnREFBc0M7O0lBQ3RDLG1EQUF5Qzs7SUFDekMsa0RBQStDOztJQTRCL0Msd0RBQW1EOztJQUNuRCx3REFBbUQ7O0lBQ25ELG9EQUErQzs7SUFDL0Msb0RBQStDOztJQUUvQywyREFBNEM7O0lBQzVDLDZEQUE4Qzs7SUFDOUMsK0NBQTBDOztJQVExQyw4Q0FBbUQ7O0lBQ25ELGlEQUFpRDs7SUFDakQsK0NBQW9EOztJQUNwRCw4Q0FBMkM7O0lBZ0MzQyxnREFBb0I7Ozs7O0lBdUlwQixtREFLRTs7Ozs7SUFwTEEsb0RBQXdDOzs7OztJQUN4Qyw0Q0FBMkI7Ozs7O0lBQzNCLHlDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBOZ1pvbmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgb2YsIFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAsIG1hcCwgdGFwLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERhdGFTeW5jU2VydmljZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktaW5maW5pdGUtc2Nyb2xsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWluZmluaXRlLXNjcm9sbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWluZmluaXRlLXNjcm9sbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpSW5maW5pdGVTY3JvbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3Njcm9sbGVyOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBsb2FkaW5nU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHJlZnJlc2hpbmdTdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNjcm9sbFN0YXRlO1xuICBwcml2YXRlIGlzVG91Y2hCaW5kOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBwYW5TdGF0ZSA9IHtcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICBkaXN0YW5jZTogMCxcbiAgICBzdGFydGluZ1Bvc2l0aW9uWTogMCxcbiAgICBjdXJyZW50UG9zaXRpb246IDBcbiAgfTtcbiAgcmVmcmVzaGVyQ2xhc3MgPSAnJztcbiAgcHJpdmF0ZSBfbG9hZGluZ0ZpbmlzaCA9IHRydWU7XG4gIHByaXZhdGUgX3JlZnJlc2hGaW5pc2ggPSB0cnVlO1xuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuXG4gIGlzUmVmcmVzaGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHJlZnJlc2hlclN0eWxlID0ge307XG4gIGNvbnRlbnRTdHlsZSA9IHt9O1xuICBsb2FkaW5nU3R5bGUgPSB7fTtcblxuICB0b3VjaF9mdW5jID0gbnVsbDtcbiAgcHJpdmF0ZSBfaXNTY3JvbGxUb1BhZ2VUb3AgPSAwO1xuICBASW5wdXQoKVxuICBnZXQgaXNTY3JvbGxUb1BhZ2VUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2Nyb2xsVG9QYWdlVG9wO1xuICB9XG4gIHNldCBpc1Njcm9sbFRvUGFnZVRvcCh2YWwpIHtcbiAgICB0aGlzLl9pc1Njcm9sbFRvUGFnZVRvcCA9IHZhbDtcbiAgICB0aGlzLnNjcm9sbFRvcFRvUG9zKHRoaXMuX2lzU2Nyb2xsVG9QYWdlVG9wKTtcbiAgfVxuICBzY3JvbGxUb3BUb1Bvcyhwb3MpIHtcbiAgICB0aGlzLnNjcm9sbEVsZS5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHBvcztcbiAgICB0aGlzLmlzU2Nyb2xsVG9QYWdlVG9wQ2hhbmdlLmVtaXQocG9zKTtcbiAgfVxuICBAT3V0cHV0KCkgaXNTY3JvbGxUb1BhZ2VUb3BDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgc3luY0Z1bmN0aW9uOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIEBJbnB1dCgpIGRpc3RhbmNlVG9SZWZyZXNoID0gNTU7XG4gIEBJbnB1dCgpIHJlc2lzdGFuY2UgPSAyO1xuICBASW5wdXQoKSBsYXp5TG9hZGluZzogYm9vbGVhbiA9IGZhbHNlOyAvLyBuZWVkIGxhenkgbG9hZGluZyBvciBub3RcbiAgQElucHV0KCkgYWx3YXlzQ2FsbGJhY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdHJhbnNsYXRlVGV4dDogc3RyaW5nID0gJ0xvYWRpbmcuLi4uJztcbiAgQElucHV0KClcbiAgcHVibGljIGdldCBsb2FkaW5nRmluaXNoKCkgeyAvLyBsYXp5IGxvYWRpbmcgaXMgZmluaXNoZWQgb3Igbm90XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmdGaW5pc2g7XG4gIH1cbiAgcHVibGljIHNldCBsb2FkaW5nRmluaXNoKHZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coXCJpbmZpbml0ZS1zY3JvbGwgc2V0IGxvYWRpbmdGaW5pc2g6XCIsIHZhbHVlKTtcbiAgICBpZiAodGhpcy5sb2FkaW5nU3RhdGUgJiYgIXRoaXMuX2xvYWRpbmdGaW5pc2ggJiYgdmFsdWUpIHtcbiAgICAgIHRoaXMubG9hZGluZ1N0YXRlID0gZmFsc2U7XG4gICAgICB0aGlzLmxvYWRpbmdTdHlsZVsnb3BhY2l0eSddID0gJzAnO1xuICAgIH1cbiAgICB0aGlzLl9sb2FkaW5nRmluaXNoID0gdmFsdWU7XG5cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgcmVmcmVzaEZpbmlzaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmcmVzaEZpbmlzaDtcbiAgfVxuICBwdWJsaWMgc2V0IHJlZnJlc2hGaW5pc2godmFsdWUpIHtcbiAgICBjb25zb2xlLmxvZyhcImluZmluaXRlLXNjcm9sbCBzZXQgcmVmcmVzaEZpbmlzaDpcIiwgdmFsdWUpO1xuICAgIGlmICh0aGlzLnJlZnJlc2hpbmdTdGF0ZSAmJiAhdGhpcy5fcmVmcmVzaEZpbmlzaCAmJiB2YWx1ZSkge1xuICAgICAgdGhpcy5kb3Jlc2V0KCk7XG4gICAgICB0aGlzLnJlZnJlc2hpbmdTdGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9yZWZyZXNoRmluaXNoID0gdmFsdWU7XG5cbiAgfVxuICBAT3V0cHV0KCkgbG9hZGluZ0ZpbmlzaENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlZnJlc2hGaW5pc2hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsb2FkaW5nQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWZyZXNoQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgaW5maW5pdGVTY3JvbGxEaXN0YW5jZTogbnVtYmVyID0gMjtcbiAgQElucHV0KCkgaW5maW5pdGVTY3JvbGxVcERpc3RhbmNlOiBudW1iZXIgPSAxOyAvLyAxLjU7XG4gIEBPdXRwdXQoKSBzY3JvbGxlZFVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGF0YVN5bmNTZXJ2aWNlOiBEYXRhU3luY1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lXG4gICkgeyB9XG5cbiAgQFZpZXdDaGlsZCgnaW5maW5pdGlTY3JvbGwnKSBzY3JvbGxFbGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3JlZnJlc2hlcicpIHJlZnJlc2hlckVsZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncmVmcmVzaENvbnRlbnQnKSBjb250ZW50RWxlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdsb2FkZXInKSBsb2FkZXJFbGU6IEVsZW1lbnRSZWY7XG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMubGF6eUxvYWRpbmcpXG4gICAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy50b3VjaF9mdW5jID0gdGhpcy50b3VjaC5iaW5kKHRoaXMpO1xuICAgIGxldCB0b3VjaF9lbGUgPSB0aGlzLmNvbnRlbnRFbGUubmF0aXZlRWxlbWVudDtcbiAgICB0b3VjaF9lbGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMudG91Y2hfZnVuYywgZmFsc2UpO1xuICAgIHRvdWNoX2VsZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLnRvdWNoX2Z1bmMsIGZhbHNlKTtcbiAgICB0b3VjaF9lbGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnRvdWNoX2Z1bmMsIGZhbHNlKTtcbiAgICAvLyB0aGlzLmNvbnRlbnRFbGUubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy50b3VjaC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgLy8gdGhpcy5jb250ZW50RWxlLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy50b3VjaC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgLy8gdGhpcy5jb250ZW50RWxlLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnRvdWNoLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB0aGlzLnNjcm9sbEVsZS5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsLmJpbmQodGhpcyksIGZhbHNlKTtcblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95U2Nyb2xsZXIoKTtcbiAgfVxuXG4gIHJlc2V0U2Nyb2xsZXIoKSB7XG4gICAgdGhpcy5kZXN0cm95U2Nyb2xsZXIoKTtcbiAgICBpZiAodGhpcy5sYXp5TG9hZGluZylcbiAgICAgIHRoaXMuc2V0dXAoKTtcbiAgfVxuXG4gIGlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gIHNjcm9sbChldikge1xuICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nKSB7IHJldHVybjsgfVxuICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuXG4gICAgLy8gY29uc29sZS53YXJuKCdzY3JvbGwgdG9wID0gJywgdGhpcy5zY3JvbGxFbGUubmF0aXZlRWxlbWVudC5zY3JvbGxUb3ApO1xuXG4gICAgbGV0IHRvdWNoX2VsZSA9IHRoaXMuY29udGVudEVsZS5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLnNjcm9sbEVsZS5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA8PSAwICYmICF0aGlzLmlzVG91Y2hCaW5kKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3Njcm9sbCB0b3AgPSAwJyk7XG4gICAgICB0b3VjaF9lbGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMudG91Y2hfZnVuYywgZmFsc2UpO1xuICAgICAgdG91Y2hfZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMudG91Y2hfZnVuYywgZmFsc2UpO1xuICAgICAgdG91Y2hfZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy50b3VjaF9mdW5jLCBmYWxzZSk7XG4gICAgICB0aGlzLmlzVG91Y2hCaW5kID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsRWxlLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID4gMCAmJiB0aGlzLmlzVG91Y2hCaW5kKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3Njcm9sbCBlbHNlJyk7XG4gICAgICAvLyBpZiAoeC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0b3VjaF9lbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMudG91Y2hfZnVuYywgZmFsc2UpO1xuICAgICAgdG91Y2hfZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMudG91Y2hfZnVuYywgZmFsc2UpO1xuICAgICAgdG91Y2hfZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy50b3VjaF9mdW5jLCBmYWxzZSk7XG4gICAgICB0aGlzLmlzVG91Y2hCaW5kID0gZmFsc2U7XG4gICAgICAvLyB9IGVsc2UgaWYgKHguZGV0YWNoRXZlbnQpIHtcbiAgICAgIC8vICAgeC5kZXRhY2hFdmVudCgndG91Y2htb3ZlJywgdGhpcy50b3VjaC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAvLyB9XG4gICAgfVxuXG4gICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICB9IC8vIGVuZCBzY3JvbGxcblxuICB0b3VjaChlKSB7XG4gICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3RvdWNoc3RhcnQnOlxuICAgICAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhblN0YXRlLmN1cnJlbnRQb3NpdGlvbiA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgdGhpcy5wYW5zdGFydCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvdWNobW92ZSc6XG4gICAgICAgIGNvbnNvbGUud2FybigndG91Y2htb3ZlJyk7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLnBhblN0YXRlLmN1cnJlbnRQb3NpdGlvbiA8IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSA/ICdkb3duJyA6ICd1cCc7XG4gICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMucGFuU3RhdGUuY3VycmVudFBvc2l0aW9uIC0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAnZG93bicpXG4gICAgICAgICAgdGhpcy5wYW5kb3duKHsgZGlzdGFuY2UgfSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLnBhbnVwKHsgZGlzdGFuY2UgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG91Y2hlbmQnOlxuICAgICAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPT0gMSlcbiAgICAgICAgICB0aGlzLnBhbmVuZCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwYW5zdGFydCgpIHtcbiAgICB0aGlzLnBhblN0YXRlLnN0YXJ0aW5nUG9zaXRpb25ZID0gdGhpcy5zY3JvbGxFbGUubmF0aXZlRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgaWYgKHRoaXMucGFuU3RhdGUuc3RhcnRpbmdQb3NpdGlvblkgPT09IDApIHtcbiAgICAgIHRoaXMucGFuU3RhdGUuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcGFudXAoZSkge1xuICAgIGlmICghdGhpcy5wYW5TdGF0ZS5lbmFibGVkIHx8IHRoaXMucGFuU3RhdGUuZGlzdGFuY2UgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFuU3RhdGUuZGlzdGFuY2UgPCBlLmRpc3RhbmNlIC8gdGhpcy5yZXNpc3RhbmNlKSB7XG4gICAgICB0aGlzLnBhblN0YXRlLmRpc3RhbmNlID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYW5TdGF0ZS5kaXN0YW5jZSA9IGUuZGlzdGFuY2UgLyB0aGlzLnJlc2lzdGFuY2U7XG4gICAgfVxuXG5cbiAgICB0aGlzLl9zZXRDb250ZW50UGFuKCk7XG4gICAgLy8gX3NldEJvZHlDbGFzcygpO1xuXG4gIH1cblxuICBwYW5kb3duKGUpIHtcbiAgICBpZiAoIXRoaXMucGFuU3RhdGUuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhblN0YXRlLmRpc3RhbmNlID0gZS5kaXN0YW5jZSAvIHRoaXMucmVzaXN0YW5jZTtcbiAgICBpZiAodGhpcy5wYW5TdGF0ZS5kaXN0YW5jZSA+PSB0aGlzLmRpc3RhbmNlVG9SZWZyZXNoKSB7XG4gICAgICB0aGlzLmlzUmVmcmVzaGluZyA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fc2V0Q29udGVudFBhbigpO1xuICB9XG5cbiAgcGFuZW5kKCkge1xuICAgIGlmICghdGhpcy5wYW5TdGF0ZS5lbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZW50U3R5bGVbJ3RyYW5zZm9ybSddID0gdGhpcy5jb250ZW50U3R5bGVbJ3dlYmtpdFRyYW5zZm9ybSddID0gJyc7XG4gICAgdGhpcy5yZWZyZXNoZXJTdHlsZVsndHJhbnNmb3JtJ10gPSB0aGlzLmNvbnRlbnRTdHlsZVsnd2Via2l0VHJhbnNmb3JtJ10gPSAnJztcbiAgICBkZWxldGUgdGhpcy5yZWZyZXNoZXJTdHlsZVsnb3BhY2l0eSddO1xuICAgIGRlbGV0ZSB0aGlzLnJlZnJlc2hlclN0eWxlWyd6LWluZGV4J107XG5cbiAgICBpZiAodGhpcy5pc1JlZnJlc2hpbmcpIHtcbiAgICAgIHRoaXMuX3JlZnJlc2hGaW5pc2ggPSBmYWxzZTtcbiAgICAgIHRoaXMucmVmcmVzaEZpbmlzaENoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMucmVmcmVzaGluZ1N0YXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZG9yZWZyZXNoKCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgIHRoaXMuZG9yZXNldCgpO1xuXG4gICAgdGhpcy5wYW5TdGF0ZS5kaXN0YW5jZSA9IDA7XG4gICAgdGhpcy5wYW5TdGF0ZS5lbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGRvcmVmcmVzaCgpIHtcbiAgICB0aGlzLnJlZnJlc2hlckNsYXNzID0gJ3JlZnJlc2hpbmcnO1xuICAgIGlmICh0aGlzLnN5bmNGdW5jdGlvbi5sZW5ndGggPiAwKVxuICAgICAgYXdhaXQgdGhpcy5kYXRhU3luY1NlcnZpY2Uuc3luY0Z1bmModGhpcy5zeW5jRnVuY3Rpb24sIHRydWUpO1xuICAgIHRoaXMucmVmcmVzaENhbGxiYWNrLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZG9yZXNldCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImRvIHJlc2V0XCIpO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgX3RoaXMucmVmcmVzaGVyQ2xhc3MgPSAncmVmcmVzaGVyLXJlc2V0JztcbiAgICB2YXIgYm9keUNsYXNzUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucmVmcmVzaGVyQ2xhc3MgPSAnJztcbiAgICAgIF90aGlzLmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgX3RoaXMuc2Nyb2xsRWxlLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGJvZHlDbGFzc1JlbW92ZSwgZmFsc2UpO1xuICAgIH07XG4gICAgX3RoaXMuc2Nyb2xsRWxlLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGJvZHlDbGFzc1JlbW92ZSwgZmFsc2UpO1xuICB9XG5cblxuICBwcml2YXRlIF9zZXRDb250ZW50UGFuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY29udGVudFN0eWxlWyd0cmFuc2Zvcm0nXSA9IHRoaXMuY29udGVudFN0eWxlWyd3ZWJraXRUcmFuc2Zvcm0nXSA9IGB0cmFuc2xhdGUzZCgwLCR7dGhpcy5wYW5TdGF0ZS5kaXN0YW5jZX1weCwwKWA7XG4gICAgdGhpcy5yZWZyZXNoZXJTdHlsZVsndHJhbnNmb3JtJ10gPSB0aGlzLmNvbnRlbnRTdHlsZVsnd2Via2l0VHJhbnNmb3JtJ10gPSBgdHJhbnNsYXRlM2QoIDAsJHt0aGlzLnBhblN0YXRlLmRpc3RhbmNlIC0gdGhpcy5yZWZyZXNoZXJFbGUubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHR9cHgsIDAgKWA7XG4gICAgdGhpcy5yZWZyZXNoZXJTdHlsZVsnb3BhY2l0eSddID0gJzEnO1xuICAgIHRoaXMucmVmcmVzaGVyU3R5bGVbJ3otaW5kZXgnXSA9ICczMCc7XG4gIH07XG5cblxuICBwcml2YXRlIHNldHVwKCkge1xuICAgIGlmICh0aGlzLmhhc1dpbmRvd0RlZmluZWQoKSkge1xuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsZXIgPSB0aGlzLmNyZWF0ZVNjcm9sbGVyKHtcbiAgICAgICAgICB1cERpc3RhbmNlOiB0aGlzLmluZmluaXRlU2Nyb2xsVXBEaXN0YW5jZSxcbiAgICAgICAgICBkb3duRGlzdGFuY2U6IHRoaXMuaW5maW5pdGVTY3JvbGxEaXN0YW5jZSxcbiAgICAgICAgICBhbHdheXNDYWxsYmFjazogdGhpcy5hbHdheXNDYWxsYmFjayxcbiAgICAgICAgICBlbGVtZW50OiB0aGlzLnNjcm9sbEVsZVxuICAgICAgICB9KVxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgocGF5bG9hZCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmhhbmRsZU9uU2Nyb2xsKHBheWxvYWQpKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIHByaXZhdGUgaGFuZGxlT25TY3JvbGwoeyB0eXBlLCBwYXlsb2FkIH0pIHtcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlIHNjcm9sbDonLCB0eXBlLCBwYXlsb2FkKTtcbiAgICBpZiAocGF5bG9hZC5jdXJyZW50U2Nyb2xsUG9zaXRpb24gPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdET1dOJzpcbiAgICAgICAgdGhpcy5sb2FkaW5nU3RhdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9sb2FkaW5nRmluaXNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9hZGluZ0ZpbmlzaENoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nU3R5bGVbJ29wYWNpdHknXSA9ICcxJztcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGluZ0NhbGxiYWNrLmVtaXQocGF5bG9hZCk7XG5cbiAgICAgIGNhc2UgJ1VQJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsZWRVcC5lbWl0KHBheWxvYWQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU2Nyb2xsZXIoY29uZmlnKSB7XG4gICAgY29uc3QgeyB0b3RhbFRvU2Nyb2xsOiBzdGFydFdpdGhUb3RhbCB9ID0gdGhpcy5jYWxjdWxhdGVQb2ludHMoY29uZmlnLmVsZW1lbnQpO1xuICAgIHRoaXMuc2Nyb2xsU3RhdGUgPSB7XG4gICAgICBsYXN0U2Nyb2xsUG9zaXRpb246IDAsXG4gICAgICBsYXN0VG90YWxUb1Njcm9sbDogMCxcbiAgICAgIHRvdGFsVG9TY3JvbGw6IHN0YXJ0V2l0aFRvdGFsLFxuICAgICAgdHJpZ2dlcmVkOiB7XG4gICAgICAgIGRvd246IDAsXG4gICAgICAgIHVwOiAwXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGRpc3RhbmNlID0ge1xuICAgICAgdXA6IGNvbmZpZy51cERpc3RhbmNlLFxuICAgICAgZG93bjogY29uZmlnLmRvd25EaXN0YW5jZVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5hdHRhY2hTY3JvbGxFdmVudChjb25maWcuZWxlbWVudCkucGlwZShcbiAgICAgIG1lcmdlTWFwKCgpID0+IG9mKHRoaXMuY2FsY3VsYXRlUG9pbnRzKGNvbmZpZy5lbGVtZW50KSkpLFxuICAgICAgbWFwKChwb3NpdGlvblN0YXRzKSA9PiB0aGlzLnRvSW5maW5pdGVTY3JvbGxQYXJhbXMoXG4gICAgICAgIHRoaXMuc2Nyb2xsU3RhdGUubGFzdFNjcm9sbFBvc2l0aW9uLFxuICAgICAgICBwb3NpdGlvblN0YXRzLFxuICAgICAgICBkaXN0YW5jZVxuICAgICAgKSksXG4gICAgICB0YXAoKHsgc3RhdHMsIGZpcmUsIHNjcm9sbERvd24gfSkgPT4gdGhpcy51cGRhdGVTY3JvbGxTdGF0ZSh0aGlzLnNjcm9sbFN0YXRlLFxuICAgICAgICBzdGF0cy5zY3JvbGxlZCxcbiAgICAgICAgc3RhdHMudG90YWxUb1Njcm9sbCkpLFxuICAgICAgZmlsdGVyKCh7IGZpcmUsIHNjcm9sbERvd24sIHN0YXRzOiB7IHRvdGFsVG9TY3JvbGwgfSB9KSA9PiB0aGlzLnNob3VsZFRyaWdnZXJFdmVudHMoY29uZmlnLmFsd2F5c0NhbGxiYWNrLCBmaXJlLCB0aGlzLmlzVHJpZ2dlcmVkU2Nyb2xsKHRvdGFsVG9TY3JvbGwsIHRoaXMuc2Nyb2xsU3RhdGUsIHNjcm9sbERvd24pKSksXG4gICAgICB0YXAoKHsgc2Nyb2xsRG93biwgc3RhdHM6IHsgdG90YWxUb1Njcm9sbCB9IH0pID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVUcmlnZ2VyZWRGbGFnKFxuICAgICAgICAgIHRvdGFsVG9TY3JvbGwsXG4gICAgICAgICAgdGhpcy5zY3JvbGxTdGF0ZSxcbiAgICAgICAgICBzY3JvbGxEb3duXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIG1hcCh0aGlzLnRvSW5maW5pdGVTY3JvbGxBY3Rpb24pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoU2Nyb2xsRXZlbnQoZWxlbWVudCkge1xuICAgIGxldCBlbGUgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgPyBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50O1xuICAgIHJldHVybiBmcm9tRXZlbnQoZWxlLCAnc2Nyb2xsJyk7XG4gIH1cblxuICBwcml2YXRlIGhhc1dpbmRvd0RlZmluZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVQb2ludHMoZWxlbWVudCkge1xuICAgIGVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgPyBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50O1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudEhlaWdodChlbGVtZW50KTtcbiAgICBjb25zdCBzY3JvbGxlZCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHRvdGFsVG9TY3JvbGwgPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIHRoaXMuZ2V0RWxlbWVudEhlaWdodCh0aGlzLmxvYWRlckVsZSk7XG4gICAgcmV0dXJuIHsgaGVpZ2h0LCBzY3JvbGxlZCwgdG90YWxUb1Njcm9sbCB9O1xuXG4gIH1cblxuICBwcml2YXRlIGdldEVsZW1lbnRIZWlnaHQoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KVxuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGVsc2VcbiAgICAgIHJldHVybiAwO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0luZmluaXRlU2Nyb2xsUGFyYW1zKGxhc3RTY3JvbGxQb3NpdGlvbiwgc3RhdHMsIGRpc3RhbmNlKSB7XG4gICAgY29uc3QgeyBzY3JvbGxEb3duLCBmaXJlIH0gPSB0aGlzLmdldFNjcm9sbFN0YXRzKGxhc3RTY3JvbGxQb3NpdGlvbiwgc3RhdHMsIGRpc3RhbmNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsRG93biwgZmlyZSwgc3RhdHNcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBnZXRTY3JvbGxTdGF0cyhsYXN0U2Nyb2xsUG9zaXRpb24sIHN0YXRzLCBkaXN0YW5jZSkge1xuICAgIGNvbnN0IHNjcm9sbERvd24gPSB0aGlzLmlzU2Nyb2xsaW5nRG93bndhcmRzKGxhc3RTY3JvbGxQb3NpdGlvbiwgc3RhdHMpO1xuICAgIHJldHVybiB7XG4gICAgICBmaXJlOiB0aGlzLnNob3VsZEZpcmVTY3JvbGxFdmVudChzdGF0cywgZGlzdGFuY2UsIHNjcm9sbERvd24pLFxuICAgICAgc2Nyb2xsRG93blxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNTY3JvbGxpbmdEb3dud2FyZHMobGFzdFNjcm9sbFBvc2l0aW9uLCBjb250YWluZXIpIHtcbiAgICByZXR1cm4gbGFzdFNjcm9sbFBvc2l0aW9uIDwgY29udGFpbmVyLnNjcm9sbGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRGaXJlU2Nyb2xsRXZlbnQoY29udGFpbmVyLCBkaXN0YW5jZSwgc2Nyb2xsaW5nRG93bikge1xuICAgIGxldCByZW1haW5pbmc6IG51bWJlcjtcbiAgICBsZXQgY29udGFpbmVyQnJlYWtwb2ludDogbnVtYmVyO1xuICAgIGlmIChjb250YWluZXIudG90YWxUb1Njcm9sbCA8PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHNjcm9sbGVkVW50aWxOb3cgPSBjb250YWluZXIuaGVpZ2h0ICsgY29udGFpbmVyLnNjcm9sbGVkO1xuICAgIGlmIChzY3JvbGxpbmdEb3duKSB7XG4gICAgICByZW1haW5pbmcgPVxuICAgICAgICAoY29udGFpbmVyLnRvdGFsVG9TY3JvbGwgLSBzY3JvbGxlZFVudGlsTm93KSAvIGNvbnRhaW5lci50b3RhbFRvU2Nyb2xsO1xuICAgICAgY29udGFpbmVyQnJlYWtwb2ludCA9IGRpc3RhbmNlLmRvd24gLyAxMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG90YWxIaWRkZW5Db250ZW50SGVpZ2h0ID1cbiAgICAgICAgY29udGFpbmVyLnNjcm9sbGVkICsgKGNvbnRhaW5lci50b3RhbFRvU2Nyb2xsIC0gc2Nyb2xsZWRVbnRpbE5vdyk7XG4gICAgICByZW1haW5pbmcgPSBjb250YWluZXIuc2Nyb2xsZWQgLyB0b3RhbEhpZGRlbkNvbnRlbnRIZWlnaHQ7XG4gICAgICBjb250YWluZXJCcmVha3BvaW50ID0gZGlzdGFuY2UudXAgLyAxMDtcbiAgICB9XG5cbiAgICBjb25zdCBzaG91bGRGaXJlRXZlbnQ6IGJvb2xlYW4gPSByZW1haW5pbmcgPD0gY29udGFpbmVyQnJlYWtwb2ludDtcbiAgICByZXR1cm4gc2hvdWxkRmlyZUV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTY3JvbGxTdGF0ZShzdGF0ZSwgc2Nyb2xsZWRVbnRpbE5vdywgdG90YWxUb1Njcm9sbCkge1xuICAgIHN0YXRlLmxhc3RTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbGVkVW50aWxOb3c7XG4gICAgaWYgKHN0YXRlLmxhc3RUb3RhbFRvU2Nyb2xsICE9PSB0b3RhbFRvU2Nyb2xsKSB7XG4gICAgICBzdGF0ZS5sYXN0VG90YWxUb1Njcm9sbCA9IHN0YXRlLnRvdGFsVG9TY3JvbGw7XG4gICAgICBzdGF0ZS50b3RhbFRvU2Nyb2xsID0gdG90YWxUb1Njcm9sbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3VsZFRyaWdnZXJFdmVudHMoYWx3YXlzQ2FsbGJhY2s6IGJvb2xlYW4sIHNob3VsZEZpcmVTY3JvbGxFdmVudDogYm9vbGVhbiwgaXNUcmlnZ2VyZWRDdXJyZW50VG90YWw6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gKGFsd2F5c0NhbGxiYWNrIHx8IHNob3VsZEZpcmVTY3JvbGxFdmVudCkgJiYgIWlzVHJpZ2dlcmVkQ3VycmVudFRvdGFsO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1RyaWdnZXJlZFNjcm9sbCh0b3RhbFRvU2Nyb2xsLCBzY3JvbGxTdGF0ZSwgaXNTY3JvbGxpbmdEb3duKSB7XG4gICAgcmV0dXJuIGlzU2Nyb2xsaW5nRG93blxuICAgICAgPyBzY3JvbGxTdGF0ZS50cmlnZ2VyZWQuZG93biA9PT0gdG90YWxUb1Njcm9sbFxuICAgICAgOiBzY3JvbGxTdGF0ZS50cmlnZ2VyZWQudXAgPT09IHRvdGFsVG9TY3JvbGw7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRyaWdnZXJlZEZsYWcoc2Nyb2xsLCBzdGF0ZSwgaXNTY3JvbGxpbmdEb3duKSB7XG4gICAgaWYgKGlzU2Nyb2xsaW5nRG93bikge1xuICAgICAgc3RhdGUudHJpZ2dlcmVkLmRvd24gPSBzY3JvbGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnRyaWdnZXJlZC51cCA9IHNjcm9sbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvSW5maW5pdGVTY3JvbGxBY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7XG4gICAgICBzY3JvbGxEb3duLFxuICAgICAgc3RhdHM6IHsgc2Nyb2xsZWQ6IGN1cnJlbnRTY3JvbGxQb3NpdGlvbiB9XG4gICAgfSA9IHJlc3BvbnNlO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBzY3JvbGxEb3duID8gJ0RPV04nIDogJ1VQJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgY3VycmVudFNjcm9sbFBvc2l0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95U2Nyb2xsZXIoKSB7XG4gICAgaWYgKHRoaXMuX3Njcm9sbGVyKSB7XG4gICAgICB0aGlzLl9zY3JvbGxlci51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=