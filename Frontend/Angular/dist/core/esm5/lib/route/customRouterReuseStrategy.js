/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomRouterReuseStrategy = /** @class */ (function () {
    function CustomRouterReuseStrategy() {
        this.handlers = {};
    }
    /**
     * @return {?}
     */
    CustomRouterReuseStrategy.prototype.deleteRouteSnapshot = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('delete snapshot!!');
        Object.keys(this.handlers).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var componentRef = null;
            if (_this.handlers[key])
                componentRef = _this.handlers[key]['componentRef'];
            if (componentRef) {
                componentRef.destroy();
            }
        }));
        this.handlers = {};
    };
    /**
     * @param {?} route
     * @return {?}
     */
    CustomRouterReuseStrategy.prototype.shouldDetach = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        console.debug('shouldDetach======>', route);
        return this.isReuseRoute(route);
    };
    /**
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    CustomRouterReuseStrategy.prototype.store = /**
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    function (route, handle) {
        console.debug('store======>', route, handle);
        console.log("this.getRouteUrl:", this.getRouteUrl(route));
        this.handlers[this.getRouteUrl(route)] = handle;
    };
    /**
     * @param {?} route
     * @return {?}
     */
    CustomRouterReuseStrategy.prototype.shouldAttach = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        // console.debug('shouldAttach======>', route);
        return this.isReuseRoute(route) && (!!this.handlers[this.getRouteUrl(route)]);
    };
    /**
     * @param {?} route
     * @return {?}
     */
    CustomRouterReuseStrategy.prototype.retrieve = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        // console.debug('retrieve======>', route);
        if (!this.handlers[this.getRouteUrl(route)]) {
            return null;
        }
        return this.handlers[this.getRouteUrl(route)];
    };
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    CustomRouterReuseStrategy.prototype.shouldReuseRoute = /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    function (future, curr) {
        // console.debug('shouldReuseRoute======>', future, curr);
        return future.routeConfig === curr.routeConfig;
    };
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    CustomRouterReuseStrategy.prototype.getRouteUrl = /**
     * @private
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var next = this.getTruthRoute(route);
        /** @type {?} */
        var segments = [];
        while (next) {
            segments.push(next.url.join('/'));
            next = next.parent;
        }
        /** @type {?} */
        var /** @type {?} */ url = segments
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
    };
    /**
     * @param {?} route
     * @return {?}
     */
    CustomRouterReuseStrategy.prototype.getTruthRoute = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var next = route;
        while (next.firstChild) {
            next = next.firstChild;
        }
        return next;
    };
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    CustomRouterReuseStrategy.prototype.isReuseRoute = /**
     * @private
     * @param {?} route
     * @return {?}
     */
    function (route) {
        //default is true;
        /** @type {?} */
        var shouldReuse = true;
        /** @type {?} */
        var next = route;
        while (next) {
            if (next.data.hasOwnProperty("cache")) {
                shouldReuse = next.data.cache;
            }
            next = next.firstChild;
        }
        console.debug('isReuseRoute', shouldReuse);
        return shouldReuse;
    };
    return CustomRouterReuseStrategy;
}());
export { CustomRouterReuseStrategy };
if (false) {
    /** @type {?} */
    CustomRouterReuseStrategy.prototype.handlers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tUm91dGVyUmV1c2VTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGUvY3VzdG9tUm91dGVyUmV1c2VTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0E7SUFBQTtRQUVXLGFBQVEsR0FBMkMsRUFBRSxDQUFDO0lBbUZqRSxDQUFDOzs7O0lBakZVLHVEQUFtQjs7O0lBQTFCO1FBQUEsaUJBV0M7UUFWRyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsR0FBRzs7Z0JBQy9CLFlBQVksR0FBRyxJQUFJO1lBQ3ZCLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7Z0JBQ2xCLFlBQVksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RELElBQUksWUFBWSxFQUFFO2dCQUNkLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMxQjtRQUNMLENBQUMsRUFBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxnREFBWTs7OztJQUFaLFVBQWEsS0FBNkI7UUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBRUQseUNBQUs7Ozs7O0lBQUwsVUFBTSxLQUE2QixFQUFFLE1BQTJCO1FBQzVELE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxnREFBWTs7OztJQUFaLFVBQWEsS0FBNkI7UUFDdEMsK0NBQStDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7O0lBRUQsNENBQVE7Ozs7SUFBUixVQUFTLEtBQTZCO1FBQ2xDLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRUQsb0RBQWdCOzs7OztJQUFoQixVQUFpQixNQUE4QixFQUFFLElBQTRCO1FBQ3pFLDBEQUEwRDtRQUMxRCxPQUFPLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFFTywrQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsS0FBNkI7O1lBQ3pDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzs7WUFDaEMsUUFBUSxHQUFHLEVBQUU7UUFDakIsT0FBTyxJQUFJLEVBQUU7WUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdEI7O1lBQ0csZ0JBQWdCLENBQUMsR0FBRyxHQUFHLFFBQVE7YUFDOUIsTUFBTTs7OztRQUFDLFVBQVUsQ0FBQztZQUNmLE9BQU8sQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxFQUFDO2FBQ0QsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNkLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxpREFBYTs7OztJQUFiLFVBQWMsS0FBNkI7O1lBQ25DLElBQUksR0FBRyxLQUFLO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLGdEQUFZOzs7OztJQUFwQixVQUFxQixLQUE2Qjs7O1lBRTFDLFdBQVcsR0FBRyxJQUFJOztZQUNsQixJQUFJLEdBQUcsS0FBSztRQUNoQixPQUFPLElBQUksRUFBRTtZQUNULElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ25DLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNqQztZQUNELElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDM0MsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVMLGdDQUFDO0FBQUQsQ0FBQyxBQXJGRCxJQXFGQzs7OztJQW5GRyw2Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZVJldXNlU3RyYXRlZ3ksIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIERldGFjaGVkUm91dGVIYW5kbGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21Sb3V0ZXJSZXVzZVN0cmF0ZWd5IGltcGxlbWVudHMgUm91dGVSZXVzZVN0cmF0ZWd5IHtcblxuICAgIHB1YmxpYyBoYW5kbGVyczogeyBba2V5OiBzdHJpbmddOiBEZXRhY2hlZFJvdXRlSGFuZGxlIH0gPSB7fTtcblxuICAgIHB1YmxpYyBkZWxldGVSb3V0ZVNuYXBzaG90KCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIHNuYXBzaG90ISEnKTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5oYW5kbGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgY29tcG9uZW50UmVmID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZXJzW2tleV0pXG4gICAgICAgICAgICAgICAgY29tcG9uZW50UmVmID0gdGhpcy5oYW5kbGVyc1trZXldWydjb21wb25lbnRSZWYnXTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmhhbmRsZXJzID0ge307XG4gICAgfVxuXG4gICAgc2hvdWxkRGV0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ3Nob3VsZERldGFjaD09PT09PT4nLCByb3V0ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzUmV1c2VSb3V0ZShyb3V0ZSk7XG4gICAgfVxuXG4gICAgc3RvcmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIGhhbmRsZTogRGV0YWNoZWRSb3V0ZUhhbmRsZSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdzdG9yZT09PT09PT4nLCByb3V0ZSwgaGFuZGxlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmdldFJvdXRlVXJsOlwiLCB0aGlzLmdldFJvdXRlVXJsKHJvdXRlKSk7XG4gICAgICAgIHRoaXMuaGFuZGxlcnNbdGhpcy5nZXRSb3V0ZVVybChyb3V0ZSldID0gaGFuZGxlO1xuICAgIH1cblxuICAgIHNob3VsZEF0dGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdzaG91bGRBdHRhY2g9PT09PT0+Jywgcm91dGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc1JldXNlUm91dGUocm91dGUpICYmICghIXRoaXMuaGFuZGxlcnNbdGhpcy5nZXRSb3V0ZVVybChyb3V0ZSldKTtcbiAgICB9XG5cbiAgICByZXRyaWV2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IERldGFjaGVkUm91dGVIYW5kbGUge1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdyZXRyaWV2ZT09PT09PT4nLCByb3V0ZSk7XG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVyc1t0aGlzLmdldFJvdXRlVXJsKHJvdXRlKV0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcnNbdGhpcy5nZXRSb3V0ZVVybChyb3V0ZSldO1xuICAgIH1cblxuICAgIHNob3VsZFJldXNlUm91dGUoZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBjdXJyOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ3Nob3VsZFJldXNlUm91dGU9PT09PT0+JywgZnV0dXJlLCBjdXJyKTtcbiAgICAgICAgcmV0dXJuIGZ1dHVyZS5yb3V0ZUNvbmZpZyA9PT0gY3Vyci5yb3V0ZUNvbmZpZztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJvdXRlVXJsKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgICAgIGxldCBuZXh0ID0gdGhpcy5nZXRUcnV0aFJvdXRlKHJvdXRlKTtcbiAgICAgICAgbGV0IHNlZ21lbnRzID0gW107XG4gICAgICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICAgICAgICBzZWdtZW50cy5wdXNoKG5leHQudXJsLmpvaW4oJy8nKSk7XG4gICAgICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IC8qKiBAdHlwZSB7P30gKi8gdXJsID0gc2VnbWVudHNcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAuam9pbignLycpO1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIGdldFRydXRoUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgICAgICAgbGV0IG5leHQgPSByb3V0ZTtcbiAgICAgICAgd2hpbGUgKG5leHQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbmV4dCA9IG5leHQuZmlyc3RDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzUmV1c2VSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgICAgICAvL2RlZmF1bHQgaXMgdHJ1ZTtcbiAgICAgICAgbGV0IHNob3VsZFJldXNlID0gdHJ1ZTtcbiAgICAgICAgbGV0IG5leHQgPSByb3V0ZTtcbiAgICAgICAgd2hpbGUgKG5leHQpIHtcbiAgICAgICAgICAgIGlmIChuZXh0LmRhdGEuaGFzT3duUHJvcGVydHkoXCJjYWNoZVwiKSkge1xuICAgICAgICAgICAgICAgIHNob3VsZFJldXNlID0gbmV4dC5kYXRhLmNhY2hlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV4dCA9IG5leHQuZmlyc3RDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmRlYnVnKCdpc1JldXNlUm91dGUnLCBzaG91bGRSZXVzZSk7XG4gICAgICAgIHJldHVybiBzaG91bGRSZXVzZTtcbiAgICB9XG5cbn0iXX0=