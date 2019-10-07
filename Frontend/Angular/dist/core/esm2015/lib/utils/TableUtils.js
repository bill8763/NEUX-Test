/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class TableUtils {
    /**
     * @param {?} tableObject
     * @param {?} data
     * @return {?}
     */
    static fillTableColumn(tableObject, data) {
        /** @type {?} */
        let columns = tableObject.getColumns().map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getName())).filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x !== 'ClientID'));
        if (data != undefined) {
            if (columns.length > 0) {
                for (let col of columns) {
                    if (data[col] != undefined)
                        tableObject.setValue(col, data[col]);
                }
            }
        }
        return tableObject;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVVdGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvVGFibGVVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTTs7Ozs7O0lBQ0YsTUFBTSxDQUFDLGVBQWUsQ0FBQyxXQUF3QixFQUFFLElBQVM7O1lBQ2xELE9BQU8sR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFVBQVUsRUFBQztRQUMxRixJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7WUFDbkIsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDcEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUU7b0JBQ3JCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVM7d0JBQ3RCLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUM1QzthQUNKO1NBQ0o7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTUUxpdGVUYWJsZSB9IGZyb20gXCIuLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVRhYmxlXCI7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVV0aWxzIHtcbiAgICBzdGF0aWMgZmlsbFRhYmxlQ29sdW1uKHRhYmxlT2JqZWN0OiBTUUxpdGVUYWJsZSwgZGF0YTogYW55KTogU1FMaXRlVGFibGUge1xuICAgICAgICBsZXQgY29sdW1ucyA9IHRhYmxlT2JqZWN0LmdldENvbHVtbnMoKS5tYXAoeCA9PiB4LmdldE5hbWUoKSkuZmlsdGVyKHggPT4geCAhPT0gJ0NsaWVudElEJyk7XG4gICAgICAgIGlmIChkYXRhICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGNvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbCBvZiBjb2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2NvbF0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVPYmplY3Quc2V0VmFsdWUoY29sLCBkYXRhW2NvbF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFibGVPYmplY3Q7XG4gICAgfVxufVxuXG4iXX0=