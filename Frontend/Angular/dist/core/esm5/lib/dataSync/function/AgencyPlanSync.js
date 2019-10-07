/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
var AgencyPlanSync = /** @class */ (function () {
    function AgencyPlanSync(apiFactory, dispatcher, PushAOP, PullAOP) {
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
    AgencyPlanSync.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this.state;
    };
    /**
     * @return {?}
     */
    AgencyPlanSync.prototype.getName = /**
     * @return {?}
     */
    function () {
        return 'AGENCY_PLAN';
    };
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    AgencyPlanSync.prototype.getPushJson = /**
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
    AgencyPlanSync.prototype.pullData = /**
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var saveAgencyPlan, saveResp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.PullAOP) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.PullAOP.execute(resp)];
                    case 1:
                        resp = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(resp.AgencyPlans.length > 0)) return [3 /*break*/, 4];
                        saveAgencyPlan = this.apiFactory.getAPI("saveAgencyPlan");
                        ((/** @type {?} */ (saveAgencyPlan))).AgencyPlanDatas = resp.AgencyPlans;
                        return [4 /*yield*/, this.dispatcher.dispatch(saveAgencyPlan).toPromise()];
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
    AgencyPlanSync.prototype.setState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
    };
    /**
     * @return {?}
     */
    AgencyPlanSync.prototype.getSequentialIDNeeded = /**
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
    AgencyPlanSync.prototype.setSequentialID = /**
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
    return AgencyPlanSync;
}());
export { AgencyPlanSync };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AgencyPlanSync.prototype.state;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanSync.prototype.apiFactory;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanSync.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanSync.prototype.PushAOP;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanSync.prototype.PullAOP;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbmN5UGxhblN5bmMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RhdGFTeW5jL2Z1bmN0aW9uL0FnZW5jeVBsYW5TeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUs1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHcEU7SUFFSSx3QkFBb0IsVUFBc0IsRUFBVSxVQUF1QixFQUFVLE9BQXdCLEVBQVUsT0FBd0I7UUFBMUQsd0JBQUEsRUFBQSxjQUF3QjtRQUFVLHdCQUFBLEVBQUEsY0FBd0I7UUFBM0gsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQzNJLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxnQ0FBTzs7O0lBQVA7UUFDSSxPQUFPLGFBQWEsQ0FBQTtJQUN4QixDQUFDOzs7OztJQUVLLG9DQUFXOzs7O0lBQWpCLFVBQWtCLFlBQVk7OztnQkFDMUIsc0JBQU8sRUFBRSxFQUFDOzs7S0FDYjs7Ozs7SUFFSyxpQ0FBUTs7OztJQUFkLFVBQWUsSUFBSTs7Ozs7OzZCQUNYLElBQUksQ0FBQyxPQUFPLEVBQVosd0JBQVk7d0JBQ0wscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF2QyxJQUFJLEdBQUcsU0FBZ0MsQ0FBQzs7OzZCQUV4QyxDQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQSxFQUEzQix3QkFBMkI7d0JBQ3ZCLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDN0QsQ0FBQyxtQkFBbUIsY0FBYyxFQUFBLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDeEQscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFyRSxRQUFRLEdBQUcsU0FBMEQ7d0JBRXpFLHNCQUFPLFFBQVEsRUFBQzs0QkFHaEIsc0JBQU8sSUFBSSxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7Ozs7S0FFdkQ7Ozs7O0lBRUQsaUNBQVE7Ozs7SUFBUixVQUFTLEtBQWlCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFSyw4Q0FBcUI7OztJQUEzQjs7O2dCQUNJLHNCQUFPLENBQUMsQ0FBQyxFQUFDOzs7S0FDYjs7Ozs7SUFFSyx3Q0FBZTs7OztJQUFyQixVQUFzQixHQUFrQjs7Ozs7O0tBRXZDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDOzs7Ozs7O0lBNUNHLCtCQUFzQjs7Ozs7SUFDVixvQ0FBOEI7Ozs7O0lBQUUsb0NBQStCOzs7OztJQUFFLGlDQUFnQzs7Ozs7SUFBRSxpQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRnVuY3Rpb25TeW5jLCBGVU5DX1NUQVRFIH0gZnJvbSBcIi4vSUZ1bmN0aW9uU3luY1wiO1xuaW1wb3J0IHsgSVN5bmNBT1AgfSBmcm9tIFwiLi9TeW5jQU9QLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9hcGkvQVBJRmFjdG9yeVwiO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vYXBpL0FQSURpc3BhdGNoXCI7XG5pbXBvcnQgeyBzYXZlQWdlbmN5UGxhbkFQSSB9IGZyb20gJy4uLy4uL2FwaS9yZWdpc3Rlci9zYXZlQWdlbmN5UGxhbkFQSSc7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVJlc3BvbnNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIEFnZW5jeVBsYW5TeW5jIGltcGxlbWVudHMgSUZ1bmN0aW9uU3luYyB7XG4gICAgcHJpdmF0ZSBzdGF0ZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpRmFjdG9yeTogQVBJRmFjdG9yeSwgcHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaCwgcHJpdmF0ZSBQdXNoQU9QOiBJU3luY0FPUCA9IG51bGwsIHByaXZhdGUgUHVsbEFPUDogSVN5bmNBT1AgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBGVU5DX1NUQVRFLkFWQUlMQUJMRTtcbiAgICB9XG5cbiAgICBnZXRTdGF0ZSgpOiBGVU5DX1NUQVRFIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0FHRU5DWV9QTEFOJ1xuICAgIH1cblxuICAgIGFzeW5jIGdldFB1c2hKc29uKGZyb250ZW5kVGltZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgYXN5bmMgcHVsbERhdGEocmVzcCkge1xuICAgICAgICBpZiAodGhpcy5QdWxsQU9QKSB7XG4gICAgICAgICAgICByZXNwID0gYXdhaXQgdGhpcy5QdWxsQU9QLmV4ZWN1dGUocmVzcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3AuQWdlbmN5UGxhbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNhdmVBZ2VuY3lQbGFuID0gdGhpcy5hcGlGYWN0b3J5LmdldEFQSShcInNhdmVBZ2VuY3lQbGFuXCIpO1xuICAgICAgICAgICAgKDxzYXZlQWdlbmN5UGxhbkFQST5zYXZlQWdlbmN5UGxhbikuQWdlbmN5UGxhbkRhdGFzID0gcmVzcC5BZ2VuY3lQbGFucztcbiAgICAgICAgICAgIGxldCBzYXZlUmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChzYXZlQWdlbmN5UGxhbikudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzYXZlUmVzcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU1FMaXRlUmVzcG9uc2UoeyBzdGF0dXM6IHRydWUgfSwgW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoc3RhdGU6IEZVTkNfU1RBVEUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNlcXVlbnRpYWxJRE5lZWRlZCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0U2VxdWVudGlhbElEKGlkczogQXJyYXk8c3RyaW5nPikge1xuXG4gICAgfVxufSJdfQ==