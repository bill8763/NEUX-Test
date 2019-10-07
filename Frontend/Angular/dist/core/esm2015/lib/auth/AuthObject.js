/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class AuthObject {
    /**
     * @param {?=} payload
     * @param {?=} status
     */
    constructor(payload = {}, status = true) {
        this.payload = payload;
        this.status = status;
        this.error = '';
    }
}
if (false) {
    /** @type {?} */
    AuthObject.prototype.payload;
    /** @type {?} */
    AuthObject.prototype.status;
    /** @type {?} */
    AuthObject.prototype.error;
}
/** @enum {string} */
const AuthError = {
    PERMISSION_DENIED: 'Permission Denied',
    TIMEOUT: 'Timeout',
    NOT_LOGIN: 'Not Login',
    PENDING_ACTION: 'Other Action Pending',
};
export { AuthError };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aE9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXV0aC9BdXRoT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNOzs7OztJQUlGLFlBQVksVUFBZSxFQUFFLEVBQUUsU0FBa0IsSUFBSTtRQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBQ0o7OztJQVJHLDZCQUFlOztJQUNmLDRCQUF1Qjs7SUFDdkIsMkJBQXFCOzs7O0lBU3JCLG1CQUFvQixtQkFBbUI7SUFDdkMsU0FBVSxTQUFTO0lBQ25CLFdBQVksV0FBVztJQUN2QixnQkFBaUIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF1dGhPYmplY3Qge1xuICAgIHB1YmxpYyBwYXlsb2FkO1xuICAgIHB1YmxpYyBzdGF0dXM6IGJvb2xlYW47XG4gICAgcHVibGljIGVycm9yOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocGF5bG9hZDogYW55ID0ge30sIHN0YXR1czogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuZXJyb3IgPSAnJztcbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIEF1dGhFcnJvciB7XG4gICAgUEVSTUlTU0lPTl9ERU5JRUQgPSAnUGVybWlzc2lvbiBEZW5pZWQnLFxuICAgIFRJTUVPVVQgPSAnVGltZW91dCcsXG4gICAgTk9UX0xPR0lOID0gJ05vdCBMb2dpbicsXG4gICAgUEVORElOR19BQ1RJT04gPSAnT3RoZXIgQWN0aW9uIFBlbmRpbmcnXG59Il19