/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StringUtils } from '@allianzSND/core';
export class CustomerDetail {
    constructor() {
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
    /**
     * @return {?}
     */
    get dataSource() {
        return this._dataSource;
    }
    /**
     * @return {?}
     */
    get clientID() {
        return this._clientID;
    }
    /**
     * @return {?}
     */
    get lastName() {
        return this._lastName;
    }
    /**
     * @return {?}
     */
    get firstName() {
        return this._firstName;
    }
    /**
     * @return {?}
     */
    get tels() {
        return this._tels;
    }
    /**
     * @return {?}
     */
    get emails() {
        return this._emails;
    }
    /**
     * @return {?}
     */
    get addresses() {
        return this._addresses;
    }
    /**
     * @return {?}
     */
    get birthday() {
        return this._birthday;
    }
    /**
     * @return {?}
     */
    get ageRange() {
        return this._ageRange;
    }
    /**
     * @return {?}
     */
    get gender() {
        return this._gender;
    }
    /**
     * @return {?}
     */
    get occupation() {
        return this._occupation;
    }
    /**
     * @return {?}
     */
    get company() {
        return this._company;
    }
    /**
     * @return {?}
     */
    get income() {
        return this._income;
    }
    /**
     * @return {?}
     */
    get source() {
        return this._source;
    }
    /**
     * @return {?}
     */
    get marriage() {
        return this._marriage;
    }
    /**
     * @return {?}
     */
    get children() {
        return this._children;
    }
    /**
     * @return {?}
     */
    get familiarity() {
        return this._familiarity;
    }
    /**
     * @return {?}
     */
    get recentStatus() {
        return this._recentStatus;
    }
    /**
     * @return {?}
     */
    get manpa() {
        return this._manpa;
    }
    /**
     * @return {?}
     */
    get contactFrequancy() {
        return this._contactFrequancy;
    }
    /**
     * @return {?}
     */
    get possibility() {
        return this._possibility;
    }
    /**
     * @return {?}
     */
    get isFollow() {
        return this._isFollow;
    }
    /**
     * @return {?}
     */
    get isEmptyInfo() {
        return this._isEmptyInfo;
    }
    /**
     * @param {?} dataSource
     * @return {?}
     */
    set dataSource(dataSource) {
        this._dataSource = dataSource;
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    set clientID(clientID) {
        this._clientID = clientID;
    }
    /**
     * @param {?} lastName
     * @return {?}
     */
    set lastName(lastName) {
        this._lastName = lastName;
    }
    /**
     * @param {?} firstName
     * @return {?}
     */
    set firstName(firstName) {
        this._firstName = firstName;
    }
    /**
     * @param {?} tels
     * @return {?}
     */
    set tels(tels) {
        this._tels = tels;
    }
    /**
     * @param {?} emails
     * @return {?}
     */
    set emails(emails) {
        this._emails = emails;
    }
    /**
     * @param {?} addresses
     * @return {?}
     */
    set addresses(addresses) {
        this._addresses = addresses;
    }
    /**
     * @param {?} birthday
     * @return {?}
     */
    set birthday(birthday) {
        this._birthday = birthday;
    }
    /**
     * @param {?} ageRange
     * @return {?}
     */
    set ageRange(ageRange) {
        this._ageRange = ageRange;
    }
    /**
     * @param {?} gender
     * @return {?}
     */
    set gender(gender) {
        this._gender = gender;
    }
    /**
     * @param {?} occupation
     * @return {?}
     */
    set occupation(occupation) {
        this._occupation = occupation;
    }
    /**
     * @param {?} company
     * @return {?}
     */
    set company(company) {
        this._company = company;
    }
    /**
     * @param {?} income
     * @return {?}
     */
    set income(income) {
        this._income = income;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    set source(source) {
        this._source = source;
    }
    /**
     * @param {?} marriage
     * @return {?}
     */
    set marriage(marriage) {
        this._marriage = marriage;
    }
    /**
     * @param {?} children
     * @return {?}
     */
    set children(children) {
        this._children = children;
    }
    /**
     * @param {?} familiarity
     * @return {?}
     */
    set familiarity(familiarity) {
        this._familiarity = familiarity;
    }
    /**
     * @param {?} recentStatus
     * @return {?}
     */
    set recentStatus(recentStatus) {
        this._recentStatus = recentStatus;
    }
    /**
     * @param {?} manpa
     * @return {?}
     */
    set manpa(manpa) {
        this._manpa = manpa;
    }
    /**
     * @param {?} contactFrequancy
     * @return {?}
     */
    set contactFrequancy(contactFrequancy) {
        this._contactFrequancy = contactFrequancy;
    }
    /**
     * @param {?} possibility
     * @return {?}
     */
    set possibility(possibility) {
        this._possibility = possibility;
    }
    /**
     * @param {?} isFollow
     * @return {?}
     */
    set isFollow(isFollow) {
        this._isFollow = isFollow;
    }
    /**
     * @param {?} isEmptyInfo
     * @return {?}
     */
    set isEmptyInfo(isEmptyInfo) {
        this._isEmptyInfo = isEmptyInfo;
    }
    /**
     * @return {?}
     */
    updateEmptyStatus() {
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
    }
    /**
     * @param {?} isFollow
     * @return {?}
     */
    updateFollowStatus(isFollow) {
        this.isFollow = isFollow;
    }
    /**
     * @param {?} email
     * @return {?}
     */
    addEmail(email) {
        this.emails.push(email);
    }
    /**
     * @param {?} tel
     * @return {?}
     */
    addTel(tel) {
        this.tels.push(tel);
    }
    /**
     * @param {?} address
     * @return {?}
     */
    addAddress(address) {
        this.addresses.push(address);
    }
    /**
     * @param {?} tel
     * @param {?} index
     * @return {?}
     */
    deleteTel(tel, index) {
        this.tels.splice(index, 1);
    }
    /**
     * @param {?} email
     * @param {?} index
     * @return {?}
     */
    deleteEmail(email, index) {
        this.emails.splice(index, 1);
    }
    /**
     * @param {?} addresses
     * @param {?} index
     * @return {?}
     */
    deleteAddress(addresses, index) {
        this.addresses.slice(index, 1);
    }
    /**
     * @return {?}
     */
    notOPUSTelNumber() {
        /** @type {?} */
        let count = 0;
        for (let i = 0; i < this.tels.length; i++) {
            if (this.tels[i].dataSource != 'OPUS')
                count++;
        }
        return count;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJEZXRhaWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL0N1c3RvbWVyRGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJL0MsTUFBTTtJQTBCRjtRQUpRLFlBQU8sR0FBMEIsSUFBSSxLQUFLLEVBQWlCLENBQUM7UUFDNUQsVUFBSyxHQUF3QixJQUFJLEtBQUssRUFBZSxDQUFDO1FBQ3RELGVBQVUsR0FBNEIsSUFBSSxLQUFLLEVBQW1CLENBQUM7UUFJbkUsSUFBRyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM1RCxJQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQzlELElBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDeEQsSUFBRyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNqRSxJQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQzdELElBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDN0QsSUFBRyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFB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O0lBQ2pCLENBQUM7Q0FDSjs7Ozs7O0lBM1JHLG1DQUE0Qjs7Ozs7SUFDNUIsbUNBQTJCOzs7OztJQUMzQixvQ0FBNEI7Ozs7O0lBQzVCLHFDQUE2Qjs7Ozs7SUFDN0Isa0NBQTBCOzs7OztJQUMxQixtQ0FBeUI7Ozs7O0lBQ3pCLG1DQUEyQjs7Ozs7SUFDM0IsaUNBQXlCOzs7OztJQUN6QixpQ0FBeUI7Ozs7O0lBQ3pCLGlDQUF5Qjs7Ozs7SUFDekIsbUNBQTJCOzs7OztJQUMzQixtQ0FBMkI7Ozs7O0lBQzNCLHNDQUE4Qjs7Ozs7SUFDOUIsdUNBQStCOzs7OztJQUMvQixnQ0FBd0I7Ozs7O0lBQ3hCLDJDQUFtQzs7Ozs7SUFDbkMsc0NBQThCOzs7OztJQUM5QixtQ0FBNEI7Ozs7O0lBQzVCLHFDQUE2Qjs7Ozs7SUFDN0Isc0NBQStCOzs7OztJQUUvQixpQ0FBb0U7Ozs7O0lBQ3BFLCtCQUE4RDs7Ozs7SUFDOUQsb0NBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEN1c3RvbWVyQWRkcmVzcyB9IGZyb20gJy4vQ3VzdG9tZXJBZGRyZXNzJztcbmltcG9ydCB7IEN1c3RvbWVyRW1haWwgfSBmcm9tICcuL0N1c3RvbWVyRW1haWwnO1xuaW1wb3J0IHsgQ3VzdG9tZXJUZWwgfSBmcm9tICcuL0N1c3RvbWVyVGVsJztcbmV4cG9ydCBjbGFzcyBDdXN0b21lckRldGFpbHtcbiAgICBwcml2YXRlIF9jbGllbnRJRCAgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbGFzdE5hbWUgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZmlyc3ROYW1lIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX29jY3VwYXRpb24gOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfY29tcGFueSA6IHN0cmluZztcbiAgICBwcml2YXRlIF9iaXJ0aGRheSA6IERhdGU7XG4gICAgcHJpdmF0ZSBfYWdlUmFuZ2UgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZ2VuZGVyIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2luY29tZSA6IHN0cmluZztcbiAgICBwcml2YXRlIF9zb3VyY2UgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbWFycmlhZ2UgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfY2hpbGRyZW4gOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZmFtaWxpYXJpdHkgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcmVjZW50U3RhdHVzIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX21hbnBhIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2NvbnRhY3RGcmVxdWFuY3kgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcG9zc2liaWxpdHkgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaXNGb2xsb3cgOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2RhdGFTb3VyY2UgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaXNFbXB0eUluZm8gOiBib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfZW1haWxzIDogQXJyYXk8Q3VzdG9tZXJFbWFpbD4gPSBuZXcgQXJyYXk8Q3VzdG9tZXJFbWFpbD4oKTtcbiAgICBwcml2YXRlIF90ZWxzIDogQXJyYXk8Q3VzdG9tZXJUZWw+ID0gbmV3IEFycmF5PEN1c3RvbWVyVGVsPigpO1xuICAgIHByaXZhdGUgX2FkZHJlc3NlcyA6IEFycmF5PEN1c3RvbWVyQWRkcmVzcz4gPSBuZXcgQXJyYXk8Q3VzdG9tZXJBZGRyZXNzPigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5maXJzdE5hbWUpKSB0aGlzLmZpcnN0TmFtZSA9ICcnO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLm9jY3VwYXRpb24pKSB0aGlzLm9jY3VwYXRpb24gPSAnJztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jb21wYW55KSkgdGhpcy5jb21wYW55ID0gJyc7XG4gICAgICAgICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuYWdlUmFuZ2UpKSB0aGlzLmFnZVJhbmdlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmdlbmRlcikpIHRoaXMuZ2VuZGVyID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmluY29tZSkpIHRoaXMuaW5jb21lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLnNvdXJjZSkpIHRoaXMuc291cmNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLm1hcnJpYWdlKSkgdGhpcy5tYXJyaWFnZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jaGlsZHJlbikpIHRoaXMuY2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuZmFtaWxpYXJpdHkpKSB0aGlzLmZhbWlsaWFyaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLnJlY2VudFN0YXR1cykpIHRoaXMucmVjZW50U3RhdHVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLm1hbnBhKSkgdGhpcy5tYW5wYSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jb250YWN0RnJlcXVhbmN5KSkgdGhpcy5fY29udGFjdEZyZXF1YW5jeSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5wb3NzaWJpbGl0eSkpIHRoaXMucG9zc2liaWxpdHkgPSAnJztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jbGllbnRJRCkpIHRoaXMuY2xpZW50SUQgPSAnJztcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVFbXB0eVN0YXR1cygpO1xuICAgIH1cblxuICAgIGdldCBkYXRhU291cmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcbiAgICB9XG5cbiAgICBnZXQgY2xpZW50SUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRJRDtcbiAgICB9ICAgIFxuXG4gICAgZ2V0IGxhc3ROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgZmlyc3ROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IHRlbHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbHM7XG4gICAgfVxuXG4gICAgZ2V0IGVtYWlscygpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZW1haWxzO1xuICAgIH1cblxuICAgIGdldCBhZGRyZXNzZXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3NlcztcbiAgICB9XG5cbiAgICBnZXQgYmlydGhkYXkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpcnRoZGF5O1xuICAgIH1cblxuICAgIGdldCBhZ2VSYW5nZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYWdlUmFuZ2U7XG4gICAgfVxuXG4gICAgZ2V0IGdlbmRlcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2VuZGVyO1xuICAgIH1cblxuICAgIGdldCBvY2N1cGF0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9vY2N1cGF0aW9uO1xuICAgIH1cblxuICAgIGdldCBjb21wYW55KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wYW55O1xuICAgIH1cblxuICAgIGdldCBpbmNvbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luY29tZTtcbiAgICB9XG5cbiAgICBnZXQgc291cmNlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VyY2U7XG4gICAgfVxuXG4gICAgZ2V0IG1hcnJpYWdlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJyaWFnZTtcbiAgICB9XG5cbiAgICBnZXQgY2hpbGRyZW4oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xuICAgIH1cblxuICAgIGdldCBmYW1pbGlhcml0eSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZmFtaWxpYXJpdHk7XG4gICAgfVxuXG4gICAgZ2V0IHJlY2VudFN0YXR1cygpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVjZW50U3RhdHVzO1xuICAgIH1cblxuICAgIGdldCBtYW5wYSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFucGE7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRhY3RGcmVxdWFuY3koKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhY3RGcmVxdWFuY3k7XG4gICAgfVxuXG4gICAgZ2V0IHBvc3NpYmlsaXR5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NzaWJpbGl0eTtcbiAgICB9XG5cbiAgICBnZXQgaXNGb2xsb3coKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0ZvbGxvdztcbiAgICB9XG5cbiAgICBnZXQgaXNFbXB0eUluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0VtcHR5SW5mbztcbiAgICB9XG5cblxuICAgIHNldCBkYXRhU291cmNlKGRhdGFTb3VyY2UgOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XG4gICAgfVxuICAgIFxuICAgIHNldCBjbGllbnRJRChjbGllbnRJRCA6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jbGllbnRJRCA9IGNsaWVudElEO1xuICAgIH1cblxuICAgIHNldCBsYXN0TmFtZShsYXN0TmFtZSA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2xhc3ROYW1lID0gbGFzdE5hbWU7XG4gICAgfVxuXG4gICAgc2V0IGZpcnN0TmFtZShmaXJzdE5hbWUgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgfVxuXG4gICAgc2V0IHRlbHModGVscyA6IEFycmF5PEN1c3RvbWVyVGVsPil7XG4gICAgICAgIHRoaXMuX3RlbHMgID0gdGVscztcbiAgICB9XG5cbiAgICBzZXQgZW1haWxzKGVtYWlscyA6IEFycmF5PEN1c3RvbWVyRW1haWw+KXtcbiAgICAgICAgdGhpcy5fZW1haWxzID0gZW1haWxzO1xuICAgIH1cblxuICAgIHNldCBhZGRyZXNzZXMoYWRkcmVzc2VzIDogQXJyYXk8Q3VzdG9tZXJBZGRyZXNzPil7XG4gICAgICAgIHRoaXMuX2FkZHJlc3NlcyA9IGFkZHJlc3NlcztcbiAgICB9XG5cbiAgICBzZXQgYmlydGhkYXkoYmlydGhkYXkgOiBEYXRlKXtcbiAgICAgICAgdGhpcy5fYmlydGhkYXkgPSBiaXJ0aGRheTtcbiAgICAgICBcbiAgICB9XG5cbiAgICBzZXQgYWdlUmFuZ2UoYWdlUmFuZ2UgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9hZ2VSYW5nZSA9IGFnZVJhbmdlO1xuICAgIH1cblxuICAgIHNldCBnZW5kZXIoZ2VuZGVyIDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fZ2VuZGVyID0gZ2VuZGVyO1xuICAgIH1cblxuXG4gICAgc2V0IG9jY3VwYXRpb24ob2NjdXBhdGlvbiA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX29jY3VwYXRpb24gPSBvY2N1cGF0aW9uO1xuICAgIH1cblxuICAgIHNldCBjb21wYW55KGNvbXBhbnkgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9jb21wYW55ID0gY29tcGFueTtcbiAgICB9XG5cbiAgICBzZXQgaW5jb21lKGluY29tZSA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2luY29tZSA9IGluY29tZTtcbiAgICB9XG5cbiAgICBzZXQgc291cmNlKHNvdXJjZSA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX3NvdXJjZSA9IHNvdXJjZTtcbiAgICB9XG5cbiAgICBzZXQgbWFycmlhZ2UobWFycmlhZ2UgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9tYXJyaWFnZSA9IG1hcnJpYWdlO1xuICAgIH1cblxuICAgIHNldCBjaGlsZHJlbihjaGlsZHJlbiA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgc2V0IGZhbWlsaWFyaXR5KGZhbWlsaWFyaXR5IDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fZmFtaWxpYXJpdHkgPSBmYW1pbGlhcml0eTtcbiAgICB9XG5cbiAgICBzZXQgcmVjZW50U3RhdHVzKHJlY2VudFN0YXR1cyA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX3JlY2VudFN0YXR1cyA9IHJlY2VudFN0YXR1cztcbiAgICB9XG5cbiAgICBzZXQgbWFucGEobWFucGEgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9tYW5wYSA9IG1hbnBhO1xuICAgIH1cblxuICAgIHNldCBjb250YWN0RnJlcXVhbmN5KGNvbnRhY3RGcmVxdWFuY3kgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9jb250YWN0RnJlcXVhbmN5ID0gY29udGFjdEZyZXF1YW5jeTtcbiAgICB9XG5cbiAgICBzZXQgcG9zc2liaWxpdHkocG9zc2liaWxpdHkgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9wb3NzaWJpbGl0eSA9IHBvc3NpYmlsaXR5OyAgIFxuICAgIH1cblxuICAgIHNldCBpc0ZvbGxvdyhpc0ZvbGxvdyA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNGb2xsb3cgPSBpc0ZvbGxvdztcbiAgICB9XG5cbiAgICBzZXQgaXNFbXB0eUluZm8oaXNFbXB0eUluZm8gOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzRW1wdHlJbmZvID0gaXNFbXB0eUluZm87XG4gICAgfVxuXG5cbiAgICB1cGRhdGVFbXB0eVN0YXR1cygpIHtcbiAgICAgICAgaWYodGhpcy5iaXJ0aGRheSA9PSBudWxsICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5nZW5kZXIpICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5vY2N1cGF0aW9uKVxuICAgICAgICAgICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jb21wYW55KSAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuaW5jb21lKVxuICAgICAgICAgICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5zb3VyY2UpICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5tYXJyaWFnZSlcbiAgICAgICAgICAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuY2hpbGRyZW4pICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5mYW1pbGlhcml0eSlcbiAgICAgICAgICAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMubWFucGEpICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5yZWNlbnRTdGF0dXMpKSB7XG4gICAgICAgICAgICB0aGlzLmlzRW1wdHlJbmZvID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNFbXB0eUluZm8gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRm9sbG93U3RhdHVzKGlzRm9sbG93IDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmlzRm9sbG93ID0gaXNGb2xsb3c7XG4gICAgfVxuXG4gICAgYWRkRW1haWwoZW1haWwgOiBDdXN0b21lckVtYWlsKSB7XG4gICAgICAgIHRoaXMuZW1haWxzLnB1c2goZW1haWwpO1xuICAgIH1cblxuICAgIGFkZFRlbCh0ZWwgOiBDdXN0b21lclRlbCkge1xuICAgICAgICB0aGlzLnRlbHMucHVzaCh0ZWwpO1xuICAgIH1cblxuICAgIGFkZEFkZHJlc3MoYWRkcmVzcyA6IEN1c3RvbWVyQWRkcmVzcykge1xuICAgICAgICB0aGlzLmFkZHJlc3Nlcy5wdXNoKGFkZHJlc3MpO1xuICAgIH1cblxuICAgIGRlbGV0ZVRlbCh0ZWw6Q3VzdG9tZXJUZWwsaW5kZXg6bnVtYmVyKXtcbiAgICAgICAgdGhpcy50ZWxzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlRW1haWwoZW1haWw6c3RyaW5nLGluZGV4Om51bWJlcil7XG4gICAgICAgIHRoaXMuZW1haWxzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG4gICAgZGVsZXRlQWRkcmVzcyhhZGRyZXNzZXMgOiBDdXN0b21lckFkZHJlc3MsaW5kZXg6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5hZGRyZXNzZXMuc2xpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG4gICAgbm90T1BVU1RlbE51bWJlcigpIDogbnVtYmVye1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgdGhpcy50ZWxzLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYodGhpcy50ZWxzW2ldLmRhdGFTb3VyY2UgIT0gJ09QVVMnKSBjb3VudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbn0iXX0=