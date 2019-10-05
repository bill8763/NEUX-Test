/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseMetaComponent } from './BaseMetaComponent';
import { ValidationResult } from '../../utils/ValidationResult';
import { MetaValid } from '../parser/bean/MetaValid';
import { SelectOption } from '../../bean/SelectOption';
import * as _ from 'lodash';
/**
 * @abstract
 */
var /**
 * @abstract
 */
FormMetaComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormMetaComponent, _super);
    function FormMetaComponent(metaService, profileCodeService, parser, executor) {
        var _this = _super.call(this, metaService, parser, executor) || this;
        _this.profileCodeService = profileCodeService;
        _this.validationResult = new ValidationResult();
        return _this;
    }
    /**
     * @return {?}
     */
    FormMetaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log("FormMetaComponent ngOninit!");
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * @param {?} column
     * @param {?} value
     * @param {?=} groupID
     * @param {?=} index
     * @return {?}
     */
    FormMetaComponent.prototype.onChange = /**
     * @param {?} column
     * @param {?} value
     * @param {?=} groupID
     * @param {?=} index
     * @return {?}
     */
    function (column, value, groupID, index) {
        if (groupID === void 0) { groupID = null; }
        if (index === void 0) { index = -1; }
        console.log("onChange:", column, value, groupID, index);
        /** @type {?} */
        var isGroup = (groupID && index >= 0);
        /** @type {?} */
        var columnID = isGroup ? column : (column + index.toString());
        /** @type {?} */
        var validResp = this.valid(column, value, isGroup);
        console.log("validResp:", validResp);
        if (validResp)
            this.validationResult.deleteError(columnID);
        else
            this.validationResult.setErrorMap(columnID, validResp.message);
        this.onValueChange(column, value, groupID, index);
    };
    /**
     * @private
     * @param {?} column
     * @param {?} value
     * @param {?=} isGroup
     * @return {?}
     */
    FormMetaComponent.prototype.valid = /**
     * @private
     * @param {?} column
     * @param {?} value
     * @param {?=} isGroup
     * @return {?}
     */
    function (column, value, isGroup) {
        if (isGroup === void 0) { isGroup = false; }
        console.log("valid:", column, value, isGroup);
        /** @type {?} */
        var resp = new MetaValid(column, true, "");
        /** @type {?} */
        var col;
        if (isGroup) {
            /** @type {?} */
            var groupCol = this.metaConfig.Columns
                .filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.type === 'Group'; }))
                .map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.groupColumns; }));
            col = _.flatten(groupCol).filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.id === column; }))[0];
        }
        else
            col = this.metaConfig.Columns.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.id === column; }))[0];
        console.log("valid col:", col);
        if (col.type === 'Input') {
            if (col.required && !value) {
                resp.isValid = false;
                resp.message = col.id + "_required";
            }
        }
        else if (col.type === 'Select') {
            if (col.required && (value === '' || !value)) {
                resp.isValid = false;
                resp.message = col.id + "_required";
            }
        }
        return resp;
    };
    /**
     * @private
     * @return {?}
     */
    FormMetaComponent.prototype.validAll = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        //Column Result
        /** @type {?} */
        var validResult = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.type !== "Group"; }))
            .map((/**
         * @param {?} col
         * @return {?}
         */
        function (col) { return _this.valid(col.id, _this._data[col.id]); }))
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !x.isValid; }));
        this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.type === "Group"; }))
            .forEach((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            /** @type {?} */
            var groupId = group.id;
            _this._data[groupId].forEach((/**
             * @param {?} ele
             * @param {?} index
             * @return {?}
             */
            function (ele, index) {
                validResult = validResult.concat(group.groupColumns.map((/**
                 * @param {?} col
                 * @return {?}
                 */
                function (col) {
                    /** @type {?} */
                    var validResp = _this.valid(col.id, ele[col.id], true);
                    validResp.colID = col.id + index.toString();
                    return validResp;
                })).filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return !x.isValid; })));
            }));
        }));
        console.log("validAll result:", validResult);
        return validResult;
    };
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    FormMetaComponent.prototype.onBtnClick = /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    function (type, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, resp;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._data[id + 'Btn'])
                            this._data[id + 'Btn'].disable = true;
                        if (!(type === 'submit')) return [3 /*break*/, 4];
                        this.validationResult.clearErrorMap();
                        result = this.validAll();
                        result.forEach((/**
                         * @param {?} err
                         * @return {?}
                         */
                        function (err) {
                            _this.validationResult.setErrorMap(err.colID, err.message);
                        }));
                        if (!(this.onValidateAll() && result.length === 0)) return [3 /*break*/, 2];
                        //CALL SAVE API
                        return [4 /*yield*/, this.saveData()];
                    case 1:
                        resp = _a.sent();
                        console.log("save data resp:", resp);
                        this.btnClick(type, id);
                        if (this._data[id + 'Btn'])
                            this._data[id + 'Btn'].disable = true;
                        return [3 /*break*/, 3];
                    case 2:
                        this._data[id + 'Btn'].disable = false;
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        this.btnClick(type, id);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @protected
     * @return {?}
     */
    FormMetaComponent.prototype.saveData = /**
     * @protected
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.executor.saveData(this.metaConfig, this._data, this.getMetaParams())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param {?} groupName
     * @param {?} index
     * @return {?}
     */
    FormMetaComponent.prototype.onGroupRemove = /**
     * @param {?} groupName
     * @param {?} index
     * @return {?}
     */
    function (groupName, index) {
        var _this = this;
        this._data[groupName] = this._data[groupName].filter((/**
         * @param {?} x
         * @param {?} i
         * @return {?}
         */
        function (x, i) { return i != index; }));
        /** @type {?} */
        var group_col = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id === groupName; }))[0].groupColumns;
        group_col.forEach((/**
         * @param {?} col
         * @return {?}
         */
        function (col) {
            _this.validationResult.deleteError(col.id + index.toString());
        }));
    };
    /**
     * @param {?} groupName
     * @return {?}
     */
    FormMetaComponent.prototype.onGroupAdd = /**
     * @param {?} groupName
     * @return {?}
     */
    function (groupName) {
        /** @type {?} */
        var group_col = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id === groupName; }))[0].groupColumns;
        /** @type {?} */
        var keys = group_col.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id; }));
        console.log("keys:", keys);
        /** @type {?} */
        var newObj = keys.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            /** @type {?} */
            var y = {};
            /** @type {?} */
            var defaultVal = group_col.filter((/**
             * @param {?} z
             * @return {?}
             */
            function (z) { return z.id === x; }))[0].default;
            y[x] = defaultVal;
            return y;
        })).reduce((/**
         * @param {?} acc
         * @param {?} current
         * @return {?}
         */
        function (acc, current) {
            return Object.assign(acc, current);
        }), {});
        console.log("GroupAdd newObj:", newObj);
        this._data[groupName] = tslib_1.__spread(this._data[groupName], [newObj]);
    };
    /**
     * @protected
     * @return {?}
     */
    FormMetaComponent.prototype.onDataUpdated = /**
     * @protected
     * @return {?}
     */
    function () {
        this.addBtnAttr();
        this.fetchOptions();
    };
    /**
     * @private
     * @return {?}
     */
    FormMetaComponent.prototype.fetchOptions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.metaConfig.Columns
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.optionRef && x.optionRef.length > 0; }))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.createOption(x); }))
            .forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            _this._data[option.key] = option.val;
        }));
        /** @type {?} */
        var groupCol = this.metaConfig.Columns
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.type === 'Group'; }))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.groupColumns.filter((/**
         * @param {?} y
         * @return {?}
         */
        function (y) { return y.optionRef && y.optionRef.length > 0; })); }));
        /** @type {?} */
        var groupOpt = _.flatMap(groupCol, (/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.map((/**
         * @param {?} y
         * @return {?}
         */
        function (y) { return _this.createOption(y); })); }));
        groupOpt.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            _this._data[option.key] = option.val;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    FormMetaComponent.prototype.addBtnAttr = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.metaConfig.Footer.forEach((/**
         * @param {?} ele
         * @return {?}
         */
        function (ele) {
            if (ele.type === 'submit' || ele.type === 'button')
                _this._data[ele.id + "Btn"] = Object.assign({
                    disable: false
                }, ele);
        }));
    };
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    FormMetaComponent.prototype.createOption = /**
     * @private
     * @param {?} column
     * @return {?}
     */
    function (column) {
        var _this = this;
        /** @type {?} */
        var resp = {
            key: column.id + 'Option',
            val: []
        };
        /** @type {?} */
        var codeArray = this.profileCodeService.getCodeArray(column.optionRef);
        if (column.type === 'Select')
            resp.val = codeArray
                .map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return new SelectOption(x.getCode(), _this.profileCodeService.convertCode2Text(column.optionRef, x.getCode())); }));
        else
            resp.val = codeArray.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                return {
                    id: x.getCode(),
                    name: _this.profileCodeService.convertCode2Text(column.optionRef, x.getCode()),
                    arguments: JSON.parse(x.getArguments())
                };
            }));
        return resp;
    };
    return FormMetaComponent;
}(BaseMetaComponent));
/**
 * @abstract
 */
