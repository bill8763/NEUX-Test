/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class PersonalProgressOldAPI {
    /**
     * @param {?} id
     * @return {?}
     */
    set ClientId(id) {
        this._clientID = id;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set DataType(type) {
        this._personalDataType = type;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set TimeBase(time) {
        this._personalDataTimeBase = time;
    }
    /*
        constructor(DaoFactory) {
            this._daoFactory = DaoFactory;
        }
        */
    constructor() { }
    ;
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getPersonalProgressOld';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        //alert("personal progress mock data");
        return './assets/mock/getPersonalProgress.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        throw new Error("Method not implemented.");
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uYWxQcm9ncmVzc0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL2FwaS9QZXJzb25hbFByb2dyZXNzQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFXQSxNQUFNOzs7OztJQU9GLElBQUksUUFBUSxDQUFDLEVBQVM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxJQUFxQjtRQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsSUFBeUI7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFRRCxnQkFBYyxDQUFDO0lBQUEsQ0FBQzs7OztJQUVoQixVQUFVO1FBQ04sT0FBTyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNQLHVDQUF1QztRQUN2QyxPQUFPLHdDQUF3QyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFHRCxVQUFVO1FBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0F1Qko7Ozs7OztJQTVERywyQ0FBMEI7Ozs7O0lBQzFCLDZDQUFnQzs7Ozs7SUFDaEMsbURBQTRDOzs7OztJQUM1Qyx1REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7SVNRTGl0ZUFQSX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIGZyb219IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtEYW9GYWN0b3J5fSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7Q2xpZW50Q3VzdG9tRGFvfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7RXF1YWxSZXN0cmljdGlvbn0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbmltcG9ydCB7IFBlcnNvbmFsRGF0YVR5cGUgfSBmcm9tICAnLi4vc2VydmljZS9tb2RlbC9FbnVtL1BlcnNvbmFsRGF0YVR5cGUnO1xuaW1wb3J0IHsgUGVyc29uYWxEYXRhVGltZUJhc2UgfSBmcm9tICAnLi4vc2VydmljZS9tb2RlbC9FbnVtL1BlcnNvbmFsRGF0YVRpbWVCYXNlJztcblxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsUHJvZ3Jlc3NPbGRBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG5cbiAgICBwcml2YXRlIF9jbGllbnRJRDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2Rhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnk7XG4gICAgcHJpdmF0ZSBfcGVyc29uYWxEYXRhVHlwZTogUGVyc29uYWxEYXRhVHlwZTtcbiAgICBwcml2YXRlIF9wZXJzb25hbERhdGFUaW1lQmFzZTogUGVyc29uYWxEYXRhVGltZUJhc2U7XG5cbiAgICBzZXQgQ2xpZW50SWQoaWQ6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NsaWVudElEID0gaWQ7XG4gICAgfVxuXG4gICAgc2V0IERhdGFUeXBlKHR5cGU6UGVyc29uYWxEYXRhVHlwZSkge1xuICAgICAgICB0aGlzLl9wZXJzb25hbERhdGFUeXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBzZXQgVGltZUJhc2UodGltZTpQZXJzb25hbERhdGFUaW1lQmFzZSkge1xuICAgICAgICB0aGlzLl9wZXJzb25hbERhdGFUaW1lQmFzZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgLypcbiAgICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX2Rhb0ZhY3RvcnkgPSBEYW9GYWN0b3J5O1xuICAgIH1cbiAgICAqL1xuXG4gICAgY29uc3RydWN0b3IoKXt9O1xuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2dldFBlcnNvbmFsUHJvZ3Jlc3NPbGQnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIC8vYWxlcnQoXCJwZXJzb25hbCBwcm9ncmVzcyBtb2NrIGRhdGFcIik7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRQZXJzb25hbFByb2dyZXNzLmpzb24nO1xuICAgIH1cblxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICAvKlxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgIGxldCBjYWxlbmRhck9iaiA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ2FsZW5kYXJcIik7XG4gICAgICAgICAgbGV0IGRhbyA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgIGlmIChjYWxlbmRhck9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG4gICAgICAgICAgICBjYWxlbmRhck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLFt0aGlzLl9jbGllbnRJRF0pKTtcbiAgICAgICAgICAgIGRhby5xdWVyeUJ5VGFibGUoY2FsZW5kYXJPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgKi9cblxufSJdfQ==