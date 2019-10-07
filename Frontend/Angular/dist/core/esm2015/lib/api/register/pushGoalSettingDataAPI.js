/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
export class pushGoalSettingDataAPI {
    constructor() {
        this.url = '';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'pushGoalSettingData';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.mainData;
        requestData.type = "POST";
        return requestData;
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/GoalCallback.json';
    }
}
if (false) {
    /** @type {?} */
    pushGoalSettingDataAPI.prototype.url;
    /** @type {?} */
    pushGoalSettingDataAPI.prototype.mainData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaEdvYWxTZXR0aW5nRGF0YUFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL3B1c2hHb2FsU2V0dGluZ0RhdGFBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNM0MsTUFBTTtJQUtGO1FBSE8sUUFBRyxHQUFXLEVBQUUsQ0FBQztJQUdSLENBQUM7Ozs7SUFFakIsVUFBVTtRQUNOLE9BQU8scUJBQXFCLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELGNBQWM7O1lBQ04sV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFO1FBQ2xDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUMzQixXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDakMsV0FBVyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDMUIsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLGlDQUFpQyxDQUFDO0lBQzdDLENBQUM7Q0FDSjs7O0lBcEJHLHFDQUF3Qjs7SUFDeEIsMENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4uL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVJlc3RmdWxBUEkgfSBmcm9tICcuLi9SZXN0ZnVsQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi4vQVBJUmVxdWVzdCc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tICcuLi9Nb2NrQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdWJtaXRHb2FsRGF0YSB9IGZyb20gJy4uLy4uL2JlYW4nO1xuXG5cbmV4cG9ydCBjbGFzcyBwdXNoR29hbFNldHRpbmdEYXRhQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElSZXN0ZnVsQVBJIHtcblxuICAgIHB1YmxpYyB1cmw6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBtYWluRGF0YTogU3VibWl0R29hbERhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgZ2V0QVBJTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdwdXNoR29hbFNldHRpbmdEYXRhJztcbiAgICB9XG5cbiAgICBnZXRSZXF1ZXN0RGF0YSgpIHtcbiAgICAgICAgbGV0IHJlcXVlc3REYXRhID0gbmV3IEFQSVJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdERhdGEudXJsID0gdGhpcy51cmw7XG4gICAgICAgIHJlcXVlc3REYXRhLmJvZHkgPSB0aGlzLm1haW5EYXRhO1xuICAgICAgICByZXF1ZXN0RGF0YS50eXBlID0gXCJQT1NUXCI7XG4gICAgICAgIHJldHVybiByZXF1ZXN0RGF0YTtcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL0dvYWxDYWxsYmFjay5qc29uJztcbiAgICB9XG59Il19