/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
let AgencyPlanDirectUnitDetail = class AgencyPlanDirectUnitDetail {
    constructor() {
        this._Manpower = '';
        this._Recruitment = 0;
    }
    /**
     * @return {?}
     */
    get Manpower() {
        return this._Manpower;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Manpower(value) {
        this._Manpower = value;
    }
    /**
     * @return {?}
     */
    get Recruitment() {
        return this._Recruitment;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Recruitment(value) {
        this._Recruitment = value;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], AgencyPlanDirectUnitDetail.prototype, "_Manpower", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], AgencyPlanDirectUnitDetail.prototype, "_Recruitment", void 0);
AgencyPlanDirectUnitDetail = tslib_1.__decorate([
    Bean('AgencyPlanDirectUnitDetail'),
    tslib_1.__metadata("design:paramtypes", [])
], AgencyPlanDirectUnitDetail);
export { AgencyPlanDirectUnitDetail };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AgencyPlanDirectUnitDetail.prototype._Manpower;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanDirectUnitDetail.prototype._Recruitment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbmN5UGxhbkRpcmVjdFVuaXREZXRhaWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9nb2FsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvQWdlbmN5UGxhbkRpcmVjdFVuaXREZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0lBR3JDLDBCQUEwQjtJQVFuQztRQUxRLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFHdkIsaUJBQVksR0FBVyxDQUFDLENBQUM7SUFHakMsQ0FBQzs7OztJQUVELElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQVcsV0FBVztRQUNsQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7Q0FHSixDQUFBO0FBdkJHO0lBREMsUUFBUTs7NkRBQ3NCO0FBRy9CO0lBREMsUUFBUTs7Z0VBQ3dCO0FBTnhCLDBCQUEwQjtJQUR0QyxJQUFJLENBQUMsNEJBQTRCLENBQUM7O0dBQ3RCLDBCQUEwQixDQTBCdEM7U0ExQlksMEJBQTBCOzs7Ozs7SUFFbkMsK0NBQytCOzs7OztJQUUvQixrREFDaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBCZWFuKCdBZ2VuY3lQbGFuRGlyZWN0VW5pdERldGFpbCcpXG5leHBvcnQgY2xhc3MgQWdlbmN5UGxhbkRpcmVjdFVuaXREZXRhaWwge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfTWFucG93ZXI6IHN0cmluZyA9ICcnO1xuICAgIFxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX1JlY3J1aXRtZW50OiBudW1iZXIgPSAwO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgTWFucG93ZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX01hbnBvd2VyO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IE1hbnBvd2VyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fTWFucG93ZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IFJlY3J1aXRtZW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9SZWNydWl0bWVudDtcbiAgICB9XG4gICAgcHVibGljIHNldCBSZWNydWl0bWVudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX1JlY3J1aXRtZW50ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgXG59XG5cbiJdfQ==