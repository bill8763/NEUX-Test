/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '../../device/sqlite/ClientCustomDao';
import { EqualRestriction } from '../../device/sqlite/restrictions/EqualRestriction';
import { InRestriction } from '../../device/sqlite/restrictions/InRestriction';
export class DashboardUpdateMessageStatusAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._clientIDList = [];
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    setClientID(clientID) {
        this._clientID = clientID;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    setClientIDList(list) {
        this._clientIDList = list;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setStatus(status) {
        this._status = status;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'updateDashboardMessageStatus';
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
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                //save customer data
                /** @type {?} */
                let messageObj = this.daoFactory.getDefaultTable("TW_LH_SD_Message");
                if (messageObj) {
                    dao = new ClientCustomDao(dao);
                    messageObj = ((/** @type {?} */ (messageObj)));
                    if (this._clientIDList.length > 0) {
                        messageObj.addRestriction(new InRestriction('ClientID', this._clientIDList));
                    }
                    else {
                        messageObj.addRestriction(new EqualRestriction('ClientID', [this._clientID]));
                    }
                    messageObj.setValue("Status", this._status);
                    dao.updateByTable(messageObj).subscribe((/**
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
    DashboardUpdateMessageStatusAPI.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    DashboardUpdateMessageStatusAPI.prototype._clientIDList;
    /**
     * @type {?}
     * @private
     */
    DashboardUpdateMessageStatusAPI.prototype._status;
    /**
     * @type {?}
     * @private
     */
    DashboardUpdateMessageStatusAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFzaGJvYXJkVXBkYXRlTWVzc2FnZVN0YXR1c0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL0Rhc2hib2FyZFVwZGF0ZU1lc3NhZ2VTdGF0dXNBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRXJGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUcvRSxNQUFNOzs7O0lBTUYsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUhsQyxrQkFBYSxHQUFrQixFQUFFLENBQUM7SUFLMUMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBZ0I7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBbUI7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsVUFBVTtRQUNOLE9BQU8sOEJBQThCLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLGdDQUFnQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxVQUFVO1FBRU4sT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7O2dCQUM5QixHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFOzs7b0JBR2QsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDO2dCQUNwRSxJQUFJLFVBQVUsRUFBRTtvQkFDWixHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRS9CLFVBQVUsR0FBRyxDQUFDLG1CQUFhLFVBQVUsRUFBQSxDQUFDLENBQUM7b0JBR3ZDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUMvQixVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztxQkFDaEY7eUJBQU07d0JBQ0gsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2pGO29CQUNELFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFNUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTOzs7O29CQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBRTdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQyxFQUFDLENBQUM7aUJBQ047cUJBQ0k7b0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUN2QjthQUVKO2lCQUNJO2dCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN2QjtRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKOzs7Ozs7SUFuRUcsb0RBQTBCOzs7OztJQUMxQix3REFBMEM7Ozs7O0lBQzFDLGtEQUF3Qjs7Ozs7SUFFWixxREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi4vQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gJy4uL01vY2tBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICcuLi9TUUxpdGVBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnknO1xuaW1wb3J0IHsgQ2xpZW50Q3VzdG9tRGFvIH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9DbGllbnRDdXN0b21EYW8nO1xuaW1wb3J0IHsgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0VxdWFsUmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgU1FMaXRlVGFibGUgfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVRhYmxlJztcbmltcG9ydCB7IEluUmVzdHJpY3Rpb24gfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9JblJlc3RyaWN0aW9uJztcblxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkVXBkYXRlTWVzc2FnZVN0YXR1c0FQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICAgIHByaXZhdGUgX2NsaWVudElEOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfY2xpZW50SURMaXN0OiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHJpdmF0ZSBfc3RhdHVzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cblxuICAgIHNldENsaWVudElEKGNsaWVudElEOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICB9XG5cbiAgICBzZXRDbGllbnRJRExpc3QobGlzdDogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICB0aGlzLl9jbGllbnRJRExpc3QgPSBsaXN0O1xuICAgIH1cblxuICAgIHNldFN0YXR1cyhzdGF0dXM6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ3VwZGF0ZURhc2hib2FyZE1lc3NhZ2VTdGF0dXMnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9zYXZlU3VjY2Vzcy5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgICAgICBpZiAoZGFvICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgLy9zYXZlIGN1c3RvbWVyIGRhdGFcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZU9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9NZXNzYWdlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcblxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlT2JqID0gKDxTUUxpdGVUYWJsZT5tZXNzYWdlT2JqKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jbGllbnRJRExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU9iai5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbignQ2xpZW50SUQnLCB0aGlzLl9jbGllbnRJRExpc3QpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJywgW3RoaXMuX2NsaWVudElEXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VPYmouc2V0VmFsdWUoXCJTdGF0dXNcIiwgdGhpcy5fc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICBkYW8udXBkYXRlQnlUYWJsZShtZXNzYWdlT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=