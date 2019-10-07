/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { from, of } from 'rxjs';
export class GetPersonalProgressAPI {
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
        return 'getPersonalProgress';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getPersonalProgressMock.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.debug("SQLite Start ");
        /** @type {?} */
        let defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite defaultDao: ", defaultDao);
        /** @type {?} */
        let tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Personal_Progress");
        console.debug("SQLite tableObj: ", tableObj);
        if (defaultDao != undefined && tableObj != undefined) {
            return from(defaultDao.queryByTable(tableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.debug("SQLite getPersonalProgress resp: ", resp);
                console.debug("SQLite getPersonalProgress json resp: ", JSON.stringify(resp));
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
    GetPersonalProgressAPI.prototype._year;
    /**
     * @type {?}
     * @private
     */
    GetPersonalProgressAPI.prototype._daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0UGVyc29uYWxQcm9ncmVzc0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL2FwaS9HZXRQZXJzb25hbFByb2dyZXNzQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQWEsSUFBSSxFQUFFLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQU0xQyxNQUFNOzs7O0lBS0YsWUFBWSxVQUFzQjtRQUgxQixVQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFJdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBYTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNOLE9BQU8scUJBQXFCLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLDRDQUE0QyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzs7WUFFM0IsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO1FBQ2pELE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7O1lBRTdDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQywrQkFBK0IsQ0FBQztRQUNoRixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTdDLElBQUcsVUFBVSxJQUFJLFNBQVMsSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFO1lBQ2pELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsRSxPQUFPLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6RCxPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFOUUsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUNQO2FBQ0k7WUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztDQUVKOzs7Ozs7SUExQ0csdUNBQTJCOzs7OztJQUUzQiw2Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7SVNRTGl0ZUFQSX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIGZyb20sIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7RGFvRmFjdG9yeX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0NsaWVudEN1c3RvbURhb30gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0VxdWFsUmVzdHJpY3Rpb259IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgSVNlYXJjaFRhYmxlQnlGaWVsZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBHZXRQZXJzb25hbFByb2dyZXNzQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEksIElTZWFyY2hUYWJsZUJ5RmllbGQge1xuXG4gICAgcHJpdmF0ZSBfeWVhcjogbnVtYmVyID0gLTE7XG5cbiAgICBwcml2YXRlIF9kYW9GYWN0b3J5OiBEYW9GYWN0b3J5O1xuICAgIGNvbnN0cnVjdG9yKGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5fZGFvRmFjdG9yeSA9IGRhb0ZhY3Rvcnk7XG4gICAgfVxuXG4gICAgU2V0WWVhcih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3llYXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnZ2V0UGVyc29uYWxQcm9ncmVzcyc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldFBlcnNvbmFsUHJvZ3Jlc3NNb2NrLmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBTdGFydCBcIik7XG5cbiAgICAgICAgbGV0IGRlZmF1bHREYW8gPSB0aGlzLl9kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBkZWZhdWx0RGFvOiBcIiwgZGVmYXVsdERhbyk7XG5cbiAgICAgICAgbGV0IHRhYmxlT2JqID0gdGhpcy5fZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9WV19QZXJzb25hbF9Qcm9ncmVzc1wiKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSB0YWJsZU9iajogXCIsIHRhYmxlT2JqKTtcblxuICAgICAgICBpZihkZWZhdWx0RGFvICE9IHVuZGVmaW5lZCAmJiB0YWJsZU9iaiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKGRlZmF1bHREYW8ucXVlcnlCeVRhYmxlKHRhYmxlT2JqKS50b1Byb21pc2UoKS50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgZ2V0UGVyc29uYWxQcm9ncmVzcyByZXNwOiBcIiwgcmVzcCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBnZXRQZXJzb25hbFByb2dyZXNzIGpzb24gcmVzcDogXCIsIEpTT04uc3RyaW5naWZ5KHJlc3ApKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcDtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9mKGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgZmFpbGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19