/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from "rxjs";
import { ClientCustomDao } from '../../device/sqlite';
import { EqualRestriction } from '../../device/sqlite';
export class DeviceAccountAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getDeviceAccount';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getDeviceAccount.json';
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
            let deviceInfoObj = this._DaoFactory.getTable('Profile', "TW_LH_SD_DeviceInfo");
            /** @type {?} */
            let dao = this._DaoFactory.getDao('Profile');
            if (deviceInfoObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                deviceInfoObj.addRestriction(new EqualRestriction('Category', ["BindingAccount"]));
                dao.queryByTable(deviceInfoObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    console.log("getDeviceAccount API resp:", resp);
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
    DeviceAccountAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlQWNjb3VudEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL0RldmljZUFjY291bnRBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQU0sTUFBTSxNQUFNLENBQUM7QUFJdEMsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLHFCQUFxQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE1BQU07Ozs7SUFFRixZQUFZLFVBQXNCO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFHRCxVQUFVO1FBQ04sT0FBTyxrQkFBa0IsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8scUNBQXFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUNELFVBQVU7UUFDTixPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs7Z0JBQzlCLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUM7O2dCQUUzRSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQzVDLElBQUksYUFBYSxJQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUNoRCxHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkYsR0FBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9DLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQyxFQUFDLENBQUM7YUFDTjtpQkFBTTtnQkFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkI7UUFDTCxDQUFDLEVBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSjs7Ozs7O0lBaENHLHVDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSUFQSSB9IGZyb20gXCIuLi9BUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCIuLi9Nb2NrQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gXCIuLi9TUUxpdGVBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBDbGllbnRDdXN0b21EYW8sIERhb0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlJztcbmltcG9ydCB7IEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlJztcblxuZXhwb3J0IGNsYXNzIERldmljZUFjY291bnRBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG4gICAgcHJpdmF0ZSBfRGFvRmFjdG9yeTogRGFvRmFjdG9yeTtcbiAgICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX0Rhb0ZhY3RvcnkgPSBEYW9GYWN0b3J5O1xuICAgIH1cblxuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2dldERldmljZUFjY291bnQnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXREZXZpY2VBY2NvdW50Lmpzb24nO1xuICAgIH1cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBkZXZpY2VJbmZvT2JqID0gdGhpcy5fRGFvRmFjdG9yeS5nZXRUYWJsZSgnUHJvZmlsZScsIFwiVFdfTEhfU0RfRGV2aWNlSW5mb1wiKTtcblxuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGFvKCdQcm9maWxlJyk7XG4gICAgICAgICAgICBpZiAoZGV2aWNlSW5mb09iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgICAgICAgICBkZXZpY2VJbmZvT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDYXRlZ29yeScsIFtcIkJpbmRpbmdBY2NvdW50XCJdKSk7XG4gICAgICAgICAgICAgICAgZGFvLnF1ZXJ5QnlUYWJsZShkZXZpY2VJbmZvT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXREZXZpY2VBY2NvdW50IEFQSSByZXNwOlwiLHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==