/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ProgressMonthlyContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NNb250aGx5Q29udGVudENsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Qcm9ncmVzc01vbnRobHlDb250ZW50Q2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU07Ozs7SUFhRixZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVh0RCxrQ0FBa0M7UUFDMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRTNCLDZCQUF3QixHQUFXLEVBQUUsQ0FBQztRQUN0QyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4Qix1QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFDaEMsd0JBQW1CLEdBQVcsRUFBRSxDQUFDO1FBR3BDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7OztJQUdPLHFCQUFxQjtRQUV6QixJQUFJLENBQUMsa0JBQWtCLEdBQUc7UUFDdEIscUJBQXFCO1NBQ3hCLENBQUE7SUFDTCxDQUFDOzs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxTQUFpQjtRQUM1QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0YsQ0FBQztDQUNKOzs7Ozs7SUFoQ0cseURBQWtDOztJQUVsQywrREFBNkM7O0lBQzdDLGdEQUE4Qjs7SUFDOUIsK0NBQTZCOztJQUM3QixpREFBK0I7O0lBRS9CLHlEQUF1Qzs7SUFDdkMsMERBQXdDOzs7OztJQUU1Qix1REFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmVzc01vbnRobHlDb250ZW50Q2xhc3Mge1xuXG4gICAgLy9zYXZlIGFuZCBzZXQgdHJhbnNsYXRlIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgX3RyYW5zbGF0ZVZhcmlhYmxlID0gbnVsbDtcblxuICAgIHB1YmxpYyBNb250aGx5UGxhbkZZRkNUaXRsZVRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIE1vbnRoVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgUGxhblRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIEFjdHVhbFRleHQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwdWJsaWMgVG90YWxGb3JlY2FzdFRpdGxlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBUb3RhbFlUREFjdHVhbFRpdGxlOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NldFRyYW5zbGF0ZVZhcmlhYmxlKCk7XG5cbiAgICAgICAgdGhpcy5Nb250aGx5UGxhbkZZRkNUaXRsZVRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ01vbnRobHlfUGxhbl9GWUZDX1RpdGxlJyk7XG4gICAgICAgIHRoaXMuTW9udGhUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdNb250aCcpO1xuICAgICAgICB0aGlzLkFjdHVhbFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0FjdHVhbCcpO1xuICAgICAgICB0aGlzLlBsYW5UZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdQbGFuJyk7XG4gICAgICAgIHRoaXMuVG90YWxGb3JlY2FzdFRpdGxlID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdUb3RhbF9Gb3JlY2FzdCcpO1xuICAgICAgICB0aGlzLlRvdGFsWVREQWN0dWFsVGl0bGUgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1RvdGFsX1lURF9BY3R1YWwnKTtcbiAgICB9XG5cbiAgICAvL3NldCB0cmFuc2xhdGUgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBfc2V0VHJhbnNsYXRlVmFyaWFibGUoKSB7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNsYXRlVmFyaWFibGUgPSB7XG4gICAgICAgICAgICAvLyBcImdyYXRzUG9pbnRzXCI6IDIwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlV2l0aFZhcmlhYmxlKG1hcHBpbmdJRDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlV2l0aFZhcmlhYmxlKG1hcHBpbmdJRCwgdGhpcy5fdHJhbnNsYXRlVmFyaWFibGUpO1xuICAgIH1cbn0iXX0=