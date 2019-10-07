/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class SQLCommand {
    /**
     * @param {?} instruction
     * @param {?} params
     */
    constructor(instruction, params) {
        this.params = new Array();
        this.sql = instruction;
        this.params = params;
    }
    /**
     * @param {?} instruction
     * @return {?}
     */
    setSql(instruction) {
        this.sql = instruction;
    }
    /**
     * @param {?} param
     * @return {?}
     */
    setParam(param) {
        this.params.push(param);
    }
    /**
     * @return {?}
     */
    getSql() {
        return this.sql;
    }
    /**
     * @return {?}
     */
    getParams() {
        return this.params;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1FMQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL3NxbGl0ZS9TUUxDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNOzs7OztJQUtKLFlBQVksV0FBbUIsRUFBRSxNQUFrQjtRQUgzQyxXQUFNLEdBQWUsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUk1QyxJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7OztJQUNELE1BQU0sQ0FBQyxXQUFtQjtRQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQTtJQUN4QixDQUFDOzs7OztJQUNELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFDRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFDRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Q0FDRjs7Ozs7O0lBcEJDLHlCQUFvQjs7Ozs7SUFDcEIsNEJBQThDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNRTENvbW1hbmQge1xuICBwcml2YXRlIHNxbDogc3RyaW5nO1xuICBwcml2YXRlIHBhcmFtczogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG5cblxuICBjb25zdHJ1Y3RvcihpbnN0cnVjdGlvbjogc3RyaW5nLCBwYXJhbXM6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLnNxbCA9IGluc3RydWN0aW9uO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG4gIHNldFNxbChpbnN0cnVjdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5zcWwgPSBpbnN0cnVjdGlvblxuICB9XG4gIHNldFBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhcmFtcy5wdXNoKHBhcmFtKTtcbiAgfVxuICBnZXRTcWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3FsO1xuICB9XG4gIGdldFBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbXM7XG4gIH1cbn1cbiJdfQ==