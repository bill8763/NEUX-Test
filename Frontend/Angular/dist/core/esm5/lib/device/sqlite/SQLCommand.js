/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SQLCommand = /** @class */ (function () {
    function SQLCommand(instruction, params) {
        this.params = new Array();
        this.sql = instruction;
        this.params = params;
    }
    /**
     * @param {?} instruction
     * @return {?}
     */
    SQLCommand.prototype.setSql = /**
     * @param {?} instruction
     * @return {?}
     */
    function (instruction) {
        this.sql = instruction;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    SQLCommand.prototype.setParam = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        this.params.push(param);
    };
    /**
     * @return {?}
     */
    SQLCommand.prototype.getSql = /**
     * @return {?}
     */
    function () {
        return this.sql;
    };
    /**
     * @return {?}
     */
    SQLCommand.prototype.getParams = /**
     * @return {?}
     */
    function () {
        return this.params;
    };
    return SQLCommand;
}());
export { SQLCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SQLCommand.prototype.sql;
    /**
     * @type {?}
     * @private
     */
    SQLCommand.prototype.params;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1FMQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL3NxbGl0ZS9TUUxDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUtFLG9CQUFZLFdBQW1CLEVBQUUsTUFBa0I7UUFIM0MsV0FBTSxHQUFlLElBQUksS0FBSyxFQUFPLENBQUM7UUFJNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFDRCwyQkFBTTs7OztJQUFOLFVBQU8sV0FBbUI7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUE7SUFDeEIsQ0FBQzs7Ozs7SUFDRCw2QkFBUTs7OztJQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBQ0QsMkJBQU07OztJQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFDRCw4QkFBUzs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQzs7Ozs7OztJQXBCQyx5QkFBb0I7Ozs7O0lBQ3BCLDRCQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTUUxDb21tYW5kIHtcbiAgcHJpdmF0ZSBzcWw6IHN0cmluZztcbiAgcHJpdmF0ZSBwYXJhbXM6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xuXG5cbiAgY29uc3RydWN0b3IoaW5zdHJ1Y3Rpb246IHN0cmluZywgcGFyYW1zOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5zcWwgPSBpbnN0cnVjdGlvbjtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuICBzZXRTcWwoaW5zdHJ1Y3Rpb246IHN0cmluZykge1xuICAgIHRoaXMuc3FsID0gaW5zdHJ1Y3Rpb25cbiAgfVxuICBzZXRQYXJhbShwYXJhbTogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXJhbXMucHVzaChwYXJhbSk7XG4gIH1cbiAgZ2V0U3FsKCkge1xuICAgIHJldHVybiB0aGlzLnNxbDtcbiAgfVxuICBnZXRQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICB9XG59XG4iXX0=