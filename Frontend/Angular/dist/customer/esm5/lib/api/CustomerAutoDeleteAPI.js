/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction, StringUtils } from "@allianzSND/core";
import { Observable } from 'rxjs';
var CustomerAutoDeleteAPI = /** @class */ (function () {
    function CustomerAutoDeleteAPI(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    CustomerAutoDeleteAPI.prototype.setClientID = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._clientID = id;
    };
    /**
     * @return {?}
     */
    CustomerAutoDeleteAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getCustomerAutoDelete';
    };
    /**
     * @return {?}
     */
    CustomerAutoDeleteAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getCustomerAutoDelete.json';
    };
    /**
     * @return {?}
     */
    CustomerAutoDeleteAPI.prototype.executeSQL = /**
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
            var messageObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Message");
            /** @type {?} */
            var dao = _this.daoFactory.getDefaultDao();
            if (messageObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                if (StringUtils.isNotEmpty(_this._clientID)) {
                    messageObj.addRestriction(new EqualRestriction("ClientID", [_this._clientID]));
                }
                else {
                    messageObj.addRestriction(new EqualRestriction("Status", ['UnRead']));
                }
                messageObj.addRestriction(new EqualRestriction("MessageCategory", ['Customer']));
                messageObj.addRestriction(new EqualRestriction("MessageType", ['AutoDelete']));
                dao.queryByTable(messageObj).subscribe((/**
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
        }));
        //   return from(dao.queryByTable(messageObj).toPromise().then( resp => {
        //     let messageArgument = JSON.parse(resp['Body'][0]['customers']);
        //     let customerIDList = messageArgument['ids'];
        //     let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
        //     console.log("customerIDListInAPI: ", customerIDList);
        //     customerObj.addRestriction(new InRestriction("ClientID", customerIDList));
        //     return dao.queryByTable(customerObj).toPromise().then(resp => {
        //       return resp;
        //     })
        // }));
    };
    return CustomerAutoDeleteAPI;
}());
export { CustomerAutoDeleteAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerAutoDeleteAPI.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    CustomerAutoDeleteAPI.prototype._status;
    /**
     * @type {?}
     * @private
     */
    CustomerAutoDeleteAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJBdXRvRGVsZXRlQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvYXBpL0N1c3RvbWVyQXV0b0RlbGV0ZUFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUE4QixlQUFlLEVBQWMsZ0JBQWdCLEVBQTBDLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xLLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFFNUM7SUFJRSwrQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUUxQyxDQUFDOzs7OztJQUdELDJDQUFXOzs7O0lBQVgsVUFBWSxFQUFFO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDBDQUFVOzs7SUFBVjtRQUNJLE9BQU8sdUJBQXVCLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNJLE9BQU8sMENBQTBDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELDBDQUFVOzs7SUFBVjtRQUFBLGlCQWlEQztRQWhEQyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFROztnQkFDNUIsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDOztnQkFDaEUsR0FBRyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3pDLElBQUksVUFBVSxJQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUU3QyxHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRS9CLElBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ3pDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMvRTtxQkFDSTtvQkFDSCxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN2RTtnQkFFRCxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pGLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTlFLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLElBQUk7b0JBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFDLENBQUM7YUFFTjtpQkFFSTtnQkFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFFSCxDQUFDLEVBQUMsQ0FBQztRQUNELHlFQUF5RTtRQUd6RSxzRUFBc0U7UUFDdEUsbURBQW1EO1FBRW5ELDhFQUE4RTtRQUM5RSw0REFBNEQ7UUFDNUQsaUZBQWlGO1FBQ2pGLHNFQUFzRTtRQUV0RSxxQkFBcUI7UUFDckIsU0FBUztRQUlULE9BQU87SUFFWCxDQUFDO0lBS0gsNEJBQUM7QUFBRCxDQUFDLEFBM0VELElBMkVDOzs7Ozs7O0lBekVDLDBDQUEwQjs7Ozs7SUFDMUIsd0NBQXdCOzs7OztJQUNaLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEksIElNb2NrQVBJLCBEYW9GYWN0b3J5LCBDbGllbnRDdXN0b21EYW8sIElTUUxpdGVBUEksIEVxdWFsUmVzdHJpY3Rpb24sIFNRTGl0ZVRhYmxlLCBTUUxDb21tYW5kLCBJblJlc3RyaWN0aW9uLCBTdHJpbmdVdGlscyB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJBdXRvRGVsZXRlQVBJIGltcGxlbWVudHMgSUFQSSAsIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcbiAgICBcbiAgcHJpdmF0ZSBfY2xpZW50SUQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3RhdHVzOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gIH1cblxuICBcbiAgc2V0Q2xpZW50SUQoaWQpIHtcbiAgICB0aGlzLl9jbGllbnRJRCA9IGlkO1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpIDogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnZ2V0Q3VzdG9tZXJBdXRvRGVsZXRlJztcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCkgOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldEN1c3RvbWVyQXV0b0RlbGV0ZS5qc29uJztcbiAgfVxuXG4gIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBsZXQgbWVzc2FnZU9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9NZXNzYWdlXCIpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAobWVzc2FnZU9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIFxuICAgICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuX2NsaWVudElEKSkge1xuICAgICAgICAgICAgbWVzc2FnZU9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIkNsaWVudElEXCIsIFt0aGlzLl9jbGllbnRJRF0pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiU3RhdHVzXCIsIFsnVW5SZWFkJ10pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiTWVzc2FnZUNhdGVnb3J5XCIsIFsnQ3VzdG9tZXInXSkpO1xuICAgICAgICAgIG1lc3NhZ2VPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJNZXNzYWdlVHlwZVwiLFsnQXV0b0RlbGV0ZSddKSk7XG5cbiAgICAgICAgICBkYW8ucXVlcnlCeVRhYmxlKG1lc3NhZ2VPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgICAgZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gICAgICAvLyAgIHJldHVybiBmcm9tKGRhby5xdWVyeUJ5VGFibGUobWVzc2FnZU9iaikudG9Qcm9taXNlKCkudGhlbiggcmVzcCA9PiB7XG5cblxuICAgICAgLy8gICAgIGxldCBtZXNzYWdlQXJndW1lbnQgPSBKU09OLnBhcnNlKHJlc3BbJ0JvZHknXVswXVsnY3VzdG9tZXJzJ10pO1xuICAgICAgLy8gICAgIGxldCBjdXN0b21lcklETGlzdCA9IG1lc3NhZ2VBcmd1bWVudFsnaWRzJ107XG5cbiAgICAgIC8vICAgICBsZXQgY3VzdG9tZXJPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJcIik7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coXCJjdXN0b21lcklETGlzdEluQVBJOiBcIiwgY3VzdG9tZXJJRExpc3QpO1xuICAgICAgLy8gICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBJblJlc3RyaWN0aW9uKFwiQ2xpZW50SURcIiwgY3VzdG9tZXJJRExpc3QpKTtcbiAgICAgIC8vICAgICByZXR1cm4gZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lck9iaikudG9Qcm9taXNlKCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICBcbiAgICAgIC8vICAgICAgIHJldHVybiByZXNwO1xuICAgICAgLy8gICAgIH0pXG4gICAgICAgIFxuICAgICAgXG4gICAgICAgICAgXG4gICAgICAvLyB9KSk7XG4gICAgICBcbiAgfSBcblxuICAgIFxuICBcbiAgICBcbn1cbiJdfQ==