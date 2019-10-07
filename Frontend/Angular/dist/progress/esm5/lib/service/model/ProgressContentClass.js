/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressContentClass = /** @class */ (function () {
    function ProgressContentClass(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        //personal team
        this.PersonalText = "";
        this.TeamText = "";
        this.MonthText = "";
        this.QuarterText = "";
        this.YearText = "";
        this.BackToProgressBtnText = "";
        this._setTranslateVariable();
        this.PersonalText = this._translateWithVariable('Personal');
        this.TeamText = this._translateWithVariable('Team');
        this.MonthText = this._translateWithVariable('Month');
        this.QuarterText = this._translateWithVariable('Quarter');
        this.YearText = this._translateWithVariable('Year');
        this.BackToProgressBtnText = this._translateWithVariable('Back_To_Progress');
    }
    //set translate variables
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    ProgressContentClass.prototype._setTranslateVariable = 
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
    ProgressContentClass.prototype._translateWithVariable = /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    function (mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    };
    return ProgressContentClass;
}());
export { ProgressContentClass };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProgressContentClass.prototype._translateVariable;
    /** @type {?} */
    ProgressContentClass.prototype.PersonalText;
    /** @type {?} */
    ProgressContentClass.prototype.TeamText;
    /** @type {?} */
    ProgressContentClass.prototype.MonthText;
    /** @type {?} */
    ProgressContentClass.prototype.QuarterText;
    /** @type {?} */
    ProgressContentClass.prototype.YearText;
    /** @type {?} */
    ProgressContentClass.prototype.BackToProgressBtnText;
    /**
     * @type {?}
     * @private
     */
    ProgressContentClass.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NDb250ZW50Q2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL1Byb2dyZXNzQ29udGVudENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTtJQWNJLDhCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVp0RCxrQ0FBa0M7UUFDMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRWxDLGVBQWU7UUFDUixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUVyQiwwQkFBcUIsR0FBVyxFQUFFLENBQUM7UUFHdEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCx5QkFBeUI7Ozs7OztJQUNqQixvREFBcUI7Ozs7OztJQUE3QjtRQUVJLElBQUksQ0FBQyxrQkFBa0IsR0FBRztRQUN0QixxQkFBcUI7U0FDeEIsQ0FBQTtJQUNMLENBQUM7Ozs7OztJQUVPLHFEQUFzQjs7Ozs7SUFBOUIsVUFBK0IsU0FBaUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7Ozs7Ozs7SUFqQ0csa0RBQWtDOztJQUdsQyw0Q0FBaUM7O0lBQ2pDLHdDQUE2Qjs7SUFDN0IseUNBQThCOztJQUM5QiwyQ0FBZ0M7O0lBQ2hDLHdDQUE0Qjs7SUFFNUIscURBQTBDOzs7OztJQUU5QixnREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NDb250ZW50Q2xhc3Mge1xuXG4gICAgLy9zYXZlIGFuZCBzZXQgdHJhbnNsYXRlIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgX3RyYW5zbGF0ZVZhcmlhYmxlID0gbnVsbDtcblxuICAgIC8vcGVyc29uYWwgdGVhbVxuICAgIHB1YmxpYyBQZXJzb25hbFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFRlYW1UZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBNb250aFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFF1YXJ0ZXJUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBZZWFyVGV4dDpzdHJpbmcgPSBcIlwiO1xuICAgIFxuICAgIHB1YmxpYyBCYWNrVG9Qcm9ncmVzc0J0blRleHQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlVmFyaWFibGUoKTtcbiAgICAgICAgdGhpcy5QZXJzb25hbFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1BlcnNvbmFsJyk7XG4gICAgICAgIHRoaXMuVGVhbVRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1RlYW0nKTtcbiAgICAgICAgdGhpcy5Nb250aFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ01vbnRoJyk7XG4gICAgICAgIHRoaXMuUXVhcnRlclRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1F1YXJ0ZXInKTtcbiAgICAgICAgdGhpcy5ZZWFyVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnWWVhcicpO1xuXG4gICAgICAgIHRoaXMuQmFja1RvUHJvZ3Jlc3NCdG5UZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdCYWNrX1RvX1Byb2dyZXNzJyk7XG4gICAgfVxuXG4gICAgLy9zZXQgdHJhbnNsYXRlIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgX3NldFRyYW5zbGF0ZVZhcmlhYmxlKCkge1xuXG4gICAgICAgIHRoaXMuX3RyYW5zbGF0ZVZhcmlhYmxlID0ge1xuICAgICAgICAgICAgLy8gXCJncmF0c1BvaW50c1wiOiAyMCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZShtYXBwaW5nSUQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZVdpdGhWYXJpYWJsZShtYXBwaW5nSUQsIHRoaXMuX3RyYW5zbGF0ZVZhcmlhYmxlKTtcbiAgICB9XG59Il19