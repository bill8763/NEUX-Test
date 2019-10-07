/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValidController = /** @class */ (function () {
    function ValidController() {
    }
    /**
     * @param {?} bean
     * @return {?}
     */
    ValidController.addBean = /**
     * @param {?} bean
     * @return {?}
     */
    function (bean) {
        if (this.beanPool.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.name === bean.name; })).length === 0)
            this.beanPool.push(bean);
    };
    /**
     * @param {?} data
     * @param {?} name
     * @return {?}
     */
    ValidController.validObject = /**
     * @param {?} data
     * @param {?} name
     * @return {?}
     */
    function (data, name) {
        try {
            console.log("validObject:", name, data);
            /** @type {?} */
            var bean = this.getBean(name);
            if (bean) {
                /** @type {?} */
                var validResult = bean.validSelf(data);
                if (validResult.length > 0) {
                    this.errorHandler(validResult, name);
                }
                return validResult.length === 0;
            }
            else {
                throw new Error("Cannot find Bean " + name + ".");
            }
        }
        catch (error) {
            console.error('Valid Object error', error);
            return true;
        }
    };
    /**
     * @param {?} objectName
     * @param {?} propertyName
     * @param {?} condition
     * @return {?}
     */
    ValidController.addCondition = /**
     * @param {?} objectName
     * @param {?} propertyName
     * @param {?} condition
     * @return {?}
     */
    function (objectName, propertyName, condition) {
        /** @type {?} */
        var bean = this.getBean(objectName);
        /** @type {?} */
        var property = bean.getOrCreateProperty(propertyName);
        console.log("addCondition:", bean, property);
        property.addCondition(condition);
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    ValidController.getBean = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this.beanPool.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.name === name; })).length > 0)
            return this.beanPool.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.name === name; }))[0];
        else
            return null;
    };
    /**
     * @private
     * @param {?} validResult
     * @param {?} name
     * @return {?}
     */
    ValidController.errorHandler = /**
     * @private
     * @param {?} validResult
     * @param {?} name
     * @return {?}
     */
    function (validResult, name) {
        console.error(validResult.reduce((/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        function (x, y) { return x + "\n" + y; }), "Class " + name + " valid error:"));
    };
    ValidController.beanPool = [];
    return ValidController;
}());
export { ValidController };
if (false) {
    /** @type {?} */
    ValidController.beanPool;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi92YWxpZC9WYWxpZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBO0lBQUE7SUE2Q0EsQ0FBQzs7Ozs7SUExQ2lCLHVCQUFPOzs7O0lBQXJCLFVBQXNCLElBQWU7UUFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBcEIsQ0FBb0IsRUFBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVhLDJCQUFXOzs7OztJQUF6QixVQUEwQixJQUFTLEVBQUUsSUFBWTtRQUM3QyxJQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztnQkFDcEMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzdCLElBQUksSUFBSSxFQUFFOztvQkFDRixXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RDLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN4QztnQkFDRCxPQUFPLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO2FBQ25DO2lCQUNJO2dCQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQW9CLElBQUksTUFBRyxDQUFDLENBQUM7YUFDaEQ7U0FDSjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzQyxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7OztJQUVhLDRCQUFZOzs7Ozs7SUFBMUIsVUFBMkIsVUFBa0IsRUFBRSxZQUFvQixFQUFFLFNBQXlCOztZQUN0RixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7O1lBQy9CLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3QyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUVjLHVCQUFPOzs7OztJQUF0QixVQUF1QixJQUFZO1FBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksRUFBZixDQUFlLEVBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNyRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWYsQ0FBZSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7O1lBRXBELE9BQU8sSUFBSSxDQUFDO0lBQ3BCLENBQUM7Ozs7Ozs7SUFFYyw0QkFBWTs7Ozs7O0lBQTNCLFVBQTRCLFdBQTBCLEVBQUUsSUFBWTtRQUNoRSxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFHLENBQUMsVUFBSyxDQUFHLEVBQVosQ0FBWSxHQUFFLFdBQVMsSUFBSSxrQkFBZSxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBM0NhLHdCQUFRLEdBQXFCLEVBQUUsQ0FBQztJQTRDbEQsc0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQTdDWSxlQUFlOzs7SUFDeEIseUJBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRCZWFuIH0gZnJvbSAnLi9WYWxpZEJlYW4nO1xuaW1wb3J0IHsgVmFsaWRDb25kaXRpb24gfSBmcm9tICcuL2NvbmRpdGlvbi9WYWxpZENvbmRpdGlvbi5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRDb250cm9sbGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGJlYW5Qb29sOiBBcnJheTxWYWxpZEJlYW4+ID0gW107XG5cbiAgICBwdWJsaWMgc3RhdGljIGFkZEJlYW4oYmVhbjogVmFsaWRCZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmJlYW5Qb29sLmZpbHRlcih4ID0+IHgubmFtZSA9PT0gYmVhbi5uYW1lKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB0aGlzLmJlYW5Qb29sLnB1c2goYmVhbik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB2YWxpZE9iamVjdChkYXRhOiBhbnksIG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWxpZE9iamVjdDpcIiwgbmFtZSwgZGF0YSk7XG4gICAgICAgICAgICBsZXQgYmVhbiA9IHRoaXMuZ2V0QmVhbihuYW1lKTtcbiAgICAgICAgICAgIGlmIChiZWFuKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkUmVzdWx0ID0gYmVhbi52YWxpZFNlbGYoZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkUmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIodmFsaWRSZXN1bHQsIG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRSZXN1bHQubGVuZ3RoID09PSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBCZWFuICR7bmFtZX0uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdWYWxpZCBPYmplY3QgZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYWRkQ29uZGl0aW9uKG9iamVjdE5hbWU6IHN0cmluZywgcHJvcGVydHlOYW1lOiBzdHJpbmcsIGNvbmRpdGlvbjogVmFsaWRDb25kaXRpb24pOiB2b2lkIHtcbiAgICAgICAgbGV0IGJlYW4gPSB0aGlzLmdldEJlYW4ob2JqZWN0TmFtZSk7XG4gICAgICAgIGxldCBwcm9wZXJ0eSA9IGJlYW4uZ2V0T3JDcmVhdGVQcm9wZXJ0eShwcm9wZXJ0eU5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFkZENvbmRpdGlvbjpcIiwgYmVhbiwgcHJvcGVydHkpO1xuICAgICAgICBwcm9wZXJ0eS5hZGRDb25kaXRpb24oY29uZGl0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRCZWFuKG5hbWU6IHN0cmluZyk6IFZhbGlkQmVhbiB7XG4gICAgICAgIGlmICh0aGlzLmJlYW5Qb29sLmZpbHRlcih4ID0+IHgubmFtZSA9PT0gbmFtZSkubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJlYW5Qb29sLmZpbHRlcih4ID0+IHgubmFtZSA9PT0gbmFtZSlbMF1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZXJyb3JIYW5kbGVyKHZhbGlkUmVzdWx0OiBBcnJheTxzdHJpbmc+LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcih2YWxpZFJlc3VsdC5yZWR1Y2UoKHgsIHkpID0+IGAke3h9XFxuJHt5fWAsIGBDbGFzcyAke25hbWV9IHZhbGlkIGVycm9yOmApKTtcbiAgICB9XG59XG5cblxuXG5cblxuIl19