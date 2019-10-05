/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ProfileCodeService } from "@allianzSND/core";
import { Injectable } from "@angular/core";
import { v4 as uuid } from 'uuid';
import { addHours, addMinutes, getDate, getHours, getMinutes, isSameDay, isAfter, getMonth, getYear, startOfDay, isBefore } from 'date-fns';
import { SelectOption } from "@allianzSND/ui";
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
var DefaultCalendarEditMetaController = /** @class */ (function () {
    function DefaultCalendarEditMetaController(profileCodeService) {
        this.profileCodeService = profileCodeService;
        this.alertOpt = [];
        this.alertOpt = this.profileCodeService.getCodeArray("Calendar_RemindTime");
    }
    /**
     * @param {?} data
     * @return {?}
     */
    DefaultCalendarEditMetaController.prototype.onDataUpdated = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var IsAllDay = data['IsAllDay'] === 'Y';
        data["Alert1Option"] = this.getAlertOption(IsAllDay);
        data["Alert2Option"] = this.getAlertOption(IsAllDay);
        data["Alert3Option"] = this.getAlertOption(IsAllDay);
        if (data['StartTime']) {
            data['StartDate'] = startOfDay(new Date(data['StartTime']));
            data['StartTime'] = new Date(data['StartTime']);
        }
        else {
            data['StartDate'] = data["ViewDate"];
            data['StartTime'] = addHours(this.toFiveUnit(this.combineDateTime(data["ViewDate"], new Date())), 1);
            if (!IsAllDay)
                data['StartDate'] = data['StartTime'];
        }
        if (data['EndTime']) {
            data['EndDate'] = startOfDay(new Date(data['EndTime']));
            data['EndTime'] = new Date(data['EndTime']);
        }
        else {
            data['EndDate'] = startOfDay(data['StartDate']);
            data['EndTime'] = addHours(data['StartTime'], 1);
            if (!IsAllDay)
                data['EndDate'] = data['EndTime'];
        }
        if (!data['IsAllDay']) {
            data['IsAllDay'] = 'N';
        }
        if (!data['IsAlert']) {
            data['IsAlert'] = 'Y';
        }
        if (!data['Alert1']) {
            data['Alert1'] = IsAllDay ? "2" : "8";
        }
        if (!data['Alert2']) {
            data['Alert2'] = '';
        }
        console.log("Default controller onDataUpdated:", data);
    };
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    DefaultCalendarEditMetaController.prototype.onValueChange = /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    function (column, value, groupId, index, data, validationResult) {
        /** @type {?} */
        var IsAllDay = data['IsAllDay'] === 'Y';
        if (column === 'IsAllDay') {
            data[column] = value ? 'Y' : 'N';
            this.checkEndBeforeStartError(data, validationResult);
            data["Alert1Option"] = this.getAlertOption(value);
            data["Alert2Option"] = this.getAlertOption(value);
            data["Alert3Option"] = this.getAlertOption(value);
            data["Alert1"] = value ? "2" : "8";
            data["Alert2"] = "";
            validationResult.deleteError("Alert1");
            validationResult.deleteError("Alert2");
        }
        else if (column === 'IsAlert') {
            data[column] = value ? 'Y' : 'N';
            if (value) {
                if (data['Alert1'] === data['Alert2'] && data['Alert1'])
                    validationResult.setErrorMap('Alert2', 'Wrong_Alert');
                else if (!data['Alert1'] && !data['Alert2'])
                    validationResult.setErrorMap('Alert1', 'Wrong_Alert_Require');
            }
            else {
                validationResult.deleteError("Alert1");
                validationResult.deleteError("Alert1");
            }
        }
        else if (column === 'StartDate') {
            if (!value)
                data["StartDate"] = startOfDay(new Date());
            else
                data["StartDate"] = value;
            if (IsAllDay) {
                data['EndDate'] = data["StartDate"];
            }
            else {
                data['EndDate'] = this.getToDate(data["StartDate"], data["StartTime"]);
                data['EndTime'] = this.getToDate(data["StartDate"], data["StartTime"]);
            }
            this.checkEndBeforeStartError(data, validationResult);
        }
        else if (column === 'StartTime') {
            if (!value)
                data["StartTime"] = this.toFiveUnit(new Date());
            else
                data["StartTime"] = this.toFiveUnit(value);
            data['EndDate'] = this.getToDate(data["StartDate"], data["StartTime"]);
            data['EndTime'] = this.getToDate(data["StartDate"], data["StartTime"]);
            this.checkEndBeforeStartError(data, validationResult);
        }
        else if (column === 'EndDate') {
            //CHECK if to > from+15
            if (!value)
                data["EndDate"] = startOfDay(new Date());
            else
                data["EndDate"] = value;
            this.checkEndBeforeStartError(data, validationResult);
        }
        else if (column === 'EndTime') {
            if (!value)
                data["EndTime"] = this.toFiveUnit(new Date());
            else
                data["EndTime"] = this.toFiveUnit(value);
            this.checkEndBeforeStartError(data, validationResult);
        }
        else if (column === 'Alert1' || column === 'Alert2') {
            if (data['Alert1'] === data['Alert2'] && data['Alert1'])
                validationResult.setErrorMap('Alert2', 'Wrong_Alert');
            else if (data['IsAlert'] === 'Y' && !data['Alert1'] && !data['Alert2'])
                validationResult.setErrorMap("Alert1", "Wrong_Alert_Require");
            else {
                validationResult.deleteError('Alert1');
                validationResult.deleteError('Alert2');
            }
        }
    };
    /**
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    DefaultCalendarEditMetaController.prototype.onValidateAll = /**
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    function (data, validationResult) {
        if (data["IsAllDay"] === 'Y') {
            data["StartDateTime"] = startOfDay(data["StartDate"]);
            data["EndDateTime"] = startOfDay(data["EndDate"]);
        }
        else {
            data["StartDateTime"] = this.combineDateTime(data["StartDate"], data["StartTime"]);
            data["EndDateTime"] = this.combineDateTime(data["EndDate"], data["EndTime"]);
        }
        if (!data["ClientID"])
            data["ClientID"] = uuid();
        if (data["IsAlert"] === 'Y' && !data["Alert1"] && !data["Alert2"]) {
            validationResult.setErrorMap("Alert1", "Wrong_Alert_Require");
        }
        return validationResult.isTrue();
    };
    /**
     * @param {?} type
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    DefaultCalendarEditMetaController.prototype.btnClick = /**
     * @param {?} type
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    function (type, id, data) { };
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    DefaultCalendarEditMetaController.prototype.toFiveUnit = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var now = date;
        /** @type {?} */
        var minutes = getMinutes(now);
        /** @type {?} */
        var toAdd = minutes % 5 === 0 ? 0 : 5 - (minutes % 5);
        return addMinutes(now, toAdd);
    };
    /**
     * @private
     * @param {?} fromDate
     * @param {?} fromTime
     * @return {?}
     */
    DefaultCalendarEditMetaController.prototype.getToDate = /**
     * @private
     * @param {?} fromDate
     * @param {?} fromTime
     * @return {?}
     */
    function (fromDate, fromTime) {
        console.log("GetToDate:", fromDate, fromTime);
        console.log("GetMonth:", getMonth(fromDate));
        /** @type {?} */
        var from = new Date(getYear(fromDate), getMonth(fromDate), getDate(fromDate), getHours(fromTime), getMinutes(fromTime));
        from = this.toFiveUnit(from);
        return addHours(from, 1);
    };
    /**
     * @private
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    DefaultCalendarEditMetaController.prototype.checkEndBeforeStartError = /**
     * @private
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    function (data, validationResult) {
        validationResult.deleteError("StartDate");
        validationResult.deleteError("EndDate");
        validationResult.deleteError("StartTime");
        validationResult.deleteError("EndTime");
        /** @type {?} */
        var IsAllDay = data['IsAllDay'] === 'Y';
        if (!(isSameDay(data["StartDate"], data["EndDate"]) || isAfter(data["EndDate"], data["StartDate"]))) {
            validationResult.setErrorMap('StartDate', "Wrong_Start_Time");
            return;
        }
        if (!IsAllDay) {
            /** @type {?} */
            var fromDate = data["StartDate"];
            /** @type {?} */
            var fromTime = data["StartTime"];
            /** @type {?} */
            var EndDate = data["EndDate"];
            /** @type {?} */
            var EndTime = data["EndTime"];
            /** @type {?} */
            var from = this.combineDateTime(fromDate, fromTime);
            /** @type {?} */
            var end = this.combineDateTime(EndDate, EndTime);
            if (isBefore(end, addMinutes(from, 15))) {
                validationResult.setErrorMap('EndDate', "");
                validationResult.setErrorMap('EndTime', "Wrong_End_Time");
            }
        }
    };
    /**
     * @private
     * @param {?} date
     * @param {?} time
     * @return {?}
     */
    DefaultCalendarEditMetaController.prototype.combineDateTime = /**
     * @private
     * @param {?} date
     * @param {?} time
     * @return {?}
     */
    function (date, time) {
        return new Date(getYear(date), getMonth(date), getDate(date), getHours(time), getMinutes(time));
    };
    /**
     * @private
     * @param {?} IsAllDay
     * @return {?}
     */
    DefaultCalendarEditMetaController.prototype.getAlertOption = /**
     * @private
     * @param {?} IsAllDay
     * @return {?}
     */
    function (IsAllDay) {
        var _this = this;
        return this.alertOpt.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return JSON.parse(x.getArguments()).isAllDay === IsAllDay; }))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return new SelectOption(x.getCode(), _this.profileCodeService.convertCode2Text(x.getTypeId(), x.getCode())); }));
    };
    DefaultCalendarEditMetaController.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    DefaultCalendarEditMetaController.ctorParameters = function () { return [
        { type: ProfileCodeService }
    ]; };
    /** @nocollapse */ DefaultCalendarEditMetaController.ngInjectableDef = i0.defineInjectable({ factory: function DefaultCalendarEditMetaController_Factory() { return new DefaultCalendarEditMetaController(i0.inject(i1.ProfileCodeService)); }, token: DefaultCalendarEditMetaController, providedIn: "root" });
    return DefaultCalendarEditMetaController;
}());
export { DefaultCalendarEditMetaController };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultCalendarEditMetaController.prototype.alertOpt;
    /**
     * @type {?}
     * @private
     */
    DefaultCalendarEditMetaController.prototype.profileCodeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdENhbGVuZGFyRWRpdE1ldGFDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY29tcG9uZW50cy9jYWxlbmRhci1lZGl0L0RlZmF1bHRDYWxlbmRhckVkaXRNZXRhQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFvQyxrQkFBa0IsRUFBZSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUVILFFBQVEsRUFDUixVQUFVLEVBR1YsT0FBTyxFQUNQLFFBQVEsRUFDUixVQUFVLEVBQ1YsU0FBUyxFQUNULE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUFxRixVQUFVLEVBQUUsUUFBUSxFQUNuSCxNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUU5QztJQUtJLDJDQUNZLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSzFDLGFBQVEsR0FBdUIsRUFBRSxDQUFDO1FBSHRDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7O0lBSUQseURBQWE7Ozs7SUFBYixVQUFjLElBQVM7O1lBRWYsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHO1FBRXZDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBR3JELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JHLElBQUksQ0FBQyxRQUFRO2dCQUNULElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDN0M7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQy9DO2FBQ0k7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxRQUFRO2dCQUNULElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FFekM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDMUI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7Ozs7O0lBRUQseURBQWE7Ozs7Ozs7OztJQUFiLFVBQWMsTUFBYyxFQUFFLEtBQVUsRUFBRSxPQUFlLEVBQUUsS0FBYSxFQUFFLElBQVMsRUFBRSxnQkFBa0M7O1lBQy9HLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRztRQUV2QyxJQUFJLE1BQU0sS0FBSyxVQUFVLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBRXRELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWxELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDcEIsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUUxQzthQUNJLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLEtBQUssRUFBRTtnQkFDUCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDbkQsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztxQkFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ3ZDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUscUJBQXFCLENBQUMsQ0FBQzthQUNyRTtpQkFDSTtnQkFDRCxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMxQztTQUNKO2FBQ0ksSUFBSSxNQUFNLEtBQUssV0FBVyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDOztnQkFFM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLFFBQVEsRUFBRTtnQkFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUNJO2dCQUNELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQzFFO1lBQ0QsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3pEO2FBQ0ksSUFBSSxNQUFNLEtBQUssV0FBVyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQzs7Z0JBRWhELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3pEO2FBQ0ksSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzNCLHVCQUF1QjtZQUN2QixJQUFJLENBQUMsS0FBSztnQkFDTixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQzs7Z0JBRXpDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3pEO2FBQ0ksSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLO2dCQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQzs7Z0JBRTlDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUN6RDthQUNJLElBQUksTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ2pELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNuRCxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2lCQUNyRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNsRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLHFCQUFxQixDQUFDLENBQUM7aUJBQzdEO2dCQUNELGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzFDO1NBQ0o7SUFFTCxDQUFDOzs7Ozs7SUFFRCx5REFBYTs7Ozs7SUFBYixVQUFjLElBQVMsRUFBRSxnQkFBa0M7UUFDdkQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUNyRDthQUNJO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUVoRjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDL0QsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7O0lBRUQsb0RBQVE7Ozs7OztJQUFSLFVBQVMsSUFBWSxFQUFFLEVBQVUsRUFBRSxJQUFTLElBQUksQ0FBQzs7Ozs7O0lBRXpDLHNEQUFVOzs7OztJQUFsQixVQUFtQixJQUFVOztZQUNyQixHQUFHLEdBQUcsSUFBSTs7WUFDVixPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQzs7WUFDekIsS0FBSyxHQUFHLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDckQsT0FBTyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7Ozs7SUFHTyxxREFBUzs7Ozs7O0lBQWpCLFVBQWtCLFFBQWMsRUFBRSxRQUFjO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7WUFDekMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkgsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7SUFFTyxvRUFBd0I7Ozs7OztJQUFoQyxVQUFpQyxJQUFJLEVBQUUsZ0JBQWtDO1FBQ3JFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7WUFFcEMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHO1FBQ3ZDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUM5RCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFOztnQkFFUCxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7Z0JBQzVCLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDOztnQkFDNUIsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7O2dCQUN6QixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Z0JBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7O2dCQUMvQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1lBQ2hELElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzVDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzthQUM3RDtTQUNKO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLDJEQUFlOzs7Ozs7SUFBdkIsVUFBd0IsSUFBSSxFQUFFLElBQUk7UUFDOUIsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEcsQ0FBQzs7Ozs7O0lBRU8sMERBQWM7Ozs7O0lBQXRCLFVBQXVCLFFBQWlCO1FBQXhDLGlCQUdDO1FBRkcsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBbEQsQ0FBa0QsRUFBQzthQUMvRSxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFuRyxDQUFtRyxFQUFDLENBQUE7SUFDdEgsQ0FBQzs7Z0JBbE5KLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OztnQkFyQjBDLGtCQUFrQjs7OzRDQUE3RDtDQXdPQyxBQXJORCxJQXFOQztTQWxOWSxpQ0FBaUM7Ozs7OztJQVExQyxxREFBMEM7Ozs7O0lBTHRDLCtEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGFDb250cm9sbGVyLCBWYWxpZGF0aW9uUmVzdWx0LCBQcm9maWxlQ29kZVNlcnZpY2UsIFByb2ZpbGVDb2RlIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHtcbiAgICBhZGREYXlzLFxuICAgIGFkZEhvdXJzLFxuICAgIGFkZE1pbnV0ZXMsXG4gICAgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLFxuICAgIGRpZmZlcmVuY2VJbk1pbnV0ZXMsXG4gICAgZ2V0RGF0ZSxcbiAgICBnZXRIb3VycyxcbiAgICBnZXRNaW51dGVzLFxuICAgIGlzU2FtZURheSxcbiAgICBpc0FmdGVyLFxuICAgIGdldE1vbnRoLFxuICAgIGdldFllYXIsIHNldERhdGUsIHNldEhvdXJzLCBzZXRNaW51dGVzLCBzZXRZZWFyLCBzZXRNb250aCwgZ2V0U2Vjb25kcywgc2V0U2Vjb25kcywgaXNFcXVhbCwgc3RhcnRPZkRheSwgaXNCZWZvcmVcbn0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgU2VsZWN0T3B0aW9uIH0gZnJvbSBcIkBhbGxpYW56U05EL3VpXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q2FsZW5kYXJFZGl0TWV0YUNvbnRyb2xsZXIgaW1wbGVtZW50cyBNZXRhQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLmFsZXJ0T3B0ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KFwiQ2FsZW5kYXJfUmVtaW5kVGltZVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFsZXJ0T3B0OiBBcnJheTxQcm9maWxlQ29kZT4gPSBbXTtcblxuICAgIG9uRGF0YVVwZGF0ZWQoZGF0YTogYW55KSB7XG5cbiAgICAgICAgbGV0IElzQWxsRGF5ID0gZGF0YVsnSXNBbGxEYXknXSA9PT0gJ1knO1xuXG4gICAgICAgIGRhdGFbXCJBbGVydDFPcHRpb25cIl0gPSB0aGlzLmdldEFsZXJ0T3B0aW9uKElzQWxsRGF5KTtcbiAgICAgICAgZGF0YVtcIkFsZXJ0Mk9wdGlvblwiXSA9IHRoaXMuZ2V0QWxlcnRPcHRpb24oSXNBbGxEYXkpO1xuICAgICAgICBkYXRhW1wiQWxlcnQzT3B0aW9uXCJdID0gdGhpcy5nZXRBbGVydE9wdGlvbihJc0FsbERheSk7XG5cblxuICAgICAgICBpZiAoZGF0YVsnU3RhcnRUaW1lJ10pIHtcbiAgICAgICAgICAgIGRhdGFbJ1N0YXJ0RGF0ZSddID0gc3RhcnRPZkRheShuZXcgRGF0ZShkYXRhWydTdGFydFRpbWUnXSkpO1xuICAgICAgICAgICAgZGF0YVsnU3RhcnRUaW1lJ10gPSBuZXcgRGF0ZShkYXRhWydTdGFydFRpbWUnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhWydTdGFydERhdGUnXSA9IGRhdGFbXCJWaWV3RGF0ZVwiXTtcbiAgICAgICAgICAgIGRhdGFbJ1N0YXJ0VGltZSddID0gYWRkSG91cnModGhpcy50b0ZpdmVVbml0KHRoaXMuY29tYmluZURhdGVUaW1lKGRhdGFbXCJWaWV3RGF0ZVwiXSwgbmV3IERhdGUoKSkpLCAxKTtcbiAgICAgICAgICAgIGlmICghSXNBbGxEYXkpXG4gICAgICAgICAgICAgICAgZGF0YVsnU3RhcnREYXRlJ10gPSBkYXRhWydTdGFydFRpbWUnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhWydFbmRUaW1lJ10pIHtcbiAgICAgICAgICAgIGRhdGFbJ0VuZERhdGUnXSA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoZGF0YVsnRW5kVGltZSddKSk7XG4gICAgICAgICAgICBkYXRhWydFbmRUaW1lJ10gPSBuZXcgRGF0ZShkYXRhWydFbmRUaW1lJ10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF0YVsnRW5kRGF0ZSddID0gc3RhcnRPZkRheShkYXRhWydTdGFydERhdGUnXSk7XG4gICAgICAgICAgICBkYXRhWydFbmRUaW1lJ10gPSBhZGRIb3VycyhkYXRhWydTdGFydFRpbWUnXSwgMSk7XG4gICAgICAgICAgICBpZiAoIUlzQWxsRGF5KVxuICAgICAgICAgICAgICAgIGRhdGFbJ0VuZERhdGUnXSA9IGRhdGFbJ0VuZFRpbWUnXTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhWydJc0FsbERheSddKSB7XG4gICAgICAgICAgICBkYXRhWydJc0FsbERheSddID0gJ04nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhWydJc0FsZXJ0J10pIHtcbiAgICAgICAgICAgIGRhdGFbJ0lzQWxlcnQnXSA9ICdZJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRhdGFbJ0FsZXJ0MSddKSB7XG4gICAgICAgICAgICBkYXRhWydBbGVydDEnXSA9IElzQWxsRGF5ID8gXCIyXCIgOiBcIjhcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRhdGFbJ0FsZXJ0MiddKSB7XG4gICAgICAgICAgICBkYXRhWydBbGVydDInXSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVmYXVsdCBjb250cm9sbGVyIG9uRGF0YVVwZGF0ZWQ6XCIsIGRhdGEpO1xuICAgIH1cblxuICAgIG9uVmFsdWVDaGFuZ2UoY29sdW1uOiBzdHJpbmcsIHZhbHVlOiBhbnksIGdyb3VwSWQ6IHN0cmluZywgaW5kZXg6IG51bWJlciwgZGF0YTogYW55LCB2YWxpZGF0aW9uUmVzdWx0OiBWYWxpZGF0aW9uUmVzdWx0KSB7XG4gICAgICAgIGxldCBJc0FsbERheSA9IGRhdGFbJ0lzQWxsRGF5J10gPT09ICdZJztcblxuICAgICAgICBpZiAoY29sdW1uID09PSAnSXNBbGxEYXknKSB7XG4gICAgICAgICAgICBkYXRhW2NvbHVtbl0gPSB2YWx1ZSA/ICdZJyA6ICdOJztcbiAgICAgICAgICAgIHRoaXMuY2hlY2tFbmRCZWZvcmVTdGFydEVycm9yKGRhdGEsIHZhbGlkYXRpb25SZXN1bHQpO1xuXG4gICAgICAgICAgICBkYXRhW1wiQWxlcnQxT3B0aW9uXCJdID0gdGhpcy5nZXRBbGVydE9wdGlvbih2YWx1ZSk7XG4gICAgICAgICAgICBkYXRhW1wiQWxlcnQyT3B0aW9uXCJdID0gdGhpcy5nZXRBbGVydE9wdGlvbih2YWx1ZSk7XG4gICAgICAgICAgICBkYXRhW1wiQWxlcnQzT3B0aW9uXCJdID0gdGhpcy5nZXRBbGVydE9wdGlvbih2YWx1ZSk7XG5cbiAgICAgICAgICAgIGRhdGFbXCJBbGVydDFcIl0gPSB2YWx1ZSA/IFwiMlwiIDogXCI4XCI7XG4gICAgICAgICAgICBkYXRhW1wiQWxlcnQyXCJdID0gXCJcIjtcbiAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuZGVsZXRlRXJyb3IoXCJBbGVydDFcIik7XG4gICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0LmRlbGV0ZUVycm9yKFwiQWxlcnQyXCIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29sdW1uID09PSAnSXNBbGVydCcpIHtcbiAgICAgICAgICAgIGRhdGFbY29sdW1uXSA9IHZhbHVlID8gJ1knIDogJ04nO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbJ0FsZXJ0MSddID09PSBkYXRhWydBbGVydDInXSAmJiBkYXRhWydBbGVydDEnXSlcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnQWxlcnQyJywgJ1dyb25nX0FsZXJ0Jyk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWRhdGFbJ0FsZXJ0MSddICYmICFkYXRhWydBbGVydDInXSlcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnQWxlcnQxJywgJ1dyb25nX0FsZXJ0X1JlcXVpcmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuZGVsZXRlRXJyb3IoXCJBbGVydDFcIik7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcihcIkFsZXJ0MVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2x1bW4gPT09ICdTdGFydERhdGUnKSB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgICAgIGRhdGFbXCJTdGFydERhdGVcIl0gPSBzdGFydE9mRGF5KG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRhdGFbXCJTdGFydERhdGVcIl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmIChJc0FsbERheSkge1xuICAgICAgICAgICAgICAgIGRhdGFbJ0VuZERhdGUnXSA9IGRhdGFbXCJTdGFydERhdGVcIl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhWydFbmREYXRlJ10gPSB0aGlzLmdldFRvRGF0ZShkYXRhW1wiU3RhcnREYXRlXCJdLCBkYXRhW1wiU3RhcnRUaW1lXCJdKTtcbiAgICAgICAgICAgICAgICBkYXRhWydFbmRUaW1lJ10gPSB0aGlzLmdldFRvRGF0ZShkYXRhW1wiU3RhcnREYXRlXCJdLCBkYXRhW1wiU3RhcnRUaW1lXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hlY2tFbmRCZWZvcmVTdGFydEVycm9yKGRhdGEsIHZhbGlkYXRpb25SZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbHVtbiA9PT0gJ1N0YXJ0VGltZScpIHtcbiAgICAgICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICAgICAgZGF0YVtcIlN0YXJ0VGltZVwiXSA9IHRoaXMudG9GaXZlVW5pdChuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBkYXRhW1wiU3RhcnRUaW1lXCJdID0gdGhpcy50b0ZpdmVVbml0KHZhbHVlKTtcbiAgICAgICAgICAgIGRhdGFbJ0VuZERhdGUnXSA9IHRoaXMuZ2V0VG9EYXRlKGRhdGFbXCJTdGFydERhdGVcIl0sIGRhdGFbXCJTdGFydFRpbWVcIl0pO1xuICAgICAgICAgICAgZGF0YVsnRW5kVGltZSddID0gdGhpcy5nZXRUb0RhdGUoZGF0YVtcIlN0YXJ0RGF0ZVwiXSwgZGF0YVtcIlN0YXJ0VGltZVwiXSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRW5kQmVmb3JlU3RhcnRFcnJvcihkYXRhLCB2YWxpZGF0aW9uUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2x1bW4gPT09ICdFbmREYXRlJykge1xuICAgICAgICAgICAgLy9DSEVDSyBpZiB0byA+IGZyb20rMTVcbiAgICAgICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICAgICAgZGF0YVtcIkVuZERhdGVcIl0gPSBzdGFydE9mRGF5KG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRhdGFbXCJFbmREYXRlXCJdID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRW5kQmVmb3JlU3RhcnRFcnJvcihkYXRhLCB2YWxpZGF0aW9uUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2x1bW4gPT09ICdFbmRUaW1lJykge1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgICAgICBkYXRhW1wiRW5kVGltZVwiXSA9IHRoaXMudG9GaXZlVW5pdChuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBkYXRhW1wiRW5kVGltZVwiXSA9IHRoaXMudG9GaXZlVW5pdCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRW5kQmVmb3JlU3RhcnRFcnJvcihkYXRhLCB2YWxpZGF0aW9uUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2x1bW4gPT09ICdBbGVydDEnIHx8IGNvbHVtbiA9PT0gJ0FsZXJ0MicpIHtcbiAgICAgICAgICAgIGlmIChkYXRhWydBbGVydDEnXSA9PT0gZGF0YVsnQWxlcnQyJ10gJiYgZGF0YVsnQWxlcnQxJ10pXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnQWxlcnQyJywgJ1dyb25nX0FsZXJ0Jyk7XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhWydJc0FsZXJ0J10gPT09ICdZJyAmJiAhZGF0YVsnQWxlcnQxJ10gJiYgIWRhdGFbJ0FsZXJ0MiddKVxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoXCJBbGVydDFcIiwgXCJXcm9uZ19BbGVydF9SZXF1aXJlXCIpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcignQWxlcnQxJyk7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcignQWxlcnQyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uVmFsaWRhdGVBbGwoZGF0YTogYW55LCB2YWxpZGF0aW9uUmVzdWx0OiBWYWxpZGF0aW9uUmVzdWx0KSB7XG4gICAgICAgIGlmIChkYXRhW1wiSXNBbGxEYXlcIl0gPT09ICdZJykge1xuICAgICAgICAgICAgZGF0YVtcIlN0YXJ0RGF0ZVRpbWVcIl0gPSBzdGFydE9mRGF5KGRhdGFbXCJTdGFydERhdGVcIl0pO1xuICAgICAgICAgICAgZGF0YVtcIkVuZERhdGVUaW1lXCJdID0gc3RhcnRPZkRheShkYXRhW1wiRW5kRGF0ZVwiXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhW1wiU3RhcnREYXRlVGltZVwiXSA9IHRoaXMuY29tYmluZURhdGVUaW1lKGRhdGFbXCJTdGFydERhdGVcIl0sIGRhdGFbXCJTdGFydFRpbWVcIl0pO1xuICAgICAgICAgICAgZGF0YVtcIkVuZERhdGVUaW1lXCJdID0gdGhpcy5jb21iaW5lRGF0ZVRpbWUoZGF0YVtcIkVuZERhdGVcIl0sIGRhdGFbXCJFbmRUaW1lXCJdKTtcblxuICAgICAgICB9XG4gICAgICAgIGlmICghZGF0YVtcIkNsaWVudElEXCJdKVxuICAgICAgICAgICAgZGF0YVtcIkNsaWVudElEXCJdID0gdXVpZCgpO1xuICAgICAgICBpZiAoZGF0YVtcIklzQWxlcnRcIl0gPT09ICdZJyAmJiAhZGF0YVtcIkFsZXJ0MVwiXSAmJiAhZGF0YVtcIkFsZXJ0MlwiXSkge1xuICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcChcIkFsZXJ0MVwiLCBcIldyb25nX0FsZXJ0X1JlcXVpcmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25SZXN1bHQuaXNUcnVlKCk7XG4gICAgfVxuXG4gICAgYnRuQ2xpY2sodHlwZTogc3RyaW5nLCBpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHsgfVxuXG4gICAgcHJpdmF0ZSB0b0ZpdmVVbml0KGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgICAgICAgbGV0IG5vdyA9IGRhdGU7XG4gICAgICAgIGxldCBtaW51dGVzID0gZ2V0TWludXRlcyhub3cpO1xuICAgICAgICBsZXQgdG9BZGQgPSBtaW51dGVzICUgNSA9PT0gMCA/IDAgOiA1IC0gKG1pbnV0ZXMgJSA1KTtcbiAgICAgICAgcmV0dXJuIGFkZE1pbnV0ZXMobm93LCB0b0FkZCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGdldFRvRGF0ZShmcm9tRGF0ZTogRGF0ZSwgZnJvbVRpbWU6IERhdGUpOiBEYXRlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJHZXRUb0RhdGU6XCIsIGZyb21EYXRlLCBmcm9tVGltZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2V0TW9udGg6XCIsIGdldE1vbnRoKGZyb21EYXRlKSk7XG4gICAgICAgIGxldCBmcm9tID0gbmV3IERhdGUoZ2V0WWVhcihmcm9tRGF0ZSksIGdldE1vbnRoKGZyb21EYXRlKSwgZ2V0RGF0ZShmcm9tRGF0ZSksIGdldEhvdXJzKGZyb21UaW1lKSwgZ2V0TWludXRlcyhmcm9tVGltZSkpO1xuICAgICAgICBmcm9tID0gdGhpcy50b0ZpdmVVbml0KGZyb20pO1xuICAgICAgICByZXR1cm4gYWRkSG91cnMoZnJvbSwgMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0VuZEJlZm9yZVN0YXJ0RXJyb3IoZGF0YSwgdmFsaWRhdGlvblJlc3VsdDogVmFsaWRhdGlvblJlc3VsdCkge1xuICAgICAgICB2YWxpZGF0aW9uUmVzdWx0LmRlbGV0ZUVycm9yKFwiU3RhcnREYXRlXCIpO1xuICAgICAgICB2YWxpZGF0aW9uUmVzdWx0LmRlbGV0ZUVycm9yKFwiRW5kRGF0ZVwiKTtcbiAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcihcIlN0YXJ0VGltZVwiKTtcbiAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcihcIkVuZFRpbWVcIik7XG5cbiAgICAgICAgbGV0IElzQWxsRGF5ID0gZGF0YVsnSXNBbGxEYXknXSA9PT0gJ1knO1xuICAgICAgICBpZiAoIShpc1NhbWVEYXkoZGF0YVtcIlN0YXJ0RGF0ZVwiXSwgZGF0YVtcIkVuZERhdGVcIl0pIHx8IGlzQWZ0ZXIoZGF0YVtcIkVuZERhdGVcIl0sIGRhdGFbXCJTdGFydERhdGVcIl0pKSkge1xuICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnU3RhcnREYXRlJywgXCJXcm9uZ19TdGFydF9UaW1lXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghSXNBbGxEYXkpIHtcblxuICAgICAgICAgICAgbGV0IGZyb21EYXRlID0gZGF0YVtcIlN0YXJ0RGF0ZVwiXTtcbiAgICAgICAgICAgIGxldCBmcm9tVGltZSA9IGRhdGFbXCJTdGFydFRpbWVcIl07XG4gICAgICAgICAgICBsZXQgRW5kRGF0ZSA9IGRhdGFbXCJFbmREYXRlXCJdO1xuICAgICAgICAgICAgbGV0IEVuZFRpbWUgPSBkYXRhW1wiRW5kVGltZVwiXTtcbiAgICAgICAgICAgIGxldCBmcm9tID0gdGhpcy5jb21iaW5lRGF0ZVRpbWUoZnJvbURhdGUsIGZyb21UaW1lKTtcbiAgICAgICAgICAgIGxldCBlbmQgPSB0aGlzLmNvbWJpbmVEYXRlVGltZShFbmREYXRlLCBFbmRUaW1lKTtcbiAgICAgICAgICAgIGlmIChpc0JlZm9yZShlbmQsIGFkZE1pbnV0ZXMoZnJvbSwgMTUpKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ0VuZERhdGUnLCBcIlwiKTtcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdFbmRUaW1lJywgXCJXcm9uZ19FbmRfVGltZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY29tYmluZURhdGVUaW1lKGRhdGUsIHRpbWUpOiBEYXRlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGdldFllYXIoZGF0ZSksIGdldE1vbnRoKGRhdGUpLCBnZXREYXRlKGRhdGUpLCBnZXRIb3Vycyh0aW1lKSwgZ2V0TWludXRlcyh0aW1lKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRBbGVydE9wdGlvbihJc0FsbERheTogYm9vbGVhbik6IEFycmF5PFNlbGVjdE9wdGlvbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGVydE9wdC5maWx0ZXIoeCA9PiBKU09OLnBhcnNlKHguZ2V0QXJndW1lbnRzKCkpLmlzQWxsRGF5ID09PSBJc0FsbERheSlcbiAgICAgICAgICAgIC5tYXAoeCA9PiBuZXcgU2VsZWN0T3B0aW9uKHguZ2V0Q29kZSgpLCB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KHguZ2V0VHlwZUlkKCksIHguZ2V0Q29kZSgpKSkpXG4gICAgfVxuXG5cbn0iXX0=