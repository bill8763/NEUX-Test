/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ProfileCodeService, StringUtils, showRuleToken } from "@allianzSND/core";
import { SelectOption } from "@allianzSND/core";
import { differenceInCalendarDays } from 'date-fns';
import { Injectable, Optional, Inject } from "@angular/core";
import { customerShowRuleToken } from "../injectionToken/injection-token";
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
import * as i2 from "../injectionToken/injection-token";
var CustomerUtils = /** @class */ (function () {
    function CustomerUtils(profileCodeService, showRule, customerShowRule) {
        this.profileCodeService = profileCodeService;
        this.showRule = showRule;
        this.customerShowRule = customerShowRule;
    }
    /**
     * @param {?} codeArray
     * @return {?}
     */
    CustomerUtils.prototype.setCode2Option = /**
     * @param {?} codeArray
     * @return {?}
     */
    function (codeArray) {
        var e_1, _a;
        /** @type {?} */
        var options = new Array();
        if (codeArray != undefined) {
            try {
                for (var codeArray_1 = tslib_1.__values(codeArray), codeArray_1_1 = codeArray_1.next(); !codeArray_1_1.done; codeArray_1_1 = codeArray_1.next()) {
                    var code = codeArray_1_1.value;
                    options.push(new SelectOption(code.getCode(), code.displayText));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (codeArray_1_1 && !codeArray_1_1.done && (_a = codeArray_1.return)) _a.call(codeArray_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return options;
    };
    /**
     * @param {?} customerObj
     * @return {?}
     */
    CustomerUtils.prototype.countCompleteness = /**
     * @param {?} customerObj
     * @return {?}
     */
    function (customerObj) {
        console.log("this.customerShowRule: ", this.customerShowRule);
        if (this.customerShowRule) {
            return this.customerShowRule.calculateCompleteness(customerObj);
        }
        else {
            return 0;
        }
    };
    /**
     * @param {?} dataObject
     * @return {?}
     */
    CustomerUtils.prototype.setCustomerDefaultValue = /**
     * @param {?} dataObject
     * @return {?}
     */
    function (dataObject) {
        //count age
        if (StringUtils.isNotEmpty(dataObject.getValue('BirthdayYear')) &&
            StringUtils.isNotEmpty(dataObject.getValue('BirthdayMonth')) &&
            StringUtils.isNotEmpty(dataObject.getValue('BirthdayDate'))) {
            /** @type {?} */
            var birthday = new Date(Number(dataObject.getValue('BirthdayYear')), Number(dataObject.getValue('BirthdayMonth') - 1), Number(dataObject.getValue('BirthdayDate')));
            /** @type {?} */
            var age = this.countAge(birthday);
            dataObject.setValue('age', age);
            //check age range
            if (StringUtils.isEmpty(dataObject.getValue('AgeRange'))) {
                /** @type {?} */
                var ageRange = this.countAgeRange(age);
                if (ageRange != undefined) {
                    dataObject.setValue('AgeRange', ageRange);
                }
            }
        }
    };
    /**
     * @param {?} age
     * @return {?}
     */
    CustomerUtils.prototype.countAgeRange = /**
     * @param {?} age
     * @return {?}
     */
    function (age) {
        console.debug('countAgeRange', age);
        /** @type {?} */
        var rangeResult;
        /** @type {?} */
        var ageRange = this.profileCodeService.getCodeArray('Customer_Age');
        console.log("ageRange:", ageRange);
        ageRange.forEach((/**
         * @param {?} profileCode
         * @return {?}
         */
        function (profileCode) {
            /** @type {?} */
            var args = profileCode.getArguments();
            console.debug('customer-utils countAgeRange args', args);
            /** @type {?} */
            var obj = JSON.parse(args);
            console.debug('customer-utils countAgeRange obj', obj);
            if (age >= obj.start && age <= obj.end) {
                console.debug('match age range', profileCode.getCode());
                rangeResult = profileCode.getCode();
            }
        }));
        console.debug('rangeResult', rangeResult);
        return rangeResult;
    };
    /**
     * @param {?} birthday
     * @return {?}
     */
    CustomerUtils.prototype.countAge = /**
     * @param {?} birthday
     * @return {?}
     */
    function (birthday) {
        /** @type {?} */
        var dates = this.calCEIntervalDays(birthday, new Date());
        console.debug('dates', dates);
        /** @type {?} */
        var age = Math.floor(dates / 365);
        console.debug('age', age);
        return age;
    };
    /**
     * javascript傳入起始日與結束
     * 日期格式為民國年月日(EX.1060802)
     * 傳入 1060702,1060802 會回傳31天
     * 傳入 1060901,1061001 會回傳30天
     * @param  sDate
     * @param  eDate
     * @return 天數
     */
    /**
     * javascript傳入起始日與結束
     * 日期格式為民國年月日(EX.1060802)
     * 傳入 1060702,1060802 會回傳31天
     * 傳入 1060901,1061001 會回傳30天
     * @param {?} sDate
     * @param {?} eDate
     * @return {?} 天數
     */
    CustomerUtils.prototype.calRocIntervalDays = /**
     * javascript傳入起始日與結束
     * 日期格式為民國年月日(EX.1060802)
     * 傳入 1060702,1060802 會回傳31天
     * 傳入 1060901,1061001 會回傳30天
     * @param {?} sDate
     * @param {?} eDate
     * @return {?} 天數
     */
    function (sDate, eDate) {
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
    };
    /**
     * javascript傳入起始日與結束
     * 日期格式為西元年月日(EX.20170801)
     * 傳入 20170702,20170802 會回傳31天
     * 傳入 20170901,20171001 會回傳30天
     * @param  sDate
     * @param  eDate
     * @return 天數
     */
    /**
     * javascript傳入起始日與結束
     * 日期格式為西元年月日(EX.20170801)
     * 傳入 20170702,20170802 會回傳31天
     * 傳入 20170901,20171001 會回傳30天
     * @param {?} sDate
     * @param {?} eDate
     * @return {?} 天數
     */
    CustomerUtils.prototype.calCEIntervalDays = /**
     * javascript傳入起始日與結束
     * 日期格式為西元年月日(EX.20170801)
     * 傳入 20170702,20170802 會回傳31天
     * 傳入 20170901,20171001 會回傳30天
     * @param {?} sDate
     * @param {?} eDate
     * @return {?} 天數
     */
    function (sDate, eDate) {
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
    };
    /**
     * 向左補零
     * Ex:leftPad(3,3,'0')->003
     * @param  val    [原值]
     * @param  padLen [補足長度]
     * @param  padVal [補足值]
     * @return        [description]
     */
    /**
     * 向左補零
     * Ex:leftPad(3,3,'0')->003
     * @param {?} val    [原值]
     * @param {?} padLen [補足長度]
     * @param {?} padVal [補足值]
     * @return {?} [description]
     */
    CustomerUtils.prototype.leftPad = /**
     * 向左補零
     * Ex:leftPad(3,3,'0')->003
     * @param {?} val    [原值]
     * @param {?} padLen [補足長度]
     * @param {?} padVal [補足值]
     * @return {?} [description]
     */
    function (val, padLen, padVal) {
        if (val.toString().length < padLen) {
            for (var i = 1; i < padLen; i++) {
                val = padVal + val;
                if (val.toString().length >= padLen) {
                    break;
                }
            }
        }
        return val;
    };
    /**
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    CustomerUtils.prototype.convertNameToShow = /**
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    function (firstName, lastName) {
        if (this.showRule) {
            return this.showRule.convertName(firstName, lastName);
        }
        else {
            /** @type {?} */
            var firstNameStr = StringUtils.isNotEmpty(firstName) ? firstName : '';
            /** @type {?} */
            var lastNameStr = StringUtils.isNotEmpty(lastName) ? (' ' + lastName) : '';
            return firstNameStr + lastNameStr;
        }
    };
    CustomerUtils.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    CustomerUtils.ctorParameters = function () { return [
        { type: ProfileCodeService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerShowRuleToken,] }] }
    ]; };
    /** @nocollapse */ CustomerUtils.ngInjectableDef = i0.defineInjectable({ factory: function CustomerUtils_Factory() { return new CustomerUtils(i0.inject(i1.ProfileCodeService), i0.inject(i1.showRuleToken, 8), i0.inject(i2.customerShowRuleToken, 8)); }, token: CustomerUtils, providedIn: "root" });
    return CustomerUtils;
}());
export { CustomerUtils };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21lci91dGlscy9jdXN0b21lci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBZSxrQkFBa0IsRUFBZSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUcsT0FBTyxFQUFFLFlBQVksRUFBVyxNQUFNLGtCQUFrQixDQUFDO0FBQ3pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFJMUU7SUFHSSx1QkFDWSxrQkFBc0MsRUFDSCxRQUFrQixFQUNWLGdCQUFrQztRQUY3RSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ0gsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFckYsQ0FBQzs7Ozs7SUFFTCxzQ0FBYzs7OztJQUFkLFVBQWUsU0FBNkI7OztZQUNwQyxPQUFPLEdBQXdCLElBQUksS0FBSyxFQUFFO1FBQzlDLElBQUksU0FBUyxJQUFJLFNBQVMsRUFBRTs7Z0JBQ3hCLEtBQWlCLElBQUEsY0FBQSxpQkFBQSxTQUFTLENBQUEsb0NBQUEsMkRBQUU7b0JBQXZCLElBQUksSUFBSSxzQkFBQTtvQkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFDcEU7Ozs7Ozs7OztTQUNKO1FBR0QsT0FBTyxPQUFPLENBQUM7SUFD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QUNKO1NBQ0o7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVELHlDQUFpQjs7Ozs7SUFBakIsVUFBa0IsU0FBaUIsRUFBRSxRQUFnQjtRQUNqRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDdkQ7YUFDSTs7Z0JBQ0MsWUFBWSxHQUFXLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTs7Z0JBQ3pFLFdBQVcsR0FBVyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsRixPQUFPLFlBQVksR0FBRyxXQUFXLENBQUM7U0FDbkM7SUFDSCxDQUFDOztnQkF0S04sVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O2dCQVJaLGtCQUFrQjtnREFhL0IsUUFBUSxZQUFJLE1BQU0sU0FBQyxhQUFhO2dEQUNoQyxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs7O3dCQWRqRDtDQWdMQyxBQXhLRCxJQXdLQztTQXZLWSxhQUFhOzs7Ozs7SUFHbEIsMkNBQThDOzs7OztJQUM5QyxpQ0FBNkQ7Ozs7O0lBQzdELHlDQUFxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2ZpbGVDb2RlLCBQcm9maWxlQ29kZVNlcnZpY2UsIFNRTGl0ZVRhYmxlLCBTdHJpbmdVdGlscywgc2hvd1J1bGVUb2tlbiB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb24sIHNob3dSdWxlfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBjdXN0b21lclNob3dSdWxlVG9rZW4gfSBmcm9tIFwiLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuXCI7XG5pbXBvcnQgeyBDdXN0b21lclNob3dSdWxlIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9DdXN0b21lclNob3dSdWxlXCI7XG5cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclV0aWxzIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KHNob3dSdWxlVG9rZW4pIHByaXZhdGUgc2hvd1J1bGU6IHNob3dSdWxlLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGN1c3RvbWVyU2hvd1J1bGVUb2tlbikgcHJpdmF0ZSBjdXN0b21lclNob3dSdWxlOiBDdXN0b21lclNob3dSdWxlLFxuXG4gICAgKSB7IH1cblxuICAgIHNldENvZGUyT3B0aW9uKGNvZGVBcnJheTogQXJyYXk8UHJvZmlsZUNvZGU+KSB7XG4gICAgICAgIGxldCBvcHRpb25zOiBBcnJheTxTZWxlY3RPcHRpb24+ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGlmIChjb2RlQXJyYXkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2RlIG9mIGNvZGVBcnJheSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChuZXcgU2VsZWN0T3B0aW9uKGNvZGUuZ2V0Q29kZSgpLCBjb2RlLmRpc3BsYXlUZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuXG4gICAgY291bnRDb21wbGV0ZW5lc3MoY3VzdG9tZXJPYmo6IGFueSk6IG51bWJlciB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5jdXN0b21lclNob3dSdWxlOiBcIix0aGlzLmN1c3RvbWVyU2hvd1J1bGUpO1xuICAgICAgICBpZih0aGlzLmN1c3RvbWVyU2hvd1J1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbWVyU2hvd1J1bGUuY2FsY3VsYXRlQ29tcGxldGVuZXNzKGN1c3RvbWVyT2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDdXN0b21lckRlZmF1bHRWYWx1ZShkYXRhT2JqZWN0OiBTUUxpdGVUYWJsZSkge1xuXG4gICAgICAgIC8vY291bnQgYWdlXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KGRhdGFPYmplY3QuZ2V0VmFsdWUoJ0JpcnRoZGF5WWVhcicpKSAmJlxuICAgICAgICAgICAgU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShkYXRhT2JqZWN0LmdldFZhbHVlKCdCaXJ0aGRheU1vbnRoJykpICYmXG4gICAgICAgICAgICBTdHJpbmdVdGlscy5pc05vdEVtcHR5KGRhdGFPYmplY3QuZ2V0VmFsdWUoJ0JpcnRoZGF5RGF0ZScpKSkge1xuICAgICAgICAgICAgbGV0IGJpcnRoZGF5ID0gbmV3IERhdGUoTnVtYmVyKGRhdGFPYmplY3QuZ2V0VmFsdWUoJ0JpcnRoZGF5WWVhcicpKSxcbiAgICAgICAgICAgICAgICBOdW1iZXIoZGF0YU9iamVjdC5nZXRWYWx1ZSgnQmlydGhkYXlNb250aCcpIC0gMSksXG4gICAgICAgICAgICAgICAgTnVtYmVyKGRhdGFPYmplY3QuZ2V0VmFsdWUoJ0JpcnRoZGF5RGF0ZScpKSk7XG5cbiAgICAgICAgICAgIGxldCBhZ2UgPSB0aGlzLmNvdW50QWdlKGJpcnRoZGF5KTtcbiAgICAgICAgICAgIGRhdGFPYmplY3Quc2V0VmFsdWUoJ2FnZScsIGFnZSk7XG5cbiAgICAgICAgICAgIC8vY2hlY2sgYWdlIHJhbmdlXG4gICAgICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShkYXRhT2JqZWN0LmdldFZhbHVlKCdBZ2VSYW5nZScpKSkge1xuICAgICAgICAgICAgICAgIGxldCBhZ2VSYW5nZSA9IHRoaXMuY291bnRBZ2VSYW5nZShhZ2UpO1xuICAgICAgICAgICAgICAgIGlmIChhZ2VSYW5nZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YU9iamVjdC5zZXRWYWx1ZSgnQWdlUmFuZ2UnLCBhZ2VSYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvdW50QWdlUmFuZ2UoYWdlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY291bnRBZ2VSYW5nZScsIGFnZSk7XG4gICAgICAgIGxldCByYW5nZVJlc3VsdDtcbiAgICAgICAgbGV0IGFnZVJhbmdlOiBBcnJheTxQcm9maWxlQ29kZT4gPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0FnZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFnZVJhbmdlOlwiLCBhZ2VSYW5nZSk7XG4gICAgICAgIGFnZVJhbmdlLmZvckVhY2gocHJvZmlsZUNvZGUgPT4ge1xuICAgICAgICAgICAgbGV0IGFyZ3MgPSBwcm9maWxlQ29kZS5nZXRBcmd1bWVudHMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXV0aWxzIGNvdW50QWdlUmFuZ2UgYXJncycsIGFyZ3MpO1xuXG4gICAgICAgICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShhcmdzKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXV0aWxzIGNvdW50QWdlUmFuZ2Ugb2JqJywgb2JqKTtcbiAgICAgICAgICAgIGlmIChhZ2UgPj0gb2JqLnN0YXJ0ICYmIGFnZSA8PSBvYmouZW5kKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnbWF0Y2ggYWdlIHJhbmdlJywgcHJvZmlsZUNvZGUuZ2V0Q29kZSgpKTtcbiAgICAgICAgICAgICAgICByYW5nZVJlc3VsdCA9IHByb2ZpbGVDb2RlLmdldENvZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygncmFuZ2VSZXN1bHQnLCByYW5nZVJlc3VsdCk7XG5cbiAgICAgICAgcmV0dXJuIHJhbmdlUmVzdWx0O1xuICAgIH1cblxuICAgIGNvdW50QWdlKGJpcnRoZGF5OiBEYXRlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGRhdGVzID0gdGhpcy5jYWxDRUludGVydmFsRGF5cyhiaXJ0aGRheSwgbmV3IERhdGUoKSk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2RhdGVzJywgZGF0ZXMpO1xuICAgICAgICBsZXQgYWdlID0gTWF0aC5mbG9vcihkYXRlcyAvIDM2NSk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2FnZScsIGFnZSk7XG5cbiAgICAgICAgcmV0dXJuIGFnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBqYXZhc2NyaXB05YKz5YWl6LW35aeL5pel6IiH57WQ5p2fXG4gICAgICog5pel5pyf5qC85byP54K65rCR5ZyL5bm05pyI5pelKEVYLjEwNjA4MDIpXG4gICAgICog5YKz5YWlIDEwNjA3MDIsMTA2MDgwMiDmnIPlm57lgrMzMeWkqVxuICAgICAqIOWCs+WFpSAxMDYwOTAxLDEwNjEwMDEg5pyD5Zue5YKzMzDlpKlcbiAgICAgKiBAcGFyYW0gIHNEYXRlIFxuICAgICAqIEBwYXJhbSAgZURhdGUgXG4gICAgICogQHJldHVybiDlpKnmlbhcbiAgICAgKi9cbiAgICBjYWxSb2NJbnRlcnZhbERheXMoc0RhdGUsIGVEYXRlKSB7XG4gICAgICAgIHZhciBtc2VjUGVyTWludXRlID0gMTAwMCAqIDYwO1xuICAgICAgICB2YXIgbXNlY1BlckhvdXIgPSBtc2VjUGVyTWludXRlICogNjA7XG4gICAgICAgIHZhciBtc2VjUGVyRGF5ID0gbXNlY1BlckhvdXIgKiAyNDtcbiAgICAgICAgc0RhdGUgPSB0aGlzLmxlZnRQYWQoc0RhdGUsIDcsICcwJyk7XG4gICAgICAgIGVEYXRlID0gdGhpcy5sZWZ0UGFkKGVEYXRlLCA3LCAnMCcpO1xuICAgICAgICB2YXIgYmVnRGF0ZVN0ciA9IFwiXCIgKyBzRGF0ZS5zdWJzdHJpbmcoMywgNSkgKyBcIi9cIiArIHNEYXRlLnN1YnN0cmluZyg1KSArIFwiL1wiICsgKE51bWJlcihzRGF0ZS5zdWJzdHJpbmcoMCwgMykpICsgTnVtYmVyKDE5MTEpKTtcbiAgICAgICAgdmFyIGVuZERhdGVTdHIgPSBcIlwiICsgZURhdGUuc3Vic3RyaW5nKDMsIDUpICsgXCIvXCIgKyBlRGF0ZS5zdWJzdHJpbmcoNSkgKyBcIi9cIiArIChOdW1iZXIoZURhdGUuc3Vic3RyaW5nKDAsIDMpKSArIE51bWJlcigxOTExKSk7XG4gICAgICAgIHZhciBiZWdEYXRlID0gbmV3IERhdGUoYmVnRGF0ZVN0cik7XG4gICAgICAgIHZhciBlbmREYXRlID0gbmV3IERhdGUoZW5kRGF0ZVN0cik7XG4gICAgICAgIHZhciBpbnRlcnZhbCA9IGVuZERhdGUuZ2V0VGltZSgpIC0gYmVnRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihpbnRlcnZhbCAvIG1zZWNQZXJEYXkpO1xuICAgICAgICByZXR1cm4gZGF5cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogamF2YXNjcmlwdOWCs+WFpei1t+Wni+aXpeiIh+e1kOadn1xuICAgICAqIOaXpeacn+agvOW8j+eCuuilv+WFg+W5tOaciOaXpShFWC4yMDE3MDgwMSlcbiAgICAgKiDlgrPlhaUgMjAxNzA3MDIsMjAxNzA4MDIg5pyD5Zue5YKzMzHlpKlcbiAgICAgKiDlgrPlhaUgMjAxNzA5MDEsMjAxNzEwMDEg5pyD5Zue5YKzMzDlpKlcbiAgICAgKiBAcGFyYW0gIHNEYXRlIFxuICAgICAqIEBwYXJhbSAgZURhdGUgXG4gICAgICogQHJldHVybiDlpKnmlbhcbiAgICAgKi9cbiAgICBjYWxDRUludGVydmFsRGF5cyhzRGF0ZSwgZURhdGUpIHtcbiAgICAgICAgLy8gdmFyIG1zZWNQZXJNaW51dGUgPSAxMDAwICogNjA7XG4gICAgICAgIC8vIHZhciBtc2VjUGVySG91ciA9IG1zZWNQZXJNaW51dGUgKiA2MDtcbiAgICAgICAgLy8gdmFyIG1zZWNQZXJEYXkgPSBtc2VjUGVySG91ciAqIDI0O1xuICAgICAgICAvLyB2YXIgYmVnRGF0ZVN0ciA9IFwiXCIgKyBzRGF0ZS5zdWJzdHJpbmcoNCwgNikgKyBcIi9cIiArIHNEYXRlLnN1YnN0cmluZyg2KSArIFwiL1wiICsgc0RhdGUuc3Vic3RyaW5nKDAsIDQpO1xuICAgICAgICAvLyB2YXIgZW5kRGF0ZVN0ciA9IFwiXCIgKyBlRGF0ZS5zdWJzdHJpbmcoNCwgNikgKyBcIi9cIiArIGVEYXRlLnN1YnN0cmluZyg2KSArIFwiL1wiICsgZURhdGUuc3Vic3RyaW5nKDAsIDQpO1xuICAgICAgICAvLyB2YXIgYmVnRGF0ZSA9IG5ldyBEYXRlKGJlZ0RhdGVTdHIpO1xuICAgICAgICAvLyB2YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKGVuZERhdGVTdHIpO1xuICAgICAgICAvLyB2YXIgaW50ZXJ2YWwgPSBlbmREYXRlLmdldFRpbWUoKSAtIGJlZ0RhdGUuZ2V0VGltZSgpO1xuICAgICAgICAvLyB2YXIgZGF5cyA9IE1hdGguZmxvb3IoaW50ZXJ2YWwgLyBtc2VjUGVyRGF5KTtcblxuICAgICAgICAvLyByZXR1cm4gZGF5cztcbiAgICAgICAgcmV0dXJuIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhlRGF0ZSwgc0RhdGUpO1xuXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWQkeW3puijnOmbtlxuICAgICAqIEV4OmxlZnRQYWQoMywzLCcwJyktPjAwM1xuICAgICAqIEBwYXJhbSAgdmFsICAgIFvljp/lgLxdXG4gICAgICogQHBhcmFtICBwYWRMZW4gW+ijnOi2s+mVt+W6pl1cbiAgICAgKiBAcGFyYW0gIHBhZFZhbCBb6KOc6Laz5YC8XVxuICAgICAqIEByZXR1cm4gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBsZWZ0UGFkKHZhbCwgcGFkTGVuLCBwYWRWYWwpIHtcbiAgICAgICAgaWYgKHZhbC50b1N0cmluZygpLmxlbmd0aCA8IHBhZExlbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwYWRMZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IHBhZFZhbCArIHZhbDtcbiAgICAgICAgICAgICAgICBpZiAodmFsLnRvU3RyaW5nKCkubGVuZ3RoID49IHBhZExlbikge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICBjb252ZXJ0TmFtZVRvU2hvdyhmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnNob3dSdWxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1J1bGUuY29udmVydE5hbWUoZmlyc3ROYW1lLCBsYXN0TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IGZpcnN0TmFtZVN0cjogc3RyaW5nID0gU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShmaXJzdE5hbWUpID8gZmlyc3ROYW1lIDogJyc7XG4gICAgICAgICAgbGV0IGxhc3ROYW1lU3RyOiBzdHJpbmcgPSBTdHJpbmdVdGlscy5pc05vdEVtcHR5KGxhc3ROYW1lKSA/ICgnICcgKyBsYXN0TmFtZSkgOiAnJztcbiAgICAgICAgICByZXR1cm4gZmlyc3ROYW1lU3RyICsgbGFzdE5hbWVTdHI7XG4gICAgICAgIH1cbiAgICAgIH1cblxufSJdfQ==