/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from "../APIRequest";
var LoginAPI = /** @class */ (function () {
    function LoginAPI() {
        this.url = '';
        this.body = {};
        this.type = "GET";
        this.params = null;
    }
    /**
     * @return {?}
     */
    LoginAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'onlineLogin';
    };
    /**
     * @return {?}
     */
    LoginAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/onlineLogin.json';
    };
    /**
     * @return {?}
     */
    LoginAPI.prototype.getRequestData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requestData = new APIRequest();
        requestData.body = this.body;
        requestData.url = this.url;
        requestData.type = "POST";
        requestData.params = this.params;
        return requestData;
    };
    return LoginAPI;
}());
export { LoginAPI };
if (false) {
    /** @type {?} */
    LoginAPI.prototype.url;
    /** @type {?} */
    LoginAPI.prototype.body;
    /** @type {?} */
    LoginAPI.prototype.type;
    /** @type {?} */
    LoginAPI.prototype.params;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5BUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9Mb2dpbkFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUVFO1FBRU8sUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsV0FBTSxHQUFHLElBQUksQ0FBQztJQUxMLENBQUM7Ozs7SUFPViw2QkFBVTs7O0lBQWpCO1FBQ0UsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVNLDhCQUFXOzs7SUFBbEI7UUFDRSxPQUFPLGdDQUFnQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFTSxpQ0FBYzs7O0lBQXJCOztZQUNNLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUNsQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLFdBQVcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUgsZUFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7Ozs7SUF0QkMsdUJBQWdCOztJQUNoQix3QkFBaUI7O0lBQ2pCLHdCQUFvQjs7SUFDcEIsMEJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSUFQSSB9IGZyb20gXCIuLi9BUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJUmVzdGZ1bEFQSSB9IGZyb20gXCIuLi9SZXN0ZnVsQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiLi4vTW9ja0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tIFwiLi4vQVBJUmVxdWVzdFwiO1xuXG5leHBvcnQgY2xhc3MgTG9naW5BUEkgaW1wbGVtZW50cyBJQVBJLCBJUmVzdGZ1bEFQSSwgSU1vY2tBUEkge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHVybCA9ICcnO1xuICBwdWJsaWMgYm9keSA9IHt9O1xuICBwdWJsaWMgdHlwZSA9IFwiR0VUXCI7XG4gIHB1YmxpYyBwYXJhbXMgPSBudWxsO1xuXG4gIHB1YmxpYyBnZXRBUElOYW1lKCkge1xuICAgIHJldHVybiAnb25saW5lTG9naW4nO1xuICB9XG5cbiAgcHVibGljIGdldE1vY2tQYXRoKCkge1xuICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9vbmxpbmVMb2dpbi5qc29uJztcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXF1ZXN0RGF0YSgpIHtcbiAgICBsZXQgcmVxdWVzdERhdGEgPSBuZXcgQVBJUmVxdWVzdCgpO1xuICAgIHJlcXVlc3REYXRhLmJvZHkgPSB0aGlzLmJvZHk7XG4gICAgcmVxdWVzdERhdGEudXJsID0gdGhpcy51cmw7XG4gICAgcmVxdWVzdERhdGEudHlwZSA9IFwiUE9TVFwiO1xuICAgIHJlcXVlc3REYXRhLnBhcmFtcyA9IHRoaXMucGFyYW1zO1xuICAgIHJldHVybiByZXF1ZXN0RGF0YTtcbiAgfVxuXG59XG5cbiJdfQ==