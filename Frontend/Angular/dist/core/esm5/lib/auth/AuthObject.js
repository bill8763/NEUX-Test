/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthObject = /** @class */ (function () {
    function AuthObject(payload, status) {
        if (payload === void 0) { payload = {}; }
        if (status === void 0) { status = true; }
        this.payload = payload;
        this.status = status;
        this.error = '';
    }
    return AuthObject;
}());
export { AuthObject };
if (false) {
    /** @type {?} */
    AuthObject.prototype.payload;
    /** @type {?} */
    AuthObject.prototype.status;
    /** @type {?} */
    AuthObject.prototype.error;
}
/** @enum {string} */
var AuthError = {
    PERMISSION_DENIED: 'Permission Denied',
    TIMEOUT: 'Timeout',
    NOT_LOGIN: 'Not Login',
    PENDING_ACTION: 'Other Action Pending',
};
export { AuthError };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aE9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXV0aC9BdXRoT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUlJLG9CQUFZLE9BQWlCLEVBQUUsTUFBc0I7UUFBekMsd0JBQUEsRUFBQSxZQUFpQjtRQUFFLHVCQUFBLEVBQUEsYUFBc0I7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7SUFSRyw2QkFBZTs7SUFDZiw0QkFBdUI7O0lBQ3ZCLDJCQUFxQjs7OztJQVNyQixtQkFBb0IsbUJBQW1CO0lBQ3ZDLFNBQVUsU0FBUztJQUNuQixXQUFZLFdBQVc7SUFDdkIsZ0JBQWlCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBdXRoT2JqZWN0IHtcbiAgICBwdWJsaWMgcGF5bG9hZDtcbiAgICBwdWJsaWMgc3RhdHVzOiBib29sZWFuO1xuICAgIHB1YmxpYyBlcnJvcjogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHBheWxvYWQ6IGFueSA9IHt9LCBzdGF0dXM6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLmVycm9yID0gJyc7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBBdXRoRXJyb3Ige1xuICAgIFBFUk1JU1NJT05fREVOSUVEID0gJ1Blcm1pc3Npb24gRGVuaWVkJyxcbiAgICBUSU1FT1VUID0gJ1RpbWVvdXQnLFxuICAgIE5PVF9MT0dJTiA9ICdOb3QgTG9naW4nLFxuICAgIFBFTkRJTkdfQUNUSU9OID0gJ090aGVyIEFjdGlvbiBQZW5kaW5nJ1xufSJdfQ==