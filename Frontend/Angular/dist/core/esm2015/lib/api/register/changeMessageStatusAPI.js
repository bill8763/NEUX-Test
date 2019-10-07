/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of, from } from 'rxjs';
import { EqualRestriction } from '../../device';
export class ChangeMessageStatusAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._messageID = null;
        this._col = null;
        this._val = null;
    }
    /**
     * @return {?}
     */
    get val() {
        return this._val;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set val(value) {
        this._val = value;
    }
    /**
     * @return {?}
     */
    get col() {
        return this._col;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set col(value) {
        this._col = value;
    }
    /**
     * @return {?}
     */
    get messageID() {
        return this._messageID;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set messageID(value) {
        this._messageID = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'ChangeMessageStatus';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        if (this._messageID && this._col && this._val) {
            return from(this._updateStatus(this._messageID, this._col, this._val));
        }
        else {
            return of(false);
        }
    }
    /**
     * @private
     * @param {?} messageID
     * @param {?} col
     * @param {?} val
     * @return {?}
     */
    _updateStatus(messageID, col, val) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let resp = null;
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            /** @type {?} */
            let Message = this.daoFactory.getDefaultTable('TW_LH_SD_Message');
            console.log("_updateStatus Message", Message);
            if (Message) {
                Message.addRestriction(new EqualRestriction("MessageID", [messageID]));
                /** @type {?} */
                let messageResp = yield dao.queryByTable(Message).toPromise();
                if (messageResp.Header["status"] && messageResp.Body.length > 0) {
                    Message.setValue(col, val);
                    resp = yield dao.updateByTable(Message).toPromise();
                }
            }
            console.log("_updateStatus resp", resp);
            return resp;
        });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlTWVzc2FnZVN0YXR1c0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL2NoYW5nZU1lc3NhZ2VTdGF0dXNBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU81QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFaEQsTUFBTTs7OztJQTBCRixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBeEJsQyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixTQUFJLEdBQUcsSUFBSSxDQUFDO0lBdUJwQixDQUFDOzs7O0lBckJELElBQVcsR0FBRztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDOzs7OztJQUNELElBQVcsR0FBRyxDQUFDLEtBQUs7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELElBQVcsR0FBRztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDOzs7OztJQUNELElBQVcsR0FBRyxDQUFDLEtBQUs7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUNELElBQVcsU0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFLO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFLRCxVQUFVO1FBQ04sT0FBTyxxQkFBcUIsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8scUNBQXFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELFVBQVU7UUFFTixJQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzFFO2FBQUk7WUFDRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUM7Ozs7Ozs7O0lBRWEsYUFBYSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsR0FBRzs7O2dCQUN2QyxJQUFJLEdBQUcsSUFBSTs7Z0JBQ1gsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFOztnQkFDckMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUMsT0FBTyxDQUFDLENBQUE7WUFDNUMsSUFBRyxPQUFPLEVBQUM7Z0JBQ1AsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7b0JBQ2xFLFdBQVcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFO2dCQUM3RCxJQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDO29CQUN6RCxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDdkQ7YUFDSjtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEMsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUFBO0NBRUo7Ozs7OztJQTdERyw0Q0FBMEI7Ozs7O0lBQzFCLHNDQUFvQjs7Ozs7SUFDcEIsc0NBQW9COzs7OztJQXNCUiw0Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4uL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tICcuLi9Nb2NrQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSAnLi4vU1FMaXRlQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5JztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9sYW5ndWFnZS90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEZXZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGV2aWNlL2RldmljZS5zZXJ2aWNlJztcbmltcG9ydCB7IEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tICcuLi8uLi9kZXZpY2UnO1xuXG5leHBvcnQgY2xhc3MgQ2hhbmdlTWVzc2FnZVN0YXR1c0FQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICAgIHByaXZhdGUgX21lc3NhZ2VJRCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfY29sID0gbnVsbDtcbiAgICBwcml2YXRlIF92YWwgPSBudWxsO1xuXG4gICAgcHVibGljIGdldCB2YWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWw7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdmFsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY29sKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGNvbCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jb2wgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBtZXNzYWdlSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlSUQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgbWVzc2FnZUlEKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21lc3NhZ2VJRCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdDaGFuZ2VNZXNzYWdlU3RhdHVzJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svYWRkQ2FsZW5kYXJFdmVudC5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgaWYodGhpcy5fbWVzc2FnZUlEICYmIHRoaXMuX2NvbCAmJiB0aGlzLl92YWwpe1xuICAgICAgICAgICAgcmV0dXJuIGZyb20odGhpcy5fdXBkYXRlU3RhdHVzKHRoaXMuX21lc3NhZ2VJRCwgdGhpcy5fY29sLCB0aGlzLl92YWwpKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlU3RhdHVzKG1lc3NhZ2VJRCwgY29sLCB2YWwpe1xuICAgICAgICBsZXQgcmVzcCA9IG51bGw7XG4gICAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICBsZXQgTWVzc2FnZSA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX01lc3NhZ2UnKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJfdXBkYXRlU3RhdHVzIE1lc3NhZ2VcIixNZXNzYWdlKVxuICAgICAgICBpZihNZXNzYWdlKXtcbiAgICAgICAgICAgIE1lc3NhZ2UuYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJNZXNzYWdlSURcIixbbWVzc2FnZUlEXSkpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VSZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShNZXNzYWdlKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIGlmKG1lc3NhZ2VSZXNwLkhlYWRlcltcInN0YXR1c1wiXSAmJiBtZXNzYWdlUmVzcC5Cb2R5Lmxlbmd0aD4wKXtcbiAgICAgICAgICAgICAgICBNZXNzYWdlLnNldFZhbHVlKGNvbCx2YWwpO1xuICAgICAgICAgICAgICAgIHJlc3AgPSBhd2FpdCBkYW8udXBkYXRlQnlUYWJsZShNZXNzYWdlKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIl91cGRhdGVTdGF0dXMgcmVzcFwiLCByZXNwKTtcbiAgICAgICAgcmV0dXJuIHJlc3A7XG4gICAgfVxuXG59XG4iXX0=