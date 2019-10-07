/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
var SettingValueAPI = /** @class */ (function () {
    function SettingValueAPI(translateService, deviceService) {
        this._translateService = translateService;
        this._deviceService = deviceService;
    }
    /**
     * @return {?}
     */
    SettingValueAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getSettingValue';
    };
    /**
     * @return {?}
     */
    SettingValueAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getSettingValue.json';
    };
    /**
     * @return {?}
     */
    SettingValueAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var resp = {
                Language: _this._translateService.getCurrentLanguage(),
                LastUpdatedTime: "Setting_See_Details"
            };
            _this._deviceService.getAppVersion().then((/**
             * @param {?} version
             * @return {?}
             */
            function (version) {
                resp["Version"] = version;
                observer.next({ Header: { "isSuccess": true }, Body: [resp] });
                observer.complete();
            }));
        }));
    };
    return SettingValueAPI;
}());
export { SettingValueAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingValueAPI.prototype._translateService;
    /**
     * @type {?}
     * @private
     */
    SettingValueAPI.prototype._deviceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ1ZhbHVlQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvU2V0dGluZ1ZhbHVlQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUWxDO0lBR0kseUJBQ0ksZ0JBQWtDLEVBQ2xDLGFBQTRCO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsb0NBQVU7OztJQUFWO1FBQ0ksT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0ksT0FBTyxvQ0FBb0MsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsb0NBQVU7OztJQUFWO1FBQUEsaUJBWUM7UUFYRyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFROztnQkFDMUIsSUFBSSxHQUFHO2dCQUNQLFFBQVEsRUFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUU7Z0JBQ3JELGVBQWUsRUFBRSxxQkFBcUI7YUFDekM7WUFDRCxLQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLE9BQU87Z0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEIsQ0FBQyxFQUFDLENBQUE7UUFDTixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7Ozs7Ozs7SUEvQkcsNENBQTRDOzs7OztJQUM1Qyx5Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi4vQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gJy4uL01vY2tBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICcuLi9TUUxpdGVBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnknO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL2xhbmd1YWdlL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IERldmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9kZXZpY2UvZGV2aWNlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ1ZhbHVlQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuICAgIHByaXZhdGUgX3RyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZVxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UgPSB0cmFuc2xhdGVTZXJ2aWNlO1xuICAgICAgICB0aGlzLl9kZXZpY2VTZXJ2aWNlID0gZGV2aWNlU2VydmljZTtcbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnZ2V0U2V0dGluZ1ZhbHVlJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0U2V0dGluZ1ZhbHVlLmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3AgPSB7XG4gICAgICAgICAgICAgICAgTGFuZ3VhZ2U6IHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UuZ2V0Q3VycmVudExhbmd1YWdlKCksXG4gICAgICAgICAgICAgICAgTGFzdFVwZGF0ZWRUaW1lOiBcIlNldHRpbmdfU2VlX0RldGFpbHNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZGV2aWNlU2VydmljZS5nZXRBcHBWZXJzaW9uKCkudGhlbih2ZXJzaW9uID0+IHtcbiAgICAgICAgICAgICAgICByZXNwW1wiVmVyc2lvblwiXSA9IHZlcnNpb247XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7IEhlYWRlcjogeyBcImlzU3VjY2Vzc1wiOiB0cnVlIH0sIEJvZHk6IFtyZXNwXSB9KTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=