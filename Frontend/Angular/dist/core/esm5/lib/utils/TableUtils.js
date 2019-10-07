/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var TableUtils = /** @class */ (function () {
    function TableUtils() {
    }
    /**
     * @param {?} tableObject
     * @param {?} data
     * @return {?}
     */
    TableUtils.fillTableColumn = /**
     * @param {?} tableObject
     * @param {?} data
     * @return {?}
     */
    function (tableObject, data) {
        var e_1, _a;
        /** @type {?} */
        var columns = tableObject.getColumns().map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getName(); })).filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x !== 'ClientID'; }));
        if (data != undefined) {
            if (columns.length > 0) {
                try {
                    for (var columns_1 = tslib_1.__values(columns), columns_1_1 = columns_1.next(); !columns_1_1.done; columns_1_1 = columns_1.next()) {
                        var col = columns_1_1.value;
                        if (data[col] != undefined)
                            tableObject.setValue(col, data[col]);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (columns_1_1 && !columns_1_1.done && (_a = columns_1.return)) _a.call(columns_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        return tableObject;
    };
    return TableUtils;
}());
export { TableUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVVdGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvVGFibGVVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBO0lBQUE7SUFhQSxDQUFDOzs7Ozs7SUFaVSwwQkFBZTs7Ozs7SUFBdEIsVUFBdUIsV0FBd0IsRUFBRSxJQUFTOzs7WUFDbEQsT0FBTyxHQUFHLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFVBQVUsRUFBaEIsQ0FBZ0IsRUFBQztRQUMxRixJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7WUFDbkIsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7b0JBQ3BCLEtBQWdCLElBQUEsWUFBQSxpQkFBQSxPQUFPLENBQUEsZ0NBQUEscURBQUU7d0JBQXBCLElBQUksR0FBRyxvQkFBQTt3QkFDUixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxTQUFTOzRCQUN0QixXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDNUM7Ozs7Ozs7OzthQUNKO1NBQ0o7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNRTGl0ZVRhYmxlIH0gZnJvbSBcIi4uL2RldmljZS9zcWxpdGUvU1FMaXRlVGFibGVcIjtcblxuZXhwb3J0IGNsYXNzIFRhYmxlVXRpbHMge1xuICAgIHN0YXRpYyBmaWxsVGFibGVDb2x1bW4odGFibGVPYmplY3Q6IFNRTGl0ZVRhYmxlLCBkYXRhOiBhbnkpOiBTUUxpdGVUYWJsZSB7XG4gICAgICAgIGxldCBjb2x1bW5zID0gdGFibGVPYmplY3QuZ2V0Q29sdW1ucygpLm1hcCh4ID0+IHguZ2V0TmFtZSgpKS5maWx0ZXIoeCA9PiB4ICE9PSAnQ2xpZW50SUQnKTtcbiAgICAgICAgaWYgKGRhdGEgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29sIG9mIGNvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbY29sXSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZU9iamVjdC5zZXRWYWx1ZShjb2wsIGRhdGFbY29sXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWJsZU9iamVjdDtcbiAgICB9XG59XG5cbiJdfQ==