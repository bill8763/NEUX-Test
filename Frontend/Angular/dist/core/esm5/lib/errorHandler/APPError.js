/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var APPError = /** @class */ (function (_super) {
    tslib_1.__extends(APPError, _super);
    function APPError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.name = '';
        _this.message = '';
        _this.code = '';
        _this.message = "CODE " + code + " - " + message;
        _this.name = "APPError";
        _this.code = code;
        return _this;
    }
    return APPError;
}(Error));
export { APPError };
if (false) {
    /** @type {?} */
    APPError.prototype.name;
    /** @type {?} */
    APPError.prototype.message;
    /** @type {?} */
    APPError.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBQRXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2Vycm9ySGFuZGxlci9BUFBFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQThCLG9DQUFLO0lBQy9CLGtCQUFZLElBQVksRUFBRSxPQUFlO1FBQXpDLFlBQ0ksa0JBQU0sT0FBTyxDQUFDLFNBSWpCO1FBQ00sVUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixVQUFJLEdBQUcsRUFBRSxDQUFDO1FBTmIsS0FBSSxDQUFDLE9BQU8sR0FBRyxVQUFRLElBQUksV0FBTSxPQUFTLENBQUM7UUFDM0MsS0FBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDdkIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O0lBQ3JCLENBQUM7SUFJTCxlQUFDO0FBQUQsQ0FBQyxBQVZELENBQThCLEtBQUssR0FVbEM7Ozs7SUFIRyx3QkFBaUI7O0lBQ2pCLDJCQUFvQjs7SUFDcEIsd0JBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFQUEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvZGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBgQ09ERSAke2NvZGV9IC0gJHttZXNzYWdlfWA7XG4gICAgICAgIHRoaXMubmFtZSA9IGBBUFBFcnJvcmA7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgfVxuICAgIHB1YmxpYyBuYW1lID0gJyc7XG4gICAgcHVibGljIG1lc3NhZ2UgPSAnJztcbiAgICBwdWJsaWMgY29kZSA9ICcnO1xufSJdfQ==