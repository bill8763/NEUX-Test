/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
let ValidError = class ValidError {
    /**
     * @param {?} Step
     * @param {?} ColId
     * @param {?} Msg
     */
    constructor(Step, ColId, Msg) {
        this._Step = Step;
        this._ColId = ColId;
        this._Msg = Msg;
    }
    /**
     * @return {?}
     */
    get Step() {
        return this._Step;
    }
    /**
     * @return {?}
     */
    get ColId() {
        return this._ColId;
    }
    /**
     * @return {?}
     */
    get Msg() {
        return this._Msg;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], ValidError.prototype, "_Step", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ValidError.prototype, "_ColId", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ValidError.prototype, "_Msg", void 0);
ValidError = tslib_1.__decorate([
    Bean('ValidError'),
    tslib_1.__metadata("design:paramtypes", [Number, String, String])
], ValidError);
export { ValidError };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ValidError.prototype._Step;
    /**
     * @type {?}
     * @private
     */
    ValidError.prototype._ColId;
    /**
     * @type {?}
     * @private
     */
    ValidError.prototype._Msg;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFpbGRFcnJvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9WYWlsZEVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztJQUdyQyxVQUFVOzs7Ozs7SUFXbkIsWUFBWSxJQUFZLEVBQUUsS0FBYSxFQUFFLEdBQVU7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBQ0QsSUFBVyxLQUFLO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDRCxJQUFXLEdBQUc7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztDQUVKLENBQUE7QUF4Qkc7SUFEQyxRQUFROzt5Q0FDYTtBQUd0QjtJQURDLFFBQVE7OzBDQUNjO0FBR3ZCO0lBREMsUUFBUTs7d0NBQ1k7QUFUWixVQUFVO0lBRHRCLElBQUksQ0FBQyxZQUFZLENBQUM7O0dBQ04sVUFBVSxDQTJCdEI7U0EzQlksVUFBVTs7Ozs7O0lBRW5CLDJCQUNzQjs7Ozs7SUFFdEIsNEJBQ3VCOzs7OztJQUV2QiwwQkFDcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBCZWFuKCdWYWxpZEVycm9yJylcbmV4cG9ydCBjbGFzcyBWYWxpZEVycm9ye1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfU3RlcDogbnVtYmVyO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfQ29sSWQ6IHN0cmluZztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX01zZzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoU3RlcDogbnVtYmVyLCBDb2xJZDogc3RyaW5nLCBNc2c6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5fU3RlcCA9IFN0ZXA7XG4gICAgICAgIHRoaXMuX0NvbElkID0gQ29sSWQ7XG4gICAgICAgIHRoaXMuX01zZyA9IE1zZztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IFN0ZXAoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0ZXA7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgQ29sSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NvbElkO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IE1zZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fTXNnO1xuICAgIH1cblxufSJdfQ==