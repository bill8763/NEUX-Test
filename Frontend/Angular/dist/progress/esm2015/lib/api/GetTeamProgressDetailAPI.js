/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { from, of } from 'rxjs';
export class GetTeamProgressDetailAPI {
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
        return 'getTeamProgressDetail';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getTeamProgressDetailMock.json';
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
        let tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Team_Progress_Detail");
        console.debug("SQLite tableObj: ", tableObj);
        if (defaultDao != undefined && tableObj != undefined) {
            return from(defaultDao.queryByTable(tableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.debug("SQLite getTeamProgressDetail resp: ", resp);
                console.debug("SQLite getTeamProgressDetail json resp: ", JSON.stringify(resp));
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
    GetTeamProgressDetailAPI.prototype._year;
    /**
     * @type {?}
     * @private
     */
    GetTeamProgressDetailAPI.prototype._daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0VGVhbVByb2dyZXNzRGV0YWlsQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvYXBpL0dldFRlYW1Qcm9ncmVzc0RldGFpbEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFhLElBQUksRUFBRSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFJMUMsTUFBTTs7OztJQUtGLFlBQVksVUFBc0I7UUFIMUIsVUFBSyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBSXZCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWE7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixPQUFPLHVCQUF1QixDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsT0FBTyw4Q0FBOEMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7O1lBRTNCLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtRQUNqRCxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxDQUFDOztZQUU3QyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsa0NBQWtDLENBQUM7UUFDbkYsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU3QyxJQUFHLFVBQVUsSUFBSSxTQUFTLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtZQUNqRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUk7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRTtnQkFDbEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0QsT0FBTyxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hGLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDUDthQUNJO1lBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7Q0FFSjs7Ozs7O0lBekNHLHlDQUEyQjs7Ozs7SUFFM0IsK0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQge0lTUUxpdGVBUEl9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBmcm9tLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Rhb0ZhY3Rvcnl9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgSVNlYXJjaFRhYmxlQnlGaWVsZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBHZXRUZWFtUHJvZ3Jlc3NEZXRhaWxBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSwgSVNlYXJjaFRhYmxlQnlGaWVsZCB7XG5cbiAgICBwcml2YXRlIF95ZWFyOiBudW1iZXIgPSAtMTtcblxuICAgIHByaXZhdGUgX2Rhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnk7XG4gICAgY29uc3RydWN0b3IoZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuICAgICAgICB0aGlzLl9kYW9GYWN0b3J5ID0gZGFvRmFjdG9yeTtcbiAgICB9XG5cbiAgICBTZXRZZWFyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5feWVhciA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdnZXRUZWFtUHJvZ3Jlc3NEZXRhaWwnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRUZWFtUHJvZ3Jlc3NEZXRhaWxNb2NrLmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBTdGFydCBcIik7XG5cbiAgICAgICAgbGV0IGRlZmF1bHREYW8gPSB0aGlzLl9kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBkZWZhdWx0RGFvOiBcIiwgZGVmYXVsdERhbyk7XG5cbiAgICAgICAgbGV0IHRhYmxlT2JqID0gdGhpcy5fZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9WV19UZWFtX1Byb2dyZXNzX0RldGFpbFwiKTsgXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgdGFibGVPYmo6IFwiLCB0YWJsZU9iaik7XG5cbiAgICAgICAgaWYoZGVmYXVsdERhbyAhPSB1bmRlZmluZWQgJiYgdGFibGVPYmogIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShkZWZhdWx0RGFvLnF1ZXJ5QnlUYWJsZSh0YWJsZU9iaikudG9Qcm9taXNlKCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGdldFRlYW1Qcm9ncmVzc0RldGFpbCByZXNwOiBcIiwgcmVzcCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBnZXRUZWFtUHJvZ3Jlc3NEZXRhaWwganNvbiByZXNwOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzcCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2YoZmFsc2UpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBmYWlsZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=