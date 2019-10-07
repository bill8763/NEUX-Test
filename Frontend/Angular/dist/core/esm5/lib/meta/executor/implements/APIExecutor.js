/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, ErrorHandler } from "@angular/core";
import { APPError } from "../../../errorHandler/APPError";
import { APIFactory } from "../../../api/APIFactory";
import { APIDispatch } from "../../../api/APIDispatch";
import * as i0 from "@angular/core";
import * as i1 from "../../../api/APIFactory";
import * as i2 from "../../../api/APIDispatch";
var APIExecutor = /** @class */ (function () {
    function APIExecutor(errorHandler, APIFactory, dispatcher) {
        this.errorHandler = errorHandler;
        this.APIFactory = APIFactory;
        this.dispatcher = dispatcher;
    }
    /**
     * @param {?} config
     * @param {?=} params
     * @return {?}
     */
    APIExecutor.prototype.getData = /**
     * @param {?} config
     * @param {?=} params
     * @return {?}
     */
    function (config, params) {
        if (params === void 0) { params = null; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var API_1, resp, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        API_1 = this.APIFactory.getAPI(config.source.read);
                        if (params)
                            Object.keys(params).forEach((/**
                             * @param {?} key
                             * @return {?}
                             */
                            function (key) {
                                API_1[key] = params[key];
                            }));
                        return [4 /*yield*/, this.dispatcher.dispatch(API_1).toPromise()];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, resp["Body"][0]];
                    case 2:
                        error_1 = _a.sent();
                        this.errorHandler.handleError(new APPError("F00802", error_1.message));
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} config
     * @param {?} data
     * @param {?=} params
     * @return {?}
     */
    APIExecutor.prototype.saveData = /**
     * @param {?} config
     * @param {?} data
     * @param {?=} params
     * @return {?}
     */
    function (config, data, params) {
        if (params === void 0) { params = null; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var API_2, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        API_2 = this.APIFactory.getAPI(config.source.write);
                        if (params)
                            Object.keys(params).forEach((/**
                             * @param {?} key
                             * @return {?}
                             */
                            function (key) {
                                API_2[key] = params[key];
                            }));
                        API_2["Data"] = data;
                        return [4 /*yield*/, this.dispatcher.dispatch(API_2).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        this.errorHandler.handleError(new APPError("F00803", error_2.message));
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    APIExecutor.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    APIExecutor.ctorParameters = function () { return [
        { type: ErrorHandler },
        { type: APIFactory },
        { type: APIDispatch }
    ]; };
    /** @nocollapse */ APIExecutor.ngInjectableDef = i0.defineInjectable({ factory: function APIExecutor_Factory() { return new APIExecutor(i0.inject(i0.ErrorHandler), i0.inject(i1.APIFactory), i0.inject(i2.APIDispatch)); }, token: APIExecutor, providedIn: "root" });
    return APIExecutor;
}());
export { APIExecutor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    APIExecutor.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    APIExecutor.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    APIExecutor.prototype.dispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJRXhlY3V0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL21ldGEvZXhlY3V0b3IvaW1wbGVtZW50cy9BUElFeGVjdXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBR3ZEO0lBS0kscUJBQ1ksWUFBMEIsRUFDMUIsVUFBc0IsRUFDdEIsVUFBdUI7UUFGdkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFhO0lBQy9CLENBQUM7Ozs7OztJQUVRLDZCQUFPOzs7OztJQUFwQixVQUFxQixNQUFrQixFQUFFLE1BQWtCO1FBQWxCLHVCQUFBLEVBQUEsYUFBa0I7Ozs7Ozs7d0JBRS9DLFFBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ3BELElBQUksTUFBTTs0QkFDTixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7NEJBQUMsVUFBQyxHQUFHO2dDQUM1QixLQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUMzQixDQUFDLEVBQUMsQ0FBQTt3QkFDSyxxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQXRELElBQUksR0FBRyxTQUErQzt3QkFDMUQsc0JBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDOzs7d0JBR3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxPQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDckUsc0JBQU8sSUFBSSxFQUFDOzs7OztLQUVuQjs7Ozs7OztJQUVZLDhCQUFROzs7Ozs7SUFBckIsVUFBc0IsTUFBa0IsRUFBRSxJQUFTLEVBQUUsTUFBa0I7UUFBbEIsdUJBQUEsRUFBQSxhQUFrQjs7Ozs7Ozt3QkFHM0QsUUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzt3QkFDckQsSUFBSSxNQUFNOzRCQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTzs7Ozs0QkFBQyxVQUFDLEdBQUc7Z0NBQzVCLEtBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQzNCLENBQUMsRUFBQyxDQUFBO3dCQUNOLEtBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQ1oscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7NEJBQXRELHNCQUFPLFNBQStDLEVBQUM7Ozt3QkFHdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNyRSxzQkFBTyxJQUFJLEVBQUM7Ozs7O0tBRW5COztnQkExQ0osVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7O2dCQVJvQixZQUFZO2dCQUV4QixVQUFVO2dCQUNWLFdBQVc7OztzQkFMcEI7Q0FtREMsQUEzQ0QsSUEyQ0M7U0F4Q1ksV0FBVzs7Ozs7O0lBR2hCLG1DQUFrQzs7Ozs7SUFDbEMsaUNBQThCOzs7OztJQUM5QixpQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTWV0YUV4ZWN1dG9yIH0gZnJvbSBcIi4uL01ldGFFeGVjdXRvci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE1ldGFDb25maWcgfSBmcm9tIFwiLi4vLi4vcGFyc2VyL2JlYW4vTWV0YUNvbmZpZ1wiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXJyb3JIYW5kbGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFQUEVycm9yIH0gZnJvbSBcIi4uLy4uLy4uL2Vycm9ySGFuZGxlci9BUFBFcnJvclwiO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9hcGkvQVBJRmFjdG9yeVwiO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vLi4vYXBpL0FQSURpc3BhdGNoXCI7XG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBUElFeGVjdXRvciBpbXBsZW1lbnRzIElNZXRhRXhlY3V0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXG4gICAgICAgIHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSxcbiAgICAgICAgcHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaFxuICAgICkgeyB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RGF0YShjb25maWc6IE1ldGFDb25maWcsIHBhcmFtczogYW55ID0gbnVsbCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IEFQSSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoY29uZmlnLnNvdXJjZS5yZWFkKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMpXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgQVBJW2tleV0gPSBwYXJhbXNba2V5XTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goQVBJKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwW1wiQm9keVwiXVswXTtcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwODAyXCIsIGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHNhdmVEYXRhKGNvbmZpZzogTWV0YUNvbmZpZywgZGF0YTogYW55LCBwYXJhbXM6IGFueSA9IG51bGwpIHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgbGV0IEFQSSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoY29uZmlnLnNvdXJjZS53cml0ZSk7XG4gICAgICAgICAgICBpZiAocGFyYW1zKVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEFQSVtrZXldID0gcGFyYW1zW2tleV07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIEFQSVtcIkRhdGFcIl0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChBUEkpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJGMDA4MDNcIiwgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59Il19