/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var NumberFormatPipe = /** @class */ (function () {
    function NumberFormatPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} decimalPlaces
     * @return {?}
     */
    NumberFormatPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} decimalPlaces
     * @return {?}
     */
    function (value, decimalPlaces) {
        if (decimalPlaces === void 0) { decimalPlaces = -1; }
        /** @type {?} */
        var valueToNumber = Number(value);
        if (isNaN(valueToNumber)) { //不能轉成數字
            return value;
        }
        else {
            if (decimalPlaces >= 0) {
                /** @type {?} */
                var decimal = '.';
                /** @type {?} */
                var thousands = ',';
                /** @type {?} */
                var amount = '';
                try {
                    decimalPlaces = Math.abs(decimalPlaces);
                    decimalPlaces = isNaN(decimalPlaces) ? 1 : decimalPlaces;
                    /** @type {?} */
                    var negativeSign = valueToNumber < 0 ? "-" : "";
                    /** @type {?} */
                    var i = parseInt(amount = Math.abs(valueToNumber || 0).toFixed(decimalPlaces)).toString();
                    /** @type {?} */
                    var j = (i.length > 3) ? i.length % 3 : 0;
                    // if (Math.abs(Number(amount) - parseInt(i))) {
                    //   return this._valueAddMark(negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalPlaces ? decimal + Math.abs(Number(amount) - parseInt(i)).toFixed(decimalPlaces).slice(2) : ""));
                    // } else {
                    //   return this._valueAddMark(negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands));
                    // }
                    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalPlaces ? decimal + Math.abs(Number(amount) - parseInt(i)).toFixed(decimalPlaces).slice(2) : "");
                }
                catch (e) {
                    console.log(e);
                }
            }
            else {
                /** @type {?} */
                var thousands = ',';
                /** @type {?} */
                var amount = '';
                try {
                    /** @type {?} */
                    var negativeSign = valueToNumber < 0 ? "-" : "";
                    /** @type {?} */
                    var i = Math.abs(valueToNumber || 0).toString();
                    /** @type {?} */
                    var j = (i.length > 3) ? i.length % 3 : 0;
                    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands);
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
    };
    NumberFormatPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'numberFormat',
                    pure: false
                },] }
    ];
    NumberFormatPipe.ctorParameters = function () { return []; };
    return NumberFormatPipe;
}());
export { NumberFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyRm9ybWF0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL251bWJlckZvcm1hdC9udW1iZXJGb3JtYXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFJdEU7SUFNRTtJQUFnQixDQUFDOzs7Ozs7SUFFakIsb0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFVLEVBQUUsYUFBMEI7UUFBMUIsOEJBQUEsRUFBQSxpQkFBeUIsQ0FBQzs7WUFDMUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxRQUFRO1lBQ2xDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFDSTtZQUNILElBQUksYUFBYSxJQUFJLENBQUMsRUFBRTs7b0JBQ2hCLE9BQU8sR0FBRyxHQUFHOztvQkFDYixTQUFTLEdBQUcsR0FBRzs7b0JBQ2pCLE1BQU0sR0FBVyxFQUFFO2dCQUN2QixJQUFJO29CQUNGLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN4QyxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQzs7d0JBRW5ELFlBQVksR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7O3dCQUM3QyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUNyRixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekMsZ0RBQWdEO29CQUNoRCx5UEFBeVA7b0JBQ3pQLFdBQVc7b0JBQ1gsK0lBQStJO29CQUMvSSxJQUFJO29CQUNKLE9BQU8sWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUVqTztnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO2lCQUNmO2FBQ0Y7aUJBQ0k7O29CQUNHLFNBQVMsR0FBRyxHQUFHOztvQkFDakIsTUFBTSxHQUFXLEVBQUU7Z0JBQ3ZCLElBQUk7O3dCQUNJLFlBQVksR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7O3dCQUM3QyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFOzt3QkFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRXpDLE9BQU8sWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQztpQkFDdkg7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDZjthQUNGO1NBQ0Y7SUFDSCxDQUFDOztnQkFsREYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxjQUFjO29CQUNwQixJQUFJLEVBQUUsS0FBSztpQkFDWjs7O0lBb0RELHVCQUFDO0NBQUEsQUF2REQsSUF1REM7U0FuRFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cblxuQFBpcGUoe1xuICBuYW1lOiAnbnVtYmVyRm9ybWF0JyxcbiAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGRlY2ltYWxQbGFjZXM6IG51bWJlciA9IC0xKTogc3RyaW5nIHtcbiAgICBsZXQgdmFsdWVUb051bWJlciA9IE51bWJlcih2YWx1ZSk7XG4gICAgaWYgKGlzTmFOKHZhbHVlVG9OdW1iZXIpKSB7IC8v5LiN6IO96L2J5oiQ5pW45a2XXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGRlY2ltYWxQbGFjZXMgPj0gMCkge1xuICAgICAgICBjb25zdCBkZWNpbWFsID0gJy4nO1xuICAgICAgICBjb25zdCB0aG91c2FuZHMgPSAnLCc7XG4gICAgICAgIGxldCBhbW91bnQ6IHN0cmluZyA9ICcnO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRlY2ltYWxQbGFjZXMgPSBNYXRoLmFicyhkZWNpbWFsUGxhY2VzKTtcbiAgICAgICAgICBkZWNpbWFsUGxhY2VzID0gaXNOYU4oZGVjaW1hbFBsYWNlcykgPyAxIDogZGVjaW1hbFBsYWNlcztcblxuICAgICAgICAgIGNvbnN0IG5lZ2F0aXZlU2lnbiA9IHZhbHVlVG9OdW1iZXIgPCAwID8gXCItXCIgOiBcIlwiO1xuICAgICAgICAgIGxldCBpID0gcGFyc2VJbnQoYW1vdW50ID0gTWF0aC5hYnModmFsdWVUb051bWJlciB8fCAwKS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpKS50b1N0cmluZygpO1xuICAgICAgICAgIGxldCBqID0gKGkubGVuZ3RoID4gMykgPyBpLmxlbmd0aCAlIDMgOiAwO1xuICAgICAgICAgIC8vIGlmIChNYXRoLmFicyhOdW1iZXIoYW1vdW50KSAtIHBhcnNlSW50KGkpKSkge1xuICAgICAgICAgIC8vICAgcmV0dXJuIHRoaXMuX3ZhbHVlQWRkTWFyayhuZWdhdGl2ZVNpZ24gKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdGhvdXNhbmRzIDogJycpICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHRob3VzYW5kcykgKyAoZGVjaW1hbFBsYWNlcyA/IGRlY2ltYWwgKyBNYXRoLmFicyhOdW1iZXIoYW1vdW50KSAtIHBhcnNlSW50KGkpKS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpLnNsaWNlKDIpIDogXCJcIikpO1xuICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgLy8gICByZXR1cm4gdGhpcy5fdmFsdWVBZGRNYXJrKG5lZ2F0aXZlU2lnbiArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0aG91c2FuZHMgOiAnJykgKyBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgdGhvdXNhbmRzKSk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIHJldHVybiBuZWdhdGl2ZVNpZ24gKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdGhvdXNhbmRzIDogJycpICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHRob3VzYW5kcykgKyAoZGVjaW1hbFBsYWNlcyA/IGRlY2ltYWwgKyBNYXRoLmFicyhOdW1iZXIoYW1vdW50KSAtIHBhcnNlSW50KGkpKS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpLnNsaWNlKDIpIDogXCJcIik7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgdGhvdXNhbmRzID0gJywnO1xuICAgICAgICBsZXQgYW1vdW50OiBzdHJpbmcgPSAnJztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBuZWdhdGl2ZVNpZ24gPSB2YWx1ZVRvTnVtYmVyIDwgMCA/IFwiLVwiIDogXCJcIjtcbiAgICAgICAgICBsZXQgaSA9IE1hdGguYWJzKHZhbHVlVG9OdW1iZXIgfHwgMCkudG9TdHJpbmcoKTtcbiAgICAgICAgICBsZXQgaiA9IChpLmxlbmd0aCA+IDMpID8gaS5sZW5ndGggJSAzIDogMDtcblxuICAgICAgICAgIHJldHVybiBuZWdhdGl2ZVNpZ24gKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdGhvdXNhbmRzIDogJycpICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHRob3VzYW5kcyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcHJpdmF0ZSBfdmFsdWVBZGRNYXJrKHZhbHVlKSB7XG4gIC8vICAgcmV0dXJuICcjIyMnICsgdmFsdWUgKyAnIyMjJztcbiAgLy8gfVxufVxuIl19