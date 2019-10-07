/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { APPError } from "../../errorHandler/APPError";
/**
 * @abstract
 */
export class BaseMetaComponent {
    /**
     * @param {?} metaService
     * @param {?} parser
     * @param {?} executor
     */
    constructor(metaService, parser, executor) {
        this.metaService = metaService;
        this.parser = parser;
        this.executor = executor;
        this.metaID = null;
        this.metaLoaded = false;
        this.metaConfig = null;
        this._data = null;
        this.metaID = this.getMetaID();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log("MetaComponent ngOninit!");
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let metaJSON = yield this.metaService.getMetaJson(this.metaID);
                this.metaConfig = this.parser.parse(metaJSON);
                yield this.loadData();
                this.metaLoaded = true;
            }
            catch (error) {
                throw new APPError("F00800", error.message);
            }
        });
    }
    /**
     * @protected
     * @return {?}
     */
    loadData() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let executed_data = yield this.executor.getData(this.metaConfig, this.getMetaParams());
            if (executed_data) {
                this._data = executed_data;
                this.onDataUpdated();
            }
        });
    }
    /**
     * @protected
     * @return {?}
     */
    waitUntilMetaLoaded() {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            /** @type {?} */
            let checkInterval = setInterval((/**
             * @return {?}
             */
            () => {
                if (this.metaLoaded) {
                    clearInterval(checkInterval);
                    res();
                }
            }), 100);
        }));
    }
    /**
     * @return {?}
     */
    isMetaLoaded() {
        return this.metaLoaded;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseMetaComponent.prototype.metaID;
    /**
     * @type {?}
     * @protected
     */
    BaseMetaComponent.prototype.metaLoaded;
    /**
     * @type {?}
     * @protected
     */
    BaseMetaComponent.prototype.metaConfig;
    /**
     * @type {?}
     * @protected
     */
    BaseMetaComponent.prototype._data;
    /**
     * @type {?}
     * @protected
     */
    BaseMetaComponent.prototype.metaService;
    /**
     * @type {?}
     * @protected
     */
    BaseMetaComponent.prototype.parser;
    /**
     * @type {?}
     * @protected
     */
    BaseMetaComponent.prototype.executor;
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    BaseMetaComponent.prototype.getMetaID = function () { };
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    BaseMetaComponent.prototype.getMetaParams = function () { };
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    BaseMetaComponent.prototype.onDataUpdated = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU1ldGFDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL21ldGEvY29tcG9uZW50cy9CYXNlTWV0YUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUN2RCxNQUFNOzs7Ozs7SUFFRixZQUNjLFdBQXdCLEVBQ3hCLE1BQW1CLEVBQ25CLFFBQXVCO1FBRnZCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWE7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUszQixXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3RCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsZUFBVSxHQUFlLElBQUksQ0FBQztRQUM5QixVQUFLLEdBQVEsSUFBSSxDQUFDO1FBUnhCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFZTSxRQUFRO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVhLElBQUk7O1lBQ2QsSUFBSTs7b0JBQ0ksUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osTUFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQy9DO1FBQ0wsQ0FBQztLQUFBOzs7OztJQUVlLFFBQVE7OztnQkFDaEIsYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdEYsSUFBSSxhQUFhLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN4QjtRQUNMLENBQUM7S0FBQTs7Ozs7SUFFUyxtQkFBbUI7UUFDekIsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7O2dCQUN4QixhQUFhLEdBQUcsV0FBVzs7O1lBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2pCLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDN0IsR0FBRyxFQUFFLENBQUM7aUJBQ1Q7WUFDTCxDQUFDLEdBQUUsR0FBRyxDQUFDO1FBQ1gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRU0sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0NBSUo7Ozs7OztJQW5ERyxtQ0FBZ0M7Ozs7O0lBQ2hDLHVDQUFzQzs7Ozs7SUFHdEMsdUNBQXdDOzs7OztJQUN4QyxrQ0FBNEI7Ozs7O0lBWnhCLHdDQUFrQzs7Ozs7SUFDbEMsbUNBQTZCOzs7OztJQUM3QixxQ0FBaUM7Ozs7OztJQVlyQyx3REFBdUM7Ozs7OztJQUN2Qyw0REFBd0M7Ozs7OztJQXlDeEMsNERBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0YVNlcnZpY2UgfSBmcm9tIFwiLi4vTWV0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJTWV0YUV4ZWN1dG9yIH0gZnJvbSBcIi4uL2V4ZWN1dG9yL01ldGFFeGVjdXRvci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElNZXRhUGFyc2VyIH0gZnJvbSBcIi4uL3BhcnNlci9NZXRhUGFyc2VyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgTWV0YUNvbmZpZyB9IGZyb20gXCIuLi9wYXJzZXIvYmVhbi9NZXRhQ29uZmlnXCI7XG5pbXBvcnQgeyBBUFBFcnJvciB9IGZyb20gXCIuLi8uLi9lcnJvckhhbmRsZXIvQVBQRXJyb3JcIjtcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTWV0YUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFTZXJ2aWNlOiBNZXRhU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlcjogSU1ldGFQYXJzZXIsXG4gICAgICAgIHByb3RlY3RlZCBleGVjdXRvcjogSU1ldGFFeGVjdXRvclxuICAgICkge1xuICAgICAgICB0aGlzLm1ldGFJRCA9IHRoaXMuZ2V0TWV0YUlEKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1ldGFJRDogc3RyaW5nID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgbWV0YUxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICBwcm90ZWN0ZWQgbWV0YUNvbmZpZzogTWV0YUNvbmZpZyA9IG51bGw7XG4gICAgcHJvdGVjdGVkIF9kYXRhOiBhbnkgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldE1ldGFJRCgpOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldE1ldGFQYXJhbXMoKTogYW55O1xuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1ldGFDb21wb25lbnQgbmdPbmluaXQhXCIpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGluaXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgbWV0YUpTT04gPSBhd2FpdCB0aGlzLm1ldGFTZXJ2aWNlLmdldE1ldGFKc29uKHRoaXMubWV0YUlEKTtcbiAgICAgICAgICAgIHRoaXMubWV0YUNvbmZpZyA9IHRoaXMucGFyc2VyLnBhcnNlKG1ldGFKU09OKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgICAgIHRoaXMubWV0YUxvYWRlZCA9IHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQVBQRXJyb3IoXCJGMDA4MDBcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgbG9hZERhdGEoKSB7XG4gICAgICAgIGxldCBleGVjdXRlZF9kYXRhID0gYXdhaXQgdGhpcy5leGVjdXRvci5nZXREYXRhKHRoaXMubWV0YUNvbmZpZywgdGhpcy5nZXRNZXRhUGFyYW1zKCkpO1xuICAgICAgICBpZiAoZXhlY3V0ZWRfZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5fZGF0YSA9IGV4ZWN1dGVkX2RhdGE7XG4gICAgICAgICAgICB0aGlzLm9uRGF0YVVwZGF0ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB3YWl0VW50aWxNZXRhTG9hZGVkKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICAgIGxldCBjaGVja0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1ldGFMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja0ludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzTWV0YUxvYWRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0YUxvYWRlZDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb25EYXRhVXBkYXRlZCgpO1xuXG59Il19