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
export class DefaultCalendarEditMetaController {
    /**
     * @param {?} profileCodeService
     */
    constructor(profileCodeService) {
        this.profileCodeService = profileCodeService;
        this.alertOpt = [];
        this.alertOpt = this.profileCodeService.getCodeArray("Calendar_RemindTime");
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onDataUpdated(data) {
        /** @type {?} */
        let IsAllDay = data['IsAllDay'] === 'Y';
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
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    onValueChange(column, value, groupId, index, data, validationResult) {
        /** @type {?} */
        let IsAllDay = data['IsAllDay'] === 'Y';
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
    }
    /**
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    onValidateAll(data, validationResult) {
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
    }
    /**
     * @param {?} type
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    btnClick(type, id, data) { }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    toFiveUnit(date) {
        /** @type {?} */
        let now = date;
        /** @type {?} */
        let minutes = getMinutes(now);
        /** @type {?} */
        let toAdd = minutes % 5 === 0 ? 0 : 5 - (minutes % 5);
        return addMinutes(now, toAdd);
    }
    /**
     * @private
     * @param {?} fromDate
     * @param {?} fromTime
     * @return {?}
     */
    getToDate(fromDate, fromTime) {
        console.log("GetToDate:", fromDate, fromTime);
        console.log("GetMonth:", getMonth(fromDate));
        /** @type {?} */
        let from = new Date(getYear(fromDate), getMonth(fromDate), getDate(fromDate), getHours(fromTime), getMinutes(fromTime));
        from = this.toFiveUnit(from);
        return addHours(from, 1);
    }
    /**
     * @private
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    checkEndBeforeStartError(data, validationResult) {
        validationResult.deleteError("StartDate");
        validationResult.deleteError("EndDate");
        validationResult.deleteError("StartTime");
        validationResult.deleteError("EndTime");
        /** @type {?} */
        let IsAllDay = data['IsAllDay'] === 'Y';
        if (!(isSameDay(data["StartDate"], data["EndDate"]) || isAfter(data["EndDate"], data["StartDate"]))) {
            validationResult.setErrorMap('StartDate', "Wrong_Start_Time");
            return;
        }
        if (!IsAllDay) {
            /** @type {?} */
            let fromDate = data["StartDate"];
            /** @type {?} */
            let fromTime = data["StartTime"];
            /** @type {?} */
            let EndDate = data["EndDate"];
            /** @type {?} */
            let EndTime = data["EndTime"];
            /** @type {?} */
            let from = this.combineDateTime(fromDate, fromTime);
            /** @type {?} */
            let end = this.combineDateTime(EndDate, EndTime);
            if (isBefore(end, addMinutes(from, 15))) {
                validationResult.setErrorMap('EndDate', "");
                validationResult.setErrorMap('EndTime', "Wrong_End_Time");
            }
        }
    }
    /**
     * @private
     * @param {?} date
     * @param {?} time
     * @return {?}
     */
    combineDateTime(date, time) {
        return new Date(getYear(date), getMonth(date), getDate(date), getHours(time), getMinutes(time));
    }
    /**
     * @private
     * @param {?} IsAllDay
     * @return {?}
     */
    getAlertOption(IsAllDay) {
        return this.alertOpt.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => JSON.parse(x.getArguments()).isAllDay === IsAllDay))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        x => new SelectOption(x.getCode(), this.profileCodeService.convertCode2Text(x.getTypeId(), x.getCode()))));
    }
}
DefaultCalendarEditMetaController.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
DefaultCalendarEditMetaController.ctorParameters = () => [
    { type: ProfileCodeService }
];
/** @nocollapse */ DefaultCalendarEditMetaController.ngInjectableDef = i0.defineInjectable({ factory: function DefaultCalendarEditMetaController_Factory() { return new DefaultCalendarEditMetaController(i0.inject(i1.ProfileCodeService)); }, token: DefaultCalendarEditMetaController, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdENhbGVuZGFyRWRpdE1ldGFDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY29tcG9uZW50cy9jYWxlbmRhci1lZGl0L0RlZmF1bHRDYWxlbmRhckVkaXRNZXRhQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFvQyxrQkFBa0IsRUFBZSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUVILFFBQVEsRUFDUixVQUFVLEVBR1YsT0FBTyxFQUNQLFFBQVEsRUFDUixVQUFVLEVBQ1YsU0FBUyxFQUNULE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUFxRixVQUFVLEVBQUUsUUFBUSxFQUNuSCxNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUs5QyxNQUFNOzs7O0lBRUYsWUFDWSxrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUsxQyxhQUFRLEdBQXVCLEVBQUUsQ0FBQztRQUh0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7OztJQUlELGFBQWEsQ0FBQyxJQUFTOztZQUVmLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRztRQUV2QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFD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SSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEcsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLFFBQWlCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUM7YUFDL0UsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFBO0lBQ3RILENBQUM7OztZQWxOSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7OztZQXJCMEMsa0JBQWtCOzs7Ozs7OztJQThCekQscURBQTBDOzs7OztJQUx0QywrREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRhQ29udHJvbGxlciwgVmFsaWRhdGlvblJlc3VsdCwgUHJvZmlsZUNvZGVTZXJ2aWNlLCBQcm9maWxlQ29kZSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7XG4gICAgYWRkRGF5cyxcbiAgICBhZGRIb3VycyxcbiAgICBhZGRNaW51dGVzLFxuICAgIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyxcbiAgICBkaWZmZXJlbmNlSW5NaW51dGVzLFxuICAgIGdldERhdGUsXG4gICAgZ2V0SG91cnMsXG4gICAgZ2V0TWludXRlcyxcbiAgICBpc1NhbWVEYXksXG4gICAgaXNBZnRlcixcbiAgICBnZXRNb250aCxcbiAgICBnZXRZZWFyLCBzZXREYXRlLCBzZXRIb3Vycywgc2V0TWludXRlcywgc2V0WWVhciwgc2V0TW9udGgsIGdldFNlY29uZHMsIHNldFNlY29uZHMsIGlzRXF1YWwsIHN0YXJ0T2ZEYXksIGlzQmVmb3JlXG59IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbiB9IGZyb20gXCJAYWxsaWFuelNORC91aVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdENhbGVuZGFyRWRpdE1ldGFDb250cm9sbGVyIGltcGxlbWVudHMgTWV0YUNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5hbGVydE9wdCA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheShcIkNhbGVuZGFyX1JlbWluZFRpbWVcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhbGVydE9wdDogQXJyYXk8UHJvZmlsZUNvZGU+ID0gW107XG5cbiAgICBvbkRhdGFVcGRhdGVkKGRhdGE6IGFueSkge1xuXG4gICAgICAgIGxldCBJc0FsbERheSA9IGRhdGFbJ0lzQWxsRGF5J10gPT09ICdZJztcblxuICAgICAgICBkYXRhW1wiQWxlcnQxT3B0aW9uXCJdID0gdGhpcy5nZXRBbGVydE9wdGlvbihJc0FsbERheSk7XG4gICAgICAgIGRhdGFbXCJBbGVydDJPcHRpb25cIl0gPSB0aGlzLmdldEFsZXJ0T3B0aW9uKElzQWxsRGF5KTtcbiAgICAgICAgZGF0YVtcIkFsZXJ0M09wdGlvblwiXSA9IHRoaXMuZ2V0QWxlcnRPcHRpb24oSXNBbGxEYXkpO1xuXG5cbiAgICAgICAgaWYgKGRhdGFbJ1N0YXJ0VGltZSddKSB7XG4gICAgICAgICAgICBkYXRhWydTdGFydERhdGUnXSA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoZGF0YVsnU3RhcnRUaW1lJ10pKTtcbiAgICAgICAgICAgIGRhdGFbJ1N0YXJ0VGltZSddID0gbmV3IERhdGUoZGF0YVsnU3RhcnRUaW1lJ10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YVsnU3RhcnREYXRlJ10gPSBkYXRhW1wiVmlld0RhdGVcIl07XG4gICAgICAgICAgICBkYXRhWydTdGFydFRpbWUnXSA9IGFkZEhvdXJzKHRoaXMudG9GaXZlVW5pdCh0aGlzLmNvbWJpbmVEYXRlVGltZShkYXRhW1wiVmlld0RhdGVcIl0sIG5ldyBEYXRlKCkpKSwgMSk7XG4gICAgICAgICAgICBpZiAoIUlzQWxsRGF5KVxuICAgICAgICAgICAgICAgIGRhdGFbJ1N0YXJ0RGF0ZSddID0gZGF0YVsnU3RhcnRUaW1lJ107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YVsnRW5kVGltZSddKSB7XG4gICAgICAgICAgICBkYXRhWydFbmREYXRlJ10gPSBzdGFydE9mRGF5KG5ldyBEYXRlKGRhdGFbJ0VuZFRpbWUnXSkpO1xuICAgICAgICAgICAgZGF0YVsnRW5kVGltZSddID0gbmV3IERhdGUoZGF0YVsnRW5kVGltZSddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRhdGFbJ0VuZERhdGUnXSA9IHN0YXJ0T2ZEYXkoZGF0YVsnU3RhcnREYXRlJ10pO1xuICAgICAgICAgICAgZGF0YVsnRW5kVGltZSddID0gYWRkSG91cnMoZGF0YVsnU3RhcnRUaW1lJ10sIDEpO1xuICAgICAgICAgICAgaWYgKCFJc0FsbERheSlcbiAgICAgICAgICAgICAgICBkYXRhWydFbmREYXRlJ10gPSBkYXRhWydFbmRUaW1lJ107XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF0YVsnSXNBbGxEYXknXSkge1xuICAgICAgICAgICAgZGF0YVsnSXNBbGxEYXknXSA9ICdOJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF0YVsnSXNBbGVydCddKSB7XG4gICAgICAgICAgICBkYXRhWydJc0FsZXJ0J10gPSAnWSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkYXRhWydBbGVydDEnXSkge1xuICAgICAgICAgICAgZGF0YVsnQWxlcnQxJ10gPSBJc0FsbERheSA/IFwiMlwiIDogXCI4XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkYXRhWydBbGVydDInXSkge1xuICAgICAgICAgICAgZGF0YVsnQWxlcnQyJ10gPSAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlZmF1bHQgY29udHJvbGxlciBvbkRhdGFVcGRhdGVkOlwiLCBkYXRhKTtcbiAgICB9XG5cbiAgICBvblZhbHVlQ2hhbmdlKGNvbHVtbjogc3RyaW5nLCB2YWx1ZTogYW55LCBncm91cElkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSwgdmFsaWRhdGlvblJlc3VsdDogVmFsaWRhdGlvblJlc3VsdCkge1xuICAgICAgICBsZXQgSXNBbGxEYXkgPSBkYXRhWydJc0FsbERheSddID09PSAnWSc7XG5cbiAgICAgICAgaWYgKGNvbHVtbiA9PT0gJ0lzQWxsRGF5Jykge1xuICAgICAgICAgICAgZGF0YVtjb2x1bW5dID0gdmFsdWUgPyAnWScgOiAnTic7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRW5kQmVmb3JlU3RhcnRFcnJvcihkYXRhLCB2YWxpZGF0aW9uUmVzdWx0KTtcblxuICAgICAgICAgICAgZGF0YVtcIkFsZXJ0MU9wdGlvblwiXSA9IHRoaXMuZ2V0QWxlcnRPcHRpb24odmFsdWUpO1xuICAgICAgICAgICAgZGF0YVtcIkFsZXJ0Mk9wdGlvblwiXSA9IHRoaXMuZ2V0QWxlcnRPcHRpb24odmFsdWUpO1xuICAgICAgICAgICAgZGF0YVtcIkFsZXJ0M09wdGlvblwiXSA9IHRoaXMuZ2V0QWxlcnRPcHRpb24odmFsdWUpO1xuXG4gICAgICAgICAgICBkYXRhW1wiQWxlcnQxXCJdID0gdmFsdWUgPyBcIjJcIiA6IFwiOFwiO1xuICAgICAgICAgICAgZGF0YVtcIkFsZXJ0MlwiXSA9IFwiXCI7XG4gICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0LmRlbGV0ZUVycm9yKFwiQWxlcnQxXCIpO1xuICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcihcIkFsZXJ0MlwiKTtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbHVtbiA9PT0gJ0lzQWxlcnQnKSB7XG4gICAgICAgICAgICBkYXRhW2NvbHVtbl0gPSB2YWx1ZSA/ICdZJyA6ICdOJztcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhWydBbGVydDEnXSA9PT0gZGF0YVsnQWxlcnQyJ10gJiYgZGF0YVsnQWxlcnQxJ10pXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ0FsZXJ0MicsICdXcm9uZ19BbGVydCcpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFkYXRhWydBbGVydDEnXSAmJiAhZGF0YVsnQWxlcnQyJ10pXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ0FsZXJ0MScsICdXcm9uZ19BbGVydF9SZXF1aXJlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0LmRlbGV0ZUVycm9yKFwiQWxlcnQxXCIpO1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuZGVsZXRlRXJyb3IoXCJBbGVydDFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29sdW1uID09PSAnU3RhcnREYXRlJykge1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgICAgICBkYXRhW1wiU3RhcnREYXRlXCJdID0gc3RhcnRPZkRheShuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBkYXRhW1wiU3RhcnREYXRlXCJdID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAoSXNBbGxEYXkpIHtcbiAgICAgICAgICAgICAgICBkYXRhWydFbmREYXRlJ10gPSBkYXRhW1wiU3RhcnREYXRlXCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YVsnRW5kRGF0ZSddID0gdGhpcy5nZXRUb0RhdGUoZGF0YVtcIlN0YXJ0RGF0ZVwiXSwgZGF0YVtcIlN0YXJ0VGltZVwiXSk7XG4gICAgICAgICAgICAgICAgZGF0YVsnRW5kVGltZSddID0gdGhpcy5nZXRUb0RhdGUoZGF0YVtcIlN0YXJ0RGF0ZVwiXSwgZGF0YVtcIlN0YXJ0VGltZVwiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoZWNrRW5kQmVmb3JlU3RhcnRFcnJvcihkYXRhLCB2YWxpZGF0aW9uUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2x1bW4gPT09ICdTdGFydFRpbWUnKSB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgICAgIGRhdGFbXCJTdGFydFRpbWVcIl0gPSB0aGlzLnRvRml2ZVVuaXQobmV3IERhdGUoKSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZGF0YVtcIlN0YXJ0VGltZVwiXSA9IHRoaXMudG9GaXZlVW5pdCh2YWx1ZSk7XG4gICAgICAgICAgICBkYXRhWydFbmREYXRlJ10gPSB0aGlzLmdldFRvRGF0ZShkYXRhW1wiU3RhcnREYXRlXCJdLCBkYXRhW1wiU3RhcnRUaW1lXCJdKTtcbiAgICAgICAgICAgIGRhdGFbJ0VuZFRpbWUnXSA9IHRoaXMuZ2V0VG9EYXRlKGRhdGFbXCJTdGFydERhdGVcIl0sIGRhdGFbXCJTdGFydFRpbWVcIl0pO1xuICAgICAgICAgICAgdGhpcy5jaGVja0VuZEJlZm9yZVN0YXJ0RXJyb3IoZGF0YSwgdmFsaWRhdGlvblJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29sdW1uID09PSAnRW5kRGF0ZScpIHtcbiAgICAgICAgICAgIC8vQ0hFQ0sgaWYgdG8gPiBmcm9tKzE1XG4gICAgICAgICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgICAgICAgIGRhdGFbXCJFbmREYXRlXCJdID0gc3RhcnRPZkRheShuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBkYXRhW1wiRW5kRGF0ZVwiXSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5jaGVja0VuZEJlZm9yZVN0YXJ0RXJyb3IoZGF0YSwgdmFsaWRhdGlvblJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29sdW1uID09PSAnRW5kVGltZScpIHtcbiAgICAgICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICAgICAgZGF0YVtcIkVuZFRpbWVcIl0gPSB0aGlzLnRvRml2ZVVuaXQobmV3IERhdGUoKSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZGF0YVtcIkVuZFRpbWVcIl0gPSB0aGlzLnRvRml2ZVVuaXQodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0VuZEJlZm9yZVN0YXJ0RXJyb3IoZGF0YSwgdmFsaWRhdGlvblJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29sdW1uID09PSAnQWxlcnQxJyB8fCBjb2x1bW4gPT09ICdBbGVydDInKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVsnQWxlcnQxJ10gPT09IGRhdGFbJ0FsZXJ0MiddICYmIGRhdGFbJ0FsZXJ0MSddKVxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ0FsZXJ0MicsICdXcm9uZ19BbGVydCcpO1xuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVsnSXNBbGVydCddID09PSAnWScgJiYgIWRhdGFbJ0FsZXJ0MSddICYmICFkYXRhWydBbGVydDInXSlcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKFwiQWxlcnQxXCIsIFwiV3JvbmdfQWxlcnRfUmVxdWlyZVwiKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuZGVsZXRlRXJyb3IoJ0FsZXJ0MScpO1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuZGVsZXRlRXJyb3IoJ0FsZXJ0MicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBvblZhbGlkYXRlQWxsKGRhdGE6IGFueSwgdmFsaWRhdGlvblJlc3VsdDogVmFsaWRhdGlvblJlc3VsdCkge1xuICAgICAgICBpZiAoZGF0YVtcIklzQWxsRGF5XCJdID09PSAnWScpIHtcbiAgICAgICAgICAgIGRhdGFbXCJTdGFydERhdGVUaW1lXCJdID0gc3RhcnRPZkRheShkYXRhW1wiU3RhcnREYXRlXCJdKTtcbiAgICAgICAgICAgIGRhdGFbXCJFbmREYXRlVGltZVwiXSA9IHN0YXJ0T2ZEYXkoZGF0YVtcIkVuZERhdGVcIl0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF0YVtcIlN0YXJ0RGF0ZVRpbWVcIl0gPSB0aGlzLmNvbWJpbmVEYXRlVGltZShkYXRhW1wiU3RhcnREYXRlXCJdLCBkYXRhW1wiU3RhcnRUaW1lXCJdKTtcbiAgICAgICAgICAgIGRhdGFbXCJFbmREYXRlVGltZVwiXSA9IHRoaXMuY29tYmluZURhdGVUaW1lKGRhdGFbXCJFbmREYXRlXCJdLCBkYXRhW1wiRW5kVGltZVwiXSk7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRhdGFbXCJDbGllbnRJRFwiXSlcbiAgICAgICAgICAgIGRhdGFbXCJDbGllbnRJRFwiXSA9IHV1aWQoKTtcbiAgICAgICAgaWYgKGRhdGFbXCJJc0FsZXJ0XCJdID09PSAnWScgJiYgIWRhdGFbXCJBbGVydDFcIl0gJiYgIWRhdGFbXCJBbGVydDJcIl0pIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoXCJBbGVydDFcIiwgXCJXcm9uZ19BbGVydF9SZXF1aXJlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9uUmVzdWx0LmlzVHJ1ZSgpO1xuICAgIH1cblxuICAgIGJ0bkNsaWNrKHR5cGU6IHN0cmluZywgaWQ6IHN0cmluZywgZGF0YTogYW55KSB7IH1cblxuICAgIHByaXZhdGUgdG9GaXZlVW5pdChkYXRlOiBEYXRlKTogRGF0ZSB7XG4gICAgICAgIGxldCBub3cgPSBkYXRlO1xuICAgICAgICBsZXQgbWludXRlcyA9IGdldE1pbnV0ZXMobm93KTtcbiAgICAgICAgbGV0IHRvQWRkID0gbWludXRlcyAlIDUgPT09IDAgPyAwIDogNSAtIChtaW51dGVzICUgNSk7XG4gICAgICAgIHJldHVybiBhZGRNaW51dGVzKG5vdywgdG9BZGQpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBnZXRUb0RhdGUoZnJvbURhdGU6IERhdGUsIGZyb21UaW1lOiBEYXRlKTogRGF0ZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2V0VG9EYXRlOlwiLCBmcm9tRGF0ZSwgZnJvbVRpbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkdldE1vbnRoOlwiLCBnZXRNb250aChmcm9tRGF0ZSkpO1xuICAgICAgICBsZXQgZnJvbSA9IG5ldyBEYXRlKGdldFllYXIoZnJvbURhdGUpLCBnZXRNb250aChmcm9tRGF0ZSksIGdldERhdGUoZnJvbURhdGUpLCBnZXRIb3Vycyhmcm9tVGltZSksIGdldE1pbnV0ZXMoZnJvbVRpbWUpKTtcbiAgICAgICAgZnJvbSA9IHRoaXMudG9GaXZlVW5pdChmcm9tKTtcbiAgICAgICAgcmV0dXJuIGFkZEhvdXJzKGZyb20sIDEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tFbmRCZWZvcmVTdGFydEVycm9yKGRhdGEsIHZhbGlkYXRpb25SZXN1bHQ6IFZhbGlkYXRpb25SZXN1bHQpIHtcbiAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcihcIlN0YXJ0RGF0ZVwiKTtcbiAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcihcIkVuZERhdGVcIik7XG4gICAgICAgIHZhbGlkYXRpb25SZXN1bHQuZGVsZXRlRXJyb3IoXCJTdGFydFRpbWVcIik7XG4gICAgICAgIHZhbGlkYXRpb25SZXN1bHQuZGVsZXRlRXJyb3IoXCJFbmRUaW1lXCIpO1xuXG4gICAgICAgIGxldCBJc0FsbERheSA9IGRhdGFbJ0lzQWxsRGF5J10gPT09ICdZJztcbiAgICAgICAgaWYgKCEoaXNTYW1lRGF5KGRhdGFbXCJTdGFydERhdGVcIl0sIGRhdGFbXCJFbmREYXRlXCJdKSB8fCBpc0FmdGVyKGRhdGFbXCJFbmREYXRlXCJdLCBkYXRhW1wiU3RhcnREYXRlXCJdKSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ1N0YXJ0RGF0ZScsIFwiV3JvbmdfU3RhcnRfVGltZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUlzQWxsRGF5KSB7XG5cbiAgICAgICAgICAgIGxldCBmcm9tRGF0ZSA9IGRhdGFbXCJTdGFydERhdGVcIl07XG4gICAgICAgICAgICBsZXQgZnJvbVRpbWUgPSBkYXRhW1wiU3RhcnRUaW1lXCJdO1xuICAgICAgICAgICAgbGV0IEVuZERhdGUgPSBkYXRhW1wiRW5kRGF0ZVwiXTtcbiAgICAgICAgICAgIGxldCBFbmRUaW1lID0gZGF0YVtcIkVuZFRpbWVcIl07XG4gICAgICAgICAgICBsZXQgZnJvbSA9IHRoaXMuY29tYmluZURhdGVUaW1lKGZyb21EYXRlLCBmcm9tVGltZSk7XG4gICAgICAgICAgICBsZXQgZW5kID0gdGhpcy5jb21iaW5lRGF0ZVRpbWUoRW5kRGF0ZSwgRW5kVGltZSk7XG4gICAgICAgICAgICBpZiAoaXNCZWZvcmUoZW5kLCBhZGRNaW51dGVzKGZyb20sIDE1KSkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdFbmREYXRlJywgXCJcIik7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnRW5kVGltZScsIFwiV3JvbmdfRW5kX1RpbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbWJpbmVEYXRlVGltZShkYXRlLCB0aW1lKTogRGF0ZSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShnZXRZZWFyKGRhdGUpLCBnZXRNb250aChkYXRlKSwgZ2V0RGF0ZShkYXRlKSwgZ2V0SG91cnModGltZSksIGdldE1pbnV0ZXModGltZSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QWxlcnRPcHRpb24oSXNBbGxEYXk6IGJvb2xlYW4pOiBBcnJheTxTZWxlY3RPcHRpb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxlcnRPcHQuZmlsdGVyKHggPT4gSlNPTi5wYXJzZSh4LmdldEFyZ3VtZW50cygpKS5pc0FsbERheSA9PT0gSXNBbGxEYXkpXG4gICAgICAgICAgICAubWFwKHggPT4gbmV3IFNlbGVjdE9wdGlvbih4LmdldENvZGUoKSwgdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCh4LmdldFR5cGVJZCgpLCB4LmdldENvZGUoKSkpKVxuICAgIH1cblxuXG59Il19