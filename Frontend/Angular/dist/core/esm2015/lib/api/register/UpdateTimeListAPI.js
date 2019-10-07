/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '../../device/sqlite/ClientCustomDao';
export class UpdateTimeListAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getUpdateTimeList';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return "./assets/mock/getUpdateTimeList.json";
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
            let dataSyncObj = this._DaoFactory.getTable('Profile', "TW_LH_SD_VW_FuncSync_Time");
            /** @type {?} */
            let dao = this._DaoFactory.getDao('Profile');
            if (dataSyncObj != undefined && dao != undefined) {
                dataSyncObj = ((/** @type {?} */ (dataSyncObj)));
                dao = new ClientCustomDao(dao);
                dao.queryByTable(dataSyncObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
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
    UpdateTimeListAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlVGltZUxpc3RBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9VcGRhdGVUaW1lTGlzdEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU1sQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFdEUsTUFBTTs7OztJQUVKLFlBQVksVUFBVTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLHNDQUFzQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFHRCxVQUFVO1FBQ1IsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7O2dCQUNoQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLDJCQUEyQixDQUFDOztnQkFDL0UsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUM1QyxJQUFJLFdBQVcsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtnQkFDaEQsV0FBVyxHQUFHLENBQUMsbUJBQWEsV0FBVyxFQUFBLENBQUMsQ0FBQztnQkFDekMsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDL0MsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7Ozs7SUEvQkMsd0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4uL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tICcuLi9Nb2NrQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSAnLi4vU1FMaXRlQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5JztcbmltcG9ydCB7IFNRTGl0ZVRhYmxlIH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9TUUxpdGVUYWJsZSc7XG5pbXBvcnQgeyBDbGllbnRDdXN0b21EYW8gfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlL0NsaWVudEN1c3RvbURhbyc7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVUaW1lTGlzdEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcbiAgcHJpdmF0ZSBfRGFvRmFjdG9yeTogRGFvRmFjdG9yeTtcbiAgY29uc3RydWN0b3IoRGFvRmFjdG9yeSkge1xuICAgIHRoaXMuX0Rhb0ZhY3RvcnkgPSBEYW9GYWN0b3J5O1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnZ2V0VXBkYXRlVGltZUxpc3QnO1xuICB9XG5cbiAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCIuL2Fzc2V0cy9tb2NrL2dldFVwZGF0ZVRpbWVMaXN0Lmpzb25cIjtcbiAgfVxuXG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBkYXRhU3luY09iaiA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0VGFibGUoJ1Byb2ZpbGUnLCBcIlRXX0xIX1NEX1ZXX0Z1bmNTeW5jX1RpbWVcIik7XG4gICAgICBsZXQgZGFvID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREYW8oJ1Byb2ZpbGUnKTtcbiAgICAgIGlmIChkYXRhU3luY09iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBkYXRhU3luY09iaiA9ICg8U1FMaXRlVGFibGU+ZGF0YVN5bmNPYmopO1xuICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG4gICAgICAgIGRhby5xdWVyeUJ5VGFibGUoZGF0YVN5bmNPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19