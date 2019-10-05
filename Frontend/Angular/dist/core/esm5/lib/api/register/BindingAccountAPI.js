/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from "rxjs";
import { EqualRestriction } from '../../device/sqlite';
var BindingAccountAPI = /** @class */ (function () {
    function BindingAccountAPI(DaoFactory) {
        this.account = '';
        this._DaoFactory = DaoFactory;
    }
    /**
     * @return {?}
     */
    BindingAccountAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'BindingAccount';
    };
    /**
     * @return {?}
     */
    BindingAccountAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/saveSuccess.json';
    };
    /**
     * @return {?}
     */
    BindingAccountAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var deviceInfoObjForDelete = this._DaoFactory.getTable('Profile', "TW_LH_SD_DeviceInfo");
        /** @type {?} */
        var deviceInfoObjForInsert = this._DaoFactory.getTable('Profile', "TW_LH_SD_DeviceInfo");
        /** @type {?} */
        var dao = this._DaoFactory.getDao('Profile');
        if (deviceInfoObjForDelete != undefined && deviceInfoObjForInsert != undefined && dao != undefined) {
            deviceInfoObjForDelete.addRestriction(new EqualRestriction('Category', ['BindingAccount']));
            dao.transactionDelete(deviceInfoObjForDelete);
            deviceInfoObjForInsert.setValue("Category", "BindingAccount");
            deviceInfoObjForInsert.setValue("CategoryVal", JSON.stringify({ account: this.account }));
            deviceInfoObjForInsert.setValue("UpdateTime", Date.now());
            dao.transactionInsert(deviceInfoObjForInsert);
            return dao.runTransaction();
        }
        else {
            return of(false);
        }
    };
    return BindingAccountAPI;
}());
export { BindingAccountAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BindingAccountAPI.prototype._DaoFactory;
    /** @type {?} */
    BindingAccountAPI.prototype.account;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluZGluZ0FjY291bnRBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9CaW5kaW5nQWNjb3VudEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUt0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RDtJQUVJLDJCQUFZLFVBQXNCO1FBSTNCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFIaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQzs7OztJQUlELHNDQUFVOzs7SUFBVjtRQUNJLE9BQU8sZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNJLE9BQU8sZ0NBQWdDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUNELHNDQUFVOzs7SUFBVjs7WUFDUSxzQkFBc0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUM7O1lBQ3BGLHNCQUFzQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQzs7WUFDcEYsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxJQUFJLHNCQUFzQixJQUFJLFNBQVMsSUFBSSxzQkFBc0IsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtZQUNoRyxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RixHQUFHLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUU5QyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDOUQsc0JBQXNCLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUYsc0JBQXNCLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMxRCxHQUFHLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QyxPQUFPLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMvQjthQUFNO1lBQ0gsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEI7SUFFTCxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDOzs7Ozs7O0lBaENHLHdDQUFnQzs7SUFLaEMsb0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJQVBJIH0gZnJvbSBcIi4uL0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIi4uL01vY2tBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSBcIi4uL1NRTGl0ZUFQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IENsaWVudEN1c3RvbURhbywgRGFvRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUnO1xuaW1wb3J0IHsgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUnO1xuXG5leHBvcnQgY2xhc3MgQmluZGluZ0FjY291bnRBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG4gICAgcHJpdmF0ZSBfRGFvRmFjdG9yeTogRGFvRmFjdG9yeTtcbiAgICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX0Rhb0ZhY3RvcnkgPSBEYW9GYWN0b3J5O1xuICAgIH1cblxuICAgIHB1YmxpYyBhY2NvdW50ID0gJyc7XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnQmluZGluZ0FjY291bnQnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9zYXZlU3VjY2Vzcy5qc29uJztcbiAgICB9XG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgZGV2aWNlSW5mb09iakZvckRlbGV0ZSA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0VGFibGUoJ1Byb2ZpbGUnLCBcIlRXX0xIX1NEX0RldmljZUluZm9cIik7XG4gICAgICAgIGxldCBkZXZpY2VJbmZvT2JqRm9ySW5zZXJ0ID0gdGhpcy5fRGFvRmFjdG9yeS5nZXRUYWJsZSgnUHJvZmlsZScsIFwiVFdfTEhfU0RfRGV2aWNlSW5mb1wiKTtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGFvKCdQcm9maWxlJyk7XG4gICAgICAgIGlmIChkZXZpY2VJbmZvT2JqRm9yRGVsZXRlICE9IHVuZGVmaW5lZCAmJiBkZXZpY2VJbmZvT2JqRm9ySW5zZXJ0ICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkZXZpY2VJbmZvT2JqRm9yRGVsZXRlLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDYXRlZ29yeScsIFsnQmluZGluZ0FjY291bnQnXSkpO1xuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGRldmljZUluZm9PYmpGb3JEZWxldGUpO1xuXG4gICAgICAgICAgICBkZXZpY2VJbmZvT2JqRm9ySW5zZXJ0LnNldFZhbHVlKFwiQ2F0ZWdvcnlcIiwgXCJCaW5kaW5nQWNjb3VudFwiKTtcbiAgICAgICAgICAgIGRldmljZUluZm9PYmpGb3JJbnNlcnQuc2V0VmFsdWUoXCJDYXRlZ29yeVZhbFwiLCBKU09OLnN0cmluZ2lmeSh7IGFjY291bnQ6IHRoaXMuYWNjb3VudCB9KSk7XG4gICAgICAgICAgICBkZXZpY2VJbmZvT2JqRm9ySW5zZXJ0LnNldFZhbHVlKFwiVXBkYXRlVGltZVwiLCBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChkZXZpY2VJbmZvT2JqRm9ySW5zZXJ0KTtcbiAgICAgICAgICAgIHJldHVybiBkYW8ucnVuVHJhbnNhY3Rpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cbiJdfQ==