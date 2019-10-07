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
export class APIExecutor {
    /**
     * @param {?} errorHandler
     * @param {?} APIFactory
     * @param {?} dispatcher
     */
    constructor(errorHandler, APIFactory, dispatcher) {
        this.errorHandler = errorHandler;
        this.APIFactory = APIFactory;
        this.dispatcher = dispatcher;
    }
    /**
     * @param {?} config
     * @param {?=} params
     * @return {?}
     */
    getData(config, params = null) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let API = this.APIFactory.getAPI(config.source.read);
                if (params)
                    Object.keys(params).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    (key) => {
                        API[key] = params[key];
                    }));
                /** @type {?} */
                let resp = yield this.dispatcher.dispatch(API).toPromise();
                return resp["Body"][0];
            }
            catch (error) {
                this.errorHandler.handleError(new APPError("F00802", error.message));
                return null;
            }
        });
    }
    /**
     * @param {?} config
     * @param {?} data
     * @param {?=} params
     * @return {?}
     */
    saveData(config, data, params = null) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let API = this.APIFactory.getAPI(config.source.write);
                if (params)
                    Object.keys(params).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    (key) => {
                        API[key] = params[key];
                    }));
                API["Data"] = data;
                return yield this.dispatcher.dispatch(API).toPromise();
            }
            catch (error) {
                this.errorHandler.handleError(new APPError("F00803", error.message));
                return null;
            }
        });
    }
}
APIExecutor.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
APIExecutor.ctorParameters = () => [
    { type: ErrorHandler },
    { type: APIFactory },
    { type: APIDispatch }
];
/** @nocollapse */ APIExecutor.ngInjectableDef = i0.defineInjectable({ factory: function APIExecutor_Factory() { return new APIExecutor(i0.inject(i0.ErrorHandler), i0.inject(i1.APIFactory), i0.inject(i2.APIDispatch)); }, token: APIExecutor, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJRXhlY3V0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL21ldGEvZXhlY3V0b3IvaW1wbGVtZW50cy9BUElFeGVjdXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBTXZELE1BQU07Ozs7OztJQUVGLFlBQ1ksWUFBMEIsRUFDMUIsVUFBc0IsRUFDdEIsVUFBdUI7UUFGdkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFhO0lBQy9CLENBQUM7Ozs7OztJQUVRLE9BQU8sQ0FBQyxNQUFrQixFQUFFLFNBQWMsSUFBSTs7WUFDdkQsSUFBSTs7b0JBQ0ksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNwRCxJQUFJLE1BQU07b0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O29CQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7d0JBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNCLENBQUMsRUFBQyxDQUFBOztvQkFDRixJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0JBQzFELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBRTFCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyRSxPQUFPLElBQUksQ0FBQzthQUNmO1FBQ0wsQ0FBQztLQUFBOzs7Ozs7O0lBRVksUUFBUSxDQUFDLE1BQWtCLEVBQUUsSUFBUyxFQUFFLFNBQWMsSUFBSTs7WUFDbkUsSUFBSTs7b0JBRUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNyRCxJQUFJLE1BQU07b0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O29CQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7d0JBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNCLENBQUMsRUFBQyxDQUFBO2dCQUNOLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ25CLE9BQU8sTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUUxRDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDckUsT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUM7S0FBQTs7O1lBMUNKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7O1lBUm9CLFlBQVk7WUFFeEIsVUFBVTtZQUNWLFdBQVc7Ozs7Ozs7O0lBU1osbUNBQWtDOzs7OztJQUNsQyxpQ0FBOEI7Ozs7O0lBQzlCLGlDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNZXRhRXhlY3V0b3IgfSBmcm9tIFwiLi4vTWV0YUV4ZWN1dG9yLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgTWV0YUNvbmZpZyB9IGZyb20gXCIuLi8uLi9wYXJzZXIvYmVhbi9NZXRhQ29uZmlnXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFcnJvckhhbmRsZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQVBQRXJyb3IgfSBmcm9tIFwiLi4vLi4vLi4vZXJyb3JIYW5kbGVyL0FQUEVycm9yXCI7XG5pbXBvcnQgeyBBUElGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9BUElGYWN0b3J5XCI7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi8uLi9hcGkvQVBJRGlzcGF0Y2hcIjtcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFQSUV4ZWN1dG9yIGltcGxlbWVudHMgSU1ldGFFeGVjdXRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcbiAgICAgICAgcHJpdmF0ZSBBUElGYWN0b3J5OiBBUElGYWN0b3J5LFxuICAgICAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoXG4gICAgKSB7IH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXREYXRhKGNvbmZpZzogTWV0YUNvbmZpZywgcGFyYW1zOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQVBJID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShjb25maWcuc291cmNlLnJlYWQpO1xuICAgICAgICAgICAgaWYgKHBhcmFtcylcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBBUElba2V5XSA9IHBhcmFtc1trZXldO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChBUEkpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BbXCJCb2R5XCJdWzBdO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJGMDA4MDJcIiwgZXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2F2ZURhdGEoY29uZmlnOiBNZXRhQ29uZmlnLCBkYXRhOiBhbnksIHBhcmFtczogYW55ID0gbnVsbCkge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBsZXQgQVBJID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShjb25maWcuc291cmNlLndyaXRlKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMpXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgQVBJW2tleV0gPSBwYXJhbXNba2V5XTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgQVBJW1wiRGF0YVwiXSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKEFQSSkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcihcIkYwMDgwM1wiLCBlcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=