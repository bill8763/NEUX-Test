/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { PersonalDataType } from "./Enum/PersonalDataType";
import { Bean, Required } from "@allianzSND/core";
var PersonalData = /** @class */ (function () {
    function PersonalData(dataYear, timeBase, dataType, find, schedule, meet, submit, inforce) {
        this._dataYear = dataYear;
        this._timeBase = timeBase;
        this._dataType = dataType;
        this._find = find;
        this._schedule = schedule;
        this._meet = meet;
        this._submit = submit;
        this._inforce = inforce;
    }
    Object.defineProperty(PersonalData.prototype, "DataYear", {
        //#region Getter setter
        //year
        get: 
        //#region Getter setter
        //year
        /**
         * @return {?}
         */
        function () {
            return this._dataYear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalData.prototype, "DataTear", {
        set: /**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            this._dataYear = year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalData.prototype, "TimeBase", {
        // time base
        get: 
        // time base
        /**
         * @return {?}
         */
        function () {
            return this._timeBase;
        },
        set: /**
         * @param {?} time
         * @return {?}
         */
        function (time) {
            this._timeBase = time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalData.prototype, "DataType", {
        //type
        get: 
        //type
        /**
         * @return {?}
         */
        function () {
            return this._dataType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalData.prototype, "DataTypet", {
        set: /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this._dataType = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalData.prototype, "Find", {
        //find
        get: 
        //find
        /**
         * @return {?}
         */
        function () {
            return this._find;
        },
        set: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            this._find = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalData.prototype, "Schedule", {
        //schedule
        get: 
        //schedule
        /**
         * @return {?}
         */
        function () {
            return this._schedule;
        },
        set: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            this._schedule = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalData.prototype, "Meet", {
        //meet
        get: 
        //meet
        /**
         * @return {?}
         */
        function () {
            return this._meet;
        },
        set: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            this._meet = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalData.prototype, "Submit", {
        //submit
        get: 
        //submit
        /**
         * @return {?}
         */
        function () {
            return this._submit;
        },
        set: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            this._submit = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalData.prototype, "Inforce", {
        //inforce
        get: 
        //inforce
        /**
         * @return {?}
         */
        function () {
            return this._inforce;
        },
        set: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            this._inforce = num;
        },
        enumerable: true,
        configurable: true
    });
    //#endregion
    //#endregion
    /**
     * @return {?}
     */
    PersonalData.prototype.getTotalCount = 
    //#endregion
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sum = this.Find + this.Schedule + this.Meet + this.Submit + this.Inforce;
        return sum;
    };
    /**
     * @return {?}
     */
    PersonalData.prototype.getTotalPoints = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sum = this.getFindPoints() + this.getSchedulePoints() + this.getMeetPoints() + this.getSubmitPoints() + this.getInforcePoints();
        return sum;
    };
    /**
     * @param {?} numerator
     * @param {?} denominator
     * @return {?}
     */
    PersonalData.prototype.getDifferentPercentage = /**
     * @param {?} numerator
     * @param {?} denominator
     * @return {?}
     */
    function (numerator, denominator) {
        return Math.round((numerator / denominator) * 100);
    };
    /*
    // 1 1 2 10 2   f /s /m /su /i
    getFindPoints(dot:number) : number {
        return this.Find * dot ;
    }

    getSchedulePoints(dot:number) : number {
        return this.Schedule  * dot;
    }

    getMeetPoints(dot:number) : number {
        return this.Meet * dot;
    }

    getSubmitPoints(dot:number) : number {
        return this.Submit * dot;
    }

    getInforcePoints(dot:number) : number {
        return this.Inforce  * dot;
    }

    /*
    getDifferentPercentage(numerator: number, denominator: number, fixedNum: number) : string {
        return ( ( numerator / denominator ) * 100 ).toFixed(fixedNum);
    }
    */
    /*
        // 1 1 2 10 2   f /s /m /su /i
        getFindPoints(dot:number) : number {
            return this.Find * dot ;
        }
    
        getSchedulePoints(dot:number) : number {
            return this.Schedule  * dot;
        }
    
        getMeetPoints(dot:number) : number {
            return this.Meet * dot;
        }
    
        getSubmitPoints(dot:number) : number {
            return this.Submit * dot;
        }
    
        getInforcePoints(dot:number) : number {
            return this.Inforce  * dot;
        }
    
        /*
        getDifferentPercentage(numerator: number, denominator: number, fixedNum: number) : string {
            return ( ( numerator / denominator ) * 100 ).toFixed(fixedNum);
        }
        */
    /**
     * @return {?}
     */
    PersonalData.prototype.getFindPoints = /*
        // 1 1 2 10 2   f /s /m /su /i
        getFindPoints(dot:number) : number {
            return this.Find * dot ;
        }
    
        getSchedulePoints(dot:number) : number {
            return this.Schedule  * dot;
        }
    
        getMeetPoints(dot:number) : number {
            return this.Meet * dot;
        }
    
        getSubmitPoints(dot:number) : number {
            return this.Submit * dot;
        }
    
        getInforcePoints(dot:number) : number {
            return this.Inforce  * dot;
        }
    
        /*
        getDifferentPercentage(numerator: number, denominator: number, fixedNum: number) : string {
            return ( ( numerator / denominator ) * 100 ).toFixed(fixedNum);
        }
        */
    /**
     * @return {?}
     */
    function () {
        return this.Find * 1;
    };
    /**
     * @return {?}
     */
    PersonalData.prototype.getSchedulePoints = /**
     * @return {?}
     */
    function () {
        return this.Schedule * 1;
    };
    /**
     * @return {?}
     */
    PersonalData.prototype.getMeetPoints = /**
     * @return {?}
     */
    function () {
        return this.Meet * 2;
    };
    /**
     * @return {?}
     */
    PersonalData.prototype.getSubmitPoints = /**
     * @return {?}
     */
    function () {
        return this.Submit * 10;
    };
    /**
     * @return {?}
     */
    PersonalData.prototype.getInforcePoints = /**
     * @return {?}
     */
    function () {
        return this.Inforce * 2;
    };
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], PersonalData.prototype, "_dataYear", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], PersonalData.prototype, "_timeBase", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], PersonalData.prototype, "_dataType", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], PersonalData.prototype, "_find", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], PersonalData.prototype, "_schedule", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], PersonalData.prototype, "_meet", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], PersonalData.prototype, "_submit", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], PersonalData.prototype, "_inforce", void 0);
    PersonalData = tslib_1.__decorate([
        Bean('PersonalData'),
        tslib_1.__metadata("design:paramtypes", [Number, String, String, Number, Number, Number, Number, Number])
    ], PersonalData);
    return PersonalData;
}());
export { PersonalData };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._dataYear;
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._timeBase;
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._dataType;
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._find;
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._schedule;
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._meet;
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._submit;
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._inforce;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uYWxEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9QZXJzb25hbERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQTZCOUMsc0JBQVksUUFBZSxFQUNmLFFBQTZCLEVBQzdCLFFBQXlCLEVBQ3pCLElBQVcsRUFDWCxRQUFnQixFQUNoQixJQUFZLEVBQ1osTUFBYyxFQUNkLE9BQWU7UUFFWCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBSWIsc0JBQUksa0NBQVE7UUFGWix1QkFBdUI7UUFDdkIsTUFBTTs7Ozs7OztRQUNOO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQVE7Ozs7O1FBQVosVUFBYSxJQUFZO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUksSUFBSSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksa0NBQVE7UUFE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QUFDOzs7O0lBRUQsb0NBQWE7OztJQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsc0NBQWU7OztJQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsdUNBQWdCOzs7SUFBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFyTEQ7UUFEQyxRQUFROzttREFDaUI7SUFHMUI7UUFEQyxRQUFROzttREFDK0I7SUFHeEM7UUFEQyxRQUFROzttREFDMkI7SUFHcEM7UUFEQyxRQUFROzsrQ0FDYTtJQUd0QjtRQURDLFFBQVE7O21EQUNpQjtJQUcxQjtRQURDLFFBQVE7OytDQUNhO0lBR3RCO1FBREMsUUFBUTs7aURBQ2U7SUFHeEI7UUFEQyxRQUFROztrREFDZ0I7SUF4QmhCLFlBQVk7UUFEeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7T0FDUixZQUFZLENBMEx4QjtJQUFELG1CQUFDO0NBQUEsSUFBQTtTQTFMWSxZQUFZOzs7Ozs7SUFFckIsaUNBQzBCOzs7OztJQUUxQixpQ0FDd0M7Ozs7O0lBRXhDLGlDQUNvQzs7Ozs7SUFFcEMsNkJBQ3NCOzs7OztJQUV0QixpQ0FDMEI7Ozs7O0lBRTFCLDZCQUNzQjs7Ozs7SUFFdEIsK0JBQ3dCOzs7OztJQUV4QixnQ0FDeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzb25hbERhdGFUaW1lQmFzZSB9IGZyb20gXCIuL0VudW0vUGVyc29uYWxEYXRhVGltZUJhc2VcIjtcbmltcG9ydCB7IFBlcnNvbmFsRGF0YVR5cGUgfSBmcm9tIFwiLi9FbnVtL1BlcnNvbmFsRGF0YVR5cGVcIjtcbmltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ1BlcnNvbmFsRGF0YScpXG5leHBvcnQgY2xhc3MgUGVyc29uYWxEYXRhIHtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2RhdGFZZWFyOiBudW1iZXI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF90aW1lQmFzZTogUGVyc29uYWxEYXRhVGltZUJhc2U7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9kYXRhVHlwZTogUGVyc29uYWxEYXRhVHlwZTtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2ZpbmQ6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX3NjaGVkdWxlOiBudW1iZXI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9tZWV0OiBudW1iZXI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9zdWJtaXQ6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2luZm9yY2U6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFZZWFyOm51bWJlciwgXG4gICAgICAgICAgICAgICAgdGltZUJhc2U6UGVyc29uYWxEYXRhVGltZUJhc2UsIFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOlBlcnNvbmFsRGF0YVR5cGUsIFxuICAgICAgICAgICAgICAgIGZpbmQ6bnVtYmVyLCBcbiAgICAgICAgICAgICAgICBzY2hlZHVsZTogbnVtYmVyLCBcbiAgICAgICAgICAgICAgICBtZWV0OiBudW1iZXIsIFxuICAgICAgICAgICAgICAgIHN1Ym1pdDogbnVtYmVyLCBcbiAgICAgICAgICAgICAgICBpbmZvcmNlOiBudW1iZXIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRhWWVhciA9IGRhdGFZZWFyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90aW1lQmFzZSA9IHRpbWVCYXNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRhVHlwZSA9IGRhdGFUeXBlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9maW5kID0gZmluZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGUgPSBzY2hlZHVsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVldCA9IG1lZXQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N1Ym1pdCA9IHN1Ym1pdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5mb3JjZSA9IGluZm9yY2U7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgIC8vI3JlZ2lvbiBHZXR0ZXIgc2V0dGVyXG4gICAgLy95ZWFyXG4gICAgZ2V0IERhdGFZZWFyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVllYXI7XG4gICAgfVxuXG4gICAgc2V0IERhdGFUZWFyKHllYXI6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9kYXRhWWVhciA9ICB5ZWFyO1xuICAgIH1cblxuICAgIC8vIHRpbWUgYmFzZVxuICAgIGdldCBUaW1lQmFzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVCYXNlO1xuICAgIH1cblxuICAgIHNldCBUaW1lQmFzZSh0aW1lOiBQZXJzb25hbERhdGFUaW1lQmFzZSkge1xuICAgICAgICB0aGlzLl90aW1lQmFzZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgLy90eXBlXG4gICAgZ2V0IERhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVR5cGU7XG4gICAgfVxuXG4gICAgc2V0IERhdGFUeXBldCh0eXBlOiBQZXJzb25hbERhdGFUeXBlKSB7XG4gICAgICAgIHRoaXMuX2RhdGFUeXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICAvL2ZpbmRcbiAgICBnZXQgRmluZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbmQ7XG4gICAgfVxuXG4gICAgc2V0IEZpbmQobnVtOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZmluZCA9IG51bTtcbiAgICB9XG5cbiAgICAvL3NjaGVkdWxlXG4gICAgZ2V0IFNjaGVkdWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NoZWR1bGU7XG4gICAgfVxuXG4gICAgc2V0IFNjaGVkdWxlKG51bTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NjaGVkdWxlID0gbnVtO1xuICAgIH1cblxuICAgIC8vbWVldFxuICAgIGdldCBNZWV0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVldDtcbiAgICB9XG5cbiAgICBzZXQgTWVldChudW06IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tZWV0ID0gbnVtO1xuICAgIH1cblxuICAgIC8vc3VibWl0XG4gICAgZ2V0IFN1Ym1pdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1Ym1pdDtcbiAgICB9XG5cbiAgICBzZXQgU3VibWl0KG51bTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IG51bSA7XG4gICAgfVxuXG4gICAgLy9pbmZvcmNlXG4gICAgZ2V0IEluZm9yY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmZvcmNlO1xuICAgIH1cbiAgICBcbiAgICBzZXQgSW5mb3JjZShudW06IG51bWJlcikge1xuICAgICAgICB0aGlzLl9pbmZvcmNlID0gbnVtO1xuICAgIH1cblxuICAgIC8vI2VuZHJlZ2lvblxuXG5cbiAgICBnZXRUb3RhbENvdW50KCkgOiBudW1iZXIge1xuICAgICAgIGxldCBzdW0gPSAgdGhpcy5GaW5kICsgdGhpcy5TY2hlZHVsZSArIHRoaXMuTWVldCArIHRoaXMuU3VibWl0ICsgdGhpcy5JbmZvcmNlO1xuICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgZ2V0VG90YWxQb2ludHMoKSA6IG51bWJlciB7XG4gICAgICAgIGxldCBzdW0gPSB0aGlzLmdldEZpbmRQb2ludHMoKSArIHRoaXMuZ2V0U2NoZWR1bGVQb2ludHMoKSArIHRoaXMuZ2V0TWVldFBvaW50cygpICsgdGhpcy5nZXRTdWJtaXRQb2ludHMoKSArIHRoaXMuZ2V0SW5mb3JjZVBvaW50cygpO1xuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIGdldERpZmZlcmVudFBlcmNlbnRhZ2UobnVtZXJhdG9yOiBudW1iZXIsIGRlbm9taW5hdG9yOiBudW1iZXIpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKSAqIDEwMCApO1xuICAgIH1cblxuXG4gICAgLypcbiAgICAvLyAxIDEgMiAxMCAyICAgZiAvcyAvbSAvc3UgL2lcbiAgICBnZXRGaW5kUG9pbnRzKGRvdDpudW1iZXIpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRmluZCAqIGRvdCA7XG4gICAgfVxuXG4gICAgZ2V0U2NoZWR1bGVQb2ludHMoZG90Om51bWJlcikgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5TY2hlZHVsZSAgKiBkb3Q7XG4gICAgfVxuXG4gICAgZ2V0TWVldFBvaW50cyhkb3Q6bnVtYmVyKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLk1lZXQgKiBkb3Q7XG4gICAgfVxuXG4gICAgZ2V0U3VibWl0UG9pbnRzKGRvdDpudW1iZXIpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuU3VibWl0ICogZG90O1xuICAgIH1cblxuICAgIGdldEluZm9yY2VQb2ludHMoZG90Om51bWJlcikgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5JbmZvcmNlICAqIGRvdDtcbiAgICB9XG5cbiAgICAvKlxuICAgIGdldERpZmZlcmVudFBlcmNlbnRhZ2UobnVtZXJhdG9yOiBudW1iZXIsIGRlbm9taW5hdG9yOiBudW1iZXIsIGZpeGVkTnVtOiBudW1iZXIpIDogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICggKCBudW1lcmF0b3IgLyBkZW5vbWluYXRvciApICogMTAwICkudG9GaXhlZChmaXhlZE51bSk7XG4gICAgfVxuICAgICovXG5cbiAgICBcblxuICAgIGdldEZpbmRQb2ludHMoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLkZpbmQgKiAxIDtcbiAgICB9XG5cbiAgICBnZXRTY2hlZHVsZVBvaW50cygpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuU2NoZWR1bGUgICogMTtcbiAgICB9XG5cbiAgICBnZXRNZWV0UG9pbnRzKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5NZWV0ICogMjtcbiAgICB9XG5cbiAgICBnZXRTdWJtaXRQb2ludHMoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLlN1Ym1pdCAqIDEwO1xuICAgIH1cblxuICAgIGdldEluZm9yY2VQb2ludHMoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLkluZm9yY2UgICogMjtcbiAgICB9XG4gICAgXG59XG5cblxuXG5cbiJdfQ==