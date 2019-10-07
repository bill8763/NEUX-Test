/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StringUtils } from "./StringUtils";
var NumberUtils = /** @class */ (function () {
    function NumberUtils() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    NumberUtils.isNumber = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (StringUtils.isNotEmpty(val)) {
            return !isNaN(Number(val));
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    NumberUtils.isDecimal = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var result = false;
        if (this.isNumber(val)) {
            if (val.toString().indexOf('.') != -1) {
                result = true;
            }
        }
        return result;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    NumberUtils.isPositive = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var result = false;
        console.log('this.isNumber(val)', this.isNumber(val));
        if (this.isNumber(val)) {
            if (Number(val) > 0 || Number(val) == 0) {
                console.log('val', val);
                result = true;
            }
        }
        return result;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    NumberUtils.isPositiveInt = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var result = false;
        if (!this.isDecimal(val)) {
            if (Number(val) >= 0) {
                result = true;
            }
        }
        return result;
    };
    /**
     * @param {?} n
     * @param {?} toFix
     * @return {?}
     */
    NumberUtils.numberToFix = /**
     * @param {?} n
     * @param {?} toFix
     * @return {?}
     */
    function (n, toFix) {
        /** @type {?} */
        var fix10 = Math.pow(10, toFix);
        return Math.round(this.strip(n) * fix10) / fix10;
    };
    /**
     * @param {?} num
     * @param {?=} precision
     * @return {?}
     */
    NumberUtils.strip = /**
     * @param {?} num
     * @param {?=} precision
     * @return {?}
     */
    function (num, precision) {
        if (precision === void 0) { precision = 12; }
        return Number(num.toPrecision(precision));
    };
    return NumberUtils;
}());
export { NumberUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVyVXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL051bWJlclV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVDO0lBQ0k7SUFDQSxDQUFDOzs7OztJQUVhLG9CQUFROzs7O0lBQXRCLFVBQXVCLEdBQUc7UUFDdEIsSUFBRyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFDO1lBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUI7YUFBSTtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQzs7Ozs7SUFFYSxxQkFBUzs7OztJQUF2QixVQUF3QixHQUFHOztZQUNuQixNQUFNLEdBQUcsS0FBSztRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2pCO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7OztJQUVhLHNCQUFVOzs7O0lBQXhCLFVBQXlCLEdBQUc7O1lBQ3BCLE1BQU0sR0FBRyxLQUFLO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDakI7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRWEseUJBQWE7Ozs7SUFBM0IsVUFBNEIsR0FBRzs7WUFDdkIsTUFBTSxHQUFHLEtBQUs7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQixNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2pCO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFFTSx1QkFBVzs7Ozs7SUFBbEIsVUFBbUIsQ0FBUyxFQUFFLEtBQWE7O1lBQ25DLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVNLGlCQUFLOzs7OztJQUFaLFVBQWEsR0FBRyxFQUFFLFNBQWM7UUFBZCwwQkFBQSxFQUFBLGNBQWM7UUFDNUIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUMsQUFyREQsSUFxREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL1N0cmluZ1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJVdGlscyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc051bWJlcih2YWwpIHtcbiAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh2YWwpKXtcbiAgICAgICAgICAgIHJldHVybiAhaXNOYU4oTnVtYmVyKHZhbCkpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNEZWNpbWFsKHZhbCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKHZhbCkpIHtcbiAgICAgICAgICAgIGlmICh2YWwudG9TdHJpbmcoKS5pbmRleE9mKCcuJykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc1Bvc2l0aXZlKHZhbCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmlzTnVtYmVyKHZhbCknLCB0aGlzLmlzTnVtYmVyKHZhbCkpO1xuICAgICAgICBpZiAodGhpcy5pc051bWJlcih2YWwpKSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyKHZhbCkgPiAwIHx8IE51bWJlcih2YWwpID09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsJywgdmFsKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc1Bvc2l0aXZlSW50KHZhbCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5pc0RlY2ltYWwodmFsKSkge1xuICAgICAgICAgICAgaWYgKE51bWJlcih2YWwpID49IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgc3RhdGljIG51bWJlclRvRml4KG46IG51bWJlciwgdG9GaXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBmaXgxMCA9IE1hdGgucG93KDEwLCB0b0ZpeCk7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuc3RyaXAobikgKiBmaXgxMCkgLyBmaXgxMDtcbiAgICB9XG5cbiAgICBzdGF0aWMgc3RyaXAobnVtLCBwcmVjaXNpb24gPSAxMikge1xuICAgICAgICByZXR1cm4gTnVtYmVyKG51bS50b1ByZWNpc2lvbihwcmVjaXNpb24pKTtcbiAgICB9XG5cbn0iXX0=