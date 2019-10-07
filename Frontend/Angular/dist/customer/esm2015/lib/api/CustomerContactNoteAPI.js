/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction, OrderByRestriction, LimitRestriction, OffsetRestriction } from "@allianzSND/core";
import { Observable } from "rxjs";
export class CustomerContactNoteAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    setClientID(id) {
        this.customerClientID = id;
    }
    /**
     * @param {?} pageInfo
     * @return {?}
     */
    setPageInfo(pageInfo) {
        this.pageInfo = pageInfo;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCustomerContactNote';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCustomerContactNote.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let contactObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (contactObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                contactObj.addRestriction(new EqualRestriction('CustomerClientID', [this.customerClientID]));
                contactObj.addRestriction(new OrderByRestriction([{ column: 'NoteTime', order: 'DESC' }]));
                //add page limit
                contactObj.addRestriction(new LimitRestriction([this.pageInfo.pageSize]));
                contactObj.addRestriction(new OffsetRestriction([(this.pageInfo.page - 1) * 5]));
                console.debug(contactObj);
                dao.queryByTable(contactObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    console.debug(resp);
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerContactNoteAPI.prototype.customerClientID;
    /**
     * @type {?}
     * @private
     */
    CustomerContactNoteAPI.prototype.pageInfo;
    /**
     * @type {?}
     * @private
     */
    CustomerContactNoteAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJDb250YWN0Tm90ZUFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2FwaS9DdXN0b21lckNvbnRhY3ROb3RlQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXdDLGVBQWUsRUFBYyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hMLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsTUFBTTs7OztJQUtKLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFFMUMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsRUFBVztRQUNuQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQW1CO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8sMkNBQTJDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs7Z0JBQ2hDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQzs7Z0JBQ3pFLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN6QyxJQUFJLFVBQVUsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtnQkFFL0MsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUUvQixVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVGLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBRTFGLGdCQUFnQjtnQkFDaEIsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFFLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVqRixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMxQixHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDOUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7Ozs7SUFsREMsa0RBQWtDOzs7OztJQUNsQywwQ0FBNEI7Ozs7O0lBRWhCLDRDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VJbmZvLCBJQVBJLCBJTW9ja0FQSSwgRGFvRmFjdG9yeSwgQ2xpZW50Q3VzdG9tRGFvLCBJU1FMaXRlQVBJLCBFcXVhbFJlc3RyaWN0aW9uLCBPcmRlckJ5UmVzdHJpY3Rpb24sIExpbWl0UmVzdHJpY3Rpb24sIE9mZnNldFJlc3RyaWN0aW9uIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJDb250YWN0Tm90ZUFQSSBpbXBsZW1lbnRzIElBUEkgLCBJTW9ja0FQSSAsIElTUUxpdGVBUEkge1xuXG4gIHByaXZhdGUgY3VzdG9tZXJDbGllbnRJRDogIHN0cmluZztcbiAgcHJpdmF0ZSBwYWdlSW5mbyA6IFBhZ2VJbmZvO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gIH1cblxuICBzZXRDbGllbnRJRChpZCA6IHN0cmluZykge1xuICAgICAgdGhpcy5jdXN0b21lckNsaWVudElEID0gaWQ7XG4gIH1cblxuICBzZXRQYWdlSW5mbyhwYWdlSW5mbyA6IFBhZ2VJbmZvKSB7XG4gICAgdGhpcy5wYWdlSW5mbyA9IHBhZ2VJbmZvO1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpIDogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnZ2V0Q3VzdG9tZXJDb250YWN0Tm90ZSc7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpIDogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRDdXN0b21lckNvbnRhY3ROb3RlLmpzb24nO1xuICB9XG4gIFxuICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGNvbnRhY3RPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfQ29udGFjdFwiKTtcbiAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgaWYgKGNvbnRhY3RPYmogIT0gdW5kZWZpbmVkICYmIGRhbyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgXG4gICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcblxuICAgICAgICBjb250YWN0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJyxbdGhpcy5jdXN0b21lckNsaWVudElEXSkpO1xuICAgICAgICBjb250YWN0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBPcmRlckJ5UmVzdHJpY3Rpb24oW3sgY29sdW1uOiAnTm90ZVRpbWUnLCBvcmRlcjogJ0RFU0MnIH1dKSlcblxuICAgICAgICAvL2FkZCBwYWdlIGxpbWl0XG4gICAgICAgIGNvbnRhY3RPYmouYWRkUmVzdHJpY3Rpb24obmV3IExpbWl0UmVzdHJpY3Rpb24oW3RoaXMucGFnZUluZm8ucGFnZVNpemVdKSk7XG4gICAgICAgIGNvbnRhY3RPYmouYWRkUmVzdHJpY3Rpb24obmV3IE9mZnNldFJlc3RyaWN0aW9uKFsodGhpcy5wYWdlSW5mby5wYWdlIC0gMSkgKiA1XSkpO1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoY29udGFjdE9iaik7XG4gICAgICAgIGRhby5xdWVyeUJ5VGFibGUoY29udGFjdE9iaikuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhyZXNwKTtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=