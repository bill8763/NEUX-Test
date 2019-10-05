/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
/** @enum {string} */
const AGENCY_STATE = {
    DISPLAY: 'display',
    ACCEPT: 'accept',
    REJECT: 'reject',
    FIRST: 'first',
};
export { AGENCY_STATE };
let AgencyPlanStatus = class AgencyPlanStatus {
    /**
     * @param {?} state
     * @param {?} agentID
     */
    constructor(state, agentID) {
        this.state = state;
        this.agentID = agentID;
    }
    /**
     * @return {?}
     */
    get state() {
        return this._state;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set state(value) {
        this._state = value;
    }
    /**
     * @return {?}
     */
    get agentID() {
        return this._agentID;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set agentID(value) {
        this._agentID = value;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], AgencyPlanStatus.prototype, "_state", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], AgencyPlanStatus.prototype, "_agentID", void 0);
AgencyPlanStatus = tslib_1.__decorate([
    Bean('AgencyPlanStatus'),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], AgencyPlanStatus);
export { AgencyPlanStatus };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AgencyPlanStatus.prototype._state;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanStatus.prototype._agentID;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbmN5UGxhblN0YXR1cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9BZ2VuY3lQbGFuU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0lBRzlDLFNBQVUsU0FBUztJQUNuQixRQUFTLFFBQVE7SUFDakIsUUFBUyxRQUFRO0lBQ2pCLE9BQVEsT0FBTzs7O0lBSU4sZ0JBQWdCOzs7OztJQVF6QixZQUFZLEtBQUssRUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFHRCxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFtQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsSUFBVyxPQUFPO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0NBQ0osQ0FBQTtBQXhCRztJQURDLFFBQVE7O2dEQUNvQjtBQUc3QjtJQURDLFFBQVE7O2tEQUNnQjtBQU5oQixnQkFBZ0I7SUFENUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDOztHQUNaLGdCQUFnQixDQTJCNUI7U0EzQlksZ0JBQWdCOzs7Ozs7SUFFekIsa0NBQzZCOzs7OztJQUU3QixvQ0FDeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbmV4cG9ydCBlbnVtIEFHRU5DWV9TVEFURSB7XG4gICAgRElTUExBWSA9ICdkaXNwbGF5JyxcbiAgICBBQ0NFUFQgPSAnYWNjZXB0JyxcbiAgICBSRUpFQ1QgPSAncmVqZWN0JyxcbiAgICBGSVJTVCA9ICdmaXJzdCdcbn1cblxuQEJlYW4oJ0FnZW5jeVBsYW5TdGF0dXMnKVxuZXhwb3J0IGNsYXNzIEFnZW5jeVBsYW5TdGF0dXMge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfc3RhdGU6IEFHRU5DWV9TVEFURTtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2FnZW50SUQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHN0YXRlLCBhZ2VudElEKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5hZ2VudElEID0gYWdlbnRJRDtcbiAgICB9XG5cbiAgIFxuICAgIHB1YmxpYyBnZXQgc3RhdGUoKTogQUdFTkNZX1NUQVRFIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHN0YXRlKHZhbHVlOiBBR0VOQ1lfU1RBVEUpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBhZ2VudElEKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZ2VudElEO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGFnZW50SUQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9hZ2VudElEID0gdmFsdWU7XG4gICAgfVxufSJdfQ==