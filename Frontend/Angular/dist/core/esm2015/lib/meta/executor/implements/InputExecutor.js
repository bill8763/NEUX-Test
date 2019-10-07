/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { APIExecutor } from "./APIExecutor";
import * as i0 from "@angular/core";
import * as i1 from "../../../api/APIFactory";
import * as i2 from "../../../api/APIDispatch";
export class InputExecutor extends APIExecutor {
    /**
     * @param {?} config
     * @param {?} params
     * @return {?}
     */
    getData(config, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    /**
     * @param {?} config
     * @param {?} data
     * @param {?} params
     * @return {?}
     */
    saveData(config, data, params) {
        const _super = name => super[name];
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (config.source.write)
                return _super("saveData").call(this, config, data, params);
            else
                return null;
        });
    }
}
InputExecutor.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ InputExecutor.ngInjectableDef = i0.defineInjectable({ factory: function InputExecutor_Factory() { return new InputExecutor(i0.inject(i0.ErrorHandler), i0.inject(i1.APIFactory), i0.inject(i2.APIDispatch)); }, token: InputExecutor, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXRFeGVjdXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbWV0YS9leGVjdXRvci9pbXBsZW1lbnRzL0lucHV0RXhlY3V0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFLNUMsTUFBTSxvQkFBcUIsU0FBUSxXQUFXOzs7Ozs7SUFFN0IsT0FBTyxDQUFDLE1BQWtCLEVBQUUsTUFBVzs7WUFDaEQsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUFBOzs7Ozs7O0lBQ1ksUUFBUSxDQUFDLE1BQWtCLEVBQUUsSUFBUyxFQUFFLE1BQVc7OztZQUM1RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDbkIsT0FBTyxrQkFBYyxZQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOztnQkFFNUMsT0FBTyxJQUFJLENBQUM7UUFDcEIsQ0FBQztLQUFBOzs7WUFiSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTWV0YUV4ZWN1dG9yIH0gZnJvbSBcIi4uL01ldGFFeGVjdXRvci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE1ldGFDb25maWcgfSBmcm9tIFwiLi4vLi4vcGFyc2VyL2JlYW4vTWV0YUNvbmZpZ1wiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBUElFeGVjdXRvciB9IGZyb20gXCIuL0FQSUV4ZWN1dG9yXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRFeGVjdXRvciBleHRlbmRzIEFQSUV4ZWN1dG9yIGltcGxlbWVudHMgSU1ldGFFeGVjdXRvciB7XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RGF0YShjb25maWc6IE1ldGFDb25maWcsIHBhcmFtczogYW55KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgYXN5bmMgc2F2ZURhdGEoY29uZmlnOiBNZXRhQ29uZmlnLCBkYXRhOiBhbnksIHBhcmFtczogYW55KSB7XG4gICAgICAgIGlmIChjb25maWcuc291cmNlLndyaXRlKVxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLnNhdmVEYXRhKGNvbmZpZywgZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdfQ==