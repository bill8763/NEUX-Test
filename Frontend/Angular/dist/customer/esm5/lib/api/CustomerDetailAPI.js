/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction } from "@allianzSND/core";
import { of, from } from "rxjs";
var CustomerDetailAPI = /** @class */ (function () {
    function CustomerDetailAPI(daoFactory) {
        this.daoFactory = daoFactory;
    }
    Object.defineProperty(CustomerDetailAPI.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._id;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerDetailAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getCustomerDetail';
    };
    /**
     * @return {?}
     */
    CustomerDetailAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getCustomerDetail.json';
    };
    /**
     * @return {?}
     */
    CustomerDetailAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('customer Detail:execute SQL');
        /** @type {?} */
        var customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
        /** @type {?} */
        var defaultDao = this.daoFactory.getDefaultDao();
        if (customerObj != undefined && defaultDao != undefined) {
            /** @type {?} */
            var dao_1 = new ClientCustomDao(defaultDao);
            customerObj.addRestriction(new EqualRestriction("ClientID", [this._id]));
            return from(dao_1.queryByTable(customerObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                /** @type {?} */
                var customer = resp;
                /** @type {?} */
                var clientID = customer['Body'][0].ClientID;
                /** @type {?} */
                var customerTelObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                if (customerTelObj) {
                    customerTelObj = ((/** @type {?} */ (customerTelObj)));
                    customerTelObj.addRestriction(new EqualRestriction('CustomerClientID', [clientID]));
                    return dao_1.queryByTable(customerTelObj).toPromise().then((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        /** @type {?} */
                        var telList = resp['Body'];
                        customer['Body'][0]['tel'] = telList;
                        return { customer: customer, clientID: clientID };
                    }));
                }
                else
                    return of({ customer: customer, clientID: clientID }).toPromise();
            })).then((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var customer = _a.customer, clientID = _a.clientID;
                /** @type {?} */
                var customerEmailObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                if (customerEmailObj) {
                    customerEmailObj = ((/** @type {?} */ (customerEmailObj)));
                    customerEmailObj.addRestriction(new EqualRestriction('CustomerClientID', [clientID]));
                    return dao_1.queryByTable(customerEmailObj).toPromise().then((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        /** @type {?} */
                        var telList = resp['Body'];
                        customer['Body'][0]['email'] = telList;
                        return { customer: customer, clientID: clientID };
                    }));
                }
                else
                    return of({ customer: customer, clientID: clientID }).toPromise();
            })).then((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var customer = _a.customer, clientID = _a.clientID;
                /** @type {?} */
                var customerAddrObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                if (customerAddrObj) {
                    customerAddrObj = ((/** @type {?} */ (customerAddrObj)));
                    customerAddrObj.addRestriction(new EqualRestriction('CustomerClientID', [clientID]));
                    return dao_1.queryByTable(customerAddrObj).toPromise().then((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        /** @type {?} */
                        var telList = resp['Body'];
                        customer['Body'][0]['address'] = telList;
                        return customer;
                    }));
                }
                else
                    return of(customer).toPromise();
            })));
        }
        else {
            return of(false);
        }
    };
    return CustomerDetailAPI;
}());
export { CustomerDetailAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerDetailAPI.prototype._id;
    /**
     * @type {?}
     * @private
     */
    CustomerDetailAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJEZXRhaWxBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9hcGkvQ3VzdG9tZXJEZXRhaWxBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBOEIsZUFBZSxFQUFlLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFOUcsT0FBTyxFQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFNUM7SUFHSSwyQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUUxQyxDQUFDO0lBQ0Qsc0JBQVcsaUNBQUU7Ozs7UUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixDQUFDOzs7OztRQUNELFVBQWMsS0FBSztZQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUM7OztPQUhBOzs7O0lBSUQsc0NBQVU7OztJQUFWO1FBQ0ksT0FBTyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0ksT0FBTyxzQ0FBc0MsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsc0NBQVU7OztJQUFWO1FBQUEsaUJBd0RDO1FBdkRHLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQzs7WUFDdkMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDOztZQUNsRSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7UUFDaEQsSUFBSSxXQUFXLElBQUksU0FBUyxJQUFJLFVBQVUsSUFBSSxTQUFTLEVBQUU7O2dCQUNqRCxLQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsVUFBVSxDQUFDO1lBQ3pDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLE9BQU8sSUFBSSxDQUFDLEtBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsSUFBSTs7b0JBQ3ZELFFBQVEsR0FBRyxJQUFJOztvQkFDZixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7O29CQUN2QyxjQUFjLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUM7Z0JBQzdFLElBQUksY0FBYyxFQUFFO29CQUNoQixjQUFjLEdBQUcsQ0FBQyxtQkFBYSxjQUFjLEVBQUEsQ0FBQyxDQUFDO29CQUMvQyxjQUFjLENBQUMsY0FBYyxDQUFFLElBQUksZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JGLE9BQU8sS0FBRyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJOzs7O29CQUFDLFVBQUMsSUFBSTs7NEJBQ3RELE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUMxQixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO3dCQUNyQyxPQUFPLEVBQUUsUUFBUSxVQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQztvQkFDbEMsQ0FBQyxFQUFDLENBQUM7aUJBQ047O29CQUVHLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3RELENBQUMsRUFBQyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLEVBQXNCO29CQUFwQixzQkFBUSxFQUFFLHNCQUFROztvQkFDckIsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUM7Z0JBQ2pGLElBQUksZ0JBQWdCLEVBQUU7b0JBQ2xCLGdCQUFnQixHQUFHLENBQUMsbUJBQWEsZ0JBQWdCLEVBQUEsQ0FBQyxDQUFDO29CQUNuRCxnQkFBZ0IsQ0FBQyxjQUFjLENBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFdkYsT0FBTyxLQUFHLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztvQkFBQyxVQUFDLElBQUk7OzRCQUN4RCxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFDMUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQzt3QkFDdkMsT0FBTyxFQUFFLFFBQVEsVUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUM7b0JBQ2xDLENBQUMsRUFBQyxDQUFDO2lCQUNOOztvQkFFRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUV0RCxDQUFDLEVBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxFQUFzQjtvQkFBcEIsc0JBQVEsRUFBRSxzQkFBUTs7b0JBQ3JCLGVBQWUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDbEYsSUFBSSxlQUFlLEVBQUU7b0JBQ2pCLGVBQWUsR0FBRyxDQUFDLG1CQUFhLGVBQWUsRUFBQSxDQUFDLENBQUM7b0JBQ2pELGVBQWUsQ0FBQyxjQUFjLENBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFdEYsT0FBTyxLQUFHLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUk7Ozs7b0JBQUMsVUFBQyxJQUFJOzs0QkFDdkQsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBQzFCLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUM7d0JBQ3pDLE9BQU8sUUFBUSxDQUFDO29CQUNwQixDQUFDLEVBQUMsQ0FBQztpQkFDTjs7b0JBRUcsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDeEMsQ0FBQyxFQUFDLENBQUMsQ0FBQTtTQUNOO2FBQ0k7WUFDRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFHTCx3QkFBQztBQUFELENBQUMsQUEvRUQsSUErRUM7Ozs7Ozs7SUE5RUcsZ0NBQVk7Ozs7O0lBRUEsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSwgSU1vY2tBUEksIERhb0ZhY3RvcnksIENsaWVudEN1c3RvbURhbywgU1FMaXRlVGFibGUsIEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIGZyb20gfSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJEZXRhaWxBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG4gICAgcHJpdmF0ZSBfaWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnkpe1xuXG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG4gICAgcHVibGljIHNldCBpZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnZ2V0Q3VzdG9tZXJEZXRhaWwnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRDdXN0b21lckRldGFpbC5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXN0b21lciBEZXRhaWw6ZXhlY3V0ZSBTUUwnKTtcbiAgICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyXCIpO1xuICAgICAgICBsZXQgZGVmYXVsdERhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGlmIChjdXN0b21lck9iaiAhPSB1bmRlZmluZWQgJiYgZGVmYXVsdERhbyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRlZmF1bHREYW8pO1xuICAgICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJDbGllbnRJRFwiLCBbdGhpcy5faWRdKSk7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyT2JqKS50b1Byb21pc2UoKS50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjdXN0b21lciA9IHJlc3A7XG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudElEID0gY3VzdG9tZXJbJ0JvZHknXVswXS5DbGllbnRJRDtcbiAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJUZWxPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfVGVsXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lclRlbE9iaikge1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lclRlbE9iaiA9ICg8U1FMaXRlVGFibGU+Y3VzdG9tZXJUZWxPYmopO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lclRlbE9iai5hZGRSZXN0cmljdGlvbiggbmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBbY2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyVGVsT2JqKS50b1Byb21pc2UoKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVsTGlzdCA9IHJlc3BbJ0JvZHknXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyWydCb2R5J11bMF1bJ3RlbCddID0gdGVsTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbWVyLCBjbGllbnRJRCB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoeyBjdXN0b21lciwgY2xpZW50SUQgfSkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICB9KS50aGVuKCh7IGN1c3RvbWVyLCBjbGllbnRJRCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyRW1haWxPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWxcIik7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyRW1haWxPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJFbWFpbE9iaiA9ICg8U1FMaXRlVGFibGU+Y3VzdG9tZXJFbWFpbE9iaik7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyRW1haWxPYmouYWRkUmVzdHJpY3Rpb24oIG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgW2NsaWVudElEXSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyRW1haWxPYmopLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZWxMaXN0ID0gcmVzcFsnQm9keSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJbJ0JvZHknXVswXVsnZW1haWwnXSA9IHRlbExpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21lciwgY2xpZW50SUQgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHsgY3VzdG9tZXIsIGNsaWVudElEIH0pLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICB9KS50aGVuKCh7IGN1c3RvbWVyLCBjbGllbnRJRCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyQWRkck9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lckFkZHJPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJBZGRyT2JqID0gKDxTUUxpdGVUYWJsZT5jdXN0b21lckFkZHJPYmopO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lckFkZHJPYmouYWRkUmVzdHJpY3Rpb24oIG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgW2NsaWVudElEXSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyQWRkck9iaikudG9Qcm9taXNlKCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbExpc3QgPSByZXNwWydCb2R5J107XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lclsnQm9keSddWzBdWydhZGRyZXNzJ10gPSB0ZWxMaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoY3VzdG9tZXIpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbiJdfQ==