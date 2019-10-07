/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContactsSearchAPI = /** @class */ (function () {
    function ContactsSearchAPI(deviceFactory) {
        this.deviceFactory = deviceFactory;
    }
    /**
     * @return {?}
     */
    ContactsSearchAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'contactsSearch';
    };
    /**
     * @return {?}
     */
    ContactsSearchAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getImportContact.json';
    };
    /**
     * @return {?}
     */
    ContactsSearchAPI.prototype.runDeviceAPI = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dao = this.deviceFactory.getDefaultDao();
        return dao.searchcontactsByName('');
    };
    return ContactsSearchAPI;
}());
export { ContactsSearchAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ContactsSearchAPI.prototype.deviceFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdHNTZWFyY2hBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9Db250YWN0c1NlYXJjaEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBT0E7SUFFSSwyQkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFFaEQsQ0FBQzs7OztJQUVELHNDQUFVOzs7SUFBVjtRQUNJLE9BQU8sZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNJLE9BQU8scUNBQXFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELHdDQUFZOzs7SUFBWjs7WUFDUSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUU7UUFDNUMsT0FBTyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQzs7Ozs7OztJQWpCZSwwQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIi4uL0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIi4uL01vY2tBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJRGV2aWNlQVBJIH0gZnJvbSBcIi4uL0RldmljZUFQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgRGV2aWNlRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9kZXZpY2UvRGV2aWNlRmFjdG9yeVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBDb250YWN0c1NlYXJjaEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJRGV2aWNlQVBJIHtcbiAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlRmFjdG9yeTogRGV2aWNlRmFjdG9yeSl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdjb250YWN0c1NlYXJjaCc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldEltcG9ydENvbnRhY3QuanNvbic7XG4gICAgfVxuXG4gICAgcnVuRGV2aWNlQVBJKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGxldCBkYW8gPSB0aGlzLmRldmljZUZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICByZXR1cm4gZGFvLnNlYXJjaGNvbnRhY3RzQnlOYW1lKCcnKTtcbiAgICB9XG5cbn0iXX0=