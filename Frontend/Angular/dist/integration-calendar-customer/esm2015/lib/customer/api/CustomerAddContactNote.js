/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction, TableUtils, SQLiteResponse } from "@allianzSND/core";
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';
export class CustomerAddContactNoteAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'addCustomerContactNote';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/saveSuccess.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
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
            (observer) => {
                /** @type {?} */
                let contactObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact");
                /** @type {?} */
                let contactExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact_Extension");
                /** @type {?} */
                let dao = this.daoFactory.getDefaultDao();
                if (contactObj != undefined && dao != undefined) {
                    dao = new ClientCustomDao(dao);
                    contactObj.setValue('CustomerClientID', this.Data.CustomerClientID);
                    contactObj.setValue('Note', this.Data.Note);
                    contactObj.setValue('NoteTime', this.Data.NoteTime);
                    contactExtObj = TableUtils.fillTableColumn(contactExtObj, this.Data);
                    contactExtObj.setValue('CustomerClientID', this.Data.CustomerClientID);
                    if (this.Data.ClientID != undefined && this.Data.ClientID != '') {
                        contactObj.addRestriction(new EqualRestriction('ClientID', [this.Data.ClientID]));
                        contactExtObj.addRestriction(new EqualRestriction('ClientID', [this.Data.ClientID]));
                        dao.transactionUpdate(contactObj);
                        dao.transactionUpdate(contactExtObj);
                    }
                    else {
                        /** @type {?} */
                        let clientID = uuid();
                        contactObj.setValue('ClientID', clientID);
                        contactExtObj.setValue('ClientID', clientID);
                        dao.transactionInsert(contactObj);
                        dao.transactionInsert(contactExtObj);
                    }
                    dao.runTransaction().subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    resp => {
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
}
if (false) {
    /** @type {?} */
    CustomerAddContactNoteAPI.prototype.Data;
    /**
     * @type {?}
     * @private
     */
    CustomerAddContactNoteAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJBZGRDb250YWN0Tm90ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2FwaS9DdXN0b21lckFkZENvbnRhY3ROb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQThCLGVBQWUsRUFBYyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekksT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsTUFBTTs7OztJQUdKLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFFMUMsQ0FBQzs7OztJQUdELFVBQVU7UUFDUixPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxnQ0FBZ0MsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELHdCQUF3QjtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDbkIsT0FBTyxFQUFFLENBQUMsSUFBSSxjQUFjLENBQUM7Z0JBQzNCLE1BQU0sRUFBRSxJQUFJO2FBQ2IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7YUFDSTtZQUNILE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFOztvQkFDaEMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLDJCQUEyQixDQUFDOztvQkFDekUsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLHFDQUFxQyxDQUFDOztvQkFDdEYsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO2dCQUN6QyxJQUFJLFVBQVUsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtvQkFFL0MsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUUvQixVQUFVLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDcEUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFcEQsYUFBYSxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBRXZFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRTt3QkFDL0QsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsRixhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRXJGLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDbEMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUN0Qzt5QkFDSTs7NEJBQ0MsUUFBUSxHQUFHLElBQUksRUFBRTt3QkFDckIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQzFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3dCQUU3QyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ2xDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztxQkFDdEM7b0JBRUQsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVM7Ozs7b0JBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQyxFQUFDLENBQUE7aUJBR0g7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNyQjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQ0Y7OztJQXBFQyx5Q0FBaUI7Ozs7O0lBRUwsK0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSwgSU1vY2tBUEksIERhb0ZhY3RvcnksIENsaWVudEN1c3RvbURhbywgSVNRTGl0ZUFQSSwgRXF1YWxSZXN0cmljdGlvbiwgVGFibGVVdGlscywgU1FMaXRlUmVzcG9uc2UgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcblxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJBZGRDb250YWN0Tm90ZUFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcbiAgcHVibGljIERhdGE6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICB9XG5cblxuICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdhZGRDdXN0b21lckNvbnRhY3ROb3RlJztcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL3NhdmVTdWNjZXNzLmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUuZGVidWcoXCJhZGRDdXN0b21lckNvbnRhY3ROb3RlIEFQSSBEYXRhOlwiLCB0aGlzLkRhdGEpO1xuICAgIC8vIElmIGVtcHR5LCBkb24ndCBzYXZlIFxuICAgIGlmICghdGhpcy5EYXRhLk5vdGUpIHtcbiAgICAgIHJldHVybiBvZihuZXcgU1FMaXRlUmVzcG9uc2Uoe1xuICAgICAgICBzdGF0dXM6IHRydWVcbiAgICAgIH0sIFtdKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICBsZXQgY29udGFjdE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9Db250YWN0XCIpO1xuICAgICAgICBsZXQgY29udGFjdEV4dE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9Db250YWN0X0V4dGVuc2lvblwiKTtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGlmIChjb250YWN0T2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cbiAgICAgICAgICBjb250YWN0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgdGhpcy5EYXRhLkN1c3RvbWVyQ2xpZW50SUQpO1xuICAgICAgICAgIGNvbnRhY3RPYmouc2V0VmFsdWUoJ05vdGUnLCB0aGlzLkRhdGEuTm90ZSk7XG4gICAgICAgICAgY29udGFjdE9iai5zZXRWYWx1ZSgnTm90ZVRpbWUnLCB0aGlzLkRhdGEuTm90ZVRpbWUpO1xuXG4gICAgICAgICAgY29udGFjdEV4dE9iaiA9IFRhYmxlVXRpbHMuZmlsbFRhYmxlQ29sdW1uKGNvbnRhY3RFeHRPYmosIHRoaXMuRGF0YSk7XG4gICAgICAgICAgY29udGFjdEV4dE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIHRoaXMuRGF0YS5DdXN0b21lckNsaWVudElEKTtcblxuICAgICAgICAgIGlmICh0aGlzLkRhdGEuQ2xpZW50SUQgIT0gdW5kZWZpbmVkICYmIHRoaXMuRGF0YS5DbGllbnRJRCAhPSAnJykge1xuICAgICAgICAgICAgY29udGFjdE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLCBbdGhpcy5EYXRhLkNsaWVudElEXSkpO1xuICAgICAgICAgICAgY29udGFjdEV4dE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLCBbdGhpcy5EYXRhLkNsaWVudElEXSkpO1xuXG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25VcGRhdGUoY29udGFjdE9iaik7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25VcGRhdGUoY29udGFjdEV4dE9iaik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNsaWVudElEID0gdXVpZCgpO1xuICAgICAgICAgICAgY29udGFjdE9iai5zZXRWYWx1ZSgnQ2xpZW50SUQnLCBjbGllbnRJRCk7XG4gICAgICAgICAgICBjb250YWN0RXh0T2JqLnNldFZhbHVlKCdDbGllbnRJRCcsIGNsaWVudElEKTtcblxuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGNvbnRhY3RPYmopO1xuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGNvbnRhY3RFeHRPYmopO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhby5ydW5UcmFuc2FjdGlvbigpLnN1YnNjcmliZShyZXNwID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0pXG5cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19