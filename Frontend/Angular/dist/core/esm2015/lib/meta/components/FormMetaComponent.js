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
export class FormMetaComponent extends BaseMetaComponent {
    /**
     * @param {?} metaService
     * @param {?} profileCodeService
     * @param {?} parser
     * @param {?} executor
     */
    constructor(metaService, profileCodeService, parser, executor) {
        super(metaService, parser, executor);
        this.profileCodeService = profileCodeService;
        this.validationResult = new ValidationResult();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log("FormMetaComponent ngOninit!");
        super.ngOnInit();
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?=} groupID
     * @param {?=} index
     * @return {?}
     */
    onChange(column, value, groupID = null, index = -1) {
        console.log("onChange:", column, value, groupID, index);
        /** @type {?} */
        let isGroup = (groupID && index >= 0);
        /** @type {?} */
        let columnID = isGroup ? column : (column + index.toString());
        /** @type {?} */
        let validResp = this.valid(column, value, isGroup);
        console.log("validResp:", validResp);
        if (validResp)
            this.validationResult.deleteError(columnID);
        else
            this.validationResult.setErrorMap(columnID, validResp.message);
        this.onValueChange(column, value, groupID, index);
    }
    /**
     * @private
     * @param {?} column
     * @param {?} value
     * @param {?=} isGroup
     * @return {?}
     */
    valid(column, value, isGroup = false) {
        console.log("valid:", column, value, isGroup);
        /** @type {?} */
        let resp = new MetaValid(column, true, "");
        /** @type {?} */
        let col;
        if (isGroup) {
            /** @type {?} */
            let groupCol = this.metaConfig.Columns
                .filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.type === 'Group'))
                .map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.groupColumns));
            col = _.flatten(groupCol).filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.id === column))[0];
        }
        else
            col = this.metaConfig.Columns.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.id === column))[0];
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
    }
    /**
     * @private
     * @return {?}
     */
    validAll() {
        //Column Result
        /** @type {?} */
        let validResult = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type !== "Group"))
            .map((/**
         * @param {?} col
         * @return {?}
         */
        (col) => this.valid(col.id, this._data[col.id])))
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !x.isValid));
        this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === "Group"))
            .forEach((/**
         * @param {?} group
         * @return {?}
         */
        group => {
            /** @type {?} */
            let groupId = group.id;
            this._data[groupId].forEach((/**
             * @param {?} ele
             * @param {?} index
             * @return {?}
             */
            (ele, index) => {
                validResult = validResult.concat(group.groupColumns.map((/**
                 * @param {?} col
                 * @return {?}
                 */
                col => {
                    /** @type {?} */
                    let validResp = this.valid(col.id, ele[col.id], true);
                    validResp.colID = col.id + index.toString();
                    return validResp;
                })).filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => !x.isValid)));
            }));
        }));
        console.log("validAll result:", validResult);
        return validResult;
    }
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    onBtnClick(type, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this._data[id + 'Btn'])
                this._data[id + 'Btn'].disable = true;
            if (type === 'submit') {
                this.validationResult.clearErrorMap();
                /** @type {?} */
                let result = this.validAll();
                result.forEach((/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    this.validationResult.setErrorMap(err.colID, err.message);
                }));
                if (this.onValidateAll() && result.length === 0) {
                    //CALL SAVE API
                    /** @type {?} */
                    let resp = yield this.saveData();
                    console.log("save data resp:", resp);
                    this.btnClick(type, id);
                    if (this._data[id + 'Btn'])
                        this._data[id + 'Btn'].disable = true;
                }
                else {
                    this._data[id + 'Btn'].disable = false;
                }
            }
            else
                this.btnClick(type, id);
        });
    }
    /**
     * @protected
     * @return {?}
     */
    saveData() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.executor.saveData(this.metaConfig, this._data, this.getMetaParams());
        });
    }
    /**
     * @param {?} groupName
     * @param {?} index
     * @return {?}
     */
    onGroupRemove(groupName, index) {
        this._data[groupName] = this._data[groupName].filter((/**
         * @param {?} x
         * @param {?} i
         * @return {?}
         */
        (x, i) => i != index));
        /** @type {?} */
        let group_col = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id === groupName))[0].groupColumns;
        group_col.forEach((/**
         * @param {?} col
         * @return {?}
         */
        col => {
            this.validationResult.deleteError(col.id + index.toString());
        }));
    }
    /**
     * @param {?} groupName
     * @return {?}
     */
    onGroupAdd(groupName) {
        /** @type {?} */
        let group_col = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id === groupName))[0].groupColumns;
        /** @type {?} */
        let keys = group_col.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id));
        console.log("keys:", keys);
        /** @type {?} */
        let newObj = keys.map((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            /** @type {?} */
            let y = {};
            /** @type {?} */
            let defaultVal = group_col.filter((/**
             * @param {?} z
             * @return {?}
             */
            z => z.id === x))[0].default;
            y[x] = defaultVal;
            return y;
        })).reduce((/**
         * @param {?} acc
         * @param {?} current
         * @return {?}
         */
        (acc, current) => {
            return Object.assign(acc, current);
        }), {});
        console.log("GroupAdd newObj:", newObj);
        this._data[groupName] = [...this._data[groupName], newObj];
    }
    /**
     * @protected
     * @return {?}
     */
    onDataUpdated() {
        this.addBtnAttr();
        this.fetchOptions();
    }
    /**
     * @private
     * @return {?}
     */
    fetchOptions() {
        this.metaConfig.Columns
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.optionRef && x.optionRef.length > 0))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        x => this.createOption(x)))
            .forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            this._data[option.key] = option.val;
        }));
        /** @type {?} */
        let groupCol = this.metaConfig.Columns
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === 'Group'))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.groupColumns.filter((/**
         * @param {?} y
         * @return {?}
         */
        y => y.optionRef && y.optionRef.length > 0))));
        /** @type {?} */
        let groupOpt = _.flatMap(groupCol, (/**
         * @param {?} x
         * @return {?}
         */
        x => x.map((/**
         * @param {?} y
         * @return {?}
         */
        y => this.createOption(y)))));
        groupOpt.forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            this._data[option.key] = option.val;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    addBtnAttr() {
        this.metaConfig.Footer.forEach((/**
         * @param {?} ele
         * @return {?}
         */
        ele => {
            if (ele.type === 'submit' || ele.type === 'button')
                this._data[ele.id + "Btn"] = Object.assign({
                    disable: false
                }, ele);
        }));
    }
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    createOption(column) {
        /** @type {?} */
        let resp = {
            key: column.id + 'Option',
            val: []
        };
        /** @type {?} */
        let codeArray = this.profileCodeService.getCodeArray(column.optionRef);
        if (column.type === 'Select')
            resp.val = codeArray
                .map((/**
             * @param {?} x
             * @return {?}
             */
            (x) => new SelectOption(x.getCode(), this.profileCodeService.convertCode2Text(column.optionRef, x.getCode()))));
        else
            resp.val = codeArray.map((/**
             * @param {?} x
             * @return {?}
             */
            (x) => {
                return {
                    id: x.getCode(),
                    name: this.profileCodeService.convertCode2Text(column.optionRef, x.getCode()),
                    arguments: JSON.parse(x.getArguments())
                };
            }));
        return resp;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybU1ldGFDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL21ldGEvY29tcG9uZW50cy9Gb3JtTWV0YUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFJdkQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7QUFHNUIsTUFBTSx3QkFBa0MsU0FBUSxpQkFBaUI7Ozs7Ozs7SUFLN0QsWUFDSSxXQUF3QixFQUNkLGtCQUFzQyxFQUNoRCxNQUFtQixFQUNuQixRQUF1QjtRQUV2QixLQUFLLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUozQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSjdDLHFCQUFnQixHQUFxQixJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFTbkUsQ0FBQzs7OztJQUVNLFFBQVE7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDM0MsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7Ozs7O0lBT00sUUFBUSxDQUFDLE1BQWMsRUFBRSxLQUFVLEVBQUUsVUFBa0IsSUFBSSxFQUFFLFFBQWdCLENBQUMsQ0FBQztRQUNsRixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzs7WUFDcEQsT0FBTyxHQUFHLENBQUMsT0FBTyxJQUFJLEtBQUssSUFBSSxDQUFD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Ozs7Ozs7Ozs7SUFhcEQseUZBQW1HOzs7Ozs7SUFDbkcsNERBQTRDOzs7Ozs7OztJQUM1QywrREFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTWV0YUNvbXBvbmVudCB9IGZyb20gJy4vQmFzZU1ldGFDb21wb25lbnQnO1xuaW1wb3J0IHsgTWV0YVNlcnZpY2UgfSBmcm9tICcuLi9NZXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmFsaWRhdGlvblJlc3VsdCB9IGZyb20gJy4uLy4uL3V0aWxzL1ZhbGlkYXRpb25SZXN1bHQnO1xuaW1wb3J0IHsgTWV0YVZhbGlkIH0gZnJvbSAnLi4vcGFyc2VyL2JlYW4vTWV0YVZhbGlkJztcbmltcG9ydCB7IE1ldGFDb2x1bW4gfSBmcm9tICcuLi9wYXJzZXIvYmVhbi9NZXRhQ29sdW1uJztcbmltcG9ydCB7IFByb2ZpbGVDb2RlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvcHJvZmlsZS9wcm9maWxlLWNvZGUuc2VydmljZSc7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb24gfSBmcm9tICcuLi8uLi9iZWFuL1NlbGVjdE9wdGlvbic7XG5pbXBvcnQgeyBQcm9maWxlQ29kZSB9IGZyb20gJy4uLy4uL2JlYW4vUHJvZmlsZUNvZGUnO1xuaW1wb3J0IHsgSU1ldGFFeGVjdXRvciB9IGZyb20gJy4uL2V4ZWN1dG9yL01ldGFFeGVjdXRvci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSU1ldGFQYXJzZXIgfSBmcm9tICcuLi9wYXJzZXIvTWV0YVBhcnNlci5pbnRlcmZhY2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGb3JtTWV0YUNvbXBvbmVudCBleHRlbmRzIEJhc2VNZXRhQ29tcG9uZW50IHtcblxuXG4gICAgcHVibGljIHZhbGlkYXRpb25SZXN1bHQ6IFZhbGlkYXRpb25SZXN1bHQgPSBuZXcgVmFsaWRhdGlvblJlc3VsdCgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG1ldGFTZXJ2aWNlOiBNZXRhU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlLFxuICAgICAgICBwYXJzZXI6IElNZXRhUGFyc2VyLFxuICAgICAgICBleGVjdXRvcjogSU1ldGFFeGVjdXRvclxuICAgICkge1xuICAgICAgICBzdXBlcihtZXRhU2VydmljZSwgcGFyc2VyLCBleGVjdXRvcik7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZvcm1NZXRhQ29tcG9uZW50IG5nT25pbml0IVwiKTtcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvblZhbHVlQ2hhbmdlKGNvbHVtbjogc3RyaW5nLCB2YWx1ZTogYW55LCBncm91cElkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvblZhbGlkYXRlQWxsKCk6IGJvb2xlYW47XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGJ0bkNsaWNrKHR5cGU6IHN0cmluZywgaWQ6IHN0cmluZyk6IHZvaWQ7XG5cbiAgICBwdWJsaWMgb25DaGFuZ2UoY29sdW1uOiBzdHJpbmcsIHZhbHVlOiBhbnksIGdyb3VwSUQ6IHN0cmluZyA9IG51bGwsIGluZGV4OiBudW1iZXIgPSAtMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2hhbmdlOlwiLCBjb2x1bW4sIHZhbHVlLCBncm91cElELCBpbmRleCk7XG4gICAgICAgIGxldCBpc0dyb3VwID0gKGdyb3VwSUQgJiYgaW5kZXggPj0gMCk7XG4gICAgICAgIGxldCBjb2x1bW5JRCA9IGlzR3JvdXAgPyBjb2x1bW4gOiAoY29sdW1uICsgaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgICAgIGxldCB2YWxpZFJlc3AgPSB0aGlzLnZhbGlkKGNvbHVtbiwgdmFsdWUsIGlzR3JvdXApO1xuICAgICAgICBjb25zb2xlLmxvZyhcInZhbGlkUmVzcDpcIiwgdmFsaWRSZXNwKTtcblxuICAgICAgICBpZiAodmFsaWRSZXNwKVxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LmRlbGV0ZUVycm9yKGNvbHVtbklEKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKGNvbHVtbklELCB2YWxpZFJlc3AubWVzc2FnZSk7XG5cbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKGNvbHVtbiwgdmFsdWUsIGdyb3VwSUQsIGluZGV4KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdmFsaWQoY29sdW1uOiBzdHJpbmcsIHZhbHVlOiBhbnksIGlzR3JvdXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInZhbGlkOlwiLCBjb2x1bW4sIHZhbHVlLCBpc0dyb3VwKTtcbiAgICAgICAgbGV0IHJlc3AgPSBuZXcgTWV0YVZhbGlkKGNvbHVtbiwgdHJ1ZSwgXCJcIik7XG4gICAgICAgIGxldCBjb2w6IE1ldGFDb2x1bW47XG4gICAgICAgIGlmIChpc0dyb3VwKSB7XG4gICAgICAgICAgICBsZXQgZ3JvdXBDb2wgPSB0aGlzLm1ldGFDb25maWcuQ29sdW1uc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdHcm91cCcpXG4gICAgICAgICAgICAgICAgLm1hcCh4ID0+IHguZ3JvdXBDb2x1bW5zKTtcbiAgICAgICAgICAgIGNvbCA9IF8uZmxhdHRlbihncm91cENvbCkuZmlsdGVyKHggPT4geC5pZCA9PT0gY29sdW1uKVswXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjb2wgPSB0aGlzLm1ldGFDb25maWcuQ29sdW1ucy5maWx0ZXIoeCA9PiB4LmlkID09PSBjb2x1bW4pWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyhcInZhbGlkIGNvbDpcIiwgY29sKTtcbiAgICAgICAgaWYgKGNvbC50eXBlID09PSAnSW5wdXQnKSB7XG4gICAgICAgICAgICBpZiAoY29sLnJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJlc3AuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJlc3AubWVzc2FnZSA9IGNvbC5pZCArIFwiX3JlcXVpcmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29sLnR5cGUgPT09ICdTZWxlY3QnKSB7XG4gICAgICAgICAgICBpZiAoY29sLnJlcXVpcmVkICYmICh2YWx1ZSA9PT0gJycgfHwgIXZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJlc3AuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJlc3AubWVzc2FnZSA9IGNvbC5pZCArIFwiX3JlcXVpcmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3A7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWxpZEFsbCgpIHtcbiAgICAgICAgLy9Db2x1bW4gUmVzdWx0XG4gICAgICAgIGxldCB2YWxpZFJlc3VsdCA9IHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zLmZpbHRlcih4ID0+IHgudHlwZSAhPT0gXCJHcm91cFwiKVxuICAgICAgICAgICAgLm1hcCgoY29sOiBNZXRhQ29sdW1uKSA9PiB0aGlzLnZhbGlkKGNvbC5pZCwgdGhpcy5fZGF0YVtjb2wuaWRdKSlcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiAheC5pc1ZhbGlkKTtcblxuICAgICAgICB0aGlzLm1ldGFDb25maWcuQ29sdW1ucy5maWx0ZXIoeCA9PiB4LnR5cGUgPT09IFwiR3JvdXBcIilcbiAgICAgICAgICAgIC5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdXBJZCA9IGdyb3VwLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFbZ3JvdXBJZF0uZm9yRWFjaCgoZWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZFJlc3VsdCA9IHZhbGlkUmVzdWx0LmNvbmNhdChncm91cC5ncm91cENvbHVtbnMubWFwKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWRSZXNwID0gdGhpcy52YWxpZChjb2wuaWQsIGVsZVtjb2wuaWRdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkUmVzcC5jb2xJRCA9IGNvbC5pZCArIGluZGV4LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRSZXNwO1xuICAgICAgICAgICAgICAgICAgICB9KS5maWx0ZXIoeCA9PiAheC5pc1ZhbGlkKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWxpZEFsbCByZXN1bHQ6XCIsIHZhbGlkUmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHZhbGlkUmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBvbkJ0bkNsaWNrKHR5cGU6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fZGF0YVtpZCArICdCdG4nXSlcbiAgICAgICAgICAgIHRoaXMuX2RhdGFbaWQgKyAnQnRuJ10uZGlzYWJsZSA9IHRydWU7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LmNsZWFyRXJyb3JNYXAoKTtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnZhbGlkQWxsKCk7XG4gICAgICAgICAgICByZXN1bHQuZm9yRWFjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKGVyci5jb2xJRCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmICh0aGlzLm9uVmFsaWRhdGVBbGwoKSAmJiByZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy9DQUxMIFNBVkUgQVBJXG4gICAgICAgICAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCB0aGlzLnNhdmVEYXRhKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlIGRhdGEgcmVzcDpcIiwgcmVzcCk7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5DbGljayh0eXBlLCBpZCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RhdGFbaWQgKyAnQnRuJ10pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFbaWQgKyAnQnRuJ10uZGlzYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW2lkICsgJ0J0biddLmRpc2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmJ0bkNsaWNrKHR5cGUsIGlkKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgc2F2ZURhdGEoKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmV4ZWN1dG9yLnNhdmVEYXRhKHRoaXMubWV0YUNvbmZpZywgdGhpcy5fZGF0YSwgdGhpcy5nZXRNZXRhUGFyYW1zKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkdyb3VwUmVtb3ZlKGdyb3VwTmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2RhdGFbZ3JvdXBOYW1lXSA9IHRoaXMuX2RhdGFbZ3JvdXBOYW1lXS5maWx0ZXIoKHgsIGkpID0+IGkgIT0gaW5kZXgpO1xuICAgICAgICBsZXQgZ3JvdXBfY29sID0gdGhpcy5tZXRhQ29uZmlnLkNvbHVtbnMuZmlsdGVyKHggPT4geC5pZCA9PT0gZ3JvdXBOYW1lKVswXS5ncm91cENvbHVtbnM7XG4gICAgICAgIGdyb3VwX2NvbC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25SZXN1bHQuZGVsZXRlRXJyb3IoY29sLmlkICsgaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIG9uR3JvdXBBZGQoZ3JvdXBOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGdyb3VwX2NvbCA9IHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zLmZpbHRlcih4ID0+IHguaWQgPT09IGdyb3VwTmFtZSlbMF0uZ3JvdXBDb2x1bW5zO1xuICAgICAgICBsZXQga2V5cyA9IGdyb3VwX2NvbC5tYXAoeCA9PiB4LmlkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJrZXlzOlwiLCBrZXlzKTtcbiAgICAgICAgbGV0IG5ld09iaiA9IGtleXMubWFwKHggPT4ge1xuICAgICAgICAgICAgbGV0IHkgPSB7fTtcbiAgICAgICAgICAgIGxldCBkZWZhdWx0VmFsID0gZ3JvdXBfY29sLmZpbHRlcih6ID0+IHouaWQgPT09IHgpWzBdLmRlZmF1bHQ7XG4gICAgICAgICAgICB5W3hdID0gZGVmYXVsdFZhbDtcbiAgICAgICAgICAgIHJldHVybiB5XG4gICAgICAgIH0pLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhY2MsIGN1cnJlbnQpO1xuICAgICAgICB9LCB7fSlcbiAgICAgICAgY29uc29sZS5sb2coXCJHcm91cEFkZCBuZXdPYmo6XCIsIG5ld09iaik7XG4gICAgICAgIHRoaXMuX2RhdGFbZ3JvdXBOYW1lXSA9IFsuLi50aGlzLl9kYXRhW2dyb3VwTmFtZV0sIG5ld09ial07XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EYXRhVXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5hZGRCdG5BdHRyKCk7XG4gICAgICAgIHRoaXMuZmV0Y2hPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaE9wdGlvbnMoKSB7XG4gICAgICAgIHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geC5vcHRpb25SZWYgJiYgeC5vcHRpb25SZWYubGVuZ3RoID4gMClcbiAgICAgICAgICAgIC5tYXAoeCA9PiB0aGlzLmNyZWF0ZU9wdGlvbih4KSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW29wdGlvbi5rZXldID0gb3B0aW9uLnZhbDtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGdyb3VwQ29sID0gdGhpcy5tZXRhQ29uZmlnLkNvbHVtbnNcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdHcm91cCcpXG4gICAgICAgICAgICAubWFwKHggPT4geC5ncm91cENvbHVtbnMuZmlsdGVyKHkgPT4geS5vcHRpb25SZWYgJiYgeS5vcHRpb25SZWYubGVuZ3RoID4gMCkpO1xuXG4gICAgICAgIGxldCBncm91cE9wdCA9IF8uZmxhdE1hcChncm91cENvbCwgeCA9PiB4Lm1hcCh5ID0+IHRoaXMuY3JlYXRlT3B0aW9uKHkpKSk7XG4gICAgICAgIGdyb3VwT3B0LmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZGF0YVtvcHRpb24ua2V5XSA9IG9wdGlvbi52YWw7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEJ0bkF0dHIoKSB7XG4gICAgICAgIHRoaXMubWV0YUNvbmZpZy5Gb290ZXIuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZS50eXBlID09PSAnc3VibWl0JyB8fCBlbGUudHlwZSA9PT0gJ2J1dHRvbicpXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtlbGUuaWQgKyBcIkJ0blwiXSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sIGVsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlT3B0aW9uKGNvbHVtbjogTWV0YUNvbHVtbikge1xuICAgICAgICBsZXQgcmVzcCA9IHtcbiAgICAgICAgICAgIGtleTogY29sdW1uLmlkICsgJ09wdGlvbicsXG4gICAgICAgICAgICB2YWw6IFtdXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvZGVBcnJheSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheShjb2x1bW4ub3B0aW9uUmVmKTtcbiAgICAgICAgaWYgKGNvbHVtbi50eXBlID09PSAnU2VsZWN0JylcbiAgICAgICAgICAgIHJlc3AudmFsID0gY29kZUFycmF5XG4gICAgICAgICAgICAgICAgLm1hcCgoeDogUHJvZmlsZUNvZGUpID0+IG5ldyBTZWxlY3RPcHRpb24oeC5nZXRDb2RlKCksIHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoY29sdW1uLm9wdGlvblJlZiwgeC5nZXRDb2RlKCkpKSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJlc3AudmFsID0gY29kZUFycmF5Lm1hcCgoeDogUHJvZmlsZUNvZGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogeC5nZXRDb2RlKCksXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoY29sdW1uLm9wdGlvblJlZiwgeC5nZXRDb2RlKCkpLFxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IEpTT04ucGFyc2UoeC5nZXRBcmd1bWVudHMoKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiByZXNwO1xuICAgIH1cblxufSJdfQ==