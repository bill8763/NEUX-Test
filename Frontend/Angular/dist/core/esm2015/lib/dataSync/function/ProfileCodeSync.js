/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { endOfDay } from 'date-fns';
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
export class ProfileCodeSync {
    /**
     * @param {?} DaoFactory
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(DaoFactory, PushAOP = null, PullAOP = null) {
        this.DaoFactory = DaoFactory;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'PROFILE_CODE';
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    pullData(resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.PullAOP) {
                resp = yield this.PullAOP.execute(resp);
            }
            /** @type {?} */
            let dao = this.DaoFactory.getDao("Profile");
            /** @type {?} */
            let profileCodeObj = this.DaoFactory.getTable("Profile", "TW_LH_SD_Code");
            if (resp.datalist.length > 0) {
                dao.transactionDelete(profileCodeObj);
                for (let data of resp.datalist) {
                    for (let code of data.values) {
                        profileCodeObj = this.DaoFactory.getTable("Profile", "TW_LH_SD_Code");
                        profileCodeObj.setValue("TypeID", data.datalistId);
                        profileCodeObj.setValue("Code", code.value);
                        profileCodeObj.setValue("MappingID", code.label);
                        profileCodeObj.setValue("Orders", code.orders);
                        profileCodeObj.setValue("Arguments", code.arguments);
                        profileCodeObj.setValue("ValidityPeriod", endOfDay(new Date(code.validityPeriod)).getTime());
                        dao.transactionInsert(profileCodeObj);
                    }
                }
                return yield dao.runTransaction().toPromise();
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this.state = state;
    }
    /**
     * @return {?}
     */
    getSequentialIDNeeded() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return -1;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfileCodeSync.prototype.state;
    /**
     * @type {?}
     * @private
     */
    ProfileCodeSync.prototype.DaoFactory;
    /**
     * @type {?}
     * @private
     */
    ProfileCodeSync.prototype.PushAOP;
    /**
     * @type {?}
     * @private
     */
    ProfileCodeSync.prototype.PullAOP;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZUNvZGVTeW5jLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhU3luYy9mdW5jdGlvbi9Qcm9maWxlQ29kZVN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzVELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFJcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBR3BFLE1BQU07Ozs7OztJQUVGLFlBQW9CLFVBQXNCLEVBQVUsVUFBb0IsSUFBSSxFQUFVLFVBQW9CLElBQUk7UUFBMUYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDMUcsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0gsT0FBTyxjQUFjLENBQUE7SUFDekIsQ0FBQzs7Ozs7SUFFSyxXQUFXLENBQUMsWUFBWTs7WUFDMUIsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0tBQUE7Ozs7O0lBRUssUUFBUSxDQUFDLElBQUk7O1lBQ2YsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNDOztnQkFDRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDOztnQkFDdkMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7WUFDekUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzFCLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUM1QixLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQzFCLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7d0JBQ3RFLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDbkQsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM1QyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2pELGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDL0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNyRCxjQUFjLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO3dCQUM3RixHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQ3pDO2lCQUNKO2dCQUNELE9BQU8sTUFBTSxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDakQ7aUJBQ0c7Z0JBQ0EsT0FBTyxJQUFJLGNBQWMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNuRDtRQUNMLENBQUM7S0FBQTs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBaUI7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVLLHFCQUFxQjs7WUFDdkIsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNkLENBQUM7S0FBQTs7Ozs7SUFFSyxlQUFlLENBQUMsR0FBa0I7O1FBRXhDLENBQUM7S0FBQTtDQUNKOzs7Ozs7SUF2REcsZ0NBQXNCOzs7OztJQUNWLHFDQUE4Qjs7Ozs7SUFBRSxrQ0FBZ0M7Ozs7O0lBQUUsa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUZ1bmN0aW9uU3luYywgRlVOQ19TVEFURSB9IGZyb20gXCIuL0lGdW5jdGlvblN5bmNcIjtcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5XCI7XG5pbXBvcnQgeyBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0VxdWFsUmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IGVuZE9mRGF5IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBJU3luY0FPUCB9IGZyb20gXCIuL1N5bmNBT1AuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVJlc3BvbnNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb2RlU3luYyBpbXBsZW1lbnRzIElGdW5jdGlvblN5bmMge1xuICAgIHByaXZhdGUgc3RhdGU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIERhb0ZhY3Rvcnk6IERhb0ZhY3RvcnksIHByaXZhdGUgUHVzaEFPUDogSVN5bmNBT1AgPSBudWxsLCBwcml2YXRlIFB1bGxBT1A6IElTeW5jQU9QID0gbnVsbCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gRlVOQ19TVEFURS5BVkFJTEFCTEU7XG4gICAgfVxuXG4gICAgZ2V0U3RhdGUoKTogRlVOQ19TVEFURSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cblxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdQUk9GSUxFX0NPREUnXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHVzaEpzb24oZnJvbnRlbmRUaW1lKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBhc3luYyBwdWxsRGF0YShyZXNwKSB7XG4gICAgICAgIGlmICh0aGlzLlB1bGxBT1ApIHtcbiAgICAgICAgICAgIHJlc3AgPSBhd2FpdCB0aGlzLlB1bGxBT1AuZXhlY3V0ZShyZXNwKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGFvID0gdGhpcy5EYW9GYWN0b3J5LmdldERhbyhcIlByb2ZpbGVcIik7XG4gICAgICAgIGxldCBwcm9maWxlQ29kZU9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXRUYWJsZShcIlByb2ZpbGVcIiwgXCJUV19MSF9TRF9Db2RlXCIpO1xuICAgICAgICBpZiAocmVzcC5kYXRhbGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUocHJvZmlsZUNvZGVPYmopO1xuICAgICAgICAgICAgZm9yIChsZXQgZGF0YSBvZiByZXNwLmRhdGFsaXN0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29kZSBvZiBkYXRhLnZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICBwcm9maWxlQ29kZU9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXRUYWJsZShcIlByb2ZpbGVcIiwgXCJUV19MSF9TRF9Db2RlXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9maWxlQ29kZU9iai5zZXRWYWx1ZShcIlR5cGVJRFwiLCBkYXRhLmRhdGFsaXN0SWQpO1xuICAgICAgICAgICAgICAgICAgICBwcm9maWxlQ29kZU9iai5zZXRWYWx1ZShcIkNvZGVcIiwgY29kZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVDb2RlT2JqLnNldFZhbHVlKFwiTWFwcGluZ0lEXCIsIGNvZGUubGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBwcm9maWxlQ29kZU9iai5zZXRWYWx1ZShcIk9yZGVyc1wiLCBjb2RlLm9yZGVycyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVDb2RlT2JqLnNldFZhbHVlKFwiQXJndW1lbnRzXCIsIGNvZGUuYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUNvZGVPYmouc2V0VmFsdWUoXCJWYWxpZGl0eVBlcmlvZFwiLCBlbmRPZkRheShuZXcgRGF0ZShjb2RlLnZhbGlkaXR5UGVyaW9kKSkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KHByb2ZpbGVDb2RlT2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGFvLnJ1blRyYW5zYWN0aW9uKCkudG9Qcm9taXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU1FMaXRlUmVzcG9uc2UoeyBzdGF0dXM6IHRydWUgfSwgW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoc3RhdGU6IEZVTkNfU1RBVEUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNlcXVlbnRpYWxJRE5lZWRlZCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0U2VxdWVudGlhbElEKGlkczogQXJyYXk8c3RyaW5nPikge1xuXG4gICAgfVxufSJdfQ==