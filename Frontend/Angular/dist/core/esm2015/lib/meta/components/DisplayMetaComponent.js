/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseMetaComponent } from './BaseMetaComponent';
/**
 * @abstract
 */
export class DisplayMetaComponent extends BaseMetaComponent {
    /**
     * @param {?} metaService
     * @param {?} profileCodeService
     * @param {?} parser
     * @param {?} executor
     */
    constructor(metaService, profileCodeService, parser, executor) {
        super(metaService, parser, executor);
        this.profileCodeService = profileCodeService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log("DisplayMetaComponent ngOninit!");
        super.ngOnInit();
    }
    /**
     * @protected
     * @return {?}
     */
    onDataUpdated() {
        this.convertCodeToDisplay();
    }
    /**
     * @private
     * @return {?}
     */
    convertCodeToDisplay() {
        /** @type {?} */
        let needToConvert = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === 'Label' && !!x.optionRef));
        needToConvert.forEach((/**
         * @param {?} col
         * @return {?}
         */
        (col) => {
            if (this._data[col.id])
                this._data[col.id] = this.profileCodeService.convertCode2Text(col.optionRef, this._data[col.id]);
        }));
        this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === 'Group')).forEach((/**
         * @param {?} group
         * @return {?}
         */
        group => {
            /** @type {?} */
            let colsNeedConvert = group.groupColumns.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.type === 'Label' && !!x.optionRef));
            console.log("colsNeedConvert:", colsNeedConvert);
            if (colsNeedConvert.length > 0 && this._data[group.id]) {
                this._data[group.id].forEach((/**
                 * @param {?} groupData
                 * @param {?} index
                 * @return {?}
                 */
                (groupData, index) => {
                    /** @type {?} */
                    let extendedObj = colsNeedConvert.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => {
                        return {
                            key: x.id,
                            value: this.profileCodeService.convertCode2Text(x.optionRef, this._data[group.id][index][x.id])
                        };
                    })).reduce((/**
                     * @param {?} acc
                     * @param {?} cur
                     * @return {?}
                     */
                    (acc, cur) => { acc[cur.key] = cur.value; return acc; }), {});
                    console.log("extendedObj:", extendedObj);
                    groupData = Object.assign(groupData, extendedObj);
                }));
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    DisplayMetaComponent.prototype.profileCodeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzcGxheU1ldGFDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL21ldGEvY29tcG9uZW50cy9EaXNwbGF5TWV0YUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFNeEQsTUFBTSwyQkFBcUMsU0FBUSxpQkFBaUI7Ozs7Ozs7SUFFaEUsWUFDSSxXQUF3QixFQUNkLGtCQUFzQyxFQUNoRCxNQUFtQixFQUNuQixRQUF1QjtRQUV2QixLQUFLLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUozQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBS3BELENBQUM7Ozs7SUFFTSxRQUFRO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzlDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUdTLGFBQWE7UUFDbkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFTyxvQkFBb0I7O1lBQ3BCLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQztRQUM1RixhQUFhLENBQUMsT0FBTzs7OztRQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekcsQ0FBQyxFQUFDLENBQUE7UUFFRixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBQyxDQUFDLE9BQU87Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTs7Z0JBQ2hFLGVBQWUsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDO1lBQ3pGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDakQsSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTzs7Ozs7Z0JBQUMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUU7O3dCQUMxQyxXQUFXLEdBQUcsZUFBZSxDQUFDLEdBQUc7Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ3RDLE9BQU87NEJBQ0gsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFOzRCQUNULEtBQUssRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7eUJBQ2xHLENBQUE7b0JBQ0wsQ0FBQyxFQUFDLENBQUMsTUFBTTs7Ozs7b0JBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRSxFQUFFLENBQUM7b0JBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO29CQUN6QyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ3RELENBQUMsRUFBQyxDQUFDO2FBQ047UUFDTCxDQUFDLEVBQUMsQ0FBQTtJQUVOLENBQUM7Q0FDSjs7Ozs7O0lBMUNPLGtEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNZXRhQ29tcG9uZW50IH0gZnJvbSAnLi9CYXNlTWV0YUNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXRhU2VydmljZSB9IGZyb20gJy4uL01ldGEuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlQ29kZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3Byb2ZpbGUvcHJvZmlsZS1jb2RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSU1ldGFQYXJzZXIgfSBmcm9tICcuLi9wYXJzZXIvTWV0YVBhcnNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSU1ldGFFeGVjdXRvciB9IGZyb20gJy4uL2V4ZWN1dG9yL01ldGFFeGVjdXRvci5pbnRlcmZhY2UnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGlzcGxheU1ldGFDb21wb25lbnQgZXh0ZW5kcyBCYXNlTWV0YUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbWV0YVNlcnZpY2U6IE1ldGFTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2UsXG4gICAgICAgIHBhcnNlcjogSU1ldGFQYXJzZXIsXG4gICAgICAgIGV4ZWN1dG9yOiBJTWV0YUV4ZWN1dG9yXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKG1ldGFTZXJ2aWNlLCBwYXJzZXIsIGV4ZWN1dG9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlzcGxheU1ldGFDb21wb25lbnQgbmdPbmluaXQhXCIpO1xuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIG9uRGF0YVVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuY29udmVydENvZGVUb0Rpc3BsYXkoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnZlcnRDb2RlVG9EaXNwbGF5KCkge1xuICAgICAgICBsZXQgbmVlZFRvQ29udmVydCA9IHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ0xhYmVsJyAmJiAhIXgub3B0aW9uUmVmKTtcbiAgICAgICAgbmVlZFRvQ29udmVydC5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhW2NvbC5pZF0pXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtjb2wuaWRdID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dChjb2wub3B0aW9uUmVmLCB0aGlzLl9kYXRhW2NvbC5pZF0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ0dyb3VwJykuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgICAgICBsZXQgY29sc05lZWRDb252ZXJ0ID0gZ3JvdXAuZ3JvdXBDb2x1bW5zLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ0xhYmVsJyAmJiAhIXgub3B0aW9uUmVmKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sc05lZWRDb252ZXJ0OlwiLCBjb2xzTmVlZENvbnZlcnQpO1xuICAgICAgICAgICAgaWYgKGNvbHNOZWVkQ29udmVydC5sZW5ndGggPiAwICYmIHRoaXMuX2RhdGFbZ3JvdXAuaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtncm91cC5pZF0uZm9yRWFjaCgoZ3JvdXBEYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXh0ZW5kZWRPYmogPSBjb2xzTmVlZENvbnZlcnQubWFwKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHguaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoeC5vcHRpb25SZWYsIHRoaXMuX2RhdGFbZ3JvdXAuaWRdW2luZGV4XVt4LmlkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkucmVkdWNlKChhY2MsIGN1cikgPT4geyBhY2NbY3VyLmtleV0gPSBjdXIudmFsdWU7IHJldHVybiBhY2M7IH0sIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJleHRlbmRlZE9iajpcIiwgZXh0ZW5kZWRPYmopO1xuICAgICAgICAgICAgICAgICAgICBncm91cERhdGEgPSBPYmplY3QuYXNzaWduKGdyb3VwRGF0YSwgZXh0ZW5kZWRPYmopO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxufSJdfQ==