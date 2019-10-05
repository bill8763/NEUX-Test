/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Optional } from '@angular/core';
import { DaoFactory } from '../../device/sqlite/DaoFactory';
import { Location } from '@angular/common';
import { ClientCustomDao } from '../../device/sqlite/ClientCustomDao';
var SqliteExecutorComponent = /** @class */ (function () {
    function SqliteExecutorComponent(daoFactory, _location) {
        this.daoFactory = daoFactory;
        this._location = _location;
        this.isHasData = false;
        this.recordLength = 0;
    }
    /**
     * @return {?}
     */
    SqliteExecutorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectOption = [];
        for (var item in DATABASE_TABLES) {
            if (isNaN(Number(item))) {
                console.log('value:', item, '  name:', DATABASE_TABLES[item]);
                selectOption.push(new SelectOption(item, DATABASE_TABLES[item]));
            }
        }
        this.selectTablesOptionList = selectOption;
        this.selectTableChange(this.selectTablesOptionList[0].getValue());
    };
    /**
     * @return {?}
     */
    SqliteExecutorComponent.prototype.goToLastPage = /**
     * @return {?}
     */
    function () {
        this._location.back();
    };
    /**
     * @return {?}
     */
    SqliteExecutorComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.queryBytable(this.currentDbName, this.currentTable);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SqliteExecutorComponent.prototype.selectTableChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @param {?} dbName
     * @param {?} tableName
     * @return {?}
     */
    SqliteExecutorComponent.prototype.queryBytable = /**
     * @param {?} dbName
     * @param {?} tableName
     * @return {?}
     */
    function (dbName, tableName) {
        var _this = this;
        console.log("dbName: ", dbName, " tableName: ", tableName);
        /** @type {?} */
        var dao;
        /** @type {?} */
        var tableObj;
        dao = this.daoFactory.getDao(dbName);
        dao = new ClientCustomDao(dao);
        tableObj = this.daoFactory.getTable(dbName, tableName);
        this.tableColumns = tableObj.getColumns().map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getName(); }));
        console.log("dao: ", dao);
        console.log("tableObj: ", tableObj);
        dao.queryByTable(tableObj).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            console.log("response data: ", data);
            if (data.Header['status']) {
                _this.recordLength = data.Header['record_length'];
                _this.responseBody = data.Body;
                console.log("responseBody: ", _this.responseBody);
                _this.responseBody.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                function (element) {
                    // console.log("element key: ", Object.keys(element));
                    // console.log("element values: ", Object.values(element));
                    console.log("element: ", element);
                    element.values = Object.values(element);
                }));
                _this.isHasData = true;
            }
            else {
                _this.isHasData = false;
                alert("fail");
            }
            console.log("Sqlite data: ", data);
        }));
    };
    SqliteExecutorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-sqlite-executor',
                    template: "<div class=\"layout-full-page\">\n  <input type=\"button\" value=\"back\" (click)=\"goToLastPage()\">\n  <select form=\"carform\" [ngModel]=\"selectTable\" (ngModelChange)=\"selectTableChange($event)\">\n    <ng-container *ngFor=\"let tableOption of selectTablesOptionList\">\n        <option [value]=\"tableOption.getValue()\">{{tableOption.getName()}}</option>\n    </ng-container>\n  </select>\n  <input type=\"button\" value=\"refresh\" (click)=\"refresh()\">\n  <ng-container *ngIf=\"isHasData\">\n    <span> length: {{recordLength}}</span>\n    <table border=\"1\">\n      <thead>\n        <tr>\n          <th>N</th>\n          <ng-container *ngFor=\"let column of tableColumns\">\n          <th>{{column}}</th>\n          </ng-container>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let element of responseBody; let i = index\">\n          <th>{{i+1}}</th>\n          <ng-container *ngFor=\"let value of element.values\">\n            <th>{{value}}</th>\n          </ng-container>\n        </tr>\n      </tbody>\n    </table>\n  </ng-container>\n  \n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.layout-full-page{box-sizing:border-box;overflow-y:auto;height:100vh;display:inline-block;width:100vw;background-color:#fff;overflow-x:auto;padding:10px}.layout-full-page table{max-width:100vw;width:100%;height:100vh;overflow-y:auto;overflow-x:auto;background-color:#fff}@media (max-width:767px){.layout-full-page{padding-top:30px;padding-left:5px;padding-right:5px}}"]
                }] }
    ];
    SqliteExecutorComponent.ctorParameters = function () { return [
        { type: DaoFactory },
        { type: Location, decorators: [{ type: Optional }] }
    ]; };
    return SqliteExecutorComponent;
}());
export { SqliteExecutorComponent };
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
var DATABASE_TABLES = {
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
var SelectOption = /** @class */ (function () {
    function SelectOption(value, name) {
        this._value = value;
        this._name = name;
    }
    /**
     * @return {?}
     */
    SelectOption.prototype.getName = /**
     * @return {?}
     */
    function () {
        return this._name;
    };
    /**
     * @return {?}
     */
    SelectOption.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this._value;
    };
    return SelectOption;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsaXRlLWV4ZWN1dG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3NxbGl0ZS1leGVjdXRvci9zcWxpdGUtZXhlY3V0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUl0RTtJQWVFLGlDQUNVLFVBQXNCLEVBQ1YsU0FBbUI7UUFEL0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNWLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFWbEMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUczQixpQkFBWSxHQUFXLENBQUMsQ0FBQztJQVE1QixDQUFDOzs7O0lBRUwsMENBQVE7OztJQUFSOztZQUNNLFlBQVksR0FBd0IsRUFBRTtRQUMxQyxLQUFLLElBQUksSUFBSSxJQUFJLGVBQWUsRUFBRTtZQUNoQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDN0QsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRTtTQUNGO1FBRUQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFlBQVksQ0FBQztRQUMzQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFB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QUE0QiwyQkFBMkI7SUFDdkQseUJBQTBCLHlCQUF5QjtJQUNuRCx1QkFBd0IsdUJBQXVCO0lBQy9DLDJCQUE0QiwyQkFBMkI7SUFDdkQsbUJBQW9CLG1CQUFtQjtJQUN2QywyQkFBNEIsMkJBQTJCO0lBQ3ZELHNCQUF1QixzQkFBc0I7SUFDN0Msa0JBQW1CLGtCQUFrQjtJQUVyQyxnQ0FBZ0M7SUFDaEMsc0JBQXVCLHNCQUFzQjtJQUM3Qyx1QkFBd0IsdUJBQXVCO0lBQy9DLDZCQUE4Qiw2QkFBNkI7SUFDM0Qsa0NBQW1DLGtDQUFrQztJQUNyRSxnQ0FBaUMsZ0NBQWdDO0lBQ2pFLHVCQUF3Qix1QkFBdUI7SUFDL0MsMkJBQTRCLDJCQUEyQjtJQUN2RCw2QkFBOEIsNkJBQTZCO0lBQzNELDRCQUE2Qiw0QkFBNEI7SUFDekQsNkJBQThCLDZCQUE2QjtJQUMzRCwrQkFBZ0MsK0JBQStCO0lBQy9ELDBCQUEyQiwwQkFBMEI7O0FBSXZEO0lBSUUsc0JBQVksS0FBYyxFQUFFLElBQWE7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVNLDhCQUFPOzs7SUFBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBRU0sK0JBQVE7OztJQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7Ozs7OztJQWRDLDZCQUFzQjs7Ozs7SUFDdEIsOEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5JztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElEYW8gfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhby5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU1FMaXRlVGFibGUgfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVRhYmxlJztcbmltcG9ydCB7IENsaWVudEN1c3RvbURhbyB9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUvQ2xpZW50Q3VzdG9tRGFvJztcbmltcG9ydCB7IFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9TUUxpdGVSZXNwb25zZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25kLXNxbGl0ZS1leGVjdXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zcWxpdGUtZXhlY3V0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zcWxpdGUtZXhlY3V0b3IuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTcWxpdGVFeGVjdXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGlzSGFzRGF0YTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2VsZWN0VGFibGVzT3B0aW9uTGlzdDogQXJyYXk8U2VsZWN0T3B0aW9uPjtcbiAgcHVibGljIHNlbGVjdFRhYmxlOiBzdHJpbmc7XG4gIHB1YmxpYyByZWNvcmRMZW5ndGg6IG51bWJlciA9IDA7XG4gIHB1YmxpYyByZXNwb25zZUJvZHk7XG4gIHB1YmxpYyB0YWJsZUNvbHVtbnM6IEFycmF5PHN0cmluZz47XG4gIHB1YmxpYyBjdXJyZW50RGJOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBjdXJyZW50VGFibGU6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvblxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBzZWxlY3RPcHRpb246IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBbXTtcbiAgICBmb3IgKGxldCBpdGVtIGluIERBVEFCQVNFX1RBQkxFUykge1xuICAgICAgaWYgKGlzTmFOKE51bWJlcihpdGVtKSkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndmFsdWU6JyxpdGVtICwnICBuYW1lOicgLERBVEFCQVNFX1RBQkxFU1tpdGVtXSk7XG4gICAgICAgICAgc2VsZWN0T3B0aW9uLnB1c2gobmV3IFNlbGVjdE9wdGlvbihpdGVtLCBEQVRBQkFTRV9UQUJMRVNbaXRlbV0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdFRhYmxlc09wdGlvbkxpc3QgPSBzZWxlY3RPcHRpb247XG4gICAgdGhpcy5zZWxlY3RUYWJsZUNoYW5nZSh0aGlzLnNlbGVjdFRhYmxlc09wdGlvbkxpc3RbMF0uZ2V0VmFsdWUoKSk7XG5cbiAgfVxuXG4gIGdvVG9MYXN0UGFnZSgpIHtcbiAgICB0aGlzLl9sb2NhdGlvbi5iYWNrKCk7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMucXVlcnlCeXRhYmxlKHRoaXMuY3VycmVudERiTmFtZSx0aGlzLmN1cnJlbnRUYWJsZSk7XG4gIH1cblxuICBzZWxlY3RUYWJsZUNoYW5nZShldmVudDogc3RyaW5nKXtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdFRhYmxlS2V5OiBcIiwgZXZlbnQpO1xuICAgIHRoaXMuc2VsZWN0VGFibGUgPSBldmVudDtcbiAgICB0aGlzLmN1cnJlbnRUYWJsZSA9IERBVEFCQVNFX1RBQkxFU1tldmVudF1cbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdFRhYmxlOiBcIiwgdGhpcy5zZWxlY3RUYWJsZSk7XG5cblxuICAgIGlmKGV2ZW50LnN1YnN0cmluZygwLDcpID09ICdQcm9maWxlJykge1xuXG4gICAgICB0aGlzLmN1cnJlbnREYk5hbWUgPSAnUHJvZmlsZSc7XG4gICAgICB0aGlzLnF1ZXJ5Qnl0YWJsZSh0aGlzLmN1cnJlbnREYk5hbWUsIHRoaXMuY3VycmVudFRhYmxlKTtcblxuICAgIH1cblxuICAgIGVsc2Uge1xuXG4gICAgICB0aGlzLmN1cnJlbnREYk5hbWUgPSAnTWFpbic7XG4gICAgICB0aGlzLnF1ZXJ5Qnl0YWJsZSh0aGlzLmN1cnJlbnREYk5hbWUsIHRoaXMuY3VycmVudFRhYmxlKTtcblxuICAgIH1cbiAgfVxuXG4gIHF1ZXJ5Qnl0YWJsZShkYk5hbWU6IHN0cmluZywgdGFibGVOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhcImRiTmFtZTogXCIsZGJOYW1lLCBcIiB0YWJsZU5hbWU6IFwiLCB0YWJsZU5hbWUpO1xuICAgIGxldCBkYW86IElEYW87XG4gICAgbGV0IHRhYmxlT2JqOiBTUUxpdGVUYWJsZTtcbiAgICBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGFvKGRiTmFtZSk7XG4gICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pO1xuICAgIHRhYmxlT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldFRhYmxlKGRiTmFtZSwgdGFibGVOYW1lKTtcbiAgICB0aGlzLnRhYmxlQ29sdW1ucyA9IHRhYmxlT2JqLmdldENvbHVtbnMoKS5tYXAoeCA9PiB4LmdldE5hbWUoKSk7XG4gICAgY29uc29sZS5sb2coXCJkYW86IFwiLGRhbyk7XG4gICAgY29uc29sZS5sb2coXCJ0YWJsZU9iajogXCIsdGFibGVPYmopO1xuICAgIGRhby5xdWVyeUJ5VGFibGUodGFibGVPYmopLnN1YnNjcmliZSgoZGF0YTogU1FMaXRlUmVzcG9uc2UpPT57XG4gICAgY29uc29sZS5sb2coXCJyZXNwb25zZSBkYXRhOiBcIiwgZGF0YSk7XG4gICAgICBpZihkYXRhLkhlYWRlclsnc3RhdHVzJ10pIHtcbiAgICAgICAgdGhpcy5yZWNvcmRMZW5ndGggPSBkYXRhLkhlYWRlclsncmVjb3JkX2xlbmd0aCddO1xuXG4gICAgICAgIHRoaXMucmVzcG9uc2VCb2R5ID0gZGF0YS5Cb2R5O1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlQm9keTogXCIsIHRoaXMucmVzcG9uc2VCb2R5KTtcbiAgICAgICAgdGhpcy5yZXNwb25zZUJvZHkuZm9yRWFjaChlbGVtZW50ID0+IHtcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxlbWVudCBrZXk6IFwiLCBPYmplY3Qua2V5cyhlbGVtZW50KSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbGVtZW50IHZhbHVlczogXCIsIE9iamVjdC52YWx1ZXMoZWxlbWVudCkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudDogXCIsIGVsZW1lbnQpO1xuICAgICAgICAgIGVsZW1lbnQudmFsdWVzID0gT2JqZWN0LnZhbHVlcyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pc0hhc0RhdGEgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaXNIYXNEYXRhID0gZmFsc2U7XG4gICAgICAgIGFsZXJ0KFwiZmFpbFwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiU3FsaXRlIGRhdGE6IFwiLCBkYXRhKTtcbiAgICB9KTtcblxuICAgIFxuXG4gIH1cblxuICBcbn1cblxuZW51bSBEQVRBQkFTRV9UQUJMRVMge1xuICAvL1RXX0xIX1NEX0NvZGVfVHlwZSxcbiAgUHJvZmlsZV9UV19MSF9TRF9Db2RlID0gJ1RXX0xIX1NEX0NvZGUnLFxuICBQcm9maWxlX1RXX0xIX1NEX0RldmljZUluZm8gPSAnVFdfTEhfU0RfRGV2aWNlSW5mbycsXG4gIFByb2ZpbGVfVFdfTEhfU0RfRGF0YVN5bmNfVGltZSA9ICdUV19MSF9TRF9EYXRhU3luY19UaW1lJyxcbiAgLy9Qcm9maWxlX1RXX0xIX1NEX0RhdGFTeW5jX0Z1bmN0aW9uID0gJ1RXX0xIX1NEX0RhdGFTeW5jX0Z1bmN0aW9uJyxcbiAgUHJvZmlsZV9UV19MSF9TRF9WV19GdW5jU3luY19UaW1lID0gJ1RXX0xIX1NEX1ZXX0Z1bmNTeW5jX1RpbWUnLFxuICBQcm9maWxlX1RXX0xIX1NEX0xhbmd1YWdlID0gJ1RXX0xIX1NEX0xhbmd1YWdlJyxcbiAgUHJvZmlsZV9UV19MSF9TRF9FcnJvcl9Mb2cgPSAnVFdfTEhfU0RfRXJyb3JfTG9nJyxcbiAgUHJvZmlsZV9UV19MSF9TRF9BY3Rpb25fTG9nID0gJ1RXX0xIX1NEX0FjdGlvbl9Mb2cnLFxuICBUV19MSF9TRF9DYWxlbmRhcl9FeHRlbnNpb24gPSAnVFdfTEhfU0RfQ2FsZW5kYXJfRXh0ZW5zaW9uJyxcbiAgVFdfTEhfU0RfQ2FsZW5kYXIgPSAnVFdfTEhfU0RfQ2FsZW5kYXInLFxuICBUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzX0V4dGVuc2lvbiA9ICdUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzX0V4dGVuc2lvbicsXG4gIFRXX0xIX1NEX0N1c3RvbWVyX0VtYWlsX0V4dGVuc2lvbiA9ICdUV19MSF9TRF9DdXN0b21lcl9FbWFpbF9FeHRlbnNpb24nLFxuICBUV19MSF9TRF9DdXN0b21lcl9UZWxfRXh0ZW5zaW9uID0gJ1RXX0xIX1NEX0N1c3RvbWVyX1RlbF9FeHRlbnNpb24nLFxuICBUV19MSF9TRF9DdXN0b21lcl9Db250YWN0X0V4dGVuc2lvbiA9ICdUV19MSF9TRF9DdXN0b21lcl9Db250YWN0X0V4dGVuc2lvbicsXG4gIFRXX0xIX1NEX0N1c3RvbWVyX0V4dGVuc2lvbiA9ICdUV19MSF9TRF9DdXN0b21lcl9FeHRlbnNpb24nLFxuICBUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzID0gJ1RXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3MnLFxuICBUV19MSF9TRF9DdXN0b21lcl9FbWFpbCA9ICdUV19MSF9TRF9DdXN0b21lcl9FbWFpbCcsXG4gIFRXX0xIX1NEX0N1c3RvbWVyX1RlbCA9ICdUV19MSF9TRF9DdXN0b21lcl9UZWwnLFxuICBUV19MSF9TRF9DdXN0b21lcl9Db250YWN0ID0gJ1RXX0xIX1NEX0N1c3RvbWVyX0NvbnRhY3QnLFxuICBUV19MSF9TRF9DdXN0b21lciA9ICdUV19MSF9TRF9DdXN0b21lcicsXG4gIFRXX0xIX1NEX1BlcnNvbmFsX1NldHRpbmcgPSAnVFdfTEhfU0RfUGVyc29uYWxfU2V0dGluZycsXG4gIFRXX0xIX1NEX1ZXX0N1c3RvbWVyID0gJ1RXX0xIX1NEX1ZXX0N1c3RvbWVyJyxcbiAgVFdfTEhfU0RfTWVzc2FnZSA9ICdUV19MSF9TRF9NZXNzYWdlJyxcblxuICAvL2dvYWwtc2V0dGluZyAmIHByb2dyZXNzIHRhYmxlIFxuICBUV19MSF9TRF9ZZWFyX0NvbmZpZyA9ICdUV19MSF9TRF9ZZWFyX0NvbmZpZycsXG4gIFRXX0xIX1NEX0dvYWxfU2V0dGluZyA9ICdUV19MSF9TRF9Hb2FsX1NldHRpbmcnLFxuICBUV19MSF9TRF9Hb2FsX1NldHRpbmdfVmFsdWUgPSAnVFdfTEhfU0RfR29hbF9TZXR0aW5nX1ZhbHVlJyxcbiAgVFdfTEhfU0RfR29hbF9TZXR0aW5nX1BsYW5fVmFsdWUgPSAnVFdfTEhfU0RfR29hbF9TZXR0aW5nX1BsYW5fVmFsdWUnLFxuICBUV19MSF9TRF9Hb2FsX1NldHRpbmdfRXhwZWN0ZWQgPSAnVFdfTEhfU0RfR29hbF9TZXR0aW5nX0V4cGVjdGVkJyxcbiAgVFdfTEhfU0RfQWN0dWFsX1ZhbHVlID0gJ1RXX0xIX1NEX0FjdHVhbF9WYWx1ZScsXG4gIFRXX0xIX1NEX0FnZW5jeV9QbGFuX01haW4gPSAnVFdfTEhfU0RfQWdlbmN5X1BsYW5fTWFpbicsXG4gIFRXX0xIX1NEX0FnZW5jeV9EZXRhaWxfRGF0YSA9ICdUV19MSF9TRF9BZ2VuY3lfRGV0YWlsX0RhdGEnLFxuICBUV19MSF9TRF9QZXJzb25hbF9Qcm9ncmVzcyA9ICdUV19MSF9TRF9QZXJzb25hbF9Qcm9ncmVzcycsXG4gIFRXX0xIX1NEX1RlYW1fUHJvZ3Jlc3NfTWFpbiA9ICdUV19MSF9TRF9UZWFtX1Byb2dyZXNzX01haW4nLFxuICBUV19MSF9TRF9UZWFtX1Byb2dyZXNzX0RldGFpbCA9ICdUV19MSF9TRF9UZWFtX1Byb2dyZXNzX0RldGFpbCcsXG4gIFRXX0xIX1NEX090aGVyX1BhcmFtZXRlciA9ICdUV19MSF9TRF9PdGhlcl9QYXJhbWV0ZXInXG5cbn1cblxuY2xhc3MgU2VsZWN0T3B0aW9ue1xuICAgIFxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHZhbHVlIDogc3RyaW5nLCBuYW1lIDogc3RyaW5nKSB7IFxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0VmFsdWUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufSJdfQ==