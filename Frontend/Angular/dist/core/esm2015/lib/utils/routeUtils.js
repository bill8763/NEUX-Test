/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class RouteUtils {
    /**
     * @param {?} data
     * @return {?}
     */
    static convertJsonToRouterMap(data) {
        /** @type {?} */
        let map = {};
        /** @type {?} */
        let funcList = Object.keys(data);
        funcList.forEach((/**
         * @param {?} func_name
         * @return {?}
         */
        func_name => {
            Object.keys(data[func_name]).forEach((/**
             * @param {?} pageName
             * @return {?}
             */
            pageName => {
                data[func_name][pageName] = Object.assign(data[func_name][pageName], {
                    Function: func_name
                });
                map[pageName] = data[func_name][pageName];
            }));
        }));
        return map;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVVdGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvcm91dGVVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTs7Ozs7SUFFSyxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBUzs7WUFDdEMsR0FBRyxHQUFHLEVBQUU7O1lBQ1IsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUU7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDakUsUUFBUSxFQUFFLFNBQVM7aUJBQ3RCLENBQUMsQ0FBQTtnQkFDRixHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLENBQUMsRUFBQyxDQUFBO1FBQ04sQ0FBQyxFQUFDLENBQUE7UUFDRixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSb3V0ZVV0aWxzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEpzb25Ub1JvdXRlck1hcChkYXRhOiBhbnkpOiBhbnkge1xuICAgICAgICBsZXQgbWFwID0ge307XG4gICAgICAgIGxldCBmdW5jTGlzdCA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICAgICAgICBmdW5jTGlzdC5mb3JFYWNoKGZ1bmNfbmFtZSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhW2Z1bmNfbmFtZV0pLmZvckVhY2gocGFnZU5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGFbZnVuY19uYW1lXVtwYWdlTmFtZV0gPSBPYmplY3QuYXNzaWduKGRhdGFbZnVuY19uYW1lXVtwYWdlTmFtZV0sIHtcbiAgICAgICAgICAgICAgICAgICAgRnVuY3Rpb246IGZ1bmNfbmFtZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbWFwW3BhZ2VOYW1lXSA9IGRhdGFbZnVuY19uYW1lXVtwYWdlTmFtZV07XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbWFwO1xuICAgIH1cbn0iXX0=