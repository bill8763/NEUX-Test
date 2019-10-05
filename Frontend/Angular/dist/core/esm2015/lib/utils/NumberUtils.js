/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StringUtils } from "./StringUtils";
export class NumberUtils {
    constructor() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isNumber(val) {
        if (StringUtils.isNotEmpty(val)) {
            return !isNaN(Number(val));
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isDecimal(val) {
        /** @type {?} */
        let result = false;
        if (this.isNumber(val)) {
            if (val.toString().indexOf('.') != -1) {
                result = true;
            }
        }
        return result;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isPositive(val) {
        /** @type {?} */
        let result = false;
        console.log('this.isNumber(val)', this.isNumber(val));
        if (this.isNumber(val)) {
            if (Number(val) > 0 || Number(val) == 0) {
                console.log('val', val);
                result = true;
            }
        }
        return result;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isPositiveInt(val) {
        /** @type {?} */
        let result = false;
        if (!this.isDecimal(val)) {
            if (Number(val) >= 0) {
                result = true;
            }
        }
        return result;
    }
    /**
     * @param {?} n
     * @param {?} toFix
     * @return {?}
     */
    static numberToFix(n, toFix) {
        /** @type {?} */
        let fix10 = Math.pow(10, toFix);
        return Math.round(this.strip(n) * fix10) / fix10;
    }
    /**
     * @param {?} num
     * @param {?=} precision
     * @return {?}
     */
    static strip(num, precision = 12) {
        return Number(num.toPrecision(precision));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVyVXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL051bWJlclV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVDLE1BQU07SUFDRjtJQUNBLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHO1FBQ3RCLElBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBQztZQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlCO2FBQUk7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHOztZQUNuQixNQUFNLEdBQUcsS0FBSztRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2pCO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRzs7WUFDcEIsTUFBTSxHQUFHLEtBQUs7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDeEIsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNqQjtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUc7O1lBQ3ZCLE1BQU0sR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbEIsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNqQjtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFTLEVBQUUsS0FBYTs7WUFDbkMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsU0FBUyxHQUFHLEVBQUU7UUFDNUIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vU3RyaW5nVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIE51bWJlclV0aWxzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzTnVtYmVyKHZhbCkge1xuICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KHZhbCkpe1xuICAgICAgICAgICAgcmV0dXJuICFpc05hTihOdW1iZXIodmFsKSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0RlY2ltYWwodmFsKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodmFsKSkge1xuICAgICAgICAgICAgaWYgKHZhbC50b1N0cmluZygpLmluZGV4T2YoJy4nKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzUG9zaXRpdmUodmFsKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuaXNOdW1iZXIodmFsKScsIHRoaXMuaXNOdW1iZXIodmFsKSk7XG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKHZhbCkpIHtcbiAgICAgICAgICAgIGlmIChOdW1iZXIodmFsKSA+IDAgfHwgTnVtYmVyKHZhbCkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWwnLCB2YWwpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzUG9zaXRpdmVJbnQodmFsKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGVjaW1hbCh2YWwpKSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyKHZhbCkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbnVtYmVyVG9GaXgobjogbnVtYmVyLCB0b0ZpeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGZpeDEwID0gTWF0aC5wb3coMTAsIHRvRml4KTtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5zdHJpcChuKSAqIGZpeDEwKSAvIGZpeDEwO1xuICAgIH1cblxuICAgIHN0YXRpYyBzdHJpcChudW0sIHByZWNpc2lvbiA9IDEyKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIobnVtLnRvUHJlY2lzaW9uKHByZWNpc2lvbikpO1xuICAgIH1cblxufSJdfQ==