/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Optional } from '@angular/core';
import { DaoFactory } from '../../device/sqlite/DaoFactory';
import { Location } from '@angular/common';
import { ClientCustomDao } from '../../device/sqlite/ClientCustomDao';
export class SqliteExecutorComponent {
    /**
     * @param {?} daoFactory
     * @param {?} _location
     */
    constructor(daoFactory, _location) {
        this.daoFactory = daoFactory;
        this._location = _location;
        this.isHasData = false;
        this.recordLength = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let selectOption = [];
        for (let item in DATABASE_TABLES) {
            if (isNaN(Number(item))) {
                console.log('value:', item, '  name:', DATABASE_TABLES[item]);
                selectOption.push(new SelectOption(item, DATABASE_TABLES[item]));
            }
        }
        this.selectTablesOptionList = selectOption;
        this.selectTableChange(this.selectTablesOptionList[0].getValue());
    }
    /**
     * @return {?}
     */
    goToLastPage() {
        this._location.back();
    }
    /**
     * @return {?}
     */
    refresh() {
        this.queryBytable(this.currentDbName, this.currentTable);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectTableChange(event) {
        console.log("selectTableKey: ", event);
        this.selectTable = event;
        this.currentTable = DATABASE_TABLES[event];
        console.log("selectTable: ", this.selectTable);
        if (event.substring(0, 7) == 'Profile') {
            this.currentDbName = 'Profile';
            this.queryBytable(this.currentDbName, this.currentTable);
        }
        else {
            this.currentDbName = 'Main';
            this.queryBytable(this.currentDbName, this.currentTable);
        }
    }
    /**
     * @param {?} dbName
     * @param {?} tableName
     * @return {?}
     */
    queryBytable(dbName, tableName) {
        console.log("dbName: ", dbName, " tableName: ", tableName);
        /** @type {?} */
        let dao;
        /** @type {?} */
        let tableObj;
        dao = this.daoFactory.getDao(dbName);
        dao = new ClientCustomDao(dao);
        tableObj = this.daoFactory.getTable(dbName, tableName);
        this.tableColumns = tableObj.getColumns().map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getName()));
        console.log("dao: ", dao);
        console.log("tableObj: ", tableObj);
        dao.queryByTable(tableObj).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            console.log("response data: ", data);
            if (data.Header['status']) {
                this.recordLength = data.Header['record_length'];
                this.responseBody = data.Body;
                console.log("responseBody: ", this.responseBody);
                this.responseBody.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                element => {
                    // console.log("element key: ", Object.keys(element));
                    // console.log("element values: ", Object.values(element));
                    console.log("element: ", element);
                    element.values = Object.values(element);
                }));
                this.isHasData = true;
            }
            else {
                this.isHasData = false;
                alert("fail");
            }
            console.log("Sqlite data: ", data);
        }));
    }
}
SqliteExecutorComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-sqlite-executor',
                template: "<div class=\"layout-full-page\">\n  <input type=\"button\" value=\"back\" (click)=\"goToLastPage()\">\n  <select form=\"carform\" [ngModel]=\"selectTable\" (ngModelChange)=\"selectTableChange($event)\">\n    <ng-container *ngFor=\"let tableOption of selectTablesOptionList\">\n        <option [value]=\"tableOption.getValue()\">{{tableOption.getName()}}</option>\n    </ng-container>\n  </select>\n  <input type=\"button\" value=\"refresh\" (click)=\"refresh()\">\n  <ng-container *ngIf=\"isHasData\">\n    <span> length: {{recordLength}}</span>\n    <table border=\"1\">\n      <thead>\n        <tr>\n          <th>N</th>\n          <ng-container *ngFor=\"let column of tableColumns\">\n          <th>{{column}}</th>\n          </ng-container>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let element of responseBody; let i = index\">\n          <th>{{i+1}}</th>\n          <ng-container *ngFor=\"let value of element.values\">\n            <th>{{value}}</th>\n          </ng-container>\n        </tr>\n      </tbody>\n    </table>\n  </ng-container>\n  \n</div>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.layout-full-page{box-sizing:border-box;overflow-y:auto;height:100vh;display:inline-block;width:100vw;background-color:#fff;overflow-x:auto;padding:10px}.layout-full-page table{max-width:100vw;width:100%;height:100vh;overflow-y:auto;overflow-x:auto;background-color:#fff}@media (max-width:767px){.layout-full-page{padding-top:30px;padding-left:5px;padding-right:5px}}"]
            }] }
];
SqliteExecutorComponent.ctorParameters = () => [
    { type: DaoFactory },
    { type: Location, decorators: [{ type: Optional }] }
];
if (false) {
    /** @type {?} */
    SqliteExecutorComponent.prototype.isHasData;
    /** @type {?} */
    SqliteExecutorComponent.prototype.selectTablesOptionList;
    /** @type {?} */
    SqliteExecutorComponent.prototype.selectTable;
    /** @type {?} */
    SqliteExecutorComponent.prototype.recordLength;
    /** @type {?} */
    SqliteExecutorComponent.prototype.responseBody;
    /** @type {?} */
    SqliteExecutorComponent.prototype.tableColumns;
    /** @type {?} */
    SqliteExecutorComponent.prototype.currentDbName;
    /** @type {?} */
    SqliteExecutorComponent.prototype.currentTable;
    /**
     * @type {?}
     * @private
     */
    SqliteExecutorComponent.prototype.daoFactory;
    /**
     * @type {?}
     * @private
     */
    SqliteExecutorComponent.prototype._location;
}
/** @enum {string} */
const DATABASE_TABLES = {
    //TW_LH_SD_Code_Type,
    Profile_TW_LH_SD_Code: 'TW_LH_SD_Code',
    Profile_TW_LH_SD_DeviceInfo: 'TW_LH_SD_DeviceInfo',
    Profile_TW_LH_SD_DataSync_Time: 'TW_LH_SD_DataSync_Time',
    //Profile_TW_LH_SD_DataSync_Function = 'TW_LH_SD_DataSync_Function',
    Profile_TW_LH_SD_VW_FuncSync_Time: 'TW_LH_SD_VW_FuncSync_Time',
    Profile_TW_LH_SD_Language: 'TW_LH_SD_Language',
    Profile_TW_LH_SD_Error_Log: 'TW_LH_SD_Error_Log',
    Profile_TW_LH_SD_Action_Log: 'TW_LH_SD_Action_Log',
    TW_LH_SD_Calendar_Extension: 'TW_LH_SD_Calendar_Extension',
    TW_LH_SD_Calendar: 'TW_LH_SD_Calendar',
    TW_LH_SD_Customer_Address_Extension: 'TW_LH_SD_Customer_Address_Extension',
    TW_LH_SD_Customer_Email_Extension: 'TW_LH_SD_Customer_Email_Extension',
    TW_LH_SD_Customer_Tel_Extension: 'TW_LH_SD_Customer_Tel_Extension',
    TW_LH_SD_Customer_Contact_Extension: 'TW_LH_SD_Customer_Contact_Extension',
    TW_LH_SD_Customer_Extension: 'TW_LH_SD_Customer_Extension',
    TW_LH_SD_Customer_Address: 'TW_LH_SD_Customer_Address',
    TW_LH_SD_Customer_Email: 'TW_LH_SD_Customer_Email',
    TW_LH_SD_Customer_Tel: 'TW_LH_SD_Customer_Tel',
    TW_LH_SD_Customer_Contact: 'TW_LH_SD_Customer_Contact',
    TW_LH_SD_Customer: 'TW_LH_SD_Customer',
    TW_LH_SD_Personal_Setting: 'TW_LH_SD_Personal_Setting',
    TW_LH_SD_VW_Customer: 'TW_LH_SD_VW_Customer',
    TW_LH_SD_Message: 'TW_LH_SD_Message',
    //goal-setting & progress table 
    TW_LH_SD_Year_Config: 'TW_LH_SD_Year_Config',
    TW_LH_SD_Goal_Setting: 'TW_LH_SD_Goal_Setting',
    TW_LH_SD_Goal_Setting_Value: 'TW_LH_SD_Goal_Setting_Value',
    TW_LH_SD_Goal_Setting_Plan_Value: 'TW_LH_SD_Goal_Setting_Plan_Value',
    TW_LH_SD_Goal_Setting_Expected: 'TW_LH_SD_Goal_Setting_Expected',
    TW_LH_SD_Actual_Value: 'TW_LH_SD_Actual_Value',
    TW_LH_SD_Agency_Plan_Main: 'TW_LH_SD_Agency_Plan_Main',
    TW_LH_SD_Agency_Detail_Data: 'TW_LH_SD_Agency_Detail_Data',
    TW_LH_SD_Personal_Progress: 'TW_LH_SD_Personal_Progress',
    TW_LH_SD_Team_Progress_Main: 'TW_LH_SD_Team_Progress_Main',
    TW_LH_SD_Team_Progress_Detail: 'TW_LH_SD_Team_Progress_Detail',
    TW_LH_SD_Other_Parameter: 'TW_LH_SD_Other_Parameter',
};
class SelectOption {
    /**
     * @param {?} value
     * @param {?} name
     */
    constructor(value, name) {
        this._value = value;
        this._name = name;
    }
    /**
     * @return {?}
     */
    getName() {
        return this._name;
    }
    /**
     * @return {?}
     */
    getValue() {
        return this._value;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectOption.prototype._name;
    /**
     * @type {?}
     * @private
     */
    SelectOption.prototype._value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsaXRlLWV4ZWN1dG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3NxbGl0ZS1leGVjdXRvci9zcWxpdGUtZXhlY3V0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQVN0RSxNQUFNOzs7OztJQVVKLFlBQ1UsVUFBc0IsRUFDVixTQUFtQjtRQUQvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ1YsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQVZsQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRzNCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO0lBUTVCLENBQUM7Ozs7SUFFTCxRQUFROztZQUNGLFlBQVksR0FBd0IsRUFBRTtRQUMxQyxLQUFLLElBQUksSUFBSSxJQUFJLGVBQWUsRUFBRTtZQUNoQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDN0QsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRTtTQUNGO1FBRUQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFlBQVksQ0FBQztRQUMzQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFcEUsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEtBQWE7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFHL0MsSUFBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxTQUFTLEVBQUU7WUFFcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUUxRDthQUVJO1lBRUgsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUUxRDtJQUNILENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxNQUFjLEVBQUUsU0FBaUI7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQzs7WUFDdEQsR0FBUzs7WUFDVCxRQUFxQjtRQUN6QixHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQUM7UUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFvQixFQUFDLEVBQUU7WUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFFakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUVsQyxzREFBc0Q7b0JBQ3RELDJEQUEyRDtvQkFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUMsQ0FBQyxFQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDdkI7aUJBQ0k7Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNmO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFJTCxDQUFDOzs7WUFwR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDRrQ0FBK0M7O2FBRWhEOzs7WUFaUSxVQUFVO1lBQ1YsUUFBUSx1QkF3QlosUUFBUTs7OztJQVZYLDRDQUFrQzs7SUFDbEMseURBQW1EOztJQUNuRCw4Q0FBMkI7O0lBQzNCLCtDQUFnQzs7SUFDaEMsK0NBQW9COztJQUNwQiwrQ0FBbUM7O0lBQ25DLGdEQUE2Qjs7SUFDN0IsK0NBQTRCOzs7OztJQUUxQiw2Q0FBOEI7Ozs7O0lBQzlCLDRDQUF1Qzs7OztJQXlGekMscUJBQXFCO0lBQ3JCLHVCQUF3QixlQUFlO0lBQ3ZDLDZCQUE4QixxQkFBcUI7SUFDbkQsZ0NBQWlDLHdCQUF3QjtJQUN6RCxvRUFBb0U7SUFDcEUsbUNBQW9DLDJCQUEyQjtJQUMvRCwyQkFBNEIsbUJBQW1CO0lBQy9DLDRCQUE2QixvQkFBb0I7SUFDakQsNkJBQThCLHFCQUFxQjtJQUNuRCw2QkFBOEIsNkJBQTZCO0lBQzNELG1CQUFvQixtQkFBbUI7SUFDdkMscUNBQXNDLHFDQUFxQztJQUMzRSxtQ0FBb0MsbUNBQW1DO0lBQ3ZFLGlDQUFrQyxpQ0FBaUM7SUFDbkUscUNBQXNDLHFDQUFxQztJQUMzRSw2QkFBOEIsNkJBQTZCO0lBQzNELDJCQUE0QiwyQkFBMkI7SUFDdkQseUJBQTBCLHlCQUF5QjtJQUNuRCx1QkFBd0IsdUJBQXVCO0lBQy9DLDJCQUE0QiwyQkFBMkI7SUFDdkQsbUJBQW9CLG1CQUFtQjtJQUN2QywyQkFBNEIsMkJBQTJCO0lBQ3ZELHNCQUF1QixzQkFBc0I7SUFDN0Msa0JBQW1CLGtCQUFrQjtJQUVyQyxnQ0FBZ0M7SUFDaEMsc0JBQXVCLHNCQUFzQjtJQUM3Qyx1QkFBd0IsdUJBQXVCO0lBQy9DLDZCQUE4Qiw2QkFBNkI7SUFDM0Qsa0NBQW1DLGtDQUFrQztJQUNyRSxnQ0FBaUMsZ0NBQWdDO0lBQ2pFLHVCQUF3Qix1QkFBdUI7SUFDL0MsMkJBQTRCLDJCQUEyQjtJQUN2RCw2QkFBOEIsNkJBQTZCO0lBQzNELDRCQUE2Qiw0QkFBNEI7SUFDekQsNkJBQThCLDZCQUE2QjtJQUMzRCwrQkFBZ0MsK0JBQStCO0lBQy9ELDBCQUEyQiwwQkFBMEI7O0FBSXZEOzs7OztJQUlFLFlBQVksS0FBYyxFQUFFLElBQWE7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVNLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztDQUNGOzs7Ozs7SUFkQyw2QkFBc0I7Ozs7O0lBQ3RCLDhCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJRGFvIH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW8uaW50ZXJmYWNlJztcbmltcG9ydCB7IFNRTGl0ZVRhYmxlIH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9TUUxpdGVUYWJsZSc7XG5pbXBvcnQgeyBDbGllbnRDdXN0b21EYW8gfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlL0NsaWVudEN1c3RvbURhbyc7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUvU1FMaXRlUmVzcG9uc2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuZC1zcWxpdGUtZXhlY3V0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vc3FsaXRlLWV4ZWN1dG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3FsaXRlLWV4ZWN1dG9yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3FsaXRlRXhlY3V0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBpc0hhc0RhdGE6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdFRhYmxlc09wdGlvbkxpc3Q6IEFycmF5PFNlbGVjdE9wdGlvbj47XG4gIHB1YmxpYyBzZWxlY3RUYWJsZTogc3RyaW5nO1xuICBwdWJsaWMgcmVjb3JkTGVuZ3RoOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgcmVzcG9uc2VCb2R5O1xuICBwdWJsaWMgdGFibGVDb2x1bW5zOiBBcnJheTxzdHJpbmc+O1xuICBwdWJsaWMgY3VycmVudERiTmFtZTogc3RyaW5nO1xuICBwdWJsaWMgY3VycmVudFRhYmxlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb25cbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgc2VsZWN0T3B0aW9uOiBBcnJheTxTZWxlY3RPcHRpb24+ID0gW107XG4gICAgZm9yIChsZXQgaXRlbSBpbiBEQVRBQkFTRV9UQUJMRVMpIHtcbiAgICAgIGlmIChpc05hTihOdW1iZXIoaXRlbSkpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlOicsaXRlbSAsJyAgbmFtZTonICxEQVRBQkFTRV9UQUJMRVNbaXRlbV0pO1xuICAgICAgICAgIHNlbGVjdE9wdGlvbi5wdXNoKG5ldyBTZWxlY3RPcHRpb24oaXRlbSwgREFUQUJBU0VfVEFCTEVTW2l0ZW1dKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RUYWJsZXNPcHRpb25MaXN0ID0gc2VsZWN0T3B0aW9uO1xuICAgIHRoaXMuc2VsZWN0VGFibGVDaGFuZ2UodGhpcy5zZWxlY3RUYWJsZXNPcHRpb25MaXN0WzBdLmdldFZhbHVlKCkpO1xuXG4gIH1cblxuICBnb1RvTGFzdFBhZ2UoKSB7XG4gICAgdGhpcy5fbG9jYXRpb24uYmFjaygpO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnF1ZXJ5Qnl0YWJsZSh0aGlzLmN1cnJlbnREYk5hbWUsdGhpcy5jdXJyZW50VGFibGUpO1xuICB9XG5cbiAgc2VsZWN0VGFibGVDaGFuZ2UoZXZlbnQ6IHN0cmluZyl7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RUYWJsZUtleTogXCIsIGV2ZW50KTtcbiAgICB0aGlzLnNlbGVjdFRhYmxlID0gZXZlbnQ7XG4gICAgdGhpcy5jdXJyZW50VGFibGUgPSBEQVRBQkFTRV9UQUJMRVNbZXZlbnRdXG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RUYWJsZTogXCIsIHRoaXMuc2VsZWN0VGFibGUpO1xuXG5cbiAgICBpZihldmVudC5zdWJzdHJpbmcoMCw3KSA9PSAnUHJvZmlsZScpIHtcblxuICAgICAgdGhpcy5jdXJyZW50RGJOYW1lID0gJ1Byb2ZpbGUnO1xuICAgICAgdGhpcy5xdWVyeUJ5dGFibGUodGhpcy5jdXJyZW50RGJOYW1lLCB0aGlzLmN1cnJlbnRUYWJsZSk7XG5cbiAgICB9XG5cbiAgICBlbHNlIHtcblxuICAgICAgdGhpcy5jdXJyZW50RGJOYW1lID0gJ01haW4nO1xuICAgICAgdGhpcy5xdWVyeUJ5dGFibGUodGhpcy5jdXJyZW50RGJOYW1lLCB0aGlzLmN1cnJlbnRUYWJsZSk7XG5cbiAgICB9XG4gIH1cblxuICBxdWVyeUJ5dGFibGUoZGJOYW1lOiBzdHJpbmcsIHRhYmxlTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coXCJkYk5hbWU6IFwiLGRiTmFtZSwgXCIgdGFibGVOYW1lOiBcIiwgdGFibGVOYW1lKTtcbiAgICBsZXQgZGFvOiBJRGFvO1xuICAgIGxldCB0YWJsZU9iajogU1FMaXRlVGFibGU7XG4gICAgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERhbyhkYk5hbWUpO1xuICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICB0YWJsZU9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXRUYWJsZShkYk5hbWUsIHRhYmxlTmFtZSk7XG4gICAgdGhpcy50YWJsZUNvbHVtbnMgPSB0YWJsZU9iai5nZXRDb2x1bW5zKCkubWFwKHggPT4geC5nZXROYW1lKCkpO1xuICAgIGNvbnNvbGUubG9nKFwiZGFvOiBcIixkYW8pO1xuICAgIGNvbnNvbGUubG9nKFwidGFibGVPYmo6IFwiLHRhYmxlT2JqKTtcbiAgICBkYW8ucXVlcnlCeVRhYmxlKHRhYmxlT2JqKS5zdWJzY3JpYmUoKGRhdGE6IFNRTGl0ZVJlc3BvbnNlKT0+e1xuICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgZGF0YTogXCIsIGRhdGEpO1xuICAgICAgaWYoZGF0YS5IZWFkZXJbJ3N0YXR1cyddKSB7XG4gICAgICAgIHRoaXMucmVjb3JkTGVuZ3RoID0gZGF0YS5IZWFkZXJbJ3JlY29yZF9sZW5ndGgnXTtcblxuICAgICAgICB0aGlzLnJlc3BvbnNlQm9keSA9IGRhdGEuQm9keTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZUJvZHk6IFwiLCB0aGlzLnJlc3BvbnNlQm9keSk7XG4gICAgICAgIHRoaXMucmVzcG9uc2VCb2R5LmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVsZW1lbnQga2V5OiBcIiwgT2JqZWN0LmtleXMoZWxlbWVudCkpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxlbWVudCB2YWx1ZXM6IFwiLCBPYmplY3QudmFsdWVzKGVsZW1lbnQpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVsZW1lbnQ6IFwiLCBlbGVtZW50KTtcbiAgICAgICAgICBlbGVtZW50LnZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaXNIYXNEYXRhID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmlzSGFzRGF0YSA9IGZhbHNlO1xuICAgICAgICBhbGVydChcImZhaWxcIik7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcIlNxbGl0ZSBkYXRhOiBcIiwgZGF0YSk7XG4gICAgfSk7XG5cbiAgICBcblxuICB9XG5cbiAgXG59XG5cbmVudW0gREFUQUJBU0VfVEFCTEVTIHtcbiAgLy9UV19MSF9TRF9Db2RlX1R5cGUsXG4gIFByb2ZpbGVfVFdfTEhfU0RfQ29kZSA9ICdUV19MSF9TRF9Db2RlJyxcbiAgUHJvZmlsZV9UV19MSF9TRF9EZXZpY2VJbmZvID0gJ1RXX0xIX1NEX0RldmljZUluZm8nLFxuICBQcm9maWxlX1RXX0xIX1NEX0RhdGFTeW5jX1RpbWUgPSAnVFdfTEhfU0RfRGF0YVN5bmNfVGltZScsXG4gIC8vUHJvZmlsZV9UV19MSF9TRF9EYXRhU3luY19GdW5jdGlvbiA9ICdUV19MSF9TRF9EYXRhU3luY19GdW5jdGlvbicsXG4gIFByb2ZpbGVfVFdfTEhfU0RfVldfRnVuY1N5bmNfVGltZSA9ICdUV19MSF9TRF9WV19GdW5jU3luY19UaW1lJyxcbiAgUHJvZmlsZV9UV19MSF9TRF9MYW5ndWFnZSA9ICdUV19MSF9TRF9MYW5ndWFnZScsXG4gIFByb2ZpbGVfVFdfTEhfU0RfRXJyb3JfTG9nID0gJ1RXX0xIX1NEX0Vycm9yX0xvZycsXG4gIFByb2ZpbGVfVFdfTEhfU0RfQWN0aW9uX0xvZyA9ICdUV19MSF9TRF9BY3Rpb25fTG9nJyxcbiAgVFdfTEhfU0RfQ2FsZW5kYXJfRXh0ZW5zaW9uID0gJ1RXX0xIX1NEX0NhbGVuZGFyX0V4dGVuc2lvbicsXG4gIFRXX0xIX1NEX0NhbGVuZGFyID0gJ1RXX0xIX1NEX0NhbGVuZGFyJyxcbiAgVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzc19FeHRlbnNpb24gPSAnVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzc19FeHRlbnNpb24nLFxuICBUV19MSF9TRF9DdXN0b21lcl9FbWFpbF9FeHRlbnNpb24gPSAnVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWxfRXh0ZW5zaW9uJyxcbiAgVFdfTEhfU0RfQ3VzdG9tZXJfVGVsX0V4dGVuc2lvbiA9ICdUV19MSF9TRF9DdXN0b21lcl9UZWxfRXh0ZW5zaW9uJyxcbiAgVFdfTEhfU0RfQ3VzdG9tZXJfQ29udGFjdF9FeHRlbnNpb24gPSAnVFdfTEhfU0RfQ3VzdG9tZXJfQ29udGFjdF9FeHRlbnNpb24nLFxuICBUV19MSF9TRF9DdXN0b21lcl9FeHRlbnNpb24gPSAnVFdfTEhfU0RfQ3VzdG9tZXJfRXh0ZW5zaW9uJyxcbiAgVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzcyA9ICdUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzJyxcbiAgVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWwgPSAnVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWwnLFxuICBUV19MSF9TRF9DdXN0b21lcl9UZWwgPSAnVFdfTEhfU0RfQ3VzdG9tZXJfVGVsJyxcbiAgVFdfTEhfU0RfQ3VzdG9tZXJfQ29udGFjdCA9ICdUV19MSF9TRF9DdXN0b21lcl9Db250YWN0JyxcbiAgVFdfTEhfU0RfQ3VzdG9tZXIgPSAnVFdfTEhfU0RfQ3VzdG9tZXInLFxuICBUV19MSF9TRF9QZXJzb25hbF9TZXR0aW5nID0gJ1RXX0xIX1NEX1BlcnNvbmFsX1NldHRpbmcnLFxuICBUV19MSF9TRF9WV19DdXN0b21lciA9ICdUV19MSF9TRF9WV19DdXN0b21lcicsXG4gIFRXX0xIX1NEX01lc3NhZ2UgPSAnVFdfTEhfU0RfTWVzc2FnZScsXG5cbiAgLy9nb2FsLXNldHRpbmcgJiBwcm9ncmVzcyB0YWJsZSBcbiAgVFdfTEhfU0RfWWVhcl9Db25maWcgPSAnVFdfTEhfU0RfWWVhcl9Db25maWcnLFxuICBUV19MSF9TRF9Hb2FsX1NldHRpbmcgPSAnVFdfTEhfU0RfR29hbF9TZXR0aW5nJyxcbiAgVFdfTEhfU0RfR29hbF9TZXR0aW5nX1ZhbHVlID0gJ1RXX0xIX1NEX0dvYWxfU2V0dGluZ19WYWx1ZScsXG4gIFRXX0xIX1NEX0dvYWxfU2V0dGluZ19QbGFuX1ZhbHVlID0gJ1RXX0xIX1NEX0dvYWxfU2V0dGluZ19QbGFuX1ZhbHVlJyxcbiAgVFdfTEhfU0RfR29hbF9TZXR0aW5nX0V4cGVjdGVkID0gJ1RXX0xIX1NEX0dvYWxfU2V0dGluZ19FeHBlY3RlZCcsXG4gIFRXX0xIX1NEX0FjdHVhbF9WYWx1ZSA9ICdUV19MSF9TRF9BY3R1YWxfVmFsdWUnLFxuICBUV19MSF9TRF9BZ2VuY3lfUGxhbl9NYWluID0gJ1RXX0xIX1NEX0FnZW5jeV9QbGFuX01haW4nLFxuICBUV19MSF9TRF9BZ2VuY3lfRGV0YWlsX0RhdGEgPSAnVFdfTEhfU0RfQWdlbmN5X0RldGFpbF9EYXRhJyxcbiAgVFdfTEhfU0RfUGVyc29uYWxfUHJvZ3Jlc3MgPSAnVFdfTEhfU0RfUGVyc29uYWxfUHJvZ3Jlc3MnLFxuICBUV19MSF9TRF9UZWFtX1Byb2dyZXNzX01haW4gPSAnVFdfTEhfU0RfVGVhbV9Qcm9ncmVzc19NYWluJyxcbiAgVFdfTEhfU0RfVGVhbV9Qcm9ncmVzc19EZXRhaWwgPSAnVFdfTEhfU0RfVGVhbV9Qcm9ncmVzc19EZXRhaWwnLFxuICBUV19MSF9TRF9PdGhlcl9QYXJhbWV0ZXIgPSAnVFdfTEhfU0RfT3RoZXJfUGFyYW1ldGVyJ1xuXG59XG5cbmNsYXNzIFNlbGVjdE9wdGlvbntcbiAgICBcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSA6IHN0cmluZywgbmFtZSA6IHN0cmluZykgeyBcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldFZhbHVlKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn0iXX0=