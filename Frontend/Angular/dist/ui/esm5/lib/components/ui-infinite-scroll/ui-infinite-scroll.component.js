/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, NgZone, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { fromEvent, of, Subject } from 'rxjs';
import { mergeMap, map, tap, filter, takeUntil } from 'rxjs/operators';
import { DataSyncService } from '@allianzSND/core';
var UiInfiniteScrollComponent = /** @class */ (function () {
    function UiInfiniteScrollComponent(dataSyncService, element, zone) {
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
            this.contentStyle['transform'] = this.contentStyle['webkitTransform'] = "translate3d(0," + this.panState.distance + "px,0)";
            this.refresherStyle['transform'] = this.contentStyle['webkitTransform'] = "translate3d( 0," + (this.panState.distance - this.refresherEle.nativeElement.offsetHeight) + "px, 0 )";
            this.refresherStyle['opacity'] = '1';
            this.refresherStyle['z-index'] = '30';
        });
    }
    Object.defineProperty(UiInfiniteScrollComponent.prototype, "isScrollToPageTop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isScrollToPageTop;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isScrollToPageTop = val;
            this.scrollTopToPos(this._isScrollToPageTop);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} pos
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.scrollTopToPos = /**
     * @param {?} pos
     * @return {?}
     */
    function (pos) {
        this.scrollEle.nativeElement.scrollTop = pos;
        this.isScrollToPageTopChange.emit(pos);
    };
    Object.defineProperty(UiInfiniteScrollComponent.prototype, "loadingFinish", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loadingFinish;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log("infinite-scroll set loadingFinish:", value);
            if (this.loadingState && !this._loadingFinish && value) {
                this.loadingState = false;
                this.loadingStyle['opacity'] = '0';
            }
            this._loadingFinish = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiInfiniteScrollComponent.prototype, "refreshFinish", {
        get: /**
         * @return {?}
         */
        function () {
            return this._refreshFinish;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log("infinite-scroll set refreshFinish:", value);
            if (this.refreshingState && !this._refreshFinish && value) {
                this.doreset();
                this.refreshingState = false;
            }
            this._refreshFinish = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.lazyLoading)
            this.setup();
        this.touch_func = this.touch.bind(this);
        /** @type {?} */
        var touch_ele = this.contentEle.nativeElement;
        touch_ele.addEventListener('touchstart', this.touch_func, false);
        touch_ele.addEventListener('touchmove', this.touch_func, false);
        touch_ele.addEventListener('touchend', this.touch_func, false);
        // this.contentEle.nativeElement.addEventListener('touchstart', this.touch.bind(this), false);
        // this.contentEle.nativeElement.addEventListener('touchmove', this.touch.bind(this), false);
        // this.contentEle.nativeElement.addEventListener('touchend', this.touch.bind(this), false);
        this.scrollEle.nativeElement.addEventListener('scroll', this.scroll.bind(this), false);
    };
    /**
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.destroyScroller();
    };
    /**
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.resetScroller = /**
     * @return {?}
     */
    function () {
        this.destroyScroller();
        if (this.lazyLoading)
            this.setup();
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.scroll = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (this.isScrolling) {
            return;
        }
        this.isScrolling = true;
        // console.warn('scroll top = ', this.scrollEle.nativeElement.scrollTop);
        /** @type {?} */
        var touch_ele = this.contentEle.nativeElement;
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
    }; // end scroll
    // end scroll
    /**
     * @param {?} e
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.touch = 
    // end scroll
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
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
                var direction = this.panState.currentPosition < e.changedTouches[0].clientY ? 'down' : 'up';
                /** @type {?} */
                var distance = Math.abs(this.panState.currentPosition - e.changedTouches[0].clientY);
                if (direction == 'down')
                    this.pandown({ distance: distance });
                else
                    this.panup({ distance: distance });
                break;
            case 'touchend':
                if (e.changedTouches.length == 1)
                    this.panend();
                break;
        }
    };
    /**
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.panstart = /**
     * @return {?}
     */
    function () {
        this.panState.startingPositionY = this.scrollEle.nativeElement.scrollTop;
        if (this.panState.startingPositionY === 0) {
            this.panState.enabled = true;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.panup = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
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
    };
    /**
     * @param {?} e
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.pandown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
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
    };
    /**
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.panend = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.dorefresh = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.refresherClass = 'refreshing';
                        if (!(this.syncFunction.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dataSyncService.syncFunc(this.syncFunction, true)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.refreshCallback.emit();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.doreset = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.setup = /**
     * @private
     * @return {?}
     */
    function () {
        var _this_1 = this;
        if (this.hasWindowDefined()) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this_1._scroller = _this_1.createScroller({
                    upDistance: _this_1.infiniteScrollUpDistance,
                    downDistance: _this_1.infiniteScrollDistance,
                    alwaysCallback: _this_1.alwaysCallback,
                    element: _this_1.scrollEle
                })
                    .pipe(takeUntil(_this_1.unsubscribe$))
                    .subscribe((/**
                 * @param {?} payload
                 * @return {?}
                 */
                function (payload) { return _this_1.zone.run((/**
                 * @return {?}
                 */
                function () { return _this_1.handleOnScroll(payload); })); }));
            }));
        }
    };
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.handleOnScroll = /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var type = _a.type, payload = _a.payload;
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
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.createScroller = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this_1 = this;
        var startWithTotal = this.calculatePoints(config.element).totalToScroll;
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
        var distance = {
            up: config.upDistance,
            down: config.downDistance
        };
        return this.attachScrollEvent(config.element).pipe(mergeMap((/**
         * @return {?}
         */
        function () { return of(_this_1.calculatePoints(config.element)); })), map((/**
         * @param {?} positionStats
         * @return {?}
         */
        function (positionStats) { return _this_1.toInfiniteScrollParams(_this_1.scrollState.lastScrollPosition, positionStats, distance); })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var stats = _a.stats, fire = _a.fire, scrollDown = _a.scrollDown;
            return _this_1.updateScrollState(_this_1.scrollState, stats.scrolled, stats.totalToScroll);
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var fire = _a.fire, scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
            return _this_1.shouldTriggerEvents(config.alwaysCallback, fire, _this_1.isTriggeredScroll(totalToScroll, _this_1.scrollState, scrollDown));
        })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
            _this_1.updateTriggeredFlag(totalToScroll, _this_1.scrollState, scrollDown);
        })), map(this.toInfiniteScrollAction));
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.attachScrollEvent = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var ele = element.nativeElement ? element.nativeElement : element;
        return fromEvent(ele, 'scroll');
    };
    /**
     * @private
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.hasWindowDefined = /**
     * @private
     * @return {?}
     */
    function () {
        return typeof window !== 'undefined';
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.calculatePoints = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element = element.nativeElement ? element.nativeElement : element;
        /** @type {?} */
        var height = this.getElementHeight(element);
        /** @type {?} */
        var scrolled = element.scrollTop;
        /** @type {?} */
        var totalToScroll = element.scrollHeight - this.getElementHeight(this.loaderEle);
        return { height: height, scrolled: scrolled, totalToScroll: totalToScroll };
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.getElementHeight = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element)
            return element.offsetHeight;
        else
            return 0;
    };
    /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} stats
     * @param {?} distance
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.toInfiniteScrollParams = /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} stats
     * @param {?} distance
     * @return {?}
     */
    function (lastScrollPosition, stats, distance) {
        var _a = this.getScrollStats(lastScrollPosition, stats, distance), scrollDown = _a.scrollDown, fire = _a.fire;
        return {
            scrollDown: scrollDown, fire: fire, stats: stats
        };
    };
    /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} stats
     * @param {?} distance
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.getScrollStats = /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} stats
     * @param {?} distance
     * @return {?}
     */
    function (lastScrollPosition, stats, distance) {
        /** @type {?} */
        var scrollDown = this.isScrollingDownwards(lastScrollPosition, stats);
        return {
            fire: this.shouldFireScrollEvent(stats, distance, scrollDown),
            scrollDown: scrollDown
        };
    };
    /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} container
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.isScrollingDownwards = /**
     * @private
     * @param {?} lastScrollPosition
     * @param {?} container
     * @return {?}
     */
    function (lastScrollPosition, container) {
        return lastScrollPosition < container.scrolled;
    };
    /**
     * @private
     * @param {?} container
     * @param {?} distance
     * @param {?} scrollingDown
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.shouldFireScrollEvent = /**
     * @private
     * @param {?} container
     * @param {?} distance
     * @param {?} scrollingDown
     * @return {?}
     */
    function (container, distance, scrollingDown) {
        /** @type {?} */
        var remaining;
        /** @type {?} */
        var containerBreakpoint;
        if (container.totalToScroll <= 0) {
            return false;
        }
        /** @type {?} */
        var scrolledUntilNow = container.height + container.scrolled;
        if (scrollingDown) {
            remaining =
                (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
            containerBreakpoint = distance.down / 10;
        }
        else {
            /** @type {?} */
            var totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
            remaining = container.scrolled / totalHiddenContentHeight;
            containerBreakpoint = distance.up / 10;
        }
        /** @type {?} */
        var shouldFireEvent = remaining <= containerBreakpoint;
        return shouldFireEvent;
    };
    /**
     * @private
     * @param {?} state
     * @param {?} scrolledUntilNow
     * @param {?} totalToScroll
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.updateScrollState = /**
     * @private
     * @param {?} state
     * @param {?} scrolledUntilNow
     * @param {?} totalToScroll
     * @return {?}
     */
    function (state, scrolledUntilNow, totalToScroll) {
        state.lastScrollPosition = scrolledUntilNow;
        if (state.lastTotalToScroll !== totalToScroll) {
            state.lastTotalToScroll = state.totalToScroll;
            state.totalToScroll = totalToScroll;
        }
    };
    /**
     * @private
     * @param {?} alwaysCallback
     * @param {?} shouldFireScrollEvent
     * @param {?} isTriggeredCurrentTotal
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.shouldTriggerEvents = /**
     * @private
     * @param {?} alwaysCallback
     * @param {?} shouldFireScrollEvent
     * @param {?} isTriggeredCurrentTotal
     * @return {?}
     */
    function (alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
        return (alwaysCallback || shouldFireScrollEvent) && !isTriggeredCurrentTotal;
    };
    /**
     * @private
     * @param {?} totalToScroll
     * @param {?} scrollState
     * @param {?} isScrollingDown
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.isTriggeredScroll = /**
     * @private
     * @param {?} totalToScroll
     * @param {?} scrollState
     * @param {?} isScrollingDown
     * @return {?}
     */
    function (totalToScroll, scrollState, isScrollingDown) {
        return isScrollingDown
            ? scrollState.triggered.down === totalToScroll
            : scrollState.triggered.up === totalToScroll;
    };
    /**
     * @private
     * @param {?} scroll
     * @param {?} state
     * @param {?} isScrollingDown
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.updateTriggeredFlag = /**
     * @private
     * @param {?} scroll
     * @param {?} state
     * @param {?} isScrollingDown
     * @return {?}
     */
    function (scroll, state, isScrollingDown) {
        if (isScrollingDown) {
            state.triggered.down = scroll;
        }
        else {
            state.triggered.up = scroll;
        }
    };
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.toInfiniteScrollAction = /**
     * @private
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var scrollDown = response.scrollDown, currentScrollPosition = response.stats.scrolled;
        return {
            type: scrollDown ? 'DOWN' : 'UP',
            payload: {
                currentScrollPosition: currentScrollPosition
            }
        };
    };
    /**
     * @private
     * @return {?}
     */
    UiInfiniteScrollComponent.prototype.destroyScroller = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._scroller) {
            this._scroller.unsubscribe();
        }
    };
    UiInfiniteScrollComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-infinite-scroll',
                    template: "<div class=\"infiniti-scroll stop-scroll-block\" #infinitiScroll [ngClass]=\"refresherClass\">\n  <div class=\"refresher\" #refresher [ngStyle]=\"refresherStyle\">\n    <ng-container *ngIf=\"isRefreshing\">\n      <app-ui-refresh-icon></app-ui-refresh-icon>\n    </ng-container>\n  </div>\n  <div class=\"refresh-content\" #refreshContent [ngStyle]=\"contentStyle\">\n    <div class=\"scroll-content stop-scroll-block\" #content>\n      <ng-content></ng-content>\n\n      <div #loader *ngIf=\"lazyLoading &&loadingState && !loadingFinish\" class=\"loader\" [ngStyle]=\"loadingStyle\">\n        <app-ui-refresh-icon></app-ui-refresh-icon>\n        <p class=\"loading-txt\">{{translateText}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.infiniti-scroll{height:100%;overflow:hidden;overflow-y:auto;position:relative}.refresher{width:100%;height:110px;position:absolute;top:0;left:0;opacity:0;z-index:-1;text-align:center}.refresh-content{z-index:20;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:transparent;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.scroll-content{position:relative}.loader{width:100%;height:100px;padding-top:10px;text-align:center;transition:.25s;opacity:0}.loader app-ui-refresh-icon{display:block}.loader app-ui-refresh-icon ::ng-deep .ui-refresh-spinner{top:0}.loader .loading-txt{display:block;margin:10px 0 0;width:100%;font-size:.875rem}.refresher-reset .refersher{transition:.25s}.refresher-reset .refresh-content{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:.5s}.refreshing .refresher{transition:transform .25s;transition:transform .25s,-webkit-transform .25s;opacity:1;z-index:10}.refreshing .refresh-content{-webkit-transform:translate3d(0,110px,0);transform:translate3d(0,110px,0);transition:.25s}"]
                }] }
    ];
    UiInfiniteScrollComponent.ctorParameters = function () { return [
        { type: DataSyncService },
        { type: ElementRef },
        { type: NgZone }
    ]; };
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
    return UiInfiniteScrollComponent;
}());
export { UiInfiniteScrollComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5maW5pdGUtc2Nyb2xsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktaW5maW5pdGUtc2Nyb2xsL3VpLWluZmluaXRlLXNjcm9sbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBaUIsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4SSxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBZ0IsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRW5EO0lBd0ZFLG1DQUNVLGVBQWdDLEVBQ2hDLE9BQW1CLEVBQ25CLElBQVk7UUFGWixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBcEZmLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWhDLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGFBQVEsR0FBRztZQUNqQixPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxDQUFDO1lBQ1gsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixlQUFlLEVBQUUsQ0FBQztTQUNuQixDQUFDO1FBQ0YsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDWixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUV0QixpQkFBWSxHQUFr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Q0FBMkI7Ozs7O0lBQzNCLHlDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBOZ1pvbmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgb2YsIFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAsIG1hcCwgdGFwLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERhdGFTeW5jU2VydmljZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktaW5maW5pdGUtc2Nyb2xsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWluZmluaXRlLXNjcm9sbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWluZmluaXRlLXNjcm9sbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpSW5maW5pdGVTY3JvbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3Njcm9sbGVyOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBsb2FkaW5nU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHJlZnJlc2hpbmdTdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNjcm9sbFN0YXRlO1xuICBwcml2YXRlIGlzVG91Y2hCaW5kOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBwYW5TdGF0ZSA9IHtcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICBkaXN0YW5jZTogMCxcbiAgICBzdGFydGluZ1Bvc2l0aW9uWTogMCxcbiAgICBjdXJyZW50UG9zaXRpb246IDBcbiAgfTtcbiAgcmVmcmVzaGVyQ2xhc3MgPSAnJztcbiAgcHJpdmF0ZSBfbG9hZGluZ0ZpbmlzaCA9IHRydWU7XG4gIHByaXZhdGUgX3JlZnJlc2hGaW5pc2ggPSB0cnVlO1xuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuXG4gIGlzUmVmcmVzaGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHJlZnJlc2hlclN0eWxlID0ge307XG4gIGNvbnRlbnRTdHlsZSA9IHt9O1xuICBsb2FkaW5nU3R5bGUgPSB7fTtcblxuICB0b3VjaF9mdW5jID0gbnVsbDtcbiAgcHJpdmF0ZSBfaXNTY3JvbGxUb1BhZ2VUb3AgPSAwO1xuICBASW5wdXQoKVxuICBnZXQgaXNTY3JvbGxUb1BhZ2VUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2Nyb2xsVG9QYWdlVG9wO1xuICB9XG4gIHNldCBpc1Njcm9sbFRvUGFnZVRvcCh2YWwpIHtcbiAgICB0aGlzLl9pc1Njcm9sbFRvUGFnZVRvcCA9IHZhbDtcbiAgICB0aGlzLnNjcm9sbFRvcFRvUG9zKHRoaXMuX2lzU2Nyb2xsVG9QYWdlVG9wKTtcbiAgfVxuICBzY3JvbGxUb3BUb1Bvcyhwb3MpIHtcbiAgICB0aGlzLnNjcm9sbEVsZS5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHBvcztcbiAgICB0aGlzLmlzU2Nyb2xsVG9QYWdlVG9wQ2hhbmdlLmVtaXQocG9zKTtcbiAgfVxuICBAT3V0cHV0KCkgaXNTY3JvbGxUb1BhZ2VUb3BDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgc3luY0Z1bmN0aW9uOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIEBJbnB1dCgpIGRpc3RhbmNlVG9SZWZyZXNoID0gNTU7XG4gIEBJbnB1dCgpIHJlc2lzdGFuY2UgPSAyO1xuICBASW5wdXQoKSBsYXp5TG9hZGluZzogYm9vbGVhbiA9IGZhbHNlOyAvLyBuZWVkIGxhenkgbG9hZGluZyBvciBub3RcbiAgQElucHV0KCkgYWx3YXlzQ2FsbGJhY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdHJhbnNsYXRlVGV4dDogc3RyaW5nID0gJ0xvYWRpbmcuLi4uJztcbiAgQElucHV0KClcbiAgcHVibGljIGdldCBsb2FkaW5nRmluaXNoKCkgeyAvLyBsYXp5IGxvYWRpbmcgaXMgZmluaXNoZWQgb3Igbm90XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmdGaW5pc2g7XG4gIH1cbiAgcHVibGljIHNldCBsb2FkaW5nRmluaXNoKHZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coXCJpbmZpbml0ZS1zY3JvbGwgc2V0IGxvYWRpbmdGaW5pc2g6XCIsIHZhbHVlKTtcbiAgICBpZiAodGhpcy5sb2FkaW5nU3RhdGUgJiYgIXRoaXMuX2xvYWRpbmdGaW5pc2ggJiYgdmFsdWUpIHtcbiAgICAgIHRoaXMubG9hZGluZ1N0YXRlID0gZmFsc2U7XG4gICAgICB0aGlzLmxvYWRpbmdTdHlsZVsnb3BhY2l0eSddID0gJzAnO1xuICAgIH1cbiAgICB0aGlzLl9sb2FkaW5nRmluaXNoID0gdmFsdWU7XG5cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgcmVmcmVzaEZpbmlzaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmcmVzaEZpbmlzaDtcbiAgfVxuICBwdWJsaWMgc2V0IHJlZnJlc2hGaW5pc2godmFsdWUpIHtcbiAgICBjb25zb2xlLmxvZyhcImluZmluaXRlLXNjcm9sbCBzZXQgcmVmcmVzaEZpbmlzaDpcIiwgdmFsdWUpO1xuICAgIGlmICh0aGlzLnJlZnJlc2hpbmdTdGF0ZSAmJiAhdGhpcy5fcmVmcmVzaEZpbmlzaCAmJiB2YWx1ZSkge1xuICAgICAgdGhpcy5kb3Jlc2V0KCk7XG4gICAgICB0aGlzLnJlZnJlc2hpbmdTdGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9yZWZyZXNoRmluaXNoID0gdmFsdWU7XG5cbiAgfVxuICBAT3V0cHV0KCkgbG9hZGluZ0ZpbmlzaENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlZnJlc2hGaW5pc2hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsb2FkaW5nQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWZyZXNoQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgaW5maW5pdGVTY3JvbGxEaXN0YW5jZTogbnVtYmVyID0gMjtcbiAgQElucHV0KCkgaW5maW5pdGVTY3JvbGxVcERpc3RhbmNlOiBudW1iZXIgPSAxOyAvLyAxLjU7XG4gIEBPdXRwdXQoKSBzY3JvbGxlZFVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGF0YVN5bmNTZXJ2aWNlOiBEYXRhU3luY1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lXG4gICkgeyB9XG5cbiAgQFZpZXdDaGlsZCgnaW5maW5pdGlTY3JvbGwnKSBzY3JvbGxFbGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3JlZnJlc2hlcicpIHJlZnJlc2hlckVsZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncmVmcmVzaENvbnRlbnQnKSBjb250ZW50RWxlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdsb2FkZXInKSBsb2FkZXJFbGU6IEVsZW1lbnRSZWY7XG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMubGF6eUxvYWRpbmcpXG4gICAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy50b3VjaF9mdW5jID0gdGhpcy50b3VjaC5iaW5kKHRoaXMpO1xuICAgIGxldCB0b3VjaF9lbGUgPSB0aGlzLmNvbnRlbnRFbGUubmF0aXZlRWxlbWVudDtcbiAgICB0b3VjaF9lbGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMudG91Y2hfZnVuYywgZmFsc2UpO1xuICAgIHRvdWNoX2VsZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLnRvdWNoX2Z1bmMsIGZhbHNlKTtcbiAgICB0b3VjaF9lbGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnRvdWNoX2Z1bmMsIGZhbHNlKTtcbiAgICAvLyB0aGlzLmNvbnRlbnRFbGUubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy50b3VjaC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgLy8gdGhpcy5jb250ZW50RWxlLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy50b3VjaC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgLy8gdGhpcy5jb250ZW50RWxlLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnRvdWNoLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB0aGlzLnNjcm9sbEVsZS5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsLmJpbmQodGhpcyksIGZhbHNlKTtcblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95U2Nyb2xsZXIoKTtcbiAgfVxuXG4gIHJlc2V0U2Nyb2xsZXIoKSB7XG4gICAgdGhpcy5kZXN0cm95U2Nyb2xsZXIoKTtcbiAgICBpZiAodGhpcy5sYXp5TG9hZGluZylcbiAgICAgIHRoaXMuc2V0dXAoKTtcbiAgfVxuXG4gIGlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gIHNjcm9sbChldikge1xuICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nKSB7IHJldHVybjsgfVxuICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuXG4gICAgLy8gY29uc29sZS53YXJuKCdzY3JvbGwgdG9wID0gJywgdGhpcy5zY3JvbGxFbGUubmF0aXZlRWxlbWVudC5zY3JvbGxUb3ApO1xuXG4gICAgbGV0IHRvdWNoX2VsZSA9IHRoaXMuY29udGVudEVsZS5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLnNjcm9sbEVsZS5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA8PSAwICYmICF0aGlzLmlzVG91Y2hCaW5kKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3Njcm9sbCB0b3AgPSAwJyk7XG4gICAgICB0b3VjaF9lbGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMudG91Y2hfZnVuYywgZmFsc2UpO1xuICAgICAgdG91Y2hfZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMudG91Y2hfZnVuYywgZmFsc2UpO1xuICAgICAgdG91Y2hfZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy50b3VjaF9mdW5jLCBmYWxzZSk7XG4gICAgICB0aGlzLmlzVG91Y2hCaW5kID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsRWxlLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID4gMCAmJiB0aGlzLmlzVG91Y2hCaW5kKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3Njcm9sbCBlbHNlJyk7XG4gICAgICAvLyBpZiAoeC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0b3VjaF9lbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMudG91Y2hfZnVuYywgZmFsc2UpO1xuICAgICAgdG91Y2hfZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMudG91Y2hfZnVuYywgZmFsc2UpO1xuICAgICAgdG91Y2hfZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy50b3VjaF9mdW5jLCBmYWxzZSk7XG4gICAgICB0aGlzLmlzVG91Y2hCaW5kID0gZmFsc2U7XG4gICAgICAvLyB9IGVsc2UgaWYgKHguZGV0YWNoRXZlbnQpIHtcbiAgICAgIC8vICAgeC5kZXRhY2hFdmVudCgndG91Y2htb3ZlJywgdGhpcy50b3VjaC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAvLyB9XG4gICAgfVxuXG4gICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICB9IC8vIGVuZCBzY3JvbGxcblxuICB0b3VjaChlKSB7XG4gICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3RvdWNoc3RhcnQnOlxuICAgICAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhblN0YXRlLmN1cnJlbnRQb3NpdGlvbiA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgdGhpcy5wYW5zdGFydCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvdWNobW92ZSc6XG4gICAgICAgIGNvbnNvbGUud2FybigndG91Y2htb3ZlJyk7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLnBhblN0YXRlLmN1cnJlbnRQb3NpdGlvbiA8IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSA/ICdkb3duJyA6ICd1cCc7XG4gICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMucGFuU3RhdGUuY3VycmVudFBvc2l0aW9uIC0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAnZG93bicpXG4gICAgICAgICAgdGhpcy5wYW5kb3duKHsgZGlzdGFuY2UgfSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLnBhbnVwKHsgZGlzdGFuY2UgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG91Y2hlbmQnOlxuICAgICAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPT0gMSlcbiAgICAgICAgICB0aGlzLnBhbmVuZCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwYW5zdGFydCgpIHtcbiAgICB0aGlzLnBhblN0YXRlLnN0YXJ0aW5nUG9zaXRpb25ZID0gdGhpcy5zY3JvbGxFbGUubmF0aXZlRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgaWYgKHRoaXMucGFuU3RhdGUuc3RhcnRpbmdQb3NpdGlvblkgPT09IDApIHtcbiAgICAgIHRoaXMucGFuU3RhdGUuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcGFudXAoZSkge1xuICAgIGlmICghdGhpcy5wYW5TdGF0ZS5lbmFibGVkIHx8IHRoaXMucGFuU3RhdGUuZGlzdGFuY2UgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFuU3RhdGUuZGlzdGFuY2UgPCBlLmRpc3RhbmNlIC8gdGhpcy5yZXNpc3RhbmNlKSB7XG4gICAgICB0aGlzLnBhblN0YXRlLmRpc3RhbmNlID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYW5TdGF0ZS5kaXN0YW5jZSA9IGUuZGlzdGFuY2UgLyB0aGlzLnJlc2lzdGFuY2U7XG4gICAgfVxuXG5cbiAgICB0aGlzLl9zZXRDb250ZW50UGFuKCk7XG4gICAgLy8gX3NldEJvZHlDbGFzcygpO1xuXG4gIH1cblxuICBwYW5kb3duKGUpIHtcbiAgICBpZiAoIXRoaXMucGFuU3RhdGUuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhblN0YXRlLmRpc3RhbmNlID0gZS5kaXN0YW5jZSAvIHRoaXMucmVzaXN0YW5jZTtcbiAgICBpZiAodGhpcy5wYW5TdGF0ZS5kaXN0YW5jZSA+PSB0aGlzLmRpc3RhbmNlVG9SZWZyZXNoKSB7XG4gICAgICB0aGlzLmlzUmVmcmVzaGluZyA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fc2V0Q29udGVudFBhbigpO1xuICB9XG5cbiAgcGFuZW5kKCkge1xuICAgIGlmICghdGhpcy5wYW5TdGF0ZS5lbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZW50U3R5bGVbJ3RyYW5zZm9ybSddID0gdGhpcy5jb250ZW50U3R5bGVbJ3dlYmtpdFRyYW5zZm9ybSddID0gJyc7XG4gICAgdGhpcy5yZWZyZXNoZXJTdHlsZVsndHJhbnNmb3JtJ10gPSB0aGlzLmNvbnRlbnRTdHlsZVsnd2Via2l0VHJhbnNmb3JtJ10gPSAnJztcbiAgICBkZWxldGUgdGhpcy5yZWZyZXNoZXJTdHlsZVsnb3BhY2l0eSddO1xuICAgIGRlbGV0ZSB0aGlzLnJlZnJlc2hlclN0eWxlWyd6LWluZGV4J107XG5cbiAgICBpZiAodGhpcy5pc1JlZnJlc2hpbmcpIHtcbiAgICAgIHRoaXMuX3JlZnJlc2hGaW5pc2ggPSBmYWxzZTtcbiAgICAgIHRoaXMucmVmcmVzaEZpbmlzaENoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMucmVmcmVzaGluZ1N0YXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZG9yZWZyZXNoKCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgIHRoaXMuZG9yZXNldCgpO1xuXG4gICAgdGhpcy5wYW5TdGF0ZS5kaXN0YW5jZSA9IDA7XG4gICAgdGhpcy5wYW5TdGF0ZS5lbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGRvcmVmcmVzaCgpIHtcbiAgICB0aGlzLnJlZnJlc2hlckNsYXNzID0gJ3JlZnJlc2hpbmcnO1xuICAgIGlmICh0aGlzLnN5bmNGdW5jdGlvbi5sZW5ndGggPiAwKVxuICAgICAgYXdhaXQgdGhpcy5kYXRhU3luY1NlcnZpY2Uuc3luY0Z1bmModGhpcy5zeW5jRnVuY3Rpb24sIHRydWUpO1xuICAgIHRoaXMucmVmcmVzaENhbGxiYWNrLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZG9yZXNldCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImRvIHJlc2V0XCIpO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgX3RoaXMucmVmcmVzaGVyQ2xhc3MgPSAncmVmcmVzaGVyLXJlc2V0JztcbiAgICB2YXIgYm9keUNsYXNzUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucmVmcmVzaGVyQ2xhc3MgPSAnJztcbiAgICAgIF90aGlzLmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgX3RoaXMuc2Nyb2xsRWxlLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGJvZHlDbGFzc1JlbW92ZSwgZmFsc2UpO1xuICAgIH07XG4gICAgX3RoaXMuc2Nyb2xsRWxlLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGJvZHlDbGFzc1JlbW92ZSwgZmFsc2UpO1xuICB9XG5cblxuICBwcml2YXRlIF9zZXRDb250ZW50UGFuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY29udGVudFN0eWxlWyd0cmFuc2Zvcm0nXSA9IHRoaXMuY29udGVudFN0eWxlWyd3ZWJraXRUcmFuc2Zvcm0nXSA9IGB0cmFuc2xhdGUzZCgwLCR7dGhpcy5wYW5TdGF0ZS5kaXN0YW5jZX1weCwwKWA7XG4gICAgdGhpcy5yZWZyZXNoZXJTdHlsZVsndHJhbnNmb3JtJ10gPSB0aGlzLmNvbnRlbnRTdHlsZVsnd2Via2l0VHJhbnNmb3JtJ10gPSBgdHJhbnNsYXRlM2QoIDAsJHt0aGlzLnBhblN0YXRlLmRpc3RhbmNlIC0gdGhpcy5yZWZyZXNoZXJFbGUubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHR9cHgsIDAgKWA7XG4gICAgdGhpcy5yZWZyZXNoZXJTdHlsZVsnb3BhY2l0eSddID0gJzEnO1xuICAgIHRoaXMucmVmcmVzaGVyU3R5bGVbJ3otaW5kZXgnXSA9ICczMCc7XG4gIH07XG5cblxuICBwcml2YXRlIHNldHVwKCkge1xuICAgIGlmICh0aGlzLmhhc1dpbmRvd0RlZmluZWQoKSkge1xuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsZXIgPSB0aGlzLmNyZWF0ZVNjcm9sbGVyKHtcbiAgICAgICAgICB1cERpc3RhbmNlOiB0aGlzLmluZmluaXRlU2Nyb2xsVXBEaXN0YW5jZSxcbiAgICAgICAgICBkb3duRGlzdGFuY2U6IHRoaXMuaW5maW5pdGVTY3JvbGxEaXN0YW5jZSxcbiAgICAgICAgICBhbHdheXNDYWxsYmFjazogdGhpcy5hbHdheXNDYWxsYmFjayxcbiAgICAgICAgICBlbGVtZW50OiB0aGlzLnNjcm9sbEVsZVxuICAgICAgICB9KVxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgocGF5bG9hZCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmhhbmRsZU9uU2Nyb2xsKHBheWxvYWQpKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIHByaXZhdGUgaGFuZGxlT25TY3JvbGwoeyB0eXBlLCBwYXlsb2FkIH0pIHtcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlIHNjcm9sbDonLCB0eXBlLCBwYXlsb2FkKTtcbiAgICBpZiAocGF5bG9hZC5jdXJyZW50U2Nyb2xsUG9zaXRpb24gPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdET1dOJzpcbiAgICAgICAgdGhpcy5sb2FkaW5nU3RhdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9sb2FkaW5nRmluaXNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9hZGluZ0ZpbmlzaENoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nU3R5bGVbJ29wYWNpdHknXSA9ICcxJztcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGluZ0NhbGxiYWNrLmVtaXQocGF5bG9hZCk7XG5cbiAgICAgIGNhc2UgJ1VQJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsZWRVcC5lbWl0KHBheWxvYWQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU2Nyb2xsZXIoY29uZmlnKSB7XG4gICAgY29uc3QgeyB0b3RhbFRvU2Nyb2xsOiBzdGFydFdpdGhUb3RhbCB9ID0gdGhpcy5jYWxjdWxhdGVQb2ludHMoY29uZmlnLmVsZW1lbnQpO1xuICAgIHRoaXMuc2Nyb2xsU3RhdGUgPSB7XG4gICAgICBsYXN0U2Nyb2xsUG9zaXRpb246IDAsXG4gICAgICBsYXN0VG90YWxUb1Njcm9sbDogMCxcbiAgICAgIHRvdGFsVG9TY3JvbGw6IHN0YXJ0V2l0aFRvdGFsLFxuICAgICAgdHJpZ2dlcmVkOiB7XG4gICAgICAgIGRvd246IDAsXG4gICAgICAgIHVwOiAwXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGRpc3RhbmNlID0ge1xuICAgICAgdXA6IGNvbmZpZy51cERpc3RhbmNlLFxuICAgICAgZG93bjogY29uZmlnLmRvd25EaXN0YW5jZVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5hdHRhY2hTY3JvbGxFdmVudChjb25maWcuZWxlbWVudCkucGlwZShcbiAgICAgIG1lcmdlTWFwKCgpID0+IG9mKHRoaXMuY2FsY3VsYXRlUG9pbnRzKGNvbmZpZy5lbGVtZW50KSkpLFxuICAgICAgbWFwKChwb3NpdGlvblN0YXRzKSA9PiB0aGlzLnRvSW5maW5pdGVTY3JvbGxQYXJhbXMoXG4gICAgICAgIHRoaXMuc2Nyb2xsU3RhdGUubGFzdFNjcm9sbFBvc2l0aW9uLFxuICAgICAgICBwb3NpdGlvblN0YXRzLFxuICAgICAgICBkaXN0YW5jZVxuICAgICAgKSksXG4gICAgICB0YXAoKHsgc3RhdHMsIGZpcmUsIHNjcm9sbERvd24gfSkgPT4gdGhpcy51cGRhdGVTY3JvbGxTdGF0ZSh0aGlzLnNjcm9sbFN0YXRlLFxuICAgICAgICBzdGF0cy5zY3JvbGxlZCxcbiAgICAgICAgc3RhdHMudG90YWxUb1Njcm9sbCkpLFxuICAgICAgZmlsdGVyKCh7IGZpcmUsIHNjcm9sbERvd24sIHN0YXRzOiB7IHRvdGFsVG9TY3JvbGwgfSB9KSA9PiB0aGlzLnNob3VsZFRyaWdnZXJFdmVudHMoY29uZmlnLmFsd2F5c0NhbGxiYWNrLCBmaXJlLCB0aGlzLmlzVHJpZ2dlcmVkU2Nyb2xsKHRvdGFsVG9TY3JvbGwsIHRoaXMuc2Nyb2xsU3RhdGUsIHNjcm9sbERvd24pKSksXG4gICAgICB0YXAoKHsgc2Nyb2xsRG93biwgc3RhdHM6IHsgdG90YWxUb1Njcm9sbCB9IH0pID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVUcmlnZ2VyZWRGbGFnKFxuICAgICAgICAgIHRvdGFsVG9TY3JvbGwsXG4gICAgICAgICAgdGhpcy5zY3JvbGxTdGF0ZSxcbiAgICAgICAgICBzY3JvbGxEb3duXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIG1hcCh0aGlzLnRvSW5maW5pdGVTY3JvbGxBY3Rpb24pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoU2Nyb2xsRXZlbnQoZWxlbWVudCkge1xuICAgIGxldCBlbGUgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgPyBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50O1xuICAgIHJldHVybiBmcm9tRXZlbnQoZWxlLCAnc2Nyb2xsJyk7XG4gIH1cblxuICBwcml2YXRlIGhhc1dpbmRvd0RlZmluZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVQb2ludHMoZWxlbWVudCkge1xuICAgIGVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgPyBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50O1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudEhlaWdodChlbGVtZW50KTtcbiAgICBjb25zdCBzY3JvbGxlZCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHRvdGFsVG9TY3JvbGwgPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIHRoaXMuZ2V0RWxlbWVudEhlaWdodCh0aGlzLmxvYWRlckVsZSk7XG4gICAgcmV0dXJuIHsgaGVpZ2h0LCBzY3JvbGxlZCwgdG90YWxUb1Njcm9sbCB9O1xuXG4gIH1cblxuICBwcml2YXRlIGdldEVsZW1lbnRIZWlnaHQoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KVxuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGVsc2VcbiAgICAgIHJldHVybiAwO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0luZmluaXRlU2Nyb2xsUGFyYW1zKGxhc3RTY3JvbGxQb3NpdGlvbiwgc3RhdHMsIGRpc3RhbmNlKSB7XG4gICAgY29uc3QgeyBzY3JvbGxEb3duLCBmaXJlIH0gPSB0aGlzLmdldFNjcm9sbFN0YXRzKGxhc3RTY3JvbGxQb3NpdGlvbiwgc3RhdHMsIGRpc3RhbmNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsRG93biwgZmlyZSwgc3RhdHNcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBnZXRTY3JvbGxTdGF0cyhsYXN0U2Nyb2xsUG9zaXRpb24sIHN0YXRzLCBkaXN0YW5jZSkge1xuICAgIGNvbnN0IHNjcm9sbERvd24gPSB0aGlzLmlzU2Nyb2xsaW5nRG93bndhcmRzKGxhc3RTY3JvbGxQb3NpdGlvbiwgc3RhdHMpO1xuICAgIHJldHVybiB7XG4gICAgICBmaXJlOiB0aGlzLnNob3VsZEZpcmVTY3JvbGxFdmVudChzdGF0cywgZGlzdGFuY2UsIHNjcm9sbERvd24pLFxuICAgICAgc2Nyb2xsRG93blxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNTY3JvbGxpbmdEb3dud2FyZHMobGFzdFNjcm9sbFBvc2l0aW9uLCBjb250YWluZXIpIHtcbiAgICByZXR1cm4gbGFzdFNjcm9sbFBvc2l0aW9uIDwgY29udGFpbmVyLnNjcm9sbGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRGaXJlU2Nyb2xsRXZlbnQoY29udGFpbmVyLCBkaXN0YW5jZSwgc2Nyb2xsaW5nRG93bikge1xuICAgIGxldCByZW1haW5pbmc6IG51bWJlcjtcbiAgICBsZXQgY29udGFpbmVyQnJlYWtwb2ludDogbnVtYmVyO1xuICAgIGlmIChjb250YWluZXIudG90YWxUb1Njcm9sbCA8PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHNjcm9sbGVkVW50aWxOb3cgPSBjb250YWluZXIuaGVpZ2h0ICsgY29udGFpbmVyLnNjcm9sbGVkO1xuICAgIGlmIChzY3JvbGxpbmdEb3duKSB7XG4gICAgICByZW1haW5pbmcgPVxuICAgICAgICAoY29udGFpbmVyLnRvdGFsVG9TY3JvbGwgLSBzY3JvbGxlZFVudGlsTm93KSAvIGNvbnRhaW5lci50b3RhbFRvU2Nyb2xsO1xuICAgICAgY29udGFpbmVyQnJlYWtwb2ludCA9IGRpc3RhbmNlLmRvd24gLyAxMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG90YWxIaWRkZW5Db250ZW50SGVpZ2h0ID1cbiAgICAgICAgY29udGFpbmVyLnNjcm9sbGVkICsgKGNvbnRhaW5lci50b3RhbFRvU2Nyb2xsIC0gc2Nyb2xsZWRVbnRpbE5vdyk7XG4gICAgICByZW1haW5pbmcgPSBjb250YWluZXIuc2Nyb2xsZWQgLyB0b3RhbEhpZGRlbkNvbnRlbnRIZWlnaHQ7XG4gICAgICBjb250YWluZXJCcmVha3BvaW50ID0gZGlzdGFuY2UudXAgLyAxMDtcbiAgICB9XG5cbiAgICBjb25zdCBzaG91bGRGaXJlRXZlbnQ6IGJvb2xlYW4gPSByZW1haW5pbmcgPD0gY29udGFpbmVyQnJlYWtwb2ludDtcbiAgICByZXR1cm4gc2hvdWxkRmlyZUV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTY3JvbGxTdGF0ZShzdGF0ZSwgc2Nyb2xsZWRVbnRpbE5vdywgdG90YWxUb1Njcm9sbCkge1xuICAgIHN0YXRlLmxhc3RTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbGVkVW50aWxOb3c7XG4gICAgaWYgKHN0YXRlLmxhc3RUb3RhbFRvU2Nyb2xsICE9PSB0b3RhbFRvU2Nyb2xsKSB7XG4gICAgICBzdGF0ZS5sYXN0VG90YWxUb1Njcm9sbCA9IHN0YXRlLnRvdGFsVG9TY3JvbGw7XG4gICAgICBzdGF0ZS50b3RhbFRvU2Nyb2xsID0gdG90YWxUb1Njcm9sbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3VsZFRyaWdnZXJFdmVudHMoYWx3YXlzQ2FsbGJhY2s6IGJvb2xlYW4sIHNob3VsZEZpcmVTY3JvbGxFdmVudDogYm9vbGVhbiwgaXNUcmlnZ2VyZWRDdXJyZW50VG90YWw6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gKGFsd2F5c0NhbGxiYWNrIHx8IHNob3VsZEZpcmVTY3JvbGxFdmVudCkgJiYgIWlzVHJpZ2dlcmVkQ3VycmVudFRvdGFsO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1RyaWdnZXJlZFNjcm9sbCh0b3RhbFRvU2Nyb2xsLCBzY3JvbGxTdGF0ZSwgaXNTY3JvbGxpbmdEb3duKSB7XG4gICAgcmV0dXJuIGlzU2Nyb2xsaW5nRG93blxuICAgICAgPyBzY3JvbGxTdGF0ZS50cmlnZ2VyZWQuZG93biA9PT0gdG90YWxUb1Njcm9sbFxuICAgICAgOiBzY3JvbGxTdGF0ZS50cmlnZ2VyZWQudXAgPT09IHRvdGFsVG9TY3JvbGw7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRyaWdnZXJlZEZsYWcoc2Nyb2xsLCBzdGF0ZSwgaXNTY3JvbGxpbmdEb3duKSB7XG4gICAgaWYgKGlzU2Nyb2xsaW5nRG93bikge1xuICAgICAgc3RhdGUudHJpZ2dlcmVkLmRvd24gPSBzY3JvbGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnRyaWdnZXJlZC51cCA9IHNjcm9sbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvSW5maW5pdGVTY3JvbGxBY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7XG4gICAgICBzY3JvbGxEb3duLFxuICAgICAgc3RhdHM6IHsgc2Nyb2xsZWQ6IGN1cnJlbnRTY3JvbGxQb3NpdGlvbiB9XG4gICAgfSA9IHJlc3BvbnNlO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBzY3JvbGxEb3duID8gJ0RPV04nIDogJ1VQJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgY3VycmVudFNjcm9sbFBvc2l0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95U2Nyb2xsZXIoKSB7XG4gICAgaWYgKHRoaXMuX3Njcm9sbGVyKSB7XG4gICAgICB0aGlzLl9zY3JvbGxlci51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=