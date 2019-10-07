/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ValidController } from "../ValidController";
import { ValidBean } from "../ValidBean";
/**
 * @param {?} name
 * @return {?}
 */
export function Bean(name) {
    return (/**
     * @template T
     * @param {?} constructor
     * @return {?}
     */
    function Bean(constructor) {
        ValidController.addBean(new ValidBean(name, constructor));
        return /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.beanName = name;
                return _this;
            }
            return class_1;
        }(constructor));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVhbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdmFsaWQvZGVjb3JhdG9yL0JlYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFJekMsTUFBTSxlQUFlLElBQVk7SUFDN0I7Ozs7O0lBQU8sY0FBcUQsV0FBYztRQUN0RSxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzFEO1lBQXFCLG1DQUFXO1lBQXpCO2dCQUFBLHFFQUVOO2dCQURHLGNBQVEsR0FBRyxJQUFJLENBQUM7O1lBQ3BCLENBQUM7WUFBRCxjQUFDO1FBQUQsQ0FBQyxBQUZNLENBQWMsV0FBVyxHQUUvQjtJQUNMLENBQUMsRUFBQTtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vVmFsaWRDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBWYWxpZEJlYW4gfSBmcm9tIFwiLi4vVmFsaWRCZWFuXCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gQmVhbihuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gQmVhbjxUIGV4dGVuZHMgeyBuZXcoLi4uYXJnczogYW55W10pOiB7fSB9Pihjb25zdHJ1Y3RvcjogVCkge1xuICAgICAgICBWYWxpZENvbnRyb2xsZXIuYWRkQmVhbihuZXcgVmFsaWRCZWFuKG5hbWUsIGNvbnN0cnVjdG9yKSk7XG4gICAgICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIHtcbiAgICAgICAgICAgIGJlYW5OYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=