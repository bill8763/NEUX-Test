/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction } from "@allianzSND/core";
import { Observable } from 'rxjs';
var CustomerDeleteContactNoteAPI = /** @class */ (function () {
    function CustomerDeleteContactNoteAPI(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} contactClientID
     * @return {?}
     */
    CustomerDeleteContactNoteAPI.prototype.setContactClientID = /**
     * @param {?} contactClientID
     * @return {?}
     */
    function (contactClientID) {
        this.contactClientID = contactClientID;
    };
    /**
     * @return {?}
     */
    CustomerDeleteContactNoteAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'deleteCustomerContactNote';
    };
    /**
     * @return {?}
     */
    CustomerDeleteContactNoteAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/saveSuccess.json';
    };
    /**
     * @return {?}
     */
    CustomerDeleteContactNoteAPI.prototype.executeSQL = /**
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
                contactObj.addRestriction(new EqualRestriction('ClientID', [_this.contactClientID]));
                dao.deleteByTable(contactObj).subscribe((/**
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
    };
    return CustomerDeleteContactNoteAPI;
}());
export { CustomerDeleteContactNoteAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerDeleteContactNoteAPI.prototype.contactClientID;
    /**
     * @type {?}
     * @private
     */
    CustomerDeleteContactNoteAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJEZWxldGVDb250YWN0Tm90ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2FwaS9DdXN0b21lckRlbGV0ZUNvbnRhY3ROb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQThCLGVBQWUsRUFBYyxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEM7SUFHRSxzQ0FBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUUxQyxDQUFDOzs7OztJQUVELHlEQUFrQjs7OztJQUFsQixVQUFtQixlQUF3QjtRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsaURBQVU7OztJQUFWO1FBQ0UsT0FBTywyQkFBMkIsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsa0RBQVc7OztJQUFYO1FBQ0UsT0FBTyxnQ0FBZ0MsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsaURBQVU7OztJQUFWO1FBQUEsaUJBbUJDO1FBbEJDLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQVE7O2dCQUM1QixVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLENBQUM7O2dCQUN6RSxHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxVQUFVLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBRS9DLEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFL0IsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBQyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRW5GLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLElBQUk7b0JBQzNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxtQ0FBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7Ozs7Ozs7SUF0Q0MsdURBQWlDOzs7OztJQUVyQixrREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJLCBJTW9ja0FQSSwgRGFvRmFjdG9yeSwgQ2xpZW50Q3VzdG9tRGFvLCBJU1FMaXRlQVBJLCBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRGVsZXRlQ29udGFjdE5vdGVBUEkgaW1wbGVtZW50cyBJQVBJICwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuICBwcml2YXRlIGNvbnRhY3RDbGllbnRJRDogIHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICB9XG5cbiAgc2V0Q29udGFjdENsaWVudElEKGNvbnRhY3RDbGllbnRJRCA6IHN0cmluZykge1xuICAgIHRoaXMuY29udGFjdENsaWVudElEID0gY29udGFjdENsaWVudElEO1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpIDogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2RlbGV0ZUN1c3RvbWVyQ29udGFjdE5vdGUnO1xuICB9XG5cbiAgZ2V0TW9ja1BhdGgoKSA6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL3NhdmVTdWNjZXNzLmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBjb250YWN0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0NvbnRhY3RcIik7XG4gICAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgIGlmIChjb250YWN0T2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIFxuICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cbiAgICAgICAgY29udGFjdE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLFt0aGlzLmNvbnRhY3RDbGllbnRJRF0pKTtcbiAgICAgIFxuICAgICAgICBkYW8uZGVsZXRlQnlUYWJsZShjb250YWN0T2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==