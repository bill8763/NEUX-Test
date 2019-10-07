/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { APPROVESTATUS } from "./GoalSettingCommon";
import { Bean, Required } from "@allianzSND/core";
let GoalSettingGoalStatus = class GoalSettingGoalStatus {
    constructor() {
    }
    /**
     * @return {?}
     */
    getExtension() {
        return this._Extension;
    }
    /**
     * @param {?} extension
     * @return {?}
     */
    setExtension(extension) {
        this._Extension = extension;
    }
    /**
     * @return {?}
     */
    get PersonnelGoalApplicableYM() {
        return this._PersonnelGoalApplicableYM;
    }
    /**
     * @return {?}
     */
    get TeamGoalApplicableYM() {
        return this._TeamGoalApplicableYM;
    }
    /**
     * @return {?}
     */
    get GoalSetMonth() {
        return this._GoalSetMonth;
    }
    /**
     * @return {?}
     */
    get ApproveStatus() {
        return this._ApproveStatus;
    }
    /**
     * @return {?}
     */
    get IsFirstTime() {
        return this._IsFirstTime;
    }
    /**
     * @return {?}
     */
    get IsNeedSetting() {
        return this._IsNeedSetting;
    }
    /**
     * @return {?}
     */
    get RemainingDays() {
        return this._RemainingDays;
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
    get IsCurrent() {
        return this._IsCurrent;
    }
    /**
     * @return {?}
     */
    get SupervisorComment() {
        return this._SupervisorComment;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set IsCurrent(value) {
        this._IsCurrent = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set DataYear(value) {
        this._DataYear = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set PersonnelGoalApplicableYM(value) {
        this._PersonnelGoalApplicableYM = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set TeamGoalApplicableYM(value) {
        this._TeamGoalApplicableYM = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set GoalSetMonth(value) {
        this._GoalSetMonth = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ApproveStatus(value) {
        this._ApproveStatus = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set IsFirstTime(value) {
        this._IsFirstTime = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set IsNeedSetting(value) {
        this._IsNeedSetting = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set RemainingDays(value) {
        this._RemainingDays = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set SupervisorComment(value) {
        this._SupervisorComment = value;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], GoalSettingGoalStatus.prototype, "_DataYear", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], GoalSettingGoalStatus.prototype, "_PersonnelGoalApplicableYM", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], GoalSettingGoalStatus.prototype, "_TeamGoalApplicableYM", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], GoalSettingGoalStatus.prototype, "_GoalSetMonth", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], GoalSettingGoalStatus.prototype, "_ApproveStatus", void 0);
GoalSettingGoalStatus = tslib_1.__decorate([
    Bean('GoalSettingGoalStatus'),
    tslib_1.__metadata("design:paramtypes", [])
], GoalSettingGoalStatus);
export { GoalSettingGoalStatus };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._DataYear;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._IsCurrent;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._PersonnelGoalApplicableYM;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._TeamGoalApplicableYM;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._GoalSetMonth;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._ApproveStatus;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._IsFirstTime;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._IsNeedSetting;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._RemainingDays;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._SupervisorComment;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._Extension;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdHb2FsU3RhdHVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZ29hbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL0dvYWxTZXR0aW5nR29hbFN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztJQUdwRCxxQkFBcUI7SUE2QjlCO0lBRUEsQ0FBQzs7OztJQUVNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFDTSxZQUFZLENBQUMsU0FBUztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsSUFBVyx5QkFBeUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNELElBQVcsb0JBQW9CO1FBQzNCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFDRCxJQUFXLFlBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFDRCxJQUFXLGFBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFDRCxJQUFXLFdBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDRCxJQUFXLGFBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFDRCxJQUFXLGFBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFDRCxJQUFXLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNELElBQVcsU0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ25DLENBQUM7Ozs7O0lBSUQsSUFBVyxTQUFTLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7OztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFDRCxJQUFXLHlCQUF5QixDQUFDLEtBQWE7UUFDOUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQztJQUM1QyxDQUFDOzs7OztJQUNELElBQVcsb0JBQW9CLENBQUMsS0FBYTtRQUN6QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDOzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQW9CO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYztRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBQ0QsSUFBVyxpQkFBaUIsQ0FBQyxLQUFhO1FBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztDQUVKLENBQUE7QUFyR0c7SUFEQyxRQUFROzt3REFDaUI7QUFLMUI7SUFEQyxRQUFROzt5RUFDa0M7QUFHM0M7SUFEQyxRQUFROztvRUFDNkI7QUFHdEM7SUFEQyxRQUFROzs0REFDcUI7QUFHOUI7SUFEQyxRQUFROzs2REFDNkI7QUFqQjdCLHFCQUFxQjtJQURqQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7O0dBQ2pCLHFCQUFxQixDQXdHakM7U0F4R1kscUJBQXFCOzs7Ozs7SUFFOUIsMENBQzBCOzs7OztJQUUxQiwyQ0FBMkI7Ozs7O0lBRTNCLDJEQUMyQzs7Ozs7SUFFM0Msc0RBQ3NDOzs7OztJQUV0Qyw4Q0FDOEI7Ozs7O0lBRTlCLCtDQUNzQzs7Ozs7SUFFdEMsNkNBQThCOzs7OztJQUU5QiwrQ0FBZ0M7Ozs7O0lBRWhDLCtDQUErQjs7Ozs7SUFFL0IsbURBQW1DOzs7OztJQUVuQywyQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBST1ZFU1RBVFVTIH0gZnJvbSBcIi4vR29hbFNldHRpbmdDb21tb25cIjtcbmltcG9ydCB7IEV4dGVuc2lvbkRhdGEsIEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ0dvYWxTZXR0aW5nR29hbFN0YXR1cycpXG5leHBvcnQgY2xhc3MgR29hbFNldHRpbmdHb2FsU3RhdHVzIHtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0RhdGFZZWFyOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIF9Jc0N1cnJlbnQ6IHN0cmluZztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX1BlcnNvbm5lbEdvYWxBcHBsaWNhYmxlWU06IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX1RlYW1Hb2FsQXBwbGljYWJsZVlNOiBudW1iZXI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9Hb2FsU2V0TW9udGg6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0FwcHJvdmVTdGF0dXM6IEFQUFJPVkVTVEFUVVM7XG5cbiAgICBwcml2YXRlIF9Jc0ZpcnN0VGltZTogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgX0lzTmVlZFNldHRpbmc6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9SZW1haW5pbmdEYXlzOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIF9TdXBlcnZpc29yQ29tbWVudDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfRXh0ZW5zaW9uOiBFeHRlbnNpb25EYXRhO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RXh0ZW5zaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fRXh0ZW5zaW9uO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0RXh0ZW5zaW9uKGV4dGVuc2lvbikge1xuICAgICAgICB0aGlzLl9FeHRlbnNpb24gPSBleHRlbnNpb247XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBQZXJzb25uZWxHb2FsQXBwbGljYWJsZVlNKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9QZXJzb25uZWxHb2FsQXBwbGljYWJsZVlNO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IFRlYW1Hb2FsQXBwbGljYWJsZVlNKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9UZWFtR29hbEFwcGxpY2FibGVZTTtcbiAgICB9XG4gICAgcHVibGljIGdldCBHb2FsU2V0TW9udGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dvYWxTZXRNb250aDtcbiAgICB9XG4gICAgcHVibGljIGdldCBBcHByb3ZlU3RhdHVzKCk6IEFQUFJPVkVTVEFUVVMge1xuICAgICAgICByZXR1cm4gdGhpcy5fQXBwcm92ZVN0YXR1cztcbiAgICB9XG4gICAgcHVibGljIGdldCBJc0ZpcnN0VGltZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0lzRmlyc3RUaW1lO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IElzTmVlZFNldHRpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Jc05lZWRTZXR0aW5nO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IFJlbWFpbmluZ0RheXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1JlbWFpbmluZ0RheXM7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgRGF0YVllYXIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0RhdGFZZWFyO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IElzQ3VycmVudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fSXNDdXJyZW50O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IFN1cGVydmlzb3JDb21tZW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9TdXBlcnZpc29yQ29tbWVudDtcbiAgICB9XG5cblxuXG4gICAgcHVibGljIHNldCBJc0N1cnJlbnQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9Jc0N1cnJlbnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBEYXRhWWVhcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX0RhdGFZZWFyID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgUGVyc29ubmVsR29hbEFwcGxpY2FibGVZTSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX1BlcnNvbm5lbEdvYWxBcHBsaWNhYmxlWU0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBUZWFtR29hbEFwcGxpY2FibGVZTSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX1RlYW1Hb2FsQXBwbGljYWJsZVlNID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgR29hbFNldE1vbnRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fR29hbFNldE1vbnRoID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgQXBwcm92ZVN0YXR1cyh2YWx1ZTogQVBQUk9WRVNUQVRVUykge1xuICAgICAgICB0aGlzLl9BcHByb3ZlU3RhdHVzID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgSXNGaXJzdFRpbWUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fSXNGaXJzdFRpbWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBJc05lZWRTZXR0aW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX0lzTmVlZFNldHRpbmcgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBSZW1haW5pbmdEYXlzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fUmVtYWluaW5nRGF5cyA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFN1cGVydmlzb3JDb21tZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fU3VwZXJ2aXNvckNvbW1lbnQgPSB2YWx1ZTtcbiAgICB9XG5cbn0iXX0=