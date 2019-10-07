/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
let ApproveInfo = class ApproveInfo {
    /**
     * @param {?} DataYear
     * @param {?} AgentID
     * @param {?} IsApprove
     * @param {?} Comment
     */
    constructor(DataYear, AgentID, IsApprove, Comment) {
        this._DataYear = DataYear;
        this._AgentID = AgentID;
        this._IsApprove = IsApprove;
        this._Comment = Comment;
    }
    /**
     * @return {?}
     */
    get Comment() {
        return this._Comment;
    }
    /**
     * @return {?}
     */
    get IsApprove() {
        return this._IsApprove;
    }
    /**
     * @return {?}
     */
    get AgentID() {
        return this._AgentID;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._DataYear;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], ApproveInfo.prototype, "_DataYear", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ApproveInfo.prototype, "_AgentID", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Boolean)
], ApproveInfo.prototype, "_IsApprove", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ApproveInfo.prototype, "_Comment", void 0);
ApproveInfo = tslib_1.__decorate([
    Bean('ApproveInfo'),
    tslib_1.__metadata("design:paramtypes", [Number, String, Boolean, String])
], ApproveInfo);
export { ApproveInfo };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApproveInfo.prototype._DataYear;
    /**
     * @type {?}
     * @private
     */
    ApproveInfo.prototype._AgentID;
    /**
     * @type {?}
     * @private
     */
    ApproveInfo.prototype._IsApprove;
    /**
     * @type {?}
     * @private
     */
    ApproveInfo.prototype._Comment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwcm92ZUluZm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9nb2FsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvQXBwcm92ZUluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0lBR3JDLFdBQVc7Ozs7Ozs7SUFlcEIsWUFBWSxRQUFlLEVBQUUsT0FBZSxFQUFFLFNBQWlCLEVBQUUsT0FBYztRQUMzRSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFBVyxPQUFPO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVM7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCxJQUFXLE9BQU87UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7OztJQUNELElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0NBRUosQ0FBQTtBQWhDRztJQURDLFFBQVE7OzhDQUNpQjtBQUcxQjtJQURDLFFBQVE7OzZDQUNnQjtBQUd6QjtJQURDLFFBQVE7OytDQUNtQjtBQUc1QjtJQURDLFFBQVE7OzZDQUNnQjtBQVpoQixXQUFXO0lBRHZCLElBQUksQ0FBQyxhQUFhLENBQUM7O0dBQ1AsV0FBVyxDQW1DdkI7U0FuQ1ksV0FBVzs7Ozs7O0lBRXBCLGdDQUMwQjs7Ozs7SUFFMUIsK0JBQ3lCOzs7OztJQUV6QixpQ0FDNEI7Ozs7O0lBRTVCLCtCQUN5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ0FwcHJvdmVJbmZvJylcbmV4cG9ydCBjbGFzcyBBcHByb3ZlSW5mb3tcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0RhdGFZZWFyOiBudW1iZXI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9BZ2VudElEOiBzdHJpbmc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9Jc0FwcHJvdmU6IGJvb2xlYW47XG4gICAgXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfQ29tbWVudDogc3RyaW5nO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihEYXRhWWVhcjpudW1iZXIsIEFnZW50SUQ6IHN0cmluZywgSXNBcHByb3ZlOmJvb2xlYW4sIENvbW1lbnQ6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5fRGF0YVllYXIgPSBEYXRhWWVhcjtcbiAgICAgICAgdGhpcy5fQWdlbnRJRCA9IEFnZW50SUQ7XG4gICAgICAgIHRoaXMuX0lzQXBwcm92ZSA9IElzQXBwcm92ZTtcbiAgICAgICAgdGhpcy5fQ29tbWVudCA9IENvbW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBDb21tZW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Db21tZW50O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IElzQXBwcm92ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0lzQXBwcm92ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBBZ2VudElEKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BZ2VudElEO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IERhdGFZZWFyKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9EYXRhWWVhcjtcbiAgICB9XG5cbn0iXX0=