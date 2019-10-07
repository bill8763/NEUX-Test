/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '../../device/sqlite/ClientCustomDao';
import { EqualRestriction } from '../../device/sqlite/restrictions/EqualRestriction';
import { LimitRestriction } from '../../device/sqlite/restrictions/LimitRestriction';
import { OffsetRestriction } from '../../device/sqlite/restrictions/OffsetRestriction';
import { StringUtils } from '../../utils/StringUtils';
import { OrderByRestriction } from '../../device';
export class DashboardGetMessageListAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._isPopup = null;
        this._isShow = null;
    }
    /**
     * @return {?}
     */
    get isShow() {
        return this._isShow;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isShow(value) {
        this._isShow = value;
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    setKeyword(keyword) {
        this._keyword = keyword;
    }
    /**
     * @param {?} pageInfo
     * @return {?}
     */
    setPageInfo(pageInfo) {
        this._pageInfo = pageInfo;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setIsPopup(val) {
        this._isPopup = val;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getDashboardMessageList';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getDashboardMessageList.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                //save customer data
                /** @type {?} */
                let messageObj = this.daoFactory.getDefaultTable("TW_LH_SD_Message");
                if (messageObj) {
                    dao = new ClientCustomDao(dao);
                    if (StringUtils.isNotEmpty(this._keyword)) {
                        if (this._keyword == 'All') { }
                        else if (this._keyword == 'UnRead') {
                            messageObj.addRestriction(new EqualRestriction("Status", [this._keyword]));
                        }
                        else if (this._keyword === 'PendingApproval') {
                            messageObj.addRestriction(new EqualRestriction("MessageCategory", ['GoalSetting']));
                            messageObj.addRestriction(new EqualRestriction("MessageType", ['Need_Goal_Approve']));
                            messageObj.addRestriction(new EqualRestriction("LinkStatus", ['Approve']));
                        }
                        else if (this._keyword == 'Customer' || this._keyword == 'Calendar' || this._keyword == 'GoalSetting' || this._keyword == 'Progress') {
                            messageObj.addRestriction(new EqualRestriction("MessageCategory", [this._keyword]));
                        }
                    }
                    if (this._isPopup !== null) {
                        /** @type {?} */
                        let isPopup = this._isPopup ? 'Y' : 'N';
                        messageObj.addRestriction(new EqualRestriction("IsPopup", [isPopup]));
                    }
                    if (this._isShow !== null) {
                        /** @type {?} */
                        let isShow = this._isShow ? 'Y' : 'N';
                        messageObj.addRestriction(new EqualRestriction("IsShow", [isShow]));
                    }
                    //add page limit
                    if (this._pageInfo) {
                        messageObj.addRestriction(new LimitRestriction([this._pageInfo.pageSize]));
                        messageObj.addRestriction(new OffsetRestriction([(this._pageInfo.page - 1) * this._pageInfo.pageSize]));
                    }
                    //add order
                    messageObj.addRestriction(new OrderByRestriction([{ column: 'MessageTime', order: 'DESC' }]));
                    dao.queryByTable(messageObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
                        console.log("queryByTable: ", JSON.stringify(resp));
                        observer.next(resp);
                        observer.complete();
                    }));
                }
                else {
                    observer.next(false);
                    observer.complete();
                }
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DashboardGetMessageListAPI.prototype._keyword;
    /**
     * @type {?}
     * @private
     */
    DashboardGetMessageListAPI.prototype._pageInfo;
    /**
     * @type {?}
     * @private
     */
    DashboardGetMessageListAPI.prototype._isPopup;
    /**
     * @type {?}
     * @private
     */
    DashboardGetMessageListAPI.prototype._isShow;
    /**
     * @type {?}
     * @private
     */
    DashboardGetMessageListAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFzaGJvYXJkR2V0TWVzc2FnZUxpc3RBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9EYXNoYm9hcmRHZXRNZXNzYWdlTGlzdEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU1sQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsRCxNQUFNOzs7O0lBR0YsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQU1sQyxhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFlBQU8sR0FBWSxJQUFJLENBQUM7SUFMaEMsQ0FBQzs7OztJQU9ELElBQVcsTUFBTTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxRQUFrQjtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxH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QyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzNHO29CQUVELFdBQVc7b0JBQ1gsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFFN0YsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTOzs7O29CQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNwRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3hCLENBQUMsRUFBQyxDQUFDO2lCQUNOO3FCQUNJO29CQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDdkI7YUFFSjtpQkFDSTtnQkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkI7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjs7Ozs7O0lBaEdHLDhDQUF5Qjs7Ozs7SUFDekIsK0NBQTRCOzs7OztJQUM1Qiw4Q0FBaUM7Ozs7O0lBQ2pDLDZDQUFnQzs7Ozs7SUFQcEIsZ0RBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4uL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tICcuLi9Nb2NrQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSAnLi4vU1FMaXRlQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5JztcbmltcG9ydCB7IFBhZ2VJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGFnZUluZm8nO1xuaW1wb3J0IHsgQ2xpZW50Q3VzdG9tRGFvIH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9DbGllbnRDdXN0b21EYW8nO1xuaW1wb3J0IHsgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0VxdWFsUmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgTGltaXRSZXN0cmljdGlvbiB9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0xpbWl0UmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgT2Zmc2V0UmVzdHJpY3Rpb24gfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9PZmZzZXRSZXN0cmljdGlvbic7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL1N0cmluZ1V0aWxzJztcbmltcG9ydCB7IE9yZGVyQnlSZXN0cmljdGlvbiB9IGZyb20gJy4uLy4uL2RldmljZSc7XG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRHZXRNZXNzYWdlTGlzdEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF9rZXl3b3JkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGFnZUluZm86IFBhZ2VJbmZvO1xuICAgIHByaXZhdGUgX2lzUG9wdXA6IGJvb2xlYW4gPSBudWxsO1xuICAgIHByaXZhdGUgX2lzU2hvdzogYm9vbGVhbiA9IG51bGw7XG5cbiAgICBwdWJsaWMgZ2V0IGlzU2hvdygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvdztcbiAgICB9XG4gICAgcHVibGljIHNldCBpc1Nob3codmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNTaG93ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0S2V5d29yZChrZXl3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fa2V5d29yZCA9IGtleXdvcmQ7XG4gICAgfVxuXG4gICAgc2V0UGFnZUluZm8ocGFnZUluZm86IFBhZ2VJbmZvKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VJbmZvID0gcGFnZUluZm87XG4gICAgfVxuXG4gICAgc2V0SXNQb3B1cCh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNQb3B1cCA9IHZhbDtcbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnZ2V0RGFzaGJvYXJkTWVzc2FnZUxpc3QnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXREYXNoYm9hcmRNZXNzYWdlTGlzdC5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgaWYgKGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIC8vc2F2ZSBjdXN0b21lciBkYXRhXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZU9iaikge1xuXG4gICAgICAgICAgICAgICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLl9rZXl3b3JkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2tleXdvcmQgPT0gJ0FsbCcpIHsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fa2V5d29yZCA9PSAnVW5SZWFkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJTdGF0dXNcIiwgW3RoaXMuX2tleXdvcmRdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuX2tleXdvcmQgPT09ICdQZW5kaW5nQXBwcm92YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIk1lc3NhZ2VDYXRlZ29yeVwiLCBbJ0dvYWxTZXR0aW5nJ10pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiTWVzc2FnZVR5cGVcIiwgWydOZWVkX0dvYWxfQXBwcm92ZSddKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIkxpbmtTdGF0dXNcIiwgWydBcHByb3ZlJ10pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fa2V5d29yZCA9PSAnQ3VzdG9tZXInIHx8IHRoaXMuX2tleXdvcmQgPT0gJ0NhbGVuZGFyJyB8fCB0aGlzLl9rZXl3b3JkID09ICdHb2FsU2V0dGluZycgfHwgdGhpcy5fa2V5d29yZCA9PSAnUHJvZ3Jlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIk1lc3NhZ2VDYXRlZ29yeVwiLCBbdGhpcy5fa2V5d29yZF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc1BvcHVwICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNQb3B1cCA9IHRoaXMuX2lzUG9wdXAgPyAnWScgOiAnTic7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiSXNQb3B1cFwiLCBbaXNQb3B1cF0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc1Nob3cgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc1Nob3cgPSB0aGlzLl9pc1Nob3cgPyAnWScgOiAnTic7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiSXNTaG93XCIsIFtpc1Nob3ddKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL2FkZCBwYWdlIGxpbWl0XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYWdlSW5mbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU9iai5hZGRSZXN0cmljdGlvbihuZXcgTGltaXRSZXN0cmljdGlvbihbdGhpcy5fcGFnZUluZm8ucGFnZVNpemVdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBPZmZzZXRSZXN0cmljdGlvbihbKHRoaXMuX3BhZ2VJbmZvLnBhZ2UgLSAxKSAqIHRoaXMuX3BhZ2VJbmZvLnBhZ2VTaXplXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9hZGQgb3JkZXJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU9iai5hZGRSZXN0cmljdGlvbihuZXcgT3JkZXJCeVJlc3RyaWN0aW9uKFt7IGNvbHVtbjogJ01lc3NhZ2VUaW1lJywgb3JkZXI6ICdERVNDJyB9XSkpXG5cbiAgICAgICAgICAgICAgICAgICAgZGFvLnF1ZXJ5QnlUYWJsZShtZXNzYWdlT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicXVlcnlCeVRhYmxlOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzcCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=