/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class StringUtils {
    constructor() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isNotEmpty(val) {
        return val !== '' && val !== null && val !== undefined && val !== 'null' && val !== 'NULL';
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static trim(val) {
        if (this.isEmpty(val))
            return '';
        else
            return val.trim();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isEmpty(val) {
        if (this.isNotEmpty(val))
            return false;
        else
            return true;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static convertEmptyVal(val) {
        if (this.isNotEmpty(val))
            return val;
        else
            return '';
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static byteLength(val) {
        /** @type {?} */
        let byteLen = 0;
        if (val && val.length) {
            for (let i = 0; i < val.length; i++) {
                if ((val.charCodeAt(i) & 0xff00) != 0) {
                    byteLen++;
                }
                byteLen++;
            }
        }
        return byteLen;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isHasEnglish(val) {
        return !!val && val.match(this.matchEnglishRegExp) !== null;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isAllEnglish(val) {
        /** @type {?} */
        let result = val && val.match(this.matchEnglishRegExp);
        return !!result && result[0].length === val.length;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isHasChinese(val) {
        return !!val && val.match(this.matchChineseRegExp) !== null;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isAllChinese(val) {
        /** @type {?} */
        let result = val && val.match(this.matchChineseRegExp);
        return !!result && result[0].length === val.length;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static getEnglishCharCount(val) {
        /** @type {?} */
        let result = val && val.match(this.matchEnglishRegExp);
        return result ? result[0].length : 0;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static getChineseCharCount(val) {
        /** @type {?} */
        let result = val && val.match(this.matchChineseRegExp);
        return result ? result[0].length : 0;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static getNumberCharCount(val) {
        /** @type {?} */
        let result = val && val.match(this.matchNumberRegExp);
        return result ? result[0].length : 0;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isHasThai(val) {
        if (!val) {
            val = '';
        }
        /** @type {?} */
        let count = 0;
        val.split('').forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.charCodeAt(0) > 3584 && item.charCodeAt(0) < 3711) {
                count++;
            }
        }));
        return count > 0;
    }
}
StringUtils.matchEnglishRegExp = "[a-zA-Z]+";
StringUtils.matchChineseRegExp = "[\\u4e00-\\u9fa5]+|['ㄧ']+";
StringUtils.matchNumberRegExp = "[0-9]+";
if (false) {
    /**
     * @type {?}
     * @private
     */
    StringUtils.matchEnglishRegExp;
    /**
     * @type {?}
     * @private
     */
    StringUtils.matchChineseRegExp;
    /**
     * @type {?}
     * @private
     */
    StringUtils.matchNumberRegExp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nVXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL1N0cmluZ1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNO0lBSUo7SUFDQSxDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRztRQUMxQixPQUFPLEdBQUcsS0FBSyxFQUFFLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxNQUFNLElBQUksR0FBRyxLQUFLLE1BQU0sQ0FBQztJQUM3RixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztRQUNwQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7O1lBQzVCLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDdEIsT0FBTyxLQUFLLENBQUM7O1lBRWIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUc7UUFDL0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUN0QixPQUFPLEdBQUcsQ0FBQzs7WUFFWCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHOztZQUN0QixPQUFPLEdBQUcsQ0FBQztRQUNmLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JB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QUFDOztBQXhGdUIsOEJBQWtCLEdBQUcsV0FBVyxDQUFDO0FBQ2pDLDhCQUFrQixHQUFHLDJCQUEyQixDQUFDO0FBQ2pELDZCQUFpQixHQUFHLFFBQVEsQ0FBQzs7Ozs7O0lBRnJELCtCQUF5RDs7Ozs7SUFDekQsK0JBQXlFOzs7OztJQUN6RSw4QkFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3RyaW5nVXRpbHMge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBtYXRjaEVuZ2xpc2hSZWdFeHAgPSBcIlthLXpBLVpdK1wiO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBtYXRjaENoaW5lc2VSZWdFeHAgPSBcIltcXFxcdTRlMDAtXFxcXHU5ZmE1XSt8WyfjhKcnXStcIjtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgbWF0Y2hOdW1iZXJSZWdFeHAgPSBcIlswLTldK1wiO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNOb3RFbXB0eSh2YWwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsICE9PSAnJyAmJiB2YWwgIT09IG51bGwgJiYgdmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSAnbnVsbCcgJiYgdmFsICE9PSAnTlVMTCc7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHRyaW0odmFsKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KHZhbCkpIHJldHVybiAnJztcbiAgICBlbHNlIHJldHVybiB2YWwudHJpbSgpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc0VtcHR5KHZhbCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmlzTm90RW1wdHkodmFsKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY29udmVydEVtcHR5VmFsKHZhbCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuaXNOb3RFbXB0eSh2YWwpKVxuICAgICAgcmV0dXJuIHZhbDtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGJ5dGVMZW5ndGgodmFsKTogbnVtYmVyIHtcbiAgICBsZXQgYnl0ZUxlbiA9IDA7XG4gICAgaWYgKHZhbCAmJiB2YWwubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoKHZhbC5jaGFyQ29kZUF0KGkpICYgMHhmZjAwKSAhPSAwKSB7XG4gICAgICAgICAgYnl0ZUxlbisrO1xuICAgICAgICB9XG4gICAgICAgIGJ5dGVMZW4rKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVMZW47XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzSGFzRW5nbGlzaCh2YWw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXZhbCAmJiB2YWwubWF0Y2godGhpcy5tYXRjaEVuZ2xpc2hSZWdFeHApICE9PSBudWxsO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc0FsbEVuZ2xpc2godmFsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsICYmIHZhbC5tYXRjaCh0aGlzLm1hdGNoRW5nbGlzaFJlZ0V4cCk7XG4gICAgcmV0dXJuICEhcmVzdWx0ICYmIHJlc3VsdFswXS5sZW5ndGggPT09IHZhbC5sZW5ndGg7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzSGFzQ2hpbmVzZSh2YWw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXZhbCAmJiB2YWwubWF0Y2godGhpcy5tYXRjaENoaW5lc2VSZWdFeHApICE9PSBudWxsO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc0FsbENoaW5lc2UodmFsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsICYmIHZhbC5tYXRjaCh0aGlzLm1hdGNoQ2hpbmVzZVJlZ0V4cCk7XG4gICAgcmV0dXJuICEhcmVzdWx0ICYmIHJlc3VsdFswXS5sZW5ndGggPT09IHZhbC5sZW5ndGg7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEVuZ2xpc2hDaGFyQ291bnQodmFsOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCByZXN1bHQgPSB2YWwgJiYgdmFsLm1hdGNoKHRoaXMubWF0Y2hFbmdsaXNoUmVnRXhwKTtcbiAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0WzBdLmxlbmd0aCA6IDA7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldENoaW5lc2VDaGFyQ291bnQodmFsOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCByZXN1bHQgPSB2YWwgJiYgdmFsLm1hdGNoKHRoaXMubWF0Y2hDaGluZXNlUmVnRXhwKTtcbiAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0WzBdLmxlbmd0aCA6IDA7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldE51bWJlckNoYXJDb3VudCh2YWw6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IHJlc3VsdCA9IHZhbCAmJiB2YWwubWF0Y2godGhpcy5tYXRjaE51bWJlclJlZ0V4cCk7XG4gICAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdFswXS5sZW5ndGggOiAwO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc0hhc1RoYWkodmFsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXZhbCkge1xuICAgICAgdmFsID0gJyc7XG4gICAgfVxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgdmFsLnNwbGl0KCcnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uY2hhckNvZGVBdCgwKSA+IDM1ODQgJiYgaXRlbS5jaGFyQ29kZUF0KDApIDwgMzcxMSkge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvdW50ID4gMDtcblxuICB9XG5cblxufVxuIl19