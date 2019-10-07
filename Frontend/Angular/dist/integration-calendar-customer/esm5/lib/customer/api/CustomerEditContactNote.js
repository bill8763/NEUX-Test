/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction } from "@allianzSND/core";
import { Observable } from 'rxjs';
var CustomerEditContactNoteAPI = /** @class */ (function () {
    function CustomerEditContactNoteAPI(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} contactClientID
     * @return {?}
     */
    CustomerEditContactNoteAPI.prototype.setContactClientID = /**
     * @param {?} contactClientID
     * @return {?}
     */
    function (contactClientID) {
        this.contactClientID = contactClientID;
    };
    /**
     * @param {?} note
     * @return {?}
     */
    CustomerEditContactNoteAPI.prototype.setNote = /**
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
    CustomerEditContactNoteAPI.prototype.setNoteTime = /**
     * @param {?} noteTime
     * @return {?}
     */
    function (noteTime) {
        this.noteTime = noteTime;
    };
    /**
     * @return {?}
     */
    CustomerEditContactNoteAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'editCustomerContactNote';
    };
    /**
     * @return {?}
     */
    CustomerEditContactNoteAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/saveSuccess.json';
    };
    /**
     * @return {?}
     */
    CustomerEditContactNoteAPI.prototype.executeSQL = /**
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
                contactObj.setValue('Note', _this.note);
                contactObj.setValue('NoteTime', _this.noteTime.getTime());
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
                observer.next(false);
                observer.complete();
            }
        }));
    };
    return CustomerEditContactNoteAPI;
}());
export { CustomerEditContactNoteAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerEditContactNoteAPI.prototype.contactClientID;
    /**
     * @type {?}
     * @private
     */
    CustomerEditContactNoteAPI.prototype.note;
    /**
     * @type {?}
     * @private
     */
    CustomerEditContactNoteAPI.prototype.noteTime;
    /**
     * @type {?}
     * @private
     */
    CustomerEditContactNoteAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJFZGl0Q29udGFjdE5vdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21lci9hcGkvQ3VzdG9tZXJFZGl0Q29udGFjdE5vdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBOEIsZUFBZSxFQUFjLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQztJQUtFLG9DQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBRTFDLENBQUM7Ozs7O0lBRUQsdURBQWtCOzs7O0lBQWxCLFVBQW1CLGVBQXdCO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsNENBQU87Ozs7SUFBUCxVQUFRLElBQWE7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxnREFBVzs7OztJQUFYLFVBQVksUUFBZTtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsK0NBQVU7OztJQUFWO1FBQ0UsT0FBTyx5QkFBeUIsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsZ0RBQVc7OztJQUFYO1FBQ0UsT0FBTyxnQ0FBZ0MsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsK0NBQVU7OztJQUFWO1FBQUEsaUJBcUJDO1FBcEJDLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQVE7O2dCQUM1QixVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLENBQUM7O2dCQUN6RSxHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxVQUFVLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBRS9DLEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFL0IsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBQyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25GLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUV6RCxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQyxJQUFJO29CQUMzQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLEFBbkRELElBbURDOzs7Ozs7O0lBbERDLHFEQUFpQzs7Ozs7SUFDakMsMENBQXNCOzs7OztJQUN0Qiw4Q0FBd0I7Ozs7O0lBRVosZ0RBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSwgSU1vY2tBUEksIERhb0ZhY3RvcnksIENsaWVudEN1c3RvbURhbywgSVNRTGl0ZUFQSSwgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lckVkaXRDb250YWN0Tm90ZUFQSSBpbXBsZW1lbnRzIElBUEkgLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG4gIHByaXZhdGUgY29udGFjdENsaWVudElEOiAgc3RyaW5nO1xuICBwcml2YXRlIG5vdGUgOiBzdHJpbmc7XG4gIHByaXZhdGUgbm90ZVRpbWUgOiBEYXRlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gIH1cblxuICBzZXRDb250YWN0Q2xpZW50SUQoY29udGFjdENsaWVudElEIDogc3RyaW5nKSB7XG4gICAgdGhpcy5jb250YWN0Q2xpZW50SUQgPSBjb250YWN0Q2xpZW50SUQ7XG4gIH1cblxuICBzZXROb3RlKG5vdGUgOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5vdGUgPSBub3RlO1xuICB9XG5cbiAgc2V0Tm90ZVRpbWUobm90ZVRpbWUgOiBEYXRlKSB7XG4gICAgdGhpcy5ub3RlVGltZSA9IG5vdGVUaW1lO1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpIDogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2VkaXRDdXN0b21lckNvbnRhY3ROb3RlJztcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCkgOiBzdHJpbmcge1xuICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9zYXZlU3VjY2Vzcy5qc29uJztcbiAgfVxuXG4gIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBsZXQgY29udGFjdE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9Db250YWN0XCIpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAoY29udGFjdE9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBcbiAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pO1xuXG4gICAgICAgIGNvbnRhY3RPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJyxbdGhpcy5jb250YWN0Q2xpZW50SURdKSk7XG4gICAgICAgIGNvbnRhY3RPYmouc2V0VmFsdWUoJ05vdGUnLCB0aGlzLm5vdGUpO1xuICAgICAgICBjb250YWN0T2JqLnNldFZhbHVlKCdOb3RlVGltZScsIHRoaXMubm90ZVRpbWUuZ2V0VGltZSgpKTtcbiAgICAgIFxuICAgICAgICBkYW8udXBkYXRlQnlUYWJsZShjb250YWN0T2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==