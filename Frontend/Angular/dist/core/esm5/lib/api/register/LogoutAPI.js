/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from "../APIRequest";
var LogoutAPI = /** @class */ (function () {
    function LogoutAPI() {
        this.url = '';
        this.body = {};
        this.type = "GET";
        this.params = null;
    }
    /**
     * @return {?}
     */
    LogoutAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'Logout';
    };
    /**
     * @return {?}
     */
    LogoutAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/logout.json';
    };
    /**
     * @return {?}
     */
    LogoutAPI.prototype.getRequestData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requestData = new APIRequest();
        requestData.url = this.url;
        requestData.type = "POST";
        return requestData;
    };
    return LogoutAPI;
}());
export { LogoutAPI };
if (false) {
    /** @type {?} */
    LogoutAPI.prototype.url;
    /** @type {?} */
    LogoutAPI.prototype.body;
    /** @type {?} */
    LogoutAPI.prototype.type;
    /** @type {?} */
    LogoutAPI.prototype.params;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nb3V0QVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvTG9nb3V0QVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBRUU7UUFFTyxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixXQUFNLEdBQUcsSUFBSSxDQUFDO0lBTEwsQ0FBQzs7OztJQU9WLDhCQUFVOzs7SUFBakI7UUFDRSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7O0lBRU0sK0JBQVc7OztJQUFsQjtRQUNFLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQzs7OztJQUVNLGtDQUFjOzs7SUFBckI7O1lBQ00sV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFO1FBQ2xDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUMzQixXQUFXLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUMxQixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUgsZ0JBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDOzs7O0lBcEJDLHdCQUFnQjs7SUFDaEIseUJBQWlCOztJQUNqQix5QkFBb0I7O0lBQ3BCLDJCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tIFwiLi4vQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSVJlc3RmdWxBUEkgfSBmcm9tIFwiLi4vUmVzdGZ1bEFQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIi4uL01vY2tBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSBcIi4uL0FQSVJlcXVlc3RcIjtcblxuZXhwb3J0IGNsYXNzIExvZ291dEFQSSBpbXBsZW1lbnRzIElBUEksIElSZXN0ZnVsQVBJLCBJTW9ja0FQSSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgdXJsID0gJyc7XG4gIHB1YmxpYyBib2R5ID0ge307XG4gIHB1YmxpYyB0eXBlID0gXCJHRVRcIjtcbiAgcHVibGljIHBhcmFtcyA9IG51bGw7XG5cbiAgcHVibGljIGdldEFQSU5hbWUoKSB7XG4gICAgcmV0dXJuICdMb2dvdXQnO1xuICB9XG5cbiAgcHVibGljIGdldE1vY2tQYXRoKCkge1xuICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9sb2dvdXQuanNvbic7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVxdWVzdERhdGEoKSB7XG4gICAgbGV0IHJlcXVlc3REYXRhID0gbmV3IEFQSVJlcXVlc3QoKTtcbiAgICByZXF1ZXN0RGF0YS51cmwgPSB0aGlzLnVybDtcbiAgICByZXF1ZXN0RGF0YS50eXBlID0gXCJQT1NUXCI7XG4gICAgcmV0dXJuIHJlcXVlc3REYXRhO1xuICB9XG5cbn1cbiJdfQ==