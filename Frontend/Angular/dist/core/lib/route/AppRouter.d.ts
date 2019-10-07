import { Injector } from "@angular/core";
import { RouteReuseStrategy } from "@angular/router";
import { APIFactory } from "../api/APIFactory";
import { APIDispatch } from "../api/APIDispatch";
export declare class AppRouter {
    private injector;
    private APIFactory;
    private dispatcher;
    private routeReuseStrategy;
    private routeMap;
    private currentMenuObject;
    private previousUrl;
    private currentUrl;
    constructor(injector: Injector, APIFactory: APIFactory, dispatcher: APIDispatch, routeReuseStrategy: RouteReuseStrategy);
    init(): void;
    navigate(func: string, ...extras: Array<string>): void;
    getUrl(page: string): any;
    getCurrentFunction(): any;
    getRouteMap(): any;
    back(clearCache?: boolean): void;
    getCurrentMenuObject(): any;
    setCurrentMenuObject(val: any): void;
    private listenRouterEvent;
}
