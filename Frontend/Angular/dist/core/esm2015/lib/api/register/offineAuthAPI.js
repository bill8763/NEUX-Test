/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { from } from "rxjs";
import { EqualRestriction } from "../../device/sqlite/restrictions/EqualRestriction";
export class OfflineAuthAPI {
    /**
     * @param {?} daoFactory
     * @param {?} APP_CONFIG
     */
    constructor(daoFactory, APP_CONFIG) {
        this.daoFactory = daoFactory;
        this.APP_CONFIG = APP_CONFIG;
        this.token = '';
        this.failTry = null;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'offlineAuth';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        // return sha-256: "test||test"
        return from(this._offlineAuth());
    }
    /**
     * @private
     * @return {?}
     */
    _offlineAuth() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let env = this.APP_CONFIG.ENV;
            this.failTry = this.APP_CONFIG[env].OFFLINE_LOGIN_MAX_TIMES || 999;
            /** @type {?} */
            let authResp = null;
            /** @type {?} */
            let infoObj = this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
            /** @type {?} */
            let dao = this.daoFactory.getDao("Profile");
            /** @type {?} */
            let resp = yield dao.queryByTable(infoObj).toPromise();
            console.log('query device info resp:', resp);
            /** @type {?} */
            let body = resp.Body;
            /** @type {?} */
            let failCount = parseInt(body.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.Category == "OfflineLoginFailCount")).map((/**
             * @param {?} x
             * @return {?}
             */
            x => JSON.parse(x.CategoryVal)["count"]))[0]);
            /** @type {?} */
            let offline_token = body.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.Category == "OfflineValidationToken")).map((/**
             * @param {?} x
             * @return {?}
             */
            x => JSON.parse(x.CategoryVal)["token"]))[0];
            /** @type {?} */
            let info_token = body.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.Category == "OfflineValidationToken")).map((/**
             * @param {?} x
             * @return {?}
             */
            x => JSON.parse(x.CategoryVal)["infoToken"]))[0];
            /** @type {?} */
            let lastLoginTIme = body.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.Category == "OfflineValidationToken")).map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.UpdateTime))[0];
            console.group("offline auth:");
            console.log("failCount:", failCount);
            console.log("offline_token:", offline_token);
            console.log('this.token:', this.token);
            console.log("lastLoginTime:", lastLoginTIme);
            console.groupEnd();
            if (offline_token == "" || (Date.now() - lastLoginTIme) >= 86400000) {
                authResp = { isSuccess: false, message: 'First_Login_Must_Online' };
            }
            else if (failCount >= this.failTry) {
                authResp = { isSuccess: false, message: "Wrong_Counts_Over_Max", failCount: -1 };
            }
            else {
                console.log('offline fail count:', failCount);
                if (this.token === offline_token) {
                    //offline login success, set count to zero
                    infoObj.setValue("CategoryVal", '{"count":0}');
                    infoObj.addRestriction(new EqualRestriction("Category", ["OfflineLoginFailCount"]));
                    /** @type {?} */
                    let setCountResp = yield dao.updateByTable(infoObj).toPromise();
                    console.log('set count to zero resp:', setCountResp);
                    authResp = { isSuccess: true, token: info_token };
                }
                else {
                    /** @type {?} */
                    let addFailCount = failCount + 1;
                    infoObj.setValue("CategoryVal", `{"count":${addFailCount}}`);
                    infoObj.addRestriction(new EqualRestriction("Category", ["OfflineLoginFailCount"]));
                    /** @type {?} */
                    let setCountResp = yield dao.updateByTable(infoObj).toPromise();
                    console.log('plus one count:', setCountResp);
                    authResp = { isSuccess: false, message: "Offline_Login_Locked", failCount: addFailCount };
                }
            }
            return authResp;
        });
    }
}
if (false) {
    /** @type {?} */
    OfflineAuthAPI.prototype.token;
    /**
     * @type {?}
     * @private
     */
    OfflineAuthAPI.prototype.failTry;
    /**
     * @type {?}
     * @private
     */
    OfflineAuthAPI.prototype.daoFactory;
    /**
     * @type {?}
     * @private
     */
    OfflineAuthAPI.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmaW5lQXV0aEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL29mZmluZUF1dGhBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQWtCLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUk1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUVyRixNQUFNOzs7OztJQUdGLFlBQ1ksVUFBc0IsRUFDdEIsVUFBZTtRQURmLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUtwQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1YsWUFBTyxHQUFXLElBQUksQ0FBQztJQUgvQixDQUFDOzs7O0lBS0QsVUFBVTtRQUNOLE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFDRCxVQUFVO1FBQ04sK0JBQStCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBRXJDLENBQUM7Ozs7O0lBRWEsWUFBWTs7O2dCQUNsQixHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyx1QkFBdUIsSUFBSSxHQUFHLENBQUM7O2dCQUMvRCxRQUFRLEdBQUcsSUFBSTs7Z0JBQ2YsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQzs7Z0JBQ3BFLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7O2dCQUN2QyxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUN0RCxPQUFPLENBQUMs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QUFHLENBQUMseUJBQXlCLEVBQUUsWUFBWSxDQUFDLENBQUM7b0JBQ3JELFFBQVEsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDO2lCQUNyRDtxQkFDSTs7d0JBQ0csWUFBWSxHQUFHLFNBQVMsR0FBRyxDQUFDO29CQUNoQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxZQUFZLFlBQVksR0FBRyxDQUFDLENBQUM7b0JBQzdELE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7d0JBQ2hGLFlBQVksR0FBRyxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFO29CQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUM3QyxRQUFRLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUM7aUJBQzdGO2FBQ0o7WUFFRCxPQUFPLFFBQVEsQ0FBQztRQUVwQixDQUFDO0tBQUE7Q0FDSjs7O0lBakVHLCtCQUFrQjs7Ozs7SUFDbEIsaUNBQStCOzs7OztJQVAzQixvQ0FBOEI7Ozs7O0lBQzlCLG9DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIGZyb20gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSUFQSSB9IGZyb20gXCIuLi9BUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSBcIi4uL1NRTGl0ZUFQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5XCI7XG5pbXBvcnQgeyBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0VxdWFsUmVzdHJpY3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIE9mZmxpbmVBdXRoQVBJIGltcGxlbWVudHMgSUFQSSwgSVNRTGl0ZUFQSSB7XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnksXG4gICAgICAgIHByaXZhdGUgQVBQX0NPTkZJRzogYW55XG4gICAgKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9rZW4gPSAnJztcbiAgICBwcml2YXRlIGZhaWxUcnk6IG51bWJlciA9IG51bGw7XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnb2ZmbGluZUF1dGgnO1xuICAgIH1cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIC8vIHJldHVybiBzaGEtMjU2OiBcInRlc3R8fHRlc3RcIlxuICAgICAgICByZXR1cm4gZnJvbSh0aGlzLl9vZmZsaW5lQXV0aCgpKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgX29mZmxpbmVBdXRoKCkge1xuICAgICAgICBsZXQgZW52ID0gdGhpcy5BUFBfQ09ORklHLkVOVjtcbiAgICAgICAgdGhpcy5mYWlsVHJ5ID0gdGhpcy5BUFBfQ09ORklHW2Vudl0uT0ZGTElORV9MT0dJTl9NQVhfVElNRVMgfHwgOTk5O1xuICAgICAgICBsZXQgYXV0aFJlc3AgPSBudWxsO1xuICAgICAgICBsZXQgaW5mb09iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXRUYWJsZShcIlByb2ZpbGVcIiwgXCJUV19MSF9TRF9EZXZpY2VJbmZvXCIpO1xuICAgICAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERhbyhcIlByb2ZpbGVcIik7XG4gICAgICAgIGxldCByZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShpbmZvT2JqKS50b1Byb21pc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3F1ZXJ5IGRldmljZSBpbmZvIHJlc3A6JywgcmVzcCk7XG5cbiAgICAgICAgbGV0IGJvZHkgPSByZXNwLkJvZHk7XG4gICAgICAgIGxldCBmYWlsQ291bnQgPSBwYXJzZUludChib2R5LmZpbHRlcih4ID0+IHguQ2F0ZWdvcnkgPT0gXCJPZmZsaW5lTG9naW5GYWlsQ291bnRcIikubWFwKHggPT4gSlNPTi5wYXJzZSh4LkNhdGVnb3J5VmFsKVtcImNvdW50XCJdKVswXSk7XG4gICAgICAgIGxldCBvZmZsaW5lX3Rva2VuID0gYm9keS5maWx0ZXIoeCA9PiB4LkNhdGVnb3J5ID09IFwiT2ZmbGluZVZhbGlkYXRpb25Ub2tlblwiKS5tYXAoeCA9PiBKU09OLnBhcnNlKHguQ2F0ZWdvcnlWYWwpW1widG9rZW5cIl0pWzBdO1xuICAgICAgICBsZXQgaW5mb190b2tlbiA9IGJvZHkuZmlsdGVyKHggPT4geC5DYXRlZ29yeSA9PSBcIk9mZmxpbmVWYWxpZGF0aW9uVG9rZW5cIikubWFwKHggPT4gSlNPTi5wYXJzZSh4LkNhdGVnb3J5VmFsKVtcImluZm9Ub2tlblwiXSlbMF07XG4gICAgICAgIGxldCBsYXN0TG9naW5USW1lID0gYm9keS5maWx0ZXIoeCA9PiB4LkNhdGVnb3J5ID09IFwiT2ZmbGluZVZhbGlkYXRpb25Ub2tlblwiKS5tYXAoeCA9PiB4LlVwZGF0ZVRpbWUpWzBdO1xuXG5cbiAgICAgICAgY29uc29sZS5ncm91cChcIm9mZmxpbmUgYXV0aDpcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbENvdW50OlwiLCBmYWlsQ291bnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9mZmxpbmVfdG9rZW46XCIsIG9mZmxpbmVfdG9rZW4pO1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcy50b2tlbjonLCB0aGlzLnRva2VuKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJsYXN0TG9naW5UaW1lOlwiLCBsYXN0TG9naW5USW1lKTtcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuXG5cbiAgICAgICAgaWYgKG9mZmxpbmVfdG9rZW4gPT0gXCJcIiB8fCAoRGF0ZS5ub3coKSAtIGxhc3RMb2dpblRJbWUpID49IDg2NDAwMDAwKSB7XG4gICAgICAgICAgICBhdXRoUmVzcCA9IHsgaXNTdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ZpcnN0X0xvZ2luX011c3RfT25saW5lJyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZhaWxDb3VudCA+PSB0aGlzLmZhaWxUcnkpIHtcbiAgICAgICAgICAgIGF1dGhSZXNwID0geyBpc1N1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIldyb25nX0NvdW50c19PdmVyX01heFwiLCBmYWlsQ291bnQ6IC0xfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvZmZsaW5lIGZhaWwgY291bnQ6JywgZmFpbENvdW50KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2VuID09PSBvZmZsaW5lX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgLy9vZmZsaW5lIGxvZ2luIHN1Y2Nlc3MsIHNldCBjb3VudCB0byB6ZXJvXG4gICAgICAgICAgICAgICAgaW5mb09iai5zZXRWYWx1ZShcIkNhdGVnb3J5VmFsXCIsICd7XCJjb3VudFwiOjB9Jyk7XG4gICAgICAgICAgICAgICAgaW5mb09iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIkNhdGVnb3J5XCIsIFtcIk9mZmxpbmVMb2dpbkZhaWxDb3VudFwiXSkpO1xuICAgICAgICAgICAgICAgIGxldCBzZXRDb3VudFJlc3AgPSBhd2FpdCBkYW8udXBkYXRlQnlUYWJsZShpbmZvT2JqKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0IGNvdW50IHRvIHplcm8gcmVzcDonLCBzZXRDb3VudFJlc3ApO1xuICAgICAgICAgICAgICAgIGF1dGhSZXNwID0geyBpc1N1Y2Nlc3M6IHRydWUsIHRva2VuOiBpbmZvX3Rva2VuIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgYWRkRmFpbENvdW50ID0gZmFpbENvdW50ICsgMTtcbiAgICAgICAgICAgICAgICBpbmZvT2JqLnNldFZhbHVlKFwiQ2F0ZWdvcnlWYWxcIiwgYHtcImNvdW50XCI6JHthZGRGYWlsQ291bnR9fWApO1xuICAgICAgICAgICAgICAgIGluZm9PYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJDYXRlZ29yeVwiLCBbXCJPZmZsaW5lTG9naW5GYWlsQ291bnRcIl0pKTtcbiAgICAgICAgICAgICAgICBsZXQgc2V0Q291bnRSZXNwID0gYXdhaXQgZGFvLnVwZGF0ZUJ5VGFibGUoaW5mb09iaikudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsdXMgb25lIGNvdW50OicsIHNldENvdW50UmVzcCk7XG4gICAgICAgICAgICAgICAgYXV0aFJlc3AgPSB7IGlzU3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiT2ZmbGluZV9Mb2dpbl9Mb2NrZWRcIiwgZmFpbENvdW50OiBhZGRGYWlsQ291bnQgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhdXRoUmVzcDtcblxuICAgIH1cbn1cbiJdfQ==