/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
var AgencyPlanGoalExpected = /** @class */ (function () {
    function AgencyPlanGoalExpected(dataYear) {
        this._ANP = '0';
        this._DataYear = 0;
        this._WorkingQuarter = 0;
        this._FYFC = '0';
        this._Q1 = '0';
        this._Q2 = '0';
        this._Q3 = '0';
        this._Q4 = '0';
        this._RecruitmentTotal = 0;
        this._DataYear = dataYear;
    }
    AgencyPlanGoalExpected_1 = AgencyPlanGoalExpected;
    Object.defineProperty(AgencyPlanGoalExpected.prototype, "ANP", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ANP;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ANP = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyPlanGoalExpected.prototype, "DataYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._DataYear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyPlanGoalExpected.prototype, "WorkingQuarter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._WorkingQuarter;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._WorkingQuarter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyPlanGoalExpected.prototype, "FYFC", {
        get: /**
         * @return {?}
         */
        function () {
            return this._FYFC;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._FYFC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyPlanGoalExpected.prototype, "Q1", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Q1;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Q1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyPlanGoalExpected.prototype, "Q2", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Q2;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Q2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyPlanGoalExpected.prototype, "Q3", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Q3;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Q3 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyPlanGoalExpected.prototype, "Q4", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Q4;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Q4 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyPlanGoalExpected.prototype, "RecruitmentTotal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._RecruitmentTotal;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._RecruitmentTotal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyPlanGoalExpected.prototype, "FYFCConvertANPRate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._FYFCConvertANPRate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._FYFCConvertANPRate = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AgencyPlanGoalExpected.prototype.clone = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cloneAgencyPlanGoalExpected = new AgencyPlanGoalExpected_1(this._DataYear);
        cloneAgencyPlanGoalExpected.WorkingQuarter = this._WorkingQuarter;
        cloneAgencyPlanGoalExpected.ANP = this._ANP;
        cloneAgencyPlanGoalExpected.FYFC = this._FYFC;
        cloneAgencyPlanGoalExpected.Q1 = this._Q1;
        cloneAgencyPlanGoalExpected.Q2 = this._Q2;
        cloneAgencyPlanGoalExpected.Q3 = this._Q3;
        cloneAgencyPlanGoalExpected.Q4 = this._Q4;
        cloneAgencyPlanGoalExpected.RecruitmentTotal = this._RecruitmentTotal;
        cloneAgencyPlanGoalExpected.FYFCConvertANPRate = this._FYFCConvertANPRate;
        return cloneAgencyPlanGoalExpected;
    };
    var AgencyPlanGoalExpected_1;
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], AgencyPlanGoalExpected.prototype, "_ANP", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], AgencyPlanGoalExpected.prototype, "_DataYear", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], AgencyPlanGoalExpected.prototype, "_WorkingQuarter", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], AgencyPlanGoalExpected.prototype, "_FYFC", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], AgencyPlanGoalExpected.prototype, "_Q1", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], AgencyPlanGoalExpected.prototype, "_Q2", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], AgencyPlanGoalExpected.prototype, "_Q3", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], AgencyPlanGoalExpected.prototype, "_Q4", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], AgencyPlanGoalExpected.prototype, "_RecruitmentTotal", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], AgencyPlanGoalExpected.prototype, "_FYFCConvertANPRate", void 0);
    AgencyPlanGoalExpected = AgencyPlanGoalExpected_1 = tslib_1.__decorate([
        Bean('AgencyPlanGoalExpected'),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], AgencyPlanGoalExpected);
    return AgencyPlanGoalExpected;
}());
export { AgencyPlanGoalExpected };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AgencyPlanGoalExpected.prototype._ANP;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanGoalExpected.prototype._DataYear;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanGoalExpected.prototype._WorkingQuarter;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanGoalExpected.prototype._FYFC;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanGoalExpected.prototype._Q1;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanGoalExpected.prototype._Q2;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanGoalExpected.prototype._Q3;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanGoalExpected.prototype._Q4;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanGoalExpected.prototype._RecruitmentTotal;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanGoalExpected.prototype._FYFCConvertANPRate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbmN5UGxhbkdvYWxFeHBlY3RlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9BZ2VuY3lQbGFuR29hbEV4cGVjdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFtQzlDLGdDQUFZLFFBQWdCO1FBN0JwQixTQUFJLEdBQVcsR0FBRyxDQUFDO1FBR25CLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFHdEIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFHNUIsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixRQUFHLEdBQVcsR0FBRyxDQUFDO1FBR2xCLFFBQUcsR0FBVyxHQUFHLENBQUM7UUFHbEIsUUFBRyxHQUFXLEdBQUcsQ0FBQztRQUdsQixRQUFHLEdBQVcsR0FBRyxDQUFDO1FBR2xCLHNCQUFpQixHQUFXLENBQUMsQ0FBQztRQU1sQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDOytCQWxDUSxzQkFBc0I7SUFvQy9CLHNCQUFXLHVDQUFHOzs7O1FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFDRCxVQUFlLEtBQWE7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BSEE7SUFLRCxzQkFBVyw0Q0FBUTs7OztRQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGtEQUFjOzs7O1FBQXpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hDLENBQUM7Ozs7O1FBQ0QsVUFBMEIsS0FBYTtZQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDOzs7T0FIQTtJ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QUFJLENBQUMsd0JBQXdCLENBQUM7O09BQ2xCLHNCQUFzQixDQXlIbEM7SUFBRCw2QkFBQztDQUFBLElBQUE7U0F6SFksc0JBQXNCOzs7Ozs7SUFFL0Isc0NBQzJCOzs7OztJQUUzQiwyQ0FDOEI7Ozs7O0lBRTlCLGlEQUNvQzs7Ozs7SUFFcEMsdUNBQzRCOzs7OztJQUU1QixxQ0FDMEI7Ozs7O0lBRTFCLHFDQUMwQjs7Ozs7SUFFMUIscUNBQzBCOzs7OztJQUUxQixxQ0FDMEI7Ozs7O0lBRTFCLG1EQUNzQzs7Ozs7SUFFdEMscURBQ29DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignQWdlbmN5UGxhbkdvYWxFeHBlY3RlZCcpXG5leHBvcnQgY2xhc3MgQWdlbmN5UGxhbkdvYWxFeHBlY3RlZCB7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9BTlA6IHN0cmluZyA9ICcwJztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0RhdGFZZWFyOiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfV29ya2luZ1F1YXJ0ZXI6IG51bWJlciA9IDA7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9GWUZDOiBzdHJpbmcgPSAnMCc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9RMTogc3RyaW5nID0gJzAnO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfUTI6IHN0cmluZyA9ICcwJztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX1EzOiBzdHJpbmcgPSAnMCc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9RNDogc3RyaW5nID0gJzAnO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfUmVjcnVpdG1lbnRUb3RhbDogbnVtYmVyID0gMDtcbiAgICBcbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9GWUZDQ29udmVydEFOUFJhdGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFZZWFyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fRGF0YVllYXIgPSBkYXRhWWVhcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IEFOUCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fQU5QO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IEFOUCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX0FOUCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgRGF0YVllYXIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0RhdGFZZWFyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgV29ya2luZ1F1YXJ0ZXIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1dvcmtpbmdRdWFydGVyO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFdvcmtpbmdRdWFydGVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fV29ya2luZ1F1YXJ0ZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IEZZRkMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0ZZRkM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgRllGQyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX0ZZRkMgPSB2YWx1ZTtcbiAgICB9XG4gICBcbiAgICBwdWJsaWMgZ2V0IFExKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9RMTtcbiAgICB9XG4gICAgcHVibGljIHNldCBRMSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX1ExID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgUTIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1EyO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFEyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fUTIgPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBRMygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fUTM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgUTModmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9RMyA9IHZhbHVlO1xuICAgIH1cbiAgXG4gICAgcHVibGljIGdldCBRNCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fUTQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgUTQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9RNCA9IHZhbHVlO1xuICAgIH1cbiAgIFxuICAgIHB1YmxpYyBnZXQgUmVjcnVpdG1lbnRUb3RhbCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fUmVjcnVpdG1lbnRUb3RhbDtcbiAgICB9XG4gICAgcHVibGljIHNldCBSZWNydWl0bWVudFRvdGFsKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fUmVjcnVpdG1lbnRUb3RhbCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgRllGQ0NvbnZlcnRBTlBSYXRlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9GWUZDQ29udmVydEFOUFJhdGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgRllGQ0NvbnZlcnRBTlBSYXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fRllGQ0NvbnZlcnRBTlBSYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb25lKCk6IEFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQge1xuICAgICAgICBsZXQgY2xvbmVBZ2VuY3lQbGFuR29hbEV4cGVjdGVkOiBBZ2VuY3lQbGFuR29hbEV4cGVjdGVkID0gbmV3IEFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQodGhpcy5fRGF0YVllYXIpO1xuICAgICAgICBjbG9uZUFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQuV29ya2luZ1F1YXJ0ZXIgPSB0aGlzLl9Xb3JraW5nUXVhcnRlcjtcbiAgICAgICAgY2xvbmVBZ2VuY3lQbGFuR29hbEV4cGVjdGVkLkFOUCA9IHRoaXMuX0FOUDtcbiAgICAgICAgY2xvbmVBZ2VuY3lQbGFuR29hbEV4cGVjdGVkLkZZRkMgPSB0aGlzLl9GWUZDO1xuICAgICAgICBjbG9uZUFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQuUTEgPSB0aGlzLl9RMTtcbiAgICAgICAgY2xvbmVBZ2VuY3lQbGFuR29hbEV4cGVjdGVkLlEyID0gdGhpcy5fUTI7XG4gICAgICAgIGNsb25lQWdlbmN5UGxhbkdvYWxFeHBlY3RlZC5RMyA9IHRoaXMuX1EzO1xuICAgICAgICBjbG9uZUFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQuUTQgPSB0aGlzLl9RNDtcbiAgICAgICAgY2xvbmVBZ2VuY3lQbGFuR29hbEV4cGVjdGVkLlJlY3J1aXRtZW50VG90YWwgPSB0aGlzLl9SZWNydWl0bWVudFRvdGFsO1xuICAgICAgICBjbG9uZUFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQuRllGQ0NvbnZlcnRBTlBSYXRlID0gdGhpcy5fRllGQ0NvbnZlcnRBTlBSYXRlO1xuICAgICAgIFxuICAgICAgICByZXR1cm4gY2xvbmVBZ2VuY3lQbGFuR29hbEV4cGVjdGVkO1xuXG4gICAgfVxuXG4gICAgXG5cbn0iXX0=