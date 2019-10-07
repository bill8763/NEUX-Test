/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction, TableUtils, SQLiteResponse } from "@allianzSND/core";
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';
var CustomerAddContactNoteAPI = /** @class */ (function () {
    function CustomerAddContactNoteAPI(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @return {?}
     */
    CustomerAddContactNoteAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'addCustomerContactNote';
    };
    /**
     * @return {?}
     */
    CustomerAddContactNoteAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/saveSuccess.json';
    };
    /**
     * @return {?}
     */
    CustomerAddContactNoteAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.debug("addCustomerContactNote API Data:", this.Data);
        // If empty, don't save 
        if (!this.Data.Note) {
            return of(new SQLiteResponse({
                status: true
            }, []));
        }
        else {
            return Observable.create((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                /** @type {?} */
                var contactObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact");
                /** @type {?} */
                var contactExtObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact_Extension");
                /** @type {?} */
                var dao = _this.daoFactory.getDefaultDao();
                if (contactObj != undefined && dao != undefined) {
                    dao = new ClientCustomDao(dao);
                    contactObj.setValue('CustomerClientID', _this.Data.CustomerClientID);
                    contactObj.setValue('Note', _this.Data.Note);
                    contactObj.setValue('NoteTime', _this.Data.NoteTime);
                    contactExtObj = TableUtils.fillTableColumn(contactExtObj, _this.Data);
                    contactExtObj.setValue('CustomerClientID', _this.Data.CustomerClientID);
                    if (_this.Data.ClientID != undefined && _this.Data.ClientID != '') {
                        contactObj.addRestriction(new EqualRestriction('ClientID', [_this.Data.ClientID]));
                        contactExtObj.addRestriction(new EqualRestriction('ClientID', [_this.Data.ClientID]));
                        dao.transactionUpdate(contactObj);
                        dao.transactionUpdate(contactExtObj);
                    }
                    else {
                        /** @type {?} */
                        var clientID = uuid();
                        contactObj.setValue('ClientID', clientID);
                        contactExtObj.setValue('ClientID', clientID);
                        dao.transactionInsert(contactObj);
                        dao.transactionInsert(contactExtObj);
                    }
                    dao.runTransaction().subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
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
    };
    return CustomerAddContactNoteAPI;
}());
export { CustomerAddContactNoteAPI };
if (false) {
    /** @type {?} */
    CustomerAddContactNoteAPI.prototype.Data;
    /**
     * @type {?}
     * @private
     */
    CustomerAddContactNoteAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJBZGRDb250YWN0Tm90ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2FwaS9DdXN0b21lckFkZENvbnRhY3ROb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQThCLGVBQWUsRUFBYyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekksT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEM7SUFHRSxtQ0FBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUUxQyxDQUFDOzs7O0lBR0QsOENBQVU7OztJQUFWO1FBQ0UsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0UsT0FBTyxnQ0FBZ0MsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsOENBQVU7OztJQUFWO1FBQUEsaUJBb0RDO1FBbkRDLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELHdCQUF3QjtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDbkIsT0FBTyxFQUFFLENBQUMsSUFBSSxjQUFjLENBQUM7Z0JBQzNCLE1BQU0sRUFBRSxJQUFJO2FBQ2IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7YUFDSTtZQUNILE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7WUFBQyxVQUFDLFFBQVE7O29CQUM1QixVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLENBQUM7O29CQUN6RSxhQUFhLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMscUNBQXFDLENBQUM7O29CQUN0RixHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3pDLElBQUksVUFBVSxJQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFO29CQUUvQyxHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRS9CLFVBQVUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNwRSxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUVwRCxhQUFhLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyRSxhQUFhLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFFdkUsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFO3dCQUMvRCxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xGLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFckYsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUNsQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7cUJBQ3RDO3lCQUNJOzs0QkFDQyxRQUFRLEdBQUcsSUFBSSxFQUFFO3dCQUNyQixVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDMUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBRTdDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDbEMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUN0QztvQkFFRCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUzs7OztvQkFBQyxVQUFBLElBQUk7d0JBQ2pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQyxFQUFDLENBQUE7aUJBR0g7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNyQjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDOzs7O0lBcEVDLHlDQUFpQjs7Ozs7SUFFTCwrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJLCBJTW9ja0FQSSwgRGFvRmFjdG9yeSwgQ2xpZW50Q3VzdG9tRGFvLCBJU1FMaXRlQVBJLCBFcXVhbFJlc3RyaWN0aW9uLCBUYWJsZVV0aWxzLCBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lckFkZENvbnRhY3ROb3RlQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuICBwdWJsaWMgRGF0YTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gIH1cblxuXG4gIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2FkZEN1c3RvbWVyQ29udGFjdE5vdGUnO1xuICB9XG5cbiAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svc2F2ZVN1Y2Nlc3MuanNvbic7XG4gIH1cblxuICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5kZWJ1ZyhcImFkZEN1c3RvbWVyQ29udGFjdE5vdGUgQVBJIERhdGE6XCIsIHRoaXMuRGF0YSk7XG4gICAgLy8gSWYgZW1wdHksIGRvbid0IHNhdmUgXG4gICAgaWYgKCF0aGlzLkRhdGEuTm90ZSkge1xuICAgICAgcmV0dXJuIG9mKG5ldyBTUUxpdGVSZXNwb25zZSh7XG4gICAgICAgIHN0YXR1czogdHJ1ZVxuICAgICAgfSwgW10pKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgIGxldCBjb250YWN0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0NvbnRhY3RcIik7XG4gICAgICAgIGxldCBjb250YWN0RXh0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0NvbnRhY3RfRXh0ZW5zaW9uXCIpO1xuICAgICAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgaWYgKGNvbnRhY3RPYmogIT0gdW5kZWZpbmVkICYmIGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcblxuICAgICAgICAgIGNvbnRhY3RPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCB0aGlzLkRhdGEuQ3VzdG9tZXJDbGllbnRJRCk7XG4gICAgICAgICAgY29udGFjdE9iai5zZXRWYWx1ZSgnTm90ZScsIHRoaXMuRGF0YS5Ob3RlKTtcbiAgICAgICAgICBjb250YWN0T2JqLnNldFZhbHVlKCdOb3RlVGltZScsIHRoaXMuRGF0YS5Ob3RlVGltZSk7XG5cbiAgICAgICAgICBjb250YWN0RXh0T2JqID0gVGFibGVVdGlscy5maWxsVGFibGVDb2x1bW4oY29udGFjdEV4dE9iaiwgdGhpcy5EYXRhKTtcbiAgICAgICAgICBjb250YWN0RXh0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgdGhpcy5EYXRhLkN1c3RvbWVyQ2xpZW50SUQpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuRGF0YS5DbGllbnRJRCAhPSB1bmRlZmluZWQgJiYgdGhpcy5EYXRhLkNsaWVudElEICE9ICcnKSB7XG4gICAgICAgICAgICBjb250YWN0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDbGllbnRJRCcsIFt0aGlzLkRhdGEuQ2xpZW50SURdKSk7XG4gICAgICAgICAgICBjb250YWN0RXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDbGllbnRJRCcsIFt0aGlzLkRhdGEuQ2xpZW50SURdKSk7XG5cbiAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShjb250YWN0T2JqKTtcbiAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShjb250YWN0RXh0T2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgICAgICBjb250YWN0T2JqLnNldFZhbHVlKCdDbGllbnRJRCcsIGNsaWVudElEKTtcbiAgICAgICAgICAgIGNvbnRhY3RFeHRPYmouc2V0VmFsdWUoJ0NsaWVudElEJywgY2xpZW50SUQpO1xuXG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoY29udGFjdE9iaik7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoY29udGFjdEV4dE9iaik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGFvLnJ1blRyYW5zYWN0aW9uKCkuc3Vic2NyaWJlKHJlc3AgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSlcblxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=