export { FormMetaComponent };
if (false) {
    /** @type {?} */
    FormMetaComponent.prototype.validationResult;
    /**
     * @type {?}
     * @protected
     */
    FormMetaComponent.prototype.profileCodeService;
    /**
     * @abstract
     * @protected
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @return {?}
     */
    FormMetaComponent.prototype.onValueChange = function (column, value, groupId, index) { };
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    FormMetaComponent.prototype.onValidateAll = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    FormMetaComponent.prototype.btnClick = function (type, id) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybU1ldGFDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL21ldGEvY29tcG9uZW50cy9Gb3JtTWV0YUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFJdkQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7QUFHNUI7Ozs7SUFBZ0QsNkNBQWlCO0lBSzdELDJCQUNJLFdBQXdCLEVBQ2Qsa0JBQXNDLEVBQ2hELE1BQW1CLEVBQ25CLFFBQXVCO1FBSjNCLFlBTUksa0JBQU0sV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsU0FDdkM7UUFMYSx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSjdDLHNCQUFnQixHQUFxQixJQUFJLGdCQUFnQixFQUFFLENBQUM7O0lBU25FLENBQUM7Ozs7SUFFTSxvQ0FBUTs7O0lBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDM0MsaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7Ozs7SUFPTSxvQ0FBUTs7Ozs7OztJQUFmLFVBQWdCLE1BQWMsRUFBRSxLQUFVLEVBQUUsT0FBc0IsRUFBRSxLQUFrQjtRQUExQyx3QkFBQSxFQUFBLGNBQXNCO1FBQUUsc0JBQUEsRUFBQSxTQUFpQixDQUFDO1FBQ2xGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDOztZQUNw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QU8sRUFBRSxDQUFDLENBQUMsRUFBdEcsQ0FBc0csRUFBQyxDQUFDOztZQUVySSxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxDQUFjO2dCQUNwQyxPQUFPO29CQUNILEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFO29CQUNmLElBQUksRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzdFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDMUMsQ0FBQTtZQUNMLENBQUMsRUFBQyxDQUFBO1FBRU4sT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQyxBQXRNRCxDQUFnRCxpQkFBaUIsR0FzTWhFOzs7Ozs7O0lBbk1HLDZDQUFtRTs7Ozs7SUFJL0QsK0NBQWdEOzs7Ozs7Ozs7O0lBYXBELHlGQUFtRzs7Ozs7O0lBQ25HLDREQUE0Qzs7Ozs7Ozs7SUFDNUMsK0RBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1ldGFDb21wb25lbnQgfSBmcm9tICcuL0Jhc2VNZXRhQ29tcG9uZW50JztcbmltcG9ydCB7IE1ldGFTZXJ2aWNlIH0gZnJvbSAnLi4vTWV0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFZhbGlkYXRpb25SZXN1bHQgfSBmcm9tICcuLi8uLi91dGlscy9WYWxpZGF0aW9uUmVzdWx0JztcbmltcG9ydCB7IE1ldGFWYWxpZCB9IGZyb20gJy4uL3BhcnNlci9iZWFuL01ldGFWYWxpZCc7XG5pbXBvcnQgeyBNZXRhQ29sdW1uIH0gZnJvbSAnLi4vcGFyc2VyL2JlYW4vTWV0YUNvbHVtbic7XG5pbXBvcnQgeyBQcm9maWxlQ29kZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3Byb2ZpbGUvcHJvZmlsZS1jb2RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0T3B0aW9uIH0gZnJvbSAnLi4vLi4vYmVhbi9TZWxlY3RPcHRpb24nO1xuaW1wb3J0IHsgUHJvZmlsZUNvZGUgfSBmcm9tICcuLi8uLi9iZWFuL1Byb2ZpbGVDb2RlJztcbmltcG9ydCB7IElNZXRhRXhlY3V0b3IgfSBmcm9tICcuLi9leGVjdXRvci9NZXRhRXhlY3V0b3IuaW50ZXJmYWNlJztcbmltcG9ydCB7IElNZXRhUGFyc2VyIH0gZnJvbSAnLi4vcGFyc2VyL01ldGFQYXJzZXIuaW50ZXJmYWNlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm9ybU1ldGFDb21wb25lbnQgZXh0ZW5kcyBCYXNlTWV0YUNvbXBvbmVudCB7XG5cblxuICAgIHB1YmxpYyB2YWxpZGF0aW9uUmVzdWx0OiBWYWxpZGF0aW9uUmVzdWx0ID0gbmV3IFZhbGlkYXRpb25SZXN1bHQoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBtZXRhU2VydmljZTogTWV0YVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICAgICAgcGFyc2VyOiBJTWV0YVBhcnNlcixcbiAgICAgICAgZXhlY3V0b3I6IElNZXRhRXhlY3V0b3JcbiAgICApIHtcbiAgICAgICAgc3VwZXIobWV0YVNlcnZpY2UsIHBhcnNlciwgZXhlY3V0b3IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGb3JtTWV0YUNvbXBvbmVudCBuZ09uaW5pdCFcIik7XG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb25WYWx1ZUNoYW5nZShjb2x1bW46IHN0cmluZywgdmFsdWU6IGFueSwgZ3JvdXBJZDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb25WYWxpZGF0ZUFsbCgpOiBib29sZWFuO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBidG5DbGljayh0eXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiB2b2lkO1xuXG4gICAgcHVibGljIG9uQ2hhbmdlKGNvbHVtbjogc3RyaW5nLCB2YWx1ZTogYW55LCBncm91cElEOiBzdHJpbmcgPSBudWxsLCBpbmRleDogbnVtYmVyID0gLTEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkNoYW5nZTpcIiwgY29sdW1uLCB2YWx1ZSwgZ3JvdXBJRCwgaW5kZXgpO1xuICAgICAgICBsZXQgaXNHcm91cCA9IChncm91cElEICYmIGluZGV4ID49IDApO1xuICAgICAgICBsZXQgY29sdW1uSUQgPSBpc0dyb3VwID8gY29sdW1uIDogKGNvbHVtbiArIGluZGV4LnRvU3RyaW5nKCkpO1xuICAgICAgICBsZXQgdmFsaWRSZXNwID0gdGhpcy52YWxpZChjb2x1bW4sIHZhbHVlLCBpc0dyb3VwKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWxpZFJlc3A6XCIsIHZhbGlkUmVzcCk7XG5cbiAgICAgICAgaWYgKHZhbGlkUmVzcClcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcihjb2x1bW5JRCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcChjb2x1bW5JRCwgdmFsaWRSZXNwLm1lc3NhZ2UpO1xuXG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZShjb2x1bW4sIHZhbHVlLCBncm91cElELCBpbmRleCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkKGNvbHVtbjogc3RyaW5nLCB2YWx1ZTogYW55LCBpc0dyb3VwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWxpZDpcIiwgY29sdW1uLCB2YWx1ZSwgaXNHcm91cCk7XG4gICAgICAgIGxldCByZXNwID0gbmV3IE1ldGFWYWxpZChjb2x1bW4sIHRydWUsIFwiXCIpO1xuICAgICAgICBsZXQgY29sOiBNZXRhQ29sdW1uO1xuICAgICAgICBpZiAoaXNHcm91cCkge1xuICAgICAgICAgICAgbGV0IGdyb3VwQ29sID0gdGhpcy5tZXRhQ29uZmlnLkNvbHVtbnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHggPT4geC50eXBlID09PSAnR3JvdXAnKVxuICAgICAgICAgICAgICAgIC5tYXAoeCA9PiB4Lmdyb3VwQ29sdW1ucyk7XG4gICAgICAgICAgICBjb2wgPSBfLmZsYXR0ZW4oZ3JvdXBDb2wpLmZpbHRlcih4ID0+IHguaWQgPT09IGNvbHVtbilbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY29sID0gdGhpcy5tZXRhQ29uZmlnLkNvbHVtbnMuZmlsdGVyKHggPT4geC5pZCA9PT0gY29sdW1uKVswXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWxpZCBjb2w6XCIsIGNvbCk7XG4gICAgICAgIGlmIChjb2wudHlwZSA9PT0gJ0lucHV0Jykge1xuICAgICAgICAgICAgaWYgKGNvbC5yZXF1aXJlZCAmJiAhdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXNwLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXNwLm1lc3NhZ2UgPSBjb2wuaWQgKyBcIl9yZXF1aXJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbC50eXBlID09PSAnU2VsZWN0Jykge1xuICAgICAgICAgICAgaWYgKGNvbC5yZXF1aXJlZCAmJiAodmFsdWUgPT09ICcnIHx8ICF2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXNwLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXNwLm1lc3NhZ2UgPSBjb2wuaWQgKyBcIl9yZXF1aXJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmFsaWRBbGwoKSB7XG4gICAgICAgIC8vQ29sdW1uIFJlc3VsdFxuICAgICAgICBsZXQgdmFsaWRSZXN1bHQgPSB0aGlzLm1ldGFDb25maWcuQ29sdW1ucy5maWx0ZXIoeCA9PiB4LnR5cGUgIT09IFwiR3JvdXBcIilcbiAgICAgICAgICAgIC5tYXAoKGNvbDogTWV0YUNvbHVtbikgPT4gdGhpcy52YWxpZChjb2wuaWQsIHRoaXMuX2RhdGFbY29sLmlkXSkpXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4gIXguaXNWYWxpZCk7XG5cbiAgICAgICAgdGhpcy5tZXRhQ29uZmlnLkNvbHVtbnMuZmlsdGVyKHggPT4geC50eXBlID09PSBcIkdyb3VwXCIpXG4gICAgICAgICAgICAuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwSWQgPSBncm91cC5pZDtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW2dyb3VwSWRdLmZvckVhY2goKGVsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRSZXN1bHQgPSB2YWxpZFJlc3VsdC5jb25jYXQoZ3JvdXAuZ3JvdXBDb2x1bW5zLm1hcChjb2wgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkUmVzcCA9IHRoaXMudmFsaWQoY29sLmlkLCBlbGVbY29sLmlkXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZFJlc3AuY29sSUQgPSBjb2wuaWQgKyBpbmRleC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkUmVzcDtcbiAgICAgICAgICAgICAgICAgICAgfSkuZmlsdGVyKHggPT4gIXguaXNWYWxpZCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsaWRBbGwgcmVzdWx0OlwiLCB2YWxpZFJlc3VsdCk7XG4gICAgICAgIHJldHVybiB2YWxpZFJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb25CdG5DbGljayh0eXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RhdGFbaWQgKyAnQnRuJ10pXG4gICAgICAgICAgICB0aGlzLl9kYXRhW2lkICsgJ0J0biddLmRpc2FibGUgPSB0cnVlO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5jbGVhckVycm9yTWFwKCk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy52YWxpZEFsbCgpO1xuICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcChlcnIuY29sSUQsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAodGhpcy5vblZhbGlkYXRlQWxsKCkgJiYgcmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vQ0FMTCBTQVZFIEFQSVxuICAgICAgICAgICAgICAgIGxldCByZXNwID0gYXdhaXQgdGhpcy5zYXZlRGF0YSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2F2ZSBkYXRhIHJlc3A6XCIsIHJlc3ApO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQ2xpY2sodHlwZSwgaWQpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhW2lkICsgJ0J0biddKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW2lkICsgJ0J0biddLmRpc2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtpZCArICdCdG4nXS5kaXNhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5idG5DbGljayh0eXBlLCBpZCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIHNhdmVEYXRhKCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5leGVjdXRvci5zYXZlRGF0YSh0aGlzLm1ldGFDb25maWcsIHRoaXMuX2RhdGEsIHRoaXMuZ2V0TWV0YVBhcmFtcygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Hcm91cFJlbW92ZShncm91cE5hbWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9kYXRhW2dyb3VwTmFtZV0gPSB0aGlzLl9kYXRhW2dyb3VwTmFtZV0uZmlsdGVyKCh4LCBpKSA9PiBpICE9IGluZGV4KTtcbiAgICAgICAgbGV0IGdyb3VwX2NvbCA9IHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zLmZpbHRlcih4ID0+IHguaWQgPT09IGdyb3VwTmFtZSlbMF0uZ3JvdXBDb2x1bW5zO1xuICAgICAgICBncm91cF9jb2wuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LmRlbGV0ZUVycm9yKGNvbC5pZCArIGluZGV4LnRvU3RyaW5nKCkpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvbkdyb3VwQWRkKGdyb3VwTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBncm91cF9jb2wgPSB0aGlzLm1ldGFDb25maWcuQ29sdW1ucy5maWx0ZXIoeCA9PiB4LmlkID09PSBncm91cE5hbWUpWzBdLmdyb3VwQ29sdW1ucztcbiAgICAgICAgbGV0IGtleXMgPSBncm91cF9jb2wubWFwKHggPT4geC5pZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwia2V5czpcIiwga2V5cyk7XG4gICAgICAgIGxldCBuZXdPYmogPSBrZXlzLm1hcCh4ID0+IHtcbiAgICAgICAgICAgIGxldCB5ID0ge307XG4gICAgICAgICAgICBsZXQgZGVmYXVsdFZhbCA9IGdyb3VwX2NvbC5maWx0ZXIoeiA9PiB6LmlkID09PSB4KVswXS5kZWZhdWx0O1xuICAgICAgICAgICAgeVt4XSA9IGRlZmF1bHRWYWw7XG4gICAgICAgICAgICByZXR1cm4geVxuICAgICAgICB9KS5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWNjLCBjdXJyZW50KTtcbiAgICAgICAgfSwge30pXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR3JvdXBBZGQgbmV3T2JqOlwiLCBuZXdPYmopO1xuICAgICAgICB0aGlzLl9kYXRhW2dyb3VwTmFtZV0gPSBbLi4udGhpcy5fZGF0YVtncm91cE5hbWVdLCBuZXdPYmpdO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGF0YVVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuYWRkQnRuQXR0cigpO1xuICAgICAgICB0aGlzLmZldGNoT3B0aW9ucygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmV0Y2hPcHRpb25zKCkge1xuICAgICAgICB0aGlzLm1ldGFDb25maWcuQ29sdW1uc1xuICAgICAgICAgICAgLmZpbHRlcih4ID0+IHgub3B0aW9uUmVmICYmIHgub3B0aW9uUmVmLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAubWFwKHggPT4gdGhpcy5jcmVhdGVPcHRpb24oeCkpXG4gICAgICAgICAgICAuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtvcHRpb24ua2V5XSA9IG9wdGlvbi52YWw7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIGxldCBncm91cENvbCA9IHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geC50eXBlID09PSAnR3JvdXAnKVxuICAgICAgICAgICAgLm1hcCh4ID0+IHguZ3JvdXBDb2x1bW5zLmZpbHRlcih5ID0+IHkub3B0aW9uUmVmICYmIHkub3B0aW9uUmVmLmxlbmd0aCA+IDApKTtcblxuICAgICAgICBsZXQgZ3JvdXBPcHQgPSBfLmZsYXRNYXAoZ3JvdXBDb2wsIHggPT4geC5tYXAoeSA9PiB0aGlzLmNyZWF0ZU9wdGlvbih5KSkpO1xuICAgICAgICBncm91cE9wdC5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2RhdGFbb3B0aW9uLmtleV0gPSBvcHRpb24udmFsO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRCdG5BdHRyKCkge1xuICAgICAgICB0aGlzLm1ldGFDb25maWcuRm9vdGVyLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGlmIChlbGUudHlwZSA9PT0gJ3N1Ym1pdCcgfHwgZWxlLnR5cGUgPT09ICdidXR0b24nKVxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFbZWxlLmlkICsgXCJCdG5cIl0gPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9LCBlbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZU9wdGlvbihjb2x1bW46IE1ldGFDb2x1bW4pIHtcbiAgICAgICAgbGV0IHJlc3AgPSB7XG4gICAgICAgICAgICBrZXk6IGNvbHVtbi5pZCArICdPcHRpb24nLFxuICAgICAgICAgICAgdmFsOiBbXVxuICAgICAgICB9XG4gICAgICAgIGxldCBjb2RlQXJyYXkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoY29sdW1uLm9wdGlvblJlZik7XG4gICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ1NlbGVjdCcpXG4gICAgICAgICAgICByZXNwLnZhbCA9IGNvZGVBcnJheVxuICAgICAgICAgICAgICAgIC5tYXAoKHg6IFByb2ZpbGVDb2RlKSA9PiBuZXcgU2VsZWN0T3B0aW9uKHguZ2V0Q29kZSgpLCB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KGNvbHVtbi5vcHRpb25SZWYsIHguZ2V0Q29kZSgpKSkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXNwLnZhbCA9IGNvZGVBcnJheS5tYXAoKHg6IFByb2ZpbGVDb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHguZ2V0Q29kZSgpLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KGNvbHVtbi5vcHRpb25SZWYsIHguZ2V0Q29kZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBKU09OLnBhcnNlKHguZ2V0QXJndW1lbnRzKCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzcDtcbiAgICB9XG5cbn0iXX0=