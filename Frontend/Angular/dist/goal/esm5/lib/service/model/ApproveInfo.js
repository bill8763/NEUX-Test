/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
var ApproveInfo = /** @class */ (function () {
    function ApproveInfo(DataYear, AgentID, IsApprove, Comment) {
        this._DataYear = DataYear;
        this._AgentID = AgentID;
        this._IsApprove = IsApprove;
        this._Comment = Comment;
    }
    Object.defineProperty(ApproveInfo.prototype, "Comment", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Comment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApproveInfo.prototype, "IsApprove", {
        get: /**
         * @return {?}
         */
        function () {
            return this._IsApprove;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApproveInfo.prototype, "AgentID", {
        get: /**
         * @return {?}
         */
        function () {
            return this._AgentID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApproveInfo.prototype, "DataYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._DataYear;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ApproveInfo.prototype, "_DataYear", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ApproveInfo.prototype, "_AgentID", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Boolean)
    ], ApproveInfo.prototype, "_IsApprove", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ApproveInfo.prototype, "_Comment", void 0);
    ApproveInfo = tslib_1.__decorate([
        Bean('ApproveInfo'),
        tslib_1.__metadata("design:paramtypes", [Number, String, Boolean, String])
    ], ApproveInfo);
    return ApproveInfo;
}());
export { ApproveInfo };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApproveInfo.prototype._DataYear;
    /**
     * @type {?}
     * @private
     */
    ApproveInfo.prototype._AgentID;
    /**
     * @type {?}
     * @private
     */
    ApproveInfo.prototype._IsApprove;
    /**
     * @type {?}
     * @private
     */
    ApproveInfo.prototype._Comment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwcm92ZUluZm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9nb2FsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvQXBwcm92ZUluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQWtCOUMscUJBQVksUUFBZSxFQUFFLE9BQWUsRUFBRSxTQUFpQixFQUFFLE9BQWM7UUFDM0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFXLGdDQUFPOzs7O1FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsa0NBQVM7Ozs7UUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyxnQ0FBTzs7OztRQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLGlDQUFROzs7O1FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBOUJEO1FBREMsUUFBUTs7a0RBQ2lCO0lBRzFCO1FBREMsUUFBUTs7aURBQ2dCO0lBR3pCO1FBREMsUUFBUTs7bURBQ21CO0lBRzVCO1FBREMsUUFBUTs7aURBQ2dCO0lBWmhCLFdBQVc7UUFEdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7T0FDUCxXQUFXLENBbUN2QjtJQUFELGtCQUFDO0NBQUEsSUFBQTtTQW5DWSxXQUFXOzs7Ozs7SUFFcEIsZ0NBQzBCOzs7OztJQUUxQiwrQkFDeUI7Ozs7O0lBRXpCLGlDQUM0Qjs7Ozs7SUFFNUIsK0JBQ3lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignQXBwcm92ZUluZm8nKVxuZXhwb3J0IGNsYXNzIEFwcHJvdmVJbmZve1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfRGF0YVllYXI6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0FnZW50SUQ6IHN0cmluZztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0lzQXBwcm92ZTogYm9vbGVhbjtcbiAgICBcbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9Db21tZW50OiBzdHJpbmc7XG5cblxuICAgIGNvbnN0cnVjdG9yKERhdGFZZWFyOm51bWJlciwgQWdlbnRJRDogc3RyaW5nLCBJc0FwcHJvdmU6Ym9vbGVhbiwgQ29tbWVudDpzdHJpbmcpe1xuICAgICAgICB0aGlzLl9EYXRhWWVhciA9IERhdGFZZWFyO1xuICAgICAgICB0aGlzLl9BZ2VudElEID0gQWdlbnRJRDtcbiAgICAgICAgdGhpcy5fSXNBcHByb3ZlID0gSXNBcHByb3ZlO1xuICAgICAgICB0aGlzLl9Db21tZW50ID0gQ29tbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IENvbW1lbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NvbW1lbnQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgSXNBcHByb3ZlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fSXNBcHByb3ZlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IEFnZW50SUQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FnZW50SUQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgRGF0YVllYXIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0RhdGFZZWFyO1xuICAgIH1cblxufSJdfQ==