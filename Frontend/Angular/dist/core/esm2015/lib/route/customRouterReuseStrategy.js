/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class CustomRouterReuseStrategy {
    constructor() {
        this.handlers = {};
    }
    /**
     * @return {?}
     */
    deleteRouteSnapshot() {
        console.log('delete snapshot!!');
        Object.keys(this.handlers).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            /** @type {?} */
            let componentRef = null;
            if (this.handlers[key])
                componentRef = this.handlers[key]['componentRef'];
            if (componentRef) {
                componentRef.destroy();
            }
        }));
        this.handlers = {};
    }
    /**
     * @param {?} route
     * @return {?}
     */
    shouldDetach(route) {
        console.debug('shouldDetach======>', route);
        return this.isReuseRoute(route);
    }
    /**
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    store(route, handle) {
        console.debug('store======>', route, handle);
        console.log("this.getRouteUrl:", this.getRouteUrl(route));
        this.handlers[this.getRouteUrl(route)] = handle;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    shouldAttach(route) {
        // console.debug('shouldAttach======>', route);
        return this.isReuseRoute(route) && (!!this.handlers[this.getRouteUrl(route)]);
    }
    /**
     * @param {?} route
     * @return {?}
     */
    retrieve(route) {
        // console.debug('retrieve======>', route);
        if (!this.handlers[this.getRouteUrl(route)]) {
            return null;
        }
        return this.handlers[this.getRouteUrl(route)];
    }
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    shouldReuseRoute(future, curr) {
        // console.debug('shouldReuseRoute======>', future, curr);
        return future.routeConfig === curr.routeConfig;
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    getRouteUrl(route) {
        /** @type {?} */
        let next = this.getTruthRoute(route);
        /** @type {?} */
        let segments = [];
        while (next) {
            segments.push(next.url.join('/'));
            next = next.parent;
        }
        /** @type {?} */
        let /** @type {?} */ url = segments
            .filter((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            return i;
        }))
            .reverse()
            .join('/');
        return url;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    getTruthRoute(route) {
        /** @type {?} */
        let next = route;
        while (next.firstChild) {
            next = next.firstChild;
        }
        return next;
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    isReuseRoute(route) {
        //default is true;
        /** @type {?} */
        let shouldReuse = true;
        /** @type {?} */
        let next = route;
        while (next) {
            if (next.data.hasOwnProperty("cache")) {
                shouldReuse = next.data.cache;
            }
            next = next.firstChild;
        }
        console.debug('isReuseRoute', shouldReuse);
        return shouldReuse;
    }
}
if (false) {
    /** @type {?} */
    CustomRouterReuseStrategy.prototype.handlers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tUm91dGVyUmV1c2VTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGUvY3VzdG9tUm91dGVyUmV1c2VTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsTUFBTTtJQUFOO1FBRVcsYUFBUSxHQUEyQyxFQUFFLENBQUM7SUFtRmpFLENBQUM7Ozs7SUFqRlUsbUJBQW1CO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTs7Z0JBQ25DLFlBQVksR0FBRyxJQUFJO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7Z0JBQ2xCLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RELElBQUksWUFBWSxFQUFFO2dCQUNkLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMxQjtRQUNMLENBQUMsRUFBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBNkI7UUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQTZCLEVBQUUsTUFBMkI7UUFDNUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUE2QjtRQUN0QywrQ0FBK0M7UUFDL0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBNkI7UUFDbEMsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxNQUE4QixFQUFFLElBQTRCO1FBQ3pFLDBEQUEwRDtRQUMxRCxPQUFPLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsS0FBNkI7O1lBQ3pDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzs7WUFDaEMsUUFBUSxHQUFHLEVBQUU7UUFDakIsT0FBTyxJQUFJLEVBQUU7WUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdEI7O1lBQ0csZ0JBQWdCLENBQUMsR0FBRyxHQUFHLFFBQVE7YUFDOUIsTUFBTTs7OztRQUFDLFVBQVUsQ0FBQztZQUNmLE9BQU8sQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxFQUFDO2FBQ0QsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNkLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBNkI7O1lBQ25DLElBQUksR0FBRyxLQUFLO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxLQUE2Qjs7O1lBRTFDLFdBQVcsR0FBRyxJQUFJOztZQUNsQixJQUFJLEdBQUcsS0FBSztRQUNoQixPQUFPLElBQUksRUFBRTtZQUNULElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ25DLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNqQztZQUNELElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDM0MsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztDQUVKOzs7SUFuRkcsNkNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVSZXVzZVN0cmF0ZWd5LCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBEZXRhY2hlZFJvdXRlSGFuZGxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tUm91dGVyUmV1c2VTdHJhdGVneSBpbXBsZW1lbnRzIFJvdXRlUmV1c2VTdHJhdGVneSB7XG5cbiAgICBwdWJsaWMgaGFuZGxlcnM6IHsgW2tleTogc3RyaW5nXTogRGV0YWNoZWRSb3V0ZUhhbmRsZSB9ID0ge307XG5cbiAgICBwdWJsaWMgZGVsZXRlUm91dGVTbmFwc2hvdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBzbmFwc2hvdCEhJyk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaGFuZGxlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbXBvbmVudFJlZiA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyc1trZXldKVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFJlZiA9IHRoaXMuaGFuZGxlcnNba2V5XVsnY29tcG9uZW50UmVmJ107XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IHt9O1xuICAgIH1cblxuICAgIHNob3VsZERldGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdzaG91bGREZXRhY2g9PT09PT0+Jywgcm91dGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc1JldXNlUm91dGUocm91dGUpO1xuICAgIH1cblxuICAgIHN0b3JlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBoYW5kbGU6IERldGFjaGVkUm91dGVIYW5kbGUpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5kZWJ1Zygnc3RvcmU9PT09PT0+Jywgcm91dGUsIGhhbmRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5nZXRSb3V0ZVVybDpcIiwgdGhpcy5nZXRSb3V0ZVVybChyb3V0ZSkpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzW3RoaXMuZ2V0Um91dGVVcmwocm91dGUpXSA9IGhhbmRsZTtcbiAgICB9XG5cbiAgICBzaG91bGRBdHRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1Zygnc2hvdWxkQXR0YWNoPT09PT09PicsIHJvdXRlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNSZXVzZVJvdXRlKHJvdXRlKSAmJiAoISF0aGlzLmhhbmRsZXJzW3RoaXMuZ2V0Um91dGVVcmwocm91dGUpXSk7XG4gICAgfVxuXG4gICAgcmV0cmlldmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBEZXRhY2hlZFJvdXRlSGFuZGxlIHtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygncmV0cmlldmU9PT09PT0+Jywgcm91dGUpO1xuICAgICAgICBpZiAoIXRoaXMuaGFuZGxlcnNbdGhpcy5nZXRSb3V0ZVVybChyb3V0ZSldKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzW3RoaXMuZ2V0Um91dGVVcmwocm91dGUpXTtcbiAgICB9XG5cbiAgICBzaG91bGRSZXVzZVJvdXRlKGZ1dHVyZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdzaG91bGRSZXVzZVJvdXRlPT09PT09PicsIGZ1dHVyZSwgY3Vycik7XG4gICAgICAgIHJldHVybiBmdXR1cmUucm91dGVDb25maWcgPT09IGN1cnIucm91dGVDb25maWc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSb3V0ZVVybChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgICAgICBsZXQgbmV4dCA9IHRoaXMuZ2V0VHJ1dGhSb3V0ZShyb3V0ZSk7XG4gICAgICAgIGxldCBzZWdtZW50cyA9IFtdO1xuICAgICAgICB3aGlsZSAobmV4dCkge1xuICAgICAgICAgICAgc2VnbWVudHMucHVzaChuZXh0LnVybC5qb2luKCcvJykpO1xuICAgICAgICAgICAgbmV4dCA9IG5leHQucGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGxldCAvKiogQHR5cGUgez99ICovIHVybCA9IHNlZ21lbnRzXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgLmpvaW4oJy8nKTtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICBnZXRUcnV0aFJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgICAgIGxldCBuZXh0ID0gcm91dGU7XG4gICAgICAgIHdoaWxlIChuZXh0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIG5leHQgPSBuZXh0LmZpcnN0Q2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1JldXNlUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgICAgICAgLy9kZWZhdWx0IGlzIHRydWU7XG4gICAgICAgIGxldCBzaG91bGRSZXVzZSA9IHRydWU7XG4gICAgICAgIGxldCBuZXh0ID0gcm91dGU7XG4gICAgICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICAgICAgICBpZiAobmV4dC5kYXRhLmhhc093blByb3BlcnR5KFwiY2FjaGVcIikpIHtcbiAgICAgICAgICAgICAgICBzaG91bGRSZXVzZSA9IG5leHQuZGF0YS5jYWNoZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5leHQgPSBuZXh0LmZpcnN0Q2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnaXNSZXVzZVJvdXRlJywgc2hvdWxkUmV1c2UpO1xuICAgICAgICByZXR1cm4gc2hvdWxkUmV1c2U7XG4gICAgfVxuXG59Il19