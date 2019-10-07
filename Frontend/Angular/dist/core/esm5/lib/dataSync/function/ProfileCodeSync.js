/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { endOfDay } from 'date-fns';
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
var ProfileCodeSync = /** @class */ (function () {
    function ProfileCodeSync(DaoFactory, PushAOP, PullAOP) {
        if (PushAOP === void 0) { PushAOP = null; }
        if (PullAOP === void 0) { PullAOP = null; }
        this.DaoFactory = DaoFactory;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    ProfileCodeSync.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this.state;
    };
    /**
     * @return {?}
     */
    ProfileCodeSync.prototype.getName = /**
     * @return {?}
     */
    function () {
        return 'PROFILE_CODE';
    };
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    ProfileCodeSync.prototype.getPushJson = /**
     * @param {?} frontendTime
     * @return {?}
     */
    function (frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, []];
            });
        });
    };
    /**
     * @param {?} resp
     * @return {?}
     */
    ProfileCodeSync.prototype.pullData = /**
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, e_2, _b, dao, profileCodeObj, _c, _d, data, _e, _f, code;
            return tslib_1.__generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!this.PullAOP) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.PullAOP.execute(resp)];
                    case 1:
                        resp = _g.sent();
                        _g.label = 2;
                    case 2:
                        dao = this.DaoFactory.getDao("Profile");
                        profileCodeObj = this.DaoFactory.getTable("Profile", "TW_LH_SD_Code");
                        if (!(resp.datalist.length > 0)) return [3 /*break*/, 4];
                        dao.transactionDelete(profileCodeObj);
                        try {
                            for (_c = tslib_1.__values(resp.datalist), _d = _c.next(); !_d.done; _d = _c.next()) {
                                data = _d.value;
                                try {
                                    for (_e = tslib_1.__values(data.values), _f = _e.next(); !_f.done; _f = _e.next()) {
                                        code = _f.value;
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
                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                finally {
                                    try {
                                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [4 /*yield*/, dao.runTransaction().toPromise()];
                    case 3: return [2 /*return*/, _g.sent()];
                    case 4: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                }
            });
        });
    };
    /**
     * @param {?} state
     * @return {?}
     */
    ProfileCodeSync.prototype.setState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
    };
    /**
     * @return {?}
     */
    ProfileCodeSync.prototype.getSequentialIDNeeded = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, -1];
            });
        });
    };
    /**
     * @param {?} ids
     * @return {?}
     */
    ProfileCodeSync.prototype.setSequentialID = /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return ProfileCodeSync;
}());
export { ProfileCodeSync };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZUNvZGVTeW5jLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhU3luYy9mdW5jdGlvbi9Qcm9maWxlQ29kZVN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzVELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFJcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBR3BFO0lBRUkseUJBQW9CLFVBQXNCLEVBQVUsT0FBd0IsRUFBVSxPQUF3QjtRQUExRCx3QkFBQSxFQUFBLGNBQXdCO1FBQVUsd0JBQUEsRUFBQSxjQUF3QjtRQUExRixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUMxRyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsaUNBQU87OztJQUFQO1FBQ0ksT0FBTyxjQUFjLENBQUE7SUFDekIsQ0FBQzs7Ozs7SUFFSyxxQ0FBVzs7OztJQUFqQixVQUFrQixZQUFZOzs7Z0JBQzFCLHNCQUFPLEVBQUUsRUFBQzs7O0tBQ2I7Ozs7O0lBRUssa0NBQVE7Ozs7SUFBZCxVQUFlLElBQUk7Ozs7Ozs2QkFDWCxJQUFJLENBQUMsT0FBTyxFQUFaLHdCQUFZO3dCQUNMLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBdkMsSUFBSSxHQUFHLFNBQWdDLENBQUM7Ozt3QkFFeEMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzt3QkFDdkMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7NkJBQ3JFLENBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBLEVBQXhCLHdCQUF3Qjt3QkFDeEIsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDOzs0QkFDdEMsS0FBaUIsS0FBQSxpQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFBLDRDQUFFO2dDQUF2QixJQUFJOztvQ0FDVCxLQUFpQixLQUFBLGlCQUFBLElBQUksQ0FBQyxNQUFNLENBQUEsNENBQUU7d0NBQXJCLElBQUk7d0NBQ1QsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQzt3Q0FDdEUsY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dDQUNuRCxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0NBQzVDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3Q0FDakQsY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dDQUMvQyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7d0NBQ3JELGNBQWMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7d0NBQzdGLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztxQ0FDekM7Ozs7Ozs7Ozs2QkFDSjs7Ozs7Ozs7O3dCQUNNLHFCQUFNLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBQTs0QkFBN0Msc0JBQU8sU0FBc0MsRUFBQzs0QkFHOUMsc0JBQU8sSUFBSSxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUM7Ozs7S0FFdkQ7Ozs7O0lBRUQsa0NBQVE7Ozs7SUFBUixVQUFTLEtBQWlCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFSywrQ0FBcUI7OztJQUEzQjs7O2dCQUNJLHNCQUFPLENBQUMsQ0FBQyxFQUFDOzs7S0FDYjs7Ozs7SUFFSyx5Q0FBZTs7OztJQUFyQixVQUFzQixHQUFrQjs7Ozs7O0tBRXZDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBeERELElBd0RDOzs7Ozs7O0lBdkRHLGdDQUFzQjs7Ozs7SUFDVixxQ0FBOEI7Ozs7O0lBQUUsa0NBQWdDOzs7OztJQUFFLGtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElGdW5jdGlvblN5bmMsIEZVTkNfU1RBVEUgfSBmcm9tIFwiLi9JRnVuY3Rpb25TeW5jXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeVwiO1xuaW1wb3J0IHsgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9FcXVhbFJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyBlbmRPZkRheSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgSVN5bmNBT1AgfSBmcm9tIFwiLi9TeW5jQU9QLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgU1FMaXRlUmVzcG9uc2UgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9TUUxpdGVSZXNwb25zZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29kZVN5bmMgaW1wbGVtZW50cyBJRnVuY3Rpb25TeW5jIHtcbiAgICBwcml2YXRlIHN0YXRlOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBEYW9GYWN0b3J5OiBEYW9GYWN0b3J5LCBwcml2YXRlIFB1c2hBT1A6IElTeW5jQU9QID0gbnVsbCwgcHJpdmF0ZSBQdWxsQU9QOiBJU3luY0FPUCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEZVTkNfU1RBVEUuQVZBSUxBQkxFO1xuICAgIH1cblxuICAgIGdldFN0YXRlKCk6IEZVTkNfU1RBVEUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnUFJPRklMRV9DT0RFJ1xuICAgIH1cblxuICAgIGFzeW5jIGdldFB1c2hKc29uKGZyb250ZW5kVGltZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgYXN5bmMgcHVsbERhdGEocmVzcCkge1xuICAgICAgICBpZiAodGhpcy5QdWxsQU9QKSB7XG4gICAgICAgICAgICByZXNwID0gYXdhaXQgdGhpcy5QdWxsQU9QLmV4ZWN1dGUocmVzcCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREYW8oXCJQcm9maWxlXCIpO1xuICAgICAgICBsZXQgcHJvZmlsZUNvZGVPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0VGFibGUoXCJQcm9maWxlXCIsIFwiVFdfTEhfU0RfQ29kZVwiKTtcbiAgICAgICAgaWYgKHJlc3AuZGF0YWxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKHByb2ZpbGVDb2RlT2JqKTtcbiAgICAgICAgICAgIGZvciAobGV0IGRhdGEgb2YgcmVzcC5kYXRhbGlzdCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvZGUgb2YgZGF0YS52YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUNvZGVPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0VGFibGUoXCJQcm9maWxlXCIsIFwiVFdfTEhfU0RfQ29kZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUNvZGVPYmouc2V0VmFsdWUoXCJUeXBlSURcIiwgZGF0YS5kYXRhbGlzdElkKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUNvZGVPYmouc2V0VmFsdWUoXCJDb2RlXCIsIGNvZGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBwcm9maWxlQ29kZU9iai5zZXRWYWx1ZShcIk1hcHBpbmdJRFwiLCBjb2RlLmxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUNvZGVPYmouc2V0VmFsdWUoXCJPcmRlcnNcIiwgY29kZS5vcmRlcnMpO1xuICAgICAgICAgICAgICAgICAgICBwcm9maWxlQ29kZU9iai5zZXRWYWx1ZShcIkFyZ3VtZW50c1wiLCBjb2RlLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVDb2RlT2JqLnNldFZhbHVlKFwiVmFsaWRpdHlQZXJpb2RcIiwgZW5kT2ZEYXkobmV3IERhdGUoY29kZS52YWxpZGl0eVBlcmlvZCkpLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChwcm9maWxlQ29kZU9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRhby5ydW5UcmFuc2FjdGlvbigpLnRvUHJvbWlzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiB0cnVlIH0sIFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFN0YXRlKHN0YXRlOiBGVU5DX1NUQVRFKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTZXF1ZW50aWFsSUROZWVkZWQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGFzeW5jIHNldFNlcXVlbnRpYWxJRChpZHM6IEFycmF5PHN0cmluZz4pIHtcblxuICAgIH1cbn0iXX0=