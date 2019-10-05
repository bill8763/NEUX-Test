/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector, Inject } from '@angular/core';
import { MainMenuOption } from '@allianzSND/ui';
import { Language, TranslateService, APIFactory, APIDispatch, CheckPermissionService, DefaultLoginMgr, AppRouter, ConfigToken, APPMODE } from '@allianzSND/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { animate, style, transition, trigger, state } from '@angular/animations';
import { MenuService } from '../../service/menu.service';
import { format } from 'date-fns';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var MenuComponent = /** @class */ (function () {
    function MenuComponent(loginMgr, router, injector, translateService, APIFactory, dispatcher, checkPermissionService, menuService, routeReuseStrategy, APP_CONFIG) {
        this.loginMgr = loginMgr;
        this.router = router;
        this.injector = injector;
        this.translateService = translateService;
        this.APIFactory = APIFactory;
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var current;
            var _this_1 = this;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getMenuAPI, resp, filtered, backOption;
            var _this_1 = this;
            return tslib_1.__generator(this, function (_a) {
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
export { MenuComponent };
if (false) {
    /** @type {?} */
    MenuComponent.prototype.language;
    /** @type {?} */
    MenuComponent.prototype.leftMenu;
    /** @type {?} */
    MenuComponent.prototype.quickMenu;
    /** @type {?} */
    MenuComponent.prototype.updateTimeTitle;
    /** @type {?} */
    MenuComponent.prototype.logout;
    /** @type {?} */
    MenuComponent.prototype.moreTxt;
    /** @type {?} */
    MenuComponent.prototype.mobileMenuTitle;
    /** @type {?} */
    MenuComponent.prototype.menuMoreOpen;
    /** @type {?} */
    MenuComponent.prototype.menuHeaderOpen;
    /** @type {?} */
    MenuComponent.prototype.mobileContentHeight;
    /** @type {?} */
    MenuComponent.prototype.settingOpen;
    /** @type {?} */
    MenuComponent.prototype.updateTime;
    /**
     * @type {?}
     * @private
     */
    MenuComponent.prototype.baseRouter;
    /**
     * @type {?}
     * @private
     */
    MenuComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    MenuComponent.prototype.loginMgr;
    /**
     * @type {?}
     * @private
     */
    MenuComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    MenuComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    MenuComponent.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    MenuComponent.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    MenuComponent.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    MenuComponent.prototype.checkPermissionService;
    /**
     * @type {?}
     * @private
     */
    MenuComponent.prototype.menuService;
    /**
     * @type {?}
     * @private
     */
    MenuComponent.prototype.routeReuseStrategy;
    /**
     * @type {?}
     * @private
     */
    MenuComponent.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9tZW51LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsUUFBUSxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUE4QyxlQUFlLEVBQW1CLFNBQVMsRUFBaUIsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdPLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBeUVFLHVCQUNVLFFBQXlCLEVBQ3pCLE1BQWlCLEVBQ2pCLFFBQWtCLEVBQ2xCLGdCQUFrQyxFQUNsQyxVQUFzQixFQUN0QixVQUF1QixFQUN2QixzQkFBOEMsRUFDOUMsV0FBd0IsRUFDeEIsa0JBQXNDLEVBQ2pCLFVBQWU7UUFUcEMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixhQUFRLEdBQVIs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Q0FBOEM7Ozs7O0lBQzlDLG1DQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RvciwgSW5qZWN0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1haW5NZW51T3B0aW9uIH0gZnJvbSAnQGFsbGlhbnpTTkQvdWknO1xuaW1wb3J0IHsgTGFuZ3VhZ2UsIFRyYW5zbGF0ZVNlcnZpY2UsIEFQSUZhY3RvcnksIEFQSURpc3BhdGNoLCBDaGVja1Blcm1pc3Npb25TZXJ2aWNlLCBDdXN0b21Sb3V0ZXJSZXVzZVN0cmF0ZWd5LCBEYXRhU3luY1NlcnZpY2UsIERlZmF1bHRMb2dpbk1nciwgTm90aWZpY2F0aW9uTWdyLCBBcHBSb3V0ZXIsIERldmljZVNlcnZpY2UsIENvbmZpZ1Rva2VuLCBBUFBNT0RFIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZVJldXNlU3RyYXRlZ3ksIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgc3RhdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVudS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcihcbiAgICAgICd0b2dnbGVJdGVtQ29sbGFwc2VBbmltYXRpb24nLCBbXG4gICAgICBzdGF0ZSgnc2hvd24nLCBzdHlsZSh7XG4gICAgICAgIGhlaWdodDogJyonLFxuICAgICAgICBwYWRkaW5nVG9wOiAnKicsXG4gICAgICAgIHBhZGRpbmdCb3R0b206ICcqJyxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcbiAgICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICAgIHBhZGRpbmdUb3A6ICcwJyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogJzAnLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdzaG93biA9PiBoaWRkZW4nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBoZWlnaHQ6ICcqJyxcbiAgICAgICAgICBwYWRkaW5nVG9wOiAnKicsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogJyonLFxuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSksXG4gICAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nLCBzdHlsZSh7XG4gICAgICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICAgICAgcGFkZGluZ1RvcDogJzAnLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwJyxcbiAgICAgICAgfSkpLFxuXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBzaG93bicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIGhlaWdodDogJzAnLFxuICAgICAgICAgIHBhZGRpbmdUb3A6ICcwJyxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMCcsXG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbicsIHN0eWxlKHtcbiAgICAgICAgICBoZWlnaHQ6ICcqJyxcbiAgICAgICAgICBwYWRkaW5nVG9wOiAnKicsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogJyonLFxuICAgICAgICB9KSksXG4gICAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KSlcbiAgICAgIF0pLFxuICAgIF1cbiAgICApXG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHB1YmxpYyBsZWZ0TWVudTogQXJyYXk8TWFpbk1lbnVPcHRpb24+ID0gW107XG4gIHB1YmxpYyBxdWlja01lbnU6IEFycmF5PE1haW5NZW51T3B0aW9uPiA9IFtdO1xuICBwdWJsaWMgdXBkYXRlVGltZVRpdGxlOiBzdHJpbmcgPSB0aGlzLmxhbmd1YWdlLnVwZGF0ZVRpbWU7XG4gIHB1YmxpYyBsb2dvdXQ6IHN0cmluZyA9IHRoaXMubGFuZ3VhZ2UubG9nT3V0O1xuICBwdWJsaWMgbW9yZVR4dDogc3RyaW5nID0gdGhpcy5sYW5ndWFnZS5tb3JlO1xuICBwdWJsaWMgbW9iaWxlTWVudVRpdGxlID0gdGhpcy5sYW5ndWFnZS5tYWluTWVudTtcbiAgcHVibGljIG1lbnVNb3JlT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbWVudUhlYWRlck9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIG1vYmlsZUNvbnRlbnRIZWlnaHQ6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBzZXR0aW5nT3BlbiA9IGZhbHNlO1xuICBwdWJsaWMgdXBkYXRlVGltZTogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBiYXNlUm91dGVyOiBSb3V0ZXIgPSBudWxsO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dpbk1ncjogRGVmYXVsdExvZ2luTWdyLFxuICAgIHByaXZhdGUgcm91dGVyOiBBcHBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSxcbiAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLFxuICAgIHByaXZhdGUgY2hlY2tQZXJtaXNzaW9uU2VydmljZTogQ2hlY2tQZXJtaXNzaW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlUmV1c2VTdHJhdGVneTogUm91dGVSZXVzZVN0cmF0ZWd5LFxuICAgIEBJbmplY3QoQ29uZmlnVG9rZW4pIHByaXZhdGUgQVBQX0NPTkZJRzogYW55XG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG5cbiAgICB0aGlzLm1lbnVTZXJ2aWNlLmdldExhc3RVcGRhdGVUaW1lKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKHRpbWUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUgbGFzdFVwZGF0ZVRpbWUgdXBkYXRlOlwiLCB0aW1lKTtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lID0gISF0aW1lID8gZm9ybWF0KHRpbWUsIFwiZGQgTU1NIHl5eXkgSEg6bW1cIikgOiBudWxsO1xuICAgICAgfSlcblxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRVcGRhdGVTdWJqZWN0KClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkTWVudSgpO1xuICAgICAgfSk7XG5cbiAgfVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkTWVudSgpO1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5sZWZ0TWVudS5maWx0ZXIoeCA9PiB0aGlzLmlzUm91dGVBY3RpdmUoeC5nZXRMaW5rKCkpKTtcbiAgICBpZiAoY3VycmVudC5sZW5ndGggPiAwKSB7XG4gICAgICBhd2FpdCB0aGlzLm1lbnVTZXJ2aWNlLnJlZnJlc2hVcGRhdGVUaW1lKGN1cnJlbnRbMF0uZ2V0Q29kZSgpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGFzeW5jIG1lbnVDbGljayhvYmosIGUpIHtcbiAgICBjb25zb2xlLmxvZyhcIm1lbnVDbGljazpcIiwgb2JqKTtcbiAgICBpZiAob2JqLmdldENvZGUoKSA9PT0gJ0JhY2tNYWluQXBwJykge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihvYmouZ2V0TGluaygpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5zZXRDdXJyZW50TWVudU9iamVjdChvYmopO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2xlYXJIaXN0b3J5KCk7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSgnTWVudUxvYWRpbmcnKTtcbiAgICB9XG4gIH1cbiAgdG9nZ2xlU2V0dGluZ09wZW4oKSB7XG4gICAgdGhpcy5zZXR0aW5nT3BlbiA9ICF0aGlzLnNldHRpbmdPcGVuO1xuICAgIGlmICh0aGlzLnNldHRpbmdPcGVuKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3VpLXJvdycpWzBdLmNsaWVudEhlaWdodCAtIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3VpLW1haW4tbG9nbycpWzBdLmNsaWVudEhlaWdodCAtIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NldHRpbmctaW5uZXItbGlzdC13cmFwcGVyJylbMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgICBsZXQgbWVudVNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3VpLW1haW4tbWVudScpO1xuICAgICAgICBsZXQgbWVudVNjcm9sbENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluLW1lbnUtdWwnKTtcbiAgICAgICAgbGV0IG1lbnVTY3JvbGxDb250ZW50SGVpZ2h0ID0gbWVudVNjcm9sbENvbnRlbnRbMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgICBjb25zb2xlLmxvZyhtZW51U2Nyb2xsQ29udGVudEhlaWdodCAtIGNvbnRhaW5lckhlaWdodCk7XG4gICAgICAgIG1lbnVTY3JvbGxDb250YWluZXJbMF0uc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogbWVudVNjcm9sbENvbnRlbnRIZWlnaHQgLSBjb250YWluZXJIZWlnaHQsXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKG1lbnVTY3JvbGxDb250YWluZXJbMF0uc2Nyb2xsVG9wKTtcbiAgICAgIH0sIDcwMClcbiAgICB9XG4gIH1cbiAgY2hlY2tTZXR0aW5nT3Blbk9yTm90KCkge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdPcGVuID8gJ3Nob3duJyA6ICdoaWRkZW4nO1xuICB9XG5cbiAgY2xlYXJIaXN0b3J5KCkge1xuICAgIHRoaXMubWVudU1vcmVPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5tZW51SGVhZGVyT3BlbiA9IGZhbHNlO1xuICAgIC8vICg8Q3VzdG9tUmV1c2VTdHJhdGVneT50aGlzLnJvdXRlUmV1c2UpLmNsZWFySGFuZGxlcnMoKTtcbiAgICBpZiAoKDxDdXN0b21Sb3V0ZXJSZXVzZVN0cmF0ZWd5PnRoaXMucm91dGVSZXVzZVN0cmF0ZWd5KS5kZWxldGVSb3V0ZVNuYXBzaG90KSB7XG4gICAgICAoPEN1c3RvbVJvdXRlclJldXNlU3RyYXRlZ3k+dGhpcy5yb3V0ZVJldXNlU3RyYXRlZ3kpLmRlbGV0ZVJvdXRlU25hcHNob3QoKTtcbiAgICB9XG4gIH1cblxuXG4gIG9uUm91dGVyT3V0bGV0QWN0aXZhdGUoY29tcG9uZW50OiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLndhcm4oJ29uUm91dGVyT3V0bGV0QWN0aXZhdGUnLCBjb21wb25lbnQpO1xuICAgIC8vIGNvbnNvbGUud2FybignbW9iaWxlQ29udGVudEhlaWdodCcsIHRoaXMubW9iaWxlQ29udGVudEhlaWdodCk7XG5cbiAgICAvLyB1aS1tYWluLWxlZnQgc2V0VGltZW91dCAxMDBtcyB0byBjYWxjdWxhdGUgaGVpZ2h0XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGNvbnNvbGUud2FybignbWFpbiBtb2JpbGVDb250ZW50SGVpZ2h0JywgX3RoaXMubW9iaWxlQ29udGVudEhlaWdodCk7XG5cbiAgICAgIGNvbXBvbmVudC5wYXJlbnRIZWlnaHQgPSBfdGhpcy5tb2JpbGVDb250ZW50SGVpZ2h0O1xuICAgIH0sIDE1MCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRNZW51KCkge1xuICAgIGxldCBnZXRNZW51QVBJID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldE1lbnVcIik7XG4gICAgbGV0IHJlc3AgPSBhd2FpdCB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZ2V0TWVudUFQSSkudG9Qcm9taXNlKCk7XG4gICAgbGV0IGZpbHRlcmVkID0gdGhpcy5jaGVja1Blcm1pc3Npb25TZXJ2aWNlLmF1dGhNZW51KHJlc3AubWFwKHggPT4geC5wYWdlSUQpKTtcbiAgICB0aGlzLmxlZnRNZW51ID0gcmVzcFxuICAgICAgLmZpbHRlcih4ID0+IGZpbHRlcmVkLmluZGV4T2YoeC5wYWdlSUQpID4gLTEpXG4gICAgICAubWFwKHggPT4gbmV3IE1haW5NZW51T3B0aW9uKHRoaXMuZ2V0VXJsKHgucGFnZUlEKSwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSh4LmNvZGUpLCB4LnBhZ2VJRCwgeC5pY29uKSlcblxuICAgIHRoaXMucXVpY2tNZW51ID0gcmVzcFxuICAgICAgLmZpbHRlcih4ID0+IHgucXVpY2tNZW51KVxuICAgICAgLmZpbHRlcih4ID0+IGZpbHRlcmVkLmluZGV4T2YoeC5wYWdlSUQpID4gLTEpXG4gICAgICAubWFwKHggPT4gbmV3IE1haW5NZW51T3B0aW9uKHRoaXMuZ2V0VXJsKHgucGFnZUlEKSwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSh4LmNvZGUpLCB4LnBhZ2VJRCwgeC5pY29uKSlcblxuICAgIGlmICh0aGlzLkFQUF9DT05GSUcuQVBQX01PREUgPT09IEFQUE1PREUuSW50ZWdyYXRpb24pIHtcbiAgICAgIGxldCBiYWNrT3B0aW9uID0gbmV3IE1haW5NZW51T3B0aW9uKHRoaXMuQVBQX0NPTkZJRy5JTlRFR1JBVElPTl9CQUNLX1VSTCwgXCJCYWNrXCIsIFwiQmFja01haW5BcHBcIiwgXCJuYXYtaWNvbi1ob21lXCIpO1xuICAgICAgdGhpcy5xdWlja01lbnUudW5zaGlmdChiYWNrT3B0aW9uKTtcbiAgICAgIHRoaXMubGVmdE1lbnUucHVzaChiYWNrT3B0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInJlc3A6XCIsIHJlc3ApO1xuICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyZWQ6XCIsIGZpbHRlcmVkKTtcbiAgICBjb25zb2xlLmxvZygnbGVmdE1lbnU6JywgdGhpcy5sZWZ0TWVudSk7XG4gICAgY29uc29sZS5sb2coXCJxdWlja01lbnU6XCIsIHRoaXMucXVpY2tNZW51KTtcbiAgfVxuXG5cbiAgcHVibGljIGxvZ291dEhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNsZWFySGlzdG9yeSgpO1xuICAgIHRoaXMubG9naW5NZ3IubG9nb3V0KCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VXJsKGZ1bmM6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5nZXRVcmwoZnVuYyk7XG4gIH1cblxuICBwdWJsaWMgaXNSb3V0ZUFjdGl2ZShsaW5rOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYmFzZVJvdXRlcilcbiAgICAgIHRoaXMuYmFzZVJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgcmV0dXJuIHRoaXMuYmFzZVJvdXRlci5pc0FjdGl2ZShsaW5rLCBmYWxzZSk7XG4gIH1cblxufVxuIl19