/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
var ActualSync = /** @class */ (function () {
    function ActualSync(apiFactory, dispatcher, PushAOP, PullAOP) {
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
    ActualSync.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this.state;
    };
    /**
     * @return {?}
     */
    ActualSync.prototype.getName = /**
     * @return {?}
     */
    function () {
        return 'ACTUAL';
    };
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    ActualSync.prototype.getPushJson = /**
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
    ActualSync.prototype.pullData = /**
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var saveActual, saveResp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.PullAOP) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.PullAOP.execute(resp)];
                    case 1:
                        resp = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(resp.Actual.length > 0)) return [3 /*break*/, 4];
                        saveActual = this.apiFactory.getAPI("saveActual");
                        ((/** @type {?} */ (saveActual))).ActualDatas = resp.Actual;
                        return [4 /*yield*/, this.dispatcher.dispatch(saveActual).toPromise()];
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
    ActualSync.prototype.setState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
    };
    /**
     * @return {?}
     */
    ActualSync.prototype.getSequentialIDNeeded = /**
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
    ActualSync.prototype.setSequentialID = /**
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
    return ActualSync;
}());
export { ActualSync };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActualSync.prototype.state;
    /**
     * @type {?}
     * @private
     */
    ActualSync.prototype.apiFactory;
    /**
     * @type {?}
     * @private
     */
    ActualSync.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    ActualSync.prototype.PushAOP;
    /**
     * @type {?}
     * @private
     */
    ActualSync.prototype.PullAOP;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0dWFsU3luYy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGF0YVN5bmMvZnVuY3Rpb24vQWN0dWFsU3luYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBR3BFO0lBRUksb0JBQW9CLFVBQXNCLEVBQVUsVUFBdUIsRUFBVSxPQUF3QixFQUFVLE9BQXdCO1FBQTFELHdCQUFBLEVBQUEsY0FBd0I7UUFBVSx3QkFBQSxFQUFBLGNBQXdCO1FBQTNILGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUMzSSxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELDZCQUFROzs7SUFBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsNEJBQU87OztJQUFQO1FBQ0ksT0FBTyxRQUFRLENBQUE7SUFDbkIsQ0FBQzs7Ozs7SUFFSyxnQ0FBVzs7OztJQUFqQixVQUFrQixZQUFZOzs7Z0JBQzFCLHNCQUFPLEVBQUUsRUFBQzs7O0tBQ2I7Ozs7O0lBRUssNkJBQVE7Ozs7SUFBZCxVQUFlLElBQUk7Ozs7Ozs2QkFDWCxJQUFJLENBQUMsT0FBTyxFQUFaLHdCQUFZO3dCQUNMLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBdkMsSUFBSSxHQUFHLFNBQWdDLENBQUM7Ozs2QkFFeEMsQ0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUEsRUFBdEIsd0JBQXNCO3dCQUNsQixVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO3dCQUNyRCxDQUFDLG1CQUFlLFVBQVUsRUFBQSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBQ3ZDLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBakUsUUFBUSxHQUFHLFNBQXNEO3dCQUNyRSxzQkFBTyxRQUFRLEVBQUM7NEJBR2hCLHNCQUFPLElBQUksY0FBYyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDOzs7O0tBRXZEOzs7OztJQUVELDZCQUFROzs7O0lBQVIsVUFBUyxLQUFpQjtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBRUssMENBQXFCOzs7SUFBM0I7OztnQkFDSSxzQkFBTyxDQUFDLENBQUMsRUFBQzs7O0tBQ2I7Ozs7O0lBRUssb0NBQWU7Ozs7SUFBckIsVUFBc0IsR0FBa0I7Ozs7OztLQUV2QztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQzs7Ozs7OztJQTNDRywyQkFBc0I7Ozs7O0lBQ1YsZ0NBQThCOzs7OztJQUFFLGdDQUErQjs7Ozs7SUFBRSw2QkFBZ0M7Ozs7O0lBQUUsNkJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUZ1bmN0aW9uU3luYywgRlVOQ19TVEFURSB9IGZyb20gXCIuL0lGdW5jdGlvblN5bmNcIjtcbmltcG9ydCB7IElTeW5jQU9QIH0gZnJvbSBcIi4vU3luY0FPUC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IEFQSUZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vYXBpL0FQSUZhY3RvcnlcIjtcbmltcG9ydCB7IEFQSURpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL2FwaS9BUElEaXNwYXRjaFwiO1xuaW1wb3J0IHsgc2F2ZUFjdHVhbEFQSSB9IGZyb20gJy4uLy4uL2FwaS9yZWdpc3Rlci9zYXZlQWN0dWFsJztcbmltcG9ydCB7IFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvU1FMaXRlUmVzcG9uc2VcIjtcblxuXG5leHBvcnQgY2xhc3MgQWN0dWFsU3luYyBpbXBsZW1lbnRzIElGdW5jdGlvblN5bmMge1xuICAgIHByaXZhdGUgc3RhdGU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaUZhY3Rvcnk6IEFQSUZhY3RvcnksIHByaXZhdGUgZGlzcGF0Y2hlcjogQVBJRGlzcGF0Y2gsIHByaXZhdGUgUHVzaEFPUDogSVN5bmNBT1AgPSBudWxsLCBwcml2YXRlIFB1bGxBT1A6IElTeW5jQU9QID0gbnVsbCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gRlVOQ19TVEFURS5BVkFJTEFCTEU7XG4gICAgfVxuXG4gICAgZ2V0U3RhdGUoKTogRlVOQ19TVEFURSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cblxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdBQ1RVQUwnXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHVzaEpzb24oZnJvbnRlbmRUaW1lKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBhc3luYyBwdWxsRGF0YShyZXNwKSB7XG4gICAgICAgIGlmICh0aGlzLlB1bGxBT1ApIHtcbiAgICAgICAgICAgIHJlc3AgPSBhd2FpdCB0aGlzLlB1bGxBT1AuZXhlY3V0ZShyZXNwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcC5BY3R1YWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNhdmVBY3R1YWwgPSB0aGlzLmFwaUZhY3RvcnkuZ2V0QVBJKFwic2F2ZUFjdHVhbFwiKTtcbiAgICAgICAgICAgICg8c2F2ZUFjdHVhbEFQST5zYXZlQWN0dWFsKS5BY3R1YWxEYXRhcyA9IHJlc3AuQWN0dWFsO1xuICAgICAgICAgICAgbGV0IHNhdmVSZXNwID0gYXdhaXQgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHNhdmVBY3R1YWwpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHNhdmVSZXNwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogdHJ1ZSB9LCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTdGF0ZShzdGF0ZTogRlVOQ19TVEFURSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2VxdWVudGlhbElETmVlZGVkKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRTZXF1ZW50aWFsSUQoaWRzOiBBcnJheTxzdHJpbmc+KSB7XG5cbiAgICB9XG59Il19