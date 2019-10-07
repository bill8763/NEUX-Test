/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction, LimitRestriction, OffsetRestriction, PageInfo, OrderByRestriction, StringUtils } from "@allianzSND/core";
import { Observable } from 'rxjs';
export class CustomerListAPI {
    /**
     * @param {?} daoFactory
     * @param {?} profileCodeService
     */
    constructor(daoFactory, profileCodeService) {
        this.daoFactory = daoFactory;
        this.profileCodeService = profileCodeService;
        this._pageInfo = new PageInfo();
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    set clientID(clientID) {
        this._queryClientID = clientID;
    }
    /**
     * @param {?} restrictions
     * @return {?}
     */
    set restrictions(restrictions) {
        this._restrictions = restrictions;
    }
    /**
     * @param {?} pageInfo
     * @return {?}
     */
    set pageInfo(pageInfo) {
        this._pageInfo = pageInfo;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCustomerList';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCustomerList.json';
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
            let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Customer");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (customerObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                if (this._restrictions.length > 0) {
                    this._restrictions.forEach((/**
                     * @param {?} condition
                     * @return {?}
                     */
                    (condition) => {
                        customerObj.addRestriction(condition);
                    }));
                }
                //add order by
                customerObj.addRestriction(new OrderByRestriction([{ column: 'LastName', order: 'ASC' }]));
                //add page limit
                if (this._pageInfo.pageSize > 0) {
                    customerObj.addRestriction(new LimitRestriction([this._pageInfo.pageSize]));
                    customerObj.addRestriction(new OffsetRestriction([(this._pageInfo.page - 1) * 10]));
                }
                //if has edit profile will has clientID
                if (StringUtils.isNotEmpty(this._queryClientID)) {
                    customerObj.addRestriction(new EqualRestriction('ClientID', [this._queryClientID]));
                }
                dao.queryByTable(customerObj).subscribe((/**
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
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerListAPI.prototype._restrictions;
    /**
     * @type {?}
     * @private
     */
    CustomerListAPI.prototype._pageInfo;
    /**
     * @type {?}
     * @private
     */
    CustomerListAPI.prototype._queryClientID;
    /**
     * @type {?}
     * @private
     */
    CustomerListAPI.prototype.daoFactory;
    /**
     * @type {?}
     * @private
     */
    CustomerListAPI.prototype.profileCodeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJMaXN0QVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvYXBpL0N1c3RvbWVyTGlzdEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUEwQyxlQUFlLEVBQXlELGdCQUFnQixFQUFnQixnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBMEIsUUFBUSxFQUFFLGtCQUFrQixFQUE4RixXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0WCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDLE1BQU07Ozs7O0lBT0osWUFBb0IsVUFBc0IsRUFBVSxrQkFBc0M7UUFBdEUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFKbEYsY0FBUyxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7SUFNN0MsQ0FBQzs7Ozs7SUFDRCxJQUFJLFFBQVEsQ0FBQyxRQUFnQjtRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELElBQUksWUFBWSxDQUFDLFlBQWlDO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsUUFBa0I7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxvQ0FBb0MsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUVSLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFOztnQkFDaEMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDOztnQkFDckUsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3pDLElBQUksV0FBVyxJQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUVoRCxHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRS9CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87Ozs7b0JBQUMsQ0FBQyxTQUF1QixFQUFFLEVBQUU7d0JBQ3JELFdBQVcsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3hDLENBQUMsRUFBQyxDQUFBO2lCQUNIO2dCQUdELGNBQWM7Z0JBQ2QsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFFMUYsZ0JBQWdCO2dCQUNoQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtvQkFDL0IsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVFLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNyRjtnQkFFRCx1Q0FBdUM7Z0JBQ3ZDLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7b0JBQy9DLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNyRjtnQkFFRCxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFFL0MsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGOzs7Ozs7SUF0RUMsd0NBQTJDOzs7OztJQUMzQyxvQ0FBNkM7Ozs7O0lBRTdDLHlDQUErQjs7Ozs7SUFFbkIscUNBQThCOzs7OztJQUFFLDZDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJLCBEYW9GYWN0b3J5LCBDbGllbnRDdXN0b21EYW8sIEluUmVzdHJpY3Rpb24sIExpa2VSZXN0cmljdGlvbiwgT1JDb21wb3VuZFJlc3RyaWN0aW9uLCBFcXVhbFJlc3RyaWN0aW9uLCBJUmVzdHJpY3Rpb24sIExpbWl0UmVzdHJpY3Rpb24sIE9mZnNldFJlc3RyaWN0aW9uLCBBbmRDb21wb3VuZFJlc3RyaWN0aW9uLCBQYWdlSW5mbywgT3JkZXJCeVJlc3RyaWN0aW9uLCBQcm9maWxlQ29kZVNlcnZpY2UsIExlc3NPckVxdWFsUmVzdHJpY3Rpb24sIEdyZWF0ZXJPckVxdWFsUmVzdHJpY3Rpb24sIE5vdEVxdWFsUmVzdHJpY3Rpb24sIFN0cmluZ1V0aWxzIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9iZWFuL2N1c3RvbWVyLWZpbHRlci1jcml0ZXJpYVwiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJMaXN0QVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG4gIHByaXZhdGUgX3Jlc3RyaWN0aW9uczogQXJyYXk8SVJlc3RyaWN0aW9uPjtcbiAgcHJpdmF0ZSBfcGFnZUluZm86IFBhZ2VJbmZvID0gbmV3IFBhZ2VJbmZvKCk7XG5cbiAgcHJpdmF0ZSBfcXVlcnlDbGllbnRJRDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSwgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSkge1xuXG4gIH1cbiAgc2V0IGNsaWVudElEKGNsaWVudElEOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9xdWVyeUNsaWVudElEID0gY2xpZW50SUQ7XG4gIH1cblxuICBzZXQgcmVzdHJpY3Rpb25zKHJlc3RyaWN0aW9uczogQXJyYXk8SVJlc3RyaWN0aW9uPikge1xuICAgIHRoaXMuX3Jlc3RyaWN0aW9ucyA9IHJlc3RyaWN0aW9ucztcbiAgfVxuXG4gIHNldCBwYWdlSW5mbyhwYWdlSW5mbzogUGFnZUluZm8pIHtcbiAgICB0aGlzLl9wYWdlSW5mbyA9IHBhZ2VJbmZvO1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnZ2V0Q3VzdG9tZXJMaXN0JztcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldEN1c3RvbWVyTGlzdC5qc29uJztcbiAgfVxuXG4gIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBjdXN0b21lck9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9WV19DdXN0b21lclwiKTtcbiAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgaWYgKGN1c3RvbWVyT2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pO1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXN0cmljdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuX3Jlc3RyaWN0aW9ucy5mb3JFYWNoKChjb25kaXRpb246IElSZXN0cmljdGlvbikgPT4ge1xuICAgICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24oY29uZGl0aW9uKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cblxuICAgICAgICAvL2FkZCBvcmRlciBieVxuICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgT3JkZXJCeVJlc3RyaWN0aW9uKFt7IGNvbHVtbjogJ0xhc3ROYW1lJywgb3JkZXI6ICdBU0MnIH1dKSlcblxuICAgICAgICAvL2FkZCBwYWdlIGxpbWl0XG4gICAgICAgIGlmICh0aGlzLl9wYWdlSW5mby5wYWdlU2l6ZSA+IDApIHtcbiAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgTGltaXRSZXN0cmljdGlvbihbdGhpcy5fcGFnZUluZm8ucGFnZVNpemVdKSk7XG4gICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IE9mZnNldFJlc3RyaWN0aW9uKFsodGhpcy5fcGFnZUluZm8ucGFnZSAtIDEpICogMTBdKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIGhhcyBlZGl0IHByb2ZpbGUgd2lsbCBoYXMgY2xpZW50SURcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5fcXVlcnlDbGllbnRJRCkpIHtcbiAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLCBbdGhpcy5fcXVlcnlDbGllbnRJRF0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuXG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==