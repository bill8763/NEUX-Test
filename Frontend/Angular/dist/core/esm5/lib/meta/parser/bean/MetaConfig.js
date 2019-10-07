/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { MetaColumn } from './MetaColumn';
import * as _ from 'lodash';
var MetaConfig = /** @class */ (function () {
    function MetaConfig() {
        this.source = null;
        this.Rows = [];
        this.Columns = [];
        this.Footer = [];
    }
    /**
     * @param {?} columnList
     * @param {?} groupList
     * @return {?}
     */
    MetaConfig.prototype.setColumn = /**
     * @param {?} columnList
     * @param {?} groupList
     * @return {?}
     */
    function (columnList, groupList) {
        var _this = this;
        console.log("MetaConfig setColumn:", columnList, groupList);
        // Set Column MetaConfig
        columnList = columnList.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.createColumnObject(x); }));
        if (groupList.length > 0) {
            /** @type {?} */
            var colsInGroup_1 = _.flatMap(groupList, (/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.columns; }));
            groupList = groupList.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return _this.createGroupColumnObject(x, columnList); }));
            columnList = columnList.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return !colsInGroup_1.includes(x.id); }));
            groupList.forEach((/**
             * @param {?} ele
             * @return {?}
             */
            function (ele) {
                ele.groupRows = _this.convertColumns2Row(ele.groupColumns);
                columnList.splice(ele.order, 0, ele);
            }));
            columnList.forEach((/**
             * @param {?} ele
             * @param {?} index
             * @return {?}
             */
            function (ele, index) {
                ele.order = index;
            }));
        }
        this.Columns = columnList;
        this.Rows = this.convertColumns2Row(columnList);
    };
    /**
     * @param {?} footerList
     * @return {?}
     */
    MetaConfig.prototype.setFooter = /**
     * @param {?} footerList
     * @return {?}
     */
    function (footerList) {
        this.Footer = footerList.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            return new MetaColumn(x.id, x.name, x.type);
        }));
    };
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    MetaConfig.prototype.createColumnObject = /**
     * @private
     * @param {?} column
     * @return {?}
     */
    function (column) {
        /** @type {?} */
        var columnObj = new MetaColumn(column.id, column.name, column.type);
        columnObj.optionRef = column.ref;
        columnObj.showTitle = column.showTitle;
        columnObj.required = column.required;
        columnObj.readonly = column.readonly;
        columnObj.grid = column.grid;
        columnObj.inline = column.inline;
        columnObj.order = column.order;
        columnObj.default = column.default;
        columnObj.maxLength = column.maxLength;
        columnObj.groupColumns = column.groupColumns;
        columnObj.icon = column.icon;
        columnObj.canAdd = column.canAdd;
        columnObj.maxNumber = column.maxNumber;
        columnObj.placeholder = column.placeholder;
        columnObj.showDefaultOption = column.showDefaultOption;
        columnObj.rowTitle = column.rowTitle;
        return columnObj;
    };
    /**
     * @private
     * @param {?} groupColumn
     * @param {?} coulmnList
     * @return {?}
     */
    MetaConfig.prototype.createGroupColumnObject = /**
     * @private
     * @param {?} groupColumn
     * @param {?} coulmnList
     * @return {?}
     */
    function (groupColumn, coulmnList) {
        /** @type {?} */
        var columnIDs = groupColumn.columns;
        /** @type {?} */
        var groupColumnObj = this.createColumnObject(groupColumn);
        groupColumnObj.groupColumns = columnIDs.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return coulmnList.filter((/**
         * @param {?} y
         * @return {?}
         */
        function (y) { return y.id === x; }))[0]; }));
        return groupColumnObj;
    };
    /**
     * @private
     * @param {?} columnList
     * @return {?}
     */
    MetaConfig.prototype.convertColumns2Row = /**
     * @private
     * @param {?} columnList
     * @return {?}
     */
    function (columnList) {
        console.log("MetaConfig convertColumns2Row:", columnList);
        /** @type {?} */
        var tmpArray = [];
        /** @type {?} */
        var rowArray = [];
        for (var i = 0; i < columnList.length; i++) {
            tmpArray.push(columnList[i]);
            if (columnList[i].inline === false || i === (columnList.length - 1)) {
                rowArray.push(tslib_1.__spread(tmpArray));
                tmpArray = [];
            }
        }
        return rowArray;
    };
    return MetaConfig;
}());
export { MetaConfig };
if (false) {
    /** @type {?} */
    MetaConfig.prototype.source;
    /** @type {?} */
    MetaConfig.prototype.Rows;
    /** @type {?} */
    MetaConfig.prototype.Columns;
    /** @type {?} */
    MetaConfig.prototype.Footer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbWV0YS9wYXJzZXIvYmVhbi9NZXRhQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QjtJQUNJO1FBRU8sV0FBTSxHQUFlLElBQUksQ0FBQztRQUMxQixTQUFJLEdBQTZCLEVBQUUsQ0FBQztRQUNwQyxZQUFPLEdBQXNCLEVBQUUsQ0FBQztRQUNoQyxXQUFNLEdBQXNCLEVBQUUsQ0FBQztJQUx0QixDQUFDOzs7Ozs7SUFPViw4QkFBUzs7Ozs7SUFBaEIsVUFBaUIsVUFBc0IsRUFBRSxTQUFxQjtRQUE5RCxpQkFrQkM7UUFqQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDNUQsd0JBQXdCO1FBQ3hCLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUExQixDQUEwQixFQUFDLENBQUM7UUFDN0QsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7Z0JBQ2xCLGFBQVcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7WUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxFQUFDO1lBQ3RELFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBM0MsQ0FBMkMsRUFBQyxDQUFDO1lBQzVFLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFB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RyxTQUFTLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFWLENBQVUsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFyQyxDQUFxQyxFQUFDLENBQUM7UUFDeEYsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRU8sdUNBQWtCOzs7OztJQUExQixVQUEyQixVQUE2QjtRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLFVBQVUsQ0FBQyxDQUFDOztZQUN0RCxRQUFRLEdBQUcsRUFBRTs7WUFDYixRQUFRLEdBQUcsRUFBRTtRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDakUsUUFBUSxDQUFDLElBQUksa0JBQUssUUFBUSxFQUFFLENBQUM7Z0JBQzdCLFFBQVEsR0FBRyxFQUFFLENBQUM7YUFDakI7U0FDSjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUEzRUQsSUEyRUM7Ozs7SUF4RUcsNEJBQWlDOztJQUNqQywwQkFBMkM7O0lBQzNDLDZCQUF1Qzs7SUFDdkMsNEJBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0YVNvdXJjZSB9IGZyb20gJy4vTWV0YVNvdXJjZSc7XG5pbXBvcnQgeyBNZXRhQ29sdW1uIH0gZnJvbSAnLi9NZXRhQ29sdW1uJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNsYXNzIE1ldGFDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBwdWJsaWMgc291cmNlOiBNZXRhU291cmNlID0gbnVsbDtcbiAgICBwdWJsaWMgUm93czogQXJyYXk8QXJyYXk8TWV0YUNvbHVtbj4+ID0gW107XG4gICAgcHVibGljIENvbHVtbnM6IEFycmF5PE1ldGFDb2x1bW4+ID0gW107XG4gICAgcHVibGljIEZvb3RlcjogQXJyYXk8TWV0YUNvbHVtbj4gPSBbXTtcblxuICAgIHB1YmxpYyBzZXRDb2x1bW4oY29sdW1uTGlzdDogQXJyYXk8YW55PiwgZ3JvdXBMaXN0OiBBcnJheTxhbnk+KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWV0YUNvbmZpZyBzZXRDb2x1bW46XCIsIGNvbHVtbkxpc3QsIGdyb3VwTGlzdCk7XG4gICAgICAgIC8vIFNldCBDb2x1bW4gTWV0YUNvbmZpZ1xuICAgICAgICBjb2x1bW5MaXN0ID0gY29sdW1uTGlzdC5tYXAoeCA9PiB0aGlzLmNyZWF0ZUNvbHVtbk9iamVjdCh4KSk7XG4gICAgICAgIGlmIChncm91cExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGNvbHNJbkdyb3VwID0gXy5mbGF0TWFwKGdyb3VwTGlzdCwgeCA9PiB4LmNvbHVtbnMpO1xuICAgICAgICAgICAgZ3JvdXBMaXN0ID0gZ3JvdXBMaXN0Lm1hcCh4ID0+IHRoaXMuY3JlYXRlR3JvdXBDb2x1bW5PYmplY3QoeCwgY29sdW1uTGlzdCkpO1xuICAgICAgICAgICAgY29sdW1uTGlzdCA9IGNvbHVtbkxpc3QuZmlsdGVyKHggPT4gIWNvbHNJbkdyb3VwLmluY2x1ZGVzKHguaWQpKTtcbiAgICAgICAgICAgIGdyb3VwTGlzdC5mb3JFYWNoKChlbGU6IE1ldGFDb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgICBlbGUuZ3JvdXBSb3dzID0gdGhpcy5jb252ZXJ0Q29sdW1uczJSb3coZWxlLmdyb3VwQ29sdW1ucyk7XG4gICAgICAgICAgICAgICAgY29sdW1uTGlzdC5zcGxpY2UoZWxlLm9yZGVyLCAwLCBlbGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb2x1bW5MaXN0LmZvckVhY2goKGVsZTogTWV0YUNvbHVtbiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGVsZS5vcmRlciA9IGluZGV4O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkNvbHVtbnMgPSBjb2x1bW5MaXN0O1xuICAgICAgICB0aGlzLlJvd3MgPSB0aGlzLmNvbnZlcnRDb2x1bW5zMlJvdyhjb2x1bW5MaXN0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Rm9vdGVyKGZvb3Rlckxpc3Q6IEFycmF5PGFueT4pIHtcbiAgICAgICAgdGhpcy5Gb290ZXIgPSBmb290ZXJMaXN0Lm1hcCh4ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWV0YUNvbHVtbih4LmlkLCB4Lm5hbWUsIHgudHlwZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDb2x1bW5PYmplY3QoY29sdW1uOiBhbnkpOiBNZXRhQ29sdW1uIHtcbiAgICAgICAgbGV0IGNvbHVtbk9iaiA9IG5ldyBNZXRhQ29sdW1uKGNvbHVtbi5pZCwgY29sdW1uLm5hbWUsIGNvbHVtbi50eXBlKTtcbiAgICAgICAgY29sdW1uT2JqLm9wdGlvblJlZiA9IGNvbHVtbi5yZWY7XG4gICAgICAgIGNvbHVtbk9iai5zaG93VGl0bGUgPSBjb2x1bW4uc2hvd1RpdGxlO1xuICAgICAgICBjb2x1bW5PYmoucmVxdWlyZWQgPSBjb2x1bW4ucmVxdWlyZWQ7XG4gICAgICAgIGNvbHVtbk9iai5yZWFkb25seSA9IGNvbHVtbi5yZWFkb25seTtcbiAgICAgICAgY29sdW1uT2JqLmdyaWQgPSBjb2x1bW4uZ3JpZDtcbiAgICAgICAgY29sdW1uT2JqLmlubGluZSA9IGNvbHVtbi5pbmxpbmU7XG4gICAgICAgIGNvbHVtbk9iai5vcmRlciA9IGNvbHVtbi5vcmRlcjtcbiAgICAgICAgY29sdW1uT2JqLmRlZmF1bHQgPSBjb2x1bW4uZGVmYXVsdDtcbiAgICAgICAgY29sdW1uT2JqLm1heExlbmd0aCA9IGNvbHVtbi5tYXhMZW5ndGg7XG4gICAgICAgIGNvbHVtbk9iai5ncm91cENvbHVtbnMgPSBjb2x1bW4uZ3JvdXBDb2x1bW5zO1xuICAgICAgICBjb2x1bW5PYmouaWNvbiA9IGNvbHVtbi5pY29uO1xuICAgICAgICBjb2x1bW5PYmouY2FuQWRkID0gY29sdW1uLmNhbkFkZDtcbiAgICAgICAgY29sdW1uT2JqLm1heE51bWJlciA9IGNvbHVtbi5tYXhOdW1iZXI7XG4gICAgICAgIGNvbHVtbk9iai5wbGFjZWhvbGRlciA9IGNvbHVtbi5wbGFjZWhvbGRlcjtcbiAgICAgICAgY29sdW1uT2JqLnNob3dEZWZhdWx0T3B0aW9uID0gY29sdW1uLnNob3dEZWZhdWx0T3B0aW9uO1xuICAgICAgICBjb2x1bW5PYmoucm93VGl0bGUgPSBjb2x1bW4ucm93VGl0bGU7XG4gICAgICAgIHJldHVybiBjb2x1bW5PYmo7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVHcm91cENvbHVtbk9iamVjdChncm91cENvbHVtbjogYW55LCBjb3VsbW5MaXN0OiBBcnJheTxNZXRhQ29sdW1uPik6IE1ldGFDb2x1bW4ge1xuICAgICAgICBsZXQgY29sdW1uSURzID0gZ3JvdXBDb2x1bW4uY29sdW1ucztcbiAgICAgICAgbGV0IGdyb3VwQ29sdW1uT2JqID0gdGhpcy5jcmVhdGVDb2x1bW5PYmplY3QoZ3JvdXBDb2x1bW4pO1xuICAgICAgICBncm91cENvbHVtbk9iai5ncm91cENvbHVtbnMgPSBjb2x1bW5JRHMubWFwKHggPT4gY291bG1uTGlzdC5maWx0ZXIoeSA9PiB5LmlkID09PSB4KVswXSk7XG4gICAgICAgIHJldHVybiBncm91cENvbHVtbk9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnZlcnRDb2x1bW5zMlJvdyhjb2x1bW5MaXN0OiBBcnJheTxNZXRhQ29sdW1uPik6IEFycmF5PEFycmF5PE1ldGFDb2x1bW4+PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWV0YUNvbmZpZyBjb252ZXJ0Q29sdW1uczJSb3c6XCIsIGNvbHVtbkxpc3QpO1xuICAgICAgICBsZXQgdG1wQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG1wQXJyYXkucHVzaChjb2x1bW5MaXN0W2ldKTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5MaXN0W2ldLmlubGluZSA9PT0gZmFsc2UgfHwgaSA9PT0gKGNvbHVtbkxpc3QubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICByb3dBcnJheS5wdXNoKFsuLi50bXBBcnJheV0pO1xuICAgICAgICAgICAgICAgIHRtcEFycmF5ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd0FycmF5O1xuICAgIH1cbn0iXX0=