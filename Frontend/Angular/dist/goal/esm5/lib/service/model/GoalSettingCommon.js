/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
/** @enum {string} */
var DWM_DATETYPE = {
    DAILY: 'Daily',
    WEEKLY: 'Weekly',
    MONTHLY: 'Monthly',
};
export { DWM_DATETYPE };
/** @enum {number} */
var GOALSETTINGSTEP = {
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
var GOALSETTINGSETMODE = {
    SET_NEXT_YESR: 0,
    ADGUST_GOAL: 1,
};
export { GOALSETTINGSETMODE };
GOALSETTINGSETMODE[GOALSETTINGSETMODE.SET_NEXT_YESR] = 'SET_NEXT_YESR';
GOALSETTINGSETMODE[GOALSETTINGSETMODE.ADGUST_GOAL] = 'ADGUST_GOAL';
/** @enum {string} */
var ROLE = {
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
var APPROVESTATUS = {
    PENDING: 'P',
    WAINTING: 'W',
    NONE: 'N',
    APPROVE: 'A',
};
export { APPROVESTATUS };
/** @enum {string} */
var APITYPE = {
    SQLITE: 'SQLITE',
    RESTFUL: 'RESTFUL',
    MOCK: 'MOCK',
};
export { APITYPE };
var ValidationState = /** @class */ (function () {
    function ValidationState() {
    }
    Object.defineProperty(ValidationState.prototype, "step", {
        get: /**
         * @return {?}
         */
        function () {
            return this._step;
        },
        set: /**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            this._step = step;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationState.prototype, "isDataLegal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDataLegal;
        },
        set: /**
         * @param {?} isDataLegal
         * @return {?}
         */
        function (isDataLegal) {
            this._isDataLegal = isDataLegal;
        },
        enumerable: true,
        configurable: true
    });
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
    return ValidationState;
}());
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
var PlanFYFCPopupInfo = /** @class */ (function () {
    function PlanFYFCPopupInfo(state, data) {
        this._state = state;
        this._data = data;
    }
    Object.defineProperty(PlanFYFCPopupInfo.prototype, "state", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state;
        },
        set: /**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanFYFCPopupInfo.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    return PlanFYFCPopupInfo;
}());
export { PlanFYFCPopupInfo };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdDb21tb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9nb2FsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvR29hbFNldHRpbmdDb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7SUFHOUMsT0FBUSxPQUFPO0lBQ2YsUUFBUyxRQUFRO0lBQ2pCLFNBQVUsU0FBUzs7Ozs7SUFJbkIsUUFBUztJQUNULFFBQVM7SUFDVCxRQUFTO0lBQ1QsUUFBUztJQUNULFFBQVM7Ozs7Ozs7Ozs7SUFJVCxnQkFBYTtJQUNiLGNBQVc7Ozs7Ozs7SUFJWCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFFMUIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLE9BQVEsSUFBSTtJQUNaLGFBQWMsSUFBSTtJQUNsQixVQUFXLFNBQVM7SUFDcEIsS0FBTSxZQUFZOzs7OztJQUlsQixTQUFVLEdBQUc7SUFDYixVQUFXLEdBQUc7SUFDZCxNQUFPLEdBQUc7SUFDVixTQUFVLEdBQUc7Ozs7O0lBSWIsUUFBUyxRQUFRO0lBQ2pCLFNBQVUsU0FBUztJQUNuQixNQUFPLE1BQU07Ozs7SUFZYjtJQUNBLENBQUM7SUFFRCxzQkFBSSxpQ0FBSTs7OztRQVFSO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBVkQsVUFBUyxJQUFZO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVc7Ozs7UUFRZjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7OztRQVZELFVBQWdCLFdBQW9CO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBZEQ7UUFEQyxRQUFROztrREFDYTtJQUd0QjtRQURDLFFBQVE7O3lEQUNxQjtJQU5yQixlQUFlO1FBRDNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs7T0FDWCxlQUFlLENBMEIzQjtJQUFELHNCQUFDO0NBQUEsSUFBQTtTQTFCWSxlQUFlOzs7Ozs7SUFFeEIsZ0NBQ3NCOzs7OztJQUV0Qix1Q0FDOEI7O0FBc0JsQztJQUlJLDJCQUFZLEtBQWEsRUFBRSxJQUF5QjtRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQVcsb0NBQUs7Ozs7UUFRaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFWRCxVQUFpQixLQUFhO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsbUNBQUk7Ozs7UUFRZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7OztRQVZELFVBQWdCLElBQXlCO1lBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBU0wsd0JBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDOzs7Ozs7O0lBdkJHLG1DQUF1Qjs7Ozs7SUFDdkIsa0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hbFNldHRpbmdTdGVwNCB9IGZyb20gXCIuL0dvYWxTZXR0aW5nU3RlcDRcIjtcbmltcG9ydCB7IEdvYWxTZXR0aW5nUGxhblBvcHVwIH0gZnJvbSBcIi4vR29hbFNldHRpbmdQbGFuUG9wdXBcIjtcbmltcG9ydCB7IEdvYWxTZXR0aW5nU3RlcERhdGEgfSBmcm9tIFwiLi9Hb2FsU2V0dGluZ1N0ZXBEYXRhXCI7XG5pbXBvcnQgeyBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbmV4cG9ydCBlbnVtIERXTV9EQVRFVFlQRSB7XG4gICAgREFJTFkgPSAnRGFpbHknLFxuICAgIFdFRUtMWSA9ICdXZWVrbHknLFxuICAgIE1PTlRITFkgPSAnTW9udGhseSdcbn1cblxuZXhwb3J0IGVudW0gR09BTFNFVFRJTkdTVEVQIHtcbiAgICBTVEVQMSA9IDEsXG4gICAgU1RFUDIgPSAyLFxuICAgIFNURVAzID0gMyxcbiAgICBTVEVQNCA9IDQsXG4gICAgU1RFUDUgPSA1XG59XG5cbmV4cG9ydCBlbnVtIEdPQUxTRVRUSU5HU0VUTU9ERSB7XG4gICAgU0VUX05FWFRfWUVTUixcbiAgICBBREdVU1RfR09BTFxufVxuXG5leHBvcnQgZW51bSBST0xFIHtcbiAgICAvLyBGRU1BTEVBR0VOVCA9ICcwMScsXG4gICAgLy8gRkVNQUxFQUdFTlRMRUFERVIgPSAnMDInLFxuICAgIC8vIE1BTEVBR0VOVCA9ICcwMycsXG4gICAgLy8gTUFMRUFHRU5UTEVBREVSID0gJzA0JyxcblxuICAgIC8vIEFHRU5UID0gJ0FHJyxcbiAgICAvLyBBR0VOVExFQURFUiA9ICdBTCcsXG4gICAgLy8gQ0FPID0gJ01hbmFnZXInLFxuICAgIC8vIFpPTkVIRUFEID0gJ1N1cGVydmlzb3InXG4gICAgQUdFTlQgPSAnQUcnLFxuICAgIEFHRU5UTEVBREVSID0gJ0FMJyxcbiAgICBaT05FSEVBRCA9ICdNYW5hZ2VyJyxcbiAgICBDQU8gPSAnU3VwZXJ2aXNvcidcbn1cblxuZXhwb3J0IGVudW0gQVBQUk9WRVNUQVRVUyB7XG4gICAgUEVORElORyA9ICdQJyxcbiAgICBXQUlOVElORyA9ICdXJyxcbiAgICBOT05FID0gJ04nLFxuICAgIEFQUFJPVkUgPSAnQScsXG59XG5cbmV4cG9ydCBlbnVtIEFQSVRZUEUge1xuICAgIFNRTElURSA9ICdTUUxJVEUnLFxuICAgIFJFU1RGVUwgPSAnUkVTVEZVTCcsXG4gICAgTU9DSyA9ICdNT0NLJ1xufVxuXG5AQmVhbignVmFsaWRhdGlvblN0YXRlJylcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uU3RhdGUge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfc3RlcDogbnVtYmVyO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfaXNEYXRhTGVnYWw6IGJvb2xlYW47XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgc2V0IHN0ZXAoc3RlcDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3N0ZXAgPSBzdGVwO1xuICAgIH1cblxuICAgIHNldCBpc0RhdGFMZWdhbChpc0RhdGFMZWdhbDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0RhdGFMZWdhbCA9IGlzRGF0YUxlZ2FsO1xuICAgIH1cblxuICAgIGdldCBzdGVwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RlcDtcbiAgICB9XG5cbiAgICBnZXQgaXNEYXRhTGVnYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RhdGFMZWdhbDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFuRllGQ1BvcHVwSW5mbyB7XG4gICAgcHJpdmF0ZSBfc3RhdGU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9kYXRhOiBHb2FsU2V0dGluZ1N0ZXBEYXRhO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IG51bWJlciwgZGF0YTogR29hbFNldHRpbmdTdGVwRGF0YSkge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHN0YXRlKHN0YXRlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRhdGEoZGF0YTogR29hbFNldHRpbmdTdGVwRGF0YSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHN0YXRlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGEoKTogR29hbFNldHRpbmdTdGVwRGF0YSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cbn1cblxuXG5cbiJdfQ==