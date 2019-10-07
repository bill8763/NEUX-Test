import { animate, style, transition, trigger, state } from '@angular/animations';
import { __awaiter, __generator } from 'tslib';
import { Injectable, ErrorHandler, NgModule, defineInjectable, inject, Component, Injector, Inject } from '@angular/core';
import { format } from 'date-fns';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { MainMenuOption, UIModule } from '@allianzSND/ui';
import { CommonModule } from '@angular/common';
import { APIFactory, APIDispatch, APPError, CoreModule, Language, APPMODE, DefaultLoginMgr, AppRouter, TranslateService, CheckPermissionService, ConfigToken } from '@allianzSND/core';
import { RouteReuseStrategy, Router, RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MenuService = /** @class */ (function () {
    function MenuService(APIFactory$$1, dispatcher, errorHandler) {
        this.APIFactory = APIFactory$$1;
        this.dispatcher = dispatcher;
        this.errorHandler = errorHandler;
        this._lastUpdateTime = null;
        this._lastUpdateTimeSubject = new BehaviorSubject(this._lastUpdateTime);
    }
    /**
     * @param {?} func
     * @return {?}
     */
    MenuService.prototype.refreshUpdateTime = /**
     * @param {?} func
     * @return {?}
     */
    function (func) {
        return __awaiter(this, void 0, void 0, function () {
            var time;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getLastUpdateTimeFromDB(func)];
                    case 1:
                        time = _a.sent();
                        this._lastUpdateTime = time;
                        this._lastUpdateTimeSubject.next(this._lastUpdateTime);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    MenuService.prototype.getLastUpdateTime = /**
     * @return {?}
     */
    function () {
        return this._lastUpdateTimeSubject.asObservable();
    };
    /**
     * @private
     * @param {?} func
     * @return {?}
     */
    MenuService.prototype._getLastUpdateTimeFromDB = /**
     * @private
     * @param {?} func
     * @return {?}
     */
    function (func) {
        return __awaiter(this, void 0, void 0, function () {
            var updateTimeAPI, resp, filtered, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        func = this.convertPageIDtoFunc(func);
                        updateTimeAPI = this.APIFactory.getAPI("getUpdateTimeList");
                        return [4 /*yield*/, this.dispatcher.dispatch(updateTimeAPI).toPromise()];
                    case 1:
                        resp = _a.sent();
                        console.log("getUpdateTimeList resp:", resp);
                        filtered = resp.Body.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.MainFunc === func; }));
                        return [2 /*return*/, filtered.length > 0 ? new Date(filtered[0].BackendTime) : null];
                    case 2:
                        error_1 = _a.sent();
                        this.errorHandler.handleError(new APPError("F00900", error_1.message));
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} pageID
     * @return {?}
     */
    MenuService.prototype.convertPageIDtoFunc = /**
     * @private
     * @param {?} pageID
     * @return {?}
     */
    function (pageID) {
        /** @type {?} */
        var map = {
            "Dashboard": "Homepage",
            "Customers": "Customer",
            "Goal": "Goal_Setting",
            "Calendar": "Calendar",
            "Progress": "Progress"
        };
        return map[pageID] || '';
    };
    MenuService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    MenuService.ctorParameters = function () { return [
        { type: APIFactory },
        { type: APIDispatch },
        { type: ErrorHandler }
    ]; };
    /** @nocollapse */ MenuService.ngInjectableDef = defineInjectable({ factory: function MenuService_Factory() { return new MenuService(inject(APIFactory), inject(APIDispatch), inject(ErrorHandler)); }, token: MenuService, providedIn: "root" });
    return MenuService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MenuComponent = /** @class */ (function () {
    function MenuComponent(loginMgr, router, injector, translateService, APIFactory$$1, dispatcher, checkPermissionService, menuService, routeReuseStrategy, APP_CONFIG) {
        this.loginMgr = loginMgr;
        this.router = router;
        this.injector = injector;
        this.translateService = translateService;
        this.APIFactory = APIFactory$$1;
        this.dispatcher = dispatcher;
        this.checkPermissionService = checkPermissionService;
        this.menuService = menuService;
        this.routeReuseStrategy = routeReuseStrategy;
        this.APP_CONFIG = APP_CONFIG;
        this.language = new Language();
        this.leftMenu = [];
        this.quickMenu = [];
        this.updateTimeTitle = this.language.updateTime;
        this.logout = this.language.logOut;
        this.moreTxt = this.language.more;
        this.mobileMenuTitle = this.language.mainMenu;
        this.menuMoreOpen = false;
        this.menuHeaderOpen = false;
        this.mobileContentHeight = 0;
        this.settingOpen = false;
        this.updateTime = null;
        this.baseRouter = null;
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        this.init();
        this.menuService.getLastUpdateTime()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} time
         * @return {?}
         */
        function (time) {
            console.log("menu lastUpdateTime update:", time);
            _this_1.updateTime = !!time ? format(time, "dd MMM yyyy HH:mm") : null;
        }));
        this.translateService.getUpdateSubject()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this_1.loadMenu();
        }));
    };
    /**
     * @return {?}
     */
    MenuComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var current;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadMenu()];
                    case 1:
                        _a.sent();
                        current = this.leftMenu.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return _this_1.isRouteActive(x.getLink()); }));
                        if (!(current.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.menuService.refreshUpdateTime(current[0].getCode())];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} obj
     * @param {?} e
     * @return {?}
     */
    MenuComponent.prototype.menuClick = /**
     * @param {?} obj
     * @param {?} e
     * @return {?}
     */
    function (obj, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("menuClick:", obj);
                if (obj.getCode() === 'BackMainApp') {
                    window.location.assign(obj.getLink());
                }
                else {
                    this.router.setCurrentMenuObject(obj);
                    e.stopPropagation();
                    e.preventDefault();
                    this.clearHistory();
                    this.router.navigate('MenuLoading');
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @return {?}
     */
    MenuComponent.prototype.toggleSettingOpen = /**
     * @return {?}
     */
    function () {
        this.settingOpen = !this.settingOpen;
        if (this.settingOpen) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var containerHeight = document.getElementsByClassName('ui-row')[0].clientHeight - document.getElementsByClassName('ui-main-logo')[0].clientHeight - document.getElementsByClassName('setting-inner-list-wrapper')[0].clientHeight;
                /** @type {?} */
                var menuScrollContainer = document.getElementsByClassName('ui-main-menu');
                /** @type {?} */
                var menuScrollContent = document.getElementsByClassName('main-menu-ul');
                /** @type {?} */
                var menuScrollContentHeight = menuScrollContent[0].clientHeight;
                console.log(menuScrollContentHeight - containerHeight);
                menuScrollContainer[0].scrollTo({
                    top: menuScrollContentHeight - containerHeight,
                    behavior: 'smooth'
                });
                console.log(menuScrollContainer[0].scrollTop);
            }), 700);
        }
    };
    /**
     * @return {?}
     */
    MenuComponent.prototype.checkSettingOpenOrNot = /**
     * @return {?}
     */
    function () {
        return this.settingOpen ? 'shown' : 'hidden';
    };
    /**
     * @return {?}
     */
    MenuComponent.prototype.clearHistory = /**
     * @return {?}
     */
    function () {
        this.menuMoreOpen = false;
        this.menuHeaderOpen = false;
        // (<CustomReuseStrategy>this.routeReuse).clearHandlers();
        if (((/** @type {?} */ (this.routeReuseStrategy))).deleteRouteSnapshot) {
            ((/** @type {?} */ (this.routeReuseStrategy))).deleteRouteSnapshot();
        }
    };
    /**
     * @param {?} component
     * @return {?}
     */
    MenuComponent.prototype.onRouterOutletActivate = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        // console.warn('onRouterOutletActivate', component);
        // console.warn('mobileContentHeight', this.mobileContentHeight);
        // console.warn('onRouterOutletActivate', component);
        // console.warn('mobileContentHeight', this.mobileContentHeight);
        // ui-main-left setTimeout 100ms to calculate height
        /** @type {?} */
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            // console.warn('main mobileContentHeight', _this.mobileContentHeight);
            component.parentHeight = _this.mobileContentHeight;
        }), 150);
    };
    /**
     * @private
     * @return {?}
     */
    MenuComponent.prototype.loadMenu = /**
     * @private
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var getMenuAPI, resp, filtered, backOption;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getMenuAPI = this.APIFactory.getAPI("getMenu");
                        return [4 /*yield*/, this.dispatcher.dispatch(getMenuAPI).toPromise()];
                    case 1:
                        resp = _a.sent();
                        filtered = this.checkPermissionService.authMenu(resp.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.pageID; })));
                        this.leftMenu = resp
                            .filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return filtered.indexOf(x.pageID) > -1; }))
                            .map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return new MainMenuOption(_this_1.getUrl(x.pageID), _this_1.translateService.translate(x.code), x.pageID, x.icon); }));
                        this.quickMenu = resp
                            .filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.quickMenu; }))
                            .filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return filtered.indexOf(x.pageID) > -1; }))
                            .map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return new MainMenuOption(_this_1.getUrl(x.pageID), _this_1.translateService.translate(x.code), x.pageID, x.icon); }));
                        if (this.APP_CONFIG.APP_MODE === APPMODE.Integration) {
                            backOption = new MainMenuOption(this.APP_CONFIG.INTEGRATION_BACK_URL, "Back", "BackMainApp", "nav-icon-home");
                            this.quickMenu.unshift(backOption);
                            this.leftMenu.push(backOption);
                        }
                        console.log("resp:", resp);
                        console.log("filtered:", filtered);
                        console.log('leftMenu:', this.leftMenu);
                        console.log("quickMenu:", this.quickMenu);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MenuComponent.prototype.logoutHandler = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        this.clearHistory();
        this.loginMgr.logout();
    };
    /**
     * @param {?} func
     * @return {?}
     */
    MenuComponent.prototype.getUrl = /**
     * @param {?} func
     * @return {?}
     */
    function (func) {
        return this.router.getUrl(func);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    MenuComponent.prototype.isRouteActive = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        if (!this.baseRouter)
            this.baseRouter = this.injector.get(Router);
        return this.baseRouter.isActive(link, false);
    };
    MenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-menu',
                    template: "<app-ui-main-left [moreTitle]=\"mobileMenuTitle | translate\" [updateTimeTitle]=\"updateTimeTitle | translate\" [updateTime]=\"updateTime\" [menuHeaderTitle]=\"mobileMenuTitle | translate\" [(isMoreOpen)]=\"menuMoreOpen\"\n  [(isMenuHeaderOpen)]=\"menuHeaderOpen\" [(mobileContentHeight)]=\"mobileContentHeight\">\n  <ng-template #menuListAll>\n    <li *ngFor=\"let menuObj of leftMenu\" class=\"main-menu-li\">\n      <a class=\"main-menu-link\" Action [action]=\"'menuClick'+menuObj.getName()\"\n        [class.active]=\"isRouteActive(menuObj.getLink())\" (actionClick)=\"menuClick(menuObj,$event)\" [id]=\"menuObj.getName()\">\n        <img class=\"main-menu-icon\" src=\"assets/img/{{menuObj.getImgSrc()}}.svg\" />\n        <img class=\"main-menu-icon-bl\" src=\"assets/img/{{menuObj.getImgSrc()}}-bl.svg\" />\n        <p class=\"main-menu-title\">{{menuObj.getName()}}</p>\n      </a>\n    </li>\n  </ng-template>\n\n  <!-- pc -->\n  <ul menu-list class=\"main-menu-ul\">\n    <ng-container *ngTemplateOutlet=\"menuListAll\"></ng-container>\n  </ul>\n  <!-- end: menu-list -->\n\n  <div menu-bottom class=\"main-menu-logout\">\n    <a href=\"#\" class=\"logout-item\" Action action=\"logOut\" (actionClick)=\"logoutHandler($event)\">\n      <img class=\"main-menu-icon\" src=\"assets/img/nav-icon-logout.svg\" />\n      <img class=\"main-menu-icon-bl\" src=\"assets/img/nav-icon-logout-bl.svg\" />\n      <span class=\"txt\">{{logout | translate}}</span>\n    </a>\n  </div>\n  <!-- end: menu-bottom -->\n\n  <!-- sqlite-executor -->\n  <div menu-bottom class=\"main-menu-logout\">\n    <a [routerLink]=\"['/sqliteExecutor']\" class=\"logout-item\">\n      <img class=\"main-menu-icon\" src=\"assets/img/nav-icon-logout.svg\" />\n      <img class=\"main-menu-icon-bl\" src=\"assets/img/nav-icon-logout-bl.svg\" />\n      <span class=\"txt\">SqliteExecutor</span>\n    </a>\n  </div>\n  <!-- end: sqlite-executor -->\n\n\n  <!-- mobile -->\n  <ul menu-header class=\"main-menu-nav-mobile-ul\">\n    <ng-container *ngTemplateOutlet=\"menuListAll\"></ng-container>\n  </ul>\n  <!-- end: menu-header -->\n\n  <ul menu-footer class=\"main-menu-footer-ul\">\n    <ng-template *ngIf=\"quickMenu.length > 5; then moreBlock else allBlock\"></ng-template>\n\n    <ng-template #allBlock>\n      <ng-container *ngTemplateOutlet=\"quickMenuListAll\"></ng-container>\n    </ng-template>\n    <!-- end: allBlock -->\n\n\n    <ng-template #quickMenuListAll>\n      <li *ngFor=\"let menuObj of quickMenu\" class=\"main-menu-li\">\n        <a class=\"main-menu-link\" Action [action]=\"'menuClick'+menuObj.getName()\"\n          (actionClick)=\"menuClick(menuObj,$event)\" [class.active]=\"isRouteActive(menuObj.getLink())\">\n          <img class=\"main-menu-icon\" src=\"assets/img/{{menuObj.getImgSrc()}}.svg\" />\n          <img class=\"main-menu-icon-bl\" src=\"assets/img/{{menuObj.getImgSrc()}}-bl.svg\" />\n          <p class=\"main-menu-title\">{{menuObj.getName()}}</p>\n        </a>\n      </li>\n    </ng-template>\n\n    <ng-template #moreBlock>\n      <li *ngFor=\"let menuObj of quickMenu.slice(0,4)\" class=\"main-menu-li\">\n        <a class=\"main-menu-link\" (click)=\"menuClick(menuObj,$event)\" [class.active]=\"isRouteActive(menuObj.getLink())\">\n          <img class=\"main-menu-icon\" src=\"assets/img/{{menuObj.getImgSrc()}}.svg\" />\n          <p class=\"main-menu-title\">{{menuObj.getName()}}</p>\n        </a>\n      </li>\n      <li class=\"main-menu-li\">\n        <div class=\"main-menu-link main-menu-link-more\" (click)=\"menuMoreOpen = !menuMoreOpen\">\n          <img class=\"main-menu-icon\" src=\"assets/img/nav-icon-more.svg\" />\n          <p class=\"main-menu-title\">{{moreTxt | translate}}</p>\n        </div>\n      </li>\n    </ng-template>\n    <!-- end: moreBlock -->\n  </ul>\n  <!-- end: menu-footer -->\n\n  <ul menu-footer-more class=\"main-menu-nav-mobile-ul\">\n    <li *ngFor=\"let menuObj of quickMenu.slice(4)\" class=\"main-menu-li\">\n      <a class=\"main-menu-link\" Action [action]=\"'menuClick'+menuObj.getName()\"\n        (actionClick)=\"menuClick(menuObj,$event)\" [class.active]=\"isRouteActive(menuObj.getLink())\">\n        <img class=\"main-menu-icon\" src=\"assets/img/{{menuObj.getImgSrc()}}.svg\" />\n        <img class=\"main-menu-icon-bl\" src=\"assets/img/{{menuObj.getImgSrc()}}-bl.svg\" />\n        <p class=\"main-menu-title\">{{menuObj.getName()}}</p>\n      </a>\n    </li>\n    <!-- <li class=\"main-menu-li collapsable\" [ngClass]=\"this.settingOpen? 'active':'' \">\n      <a class=\"main-menu-link\"  (click)=\"toggleSettingOpen()\">\n        <img class=\"main-menu-icon\" src=\"assets/img/nav-icon-setting.svg\" />\n        <img class=\"main-menu-icon-bl\" src=\"assets/img/nav-icon-setting-bl.svg\" />\n        <p class=\"main-menu-title\">\u7CFB\u7D71\u7BA1\u7406</p>\n      </a>\n    </li>\n    <li class=\"setting-collapse-content\" [@toggleItemCollapseAnimation]=\"checkSettingOpenOrNot()\">\n        <div class=\"setting-inner-list-wrapper\">\n          <ul class=\"setting-inner-list\">\n            <li class=\"setting-inner-list-item\" *ngFor=\"let menuObj of settingFuncArray\" >\n              <a class=\"inner-link\" [routerLink]=\"[getUrl(menuObj.getLink())]\" (click)=\"menuClick(menuObj,$event)\">\n                <span>{{menuObj.getName()}}</span>\n              </a>\n            </li>\n        </ul>\n      </div>\n    </li> -->\n  </ul>\n  <!-- end: menu-footer-more -->\n\n  <!-- content -->\n  <router-outlet main (activate)=\"onRouterOutletActivate($event)\"></router-outlet>\n</app-ui-main-left>\n",
                    animations: [
                        trigger('toggleItemCollapseAnimation', [
                            state('shown', style({
                                height: '*',
                                paddingTop: '*',
                                paddingBottom: '*',
                                opacity: 1
                            })),
                            state('hidden', style({
                                height: '0',
                                paddingTop: '0',
                                paddingBottom: '0',
                                opacity: 0
                            })),
                            transition('shown => hidden', [
                                style({
                                    height: '*',
                                    paddingTop: '*',
                                    paddingBottom: '*',
                                    opacity: 1
                                }),
                                animate('200ms ease-in', style({
                                    opacity: 0
                                })),
                                animate('200ms ease-in', style({
                                    height: '0',
                                    paddingTop: '0',
                                    paddingBottom: '0',
                                })),
                            ]),
                            transition('hidden => shown', [
                                style({
                                    height: '0',
                                    paddingTop: '0',
                                    paddingBottom: '0',
                                    opacity: 0
                                }),
                                animate('500ms ease-in', style({
                                    height: '*',
                                    paddingTop: '*',
                                    paddingBottom: '*',
                                })),
                                animate('200ms ease-in', style({
                                    opacity: 1
                                }))
                            ]),
                        ])
                    ],
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}[class^=main-menu-]{list-style-type:none}[class^=main-menu-] .main-menu-link{display:inline-block;width:100%}[class^=main-menu-] .main-menu-link.active{background-color:rgba(0,0,0,.25)}[class^=main-menu-] .main-menu-link.disabled{pointer-events:none;cursor:default}[class^=main-menu-] .main-menu-icon-bl{display:none}[class^=main-menu-] [class=main-menu-icon]{-webkit-tap-highlight-color:transparent}.main-menu-ul .main-menu-li.collapsable.active{background-color:rgba(0,0,0,.25)}.main-menu-ul .main-menu-li.collapsable.active .main-menu-link .main-menu-title:after{background-image:url(/assets/img/icon-card-04w.svg)}.main-menu-ul .main-menu-li.collapsable .main-menu-link .main-menu-title{position:relative}.main-menu-ul .main-menu-li.collapsable .main-menu-link .main-menu-title:after{content:'';position:absolute;-webkit-animation:1.5s infinite bounce;animation:1.5s infinite bounce;right:0;top:40%;display:inline-block;background-image:url(/assets/img/icon-card-03w.svg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;width:12px;height:12px;background-size:cover;margin-right:-5px}@media screen and (max-width:1024px){.main-menu-ul .main-menu-li.collapsable .main-menu-link .main-menu-title:after{width:8px;height:8px}}.main-menu-ul .setting-collapse-content{overflow:hidden}.main-menu-ul .setting-collapse-content .setting-inner-list-wrapper .setting-inner-list{background-color:rgba(38,38,38,.25)}.main-menu-ul .setting-collapse-content .setting-inner-list-wrapper .setting-inner-list .setting-inner-list-item{padding-left:16px;min-height:42px;display:flex;align-items:center;font-size:.875rem;padding-left:calc(20px + 1em)}.main-menu-ul .setting-collapse-content .setting-inner-list-wrapper .setting-inner-list .setting-inner-list-item span{font-size:.875rem;color:#fff;font-weight:700}.main-menu-ul .main-menu-link{text-decoration:none;display:inline-block;width:100%;padding:5px 60px 15px 20px;text-align:center}.main-menu-ul .main-menu-link img{max-width:35px;width:100%}@media screen and (min-width:1025px){.main-menu-ul .main-menu-link img{max-width:3.5vw}}.main-menu-ul .main-menu-title{margin:0;font-size:.875rem;font-weight:700;line-height:1.43;letter-spacing:.2px}.main-menu-footer-ul{display:flex;justify-content:space-around;width:100%;background-color:#003781;color:#fff;text-align:center}.main-menu-footer-ul .main-menu-li{flex:1;min-width:20%}.main-menu-footer-ul .main-menu-li:nth-child(n+6){display:none}.main-menu-footer-ul .main-menu-link{display:inline-block;width:100%;padding-top:5px;font-size:0}.main-menu-footer-ul .main-menu-link.main-menu-link-more .main-menu-icon{width:20px}.main-menu-footer-ul .main-menu-icon{display:inline-block;width:30px;height:30px}.main-menu-footer-ul .main-menu-title{margin:0;font-size:.75rem;font-weight:700;line-height:1.6;letter-spacing:.4px;-webkit-transform:scale(.83);transform:scale(.83)}::ng-deep.menuMoreOpen .main-menu-link.active{background-color:transparent!important}::ng-deep.menuMoreOpen .main-menu-link.main-menu-link-more{background-color:rgba(0,0,0,.25)}.main-menu-nav-mobile-ul .main-menu-li{border-bottom:1px solid #d9d9d9}.main-menu-nav-mobile-ul .main-menu-li.collapsable.active .main-menu-link .main-menu-title:after{background-image:url(/assets/img/icon-arrow-down-blue3.svg)}.main-menu-nav-mobile-ul .main-menu-li.collapsable .main-menu-link .main-menu-title:after{background-image:url(/assets/img/icon-arrow-down-blue2.svg);-webkit-animation:1.5s infinite bounce;animation:1.5s infinite bounce}.main-menu-nav-mobile-ul .main-menu-link{display:flex;align-items:center}.main-menu-nav-mobile-ul .main-menu-title{flex:1;margin:0;padding:15px 24px 15px 0;position:relative;font-size:1rem;font-weight:600;line-height:1.5;letter-spacing:normal;text-align:center;color:#007ab3}.main-menu-nav-mobile-ul .main-menu-title:after{content:'';position:absolute;top:calc(50% - 12px);right:0;display:inline-block;width:24px;height:24px;background-image:url(assets/img/nav-icon-right.svg);background-repeat:no-repeat;background-size:24px}.main-menu-nav-mobile-ul .setting-collapse-content .setting-inner-list-wrapper .setting-inner-list .setting-inner-list-item{padding-left:16px;min-height:50px;display:flex;align-items:center}.main-menu-nav-mobile-ul .setting-collapse-content .setting-inner-list-wrapper .setting-inner-list .setting-inner-list-item:active{background-color:#0068b7}.main-menu-nav-mobile-ul .setting-collapse-content .setting-inner-list-wrapper .setting-inner-list .setting-inner-list-item:active span{color:#fff}.main-menu-nav-mobile-ul .setting-collapse-content .setting-inner-list-wrapper .setting-inner-list .setting-inner-list-item span{font-size:1rem;color:#0068b7;font-weight:700}.main-menu-nav-mobile-ul .main-menu-link{display:flex;align-items:center;text-decoration:none}.main-menu-nav-mobile-ul .main-menu-link.active{background-color:transparent}.main-menu-nav-mobile-ul .main-menu-icon{display:none}.main-menu-nav-mobile-ul .main-menu-icon-bl{display:inline-block;width:30px}.main-menu-logout{padding:20px}.main-menu-logout img{vertical-align:top}.main-menu-logout .txt{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.2px;color:#fff}.main-menu-logout .txt:not(:first-child){margin-left:10px}@media screen and (max-width:1023px){.main-menu-logout{padding:0}.main-menu-logout .main-menu-icon{display:none}.main-menu-logout .main-menu-icon-bl{display:inline-block}.main-menu-logout .txt{color:#0068b7}}@media screen and (max-width:374px){.main-menu-footer-ul .main-menu-title{display:flex;justify-content:center;white-space:nowrap}}@-webkit-keyframes bounce{20%,53%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-3px,0);transform:translate3d(0,-3px,0)}90%{-webkit-transform:translate3d(0,-1px,0);transform:translate3d(0,-1px,0)}}@keyframes bounce{20%,53%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-3px,0);transform:translate3d(0,-3px,0)}90%{-webkit-transform:translate3d(0,-1px,0);transform:translate3d(0,-1px,0)}}"]
                }] }
    ];
    MenuComponent.ctorParameters = function () { return [
        { type: DefaultLoginMgr },
        { type: AppRouter },
        { type: Injector },
        { type: TranslateService },
        { type: APIFactory },
        { type: APIDispatch },
        { type: CheckPermissionService },
        { type: MenuService },
        { type: RouteReuseStrategy },
        { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
    ]; };
    return MenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        UIModule,
                        CoreModule,
                        FormsModule
                    ],
                    declarations: [MenuComponent],
                    exports: [MenuComponent]
                },] }
    ];
    return MenuModule;
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

export { MenuModule, MenuService, MenuComponent, MenuComponent as ɵa, MenuService as ɵb };

//# sourceMappingURL=allianzSND-menu.js.map