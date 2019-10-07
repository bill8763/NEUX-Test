/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseMetaComponent } from './BaseMetaComponent';
/**
 * @abstract
 */
var /**
 * @abstract
 */
DisplayMetaComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DisplayMetaComponent, _super);
    function DisplayMetaComponent(metaService, profileCodeService, parser, executor) {
        var _this = _super.call(this, metaService, parser, executor) || this;
        _this.profileCodeService = profileCodeService;
        return _this;
    }
    /**
     * @return {?}
     */
    DisplayMetaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log("DisplayMetaComponent ngOninit!");
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * @protected
     * @return {?}
     */
    DisplayMetaComponent.prototype.onDataUpdated = /**
     * @protected
     * @return {?}
     */
    function () {
        this.convertCodeToDisplay();
    };
    /**
     * @private
     * @return {?}
     */
    DisplayMetaComponent.prototype.convertCodeToDisplay = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var needToConvert = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.type === 'Label' && !!x.optionRef; }));
        needToConvert.forEach((/**
         * @param {?} col
         * @return {?}
         */
        function (col) {
            if (_this._data[col.id])
                _this._data[col.id] = _this.profileCodeService.convertCode2Text(col.optionRef, _this._data[col.id]);
        }));
        this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.type === 'Group'; })).forEach((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            /** @type {?} */
            var colsNeedConvert = group.groupColumns.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.type === 'Label' && !!x.optionRef; }));
            console.log("colsNeedConvert:", colsNeedConvert);
            if (colsNeedConvert.length > 0 && _this._data[group.id]) {
                _this._data[group.id].forEach((/**
                 * @param {?} groupData
                 * @param {?} index
                 * @return {?}
                 */
                function (groupData, index) {
                    /** @type {?} */
                    var extendedObj = colsNeedConvert.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) {
                        return {
                            key: x.id,
                            value: _this.profileCodeService.convertCode2Text(x.optionRef, _this._data[group.id][index][x.id])
                        };
                    })).reduce((/**
                     * @param {?} acc
                     * @param {?} cur
                     * @return {?}
                     */
                    function (acc, cur) { acc[cur.key] = cur.value; return acc; }), {});
                    console.log("extendedObj:", extendedObj);
                    groupData = Object.assign(groupData, extendedObj);
                }));
            }
        }));
    };
    return DisplayMetaComponent;
}(BaseMetaComponent));
/**
 * @abstract
 */
export { DisplayMetaComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    DisplayMetaComponent.prototype.profileCodeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzcGxheU1ldGFDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL21ldGEvY29tcG9uZW50cy9EaXNwbGF5TWV0YUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBTXhEOzs7O0lBQW1ELGdEQUFpQjtJQUVoRSw4QkFDSSxXQUF3QixFQUNkLGtCQUFzQyxFQUNoRCxNQUFtQixFQUNuQixRQUF1QjtRQUozQixZQU1JLGtCQUFNLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLFNBQ3ZDO1FBTGEsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjs7SUFLcEQsQ0FBQzs7OztJQUVNLHVDQUFROzs7SUFBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM5QyxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUdTLDRDQUFhOzs7O0lBQXZCO1FBQ0ksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFTyxtREFBb0I7Ozs7SUFBNUI7UUFBQSxpQkF3QkM7O1lBdkJPLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBbkMsQ0FBbUMsRUFBQztRQUM1RixhQUFhLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsR0FBRztZQUN0QixJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RyxDQUFDLEVBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFsQixDQUFrQixFQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsS0FBSzs7Z0JBQzdELGVBQWUsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFuQyxDQUFtQyxFQUFDO1lBQ3pGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDakQsSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDcEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTzs7Ozs7Z0JBQUMsVUFBQyxTQUFTLEVBQUUsS0FBSzs7d0JBQ3RDLFdBQVcsR0FBRyxlQUFlLENBQUMsR0FBRzs7OztvQkFBQyxVQUFBLENBQUM7d0JBQ25DLE9BQU87NEJBQ0gsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFOzRCQUNULEtBQUssRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7eUJBQ2xHLENBQUE7b0JBQ0wsQ0FBQyxFQUFDLENBQUMsTUFBTTs7Ozs7b0JBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFFLEVBQUUsQ0FBQztvQkFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7b0JBQ3pDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDdEQsQ0FBQyxFQUFDLENBQUM7YUFDTjtRQUNMLENBQUMsRUFBQyxDQUFBO0lBRU4sQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQTlDRCxDQUFtRCxpQkFBaUIsR0E4Q25FOzs7Ozs7Ozs7O0lBMUNPLGtEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNZXRhQ29tcG9uZW50IH0gZnJvbSAnLi9CYXNlTWV0YUNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXRhU2VydmljZSB9IGZyb20gJy4uL01ldGEuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlQ29kZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3Byb2ZpbGUvcHJvZmlsZS1jb2RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSU1ldGFQYXJzZXIgfSBmcm9tICcuLi9wYXJzZXIvTWV0YVBhcnNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSU1ldGFFeGVjdXRvciB9IGZyb20gJy4uL2V4ZWN1dG9yL01ldGFFeGVjdXRvci5pbnRlcmZhY2UnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGlzcGxheU1ldGFDb21wb25lbnQgZXh0ZW5kcyBCYXNlTWV0YUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbWV0YVNlcnZpY2U6IE1ldGFTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2UsXG4gICAgICAgIHBhcnNlcjogSU1ldGFQYXJzZXIsXG4gICAgICAgIGV4ZWN1dG9yOiBJTWV0YUV4ZWN1dG9yXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKG1ldGFTZXJ2aWNlLCBwYXJzZXIsIGV4ZWN1dG9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlzcGxheU1ldGFDb21wb25lbnQgbmdPbmluaXQhXCIpO1xuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIG9uRGF0YVVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuY29udmVydENvZGVUb0Rpc3BsYXkoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnZlcnRDb2RlVG9EaXNwbGF5KCkge1xuICAgICAgICBsZXQgbmVlZFRvQ29udmVydCA9IHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ0xhYmVsJyAmJiAhIXgub3B0aW9uUmVmKTtcbiAgICAgICAgbmVlZFRvQ29udmVydC5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhW2NvbC5pZF0pXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtjb2wuaWRdID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dChjb2wub3B0aW9uUmVmLCB0aGlzLl9kYXRhW2NvbC5pZF0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ0dyb3VwJykuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgICAgICBsZXQgY29sc05lZWRDb252ZXJ0ID0gZ3JvdXAuZ3JvdXBDb2x1bW5zLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ0xhYmVsJyAmJiAhIXgub3B0aW9uUmVmKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sc05lZWRDb252ZXJ0OlwiLCBjb2xzTmVlZENvbnZlcnQpO1xuICAgICAgICAgICAgaWYgKGNvbHNOZWVkQ29udmVydC5sZW5ndGggPiAwICYmIHRoaXMuX2RhdGFbZ3JvdXAuaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtncm91cC5pZF0uZm9yRWFjaCgoZ3JvdXBEYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXh0ZW5kZWRPYmogPSBjb2xzTmVlZENvbnZlcnQubWFwKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHguaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoeC5vcHRpb25SZWYsIHRoaXMuX2RhdGFbZ3JvdXAuaWRdW2luZGV4XVt4LmlkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkucmVkdWNlKChhY2MsIGN1cikgPT4geyBhY2NbY3VyLmtleV0gPSBjdXIudmFsdWU7IHJldHVybiBhY2M7IH0sIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJleHRlbmRlZE9iajpcIiwgZXh0ZW5kZWRPYmopO1xuICAgICAgICAgICAgICAgICAgICBncm91cERhdGEgPSBPYmplY3QuYXNzaWduKGdyb3VwRGF0YSwgZXh0ZW5kZWRPYmopO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxufSJdfQ==