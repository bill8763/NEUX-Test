/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginInfo = /** @class */ (function () {
    function LoginInfo(info) {
        console.log("LoginInfo custructor:", info);
        this._AgentId = info.AgentId || '';
        this._AgentName = info.AgentName || '';
        this._Gender = info.Gender || '';
        this._AppUseMode = [info.AppUseMode] || [];
        this._exp = info.exp || null;
        this._GoalSigningSupervisor = info.GoalSigningSupervisor || null;
        this._CurrentJobSeniorityMonth = info.CurrentJobSeniorityMonth || null;
        this._JobGrade = info.JobGrade || null;
        this._CurrentJobOBMonth = info.CurrentJobOBMonth || null;
        this._OfficeName = info.OfficeName || null;
        this._ReferenceToken = info.ReferenceToken || null;
    }
    Object.defineProperty(LoginInfo.prototype, "AgentId", {
        get: /**
         * @return {?}
         */
        function () {
            return this._AgentId;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._AgentId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginInfo.prototype, "AppUseMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._AppUseMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._AppUseMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginInfo.prototype, "AgentName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._AgentName;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._AgentName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginInfo.prototype, "Gender", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Gender;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._Gender = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginInfo.prototype, "exp", {
        get: /**
         * @return {?}
         */
        function () {
            return this._exp;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._exp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginInfo.prototype, "GoalSigningSupervisor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._GoalSigningSupervisor;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._GoalSigningSupervisor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginInfo.prototype, "CurrentJobSeniorityMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._CurrentJobSeniorityMonth;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._CurrentJobSeniorityMonth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginInfo.prototype, "JobGrade", {
        get: /**
         * @return {?}
         */
        function () {
            return this._JobGrade;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._JobGrade = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginInfo.prototype, "CurrentJobOBMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._CurrentJobOBMonth;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._CurrentJobOBMonth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginInfo.prototype, "OfficeName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._OfficeName;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._OfficeName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginInfo.prototype, "ReferenceToken", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ReferenceToken;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ReferenceToken = value;
        },
        enumerable: true,
        configurable: true
    });
    return LoginInfo;
}());
export { LoginInfo };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoginInfo.prototype._AgentId;
    /**
     * @type {?}
     * @private
     */
    LoginInfo.prototype._AppUseMode;
    /**
     * @type {?}
     * @private
     */
    LoginInfo.prototype._AgentName;
    /**
     * @type {?}
     * @private
     */
    LoginInfo.prototype._Gender;
    /**
     * @type {?}
     * @private
     */
    LoginInfo.prototype._exp;
    /**
     * @type {?}
     * @private
     */
    LoginInfo.prototype._GoalSigningSupervisor;
    /**
     * @type {?}
     * @private
     */
    LoginInfo.prototype._CurrentJobSeniorityMonth;
    /**
     * @type {?}
     * @private
     */
    LoginInfo.prototype._JobGrade;
    /**
     * @type {?}
     * @private
     */
    LoginInfo.prototype._CurrentJobOBMonth;
    /**
     * @type {?}
     * @private
     */
    LoginInfo.prototype._OfficeName;
    /**
     * @type {?}
     * @private
     */
    LoginInfo.prototype._ReferenceToken;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5JbmZvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2xvZ2luL0xvZ2luSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFrRkksbUJBQVksSUFBSTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQztRQUNqRSxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixJQUFJLElBQUksQ0FBQztRQUN2RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQztJQUN2RCxDQUFDO0lBN0ZELHNCQUFXLDhCQUFPOzs7O1FBQWxCO1lBQ0ksT0FB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ICAgIHByaXZhdGUgX0FnZW50SWQ6IHN0cmluZztcbiAgICBwdWJsaWMgZ2V0IEFnZW50SWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FnZW50SWQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgQWdlbnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX0FnZW50SWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfQXBwVXNlTW9kZTogQXJyYXk8YW55PjtcbiAgICBwdWJsaWMgZ2V0IEFwcFVzZU1vZGUoKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BcHBVc2VNb2RlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IEFwcFVzZU1vZGUodmFsdWU6IEFycmF5PGFueT4pIHtcbiAgICAgICAgdGhpcy5fQXBwVXNlTW9kZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwcml2YXRlIF9BZ2VudE5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgZ2V0IEFnZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fQWdlbnROYW1lO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IEFnZW50TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX0FnZW50TmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwcml2YXRlIF9HZW5kZXI6IHN0cmluZztcbiAgICBwdWJsaWMgZ2V0IEdlbmRlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fR2VuZGVyO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IEdlbmRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX0dlbmRlciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2V4cDogbnVtYmVyO1xuICAgIHB1YmxpYyBnZXQgZXhwKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHA7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZXhwKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZXhwID0gdmFsdWU7XG4gICAgfVxuICAgIHByaXZhdGUgX0dvYWxTaWduaW5nU3VwZXJ2aXNvcjogbnVtYmVyO1xuICAgIHB1YmxpYyBnZXQgR29hbFNpZ25pbmdTdXBlcnZpc29yKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Hb2FsU2lnbmluZ1N1cGVydmlzb3I7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgR29hbFNpZ25pbmdTdXBlcnZpc29yKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fR29hbFNpZ25pbmdTdXBlcnZpc29yID0gdmFsdWU7XG4gICAgfVxuICAgIHByaXZhdGUgX0N1cnJlbnRKb2JTZW5pb3JpdHlNb250aDtcbiAgICBwdWJsaWMgZ2V0IEN1cnJlbnRKb2JTZW5pb3JpdHlNb250aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0N1cnJlbnRKb2JTZW5pb3JpdHlNb250aDtcbiAgICB9XG4gICAgcHVibGljIHNldCBDdXJyZW50Sm9iU2VuaW9yaXR5TW9udGgodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fQ3VycmVudEpvYlNlbmlvcml0eU1vbnRoID0gdmFsdWU7XG4gICAgfVxuICAgIHByaXZhdGUgX0pvYkdyYWRlO1xuICAgIHB1YmxpYyBnZXQgSm9iR3JhZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Kb2JHcmFkZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBKb2JHcmFkZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9Kb2JHcmFkZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwcml2YXRlIF9DdXJyZW50Sm9iT0JNb250aDtcbiAgICBwdWJsaWMgZ2V0IEN1cnJlbnRKb2JPQk1vbnRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fQ3VycmVudEpvYk9CTW9udGg7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgQ3VycmVudEpvYk9CTW9udGgodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fQ3VycmVudEpvYk9CTW9udGggPSB2YWx1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfT2ZmaWNlTmFtZTtcbiAgICBwdWJsaWMgZ2V0IE9mZmljZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9PZmZpY2VOYW1lO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IE9mZmljZU5hbWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fT2ZmaWNlTmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX1JlZmVyZW5jZVRva2VuO1xuICAgIHB1YmxpYyBnZXQgUmVmZXJlbmNlVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9SZWZlcmVuY2VUb2tlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IFJlZmVyZW5jZVRva2VuKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX1JlZmVyZW5jZVRva2VuID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoaW5mbykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luSW5mbyBjdXN0cnVjdG9yOlwiLCBpbmZvKTtcbiAgICAgICAgdGhpcy5fQWdlbnRJZCA9IGluZm8uQWdlbnRJZCB8fCAnJztcbiAgICAgICAgdGhpcy5fQWdlbnROYW1lID0gaW5mby5BZ2VudE5hbWUgfHwgJyc7XG4gICAgICAgIHRoaXMuX0dlbmRlciA9IGluZm8uR2VuZGVyIHx8ICcnO1xuICAgICAgICB0aGlzLl9BcHBVc2VNb2RlID0gW2luZm8uQXBwVXNlTW9kZV0gfHwgW107XG4gICAgICAgIHRoaXMuX2V4cCA9IGluZm8uZXhwIHx8IG51bGw7XG4gICAgICAgIHRoaXMuX0dvYWxTaWduaW5nU3VwZXJ2aXNvciA9IGluZm8uR29hbFNpZ25pbmdTdXBlcnZpc29yIHx8IG51bGw7XG4gICAgICAgIHRoaXMuX0N1cnJlbnRKb2JTZW5pb3JpdHlNb250aCA9IGluZm8uQ3VycmVudEpvYlNlbmlvcml0eU1vbnRoIHx8IG51bGw7XG4gICAgICAgIHRoaXMuX0pvYkdyYWRlID0gaW5mby5Kb2JHcmFkZSB8fCBudWxsO1xuICAgICAgICB0aGlzLl9DdXJyZW50Sm9iT0JNb250aCA9IGluZm8uQ3VycmVudEpvYk9CTW9udGggfHwgbnVsbDtcbiAgICAgICAgdGhpcy5fT2ZmaWNlTmFtZSA9IGluZm8uT2ZmaWNlTmFtZSB8fCBudWxsO1xuICAgICAgICB0aGlzLl9SZWZlcmVuY2VUb2tlbiA9IGluZm8uUmVmZXJlbmNlVG9rZW4gfHwgbnVsbDtcbiAgICB9XG5cbn0iXX0=