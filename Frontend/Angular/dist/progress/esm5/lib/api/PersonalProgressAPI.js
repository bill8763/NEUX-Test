/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PersonalProgressOldAPI = /** @class */ (function () {
    /*
    constructor(DaoFactory) {
        this._daoFactory = DaoFactory;
    }
    */
    function PersonalProgressOldAPI() {
    }
    Object.defineProperty(PersonalProgressOldAPI.prototype, "ClientId", {
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
    Object.defineProperty(PersonalProgressOldAPI.prototype, "DataType", {
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
    Object.defineProperty(PersonalProgressOldAPI.prototype, "TimeBase", {
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
    ;
    /**
     * @return {?}
     */
    PersonalProgressOldAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getPersonalProgressOld';
    };
    /**
     * @return {?}
     */
    PersonalProgressOldAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        //alert("personal progress mock data");
        return './assets/mock/getPersonalProgress.json';
    };
    /**
     * @return {?}
     */
    PersonalProgressOldAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        throw new Error("Method not implemented.");
    };
    return PersonalProgressOldAPI;
}());
export { PersonalProgressOldAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersonalProgressOldAPI.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    PersonalProgressOldAPI.prototype._daoFactory;
    /**
     * @type {?}
     * @private
     */
    PersonalProgressOldAPI.prototype._personalDataType;
    /**
     * @type {?}
     * @private
     */
    PersonalProgressOldAPI.prototype._personalDataTimeBase;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uYWxQcm9ncmVzc0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL2FwaS9QZXJzb25hbFByb2dyZXNzQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFXQTtJQW1CSTs7OztNQUlFO0lBRUY7SUFBYyxDQUFDO0lBbEJmLHNCQUFJLDRDQUFROzs7OztRQUFaLFVBQWEsRUFBUztZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFROzs7OztRQUFaLFVBQWEsSUFBcUI7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFROzs7OztRQUFaLFVBQWEsSUFBeUI7WUFDbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQVFjLENBQUM7Ozs7SUFFaEIsMkNBQVU7OztJQUFWO1FBQ0ksT0FBTyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0ksdUNBQXVDO1FBQ3ZDLE9BQU8sd0NBQXdDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUdELDJDQUFVOzs7SUFBVjtRQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBdUJMLDZCQUFDO0FBQUQsQ0FBQyxBQTlERCxJQThEQzs7Ozs7OztJQTVERywyQ0FBMEI7Ozs7O0lBQzFCLDZDQUFnQzs7Ozs7SUFDaEMsbURBQTRDOzs7OztJQUM1Qyx1REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7SVNRTGl0ZUFQSX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIGZyb219IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtEYW9GYWN0b3J5fSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7Q2xpZW50Q3VzdG9tRGFvfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7RXF1YWxSZXN0cmljdGlvbn0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbmltcG9ydCB7IFBlcnNvbmFsRGF0YVR5cGUgfSBmcm9tICAnLi4vc2VydmljZS9tb2RlbC9FbnVtL1BlcnNvbmFsRGF0YVR5cGUnO1xuaW1wb3J0IHsgUGVyc29uYWxEYXRhVGltZUJhc2UgfSBmcm9tICAnLi4vc2VydmljZS9tb2RlbC9FbnVtL1BlcnNvbmFsRGF0YVRpbWVCYXNlJztcblxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsUHJvZ3Jlc3NPbGRBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG5cbiAgICBwcml2YXRlIF9jbGllbnRJRDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2Rhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnk7XG4gICAgcHJpdmF0ZSBfcGVyc29uYWxEYXRhVHlwZTogUGVyc29uYWxEYXRhVHlwZTtcbiAgICBwcml2YXRlIF9wZXJzb25hbERhdGFUaW1lQmFzZTogUGVyc29uYWxEYXRhVGltZUJhc2U7XG5cbiAgICBzZXQgQ2xpZW50SWQoaWQ6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NsaWVudElEID0gaWQ7XG4gICAgfVxuXG4gICAgc2V0IERhdGFUeXBlKHR5cGU6UGVyc29uYWxEYXRhVHlwZSkge1xuICAgICAgICB0aGlzLl9wZXJzb25hbERhdGFUeXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBzZXQgVGltZUJhc2UodGltZTpQZXJzb25hbERhdGFUaW1lQmFzZSkge1xuICAgICAgICB0aGlzLl9wZXJzb25hbERhdGFUaW1lQmFzZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgLypcbiAgICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX2Rhb0ZhY3RvcnkgPSBEYW9GYWN0b3J5O1xuICAgIH1cbiAgICAqL1xuXG4gICAgY29uc3RydWN0b3IoKXt9O1xuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2dldFBlcnNvbmFsUHJvZ3Jlc3NPbGQnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIC8vYWxlcnQoXCJwZXJzb25hbCBwcm9ncmVzcyBtb2NrIGRhdGFcIik7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRQZXJzb25hbFByb2dyZXNzLmpzb24nO1xuICAgIH1cblxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICAvKlxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgIGxldCBjYWxlbmRhck9iaiA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ2FsZW5kYXJcIik7XG4gICAgICAgICAgbGV0IGRhbyA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgIGlmIChjYWxlbmRhck9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG4gICAgICAgICAgICBjYWxlbmRhck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLFt0aGlzLl9jbGllbnRJRF0pKTtcbiAgICAgICAgICAgIGRhby5xdWVyeUJ5VGFibGUoY2FsZW5kYXJPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgKi9cblxufSJdfQ==