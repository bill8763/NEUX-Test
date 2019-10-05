/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ValidController } from "../ValidController";
import { Observable, isObservable } from "rxjs";
/**
 * @param {?=} type
 * @return {?}
 */
export function Valid(type) {
    console.log("valid type:", type);
    return (/**
     * @param {?} target
     * @param {?} propertyName
     * @param {?} propertyDesciptor
     * @return {?}
     */
    function (target, propertyName, propertyDesciptor) {
        /** @type {?} */
        var method = propertyDesciptor.value;
        propertyDesciptor.value = (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log('pool:', ValidController.beanPool);
            /** @type {?} */
            var result = method.apply(this, args);
            console.log('valid result: ', result);
            if (isObservable(result)) {
                console.log('isObservable(result)');
                return handleObservable(result);
            }
            else if (result instanceof Promise) {
                console.log('result instanceof Promise');
                return handlePromise(result);
            }
            else {
                console.log('not Observable, not instanceof Promise');
                validObject(result);
                return result;
            }
        });
        return propertyDesciptor;
    });
}
/**
 * @param {?} result
 * @return {?}
 */
function handleObservable(result) {
    return new Observable((/**
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        result.subscribe({
            next: /**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                validObject(x);
                observer.next(x);
            },
            error: /**
             * @param {?} err
             * @return {?}
             */
            function (err) { observer.error(err); },
            complete: /**
             * @return {?}
             */
            function () { observer.complete(); }
        });
    }));
}
/**
 * @param {?} result
 * @return {?}
 */
function handlePromise(result) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var resolved;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, result];
                case 1:
                    resolved = _a.sent();
                    validObject(resolved);
                    return [2 /*return*/, resolved];
            }
        });
    });
}
/**
 * @param {?} data
 * @return {?}
 */
function validObject(data) {
    console.log("Valid.ts validObject:", data);
    if (data instanceof Array)
        data.forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return validObject(x); }));
    else
        ValidController.validObject(data, data.beanName);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3ZhbGlkL2RlY29yYXRvci9WYWxpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBTSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFcEQsTUFBTSxnQkFBZ0IsSUFBVTtJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQzs7Ozs7O0lBQU8sVUFDSCxNQUFnQixFQUNoQixZQUFvQixFQUNwQixpQkFBcUM7O1lBQy9CLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxLQUFLO1FBQ3RDLGlCQUFpQixDQUFDLEtBQUs7Ozs7UUFBRztZQUFVLGNBQU87aUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztnQkFBUCx5QkFBTzs7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztnQkFDM0MsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3BDLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkM7aUJBQ0ksSUFBSSxNQUFNLFlBQVksT0FBTyxFQUFFO2dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2hDO2lCQUNJO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQztnQkFDdEQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixPQUFPLE1BQU0sQ0FBQzthQUNqQjtRQUNMLENBQUMsQ0FBQSxDQUFBO1FBQ0QsT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDLEVBQUE7QUFDTCxDQUFDOzs7OztBQUVELDBCQUEwQixNQUF1QjtJQUM3QyxPQUFPLElBQUksVUFBVTs7OztJQUFDLFVBQUMsUUFBUTtRQUMzQixNQUFNLENBQUMsU0FBUyxDQUNaO1lBQ0ksSUFBSTs7OztzQkFBQyxDQUFDO2dCQUNGLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7WUFDRCxLQUFLOzs7O3NCQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxRQUFROzs7MEJBQUssUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN0QyxDQUFDLENBQUE7SUFDVixDQUFDLEVBQUMsQ0FBQztBQUNQLENBQUM7Ozs7O0FBRUQsdUJBQTZCLE1BQW9COzs7Ozt3QkFDOUIscUJBQU0sTUFBTSxFQUFBOztvQkFBdkIsUUFBUSxHQUFHLFNBQVk7b0JBQzNCLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEIsc0JBQU8sUUFBUSxFQUFDOzs7O0NBQ25COzs7OztBQUVELHFCQUFxQixJQUFTO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsSUFBSSxJQUFJLFlBQVksS0FBSztRQUNyQixJQUFJLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsRUFBQyxDQUFDOztRQUVsQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkQ29udHJvbGxlciB9IGZyb20gXCIuLi9WYWxpZENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIGlzT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gVmFsaWQodHlwZT86IGFueSk6IE1ldGhvZERlY29yYXRvciB7XG4gICAgY29uc29sZS5sb2coXCJ2YWxpZCB0eXBlOlwiLCB0eXBlKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKFxuICAgICAgICB0YXJnZXQ6IEZ1bmN0aW9uLFxuICAgICAgICBwcm9wZXJ0eU5hbWU6IHN0cmluZyxcbiAgICAgICAgcHJvcGVydHlEZXNjaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikge1xuICAgICAgICBjb25zdCBtZXRob2QgPSBwcm9wZXJ0eURlc2NpcHRvci52YWx1ZTtcbiAgICAgICAgcHJvcGVydHlEZXNjaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Bvb2w6JywgVmFsaWRDb250cm9sbGVyLmJlYW5Qb29sKTtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBtZXRob2QuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWQgcmVzdWx0OiAnLCByZXN1bHQpO1xuICAgICAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2lzT2JzZXJ2YWJsZShyZXN1bHQpJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU9ic2VydmFibGUocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVQcm9taXNlKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IE9ic2VydmFibGUsIG5vdCBpbnN0YW5jZW9mIFByb21pc2UnKTtcbiAgICAgICAgICAgICAgICB2YWxpZE9iamVjdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BlcnR5RGVzY2lwdG9yO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlT2JzZXJ2YWJsZShyZXN1bHQ6IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICByZXN1bHQuc3Vic2NyaWJlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5leHQoeCkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZE9iamVjdCh4KTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh4KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yKGVycikgeyBvYnNlcnZlci5lcnJvcihlcnIpOyB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCkgeyBvYnNlcnZlci5jb21wbGV0ZSgpOyB9XG4gICAgICAgICAgICB9KVxuICAgIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVQcm9taXNlKHJlc3VsdDogUHJvbWlzZTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICBsZXQgcmVzb2x2ZWQgPSBhd2FpdCByZXN1bHQ7XG4gICAgdmFsaWRPYmplY3QocmVzb2x2ZWQpO1xuICAgIHJldHVybiByZXNvbHZlZDtcbn1cblxuZnVuY3Rpb24gdmFsaWRPYmplY3QoZGF0YTogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJWYWxpZC50cyB2YWxpZE9iamVjdDpcIiwgZGF0YSk7XG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgZGF0YS5mb3JFYWNoKHggPT4gdmFsaWRPYmplY3QoeCkpO1xuICAgIGVsc2VcbiAgICAgICAgVmFsaWRDb250cm9sbGVyLnZhbGlkT2JqZWN0KGRhdGEsIGRhdGEuYmVhbk5hbWUpO1xufSJdfQ==