/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ProgressTeamContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        this.MonthText = "";
        this.QuarterText = "";
        this.YearText = "";
        this.ManpowerText = "";
        this.RecruitmentText = "";
        this._setTranslateVariable();
        this.MonthText = this._translateWithVariable('Month');
        this.QuarterText = this._translateWithVariable('Quarter');
        this.YearText = this._translateWithVariable('Year');
        this.ManpowerText = this._translateWithVariable('Manpower');
        this.RecruitmentText = this._translateWithVariable('Recruitment');
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
    ProgressTeamContentClass.prototype._translateVariable;
    /** @type {?} */
    ProgressTeamContentClass.prototype.MonthText;
    /** @type {?} */
    ProgressTeamContentClass.prototype.QuarterText;
    /** @type {?} */
    ProgressTeamContentClass.prototype.YearText;
    /** @type {?} */
    ProgressTeamContentClass.prototype.ManpowerText;
    /** @type {?} */
    ProgressTeamContentClass.prototype.RecruitmentText;
    /**
     * @type {?}
     * @private
     */
    ProgressTeamContentClass.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUZWFtQ29udGVudENsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Qcm9ncmVzc1RlYW1Db250ZW50Q2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU07Ozs7SUFXRixZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVR0RCxrQ0FBa0M7UUFDMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRTNCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUdoQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFHTyxxQkFBcUI7UUFFekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHO1FBQ3RCLHFCQUFxQjtTQUN4QixDQUFBO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsU0FBaUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNGLENBQUM7Q0FDSjs7Ozs7O0lBNUJHLHNEQUFrQzs7SUFFbEMsNkNBQThCOztJQUM5QiwrQ0FBZ0M7O0lBQ2hDLDRDQUE2Qjs7SUFDN0IsZ0RBQWlDOztJQUNqQyxtREFBb0M7Ozs7O0lBRXhCLG9EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFByb2dyZXNzVGVhbUNvbnRlbnRDbGFzcyB7XG5cbiAgICAvL3NhdmUgYW5kIHNldCB0cmFuc2xhdGUgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlVmFyaWFibGUgPSBudWxsO1xuXG4gICAgcHVibGljIE1vbnRoVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgUXVhcnRlclRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFllYXJUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBNYW5wb3dlclRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFJlY3J1aXRtZW50VGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVWYXJpYWJsZSgpO1xuICAgICAgICB0aGlzLk1vbnRoVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnTW9udGgnKTtcbiAgICAgICAgdGhpcy5RdWFydGVyVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnUXVhcnRlcicpO1xuICAgICAgICB0aGlzLlllYXJUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdZZWFyJyk7XG4gICAgICAgIHRoaXMuTWFucG93ZXJUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdNYW5wb3dlcicpO1xuICAgICAgICB0aGlzLlJlY3J1aXRtZW50VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnUmVjcnVpdG1lbnQnKTtcbiAgICB9XG5cbiAgICAvL3NldCB0cmFuc2xhdGUgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBfc2V0VHJhbnNsYXRlVmFyaWFibGUoKSB7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNsYXRlVmFyaWFibGUgPSB7XG4gICAgICAgICAgICAvLyBcImdyYXRzUG9pbnRzXCI6IDIwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlV2l0aFZhcmlhYmxlKG1hcHBpbmdJRDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlV2l0aFZhcmlhYmxlKG1hcHBpbmdJRCwgdGhpcy5fdHJhbnNsYXRlVmFyaWFibGUpO1xuICAgIH1cbn0iXX0=