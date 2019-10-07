/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IDao() { }
if (false) {
    /**
     * @return {?}
     */
    IDao.prototype.getSchema = function () { };
    /**
     * @param {?} table
     * @return {?}
     */
    IDao.prototype.insertByTable = function (table) { };
    /**
     * @param {?} table
     * @return {?}
     */
    IDao.prototype.updateByTable = function (table) { };
    /**
     * @param {?} table
     * @return {?}
     */
    IDao.prototype.deleteByTable = function (table) { };
    /**
     * @param {?} table
     * @return {?}
     */
    IDao.prototype.queryByTable = function (table) { };
    /**
     * @param {?} commandArray
     * @return {?}
     */
    IDao.prototype.excuteSqlCommand = function (commandArray) { };
    /**
     * @param {?} table
     * @return {?}
     */
    IDao.prototype.transactionInsert = function (table) { };
    /**
     * @param {?} table
     * @return {?}
     */
    IDao.prototype.transactionUpdate = function (table) { };
    /**
     * @param {?} table
     * @return {?}
     */
    IDao.prototype.transactionDelete = function (table) { };
    /**
     * @return {?}
     */
    IDao.prototype.runTransaction = function () { };
    /**
     * @return {?}
     */
    IDao.prototype.clearTransaction = function () { };
    /**
     * @param {?} command
     * @return {?}
     */
    IDao.prototype.transactionSqlCommand = function (command) { };
    /**
     * @return {?}
     */
    IDao.prototype.openDataBase = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFvLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL3NxbGl0ZS9EYW8uaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSwwQkFjQzs7Ozs7SUFiRywyQ0FBdUM7Ozs7O0lBQ3ZDLG9EQUE4RDs7Ozs7SUFDOUQsb0RBQThEOzs7OztJQUM5RCxvREFBOEQ7Ozs7O0lBQzlELG1EQUE2RDs7Ozs7SUFDN0QsOERBQXVEOzs7OztJQUN2RCx3REFBMkM7Ozs7O0lBQzNDLHdEQUEyQzs7Ozs7SUFDM0Msd0RBQTJDOzs7O0lBQzNDLGdEQUFzQjs7OztJQUN0QixrREFBd0I7Ozs7O0lBQ3hCLDhEQUFnRDs7OztJQUNoRCw4Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTUUxpdGVUYWJsZSB9IGZyb20gXCIuL1NRTGl0ZVRhYmxlXCI7XG5pbXBvcnQgeyBTUUxDb21tYW5kIH0gZnJvbSBcIi4vU1FMQ29tbWFuZFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCIuL1NRTGl0ZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTUUxpdGVEYXRhYmFzZSB9IGZyb20gXCIuL1NRTGl0ZURhdGFiYXNlXCI7XG5leHBvcnQgaW50ZXJmYWNlIElEYW8ge1xuICAgIGdldFNjaGVtYSgpOiBPYnNlcnZhYmxlPE1hcDxhbnksIGFueT4+O1xuICAgIGluc2VydEJ5VGFibGUodGFibGU6IFNRTGl0ZVRhYmxlKTogT2JzZXJ2YWJsZTxTUUxpdGVSZXNwb25zZT47XG4gICAgdXBkYXRlQnlUYWJsZSh0YWJsZTogU1FMaXRlVGFibGUpOiBPYnNlcnZhYmxlPFNRTGl0ZVJlc3BvbnNlPjtcbiAgICBkZWxldGVCeVRhYmxlKHRhYmxlOiBTUUxpdGVUYWJsZSk6IE9ic2VydmFibGU8U1FMaXRlUmVzcG9uc2U+O1xuICAgIHF1ZXJ5QnlUYWJsZSh0YWJsZTogU1FMaXRlVGFibGUpOiBPYnNlcnZhYmxlPFNRTGl0ZVJlc3BvbnNlPjtcbiAgICBleGN1dGVTcWxDb21tYW5kKGNvbW1hbmRBcnJheTogQXJyYXk8U1FMQ29tbWFuZD4pOiBhbnk7XG4gICAgdHJhbnNhY3Rpb25JbnNlcnQodGFibGU6IFNRTGl0ZVRhYmxlKTogYW55O1xuICAgIHRyYW5zYWN0aW9uVXBkYXRlKHRhYmxlOiBTUUxpdGVUYWJsZSk6IGFueTtcbiAgICB0cmFuc2FjdGlvbkRlbGV0ZSh0YWJsZTogU1FMaXRlVGFibGUpOiBhbnk7XG4gICAgcnVuVHJhbnNhY3Rpb24oKTogYW55O1xuICAgIGNsZWFyVHJhbnNhY3Rpb24oKTogYW55O1xuICAgIHRyYW5zYWN0aW9uU3FsQ29tbWFuZChjb21tYW5kOiBTUUxDb21tYW5kKTogYW55O1xuICAgIG9wZW5EYXRhQmFzZSgpOiBhbnk7XG59Il19