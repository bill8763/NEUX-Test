/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Required, Bean } from "@allianzSND/core";
var GoalSettingStep4 = /** @class */ (function () {
    function GoalSettingStep4() {
        this._MonthList = [];
    }
    GoalSettingStep4_1 = GoalSettingStep4;
    Object.defineProperty(GoalSettingStep4.prototype, "Forecast", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Forecast;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Forecast = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStep4.prototype, "Shortfall", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Shortfall;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Shortfall = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStep4.prototype, "Actual", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Actual;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Actual = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStep4.prototype, "MonthList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._MonthList;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._MonthList = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GoalSettingStep4.prototype.clone = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cloneGoalSettingStep4 = new GoalSettingStep4_1();
        cloneGoalSettingStep4.Forecast = this._Forecast;
        cloneGoalSettingStep4.Shortfall = this._Shortfall;
        cloneGoalSettingStep4.MonthList = this._MonthList.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.clone(); }));
        cloneGoalSettingStep4.Actual = this._Actual;
        return cloneGoalSettingStep4;
    };
    var GoalSettingStep4_1;
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingStep4.prototype, "_Forecast", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingStep4.prototype, "_Shortfall", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingStep4.prototype, "_Actual", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Array)
    ], GoalSettingStep4.prototype, "_MonthList", void 0);
    GoalSettingStep4 = GoalSettingStep4_1 = tslib_1.__decorate([
        Bean('GoalSettingStep4'),
        tslib_1.__metadata("design:paramtypes", [])
    ], GoalSettingStep4);
    return GoalSettingStep4;
}());
export { GoalSettingStep4 };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingStep4.prototype._Forecast;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStep4.prototype._Shortfall;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStep4.prototype._Actual;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStep4.prototype._MonthList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdTdGVwNC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Hb2FsU2V0dGluZ1N0ZXA0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFpQjlDO1FBRlEsZUFBVSxHQUErQixFQUFFLENBQUM7SUFHcEQsQ0FBQzt5QkFmUSxnQkFBZ0I7SUFpQnpCLHNCQUFXLHNDQUFROzs7O1FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBQ0QsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FIQTtJQUlELHNCQUFXLHVDQUFTOzs7O1FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBQ0QsVUFBcUIsS0FBYTtZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FIQTtJQUlELHNCQUFXLG9DQUFNOzs7O1FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBQ0QsVUFBa0IsS0FBYTtZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FIQTtJQUlELHNCQUFXLHVDQUFTOzs7O1FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBQ0QsVUFBcUIsS0FBaUM7WUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BSEE7Ozs7SUFLTSxnQ0FBSzs7O0lBQVo7O1lBQ1UscUJBQXFCLEdBQUcsSUFBSSxrQkFBZ0IsRUFBRTtRQUNwRCxxQkFBcUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQVQsQ0FBUyxFQUFDLENBQUM7UUFDdEUscUJBQXFCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUMsT0FBTyxxQkFBcUIsQ0FBQztJQUNqQyxDQUFDOztJQTlDRDtRQURDLFFBQVE7O3VEQUNpQjtJQUcxQjtRQURDLFFBQVE7O3dEQUNrQjtJQUczQjtRQURDLFFBQVE7O3FEQUNlO0lBR3hCO1FBREMsUUFBUTswQ0FDVyxLQUFLO3dEQUEyQjtJQVozQyxnQkFBZ0I7UUFENUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDOztPQUNaLGdCQUFnQixDQWtENUI7SUFBRCx1QkFBQztDQUFBLElBQUE7U0FsRFksZ0JBQWdCOzs7Ozs7SUFFekIscUNBQzBCOzs7OztJQUUxQixzQ0FDMkI7Ozs7O0lBRTNCLG1DQUN3Qjs7Ozs7SUFFeEIsc0NBQ29EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9udGhseVBsYW5GWUZDRGF0YSB9IGZyb20gXCIuL01vbnRobHlQbGFuRllGQ0RhdGFcIjtcbmltcG9ydCB7IFJlcXVpcmVkLCBCZWFuIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ0dvYWxTZXR0aW5nU3RlcDQnKVxuZXhwb3J0IGNsYXNzIEdvYWxTZXR0aW5nU3RlcDQge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfRm9yZWNhc3Q6IHN0cmluZztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX1Nob3J0ZmFsbDogc3RyaW5nO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfQWN0dWFsOiBzdHJpbmc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9Nb250aExpc3Q6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IEZvcmVjYXN0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Gb3JlY2FzdDtcbiAgICB9XG4gICAgcHVibGljIHNldCBGb3JlY2FzdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX0ZvcmVjYXN0ID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgU2hvcnRmYWxsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9TaG9ydGZhbGw7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgU2hvcnRmYWxsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fU2hvcnRmYWxsID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgQWN0dWFsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BY3R1YWw7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgQWN0dWFsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fQWN0dWFsID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgTW9udGhMaXN0KCk6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX01vbnRoTGlzdDtcbiAgICB9XG4gICAgcHVibGljIHNldCBNb250aExpc3QodmFsdWU6IEFycmF5PE1vbnRobHlQbGFuRllGQ0RhdGE+KSB7XG4gICAgICAgIHRoaXMuX01vbnRoTGlzdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9uZSgpIHtcbiAgICAgICAgY29uc3QgY2xvbmVHb2FsU2V0dGluZ1N0ZXA0ID0gbmV3IEdvYWxTZXR0aW5nU3RlcDQoKTtcbiAgICAgICAgY2xvbmVHb2FsU2V0dGluZ1N0ZXA0LkZvcmVjYXN0ID0gdGhpcy5fRm9yZWNhc3Q7XG4gICAgICAgIGNsb25lR29hbFNldHRpbmdTdGVwNC5TaG9ydGZhbGwgPSB0aGlzLl9TaG9ydGZhbGw7XG4gICAgICAgIGNsb25lR29hbFNldHRpbmdTdGVwNC5Nb250aExpc3QgPSB0aGlzLl9Nb250aExpc3QubWFwKHggPT4geC5jbG9uZSgpKTtcbiAgICAgICAgY2xvbmVHb2FsU2V0dGluZ1N0ZXA0LkFjdHVhbCA9IHRoaXMuX0FjdHVhbDtcbiAgICAgICAgcmV0dXJuIGNsb25lR29hbFNldHRpbmdTdGVwNDtcbiAgICB9XG59XG4iXX0=