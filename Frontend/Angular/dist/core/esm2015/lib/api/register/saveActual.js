/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from "rxjs";
import { v4 as uuid } from 'uuid';
export class saveActualAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this.ActualDatas = [];
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveActual';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.log('ActualDatas', this.ActualDatas);
        /** @type {?} */
        let ActualValue = this.daoFactory.getDefaultTable('TW_LH_SD_Actual_Value');
        /** @type {?} */
        let ActualValueExt = this.daoFactory.getDefaultTable('TW_LH_SD_Actual_Value_Extension');
        /** @type {?} */
        let dao = this.daoFactory.getDefaultDao();
        console.log('ActualValue', ActualValue);
        if (ActualValue) {
            dao.transactionDelete(ActualValue);
            dao.transactionDelete(ActualValueExt);
            for (let ActualData of this.ActualDatas) {
                console.log('ActualData', ActualData);
                /** @type {?} */
                let DataYear = ActualData.DataYear;
                console.log('DataYear', DataYear);
                /** @type {?} */
                let ActualMainDatas = ActualData.Values;
                console.log('ActualMainDatas', ActualMainDatas);
                for (let data of ActualMainDatas) {
                    /** @type {?} */
                    let clientID = uuid();
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
                        ext => {
                            ActualValueExt.setValue(ext.id, ext.value);
                        }));
                    }
                    dao.transactionInsert(ActualValueExt);
                }
            }
            return dao.runTransaction();
        }
        else
            return of(false);
    }
}
if (false) {
    /** @type {?} */
    saveActualAPI.prototype.ActualDatas;
    /**
     * @type {?}
     * @private
     */
    saveActualAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUFjdHVhbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL3NhdmVBY3R1YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHMUIsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsTUFBTTs7OztJQUlGLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGbkMsZ0JBQVcsR0FBZSxFQUFFLENBQUM7SUFJcEMsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8scUNBQXFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7O1lBQ3pDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQzs7WUFDdEUsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGlDQUFpQyxDQUFDOztZQUNuRixHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDeEMsSUFBSSxXQUFXLEVBQUU7WUFDYixHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7O29CQUVsQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVE7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztvQkFFOUIsZUFBZSxHQUFlLFVBQVUsQ0FBQyxNQUFNO2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLElBQUksSUFBSSxJQUFJLGVBQWUsRUFBRTs7d0JBQzFCLFFBQVEsR0FBRyxJQUFJLEVBQUU7b0JBQ3JCLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUMzQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDM0MsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNoRCxXQUFXLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDOUQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMxQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFFbkMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzlDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7O3dCQUFDLEdBQUcsQ0FBQyxFQUFFOzRCQUMxQixjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMvQyxDQUFDLEVBQUMsQ0FBQztxQkFDTjtvQkFDRCxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQ3pDO2FBRUo7WUFDRCxPQUFPLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMvQjs7WUFDSSxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0o7OztJQXZERyxvQ0FBb0M7Ozs7O0lBRXhCLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tIFwiLi4vQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gXCIuLi9TUUxpdGVBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCIuLi9Nb2NrQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnlcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGNsYXNzIHNhdmVBY3R1YWxBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG5cbiAgICBwdWJsaWMgQWN0dWFsRGF0YXM6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdzYXZlQWN0dWFsJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svYWRkQ2FsZW5kYXJFdmVudC5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQWN0dWFsRGF0YXMnLCB0aGlzLkFjdHVhbERhdGFzKTtcbiAgICAgICAgbGV0IEFjdHVhbFZhbHVlID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQWN0dWFsX1ZhbHVlJyk7XG4gICAgICAgIGxldCBBY3R1YWxWYWx1ZUV4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0FjdHVhbF9WYWx1ZV9FeHRlbnNpb24nKTtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBY3R1YWxWYWx1ZScsIEFjdHVhbFZhbHVlKTtcbiAgICAgICAgaWYgKEFjdHVhbFZhbHVlKSB7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoQWN0dWFsVmFsdWUpO1xuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKEFjdHVhbFZhbHVlRXh0KTtcbiAgICAgICAgICAgIGZvciAobGV0IEFjdHVhbERhdGEgb2YgdGhpcy5BY3R1YWxEYXRhcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBY3R1YWxEYXRhJywgQWN0dWFsRGF0YSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgRGF0YVllYXIgPSBBY3R1YWxEYXRhLkRhdGFZZWFyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhWWVhcicsIERhdGFZZWFyKTtcblxuICAgICAgICAgICAgICAgIGxldCBBY3R1YWxNYWluRGF0YXM6IEFycmF5PGFueT4gPSBBY3R1YWxEYXRhLlZhbHVlcztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWN0dWFsTWFpbkRhdGFzJywgQWN0dWFsTWFpbkRhdGFzKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBkYXRhIG9mIEFjdHVhbE1haW5EYXRhcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgICAgIEFjdHVhbFZhbHVlLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBBY3R1YWxWYWx1ZS5zZXRWYWx1ZShcIkRhdGFZZWFyXCIsIERhdGFZZWFyKTtcbiAgICAgICAgICAgICAgICAgICAgQWN0dWFsVmFsdWUuc2V0VmFsdWUoXCJEYXRhVHlwZVwiLCBkYXRhLkRhdGFUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgQWN0dWFsVmFsdWUuc2V0VmFsdWUoXCJQZXJmb3JtYW5jZVR5cGVcIiwgZGF0YS5QZXJmb3JtYW5jZVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBBY3R1YWxWYWx1ZS5zZXRWYWx1ZShcIk1vbnRoXCIsIGRhdGEuTW9udGgpO1xuICAgICAgICAgICAgICAgICAgICBBY3R1YWxWYWx1ZS5zZXRWYWx1ZShcIlZhbHVlXCIsIGRhdGEuVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoQWN0dWFsVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIEFjdHVhbFZhbHVlRXh0LnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5leHRlbnNpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmV4dGVuc2lvbnMuZm9yRWFjaChleHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdHVhbFZhbHVlRXh0LnNldFZhbHVlKGV4dC5pZCwgZXh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChBY3R1YWxWYWx1ZUV4dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGFvLnJ1blRyYW5zYWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cbn0iXX0=