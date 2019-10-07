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
export class DefaultMetaParser {
    /**
     * @param {?} json
     * @return {?}
     */
    parse(json) {
        console.log("Default Meta Parser parse:", json);
        json.columns = this.fillDefaultColumnSetting(json.columns);
        /** @type {?} */
        let group = json.group ? json.group : [];
        group = this.fillDefaultColumnSetting(group);
        /** @type {?} */
        let metaConfig = new MetaConfig();
        console.log("DefaultMetaParser parse:", json, group);
        metaConfig.source = this.getSource(json);
        metaConfig.setColumn(json.columns, group);
        metaConfig.setFooter(json.footer);
        console.log("After Parse:", metaConfig);
        return metaConfig;
    }
    /**
     * @private
     * @param {?} json
     * @return {?}
     */
    getSource(json) {
        try {
            /** @type {?} */
            let type = json.source.type;
            /** @type {?} */
            let read = json.source.read;
            /** @type {?} */
            let write = json.source.write;
            read = read ? read : null;
            write = write ? write : null;
            return new MetaSource(type, read, write);
        }
        catch (error) {
            throw new APPError("F00801", error.message);
        }
    }
    /**
     * @private
     * @param {?} columnList
     * @return {?}
     */
    fillDefaultColumnSetting(columnList) {
        return columnList.map((/**
         * @param {?} x
         * @return {?}
         */
        x => this._defaultSetting(x)));
    }
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    _defaultSetting(column) {
        /** @type {?} */
        let grid = column.grid;
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
        }, column, { grid });
    }
}
DefaultMetaParser.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DefaultMetaParser.ngInjectableDef = i0.defineInjectable({ factory: function DefaultMetaParser_Factory() { return new DefaultMetaParser(); }, token: DefaultMetaParser, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdE1ldGFQYXJzZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL21ldGEvcGFyc2VyL0RlZmF1bHRNZXRhUGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTTs7Ozs7SUFFSyxLQUFLLENBQUMsSUFBUztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFDdkQsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDeEMsS0FBSyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFDekMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFO1FBRWpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JELFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDeEMsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLElBQUk7UUFDbEIsSUFBSTs7Z0JBQ0ksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTs7Z0JBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7O2dCQUN2QixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdCLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM1QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osTUFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sd0JBQXdCLENBQUMsVUFBVTtRQUN2QyxPQUFPLFVBQVUsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLE1BQVc7O1lBQzNCLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSTtRQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO2FBQ0ksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUTtZQUMvQixJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekI7WUFDRCxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2pCLElBQUksRUFBRSxPQUFPO1lBQ2IsR0FBRyxFQUFFLEVBQUU7WUFDUCxTQUFTLEVBQUUsSUFBSTtZQUNmLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxDQUFDO1lBQ1IsT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUUsR0FBRztZQUNkLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsS0FBSztZQUNiLFNBQVMsRUFBRSxHQUFHO1lBQ2QsV0FBVyxFQUFFLEVBQUU7WUFDZixRQUFRLEVBQUUsSUFBSTtTQUNqQixFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBakVKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNZXRhUGFyc2VyIH0gZnJvbSBcIi4vTWV0YVBhcnNlci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE1ldGFDb25maWcgfSBmcm9tIFwiLi9iZWFuL01ldGFDb25maWdcIjtcbmltcG9ydCB7IE1ldGFTb3VyY2UgfSBmcm9tIFwiLi9iZWFuL01ldGFTb3VyY2VcIjtcbmltcG9ydCB7IEFQUEVycm9yIH0gZnJvbSBcIi4uLy4uL2Vycm9ySGFuZGxlci9BUFBFcnJvclwiO1xuaW1wb3J0IHsgTWV0YUdyaWQgfSBmcm9tIFwiLi9iZWFuL01ldGFHcmlkXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0TWV0YVBhcnNlciBpbXBsZW1lbnRzIElNZXRhUGFyc2VyIHtcblxuICAgIHB1YmxpYyBwYXJzZShqc29uOiBhbnkpOiBNZXRhQ29uZmlnIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEZWZhdWx0IE1ldGEgUGFyc2VyIHBhcnNlOlwiLCBqc29uKTtcbiAgICAgICAganNvbi5jb2x1bW5zID0gdGhpcy5maWxsRGVmYXVsdENvbHVtblNldHRpbmcoanNvbi5jb2x1bW5zKTtcbiAgICAgICAgbGV0IGdyb3VwID0ganNvbi5ncm91cCA/IGpzb24uZ3JvdXAgOiBbXTtcbiAgICAgICAgZ3JvdXAgPSB0aGlzLmZpbGxEZWZhdWx0Q29sdW1uU2V0dGluZyhncm91cCk7XG4gICAgICAgIGxldCBtZXRhQ29uZmlnID0gbmV3IE1ldGFDb25maWcoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlZmF1bHRNZXRhUGFyc2VyIHBhcnNlOlwiLCBqc29uLCBncm91cCk7XG4gICAgICAgIG1ldGFDb25maWcuc291cmNlID0gdGhpcy5nZXRTb3VyY2UoanNvbik7XG4gICAgICAgIG1ldGFDb25maWcuc2V0Q29sdW1uKGpzb24uY29sdW1ucywgZ3JvdXApO1xuICAgICAgICBtZXRhQ29uZmlnLnNldEZvb3Rlcihqc29uLmZvb3Rlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWZ0ZXIgUGFyc2U6XCIsIG1ldGFDb25maWcpO1xuICAgICAgICByZXR1cm4gbWV0YUNvbmZpZztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFNvdXJjZShqc29uKTogTWV0YVNvdXJjZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdHlwZSA9IGpzb24uc291cmNlLnR5cGU7XG4gICAgICAgICAgICBsZXQgcmVhZCA9IGpzb24uc291cmNlLnJlYWQ7XG4gICAgICAgICAgICBsZXQgd3JpdGUgPSBqc29uLnNvdXJjZS53cml0ZTtcbiAgICAgICAgICAgIHJlYWQgPSByZWFkID8gcmVhZCA6IG51bGw7XG4gICAgICAgICAgICB3cml0ZSA9IHdyaXRlID8gd3JpdGUgOiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZXRhU291cmNlKHR5cGUsIHJlYWQsIHdyaXRlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBUFBFcnJvcihcIkYwMDgwMVwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZmlsbERlZmF1bHRDb2x1bW5TZXR0aW5nKGNvbHVtbkxpc3QpOiBhbnkge1xuICAgICAgICByZXR1cm4gY29sdW1uTGlzdC5tYXAoeCA9PiB0aGlzLl9kZWZhdWx0U2V0dGluZyh4KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFNldHRpbmcoY29sdW1uOiBhbnkpOiBhbnkge1xuICAgICAgICBsZXQgZ3JpZCA9IGNvbHVtbi5ncmlkO1xuICAgICAgICBpZiAoIWdyaWQpIHtcbiAgICAgICAgICAgIGdyaWQgPSBuZXcgTWV0YUdyaWQoMTIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiAoZ3JpZCkgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgZ3JpZCA9IG5ldyBNZXRhR3JpZChncmlkKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBncmlkID0gbmV3IE1ldGFHcmlkKGdyaWQucGMsIGdyaWQubmIsIGdyaWQucGFkLCBncmlkLm1vYmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdHlwZTogJ0dyb3VwJyxcbiAgICAgICAgICAgIHJlZjogJycsXG4gICAgICAgICAgICBzaG93VGl0bGU6IHRydWUsXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICByZWFkb25seTogZmFsc2UsXG4gICAgICAgICAgICBpbmxpbmU6IGZhbHNlLFxuICAgICAgICAgICAgb3JkZXI6IDAsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgIG1heExlbmd0aDogOTk5LFxuICAgICAgICAgICAgc2hvd0RlZmF1bHRPcHRpb246IHRydWUsXG4gICAgICAgICAgICBncm91cENvbHVtbnM6IFtdLFxuICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgIGNhbkFkZDogZmFsc2UsXG4gICAgICAgICAgICBtYXhOdW1iZXI6IDk5OSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICAgIHJvd1RpdGxlOiBudWxsXG4gICAgICAgIH0sIGNvbHVtbiwgeyBncmlkIH0pO1xuICAgIH1cbn0iXX0=