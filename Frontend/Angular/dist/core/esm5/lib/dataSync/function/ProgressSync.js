/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
var ProgressSync = /** @class */ (function () {
    function ProgressSync(apiFactory, dispatcher, PushAOP, PullAOP) {
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
    ProgressSync.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this.state;
    };
    /**
     * @return {?}
     */
    ProgressSync.prototype.getName = /**
     * @return {?}
     */
    function () {
        return 'PROGRESS';
    };
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    ProgressSync.prototype.getPushJson = /**
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
    ProgressSync.prototype.pullData = /**
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var saveProgress, saveResp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.PullAOP) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.PullAOP.execute(resp)];
                    case 1:
                        resp = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(resp.Progress.length > 0)) return [3 /*break*/, 4];
                        saveProgress = this.apiFactory.getAPI("saveProgress");
                        ((/** @type {?} */ (saveProgress))).ProgressDatas = resp.Progress;
                        return [4 /*yield*/, this.dispatcher.dispatch(saveProgress).toPromise()];
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
    ProgressSync.prototype.setState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
    };
    /**
     * @return {?}
     */
    ProgressSync.prototype.getSequentialIDNeeded = /**
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
    ProgressSync.prototype.setSequentialID = /**
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
    return ProgressSync;
}());
export { ProgressSync };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProgressSync.prototype.state;
    /**
     * @type {?}
     * @private
     */
    ProgressSync.prototype.apiFactory;
    /**
     * @type {?}
     * @private
     */
    ProgressSync.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    ProgressSync.prototype.PushAOP;
    /**
     * @type {?}
     * @private
     */
    ProgressSync.prototype.PullAOP;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NTeW5jLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhU3luYy9mdW5jdGlvbi9Qcm9ncmVzc1N5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUdwRTtJQUVJLHNCQUFvQixVQUFzQixFQUFVLFVBQXVCLEVBQVUsT0FBd0IsRUFBVSxPQUF3QjtRQUExRCx3QkFBQSxFQUFBLGNBQXdCO1FBQVUsd0JBQUEsRUFBQSxjQUF3QjtRQUEzSCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDM0ksSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCwrQkFBUTs7O0lBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDhCQUFPOzs7SUFBUDtRQUNJLE9BQU8sVUFBVSxDQUFBO0lBQ3JCLENBQUM7Ozs7O0lBRUssa0NBQVc7Ozs7SUFBakIsVUFBa0IsWUFBWTs7O2dCQUMxQixzQkFBTyxFQUFFLEVBQUM7OztLQUNiOzs7OztJQUVLLCtCQUFROzs7O0lBQWQsVUFBZSxJQUFJOzs7Ozs7NkJBQ1gsSUFBSSxDQUFDLE9BQU8sRUFBWix3QkFBWTt3QkFDTCxxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXZDLElBQUksR0FBRyxTQUFnQyxDQUFDOzs7NkJBRXhDLENBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBLEVBQXhCLHdCQUF3Qjt3QkFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQzt3QkFDekQsQ0FBQyxtQkFBaUIsWUFBWSxFQUFBLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDL0MscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFuRSxRQUFRLEdBQUcsU0FBd0Q7d0JBRXZFLHNCQUFPLFFBQVEsRUFBQzs0QkFHaEIsc0JBQU8sSUFBSSxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7Ozs7S0FFdkQ7Ozs7O0lBRUQsK0JBQVE7Ozs7SUFBUixVQUFTLEtBQWlCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFSyw0Q0FBcUI7OztJQUEzQjs7O2dCQUNJLHNCQUFPLENBQUMsQ0FBQyxFQUFDOzs7S0FDYjs7Ozs7SUFFSyxzQ0FBZTs7OztJQUFyQixVQUFzQixHQUFrQjs7Ozs7O0tBRXZDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDOzs7Ozs7O0lBNUNHLDZCQUFzQjs7Ozs7SUFDVixrQ0FBOEI7Ozs7O0lBQUUsa0NBQStCOzs7OztJQUFFLCtCQUFnQzs7Ozs7SUFBRSwrQkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRnVuY3Rpb25TeW5jLCBGVU5DX1NUQVRFIH0gZnJvbSBcIi4vSUZ1bmN0aW9uU3luY1wiO1xuaW1wb3J0IHsgSVN5bmNBT1AgfSBmcm9tIFwiLi9TeW5jQU9QLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9hcGkvQVBJRmFjdG9yeVwiO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vYXBpL0FQSURpc3BhdGNoXCI7XG5pbXBvcnQgeyBzYXZlUHJvZ3Jlc3NBUEkgfSBmcm9tICcuLi8uLi9hcGkvcmVnaXN0ZXIvc2F2ZVByb2dyZXNzQVBJJztcbmltcG9ydCB7IFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvU1FMaXRlUmVzcG9uc2VcIjtcblxuXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTeW5jIGltcGxlbWVudHMgSUZ1bmN0aW9uU3luYyB7XG4gICAgcHJpdmF0ZSBzdGF0ZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpRmFjdG9yeTogQVBJRmFjdG9yeSwgcHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaCwgcHJpdmF0ZSBQdXNoQU9QOiBJU3luY0FPUCA9IG51bGwsIHByaXZhdGUgUHVsbEFPUDogSVN5bmNBT1AgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBGVU5DX1NUQVRFLkFWQUlMQUJMRTtcbiAgICB9XG5cbiAgICBnZXRTdGF0ZSgpOiBGVU5DX1NUQVRFIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1BST0dSRVNTJ1xuICAgIH1cblxuICAgIGFzeW5jIGdldFB1c2hKc29uKGZyb250ZW5kVGltZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgYXN5bmMgcHVsbERhdGEocmVzcCkge1xuICAgICAgICBpZiAodGhpcy5QdWxsQU9QKSB7XG4gICAgICAgICAgICByZXNwID0gYXdhaXQgdGhpcy5QdWxsQU9QLmV4ZWN1dGUocmVzcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3AuUHJvZ3Jlc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNhdmVQcm9ncmVzcyA9IHRoaXMuYXBpRmFjdG9yeS5nZXRBUEkoXCJzYXZlUHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICAoPHNhdmVQcm9ncmVzc0FQST5zYXZlUHJvZ3Jlc3MpLlByb2dyZXNzRGF0YXMgPSByZXNwLlByb2dyZXNzO1xuICAgICAgICAgICAgbGV0IHNhdmVSZXNwID0gYXdhaXQgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHNhdmVQcm9ncmVzcykudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzYXZlUmVzcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU1FMaXRlUmVzcG9uc2UoeyBzdGF0dXM6IHRydWUgfSwgW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoc3RhdGU6IEZVTkNfU1RBVEUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNlcXVlbnRpYWxJRE5lZWRlZCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0U2VxdWVudGlhbElEKGlkczogQXJyYXk8c3RyaW5nPikge1xuXG4gICAgfVxufSJdfQ==