/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of, from } from 'rxjs';
import { EqualRestriction } from '../../device';
var ChangeMessageStatusAPI = /** @class */ (function () {
    function ChangeMessageStatusAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this._messageID = null;
        this._col = null;
        this._val = null;
    }
    Object.defineProperty(ChangeMessageStatusAPI.prototype, "val", {
        get: /**
         * @return {?}
         */
        function () {
            return this._val;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._val = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeMessageStatusAPI.prototype, "col", {
        get: /**
         * @return {?}
         */
        function () {
            return this._col;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._col = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeMessageStatusAPI.prototype, "messageID", {
        get: /**
         * @return {?}
         */
        function () {
            return this._messageID;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._messageID = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ChangeMessageStatusAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'ChangeMessageStatus';
    };
    /**
     * @return {?}
     */
    ChangeMessageStatusAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/addCalendarEvent.json';
    };
    /**
     * @return {?}
     */
    ChangeMessageStatusAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        if (this._messageID && this._col && this._val) {
            return from(this._updateStatus(this._messageID, this._col, this._val));
        }
        else {
            return of(false);
        }
    };
    /**
     * @private
     * @param {?} messageID
     * @param {?} col
     * @param {?} val
     * @return {?}
     */
    ChangeMessageStatusAPI.prototype._updateStatus = /**
     * @private
     * @param {?} messageID
     * @param {?} col
     * @param {?} val
     * @return {?}
     */
    function (messageID, col, val) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var resp, dao, Message, messageResp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resp = null;
                        dao = this.daoFactory.getDefaultDao();
                        Message = this.daoFactory.getDefaultTable('TW_LH_SD_Message');
                        console.log("_updateStatus Message", Message);
                        if (!Message) return [3 /*break*/, 3];
                        Message.addRestriction(new EqualRestriction("MessageID", [messageID]));
                        return [4 /*yield*/, dao.queryByTable(Message).toPromise()];
                    case 1:
                        messageResp = _a.sent();
                        if (!(messageResp.Header["status"] && messageResp.Body.length > 0)) return [3 /*break*/, 3];
                        Message.setValue(col, val);
                        return [4 /*yield*/, dao.updateByTable(Message).toPromise()];
                    case 2:
                        resp = _a.sent();
                        _a.label = 3;
                    case 3:
                        console.log("_updateStatus resp", resp);
                        return [2 /*return*/, resp];
                }
            });
        });
    };
    return ChangeMessageStatusAPI;
}());
export { ChangeMessageStatusAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangeMessageStatusAPI.prototype._messageID;
    /**
     * @type {?}
     * @private
     */
    ChangeMessageStatusAPI.prototype._col;
    /**
     * @type {?}
     * @private
     */
    ChangeMessageStatusAPI.prototype._val;
    /**
     * @type {?}
     * @private
     */
    ChangeMessageStatusAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlTWVzc2FnZVN0YXR1c0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL2NoYW5nZU1lc3NhZ2VTdGF0dXNBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU81QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFaEQ7SUEwQkksZ0NBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUF4QmxDLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLFNBQUksR0FBRyxJQUFJLENBQUM7SUF1QnBCLENBQUM7SUFyQkQsc0JBQVcsdUNBQUc7Ozs7UUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7OztRQUNELFVBQWUsS0FBSztZQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FIQTtJQUtELHNCQUFXLHVDQUFHOzs7O1FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFDRCxVQUFlLEtBQUs7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BSEE7SUFJRCxzQkFBVyw2Q0FBUzs7OztRQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7OztRQUNELFVBQXFCLEtBQUs7WUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BSEE7Ozs7SUFRRCwyQ0FBVTs7O0lBQVY7UUFDSSxPQUFPLHFCQUFxQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDSSxPQUFPLHFDQUFxQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCwyQ0FBVTs7O0lBQVY7UUFFSSxJQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzFFO2FBQUk7WUFDRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUM7Ozs7Ozs7O0lBRWEsOENBQWE7Ozs7Ozs7SUFBM0IsVUFBNEIsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHOzs7Ozs7d0JBQ3ZDLElBQUksR0FBRyxJQUFJO3dCQUNYLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTt3QkFDckMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDO3dCQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFDLE9BQU8sQ0FBQyxDQUFBOzZCQUN6QyxPQUFPLEVBQVAsd0JBQU87d0JBQ04sT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEQscUJBQU0sR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQXpELFdBQVcsR0FBRyxTQUEyQzs2QkFDMUQsQ0FBQSxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQSxFQUF6RCx3QkFBeUQ7d0JBQ3hELE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQixxQkFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBbkQsSUFBSSxHQUFHLFNBQTRDLENBQUM7Ozt3QkFHNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDeEMsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFFTCw2QkFBQztBQUFELENBQUMsQUEvREQsSUErREM7Ozs7Ozs7SUE3REcsNENBQTBCOzs7OztJQUMxQixzQ0FBb0I7Ozs7O0lBQ3BCLHNDQUFvQjs7Ozs7SUFzQlIsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElBUEkgfSBmcm9tICcuLi9BUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSAnLi4vTW9ja0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gJy4uL1NRTGl0ZUFQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbGFuZ3VhZ2UvdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGV2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL2RldmljZS9kZXZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vLi4vZGV2aWNlJztcblxuZXhwb3J0IGNsYXNzIENoYW5nZU1lc3NhZ2VTdGF0dXNBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG5cbiAgICBwcml2YXRlIF9tZXNzYWdlSUQgPSBudWxsO1xuICAgIHByaXZhdGUgX2NvbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfdmFsID0gbnVsbDtcblxuICAgIHB1YmxpYyBnZXQgdmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHZhbCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNvbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbDtcbiAgICB9XG4gICAgcHVibGljIHNldCBjb2wodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY29sID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgbWVzc2FnZUlEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZUlEO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG1lc3NhZ2VJRCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tZXNzYWdlSUQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnQ2hhbmdlTWVzc2FnZVN0YXR1cyc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2FkZENhbGVuZGFyRXZlbnQuanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGlmKHRoaXMuX21lc3NhZ2VJRCAmJiB0aGlzLl9jb2wgJiYgdGhpcy5fdmFsKXtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKHRoaXMuX3VwZGF0ZVN0YXR1cyh0aGlzLl9tZXNzYWdlSUQsIHRoaXMuX2NvbCwgdGhpcy5fdmFsKSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgX3VwZGF0ZVN0YXR1cyhtZXNzYWdlSUQsIGNvbCwgdmFsKXtcbiAgICAgICAgbGV0IHJlc3AgPSBudWxsO1xuICAgICAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgbGV0IE1lc3NhZ2UgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9NZXNzYWdlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiX3VwZGF0ZVN0YXR1cyBNZXNzYWdlXCIsTWVzc2FnZSlcbiAgICAgICAgaWYoTWVzc2FnZSl7XG4gICAgICAgICAgICBNZXNzYWdlLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiTWVzc2FnZUlEXCIsW21lc3NhZ2VJRF0pKTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlUmVzcCA9IGF3YWl0IGRhby5xdWVyeUJ5VGFibGUoTWVzc2FnZSkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICBpZihtZXNzYWdlUmVzcC5IZWFkZXJbXCJzdGF0dXNcIl0gJiYgbWVzc2FnZVJlc3AuQm9keS5sZW5ndGg+MCl7XG4gICAgICAgICAgICAgICAgTWVzc2FnZS5zZXRWYWx1ZShjb2wsdmFsKTtcbiAgICAgICAgICAgICAgICByZXNwID0gYXdhaXQgZGFvLnVwZGF0ZUJ5VGFibGUoTWVzc2FnZSkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJfdXBkYXRlU3RhdHVzIHJlc3BcIiwgcmVzcCk7XG4gICAgICAgIHJldHVybiByZXNwO1xuICAgIH1cblxufVxuIl19