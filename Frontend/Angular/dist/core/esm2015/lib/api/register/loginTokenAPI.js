/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable, of } from "rxjs";
import { EqualRestriction } from "../../device/sqlite/restrictions/EqualRestriction";
export class saveLoginTokenAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._encryptedAuth = '';
        this._infoToken = '';
    }
    /**
     * @return {?}
     */
    get infoToken() {
        return this._infoToken;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set infoToken(value) {
        this._infoToken = value;
    }
    /**
     * @return {?}
     */
    get encryptedAuth() {
        return this._encryptedAuth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set encryptedAuth(value) {
        this._encryptedAuth = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveLoginToken';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        // return sha-256: "test||test"
        /** @type {?} */
        let infoObj = this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
        console.log("infoObj:", infoObj);
        /** @type {?} */
        let dao = this.daoFactory.getDao("Profile");
        /** @type {?} */
        let configVal = JSON.stringify({ token: this.encryptedAuth, infoToken: this._infoToken });
        if (infoObj != undefined) {
            return Observable.create((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                infoObj.setValue("CategoryVal", configVal);
                infoObj.setValue("UpdateTime", Date.now());
                infoObj.addRestriction(new EqualRestriction("Category", ["OfflineValidationToken"]));
                dao.updateByTable(infoObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                resp => {
                    console.log("save token resp:", resp);
                    /** @type {?} */
                    let infoTableObj = this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
                    infoTableObj.setValue("CategoryVal", '{"count":0}');
                    infoTableObj.addRestriction(new EqualRestriction("Category", ["OfflineLoginFailCount"]));
                    dao.updateByTable(infoTableObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    resp => {
                        observer.next(resp);
                        observer.complete();
                    }));
                }));
            }));
        }
        else {
            return of(false);
        }
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/saveLoginToken.json';
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    saveLoginTokenAPI.prototype._encryptedAuth;
    /**
     * @type {?}
     * @private
     */
    saveLoginTokenAPI.prototype._infoToken;
    /**
     * @type {?}
     * @private
     */
    saveLoginTokenAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5Ub2tlbkFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL2xvZ2luVG9rZW5BUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBS3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRXJGLE1BQU07Ozs7SUFFRixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ2xDLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFGYyxDQUFDOzs7O0lBSS9DLElBQVcsU0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNOLE9BQU8sZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNELFVBQVU7OztZQUVGLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUM7UUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7O1lBQzdCLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7O1lBQ3ZDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6RixJQUFJLE9BQU8sSUFBSSxTQUFTLEVBQUU7WUFDdEIsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztZQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ2xDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRixHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7O3dCQUNsQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDO29CQUM3RSxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztvQkFDcEQsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6RixHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVM7Ozs7b0JBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQyxFQUFDLENBQUM7Z0JBQ1AsQ0FBQyxFQUFDLENBQUE7WUFFTixDQUFDLEVBQUMsQ0FBQztTQUNOO2FBQ0k7WUFDRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsT0FBTyxtQ0FBbUMsQ0FBQTtJQUM5QyxDQUFDO0NBQ0o7Ozs7OztJQXBERywyQ0FBb0M7Ozs7O0lBQ3BDLHVDQUFnQzs7Ozs7SUFGcEIsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJQVBJIH0gZnJvbSBcIi4uL0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIi4uL01vY2tBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSBcIi4uL1NRTGl0ZUFQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5XCI7XG5pbXBvcnQgeyBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0VxdWFsUmVzdHJpY3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIHNhdmVMb2dpblRva2VuQVBJIGltcGxlbWVudHMgSUFQSSwgSVNRTGl0ZUFQSSwgSU1vY2tBUEkge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7IH1cbiAgICBwcml2YXRlIF9lbmNyeXB0ZWRBdXRoOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF9pbmZvVG9rZW46IHN0cmluZyA9ICcnO1xuXG4gICAgcHVibGljIGdldCBpbmZvVG9rZW4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZm9Ub2tlbjtcbiAgICB9XG4gICAgcHVibGljIHNldCBpbmZvVG9rZW4odmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9pbmZvVG9rZW4gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGVuY3J5cHRlZEF1dGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRlZEF1dGg7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZW5jcnlwdGVkQXV0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2VuY3J5cHRlZEF1dGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnc2F2ZUxvZ2luVG9rZW4nO1xuICAgIH1cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIC8vIHJldHVybiBzaGEtMjU2OiBcInRlc3R8fHRlc3RcIlxuICAgICAgICBsZXQgaW5mb09iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXRUYWJsZShcIlByb2ZpbGVcIiwgXCJUV19MSF9TRF9EZXZpY2VJbmZvXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImluZm9PYmo6XCIsIGluZm9PYmopO1xuICAgICAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERhbyhcIlByb2ZpbGVcIik7XG4gICAgICAgIGxldCBjb25maWdWYWwgPSBKU09OLnN0cmluZ2lmeSh7IHRva2VuOiB0aGlzLmVuY3J5cHRlZEF1dGgsIGluZm9Ub2tlbjogdGhpcy5faW5mb1Rva2VuIH0pO1xuICAgICAgICBpZiAoaW5mb09iaiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpbmZvT2JqLnNldFZhbHVlKFwiQ2F0ZWdvcnlWYWxcIiwgY29uZmlnVmFsKTtcbiAgICAgICAgICAgICAgICBpbmZvT2JqLnNldFZhbHVlKFwiVXBkYXRlVGltZVwiLCBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgICAgICBpbmZvT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiQ2F0ZWdvcnlcIiwgW1wiT2ZmbGluZVZhbGlkYXRpb25Ub2tlblwiXSkpO1xuICAgICAgICAgICAgICAgIGRhby51cGRhdGVCeVRhYmxlKGluZm9PYmopLnN1YnNjcmliZShyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlIHRva2VuIHJlc3A6XCIsIHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5mb1RhYmxlT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldFRhYmxlKFwiUHJvZmlsZVwiLCBcIlRXX0xIX1NEX0RldmljZUluZm9cIik7XG4gICAgICAgICAgICAgICAgICAgIGluZm9UYWJsZU9iai5zZXRWYWx1ZShcIkNhdGVnb3J5VmFsXCIsICd7XCJjb3VudFwiOjB9Jyk7XG4gICAgICAgICAgICAgICAgICAgIGluZm9UYWJsZU9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIkNhdGVnb3J5XCIsIFtcIk9mZmxpbmVMb2dpbkZhaWxDb3VudFwiXSkpO1xuICAgICAgICAgICAgICAgICAgICBkYW8udXBkYXRlQnlUYWJsZShpbmZvVGFibGVPYmopLnN1YnNjcmliZShyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svc2F2ZUxvZ2luVG9rZW4uanNvbidcbiAgICB9XG59XG4iXX0=