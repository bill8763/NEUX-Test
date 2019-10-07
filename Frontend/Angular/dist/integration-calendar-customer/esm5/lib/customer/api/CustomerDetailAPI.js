/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction, SQLiteResponse } from "@allianzSND/core";
import { of, from } from "rxjs";
var CustomerDetailAPI = /** @class */ (function () {
    function CustomerDetailAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this._id = '';
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
        var defaultObj = {
            "ClientID": "",
            "LastName": "",
            "FirstName": "",
            "Occupation": "",
            "Company": "",
            "BirthdayYear": "",
            "BirthdayMonth": "",
            "BirthdayDate": "",
            "Birthday": null,
            "AgeRange": null,
            "Gender": null,
            "Income": null,
            "Source": null,
            "Marriage": null,
            "Children": null,
            "Familiarity": null,
            "RecentStatus": null,
            "MANPA": null,
            "ContactFrequancy": null,
            "Possibility": null,
            "IsFollow": "N",
            "DataSource": "APP",
            "tel": [],
            "email": [],
            "address": []
        };
        if (!this._id || (this._id.length == 0)) {
            //Add
            /** @type {?} */
            var resp = new SQLiteResponse({
                "isSuccess": true
            }, [defaultObj]);
            return of(resp);
        }
        else {
            /** @type {?} */
            var customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Customer");
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
                        return { customer: customer, clientID: clientID };
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
                        return { customer: customer, clientID: clientID };
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
                        return customer;
                })).then((/**
                 * @param {?} customer
                 * @return {?}
                 */
                function (customer) {
                    //change birthDay to Date Object
                    if (!!customer['Body'][0]['BirthdayYear'] && !!customer['Body'][0]['BirthdayMonth'] && customer['Body'][0]['BirthdayDate'])
                        customer['Body'][0]['Birthday'] = new Date(parseInt(customer['Body'][0]['BirthdayYear']), parseInt(customer['Body'][0]['BirthdayMonth']) - 1, customer['Body'][0]['BirthdayDate']);
                    else
                        customer['Body'][0]['Birthday'] = null;
                    console.log("CustomerDetailAPI convert BirthDay: ", customer['Body'][0]['Birthday']);
                    return customer;
                })));
            }
            else {
                return of(false);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJEZXRhaWxBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21lci9hcGkvQ3VzdG9tZXJEZXRhaWxBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBOEIsZUFBZSxFQUFlLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTlILE9BQU8sRUFBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTVDO0lBR0ksMkJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGbEMsUUFBRyxHQUFHLEVBQUUsQ0FBQztJQUlqQixDQUFDO0lBQ0Qsc0JBQVcsaUNBQUU7Ozs7UUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixDQUFDOzs7OztRQUNELFVBQWMsS0FBSztZQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUM7OztPQUhBOzs7O0lBSUQsc0NBQVU7OztJQUFWO1FBQ0ksT0FBTyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0ksT0FBTyxzQ0FBc0MsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsc0NBQVU7OztJQUFWO1FBQUEsaUJBb0dDO1FBbkdHLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQzs7WUFDdkMsVUFBVSxHQUFHO1lBQ2IsVUFBVSxFQUFFLEVBQUU7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsU0FBUyxFQUFFLEVBQUU7WUFDYixjQUFjLEVBQUUsRUFBRTtZQUNsQixlQUFlLEVBQUUsRUFBRTtZQUNuQixjQUFjLEVBQUUsRUFBRTtZQUNsQixVQUFV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LHdCQUFDO0FBQUQsQ0FBQyxBQTNIRCxJQTJIQzs7Ozs7OztJQTFIRyxnQ0FBaUI7Ozs7O0lBRUwsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSwgSU1vY2tBUEksIERhb0ZhY3RvcnksIENsaWVudEN1c3RvbURhbywgU1FMaXRlVGFibGUsIEVxdWFsUmVzdHJpY3Rpb24sIFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBmcm9tIH0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRGV0YWlsQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuICAgIHByaXZhdGUgX2lkID0gJyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgaWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2dldEN1c3RvbWVyRGV0YWlsJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0Q3VzdG9tZXJEZXRhaWwuanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY3VzdG9tZXIgRGV0YWlsOmV4ZWN1dGUgU1FMJyk7XG4gICAgICAgIGxldCBkZWZhdWx0T2JqID0ge1xuICAgICAgICAgICAgXCJDbGllbnRJRFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJMYXN0TmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJGaXJzdE5hbWVcIjogXCJcIixcbiAgICAgICAgICAgIFwiT2NjdXBhdGlvblwiOiBcIlwiLFxuICAgICAgICAgICAgXCJDb21wYW55XCI6IFwiXCIsXG4gICAgICAgICAgICBcIkJpcnRoZGF5WWVhclwiOiBcIlwiLFxuICAgICAgICAgICAgXCJCaXJ0aGRheU1vbnRoXCI6IFwiXCIsXG4gICAgICAgICAgICBcIkJpcnRoZGF5RGF0ZVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJCaXJ0aGRheVwiOiBudWxsLFxuICAgICAgICAgICAgXCJBZ2VSYW5nZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJHZW5kZXJcIjogbnVsbCxcbiAgICAgICAgICAgIFwiSW5jb21lXCI6IG51bGwsXG4gICAgICAgICAgICBcIlNvdXJjZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJNYXJyaWFnZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJDaGlsZHJlblwiOiBudWxsLFxuICAgICAgICAgICAgXCJGYW1pbGlhcml0eVwiOiBudWxsLFxuICAgICAgICAgICAgXCJSZWNlbnRTdGF0dXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwiTUFOUEFcIjogbnVsbCxcbiAgICAgICAgICAgIFwiQ29udGFjdEZyZXF1YW5jeVwiOiBudWxsLFxuICAgICAgICAgICAgXCJQb3NzaWJpbGl0eVwiOiBudWxsLFxuICAgICAgICAgICAgXCJJc0ZvbGxvd1wiOiBcIk5cIixcbiAgICAgICAgICAgIFwiRGF0YVNvdXJjZVwiOiBcIkFQUFwiLFxuICAgICAgICAgICAgXCJ0ZWxcIjogW10sXG4gICAgICAgICAgICBcImVtYWlsXCI6IFtdLFxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFtdXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pZCB8fCAodGhpcy5faWQubGVuZ3RoID09IDApKSB7XG4gICAgICAgICAgICAvL0FkZFxuICAgICAgICAgICAgbGV0IHJlc3AgPSBuZXcgU1FMaXRlUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIFwiaXNTdWNjZXNzXCI6IHRydWVcbiAgICAgICAgICAgIH0sIFtkZWZhdWx0T2JqXSk7XG4gICAgICAgICAgICByZXR1cm4gb2YocmVzcCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3VzdG9tZXJPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfVldfQ3VzdG9tZXJcIik7XG4gICAgICAgICAgICBsZXQgZGVmYXVsdERhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgICAgICBpZiAoY3VzdG9tZXJPYmogIT0gdW5kZWZpbmVkICYmIGRlZmF1bHREYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGVmYXVsdERhbyk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJDbGllbnRJRFwiLCBbdGhpcy5faWRdKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyb20oZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lck9iaikudG9Qcm9taXNlKCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyID0gcmVzcDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudElEID0gY3VzdG9tZXJbJ0JvZHknXVswXS5DbGllbnRJRDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyVGVsT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX1RlbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyVGVsT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lclRlbE9iaiA9ICg8U1FMaXRlVGFibGU+Y3VzdG9tZXJUZWxPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJUZWxPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBbY2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lclRlbE9iaikudG9Qcm9taXNlKCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZWxMaXN0ID0gcmVzcFsnQm9keSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyWydCb2R5J11bMF1bJ3RlbCddID0gdGVsTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21lciwgY2xpZW50SUQgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbWVyLCBjbGllbnRJRCB9O1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHsgY3VzdG9tZXIsIGNsaWVudElEIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyRW1haWxPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWxcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21lckVtYWlsT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckVtYWlsT2JqID0gKDxTUUxpdGVUYWJsZT5jdXN0b21lckVtYWlsT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyRW1haWxPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBbY2xpZW50SURdKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyRW1haWxPYmopLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVsTGlzdCA9IHJlc3BbJ0JvZHknXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lclsnQm9keSddWzBdWydlbWFpbCddID0gdGVsTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21lciwgY2xpZW50SUQgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbWVyLCBjbGllbnRJRCB9O1xuXG4gICAgICAgICAgICAgICAgfSkudGhlbigoeyBjdXN0b21lciwgY2xpZW50SUQgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJBZGRyT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21lckFkZHJPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyQWRkck9iaiA9ICg8U1FMaXRlVGFibGU+Y3VzdG9tZXJBZGRyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyQWRkck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIFtjbGllbnRJRF0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJBZGRyT2JqKS50b1Byb21pc2UoKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbExpc3QgPSByZXNwWydCb2R5J107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJbJ0JvZHknXVswXVsnYWRkcmVzcyddID0gdGVsTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXI7XG4gICAgICAgICAgICAgICAgfSkudGhlbihjdXN0b21lciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vY2hhbmdlIGJpcnRoRGF5IHRvIERhdGUgT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIGlmICghIWN1c3RvbWVyWydCb2R5J11bMF1bJ0JpcnRoZGF5WWVhciddICYmICEhY3VzdG9tZXJbJ0JvZHknXVswXVsnQmlydGhkYXlNb250aCddICYmIGN1c3RvbWVyWydCb2R5J11bMF1bJ0JpcnRoZGF5RGF0ZSddKVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJbJ0JvZHknXVswXVsnQmlydGhkYXknXSA9IG5ldyBEYXRlKHBhcnNlSW50KGN1c3RvbWVyWydCb2R5J11bMF1bJ0JpcnRoZGF5WWVhciddKSwgcGFyc2VJbnQoY3VzdG9tZXJbJ0JvZHknXVswXVsnQmlydGhkYXlNb250aCddKSAtIDEsIGN1c3RvbWVyWydCb2R5J11bMF1bJ0JpcnRoZGF5RGF0ZSddKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJbJ0JvZHknXVswXVsnQmlydGhkYXknXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VzdG9tZXJEZXRhaWxBUEkgY29udmVydCBCaXJ0aERheTogXCIsIGN1c3RvbWVyWydCb2R5J11bMF1bJ0JpcnRoZGF5J10pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXI7XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbiJdfQ==