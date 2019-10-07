import { OnInit, Injector, OnDestroy } from '@angular/core';
import { MainMenuOption } from '@allianzSND/ui';
import { Language, TranslateService, APIFactory, APIDispatch, CheckPermissionService, DefaultLoginMgr, AppRouter } from '@allianzSND/core';
import { RouteReuseStrategy } from '@angular/router';
import { MenuService } from '../../service/menu.service';
export declare class MenuComponent implements OnInit, OnDestroy {
    private loginMgr;
    private router;
    private injector;
    private translateService;
    private APIFactory;
    private dispatcher;
    private checkPermissionService;
    private menuService;
    private routeReuseStrategy;
    private APP_CONFIG;
    language: Language;
    leftMenu: Array<MainMenuOption>;
    quickMenu: Array<MainMenuOption>;
    updateTimeTitle: string;
    logout: string;
    moreTxt: string;
    mobileMenuTitle: string;
    menuMoreOpen: boolean;
    menuHeaderOpen: boolean;
    mobileContentHeight: number;
    settingOpen: boolean;
    updateTime: string;
    private baseRouter;
    private unsubscribe$;
    constructor(loginMgr: DefaultLoginMgr, router: AppRouter, injector: Injector, translateService: TranslateService, APIFactory: APIFactory, dispatcher: APIDispatch, checkPermissionService: CheckPermissionService, menuService: MenuService, routeReuseStrategy: RouteReuseStrategy, APP_CONFIG: any);
    ngOnInit(): void;
    init(): Promise<void>;
    ngOnDestroy(): void;
    menuClick(obj: any, e: any): Promise<void>;
    toggleSettingOpen(): void;
    checkSettingOpenOrNot(): "hidden" | "shown";
    clearHistory(): void;
    onRouterOutletActivate(component: any): void;
    private loadMenu;
    logoutHandler(e: any): void;
    getUrl(func: string): any;
    isRouteActive(link: string): boolean;
}
