/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from "rxjs";
import { EqualRestriction } from '../../device/sqlite';
export class BindingAccountAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this.account = '';
        this._DaoFactory = DaoFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'BindingAccount';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/saveSuccess.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        /** @type {?} */
        let deviceInfoObjForDelete = this._DaoFactory.getTable('Profile', "TW_LH_SD_DeviceInfo");
        /** @type {?} */
        let deviceInfoObjForInsert = this._DaoFactory.getTable('Profile', "TW_LH_SD_DeviceInfo");
        /** @type {?} */
        let dao = this._DaoFactory.getDao('Profile');
        if (deviceInfoObjForDelete != undefined && deviceInfoObjForInsert != undefined && dao != undefined) {
            deviceInfoObjForDelete.addRestriction(new EqualRestriction('Category', ['BindingAccount']));
            dao.transactionDelete(deviceInfoObjForDelete);
            deviceInfoObjForInsert.setValue("Category", "BindingAccount");
            deviceInfoObjForInsert.setValue("CategoryVal", JSON.stringify({ account: this.account }));
            deviceInfoObjForInsert.setValue("UpdateTime", Date.now());
            dao.transactionInsert(deviceInfoObjForInsert);
            return dao.runTransaction();
        }
        else {
            return of(false);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    BindingAccountAPI.prototype._DaoFactory;
    /** @type {?} */
    BindingAccountAPI.prototype.account;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluZGluZ0FjY291bnRBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9CaW5kaW5nQWNjb3VudEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUt0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxNQUFNOzs7O0lBRUYsWUFBWSxVQUFzQjtRQUkzQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBSGhCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFJRCxVQUFVO1FBQ04sT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8sZ0NBQWdDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUNELFVBQVU7O1lBQ0Ysc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDOztZQUNwRixzQkFBc0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUM7O1lBQ3BGLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDNUMsSUFBSSxzQkFBc0IsSUFBSSxTQUFTLElBQUksc0JBQXNCLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7WUFDaEcsc0JBQXNCLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUYsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFFOUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlELHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFGLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUQsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDOUMsT0FBTyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDL0I7YUFBTTtZQUNILE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBRUwsQ0FBQztDQUNKOzs7Ozs7SUFoQ0csd0NBQWdDOztJQUtoQyxvQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IElBUEkgfSBmcm9tIFwiLi4vQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiLi4vTW9ja0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tIFwiLi4vU1FMaXRlQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQ2xpZW50Q3VzdG9tRGFvLCBEYW9GYWN0b3J5IH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZSc7XG5pbXBvcnQgeyBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZSc7XG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nQWNjb3VudEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcbiAgICBwcml2YXRlIF9EYW9GYWN0b3J5OiBEYW9GYWN0b3J5O1xuICAgIGNvbnN0cnVjdG9yKERhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5fRGFvRmFjdG9yeSA9IERhb0ZhY3Rvcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGFjY291bnQgPSAnJztcblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdCaW5kaW5nQWNjb3VudCc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL3NhdmVTdWNjZXNzLmpzb24nO1xuICAgIH1cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGxldCBkZXZpY2VJbmZvT2JqRm9yRGVsZXRlID0gdGhpcy5fRGFvRmFjdG9yeS5nZXRUYWJsZSgnUHJvZmlsZScsIFwiVFdfTEhfU0RfRGV2aWNlSW5mb1wiKTtcbiAgICAgICAgbGV0IGRldmljZUluZm9PYmpGb3JJbnNlcnQgPSB0aGlzLl9EYW9GYWN0b3J5LmdldFRhYmxlKCdQcm9maWxlJywgXCJUV19MSF9TRF9EZXZpY2VJbmZvXCIpO1xuICAgICAgICBsZXQgZGFvID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREYW8oJ1Byb2ZpbGUnKTtcbiAgICAgICAgaWYgKGRldmljZUluZm9PYmpGb3JEZWxldGUgIT0gdW5kZWZpbmVkICYmIGRldmljZUluZm9PYmpGb3JJbnNlcnQgIT0gdW5kZWZpbmVkICYmIGRhbyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRldmljZUluZm9PYmpGb3JEZWxldGUuYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NhdGVnb3J5JywgWydCaW5kaW5nQWNjb3VudCddKSk7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoZGV2aWNlSW5mb09iakZvckRlbGV0ZSk7XG5cbiAgICAgICAgICAgIGRldmljZUluZm9PYmpGb3JJbnNlcnQuc2V0VmFsdWUoXCJDYXRlZ29yeVwiLCBcIkJpbmRpbmdBY2NvdW50XCIpO1xuICAgICAgICAgICAgZGV2aWNlSW5mb09iakZvckluc2VydC5zZXRWYWx1ZShcIkNhdGVnb3J5VmFsXCIsIEpTT04uc3RyaW5naWZ5KHsgYWNjb3VudDogdGhpcy5hY2NvdW50IH0pKTtcbiAgICAgICAgICAgIGRldmljZUluZm9PYmpGb3JJbnNlcnQuc2V0VmFsdWUoXCJVcGRhdGVUaW1lXCIsIERhdGUubm93KCkpO1xuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGRldmljZUluZm9PYmpGb3JJbnNlcnQpO1xuICAgICAgICAgICAgcmV0dXJuIGRhby5ydW5UcmFuc2FjdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIl19