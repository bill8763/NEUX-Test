/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
export class ProgressSync {
    /**
     * @param {?} apiFactory
     * @param {?} dispatcher
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(apiFactory, dispatcher, PushAOP = null, PullAOP = null) {
        this.apiFactory = apiFactory;
        this.dispatcher = dispatcher;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'PROGRESS';
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    pullData(resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.PullAOP) {
                resp = yield this.PullAOP.execute(resp);
            }
            if (resp.Progress.length > 0) {
                /** @type {?} */
                let saveProgress = this.apiFactory.getAPI("saveProgress");
                ((/** @type {?} */ (saveProgress))).ProgressDatas = resp.Progress;
                /** @type {?} */
                let saveResp = yield this.dispatcher.dispatch(saveProgress).toPromise();
                return saveResp;
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this.state = state;
    }
    /**
     * @return {?}
     */
    getSequentialIDNeeded() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return -1;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NTeW5jLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhU3luYy9mdW5jdGlvbi9Qcm9ncmVzc1N5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUdwRSxNQUFNOzs7Ozs7O0lBRUYsWUFBb0IsVUFBc0IsRUFBVSxVQUF1QixFQUFVLFVBQW9CLElBQUksRUFBVSxVQUFvQixJQUFJO1FBQTNILGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUMzSSxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELE9BQU87UUFDSCxPQUFPLFVBQVUsQ0FBQTtJQUNyQixDQUFDOzs7OztJQUVLLFdBQVcsQ0FBQyxZQUFZOztZQUMxQixPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7S0FBQTs7Ozs7SUFFSyxRQUFRLENBQUMsSUFBSTs7WUFDZixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2QsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0M7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7b0JBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7Z0JBQ3pELENBQUMsbUJBQWlCLFlBQVksRUFBQSxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7O29CQUMxRCxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0JBRXZFLE9BQU8sUUFBUSxDQUFDO2FBQ25CO2lCQUNJO2dCQUNELE9BQU8sSUFBSSxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDbkQ7UUFDTCxDQUFDO0tBQUE7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWlCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFSyxxQkFBcUI7O1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDO0tBQUE7Ozs7O0lBRUssZUFBZSxDQUFDLEdBQWtCOztRQUV4QyxDQUFDO0tBQUE7Q0FDSjs7Ozs7O0lBNUNHLDZCQUFzQjs7Ozs7SUFDVixrQ0FBOEI7Ozs7O0lBQUUsa0NBQStCOzs7OztJQUFFLCtCQUFnQzs7Ozs7SUFBRSwrQkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRnVuY3Rpb25TeW5jLCBGVU5DX1NUQVRFIH0gZnJvbSBcIi4vSUZ1bmN0aW9uU3luY1wiO1xuaW1wb3J0IHsgSVN5bmNBT1AgfSBmcm9tIFwiLi9TeW5jQU9QLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9hcGkvQVBJRmFjdG9yeVwiO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vYXBpL0FQSURpc3BhdGNoXCI7XG5pbXBvcnQgeyBzYXZlUHJvZ3Jlc3NBUEkgfSBmcm9tICcuLi8uLi9hcGkvcmVnaXN0ZXIvc2F2ZVByb2dyZXNzQVBJJztcbmltcG9ydCB7IFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvU1FMaXRlUmVzcG9uc2VcIjtcblxuXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTeW5jIGltcGxlbWVudHMgSUZ1bmN0aW9uU3luYyB7XG4gICAgcHJpdmF0ZSBzdGF0ZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpRmFjdG9yeTogQVBJRmFjdG9yeSwgcHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaCwgcHJpdmF0ZSBQdXNoQU9QOiBJU3luY0FPUCA9IG51bGwsIHByaXZhdGUgUHVsbEFPUDogSVN5bmNBT1AgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBGVU5DX1NUQVRFLkFWQUlMQUJMRTtcbiAgICB9XG5cbiAgICBnZXRTdGF0ZSgpOiBGVU5DX1NUQVRFIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1BST0dSRVNTJ1xuICAgIH1cblxuICAgIGFzeW5jIGdldFB1c2hKc29uKGZyb250ZW5kVGltZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgYXN5bmMgcHVsbERhdGEocmVzcCkge1xuICAgICAgICBpZiAodGhpcy5QdWxsQU9QKSB7XG4gICAgICAgICAgICByZXNwID0gYXdhaXQgdGhpcy5QdWxsQU9QLmV4ZWN1dGUocmVzcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3AuUHJvZ3Jlc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNhdmVQcm9ncmVzcyA9IHRoaXMuYXBpRmFjdG9yeS5nZXRBUEkoXCJzYXZlUHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICAoPHNhdmVQcm9ncmVzc0FQST5zYXZlUHJvZ3Jlc3MpLlByb2dyZXNzRGF0YXMgPSByZXNwLlByb2dyZXNzO1xuICAgICAgICAgICAgbGV0IHNhdmVSZXNwID0gYXdhaXQgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHNhdmVQcm9ncmVzcykudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzYXZlUmVzcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU1FMaXRlUmVzcG9uc2UoeyBzdGF0dXM6IHRydWUgfSwgW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoc3RhdGU6IEZVTkNfU1RBVEUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNlcXVlbnRpYWxJRE5lZWRlZCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0U2VxdWVudGlhbElEKGlkczogQXJyYXk8c3RyaW5nPikge1xuXG4gICAgfVxufSJdfQ==