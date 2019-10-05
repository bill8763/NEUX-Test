/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction } from "@allianzSND/core";
import { of, from } from "rxjs";
export class CustomerDetailAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
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
        let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
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
                    return of({ customer, clientID }).toPromise();
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
                    return of({ customer, clientID }).toPromise();
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
                    return of(customer).toPromise();
            })));
        }
        else {
            return of(false);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJEZXRhaWxBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9hcGkvQ3VzdG9tZXJEZXRhaWxBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBOEIsZUFBZSxFQUFlLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFOUcsT0FBTyxFQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFNUMsTUFBTTs7OztJQUdGLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFFMUMsQ0FBQzs7OztJQUNELElBQVcsRUFBRTtRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDOzs7OztJQUNELElBQVcsRUFBRSxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBQ0QsVUFBVTtRQUNOLE9BQU8sbUJBQW1CLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLHNDQUFzQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDOztZQUN2QyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUM7O1lBQ2xFLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtRQUNoRCxJQUFJLFdBQVcsSUFBSSxTQUFTLElBQUksVUFBVSxJQUFJLFNBQVMsRUFBRTs7Z0JBQ2pELEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxVQUFVLENBQUM7WUFDekMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENB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R0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUMxQixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDO3dCQUN6QyxPQUFPLFFBQVEsQ0FBQztvQkFDcEIsQ0FBQyxFQUFDLENBQUM7aUJBQ047O29CQUVHLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3hDLENBQUMsRUFBQyxDQUFDLENBQUE7U0FDTjthQUNJO1lBQ0QsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDO0NBR0o7Ozs7OztJQTlFRyxnQ0FBWTs7Ozs7SUFFQSx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJLCBJTW9ja0FQSSwgRGFvRmFjdG9yeSwgQ2xpZW50Q3VzdG9tRGFvLCBTUUxpdGVUYWJsZSwgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgZnJvbSB9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lckRldGFpbEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcbiAgICBwcml2YXRlIF9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSl7XG5cbiAgICB9XG4gICAgcHVibGljIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGlkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdnZXRDdXN0b21lckRldGFpbCc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldEN1c3RvbWVyRGV0YWlsLmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2N1c3RvbWVyIERldGFpbDpleGVjdXRlIFNRTCcpO1xuICAgICAgICBsZXQgY3VzdG9tZXJPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJcIik7XG4gICAgICAgIGxldCBkZWZhdWx0RGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgaWYgKGN1c3RvbWVyT2JqICE9IHVuZGVmaW5lZCAmJiBkZWZhdWx0RGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGVmYXVsdERhbyk7XG4gICAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIkNsaWVudElEXCIsIFt0aGlzLl9pZF0pKTtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJPYmopLnRvUHJvbWlzZSgpLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyID0gcmVzcDtcbiAgICAgICAgICAgICAgICBsZXQgY2xpZW50SUQgPSBjdXN0b21lclsnQm9keSddWzBdLkNsaWVudElEO1xuICAgICAgICAgICAgICAgIGxldCBjdXN0b21lclRlbE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9UZWxcIik7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyVGVsT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyVGVsT2JqID0gKDxTUUxpdGVUYWJsZT5jdXN0b21lclRlbE9iaik7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyVGVsT2JqLmFkZFJlc3RyaWN0aW9uKCBuZXcgRXF1YWxSZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIFtjbGllbnRJRF0pKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJUZWxPYmopLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZWxMaXN0ID0gcmVzcFsnQm9keSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJbJ0JvZHknXVswXVsndGVsJ10gPSB0ZWxMaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY3VzdG9tZXIsIGNsaWVudElEIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZih7IGN1c3RvbWVyLCBjbGllbnRJRCB9KS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIH0pLnRoZW4oKHsgY3VzdG9tZXIsIGNsaWVudElEIH0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJFbWFpbE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9FbWFpbFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXJFbWFpbE9iaikge1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lckVtYWlsT2JqID0gKDxTUUxpdGVUYWJsZT5jdXN0b21lckVtYWlsT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJFbWFpbE9iai5hZGRSZXN0cmljdGlvbiggbmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBbY2xpZW50SURdKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJFbWFpbE9iaikudG9Qcm9taXNlKCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbExpc3QgPSByZXNwWydCb2R5J107XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lclsnQm9keSddWzBdWydlbWFpbCddID0gdGVsTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbWVyLCBjbGllbnRJRCB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoeyBjdXN0b21lciwgY2xpZW50SUQgfSkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIH0pLnRoZW4oKHsgY3VzdG9tZXIsIGNsaWVudElEIH0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJBZGRyT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3NcIik7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyQWRkck9iaikge1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lckFkZHJPYmogPSAoPFNRTGl0ZVRhYmxlPmN1c3RvbWVyQWRkck9iaik7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyQWRkck9iai5hZGRSZXN0cmljdGlvbiggbmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBbY2xpZW50SURdKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJBZGRyT2JqKS50b1Byb21pc2UoKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVsTGlzdCA9IHJlc3BbJ0JvZHknXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyWydCb2R5J11bMF1bJ2FkZHJlc3MnXSA9IHRlbExpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihjdXN0b21lcikudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIl19