/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from "../APIRequest";
export class LoginAPI {
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
        return 'onlineLogin';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/onlineLogin.json';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.body = this.body;
        requestData.url = this.url;
        requestData.type = "POST";
        requestData.params = this.params;
        return requestData;
    }
}
if (false) {
    /** @type {?} */
    LoginAPI.prototype.url;
    /** @type {?} */
    LoginAPI.prototype.body;
    /** @type {?} */
    LoginAPI.prototype.type;
    /** @type {?} */
    LoginAPI.prototype.params;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5BUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9Mb2dpbkFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxNQUFNO0lBRUo7UUFFTyxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixXQUFNLEdBQUcsSUFBSSxDQUFDO0lBTEwsQ0FBQzs7OztJQU9WLFVBQVU7UUFDZixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixPQUFPLGdDQUFnQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFTSxjQUFjOztZQUNmLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUNsQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLFdBQVcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0NBRUY7OztJQXRCQyx1QkFBZ0I7O0lBQ2hCLHdCQUFpQjs7SUFDakIsd0JBQW9COztJQUNwQiwwQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBJQVBJIH0gZnJvbSBcIi4uL0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElSZXN0ZnVsQVBJIH0gZnJvbSBcIi4uL1Jlc3RmdWxBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCIuLi9Nb2NrQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gXCIuLi9BUElSZXF1ZXN0XCI7XG5cbmV4cG9ydCBjbGFzcyBMb2dpbkFQSSBpbXBsZW1lbnRzIElBUEksIElSZXN0ZnVsQVBJLCBJTW9ja0FQSSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgdXJsID0gJyc7XG4gIHB1YmxpYyBib2R5ID0ge307XG4gIHB1YmxpYyB0eXBlID0gXCJHRVRcIjtcbiAgcHVibGljIHBhcmFtcyA9IG51bGw7XG5cbiAgcHVibGljIGdldEFQSU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbmxpbmVMb2dpbic7XG4gIH1cblxuICBwdWJsaWMgZ2V0TW9ja1BhdGgoKSB7XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL29ubGluZUxvZ2luLmpzb24nO1xuICB9XG5cbiAgcHVibGljIGdldFJlcXVlc3REYXRhKCkge1xuICAgIGxldCByZXF1ZXN0RGF0YSA9IG5ldyBBUElSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdERhdGEuYm9keSA9IHRoaXMuYm9keTtcbiAgICByZXF1ZXN0RGF0YS51cmwgPSB0aGlzLnVybDtcbiAgICByZXF1ZXN0RGF0YS50eXBlID0gXCJQT1NUXCI7XG4gICAgcmVxdWVzdERhdGEucGFyYW1zID0gdGhpcy5wYXJhbXM7XG4gICAgcmV0dXJuIHJlcXVlc3REYXRhO1xuICB9XG5cbn1cblxuIl19