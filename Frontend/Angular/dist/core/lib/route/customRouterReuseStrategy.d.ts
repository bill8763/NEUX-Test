import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
export declare class CustomRouterReuseStrategy implements RouteReuseStrategy {
    handlers: {
        [key: string]: DetachedRouteHandle;
    };
    deleteRouteSnapshot(): void;
    shouldDetach(route: ActivatedRouteSnapshot): boolean;
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void;
    shouldAttach(route: ActivatedRouteSnapshot): boolean;
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle;
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean;
    private getRouteUrl;
    getTruthRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot;
    private isReuseRoute;
}
