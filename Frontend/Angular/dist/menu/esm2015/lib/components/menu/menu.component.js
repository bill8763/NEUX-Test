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
export class MenuComponent {
    /**
     * @param {?} loginMgr
     * @param {?} router
     * @param {?} injector
     * @param {?} translateService
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} checkPermissionService
     * @param {?} menuService
     * @param {?} routeReuseStrategy
     * @param {?} APP_CONFIG
     */
    constructor(loginMgr, router, injector, translateService, APIFactory, dispatcher, checkPermissionService, menuService, routeReuseStrategy, APP_CONFIG) {
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
    ngOnInit() {
        this.init();
        this.menuService.getLastUpdateTime()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} time
         * @return {?}
         */
        time => {
            console.log("menu lastUpdateTime update:", time);
            this.updateTime = !!time ? format(time, "dd MMM yyyy HH:mm") : null;
        }));
        this.translateService.getUpdateSubject()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.loadMenu();
        }));
    }
    /**
     * @return {?}
     */
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.loadMenu();
            /** @type {?} */
            let current = this.leftMenu.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => this.isRouteActive(x.getLink())));
            if (current.length > 0) {
                yield this.menuService.refreshUpdateTime(current[0].getCode());
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @param {?} obj
     * @param {?} e
     * @return {?}
     */
    menuClick(obj, e) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        });
    }
    /**
     * @return {?}
     */
    toggleSettingOpen() {
        this.settingOpen = !this.settingOpen;
        if (this.settingOpen) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                let containerHeight = document.getElementsByClassName('ui-row')[0].clientHeight - document.getElementsByClassName('ui-main-logo')[0].clientHeight - document.getElementsByClassName('setting-inner-list-wrapper')[0].clientHeight;
                /** @type {?} */
                let menuScrollContainer = document.getElementsByClassName('ui-main-menu');
                /** @type {?} */
                let menuScrollContent = document.getElementsByClassName('main-menu-ul');
                /** @type {?} */
                let menuScrollContentHeight = menuScrollContent[0].clientHeight;
                console.log(menuScrollContentHeight - containerHeight);
                menuScrollContainer[0].scrollTo({
                    top: menuScrollContentHeight - containerHeight,
                    behavior: 'smooth'
                });
                console.log(menuScrollContainer[0].scrollTop);
            }), 700);
        }
    }
    /**
     * @return {?}
     */
    checkSettingOpenOrNot() {
        return this.settingOpen ? 'shown' : 'hidden';
    }
    /**
     * @return {?}
     */
    clearHistory() {
        this.menuMoreOpen = false;
        this.menuHeaderOpen = false;
        // (<CustomReuseStrategy>this.routeReuse).clearHandlers();
        if (((/** @type {?} */ (this.routeReuseStrategy))).deleteRouteSnapshot) {
            ((/** @type {?} */ (this.routeReuseStrategy))).deleteRouteSnapshot();
        }
    }
    /**
     * @param {?} component
     * @return {?}
     */
    onRouterOutletActivate(component) {
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
    }
    /**
     * @private
     * @return {?}
     */
    loadMenu() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let getMenuAPI = this.APIFactory.getAPI("getMenu");
            /** @type {?} */
            let resp = yield this.dispatcher.dispatch(getMenuAPI).toPromise();
            /** @type {?} */
            let filtered = this.checkPermissionService.authMenu(resp.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.pageID)));
            this.leftMenu = resp
                .filter((/**
             * @param {?} x
             * @return {?}
             */
            x => filtered.indexOf(x.pageID) > -1))
                .map((/**
             * @param {?} x
             * @return {?}
             */
            x => new MainMenuOption(this.getUrl(x.pageID), this.translateService.translate(x.code), x.pageID, x.icon)));
            this.quickMenu = resp
                .filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.quickMenu))
                .filter((/**
             * @param {?} x
             * @return {?}
             */
            x => filtered.indexOf(x.pageID) > -1))
                .map((/**
             * @param {?} x
             * @return {?}
             */
            x => new MainMenuOption(this.getUrl(x.pageID), this.translateService.translate(x.code), x.pageID, x.icon)));
            if (this.APP_CONFIG.APP_MODE === APPMODE.Integration) {
                /** @type {?} */
                let backOption = new MainMenuOption(this.APP_CONFIG.INTEGRATION_BACK_URL, "Back", "BackMainApp", "nav-icon-home");
                this.quickMenu.unshift(backOption);
                this.leftMenu.push(backOption);
            }
            console.log("resp:", resp);
            console.log("filtered:", filtered);
            console.log('leftMenu:', this.leftMenu);
            console.log("quickMenu:", this.quickMenu);
        });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    logoutHandler(e) {
        e.preventDefault();
        this.clearHistory();
        this.loginMgr.logout();
    }
    /**
     * @param {?} func
     * @return {?}
     */
    getUrl(func) {
        return this.router.getUrl(func);
    }
    /**
     * @param {?} link
     * @return {?}
     */
    isRouteActive(link) {
        if (!this.baseRouter)
            this.baseRouter = this.injector.get(Router);
        return this.baseRouter.isActive(link, false);
    }
}
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
MenuComponent.ctorParameters = () => [
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
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9tZW51LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsUUFBUSxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUE4QyxlQUFlLEVBQW1CLFNBQVMsRUFBaUIsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdPLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBMkQzQyxNQUFNOzs7Ozs7Ozs7Ozs7O0lBZ0JKLFlBQ1UsUUFBeUIsRUFDekIsTUFBaUIsRUFDakIsUUFBa0IsRUFDbEIsZ0JBQWtDLEVBQ2xDLFVBQXNCLEVBQ3RCLFVBQXVCLEVBQ3ZCLHNCQUE4QyxFQUM5QyxXQUF3QixFQUN4QixrQkFBc0MsRUFDakIsVUFBZTtRQVRwQyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFX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QUc7NkJBQ25CLENBQUMsQ0FBQzs0QkFDSCxPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztnQ0FDN0IsT0FBTyxFQUFFLENBQUM7NkJBQ1gsQ0FBQyxDQUFDO3lCQUNKLENBQUM7cUJBQ0gsQ0FDQTtpQkFDRjs7YUFDRjs7O1lBL0RpSSxlQUFlO1lBQW1CLFNBQVM7WUFGakosUUFBUTtZQUVqQixnQkFBZ0I7WUFBRSxVQUFVO1lBQUUsV0FBVztZQUFFLHNCQUFzQjtZQUczRSxXQUFXO1lBRlgsa0JBQWtCOzRDQTBGdEIsTUFBTSxTQUFDLFdBQVc7Ozs7SUF6QnJCLGlDQUEyQzs7SUFDM0MsaUNBQTRDOztJQUM1QyxrQ0FBNkM7O0lBQzdDLHdDQUEwRDs7SUFDMUQsK0JBQTZDOztJQUM3QyxnQ0FBNEM7O0lBQzVDLHdDQUFnRDs7SUFDaEQscUNBQXFDOztJQUNyQyx1Q0FBdUM7O0lBQ3ZDLDRDQUF1Qzs7SUFDdkMsb0NBQTJCOztJQUMzQixtQ0FBaUM7Ozs7O0lBQ2pDLG1DQUFrQzs7Ozs7SUFDbEMscUNBQW9EOzs7OztJQUdsRCxpQ0FBaUM7Ozs7O0lBQ2pDLCtCQUF5Qjs7Ozs7SUFDekIsaUNBQTBCOzs7OztJQUMxQix5Q0FBMEM7Ozs7O0lBQzFDLG1DQUE4Qjs7Ozs7SUFDOUIsbUNBQStCOzs7OztJQUMvQiwrQ0FBc0Q7Ozs7O0lBQ3RELG9DQUFnQzs7Ozs7SUFDaEMsMkNBQThDOzs7OztJQUM5QyxtQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0b3IsIEluamVjdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYWluTWVudU9wdGlvbiB9IGZyb20gJ0BhbGxpYW56U05EL3VpJztcbmltcG9ydCB7IExhbmd1YWdlLCBUcmFuc2xhdGVTZXJ2aWNlLCBBUElGYWN0b3J5LCBBUElEaXNwYXRjaCwgQ2hlY2tQZXJtaXNzaW9uU2VydmljZSwgQ3VzdG9tUm91dGVyUmV1c2VTdHJhdGVneSwgRGF0YVN5bmNTZXJ2aWNlLCBEZWZhdWx0TG9naW5NZ3IsIE5vdGlmaWNhdGlvbk1nciwgQXBwUm91dGVyLCBEZXZpY2VTZXJ2aWNlLCBDb25maWdUb2tlbiwgQVBQTU9ERSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVSZXVzZVN0cmF0ZWd5LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbWVudS5zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25kLW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lbnUuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoXG4gICAgICAndG9nZ2xlSXRlbUNvbGxhcHNlQW5pbWF0aW9uJywgW1xuICAgICAgc3RhdGUoJ3Nob3duJywgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6ICcqJyxcbiAgICAgICAgcGFkZGluZ1RvcDogJyonLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnKicsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7XG4gICAgICAgIGhlaWdodDogJzAnLFxuICAgICAgICBwYWRkaW5nVG9wOiAnMCcsXG4gICAgICAgIHBhZGRpbmdCb3R0b206ICcwJyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignc2hvd24gPT4gaGlkZGVuJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgaGVpZ2h0OiAnKicsXG4gICAgICAgICAgcGFkZGluZ1RvcDogJyonLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcqJyxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcyMDBtcyBlYXNlLWluJywgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSkpLFxuICAgICAgICBhbmltYXRlKCcyMDBtcyBlYXNlLWluJywgc3R5bGUoe1xuICAgICAgICAgIGhlaWdodDogJzAnLFxuICAgICAgICAgIHBhZGRpbmdUb3A6ICcwJyxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMCcsXG4gICAgICAgIH0pKSxcblxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gc2hvd24nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgICAgICBwYWRkaW5nVG9wOiAnMCcsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzAnLFxuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzUwMG1zIGVhc2UtaW4nLCBzdHlsZSh7XG4gICAgICAgICAgaGVpZ2h0OiAnKicsXG4gICAgICAgICAgcGFkZGluZ1RvcDogJyonLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcqJyxcbiAgICAgICAgfSkpLFxuICAgICAgICBhbmltYXRlKCcyMDBtcyBlYXNlLWluJywgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSkpXG4gICAgICBdKSxcbiAgICBdXG4gICAgKVxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuICBwdWJsaWMgbGVmdE1lbnU6IEFycmF5PE1haW5NZW51T3B0aW9uPiA9IFtdO1xuICBwdWJsaWMgcXVpY2tNZW51OiBBcnJheTxNYWluTWVudU9wdGlvbj4gPSBbXTtcbiAgcHVibGljIHVwZGF0ZVRpbWVUaXRsZTogc3RyaW5nID0gdGhpcy5sYW5ndWFnZS51cGRhdGVUaW1lO1xuICBwdWJsaWMgbG9nb3V0OiBzdHJpbmcgPSB0aGlzLmxhbmd1YWdlLmxvZ091dDtcbiAgcHVibGljIG1vcmVUeHQ6IHN0cmluZyA9IHRoaXMubGFuZ3VhZ2UubW9yZTtcbiAgcHVibGljIG1vYmlsZU1lbnVUaXRsZSA9IHRoaXMubGFuZ3VhZ2UubWFpbk1lbnU7XG4gIHB1YmxpYyBtZW51TW9yZU9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIG1lbnVIZWFkZXJPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBtb2JpbGVDb250ZW50SGVpZ2h0OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgc2V0dGluZ09wZW4gPSBmYWxzZTtcbiAgcHVibGljIHVwZGF0ZVRpbWU6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgYmFzZVJvdXRlcjogUm91dGVyID0gbnVsbDtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9naW5NZ3I6IERlZmF1bHRMb2dpbk1ncixcbiAgICBwcml2YXRlIHJvdXRlcjogQXBwUm91dGVyLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIEFQSUZhY3Rvcnk6IEFQSUZhY3RvcnksXG4gICAgcHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaCxcbiAgICBwcml2YXRlIGNoZWNrUGVybWlzc2lvblNlcnZpY2U6IENoZWNrUGVybWlzc2lvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZW51U2VydmljZTogTWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZVJldXNlU3RyYXRlZ3k6IFJvdXRlUmV1c2VTdHJhdGVneSxcbiAgICBASW5qZWN0KENvbmZpZ1Rva2VuKSBwcml2YXRlIEFQUF9DT05GSUc6IGFueVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgdGhpcy5tZW51U2VydmljZS5nZXRMYXN0VXBkYXRlVGltZSgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZSh0aW1lID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtZW51IGxhc3RVcGRhdGVUaW1lIHVwZGF0ZTpcIiwgdGltZSk7XG4gICAgICAgIHRoaXMudXBkYXRlVGltZSA9ICEhdGltZSA/IGZvcm1hdCh0aW1lLCBcImRkIE1NTSB5eXl5IEhIOm1tXCIpIDogbnVsbDtcbiAgICAgIH0pXG5cbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VXBkYXRlU3ViamVjdCgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZE1lbnUoKTtcbiAgICAgIH0pO1xuXG4gIH1cblxuICBhc3luYyBpbml0KCkge1xuICAgIGF3YWl0IHRoaXMubG9hZE1lbnUoKTtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMubGVmdE1lbnUuZmlsdGVyKHggPT4gdGhpcy5pc1JvdXRlQWN0aXZlKHguZ2V0TGluaygpKSk7XG4gICAgaWYgKGN1cnJlbnQubGVuZ3RoID4gMCkge1xuICAgICAgYXdhaXQgdGhpcy5tZW51U2VydmljZS5yZWZyZXNoVXBkYXRlVGltZShjdXJyZW50WzBdLmdldENvZGUoKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBhc3luYyBtZW51Q2xpY2sob2JqLCBlKSB7XG4gICAgY29uc29sZS5sb2coXCJtZW51Q2xpY2s6XCIsIG9iaik7XG4gICAgaWYgKG9iai5nZXRDb2RlKCkgPT09ICdCYWNrTWFpbkFwcCcpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24ob2JqLmdldExpbmsoKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIuc2V0Q3VycmVudE1lbnVPYmplY3Qob2JqKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNsZWFySGlzdG9yeSgpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoJ01lbnVMb2FkaW5nJyk7XG4gICAgfVxuICB9XG4gIHRvZ2dsZVNldHRpbmdPcGVuKCkge1xuICAgIHRoaXMuc2V0dGluZ09wZW4gPSAhdGhpcy5zZXR0aW5nT3BlbjtcbiAgICBpZiAodGhpcy5zZXR0aW5nT3Blbikge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBjb250YWluZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1aS1yb3cnKVswXS5jbGllbnRIZWlnaHQgLSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1aS1tYWluLWxvZ28nKVswXS5jbGllbnRIZWlnaHQgLSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZXR0aW5nLWlubmVyLWxpc3Qtd3JhcHBlcicpWzBdLmNsaWVudEhlaWdodDtcbiAgICAgICAgbGV0IG1lbnVTY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1aS1tYWluLW1lbnUnKTtcbiAgICAgICAgbGV0IG1lbnVTY3JvbGxDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi1tZW51LXVsJyk7XG4gICAgICAgIGxldCBtZW51U2Nyb2xsQ29udGVudEhlaWdodCA9IG1lbnVTY3JvbGxDb250ZW50WzBdLmNsaWVudEhlaWdodDtcbiAgICAgICAgY29uc29sZS5sb2cobWVudVNjcm9sbENvbnRlbnRIZWlnaHQgLSBjb250YWluZXJIZWlnaHQpO1xuICAgICAgICBtZW51U2Nyb2xsQ29udGFpbmVyWzBdLnNjcm9sbFRvKHtcbiAgICAgICAgICB0b3A6IG1lbnVTY3JvbGxDb250ZW50SGVpZ2h0IC0gY29udGFpbmVySGVpZ2h0LFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhtZW51U2Nyb2xsQ29udGFpbmVyWzBdLnNjcm9sbFRvcCk7XG4gICAgICB9LCA3MDApXG4gICAgfVxuICB9XG4gIGNoZWNrU2V0dGluZ09wZW5Pck5vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5nT3BlbiA/ICdzaG93bicgOiAnaGlkZGVuJztcbiAgfVxuXG4gIGNsZWFySGlzdG9yeSgpIHtcbiAgICB0aGlzLm1lbnVNb3JlT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMubWVudUhlYWRlck9wZW4gPSBmYWxzZTtcbiAgICAvLyAoPEN1c3RvbVJldXNlU3RyYXRlZ3k+dGhpcy5yb3V0ZVJldXNlKS5jbGVhckhhbmRsZXJzKCk7XG4gICAgaWYgKCg8Q3VzdG9tUm91dGVyUmV1c2VTdHJhdGVneT50aGlzLnJvdXRlUmV1c2VTdHJhdGVneSkuZGVsZXRlUm91dGVTbmFwc2hvdCkge1xuICAgICAgKDxDdXN0b21Sb3V0ZXJSZXVzZVN0cmF0ZWd5PnRoaXMucm91dGVSZXVzZVN0cmF0ZWd5KS5kZWxldGVSb3V0ZVNuYXBzaG90KCk7XG4gICAgfVxuICB9XG5cblxuICBvblJvdXRlck91dGxldEFjdGl2YXRlKGNvbXBvbmVudDogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKCdvblJvdXRlck91dGxldEFjdGl2YXRlJywgY29tcG9uZW50KTtcbiAgICAvLyBjb25zb2xlLndhcm4oJ21vYmlsZUNvbnRlbnRIZWlnaHQnLCB0aGlzLm1vYmlsZUNvbnRlbnRIZWlnaHQpO1xuXG4gICAgLy8gdWktbWFpbi1sZWZ0IHNldFRpbWVvdXQgMTAwbXMgdG8gY2FsY3VsYXRlIGhlaWdodFxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ21haW4gbW9iaWxlQ29udGVudEhlaWdodCcsIF90aGlzLm1vYmlsZUNvbnRlbnRIZWlnaHQpO1xuXG4gICAgICBjb21wb25lbnQucGFyZW50SGVpZ2h0ID0gX3RoaXMubW9iaWxlQ29udGVudEhlaWdodDtcbiAgICB9LCAxNTApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkTWVudSgpIHtcbiAgICBsZXQgZ2V0TWVudUFQSSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRNZW51XCIpO1xuICAgIGxldCByZXNwID0gYXdhaXQgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGdldE1lbnVBUEkpLnRvUHJvbWlzZSgpO1xuICAgIGxldCBmaWx0ZXJlZCA9IHRoaXMuY2hlY2tQZXJtaXNzaW9uU2VydmljZS5hdXRoTWVudShyZXNwLm1hcCh4ID0+IHgucGFnZUlEKSk7XG4gICAgdGhpcy5sZWZ0TWVudSA9IHJlc3BcbiAgICAgIC5maWx0ZXIoeCA9PiBmaWx0ZXJlZC5pbmRleE9mKHgucGFnZUlEKSA+IC0xKVxuICAgICAgLm1hcCh4ID0+IG5ldyBNYWluTWVudU9wdGlvbih0aGlzLmdldFVybCh4LnBhZ2VJRCksIHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGUoeC5jb2RlKSwgeC5wYWdlSUQsIHguaWNvbikpXG5cbiAgICB0aGlzLnF1aWNrTWVudSA9IHJlc3BcbiAgICAgIC5maWx0ZXIoeCA9PiB4LnF1aWNrTWVudSlcbiAgICAgIC5maWx0ZXIoeCA9PiBmaWx0ZXJlZC5pbmRleE9mKHgucGFnZUlEKSA+IC0xKVxuICAgICAgLm1hcCh4ID0+IG5ldyBNYWluTWVudU9wdGlvbih0aGlzLmdldFVybCh4LnBhZ2VJRCksIHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGUoeC5jb2RlKSwgeC5wYWdlSUQsIHguaWNvbikpXG5cbiAgICBpZiAodGhpcy5BUFBfQ09ORklHLkFQUF9NT0RFID09PSBBUFBNT0RFLkludGVncmF0aW9uKSB7XG4gICAgICBsZXQgYmFja09wdGlvbiA9IG5ldyBNYWluTWVudU9wdGlvbih0aGlzLkFQUF9DT05GSUcuSU5URUdSQVRJT05fQkFDS19VUkwsIFwiQmFja1wiLCBcIkJhY2tNYWluQXBwXCIsIFwibmF2LWljb24taG9tZVwiKTtcbiAgICAgIHRoaXMucXVpY2tNZW51LnVuc2hpZnQoYmFja09wdGlvbik7XG4gICAgICB0aGlzLmxlZnRNZW51LnB1c2goYmFja09wdGlvbik7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJyZXNwOlwiLCByZXNwKTtcbiAgICBjb25zb2xlLmxvZyhcImZpbHRlcmVkOlwiLCBmaWx0ZXJlZCk7XG4gICAgY29uc29sZS5sb2coJ2xlZnRNZW51OicsIHRoaXMubGVmdE1lbnUpO1xuICAgIGNvbnNvbGUubG9nKFwicXVpY2tNZW51OlwiLCB0aGlzLnF1aWNrTWVudSk7XG4gIH1cblxuXG4gIHB1YmxpYyBsb2dvdXRIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jbGVhckhpc3RvcnkoKTtcbiAgICB0aGlzLmxvZ2luTWdyLmxvZ291dCgpO1xuICB9XG5cbiAgcHVibGljIGdldFVybChmdW5jOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIuZ2V0VXJsKGZ1bmMpO1xuICB9XG5cbiAgcHVibGljIGlzUm91dGVBY3RpdmUobGluazogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmJhc2VSb3V0ZXIpXG4gICAgICB0aGlzLmJhc2VSb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgIHJldHVybiB0aGlzLmJhc2VSb3V0ZXIuaXNBY3RpdmUobGluaywgZmFsc2UpO1xuICB9XG5cbn1cbiJdfQ==