/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of } from "rxjs";
import { v4 as uuid } from 'uuid';
var saveActualAPI = /** @class */ (function () {
    function saveActualAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this.ActualDatas = [];
    }
    /**
     * @return {?}
     */
    saveActualAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'saveActual';
    };
    /**
     * @return {?}
     */
    saveActualAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/addCalendarEvent.json';
    };
    /**
     * @return {?}
     */
    saveActualAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var e_1, _a, e_2, _b;
        console.log('ActualDatas', this.ActualDatas);
        /** @type {?} */
        var ActualValue = this.daoFactory.getDefaultTable('TW_LH_SD_Actual_Value');
        /** @type {?} */
        var ActualValueExt = this.daoFactory.getDefaultTable('TW_LH_SD_Actual_Value_Extension');
        /** @type {?} */
        var dao = this.daoFactory.getDefaultDao();
        console.log('ActualValue', ActualValue);
        if (ActualValue) {
            dao.transactionDelete(ActualValue);
            dao.transactionDelete(ActualValueExt);
            try {
                for (var _c = tslib_1.__values(this.ActualDatas), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var ActualData = _d.value;
                    console.log('ActualData', ActualData);
                    /** @type {?} */
                    var DataYear = ActualData.DataYear;
                    console.log('DataYear', DataYear);
                    /** @type {?} */
                    var ActualMainDatas = ActualData.Values;
                    console.log('ActualMainDatas', ActualMainDatas);
                    try {
                        for (var ActualMainDatas_1 = tslib_1.__values(ActualMainDatas), ActualMainDatas_1_1 = ActualMainDatas_1.next(); !ActualMainDatas_1_1.done; ActualMainDatas_1_1 = ActualMainDatas_1.next()) {
                            var data = ActualMainDatas_1_1.value;
                            /** @type {?} */
                            var clientID = uuid();
                            ActualValue.setValue("ClientID", clientID);
                            ActualValue.setValue("DataYear", DataYear);
                            ActualValue.setValue("DataType", data.DataType);
                            ActualValue.setValue("PerformanceType", data.PerformanceType);
                            ActualValue.setValue("Month", data.Month);
                            ActualValue.setValue("Value", data.Value);
                            dao.transactionInsert(ActualValue);
                            ActualValueExt.setValue("ClientID", clientID);
                            if (data.extensions) {
                                data.extensions.forEach((/**
                                 * @param {?} ext
                                 * @return {?}
                                 */
                                function (ext) {
                                    ActualValueExt.setValue(ext.id, ext.value);
                                }));
                            }
                            dao.transactionInsert(ActualValueExt);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (ActualMainDatas_1_1 && !ActualMainDatas_1_1.done && (_b = ActualMainDatas_1.return)) _b.call(ActualMainDatas_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return dao.runTransaction();
        }
        else
            return of(false);
    };
    return saveActualAPI;
}());
export { saveActualAPI };
if (false) {
    /** @type {?} */
    saveActualAPI.prototype.ActualDatas;
    /**
     * @type {?}
     * @private
     */
    saveActualAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUFjdHVhbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL3NhdmVBY3R1YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzFCLE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDO0lBSUksdUJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGbkMsZ0JBQVcsR0FBZSxFQUFFLENBQUM7SUFJcEMsQ0FBQzs7OztJQUVELGtDQUFVOzs7SUFBVjtRQUNJLE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDSSxPQUFPLHFDQUFxQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxrQ0FBVTs7O0lBQVY7O1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztZQUN6QyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUM7O1lBQ3RFLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxpQ0FBaUMsQ0FBQzs7WUFDbkYsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksV0FBVyxFQUFFO1lBQ2IsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25DLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7Z0JBQ3RDLEtBQXVCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsV0FBVyxDQUFBLGdCQUFBLDRCQUFFO29CQUFwQyxJQUFJLFVBQVUsV0FBQTtvQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQzs7d0JBRWxDLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUTtvQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7O3dCQUU5QixlQUFlLEdBQWUsVUFBVSxDQUFDLE1BQU07b0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLENBQUM7O3dCQUNoRCxLQUFpQixJQUFBLG9CQUFBLGlCQUFBLGVBQWUsQ0FBQSxnREFBQSw2RUFBRTs0QkFBN0IsSUFBSSxJQUFJLDRCQUFBOztnQ0FDTCxRQUFRLEdBQUcsSUFBSSxFQUFFOzRCQUNyQixXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzs0QkFDM0MsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7NEJBQzNDLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDaEQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBQzlELFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDMUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUMxQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBRW5DLGNBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzRCQUM5QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0NBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTzs7OztnQ0FBQyxVQUFBLEdBQUc7b0NBQ3ZCLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0NBQy9DLENBQUMsRUFBQyxDQUFDOzZCQUNOOzRCQUNELEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQzt5QkFDekM7Ozs7Ozs7OztpQkFFSjs7Ozs7Ozs7O1lBQ0QsT0FBTyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDL0I7O1lBQ0ksT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQzs7OztJQXZERyxvQ0FBb0M7Ozs7O0lBRXhCLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tIFwiLi4vQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gXCIuLi9TUUxpdGVBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCIuLi9Nb2NrQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnlcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGNsYXNzIHNhdmVBY3R1YWxBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG5cbiAgICBwdWJsaWMgQWN0dWFsRGF0YXM6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdzYXZlQWN0dWFsJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svYWRkQ2FsZW5kYXJFdmVudC5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQWN0dWFsRGF0YXMnLCB0aGlzLkFjdHVhbERhdGFzKTtcbiAgICAgICAgbGV0IEFjdHVhbFZhbHVlID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQWN0dWFsX1ZhbHVlJyk7XG4gICAgICAgIGxldCBBY3R1YWxWYWx1ZUV4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0FjdHVhbF9WYWx1ZV9FeHRlbnNpb24nKTtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBY3R1YWxWYWx1ZScsIEFjdHVhbFZhbHVlKTtcbiAgICAgICAgaWYgKEFjdHVhbFZhbHVlKSB7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoQWN0dWFsVmFsdWUpO1xuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKEFjdHVhbFZhbHVlRXh0KTtcbiAgICAgICAgICAgIGZvciAobGV0IEFjdHVhbERhdGEgb2YgdGhpcy5BY3R1YWxEYXRhcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBY3R1YWxEYXRhJywgQWN0dWFsRGF0YSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgRGF0YVllYXIgPSBBY3R1YWxEYXRhLkRhdGFZZWFyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhWWVhcicsIERhdGFZZWFyKTtcblxuICAgICAgICAgICAgICAgIGxldCBBY3R1YWxNYWluRGF0YXM6IEFycmF5PGFueT4gPSBBY3R1YWxEYXRhLlZhbHVlcztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWN0dWFsTWFpbkRhdGFzJywgQWN0dWFsTWFpbkRhdGFzKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBkYXRhIG9mIEFjdHVhbE1haW5EYXRhcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgICAgIEFjdHVhbFZhbHVlLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBBY3R1YWxWYWx1ZS5zZXRWYWx1ZShcIkRhdGFZZWFyXCIsIERhdGFZZWFyKTtcbiAgICAgICAgICAgICAgICAgICAgQWN0dWFsVmFsdWUuc2V0VmFsdWUoXCJEYXRhVHlwZVwiLCBkYXRhLkRhdGFUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgQWN0dWFsVmFsdWUuc2V0VmFsdWUoXCJQZXJmb3JtYW5jZVR5cGVcIiwgZGF0YS5QZXJmb3JtYW5jZVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBBY3R1YWxWYWx1ZS5zZXRWYWx1ZShcIk1vbnRoXCIsIGRhdGEuTW9udGgpO1xuICAgICAgICAgICAgICAgICAgICBBY3R1YWxWYWx1ZS5zZXRWYWx1ZShcIlZhbHVlXCIsIGRhdGEuVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoQWN0dWFsVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIEFjdHVhbFZhbHVlRXh0LnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5leHRlbnNpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmV4dGVuc2lvbnMuZm9yRWFjaChleHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdHVhbFZhbHVlRXh0LnNldFZhbHVlKGV4dC5pZCwgZXh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChBY3R1YWxWYWx1ZUV4dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGFvLnJ1blRyYW5zYWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cbn0iXX0=