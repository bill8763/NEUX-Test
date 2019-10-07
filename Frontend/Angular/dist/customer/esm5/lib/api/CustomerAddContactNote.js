/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction } from "@allianzSND/core";
import { Observable } from 'rxjs';
var CustomerAddContactNoteAPI = /** @class */ (function () {
    function CustomerAddContactNoteAPI(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    CustomerAddContactNoteAPI.prototype.setClientID = /**
     * @param {?} clientID
     * @return {?}
     */
    function (clientID) {
        this.clientID = clientID;
    };
    /**
     * @param {?} customerClientID
     * @return {?}
     */
    CustomerAddContactNoteAPI.prototype.setCustomerClientID = /**
     * @param {?} customerClientID
     * @return {?}
     */
    function (customerClientID) {
        this.customerClientID = customerClientID;
    };
    /**
     * @param {?} note
     * @return {?}
     */
    CustomerAddContactNoteAPI.prototype.setNote = /**
     * @param {?} note
     * @return {?}
     */
    function (note) {
        this.note = note;
    };
    /**
     * @param {?} noteTime
     * @return {?}
     */
    CustomerAddContactNoteAPI.prototype.setNoteTime = /**
     * @param {?} noteTime
     * @return {?}
     */
    function (noteTime) {
        this.noteTime = noteTime;
    };
    /**
     * @return {?}
     */
    CustomerAddContactNoteAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'addCustomerContactNote';
    };
    /**
     * @return {?}
     */
    CustomerAddContactNoteAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/saveSuccess.json';
    };
    /**
     * @return {?}
     */
    CustomerAddContactNoteAPI.prototype.executeSQL = /**
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
            var contactObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact");
            /** @type {?} */
            var dao = _this.daoFactory.getDefaultDao();
            if (contactObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                contactObj.setValue('CustomerClientID', _this.customerClientID);
                contactObj.setValue('Note', _this.note);
                contactObj.setValue('NoteTime', _this.noteTime.getTime());
                if (_this.clientID != undefined) {
                    contactObj.addRestriction(new EqualRestriction('ClientID', [_this.clientID]));
                    dao.updateByTable(contactObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        observer.next(resp);
                        observer.complete();
                    }));
                }
                else {
                    dao.insertByTable(contactObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        observer.next(resp);
                        observer.complete();
                    }));
                }
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    };
    return CustomerAddContactNoteAPI;
}());
export { CustomerAddContactNoteAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerAddContactNoteAPI.prototype.clientID;
    /**
     * @type {?}
     * @private
     */
    CustomerAddContactNoteAPI.prototype.customerClientID;
    /**
     * @type {?}
     * @private
     */
    CustomerAddContactNoteAPI.prototype.note;
    /**
     * @type {?}
     * @private
     */
    CustomerAddContactNoteAPI.prototype.noteTime;
    /**
     * @type {?}
     * @private
     */
    CustomerAddContactNoteAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJBZGRDb250YWN0Tm90ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2FwaS9DdXN0b21lckFkZENvbnRhY3ROb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQThCLGVBQWUsRUFBYyxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEM7SUFNRSxtQ0FBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUUxQyxDQUFDOzs7OztJQUVELCtDQUFXOzs7O0lBQVgsVUFBWSxRQUFpQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELHVEQUFtQjs7OztJQUFuQixVQUFvQixnQkFBeUI7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsMkNBQU87Ozs7SUFBUCxVQUFRLElBQWE7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCwrQ0FBVzs7OztJQUFYLFVBQVksUUFBZTtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsOENBQVU7OztJQUFWO1FBQ0UsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0UsT0FBTyxnQ0FBZ0MsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsOENBQVU7OztJQUFWO1FBQUEsaUJBZ0NDO1FBL0JDLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQVE7O2dCQUM1QixVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLENBQUM7O2dCQUN6RSxHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxVQUFVLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBRS9DLEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFL0IsVUFBVSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDL0QsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBRXpELElBQUcsS0FBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLEVBQUU7b0JBQzdCLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1RSxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVM7Ozs7b0JBQUMsVUFBQyxJQUFJO3dCQUMzQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3RCLENBQUMsRUFBQyxDQUFDO2lCQUNKO3FCQUNJO29CQUNILEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUzs7OztvQkFBQyxVQUFDLElBQUk7d0JBQzNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7YUFHRjtpQkFBTTtnQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQUFuRUQsSUFtRUM7Ozs7Ozs7SUFsRUMsNkNBQTBCOzs7OztJQUMxQixxREFBa0M7Ozs7O0lBQ2xDLHlDQUFzQjs7Ozs7SUFDdEIsNkNBQXdCOzs7OztJQUVaLCtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEksIElNb2NrQVBJLCBEYW9GYWN0b3J5LCBDbGllbnRDdXN0b21EYW8sIElTUUxpdGVBUEksIEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJBZGRDb250YWN0Tm90ZUFQSSBpbXBsZW1lbnRzIElBUEkgLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG4gIHByaXZhdGUgY2xpZW50SUQgOiBzdHJpbmc7XG4gIHByaXZhdGUgY3VzdG9tZXJDbGllbnRJRDogIHN0cmluZztcbiAgcHJpdmF0ZSBub3RlIDogc3RyaW5nO1xuICBwcml2YXRlIG5vdGVUaW1lIDogRGF0ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICB9XG4gIFxuICBzZXRDbGllbnRJRChjbGllbnRJRCA6IHN0cmluZykge1xuICAgIHRoaXMuY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgfVxuXG4gIHNldEN1c3RvbWVyQ2xpZW50SUQoY3VzdG9tZXJDbGllbnRJRCA6IHN0cmluZykge1xuICAgIHRoaXMuY3VzdG9tZXJDbGllbnRJRCA9IGN1c3RvbWVyQ2xpZW50SUQ7XG4gIH1cblxuICBzZXROb3RlKG5vdGUgOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5vdGUgPSBub3RlO1xuICB9XG5cbiAgc2V0Tm90ZVRpbWUobm90ZVRpbWUgOiBEYXRlKSB7XG4gICAgdGhpcy5ub3RlVGltZSA9IG5vdGVUaW1lO1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpIDogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2FkZEN1c3RvbWVyQ29udGFjdE5vdGUnO1xuICB9XG5cbiAgZ2V0TW9ja1BhdGgoKSA6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL3NhdmVTdWNjZXNzLmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBjb250YWN0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0NvbnRhY3RcIik7XG4gICAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgIGlmIChjb250YWN0T2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIFxuICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cbiAgICAgICAgY29udGFjdE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIHRoaXMuY3VzdG9tZXJDbGllbnRJRCk7XG4gICAgICAgIGNvbnRhY3RPYmouc2V0VmFsdWUoJ05vdGUnLCB0aGlzLm5vdGUpO1xuICAgICAgICBjb250YWN0T2JqLnNldFZhbHVlKCdOb3RlVGltZScsIHRoaXMubm90ZVRpbWUuZ2V0VGltZSgpKTtcbiAgICAgIFxuICAgICAgICBpZih0aGlzLmNsaWVudElEICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnRhY3RPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJyxbdGhpcy5jbGllbnRJRF0pKTtcbiAgICAgICAgICBkYW8udXBkYXRlQnlUYWJsZShjb250YWN0T2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhby5pbnNlcnRCeVRhYmxlKGNvbnRhY3RPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=