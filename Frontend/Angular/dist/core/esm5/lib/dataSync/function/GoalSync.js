/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
var GoalSync = /** @class */ (function () {
    function GoalSync(apiFactory, dispatcher, PushAOP, PullAOP) {
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
    GoalSync.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this.state;
    };
    /**
     * @return {?}
     */
    GoalSync.prototype.getName = /**
     * @return {?}
     */
    function () {
        return 'GOAL';
    };
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    GoalSync.prototype.getPushJson = /**
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
    GoalSync.prototype.pullData = /**
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var saveGoal, saveResp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.PullAOP) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.PullAOP.execute(resp)];
                    case 1:
                        resp = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(resp.Goals.length > 0)) return [3 /*break*/, 4];
                        saveGoal = this.apiFactory.getAPI("saveGoal");
                        ((/** @type {?} */ (saveGoal))).GoalDatas = resp.Goals;
                        return [4 /*yield*/, this.dispatcher.dispatch(saveGoal).toPromise()];
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
    GoalSync.prototype.setState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
    };
    /**
     * @return {?}
     */
    GoalSync.prototype.getSequentialIDNeeded = /**
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
    GoalSync.prototype.setSequentialID = /**
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
    return GoalSync;
}());
export { GoalSync };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSync.prototype.state;
    /**
     * @type {?}
     * @private
     */
    GoalSync.prototype.apiFactory;
    /**
     * @type {?}
     * @private
     */
    GoalSync.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    GoalSync.prototype.PushAOP;
    /**
     * @type {?}
     * @private
     */
    GoalSync.prototype.PullAOP;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFN5bmMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RhdGFTeW5jL2Z1bmN0aW9uL0dvYWxTeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUs1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHcEU7SUFFSSxrQkFBb0IsVUFBc0IsRUFBVSxVQUF1QixFQUFVLE9BQXdCLEVBQVUsT0FBd0I7UUFBMUQsd0JBQUEsRUFBQSxjQUF3QjtRQUFVLHdCQUFBLEVBQUEsY0FBd0I7UUFBM0gsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQzNJLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsMkJBQVE7OztJQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCwwQkFBTzs7O0lBQVA7UUFDSSxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDOzs7OztJQUVLLDhCQUFXOzs7O0lBQWpCLFVBQWtCLFlBQVk7OztnQkFDMUIsc0JBQU8sRUFBRSxFQUFDOzs7S0FDYjs7Ozs7SUFFSywyQkFBUTs7OztJQUFkLFVBQWUsSUFBSTs7Ozs7OzZCQUNYLElBQUksQ0FBQyxPQUFPLEVBQVosd0JBQVk7d0JBQ0wscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF2QyxJQUFJLEdBQUcsU0FBZ0MsQ0FBQzs7OzZCQUV4QyxDQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQSxFQUFyQix3QkFBcUI7d0JBQ2pCLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7d0JBQ2pELENBQUMsbUJBQWEsUUFBUSxFQUFBLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDaEMscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUEvRCxRQUFRLEdBQUcsU0FBb0Q7d0JBRW5FLHNCQUFPLFFBQVEsRUFBQzs0QkFHaEIsc0JBQU8sSUFBSSxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7Ozs7S0FFdkQ7Ozs7O0lBRUQsMkJBQVE7Ozs7SUFBUixVQUFTLEtBQWlCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFSyx3Q0FBcUI7OztJQUEzQjs7O2dCQUNJLHNCQUFPLENBQUMsQ0FBQyxFQUFDOzs7S0FDYjs7Ozs7SUFFSyxrQ0FBZTs7OztJQUFyQixVQUFzQixHQUFrQjs7Ozs7O0tBRXZDO0lBQ0wsZUFBQztBQUFELENBQUMsQUE3Q0QsSUE2Q0M7Ozs7Ozs7SUE1Q0cseUJBQXNCOzs7OztJQUNWLDhCQUE4Qjs7Ozs7SUFBRSw4QkFBK0I7Ozs7O0lBQUUsMkJBQWdDOzs7OztJQUFFLDJCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElGdW5jdGlvblN5bmMsIEZVTkNfU1RBVEUgfSBmcm9tIFwiLi9JRnVuY3Rpb25TeW5jXCI7XG5pbXBvcnQgeyBJU3luY0FPUCB9IGZyb20gXCIuL1N5bmNBT1AuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBBUElGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2FwaS9BUElGYWN0b3J5XCI7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9hcGkvQVBJRGlzcGF0Y2hcIjtcbmltcG9ydCB7IHNhdmVHb2FsQVBJIH0gZnJvbSAnLi4vLi4vYXBpL3JlZ2lzdGVyL3NhdmVHb2FsQVBJJztcbmltcG9ydCB7IFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvU1FMaXRlUmVzcG9uc2VcIjtcblxuXG5leHBvcnQgY2xhc3MgR29hbFN5bmMgaW1wbGVtZW50cyBJRnVuY3Rpb25TeW5jIHtcbiAgICBwcml2YXRlIHN0YXRlOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlGYWN0b3J5OiBBUElGYWN0b3J5LCBwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLCBwcml2YXRlIFB1c2hBT1A6IElTeW5jQU9QID0gbnVsbCwgcHJpdmF0ZSBQdWxsQU9QOiBJU3luY0FPUCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEZVTkNfU1RBVEUuQVZBSUxBQkxFO1xuICAgIH1cblxuICAgIGdldFN0YXRlKCk6IEZVTkNfU1RBVEUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnR09BTCdcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQdXNoSnNvbihmcm9udGVuZFRpbWUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGFzeW5jIHB1bGxEYXRhKHJlc3ApIHtcbiAgICAgICAgaWYgKHRoaXMuUHVsbEFPUCkge1xuICAgICAgICAgICAgcmVzcCA9IGF3YWl0IHRoaXMuUHVsbEFPUC5leGVjdXRlKHJlc3ApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwLkdvYWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBzYXZlR29hbCA9IHRoaXMuYXBpRmFjdG9yeS5nZXRBUEkoXCJzYXZlR29hbFwiKTtcbiAgICAgICAgICAgICg8c2F2ZUdvYWxBUEk+c2F2ZUdvYWwpLkdvYWxEYXRhcyA9IHJlc3AuR29hbHM7XG4gICAgICAgICAgICBsZXQgc2F2ZVJlc3AgPSBhd2FpdCB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goc2F2ZUdvYWwpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2F2ZVJlc3A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiB0cnVlIH0sIFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFN0YXRlKHN0YXRlOiBGVU5DX1NUQVRFKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTZXF1ZW50aWFsSUROZWVkZWQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGFzeW5jIHNldFNlcXVlbnRpYWxJRChpZHM6IEFycmF5PHN0cmluZz4pIHtcblxuICAgIH1cbn0iXX0=