/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
export class YearConfigSync {
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
        return 'YEAR_CONFIG';
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
            if (resp.Configurations.length > 0) {
                /** @type {?} */
                let saveYearConfig = this.apiFactory.getAPI("saveYearConfig");
                ((/** @type {?} */ (saveYearConfig))).FirstUseAPP = resp.FirstUseAPP;
                ((/** @type {?} */ (saveYearConfig))).yearConfigs = resp.Configurations;
                /** @type {?} */
                let saveResp = yield this.dispatcher.dispatch(saveYearConfig).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWWVhckNvbmZpZ1N5bmMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RhdGFTeW5jL2Z1bmN0aW9uL1llYXJDb25maWdTeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUs1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHcEUsTUFBTTs7Ozs7OztJQUVGLFlBQW9CLFVBQXNCLEVBQVUsVUFBdUIsRUFBVSxVQUFvQixJQUFJLEVBQVUsVUFBb0IsSUFBSTtRQUEzSCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDM0ksSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0gsT0FBTyxhQUFhLENBQUE7SUFDeEIsQ0FBQzs7Ozs7SUFFSyxXQUFXLENBQUMsWUFBWTs7WUFDMUIsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0tBQUE7Ozs7O0lBRUssUUFBUSxDQUFDLElBQUk7O1lBQ2YsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O29CQUM1QixjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzdELENBQUMsbUJBQW1CLGNBQWMsRUFBQSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ25FLENBQUMsbUJBQW1CLGNBQWMsRUFBQSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7O29CQUNsRSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3pFLE9BQU8sUUFBUSxDQUFDO2FBQ25CO2lCQUNJO2dCQUNELE9BQU8sSUFBSSxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDbkQ7UUFDTCxDQUFDO0tBQUE7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWlCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFSyxxQkFBcUI7O1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDO0tBQUE7Ozs7O0lBRUssZUFBZSxDQUFDLEdBQWtCOztRQUV4QyxDQUFDO0tBQUE7Q0FDSjs7Ozs7O0lBNUNHLCtCQUFzQjs7Ozs7SUFDVixvQ0FBOEI7Ozs7O0lBQUUsb0NBQStCOzs7OztJQUFFLGlDQUFnQzs7Ozs7SUFBRSxpQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRnVuY3Rpb25TeW5jLCBGVU5DX1NUQVRFIH0gZnJvbSBcIi4vSUZ1bmN0aW9uU3luY1wiO1xuaW1wb3J0IHsgSVN5bmNBT1AgfSBmcm9tIFwiLi9TeW5jQU9QLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9hcGkvQVBJRmFjdG9yeVwiO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vYXBpL0FQSURpc3BhdGNoXCI7XG5pbXBvcnQgeyBzYXZlWWVhckNvbmZpZ0FQSSB9IGZyb20gXCIuLi8uLi9hcGkvcmVnaXN0ZXIvc2F2ZVllYXJDb25maWdBUElcIjtcbmltcG9ydCB7IFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvU1FMaXRlUmVzcG9uc2VcIjtcblxuXG5leHBvcnQgY2xhc3MgWWVhckNvbmZpZ1N5bmMgaW1wbGVtZW50cyBJRnVuY3Rpb25TeW5jIHtcbiAgICBwcml2YXRlIHN0YXRlOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlGYWN0b3J5OiBBUElGYWN0b3J5LCBwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLCBwcml2YXRlIFB1c2hBT1A6IElTeW5jQU9QID0gbnVsbCwgcHJpdmF0ZSBQdWxsQU9QOiBJU3luY0FPUCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEZVTkNfU1RBVEUuQVZBSUxBQkxFO1xuICAgIH1cblxuICAgIGdldFN0YXRlKCk6IEZVTkNfU1RBVEUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnWUVBUl9DT05GSUcnXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHVzaEpzb24oZnJvbnRlbmRUaW1lKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBhc3luYyBwdWxsRGF0YShyZXNwKSB7XG4gICAgICAgIGlmICh0aGlzLlB1bGxBT1ApIHtcbiAgICAgICAgICAgIHJlc3AgPSBhd2FpdCB0aGlzLlB1bGxBT1AuZXhlY3V0ZShyZXNwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcC5Db25maWd1cmF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgc2F2ZVllYXJDb25maWcgPSB0aGlzLmFwaUZhY3RvcnkuZ2V0QVBJKFwic2F2ZVllYXJDb25maWdcIik7XG4gICAgICAgICAgICAoPHNhdmVZZWFyQ29uZmlnQVBJPnNhdmVZZWFyQ29uZmlnKS5GaXJzdFVzZUFQUCA9IHJlc3AuRmlyc3RVc2VBUFA7XG4gICAgICAgICAgICAoPHNhdmVZZWFyQ29uZmlnQVBJPnNhdmVZZWFyQ29uZmlnKS55ZWFyQ29uZmlncyA9IHJlc3AuQ29uZmlndXJhdGlvbnM7XG4gICAgICAgICAgICBsZXQgc2F2ZVJlc3AgPSBhd2FpdCB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goc2F2ZVllYXJDb25maWcpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHNhdmVSZXNwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogdHJ1ZSB9LCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTdGF0ZShzdGF0ZTogRlVOQ19TVEFURSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2VxdWVudGlhbElETmVlZGVkKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRTZXF1ZW50aWFsSUQoaWRzOiBBcnJheTxzdHJpbmc+KSB7XG5cbiAgICB9XG59Il19