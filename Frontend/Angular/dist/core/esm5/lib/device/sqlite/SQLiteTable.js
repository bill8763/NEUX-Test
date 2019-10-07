/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SQLiteColumn } from './SQLiteColumn';
var SQLiteTable = /** @class */ (function () {
    function SQLiteTable(name, columns) {
        this.tableName = name;
        this.columns = columns;
        this.restrictions = [];
    }
    /**
     * @param {?} col
     * @param {?} value
     * @return {?}
     */
    SQLiteTable.prototype.setValue = /**
     * @param {?} col
     * @param {?} value
     * @return {?}
     */
    function (col, value) {
        this.columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getName() == col; })).forEach((/**
         * @param {?} col
         * @return {?}
         */
        function (col) {
            col.setValue(value);
        }));
    };
    /**
     * @param {?} col
     * @return {?}
     */
    SQLiteTable.prototype.getValue = /**
     * @param {?} col
     * @return {?}
     */
    function (col) {
        /** @type {?} */
        var cols = this.columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getName() == col; }));
        return col.length > 0 ? cols[0].getValue() : null;
    };
    /**
     * @param {?} col
     * @return {?}
     */
    SQLiteTable.prototype.hasColumn = /**
     * @param {?} col
     * @return {?}
     */
    function (col) {
        /** @type {?} */
        var cols = this.columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getName() == col; }));
        return cols.length > 0;
    };
    /**
     * @return {?}
     */
    SQLiteTable.prototype.getTableName = /**
     * @return {?}
     */
    function () {
        return this.tableName;
    };
    /**
     * @return {?}
     */
    SQLiteTable.prototype.getColumns = /**
     * @return {?}
     */
    function () {
        return this.columns;
    };
    /**
     * @param {?} restriction
     * @return {?}
     */
    SQLiteTable.prototype.addRestriction = /**
     * @param {?} restriction
     * @return {?}
     */
    function (restriction) {
        this.restrictions.push(restriction);
    };
    /**
     * @return {?}
     */
    SQLiteTable.prototype.getRestrictions = /**
     * @return {?}
     */
    function () {
        return this.restrictions;
    };
    /**
     * @return {?}
     */
    SQLiteTable.prototype.cloneTable = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var colArray = [];
        try {
            for (var _b = tslib_1.__values(this.columns), _c = _b.next(); !_c.done; _c = _b.next()) {
                var column = _c.value;
                /** @type {?} */
                var clone_obj = Object.create(SQLiteColumn.prototype);
                clone_obj = Object.assign(clone_obj, column);
                colArray.push(clone_obj);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return new SQLiteTable(this.tableName, colArray);
    };
    /**
     * @return {?}
     */
    SQLiteTable.prototype.isSetted = /**
     * @return {?}
     */
    function () {
        return this.getColumns().map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getValue() !== undefined; })).length > 0;
    };
    return SQLiteTable;
}());
export { SQLiteTable };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SQLiteTable.prototype.tableName;
    /**
     * @type {?}
     * @private
     */
    SQLiteTable.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    SQLiteTable.prototype.restrictions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1FMaXRlVGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RldmljZS9zcWxpdGUvU1FMaXRlVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHOUM7SUFJRSxxQkFBWSxJQUFZLEVBQUUsT0FBNEI7UUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBQ0QsOEJBQVE7Ozs7O0lBQVIsVUFBUyxHQUFXLEVBQUUsS0FBVTtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLEVBQWxCLENBQWtCLEVBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxHQUFHO1lBQ3ZELEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOzs7OztJQUNELDhCQUFROzs7O0lBQVIsVUFBUyxHQUFXOztZQUNkLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLEVBQWxCLENBQWtCLEVBQUM7UUFDdkQsT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCwrQkFBUzs7OztJQUFULFVBQVUsR0FBVzs7WUFDZixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxFQUFsQixDQUFrQixFQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGtDQUFZOzs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7O0lBQ0QsZ0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsb0NBQWM7Ozs7SUFBZCxVQUFlLFdBQXlCO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFDRCxxQ0FBZTs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGdDQUFVOzs7SUFBVjs7O1lBQ00sUUFBUSxHQUFHLEVBQUU7O1lBQ2pCLEtBQW1CLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFBLGdCQUFBLDRCQUFFO2dCQUE1QixJQUFJLE1BQU0sV0FBQTs7b0JBQ1QsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFDckQsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFCOzs7Ozs7Ozs7UUFDRCxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELDhCQUFROzs7SUFBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxTQUFTLEVBQTFCLENBQTBCLEVBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFSCxrQkFBQztBQUFELENBQUMsQUFwREQsSUFvREM7Ozs7Ozs7SUFuREMsZ0NBQTBCOzs7OztJQUMxQiw4QkFBcUM7Ozs7O0lBQ3JDLG1DQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNRTGl0ZUNvbHVtbiB9IGZyb20gJy4vU1FMaXRlQ29sdW1uJztcbmltcG9ydCB7IElSZXN0cmljdGlvbiB9IGZyb20gJy4vUmVzdHJpY3Rpb24uaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIFNRTGl0ZVRhYmxlIHtcbiAgcHJpdmF0ZSB0YWJsZU5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBjb2x1bW5zOiBBcnJheTxTUUxpdGVDb2x1bW4+O1xuICBwcml2YXRlIHJlc3RyaWN0aW9uczogQXJyYXk8SVJlc3RyaWN0aW9uPjtcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb2x1bW5zOiBBcnJheTxTUUxpdGVDb2x1bW4+KSB7XG4gICAgdGhpcy50YWJsZU5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgdGhpcy5yZXN0cmljdGlvbnMgPSBbXTtcbiAgfVxuICBzZXRWYWx1ZShjb2w6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIHRoaXMuY29sdW1ucy5maWx0ZXIoeCA9PiB4LmdldE5hbWUoKSA9PSBjb2wpLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgY29sLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9KVxuICB9XG4gIGdldFZhbHVlKGNvbDogc3RyaW5nKSB7XG4gICAgbGV0IGNvbHMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKHggPT4geC5nZXROYW1lKCkgPT0gY29sKTtcbiAgICByZXR1cm4gY29sLmxlbmd0aCA+IDAgPyBjb2xzWzBdLmdldFZhbHVlKCkgOiBudWxsO1xuICB9XG5cbiAgaGFzQ29sdW1uKGNvbDogc3RyaW5nKSB7XG4gICAgbGV0IGNvbHMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKHggPT4geC5nZXROYW1lKCkgPT0gY29sKTtcbiAgICByZXR1cm4gY29scy5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ2V0VGFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRhYmxlTmFtZTtcbiAgfVxuICBnZXRDb2x1bW5zKCkge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbnM7XG4gIH1cblxuICBhZGRSZXN0cmljdGlvbihyZXN0cmljdGlvbjogSVJlc3RyaWN0aW9uKSB7XG4gICAgdGhpcy5yZXN0cmljdGlvbnMucHVzaChyZXN0cmljdGlvbik7XG4gIH1cbiAgZ2V0UmVzdHJpY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3RyaWN0aW9ucztcbiAgfVxuXG4gIGNsb25lVGFibGUoKTogU1FMaXRlVGFibGUge1xuICAgIHZhciBjb2xBcnJheSA9IFtdO1xuICAgIGZvciAodmFyIGNvbHVtbiBvZiB0aGlzLmNvbHVtbnMpIHtcbiAgICAgIHZhciBjbG9uZV9vYmogPSBPYmplY3QuY3JlYXRlKFNRTGl0ZUNvbHVtbi5wcm90b3R5cGUpO1xuICAgICAgY2xvbmVfb2JqID0gT2JqZWN0LmFzc2lnbihjbG9uZV9vYmosIGNvbHVtbik7XG4gICAgICBjb2xBcnJheS5wdXNoKGNsb25lX29iaik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgU1FMaXRlVGFibGUodGhpcy50YWJsZU5hbWUsIGNvbEFycmF5KTtcbiAgfVxuXG4gIGlzU2V0dGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbHVtbnMoKS5tYXAoeCA9PiB4LmdldFZhbHVlKCkgIT09IHVuZGVmaW5lZCkubGVuZ3RoID4gMDtcbiAgfVxuXG59XG4iXX0=