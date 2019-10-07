/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class DefaultCustomerEditMetaController {
    /**
     * @param {?} data
     * @return {?}
     */
    onDataUpdated(data) {
        if (data['tel']) {
            data['notOPUSTel'] = data['tel'].filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.DataSource && x.DataSource !== 'OPUS'));
        }
        console.log("Default controller onDataUpdated:", data);
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    onValueChange(column, value, groupId, index, data, validationResult) {
        // if (column === 'Email') {
        //     let isEmail = this.isEmailFormat(value);
        //     if (!isEmail)
        //         validationResult.setErrorMap(column + index.toString(), 'Wrong_Email');
        //     else
        //         validationResult.deleteError(column + index.toString());
        // }
    }
    /**
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    onValidateAll(data, validationResult) {
        data['tel'] = data['tel'].filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.dataSource && x.dataSource === 'OPUS')).concat(data['notOPUSTel']);
        if (data['email'] && data['email'].length > 0) {
            data['email'].forEach((/**
             * @param {?} ele
             * @param {?} index
             * @return {?}
             */
            (ele, index) => {
                /** @type {?} */
                let isEmail = this.isEmailFormat(ele.Email);
                if (!isEmail)
                    validationResult.setErrorMap('Email' + index.toString(), 'Wrong_Email');
                else
                    validationResult.deleteError('Email' + index.toString());
            }));
        }
        return validationResult.isTrue();
    }
    /**
     * @param {?} type
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    btnClick(type, id, data) { }
    /**
     * @private
     * @param {?} email
     * @return {?}
     */
    isEmailFormat(email) {
        /** @type {?} */
        let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regexp.test(email);
    }
}
DefaultCustomerEditMetaController.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */ DefaultCustomerEditMetaController.ngInjectableDef = i0.defineInjectable({ factory: function DefaultCustomerEditMetaController_Factory() { return new DefaultCustomerEditMetaController(); }, token: DefaultCustomerEditMetaController, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdEN1c3RvbWVyRWRpdE1ldGFDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvY29tcG9uZW50cy9jdXN0b21lci1lZGl0L0RlZmF1bHRDdXN0b21lckVkaXRNZXRhQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTTs7Ozs7SUFFRixhQUFhLENBQUMsSUFBUztRQUNuQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsVUFBVSxLQUFLLE1BQU0sRUFBQyxDQUFDO1NBQ3pGO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQWMsRUFBRSxLQUFVLEVBQUUsT0FBZSxFQUFFLEtBQWEsRUFBRSxJQUFTLEVBQUUsZ0JBQWtDO1FBQ25ILDRCQUE0QjtRQUM1QiwrQ0FBK0M7UUFDL0Msb0JBQW9CO1FBQ3BCLGtGQUFrRjtRQUNsRixXQUFXO1FBQ1gsbUVBQW1FO1FBQ25FLElBQUk7SUFDUixDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBUyxFQUFFLGdCQUFrQztRQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLFVBQVUsS0FBSyxNQUFNLEVBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDMUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7O1lBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7O29CQUM3QixPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsT0FBTztvQkFDUixnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQzs7b0JBRXhFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDakUsQ0FBQyxFQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Ozs7OztJQUVELFFBQVEsQ0FBQyxJQUFZLEVBQUUsRUFBVSxFQUFFLElBQVMsSUFBSSxDQUFDOzs7Ozs7SUFHekMsYUFBYSxDQUFDLEtBQUs7O1lBQ25CLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyx3SkFBd0osQ0FBQztRQUVqTCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBM0NKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGFDb250cm9sbGVyLCBWYWxpZGF0aW9uUmVzdWx0IH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEN1c3RvbWVyRWRpdE1ldGFDb250cm9sbGVyIGltcGxlbWVudHMgTWV0YUNvbnRyb2xsZXIge1xuXG4gICAgb25EYXRhVXBkYXRlZChkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYgKGRhdGFbJ3RlbCddKSB7XG4gICAgICAgICAgICBkYXRhWydub3RPUFVTVGVsJ10gPSBkYXRhWyd0ZWwnXS5maWx0ZXIoeCA9PiB4LkRhdGFTb3VyY2UgJiYgeC5EYXRhU291cmNlICE9PSAnT1BVUycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVmYXVsdCBjb250cm9sbGVyIG9uRGF0YVVwZGF0ZWQ6XCIsIGRhdGEpO1xuICAgIH1cblxuICAgIG9uVmFsdWVDaGFuZ2UoY29sdW1uOiBzdHJpbmcsIHZhbHVlOiBhbnksIGdyb3VwSWQ6IHN0cmluZywgaW5kZXg6IG51bWJlciwgZGF0YTogYW55LCB2YWxpZGF0aW9uUmVzdWx0OiBWYWxpZGF0aW9uUmVzdWx0KSB7XG4gICAgICAgIC8vIGlmIChjb2x1bW4gPT09ICdFbWFpbCcpIHtcbiAgICAgICAgLy8gICAgIGxldCBpc0VtYWlsID0gdGhpcy5pc0VtYWlsRm9ybWF0KHZhbHVlKTtcbiAgICAgICAgLy8gICAgIGlmICghaXNFbWFpbClcbiAgICAgICAgLy8gICAgICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKGNvbHVtbiArIGluZGV4LnRvU3RyaW5nKCksICdXcm9uZ19FbWFpbCcpO1xuICAgICAgICAvLyAgICAgZWxzZVxuICAgICAgICAvLyAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuZGVsZXRlRXJyb3IoY29sdW1uICsgaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBvblZhbGlkYXRlQWxsKGRhdGE6IGFueSwgdmFsaWRhdGlvblJlc3VsdDogVmFsaWRhdGlvblJlc3VsdCkge1xuICAgICAgICBkYXRhWyd0ZWwnXSA9IGRhdGFbJ3RlbCddLmZpbHRlcih4ID0+IHguZGF0YVNvdXJjZSAmJiB4LmRhdGFTb3VyY2UgPT09ICdPUFVTJykuY29uY2F0KGRhdGFbJ25vdE9QVVNUZWwnXSk7XG4gICAgICAgIGlmIChkYXRhWydlbWFpbCddICYmIGRhdGFbJ2VtYWlsJ10ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGF0YVsnZW1haWwnXS5mb3JFYWNoKChlbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGlzRW1haWwgPSB0aGlzLmlzRW1haWxGb3JtYXQoZWxlLkVtYWlsKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzRW1haWwpXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ0VtYWlsJyArIGluZGV4LnRvU3RyaW5nKCksICdXcm9uZ19FbWFpbCcpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcignRW1haWwnICsgaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvblJlc3VsdC5pc1RydWUoKTtcbiAgICB9XG5cbiAgICBidG5DbGljayh0eXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcsIGRhdGE6IGFueSkgeyB9XG5cblxuICAgIHByaXZhdGUgaXNFbWFpbEZvcm1hdChlbWFpbCkge1xuICAgICAgICBsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyk7XG5cbiAgICAgICAgcmV0dXJuIHJlZ2V4cC50ZXN0KGVtYWlsKTtcbiAgICB9XG5cblxufSJdfQ==