/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
export class PushActionLogAPI {
    constructor() {
        this.url = '';
        this.actionList = [];
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'PushActionLog';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.actionList.map((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            return {
                "ActionID": action.ActionID,
                "FunctionID": action.Function,
                "Message": action.Message,
                "Time": new Date(action.Time).toISOString(),
                "Action": action.Action,
                "Valid": action.Valid,
                "DeviceModel": action.DeviceModel,
                "DeviceSystem": action.DeviceSystem
            };
        }));
        requestData.type = "POST";
        return requestData;
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/logout.json';
    }
}
if (false) {
    /** @type {?} */
    PushActionLogAPI.prototype.url;
    /** @type {?} */
    PushActionLogAPI.prototype.actionList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHVzaEFjdGlvbkxvZ0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL1B1c2hBY3Rpb25Mb2dBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsTUFBTTtJQUtGO1FBSE8sUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQWUsRUFBRSxDQUFDO0lBRW5CLENBQUM7Ozs7SUFFakIsVUFBVTtRQUNOLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxjQUFjOztZQUNOLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUNsQyxXQUFXLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDM0IsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUM1QyxPQUFPO2dCQUNILFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUTtnQkFDM0IsWUFBWSxFQUFFLE1BQU0sQ0FBQyxRQUFRO2dCQUM3QixTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU87Z0JBQ3pCLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFO2dCQUMzQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU07Z0JBQ3ZCLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDckIsYUFBYSxFQUFFLE1BQU0sQ0FBQyxXQUFXO2dCQUNqQyxjQUFjLEVBQUUsTUFBTSxDQUFDLFlBQVk7YUFDdEMsQ0FBQTtRQUNMLENBQUMsRUFBQyxDQUFBO1FBQ0YsV0FBVyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDMUIsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLDJCQUEyQixDQUFDO0lBQ3ZDLENBQUM7Q0FDSjs7O0lBL0JHLCtCQUF3Qjs7SUFDeEIsc0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4uL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVJlc3RmdWxBUEkgfSBmcm9tICcuLi9SZXN0ZnVsQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi4vQVBJUmVxdWVzdCc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tICcuLi9Nb2NrQVBJLmludGVyZmFjZSc7XG5cblxuZXhwb3J0IGNsYXNzIFB1c2hBY3Rpb25Mb2dBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVJlc3RmdWxBUEkge1xuXG4gICAgcHVibGljIHVybDogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIGFjdGlvbkxpc3Q6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBnZXRBUElOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ1B1c2hBY3Rpb25Mb2cnO1xuICAgIH1cblxuICAgIGdldFJlcXVlc3REYXRhKCkge1xuICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSBuZXcgQVBJUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0RGF0YS51cmwgPSB0aGlzLnVybDtcbiAgICAgICAgcmVxdWVzdERhdGEuYm9keSA9IHRoaXMuYWN0aW9uTGlzdC5tYXAoYWN0aW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJBY3Rpb25JRFwiOiBhY3Rpb24uQWN0aW9uSUQsXG4gICAgICAgICAgICAgICAgXCJGdW5jdGlvbklEXCI6IGFjdGlvbi5GdW5jdGlvbixcbiAgICAgICAgICAgICAgICBcIk1lc3NhZ2VcIjogYWN0aW9uLk1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgXCJUaW1lXCI6IG5ldyBEYXRlKGFjdGlvbi5UaW1lKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgIFwiQWN0aW9uXCI6IGFjdGlvbi5BY3Rpb24sXG4gICAgICAgICAgICAgICAgXCJWYWxpZFwiOiBhY3Rpb24uVmFsaWQsXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VNb2RlbFwiOiBhY3Rpb24uRGV2aWNlTW9kZWwsXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VTeXN0ZW1cIjogYWN0aW9uLkRldmljZVN5c3RlbVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXF1ZXN0RGF0YS50eXBlID0gXCJQT1NUXCI7XG4gICAgICAgIHJldHVybiByZXF1ZXN0RGF0YTtcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2xvZ291dC5qc29uJztcbiAgICB9XG59Il19