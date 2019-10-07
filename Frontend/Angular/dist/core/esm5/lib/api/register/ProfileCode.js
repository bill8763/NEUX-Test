/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { GreaterOrEqualRestriction } from '../../device/sqlite/restrictions/GreaterOrEqualRestriction';
var ProfileCodeAPI = /** @class */ (function () {
    function ProfileCodeAPI(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @return {?}
     */
    ProfileCodeAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getProfileCode';
    };
    /**
     * @return {?}
     */
    ProfileCodeAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getCode.json';
    };
    /**
     * @return {?}
     */
    ProfileCodeAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var profileObj = _this._DaoFactory.getTable('Profile', 'TW_LH_SD_Code');
            /** @type {?} */
            var dao = _this._DaoFactory.getDao('Profile');
            if (profileObj != undefined) {
                ((/** @type {?} */ (profileObj))).addRestriction(new GreaterOrEqualRestriction("ValidityPeriod", [Date.now()]));
                dao.queryByTable(profileObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    };
    return ProfileCodeAPI;
}());
export { ProfileCodeAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfileCodeAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZUNvZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9Qcm9maWxlQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU1sQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUV2RztJQUdFLHdCQUFZLFVBQXNCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxtQ0FBVTs7O0lBQVY7UUFDRSxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLDRCQUE0QixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxtQ0FBVTs7O0lBQVY7UUFBQSxpQkFlQztRQWRDLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQVE7O2dCQUM1QixVQUFVLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQzs7Z0JBQ2xFLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDNUMsSUFBSSxVQUFVLElBQUksU0FBUyxFQUFFO2dCQUMzQixDQUFDLG1CQUFhLFVBQVUsRUFBQSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUkseUJBQXlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hHLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLElBQUk7b0JBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCxxQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7Ozs7Ozs7SUE5QkMscUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4uL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tICcuLi9Nb2NrQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSAnLi4vU1FMaXRlQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5JztcbmltcG9ydCB7IFNRTGl0ZVRhYmxlIH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9TUUxpdGVUYWJsZSc7XG5pbXBvcnQgeyBHcmVhdGVyT3JFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvR3JlYXRlck9yRXF1YWxSZXN0cmljdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29kZUFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICBwcml2YXRlIF9EYW9GYWN0b3J5O1xuICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG4gICAgdGhpcy5fRGFvRmFjdG9yeSA9IERhb0ZhY3Rvcnk7XG4gIH1cblxuICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdnZXRQcm9maWxlQ29kZSc7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRDb2RlLmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBwcm9maWxlT2JqID0gdGhpcy5fRGFvRmFjdG9yeS5nZXRUYWJsZSgnUHJvZmlsZScsICdUV19MSF9TRF9Db2RlJyk7XG4gICAgICBsZXQgZGFvID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREYW8oJ1Byb2ZpbGUnKTtcbiAgICAgIGlmIChwcm9maWxlT2JqICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAoPFNRTGl0ZVRhYmxlPnByb2ZpbGVPYmopLmFkZFJlc3RyaWN0aW9uKG5ldyBHcmVhdGVyT3JFcXVhbFJlc3RyaWN0aW9uKFwiVmFsaWRpdHlQZXJpb2RcIiwgW0RhdGUubm93KCldKSk7XG4gICAgICAgIGRhby5xdWVyeUJ5VGFibGUocHJvZmlsZU9iaikuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==