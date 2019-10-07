/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction, StringUtils } from "@allianzSND/core";
import { Observable } from 'rxjs';
export class CustomerAutoDeleteAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    setClientID(id) {
        this._clientID = id;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCustomerAutoDelete';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCustomerAutoDelete.json';
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
            let messageObj = this.daoFactory.getDefaultTable("TW_LH_SD_Message");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (messageObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                if (StringUtils.isNotEmpty(this._clientID)) {
                    messageObj.addRestriction(new EqualRestriction("ClientID", [this._clientID]));
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJBdXRvRGVsZXRlQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvYXBpL0N1c3RvbWVyQXV0b0RlbGV0ZUFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUE4QixlQUFlLEVBQWMsZ0JBQWdCLEVBQTBDLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xLLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFFNUMsTUFBTTs7OztJQUlKLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFFMUMsQ0FBQzs7Ozs7SUFHRCxXQUFXLENBQUMsRUFBRTtRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyx1QkFBdUIsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8sMENBQTBDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs7Z0JBQ2hDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQzs7Z0JBQ2hFLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN6QyxJQUFJLFVBQVUsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtnQkFFN0MsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUUvQixJQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUN6QyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0U7cUJBQ0k7b0JBQ0gsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdkU7Z0JBRUQsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRixVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsYUFBYSxFQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUU5RSxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDOUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQzthQUVOO2lCQUVJO2dCQUNILFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtRQUVILENBQUMsRUFBQyxDQUFDO1FBQ0QseUVBQXlFO1FBR3pFLHNFQUFzRTtRQUN0RSxtREFBbUQ7UUFFbkQsOEVBQThFO1FBQzlFLDREQUE0RDtRQUM1RCxpRkFBaUY7UUFDakYsc0VBQXNFO1FBRXRFLHFCQUFxQjtRQUNyQixTQUFTO1FBSVQsT0FBTztJQUVYLENBQUM7Q0FLRjs7Ozs7O0lBekVDLDBDQUEwQjs7Ozs7SUFDMUIsd0NBQXdCOzs7OztJQUNaLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEksIElNb2NrQVBJLCBEYW9GYWN0b3J5LCBDbGllbnRDdXN0b21EYW8sIElTUUxpdGVBUEksIEVxdWFsUmVzdHJpY3Rpb24sIFNRTGl0ZVRhYmxlLCBTUUxDb21tYW5kLCBJblJlc3RyaWN0aW9uLCBTdHJpbmdVdGlscyB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJBdXRvRGVsZXRlQVBJIGltcGxlbWVudHMgSUFQSSAsIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcbiAgICBcbiAgcHJpdmF0ZSBfY2xpZW50SUQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3RhdHVzOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gIH1cblxuICBcbiAgc2V0Q2xpZW50SUQoaWQpIHtcbiAgICB0aGlzLl9jbGllbnRJRCA9IGlkO1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpIDogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnZ2V0Q3VzdG9tZXJBdXRvRGVsZXRlJztcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCkgOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldEN1c3RvbWVyQXV0b0RlbGV0ZS5qc29uJztcbiAgfVxuXG4gIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBsZXQgbWVzc2FnZU9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9NZXNzYWdlXCIpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAobWVzc2FnZU9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIFxuICAgICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuX2NsaWVudElEKSkge1xuICAgICAgICAgICAgbWVzc2FnZU9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIkNsaWVudElEXCIsIFt0aGlzLl9jbGllbnRJRF0pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiU3RhdHVzXCIsIFsnVW5SZWFkJ10pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXNzYWdlT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiTWVzc2FnZUNhdGVnb3J5XCIsIFsnQ3VzdG9tZXInXSkpO1xuICAgICAgICAgIG1lc3NhZ2VPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJNZXNzYWdlVHlwZVwiLFsnQXV0b0RlbGV0ZSddKSk7XG5cbiAgICAgICAgICBkYW8ucXVlcnlCeVRhYmxlKG1lc3NhZ2VPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgICAgZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gICAgICAvLyAgIHJldHVybiBmcm9tKGRhby5xdWVyeUJ5VGFibGUobWVzc2FnZU9iaikudG9Qcm9taXNlKCkudGhlbiggcmVzcCA9PiB7XG5cblxuICAgICAgLy8gICAgIGxldCBtZXNzYWdlQXJndW1lbnQgPSBKU09OLnBhcnNlKHJlc3BbJ0JvZHknXVswXVsnY3VzdG9tZXJzJ10pO1xuICAgICAgLy8gICAgIGxldCBjdXN0b21lcklETGlzdCA9IG1lc3NhZ2VBcmd1bWVudFsnaWRzJ107XG5cbiAgICAgIC8vICAgICBsZXQgY3VzdG9tZXJPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJcIik7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coXCJjdXN0b21lcklETGlzdEluQVBJOiBcIiwgY3VzdG9tZXJJRExpc3QpO1xuICAgICAgLy8gICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBJblJlc3RyaWN0aW9uKFwiQ2xpZW50SURcIiwgY3VzdG9tZXJJRExpc3QpKTtcbiAgICAgIC8vICAgICByZXR1cm4gZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lck9iaikudG9Qcm9taXNlKCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICBcbiAgICAgIC8vICAgICAgIHJldHVybiByZXNwO1xuICAgICAgLy8gICAgIH0pXG4gICAgICAgIFxuICAgICAgXG4gICAgICAgICAgXG4gICAgICAvLyB9KSk7XG4gICAgICBcbiAgfSBcblxuICAgIFxuICBcbiAgICBcbn1cbiJdfQ==