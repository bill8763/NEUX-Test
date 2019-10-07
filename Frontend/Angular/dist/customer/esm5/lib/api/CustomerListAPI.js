/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ClientCustomDao, InRestriction, LikeRestriction, ORCompoundRestriction, EqualRestriction, LimitRestriction, OffsetRestriction, AndCompoundRestriction, PageInfo, OrderByRestriction, LessOrEqualRestriction, GreaterOrEqualRestriction, NotEqualRestriction, StringUtils } from "@allianzSND/core";
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
    Object.defineProperty(CustomerListAPI.prototype, "filterCriteria", {
        set: /**
         * @param {?} criteria
         * @return {?}
         */
        function (criteria) {
            this._filterCriteria = criteria;
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
            var customerObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
            /** @type {?} */
            var dao = _this.daoFactory.getDefaultDao();
            if (customerObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                if (_this._filterCriteria != undefined) {
                    console.debug('CustomerListAPI _filterCriteria', _this._filterCriteria);
                    /** @type {?} */
                    var keyword = _this._filterCriteria.keyword;
                    console.debug('customerListAPI keyword', keyword);
                    if (StringUtils.isNotEmpty(keyword)) {
                        /** @type {?} */
                        var compoundRestriction = new ORCompoundRestriction([new LikeRestriction('FirstName', [keyword]), new LikeRestriction('LastName', [keyword])]);
                        customerObj.addRestriction(compoundRestriction);
                    }
                    /** @type {?} */
                    var filterMap = _this._filterCriteria.getFilterMap();
                    filterMap.forEach((/**
                     * @param {?} array
                     * @param {?} key
                     * @return {?}
                     */
                    function (array, key) {
                        var e_1, _a;
                        console.log(key, array);
                        if (key == 'Birthday') {
                            /** @type {?} */
                            var birthdayRestriction = new Array();
                            /** @type {?} */
                            var monthArray = new Array();
                            try {
                                for (var array_1 = tslib_1.__values(array), array_1_1 = array_1.next(); !array_1_1.done; array_1_1 = array_1.next()) {
                                    var birthday = array_1_1.value;
                                    if (birthday == 'Today') {
                                        /** @type {?} */
                                        var today = new Date();
                                        /** @type {?} */
                                        var startNum = today.getMonth() + 1;
                                        /** @type {?} */
                                        var endNum = today.getDate();
                                        /** @type {?} */
                                        var start = String(startNum);
                                        /** @type {?} */
                                        var end = String(endNum);
                                        if (start.length == 1)
                                            start = '0' + start;
                                        if (end.length == 1)
                                            end = '0' + end;
                                        birthdayRestriction.push(new AndCompoundRestriction([new EqualRestriction('BirthdayMonth', [start]),
                                            new EqualRestriction('BirthdayDate', [end])]));
                                    }
                                    else {
                                        if (birthday.length == 1)
                                            birthday = '0' + birthday;
                                        monthArray.push(birthday);
                                    }
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (array_1_1 && !array_1_1.done && (_a = array_1.return)) _a.call(array_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                            if (monthArray.length != 0) {
                                birthdayRestriction.push(new InRestriction('BirthdayMonth', monthArray));
                            }
                            customerObj.addRestriction(new ORCompoundRestriction(birthdayRestriction));
                        }
                        else if (key == 'DataSource') {
                            if (array.length != 2) {
                                /** @type {?} */
                                var datasource = array[0];
                                if (datasource == 'E') {
                                    customerObj.addRestriction(new EqualRestriction('DataSource', ['OPUS']));
                                }
                                else {
                                    customerObj.addRestriction(new NotEqualRestriction('DataSource', ['OPUS']));
                                }
                            }
                        }
                        else if (key == 'Completeness') {
                            /** @type {?} */
                            var completenessOption = _this.profileCodeService.getCodeArray('Customer_Completeness');
                            /** @type {?} */
                            var completenessRestriction_1 = new Array();
                            completenessOption.forEach((/**
                             * @param {?} profileCode
                             * @return {?}
                             */
                            function (profileCode) {
                                /** @type {?} */
                                var code = profileCode.getCode();
                                if (array.includes(code)) {
                                    /** @type {?} */
                                    var obj = JSON.parse(profileCode.getArguments());
                                    /** @type {?} */
                                    var start = obj.start;
                                    /** @type {?} */
                                    var end = obj.end;
                                    start = start / 100;
                                    end = end / 100;
                                    completenessRestriction_1.push(new AndCompoundRestriction([new GreaterOrEqualRestriction('Completeness', [start]), new LessOrEqualRestriction('Completeness', [end])]));
                                }
                            }));
                            console.debug('completenessRestriction length', completenessRestriction_1.length);
                            console.log('completenessRestriction:', completenessRestriction_1);
                            if (completenessRestriction_1.length != 0) {
                                customerObj.addRestriction(new ORCompoundRestriction(completenessRestriction_1));
                                console.log('customerObj:', customerObj);
                            }
                        }
                        else {
                            customerObj.addRestriction(new InRestriction(key, array));
                        }
                    }));
                }
                //add order by
                customerObj.addRestriction(new OrderByRestriction([{ column: 'LastName', order: 'ASC' }]));
                //add page limit
                customerObj.addRestriction(new LimitRestriction([_this._pageInfo.pageSize]));
                customerObj.addRestriction(new OffsetRestriction([(_this._pageInfo.page - 1) * 10]));
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
    CustomerListAPI.prototype._filterCriteria;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJMaXN0QVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvYXBpL0N1c3RvbWVyTGlzdEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBMEMsZUFBZSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQWdCLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBc0Isc0JBQXNCLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdFgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUdsQztJQU9FLHlCQUFvQixVQUFzQixFQUFVLGtCQUFzQztRQUF0RSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUpsRixjQUFTLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQU03QyxDQUFDO0lBQ0Qsc0JBQUkscUNBQVE7Ozs7O1FBQVosVUFBYSxRQUFnQjtZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFjOzs7OztRQUFsQixVQUFtQixRQUFnQztZQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFDQUFROzs7OztRQUFaLFVBQWEsUUFBa0I7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7UUFDRSxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLG9DQUFvQyxDQUFDO0lB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QzVFLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVwRix1Q0FBdUM7Z0JBQ3ZDLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7b0JBQy9DLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNyRjtnQkFFRCxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQyxJQUFJO29CQUUzQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsc0JBQUM7QUFBRCxDQUFDLEFBM0pELElBMkpDOzs7Ozs7O0lBekpDLDBDQUFnRDs7Ozs7SUFDaEQsb0NBQTZDOzs7OztJQUU3Qyx5Q0FBK0I7Ozs7O0lBRW5CLHFDQUE4Qjs7Ozs7SUFBRSw2Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSwgRGFvRmFjdG9yeSwgQ2xpZW50Q3VzdG9tRGFvLCBJblJlc3RyaWN0aW9uLCBMaWtlUmVzdHJpY3Rpb24sIE9SQ29tcG91bmRSZXN0cmljdGlvbiwgRXF1YWxSZXN0cmljdGlvbiwgSVJlc3RyaWN0aW9uLCBMaW1pdFJlc3RyaWN0aW9uLCBPZmZzZXRSZXN0cmljdGlvbiwgQW5kQ29tcG91bmRSZXN0cmljdGlvbiwgUGFnZUluZm8sIE9yZGVyQnlSZXN0cmljdGlvbiwgUHJvZmlsZUNvZGVTZXJ2aWNlLCBMZXNzT3JFcXVhbFJlc3RyaWN0aW9uLCBHcmVhdGVyT3JFcXVhbFJlc3RyaWN0aW9uLCBOb3RFcXVhbFJlc3RyaWN0aW9uLCBTdHJpbmdVdGlscyB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXN0b21lckZpbHRlckNyaXRlcmlhIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYmVhbi9jdXN0b21lci1maWx0ZXItY3JpdGVyaWFcIjtcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyTGlzdEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICBwcml2YXRlIF9maWx0ZXJDcml0ZXJpYTogQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYTtcbiAgcHJpdmF0ZSBfcGFnZUluZm86IFBhZ2VJbmZvID0gbmV3IFBhZ2VJbmZvKCk7XG5cbiAgcHJpdmF0ZSBfcXVlcnlDbGllbnRJRDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSwgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSkge1xuXG4gIH1cbiAgc2V0IGNsaWVudElEKGNsaWVudElEOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9xdWVyeUNsaWVudElEID0gY2xpZW50SUQ7XG4gIH1cblxuICBzZXQgZmlsdGVyQ3JpdGVyaWEoY3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEpIHtcbiAgICB0aGlzLl9maWx0ZXJDcml0ZXJpYSA9IGNyaXRlcmlhO1xuICB9XG5cbiAgc2V0IHBhZ2VJbmZvKHBhZ2VJbmZvOiBQYWdlSW5mbykge1xuICAgIHRoaXMuX3BhZ2VJbmZvID0gcGFnZUluZm87XG4gIH1cblxuICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdnZXRDdXN0b21lckxpc3QnO1xuICB9XG5cbiAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0Q3VzdG9tZXJMaXN0Lmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyXCIpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAoY3VzdG9tZXJPYmogIT0gdW5kZWZpbmVkICYmIGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlckNyaXRlcmlhICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgY29uc29sZS5kZWJ1ZygnQ3VzdG9tZXJMaXN0QVBJIF9maWx0ZXJDcml0ZXJpYScsIHRoaXMuX2ZpbHRlckNyaXRlcmlhKTtcblxuICAgICAgICAgIGxldCBrZXl3b3JkID0gdGhpcy5fZmlsdGVyQ3JpdGVyaWEua2V5d29yZDtcblxuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyTGlzdEFQSSBrZXl3b3JkJywga2V5d29yZCk7XG4gICAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoa2V5d29yZCkpIHtcbiAgICAgICAgICAgIGxldCBjb21wb3VuZFJlc3RyaWN0aW9uID0gbmV3IE9SQ29tcG91bmRSZXN0cmljdGlvbihbbmV3IExpa2VSZXN0cmljdGlvbignRmlyc3ROYW1lJywgW2tleXdvcmRdKSwgbmV3IExpa2VSZXN0cmljdGlvbignTGFzdE5hbWUnLCBba2V5d29yZF0pXSk7XG4gICAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihjb21wb3VuZFJlc3RyaWN0aW9uKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgZmlsdGVyTWFwOiBNYXA8c3RyaW5nLCBBcnJheTxzdHJpbmc+PiA9IHRoaXMuX2ZpbHRlckNyaXRlcmlhLmdldEZpbHRlck1hcCgpO1xuXG4gICAgICAgICAgZmlsdGVyTWFwLmZvckVhY2goKGFycmF5OiBBcnJheTxzdHJpbmc+LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5LCBhcnJheSk7XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT0gJ0JpcnRoZGF5Jykge1xuICAgICAgICAgICAgICBsZXQgYmlydGhkYXlSZXN0cmljdGlvbiA9IG5ldyBBcnJheTxJUmVzdHJpY3Rpb24+KCk7XG4gICAgICAgICAgICAgIGxldCBtb250aEFycmF5ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgYmlydGhkYXkgb2YgYXJyYXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmlydGhkYXkgPT0gJ1RvZGF5Jykge1xuICAgICAgICAgICAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgIGxldCBzdGFydE51bSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICAgICAgbGV0IGVuZE51bSA9IHRvZGF5LmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IFN0cmluZyhzdGFydE51bSk7XG4gICAgICAgICAgICAgICAgICBsZXQgZW5kID0gU3RyaW5nKGVuZE51bSk7XG4gICAgICAgICAgICAgICAgICBpZiAoc3RhcnQubGVuZ3RoID09IDEpIHN0YXJ0ID0gJzAnICsgc3RhcnQ7XG4gICAgICAgICAgICAgICAgICBpZiAoZW5kLmxlbmd0aCA9PSAxKSBlbmQgPSAnMCcgKyBlbmQ7XG5cbiAgICAgICAgICAgICAgICAgIGJpcnRoZGF5UmVzdHJpY3Rpb24ucHVzaChuZXcgQW5kQ29tcG91bmRSZXN0cmljdGlvbihbbmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0JpcnRoZGF5TW9udGgnLCBbc3RhcnRdKSxcbiAgICAgICAgICAgICAgICAgIG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdCaXJ0aGRheURhdGUnLCBbZW5kXSldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKGJpcnRoZGF5Lmxlbmd0aCA9PSAxKSBiaXJ0aGRheSA9ICcwJyArIGJpcnRoZGF5O1xuICAgICAgICAgICAgICAgICAgbW9udGhBcnJheS5wdXNoKGJpcnRoZGF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAobW9udGhBcnJheS5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgIGJpcnRoZGF5UmVzdHJpY3Rpb24ucHVzaChuZXcgSW5SZXN0cmljdGlvbignQmlydGhkYXlNb250aCcsIG1vbnRoQXJyYXkpKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBPUkNvbXBvdW5kUmVzdHJpY3Rpb24oYmlydGhkYXlSZXN0cmljdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09ICdEYXRhU291cmNlJykge1xuICAgICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoICE9IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YXNvdXJjZSA9IGFycmF5WzBdO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhc291cmNlID09ICdFJykge1xuICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0RhdGFTb3VyY2UnLCBbJ09QVVMnXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBOb3RFcXVhbFJlc3RyaWN0aW9uKCdEYXRhU291cmNlJywgWydPUFVTJ10pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09ICdDb21wbGV0ZW5lc3MnKSB7XG4gICAgICAgICAgICAgIGxldCBjb21wbGV0ZW5lc3NPcHRpb24gPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0NvbXBsZXRlbmVzcycpO1xuICAgICAgICAgICAgICBsZXQgY29tcGxldGVuZXNzUmVzdHJpY3Rpb24gPSBuZXcgQXJyYXk8SVJlc3RyaWN0aW9uPigpO1xuICAgICAgICAgICAgICBjb21wbGV0ZW5lc3NPcHRpb24uZm9yRWFjaChwcm9maWxlQ29kZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNvZGUgPSBwcm9maWxlQ29kZS5nZXRDb2RlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkuaW5jbHVkZXMoY29kZSkpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKHByb2ZpbGVDb2RlLmdldEFyZ3VtZW50cygpKTtcbiAgICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IG9iai5zdGFydDtcbiAgICAgICAgICAgICAgICAgIGxldCBlbmQgPSBvYmouZW5kO1xuXG4gICAgICAgICAgICAgICAgICBzdGFydCA9IHN0YXJ0IC8gMTAwO1xuICAgICAgICAgICAgICAgICAgZW5kID0gZW5kIC8gMTAwO1xuXG4gICAgICAgICAgICAgICAgICBjb21wbGV0ZW5lc3NSZXN0cmljdGlvbi5wdXNoKG5ldyBBbmRDb21wb3VuZFJlc3RyaWN0aW9uKFtuZXcgR3JlYXRlck9yRXF1YWxSZXN0cmljdGlvbignQ29tcGxldGVuZXNzJywgW3N0YXJ0XSksIG5ldyBMZXNzT3JFcXVhbFJlc3RyaWN0aW9uKCdDb21wbGV0ZW5lc3MnLCBbZW5kXSldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2NvbXBsZXRlbmVzc1Jlc3RyaWN0aW9uIGxlbmd0aCcsIGNvbXBsZXRlbmVzc1Jlc3RyaWN0aW9uLmxlbmd0aCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZW5lc3NSZXN0cmljdGlvbjonLCBjb21wbGV0ZW5lc3NSZXN0cmljdGlvbik7XG4gICAgICAgICAgICAgIGlmIChjb21wbGV0ZW5lc3NSZXN0cmljdGlvbi5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBPUkNvbXBvdW5kUmVzdHJpY3Rpb24oY29tcGxldGVuZXNzUmVzdHJpY3Rpb24pKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY3VzdG9tZXJPYmo6JywgY3VzdG9tZXJPYmopO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbihrZXksIGFycmF5KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cblxuICAgICAgICAvL2FkZCBvcmRlciBieVxuICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgT3JkZXJCeVJlc3RyaWN0aW9uKFt7IGNvbHVtbjogJ0xhc3ROYW1lJywgb3JkZXI6ICdBU0MnIH1dKSlcblxuICAgICAgICAvL2FkZCBwYWdlIGxpbWl0XG4gICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBMaW1pdFJlc3RyaWN0aW9uKFt0aGlzLl9wYWdlSW5mby5wYWdlU2l6ZV0pKTtcbiAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IE9mZnNldFJlc3RyaWN0aW9uKFsodGhpcy5fcGFnZUluZm8ucGFnZSAtIDEpICogMTBdKSk7XG5cbiAgICAgICAgLy9pZiBoYXMgZWRpdCBwcm9maWxlIHdpbGwgaGFzIGNsaWVudElEXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuX3F1ZXJ5Q2xpZW50SUQpKSB7XG4gICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJywgW3RoaXMuX3F1ZXJ5Q2xpZW50SURdKSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcblxuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=