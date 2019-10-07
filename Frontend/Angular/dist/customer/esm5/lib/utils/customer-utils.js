/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ProfileCodeService, StringUtils } from "@allianzSND/core";
import { SelectOption } from "@allianzSND/ui";
import { differenceInCalendarDays } from 'date-fns';
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
var CustomerUtils = /** @class */ (function () {
    function CustomerUtils(profileCodeService) {
        this.profileCodeService = profileCodeService;
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
     * @param {?} customerDetail
     * @return {?}
     */
    CustomerUtils.prototype.countCompletenessByProfile = /**
     * @param {?} customerDetail
     * @return {?}
     */
    function (customerDetail) {
        console.debug('countCompletenessByDetail', customerDetail);
        //count Completeness
        /** @type {?} */
        var completeness = 0;
        /** @type {?} */
        var countColumnName = ['FirstName', 'LastName', 'Occupation', 'Company', 'AgeRange', 'Gender',
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
    };
    /**
     * @param {?} customerObj
     * @param {?} telArraySize
     * @param {?} emailArraySize
     * @param {?} addressAddressSize
     * @return {?}
     */
    CustomerUtils.prototype.countCompleteness = /**
     * @param {?} customerObj
     * @param {?} telArraySize
     * @param {?} emailArraySize
     * @param {?} addressAddressSize
     * @return {?}
     */
    function (customerObj, telArraySize, emailArraySize, addressAddressSize) {
        var e_2, _a;
        console.debug('countCompleteness', customerObj, telArraySize, emailArraySize, addressAddressSize);
        //count Completeness
        /** @type {?} */
        var completeness = 0;
        /** @type {?} */
        var countColumnName = ['FirstName', 'LastName', 'Occupation', 'Company', 'AgeRange', 'Gender',
            'Income', 'Source', 'Marriage', 'Children', 'Familiarity', 'RecentStatus', 'MANPA',
            'ContactFrequancy', 'Possibility'];
        try {
            for (var countColumnName_1 = tslib_1.__values(countColumnName), countColumnName_1_1 = countColumnName_1.next(); !countColumnName_1_1.done; countColumnName_1_1 = countColumnName_1.next()) {
                var columnName = countColumnName_1_1.value;
                if (StringUtils.isNotEmpty(customerObj.getValue(columnName))) {
                    console.debug('hasData', columnName + '=>' + customerObj.getValue(columnName));
                    completeness++;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (countColumnName_1_1 && !countColumnName_1_1.done && (_a = countColumnName_1.return)) _a.call(countColumnName_1);
            }
            finally { if (e_2) throw e_2.error; }
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
    CustomerUtils.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    CustomerUtils.ctorParameters = function () { return [
        { type: ProfileCodeService }
    ]; };
    /** @nocollapse */ CustomerUtils.ngInjectableDef = i0.defineInjectable({ factory: function CustomerUtils_Factory() { return new CustomerUtils(i0.inject(i1.ProfileCodeService)); }, token: CustomerUtils, providedIn: "root" });
    return CustomerUtils;
}());
export { CustomerUtils };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerUtils.prototype.profileCodeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9jdXN0b21lci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBZSxrQkFBa0IsRUFBZSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUUzQztJQUdJLHVCQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUFJLENBQUM7Ozs7O0lBRS9ELHNDQUFjOzs7O0lBQWQsVUFBZSxTQUE2Qjs7O1lBQ3BDLE9BQU8sR0FBd0IsSUFBSSxLQUFLLEVBQUU7UUFDOUMsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFOztnQkFDeEIsS0FBaUIsSUFBQSxjQUFBLGlCQUFBLFNBQVMsQ0FBQSxvQ0FBQSwyREFBRTtvQkFBdkIsSUFBSSxJQUFJLHNCQUFBO29CQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2lCQUNwRTs7Ozs7Ozs7O1NBQ0o7UUFHRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELGtEQUEwQjs7OztJQUExQixVQUEyQixjQUErQjtRQUN0RCxPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFDLGNBQWMsQ0FBQyxDQUFDOzs7WUFHdEQsWUFBWSxHQUFXLENBQUM7O1lBQ3hCLGVBQWUsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUTtZQUN6RixRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxPQUFPO1lBQ2xGLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztRQUVsQyxJQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztZQUFFLFlBQVksRUFBRSxDQUFDO1FBQ3BFLElBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1lBQUUsWUFBWSxFQUFFLENBQUM7UUFDbkUsSUFBRyxXQUFXLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7WUFBRSxZQUFZLEVBQUUsQ0FBQztRQUNyRSxJQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztZQUFFLFlBQVksRUFBRSxDQUFDO1FBQ2xFLElBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1lBQUUsWUFBWSxFQUFFLENBQUM7UUFDbkUsSUFBRyxXQUFXLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7WUFBRSxZQUFZLEVBQUUsQ0FBQztRQUNqRSxJQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztZQUFFLFlBQVksRUFBRSxDQUFDO1FBQ2pFLElBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBQUUsWUFBWSxFQUFFLENBQUM7UUFDakUsSUFBRyxXQUFXLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7WUFBRSxZQUFZLEVBQUUsQ0FBQztRQUNuRSxJQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztZQUFFLFlBQVksRUFBRSxDQUFDO1FBQ25FLElBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1lBQUUsWUFBWSxFQUFFLENBQUM7UUFDdEUsSUFBRyxXQUFXLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7WUFBRSxZQUFZLEVBQUUsQ0FBQztRQUN2RSxJQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztZQUFFLFlBQVksRUFBRSxDQUFDO1FBQ2hFLElBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7WUFBRSxZQUFZLEVBQUUsQ0FBQztRQUMzRSxJQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztZQUFFLFlBQVksRUFBRSxDQUFDO1FBSTFFLGdCQUFnQjtRQUNoQixJQUFJLGNBQWMsQ0FBQyxRQUFRLElBQUksU0FBUztZQUFFLFlBQVksRUFBRSxDQUFDO1FBRXpELDJCQUEyQjtRQUMzQixJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxZQUFZLEVBQUUsQ0FBQztRQUNwRCxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxZQUFZLEVBQUUsQ0FBQztRQUN0RCxJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxZQUFZLEVBQUUsQ0FBQztRQUV6RCxPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFDLFlBQVksRUFBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRixZQUFZLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6RCxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFeEQsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQzs7Ozs7Ozs7SUFFRCx5Q0FBaUI7Ozs7Ozs7SUFBakIsVUFBa0IsV0FBeUIsRUFBQyxZQUFxQixFQUFDLGNBQXVCLEVBQUMsa0JBQTJCOztRQUNqSCxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLGtCQUFrQixDQUFDLENBQUM7OztZQUcxRixZQUFZLEdBQVcsQ0FBQzs7WUFDeEIsZUFBZSxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRO1lBQ3pGLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE9BQU87WUFDbEYsa0JBQWtCLEVBQUUsYUFBYSxDQUFDOztZQUV0QyxLQUF1QixJQUFBLG9CQUFBLGlCQUFBLGVBQWUsQ0FBQSxnREFBQSw2RUFBRTtnQkFBbkMsSUFBSSxVQUFVLDRCQUFBO2dCQUNmLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7b0JBQzFELE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUM5RSxZQUFZLEVBQUUsQ0FBQztpQkFDbEI7YUFDSjs7Ozs7Ozs7O1FBRUQsZ0JBQWdCO1FBQ2hCLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2hFLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3RCxXQUFXLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7WUFBRSxZQUFZLEVBQUUsQ0FBQztRQUU3RSwyQkFBMkI7UUFDM0IsSUFBSSxZQUFZLElBQUksQ0FBQztZQUFFLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksY0FBYyxJQUFJLENBQUM7WUFBRSxZQUFZLEVBQUUsQ0FBQztRQUN4QyxJQUFJLGtCQUFrQixJQUFJLENBQUM7WUFBRSxZQUFZLEVBQUUsQ0FBQztRQUU1QyxPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFDLFlBQVksRUFBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRixZQUFZLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6RCxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFeEQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCwrQ0FBdUI7Ozs7SUFBdkIsVUFBd0IsVUFBdUI7UUFFM0MsV0FBVztRQUNYLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQy9ELFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM1RCxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRTs7Z0JBQ3JELFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUMvRCxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDaEQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzs7Z0JBRTVDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVoQyxpQkFBaUI7WUFDakIsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRTs7b0JBQ2xELFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztnQkFDdEMsSUFBRyxRQUFRLElBQUksU0FBUyxFQUFFO29CQUN0QixVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDN0M7YUFDSjtTQUVKO0lBRUwsQ0FBQzs7Ozs7SUFFRCxxQ0FBYTs7OztJQUFiLFVBQWMsR0FBWTtRQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBQyxHQUFHLENBQUMsQ0FBQzs7WUFDL0IsV0FBVzs7WUFDWCxRQUFRLEdBQXVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDO1FBQ3ZGLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxXQUFXOztnQkFDcEIsSUFBSSxHQUFHLFdBQVcsQ0FBQyxZQUFZLEVBQUU7WUFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsRUFBQyxJQUFJLENBQUMsQ0FBQzs7Z0JBRXBELEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RELElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ3ZELFdBQVcsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpDLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsZ0NBQVE7Ozs7SUFBUixVQUFTLFFBQWU7O1lBQ2hCLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7O1lBQzFCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFMUIsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7SUFDSCwwQ0FBa0I7Ozs7Ozs7OztJQUFsQixVQUFtQixLQUFLLEVBQUUsS0FBSzs7WUFDdkIsYUFBYSxHQUFHLElBQUksR0FBRyxFQUFFOztZQUN6QixXQUFXLEdBQUcsYUFBYSxHQUFHLEVBQUU7O1lBQ2hDLFVBQVUsR0FBRyxXQUFXLEdBQUcsRUFBRTtRQUNqQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7O1lBQ2hDLFVBQVUsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUN6SCxVQUFVLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDekgsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQzs7WUFDOUIsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQzs7WUFDOUIsUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFOztZQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRDs7Ozs7Ozs7T0FRRzs7Ozs7Ozs7OztJQUNILHlDQUFpQjs7Ozs7Ozs7O0lBQWpCLFVBQWtCLEtBQUssRUFBRSxLQUFLO1FBQzFCLGlDQUFpQztRQUNqQyx3Q0FBd0M7UUFDeEMscUNBQXFDO1FBQ3JDLHdHQUF3RztRQUN4Ryx3R0FBd0c7UUFDeEcsc0NBQXNDO1FBQ3RDLHNDQUFzQztRQUN0Qyx3REFBd0Q7UUFDeEQsZ0RBQWdEO1FBRWhELGVBQWU7UUFDZixPQUFPLHdCQUF3QixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVsRCxDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRzs7Ozs7Ozs7O0lBQ0gsK0JBQU87Ozs7Ozs7O0lBQVAsVUFBUSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU07UUFDdkIsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtZQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM3QixHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDbkIsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBRTtvQkFDakMsTUFBTTtpQkFDVDthQUNKO1NBQ0o7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7O2dCQTVOSixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDOzs7Z0JBTlQsa0JBQWtCOzs7d0JBQXhDO0NBbU9DLEFBN05ELElBNk5DO1NBNU5ZLGFBQWE7Ozs7OztJQUVWLDJDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2ZpbGVDb2RlLCBQcm9maWxlQ29kZVNlcnZpY2UsIFNRTGl0ZVRhYmxlLCBTdHJpbmdVdGlscyB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb24gfSBmcm9tIFwiQGFsbGlhbnpTTkQvdWlcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IEN1c3RvbWVyRGV0YWlsIH0gZnJvbSBcIi4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJEZXRhaWxcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjoncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyVXRpbHMge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSkgeyB9XG5cbiAgICBzZXRDb2RlMk9wdGlvbihjb2RlQXJyYXk6IEFycmF5PFByb2ZpbGVDb2RlPikge1xuICAgICAgICBsZXQgb3B0aW9uczogQXJyYXk8U2VsZWN0T3B0aW9uPiA9IG5ldyBBcnJheSgpO1xuICAgICAgICBpZiAoY29kZUFycmF5ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgY29kZSBvZiBjb2RlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2gobmV3IFNlbGVjdE9wdGlvbihjb2RlLmdldENvZGUoKSwgY29kZS5kaXNwbGF5VGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG4gICAgXG4gICAgY291bnRDb21wbGV0ZW5lc3NCeVByb2ZpbGUoY3VzdG9tZXJEZXRhaWwgOiBDdXN0b21lckRldGFpbCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdjb3VudENvbXBsZXRlbmVzc0J5RGV0YWlsJyxjdXN0b21lckRldGFpbCk7XG5cbiAgICAgICAgLy9jb3VudCBDb21wbGV0ZW5lc3NcbiAgICAgICAgbGV0IGNvbXBsZXRlbmVzczogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IGNvdW50Q29sdW1uTmFtZSA9IFsnRmlyc3ROYW1lJywgJ0xhc3ROYW1lJywgJ09jY3VwYXRpb24nLCAnQ29tcGFueScsICdBZ2VSYW5nZScsICdHZW5kZXInLFxuICAgICAgICAgICAgJ0luY29tZScsICdTb3VyY2UnLCAnTWFycmlhZ2UnLCAnQ2hpbGRyZW4nLCAnRmFtaWxpYXJpdHknLCAnUmVjZW50U3RhdHVzJywgJ01BTlBBJyxcbiAgICAgICAgICAgICdDb250YWN0RnJlcXVhbmN5JywgJ1Bvc3NpYmlsaXR5J107XG5cbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJEZXRhaWwuZmlyc3ROYW1lKSkgY29tcGxldGVuZXNzKys7XG4gICAgICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyRGV0YWlsLmxhc3ROYW1lKSkgY29tcGxldGVuZXNzKys7XG4gICAgICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyRGV0YWlsLm9jY3VwYXRpb24pKSBjb21wbGV0ZW5lc3MrKztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJEZXRhaWwuY29tcGFueSkpIGNvbXBsZXRlbmVzcysrO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lckRldGFpbC5hZ2VSYW5nZSkpIGNvbXBsZXRlbmVzcysrO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lckRldGFpbC5nZW5kZXIpKSBjb21wbGV0ZW5lc3MrKztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJEZXRhaWwuaW5jb21lKSkgY29tcGxldGVuZXNzKys7XG4gICAgICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyRGV0YWlsLnNvdXJjZSkpIGNvbXBsZXRlbmVzcysrO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lckRldGFpbC5tYXJyaWFnZSkpIGNvbXBsZXRlbmVzcysrO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lckRldGFpbC5jaGlsZHJlbikpIGNvbXBsZXRlbmVzcysrO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lckRldGFpbC5mYW1pbGlhcml0eSkpIGNvbXBsZXRlbmVzcysrO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lckRldGFpbC5yZWNlbnRTdGF0dXMpKSBjb21wbGV0ZW5lc3MrKztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJEZXRhaWwubWFucGEpKSBjb21wbGV0ZW5lc3MrKztcbiAgICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJEZXRhaWwuY29udGFjdEZyZXF1YW5jeSkpIGNvbXBsZXRlbmVzcysrO1xuICAgICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lckRldGFpbC5wb3NzaWJpbGl0eSkpIGNvbXBsZXRlbmVzcysrO1xuXG4gICAgICBcblxuICAgICAgICAvL2NvdW50IGJpcnRoZGF5XG4gICAgICAgIGlmIChjdXN0b21lckRldGFpbC5iaXJ0aGRheSAhPSB1bmRlZmluZWQpIGNvbXBsZXRlbmVzcysrO1xuXG4gICAgICAgIC8vY291bnQgcGhvbmUvZW1haWwvYWRkcmVzc1xuICAgICAgICBpZiAoY3VzdG9tZXJEZXRhaWwudGVscy5sZW5ndGggIT0gMCkgY29tcGxldGVuZXNzKys7XG4gICAgICAgIGlmIChjdXN0b21lckRldGFpbC5lbWFpbHMubGVuZ3RoICE9IDApIGNvbXBsZXRlbmVzcysrO1xuICAgICAgICBpZiAoY3VzdG9tZXJEZXRhaWwuYWRkcmVzc2VzLmxlbmd0aCAhPSAwKSBjb21wbGV0ZW5lc3MrKztcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdvcmdpbmFsIGNvbXBsZXRlbmVzcycsY29tcGxldGVuZXNzLChjb3VudENvbHVtbk5hbWUubGVuZ3RoICsgNCkpO1xuXG4gICAgICAgIGNvbXBsZXRlbmVzcyA9IChjb21wbGV0ZW5lc3MgLyAoY291bnRDb2x1bW5OYW1lLmxlbmd0aCArIDQpKTtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdiZWZvcmUgcm91bmQgY29tcGxldGVuZXNzJywgY29tcGxldGVuZXNzKTtcbiAgICAgICAgY29tcGxldGVuZXNzID0gTWF0aC5yb3VuZChjb21wbGV0ZW5lc3MgKiAxMDApIC8gMTAwO1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdhZnRlciByb3VuZCBjb21wbGV0ZW5lc3MnLCBjb21wbGV0ZW5lc3MpO1xuXG4gICAgICAgIHJldHVybiBjb21wbGV0ZW5lc3M7XG4gICAgfVxuXG4gICAgY291bnRDb21wbGV0ZW5lc3MoY3VzdG9tZXJPYmogOiBTUUxpdGVUYWJsZSx0ZWxBcnJheVNpemUgOiBudW1iZXIsZW1haWxBcnJheVNpemUgOiBudW1iZXIsYWRkcmVzc0FkZHJlc3NTaXplIDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2NvdW50Q29tcGxldGVuZXNzJyxjdXN0b21lck9iaix0ZWxBcnJheVNpemUsZW1haWxBcnJheVNpemUsYWRkcmVzc0FkZHJlc3NTaXplKTtcbiAgICAgICAgXG4gICAgICAgIC8vY291bnQgQ29tcGxldGVuZXNzXG4gICAgICAgIGxldCBjb21wbGV0ZW5lc3M6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBjb3VudENvbHVtbk5hbWUgPSBbJ0ZpcnN0TmFtZScsICdMYXN0TmFtZScsICdPY2N1cGF0aW9uJywgJ0NvbXBhbnknLCAnQWdlUmFuZ2UnLCAnR2VuZGVyJyxcbiAgICAgICAgICAgICdJbmNvbWUnLCAnU291cmNlJywgJ01hcnJpYWdlJywgJ0NoaWxkcmVuJywgJ0ZhbWlsaWFyaXR5JywgJ1JlY2VudFN0YXR1cycsICdNQU5QQScsXG4gICAgICAgICAgICAnQ29udGFjdEZyZXF1YW5jeScsICdQb3NzaWJpbGl0eSddO1xuXG4gICAgICAgIGZvciAobGV0IGNvbHVtbk5hbWUgb2YgY291bnRDb2x1bW5OYW1lKSB7XG4gICAgICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lck9iai5nZXRWYWx1ZShjb2x1bW5OYW1lKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdoYXNEYXRhJyxjb2x1bW5OYW1lICsgJz0+JyArIGN1c3RvbWVyT2JqLmdldFZhbHVlKGNvbHVtbk5hbWUpKTtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZW5lc3MrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vY291bnQgYmlydGhkYXlcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0JpcnRoZGF5WWVhcicpKSAmJlxuICAgICAgICBTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyT2JqLmdldFZhbHVlKCdCaXJ0aGRheU1vbnRoJykpICYmXG4gICAgICAgIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0JpcnRoZGF5RGF0ZScpKSkgY29tcGxldGVuZXNzKys7XG5cbiAgICAgICAgLy9jb3VudCBwaG9uZS9lbWFpbC9hZGRyZXNzXG4gICAgICAgIGlmICh0ZWxBcnJheVNpemUgIT0gMCkgY29tcGxldGVuZXNzKys7XG4gICAgICAgIGlmIChlbWFpbEFycmF5U2l6ZSAhPSAwKSBjb21wbGV0ZW5lc3MrKztcbiAgICAgICAgaWYgKGFkZHJlc3NBZGRyZXNzU2l6ZSAhPSAwKSBjb21wbGV0ZW5lc3MrKztcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdvcmdpbmFsIGNvbXBsZXRlbmVzcycsY29tcGxldGVuZXNzLChjb3VudENvbHVtbk5hbWUubGVuZ3RoICsgNCkpO1xuXG4gICAgICAgIGNvbXBsZXRlbmVzcyA9IChjb21wbGV0ZW5lc3MgLyAoY291bnRDb2x1bW5OYW1lLmxlbmd0aCArIDQpKTtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdiZWZvcmUgcm91bmQgY29tcGxldGVuZXNzJywgY29tcGxldGVuZXNzKTtcbiAgICAgICAgY29tcGxldGVuZXNzID0gTWF0aC5yb3VuZChjb21wbGV0ZW5lc3MgKiAxMDApIC8gMTAwO1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdhZnRlciByb3VuZCBjb21wbGV0ZW5lc3MnLCBjb21wbGV0ZW5lc3MpO1xuXG4gICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKCdDb21wbGV0ZW5lc3MnLCBjb21wbGV0ZW5lc3MpO1xuICAgIH1cblxuICAgIHNldEN1c3RvbWVyRGVmYXVsdFZhbHVlKGRhdGFPYmplY3Q6IFNRTGl0ZVRhYmxlKSB7XG4gICAgICAgIFxuICAgICAgICAvL2NvdW50IGFnZVxuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShkYXRhT2JqZWN0LmdldFZhbHVlKCdCaXJ0aGRheVllYXInKSkgJiYgXG4gICAgICAgIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoZGF0YU9iamVjdC5nZXRWYWx1ZSgnQmlydGhkYXlNb250aCcpKSAmJiBcbiAgICAgICAgU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShkYXRhT2JqZWN0LmdldFZhbHVlKCdCaXJ0aGRheURhdGUnKSkpIHtcbiAgICAgICAgICAgIGxldCBiaXJ0aGRheSA9IG5ldyBEYXRlKE51bWJlcihkYXRhT2JqZWN0LmdldFZhbHVlKCdCaXJ0aGRheVllYXInKSksXG4gICAgICAgICAgICAgICAgTnVtYmVyKGRhdGFPYmplY3QuZ2V0VmFsdWUoJ0JpcnRoZGF5TW9udGgnKSAtIDEpLFxuICAgICAgICAgICAgICAgIE51bWJlcihkYXRhT2JqZWN0LmdldFZhbHVlKCdCaXJ0aGRheURhdGUnKSkpO1xuXG4gICAgICAgICAgICBsZXQgYWdlID0gdGhpcy5jb3VudEFnZShiaXJ0aGRheSk7XG4gICAgICAgICAgICBkYXRhT2JqZWN0LnNldFZhbHVlKCdhZ2UnLCBhZ2UpO1xuXG4gICAgICAgICAgICAvL2NoZWNrIGFnZSByYW5nZVxuICAgICAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoZGF0YU9iamVjdC5nZXRWYWx1ZSgnQWdlUmFuZ2UnKSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWdlUmFuZ2UgPSB0aGlzLmNvdW50QWdlUmFuZ2UoYWdlKTtcbiAgICAgICAgICAgICAgICBpZihhZ2VSYW5nZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YU9iamVjdC5zZXRWYWx1ZSgnQWdlUmFuZ2UnLCBhZ2VSYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvdW50QWdlUmFuZ2UoYWdlIDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2NvdW50QWdlUmFuZ2UnLGFnZSk7XG4gICAgICAgIGxldCByYW5nZVJlc3VsdDtcbiAgICAgICAgbGV0IGFnZVJhbmdlOiBBcnJheTxQcm9maWxlQ29kZT4gPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0N1c3RvbWVyX0FnZScpO1xuICAgICAgICBhZ2VSYW5nZS5mb3JFYWNoKHByb2ZpbGVDb2RlID0+IHtcbiAgICAgICAgICAgIGxldCBhcmdzID0gcHJvZmlsZUNvZGUuZ2V0QXJndW1lbnRzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci11dGlscyBjb3VudEFnZVJhbmdlIGFyZ3MnLGFyZ3MpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShhcmdzKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXV0aWxzIGNvdW50QWdlUmFuZ2Ugb2JqJyxvYmopO1xuICAgICAgICAgICAgaWYgKGFnZSA+PSBvYmouc3RhcnQgJiYgYWdlIDw9IG9iai5lbmQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdtYXRjaCBhZ2UgcmFuZ2UnLHByb2ZpbGVDb2RlLmdldENvZGUoKSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VSZXN1bHQgPSBwcm9maWxlQ29kZS5nZXRDb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ3JhbmdlUmVzdWx0JyxyYW5nZVJlc3VsdCk7XG5cbiAgICAgICAgcmV0dXJuIHJhbmdlUmVzdWx0O1xuICAgIH1cblxuICAgIGNvdW50QWdlKGJpcnRoZGF5IDogRGF0ZSkgOiBudW1iZXJ7XG4gICAgICAgIGxldCBkYXRlcyA9IHRoaXMuY2FsQ0VJbnRlcnZhbERheXMoYmlydGhkYXksIG5ldyBEYXRlKCkpO1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdkYXRlcycsIGRhdGVzKTtcbiAgICAgICAgbGV0IGFnZSA9IE1hdGguZmxvb3IoZGF0ZXMgLyAzNjUpO1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdhZ2UnLCBhZ2UpO1xuXG4gICAgICAgIHJldHVybiBhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogamF2YXNjcmlwdOWCs+WFpei1t+Wni+aXpeiIh+e1kOadn1xuICAgICAqIOaXpeacn+agvOW8j+eCuuawkeWci+W5tOaciOaXpShFWC4xMDYwODAyKVxuICAgICAqIOWCs+WFpSAxMDYwNzAyLDEwNjA4MDIg5pyD5Zue5YKzMzHlpKlcbiAgICAgKiDlgrPlhaUgMTA2MDkwMSwxMDYxMDAxIOacg+WbnuWCszMw5aSpXG4gICAgICogQHBhcmFtICBzRGF0ZSBcbiAgICAgKiBAcGFyYW0gIGVEYXRlIFxuICAgICAqIEByZXR1cm4g5aSp5pW4XG4gICAgICovXG4gICAgY2FsUm9jSW50ZXJ2YWxEYXlzKHNEYXRlLCBlRGF0ZSkge1xuICAgICAgICB2YXIgbXNlY1Blck1pbnV0ZSA9IDEwMDAgKiA2MDtcbiAgICAgICAgdmFyIG1zZWNQZXJIb3VyID0gbXNlY1Blck1pbnV0ZSAqIDYwO1xuICAgICAgICB2YXIgbXNlY1BlckRheSA9IG1zZWNQZXJIb3VyICogMjQ7XG4gICAgICAgIHNEYXRlID0gdGhpcy5sZWZ0UGFkKHNEYXRlLCA3LCAnMCcpO1xuICAgICAgICBlRGF0ZSA9IHRoaXMubGVmdFBhZChlRGF0ZSwgNywgJzAnKTtcbiAgICAgICAgdmFyIGJlZ0RhdGVTdHIgPSBcIlwiICsgc0RhdGUuc3Vic3RyaW5nKDMsIDUpICsgXCIvXCIgKyBzRGF0ZS5zdWJzdHJpbmcoNSkgKyBcIi9cIiArIChOdW1iZXIoc0RhdGUuc3Vic3RyaW5nKDAsIDMpKSArIE51bWJlcigxOTExKSk7XG4gICAgICAgIHZhciBlbmREYXRlU3RyID0gXCJcIiArIGVEYXRlLnN1YnN0cmluZygzLCA1KSArIFwiL1wiICsgZURhdGUuc3Vic3RyaW5nKDUpICsgXCIvXCIgKyAoTnVtYmVyKGVEYXRlLnN1YnN0cmluZygwLCAzKSkgKyBOdW1iZXIoMTkxMSkpO1xuICAgICAgICB2YXIgYmVnRGF0ZSA9IG5ldyBEYXRlKGJlZ0RhdGVTdHIpO1xuICAgICAgICB2YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKGVuZERhdGVTdHIpO1xuICAgICAgICB2YXIgaW50ZXJ2YWwgPSBlbmREYXRlLmdldFRpbWUoKSAtIGJlZ0RhdGUuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IoaW50ZXJ2YWwgLyBtc2VjUGVyRGF5KTtcbiAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGphdmFzY3JpcHTlgrPlhaXotbflp4vml6XoiIfntZDmnZ9cbiAgICAgKiDml6XmnJ/moLzlvI/ngrropb/lhYPlubTmnIjml6UoRVguMjAxNzA4MDEpXG4gICAgICog5YKz5YWlIDIwMTcwNzAyLDIwMTcwODAyIOacg+WbnuWCszMx5aSpXG4gICAgICog5YKz5YWlIDIwMTcwOTAxLDIwMTcxMDAxIOacg+WbnuWCszMw5aSpXG4gICAgICogQHBhcmFtICBzRGF0ZSBcbiAgICAgKiBAcGFyYW0gIGVEYXRlIFxuICAgICAqIEByZXR1cm4g5aSp5pW4XG4gICAgICovXG4gICAgY2FsQ0VJbnRlcnZhbERheXMoc0RhdGUsIGVEYXRlKSB7XG4gICAgICAgIC8vIHZhciBtc2VjUGVyTWludXRlID0gMTAwMCAqIDYwO1xuICAgICAgICAvLyB2YXIgbXNlY1BlckhvdXIgPSBtc2VjUGVyTWludXRlICogNjA7XG4gICAgICAgIC8vIHZhciBtc2VjUGVyRGF5ID0gbXNlY1BlckhvdXIgKiAyNDtcbiAgICAgICAgLy8gdmFyIGJlZ0RhdGVTdHIgPSBcIlwiICsgc0RhdGUuc3Vic3RyaW5nKDQsIDYpICsgXCIvXCIgKyBzRGF0ZS5zdWJzdHJpbmcoNikgKyBcIi9cIiArIHNEYXRlLnN1YnN0cmluZygwLCA0KTtcbiAgICAgICAgLy8gdmFyIGVuZERhdGVTdHIgPSBcIlwiICsgZURhdGUuc3Vic3RyaW5nKDQsIDYpICsgXCIvXCIgKyBlRGF0ZS5zdWJzdHJpbmcoNikgKyBcIi9cIiArIGVEYXRlLnN1YnN0cmluZygwLCA0KTtcbiAgICAgICAgLy8gdmFyIGJlZ0RhdGUgPSBuZXcgRGF0ZShiZWdEYXRlU3RyKTtcbiAgICAgICAgLy8gdmFyIGVuZERhdGUgPSBuZXcgRGF0ZShlbmREYXRlU3RyKTtcbiAgICAgICAgLy8gdmFyIGludGVydmFsID0gZW5kRGF0ZS5nZXRUaW1lKCkgLSBiZWdEYXRlLmdldFRpbWUoKTtcbiAgICAgICAgLy8gdmFyIGRheXMgPSBNYXRoLmZsb29yKGludGVydmFsIC8gbXNlY1BlckRheSk7XG5cbiAgICAgICAgLy8gcmV0dXJuIGRheXM7XG4gICAgICAgIHJldHVybiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZURhdGUsIHNEYXRlKTtcblxuICAgIH1cbiAgICAvKipcbiAgICAgKiDlkJHlt6boo5zpm7ZcbiAgICAgKiBFeDpsZWZ0UGFkKDMsMywnMCcpLT4wMDNcbiAgICAgKiBAcGFyYW0gIHZhbCAgICBb5Y6f5YC8XVxuICAgICAqIEBwYXJhbSAgcGFkTGVuIFvoo5zotrPplbfluqZdXG4gICAgICogQHBhcmFtICBwYWRWYWwgW+ijnOi2s+WAvF1cbiAgICAgKiBAcmV0dXJuICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgbGVmdFBhZCh2YWwsIHBhZExlbiwgcGFkVmFsKSB7XG4gICAgICAgIGlmICh2YWwudG9TdHJpbmcoKS5sZW5ndGggPCBwYWRMZW4pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcGFkTGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBwYWRWYWwgKyB2YWw7XG4gICAgICAgICAgICAgICAgaWYgKHZhbC50b1N0cmluZygpLmxlbmd0aCA+PSBwYWRMZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxufSJdfQ==