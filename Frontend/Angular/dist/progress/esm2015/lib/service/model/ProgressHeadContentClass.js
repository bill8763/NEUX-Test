/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ProgressHeadContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        //personal team
        this.MonthText = "";
        this.QuarterText = "";
        this.YearText = "";
        this.ManpowerText = "";
        this.RecruitmentText = "";
        this.GoalText = "";
        this.ForecastText = "";
        this.ActualText = "";
        this.ShortfallText = "";
        this._setTranslateVariable();
        this.MonthText = this._translateWithVariable('Month');
        this.QuarterText = this._translateWithVariable('Quarter');
        this.YearText = this._translateWithVariable('Year');
        this.ManpowerText = this._translateWithVariable('Manpower');
        this.RecruitmentText = this._translateWithVariable('Recruitment');
        this.GoalText = this._translateWithVariable('Goal');
        this.ForecastText = this._translateWithVariable('Forecast');
        this.ActualText = this._translateWithVariable('Actual');
        this.ShortfallText = this._translateWithVariable('Shortfall');
    }
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    _setTranslateVariable() {
        this._translateVariable = {
        // "gratsPoints": 20,
        };
    }
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    _translateWithVariable(mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProgressHeadContentClass.prototype._translateVariable;
    /** @type {?} */
    ProgressHeadContentClass.prototype.MonthText;
    /** @type {?} */
    ProgressHeadContentClass.prototype.QuarterText;
    /** @type {?} */
    ProgressHeadContentClass.prototype.YearText;
    /** @type {?} */
    ProgressHeadContentClass.prototype.ManpowerText;
    /** @type {?} */
    ProgressHeadContentClass.prototype.RecruitmentText;
    /** @type {?} */
    ProgressHeadContentClass.prototype.GoalText;
    /** @type {?} */
    ProgressHeadContentClass.prototype.ForecastText;
    /** @type {?} */
    ProgressHeadContentClass.prototype.ActualText;
    /** @type {?} */
    ProgressHeadContentClass.prototype.ShortfallText;
    /**
     * @type {?}
     * @private
     */
    ProgressHeadContentClass.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NIZWFkQ29udGVudENsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Qcm9ncmVzc0hlYWRDb250ZW50Q2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU07Ozs7SUFpQkYsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFmdEQsa0NBQWtDO1FBQzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUVsQyxlQUFlO1FBQ1IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3JCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBRTdCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUc5QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFHTyxxQkFBcUI7UUFFekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHO1FBQ3RCLHFCQUFxQjtTQUN4QixDQUFBO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsU0FBaUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNGLENBQUM7Q0FDSjs7Ozs7O0lBdkNHLHNEQUFrQzs7SUFHbEMsNkNBQThCOztJQUM5QiwrQ0FBZ0M7O0lBQ2hDLDRDQUE0Qjs7SUFDNUIsZ0RBQWlDOztJQUNqQyxtREFBb0M7O0lBRXBDLDRDQUE2Qjs7SUFDN0IsZ0RBQWlDOztJQUNqQyw4Q0FBK0I7O0lBQy9CLGlEQUFrQzs7Ozs7SUFFdEIsb0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NIZWFkQ29udGVudENsYXNzIHtcbiAgICBcbiAgICAvL3NhdmUgYW5kIHNldCB0cmFuc2xhdGUgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlVmFyaWFibGUgPSBudWxsO1xuXG4gICAgLy9wZXJzb25hbCB0ZWFtXG4gICAgcHVibGljIE1vbnRoVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgUXVhcnRlclRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFllYXJUZXh0OnN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIE1hbnBvd2VyVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgUmVjcnVpdG1lbnRUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgcHVibGljIEdvYWxUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBGb3JlY2FzdFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIEFjdHVhbFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFNob3J0ZmFsbFRleHQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlVmFyaWFibGUoKTtcbiAgICAgICAgdGhpcy5Nb250aFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ01vbnRoJyk7XG4gICAgICAgIHRoaXMuUXVhcnRlclRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1F1YXJ0ZXInKTtcbiAgICAgICAgdGhpcy5ZZWFyVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnWWVhcicpO1xuICAgICAgICB0aGlzLk1hbnBvd2VyVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnTWFucG93ZXInKTtcbiAgICAgICAgdGhpcy5SZWNydWl0bWVudFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1JlY3J1aXRtZW50Jyk7XG5cbiAgICAgICAgdGhpcy5Hb2FsVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnR29hbCcpO1xuICAgICAgICB0aGlzLkZvcmVjYXN0VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnRm9yZWNhc3QnKTtcbiAgICAgICAgdGhpcy5BY3R1YWxUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdBY3R1YWwnKTtcbiAgICAgICAgdGhpcy5TaG9ydGZhbGxUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdTaG9ydGZhbGwnKTtcbiAgICB9XG5cbiAgICAvL3NldCB0cmFuc2xhdGUgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBfc2V0VHJhbnNsYXRlVmFyaWFibGUoKSB7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNsYXRlVmFyaWFibGUgPSB7XG4gICAgICAgICAgICAvLyBcImdyYXRzUG9pbnRzXCI6IDIwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlV2l0aFZhcmlhYmxlKG1hcHBpbmdJRDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlV2l0aFZhcmlhYmxlKG1hcHBpbmdJRCwgdGhpcy5fdHJhbnNsYXRlVmFyaWFibGUpO1xuICAgIH1cbn0iXX0=