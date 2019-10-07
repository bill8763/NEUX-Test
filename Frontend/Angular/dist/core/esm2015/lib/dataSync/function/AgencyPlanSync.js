/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
export class AgencyPlanSync {
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
        return 'AGENCY_PLAN';
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
            if (resp.AgencyPlans.length > 0) {
                /** @type {?} */
                let saveAgencyPlan = this.apiFactory.getAPI("saveAgencyPlan");
                ((/** @type {?} */ (saveAgencyPlan))).AgencyPlanDatas = resp.AgencyPlans;
                /** @type {?} */
                let saveResp = yield this.dispatcher.dispatch(saveAgencyPlan).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbmN5UGxhblN5bmMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RhdGFTeW5jL2Z1bmN0aW9uL0FnZW5jeVBsYW5TeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUs1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHcEUsTUFBTTs7Ozs7OztJQUVGLFlBQW9CLFVBQXNCLEVBQVUsVUFBdUIsRUFBVSxVQUFvQixJQUFJLEVBQVUsVUFBb0IsSUFBSTtRQUEzSCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDM0ksSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0gsT0FBTyxhQUFhLENBQUE7SUFDeEIsQ0FBQzs7Ozs7SUFFSyxXQUFXLENBQUMsWUFBWTs7WUFDMUIsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0tBQUE7Ozs7O0lBRUssUUFBUSxDQUFDLElBQUk7O1lBQ2YsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O29CQUN6QixjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzdELENBQUMsbUJBQW1CLGNBQWMsRUFBQSxDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7O29CQUNuRSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0JBRXpFLE9BQU8sUUFBUSxDQUFDO2FBQ25CO2lCQUNJO2dCQUNELE9BQU8sSUFBSSxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDbkQ7UUFDTCxDQUFDO0tBQUE7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWlCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFSyxxQkFBcUI7O1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDO0tBQUE7Ozs7O0lBRUssZUFBZSxDQUFDLEdBQWtCOztRQUV4QyxDQUFDO0tBQUE7Q0FDSjs7Ozs7O0lBNUNHLCtCQUFzQjs7Ozs7SUFDVixvQ0FBOEI7Ozs7O0lBQUUsb0NBQStCOzs7OztJQUFFLGlDQUFnQzs7Ozs7SUFBRSxpQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRnVuY3Rpb25TeW5jLCBGVU5DX1NUQVRFIH0gZnJvbSBcIi4vSUZ1bmN0aW9uU3luY1wiO1xuaW1wb3J0IHsgSVN5bmNBT1AgfSBmcm9tIFwiLi9TeW5jQU9QLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9hcGkvQVBJRmFjdG9yeVwiO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vYXBpL0FQSURpc3BhdGNoXCI7XG5pbXBvcnQgeyBzYXZlQWdlbmN5UGxhbkFQSSB9IGZyb20gJy4uLy4uL2FwaS9yZWdpc3Rlci9zYXZlQWdlbmN5UGxhbkFQSSc7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVJlc3BvbnNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIEFnZW5jeVBsYW5TeW5jIGltcGxlbWVudHMgSUZ1bmN0aW9uU3luYyB7XG4gICAgcHJpdmF0ZSBzdGF0ZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpRmFjdG9yeTogQVBJRmFjdG9yeSwgcHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaCwgcHJpdmF0ZSBQdXNoQU9QOiBJU3luY0FPUCA9IG51bGwsIHByaXZhdGUgUHVsbEFPUDogSVN5bmNBT1AgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBGVU5DX1NUQVRFLkFWQUlMQUJMRTtcbiAgICB9XG5cbiAgICBnZXRTdGF0ZSgpOiBGVU5DX1NUQVRFIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0FHRU5DWV9QTEFOJ1xuICAgIH1cblxuICAgIGFzeW5jIGdldFB1c2hKc29uKGZyb250ZW5kVGltZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgYXN5bmMgcHVsbERhdGEocmVzcCkge1xuICAgICAgICBpZiAodGhpcy5QdWxsQU9QKSB7XG4gICAgICAgICAgICByZXNwID0gYXdhaXQgdGhpcy5QdWxsQU9QLmV4ZWN1dGUocmVzcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3AuQWdlbmN5UGxhbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNhdmVBZ2VuY3lQbGFuID0gdGhpcy5hcGlGYWN0b3J5LmdldEFQSShcInNhdmVBZ2VuY3lQbGFuXCIpO1xuICAgICAgICAgICAgKDxzYXZlQWdlbmN5UGxhbkFQST5zYXZlQWdlbmN5UGxhbikuQWdlbmN5UGxhbkRhdGFzID0gcmVzcC5BZ2VuY3lQbGFucztcbiAgICAgICAgICAgIGxldCBzYXZlUmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChzYXZlQWdlbmN5UGxhbikudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzYXZlUmVzcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU1FMaXRlUmVzcG9uc2UoeyBzdGF0dXM6IHRydWUgfSwgW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoc3RhdGU6IEZVTkNfU1RBVEUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNlcXVlbnRpYWxJRE5lZWRlZCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0U2VxdWVudGlhbElEKGlkczogQXJyYXk8c3RyaW5nPikge1xuXG4gICAgfVxufSJdfQ==