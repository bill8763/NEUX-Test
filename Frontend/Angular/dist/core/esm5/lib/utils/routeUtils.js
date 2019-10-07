/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RouteUtils = /** @class */ (function () {
    function RouteUtils() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    RouteUtils.convertJsonToRouterMap = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var map = {};
        /** @type {?} */
        var funcList = Object.keys(data);
        funcList.forEach((/**
         * @param {?} func_name
         * @return {?}
         */
        function (func_name) {
            Object.keys(data[func_name]).forEach((/**
             * @param {?} pageName
             * @return {?}
             */
            function (pageName) {
                data[func_name][pageName] = Object.assign(data[func_name][pageName], {
                    Function: func_name
                });
                map[pageName] = data[func_name][pageName];
            }));
        }));
        return map;
    };
    return RouteUtils;
}());
export { RouteUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVVdGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvcm91dGVVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTtJQWVBLENBQUM7Ozs7O0lBYmlCLGlDQUFzQjs7OztJQUFwQyxVQUFxQyxJQUFTOztZQUN0QyxHQUFHLEdBQUcsRUFBRTs7WUFDUixRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLFNBQVM7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxRQUFRO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ2pFLFFBQVEsRUFBRSxTQUFTO2lCQUN0QixDQUFDLENBQUE7Z0JBQ0YsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxDQUFDLEVBQUMsQ0FBQTtRQUNOLENBQUMsRUFBQyxDQUFBO1FBQ0YsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSb3V0ZVV0aWxzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEpzb25Ub1JvdXRlck1hcChkYXRhOiBhbnkpOiBhbnkge1xuICAgICAgICBsZXQgbWFwID0ge307XG4gICAgICAgIGxldCBmdW5jTGlzdCA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICAgICAgICBmdW5jTGlzdC5mb3JFYWNoKGZ1bmNfbmFtZSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhW2Z1bmNfbmFtZV0pLmZvckVhY2gocGFnZU5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGFbZnVuY19uYW1lXVtwYWdlTmFtZV0gPSBPYmplY3QuYXNzaWduKGRhdGFbZnVuY19uYW1lXVtwYWdlTmFtZV0sIHtcbiAgICAgICAgICAgICAgICAgICAgRnVuY3Rpb246IGZ1bmNfbmFtZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbWFwW3BhZ2VOYW1lXSA9IGRhdGFbZnVuY19uYW1lXVtwYWdlTmFtZV07XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbWFwO1xuICAgIH1cbn0iXX0=