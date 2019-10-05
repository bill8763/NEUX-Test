import * as tslib_1 from "tslib";
var GoalSettingStep4_1;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Required, Bean } from "@allianzSND/core";
let GoalSettingStep4 = GoalSettingStep4_1 = class GoalSettingStep4 {
    constructor() {
        this._MonthList = [];
    }
    /**
     * @return {?}
     */
    get Forecast() {
        return this._Forecast;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Forecast(value) {
        this._Forecast = value;
    }
    /**
     * @return {?}
     */
    get Shortfall() {
        return this._Shortfall;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Shortfall(value) {
        this._Shortfall = value;
    }
    /**
     * @return {?}
     */
    get Actual() {
        return this._Actual;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Actual(value) {
        this._Actual = value;
    }
    /**
     * @return {?}
     */
    get MonthList() {
        return this._MonthList;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set MonthList(value) {
        this._MonthList = value;
    }
    /**
     * @return {?}
     */
    clone() {
        /** @type {?} */
        const cloneGoalSettingStep4 = new GoalSettingStep4_1();
        cloneGoalSettingStep4.Forecast = this._Forecast;
        cloneGoalSettingStep4.Shortfall = this._Shortfall;
        cloneGoalSettingStep4.MonthList = this._MonthList.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.clone()));
        cloneGoalSettingStep4.Actual = this._Actual;
        return cloneGoalSettingStep4;
    }
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdTdGVwNC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Hb2FsU2V0dGluZ1N0ZXA0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7SUFHckMsZ0JBQWdCO0lBY3pCO1FBRlEsZUFBVSxHQUErQixFQUFFLENBQUM7SUFHcEQsQ0FBQzs7OztJQUVELElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNELElBQVcsU0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDRCxJQUFXLE1BQU07UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVM7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBaUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVNLEtBQUs7O2NBQ0YscUJBQXFCLEdBQUcsSUFBSSxrQkFBZ0IsRUFBRTtRQUNwRCxxQkFBcUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQztRQUN0RSxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QyxPQUFPLHFCQUFxQixDQUFDO0lBQ2pDLENBQUM7Q0FDSixDQUFBO0FBL0NHO0lBREMsUUFBUTs7bURBQ2lCO0FBRzFCO0lBREMsUUFBUTs7b0RBQ2tCO0FBRzNCO0lBREMsUUFBUTs7aURBQ2U7QUFHeEI7SUFEQyxRQUFRO3NDQUNXLEtBQUs7b0RBQTJCO0FBWjNDLGdCQUFnQjtJQUQ1QixJQUFJLENBQUMsa0JBQWtCLENBQUM7O0dBQ1osZ0JBQWdCLENBa0Q1QjtTQWxEWSxnQkFBZ0I7Ozs7OztJQUV6QixxQ0FDMEI7Ozs7O0lBRTFCLHNDQUMyQjs7Ozs7SUFFM0IsbUNBQ3dCOzs7OztJQUV4QixzQ0FDb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb250aGx5UGxhbkZZRkNEYXRhIH0gZnJvbSBcIi4vTW9udGhseVBsYW5GWUZDRGF0YVwiO1xuaW1wb3J0IHsgUmVxdWlyZWQsIEJlYW4gfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignR29hbFNldHRpbmdTdGVwNCcpXG5leHBvcnQgY2xhc3MgR29hbFNldHRpbmdTdGVwNCB7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9Gb3JlY2FzdDogc3RyaW5nO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfU2hvcnRmYWxsOiBzdHJpbmc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9BY3R1YWw6IHN0cmluZztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX01vbnRoTGlzdDogQXJyYXk8TW9udGhseVBsYW5GWUZDRGF0YT4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgRm9yZWNhc3QoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0ZvcmVjYXN0O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IEZvcmVjYXN0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fRm9yZWNhc3QgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBTaG9ydGZhbGwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1Nob3J0ZmFsbDtcbiAgICB9XG4gICAgcHVibGljIHNldCBTaG9ydGZhbGwodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9TaG9ydGZhbGwgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBBY3R1YWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FjdHVhbDtcbiAgICB9XG4gICAgcHVibGljIHNldCBBY3R1YWwodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9BY3R1YWwgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBNb250aExpc3QoKTogQXJyYXk8TW9udGhseVBsYW5GWUZDRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fTW9udGhMaXN0O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IE1vbnRoTGlzdCh2YWx1ZTogQXJyYXk8TW9udGhseVBsYW5GWUZDRGF0YT4pIHtcbiAgICAgICAgdGhpcy5fTW9udGhMaXN0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb25lKCkge1xuICAgICAgICBjb25zdCBjbG9uZUdvYWxTZXR0aW5nU3RlcDQgPSBuZXcgR29hbFNldHRpbmdTdGVwNCgpO1xuICAgICAgICBjbG9uZUdvYWxTZXR0aW5nU3RlcDQuRm9yZWNhc3QgPSB0aGlzLl9Gb3JlY2FzdDtcbiAgICAgICAgY2xvbmVHb2FsU2V0dGluZ1N0ZXA0LlNob3J0ZmFsbCA9IHRoaXMuX1Nob3J0ZmFsbDtcbiAgICAgICAgY2xvbmVHb2FsU2V0dGluZ1N0ZXA0Lk1vbnRoTGlzdCA9IHRoaXMuX01vbnRoTGlzdC5tYXAoeCA9PiB4LmNsb25lKCkpO1xuICAgICAgICBjbG9uZUdvYWxTZXR0aW5nU3RlcDQuQWN0dWFsID0gdGhpcy5fQWN0dWFsO1xuICAgICAgICByZXR1cm4gY2xvbmVHb2FsU2V0dGluZ1N0ZXA0O1xuICAgIH1cbn1cbiJdfQ==