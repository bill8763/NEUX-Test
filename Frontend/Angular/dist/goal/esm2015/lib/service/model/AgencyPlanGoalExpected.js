import * as tslib_1 from "tslib";
var AgencyPlanGoalExpected_1;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Bean, Required } from "@allianzSND/core";
let AgencyPlanGoalExpected = AgencyPlanGoalExpected_1 = class AgencyPlanGoalExpected {
    /**
     * @param {?} dataYear
     */
    constructor(dataYear) {
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
    /**
     * @return {?}
     */
    get ANP() {
        return this._ANP;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ANP(value) {
        this._ANP = value;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._DataYear;
    }
    /**
     * @return {?}
     */
    get WorkingQuarter() {
        return this._WorkingQuarter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set WorkingQuarter(value) {
        this._WorkingQuarter = value;
    }
    /**
     * @return {?}
     */
    get FYFC() {
        return this._FYFC;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set FYFC(value) {
        this._FYFC = value;
    }
    /**
     * @return {?}
     */
    get Q1() {
        return this._Q1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Q1(value) {
        this._Q1 = value;
    }
    /**
     * @return {?}
     */
    get Q2() {
        return this._Q2;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Q2(value) {
        this._Q2 = value;
    }
    /**
     * @return {?}
     */
    get Q3() {
        return this._Q3;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Q3(value) {
        this._Q3 = value;
    }
    /**
     * @return {?}
     */
    get Q4() {
        return this._Q4;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Q4(value) {
        this._Q4 = value;
    }
    /**
     * @return {?}
     */
    get RecruitmentTotal() {
        return this._RecruitmentTotal;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set RecruitmentTotal(value) {
        this._RecruitmentTotal = value;
    }
    /**
     * @return {?}
     */
    get FYFCConvertANPRate() {
        return this._FYFCConvertANPRate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set FYFCConvertANPRate(value) {
        this._FYFCConvertANPRate = value;
    }
    /**
     * @return {?}
     */
    clone() {
        /** @type {?} */
        let cloneAgencyPlanGoalExpected = new AgencyPlanGoalExpected_1(this._DataYear);
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
    }
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbmN5UGxhbkdvYWxFeHBlY3RlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9BZ2VuY3lQbGFuR29hbEV4cGVjdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7SUFHckMsc0JBQXNCOzs7O0lBZ0MvQixZQUFZLFFBQWdCO1FBN0JwQixTQUFJLEdBQVcsR0FBRyxDQUFDO1FBR25CLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFHdEIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFHNUIsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixRQUFHLEdBQVcsR0FBRyxDQUFDO1FBR2xCLFFBQUcsR0FBVyxHQUFHLENBQUM7UUFHbEIsUUFBRyxHQUFXLEdBQUcsQ0FBQztRQUdsQixRQUFHLEdBQVcsR0FBRyxDQUFDO1FBR2xCLHNCQUFpQixHQUFXLENBQUMsQ0FBQztRQU1sQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsSUFBVyxHQUFHO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBQ0QsSUFBVyxHQUFHLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsSUFBVyxRQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxJQUFXLGNBQWM7UUFDckIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsSUFBVyxJQUFJO1FBQ1gsT0FB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QkFBc0I7Ozs7OztJQUUvQixzQ0FDMkI7Ozs7O0lBRTNCLDJDQUM4Qjs7Ozs7SUFFOUIsaURBQ29DOzs7OztJQUVwQyx1Q0FDNEI7Ozs7O0lBRTVCLHFDQUMwQjs7Ozs7SUFFMUIscUNBQzBCOzs7OztJQUUxQixxQ0FDMEI7Ozs7O0lBRTFCLHFDQUMwQjs7Ozs7SUFFMUIsbURBQ3NDOzs7OztJQUV0QyxxREFDb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBCZWFuKCdBZ2VuY3lQbGFuR29hbEV4cGVjdGVkJylcbmV4cG9ydCBjbGFzcyBBZ2VuY3lQbGFuR29hbEV4cGVjdGVkIHtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0FOUDogc3RyaW5nID0gJzAnO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfRGF0YVllYXI6IG51bWJlciA9IDA7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9Xb3JraW5nUXVhcnRlcjogbnVtYmVyID0gMDtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0ZZRkM6IHN0cmluZyA9ICcwJztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX1ExOiBzdHJpbmcgPSAnMCc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9RMjogc3RyaW5nID0gJzAnO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfUTM6IHN0cmluZyA9ICcwJztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX1E0OiBzdHJpbmcgPSAnMCc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9SZWNydWl0bWVudFRvdGFsOiBudW1iZXIgPSAwO1xuICAgIFxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0ZZRkNDb252ZXJ0QU5QUmF0ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YVllYXI6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9EYXRhWWVhciA9IGRhdGFZZWFyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgQU5QKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BTlA7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgQU5QKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fQU5QID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBEYXRhWWVhcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fRGF0YVllYXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBXb3JraW5nUXVhcnRlcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fV29ya2luZ1F1YXJ0ZXI7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgV29ya2luZ1F1YXJ0ZXIodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9Xb3JraW5nUXVhcnRlciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgRllGQygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fRllGQztcbiAgICB9XG4gICAgcHVibGljIHNldCBGWUZDKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fRllGQyA9IHZhbHVlO1xuICAgIH1cbiAgIFxuICAgIHB1YmxpYyBnZXQgUTEoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1ExO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFExKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fUTEgPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBRMigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fUTI7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgUTIodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9RMiA9IHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IFEzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9RMztcbiAgICB9XG4gICAgcHVibGljIHNldCBRMyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX1EzID0gdmFsdWU7XG4gICAgfVxuICBcbiAgICBwdWJsaWMgZ2V0IFE0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9RNDtcbiAgICB9XG4gICAgcHVibGljIHNldCBRNCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX1E0ID0gdmFsdWU7XG4gICAgfVxuICAgXG4gICAgcHVibGljIGdldCBSZWNydWl0bWVudFRvdGFsKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9SZWNydWl0bWVudFRvdGFsO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFJlY3J1aXRtZW50VG90YWwodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9SZWNydWl0bWVudFRvdGFsID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBGWUZDQ29udmVydEFOUFJhdGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0ZZRkNDb252ZXJ0QU5QUmF0ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBGWUZDQ29udmVydEFOUFJhdGUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9GWUZDQ29udmVydEFOUFJhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvbmUoKTogQWdlbmN5UGxhbkdvYWxFeHBlY3RlZCB7XG4gICAgICAgIGxldCBjbG9uZUFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQ6IEFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQgPSBuZXcgQWdlbmN5UGxhbkdvYWxFeHBlY3RlZCh0aGlzLl9EYXRhWWVhcik7XG4gICAgICAgIGNsb25lQWdlbmN5UGxhbkdvYWxFeHBlY3RlZC5Xb3JraW5nUXVhcnRlciA9IHRoaXMuX1dvcmtpbmdRdWFydGVyO1xuICAgICAgICBjbG9uZUFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQuQU5QID0gdGhpcy5fQU5QO1xuICAgICAgICBjbG9uZUFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQuRllGQyA9IHRoaXMuX0ZZRkM7XG4gICAgICAgIGNsb25lQWdlbmN5UGxhbkdvYWxFeHBlY3RlZC5RMSA9IHRoaXMuX1ExO1xuICAgICAgICBjbG9uZUFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQuUTIgPSB0aGlzLl9RMjtcbiAgICAgICAgY2xvbmVBZ2VuY3lQbGFuR29hbEV4cGVjdGVkLlEzID0gdGhpcy5fUTM7XG4gICAgICAgIGNsb25lQWdlbmN5UGxhbkdvYWxFeHBlY3RlZC5RNCA9IHRoaXMuX1E0O1xuICAgICAgICBjbG9uZUFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQuUmVjcnVpdG1lbnRUb3RhbCA9IHRoaXMuX1JlY3J1aXRtZW50VG90YWw7XG4gICAgICAgIGNsb25lQWdlbmN5UGxhbkdvYWxFeHBlY3RlZC5GWUZDQ29udmVydEFOUFJhdGUgPSB0aGlzLl9GWUZDQ29udmVydEFOUFJhdGU7XG4gICAgICAgXG4gICAgICAgIHJldHVybiBjbG9uZUFnZW5jeVBsYW5Hb2FsRXhwZWN0ZWQ7XG5cbiAgICB9XG5cbiAgICBcblxufSJdfQ==