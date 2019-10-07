/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction } from "@allianzSND/core";
import { Observable } from "rxjs";
var CustomerTelAPI = /** @class */ (function () {
    function CustomerTelAPI(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    CustomerTelAPI.prototype.setClientID = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.clientID = id;
    };
    /**
     * @return {?}
     */
    CustomerTelAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getCustomerTel';
    };
    /**
     * @return {?}
     */
    CustomerTelAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getCustomerTel.json';
    };
    /**
     * @return {?}
     */
    CustomerTelAPI.prototype.executeSQL = /**
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
            var telObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
            /** @type {?} */
            var dao = _this.daoFactory.getDefaultDao();
            if (telObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                telObj.addRestriction(new EqualRestriction('CustomerClientID', [_this.clientID]));
                dao.queryByTable(telObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    console.debug(resp);
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
    return CustomerTelAPI;
}());
export { CustomerTelAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerTelAPI.prototype.clientID;
    /**
     * @type {?}
     * @private
     */
    CustomerTelAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJUZWxBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21lci9hcGkvQ3VzdG9tZXJUZWxBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBOEIsZUFBZSxFQUFjLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQztJQUlFLHdCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBRTFDLENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLEVBQVc7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELG1DQUFVOzs7SUFBVjtRQUNJLE9BQU8sZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNJLE9BQU8sbUNBQW1DLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELG1DQUFVOzs7SUFBVjtRQUFBLGlCQW9CQztRQW5CQyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFROztnQkFDNUIsTUFBTSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDOztnQkFDakUsR0FBRyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3pDLElBQUksTUFBTSxJQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUUzQyxHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRS9CLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWhGLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLElBQUk7b0JBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7Ozs7Ozs7SUF2Q0Msa0NBQTBCOzs7OztJQUVkLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEksIElNb2NrQVBJLCBEYW9GYWN0b3J5LCBDbGllbnRDdXN0b21EYW8sIElTUUxpdGVBUEksIEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lclRlbEFQSSBpbXBsZW1lbnRzIElBUEkgLCBJTW9ja0FQSSAsIElTUUxpdGVBUEkge1xuXG4gIHByaXZhdGUgY2xpZW50SUQgOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG5cbiAgfVxuXG4gIHNldENsaWVudElEKGlkIDogc3RyaW5nKSB7XG4gICAgICB0aGlzLmNsaWVudElEID0gaWQ7XG4gIH1cblxuICBnZXRBUElOYW1lKCkgOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdnZXRDdXN0b21lclRlbCc7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpIDogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRDdXN0b21lclRlbC5qc29uJztcbiAgfVxuICBcbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCB0ZWxPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfVGVsXCIpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAodGVsT2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIFxuICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cbiAgICAgICAgdGVsT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJyxbdGhpcy5jbGllbnRJRF0pKTtcbiAgICAgIFxuICAgICAgICBkYW8ucXVlcnlCeVRhYmxlKHRlbE9iaikuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhyZXNwKTtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=