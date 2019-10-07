/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
/** @enum {string} */
const DWM_DATETYPE = {
    DAILY: 'Daily',
    WEEKLY: 'Weekly',
    MONTHLY: 'Monthly',
};
export { DWM_DATETYPE };
/** @enum {number} */
const GOALSETTINGSTEP = {
    STEP1: 1,
    STEP2: 2,
    STEP3: 3,
    STEP4: 4,
    STEP5: 5,
};
export { GOALSETTINGSTEP };
GOALSETTINGSTEP[GOALSETTINGSTEP.STEP1] = 'STEP1';
GOALSETTINGSTEP[GOALSETTINGSTEP.STEP2] = 'STEP2';
GOALSETTINGSTEP[GOALSETTINGSTEP.STEP3] = 'STEP3';
GOALSETTINGSTEP[GOALSETTINGSTEP.STEP4] = 'STEP4';
GOALSETTINGSTEP[GOALSETTINGSTEP.STEP5] = 'STEP5';
/** @enum {number} */
const GOALSETTINGSETMODE = {
    SET_NEXT_YESR: 0,
    ADGUST_GOAL: 1,
};
export { GOALSETTINGSETMODE };
GOALSETTINGSETMODE[GOALSETTINGSETMODE.SET_NEXT_YESR] = 'SET_NEXT_YESR';
GOALSETTINGSETMODE[GOALSETTINGSETMODE.ADGUST_GOAL] = 'ADGUST_GOAL';
/** @enum {string} */
const ROLE = {
    // FEMALEAGENT = '01',
    // FEMALEAGENTLEADER = '02',
    // MALEAGENT = '03',
    // MALEAGENTLEADER = '04',
    // AGENT = 'AG',
    // AGENTLEADER = 'AL',
    // CAO = 'Manager',
    // ZONEHEAD = 'Supervisor'
    AGENT: 'AG',
    AGENTLEADER: 'AL',
    ZONEHEAD: 'Manager',
    CAO: 'Supervisor',
};
export { ROLE };
/** @enum {string} */
const APPROVESTATUS = {
    PENDING: 'P',
    WAINTING: 'W',
    NONE: 'N',
    APPROVE: 'A',
};
export { APPROVESTATUS };
/** @enum {string} */
const APITYPE = {
    SQLITE: 'SQLITE',
    RESTFUL: 'RESTFUL',
    MOCK: 'MOCK',
};
export { APITYPE };
let ValidationState = class ValidationState {
    constructor() {
    }
    /**
     * @param {?} step
     * @return {?}
     */
    set step(step) {
        this._step = step;
    }
    /**
     * @param {?} isDataLegal
     * @return {?}
     */
    set isDataLegal(isDataLegal) {
        this._isDataLegal = isDataLegal;
    }
    /**
     * @return {?}
     */
    get step() {
        return this._step;
    }
    /**
     * @return {?}
     */
    get isDataLegal() {
        return this._isDataLegal;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], ValidationState.prototype, "_step", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Boolean)
], ValidationState.prototype, "_isDataLegal", void 0);
ValidationState = tslib_1.__decorate([
    Bean('ValidationState'),
    tslib_1.__metadata("design:paramtypes", [])
], ValidationState);
export { ValidationState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ValidationState.prototype._step;
    /**
     * @type {?}
     * @private
     */
    ValidationState.prototype._isDataLegal;
}
export class PlanFYFCPopupInfo {
    /**
     * @param {?} state
     * @param {?} data
     */
    constructor(state, data) {
        this._state = state;
        this._data = data;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    set state(state) {
        this._state = state;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
    }
    /**
     * @return {?}
     */
    get state() {
        return this._state;
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PlanFYFCPopupInfo.prototype._state;
    /**
     * @type {?}
     * @private
     */
    PlanFYFCPopupInfo.prototype._data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdDb21tb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9nb2FsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvR29hbFNldHRpbmdDb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7SUFHOUMsT0FBUSxPQUFPO0lBQ2YsUUFBUyxRQUFRO0lBQ2pCLFNBQVUsU0FBUzs7Ozs7SUFJbkIsUUFBUztJQUNULFFBQVM7SUFDVCxRQUFTO0lBQ1QsUUFBUztJQUNULFFBQVM7Ozs7Ozs7Ozs7SUFJVCxnQkFBYTtJQUNiLGNBQVc7Ozs7Ozs7SUFJWCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFFMUIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLE9BQVEsSUFBSTtJQUNaLGFBQWMsSUFBSTtJQUNsQixVQUFXLFNBQVM7SUFDcEIsS0FBTSxZQUFZOzs7OztJQUlsQixTQUFVLEdBQUc7SUFDYixVQUFXLEdBQUc7SUFDZCxNQUFPLEdBQUc7SUFDVixTQUFVLEdBQUc7Ozs7O0lBSWIsUUFBUyxRQUFRO0lBQ2pCLFNBQVUsU0FBUztJQUNuQixNQUFPLE1BQU07OztJQUlKLGVBQWU7SUFReEI7SUFDQSxDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLElBQVk7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFdBQVcsQ0FBQyxXQUFvQjtRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDWCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztDQUNKLENBQUE7QUF2Qkc7SUFEQyxRQUFROzs4Q0FDYTtBQUd0QjtJQURDLFFBQVE7O3FEQUNxQjtBQU5yQixlQUFlO0lBRDNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs7R0FDWCxlQUFlLENBMEIzQjtTQTFCWSxlQUFlOzs7Ozs7SUFFeEIsZ0NBQ3NCOzs7OztJQUV0Qix1Q0FDOEI7O0FBc0JsQyxNQUFNOzs7OztJQUlGLFlBQVksS0FBYSxFQUFFLElBQXlCO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELElBQVcsSUFBSSxDQUFDLElBQXlCO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0NBQ0o7Ozs7OztJQXZCRyxtQ0FBdUI7Ozs7O0lBQ3ZCLGtDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYWxTZXR0aW5nU3RlcDQgfSBmcm9tIFwiLi9Hb2FsU2V0dGluZ1N0ZXA0XCI7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1BsYW5Qb3B1cCB9IGZyb20gXCIuL0dvYWxTZXR0aW5nUGxhblBvcHVwXCI7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1N0ZXBEYXRhIH0gZnJvbSBcIi4vR29hbFNldHRpbmdTdGVwRGF0YVwiO1xuaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5leHBvcnQgZW51bSBEV01fREFURVRZUEUge1xuICAgIERBSUxZID0gJ0RhaWx5JyxcbiAgICBXRUVLTFkgPSAnV2Vla2x5JyxcbiAgICBNT05USExZID0gJ01vbnRobHknXG59XG5cbmV4cG9ydCBlbnVtIEdPQUxTRVRUSU5HU1RFUCB7XG4gICAgU1RFUDEgPSAxLFxuICAgIFNURVAyID0gMixcbiAgICBTVEVQMyA9IDMsXG4gICAgU1RFUDQgPSA0LFxuICAgIFNURVA1ID0gNVxufVxuXG5leHBvcnQgZW51bSBHT0FMU0VUVElOR1NFVE1PREUge1xuICAgIFNFVF9ORVhUX1lFU1IsXG4gICAgQURHVVNUX0dPQUxcbn1cblxuZXhwb3J0IGVudW0gUk9MRSB7XG4gICAgLy8gRkVNQUxFQUdFTlQgPSAnMDEnLFxuICAgIC8vIEZFTUFMRUFHRU5UTEVBREVSID0gJzAyJyxcbiAgICAvLyBNQUxFQUdFTlQgPSAnMDMnLFxuICAgIC8vIE1BTEVBR0VOVExFQURFUiA9ICcwNCcsXG5cbiAgICAvLyBBR0VOVCA9ICdBRycsXG4gICAgLy8gQUdFTlRMRUFERVIgPSAnQUwnLFxuICAgIC8vIENBTyA9ICdNYW5hZ2VyJyxcbiAgICAvLyBaT05FSEVBRCA9ICdTdXBlcnZpc29yJ1xuICAgIEFHRU5UID0gJ0FHJyxcbiAgICBBR0VOVExFQURFUiA9ICdBTCcsXG4gICAgWk9ORUhFQUQgPSAnTWFuYWdlcicsXG4gICAgQ0FPID0gJ1N1cGVydmlzb3InXG59XG5cbmV4cG9ydCBlbnVtIEFQUFJPVkVTVEFUVVMge1xuICAgIFBFTkRJTkcgPSAnUCcsXG4gICAgV0FJTlRJTkcgPSAnVycsXG4gICAgTk9ORSA9ICdOJyxcbiAgICBBUFBST1ZFID0gJ0EnLFxufVxuXG5leHBvcnQgZW51bSBBUElUWVBFIHtcbiAgICBTUUxJVEUgPSAnU1FMSVRFJyxcbiAgICBSRVNURlVMID0gJ1JFU1RGVUwnLFxuICAgIE1PQ0sgPSAnTU9DSydcbn1cblxuQEJlYW4oJ1ZhbGlkYXRpb25TdGF0ZScpXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblN0YXRlIHtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX3N0ZXA6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2lzRGF0YUxlZ2FsOiBib29sZWFuO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHNldCBzdGVwKHN0ZXA6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zdGVwID0gc3RlcDtcbiAgICB9XG5cbiAgICBzZXQgaXNEYXRhTGVnYWwoaXNEYXRhTGVnYWw6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNEYXRhTGVnYWwgPSBpc0RhdGFMZWdhbDtcbiAgICB9XG5cbiAgICBnZXQgc3RlcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0ZXA7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGF0YUxlZ2FsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEYXRhTGVnYWw7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGxhbkZZRkNQb3B1cEluZm8ge1xuICAgIHByaXZhdGUgX3N0YXRlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfZGF0YTogR29hbFNldHRpbmdTdGVwRGF0YTtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOiBudW1iZXIsIGRhdGE6IEdvYWxTZXR0aW5nU3RlcERhdGEpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzdGF0ZShzdGF0ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkYXRhKGRhdGE6IEdvYWxTZXR0aW5nU3RlcERhdGEpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRhKCk6IEdvYWxTZXR0aW5nU3RlcERhdGEge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG59XG5cblxuXG4iXX0=