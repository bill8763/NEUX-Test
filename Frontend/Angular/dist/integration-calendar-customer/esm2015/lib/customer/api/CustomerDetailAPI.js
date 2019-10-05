/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction, SQLiteResponse } from "@allianzSND/core";
import { of, from } from "rxjs";
export class CustomerDetailAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._id = '';
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCustomerDetail';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCustomerDetail.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.log('customer Detail:execute SQL');
        /** @type {?} */
        let defaultObj = {
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
            let resp = new SQLiteResponse({
                "isSuccess": true
            }, [defaultObj]);
            return of(resp);
        }
        else {
            /** @type {?} */
            let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Customer");
            /** @type {?} */
            let defaultDao = this.daoFactory.getDefaultDao();
            if (customerObj != undefined && defaultDao != undefined) {
                /** @type {?} */
                let dao = new ClientCustomDao(defaultDao);
                customerObj.addRestriction(new EqualRestriction("ClientID", [this._id]));
                return from(dao.queryByTable(customerObj).toPromise().then((/**
                 * @param {?} resp
                 * @return {?}
                 */
                resp => {
                    /** @type {?} */
                    let customer = resp;
                    /** @type {?} */
                    let clientID = customer['Body'][0].ClientID;
                    /** @type {?} */
                    let customerTelObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                    if (customerTelObj) {
                        customerTelObj = ((/** @type {?} */ (customerTelObj)));
                        customerTelObj.addRestriction(new EqualRestriction('CustomerClientID', [clientID]));
                        return dao.queryByTable(customerTelObj).toPromise().then((/**
                         * @param {?} resp
                         * @return {?}
                         */
                        (resp) => {
                            /** @type {?} */
                            let telList = resp['Body'];
                            customer['Body'][0]['tel'] = telList;
                            return { customer, clientID };
                        }));
                    }
                    else
                        return { customer, clientID };
                })).then((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ({ customer, clientID }) => {
                    /** @type {?} */
                    let customerEmailObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                    if (customerEmailObj) {
                        customerEmailObj = ((/** @type {?} */ (customerEmailObj)));
                        customerEmailObj.addRestriction(new EqualRestriction('CustomerClientID', [clientID]));
                        return dao.queryByTable(customerEmailObj).toPromise().then((/**
                         * @param {?} resp
                         * @return {?}
                         */
                        (resp) => {
                            /** @type {?} */
                            let telList = resp['Body'];
                            customer['Body'][0]['email'] = telList;
                            return { customer, clientID };
                        }));
                    }
                    else
                        return { customer, clientID };
                })).then((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ({ customer, clientID }) => {
                    /** @type {?} */
                    let customerAddrObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                    if (customerAddrObj) {
                        customerAddrObj = ((/** @type {?} */ (customerAddrObj)));
                        customerAddrObj.addRestriction(new EqualRestriction('CustomerClientID', [clientID]));
                        return dao.queryByTable(customerAddrObj).toPromise().then((/**
                         * @param {?} resp
                         * @return {?}
                         */
                        (resp) => {
                            /** @type {?} */
                            let telList = resp['Body'];
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
                customer => {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJEZXRhaWxBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21lci9hcGkvQ3VzdG9tZXJEZXRhaWxBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBOEIsZUFBZSxFQUFlLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTlILE9BQU8sRUFBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTVDLE1BQU07Ozs7SUFHRixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRmxDLFFBQUcsR0FBRyxFQUFFLENBQUM7SUFJakIsQ0FBQzs7OztJQUNELElBQVcsRUFBRTtRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDOzs7OztJQUNELElBQVcsRUFBRSxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBQ0QsVUFBVTtRQUNOLE9BQU8sbUJBQW1CLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLHNDQUFzQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDOztZQUN2QyxVQUFVLEdBQUc7WUFDYixVQUFVLEVBQUUsRUFBRTtZQUNkLFVBQVUsRUFBRSxFQUFFO1lBQ2QsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixTQUFTLEVBQUUsRUFBRTtZQUNiLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLGVBQWUsRUFBRSxFQUFFO1lBQ25CLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lB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QUVMLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEksIElNb2NrQVBJLCBEYW9GYWN0b3J5LCBDbGllbnRDdXN0b21EYW8sIFNRTGl0ZVRhYmxlLCBFcXVhbFJlc3RyaWN0aW9uLCBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgZnJvbSB9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lckRldGFpbEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcbiAgICBwcml2YXRlIF9pZCA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG5cbiAgICB9XG4gICAgcHVibGljIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGlkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdnZXRDdXN0b21lckRldGFpbCc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldEN1c3RvbWVyRGV0YWlsLmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2N1c3RvbWVyIERldGFpbDpleGVjdXRlIFNRTCcpO1xuICAgICAgICBsZXQgZGVmYXVsdE9iaiA9IHtcbiAgICAgICAgICAgIFwiQ2xpZW50SURcIjogXCJcIixcbiAgICAgICAgICAgIFwiTGFzdE5hbWVcIjogXCJcIixcbiAgICAgICAgICAgIFwiRmlyc3ROYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICBcIk9jY3VwYXRpb25cIjogXCJcIixcbiAgICAgICAgICAgIFwiQ29tcGFueVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJCaXJ0aGRheVllYXJcIjogXCJcIixcbiAgICAgICAgICAgIFwiQmlydGhkYXlNb250aFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJCaXJ0aGRheURhdGVcIjogXCJcIixcbiAgICAgICAgICAgIFwiQmlydGhkYXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiQWdlUmFuZ2VcIjogbnVsbCxcbiAgICAgICAgICAgIFwiR2VuZGVyXCI6IG51bGwsXG4gICAgICAgICAgICBcIkluY29tZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJTb3VyY2VcIjogbnVsbCxcbiAgICAgICAgICAgIFwiTWFycmlhZ2VcIjogbnVsbCxcbiAgICAgICAgICAgIFwiQ2hpbGRyZW5cIjogbnVsbCxcbiAgICAgICAgICAgIFwiRmFtaWxpYXJpdHlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiUmVjZW50U3RhdHVzXCI6IG51bGwsXG4gICAgICAgICAgICBcIk1BTlBBXCI6IG51bGwsXG4gICAgICAgICAgICBcIkNvbnRhY3RGcmVxdWFuY3lcIjogbnVsbCxcbiAgICAgICAgICAgIFwiUG9zc2liaWxpdHlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiSXNGb2xsb3dcIjogXCJOXCIsXG4gICAgICAgICAgICBcIkRhdGFTb3VyY2VcIjogXCJBUFBcIixcbiAgICAgICAgICAgIFwidGVsXCI6IFtdLFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBbXSxcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBbXVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5faWQgfHwgKHRoaXMuX2lkLmxlbmd0aCA9PSAwKSkge1xuICAgICAgICAgICAgLy9BZGRcbiAgICAgICAgICAgIGxldCByZXNwID0gbmV3IFNRTGl0ZVJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBcImlzU3VjY2Vzc1wiOiB0cnVlXG4gICAgICAgICAgICB9LCBbZGVmYXVsdE9ial0pO1xuICAgICAgICAgICAgcmV0dXJuIG9mKHJlc3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX1ZXX0N1c3RvbWVyXCIpO1xuICAgICAgICAgICAgbGV0IGRlZmF1bHREYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgaWYgKGN1c3RvbWVyT2JqICE9IHVuZGVmaW5lZCAmJiBkZWZhdWx0RGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRlZmF1bHREYW8pO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiQ2xpZW50SURcIiwgW3RoaXMuX2lkXSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmcm9tKGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJPYmopLnRvUHJvbWlzZSgpLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lciA9IHJlc3A7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IGN1c3RvbWVyWydCb2R5J11bMF0uQ2xpZW50SUQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lclRlbE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9UZWxcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21lclRlbE9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJUZWxPYmogPSAoPFNRTGl0ZVRhYmxlPmN1c3RvbWVyVGVsT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyVGVsT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgW2NsaWVudElEXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJUZWxPYmopLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVsTGlzdCA9IHJlc3BbJ0JvZHknXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lclsnQm9keSddWzBdWyd0ZWwnXSA9IHRlbExpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY3VzdG9tZXIsIGNsaWVudElEIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21lciwgY2xpZW50SUQgfTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKCh7IGN1c3RvbWVyLCBjbGllbnRJRCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lckVtYWlsT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0VtYWlsXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXJFbWFpbE9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJFbWFpbE9iaiA9ICg8U1FMaXRlVGFibGU+Y3VzdG9tZXJFbWFpbE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckVtYWlsT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgW2NsaWVudElEXSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lckVtYWlsT2JqKS50b1Byb21pc2UoKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbExpc3QgPSByZXNwWydCb2R5J107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJbJ0JvZHknXVswXVsnZW1haWwnXSA9IHRlbExpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY3VzdG9tZXIsIGNsaWVudElEIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21lciwgY2xpZW50SUQgfTtcblxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHsgY3VzdG9tZXIsIGNsaWVudElEIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyQWRkck9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXJBZGRyT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckFkZHJPYmogPSAoPFNRTGl0ZVRhYmxlPmN1c3RvbWVyQWRkck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckFkZHJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBbY2xpZW50SURdKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyQWRkck9iaikudG9Qcm9taXNlKCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZWxMaXN0ID0gcmVzcFsnQm9keSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyWydCb2R5J11bMF1bJ2FkZHJlc3MnXSA9IHRlbExpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oY3VzdG9tZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NoYW5nZSBiaXJ0aERheSB0byBEYXRlIE9iamVjdFxuICAgICAgICAgICAgICAgICAgICBpZiAoISFjdXN0b21lclsnQm9keSddWzBdWydCaXJ0aGRheVllYXInXSAmJiAhIWN1c3RvbWVyWydCb2R5J11bMF1bJ0JpcnRoZGF5TW9udGgnXSAmJiBjdXN0b21lclsnQm9keSddWzBdWydCaXJ0aGRheURhdGUnXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyWydCb2R5J11bMF1bJ0JpcnRoZGF5J10gPSBuZXcgRGF0ZShwYXJzZUludChjdXN0b21lclsnQm9keSddWzBdWydCaXJ0aGRheVllYXInXSksIHBhcnNlSW50KGN1c3RvbWVyWydCb2R5J11bMF1bJ0JpcnRoZGF5TW9udGgnXSkgLSAxLCBjdXN0b21lclsnQm9keSddWzBdWydCaXJ0aGRheURhdGUnXSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyWydCb2R5J11bMF1bJ0JpcnRoZGF5J10gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1c3RvbWVyRGV0YWlsQVBJIGNvbnZlcnQgQmlydGhEYXk6IFwiLCBjdXN0b21lclsnQm9keSddWzBdWydCaXJ0aGRheSddKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyO1xuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iXX0=