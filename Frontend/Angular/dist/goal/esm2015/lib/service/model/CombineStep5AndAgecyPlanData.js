/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
let CombineStep5AndAgecyPlanData = class CombineStep5AndAgecyPlanData {
    /**
     * @param {?} Step5ItemList
     * @param {?} AgencyPlanItemList
     * @param {?} ItemTextIsRedList
     */
    constructor(Step5ItemList, AgencyPlanItemList, ItemTextIsRedList) {
        this._Step5ItemList = [];
        this._AgencyPlanItemList = [];
        this._ItemTextIsRedList = [];
        this._Step5ItemList = Step5ItemList;
        this._AgencyPlanItemList = AgencyPlanItemList;
        this._ItemTextIsRedList = ItemTextIsRedList;
    }
    /**
     * @return {?}
     */
    get Step5ItemList() {
        return this._Step5ItemList;
    }
    /**
     * @return {?}
     */
    get AgencyPlanItemList() {
        return this._AgencyPlanItemList;
    }
    /**
     * @return {?}
     */
    get ItemTextIsRedList() {
        return this._ItemTextIsRedList;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Array)
], CombineStep5AndAgecyPlanData.prototype, "_Step5ItemList", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Array)
], CombineStep5AndAgecyPlanData.prototype, "_AgencyPlanItemList", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Array)
], CombineStep5AndAgecyPlanData.prototype, "_ItemTextIsRedList", void 0);
CombineStep5AndAgecyPlanData = tslib_1.__decorate([
    Bean('CombineStep5AndAgecyPlanData'),
    tslib_1.__metadata("design:paramtypes", [Array, Array, Array])
], CombineStep5AndAgecyPlanData);
export { CombineStep5AndAgecyPlanData };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CombineStep5AndAgecyPlanData.prototype._Step5ItemList;
    /**
     * @type {?}
     * @private
     */
    CombineStep5AndAgecyPlanData.prototype._AgencyPlanItemList;
    /**
     * @type {?}
     * @private
     */
    CombineStep5AndAgecyPlanData.prototype._ItemTextIsRedList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tYmluZVN0ZXA1QW5kQWdlY3lQbGFuRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Db21iaW5lU3RlcDVBbmRBZ2VjeVBsYW5EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztJQUdyQyw0QkFBNEI7Ozs7OztJQVdyQyxZQUFZLGFBQXVDLEVBQUUsa0JBQTRDLEVBQUUsaUJBQWlDO1FBUjVILG1CQUFjLEdBQTZCLEVBQUUsQ0FBQztRQUc5Qyx3QkFBbUIsR0FBNkIsRUFBRSxDQUFDO1FBR25ELHVCQUFrQixHQUFtQixFQUFFLENBQUM7UUFHNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDO1FBQzlDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBVyxrQkFBa0I7UUFDekIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELElBQVcsaUJBQWlCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ25DLENBQUM7Q0FHSixDQUFBO0FBM0JHO0lBREMsUUFBUTtzQ0FDZSxLQUFLO29FQUF5QjtBQUd0RDtJQURDLFFBQVE7c0NBQ29CLEtBQUs7eUVBQXlCO0FBRzNEO0lBREMsUUFBUTtzQ0FDbUIsS0FBSzt3RUFBZTtBQVR2Qyw0QkFBNEI7SUFEeEMsSUFBSSxDQUFDLDhCQUE4QixDQUFDOzZDQVlOLEtBQUssRUFBeUMsS0FBSyxFQUF3QyxLQUFLO0dBWGxILDRCQUE0QixDQThCeEM7U0E5QlksNEJBQTRCOzs7Ozs7SUFFckMsc0RBQ3NEOzs7OztJQUV0RCwyREFDMkQ7Ozs7O0lBRTNELDBEQUNnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYWxUaXRsZUxpc3RJdGVtIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ29hbC11aS10aXRsZS1saXN0L2dvYS11aS10aXRsZS1saXN0LWl0ZW1cIjtcbmltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ0NvbWJpbmVTdGVwNUFuZEFnZWN5UGxhbkRhdGEnKVxuZXhwb3J0IGNsYXNzIENvbWJpbmVTdGVwNUFuZEFnZWN5UGxhbkRhdGEge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfU3RlcDVJdGVtTGlzdDogQXJyYXk8R29hbFRpdGxlTGlzdEl0ZW0+ID0gW107XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9BZ2VuY3lQbGFuSXRlbUxpc3Q6IEFycmF5PEdvYWxUaXRsZUxpc3RJdGVtPiA9IFtdO1xuICAgIFxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0l0ZW1UZXh0SXNSZWRMaXN0OiBBcnJheTxib29sZWFuPiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoU3RlcDVJdGVtTGlzdDogQXJyYXk8R29hbFRpdGxlTGlzdEl0ZW0+LCBBZ2VuY3lQbGFuSXRlbUxpc3Q6IEFycmF5PEdvYWxUaXRsZUxpc3RJdGVtPiwgSXRlbVRleHRJc1JlZExpc3Q6IEFycmF5PGJvb2xlYW4+KSB7XG4gICAgICAgIHRoaXMuX1N0ZXA1SXRlbUxpc3QgPSBTdGVwNUl0ZW1MaXN0O1xuICAgICAgICB0aGlzLl9BZ2VuY3lQbGFuSXRlbUxpc3QgPSBBZ2VuY3lQbGFuSXRlbUxpc3Q7XG4gICAgICAgIHRoaXMuX0l0ZW1UZXh0SXNSZWRMaXN0ID0gSXRlbVRleHRJc1JlZExpc3Q7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBTdGVwNUl0ZW1MaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fU3RlcDVJdGVtTGlzdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IEFnZW5jeVBsYW5JdGVtTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FnZW5jeVBsYW5JdGVtTGlzdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IEl0ZW1UZXh0SXNSZWRMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fSXRlbVRleHRJc1JlZExpc3Q7XG4gICAgfVxuXG5cbn0iXX0=