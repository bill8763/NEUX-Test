/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
var YearConfigSync = /** @class */ (function () {
    function YearConfigSync(apiFactory, dispatcher, PushAOP, PullAOP) {
        if (PushAOP === void 0) { PushAOP = null; }
        if (PullAOP === void 0) { PullAOP = null; }
        this.apiFactory = apiFactory;
        this.dispatcher = dispatcher;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    YearConfigSync.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this.state;
    };
    /**
     * @return {?}
     */
    YearConfigSync.prototype.getName = /**
     * @return {?}
     */
    function () {
        return 'YEAR_CONFIG';
    };
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    YearConfigSync.prototype.getPushJson = /**
     * @param {?} frontendTime
     * @return {?}
     */
    function (frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, []];
            });
        });
    };
    /**
     * @param {?} resp
     * @return {?}
     */
    YearConfigSync.prototype.pullData = /**
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var saveYearConfig, saveResp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.PullAOP) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.PullAOP.execute(resp)];
                    case 1:
                        resp = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(resp.Configurations.length > 0)) return [3 /*break*/, 4];
                        saveYearConfig = this.apiFactory.getAPI("saveYearConfig");
                        ((/** @type {?} */ (saveYearConfig))).FirstUseAPP = resp.FirstUseAPP;
                        ((/** @type {?} */ (saveYearConfig))).yearConfigs = resp.Configurations;
                        return [4 /*yield*/, this.dispatcher.dispatch(saveYearConfig).toPromise()];
                    case 3:
                        saveResp = _a.sent();
                        return [2 /*return*/, saveResp];
                    case 4: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                }
            });
        });
    };
    /**
     * @param {?} state
     * @return {?}
     */
    YearConfigSync.prototype.setState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
    };
    /**
     * @return {?}
     */
    YearConfigSync.prototype.getSequentialIDNeeded = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, -1];
            });
        });
    };
    /**
     * @param {?} ids
     * @return {?}
     */
    YearConfigSync.prototype.setSequentialID = /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return YearConfigSync;
}());
export { YearConfigSync };
if (false) {
    /**
     * @type {?}
     * @private
     */
    YearConfigSync.prototype.state;
    /**
     * @type {?}
     * @private
     */
    YearConfigSync.prototype.apiFactory;
    /**
     * @type {?}
     * @private
     */
    YearConfigSync.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    YearConfigSync.prototype.PushAOP;
    /**
     * @type {?}
     * @private
     */
    YearConfigSync.prototype.PullAOP;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWWVhckNvbmZpZ1N5bmMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RhdGFTeW5jL2Z1bmN0aW9uL1llYXJDb25maWdTeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUs1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHcEU7SUFFSSx3QkFBb0IsVUFBc0IsRUFBVSxVQUF1QixFQUFVLE9BQXdCLEVBQVUsT0FBd0I7UUFBMUQsd0JBQUEsRUFBQSxjQUF3QjtRQUFVLHdCQUFBLEVBQUEsY0FBd0I7UUFBM0gsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQzNJLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxnQ0FBTzs7O0lBQVA7UUFDSSxPQUFPLGFBQWEsQ0FBQTtJQUN4QixDQUFDOzs7OztJQUVLLG9DQUFXOzs7O0lBQWpCLFVBQWtCLFlBQVk7OztnQkFDMUIsc0JBQU8sRUFBRSxFQUFDOzs7S0FDYjs7Ozs7SUFFSyxpQ0FBUTs7OztJQUFkLFVBQWUsSUFBSTs7Ozs7OzZCQUNYLElBQUksQ0FBQyxPQUFPLEVBQVosd0JBQVk7d0JBQ0wscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF2QyxJQUFJLEdBQUcsU0FBZ0MsQ0FBQzs7OzZCQUV4QyxDQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQSxFQUE5Qix3QkFBOEI7d0JBQzFCLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDN0QsQ0FBQyxtQkFBbUIsY0FBYyxFQUFBLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDbkUsQ0FBQyxtQkFBbUIsY0FBYyxFQUFBLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQzt3QkFDdkQscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFyRSxRQUFRLEdBQUcsU0FBMEQ7d0JBQ3pFLHNCQUFPLFFBQVEsRUFBQzs0QkFHaEIsc0JBQU8sSUFBSSxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7Ozs7S0FFdkQ7Ozs7O0lBRUQsaUNBQVE7Ozs7SUFBUixVQUFTLEtBQWlCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFSyw4Q0FBcUI7OztJQUEzQjs7O2dCQUNJLHNCQUFPLENBQUMsQ0FBQyxFQUFDOzs7S0FDYjs7Ozs7SUFFSyx3Q0FBZTs7OztJQUFyQixVQUFzQixHQUFrQjs7Ozs7O0tBRXZDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDOzs7Ozs7O0lBNUNHLCtCQUFzQjs7Ozs7SUFDVixvQ0FBOEI7Ozs7O0lBQUUsb0NBQStCOzs7OztJQUFFLGlDQUFnQzs7Ozs7SUFBRSxpQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRnVuY3Rpb25TeW5jLCBGVU5DX1NUQVRFIH0gZnJvbSBcIi4vSUZ1bmN0aW9uU3luY1wiO1xuaW1wb3J0IHsgSVN5bmNBT1AgfSBmcm9tIFwiLi9TeW5jQU9QLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9hcGkvQVBJRmFjdG9yeVwiO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vYXBpL0FQSURpc3BhdGNoXCI7XG5pbXBvcnQgeyBzYXZlWWVhckNvbmZpZ0FQSSB9IGZyb20gXCIuLi8uLi9hcGkvcmVnaXN0ZXIvc2F2ZVllYXJDb25maWdBUElcIjtcbmltcG9ydCB7IFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvU1FMaXRlUmVzcG9uc2VcIjtcblxuXG5leHBvcnQgY2xhc3MgWWVhckNvbmZpZ1N5bmMgaW1wbGVtZW50cyBJRnVuY3Rpb25TeW5jIHtcbiAgICBwcml2YXRlIHN0YXRlOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlGYWN0b3J5OiBBUElGYWN0b3J5LCBwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLCBwcml2YXRlIFB1c2hBT1A6IElTeW5jQU9QID0gbnVsbCwgcHJpdmF0ZSBQdWxsQU9QOiBJU3luY0FPUCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEZVTkNfU1RBVEUuQVZBSUxBQkxFO1xuICAgIH1cblxuICAgIGdldFN0YXRlKCk6IEZVTkNfU1RBVEUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnWUVBUl9DT05GSUcnXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHVzaEpzb24oZnJvbnRlbmRUaW1lKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBhc3luYyBwdWxsRGF0YShyZXNwKSB7XG4gICAgICAgIGlmICh0aGlzLlB1bGxBT1ApIHtcbiAgICAgICAgICAgIHJlc3AgPSBhd2FpdCB0aGlzLlB1bGxBT1AuZXhlY3V0ZShyZXNwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcC5Db25maWd1cmF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgc2F2ZVllYXJDb25maWcgPSB0aGlzLmFwaUZhY3RvcnkuZ2V0QVBJKFwic2F2ZVllYXJDb25maWdcIik7XG4gICAgICAgICAgICAoPHNhdmVZZWFyQ29uZmlnQVBJPnNhdmVZZWFyQ29uZmlnKS5GaXJzdFVzZUFQUCA9IHJlc3AuRmlyc3RVc2VBUFA7XG4gICAgICAgICAgICAoPHNhdmVZZWFyQ29uZmlnQVBJPnNhdmVZZWFyQ29uZmlnKS55ZWFyQ29uZmlncyA9IHJlc3AuQ29uZmlndXJhdGlvbnM7XG4gICAgICAgICAgICBsZXQgc2F2ZVJlc3AgPSBhd2FpdCB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goc2F2ZVllYXJDb25maWcpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHNhdmVSZXNwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogdHJ1ZSB9LCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTdGF0ZShzdGF0ZTogRlVOQ19TVEFURSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2VxdWVudGlhbElETmVlZGVkKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRTZXF1ZW50aWFsSUQoaWRzOiBBcnJheTxzdHJpbmc+KSB7XG5cbiAgICB9XG59Il19