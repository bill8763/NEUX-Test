/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction, LimitRestriction, OffsetRestriction, PageInfo, OrderByRestriction, StringUtils } from "@allianzSND/core";
import { Observable } from 'rxjs';
var CustomerListAPI = /** @class */ (function () {
    function CustomerListAPI(daoFactory, profileCodeService) {
        this.daoFactory = daoFactory;
        this.profileCodeService = profileCodeService;
        this._pageInfo = new PageInfo();
    }
    Object.defineProperty(CustomerListAPI.prototype, "clientID", {
        set: /**
         * @param {?} clientID
         * @return {?}
         */
        function (clientID) {
            this._queryClientID = clientID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerListAPI.prototype, "restrictions", {
        set: /**
         * @param {?} restrictions
         * @return {?}
         */
        function (restrictions) {
            this._restrictions = restrictions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerListAPI.prototype, "pageInfo", {
        set: /**
         * @param {?} pageInfo
         * @return {?}
         */
        function (pageInfo) {
            this._pageInfo = pageInfo;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerListAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getCustomerList';
    };
    /**
     * @return {?}
     */
    CustomerListAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getCustomerList.json';
    };
    /**
     * @return {?}
     */
    CustomerListAPI.prototype.executeSQL = /**
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
            var customerObj = _this.daoFactory.getDefaultTable("TW_LH_SD_VW_Customer");
            /** @type {?} */
            var dao = _this.daoFactory.getDefaultDao();
            if (customerObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                if (_this._restrictions.length > 0) {
                    _this._restrictions.forEach((/**
                     * @param {?} condition
                     * @return {?}
                     */
                    function (condition) {
                        customerObj.addRestriction(condition);
                    }));
                }
                //add order by
                customerObj.addRestriction(new OrderByRestriction([{ column: 'LastName', order: 'ASC' }]));
                //add page limit
                if (_this._pageInfo.pageSize > 0) {
                    customerObj.addRestriction(new LimitRestriction([_this._pageInfo.pageSize]));
                    customerObj.addRestriction(new OffsetRestriction([(_this._pageInfo.page - 1) * 10]));
                }
                //if has edit profile will has clientID
                if (StringUtils.isNotEmpty(_this._queryClientID)) {
                    customerObj.addRestriction(new EqualRestriction('ClientID', [_this._queryClientID]));
                }
                dao.queryByTable(customerObj).subscribe((/**
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
    return CustomerListAPI;
}());
export { CustomerListAPI };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJMaXN0QVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvYXBpL0N1c3RvbWVyTGlzdEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUEwQyxlQUFlLEVBQXlELGdCQUFnQixFQUFnQixnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBMEIsUUFBUSxFQUFFLGtCQUFrQixFQUE4RixXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0WCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDO0lBT0UseUJBQW9CLFVBQXNCLEVBQVUsa0JBQXNDO1FBQXRFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSmxGLGNBQVMsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBTTdDLENBQUM7SUFDRCxzQkFBSSxxQ0FBUTs7Ozs7UUFBWixVQUFhLFFBQWdCO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQVk7Ozs7O1FBQWhCLFVBQWlCLFlBQWlDO1lBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQVE7Ozs7O1FBQVosVUFBYSxRQUFrQjtZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTs7OztJQUVELG9DQUFVOzs7SUFBVjtRQUNFLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNFLE9BQU8sb0NBQW9DLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELG9DQUFVOzs7SUFBVjtRQUFBLGlCQXdDQztRQXRDQyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFROztnQkFDNUIsV0FBVyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDOztnQkFDckUsR0FBRyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3pDLElBQUksV0FBVyxJQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUVoRCxHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRS9CLElBQUksS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNqQyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87Ozs7b0JBQUMsVUFBQyxTQUF1Qjt3QkFDakQsV0FBVyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDeEMsQ0FBQyxFQUFDLENBQUE7aUJBQ0g7Z0JBR0QsY0FBYztnQkFDZCxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksa0JBQWtCLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUUxRixnQkFBZ0I7Z0JBQ2hCLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO29CQUMvQixXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JGO2dCQUVELHVDQUF1QztnQkFDdkMsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtvQkFDL0MsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JGO2dCQUVELEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLElBQUk7b0JBRTNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCxzQkFBQztBQUFELENBQUMsQUF4RUQsSUF3RUM7Ozs7Ozs7SUF0RUMsd0NBQTJDOzs7OztJQUMzQyxvQ0FBNkM7Ozs7O0lBRTdDLHlDQUErQjs7Ozs7SUFFbkIscUNBQThCOzs7OztJQUFFLDZDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJLCBEYW9GYWN0b3J5LCBDbGllbnRDdXN0b21EYW8sIEluUmVzdHJpY3Rpb24sIExpa2VSZXN0cmljdGlvbiwgT1JDb21wb3VuZFJlc3RyaWN0aW9uLCBFcXVhbFJlc3RyaWN0aW9uLCBJUmVzdHJpY3Rpb24sIExpbWl0UmVzdHJpY3Rpb24sIE9mZnNldFJlc3RyaWN0aW9uLCBBbmRDb21wb3VuZFJlc3RyaWN0aW9uLCBQYWdlSW5mbywgT3JkZXJCeVJlc3RyaWN0aW9uLCBQcm9maWxlQ29kZVNlcnZpY2UsIExlc3NPckVxdWFsUmVzdHJpY3Rpb24sIEdyZWF0ZXJPckVxdWFsUmVzdHJpY3Rpb24sIE5vdEVxdWFsUmVzdHJpY3Rpb24sIFN0cmluZ1V0aWxzIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9iZWFuL2N1c3RvbWVyLWZpbHRlci1jcml0ZXJpYVwiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJMaXN0QVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG4gIHByaXZhdGUgX3Jlc3RyaWN0aW9uczogQXJyYXk8SVJlc3RyaWN0aW9uPjtcbiAgcHJpdmF0ZSBfcGFnZUluZm86IFBhZ2VJbmZvID0gbmV3IFBhZ2VJbmZvKCk7XG5cbiAgcHJpdmF0ZSBfcXVlcnlDbGllbnRJRDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSwgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSkge1xuXG4gIH1cbiAgc2V0IGNsaWVudElEKGNsaWVudElEOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9xdWVyeUNsaWVudElEID0gY2xpZW50SUQ7XG4gIH1cblxuICBzZXQgcmVzdHJpY3Rpb25zKHJlc3RyaWN0aW9uczogQXJyYXk8SVJlc3RyaWN0aW9uPikge1xuICAgIHRoaXMuX3Jlc3RyaWN0aW9ucyA9IHJlc3RyaWN0aW9ucztcbiAgfVxuXG4gIHNldCBwYWdlSW5mbyhwYWdlSW5mbzogUGFnZUluZm8pIHtcbiAgICB0aGlzLl9wYWdlSW5mbyA9IHBhZ2VJbmZvO1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnZ2V0Q3VzdG9tZXJMaXN0JztcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldEN1c3RvbWVyTGlzdC5qc29uJztcbiAgfVxuXG4gIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBjdXN0b21lck9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9WV19DdXN0b21lclwiKTtcbiAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgaWYgKGN1c3RvbWVyT2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pO1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXN0cmljdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuX3Jlc3RyaWN0aW9ucy5mb3JFYWNoKChjb25kaXRpb246IElSZXN0cmljdGlvbikgPT4ge1xuICAgICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24oY29uZGl0aW9uKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cblxuICAgICAgICAvL2FkZCBvcmRlciBieVxuICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgT3JkZXJCeVJlc3RyaWN0aW9uKFt7IGNvbHVtbjogJ0xhc3ROYW1lJywgb3JkZXI6ICdBU0MnIH1dKSlcblxuICAgICAgICAvL2FkZCBwYWdlIGxpbWl0XG4gICAgICAgIGlmICh0aGlzLl9wYWdlSW5mby5wYWdlU2l6ZSA+IDApIHtcbiAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgTGltaXRSZXN0cmljdGlvbihbdGhpcy5fcGFnZUluZm8ucGFnZVNpemVdKSk7XG4gICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IE9mZnNldFJlc3RyaWN0aW9uKFsodGhpcy5fcGFnZUluZm8ucGFnZSAtIDEpICogMTBdKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIGhhcyBlZGl0IHByb2ZpbGUgd2lsbCBoYXMgY2xpZW50SURcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5fcXVlcnlDbGllbnRJRCkpIHtcbiAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLCBbdGhpcy5fcXVlcnlDbGllbnRJRF0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuXG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==