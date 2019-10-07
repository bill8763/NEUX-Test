/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StringUtils } from '@allianzSND/core';
var CustomerDetail = /** @class */ (function () {
    function CustomerDetail() {
        this._emails = new Array();
        this._tels = new Array();
        this._addresses = new Array();
        if (StringUtils.isEmpty(this.firstName))
            this.firstName = '';
        if (StringUtils.isEmpty(this.occupation))
            this.occupation = '';
        if (StringUtils.isEmpty(this.company))
            this.company = '';
        if (StringUtils.isEmpty(this.ageRange))
            this.ageRange = undefined;
        if (StringUtils.isEmpty(this.gender))
            this.gender = undefined;
        if (StringUtils.isEmpty(this.income))
            this.income = undefined;
        if (StringUtils.isEmpty(this.source))
            this.source = undefined;
        if (StringUtils.isEmpty(this.marriage))
            this.marriage = undefined;
        if (StringUtils.isEmpty(this.children))
            this.children = undefined;
        if (StringUtils.isEmpty(this.familiarity))
            this.familiarity = undefined;
        if (StringUtils.isEmpty(this.recentStatus))
            this.recentStatus = undefined;
        if (StringUtils.isEmpty(this.manpa))
            this.manpa = undefined;
        if (StringUtils.isEmpty(this.contactFrequancy))
            this._contactFrequancy = undefined;
        if (StringUtils.isEmpty(this.possibility))
            this.possibility = '';
        if (StringUtils.isEmpty(this.clientID))
            this.clientID = '';
        this.updateEmptyStatus();
    }
    Object.defineProperty(CustomerDetail.prototype, "dataSource", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataSource;
        },
        set: /**
         * @param {?} dataSource
         * @return {?}
         */
        function (dataSource) {
            this._dataSource = dataSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "clientID", {
        get: /**
         * @return {?}
         */
        function () {
            return this._clientID;
        },
        set: /**
         * @param {?} clientID
         * @return {?}
         */
        function (clientID) {
            this._clientID = clientID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "lastName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._lastName;
        },
        set: /**
         * @param {?} lastName
         * @return {?}
         */
        function (lastName) {
            this._lastName = lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "firstName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._firstName;
        },
        set: /**
         * @param {?} firstName
         * @return {?}
         */
        function (firstName) {
            this._firstName = firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "tels", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tels;
        },
        set: /**
         * @param {?} tels
         * @return {?}
         */
        function (tels) {
            this._tels = tels;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "emails", {
        get: /**
         * @return {?}
         */
        function () {
            return this._emails;
        },
        set: /**
         * @param {?} emails
         * @return {?}
         */
        function (emails) {
            this._emails = emails;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "addresses", {
        get: /**
         * @return {?}
         */
        function () {
            return this._addresses;
        },
        set: /**
         * @param {?} addresses
         * @return {?}
         */
        function (addresses) {
            this._addresses = addresses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "birthday", {
        get: /**
         * @return {?}
         */
        function () {
            return this._birthday;
        },
        set: /**
         * @param {?} birthday
         * @return {?}
         */
        function (birthday) {
            this._birthday = birthday;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "ageRange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ageRange;
        },
        set: /**
         * @param {?} ageRange
         * @return {?}
         */
        function (ageRange) {
            this._ageRange = ageRange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "gender", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gender;
        },
        set: /**
         * @param {?} gender
         * @return {?}
         */
        function (gender) {
            this._gender = gender;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "occupation", {
        get: /**
         * @return {?}
         */
        function () {
            return this._occupation;
        },
        set: /**
         * @param {?} occupation
         * @return {?}
         */
        function (occupation) {
            this._occupation = occupation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "company", {
        get: /**
         * @return {?}
         */
        function () {
            return this._company;
        },
        set: /**
         * @param {?} company
         * @return {?}
         */
        function (company) {
            this._company = company;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "income", {
        get: /**
         * @return {?}
         */
        function () {
            return this._income;
        },
        set: /**
         * @param {?} income
         * @return {?}
         */
        function (income) {
            this._income = income;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "source", {
        get: /**
         * @return {?}
         */
        function () {
            return this._source;
        },
        set: /**
         * @param {?} source
         * @return {?}
         */
        function (source) {
            this._source = source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "marriage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._marriage;
        },
        set: /**
         * @param {?} marriage
         * @return {?}
         */
        function (marriage) {
            this._marriage = marriage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "children", {
        get: /**
         * @return {?}
         */
        function () {
            return this._children;
        },
        set: /**
         * @param {?} children
         * @return {?}
         */
        function (children) {
            this._children = children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "familiarity", {
        get: /**
         * @return {?}
         */
        function () {
            return this._familiarity;
        },
        set: /**
         * @param {?} familiarity
         * @return {?}
         */
        function (familiarity) {
            this._familiarity = familiarity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "recentStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._recentStatus;
        },
        set: /**
         * @param {?} recentStatus
         * @return {?}
         */
        function (recentStatus) {
            this._recentStatus = recentStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "manpa", {
        get: /**
         * @return {?}
         */
        function () {
            return this._manpa;
        },
        set: /**
         * @param {?} manpa
         * @return {?}
         */
        function (manpa) {
            this._manpa = manpa;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "contactFrequancy", {
        get: /**
         * @return {?}
         */
        function () {
            return this._contactFrequancy;
        },
        set: /**
         * @param {?} contactFrequancy
         * @return {?}
         */
        function (contactFrequancy) {
            this._contactFrequancy = contactFrequancy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "possibility", {
        get: /**
         * @return {?}
         */
        function () {
            return this._possibility;
        },
        set: /**
         * @param {?} possibility
         * @return {?}
         */
        function (possibility) {
            this._possibility = possibility;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "isFollow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isFollow;
        },
        set: /**
         * @param {?} isFollow
         * @return {?}
         */
        function (isFollow) {
            this._isFollow = isFollow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDetail.prototype, "isEmptyInfo", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isEmptyInfo;
        },
        set: /**
         * @param {?} isEmptyInfo
         * @return {?}
         */
        function (isEmptyInfo) {
            this._isEmptyInfo = isEmptyInfo;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerDetail.prototype.updateEmptyStatus = /**
     * @return {?}
     */
    function () {
        if (this.birthday == null && StringUtils.isEmpty(this.gender) && StringUtils.isEmpty(this.occupation)
            && StringUtils.isEmpty(this.company) && StringUtils.isEmpty(this.income)
            && StringUtils.isEmpty(this.source) && StringUtils.isEmpty(this.marriage)
            && StringUtils.isEmpty(this.children) && StringUtils.isEmpty(this.familiarity)
            && StringUtils.isEmpty(this.manpa) && StringUtils.isEmpty(this.recentStatus)) {
            this.isEmptyInfo = true;
        }
        else {
            this.isEmptyInfo = false;
        }
    };
    /**
     * @param {?} isFollow
     * @return {?}
     */
    CustomerDetail.prototype.updateFollowStatus = /**
     * @param {?} isFollow
     * @return {?}
     */
    function (isFollow) {
        this.isFollow = isFollow;
    };
    /**
     * @param {?} email
     * @return {?}
     */
    CustomerDetail.prototype.addEmail = /**
     * @param {?} email
     * @return {?}
     */
    function (email) {
        this.emails.push(email);
    };
    /**
     * @param {?} tel
     * @return {?}
     */
    CustomerDetail.prototype.addTel = /**
     * @param {?} tel
     * @return {?}
     */
    function (tel) {
        this.tels.push(tel);
    };
    /**
     * @param {?} address
     * @return {?}
     */
    CustomerDetail.prototype.addAddress = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.addresses.push(address);
    };
    /**
     * @param {?} tel
     * @param {?} index
     * @return {?}
     */
    CustomerDetail.prototype.deleteTel = /**
     * @param {?} tel
     * @param {?} index
     * @return {?}
     */
    function (tel, index) {
        this.tels.splice(index, 1);
    };
    /**
     * @param {?} email
     * @param {?} index
     * @return {?}
     */
    CustomerDetail.prototype.deleteEmail = /**
     * @param {?} email
     * @param {?} index
     * @return {?}
     */
    function (email, index) {
        this.emails.splice(index, 1);
    };
    /**
     * @param {?} addresses
     * @param {?} index
     * @return {?}
     */
    CustomerDetail.prototype.deleteAddress = /**
     * @param {?} addresses
     * @param {?} index
     * @return {?}
     */
    function (addresses, index) {
        this.addresses.slice(index, 1);
    };
    /**
     * @return {?}
     */
    CustomerDetail.prototype.notOPUSTelNumber = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var count = 0;
        for (var i = 0; i < this.tels.length; i++) {
            if (this.tels[i].dataSource != 'OPUS')
                count++;
        }
        return count;
    };
    return CustomerDetail;
}());
export { CustomerDetail };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._lastName;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._firstName;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._occupation;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._company;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._birthday;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._ageRange;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._gender;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._income;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._source;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._marriage;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._children;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._familiarity;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._recentStatus;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._manpa;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._contactFrequancy;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._possibility;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._isFollow;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._dataSource;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._isEmptyInfo;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._emails;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._tels;
    /**
     * @type {?}
     * @private
     */
    CustomerDetail.prototype._addresses;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJEZXRhaWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL0N1c3RvbWVyRGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJL0M7SUEwQkk7UUFKUSxZQUFPLEdBQTBCLElBQUksS0FBSyxFQUFpQixDQUFDO1FBQzVELFVBQUssR0FBd0IsSUFBSSxLQUFLLEVBQWUsQ0FBQztRQUN0RCxlQUFVLEdBQTRCLElBQUksS0FBSyxFQUFtQixDQUFDO1FBSW5FLElBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDNUQsSUFBRyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUM5RCxJQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3hELElBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDakUsSUFBRyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUM3RCxJQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQzdELElBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQUUsSUFB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Qjs7WUFDUSxLQUFLLEdBQUcsQ0FBQztRQUViLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRyxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLE1BQU07Z0JBQUUsS0FBSyxFQUFFLENBQUM7U0FDakQ7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBNVJELElBNFJDOzs7Ozs7O0lBM1JHLG1DQUE0Qjs7Ozs7SUFDNUIsbUNBQTJCOzs7OztJQUMzQixvQ0FBNEI7Ozs7O0lBQzVCLHFDQUE2Qjs7Ozs7SUFDN0Isa0NBQTBCOzs7OztJQUMxQixtQ0FBeUI7Ozs7O0lBQ3pCLG1DQUEyQjs7Ozs7SUFDM0IsaUNBQXlCOzs7OztJQUN6QixpQ0FBeUI7Ozs7O0lBQ3pCLGlDQUF5Qjs7Ozs7SUFDekIsbUNBQTJCOzs7OztJQUMzQixtQ0FBMkI7Ozs7O0lBQzNCLHNDQUE4Qjs7Ozs7SUFDOUIsdUNBQStCOzs7OztJQUMvQixnQ0FBd0I7Ozs7O0lBQ3hCLDJDQUFtQzs7Ozs7SUFDbkMsc0NBQThCOzs7OztJQUM5QixtQ0FBNEI7Ozs7O0lBQzVCLHFDQUE2Qjs7Ozs7SUFDN0Isc0NBQStCOzs7OztJQUUvQixpQ0FBb0U7Ozs7O0lBQ3BFLCtCQUE4RDs7Ozs7SUFDOUQsb0NBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEN1c3RvbWVyQWRkcmVzcyB9IGZyb20gJy4vQ3VzdG9tZXJBZGRyZXNzJztcbmltcG9ydCB7IEN1c3RvbWVyRW1haWwgfSBmcm9tICcuL0N1c3RvbWVyRW1haWwnO1xuaW1wb3J0IHsgQ3VzdG9tZXJUZWwgfSBmcm9tICcuL0N1c3RvbWVyVGVsJztcbmV4cG9ydCBjbGFzcyBDdXN0b21lckRldGFpbHtcbiAgICBwcml2YXRlIF9jbGllbnRJRCAgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbGFzdE5hbWUgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZmlyc3ROYW1lIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX29jY3VwYXRpb24gOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfY29tcGFueSA6IHN0cmluZztcbiAgICBwcml2YXRlIF9iaXJ0aGRheSA6IERhdGU7XG4gICAgcHJpdmF0ZSBfYWdlUmFuZ2UgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZ2VuZGVyIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2luY29tZSA6IHN0cmluZztcbiAgICBwcml2YXRlIF9zb3VyY2UgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbWFycmlhZ2UgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfY2hpbGRyZW4gOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZmFtaWxpYXJpdHkgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcmVjZW50U3RhdHVzIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX21hbnBhIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2NvbnRhY3RGcmVxdWFuY3kgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcG9zc2liaWxpdHkgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaXNGb2xsb3cgOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2RhdGFTb3VyY2UgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaXNFbXB0eUluZm8gOiBib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfZW1haWxzIDogQXJyYXk8Q3VzdG9tZXJFbWFpbD4gPSBuZXcgQXJyYXk8Q3VzdG9tZXJFbWFpbD4oKTtcbiAgICBwcml2YXRlIF90ZWxzIDogQXJyYXk8Q3VzdG9tZXJUZWw+ID0gbmV3IEFycmF5PEN1c3RvbWVyVGVsPigpO1xuICAgIHByaXZhdGUgX2FkZHJlc3NlcyA6IEFycmF5PEN1c3RvbWVyQWRkcmVzcz4gPSBuZXcgQXJyYXk8Q3VzdG9tZXJBZGRyZXNzPigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5maXJzdE5hbWUpKSB0aGlzLmZpcnN0TmFtZSA9ICcnO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLm9jY3VwYXRpb24pKSB0aGlzLm9jY3VwYXRpb24gPSAnJztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jb21wYW55KSkgdGhpcy5jb21wYW55ID0gJyc7XG4gICAgICAgICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuYWdlUmFuZ2UpKSB0aGlzLmFnZVJhbmdlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmdlbmRlcikpIHRoaXMuZ2VuZGVyID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmluY29tZSkpIHRoaXMuaW5jb21lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLnNvdXJjZSkpIHRoaXMuc291cmNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLm1hcnJpYWdlKSkgdGhpcy5tYXJyaWFnZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jaGlsZHJlbikpIHRoaXMuY2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuZmFtaWxpYXJpdHkpKSB0aGlzLmZhbWlsaWFyaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLnJlY2VudFN0YXR1cykpIHRoaXMucmVjZW50U3RhdHVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLm1hbnBhKSkgdGhpcy5tYW5wYSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jb250YWN0RnJlcXVhbmN5KSkgdGhpcy5fY29udGFjdEZyZXF1YW5jeSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5wb3NzaWJpbGl0eSkpIHRoaXMucG9zc2liaWxpdHkgPSAnJztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jbGllbnRJRCkpIHRoaXMuY2xpZW50SUQgPSAnJztcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVFbXB0eVN0YXR1cygpO1xuICAgIH1cblxuICAgIGdldCBkYXRhU291cmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcbiAgICB9XG5cbiAgICBnZXQgY2xpZW50SUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRJRDtcbiAgICB9ICAgIFxuXG4gICAgZ2V0IGxhc3ROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgZmlyc3ROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IHRlbHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbHM7XG4gICAgfVxuXG4gICAgZ2V0IGVtYWlscygpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZW1haWxzO1xuICAgIH1cblxuICAgIGdldCBhZGRyZXNzZXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3NlcztcbiAgICB9XG5cbiAgICBnZXQgYmlydGhkYXkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpcnRoZGF5O1xuICAgIH1cblxuICAgIGdldCBhZ2VSYW5nZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYWdlUmFuZ2U7XG4gICAgfVxuXG4gICAgZ2V0IGdlbmRlcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2VuZGVyO1xuICAgIH1cblxuICAgIGdldCBvY2N1cGF0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9vY2N1cGF0aW9uO1xuICAgIH1cblxuICAgIGdldCBjb21wYW55KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wYW55O1xuICAgIH1cblxuICAgIGdldCBpbmNvbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luY29tZTtcbiAgICB9XG5cbiAgICBnZXQgc291cmNlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VyY2U7XG4gICAgfVxuXG4gICAgZ2V0IG1hcnJpYWdlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJyaWFnZTtcbiAgICB9XG5cbiAgICBnZXQgY2hpbGRyZW4oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xuICAgIH1cblxuICAgIGdldCBmYW1pbGlhcml0eSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZmFtaWxpYXJpdHk7XG4gICAgfVxuXG4gICAgZ2V0IHJlY2VudFN0YXR1cygpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVjZW50U3RhdHVzO1xuICAgIH1cblxuICAgIGdldCBtYW5wYSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFucGE7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRhY3RGcmVxdWFuY3koKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhY3RGcmVxdWFuY3k7XG4gICAgfVxuXG4gICAgZ2V0IHBvc3NpYmlsaXR5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NzaWJpbGl0eTtcbiAgICB9XG5cbiAgICBnZXQgaXNGb2xsb3coKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0ZvbGxvdztcbiAgICB9XG5cbiAgICBnZXQgaXNFbXB0eUluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0VtcHR5SW5mbztcbiAgICB9XG5cblxuICAgIHNldCBkYXRhU291cmNlKGRhdGFTb3VyY2UgOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XG4gICAgfVxuICAgIFxuICAgIHNldCBjbGllbnRJRChjbGllbnRJRCA6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jbGllbnRJRCA9IGNsaWVudElEO1xuICAgIH1cblxuICAgIHNldCBsYXN0TmFtZShsYXN0TmFtZSA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2xhc3ROYW1lID0gbGFzdE5hbWU7XG4gICAgfVxuXG4gICAgc2V0IGZpcnN0TmFtZShmaXJzdE5hbWUgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgfVxuXG4gICAgc2V0IHRlbHModGVscyA6IEFycmF5PEN1c3RvbWVyVGVsPil7XG4gICAgICAgIHRoaXMuX3RlbHMgID0gdGVscztcbiAgICB9XG5cbiAgICBzZXQgZW1haWxzKGVtYWlscyA6IEFycmF5PEN1c3RvbWVyRW1haWw+KXtcbiAgICAgICAgdGhpcy5fZW1haWxzID0gZW1haWxzO1xuICAgIH1cblxuICAgIHNldCBhZGRyZXNzZXMoYWRkcmVzc2VzIDogQXJyYXk8Q3VzdG9tZXJBZGRyZXNzPil7XG4gICAgICAgIHRoaXMuX2FkZHJlc3NlcyA9IGFkZHJlc3NlcztcbiAgICB9XG5cbiAgICBzZXQgYmlydGhkYXkoYmlydGhkYXkgOiBEYXRlKXtcbiAgICAgICAgdGhpcy5fYmlydGhkYXkgPSBiaXJ0aGRheTtcbiAgICAgICBcbiAgICB9XG5cbiAgICBzZXQgYWdlUmFuZ2UoYWdlUmFuZ2UgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9hZ2VSYW5nZSA9IGFnZVJhbmdlO1xuICAgIH1cblxuICAgIHNldCBnZW5kZXIoZ2VuZGVyIDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fZ2VuZGVyID0gZ2VuZGVyO1xuICAgIH1cblxuXG4gICAgc2V0IG9jY3VwYXRpb24ob2NjdXBhdGlvbiA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX29jY3VwYXRpb24gPSBvY2N1cGF0aW9uO1xuICAgIH1cblxuICAgIHNldCBjb21wYW55KGNvbXBhbnkgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9jb21wYW55ID0gY29tcGFueTtcbiAgICB9XG5cbiAgICBzZXQgaW5jb21lKGluY29tZSA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2luY29tZSA9IGluY29tZTtcbiAgICB9XG5cbiAgICBzZXQgc291cmNlKHNvdXJjZSA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX3NvdXJjZSA9IHNvdXJjZTtcbiAgICB9XG5cbiAgICBzZXQgbWFycmlhZ2UobWFycmlhZ2UgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9tYXJyaWFnZSA9IG1hcnJpYWdlO1xuICAgIH1cblxuICAgIHNldCBjaGlsZHJlbihjaGlsZHJlbiA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgc2V0IGZhbWlsaWFyaXR5KGZhbWlsaWFyaXR5IDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fZmFtaWxpYXJpdHkgPSBmYW1pbGlhcml0eTtcbiAgICB9XG5cbiAgICBzZXQgcmVjZW50U3RhdHVzKHJlY2VudFN0YXR1cyA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX3JlY2VudFN0YXR1cyA9IHJlY2VudFN0YXR1cztcbiAgICB9XG5cbiAgICBzZXQgbWFucGEobWFucGEgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9tYW5wYSA9IG1hbnBhO1xuICAgIH1cblxuICAgIHNldCBjb250YWN0RnJlcXVhbmN5KGNvbnRhY3RGcmVxdWFuY3kgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9jb250YWN0RnJlcXVhbmN5ID0gY29udGFjdEZyZXF1YW5jeTtcbiAgICB9XG5cbiAgICBzZXQgcG9zc2liaWxpdHkocG9zc2liaWxpdHkgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9wb3NzaWJpbGl0eSA9IHBvc3NpYmlsaXR5OyAgIFxuICAgIH1cblxuICAgIHNldCBpc0ZvbGxvdyhpc0ZvbGxvdyA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNGb2xsb3cgPSBpc0ZvbGxvdztcbiAgICB9XG5cbiAgICBzZXQgaXNFbXB0eUluZm8oaXNFbXB0eUluZm8gOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzRW1wdHlJbmZvID0gaXNFbXB0eUluZm87XG4gICAgfVxuXG5cbiAgICB1cGRhdGVFbXB0eVN0YXR1cygpIHtcbiAgICAgICAgaWYodGhpcy5iaXJ0aGRheSA9PSBudWxsICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5nZW5kZXIpICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5vY2N1cGF0aW9uKVxuICAgICAgICAgICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jb21wYW55KSAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuaW5jb21lKVxuICAgICAgICAgICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5zb3VyY2UpICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5tYXJyaWFnZSlcbiAgICAgICAgICAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuY2hpbGRyZW4pICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5mYW1pbGlhcml0eSlcbiAgICAgICAgICAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMubWFucGEpICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5yZWNlbnRTdGF0dXMpKSB7XG4gICAgICAgICAgICB0aGlzLmlzRW1wdHlJbmZvID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNFbXB0eUluZm8gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRm9sbG93U3RhdHVzKGlzRm9sbG93IDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmlzRm9sbG93ID0gaXNGb2xsb3c7XG4gICAgfVxuXG4gICAgYWRkRW1haWwoZW1haWwgOiBDdXN0b21lckVtYWlsKSB7XG4gICAgICAgIHRoaXMuZW1haWxzLnB1c2goZW1haWwpO1xuICAgIH1cblxuICAgIGFkZFRlbCh0ZWwgOiBDdXN0b21lclRlbCkge1xuICAgICAgICB0aGlzLnRlbHMucHVzaCh0ZWwpO1xuICAgIH1cblxuICAgIGFkZEFkZHJlc3MoYWRkcmVzcyA6IEN1c3RvbWVyQWRkcmVzcykge1xuICAgICAgICB0aGlzLmFkZHJlc3Nlcy5wdXNoKGFkZHJlc3MpO1xuICAgIH1cblxuICAgIGRlbGV0ZVRlbCh0ZWw6Q3VzdG9tZXJUZWwsaW5kZXg6bnVtYmVyKXtcbiAgICAgICAgdGhpcy50ZWxzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlRW1haWwoZW1haWw6c3RyaW5nLGluZGV4Om51bWJlcil7XG4gICAgICAgIHRoaXMuZW1haWxzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG4gICAgZGVsZXRlQWRkcmVzcyhhZGRyZXNzZXMgOiBDdXN0b21lckFkZHJlc3MsaW5kZXg6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5hZGRyZXNzZXMuc2xpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG4gICAgbm90T1BVU1RlbE51bWJlcigpIDogbnVtYmVye1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgdGhpcy50ZWxzLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYodGhpcy50ZWxzW2ldLmRhdGFTb3VyY2UgIT0gJ09QVVMnKSBjb3VudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbn0iXX0=