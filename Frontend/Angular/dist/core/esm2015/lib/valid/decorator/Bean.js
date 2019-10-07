/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.beanName = name;
            }
        };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVhbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdmFsaWQvZGVjb3JhdG9yL0JlYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQUl6QyxNQUFNLGVBQWUsSUFBWTtJQUM3Qjs7Ozs7SUFBTyxjQUFxRCxXQUFjO1FBQ3RFLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDMUQsT0FBTyxLQUFNLFNBQVEsV0FBVztZQUF6Qjs7Z0JBQ0gsYUFBUSxHQUFHLElBQUksQ0FBQztZQUNwQixDQUFDO1NBQUEsQ0FBQTtJQUNMLENBQUMsRUFBQTtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vVmFsaWRDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBWYWxpZEJlYW4gfSBmcm9tIFwiLi4vVmFsaWRCZWFuXCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gQmVhbihuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gQmVhbjxUIGV4dGVuZHMgeyBuZXcoLi4uYXJnczogYW55W10pOiB7fSB9Pihjb25zdHJ1Y3RvcjogVCkge1xuICAgICAgICBWYWxpZENvbnRyb2xsZXIuYWRkQmVhbihuZXcgVmFsaWRCZWFuKG5hbWUsIGNvbnN0cnVjdG9yKSk7XG4gICAgICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIHtcbiAgICAgICAgICAgIGJlYW5OYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=