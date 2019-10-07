/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ContactsSearchAPI {
    /**
     * @param {?} deviceFactory
     */
    constructor(deviceFactory) {
        this.deviceFactory = deviceFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'contactsSearch';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getImportContact.json';
    }
    /**
     * @return {?}
     */
    runDeviceAPI() {
        /** @type {?} */
        let dao = this.deviceFactory.getDefaultDao();
        return dao.searchcontactsByName('');
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ContactsSearchAPI.prototype.deviceFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdHNTZWFyY2hBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9Db250YWN0c1NlYXJjaEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBT0EsTUFBTTs7OztJQUVGLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBRWhELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8scUNBQXFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELFlBQVk7O1lBQ0osR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFO1FBQzVDLE9BQU8sR0FBRyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FFSjs7Ozs7O0lBakJlLDBDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tIFwiLi4vQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiLi4vTW9ja0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElEZXZpY2VBUEkgfSBmcm9tIFwiLi4vRGV2aWNlQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBEZXZpY2VGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2RldmljZS9EZXZpY2VGYWN0b3J5XCI7XG5cblxuZXhwb3J0IGNsYXNzIENvbnRhY3RzU2VhcmNoQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElEZXZpY2VBUEkge1xuICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXZpY2VGYWN0b3J5OiBEZXZpY2VGYWN0b3J5KXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2NvbnRhY3RzU2VhcmNoJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0SW1wb3J0Q29udGFjdC5qc29uJztcbiAgICB9XG5cbiAgICBydW5EZXZpY2VBUEkoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuZGV2aWNlRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIHJldHVybiBkYW8uc2VhcmNoY29udGFjdHNCeU5hbWUoJycpO1xuICAgIH1cblxufSJdfQ==