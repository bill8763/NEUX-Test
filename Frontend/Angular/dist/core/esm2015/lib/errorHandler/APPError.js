/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class APPError extends Error {
    /**
     * @param {?} code
     * @param {?} message
     */
    constructor(code, message) {
        super(message);
        this.name = '';
        this.message = '';
        this.code = '';
        this.message = `CODE ${code} - ${message}`;
        this.name = `APPError`;
        this.code = code;
    }
}
if (false) {
    /** @type {?} */
    APPError.prototype.name;
    /** @type {?} */
    APPError.prototype.message;
    /** @type {?} */
    APPError.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBQRXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2Vycm9ySGFuZGxlci9BUFBFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxlQUFnQixTQUFRLEtBQUs7Ozs7O0lBQy9CLFlBQVksSUFBWSxFQUFFLE9BQWU7UUFDckMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBS1osU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBTmIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLElBQUksTUFBTSxPQUFPLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0NBSUo7OztJQUhHLHdCQUFpQjs7SUFDakIsMkJBQW9COztJQUNwQix3QkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQVBQRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoY29kZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGBDT0RFICR7Y29kZX0gLSAke21lc3NhZ2V9YDtcbiAgICAgICAgdGhpcy5uYW1lID0gYEFQUEVycm9yYDtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB9XG4gICAgcHVibGljIG5hbWUgPSAnJztcbiAgICBwdWJsaWMgbWVzc2FnZSA9ICcnO1xuICAgIHB1YmxpYyBjb2RlID0gJyc7XG59Il19