/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ProgressTeamDirectContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        this.DirectUnitTitle = "";
        this.ActivitiesText = "";
        this.GoalText = "";
        this.ForecastText = "";
        this.ActualText = "";
        this.ShortfallText = "";
        this._setTranslateVariable();
        this.DirectUnitTitle = this._translateWithVariable('Direct_Unit_Title');
        this.ActivitiesText = this._translateWithVariable('Activities');
        this.ActualText = this._translateWithVariable('Actual');
        this.ForecastText = this._translateWithVariable('Forecast');
        this.GoalText = this._translateWithVariable('Goal');
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
    ProgressTeamDirectContentClass.prototype._translateVariable;
    /** @type {?} */
    ProgressTeamDirectContentClass.prototype.DirectUnitTitle;
    /** @type {?} */
    ProgressTeamDirectContentClass.prototype.ActivitiesText;
    /** @type {?} */
    ProgressTeamDirectContentClass.prototype.GoalText;
    /** @type {?} */
    ProgressTeamDirectContentClass.prototype.ForecastText;
    /** @type {?} */
    ProgressTeamDirectContentClass.prototype.ActualText;
    /** @type {?} */
    ProgressTeamDirectContentClass.prototype.ShortfallText;
    /**
     * @type {?}
     * @private
     */
    ProgressTeamDirectContentClass.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUZWFtRGlyZWN0Q29udGVudENsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Qcm9ncmVzc1RlYW1EaXJlY3RDb250ZW50Q2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU07Ozs7SUFhRixZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVh0RCxrQ0FBa0M7UUFDMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRTNCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBQzdCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUk5QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQUdPLHFCQUFxQjtRQUV6QixJQUFJLENBQUMsa0JBQWtCLEdBQUc7UUFDdEIscUJBQXFCO1NBQ3hCLENBQUE7SUFDTCxDQUFDOzs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxTQUFpQjtRQUM1QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0YsQ0FBQztDQUNKOzs7Ozs7SUFoQ0csNERBQWtDOztJQUVsQyx5REFBb0M7O0lBQ3BDLHdEQUFtQzs7SUFDbkMsa0RBQTZCOztJQUM3QixzREFBaUM7O0lBQ2pDLG9EQUErQjs7SUFDL0IsdURBQWtDOzs7OztJQUd0QiwwREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1RlYW1EaXJlY3RDb250ZW50Q2xhc3Mge1xuXG4gICAgLy9zYXZlIGFuZCBzZXQgdHJhbnNsYXRlIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgX3RyYW5zbGF0ZVZhcmlhYmxlID0gbnVsbDtcblxuICAgIHB1YmxpYyBEaXJlY3RVbml0VGl0bGU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIEFjdGl2aXRpZXNUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBHb2FsVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgRm9yZWNhc3RUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBBY3R1YWxUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBTaG9ydGZhbGxUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlVmFyaWFibGUoKTtcblxuICAgICAgICB0aGlzLkRpcmVjdFVuaXRUaXRsZSA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnRGlyZWN0X1VuaXRfVGl0bGUnKTtcbiAgICAgICAgdGhpcy5BY3Rpdml0aWVzVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnQWN0aXZpdGllcycpO1xuICAgICAgICB0aGlzLkFjdHVhbFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0FjdHVhbCcpO1xuICAgICAgICB0aGlzLkZvcmVjYXN0VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnRm9yZWNhc3QnKTtcbiAgICAgICAgdGhpcy5Hb2FsVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnR29hbCcpO1xuICAgICAgICB0aGlzLlNob3J0ZmFsbFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1Nob3J0ZmFsbCcpO1xuICAgIH1cblxuICAgIC8vc2V0IHRyYW5zbGF0ZSB2YXJpYWJsZXNcbiAgICBwcml2YXRlIF9zZXRUcmFuc2xhdGVWYXJpYWJsZSgpIHtcblxuICAgICAgICB0aGlzLl90cmFuc2xhdGVWYXJpYWJsZSA9IHtcbiAgICAgICAgICAgIC8vIFwiZ3JhdHNQb2ludHNcIjogMjAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFuc2xhdGVXaXRoVmFyaWFibGUobWFwcGluZ0lEOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGVXaXRoVmFyaWFibGUobWFwcGluZ0lELCB0aGlzLl90cmFuc2xhdGVWYXJpYWJsZSk7XG4gICAgfVxufSJdfQ==