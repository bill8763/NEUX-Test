/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginResponse = /** @class */ (function () {
    function LoginResponse(resp) {
        this.isSuccess = resp.isSuccess;
        this.errorMsg = resp.errorMsg;
        this.type = resp.type;
        this.token = resp.token;
        this.failCount = resp.failCount || -1;
    }
    return LoginResponse;
}());
export { LoginResponse };
if (false) {
    /** @type {?} */
    LoginResponse.prototype.isSuccess;
    /** @type {?} */
    LoginResponse.prototype.errorMsg;
    /** @type {?} */
    LoginResponse.prototype.type;
    /** @type {?} */
    LoginResponse.prototype.token;
    /** @type {?} */
    LoginResponse.prototype.failCount;
}
/** @enum {number} */
var LOGIN_TYPE = {
    ONLINE: 0,
    OFFLINE: 1,
};
export { LOGIN_TYPE };
LOGIN_TYPE[LOGIN_TYPE.ONLINE] = 'ONLINE';
LOGIN_TYPE[LOGIN_TYPE.OFFLINE] = 'OFFLINE';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5SZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXV0aC9sb2dpbi9Mb2dpblJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQU1JLHVCQUFZLElBQW1HO1FBQzNHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7Ozs7SUFaRyxrQ0FBbUI7O0lBQ25CLGlDQUFpQjs7SUFDakIsNkJBQWlCOztJQUNqQiw4QkFBYzs7SUFDZCxrQ0FBa0I7Ozs7SUFVbEIsU0FBTTtJQUNOLFVBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTG9naW5SZXNwb25zZSB7XG4gICAgaXNTdWNjZXNzOiBib29sZWFuO1xuICAgIGVycm9yTXNnOiBzdHJpbmc7XG4gICAgdHlwZTogTE9HSU5fVFlQRTtcbiAgICB0b2tlbjogc3RyaW5nO1xuICAgIGZhaWxDb3VudDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHJlc3A6IHsgaXNTdWNjZXNzOiBib29sZWFuLCB0eXBlOiBMT0dJTl9UWVBFLCBlcnJvck1zZzogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBmYWlsQ291bnQ/OiBudW1iZXIgfSkge1xuICAgICAgICB0aGlzLmlzU3VjY2VzcyA9IHJlc3AuaXNTdWNjZXNzO1xuICAgICAgICB0aGlzLmVycm9yTXNnID0gcmVzcC5lcnJvck1zZztcbiAgICAgICAgdGhpcy50eXBlID0gcmVzcC50eXBlO1xuICAgICAgICB0aGlzLnRva2VuID0gcmVzcC50b2tlbjtcbiAgICAgICAgdGhpcy5mYWlsQ291bnQgPSByZXNwLmZhaWxDb3VudCB8fCAtMTtcbiAgICB9XG59XG5leHBvcnQgZW51bSBMT0dJTl9UWVBFIHtcbiAgICBPTkxJTkUsXG4gICAgT0ZGTElORVxufSJdfQ==