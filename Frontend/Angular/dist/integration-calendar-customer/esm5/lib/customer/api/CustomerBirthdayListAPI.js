/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '@allianzSND/core';
import { OrderByRestriction } from '@allianzSND/core';
import { getYear, subDays, addDays, setYear } from 'date-fns';
var CustomerBirthdayListAPI = /** @class */ (function () {
    function CustomerBirthdayListAPI(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    Object.defineProperty(CustomerBirthdayListAPI.prototype, "targetDate", {
        set: /**
         * @param {?} targetDate
         * @return {?}
         */
        function (targetDate) {
            this._targetDate = setYear(targetDate, 2000);
            this._subNDayTimeStamp = subDays(this._targetDate, this._subN).getTime();
            this._addNDayTimeStamp = addDays(this._targetDate, this._addN).getTime();
            if ((getYear(this._targetDate) == getYear(this._subNDayTimeStamp)) && (getYear(this._targetDate) == getYear(this._addNDayTimeStamp))) {
                this.isRangeCrossYear = false;
            }
            else {
                this._subNDayTimeStamp = (setYear(this._subNDayTimeStamp, 2000)).getTime();
                this._addNDayTimeStamp = (setYear(this._addNDayTimeStamp, 2000)).getTime();
                this.isRangeCrossYear = true;
            }
            console.warn(this._subN, "  subDate:  ", this._subNDayTimeStamp);
            console.warn(this._addN, "  addDate:  ", this._addNDayTimeStamp);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBirthdayListAPI.prototype, "subN", {
        set: /**
         * @param {?} subN
         * @return {?}
         */
        function (subN) {
            this._subN = subN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBirthdayListAPI.prototype, "addN", {
        set: /**
         * @param {?} addN
         * @return {?}
         */
        function (addN) {
            this._addN = addN;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerBirthdayListAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getCustomerBirthdayList';
    };
    /**
     * @return {?}
     */
    CustomerBirthdayListAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getCustomerBirthday.json';
    };
    /**
     * @return {?}
     */
    CustomerBirthdayListAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var customerObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_VW_Customer");
            /** @type {?} */
            var dao = _this._DaoFactory.getDefaultDao();
            if (customerObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                // if(this.isRangeCrossYear) {
                //   customerObj.addRestriction(new ORCompoundRestriction([new GreaterOrEqualRestriction('BirthDayTimeStamp', [this._subNDayTimeStamp]), new LessOrEqualRestriction('BirthDayTimeStamp', [this._addNDayTimeStamp])]));
                // }
                // else {
                //   customerObj.addRestriction(new GreaterOrEqualRestriction('BirthDayTimeStamp', [this._subNDayTimeStamp]));
                //   customerObj.addRestriction(new LessOrEqualRestriction('BirthDayTimeStamp', [this._addNDayTimeStamp]));
                // }
                customerObj.addRestriction(new OrderByRestriction([{ column: 'LastName', order: 'ASC' }]));
                //customerObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' }]));
                // calendarObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' },{ column: 'EndTime', order: 'DESC' }]));
                dao.queryByTable(customerObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    console.warn("resp.Body in CustomerBirthdayListAPI: ", resp);
                    resp.Body = resp.Body.filter((/**
                     * @param {?} birthday
                     * @return {?}
                     */
                    function (birthday) { return _this._judgeCustomrtIsInRange(birthday); }));
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    CustomerBirthdayListAPI.prototype._judgeCustomrtIsInRange = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var birthDayTimeStamp = new Date('2000/' + item.BirthdayMonth + '/' + item.BirthdayDate).getTime();
        if (this.isRangeCrossYear) {
            return birthDayTimeStamp >= this._subNDayTimeStamp || birthDayTimeStamp <= this._addNDayTimeStamp;
        }
        else {
            return birthDayTimeStamp >= this._subNDayTimeStamp && birthDayTimeStamp <= this._addNDayTimeStamp;
        }
    };
    return CustomerBirthdayListAPI;
}());
export { CustomerBirthdayListAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerBirthdayListAPI.prototype._targetDate;
    /** @type {?} */
    CustomerBirthdayListAPI.prototype.isRangeCrossYear;
    /**
     * @type {?}
     * @private
     */
    CustomerBirthdayListAPI.prototype._subN;
    /**
     * @type {?}
     * @private
     */
    CustomerBirthdayListAPI.prototype._subNDayTimeStamp;
    /**
     * @type {?}
     * @private
     */
    CustomerBirthdayListAPI.prototype._addN;
    /**
     * @type {?}
     * @private
     */
    CustomerBirthdayListAPI.prototype._addNDayTimeStamp;
    /**
     * @type {?}
     * @private
     */
    CustomerBirthdayListAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21lci9hcGkvQ3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBc0Qsa0JBQWtCLEVBQTJDLE1BQU0sa0JBQWtCLENBQUM7QUFDbkosT0FBTyxFQUFFLE9BQU8sRUFBcUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFakY7SUFZRSxpQ0FBWSxVQUFVO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQkFBSSwrQ0FBVTs7Ozs7UUFBZCxVQUFlLFVBQWdCO1lBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFHekUsSUFBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLE9BQU8s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eURBQXVCOzs7OztJQUEvQixVQUFnQyxJQUFJOztZQUM5QixpQkFBaUIsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRTtRQUNsRyxJQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN4QixPQUFPLGlCQUFpQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxpQkFBaUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUU7U0FDcEc7YUFFSTtZQUNILE9BQU8saUJBQWlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLGlCQUFpQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBRTtTQUNwRztJQUNILENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFsR0QsSUFrR0M7Ozs7Ozs7SUFoR0MsOENBQTBCOztJQUUxQixtREFBaUM7Ozs7O0lBQ2pDLHdDQUF1Qjs7Ozs7SUFDdkIsb0RBQWtDOzs7OztJQUVsQyx3Q0FBdUI7Ozs7O0lBQ3ZCLG9EQUFrQzs7Ozs7SUFFbEMsOENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBDbGllbnRDdXN0b21EYW8gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEdyZWF0ZXJPckVxdWFsUmVzdHJpY3Rpb24sIExlc3NPckVxdWFsUmVzdHJpY3Rpb24sICBPcmRlckJ5UmVzdHJpY3Rpb24sIEVxdWFsUmVzdHJpY3Rpb24sIE9SQ29tcG91bmRSZXN0cmljdGlvbiB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgZ2V0WWVhciwgZ2V0TW9udGgsIGdldERhdGUsIHN1YkRheXMsIGFkZERheXMsIHNldFllYXIgfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lckJpcnRoZGF5TGlzdEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICBwcml2YXRlIF90YXJnZXREYXRlOiBEYXRlO1xuXG4gIHB1YmxpYyBpc1JhbmdlQ3Jvc3NZZWFyOiBib29sZWFuO1xuICBwcml2YXRlIF9zdWJOIDogbnVtYmVyO1xuICBwcml2YXRlIF9zdWJORGF5VGltZVN0YW1wOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfYWRkTiA6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYWRkTkRheVRpbWVTdGFtcDogbnVtYmVyO1xuXG4gIHByaXZhdGUgX0Rhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnk7XG4gIGNvbnN0cnVjdG9yKERhb0ZhY3RvcnkpIHtcbiAgICB0aGlzLl9EYW9GYWN0b3J5ID0gRGFvRmFjdG9yeTtcbiAgfVxuXG4gIHNldCB0YXJnZXREYXRlKHRhcmdldERhdGU6IERhdGUpIHtcbiAgICB0aGlzLl90YXJnZXREYXRlID0gc2V0WWVhcih0YXJnZXREYXRlLCAyMDAwKTtcbiAgICB0aGlzLl9zdWJORGF5VGltZVN0YW1wID0gc3ViRGF5cyh0aGlzLl90YXJnZXREYXRlLCB0aGlzLl9zdWJOKS5nZXRUaW1lKCk7XG4gICAgdGhpcy5fYWRkTkRheVRpbWVTdGFtcCA9IGFkZERheXModGhpcy5fdGFyZ2V0RGF0ZSwgdGhpcy5fYWRkTikuZ2V0VGltZSgpO1xuXG5cbiAgICBpZigoZ2V0WWVhcih0aGlzLl90YXJnZXREYXRlKSA9PSBnZXRZZWFyKHRoaXMuX3N1Yk5EYXlUaW1lU3RhbXApKSAmJiAoZ2V0WWVhcih0aGlzLl90YXJnZXREYXRlKSA9PSBnZXRZZWFyKHRoaXMuX2FkZE5EYXlUaW1lU3RhbXApKSkge1xuICAgICAgdGhpcy5pc1JhbmdlQ3Jvc3NZZWFyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9zdWJORGF5VGltZVN0YW1wID0gKHNldFllYXIodGhpcy5fc3ViTkRheVRpbWVTdGFtcCwgMjAwMCkpLmdldFRpbWUoKTtcbiAgICAgIHRoaXMuX2FkZE5EYXlUaW1lU3RhbXAgPSAoc2V0WWVhcih0aGlzLl9hZGRORGF5VGltZVN0YW1wLCAyMDAwKSkuZ2V0VGltZSgpO1xuICAgICAgdGhpcy5pc1JhbmdlQ3Jvc3NZZWFyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zb2xlLndhcm4odGhpcy5fc3ViTiwgXCIgIHN1YkRhdGU6ICBcIiwgdGhpcy5fc3ViTkRheVRpbWVTdGFtcCk7XG4gICAgY29uc29sZS53YXJuKHRoaXMuX2FkZE4sIFwiICBhZGREYXRlOiAgXCIsIHRoaXMuX2FkZE5EYXlUaW1lU3RhbXApO1xuICB9XG5cbiAgc2V0IHN1Yk4oc3ViTjogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3ViTiA9IHN1Yk47XG4gIH1cblxuICBzZXQgYWRkTihhZGROOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hZGROID0gYWRkTjtcbiAgfVxuXG5cblxuICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdnZXRDdXN0b21lckJpcnRoZGF5TGlzdCc7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRDdXN0b21lckJpcnRoZGF5Lmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBjdXN0b21lck9iaiA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfVldfQ3VzdG9tZXJcIik7XG4gICAgICBsZXQgZGFvID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAoY3VzdG9tZXJPYmogIT0gdW5kZWZpbmVkICYmIGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cbiAgICAgICAgLy8gaWYodGhpcy5pc1JhbmdlQ3Jvc3NZZWFyKSB7XG4gICAgICAgIC8vICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IE9SQ29tcG91bmRSZXN0cmljdGlvbihbbmV3IEdyZWF0ZXJPckVxdWFsUmVzdHJpY3Rpb24oJ0JpcnRoRGF5VGltZVN0YW1wJywgW3RoaXMuX3N1Yk5EYXlUaW1lU3RhbXBdKSwgbmV3IExlc3NPckVxdWFsUmVzdHJpY3Rpb24oJ0JpcnRoRGF5VGltZVN0YW1wJywgW3RoaXMuX2FkZE5EYXlUaW1lU3RhbXBdKV0pKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBHcmVhdGVyT3JFcXVhbFJlc3RyaWN0aW9uKCdCaXJ0aERheVRpbWVTdGFtcCcsIFt0aGlzLl9zdWJORGF5VGltZVN0YW1wXSkpO1xuICAgICAgICAvLyAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBMZXNzT3JFcXVhbFJlc3RyaWN0aW9uKCdCaXJ0aERheVRpbWVTdGFtcCcsIFt0aGlzLl9hZGRORGF5VGltZVN0YW1wXSkpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IE9yZGVyQnlSZXN0cmljdGlvbihbeyBjb2x1bW46ICdMYXN0TmFtZScsIG9yZGVyOiAnQVNDJyB9XSkpXG5cbiAgICAgICAgLy9jdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgT3JkZXJCeVJlc3RyaWN0aW9uKFt7IGNvbHVtbjogJ1N0YXJ0VGltZScsIG9yZGVyOiAnQVNDJyB9XSkpO1xuICAgICAgICAvLyBjYWxlbmRhck9iai5hZGRSZXN0cmljdGlvbihuZXcgT3JkZXJCeVJlc3RyaWN0aW9uKFt7IGNvbHVtbjogJ1N0YXJ0VGltZScsIG9yZGVyOiAnQVNDJyB9LHsgY29sdW1uOiAnRW5kVGltZScsIG9yZGVyOiAnREVTQycgfV0pKTtcbiAgICAgICAgZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lck9iaikuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwicmVzcC5Cb2R5IGluIEN1c3RvbWVyQmlydGhkYXlMaXN0QVBJOiBcIixyZXNwKTtcbiAgICAgICAgICByZXNwLkJvZHkgPSByZXNwLkJvZHkuZmlsdGVyKGJpcnRoZGF5ID0+IHRoaXMuX2p1ZGdlQ3VzdG9tcnRJc0luUmFuZ2UoYmlydGhkYXkpKTtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9qdWRnZUN1c3RvbXJ0SXNJblJhbmdlKGl0ZW0pOiBib29sZWFuIHtcbiAgICBsZXQgYmlydGhEYXlUaW1lU3RhbXAgPSBuZXcgRGF0ZSgnMjAwMC8nICsgaXRlbS5CaXJ0aGRheU1vbnRoICsgJy8nICsgaXRlbS5CaXJ0aGRheURhdGUpLmdldFRpbWUoKTtcbiAgICBpZih0aGlzLmlzUmFuZ2VDcm9zc1llYXIpIHtcbiAgICAgIHJldHVybiBiaXJ0aERheVRpbWVTdGFtcCA+PSB0aGlzLl9zdWJORGF5VGltZVN0YW1wIHx8IGJpcnRoRGF5VGltZVN0YW1wIDw9IHRoaXMuX2FkZE5EYXlUaW1lU3RhbXAgO1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGJpcnRoRGF5VGltZVN0YW1wID49IHRoaXMuX3N1Yk5EYXlUaW1lU3RhbXAgJiYgYmlydGhEYXlUaW1lU3RhbXAgPD0gdGhpcy5fYWRkTkRheVRpbWVTdGFtcCA7XG4gICAgfVxuICB9XG59XG4iXX0=