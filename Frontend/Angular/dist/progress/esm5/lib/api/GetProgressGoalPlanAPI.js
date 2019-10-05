/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetProgressGoalPlanAPI = /** @class */ (function () {
    /*
    constructor(DaoFactory) {
        this._daoFactory = DaoFactory;
    }
    */
    function GetProgressGoalPlanAPI() {
    }
    Object.defineProperty(GetProgressGoalPlanAPI.prototype, "ClientId", {
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._clientID = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetProgressGoalPlanAPI.prototype, "DataType", {
        set: /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this._personalDataType = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetProgressGoalPlanAPI.prototype, "TimeBase", {
        set: /**
         * @param {?} time
         * @return {?}
         */
        function (time) {
            this._personalDataTimeBase = time;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} year
     * @return {?}
     */
    GetProgressGoalPlanAPI.prototype.setDataYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this._dataYear = year;
    };
    ;
    /**
     * @return {?}
     */
    GetProgressGoalPlanAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getProgressGoalPlan';
    };
    /**
     * @return {?}
     */
    GetProgressGoalPlanAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        //alert("personal progress mock data");
        if (this._dataYear == 2019) {
            return './assets/mock/getProgressGoalPlan_2019.json';
        }
        else if (this._dataYear == 2020) {
            return './assets/mock/getProgressGoalPlan_2020.json';
        }
        else {
            //todo throw error
            console.warn("datYear not match mock path");
            return '';
        }
    };
    /**
     * @return {?}
     */
    GetProgressGoalPlanAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        throw new Error("Method not implemented.");
    };
    return GetProgressGoalPlanAPI;
}());
export { GetProgressGoalPlanAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetProgressGoalPlanAPI.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    GetProgressGoalPlanAPI.prototype._daoFactory;
    /**
     * @type {?}
     * @private
     */
    GetProgressGoalPlanAPI.prototype._personalDataType;
    /**
     * @type {?}
     * @private
     */
    GetProgressGoalPlanAPI.prototype._personalDataTimeBase;
    /**
     * @type {?}
     * @private
     */
    GetProgressGoalPlanAPI.prototype._dataYear;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0UHJvZ3Jlc3NHb2FsUGxhbkFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL2FwaS9HZXRQcm9ncmVzc0dvYWxQbGFuQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFXQTtJQXdCSTs7OztNQUlFO0lBRUY7SUFBYyxDQUFDO0lBdEJmLHNCQUFJLDRDQUFROzs7OztRQUFaLFVBQWEsRUFBUztZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFROzs7OztRQUFaLFVBQWEsSUFBcUI7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFROzs7OztRQUFaLFVBQWEsSUFBeUI7WUFDbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCw0Q0FBVzs7OztJQUFYLFVBQVksSUFBWTtRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBUWMsQ0FBQzs7OztJQUVoQiwyQ0FBVTs7O0lBQVY7UUFDSSxPQUFPLHFCQUFxQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDSSx1Q0FBdUM7UUFDdkMsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUN6QixPQUFPLDZDQUE2QyxDQUFDO1NBQ3REO2FBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUM5QixPQUFPLDZDQUE2QyxDQUFDO1NBQ3REO2FBQ0k7WUFDSCxrQkFBa0I7WUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7SUFDTCxDQUFDOzs7O0lBR0QsMkNBQVU7OztJQUFWO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUF1QkwsNkJBQUM7QUFBRCxDQUFDLEFBN0VELElBNkVDOzs7Ozs7O0lBM0VHLDJDQUEwQjs7Ozs7SUFDMUIsNkNBQWdDOzs7OztJQUNoQyxtREFBNEM7Ozs7O0lBQzVDLHVEQUFvRDs7Ozs7SUFDcEQsMkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQge0lTUUxpdGVBUEl9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBmcm9tfSBmcm9tICdyeGpzJztcbmltcG9ydCB7RGFvRmFjdG9yeX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0NsaWVudEN1c3RvbURhb30gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0VxdWFsUmVzdHJpY3Rpb259IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5pbXBvcnQgeyBQZXJzb25hbERhdGFUeXBlIH0gZnJvbSAgJy4uL3NlcnZpY2UvbW9kZWwvRW51bS9QZXJzb25hbERhdGFUeXBlJztcbmltcG9ydCB7IFBlcnNvbmFsRGF0YVRpbWVCYXNlIH0gZnJvbSAgJy4uL3NlcnZpY2UvbW9kZWwvRW51bS9QZXJzb25hbERhdGFUaW1lQmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBHZXRQcm9ncmVzc0dvYWxQbGFuQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG4gICAgcHJpdmF0ZSBfY2xpZW50SUQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9kYW9GYWN0b3J5OiBEYW9GYWN0b3J5O1xuICAgIHByaXZhdGUgX3BlcnNvbmFsRGF0YVR5cGU6IFBlcnNvbmFsRGF0YVR5cGU7XG4gICAgcHJpdmF0ZSBfcGVyc29uYWxEYXRhVGltZUJhc2U6IFBlcnNvbmFsRGF0YVRpbWVCYXNlO1xuICAgIHByaXZhdGUgX2RhdGFZZWFyOiBudW1iZXI7XG5cbiAgICBzZXQgQ2xpZW50SWQoaWQ6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NsaWVudElEID0gaWQ7XG4gICAgfVxuXG4gICAgc2V0IERhdGFUeXBlKHR5cGU6UGVyc29uYWxEYXRhVHlwZSkge1xuICAgICAgICB0aGlzLl9wZXJzb25hbERhdGFUeXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBzZXQgVGltZUJhc2UodGltZTpQZXJzb25hbERhdGFUaW1lQmFzZSkge1xuICAgICAgICB0aGlzLl9wZXJzb25hbERhdGFUaW1lQmFzZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgc2V0RGF0YVllYXIoeWVhcjogbnVtYmVyKSB7XG4gICAgICB0aGlzLl9kYXRhWWVhciA9IHllYXI7XG4gICAgfVxuXG4gICAgLypcbiAgICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX2Rhb0ZhY3RvcnkgPSBEYW9GYWN0b3J5O1xuICAgIH1cbiAgICAqL1xuXG4gICAgY29uc3RydWN0b3IoKXt9O1xuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2dldFByb2dyZXNzR29hbFBsYW4nO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIC8vYWxlcnQoXCJwZXJzb25hbCBwcm9ncmVzcyBtb2NrIGRhdGFcIik7XG4gICAgICAgIGlmKHRoaXMuX2RhdGFZZWFyID09IDIwMTkpIHtcbiAgICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0UHJvZ3Jlc3NHb2FsUGxhbl8yMDE5Lmpzb24nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5fZGF0YVllYXIgPT0gMjAyMCkge1xuICAgICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRQcm9ncmVzc0dvYWxQbGFuXzIwMjAuanNvbic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy90b2RvIHRocm93IGVycm9yXG4gICAgICAgICAgY29uc29sZS53YXJuKFwiZGF0WWVhciBub3QgbWF0Y2ggbW9jayBwYXRoXCIpO1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICAvKlxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgIGxldCBjYWxlbmRhck9iaiA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ2FsZW5kYXJcIik7XG4gICAgICAgICAgbGV0IGRhbyA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgIGlmIChjYWxlbmRhck9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG4gICAgICAgICAgICBjYWxlbmRhck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLFt0aGlzLl9jbGllbnRJRF0pKTtcbiAgICAgICAgICAgIGRhby5xdWVyeUJ5VGFibGUoY2FsZW5kYXJPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgKi9cblxufSJdfQ==