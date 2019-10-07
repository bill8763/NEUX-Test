/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MetaConfig } from "./bean/MetaConfig";
import { MetaSource } from "./bean/MetaSource";
import { APPError } from "../../errorHandler/APPError";
import { MetaGrid } from "./bean/MetaGrid";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
var DefaultMetaParser = /** @class */ (function () {
    function DefaultMetaParser() {
    }
    /**
     * @param {?} json
     * @return {?}
     */
    DefaultMetaParser.prototype.parse = /**
     * @param {?} json
     * @return {?}
     */
    function (json) {
        console.log("Default Meta Parser parse:", json);
        json.columns = this.fillDefaultColumnSetting(json.columns);
        /** @type {?} */
        var group = json.group ? json.group : [];
        group = this.fillDefaultColumnSetting(group);
        /** @type {?} */
        var metaConfig = new MetaConfig();
        console.log("DefaultMetaParser parse:", json, group);
        metaConfig.source = this.getSource(json);
        metaConfig.setColumn(json.columns, group);
        metaConfig.setFooter(json.footer);
        console.log("After Parse:", metaConfig);
        return metaConfig;
    };
    /**
     * @private
     * @param {?} json
     * @return {?}
     */
    DefaultMetaParser.prototype.getSource = /**
     * @private
     * @param {?} json
     * @return {?}
     */
    function (json) {
        try {
            /** @type {?} */
            var type = json.source.type;
            /** @type {?} */
            var read = json.source.read;
            /** @type {?} */
            var write = json.source.write;
            read = read ? read : null;
            write = write ? write : null;
            return new MetaSource(type, read, write);
        }
        catch (error) {
            throw new APPError("F00801", error.message);
        }
    };
    /**
     * @private
     * @param {?} columnList
     * @return {?}
     */
    DefaultMetaParser.prototype.fillDefaultColumnSetting = /**
     * @private
     * @param {?} columnList
     * @return {?}
     */
    function (columnList) {
        var _this = this;
        return columnList.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this._defaultSetting(x); }));
    };
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    DefaultMetaParser.prototype._defaultSetting = /**
     * @private
     * @param {?} column
     * @return {?}
     */
    function (column) {
        /** @type {?} */
        var grid = column.grid;
        if (!grid) {
            grid = new MetaGrid(12);
        }
        else if (typeof (grid) === 'number')
            grid = new MetaGrid(grid);
        else {
            grid = new MetaGrid(grid.pc, grid.nb, grid.pad, grid.mobile);
        }
        return Object.assign({
            type: 'Group',
            ref: '',
            showTitle: true,
            required: false,
            readonly: false,
            inline: false,
            order: 0,
            default: '',
            maxLength: 999,
            showDefaultOption: true,
            groupColumns: [],
            icon: null,
            canAdd: false,
            maxNumber: 999,
            placeholder: '',
            rowTitle: null
        }, column, { grid: grid });
    };
    DefaultMetaParser.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DefaultMetaParser.ngInjectableDef = i0.defineInjectable({ factory: function DefaultMetaParser_Factory() { return new DefaultMetaParser(); }, token: DefaultMetaParser, providedIn: "root" });
    return DefaultMetaParser;
}());
export { DefaultMetaParser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdE1ldGFQYXJzZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL21ldGEvcGFyc2VyL0RlZmF1bHRNZXRhUGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFBQTtLQWtFQzs7Ozs7SUE3RFUsaUNBQUs7Ozs7SUFBWixVQUFhLElBQVM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBQ3ZELEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3hDLEtBQUssR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ3pDLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUVqQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVPLHFDQUFTOzs7OztJQUFqQixVQUFrQixJQUFJO1FBQ2xCLElBQUk7O2dCQUNJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7O2dCQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOztnQkFDdkIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUM3QixJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM3QixPQUFPLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE1BQU0sSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQztJQUNMLENBQUM7Ozs7OztJQUVPLG9EQUF3Qjs7Ozs7SUFBaEMsVUFBaUMsVUFBVTtRQUEzQyxpQkFFQztRQURHLE9BQU8sVUFBVSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQXZCLENBQXVCLEVBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFTywyQ0FBZTs7Ozs7SUFBdkIsVUFBd0IsTUFBVzs7WUFDM0IsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDM0I7YUFDSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRO1lBQy9CLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QjtZQUNELElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEU7UUFDRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDakIsSUFBSSxFQUFFLE9BQU87WUFDYixHQUFHLEVBQUUsRUFBRTtZQUNQLFNBQVMsRUFBRSxJQUFJO1lBQ2YsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsS0FBSztZQUNmLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLENBQUM7WUFDUixPQUFPLEVBQUUsRUFBRTtZQUNYLFNBQVMsRUFBRSxHQUFHO1lBQ2QsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsRUFBRTtZQUNoQixJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxLQUFLO1lBQ2IsU0FBUyxFQUFFLEdBQUc7WUFDZCxXQUFXLEVBQUUsRUFBRTtZQUNmLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O2dCQWpFSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7NEJBVEQ7Q0F5RUMsQUFsRUQsSUFrRUM7U0EvRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU1ldGFQYXJzZXIgfSBmcm9tIFwiLi9NZXRhUGFyc2VyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgTWV0YUNvbmZpZyB9IGZyb20gXCIuL2JlYW4vTWV0YUNvbmZpZ1wiO1xuaW1wb3J0IHsgTWV0YVNvdXJjZSB9IGZyb20gXCIuL2JlYW4vTWV0YVNvdXJjZVwiO1xuaW1wb3J0IHsgQVBQRXJyb3IgfSBmcm9tIFwiLi4vLi4vZXJyb3JIYW5kbGVyL0FQUEVycm9yXCI7XG5pbXBvcnQgeyBNZXRhR3JpZCB9IGZyb20gXCIuL2JlYW4vTWV0YUdyaWRcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRNZXRhUGFyc2VyIGltcGxlbWVudHMgSU1ldGFQYXJzZXIge1xuXG4gICAgcHVibGljIHBhcnNlKGpzb246IGFueSk6IE1ldGFDb25maWcge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRlZmF1bHQgTWV0YSBQYXJzZXIgcGFyc2U6XCIsIGpzb24pO1xuICAgICAgICBqc29uLmNvbHVtbnMgPSB0aGlzLmZpbGxEZWZhdWx0Q29sdW1uU2V0dGluZyhqc29uLmNvbHVtbnMpO1xuICAgICAgICBsZXQgZ3JvdXAgPSBqc29uLmdyb3VwID8ganNvbi5ncm91cCA6IFtdO1xuICAgICAgICBncm91cCA9IHRoaXMuZmlsbERlZmF1bHRDb2x1bW5TZXR0aW5nKGdyb3VwKTtcbiAgICAgICAgbGV0IG1ldGFDb25maWcgPSBuZXcgTWV0YUNvbmZpZygpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVmYXVsdE1ldGFQYXJzZXIgcGFyc2U6XCIsIGpzb24sIGdyb3VwKTtcbiAgICAgICAgbWV0YUNvbmZpZy5zb3VyY2UgPSB0aGlzLmdldFNvdXJjZShqc29uKTtcbiAgICAgICAgbWV0YUNvbmZpZy5zZXRDb2x1bW4oanNvbi5jb2x1bW5zLCBncm91cCk7XG4gICAgICAgIG1ldGFDb25maWcuc2V0Rm9vdGVyKGpzb24uZm9vdGVyKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJBZnRlciBQYXJzZTpcIiwgbWV0YUNvbmZpZyk7XG4gICAgICAgIHJldHVybiBtZXRhQ29uZmlnO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0U291cmNlKGpzb24pOiBNZXRhU291cmNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB0eXBlID0ganNvbi5zb3VyY2UudHlwZTtcbiAgICAgICAgICAgIGxldCByZWFkID0ganNvbi5zb3VyY2UucmVhZDtcbiAgICAgICAgICAgIGxldCB3cml0ZSA9IGpzb24uc291cmNlLndyaXRlO1xuICAgICAgICAgICAgcmVhZCA9IHJlYWQgPyByZWFkIDogbnVsbDtcbiAgICAgICAgICAgIHdyaXRlID0gd3JpdGUgPyB3cml0ZSA6IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1ldGFTb3VyY2UodHlwZSwgcmVhZCwgd3JpdGUpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFQUEVycm9yKFwiRjAwODAxXCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWxsRGVmYXVsdENvbHVtblNldHRpbmcoY29sdW1uTGlzdCk6IGFueSB7XG4gICAgICAgIHJldHVybiBjb2x1bW5MaXN0Lm1hcCh4ID0+IHRoaXMuX2RlZmF1bHRTZXR0aW5nKHgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kZWZhdWx0U2V0dGluZyhjb2x1bW46IGFueSk6IGFueSB7XG4gICAgICAgIGxldCBncmlkID0gY29sdW1uLmdyaWQ7XG4gICAgICAgIGlmICghZ3JpZCkge1xuICAgICAgICAgICAgZ3JpZCA9IG5ldyBNZXRhR3JpZCgxMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIChncmlkKSA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICBncmlkID0gbmV3IE1ldGFHcmlkKGdyaWQpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdyaWQgPSBuZXcgTWV0YUdyaWQoZ3JpZC5wYywgZ3JpZC5uYiwgZ3JpZC5wYWQsIGdyaWQubW9iaWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0eXBlOiAnR3JvdXAnLFxuICAgICAgICAgICAgcmVmOiAnJyxcbiAgICAgICAgICAgIHNob3dUaXRsZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIGlubGluZTogZmFsc2UsXG4gICAgICAgICAgICBvcmRlcjogMCxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiA5OTksXG4gICAgICAgICAgICBzaG93RGVmYXVsdE9wdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIGdyb3VwQ29sdW1uczogW10sXG4gICAgICAgICAgICBpY29uOiBudWxsLFxuICAgICAgICAgICAgY2FuQWRkOiBmYWxzZSxcbiAgICAgICAgICAgIG1heE51bWJlcjogOTk5LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICAgICAgcm93VGl0bGU6IG51bGxcbiAgICAgICAgfSwgY29sdW1uLCB7IGdyaWQgfSk7XG4gICAgfVxufSJdfQ==