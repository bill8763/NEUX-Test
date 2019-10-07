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
        const method = propertyDesciptor.value;
        propertyDesciptor.value = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            console.log('pool:', ValidController.beanPool);
            /** @type {?} */
            let result = method.apply(this, args);
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
    (observer) => {
        result.subscribe({
            /**
             * @param {?} x
             * @return {?}
             */
            next(x) {
                validObject(x);
                observer.next(x);
            },
            /**
             * @param {?} err
             * @return {?}
             */
            error(err) { observer.error(err); },
            /**
             * @return {?}
             */
            complete() { observer.complete(); }
        });
    }));
}
/**
 * @param {?} result
 * @return {?}
 */
function handlePromise(result) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        /** @type {?} */
        let resolved = yield result;
        validObject(resolved);
        return resolved;
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
        x => validObject(x)));
    else
        ValidController.validObject(data, data.beanName);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3ZhbGlkL2RlY29yYXRvci9WYWxpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBTSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFcEQsTUFBTSxnQkFBZ0IsSUFBVTtJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQzs7Ozs7O0lBQU8sVUFDSCxNQUFnQixFQUNoQixZQUFvQixFQUNwQixpQkFBcUM7O2NBQy9CLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxLQUFLO1FBQ3RDLGlCQUFpQixDQUFDLEtBQUs7Ozs7UUFBRyxVQUFVLEdBQUcsSUFBSTtZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7O2dCQUMzQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdEMsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuQztpQkFDSSxJQUFJLE1BQU0sWUFBWSxPQUFPLEVBQUU7Z0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFDekMsT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDaEM7aUJBQ0k7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO2dCQUN0RCxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLE9BQU8sTUFBTSxDQUFDO2FBQ2pCO1FBQ0wsQ0FBQyxDQUFBLENBQUE7UUFDRCxPQUFPLGlCQUFpQixDQUFDO0lBQzdCLENBQUMsRUFBQTtBQUNMLENBQUM7Ozs7O0FBRUQsMEJBQTBCLE1BQXVCO0lBQzdDLE9BQU8sSUFBSSxVQUFVOzs7O0lBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUMvQixNQUFNLENBQUMsU0FBUyxDQUNaOzs7OztZQUNJLElBQUksQ0FBQyxDQUFDO2dCQUNGLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7Ozs7O1lBQ0QsS0FBSyxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztZQUNuQyxRQUFRLEtBQUssUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN0QyxDQUFDLENBQUE7SUFDVixDQUFDLEVBQUMsQ0FBQztBQUNQLENBQUM7Ozs7O0FBRUQsdUJBQTZCLE1BQW9COzs7WUFDekMsUUFBUSxHQUFHLE1BQU0sTUFBTTtRQUMzQixXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztDQUFBOzs7OztBQUVELHFCQUFxQixJQUFTO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsSUFBSSxJQUFJLFlBQVksS0FBSztRQUNyQixJQUFJLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7O1FBRWxDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRDb250cm9sbGVyIH0gZnJvbSBcIi4uL1ZhbGlkQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgaXNPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBWYWxpZCh0eXBlPzogYW55KTogTWV0aG9kRGVjb3JhdG9yIHtcbiAgICBjb25zb2xlLmxvZyhcInZhbGlkIHR5cGU6XCIsIHR5cGUpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoXG4gICAgICAgIHRhcmdldDogRnVuY3Rpb24sXG4gICAgICAgIHByb3BlcnR5TmFtZTogc3RyaW5nLFxuICAgICAgICBwcm9wZXJ0eURlc2NpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHByb3BlcnR5RGVzY2lwdG9yLnZhbHVlO1xuICAgICAgICBwcm9wZXJ0eURlc2NpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncG9vbDonLCBWYWxpZENvbnRyb2xsZXIuYmVhblBvb2wpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCByZXN1bHQ6ICcsIHJlc3VsdCk7XG4gICAgICAgICAgICBpZiAoaXNPYnNlcnZhYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXNPYnNlcnZhYmxlKHJlc3VsdCknKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlT2JzZXJ2YWJsZShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVByb21pc2UocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgT2JzZXJ2YWJsZSwgbm90IGluc3RhbmNlb2YgUHJvbWlzZScpO1xuICAgICAgICAgICAgICAgIHZhbGlkT2JqZWN0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcGVydHlEZXNjaXB0b3I7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVPYnNlcnZhYmxlKHJlc3VsdDogT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgIHJlc3VsdC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmV4dCh4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkT2JqZWN0KHgpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IoZXJyKSB7IG9ic2VydmVyLmVycm9yKGVycik7IH0sXG4gICAgICAgICAgICAgICAgY29tcGxldGUoKSB7IG9ic2VydmVyLmNvbXBsZXRlKCk7IH1cbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVByb21pc2UocmVzdWx0OiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCByZXNvbHZlZCA9IGF3YWl0IHJlc3VsdDtcbiAgICB2YWxpZE9iamVjdChyZXNvbHZlZCk7XG4gICAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5mdW5jdGlvbiB2YWxpZE9iamVjdChkYXRhOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcIlZhbGlkLnRzIHZhbGlkT2JqZWN0OlwiLCBkYXRhKTtcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAgICBkYXRhLmZvckVhY2goeCA9PiB2YWxpZE9iamVjdCh4KSk7XG4gICAgZWxzZVxuICAgICAgICBWYWxpZENvbnRyb2xsZXIudmFsaWRPYmplY3QoZGF0YSwgZGF0YS5iZWFuTmFtZSk7XG59Il19