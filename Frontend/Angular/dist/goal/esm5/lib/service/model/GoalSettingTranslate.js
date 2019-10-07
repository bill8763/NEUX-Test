/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
var GoalSettingTranslate = /** @class */ (function () {
    function GoalSettingTranslate() {
        this._TeamGoalEffectiveMonthTitle = '';
        this._PersonalGoalEffectiveMonthTitle = '';
        this._NowToYearEndTitle = '';
        this._FYFCNowToYearEndTitle = '';
        this._ANPNowToYearEndTitle = '';
        this._PersonalFYFCActualVariableTitle = '';
        this._TeamFYFCActualVariableTitle = '';
        this._TeamANPActualVariableTitle = '';
        this._FYFCActualDashTitle = '';
    }
    Object.defineProperty(GoalSettingTranslate.prototype, "TeamGoalEffectiveMonthTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._TeamGoalEffectiveMonthTitle;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._TeamGoalEffectiveMonthTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingTranslate.prototype, "PersonalGoalEffectiveMonthTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._PersonalGoalEffectiveMonthTitle;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._PersonalGoalEffectiveMonthTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingTranslate.prototype, "NowToYearEndTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._NowToYearEndTitle;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._NowToYearEndTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingTranslate.prototype, "FYFCNowToYearEndTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._FYFCNowToYearEndTitle;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._FYFCNowToYearEndTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingTranslate.prototype, "ANPNowToYearEndTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ANPNowToYearEndTitle;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ANPNowToYearEndTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingTranslate.prototype, "PersonalFYFCActualVariableTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._PersonalFYFCActualVariableTitle;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._PersonalFYFCActualVariableTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingTranslate.prototype, "TeamFYFCActualVariableTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._TeamFYFCActualVariableTitle;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._TeamFYFCActualVariableTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingTranslate.prototype, "TeamANPActualVariableTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._TeamANPActualVariableTitle;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._TeamANPActualVariableTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingTranslate.prototype, "FYFCActualDashTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._FYFCActualDashTitle;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._FYFCActualDashTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingTranslate.prototype, "_TeamGoalEffectiveMonthTitle", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingTranslate.prototype, "_PersonalGoalEffectiveMonthTitle", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingTranslate.prototype, "_NowToYearEndTitle", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingTranslate.prototype, "_FYFCNowToYearEndTitle", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingTranslate.prototype, "_ANPNowToYearEndTitle", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingTranslate.prototype, "_PersonalFYFCActualVariableTitle", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingTranslate.prototype, "_TeamFYFCActualVariableTitle", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingTranslate.prototype, "_TeamANPActualVariableTitle", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingTranslate.prototype, "_FYFCActualDashTitle", void 0);
    GoalSettingTranslate = tslib_1.__decorate([
        Bean('GoalSettingTranslate'),
        tslib_1.__metadata("design:paramtypes", [])
    ], GoalSettingTranslate);
    return GoalSettingTranslate;
}());
export { GoalSettingTranslate };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingTranslate.prototype._TeamGoalEffectiveMonthTitle;
    /**
     * @type {?}
     * @private
     */
    GoalSettingTranslate.prototype._PersonalGoalEffectiveMonthTitle;
    /**
     * @type {?}
     * @private
     */
    GoalSettingTranslate.prototype._NowToYearEndTitle;
    /**
     * @type {?}
     * @private
     */
    GoalSettingTranslate.prototype._FYFCNowToYearEndTitle;
    /**
     * @type {?}
     * @private
     */
    GoalSettingTranslate.prototype._ANPNowToYearEndTitle;
    /**
     * @type {?}
     * @private
     */
    GoalSettingTranslate.prototype._PersonalFYFCActualVariableTitle;
    /**
     * @type {?}
     * @private
     */
    GoalSettingTranslate.prototype._TeamFYFCActualVariableTitle;
    /**
     * @type {?}
     * @private
     */
    GoalSettingTranslate.prototype._TeamANPActualVariableTitle;
    /**
     * @type {?}
     * @private
     */
    GoalSettingTranslate.prototype._FYFCActualDashTitle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdUcmFuc2xhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9nb2FsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvR29hbFNldHRpbmdUcmFuc2xhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQWdDOUM7UUExQlEsaUNBQTRCLEdBQVcsRUFBRSxDQUFDO1FBRzFDLHFDQUFnQyxHQUFXLEVBQUUsQ0FBQztRQUc5Qyx1QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFHaEMsMkJBQXNCLEdBQVcsRUFBRSxDQUFDO1FBR3BDLDBCQUFxQixHQUFXLEVBQUUsQ0FBQztRQUduQyxxQ0FBZ0MsR0FBVyxFQUFFLENBQUM7UUFHOUMsaUNBQTRCLEdBQVcsRUFBRSxDQUFDO1FBRzFDLGdDQUEyQixHQUFXLEVBQUUsQ0FBQztRQUd6Qyx5QkFBb0IsR0FBVyxFQUFFLENBQUM7SUFHMUMsQ0FBQztJQUVELHNCQUFXLDZEQUEyQjs7OztRQUF0QztZQUNJLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDO1FBQzdDLENBQUM7Ozs7O1FBQ0QsVUFBdUMsS0FBYTtZQUNoRCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsS0FBSyxDQUFDO1FBQzlDLENBQUM7OztPQUhBO0lBS0Qsc0JBQVcsaUVBQStCOzs7O1FBQTFDO1lBQ0ksT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUM7UUFDakQsQ0FBQzs7Ozs7UUFDRCxVQUEyQyxLQUFhO1lBQ3BELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxLQUFLLENBQUM7UUFDbEQsQ0FBQzs7O09BSEE7SUFLRCxzQkFBVyxtREFBaUI7Ozs7UUFBNUI7WUFDSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNuQyxDQUFDOzs7OztRQUNELFVBQTZCLEtBQWE7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDOzs7T0FIQTtJQUtELHNCQUFXLHVEQUFxQjs7OztRQUFoQztZQUNJLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZDLENBQUM7Ozs7O1FBQ0QsVUFBaUMsS0FBYTtZQUMxQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLENBQUM7OztPQUhBO0lBS0Qsc0JBQVcsc0RBQW9COzs7O1FBQS9CO1lBQ0ksT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7Ozs7UUFDRCxVQUFnQyxLQUFhO1lBQ3pDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDdkMsQ0FBQzs7O09BSEE7SUFLRCxzQkFBVyxpRUFBK0I7Ozs7UUFBMUM7WUFDSSxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQztRQUNqRCxDQUFDOzs7OztRQUNELFVBQTJDLEtBQWE7WUFDcEQsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxDQUFDOzs7T0FIQTtJQUtELHNCQUFXLDZEQUEyQjs7OztRQUF0QztZQUNJLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDO1FBQzdDLENBQUM7Ozs7O1FBQ0QsVUFBdUMsS0FBYTtZQUNoRCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsS0FBSyxDQUFDO1FBQzlDLENBQUM7OztPQUhBO0lBS0Qsc0JBQVcsNERBQTBCOzs7O1FBQXJDO1lBQ0ksT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUM7UUFDNUMsQ0FBQzs7Ozs7UUFDRCxVQUFzQyxLQUFhO1lBQy9DLElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7UUFDN0MsQ0FBQzs7O09BSEE7SUFLRCxzQkFBVyxxREFBbUI7Ozs7UUFBOUI7WUFDSSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQyxDQUFDOzs7OztRQUNELFVBQStCLEtBQWE7WUFDeEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUN0QyxDQUFDOzs7T0FIQTtJQXZGRDtRQURDLFFBQVE7OzhFQUN5QztJQUdsRDtRQURDLFFBQVE7O2tGQUM2QztJQUd0RDtRQURDLFFBQVE7O29FQUMrQjtJQUd4QztRQURDLFFBQVE7O3dFQUNtQztJQUc1QztRQURDLFFBQVE7O3VFQUNrQztJQUczQztRQURDLFFBQVE7O2tGQUM2QztJQUd0RDtRQURDLFFBQVE7OzhFQUN5QztJQUdsRDtRQURDLFFBQVE7OzZFQUN3QztJQUdqRDtRQURDLFFBQVE7O3NFQUNpQztJQTNCakMsb0JBQW9CO1FBRGhDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQzs7T0FDaEIsb0JBQW9CLENBOEZoQztJQUFELDJCQUFDO0NBQUEsSUFBQTtTQTlGWSxvQkFBb0I7Ozs7OztJQUU3Qiw0REFDa0Q7Ozs7O0lBRWxELGdFQUNzRDs7Ozs7SUFFdEQsa0RBQ3dDOzs7OztJQUV4QyxzREFDNEM7Ozs7O0lBRTVDLHFEQUMyQzs7Ozs7SUFFM0MsZ0VBQ3NEOzs7OztJQUV0RCw0REFDa0Q7Ozs7O0lBRWxELDJEQUNpRDs7Ozs7SUFFakQsb0RBQzBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignR29hbFNldHRpbmdUcmFuc2xhdGUnKVxuZXhwb3J0IGNsYXNzIEdvYWxTZXR0aW5nVHJhbnNsYXRlIHtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX1RlYW1Hb2FsRWZmZWN0aXZlTW9udGhUaXRsZTogc3RyaW5nID0gJyc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9QZXJzb25hbEdvYWxFZmZlY3RpdmVNb250aFRpdGxlOiBzdHJpbmcgPSAnJztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX05vd1RvWWVhckVuZFRpdGxlOiBzdHJpbmcgPSAnJztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0ZZRkNOb3dUb1llYXJFbmRUaXRsZTogc3RyaW5nID0gJyc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9BTlBOb3dUb1llYXJFbmRUaXRsZTogc3RyaW5nID0gJyc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9QZXJzb25hbEZZRkNBY3R1YWxWYXJpYWJsZVRpdGxlOiBzdHJpbmcgPSAnJztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX1RlYW1GWUZDQWN0dWFsVmFyaWFibGVUaXRsZTogc3RyaW5nID0gJyc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9UZWFtQU5QQWN0dWFsVmFyaWFibGVUaXRsZTogc3RyaW5nID0gJyc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9GWUZDQWN0dWFsRGFzaFRpdGxlOiBzdHJpbmcgPSAnJztcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHsgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBUZWFtR29hbEVmZmVjdGl2ZU1vbnRoVGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1RlYW1Hb2FsRWZmZWN0aXZlTW9udGhUaXRsZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBUZWFtR29hbEVmZmVjdGl2ZU1vbnRoVGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9UZWFtR29hbEVmZmVjdGl2ZU1vbnRoVGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gICBcbiAgICBwdWJsaWMgZ2V0IFBlcnNvbmFsR29hbEVmZmVjdGl2ZU1vbnRoVGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1BlcnNvbmFsR29hbEVmZmVjdGl2ZU1vbnRoVGl0bGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgUGVyc29uYWxHb2FsRWZmZWN0aXZlTW9udGhUaXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX1BlcnNvbmFsR29hbEVmZmVjdGl2ZU1vbnRoVGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gICBcbiAgICBwdWJsaWMgZ2V0IE5vd1RvWWVhckVuZFRpdGxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Ob3dUb1llYXJFbmRUaXRsZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBOb3dUb1llYXJFbmRUaXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX05vd1RvWWVhckVuZFRpdGxlID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgRllGQ05vd1RvWWVhckVuZFRpdGxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9GWUZDTm93VG9ZZWFyRW5kVGl0bGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgRllGQ05vd1RvWWVhckVuZFRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fRllGQ05vd1RvWWVhckVuZFRpdGxlID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgQU5QTm93VG9ZZWFyRW5kVGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FOUE5vd1RvWWVhckVuZFRpdGxlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IEFOUE5vd1RvWWVhckVuZFRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fQU5QTm93VG9ZZWFyRW5kVGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gIFxuICAgIHB1YmxpYyBnZXQgUGVyc29uYWxGWUZDQWN0dWFsVmFyaWFibGVUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fUGVyc29uYWxGWUZDQWN0dWFsVmFyaWFibGVUaXRsZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBQZXJzb25hbEZZRkNBY3R1YWxWYXJpYWJsZVRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fUGVyc29uYWxGWUZDQWN0dWFsVmFyaWFibGVUaXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IFRlYW1GWUZDQWN0dWFsVmFyaWFibGVUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fVGVhbUZZRkNBY3R1YWxWYXJpYWJsZVRpdGxlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFRlYW1GWUZDQWN0dWFsVmFyaWFibGVUaXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX1RlYW1GWUZDQWN0dWFsVmFyaWFibGVUaXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgXG4gICAgcHVibGljIGdldCBUZWFtQU5QQWN0dWFsVmFyaWFibGVUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fVGVhbUFOUEFjdHVhbFZhcmlhYmxlVGl0bGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgVGVhbUFOUEFjdHVhbFZhcmlhYmxlVGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9UZWFtQU5QQWN0dWFsVmFyaWFibGVUaXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IEZZRkNBY3R1YWxEYXNoVGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0ZZRkNBY3R1YWxEYXNoVGl0bGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgRllGQ0FjdHVhbERhc2hUaXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX0ZZRkNBY3R1YWxEYXNoVGl0bGUgPSB2YWx1ZTtcbiAgICB9XG59Il19