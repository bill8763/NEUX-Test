/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from "../APIRequest";
export class LogoutAPI {
    constructor() {
        this.url = '';
        this.body = {};
        this.type = "GET";
        this.params = null;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'Logout';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/logout.json';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.url = this.url;
        requestData.type = "POST";
        return requestData;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nb3V0QVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvTG9nb3V0QVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE1BQU07SUFFSjtRQUVPLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFdBQU0sR0FBRyxJQUFJLENBQUM7SUFMTCxDQUFDOzs7O0lBT1YsVUFBVTtRQUNmLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQzs7OztJQUVNLGNBQWM7O1lBQ2YsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFO1FBQ2xDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUMzQixXQUFXLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUMxQixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0NBRUY7OztJQXBCQyx3QkFBZ0I7O0lBQ2hCLHlCQUFpQjs7SUFDakIseUJBQW9COztJQUNwQiwyQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIi4uL0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElSZXN0ZnVsQVBJIH0gZnJvbSBcIi4uL1Jlc3RmdWxBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCIuLi9Nb2NrQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gXCIuLi9BUElSZXF1ZXN0XCI7XG5cbmV4cG9ydCBjbGFzcyBMb2dvdXRBUEkgaW1wbGVtZW50cyBJQVBJLCBJUmVzdGZ1bEFQSSwgSU1vY2tBUEkge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHVybCA9ICcnO1xuICBwdWJsaWMgYm9keSA9IHt9O1xuICBwdWJsaWMgdHlwZSA9IFwiR0VUXCI7XG4gIHB1YmxpYyBwYXJhbXMgPSBudWxsO1xuXG4gIHB1YmxpYyBnZXRBUElOYW1lKCkge1xuICAgIHJldHVybiAnTG9nb3V0JztcbiAgfVxuXG4gIHB1YmxpYyBnZXRNb2NrUGF0aCgpIHtcbiAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svbG9nb3V0Lmpzb24nO1xuICB9XG5cbiAgcHVibGljIGdldFJlcXVlc3REYXRhKCkge1xuICAgIGxldCByZXF1ZXN0RGF0YSA9IG5ldyBBUElSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdERhdGEudXJsID0gdGhpcy51cmw7XG4gICAgcmVxdWVzdERhdGEudHlwZSA9IFwiUE9TVFwiO1xuICAgIHJldHVybiByZXF1ZXN0RGF0YTtcbiAgfVxuXG59XG4iXX0=