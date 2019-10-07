/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class GetProgressActualValueAPI {
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
    /**
     * @param {?} year
     * @return {?}
     */
    setDataYear(year) {
        this._dataYear = year;
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
        return 'getProgressActualValue';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        //alert("personal progress mock data");
        if (this._dataYear == 2019) {
            return './assets/mock/getProgressActualValue_2019.json';
        }
        else if (this._dataYear == 2020) {
            return './assets/mock/getProgressActualValue_2020.json';
        }
        else {
            //todo throw error
            console.warn('dataYear not match mock path');
            return '';
        }
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
    GetProgressActualValueAPI.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    GetProgressActualValueAPI.prototype._daoFactory;
    /**
     * @type {?}
     * @private
     */
    GetProgressActualValueAPI.prototype._personalDataType;
    /**
     * @type {?}
     * @private
     */
    GetProgressActualValueAPI.prototype._personalDataTimeBase;
    /**
     * @type {?}
     * @private
     */
    GetProgressActualValueAPI.prototype._dataYear;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0UHJvZ3Jlc3NBY3R1YWxWYWx1ZUFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL2FwaS9HZXRQcm9ncmVzc0FjdHVhbFZhbHVlQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFXQSxNQUFNOzs7OztJQVFGLElBQUksUUFBUSxDQUFDLEVBQVM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxJQUFxQjtRQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsSUFBeUI7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQU9ELGdCQUFjLENBQUM7SUFBQSxDQUFDOzs7O0lBRWhCLFVBQVU7UUFDTixPQUFPLHdCQUF3QixDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsdUNBQXVDO1FBQ3ZDLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDekIsT0FBTyxnREFBZ0QsQ0FBQztTQUN6RDthQUNJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDOUIsT0FBTyxnREFBZ0QsQ0FBQztTQUN6RDthQUNJO1lBQ0gsa0JBQWtCO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUM3QyxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0wsQ0FBQzs7OztJQUdELFVBQVU7UUFDTixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztDQXVCSjs7Ozs7O0lBMUVHLDhDQUEwQjs7Ozs7SUFDMUIsZ0RBQWdDOzs7OztJQUNoQyxzREFBNEM7Ozs7O0lBQzVDLDBEQUFvRDs7Ozs7SUFDcEQsOENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQge0lTUUxpdGVBUEl9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBmcm9tfSBmcm9tICdyeGpzJztcbmltcG9ydCB7RGFvRmFjdG9yeX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0NsaWVudEN1c3RvbURhb30gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0VxdWFsUmVzdHJpY3Rpb259IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5pbXBvcnQgeyBQZXJzb25hbERhdGFUeXBlIH0gZnJvbSAgJy4uL3NlcnZpY2UvbW9kZWwvRW51bS9QZXJzb25hbERhdGFUeXBlJztcbmltcG9ydCB7IFBlcnNvbmFsRGF0YVRpbWVCYXNlIH0gZnJvbSAgJy4uL3NlcnZpY2UvbW9kZWwvRW51bS9QZXJzb25hbERhdGFUaW1lQmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBHZXRQcm9ncmVzc0FjdHVhbFZhbHVlQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG4gICAgcHJpdmF0ZSBfY2xpZW50SUQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9kYW9GYWN0b3J5OiBEYW9GYWN0b3J5O1xuICAgIHByaXZhdGUgX3BlcnNvbmFsRGF0YVR5cGU6IFBlcnNvbmFsRGF0YVR5cGU7XG4gICAgcHJpdmF0ZSBfcGVyc29uYWxEYXRhVGltZUJhc2U6IFBlcnNvbmFsRGF0YVRpbWVCYXNlO1xuICAgIHByaXZhdGUgX2RhdGFZZWFyOiBudW1iZXI7XG5cbiAgICBzZXQgQ2xpZW50SWQoaWQ6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NsaWVudElEID0gaWQ7XG4gICAgfVxuXG4gICAgc2V0IERhdGFUeXBlKHR5cGU6UGVyc29uYWxEYXRhVHlwZSkge1xuICAgICAgICB0aGlzLl9wZXJzb25hbERhdGFUeXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBzZXQgVGltZUJhc2UodGltZTpQZXJzb25hbERhdGFUaW1lQmFzZSkge1xuICAgICAgICB0aGlzLl9wZXJzb25hbERhdGFUaW1lQmFzZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgc2V0RGF0YVllYXIoeWVhcjogbnVtYmVyKSB7XG4gICAgICB0aGlzLl9kYXRhWWVhciA9IHllYXI7XG4gICAgfSBcbiAgICAvKlxuICAgIGNvbnN0cnVjdG9yKERhb0ZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5fZGFvRmFjdG9yeSA9IERhb0ZhY3Rvcnk7XG4gICAgfVxuICAgICovXG5cbiAgICBjb25zdHJ1Y3Rvcigpe307XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnZ2V0UHJvZ3Jlc3NBY3R1YWxWYWx1ZSc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgLy9hbGVydChcInBlcnNvbmFsIHByb2dyZXNzIG1vY2sgZGF0YVwiKTtcbiAgICAgICAgaWYodGhpcy5fZGF0YVllYXIgPT0gMjAxOSkge1xuICAgICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRQcm9ncmVzc0FjdHVhbFZhbHVlXzIwMTkuanNvbic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLl9kYXRhWWVhciA9PSAyMDIwKSB7XG4gICAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldFByb2dyZXNzQWN0dWFsVmFsdWVfMjAyMC5qc29uJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL3RvZG8gdGhyb3cgZXJyb3JcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ2RhdGFZZWFyIG5vdCBtYXRjaCBtb2NrIHBhdGgnKTtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuXG4gICAgLypcbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICBsZXQgY2FsZW5kYXJPYmogPSB0aGlzLl9kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0NhbGVuZGFyXCIpO1xuICAgICAgICAgIGxldCBkYW8gPSB0aGlzLl9kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgICBpZiAoY2FsZW5kYXJPYmogIT0gdW5kZWZpbmVkICYmIGRhbyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pO1xuICAgICAgICAgICAgY2FsZW5kYXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJyxbdGhpcy5fY2xpZW50SURdKSk7XG4gICAgICAgICAgICBkYW8ucXVlcnlCeVRhYmxlKGNhbGVuZGFyT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgICovXG5cbn0iXX0=