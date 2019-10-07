/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StringUtils, EqualRestriction } from "@allianzSND/core";
import { from, of } from "rxjs";
export class AddPointAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this._addType = "";
        this._year = -1;
        this._addPointNum = 1;
        this._daoFactory = daoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SetAddType(value) {
        this._addType = value;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    SetYear(val) {
        this._year = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    SetPointNum(val) {
        this._addPointNum = val;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return "addPoint";
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return "./assets/mock/saveSuccess.json";
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.log("AddPointAPI add " + this._addType + " point");
        console.log("this._addType", this._addType, "this._year", this._year);
        if (StringUtils.isNotEmpty(this._addType) && this._year != -1) {
            this.dao = this._daoFactory.getDefaultDao();
            /** @type {?} */
            let TimeBaselist = ["Day", "Week", "Month", "Quarter", "Year"];
            return from(Promise.all(TimeBaselist.map((/**
             * @param {?} timeBase
             * @return {?}
             */
            timeBase => this._addPoint(timeBase)))).then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let addResp = this.dao.runTransaction().toPromise();
                console.log("addResp", addResp);
                return addResp;
            })));
        }
        else {
            return of(false);
        }
    }
    /**
     * @private
     * @param {?} timeBase
     * @return {?}
     */
    _addPoint(timeBase) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("into _addPoint()");
            console.log("timeBase", timeBase);
            /** @type {?} */
            let currentNum = 0;
            /** @type {?} */
            let PersonalPorgress = this._daoFactory.getDefaultTable("TW_LH_SD_Personal_Progress");
            console.log("SQLite tableObj: ", PersonalPorgress);
            PersonalPorgress.addRestriction(new EqualRestriction("DataYear", [this._year]));
            PersonalPorgress.addRestriction(new EqualRestriction("TimeBase", [timeBase]));
            PersonalPorgress.addRestriction(new EqualRestriction("DataType", ["Actual"]));
            /** @type {?} */
            let progressObj = null;
            /** @type {?} */
            let getResp = yield this.dao.queryByTable(PersonalPorgress).toPromise();
            console.log("AddPointAPI getResp", getResp);
            if (getResp.Header["status"] && getResp.Body.length > 0) {
                progressObj = getResp.Body[0];
                if (this._addType == "customer") {
                    currentNum = progressObj.Find;
                    PersonalPorgress.setValue("Find", currentNum + this._addPointNum);
                }
                else if (this._addType == "calendar") {
                    currentNum = progressObj.Schedule;
                    PersonalPorgress.setValue("Schedule", currentNum + this._addPointNum);
                }
                console.log("AddPointAPI PersonalPorgress", PersonalPorgress);
                this.dao.transactionUpdate(PersonalPorgress);
            }
        });
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddPointAPI.prototype._addType;
    /**
     * @type {?}
     * @private
     */
    AddPointAPI.prototype._year;
    /**
     * @type {?}
     * @private
     */
    AddPointAPI.prototype._addPointNum;
    /**
     * @type {?}
     * @private
     */
    AddPointAPI.prototype.dao;
    /**
     * @type {?}
     * @private
     */
    AddPointAPI.prototype._daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkUG9pbnRBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvQWRkUG9pbnRBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVEsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHdkUsT0FBTyxFQUFjLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHNUMsTUFBTTs7OztJQU9KLFlBQVksVUFBc0I7UUFOMUIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixVQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFLdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELE9BQU8sQ0FBQyxHQUFXO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBQ0QsV0FBVyxDQUFDLEdBQVU7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNELFVBQVU7UUFDUixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sZ0NBQWdDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFVBQVU7UUFFUixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRFLElBQUks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QUcsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQzVDO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7Ozs7OztJQXRFQywrQkFBOEI7Ozs7O0lBQzlCLDRCQUEyQjs7Ozs7SUFDM0IsbUNBQXlCOzs7OztJQUN6QiwwQkFBWTs7Ozs7SUFFWixrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJLCBTdHJpbmdVdGlscywgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb20sIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQWRkUG9pbnRBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG4gIHByaXZhdGUgX2FkZFR5cGU6IHN0cmluZyA9IFwiXCI7XG4gIHByaXZhdGUgX3llYXI6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIF9hZGRQb2ludE51bSA9IDE7XG4gIHByaXZhdGUgZGFvO1xuXG4gIHByaXZhdGUgX2Rhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnk7XG4gIGNvbnN0cnVjdG9yKGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcbiAgICB0aGlzLl9kYW9GYWN0b3J5ID0gZGFvRmFjdG9yeTtcbiAgfVxuXG4gIFNldEFkZFR5cGUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2FkZFR5cGUgPSB2YWx1ZTtcbiAgfVxuICBTZXRZZWFyKHZhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5feWVhciA9IHZhbDtcbiAgfVxuICBTZXRQb2ludE51bSh2YWw6bnVtYmVyKTogdm9pZHtcbiAgICB0aGlzLl9hZGRQb2ludE51bSA9IHZhbDtcbiAgfVxuICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiYWRkUG9pbnRcIjtcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiLi9hc3NldHMvbW9jay9zYXZlU3VjY2Vzcy5qc29uXCI7XG4gIH1cblxuICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICBjb25zb2xlLmxvZyhcIkFkZFBvaW50QVBJIGFkZCBcIiArIHRoaXMuX2FkZFR5cGUgKyBcIiBwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMuX2FkZFR5cGVcIiwgdGhpcy5fYWRkVHlwZSwgXCJ0aGlzLl95ZWFyXCIsIHRoaXMuX3llYXIpO1xuICAgIFxuICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuX2FkZFR5cGUpICYmIHRoaXMuX3llYXIgIT0gLTEpIHtcbiAgICAgICAgdGhpcy5kYW8gPSB0aGlzLl9kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgbGV0IFRpbWVCYXNlbGlzdCA9IFtcIkRheVwiLFwiV2Vla1wiLFwiTW9udGhcIixcIlF1YXJ0ZXJcIixcIlllYXJcIl07XG4gICAgICAgIHJldHVybiBmcm9tKFByb21pc2UuYWxsKFRpbWVCYXNlbGlzdC5tYXAodGltZUJhc2UgPT4gdGhpcy5fYWRkUG9pbnQodGltZUJhc2UpKSkudGhlbigoKT0+e1xuICAgICAgICAgIGxldCBhZGRSZXNwID0gdGhpcy5kYW8ucnVuVHJhbnNhY3Rpb24oKS50b1Byb21pc2UoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZFJlc3BcIixhZGRSZXNwKTtcbiAgICAgICAgICByZXR1cm4gYWRkUmVzcDtcbiAgICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYWRkUG9pbnQodGltZUJhc2Upe1xuICAgIGNvbnNvbGUubG9nKFwiaW50byBfYWRkUG9pbnQoKVwiKTtcbiAgICBjb25zb2xlLmxvZyhcInRpbWVCYXNlXCIsdGltZUJhc2UpO1xuICAgIGxldCBjdXJyZW50TnVtID0gMDtcbiAgICBsZXQgUGVyc29uYWxQb3JncmVzcyA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfUGVyc29uYWxfUHJvZ3Jlc3NcIik7XG4gICAgY29uc29sZS5sb2coXCJTUUxpdGUgdGFibGVPYmo6IFwiLCBQZXJzb25hbFBvcmdyZXNzKTtcbiAgICBQZXJzb25hbFBvcmdyZXNzLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiRGF0YVllYXJcIiwgW3RoaXMuX3llYXJdKSk7XG4gICAgUGVyc29uYWxQb3JncmVzcy5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIlRpbWVCYXNlXCIsIFt0aW1lQmFzZV0pKTtcbiAgICBQZXJzb25hbFBvcmdyZXNzLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiRGF0YVR5cGVcIiwgW1wiQWN0dWFsXCJdKSk7XG4gICAgbGV0IHByb2dyZXNzT2JqID0gbnVsbDtcbiAgICBsZXQgZ2V0UmVzcCA9IGF3YWl0IHRoaXMuZGFvLnF1ZXJ5QnlUYWJsZShQZXJzb25hbFBvcmdyZXNzKS50b1Byb21pc2UoKTtcbiAgICBjb25zb2xlLmxvZyhcIkFkZFBvaW50QVBJIGdldFJlc3BcIiwgZ2V0UmVzcCk7XG4gICAgaWYgKGdldFJlc3AuSGVhZGVyW1wic3RhdHVzXCJdICYmIGdldFJlc3AuQm9keS5sZW5ndGggPiAwKSB7XG4gICAgICBwcm9ncmVzc09iaiA9IGdldFJlc3AuQm9keVswXTtcbiAgICBpZiAodGhpcy5fYWRkVHlwZSA9PSBcImN1c3RvbWVyXCIpIHtcbiAgICAgICAgY3VycmVudE51bSA9IHByb2dyZXNzT2JqLkZpbmQ7XG4gICAgICAgIFBlcnNvbmFsUG9yZ3Jlc3Muc2V0VmFsdWUoXCJGaW5kXCIsIGN1cnJlbnROdW0gKyB0aGlzLl9hZGRQb2ludE51bSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hZGRUeXBlID09IFwiY2FsZW5kYXJcIikge1xuICAgICAgICBjdXJyZW50TnVtID0gcHJvZ3Jlc3NPYmouU2NoZWR1bGU7XG4gICAgICAgIFBlcnNvbmFsUG9yZ3Jlc3Muc2V0VmFsdWUoXCJTY2hlZHVsZVwiLCBjdXJyZW50TnVtICsgdGhpcy5fYWRkUG9pbnROdW0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkFkZFBvaW50QVBJIFBlcnNvbmFsUG9yZ3Jlc3NcIiwgUGVyc29uYWxQb3JncmVzcyk7XG4gICAgdGhpcy5kYW8udHJhbnNhY3Rpb25VcGRhdGUoUGVyc29uYWxQb3JncmVzcyk7XG4gICAgfVxuICB9XG59XG4iXX0=