(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@angular/core'), require('date-fns'), require('rxjs'), require('rxjs/operators'), require('@angular/forms'), require('@allianzSND/ui'), require('@angular/common'), require('@allianzSND/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@allianzSND/menu', ['exports', '@angular/animations', '@angular/core', 'date-fns', 'rxjs', 'rxjs/operators', '@angular/forms', '@allianzSND/ui', '@angular/common', '@allianzSND/core', '@angular/router'], factory) :
    (factory((global.allianzSND = global.allianzSND || {}, global.allianzSND.menu = {}),global.ng.animations,global.ng.core,global.dateFns,global.rxjs,global.rxjs.operators,global.ng.forms,global.ui,global.ng.common,global.i1,global.ng.router));
}(this, (function (exports,animations,i0,dateFns,rxjs,operators,forms,ui,common,i1,router) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuService = /** @class */ (function () {
        function MenuService(APIFactory, dispatcher, errorHandler) {
            this.APIFactory = APIFactory;
            this.dispatcher = dispatcher;
            this.errorHandler = errorHandler;
            this._lastUpdateTime = null;
            this._lastUpdateTimeSubject = new rxjs.BehaviorSubject(this._lastUpdateTime);
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
                                filtered = resp.Body.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.MainFunc === func; }));
                                return [2 /*return*/, filtered.length > 0 ? new Date(filtered[0].BackendTime) : null];
                            case 2:
                                error_1 = _a.sent();
                                this.errorHandler.handleError(new i1.APPError("F00900", error_1.message));
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        MenuService.ctorParameters = function () {
            return [
                { type: i1.APIFactory },
                { type: i1.APIDispatch },
                { type: i0.ErrorHandler }
            ];
        };
        /** @nocollapse */ MenuService.ngInjectableDef = i0.defineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.inject(i1.APIFactory), i0.inject(i1.APIDispatch), i0.inject(i0.ErrorHandler)); }, token: MenuService, providedIn: "root" });
        return MenuService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuComponent = /** @class */ (function () {
        function MenuComponent(loginMgr, router$$1, injector, translateService, APIFactory, dispatcher, checkPermissionService, menuService, routeReuseStrategy, APP_CONFIG) {
            this.loginMgr = loginMgr;
            this.router = router$$1;
            this.injector = injector;
            this.translateService = translateService;
            this.APIFactory = APIFactory;
            this.dispatcher = dispatcher;
            this.checkPermissionService = checkPermissionService;
            this.menuService = menuService;
            this.routeReuseStrategy = routeReuseStrategy;
            this.APP_CONFIG = APP_CONFIG;
            this.language = new i1.Language();
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
            this.unsubscribe$ = new rxjs.Subject();
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
                    .pipe(operators.takeUntil(this.unsubscribe$))
                    .subscribe(( /**
             * @param {?} time
             * @return {?}
             */function (time) {
                    console.log("menu lastUpdateTime update:", time);
                    _this_1.updateTime = !!time ? dateFns.format(time, "dd MMM yyyy HH:mm") : null;
                }));
                this.translateService.getUpdateSubject()
                    .pipe(operators.takeUntil(this.unsubscribe$))
                    .subscribe(( /**
             * @return {?}
             */function () {
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
                                current = this.leftMenu.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return _this_1.isRouteActive(x.getLink()); }));
                                if (!(current.length > 0))
                                    return [3 /*break*/, 3];
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
                    setTimeout(( /**
                     * @return {?}
                     */function () {
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
                if ((( /** @type {?} */(this.routeReuseStrategy))).deleteRouteSnapshot) {
                    (( /** @type {?} */(this.routeReuseStrategy))).deleteRouteSnapshot();
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
                setTimeout(( /**
                 * @return {?}
                 */function () {
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
                                filtered = this.checkPermissionService.authMenu(resp.map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.pageID; })));
                                this.leftMenu = resp
                                    .filter(( /**
                             * @param {?} x
                             * @return {?}
                             */function (x) { return filtered.indexOf(x.pageID) > -1; }))
                                    .map(( /**
                             * @param {?} x
                             * @return {?}
                             */function (x) { return new ui.MainMenuOption(_this_1.getUrl(x.pageID), _this_1.translateService.translate(x.code), x.pageID, x.icon); }));
                                this.quickMenu = resp
                                    .filter(( /**
                             * @param {?} x
                             * @return {?}
                             */function (x) { return x.quickMenu; }))
                                    .filter(( /**
                             * @param {?} x
                             * @return {?}
                             */function (x) { return filtered.indexOf(x.pageID) > -1; }))
                                    .map(( /**
                             * @param {?} x
                             * @return {?}
                             */function (x) { return new ui.MainMenuOption(_this_1.getUrl(x.pageID), _this_1.translateService.translate(x.code), x.pageID, x.icon); }));
                                if (this.APP_CONFIG.APP_MODE === i1.APPMODE.Integration) {
                                    backOption = new ui.MainMenuOption(this.APP_CONFIG.INTEGRATION_BACK_URL, "Back", "BackMainApp", "nav-icon-home");
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
                    this.baseRouter = this.injector.get(router.Router);
                return this.baseRouter.isActive(link, false);
            };
        MenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snd-menu',
                        template: "<app-ui-main-left [moreTitle]=\"mobileMenuTitle | translate\" [updateTimeTitle]=\"updateTimeTitle | translate\" [updateTime]=\"updateTime\" [menuHeaderTitle]=\"mobileMenuTitle | translate\" [(isMoreOpen)]=\"menuMoreOpen\"\n  [(isMenuHeaderOpen)]=\"menuHeaderOpen\" [(mobileContentHeight)]=\"mobileContentHeight\">\n  <ng-template #menuListAll>\n    <li *ngFor=\"let menuObj of leftMenu\" class=\"main-menu-li\">\n      <a class=\"main-menu-link\" Action [action]=\"'menuClick'+menuObj.getName()\"\n        [class.active]=\"isRouteActive(menuObj.getLink())\" (actionClick)=\"menuClick(menuObj,$event)\" [id]=\"menuObj.getName()\">\n        <img class=\"main-menu-icon\" src=\"assets/img/{{menuObj.getImgSrc()}}.svg\" />\n        <img class=\"main-menu-icon-bl\" src=\"assets/img/{{menuObj.getImgSrc()}}-bl.svg\" />\n        <p class=\"main-menu-title\">{{menuObj.getName()}}</p>\n      </a>\n    </li>\n  </ng-template>\n\n  <!-- pc -->\n  <ul menu-list class=\"main-menu-ul\">\n    <ng-container *ngTemplateOutlet=\"menuListAll\"></ng-container>\n  </ul>\n  <!-- end: menu-list -->\n\n  <div menu-bottom class=\"main-menu-logout\">\n    <a href=\"#\" class=\"logout-item\" Action action=\"logOut\" (actionClick)=\"logoutHandler($event)\">\n      <img class=\"main-menu-icon\" src=\"assets/img/nav-icon-logout.svg\" />\n      <img class=\"main-menu-icon-bl\" src=\"assets/img/nav-icon-logout-bl.svg\" />\n      <span class=\"txt\">{{logout | translate}}</span>\n    </a>\n  </div>\n  <!-- end: menu-bottom -->\n\n  <!-- sqlite-executor -->\n  <div menu-bottom class=\"main-menu-logout\">\n    <a [routerLink]=\"['/sqliteExecutor']\" class=\"logout-item\">\n      <img class=\"main-menu-icon\" src=\"assets/img/nav-icon-logout.svg\" />\n      <img class=\"main-menu-icon-bl\" src=\"assets/img/nav-icon-logout-bl.svg\" />\n      <span class=\"txt\">SqliteExecutor</span>\n    </a>\n  </div>\n  <!-- end: sqlite-executor -->\n\n\n  <!-- mobile -->\n  <ul menu-header class=\"main-menu-nav-mobile-ul\">\n    <ng-container *ngTemplateOutlet=\"menuListAll\"></ng-container>\n  </ul>\n  <!-- end: menu-header -->\n\n  <ul menu-footer class=\"main-menu-footer-ul\">\n    <ng-template *ngIf=\"quickMenu.length > 5; then moreBlock else allBlock\"></ng-template>\n\n    <ng-template #allBlock>\n      <ng-container *ngTemplateOutlet=\"quickMenuListAll\"></ng-container>\n    </ng-template>\n    <!-- end: allBlock -->\n\n\n    <ng-template #quickMenuListAll>\n      <li *ngFor=\"let menuObj of quickMenu\" class=\"main-menu-li\">\n        <a class=\"main-menu-link\" Action [action]=\"'menuClick'+menuObj.getName()\"\n          (actionClick)=\"menuClick(menuObj,$event)\" [class.active]=\"isRouteActive(menuObj.getLink())\">\n          <img class=\"main-menu-icon\" src=\"assets/img/{{menuObj.getImgSrc()}}.svg\" />\n          <img class=\"main-menu-icon-bl\" src=\"assets/img/{{menuObj.getImgSrc()}}-bl.svg\" />\n          <p class=\"main-menu-title\">{{menuObj.getName()}}</p>\n        </a>\n      </li>\n    </ng-template>\n\n    <ng-template #moreBlock>\n      <li *ngFor=\"let menuObj of quickMenu.slice(0,4)\" class=\"main-menu-li\">\n        <a class=\"main-menu-link\" (click)=\"menuClick(menuObj,$event)\" [class.active]=\"isRouteActive(menuObj.getLink())\">\n          <img class=\"main-menu-icon\" src=\"assets/img/{{menuObj.getImgSrc()}}.svg\" />\n          <p class=\"main-menu-title\">{{menuObj.getName()}}</p>\n        </a>\n      </li>\n      <li class=\"main-menu-li\">\n        <div class=\"main-menu-link main-menu-link-more\" (click)=\"menuMoreOpen = !menuMoreOpen\">\n          <img class=\"main-menu-icon\" src=\"assets/img/nav-icon-more.svg\" />\n          <p class=\"main-menu-title\">{{moreTxt | translate}}</p>\n        </div>\n      </li>\n    </ng-template>\n    <!-- end: moreBlock -->\n  </ul>\n  <!-- end: menu-footer -->\n\n  <ul menu-footer-more class=\"main-menu-nav-mobile-ul\">\n    <li *ngFor=\"let menuObj of quickMenu.slice(4)\" class=\"main-menu-li\">\n      <a class=\"main-menu-link\" Action [action]=\"'menuClick'+menuObj.getName()\"\n        (actionClick)=\"menuClick(menuObj,$event)\" [class.active]=\"isRouteActive(menuObj.getLink())\">\n        <img class=\"main-menu-icon\" src=\"assets/img/{{menuObj.getImgSrc()}}.svg\" />\n        <img class=\"main-menu-icon-bl\" src=\"assets/img/{{menuObj.getImgSrc()}}-bl.svg\" />\n        <p class=\"main-menu-title\">{{menuObj.getName()}}</p>\n      </a>\n    </li>\n    <!-- <li class=\"main-menu-li collapsable\" [ngClass]=\"this.settingOpen? 'active':'' \">\n      <a class=\"main-menu-link\"  (click)=\"toggleSettingOpen()\">\n        <img class=\"main-menu-icon\" src=\"assets/img/nav-icon-setting.svg\" />\n        <img class=\"main-menu-icon-bl\" src=\"assets/img/nav-icon-setting-bl.svg\" />\n        <p class=\"main-menu-title\">\u7CFB\u7D71\u7BA1\u7406</p>\n      </a>\n    </li>\n    <li class=\"setting-collapse-content\" [@toggleItemCollapseAnimation]=\"checkSettingOpenOrNot()\">\n        <div class=\"setting-inner-list-wrapper\">\n          <ul class=\"setting-inner-list\">\n            <li class=\"setting-inner-list-item\" *ngFor=\"let menuObj of settingFuncArray\" >\n              <a class=\"inner-link\" [routerLink]=\"[getUrl(menuObj.getLink())]\" (click)=\"menuClick(menuObj,$event)\">\n                <span>{{menuObj.getName()}}</span>\n              </a>\n            </li>\n        </ul>\n      </div>\n    </li> -->\n  </ul>\n  <!-- end: menu-footer-more -->\n\n  <!-- content -->\n  <router-outlet main (activate)=\"onRouterOutletActivate($event)\"></router-outlet>\n</app-ui-main-left>\n",
                        animations: [
                            animations.trigger('toggleItemCollapseAnimation', [
                                animations.state('shown', animations.style({
                                    height: '*',
                                    paddingTop: '*',
                                    paddingBottom: '*',
                                    opacity: 1
                                })),
                                animations.state('hidden', animations.style({
                                    height: '0',
                                    paddingTop: '0',
                                    paddingBottom: '0',
                                    opacity: 0
                                })),
                                animations.transition('shown => hidden', [
                                    animations.style({
                                        height: '*',
                                        paddingTop: '*',
                                        paddingBottom: '*',
                                        opacity: 1
                                    }),
                                    animations.animate('200ms ease-in', animations.style({
                                        opacity: 0
                                    })),
                                    animations.animate('200ms ease-in', animations.style({
                                        height: '0',
                                        paddingTop: '0',
                                        paddingBottom: '0',
                                    })),
                                ]),
                                animations.transition('hidden => shown', [
                                    animations.style({
                                        height: '0',
                                        paddingTop: '0',
                                        paddingBottom: '0',
                                        opacity: 0
                                    }),
                                    animations.animate('500ms ease-in', animations.style({
                                        height: '*',
                                        paddingTop: '*',
                                        paddingBottom: '*',
                                    })),
                                    animations.animate('200ms ease-in', animations.style({
                                        opacity: 1
                                    }))
                                ]),
                            ])
                        ],
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}[class^=main-menu-]{list-style-type:none}[class^=main-menu-] .main-menu-link{display:inline-block;width:100%}[class^=main-menu-] .main-menu-link.active{background-color:rgba(0,0,0,.25)}[class^=main-menu-] .main-menu-link.disabled{pointer-events:none;cursor:default}[class^=main-menu-] .main-menu-icon-bl{display:none}[class^=main-menu-] [class=main-menu-icon]{-webkit-tap-highlight-color:transparent}.main-menu-ul .main-menu-li.collapsable.active{background-color:rgba(0,0,0,.25)}.main-menu-ul .main-menu-li.collapsable.active .main-menu-link .main-menu-title:after{background-image:url(/assets/img/icon-card-04w.svg)}.main-menu-ul .main-menu-li.collapsable .main-menu-link .main-menu-title{position:relative}.main-menu-ul .main-menu-li.collapsable .main-menu-link .main-menu-title:after{content:'';position:absolute;-webkit-animation:1.5s infinite bounce;animation:1.5s infinite bounce;right:0;top:40%;display:inline-block;background-image:url(/assets/img/icon-card-03w.svg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;width:12px;height:12px;background-size:cover;margin-right:-5px}@media screen and (max-width:1024px){.main-menu-ul .main-menu-li.collapsable .main-menu-link .main-menu-title:after{width:8px;height:8px}}.main-menu-ul .setting-collapse-content{overflow:hidden}.main-menu-ul .setting-collapse-content .setting-inner-list-wrapper .setting-inner-list{background-color:rgba(38,38,38,.25)}.main-menu-ul .setting-collapse-content .setting-inner-list-wrapper .setting-inner-list .setting-inner-list-item{padding-left:16px;min-height:42px;display:flex;align-items:center;font-size:.875rem;padding-left:calc(20px + 1em)}.main-menu-ul .setting-collapse-content .setting-inner-list-wrapper .setting-inner-list .setting-inner-list-item span{font-size:.875rem;color:#fff;font-weight:700}.main-menu-ul .main-menu-link{text-decoration:none;display:inline-block;width:100%;padding:5px 60px 15px 20px;text-align:center}.main-menu-ul .main-menu-link img{max-width:35px;width:100%}@media screen and (min-width:1025px){.main-menu-ul .main-menu-link img{max-width:3.5vw}}.main-menu-ul .main-menu-title{margin:0;font-size:.875rem;font-weight:700;line-height:1.43;letter-spacing:.2px}.main-menu-footer-ul{display:flex;justify-content:space-around;width:100%;background-color:#003781;color:#fff;text-align:center}.main-menu-footer-ul .main-menu-li{flex:1;min-width:20%}.main-menu-footer-ul .main-menu-li:nth-child(n+6){display:none}.main-menu-footer-ul .main-menu-link{display:inline-block;width:100%;padding-top:5px;font-size:0}.main-menu-footer-ul .main-menu-link.main-menu-link-more .main-menu-icon{width:20px}.main-menu-footer-ul .main-menu-icon{display:inline-block;width:30px;height:30px}.main-menu-footer-ul .main-menu-title{margin:0;font-size:.75rem;font-weight:700;line-height:1.6;letter-spacing:.4px;-webkit-transform:scale(.83);transform:scale(.83)}::ng-deep.menuMoreOpen .main-menu-link.active{background-color:transparent!important}::ng-deep.menuMoreOpen .main-menu-link.main-menu-link-more{background-color:rgba(0,0,0,.25)}.main-menu-nav-mobile-ul .main-menu-li{border-bottom:1px solid #d9d9d9}.main-menu-nav-mobile-ul .main-menu-li.collapsable.active .main-menu-link .main-menu-title:after{background-image:url(/assets/img/icon-arrow-down-blue3.svg)}.main-menu-nav-mobile-ul .main-menu-li.collapsable .main-menu-link .main-menu-title:after{background-image:url(/assets/img/icon-arrow-down-blue2.svg);-webkit-animation:1.5s infinite bounce;animation:1.5s infinite bounce}.main-menu-nav-mobile-ul .main-menu-link{display:flex;align-items:center}.main-menu-nav-mobile-ul .main-menu-title{flex:1;margin:0;padding:15px 24px 15px 0;position:relative;font-size:1rem;font-weight:600;line-height:1.5;letter-spacing:normal;text-align:center;color:#007ab3}.main-menu-nav-mobile-ul .main-menu-title:after{content:'';position:absolute;top:calc(50% - 12px);right:0;display:inline-block;width:24px;height:24px;background-image:url(assets/img/nav-icon-right.svg);background-repeat:no-repeat;background-size:24px}.main-menu-nav-mobile-ul .setting-collapse-content .setting-inner-list-wrapper .setting-inner-list .setting-inner-list-item{padding-left:16px;min-height:50px;display:flex;align-items:center}.main-menu-nav-mobile-ul .setting-collapse-content .setting-inner-list-wrapper .setting-inner-list .setting-inner-list-item:active{background-color:#0068b7}.main-menu-nav-mobile-ul .setting-collapse-content .setting-inner-list-wrapper .setting-inner-list .setting-inner-list-item:active span{color:#fff}.main-menu-nav-mobile-ul .setting-collapse-content .setting-inner-list-wrapper .setting-inner-list .setting-inner-list-item span{font-size:1rem;color:#0068b7;font-weight:700}.main-menu-nav-mobile-ul .main-menu-link{display:flex;align-items:center;text-decoration:none}.main-menu-nav-mobile-ul .main-menu-link.active{background-color:transparent}.main-menu-nav-mobile-ul .main-menu-icon{display:none}.main-menu-nav-mobile-ul .main-menu-icon-bl{display:inline-block;width:30px}.main-menu-logout{padding:20px}.main-menu-logout img{vertical-align:top}.main-menu-logout .txt{font-size:.875rem;font-weight:400;line-height:1.43;letter-spacing:.2px;color:#fff}.main-menu-logout .txt:not(:first-child){margin-left:10px}@media screen and (max-width:1023px){.main-menu-logout{padding:0}.main-menu-logout .main-menu-icon{display:none}.main-menu-logout .main-menu-icon-bl{display:inline-block}.main-menu-logout .txt{color:#0068b7}}@media screen and (max-width:374px){.main-menu-footer-ul .main-menu-title{display:flex;justify-content:center;white-space:nowrap}}@-webkit-keyframes bounce{20%,53%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-3px,0);transform:translate3d(0,-3px,0)}90%{-webkit-transform:translate3d(0,-1px,0);transform:translate3d(0,-1px,0)}}@keyframes bounce{20%,53%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-3px,0);transform:translate3d(0,-3px,0)}90%{-webkit-transform:translate3d(0,-1px,0);transform:translate3d(0,-1px,0)}}"]
                    }] }
        ];
        MenuComponent.ctorParameters = function () {
            return [
                { type: i1.DefaultLoginMgr },
                { type: i1.AppRouter },
                { type: i0.Injector },
                { type: i1.TranslateService },
                { type: i1.APIFactory },
                { type: i1.APIDispatch },
                { type: i1.CheckPermissionService },
                { type: MenuService },
                { type: router.RouteReuseStrategy },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.ConfigToken,] }] }
            ];
        };
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            ui.UIModule,
                            i1.CoreModule,
                            forms.FormsModule
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

    exports.MenuModule = MenuModule;
    exports.MenuService = MenuService;
    exports.MenuComponent = MenuComponent;
    exports.ɵa = MenuComponent;
    exports.ɵb = MenuService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=allianzSND-menu.umd.js.map