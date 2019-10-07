/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ProfileCodeService, StringUtils, showRuleToken } from "@allianzSND/core";
import { SelectOption } from "@allianzSND/core";
import { differenceInCalendarDays } from 'date-fns';
import { Injectable, Optional, Inject } from "@angular/core";
import { customerShowRuleToken } from "../injectionToken/injection-token";
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
import * as i2 from "../injectionToken/injection-token";
export class CustomerUtils {
    /**
     * @param {?} profileCodeService
     * @param {?} showRule
     * @param {?} customerShowRule
     */
    constructor(profileCodeService, showRule, customerShowRule) {
        this.profileCodeService = profileCodeService;
        this.showRule = showRule;
        this.customerShowRule = customerShowRule;
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
     * @param {?} customerObj
     * @return {?}
     */
    countCompleteness(customerObj) {
        console.log("this.customerShowRule: ", this.customerShowRule);
        if (this.customerShowRule) {
            return this.customerShowRule.calculateCompleteness(customerObj);
        }
        else {
            return 0;
        }
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
        console.log("ageRange:", ageRange);
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
    /**
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    convertNameToShow(firstName, lastName) {
        if (this.showRule) {
            return this.showRule.convertName(firstName, lastName);
        }
        else {
            /** @type {?} */
            let firstNameStr = StringUtils.isNotEmpty(firstName) ? firstName : '';
            /** @type {?} */
            let lastNameStr = StringUtils.isNotEmpty(lastName) ? (' ' + lastName) : '';
            return firstNameStr + lastNameStr;
        }
    }
}
CustomerUtils.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
CustomerUtils.ctorParameters = () => [
    { type: ProfileCodeService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerShowRuleToken,] }] }
];
/** @nocollapse */ CustomerUtils.ngInjectableDef = i0.defineInjectable({ factory: function CustomerUtils_Factory() { return new CustomerUtils(i0.inject(i1.ProfileCodeService), i0.inject(i1.showRuleToken, 8), i0.inject(i2.customerShowRuleToken, 8)); }, token: CustomerUtils, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerUtils.prototype.profileCodeService;
    /**
     * @type {?}
     * @private
     */
    CustomerUtils.prototype.showRule;
    /**
     * @type {?}
     * @private
     */
    CustomerUtils.prototype.customerShowRule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21lci91dGlscy9jdXN0b21lci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLGtCQUFrQixFQUFlLFdBQVcsRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1RyxPQUFPLEVBQUUsWUFBWSxFQUFXLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUsxRSxNQUFNOzs7Ozs7SUFFRixZQUNZLGtCQUFzQyxFQUNILFFBQWtCLEVBQ1YsZ0JBQWtDO1FBRjdFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDSCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUVyRixDQUFDOzs7OztJQUVMLGNBQWMsQ0FBQyxTQUE2Qjs7WUFDcEMsT0FBTyxHQUF3QixJQUFJLEtBQUssRUFBRTtRQUM5QyxJQUFJLFNBQVMsSUFBSSxTQUFTLEVBQUU7WUFDeEIsS0FBSyxJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7Z0JBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1NBQ0o7UUFHRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOzs7OztJQUdELGlCQUFpQixDQUFDLFdBQWdCO1FBQzlCLE9BQU8sQ0FB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U0FDdkQ7YUFDSTs7Z0JBQ0MsWUFBWSxHQUFXLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTs7Z0JBQ3pFLFdBQVcsR0FBVyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsRixPQUFPLFlBQVksR0FBRyxXQUFXLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7WUF0S04sVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBUlosa0JBQWtCOzRDQWEvQixRQUFRLFlBQUksTUFBTSxTQUFDLGFBQWE7NENBQ2hDLFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCOzs7Ozs7OztJQUZ6QywyQ0FBOEM7Ozs7O0lBQzlDLGlDQUE2RDs7Ozs7SUFDN0QseUNBQXFGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZmlsZUNvZGUsIFByb2ZpbGVDb2RlU2VydmljZSwgU1FMaXRlVGFibGUsIFN0cmluZ1V0aWxzLCBzaG93UnVsZVRva2VuIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IFNlbGVjdE9wdGlvbiwgc2hvd1J1bGV9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGN1c3RvbWVyU2hvd1J1bGVUb2tlbiB9IGZyb20gXCIuLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW5cIjtcbmltcG9ydCB7IEN1c3RvbWVyU2hvd1J1bGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlL0N1c3RvbWVyU2hvd1J1bGVcIjtcblxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyVXRpbHMge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2UsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3Qoc2hvd1J1bGVUb2tlbikgcHJpdmF0ZSBzaG93UnVsZTogc2hvd1J1bGUsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoY3VzdG9tZXJTaG93UnVsZVRva2VuKSBwcml2YXRlIGN1c3RvbWVyU2hvd1J1bGU6IEN1c3RvbWVyU2hvd1J1bGUsXG5cbiAgICApIHsgfVxuXG4gICAgc2V0Q29kZTJPcHRpb24oY29kZUFycmF5OiBBcnJheTxQcm9maWxlQ29kZT4pIHtcbiAgICAgICAgbGV0IG9wdGlvbnM6IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgaWYgKGNvZGVBcnJheSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvZGUgb2YgY29kZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKG5ldyBTZWxlY3RPcHRpb24oY29kZS5nZXRDb2RlKCksIGNvZGUuZGlzcGxheVRleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG5cbiAgICBjb3VudENvbXBsZXRlbmVzcyhjdXN0b21lck9iajogYW55KTogbnVtYmVyIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmN1c3RvbWVyU2hvd1J1bGU6IFwiLHRoaXMuY3VzdG9tZXJTaG93UnVsZSk7XG4gICAgICAgIGlmKHRoaXMuY3VzdG9tZXJTaG93UnVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tZXJTaG93UnVsZS5jYWxjdWxhdGVDb21wbGV0ZW5lc3MoY3VzdG9tZXJPYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEN1c3RvbWVyRGVmYXVsdFZhbHVlKGRhdGFPYmplY3Q6IFNRTGl0ZVRhYmxlKSB7XG5cbiAgICAgICAgLy9jb3VudCBhZ2VcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoZGF0YU9iamVjdC5nZXRWYWx1ZSgnQmlydGhkYXlZZWFyJykpICYmXG4gICAgICAgICAgICBTdHJpbmdVdGlscy5pc05vdEVtcHR5KGRhdGFPYmplY3QuZ2V0VmFsdWUoJ0JpcnRoZGF5TW9udGgnKSkgJiZcbiAgICAgICAgICAgIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoZGF0YU9iamVjdC5nZXRWYWx1ZSgnQmlydGhkYXlEYXRlJykpKSB7XG4gICAgICAgICAgICBsZXQgYmlydGhkYXkgPSBuZXcgRGF0ZShOdW1iZXIoZGF0YU9iamVjdC5nZXRWYWx1ZSgnQmlydGhkYXlZZWFyJykpLFxuICAgICAgICAgICAgICAgIE51bWJlcihkYXRhT2JqZWN0LmdldFZhbHVlKCdCaXJ0aGRheU1vbnRoJykgLSAxKSxcbiAgICAgICAgICAgICAgICBOdW1iZXIoZGF0YU9iamVjdC5nZXRWYWx1ZSgnQmlydGhkYXlEYXRlJykpKTtcblxuICAgICAgICAgICAgbGV0IGFnZSA9IHRoaXMuY291bnRBZ2UoYmlydGhkYXkpO1xuICAgICAgICAgICAgZGF0YU9iamVjdC5zZXRWYWx1ZSgnYWdlJywgYWdlKTtcblxuICAgICAgICAgICAgLy9jaGVjayBhZ2UgcmFuZ2VcbiAgICAgICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGRhdGFPYmplY3QuZ2V0VmFsdWUoJ0FnZVJhbmdlJykpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFnZVJhbmdlID0gdGhpcy5jb3VudEFnZVJhbmdlKGFnZSk7XG4gICAgICAgICAgICAgICAgaWYgKGFnZVJhbmdlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhT2JqZWN0LnNldFZhbHVlKCdBZ2VSYW5nZScsIGFnZVJhbmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY291bnRBZ2VSYW5nZShhZ2U6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdjb3VudEFnZVJhbmdlJywgYWdlKTtcbiAgICAgICAgbGV0IHJhbmdlUmVzdWx0O1xuICAgICAgICBsZXQgYWdlUmFuZ2U6IEFycmF5PFByb2ZpbGVDb2RlPiA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfQWdlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWdlUmFuZ2U6XCIsIGFnZVJhbmdlKTtcbiAgICAgICAgYWdlUmFuZ2UuZm9yRWFjaChwcm9maWxlQ29kZSA9PiB7XG4gICAgICAgICAgICBsZXQgYXJncyA9IHByb2ZpbGVDb2RlLmdldEFyZ3VtZW50cygpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItdXRpbHMgY291bnRBZ2VSYW5nZSBhcmdzJywgYXJncyk7XG5cbiAgICAgICAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGFyZ3MpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItdXRpbHMgY291bnRBZ2VSYW5nZSBvYmonLCBvYmopO1xuICAgICAgICAgICAgaWYgKGFnZSA+PSBvYmouc3RhcnQgJiYgYWdlIDw9IG9iai5lbmQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdtYXRjaCBhZ2UgcmFuZ2UnLCBwcm9maWxlQ29kZS5nZXRDb2RlKCkpO1xuICAgICAgICAgICAgICAgIHJhbmdlUmVzdWx0ID0gcHJvZmlsZUNvZGUuZ2V0Q29kZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdyYW5nZVJlc3VsdCcsIHJhbmdlUmVzdWx0KTtcblxuICAgICAgICByZXR1cm4gcmFuZ2VSZXN1bHQ7XG4gICAgfVxuXG4gICAgY291bnRBZ2UoYmlydGhkYXk6IERhdGUpOiBudW1iZXIge1xuICAgICAgICBsZXQgZGF0ZXMgPSB0aGlzLmNhbENFSW50ZXJ2YWxEYXlzKGJpcnRoZGF5LCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnZGF0ZXMnLCBkYXRlcyk7XG4gICAgICAgIGxldCBhZ2UgPSBNYXRoLmZsb29yKGRhdGVzIC8gMzY1KTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnYWdlJywgYWdlKTtcblxuICAgICAgICByZXR1cm4gYWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGphdmFzY3JpcHTlgrPlhaXotbflp4vml6XoiIfntZDmnZ9cbiAgICAgKiDml6XmnJ/moLzlvI/ngrrmsJHlnIvlubTmnIjml6UoRVguMTA2MDgwMilcbiAgICAgKiDlgrPlhaUgMTA2MDcwMiwxMDYwODAyIOacg+WbnuWCszMx5aSpXG4gICAgICog5YKz5YWlIDEwNjA5MDEsMTA2MTAwMSDmnIPlm57lgrMzMOWkqVxuICAgICAqIEBwYXJhbSAgc0RhdGUgXG4gICAgICogQHBhcmFtICBlRGF0ZSBcbiAgICAgKiBAcmV0dXJuIOWkqeaVuFxuICAgICAqL1xuICAgIGNhbFJvY0ludGVydmFsRGF5cyhzRGF0ZSwgZURhdGUpIHtcbiAgICAgICAgdmFyIG1zZWNQZXJNaW51dGUgPSAxMDAwICogNjA7XG4gICAgICAgIHZhciBtc2VjUGVySG91ciA9IG1zZWNQZXJNaW51dGUgKiA2MDtcbiAgICAgICAgdmFyIG1zZWNQZXJEYXkgPSBtc2VjUGVySG91ciAqIDI0O1xuICAgICAgICBzRGF0ZSA9IHRoaXMubGVmdFBhZChzRGF0ZSwgNywgJzAnKTtcbiAgICAgICAgZURhdGUgPSB0aGlzLmxlZnRQYWQoZURhdGUsIDcsICcwJyk7XG4gICAgICAgIHZhciBiZWdEYXRlU3RyID0gXCJcIiArIHNEYXRlLnN1YnN0cmluZygzLCA1KSArIFwiL1wiICsgc0RhdGUuc3Vic3RyaW5nKDUpICsgXCIvXCIgKyAoTnVtYmVyKHNEYXRlLnN1YnN0cmluZygwLCAzKSkgKyBOdW1iZXIoMTkxMSkpO1xuICAgICAgICB2YXIgZW5kRGF0ZVN0ciA9IFwiXCIgKyBlRGF0ZS5zdWJzdHJpbmcoMywgNSkgKyBcIi9cIiArIGVEYXRlLnN1YnN0cmluZyg1KSArIFwiL1wiICsgKE51bWJlcihlRGF0ZS5zdWJzdHJpbmcoMCwgMykpICsgTnVtYmVyKDE5MTEpKTtcbiAgICAgICAgdmFyIGJlZ0RhdGUgPSBuZXcgRGF0ZShiZWdEYXRlU3RyKTtcbiAgICAgICAgdmFyIGVuZERhdGUgPSBuZXcgRGF0ZShlbmREYXRlU3RyKTtcbiAgICAgICAgdmFyIGludGVydmFsID0gZW5kRGF0ZS5nZXRUaW1lKCkgLSBiZWdEYXRlLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGludGVydmFsIC8gbXNlY1BlckRheSk7XG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBqYXZhc2NyaXB05YKz5YWl6LW35aeL5pel6IiH57WQ5p2fXG4gICAgICog5pel5pyf5qC85byP54K66KW/5YWD5bm05pyI5pelKEVYLjIwMTcwODAxKVxuICAgICAqIOWCs+WFpSAyMDE3MDcwMiwyMDE3MDgwMiDmnIPlm57lgrMzMeWkqVxuICAgICAqIOWCs+WFpSAyMDE3MDkwMSwyMDE3MTAwMSDmnIPlm57lgrMzMOWkqVxuICAgICAqIEBwYXJhbSAgc0RhdGUgXG4gICAgICogQHBhcmFtICBlRGF0ZSBcbiAgICAgKiBAcmV0dXJuIOWkqeaVuFxuICAgICAqL1xuICAgIGNhbENFSW50ZXJ2YWxEYXlzKHNEYXRlLCBlRGF0ZSkge1xuICAgICAgICAvLyB2YXIgbXNlY1Blck1pbnV0ZSA9IDEwMDAgKiA2MDtcbiAgICAgICAgLy8gdmFyIG1zZWNQZXJIb3VyID0gbXNlY1Blck1pbnV0ZSAqIDYwO1xuICAgICAgICAvLyB2YXIgbXNlY1BlckRheSA9IG1zZWNQZXJIb3VyICogMjQ7XG4gICAgICAgIC8vIHZhciBiZWdEYXRlU3RyID0gXCJcIiArIHNEYXRlLnN1YnN0cmluZyg0LCA2KSArIFwiL1wiICsgc0RhdGUuc3Vic3RyaW5nKDYpICsgXCIvXCIgKyBzRGF0ZS5zdWJzdHJpbmcoMCwgNCk7XG4gICAgICAgIC8vIHZhciBlbmREYXRlU3RyID0gXCJcIiArIGVEYXRlLnN1YnN0cmluZyg0LCA2KSArIFwiL1wiICsgZURhdGUuc3Vic3RyaW5nKDYpICsgXCIvXCIgKyBlRGF0ZS5zdWJzdHJpbmcoMCwgNCk7XG4gICAgICAgIC8vIHZhciBiZWdEYXRlID0gbmV3IERhdGUoYmVnRGF0ZVN0cik7XG4gICAgICAgIC8vIHZhciBlbmREYXRlID0gbmV3IERhdGUoZW5kRGF0ZVN0cik7XG4gICAgICAgIC8vIHZhciBpbnRlcnZhbCA9IGVuZERhdGUuZ2V0VGltZSgpIC0gYmVnRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIC8vIHZhciBkYXlzID0gTWF0aC5mbG9vcihpbnRlcnZhbCAvIG1zZWNQZXJEYXkpO1xuXG4gICAgICAgIC8vIHJldHVybiBkYXlzO1xuICAgICAgICByZXR1cm4gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGVEYXRlLCBzRGF0ZSk7XG5cbiAgICB9XG4gICAgLyoqXG4gICAgICog5ZCR5bem6KOc6Zu2XG4gICAgICogRXg6bGVmdFBhZCgzLDMsJzAnKS0+MDAzXG4gICAgICogQHBhcmFtICB2YWwgICAgW+WOn+WAvF1cbiAgICAgKiBAcGFyYW0gIHBhZExlbiBb6KOc6Laz6ZW35bqmXVxuICAgICAqIEBwYXJhbSAgcGFkVmFsIFvoo5zotrPlgLxdXG4gICAgICogQHJldHVybiAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGxlZnRQYWQodmFsLCBwYWRMZW4sIHBhZFZhbCkge1xuICAgICAgICBpZiAodmFsLnRvU3RyaW5nKCkubGVuZ3RoIDwgcGFkTGVuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBhZExlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gcGFkVmFsICsgdmFsO1xuICAgICAgICAgICAgICAgIGlmICh2YWwudG9TdHJpbmcoKS5sZW5ndGggPj0gcGFkTGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIGNvbnZlcnROYW1lVG9TaG93KGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvd1J1bGUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zaG93UnVsZS5jb252ZXJ0TmFtZShmaXJzdE5hbWUsIGxhc3ROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBsZXQgZmlyc3ROYW1lU3RyOiBzdHJpbmcgPSBTdHJpbmdVdGlscy5pc05vdEVtcHR5KGZpcnN0TmFtZSkgPyBmaXJzdE5hbWUgOiAnJztcbiAgICAgICAgICBsZXQgbGFzdE5hbWVTdHI6IHN0cmluZyA9IFN0cmluZ1V0aWxzLmlzTm90RW1wdHkobGFzdE5hbWUpID8gKCcgJyArIGxhc3ROYW1lKSA6ICcnO1xuICAgICAgICAgIHJldHVybiBmaXJzdE5hbWVTdHIgKyBsYXN0TmFtZVN0cjtcbiAgICAgICAgfVxuICAgICAgfVxuXG59Il19