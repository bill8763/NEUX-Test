/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
let ProgressYearConfig = class ProgressYearConfig {
    constructor() {
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
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NZZWFyQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Qcm9ncmVzc1llYXJDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0lBR3JDLGtCQUFrQjtJQUQvQjtRQUlXLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUcxQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUd6QixzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFHOUIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFHNUIseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBR2pDLDZCQUF3QixHQUFXLENBQUMsQ0FBQztRQUdyQyx5QkFBb0IsR0FBVyxDQUFDLENBQUM7UUFHakMsMkJBQXNCLEdBQVcsQ0FBQyxDQUFDO1FBR25DLDRCQUF1QixHQUFXLENBQUMsQ0FBQztRQUdwQywyQkFBc0IsR0FBVyxRQUFRLENBQUM7UUFHMUMsMkJBQXNCLEdBQVcsRUFBRSxDQUFDO1FBR3BDLHdCQUFtQixHQUFXLEVBQUUsQ0FBQztRQUdqQywrQkFBMEIsR0FBVyxDQUFDLENBQUM7SUFFbEQsQ0FBQztDQUFBLENBQUE7QUF6Q0c7SUFEQyxRQUFROztvREFDbUI7QUFHNUI7SUFEQyxRQUFROztxREFDd0I7QUFHakM7SUFEQyxRQUFROzt3REFDdUI7QUFHaEM7SUFEQyxRQUFROzs2REFDNEI7QUFHckM7SUFEQyxRQUFROzsyREFDMEI7QUFHbkM7SUFEQyxRQUFROztnRUFDK0I7QUFHeEM7SUFEQyxRQUFROztvRUFDbUM7QUFHNUM7SUFEQyxRQUFROztnRUFDK0I7QUFHeEM7SUFEQyxRQUFROztrRUFDaUM7QUFHMUM7SUFEQyxRQUFROzttRUFDa0M7QUFHM0M7SUFEQyxRQUFROztrRUFDd0M7QUFHakQ7SUFEQyxRQUFROztrRUFDa0M7QUFHM0M7SUFEQyxRQUFROzsrREFDK0I7QUFHeEM7SUFEQyxRQUFROztzRUFDcUM7QUExQ3JDLGtCQUFrQjtJQUQ5QixJQUFJLENBQUMsb0JBQW9CLENBQUM7R0FDZCxrQkFBa0IsQ0E0QzlCO1NBNUNZLGtCQUFrQjs7O0lBRTNCLHNDQUM0Qjs7SUFFNUIsdUNBQ2lDOztJQUVqQywwQ0FDZ0M7O0lBRWhDLCtDQUNxQzs7SUFFckMsNkNBQ21DOztJQUVuQyxrREFDd0M7O0lBRXhDLHNEQUM0Qzs7SUFFNUMsa0RBQ3dDOztJQUV4QyxvREFDMEM7O0lBRTFDLHFEQUMyQzs7SUFFM0Msb0RBQ2lEOztJQUVqRCxvREFDMkM7O0lBRTNDLGlEQUN3Qzs7SUFFeEMsd0RBQzhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignUHJvZ3Jlc3NZZWFyQ29uZmlnJylcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1llYXJDb25maWcge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIERhdGFZZWFyOiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIElzQ3VycmVudDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgV29ya2luZ01vbnRoOiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIFF1YXJ0ZXJTdGFydE1vbnRoOiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIFF1YXJ0ZXJFbmRNb250aDogbnVtYmVyID0gMDtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBGaW5kQ29udmVydFBvaW50QmFzZTogbnVtYmVyID0gMDtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBTY2hlZHVsZUNvbnZlcnRQb2ludEJhc2U6IG51bWJlciA9IDA7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgTWVldENvbnZlcnRQb2ludEJhc2U6IG51bWJlciA9IDA7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgU3VibWl0Q29udmVydFBvaW50QmFzZTogbnVtYmVyID0gMDtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBJbmZvcmNlQ29udmVydFBvaW50QmFzZTogbnVtYmVyID0gMDtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBQcm9ncmVzc0JhckNvbnRyb2xNb2RlOiBzdHJpbmcgPSBcIlRXTW9kZVwiO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIFByb2dyZXNzRGF5UG9pbnRzTGltaXQ6IG51bWJlciA9IDIwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIE1vbnRoUXVhbnRpdHlPZlllYXI6IG51bWJlciA9IDEyO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIFBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoOiBudW1iZXIgPSAwO1xuXG59Il19