/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressMonthlyContentClass = /** @class */ (function () {
    function ProgressMonthlyContentClass(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        this.MonthlyPlanFYFCTitleText = "";
        this.MonthText = "";
        this.PlanText = "";
        this.ActualText = "";
        this.TotalForecastTitle = "";
        this.TotalYTDActualTitle = "";
        this._setTranslateVariable();
        this.MonthlyPlanFYFCTitleText = this._translateWithVariable('Monthly_Plan_FYFC_Title');
        this.MonthText = this._translateWithVariable('Month');
        this.ActualText = this._translateWithVariable('Actual');
        this.PlanText = this._translateWithVariable('Plan');
        this.TotalForecastTitle = this._translateWithVariable('Total_Forecast');
        this.TotalYTDActualTitle = this._translateWithVariable('Total_YTD_Actual');
    }
    //set translate variables
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    ProgressMonthlyContentClass.prototype._setTranslateVariable = 
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
    ProgressMonthlyContentClass.prototype._translateWithVariable = /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    function (mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    };
    return ProgressMonthlyContentClass;
}());
export { ProgressMonthlyContentClass };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProgressMonthlyContentClass.prototype._translateVariable;
    /** @type {?} */
    ProgressMonthlyContentClass.prototype.MonthlyPlanFYFCTitleText;
    /** @type {?} */
    ProgressMonthlyContentClass.prototype.MonthText;
    /** @type {?} */
    ProgressMonthlyContentClass.prototype.PlanText;
    /** @type {?} */
    ProgressMonthlyContentClass.prototype.ActualText;
    /** @type {?} */
    ProgressMonthlyContentClass.prototype.TotalForecastTitle;
    /** @type {?} */
    ProgressMonthlyContentClass.prototype.TotalYTDActualTitle;
    /**
     * @type {?}
     * @private
     */
    ProgressMonthlyContentClass.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NNb250aGx5Q29udGVudENsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Qcm9ncmVzc01vbnRobHlDb250ZW50Q2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBYUkscUNBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBWHRELGtDQUFrQztRQUMxQix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFFM0IsNkJBQXdCLEdBQVcsRUFBRSxDQUFDO1FBQ3RDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLHVCQUFrQixHQUFXLEVBQUUsQ0FBQztRQUNoQyx3QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFHcEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELHlCQUF5Qjs7Ozs7O0lBQ2pCLDJEQUFxQjs7Ozs7O0lBQTdCO1FBRUksSUFBSSxDQUFDLGtCQUFrQixHQUFHO1FBQ3RCLHFCQUFxQjtTQUN4QixDQUFBO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sNERBQXNCOzs7OztJQUE5QixVQUErQixTQUFpQjtRQUM1QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUNMLGtDQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQzs7Ozs7OztJQWhDRyx5REFBa0M7O0lBRWxDLCtEQUE2Qzs7SUFDN0MsZ0RBQThCOztJQUM5QiwrQ0FBNkI7O0lBQzdCLGlEQUErQjs7SUFFL0IseURBQXVDOztJQUN2QywwREFBd0M7Ozs7O0lBRTVCLHVEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFByb2dyZXNzTW9udGhseUNvbnRlbnRDbGFzcyB7XG5cbiAgICAvL3NhdmUgYW5kIHNldCB0cmFuc2xhdGUgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlVmFyaWFibGUgPSBudWxsO1xuXG4gICAgcHVibGljIE1vbnRobHlQbGFuRllGQ1RpdGxlVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgTW9udGhUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBQbGFuVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgQWN0dWFsVGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgIHB1YmxpYyBUb3RhbEZvcmVjYXN0VGl0bGU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFRvdGFsWVREQWN0dWFsVGl0bGU6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlVmFyaWFibGUoKTtcblxuICAgICAgICB0aGlzLk1vbnRobHlQbGFuRllGQ1RpdGxlVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnTW9udGhseV9QbGFuX0ZZRkNfVGl0bGUnKTtcbiAgICAgICAgdGhpcy5Nb250aFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ01vbnRoJyk7XG4gICAgICAgIHRoaXMuQWN0dWFsVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnQWN0dWFsJyk7XG4gICAgICAgIHRoaXMuUGxhblRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1BsYW4nKTtcbiAgICAgICAgdGhpcy5Ub3RhbEZvcmVjYXN0VGl0bGUgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1RvdGFsX0ZvcmVjYXN0Jyk7XG4gICAgICAgIHRoaXMuVG90YWxZVERBY3R1YWxUaXRsZSA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnVG90YWxfWVREX0FjdHVhbCcpO1xuICAgIH1cblxuICAgIC8vc2V0IHRyYW5zbGF0ZSB2YXJpYWJsZXNcbiAgICBwcml2YXRlIF9zZXRUcmFuc2xhdGVWYXJpYWJsZSgpIHtcblxuICAgICAgICB0aGlzLl90cmFuc2xhdGVWYXJpYWJsZSA9IHtcbiAgICAgICAgICAgIC8vIFwiZ3JhdHNQb2ludHNcIjogMjAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFuc2xhdGVXaXRoVmFyaWFibGUobWFwcGluZ0lEOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGVXaXRoVmFyaWFibGUobWFwcGluZ0lELCB0aGlzLl90cmFuc2xhdGVWYXJpYWJsZSk7XG4gICAgfVxufSJdfQ==