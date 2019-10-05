/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { from, of } from 'rxjs';
export class GetYearConfigurationAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this._year = -1;
        this._daoFactory = daoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SetYear(value) {
        this._year = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getYearConfiguration';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getYearConfigurationMock.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.debug("SQLite Start year configuration ");
        /** @type {?} */
        let defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite defaultDao: ", defaultDao);
        /** @type {?} */
        let tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Year_Config");
        console.debug("SQLite tableObj: ", tableObj);
        if (defaultDao != undefined && tableObj != undefined) {
            return from(defaultDao.queryByTable(tableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.debug("SQLite getYearConfiguration resp: ", resp);
                console.debug("SQLite getYearConfiguration json resp: ", JSON.stringify(resp));
                return resp;
            })));
        }
        else {
            of(false);
            console.debug("SQLite failed");
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetYearConfigurationAPI.prototype._year;
    /**
     * @type {?}
     * @private
     */
    GetYearConfigurationAPI.prototype._daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0WWVhckNvbmZpZ3VyYXRpb25BUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvR2V0WWVhckNvbmZpZ3VyYXRpb25BUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBYSxJQUFJLEVBQUUsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBTTFDLE1BQU07Ozs7SUFLRixZQUFZLFVBQXNCO1FBSDFCLFVBQUssR0FBVyxDQUFDLENBQUMsQ0FBQztRQUl2QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFhO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxzQkFBc0IsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8sNkNBQTZDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7O1lBRTlDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtRQUNqRCxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxDQUFDOztZQUU3QyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUM7UUFDMUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU3QyxJQUFHLFVBQVUsSUFBSSxTQUFTLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtZQUNqRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUk7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRTtnQkFDbEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDMUQsT0FBTyxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQy9FLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDUDthQUNJO1lBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7Q0FFSjs7Ozs7O0lBekNHLHdDQUEyQjs7Ozs7SUFFM0IsOENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQge0lTUUxpdGVBUEl9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBmcm9tLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Rhb0ZhY3Rvcnl9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtDbGllbnRDdXN0b21EYW99IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtFcXVhbFJlc3RyaWN0aW9ufSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IElTZWFyY2hUYWJsZUJ5RmllbGQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgR2V0WWVhckNvbmZpZ3VyYXRpb25BUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSwgSVNlYXJjaFRhYmxlQnlGaWVsZCB7XG4gICAgICBcbiAgICBwcml2YXRlIF95ZWFyOiBudW1iZXIgPSAtMTtcblxuICAgIHByaXZhdGUgX2Rhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnk7XG4gICAgY29uc3RydWN0b3IoZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuICAgICAgICB0aGlzLl9kYW9GYWN0b3J5ID0gZGFvRmFjdG9yeTtcbiAgICB9XG5cbiAgICBTZXRZZWFyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5feWVhciA9IHZhbHVlO1xuICAgIH1cbiAgICAgICBcbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnZ2V0WWVhckNvbmZpZ3VyYXRpb24nO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRZZWFyQ29uZmlndXJhdGlvbk1vY2suanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIFN0YXJ0IHllYXIgY29uZmlndXJhdGlvbiBcIik7XG5cbiAgICAgICAgbGV0IGRlZmF1bHREYW8gPSB0aGlzLl9kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBkZWZhdWx0RGFvOiBcIiwgZGVmYXVsdERhbyk7XG5cbiAgICAgICAgbGV0IHRhYmxlT2JqID0gdGhpcy5fZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9WV19ZZWFyX0NvbmZpZ1wiKTsgXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgdGFibGVPYmo6IFwiLCB0YWJsZU9iaik7XG5cbiAgICAgICAgaWYoZGVmYXVsdERhbyAhPSB1bmRlZmluZWQgJiYgdGFibGVPYmogIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShkZWZhdWx0RGFvLnF1ZXJ5QnlUYWJsZSh0YWJsZU9iaikudG9Qcm9taXNlKCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGdldFllYXJDb25maWd1cmF0aW9uIHJlc3A6IFwiLCByZXNwKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGdldFllYXJDb25maWd1cmF0aW9uIGpzb24gcmVzcDogXCIsIEpTT04uc3RyaW5naWZ5KHJlc3ApKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcDtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9mKGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgZmFpbGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19