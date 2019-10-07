/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class NumberFormatPipe {
    constructor() { }
    /**
     * @param {?} value
     * @param {?=} decimalPlaces
     * @return {?}
     */
    transform(value, decimalPlaces = -1) {
        /** @type {?} */
        let valueToNumber = Number(value);
        if (isNaN(valueToNumber)) { //不能轉成數字
            return value;
        }
        else {
            if (decimalPlaces >= 0) {
                /** @type {?} */
                const decimal = '.';
                /** @type {?} */
                const thousands = ',';
                /** @type {?} */
                let amount = '';
                try {
                    decimalPlaces = Math.abs(decimalPlaces);
                    decimalPlaces = isNaN(decimalPlaces) ? 1 : decimalPlaces;
                    /** @type {?} */
                    const negativeSign = valueToNumber < 0 ? "-" : "";
                    /** @type {?} */
                    let i = parseInt(amount = Math.abs(valueToNumber || 0).toFixed(decimalPlaces)).toString();
                    /** @type {?} */
                    let j = (i.length > 3) ? i.length % 3 : 0;
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
                const thousands = ',';
                /** @type {?} */
                let amount = '';
                try {
                    /** @type {?} */
                    const negativeSign = valueToNumber < 0 ? "-" : "";
                    /** @type {?} */
                    let i = Math.abs(valueToNumber || 0).toString();
                    /** @type {?} */
                    let j = (i.length > 3) ? i.length % 3 : 0;
                    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands);
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
    }
}
NumberFormatPipe.decorators = [
    { type: Pipe, args: [{
                name: 'numberFormat',
                pure: false
            },] }
];
NumberFormatPipe.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyRm9ybWF0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL251bWJlckZvcm1hdC9udW1iZXJGb3JtYXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFRdEUsTUFBTTtJQUVKLGdCQUFnQixDQUFDOzs7Ozs7SUFFakIsU0FBUyxDQUFDLEtBQVUsRUFBRSxnQkFBd0IsQ0FBQyxDQUFDOztZQUMxQyxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFFBQVE7WUFDbEMsT0FBTyxLQUFLLENBQUM7U0FDZDthQUNJO1lBQ0gsSUFBSSxhQUFhLElBQUksQ0FBQyxFQUFFOztzQkFDaEIsT0FBTyxHQUFHLEdBQUc7O3NCQUNiLFNBQVMsR0FBRyxHQUFHOztvQkFDakIsTUFBTSxHQUFXLEVBQUU7Z0JBQ3ZCLElBQUk7b0JBQ0YsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3hDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDOzswQkFFbkQsWUFBWSxHQUFHLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTs7d0JBQzdDLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7d0JBQ3JGLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxnREFBZ0Q7b0JBQ2hELHlQQUF5UDtvQkFDelAsV0FBVztvQkFDWCwrSUFBK0k7b0JBQy9JLElBQUk7b0JBQ0osT0FBTyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBRWpPO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ2Y7YUFDRjtpQkFDSTs7c0JBQ0csU0FBUyxHQUFHLEdBQUc7O29CQUNqQixNQUFNLEdBQVcsRUFBRTtnQkFDdkIsSUFBSTs7MEJBQ0ksWUFBWSxHQUFHLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTs7d0JBQzdDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7O3dCQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFekMsT0FBTyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDO2lCQUN2SDtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO2lCQUNmO2FBQ0Y7U0FDRjtJQUNILENBQUM7OztZQWxERixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLElBQUksRUFBRSxLQUFLO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuXG5AUGlwZSh7XG4gIG5hbWU6ICdudW1iZXJGb3JtYXQnLFxuICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZGVjaW1hbFBsYWNlczogbnVtYmVyID0gLTEpOiBzdHJpbmcge1xuICAgIGxldCB2YWx1ZVRvTnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcbiAgICBpZiAoaXNOYU4odmFsdWVUb051bWJlcikpIHsgLy/kuI3og73ovYnmiJDmlbjlrZdcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZGVjaW1hbFBsYWNlcyA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGRlY2ltYWwgPSAnLic7XG4gICAgICAgIGNvbnN0IHRob3VzYW5kcyA9ICcsJztcbiAgICAgICAgbGV0IGFtb3VudDogc3RyaW5nID0gJyc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGVjaW1hbFBsYWNlcyA9IE1hdGguYWJzKGRlY2ltYWxQbGFjZXMpO1xuICAgICAgICAgIGRlY2ltYWxQbGFjZXMgPSBpc05hTihkZWNpbWFsUGxhY2VzKSA/IDEgOiBkZWNpbWFsUGxhY2VzO1xuXG4gICAgICAgICAgY29uc3QgbmVnYXRpdmVTaWduID0gdmFsdWVUb051bWJlciA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gICAgICAgICAgbGV0IGkgPSBwYXJzZUludChhbW91bnQgPSBNYXRoLmFicyh2YWx1ZVRvTnVtYmVyIHx8IDApLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgbGV0IGogPSAoaS5sZW5ndGggPiAzKSA/IGkubGVuZ3RoICUgMyA6IDA7XG4gICAgICAgICAgLy8gaWYgKE1hdGguYWJzKE51bWJlcihhbW91bnQpIC0gcGFyc2VJbnQoaSkpKSB7XG4gICAgICAgICAgLy8gICByZXR1cm4gdGhpcy5fdmFsdWVBZGRNYXJrKG5lZ2F0aXZlU2lnbiArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0aG91c2FuZHMgOiAnJykgKyBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgdGhvdXNhbmRzKSArIChkZWNpbWFsUGxhY2VzID8gZGVjaW1hbCArIE1hdGguYWJzKE51bWJlcihhbW91bnQpIC0gcGFyc2VJbnQoaSkpLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykuc2xpY2UoMikgOiBcIlwiKSk7XG4gICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAvLyAgIHJldHVybiB0aGlzLl92YWx1ZUFkZE1hcmsobmVnYXRpdmVTaWduICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHRob3VzYW5kcyA6ICcnKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0aG91c2FuZHMpKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgcmV0dXJuIG5lZ2F0aXZlU2lnbiArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0aG91c2FuZHMgOiAnJykgKyBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgdGhvdXNhbmRzKSArIChkZWNpbWFsUGxhY2VzID8gZGVjaW1hbCArIE1hdGguYWJzKE51bWJlcihhbW91bnQpIC0gcGFyc2VJbnQoaSkpLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykuc2xpY2UoMikgOiBcIlwiKTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCB0aG91c2FuZHMgPSAnLCc7XG4gICAgICAgIGxldCBhbW91bnQ6IHN0cmluZyA9ICcnO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG5lZ2F0aXZlU2lnbiA9IHZhbHVlVG9OdW1iZXIgPCAwID8gXCItXCIgOiBcIlwiO1xuICAgICAgICAgIGxldCBpID0gTWF0aC5hYnModmFsdWVUb051bWJlciB8fCAwKS50b1N0cmluZygpO1xuICAgICAgICAgIGxldCBqID0gKGkubGVuZ3RoID4gMykgPyBpLmxlbmd0aCAlIDMgOiAwO1xuXG4gICAgICAgICAgcmV0dXJuIG5lZ2F0aXZlU2lnbiArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0aG91c2FuZHMgOiAnJykgKyBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgdGhvdXNhbmRzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBwcml2YXRlIF92YWx1ZUFkZE1hcmsodmFsdWUpIHtcbiAgLy8gICByZXR1cm4gJyMjIycgKyB2YWx1ZSArICcjIyMnO1xuICAvLyB9XG59XG4iXX0=