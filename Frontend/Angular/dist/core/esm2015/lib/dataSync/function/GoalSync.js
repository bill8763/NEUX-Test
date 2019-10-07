/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
export class GoalSync {
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
        return 'GOAL';
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
            if (resp.Goals.length > 0) {
                /** @type {?} */
                let saveGoal = this.apiFactory.getAPI("saveGoal");
                ((/** @type {?} */ (saveGoal))).GoalDatas = resp.Goals;
                /** @type {?} */
                let saveResp = yield this.dispatcher.dispatch(saveGoal).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFN5bmMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RhdGFTeW5jL2Z1bmN0aW9uL0dvYWxTeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUs1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHcEUsTUFBTTs7Ozs7OztJQUVGLFlBQW9CLFVBQXNCLEVBQVUsVUFBdUIsRUFBVSxVQUFvQixJQUFJLEVBQVUsVUFBb0IsSUFBSTtRQUEzSCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDM0ksSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0gsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzs7Ozs7SUFFSyxXQUFXLENBQUMsWUFBWTs7WUFDMUIsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0tBQUE7Ozs7O0lBRUssUUFBUSxDQUFDLElBQUk7O1lBQ2YsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O29CQUNuQixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUNqRCxDQUFDLG1CQUFhLFFBQVEsRUFBQSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7O29CQUMzQyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0JBRW5FLE9BQU8sUUFBUSxDQUFDO2FBQ25CO2lCQUNJO2dCQUNELE9BQU8sSUFBSSxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDbkQ7UUFDTCxDQUFDO0tBQUE7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWlCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFSyxxQkFBcUI7O1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDO0tBQUE7Ozs7O0lBRUssZUFBZSxDQUFDLEdBQWtCOztRQUV4QyxDQUFDO0tBQUE7Q0FDSjs7Ozs7O0lBNUNHLHlCQUFzQjs7Ozs7SUFDViw4QkFBOEI7Ozs7O0lBQUUsOEJBQStCOzs7OztJQUFFLDJCQUFnQzs7Ozs7SUFBRSwyQkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRnVuY3Rpb25TeW5jLCBGVU5DX1NUQVRFIH0gZnJvbSBcIi4vSUZ1bmN0aW9uU3luY1wiO1xuaW1wb3J0IHsgSVN5bmNBT1AgfSBmcm9tIFwiLi9TeW5jQU9QLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9hcGkvQVBJRmFjdG9yeVwiO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vYXBpL0FQSURpc3BhdGNoXCI7XG5pbXBvcnQgeyBzYXZlR29hbEFQSSB9IGZyb20gJy4uLy4uL2FwaS9yZWdpc3Rlci9zYXZlR29hbEFQSSc7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVJlc3BvbnNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIEdvYWxTeW5jIGltcGxlbWVudHMgSUZ1bmN0aW9uU3luYyB7XG4gICAgcHJpdmF0ZSBzdGF0ZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpRmFjdG9yeTogQVBJRmFjdG9yeSwgcHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaCwgcHJpdmF0ZSBQdXNoQU9QOiBJU3luY0FPUCA9IG51bGwsIHByaXZhdGUgUHVsbEFPUDogSVN5bmNBT1AgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBGVU5DX1NUQVRFLkFWQUlMQUJMRTtcbiAgICB9XG5cbiAgICBnZXRTdGF0ZSgpOiBGVU5DX1NUQVRFIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0dPQUwnXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHVzaEpzb24oZnJvbnRlbmRUaW1lKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBhc3luYyBwdWxsRGF0YShyZXNwKSB7XG4gICAgICAgIGlmICh0aGlzLlB1bGxBT1ApIHtcbiAgICAgICAgICAgIHJlc3AgPSBhd2FpdCB0aGlzLlB1bGxBT1AuZXhlY3V0ZShyZXNwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcC5Hb2Fscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgc2F2ZUdvYWwgPSB0aGlzLmFwaUZhY3RvcnkuZ2V0QVBJKFwic2F2ZUdvYWxcIik7XG4gICAgICAgICAgICAoPHNhdmVHb2FsQVBJPnNhdmVHb2FsKS5Hb2FsRGF0YXMgPSByZXNwLkdvYWxzO1xuICAgICAgICAgICAgbGV0IHNhdmVSZXNwID0gYXdhaXQgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHNhdmVHb2FsKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNhdmVSZXNwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogdHJ1ZSB9LCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTdGF0ZShzdGF0ZTogRlVOQ19TVEFURSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2VxdWVudGlhbElETmVlZGVkKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRTZXF1ZW50aWFsSUQoaWRzOiBBcnJheTxzdHJpbmc+KSB7XG5cbiAgICB9XG59Il19