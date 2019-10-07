/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ValidType } from "./ValidCondition.interface";
import { ValidController } from "../ValidController";
export class RequiredCondition {
    constructor() {
        this.baseTypes = ['string', 'undefined', 'number', 'boolean'];
        this.type = ValidType.Required;
    }
    /**
     * @return {?}
     */
    getType() {
        return this.type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    valid(value) {
        this.value = value;
        console.log('RequiredCondition valid:', value, this.baseTypes.indexOf(typeof value) === -1);
        /** @type {?} */
        let isBaseType = this.baseTypes.indexOf(typeof value) !== -1 || value === null;
        if (isBaseType)
            return value !== null && value !== undefined;
        else if (value instanceof Array)
            return value.length > 0;
        else if (typeof value === 'object')
            return ValidController.validObject(value, value.beanName);
    }
    /**
     * @param {?} column
     * @return {?}
     */
    getErrorMsg(column) {
        return `${column} is ${this.value} but expect required.`;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    RequiredCondition.prototype.type;
    /**
     * @type {?}
     * @private
     */
    RequiredCondition.prototype.value;
    /**
     * @type {?}
     * @private
     */
    RequiredCondition.prototype.baseTypes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWlyZWRDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3ZhbGlkL2NvbmRpdGlvbi9SZXF1aXJlZENvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFrQixTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsTUFBTTtJQUtGO1FBRlEsY0FBUyxHQUFHLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFHN0QsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBQ0QsS0FBSyxDQUFDLEtBQUs7UUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ3hGLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJO1FBQzlFLElBQUksVUFBVTtZQUNWLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDO2FBQzVDLElBQUksS0FBSyxZQUFZLEtBQUs7WUFDM0IsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUN2QixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7WUFDOUIsT0FBTyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBYztRQUN0QixPQUFPLEdBQUcsTUFBTSxPQUFPLElBQUksQ0FBQyxLQUFLLHVCQUF1QixDQUFDO0lBQzdELENBQUM7Q0FDSjs7Ozs7O0lBMUJHLGlDQUF3Qjs7Ozs7SUFDeEIsa0NBQW1COzs7OztJQUNuQixzQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZENvbmRpdGlvbiwgVmFsaWRUeXBlIH0gZnJvbSBcIi4vVmFsaWRDb25kaXRpb24uaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBWYWxpZENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vVmFsaWRDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBSZXF1aXJlZENvbmRpdGlvbiBpbXBsZW1lbnRzIFZhbGlkQ29uZGl0aW9uIHtcbiAgICBwcml2YXRlIHR5cGU6IFZhbGlkVHlwZTtcbiAgICBwcml2YXRlIHZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSBiYXNlVHlwZXMgPSBbJ3N0cmluZycsICd1bmRlZmluZWQnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnR5cGUgPSBWYWxpZFR5cGUuUmVxdWlyZWQ7XG4gICAgfVxuXG4gICAgZ2V0VHlwZSgpOiBWYWxpZFR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xuICAgIH1cbiAgICB2YWxpZCh2YWx1ZSk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXF1aXJlZENvbmRpdGlvbiB2YWxpZDonLCB2YWx1ZSwgdGhpcy5iYXNlVHlwZXMuaW5kZXhPZih0eXBlb2YgdmFsdWUpID09PSAtMSk7XG4gICAgICAgIGxldCBpc0Jhc2VUeXBlID0gdGhpcy5iYXNlVHlwZXMuaW5kZXhPZih0eXBlb2YgdmFsdWUpICE9PSAtMSB8fCB2YWx1ZSA9PT0gbnVsbDtcbiAgICAgICAgaWYgKGlzQmFzZVR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgcmV0dXJuIFZhbGlkQ29udHJvbGxlci52YWxpZE9iamVjdCh2YWx1ZSwgdmFsdWUuYmVhbk5hbWUpO1xuICAgIH1cblxuICAgIGdldEVycm9yTXNnKGNvbHVtbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke2NvbHVtbn0gaXMgJHt0aGlzLnZhbHVlfSBidXQgZXhwZWN0IHJlcXVpcmVkLmA7XG4gICAgfVxufSJdfQ==