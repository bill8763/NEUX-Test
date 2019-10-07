/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MetaColumn } from './MetaColumn';
import * as _ from 'lodash';
export class MetaConfig {
    constructor() {
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
    setColumn(columnList, groupList) {
        console.log("MetaConfig setColumn:", columnList, groupList);
        // Set Column MetaConfig
        columnList = columnList.map((/**
         * @param {?} x
         * @return {?}
         */
        x => this.createColumnObject(x)));
        if (groupList.length > 0) {
            /** @type {?} */
            let colsInGroup = _.flatMap(groupList, (/**
             * @param {?} x
             * @return {?}
             */
            x => x.columns));
            groupList = groupList.map((/**
             * @param {?} x
             * @return {?}
             */
            x => this.createGroupColumnObject(x, columnList)));
            columnList = columnList.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => !colsInGroup.includes(x.id)));
            groupList.forEach((/**
             * @param {?} ele
             * @return {?}
             */
            (ele) => {
                ele.groupRows = this.convertColumns2Row(ele.groupColumns);
                columnList.splice(ele.order, 0, ele);
            }));
            columnList.forEach((/**
             * @param {?} ele
             * @param {?} index
             * @return {?}
             */
            (ele, index) => {
                ele.order = index;
            }));
        }
        this.Columns = columnList;
        this.Rows = this.convertColumns2Row(columnList);
    }
    /**
     * @param {?} footerList
     * @return {?}
     */
    setFooter(footerList) {
        this.Footer = footerList.map((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            return new MetaColumn(x.id, x.name, x.type);
        }));
    }
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    createColumnObject(column) {
        /** @type {?} */
        let columnObj = new MetaColumn(column.id, column.name, column.type);
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
    }
    /**
     * @private
     * @param {?} groupColumn
     * @param {?} coulmnList
     * @return {?}
     */
    createGroupColumnObject(groupColumn, coulmnList) {
        /** @type {?} */
        let columnIDs = groupColumn.columns;
        /** @type {?} */
        let groupColumnObj = this.createColumnObject(groupColumn);
        groupColumnObj.groupColumns = columnIDs.map((/**
         * @param {?} x
         * @return {?}
         */
        x => coulmnList.filter((/**
         * @param {?} y
         * @return {?}
         */
        y => y.id === x))[0]));
        return groupColumnObj;
    }
    /**
     * @private
     * @param {?} columnList
     * @return {?}
     */
    convertColumns2Row(columnList) {
        console.log("MetaConfig convertColumns2Row:", columnList);
        /** @type {?} */
        let tmpArray = [];
        /** @type {?} */
        let rowArray = [];
        for (var i = 0; i < columnList.length; i++) {
            tmpArray.push(columnList[i]);
            if (columnList[i].inline === false || i === (columnList.length - 1)) {
                rowArray.push([...tmpArray]);
                tmpArray = [];
            }
        }
        return rowArray;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbWV0YS9wYXJzZXIvYmVhbi9NZXRhQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE1BQU07SUFDRjtRQUVPLFdBQU0sR0FBZSxJQUFJLENBQUM7UUFDMUIsU0FBSSxHQUE2QixFQUFFLENBQUM7UUFDcEMsWUFBTyxHQUFzQixFQUFFLENBQUM7UUFDaEMsV0FBTSxHQUFzQixFQUFFLENBQUM7SUFMdEIsQ0FBQzs7Ozs7O0lBT1YsU0FBUyxDQUFDLFVBQXNCLEVBQUUsU0FBcUI7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDNUQsd0JBQXdCO1FBQ3hCLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDN0QsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7Z0JBQ2xCLFdBQVcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7WUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUM7WUFDdEQsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFDLENBQUM7WUFDNUUsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMs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QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3hGLE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUVPLGtCQUFrQixDQUFDLFVBQTZCO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsVUFBVSxDQUFDLENBQUM7O1lBQ3RELFFBQVEsR0FBRyxFQUFFOztZQUNiLFFBQVEsR0FBRyxFQUFFO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNqRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixRQUFRLEdBQUcsRUFBRSxDQUFDO2FBQ2pCO1NBQ0o7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0NBQ0o7OztJQXhFRyw0QkFBaUM7O0lBQ2pDLDBCQUEyQzs7SUFDM0MsNkJBQXVDOztJQUN2Qyw0QkFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRhU291cmNlIH0gZnJvbSAnLi9NZXRhU291cmNlJztcbmltcG9ydCB7IE1ldGFDb2x1bW4gfSBmcm9tICcuL01ldGFDb2x1bW4nO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY2xhc3MgTWV0YUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHB1YmxpYyBzb3VyY2U6IE1ldGFTb3VyY2UgPSBudWxsO1xuICAgIHB1YmxpYyBSb3dzOiBBcnJheTxBcnJheTxNZXRhQ29sdW1uPj4gPSBbXTtcbiAgICBwdWJsaWMgQ29sdW1uczogQXJyYXk8TWV0YUNvbHVtbj4gPSBbXTtcbiAgICBwdWJsaWMgRm9vdGVyOiBBcnJheTxNZXRhQ29sdW1uPiA9IFtdO1xuXG4gICAgcHVibGljIHNldENvbHVtbihjb2x1bW5MaXN0OiBBcnJheTxhbnk+LCBncm91cExpc3Q6IEFycmF5PGFueT4pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNZXRhQ29uZmlnIHNldENvbHVtbjpcIiwgY29sdW1uTGlzdCwgZ3JvdXBMaXN0KTtcbiAgICAgICAgLy8gU2V0IENvbHVtbiBNZXRhQ29uZmlnXG4gICAgICAgIGNvbHVtbkxpc3QgPSBjb2x1bW5MaXN0Lm1hcCh4ID0+IHRoaXMuY3JlYXRlQ29sdW1uT2JqZWN0KHgpKTtcbiAgICAgICAgaWYgKGdyb3VwTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgY29sc0luR3JvdXAgPSBfLmZsYXRNYXAoZ3JvdXBMaXN0LCB4ID0+IHguY29sdW1ucyk7XG4gICAgICAgICAgICBncm91cExpc3QgPSBncm91cExpc3QubWFwKHggPT4gdGhpcy5jcmVhdGVHcm91cENvbHVtbk9iamVjdCh4LCBjb2x1bW5MaXN0KSk7XG4gICAgICAgICAgICBjb2x1bW5MaXN0ID0gY29sdW1uTGlzdC5maWx0ZXIoeCA9PiAhY29sc0luR3JvdXAuaW5jbHVkZXMoeC5pZCkpO1xuICAgICAgICAgICAgZ3JvdXBMaXN0LmZvckVhY2goKGVsZTogTWV0YUNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgIGVsZS5ncm91cFJvd3MgPSB0aGlzLmNvbnZlcnRDb2x1bW5zMlJvdyhlbGUuZ3JvdXBDb2x1bW5zKTtcbiAgICAgICAgICAgICAgICBjb2x1bW5MaXN0LnNwbGljZShlbGUub3JkZXIsIDAsIGVsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbHVtbkxpc3QuZm9yRWFjaCgoZWxlOiBNZXRhQ29sdW1uLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlLm9yZGVyID0gaW5kZXg7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuQ29sdW1ucyA9IGNvbHVtbkxpc3Q7XG4gICAgICAgIHRoaXMuUm93cyA9IHRoaXMuY29udmVydENvbHVtbnMyUm93KGNvbHVtbkxpc3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRGb290ZXIoZm9vdGVyTGlzdDogQXJyYXk8YW55Pikge1xuICAgICAgICB0aGlzLkZvb3RlciA9IGZvb3Rlckxpc3QubWFwKHggPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZXRhQ29sdW1uKHguaWQsIHgubmFtZSwgeC50eXBlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUNvbHVtbk9iamVjdChjb2x1bW46IGFueSk6IE1ldGFDb2x1bW4ge1xuICAgICAgICBsZXQgY29sdW1uT2JqID0gbmV3IE1ldGFDb2x1bW4oY29sdW1uLmlkLCBjb2x1bW4ubmFtZSwgY29sdW1uLnR5cGUpO1xuICAgICAgICBjb2x1bW5PYmoub3B0aW9uUmVmID0gY29sdW1uLnJlZjtcbiAgICAgICAgY29sdW1uT2JqLnNob3dUaXRsZSA9IGNvbHVtbi5zaG93VGl0bGU7XG4gICAgICAgIGNvbHVtbk9iai5yZXF1aXJlZCA9IGNvbHVtbi5yZXF1aXJlZDtcbiAgICAgICAgY29sdW1uT2JqLnJlYWRvbmx5ID0gY29sdW1uLnJlYWRvbmx5O1xuICAgICAgICBjb2x1bW5PYmouZ3JpZCA9IGNvbHVtbi5ncmlkO1xuICAgICAgICBjb2x1bW5PYmouaW5saW5lID0gY29sdW1uLmlubGluZTtcbiAgICAgICAgY29sdW1uT2JqLm9yZGVyID0gY29sdW1uLm9yZGVyO1xuICAgICAgICBjb2x1bW5PYmouZGVmYXVsdCA9IGNvbHVtbi5kZWZhdWx0O1xuICAgICAgICBjb2x1bW5PYmoubWF4TGVuZ3RoID0gY29sdW1uLm1heExlbmd0aDtcbiAgICAgICAgY29sdW1uT2JqLmdyb3VwQ29sdW1ucyA9IGNvbHVtbi5ncm91cENvbHVtbnM7XG4gICAgICAgIGNvbHVtbk9iai5pY29uID0gY29sdW1uLmljb247XG4gICAgICAgIGNvbHVtbk9iai5jYW5BZGQgPSBjb2x1bW4uY2FuQWRkO1xuICAgICAgICBjb2x1bW5PYmoubWF4TnVtYmVyID0gY29sdW1uLm1heE51bWJlcjtcbiAgICAgICAgY29sdW1uT2JqLnBsYWNlaG9sZGVyID0gY29sdW1uLnBsYWNlaG9sZGVyO1xuICAgICAgICBjb2x1bW5PYmouc2hvd0RlZmF1bHRPcHRpb24gPSBjb2x1bW4uc2hvd0RlZmF1bHRPcHRpb247XG4gICAgICAgIGNvbHVtbk9iai5yb3dUaXRsZSA9IGNvbHVtbi5yb3dUaXRsZTtcbiAgICAgICAgcmV0dXJuIGNvbHVtbk9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUdyb3VwQ29sdW1uT2JqZWN0KGdyb3VwQ29sdW1uOiBhbnksIGNvdWxtbkxpc3Q6IEFycmF5PE1ldGFDb2x1bW4+KTogTWV0YUNvbHVtbiB7XG4gICAgICAgIGxldCBjb2x1bW5JRHMgPSBncm91cENvbHVtbi5jb2x1bW5zO1xuICAgICAgICBsZXQgZ3JvdXBDb2x1bW5PYmogPSB0aGlzLmNyZWF0ZUNvbHVtbk9iamVjdChncm91cENvbHVtbik7XG4gICAgICAgIGdyb3VwQ29sdW1uT2JqLmdyb3VwQ29sdW1ucyA9IGNvbHVtbklEcy5tYXAoeCA9PiBjb3VsbW5MaXN0LmZpbHRlcih5ID0+IHkuaWQgPT09IHgpWzBdKTtcbiAgICAgICAgcmV0dXJuIGdyb3VwQ29sdW1uT2JqO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29udmVydENvbHVtbnMyUm93KGNvbHVtbkxpc3Q6IEFycmF5PE1ldGFDb2x1bW4+KTogQXJyYXk8QXJyYXk8TWV0YUNvbHVtbj4+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNZXRhQ29uZmlnIGNvbnZlcnRDb2x1bW5zMlJvdzpcIiwgY29sdW1uTGlzdCk7XG4gICAgICAgIGxldCB0bXBBcnJheSA9IFtdO1xuICAgICAgICBsZXQgcm93QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0bXBBcnJheS5wdXNoKGNvbHVtbkxpc3RbaV0pO1xuICAgICAgICAgICAgaWYgKGNvbHVtbkxpc3RbaV0uaW5saW5lID09PSBmYWxzZSB8fCBpID09PSAoY29sdW1uTGlzdC5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgIHJvd0FycmF5LnB1c2goWy4uLnRtcEFycmF5XSk7XG4gICAgICAgICAgICAgICAgdG1wQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93QXJyYXk7XG4gICAgfVxufSJdfQ==