/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '@allianzSND/core';
import { GreaterOrEqualRestriction, LessOrEqualRestriction, OrderByRestriction, ORCompoundRestriction } from '@allianzSND/core';
import { getYear, subDays, addDays, setYear } from 'date-fns';
export class CustomerBirthdayListAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @param {?} targetDate
     * @return {?}
     */
    set targetDate(targetDate) {
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
    }
    /**
     * @param {?} subN
     * @return {?}
     */
    set subN(subN) {
        this._subN = subN;
    }
    /**
     * @param {?} addN
     * @return {?}
     */
    set addN(addN) {
        this._addN = addN;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCustomerBirthdayList';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCustomerBirthday.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let customerObj = this._DaoFactory.getDefaultTable("TW_LH_SD_Customer");
            /** @type {?} */
            let dao = this._DaoFactory.getDefaultDao();
            if (customerObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                if (this.isRangeCrossYear) {
                    customerObj.addRestriction(new ORCompoundRestriction([new GreaterOrEqualRestriction('BirthDayTimeStamp', [this._subNDayTimeStamp]), new LessOrEqualRestriction('BirthDayTimeStamp', [this._addNDayTimeStamp])]));
                }
                else {
                    customerObj.addRestriction(new GreaterOrEqualRestriction('BirthDayTimeStamp', [this._subNDayTimeStamp]));
                    customerObj.addRestriction(new LessOrEqualRestriction('BirthDayTimeStamp', [this._addNDayTimeStamp]));
                }
                customerObj.addRestriction(new OrderByRestriction([{ column: 'LastName', order: 'ASC' }]));
                //customerObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' }]));
                // calendarObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' },{ column: 'EndTime', order: 'DESC' }]));
                dao.queryByTable(customerObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9hcGkvQ3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRyxrQkFBa0IsRUFBb0IscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuSixPQUFPLEVBQUUsT0FBTyxFQUFxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVqRixNQUFNOzs7O0lBWUosWUFBWSxVQUFVO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsSUFBSSxVQUFVLENBQUMsVUFBZ0I7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUd6RSxJQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUks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LFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtRQUlILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7Ozs7SUF0RkMsOENBQTBCOztJQUUxQixtREFBaUM7Ozs7O0lBQ2pDLHdDQUF1Qjs7Ozs7SUFDdkIsb0RBQWtDOzs7OztJQUVsQyx3Q0FBdUI7Ozs7O0lBQ3ZCLG9EQUFrQzs7Ozs7SUFFbEMsOENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBDbGllbnRDdXN0b21EYW8gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEdyZWF0ZXJPckVxdWFsUmVzdHJpY3Rpb24sIExlc3NPckVxdWFsUmVzdHJpY3Rpb24sICBPcmRlckJ5UmVzdHJpY3Rpb24sIEVxdWFsUmVzdHJpY3Rpb24sIE9SQ29tcG91bmRSZXN0cmljdGlvbiB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgZ2V0WWVhciwgZ2V0TW9udGgsIGdldERhdGUsIHN1YkRheXMsIGFkZERheXMsIHNldFllYXIgfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lckJpcnRoZGF5TGlzdEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICBwcml2YXRlIF90YXJnZXREYXRlOiBEYXRlO1xuXG4gIHB1YmxpYyBpc1JhbmdlQ3Jvc3NZZWFyOiBib29sZWFuO1xuICBwcml2YXRlIF9zdWJOIDogbnVtYmVyO1xuICBwcml2YXRlIF9zdWJORGF5VGltZVN0YW1wOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfYWRkTiA6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYWRkTkRheVRpbWVTdGFtcDogbnVtYmVyO1xuXG4gIHByaXZhdGUgX0Rhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnk7XG4gIGNvbnN0cnVjdG9yKERhb0ZhY3RvcnkpIHtcbiAgICB0aGlzLl9EYW9GYWN0b3J5ID0gRGFvRmFjdG9yeTtcbiAgfVxuXG4gIHNldCB0YXJnZXREYXRlKHRhcmdldERhdGU6IERhdGUpIHtcbiAgICB0aGlzLl90YXJnZXREYXRlID0gc2V0WWVhcih0YXJnZXREYXRlLCAyMDAwKTtcbiAgICB0aGlzLl9zdWJORGF5VGltZVN0YW1wID0gc3ViRGF5cyh0aGlzLl90YXJnZXREYXRlLCB0aGlzLl9zdWJOKS5nZXRUaW1lKCk7XG4gICAgdGhpcy5fYWRkTkRheVRpbWVTdGFtcCA9IGFkZERheXModGhpcy5fdGFyZ2V0RGF0ZSwgdGhpcy5fYWRkTikuZ2V0VGltZSgpO1xuXG5cbiAgICBpZigoZ2V0WWVhcih0aGlzLl90YXJnZXREYXRlKSA9PSBnZXRZZWFyKHRoaXMuX3N1Yk5EYXlUaW1lU3RhbXApKSAmJiAoZ2V0WWVhcih0aGlzLl90YXJnZXREYXRlKSA9PSBnZXRZZWFyKHRoaXMuX2FkZE5EYXlUaW1lU3RhbXApKSkge1xuICAgICAgdGhpcy5pc1JhbmdlQ3Jvc3NZZWFyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9zdWJORGF5VGltZVN0YW1wID0gKHNldFllYXIodGhpcy5fc3ViTkRheVRpbWVTdGFtcCwgMjAwMCkpLmdldFRpbWUoKTtcbiAgICAgIHRoaXMuX2FkZE5EYXlUaW1lU3RhbXAgPSAoc2V0WWVhcih0aGlzLl9hZGRORGF5VGltZVN0YW1wLCAyMDAwKSkuZ2V0VGltZSgpO1xuICAgICAgdGhpcy5pc1JhbmdlQ3Jvc3NZZWFyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zb2xlLndhcm4odGhpcy5fc3ViTiwgXCIgIHN1YkRhdGU6ICBcIiwgdGhpcy5fc3ViTkRheVRpbWVTdGFtcCk7XG4gICAgY29uc29sZS53YXJuKHRoaXMuX2FkZE4sIFwiICBhZGREYXRlOiAgXCIsIHRoaXMuX2FkZE5EYXlUaW1lU3RhbXApO1xuICB9XG5cbiAgc2V0IHN1Yk4oc3ViTjogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3ViTiA9IHN1Yk47XG4gIH1cblxuICBzZXQgYWRkTihhZGROOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hZGROID0gYWRkTjtcbiAgfVxuXG5cblxuICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdnZXRDdXN0b21lckJpcnRoZGF5TGlzdCc7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRDdXN0b21lckJpcnRoZGF5Lmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBjdXN0b21lck9iaiA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJcIik7XG4gICAgICBsZXQgZGFvID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAoY3VzdG9tZXJPYmogIT0gdW5kZWZpbmVkICYmIGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cbiAgICAgICAgaWYodGhpcy5pc1JhbmdlQ3Jvc3NZZWFyKSB7XG4gICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IE9SQ29tcG91bmRSZXN0cmljdGlvbihbbmV3IEdyZWF0ZXJPckVxdWFsUmVzdHJpY3Rpb24oJ0JpcnRoRGF5VGltZVN0YW1wJywgW3RoaXMuX3N1Yk5EYXlUaW1lU3RhbXBdKSwgbmV3IExlc3NPckVxdWFsUmVzdHJpY3Rpb24oJ0JpcnRoRGF5VGltZVN0YW1wJywgW3RoaXMuX2FkZE5EYXlUaW1lU3RhbXBdKV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBHcmVhdGVyT3JFcXVhbFJlc3RyaWN0aW9uKCdCaXJ0aERheVRpbWVTdGFtcCcsIFt0aGlzLl9zdWJORGF5VGltZVN0YW1wXSkpO1xuICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBMZXNzT3JFcXVhbFJlc3RyaWN0aW9uKCdCaXJ0aERheVRpbWVTdGFtcCcsIFt0aGlzLl9hZGRORGF5VGltZVN0YW1wXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IE9yZGVyQnlSZXN0cmljdGlvbihbeyBjb2x1bW46ICdMYXN0TmFtZScsIG9yZGVyOiAnQVNDJyB9XSkpXG5cbiAgICAgICAgLy9jdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgT3JkZXJCeVJlc3RyaWN0aW9uKFt7IGNvbHVtbjogJ1N0YXJ0VGltZScsIG9yZGVyOiAnQVNDJyB9XSkpO1xuICAgICAgICAvLyBjYWxlbmRhck9iai5hZGRSZXN0cmljdGlvbihuZXcgT3JkZXJCeVJlc3RyaWN0aW9uKFt7IGNvbHVtbjogJ1N0YXJ0VGltZScsIG9yZGVyOiAnQVNDJyB9LHsgY29sdW1uOiAnRW5kVGltZScsIG9yZGVyOiAnREVTQycgfV0pKTtcbiAgICAgICAgZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lck9iaikuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgICBcblxuICAgIH0pO1xuICB9XG59XG4iXX0=