/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class LoginResponse {
    /**
     * @param {?} resp
     */
    constructor(resp) {
        this.isSuccess = resp.isSuccess;
        this.errorMsg = resp.errorMsg;
        this.type = resp.type;
        this.token = resp.token;
        this.failCount = resp.failCount || -1;
    }
}
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
const LOGIN_TYPE = {
    ONLINE: 0,
    OFFLINE: 1,
};
export { LOGIN_TYPE };
LOGIN_TYPE[LOGIN_TYPE.ONLINE] = 'ONLINE';
LOGIN_TYPE[LOGIN_TYPE.OFFLINE] = 'OFFLINE';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5SZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXV0aC9sb2dpbi9Mb2dpblJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNOzs7O0lBTUYsWUFBWSxJQUFtRztRQUMzRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDSjs7O0lBWkcsa0NBQW1COztJQUNuQixpQ0FBaUI7O0lBQ2pCLDZCQUFpQjs7SUFDakIsOEJBQWM7O0lBQ2Qsa0NBQWtCOzs7O0lBVWxCLFNBQU07SUFDTixVQUFPIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExvZ2luUmVzcG9uc2Uge1xuICAgIGlzU3VjY2VzczogYm9vbGVhbjtcbiAgICBlcnJvck1zZzogc3RyaW5nO1xuICAgIHR5cGU6IExPR0lOX1RZUEU7XG4gICAgdG9rZW46IHN0cmluZztcbiAgICBmYWlsQ291bnQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihyZXNwOiB7IGlzU3VjY2VzczogYm9vbGVhbiwgdHlwZTogTE9HSU5fVFlQRSwgZXJyb3JNc2c6IHN0cmluZywgdG9rZW46IHN0cmluZywgZmFpbENvdW50PzogbnVtYmVyIH0pIHtcbiAgICAgICAgdGhpcy5pc1N1Y2Nlc3MgPSByZXNwLmlzU3VjY2VzcztcbiAgICAgICAgdGhpcy5lcnJvck1zZyA9IHJlc3AuZXJyb3JNc2c7XG4gICAgICAgIHRoaXMudHlwZSA9IHJlc3AudHlwZTtcbiAgICAgICAgdGhpcy50b2tlbiA9IHJlc3AudG9rZW47XG4gICAgICAgIHRoaXMuZmFpbENvdW50ID0gcmVzcC5mYWlsQ291bnQgfHwgLTE7XG4gICAgfVxufVxuZXhwb3J0IGVudW0gTE9HSU5fVFlQRSB7XG4gICAgT05MSU5FLFxuICAgIE9GRkxJTkVcbn0iXX0=