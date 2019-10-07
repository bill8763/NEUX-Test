/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { from, of } from 'rxjs';
import { EqualRestriction } from '../../device/sqlite';
export class GetOtherParameterAPI {
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
        return 'getOtherParameter';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getOtherParameterMock.json';
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
        let tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_Other_Parameter");
        if (this._year !== -1) {
            tableObj.addRestriction(new EqualRestriction('DataYear', [this._year]));
        }
        console.debug("SQLite tableObj: ", tableObj);
        if (defaultDao != undefined && tableObj != undefined) {
            return from(defaultDao.queryByTable(tableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.debug("SQLite getOtherParameter resp: ", resp);
                console.debug("SQLite getOtherParameter json resp: ", JSON.stringify(resp));
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
    GetOtherParameterAPI.prototype._year;
    /**
     * @type {?}
     * @private
     */
    GetOtherParameterAPI.prototype._daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0T3RoZXJQYXJhbWV0ZXJBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9HZXRPdGhlclBhcmFtZXRlckFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLElBQUksRUFBRSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFLMUMsT0FBTyxFQUFjLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHbkUsTUFBTTs7OztJQUtGLFlBQVksVUFBc0I7UUFIMUIsVUFBSyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBSXZCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWE7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixPQUFPLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsT0FBTywwQ0FBMEMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7O1lBRTNCLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtRQUNqRCxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxDQUFDOztZQUU3QyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsMEJBQTBCLENBQUM7UUFDM0UsSUFBRyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU3QyxJQUFHLFVBQVUsSUFBSSxTQUFTLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtZQUNqRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUk7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRTtnQkFDbEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzVFLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDUDthQUNJO1lBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7Q0FFSjs7Ozs7O0lBNUNHLHFDQUEyQjs7Ozs7SUFFM0IsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBmcm9tLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi4vQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gJy4uL01vY2tBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICcuLi9TUUxpdGVBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElTZWFyY2hUYWJsZUJ5RmllbGQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvSVNlYXJjaFRhYmxlQnlGaWVsZCc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5LCBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZSc7XG5cblxuZXhwb3J0IGNsYXNzIEdldE90aGVyUGFyYW1ldGVyQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEksIElTZWFyY2hUYWJsZUJ5RmllbGQge1xuXG4gICAgcHJpdmF0ZSBfeWVhcjogbnVtYmVyID0gLTE7XG5cbiAgICBwcml2YXRlIF9kYW9GYWN0b3J5OiBEYW9GYWN0b3J5O1xuICAgIGNvbnN0cnVjdG9yKGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5fZGFvRmFjdG9yeSA9IGRhb0ZhY3Rvcnk7XG4gICAgfVxuXG4gICAgU2V0WWVhcih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3llYXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnZ2V0T3RoZXJQYXJhbWV0ZXInO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRPdGhlclBhcmFtZXRlck1vY2suanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIFN0YXJ0IFwiKTtcblxuICAgICAgICBsZXQgZGVmYXVsdERhbyA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGRlZmF1bHREYW86IFwiLCBkZWZhdWx0RGFvKTtcblxuICAgICAgICBsZXQgdGFibGVPYmogPSB0aGlzLl9kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX090aGVyX1BhcmFtZXRlclwiKTsgXG4gICAgICAgIGlmKHRoaXMuX3llYXIgIT09IC0xKSB7XG4gICAgICAgICAgICB0YWJsZU9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignRGF0YVllYXInLCBbdGhpcy5feWVhcl0pKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIHRhYmxlT2JqOiBcIiwgdGFibGVPYmopO1xuXG4gICAgICAgIGlmKGRlZmF1bHREYW8gIT0gdW5kZWZpbmVkICYmIHRhYmxlT2JqICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb20oZGVmYXVsdERhby5xdWVyeUJ5VGFibGUodGFibGVPYmopLnRvUHJvbWlzZSgpLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBnZXRPdGhlclBhcmFtZXRlciByZXNwOiBcIiwgcmVzcCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBnZXRPdGhlclBhcmFtZXRlciBqc29uIHJlc3A6IFwiLCBKU09OLnN0cmluZ2lmeShyZXNwKSk7IFxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2YoZmFsc2UpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBmYWlsZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=