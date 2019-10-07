/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, InRestriction, LikeRestriction, ORCompoundRestriction, EqualRestriction, LimitRestriction, OffsetRestriction, AndCompoundRestriction, PageInfo, OrderByRestriction, LessOrEqualRestriction, GreaterOrEqualRestriction, NotEqualRestriction, StringUtils } from "@allianzSND/core";
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
     * @param {?} criteria
     * @return {?}
     */
    set filterCriteria(criteria) {
        this._filterCriteria = criteria;
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
            let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (customerObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                if (this._filterCriteria != undefined) {
                    console.debug('CustomerListAPI _filterCriteria', this._filterCriteria);
                    /** @type {?} */
                    let keyword = this._filterCriteria.keyword;
                    console.debug('customerListAPI keyword', keyword);
                    if (StringUtils.isNotEmpty(keyword)) {
                        /** @type {?} */
                        let compoundRestriction = new ORCompoundRestriction([new LikeRestriction('FirstName', [keyword]), new LikeRestriction('LastName', [keyword])]);
                        customerObj.addRestriction(compoundRestriction);
                    }
                    /** @type {?} */
                    let filterMap = this._filterCriteria.getFilterMap();
                    filterMap.forEach((/**
                     * @param {?} array
                     * @param {?} key
                     * @return {?}
                     */
                    (array, key) => {
                        console.log(key, array);
                        if (key == 'Birthday') {
                            /** @type {?} */
                            let birthdayRestriction = new Array();
                            /** @type {?} */
                            let monthArray = new Array();
                            for (let birthday of array) {
                                if (birthday == 'Today') {
                                    /** @type {?} */
                                    let today = new Date();
                                    /** @type {?} */
                                    let startNum = today.getMonth() + 1;
                                    /** @type {?} */
                                    let endNum = today.getDate();
                                    /** @type {?} */
                                    let start = String(startNum);
                                    /** @type {?} */
                                    let end = String(endNum);
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
                            if (monthArray.length != 0) {
                                birthdayRestriction.push(new InRestriction('BirthdayMonth', monthArray));
                            }
                            customerObj.addRestriction(new ORCompoundRestriction(birthdayRestriction));
                        }
                        else if (key == 'DataSource') {
                            if (array.length != 2) {
                                /** @type {?} */
                                let datasource = array[0];
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
                            let completenessOption = this.profileCodeService.getCodeArray('Customer_Completeness');
                            /** @type {?} */
                            let completenessRestriction = new Array();
                            completenessOption.forEach((/**
                             * @param {?} profileCode
                             * @return {?}
                             */
                            profileCode => {
                                /** @type {?} */
                                let code = profileCode.getCode();
                                if (array.includes(code)) {
                                    /** @type {?} */
                                    let obj = JSON.parse(profileCode.getArguments());
                                    /** @type {?} */
                                    let start = obj.start;
                                    /** @type {?} */
                                    let end = obj.end;
                                    start = start / 100;
                                    end = end / 100;
                                    completenessRestriction.push(new AndCompoundRestriction([new GreaterOrEqualRestriction('Completeness', [start]), new LessOrEqualRestriction('Completeness', [end])]));
                                }
                            }));
                            console.debug('completenessRestriction length', completenessRestriction.length);
                            console.log('completenessRestriction:', completenessRestriction);
                            if (completenessRestriction.length != 0) {
                                customerObj.addRestriction(new ORCompoundRestriction(completenessRestriction));
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
                customerObj.addRestriction(new LimitRestriction([this._pageInfo.pageSize]));
                customerObj.addRestriction(new OffsetRestriction([(this._pageInfo.page - 1) * 10]));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJMaXN0QVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvYXBpL0N1c3RvbWVyTGlzdEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUEwQyxlQUFlLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBZ0IsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFzQixzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0WCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDLE1BQU07Ozs7O0lBT0osWUFBb0IsVUFBc0IsRUFBVSxrQkFBc0M7UUFBdEUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFKbEYsY0FBUyxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7SUFNN0MsQ0FBQzs7Ozs7SUFDRCxJQUFJLFFBQVEsQ0FBQyxRQUFnQjtRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELElBQUksY0FBYyxDQUFDLFFBQWdDO1FBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsUUFBa0I7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxvQ0FBb0MsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUVSLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFB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LEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFcEYsdUNBQXVDO2dCQUN2QyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUMvQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckY7Z0JBRUQsR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBRS9DLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRjs7Ozs7O0lBekpDLDBDQUFnRDs7Ozs7SUFDaEQsb0NBQTZDOzs7OztJQUU3Qyx5Q0FBK0I7Ozs7O0lBRW5CLHFDQUE4Qjs7Ozs7SUFBRSw2Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSwgRGFvRmFjdG9yeSwgQ2xpZW50Q3VzdG9tRGFvLCBJblJlc3RyaWN0aW9uLCBMaWtlUmVzdHJpY3Rpb24sIE9SQ29tcG91bmRSZXN0cmljdGlvbiwgRXF1YWxSZXN0cmljdGlvbiwgSVJlc3RyaWN0aW9uLCBMaW1pdFJlc3RyaWN0aW9uLCBPZmZzZXRSZXN0cmljdGlvbiwgQW5kQ29tcG91bmRSZXN0cmljdGlvbiwgUGFnZUluZm8sIE9yZGVyQnlSZXN0cmljdGlvbiwgUHJvZmlsZUNvZGVTZXJ2aWNlLCBMZXNzT3JFcXVhbFJlc3RyaWN0aW9uLCBHcmVhdGVyT3JFcXVhbFJlc3RyaWN0aW9uLCBOb3RFcXVhbFJlc3RyaWN0aW9uLCBTdHJpbmdVdGlscyB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXN0b21lckZpbHRlckNyaXRlcmlhIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYmVhbi9jdXN0b21lci1maWx0ZXItY3JpdGVyaWFcIjtcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyTGlzdEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICBwcml2YXRlIF9maWx0ZXJDcml0ZXJpYTogQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYTtcbiAgcHJpdmF0ZSBfcGFnZUluZm86IFBhZ2VJbmZvID0gbmV3IFBhZ2VJbmZvKCk7XG5cbiAgcHJpdmF0ZSBfcXVlcnlDbGllbnRJRDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSwgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSkge1xuXG4gIH1cbiAgc2V0IGNsaWVudElEKGNsaWVudElEOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9xdWVyeUNsaWVudElEID0gY2xpZW50SUQ7XG4gIH1cblxuICBzZXQgZmlsdGVyQ3JpdGVyaWEoY3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEpIHtcbiAgICB0aGlzLl9maWx0ZXJDcml0ZXJpYSA9IGNyaXRlcmlhO1xuICB9XG5cbiAgc2V0IHBhZ2VJbmZvKHBhZ2VJbmZvOiBQYWdlSW5mbykge1xuICAgIHRoaXMuX3BhZ2VJbmZvID0gcGFnZUluZm87XG4gIH1cblxuICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdnZXRDdXN0b21lckxpc3QnO1xuICB9XG5cbiAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0Q3VzdG9tZXJMaXN0Lmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyXCIpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAoY3VzdG9tZXJPYmogIT0gdW5kZWZpbmVkICYmIGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlckNyaXRlcmlhICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgY29uc29sZS5kZWJ1ZygnQ3VzdG9tZXJMaXN0QVBJIF9maWx0ZXJDcml0ZXJpYScsIHRoaXMuX2ZpbHRlckNyaXRlcmlhKTtcblxuICAgICAgICAgIGxldCBrZXl3b3JkID0gdGhpcy5fZmlsdGVyQ3JpdGVyaWEua2V5d29yZDtcblxuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyTGlzdEFQSSBrZXl3b3JkJywga2V5d29yZCk7XG4gICAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoa2V5d29yZCkpIHtcbiAgICAgICAgICAgIGxldCBjb21wb3VuZFJlc3RyaWN0aW9uID0gbmV3IE9SQ29tcG91bmRSZXN0cmljdGlvbihbbmV3IExpa2VSZXN0cmljdGlvbignRmlyc3ROYW1lJywgW2tleXdvcmRdKSwgbmV3IExpa2VSZXN0cmljdGlvbignTGFzdE5hbWUnLCBba2V5d29yZF0pXSk7XG4gICAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihjb21wb3VuZFJlc3RyaWN0aW9uKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgZmlsdGVyTWFwOiBNYXA8c3RyaW5nLCBBcnJheTxzdHJpbmc+PiA9IHRoaXMuX2ZpbHRlckNyaXRlcmlhLmdldEZpbHRlck1hcCgpO1xuXG4gICAgICAgICAgZmlsdGVyTWFwLmZvckVhY2goKGFycmF5OiBBcnJheTxzdHJpbmc+LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5LCBhcnJheSk7XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT0gJ0JpcnRoZGF5Jykge1xuICAgICAgICAgICAgICBsZXQgYmlydGhkYXlSZXN0cmljdGlvbiA9IG5ldyBBcnJheTxJUmVzdHJpY3Rpb24+KCk7XG4gICAgICAgICAgICAgIGxldCBtb250aEFycmF5ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgYmlydGhkYXkgb2YgYXJyYXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmlydGhkYXkgPT0gJ1RvZGF5Jykge1xuICAgICAgICAgICAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgIGxldCBzdGFydE51bSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICAgICAgbGV0IGVuZE51bSA9IHRvZGF5LmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IFN0cmluZyhzdGFydE51bSk7XG4gICAgICAgICAgICAgICAgICBsZXQgZW5kID0gU3RyaW5nKGVuZE51bSk7XG4gICAgICAgICAgICAgICAgICBpZiAoc3RhcnQubGVuZ3RoID09IDEpIHN0YXJ0ID0gJzAnICsgc3RhcnQ7XG4gICAgICAgICAgICAgICAgICBpZiAoZW5kLmxlbmd0aCA9PSAxKSBlbmQgPSAnMCcgKyBlbmQ7XG5cbiAgICAgICAgICAgICAgICAgIGJpcnRoZGF5UmVzdHJpY3Rpb24ucHVzaChuZXcgQW5kQ29tcG91bmRSZXN0cmljdGlvbihbbmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0JpcnRoZGF5TW9udGgnLCBbc3RhcnRdKSxcbiAgICAgICAgICAgICAgICAgIG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdCaXJ0aGRheURhdGUnLCBbZW5kXSldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKGJpcnRoZGF5Lmxlbmd0aCA9PSAxKSBiaXJ0aGRheSA9ICcwJyArIGJpcnRoZGF5O1xuICAgICAgICAgICAgICAgICAgbW9udGhBcnJheS5wdXNoKGJpcnRoZGF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAobW9udGhBcnJheS5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgIGJpcnRoZGF5UmVzdHJpY3Rpb24ucHVzaChuZXcgSW5SZXN0cmljdGlvbignQmlydGhkYXlNb250aCcsIG1vbnRoQXJyYXkpKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBPUkNvbXBvdW5kUmVzdHJpY3Rpb24oYmlydGhkYXlSZXN0cmljdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09ICdEYXRhU291cmNlJykge1xuICAgICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoICE9IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YXNvdXJjZSA9IGFycmF5WzBdO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhc291cmNlID09ICdFJykge1xuICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0RhdGFTb3VyY2UnLCBbJ09QVVMnXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBOb3RFcXVhbFJlc3RyaWN0aW9uKCdEYXRhU291cmNlJywgWydPUFVTJ10pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09ICdDb21wbGV0ZW5lc3MnKSB7XG4gICAgICAgICAgICAgIGxldCBjb21wbGV0ZW5lc3NPcHRpb24gPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0NvbXBsZXRlbmVzcycpO1xuICAgICAgICAgICAgICBsZXQgY29tcGxldGVuZXNzUmVzdHJpY3Rpb24gPSBuZXcgQXJyYXk8SVJlc3RyaWN0aW9uPigpO1xuICAgICAgICAgICAgICBjb21wbGV0ZW5lc3NPcHRpb24uZm9yRWFjaChwcm9maWxlQ29kZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNvZGUgPSBwcm9maWxlQ29kZS5nZXRDb2RlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkuaW5jbHVkZXMoY29kZSkpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKHByb2ZpbGVDb2RlLmdldEFyZ3VtZW50cygpKTtcbiAgICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IG9iai5zdGFydDtcbiAgICAgICAgICAgICAgICAgIGxldCBlbmQgPSBvYmouZW5kO1xuXG4gICAgICAgICAgICAgICAgICBzdGFydCA9IHN0YXJ0IC8gMTAwO1xuICAgICAgICAgICAgICAgICAgZW5kID0gZW5kIC8gMTAwO1xuXG4gICAgICAgICAgICAgICAgICBjb21wbGV0ZW5lc3NSZXN0cmljdGlvbi5wdXNoKG5ldyBBbmRDb21wb3VuZFJlc3RyaWN0aW9uKFtuZXcgR3JlYXRlck9yRXF1YWxSZXN0cmljdGlvbignQ29tcGxldGVuZXNzJywgW3N0YXJ0XSksIG5ldyBMZXNzT3JFcXVhbFJlc3RyaWN0aW9uKCdDb21wbGV0ZW5lc3MnLCBbZW5kXSldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2NvbXBsZXRlbmVzc1Jlc3RyaWN0aW9uIGxlbmd0aCcsIGNvbXBsZXRlbmVzc1Jlc3RyaWN0aW9uLmxlbmd0aCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZW5lc3NSZXN0cmljdGlvbjonLCBjb21wbGV0ZW5lc3NSZXN0cmljdGlvbik7XG4gICAgICAgICAgICAgIGlmIChjb21wbGV0ZW5lc3NSZXN0cmljdGlvbi5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBPUkNvbXBvdW5kUmVzdHJpY3Rpb24oY29tcGxldGVuZXNzUmVzdHJpY3Rpb24pKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY3VzdG9tZXJPYmo6JywgY3VzdG9tZXJPYmopO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbihrZXksIGFycmF5KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cblxuICAgICAgICAvL2FkZCBvcmRlciBieVxuICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgT3JkZXJCeVJlc3RyaWN0aW9uKFt7IGNvbHVtbjogJ0xhc3ROYW1lJywgb3JkZXI6ICdBU0MnIH1dKSlcblxuICAgICAgICAvL2FkZCBwYWdlIGxpbWl0XG4gICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBMaW1pdFJlc3RyaWN0aW9uKFt0aGlzLl9wYWdlSW5mby5wYWdlU2l6ZV0pKTtcbiAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IE9mZnNldFJlc3RyaWN0aW9uKFsodGhpcy5fcGFnZUluZm8ucGFnZSAtIDEpICogMTBdKSk7XG5cbiAgICAgICAgLy9pZiBoYXMgZWRpdCBwcm9maWxlIHdpbGwgaGFzIGNsaWVudElEXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuX3F1ZXJ5Q2xpZW50SUQpKSB7XG4gICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJywgW3RoaXMuX3F1ZXJ5Q2xpZW50SURdKSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcblxuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=