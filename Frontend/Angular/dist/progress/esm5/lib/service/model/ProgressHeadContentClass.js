/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressHeadContentClass = /** @class */ (function () {
    function ProgressHeadContentClass(translateService) {
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
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    ProgressHeadContentClass.prototype._setTranslateVariable = 
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    function () {
        this._translateVariable = {
        // "gratsPoints": 20,
        };
    };
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    ProgressHeadContentClass.prototype._translateWithVariable = /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    function (mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    };
    return ProgressHeadContentClass;
}());
export { ProgressHeadContentClass };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NIZWFkQ29udGVudENsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Qcm9ncmVzc0hlYWRDb250ZW50Q2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBaUJJLGtDQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWZ0RCxrQ0FBa0M7UUFDMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRWxDLGVBQWU7UUFDUixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFFN0IsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBRzlCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCx5QkFBeUI7Ozs7OztJQUNqQix3REFBcUI7Ozs7OztJQUE3QjtRQUVJLElBQUksQ0FBQyxrQkFBa0IsR0FBRztRQUN0QixxQkFBcUI7U0FDeEIsQ0FBQTtJQUNMLENBQUM7Ozs7OztJQUVPLHlEQUFzQjs7Ozs7SUFBOUIsVUFBK0IsU0FBaUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFDTCwrQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7Ozs7Ozs7SUF2Q0csc0RBQWtDOztJQUdsQyw2Q0FBOEI7O0lBQzlCLCtDQUFnQzs7SUFDaEMsNENBQTRCOztJQUM1QixnREFBaUM7O0lBQ2pDLG1EQUFvQzs7SUFFcEMsNENBQTZCOztJQUM3QixnREFBaUM7O0lBQ2pDLDhDQUErQjs7SUFDL0IsaURBQWtDOzs7OztJQUV0QixvREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0hlYWRDb250ZW50Q2xhc3Mge1xuICAgIFxuICAgIC8vc2F2ZSBhbmQgc2V0IHRyYW5zbGF0ZSB2YXJpYWJsZXNcbiAgICBwcml2YXRlIF90cmFuc2xhdGVWYXJpYWJsZSA9IG51bGw7XG5cbiAgICAvL3BlcnNvbmFsIHRlYW1cbiAgICBwdWJsaWMgTW9udGhUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBRdWFydGVyVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgWWVhclRleHQ6c3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgTWFucG93ZXJUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBSZWNydWl0bWVudFRleHQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwdWJsaWMgR29hbFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIEZvcmVjYXN0VGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgQWN0dWFsVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgU2hvcnRmYWxsVGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVWYXJpYWJsZSgpO1xuICAgICAgICB0aGlzLk1vbnRoVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnTW9udGgnKTtcbiAgICAgICAgdGhpcy5RdWFydGVyVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnUXVhcnRlcicpO1xuICAgICAgICB0aGlzLlllYXJUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdZZWFyJyk7XG4gICAgICAgIHRoaXMuTWFucG93ZXJUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdNYW5wb3dlcicpO1xuICAgICAgICB0aGlzLlJlY3J1aXRtZW50VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnUmVjcnVpdG1lbnQnKTtcblxuICAgICAgICB0aGlzLkdvYWxUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdHb2FsJyk7XG4gICAgICAgIHRoaXMuRm9yZWNhc3RUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdGb3JlY2FzdCcpO1xuICAgICAgICB0aGlzLkFjdHVhbFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0FjdHVhbCcpO1xuICAgICAgICB0aGlzLlNob3J0ZmFsbFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1Nob3J0ZmFsbCcpO1xuICAgIH1cblxuICAgIC8vc2V0IHRyYW5zbGF0ZSB2YXJpYWJsZXNcbiAgICBwcml2YXRlIF9zZXRUcmFuc2xhdGVWYXJpYWJsZSgpIHtcblxuICAgICAgICB0aGlzLl90cmFuc2xhdGVWYXJpYWJsZSA9IHtcbiAgICAgICAgICAgIC8vIFwiZ3JhdHNQb2ludHNcIjogMjAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFuc2xhdGVXaXRoVmFyaWFibGUobWFwcGluZ0lEOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGVXaXRoVmFyaWFibGUobWFwcGluZ0lELCB0aGlzLl90cmFuc2xhdGVWYXJpYWJsZSk7XG4gICAgfVxufSJdfQ==