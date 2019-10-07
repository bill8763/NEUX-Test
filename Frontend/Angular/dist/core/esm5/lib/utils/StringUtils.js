/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    StringUtils.isNotEmpty = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return val !== '' && val !== null && val !== undefined && val !== 'null' && val !== 'NULL';
    };
    /**
     * @param {?} val
     * @return {?}
     */
    StringUtils.trim = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (this.isEmpty(val))
            return '';
        else
            return val.trim();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    StringUtils.isEmpty = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (this.isNotEmpty(val))
            return false;
        else
            return true;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    StringUtils.convertEmptyVal = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (this.isNotEmpty(val))
            return val;
        else
            return '';
    };
    /**
     * @param {?} val
     * @return {?}
     */
    StringUtils.byteLength = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var byteLen = 0;
        if (val && val.length) {
            for (var i = 0; i < val.length; i++) {
                if ((val.charCodeAt(i) & 0xff00) != 0) {
                    byteLen++;
                }
                byteLen++;
            }
        }
        return byteLen;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    StringUtils.isHasEnglish = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return !!val && val.match(this.matchEnglishRegExp) !== null;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    StringUtils.isAllEnglish = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var result = val && val.match(this.matchEnglishRegExp);
        return !!result && result[0].length === val.length;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    StringUtils.isHasChinese = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return !!val && val.match(this.matchChineseRegExp) !== null;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    StringUtils.isAllChinese = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var result = val && val.match(this.matchChineseRegExp);
        return !!result && result[0].length === val.length;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    StringUtils.getEnglishCharCount = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var result = val && val.match(this.matchEnglishRegExp);
        return result ? result[0].length : 0;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    StringUtils.getChineseCharCount = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var result = val && val.match(this.matchChineseRegExp);
        return result ? result[0].length : 0;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    StringUtils.getNumberCharCount = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var result = val && val.match(this.matchNumberRegExp);
        return result ? result[0].length : 0;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    StringUtils.isHasThai = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (!val) {
            val = '';
        }
        /** @type {?} */
        var count = 0;
        val.split('').forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.charCodeAt(0) > 3584 && item.charCodeAt(0) < 3711) {
                count++;
            }
        }));
        return count > 0;
    };
    StringUtils.matchEnglishRegExp = "[a-zA-Z]+";
    StringUtils.matchChineseRegExp = "[\\u4e00-\\u9fa5]+|['ㄧ']+";
    StringUtils.matchNumberRegExp = "[0-9]+";
    return StringUtils;
}());
export { StringUtils };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nVXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL1N0cmluZ1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUlFO0lBQ0EsQ0FBQzs7Ozs7SUFFYSxzQkFBVTs7OztJQUF4QixVQUF5QixHQUFHO1FBQzFCLE9BQU8sR0FBRyxLQUFLLEVBQUUsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssTUFBTSxDQUFDO0lBQzdGLENBQUM7Ozs7O0lBRWEsZ0JBQUk7Ozs7SUFBbEIsVUFBbUIsR0FBRztRQUNwQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7O1lBQzVCLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRWEsbUJBQU87Ozs7SUFBckIsVUFBc0IsR0FBRztRQUN2QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3RCLE9BQU8sS0FBSyxDQUFDOztZQUViLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRWEsMkJBQWU7Ozs7SUFBN0IsVUFBOEIsR0FBRztRQUMvQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxDQUFDOztZQUVYLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFYSxzQkFBVTs7OztJQUF4QixVQUF5QixHQUFHOztZQUN0QixPQUFPLEdBQUcsQ0FBQztRQUNmLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JB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QUFDO0lBeEZ1Qiw4QkFBa0IsR0FBRyxXQUFXLENBQUM7SUFDakMsOEJBQWtCLEdBQUcsMkJBQTJCLENBQUM7SUFDakQsNkJBQWlCLEdBQUcsUUFBUSxDQUFDO0lBeUZ2RCxrQkFBQztDQUFBLEFBNUZELElBNEZDO1NBNUZZLFdBQVc7Ozs7OztJQUN0QiwrQkFBeUQ7Ozs7O0lBQ3pELCtCQUF5RTs7Ozs7SUFDekUsOEJBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0cmluZ1V0aWxzIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgbWF0Y2hFbmdsaXNoUmVnRXhwID0gXCJbYS16QS1aXStcIjtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgbWF0Y2hDaGluZXNlUmVnRXhwID0gXCJbXFxcXHU0ZTAwLVxcXFx1OWZhNV0rfFsn44SnJ10rXCI7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IG1hdGNoTnVtYmVyUmVnRXhwID0gXCJbMC05XStcIjtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzTm90RW1wdHkodmFsKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbCAhPT0gJycgJiYgdmFsICE9PSBudWxsICYmIHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gJ251bGwnICYmIHZhbCAhPT0gJ05VTEwnO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB0cmltKHZhbCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSh2YWwpKSByZXR1cm4gJyc7XG4gICAgZWxzZSByZXR1cm4gdmFsLnRyaW0oKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNFbXB0eSh2YWwpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc05vdEVtcHR5KHZhbCkpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNvbnZlcnRFbXB0eVZhbCh2YWwpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmlzTm90RW1wdHkodmFsKSlcbiAgICAgIHJldHVybiB2YWw7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBieXRlTGVuZ3RoKHZhbCk6IG51bWJlciB7XG4gICAgbGV0IGJ5dGVMZW4gPSAwO1xuICAgIGlmICh2YWwgJiYgdmFsLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCh2YWwuY2hhckNvZGVBdChpKSAmIDB4ZmYwMCkgIT0gMCkge1xuICAgICAgICAgIGJ5dGVMZW4rKztcbiAgICAgICAgfVxuICAgICAgICBieXRlTGVuKys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBieXRlTGVuO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc0hhc0VuZ2xpc2godmFsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF2YWwgJiYgdmFsLm1hdGNoKHRoaXMubWF0Y2hFbmdsaXNoUmVnRXhwKSAhPT0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNBbGxFbmdsaXNoKHZhbDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IHJlc3VsdCA9IHZhbCAmJiB2YWwubWF0Y2godGhpcy5tYXRjaEVuZ2xpc2hSZWdFeHApO1xuICAgIHJldHVybiAhIXJlc3VsdCAmJiByZXN1bHRbMF0ubGVuZ3RoID09PSB2YWwubGVuZ3RoO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc0hhc0NoaW5lc2UodmFsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF2YWwgJiYgdmFsLm1hdGNoKHRoaXMubWF0Y2hDaGluZXNlUmVnRXhwKSAhPT0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNBbGxDaGluZXNlKHZhbDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IHJlc3VsdCA9IHZhbCAmJiB2YWwubWF0Y2godGhpcy5tYXRjaENoaW5lc2VSZWdFeHApO1xuICAgIHJldHVybiAhIXJlc3VsdCAmJiByZXN1bHRbMF0ubGVuZ3RoID09PSB2YWwubGVuZ3RoO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRFbmdsaXNoQ2hhckNvdW50KHZhbDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsICYmIHZhbC5tYXRjaCh0aGlzLm1hdGNoRW5nbGlzaFJlZ0V4cCk7XG4gICAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdFswXS5sZW5ndGggOiAwO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRDaGluZXNlQ2hhckNvdW50KHZhbDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsICYmIHZhbC5tYXRjaCh0aGlzLm1hdGNoQ2hpbmVzZVJlZ0V4cCk7XG4gICAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdFswXS5sZW5ndGggOiAwO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXROdW1iZXJDaGFyQ291bnQodmFsOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCByZXN1bHQgPSB2YWwgJiYgdmFsLm1hdGNoKHRoaXMubWF0Y2hOdW1iZXJSZWdFeHApO1xuICAgIHJldHVybiByZXN1bHQgPyByZXN1bHRbMF0ubGVuZ3RoIDogMDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNIYXNUaGFpKHZhbDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF2YWwpIHtcbiAgICAgIHZhbCA9ICcnO1xuICAgIH1cbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHZhbC5zcGxpdCgnJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmNoYXJDb2RlQXQoMCkgPiAzNTg0ICYmIGl0ZW0uY2hhckNvZGVBdCgwKSA8IDM3MTEpIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb3VudCA+IDA7XG5cbiAgfVxuXG5cbn1cbiJdfQ==