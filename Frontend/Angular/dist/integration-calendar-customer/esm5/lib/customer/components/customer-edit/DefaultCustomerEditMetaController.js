/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
var DefaultCustomerEditMetaController = /** @class */ (function () {
    function DefaultCustomerEditMetaController() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    DefaultCustomerEditMetaController.prototype.onDataUpdated = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data['tel']) {
            data['notOPUSTel'] = data['tel'].filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.DataSource && x.DataSource !== 'OPUS'; }));
        }
        console.log("Default controller onDataUpdated:", data);
    };
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    DefaultCustomerEditMetaController.prototype.onValueChange = /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    function (column, value, groupId, index, data, validationResult) {
        // if (column === 'Email') {
        //     let isEmail = this.isEmailFormat(value);
        //     if (!isEmail)
        //         validationResult.setErrorMap(column + index.toString(), 'Wrong_Email');
        //     else
        //         validationResult.deleteError(column + index.toString());
        // }
    };
    /**
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    DefaultCustomerEditMetaController.prototype.onValidateAll = /**
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    function (data, validationResult) {
        var _this = this;
        data['tel'] = data['tel'].filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.dataSource && x.dataSource === 'OPUS'; })).concat(data['notOPUSTel']);
        if (data['email'] && data['email'].length > 0) {
            data['email'].forEach((/**
             * @param {?} ele
             * @param {?} index
             * @return {?}
             */
            function (ele, index) {
                /** @type {?} */
                var isEmail = _this.isEmailFormat(ele.Email);
                if (!isEmail)
                    validationResult.setErrorMap('Email' + index.toString(), 'Wrong_Email');
                else
                    validationResult.deleteError('Email' + index.toString());
            }));
        }
        return validationResult.isTrue();
    };
    /**
     * @param {?} type
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    DefaultCustomerEditMetaController.prototype.btnClick = /**
     * @param {?} type
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    function (type, id, data) { };
    /**
     * @private
     * @param {?} email
     * @return {?}
     */
    DefaultCustomerEditMetaController.prototype.isEmailFormat = /**
     * @private
     * @param {?} email
     * @return {?}
     */
    function (email) {
        /** @type {?} */
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regexp.test(email);
    };
    DefaultCustomerEditMetaController.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */ DefaultCustomerEditMetaController.ngInjectableDef = i0.defineInjectable({ factory: function DefaultCustomerEditMetaController_Factory() { return new DefaultCustomerEditMetaController(); }, token: DefaultCustomerEditMetaController, providedIn: "root" });
    return DefaultCustomerEditMetaController;
}());
export { DefaultCustomerEditMetaController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdEN1c3RvbWVyRWRpdE1ldGFDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvY29tcG9uZW50cy9jdXN0b21lci1lZGl0L0RlZmF1bHRDdXN0b21lckVkaXRNZXRhQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFBQTtLQThDQzs7Ozs7SUF6Q0cseURBQWE7Ozs7SUFBYixVQUFjLElBQVM7UUFDbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLFVBQVUsS0FBSyxNQUFNLEVBQXZDLENBQXVDLEVBQUMsQ0FBQztTQUN6RjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7Ozs7OztJQUVELHlEQUFhOzs7Ozs7Ozs7SUFBYixVQUFjLE1BQWMsRUFBRSxLQUFVLEVBQUUsT0FBZSxFQUFFLEtBQWEsRUFBRSxJQUFTLEVBQUUsZ0JBQWtDO1FBQ25ILDRCQUE0QjtRQUM1QiwrQ0FBK0M7UUFDL0Msb0JBQW9CO1FBQ3BCLGtGQUFrRjtRQUNsRixXQUFXO1FBQ1gsbUVBQW1FO1FBQ25FLElBQUk7SUFDUixDQUFDOzs7Ozs7SUFFRCx5REFBYTs7Ozs7SUFBYixVQUFjLElBQVMsRUFBRSxnQkFBa0M7UUFBM0QsaUJBWUM7UUFYRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLFVBQVUsS0FBSyxNQUFNLEVBQXZDLENBQXVDLEVBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDMUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSzs7b0JBQ3pCLE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxPQUFPO29CQUNSLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDOztvQkFFeEUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNqRSxDQUFDLEVBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7O0lBRUQsb0RBQVE7Ozs7OztJQUFSLFVBQVMsSUFBWSxFQUFFLEVBQVUsRUFBRSxJQUFTLElBQUksQ0FBQzs7Ozs7O0lBR3pDLHlEQUFhOzs7OztJQUFyQixVQUFzQixLQUFLOztZQUNuQixNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsd0pBQXdKLENBQUM7UUFFakwsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQTNDSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7NENBTEQ7Q0FpREMsQUE5Q0QsSUE4Q0M7U0EzQ1ksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0YUNvbnRyb2xsZXIsIFZhbGlkYXRpb25SZXN1bHQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q3VzdG9tZXJFZGl0TWV0YUNvbnRyb2xsZXIgaW1wbGVtZW50cyBNZXRhQ29udHJvbGxlciB7XG5cbiAgICBvbkRhdGFVcGRhdGVkKGRhdGE6IGFueSkge1xuICAgICAgICBpZiAoZGF0YVsndGVsJ10pIHtcbiAgICAgICAgICAgIGRhdGFbJ25vdE9QVVNUZWwnXSA9IGRhdGFbJ3RlbCddLmZpbHRlcih4ID0+IHguRGF0YVNvdXJjZSAmJiB4LkRhdGFTb3VyY2UgIT09ICdPUFVTJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJEZWZhdWx0IGNvbnRyb2xsZXIgb25EYXRhVXBkYXRlZDpcIiwgZGF0YSk7XG4gICAgfVxuXG4gICAgb25WYWx1ZUNoYW5nZShjb2x1bW46IHN0cmluZywgdmFsdWU6IGFueSwgZ3JvdXBJZDogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBkYXRhOiBhbnksIHZhbGlkYXRpb25SZXN1bHQ6IFZhbGlkYXRpb25SZXN1bHQpIHtcbiAgICAgICAgLy8gaWYgKGNvbHVtbiA9PT0gJ0VtYWlsJykge1xuICAgICAgICAvLyAgICAgbGV0IGlzRW1haWwgPSB0aGlzLmlzRW1haWxGb3JtYXQodmFsdWUpO1xuICAgICAgICAvLyAgICAgaWYgKCFpc0VtYWlsKVxuICAgICAgICAvLyAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoY29sdW1uICsgaW5kZXgudG9TdHJpbmcoKSwgJ1dyb25nX0VtYWlsJyk7XG4gICAgICAgIC8vICAgICBlbHNlXG4gICAgICAgIC8vICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcihjb2x1bW4gKyBpbmRleC50b1N0cmluZygpKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIG9uVmFsaWRhdGVBbGwoZGF0YTogYW55LCB2YWxpZGF0aW9uUmVzdWx0OiBWYWxpZGF0aW9uUmVzdWx0KSB7XG4gICAgICAgIGRhdGFbJ3RlbCddID0gZGF0YVsndGVsJ10uZmlsdGVyKHggPT4geC5kYXRhU291cmNlICYmIHguZGF0YVNvdXJjZSA9PT0gJ09QVVMnKS5jb25jYXQoZGF0YVsnbm90T1BVU1RlbCddKTtcbiAgICAgICAgaWYgKGRhdGFbJ2VtYWlsJ10gJiYgZGF0YVsnZW1haWwnXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkYXRhWydlbWFpbCddLmZvckVhY2goKGVsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXNFbWFpbCA9IHRoaXMuaXNFbWFpbEZvcm1hdChlbGUuRW1haWwpO1xuICAgICAgICAgICAgICAgIGlmICghaXNFbWFpbClcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnRW1haWwnICsgaW5kZXgudG9TdHJpbmcoKSwgJ1dyb25nX0VtYWlsJyk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0LmRlbGV0ZUVycm9yKCdFbWFpbCcgKyBpbmRleC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9uUmVzdWx0LmlzVHJ1ZSgpO1xuICAgIH1cblxuICAgIGJ0bkNsaWNrKHR5cGU6IHN0cmluZywgaWQ6IHN0cmluZywgZGF0YTogYW55KSB7IH1cblxuXG4gICAgcHJpdmF0ZSBpc0VtYWlsRm9ybWF0KGVtYWlsKSB7XG4gICAgICAgIGxldCByZWdleHAgPSBuZXcgUmVnRXhwKC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvKTtcblxuICAgICAgICByZXR1cm4gcmVnZXhwLnRlc3QoZW1haWwpO1xuICAgIH1cblxuXG59Il19