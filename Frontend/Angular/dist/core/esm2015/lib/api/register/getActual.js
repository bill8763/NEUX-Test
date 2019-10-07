/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
import { HttpParams } from '@angular/common/http';
export class getActualAPI {
    /**
     * @param {?} APP_CONFIG
     */
    constructor(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this.agentID = '';
        this.url = '';
        this.lastUpdateTime = '2019-01-01 00:00:00';
    }
    /**
     * @param {?} agent_id
     * @return {?}
     */
    setAgentID(agent_id) {
        this.agentID = agent_id;
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return 'assets/mock/Actual.json';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getActual';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        /** @type {?} */
        let env = this.APP_CONFIG.ENV;
        if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
            this.url = this.APP_CONFIG[env].API_URL.getActual;
            requestData.url = this.url + '/' + this.agentID;
        }
        else {
            requestData.url = this.url;
        }
        requestData.type = "GET";
        requestData.params = new HttpParams()
            .set('lastUpdateTime', this.lastUpdateTime);
        return requestData;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    getActualAPI.prototype.agentID;
    /** @type {?} */
    getActualAPI.prototype.url;
    /** @type {?} */
    getActualAPI.prototype.lastUpdateTime;
    /**
     * @type {?}
     * @private
     */
    getActualAPI.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWN0dWFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvZ2V0QWN0dWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxNQUFNOzs7O0lBRUYsWUFBb0IsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFFM0IsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNkLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxtQkFBYyxHQUFXLHFCQUFxQixDQUFDO0lBSmYsQ0FBQzs7Ozs7SUFNakMsVUFBVSxDQUFFLFFBQVE7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLHlCQUF5QixDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGNBQWM7O1lBQ04sV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFOztZQUM5QixHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHO1FBQzdCLElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUM7WUFDdkUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDbEQsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ25EO2FBQUk7WUFDRCxXQUFXLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDOUI7UUFDRCxXQUFXLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN6QixXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO2FBQ3BDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUMsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztDQUNKOzs7Ozs7SUE5QkcsK0JBQXFCOztJQUNyQiwyQkFBZ0I7O0lBQ2hCLHNDQUFzRDs7Ozs7SUFKMUMsa0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4uL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVJlc3RmdWxBUEkgfSBmcm9tICcuLi9SZXN0ZnVsQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi4vQVBJUmVxdWVzdCc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tICcuLi9Nb2NrQVBJLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBnZXRBY3R1YWxBUEkgaW1wbGVtZW50cyBJQVBJLCBJUmVzdGZ1bEFQSSwgSU1vY2tBUEl7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIEFQUF9DT05GSUc6IGFueSkgeyB9XG5cbiAgICBwcml2YXRlIGFnZW50SUQgPSAnJztcbiAgICBwdWJsaWMgdXJsID0gJyc7XG4gICAgcHVibGljIGxhc3RVcGRhdGVUaW1lOiBzdHJpbmcgPSAnMjAxOS0wMS0wMSAwMDowMDowMCc7XG5cbiAgICBwdWJsaWMgc2V0QWdlbnRJRCggYWdlbnRfaWQpe1xuICAgICAgICB0aGlzLmFnZW50SUQgPSBhZ2VudF9pZDtcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2Fzc2V0cy9tb2NrL0FjdHVhbC5qc29uJztcbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ2dldEFjdHVhbCc7XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdERhdGEoKSB7XG4gICAgICAgIGxldCByZXF1ZXN0RGF0YSA9IG5ldyBBUElSZXF1ZXN0KCk7XG4gICAgICAgIGxldCBlbnYgPSB0aGlzLkFQUF9DT05GSUcuRU5WO1xuICAgICAgICBpZih0aGlzLmFnZW50SUQgIT0gJycgJiYgdGhpcy5hZ2VudElEICE9IHVuZGVmaW5lZCAmJiB0aGlzLmFnZW50SUQgIT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnVybCA9IHRoaXMuQVBQX0NPTkZJR1tlbnZdLkFQSV9VUkwuZ2V0QWN0dWFsO1xuICAgICAgICAgICAgcmVxdWVzdERhdGEudXJsID0gdGhpcy51cmwgKyAnLycgKyB0aGlzLmFnZW50SUQ7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVxdWVzdERhdGEudXJsID0gdGhpcy51cmw7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdERhdGEudHlwZSA9IFwiR0VUXCI7XG4gICAgICAgIHJlcXVlc3REYXRhLnBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgICAgLnNldCgnbGFzdFVwZGF0ZVRpbWUnLCB0aGlzLmxhc3RVcGRhdGVUaW1lKTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3REYXRhO1xuICAgIH1cbn0iXX0=