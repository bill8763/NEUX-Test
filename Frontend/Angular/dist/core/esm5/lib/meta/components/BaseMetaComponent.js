/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { APPError } from "../../errorHandler/APPError";
/**
 * @abstract
 */
var /**
 * @abstract
 */
BaseMetaComponent = /** @class */ (function () {
    function BaseMetaComponent(metaService, parser, executor) {
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
    BaseMetaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log("MetaComponent ngOninit!");
        this.init();
    };
    /**
     * @private
     * @return {?}
     */
    BaseMetaComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var metaJSON, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.metaService.getMetaJson(this.metaID)];
                    case 1:
                        metaJSON = _a.sent();
                        this.metaConfig = this.parser.parse(metaJSON);
                        return [4 /*yield*/, this.loadData()];
                    case 2:
                        _a.sent();
                        this.metaLoaded = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        throw new APPError("F00800", error_1.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @protected
     * @return {?}
     */
    BaseMetaComponent.prototype.loadData = /**
     * @protected
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var executed_data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.executor.getData(this.metaConfig, this.getMetaParams())];
                    case 1:
                        executed_data = _a.sent();
                        if (executed_data) {
                            this._data = executed_data;
                            this.onDataUpdated();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @protected
     * @return {?}
     */
    BaseMetaComponent.prototype.waitUntilMetaLoaded = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        function (res, rej) {
            /** @type {?} */
            var checkInterval = setInterval((/**
             * @return {?}
             */
            function () {
                if (_this.metaLoaded) {
                    clearInterval(checkInterval);
                    res();
                }
            }), 100);
        }));
    };
    /**
     * @return {?}
     */
    BaseMetaComponent.prototype.isMetaLoaded = /**
     * @return {?}
     */
    function () {
        return this.metaLoaded;
    };
    return BaseMetaComponent;
}());
/**
 * @abstract
 */
export { BaseMetaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU1ldGFDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL21ldGEvY29tcG9uZW50cy9CYXNlTWV0YUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUN2RDs7OztJQUVJLDJCQUNjLFdBQXdCLEVBQ3hCLE1BQW1CLEVBQ25CLFFBQXVCO1FBRnZCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWE7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUszQixXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3RCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsZUFBVSxHQUFlLElBQUksQ0FBQztRQUM5QixVQUFLLEdBQVEsSUFBSSxDQUFDO1FBUnhCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFZTSxvQ0FBUTs7O0lBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRWEsZ0NBQUk7Ozs7SUFBbEI7Ozs7Ozs7d0JBRXVCLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQTFELFFBQVEsR0FBRyxTQUErQzt3QkFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDOUMscUJBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBckIsU0FBcUIsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7d0JBRXZCLE1BQU0sSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7S0FFbkQ7Ozs7O0lBRWUsb0NBQVE7Ozs7SUFBeEI7Ozs7OzRCQUN3QixxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFBOzt3QkFBbEYsYUFBYSxHQUFHLFNBQWtFO3dCQUN0RixJQUFJLGFBQWEsRUFBRTs0QkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQzs0QkFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO3lCQUN4Qjs7Ozs7S0FDSjs7Ozs7SUFFUywrQ0FBbUI7Ozs7SUFBN0I7UUFBQSxpQkFTQztRQVJHLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7O2dCQUNwQixhQUFhLEdBQUcsV0FBVzs7O1lBQUM7Z0JBQzVCLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRTtvQkFDakIsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUM3QixHQUFHLEVBQUUsQ0FBQztpQkFDVDtZQUNMLENBQUMsR0FBRSxHQUFHLENBQUM7UUFDWCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFTSx3Q0FBWTs7O0lBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFJTCx3QkFBQztBQUFELENBQUMsQUE3REQsSUE2REM7Ozs7Ozs7Ozs7SUFuREcsbUNBQWdDOzs7OztJQUNoQyx1Q0FBc0M7Ozs7O0lBR3RDLHVDQUF3Qzs7Ozs7SUFDeEMsa0NBQTRCOzs7OztJQVp4Qix3Q0FBa0M7Ozs7O0lBQ2xDLG1DQUE2Qjs7Ozs7SUFDN0IscUNBQWlDOzs7Ozs7SUFZckMsd0RBQXVDOzs7Ozs7SUFDdkMsNERBQXdDOzs7Ozs7SUF5Q3hDLDREQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGFTZXJ2aWNlIH0gZnJvbSBcIi4uL01ldGEuc2VydmljZVwiO1xuaW1wb3J0IHsgSU1ldGFFeGVjdXRvciB9IGZyb20gXCIuLi9leGVjdXRvci9NZXRhRXhlY3V0b3IuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJTWV0YVBhcnNlciB9IGZyb20gXCIuLi9wYXJzZXIvTWV0YVBhcnNlci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE1ldGFDb25maWcgfSBmcm9tIFwiLi4vcGFyc2VyL2JlYW4vTWV0YUNvbmZpZ1wiO1xuaW1wb3J0IHsgQVBQRXJyb3IgfSBmcm9tIFwiLi4vLi4vZXJyb3JIYW5kbGVyL0FQUEVycm9yXCI7XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZU1ldGFDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBtZXRhU2VydmljZTogTWV0YVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZXI6IElNZXRhUGFyc2VyLFxuICAgICAgICBwcm90ZWN0ZWQgZXhlY3V0b3I6IElNZXRhRXhlY3V0b3JcbiAgICApIHtcbiAgICAgICAgdGhpcy5tZXRhSUQgPSB0aGlzLmdldE1ldGFJRCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtZXRhSUQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG1ldGFMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgcHJvdGVjdGVkIG1ldGFDb25maWc6IE1ldGFDb25maWcgPSBudWxsO1xuICAgIHByb3RlY3RlZCBfZGF0YTogYW55ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRNZXRhSUQoKTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRNZXRhUGFyYW1zKCk6IGFueTtcblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNZXRhQ29tcG9uZW50IG5nT25pbml0IVwiKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBpbml0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IG1ldGFKU09OID0gYXdhaXQgdGhpcy5tZXRhU2VydmljZS5nZXRNZXRhSnNvbih0aGlzLm1ldGFJRCk7XG4gICAgICAgICAgICB0aGlzLm1ldGFDb25maWcgPSB0aGlzLnBhcnNlci5wYXJzZShtZXRhSlNPTik7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgICAgICB0aGlzLm1ldGFMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFQUEVycm9yKFwiRjAwODAwXCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGxvYWREYXRhKCkge1xuICAgICAgICBsZXQgZXhlY3V0ZWRfZGF0YSA9IGF3YWl0IHRoaXMuZXhlY3V0b3IuZ2V0RGF0YSh0aGlzLm1ldGFDb25maWcsIHRoaXMuZ2V0TWV0YVBhcmFtcygpKTtcbiAgICAgICAgaWYgKGV4ZWN1dGVkX2RhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBleGVjdXRlZF9kYXRhO1xuICAgICAgICAgICAgdGhpcy5vbkRhdGFVcGRhdGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgd2FpdFVudGlsTWV0YUxvYWRlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hlY2tJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tZXRhTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc01ldGFMb2FkZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGFMb2FkZWQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG9uRGF0YVVwZGF0ZWQoKTtcblxufSJdfQ==