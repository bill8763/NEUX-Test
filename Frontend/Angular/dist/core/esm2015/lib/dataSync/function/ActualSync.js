/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
export class ActualSync {
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
        return 'ACTUAL';
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
            if (resp.Actual.length > 0) {
                /** @type {?} */
                let saveActual = this.apiFactory.getAPI("saveActual");
                ((/** @type {?} */ (saveActual))).ActualDatas = resp.Actual;
                /** @type {?} */
                let saveResp = yield this.dispatcher.dispatch(saveActual).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0dWFsU3luYy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGF0YVN5bmMvZnVuY3Rpb24vQWN0dWFsU3luYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBR3BFLE1BQU07Ozs7Ozs7SUFFRixZQUFvQixVQUFzQixFQUFVLFVBQXVCLEVBQVUsVUFBb0IsSUFBSSxFQUFVLFVBQW9CLElBQUk7UUFBM0gsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQzNJLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsT0FBTztRQUNILE9BQU8sUUFBUSxDQUFBO0lBQ25CLENBQUM7Ozs7O0lBRUssV0FBVyxDQUFDLFlBQVk7O1lBQzFCLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztLQUFBOzs7OztJQUVLLFFBQVEsQ0FBQyxJQUFJOztZQUNmLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQztZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztvQkFDcEIsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztnQkFDckQsQ0FBQyxtQkFBZSxVQUFVLEVBQUEsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDOztvQkFDbEQsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxFQUFFO2dCQUNyRSxPQUFPLFFBQVEsQ0FBQzthQUNuQjtpQkFDSTtnQkFDRCxPQUFPLElBQUksY0FBYyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ25EO1FBQ0wsQ0FBQztLQUFBOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFpQjtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBRUsscUJBQXFCOztZQUN2QixPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQztLQUFBOzs7OztJQUVLLGVBQWUsQ0FBQyxHQUFrQjs7UUFFeEMsQ0FBQztLQUFBO0NBQ0o7Ozs7OztJQTNDRywyQkFBc0I7Ozs7O0lBQ1YsZ0NBQThCOzs7OztJQUFFLGdDQUErQjs7Ozs7SUFBRSw2QkFBZ0M7Ozs7O0lBQUUsNkJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUZ1bmN0aW9uU3luYywgRlVOQ19TVEFURSB9IGZyb20gXCIuL0lGdW5jdGlvblN5bmNcIjtcbmltcG9ydCB7IElTeW5jQU9QIH0gZnJvbSBcIi4vU3luY0FPUC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IEFQSUZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vYXBpL0FQSUZhY3RvcnlcIjtcbmltcG9ydCB7IEFQSURpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL2FwaS9BUElEaXNwYXRjaFwiO1xuaW1wb3J0IHsgc2F2ZUFjdHVhbEFQSSB9IGZyb20gJy4uLy4uL2FwaS9yZWdpc3Rlci9zYXZlQWN0dWFsJztcbmltcG9ydCB7IFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvU1FMaXRlUmVzcG9uc2VcIjtcblxuXG5leHBvcnQgY2xhc3MgQWN0dWFsU3luYyBpbXBsZW1lbnRzIElGdW5jdGlvblN5bmMge1xuICAgIHByaXZhdGUgc3RhdGU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaUZhY3Rvcnk6IEFQSUZhY3RvcnksIHByaXZhdGUgZGlzcGF0Y2hlcjogQVBJRGlzcGF0Y2gsIHByaXZhdGUgUHVzaEFPUDogSVN5bmNBT1AgPSBudWxsLCBwcml2YXRlIFB1bGxBT1A6IElTeW5jQU9QID0gbnVsbCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gRlVOQ19TVEFURS5BVkFJTEFCTEU7XG4gICAgfVxuXG4gICAgZ2V0U3RhdGUoKTogRlVOQ19TVEFURSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cblxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdBQ1RVQUwnXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHVzaEpzb24oZnJvbnRlbmRUaW1lKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBhc3luYyBwdWxsRGF0YShyZXNwKSB7XG4gICAgICAgIGlmICh0aGlzLlB1bGxBT1ApIHtcbiAgICAgICAgICAgIHJlc3AgPSBhd2FpdCB0aGlzLlB1bGxBT1AuZXhlY3V0ZShyZXNwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcC5BY3R1YWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNhdmVBY3R1YWwgPSB0aGlzLmFwaUZhY3RvcnkuZ2V0QVBJKFwic2F2ZUFjdHVhbFwiKTtcbiAgICAgICAgICAgICg8c2F2ZUFjdHVhbEFQST5zYXZlQWN0dWFsKS5BY3R1YWxEYXRhcyA9IHJlc3AuQWN0dWFsO1xuICAgICAgICAgICAgbGV0IHNhdmVSZXNwID0gYXdhaXQgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHNhdmVBY3R1YWwpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHNhdmVSZXNwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogdHJ1ZSB9LCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTdGF0ZShzdGF0ZTogRlVOQ19TVEFURSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2VxdWVudGlhbElETmVlZGVkKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRTZXF1ZW50aWFsSUQoaWRzOiBBcnJheTxzdHJpbmc+KSB7XG5cbiAgICB9XG59Il19