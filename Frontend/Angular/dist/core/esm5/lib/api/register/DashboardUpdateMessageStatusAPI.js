/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '../../device/sqlite/ClientCustomDao';
import { EqualRestriction } from '../../device/sqlite/restrictions/EqualRestriction';
import { InRestriction } from '../../device/sqlite/restrictions/InRestriction';
var DashboardUpdateMessageStatusAPI = /** @class */ (function () {
    function DashboardUpdateMessageStatusAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this._clientIDList = [];
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    DashboardUpdateMessageStatusAPI.prototype.setClientID = /**
     * @param {?} clientID
     * @return {?}
     */
    function (clientID) {
        this._clientID = clientID;
    };
    /**
     * @param {?} list
     * @return {?}
     */
    DashboardUpdateMessageStatusAPI.prototype.setClientIDList = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        this._clientIDList = list;
    };
    /**
     * @param {?} status
     * @return {?}
     */
    DashboardUpdateMessageStatusAPI.prototype.setStatus = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this._status = status;
    };
    /**
     * @return {?}
     */
    DashboardUpdateMessageStatusAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'updateDashboardMessageStatus';
    };
    /**
     * @return {?}
     */
    DashboardUpdateMessageStatusAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/saveSuccess.json';
    };
    /**
     * @return {?}
     */
    DashboardUpdateMessageStatusAPI.prototype.executeSQL = /**
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
            var dao = _this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                //save customer data
                /** @type {?} */
                var messageObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Message");
                if (messageObj) {
                    dao = new ClientCustomDao(dao);
                    messageObj = ((/** @type {?} */ (messageObj)));
                    if (_this._clientIDList.length > 0) {
                        messageObj.addRestriction(new InRestriction('ClientID', _this._clientIDList));
                    }
                    else {
                        messageObj.addRestriction(new EqualRestriction('ClientID', [_this._clientID]));
                    }
                    messageObj.setValue("Status", _this._status);
                    dao.updateByTable(messageObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
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
    };
    return DashboardUpdateMessageStatusAPI;
}());
export { DashboardUpdateMessageStatusAPI };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFzaGJvYXJkVXBkYXRlTWVzc2FnZVN0YXR1c0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL0Rhc2hib2FyZFVwZGF0ZU1lc3NhZ2VTdGF0dXNBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRXJGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUcvRTtJQU1JLHlDQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSGxDLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztJQUsxQyxDQUFDOzs7OztJQUVELHFEQUFXOzs7O0lBQVgsVUFBWSxRQUFnQjtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELHlEQUFlOzs7O0lBQWYsVUFBZ0IsSUFBbUI7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxtREFBUzs7OztJQUFULFVBQVUsTUFBYztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsb0RBQVU7OztJQUFWO1FBQ0ksT0FBTyw4QkFBOEIsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQscURBQVc7OztJQUFYO1FBQ0ksT0FBTyxnQ0FBZ0MsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsb0RBQVU7OztJQUFWO1FBQUEsaUJBc0NDO1FBcENHLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQVE7O2dCQUMxQixHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFOzs7b0JBR2QsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDO2dCQUNwRSxJQUFJLFVBQVUsRUFBRTtvQkFDWixHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRS9CLFVBQVUsR0FBRyxDQUFDLG1CQUFhLFVBQVUsRUFBQSxDQUFDLENBQUM7b0JBR3ZDLElBQUksS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUMvQixVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksYUFBYSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztxQkFDaEY7eUJBQU07d0JBQ0gsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2pGO29CQUNELFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFNUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTOzs7O29CQUFDLFVBQUMsSUFBSTt3QkFFekMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN4QixDQUFDLEVBQUMsQ0FBQztpQkFDTjtxQkFDSTtvQkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3ZCO2FBRUo7aUJBQ0k7Z0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsc0NBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDOzs7Ozs7O0lBbkVHLG9EQUEwQjs7Ozs7SUFDMUIsd0RBQTBDOzs7OztJQUMxQyxrREFBd0I7Ozs7O0lBRVoscURBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4uL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tICcuLi9Nb2NrQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSAnLi4vU1FMaXRlQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5JztcbmltcG9ydCB7IENsaWVudEN1c3RvbURhbyB9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUvQ2xpZW50Q3VzdG9tRGFvJztcbmltcG9ydCB7IEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9FcXVhbFJlc3RyaWN0aW9uJztcbmltcG9ydCB7IFNRTGl0ZVRhYmxlIH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9TUUxpdGVUYWJsZSc7XG5pbXBvcnQgeyBJblJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvSW5SZXN0cmljdGlvbic7XG5cblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFVwZGF0ZU1lc3NhZ2VTdGF0dXNBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG5cbiAgICBwcml2YXRlIF9jbGllbnRJRDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2NsaWVudElETGlzdDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIHByaXZhdGUgX3N0YXR1czogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG5cbiAgICB9XG5cbiAgICBzZXRDbGllbnRJRChjbGllbnRJRDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2NsaWVudElEID0gY2xpZW50SUQ7XG4gICAgfVxuXG4gICAgc2V0Q2xpZW50SURMaXN0KGxpc3Q6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5fY2xpZW50SURMaXN0ID0gbGlzdDtcbiAgICB9XG5cbiAgICBzZXRTdGF0dXMoc3RhdHVzOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICd1cGRhdGVEYXNoYm9hcmRNZXNzYWdlU3RhdHVzJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svc2F2ZVN1Y2Nlc3MuanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgaWYgKGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIC8vc2F2ZSBjdXN0b21lciBkYXRhXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZU9iaikge1xuICAgICAgICAgICAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU9iaiA9ICg8U1FMaXRlVGFibGU+bWVzc2FnZU9iaik7XG5cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2xpZW50SURMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VPYmouYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oJ0NsaWVudElEJywgdGhpcy5fY2xpZW50SURMaXN0KSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDbGllbnRJRCcsIFt0aGlzLl9jbGllbnRJRF0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiU3RhdHVzXCIsIHRoaXMuX3N0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGFvLnVwZGF0ZUJ5VGFibGUobWVzc2FnZU9iaikuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19