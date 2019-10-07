/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction, StringUtils } from "@allianzSND/core";
import { Observable } from 'rxjs';
var CustomerEditOvertimeAPI = /** @class */ (function () {
    function CustomerEditOvertimeAPI(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    CustomerEditOvertimeAPI.prototype.setClientID = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._clientID = id;
    };
    /**
     * @return {?}
     */
    CustomerEditOvertimeAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getCustomerOverTime';
    };
    /**
     * @return {?}
     */
    CustomerEditOvertimeAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getCustomerOverTime.json';
    };
    /**
     * @return {?}
     */
    CustomerEditOvertimeAPI.prototype.executeSQL = /**
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
                messageObj.addRestriction(new EqualRestriction("MessageType", ['OverTime']));
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
    };
    return CustomerEditOvertimeAPI;
}());
export { CustomerEditOvertimeAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerEditOvertimeAPI.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    CustomerEditOvertimeAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJFZGl0T3ZlcnRpbWVBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9hcGkvQ3VzdG9tZXJFZGl0T3ZlcnRpbWVBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBOEIsZUFBZSxFQUFjLGdCQUFnQixFQUFpQixXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6SSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBRTVDO0lBR0UsaUNBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFFMUMsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksRUFBRTtRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCw0Q0FBVTs7O0lBQVY7UUFDSSxPQUFPLHFCQUFxQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDSSxPQUFPLHdDQUF3QyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCw0Q0FBVTs7O0lBQVY7UUFBQSxpQkFrQ0M7UUFoQ0MsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsUUFBUTs7Z0JBQzVCLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQzs7Z0JBQ2hFLEdBQUcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN6QyxJQUFJLFVBQVUsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtnQkFFN0MsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUUvQixJQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUN6QyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0U7cUJBQ0k7b0JBQ0gsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdkU7Z0JBRUQsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRixVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsYUFBYSxFQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUc1RSxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQyxJQUFJO29CQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBQyxDQUFDO2FBRU47aUJBRUk7Z0JBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JCO1FBRUgsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDO0lBRUgsOEJBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDOzs7Ozs7O0lBckRDLDRDQUEwQjs7Ozs7SUFDZCw2Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJLCBJTW9ja0FQSSwgRGFvRmFjdG9yeSwgQ2xpZW50Q3VzdG9tRGFvLCBJU1FMaXRlQVBJLCBFcXVhbFJlc3RyaWN0aW9uLCBJblJlc3RyaWN0aW9uLCBTdHJpbmdVdGlscyB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgZnJvbSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJFZGl0T3ZlcnRpbWVBUEkgaW1wbGVtZW50cyBJQVBJICwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuICAgIFxuICBwcml2YXRlIF9jbGllbnRJRDogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICB9XG5cbiAgc2V0Q2xpZW50SUQoaWQpIHtcbiAgICB0aGlzLl9jbGllbnRJRCA9IGlkO1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpIDogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnZ2V0Q3VzdG9tZXJPdmVyVGltZSc7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpIDogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRDdXN0b21lck92ZXJUaW1lLmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIFxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBtZXNzYWdlT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX01lc3NhZ2VcIik7XG4gICAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgIGlmIChtZXNzYWdlT2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgXG4gICAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5fY2xpZW50SUQpKSB7XG4gICAgICAgICAgICBtZXNzYWdlT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiQ2xpZW50SURcIiwgW3RoaXMuX2NsaWVudElEXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2VPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJTdGF0dXNcIiwgWydVblJlYWQnXSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lc3NhZ2VPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJNZXNzYWdlQ2F0ZWdvcnlcIiwgWydDdXN0b21lciddKSk7XG4gICAgICAgICAgbWVzc2FnZU9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIk1lc3NhZ2VUeXBlXCIsWydPdmVyVGltZSddKSk7XG5cbiAgICAgICAgICBcbiAgICAgICAgICBkYW8ucXVlcnlCeVRhYmxlKG1lc3NhZ2VPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgICAgZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gICAgXG4gIH1cbiAgICBcbn1cbiJdfQ==