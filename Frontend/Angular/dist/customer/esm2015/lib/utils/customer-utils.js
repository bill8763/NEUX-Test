/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ProfileCodeService, StringUtils } from "@allianzSND/core";
import { SelectOption } from "@allianzSND/ui";
import { differenceInCalendarDays } from 'date-fns';
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
export class CustomerUtils {
    /**
     * @param {?} profileCodeService
     */
    constructor(profileCodeService) {
        this.profileCodeService = profileCodeService;
    }
    /**
     * @param {?} codeArray
     * @return {?}
     */
    setCode2Option(codeArray) {
        /** @type {?} */
        let options = new Array();
        if (codeArray != undefined) {
            for (let code of codeArray) {
                options.push(new SelectOption(code.getCode(), code.displayText));
            }
        }
        return options;
    }
    /**
     * @param {?} customerDetail
     * @return {?}
     */
    countCompletenessByProfile(customerDetail) {
        console.debug('countCompletenessByDetail', customerDetail);
        //count Completeness
        /** @type {?} */
        let completeness = 0;
        /** @type {?} */
        let countColumnName = ['FirstName', 'LastName', 'Occupation', 'Company', 'AgeRange', 'Gender',
            'Income', 'Source', 'Marriage', 'Children', 'Familiarity', 'RecentStatus', 'MANPA',
            'ContactFrequancy', 'Possibility'];
        if (StringUtils.isNotEmpty(customerDetail.firstName))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.lastName))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.occupation))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.company))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.ageRange))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.gender))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.income))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.source))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.marriage))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.children))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.familiarity))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.recentStatus))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.manpa))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.contactFrequancy))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.possibility))
            completeness++;
        //count birthday
        if (customerDetail.birthday != undefined)
            completeness++;
        //count phone/email/address
        if (customerDetail.tels.length != 0)
            completeness++;
        if (customerDetail.emails.length != 0)
            completeness++;
        if (customerDetail.addresses.length != 0)
            completeness++;
        console.debug('orginal completeness', completeness, (countColumnName.length + 4));
        completeness = (completeness / (countColumnName.length + 4));
        console.debug('before round completeness', completeness);
        completeness = Math.round(completeness * 100) / 100;
        console.debug('after round completeness', completeness);
        return completeness;
    }
    /**
     * @param {?} customerObj
     * @param {?} telArraySize
     * @param {?} emailArraySize
     * @param {?} addressAddressSize
     * @return {?}
     */
    countCompleteness(customerObj, telArraySize, emailArraySize, addressAddressSize) {
        console.debug('countCompleteness', customerObj, telArraySize, emailArraySize, addressAddressSize);
        //count Completeness
        /** @type {?} */
        let completeness = 0;
        /** @type {?} */
        let countColumnName = ['FirstName', 'LastName', 'Occupation', 'Company', 'AgeRange', 'Gender',
            'Income', 'Source', 'Marriage', 'Children', 'Familiarity', 'RecentStatus', 'MANPA',
            'ContactFrequancy', 'Possibility'];
        for (let columnName of countColumnName) {
            if (StringUtils.isNotEmpty(customerObj.getValue(columnName))) {
                console.debug('hasData', columnName + '=>' + customerObj.getValue(columnName));
                completeness++;
            }
        }
        //count birthday
        if (StringUtils.isNotEmpty(customerObj.getValue('BirthdayYear')) &&
            StringUtils.isNotEmpty(customerObj.getValue('BirthdayMonth')) &&
            StringUtils.isNotEmpty(customerObj.getValue('BirthdayDate')))
            completeness++;
        //count phone/email/address
        if (telArraySize != 0)
            completeness++;
        if (emailArraySize != 0)
            completeness++;
        if (addressAddressSize != 0)
            completeness++;
        console.debug('orginal completeness', completeness, (countColumnName.length + 4));
        completeness = (completeness / (countColumnName.length + 4));
        console.debug('before round completeness', completeness);
        completeness = Math.round(completeness * 100) / 100;
        console.debug('after round completeness', completeness);
        customerObj.setValue('Completeness', completeness);
    }
    /**
     * @param {?} dataObject
     * @return {?}
     */
    setCustomerDefaultValue(dataObject) {
        //count age
        if (StringUtils.isNotEmpty(dataObject.getValue('BirthdayYear')) &&
            StringUtils.isNotEmpty(dataObject.getValue('BirthdayMonth')) &&
            StringUtils.isNotEmpty(dataObject.getValue('BirthdayDate'))) {
            /** @type {?} */
            let birthday = new Date(Number(dataObject.getValue('BirthdayYear')), Number(dataObject.getValue('BirthdayMonth') - 1), Number(dataObject.getValue('BirthdayDate')));
            /** @type {?} */
            let age = this.countAge(birthday);
            dataObject.setValue('age', age);
            //check age range
            if (StringUtils.isEmpty(dataObject.getValue('AgeRange'))) {
                /** @type {?} */
                let ageRange = this.countAgeRange(age);
                if (ageRange != undefined) {
                    dataObject.setValue('AgeRange', ageRange);
                }
            }
        }
    }
    /**
     * @param {?} age
     * @return {?}
     */
    countAgeRange(age) {
        console.debug('countAgeRange', age);
        /** @type {?} */
        let rangeResult;
        /** @type {?} */
        let ageRange = this.profileCodeService.getCodeArray('Customer_Age');
        ageRange.forEach((/**
         * @param {?} profileCode
         * @return {?}
         */
        profileCode => {
            /** @type {?} */
            let args = profileCode.getArguments();
            console.debug('customer-utils countAgeRange args', args);
            /** @type {?} */
            let obj = JSON.parse(args);
            console.debug('customer-utils countAgeRange obj', obj);
            if (age >= obj.start && age <= obj.end) {
                console.debug('match age range', profileCode.getCode());
                rangeResult = profileCode.getCode();
            }
        }));
        console.debug('rangeResult', rangeResult);
        return rangeResult;
    }
    /**
     * @param {?} birthday
     * @return {?}
     */
    countAge(birthday) {
        /** @type {?} */
        let dates = this.calCEIntervalDays(birthday, new Date());
        console.debug('dates', dates);
        /** @type {?} */
        let age = Math.floor(dates / 365);
        console.debug('age', age);
        return age;
    }
    /**
     * javascript傳入起始日與結束
     * 日期格式為民國年月日(EX.1060802)
     * 傳入 1060702,1060802 會回傳31天
     * 傳入 1060901,1061001 會回傳30天
     * @param {?} sDate
     * @param {?} eDate
     * @return {?} 天數
     */
    calRocIntervalDays(sDate, eDate) {
        /** @type {?} */
        var msecPerMinute = 1000 * 60;
        /** @type {?} */
        var msecPerHour = msecPerMinute * 60;
        /** @type {?} */
        var msecPerDay = msecPerHour * 24;
        sDate = this.leftPad(sDate, 7, '0');
        eDate = this.leftPad(eDate, 7, '0');
        /** @type {?} */
        var begDateStr = "" + sDate.substring(3, 5) + "/" + sDate.substring(5) + "/" + (Number(sDate.substring(0, 3)) + Number(1911));
        /** @type {?} */
        var endDateStr = "" + eDate.substring(3, 5) + "/" + eDate.substring(5) + "/" + (Number(eDate.substring(0, 3)) + Number(1911));
        /** @type {?} */
        var begDate = new Date(begDateStr);
        /** @type {?} */
        var endDate = new Date(endDateStr);
        /** @type {?} */
        var interval = endDate.getTime() - begDate.getTime();
        /** @type {?} */
        var days = Math.floor(interval / msecPerDay);
        return days;
    }
    /**
     * javascript傳入起始日與結束
     * 日期格式為西元年月日(EX.20170801)
     * 傳入 20170702,20170802 會回傳31天
     * 傳入 20170901,20171001 會回傳30天
     * @param {?} sDate
     * @param {?} eDate
     * @return {?} 天數
     */
    calCEIntervalDays(sDate, eDate) {
        // var msecPerMinute = 1000 * 60;
        // var msecPerHour = msecPerMinute * 60;
        // var msecPerDay = msecPerHour * 24;
        // var begDateStr = "" + sDate.substring(4, 6) + "/" + sDate.substring(6) + "/" + sDate.substring(0, 4);
        // var endDateStr = "" + eDate.substring(4, 6) + "/" + eDate.substring(6) + "/" + eDate.substring(0, 4);
        // var begDate = new Date(begDateStr);
        // var endDate = new Date(endDateStr);
        // var interval = endDate.getTime() - begDate.getTime();
        // var days = Math.floor(interval / msecPerDay);
        // return days;
        return differenceInCalendarDays(eDate, sDate);
    }
    /**
     * 向左補零
     * Ex:leftPad(3,3,'0')->003
     * @param {?} val    [原值]
     * @param {?} padLen [補足長度]
     * @param {?} padVal [補足值]
     * @return {?} [description]
     */
    leftPad(val, padLen, padVal) {
        if (val.toString().length < padLen) {
            for (var i = 1; i < padLen; i++) {
                val = padVal + val;
                if (val.toString().length >= padLen) {
                    break;
                }
            }
        }
        return val;
    }
}
CustomerUtils.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
CustomerUtils.ctorParameters = () => [
    { type: ProfileCodeService }
];
/** @nocollapse */ CustomerUtils.ngInjectableDef = i0.defineInjectable({ factory: function CustomerUtils_Factory() { return new CustomerUtils(i0.inject(i1.ProfileCodeService)); }, token: CustomerUtils, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerUtils.prototype.profileCodeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9jdXN0b21lci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLGtCQUFrQixFQUFlLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRzNDLE1BQU07Ozs7SUFFRixZQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUFJLENBQUM7Ozs7O0lBRS9ELGNBQWMsQ0FBQyxTQUE2Qjs7WUFDcEMsT0FBTyxHQUF3QixJQUFJLEtBQUssRUFBRTtRQUM5QyxJQUFJLFNBQVMsSUFBSSxTQUFTLEVBQUU7WUFDeEIsS0FBSyxJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7Z0JBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1NBQ0o7UUFHRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELDBCQUEwQixDQUFDLGNBQStCO1FBQ3RELE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUMsY0FBYyxDQUFDLENBQUM7OztZQUd0RCxZQUFZLEdBQVcsQ0FBQzs7WUFDeEIsZUFBZSxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRO1lBQ3pGLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxh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QUFNLEVBQUU7b0JBQ2pDLE1BQU07aUJBQ1Q7YUFDSjtTQUNKO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDOzs7WUE1TkosVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQzs7O1lBTlQsa0JBQWtCOzs7Ozs7OztJQVN4QiwyQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9maWxlQ29kZSwgUHJvZmlsZUNvZGVTZXJ2aWNlLCBTUUxpdGVUYWJsZSwgU3RyaW5nVXRpbHMgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgU2VsZWN0T3B0aW9uIH0gZnJvbSBcIkBhbGxpYW56U05EL3VpXCI7XG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBDdXN0b21lckRldGFpbCB9IGZyb20gXCIuLi9zZXJ2aWNlL21vZGVsL0N1c3RvbWVyRGV0YWlsXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46J3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclV0aWxzIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2UpIHsgfVxuXG4gICAgc2V0Q29kZTJPcHRpb24oY29kZUFycmF5OiBBcnJheTxQcm9maWxlQ29kZT4pIHtcbiAgICAgICAgbGV0IG9wdGlvbnM6IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgaWYgKGNvZGVBcnJheSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvZGUgb2YgY29kZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKG5ldyBTZWxlY3RPcHRpb24oY29kZS5nZXRDb2RlKCksIGNvZGUuZGlzcGxheVRleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIFxuICAgIGNvdW50Q29tcGxldGVuZXNzQnlQcm9maWxlKGN1c3RvbWVyRGV0YWlsIDogQ3VzdG9tZXJEZXRhaWwpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY291bnRDb21wbGV0ZW5lc3NCeURldGFpbCcsY3VzdG9tZXJEZXRhaWwpO1xuXG4gICAgICAgIC8vY291bnQgQ29tcGxldGVuZXNzXG4gICAgICAgIGxldCBjb21wbGV0ZW5lc3M6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBjb3VudENvbHVtbk5hbWUgPSBbJ0ZpcnN0TmFtZScsICdMYXN0TmFtZScsICdPY2N1cGF0aW9uJywgJ0NvbXBhbnknLCAnQWdlUmFuZ2UnLCAnR2VuZGVyJyxcbiAgICAgICAgICAgICdJbmNvbWUnLCAnU291cmNlJywgJ01hcnJpYWdlJywgJ0NoaWxkcmVuJywgJ0ZhbWlsaWFyaXR5JywgJ1JlY2VudFN0YXR1cycsICdNQU5QQScsXG4gICAgICAgICAgICAnQ29udGFjdEZyZXF1YW5jeScsICdQb3NzaWJpbGl0eSddO1xuXG4gICAgICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyRGV0YWlsLmZpcnN0TmFtZSkpIGNvbXBsZXRlbmVzcysrO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lckRldGFpbC5sYXN0TmFtZSkpIGNvbXBsZXRlbmVzcysrO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lckRldGFpbC5vY2N1cGF0aW9uKSkgY29tcGxldGVuZXNzKys7XG4gICAgICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyRGV0YWlsLmNvbXBhbnkpKSBjb21wbGV0ZW5lc3MrKztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJEZXRhaWwuYWdlUmFuZ2UpKSBjb21wbGV0ZW5lc3MrKztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJEZXRhaWwuZ2VuZGVyKSkgY29tcGxldGVuZXNzKys7XG4gICAgICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyRGV0YWlsLmluY29tZSkpIGNvbXBsZXRlbmVzcysrO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lckRldGFpbC5zb3VyY2UpKSBjb21wbGV0ZW5lc3MrKztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJEZXRhaWwubWFycmlhZ2UpKSBjb21wbGV0ZW5lc3MrKztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJEZXRhaWwuY2hpbGRyZW4pKSBjb21wbGV0ZW5lc3MrKztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJEZXRhaWwuZmFtaWxpYXJpdHkpKSBjb21wbGV0ZW5lc3MrKztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJEZXRhaWwucmVjZW50U3RhdHVzKSkgY29tcGxldGVuZXNzKys7XG4gICAgICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyRGV0YWlsLm1hbnBhKSkgY29tcGxldGVuZXNzKys7XG4gICAgICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyRGV0YWlsLmNvbnRhY3RGcmVxdWFuY3kpKSBjb21wbGV0ZW5lc3MrKztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJEZXRhaWwucG9zc2liaWxpdHkpKSBjb21wbGV0ZW5lc3MrKztcblxuICAgICAgXG5cbiAgICAgICAgLy9jb3VudCBiaXJ0aGRheVxuICAgICAgICBpZiAoY3VzdG9tZXJEZXRhaWwuYmlydGhkYXkgIT0gdW5kZWZpbmVkKSBjb21wbGV0ZW5lc3MrKztcblxuICAgICAgICAvL2NvdW50IHBob25lL2VtYWlsL2FkZHJlc3NcbiAgICAgICAgaWYgKGN1c3RvbWVyRGV0YWlsLnRlbHMubGVuZ3RoICE9IDApIGNvbXBsZXRlbmVzcysrO1xuICAgICAgICBpZiAoY3VzdG9tZXJEZXRhaWwuZW1haWxzLmxlbmd0aCAhPSAwKSBjb21wbGV0ZW5lc3MrKztcbiAgICAgICAgaWYgKGN1c3RvbWVyRGV0YWlsLmFkZHJlc3Nlcy5sZW5ndGggIT0gMCkgY29tcGxldGVuZXNzKys7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1Zygnb3JnaW5hbCBjb21wbGV0ZW5lc3MnLGNvbXBsZXRlbmVzcywoY291bnRDb2x1bW5OYW1lLmxlbmd0aCArIDQpKTtcblxuICAgICAgICBjb21wbGV0ZW5lc3MgPSAoY29tcGxldGVuZXNzIC8gKGNvdW50Q29sdW1uTmFtZS5sZW5ndGggKyA0KSk7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnYmVmb3JlIHJvdW5kIGNvbXBsZXRlbmVzcycsIGNvbXBsZXRlbmVzcyk7XG4gICAgICAgIGNvbXBsZXRlbmVzcyA9IE1hdGgucm91bmQoY29tcGxldGVuZXNzICogMTAwKSAvIDEwMDtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnYWZ0ZXIgcm91bmQgY29tcGxldGVuZXNzJywgY29tcGxldGVuZXNzKTtcblxuICAgICAgICByZXR1cm4gY29tcGxldGVuZXNzO1xuICAgIH1cblxuICAgIGNvdW50Q29tcGxldGVuZXNzKGN1c3RvbWVyT2JqIDogU1FMaXRlVGFibGUsdGVsQXJyYXlTaXplIDogbnVtYmVyLGVtYWlsQXJyYXlTaXplIDogbnVtYmVyLGFkZHJlc3NBZGRyZXNzU2l6ZSA6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdjb3VudENvbXBsZXRlbmVzcycsY3VzdG9tZXJPYmosdGVsQXJyYXlTaXplLGVtYWlsQXJyYXlTaXplLGFkZHJlc3NBZGRyZXNzU2l6ZSk7XG4gICAgICAgIFxuICAgICAgICAvL2NvdW50IENvbXBsZXRlbmVzc1xuICAgICAgICBsZXQgY29tcGxldGVuZXNzOiBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgY291bnRDb2x1bW5OYW1lID0gWydGaXJzdE5hbWUnLCAnTGFzdE5hbWUnLCAnT2NjdXBhdGlvbicsICdDb21wYW55JywgJ0FnZVJhbmdlJywgJ0dlbmRlcicsXG4gICAgICAgICAgICAnSW5jb21lJywgJ1NvdXJjZScsICdNYXJyaWFnZScsICdDaGlsZHJlbicsICdGYW1pbGlhcml0eScsICdSZWNlbnRTdGF0dXMnLCAnTUFOUEEnLFxuICAgICAgICAgICAgJ0NvbnRhY3RGcmVxdWFuY3knLCAnUG9zc2liaWxpdHknXTtcblxuICAgICAgICBmb3IgKGxldCBjb2x1bW5OYW1lIG9mIGNvdW50Q29sdW1uTmFtZSkge1xuICAgICAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJPYmouZ2V0VmFsdWUoY29sdW1uTmFtZSkpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnaGFzRGF0YScsY29sdW1uTmFtZSArICc9PicgKyBjdXN0b21lck9iai5nZXRWYWx1ZShjb2x1bW5OYW1lKSk7XG4gICAgICAgICAgICAgICAgY29tcGxldGVuZXNzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2NvdW50IGJpcnRoZGF5XG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyT2JqLmdldFZhbHVlKCdCaXJ0aGRheVllYXInKSkgJiZcbiAgICAgICAgU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lck9iai5nZXRWYWx1ZSgnQmlydGhkYXlNb250aCcpKSAmJlxuICAgICAgICBTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyT2JqLmdldFZhbHVlKCdCaXJ0aGRheURhdGUnKSkpIGNvbXBsZXRlbmVzcysrO1xuXG4gICAgICAgIC8vY291bnQgcGhvbmUvZW1haWwvYWRkcmVzc1xuICAgICAgICBpZiAodGVsQXJyYXlTaXplICE9IDApIGNvbXBsZXRlbmVzcysrO1xuICAgICAgICBpZiAoZW1haWxBcnJheVNpemUgIT0gMCkgY29tcGxldGVuZXNzKys7XG4gICAgICAgIGlmIChhZGRyZXNzQWRkcmVzc1NpemUgIT0gMCkgY29tcGxldGVuZXNzKys7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1Zygnb3JnaW5hbCBjb21wbGV0ZW5lc3MnLGNvbXBsZXRlbmVzcywoY291bnRDb2x1bW5OYW1lLmxlbmd0aCArIDQpKTtcblxuICAgICAgICBjb21wbGV0ZW5lc3MgPSAoY29tcGxldGVuZXNzIC8gKGNvdW50Q29sdW1uTmFtZS5sZW5ndGggKyA0KSk7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnYmVmb3JlIHJvdW5kIGNvbXBsZXRlbmVzcycsIGNvbXBsZXRlbmVzcyk7XG4gICAgICAgIGNvbXBsZXRlbmVzcyA9IE1hdGgucm91bmQoY29tcGxldGVuZXNzICogMTAwKSAvIDEwMDtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnYWZ0ZXIgcm91bmQgY29tcGxldGVuZXNzJywgY29tcGxldGVuZXNzKTtcblxuICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZSgnQ29tcGxldGVuZXNzJywgY29tcGxldGVuZXNzKTtcbiAgICB9XG5cbiAgICBzZXRDdXN0b21lckRlZmF1bHRWYWx1ZShkYXRhT2JqZWN0OiBTUUxpdGVUYWJsZSkge1xuICAgICAgICBcbiAgICAgICAgLy9jb3VudCBhZ2VcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoZGF0YU9iamVjdC5nZXRWYWx1ZSgnQmlydGhkYXlZZWFyJykpICYmIFxuICAgICAgICBTdHJpbmdVdGlscy5pc05vdEVtcHR5KGRhdGFPYmplY3QuZ2V0VmFsdWUoJ0JpcnRoZGF5TW9udGgnKSkgJiYgXG4gICAgICAgIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoZGF0YU9iamVjdC5nZXRWYWx1ZSgnQmlydGhkYXlEYXRlJykpKSB7XG4gICAgICAgICAgICBsZXQgYmlydGhkYXkgPSBuZXcgRGF0ZShOdW1iZXIoZGF0YU9iamVjdC5nZXRWYWx1ZSgnQmlydGhkYXlZZWFyJykpLFxuICAgICAgICAgICAgICAgIE51bWJlcihkYXRhT2JqZWN0LmdldFZhbHVlKCdCaXJ0aGRheU1vbnRoJykgLSAxKSxcbiAgICAgICAgICAgICAgICBOdW1iZXIoZGF0YU9iamVjdC5nZXRWYWx1ZSgnQmlydGhkYXlEYXRlJykpKTtcblxuICAgICAgICAgICAgbGV0IGFnZSA9IHRoaXMuY291bnRBZ2UoYmlydGhkYXkpO1xuICAgICAgICAgICAgZGF0YU9iamVjdC5zZXRWYWx1ZSgnYWdlJywgYWdlKTtcblxuICAgICAgICAgICAgLy9jaGVjayBhZ2UgcmFuZ2VcbiAgICAgICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGRhdGFPYmplY3QuZ2V0VmFsdWUoJ0FnZVJhbmdlJykpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFnZVJhbmdlID0gdGhpcy5jb3VudEFnZVJhbmdlKGFnZSk7XG4gICAgICAgICAgICAgICAgaWYoYWdlUmFuZ2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFPYmplY3Quc2V0VmFsdWUoJ0FnZVJhbmdlJywgYWdlUmFuZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb3VudEFnZVJhbmdlKGFnZSA6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdjb3VudEFnZVJhbmdlJyxhZ2UpO1xuICAgICAgICBsZXQgcmFuZ2VSZXN1bHQ7XG4gICAgICAgIGxldCBhZ2VSYW5nZTogQXJyYXk8UHJvZmlsZUNvZGU+ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDdXN0b21lcl9BZ2UnKTtcbiAgICAgICAgYWdlUmFuZ2UuZm9yRWFjaChwcm9maWxlQ29kZSA9PiB7XG4gICAgICAgICAgICBsZXQgYXJncyA9IHByb2ZpbGVDb2RlLmdldEFyZ3VtZW50cygpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItdXRpbHMgY291bnRBZ2VSYW5nZSBhcmdzJyxhcmdzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UoYXJncyk7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci11dGlscyBjb3VudEFnZVJhbmdlIG9iaicsb2JqKTtcbiAgICAgICAgICAgIGlmIChhZ2UgPj0gb2JqLnN0YXJ0ICYmIGFnZSA8PSBvYmouZW5kKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnbWF0Y2ggYWdlIHJhbmdlJyxwcm9maWxlQ29kZS5nZXRDb2RlKCkpO1xuICAgICAgICAgICAgICAgIHJhbmdlUmVzdWx0ID0gcHJvZmlsZUNvZGUuZ2V0Q29kZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdyYW5nZVJlc3VsdCcscmFuZ2VSZXN1bHQpO1xuXG4gICAgICAgIHJldHVybiByYW5nZVJlc3VsdDtcbiAgICB9XG5cbiAgICBjb3VudEFnZShiaXJ0aGRheSA6IERhdGUpIDogbnVtYmVye1xuICAgICAgICBsZXQgZGF0ZXMgPSB0aGlzLmNhbENFSW50ZXJ2YWxEYXlzKGJpcnRoZGF5LCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnZGF0ZXMnLCBkYXRlcyk7XG4gICAgICAgIGxldCBhZ2UgPSBNYXRoLmZsb29yKGRhdGVzIC8gMzY1KTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnYWdlJywgYWdlKTtcblxuICAgICAgICByZXR1cm4gYWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGphdmFzY3JpcHTlgrPlhaXotbflp4vml6XoiIfntZDmnZ9cbiAgICAgKiDml6XmnJ/moLzlvI/ngrrmsJHlnIvlubTmnIjml6UoRVguMTA2MDgwMilcbiAgICAgKiDlgrPlhaUgMTA2MDcwMiwxMDYwODAyIOacg+WbnuWCszMx5aSpXG4gICAgICog5YKz5YWlIDEwNjA5MDEsMTA2MTAwMSDmnIPlm57lgrMzMOWkqVxuICAgICAqIEBwYXJhbSAgc0RhdGUgXG4gICAgICogQHBhcmFtICBlRGF0ZSBcbiAgICAgKiBAcmV0dXJuIOWkqeaVuFxuICAgICAqL1xuICAgIGNhbFJvY0ludGVydmFsRGF5cyhzRGF0ZSwgZURhdGUpIHtcbiAgICAgICAgdmFyIG1zZWNQZXJNaW51dGUgPSAxMDAwICogNjA7XG4gICAgICAgIHZhciBtc2VjUGVySG91ciA9IG1zZWNQZXJNaW51dGUgKiA2MDtcbiAgICAgICAgdmFyIG1zZWNQZXJEYXkgPSBtc2VjUGVySG91ciAqIDI0O1xuICAgICAgICBzRGF0ZSA9IHRoaXMubGVmdFBhZChzRGF0ZSwgNywgJzAnKTtcbiAgICAgICAgZURhdGUgPSB0aGlzLmxlZnRQYWQoZURhdGUsIDcsICcwJyk7XG4gICAgICAgIHZhciBiZWdEYXRlU3RyID0gXCJcIiArIHNEYXRlLnN1YnN0cmluZygzLCA1KSArIFwiL1wiICsgc0RhdGUuc3Vic3RyaW5nKDUpICsgXCIvXCIgKyAoTnVtYmVyKHNEYXRlLnN1YnN0cmluZygwLCAzKSkgKyBOdW1iZXIoMTkxMSkpO1xuICAgICAgICB2YXIgZW5kRGF0ZVN0ciA9IFwiXCIgKyBlRGF0ZS5zdWJzdHJpbmcoMywgNSkgKyBcIi9cIiArIGVEYXRlLnN1YnN0cmluZyg1KSArIFwiL1wiICsgKE51bWJlcihlRGF0ZS5zdWJzdHJpbmcoMCwgMykpICsgTnVtYmVyKDE5MTEpKTtcbiAgICAgICAgdmFyIGJlZ0RhdGUgPSBuZXcgRGF0ZShiZWdEYXRlU3RyKTtcbiAgICAgICAgdmFyIGVuZERhdGUgPSBuZXcgRGF0ZShlbmREYXRlU3RyKTtcbiAgICAgICAgdmFyIGludGVydmFsID0gZW5kRGF0ZS5nZXRUaW1lKCkgLSBiZWdEYXRlLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGludGVydmFsIC8gbXNlY1BlckRheSk7XG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBqYXZhc2NyaXB05YKz5YWl6LW35aeL5pel6IiH57WQ5p2fXG4gICAgICog5pel5pyf5qC85byP54K66KW/5YWD5bm05pyI5pelKEVYLjIwMTcwODAxKVxuICAgICAqIOWCs+WFpSAyMDE3MDcwMiwyMDE3MDgwMiDmnIPlm57lgrMzMeWkqVxuICAgICAqIOWCs+WFpSAyMDE3MDkwMSwyMDE3MTAwMSDmnIPlm57lgrMzMOWkqVxuICAgICAqIEBwYXJhbSAgc0RhdGUgXG4gICAgICogQHBhcmFtICBlRGF0ZSBcbiAgICAgKiBAcmV0dXJuIOWkqeaVuFxuICAgICAqL1xuICAgIGNhbENFSW50ZXJ2YWxEYXlzKHNEYXRlLCBlRGF0ZSkge1xuICAgICAgICAvLyB2YXIgbXNlY1Blck1pbnV0ZSA9IDEwMDAgKiA2MDtcbiAgICAgICAgLy8gdmFyIG1zZWNQZXJIb3VyID0gbXNlY1Blck1pbnV0ZSAqIDYwO1xuICAgICAgICAvLyB2YXIgbXNlY1BlckRheSA9IG1zZWNQZXJIb3VyICogMjQ7XG4gICAgICAgIC8vIHZhciBiZWdEYXRlU3RyID0gXCJcIiArIHNEYXRlLnN1YnN0cmluZyg0LCA2KSArIFwiL1wiICsgc0RhdGUuc3Vic3RyaW5nKDYpICsgXCIvXCIgKyBzRGF0ZS5zdWJzdHJpbmcoMCwgNCk7XG4gICAgICAgIC8vIHZhciBlbmREYXRlU3RyID0gXCJcIiArIGVEYXRlLnN1YnN0cmluZyg0LCA2KSArIFwiL1wiICsgZURhdGUuc3Vic3RyaW5nKDYpICsgXCIvXCIgKyBlRGF0ZS5zdWJzdHJpbmcoMCwgNCk7XG4gICAgICAgIC8vIHZhciBiZWdEYXRlID0gbmV3IERhdGUoYmVnRGF0ZVN0cik7XG4gICAgICAgIC8vIHZhciBlbmREYXRlID0gbmV3IERhdGUoZW5kRGF0ZVN0cik7XG4gICAgICAgIC8vIHZhciBpbnRlcnZhbCA9IGVuZERhdGUuZ2V0VGltZSgpIC0gYmVnRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIC8vIHZhciBkYXlzID0gTWF0aC5mbG9vcihpbnRlcnZhbCAvIG1zZWNQZXJEYXkpO1xuXG4gICAgICAgIC8vIHJldHVybiBkYXlzO1xuICAgICAgICByZXR1cm4gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGVEYXRlLCBzRGF0ZSk7XG5cbiAgICB9XG4gICAgLyoqXG4gICAgICog5ZCR5bem6KOc6Zu2XG4gICAgICogRXg6bGVmdFBhZCgzLDMsJzAnKS0+MDAzXG4gICAgICogQHBhcmFtICB2YWwgICAgW+WOn+WAvF1cbiAgICAgKiBAcGFyYW0gIHBhZExlbiBb6KOc6Laz6ZW35bqmXVxuICAgICAqIEBwYXJhbSAgcGFkVmFsIFvoo5zotrPlgLxdXG4gICAgICogQHJldHVybiAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGxlZnRQYWQodmFsLCBwYWRMZW4sIHBhZFZhbCkge1xuICAgICAgICBpZiAodmFsLnRvU3RyaW5nKCkubGVuZ3RoIDwgcGFkTGVuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBhZExlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gcGFkVmFsICsgdmFsO1xuICAgICAgICAgICAgICAgIGlmICh2YWwudG9TdHJpbmcoKS5sZW5ndGggPj0gcGFkTGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbn0iXX0=