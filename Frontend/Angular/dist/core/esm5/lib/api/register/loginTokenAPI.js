/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable, of } from "rxjs";
import { EqualRestriction } from "../../device/sqlite/restrictions/EqualRestriction";
var saveLoginTokenAPI = /** @class */ (function () {
    function saveLoginTokenAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this._encryptedAuth = '';
        this._infoToken = '';
    }
    Object.defineProperty(saveLoginTokenAPI.prototype, "infoToken", {
        get: /**
         * @return {?}
         */
        function () {
            return this._infoToken;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._infoToken = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(saveLoginTokenAPI.prototype, "encryptedAuth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._encryptedAuth;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._encryptedAuth = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    saveLoginTokenAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'saveLoginToken';
    };
    /**
     * @return {?}
     */
    saveLoginTokenAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // return sha-256: "test||test"
        /** @type {?} */
        var infoObj = this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
        console.log("infoObj:", infoObj);
        /** @type {?} */
        var dao = this.daoFactory.getDao("Profile");
        /** @type {?} */
        var configVal = JSON.stringify({ token: this.encryptedAuth, infoToken: this._infoToken });
        if (infoObj != undefined) {
            return Observable.create((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                infoObj.setValue("CategoryVal", configVal);
                infoObj.setValue("UpdateTime", Date.now());
                infoObj.addRestriction(new EqualRestriction("Category", ["OfflineValidationToken"]));
                dao.updateByTable(infoObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    console.log("save token resp:", resp);
                    /** @type {?} */
                    var infoTableObj = _this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
                    infoTableObj.setValue("CategoryVal", '{"count":0}');
                    infoTableObj.addRestriction(new EqualRestriction("Category", ["OfflineLoginFailCount"]));
                    dao.updateByTable(infoTableObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        observer.next(resp);
                        observer.complete();
                    }));
                }));
            }));
        }
        else {
            return of(false);
        }
    };
    /**
     * @return {?}
     */
    saveLoginTokenAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/saveLoginToken.json';
    };
    return saveLoginTokenAPI;
}());
export { saveLoginTokenAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    saveLoginTokenAPI.prototype._encryptedAuth;
    /**
     * @type {?}
     * @private
     */
    saveLoginTokenAPI.prototype._infoToken;
    /**
     * @type {?}
     * @private
     */
    saveLoginTokenAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5Ub2tlbkFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL2xvZ2luVG9rZW5BUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBS3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRXJGO0lBRUksMkJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDbEMsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQUZjLENBQUM7SUFJL0Msc0JBQVcsd0NBQVM7Ozs7UUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7Ozs7UUFDRCxVQUFxQixLQUFhO1lBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7OztPQUhBO0lBS0Qsc0JBQVcsNENBQWE7Ozs7UUFBeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUFDRCxVQUF5QixLQUFhO1lBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7OztPQUhBOzs7O0lBS0Qsc0NBQVU7OztJQUFWO1FBQ0ksT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDOzs7O0lBQ0Qsc0NBQVU7OztJQUFWO1FBQUEsaUJBMkJDOzs7WUF6Qk8sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQztRQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQzs7WUFDN0IsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7WUFDdkMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pGLElBQUksT0FBTyxJQUFJLFNBQVMsRUFBRTtZQUN0QixPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQyxRQUFRO2dCQUM5QixPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzNDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckYsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUEsSUFBSTtvQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQzs7d0JBQ2xDLFlBQVksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUM7b0JBQzdFLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO29CQUNwRCxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pGLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUzs7OztvQkFBQyxVQUFBLElBQUk7d0JBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQyxFQUFDLENBQUM7Z0JBQ1AsQ0FBQyxFQUFDLENBQUE7WUFFTixDQUFDLEVBQUMsQ0FBQztTQUNOO2FBQ0k7WUFDRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDSSxPQUFPLG1DQUFtQyxDQUFBO0lBQzlDLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7Ozs7Ozs7SUFwREcsMkNBQW9DOzs7OztJQUNwQyx1Q0FBZ0M7Ozs7O0lBRnBCLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSUFQSSB9IGZyb20gXCIuLi9BUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCIuLi9Nb2NrQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gXCIuLi9TUUxpdGVBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeVwiO1xuaW1wb3J0IHsgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9FcXVhbFJlc3RyaWN0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBzYXZlTG9naW5Ub2tlbkFQSSBpbXBsZW1lbnRzIElBUEksIElTUUxpdGVBUEksIElNb2NrQVBJIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkgeyB9XG4gICAgcHJpdmF0ZSBfZW5jcnlwdGVkQXV0aDogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfaW5mb1Rva2VuOiBzdHJpbmcgPSAnJztcblxuICAgIHB1YmxpYyBnZXQgaW5mb1Rva2VuKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmZvVG9rZW47XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgaW5mb1Rva2VuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faW5mb1Rva2VuID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBlbmNyeXB0ZWRBdXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbmNyeXB0ZWRBdXRoO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGVuY3J5cHRlZEF1dGgodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9lbmNyeXB0ZWRBdXRoID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ3NhdmVMb2dpblRva2VuJztcbiAgICB9XG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICAvLyByZXR1cm4gc2hhLTI1NjogXCJ0ZXN0fHx0ZXN0XCJcbiAgICAgICAgbGV0IGluZm9PYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0VGFibGUoXCJQcm9maWxlXCIsIFwiVFdfTEhfU0RfRGV2aWNlSW5mb1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmZvT2JqOlwiLCBpbmZvT2JqKTtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREYW8oXCJQcm9maWxlXCIpO1xuICAgICAgICBsZXQgY29uZmlnVmFsID0gSlNPTi5zdHJpbmdpZnkoeyB0b2tlbjogdGhpcy5lbmNyeXB0ZWRBdXRoLCBpbmZvVG9rZW46IHRoaXMuX2luZm9Ub2tlbiB9KTtcbiAgICAgICAgaWYgKGluZm9PYmogIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaW5mb09iai5zZXRWYWx1ZShcIkNhdGVnb3J5VmFsXCIsIGNvbmZpZ1ZhbCk7XG4gICAgICAgICAgICAgICAgaW5mb09iai5zZXRWYWx1ZShcIlVwZGF0ZVRpbWVcIiwgRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICAgICAgaW5mb09iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIkNhdGVnb3J5XCIsIFtcIk9mZmxpbmVWYWxpZGF0aW9uVG9rZW5cIl0pKTtcbiAgICAgICAgICAgICAgICBkYW8udXBkYXRlQnlUYWJsZShpbmZvT2JqKS5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2F2ZSB0b2tlbiByZXNwOlwiLCByZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZm9UYWJsZU9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXRUYWJsZShcIlByb2ZpbGVcIiwgXCJUV19MSF9TRF9EZXZpY2VJbmZvXCIpO1xuICAgICAgICAgICAgICAgICAgICBpbmZvVGFibGVPYmouc2V0VmFsdWUoXCJDYXRlZ29yeVZhbFwiLCAne1wiY291bnRcIjowfScpO1xuICAgICAgICAgICAgICAgICAgICBpbmZvVGFibGVPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJDYXRlZ29yeVwiLCBbXCJPZmZsaW5lTG9naW5GYWlsQ291bnRcIl0pKTtcbiAgICAgICAgICAgICAgICAgICAgZGFvLnVwZGF0ZUJ5VGFibGUoaW5mb1RhYmxlT2JqKS5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL3NhdmVMb2dpblRva2VuLmpzb24nXG4gICAgfVxufVxuIl19