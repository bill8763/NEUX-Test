/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CalendarDateFormatter } from 'angular-calendar';
import { DatePipe } from '@angular/common';
var CustomDateFormatter = /** @class */ (function (_super) {
    tslib_1.__extends(CustomDateFormatter, _super);
    function CustomDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // you can override any of the methods defined in the parent class
    // you can override any of the methods defined in the parent class
    /**
     * @param {?} __0
     * @return {?}
     */
    CustomDateFormatter.prototype.monthViewColumnHeader = 
    // you can override any of the methods defined in the parent class
    /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'EEE', locale);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CustomDateFormatter.prototype.monthViewTitle = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'MMM y', locale);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CustomDateFormatter.prototype.weekViewColumnHeader = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'EEE', locale);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CustomDateFormatter.prototype.weekViewColumnSubHeader = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'dd', locale);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CustomDateFormatter.prototype.weekViewHour = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'HH:mm', locale);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CustomDateFormatter.prototype.dayViewHour = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'HH:mm', locale);
    };
    return CustomDateFormatter;
}(CalendarDateFormatter));
export { CustomDateFormatter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY2FsZW5kYXItZGF0ZWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FsZW5kYXIvdWktY2FsZW5kYXItZGF0ZWZvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBdUIsTUFBTSxrQkFBa0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0M7SUFBeUMsK0NBQXFCO0lBQTlEOztJQTBCQSxDQUFDO0lBekJDLGtFQUFrRTs7Ozs7O0lBRTNELG1EQUFxQjs7Ozs7O0lBQTVCLFVBQTZCLEVBQXFDO1lBQW5DLGNBQUksRUFBRSxrQkFBTTtRQUN6QyxPQUFPLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRU0sNENBQWM7Ozs7SUFBckIsVUFBc0IsRUFBcUM7WUFBbkMsY0FBSSxFQUFFLGtCQUFNO1FBQ2xDLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFFTSxrREFBb0I7Ozs7SUFBM0IsVUFBNEIsRUFBcUM7WUFBbkMsY0FBSSxFQUFFLGtCQUFNO1FBQ3hDLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFTSxxREFBdUI7Ozs7SUFBOUIsVUFBK0IsRUFBcUM7WUFBbkMsY0FBSSxFQUFFLGtCQUFNO1FBQzNDLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFFTSwwQ0FBWTs7OztJQUFuQixVQUFvQixFQUFxQztZQUFuQyxjQUFJLEVBQUUsa0JBQU07UUFDaEMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVNLHlDQUFXOzs7O0lBQWxCLFVBQW1CLEVBQXFDO1lBQW5DLGNBQUksRUFBRSxrQkFBTTtRQUMvQixPQUFPLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUExQkQsQ0FBeUMscUJBQXFCLEdBMEI3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbGVuZGFyRGF0ZUZvcm1hdHRlciwgRGF0ZUZvcm1hdHRlclBhcmFtcyB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXInO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tRGF0ZUZvcm1hdHRlciBleHRlbmRzIENhbGVuZGFyRGF0ZUZvcm1hdHRlciB7XG4gIC8vIHlvdSBjYW4gb3ZlcnJpZGUgYW55IG9mIHRoZSBtZXRob2RzIGRlZmluZWQgaW4gdGhlIHBhcmVudCBjbGFzc1xuXG4gIHB1YmxpYyBtb250aFZpZXdDb2x1bW5IZWFkZXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBEYXRlUGlwZShsb2NhbGUpLnRyYW5zZm9ybShkYXRlLCAnRUVFJywgbG9jYWxlKTtcbiAgfVxuXG4gIHB1YmxpYyBtb250aFZpZXdUaXRsZSh7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IERhdGVQaXBlKGxvY2FsZSkudHJhbnNmb3JtKGRhdGUsICdNTU0geScsIGxvY2FsZSk7XG4gIH1cblxuICBwdWJsaWMgd2Vla1ZpZXdDb2x1bW5IZWFkZXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBEYXRlUGlwZShsb2NhbGUpLnRyYW5zZm9ybShkYXRlLCAnRUVFJywgbG9jYWxlKTtcbiAgfVxuXG4gIHB1YmxpYyB3ZWVrVmlld0NvbHVtblN1YkhlYWRlcih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IERhdGVQaXBlKGxvY2FsZSkudHJhbnNmb3JtKGRhdGUsICdkZCcsIGxvY2FsZSk7XG4gIH1cblxuICBwdWJsaWMgd2Vla1ZpZXdIb3VyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRGF0ZVBpcGUobG9jYWxlKS50cmFuc2Zvcm0oZGF0ZSwgJ0hIOm1tJywgbG9jYWxlKTtcbiAgfVxuXG4gIHB1YmxpYyBkYXlWaWV3SG91cih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IERhdGVQaXBlKGxvY2FsZSkudHJhbnNmb3JtKGRhdGUsICdISDptbScsIGxvY2FsZSk7XG4gIH1cbn1cbiJdfQ==