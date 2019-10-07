/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
var ProgressYearConfig = /** @class */ (function () {
    function ProgressYearConfig() {
        this.DataYear = 0;
        this.IsCurrent = true;
        this.WorkingMonth = 0;
        this.QuarterStartMonth = 0;
        this.QuarterEndMonth = 0;
        this.FindConvertPointBase = 0;
        this.ScheduleConvertPointBase = 0;
        this.MeetConvertPointBase = 0;
        this.SubmitConvertPointBase = 0;
        this.InforceConvertPointBase = 0;
        this.ProgressBarControlMode = "TWMode";
        this.ProgressDayPointsLimit = 20;
        this.MonthQuantityOfYear = 12;
        this.PerformanceSettlementMonth = 0;
    }
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressYearConfig.prototype, "DataYear", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Boolean)
    ], ProgressYearConfig.prototype, "IsCurrent", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressYearConfig.prototype, "WorkingMonth", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressYearConfig.prototype, "QuarterStartMonth", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressYearConfig.prototype, "QuarterEndMonth", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressYearConfig.prototype, "FindConvertPointBase", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressYearConfig.prototype, "ScheduleConvertPointBase", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressYearConfig.prototype, "MeetConvertPointBase", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressYearConfig.prototype, "SubmitConvertPointBase", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressYearConfig.prototype, "InforceConvertPointBase", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ProgressYearConfig.prototype, "ProgressBarControlMode", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressYearConfig.prototype, "ProgressDayPointsLimit", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressYearConfig.prototype, "MonthQuantityOfYear", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressYearConfig.prototype, "PerformanceSettlementMonth", void 0);
    ProgressYearConfig = tslib_1.__decorate([
        Bean('ProgressYearConfig')
    ], ProgressYearConfig);
    return ProgressYearConfig;
}());
export { ProgressYearConfig };
if (false) {
    /** @type {?} */
    ProgressYearConfig.prototype.DataYear;
    /** @type {?} */
    ProgressYearConfig.prototype.IsCurrent;
    /** @type {?} */
    ProgressYearConfig.prototype.WorkingMonth;
    /** @type {?} */
    ProgressYearConfig.prototype.QuarterStartMonth;
    /** @type {?} */
    ProgressYearConfig.prototype.QuarterEndMonth;
    /** @type {?} */
    ProgressYearConfig.prototype.FindConvertPointBase;
    /** @type {?} */
    ProgressYearConfig.prototype.ScheduleConvertPointBase;
    /** @type {?} */
    ProgressYearConfig.prototype.MeetConvertPointBase;
    /** @type {?} */
    ProgressYearConfig.prototype.SubmitConvertPointBase;
    /** @type {?} */
    ProgressYearConfig.prototype.InforceConvertPointBase;
    /** @type {?} */
    ProgressYearConfig.prototype.ProgressBarControlMode;
    /** @type {?} */
    ProgressYearConfig.prototype.ProgressDayPointsLimit;
    /** @type {?} */
    ProgressYearConfig.prototype.MonthQuantityOfYear;
    /** @type {?} */
    ProgressYearConfig.prototype.PerformanceSettlementMonth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NZZWFyQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Qcm9ncmVzc1llYXJDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQUVsRDtRQUlXLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUcxQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUd6QixzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFHOUIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFHNUIseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBR2pDLDZCQUF3QixHQUFXLENBQUMsQ0FBQztRQUdyQyx5QkFBb0IsR0FBVyxDQUFDLENBQUM7UUFHakMsMkJBQXNCLEdBQVcsQ0FBQyxDQUFDO1FBR25DLDRCQUF1QixHQUFXLENBQUMsQ0FBQztRQUdwQywyQkFBc0IsR0FBVyxRQUFRLENBQUM7UUFHMUMsMkJBQXNCLEdBQVcsRUFBRSxDQUFDO1FBR3BDLHdCQUFtQixHQUFXLEVBQUUsQ0FBQztRQUdqQywrQkFBMEIsR0FBVyxDQUFDLENBQUM7SUFFbEQsQ0FBQztJQXpDRztRQURDLFFBQVE7O3dEQUNtQjtJQUc1QjtRQURDLFFBQVE7O3lEQUN3QjtJQUdqQztRQURDLFFBQVE7OzREQUN1QjtJQUdoQztRQURDLFFBQVE7O2lFQUM0QjtJQUdyQztRQURDLFFBQVE7OytEQUMwQjtJQUduQztRQURDLFFBQVE7O29FQUMrQjtJQUd4QztRQURDLFFBQVE7O3dFQUNtQztJQUc1QztRQURDLFFBQVE7O29FQUMrQjtJQUd4QztRQURDLFFBQVE7O3NFQUNpQztJQUcxQztRQURDLFFBQVE7O3VFQUNrQztJQUczQztRQURDLFFBQVE7O3NFQUN3QztJQUdqRDtRQURDLFFBQVE7O3NFQUNrQztJQUczQztRQURDLFFBQVE7O21FQUMrQjtJQUd4QztRQURDLFFBQVE7OzBFQUNxQztJQTFDckMsa0JBQWtCO1FBRDlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztPQUNkLGtCQUFrQixDQTRDOUI7SUFBRCx5QkFBQztDQUFBLElBQUE7U0E1Q1ksa0JBQWtCOzs7SUFFM0Isc0NBQzRCOztJQUU1Qix1Q0FDaUM7O0lBRWpDLDBDQUNnQzs7SUFFaEMsK0NBQ3FDOztJQUVyQyw2Q0FDbUM7O0lBRW5DLGtEQUN3Qzs7SUFFeEMsc0RBQzRDOztJQUU1QyxrREFDd0M7O0lBRXhDLG9EQUMwQzs7SUFFMUMscURBQzJDOztJQUUzQyxvREFDaUQ7O0lBRWpELG9EQUMyQzs7SUFFM0MsaURBQ3dDOztJQUV4Qyx3REFDOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBCZWFuKCdQcm9ncmVzc1llYXJDb25maWcnKVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzWWVhckNvbmZpZyB7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgRGF0YVllYXI6IG51bWJlciA9IDA7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgSXNDdXJyZW50OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBXb3JraW5nTW9udGg6IG51bWJlciA9IDA7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgUXVhcnRlclN0YXJ0TW9udGg6IG51bWJlciA9IDA7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgUXVhcnRlckVuZE1vbnRoOiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIEZpbmRDb252ZXJ0UG9pbnRCYXNlOiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIFNjaGVkdWxlQ29udmVydFBvaW50QmFzZTogbnVtYmVyID0gMDtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBNZWV0Q29udmVydFBvaW50QmFzZTogbnVtYmVyID0gMDtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBTdWJtaXRDb252ZXJ0UG9pbnRCYXNlOiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIEluZm9yY2VDb252ZXJ0UG9pbnRCYXNlOiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIFByb2dyZXNzQmFyQ29udHJvbE1vZGU6IHN0cmluZyA9IFwiVFdNb2RlXCI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgUHJvZ3Jlc3NEYXlQb2ludHNMaW1pdDogbnVtYmVyID0gMjA7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgTW9udGhRdWFudGl0eU9mWWVhcjogbnVtYmVyID0gMTI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgUGVyZm9ybWFuY2VTZXR0bGVtZW50TW9udGg6IG51bWJlciA9IDA7XG5cbn0iXX0=