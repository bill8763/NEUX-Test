/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SQLiteColumn } from './SQLiteColumn';
export class SQLiteTable {
    /**
     * @param {?} name
     * @param {?} columns
     */
    constructor(name, columns) {
        this.tableName = name;
        this.columns = columns;
        this.restrictions = [];
    }
    /**
     * @param {?} col
     * @param {?} value
     * @return {?}
     */
    setValue(col, value) {
        this.columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getName() == col)).forEach((/**
         * @param {?} col
         * @return {?}
         */
        (col) => {
            col.setValue(value);
        }));
    }
    /**
     * @param {?} col
     * @return {?}
     */
    getValue(col) {
        /** @type {?} */
        let cols = this.columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getName() == col));
        return col.length > 0 ? cols[0].getValue() : null;
    }
    /**
     * @param {?} col
     * @return {?}
     */
    hasColumn(col) {
        /** @type {?} */
        let cols = this.columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getName() == col));
        return cols.length > 0;
    }
    /**
     * @return {?}
     */
    getTableName() {
        return this.tableName;
    }
    /**
     * @return {?}
     */
    getColumns() {
        return this.columns;
    }
    /**
     * @param {?} restriction
     * @return {?}
     */
    addRestriction(restriction) {
        this.restrictions.push(restriction);
    }
    /**
     * @return {?}
     */
    getRestrictions() {
        return this.restrictions;
    }
    /**
     * @return {?}
     */
    cloneTable() {
        /** @type {?} */
        var colArray = [];
        for (var column of this.columns) {
            /** @type {?} */
            var clone_obj = Object.create(SQLiteColumn.prototype);
            clone_obj = Object.assign(clone_obj, column);
            colArray.push(clone_obj);
        }
        return new SQLiteTable(this.tableName, colArray);
    }
    /**
     * @return {?}
     */
    isSetted() {
        return this.getColumns().map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValue() !== undefined)).length > 0;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1FMaXRlVGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RldmljZS9zcWxpdGUvU1FMaXRlVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc5QyxNQUFNOzs7OztJQUlKLFlBQVksSUFBWSxFQUFFLE9BQTRCO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUNELFFBQVEsQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLEVBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUMzRCxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFDRCxRQUFRLENBQUMsR0FBVzs7WUFDZCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxFQUFDO1FBQ3ZELE9BQU8sR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQVc7O1lBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsRUFBQztRQUN2RCxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQXlCO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFDRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxVQUFVOztZQUNKLFFBQVEsR0FBRyxFQUFFO1FBQ2pCLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTs7Z0JBQzNCLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDckQsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssU0FBUyxFQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzRSxDQUFDO0NBRUY7Ozs7OztJQW5EQyxnQ0FBMEI7Ozs7O0lBQzFCLDhCQUFxQzs7Ozs7SUFDckMsbUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1FMaXRlQ29sdW1uIH0gZnJvbSAnLi9TUUxpdGVDb2x1bW4nO1xuaW1wb3J0IHsgSVJlc3RyaWN0aW9uIH0gZnJvbSAnLi9SZXN0cmljdGlvbi5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgU1FMaXRlVGFibGUge1xuICBwcml2YXRlIHRhYmxlTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGNvbHVtbnM6IEFycmF5PFNRTGl0ZUNvbHVtbj47XG4gIHByaXZhdGUgcmVzdHJpY3Rpb25zOiBBcnJheTxJUmVzdHJpY3Rpb24+O1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNvbHVtbnM6IEFycmF5PFNRTGl0ZUNvbHVtbj4pIHtcbiAgICB0aGlzLnRhYmxlTmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcbiAgICB0aGlzLnJlc3RyaWN0aW9ucyA9IFtdO1xuICB9XG4gIHNldFZhbHVlKGNvbDogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5jb2x1bW5zLmZpbHRlcih4ID0+IHguZ2V0TmFtZSgpID09IGNvbCkuZm9yRWFjaCgoY29sKSA9PiB7XG4gICAgICBjb2wuc2V0VmFsdWUodmFsdWUpO1xuICAgIH0pXG4gIH1cbiAgZ2V0VmFsdWUoY29sOiBzdHJpbmcpIHtcbiAgICBsZXQgY29scyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoeCA9PiB4LmdldE5hbWUoKSA9PSBjb2wpO1xuICAgIHJldHVybiBjb2wubGVuZ3RoID4gMCA/IGNvbHNbMF0uZ2V0VmFsdWUoKSA6IG51bGw7XG4gIH1cblxuICBoYXNDb2x1bW4oY29sOiBzdHJpbmcpIHtcbiAgICBsZXQgY29scyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoeCA9PiB4LmdldE5hbWUoKSA9PSBjb2wpO1xuICAgIHJldHVybiBjb2xzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBnZXRUYWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVOYW1lO1xuICB9XG4gIGdldENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcbiAgfVxuXG4gIGFkZFJlc3RyaWN0aW9uKHJlc3RyaWN0aW9uOiBJUmVzdHJpY3Rpb24pIHtcbiAgICB0aGlzLnJlc3RyaWN0aW9ucy5wdXNoKHJlc3RyaWN0aW9uKTtcbiAgfVxuICBnZXRSZXN0cmljdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdHJpY3Rpb25zO1xuICB9XG5cbiAgY2xvbmVUYWJsZSgpOiBTUUxpdGVUYWJsZSB7XG4gICAgdmFyIGNvbEFycmF5ID0gW107XG4gICAgZm9yICh2YXIgY29sdW1uIG9mIHRoaXMuY29sdW1ucykge1xuICAgICAgdmFyIGNsb25lX29iaiA9IE9iamVjdC5jcmVhdGUoU1FMaXRlQ29sdW1uLnByb3RvdHlwZSk7XG4gICAgICBjbG9uZV9vYmogPSBPYmplY3QuYXNzaWduKGNsb25lX29iaiwgY29sdW1uKTtcbiAgICAgIGNvbEFycmF5LnB1c2goY2xvbmVfb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTUUxpdGVUYWJsZSh0aGlzLnRhYmxlTmFtZSwgY29sQXJyYXkpO1xuICB9XG5cbiAgaXNTZXR0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1ucygpLm1hcCh4ID0+IHguZ2V0VmFsdWUoKSAhPT0gdW5kZWZpbmVkKS5sZW5ndGggPiAwO1xuICB9XG5cbn1cbiJdfQ==