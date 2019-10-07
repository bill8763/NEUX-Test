/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction } from "@allianzSND/core";
import { Observable } from 'rxjs';
export class CustomerUpdateFollowAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    setClient(clientID) {
        this._clientID = clientID;
    }
    /**
     * @param {?} isFollow
     * @return {?}
     */
    setIsFollow(isFollow) {
        this._isFollow = isFollow;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'updateCustomerFollowStatus';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/saveSuccess.json';
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
            let dao = this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                //save customer data
                /** @type {?} */
                let customer = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                if (customer) {
                    dao = new ClientCustomDao(dao);
                    customer = ((/** @type {?} */ (customer)));
                    customer.addRestriction(new EqualRestriction('ClientID', [this._clientID]));
                    customer.setValue("IsFollow", this._isFollow ? 'Y' : 'N');
                    dao.updateByTable(customer).subscribe((/**
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
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerUpdateFollowAPI.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    CustomerUpdateFollowAPI.prototype._isFollow;
    /**
     * @type {?}
     * @private
     */
    CustomerUpdateFollowAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJVcGRhdGVGb2xsb3dBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21lci9hcGkvQ3VzdG9tZXJVcGRhdGVGb2xsb3dBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBMkMsZUFBZSxFQUFjLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxNQUFNOzs7O0lBS0YsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUUxQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxRQUFpQjtRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxRQUFrQjtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNOLE9BQU8sNEJBQTRCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLGdDQUFnQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxVQUFVO1FBRU4sT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7O2dCQUM5QixHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFOzs7b0JBR2QsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuRSxJQUFJLFFBQVEsRUFBRTtvQkFDVixHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRS9CLFFBQVEsR0FBRyxDQUFDLG1CQUFhLFFBQVEsRUFBQSxDQUFDLENBQUM7b0JBRW5DLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzRSxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUV6RCxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7b0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFFM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN4QixDQUFDLEVBQUMsQ0FBQztpQkFDTjtxQkFDSTtvQkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3ZCO2FBRUo7aUJBQ0k7Z0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7Ozs7OztJQXpERyw0Q0FBMkI7Ozs7O0lBQzNCLDRDQUE0Qjs7Ozs7SUFFaEIsNkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSwgSU1vY2tBUEksIERhb0ZhY3RvcnksIFNRTGl0ZVRhYmxlLCBDbGllbnRDdXN0b21EYW8sIElTUUxpdGVBUEksIEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJVcGRhdGVGb2xsb3dBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG5cbiAgICBwcml2YXRlIF9jbGllbnRJRCA6IHN0cmluZztcbiAgICBwcml2YXRlIF9pc0ZvbGxvdyA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cblxuICAgIHNldENsaWVudChjbGllbnRJRCA6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jbGllbnRJRCA9IGNsaWVudElEO1xuICAgIH1cblxuICAgIHNldElzRm9sbG93KGlzRm9sbG93IDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0ZvbGxvdyA9IGlzRm9sbG93O1xuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICd1cGRhdGVDdXN0b21lckZvbGxvd1N0YXR1cyc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL3NhdmVTdWNjZXNzLmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgaWYgKGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIC8vc2F2ZSBjdXN0b21lciBkYXRhXG4gICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lcikge1xuICAgICAgICAgICAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXIgPSAoPFNRTGl0ZVRhYmxlPmN1c3RvbWVyKTtcblxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lci5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLFt0aGlzLl9jbGllbnRJRF0pKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXIuc2V0VmFsdWUoXCJJc0ZvbGxvd1wiLHRoaXMuX2lzRm9sbG93ID8gJ1knIDogJ04nKTtcblxuICAgICAgICAgICAgICAgICAgICBkYW8udXBkYXRlQnlUYWJsZShjdXN0b21lcikuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19