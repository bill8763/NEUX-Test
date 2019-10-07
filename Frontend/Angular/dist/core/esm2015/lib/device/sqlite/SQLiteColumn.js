/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class SQLiteColumn {
    /**
     * @param {?} name
     * @param {?} value
     * @param {?} type
     * @param {?} isPrimaryKey
     * @param {?} isAutoincrement
     */
    constructor(name, value, type, isPrimaryKey, isAutoincrement) {
        this.colName = name;
        this.colValue = value;
        this.isPrimaryKey = isPrimaryKey;
        this.isAutoincrement = isAutoincrement;
        this.type = type;
    }
    /**
     * @return {?}
     */
    getName() {
        return this.colName;
    }
    /**
     * @return {?}
     */
    getValue() {
        return this.colValue;
    }
    /**
     * @return {?}
     */
    getType() {
        return this.type;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setValue(val) {
        if (this.type == 'text')
            this.colValue = val.toString();
        else if (this.type == 'integer')
            this.colValue = parseInt(val);
        else if (this.type == 'real')
            this.colValue = parseFloat(val);
        else
            this.colValue = val;
    }
    /**
     * @return {?}
     */
    getIsPrimaryKey() {
        return this.isPrimaryKey;
    }
    /**
     * @return {?}
     */
    getIsAutoincrement() {
        return this.isAutoincrement;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SQLiteColumn.prototype.colName;
    /**
     * @type {?}
     * @private
     */
    SQLiteColumn.prototype.colValue;
    /**
     * @type {?}
     * @private
     */
    SQLiteColumn.prototype.isPrimaryKey;
    /**
     * @type {?}
     * @private
     */
    SQLiteColumn.prototype.isAutoincrement;
    /**
     * @type {?}
     * @private
     */
    SQLiteColumn.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1FMaXRlQ29sdW1uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZUNvbHVtbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTs7Ozs7Ozs7SUFNSixZQUFZLElBQVksRUFBRSxLQUFhLEVBQUUsSUFBWSxFQUFFLFlBQXFCLEVBQUUsZUFBd0I7UUFDcEcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBUTtRQUNmLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzVCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUVoQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7Ozs7OztJQTNDQywrQkFBd0I7Ozs7O0lBQ3hCLGdDQUFzQjs7Ozs7SUFDdEIsb0NBQThCOzs7OztJQUM5Qix1Q0FBaUM7Ozs7O0lBQ2pDLDRCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTUUxpdGVDb2x1bW4ge1xuICBwcml2YXRlIGNvbE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBjb2xWYWx1ZTogYW55O1xuICBwcml2YXRlIGlzUHJpbWFyeUtleTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpc0F1dG9pbmNyZW1lbnQ6IGJvb2xlYW47XG4gIHByaXZhdGUgdHlwZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgaXNQcmltYXJ5S2V5OiBib29sZWFuLCBpc0F1dG9pbmNyZW1lbnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbE5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29sVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmlzUHJpbWFyeUtleSA9IGlzUHJpbWFyeUtleTtcbiAgICB0aGlzLmlzQXV0b2luY3JlbWVudCA9IGlzQXV0b2luY3JlbWVudDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xOYW1lO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sVmFsdWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWw6IGFueSkge1xuICAgIGlmICh0aGlzLnR5cGUgPT0gJ3RleHQnKVxuICAgICAgdGhpcy5jb2xWYWx1ZSA9IHZhbC50b1N0cmluZygpO1xuICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnaW50ZWdlcicpXG4gICAgICB0aGlzLmNvbFZhbHVlID0gcGFyc2VJbnQodmFsKTtcbiAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gJ3JlYWwnKVxuICAgICAgdGhpcy5jb2xWYWx1ZSA9IHBhcnNlRmxvYXQodmFsKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmNvbFZhbHVlID0gdmFsO1xuICB9XG5cbiAgZ2V0SXNQcmltYXJ5S2V5KCkge1xuICAgIHJldHVybiB0aGlzLmlzUHJpbWFyeUtleTtcbiAgfVxuXG4gIGdldElzQXV0b2luY3JlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0F1dG9pbmNyZW1lbnQ7XG4gIH1cbn1cbiJdfQ==