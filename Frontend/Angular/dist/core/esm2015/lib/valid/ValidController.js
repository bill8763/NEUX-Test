/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ValidController {
    /**
     * @param {?} bean
     * @return {?}
     */
    static addBean(bean) {
        if (this.beanPool.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.name === bean.name)).length === 0)
            this.beanPool.push(bean);
    }
    /**
     * @param {?} data
     * @param {?} name
     * @return {?}
     */
    static validObject(data, name) {
        try {
            console.log("validObject:", name, data);
            /** @type {?} */
            let bean = this.getBean(name);
            if (bean) {
                /** @type {?} */
                let validResult = bean.validSelf(data);
                if (validResult.length > 0) {
                    this.errorHandler(validResult, name);
                }
                return validResult.length === 0;
            }
            else {
                throw new Error(`Cannot find Bean ${name}.`);
            }
        }
        catch (error) {
            console.error('Valid Object error', error);
            return true;
        }
    }
    /**
     * @param {?} objectName
     * @param {?} propertyName
     * @param {?} condition
     * @return {?}
     */
    static addCondition(objectName, propertyName, condition) {
        /** @type {?} */
        let bean = this.getBean(objectName);
        /** @type {?} */
        let property = bean.getOrCreateProperty(propertyName);
        console.log("addCondition:", bean, property);
        property.addCondition(condition);
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    static getBean(name) {
        if (this.beanPool.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.name === name)).length > 0)
            return this.beanPool.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.name === name))[0];
        else
            return null;
    }
    /**
     * @private
     * @param {?} validResult
     * @param {?} name
     * @return {?}
     */
    static errorHandler(validResult, name) {
        console.error(validResult.reduce((/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => `${x}\n${y}`), `Class ${name} valid error:`));
    }
}
ValidController.beanPool = [];
if (false) {
    /** @type {?} */
    ValidController.beanPool;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi92YWxpZC9WYWxpZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE1BQU07Ozs7O0lBR0ssTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFlO1FBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFTSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQVMsRUFBRSxJQUFZO1FBQzdDLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O2dCQUNwQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDN0IsSUFBSSxJQUFJLEVBQUU7O29CQUNGLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDdEMsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3hDO2dCQUNELE9BQU8sV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7YUFDbkM7aUJBQ0k7Z0JBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUNoRDtTQUNKO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFrQixFQUFFLFlBQW9CLEVBQUUsU0FBeUI7O1lBQ3RGLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQzs7WUFDL0IsUUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFZO1FBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksRUFBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3JELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBOztZQUVwRCxPQUFPLElBQUksQ0FBQztJQUNwQixDQUFDOzs7Ozs7O0lBRU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUEwQixFQUFFLElBQVk7UUFDaEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFFLFNBQVMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7O0FBM0NhLHdCQUFRLEdBQXFCLEVBQUUsQ0FBQzs7O0lBQTlDLHlCQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkQmVhbiB9IGZyb20gJy4vVmFsaWRCZWFuJztcbmltcG9ydCB7IFZhbGlkQ29uZGl0aW9uIH0gZnJvbSAnLi9jb25kaXRpb24vVmFsaWRDb25kaXRpb24uaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIFZhbGlkQ29udHJvbGxlciB7XG4gICAgcHVibGljIHN0YXRpYyBiZWFuUG9vbDogQXJyYXk8VmFsaWRCZWFuPiA9IFtdO1xuXG4gICAgcHVibGljIHN0YXRpYyBhZGRCZWFuKGJlYW46IFZhbGlkQmVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5iZWFuUG9vbC5maWx0ZXIoeCA9PiB4Lm5hbWUgPT09IGJlYW4ubmFtZSkubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgdGhpcy5iZWFuUG9vbC5wdXNoKGJlYW4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdmFsaWRPYmplY3QoZGF0YTogYW55LCBuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsaWRPYmplY3Q6XCIsIG5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgbGV0IGJlYW4gPSB0aGlzLmdldEJlYW4obmFtZSk7XG4gICAgICAgICAgICBpZiAoYmVhbikge1xuICAgICAgICAgICAgICAgIGxldCB2YWxpZFJlc3VsdCA9IGJlYW4udmFsaWRTZWxmKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZFJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyKHZhbGlkUmVzdWx0LCBuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkUmVzdWx0Lmxlbmd0aCA9PT0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgQmVhbiAke25hbWV9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVmFsaWQgT2JqZWN0IGVycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFkZENvbmRpdGlvbihvYmplY3ROYW1lOiBzdHJpbmcsIHByb3BlcnR5TmFtZTogc3RyaW5nLCBjb25kaXRpb246IFZhbGlkQ29uZGl0aW9uKTogdm9pZCB7XG4gICAgICAgIGxldCBiZWFuID0gdGhpcy5nZXRCZWFuKG9iamVjdE5hbWUpO1xuICAgICAgICBsZXQgcHJvcGVydHkgPSBiZWFuLmdldE9yQ3JlYXRlUHJvcGVydHkocHJvcGVydHlOYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRDb25kaXRpb246XCIsIGJlYW4sIHByb3BlcnR5KTtcbiAgICAgICAgcHJvcGVydHkuYWRkQ29uZGl0aW9uKGNvbmRpdGlvbik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0QmVhbihuYW1lOiBzdHJpbmcpOiBWYWxpZEJlYW4ge1xuICAgICAgICBpZiAodGhpcy5iZWFuUG9vbC5maWx0ZXIoeCA9PiB4Lm5hbWUgPT09IG5hbWUpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZWFuUG9vbC5maWx0ZXIoeCA9PiB4Lm5hbWUgPT09IG5hbWUpWzBdXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGVycm9ySGFuZGxlcih2YWxpZFJlc3VsdDogQXJyYXk8c3RyaW5nPiwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodmFsaWRSZXN1bHQucmVkdWNlKCh4LCB5KSA9PiBgJHt4fVxcbiR7eX1gLCBgQ2xhc3MgJHtuYW1lfSB2YWxpZCBlcnJvcjpgKSk7XG4gICAgfVxufVxuXG5cblxuXG5cbiJdfQ==