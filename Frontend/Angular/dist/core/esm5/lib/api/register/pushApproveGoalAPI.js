/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
var pushApproveGoalAPI = /** @class */ (function () {
    function pushApproveGoalAPI() {
        this.url = '';
        this.mainData = {};
    }
    /**
     * @return {?}
     */
    pushApproveGoalAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'pushApproveGoal';
    };
    /**
     * @return {?}
     */
    pushApproveGoalAPI.prototype.getRequestData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.mainData;
        requestData.type = "POST";
        return requestData;
    };
    /**
     * @return {?}
     */
    pushApproveGoalAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/logout.json';
    };
    return pushApproveGoalAPI;
}());
export { pushApproveGoalAPI };
if (false) {
    /** @type {?} */
    pushApproveGoalAPI.prototype.url;
    /** @type {?} */
    pushApproveGoalAPI.prototype.mainData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaEFwcHJvdmVHb2FsQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvcHVzaEFwcHJvdmVHb2FsQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDO0lBS0k7UUFITyxRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFFVixDQUFDOzs7O0lBRWpCLHVDQUFVOzs7SUFBVjtRQUNJLE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELDJDQUFjOzs7SUFBZDs7WUFDUSxXQUFXLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDbEMsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxXQUFXLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUMxQixPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0ksT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDOzs7O0lBcEJHLGlDQUF3Qjs7SUFDeEIsc0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4uL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVJlc3RmdWxBUEkgfSBmcm9tICcuLi9SZXN0ZnVsQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi4vQVBJUmVxdWVzdCc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tICcuLi9Nb2NrQVBJLmludGVyZmFjZSc7XG5cblxuZXhwb3J0IGNsYXNzIHB1c2hBcHByb3ZlR29hbEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJUmVzdGZ1bEFQSSB7XG5cbiAgICBwdWJsaWMgdXJsOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgbWFpbkRhdGE6IGFueSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGdldEFQSU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAncHVzaEFwcHJvdmVHb2FsJztcbiAgICB9XG5cbiAgICBnZXRSZXF1ZXN0RGF0YSgpIHtcbiAgICAgICAgbGV0IHJlcXVlc3REYXRhID0gbmV3IEFQSVJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdERhdGEudXJsID0gdGhpcy51cmw7XG4gICAgICAgIHJlcXVlc3REYXRhLmJvZHkgPSB0aGlzLm1haW5EYXRhO1xuICAgICAgICByZXF1ZXN0RGF0YS50eXBlID0gXCJQT1NUXCI7XG4gICAgICAgIHJldHVybiByZXF1ZXN0RGF0YTtcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2xvZ291dC5qc29uJztcbiAgICB9XG59Il19