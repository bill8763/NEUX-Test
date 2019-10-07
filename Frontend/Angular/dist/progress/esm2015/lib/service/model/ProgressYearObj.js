/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PersonalObj } from "./PersonalObj";
import { TeamObj } from "./TeamObj";
import { Bean, Required } from "@allianzSND/core";
let ProgressYearObj = class ProgressYearObj {
    constructor() {
        this.DataYear = 0;
        this.YesterdayPoint = 0;
        this.Personal = new PersonalObj();
        this.Team = new TeamObj();
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], ProgressYearObj.prototype, "DataYear", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], ProgressYearObj.prototype, "YesterdayPoint", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", PersonalObj)
], ProgressYearObj.prototype, "Personal", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", TeamObj)
], ProgressYearObj.prototype, "Team", void 0);
ProgressYearObj = tslib_1.__decorate([
    Bean('ProgressYearObj')
], ProgressYearObj);
export { ProgressYearObj };
if (false) {
    /** @type {?} */
    ProgressYearObj.prototype.DataYear;
    /** @type {?} */
    ProgressYearObj.prototype.YesterdayPoint;
    /** @type {?} */
    ProgressYearObj.prototype.Personal;
    /** @type {?} */
    ProgressYearObj.prototype.Team;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NZZWFyT2JqLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Qcm9ncmVzc1llYXJPYmoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztJQUdyQyxlQUFlO0lBRDVCO1FBSVcsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUczQixhQUFRLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFHMUMsU0FBSSxHQUFZLElBQUksT0FBTyxFQUFFLENBQUM7SUFDekMsQ0FBQztDQUFBLENBQUE7QUFWRztJQURDLFFBQVE7O2lEQUNtQjtBQUc1QjtJQURDLFFBQVE7O3VEQUN5QjtBQUdsQztJQURDLFFBQVE7c0NBQ1EsV0FBVztpREFBcUI7QUFHakQ7SUFEQyxRQUFRO3NDQUNJLE9BQU87NkNBQWlCO0FBWjVCLGVBQWU7SUFEM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0dBQ1gsZUFBZSxDQWEzQjtTQWJZLGVBQWU7OztJQUV4QixtQ0FDNEI7O0lBRTVCLHlDQUNrQzs7SUFFbEMsbUNBQ2lEOztJQUVqRCwrQkFDcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzb25hbE9iaiB9IGZyb20gXCIuL1BlcnNvbmFsT2JqXCI7XG5pbXBvcnQgeyBUZWFtT2JqIH0gZnJvbSBcIi4vVGVhbU9ialwiO1xuaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignUHJvZ3Jlc3NZZWFyT2JqJylcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1llYXJPYmoge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIERhdGFZZWFyOiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIFllc3RlcmRheVBvaW50OiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIFBlcnNvbmFsOiBQZXJzb25hbE9iaiA9IG5ldyBQZXJzb25hbE9iaigpO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIFRlYW06IFRlYW1PYmogPSBuZXcgVGVhbU9iaigpO1xufSJdfQ==